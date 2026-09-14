<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import { Player, Timeline, TimeSlider, drawTrajectories } from "@helblazer811/tempus-ui";
  import { downloadBlob, streamingVideoExport } from "@helblazer811/tempus";
  import { base } from "$app/paths";

  const WIDTH = 1920;
  const HEIGHT = 1200;
  const FPS = 30;
  const FRAME_COUNT = 240;
  const DURATION_SECONDS = FRAME_COUNT / FPS;
  const MOVING_COUNT = 150;
  const POINT_RADIUS = 7.5;
  const ORANGE = "#f17720";
  const INK = "#252525";

  type Point = [number, number];
  type AnimationState = { time: number };

  let canvas: HTMLCanvasElement | null = $state(null);
  let ctx: CanvasRenderingContext2D | null = $state(null);
  let player: Player<AnimationState> | null = $state(null);
  let exporting = $state(false);
  let source: Point[] = [];
  let target: Point[] = [];
  let targetBackdrop: Point[] = [];
  let selectedIndex = 0;
  let equationImages: HTMLImageElement[] = [];

  function mulberry32(seed: number) {
    return () => {
      let value = (seed += 0x6d2b79f5);
      value = Math.imul(value ^ (value >>> 15), value | 1);
      value ^= value + Math.imul(value ^ (value >>> 7), value | 61);
      return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
    };
  }

  function gaussian(random: () => number): Point {
    const radius = Math.sqrt(-2 * Math.log(Math.max(random(), 1e-12)));
    const angle = 2 * Math.PI * random();
    return [radius * Math.cos(angle), radius * Math.sin(angle)];
  }

  function sampleTarget(random: () => number): Point {
    const componentSigma = 0.18;
    const componentRadius = 1.8;
    const component = Math.floor(random() * 5);
    const angle = -Math.PI / 2 + (component * 2 * Math.PI) / 5;
    const noise = gaussian(random);
    return [
      componentRadius * Math.cos(angle) + componentSigma * noise[0],
      componentRadius * Math.sin(angle) + componentSigma * noise[1],
    ];
  }

  function prepareSamples() {
    const movingRandom = mulberry32(811);
    source = Array.from({ length: MOVING_COUNT }, () => gaussian(movingRandom));
    target = Array.from({ length: MOVING_COUNT }, () => sampleTarget(movingRandom));
    targetBackdrop = target;
    selectedIndex = source.reduce((best, point, index) => {
      const score = Math.hypot(point[0], point[1]) <= 0.65
        ? Math.abs(point[0] * target[index][1] - point[1] * target[index][0])
        : -1;
      const bestPoint = source[best];
      const bestScore = Math.hypot(bestPoint[0], bestPoint[1]) <= 0.65
        ? Math.abs(bestPoint[0] * target[best][1] - bestPoint[1] * target[best][0])
        : -1;
      return score > bestScore ? index : best;
    }, 0);
  }

  function pathWeights(t: number, variancePreserving: boolean): [number, number] {
    if (!variancePreserving) return [1 - t, t];
    return [Math.cos((Math.PI / 2) * t), Math.sin((Math.PI / 2) * t)];
  }

  function loadImage(url: string): Promise<HTMLImageElement> {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.onload = () => resolve(image);
      image.onerror = () => reject(new Error("Could not load KaTeX equation"));
      image.src = url;
    });
  }

  function roundedRect(
    context: CanvasRenderingContext2D,
    x: number,
    y: number,
    width: number,
    height: number,
    radius: number,
  ) {
    context.beginPath();
    context.roundRect(x, y, width, height, radius);
  }

  function drawPanel(
    context: CanvasRenderingContext2D,
    panelX: number,
    title: string,
    equationImage: HTMLImageElement,
    t: number,
    variancePreserving: boolean,
  ) {
    const panelY = 120;
    const panelSize = 940;
    const plotInset = 34;
    const plotSize = panelSize - 2 * plotInset;
    const domain = 2.75;
    const toPixel = (point: Point): Point => [
      panelX + panelSize / 2 + (point[0] / (2 * domain)) * plotSize,
      panelY + panelSize / 2 - (point[1] / (2 * domain)) * plotSize,
    ];

    context.textAlign = "center";
    context.fillStyle = INK;
    context.font = "600 60px Inter, Arial, sans-serif";
    context.fillText(title, panelX + panelSize / 2, 78);
    context.save();
    context.filter = "brightness(0.65)";
    context.drawImage(equationImage, panelX, 1035, panelSize, 100);
    context.restore();

    context.save();
    roundedRect(context, panelX + 2, panelY + 2, panelSize - 4, panelSize - 4, 16);
    context.clip();

    const [sourceWeight, targetWeight] = pathWeights(t, variancePreserving);

    context.fillStyle = ORANGE;
    context.globalAlpha = 0.72;
    for (let index = 0; index < source.length; index++) {
      const point: Point = [
        sourceWeight * source[index][0] + targetWeight * target[index][0],
        sourceWeight * source[index][1] + targetWeight * target[index][1],
      ];
      const [x, y] = toPixel(point);
      context.beginPath();
      context.arc(x, y, POINT_RADIUS, 0, 2 * Math.PI);
      context.fill();
    }

    context.fillStyle = "#8f8b86";
    context.globalAlpha = 0.35;
    for (const point of targetBackdrop) {
      const [x, y] = toPixel(point);
      context.beginPath();
      context.arc(x, y, POINT_RADIUS, 0, 2 * Math.PI);
      context.fill();
    }

    const selectedPath: number[][] = [];
    for (let step = 0; step <= 100; step++) {
      const pathT = step / 100;
      const [a, b] = pathWeights(pathT, variancePreserving);
      const pathPoint: Point = [
        a * source[selectedIndex][0] + b * target[selectedIndex][0],
        a * source[selectedIndex][1] + b * target[selectedIndex][1],
      ];
      const [x, y] = toPixel(pathPoint);
      selectedPath.push([x, y]);
    }

    const sourcePixel = toPixel(source[selectedIndex]);
    const targetPixel = toPixel(target[selectedIndex]);
    context.globalAlpha = 1;
    context.lineWidth = 5;
    context.strokeStyle = "#c9570e";
    context.fillStyle = "#ffffff";
    for (const [x, y] of [sourcePixel, targetPixel]) {
      context.beginPath();
      context.arc(x, y, 10, 0, 2 * Math.PI);
      context.fill();
      context.stroke();
    }
    drawTrajectories(context, [selectedPath], t * 99, {
      strokeWidth: 5,
      color: "#c9570e",
      opacity: 0.95,
      pointRadius: 11,
      showPreview: true,
      previewOpacity: 0.18,
      showHeadMarker: true,
      outline: {
        color: "#ffffff",
        strokeWidth: 4,
        opacity: 1,
      },
    });
    context.restore();
  }

  function draw(rawT: number) {
    if (!ctx) return;
    const t = rawT;
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, WIDTH, HEIGHT);

    if (equationImages.length !== 2) return;
    drawPanel(ctx, 10, "Linear Interpolant", equationImages[0], t, false);
    drawPanel(ctx, 970, "Variance-Preserving Path", equationImages[1], t, true);

    const sliderX = 280;
    const sliderY = 1180;
    const sliderWidth = 1360;
    ctx.lineCap = "round";
    ctx.lineWidth = 8;
    ctx.strokeStyle = "#dedbd7";
    ctx.beginPath();
    ctx.moveTo(sliderX, sliderY);
    ctx.lineTo(sliderX + sliderWidth, sliderY);
    ctx.stroke();
    ctx.strokeStyle = ORANGE;
    ctx.beginPath();
    ctx.moveTo(sliderX, sliderY);
    ctx.lineTo(sliderX + sliderWidth * t, sliderY);
    ctx.stroke();
    ctx.fillStyle = ORANGE;
    ctx.beginPath();
    ctx.arc(sliderX + sliderWidth * t, sliderY, 13, 0, 2 * Math.PI);
    ctx.fill();

  }

  function setupTimeline() {
    const timeline = Timeline.from<AnimationState>({
      duration: DURATION_SECONDS,
      initialState: { time: 0 },
      clips: [],
    });
    player = new Player(timeline, { looping: true });
    player.onTick((t: number) => draw(t));
    draw(0);
    player.play();
  }

  async function exportVideo() {
    if (!player || !canvas || exporting) return;
    exporting = true;
    const savedT = player.t;
    const wasPlaying = player.isPlaying;
    player.pause();
    try {
      const [video] = await streamingVideoExport(
        [canvas],
        FRAME_COUNT,
        FPS,
        "webm",
        (frameIndex) => {
          const t = frameIndex / (FRAME_COUNT - 1);
          player!.seek(t);
          draw(t);
        },
        { bitrate: 16_000_000, backgroundColor: "#ffffff" },
      );
      downloadBlob(video, "linear-vs-variance-preserving-path-1920x1200.webm");
    } finally {
      player.seek(savedT);
      draw(savedT);
      if (wasPlaying) player.play();
      exporting = false;
    }
  }

  onMount(async () => {
    if (!canvas) return;
    ctx = canvas.getContext("2d");
    prepareSamples();
    equationImages = await Promise.all([
      loadImage(`${base}/probability-path-comparison/linear-equation.png`),
      loadImage(`${base}/probability-path-comparison/vp-equation.png`),
    ]);
    setupTimeline();
    (window as any).__exportProbabilityPaths = exportVideo;
  });

  onDestroy(() => {
    player?.dispose();
    if (typeof window !== "undefined") delete (window as any).__exportProbabilityPaths;
  });
</script>

<div class="probability-paths-figure">
  <canvas
    bind:this={canvas}
    width={WIDTH}
    height={HEIGHT}
    aria-label="Animated comparison of linear and variance-preserving probability paths"
  ></canvas>
  <div class="controls">
    <div class="timeline">
      <TimeSlider timeline={player} color={ORANGE} />
    </div>
    <button type="button" onclick={exportVideo} disabled={exporting}>
      {exporting ? "Exporting…" : "Export 1920 × 1200 video"}
    </button>
  </div>
</div>

<style>
  .probability-paths-figure {
    width: min(96vw, 1600px);
    margin: 1.5rem 50% 0;
    transform: translateX(-50%);
  }

  canvas {
    display: block;
    width: 100%;
    height: auto;
    aspect-ratio: 8 / 5;
    background: white;
  }

  .controls {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 0.75rem;
  }

  .timeline {
    flex: 1;
    min-width: 0;
  }

  button {
    border: 1px solid #d9d4ce;
    border-radius: 5px;
    background: #fff;
    color: #444;
    padding: 0.58rem 0.85rem;
    font: 600 0.82rem Inter, Arial, sans-serif;
    cursor: pointer;
    white-space: nowrap;
  }

  button:hover:not(:disabled) {
    border-color: #f17720;
    color: #d75f0d;
  }

  button:disabled {
    cursor: wait;
    opacity: 0.6;
  }

  @media (max-width: 700px) {
    .controls {
      align-items: stretch;
      flex-direction: column;
    }
  }
</style>
