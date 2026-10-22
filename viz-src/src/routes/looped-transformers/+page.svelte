<script lang="ts">
  import SequenceRecurrence from './SequenceRecurrence.svelte';
  import TransformerRecurrence from './TransformerRecurrence.svelte';
</script>
<svelte:head><title>Looped Transformers: From Sequence Recurrence to Depth Recurrence — Alec Helbling</title></svelte:head>
<article class="recurrence-explainer">
  <header><a href="https://alechelbling.com/blog.html">Visualizations</a><h1>Looped Transformers: From Sequence Recurrence to Depth Recurrence</h1><p class="byline">A visual explainer by Alec Helbling</p></header>
  <div class="comparison" aria-label="Synchronized comparison of recurrence over token positions and computational depth">
    <SequenceRecurrence />
    <TransformerRecurrence />
  </div>
  <div class="prose">
<p>Let’s start with the once-dominant relatives of looped transformers: <a href="https://arxiv.org/abs/1409.3215">sequence RNNs</a>. These models apply a shared recurrent cell one token at a time, passing a hidden state from one position to the next. <strong>Their recurrence runs over token positions.</strong></p>
<p>But what if we kept representations for all tokens and repeatedly updated them together? With self-attention, each token can gather information from the others at every iteration. We can then apply the same attention-based block again, <strong>refining those representations recurrently over computational depth rather than sequence position.</strong> This is the central idea behind looped transformers, popularized by <a href="https://arxiv.org/abs/1807.03819">Universal Transformers</a>.</p>
  </div>
</article>
<style>
  :global(body:has(.recurrence-explainer) .toc-sidebar),
  :global(body:has(.recurrence-explainer) .toc-fab),
  :global(body:has(.recurrence-explainer) .top-nav) { display: none; }
  :global(body:has(.recurrence-explainer) .page-container) { max-width: 1200px; margin-inline: auto; padding: 2rem 1rem; contain: none; }
  header, .prose { max-width: 720px; margin: 0 auto; }
  h1 { font-size: 2rem; line-height: 1.2; margin-bottom: .5rem; }
  .byline { color: #777; }
  .comparison { width: 100%; max-width: 720px; aspect-ratio: 8 / 5; background: white; display: flex; flex-direction: column; justify-content: center; margin: 2rem auto; padding: 1%; box-sizing: border-box; }
  .comparison :global(figure) { margin: 0; min-height: 0; flex: 1; }
  .comparison :global(svg) { height: 100%; width: 100%; }
  .prose { padding-bottom: 2rem; }
</style>
