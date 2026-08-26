import{b as ae}from"./Ba-nio-z.js";class ie{constructor(e){const[n,t]=Array.isArray(e)?e:[e,e];this.nx=Math.max(1,Math.floor(30*n)),this.ny=Math.max(1,Math.floor(30*t)),this.mask=new Uint8Array(this.nx*this.ny),this.trajectory=[],this.currentXY=null}index(e,n){return n*this.nx+e}isOccupied(e,n){return e<0||e>=this.nx||n<0||n>=this.ny?!0:this.mask[this.index(e,n)]!==0}startTrajectory(e,n,t){return this.trajectory=[],this.updateTrajectory(e,n,t)}updateTrajectory(e,n,t){const s=[e,n];return this.currentXY===null||this.currentXY[0]!==e||this.currentXY[1]!==n?this.isOccupied(e,n)?!t:(this.trajectory.push(s),this.mask[this.index(e,n)]=1,this.currentXY=s,!0):!0}undoTrajectory(){for(const[e,n]of this.trajectory)this.mask[this.index(e,n)]=0;this.trajectory=[],this.currentXY=null}resetCurrentXY(e,n){this.currentXY=[e,n]}}class re{constructor(e,n,t,s=100){this.mask=t,this.domainMin=e,this.width=n[0]-e[0],this.height=n[1]-e[1],this.nx=s,this.ny=s,this.x_data2grid=(this.nx-1)/this.width,this.y_data2grid=(this.ny-1)/this.height,this.x_grid2mask=(t.nx-1)/(this.nx-1),this.y_grid2mask=(t.ny-1)/(this.ny-1),this.x_mask2grid=1/this.x_grid2mask,this.y_mask2grid=1/this.y_grid2mask}data2grid(e,n){const t=(e-this.domainMin[0])*this.x_data2grid,s=(n-this.domainMin[1])*this.y_data2grid;return[t,s]}grid2data(e,n){const t=e/this.x_data2grid+this.domainMin[0],s=n/this.y_data2grid+this.domainMin[1];return[t,s]}grid2mask(e,n){return[Math.round(e*this.x_grid2mask),Math.round(n*this.y_grid2mask)]}mask2grid(e,n){return[e*this.x_mask2grid,n*this.y_mask2grid]}isWithinGrid(e,n){return e>=0&&e<=this.nx-1&&n>=0&&n<=this.ny-1}startTrajectory(e,n,t){const[s,a]=this.grid2mask(e,n);return this.mask.startTrajectory(s,a,t)}updateTrajectory(e,n,t){const[s,a]=this.grid2mask(e,n);return this.mask.updateTrajectory(s,a,t)}resetStartPoint(e,n){const[t,s]=this.grid2mask(e,n);this.mask.resetCurrentXY(t,s)}undoTrajectory(){this.mask.undoTrajectory()}isMaskOccupied(e,n){return this.mask.isOccupied(e,n)}getMask(){return this.mask}}function Q(i,e,n,t,s,a,l){const{maxerror:d,brokenStreamlines:h}=l,c=e.getMask(),p=Math.min(1/c.nx,1/c.ny,.1);let u=p,o=0,[r,g]=e.data2grid(n,t);const x=[[n,t]],w=1e4;for(let f=0;f<w&&o<a;f++){const[m,y]=e.grid2data(r,g),[P,A]=i(m,y);if(Math.sqrt(P*P+A*A)<1e-10)break;const k=s*P*e.x_data2grid,O=s*A*e.y_data2grid,I=r+u*k,M=g+u*O,[U,_]=e.grid2data(I,M),[T,E]=i(U,_),z=s*T*e.x_data2grid,N=s*E*e.y_data2grid,j=u*k,S=u*O,D=u*.5*(k+z),B=u*.5*(O+N),R=Math.sqrt(Math.pow((D-j)/(e.nx-1),2)+Math.pow((B-S)/(e.ny-1),2));if(R<d){const G=r+D,W=g+B;if(!e.isWithinGrid(G,W)){const C=G-r,F=W-g;let L=1;if(C<0&&G<0){const b=-r/C;b>0&&b<L&&(L=b)}if(C>0&&G>e.nx-1){const b=(e.nx-1-r)/C;b>0&&b<L&&(L=b)}if(F<0&&W<0){const b=-g/F;b>0&&b<L&&(L=b)}if(F>0&&W>e.ny-1){const b=(e.ny-1-g)/F;b>0&&b<L&&(L=b)}if(L>0&&L<1){const b=r+C*L,ne=g+F*L,[te,se]=e.grid2data(b,ne);x.push([te,se]),o+=Math.sqrt(C*C+F*F)*L}break}if(!e.updateTrajectory(G,W,h))break;r=G,g=W;const[J,ee]=e.grid2data(r,g);x.push([J,ee]),o+=Math.sqrt(D*D+B*B)}R===0?u=p:u=Math.min(p,.85*u*Math.sqrt(d/R))}return{points:x,length:o}}function*oe(i){const e=i.nx,n=i.ny;let t=0,s=0,a="right",l=0,d=1,h=e-1,c=n-1;for(let p=0;p<e*n;p++)switch(yield[t,s],a){case"right":t++,t>=h&&(h--,a="up");break;case"up":s++,s>=c&&(c--,a="left");break;case"left":t--,t<=l&&(l++,a="down");break;case"down":s--,s<=d&&(d++,a="right");break}}function $(i){let e=0;for(let n=1;n<i.length;n++){const t=i[n][0]-i[n-1][0],s=i[n][1]-i[n-1][1];e+=Math.sqrt(t*t+s*s)}return e}function K(i,e,n,t,s,a,l,d,h){if(!e.startTrajectory(s,a,h.brokenStreamlines))return null;let c=null,p=null;(l==="backward"||l==="both")&&(p=Q(i,e,n,t,-1,d,h)),l==="both"&&e.resetStartPoint(s,a),(l==="forward"||l==="both")&&(c=Q(i,e,n,t,1,d,h));const u=[];if(p&&p.points.length>1)for(let o=p.points.length-1;o>=1;o--)u.push(p.points[o]);if(u.push([n,t]),c&&c.points.length>1)for(let o=1;o<c.points.length;o++)u.push(c.points[o]);return u.length>1?u:null}function le(i,e){if(i.length<2)return i;const n=[i[0]];let t=0,s=i[0];for(let p=1;p<i.length;p++){const u=i[p],o=u[0]-s[0],r=u[1]-s[1],g=Math.sqrt(o*o+r*r);if(g===0)continue;const x=o/g,w=r/g;let f=g,m=s[0],y=s[1];for(;f>0;){const P=e-t;f>=P?(m+=x*P,y+=w*P,n.push([m,y]),f-=P,t=0):(t+=f,f=0)}s=u}const a=n[n.length-1],l=i[i.length-1],d=l[0]-a[0],h=l[1]-a[1];return Math.sqrt(d*d+h*h)>e*.1&&n.push(l),n}function Z(i,e){const{domainMin:n,domainMax:t,density:s=1,integrationDirection:a="both",maxlength:l=1/0,minlength:d=0,startPoints:h,brokenStreamlines:c=!0,maxerror:p=.003,segmentLength:u}=e,o=new ie(s),r=new re(n,t,o),g=[],x=a==="both"?l/2:l;if(h&&h.length>0)for(const[w,f]of h){if(w<n[0]||w>t[0]||f<n[1]||f>t[1])continue;const[m,y]=r.data2grid(w,f),[P,A]=r.grid2mask(m,y);if(o.isOccupied(P,A))continue;const v=K(i,r,w,f,m,y,a,x,{maxerror:p,brokenStreamlines:c});v&&$(v)>=d?g.push(v):r.undoTrajectory()}else for(const[w,f]of oe(o)){if(o.isOccupied(w,f))continue;const[m,y]=r.mask2grid(w,f),[P,A]=r.grid2data(m,y),v=K(i,r,P,A,m,y,a,x,{maxerror:p,brokenStreamlines:c});v&&$(v)>=d?g.push(v):r.undoTrajectory()}return u!==void 0?g.map(w=>le(w,u)):g}function V(i){const e=[],n=[0];let t=0;for(let s=1;s<i.length;s++){const a=i[s][0]-i[s-1][0],l=i[s][1]-i[s-1][1],d=Math.sqrt(a*a+l*l);e.push(d),t+=d,n.push(t)}return{segmentLengths:e,cumulativeLengths:n,totalLength:t}}function he(i,e,n,t=256,s=!1){const a=new Float32Array(t),l=1/i;for(let d=0;d<t;d++){const h=d/t*e;if(h<i)if(s)a[d]=n;else{const c=h*l;a[d]=n*c}}return a}function ce(i,e,n=256){const t=i.length,s=new Uint16Array(t),a=n/e;for(let l=0;l<t;l++){const h=i[l]%e;s[l]=Math.floor(h*a)%n}return s}function de(i,e,n,t,s){const a=i.length,l=e.length,d=(n+t)%1*l;for(let h=0;h<a;h++){let c=i[h]-d;c<0&&(c+=l);const p=Math.floor(c)%l,u=(p+1)%l,o=c-Math.floor(c);s[h]=e[p]*(1-o)+e[u]*o}}function H(i){if(Array.isArray(i))return[i[0]/255,i[1]/255,i[2]/255,1];const e=i.replace("#","");if(e.length===3){const n=parseInt(e[0]+e[0],16)/255,t=parseInt(e[1]+e[1],16)/255,s=parseInt(e[2]+e[2],16)/255;return[n,t,s,1]}else if(e.length===6){const n=parseInt(e.slice(0,2),16)/255,t=parseInt(e.slice(2,4),16)/255,s=parseInt(e.slice(4,6),16)/255;return[n,t,s,1]}return[.231,.51,.965,1]}const pe=`/**
 * GPU Pulsing Paths Shader
 *
 * Renders animated pulses along arbitrary paths using:
 * - Instanced rendering (one instance per segment)
 * - Vertex shader expands segments into quads
 * - Fragment shader uses SDF for smooth edges and sawtooth pulse animation
 * - Max blending for idempotent overlapping renders (no ownership logic needed)
 *
 * Each segment is defined by:
 * - p0, p1: Start and end points
 * - cumulativeLengthStart: Arc length at start of segment
 * - totalLength: Total path length
 * - phaseOffset: Per-path phase offset (0-1)
 * - segmentFlags: 1=first, 2=last, 3=both
 *
 * Supports two render modes:
 * - Pulse mode (showPreview=0): Animated pulses along the path
 * - Preview mode (showPreview=1): Solid line at specified opacity
 */

// ============================================================================
// Uniforms
// ============================================================================

struct Uniforms {
  // Canvas dimensions (physical pixels)
  width: f32,
  height: f32,
  // Device pixel ratio (for scaling logical to physical coordinates)
  dpr: f32,
  // Animation
  phase: f32,
  // Appearance (in logical/CSS pixels, will be scaled by DPR)
  thickness: f32,
  pulseWidth: f32,
  pulseSpacing: f32,
  baseOpacity: f32,
  binaryPulse: f32,  // 0.0 = gradient, 1.0 = binary
  // Color (RGBA)
  colorR: f32,
  colorG: f32,
  colorB: f32,
  colorA: f32,
  // Preview mode
  showPreview: f32,   // 0.0 = no preview, 1.0 = show preview
  previewOpacity: f32, // Opacity for preview line
  // Arrowhead options
  showArrowhead: f32,  // 0.0 = no arrowhead, 1.0 = show arrowhead
  arrowheadSize: f32,  // Size multiplier relative to thickness (default: 2.0)
  // Pulse shape
  pulseGamma: f32,     // Exponent on tail->head alpha ramp. 1.0 = linear.
}

@group(0) @binding(0) var<uniform> uniforms: Uniforms;

// ============================================================================
// Segment Data (Storage Buffer)
// ============================================================================

// Each segment: 8 floats (32 bytes)
// [x0, y0, x1, y1, cumulativeLengthStart, totalLength, phaseOffset, segmentFlags]
@group(0) @binding(1) var<storage, read> segments: array<f32>;

// ============================================================================
// Shared SDF Functions (injected at build time)
// ============================================================================

// SDF_UTILS_PLACEHOLDER

// ============================================================================
// Shared Pulse Functions (injected at build time)
// ============================================================================

// PULSE_PATTERN_PLACEHOLDER

// ============================================================================
// Vertex Shader
// ============================================================================

struct VertexOutput {
  @builtin(position) position: vec4<f32>,
  @location(0) localPos: vec2<f32>,      // Position relative to segment (for SDF)
  @location(1) segmentDir: vec2<f32>,    // Normalized direction of segment
  @location(2) segmentLength: f32,       // Length of this segment
  @location(3) arcLengthStart: f32,      // Cumulative arc length at segment start
  @location(4) totalLength: f32,         // Total path length
  @location(5) phaseOffset: f32,         // Per-path phase offset
  @location(6) segmentFlags: f32,        // Segment flags: 1=first, 2=last, 3=both
}

// Quad vertices: 6 vertices per instance (2 triangles)
// Arranged as: 0--1
//              | /|
//              |/ |
//              2--3
// Triangles: (0,2,1), (1,2,3)
const QUAD_POSITIONS = array<vec2<f32>, 6>(
  vec2<f32>(0.0, 1.0),   // 0: start, +perpendicular
  vec2<f32>(1.0, 1.0),   // 1: end, +perpendicular
  vec2<f32>(0.0, -1.0),  // 2: start, -perpendicular
  vec2<f32>(1.0, 1.0),   // 1: end, +perpendicular (repeated for second tri)
  vec2<f32>(0.0, -1.0),  // 2: start, -perpendicular (repeated)
  vec2<f32>(1.0, -1.0),  // 3: end, -perpendicular
);

@vertex
fn vs_main(
  @builtin(vertex_index) vertexIndex: u32,
  @builtin(instance_index) instanceIndex: u32
) -> VertexOutput {
  var output: VertexOutput;

  // Read segment data (8 floats per segment) - coordinates are in logical/CSS pixels
  let baseIdx = instanceIndex * 8u;
  let p0_logical = vec2<f32>(segments[baseIdx], segments[baseIdx + 1u]);
  let p1_logical = vec2<f32>(segments[baseIdx + 2u], segments[baseIdx + 3u]);
  let cumulativeLengthStart = segments[baseIdx + 4u];
  let totalLength = segments[baseIdx + 5u];
  let phaseOffset = segments[baseIdx + 6u];
  let segmentFlags = segments[baseIdx + 7u];

  // Decode segment flags (1=first, 2=last, 3=both)
  let isFirstSegment = (segmentFlags == 1.0) || (segmentFlags == 3.0);
  let isLastSegment = (segmentFlags >= 2.0);

  // Scale coordinates from logical pixels to physical pixels
  let dpr = uniforms.dpr;
  let p0 = p0_logical * dpr;
  let p1 = p1_logical * dpr;

  // Compute segment direction and length (in physical pixels)
  let delta = p1 - p0;
  let segmentLength = length(delta);
  let dir = select(vec2<f32>(1.0, 0.0), delta / segmentLength, segmentLength > 0.001);

  // Perpendicular (rotated 90 degrees CCW)
  let perp = vec2<f32>(-dir.y, dir.x);

  // Get quad position for this vertex
  let quadPos = QUAD_POSITIONS[vertexIndex % 6u];

  // Scale thickness by DPR for physical pixels
  let physicalThickness = uniforms.thickness * dpr;
  let halfThickness = physicalThickness * 0.5;

  // Calculate arrowhead extent for margin extension (in physical pixels)
  // Length multiplier 1.5 makes arrowhead longer than wide for better appearance
  let arrowheadLength = uniforms.thickness * uniforms.arrowheadSize * 1.5 * dpr;
  let arrowheadLengthMargin = select(0.0, arrowheadLength, uniforms.showArrowhead > 0.5);

  // Arrowhead perpendicular extent (halfBase is wider than halfThickness)
  let arrowheadHalfBase = uniforms.thickness * uniforms.arrowheadSize * 0.75 * dpr;
  let arrowheadWidthMargin = select(0.0, arrowheadHalfBase - halfThickness, uniforms.showArrowhead > 0.5);

  // Separate margins for along (length) and across (width)
  let alongMargin = halfThickness + 2.0 * dpr + arrowheadLengthMargin;
  let acrossMargin = halfThickness + 2.0 * dpr + max(0.0, arrowheadWidthMargin);

  // Compute world position (in physical pixels)
  // quadPos.x: 0 = start, 1 = end
  // quadPos.y: -1 to 1 perpendicular extent
  // Extend quad for capsule cap rendering:
  // - All segments: extend both directions for pulse tail/head caps
  // - With max blend, overlapping renders are idempotent so double-coverage is fine
  let along = mix(-alongMargin, segmentLength + alongMargin, quadPos.x);
  let across = quadPos.y * acrossMargin;

  let worldPos = p0 + dir * along + perp * across;

  // Convert to NDC (-1 to 1) using physical pixel dimensions
  let ndcX = (worldPos.x / uniforms.width) * 2.0 - 1.0;
  let ndcY = 1.0 - (worldPos.y / uniforms.height) * 2.0; // Flip Y for canvas coords

  output.position = vec4<f32>(ndcX, ndcY, 0.0, 1.0);

  // Pass data to fragment shader (in physical pixels for SDF calculations)
  // localPos: position relative to segment start, in segment-local coordinates
  output.localPos = vec2<f32>(along, across);
  output.segmentDir = dir;
  output.segmentLength = segmentLength;
  // Arc lengths remain in logical pixels for consistent pulse animation
  output.arcLengthStart = cumulativeLengthStart;
  output.totalLength = totalLength;
  output.phaseOffset = phaseOffset;
  output.segmentFlags = segmentFlags;

  return output;
}

// ============================================================================
// Fragment Shader
// ============================================================================

@fragment
fn fs_main(input: VertexOutput) -> @location(0) vec4<f32> {
  let dpr = uniforms.dpr;
  let physicalThickness = uniforms.thickness * dpr;
  let halfThickness = physicalThickness * 0.5;

  // Perpendicular distance (physical pixels)
  let perpDist = abs(input.localPos.y);

  // Arc length at this fragment (logical pixels)
  let arcLength = input.arcLengthStart + input.localPos.x / dpr;

  // Common calculations for both preview and pulse modes
  let halfThicknessLogical = uniforms.thickness * 0.5;
  let perpDistLogical = perpDist / dpr;

  // Calculate arrowhead dimensions (in logical pixels) - needed for clipping
  // Arrowhead is wider than pulse body (0.75 makes base 1.5x pulse width)
  // Length multiplier 1.5 makes arrowhead longer than wide for better appearance
  let arrowheadLength = uniforms.thickness * uniforms.arrowheadSize * 1.5;
  let arrowheadHalfBase = uniforms.thickness * uniforms.arrowheadSize * 0.75;

  // Use wider clipping width when arrowheads enabled (allows arrowhead to extend beyond pulse width)
  let clipHalfWidth = select(halfThicknessLogical, arrowheadHalfBase, uniforms.showArrowhead > 0.5);

  // Path capsule SDF: clips to [0, totalLength] with rounded ends
  var pathCapsuleSd = computePathCapsuleSDF(
    arcLength,
    perpDistLogical,
    input.totalLength,
    clipHalfWidth
  );
  pathCapsuleSd = pathCapsuleSd * dpr; // Convert to physical pixels

  // Anti-aliasing
  let aaWidth = 0.75 * dpr;

  // Preview mode: render solid line at preview opacity
  // Pure SDF intersection with max blend - no ownership logic needed
  if (uniforms.showPreview > 0.5) {
    // Preview uses pulse width, not arrowhead width
    var previewCapsuleSd = computePathCapsuleSDF(
      arcLength,
      perpDistLogical,
      input.totalLength,
      halfThicknessLogical
    );
    previewCapsuleSd = previewCapsuleSd * dpr;
    let previewAlpha = 1.0 - smoothstep(-aaWidth, aaWidth, previewCapsuleSd);
    let finalPreviewAlpha = previewAlpha * uniforms.previewOpacity;

    // Output pre-multiplied color for max blend
    let color = vec3<f32>(uniforms.colorR, uniforms.colorG, uniforms.colorB);
    let outAlpha = finalPreviewAlpha * uniforms.colorA;
    return vec4<f32>(color * outAlpha, outAlpha);
  }
  let arrowheadExtent = select(0.0, arrowheadLength, uniforms.showArrowhead > 0.5);

  // Pulse mode: animated pulses along path
  // Use extended pulse info if arrowheads enabled
  let pulseInfo = computePulseInfoWithArrowhead(
    arcLength,
    uniforms.phase,
    input.phaseOffset,
    uniforms.pulseSpacing,
    uniforms.pulseWidth,
    halfThicknessLogical,
    arrowheadExtent
  );

  // Compute extents for early discard and SDF calculations
  let aaMarginLogical = 1.0;
  let capExtent = halfThicknessLogical + aaMarginLogical;
  let totalCapExtent = capExtent + arrowheadExtent;

  // Path cap regions (extended for arrowhead at end)
  let inPathStartCap = arcLength < capExtent;
  let inPathEndCap = arcLength > input.totalLength - totalCapExtent;

  // Early discard if not in pulse region AND not in path cap region
  if (!pulseInfo.inPulseRegion && !inPathStartCap && !inPathEndCap) {
    discard;
  }

  // Pure SDF intersection with max blend
  // No ownership logic needed - max blend makes overlapping renders idempotent.
  // Multiple segments may render the same pixel, but they compute the same
  // alpha based on arc length, and max(a, a) = a.

  // Compute pulse SDF with optional arrowhead
  var sdPulse = computePulseWithArrowheadSDF(
    arcLength,
    perpDistLogical,
    pulseInfo,
    halfThicknessLogical,
    uniforms.showArrowhead,
    arrowheadLength,
    arrowheadHalfBase
  );

  // Convert pulse SDF to physical pixels
  sdPulse = sdPulse * dpr;

  // Intersect pulse SDF with path capsule
  let sd = max(sdPulse, pathCapsuleSd);

  // Anti-aliased alpha from signed distance
  let alpha = 1.0 - smoothstep(-aaWidth, aaWidth, sd);

  // Gamma-curved alpha interpolation along pulse (0.0 at tail/bodyStart, 1.0 at head/bodyEnd)
  // When binaryPulse=1.0, use solid pulses instead of gradient
  let pulseAlpha = computePulseAlpha(
    arcLength,
    pulseInfo.bodyStart,
    uniforms.pulseWidth,
    uniforms.binaryPulse,
    uniforms.pulseGamma
  );

  // Combine SDF alpha, pulse alpha, and base opacity
  let finalAlpha = alpha * pulseAlpha * uniforms.baseOpacity;

  // Output pre-multiplied color for max blend
  let color = vec3<f32>(uniforms.colorR, uniforms.colorG, uniforms.colorB);
  let outAlpha = finalAlpha * uniforms.colorA;
  return vec4<f32>(color * outAlpha, outAlpha);
}
`,ue=`/**
 * Signed Distance Functions (SDF) Utilities
 *
 * Convention: sd* functions return signed distance (negative inside, positive outside)
 *
 * These functions are shared between streamlines, pulsing paths, and other renderers.
 */

/**
 * SDF for a circle centered at origin.
 * @param p - Point to measure from
 * @param r - Circle radius
 * @returns Signed distance (negative inside, positive outside)
 */
fn sdCircle(p: vec2<f32>, r: f32) -> f32 {
  return length(p) - r;
}

/**
 * SDF for horizontal line segment (infinite in x, bounded in y).
 * Used for rectangular pulse body.
 * @param perpDist - Perpendicular distance from centerline (absolute value)
 * @param halfWidth - Half the line width
 * @returns Signed distance (negative inside, positive outside)
 */
fn sdLine(perpDist: f32, halfWidth: f32) -> f32 {
  return perpDist - halfWidth;
}

/**
 * SDF for isoceles triangle (arrowhead) pointing in +X direction.
 * Base at x=0, tip at (arrowLen, 0).
 *
 * @param p - Point to measure from (in local coordinates)
 * @param arrowLen - Distance from base to tip
 * @param halfBase - Half the width of the base
 * @returns Signed distance (negative inside, positive outside)
 */
fn sdArrowhead(p: vec2<f32>, arrowLen: f32, halfBase: f32) -> f32 {
  // Reflect to upper half (use y-symmetry)
  let q = vec2<f32>(p.x, abs(p.y));

  // Triangle vertices:
  // Base-top: (0, halfBase)
  // Base-bottom: (0, -halfBase)
  // Tip: (arrowLen, 0)

  // Edge from base-top (0, halfBase) to tip (arrowLen, 0)
  let edgeVec = vec2<f32>(arrowLen, -halfBase);
  let edgeLen = length(edgeVec);
  let edgeDir = edgeVec / edgeLen;
  // Outward normal (rotate edge direction 90 CCW)
  let edgeNormal = vec2<f32>(-edgeDir.y, edgeDir.x);

  // Vector from base-top corner to query point
  let toQ = q - vec2<f32>(0.0, halfBase);

  // Signed distance to the sloped edge plane
  let distToSlope = dot(toQ, edgeNormal);

  // Distance along edge from base-top corner
  let alongEdge = dot(toQ, edgeDir);

  // Distance to back edge (x = 0, pointing inward is negative x)
  let distToBack = -p.x;

  // Determine which region we're in and compute appropriate distance
  if (distToSlope > 0.0) {
    // Outside the sloped edge
    if (alongEdge < 0.0) {
      // Near base-top corner
      return length(toQ);
    } else if (alongEdge > edgeLen) {
      // Near tip corner
      return length(q - vec2<f32>(arrowLen, 0.0));
    } else {
      // Along sloped edge
      return distToSlope;
    }
  } else if (distToBack > 0.0) {
    // Behind the base
    if (q.y > halfBase) {
      // Past base-top corner
      return length(toQ);
    } else {
      // Directly behind base
      return distToBack;
    }
  } else {
    // Inside triangle
    return max(distToSlope, distToBack);
  }
}
`,fe=`/**
 * Pulse Pattern Computation Utilities
 *
 * Shared functions for computing animated pulse patterns along paths.
 * Used by streamlines, pulsing paths, and other trajectory renderers.
 *
 * Requires sdf-utils.wgsl to be included before this file.
 */

/**
 * Information about the pulse region a fragment is in.
 */
struct PulseInfo {
  inPulseRegion: bool,  // Whether fragment is potentially in pulse render area
  bodyStart: f32,       // Arc length where body starts (logical pixels)
  bodyEnd: f32,         // Arc length where body ends (logical pixels)
  posInPattern: f32,    // Position within pulse pattern (for alpha)
}

/**
 * Compute pulse body bounds for a fragment's position.
 *
 * The pattern repeats every \`pulseSpacing\` pixels along the path.
 * This function finds the arc length positions of the nearest pulse's
 * body start (tail) and body end (head).
 *
 * @param arcLength - Position along the path (logical pixels)
 * @param phase - Animation phase (0-1)
 * @param phaseOffset - Per-path phase offset (0-1)
 * @param pulseSpacing - Total spacing (pulse + gap) in logical pixels
 * @param pulseWidth - Width of pulse body in logical pixels
 * @param halfThickness - Half thickness for cap extent calculation (logical pixels)
 * @returns PulseInfo struct with body bounds and region info
 */
fn computePulseInfo(
  arcLength: f32,
  phase: f32,
  phaseOffset: f32,
  pulseSpacing: f32,
  pulseWidth: f32,
  halfThickness: f32
) -> PulseInfo {
  var info: PulseInfo;

  // Combine global phase and per-path offset
  let totalPhase = fract(phase + phaseOffset);
  let phasePixels = totalPhase * pulseSpacing;

  // Position in pattern (0 to pulseSpacing)
  let posInPattern = fract((arcLength - phasePixels) / pulseSpacing) * pulseSpacing;

  // The pulse body spans [0, pulseWidth] in pattern space
  // Convert to arc length of the pulse whose pattern contains this fragment
  let currentPatternStart = arcLength - posInPattern;

  // Check if in potential render area (body + caps + AA margin)
  let aaMargin = 1.0;
  let capExtent = halfThickness + aaMargin;

  // Calculate distances to current, next, and previous pulses
  let currentBodyStart = currentPatternStart;
  let currentBodyEnd = currentPatternStart + pulseWidth;
  let nextBodyStart = currentPatternStart + pulseSpacing;
  let prevBodyEnd = currentPatternStart - pulseSpacing + pulseWidth;

  // Distance to nearest point on each pulse body
  let distToCurrent = max(currentBodyStart - arcLength, arcLength - currentBodyEnd);
  let distToNext = nextBodyStart - arcLength;  // Always positive (next is ahead)
  let distToPrev = arcLength - prevBodyEnd;    // Always positive (prev is behind)

  // Find which pulse is closest
  // For current pulse, use the clamped distance (0 if inside body)
  let clampedDistToCurrent = max(0.0, distToCurrent);

  // Select the nearest pulse's bounds
  if (distToNext < clampedDistToCurrent && distToNext < distToPrev) {
    // Next pulse is closest (we're in the gap, closer to next pulse's tail)
    info.bodyStart = nextBodyStart;
    info.bodyEnd = nextBodyStart + pulseWidth;
  } else if (distToPrev < clampedDistToCurrent) {
    // Previous pulse is closest (we're in the gap, closer to prev pulse's head)
    info.bodyStart = currentPatternStart - pulseSpacing;
    info.bodyEnd = prevBodyEnd;
  } else {
    // Current pulse is closest or we're inside it
    info.bodyStart = currentBodyStart;
    info.bodyEnd = currentBodyEnd;
  }

  info.posInPattern = posInPattern;

  // Check if we're within cap extent of the selected pulse
  info.inPulseRegion = (arcLength >= info.bodyStart - capExtent) &&
                       (arcLength <= info.bodyEnd + capExtent);

  return info;
}

/**
 * Compute pulse bounds with extended region for arrowhead.
 * Same as computePulseInfo but extends inPulseRegion to include arrowhead.
 *
 * @param arcLength - Position along the path (logical pixels)
 * @param phase - Animation phase (0-1)
 * @param phaseOffset - Per-path phase offset (0-1)
 * @param pulseSpacing - Total spacing (pulse + gap) in logical pixels
 * @param pulseWidth - Width of pulse body in logical pixels
 * @param halfThickness - Half thickness for cap extent calculation (logical pixels)
 * @param arrowheadLength - Additional extent for arrowhead (logical pixels)
 * @returns PulseInfo struct with body bounds and extended region info
 */
fn computePulseInfoWithArrowhead(
  arcLength: f32,
  phase: f32,
  phaseOffset: f32,
  pulseSpacing: f32,
  pulseWidth: f32,
  halfThickness: f32,
  arrowheadLength: f32
) -> PulseInfo {
  // Get base pulse info
  var info = computePulseInfo(
    arcLength,
    phase,
    phaseOffset,
    pulseSpacing,
    pulseWidth,
    halfThickness
  );

  // Extend the region to include arrowhead
  let aaMargin = 1.0;
  let capExtent = halfThickness + aaMargin;
  let totalExtent = capExtent + arrowheadLength;

  // Re-check if we're within extended render area
  info.inPulseRegion = (arcLength >= info.bodyStart - capExtent) &&
                       (arcLength <= info.bodyEnd + totalExtent);

  return info;
}

/**
 * Compute the SDF for a pulse capsule (body + head/tail caps).
 * Returns the signed distance to the pulse shape in logical pixels.
 *
 * @param arcLength - Position along the path (logical pixels)
 * @param perpDistLogical - Perpendicular distance from centerline (logical pixels)
 * @param pulseInfo - Pulse bounds from computePulseInfo
 * @param halfThicknessLogical - Half thickness (logical pixels)
 * @returns Signed distance in logical pixels
 */
fn computePulseSDF(
  arcLength: f32,
  perpDistLogical: f32,
  pulseInfo: PulseInfo,
  halfThicknessLogical: f32
) -> f32 {
  // Capsule SDF: clamp arc length to [bodyStart, bodyEnd], then compute distance
  // This naturally creates rounded caps at both ends
  let clampedArc = clamp(arcLength, pulseInfo.bodyStart, pulseInfo.bodyEnd);
  let alongDist = arcLength - clampedArc;  // Distance along path from clamped point

  // Distance from the capsule centerline
  let dist = length(vec2<f32>(alongDist, perpDistLogical));

  return dist - halfThicknessLogical;
}

/**
 * Compute pulse alpha based on position within pattern.
 * Gamma-curved gradient from 0 at tail to 1 at head, or 1.0 for binary mode.
 *
 * @param arcLength - Position along the path (logical pixels)
 * @param bodyStart - Arc length where pulse body starts (logical pixels)
 * @param pulseWidth - Width of pulse body (logical pixels)
 * @param binaryPulse - 0.0 for gradient, 1.0 for solid
 * @param pulseGamma - Exponent applied to position-along-pulse before mix.
 *   1.0 = linear (default behavior). >1 = head-loaded (steep falloff behind
 *   head). <1 = tail-loaded (slow falloff, head fades in gently).
 * @returns Alpha value (0.0 to 1.0)
 */
fn computePulseAlpha(
  arcLength: f32,
  bodyStart: f32,
  pulseWidth: f32,
  binaryPulse: f32,
  pulseGamma: f32
) -> f32 {
  let normalizedPos = saturate((arcLength - bodyStart) / pulseWidth);
  let curved = pow(normalizedPos, pulseGamma);
  return mix(curved, 1.0, binaryPulse);
}

/**
 * Compute the SDF for a pulse with optional arrowhead.
 * Returns union of pulse capsule and arrowhead triangle.
 *
 * @param arcLength - Position along path (logical pixels)
 * @param perpDistLogical - Perpendicular distance (logical pixels)
 * @param pulseInfo - Pulse bounds from computePulseInfo
 * @param halfThicknessLogical - Half thickness (logical pixels)
 * @param showArrowhead - Whether to render arrowhead (0.0 or 1.0)
 * @param arrowheadLength - Length of arrowhead (logical pixels)
 * @param arrowheadHalfBase - Half-width of arrowhead base (logical pixels)
 * @returns Signed distance in logical pixels
 */
fn computePulseWithArrowheadSDF(
  arcLength: f32,
  perpDistLogical: f32,
  pulseInfo: PulseInfo,
  halfThicknessLogical: f32,
  showArrowhead: f32,
  arrowheadLength: f32,
  arrowheadHalfBase: f32
) -> f32 {
  // Base pulse capsule SDF
  let pulseSd = computePulseSDF(arcLength, perpDistLogical, pulseInfo, halfThicknessLogical);

  // If arrowheads disabled, return base pulse
  if (showArrowhead < 0.5) {
    return pulseSd;
  }

  // Arrowhead is positioned at bodyEnd (pulse head)
  // Transform to arrowhead local coordinates:
  // - Origin at bodyEnd on centerline
  // - +X points in direction of travel (along path)
  let arrowheadPos = vec2<f32>(
    arcLength - pulseInfo.bodyEnd,  // x: distance from arrowhead base
    perpDistLogical                 // y: perpendicular distance
  );

  // Compute arrowhead SDF
  let arrowSd = sdArrowhead(arrowheadPos, arrowheadLength, arrowheadHalfBase);

  // Union: minimum of both SDFs (inside either shape)
  return min(pulseSd, arrowSd);
}

/**
 * Compute path capsule SDF for clipping pulses to path bounds.
 * Clips rendering to [0, totalLength] with rounded ends.
 *
 * @param arcLength - Position along the path (logical pixels)
 * @param perpDistLogical - Perpendicular distance from centerline (logical pixels)
 * @param totalLength - Total path length (logical pixels)
 * @param halfThicknessLogical - Half thickness (logical pixels)
 * @returns Signed distance in logical pixels
 */
fn computePathCapsuleSDF(
  arcLength: f32,
  perpDistLogical: f32,
  totalLength: f32,
  halfThicknessLogical: f32
) -> f32 {
  var sd: f32;
  if (arcLength < 0.0) {
    // Before start: circular cap at arcLength=0
    sd = length(vec2<f32>(-arcLength, perpDistLogical)) - halfThicknessLogical;
  } else if (arcLength > totalLength) {
    // Past end: circular cap at arcLength=totalLength
    sd = length(vec2<f32>(arcLength - totalLength, perpDistLogical)) - halfThicknessLogical;
  } else {
    // On path: perpendicular distance only
    sd = perpDistLogical - halfThicknessLogical;
  }
  return sd;
}
`,ge=pe.replace("// SDF_UTILS_PLACEHOLDER",ue).replace("// PULSE_PATTERN_PLACEHOLDER",fe),me=2.5,we=30,ye=50,xe=.8,Pe="#3b82f6",be=.3,ve=2,Se=1,Le=80;function ke(i,e){if(i.length<2)return i;const n=[i[0]];for(let t=1;t<i.length;t++){const s=n[n.length-1],a=i[t],l=a[0]-s[0],d=a[1]-s[1],h=Math.sqrt(l*l+d*d),c=t===i.length-1;(h>=e||c)&&n.push(a)}return n}function Te(i,e="synchronized",n=0){const t=n>0?i.map(h=>ke(h,n)):i;let s=0;for(const h of t)h.length>=2&&(s+=h.length-1);const a=new Float32Array(s*8);let l=0,d=0;for(const h of t){if(h.length<2)continue;const{cumulativeLengths:c,totalLength:p}=V(h),u=e==="random"?Math.random():0;for(let o=0;o<h.length-1;o++){const r=l*8,[g,x]=h[o],[w,f]=h[o+1];a[r+0]=g,a[r+1]=x,a[r+2]=w,a[r+3]=f,a[r+4]=c[o],a[r+5]=p,a[r+6]=u;const m=o===0?1:0,y=o===h.length-2?2:0;a[r+7]=m+y,l++}d++}return{segments:a,segmentCount:s,pathCount:d}}class Y{constructor(e,n,t,s,a,l,d,h,c){this.segmentBuffer=null,this.bindGroup=null,this.segmentCount=0,this.device=e,this.context=n,this.format=t,this.pipeline=s,this.uniformBuffer=a,this.canvasWidth=l,this.canvasHeight=d,this.dpr=h,this.thickness=c.thickness??me,this.pulseWidth=c.pulseWidth??we;const p=c.pulseGap??ye;this.pulseSpacing=this.pulseWidth+p,this.baseOpacity=c.baseOpacity??xe,this.binaryPulse=c.binaryPulse??!1,this.color=H(c.color??Pe),this.showPreview=c.showPreview??!1,this.previewOpacity=c.previewOpacity??be,this.showArrowhead=c.showArrowhead??!1,this.arrowheadSize=c.arrowheadSize??ve,this.pulseGamma=c.pulseGamma??Se}static async create(e,n={},t){const s=n.dpr??(typeof window<"u"?window.devicePixelRatio:1)??1;let a;if(t)a=t.device;else{if(!navigator.gpu)throw new Error("WebGPU is not supported in this browser");const r=await navigator.gpu.requestAdapter();if(!r)throw new Error("Failed to get WebGPU adapter");a=await r.requestDevice()}const l=e.getContext("webgpu");if(!l)throw new Error("Failed to get WebGPU canvas context");const d=navigator.gpu.getPreferredCanvasFormat();l.configure({device:a,format:d,alphaMode:"premultiplied"});const h=a.createShaderModule({label:"Pulsing Paths Shader",code:ge}),c=a.createBuffer({label:"Pulsing Paths Uniforms",size:Le,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),p=a.createBindGroupLayout({label:"Pulsing Paths Bind Group Layout",entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}}]}),u=a.createPipelineLayout({label:"Pulsing Paths Pipeline Layout",bindGroupLayouts:[p]}),o=a.createRenderPipeline({label:"Pulsing Paths Render Pipeline",layout:u,vertex:{module:h,entryPoint:"vs_main"},fragment:{module:h,entryPoint:"fs_main",targets:[{format:d,blend:{color:{srcFactor:"one",dstFactor:"one",operation:"max"},alpha:{srcFactor:"one",dstFactor:"one",operation:"max"}}}]},primitive:{topology:"triangle-list"}});return new Y(a,l,d,o,c,e.width,e.height,s,n)}setPaths(e,n="synchronized"){const t=this.thickness/2,s=Te(e,n,t);if(this.segmentCount=s.segmentCount,this.segmentCount===0){this.segmentBuffer=null,this.bindGroup=null;return}this.segmentBuffer&&this.segmentBuffer.destroy(),this.segmentBuffer=this.device.createBuffer({label:"Pulsing Paths Segments",size:s.segments.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.segmentBuffer,0,s.segments),this.bindGroup=this.device.createBindGroup({label:"Pulsing Paths Bind Group",layout:this.pipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.uniformBuffer}},{binding:1,resource:{buffer:this.segmentBuffer}}]})}setPathData(e){if(this.segmentCount=e.segmentCount,this.segmentCount===0){this.segmentBuffer=null,this.bindGroup=null;return}this.segmentBuffer&&this.segmentBuffer.destroy(),this.segmentBuffer=this.device.createBuffer({label:"Pulsing Paths Segments",size:e.segments.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.segmentBuffer,0,e.segments),this.bindGroup=this.device.createBindGroup({label:"Pulsing Paths Bind Group",layout:this.pipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.uniformBuffer}},{binding:1,resource:{buffer:this.segmentBuffer}}]})}resize(e,n,t){this.canvasWidth=e,this.canvasHeight=n,t!==void 0&&(this.dpr=t)}getDpr(){return this.dpr}render(e,n){if(!this.bindGroup||this.segmentCount===0){if(n){const m=this.device.createCommandEncoder(),y=this.context.getCurrentTexture().createView();m.beginRenderPass({colorAttachments:[{view:y,clearValue:{r:n[0],g:n[1],b:n[2],a:n[3]},loadOp:"clear",storeOp:"store"}]}).end(),this.device.queue.submit([m.finish()])}return}const t=e.thickness??this.thickness,s=e.baseOpacity??this.baseOpacity,a=e.color?H(e.color):this.color,l=e.dpr??this.dpr,d=e.showPreview??this.showPreview,h=e.previewOpacity??this.previewOpacity,c=e.showArrowhead??this.showArrowhead,p=e.arrowheadSize??this.arrowheadSize,u=e.pulseGamma??this.pulseGamma,o=new Float32Array(20);o[0]=this.canvasWidth,o[1]=this.canvasHeight,o[2]=l,o[3]=e.phase,o[4]=t,o[5]=this.pulseWidth,o[6]=this.pulseSpacing,o[7]=s,o[8]=this.binaryPulse?1:0,o[9]=a[0],o[10]=a[1],o[11]=a[2],o[12]=a[3],o[13]=d?1:0,o[14]=h,o[15]=c?1:0,o[16]=p,o[17]=u,this.device.queue.writeBuffer(this.uniformBuffer,0,o);const r=this.device.createCommandEncoder(),g=this.context.getCurrentTexture().createView(),x=n?"clear":"load",w=n?{r:n[0],g:n[1],b:n[2],a:n[3]}:{r:0,g:0,b:0,a:0},f=r.beginRenderPass({colorAttachments:[{view:g,clearValue:w,loadOp:x,storeOp:"store"}]});f.setPipeline(this.pipeline),f.setBindGroup(0,this.bindGroup),f.draw(6,this.segmentCount,0,0),f.end(),this.device.queue.submit([r.finish()])}renderToTexture(e,n,t){if(!this.bindGroup||this.segmentCount===0){const m=this.device.createCommandEncoder();return t&&m.beginRenderPass({colorAttachments:[{view:n,clearValue:{r:t[0],g:t[1],b:t[2],a:t[3]},loadOp:"clear",storeOp:"store"}]}).end(),m.finish()}const s=e.thickness??this.thickness,a=e.baseOpacity??this.baseOpacity,l=e.color?H(e.color):this.color,d=e.dpr??this.dpr,h=e.showPreview??this.showPreview,c=e.previewOpacity??this.previewOpacity,p=e.showArrowhead??this.showArrowhead,u=e.arrowheadSize??this.arrowheadSize,o=e.pulseGamma??this.pulseGamma,r=new Float32Array(20);r[0]=this.canvasWidth,r[1]=this.canvasHeight,r[2]=d,r[3]=e.phase,r[4]=s,r[5]=this.pulseWidth,r[6]=this.pulseSpacing,r[7]=a,r[8]=this.binaryPulse?1:0,r[9]=l[0],r[10]=l[1],r[11]=l[2],r[12]=l[3],r[13]=h?1:0,r[14]=c,r[15]=p?1:0,r[16]=u,r[17]=o,this.device.queue.writeBuffer(this.uniformBuffer,0,r);const g=this.device.createCommandEncoder(),x=t?"clear":"load",w=t?{r:t[0],g:t[1],b:t[2],a:t[3]}:{r:0,g:0,b:0,a:0},f=g.beginRenderPass({colorAttachments:[{view:n,clearValue:w,loadOp:x,storeOp:"store"}]});return f.setPipeline(this.pipeline),f.setBindGroup(0,this.bindGroup),f.draw(6,this.segmentCount,0,0),f.end(),g.finish()}updateOptions(e){if(e.thickness!==void 0&&(this.thickness=e.thickness),e.pulseWidth!==void 0){this.pulseWidth=e.pulseWidth;const n=e.pulseGap??this.pulseSpacing-this.pulseWidth;this.pulseSpacing=this.pulseWidth+n}e.pulseGap!==void 0&&(this.pulseSpacing=this.pulseWidth+e.pulseGap),e.baseOpacity!==void 0&&(this.baseOpacity=e.baseOpacity),e.binaryPulse!==void 0&&(this.binaryPulse=e.binaryPulse),e.color!==void 0&&(this.color=H(e.color)),e.showPreview!==void 0&&(this.showPreview=e.showPreview),e.previewOpacity!==void 0&&(this.previewOpacity=e.previewOpacity),e.showArrowhead!==void 0&&(this.showArrowhead=e.showArrowhead),e.arrowheadSize!==void 0&&(this.arrowheadSize=e.arrowheadSize),e.pulseGamma!==void 0&&(this.pulseGamma=e.pulseGamma)}getSegmentCount(){return this.segmentCount}getDevice(){return this.device}getFormat(){return this.format}getContext(){return this.context}getCanvasSize(){return{width:this.canvasWidth,height:this.canvasHeight}}destroy(){this.uniformBuffer.destroy(),this.segmentBuffer&&this.segmentBuffer.destroy()}}class X{constructor(e){this.renderer=e}static async create(e,n={},t){const s=await Y.create(e,n,t);return new X(s)}setStreamlines(e,n="synchronized"){this.renderer.setPaths(e,n)}setStreamlineData(e){const n={segments:e.segments,segmentCount:e.segmentCount,pathCount:e.streamlineCount};this.renderer.setPathData(n)}resize(e,n,t){this.renderer.resize(e,n,t)}getDpr(){return this.renderer.getDpr()}render(e,n){this.renderer.render(e,n)}renderToTexture(e,n,t){return this.renderer.renderToTexture(e,n,t)}updateOptions(e){this.renderer.updateOptions(e)}getSegmentCount(){return this.renderer.getSegmentCount()}getDevice(){return this.renderer.getDevice()}getFormat(){return this.renderer.getFormat()}getContext(){return this.renderer.getContext()}getCanvasSize(){return this.renderer.getCanvasSize()}destroy(){this.renderer.destroy()}}function De(i,e){if(e<=1||i.length<2)return i;const n=[i[0]];for(let t=0;t<i.length-1;t++){const[s,a]=i[t],[l,d]=i[t+1];for(let h=1;h<=e;h++){const c=h/e;n.push([s+(l-s)*c,a+(d-a)*c])}}return n}class q{constructor(e,n,t,s,a){this.ctx=null,this.renderer=null,this.canvas=null,this.isInitialized=!1,this.data=n,this.clip=t,this.backend=e.backend??"cpu",s?(this.baseOpacity=s.baseOpacity,this.color=s.color,this.strokeWidth=s.strokeWidth,this.gradientSubdivisions=s.gradientSubdivisions,this.alphaLUT=s.alphaLUT,this.alphaBuffers=s.alphaBuffers,this.cpuLengthData=s.cpuLengthData):(this.baseOpacity=.8,this.color="#3b82f6",this.strokeWidth=2.5,this.gradientSubdivisions=12,this.alphaLUT=null,this.alphaBuffers=null,this.cpuLengthData=null),a?(this.rendererOptions=a.rendererOptions,this.offsetMode=a.offsetMode):(this.rendererOptions=null,this.offsetMode="synchronized")}async init(e){if(!(this.isInitialized&&this.canvas===e)){if(this.backend==="cpu"){const n=e.getContext("2d");if(!n)throw new Error("Failed to get 2D rendering context");this.ctx=n,this.canvas=e,this.isInitialized=!0;return}if(!this.rendererOptions)throw new Error("GPU renderer options not configured");this.renderer&&(this.renderer.destroy(),this.renderer=null),this.canvas=e,this.renderer=await X.create(e,this.rendererOptions),this.renderer.setStreamlines(this.data.streamlines,this.offsetMode),this.isInitialized=!0}}get initialized(){return this.isInitialized}draw(e,n=[0,0,0,0]){if(!this.isInitialized){console.warn("StreamlineAnimation.draw() called before init()");return}this.backend==="cpu"?this.drawCPU(e):this.drawGPU(e,n)}drawCPU(e){if(!this.ctx||!this.alphaLUT||!this.alphaBuffers||!this.cpuLengthData)return;const{streamlines:n,offsets:t}=this.data;if(n.length===0)return;const s=e.streamlinePhase,a=n.map((l,d)=>{const{patternIndices:h}=this.cpuLengthData[d],c=t[d]??0,p=this.alphaBuffers[d];return de(h,this.alphaLUT,s,c,p),Array.from(p)});ae(this.ctx,n,0,{strokeWidth:this.strokeWidth,color:this.color,opacity:this.baseOpacity,pointRadius:0,showPreview:!1,showHeadMarker:!1,perSegmentAlphas:a,gradientSubdivisions:this.gradientSubdivisions})}drawGPU(e,n){this.renderer&&this.renderer.render({phase:e.streamlinePhase},n)}updateOptions(e){this.renderer&&this.renderer.updateOptions(e)}resize(e,n,t){this.renderer&&this.renderer.resize(e,n,t)}getRenderer(){return this.renderer}destroy(){this.renderer&&(this.renderer.destroy(),this.renderer=null),this.ctx=null,this.canvas=null,this.isInitialized=!1}static create(e){return(e.backend??"cpu")==="gpu"?q.createGPU(e):q.createCPU(e)}static createCPU(e){const{vectorFieldFn:n,domain:t,toPixel:s,density:a=1,minPathLength:l=2,segmentLength:d,integrationDirection:h="both",startPoints:c,subdivisionFactor:p=1,pulseWidthPixels:u=30,pulsePauseWidthPixels:o=50,baseOpacity:r=.8,offsets:g="synchronized",binaryPulse:x=!1,duration:w,pulseFrequency:f=1,color:m="#3b82f6",strokeWidth:y=2.5,gradientSubdivisions:P=12}=e,A=f*w,k=Z(n,{domainMin:[t.xMin,t.yMin],domainMax:[t.xMax,t.yMax],density:a,integrationDirection:h,minlength:l,segmentLength:d,startPoints:c}).map(S=>{const D=S.map(B=>s(B));return De(D,p)}),O=u+o,I=k.map(S=>{const{cumulativeLengths:D,totalLength:B}=V(S),R=ce(D,O);return{cumulativeLengths:D,totalLength:B,patternIndices:R}}),M=I.map(({cumulativeLengths:S,totalLength:D,patternIndices:B})=>({cumulativeLengths:S,totalLength:D,patternIndices:B})),U=Math.max(...M.map(S=>S.totalLength),0),_=g==="random"?k.map(()=>Math.random()):k.map(()=>0),T=he(u,O,r,256,x),E=k.map(S=>new Float32Array(S.length)),z={streamlines:k,offsets:_,lengthData:M,maxLength:U},N={name:"StreamlinePhase",reduce(S){return{streamlinePhase:S*A%1}}},j=typeof m=="string"?m:`rgb(${m[0]}, ${m[1]}, ${m[2]})`;return new q(e,z,N,{baseOpacity:r,color:j,strokeWidth:y,gradientSubdivisions:P,alphaLUT:T,alphaBuffers:E,cpuLengthData:I},null)}static createGPU(e){const{vectorFieldFn:n,domain:t,toPixel:s,density:a=1,minPathLength:l=2,integrationDirection:d="both",startPoints:h,pulseWidthPixels:c=30,pulsePauseWidthPixels:p=50,baseOpacity:u=.8,offsets:o="synchronized",binaryPulse:r=!1,pulseGamma:g=1,duration:x,pulseFrequency:w=1,color:f="#3b82f6",strokeWidth:m=2.5,dpr:y}=e,P=w*x,v=Z(n,{domainMin:[t.xMin,t.yMin],domainMax:[t.xMax,t.yMax],density:a,integrationDirection:d,minlength:l,startPoints:h}).map(T=>T.map(E=>s(E))),k=v.map(T=>{const{cumulativeLengths:E,totalLength:z}=V(T);return{cumulativeLengths:E,totalLength:z}}),O=Math.max(...k.map(T=>T.totalLength),0),I=o==="random"?v.map(()=>Math.random()):v.map(()=>0),M={streamlines:v,offsets:I,lengthData:k,maxLength:O},U={dpr:y,thickness:m,pulseWidth:c,pulseGap:p,baseOpacity:u,binaryPulse:r,pulseGamma:g,color:f},_={name:"StreamlinePhaseGPU",reduce(T){return{streamlinePhase:T*P%1}}};return new q(e,M,_,null,{rendererOptions:U,offsetMode:o})}}export{q as S,Z as g};
