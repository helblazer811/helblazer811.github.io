<script lang="ts">
  import CoreBackpropagation from './CoreBackpropagation.svelte';
</script>

<svelte:head>
  <title>Backpropagation Through Time: Full and Truncated — Alec Helbling</title>
  <meta name="description" content="A visual comparison of full and truncated backpropagation through recurrent applications of a shared core." />
</svelte:head>

<article class="backprop-explainer">
  <header>
    <a href="https://alechelbling.com/blog.html">Visualizations</a>
    <h1>Backpropagation Through Time: Full and Truncated</h1>
    <p class="byline">A visual explainer by Alec Helbling</p>
  </header>
  <div class="comparison" aria-label="Full backpropagation through time above truncated backpropagation through time">
    <CoreBackpropagation />
    <CoreBackpropagation truncated={true} />
  </div>
  <div class="prose">
    <p>Full backpropagation through time carries gradients from the loss through every recurrent application of the shared core. This allows later losses to shape earlier hidden states, but requires retaining or recomputing activations across the rollout.</p>
    <p>Truncated backpropagation limits the backward path to one or a few recurrent applications. Here, gradients pass through only the final application, stopping at the detached hidden state. This reduces training costs, but prevents the loss from directly teaching earlier applications what information to preserve for later computation.</p>
  </div>
</article>

<style>
  :global(body:has(.backprop-explainer) .toc-sidebar),
  :global(body:has(.backprop-explainer) .toc-fab),
  :global(body:has(.backprop-explainer) .top-nav) { display: none; }
  :global(body:has(.backprop-explainer) .page-container) { max-width: 1200px; margin-inline: auto; padding: 2rem 1rem; contain: none; }
  .backprop-explainer { --figure-title-size: 1.1875rem; --figure-title-color: #333; --figure-title-weight: 400; }
  header, .prose { max-width: 720px; margin: 0 auto; }
  h1 { font-size: 2rem; line-height: 1.2; margin-bottom: .5rem; }
  .byline { color: #777; }
  .comparison { width: 100%; max-width: 720px; aspect-ratio: 8 / 5; background: white; display: flex; flex-direction: column; justify-content: center; gap: 2rem; margin: 2rem auto; padding: 2%; box-sizing: border-box; }
  .comparison :global(figure) { margin: 0; width: 100%; }
  .prose { padding-bottom: 2rem; }
</style>
