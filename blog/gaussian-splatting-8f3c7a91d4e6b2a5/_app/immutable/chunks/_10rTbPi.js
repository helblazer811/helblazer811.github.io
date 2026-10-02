import{a as T,f as W}from"./-jLF7IXh.js";import{i as te}from"./CUX4Wbpl.js";import{p as oe,o as se,t as ie,a as ne,i as u,n as D,v as y,s as q,q as F,w as b}from"./diuDNr2_.js";import{i as re}from"./BBnAA91q.js";import{s as ce,a as le}from"./_sl_wvb7.js";import{b as A}from"./C-CwK_H9.js";import{V as h,W as de,S as pe,P as N,H as ue,D as he,a as me,M as m,L as ve,b as v,B,F as V,c as w,G as R,d as U,e as C,f as j,E as _,g as k,h as ge,C as fe,i as H,j as we,k as J,l as ye,m as be,v as G,n as Ce}from"./DazOdwlR.js";const $=[5.25,0,2.4],K=[-.45,0,0],Q=[.13,.43,.72],xe=new h(...$),Se=new h(0,0,0),z=38,L=16/11;function X(){return new ye().setRGB(...Q,be)}function Pe(){const o=new R;o.position.set(...K),o.rotation.set(-.18,.55,.34),o.scale.set(1.48,.61,.8);const e=new H(1,56,36),a=new k({uniforms:{cameraLocal:{value:new h},gaussianColor:{value:X()}},vertexShader:`
			varying vec3 objectPosition;
			void main() {
				objectPosition = position;
				gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
			}
		`,fragmentShader:`
			precision highp float;
			uniform vec3 cameraLocal;
			uniform vec3 gaussianColor;
			varying vec3 objectPosition;

			void main() {
				vec3 rayDirection = normalize(objectPosition - cameraLocal);
				float b = dot(cameraLocal, rayDirection);
				float c = dot(cameraLocal, cameraLocal) - 1.0;
				float discriminant = b * b - c;
				if (discriminant <= 0.0) discard;

				float halfChord = sqrt(discriminant);
				float nearDistance = max(0.0, -b - halfChord);
				float farDistance = -b + halfChord;
				float stepLength = (farDistance - nearDistance) / 56.0;
				float transmittance = 1.0;
				vec3 accumulatedColor = vec3(0.0);
				vec3 lightDirection = normalize(vec3(-0.45, 0.72, 0.52));

				for (int sampleIndex = 0; sampleIndex < 56; sampleIndex++) {
					float distanceAlongRay = nearDistance + (float(sampleIndex) + 0.5) * stepLength;
					vec3 samplePosition = cameraLocal + rayDirection * distanceAlongRay;
					float density = exp(-4.5 * dot(samplePosition, samplePosition));
					float sampleAlpha = 1.0 - exp(-2.55 * density * stepLength);
					vec3 densityNormal = normalize(samplePosition + vec3(0.0001));
					float lighting = 0.74 + 0.38 * max(dot(densityNormal, lightDirection), 0.0);
					accumulatedColor += transmittance * sampleAlpha * gaussianColor * lighting;
					transmittance *= 1.0 - sampleAlpha;
				}

				float alpha = (1.0 - transmittance) * 0.9;
				if (alpha < 0.003) discard;
				vec3 shadedColor = accumulatedColor / max(1.0 - transmittance, 0.001);
				gl_FragColor = vec4(shadedColor, alpha);
			}
		`,transparent:!0,depthWrite:!1,side:we}),t=new m(e,a);return t.renderOrder=0,o.add(t),{group:o,volumeMaterial:a}}function Ae(o){const e=o.far,a=2*Math.tan(J.degToRad(z)/2)*e,t=a*L,s=[new h(-t/2,-a/2,-e),new h(t/2,-a/2,-e),new h(t/2,a/2,-e),new h(-t/2,a/2,-e)],i=[];for(const r of s)i.push(0,0,0,r.x,r.y,r.z);for(let r=0;r<s.length;r++){const p=s[r],d=s[(r+1)%s.length];i.push(p.x,p.y,p.z,d.x,d.y,d.z)}const l=new B;l.setAttribute("position",new V(i,3));const c=new v(l,new w({color:9083298,transparent:!0,opacity:.42}));return c.position.copy(o.position),c.quaternion.copy(o.quaternion),c}function Ge(o){const e=new R;e.position.copy(o.position),e.quaternion.copy(o.quaternion),e.scale.setScalar(1.28);const a=new C({color:16317179}),t=new m(new ge(.72,.5,.48),a);t.position.z=.3,e.add(t);const s=new v(new _(t.geometry),new w({color:7175044,transparent:!0,opacity:.9}));s.position.copy(t.position),e.add(s);const i=new m(new fe(.17,.27,.3,24,1,!1),new C({color:16777215}));i.rotation.x=Math.PI/2,i.position.z=-.08,e.add(i);const l=new v(new _(i.geometry),new w({color:7175044,transparent:!0,opacity:.9}));l.rotation.copy(i.rotation),l.position.copy(i.position),e.add(l);const c=new m(new H(.035,12,8),new C({color:3508168}));return c.position.set(.2,.13,.55),e.add(c),e}function _e(o){const a=2*Math.tan(J.degToRad(z)/2)*1.6,t=a*L,s=new R;s.position.copy(o.position),s.quaternion.copy(o.quaternion);const i=new m(new U(t,a),new C({color:3508168,transparent:!0,opacity:.055,side:j,depthWrite:!1}));i.position.z=-1.6,s.add(i);const l=new v(new _(i.geometry),new w({color:5466227,transparent:!0,opacity:.78}));l.position.copy(i.position),s.add(l);const c=new m(new U(t*.44,a*.48),new k({uniforms:{gaussianColor:{value:X()}},vertexShader:`
				varying vec2 splatUv;
				void main() {
					splatUv = uv - 0.5;
					gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
				}
			`,fragmentShader:`
				precision highp float;
				uniform vec3 gaussianColor;
				varying vec2 splatUv;
				void main() {
					float angle = -0.24;
					mat2 rotation = mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
					vec2 point = rotation * splatUv;
					float exponent = 8.5 * point.x * point.x + 22.0 * point.y * point.y;
					float alpha = exp(-exponent) * 0.74;
					if (alpha < 0.01) discard;
					gl_FragColor = vec4(gaussianColor, alpha);
				}
			`,transparent:!0,depthWrite:!1,side:j}));c.position.z=-1.6+.006,c.renderOrder=2,s.add(c);const r=[];for(const d of[-.25,0,.25])r.push(d*t,-a/2,-1.6-.002,d*t,a/2,-1.6-.002);for(const d of[-1/6,1/6])r.push(-t/2,d*a,-1.6-.002,t/2,d*a,-1.6-.002);const p=new B;return p.setAttribute("position",new V(r,3)),s.add(new v(p,new w({color:5466227,transparent:!0,opacity:.22}))),s}class Re{constructor(e){this.canvas=e,this.renderer=new de({canvas:e,antialias:!0,alpha:!0}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,2)),this.renderer.setClearColor(16777215,0),this.renderer.outputColorSpace=pe;const a=new N(z,L,.32,5.72);a.position.copy(xe),a.up.set(0,1,0),a.lookAt(Se),a.updateProjectionMatrix(),a.updateMatrixWorld(!0),this.scene.add(this.gaussian.group,a,Ae(a),_e(a),Ge(a)),this.scene.add(new ue(16777215,9676981,2.1));const t=new he(16777215,3.2);t.position.set(-2.5,5.5,6),this.scene.add(t),this.viewCamera.position.set(3.15,2.8,11.5),this.viewCamera.lookAt(2.9,-.15,0),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(e),this.resize()}renderer;scene=new me;viewCamera=new N(36,1,.1,40);gaussian=Pe();resizeObserver;render=()=>{this.scene.updateMatrixWorld(!0);const e=this.gaussian.group.worldToLocal(this.viewCamera.position.clone());this.gaussian.volumeMaterial.uniforms.cameraLocal.value.copy(e),this.renderer.render(this.scene,this.viewCamera)};resize(){const e=Math.max(1,this.canvas.clientWidth),a=Math.max(1,this.canvas.clientHeight);this.renderer.setSize(e,a,!1),this.viewCamera.aspect=e/a,this.viewCamera.updateProjectionMatrix(),this.render()}dispose(){this.resizeObserver.disconnect(),this.scene.traverse(e=>{(e instanceof m||e instanceof ve||e instanceof v)&&(e.geometry.dispose(),(Array.isArray(e.material)?e.material:[e.material]).forEach(t=>t.dispose()))}),this.renderer.dispose()}}var ze=W('<div class="fallback-splat svelte-gdqu7s" aria-hidden="true"></div>'),Le=W(`<div class="gaussian-projection svelte-gdqu7s" role="img" aria-label="A three-dimensional Gaussian in a scene is observed by a camera to its right. The camera's rendered two-dimensional Gaussian appears above it."><canvas class="scene-canvas svelte-gdqu7s" aria-label="Three.js scene with a volumetric 3D Gaussian and a camera on the right looking left through its image plane"></canvas> <div class="region-label scene-label svelte-gdqu7s">3D GAUSSIAN SCENE</div> <div class="region-label view-label svelte-gdqu7s">PROJECTED VIEW</div> <div class="view-callout svelte-gdqu7s" aria-hidden="true"></div> <div><canvas aria-label="The two-dimensional Gaussian produced by the WebGPU renderer" class="svelte-gdqu7s"></canvas> <!></div></div>`);function Fe(o,e){oe(e,!1);const a=320,t=220,s={id:"projection-figure",label:"camera observing one Gaussian",position:$,target:[0,0,0],up:[0,1,0],fovDegrees:38},i={count:1,positions:new Float32Array(K),scales:new Float32Array([1.15,.43,.64]),rotations:new Float32Array([.12,-.2,.28,.93]),opacities:new Float32Array([.92]),colors:new Float32Array(Q)};let l=b(),c=b(),r=b(),p=null,d=null,x=!1,M=!1,S=b(!1);async function Y(){if(!(M||x)){M=!0;try{const n=await Ce.create([{canvas:u(r),camera:s,width:a,height:t,tileSize:16,tileIndexCapacity:4096}],i.count);if(x){n.dispose();return}d=n,await d.render(i)}catch(n){console.error("Single-Gaussian projection figure failed",n),y(S,!0)}}}se(()=>{try{p=new Re(u(c))}catch(f){console.error("Three-dimensional projection scene failed",f)}const n=new IntersectionObserver(f=>{f.some(ae=>ae.isIntersecting)&&(Y(),n.disconnect())},{rootMargin:"180px"});return n.observe(u(l)),()=>{x=!0,n.disconnect(),p?.dispose(),d?.dispose()}}),te();var g=Le(),E=D(g);A(E,n=>y(c,n),()=>u(c));var P=q(E,8);let O;var I=D(P);A(I,n=>y(r,n),()=>u(r));var Z=q(I,2);{var ee=n=>{var f=ze();T(n,f)};re(Z,n=>{u(S)&&n(ee)})}F(P),F(g),A(g,n=>y(l,n),()=>u(l)),ie(()=>{ce(g,`--region-label-font-size: ${G.regionLabel.fontSize}px; --region-label-font-size-mobile: ${G.regionLabel.mobileFontSize}px; --region-label-letter-spacing: ${G.regionLabel.letterSpacing};`),O=le(P,1,"rendered-view svelte-gdqu7s",null,O,{"render-failed":u(S)})}),T(o,g),ne()}export{Fe as default};
