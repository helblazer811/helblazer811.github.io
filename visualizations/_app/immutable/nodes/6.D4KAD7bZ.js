import{a as je,f as Je}from"../chunks/B1hlD0Kl.js";import{i as ct,s as Ke,T as ft,P as ut,a as dt}from"../chunks/4N5cvU8G.js";import{p as pt,F as Ie,I as gt,M as Fe,x as ht,o as mt,g as e,G as vt,n as ee,v as ge,s as V,w as he,B as yt,m as Y,l as xt,z as bt,$ as wt}from"../chunks/DXahCpHG.js";import{h as St}from"../chunks/CGrY-SvO.js";import{o as Pt,a as Mt,w as Ct}from"../chunks/2ToZ1RPI.js";import{p as v,b as Ee,a as Dt,s as It}from"../chunks/CHy34oMS.js";import"../chunks/DgGrbvwz.js";import{K as Be}from"../chunks/CXcpXYPE.js";import{s as Ft,d as Bt}from"../chunks/Br5WbG1m.js";function _t(r){let n=r.value;return n^=n<<13,n^=n>>>17,n^=n<<5,r.value=n>>>0,(n>>>0)/4294967296}function Qe(r,n,u){const p=r*n,g=new Float32Array(p),l={value:u!==void 0?u>>>0||1:Math.random()*4294967296>>>0||1};for(let c=0;c<p;c++)g[c]=_t(l);return g}function Lt(r,n,u=1,p){if(u<=1)return Qe(r,n,p);const g=Math.ceil(r/u),l=Math.ceil(n/u),c=Qe(g,l,p),d=new Float32Array(r*n);for(let h=0;h<n;h++)for(let b=0;b<r;b++){const U=Math.min(Math.round(b/u),g-1),H=Math.min(Math.round(h/u),l-1);d[h*r+b]=c[H*g+U]}return d}const Ut=`// Velocity field sampling and utility functions shared between LIC and DLIC shaders
// These functions depend on uniforms.width, uniforms.height, uniforms.velocityWidth,
// uniforms.velocityHeight, uniforms.nearestNeighborVelocity, and the vectorField/noise buffers

// Map output pixel coordinates to velocity grid coordinates
fn toVelocityCoords(px: f32, py: f32) -> vec2<f32> {
  let scaleX = f32(uniforms.velocityWidth) / f32(uniforms.width);
  let scaleY = f32(uniforms.velocityHeight) / f32(uniforms.height);
  return vec2<f32>(px * scaleX, py * scaleY);
}

// Nearest neighbor sampling for velocity field
fn sampleVelocityNearest(px: f32, py: f32) -> vec2<f32> {
  let vc = toVelocityCoords(px, py);
  let vw = f32(uniforms.velocityWidth);
  let vh = f32(uniforms.velocityHeight);

  let x = clamp(round(vc.x), 0.0, vw - 1.0);
  let y = clamp(round(vc.y), 0.0, vh - 1.0);

  return vectorField[u32(y) * uniforms.velocityWidth + u32(x)];
}

// Bilinear interpolation to sample from pre-computed vector field buffer
fn sampleVelocityBilinear(px: f32, py: f32) -> vec2<f32> {
  let vc = toVelocityCoords(px, py);
  let vw = f32(uniforms.velocityWidth);
  let vh = f32(uniforms.velocityHeight);

  // Clamp to valid velocity grid coordinates
  let x = clamp(vc.x, 0.0, vw - 1.001);
  let y = clamp(vc.y, 0.0, vh - 1.001);

  // Get integer coordinates and fractional parts
  let x0 = u32(floor(x));
  let y0 = u32(floor(y));
  let x1 = min(x0 + 1u, uniforms.velocityWidth - 1u);
  let y1 = min(y0 + 1u, uniforms.velocityHeight - 1u);

  let fx = x - floor(x);
  let fy = y - floor(y);

  // Sample four corners
  let v00 = vectorField[y0 * uniforms.velocityWidth + x0];
  let v10 = vectorField[y0 * uniforms.velocityWidth + x1];
  let v01 = vectorField[y1 * uniforms.velocityWidth + x0];
  let v11 = vectorField[y1 * uniforms.velocityWidth + x1];

  // Bilinear interpolation
  let v0 = mix(v00, v10, fx);
  let v1 = mix(v01, v11, fx);
  return mix(v0, v1, fy);
}

// Sample velocity using configured interpolation method
fn sampleVelocity(px: f32, py: f32) -> vec2<f32> {
  if (uniforms.nearestNeighborVelocity != 0u) {
    return sampleVelocityNearest(px, py);
  }
  return sampleVelocityBilinear(px, py);
}

// Nearest-neighbor sampling for noise (truly discrete)
fn sampleNoise(px: f32, py: f32) -> f32 {
  let x = u32(clamp(floor(px), 0.0, f32(uniforms.width) - 1.0));
  let y = u32(clamp(floor(py), 0.0, f32(uniforms.height) - 1.0));
  return noise[y * uniforms.width + x];
}

// Check if position is within bounds (with small margin)
fn isInBounds(px: f32, py: f32) -> bool {
  let margin = 0.5;
  return px >= margin && px < f32(uniforms.width) - margin &&
         py >= margin && py < f32(uniforms.height) - margin;
}

// Get normalized velocity direction at pixel position
fn getDirection(px: f32, py: f32) -> vec2<f32> {
  let v = sampleVelocity(px, py);
  let mag = length(v);
  if (mag < 1e-8) {
    return vec2<f32>(0.0, 0.0);
  }
  return v / mag;
}
`,At=`// Integration methods for streamline computation
// Requires: uniforms.stepSize, uniforms.useEuler, getDirection(px, py)

// Euler integration step (1st order)
fn eulerStep(pos: vec2<f32>, direction: f32) -> vec2<f32> {
  let h = uniforms.stepSize * direction;
  let dir = getDirection(pos.x, pos.y);
  return pos + h * dir;
}

// 4th-order Runge-Kutta integration step
fn rk4Step(pos: vec2<f32>, direction: f32) -> vec2<f32> {
  let h = uniforms.stepSize * direction;

  // RK4 stages
  let k1 = getDirection(pos.x, pos.y);
  let k2 = getDirection(pos.x + 0.5 * h * k1.x, pos.y + 0.5 * h * k1.y);
  let k3 = getDirection(pos.x + 0.5 * h * k2.x, pos.y + 0.5 * h * k2.y);
  let k4 = getDirection(pos.x + h * k3.x, pos.y + h * k3.y);

  // Weighted sum
  return pos + (h / 6.0) * (k1 + 2.0 * k2 + 2.0 * k3 + k4);
}

// Dispatcher: select integration method based on uniform flag
fn integrationStep(pos: vec2<f32>, direction: f32) -> vec2<f32> {
  if (uniforms.useEuler != 0u) {
    return eulerStep(pos, direction);
  }
  return rk4Step(pos, direction);
}
`;async function Et(){if(typeof navigator>"u"||!navigator.gpu)return!1;try{return await navigator.gpu.requestAdapter()!==null}catch{return!1}}async function $e(){if(!navigator.gpu)throw new Error("WebGPU is not supported in this browser");const r=await navigator.gpu.requestAdapter();if(!r)throw new Error("Failed to get WebGPU adapter");const n=await r.requestDevice();return{adapter:r,device:n,destroy(){n.destroy()}}}function Tt(r,n,u,p){const g=new Float32Array(n*u*2),l=(p.xMax-p.xMin)/n,c=(p.yMax-p.yMin)/u;for(let d=0;d<u;d++)for(let h=0;h<n;h++){const b=p.xMin+(h+.5)*l,U=p.yMin+(d+.5)*c,[H,A]=r(b,U),R=H/l,te=A/c,X=(d*n+h)*2;g[X]=R,g[X+1]=te}return g}function Ze(r,n,u,p){return{data:r,magnitude:n,width:u,height:p,toImageData(){const g=new ImageData(u,p),l=g.data;for(let c=0;c<r.length;c++){const d=Math.round(r[c]*255),h=c*4;l[h]=d,l[h+1]=d,l[h+2]=d,l[h+3]=255}return g},toColoredImageData(g){const{palette:l,minMagnitude:c,maxMagnitude:d,backgroundColor:h=[0,0,0]}=g,[b,U,H]=h;let A=c,R=d;if(A===void 0||R===void 0){let M=1/0,E=-1/0;for(let x=0;x<n.length;x++){const B=n[x];B<M&&(M=B),B>E&&(E=B)}A=A??M,R=R??E}const te=R-A,X=new ImageData(u,p),K=X.data;for(let M=0;M<r.length;M++){const E=r[M],x=n[M],B=te>0?(x-A)/te:.5,[w,we,W]=l(B),_=M*4;K[_]=Math.round(b+(w-b)*E),K[_+1]=Math.round(U+(we-U)*E),K[_+2]=Math.round(H+(W-H)*E),K[_+3]=255}return X},async toImageBitmap(){const g=this.toImageData();return createImageBitmap(g)}}}const Gt=`// Dynamic Line Integral Convolution (DLIC) Compute Shader
// Extends LIC with phase-based noise advection for animated visualization

struct Uniforms {
  width: u32,
  height: u32,
  maxIterations: u32,            // Safety limit
  stepSize: f32,
  xMin: f32,
  xMax: f32,
  yMin: f32,
  yMax: f32,
  contrast: f32,
  nearestNeighborVelocity: u32,  // 0 = bilinear, 1 = nearest neighbor
  maxArcLength: f32,             // Fixed window in pixels
  useEuler: u32,                 // 0 = RK4, 1 = Euler
  velocityWidth: u32,            // Velocity grid width
  velocityHeight: u32,           // Velocity grid height
  phase: f32,                    // Animation phase (0-1)
  wavelength: f32,               // Pixels to advect per cycle
}

@group(0) @binding(0) var<uniform> uniforms: Uniforms;
@group(0) @binding(1) var<storage, read> vectorField: array<vec2<f32>>;
@group(0) @binding(2) var<storage, read> noise: array<f32>;
@group(0) @binding(3) var<storage, read_write> output: array<f32>;
@group(0) @binding(4) var<storage, read_write> magnitudeOut: array<f32>;

// Velocity field functions are defined in velocity-field.wgsl and concatenated at build time

// Integration functions are defined in integration.wgsl and concatenated at build time

// Advect position backward to find where noise should be sampled from
// This creates the flowing effect by shifting the noise origin
fn advectNoisePosition(startPos: vec2<f32>) -> vec2<f32> {
  let advectDist = uniforms.phase * uniforms.wavelength;
  var pos = startPos;
  var distTraveled = 0.0;
  var i = 0u;

  // Backward integration to find where noise "came from"
  while (distTraveled < advectDist && i < uniforms.maxIterations && isInBounds(pos.x, pos.y)) {
    let prevPos = pos;
    pos = integrationStep(pos, -1.0);  // Backward direction
    distTraveled += length(pos - prevPos);
    i += 1u;
  }

  return pos;
}

@compute @workgroup_size(16, 16)
fn main(@builtin(global_invocation_id) globalId: vec3<u32>) {
  let x = globalId.x;
  let y = globalId.y;

  // Early exit if outside image bounds
  if (x >= uniforms.width || y >= uniforms.height) {
    return;
  }

  let pixelIndex = y * uniforms.width + x;
  let startPos = vec2<f32>(f32(x) + 0.5, f32(y) + 0.5);

  // DLIC: Advect starting position for noise sampling based on phase
  let advectedPos = advectNoisePosition(startPos);

  var sum = 0.0;
  var weightSum = 0.0;

  // Gaussian decay parameter (controls sharpness, higher = tighter)
  let alpha = 9.0;

  // Forward integration from advected position
  var pos = advectedPos;
  var arcLength = 0.0;
  var i = 0u;

  while (arcLength < uniforms.maxArcLength && i < uniforms.maxIterations) {
    if (!isInBounds(pos.x, pos.y)) {
      break;
    }

    // Gaussian weight: peaks at center, decays with arc length
    let t = arcLength / uniforms.maxArcLength;
    let w = exp(-alpha * t * t);
    sum += w * sampleNoise(pos.x, pos.y);
    weightSum += w;

    let prevPos = pos;
    pos = integrationStep(pos, 1.0);  // Forward direction
    arcLength += length(pos - prevPos);
    i += 1u;
  }

  // Backward integration from advected position
  pos = advectedPos;
  arcLength = 0.0;
  i = 0u;

  while (arcLength < uniforms.maxArcLength && i < uniforms.maxIterations) {
    if (!isInBounds(pos.x, pos.y)) {
      break;
    }

    // Skip center pixel (already counted in forward pass at i=0)
    if (i > 0u) {
      // Gaussian weight: peaks at center, decays with arc length
      let t = arcLength / uniforms.maxArcLength;
      let w = exp(-alpha * t * t);
      sum += w * sampleNoise(pos.x, pos.y);
      weightSum += w;
    }

    let prevPos = pos;
    pos = integrationStep(pos, -1.0);  // Backward direction
    arcLength += length(pos - prevPos);
    i += 1u;
  }

  // Normalize and apply contrast
  var result = 0.5;
  if (weightSum > 0.0) {
    result = sum / weightSum;
    // Apply contrast enhancement around 0.5
    result = 0.5 + (result - 0.5) * uniforms.contrast;
    result = clamp(result, 0.0, 1.0);
  }

  output[pixelIndex] = result;

  // Store magnitude at original pixel position (not advected)
  let velocity = sampleVelocity(startPos.x, startPos.y);
  magnitudeOut[pixelIndex] = length(velocity);
}
`,kt=Gt.replace("// Velocity field functions are defined in velocity-field.wgsl and concatenated at build time",Ut).replace("// Integration functions are defined in integration.wgsl and concatenated at build time",At),zt=20,Vt=.5,Ht=2,Rt=1,Wt=20,Nt=40;async function*Ot(r,n){const{vectorField:u,timeVaryingVectorField:p,time:g=0,domain:l,width:c,height:d,integrationSteps:h=zt,stepSize:b=Vt,seed:U,contrast:H=Ht,noiseScale:A=Rt,nearestNeighborVelocity:R=!1,maxArcLength:te=Wt,useEuler:X=!1,velocityScale:K=1,phase:M,wavelength:E=Nt,padding:x=0,frameCount:B,batchSize:w=8}=r,we=p?(se,ne)=>p(se,ne,g):u,W=c+2*x,_=d+2*x,me=l.xMax-l.xMin,ve=l.yMax-l.yMin,ae=x/c,oe=x/d,re={xMin:l.xMin-ae*me,xMax:l.xMax+ae*me,yMin:l.yMin-oe*ve,yMax:l.yMax+oe*ve},_e=Math.max(1,Math.round(W*K)),Se=Math.max(1,Math.round(_*K)),N=!n,T=n??await $e(),{device:f}=T,S=B!==void 0&&B>1?B:1,G=Math.min(w,S);let C,D;try{const se=f.createShaderModule({label:"DLIC Compute Shader",code:kt}),ne=f.createBindGroupLayout({label:"DLIC Bind Group Layout",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),Pe=f.createPipelineLayout({label:"DLIC Pipeline Layout",bindGroupLayouts:[ne]}),k=f.createComputePipeline({label:"DLIC Compute Pipeline",layout:Pe,compute:{module:se,entryPoint:"main"}}),Q=Tt(we,_e,Se,re);C=f.createBuffer({label:"Vector Field",size:Q.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),f.queue.writeBuffer(C,0,Q.buffer);const le=Lt(W,_,A,U);D=f.createBuffer({label:"Noise Texture",size:le.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),f.queue.writeBuffer(D,0,le.buffer);const Me=Math.ceil(W/16),Ce=Math.ceil(_/16),s=W*_*4;for(let L=0;L<S;L+=G){const Z=Math.min(L+G,S)-L,ce=[],ye=[],xe=[],j=[],ie=[],Ue=[];for(let o=0;o<Z;o++){const y=L+o,ue=S>1?y/S:M,J=new ArrayBuffer(64),m=new DataView(J);m.setUint32(0,W,!0),m.setUint32(4,_,!0),m.setUint32(8,h,!0),m.setFloat32(12,b,!0),m.setFloat32(16,re.xMin,!0),m.setFloat32(20,re.xMax,!0),m.setFloat32(24,re.yMin,!0),m.setFloat32(28,re.yMax,!0),m.setFloat32(32,H,!0),m.setUint32(36,R?1:0,!0),m.setFloat32(40,te,!0),m.setUint32(44,X?1:0,!0),m.setUint32(48,_e,!0),m.setUint32(52,Se,!0),m.setFloat32(56,ue,!0),m.setFloat32(60,E,!0);const O=f.createBuffer({label:`DLIC Uniforms Frame ${y}`,size:J.byteLength,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});f.queue.writeBuffer(O,0,J),ce.push(O);const de=f.createBuffer({label:`DLIC Output Frame ${y}`,size:s,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC});ye.push(de);const pe=f.createBuffer({label:`Magnitude Output Frame ${y}`,size:s,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC});xe.push(pe);const q=f.createBuffer({label:`Staging Buffer Frame ${y}`,size:s,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST});j.push(q);const Te=f.createBuffer({label:`Magnitude Staging Buffer Frame ${y}`,size:s,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST});ie.push(Te);const Ae=f.createBindGroup({label:`DLIC Bind Group Frame ${y}`,layout:ne,entries:[{binding:0,resource:{buffer:O}},{binding:1,resource:{buffer:C}},{binding:2,resource:{buffer:D}},{binding:3,resource:{buffer:de}},{binding:4,resource:{buffer:pe}}]});Ue.push(Ae)}const fe=f.createCommandEncoder();for(let o=0;o<Z;o++){const y=fe.beginComputePass();y.setPipeline(k),y.setBindGroup(0,Ue[o]),y.dispatchWorkgroups(Me,Ce),y.end(),fe.copyBufferToBuffer(ye[o],0,j[o],0,s),fe.copyBufferToBuffer(xe[o],0,ie[o],0,s)}f.queue.submit([fe.finish()]),await Promise.all([...j.map(o=>o.mapAsync(GPUMapMode.READ)),...ie.map(o=>o.mapAsync(GPUMapMode.READ))]);const be=[];for(let o=0;o<Z;o++){const y=new Float32Array(j[o].getMappedRange().slice(0)),ue=new Float32Array(ie[o].getMappedRange().slice(0));if(j[o].unmap(),ie[o].unmap(),x>0){const J=new Float32Array(c*d),m=new Float32Array(c*d);for(let O=0;O<d;O++){const de=(O+x)*W+x,pe=O*c;for(let q=0;q<c;q++)J[pe+q]=y[de+q],m[pe+q]=ue[de+q]}be.push(Ze(J,m,c,d))}else be.push(Ze(y,ue,c,d))}yield be;for(let o=0;o<Z;o++)ce[o].destroy(),ye[o].destroy(),xe[o].destroy(),j[o].destroy(),ie[o].destroy()}}finally{C?.destroy(),D?.destroy(),N&&T.destroy()}}var qt=Je('<figure class="hd-figure svelte-hsfq49"><h2 class="hd-headline svelte-hsfq49">Helmholtz Decomposition</h2> <div class="hd-grid svelte-hsfq49"><div class="hd-title hd-col-1 svelte-hsfq49"><!></div> <div class="hd-title hd-col-2 svelte-hsfq49"><!></div> <div class="hd-title hd-col-3 svelte-hsfq49"><!></div> <div class="hd-sub hd-col-1 svelte-hsfq49"></div> <div class="hd-sub hd-col-2 svelte-hsfq49"><!></div> <div class="hd-sub hd-col-3 svelte-hsfq49"><!></div> <canvas class="hd-canvas hd-col-1 svelte-hsfq49"></canvas> <div class="hd-op hd-op-1 svelte-hsfq49">=</div> <canvas class="hd-canvas hd-col-2 svelte-hsfq49"></canvas> <div class="hd-op hd-op-2 svelte-hsfq49">+</div> <canvas class="hd-canvas hd-col-3 svelte-hsfq49"></canvas></div> <figcaption class="hd-caption svelte-hsfq49">The same decomposition rendered with Dynamic LIC, advecting noise along the field to convey local direction and magnitude.</figcaption></figure>');function Yt(r,n){pt(n,!1);const u=()=>It(ye,"$isActive",p),[p,g]=Dt();let l=v(n,"width",8,1400),c=v(n,"height",8,450),d=v(n,"gap",8,20),h=v(n,"margin",8,8),b=v(n,"playingByDefault",8,!0),U=v(n,"animationDurationMs",8,12e3),H=v(n,"fps",8,15),A=v(n,"domainRange",24,()=>({xMin:-2,xMax:2,yMin:-2,yMax:2})),R=v(n,"integrationSteps",8,256),te=v(n,"stepSize",8,2),X=v(n,"contrast",8,5),K=v(n,"noiseScale",8,4),M=v(n,"maxArcLength",8,250),E=v(n,"velocityScale",8,.8),x=v(n,"dlicPadding",8,80),B=v(n,"wavelengthPixels",8,60),w=v(n,"dpiScale",8,2),we=v(n,"seed",8,12345),W=v(n,"streamlineColor",8,"#dc2626"),_=v(n,"backgroundColor",24,()=>[255,255,255]);const me=Math.floor((l()-2*d())/3),ve=c(),ae=me*w(),oe=ve*w(),re=(me-2*h())*w(),_e=(ve-2*h())*w(),Se=h()*w(),N=Math.round(U()/1e3*H());let T=Y(null),f=Y(null),S=Y(null),G=Y(null),C=Y(null),D=Y(null),se=[],ne=[],Pe=[],k=null,Q=Y(!0),le=null,Me=!1,Ce=0,s=Y(null),L=Y(!1),Le=!1,Z=Y(null),ce=null;const ye=Ct(!1);let xe=!1,j=!0;const ie=[{x:0,y:.95,strength:1.5},{x:-.82,y:-.48,strength:1.5},{x:.82,y:-.48,strength:1.5}],Ue=[{x:0,y:.95,strength:1.5},{x:-.82,y:-.48,strength:-1.5},{x:.82,y:-.48,strength:1.5}],fe=.05,be=1/(2*Math.PI);function o(t){const i=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return i?[parseInt(i[1],16),parseInt(i[2],16),parseInt(i[3],16)]:[220,38,38]}function y(t){return t.width=ae,t.height=oe,t.getContext("2d")}function ue(){ye.set(xe&&j)}function J(){return(t,i)=>{let a=0,P=0;for(const I of ie){const F=t-I.x,z=i-I.y,$=I.strength*be/(F*F+z*z+fe);a+=F*$,P+=z*$}return[a,P]}}function m(){return(t,i)=>{let a=0,P=0;for(const I of Ue){const F=t-I.x,z=i-I.y,$=I.strength*be/(F*F+z*z+fe);a+=-z*$,P+=F*$}return[a,P]}}function O(){const t=J(),i=m();return(a,P)=>{const[I,F]=t(a,P),[z,$]=i(a,P);return[I+z,F+$]}}async function de(t,i){if(!k)return;const a=()=>o(W());for await(const P of Ot({vectorField:t,domain:A(),width:re,height:_e,phase:0,frameCount:N,batchSize:8,wavelength:B()*w(),integrationSteps:R(),stepSize:te(),contrast:X(),noiseScale:K()*w(),nearestNeighborVelocity:!0,maxArcLength:M()*w(),useEuler:!0,velocityScale:E(),seed:we(),padding:Math.ceil(x()*w())},k))for(const I of P)i.push(I.toColoredImageData({palette:a,backgroundColor:_()}))}async function pe(){if(!e(G)||!e(C)||!e(D))return;if(V(Q,await Et()),!e(Q)){le="WebGPU not available";return}try{k=await $e()}catch(i){le=`WebGPU init failed: ${i}`,V(Q,!1);return}Me=!0,Ce=0;const t=[{field:O(),cache:se},{field:m(),cache:ne},{field:J(),cache:Pe}];for(let i=0;i<t.length;i++)await de(t[i].field,t[i].cache),Ce=(i+1)/t.length,ze();Me=!1,k&&(k.destroy(),k=null)}const q={name:"dlicFrame",reduce:function(t){return{dlicFrameIndex:Math.min(Math.floor(t*N),N-1)}}};function Te(){const t=ft.from({duration:U()/1e3,initialState:{dlicFrameIndex:0},clips:[{clip:q,start:0,end:1}]});V(s,new ut(t,{looping:!0})),e(s).onTick((i,a)=>Ve(a))}function Ae(){e(s)&&e(s).play()}function et(){e(s)&&e(s).pause()}function Ge(t,i,a){if(t&&(t.clearRect(0,0,ae,oe),i.length>0)){const P=Math.min(a,i.length-1);t.putImageData(i[P],Se,Se)}}function ke(t,i){t&&(t.fillStyle="#1a1a1a",t.fillRect(0,0,ae,oe),t.fillStyle="#ffffff",t.font=`${14*w()}px sans-serif`,t.textAlign="center",t.textBaseline="middle",t.fillText(i,ae/2,oe/2))}function ze(){const t=Math.round(Ce*100),i=le||(Me?`Computing DLIC... ${t}%`:"Preparing...");ke(e(G),i),ke(e(C),i),ke(e(D),i)}function Ve(t){e(L)&&(Ge(e(G),se,t.dlicFrameIndex),Ge(e(C),ne,t.dlicFrameIndex),Ge(e(D),Pe,t.dlicFrameIndex))}function tt(t){e(s)&&(!t&&e(s).isPlaying?(Le=!0,et()):t&&Le&&(Le=!1,Ae()))}async function nt(){const t=Date.now()+3e5;for(;(!e(s)||!e(T)||!e(f)||!e(S)||se.length<N||ne.length<N||Pe.length<N)&&Date.now()<t;)await new Promise(F=>setTimeout(F,250));if(!e(s)||!e(T)||!e(f)||!e(S))throw new Error("Helmholtz DLIC visualization did not finish initializing");const i=document.createElement("canvas");i.width=1600,i.height=900;const a=i.getContext("2d");if(!a)throw new Error("Could not create Helmholtz DLIC capture canvas");const P=e(s).isPlaying,I=e(s).t;e(s).pause();try{const[F]=await Ft([i],N,24,"webm",z=>{const $=z/(N-1);e(s).seek($),Ve(e(s).state),a.fillStyle="#ffffff",a.fillRect(0,0,i.width,i.height),a.fillStyle="#444444",a.textAlign="center",a.font="600 56px serif",a.fillText("Helmholtz Decomposition",800,70),a.font="32px sans-serif",a.fillText("Combined field",270,150),a.fillText("Curl component",800,150),a.fillText("Divergence component",1330,150),a.drawImage(e(T),25,190,490,490),a.drawImage(e(f),555,190,490,490),a.drawImage(e(S),1085,190,490,490),a.font="48px serif",a.fillText("=",535,455),a.fillText("+",1065,455)},{bitrate:1e7,backgroundColor:"#ffffff"});Bt(F,"helmholtz-decomposition-dlic.webm")}finally{e(s).seek(I),P&&e(s).play()}}Pt(()=>{window.__exportHelmholtzDlicPreview=nt,ce=new IntersectionObserver(i=>{i.forEach(a=>{xe=a.isIntersecting,ue()})},{threshold:0,rootMargin:"50px"}),e(Z)&&ce.observe(e(Z));const t=()=>{j=!document.hidden,ue()};return document.addEventListener("visibilitychange",t),()=>{document.removeEventListener("visibilitychange",t)}}),Mt(()=>{typeof window<"u"&&delete window.__exportHelmholtzDlicPreview,e(s)&&e(s)?.dispose(),ce&&ce.disconnect(),k&&(k.destroy(),k=null)}),Ie(()=>(e(T),e(G)),()=>{e(T)&&!e(G)&&V(G,y(e(T)))}),Ie(()=>(e(f),e(C)),()=>{e(f)&&!e(C)&&V(C,y(e(f)))}),Ie(()=>(e(S),e(D)),()=>{e(S)&&!e(D)&&V(D,y(e(S)))}),Ie(()=>(e(L),e(G),e(C),e(D),e(s),vt(b()),e(Q)),()=>{!e(L)&&e(G)&&e(C)&&e(D)&&(V(L,!0),ze(),pe().then(()=>{Te(),e(s)?(Ve(e(s).timeline.initialState),b()&&e(Q)&&Ae()):e(Q)||ze()}))}),Ie(()=>(e(L),u()),()=>{e(L)&&tt(u())}),gt(),ct();var De=qt(),He=ee(ge(De),2),Re=ge(He),it=ge(Re);Be(it,{math:Fe(()=>String.raw`\mathbf{F}_{\text{combined}}`)}),he(Re);var We=ee(Re,2),at=ge(We);Be(at,{math:Fe(()=>String.raw`\mathbf{F}_{\text{curl}}`)}),he(We);var Ne=ee(We,2),ot=ge(Ne);Be(ot,{math:Fe(()=>String.raw`\mathbf{F}_{\text{div}}`)}),he(Ne);var Oe=ee(Ne,4),rt=ge(Oe);Be(rt,{math:Fe(()=>String.raw`\nabla \cdot \mathbf{F}_{\text{curl}} = 0`)}),he(Oe);var qe=ee(Oe,2),st=ge(qe);Be(st,{math:Fe(()=>String.raw`\nabla \times \mathbf{F}_{\text{div}} = \mathbf{0}`)}),he(qe);var Ye=ee(qe,2);Ee(Ye,t=>V(T,t),()=>e(T));var Xe=ee(Ye,4);Ee(Xe,t=>V(f,t),()=>e(f));var lt=ee(Xe,4);Ee(lt,t=>V(S,t),()=>e(S)),he(He),yt(2),he(De),Ee(De,t=>V(Z,t),()=>e(Z)),ht(()=>{Ke(De,`width: ${l()??""}px;`),Ke(He,`--canvas-aspect: ${me} / ${ve??""}; --gap: ${d()??""}px;`)}),je(r,De),mt(),g()}var Xt=Je("<!> <!>",1);function an(r){var n=Xt();St("11xaf7z",g=>{bt(()=>{wt.title="Helmholtz Decomposition (DLIC) — Alec Helbling"})});var u=xt(n);dt(u,{title:"Helmholtz Decomposition (DLIC)",author:"Alec Helbling",authorLink:"https://alechelbling.com",date:"May 12, 2026"});var p=ee(u,2);Yt(p,{}),je(r,n)}export{an as component};
