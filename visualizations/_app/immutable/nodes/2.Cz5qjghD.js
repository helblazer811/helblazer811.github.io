import{a as et,f as st}from"../chunks/D7fcYNG-.js";import"../chunks/p9cuHAZ9.js";import{o as yt}from"../chunks/BTvxZjOV.js";import{p as xt,l as vt,o as Mt,z as At,n as wt,v as St,g as P,N as at,$ as bt,s as Pt,w as zt,m as It}from"../chunks/B16mknns.js";import{h as Bt}from"../chunks/qJZSQC80.js";import{b as _t}from"../chunks/C8HFQs6z.js";import{i as qt}from"../chunks/B7jCilrd.js";import{P as Ct}from"../chunks/CREJ7azP.js";var Rt=st('<meta name="description" content="An interactive Barnes–Hut N-body simulation with two colliding galaxies and a live quadtree overlay."/>'),Tt=st('<!> <section class="simulation-shell svelte-kj07g2" aria-label="Interactive Barnes–Hut galaxy simulation"><canvas aria-label="Two galaxies interacting under approximate N-body gravity with a live quadtree" class="svelte-kj07g2"></canvas></section>',1);function Nt(nt,it){xt(it,!1);const ot=4e3,G=1.05,q=18e-5,w=.00135,rt=18,k=60,z=ot/2,N=1,ct=.035,T=.16,L=21*Math.PI/180,U=4.1,Y=.026,C=[.18,1.42];let x=It(),d=[],A=null,I=null,D=!1,F=0,S=0,R=0;const V=.6;class B{mass=0;cx=0;cy=0;bodies=[];children=null;x;y;size;depth;constructor(t,a,n,s=0){this.x=t,this.y=a,this.size=n,this.depth=s}contains(t,a){return t>=this.x&&t<this.x+this.size&&a>=this.y&&a<this.y+this.size}insert(t){const a=this.mass+t.mass;if(this.cx=(this.cx*this.mass+t.x*t.mass)/a,this.cy=(this.cy*this.mass+t.y*t.mass)/a,this.mass=a,!this.children&&(this.bodies.length===0||this.depth>=rt)){this.bodies.push(t);return}if(!this.children){const n=this.bodies;this.bodies=[],this.subdivide();for(const s of n)this.insertIntoChild(s)}this.insertIntoChild(t)}subdivide(){const t=this.size/2;this.children=[new B(this.x,this.y,t,this.depth+1),new B(this.x+t,this.y,t,this.depth+1),new B(this.x,this.y+t,t,this.depth+1),new B(this.x+t,this.y+t,t,this.depth+1)]}insertIntoChild(t){if(!this.children)return;const a=t.x>=this.x+this.size/2?1:0,n=t.y>=this.y+this.size/2?1:0;this.children[a+n*2].insert(t)}}function lt(e){let t=e>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}function E(e){const t=Math.max(e(),1e-9);return Math.sqrt(-2*Math.log(t))*Math.cos(2*Math.PI*e())}function X(e,t,a,n,s,i,o,u,l){e.push({x:a,y:n,vx:i,vy:o,ax:0,ay:0,mass:N,central:!0,softeningSq:T*T,galaxy:t});const p=ct/(z-1),m=s*.075;for(let g=0;g<z-1;g++){let c=0;do c=-.136*Math.log(Math.max(l()*l(),1e-9));while(c<m||c>s);const h=c/s,b=l()<.7,v=Math.log(h/.075)/Math.tan(L),y=b?u+g%2*Math.PI+v+E(l)*(.035+h*.055):l()*Math.PI*2,M=E(l)*(.0015+h*.003),f=a+Math.cos(y)*c+M,r=n+Math.sin(y)*c+M,_=N*c/Math.pow(c*c+T*T,1.5),tt=Math.sqrt(G*c*_);e.push({x:f,y:r,vx:i-Math.sin(y)*tt+E(l)*.004,vy:o+Math.cos(y)*tt+E(l)*.004,ax:0,ay:0,mass:p,central:!1,softeningSq:q,galaxy:t})}}function j(){const e=lt(811),t=[];X(t,0,-.64,0,.4,0,-.64,C[0],e),X(t,1,.64,0,.4,0,.64,C[1],e),d=t,A=O(d),S=0,R=0}function O(e){let t=1/0,a=1/0,n=-1/0,s=-1/0;for(const u of e)t=Math.min(t,u.x),a=Math.min(a,u.y),n=Math.max(n,u.x),s=Math.max(s,u.y);const i=Math.max(n-t,s-a,.1)*1.08,o=new B((t+n-i)/2,(a+s-i)/2,i);for(const u of e)o.insert(u);return o}function ht(e){const t=new Map(d.map((s,i)=>[s,i])),a=[],n=s=>{const i=a.length,o=!s.children&&s.bodies.length===1?s.bodies[0]:null;return a.push({cx:s.cx,cy:s.cy,mass:s.mass,bodyIndex:o?t.get(o)??-1:-2,x:s.x,y:s.y,size:s.size,softeningSq:o?.softeningSq??q,children:[-1,-1,-1,-1]}),s.children&&(a[i].children=s.children.map(n)),i};return n(e),a}class H{device;pipeline;constructor(t,a){this.device=t,this.pipeline=a}static async create(){const t=navigator.gpu;if(!t)return null;const a=await t.requestAdapter({powerPreference:"high-performance"});if(!a)return null;const n=await a.requestDevice(),s=n.createShaderModule({code:ut}),i=await n.createComputePipelineAsync({layout:"auto",compute:{module:s,entryPoint:"main"}});return new H(n,i)}async step(t,a){const n=globalThis.GPUBufferUsage,s=globalThis.GPUMapMode,i=new Float32Array(t.length*12);for(let f=0;f<t.length;f++){const r=t[f],_=f*12;i.set([r.x,r.y,r.vx,r.vy,r.ax,r.ay,r.mass,r.softeningSq,r.galaxy,r.central?1:0,0,0],_)}const o=new ArrayBuffer(a.length*48),u=new Float32Array(o),l=new Int32Array(o);for(let f=0;f<a.length;f++){const r=a[f],_=f*12;u.set([r.cx,r.cy,r.mass,r.bodyIndex,r.x,r.y,r.size,r.softeningSq],_),l.set(r.children,_+8)}const p=this.device.createBuffer({size:i.byteLength,usage:n.STORAGE|n.COPY_SRC,mappedAtCreation:!0});new Float32Array(p.getMappedRange()).set(i),p.unmap();const m=this.device.createBuffer({size:o.byteLength,usage:n.STORAGE,mappedAtCreation:!0});new Uint8Array(m.getMappedRange()).set(new Uint8Array(o)),m.unmap();const g=new Float32Array([t.length,a.length,V,G,w,R,L,Y,t[0].x,t[0].y,C[0],0,t[z].x,t[z].y,C[1],0,q,0,0,0]),c=this.device.createBuffer({size:g.byteLength,usage:n.UNIFORM|n.COPY_DST});this.device.queue.writeBuffer(c,0,g);const h=this.device.createBuffer({size:i.byteLength,usage:n.COPY_DST|n.MAP_READ}),b=this.device.createBindGroup({layout:this.pipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:p}},{binding:1,resource:{buffer:m}},{binding:2,resource:{buffer:c}}]}),v=this.device.createCommandEncoder(),y=v.beginComputePass();y.setPipeline(this.pipeline),y.setBindGroup(0,b),y.dispatchWorkgroups(Math.ceil(t.length/64)),y.end(),v.copyBufferToBuffer(p,0,h,0,i.byteLength),this.device.queue.submit([v.finish()]),await h.mapAsync(s.READ);const M=new Float32Array(h.getMappedRange());for(let f=0;f<t.length;f++){const r=f*12;t[f].x=M[r],t[f].y=M[r+1],t[f].vx=M[r+2],t[f].vy=M[r+3]}h.unmap(),p.destroy(),m.destroy(),c.destroy(),h.destroy()}}const ut=`
		struct Particle { posVel: vec4<f32>, accelMass: vec4<f32>, meta: vec4<f32> };
		struct Node { com: vec4<f32>, bounds: vec4<f32>, children: vec4<i32> };
		struct Params { counts: vec4<f32>, timing: vec4<f32>, core0: vec4<f32>, core1: vec4<f32>, soft: vec4<f32> };
		@group(0) @binding(0) var<storage, read_write> particles: array<Particle>;
		@group(0) @binding(1) var<storage, read> nodes: array<Node>;
		@group(0) @binding(2) var<uniform> params: Params;

		@compute @workgroup_size(64)
		fn main(@builtin(global_invocation_id) id: vec3<u32>) {
			let index = id.x;
			if (index >= u32(params.counts.x)) { return; }
			var particle = particles[index];
			var acceleration = vec2<f32>(0.0);
			var stack: array<i32, 96>;
			var top = 1;
			stack[0] = 0;
			loop {
				if (top == 0) { break; }
				top -= 1;
				let nodeIndex = stack[top];
				let node = nodes[nodeIndex];
				if (node.com.z <= 0.0) { continue; }
				let delta = node.com.xy - particle.posVel.xy;
				let distanceSquared = dot(delta, delta);
				let isLeaf = node.children.x < 0;
				if (isLeaf && i32(round(node.com.w)) == i32(index)) { continue; }
				let inside = particle.posVel.x >= node.bounds.x && particle.posVel.x < node.bounds.x + node.bounds.z && particle.posVel.y >= node.bounds.y && particle.posVel.y < node.bounds.y + node.bounds.z;
				let distance = sqrt(distanceSquared + params.soft.x);
				if (isLeaf || (!inside && node.bounds.z / distance < params.counts.z)) {
					let softening = select(params.soft.x, node.bounds.w, isLeaf);
					let inverseDistance = inverseSqrt(distanceSquared + softening);
					acceleration += delta * (params.counts.w * node.com.z * inverseDistance * inverseDistance * inverseDistance);
				} else {
					for (var child = 0; child < 4; child += 1) {
						let childIndex = node.children[child];
						if (childIndex >= 0 && top < 96) { stack[top] = childIndex; top += 1; }
					}
				}
			}
			if (particle.meta.y < 0.5) {
				let core = select(params.core0, params.core1, particle.meta.x > 0.5);
				let relative = particle.posVel.xy - core.xy;
				let radius = max(length(relative), 0.02);
				let angle = atan2(relative.y, relative.x);
				let phase = 2.0 * (angle - core.z - params.timing.y - log(radius / 0.03) / tan(params.timing.z));
				let envelope = min(1.0, radius / 0.08) * exp(-pow(radius / 0.52, 4.0));
				let tangential = -params.timing.w * envelope * sin(phase);
				acceleration += vec2<f32>(-relative.y, relative.x) / radius * tangential;
			}
			particle.posVel.zw += acceleration * params.timing.x;
			particle.posVel.xy += particle.posVel.zw * params.timing.x;
			particle.accelMass.xy = acceleration;
			particles[index] = particle;
		}
	`;function $(e,t,a,n,s=q){const i=t-e.x,o=a-e.y,u=i*i+o*o+s,l=1/Math.sqrt(u),p=G*n*l*l*l;e.ax+=i*p,e.ay+=o*p}function W(e,t){if(t.mass===0)return;if(!t.children){for(const i of t.bodies)i!==e&&$(e,i.x,i.y,i.mass,i.softeningSq);return}const a=t.cx-e.x,n=t.cy-e.y,s=Math.sqrt(a*a+n*n+q);if(!t.contains(e.x,e.y)&&t.size/s<V){$(e,t.cx,t.cy,t.mass);return}for(const i of t.children)W(e,i)}function ft(e){const t=[d[0],d[z]];for(const a of d)a.ax=0,a.ay=0,W(a,e),a.central||pt(a,t[a.galaxy])}function pt(e,t){const a=e.x-t.x,n=e.y-t.y,s=Math.max(Math.hypot(a,n),.02),o=2*(Math.atan2(n,a)-C[e.galaxy]-R-Math.log(s/.03)/Math.tan(L)),u=Math.min(1,s/.08)*Math.exp(-Math.pow(s/.52,4)),l=-Y*u*Math.sin(o);e.ax+=-n/s*l,e.ay+=a/s*l}function dt(){R+=U*w,A=O(d),ft(A);for(const e of d)e.vx+=e.ax*w,e.vy+=e.ay*w,e.x+=e.vx*w,e.y+=e.vy*w}function K(){const e=S%8,t=s=>{const i=Math.max(0,Math.min(1,s));return i*i*(3-2*i)};let a=0;e>=.8&&e<1.6?a=t((e-.8)/.8):e>=1.6&&e<3.4?a=1:e>=3.4&&e<4.4&&(a=1-t((e-3.4)/1));const n=Math.floor(S/8)%2;return{detail:a,galaxy:n,timeScale:1-a*.72}}function mt(e,t,a,n){e.fillStyle="#ffffff",e.fillRect(0,0,t,a);const s=K(),i=d[s.galaxy*z],o=Math.min(t/3.05,a/2.1)*(1+s.detail*1.45),u=(i?.x??0)*s.detail,l=(i?.y??0)*s.detail,p=(c,h)=>[t/2+(c-u)*o,a/2+(h-l)*o],m=Math.min(1,S/.7),g=Math.min(1,(k-S)/.9);if(e.globalAlpha=Math.max(0,Math.min(m,g)),A){e.lineWidth=.65*n;const c=h=>{if(h.mass===0||h.depth>10)return;const[b,v]=p(h.x,h.y),y=Math.max(.025,.18-h.depth*.014)*(1+s.detail*.55);if(e.strokeStyle=`rgba(23, 114, 208, ${y})`,e.strokeRect(b,v,h.size*o,h.size*o),h.children)for(const M of h.children)c(M)};c(A)}for(const c of d){const[h,b]=p(c.x,c.y),v=(c.central?2.4:.72+Math.min(Math.hypot(c.vx,c.vy),2)*.06)*n;e.fillStyle="rgba(45, 49, 54, 0.9)",e.beginPath(),e.arc(h,b,v,0,Math.PI*2),e.fill()}e.globalAlpha=1}yt(()=>{j(),H.create().then(s=>{I=s}).catch(()=>{I=null});const e=P(x).getContext("2d");if(!e)return;let t=performance.now(),a=0;const n=s=>{const i=P(x).getBoundingClientRect(),o=Math.min(window.devicePixelRatio||1,2),u=Math.max(1,Math.round(i.width*o)),l=Math.max(1,Math.round(i.height*o));(P(x).width!==u||P(x).height!==l)&&(at(x,P(x).width=u),at(x,P(x).height=l));const p=Math.min(s-t,32);t=s,S+=p/1e3,S>=k&&j(),a+=p*K().timeScale;const m=Math.min(2,Math.floor(a/16.67));if(m>0){if(I&&!D&&A)R+=U*w,A=O(d),D=!0,I.step(d,ht(A)).catch(()=>{I=null}).finally(()=>{D=!1});else if(!I)for(let g=0;g<m;g++)dt();a-=m*16.67}mt(e,u,l,o),F=requestAnimationFrame(n)};return F=requestAnimationFrame(n),()=>cancelAnimationFrame(F)}),qt();var J=Tt();Bt("kj07g2",e=>{var t=Rt();At(()=>{bt.title="Barnes–Hut Galaxy Collision — Alec Helbling"}),et(e,t)});var Z=vt(J);Ct(Z,{title:"Barnes–Hut Galaxy Collision",author:"Alec Helbling",authorLink:"https://alechelbling.com",date:"September 15, 2026"});var Q=wt(Z,2),gt=St(Q);_t(gt,e=>Pt(x,e),()=>P(x)),zt(Q),et(nt,J),Mt()}export{Nt as component};
