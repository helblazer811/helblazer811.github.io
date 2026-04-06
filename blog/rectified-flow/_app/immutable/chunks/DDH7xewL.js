import{e as ut,d as ht,a as oe,f as Se,s as We}from"./QRJNuNGS.js";import{i as dt}from"./BXyzJnSu.js";import{f as ft,u as pt,p as gt,Q as mt,n as l,m as G,R as V,l as j,M as X,T as yt,D as vt,i as bt,U as ge,k as le,t as ce,j as ze,v as Le}from"./WAWlr0V5.js";import{p as m,a as Pt,i as St,s as Tt,b as wt}from"./B5wFzeb_.js";import{T as kt,a as ue}from"./BdyAdHau.js";import{b as Ve}from"./B4ZR9csn.js";import{s as q,D as _t,f as qe,h as Ct}from"./LGA6AP1N.js";function He(n,e,t){ft(()=>{var i=pt(()=>e(n,t?.())||{});if(i?.destroy)return()=>i.destroy()})}function Ne(n){if(n.startsWith("#")){const t=n.slice(1);return t.length===3?[parseInt(t[0]+t[0],16)/255,parseInt(t[1]+t[1],16)/255,parseInt(t[2]+t[2],16)/255]:[parseInt(t.slice(0,2),16)/255,parseInt(t.slice(2,4),16)/255,parseInt(t.slice(4,6),16)/255]}const e=n.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);return e?[parseInt(e[1])/255,parseInt(e[2])/255,parseInt(e[3])/255]:(console.warn(`[parseColor] Could not parse color: ${n}, defaulting to white`),[1,1,1])}function xt(n,e,t){const i=n.length;if(i===0)return{segments:new Float32Array(0),segmentCount:0,trajectoryCount:0,maxTimeIndex:0,headPositions:new Float32Array(0)};let s=0;for(const c of n){const u=Math.min(e+1,c.length-1);u>s&&(s=u)}let r=0;for(const c of n){const u=Math.min(e+1,c.length-1);r+=u}const h=[],a=new Float32Array(i*4);for(let c=0;c<i;c++){const u=n[c],o=Math.min(e+1,u.length-1),P=At(u,o,t.opacityGradient);for(let d=0;d<o;d++){const T=(d+c*1e-4)/Math.max(s,1);h.push([u[d][0],u[d][1],u[d+1][0],u[d+1][1],P[d],P[d+1],T,0])}const p=o,g=(p+c*1e-4)/Math.max(s,1);a[c*4+0]=u[p][0],a[c*4+1]=u[p][1],a[c*4+2]=g,a[c*4+3]=P[p]}h.sort((c,u)=>c[6]-u[6]);const f=new Float32Array(r*8);for(let c=0;c<h.length;c++){const u=h[c],o=c*8;f[o+0]=u[0],f[o+1]=u[1],f[o+2]=u[2],f[o+3]=u[3],f[o+4]=u[4],f[o+5]=u[5],f[o+6]=u[6],f[o+7]=u[7]}return{segments:f,segmentCount:r,trajectoryCount:i,maxTimeIndex:s,headPositions:a}}function At(n,e,t){const i=new Array(e+1);if(!t||t.mode==="none")for(let s=0;s<=e;s++)i[s]=1;else if(t.mode==="recency"){const s=t.timeWindow??.8,r=Math.max(1,Math.floor(s*n.length)),h=Math.max(0,e-r);for(let a=0;a<=e;a++)a<h?i[a]=0:i[a]=(a-h)/Math.max(e-h,1)}else if(t.mode==="custom"&&t.perSegmentAlphas){const s=t.perSegmentAlphas;for(let r=0;r<=e;r++)i[r]=s[0]?.[r]??1}else for(let s=0;s<=e;s++)i[s]=1;return i}const It=`/**
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
`,me=2.5,ye=.8,Ot="#3b82f6",Bt=64;class Te{constructor(e,t,i,s,r,h,a,f){this.segmentBuffer=null,this.headBuffer=null,this.bindGroup=null,this.headBindGroup=null,this.depthTexture=null,this.segmentCount=0,this.headCount=0,this.thickness=me,this.colorR=.231,this.colorG=.51,this.colorB=.965,this.baseOpacity=ye,this.outlineThickness=me+2,this.outlineColorR=0,this.outlineColorG=0,this.outlineColorB=0,this.outlineOpacity=ye,this.hasOutline=!1,this.device=e,this.context=t,this.format=i,this.pipeline=s,this.uniformBuffer=r,this.canvasWidth=h,this.canvasHeight=a,this.dpr=f,this.createDepthTexture()}static async create(e,t={}){const i=t.dpr??(typeof window<"u"?window.devicePixelRatio:1)??1;if(!navigator.gpu)throw new Error("WebGPU is not supported in this browser");const s=await navigator.gpu.requestAdapter();if(!s)throw new Error("Failed to get WebGPU adapter");const r=await s.requestDevice(),h=e.getContext("webgpu");if(!h)throw new Error("Failed to get WebGPU canvas context");const a=navigator.gpu.getPreferredCanvasFormat();h.configure({device:r,format:a,alphaMode:"premultiplied"});const f=r.createShaderModule({label:"Trajectory Shader",code:It}),c=r.createBuffer({label:"Trajectory Uniforms",size:Bt,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),u=r.createBindGroupLayout({label:"Trajectory Bind Group Layout",entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}}]}),o=r.createPipelineLayout({label:"Trajectory Pipeline Layout",bindGroupLayouts:[u]}),P=r.createRenderPipeline({label:"Trajectory Render Pipeline",layout:o,vertex:{module:f,entryPoint:"vs_main"},fragment:{module:f,entryPoint:"fs_main",targets:[{format:a,blend:{color:{srcFactor:"one",dstFactor:"one",operation:"max"},alpha:{srcFactor:"one",dstFactor:"one",operation:"max"}}}]},depthStencil:{format:"depth24plus",depthWriteEnabled:!0,depthCompare:"less"},primitive:{topology:"triangle-list"}});return new Te(r,h,a,P,c,e.width,e.height,i)}createDepthTexture(){this.depthTexture&&this.depthTexture.destroy(),this.depthTexture=this.device.createTexture({label:"Trajectory Depth Texture",size:[this.canvasWidth,this.canvasHeight],format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT})}setTrajectories(e,t,i){this.thickness=i.strokeWidth??me;const s=Ne(i.color??Ot);if(this.colorR=s[0],this.colorG=s[1],this.colorB=s[2],this.baseOpacity=i.opacity??ye,this.hasOutline=!!i.outline,i.outline){const h=Ne(i.outline.color??"#000000"),a=i.outline.strokeWidth??2;this.outlineThickness=this.thickness+a,this.outlineColorR=h[0],this.outlineColorG=h[1],this.outlineColorB=h[2],this.outlineOpacity=i.outline.opacity??this.baseOpacity}const r=xt(e,t,i);if(this.segmentCount=r.segmentCount,this.headCount=r.trajectoryCount,this.segmentCount===0){this.segmentBuffer=null,this.headBuffer=null,this.bindGroup=null,this.headBindGroup=null;return}this.segmentBuffer&&this.segmentBuffer.destroy(),this.headBuffer&&this.headBuffer.destroy(),this.segmentBuffer=this.device.createBuffer({label:"Trajectory Segments",size:r.segments.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.segmentBuffer,0,r.segments.buffer),this.headBuffer=this.device.createBuffer({label:"Trajectory Heads",size:r.headPositions.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.headBuffer,0,r.headPositions.buffer),this.bindGroup=this.device.createBindGroup({label:"Trajectory Bind Group",layout:this.pipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.uniformBuffer}},{binding:1,resource:{buffer:this.segmentBuffer}}]}),this.headBindGroup=this.device.createBindGroup({label:"Trajectory Head Bind Group",layout:this.pipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.uniformBuffer}},{binding:1,resource:{buffer:this.headBuffer}}]})}draw(e,t,i,s){this.setTrajectories(e,t,i),this.render(s)}render(e){if(!this.bindGroup||this.segmentCount===0||!this.depthTexture){if(e){const f=this.device.createCommandEncoder(),c=this.context.getCurrentTexture().createView();f.beginRenderPass({colorAttachments:[{view:c,clearValue:{r:e[0],g:e[1],b:e[2],a:e[3]},loadOp:"clear",storeOp:"store"}]}).end(),this.device.queue.submit([f.finish()])}return}const t=this.device.createCommandEncoder(),i=this.context.getCurrentTexture().createView(),s=this.depthTexture.createView(),r=e?"clear":"load",h=e?{r:e[0],g:e[1],b:e[2],a:e[3]}:{r:0,g:0,b:0,a:0},a=t.beginRenderPass({colorAttachments:[{view:i,clearValue:h,loadOp:r,storeOp:"store"}],depthStencilAttachment:{view:s,depthClearValue:1,depthLoadOp:r,depthStoreOp:"store"}});this.hasOutline&&(this.updateUniforms(!0),a.setPipeline(this.pipeline),a.setBindGroup(0,this.bindGroup),a.draw(6,this.segmentCount,0,0)),this.updateUniforms(!1),a.setPipeline(this.pipeline),a.setBindGroup(0,this.bindGroup),a.draw(6,this.segmentCount,0,0),a.end(),this.device.queue.submit([t.finish()])}updateUniforms(e){const t=new Float32Array(16);t[0]=this.canvasWidth,t[1]=this.canvasHeight,t[2]=this.dpr,t[3]=0,t[4]=this.thickness,t[5]=this.colorR,t[6]=this.colorG,t[7]=this.colorB,t[8]=this.baseOpacity,t[9]=this.outlineThickness,t[10]=this.outlineColorR,t[11]=this.outlineColorG,t[12]=this.outlineColorB,t[13]=this.outlineOpacity,t[14]=e?1:0,t[15]=0,this.device.queue.writeBuffer(this.uniformBuffer,0,t)}resize(e,t,i){this.canvasWidth=e,this.canvasHeight=t,i!==void 0&&(this.dpr=i),this.createDepthTexture()}get backend(){return"gpu"}destroy(){this.uniformBuffer.destroy(),this.segmentBuffer&&this.segmentBuffer.destroy(),this.headBuffer&&this.headBuffer.destroy(),this.depthTexture&&this.depthTexture.destroy()}}function Xt(n,e,t,i,s){n.beginPath(),n.moveTo(e,t),n.lineTo(i,s),n.stroke()}function Mt(n,e,t,i,s,r){let a=Math.atan2(s-t,i-e);n.beginPath(),n.moveTo(i+r*Math.cos(a),s+r*Math.sin(a)),a+=2*Math.PI/3,n.lineTo(i+r*Math.cos(a),s+r*Math.sin(a)),a+=2*Math.PI/3,n.lineTo(i+r*Math.cos(a),s+r*Math.sin(a)),n.closePath(),n.fill()}function Jt(n,e,t,i,s,r){const h=Math.atan2(s-t,i-e);n.beginPath(),n.moveTo(e,t),n.lineTo(i,s),n.stroke();let a=h;n.beginPath(),n.moveTo(i+r*Math.cos(a),s+r*Math.sin(a)),a+=2*Math.PI/3,n.lineTo(i+r*Math.cos(a),s+r*Math.sin(a)),a+=2*Math.PI/3,n.lineTo(i+r*Math.cos(a),s+r*Math.sin(a)),n.closePath(),n.fill()}function ve(n,e,t,i){if(t==null||isNaN(t))throw new Error(`drawTrajectories: segmentIndex is invalid (${t})`);const s=e.length;if(s===0)return;n.lineCap="round",n.lineJoin="round";const r=i.outline,h=r?.strokeWidth??2,a=i.strokeWidth+h,f=r?.color??"#000000",c=r?.opacity??i.opacity;for(let u=0;u<s;u++){const o=e[u];if(!o||o.length===0)continue;if(i.showPreview){if(r){n.lineWidth=a,n.strokeStyle=f,n.globalAlpha=(i.previewOpacity??.15)*(c/i.opacity),n.beginPath();for(let p=0;p<o.length;p++){const[g,d]=o[p];p===0?n.moveTo(g,d):n.lineTo(g,d)}n.stroke()}n.lineWidth=i.strokeWidth,n.strokeStyle=i.color,n.globalAlpha=i.previewOpacity??.15,n.beginPath();for(let p=0;p<o.length;p++){const[g,d]=o[p];p===0?n.moveTo(g,d):n.lineTo(g,d)}n.stroke()}const P=i.perSegmentAlphas?.[u];if(P){const p=i.gradientSubdivisions??1;for(let g=0;g<o.length-1;g++){const d=P[g]??0,T=P[g+1]??0;if(d<=0&&T<=0)continue;const[b,y]=o[g],[x,O]=o[g+1];for(let E=0;E<p;E++){const D=E/p,H=(E+1)/p,N=d+(T-d)*((E+.5)/p);if(N<=0)continue;const Z=b+(x-b)*D,J=y+(O-y)*D,K=b+(x-b)*H,ne=y+(O-y)*H;r&&(n.lineWidth=a,n.strokeStyle=f,n.globalAlpha=N*(c/i.opacity),n.beginPath(),n.moveTo(Z,J),n.lineTo(K,ne),n.stroke()),n.lineWidth=i.strokeWidth,n.strokeStyle=i.color,n.globalAlpha=N,n.beginPath(),n.moveTo(Z,J),n.lineTo(K,ne),n.stroke()}}}else{const p=Math.floor(t),g=t-p,d=Math.min(p+1,o.length-1);let T,b;if(g>0&&d+1<o.length){const[y,x]=o[d],[O,E]=o[d+1];T=y+g*(O-y),b=x+g*(E-x)}else[T,b]=o[d];if(r){n.lineWidth=a,n.strokeStyle=f,n.globalAlpha=c,n.beginPath();for(let y=0;y<=d&&y<o.length;y++){const[x,O]=o[y];y===0?n.moveTo(x,O):n.lineTo(x,O)}g>0&&d+1<o.length&&n.lineTo(T,b),n.stroke()}n.lineWidth=i.strokeWidth,n.strokeStyle=i.color,n.globalAlpha=i.opacity,n.beginPath();for(let y=0;y<=d&&y<o.length;y++){const[x,O]=o[y];y===0?n.moveTo(x,O):n.lineTo(x,O)}g>0&&d+1<o.length&&n.lineTo(T,b),n.stroke()}if(i.showHeadMarker!==!1){const p=Math.floor(t),g=t-p,d=Math.min(p+1,o.length-1);let T,b,y,x;if(g>0&&d+1<o.length){const[D,H]=o[d],[N,Z]=o[d+1];T=D+g*(N-D),b=H+g*(Z-H),y=D,x=H}else{[T,b]=o[d];const D=Math.max(0,d-1);[y,x]=o[D]}const O=i.headStyle?.type??"circle",E=i.headStyle?.radius??i.pointRadius;r&&O==="circle"&&(n.beginPath(),n.arc(T,b,i.pointRadius+(a-i.strokeWidth)/2,0,2*Math.PI),n.fillStyle=f,n.globalAlpha=c,n.fill()),n.fillStyle=i.headStyle?.color??i.color,n.globalAlpha=i.headStyle?.opacity??i.opacity,O==="arrow"?Mt(n,y,x,T,b,E):(n.beginPath(),n.arc(T,b,E,0,2*Math.PI),n.fill())}}n.globalAlpha=1}const Pe=new WeakMap,be=new WeakMap,Ze=new WeakSet;async function Rt(n){const e=Pe.get(n);if(e)return e;const t=be.get(n);if(t)return t;const i=(async()=>{try{const s=typeof window<"u"?window.devicePixelRatio:1,r=await Te.create(n,{dpr:s});return Pe.set(n,r),r}catch(s){return console.warn("[drawTrajectories] GPU unavailable, falling back to CPU:",s),null}finally{be.delete(n)}})();return be.set(n,i),i}function Et(n){return n.opacityGradient?n:n.perSegmentAlphas?{...n,opacityGradient:{mode:"custom",perSegmentAlphas:n.perSegmentAlphas}}:n}async function Gt(n,e,t,i,s){const r=Et(i);if(n instanceof HTMLCanvasElement){const a=n,f=[0,0,0,0];if(Ze.has(a)){const o=a.getContext("2d");o&&(o.clearRect(0,0,a.width,a.height),ve(o,e,t,r));return}const c=Pe.get(a);if(c){c.draw(e,t,r,f);return}const u=await Rt(a);if(!u){Ze.add(a);const o=a.getContext("2d");o&&(o.clearRect(0,0,a.width,a.height),ve(o,e,t,r));return}u.draw(e,t,r,f)}else ve(n,e,t,r)}function Qe(n,e){let t=null,i=null;function s(a=n,f=e){if(!t)return;const c=window.devicePixelRatio||1;t.width=a*c,t.height=f*c,i=t.getContext("2d"),i&&i.setTransform(c,0,0,c,0,0)}function r(a){return t=a,s(),{destroy(){t=null,i=null}}}function h(a){t=a,s()}return{bindCanvas:r,init:h,resize:s,get canvas(){return t},get ctx(){return i}}}class jt{constructor(){this.duration=1,this.looping=!1,this.endPauseDuration=0,this._initialState=null,this._time=0,this._isPlaying=!1,this._isSeeking=!1,this._cachedState=null,this.clips=[],this.nextClipId=0,this.clock=new Dt,this.tickCallbacks=new Set,this.endPauseRemaining=0}get initialState(){if(this._initialState===null)throw new Error("Timeline.initialState must be set before use");return this._initialState}set initialState(e){this._initialState=e,this._cachedState=null}get time(){return this._time}get isPlaying(){return this._isPlaying}get isSeeking(){return this._isSeeking}get state(){return this._cachedState===null&&(this._cachedState=this.resolveState()),this._cachedState}add(e,t,i={}){const s=i.id??`clip-${this.nextClipId++}`;return this.clips.push({clip:e,start:t.start,end:t.end,options:{layer:i.layer??0,ephemeral:i.ephemeral??!1,id:s},playCount:0}),this._cachedState=null,s}remove(e){const t=this.clips.findIndex(i=>i.options.id===e);return t!==-1?(this.clips.splice(t,1),this._cachedState=null,!0):!1}clearLayer(e){this.clips=this.clips.filter(t=>t.options.layer!==e),this._cachedState=null}setState(e,t,i={}){const s=this._time/this.duration;return this.add({name:e,reduce:()=>t},{start:s,end:s},i)}playClip(e,t,i={}){const s=this._time/this.duration;return this.add(e,{start:s,end:s+t},{...i,ephemeral:!0})}setEndPause(e){this.endPauseDuration=e}play(){this._isPlaying||(this._isPlaying=!0,this.clock.start(e=>this.tick(e)))}pause(){this._isPlaying&&(this._isPlaying=!1,this.clock.stop())}startSeeking(){this._isSeeking=!0}endSeeking(){this._isSeeking=!1}seek(e){this._time=Math.max(0,Math.min(e*this.duration,this.duration)),this.endPauseRemaining=0,this._cachedState=null,this.tickCallbacks.forEach(t=>t(this._time/this.duration,this.state))}reset(){this._time=0,this.endPauseRemaining=0,this._cachedState=null}dispose(){this.pause(),this.tickCallbacks.clear(),this.clips=[],this._cachedState=null}resetState(){this._time=0,this.endPauseRemaining=0,this._cachedState=null,this.clips.forEach(e=>e.playCount=0)}replaceClips(e){this.clips=[],this._cachedState=null,e.forEach(({clip:t,timing:i,options:s})=>this.add(t,i,s))}onTick(e){return this.tickCallbacks.add(e),()=>{this.tickCallbacks.delete(e)}}get isAtEnd(){return this._time>=this.duration}tick(e){if(this._isSeeking){this.tickCallbacks.forEach(t=>t(this._time/this.duration,this.state));return}if(this.endPauseRemaining>0){this.endPauseRemaining-=e,this.endPauseRemaining<=0&&this.looping&&(this._time=0,this._cachedState=null),this.tickCallbacks.forEach(t=>t(this._time/this.duration,this.state));return}this._time=Math.min(this._time+e,this.duration),this._cachedState=null,this.isAtEnd&&(this.endPauseDuration>0&&this.looping?this.endPauseRemaining=this.endPauseDuration:this.looping?(this._time=0,this.cleanupEphemeralClips()):this.pause()),this.tickCallbacks.forEach(t=>t(this._time/this.duration,this.state))}resolveState(){let t={...this.initialState};const i=new Map;for(const r of this.clips){const{clip:h,start:a,end:f,options:c}=r,u=f-a,o=u===0,P=this._time/this.duration;if(!(o?Math.abs(P-a)<1e-4:P>=a))continue;const g=P>f;(o||g?1:Math.min(1,Math.max(0,(P-a)/u)))>=1&&c.ephemeral&&r.playCount++,i.has(c.layer)||i.set(c.layer,[]),i.get(c.layer).push(r)}const s=Array.from(i.keys()).sort((r,h)=>r-h);for(const r of s){const h=i.get(r);let a={};for(const f of h){const{clip:c,start:u,end:o}=f,P=o-u,p=P===0,g=this._time/this.duration,d=g>o,T=p||d?1:Math.min(1,Math.max(0,(g-u)/P)),b=c.reduce(T,t);b!==null&&(a={...a,...b})}t={...t,...a}}return t}cleanupEphemeralClips(){this.clips=this.clips.filter(e=>!e.options.ephemeral||e.playCount===0)}}class Dt{constructor(){this.rafId=null,this.lastTime=null}start(e){const t=i=>{this.lastTime===null&&(this.lastTime=i);const s=(i-this.lastTime)/1e3;this.lastTime=i,e(s),this.rafId=requestAnimationFrame(t)};this.rafId=requestAnimationFrame(t)}stop(){this.rafId!==null&&(cancelAnimationFrame(this.rafId),this.rafId=null),this.lastTime=null}get isRunning(){return this.rafId!==null}}function Ft(){return{name:"Pause",reduce:()=>null}}function Ut(n){const e={wasPlayingBeforeHidden:!1};function t(i){const s=n();s&&(!i&&s.isPlaying?(e.wasPlayingBeforeHidden=!0,s.pause()):i&&e.wasPlayingBeforeHidden&&(e.wasPlayingBeforeHidden=!1,s.play()))}return{state:e,handleVisibilityChange:t}}class he{constructor(e,t={}){this.ctx=null,this._initialized=!1;const i=e.length>0?Math.max(...e.map(s=>(s?.length??1)-1),1):1;this.data={pathlines:e,numSegments:i},this.style=t.style??{},this.clip={name:"pathline-animation",reduce:s=>({segmentIndex:Math.floor(s*i)})}}async init(e){const t=e.getContext("2d");if(!t)throw new Error("Failed to get 2D rendering context");this.ctx=t,this._initialized=!0}get initialized(){return this._initialized}draw(e,t){if(!this.ctx){console.warn("PathlineAnimation.draw() called before init()");return}const i=e.pathlines??this.data.pathlines;if(i.length===0)return;const s={strokeWidth:this.style.strokeWidth??2,color:this.style.color??"#3b82f6",opacity:this.style.opacity??.8,pointRadius:this.style.pointRadius??4,...this.style,...t,perSegmentAlphas:e.perSegmentAlphas};Gt(this.ctx,i,e.segmentIndex,s)}destroy(){this.ctx=null,this._initialized=!1}static fromTrajectories(e,t={}){return new he(e,t)}}var Wt=Se('<div class="panel-container svelte-ipvq8u"><div class="panel-label svelte-ipvq8u"> </div> <canvas class="panel-canvas svelte-ipvq8u" style="cursor: pointer;"></canvas></div>'),zt=Se('<div class="panel-container svelte-ipvq8u"><div class="panel-label svelte-ipvq8u"> </div> <canvas class="panel-canvas svelte-ipvq8u" style="cursor: pointer;"></canvas></div>'),Lt=Se(`<div class="placeholder svelte-ipvq8u"><p>Rectified flow superimposed visualization requires rectified flow data
      with at least 2 steps.</p></div>`);function Kt(n,e){gt(e,!1);const t=()=>Pt(l(te),"$figureIsActive",i),[i,s]=Tt(),r=G(),h=G(),a=G(),f=G(),c=G(),u=G(),o=G();let P=m(e,"flowMatchingClient",8,null),p=m(e,"rectifiedFlowClient",8,null),g=m(e,"leftTrajectories",24,()=>[]),d=m(e,"rightTrajectories",24,()=>[]),T=m(e,"targetDistribution",24,()=>[]),b=m(e,"canvasWidth",8,400),y=m(e,"canvasHeight",8,400),x=m(e,"marginWidth",8,10),O=m(e,"marginHeight",8,10),E=m(e,"gap",8,20),D=m(e,"domainRange",24,()=>({xMin:-1.7,xMax:1.7,yMin:-1.7,yMax:1.7})),H=m(e,"leftLabel",8,"Flow Matching"),N=m(e,"rightLabel",8,"Rectified Flow"),Z=m(e,"labelFontSize",8,26),J=m(e,"labelColor",24,()=>q.stylingSettings.label.color),K=m(e,"labelOpacity",24,()=>q.stylingSettings.label.opacity),ne=m(e,"targetColor",8,"#3b82f6"),Ye=m(e,"targetOpacity",8,.35),Xe=m(e,"targetPointRadius",8,5),we=m(e,"trajectoryColor",24,()=>q.stylingSettings.trajectory.color),Je=m(e,"trajectoryStrokeWidth",24,()=>q.stylingSettings.trajectory.strokeWidth);m(e,"trajectoryPointRadius",24,()=>q.stylingSettings.trajectory.endpointRadius);let ke=m(e,"trajectoryOpacity",24,()=>q.stylingSettings.trajectory.opacity);m(e,"trajectoryFullOpacity",24,()=>q.stylingSettings.trajectory.fullOpacity),m(e,"showTrajectoryPreview",8,!1),m(e,"alphaTimeWindow",8,.8);let _e=m(e,"endpointRadius",24,()=>q.stylingSettings.trajectory.endpointRadius),ie=m(e,"animationDuration",8,1e4),Ce=m(e,"timing",24,()=>({pauseStart:.8})),xe=m(e,"playingByDefault",8,!0),Ae=m(e,"maxUserTrajectories",24,()=>q.interactiveSettings.maxUserTrajectories),Ke=m(e,"onInitialized",8,void 0),$e=m(e,"backgroundVisible",8,!0),Ie=m(e,"children",8,void 0),et=m(e,"sliderLabelSize",8,"1.1em"),W=G(null),z=G(null);const de=Qe(b(),y()),fe=Qe(b(),y());let F,U,A=G(null),$=null,se=null,ee=G(!1),Oe=[],Be=[],Me=[],L=[],ae=[],re=[],Re=!1,pe=0,Q=null,Y=null,te=G();const{handleVisibilityChange:tt}=Ut(()=>l(A));function nt(){if(!l(h))return;const{xMin:v,xMax:w,yMin:M,yMax:I}=D();F=qe().domain([v,w]).range([x(),b()-x()]),U=qe().domain([M,I]).range([O(),y()-O()])}function Ee(v){if(!F||!U||!v||v.length===0)return[];const w=v[0]?.length||0;return Array.from({length:w},(M,I)=>v.map(S=>[F(S[I][0]),U(S[I][1])]))}function it(){!F||!U||(Oe=T().map(v=>[F(v[0]),U(v[1])]),Be=Ee(g()),Me=Ee(d()))}function st(){!l(W)||!l(z)||!l(h)||(nt(),it(),De({time:0,segmentIndex:0}),j(ee,!0),Ke()?.())}async function at(){const v={color:we(),strokeWidth:Je(),pointRadius:_e(),opacity:ke()};$=he.fromTrajectories(Be,{style:v}),se=he.fromTrajectories(Me,{style:v}),await Promise.all([$.init(l(W)),se.init(l(z))]),j(A,new jt),ge(A,l(A).initialState={segmentIndex:0}),l(A).add($.clip,{start:0,end:Ce().pauseStart}),l(A).add(Ft(),{start:Ce().pauseStart,end:1}),ge(A,l(A).duration=ie()/1e3),ge(A,l(A).looping=!0),l(A).onTick((w,M)=>{M.segmentIndex,De(M)})}function Ge(){l(A)&&l(A).play()}function je(v,w,M,I,S){if(!v||!w||!M)return;w.clearRect(0,0,b(),y()),Ct(w,Oe,Xe(),ne(),Ye());const _=Re?.15:ke();if(M.draw(I,{opacity:_}),S.length>0){const C=S.filter(k=>k&&k.length>=2);if(C.length>0){const k=C[0].length-1,R=Math.min(I.segmentIndex,k-1);M.draw({...I,segmentIndex:R,pathlines:C},{opacity:1})}for(const k of S)if(k&&k.length===1){const[R,B]=k[0];w.globalAlpha=1,w.beginPath(),w.arc(R,B,_e(),0,Math.PI*2),w.fillStyle=we(),w.fill()}}}function De(v){!l(h)||!l(u)||!l(o)||!$||!se||(je(de.canvas,l(u),$,v,ae),je(fe.canvas,l(o),se,v,re))}function Fe(v,w){if(!P()||!p())return;const I=(w==="left"?l(W):l(z)).getBoundingClientRect(),S=b()/I.width,_=y()/I.height,C=(v.clientX-I.left)*S,k=(v.clientY-I.top)*_,R=F.invert(C),B=U.invert(k);rt([R,B])}function rt(v){if(!P()||!p())return;Q&&(P().stopRequest(Q),Q=null),Y&&(p().stopRequest(Y),Y=null),L=[...L,v],L.length>Ae()&&(L=L.slice(-Ae())),Re=!0,pe=0,ae=L.map(S=>[[F(S[0]),U(S[1])]]),re=L.map(S=>[[F(S[0]),U(S[1])]]),l(A)&&l(A).reset(),Ge();function w(){pe++,pe>=2&&(Q=null,Y=null)}const M=P().sampleFromInitialPoints(L,l(a),{},(S,_)=>{ae=ae.map((C,k)=>[...C,[F(_[k][0]),U(_[k][1])]])});Q=M.requestId,M.promise.then(w);const I=p().sampleFromInitialPoints(L,l(a),{},(S,_)=>{re=re.map((C,k)=>[...C,[F(_[k][0]),U(_[k][1])]])});Y=I.requestId,I.promise.then(w)}mt(()=>{l(A)&&l(A).pause(),Q&&P()&&P().stopRequest(Q),Y&&p()&&p().stopRequest(Y)}),V(()=>X(Ie()),()=>{j(r,Ie())}),V(()=>(X(g()),X(d()),X(T())),()=>{j(h,g()?.length>0&&d()?.length>0&&T()?.length>0)}),V(()=>(l(h),X(g())),()=>{j(a,l(h)?g().length:1)}),V(()=>l(a),()=>{j(f,l(a)-1)}),V(()=>(l(f),X(ie())),()=>{j(c,l(f)>0?ie()/l(f):ie())}),V(()=>l(W),()=>{j(u,l(W)&&de.ctx)}),V(()=>l(z),()=>{j(o,l(z)&&fe.ctx)}),V(()=>(l(h),l(W),l(z),l(ee),X(xe())),()=>{l(h)&&l(W)&&l(z)&&!l(ee)&&(st(),at().then(()=>{xe()&&Ge()}))}),V(()=>(l(te),l(ee),t()),()=>{l(te)!==void 0&&l(ee)&&tt(t())}),yt(),dt();var Ue=ht(),ot=vt(Ue);{var lt=v=>{_t(v,{get gap(){return E()},get caption(){return l(r)},get backgroundVisible(){return $e()},get isActive(){return l(te)},set isActive(S){wt(j(te,S),"$figureIsActive",i)},left:S=>{var _=Wt(),C=le(_),k=le(C,!0);ce(C);var R=ze(C,2);R.__click=B=>Fe(B,"left"),Ve(R,B=>j(W,B),()=>l(W)),He(R,B=>de.bindCanvas?.(B)),ce(_),Le(()=>{ue(_,`max-width: ${b()??""}px;`),ue(C,`font-size: ${Z()??""}px; color: ${J()??""}; opacity: ${K()??""};`),We(k,H())}),oe(S,_)},right:S=>{var _=zt(),C=le(_),k=le(C,!0);ce(C);var R=ze(C,2);R.__click=B=>Fe(B,"right"),Ve(R,B=>j(z,B),()=>l(z)),He(R,B=>fe.bindCanvas?.(B)),ce(_),Le(()=>{ue(_,`max-width: ${b()??""}px;`),ue(C,`font-size: ${Z()??""}px; color: ${J()??""}; opacity: ${K()??""};`),We(k,N())}),oe(S,_)},footer:S=>{kt(S,{get timeline(){return l(A)},color:"#f17720",get labelSize(){return et()}})},$$slots:{left:!0,right:!0,footer:!0},$$legacy:!0})},ct=v=>{var w=Lt();oe(v,w)};St(ot,v=>{l(h)?v(lt):v(ct,!1)})}oe(n,Ue),bt(),s()}ut(["click"]);export{he as P,Kt as R,jt as T,Xt as a,Ut as b,He as c,Jt as d,Gt as e,Ft as f,Mt as g,Qe as u};
