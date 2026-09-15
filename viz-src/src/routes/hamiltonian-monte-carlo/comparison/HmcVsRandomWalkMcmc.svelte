<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import { Player, Timeline, TimeSlider, drawTrajectories } from "@helblazer811/tempus-ui";
  import { downloadBlob, streamingVideoExport } from "@helblazer811/tempus";

  const WIDTH = 1920;
  const HEIGHT = 1080;
  const FPS = 30;
  const FRAME_COUNT = 720;
  const DURATION_SECONDS = FRAME_COUNT / FPS;
  const CHAIN_LENGTH = 140;
  const ORANGE = "#f17720";
  const INK = "#3c3c3c";
  const BACKGROUND = "#ffffff";
  const PANEL_SIZE = 940;
  const PLOT_INSET = 50;
  const PLOT_WIDTH = PANEL_SIZE - 2 * PLOT_INSET;
  const TITLE_Y = 116;
  const PLOT_TOP = 155;
  const PLOT_HEIGHT = 855;
  const X_DOMAIN = 1.2;
  const Y_DOMAIN = 1.85;
  const TARGET_SIGMA = 0.16;
  const CURVE_SAMPLE_COUNT = 160;
  const INITIAL_POINT: Point = [0, -1.2];

  type Point = [number, number];
  type AcceptedVisit = { pathIndex: number; point: Point };
  type ChainRun = { path: Point[]; acceptedVisits: AcceptedVisit[] };
  type AnimationState = { time: number };

  let canvas: HTMLCanvasElement | null = $state(null);
  let ctx: CanvasRenderingContext2D | null = $state(null);
  let player: Player<AnimationState> | null = $state(null);
  let exporting = $state(false);
  let randomWalkRun: ChainRun = { path: [], acceptedVisits: [] };
  let hmcRun: ChainRun = { path: [], acceptedVisits: [] };
  let heatmap: HTMLCanvasElement | null = null;
  const targetCurve: Point[] = Array.from({ length: CURVE_SAMPLE_COUNT }, (_, index) => {
    const angle = (2 * Math.PI * index) / CURVE_SAMPLE_COUNT;
    const sine = Math.sin(angle);
    const cosine = Math.cos(angle);
    const denominator = 1 + sine * sine;
    return [1.55 * sine * cosine / denominator, 1.2 * cosine / denominator];
  });
  const targetWeights = targetCurve.map(([x, y]) => {
    const distanceSquared = x * x + y * y;
    return 1 - 0.55 * Math.exp(-distanceSquared / (2 * 0.22 ** 2));
  });

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

  function logDensity(point: Point) {
    const inverseTwoVariance = 1 / (2 * TARGET_SIGMA * TARGET_SIGMA);
    let maximum = -Infinity;
    const logits = new Array<number>(targetCurve.length);
    for (let index = 0; index < targetCurve.length; index++) {
      const dx = point[0] - targetCurve[index][0];
      const dy = point[1] - targetCurve[index][1];
      const value = -(dx * dx + dy * dy) * inverseTwoVariance + Math.log(targetWeights[index]);
      logits[index] = value;
      if (value > maximum) maximum = value;
    }
    let sum = 0;
    for (const value of logits) sum += Math.exp(value - maximum);
    return maximum + Math.log(sum / targetCurve.length);
  }

  function gradientLogDensity(point: Point): Point {
    const inverseVariance = 1 / (TARGET_SIGMA * TARGET_SIGMA);
    let maximum = -Infinity;
    const logits = new Array<number>(targetCurve.length);
    for (let index = 0; index < targetCurve.length; index++) {
      const dx = point[0] - targetCurve[index][0];
      const dy = point[1] - targetCurve[index][1];
      const value = -0.5 * (dx * dx + dy * dy) * inverseVariance + Math.log(targetWeights[index]);
      logits[index] = value;
      if (value > maximum) maximum = value;
    }
    let totalWeight = 0;
    let gradientX = 0;
    let gradientY = 0;
    for (let index = 0; index < targetCurve.length; index++) {
      const weight = Math.exp(logits[index] - maximum);
      totalWeight += weight;
      gradientX += weight * (targetCurve[index][0] - point[0]) * inverseVariance;
      gradientY += weight * (targetCurve[index][1] - point[1]) * inverseVariance;
    }
    return [gradientX / totalWeight, gradientY / totalWeight];
  }

  function randomWalkMcmc(random: () => number): ChainRun {
    const path: Point[] = [[...INITIAL_POINT]];
    const acceptedVisits: AcceptedVisit[] = [];
    let current: Point = [...path[0]];
    for (let index = 1; index < CHAIN_LENGTH; index++) {
      const noise = gaussian(random);
      const proposal: Point = [current[0] + 0.085 * noise[0], current[1] + 0.085 * noise[1]];
      const acceptance = Math.min(1, Math.exp(logDensity(proposal) - logDensity(current)));
      if (random() < acceptance) {
        current = proposal;
        acceptedVisits.push({ pathIndex: path.length, point: [...current] });
      }
      path.push([...current]);
    }
    return { path, acceptedVisits };
  }

  function hamiltonianMonteCarlo(random: () => number): ChainRun {
    const path: Point[] = [[...INITIAL_POINT]];
    const acceptedVisits: AcceptedVisit[] = [];
    let current: Point = [...path[0]];
    const stepSize = 0.035;
    const leapfrogSteps = 28;
    for (let index = 1; index < CHAIN_LENGTH; index++) {
      const initialMomentum = gaussian(random);
      let position: Point = [...current];
      let momentum: Point = [...initialMomentum];
      const trajectory: Point[] = [[...position]];
      let gradient = gradientLogDensity(position);
      momentum = [
        momentum[0] + 0.5 * stepSize * gradient[0],
        momentum[1] + 0.5 * stepSize * gradient[1],
      ];
      for (let step = 0; step < leapfrogSteps; step++) {
        position = [
          position[0] + stepSize * momentum[0],
          position[1] + stepSize * momentum[1],
        ];
        trajectory.push([...position]);
        gradient = gradientLogDensity(position);
        const scale = step === leapfrogSteps - 1 ? 0.5 : 1;
        momentum = [
          momentum[0] + scale * stepSize * gradient[0],
          momentum[1] + scale * stepSize * gradient[1],
        ];
      }
      const currentEnergy = -logDensity(current)
        + 0.5 * (initialMomentum[0] ** 2 + initialMomentum[1] ** 2);
      const proposedEnergy = -logDensity(position)
        + 0.5 * (momentum[0] ** 2 + momentum[1] ** 2);
      if (random() < Math.min(1, Math.exp(currentEnergy - proposedEnergy))) {
        current = position;
        for (let step = 1; step < trajectory.length; step++) path.push(trajectory[step]);
        acceptedVisits.push({ pathIndex: path.length - 1, point: [...current] });
      } else {
        path.push([...current]);
      }
    }
    return { path, acceptedVisits };
  }

  function prepareChains() {
    randomWalkRun = randomWalkMcmc(mulberry32(811));
    hmcRun = hamiltonianMonteCarlo(mulberry32(811));
  }

  function makeHeatmap() {
    const map = document.createElement("canvas");
    map.width = 320;
    map.height = 360;
    const mapContext = map.getContext("2d")!;
    const image = mapContext.createImageData(map.width, map.height);
    const maximumDensity = Math.exp(logDensity(INITIAL_POINT));
    for (let y = 0; y < map.height; y++) {
      for (let x = 0; x < map.width; x++) {
        const point: Point = [
          ((x + 0.5) / map.width) * 2 * X_DOMAIN - X_DOMAIN,
          Y_DOMAIN - ((y + 0.5) / map.height) * 2 * Y_DOMAIN,
        ];
        const normalized = Math.min(1, Math.exp(logDensity(point)) / maximumDensity);
        const alpha = Math.round(255 * 0.62 * normalized ** 0.58);
        const offset = 4 * (y * map.width + x);
        image.data[offset] = 59;
        image.data[offset + 1] = 130;
        image.data[offset + 2] = 246;
        image.data[offset + 3] = alpha;
      }
    }
    mapContext.putImageData(image, 0, 0);
    heatmap = map;
  }

  function drawPanel(
    context: CanvasRenderingContext2D,
    panelX: number,
    title: string,
    run: ChainRun,
    t: number,
    trailLength: number,
  ) {
    const toPixel = (point: Point): Point => [
      panelX + PANEL_SIZE / 2 + (point[0] / (2 * X_DOMAIN)) * PLOT_WIDTH,
      PLOT_TOP + PLOT_HEIGHT / 2 - (point[1] / (2 * Y_DOMAIN)) * PLOT_HEIGHT,
    ];

    context.textAlign = "center";
    context.fillStyle = INK;
    context.font = "600 62px Inter, Arial, sans-serif";
    context.fillText(title, panelX + PANEL_SIZE / 2, TITLE_Y);

    context.save();
    context.beginPath();
    context.roundRect(panelX + PLOT_INSET, PLOT_TOP, PLOT_WIDTH, PLOT_HEIGHT, 16);
    context.clip();
    if (heatmap) {
      context.imageSmoothingEnabled = true;
      context.drawImage(heatmap, panelX + PLOT_INSET, PLOT_TOP, PLOT_WIDTH, PLOT_HEIGHT);
    }

    const progress = t * (run.path.length - 1);
    const completeIndex = Math.floor(progress);
    const fraction = progress - completeIndex;
    const visibleChain = run.path.slice(0, completeIndex + 1);
    if (completeIndex < run.path.length - 1) {
      const start = run.path[completeIndex];
      const end = run.path[completeIndex + 1];
      visibleChain.push([
        start[0] + fraction * (end[0] - start[0]),
        start[1] + fraction * (end[1] - start[1]),
      ]);
    }
    const pixelChain = visibleChain.map(toPixel);

    context.save();
    context.fillStyle = ORANGE;
    context.strokeStyle = "rgba(255, 255, 255, 0.24)";
    context.lineWidth = 4;
    for (const visit of run.acceptedVisits) {
      if (visit.pathIndex > completeIndex) break;
      const [x, y] = toPixel(visit.point);
      context.beginPath();
      context.arc(x, y, 10, 0, 2 * Math.PI);
      context.globalAlpha = 0.45;
      context.fill();
      context.globalAlpha = 1;
      context.stroke();
    }
    context.restore();

    const recentChain = pixelChain.slice(Math.max(0, pixelChain.length - trailLength));
    drawTrajectories(context, [recentChain], recentChain.length - 1, {
      strokeWidth: 10,
      color: ORANGE,
      opacity: 0.9,
      pointRadius: 16,
      showPreview: false,
      showHeadMarker: false,
    });

    const head = recentChain[recentChain.length - 1];
    if (head) {
      context.save();
      context.beginPath();
      context.arc(head[0], head[1], 16, 0, 2 * Math.PI);
      context.fillStyle = ORANGE;
      context.fill();
      context.strokeStyle = "rgba(255, 255, 255, 0.28)";
      context.lineWidth = 5;
      context.stroke();
      context.restore();
    }
    context.restore();
  }

  function draw(t: number) {
    if (!ctx) return;
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    ctx.fillStyle = BACKGROUND;
    ctx.fillRect(0, 0, WIDTH, HEIGHT);
    drawPanel(ctx, 10, "Random-Walk MCMC", randomWalkRun, t, 24);
    drawPanel(ctx, 970, "Hamiltonian Monte Carlo", hmcRun, t, 84);
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
        { bitrate: 16_000_000, backgroundColor: BACKGROUND },
      );
      downloadBlob(video, "hmc-vs-random-walk-mcmc-1920x1080.webm");
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
    prepareChains();
    makeHeatmap();
    setupTimeline();
    (window as any).__exportMcmcComparison = exportVideo;
  });

  onDestroy(() => {
    player?.dispose();
    if (typeof window !== "undefined") delete (window as any).__exportMcmcComparison;
  });
</script>

<div class="mcmc-comparison-figure">
  <canvas
    bind:this={canvas}
    width={WIDTH}
    height={HEIGHT}
    aria-label="Animated comparison of random-walk MCMC and Hamiltonian Monte Carlo"
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
  :global(body) {
    --link-color: #f17720;
    --link-hover-color: #d75f0d;
    --muted-color: #777;
    color: #3c3c3c;
    background: #ffffff;
  }

  .mcmc-comparison-figure {
    width: min(96vw, 1600px);
    margin: 1.5rem 50% 0;
    transform: translateX(-50%);
  }

  canvas {
    display: block;
    width: 100%;
    height: auto;
    aspect-ratio: 16 / 9;
    background: #ffffff;
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
    background: #ffffff;
    color: #444444;
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
