import{e as ft,d as Ue,a as ne,f as Se,s as ze}from"./QRJNuNGS.js";import{i as pt}from"./BXyzJnSu.js";import{f as gt,u as mt,p as yt,Q as vt,n as l,m as F,R as q,l as W,M as X,T as bt,D as Ve,i as Pt,U as ge,k as le,t as ce,j as qe,v as Le}from"./WAWlr0V5.js";import{p as m,a as St,i as He,s as Tt,b as _t}from"./B5wFzeb_.js";import{a as he,T as kt}from"./BGxHdWqj.js";import{b as Ne}from"./B4ZR9csn.js";import{s as L,D as wt,f as Ze,h as Ct}from"./DBAaypx_.js";function Qe(i,e,n){gt(()=>{var t=mt(()=>e(i,n?.())||{});if(t?.destroy)return()=>t.destroy()})}function Ye(i){if(i.startsWith("#")){const n=i.slice(1);return n.length===3?[parseInt(n[0]+n[0],16)/255,parseInt(n[1]+n[1],16)/255,parseInt(n[2]+n[2],16)/255]:[parseInt(n.slice(0,2),16)/255,parseInt(n.slice(2,4),16)/255,parseInt(n.slice(4,6),16)/255]}const e=i.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);return e?[parseInt(e[1])/255,parseInt(e[2])/255,parseInt(e[3])/255]:(console.warn(`[parseColor] Could not parse color: ${i}, defaulting to white`),[1,1,1])}function xt(i,e,n){const t=i.length;if(t===0)return{segments:new Float32Array(0),segmentCount:0,trajectoryCount:0,maxTimeIndex:0,headPositions:new Float32Array(0)};let s=0;for(const c of i){const h=Math.min(e+1,c.length-1);h>s&&(s=h)}let r=0;for(const c of i){const h=Math.min(e+1,c.length-1);r+=h}const u=[],a=new Float32Array(t*4);for(let c=0;c<t;c++){const h=i[c],o=Math.min(e+1,h.length-1),P=It(h,o,n.opacityGradient);for(let d=0;d<o;d++){const k=(d+c*1e-4)/Math.max(s,1);u.push([h[d][0],h[d][1],h[d+1][0],h[d+1][1],P[d],P[d+1],k,0])}const p=o,g=(p+c*1e-4)/Math.max(s,1);a[c*4+0]=h[p][0],a[c*4+1]=h[p][1],a[c*4+2]=g,a[c*4+3]=P[p]}u.sort((c,h)=>c[6]-h[6]);const f=new Float32Array(r*8);for(let c=0;c<u.length;c++){const h=u[c],o=c*8;f[o+0]=h[0],f[o+1]=h[1],f[o+2]=h[2],f[o+3]=h[3],f[o+4]=h[4],f[o+5]=h[5],f[o+6]=h[6],f[o+7]=h[7]}return{segments:f,segmentCount:r,trajectoryCount:t,maxTimeIndex:s,headPositions:a}}function It(i,e,n){const t=new Array(e+1);if(!n||n.mode==="none")for(let s=0;s<=e;s++)t[s]=1;else if(n.mode==="recency"){const s=n.timeWindow??.8,r=Math.max(1,Math.floor(s*i.length)),u=Math.max(0,e-r);for(let a=0;a<=e;a++)a<u?t[a]=0:t[a]=(a-u)/Math.max(e-u,1)}else if(n.mode==="custom"&&n.perSegmentAlphas){const s=n.perSegmentAlphas;for(let r=0;r<=e;r++)t[r]=s[0]?.[r]??1}else for(let s=0;s<=e;s++)t[s]=1;return t}const At=`/**
 * GPU Trajectory Shader
 *
 * Renders trajectories with:
 * - Time-based z-ordering (more recent segments on top via depth buffer)
 * - Optional outline support (two-pass rendering)
 * - Per-segment alpha interpolation for opacity gradients
 * - SDF-based anti-aliased capsule rendering
 *
 * Each segment is defined by:
 * - p0, p1: Start and end points (logical pixels)
 * - alphaStart, alphaEnd: Alpha values at segment endpoints
 * - zValue: Depth value for z-ordering (higher = closer = on top)
 */

// ============================================================================
// Uniforms
// ============================================================================

struct Uniforms {
  // Canvas dimensions (physical pixels)
  width: f32,
  height: f32,
  // Device pixel ratio
  dpr: f32,
  // Padding for alignment
  _pad0: f32,

  // Main stroke style
  thickness: f32,
  colorR: f32,
  colorG: f32,
  colorB: f32,
  baseOpacity: f32,

  // Outline style
  outlineThickness: f32,
  outlineColorR: f32,
  outlineColorG: f32,
  outlineColorB: f32,
  outlineOpacity: f32,

  // Pass control: 0.0 = main stroke, 1.0 = outline
  isOutlinePass: f32,
  // Padding
  _pad1: f32,
}

@group(0) @binding(0) var<uniform> uniforms: Uniforms;

// ============================================================================
// Segment Data (Storage Buffer)
// ============================================================================

// Each segment: 8 floats (32 bytes)
// [x0, y0, x1, y1, alphaStart, alphaEnd, zValue, _padding]
@group(0) @binding(1) var<storage, read> segments: array<f32>;

// ============================================================================
// Vertex Shader
// ============================================================================

struct VertexOutput {
  @builtin(position) position: vec4<f32>,
  @location(0) localPos: vec2<f32>,      // Position relative to segment (for SDF)
  @location(1) segmentLength: f32,       // Length of this segment (physical pixels)
  @location(2) alphaStart: f32,          // Alpha at segment start
  @location(3) alphaEnd: f32,            // Alpha at segment end
}

// Quad vertices: 6 vertices per instance (2 triangles)
const QUAD_POSITIONS = array<vec2<f32>, 6>(
  vec2<f32>(0.0, 1.0),   // 0: start, +perpendicular
  vec2<f32>(1.0, 1.0),   // 1: end, +perpendicular
  vec2<f32>(0.0, -1.0),  // 2: start, -perpendicular
  vec2<f32>(1.0, 1.0),   // 1: end, +perpendicular (repeated)
  vec2<f32>(0.0, -1.0),  // 2: start, -perpendicular (repeated)
  vec2<f32>(1.0, -1.0),  // 3: end, -perpendicular
);

@vertex
fn vs_main(
  @builtin(vertex_index) vertexIndex: u32,
  @builtin(instance_index) instanceIndex: u32
) -> VertexOutput {
  var output: VertexOutput;

  // Read segment data (8 floats per segment)
  let baseIdx = instanceIndex * 8u;
  let p0_logical = vec2<f32>(segments[baseIdx], segments[baseIdx + 1u]);
  let p1_logical = vec2<f32>(segments[baseIdx + 2u], segments[baseIdx + 3u]);
  let alphaStart = segments[baseIdx + 4u];
  let alphaEnd = segments[baseIdx + 5u];
  let zValue = segments[baseIdx + 6u];

  // Scale to physical pixels
  let dpr = uniforms.dpr;
  let p0 = p0_logical * dpr;
  let p1 = p1_logical * dpr;

  // Compute segment direction and length
  let delta = p1 - p0;
  let segmentLength = length(delta);
  let dir = select(vec2<f32>(1.0, 0.0), delta / segmentLength, segmentLength > 0.001);
  let perp = vec2<f32>(-dir.y, dir.x);

  // Get quad position
  let quadPos = QUAD_POSITIONS[vertexIndex % 6u];

  // Select thickness based on pass
  let thickness = select(uniforms.thickness, uniforms.outlineThickness, uniforms.isOutlinePass > 0.5);
  let physicalThickness = thickness * dpr;
  let halfThickness = physicalThickness * 0.5;
  let margin = halfThickness + 2.0 * dpr; // Extra for AA

  // Expand quad along and perpendicular to segment
  let along = mix(-margin, segmentLength + margin, quadPos.x);
  let across = quadPos.y * margin;
  let worldPos = p0 + dir * along + perp * across;

  // Convert to NDC
  let ndcX = (worldPos.x / uniforms.width) * 2.0 - 1.0;
  let ndcY = 1.0 - (worldPos.y / uniforms.height) * 2.0;

  // Z-value: map [0, 1] to NDC z [1, 0] (1 = far, 0 = near)
  // Higher zValue = more recent = closer = smaller NDC z
  // Add small offset for outline pass to push it behind main stroke
  let outlineOffset = select(0.0, 0.001, uniforms.isOutlinePass > 0.5);
  let ndcZ = 1.0 - zValue + outlineOffset;

  output.position = vec4<f32>(ndcX, ndcY, ndcZ, 1.0);
  output.localPos = vec2<f32>(along, across);
  output.segmentLength = segmentLength;
  output.alphaStart = alphaStart;
  output.alphaEnd = alphaEnd;

  return output;
}

// ============================================================================
// Fragment Shader
// ============================================================================

@fragment
fn fs_main(input: VertexOutput) -> @location(0) vec4<f32> {
  let dpr = uniforms.dpr;

  // Select style based on pass
  let thickness = select(uniforms.thickness, uniforms.outlineThickness, uniforms.isOutlinePass > 0.5);
  let physicalThickness = thickness * dpr;
  let halfThickness = physicalThickness * 0.5;

  let colorR = select(uniforms.colorR, uniforms.outlineColorR, uniforms.isOutlinePass > 0.5);
  let colorG = select(uniforms.colorG, uniforms.outlineColorG, uniforms.isOutlinePass > 0.5);
  let colorB = select(uniforms.colorB, uniforms.outlineColorB, uniforms.isOutlinePass > 0.5);
  let baseOpacity = select(uniforms.baseOpacity, uniforms.outlineOpacity, uniforms.isOutlinePass > 0.5);

  // Compute SDF for capsule (line with rounded ends)
  let perpDist = abs(input.localPos.y);
  let alongPos = input.localPos.x;

  var sd: f32;
  if (alongPos < 0.0) {
    // Start cap (semicircle)
    sd = length(vec2<f32>(-alongPos, perpDist)) - halfThickness;
  } else if (alongPos > input.segmentLength) {
    // End cap (semicircle)
    sd = length(vec2<f32>(alongPos - input.segmentLength, perpDist)) - halfThickness;
  } else {
    // Body (rectangular)
    sd = perpDist - halfThickness;
  }

  // Anti-aliased alpha from signed distance
  let aaWidth = 0.75 * dpr;
  let shapeAlpha = 1.0 - smoothstep(-aaWidth, aaWidth, sd);

  // Interpolate segment alpha based on position along segment
  let t = saturate(alongPos / max(input.segmentLength, 0.001));
  let segmentAlpha = mix(input.alphaStart, input.alphaEnd, t);

  // Final alpha
  let finalAlpha = shapeAlpha * segmentAlpha * baseOpacity;

  // Early discard for transparent pixels
  if (finalAlpha < 0.001) {
    discard;
  }

  return vec4<f32>(colorR, colorG, colorB, finalAlpha);
}

// ============================================================================
// Head Marker Vertex Shader
// ============================================================================

// Head data: [x, y, zValue, alpha] per marker
@group(0) @binding(2) var<storage, read> heads: array<f32>;

struct HeadVertexOutput {
  @builtin(position) position: vec4<f32>,
  @location(0) localPos: vec2<f32>,  // Position relative to center (for SDF)
  @location(1) alpha: f32,           // Alpha value
}

@vertex
fn vs_head(
  @builtin(vertex_index) vertexIndex: u32,
  @builtin(instance_index) instanceIndex: u32
) -> HeadVertexOutput {
  var output: HeadVertexOutput;

  // Read head data (4 floats per head)
  let baseIdx = instanceIndex * 4u;
  let center_logical = vec2<f32>(heads[baseIdx], heads[baseIdx + 1u]);
  let zValue = heads[baseIdx + 2u];
  let alpha = heads[baseIdx + 3u];

  // Scale to physical pixels
  let dpr = uniforms.dpr;
  let center = center_logical * dpr;

  // Get quad position
  let quadPos = QUAD_POSITIONS[vertexIndex % 6u];

  // Select radius based on pass (use thickness as radius for head markers)
  let thickness = select(uniforms.thickness, uniforms.outlineThickness, uniforms.isOutlinePass > 0.5);
  let radius = thickness * dpr * 0.5; // Half thickness = radius
  let margin = radius + 2.0 * dpr; // Extra for AA

  // Expand quad around center
  let worldPos = center + vec2<f32>(quadPos.x * 2.0 - 1.0, quadPos.y) * margin;

  // Convert to NDC
  let ndcX = (worldPos.x / uniforms.width) * 2.0 - 1.0;
  let ndcY = 1.0 - (worldPos.y / uniforms.height) * 2.0;
  let ndcZ = 1.0 - zValue;

  output.position = vec4<f32>(ndcX, ndcY, ndcZ, 1.0);
  output.localPos = vec2<f32>(quadPos.x * 2.0 - 1.0, quadPos.y) * margin;
  output.alpha = alpha;

  return output;
}

@fragment
fn fs_head(input: HeadVertexOutput) -> @location(0) vec4<f32> {
  let dpr = uniforms.dpr;

  // Select style based on pass
  let thickness = select(uniforms.thickness, uniforms.outlineThickness, uniforms.isOutlinePass > 0.5);
  let radius = thickness * dpr * 0.5;

  let colorR = select(uniforms.colorR, uniforms.outlineColorR, uniforms.isOutlinePass > 0.5);
  let colorG = select(uniforms.colorG, uniforms.outlineColorG, uniforms.isOutlinePass > 0.5);
  let colorB = select(uniforms.colorB, uniforms.outlineColorB, uniforms.isOutlinePass > 0.5);
  let baseOpacity = select(uniforms.baseOpacity, uniforms.outlineOpacity, uniforms.isOutlinePass > 0.5);

  // SDF for circle
  let dist = length(input.localPos);
  let sd = dist - radius;

  // Anti-aliased alpha
  let aaWidth = 0.75 * dpr;
  let shapeAlpha = 1.0 - smoothstep(-aaWidth, aaWidth, sd);

  let finalAlpha = shapeAlpha * input.alpha * baseOpacity;

  if (finalAlpha < 0.001) {
    discard;
  }

  return vec4<f32>(colorR, colorG, colorB, finalAlpha);
}
`,me=2.5,ye=.8,Ot="#3b82f6",Mt=64;class Te{constructor(e,n,t,s,r,u,a,f){this.segmentBuffer=null,this.headBuffer=null,this.bindGroup=null,this.headBindGroup=null,this.depthTexture=null,this.segmentCount=0,this.headCount=0,this.thickness=me,this.colorR=.231,this.colorG=.51,this.colorB=.965,this.baseOpacity=ye,this.outlineThickness=me+2,this.outlineColorR=0,this.outlineColorG=0,this.outlineColorB=0,this.outlineOpacity=ye,this.hasOutline=!1,this.device=e,this.context=n,this.format=t,this.pipeline=s,this.uniformBuffer=r,this.canvasWidth=u,this.canvasHeight=a,this.dpr=f,this.createDepthTexture()}static async create(e,n={}){const t=n.dpr??(typeof window<"u"?window.devicePixelRatio:1)??1;if(!navigator.gpu)throw new Error("WebGPU is not supported in this browser");const s=await navigator.gpu.requestAdapter();if(!s)throw new Error("Failed to get WebGPU adapter");const r=await s.requestDevice(),u=e.getContext("webgpu");if(!u)throw new Error("Failed to get WebGPU canvas context");const a=navigator.gpu.getPreferredCanvasFormat();u.configure({device:r,format:a,alphaMode:"premultiplied"});const f=r.createShaderModule({label:"Trajectory Shader",code:At}),c=r.createBuffer({label:"Trajectory Uniforms",size:Mt,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),h=r.createBindGroupLayout({label:"Trajectory Bind Group Layout",entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}}]}),o=r.createPipelineLayout({label:"Trajectory Pipeline Layout",bindGroupLayouts:[h]}),P=r.createRenderPipeline({label:"Trajectory Render Pipeline",layout:o,vertex:{module:f,entryPoint:"vs_main"},fragment:{module:f,entryPoint:"fs_main",targets:[{format:a,blend:{color:{srcFactor:"one",dstFactor:"one",operation:"max"},alpha:{srcFactor:"one",dstFactor:"one",operation:"max"}}}]},depthStencil:{format:"depth24plus",depthWriteEnabled:!0,depthCompare:"less"},primitive:{topology:"triangle-list"}});return new Te(r,u,a,P,c,e.width,e.height,t)}createDepthTexture(){this.depthTexture&&this.depthTexture.destroy(),this.depthTexture=this.device.createTexture({label:"Trajectory Depth Texture",size:[this.canvasWidth,this.canvasHeight],format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT})}setTrajectories(e,n,t){this.thickness=t.strokeWidth??me;const s=Ye(t.color??Ot);if(this.colorR=s[0],this.colorG=s[1],this.colorB=s[2],this.baseOpacity=t.opacity??ye,this.hasOutline=!!t.outline,t.outline){const u=Ye(t.outline.color??"#000000"),a=t.outline.strokeWidth??2;this.outlineThickness=this.thickness+a,this.outlineColorR=u[0],this.outlineColorG=u[1],this.outlineColorB=u[2],this.outlineOpacity=t.outline.opacity??this.baseOpacity}const r=xt(e,n,t);if(this.segmentCount=r.segmentCount,this.headCount=r.trajectoryCount,this.segmentCount===0){this.segmentBuffer=null,this.headBuffer=null,this.bindGroup=null,this.headBindGroup=null;return}this.segmentBuffer&&this.segmentBuffer.destroy(),this.headBuffer&&this.headBuffer.destroy(),this.segmentBuffer=this.device.createBuffer({label:"Trajectory Segments",size:r.segments.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.segmentBuffer,0,r.segments.buffer),this.headBuffer=this.device.createBuffer({label:"Trajectory Heads",size:r.headPositions.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.headBuffer,0,r.headPositions.buffer),this.bindGroup=this.device.createBindGroup({label:"Trajectory Bind Group",layout:this.pipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.uniformBuffer}},{binding:1,resource:{buffer:this.segmentBuffer}}]}),this.headBindGroup=this.device.createBindGroup({label:"Trajectory Head Bind Group",layout:this.pipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.uniformBuffer}},{binding:1,resource:{buffer:this.headBuffer}}]})}draw(e,n,t,s){this.setTrajectories(e,n,t),this.render(s)}render(e){if(!this.bindGroup||this.segmentCount===0||!this.depthTexture){if(e){const f=this.device.createCommandEncoder(),c=this.context.getCurrentTexture().createView();f.beginRenderPass({colorAttachments:[{view:c,clearValue:{r:e[0],g:e[1],b:e[2],a:e[3]},loadOp:"clear",storeOp:"store"}]}).end(),this.device.queue.submit([f.finish()])}return}const n=this.device.createCommandEncoder(),t=this.context.getCurrentTexture().createView(),s=this.depthTexture.createView(),r=e?"clear":"load",u=e?{r:e[0],g:e[1],b:e[2],a:e[3]}:{r:0,g:0,b:0,a:0},a=n.beginRenderPass({colorAttachments:[{view:t,clearValue:u,loadOp:r,storeOp:"store"}],depthStencilAttachment:{view:s,depthClearValue:1,depthLoadOp:r,depthStoreOp:"store"}});this.hasOutline&&(this.updateUniforms(!0),a.setPipeline(this.pipeline),a.setBindGroup(0,this.bindGroup),a.draw(6,this.segmentCount,0,0)),this.updateUniforms(!1),a.setPipeline(this.pipeline),a.setBindGroup(0,this.bindGroup),a.draw(6,this.segmentCount,0,0),a.end(),this.device.queue.submit([n.finish()])}updateUniforms(e){const n=new Float32Array(16);n[0]=this.canvasWidth,n[1]=this.canvasHeight,n[2]=this.dpr,n[3]=0,n[4]=this.thickness,n[5]=this.colorR,n[6]=this.colorG,n[7]=this.colorB,n[8]=this.baseOpacity,n[9]=this.outlineThickness,n[10]=this.outlineColorR,n[11]=this.outlineColorG,n[12]=this.outlineColorB,n[13]=this.outlineOpacity,n[14]=e?1:0,n[15]=0,this.device.queue.writeBuffer(this.uniformBuffer,0,n)}resize(e,n,t){this.canvasWidth=e,this.canvasHeight=n,t!==void 0&&(this.dpr=t),this.createDepthTexture()}get backend(){return"gpu"}destroy(){this.uniformBuffer.destroy(),this.segmentBuffer&&this.segmentBuffer.destroy(),this.headBuffer&&this.headBuffer.destroy(),this.depthTexture&&this.depthTexture.destroy()}}function Xt(i,e,n,t,s){i.beginPath(),i.moveTo(e,n),i.lineTo(t,s),i.stroke()}function Bt(i,e,n,t,s,r){let a=Math.atan2(s-n,t-e);i.beginPath(),i.moveTo(t+r*Math.cos(a),s+r*Math.sin(a)),a+=2*Math.PI/3,i.lineTo(t+r*Math.cos(a),s+r*Math.sin(a)),a+=2*Math.PI/3,i.lineTo(t+r*Math.cos(a),s+r*Math.sin(a)),i.closePath(),i.fill()}function Jt(i,e,n,t,s,r){const u=Math.atan2(s-n,t-e);i.beginPath(),i.moveTo(e,n),i.lineTo(t,s),i.stroke();let a=u;i.beginPath(),i.moveTo(t+r*Math.cos(a),s+r*Math.sin(a)),a+=2*Math.PI/3,i.lineTo(t+r*Math.cos(a),s+r*Math.sin(a)),a+=2*Math.PI/3,i.lineTo(t+r*Math.cos(a),s+r*Math.sin(a)),i.closePath(),i.fill()}function ve(i,e,n,t){if(n==null||isNaN(n))throw new Error(`drawTrajectories: segmentIndex is invalid (${n})`);const s=e.length;if(s===0)return;i.lineCap="round",i.lineJoin="round";const r=t.outline,u=r?.strokeWidth??2,a=t.strokeWidth+u,f=r?.color??"#000000",c=r?.opacity??t.opacity;for(let h=0;h<s;h++){const o=e[h];if(!o||o.length===0)continue;if(t.showPreview){if(r){i.lineWidth=a,i.strokeStyle=f,i.globalAlpha=(t.previewOpacity??.15)*(c/t.opacity),i.beginPath();for(let p=0;p<o.length;p++){const[g,d]=o[p];p===0?i.moveTo(g,d):i.lineTo(g,d)}i.stroke()}i.lineWidth=t.strokeWidth,i.strokeStyle=t.color,i.globalAlpha=t.previewOpacity??.15,i.beginPath();for(let p=0;p<o.length;p++){const[g,d]=o[p];p===0?i.moveTo(g,d):i.lineTo(g,d)}i.stroke()}const P=t.perSegmentAlphas?.[h];if(P){const p=t.gradientSubdivisions??1;for(let g=0;g<o.length-1;g++){const d=P[g]??0,k=P[g+1]??0;if(d<=0&&k<=0)continue;const[b,y]=o[g],[x,M]=o[g+1];for(let E=0;E<p;E++){const G=E/p,H=(E+1)/p,N=d+(k-d)*((E+.5)/p);if(N<=0)continue;const Z=b+(x-b)*G,J=y+(M-y)*G,K=b+(x-b)*H,ie=y+(M-y)*H;r&&(i.lineWidth=a,i.strokeStyle=f,i.globalAlpha=N*(c/t.opacity),i.beginPath(),i.moveTo(Z,J),i.lineTo(K,ie),i.stroke()),i.lineWidth=t.strokeWidth,i.strokeStyle=t.color,i.globalAlpha=N,i.beginPath(),i.moveTo(Z,J),i.lineTo(K,ie),i.stroke()}}}else{const p=Math.floor(n),g=n-p,d=Math.min(p+1,o.length-1);let k,b;if(g>0&&d+1<o.length){const[y,x]=o[d],[M,E]=o[d+1];k=y+g*(M-y),b=x+g*(E-x)}else[k,b]=o[d];if(r){i.lineWidth=a,i.strokeStyle=f,i.globalAlpha=c,i.beginPath();for(let y=0;y<=d&&y<o.length;y++){const[x,M]=o[y];y===0?i.moveTo(x,M):i.lineTo(x,M)}g>0&&d+1<o.length&&i.lineTo(k,b),i.stroke()}i.lineWidth=t.strokeWidth,i.strokeStyle=t.color,i.globalAlpha=t.opacity,i.beginPath();for(let y=0;y<=d&&y<o.length;y++){const[x,M]=o[y];y===0?i.moveTo(x,M):i.lineTo(x,M)}g>0&&d+1<o.length&&i.lineTo(k,b),i.stroke()}if(t.showHeadMarker!==!1){const p=Math.floor(n),g=n-p,d=Math.min(p+1,o.length-1);let k,b,y,x;if(g>0&&d+1<o.length){const[G,H]=o[d],[N,Z]=o[d+1];k=G+g*(N-G),b=H+g*(Z-H),y=G,x=H}else{[k,b]=o[d];const G=Math.max(0,d-1);[y,x]=o[G]}const M=t.headStyle?.type??"circle",E=t.headStyle?.radius??t.pointRadius;r&&M==="circle"&&(i.beginPath(),i.arc(k,b,t.pointRadius+(a-t.strokeWidth)/2,0,2*Math.PI),i.fillStyle=f,i.globalAlpha=c,i.fill()),i.fillStyle=t.headStyle?.color??t.color,i.globalAlpha=t.headStyle?.opacity??t.opacity,M==="arrow"?Bt(i,y,x,k,b,E):(i.beginPath(),i.arc(k,b,E,0,2*Math.PI),i.fill())}}i.globalAlpha=1}const Pe=new WeakMap,be=new WeakMap,Xe=new WeakSet;async function Rt(i){const e=Pe.get(i);if(e)return e;const n=be.get(i);if(n)return n;const t=(async()=>{try{const s=typeof window<"u"?window.devicePixelRatio:1,r=await Te.create(i,{dpr:s});return Pe.set(i,r),r}catch(s){return console.warn("[drawTrajectories] GPU unavailable, falling back to CPU:",s),null}finally{be.delete(i)}})();return be.set(i,t),t}function Et(i){return i.opacityGradient?i:i.perSegmentAlphas?{...i,opacityGradient:{mode:"custom",perSegmentAlphas:i.perSegmentAlphas}}:i}async function Ft(i,e,n,t,s){const r=Et(t);if(i instanceof HTMLCanvasElement){const a=i,f=[0,0,0,0];if(Xe.has(a)){const o=a.getContext("2d");o&&(o.clearRect(0,0,a.width,a.height),ve(o,e,n,r));return}const c=Pe.get(a);if(c){c.draw(e,n,r,f);return}const h=await Rt(a);if(!h){Xe.add(a);const o=a.getContext("2d");o&&(o.clearRect(0,0,a.width,a.height),ve(o,e,n,r));return}h.draw(e,n,r,f)}else ve(i,e,n,r)}function Je(i,e){let n=null,t=null;function s(a=i,f=e){if(!n)return;const c=window.devicePixelRatio||1;n.width=a*c,n.height=f*c,t=n.getContext("2d"),t&&t.setTransform(c,0,0,c,0,0)}function r(a){return n=a,s(),{destroy(){n=null,t=null}}}function u(a){n=a,s()}return{bindCanvas:r,init:u,resize:s,get canvas(){return n},get ctx(){return t}}}class Wt{constructor(){this.duration=1,this.looping=!1,this.endPauseDuration=0,this._initialState=null,this._time=0,this._isPlaying=!1,this._isSeeking=!1,this._cachedState=null,this.clips=[],this.nextClipId=0,this._pausePoints=[],this._isWaitingForInput=!1,this.pauseCallbacks=new Set,this.clock=new Gt,this.tickCallbacks=new Set,this.endPauseRemaining=0}get initialState(){if(this._initialState===null)throw new Error("Timeline.initialState must be set before use");return this._initialState}set initialState(e){this._initialState=e,this._cachedState=null}get time(){return this._time}get isPlaying(){return this._isPlaying}get isSeeking(){return this._isSeeking}get isWaitingForInput(){return this._isWaitingForInput}get state(){return this._cachedState===null&&(this._cachedState=this.resolveState()),this._cachedState}add(e,n,t={}){const s=t.id??`clip-${this.nextClipId++}`;return this.clips.push({clip:e,start:n.start,end:n.end,options:{layer:t.layer??0,ephemeral:t.ephemeral??!1,id:s},playCount:0}),this._cachedState=null,s}remove(e){const n=this.clips.findIndex(t=>t.options.id===e);return n!==-1?(this.clips.splice(n,1),this._cachedState=null,!0):!1}clearLayer(e){this.clips=this.clips.filter(n=>n.options.layer!==e),this._cachedState=null}setState(e,n,t={}){const s=this._time/this.duration;return this.add({name:e,reduce:()=>n},{start:s,end:s},t)}playClip(e,n,t={}){const s=this._time/this.duration;return this.add(e,{start:s,end:s+n},{...t,ephemeral:!0})}setEndPause(e){this.endPauseDuration=e}addPausePoint(e){return this._pausePoints.push(Math.max(0,Math.min(1,e))),this._pausePoints.sort((n,t)=>n-t),this}advance(){this._isWaitingForInput&&(this._isWaitingForInput=!1,this._isPlaying||(this._isPlaying=!0,this.clock.start(e=>this.tick(e))))}onPause(e){return this.pauseCallbacks.add(e),()=>this.pauseCallbacks.delete(e)}play(){this._isPlaying||(this._isPlaying=!0,this.clock.start(e=>this.tick(e)))}pause(){this._isPlaying&&(this._isPlaying=!1,this.clock.stop())}startSeeking(){this._isSeeking=!0}endSeeking(){this._isSeeking=!1}seek(e){this._time=Math.max(0,Math.min(e*this.duration,this.duration)),this.endPauseRemaining=0,this._isWaitingForInput=!1,this._cachedState=null,this.tickCallbacks.forEach(n=>n(this._time/this.duration,this.state))}reset(){this._time=0,this.endPauseRemaining=0,this._isWaitingForInput=!1,this._cachedState=null}dispose(){this.pause(),this.tickCallbacks.clear(),this.pauseCallbacks.clear(),this.clips=[],this._isWaitingForInput=!1,this._cachedState=null}resetState(){this._time=0,this.endPauseRemaining=0,this._isWaitingForInput=!1,this._cachedState=null,this.clips.forEach(e=>e.playCount=0)}replaceClips(e){this.clips=[],this._cachedState=null,e.forEach(({clip:n,timing:t,options:s})=>this.add(n,t,s))}onTick(e){return this.tickCallbacks.add(e),()=>{this.tickCallbacks.delete(e)}}get isAtEnd(){return this._time>=this.duration}tick(e){if(this._isSeeking||this._isWaitingForInput){this.tickCallbacks.forEach(t=>t(this._time/this.duration,this.state));return}if(this.endPauseRemaining>0){this.endPauseRemaining-=e,this.endPauseRemaining<=0&&this.looping&&(this._time=0,this._cachedState=null),this.tickCallbacks.forEach(t=>t(this._time/this.duration,this.state));return}const n=Math.min(this._time+e,this.duration);if(this._pausePoints.length>0){const t=this._pausePoints.map(s=>s*this.duration).find(s=>s>this._time&&s<=n);if(t!==void 0){this._time=t,this._isWaitingForInput=!0,this._cachedState=null,this.tickCallbacks.forEach(s=>s(this._time/this.duration,this.state)),this.pauseCallbacks.forEach(s=>s());return}}this._time=n,this._cachedState=null,this.isAtEnd&&(this.endPauseDuration>0&&this.looping?this.endPauseRemaining=this.endPauseDuration:this.looping?(this._time=0,this.cleanupEphemeralClips()):this.pause()),this.tickCallbacks.forEach(t=>t(this._time/this.duration,this.state))}resolveState(){let n={...this.initialState};const t=new Map;for(const r of this.clips){const{clip:u,start:a,end:f,options:c}=r,h=f-a,o=h===0,P=this._time/this.duration;if(!(o?Math.abs(P-a)<1e-4:P>=a))continue;const g=P>f;(o||g?1:Math.min(1,Math.max(0,(P-a)/h)))>=1&&c.ephemeral&&r.playCount++,t.has(c.layer)||t.set(c.layer,[]),t.get(c.layer).push(r)}const s=Array.from(t.keys()).sort((r,u)=>r-u);for(const r of s){const u=t.get(r);let a={};for(const f of u){const{clip:c,start:h,end:o}=f,P=o-h,p=P===0,g=this._time/this.duration,d=g>o,k=p||d?1:Math.min(1,Math.max(0,(g-h)/P)),b=c.reduce(k,n);b!==null&&(a={...a,...b})}n={...n,...a}}return n}cleanupEphemeralClips(){this.clips=this.clips.filter(e=>!e.options.ephemeral||e.playCount===0)}}class Gt{constructor(){this.rafId=null,this.lastTime=null}start(e){const n=t=>{this.lastTime===null&&(this.lastTime=t);const s=(t-this.lastTime)/1e3;this.lastTime=t,e(s),this.rafId=requestAnimationFrame(n)};this.rafId=requestAnimationFrame(n)}stop(){this.rafId!==null&&(cancelAnimationFrame(this.rafId),this.rafId=null),this.lastTime=null}get isRunning(){return this.rafId!==null}}function jt(){return{name:"Pause",reduce:()=>null}}function Dt(i){const e={wasPlayingBeforeHidden:!1};function n(t){const s=i();s&&(!t&&s.isPlaying?(e.wasPlayingBeforeHidden=!0,s.pause()):t&&e.wasPlayingBeforeHidden&&(e.wasPlayingBeforeHidden=!1,s.play()))}return{state:e,handleVisibilityChange:n}}class ue{constructor(e,n={}){this.ctx=null,this._initialized=!1;const t=e.length>0?Math.max(...e.map(s=>(s?.length??1)-1),1):1;this.data={pathlines:e,numSegments:t},this.style=n.style??{},this.clip={name:"pathline-animation",reduce:s=>({segmentIndex:Math.floor(s*t)})}}async init(e){const n=e.getContext("2d");if(!n)throw new Error("Failed to get 2D rendering context");this.ctx=n,this._initialized=!0}get initialized(){return this._initialized}draw(e,n){if(!this.ctx){console.warn("PathlineAnimation.draw() called before init()");return}const t=e.pathlines??this.data.pathlines;if(t.length===0)return;const s={strokeWidth:this.style.strokeWidth??2,color:this.style.color??"#3b82f6",opacity:this.style.opacity??.8,pointRadius:this.style.pointRadius??4,...this.style,...n,perSegmentAlphas:e.perSegmentAlphas};Ft(this.ctx,t,e.segmentIndex,s)}destroy(){this.ctx=null,this._initialized=!1}static fromTrajectories(e,n={}){return new ue(e,n)}}var Ut=Se('<div class="panel-container svelte-ipvq8u"><div class="panel-label svelte-ipvq8u"> </div> <canvas class="panel-canvas svelte-ipvq8u" style="cursor: pointer;"></canvas></div>'),zt=Se('<div class="panel-container svelte-ipvq8u"><div class="panel-label svelte-ipvq8u"> </div> <canvas class="panel-canvas svelte-ipvq8u" style="cursor: pointer;"></canvas></div>'),Vt=Se(`<div class="placeholder svelte-ipvq8u"><p>Rectified flow superimposed visualization requires rectified flow data
      with at least 2 steps.</p></div>`);function Kt(i,e){yt(e,!1);const n=()=>St(l(te),"$figureIsActive",t),[t,s]=Tt(),r=F(),u=F(),a=F(),f=F(),c=F(),h=F(),o=F();let P=m(e,"flowMatchingClient",8,null),p=m(e,"rectifiedFlowClient",8,null),g=m(e,"leftTrajectories",24,()=>[]),d=m(e,"rightTrajectories",24,()=>[]),k=m(e,"targetDistribution",24,()=>[]),b=m(e,"canvasWidth",8,400),y=m(e,"canvasHeight",8,400),x=m(e,"marginWidth",8,10),M=m(e,"marginHeight",8,10),E=m(e,"gap",8,20),G=m(e,"domainRange",24,()=>({xMin:-1.7,xMax:1.7,yMin:-1.7,yMax:1.7})),H=m(e,"leftLabel",8,"Flow Matching"),N=m(e,"rightLabel",8,"Rectified Flow"),Z=m(e,"labelFontSize",8,26),J=m(e,"labelColor",24,()=>L.stylingSettings.label.color),K=m(e,"labelOpacity",24,()=>L.stylingSettings.label.opacity),ie=m(e,"targetColor",8,"#3b82f6"),Ke=m(e,"targetOpacity",8,.35),$e=m(e,"targetPointRadius",8,5),_e=m(e,"trajectoryColor",24,()=>L.stylingSettings.trajectory.color),et=m(e,"trajectoryStrokeWidth",24,()=>L.stylingSettings.trajectory.strokeWidth);m(e,"trajectoryPointRadius",24,()=>L.stylingSettings.trajectory.endpointRadius);let ke=m(e,"trajectoryOpacity",24,()=>L.stylingSettings.trajectory.opacity);m(e,"trajectoryFullOpacity",24,()=>L.stylingSettings.trajectory.fullOpacity),m(e,"showTrajectoryPreview",8,!1),m(e,"alphaTimeWindow",8,.8);let we=m(e,"endpointRadius",24,()=>L.stylingSettings.trajectory.endpointRadius),se=m(e,"animationDuration",8,1e4),Ce=m(e,"timing",24,()=>({pauseStart:.8})),xe=m(e,"playingByDefault",8,!0),Ie=m(e,"maxUserTrajectories",24,()=>L.interactiveSettings.maxUserTrajectories),tt=m(e,"onInitialized",8,void 0),nt=m(e,"backgroundVisible",8,!0),it=m(e,"showTimeSlider",8,!0),Ae=m(e,"children",8,void 0),U=F(null),z=F(null);const de=Je(b(),y()),fe=Je(b(),y());let j,D,I=F(null),$=null,ae=null,ee=F(!1),Oe=[],Me=[],Be=[],V=[],re=[],oe=[],Re=!1,pe=0,Q=null,Y=null,te=F();const{handleVisibilityChange:st}=Dt(()=>l(I));function at(){if(!l(u))return;const{xMin:v,xMax:w,yMin:R,yMax:A}=G();j=Ze().domain([v,w]).range([x(),b()-x()]),D=Ze().domain([R,A]).range([M(),y()-M()])}function Ee(v){if(!j||!D||!v||v.length===0)return[];const w=v[0]?.length||0;return Array.from({length:w},(R,A)=>v.map(S=>[j(S[A][0]),D(S[A][1])]))}function rt(){!j||!D||(Oe=k().map(v=>[j(v[0]),D(v[1])]),Me=Ee(g()),Be=Ee(d()))}function ot(){!l(U)||!l(z)||!l(u)||(at(),rt(),Ge({time:0,segmentIndex:0}),W(ee,!0),tt()?.())}async function lt(){const v={color:_e(),strokeWidth:et(),pointRadius:we(),opacity:ke()};$=ue.fromTrajectories(Me,{style:v}),ae=ue.fromTrajectories(Be,{style:v}),await Promise.all([$.init(l(U)),ae.init(l(z))]),W(I,new Wt),ge(I,l(I).initialState={segmentIndex:0}),l(I).add($.clip,{start:0,end:Ce().pauseStart}),l(I).add(jt(),{start:Ce().pauseStart,end:1}),ge(I,l(I).duration=se()/1e3),ge(I,l(I).looping=!0),l(I).onTick((w,R)=>{R.segmentIndex,Ge(R)})}function Fe(){l(I)&&l(I).play()}function We(v,w,R,A,S){if(!v||!w||!R)return;w.clearRect(0,0,b(),y()),Ct(w,Oe,$e(),ie(),Ke());const T=Re?.15:ke();if(R.draw(A,{opacity:T}),S.length>0){const C=S.filter(_=>_&&_.length>=2);if(C.length>0){const _=C[0].length-1,O=Math.min(A.segmentIndex,_-1);R.draw({...A,segmentIndex:O,pathlines:C},{opacity:1})}for(const _ of S)if(_&&_.length===1){const[O,B]=_[0];w.globalAlpha=1,w.beginPath(),w.arc(O,B,we(),0,Math.PI*2),w.fillStyle=_e(),w.fill()}}}function Ge(v){!l(u)||!l(h)||!l(o)||!$||!ae||(We(de.canvas,l(h),$,v,re),We(fe.canvas,l(o),ae,v,oe))}function je(v,w){if(!P()||!p())return;const A=(w==="left"?l(U):l(z)).getBoundingClientRect(),S=b()/A.width,T=y()/A.height,C=(v.clientX-A.left)*S,_=(v.clientY-A.top)*T,O=j.invert(C),B=D.invert(_);ct([O,B])}function ct(v){if(!P()||!p())return;Q&&(P().stopRequest(Q),Q=null),Y&&(p().stopRequest(Y),Y=null),V=[...V,v],V.length>Ie()&&(V=V.slice(-Ie())),Re=!0,pe=0,re=V.map(S=>[[j(S[0]),D(S[1])]]),oe=V.map(S=>[[j(S[0]),D(S[1])]]),l(I)&&l(I).reset(),Fe();function w(){pe++,pe>=2&&(Q=null,Y=null)}const R=P().sampleFromInitialPoints(V,l(a),{},(S,T)=>{re=re.map((C,_)=>[...C,[j(T[_][0]),D(T[_][1])]])});Q=R.requestId,R.promise.then(w);const A=p().sampleFromInitialPoints(V,l(a),{},(S,T)=>{oe=oe.map((C,_)=>[...C,[j(T[_][0]),D(T[_][1])]])});Y=A.requestId,A.promise.then(w)}vt(()=>{l(I)&&l(I).pause(),Q&&P()&&P().stopRequest(Q),Y&&p()&&p().stopRequest(Y)}),q(()=>X(Ae()),()=>{W(r,Ae())}),q(()=>(X(g()),X(d()),X(k())),()=>{W(u,g()?.length>0&&d()?.length>0&&k()?.length>0)}),q(()=>(l(u),X(g())),()=>{W(a,l(u)?g().length:1)}),q(()=>l(a),()=>{W(f,l(a)-1)}),q(()=>(l(f),X(se())),()=>{W(c,l(f)>0?se()/l(f):se())}),q(()=>l(U),()=>{W(h,l(U)&&de.ctx)}),q(()=>l(z),()=>{W(o,l(z)&&fe.ctx)}),q(()=>(l(u),l(U),l(z),l(ee),X(xe())),()=>{l(u)&&l(U)&&l(z)&&!l(ee)&&(ot(),lt().then(()=>{xe()&&Fe()}))}),q(()=>(l(te),l(ee),n()),()=>{l(te)!==void 0&&l(ee)&&st(n())}),bt(),pt();var De=Ue(),ht=Ve(De);{var ut=v=>{wt(v,{get gap(){return E()},get caption(){return l(r)},get backgroundVisible(){return nt()},get isActive(){return l(te)},set isActive(S){_t(W(te,S),"$figureIsActive",t)},left:S=>{var T=Ut(),C=le(T),_=le(C,!0);ce(C);var O=qe(C,2);O.__click=B=>je(B,"left"),Ne(O,B=>W(U,B),()=>l(U)),Qe(O,B=>de.bindCanvas?.(B)),ce(T),Le(()=>{he(T,`max-width: ${b()??""}px;`),he(C,`font-size: ${Z()??""}px; color: ${J()??""}; opacity: ${K()??""};`),ze(_,H())}),ne(S,T)},right:S=>{var T=zt(),C=le(T),_=le(C,!0);ce(C);var O=qe(C,2);O.__click=B=>je(B,"right"),Ne(O,B=>W(z,B),()=>l(z)),Qe(O,B=>fe.bindCanvas?.(B)),ce(T),Le(()=>{he(T,`max-width: ${b()??""}px;`),he(C,`font-size: ${Z()??""}px; color: ${J()??""}; opacity: ${K()??""};`),ze(_,N())}),ne(S,T)},footer:S=>{var T=Ue(),C=Ve(T);{var _=O=>{kt(O,{get timeline(){return l(I)},color:"#f17720"})};He(C,O=>{it()&&O(_)})}ne(S,T)},$$slots:{left:!0,right:!0,footer:!0},$$legacy:!0})},dt=v=>{var w=Vt();ne(v,w)};He(ht,v=>{l(u)?v(ut):v(dt,!1)})}ne(i,De),Pt(),s()}ft(["click"]);export{ue as P,Kt as R,Wt as T,Xt as a,Dt as b,Qe as c,Jt as d,Ft as e,jt as f,Je as u};
