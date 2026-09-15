import{a as tt,f as at}from"../chunks/D7fcYNG-.js";import"../chunks/p9cuHAZ9.js";import{o as gt}from"../chunks/BTvxZjOV.js";import{p as yt,l as xt,o as vt,z as Mt,n as wt,v as At,g as b,N as et,$ as bt,s as St,w as Pt,m as zt}from"../chunks/B16mknns.js";import{h as It}from"../chunks/qJZSQC80.js";import{b as Bt}from"../chunks/C8HFQs6z.js";import{i as _t}from"../chunks/B7jCilrd.js";import{P as qt}from"../chunks/CREJ7azP.js";var Rt=at('<meta name="description" content="An interactive Barnes–Hut N-body simulation with two colliding galaxies and a live quadtree overlay."/>'),Ct=at('<!> <section class="simulation-shell svelte-kj07g2" aria-label="Interactive Barnes–Hut galaxy simulation"><canvas aria-label="Two galaxies interacting under approximate N-body gravity with a live quadtree" class="svelte-kj07g2"></canvas></section>',1);function kt(nt,st){yt(st,!1);const it=4e3,G=1.05,R=18e-5,A=.00135,ot=18,k=60,S=it/2,N=1,rt=.035,T=.16,E=21*Math.PI/180,U=4.1,V=.026,P=[.18,1.42];let x=zt(),m=[],M=null,z=null,L=!1,F=0,C=0,I=0;const Y=.6;class B{mass=0;cx=0;cy=0;bodies=[];children=null;x;y;size;depth;constructor(t,a,s,n=0){this.x=t,this.y=a,this.size=s,this.depth=n}contains(t,a){return t>=this.x&&t<this.x+this.size&&a>=this.y&&a<this.y+this.size}insert(t){const a=this.mass+t.mass;if(this.cx=(this.cx*this.mass+t.x*t.mass)/a,this.cy=(this.cy*this.mass+t.y*t.mass)/a,this.mass=a,!this.children&&(this.bodies.length===0||this.depth>=ot)){this.bodies.push(t);return}if(!this.children){const s=this.bodies;this.bodies=[],this.subdivide();for(const n of s)this.insertIntoChild(n)}this.insertIntoChild(t)}subdivide(){const t=this.size/2;this.children=[new B(this.x,this.y,t,this.depth+1),new B(this.x+t,this.y,t,this.depth+1),new B(this.x,this.y+t,t,this.depth+1),new B(this.x+t,this.y+t,t,this.depth+1)]}insertIntoChild(t){if(!this.children)return;const a=t.x>=this.x+this.size/2?1:0,s=t.y>=this.y+this.size/2?1:0;this.children[a+s*2].insert(t)}}function ct(e){let t=e>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}function D(e){const t=Math.max(e(),1e-9);return Math.sqrt(-2*Math.log(t))*Math.cos(2*Math.PI*e())}function X(e,t,a,s,n,i,c,u,h){e.push({x:a,y:s,vx:i,vy:c,ax:0,ay:0,mass:N,central:!0,softeningSq:T*T,galaxy:t});const o=rt/(S-1),l=n*.075;for(let g=0;g<S-1;g++){let f=0;do f=-.136*Math.log(Math.max(h()*h(),1e-9));while(f<l||f>n);const d=f/n,_=h()<.7,w=Math.log(d/.075)/Math.tan(E),y=_?u+g%2*Math.PI+w+D(h)*(.035+d*.055):h()*Math.PI*2,v=D(h)*(.0015+d*.003),p=a+Math.cos(y)*f+v,r=s+Math.sin(y)*f+v,q=N*f/Math.pow(f*f+T*T,1.5),Q=Math.sqrt(G*f*q);e.push({x:p,y:r,vx:i-Math.sin(y)*Q+D(h)*.004,vy:c+Math.cos(y)*Q+D(h)*.004,ax:0,ay:0,mass:o,central:!1,softeningSq:R,galaxy:t})}}function j(){const e=ct(811),t=[];X(t,0,-.64,0,.4,0,-.64,P[0],e),X(t,1,.64,0,.4,0,.64,P[1],e),m=t,M=O(m),C=0,I=0}function O(e){let t=1/0,a=1/0,s=-1/0,n=-1/0;for(const u of e)t=Math.min(t,u.x),a=Math.min(a,u.y),s=Math.max(s,u.x),n=Math.max(n,u.y);const i=Math.max(s-t,n-a,.1)*1.08,c=new B((t+s-i)/2,(a+n-i)/2,i);for(const u of e)c.insert(u);return c}function lt(e){const t=new Map(m.map((n,i)=>[n,i])),a=[],s=n=>{const i=a.length,c=!n.children&&n.bodies.length===1?n.bodies[0]:null;return a.push({cx:n.cx,cy:n.cy,mass:n.mass,bodyIndex:c?t.get(c)??-1:-2,x:n.x,y:n.y,size:n.size,softeningSq:c?.softeningSq??R,children:[-1,-1,-1,-1]}),n.children&&(a[i].children=n.children.map(s)),i};return s(e),a}class H{device;pipeline;constructor(t,a){this.device=t,this.pipeline=a}static async create(){const t=navigator.gpu;if(!t)return null;const a=await t.requestAdapter({powerPreference:"high-performance"});if(!a)return null;const s=await a.requestDevice(),n=s.createShaderModule({code:ht}),i=await s.createComputePipelineAsync({layout:"auto",compute:{module:n,entryPoint:"main"}});return new H(s,i)}async step(t,a){const s=globalThis.GPUBufferUsage,n=globalThis.GPUMapMode,i=new Float32Array(t.length*12);for(let p=0;p<t.length;p++){const r=t[p],q=p*12;i.set([r.x,r.y,r.vx,r.vy,r.ax,r.ay,r.mass,r.softeningSq,r.galaxy,r.central?1:0,0,0],q)}const c=new ArrayBuffer(a.length*48),u=new Float32Array(c),h=new Int32Array(c);for(let p=0;p<a.length;p++){const r=a[p],q=p*12;u.set([r.cx,r.cy,r.mass,r.bodyIndex,r.x,r.y,r.size,r.softeningSq],q),h.set(r.children,q+8)}const o=this.device.createBuffer({size:i.byteLength,usage:s.STORAGE|s.COPY_SRC,mappedAtCreation:!0});new Float32Array(o.getMappedRange()).set(i),o.unmap();const l=this.device.createBuffer({size:c.byteLength,usage:s.STORAGE,mappedAtCreation:!0});new Uint8Array(l.getMappedRange()).set(new Uint8Array(c)),l.unmap();const g=new Float32Array([t.length,a.length,Y,G,A,I,E,V,t[0].x,t[0].y,P[0],0,t[S].x,t[S].y,P[1],0,R,0,0,0]),f=this.device.createBuffer({size:g.byteLength,usage:s.UNIFORM|s.COPY_DST});this.device.queue.writeBuffer(f,0,g);const d=this.device.createBuffer({size:i.byteLength,usage:s.COPY_DST|s.MAP_READ}),_=this.device.createBindGroup({layout:this.pipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:o}},{binding:1,resource:{buffer:l}},{binding:2,resource:{buffer:f}}]}),w=this.device.createCommandEncoder(),y=w.beginComputePass();y.setPipeline(this.pipeline),y.setBindGroup(0,_),y.dispatchWorkgroups(Math.ceil(t.length/64)),y.end(),w.copyBufferToBuffer(o,0,d,0,i.byteLength),this.device.queue.submit([w.finish()]),await d.mapAsync(n.READ);const v=new Float32Array(d.getMappedRange());for(let p=0;p<t.length;p++){const r=p*12;t[p].x=v[r],t[p].y=v[r+1],t[p].vx=v[r+2],t[p].vy=v[r+3]}d.unmap(),o.destroy(),l.destroy(),f.destroy(),d.destroy()}}const ht=`
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
	`;function $(e,t,a,s,n=R){const i=t-e.x,c=a-e.y,u=i*i+c*c+n,h=1/Math.sqrt(u),o=G*s*h*h*h;e.ax+=i*o,e.ay+=c*o}function W(e,t){if(t.mass===0)return;if(!t.children){for(const i of t.bodies)i!==e&&$(e,i.x,i.y,i.mass,i.softeningSq);return}const a=t.cx-e.x,s=t.cy-e.y,n=Math.sqrt(a*a+s*s+R);if(!t.contains(e.x,e.y)&&t.size/n<Y){$(e,t.cx,t.cy,t.mass);return}for(const i of t.children)W(e,i)}function pt(e){const t=[m[0],m[S]];for(const a of m)a.ax=0,a.ay=0,W(a,e),a.central||ut(a,t[a.galaxy])}function ut(e,t){const a=e.x-t.x,s=e.y-t.y,n=Math.max(Math.hypot(a,s),.02),c=2*(Math.atan2(s,a)-P[e.galaxy]-I-Math.log(n/.03)/Math.tan(E)),u=Math.min(1,n/.08)*Math.exp(-Math.pow(n/.52,4)),h=-V*u*Math.sin(c);e.ax+=-s/n*h,e.ay+=a/n*h}function ft(){I+=U*A,M=O(m),pt(M);for(const e of m)e.vx+=e.ax*A,e.vy+=e.ay*A,e.x+=e.vx*A,e.y+=e.vy*A}function dt(e,t,a,s){e.fillStyle="#ffffff",e.fillRect(0,0,t,a);const n=Math.min(t/3.05,a/2.1),i=(o,l)=>[t/2+o*n,a/2+l*n],c=Math.min(1,C/.7),u=Math.min(1,(k-C)/.9);if(e.globalAlpha=Math.max(0,Math.min(c,u)),M){e.lineWidth=.8*s;const o=l=>{if(l.mass===0||l.depth>10)return;const[g,f]=i(l.x,l.y);if(e.strokeStyle=`rgba(23, 114, 208, ${Math.max(.08,.38-l.depth*.025)})`,e.strokeRect(g,f,l.size*n,l.size*n),l.children)for(const d of l.children)o(d)};o(M)}const h=[m[0],m[S]];for(const o of m){const[l,g]=i(o.x,o.y),f=(o.central?2.4:.72+Math.min(Math.hypot(o.vx,o.vy),2)*.06)*s;let d=.92;if(!o.central){const _=h[o.galaxy],w=o.x-_.x,y=o.y-_.y,v=Math.max(Math.hypot(w,y),.02),p=2*(Math.atan2(y,w)-P[o.galaxy]-I-Math.log(v/.03)/Math.tan(E));d=.25+Math.pow((Math.cos(p)+1)*.5,3)*.65}e.fillStyle=`rgba(45, 49, 54, ${d})`,e.beginPath(),e.arc(l,g,f,0,Math.PI*2),e.fill()}e.globalAlpha=1}gt(()=>{j(),H.create().then(n=>{z=n}).catch(()=>{z=null});const e=b(x).getContext("2d");if(!e)return;let t=performance.now(),a=0;const s=n=>{const i=b(x).getBoundingClientRect(),c=Math.min(window.devicePixelRatio||1,2),u=Math.max(1,Math.round(i.width*c)),h=Math.max(1,Math.round(i.height*c));(b(x).width!==u||b(x).height!==h)&&(et(x,b(x).width=u),et(x,b(x).height=h));const o=Math.min(n-t,32);t=n,C+=o/1e3,C>=k&&j(),a+=o;const l=Math.min(2,Math.floor(a/16.67));if(l>0){if(z&&!L&&M)I+=U*A,M=O(m),L=!0,z.step(m,lt(M)).catch(()=>{z=null}).finally(()=>{L=!1});else if(!z)for(let g=0;g<l;g++)ft();a-=l*16.67}dt(e,u,h,c),F=requestAnimationFrame(s)};return F=requestAnimationFrame(s),()=>cancelAnimationFrame(F)}),_t();var K=Ct();It("kj07g2",e=>{var t=Rt();Mt(()=>{bt.title="Barnes–Hut Galaxy Collision — Alec Helbling"}),tt(e,t)});var J=xt(K);qt(J,{title:"Barnes–Hut Galaxy Collision",author:"Alec Helbling",authorLink:"https://alechelbling.com",date:"September 15, 2026"});var Z=wt(J,2),mt=At(Z);Bt(mt,e=>St(x,e),()=>b(x)),Pt(Z),tt(nt,K),vt()}export{kt as component};
