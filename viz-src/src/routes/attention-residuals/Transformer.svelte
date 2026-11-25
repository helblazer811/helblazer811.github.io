<script lang="ts">
 import { onMount } from 'svelte';
 import type { Writable } from 'svelte/store';
 interface Props { isActive?: Writable<boolean>; darkMode?: boolean }
 let { isActive }: Props = $props();
 const tokens = ['Where', 'is', 'the', 'Eiffel', '?'];
 const activeIndex = tokens.length - 1;
 const priorIndices = Array.from({length: activeIndex}, (_, i) => i);
 const centerX = (i: number) => 110 + 740 * (i + 0.5) / tokens.length;
 const layers = [
  {top:320, height:90, inside:365, input:240, output:445},
  {top:480, height:90, inside:525, input:445, output:605},
  {top:640, height:160, inside:740, input:605, output:980}
 ];
 const finalLayer=layers.length-1;
 let progress = $state(0);
 let playing = $state(true);
 const duration = 14000;
 const stageStarts = [0, 0.10, 0.20];
 const stageLengths = [0.10, 0.10, 0.80];
 const clamp = (v: number) => Math.max(0, Math.min(1, v));
 const ease = (v: number) => { const t=clamp(v); return t*t*(3-2*t); };
 const phase = (layer: number) => clamp((progress-stageStarts[layer])/stageLengths[layer]);
 const expansion = () => ease(phase(finalLayer)/.05)*(1-ease((phase(finalLayer)-.74)/.08));
 const layerInside = (layer: number) => layer===finalLayer ? layers[layer].top+45+55*expansion() : layers[layer].inside;
 function layerHeight(layer: number) {
  return layer===finalLayer ? 90+70*expansion() : layers[layer].height;
 }
 const unembeddingY = () => layers[finalLayer].top+layerHeight(finalLayer)+60;
 const outputY = () => unembeddingY()+170;
 function labelOpacity(layer: number) {
  if(layer===finalLayer) return 1;
  const start=stageStarts[layer];
  const end=layer<finalLayer ? stageStarts[layer+1] : start+stageLengths[layer]*.82;
  if(progress<start) return 1;
  if(progress<end) return 1-ease((progress-start)/.015);
  return ease((progress-end)/(layer<finalLayer ? .06 : .035));
 }
 let focus = $derived(ease((progress-stageStarts[finalLayer])/.045)*(1-ease((phase(finalLayer)-.74)/.08)));
 let finalProgress = $derived(phase(finalLayer));
 // Spotlight order explains complementary mechanisms, not sublayer execution order.
 let depthSelection = $derived(ease((finalProgress-.38)/.06));
 let depthFocus = $derived(depthSelection*(1-ease((finalProgress-.74)/.08)));
 // Linear travel spans layer boundaries, with pauses only for each layer's operation.
 const travelSpeed = (layers[1].inside-layers[0].inside)/.05;
 const finalArrival = .175+(layers[finalLayer].inside-layers[finalLayer-1].inside)/travelSpeed;
 const arrivals = [.025,.125,finalArrival];
 function flowY() {
  if(progress<.025) return layers[0].input+(layers[0].inside-layers[0].input)*progress/.025;
  for(let k=0;k<finalLayer;k++) {
   const depart=.075+k*.10;
   if(progress<depart) return layers[k].inside;
   if(progress<arrivals[k+1]) return layers[k].inside+(progress-depart)*travelSpeed;
  }
  if(finalProgress<.84) return layerInside(finalLayer);
  return layerInside(finalLayer)+(outputY()-layerInside(finalLayer))*clamp((finalProgress-.84)/.12);
 }
 let travelling = $derived(progress<.025 || (progress>=.075 && progress<.125) || (progress>=.175 && progress<finalArrival) || finalProgress>=.84);
 const arrowEnd = () => centerX(activeIndex);
 function curve(i: number, inside: number) {
  const start=centerX(i)+12, end=arrowEnd()-18, y=inside+14, bend=inside+56-i*6, approach=36-i*4;
  return `M ${start} ${y} C ${start+12} ${bend} ${end-approach} ${inside+19+approach*.72} ${end} ${inside+32}`;
 }
 function particle(i: number, inside: number, t: number) {
  const start=centerX(i)+12, end=arrowEnd()-18, y=inside+14, bend=inside+56-i*6, approach=36-i*4, u=1-t;
  return {x:u*u*u*start+3*u*u*t*(start+12)+3*u*t*t*(end-approach)+t*t*t*end,
   y:u*u*u*y+3*u*u*t*bend+3*u*t*t*(inside+19+approach*.72)+t*t*t*(inside+32)};
 }
 let currentLayer = $derived(progress < .10 ? 0 : progress < .20 ? 1 : finalLayer);
 let localProgress = $derived(phase(currentLayer));
 let narration = $derived(`Layer ${currentLayer+1}: ` + (currentLayer<finalLayer
  ? 'Information flows through the layer'
  : finalProgress<.08 ? 'Active representation enters the transformer layer'
  : finalProgress<.38 ? 'Both models use attention across tokens'
  : finalProgress<.76 ? 'Additional depth attention on the right · explanatory spotlight'
  : finalProgress<.84 ? 'Revealing the full model'
  : finalProgress<.96 ? 'Unembedding the final representation' : 'Example next-token prediction: Tower'));
 onMount(() => {
  let previous = performance.now();
  let frame: number;
  const unsubscribe = isActive?.subscribe(value => { playing = value; });
  function tick(now: number) {
   if (playing) progress = (progress + Math.min(now - previous, 100) / duration) % 1;
   previous = now;
   frame = requestAnimationFrame(tick);
  }
  frame = requestAnimationFrame(tick);
  return () => { cancelAnimationFrame(frame); unsubscribe?.(); };
 });
 function seek(event: Event) {
  progress = Number((event.currentTarget as HTMLInputElement).value);
 }
</script>

<div class="wrap">
 <svg class="diagram" viewBox="0 0 1920 1080" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two panels with three transformer layers and five positions: Where, is, the, Eiffel, and ?. Tokens flow rapidly through the first two layers, then the animation slows and spotlights the final layer. Both panels first highlight conventional attention across tokens. The left stays highlighted while the right then spotlights additional depth attention at the same token position. This spotlight sequence is explanatory, not the execution order of sublayers.">
  <rect width="1920" height="1080" fill="#151a23"/>
  <defs>
   <marker id="residual-arrow" viewBox="0 -5 10 10" refX="9" refY="0" markerWidth="4" markerHeight="4" orient="auto"><path d="M0,-5L10,0L0,5Z" fill="#ffb576"/></marker>
   <marker id="single-layer-arrow" viewBox="0 -5 10 10" refX="8" refY="0" markerWidth="5" markerHeight="5" orient="auto"><path d="M0,-5L10,0L0,5" fill="#57677f"/></marker>
   <marker id="attention-arrow" viewBox="0 -5 10 10" refX="8" refY="0" markerWidth="4" markerHeight="4" orient="auto"><path d="M0,-5L10,0L0,5" fill="#80b3ff"/></marker>
   <mask id="horizontal-focus" maskUnits="userSpaceOnUse" x="0" y="200" width="960" height="880">
    <rect x="0" y="200" width="960" height="880" fill="white"/>
    <rect x="90" y={layers[finalLayer].top} width="780" height={layerHeight(finalLayer)} rx="13" fill="black"/>
   </mask>
   <mask id="vertical-focus" maskUnits="userSpaceOnUse" x="0" y="200" width="960" height="880">
    <rect x="0" y="200" width="960" height="880" fill="white"/>
    <rect x={centerX(activeIndex)-60} y={layers[0].inside-28} width="120" height={layerInside(finalLayer)-layers[0].inside+56} rx="13" fill="black"/>
   </mask>
   <clipPath id="depth-corridor-clip"><rect x={centerX(activeIndex)-60} y={layers[0].inside-28} width="120" height={layerInside(finalLayer)-layers[0].inside+56} rx="13"/></clipPath>
   <filter id="operation-caption-halo" x="-25%" y="-100%" width="150%" height="300%" color-interpolation-filters="sRGB">
    <feMorphology in="SourceAlpha" operator="dilate" radius="4" result="haloShape"/>
    <feGaussianBlur in="haloShape" stdDeviation="3" result="haloBlur"/>
    <feFlood flood-color="#151a23" result="haloColor"/>
    <feComposite in="haloColor" in2="haloBlur" operator="in" result="darkHalo"/>
    <feGaussianBlur in="SourceAlpha" stdDeviation="2" result="glowBlur"/>
    <feFlood flood-color="#ff9d4d" flood-opacity=".22" result="glowColor"/>
    <feComposite in="glowColor" in2="glowBlur" operator="in" result="subtleGlow"/>
    <feMerge><feMergeNode in="darkHalo"/><feMergeNode in="subtleGlow"/><feMergeNode in="SourceGraphic"/></feMerge>
   </filter>
  </defs>
  {#each [0,1] as panel}
   <g transform="translate({panel*960} 0)">
    <text x="90" y="105" class="panel-caption">
     <tspan x="90"><tspan font-weight="700">{panel===0 ? 'Conventional Attention' : 'Attention Residuals'}</tspan>{panel===0 ? ' queries' : ' adds an additional'}</tspan>
     <tspan x="90" dy="52">{panel===0 ? 'across the token dimension.' : 'attention mechanism across depth.'}</tspan>
    </text>
    {#each [0,layers.length] as row}
     {@const rowY=row===0 ? 240 : outputY()}
     {#each tokens as token,i}
      {@const ready=row===0 || phase(row-1)>=.96}
      {@const active=i===activeIndex}
      {#if row===0 || active}
      <rect x={centerX(i)-(row===0 || active ? 43 : 16)} y={rowY-23} width="86" height="46" rx="7" fill={active ? (ready ? 'none' : '#1b222d') : (row===0 ? '#233b5b' : '#6ea8ff')} stroke={active ? '#ff9d4d' : '#6ea8ff'} stroke-width="2" stroke-dasharray={active && (row===0 || !ready) ? '5 5' : 'none'}/>
      {#if row===0 || ready}<text x={centerX(i)} y={rowY} class="token-label" fill={active ? '#ffb576' : '#dce8fa'}>{row===0 ? token : 'Tower'}</text>{/if}
      {/if}
     {/each}
    {/each}
    {#each [{y:unembeddingY(),label:'Unembedding'}] as bar}
     {@const unembeddingActive=finalProgress>=.84 && finalProgress<.96}
     <rect x="90" y={bar.y} width="780" height="90" rx="13" fill="#202734" stroke={unembeddingActive ? '#ff9d4d' : '#3d485a'} stroke-width="2"/>
     <text x="480" y={bar.y+45} class="layer-label" fill={unembeddingActive ? '#ffb576' : '#b1bdcf'}>{bar.label}</text>
    {/each}
    <line x1={centerX(activeIndex)} y1={unembeddingY()+93} x2={centerX(activeIndex)} y2={outputY()-28} stroke="#465369" stroke-width="3" marker-end="url(#single-layer-arrow)"/>
    {#each layers as layer,k}
     {@const t=phase(k)}
     {@const busy=t>=.08 && t<.96}
     {@const highlightOpacity=busy ? (k===finalLayer ? 1-ease((t-.78)/.06) : 1) : 0}
     {@const priorOpacity=clamp((progress-arrivals[k]+.004)/.004)}
     {@const draw=clamp((t-.08)/.12)}
     {@const moving=currentLayer===k && (k<finalLayer || t<.96)}
     {@const tokenY=flowY()}
     <rect x="90" y={layer.top} width="780" height={layerHeight(k)} rx="13" fill="#202734" stroke="#3d485a" stroke-width="2"/>
     <rect x="90" y={layer.top} width="780" height={layerHeight(k)} rx="13" fill="none" stroke="#ff9d4d" stroke-width="2" opacity={highlightOpacity}/>
     {#each tokens as _,i}
      <line x1={centerX(i)} y1={(k===0 ? 268 : layers[k-1].top+layers[k-1].height+3)} x2={centerX(i)} y2={layer.top-5} stroke="#465369" stroke-width="3" marker-end="url(#single-layer-arrow)"/>
      {#if k===layers.length-1}<line x1={centerX(i)} y1={layer.top+layerHeight(k)+3} x2={centerX(i)} y2={unembeddingY()-5} stroke="#465369" stroke-width="3" marker-end="url(#single-layer-arrow)"/>{/if}
     {/each}
     {#if k===finalLayer && t>=.08}
      <g opacity={(1-ease((t-.74)/.08))*(panel===0 ? 1 : 1-depthSelection)}>
       {#each priorIndices as i}
        <path d={curve(i,layerInside(k))} fill="none" stroke="#80b3ff" stroke-width="4" stroke-opacity=".65" pathLength="1" stroke-dasharray="1" stroke-dashoffset={1-draw}/>
        {@const travel=clamp((t-.16)/.20)}
        {@const dot=particle(i,layerInside(k),travel)}
        {#if t>=.16 && t<=.36}
         <circle cx={dot.x} cy={dot.y} r="5" fill="#a9ceff" class="blue-signal"/>
        {/if}
       {/each}
       {#if draw===1}<path d="M {arrowEnd()-18} {layerInside(k)+32} L {arrowEnd()} {layerInside(k)+19}" fill="none" stroke="#80b3ff" stroke-width="4" stroke-opacity=".65" marker-end="url(#attention-arrow)"/>{/if}
      </g>
     {/if}
    {/each}
    <!-- Foreground pass: token squares always cover connections and arrowheads. -->
    {#each layers as layer,k}
     {@const t=phase(k)}
     {@const priorOpacity=clamp((progress-arrivals[k]+.004)/.004)}
     {@const moving=currentLayer===k && (k<finalLayer || t<.96)}
     {@const tokenY=flowY()}
     {#each tokens.slice(0,activeIndex) as token,i}
      <g opacity={priorOpacity}>
       <rect x={centerX(i)-16} y={layerInside(k)-16} width="32" height="32" rx="7" fill="#6ea8ff" stroke="#6ea8ff" stroke-width="2"/>
      </g>
     {/each}
     {#if (k<finalLayer && t>=.75) || (k===finalLayer && t>=.84)}
      <rect x={centerX(activeIndex)-16} y={layerInside(k)-16} width="32" height="32" rx="7" fill="#ff9d4d" stroke="#ffc38e" stroke-width="2"/>
     {/if}
     {#if moving && travelling && (k<finalLayer || finalProgress<.84)}
      {#each priorIndices as i}
       <rect x={centerX(i)-16} y={tokenY-16} width="32" height="32" rx="7" fill="#6ea8ff" stroke="#9ac2ff" stroke-width="2" class="blue-signal"/>
      {/each}
     {/if}
     {#if k<finalLayer && t>=.32 && t<.74}
      {@const copyProgress=ease((t-.32)/.42)}
      {#each priorIndices as i}
       {@const copyX=centerX(i)+(centerX(activeIndex)-centerX(i))*copyProgress}
       <rect x={copyX-16} y={layerInside(k)-16} width="32" height="32" rx="7" fill="#8cbbff" stroke="#c0dcff" stroke-width="2" opacity={1-clamp((copyProgress-.88)/.12)} class="blue-signal"/>
      {/each}
     {/if}
     {#if moving}
      <g transform="translate({centerX(activeIndex)} {tokenY})" class="signal">
       <rect x="-16" y="-16" width="32" height="32" rx="7" fill="#ff9d4d" stroke="#ffc38e" stroke-width={t>=.68 && t<.76 ? 4 : 2}/>
      </g>
     {/if}
    {/each}
    <!-- Labels begin visible, fade during their layer's operation, and return afterward. -->
    {#each layers as layer,k}
     {#if k<finalLayer && currentLayer>k}
      <rect x="90" y={layer.top} width="780" height={layerHeight(k)} rx="13" fill="#202734" opacity=".64" pointer-events="none"/>
     {/if}
     {@const labelY=k===finalLayer ? layer.top+45-7*expansion() : layer.top+layerHeight(k)/2}
     <g opacity={labelOpacity(k)}>
      <rect x={centerX(1)-26} y={labelY-24} width={centerX(3)-centerX(1)+52} height="48" rx="6" fill="#202734"/>
      <text x="480" y={labelY} class="layer-label label-plate-text" fill="#d6dde8">Transformer Layer {k+1}</text>
     </g>
    {/each}
    {#if panel===1}
     <!-- Filled depth corridor above layer covers, below its tokens and attention paths. -->
     <g opacity={depthFocus} clip-path="url(#depth-corridor-clip)">
      <rect x={centerX(activeIndex)-60} y={layers[0].inside-28} width="120" height={layerInside(finalLayer)-layers[0].inside+56} rx="13" fill="#1b222e"/>
      {#each layers as layer,k}
       <rect x={centerX(activeIndex)-59} y={layer.top} width="118" height={layerHeight(k)} fill="#303b4d"/>
       <line x1={centerX(activeIndex)-59} x2={centerX(activeIndex)+59} y1={layer.top} y2={layer.top} stroke="#3d485a" stroke-width="1"/>
       <line x1={centerX(activeIndex)-59} x2={centerX(activeIndex)+59} y1={layer.top+layerHeight(k)} y2={layer.top+layerHeight(k)} stroke="#3d485a" stroke-width="1"/>
       <line x1={centerX(activeIndex)} x2={centerX(activeIndex)} y1={k===0 ? 268 : layers[k-1].top+layers[k-1].height+3} y2={layer.top-5} stroke="#76869c" stroke-width="3" marker-end="url(#single-layer-arrow)"/>
      {/each}
      <line x1={centerX(activeIndex)} x2={centerX(activeIndex)} y1={layers[finalLayer].top+layerHeight(finalLayer)+3} y2={unembeddingY()-5} stroke="#76869c" stroke-width="3" marker-end="url(#single-layer-arrow)"/>

      <rect x={centerX(activeIndex)-43} y="217" width="86" height="46" rx="7" fill="none" stroke="#ff9d4d" stroke-width="2" stroke-dasharray="5 5"/>
      <text x={centerX(activeIndex)} y="240" class="token-label" fill="#ffb576">{tokens[activeIndex]}</text>
      {#each layers.slice(0,finalLayer) as layer,k}
       <rect x={centerX(activeIndex)-16} y={layerInside(k)-16} width="32" height="32" rx="7" fill="#ff9d4d" stroke="#ffc38e" stroke-width="2"/>
      {/each}
      {#if finalProgress>=.84}
       <rect x={centerX(activeIndex)-16} y={layerInside(finalLayer)-16} width="32" height="32" rx="7" fill="#ff9d4d" stroke="#ffc38e" stroke-width="2"/>
      {/if}

     </g>
     {#if finalProgress>=.43 && finalProgress<.88}
      {@const draw=clamp((finalProgress-.43)/.08)}
      {@const travel=clamp((finalProgress-.51)/.21)}
      <g opacity={1-ease((finalProgress-.74)/.08)}>
       {#each layers.slice(0,finalLayer).map(layer=>layer.inside) as sourceY,i}
        {@const x=centerX(activeIndex)}
        {@const side=1}
        {@const sx=x+side*14}
        {@const sy=sourceY+12}
        {@const cx=x+side*(54-i*14)}
        {@const destinationY=layerInside(finalLayer)-38}
        <path d="M {sx} {sy} C {cx} {sy} {cx} {destinationY-30} {x+14} {destinationY}" fill="none" stroke="#ffb576" stroke-width="4" pathLength="1" stroke-dasharray="1" stroke-dashoffset={1-draw}/>
        {#if finalProgress>=.51 && finalProgress<=.72}
         {@const u=1-travel}
         <circle cx={u*u*u*sx+3*u*u*travel*cx+3*u*travel*travel*cx+travel*travel*travel*(x+14)} cy={u*u*u*sy+3*u*u*travel*sy+3*u*travel*travel*(destinationY-30)+travel*travel*travel*destinationY} r="5" fill="#ffbd87" class="signal"/>
        {/if}
       {/each}
       {#if draw===1}<path d="M {centerX(activeIndex)+14} {layerInside(finalLayer)-38} L {centerX(activeIndex)} {layerInside(finalLayer)-19}" fill="none" stroke="#ffb576" stroke-width="4" marker-end="url(#residual-arrow)"/>{/if}
      </g>
     {/if}
    {/if}
    {#if panel===1 && currentLayer===finalLayer && finalProgress<.96}
     <g transform="translate({centerX(activeIndex)} {flowY()})" class="signal">
      <rect x="-16" y="-16" width="32" height="32" rx="7" fill="#ff9d4d" stroke="#ffc38e" stroke-width="2"/>
     </g>
    {/if}
    <!-- Background-colored sheets isolate the active attention axis. -->
    <rect x="0" y="200" width="960" height="880" fill="#151a23" opacity={.48*focus*(panel===0 ? 1 : 1-depthSelection)} mask="url(#horizontal-focus)" pointer-events="none"/>
    {#if panel===1}
     <rect x="0" y="200" width="960" height="880" fill="#151a23" opacity={.48*depthFocus} mask="url(#vertical-focus)" pointer-events="none"/>
     <rect x={centerX(activeIndex)-60} y={layers[0].inside-28} width="120" height={layerInside(finalLayer)-layers[0].inside+56} rx="13" fill="none" stroke="#ff9d4d" stroke-width="2" stroke-opacity={.7*depthFocus}/>
    {/if}

    {#if finalProgress>=.08 && finalProgress<(panel===0 ? .82 : .40)}
     <text x="480" y={layers[finalLayer].top+layerHeight(finalLayer)+30} class="operation-caption" opacity={ease((finalProgress-.08)/.03)*(1-ease((finalProgress-(panel===0 ? .74 : .36))/(panel===0 ? .08 : .04)))}>Attention along token dimensions</text>
    {:else if panel===1 && finalProgress>=.43 && finalProgress<.82}
     <text x={centerX(activeIndex)} y={layers[finalLayer].top+layerHeight(finalLayer)+30} class="operation-caption" opacity={ease((finalProgress-.43)/.03)*(1-ease((finalProgress-.74)/.08))}>Attention along depth</text>
    {/if}
   </g>
  {/each}
 </svg>
 <div class="controls">
  <button onclick={() => playing = !playing} aria-label={playing ? 'Pause' : 'Play'}>{playing ? 'Ⅱ' : '▶'}</button>
  <div class="scrubber"><label for="timeline">{narration}</label><input id="timeline" aria-label="Animation progress" type="range" min="0" max="0.999" step="0.001" value={progress} oninput={seek}/></div>
 </div>
</div>
<style>
 .wrap{width:100%;font-family:Arial,Helvetica,sans-serif}.diagram{display:block;width:100%;height:auto}
 .panel-caption{text-anchor:start;fill:#dce3ed;font-size:45px;font-weight:500}
 .token-label{text-anchor:middle;dominant-baseline:central;font-size:22px;font-weight:500}.layer-label{text-anchor:middle;dominant-baseline:central;font-size:27px;paint-order:stroke fill;stroke:#202734;stroke-width:11px;stroke-linejoin:round}
 .label-plate-text{stroke:none}
 .operation-caption{text-anchor:middle;dominant-baseline:central;font-size:32px;fill:#ffad66;paint-order:stroke fill;stroke:#151a23;stroke-width:5px;stroke-linejoin:round;filter:url(#operation-caption-halo)}
 .blue-signal{filter:drop-shadow(0 0 6px #6ea8ff)} .signal{filter:drop-shadow(0 0 7px #ff9d4d66)}
 .controls{display:flex;align-items:center;gap:20px;max-width:700px;margin:24px auto;padding:0 24px 24px}.controls button{background:none;border:0;color:#dce3ed;font-size:23px;cursor:pointer;padding:10px}.scrubber{flex:1;min-width:0}.scrubber label{display:block;text-align:center;color:#ffad66;font-size:16px;margin-bottom:14px}.scrubber input{width:100%;accent-color:#ff9d4d;cursor:pointer}
</style>
