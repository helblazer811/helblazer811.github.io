import{a as tt,f as at}from"../chunks/D7fcYNG-.js";import"../chunks/p9cuHAZ9.js";import{o as gt}from"../chunks/BTvxZjOV.js";import{p as yt,l as xt,o as vt,z as Mt,n as At,v as wt,g as w,N as et,$ as bt,s as St,w as Pt,m as zt}from"../chunks/B16mknns.js";import{h as It}from"../chunks/qJZSQC80.js";import{b as Bt}from"../chunks/C8HFQs6z.js";import{i as _t}from"../chunks/B7jCilrd.js";import{P as qt}from"../chunks/CREJ7azP.js";var Rt=at('<meta name="description" content="An interactive Barnes–Hut N-body simulation with two colliding galaxies and a live quadtree overlay."/>'),Ct=at('<!> <section class="simulation-shell svelte-kj07g2" aria-label="Interactive Barnes–Hut galaxy simulation"><canvas aria-label="Two galaxies interacting under approximate N-body gravity with a live quadtree" class="svelte-kj07g2"></canvas></section>',1);function kt(nt,st){yt(st,!1);const it=4e3,E=1.05,z=18e-5,M=.00135,rt=18,k=60,I=it/2,N=1,ot=.035,C=.16,G=21*Math.PI/180,U=4.1,V=.026,B=[.18,1.42];let g=zt(),m=[],v=null,b=null,L=!1,D=0,_=0,q=0;const Y=.6;class S{mass=0;cx=0;cy=0;bodies=[];children=null;x;y;size;depth;constructor(t,a,s,n=0){this.x=t,this.y=a,this.size=s,this.depth=n}contains(t,a){return t>=this.x&&t<this.x+this.size&&a>=this.y&&a<this.y+this.size}insert(t){const a=this.mass+t.mass;if(this.cx=(this.cx*this.mass+t.x*t.mass)/a,this.cy=(this.cy*this.mass+t.y*t.mass)/a,this.mass=a,!this.children&&(this.bodies.length===0||this.depth>=rt)){this.bodies.push(t);return}if(!this.children){const s=this.bodies;this.bodies=[],this.subdivide();for(const n of s)this.insertIntoChild(n)}this.insertIntoChild(t)}subdivide(){const t=this.size/2;this.children=[new S(this.x,this.y,t,this.depth+1),new S(this.x+t,this.y,t,this.depth+1),new S(this.x,this.y+t,t,this.depth+1),new S(this.x+t,this.y+t,t,this.depth+1)]}insertIntoChild(t){if(!this.children)return;const a=t.x>=this.x+this.size/2?1:0,s=t.y>=this.y+this.size/2?1:0;this.children[a+s*2].insert(t)}}function ct(e){let t=e>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}function T(e){const t=Math.max(e(),1e-9);return Math.sqrt(-2*Math.log(t))*Math.cos(2*Math.PI*e())}function X(e,t,a,s,n,i,l,h,r){e.push({x:a,y:s,vx:i,vy:l,ax:0,ay:0,mass:N,central:!0,softeningSq:C*C,galaxy:t});const o=ot/(I-1),f=n*.075;for(let d=0;d<I-1;d++){let p=0;do p=-.136*Math.log(Math.max(r()*r(),1e-9));while(p<f||p>n);const y=p/n,H=r()<.7,R=Math.log(y/.075)/Math.tan(G),x=H?h+d%2*Math.PI+R+T(r)*(.035+y*.055):r()*Math.PI*2,A=T(r)*(.0015+y*.003),u=a+Math.cos(x)*p+A,c=s+Math.sin(x)*p+A,P=N*p/Math.pow(p*p+C*C,1.5),Q=Math.sqrt(E*p*P);e.push({x:u,y:c,vx:i-Math.sin(x)*Q+T(r)*.004,vy:l+Math.cos(x)*Q+T(r)*.004,ax:0,ay:0,mass:o,central:!1,softeningSq:z,galaxy:t})}}function j(){const e=ct(811),t=[];X(t,0,-.64,0,.4,0,-.64,B[0],e),X(t,1,.64,0,.4,0,.64,B[1],e),m=t,v=F(m),_=0,q=0}function F(e){let t=1/0,a=1/0,s=-1/0,n=-1/0;for(const h of e)t=Math.min(t,h.x),a=Math.min(a,h.y),s=Math.max(s,h.x),n=Math.max(n,h.y);const i=Math.max(s-t,n-a,.1)*1.08,l=new S((t+s-i)/2,(a+n-i)/2,i);for(const h of e)l.insert(h);return l}function lt(e){const t=new Map(m.map((n,i)=>[n,i])),a=[],s=n=>{const i=a.length,l=!n.children&&n.bodies.length===1?n.bodies[0]:null;return a.push({cx:n.cx,cy:n.cy,mass:n.mass,bodyIndex:l?t.get(l)??-1:-2,x:n.x,y:n.y,size:n.size,softeningSq:l?.softeningSq??z,children:[-1,-1,-1,-1]}),n.children&&(a[i].children=n.children.map(s)),i};return s(e),a}class O{device;pipeline;constructor(t,a){this.device=t,this.pipeline=a}static async create(){const t=navigator.gpu;if(!t)return null;const a=await t.requestAdapter({powerPreference:"high-performance"});if(!a)return null;const s=await a.requestDevice(),n=s.createShaderModule({code:ht}),i=await s.createComputePipelineAsync({layout:"auto",compute:{module:n,entryPoint:"main"}});return new O(s,i)}async step(t,a){const s=globalThis.GPUBufferUsage,n=globalThis.GPUMapMode,i=new Float32Array(t.length*12);for(let u=0;u<t.length;u++){const c=t[u],P=u*12;i.set([c.x,c.y,c.vx,c.vy,c.ax,c.ay,c.mass,c.softeningSq,c.galaxy,c.central?1:0,0,0],P)}const l=new ArrayBuffer(a.length*48),h=new Float32Array(l),r=new Int32Array(l);for(let u=0;u<a.length;u++){const c=a[u],P=u*12;h.set([c.cx,c.cy,c.mass,c.bodyIndex,c.x,c.y,c.size,c.softeningSq],P),r.set(c.children,P+8)}const o=this.device.createBuffer({size:i.byteLength,usage:s.STORAGE|s.COPY_SRC,mappedAtCreation:!0});new Float32Array(o.getMappedRange()).set(i),o.unmap();const f=this.device.createBuffer({size:l.byteLength,usage:s.STORAGE,mappedAtCreation:!0});new Uint8Array(f.getMappedRange()).set(new Uint8Array(l)),f.unmap();const d=new Float32Array([t.length,a.length,Y,E,M,q,G,V,t[0].x,t[0].y,B[0],0,t[I].x,t[I].y,B[1],0,z,0,0,0]),p=this.device.createBuffer({size:d.byteLength,usage:s.UNIFORM|s.COPY_DST});this.device.queue.writeBuffer(p,0,d);const y=this.device.createBuffer({size:i.byteLength,usage:s.COPY_DST|s.MAP_READ}),H=this.device.createBindGroup({layout:this.pipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:o}},{binding:1,resource:{buffer:f}},{binding:2,resource:{buffer:p}}]}),R=this.device.createCommandEncoder(),x=R.beginComputePass();x.setPipeline(this.pipeline),x.setBindGroup(0,H),x.dispatchWorkgroups(Math.ceil(t.length/64)),x.end(),R.copyBufferToBuffer(o,0,y,0,i.byteLength),this.device.queue.submit([R.finish()]),await y.mapAsync(n.READ);const A=new Float32Array(y.getMappedRange());for(let u=0;u<t.length;u++){const c=u*12;t[u].x=A[c],t[u].y=A[c+1],t[u].vx=A[c+2],t[u].vy=A[c+3]}y.unmap(),o.destroy(),f.destroy(),p.destroy(),y.destroy()}}const ht=`
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
	`;function $(e,t,a,s,n=z){const i=t-e.x,l=a-e.y,h=i*i+l*l+n,r=1/Math.sqrt(h),o=E*s*r*r*r;e.ax+=i*o,e.ay+=l*o}function W(e,t){if(t.mass===0)return;if(!t.children){for(const i of t.bodies)i!==e&&$(e,i.x,i.y,i.mass,i.softeningSq);return}const a=t.cx-e.x,s=t.cy-e.y,n=Math.sqrt(a*a+s*s+z);if(!t.contains(e.x,e.y)&&t.size/n<Y){$(e,t.cx,t.cy,t.mass);return}for(const i of t.children)W(e,i)}function ut(e){const t=[m[0],m[I]];for(const a of m)a.ax=0,a.ay=0,W(a,e),a.central||pt(a,t[a.galaxy])}function pt(e,t){const a=e.x-t.x,s=e.y-t.y,n=Math.max(Math.hypot(a,s),.02),l=2*(Math.atan2(s,a)-B[e.galaxy]-q-Math.log(n/.03)/Math.tan(G)),h=Math.min(1,n/.08)*Math.exp(-Math.pow(n/.52,4)),r=-V*h*Math.sin(l);e.ax+=-s/n*r,e.ay+=a/n*r}function ft(){q+=U*M,v=F(m),ut(v);for(const e of m)e.vx+=e.ax*M,e.vy+=e.ay*M,e.x+=e.vx*M,e.y+=e.vy*M}function dt(e,t,a,s){e.fillStyle="#ffffff",e.fillRect(0,0,t,a);const n=Math.min(t/3.05,a/2.1),i=(r,o)=>[t/2+r*n,a/2+o*n],l=Math.min(1,_/.7),h=Math.min(1,(k-_)/.9);if(e.globalAlpha=Math.max(0,Math.min(l,h)),v){e.lineWidth=.65*s;const r=o=>{if(o.mass===0||o.depth>10)return;const[f,d]=i(o.x,o.y);if(e.strokeStyle=`rgba(23, 114, 208, ${Math.max(.025,.18-o.depth*.014)})`,e.strokeRect(f,d,o.size*n,o.size*n),o.children)for(const p of o.children)r(p)};r(v)}for(const r of m){const[o,f]=i(r.x,r.y),d=(r.central?2.4:.72+Math.min(Math.hypot(r.vx,r.vy),2)*.06)*s;e.fillStyle="rgba(45, 49, 54, 0.82)",e.beginPath(),e.arc(o,f,d,0,Math.PI*2),e.fill()}e.globalAlpha=1}gt(()=>{j(),O.create().then(n=>{b=n}).catch(()=>{b=null});const e=w(g).getContext("2d");if(!e)return;let t=performance.now(),a=0;const s=n=>{const i=w(g).getBoundingClientRect(),l=Math.min(window.devicePixelRatio||1,2),h=Math.max(1,Math.round(i.width*l)),r=Math.max(1,Math.round(i.height*l));(w(g).width!==h||w(g).height!==r)&&(et(g,w(g).width=h),et(g,w(g).height=r));const o=Math.min(n-t,32);t=n,_+=o/1e3,_>=k&&j(),a+=o;const f=Math.min(2,Math.floor(a/16.67));if(f>0){if(b&&!L&&v)q+=U*M,v=F(m),L=!0,b.step(m,lt(v)).catch(()=>{b=null}).finally(()=>{L=!1});else if(!b)for(let d=0;d<f;d++)ft();a-=f*16.67}dt(e,h,r,l),D=requestAnimationFrame(s)};return D=requestAnimationFrame(s),()=>cancelAnimationFrame(D)}),_t();var K=Ct();It("kj07g2",e=>{var t=Rt();Mt(()=>{bt.title="Barnes–Hut Galaxy Collision — Alec Helbling"}),tt(e,t)});var J=xt(K);qt(J,{title:"Barnes–Hut Galaxy Collision",author:"Alec Helbling",authorLink:"https://alechelbling.com",date:"September 15, 2026"});var Z=At(J,2),mt=wt(Z);Bt(mt,e=>St(g,e),()=>w(g)),Pt(Z),tt(nt,K),vt()}export{kt as component};
