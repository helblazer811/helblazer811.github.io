function Z(e,o,n,t,r,i,l,s=1){const d=s!==1;d&&(e.save(),e.globalAlpha=s),e.beginPath(),e.moveTo(o,n),e.lineTo(t,r),e.stroke(),d&&e.restore()}function L(e,o,n,t,r,i){let s=Math.atan2(r-n,t-o);e.beginPath(),e.moveTo(t+i*Math.cos(s),r+i*Math.sin(s)),s+=2*Math.PI/3,e.lineTo(t+i*Math.cos(s),r+i*Math.sin(s)),s+=2*Math.PI/3,e.lineTo(t+i*Math.cos(s),r+i*Math.sin(s)),e.closePath(),e.fill()}function Q(e,o,n,t,r,i){const l=Math.atan2(r-n,t-o);e.beginPath(),e.moveTo(o,n),e.lineTo(t,r),e.stroke();let s=l;e.beginPath(),e.moveTo(t+i*Math.cos(s),r+i*Math.sin(s)),s+=2*Math.PI/3,e.lineTo(t+i*Math.cos(s),r+i*Math.sin(s)),s+=2*Math.PI/3,e.lineTo(t+i*Math.cos(s),r+i*Math.sin(s)),e.closePath(),e.fill()}function I(e){if(e.startsWith("#")){const n=e.slice(1);return n.length===3?[parseInt(n[0]+n[0],16)/255,parseInt(n[1]+n[1],16)/255,parseInt(n[2]+n[2],16)/255]:[parseInt(n.slice(0,2),16)/255,parseInt(n.slice(2,4),16)/255,parseInt(n.slice(4,6),16)/255]}const o=e.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);return o?[parseInt(o[1])/255,parseInt(o[2])/255,parseInt(o[3])/255]:(console.warn(`[parseColor] Could not parse color: ${e}, defaulting to white`),[1,1,1])}function F(e,o,n){const t=e.length;if(t===0)return{segments:new Float32Array(0),segmentCount:0,trajectoryCount:0,maxTimeIndex:0,headPositions:new Float32Array(0)};let r=0;for(const h of e){const a=Math.min(o+1,h.length-1);a>r&&(r=a)}let i=0;for(const h of e){const a=Math.min(o+1,h.length-1);i+=a}const l=[],s=new Float32Array(t*4),d=Math.max(r,1)+1;for(let h=0;h<t;h++){const a=e[h],y=Math.min(o+1,a.length-1),c=V(a,y,n.opacityGradient);for(let g=0;g<y;g++){const b=(g+h*1e-4)/d;l.push([a[g][0],a[g][1],a[g+1][0],a[g+1][1],c[g],c[g+1],b,0])}const u=y,p=(u+.5+h*1e-4)/d;s[h*4+0]=a[u][0],s[h*4+1]=a[u][1],s[h*4+2]=p,s[h*4+3]=c[u]}l.sort((h,a)=>h[6]-a[6]);const f=new Float32Array(i*8);for(let h=0;h<l.length;h++){const a=l[h],y=h*8;f[y+0]=a[0],f[y+1]=a[1],f[y+2]=a[2],f[y+3]=a[3],f[y+4]=a[4],f[y+5]=a[5],f[y+6]=a[6],f[y+7]=a[7]}return{segments:f,segmentCount:i,trajectoryCount:t,maxTimeIndex:r,headPositions:s}}function V(e,o,n){const t=new Array(o+1);if(!n||n.mode==="none")for(let r=0;r<=o;r++)t[r]=1;else if(n.mode==="recency"){const r=n.timeWindow??.8,i=Math.max(1,Math.floor(r*e.length)),l=Math.max(0,o-i);for(let s=0;s<=o;s++)s<l?t[s]=0:t[s]=(s-l)/Math.max(o-l,1)}else if(n.mode==="custom"&&n.perSegmentAlphas){const r=n.perSegmentAlphas;for(let i=0;i<=o;i++)t[i]=r[0]?.[i]??1}else for(let r=0;r<=o;r++)t[r]=1;return t}const j=`/**
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

  // Head-marker radius in logical pixels (drawn as a filled circle at the
  // current frontier of each trajectory). Same value used by the CPU path.
  pointRadius: f32,
  _pad2: f32,
  _pad3: f32,
  _pad4: f32,
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

  // Anti-aliased alpha from signed distance.
  // aaWidth is half the smoothstep band, in physical pixels. Keep it small
  // (~0.5 physical px each side) so the soft edge doesn't dominate the
  // visual weight of thin strokes — Canvas2D's native AA spans roughly
  // 1 physical pixel total transition, and we want to match that.
  let aaWidth = 0.5;
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

  // Output premultiplied alpha — the canvas context is configured with
  // \`alphaMode: 'premultiplied'\`, so straight RGBA would be interpreted as
  // already-multiplied and the compositor would divide RGB by alpha when
  // displaying, brightening the color (e.g. orange #f17720 at 0.85 alpha
  // would display as #ff8c26 instead of staying #f17720).
  return vec4<f32>(colorR * finalAlpha, colorG * finalAlpha, colorB * finalAlpha, finalAlpha);
}

// ============================================================================
// Head Marker Vertex Shader
// ============================================================================

// Head data: [x, y, zValue, alpha] per marker. The head pipeline uses its own
// bind group layout (binding 2), keeping segments@1 and heads@2 from
// colliding within this single shader module.
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

  // Head dot radius is independent of stroke thickness (matches the CPU path,
  // which uses style.pointRadius for the marker and style.strokeWidth for the
  // line). On the outline pass, expand the radius by the outline thickness so
  // the dot gets a matching halo.
  let outlineExpand = select(0.0, uniforms.outlineThickness * 0.5, uniforms.isOutlinePass > 0.5);
  let radius = (uniforms.pointRadius + outlineExpand) * dpr;
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

  // Mirror the radius expansion done in vs_head so the SDF threshold is
  // consistent across the two stages.
  let outlineExpand = select(0.0, uniforms.outlineThickness * 0.5, uniforms.isOutlinePass > 0.5);
  let radius = (uniforms.pointRadius + outlineExpand) * dpr;

  let colorR = select(uniforms.colorR, uniforms.outlineColorR, uniforms.isOutlinePass > 0.5);
  let colorG = select(uniforms.colorG, uniforms.outlineColorG, uniforms.isOutlinePass > 0.5);
  let colorB = select(uniforms.colorB, uniforms.outlineColorB, uniforms.isOutlinePass > 0.5);
  let baseOpacity = select(uniforms.baseOpacity, uniforms.outlineOpacity, uniforms.isOutlinePass > 0.5);

  // SDF for circle
  let dist = length(input.localPos);
  let sd = dist - radius;

  // Anti-aliased alpha. Match the stroke shader's aaWidth so head dots and
  // strokes share the same edge softness instead of looking smudged.
  let aaWidth = 0.5;
  let shapeAlpha = 1.0 - smoothstep(-aaWidth, aaWidth, sd);

  let finalAlpha = shapeAlpha * input.alpha * baseOpacity;

  if (finalAlpha < 0.001) {
    discard;
  }

  // Premultiplied output — see the stroke fragment shader for why.
  return vec4<f32>(colorR * finalAlpha, colorG * finalAlpha, colorB * finalAlpha, finalAlpha);
}
`,O=2.5,G=.8,H="#3b82f6",W=4,z=80;class E{constructor(o,n,t,r,i,l,s,d,f){this.segmentBuffer=null,this.headBuffer=null,this.bindGroup=null,this.headBindGroup=null,this.depthTexture=null,this.segmentCount=0,this.headCount=0,this.thickness=O,this.pointRadius=W,this.colorR=.231,this.colorG=.51,this.colorB=.965,this.baseOpacity=G,this.outlineThickness=O+2,this.outlineColorR=0,this.outlineColorG=0,this.outlineColorB=0,this.outlineOpacity=G,this.hasOutline=!1,this.device=o,this.context=n,this.format=t,this.pipeline=r,this.headPipeline=i,this.uniformBuffer=l,this.canvasWidth=s,this.canvasHeight=d,this.dpr=f,this.createDepthTexture()}static async create(o,n={}){const t=n.dpr??(typeof window<"u"?window.devicePixelRatio:1)??1;if(!navigator.gpu)throw new Error("WebGPU is not supported in this browser");const r=await navigator.gpu.requestAdapter();if(!r)throw new Error("Failed to get WebGPU adapter");const i=await r.requestDevice(),l=o.getContext("webgpu");if(!l)throw new Error("Failed to get WebGPU canvas context");const s=navigator.gpu.getPreferredCanvasFormat();l.configure({device:i,format:s,alphaMode:"premultiplied"});const d=i.createShaderModule({label:"Trajectory Shader",code:j}),f=i.createBuffer({label:"Trajectory Uniforms",size:z,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),h=i.createBindGroupLayout({label:"Trajectory Bind Group Layout",entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}}]}),a=i.createBindGroupLayout({label:"Trajectory Head Bind Group Layout",entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:2,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}}]}),y=i.createPipelineLayout({label:"Trajectory Pipeline Layout",bindGroupLayouts:[h]}),c=i.createPipelineLayout({label:"Trajectory Head Pipeline Layout",bindGroupLayouts:[a]}),u=[{format:s,blend:{color:{srcFactor:"one",dstFactor:"one",operation:"max"},alpha:{srcFactor:"one",dstFactor:"one",operation:"max"}}}],p={format:"depth24plus",depthWriteEnabled:!0,depthCompare:"less"},g=i.createRenderPipeline({label:"Trajectory Render Pipeline",layout:y,vertex:{module:d,entryPoint:"vs_main"},fragment:{module:d,entryPoint:"fs_main",targets:[...u]},depthStencil:p,primitive:{topology:"triangle-list"}}),b=i.createRenderPipeline({label:"Trajectory Head Render Pipeline",layout:c,vertex:{module:d,entryPoint:"vs_head"},fragment:{module:d,entryPoint:"fs_head",targets:[...u]},depthStencil:p,primitive:{topology:"triangle-list"}});return new E(i,l,s,g,b,f,o.width,o.height,t)}createDepthTexture(){this.depthTexture&&this.depthTexture.destroy(),this.depthTexture=this.device.createTexture({label:"Trajectory Depth Texture",size:[this.canvasWidth,this.canvasHeight],format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT})}setTrajectories(o,n,t){this.thickness=t.strokeWidth??O,this.pointRadius=t.pointRadius??W;const r=I(t.color??H);if(this.colorR=r[0],this.colorG=r[1],this.colorB=r[2],this.baseOpacity=t.opacity??G,this.hasOutline=!!t.outline,t.outline){const l=I(t.outline.color??"#000000"),s=t.outline.strokeWidth??2;this.outlineThickness=this.thickness+s,this.outlineColorR=l[0],this.outlineColorG=l[1],this.outlineColorB=l[2],this.outlineOpacity=t.outline.opacity??this.baseOpacity}const i=F(o,n,t);if(this.segmentCount=i.segmentCount,this.headCount=i.trajectoryCount,this.segmentCount===0){this.segmentBuffer=null,this.headBuffer=null,this.bindGroup=null,this.headBindGroup=null;return}this.segmentBuffer&&this.segmentBuffer.destroy(),this.headBuffer&&this.headBuffer.destroy(),this.segmentBuffer=this.device.createBuffer({label:"Trajectory Segments",size:i.segments.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.segmentBuffer,0,i.segments.buffer),this.headBuffer=this.device.createBuffer({label:"Trajectory Heads",size:i.headPositions.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.headBuffer,0,i.headPositions.buffer),this.bindGroup=this.device.createBindGroup({label:"Trajectory Bind Group",layout:this.pipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.uniformBuffer}},{binding:1,resource:{buffer:this.segmentBuffer}}]}),this.headBindGroup=this.device.createBindGroup({label:"Trajectory Head Bind Group",layout:this.headPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.uniformBuffer}},{binding:2,resource:{buffer:this.headBuffer}}]})}draw(o,n,t,r){this.setTrajectories(o,n,t),this.render(r)}render(o){if(!this.bindGroup||this.segmentCount===0||!this.depthTexture){if(o){const d=this.device.createCommandEncoder(),f=this.context.getCurrentTexture().createView();d.beginRenderPass({colorAttachments:[{view:f,clearValue:{r:o[0],g:o[1],b:o[2],a:o[3]},loadOp:"clear",storeOp:"store"}]}).end(),this.device.queue.submit([d.finish()])}return}const n=this.device.createCommandEncoder(),t=this.context.getCurrentTexture().createView(),r=this.depthTexture.createView(),i=o?"clear":"load",l=o?{r:o[0],g:o[1],b:o[2],a:o[3]}:{r:0,g:0,b:0,a:0},s=n.beginRenderPass({colorAttachments:[{view:t,clearValue:l,loadOp:i,storeOp:"store"}],depthStencilAttachment:{view:r,depthClearValue:1,depthLoadOp:i,depthStoreOp:"store"}});this.hasOutline&&(this.updateUniforms(!0),s.setPipeline(this.pipeline),s.setBindGroup(0,this.bindGroup),s.draw(6,this.segmentCount,0,0)),this.updateUniforms(!1),s.setPipeline(this.pipeline),s.setBindGroup(0,this.bindGroup),s.draw(6,this.segmentCount,0,0),this.headBindGroup&&this.headCount>0&&this.pointRadius>0&&(this.hasOutline&&(this.updateUniforms(!0),s.setPipeline(this.headPipeline),s.setBindGroup(0,this.headBindGroup),s.draw(6,this.headCount,0,0)),this.updateUniforms(!1),s.setPipeline(this.headPipeline),s.setBindGroup(0,this.headBindGroup),s.draw(6,this.headCount,0,0)),s.end(),this.device.queue.submit([n.finish()])}updateUniforms(o){const n=new Float32Array(20);n[0]=this.canvasWidth,n[1]=this.canvasHeight,n[2]=this.dpr,n[3]=0,n[4]=this.thickness,n[5]=this.colorR,n[6]=this.colorG,n[7]=this.colorB,n[8]=this.baseOpacity,n[9]=this.outlineThickness,n[10]=this.outlineColorR,n[11]=this.outlineColorG,n[12]=this.outlineColorB,n[13]=this.outlineOpacity,n[14]=o?1:0,n[15]=0,n[16]=this.pointRadius,this.device.queue.writeBuffer(this.uniformBuffer,0,n)}resize(o,n,t){this.canvasWidth=o,this.canvasHeight=n,t!==void 0&&(this.dpr=t),this.createDepthTexture()}get backend(){return"gpu"}destroy(){this.uniformBuffer.destroy(),this.segmentBuffer&&this.segmentBuffer.destroy(),this.headBuffer&&this.headBuffer.destroy(),this.depthTexture&&this.depthTexture.destroy()}}function _(e,o,n,t){if(n==null||isNaN(n))throw new Error(`drawTrajectories: segmentIndex is invalid (${n})`);const r=o.length;if(r===0)return;e.lineCap="round",e.lineJoin="round";const i=t.outline,l=i?.strokeWidth??2,s=t.strokeWidth+l,d=i?.color??"#000000",f=i?.opacity??t.opacity;for(let h=0;h<r;h++){const a=o[h];if(!a||a.length===0)continue;if(t.showPreview){if(i){e.lineWidth=s,e.strokeStyle=d,e.globalAlpha=(t.previewOpacity??.15)*(f/t.opacity),e.beginPath();for(let c=0;c<a.length;c++){const[u,p]=a[c];c===0?e.moveTo(u,p):e.lineTo(u,p)}e.stroke()}e.lineWidth=t.strokeWidth,e.strokeStyle=t.color,e.globalAlpha=t.previewOpacity??.15,e.beginPath();for(let c=0;c<a.length;c++){const[u,p]=a[c];c===0?e.moveTo(u,p):e.lineTo(u,p)}e.stroke()}const y=t.perSegmentAlphas?.[h];if(y){const c=t.gradientSubdivisions??1;for(let u=0;u<a.length-1;u++){const p=y[u]??0,g=y[u+1]??0;if(p<=0&&g<=0)continue;const[b,m]=a[u],[P,v]=a[u+1];for(let T=0;T<c;T++){const w=T/c,S=(T+1)/c,A=p+(g-p)*((T+.5)/c);if(A<=0)continue;const k=b+(P-b)*w,M=m+(v-m)*w,U=b+(P-b)*S,R=m+(v-m)*S;i&&(e.lineWidth=s,e.strokeStyle=d,e.globalAlpha=A*(f/t.opacity),e.beginPath(),e.moveTo(k,M),e.lineTo(U,R),e.stroke()),e.lineWidth=t.strokeWidth,e.strokeStyle=t.color,e.globalAlpha=A,e.beginPath(),e.moveTo(k,M),e.lineTo(U,R),e.stroke()}}}else{const c=Math.floor(n),u=n-c,p=Math.min(c+1,a.length-1);let g,b;if(u>0&&p+1<a.length){const[m,P]=a[p],[v,T]=a[p+1];g=m+u*(v-m),b=P+u*(T-P)}else[g,b]=a[p];if(i){e.lineWidth=s,e.strokeStyle=d,e.globalAlpha=f,e.beginPath();for(let m=0;m<=p&&m<a.length;m++){const[P,v]=a[m];m===0?e.moveTo(P,v):e.lineTo(P,v)}u>0&&p+1<a.length&&e.lineTo(g,b),e.stroke()}e.lineWidth=t.strokeWidth,e.strokeStyle=t.color,e.globalAlpha=t.opacity,e.beginPath();for(let m=0;m<=p&&m<a.length;m++){const[P,v]=a[m];m===0?e.moveTo(P,v):e.lineTo(P,v)}u>0&&p+1<a.length&&e.lineTo(g,b),e.stroke()}if(t.showHeadMarker!==!1){const c=Math.floor(n),u=n-c,p=Math.min(c+1,a.length-1);let g,b,m,P;if(u>0&&p+1<a.length){const[w,S]=a[p],[A,k]=a[p+1];g=w+u*(A-w),b=S+u*(k-S),m=w,P=S}else{[g,b]=a[p];const w=Math.max(0,p-1);[m,P]=a[w]}const v=t.headStyle?.type??"circle",T=t.headStyle?.radius??t.pointRadius;i&&v==="circle"&&(e.beginPath(),e.arc(g,b,t.pointRadius+(s-t.strokeWidth)/2,0,2*Math.PI),e.fillStyle=d,e.globalAlpha=f,e.fill()),e.fillStyle=t.headStyle?.color??t.color,e.globalAlpha=t.headStyle?.opacity??t.opacity,v==="arrow"?L(e,m,P,g,b,T):(e.beginPath(),e.arc(g,b,T,0,2*Math.PI),e.fill())}}e.globalAlpha=1}const B=new WeakMap,C=new WeakMap,x=new WeakSet;function $(e){return!x.has(e)&&B.has(e)}async function q(e){const o=B.get(e);if(o)return o;const n=C.get(e);if(n)return n;const t=(async()=>{try{const r=typeof window<"u"?window.devicePixelRatio:1,i=await E.create(e,{dpr:r});return B.set(e,i),i}catch(r){return console.warn("[drawTrajectories] GPU unavailable, falling back to CPU:",r),null}finally{C.delete(e)}})();return C.set(e,t),t}function D(e,o,n,t,r){const i=e.getContext("2d");if(!i)return;const l=e.clientWidth,s=e.clientHeight,d=l>0?e.width/l:1,f=s>0?e.height/s:1;i.setTransform(d,0,0,f,0,0),r&&i.clearRect(0,0,l||e.width,s||e.height),_(i,o,n,t)}function N(e){return e.opacityGradient?e:e.perSegmentAlphas?{...e,opacityGradient:{mode:"custom",perSegmentAlphas:e.perSegmentAlphas}}:e}async function K(e,o,n,t,r){const i=N(t),l=r?.clearCanvas??!0;if(e instanceof HTMLCanvasElement){const d=e,f=l?[0,0,0,0]:void 0;if(x.has(d)){D(d,o,n,i,l);return}const h=B.get(d);if(h){h.draw(o,n,i,f);return}const a=await q(d);if(!a){x.add(d),D(d,o,n,i,l);return}a.draw(o,n,i,f)}else _(e,o,n,i)}export{Z as a,K as b,Q as d,$ as i};
