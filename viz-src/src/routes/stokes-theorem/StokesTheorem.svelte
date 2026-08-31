<!-- Visualizes Stokes' Theorem with line integral (left) and curl integral (right) side by side. -->

<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import { DoubleFigure, Katex } from "@helblazer811/tempus-ui";
  import { downloadBlob, streamingVideoExport } from "@helblazer811/tempus";
  import LineIntegral from "./LineIntegral.svelte";
  import CurlIntegral from "./CurlIntegral.svelte";
  import { createClosedCurve, createWavyVectorField } from "./stokes_theorem";

  // ----------------------------------------------------------------
  // Props
  // ----------------------------------------------------------------

  // Caption slot
  export let children = undefined;

  // Layout
  export let width = 800;
  export let height = 350;
  export let gap = 20;
  export let backgroundVisible = false;

  // Animation
  export let playingByDefault = true;

  // Curve parameters (irregular blob shape)
  export let baseRadius = 1.3;
  export let curveAmplitudes = [0.3, 0.22, 0.15];
  export let curvePhases = [0, 0.7, 1.3];
  export let curveFrequencies = [1, 2, 3];

  // Vector field parameters (wavy field like divergence theorem)
  export let wavyAmplitude = 0.3;
  export let wavyFrequency = 1.5;

  // Surface styling (orange tint like divergence theorem)
  export let surfaceOpacity = 0.7;
  export let surfaceFillColor = "#fff7ed"; // Slight orange tint
  export let surfaceStrokeColor = "#f97316"; // Orange
  export let surfaceStrokeWidth = 3;

  // ----------------------------------------------------------------
  // State
  // ----------------------------------------------------------------

  // Visibility state passed to DoubleFigure
  let figureIsActive;
  let lineIntegral: any;
  let curlIntegral: any;

  // Compute canvas dimensions
  $: canvasWidth = Math.floor((width - gap) / 2);
  $: canvasHeight = height;

  // Create the curve and field functions
  $: curveFn = createClosedCurve({
    baseRadius,
    amplitudes: curveAmplitudes,
    phases: curvePhases,
    frequencies: curveFrequencies,
  });

  $: vectorFieldFn = createWavyVectorField({
    amplitude: wavyAmplitude,
    frequency: wavyFrequency,
  });

  async function exportStokesPreview(): Promise<void> {
    const deadline = Date.now() + 30_000;
    while (
      (!lineIntegral?.isCaptureReady?.() || !curlIntegral?.isCaptureReady?.())
      && Date.now() < deadline
    ) {
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    if (!lineIntegral?.isCaptureReady?.() || !curlIntegral?.isCaptureReady?.()) {
      throw new Error("Stokes' Theorem visualization did not finish initializing");
    }

    const captureCanvas = document.createElement('canvas');
    captureCanvas.width = 1600;
    captureCanvas.height = 900;
    const ctx = captureCanvas.getContext('2d');
    if (!ctx) throw new Error("Could not create Stokes' Theorem capture canvas");

    const lineWasPlaying = lineIntegral.pauseForCapture();
    const curlWasPlaying = curlIntegral.pauseForCapture();
    const frameCount = 192;
    const fps = 24;
    try {
      const [video] = await streamingVideoExport(
        [captureCanvas], frameCount, fps, 'webm',
        frameIndex => {
          const t = frameIndex / (frameCount - 1);
          const lineCanvas = lineIntegral.renderCaptureFrame(t);
          const curlCanvas = curlIntegral.renderCaptureFrame(t);
          if (!lineCanvas || !curlCanvas) return;

          ctx.fillStyle = '#ffffff';
          ctx.fillRect(0, 0, captureCanvas.width, captureCanvas.height);
          ctx.fillStyle = '#4b5563';
          ctx.textAlign = 'center';
          ctx.font = '600 56px serif';
          ctx.fillText("Stokes' Theorem", 800, 70);
          ctx.font = '32px sans-serif';
          ctx.fillText('Line integral around C', 400, 135);
          ctx.fillText('Curl integral over S', 1200, 135);
          ctx.drawImage(lineCanvas, 25, 165, 750, 675);
          ctx.drawImage(curlCanvas, 825, 165, 750, 675);
        },
        { bitrate: 9_000_000, backgroundColor: '#ffffff' }
      );
      downloadBlob(video, 'stokes-theorem.webm');
    } finally {
      lineIntegral.resumeAfterCapture(lineWasPlaying);
      curlIntegral.resumeAfterCapture(curlWasPlaying);
    }
  }

  onMount(() => {
    (window as any).__exportStokesPreview = exportStokesPreview;
  });

  onDestroy(() => {
    if (typeof window !== 'undefined') delete (window as any).__exportStokesPreview;
  });
</script>

<h2 class="stokes-theorem-title">A Visualization of Stokes' Theorem</h2>

<div class="stokes-theorem-equation">
  <Katex
    math={"\\qquad \\oint_C \\mathbf{F} \\cdot d\\mathbf{r} \\qquad\\qquad = \\qquad\\qquad \\iint_S (\\nabla \\times \\mathbf{F}) \\cdot dS"}
    displayMode={true}
  />
</div>

<DoubleFigure {gap} {backgroundVisible} bind:isActive={figureIsActive}>
  {#snippet left()}
    <LineIntegral
      bind:this={lineIntegral}
      {curveFn}
      {vectorFieldFn}
      width={canvasWidth}
      height={canvasHeight}
      {surfaceOpacity}
      {surfaceFillColor}
      {surfaceStrokeColor}
      {surfaceStrokeWidth}
      {playingByDefault}
      isActive={figureIsActive}
      labelText="C"
    />
  {/snippet}

  {#snippet right()}
    <CurlIntegral
      bind:this={curlIntegral}
      {curveFn}
      {vectorFieldFn}
      width={canvasWidth}
      height={canvasHeight}
      {surfaceOpacity}
      {surfaceFillColor}
      {surfaceStrokeColor}
      {surfaceStrokeWidth}
      {playingByDefault}
      isActive={figureIsActive}
      labelText="S"
    />
  {/snippet}

  {#snippet caption()}
    {@render children?.()}
  {/snippet}
</DoubleFigure>

<style>
  .stokes-theorem-title {
    text-align: center;
    margin-bottom: 0.5em;
    color: #4b5563;
    font-weight: 600;
    font-size: 1.9rem;
  }

  .stokes-theorem-equation {
    text-align: center;
    margin-bottom: 0.75em;
    color: #4b5563;
  }
</style>
