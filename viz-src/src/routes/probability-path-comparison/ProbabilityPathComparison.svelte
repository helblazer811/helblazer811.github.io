<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import { Player, Timeline, TimeSlider, drawTrajectories } from "@helblazer811/tempus-ui";
  import { downloadBlob, streamingVideoExport } from "@helblazer811/tempus";
  import { base } from "$app/paths";

  const WIDTH = 1920;
  const HEIGHT = 1080;
  const FPS = 30;
  const FRAME_COUNT = 240;
  const DURATION_SECONDS = FRAME_COUNT / FPS;
  const MOVING_COUNT = 150;
  const POINT_RADIUS = 7.5;
  const ORANGE = "#f17720";
  const BLUE = "#3b82f6";
  const MOVING_GRAY = "#8f8b86";
  const INK = "#3c3c3c";
  const PANEL_SIZE = 940;
  const PLOT_INSET = 50;
  const PLOT_WIDTH = PANEL_SIZE - 2 * PLOT_INSET;
  const PLOT_TOP = 165;
  const PLOT_HEIGHT = 710;
  const COORDINATE_DOMAIN = 2.75;

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
  let previousT = 0;
  const highlightRandom = mulberry32(1919);
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
    const componentRadius = 2.2;
    const component = Math.floor(random() * 5);
    const angle = -Math.PI / 2 + (component * 2 * Math.PI) / 5;
    const noise = gaussian(random);
    return [
      componentRadius * Math.cos(angle) + componentSigma * noise[0],
      -(componentRadius * Math.sin(angle) + componentSigma * noise[1]),
    ];
  }

  function clipTrajectoriesToStartingRadius(
    trajectories: Point[][],
    radius: number,
  ): Point[][] {
    if (trajectories.length === 0) return trajectories;
    const validIndices = trajectories[0]
      .map((point, index) => Math.hypot(point[0], point[1]) <= radius ? index : -1)
      .filter((index) => index >= 0);
    return trajectories.map((timestep) => validIndices.map((index) => timestep[index]));
  }

  function prepareSamples() {
    const movingRandom = mulberry32(811);
    const candidateCount = 220;
    const candidateSource = Array.from({ length: candidateCount }, () => gaussian(movingRandom));
    const candidateTarget = Array.from({ length: candidateCount }, () => sampleTarget(movingRandom));
    const clippedTrajectories = clipTrajectoriesToStartingRadius(
      [candidateSource, candidateTarget],
      2.35,
    );
    source = clippedTrajectories[0].slice(0, MOVING_COUNT);
    target = clippedTrajectories[1].slice(0, MOVING_COUNT);
    targetBackdrop = target;
    chooseHighlightedTrajectory();
  }

  function chooseHighlightedTrajectory() {
    const eligibleIndices = source
      .map((point, index) => ({ point, index }))
      .filter(({ point, index }) =>
        Math.hypot(point[0], point[1]) <= 0.75
        && Math.abs(point[0] * target[index][1] - point[1] * target[index][0]) >= 0.65
      )
      .map(({ index }) => index);
    const candidates = eligibleIndices.length > 0
      ? eligibleIndices
      : source.map((_, index) => index);
    selectedIndex = candidates[Math.floor(highlightRandom() * candidates.length)];
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
    const toPixel = (point: Point): Point => [
      panelX + PANEL_SIZE / 2 + (point[0] / (2 * COORDINATE_DOMAIN)) * PLOT_WIDTH,
      PLOT_TOP + PLOT_HEIGHT / 2 - (point[1] / (2 * COORDINATE_DOMAIN)) * PLOT_HEIGHT,
    ];

    context.textAlign = "center";
    context.fillStyle = INK;
    context.font = "600 62px Inter, Arial, sans-serif";
    context.fillText(title, panelX + PANEL_SIZE / 2, 118);
    context.save();
    context.filter = "brightness(0.65)";
    const equationWidth = Math.min(equationImage.width, PANEL_SIZE * 0.9);
    const equationHeight = equationImage.height * (equationWidth / equationImage.width);
    const equationBottomMargin = 30;
    context.drawImage(
      equationImage,
      panelX + (PANEL_SIZE - equationWidth) / 2,
      HEIGHT - equationBottomMargin - equationHeight,
      equationWidth,
      equationHeight,
    );
    context.restore();

    context.save();
    roundedRect(
      context,
      panelX + PLOT_INSET,
      PLOT_TOP,
      PLOT_WIDTH,
      PLOT_HEIGHT,
      16,
    );
    context.clip();

    const [sourceWeight, targetWeight] = pathWeights(t, variancePreserving);

    context.fillStyle = MOVING_GRAY;
    context.globalAlpha = 0.55;
    for (let index = 0; index < source.length; index++) {
      if (index === selectedIndex) continue;
      const point: Point = [
        sourceWeight * source[index][0] + targetWeight * target[index][0],
        sourceWeight * source[index][1] + targetWeight * target[index][1],
      ];
      const [x, y] = toPixel(point);
      context.beginPath();
      context.arc(x, y, POINT_RADIUS, 0, 2 * Math.PI);
      context.fill();
    }

    context.fillStyle = BLUE;
    context.globalAlpha = 0.25;
    for (let index = 0; index < targetBackdrop.length; index++) {
      if (index === selectedIndex) continue;
      const point = targetBackdrop[index];
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
    context.lineWidth = 4;
    context.strokeStyle = "#ffffff";
    context.fillStyle = ORANGE;
    for (const [x, y] of [sourcePixel, targetPixel]) {
      context.beginPath();
      context.arc(x, y, 12, 0, 2 * Math.PI);
      context.fill();
      context.stroke();
    }
    drawTrajectories(context, [selectedPath], t * 99, {
      strokeWidth: 8,
      color: ORANGE,
      opacity: 0.95,
      pointRadius: 13,
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
    drawPanel(ctx, 10, "Linear Path", equationImages[0], t, false);
    drawPanel(ctx, 970, "Variance-Preserving Path", equationImages[1], t, true);
  }

  function setupTimeline() {
    const timeline = Timeline.from<AnimationState>({
      duration: DURATION_SECONDS,
      initialState: { time: 0 },
      clips: [],
    });
    player = new Player(timeline, { looping: true });
    player.onTick((t: number) => {
      if (t < previousT) chooseHighlightedTrajectory();
      previousT = t;
      draw(t);
    });
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
      downloadBlob(video, "linear-vs-variance-preserving-path-1920x1080.webm");
    } finally {
      exporting = false;
      player.seek(savedT);
      draw(savedT);
      if (wasPlaying) player.play();
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
      {exporting ? "Exporting…" : "Export 1920 × 1080 video"}
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
    aspect-ratio: 16 / 9;
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
