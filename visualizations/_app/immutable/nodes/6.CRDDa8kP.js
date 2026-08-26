import{a as Ze,f as je}from"../chunks/CUcTB_-q.js";import{i as lt,s as Ke,T as ct,P as ut,a as ft}from"../chunks/BGX9asem.js";import{p as dt,A as Fe,C as gt,J as De,x as pt,o as ht,g as e,B as mt,n as Z,v as de,s as T,w as ge,G as vt,m as N,l as yt,z as xt,$ as bt}from"../chunks/Dj-hYGEk.js";import{h as wt}from"../chunks/CFnyq8W8.js";import{o as St,a as Mt,w as Pt}from"../chunks/BS-emAtj.js";import{p as m,b as Ge,a as Ct,s as Ft}from"../chunks/CqGrXgJ7.js";import"../chunks/MweYIj4g.js";import{K as Ie}from"../chunks/JeT5dPMv.js";function Dt(o){let t=o.value;return t^=t<<13,t^=t>>>17,t^=t<<5,o.value=t>>>0,(t>>>0)/4294967296}function Je(o,t,l){const u=o*t,d=new Float32Array(u),r={value:l!==void 0?l>>>0||1:Math.random()*4294967296>>>0||1};for(let s=0;s<u;s++)d[s]=Dt(r);return d}function It(o,t,l=1,u){if(l<=1)return Je(o,t,u);const d=Math.ceil(o/l),r=Math.ceil(t/l),s=Je(d,r,u),c=new Float32Array(o*t);for(let g=0;g<t;g++)for(let b=0;b<o;b++){const B=Math.min(Math.round(b/l),d-1),k=Math.min(Math.round(g/l),r-1);c[g*o+b]=s[k*d+B]}return c}const Bt=`// Velocity field sampling and utility functions shared between LIC and DLIC shaders
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
`,Ut=`// Integration methods for streamline computation
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
`;async function _t(){if(typeof navigator>"u"||!navigator.gpu)return!1;try{return await navigator.gpu.requestAdapter()!==null}catch{return!1}}async function $e(){if(!navigator.gpu)throw new Error("WebGPU is not supported in this browser");const o=await navigator.gpu.requestAdapter();if(!o)throw new Error("Failed to get WebGPU adapter");const t=await o.requestDevice();return{adapter:o,device:t,destroy(){t.destroy()}}}function Lt(o,t,l,u){const d=new Float32Array(t*l*2),r=(u.xMax-u.xMin)/t,s=(u.yMax-u.yMin)/l;for(let c=0;c<l;c++)for(let g=0;g<t;g++){const b=u.xMin+(g+.5)*r,B=u.yMin+(c+.5)*s,[k,U]=o(b,B),V=k/r,j=U/s,O=(c*t+g)*2;d[O]=V,d[O+1]=j}return d}function Qe(o,t,l,u){return{data:o,magnitude:t,width:l,height:u,toImageData(){const d=new ImageData(l,u),r=d.data;for(let s=0;s<o.length;s++){const c=Math.round(o[s]*255),g=s*4;r[g]=c,r[g+1]=c,r[g+2]=c,r[g+3]=255}return d},toColoredImageData(d){const{palette:r,minMagnitude:s,maxMagnitude:c,backgroundColor:g=[0,0,0]}=d,[b,B,k]=g;let U=s,V=c;if(U===void 0||V===void 0){let S=1/0,_=-1/0;for(let x=0;x<t.length;x++){const C=t[x];C<S&&(S=C),C>_&&(_=C)}U=U??S,V=V??_}const j=V-U,O=new ImageData(l,u),H=O.data;for(let S=0;S<o.length;S++){const _=o[S],x=t[S],C=j>0?(x-U)/j:.5,[w,be,z]=r(C),F=S*4;H[F]=Math.round(b+(w-b)*_),H[F+1]=Math.round(B+(be-B)*_),H[F+2]=Math.round(k+(z-k)*_),H[F+3]=255}return O},async toImageBitmap(){const d=this.toImageData();return createImageBitmap(d)}}}const At=`// Dynamic Line Integral Convolution (DLIC) Compute Shader
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
`,Gt=At.replace("// Velocity field functions are defined in velocity-field.wgsl and concatenated at build time",Bt).replace("// Integration functions are defined in integration.wgsl and concatenated at build time",Ut),Et=20,Tt=.5,kt=2,Vt=1,zt=20,Rt=40;async function*Wt(o,t){const{vectorField:l,timeVaryingVectorField:u,time:d=0,domain:r,width:s,height:c,integrationSteps:g=Et,stepSize:b=Tt,seed:B,contrast:k=kt,noiseScale:U=Vt,nearestNeighborVelocity:V=!1,maxArcLength:j=zt,useEuler:O=!1,velocityScale:H=1,phase:S,wavelength:_=Rt,padding:x=0,frameCount:C,batchSize:w=8}=o,be=u?(me,ae)=>u(me,ae,d):l,z=s+2*x,F=c+2*x,pe=r.xMax-r.xMin,he=r.yMax-r.yMin,te=x/s,ne=x/c,ie={xMin:r.xMin-te*pe,xMax:r.xMax+te*pe,yMin:r.yMin-ne*he,yMax:r.yMax+ne*he},Be=Math.max(1,Math.round(z*H)),we=Math.max(1,Math.round(F*H)),Se=!t,$=t??await $e(),{device:f}=$,L=C!==void 0&&C>1?C:1,A=Math.min(w,L);let M,P;try{const me=f.createShaderModule({label:"DLIC Compute Shader",code:Gt}),ae=f.createBindGroupLayout({label:"DLIC Bind Group Layout",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),Ue=f.createPipelineLayout({label:"DLIC Pipeline Layout",bindGroupLayouts:[ae]}),G=f.createComputePipeline({label:"DLIC Compute Pipeline",layout:Ue,compute:{module:me,entryPoint:"main"}}),q=Lt(be,Be,we,ie);M=f.createBuffer({label:"Vector Field",size:q.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),f.queue.writeBuffer(M,0,q.buffer);const oe=It(z,F,U,B);P=f.createBuffer({label:"Noise Texture",size:oe.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),f.queue.writeBuffer(P,0,oe.buffer);const Me=Math.ceil(z/16),Pe=Math.ceil(F/16),h=z*F*4;for(let D=0;D<L;D+=A){const Y=Math.min(D+A,L)-D,re=[],ve=[],ye=[],X=[],ee=[],Le=[];for(let a=0;a<Y;a++){const v=D+a,le=L>1?v/L:S,K=new ArrayBuffer(64),p=new DataView(K);p.setUint32(0,z,!0),p.setUint32(4,F,!0),p.setUint32(8,g,!0),p.setFloat32(12,b,!0),p.setFloat32(16,ie.xMin,!0),p.setFloat32(20,ie.xMax,!0),p.setFloat32(24,ie.yMin,!0),p.setFloat32(28,ie.yMax,!0),p.setFloat32(32,k,!0),p.setUint32(36,V?1:0,!0),p.setFloat32(40,j,!0),p.setUint32(44,O?1:0,!0),p.setUint32(48,Be,!0),p.setUint32(52,we,!0),p.setFloat32(56,le,!0),p.setFloat32(60,_,!0);const R=f.createBuffer({label:`DLIC Uniforms Frame ${v}`,size:K.byteLength,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});f.queue.writeBuffer(R,0,K),re.push(R);const ce=f.createBuffer({label:`DLIC Output Frame ${v}`,size:h,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC});ve.push(ce);const ue=f.createBuffer({label:`Magnitude Output Frame ${v}`,size:h,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC});ye.push(ue);const W=f.createBuffer({label:`Staging Buffer Frame ${v}`,size:h,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST});X.push(W);const Ee=f.createBuffer({label:`Magnitude Staging Buffer Frame ${v}`,size:h,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST});ee.push(Ee);const Ae=f.createBindGroup({label:`DLIC Bind Group Frame ${v}`,layout:ae,entries:[{binding:0,resource:{buffer:R}},{binding:1,resource:{buffer:M}},{binding:2,resource:{buffer:P}},{binding:3,resource:{buffer:ce}},{binding:4,resource:{buffer:ue}}]});Le.push(Ae)}const se=f.createCommandEncoder();for(let a=0;a<Y;a++){const v=se.beginComputePass();v.setPipeline(G),v.setBindGroup(0,Le[a]),v.dispatchWorkgroups(Me,Pe),v.end(),se.copyBufferToBuffer(ve[a],0,X[a],0,h),se.copyBufferToBuffer(ye[a],0,ee[a],0,h)}f.queue.submit([se.finish()]),await Promise.all([...X.map(a=>a.mapAsync(GPUMapMode.READ)),...ee.map(a=>a.mapAsync(GPUMapMode.READ))]);const xe=[];for(let a=0;a<Y;a++){const v=new Float32Array(X[a].getMappedRange().slice(0)),le=new Float32Array(ee[a].getMappedRange().slice(0));if(X[a].unmap(),ee[a].unmap(),x>0){const K=new Float32Array(s*c),p=new Float32Array(s*c);for(let R=0;R<c;R++){const ce=(R+x)*z+x,ue=R*s;for(let W=0;W<s;W++)K[ue+W]=v[ce+W],p[ue+W]=le[ce+W]}xe.push(Qe(K,p,s,c))}else xe.push(Qe(v,le,s,c))}yield xe;for(let a=0;a<Y;a++)re[a].destroy(),ve[a].destroy(),ye[a].destroy(),X[a].destroy(),ee[a].destroy()}}finally{M?.destroy(),P?.destroy(),Se&&$.destroy()}}var Nt=je('<figure class="hd-figure svelte-hsfq49"><h2 class="hd-headline svelte-hsfq49">Helmholtz Decomposition</h2> <div class="hd-grid svelte-hsfq49"><div class="hd-title hd-col-1 svelte-hsfq49"><!></div> <div class="hd-title hd-col-2 svelte-hsfq49"><!></div> <div class="hd-title hd-col-3 svelte-hsfq49"><!></div> <div class="hd-sub hd-col-1 svelte-hsfq49"></div> <div class="hd-sub hd-col-2 svelte-hsfq49"><!></div> <div class="hd-sub hd-col-3 svelte-hsfq49"><!></div> <canvas class="hd-canvas hd-col-1 svelte-hsfq49"></canvas> <div class="hd-op hd-op-1 svelte-hsfq49">=</div> <canvas class="hd-canvas hd-col-2 svelte-hsfq49"></canvas> <div class="hd-op hd-op-2 svelte-hsfq49">+</div> <canvas class="hd-canvas hd-col-3 svelte-hsfq49"></canvas></div> <figcaption class="hd-caption svelte-hsfq49">The same decomposition rendered with Dynamic LIC, advecting noise along the field to convey local direction and magnitude.</figcaption></figure>');function Ot(o,t){dt(t,!1);const l=()=>Ft(ve,"$isActive",u),[u,d]=Ct();let r=m(t,"width",8,1400),s=m(t,"height",8,450),c=m(t,"gap",8,20),g=m(t,"margin",8,8),b=m(t,"playingByDefault",8,!0),B=m(t,"animationDurationMs",8,12e3),k=m(t,"fps",8,15),U=m(t,"domainRange",24,()=>({xMin:-2,xMax:2,yMin:-2,yMax:2})),V=m(t,"integrationSteps",8,256),j=m(t,"stepSize",8,2),O=m(t,"contrast",8,5),H=m(t,"noiseScale",8,4),S=m(t,"maxArcLength",8,250),_=m(t,"velocityScale",8,.8),x=m(t,"dlicPadding",8,80),C=m(t,"wavelengthPixels",8,60),w=m(t,"dpiScale",8,2),be=m(t,"seed",8,12345),z=m(t,"streamlineColor",8,"#dc2626"),F=m(t,"backgroundColor",24,()=>[255,255,255]);const pe=Math.floor((r()-2*c())/3),he=s(),te=pe*w(),ne=he*w(),ie=(pe-2*g())*w(),Be=(he-2*g())*w(),we=g()*w(),Se=Math.round(B()/1e3*k());let $=N(null),f=N(null),L=N(null),A=N(null),M=N(null),P=N(null),me=[],ae=[],Ue=[],G=null,q=N(!0),oe=null,Me=!1,Pe=0,h=N(null),D=N(!1),_e=!1,Y=N(null),re=null;const ve=Pt(!1);let ye=!1,X=!0;const ee=[{x:0,y:.95,strength:1.5},{x:-.82,y:-.48,strength:1.5},{x:.82,y:-.48,strength:1.5}],Le=[{x:0,y:.95,strength:1.5},{x:-.82,y:-.48,strength:-1.5},{x:.82,y:-.48,strength:1.5}],se=.05,xe=1/(2*Math.PI);function a(n){const i=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(n);return i?[parseInt(i[1],16),parseInt(i[2],16),parseInt(i[3],16)]:[220,38,38]}function v(n){return n.width=te,n.height=ne,n.getContext("2d")}function le(){ve.set(ye&&X)}function K(){return(n,i)=>{let y=0,I=0;for(const E of ee){const J=n-E.x,Q=i-E.y,fe=E.strength*xe/(J*J+Q*Q+se);y+=J*fe,I+=Q*fe}return[y,I]}}function p(){return(n,i)=>{let y=0,I=0;for(const E of Le){const J=n-E.x,Q=i-E.y,fe=E.strength*xe/(J*J+Q*Q+se);y+=-Q*fe,I+=J*fe}return[y,I]}}function R(){const n=K(),i=p();return(y,I)=>{const[E,J]=n(y,I),[Q,fe]=i(y,I);return[E+Q,J+fe]}}async function ce(n,i){if(!G)return;const y=()=>a(z());for await(const I of Wt({vectorField:n,domain:U(),width:ie,height:Be,phase:0,frameCount:Se,batchSize:8,wavelength:C()*w(),integrationSteps:V(),stepSize:j(),contrast:O(),noiseScale:H()*w(),nearestNeighborVelocity:!0,maxArcLength:S()*w(),useEuler:!0,velocityScale:_(),seed:be(),padding:Math.ceil(x()*w())},G))for(const E of I)i.push(E.toColoredImageData({palette:y,backgroundColor:F()}))}async function ue(){if(!e(A)||!e(M)||!e(P))return;if(T(q,await _t()),!e(q)){oe="WebGPU not available";return}try{G=await $e()}catch(i){oe=`WebGPU init failed: ${i}`,T(q,!1);return}Me=!0,Pe=0;const n=[{field:R(),cache:me},{field:p(),cache:ae},{field:K(),cache:Ue}];for(let i=0;i<n.length;i++)await ce(n[i].field,n[i].cache),Pe=(i+1)/n.length,Ve();Me=!1,G&&(G.destroy(),G=null)}const W={name:"dlicFrame",reduce:function(n){return{dlicFrameIndex:Math.min(Math.floor(n*Se),Se-1)}}};function Ee(){const n=ct.from({duration:B()/1e3,initialState:{dlicFrameIndex:0},clips:[{clip:W,start:0,end:1}]});T(h,new ut(n,{looping:!0})),e(h).onTick((i,y)=>qe(y))}function Ae(){e(h)&&e(h).play()}function et(){e(h)&&e(h).pause()}function Te(n,i,y){if(n&&(n.clearRect(0,0,te,ne),i.length>0)){const I=Math.min(y,i.length-1);n.putImageData(i[I],we,we)}}function ke(n,i){n&&(n.fillStyle="#1a1a1a",n.fillRect(0,0,te,ne),n.fillStyle="#ffffff",n.font=`${14*w()}px sans-serif`,n.textAlign="center",n.textBaseline="middle",n.fillText(i,te/2,ne/2))}function Ve(){const n=Math.round(Pe*100),i=oe||(Me?`Computing DLIC... ${n}%`:"Preparing...");ke(e(A),i),ke(e(M),i),ke(e(P),i)}function qe(n){e(D)&&(Te(e(A),me,n.dlicFrameIndex),Te(e(M),ae,n.dlicFrameIndex),Te(e(P),Ue,n.dlicFrameIndex))}function tt(n){e(h)&&(!n&&e(h).isPlaying?(_e=!0,et()):n&&_e&&(_e=!1,Ae()))}St(()=>{re=new IntersectionObserver(i=>{i.forEach(y=>{ye=y.isIntersecting,le()})},{threshold:0,rootMargin:"50px"}),e(Y)&&re.observe(e(Y));const n=()=>{X=!document.hidden,le()};return document.addEventListener("visibilitychange",n),()=>{document.removeEventListener("visibilitychange",n)}}),Mt(()=>{e(h)&&e(h)?.dispose(),re&&re.disconnect(),G&&(G.destroy(),G=null)}),Fe(()=>(e($),e(A)),()=>{e($)&&!e(A)&&T(A,v(e($)))}),Fe(()=>(e(f),e(M)),()=>{e(f)&&!e(M)&&T(M,v(e(f)))}),Fe(()=>(e(L),e(P)),()=>{e(L)&&!e(P)&&T(P,v(e(L)))}),Fe(()=>(e(D),e(A),e(M),e(P),e(h),mt(b()),e(q)),()=>{!e(D)&&e(A)&&e(M)&&e(P)&&(T(D,!0),Ve(),ue().then(()=>{Ee(),e(h)?(qe(e(h).timeline.initialState),b()&&e(q)&&Ae()):e(q)||Ve()}))}),Fe(()=>(e(D),l()),()=>{e(D)&&tt(l())}),gt(),lt();var Ce=Nt(),ze=Z(de(Ce),2),Re=de(ze),nt=de(Re);Ie(nt,{math:De(()=>String.raw`\mathbf{F}_{\text{combined}}`)}),ge(Re);var We=Z(Re,2),it=de(We);Ie(it,{math:De(()=>String.raw`\mathbf{F}_{\text{curl}}`)}),ge(We);var Ne=Z(We,2),at=de(Ne);Ie(at,{math:De(()=>String.raw`\mathbf{F}_{\text{div}}`)}),ge(Ne);var Oe=Z(Ne,4),ot=de(Oe);Ie(ot,{math:De(()=>String.raw`\nabla \cdot \mathbf{F}_{\text{curl}} = 0`)}),ge(Oe);var He=Z(Oe,2),rt=de(He);Ie(rt,{math:De(()=>String.raw`\nabla \times \mathbf{F}_{\text{div}} = \mathbf{0}`)}),ge(He);var Ye=Z(He,2);Ge(Ye,n=>T($,n),()=>e($));var Xe=Z(Ye,4);Ge(Xe,n=>T(f,n),()=>e(f));var st=Z(Xe,4);Ge(st,n=>T(L,n),()=>e(L)),ge(ze),vt(2),ge(Ce),Ge(Ce,n=>T(Y,n),()=>e(Y)),pt(()=>{Ke(Ce,`width: ${r()??""}px;`),Ke(ze,`--canvas-aspect: ${pe} / ${he??""}; --gap: ${c()??""}px;`)}),Ze(o,Ce),ht(),d()}var Ht=je("<!> <!>",1);function $t(o){var t=Ht();wt("11xaf7z",d=>{xt(()=>{bt.title="Helmholtz Decomposition (DLIC) — Alec Helbling"})});var l=yt(t);ft(l,{title:"Helmholtz Decomposition (DLIC)",author:"Alec Helbling",authorLink:"https://alechelbling.com",date:"August 25, 2026"});var u=Z(l,2);Ot(u,{}),Ze(o,t)}export{$t as component};
