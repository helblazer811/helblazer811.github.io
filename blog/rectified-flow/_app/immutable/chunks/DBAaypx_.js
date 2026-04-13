import{g as bw,h as eu,j as Tp,n as yw,o as Ep,a as ww,s as Rp}from"./BGxHdWqj.js";import{f as Bu,a as Fc}from"./QRJNuNGS.js";import{i as Cw}from"./BXyzJnSu.js";import{p as $w,B as Iw,o as vw,n as _c,m as kw,Q as Sw,k as Ds,j as Zi,a3 as rr,t as Fs,l as Nw,v as Tw,i as Ew}from"./WAWlr0V5.js";import{p as is,i as Ap}from"./B5wFzeb_.js";import{s as ir}from"./BEux406u.js";import{b as Rw}from"./B4ZR9csn.js";function Aw(n,t){for(var e=0;e<t.length;e++){const s=t[e];if(typeof s!="string"&&!Array.isArray(s)){for(const o in s)if(o!=="default"&&!(o in n)){const r=Object.getOwnPropertyDescriptor(s,o);r&&Object.defineProperty(n,o,r.get?r:{enumerable:!0,get:()=>s[o]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}function da(n,t){return n==null||t==null?NaN:n<t?-1:n>t?1:n>=t?0:NaN}function Dw(n,t){return n==null||t==null?NaN:t<n?-1:t>n?1:t>=n?0:NaN}function Em(n){let t,e,s;n.length!==2?(t=da,e=(a,l)=>da(n(a),l),s=(a,l)=>n(a)-l):(t=n===da||n===Dw?n:Fw,e=n,s=n);function o(a,l,c=0,u=a.length){if(c<u){if(t(l,l)!==0)return u;do{const h=c+u>>>1;e(a[h],l)<0?c=h+1:u=h}while(c<u)}return c}function r(a,l,c=0,u=a.length){if(c<u){if(t(l,l)!==0)return u;do{const h=c+u>>>1;e(a[h],l)<=0?c=h+1:u=h}while(c<u)}return c}function i(a,l,c=0,u=a.length){const h=o(a,l,c,u-1);return h>c&&s(a[h-1],l)>-s(a[h],l)?h-1:h}return{left:o,center:i,right:r}}function Fw(){return 0}function _w(n){return n===null?NaN:+n}const Ow=Em(da),Mw=Ow.right;Em(_w).center;const Lw=Math.sqrt(50),Pw=Math.sqrt(10),zw=Math.sqrt(2);function $a(n,t,e){const s=(t-n)/Math.max(0,e),o=Math.floor(Math.log10(s)),r=s/Math.pow(10,o),i=r>=Lw?10:r>=Pw?5:r>=zw?2:1;let a,l,c;return o<0?(c=Math.pow(10,-o)/i,a=Math.round(n*c),l=Math.round(t*c),a/c<n&&++a,l/c>t&&--l,c=-c):(c=Math.pow(10,o)*i,a=Math.round(n/c),l=Math.round(t/c),a*c<n&&++a,l*c>t&&--l),l<a&&.5<=e&&e<2?$a(n,t,e*2):[a,l,c]}function Bw(n,t,e){if(t=+t,n=+n,e=+e,!(e>0))return[];if(n===t)return[n];const s=t<n,[o,r,i]=s?$a(t,n,e):$a(n,t,e);if(!(r>=o))return[];const a=r-o+1,l=new Array(a);if(s)if(i<0)for(let c=0;c<a;++c)l[c]=(r-c)/-i;else for(let c=0;c<a;++c)l[c]=(r-c)*i;else if(i<0)for(let c=0;c<a;++c)l[c]=(o+c)/-i;else for(let c=0;c<a;++c)l[c]=(o+c)*i;return l}function nu(n,t,e){return t=+t,n=+n,e=+e,$a(n,t,e)[2]}function Vw(n,t,e){t=+t,n=+n,e=+e;const s=t<n,o=s?nu(t,n,e):nu(n,t,e);return(s?-1:1)*(o<0?1/-o:o)}function Ww(n,t){t||(t=[]);var e=n?Math.min(t.length,n.length):0,s=t.slice(),o;return function(r){for(o=0;o<e;++o)s[o]=n[o]*(1-r)+t[o]*r;return s}}function Uw(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Gw(n,t){var e=t?t.length:0,s=n?Math.min(e,n.length):0,o=new Array(s),r=new Array(e),i;for(i=0;i<s;++i)o[i]=Vu(n[i],t[i]);for(;i<e;++i)r[i]=t[i];return function(a){for(i=0;i<s;++i)r[i]=o[i](a);return r}}function Hw(n,t){var e=new Date;return n=+n,t=+t,function(s){return e.setTime(n*(1-s)+t*s),e}}function jw(n,t){var e={},s={},o;(n===null||typeof n!="object")&&(n={}),(t===null||typeof t!="object")&&(t={});for(o in t)o in n?e[o]=Vu(n[o],t[o]):s[o]=t[o];return function(r){for(o in e)s[o]=e[o](r);return s}}function Vu(n,t){var e=typeof t,s;return t==null||e==="boolean"?bw(t):(e==="number"?eu:e==="string"?(s=Ep(t))?(t=s,Tp):yw:t instanceof Ep?Tp:t instanceof Date?Hw:Uw(t)?Ww:Array.isArray(t)?Gw:typeof t.valueOf!="function"&&typeof t.toString!="function"||isNaN(t)?jw:eu)(n,t)}function qw(n,t){return n=+n,t=+t,function(e){return Math.round(n*(1-e)+t*e)}}function Kw(n){return Math.abs(n=Math.round(n))>=1e21?n.toLocaleString("en").replace(/,/g,""):n.toString(10)}function Ia(n,t){if((e=(n=t?n.toExponential(t-1):n.toExponential()).indexOf("e"))<0)return null;var e,s=n.slice(0,e);return[s.length>1?s[0]+s.slice(2):s,+n.slice(e+1)]}function Ro(n){return n=Ia(Math.abs(n)),n?n[1]:NaN}function Xw(n,t){return function(e,s){for(var o=e.length,r=[],i=0,a=n[0],l=0;o>0&&a>0&&(l+a+1>s&&(a=Math.max(1,s-l)),r.push(e.substring(o-=a,o+a)),!((l+=a+1)>s));)a=n[i=(i+1)%n.length];return r.reverse().join(t)}}function Yw(n){return function(t){return t.replace(/[0-9]/g,function(e){return n[+e]})}}var Zw=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function va(n){if(!(t=Zw.exec(n)))throw new Error("invalid format: "+n);var t;return new Wu({fill:t[1],align:t[2],sign:t[3],symbol:t[4],zero:t[5],width:t[6],comma:t[7],precision:t[8]&&t[8].slice(1),trim:t[9],type:t[10]})}va.prototype=Wu.prototype;function Wu(n){this.fill=n.fill===void 0?" ":n.fill+"",this.align=n.align===void 0?">":n.align+"",this.sign=n.sign===void 0?"-":n.sign+"",this.symbol=n.symbol===void 0?"":n.symbol+"",this.zero=!!n.zero,this.width=n.width===void 0?void 0:+n.width,this.comma=!!n.comma,this.precision=n.precision===void 0?void 0:+n.precision,this.trim=!!n.trim,this.type=n.type===void 0?"":n.type+""}Wu.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function Jw(n){t:for(var t=n.length,e=1,s=-1,o;e<t;++e)switch(n[e]){case".":s=o=e;break;case"0":s===0&&(s=e),o=e;break;default:if(!+n[e])break t;s>0&&(s=0);break}return s>0?n.slice(0,s)+n.slice(o+1):n}var Rm;function Qw(n,t){var e=Ia(n,t);if(!e)return n+"";var s=e[0],o=e[1],r=o-(Rm=Math.max(-8,Math.min(8,Math.floor(o/3)))*3)+1,i=s.length;return r===i?s:r>i?s+new Array(r-i+1).join("0"):r>0?s.slice(0,r)+"."+s.slice(r):"0."+new Array(1-r).join("0")+Ia(n,Math.max(0,t+r-1))[0]}function Dp(n,t){var e=Ia(n,t);if(!e)return n+"";var s=e[0],o=e[1];return o<0?"0."+new Array(-o).join("0")+s:s.length>o+1?s.slice(0,o+1)+"."+s.slice(o+1):s+new Array(o-s.length+2).join("0")}const Fp={"%":(n,t)=>(n*100).toFixed(t),b:n=>Math.round(n).toString(2),c:n=>n+"",d:Kw,e:(n,t)=>n.toExponential(t),f:(n,t)=>n.toFixed(t),g:(n,t)=>n.toPrecision(t),o:n=>Math.round(n).toString(8),p:(n,t)=>Dp(n*100,t),r:Dp,s:Qw,X:n=>Math.round(n).toString(16).toUpperCase(),x:n=>Math.round(n).toString(16)};function _p(n){return n}var Op=Array.prototype.map,Mp=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function tC(n){var t=n.grouping===void 0||n.thousands===void 0?_p:Xw(Op.call(n.grouping,Number),n.thousands+""),e=n.currency===void 0?"":n.currency[0]+"",s=n.currency===void 0?"":n.currency[1]+"",o=n.decimal===void 0?".":n.decimal+"",r=n.numerals===void 0?_p:Yw(Op.call(n.numerals,String)),i=n.percent===void 0?"%":n.percent+"",a=n.minus===void 0?"−":n.minus+"",l=n.nan===void 0?"NaN":n.nan+"";function c(h){h=va(h);var d=h.fill,p=h.align,f=h.sign,m=h.symbol,g=h.zero,x=h.width,b=h.comma,w=h.precision,y=h.trim,C=h.type;C==="n"?(b=!0,C="g"):Fp[C]||(w===void 0&&(w=12),y=!0,C="g"),(g||d==="0"&&p==="=")&&(g=!0,d="0",p="=");var I=m==="$"?e:m==="#"&&/[boxX]/.test(C)?"0"+C.toLowerCase():"",N=m==="$"?s:/[%p]/.test(C)?i:"",T=Fp[C],k=/[defgprs%]/.test(C);w=w===void 0?6:/[gprs]/.test(C)?Math.max(1,Math.min(21,w)):Math.max(0,Math.min(20,w));function S($){var R=I,A=N,O,M,z;if(C==="c")A=T($)+A,$="";else{$=+$;var G=$<0||1/$<0;if($=isNaN($)?l:T(Math.abs($),w),y&&($=Jw($)),G&&+$==0&&f!=="+"&&(G=!1),R=(G?f==="("?f:a:f==="-"||f==="("?"":f)+R,A=(C==="s"?Mp[8+Rm/3]:"")+A+(G&&f==="("?")":""),k){for(O=-1,M=$.length;++O<M;)if(z=$.charCodeAt(O),48>z||z>57){A=(z===46?o+$.slice(O+1):$.slice(O))+A,$=$.slice(0,O);break}}}b&&!g&&($=t($,1/0));var V=R.length+$.length+A.length,U=V<x?new Array(x-V+1).join(d):"";switch(b&&g&&($=t(U+$,U.length?x-A.length:1/0),U=""),p){case"<":$=R+$+A+U;break;case"=":$=R+U+$+A;break;case"^":$=U.slice(0,V=U.length>>1)+R+$+A+U.slice(V);break;default:$=U+R+$+A;break}return r($)}return S.toString=function(){return h+""},S}function u(h,d){var p=c((h=va(h),h.type="f",h)),f=Math.max(-8,Math.min(8,Math.floor(Ro(d)/3)))*3,m=Math.pow(10,-f),g=Mp[8+f/3];return function(x){return p(m*x)+g}}return{format:c,formatPrefix:u}}var Ji,Am,Dm;eC({thousands:",",grouping:[3],currency:["$",""]});function eC(n){return Ji=tC(n),Am=Ji.format,Dm=Ji.formatPrefix,Ji}function nC(n){return Math.max(0,-Ro(Math.abs(n)))}function sC(n,t){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(Ro(t)/3)))*3-Ro(Math.abs(n)))}function oC(n,t){return n=Math.abs(n),t=Math.abs(t)-n,Math.max(0,Ro(t)-Ro(n))+1}function rC(n,t){switch(arguments.length){case 0:break;case 1:this.range(n);break;default:this.range(t).domain(n);break}return this}function iC(n){return function(){return n}}function aC(n){return+n}var Lp=[0,1];function Io(n){return n}function su(n,t){return(t-=n=+n)?function(e){return(e-n)/t}:iC(isNaN(t)?NaN:.5)}function lC(n,t){var e;return n>t&&(e=n,n=t,t=e),function(s){return Math.max(n,Math.min(t,s))}}function cC(n,t,e){var s=n[0],o=n[1],r=t[0],i=t[1];return o<s?(s=su(o,s),r=e(i,r)):(s=su(s,o),r=e(r,i)),function(a){return r(s(a))}}function uC(n,t,e){var s=Math.min(n.length,t.length)-1,o=new Array(s),r=new Array(s),i=-1;for(n[s]<n[0]&&(n=n.slice().reverse(),t=t.slice().reverse());++i<s;)o[i]=su(n[i],n[i+1]),r[i]=e(t[i],t[i+1]);return function(a){var l=Mw(n,a,1,s)-1;return r[l](o[l](a))}}function hC(n,t){return t.domain(n.domain()).range(n.range()).interpolate(n.interpolate()).clamp(n.clamp()).unknown(n.unknown())}function dC(){var n=Lp,t=Lp,e=Vu,s,o,r,i=Io,a,l,c;function u(){var d=Math.min(n.length,t.length);return i!==Io&&(i=lC(n[0],n[d-1])),a=d>2?uC:cC,l=c=null,h}function h(d){return d==null||isNaN(d=+d)?r:(l||(l=a(n.map(s),t,e)))(s(i(d)))}return h.invert=function(d){return i(o((c||(c=a(t,n.map(s),eu)))(d)))},h.domain=function(d){return arguments.length?(n=Array.from(d,aC),u()):n.slice()},h.range=function(d){return arguments.length?(t=Array.from(d),u()):t.slice()},h.rangeRound=function(d){return t=Array.from(d),e=qw,u()},h.clamp=function(d){return arguments.length?(i=d?!0:Io,u()):i!==Io},h.interpolate=function(d){return arguments.length?(e=d,u()):e},h.unknown=function(d){return arguments.length?(r=d,h):r},function(d,p){return s=d,o=p,u()}}function pC(){return dC()(Io,Io)}function fC(n,t,e,s){var o=Vw(n,t,e),r;switch(s=va(s??",f"),s.type){case"s":{var i=Math.max(Math.abs(n),Math.abs(t));return s.precision==null&&!isNaN(r=sC(o,i))&&(s.precision=r),Dm(s,i)}case"":case"e":case"g":case"p":case"r":{s.precision==null&&!isNaN(r=oC(o,Math.max(Math.abs(n),Math.abs(t))))&&(s.precision=r-(s.type==="e"));break}case"f":case"%":{s.precision==null&&!isNaN(r=nC(o))&&(s.precision=r-(s.type==="%")*2);break}}return Am(s)}function mC(n){var t=n.domain;return n.ticks=function(e){var s=t();return Bw(s[0],s[s.length-1],e??10)},n.tickFormat=function(e,s){var o=t();return fC(o[0],o[o.length-1],e??10,s)},n.nice=function(e){e==null&&(e=10);var s=t(),o=0,r=s.length-1,i=s[o],a=s[r],l,c,u=10;for(a<i&&(c=i,i=a,a=c,c=o,o=r,r=c);u-- >0;){if(c=nu(i,a,e),c===l)return s[o]=i,s[r]=a,t(s);if(c>0)i=Math.floor(i/c)*c,a=Math.ceil(a/c)*c;else if(c<0)i=Math.ceil(i*c)/c,a=Math.floor(a*c)/c;else break;l=c}return n},n}function gC(){var n=pC();return n.copy=function(){return hC(n,gC())},rC.apply(n,arguments),mC(n)}var xC=Bu('<div class="figure-title svelte-1dsi1nj"><!></div>'),bC=Bu('<div class="figure-footer svelte-1dsi1nj"><!></div>'),yC=Bu('<figure class="double-figure svelte-1dsi1nj"><!> <div class="double-figure-container svelte-1dsi1nj"><div><!></div> <div><!></div></div> <!> <figcaption class="figure-caption svelte-1dsi1nj"><!></figcaption></figure>');function o6(n,t){$w(t,!1);let e=is(t,"title",8,void 0),s=is(t,"left",8,void 0),o=is(t,"right",8,void 0),r=is(t,"footer",8,void 0),i=is(t,"caption",8,void 0),a=is(t,"gap",8,20),l=is(t,"backgroundVisible",8,!0),c=is(t,"isActive",24,()=>Iw(!1)),u=kw(),h=null,d=!1,p=!0;function f(){c().set(d&&p)}vw(()=>{h=new IntersectionObserver(O=>{O.forEach(M=>{d=M.isIntersecting,f()})},{threshold:0,rootMargin:"50px"}),_c(u)&&h.observe(_c(u));const A=()=>{p=!document.hidden,f()};return document.addEventListener("visibilitychange",A),()=>{document.removeEventListener("visibilitychange",A)}}),Sw(()=>{h&&h.disconnect()}),Cw();var m=yC(),g=Ds(m);{var x=A=>{var O=xC(),M=Ds(O);ir(M,()=>e()??rr),Fs(O),Fc(A,O)};Ap(g,A=>{e()&&A(x)})}var b=Zi(g,2),w=Ds(b);let y;var C=Ds(w);ir(C,()=>s()??rr),Fs(w);var I=Zi(w,2);let N;var T=Ds(I);ir(T,()=>o()??rr),Fs(I),Fs(b);var k=Zi(b,2);{var S=A=>{var O=bC(),M=Ds(O);ir(M,()=>r()??rr),Fs(O),Fc(A,O)};Ap(k,A=>{r()&&A(S)})}var $=Zi(k,2),R=Ds($);ir(R,()=>i()??rr),Fs($),Fs(m),Rw(m,A=>Nw(u,A),()=>_c(u)),Tw(()=>{ww(b,`gap: ${a()??""}px;`),y=Rp(w,1,"figure-content left-figure svelte-1dsi1nj",null,y,{"no-background":!l()}),N=Rp(I,1,"figure-content right-figure svelte-1dsi1nj",null,N,{"no-background":!l()})}),Fc(n,m),Ew()}function r6(n,t,e,s,o){const{font:r="22px Helvetica, Arial, sans-serif",color:i="#666",opacity:a=1,align:l="center",baseline:c="top",offsetX:u=0,offsetY:h=0}=o??{};n.save(),n.font=r,n.fillStyle=i,n.globalAlpha=a,n.textAlign=l,n.textBaseline=c,n.fillText(t,e+u,s+h),n.restore()}function i6(n,t,e,s,o,r){n.fillStyle=s;for(const[i,a]of t)n.beginPath(),n.arc(i,a,e,0,2*Math.PI),n.globalAlpha=o,n.fill();n.globalAlpha=1}const wC=1e-7,CC=1e-4;class Fm{constructor(t,e){this.backend=t,this.dataMover=e,this.data=new WeakMap,this.dataIdsCount=0}get(t){return this.data.has(t)||this.dataMover.moveData(this.backend,t),this.data.get(t)}set(t,e){this.dataIdsCount++,this.data.set(t,e)}has(t){return this.data.has(t)}delete(t){return this.dataIdsCount--,this.data.delete(t)}numDataIds(){return this.dataIdsCount}}class Uu{refCount(t){return Be("refCount")}incRef(t){return Be("incRef")}timerAvailable(){return!0}time(t){return Be("time")}read(t){return Be("read")}readSync(t){return Be("readSync")}readToGPU(t,e){return Be("readToGPU")}numDataIds(){return Be("numDataIds")}disposeData(t,e){return Be("disposeData")}write(t,e,s){return Be("write")}move(t,e,s,o,r){return Be("move")}createTensorFromGPUData(t,e,s){return Be("createTensorFromGPUData")}memory(){return Be("memory")}floatPrecision(){return Be("floatPrecision")}epsilon(){return this.floatPrecision()===32?wC:CC}dispose(){return Be("dispose")}}function Be(n){throw new Error(`'${n}' not yet implemented or not found in the registry. This kernel may not be supported by the tfjs backend you have chosen`)}function $C(n){let t=n.length,e=0;for(;t>0;)e=Math.random()*t|0,t--,wo(n,t,e)}function Hs(n,t,e){return Math.max(n,Math.min(t,e))}function Gu(n){return n%2===0?n:n+1}function wo(n,t,e){const s=n[t];n[t]=n[e],n[e]=s}function IC(n){let t=0;for(let e=0;e<n.length;e++)t+=n[e];return t}function v(n,t){if(!n)throw new Error(typeof t=="string"?t:t())}function Hu(n,t,e=""){v(Et(n,t),()=>e+` Shapes ${n} and ${t} must match`)}function _m(n){v(n!=null,()=>"The input to the tensor constructor must be a non-null value.")}function H(n){if(n.length===0)return 1;let t=n[0];for(let e=1;e<n.length;e++)t*=n[e];return t}function Et(n,t){if(n===t)return!0;if(n==null||t==null||n.length!==t.length)return!1;for(let e=0;e<n.length;e++)if(n[e]!==t[e])return!1;return!0}function Ao(n){return n%1===0}function ou(n){const t=Math.ceil(Math.sqrt(n));return[t,Math.ceil(n/t)]}function vo(n,t){return t<=n.length?n:n+" ".repeat(t-n.length)}function Pp(n,t=o=>0,e,s){return new Promise((o,r)=>{let i=0;const a=()=>{if(n()){o();return}i++;const l=t(i);if(e!=null&&i>=e){r();return}s!=null?s(a,l):setTimeout(a,l)};a()})}function Om(n,t){let e=1,s=-1;for(let r=0;r<n.length;++r)if(n[r]>=0)e*=n[r];else if(n[r]===-1){if(s!==-1)throw Error(`Shapes can only have 1 implicit size. Found -1 at dim ${s} and dim ${r}`);s=r}else if(n[r]<0)throw Error(`Shapes can not be < 0. Found ${n[r]} at dim ${r}`);if(s===-1){if(t>0&&t!==e)throw Error(`Size(${t}) must match the product of shape ${n}`);return n}if(e===0)throw Error(`Cannot infer the missing size in [${n}] when there are 0 elements`);if(t%e!==0)throw Error(`The implicit shape can't be a fractional number. Got ${t} / ${e}`);const o=n.slice();return o[s]=t/e,o}function Ct(n,t){const e=t.length;return n=n==null?t.map((s,o)=>o):[].concat(n),v(n.every(s=>s>=-e&&s<e),()=>`All values in axis param must be in range [-${e}, ${e}) but got axis ${n}`),v(n.every(s=>Ao(s)),()=>`All values in axis param must be integers but got axis ${n}`),n.map(s=>s<0?e+s:s)}function Cs(n,t){const e=[],s=[],o=t!=null&&Array.isArray(t)&&t.length===0,r=t==null||o?null:Ct(t,n).sort();let i=0;for(let a=0;a<n.length;++a){if(r!=null){if(r[i]===a&&n[a]!==1)throw new Error(`Can't squeeze axis ${a} since its dim '${n[a]}' is not 1`);(r[i]==null||r[i]>a)&&n[a]===1&&(e.push(n[a]),s.push(a)),r[i]<=a&&i++}n[a]!==1&&(e.push(n[a]),s.push(a))}return{newShape:e,keptDims:s}}function Ce(n,t){return Yt(n,t)}function Yt(n,t){let e=null;if(n==null||n==="float32")e=new Float32Array(t);else if(n==="int32")e=new Int32Array(t);else if(n==="bool")e=new Uint8Array(t);else if(n==="string")e=new Array(t);else throw new Error(`Unknown data type ${n}`);return e}function vC(n,t){for(let e=0;e<n.length;e++){const s=n[e];if(isNaN(s)||!isFinite(s))throw Error(`A tensor of type ${t} being uploaded contains ${s}.`)}}function kC(n){return n==="bool"||n==="complex64"||n==="float32"||n==="int32"||n==="string"}function Mm(n,t){return!(t==="complex64"||t==="float32"&&n!=="complex64"||t==="int32"&&n!=="float32"&&n!=="complex64"||t==="bool"&&n==="bool")}function ka(n){if(n==="float32"||n==="int32")return 4;if(n==="complex64")return 8;if(n==="bool")return 1;throw new Error(`Unknown dtype ${n}`)}function SC(n){if(n==null)return 0;let t=0;return n.forEach(e=>t+=e.length),t}function Dr(n){return typeof n=="string"||n instanceof String}function NC(n){return typeof n=="boolean"}function ru(n){return typeof n=="number"}function Wo(n){return Array.isArray(n)?Wo(n[0]):n instanceof Float32Array?"float32":n instanceof Int32Array||n instanceof Uint8Array||n instanceof Uint8ClampedArray?"int32":ru(n)?"float32":Dr(n)?"string":NC(n)?"bool":"float32"}function iu(n){return!!(n&&n.constructor&&n.call&&n.apply)}function au(n,t){for(let e=t;e<n;++e)if(n%e===0)return e;return n}function lt(n){const t=n.length;if(t<2)return[];const e=new Array(t-1);e[t-2]=n[t-1];for(let s=t-3;s>=0;--s)e[s]=e[s+1]*n[s+1];return e}function Lm(n,t,e,s=!1){const o=new Array;if(t.length===1){const r=t[0]*(s?2:1);for(let i=0;i<r;i++)o[i]=e[n+i]}else{const r=t[0],i=t.slice(1),a=i.reduce((l,c)=>l*c)*(s?2:1);for(let l=0;l<r;l++)o[l]=Lm(n+l*a,i,e,s)}return o}function bn(n,t,e=!1){if(n.length===0)return t[0];const s=n.reduce((o,r)=>o*r)*(e?2:1);if(s===0)return[];if(s!==t.length)throw new Error(`[${n}] does not match the input size ${t.length}${e?" for a complex tensor":""}.`);return Lm(0,n,t,e)}function TC(n,t){if(Array.isArray(n))return n;if(t==="float32")return n instanceof Float32Array?n:new Float32Array(n);if(t==="int32")return n instanceof Int32Array?n:new Int32Array(n);if(t==="bool"||t==="string")return Uint8Array.from(new Int32Array(n));throw new Error(`Unknown dtype ${t}`)}function ju(n,t){const e=$e(n,t);for(let s=0;s<e.length;s++)e[s]=1;return e}function $e(n,t){if(t==null||t==="float32"||t==="complex64")return new Float32Array(n);if(t==="int32")return new Int32Array(n);if(t==="bool")return new Uint8Array(n);throw new Error(`Unknown data type ${t}`)}function Pm(n,t){const e=n.reduce((s,o)=>s*o,1);if(t==null||t==="float32")return bn(n,new Float32Array(e));if(t==="int32")return bn(n,new Int32Array(e));if(t==="bool")return bn(n,new Uint8Array(e));throw new Error(`Unknown data type ${t}`)}function Jn(n){n.forEach(t=>{v(Number.isInteger(t)&&t>=0,()=>`Tensor must have a shape comprised of positive integers but got shape [${n}].`)})}function An(n,t,e){if(t===0)return 0;if(t===1)return n[0];let s=n[n.length-1];for(let o=0;o<n.length-1;++o)s+=e[o]*n[o];return s}function Uo(n,t,e){if(t===0)return[];if(t===1)return[n];const s=new Array(t);for(let o=0;o<s.length-1;++o)s[o]=Math.floor(n/e[o]),n-=s[o]*e[o];return s[s.length-1]=n,s}function qu(n){return n&&n.then&&typeof n.then=="function"}const zp="tfjsflags";class EC{constructor(t){this.global=t,this.flags={},this.flagRegistry={},this.urlFlags={},this.getQueryParams=RC,this.populateURLFlags()}setPlatform(t,e){this.platform!=null&&(W().getBool("IS_TEST")||W().getBool("PROD")||console.warn(`Platform ${this.platformName} has already been set. Overwriting the platform with ${t}.`)),this.platformName=t,this.platform=e}registerFlag(t,e,s){if(this.flagRegistry[t]={evaluationFn:e,setHook:s},this.urlFlags[t]!=null){const o=this.urlFlags[t];W().getBool("IS_TEST")||W().getBool("PROD")||console.warn(`Setting feature override from URL ${t}: ${o}.`),this.set(t,o)}}async getAsync(t){return t in this.flags?this.flags[t]:(this.flags[t]=await this.evaluateFlag(t),this.flags[t])}get(t){if(t in this.flags)return this.flags[t];const e=this.evaluateFlag(t);if(qu(e))throw new Error(`Flag ${t} cannot be synchronously evaluated. Please use getAsync() instead.`);return this.flags[t]=e,this.flags[t]}getNumber(t){return this.get(t)}getBool(t){return this.get(t)}getString(t){return this.get(t)}getFlags(){return this.flags}get features(){return this.flags}set(t,e){if(this.flagRegistry[t]==null)throw new Error(`Cannot set flag ${t} as it has not been registered.`);this.flags[t]=e,this.flagRegistry[t].setHook!=null&&this.flagRegistry[t].setHook(e)}evaluateFlag(t){if(this.flagRegistry[t]==null)throw new Error(`Cannot evaluate flag '${t}': no evaluation function found.`);return this.flagRegistry[t].evaluationFn()}setFlags(t){this.flags=Object.assign({},t)}reset(){this.flags={},this.urlFlags={},this.populateURLFlags()}populateURLFlags(){if(typeof this.global>"u"||typeof this.global.location>"u"||typeof this.global.location.search>"u")return;const t=this.getQueryParams(this.global.location.search);zp in t&&t[zp].split(",").forEach(s=>{const[o,r]=s.split(":");this.urlFlags[o]=DC(o,r)})}}function RC(n){const t={};return n.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g,(e,...s)=>(AC(t,s[0],s[1]),s.join("="))),t}function AC(n,t,e){n[decodeURIComponent(t)]=decodeURIComponent(e||"")}function DC(n,t){const e=t.toLowerCase();return e==="true"||e==="false"?e==="true":`${+e}`===e?+e:t}function W(){return zm}let zm=null;function FC(n){zm=n}let Oc;function Bm(){if(Oc==null){let n;if(typeof window<"u")n=window;else if(typeof global<"u")n=global;else if(typeof process<"u")n=process;else if(typeof self<"u")n=self;else throw new Error("Could not find a global object");Oc=n}return Oc}function _C(){const n=Bm();return n._tfGlobals==null&&(n._tfGlobals=new Map),n._tfGlobals}function Ku(n,t){const e=_C();if(e.has(n))return e.get(n);{const s=t();return e.set(n,s),e.get(n)}}const el="Abs",Fr="Acos",_r="Acosh",Go="Add",Xu="AddN",Yu="All",Zu="Any",nl="ArgMax",sl="ArgMin",Or="Asin",Mr="Asinh",Lr="Atan",Pr="Atanh",zr="Atan2",ol="AvgPool",Ju="AvgPoolGrad",rl="AvgPool3D",Qu="AvgPool3DGrad",il="BatchMatMul",al="BatchToSpaceND",th="Bincount",eh="BitwiseAnd",OC="BroadcastTo",Vm="BroadcastArgs",Br="Cast",Vr="Ceil",Wr="ClipByValue",nh="Complex",ll="ComplexAbs",cl="Concat",ul="Conv2D",sh="Conv2DBackpropFilter",hl="Conv2DBackpropInput",dl="Conv3D",oh="Conv3DBackpropFilterV2",rh="Conv3DBackpropInputV2",Ur="Cos",Gr="Cosh",ih="Cumprod",pl="Cumsum",ah="CropAndResize",lh="DenseBincount",ch="DepthToSpace",fl="DepthwiseConv2dNative",uh="DepthwiseConv2dNativeBackpropFilter",hh="DepthwiseConv2dNativeBackpropInput",Wm="Diag",ml="Dilation2D",lu="Dilation2DBackpropInput",cu="Dilation2DBackpropFilter",MC="Draw",Hr="RealDiv",dh="Einsum",jr="Elu",ph="EluGrad",qr="Erf",gl="Equal",Kr="Exp",xl="ExpandDims",Xr="Expm1",fh="FFT",mh="Fill",gh="FlipLeftRight",Yr="Floor",Zr="FloorDiv",bl="FusedBatchNorm",yl="GatherV2",Um="GatherNd",wl="Greater",Jr="GreaterEqual",Qr="Identity",xh="IFFT",bh="Imag",ti="IsFinite",ei="IsInf",ni="IsNan",Cl="LeakyRelu",$l="Less",Il="LessEqual",yh="LinSpace",si="Log",oi="Log1p",vl="LogicalAnd",kl="LogicalNot",Sl="LogicalOr",LC="LogSoftmax",Nl="LRN",wh="LRNGrad",Tl="Max",ri="Maximum",El="MaxPool",Ch="MaxPoolGrad",Rl="MaxPool3D",$h="MaxPool3DGrad",Gm="MaxPoolWithArgmax",Al="Mean",Dl="Min",ii="Minimum",Fl="MirrorPad",ai="Mod",Hm="Multinomial",li="Multiply",_l="Neg",Ol="NotEqual",Ih="NonMaxSuppressionV3",vh="NonMaxSuppressionV4",kh="NonMaxSuppressionV5",Ml="OnesLike",Ll="OneHot",Pl="Pack",zl="PadV2",ci="Pow",Bl="Prelu",Vl="Prod",jm="RaggedGather",qm="RaggedRange",Km="RaggedTensorToTensor",Sh="Range",Nh="Real",ui="Reciprocal",hi="Relu",Wl="Reshape",Ul="ResizeNearestNeighbor",Th="ResizeNearestNeighborGrad",Gl="ResizeBilinear",Eh="ResizeBilinearGrad",di="Relu6",Hl="Reverse",pi="Round",fi="Rsqrt",Xm="ScatterNd",Ym="TensorScatterUpdate",Zm="SearchSorted",jl="Select",mi="Selu",ql="Slice",gi="Sin",xi="Sinh",bi="Sign",yi="Sigmoid",wi="Softplus",Ci="Sqrt",Kl="Sum",Xl="SpaceToBatchND",Yl="SplitV",Zl="Softmax",Jm="SparseFillEmptyRows",Qm="SparseReshape",tg="SparseSegmentMean",eg="SparseSegmentSum",ng="SparseToDense",$i="SquaredDifference",Rh="Square",Ah="StaticRegexReplace",Dh="StridedSlice",sg="StringNGrams",og="StringSplit",rg="StringToHashBucketFast",Ii="Sub",vi="Tan",ki="Tanh",Si="Tile",Fh="TopK",_h="Transform",ko="Transpose",Oh="Unique",Jl="Unpack",Ql="UnsortedSegmentSum",tc="ZerosLike",Ni="Step",PC="FromPixels",Mh="RotateWithOffset",Sa="_FusedMatMul",Na="FusedConv2D",ig="FusedDepthwiseConv2D";function qe(...n){W().getBool("IS_TEST")||W().getBool("PROD")||console.warn(...n)}function zC(...n){W().getBool("IS_TEST")||W().getBool("PROD")||console.log(...n)}const Ta=Ku("kernelRegistry",()=>new Map),uu=Ku("gradRegistry",()=>new Map);function Bp(n,t){const e=lg(n,t);return Ta.get(e)}function Vp(n){return uu.get(n)}function Wp(n){const t=Ta.entries(),e=[];for(;;){const{done:s,value:o}=t.next();if(s)break;const[r,i]=o,[a]=r.split("_");a===n&&e.push(i)}return e}function ag(n){const{kernelName:t,backendName:e}=n,s=lg(t,e);Ta.has(s)&&qe(`The kernel '${t}' for backend '${e}' is already registered`),Ta.set(s,n)}function BC(n){const{kernelName:t}=n;uu.has(t)&&W().getBool("DEBUG")&&qe(`Overriding the gradient for '${t}'`),uu.set(t,n)}function lg(n,t){return`${t}_${n}`}function cg(n){return n instanceof Float32Array||n instanceof Int32Array||n instanceof Uint8Array||n instanceof Uint8ClampedArray}function VC(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}function WC(n){if(Object.prototype.hasOwnProperty.call(n,"__esModule"))return n;var t=n.default;if(typeof t=="function"){var e=function s(){var o=!1;try{o=this instanceof s}catch{}return o?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};e.prototype=t.prototype}else e={};return Object.defineProperty(e,"__esModule",{value:!0}),Object.keys(n).forEach(function(s){var o=Object.getOwnPropertyDescriptor(n,s);Object.defineProperty(e,s,o.get?o:{enumerable:!0,get:function(){return n[s]}})}),e}var Mc,Up;function UC(){if(Up)return Mc;Up=1,Mc=t;var n=null;try{n=new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0,97,115,109,1,0,0,0,1,13,2,96,0,1,127,96,4,127,127,127,127,1,127,3,7,6,0,1,1,1,1,1,6,6,1,127,1,65,0,11,7,50,6,3,109,117,108,0,1,5,100,105,118,95,115,0,2,5,100,105,118,95,117,0,3,5,114,101,109,95,115,0,4,5,114,101,109,95,117,0,5,8,103,101,116,95,104,105,103,104,0,0,10,191,1,6,4,0,35,0,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,126,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,127,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,128,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,129,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,130,34,4,66,32,135,167,36,0,32,4,167,11])),{}).exports}catch{}function t(S,$,R){this.low=S|0,this.high=$|0,this.unsigned=!!R}t.prototype.__isLong__,Object.defineProperty(t.prototype,"__isLong__",{value:!0});function e(S){return(S&&S.__isLong__)===!0}t.isLong=e;var s={},o={};function r(S,$){var R,A,O;return $?(S>>>=0,(O=0<=S&&S<256)&&(A=o[S],A)?A:(R=a(S,(S|0)<0?-1:0,!0),O&&(o[S]=R),R)):(S|=0,(O=-128<=S&&S<128)&&(A=s[S],A)?A:(R=a(S,S<0?-1:0,!1),O&&(s[S]=R),R))}t.fromInt=r;function i(S,$){if(isNaN(S))return $?b:x;if($){if(S<0)return b;if(S>=f)return N}else{if(S<=-m)return T;if(S+1>=m)return I}return S<0?i(-S,$).neg():a(S%p|0,S/p|0,$)}t.fromNumber=i;function a(S,$,R){return new t(S,$,R)}t.fromBits=a;var l=Math.pow;function c(S,$,R){if(S.length===0)throw Error("empty string");if(S==="NaN"||S==="Infinity"||S==="+Infinity"||S==="-Infinity")return x;if(typeof $=="number"?(R=$,$=!1):$=!!$,R=R||10,R<2||36<R)throw RangeError("radix");var A;if((A=S.indexOf("-"))>0)throw Error("interior hyphen");if(A===0)return c(S.substring(1),$,R).neg();for(var O=i(l(R,8)),M=x,z=0;z<S.length;z+=8){var G=Math.min(8,S.length-z),V=parseInt(S.substring(z,z+G),R);if(G<8){var U=i(l(R,G));M=M.mul(U).add(i(V))}else M=M.mul(O),M=M.add(i(V))}return M.unsigned=$,M}t.fromString=c;function u(S,$){return typeof S=="number"?i(S,$):typeof S=="string"?c(S,$):a(S.low,S.high,typeof $=="boolean"?$:S.unsigned)}t.fromValue=u;var h=65536,d=1<<24,p=h*h,f=p*p,m=f/2,g=r(d),x=r(0);t.ZERO=x;var b=r(0,!0);t.UZERO=b;var w=r(1);t.ONE=w;var y=r(1,!0);t.UONE=y;var C=r(-1);t.NEG_ONE=C;var I=a(-1,2147483647,!1);t.MAX_VALUE=I;var N=a(-1,-1,!0);t.MAX_UNSIGNED_VALUE=N;var T=a(0,-2147483648,!1);t.MIN_VALUE=T;var k=t.prototype;return k.toInt=function(){return this.unsigned?this.low>>>0:this.low},k.toNumber=function(){return this.unsigned?(this.high>>>0)*p+(this.low>>>0):this.high*p+(this.low>>>0)},k.toString=function($){if($=$||10,$<2||36<$)throw RangeError("radix");if(this.isZero())return"0";if(this.isNegative())if(this.eq(T)){var R=i($),A=this.div(R),O=A.mul(R).sub(this);return A.toString($)+O.toInt().toString($)}else return"-"+this.neg().toString($);for(var M=i(l($,6),this.unsigned),z=this,G="";;){var V=z.div(M),U=z.sub(V.mul(M)).toInt()>>>0,q=U.toString($);if(z=V,z.isZero())return q+G;for(;q.length<6;)q="0"+q;G=""+q+G}},k.getHighBits=function(){return this.high},k.getHighBitsUnsigned=function(){return this.high>>>0},k.getLowBits=function(){return this.low},k.getLowBitsUnsigned=function(){return this.low>>>0},k.getNumBitsAbs=function(){if(this.isNegative())return this.eq(T)?64:this.neg().getNumBitsAbs();for(var $=this.high!=0?this.high:this.low,R=31;R>0&&($&1<<R)==0;R--);return this.high!=0?R+33:R+1},k.isZero=function(){return this.high===0&&this.low===0},k.eqz=k.isZero,k.isNegative=function(){return!this.unsigned&&this.high<0},k.isPositive=function(){return this.unsigned||this.high>=0},k.isOdd=function(){return(this.low&1)===1},k.isEven=function(){return(this.low&1)===0},k.equals=function($){return e($)||($=u($)),this.unsigned!==$.unsigned&&this.high>>>31===1&&$.high>>>31===1?!1:this.high===$.high&&this.low===$.low},k.eq=k.equals,k.notEquals=function($){return!this.eq($)},k.neq=k.notEquals,k.ne=k.notEquals,k.lessThan=function($){return this.comp($)<0},k.lt=k.lessThan,k.lessThanOrEqual=function($){return this.comp($)<=0},k.lte=k.lessThanOrEqual,k.le=k.lessThanOrEqual,k.greaterThan=function($){return this.comp($)>0},k.gt=k.greaterThan,k.greaterThanOrEqual=function($){return this.comp($)>=0},k.gte=k.greaterThanOrEqual,k.ge=k.greaterThanOrEqual,k.compare=function($){if(e($)||($=u($)),this.eq($))return 0;var R=this.isNegative(),A=$.isNegative();return R&&!A?-1:!R&&A?1:this.unsigned?$.high>>>0>this.high>>>0||$.high===this.high&&$.low>>>0>this.low>>>0?-1:1:this.sub($).isNegative()?-1:1},k.comp=k.compare,k.negate=function(){return!this.unsigned&&this.eq(T)?T:this.not().add(w)},k.neg=k.negate,k.add=function($){e($)||($=u($));var R=this.high>>>16,A=this.high&65535,O=this.low>>>16,M=this.low&65535,z=$.high>>>16,G=$.high&65535,V=$.low>>>16,U=$.low&65535,q=0,K=0,Y=0,Z=0;return Z+=M+U,Y+=Z>>>16,Z&=65535,Y+=O+V,K+=Y>>>16,Y&=65535,K+=A+G,q+=K>>>16,K&=65535,q+=R+z,q&=65535,a(Y<<16|Z,q<<16|K,this.unsigned)},k.subtract=function($){return e($)||($=u($)),this.add($.neg())},k.sub=k.subtract,k.multiply=function($){if(this.isZero())return x;if(e($)||($=u($)),n){var R=n.mul(this.low,this.high,$.low,$.high);return a(R,n.get_high(),this.unsigned)}if($.isZero())return x;if(this.eq(T))return $.isOdd()?T:x;if($.eq(T))return this.isOdd()?T:x;if(this.isNegative())return $.isNegative()?this.neg().mul($.neg()):this.neg().mul($).neg();if($.isNegative())return this.mul($.neg()).neg();if(this.lt(g)&&$.lt(g))return i(this.toNumber()*$.toNumber(),this.unsigned);var A=this.high>>>16,O=this.high&65535,M=this.low>>>16,z=this.low&65535,G=$.high>>>16,V=$.high&65535,U=$.low>>>16,q=$.low&65535,K=0,Y=0,Z=0,tt=0;return tt+=z*q,Z+=tt>>>16,tt&=65535,Z+=M*q,Y+=Z>>>16,Z&=65535,Z+=z*U,Y+=Z>>>16,Z&=65535,Y+=O*q,K+=Y>>>16,Y&=65535,Y+=M*U,K+=Y>>>16,Y&=65535,Y+=z*V,K+=Y>>>16,Y&=65535,K+=A*q+O*U+M*V+z*G,K&=65535,a(Z<<16|tt,K<<16|Y,this.unsigned)},k.mul=k.multiply,k.divide=function($){if(e($)||($=u($)),$.isZero())throw Error("division by zero");if(n){if(!this.unsigned&&this.high===-2147483648&&$.low===-1&&$.high===-1)return this;var R=(this.unsigned?n.div_u:n.div_s)(this.low,this.high,$.low,$.high);return a(R,n.get_high(),this.unsigned)}if(this.isZero())return this.unsigned?b:x;var A,O,M;if(this.unsigned){if($.unsigned||($=$.toUnsigned()),$.gt(this))return b;if($.gt(this.shru(1)))return y;M=b}else{if(this.eq(T)){if($.eq(w)||$.eq(C))return T;if($.eq(T))return w;var z=this.shr(1);return A=z.div($).shl(1),A.eq(x)?$.isNegative()?w:C:(O=this.sub($.mul(A)),M=A.add(O.div($)),M)}else if($.eq(T))return this.unsigned?b:x;if(this.isNegative())return $.isNegative()?this.neg().div($.neg()):this.neg().div($).neg();if($.isNegative())return this.div($.neg()).neg();M=x}for(O=this;O.gte($);){A=Math.max(1,Math.floor(O.toNumber()/$.toNumber()));for(var G=Math.ceil(Math.log(A)/Math.LN2),V=G<=48?1:l(2,G-48),U=i(A),q=U.mul($);q.isNegative()||q.gt(O);)A-=V,U=i(A,this.unsigned),q=U.mul($);U.isZero()&&(U=w),M=M.add(U),O=O.sub(q)}return M},k.div=k.divide,k.modulo=function($){if(e($)||($=u($)),n){var R=(this.unsigned?n.rem_u:n.rem_s)(this.low,this.high,$.low,$.high);return a(R,n.get_high(),this.unsigned)}return this.sub(this.div($).mul($))},k.mod=k.modulo,k.rem=k.modulo,k.not=function(){return a(~this.low,~this.high,this.unsigned)},k.and=function($){return e($)||($=u($)),a(this.low&$.low,this.high&$.high,this.unsigned)},k.or=function($){return e($)||($=u($)),a(this.low|$.low,this.high|$.high,this.unsigned)},k.xor=function($){return e($)||($=u($)),a(this.low^$.low,this.high^$.high,this.unsigned)},k.shiftLeft=function($){return e($)&&($=$.toInt()),($&=63)===0?this:$<32?a(this.low<<$,this.high<<$|this.low>>>32-$,this.unsigned):a(0,this.low<<$-32,this.unsigned)},k.shl=k.shiftLeft,k.shiftRight=function($){return e($)&&($=$.toInt()),($&=63)===0?this:$<32?a(this.low>>>$|this.high<<32-$,this.high>>$,this.unsigned):a(this.high>>$-32,this.high>=0?0:-1,this.unsigned)},k.shr=k.shiftRight,k.shiftRightUnsigned=function($){if(e($)&&($=$.toInt()),$&=63,$===0)return this;var R=this.high;if($<32){var A=this.low;return a(A>>>$|R<<32-$,R>>>$,this.unsigned)}else return $===32?a(R,0,this.unsigned):a(R>>>$-32,0,this.unsigned)},k.shru=k.shiftRightUnsigned,k.shr_u=k.shiftRightUnsigned,k.toSigned=function(){return this.unsigned?a(this.low,this.high,!1):this},k.toUnsigned=function(){return this.unsigned?this:a(this.low,this.high,!0)},k.toBytes=function($){return $?this.toBytesLE():this.toBytesBE()},k.toBytesLE=function(){var $=this.high,R=this.low;return[R&255,R>>>8&255,R>>>16&255,R>>>24,$&255,$>>>8&255,$>>>16&255,$>>>24]},k.toBytesBE=function(){var $=this.high,R=this.low;return[$>>>24,$>>>16&255,$>>>8&255,$&255,R>>>24,R>>>16&255,R>>>8&255,R&255]},t.fromBytes=function($,R,A){return A?t.fromBytesLE($,R):t.fromBytesBE($,R)},t.fromBytesLE=function($,R){return new t($[0]|$[1]<<8|$[2]<<16|$[3]<<24,$[4]|$[5]<<8|$[6]<<16|$[7]<<24,R)},t.fromBytesBE=function($,R){return new t($[4]<<24|$[5]<<16|$[6]<<8|$[7],$[0]<<24|$[1]<<16|$[2]<<8|$[3],R)},Mc}var ug=UC();const hg=VC(ug),GC=Aw({__proto__:null,default:hg},[ug]);const Ls=hg||GC;function ec(n){return Ls.fromString(n,!0,16)}const dg=ec("c3a5c85c97cb3127"),Ms=ec("b492b66fbe98f273"),Te=ec("9ae16a3b2f90404f");function hu(n){return n.xor(n.shru(47))}function pg(n,t,e){const s=n.slice(t,t+e);return Ls.fromBytes(Array.from(s),!0,!0)}function Pt(n,t){return pg(n,t,8)}function Gp(n,t){return pg(n,t,4)}function he(n,t){return t===0?n:n.shru(t).or(n.shl(64-t))}function hs(n,t,e=ec("9ddfea08eb382d69")){let s=n.xor(t).mul(e);s=s.xor(s.shru(47));let o=t.xor(s).mul(e);return o=o.xor(o.shru(47)),o=o.mul(e),o}function HC(n,t,e,s,o,r){o=o.add(n),r=he(r.add(o).add(s),21);const i=o;return o=o.add(t),o=o.add(e),r=r.add(he(o,44)),[o.add(s),r.add(i)]}function Qi(n,t,e,s){return HC(Pt(n,t),Pt(n,t+8),Pt(n,t+16),Pt(n,t+24),e,s)}function jC(n,t=n.length){if(t>=8){const e=Te.add(t*2),s=Pt(n,0).add(Te),o=Pt(n,t-8),r=he(o,37).mul(e).add(s),i=he(s,25).add(o).mul(e);return hs(r,i,e)}if(t>=4){const e=Te.add(t*2),s=Gp(n,0);return hs(s.shl(3).add(t),Gp(n,t-4),e)}if(t>0){const e=n[0],s=n[t>>1],o=n[t-1],r=e+(s<<8),i=t+(o<<2);return hu(Te.mul(r).xor(dg.mul(i))).mul(Te)}return Te}function qC(n,t=n.length){const e=Te.add(t*2),s=Pt(n,0).mul(Ms),o=Pt(n,8),r=Pt(n,t-8).mul(e),i=Pt(n,t-16).mul(Te);return hs(he(s.add(o),43).add(he(r,30)).add(i),s.add(he(o.add(Te),18)).add(r),e)}function KC(n,t=n.length){const e=Te.add(t*2),s=Pt(n,0).mul(Te),o=Pt(n,8),r=Pt(n,t-8).mul(e),i=Pt(n,t-16).mul(Te),a=he(s.add(o),43).add(he(r,30)).add(i),l=hs(a,s.add(he(o.add(Te),18)).add(r),e),c=Pt(n,16).mul(e),u=Pt(n,24),h=a.add(Pt(n,t-32)).mul(e),d=l.add(Pt(n,t-24)).mul(e);return hs(he(c.add(u),43).add(he(h,30)).add(d),c.add(he(u.add(s),18)).add(h),e)}function XC(n,t=n.length){const e=Ls.fromNumber(81,!0);if(t<=32)return t<=16?jC(n,t):qC(n,t);if(t<=64)return KC(n,t);let s=e,o=e.mul(Ms).add(113),r=hu(o.mul(Te).add(113)).mul(Te),i=[Ls.UZERO,Ls.UZERO],a=[Ls.UZERO,Ls.UZERO];s=s.mul(Te).add(Pt(n,0));let l=0;const c=(t-1>>6)*64,u=c+(t-1&63)-63;do s=he(s.add(o).add(i[0]).add(Pt(n,l+8)),37).mul(Ms),o=he(o.add(i[1]).add(Pt(n,l+48)),42).mul(Ms),s=s.xor(a[1]),o=o.add(i[0]).add(Pt(n,l+40)),r=he(r.add(a[0]),33).mul(Ms),i=Qi(n,l,i[1].mul(Ms),s.add(a[0])),a=Qi(n,l+32,r.add(a[1]),o.add(Pt(n,l+16))),[r,s]=[s,r],l+=64;while(l!==c);const h=Ms.add(r.and(255).shl(1));return l=u,a[0]=a[0].add(t-1&63),i[0]=i[0].add(a[0]),a[0]=a[0].add(i[0]),s=he(s.add(o).add(i[0]).add(Pt(n,l+8)),37).mul(h),o=he(o.add(i[1]).add(Pt(n,l+48)),42).mul(h),s=s.xor(a[1].mul(9)),o=o.add(i[0].mul(9).add(Pt(n,l+40))),r=he(r.add(a[0]),33).mul(h),i=Qi(n,l,i[1].mul(h),s.add(a[0])),a=Qi(n,l+32,r.add(a[1]),o.add(Pt(n,l+16))),[r,s]=[s,r],hs(hs(i[0],a[0],h).add(hu(o).mul(dg)).add(r),hs(i[1],a[1],h).add(s),h)}function $s(n,t){return t==="string"?ds(n):io([n],t)}function YC(n,t){return n instanceof Float32Array&&t==="float32"||n instanceof Int32Array&&t==="int32"||n instanceof Uint8Array&&t==="bool"}function io(n,t){if(t==="string")throw new Error("Cannot convert a string[] to a TypedArray");if(Array.isArray(n)&&(n=js(n)),W().getBool("DEBUG")&&vC(n,t),YC(n,t))return n;if(t==null||t==="float32"||t==="complex64")return new Float32Array(n);if(t==="int32")return new Int32Array(n);if(t==="bool"){const e=new Uint8Array(n.length);for(let s=0;s<e.length;++s)Math.round(n[s])!==0&&(e[s]=1);return e}else throw new Error(`Unknown data type ${t}`)}function Fe(){return W().platform.now()}function ds(n,t="utf-8"){return t=t||"utf-8",W().platform.encode(n,t)}function ms(n,t="utf-8"){return t=t||"utf-8",W().platform.decode(n,t)}function an(n){return W().platform.isTypedArray!=null?W().platform.isTypedArray(n):cg(n)}function js(n,t=[],e=!1){if(t==null&&(t=[]),typeof n=="boolean"||typeof n=="number"||typeof n=="string"||qu(n)||n==null||an(n)&&e)t.push(n);else if(Array.isArray(n)||an(n))for(let s=0;s<n.length;++s)js(n[s],t,e);else{let s=-1;for(const o of Object.keys(n))/^([1-9]+[0-9]*|0)$/.test(o)&&(s=Math.max(s,Number(o)));for(let o=0;o<=s;o++)js(n[o],t,e)}return t}class ZC{constructor(t,e){this.backendTimer=t,this.logger=e,e==null&&(this.logger=new QC)}profileKernel(t,e,s){let o;const r=()=>{o=s()};let i;const a=Fe();if(this.backendTimer.timerAvailable())i=this.backendTimer.time(r);else{r();for(const c of o)c.dataSync();i=Promise.resolve({kernelMs:Fe()-a})}if(W().getBool("CHECK_COMPUTATION_FOR_ERRORS"))for(let c=0;c<o.length;c++){const u=o[c];u.data().then(h=>{JC(h,u.dtype,t)})}return{kernelName:t,outputs:o,inputs:e,timeMs:i.then(c=>c.kernelMs),extraInfo:i.then(c=>c.getExtraProfileInfo!=null?c.getExtraProfileInfo():"")}}logKernelProfile(t){const{kernelName:e,outputs:s,timeMs:o,inputs:r,extraInfo:i}=t;s.forEach(a=>{Promise.all([a.data(),o,i]).then(l=>{this.logger.logKernelProfile(e,a,l[0],l[1],r,l[2])})})}}function JC(n,t,e){if(t!=="float32")return!1;for(let s=0;s<n.length;s++){const o=n[s];if(isNaN(o)||!isFinite(o))return console.warn(`Found ${o} in the result of '${e}'`),!0}return!1}class QC{logKernelProfile(t,e,s,o,r,i){const a=typeof o=="number"?vo(`${o}ms`,9):o.error,l=vo(t,25),c=e.rank,u=e.size,h=vo(e.shape.toString(),14);let d="";for(const p in r){const f=r[p];if(f!=null){const m=f.shape||e.shape,g=m.length;d+=`${p}: ${g}D ${g>0?m:""} `}}console.log(`%c${l}	%c${a}	%c${c}D ${h}	%c${u}	%c${d}	%c${i}`,"font-weight:bold","color:red","color:blue","color: orange","color: green","color: steelblue")}}function t$(n,t,e){const s={},o={};for(let l=0;l<t.length;l++)s[t[l].id]=!0;for(let l=0;l<n.length;l++){const c=n[l],u=c.inputs;for(const h in u){const d=u[h];let p=!1;for(let f=0;f<t.length;f++)if(s[d.id]){c.outputs.forEach(m=>s[m.id]=!0),p=!0,o[c.id]=!0;break}if(p)break}}const r={};r[e.id]=!0;const i={};for(let l=n.length-1;l>=0;l--){const c=n[l],u=c.inputs;for(let h=0;h<c.outputs.length;h++)if(r[c.outputs[h].id]){for(const d in u)r[u[d].id]=!0,i[c.id]=!0;break}}const a=[];for(let l=0;l<n.length;l++){const c=n[l];if(o[c.id]&&i[c.id]){const u={};for(const d in c.inputs){const p=c.inputs[d];s[p.id]&&(u[d]=p)}const h=Object.assign({},c);h.inputs=u,h.outputs=c.outputs,a.push(h)}}return a}function e$(n,t,e,s){for(let o=t.length-1;o>=0;o--){const r=t[o],i=[];if(r.outputs.forEach(l=>{const c=n[l.id];c!=null?i.push(c):i.push(null)}),r.gradient==null)throw new Error(`Cannot compute gradient: gradient function not found for ${r.kernelName}.`);const a=r.gradient(i);for(const l in r.inputs){if(!(l in a))throw new Error(`Cannot backprop through input ${l}. Available gradients found: ${Object.keys(a)}.`);const c=e(()=>a[l]());if(c.dtype!=="float32")throw new Error(`Error in gradient for op ${r.kernelName}. The gradient of input ${l} must have 'float32' dtype, but has '${c.dtype}'`);const u=r.inputs[l];if(!Et(c.shape,u.shape))throw new Error(`Error in gradient for op ${r.kernelName}. The gradient of input '${l}' has shape '${c.shape}', which does not match the shape of the input '${u.shape}'`);if(n[u.id]==null)n[u.id]=c;else{const h=n[u.id];n[u.id]=s(h,c),h.dispose()}}}}const Hp=20,ar=3,Lc=7;function n$(n,t,e,s){const o=lt(t),r=s$(n,t,e,o),i=t.length,a=pa(n,t,e,o,r),l=["Tensor"];return s&&(l.push(`  dtype: ${e}`),l.push(`  rank: ${i}`),l.push(`  shape: [${t}]`),l.push("  values:")),l.push(a.map(c=>"    "+c).join(`
`)),l.join(`
`)}function s$(n,t,e,s){const o=H(t),r=s[s.length-1],i=new Array(r).fill(0),a=t.length,l=e==="complex64"?dr(n):n;if(a>1)for(let c=0;c<o/r;c++){const u=c*r;for(let h=0;h<r;h++)i[h]=Math.max(i[h],hr(l[u+h],0,e).length)}return i}function hr(n,t,e){let s;return Array.isArray(n)?s=`${parseFloat(n[0].toFixed(Lc))} + ${parseFloat(n[1].toFixed(Lc))}j`:Dr(n)?s=`'${n}'`:e==="bool"?s=fg(n):s=parseFloat(n.toFixed(Lc)).toString(),vo(s,t)}function fg(n){return n===0?"false":"true"}function pa(n,t,e,s,o,r=!0){const i=e==="complex64"?2:1,a=t[0],l=t.length;if(l===0){if(e==="complex64"){const m=dr(n);return[hr(m[0],0,e)]}return e==="bool"?[fg(n[0])]:[n[0].toString()]}if(l===1){if(a>Hp){const g=ar*i;let x=Array.from(n.slice(0,g)),b=Array.from(n.slice((a-ar)*i,a*i));return e==="complex64"&&(x=dr(x),b=dr(b)),["["+x.map((w,y)=>hr(w,o[y],e)).join(", ")+", ..., "+b.map((w,y)=>hr(w,o[a-ar+y],e)).join(", ")+"]"]}return["["+(e==="complex64"?dr(n):Array.from(n)).map((g,x)=>hr(g,o[x],e)).join(", ")+"]"]}const c=t.slice(1),u=s.slice(1),h=s[0]*i,d=[];if(a>Hp){for(let m=0;m<ar;m++){const g=m*h,x=g+h;d.push(...pa(n.slice(g,x),c,e,u,o,!1))}d.push("...");for(let m=a-ar;m<a;m++){const g=m*h,x=g+h;d.push(...pa(n.slice(g,x),c,e,u,o,m===a-1))}}else for(let m=0;m<a;m++){const g=m*h,x=g+h;d.push(...pa(n.slice(g,x),c,e,u,o,m===a-1))}const p=l===2?",":"";d[0]="["+(a>0?d[0]+p:"");for(let m=1;m<d.length-1;m++)d[m]=" "+d[m]+p;let f=`,
`;for(let m=2;m<l;m++)f+=`
`;return d[d.length-1]=" "+d[d.length-1]+"]"+(r?"":f),d}function dr(n){const t=[];for(let e=0;e<n.length;e+=2)t.push([n[e],n[e+1]]);return t}class xe{constructor(t,e,s){if(this.dtype=e,this.shape=t.slice(),this.size=H(t),s!=null){const o=s.length;v(o===this.size,()=>`Length of values '${o}' does not match the size inferred by the shape '${this.size}'.`)}if(e==="complex64")throw new Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");this.values=s||Yt(e,this.size),this.strides=lt(t)}set(t,...e){e.length===0&&(e=[0]),v(e.length===this.rank,()=>`The number of provided coordinates (${e.length}) must match the rank (${this.rank})`);const s=this.locToIndex(e);this.values[s]=t}get(...t){t.length===0&&(t=[0]);let e=0;for(const o of t){if(o<0||o>=this.shape[e]){const r=`Requested out of range element at ${t}.   Buffer shape=${this.shape}`;throw new Error(r)}e++}let s=t[t.length-1];for(let o=0;o<t.length-1;++o)s+=this.strides[o]*t[o];return this.values[s]}locToIndex(t){if(this.rank===0)return 0;if(this.rank===1)return t[0];let e=t[t.length-1];for(let s=0;s<t.length-1;++s)e+=this.strides[s]*t[s];return e}indexToLoc(t){if(this.rank===0)return[];if(this.rank===1)return[t];const e=new Array(this.shape.length);for(let s=0;s<e.length-1;++s)e[s]=Math.floor(t/this.strides[s]),t-=e[s]*this.strides[s];return e[e.length-1]=t,e}get rank(){return this.shape.length}toTensor(){return mn().makeTensor(this.values,this.shape,this.dtype)}}let mn=null,Co=null;function o$(n){mn=n}function r$(n){Co=n}class Xt{constructor(t,e,s,o){this.kept=!1,this.isDisposedInternal=!1,this.shape=t.slice(),this.dtype=e||"float32",this.size=H(t),this.strides=lt(t),this.dataId=s,this.id=o,this.rankType=this.rank<5?this.rank.toString():"higher"}get rank(){return this.shape.length}async buffer(){const t=await this.data();return Co.buffer(this.shape,this.dtype,t)}bufferSync(){return Co.buffer(this.shape,this.dtype,this.dataSync())}async array(){const t=await this.data();return bn(this.shape,t,this.dtype==="complex64")}arraySync(){return bn(this.shape,this.dataSync(),this.dtype==="complex64")}async data(){this.throwIfDisposed();const t=mn().read(this.dataId);if(this.dtype==="string"){const e=await t;try{return e.map(s=>ms(s))}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}}return t}dataToGPU(t){return this.throwIfDisposed(),mn().readToGPU(this.dataId,t)}dataSync(){this.throwIfDisposed();const t=mn().readSync(this.dataId);if(this.dtype==="string")try{return t.map(e=>ms(e))}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}return t}async bytes(){this.throwIfDisposed();const t=await mn().read(this.dataId);return this.dtype==="string"?t:new Uint8Array(t.buffer)}dispose(){this.isDisposed||(this.kerasMask&&this.kerasMask.dispose(),mn().disposeTensor(this),this.isDisposedInternal=!0)}get isDisposed(){return this.isDisposedInternal}throwIfDisposed(){if(this.isDisposed)throw new Error("Tensor is disposed.")}print(t=!1){return Co.print(this,t)}clone(){return this.throwIfDisposed(),Co.clone(this)}toString(t=!1){const e=this.dataSync();return n$(e,this.shape,this.dtype,t)}cast(t){return this.throwIfDisposed(),Co.cast(this,t)}variable(t=!0,e,s){return this.throwIfDisposed(),mn().makeVariable(this,t,e,s)}}Object.defineProperty(Xt,Symbol.hasInstance,{value:n=>!!n&&n.data!=null&&n.dataSync!=null&&n.throwIfDisposed!=null});function j(){return Ku("Tensor",()=>Xt)}j();class Ea extends Xt{constructor(t,e,s,o){super(t.shape,t.dtype,t.dataId,o),this.trainable=e,this.name=s}assign(t){if(t.dtype!==this.dtype)throw new Error(`dtype of the new value (${t.dtype}) and previous value (${this.dtype}) must match`);if(!Et(t.shape,this.shape))throw new Error(`shape of the new value (${t.shape}) and previous value (${this.shape}) must match`);mn().disposeTensor(this),this.dataId=t.dataId,mn().incRef(this,null)}dispose(){mn().disposeVariable(this),this.isDisposedInternal=!0}}Object.defineProperty(Ea,Symbol.hasInstance,{value:n=>n instanceof Xt&&n.assign!=null&&n.assign instanceof Function});var jp;(function(n){n.R0="R0",n.R1="R1",n.R2="R2",n.R3="R3",n.R4="R4",n.R5="R5",n.R6="R6"})(jp||(jp={}));var du;(function(n){n.float32="float32",n.int32="int32",n.bool="int32",n.complex64="complex64"})(du||(du={}));var pu;(function(n){n.float32="float32",n.int32="int32",n.bool="bool",n.complex64="complex64"})(pu||(pu={}));var fu;(function(n){n.float32="float32",n.int32="float32",n.bool="float32",n.complex64="complex64"})(fu||(fu={}));var mu;(function(n){n.float32="complex64",n.int32="complex64",n.bool="complex64",n.complex64="complex64"})(mu||(mu={}));const i$={float32:fu,int32:du,bool:pu,complex64:mu};function Ue(n,t){if(n==="string"||t==="string"){if(n==="string"&&t==="string")return"string";throw new Error(`Can not upcast ${n} with ${t}`)}return i$[n][t]}function Lh(n){return Ue(n,"int32")}function mg(n){return n!=null&&typeof n=="object"&&"texture"in n&&n.texture instanceof WebGLTexture}function gg(n){return typeof GPUBuffer<"u"&&n!=null&&typeof n=="object"&&"buffer"in n&&n.buffer instanceof GPUBuffer}function Jt(n,t){if(n.dtype===t.dtype)return[n,t];const e=Ue(n.dtype,t.dtype);return[n.cast(e),t.cast(e)]}function xg(n){const t=[];return bg(n,t,new Set),t}function bg(n,t,e){if(n==null)return;if(n instanceof Xt){t.push(n);return}if(!a$(n))return;const s=n;for(const o in s){const r=s[o];e.has(r)||(e.add(r),bg(r,t,e))}}function a$(n){return Array.isArray(n)||typeof n=="object"}function Pc(n){return n.kernelName!=null}class qp{constructor(){this.registeredVariables={},this.nextTapeNodeId=0,this.numBytes=0,this.numTensors=0,this.numStringTensors=0,this.numDataBuffers=0,this.gradientDepth=0,this.kernelDepth=0,this.scopeStack=[],this.numDataMovesStack=[],this.nextScopeId=0,this.tensorInfo=new WeakMap,this.profiling=!1,this.activeProfile={newBytes:0,newTensors:0,peakBytes:0,kernels:[],result:null,get kernelNames(){return Array.from(new Set(this.kernels.map(t=>t.name)))}}}dispose(){for(const t in this.registeredVariables)this.registeredVariables[t].dispose()}}class Do{constructor(t){this.ENV=t,this.registry={},this.registryFactory={},this.pendingBackendInitId=0,this.state=new qp}async ready(){if(this.pendingBackendInit!=null)return this.pendingBackendInit.then(()=>{});if(this.backendInstance!=null)return;const t=this.getSortedBackends();for(let e=0;e<t.length;e++){const s=t[e];if(await this.initializeBackend(s).success){await this.setBackend(s);return}}throw new Error("Could not initialize any backends, all backend initializations failed.")}get backend(){if(this.pendingBackendInit!=null)throw new Error(`Backend '${this.backendName}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);if(this.backendInstance==null){const{name:t,asyncInit:e}=this.initializeBackendsAndReturnBest();if(e)throw new Error(`The highest priority backend '${t}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);this.setBackend(t)}return this.backendInstance}backendNames(){return Object.keys(this.registryFactory)}findBackend(t){if(!(t in this.registry))if(t in this.registryFactory){const{asyncInit:e}=this.initializeBackend(t);if(e)return null}else return null;return this.registry[t]}findBackendFactory(t){return t in this.registryFactory?this.registryFactory[t].factory:null}registerBackend(t,e,s=1){return t in this.registryFactory?(qe(`${t} backend was already registered. Reusing existing backend factory.`),!1):(this.registryFactory[t]={factory:e,priority:s},!0)}async setBackend(t){if(this.registryFactory[t]==null)throw new Error(`Backend name '${t}' not found in registry`);if(this.backendName=t,this.registry[t]==null){this.backendInstance=null;const{success:e,asyncInit:s}=this.initializeBackend(t);if(!(s?await e:e))return!1}return this.backendInstance=this.registry[t],this.setupRegisteredKernels(),this.profiler=new ZC(this.backendInstance),!0}setupRegisteredKernels(){Wp(this.backendName).forEach(e=>{e.setupFunc!=null&&e.setupFunc(this.backendInstance)})}disposeRegisteredKernels(t){Wp(t).forEach(s=>{s.disposeFunc!=null&&s.disposeFunc(this.registry[t])})}initializeBackend(t){const e=this.registryFactory[t];if(e==null)throw new Error(`Cannot initialize backend ${t}, no registration found.`);try{const s=e.factory();if(s&&!(s instanceof Uu)&&typeof s.then=="function"){const o=++this.pendingBackendInitId,r=s.then(i=>o<this.pendingBackendInitId?!1:(this.registry[t]=i,this.pendingBackendInit=null,!0)).catch(i=>(o<this.pendingBackendInitId||(this.pendingBackendInit=null,qe(`Initialization of backend ${t} failed`),qe(i.stack||i.message)),!1));return this.pendingBackendInit=r,{success:r,asyncInit:!0}}else return this.registry[t]=s,{success:!0,asyncInit:!1}}catch(s){return qe(`Initialization of backend ${t} failed`),qe(s.stack||s.message),{success:!1,asyncInit:!1}}}removeBackend(t){if(!(t in this.registryFactory))throw new Error(`${t} backend not found in registry`);this.backendName===t&&this.pendingBackendInit!=null&&this.pendingBackendInitId++,t in this.registry&&(this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t]),delete this.registryFactory[t],this.backendName===t&&(this.pendingBackendInit=null,this.backendName=null,this.backendInstance=null)}getSortedBackends(){if(Object.keys(this.registryFactory).length===0)throw new Error("No backend found in registry.");return Object.keys(this.registryFactory).sort((t,e)=>this.registryFactory[e].priority-this.registryFactory[t].priority)}initializeBackendsAndReturnBest(){const t=this.getSortedBackends();for(let e=0;e<t.length;e++){const s=t[e],{success:o,asyncInit:r}=this.initializeBackend(s);if(r||o)return{name:s,asyncInit:r}}throw new Error("Could not initialize any backends, all backend initializations failed.")}moveData(t,e){const s=this.state.tensorInfo.get(e),o=s.backend,r=this.readSync(e),i=o.refCount(e);o.disposeData(e,!0),s.backend=t,t.move(e,r,s.shape,s.dtype,i),this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack[this.state.numDataMovesStack.length-1]++}tidy(t,e){let s=null;if(e==null){if(typeof t!="function")throw new Error("Please provide a function to tidy()");e=t}else{if(typeof t!="string"&&!(t instanceof String))throw new Error("When calling with two arguments, the first argument to tidy() must be a string");if(typeof e!="function")throw new Error("When calling with two arguments, the 2nd argument to tidy() must be a function");s=t}let o;return this.scopedRun(()=>this.startScope(s),()=>this.endScope(o),()=>(o=e(),o instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),o))}scopedRun(t,e,s){t();try{const o=s();return e(),o}catch(o){throw e(),o}}nextTensorId(){return Do.nextTensorId++}nextVariableId(){return Do.nextVariableId++}clone(t){const e=_.runKernel(Qr,{x:t}),s={x:t},o=i=>({x:()=>{const a="float32",l={x:i},c={dtype:a};return _.runKernel(Br,l,c)}}),r=[];return this.addTapeNode(this.state.activeScope.name,s,[e],o,r,{}),e}runKernel(t,e,s){if(this.backendName==null&&this.backend,!(Bp(t,this.backendName)!=null))throw new Error(`Kernel '${t}' not registered for backend '${this.backendName}'`);return this.runKernelFunc({kernelName:t,inputs:e,attrs:s})}shouldCheckForMemLeaks(){return this.ENV.getBool("IS_TEST")}checkKernelForMemLeak(t,e,s){const o=this.backend.numDataIds();let r=0;s.forEach(l=>{r+=l.dtype==="complex64"?3:1});const i=this.state.numDataMovesStack[this.state.numDataMovesStack.length-1],a=o-e-r-i;if(a>0)throw new Error(`Backend '${this.backendName}' has an internal memory leak (${a} data ids) after running '${t}'`)}runKernelFunc(t){let e,s=[];const o=this.isTapeOn(),r=this.state.numBytes,i=this.state.numTensors;this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack.push(0);let a;this.backendName==null&&this.backend;let l;const c=Pc(t)?t.kernelName:this.state.activeScope!=null?this.state.activeScope.name:"";if(Pc(t)){const{kernelName:f,inputs:m,attrs:g}=t;this.backendName==null&&this.backend;const x=Bp(f,this.backendName);v(x!=null,()=>`Cannot find registered kernel '${f}' for backend '${this.backendName}'`),a=()=>{const b=this.backend.numDataIds();l=x.kernelFunc({inputs:m,attrs:g,backend:this.backend});const w=Array.isArray(l)?l:[l];this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(f,b,w);const y=w.map(C=>C.rank!=null?C:this.makeTensorFromTensorInfo(C));if(o){const C=this.getTensorsForGradient(f,m,y);s=this.saveTensorsForBackwardMode(C)}return y}}else{const{forwardFunc:f}=t,m=g=>{o&&(s=g.map(x=>this.keep(this.clone(x))))};a=()=>{const g=this.backend.numDataIds();l=this.tidy(()=>f(this.backend,m));const x=Array.isArray(l)?l:[l];return this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(c,g,x),x}}const{inputs:u,attrs:h}=t,d=Pc(t)?null:t.backwardsFunc;let p;return this.scopedRun(()=>this.state.kernelDepth++,()=>this.state.kernelDepth--,()=>{!this.ENV.getBool("DEBUG")&&!this.state.profiling?e=a():(p=this.profiler.profileKernel(c,u,()=>a()),this.ENV.getBool("DEBUG")&&this.profiler.logKernelProfile(p),e=p.outputs)}),o&&this.addTapeNode(c,u,e,d,s,h),this.state.profiling&&this.state.activeProfile.kernels.push({name:c,bytesAdded:this.state.numBytes-r,totalBytesSnapshot:this.state.numBytes,tensorsAdded:this.state.numTensors-i,totalTensorsSnapshot:this.state.numTensors,inputShapes:Object.keys(u).map(f=>u[f]!=null?u[f].shape:null),outputShapes:e.map(f=>f.shape),kernelTimeMs:p.timeMs,extraInfo:p.extraInfo}),Array.isArray(l)?e:e[0]}saveTensorsForBackwardMode(t){return t.map(s=>this.keep(this.clone(s)))}getTensorsForGradient(t,e,s){const o=Vp(t);if(o!=null){const r=o.inputsToSave||[],i=o.outputsToSave||[];let a;o.saveAllInputs?(v(Array.isArray(e),()=>"saveAllInputs is true, expected inputs to be an array."),a=Object.keys(e).map(c=>e[c])):a=r.map(c=>e[c]);const l=s.filter((c,u)=>i[u]);return a.concat(l)}return[]}makeTensor(t,e,s,o){if(t==null)throw new Error("Values passed to engine.makeTensor() are null");s=s||"float32",o=o||this.backend;let r=t;s==="string"&&Dr(t[0])&&(r=t.map(l=>ds(l)));const i=o.write(r,e,s),a=new Xt(e,s,i,this.nextTensorId());if(this.trackTensor(a,o),s==="string"){const l=this.state.tensorInfo.get(i),c=SC(r);this.state.numBytes+=c-l.bytes,l.bytes=c}return a}makeTensorFromDataId(t,e,s,o){s=s||"float32";const r={dataId:t,shape:e,dtype:s};return this.makeTensorFromTensorInfo(r,o)}makeTensorFromTensorInfo(t,e){const{dataId:s,shape:o,dtype:r}=t,i=new Xt(o,r,s,this.nextTensorId());return this.trackTensor(i,e),i}makeVariable(t,e=!0,s,o){s=s||this.nextVariableId().toString(),o!=null&&o!==t.dtype&&(t=t.cast(o));const r=new Ea(t,e,s,this.nextTensorId());if(this.state.registeredVariables[r.name]!=null)throw new Error(`Variable with name ${r.name} was already registered`);return this.state.registeredVariables[r.name]=r,this.incRef(r,this.backend),r}trackTensor(t,e){this.state.numTensors++,t.dtype==="string"&&this.state.numStringTensors++;let s=0;t.dtype!=="complex64"&&t.dtype!=="string"&&(s=t.size*ka(t.dtype)),this.state.numBytes+=s,this.state.tensorInfo.has(t.dataId)||(this.state.numDataBuffers++,this.state.tensorInfo.set(t.dataId,{backend:e||this.backend,dtype:t.dtype,shape:t.shape,bytes:s})),t instanceof Ea||this.track(t)}incRef(t,e){this.trackTensor(t,e),this.backend.incRef(t.dataId)}removeDataId(t,e){this.state.tensorInfo.has(t)&&this.state.tensorInfo.get(t).backend===e&&(this.state.tensorInfo.delete(t),this.state.numDataBuffers--)}disposeTensor(t){if(!this.state.tensorInfo.has(t.dataId))return;const e=this.state.tensorInfo.get(t.dataId);if(this.state.numTensors--,t.dtype==="string"&&(this.state.numStringTensors--,this.state.numBytes-=e.bytes),t.dtype!=="complex64"&&t.dtype!=="string"){const s=t.size*ka(t.dtype);this.state.numBytes-=s}e.backend.disposeData(t.dataId)&&this.removeDataId(t.dataId,e.backend)}disposeVariables(){for(const t in this.state.registeredVariables){const e=this.state.registeredVariables[t];this.disposeVariable(e)}}disposeVariable(t){this.disposeTensor(t),this.state.registeredVariables[t.name]!=null&&delete this.state.registeredVariables[t.name]}memory(){const t=this.backend.memory();return t.numTensors=this.state.numTensors,t.numDataBuffers=this.state.numDataBuffers,t.numBytes=this.state.numBytes,this.state.numStringTensors>0&&(t.unreliable=!0,t.reasons==null&&(t.reasons=[]),t.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)")),t}async profile(t){this.state.profiling=!0;const e=this.state.numBytes,s=this.state.numTensors;this.state.activeProfile.kernels=[],this.state.activeProfile.result=await t(),this.state.profiling=!1,this.state.activeProfile.peakBytes=Math.max(...this.state.activeProfile.kernels.map(o=>o.totalBytesSnapshot)),this.state.activeProfile.newBytes=this.state.numBytes-e,this.state.activeProfile.newTensors=this.state.numTensors-s;for(const o of this.state.activeProfile.kernels)o.kernelTimeMs=await o.kernelTimeMs,o.extraInfo=await o.extraInfo;return this.state.activeProfile}isTapeOn(){return this.state.gradientDepth>0&&this.state.kernelDepth===0}addTapeNode(t,e,s,o,r,i){const a={id:this.state.nextTapeNodeId++,kernelName:t,inputs:e,outputs:s,saved:r},l=Vp(t);l!=null&&(o=l.gradFunc),o!=null&&(a.gradient=c=>(c=c.map((u,h)=>{if(u==null){const d=s[h],p=$e(d.size,d.dtype);return this.makeTensor(p,d.shape,d.dtype)}return u}),o(c.length>1?c:c[0],r,i))),this.state.activeTape.push(a)}keep(t){return t.kept=!0,t}startTape(){this.state.gradientDepth===0&&(this.state.activeTape=[]),this.state.gradientDepth++}endTape(){this.state.gradientDepth--}startScope(t){const e={track:[],name:"unnamed scope",id:this.state.nextScopeId++};t&&(e.name=t),this.state.scopeStack.push(e),this.state.activeScope=e}endScope(t){const e=xg(t),s=new Set(e.map(r=>r.id));for(let r=0;r<this.state.activeScope.track.length;r++){const i=this.state.activeScope.track[r];!i.kept&&!s.has(i.id)&&i.dispose()}const o=this.state.scopeStack.pop();this.state.activeScope=this.state.scopeStack.length===0?null:this.state.scopeStack[this.state.scopeStack.length-1],e.forEach(r=>{!r.kept&&r.scopeId===o.id&&this.track(r)})}gradients(t,e,s,o=!1){if(v(e.length>0,()=>"gradients() received an empty list of xs."),s!=null&&s.dtype!=="float32")throw new Error(`dy must have 'float32' dtype, but has '${s.dtype}'`);const r=this.scopedRun(()=>this.startTape(),()=>this.endTape(),()=>this.tidy("forward",t));v(r instanceof Xt,()=>"The result y returned by f() must be a tensor.");const i=t$(this.state.activeTape,e,r);if(!o&&i.length===0&&e.length>0)throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");return this.tidy("backward",()=>{const a={};a[r.id]=s??l$(r.shape),e$(a,i,c=>this.tidy(c),c$);const l=e.map(c=>a[c.id]);return this.state.gradientDepth===0&&(this.state.activeTape.forEach(c=>{for(const u of c.saved)u.dispose()}),this.state.activeTape=null),{value:r,grads:l}})}customGrad(t){return v(iu(t),()=>"The f passed in customGrad(f) must be a function."),(...e)=>{v(e.every(a=>a instanceof Xt),()=>"The args passed in customGrad(f)(x1, x2,...) must all be tensors");let s;const o={};e.forEach((a,l)=>{o[l]=a});const r=(a,l)=>(s=t(...e,l),v(s.value instanceof Xt,()=>"The function f passed in customGrad(f) must return an object where `obj.value` is a tensor"),v(iu(s.gradFunc),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function."),s.value),i=(a,l)=>{const c=s.gradFunc(a,l),u=Array.isArray(c)?c:[c];v(u.length===e.length,()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...)."),v(u.every(d=>d instanceof Xt),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors.");const h={};return u.forEach((d,p)=>{h[p]=()=>d}),h};return this.runKernelFunc({forwardFunc:r,backwardsFunc:i,inputs:o})}}readSync(t){return this.state.tensorInfo.get(t).backend.readSync(t)}read(t){return this.state.tensorInfo.get(t).backend.read(t)}readToGPU(t,e){return this.state.tensorInfo.get(t).backend.readToGPU(t,e)}async time(t){const e=Fe(),s=await this.backend.time(t);return s.wallMs=Fe()-e,s}track(t){return this.state.activeScope!=null&&(t.scopeId=this.state.activeScope.id,this.state.activeScope.track.push(t)),t}get registeredVariables(){return this.state.registeredVariables}reset(){this.pendingBackendInitId++,this.state.dispose(),this.ENV.reset(),this.state=new qp;for(const t in this.registry)this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t];this.backendName=null,this.backendInstance=null,this.pendingBackendInit=null}}Do.nextTensorId=0;Do.nextVariableId=0;function l$(n){const t=ju(H(n),"float32");return _.makeTensor(t,n,"float32")}function yg(){const n=Bm();if(n._tfengine==null){const t=new EC(n);n._tfengine=new Do(t)}return FC(n._tfengine.ENV),o$(()=>n._tfengine),n._tfengine}const _=yg();function c$(n,t){const e={a:n,b:t};return _.runKernel(Go,e)}function u$(){return typeof navigator<"u"&&navigator!=null}function wg(n){if(n||u$()){if(n||(n=navigator),n.product==="ReactNative")return!0;const t=n.userAgent||n.vendor||(typeof window<"u"?window.opera:"");if(!t){const e=n;return e.userAgentData&&e.userAgentData.mobile}return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4))}return!1}function Cg(){return typeof window<"u"&&window.document!=null||typeof WorkerGlobalScope<"u"}const Le=W();Le.registerFlag("DEBUG",()=>!1,n=>{n&&console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.")});Le.registerFlag("IS_BROWSER",()=>Cg());Le.registerFlag("IS_NODE",()=>typeof process<"u"&&typeof process.versions<"u"&&typeof process.versions.node<"u");Le.registerFlag("IS_CHROME",()=>typeof navigator<"u"&&navigator!=null&&navigator.userAgent!=null&&/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor));Le.registerFlag("IS_SAFARI",()=>typeof navigator<"u"&&navigator!=null&&navigator.userAgent!=null&&/Safari/.test(navigator.userAgent)&&/Apple/.test(navigator.vendor));Le.registerFlag("PROD",()=>!1);Le.registerFlag("TENSORLIKE_CHECK_SHAPE_CONSISTENCY",()=>Le.getBool("DEBUG"));Le.registerFlag("DEPRECATION_WARNINGS_ENABLED",()=>!0);Le.registerFlag("IS_TEST",()=>!1);Le.registerFlag("CHECK_COMPUTATION_FOR_ERRORS",()=>Le.getBool("DEBUG"));Le.registerFlag("WRAP_TO_IMAGEBITMAP",()=>!1);Le.registerFlag("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU",()=>!1);Le.registerFlag("USE_SETTIMEOUTCUSTOM",()=>!1);function nc(n,t){let e=n;if(an(n))return t==="string"?[]:[n.length];if(mg(n)){const o=n.channels||"RGBA";return[n.height,n.width*o.length]}else if(gg(n))return[n.buffer.size/(t==null?4:ka(t))];if(!Array.isArray(n))return[];const s=[];for(;Array.isArray(e)||an(e)&&t!=="string";)s.push(e.length),e=e[0];return Array.isArray(n)&&W().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY")&&$g(n,s,[]),s}function $g(n,t,e){if(e=e||[],!Array.isArray(n)&&!an(n)){v(t.length===0,()=>`Element arr[${e.join("][")}] is a primitive, but should be an array/TypedArray of ${t[0]} elements`);return}v(t.length>0,()=>`Element arr[${e.join("][")}] should be a primitive, but is an array of ${n.length} elements`),v(n.length===t[0],()=>`Element arr[${e.join("][")}] should have ${t[0]} elements, but has ${n.length} elements`);const s=t.slice(1);for(let o=0;o<n.length;++o)$g(n[o],s,e.concat(o))}function Kp(n,t,e,s){if(n!=="string_or_numeric"){if(n==null)throw new Error("Expected dtype cannot be null.");if(n!=="numeric"&&n!==t||n==="numeric"&&t==="string")throw new Error(`Argument '${e}' passed to '${s}' must be ${n} tensor, but got ${t} tensor`)}}function E(n,t,e,s="numeric"){if(n instanceof j())return Kp(s,n.dtype,t,e),n;let o=Wo(n);if(o!=="string"&&["bool","int32","float32"].indexOf(s)>=0&&(o=s),Kp(s,o,t,e),n==null||!an(n)&&!Array.isArray(n)&&typeof n!="number"&&typeof n!="boolean"&&typeof n!="string"){const l=n==null?"null":n.constructor.name;throw new Error(`Argument '${t}' passed to '${e}' must be a Tensor or TensorLike, but got '${l}'`)}const r=nc(n,o);!an(n)&&!Array.isArray(n)&&(n=[n]);const a=o!=="string"?io(n,o):js(n,[],!0);return _.makeTensor(a,r,o)}function Ig(n,t,e,s="numeric"){if(!Array.isArray(n))throw new Error(`Argument ${t} passed to ${e} must be a \`Tensor[]\` or \`TensorLike[]\``);return n.map((r,i)=>E(r,`${t}[${i}]`,e,s))}const h$="__op";function P(n){const t=Object.keys(n);if(t.length!==1)throw new Error(`Please provide an object with a single key (operation name) mapping to a function. Got an object with ${t.length} keys.`);let e=t[0];const s=n[e];e.endsWith("_")&&(e=e.substring(0,e.length-1)),e=e+h$;const o=(...r)=>{_.startScope(e);try{const i=s(...r);return qu(i)&&console.error("Cannot return a Promise inside of tidy."),_.endScope(i),i}catch(i){throw _.endScope(null),i}};return Object.defineProperty(o,"name",{value:e,configurable:!0}),o}function d$(n,t){const e=E(n,"real","complex"),s=E(t,"imag","complex");Hu(e.shape,s.shape,`real and imag shapes, ${e.shape} and ${s.shape}, must match in call to tf.complex().`);const o={real:e,imag:s};return _.runKernel(nh,o)}const qs=P({complex_:d$});function sc(n,t,e,s){if(s==null)s=Wo(n);else if(s==="complex64")throw new Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");if(gg(n)||mg(n)){if(s!=="float32"&&s!=="int32")throw new Error(`Creating tensor from GPU data only supports 'float32'|'int32' dtype, while the dtype is ${s}.`);return _.backend.createTensorFromGPUData(n,t||e,s)}if(!an(n)&&!Array.isArray(n)&&typeof n!="number"&&typeof n!="boolean"&&typeof n!="string")throw new Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");if(t!=null){Jn(t);const o=H(t),r=H(e);v(o===r,()=>`Based on the provided shape, [${t}], the tensor should have ${o} values but has ${r}`);for(let i=0;i<e.length;++i){const a=e[i],l=i===e.length-1?a!==H(t.slice(i)):!0;v(e[i]===t[i]||!l,()=>`Error creating a new Tensor. Inferred shape (${e}) does not match the provided shape (${t}). `)}}return!an(n)&&!Array.isArray(n)&&(n=[n]),t=t||e,n=s!=="string"?io(n,s):js(n,[],!0),_.makeTensor(n,t,s)}function So(n,t,e){const s=nc(n,e);return sc(n,t,s,e)}const Ra={float32:4,float16:2,int32:4,uint16:2,uint8:1,bool:1,complex64:8};class Is{static join(t){return new Is(t).slice()}constructor(t){if(this.shards=[],this.previousShardIndex=0,t==null||(t instanceof Array||(t=[t]),t=t.map(s=>an(s)?s.buffer:s),t.length===0))return;this.bufferUniformSize=t[0].byteLength;let e=0;for(let s=0;s<t.length;s++){const o=t[s];s!==t.length-1&&o.byteLength!==this.bufferUniformSize&&(this.bufferUniformSize=void 0);const r=e+o.byteLength;this.shards.push({buffer:o,start:e,end:r}),e=r}this.shards.length===0&&(this.byteLength=0),this.byteLength=this.shards[this.shards.length-1].end}slice(t=0,e=this.byteLength){if(this.shards.length===0)return new ArrayBuffer(0);if(t=isNaN(Number(t))?0:t,e=isNaN(Number(e))?0:e,t=Math.max(0,t),e=Math.min(this.byteLength,e),e<=t)return new ArrayBuffer(0);const s=this.findShardForByte(t);if(s===-1)throw new Error(`Could not find start shard for byte ${t}`);const o=e-t,r=new ArrayBuffer(o),i=new Uint8Array(r);let a=0;for(let l=s;l<this.shards.length;l++){const c=this.shards[l],h=t+a-c.start,d=a,f=Math.min(e,c.end)-c.start,m=new Uint8Array(c.buffer,h,f-h);if(i.set(m,d),a+=m.length,e<c.end)break}return r}findShardForByte(t){if(this.shards.length===0||t<0||t>=this.byteLength)return-1;if(this.bufferUniformSize!=null)return this.previousShardIndex=Math.floor(t/this.bufferUniformSize),this.previousShardIndex;function e(o){return t<o.start?-1:t>=o.end?1:0}if(e(this.shards[this.previousShardIndex])===0)return this.previousShardIndex;const s=p$(this.shards,e);return s===-1?-1:(this.previousShardIndex=s,this.previousShardIndex)}}function p$(n,t){let e=0,s=n.length;for(;e<=s;){const o=Math.floor((s-e)/2)+e,r=t(n[o]);if(r===0)return o;r<0?s=o:e=o+1}return-1}function kn(){return _}function Xp(){return _.memory()}function B(n,t){return _.tidy(n,t)}function yt(n){xg(n).forEach(e=>e.dispose())}function Dn(n){return _.keep(n)}function vg(n,t,e=1){return _.registerBackend(n,t,e)}function f$(){return _.backend}const Fo=4;async function Yp(n,t){const e=[],s=[],o=Array.isArray(n)?n.map(i=>i.name):Object.keys(n);for(let i=0;i<o.length;++i){const a=o[i],l=Array.isArray(n)?n[i].tensor:n[a];if(l.dtype!=="float32"&&l.dtype!=="int32"&&l.dtype!=="bool"&&l.dtype!=="string"&&l.dtype!=="complex64")throw new Error(`Unsupported dtype in weight '${a}': ${l.dtype}`);const c={name:a,shape:l.shape,dtype:l.dtype};if(l.dtype==="string"){const u=new Promise(async h=>{const d=await l.bytes(),p=d.reduce((g,x)=>g+x.length,0)+Fo*d.length,f=new Uint8Array(p);let m=0;for(let g=0;g<d.length;g++){const x=d[g],b=new Uint8Array(new Uint32Array([x.length]).buffer);f.set(b,m),m+=Fo,f.set(x,m),m+=x.length}h(f)});s.push(u)}else s.push(l.data());t!=null&&(c.group=t),e.push(c)}const r=await Promise.all(s);return{data:b$(r),specs:e}}function m$(n,t){const e=new Is(n),s={};let o=0;for(const r of t){const i=g$(r,(a,l)=>e.slice(o+a,o+l));s[r.name]=x$(r,e.slice(o,o+i)),o+=i}return s}function g$(n,t){const e=H(n.shape);let s;if("quantization"in n){const o=n.quantization;s=Ra[o.dtype]}else if(n.dtype==="string"){let o=0;for(let r=0;r<e;r++)o+=Fo+new Uint32Array(t(o,o+Fo))[0];return o}else s=Ra[n.dtype];return e*s}function x$(n,t){const e=n.name,s=n.dtype,o=n.shape,r=H(o);let i,a=0;if("quantization"in n){const l=n.quantization;if(l.dtype==="uint8"||l.dtype==="uint16"){if(!("min"in l&&"scale"in l))throw new Error(`Weight ${n.name} with quantization ${l.dtype} doesn't have corresponding metadata min and scale.`)}else if(l.dtype==="float16"){if(s!=="float32")throw new Error(`Weight ${n.name} is quantized with ${l.dtype} which only supports weights of type float32 not ${s}.`)}else throw new Error(`Weight ${n.name} has unknown quantization dtype ${l.dtype}. Supported quantization dtypes are: 'uint8', 'uint16', and 'float16'.`);const c=Ra[l.dtype],u=l.dtype==="uint8"?new Uint8Array(t):new Uint16Array(t);if(s==="float32")if(l.dtype==="uint8"||l.dtype==="uint16"){i=new Float32Array(u.length);for(let h=0;h<u.length;h++){const d=u[h];i[h]=d*l.scale+l.min}}else if(l.dtype==="float16")i=T$()(u);else throw new Error(`Unsupported quantization type ${l.dtype} for weight type float32.`);else if(s==="int32"){if(l.dtype!=="uint8"&&l.dtype!=="uint16")throw new Error(`Unsupported quantization type ${l.dtype} for weight type int32.`);i=new Int32Array(u.length);for(let h=0;h<u.length;h++){const d=u[h];i[h]=Math.round(d*l.scale+l.min)}}else throw new Error(`Unsupported dtype in weight '${e}': ${s}`);a+=r*c}else if(s==="string"){const l=H(n.shape);i=[];for(let c=0;c<l;c++){const u=new Uint32Array(t.slice(a,a+Fo))[0];a+=Fo;const h=new Uint8Array(t.slice(a,a+u));i.push(h),a+=u}}else{const l=Ra[s];if(s==="float32")i=new Float32Array(t);else if(s==="int32")i=new Int32Array(t);else if(s==="bool")i=new Uint8Array(t);else if(s==="complex64"){i=new Float32Array(t);const c=new Float32Array(i.length/2),u=new Float32Array(i.length/2);for(let f=0;f<c.length;f++)c[f]=i[f*2],u[f]=i[f*2+1];const h=So(c,o,"float32"),d=So(u,o,"float32"),p=qs(h,d);return h.dispose(),d.dispose(),p}else throw new Error(`Unsupported dtype in weight '${e}': ${s}`);a+=r*l}return So(i,o,s)}function b$(n){if(n===null)throw new Error(`Invalid input value: ${JSON.stringify(n)}`);let t=0;const e=[];n.forEach(r=>{if(t+=r.byteLength,e.push(r.byteLength===r.buffer.byteLength?r:new r.constructor(r)),!(r instanceof Float32Array||r instanceof Int32Array||r instanceof Uint8Array))throw new Error(`Unsupported TypedArray subtype: ${r.constructor.name}`)});const s=new Uint8Array(t);let o=0;return e.forEach(r=>{s.set(new Uint8Array(r.buffer),o),o+=r.byteLength}),s.buffer}const Ph=typeof Buffer<"u"&&(typeof Blob>"u"||typeof atob>"u"||typeof btoa>"u");function Zp(n){return Ph?Buffer.byteLength(n,"utf8"):new Blob([n]).size}function y$(n){if(Ph)return Buffer.from(n).toString("base64");const t=new Uint8Array(n);let e="";for(let s=0,o=t.length;s<o;s++)e+=String.fromCharCode(t[s]);return btoa(e)}function w$(n){if(Ph){const s=Buffer.from(n,"base64");return s.buffer.slice(s.byteOffset,s.byteOffset+s.byteLength)}const t=atob(n),e=new Uint8Array(t.length);for(let s=0;s<t.length;++s)e.set([t.charCodeAt(s)],s);return e.buffer}function C$(n){return Is.join(n)}function $$(n,t){const e={modelTopology:n.modelTopology,format:n.format,generatedBy:n.generatedBy,convertedBy:n.convertedBy,weightsManifest:t};return n.signature!=null&&(e.signature=n.signature),n.userDefinedMetadata!=null&&(e.userDefinedMetadata=n.userDefinedMetadata),n.modelInitializer!=null&&(e.modelInitializer=n.modelInitializer),n.initializerSignature!=null&&(e.initializerSignature=n.initializerSignature),n.trainingConfig!=null&&(e.trainingConfig=n.trainingConfig),e}function I$(n,t,e){const s={modelTopology:n.modelTopology,format:n.format,generatedBy:n.generatedBy,convertedBy:n.convertedBy};if(n.trainingConfig!=null&&(s.trainingConfig=n.trainingConfig),n.weightsManifest!=null){if(!t)throw new Error("modelJSON has weightsManifest but weightSpecs is null");if(!e)throw new Error("modelJSON has weightsManifest but weightData is null");s.weightSpecs=t,s.weightData=e}return n.signature!=null&&(s.signature=n.signature),n.userDefinedMetadata!=null&&(s.userDefinedMetadata=n.userDefinedMetadata),n.modelInitializer!=null&&(s.modelInitializer=n.modelInitializer),n.initializerSignature!=null&&(s.initializerSignature=n.initializerSignature),s}async function v$(n,t){let e,s;return n.weightsManifest!=null&&([e,s]=await t(n.weightsManifest)),I$(n,e,s)}function zh(n){if(n.modelTopology instanceof ArrayBuffer)throw new Error("Expected JSON model topology, received ArrayBuffer.");return{dateSaved:new Date,modelTopologyType:"JSON",modelTopologyBytes:n.modelTopology==null?0:Zp(JSON.stringify(n.modelTopology)),weightSpecsBytes:n.weightSpecs==null?0:Zp(JSON.stringify(n.weightSpecs)),weightDataBytes:n.weightData==null?0:new Is(n.weightData).byteLength}}function Jp(n){const t=[];for(const e of n)t.push(...e.weights);return t}function k$(){const n=e=>{let s=e<<13,o=0;for(;(s&8388608)===0;)o-=8388608,s<<=1;return s&=-8388609,o+=947912704,s|o},t=new Uint32Array(2048);t[0]=0;for(let e=1;e<1024;e++)t[e]=n(e);for(let e=1024;e<2048;e++)t[e]=939524096+(e-1024<<13);return t}function S$(){const n=new Uint32Array(64);n[0]=0,n[31]=1199570944,n[32]=2147483648,n[63]=3347054592;for(let t=1;t<31;t++)n[t]=t<<23;for(let t=33;t<63;t++)n[t]=2147483648+(t-32<<23);return n}function N$(){const n=new Uint32Array(64);for(let t=0;t<64;t++)n[t]=1024;return n[0]=n[32]=0,n}function T$(){const n=k$(),t=S$(),e=N$();return s=>{const o=new ArrayBuffer(4*s.length),r=new Uint32Array(o);for(let i=0;i<s.length;i++){const a=s[i],l=n[e[a>>10]+(a&1023)]+t[a>>10];r[i]=l}return new Float32Array(o)}}class ue{constructor(){this.saveRouters=[],this.loadRouters=[]}static getInstance(){return ue.instance==null&&(ue.instance=new ue),ue.instance}static registerSaveRouter(t){ue.getInstance().saveRouters.push(t)}static registerLoadRouter(t){ue.getInstance().loadRouters.push(t)}static getSaveHandlers(t){return ue.getHandlers(t,"save")}static getLoadHandlers(t,e){return ue.getHandlers(t,"load",e)}static getHandlers(t,e,s){const o=[];return(e==="load"?ue.getInstance().loadRouters:ue.getInstance().saveRouters).forEach(i=>{const a=i(t,s);a!==null&&o.push(a)}),o}}const E$=n=>ue.getSaveHandlers(n),R$=(n,t)=>ue.getLoadHandlers(n,t);const gu="tensorflowjs",xu=1,Bs="models_store",ls="model_info_store";function kg(){if(!W().getBool("IS_BROWSER"))throw new Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");const n=typeof window>"u"?self:window,t=n.indexedDB||n.mozIndexedDB||n.webkitIndexedDB||n.msIndexedDB||n.shimIndexedDB;if(t==null)throw new Error("The current browser does not appear to support IndexedDB.");return t}function bu(n){const t=n.result;t.createObjectStore(Bs,{keyPath:"modelPath"}),t.createObjectStore(ls,{keyPath:"modelPath"})}class Ks{constructor(t){if(this.indexedDB=kg(),t==null||!t)throw new Error("For IndexedDB, modelPath must not be null, undefined or empty.");this.modelPath=t}async save(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");return this.databaseAction(this.modelPath,t)}async load(){return this.databaseAction(this.modelPath)}databaseAction(t,e){return new Promise((s,o)=>{const r=this.indexedDB.open(gu,xu);r.onupgradeneeded=()=>bu(r),r.onsuccess=()=>{const i=r.result;if(e==null){const a=i.transaction(Bs,"readonly"),c=a.objectStore(Bs).get(this.modelPath);c.onsuccess=()=>{if(c.result==null)return i.close(),o(new Error(`Cannot find model with path '${this.modelPath}' in IndexedDB.`));s(c.result.modelArtifacts)},c.onerror=u=>(i.close(),o(c.error)),a.oncomplete=()=>i.close()}else{e.weightData=Is.join(e.weightData);const a=zh(e),l=i.transaction(ls,"readwrite");let c=l.objectStore(ls),u;try{u=c.put({modelPath:this.modelPath,modelArtifactsInfo:a})}catch(d){return o(d)}let h;u.onsuccess=()=>{h=i.transaction(Bs,"readwrite");const d=h.objectStore(Bs);let p;try{p=d.put({modelPath:this.modelPath,modelArtifacts:e,modelArtifactsInfo:a})}catch(f){return o(f)}p.onsuccess=()=>s({modelArtifactsInfo:a}),p.onerror=f=>{c=l.objectStore(ls);const m=c.delete(this.modelPath);m.onsuccess=()=>(i.close(),o(p.error)),m.onerror=g=>(i.close(),o(p.error))}},u.onerror=d=>(i.close(),o(u.error)),l.oncomplete=()=>{h==null?i.close():h.oncomplete=()=>i.close()}}},r.onerror=i=>o(r.error)})}}Ks.URL_SCHEME="indexeddb://";const Sg=n=>W().getBool("IS_BROWSER")&&!Array.isArray(n)&&n.startsWith(Ks.URL_SCHEME)?A$(n.slice(Ks.URL_SCHEME.length)):null;ue.registerSaveRouter(Sg);ue.registerLoadRouter(Sg);function A$(n){return new Ks(n)}function D$(n){return n.startsWith(Ks.URL_SCHEME)?n.slice(Ks.URL_SCHEME.length):n}class F${constructor(){this.indexedDB=kg()}async listModels(){return new Promise((t,e)=>{const s=this.indexedDB.open(gu,xu);s.onupgradeneeded=()=>bu(s),s.onsuccess=()=>{const o=s.result,r=o.transaction(ls,"readonly"),a=r.objectStore(ls).getAll();a.onsuccess=()=>{const l={};for(const c of a.result)l[c.modelPath]=c.modelArtifactsInfo;t(l)},a.onerror=l=>(o.close(),e(a.error)),r.oncomplete=()=>o.close()},s.onerror=o=>e(s.error)})}async removeModel(t){return t=D$(t),new Promise((e,s)=>{const o=this.indexedDB.open(gu,xu);o.onupgradeneeded=()=>bu(o),o.onsuccess=()=>{const r=o.result,i=r.transaction(ls,"readwrite"),a=i.objectStore(ls),l=a.get(t);let c;l.onsuccess=()=>{if(l.result==null)return r.close(),s(new Error(`Cannot find model with path '${t}' in IndexedDB.`));{const u=a.delete(t),h=()=>{c=r.transaction(Bs,"readwrite");const p=c.objectStore(Bs).delete(t);p.onsuccess=()=>e(l.result.modelArtifactsInfo),p.onerror=f=>s(l.error)};u.onsuccess=h,u.onerror=d=>(h(),r.close(),s(l.error))}},l.onerror=u=>(r.close(),s(l.error)),i.oncomplete=()=>{c==null?r.close():c.oncomplete=()=>r.close()}},o.onerror=r=>s(o.error)})}}const qn="/",$o="tensorflowjs_models",Ng="info",_$="model_topology",O$="weight_specs",M$="weight_data",L$="model_metadata";function Tg(n){return{info:[$o,n,Ng].join(qn),topology:[$o,n,_$].join(qn),weightSpecs:[$o,n,O$].join(qn),weightData:[$o,n,M$].join(qn),modelMetadata:[$o,n,L$].join(qn)}}function Eg(n){for(const t of Object.values(n))window.localStorage.removeItem(t)}function P$(n){const t=n.split(qn);if(t.length<3)throw new Error(`Invalid key format: ${n}`);return t.slice(1,t.length-1).join(qn)}function z$(n){return n.startsWith(Xs.URL_SCHEME)?n.slice(Xs.URL_SCHEME.length):n}class Xs{constructor(t){if(!W().getBool("IS_BROWSER")||typeof window>"u"||typeof window.localStorage>"u")throw new Error("The current environment does not support local storage.");if(this.LS=window.localStorage,t==null||!t)throw new Error("For local storage, modelPath must not be null, undefined or empty.");this.modelPath=t,this.keys=Tg(this.modelPath)}async save(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");{const e=JSON.stringify(t.modelTopology),s=JSON.stringify(t.weightSpecs),o=zh(t),r=Is.join(t.weightData);try{this.LS.setItem(this.keys.info,JSON.stringify(o)),this.LS.setItem(this.keys.topology,e),this.LS.setItem(this.keys.weightSpecs,s),this.LS.setItem(this.keys.weightData,y$(r));const i={format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,signature:t.signature!=null?t.signature:void 0,userDefinedMetadata:t.userDefinedMetadata!=null?t.userDefinedMetadata:void 0,modelInitializer:t.modelInitializer!=null?t.modelInitializer:void 0,initializerSignature:t.initializerSignature!=null?t.initializerSignature:void 0,trainingConfig:t.trainingConfig!=null?t.trainingConfig:void 0};return this.LS.setItem(this.keys.modelMetadata,JSON.stringify(i)),{modelArtifactsInfo:o}}catch{throw Eg(this.keys),new Error(`Failed to save model '${this.modelPath}' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes=${o.modelTopologyBytes}, weightSpecsBytes=${o.weightSpecsBytes}, weightDataBytes=${o.weightDataBytes}.`)}}}async load(){const t=JSON.parse(this.LS.getItem(this.keys.info));if(t==null)throw new Error(`In local storage, there is no model with name '${this.modelPath}'`);if(t.modelTopologyType!=="JSON")throw new Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");const e={},s=JSON.parse(this.LS.getItem(this.keys.topology));if(s==null)throw new Error(`In local storage, the topology of model '${this.modelPath}' is missing.`);e.modelTopology=s;const o=JSON.parse(this.LS.getItem(this.keys.weightSpecs));if(o==null)throw new Error(`In local storage, the weight specs of model '${this.modelPath}' are missing.`);e.weightSpecs=o;const r=this.LS.getItem(this.keys.modelMetadata);if(r!=null){const a=JSON.parse(r);e.format=a.format,e.generatedBy=a.generatedBy,e.convertedBy=a.convertedBy,a.signature!=null&&(e.signature=a.signature),a.userDefinedMetadata!=null&&(e.userDefinedMetadata=a.userDefinedMetadata),a.modelInitializer!=null&&(e.modelInitializer=a.modelInitializer),a.initializerSignature!=null&&(e.initializerSignature=a.initializerSignature),a.trainingConfig!=null&&(e.trainingConfig=a.trainingConfig)}const i=this.LS.getItem(this.keys.weightData);if(i==null)throw new Error(`In local storage, the binary weight values of model '${this.modelPath}' are missing.`);return e.weightData=w$(i),e}}Xs.URL_SCHEME="localstorage://";const Rg=n=>W().getBool("IS_BROWSER")&&!Array.isArray(n)&&n.startsWith(Xs.URL_SCHEME)?B$(n.slice(Xs.URL_SCHEME.length)):null;ue.registerSaveRouter(Rg);ue.registerLoadRouter(Rg);function B$(n){return new Xs(n)}class V${constructor(){v(W().getBool("IS_BROWSER"),()=>"Current environment is not a web browser"),v(typeof window>"u"||typeof window.localStorage<"u",()=>"Current browser does not appear to support localStorage"),this.LS=window.localStorage}async listModels(){const t={},e=$o+qn,s=qn+Ng;for(let o=0;o<this.LS.length;++o){const r=this.LS.key(o);if(r.startsWith(e)&&r.endsWith(s)){const i=P$(r);t[i]=JSON.parse(this.LS.getItem(r))}}return t}async removeModel(t){t=z$(t);const e=Tg(t);if(this.LS.getItem(e.info)==null)throw new Error(`Cannot find model at path '${t}'`);const s=JSON.parse(this.LS.getItem(e.info));return Eg(e),s}}const Qp="://";class Sn{constructor(){this.managers={}}static getInstance(){return Sn.instance==null&&(Sn.instance=new Sn),Sn.instance}static registerManager(t,e){v(t!=null,()=>"scheme must not be undefined or null."),t.endsWith(Qp)&&(t=t.slice(0,t.indexOf(Qp))),v(t.length>0,()=>"scheme must not be an empty string.");const s=Sn.getInstance();v(s.managers[t]==null,()=>`A model store manager is already registered for scheme '${t}'.`),s.managers[t]=e}static getManager(t){const e=Sn.getInstance().managers[t];if(e==null)throw new Error(`Cannot find model manager for scheme '${t}'`);return e}static getSchemes(){return Object.keys(Sn.getInstance().managers)}}class W${constructor(){this.messageName="setTimeoutCustom",this.functionRefs=[],this.handledMessageCount=0,this.hasEventListener=!1}fetch(t,e){return fetch(t,e)}now(){return performance.now()}encode(t,e){if(e!=="utf-8"&&e!=="utf8")throw new Error(`Browser's encoder only supports utf-8, but got ${e}`);return this.textEncoder==null&&(this.textEncoder=new TextEncoder),this.textEncoder.encode(t)}decode(t,e){return new TextDecoder(e).decode(t)}setTimeoutCustom(t,e){if(typeof window>"u"||!W().getBool("USE_SETTIMEOUTCUSTOM")){setTimeout(t,e);return}this.functionRefs.push(t),setTimeout(()=>{window.postMessage({name:this.messageName,index:this.functionRefs.length-1},"*")},e),this.hasEventListener||(this.hasEventListener=!0,window.addEventListener("message",s=>{if(s.source===window&&s.data.name===this.messageName){s.stopPropagation();const o=this.functionRefs[s.data.index];o(),this.handledMessageCount++,this.handledMessageCount===this.functionRefs.length&&(this.functionRefs=[],this.handledMessageCount=0)}},!0))}isTypedArray(t){return cg(t)}}if(W().get("IS_BROWSER")){W().setPlatform("browser",new W$);try{Sn.registerManager(Xs.URL_SCHEME,new V$)}catch{}try{Sn.registerManager(Ks.URL_SCHEME,new F$)}catch{}}const U$={importFetch:()=>require("node-fetch")};let zc;class G${constructor(){this.util=require("util"),this.textEncoder=new this.util.TextEncoder}fetch(t,e){return W().global.fetch!=null?W().global.fetch(t,e):(zc==null&&(zc=U$.importFetch()),zc(t,e))}now(){const t=process.hrtime();return t[0]*1e3+t[1]/1e6}encode(t,e){if(e!=="utf-8"&&e!=="utf8")throw new Error(`Node built-in encoder only supports utf-8, but got ${e}`);return this.textEncoder.encode(t)}decode(t,e){return t.length===0?"":new this.util.TextDecoder(e).decode(t)}isTypedArray(t){return this.util.types.isFloat32Array(t)||this.util.types.isInt32Array(t)||this.util.types.isUint8Array(t)||this.util.types.isUint8ClampedArray(t)}}W().get("IS_NODE")&&!W().get("IS_BROWSER")&&W().setPlatform("node",new G$);function wt(n,t="float32",e){return t=t||"float32",Jn(n),new xe(n,t,e)}function H$(n,t){const e=E(n,"x","cast");if(!kC(t))throw new Error(`Failed to cast to unknown dtype ${t}`);if(t==="string"&&e.dtype!=="string"||t!=="string"&&e.dtype==="string")throw new Error("Only strings can be casted to strings");const s={x:e},o={dtype:t};return _.runKernel(Br,s,o)}const st=P({cast_:H$});function j$(n){const e={x:E(n,"x","clone","string_or_numeric")};return _.runKernel(Qr,e)}const Ws=P({clone_:j$});function q$(n,t=!1){console.log(n.toString(t))}yg();const K$={buffer:wt,cast:st,clone:Ws,print:q$};r$(K$);function X$(n,t){let e=E(n,"a","add"),s=E(t,"b","add");[e,s]=Jt(e,s);const o={a:e,b:s};return _.runKernel(Go,o)}const J=P({add_:X$});function Y$(n,t){let e=E(n,"a","floorDiv"),s=E(t,"b","floorDiv");[e,s]=Jt(e,s);const o={a:e,b:s};return _.runKernel(Zr,o)}const Ag=P({floorDiv_:Y$});function Z$(n,t){let e=E(n,"a","div"),s=E(t,"b","div");if([e,s]=Jt(e,s),e.dtype==="int32"&&s.dtype==="int32")return Ag(e,s);const o={a:e,b:s},r={};return _.runKernel(Hr,o,r)}const ut=P({div_:Z$});function J$(n,t){let e=E(n,"a","mul"),s=E(t,"b","mul");[e,s]=Jt(e,s);const o={a:e,b:s};return _.runKernel(li,o)}const F=P({mul_:J$});function Q$(n){const t=E(n,"x","abs");if(t.dtype==="complex64"){const e={x:t};return _.runKernel(ll,e)}else{const e={x:t};return _.runKernel(el,e)}}const Ne=P({abs_:Q$});function tI(n){const e={x:E(n,"x","acos")};return _.runKernel(Fr,e)}const eI=P({acos_:tI});function nI(n){const e={x:E(n,"x","acosh")};return _.runKernel(_r,e)}const sI=P({acosh_:nI});function oI(n,t=null,e=!1){const o={x:E(n,"x","all","bool")},r={axis:t,keepDims:e};return _.runKernel(Yu,o,r)}const Dg=P({all_:oI});function rI(n,t=null,e=!1){const o={x:E(n,"x","any","bool")},r={axis:t,keepDims:e};return _.runKernel(Zu,o,r)}const yu=P({any_:rI});function iI(n,t=0){const s={x:E(n,"x","argMax")},o={axis:t};return _.runKernel(nl,s,o)}const yr=P({argMax_:iI});function aI(n,t=0){const s={x:E(n,"x","argMin")},o={axis:t};return _.runKernel(sl,s,o)}const lI=P({argMin_:aI});function cI(n){const e={x:E(n,"x","asin")};return _.runKernel(Or,e)}const uI=P({asin_:cI});function hI(n){const e={x:E(n,"x","asinh")};return _.runKernel(Mr,e)}const dI=P({asinh_:hI});function pI(n){const e={x:E(n,"x","atan")};return _.runKernel(Lr,e)}const fI=P({atan_:pI});function mI(n,t){let e=E(n,"a","atan2"),s=E(t,"b","atan2");[e,s]=Jt(e,s);const o={a:e,b:s};return _.runKernel(zr,o)}const gI=P({atan2_:mI});function xI(n){const e={x:E(n,"x","atanh")};return _.runKernel(Pr,e)}const bI=P({atanh_:xI});function Ti(n,t,e,s,o="NHWC",r){const i=n[3],a=[...t,i],l=ts(o);return be(n,a,e,r,s,null,null,l)}function cn(n,t,e,s,o,r,i="channelsLast"){const[a,l]=wr(t);let c;if(i==="channelsLast")c=[a,l,n[3],n[3]];else if(i==="channelsFirst")c=[a,l,n[1],n[1]];else throw new Error(`Unknown dataFormat ${i}`);return be(n,c,e,s,o,r,!1,i)}function Qn(n,t,e,s,o,r,i="NDHWC"){const[a,l,c]=wu(t);let u,h;if(i==="NDHWC")h="channelsLast",u=[a,l,c,n[4],n[4]];else if(i==="NCDHW")h="channelsFirst",u=[a,l,c,n[1],n[1]];else throw new Error(`Unknown dataFormat ${i}`);return vs(n,u,e,s,o,!1,h,r)}function be(n,t,e,s,o,r,i=!1,a="channelsLast"){let[l,c,u,h]=[-1,-1,-1,-1];if(a==="channelsLast")[l,c,u,h]=n;else if(a==="channelsFirst")[l,h,c,u]=n;else throw new Error(`Unknown dataFormat ${a}`);const[d,p,,f]=t,[m,g]=wr(e),[x,b]=wr(s),w=No(d,x),y=No(p,b),{padInfo:C,outHeight:I,outWidth:N}=CI(o,c,u,m,g,w,y,r,a),T=i?f*h:f;let k;return a==="channelsFirst"?k=[l,T,I,N]:a==="channelsLast"&&(k=[l,I,N,T]),{batchSize:l,dataFormat:a,inHeight:c,inWidth:u,inChannels:h,outHeight:I,outWidth:N,outChannels:T,padInfo:C,strideHeight:m,strideWidth:g,filterHeight:d,filterWidth:p,effectiveFilterHeight:w,effectiveFilterWidth:y,dilationHeight:x,dilationWidth:b,inShape:n,outShape:k,filterShape:t}}function vs(n,t,e,s,o,r=!1,i="channelsLast",a){let[l,c,u,h,d]=[-1,-1,-1,-1,-1];if(i==="channelsLast")[l,c,u,h,d]=n;else if(i==="channelsFirst")[l,d,c,u,h]=n;else throw new Error(`Unknown dataFormat ${i}`);const[p,f,m,,g]=t,[x,b,w]=wu(e),[y,C,I]=wu(s),N=No(p,y),T=No(f,C),k=No(m,I),{padInfo:S,outDepth:$,outHeight:R,outWidth:A}=$I(o,c,u,h,x,b,w,N,T,k,a),O=r?g*d:g;let M;return i==="channelsFirst"?M=[l,O,$,R,A]:i==="channelsLast"&&(M=[l,$,R,A,O]),{batchSize:l,dataFormat:i,inDepth:c,inHeight:u,inWidth:h,inChannels:d,outDepth:$,outHeight:R,outWidth:A,outChannels:O,padInfo:S,strideDepth:x,strideHeight:b,strideWidth:w,filterDepth:p,filterHeight:f,filterWidth:m,effectiveFilterDepth:N,effectiveFilterHeight:T,effectiveFilterWidth:k,dilationDepth:y,dilationHeight:C,dilationWidth:I,inShape:n,outShape:M,filterShape:t}}function yI(n,t,e,s,o){s==null&&(s=Bh(n,t,e));const r=n[0],i=n[1],a=Cr((r-t+2*s)/e+1,o),l=Cr((i-t+2*s)/e+1,o);return[a,l]}function wI(n,t,e,s,o,r){o==null&&(o=Bh(n,t[0],s[0]));const i=[0,0,0,e];for(let a=0;a<3;a++)n[a]+2*o>=t[a]&&(i[a]=Cr((n[a]-t[a]+2*o)/s[a]+1,r));return i}function Bh(n,t,e,s=1){const o=No(t,s);return Math.floor((n[0]*(e-1)-e+o)/2)}function wr(n){return typeof n=="number"?[n,n,n]:n.length===2?[n[0],n[1],1]:n}function wu(n){return typeof n=="number"?[n,n,n]:n}function No(n,t){return t<=1?n:n+(n-1)*(t-1)}function CI(n,t,e,s,o,r,i,a,l){let c,u,h;if(typeof n=="number"){c={top:n,bottom:n,left:n,right:n,type:n===0?"VALID":"NUMBER"};const p=yI([t,e],r,s,n,a);u=p[0],h=p[1]}else if(n==="same"){u=Math.ceil(t/s),h=Math.ceil(e/o);const d=Math.max(0,(u-1)*s+r-t),p=Math.max(0,(h-1)*o+i-e),f=Math.floor(d/2),m=d-f,g=Math.floor(p/2),x=p-g;c={top:f,bottom:m,left:g,right:x,type:"SAME"}}else if(n==="valid")c={top:0,bottom:0,left:0,right:0,type:"VALID"},u=Math.ceil((t-r+1)/s),h=Math.ceil((e-i+1)/o);else if(typeof n=="object"){const d=l==="channelsLast"?n[1][0]:n[2][0],p=l==="channelsLast"?n[1][1]:n[2][1],f=l==="channelsLast"?n[2][0]:n[3][0],m=l==="channelsLast"?n[2][1]:n[3][1];c={top:d,bottom:p,left:f,right:m,type:d===0&&p===0&&f===0&&m===0?"VALID":"EXPLICIT"},u=Cr((t-r+d+p)/s+1,a),h=Cr((e-i+f+m)/o+1,a)}else throw Error(`Unknown padding parameter: ${n}`);return{padInfo:c,outHeight:u,outWidth:h}}function $I(n,t,e,s,o,r,i,a,l,c,u){let h,d,p,f;if(n==="valid"&&(n=0),typeof n=="number"){h={top:n,bottom:n,left:n,right:n,front:n,back:n,type:n===0?"VALID":"NUMBER"};const g=wI([t,e,s,1],[a,l,c],1,[o,r,i],n,u);d=g[0],p=g[1],f=g[2]}else if(n==="same"){d=Math.ceil(t/o),p=Math.ceil(e/r),f=Math.ceil(s/i);const m=(d-1)*o+a-t,g=(p-1)*r+l-e,x=(f-1)*i+c-s,b=Math.floor(m/2),w=m-b,y=Math.floor(g/2),C=g-y,I=Math.floor(x/2),N=x-I;h={top:y,bottom:C,left:I,right:N,front:b,back:w,type:"SAME"}}else throw Error(`Unknown padding parameter: ${n}`);return{padInfo:h,outDepth:d,outHeight:p,outWidth:f}}function Cr(n,t){if(!t)return Math.trunc(n);switch(t){case"round":return Math.round(n);case"ceil":return Math.ceil(n);case"floor":return Math.floor(n);default:throw new Error(`Unknown roundingMode ${t}`)}}function Ys(n){const[t,e,s]=wr(n);return t===1&&e===1&&s===1}function ve(n,t){return Ys(n)||Ys(t)}function Zs(n){return wr(n).every(t=>t>0)}function ts(n){if(n==="NHWC")return"channelsLast";if(n==="NCHW")return"channelsFirst";throw new Error(`Unknown dataFormat ${n}`)}function ze(n,t,e){if(e!=null){if(typeof t=="string")throw Error(`Error in ${n}: pad must be an integer when using dimRoundingMode ${e} but got pad ${t}.`);if(typeof t=="number")v(Ao(t),()=>`Error in ${n}: pad must be an integer when using dimRoundingMode ${e} but got pad ${t}.`);else if(typeof t=="object")t.forEach(s=>{s.forEach(o=>{v(Ao(o),()=>`Error in ${n}: pad must be an integer when using dimRoundingMode ${e} but got pad ${o}.`)})});else throw Error(`Error in ${n}: Unknown padding parameter: ${t}`)}}function II(n,t){const s={x:E(n,"x","reshape","string_or_numeric")},o={shape:t};return _.runKernel(Wl,s,o)}const L=P({reshape_:II});function vI(n,t,e,s,o){const r=E(n,"x","avgPool","float32"),i=1;v(ve(e,i),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${e} and dilations '${i}'`);let a=r,l=!1;r.rank===3&&(l=!0,a=L(r,[1,r.shape[0],r.shape[1],r.shape[2]])),v(a.rank===4,()=>`Error in avgPool: x must be rank 4 but got rank ${a.rank}.`),ze("avgPool",s,o);const c={x:a},u={filterSize:t,strides:e,pad:s,dimRoundingMode:o};let h=_.runKernel(ol,c,u);return h=st(h,r.dtype),l?L(h,[h.shape[1],h.shape[2],h.shape[3]]):h}const Vh=P({avgPool_:vI});function kI(n,t,e,s,o,r="NDHWC"){const i=E(n,"x","avgPool3d","float32");let a=i,l=!1;i.rank===4&&(l=!0,a=L(i,[1,i.shape[0],i.shape[1],i.shape[2],i.shape[3]])),v(a.rank===5,()=>`Error in avgPool3d: x must be rank 5 but got rank ${a.rank}.`),v(r==="NDHWC",()=>`Error in avgPool3d: Only NDHWC is currently supported, but got dataFormat of ${r}`),v(typeof e=="number"&&e>0||Array.isArray(e)&&e[0]>0&&e[1]>0&&e[2]>0,()=>`Error in avgPool3d: Stride must be > 0, but got '${e}'`),ze("avgPool3d",s,o);const c={x:a},u={filterSize:t,strides:e,pad:s,dimRoundingMode:o,dataFormat:r};let h=_.runKernel(rl,c,u);return h=st(h,a.dtype),l?L(h,[h.shape[1],h.shape[2],h.shape[3],h.shape[4]]):h}const SI=P({avgPool3d_:kI});function NI(n,t=0){v(n.length>=1,()=>"Pass at least one tensor to concat");const e=Ig(n,"tensors","concat","string_or_numeric");if(e[0].dtype==="complex64"&&e.forEach(r=>{if(r.dtype!=="complex64")throw new Error(`Cannot concatenate complex64 tensors with a tensor
          with dtype ${r.dtype}. `)}),e.length===1)return Ws(e[0]);const s=e,o={axis:t};return _.runKernel(cl,s,o)}const Me=P({concat_:NI});function TI(n,t,e=!1,s=!1){let o=E(n,"a","matMul"),r=E(t,"b","matMul");[o,r]=Jt(o,r);const i={a:o,b:r},a={transposeA:e,transposeB:s};return _.runKernel(il,i,a)}const It=P({matMul_:TI});function EI(n){const e={x:E(n,"x","sigmoid","float32")};return _.runKernel(yi,e)}const Ho=P({sigmoid_:EI});function RI(n,t,e){const s=E(n,"x","slice","string_or_numeric");if(s.rank===0)throw new Error("Slicing scalar is not possible");const o={x:s},r={begin:t,size:e};return _.runKernel(ql,o,r)}const zt=P({slice_:RI});function AI(n){const e={x:E(n,"x","tanh","float32")};return _.runKernel(ki,e)}const oc=P({tanh_:AI});function DI(n,t,e){const s=E(n,"x","batchToSpaceND"),o=t.reduce((a,l)=>a*l);v(s.rank>=1+t.length,()=>`input rank is ${s.rank} but should be > than blockShape.length ${t.length}`),v(e.length===t.length,()=>`crops.length is ${e.length} but should be equal to blockShape.length  ${t.length}`),v(s.shape[0]%o===0,()=>`input tensor batch is ${s.shape[0]} but is not divisible by the product of the elements of blockShape ${t.join(" * ")} === ${o}`);const r={x:s},i={blockShape:t,crops:e};return _.runKernel(al,r,i)}const Wh=P({batchToSpaceND_:DI});function FI(n){let t;return n.rank===0||n.rank===1?t=L(n,[1,1,1,n.size]):n.rank===2?t=L(n,[1,1,n.shape[0],n.shape[1]]):n.rank===3?t=L(n,[1,n.shape[0],n.shape[1],n.shape[2]]):t=n,t}function _I(n,t,e,s,o,r){r==null&&(r=.001);const i=E(n,"x","batchNorm"),a=E(t,"mean","batchNorm"),l=E(e,"variance","batchNorm");let c;o!=null&&(c=E(o,"scale","batchNorm"));let u;s!=null&&(u=E(s,"offset","batchNorm")),v(a.rank===l.rank,()=>"Batch normalization gradient requires mean and variance to have equal ranks."),v(u==null||a.rank===u.rank,()=>"Batch normalization gradient requires mean and offset to have equal ranks."),v(c==null||a.rank===c.rank,()=>"Batch normalization gradient requires mean and scale to have equal ranks.");const d={x:FI(i),scale:c,offset:u,mean:a,variance:l},p={varianceEpsilon:r},f=_.runKernel(bl,d,p);return L(f,i.shape)}const rc=P({batchNorm_:_I});function OI(n,t,e,s,o,r){const i=E(n,"x","batchNorm"),a=E(t,"mean","batchNorm"),l=E(e,"variance","batchNorm");let c;o!=null&&(c=E(o,"scale","batchNorm"));let u;return s!=null&&(u=E(s,"offset","batchNorm")),v(i.rank===2,()=>`Error in batchNorm2D: x must be rank 2 but got rank ${i.rank}.`),v(a.rank===2||a.rank===1,()=>`Error in batchNorm2D: mean must be rank 2 or rank 1 but got rank ${a.rank}.`),v(l.rank===2||l.rank===1,()=>`Error in batchNorm2D: variance must be rank 2 or rank 1 but got rank ${l.rank}.`),c!=null&&v(c.rank===2||c.rank===1,()=>`Error in batchNorm2D: scale must be rank 2 or rank 1 but got rank ${c.rank}.`),u!=null&&v(u.rank===2||u.rank===1,()=>`Error in batchNorm2D: offset must be rank 2 or rank 1 but got rank ${u.rank}.`),rc(i,a,l,u,c,r)}const MI=P({batchNorm2d_:OI});function LI(n,t,e,s,o,r){const i=E(n,"x","batchNorm"),a=E(t,"mean","batchNorm"),l=E(e,"variance","batchNorm");let c;o!=null&&(c=E(o,"scale","batchNorm"));let u;return s!=null&&(u=E(s,"offset","batchNorm")),v(i.rank===3,()=>`Error in batchNorm3D: x must be rank 3 but got rank ${i.rank}.`),v(a.rank===3||a.rank===1,()=>`Error in batchNorm3D: mean must be rank 3 or rank 1 but got rank ${a.rank}.`),v(l.rank===3||l.rank===1,()=>`Error in batchNorm3D: variance must be rank 3 or rank 1 but got rank ${l.rank}.`),c!=null&&v(c.rank===3||c.rank===1,()=>`Error in batchNorm3D: scale must be rank 3 or rank 1 but got rank ${c.rank}.`),u!=null&&v(u.rank===3||u.rank===1,()=>`Error in batchNorm3D: offset must be rank 3 or rank 1 but got rank ${u.rank}.`),rc(i,a,l,u,c,r)}const PI=P({batchNorm3d_:LI});function zI(n,t,e,s,o,r){const i=E(n,"x","batchNorm"),a=E(t,"mean","batchNorm"),l=E(e,"variance","batchNorm");let c;o!=null&&(c=E(o,"scale","batchNorm"));let u;return s!=null&&(u=E(s,"offset","batchNorm")),v(i.rank===4,()=>`Error in batchNorm4D: x must be rank 4 but got rank ${i.rank}.`),v(a.rank===4||a.rank===1,()=>`Error in batchNorm4D: mean must be rank 4 or rank 1 but got rank ${a.rank}.`),v(l.rank===4||l.rank===1,()=>`Error in batchNorm4D: variance must be rank 4 or rank 1 but got rank ${l.rank}.`),c!=null&&v(c.rank===4||c.rank===1,()=>`Error in batchNorm4D: scale must be rank 4 or rank 1 but got rank ${c.rank}.`),u!=null&&v(u.rank===4||u.rank===1,()=>`Error in batchNorm4D: offset must be rank 4 or rank 1 but got rank ${u.rank}.`),rc(i,a,l,u,c,r)}const BI=P({batchNorm4d_:zI});function VI(n,t,e){const s=E(n,"x","bincount"),o=E(t,"weights","bincount");v(s.dtype==="int32",()=>`Error in bincount: input dtype must be int32, but got ${s.dtype}`),v(e>=0,()=>`size must be non-negative, but got ${e}.`),v(o.size===s.size||o.size===0,()=>`Error in bincount: weights must have the same size as input or0-length, but got input shape: ${s.shape}, weights shape: ${o.shape}.`);const r={x:s,weights:o},i={size:e};return _.runKernel(th,r,i)}const WI=P({bincount_:VI});function UI(n,t){let e=E(n,"broadcastTo","x");const s=e.shape;if(Jn(t),t.length<e.rank)throw new Error(`broadcastTo(): shape.length=${t.length} < input.rank=${e.rank}.`);if(t.length>e.rank){const c=e.shape.slice();for(;c.length<t.length;)c.unshift(1);e=L(e,c)}const o=e.shape,r=Array.from(t);for(let c=t.length-1;c>=0;c--)if(o[c]===t[c])r[c]=1;else if(e.shape[c]!==1)throw new Error(`broadcastTo(): [${s}] cannot be broadcast to [${t}].`);if(r.map((c,u)=>c>1?u:-1).filter(c=>c>=0).length===0)return Ws(e);const a={x:e},l={reps:r};return _.runKernel(Si,a,l)}const xr=P({broadcastTo_:UI});function GI(n){const e={x:E(n,"x","ceil","float32")};return _.runKernel(Vr,e)}const HI=P({ceil_:GI});function ic(n,t,e){Jn(n),e=e||Wo(t);const s={shape:n,value:t,dtype:e};return _.runKernel(mh,{},s)}function jI(n,t,e){const s=E(n,"x","clipByValue");if(v(t<=e,()=>`Error in clip: min (${t}) must be less than or equal to max (${e}).`),t===e)return ic(s.shape,t,s.dtype);const o={x:s},r={clipValueMin:t,clipValueMax:e};return _.runKernel(Wr,o,r)}const Ye=P({clipByValue_:jI});function qI(n){return Me(n,0)}const KI=P({concat1d_:qI});function XI(n,t){return Me(n,t)}const YI=P({concat2d_:XI});function ZI(n,t){return Me(n,t)}const JI=P({concat3d_:ZI});function QI(n,t){return Me(n,t)}const tv=P({concat4d_:QI});function ev(n,t,e,s,o="NHWC",r=[1,1],i){const a=E(n,"x","conv2d","float32"),l=E(t,"filter","conv2d","float32");let c=a,u=!1;a.rank===3&&(u=!0,c=L(a,[1,a.shape[0],a.shape[1],a.shape[2]])),v(c.rank===4,()=>`Error in conv2d: input must be rank 4, but got rank ${c.rank}.`),v(l.rank===4,()=>`Error in conv2d: filter must be rank 4, but got rank ${l.rank}.`),ze("conv2d",s,i);const h=o==="NHWC"?c.shape[3]:c.shape[1];v(h===l.shape[2],()=>`Error in conv2d: depth of input (${h}) must match input depth for filter ${l.shape[2]}.`),v(ve(e,r),()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${e} and dilations '${r}'`),v(Zs(r),()=>"Error in conv2D: Dilated rates should be larger than 0."),v(Zs(e),()=>"Error in conv2D: Strides should be larger than 0.");const d={x:c,filter:l},p={strides:e,pad:s,dataFormat:o,dilations:r,dimRoundingMode:i},f=_.runKernel(ul,d,p);return u?L(f,[f.shape[1],f.shape[2],f.shape[3]]):f}const Js=P({conv2d_:ev});function nv(n,t,e,s,o="NWC",r=1,i){const a=E(n,"x","conv1d"),l=E(t,"filter","conv1d");let c=a,u=!1;a.rank===2&&(u=!0,c=L(a,[1,a.shape[0],a.shape[1]])),v(c.rank===3,()=>`Error in conv1d: input must be rank 3, but got rank ${c.rank}.`),v(l.rank===3,()=>`Error in conv1d: filter must be rank 3, but got rank ${l.rank}.`),ze("conv1d",s,i),v(c.shape[2]===l.shape[1],()=>`Error in conv1d: depth of input (${c.shape[2]}) must match input depth for filter ${l.shape[1]}.`),v(ve(e,r),()=>`Error in conv1D: Either stride or dilation must be 1. Got stride ${e} and dilation '${r}'`),v(Zs(r),()=>"Error in conv1D: Dilated rates should be larger than 0."),v(Zs(e),()=>"Error in conv1D: Stride should be larger than 0."),v(o==="NWC",()=>`Error in conv1d: got dataFormat of ${o} but only NWC is currently supported.`);const h=L(l,[1,l.shape[0],l.shape[1],l.shape[2]]),d=L(c,[c.shape[0],1,c.shape[1],c.shape[2]]),g=Js(d,h,[1,e],s,"NHWC",[1,r],i);return u?L(g,[g.shape[2],g.shape[3]]):L(g,[g.shape[0],g.shape[2],g.shape[3]])}const Fg=P({conv1d_:nv});function sv(n,t,e,s,o,r="NHWC",i){v(n.length===t.rank,()=>`Length of inShape (${n.length}) and rank of dy (${t.rank}) must match`);let a=n,l=t,c=!1;t.rank===3&&(c=!0,l=L(t,[1,t.shape[0],t.shape[1],t.shape[2]]),a=[1,n[0],n[1],n[2]]),v(a.length===4,()=>`Error in conv2dDerInput: inShape must be length 4, but got length ${a.length}.`),v(l.rank===4,()=>`Error in conv2dDerInput: dy must be rank 4, but got rank ${l.rank}`),v(e.rank===4,()=>`Error in conv2dDerInput: filter must be rank 4, but got rank ${e.rank}`);const u=r==="NHWC"?a[3]:a[1],h=r==="NHWC"?l.shape[3]:l.shape[1];v(u===e.shape[2],()=>`Error in conv2dDerInput: depth of input (${u}) must match input depth for filter ${e.shape[2]}.`),v(h===e.shape[3],()=>`Error in conv2dDerInput: depth of output (${h}) must match output depth for filter ${e.shape[3]}.`),ze("conv2dDerInput",o,i);const d={dy:l,filter:e},p={strides:s,pad:o,dataFormat:r,dimRoundingMode:i,inputShape:a},f=_.runKernel(hl,d,p);return c?L(f,[f.shape[1],f.shape[2],f.shape[3]]):f}const Uh=P({conv2DBackpropInput_:sv});function ov(n,t,e,s,o,r){const i=E(n,"x","conv2dTranspose"),a=E(t,"filter","conv2dTranspose");return Uh(e,i,a,s,o,"NHWC",r)}const _g=P({conv2dTranspose_:ov});function rv(n,t,e,s,o="NDHWC",r=[1,1,1]){const i=E(n,"x","conv3d"),a=E(t,"filter","conv3d");let l=i,c=!1;i.rank===4&&(c=!0,l=L(i,[1,i.shape[0],i.shape[1],i.shape[2],i.shape[3]])),v(l.rank===5,()=>`Error in conv3d: input must be rank 5, but got rank ${l.rank}.`),v(a.rank===5,()=>`Error in conv3d: filter must be rank 5, but got rank ${a.rank}.`),v(l.shape[4]===a.shape[3],()=>`Error in conv3d: depth of input (${l.shape[4]}) must match input depth for filter ${a.shape[3]}.`),v(ve(e,r),()=>`Error in conv3D: Either strides or dilations must be 1. Got strides ${e} and dilations '${r}'`),v(o==="NDHWC",()=>`Error in conv3d: got dataFormat of ${o} but only NDHWC is currently supported.`),v(Zs(r),()=>"Error in conv3D: Dilated rates should be larger than 0."),v(Zs(e),()=>"Error in conv3D: Strides should be larger than 0.");const u={x:l,filter:a},h={strides:e,pad:s,dataFormat:o,dilations:r},d=_.runKernel(dl,u,h);return c?L(d,[d.shape[1],d.shape[2],d.shape[3],d.shape[4]]):d}const iv=P({conv3d_:rv});function av(n,t,e,s,o){v(n.length===t.rank,()=>`Length of inShape (${n.length}) and rank of dy (${t.rank}) must match`);let r=n,i=t,a=!1;t.rank===4&&(a=!0,i=L(t,[1,t.shape[0],t.shape[1],t.shape[2],t.shape[3]]),r=[1,n[0],n[1],n[2],n[3]]);const l=r[4],c=i.shape[4];v(r.length===5,()=>`Error in conv3dDerInput: inShape must be length 5, but got length ${r.length}.`),v(i.rank===5,()=>`Error in conv3dDerInput: dy must be rank 5, but got rank ${i.rank}`),v(e.rank===5,()=>`Error in conv3dDerInput: filter must be rank 5, but got rank ${e.rank}`),v(l===e.shape[3],()=>`Error in conv3dDerInput: depth of input (${l}) must match input depth for filter ${e.shape[3]}.`),v(c===e.shape[4],()=>`Error in conv3dDerInput: depth of output (${c}) must match output depth for filter ${e.shape[4]}.`);const u={dy:i,filter:e},h={pad:o,strides:s,inputShape:r},d=_.runKernel(rh,u,h);return a?L(d,[d.shape[1],d.shape[2],d.shape[3],d.shape[4]]):d}const Og=P({conv3DBackpropInput_:av});function lv(n,t,e,s,o){const r=E(n,"x","conv3dTranspose"),i=E(t,"filter","conv3dTranspose");return Og(e,r,i,s,o)}const cv=P({conv3dTranspose_:lv});function uv(n){const e={x:E(n,"x","cos","float32")};return _.runKernel(Ur,e)}const Gh=P({cos_:uv});function hv(n){const e={x:E(n,"x","cosh","float32")};return _.runKernel(Gr,e)}const Mg=P({cosh_:hv});function dv(n,t=0,e=!1,s=!1){const r={x:E(n,"x","cumprod")},i={axis:t,exclusive:e,reverse:s};return _.runKernel(ih,r,i)}const Cu=P({cumprod_:dv});function pv(n,t=0,e=!1,s=!1){const r={x:E(n,"x","cumsum")},i={axis:t,exclusive:e,reverse:s};return _.runKernel(pl,r,i)}const Lg=P({cumsum_:pv});function fv(n,t,e,s=!1){const o=E(n,"x","denseBincount"),r=E(t,"weights","denseBincount");v(o.dtype==="int32",()=>`Error in denseBincount: input dtype must be int32, but got ${o.dtype}`),v(o.rank<=2,()=>`Error in denseBincount: input must be at most rank 2, but got rank ${o.rank}.`),v(e>=0,()=>`size must be non-negative, but got ${e}.`),v(r.size===o.size||r.size===0,()=>`Error in denseBincount: weights must have the same shape as x or 0-length, but got x shape: ${o.shape}, weights shape: ${r.shape}.`);const i={x:o,weights:r},a={size:e,binaryOutput:s};return _.runKernel(lh,i,a)}const tf=P({denseBincount_:fv});function mv(n,t,e="NHWC"){const s=E(n,"x","depthToSpace","float32"),o=e==="NHWC"?s.shape[1]:s.shape[2],r=e==="NHWC"?s.shape[2]:s.shape[3],i=e==="NHWC"?s.shape[3]:s.shape[1];v(t>1,()=>`blockSize should be > 1 for depthToSpace, but was: ${t}`),v(o*t>=0,()=>`Negative dimension size caused by overflow when multiplying
    ${o} and ${t}  for depthToSpace with input shape
    ${s.shape}`),v(r*t>=0,()=>`Negative dimension size caused by overflow when multiplying
    ${r} and ${t} for depthToSpace with input shape
        ${s.shape}`),v(i%(t*t)===0,()=>`Dimension size must be evenly divisible by ${t*t} but is ${i} for depthToSpace with input shape ${s.shape}`);const a={x:s},l={blockSize:t,dataFormat:e};return _.runKernel(ch,a,l)}const gv=P({depthToSpace_:mv});function xv(n,t,e,s,o="NHWC",r=[1,1],i){const a=E(n,"x","depthwiseConv2d","float32"),l=E(t,"filter","depthwiseConv2d","float32");let c=a,u=!1;a.rank===3&&(u=!0,c=L(a,[1,a.shape[0],a.shape[1],a.shape[2]])),v(c.rank===4,()=>`Error in depthwiseConv2d: input must be rank 4, but got rank ${c.rank}.`),v(l.rank===4,()=>`Error in depthwiseConv2d: filter must be rank 4, but got rank ${l.rank}.`);const h=o==="NHWC"?c.shape[3]:c.shape[1];v(h===l.shape[2],()=>`Error in depthwiseConv2d: number of input channels (${h}) must match the inChannels dimension in filter ${l.shape[2]}.`),ze("depthwiseConv2d",s,i);const d={x:c,filter:l},p={strides:e,pad:s,dataFormat:o,dilations:r,dimRoundingMode:i},f=_.runKernel(fl,d,p);return u?L(f,[f.shape[1],f.shape[2],f.shape[3]]):f}const Hh=P({depthwiseConv2d_:xv});function bv(n,t,e,s,o=[1,1],r="NHWC"){const i=E(n,"x","dilation2d"),a=E(t,"filter","dilation2d");v(i.rank===3||i.rank===4,()=>`Error in dilation2d: input must be rank 3 or 4, but got rank ${i.rank}.`),v(a.rank===3,()=>`Error in dilation2d: filter must be rank 3, but got rank ${a.rank}.`),v(r==="NHWC",()=>`Error in dilation2d: Only NHWC is currently supported, but got dataFormat of ${r}`);let l=i,c=!1;i.rank===3&&(l=L(i,[1,i.shape[0],i.shape[1],i.shape[2]]),c=!0),v(l.shape[3]===a.shape[2],()=>`Error in dilation2d:  input and filter must have the same depth: ${l.shape[3]} vs ${a.shape[2]}`);const u={x:l,filter:a},h={strides:e,pad:s,dilations:o},d=_.runKernel(ml,u,h);return c?L(d,[d.shape[1],d.shape[2],d.shape[3]]):d}const yv=P({dilation2d_:bv});function _o(n,t){const e=n.length,s=[];for(let o=0;o<e;o++){const r=e-1-o,i=n[r]||1;(t[t.length-1-o]||1)>1&&i===1&&s.unshift(r)}return s}function le(n,t){const e=[];for(let s=0;s<t.length;s++){const o=n[n.length-s-1],r=t.length-s-1,i=t[r];(o==null||o===1&&i>1)&&e.unshift(r)}return e}function mt(n,t){const e=Math.max(n.length,t.length),s=new Array(e);for(let o=0;o<e;o++){let r=n[n.length-o-1];r==null&&(r=1);let i=t[t.length-o-1];if(i==null&&(i=1),r===1)s[e-o-1]=i;else if(i===1)s[e-o-1]=r;else if(r!==i){const a=`Operands could not be broadcast together with shapes ${n} and ${t}.`;throw Error(a)}else s[e-o-1]=r}return s}function wv(n,t){let e=E(n,"a","equal","string_or_numeric"),s=E(t,"b","equal","string_or_numeric");[e,s]=Jt(e,s),mt(e.shape,s.shape);const o={a:e,b:s};return _.runKernel(gl,o)}const Ln=P({equal_:wv});function Cv(n,t,e){const s=E(t,"a","where"),o=E(e,"b","where"),r=E(n,"condition","where","bool"),i=mt(mt(r.shape,s.shape),o.shape),a=xr(r,i),l=xr(s,i),c=xr(o,i),u={condition:a,t:l,e:c};return _.runKernel(jl,u)}const Re=P({where_:Cv});function $v(n){const e={x:E(n,"x","zerosLike")};return _.runKernel(tc,e)}const kt=P({zerosLike_:$v});function Iv(n,t){let e=E(n,"a","div"),s=E(t,"b","div");[e,s]=Jt(e,s);const o=ut(e,s),r=kt(o),i=Ln(s,r);return Re(i,r,o)}const vv=P({divNoNan_:Iv});function kv(n,t){const e=E(n,"t1","dot"),s=E(t,"t2","dot");v((e.rank===1||e.rank===2)&&(s.rank===1||s.rank===2),()=>`Error in dot: inputs must all be rank 1 or 2, but got ranks ${e.rank} and ${s.rank}.`);const o=e.rank===1?e.size:e.shape[1],r=s.rank===1?s.size:s.shape[0];if(v(o===r,()=>`Error in dot: inner dimensions of inputs must match, but got ${o} and ${r}.`),e.rank===1&&s.rank===1){const i=L(e,[1,-1]),a=L(s,[-1,1]),l=It(i,a);return L(l,[])}else if(e.rank===1&&s.rank===2){const i=L(e,[1,-1]),a=L(s,[s.shape[0],s.shape[1]]),l=It(i,a);return L(l,[l.size])}else if(e.rank===2&&s.rank===1){const i=L(s,[-1,1]),a=It(e,i);return L(a,[a.size])}else{const i=L(s,[s.shape[0],s.shape[1]]);return It(e,i)}}const Sv=P({dot_:kv});function Nv(n,...t){const e=t.map((o,r)=>E(o,`tensors${r}`,"einsum")),s={equation:n};return _.runKernel(dh,e,s)}const lr=P({einsum_:Nv});function Tv(n){const e={x:E(n,"x","elu","float32")};return _.runKernel(jr,e)}const ac=P({elu_:Tv});function Ev(n){let t=E(n,"x","erf");v(t.dtype==="int32"||t.dtype==="float32",()=>"Input dtype must be `int32` or `float32`."),t.dtype==="int32"&&(t=st(t,"float32"));const e={x:t};return _.runKernel(qr,e)}const Pg=P({erf_:Ev});function jh(n,t){for(let e=0;e<n.length;++e)if(n[n.length-e-1]!==t-1-e)return!1;return!0}function zg(n,t,e){const s=n.length+t.length,o=[];let r=0,i=0;for(let a=0;a<s;a++)e.indexOf(a)===-1?o.push(n[r++]):o.push(t[i++]);return o}function fe(n,t){const e=[],s=n.length;for(let r=0;r<s;r++)t.indexOf(r)===-1&&e.push(n[r]);const o=t.map(r=>n[r]);return[e,o]}function se(n,t){const e=t.map(s=>1);return zg(n,e,t)}function ye(n,t,e){v(jh(t,e),()=>`${n} supports only inner-most axes for now. Got axes ${t} and rank-${e} input.`)}function qt(n,t){if(jh(n,t))return null;const e=[];for(let s=0;s<t;++s)n.indexOf(s)===-1&&e.push(s);return n.forEach(s=>e.push(s)),e}function ks(n){return n.map((t,e)=>[e,t]).sort((t,e)=>t[1]-e[1]).map(t=>t[0])}function Qt(n,t){const e=[];for(let s=t-n;s<t;++s)e.push(s);return e}function Rv(n,t=null,e=!1){const o={x:E(n,"x","max")},r={reductionIndices:t,keepDims:e};return _.runKernel(Tl,o,r)}const yn=P({max_:Rv});function Av(n,t=null,e=!1){const o={x:E(n,"x","min")},r={axis:t,keepDims:e};return _.runKernel(Dl,o,r)}const Aa=P({min_:Av});function Dv(n,t){let e=E(n,"base","pow"),s=E(t,"exp","pow");[e,s]=Jt(e,s);const o={a:e,b:s};return _.runKernel(ci,o)}const Qs=P({pow_:Dv});function Tt(n,t){if((an(n)&&t!=="string"||Array.isArray(n))&&t!=="complex64")throw new Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");if(t==="string"&&an(n)&&!(n instanceof Uint8Array))throw new Error("When making a scalar from encoded string, the value must be `Uint8Array`.");return sc(n,[],[],t)}function Fv(n){const e={x:E(n,"x","sqrt","float32")};return _.runKernel(Ci,e)}const Ie=P({sqrt_:Fv});function _v(n){const t=E(n,"x","square"),e={};return _.runKernel("Square",{x:t},e)}const Vt=P({square_:_v});function Ov(n,t=null,e=!1){let s=E(n,"x","sum");s.dtype==="bool"&&(s=st(s,"int32"));const o={x:s},r={axis:t,keepDims:e};return _.runKernel(Kl,o,r)}const ct=P({sum_:Ov});function Mv(n,t="euclidean",e=null,s=!1){n=E(n,"x","norm");const o=Bg(n,t,e);let r=o.shape;if(s){const i=Ct(e,n.shape);r=se(o.shape,i)}return L(o,r)}function Bg(n,t,e=null){if(n.rank===0)return Ne(n);if(n.rank!==1&&e===null)return Bg(L(n,[-1]),t,e);if(n.rank===1||typeof e=="number"||Array.isArray(e)&&e.length===1){if(t===1)return ct(Ne(n),e);if(t===1/0)return yn(Ne(n),e);if(t===-1/0)return Aa(Ne(n),e);if(t==="euclidean"||t===2)return Ie(ct(Qs(Ne(n),Tt(2,"int32")),e));throw new Error(`Error in norm: invalid ord value: ${t}`)}if(Array.isArray(e)&&e.length===2){if(t===1)return yn(ct(Ne(n),e[0]),e[1]-1);if(t===1/0)return yn(ct(Ne(n),e[1]),e[0]);if(t===-1/0)return Aa(ct(Ne(n),e[1]),e[0]);if(t==="fro"||t==="euclidean")return Ie(ct(Vt(n),e));throw new Error(`Error in norm: invalid ord value: ${t}`)}throw new Error(`Error in norm: invalid axis: ${e}`)}const lc=P({norm_:Mv});function Lv(n,t=null,e=!1){return lc(n,"euclidean",t,e)}const Pv=P({euclideanNorm_:Lv});function zv(n){const e={x:E(n,"x","exp")};return _.runKernel(Kr,e)}const Pn=P({exp_:zv});function Bv(n,t=0){const e=E(n,"x","expandDims","string_or_numeric");v(t<=e.rank,()=>"Axis must be <= rank of the tensor");const s={input:e},o={dim:t};return _.runKernel(xl,s,o)}const _e=P({expandDims_:Bv});function Vv(n){const e={x:E(n,"x","expm1")};return _.runKernel(Xr,e)}const Wv=P({expm1_:Vv});function Uv(n,t){const e=E(n,"x","tile","string_or_numeric");v(e.rank===t.length,()=>`Error in transpose: rank of input ${e.rank} must match length of reps ${t}.`);const s={x:e},o={reps:t};return _.runKernel(Si,s,o)}const xn=P({tile_:Uv});function Gv(n,t,e,s="float32"){t==null&&(t=n);const o=wt([n,t],s),r=n<=t?n:t;for(let a=0;a<r;++a)o.set(1,a,a);const i=L(o.toTensor(),[n,t]);if(e==null)return i;if(e.length===1)return xn(_e(i,0),[e[0],1,1]);if(e.length===2)return xn(_e(_e(i,0),0),[e[0],e[1],1,1]);if(e.length===3)return xn(_e(_e(_e(i,0),0),0),[e[0],e[1],e[2],1,1]);throw new Error(`eye() currently supports only 1D and 2D batchShapes, but received ${e.length}D.`)}const Vg=P({eye_:Gv});function Hv(n){const e={x:E(n,"x","floor","float32")};return _.runKernel(Yr,e)}const cc=P({floor_:Hv});function jv(n,t,e=0,s=0){const o=E(n,"x","gather"),r=E(t,"indices","gather","int32"),i={x:o,indices:r},a={axis:e,batchDims:s};return _.runKernel(yl,i,a)}const qh=P({gather_:jv});function qv(n,t){let e=E(n,"a","greater","string_or_numeric"),s=E(t,"b","greater","string_or_numeric");[e,s]=Jt(e,s),mt(e.shape,s.shape);const o={a:e,b:s};return _.runKernel(wl,o)}const Ze=P({greater_:qv});function Kv(n,t){let e=E(n,"a","greaterEqual","string_or_numeric"),s=E(t,"b","greaterEqual","string_or_numeric");[e,s]=Jt(e,s),mt(e.shape,s.shape);const o={a:e,b:s};return _.runKernel(Jr,o)}const ao=P({greaterEqual_:Kv});function Xv(n){const e={input:E(n,"input","imag")};return _.runKernel(bh,e)}const Kh=P({imag_:Xv});function Yv(n){const e={x:E(n,"x","isFinite")};return _.runKernel(ti,e)}const Zv=P({isFinite_:Yv});function Jv(n){const e={x:E(n,"x","isInf")};return _.runKernel(ei,e)}const Qv=P({isInf_:Jv});function tk(n){const e={x:E(n,"x","isNaN")};return _.runKernel(ni,e)}const ek=P({isNaN_:tk});function nk(n,t=.2){const s={x:E(n,"x","leakyRelu")},o={alpha:t};return _.runKernel(Cl,s,o)}const Xh=P({leakyRelu_:nk});function sk(n,t){let e=E(n,"a","less","string_or_numeric"),s=E(t,"b","less","string_or_numeric");[e,s]=Jt(e,s),mt(e.shape,s.shape);const o={a:e,b:s};return _.runKernel($l,o)}const Da=P({less_:sk});function ok(n,t){let e=E(n,"a","lessEqual","string_or_numeric"),s=E(t,"b","lessEqual","string_or_numeric");[e,s]=Jt(e,s),mt(e.shape,s.shape);const o={a:e,b:s};return _.runKernel(Il,o)}const jo=P({lessEqual_:ok});function ef(n,t,e){const s={start:n,stop:t,num:e};return _.runKernel(yh,{},s)}function rk(n,t=5,e=1,s=1,o=.5){const r=E(n,"x","localResponseNormalization");v(r.rank===4||r.rank===3,()=>`Error in localResponseNormalization: x must be rank 3 or 4 but got
               rank ${r.rank}.`),v(Ao(t),()=>`Error in localResponseNormalization: depthRadius must be an integer but got depthRadius ${t}.`);let i=r,a=!1;r.rank===3&&(a=!0,i=L(r,[1,r.shape[0],r.shape[1],r.shape[2]]));const l={x:i},c={depthRadius:t,bias:e,alpha:s,beta:o},u=_.runKernel(Nl,l,c);return a?L(u,[u.shape[1],u.shape[2],u.shape[3]]):u}const ik=P({localResponseNormalization_:rk});function ak(n){const e={x:E(n,"x","log","float32")};return _.runKernel(si,e)}const zn=P({log_:ak});function lk(n){const e={x:E(n,"x","log1p")};return _.runKernel(oi,e)}const Wg=P({log1p_:lk});function ck(n,t){v(iu(n),()=>"The f passed in variableGrads(f) must be a function"),v(t==null||Array.isArray(t)&&t.every(c=>c instanceof Ea),()=>"The varList passed in variableGrads(f, varList) must be an array of variables");const e=t!=null;if(!e){t=[];for(const c in _.registeredVariables)t.push(_.registeredVariables[c])}const s=e?t.filter(c=>!c.trainable):null,o=t.length;t=t.filter(c=>c.trainable),v(t.length>0,()=>`variableGrads() expects at least one of the input variables to be trainable, but none of the ${o} variables is trainable.`);const r=!0,{value:i,grads:a}=_.gradients(n,t,null,r);v(a.some(c=>c!=null),()=>"Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize()."),v(i.rank===0,()=>`The f passed in variableGrads(f) must return a scalar, but it returned a rank-${i.rank} tensor`);const l={};return t.forEach((c,u)=>{a[u]!=null&&(l[c.name]=a[u])}),s?.forEach(c=>l[c.name]=null),{value:i,grads:l}}function Oo(n){return _.customGrad(n)}function uk(n){const e={x:E(n,"x","neg")};return _.runKernel(_l,e)}const Zt=P({neg_:uk});function hk(n){const e={x:E(n,"x","softplus")};return _.runKernel(wi,e)}const Ei=P({softplus_:hk});function dk(n){const t=E(n,"x","logSigmoid");return Oo(s=>({value:Zt(Ei(Zt(s))),gradFunc:i=>F(i,Ho(Zt(s)))}))(t)}const pk=P({logSigmoid_:dk});function fk(n,t){let e=E(n,"a","sub"),s=E(t,"b","sub");[e,s]=Jt(e,s);const o={a:e,b:s};return _.runKernel(Ii,o)}const pt=P({sub_:fk});function mk(n,t=-1){const e=E(n,"logits","logSoftmax");if(t===-1&&(t=e.rank-1),t!==e.rank-1)throw Error(`Log Softmax along a non-last dimension is not yet supported. Logits was rank ${e.rank} and axis was ${t}`);return Oo((o,r)=>{const a=yn(o,t,!0),l=pt(o,a),c=pt(st(l,"float32"),zn(ct(Pn(l),t,!0)));return r([c]),{value:c,gradFunc:(h,d)=>{const[p]=d,f=!0,m=Pn(p);return pt(h,F(ct(h,t,f),m))}}})(e)}const Ug=P({logSoftmax_:mk});function gk(n,t=null,e=!1){const s=E(n,"x","logSumExp"),o=Ct(t,s.shape),r=yn(s,o,!0),i=pt(s,r),a=Pn(i),l=ct(a,o),c=zn(l),u=J(L(r,c.shape),c);if(e){const h=se(u.shape,o);return L(u,h)}return u}const Gg=P({logSumExp_:gk});function xk(n,t){const e=E(n,"a","logicalAnd","bool"),s=E(t,"b","logicalAnd","bool");mt(e.shape,s.shape);const o={a:e,b:s};return _.runKernel(vl,o)}const Xn=P({logicalAnd_:xk});function bk(n){const e={x:E(n,"x","logicalNot","bool")};return _.runKernel(kl,e)}const Yh=P({logicalNot_:bk});function yk(n,t){const e=E(n,"a","logicalOr","bool"),s=E(t,"b","logicalOr","bool");mt(e.shape,s.shape);const o={a:e,b:s};return _.runKernel(Sl,o)}const Hg=P({logicalOr_:yk});function wk(n,t){const e=E(n,"a","logicalXor","bool"),s=E(t,"b","logicalXor","bool");return mt(e.shape,s.shape),Xn(Hg(n,t),Yh(Xn(n,t)))}const Ck=P({logicalXor_:wk});function $k(n,t,e,s,o){const r=E(n,"x","maxPool"),i=1;let a=r,l=!1;r.rank===3&&(l=!0,a=L(r,[1,r.shape[0],r.shape[1],r.shape[2]])),v(a.rank===4,()=>`Error in maxPool: input must be rank 4 but got rank ${a.rank}.`),v(ve(e,i),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${e} and dilations '${i}'`),ze("maxPool",s,o);const c={x:a},u={filterSize:t,strides:e,pad:s,dimRoundingMode:o},h=_.runKernel(El,c,u);return l?L(h,[h.shape[1],h.shape[2],h.shape[3]]):h}const Zh=P({maxPool_:$k});function Ik(n,t=[1,1,1],e,s,o,r="NDHWC"){const i=E(n,"x","maxPool3d");let a=i,l=!1;i.rank===4&&(l=!0,a=L(i,[1,i.shape[0],i.shape[1],i.shape[2],i.shape[3]])),v(a.rank===5,()=>`Error in maxPool3d: x must be rank 5 but got rank ${a.rank}.`),v(r==="NDHWC",()=>`Error in maxPool3d: Only NDHWC is currently supported, but got dataFormat of ${r}`),ze("maxPool3d",s,o);const c={x:a},u={filterSize:t,strides:e,pad:s,dimRoundingMode:o,dataFormat:r},h=_.runKernel(Rl,c,u);return l?L(h,[h.shape[1],h.shape[2],h.shape[3],h.shape[4]]):h}const vk=P({maxPool3d_:Ik});function kk(n,t){let e=E(n,"a","maximum"),s=E(t,"b","maximum");[e,s]=Jt(e,s),e.dtype==="bool"&&(e=st(e,"int32"),s=st(s,"int32")),mt(e.shape,s.shape);const o={a:e,b:s};return _.runKernel(ri,o)}const Ss=P({maximum_:kk});function Sk(n,t=null,e=!1){const o={x:E(n,"x","mean")},r={axis:t,keepDims:e};return _.runKernel(Al,o,r)}const ne=P({mean_:Sk});function de(n,t="float32"){if(Jn(n),t==="complex64"){const s=de(n,"float32"),o=de(n,"float32");return qs(s,o)}const e=$e(H(n),t);return _.makeTensor(e,n,t)}function sn(n,t="float32"){if(Jn(n),t==="complex64"){const s=sn(n,"float32"),o=de(n,"float32");return qs(s,o)}const e=ju(H(n),t);return _.makeTensor(e,n,t)}function Nk(n,t,{indexing:e="xy"}={}){if(e!=="xy"&&e!=="ij")throw new TypeError(`${e} is not a valid third argument to meshgrid`);if(n===void 0)return[];let s=E(n,"x","meshgrid",n instanceof Xt?n.dtype:"float32");if(t===void 0)return[s];let o=E(t,"y","meshgrid",t instanceof Xt?t.dtype:"float32");const r=H(s.shape),i=H(o.shape);return e==="xy"?(s=L(s,[1,-1]),o=L(o,[-1,1]),[It(sn([i,1],s.dtype),s),It(o,sn([1,r],o.dtype))]):(s=L(s,[-1,1]),o=L(o,[1,-1]),[It(s,sn([1,i],s.dtype)),It(sn([r,1],o.dtype),o)])}function Tk(n,t){let e=E(n,"a","minimum"),s=E(t,"b","minimum");[e,s]=Jt(e,s),e.dtype==="bool"&&(e=st(e,"int32"),s=st(s,"int32")),mt(e.shape,s.shape);const o={a:e,b:s};return _.runKernel(ii,o)}const $r=P({minimum_:Tk});function Ek(n,t,e){v(e==="reflect"||e==="symmetric",()=>`Invalid mode. Mode must be either reflect or symmetric. Got ${e}.`);const s=E(n,"x","mirrorPad");if(s.rank===0)throw new Error("mirrorPad(scalar) is not defined. Pass non-scalar to mirrorPad");v(t.length===s.rank,()=>`Padding doesn't match input. Must be ${s.rank}. Got ${t.length}.`);const o=e==="reflect"?1:0;for(let a=0;a<s.rank;a++)v(t[a].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),v(t[a][0]>=0&&t[a][0]<=s.shape[a]-o&&t[a][1]>=0&&t[a][1]<=s.shape[a]-o,()=>`Padding in dimension ${a} cannot be greater than or equal to ${s.shape[a]-o} or less than 0 for input of shape ${s.shape}`);const r={paddings:t,mode:e},i={x:s};return _.runKernel(Fl,i,r)}const Rk=P({mirrorPad_:Ek});function Ak(n,t){let e=E(n,"a","mod"),s=E(t,"b","mod");[e,s]=Jt(e,s);const o={a:e,b:s};return _.runKernel(ai,o)}const Dk=P({mod_:Ak});function Fk(n,t=null,e=!1){n=E(n,"x","moments");const s=Ct(t,n.shape),o=ne(n,s,e);let r=o.shape;e||(r=se(o.shape,s));const i=Vt(pt(st(n,"float32"),L(o,r))),a=ne(i,s,e);return{mean:o,variance:a}}const Jh=P({moments_:Fk});function _k(n,t){let e=E(n,"a","notEqual","string_or_numeric"),s=E(t,"b","notEqual","string_or_numeric");[e,s]=Jt(e,s),mt(e.shape,s.shape);const o={a:e,b:s};return _.runKernel(Ol,o)}const Fa=P({notEqual_:_k});function Ok(n,t,e=1,s=0,o="int32"){if(t<2)throw new Error(`Error in oneHot: depth must be >=2, but it is ${t}`);const i={indices:E(n,"indices","oneHot","int32")},a={dtype:o,depth:t,onValue:e,offValue:s};return _.runKernel(Ll,i,a)}const jg=P({oneHot_:Ok});function Mk(n){const e={x:E(n,"x","onesLike")};return _.runKernel(Ml,e)}const ln=P({onesLike_:Mk});function Lk(n,t,e=0){const s=E(n,"x","pad");if(s.rank===0)throw new Error("pad(scalar) is not defined. Pass non-scalar to pad");const o={paddings:t,constantValue:e},r={x:s};return _.runKernel(zl,r,o)}const Qh=P({pad_:Lk});function Pk(n,t,e){const s=E(n,"x","spaceToBatchND");v(s.rank>=1+t.length,()=>`input rank ${s.rank} should be > than [blockShape] ${t.length}`),v(e.length===t.length,()=>`paddings.shape[0] ${e.length} must be equal to [blockShape] ${t.length}`),v(s.shape.reduce((i,a,l)=>l>0&&l<=t.length?i&&(a+e[l-1][0]+e[l-1][1])%t[l-1]===0:i,!0),()=>`input spatial dimensions ${s.shape.slice(1)} with paddings ${e.toString()} must be divisible by blockShapes ${t.toString()}`);const o={x:s},r={blockShape:t,paddings:e};return _.runKernel(Xl,o,r)}const td=P({spaceToBatchND_:Pk});function zk(n,t,e,s,o,r,i){o==null&&(o=[1,1]),r==null&&(r=1),s===0&&(s="valid");const a=E(n,"x","maxPool");let l=a,c=!1;a.rank===3&&(c=!0,l=L(a,[1,a.shape[0],a.shape[1],a.shape[2]])),v(ve(r,o),()=>`Error in pool: Either strides or dilations must be 1. Got strides ${r} and dilations '${o}'`);const u=cn(l.shape,t,r,o,s),h=[u.dilationHeight,u.dilationWidth];let d;s==="same"?d=Vk([u.filterHeight,u.filterWidth],h):d=[[0,0],[0,0]];const p=h[0]===1&&h[1]===1,[f,m]=Bk([u.inHeight,u.inWidth],h,d),g=p?s:"valid",x=p?l:td(l,h,f),w=(e==="avg"?()=>Vh(x,t,r,g,i):()=>Zh(x,t,r,g,i))(),y=p?w:Wh(w,h,m);return c?L(y,[y.shape[1],y.shape[2],y.shape[3]]):y}function Bk(n,t,e){const s=e.map(u=>u[0]),o=e.map(u=>u[1]),r=n.concat(s,o),i=t.map((u,h)=>(u-r[h]%u)%u),a=o.map((u,h)=>u+i[h]),l=t.map((u,h)=>[s[h],a[h]]),c=t.map((u,h)=>[0,i[h]]);return[l,c]}function Vk(n,t){const s=n.map((i,a)=>i+(i-1)*(t[a]-1)).map(i=>i-1),o=s.map(i=>Math.floor(i/2)),r=s.map((i,a)=>i-o[a]);return s.map((i,a)=>[o[a],r[a]])}const Wk=P({pool_:zk});function Uk(n,t){const e=E(n,"x","prelu"),s=E(t,"alpha","prelu"),o={x:e,alpha:s};return _.runKernel(Bl,o)}const ed=P({prelu_:Uk});function Gk(n,t=null,e=!1){let s=E(n,"x","prod");s.dtype==="bool"&&(s=st(s,"int32"));const o={x:s},r={axis:t,keepDims:e};return _.runKernel(Vl,o,r)}const Hk=P({prod_:Gk});var fa={exports:{}},jk=fa.exports,nf;function qk(){return nf||(nf=1,(function(n){(function(t,e,s){function o(l){var c=this,u=a();c.next=function(){var h=2091639*c.s0+c.c*23283064365386963e-26;return c.s0=c.s1,c.s1=c.s2,c.s2=h-(c.c=h|0)},c.c=1,c.s0=u(" "),c.s1=u(" "),c.s2=u(" "),c.s0-=u(l),c.s0<0&&(c.s0+=1),c.s1-=u(l),c.s1<0&&(c.s1+=1),c.s2-=u(l),c.s2<0&&(c.s2+=1),u=null}function r(l,c){return c.c=l.c,c.s0=l.s0,c.s1=l.s1,c.s2=l.s2,c}function i(l,c){var u=new o(l),h=c&&c.state,d=u.next;return d.int32=function(){return u.next()*4294967296|0},d.double=function(){return d()+(d()*2097152|0)*11102230246251565e-32},d.quick=d,h&&(typeof h=="object"&&r(h,u),d.state=function(){return r(u,{})}),d}function a(){var l=4022871197,c=function(u){u=String(u);for(var h=0;h<u.length;h++){l+=u.charCodeAt(h);var d=.02519603282416938*l;l=d>>>0,d-=l,d*=l,l=d>>>0,d-=l,l+=d*4294967296}return(l>>>0)*23283064365386963e-26};return c}e&&e.exports?e.exports=i:this.alea=i})(jk,n)})(fa)),fa.exports}var ma={exports:{}},Kk=ma.exports,sf;function Xk(){return sf||(sf=1,(function(n){(function(t,e,s){function o(a){var l=this,c="";l.x=0,l.y=0,l.z=0,l.w=0,l.next=function(){var h=l.x^l.x<<11;return l.x=l.y,l.y=l.z,l.z=l.w,l.w^=l.w>>>19^h^h>>>8},a===(a|0)?l.x=a:c+=a;for(var u=0;u<c.length+64;u++)l.x^=c.charCodeAt(u)|0,l.next()}function r(a,l){return l.x=a.x,l.y=a.y,l.z=a.z,l.w=a.w,l}function i(a,l){var c=new o(a),u=l&&l.state,h=function(){return(c.next()>>>0)/4294967296};return h.double=function(){do var d=c.next()>>>11,p=(c.next()>>>0)/4294967296,f=(d+p)/(1<<21);while(f===0);return f},h.int32=c.next,h.quick=h,u&&(typeof u=="object"&&r(u,c),h.state=function(){return r(c,{})}),h}e&&e.exports?e.exports=i:this.xor128=i})(Kk,n)})(ma)),ma.exports}var ga={exports:{}},Yk=ga.exports,of;function Zk(){return of||(of=1,(function(n){(function(t,e,s){function o(a){var l=this,c="";l.next=function(){var h=l.x^l.x>>>2;return l.x=l.y,l.y=l.z,l.z=l.w,l.w=l.v,(l.d=l.d+362437|0)+(l.v=l.v^l.v<<4^(h^h<<1))|0},l.x=0,l.y=0,l.z=0,l.w=0,l.v=0,a===(a|0)?l.x=a:c+=a;for(var u=0;u<c.length+64;u++)l.x^=c.charCodeAt(u)|0,u==c.length&&(l.d=l.x<<10^l.x>>>4),l.next()}function r(a,l){return l.x=a.x,l.y=a.y,l.z=a.z,l.w=a.w,l.v=a.v,l.d=a.d,l}function i(a,l){var c=new o(a),u=l&&l.state,h=function(){return(c.next()>>>0)/4294967296};return h.double=function(){do var d=c.next()>>>11,p=(c.next()>>>0)/4294967296,f=(d+p)/(1<<21);while(f===0);return f},h.int32=c.next,h.quick=h,u&&(typeof u=="object"&&r(u,c),h.state=function(){return r(c,{})}),h}e&&e.exports?e.exports=i:this.xorwow=i})(Yk,n)})(ga)),ga.exports}var xa={exports:{}},Jk=xa.exports,rf;function Qk(){return rf||(rf=1,(function(n){(function(t,e,s){function o(a){var l=this;l.next=function(){var u=l.x,h=l.i,d,p;return d=u[h],d^=d>>>7,p=d^d<<24,d=u[h+1&7],p^=d^d>>>10,d=u[h+3&7],p^=d^d>>>3,d=u[h+4&7],p^=d^d<<7,d=u[h+7&7],d=d^d<<13,p^=d^d<<9,u[h]=p,l.i=h+1&7,p};function c(u,h){var d,p=[];if(h===(h|0))p[0]=h;else for(h=""+h,d=0;d<h.length;++d)p[d&7]=p[d&7]<<15^h.charCodeAt(d)+p[d+1&7]<<13;for(;p.length<8;)p.push(0);for(d=0;d<8&&p[d]===0;++d);for(d==8?p[7]=-1:p[d],u.x=p,u.i=0,d=256;d>0;--d)u.next()}c(l,a)}function r(a,l){return l.x=a.x.slice(),l.i=a.i,l}function i(a,l){a==null&&(a=+new Date);var c=new o(a),u=l&&l.state,h=function(){return(c.next()>>>0)/4294967296};return h.double=function(){do var d=c.next()>>>11,p=(c.next()>>>0)/4294967296,f=(d+p)/(1<<21);while(f===0);return f},h.int32=c.next,h.quick=h,u&&(u.x&&r(u,c),h.state=function(){return r(c,{})}),h}e&&e.exports?e.exports=i:this.xorshift7=i})(Jk,n)})(xa)),xa.exports}var ba={exports:{}},tS=ba.exports,af;function eS(){return af||(af=1,(function(n){(function(t,e,s){function o(a){var l=this;l.next=function(){var u=l.w,h=l.X,d=l.i,p,f;return l.w=u=u+1640531527|0,f=h[d+34&127],p=h[d=d+1&127],f^=f<<13,p^=p<<17,f^=f>>>15,p^=p>>>12,f=h[d]=f^p,l.i=d,f+(u^u>>>16)|0};function c(u,h){var d,p,f,m,g,x=[],b=128;for(h===(h|0)?(p=h,h=null):(h=h+"\0",p=0,b=Math.max(b,h.length)),f=0,m=-32;m<b;++m)h&&(p^=h.charCodeAt((m+32)%h.length)),m===0&&(g=p),p^=p<<10,p^=p>>>15,p^=p<<4,p^=p>>>13,m>=0&&(g=g+1640531527|0,d=x[m&127]^=p+g,f=d==0?f+1:0);for(f>=128&&(x[(h&&h.length||0)&127]=-1),f=127,m=512;m>0;--m)p=x[f+34&127],d=x[f=f+1&127],p^=p<<13,d^=d<<17,p^=p>>>15,d^=d>>>12,x[f]=p^d;u.w=g,u.X=x,u.i=f}c(l,a)}function r(a,l){return l.i=a.i,l.w=a.w,l.X=a.X.slice(),l}function i(a,l){a==null&&(a=+new Date);var c=new o(a),u=l&&l.state,h=function(){return(c.next()>>>0)/4294967296};return h.double=function(){do var d=c.next()>>>11,p=(c.next()>>>0)/4294967296,f=(d+p)/(1<<21);while(f===0);return f},h.int32=c.next,h.quick=h,u&&(u.X&&r(u,c),h.state=function(){return r(c,{})}),h}e&&e.exports?e.exports=i:this.xor4096=i})(tS,n)})(ba)),ba.exports}var ya={exports:{}},nS=ya.exports,lf;function sS(){return lf||(lf=1,(function(n){(function(t,e,s){function o(a){var l=this,c="";l.next=function(){var h=l.b,d=l.c,p=l.d,f=l.a;return h=h<<25^h>>>7^d,d=d-p|0,p=p<<24^p>>>8^f,f=f-h|0,l.b=h=h<<20^h>>>12^d,l.c=d=d-p|0,l.d=p<<16^d>>>16^f,l.a=f-h|0},l.a=0,l.b=0,l.c=-1640531527,l.d=1367130551,a===Math.floor(a)?(l.a=a/4294967296|0,l.b=a|0):c+=a;for(var u=0;u<c.length+20;u++)l.b^=c.charCodeAt(u)|0,l.next()}function r(a,l){return l.a=a.a,l.b=a.b,l.c=a.c,l.d=a.d,l}function i(a,l){var c=new o(a),u=l&&l.state,h=function(){return(c.next()>>>0)/4294967296};return h.double=function(){do var d=c.next()>>>11,p=(c.next()>>>0)/4294967296,f=(d+p)/(1<<21);while(f===0);return f},h.int32=c.next,h.quick=h,u&&(typeof u=="object"&&r(u,c),h.state=function(){return r(c,{})}),h}e&&e.exports?e.exports=i:this.tychei=i})(nS,n)})(ya)),ya.exports}var wa={exports:{}};const oS={},rS=Object.freeze(Object.defineProperty({__proto__:null,default:oS},Symbol.toStringTag,{value:"Module"})),iS=WC(rS);var aS=wa.exports,cf;function lS(){return cf||(cf=1,(function(n){(function(t,e,s){var o=256,r=6,i=52,a="random",l=s.pow(o,r),c=s.pow(2,i),u=c*2,h=o-1,d;function p(y,C,I){var N=[];C=C==!0?{entropy:!0}:C||{};var T=x(g(C.entropy?[y,w(e)]:y??b(),3),N),k=new f(N),S=function(){for(var $=k.g(r),R=l,A=0;$<c;)$=($+A)*o,R*=o,A=k.g(1);for(;$>=u;)$/=2,R/=2,A>>>=1;return($+A)/R};return S.int32=function(){return k.g(4)|0},S.quick=function(){return k.g(4)/4294967296},S.double=S,x(w(k.S),e),(C.pass||I||function($,R,A,O){return O&&(O.S&&m(O,k),$.state=function(){return m(k,{})}),A?(s[a]=$,R):$})(S,T,"global"in C?C.global:this==s,C.state)}function f(y){var C,I=y.length,N=this,T=0,k=N.i=N.j=0,S=N.S=[];for(I||(y=[I++]);T<o;)S[T]=T++;for(T=0;T<o;T++)S[T]=S[k=h&k+y[T%I]+(C=S[T])],S[k]=C;(N.g=function($){for(var R,A=0,O=N.i,M=N.j,z=N.S;$--;)R=z[O=h&O+1],A=A*o+z[h&(z[O]=z[M=h&M+R])+(z[M]=R)];return N.i=O,N.j=M,A})(o)}function m(y,C){return C.i=y.i,C.j=y.j,C.S=y.S.slice(),C}function g(y,C){var I=[],N=typeof y,T;if(C&&N=="object")for(T in y)try{I.push(g(y[T],C-1))}catch{}return I.length?I:N=="string"?y:y+"\0"}function x(y,C){for(var I=y+"",N,T=0;T<I.length;)C[h&T]=h&(N^=C[h&T]*19)+I.charCodeAt(T++);return w(C)}function b(){try{var y;return d&&(y=d.randomBytes)?y=y(o):(y=new Uint8Array(o),(t.crypto||t.msCrypto).getRandomValues(y)),w(y)}catch{var C=t.navigator,I=C&&C.plugins;return[+new Date,t,I,t.screen,w(e)]}}function w(y){return String.fromCharCode.apply(0,y)}if(x(s.random(),e),n.exports){n.exports=p;try{d=iS}catch{}}else s["seed"+a]=p})(typeof self<"u"?self:aS,[],Math)})(wa)),wa.exports}var Bc,uf;function cS(){if(uf)return Bc;uf=1;var n=qk(),t=Xk(),e=Zk(),s=Qk(),o=eS(),r=sS(),i=lS();return i.alea=n,i.xor128=t,i.xorwow=e,i.xorshift7=s,i.xor4096=o,i.tychei=r,Bc=i,Bc}var nd=cS();class qg{constructor(t,e,s,o,r){this.mean=t,this.stdDev=e,this.dtype=s,this.nextVal=NaN,this.truncated=o,this.truncated&&(this.upper=this.mean+this.stdDev*2,this.lower=this.mean-this.stdDev*2);const i=r||Math.random();this.random=nd.alea(i.toString())}nextValue(){if(!isNaN(this.nextVal)){const o=this.nextVal;return this.nextVal=NaN,o}let t,e,s=!1;for(;!s;){let o,r,i;do o=2*this.random()-1,r=2*this.random()-1,i=o*o+r*r;while(i>=1||i===0);const a=Math.sqrt(-2*Math.log(i)/i);t=this.mean+this.stdDev*o*a,e=this.mean+this.stdDev*r*a,(!this.truncated||this.isValidTruncated(t))&&(s=!0)}return(!this.truncated||this.isValidTruncated(e))&&(this.nextVal=this.convertValue(e)),this.convertValue(t)}convertValue(t){return this.dtype==null||this.dtype==="float32"?t:Math.round(t)}isValidTruncated(t){return t<=this.upper&&t>=this.lower}}class uS{constructor(t=0,e=1,s,o){if(this.canReturnFloat=()=>this.dtype==null||this.dtype==="float32",this.min=t,this.range=e-t,this.dtype=s,o==null&&(o=Math.random()),typeof o=="number"&&(o=o.toString()),!this.canReturnFloat()&&this.range<=1)throw new Error(`The difference between ${t} - ${e} <= 1 and dtype is not float`);this.random=nd.alea(o)}convertValue(t){return this.canReturnFloat()?t:Math.round(t)}nextValue(){return this.convertValue(this.min+this.range*this.random())}}function hS(n,t=0,e=1,s,o){if(Jn(n),s!=null&&s==="bool")throw new Error(`Unsupported data type ${s}`);const r=new qg(t,e,s,!1,o),i=wt(n,s);for(let a=0;a<i.values.length;a++)i.values[a]=r.nextValue();return i.toTensor()}const dS=P({randomNormal_:hS});function pS(n,t=0,e=1,s="float32",o){Jn(n);const r=wt(n,s),i=new uS(t,e,null,o);for(let a=0;a<r.values.length;a++)r.values[a]=i.nextValue();return r.toTensor()}const Ri=P({randomUniform_:pS});function Ir(n,t,e=1,s="float32"){if(e===0)throw new Error("Cannot have a step of zero");const o={start:n,stop:t,step:e,dtype:s};return _.runKernel(Sh,{},o)}function fS(n){const e={input:E(n,"input","real")};return _.runKernel(Nh,e)}const _a=P({real_:fS});function mS(n){const e={x:E(n,"x","reciprocal")};return _.runKernel(ui,e)}const gS=P({reciprocal_:mS});function xS(n){const e={x:E(n,"x","relu")};return _.runKernel(hi,e)}const lo=P({relu_:xS});function bS(n){const e={x:E(n,"x","relu6")};return _.runKernel(di,e)}const Kg=P({relu6_:bS});function yS(n,t){const s={x:E(n,"x","reverse")},o={dims:t};return _.runKernel(Hl,s,o)}const to=P({reverse_:yS});function wS(n){const e={x:E(n,"x","round")};return _.runKernel(pi,e)}const Xg=P({round_:wS});function CS(n){const e={x:E(n,"x","rsqrt","float32")};return _.runKernel(fi,e)}const Yg=P({rsqrt_:CS});function $S(n){const e={x:E(n,"x","selu")};return _.runKernel(mi,e)}const Zg=P({selu_:$S});function IS(n,t,e,s,o,r=[1,1],i="NHWC"){const a=E(n,"x","separableConv2d"),l=E(t,"depthwiseFilter","separableConv2d"),c=E(e,"pointwiseFilter","separableConv2d");let u=a,h=!1;if(a.rank===3&&(h=!0,u=L(a,[1,a.shape[0],a.shape[1],a.shape[2]])),i==="NCHW")throw new Error("separableConv2d currently does not support dataFormat NCHW; only NHWC is supported");v(u.rank===4,()=>`Error in separableConv2d: input must be rank 4, but got rank ${u.rank}.`),v(l.rank===4,()=>`Error in separableConv2d: depthwise filter must be rank 4, but got rank ${l.rank}.`),v(c.rank===4,()=>`Error in separableConv2d: pointwise filter must be rank 4, but got rank ${l.rank}.`),v(c.shape[0]===1,()=>`Error in separableConv2d: the first dimension of pointwise filter  must be 1, but got ${c.shape[0]}.`),v(c.shape[1]===1,()=>`Error in separableConv2d: the second dimension of pointwise filter must be 1, but got ${c.shape[1]}.`);const d=l.shape[2],p=l.shape[3];v(c.shape[2]===d*p,()=>`Error in separableConv2d: the third dimension of pointwise filter must be ${d*p}, but got ${c.shape[2]}.`);const f=Hh(u,l,s,o,i,r),g=Js(f,c,1,"valid",i);return h?L(g,[g.shape[1],g.shape[2],g.shape[3]]):g}const Jg=P({separableConv2d_:IS});function vS(n){const e={x:E(n,"x","sign")};return _.runKernel(bi,e)}const kS=P({sign_:vS});function SS(n){const e={x:E(n,"x","sin","float32")};return _.runKernel(gi,e)}const Qg=P({sin_:SS});function NS(n){const e={x:E(n,"x","sinh")};return _.runKernel(xi,e)}const tx=P({sinh_:NS});function TS(n,t,e){const s=E(n,"x","slice1d");return v(s.rank===1,()=>`slice1d expects a rank-1 tensor, but got a rank-${s.rank} tensor`),zt(s,[t],[e])}const sd=P({slice1d_:TS});function ES(n,t,e){const s=E(n,"x","slice2d");return v(s.rank===2,()=>`slice2d expects a rank-2 tensor, but got a rank-${s.rank} tensor`),zt(s,t,e)}const ex=P({slice2d_:ES});function RS(n,t,e){const s=E(n,"x","slice3d");return v(s.rank===3,()=>`slice3d expects a rank-3 tensor, but got a rank-${s.rank} tensor`),zt(s,t,e)}const od=P({slice3d_:RS});function AS(n,t,e){const s=E(n,"x","slice4d");return v(s.rank===4,()=>`slice4d expects a rank-4 tensor, but got a rank-${s.rank} tensor`),zt(s,t,e)}const Oa=P({slice4d_:AS});function DS(n,t=-1){const e=E(n,"logits","softmax","float32");if(t===-1&&(t=e.rank-1),t!==e.rank-1)throw Error(`Softmax along a non-last dimension is not yet supported. Logits was rank ${e.rank} and dim was ${t}`);const s={logits:e},o={dim:t};return _.runKernel(Zl,s,o)}const rd=P({softmax_:DS});function FS(n){v(n.dtype==="complex64",()=>`The dtype for tf.spectral.fft() must be complex64 but got ${n.dtype}.`);const t={input:n};return _.runKernel(fh,t)}const nx=P({fft_:FS});function _S(n){v(n.dtype==="complex64",()=>`The dtype for tf.spectral.ifft() must be complex64 but got ${n.dtype}.`);const t={input:n};return _.runKernel(xh,t)}const $u=P({ifft_:_S});function OS(n){const t=n.shape[n.shape.length-1],e=n.size/t;let s;if(t<=2){const o=L(n,[e,t]);s=$u(o)}else{const o=[e,2*(t-1)],r=L(_a(n),[e,t]),i=L(Kh(n),[e,t]),a=to(zt(r,[0,1],[e,t-2]),1),l=F(to(zt(i,[0,1],[e,t-2]),1),Tt(-1)),c=Me([r,a],1),u=Me([i,l],1),h=L(qs(c,u),[o[0],o[1]]);s=$u(h)}if(s=_a(s),n.rank===3&&n.shape[0]!==0){const o=s,r=n.shape[0];s=L(s,[r,s.shape[0]/r,s.shape[1]]),o.dispose()}return s}const MS=P({irfft_:OS});function LS(n,t,e=0){const o={x:E(n,"x","split")},r={numOrSizeSplits:t,axis:e};return _.runKernel(Yl,o,r)}const Xe=P({split_:LS});function PS(n,t){v(n.dtype==="float32",()=>`The dtype for rfft() must be real value but got ${n.dtype}`);let e=n.shape[n.shape.length-1];const s=n.size/e;let o;if(t!=null&&t<e){const f=n.shape.map(g=>0),m=n.shape.map(g=>g);m[n.shape.length-1]=t,o=zt(n,f,m),e=t}else if(t!=null&&t>e){const f=n.shape.map(m=>m);f[n.shape.length-1]=t-e,o=Me([n,de(f)],n.shape.length-1),e=t}else o=n;const r=kt(o),i=L(qs(o,r),[s,e]),a=nx(i),l=Math.floor(e/2)+1,c=_a(a),u=Kh(a),h=Xe(c,[l,e-l],c.shape.length-1),d=Xe(u,[l,e-l],u.shape.length-1),p=o.shape.slice();return p[o.shape.length-1]=l,L(qs(h[0],d[0]),p)}const zS=P({rfft_:PS});function BS(n,t){let e=E(n,"a","squaredDifference"),s=E(t,"b","squaredDifference");[e,s]=Jt(e,s),mt(e.shape,s.shape);const o={a:e,b:s},r={};return _.runKernel($i,o,r)}const VS=P({squaredDifference_:BS});function WS(n,t){const e=E(n,"x","squeeze","string_or_numeric");return L(e,Cs(e.shape,t).newShape)}const Ai=P({squeeze_:WS});function US(n,t=0){const e=Ig(n,"tensors","stack","string_or_numeric");v(e.length>=1,()=>"Pass at least one tensor to tf.stack"),e.length>0&&v(t<=e[0].rank,()=>"Axis must be <= rank of the tensor");const s=e,o={axis:t};return _.runKernel(Pl,s,o)}const Bn=P({stack_:US});function GS(n,t=0){const s={x:E(n,"x","step")},o={alpha:t};return _.runKernel(Ni,s,o)}const Di=P({step_:GS});function HS(n,t,e,s,o=0,r=0,i=0,a=0,l=0){const u={x:E(n,"x","stridedSlice","string_or_numeric")},h={begin:t,end:e,strides:s,beginMask:o,endMask:r,ellipsisMask:i,newAxisMask:a,shrinkAxisMask:l};return _.runKernel(Dh,u,h)}const jS=P({stridedSlice_:HS});function qS(n){const e={x:E(n,"x","tan","float32")};return _.runKernel(vi,e)}const KS=P({tan_:qS});function We(n,t){_m(n);const e=nc(n,t);if(e.length!==1)throw new Error("tensor1d() requires values to be a flat/TypedArray");return sc(n,null,e,t)}function Vc(n,t,e){if(_m(n),t!=null&&t.length!==2)throw new Error("tensor2d() requires shape to have two numbers");const s=nc(n,e);if(s.length!==2&&s.length!==1)throw new Error("tensor2d() requires values to be number[][] or flat/TypedArray");if(s.length===1&&t==null)throw new Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");return sc(n,t,s,e)}function sx(n,t,e){const s=t.rank>1?t.shape[t.rank-1]:1,o=t.rank>1?t.rank-1:1,r=`Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: ${e.shape}, indices.shape: ${t.shape}, shape: ${n}, sliceDim: ${s}, and batchDim: ${o}.`;if(e.rank<o)throw new Error(r+` update.rank < ${o}. `);if(n.length<s+(e.rank-o))throw new Error(r+` Output shape length < ${s+(e.rank-o)}`);if(e.rank!==o+n.length-s)throw new Error(r+` update.rank != ${o+n.length-s}`);for(let i=0;i<o;++i)if(e.shape[i]!==t.shape[i])throw new Error(r+` updates.shape[${i}] (${e.shape[i]}) != indices.shape[${i}] (${t.shape[i]}).`);for(let i=0;i<e.rank-o;++i)if(e.shape[i+o]!==n[i+s])throw new Error(r+` updates.shape[${i+o}] (${e.shape[i+o]}) != shape[${i+o}] (${n[i+o]})`)}function XS(n,t,e){if(t.rank<1)throw new Error(`tf.scatterND() expects the indices to be rank 1 or higher, but the rank was ${t.rank}.`);if(n.rank<1)throw new Error(`tf.scatterND() expects the updates to be rank 1 or higher, but the rank was ${n.rank}.`);if(t.dtype!=="int32")throw new Error(`The dtype of 'indices' should be int32, but got dtype: ${t.dtype}`);if(e.length<1)throw new Error(`Output rank must be greater or equal to 1, but got shape: ${e}`);if(e.length===0){if(t.size===0)throw new Error(`Indices specified for empty output. indices shape: ${t.shape}`);if(n.size===0)throw new Error(`Updates specified for empty output. updates shape: ${n.shape}`)}sx(e,t,n)}function co(n,t,e){const s=t.shape.length,o=s>1?t.shape[s-1]:1,r=e.length;let i=1;for(let h=o;h<r;++h)i*=e[h];const a=o<1?1:o,l=H(t.shape)/a,c=[...lt(e.slice(0,o)),1],u=H(e);return{sliceRank:o,numUpdates:l,sliceSize:i,strides:c,outputSize:u}}function YS(n,t=1,e=!0){const s=E(n,"x","topk");if(s.rank===0)throw new Error("topk() expects the input to be of rank 1 or higher");const o=s.shape[s.shape.length-1];if(t<0)throw new Error(`'k' passed to topk() must be >= 0 but got ${t}`);if(t>o)throw new Error(`'k' passed to topk() must be <= the last dimension (${o}) but got ${t}`);const r={x:s},i={k:t,sorted:e},[a,l]=_.runKernel(Fh,r,i);return{values:a,indices:l}}const ZS=P({topk_:YS});function JS(n,t=0,e=1,s,o){if(Jn(n),s!=null&&s==="bool")throw new Error("Unsupported data type $ { dtype }");const r=new qg(t,e,s,!0,o),i=wt(n,s);for(let a=0;a<i.values.length;a++)i.values[a]=r.nextValue();return i.toTensor()}const ox=P({truncatedNormal_:JS});function QS(n,t=0){const e=E(n,"x","unique","string_or_numeric");v(e.rank>0,()=>"The input tensor must be at least 1D");const s={x:e},o={axis:t},[r,i]=_.runKernel(Oh,s,o);return{values:r,indices:i}}const t2=P({unique_:QS});function e2(n,t,e){const s=E(n,"x","unsortedSegmentSum"),o=E(t,"segmentIds","unsortedSegmentSum","int32");v(Ao(e),()=>"numSegments must be of dtype int");const r={x:s,segmentIds:o},i={numSegments:e};return _.runKernel(Ql,r,i)}const rx=P({unsortedSegmentSum_:e2});function n2(n,t=0){const e=E(n,"x","unstack","string_or_numeric");v(t>=-e.shape.length&&t<e.shape.length,()=>`Axis = ${t} is not in [-${e.shape.length}, ${e.shape.length})`);const s={value:e},o={axis:t};return _.runKernel(Jl,s,o)}const eo=P({unstack_:n2});function s2(n,t=!0,e,s){return _.makeVariable(n,t,e,s)}function ix(n,t){const e=[];for(let r=0;r<t.length;r++)t[r]&&e.push(r);const s=wt(n,"int32"),o=wt([e.length,n.length],"int32");for(let r=0;r<e.length;r++){const i=s.indexToLoc(e[r]),a=r*n.length;o.values.set(i,a)}return o.toTensor()}function o2(n,t,e){const s=E(n,"x","transpose");if(t==null&&(t=s.shape.map((i,a)=>a).reverse()),v(s.rank===t.length,()=>`Error in transpose: rank of input ${s.rank} must match length of perm ${t}.`),t.forEach(i=>{v(i>=0&&i<s.rank,()=>`All entries in 'perm' must be between 0 and ${s.rank-1} but got ${t}`)}),s.rank<=1)return s.clone();const o={x:s},r={perm:t};return s.dtype==="complex64"?B(()=>{let i=_a(s),a=Kh(s);return i=_.runKernel(ko,{x:i},r),a=_.runKernel(ko,{x:a},r),e&&(a=Zt(a)),qs(i,a)}):_.runKernel(ko,o,r)}const vt=P({transpose_:o2});function r2(n,t){if(t==null)return n.shape.slice();if(Et(n.shape,t))return t;if(n.shape.length===t.length){const e=[];for(let s=0;s<n.shape.length;s++)t[s]==null&&n.shape[s]!=null?e.push(n.shape[s]):e.push(t[s]);return e}return t}function i2(n,t,e,s){const o=E(n,"x","dropout");if(v(o.dtype==="float32",()=>`x has to be a floating point tensor since it's going to be scaled, but got a ${o.dtype} tensor instead.`),v(t>=0&&t<1,()=>`rate must be a float in the range [0, 1), but got ${t}.`),t===0)return n instanceof Xt?o.clone():o;const r=r2(o,e),i=1-t,a=ut(cc(J(Ri(r,0,1,"float32",s),i)),i);return F(o,a)}const a2=P({dropout_:i2});function l2(n,t,e,s,o,r="NHWC",i){let a=n;n.rank===3&&(a=L(n,[1,n.shape[0],n.shape[1],n.shape[2]]));let l=t;l.rank===3&&(l=L(t,[1,t.shape[0],t.shape[1],t.shape[2]])),v(a.rank===4,()=>`Error in conv2dDerFilter: input must be rank 4, but got shape ${a.shape}.`),v(l.rank===4,()=>`Error in conv2dDerFilter: dy must be rank 4, but got shape ${l.shape}.`),v(e.length===4,()=>`Error in conv2dDerFilter: filterShape must be length 4, but got ${e}.`);const c=r==="NHWC"?a.shape[3]:a.shape[1],u=r==="NHWC"?l.shape[3]:l.shape[1];v(c===e[2],()=>`Error in conv2dDerFilter: depth of input ${c}) must match input depth in filter (${e[2]}.`),v(u===e[3],()=>`Error in conv2dDerFilter: depth of dy (${u}) must match output depth for filter (${e[3]}).`),ze("conv2dDerFilter",o,i);const h={x:a,dy:l},d={strides:s,pad:o,dataFormat:r,dimRoundingMode:i,filterShape:e};return _.runKernel(sh,h,d)}const id=P({conv2DBackpropFilter_:l2});function ad(n,t,e){if(e==null||e==="linear")return n;if(e==="relu")return F(n,Di(t));throw new Error(`Cannot compute gradient for fused activation ${e}.`)}function ld(n,t){let e=t;const s=le(n.shape,t.shape);return s.length>0&&(e=ct(e,s)),L(e,n.shape)}function cd(n,t,e,s){if(t==="linear")return n;if(t==="relu")return lo(n);if(t==="elu")return ac(n);if(t==="relu6")return Kg(n);if(t==="prelu")return ed(n,e);if(t==="leakyrelu")return Xh(n,s);if(t==="sigmoid")return Ho(n);throw new Error(`Unknown fused activation ${t}.`)}const ud=(n,t)=>!(n>0)||t==="linear";function c2({x:n,filter:t,strides:e,pad:s,dataFormat:o="NHWC",dilations:r=[1,1],dimRoundingMode:i,bias:a,activation:l="linear",preluActivationWeights:c,leakyreluAlpha:u}){if(l=l||"linear",ud(_.state.gradientDepth,l)===!1){v(o==="NHWC",()=>`Error in fused conv2d: got dataFormat of ${o} but only NHWC is currently supported for the case of gradient depth is 0 and the activation is not linear.`);let I=Js(n,t,e,s,o,r,i);return a!=null&&(I=J(I,a)),cd(I,l,c,u)}const h=E(n,"x","conv2d","float32"),d=E(t,"filter","conv2d","float32");let p=h,f=!1;h.rank===3&&(f=!0,p=L(h,[1,h.shape[0],h.shape[1],h.shape[2]])),v(p.rank===4,()=>`Error in fused conv2d: input must be rank 4, but got rank ${p.rank}.`),v(d.rank===4,()=>`Error in fused conv2d: filter must be rank 4, but got rank ${d.rank}.`),ze("fused conv2d",s,i);const m=o==="NHWC"?p.shape[3]:p.shape[1];v(d.shape[2]===m,()=>`Error in conv2d: depth of input (${m}) must match input depth for filter ${d.shape[2]}.`),v(ve(e,r),()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${e} and dilations '${r}'`);const g=be(p.shape,d.shape,e,r,s,i);let x;a!=null&&(x=E(a,"bias","fused conv2d"),[x]=Jt(x,h),o==="NHWC"?mt(g.outShape,x.shape):(v(x.shape.length<=1,()=>`Error in fused conv2d: only supports scalar or 1-D Tensor bias for NCHW format but got the bias of rank-${x.shape.length}.`),v(x.shape.length===0||x.shape[0]===g.outChannels||x.shape[0]===1,()=>`Error in fused conv2d: bias shape (${x.shape}) is not compatible with the number of output channels (${g.outChannels})`)));let b;if(c!=null){const I=c.shape;if(v(I.length<=1||I.length===3,()=>`Error in fused conv2d: only supports scalar, 1-D Tensor or 3-D Tensor PReLU activation weights but got a tensor of rank-${I.length}.`),I.length===1)v(I[0]===1||I[0]===g.outChannels,()=>`Error in fused conv2d: PReLU activation weights (${I}) is not compatible with the number of output channels (${g.outChannels}).`);else if(I.length===3)try{mt(I,g.outShape)}catch{const T=`Error in fused conv2d: PReLU activation weights (${I}) is not compatible with the output shape of the conv2d (${g.outShape}).`;throw Error(T)}b=E(c,"prelu weights","fused conv2d")}const w=(I,N)=>{v(o==="NHWC",()=>`Error in gradient of fused conv2D: got dataFormat of ${o} but only NHWC is currently supported.`);const[T,k,S,$]=N,R=ad(I,S,l);v(Ys(r),()=>`Error in gradient of fused conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${r}'`);const A=Uh(k.shape,R,T,e,s),O=id(k,R,T.shape,e,s),M=[A,O];if($!=null){const z=ld($,R);M.push(z)}return M},y={x:p,filter:d,bias:x,preluActivationWeights:b},C={strides:e,pad:s,dataFormat:o,dilations:r,dimRoundingMode:i,activation:l,leakyreluAlpha:u};return a==null?Oo((N,T,k)=>{let S=_.runKernel(Na,y,C);return k([T,N,S]),f&&(S=L(S,[S.shape[1],S.shape[2],S.shape[3]])),{value:S,gradFunc:w}})(p,d):Oo((N,T,k,S)=>{let $=_.runKernel(Na,y,C);return S([T,N,$,k]),f&&($=L($,[$.shape[1],$.shape[2],$.shape[3]])),{value:$,gradFunc:w}})(p,d,x)}const u2=P({fusedConv2d_:c2});function h2(n,t,e,s,o,r=[1,1],i){let a=n;n.rank===3&&(a=L(n,[1,n.shape[0],n.shape[1],n.shape[2]]));let l=t;l.rank===3&&(l=L(t,[1,t.shape[0],t.shape[1],t.shape[2]]));const c={x:a,dy:l},u={strides:s,pad:o,dimRoundingMode:i,dilations:r,filterShape:e};return _.runKernel(uh,c,u)}const d2=P({depthwiseConv2dNativeBackpropFilter_:h2});function p2(n,t,e,s,o,r=[1,1],i){let a=t,l=!1;t.rank===3&&(l=!0,a=L(t,[1,t.shape[0],t.shape[1],t.shape[2]]));const c={dy:a,filter:e},u={strides:s,pad:o,dimRoundingMode:i,dilations:r,inputShape:n},h=_.runKernel(hh,c,u);return l?L(h,[h.shape[1],h.shape[2],h.shape[3]]):h}const f2=P({depthwiseConv2dNativeBackpropInput_:p2});function m2({a:n,b:t,transposeA:e=!1,transposeB:s=!1,bias:o,activation:r="linear",preluActivationWeights:i,leakyreluAlpha:a=.2}){if(ud(_.state.gradientDepth,r)===!1){let $=It(n,t,e,s);return o!=null&&($=J($,o)),cd($,r,i,a)}let l=E(n,"a","fused matMul"),c=E(t,"b","fused matMul");[l,c]=Jt(l,c);const u=e?l.shape[l.rank-2]:l.shape[l.rank-1],h=s?c.shape[c.rank-1]:c.shape[c.rank-2],d=e?l.shape[l.rank-1]:l.shape[l.rank-2],p=s?c.shape[c.rank-2]:c.shape[c.rank-1],f=l.shape.slice(0,-2),m=c.shape.slice(0,-2),g=H(f),x=H(m);v(u===h,()=>`Error in fused matMul: inner shapes (${u}) and (${h}) of Tensors with shapes ${l.shape} and ${c.shape} and transposeA=${e} and transposeB=${s} must match.`);const w=mt(l.shape.slice(0,-2),c.shape.slice(0,-2)).concat([d,p]),y=e?L(l,[g,u,d]):L(l,[g,d,u]),C=s?L(c,[x,p,h]):L(c,[x,h,p]);let I;o!=null&&(I=E(o,"bias","fused matMul"),[I]=Jt(I,l),mt(w,I.shape));let N;i!=null&&(N=E(i,"prelu weights","fused matMul"));const T=($,R)=>{const[A,O,M,z]=R,G=ad(L($,M.shape),M,r);let V,U;if(!e&&!s?(V=It(G,O,!1,!0),U=It(A,G,!0,!1)):!e&&s?(V=It(G,O,!1,!1),U=It(G,A,!0,!1)):e&&!s?(V=It(O,G,!1,!0),U=It(A,G,!1,!1)):(V=It(O,G,!0,!0),U=It(G,A,!0,!0)),o!=null){const q=ld(z,G);return[V,U,q]}else return[V,U]},k={a:y,b:C,bias:I,preluActivationWeights:N},S={transposeA:e,transposeB:s,activation:r,leakyreluAlpha:a};return o==null?Oo((R,A,O)=>{const M=_.runKernel(Sa,k,S);return O([R,A,M]),{value:L(M,w),gradFunc:T}})(y,C):Oo((R,A,O,M)=>{const z=_.runKernel(Sa,k,S);return M([R,A,z,O]),{value:L(z,w),gradFunc:T}})(y,C,I)}const hf=P({fusedMatMul_:m2});function g2(n,t,e,s,o="bilinear",r=0){const i=E(n,"image","cropAndResize"),a=E(t,"boxes","cropAndResize","float32"),l=E(e,"boxInd","cropAndResize","int32"),c=a.shape[0];v(i.rank===4,()=>`Error in cropAndResize: image must be rank 4,but got rank ${i.rank}.`),v(a.rank===2&&a.shape[1]===4,()=>`Error in cropAndResize: boxes must be have size [${c},4] but had shape ${a.shape}.`),v(l.rank===1&&l.shape[0]===c,()=>`Error in cropAndResize: boxInd must be have size [${c}] but had shape ${a.shape}.`),v(s.length===2,()=>`Error in cropAndResize: cropSize must be of length 2, but got length ${s.length}.`),v(s[0]>=1&&s[1]>=1,()=>`cropSize must be atleast [1,1], but was ${s}`),v(o==="bilinear"||o==="nearest",()=>`method must be bilinear or nearest, but was ${o}`);const u={image:i,boxes:a,boxInd:l},h={method:o,extrapolationValue:r,cropSize:s};return _.runKernel(ah,u,h)}const x2=P({cropAndResize_:g2});function b2(n){const t=E(n,"image","flipLeftRight","float32");v(t.rank===4,()=>`Error in flipLeftRight: image must be rank 4,but got rank ${t.rank}.`);const e={image:t};return _.runKernel(gh,e,{})}const y2=P({flipLeftRight_:b2});function w2(n){const t=E(n,"image","grayscaleToRGB"),e=t.rank-1,s=t.shape[e];v(t.rank>=2,()=>`Error in grayscaleToRGB: images must be at least rank 2, but got rank ${t.rank}.`),v(s===1,()=>`Error in grayscaleToRGB: last dimension of a grayscale image should be size 1, but got size ${s}.`);const o=new Array(t.rank);return o.fill(1,0,e),o[e]=3,xn(t,o)}const C2=P({grayscaleToRGB_:w2});function $2(n){const t=E(n,"image","RGBToGrayscale"),e=t.rank-1,s=t.shape[e];v(t.rank>=2,()=>`Error in RGBToGrayscale: images must be at least rank 2, but got rank ${t.rank}.`),v(s===3,()=>`Error in RGBToGrayscale: last dimension of an RGB image should be size 3, but got size ${s}.`);const o=t.dtype,r=st(t,"float32"),i=We([.2989,.587,.114]);let a;switch(t.rank){case 2:a=lr("ij,j->i",r,i);break;case 3:a=lr("ijk,k->ij",r,i);break;case 4:a=lr("ijkl,l->ijk",r,i);break;case 5:a=lr("ijklm,m->ijkl",r,i);break;case 6:a=lr("ijklmn,n->ijklm",r,i);break;default:throw new Error("Not a valid tensor rank.")}return a=_e(a,-1),st(a,o)}const I2=P({rgbToGrayscale_:$2});function v2(n,t,e=0,s=.5){const o=E(n,"image","rotateWithOffset","float32");v(o.rank===4,()=>`Error in rotateWithOffset: image must be rank 4,but got rank ${o.rank}.`);const r={image:o},i={radians:t,fillValue:e,center:s};return _.runKernel(Mh,r,i)}const k2=P({rotateWithOffset_:v2});function qo(n,t,e,s,o,r){s==null&&(s=.5),o==null&&(o=Number.NEGATIVE_INFINITY),r==null&&(r=0);const i=n.shape[0];return e=Math.min(e,i),v(0<=s&&s<=1,()=>`iouThreshold must be in [0, 1], but was '${s}'`),v(n.rank===2,()=>`boxes must be a 2D tensor, but was of rank '${n.rank}'`),v(n.shape[1]===4,()=>`boxes must have 4 columns, but 2nd dimension was ${n.shape[1]}`),v(t.rank===1,()=>"scores must be a 1D tensor"),v(t.shape[0]===i,()=>`scores has incompatible shape with boxes. Expected ${i}, but was ${t.shape[0]}`),v(0<=r&&r<=1,()=>`softNmsSigma must be in [0, 1], but was '${r}'`),{maxOutputSize:e,iouThreshold:s,scoreThreshold:o,softNmsSigma:r}}function S2(n,t,e,s=.5,o=Number.NEGATIVE_INFINITY){const r=E(n,"boxes","nonMaxSuppression","float32"),i=E(t,"scores","nonMaxSuppression","float32"),a=qo(r,i,e,s,o);e=a.maxOutputSize,s=a.iouThreshold,o=a.scoreThreshold;const l={maxOutputSize:e,iouThreshold:s,scoreThreshold:o};return _.runKernel(Ih,{boxes:r,scores:i},l)}const N2=P({nonMaxSuppression_:S2});function T2(n,t,e){const s=E2(n,t,e),o=s<0?-(s+1):s;n.splice(o,0,t)}function E2(n,t,e){return A2(n,t,e||R2)}function R2(n,t){return n>t?1:n<t?-1:0}function A2(n,t,e){let s=0,o=n.length,r=0,i=!1;for(;s<o;){r=s+(o-s>>>1);const a=e(t,n[r]);a>0?s=r+1:(o=r,i=!a)}return i?s:-s-1}function hd(n,t,e,s,o){return fd(n,t,e,s,o,0)}function dd(n,t,e,s,o,r){return fd(n,t,e,s,o,0,!1,r,!0)}function pd(n,t,e,s,o,r){return fd(n,t,e,s,o,r,!0)}function fd(n,t,e,s,o,r,i=!1,a=!1,l=!1){const c=[];for(let g=0;g<t.length;g++)t[g]>o&&c.push({score:t[g],boxIndex:g,suppressBeginIndex:0});c.sort(df);const u=r>0?-.5/r:0,h=[],d=[];for(;h.length<e&&c.length>0;){const g=c.pop(),{score:x,boxIndex:b,suppressBeginIndex:w}=g;if(x<o)break;let y=!1;for(let C=h.length-1;C>=w;--C){const I=D2(n,b,h[C]);if(I>=s){y=!0;break}if(g.score=g.score*F2(s,u,I),g.score<=o)break}g.suppressBeginIndex=h.length,y||(g.score===x?(h.push(b),d.push(g.score)):g.score>o&&T2(c,g,df))}const p=h.length,f=e-p;a&&f>0&&(h.push(...new Array(f).fill(0)),d.push(...new Array(f).fill(0)));const m={selectedIndices:h};return i&&(m.selectedScores=d),l&&(m.validOutputs=p),m}function D2(n,t,e){const s=n.subarray(t*4,t*4+4),o=n.subarray(e*4,e*4+4),r=Math.min(s[0],s[2]),i=Math.min(s[1],s[3]),a=Math.max(s[0],s[2]),l=Math.max(s[1],s[3]),c=Math.min(o[0],o[2]),u=Math.min(o[1],o[3]),h=Math.max(o[0],o[2]),d=Math.max(o[1],o[3]),p=(a-r)*(l-i),f=(h-c)*(d-u);if(p<=0||f<=0)return 0;const m=Math.max(r,c),g=Math.max(i,u),x=Math.min(a,h),b=Math.min(l,d),w=Math.max(x-m,0)*Math.max(b-g,0);return w/(p+f-w)}function F2(n,t,e){const s=Math.exp(t*e*e);return e<=n?s:0}function df(n,t){return n.score-t.score||n.score===t.score&&t.boxIndex-n.boxIndex}async function _2(n,t,e,s=.5,o=Number.NEGATIVE_INFINITY){const r=E(n,"boxes","nonMaxSuppressionAsync"),i=E(t,"scores","nonMaxSuppressionAsync"),a=qo(r,i,e,s,o);e=a.maxOutputSize,s=a.iouThreshold,o=a.scoreThreshold;const l=await Promise.all([r.data(),i.data()]),c=l[0],u=l[1],{selectedIndices:h}=hd(c,u,e,s,o);return r!==n&&r.dispose(),i!==t&&i.dispose(),We(h,"int32")}const O2=_2;function M2(n,t,e,s=.5,o=Number.NEGATIVE_INFINITY,r=0){const i=E(n,"boxes","nonMaxSuppression"),a=E(t,"scores","nonMaxSuppression"),l=qo(i,a,e,s,o,r);e=l.maxOutputSize,s=l.iouThreshold,o=l.scoreThreshold,r=l.softNmsSigma;const c={boxes:i,scores:a},u={maxOutputSize:e,iouThreshold:s,scoreThreshold:o,softNmsSigma:r},h=_.runKernel(kh,c,u);return{selectedIndices:h[0],selectedScores:h[1]}}const L2=P({nonMaxSuppressionWithScore_:M2});async function P2(n,t,e,s=.5,o=Number.NEGATIVE_INFINITY,r=0){const i=E(n,"boxes","nonMaxSuppressionAsync"),a=E(t,"scores","nonMaxSuppressionAsync"),l=qo(i,a,e,s,o,r);e=l.maxOutputSize,s=l.iouThreshold,o=l.scoreThreshold,r=l.softNmsSigma;const c=await Promise.all([i.data(),a.data()]),u=c[0],h=c[1],{selectedIndices:d,selectedScores:p}=pd(u,h,e,s,o,r);return i!==n&&i.dispose(),a!==t&&a.dispose(),{selectedIndices:We(d,"int32"),selectedScores:We(p)}}const z2=P2;function B2(n,t,e,s=.5,o=Number.NEGATIVE_INFINITY,r=!1){const i=E(n,"boxes","nonMaxSuppression"),a=E(t,"scores","nonMaxSuppression"),l=qo(i,a,e,s,o,null),c=l.maxOutputSize,u=l.iouThreshold,h=l.scoreThreshold,d={boxes:i,scores:a},p={maxOutputSize:c,iouThreshold:u,scoreThreshold:h,padToMaxOutputSize:r},f=_.runKernel(vh,d,p);return{selectedIndices:f[0],validOutputs:f[1]}}const V2=P({nonMaxSuppressionPadded_:B2});async function W2(n,t,e,s=.5,o=Number.NEGATIVE_INFINITY,r=!1){const i=E(n,"boxes","nonMaxSuppressionAsync"),a=E(t,"scores","nonMaxSuppressionAsync"),l=qo(i,a,e,s,o,null),c=l.maxOutputSize,u=l.iouThreshold,h=l.scoreThreshold,[d,p]=await Promise.all([i.data(),a.data()]),{selectedIndices:f,validOutputs:m}=dd(d,p,c,u,h,r);return i!==n&&i.dispose(),a!==t&&a.dispose(),{selectedIndices:We(f,"int32"),validOutputs:Tt(m,"int32")}}const U2=W2;function G2(n,t,e=!1,s=!1){const o=E(n,"images","resizeBilinear");v(o.rank===3||o.rank===4,()=>`Error in resizeBilinear: x must be rank 3 or 4, but got rank ${o.rank}.`),v(t.length===2,()=>`Error in resizeBilinear: new shape must 2D, but got shape ${t}.`),v(s===!1||e===!1,()=>"Error in resizeBilinear: If halfPixelCenters is true, alignCorners must be false.");let r=o,i=!1;o.rank===3&&(i=!0,r=L(o,[1,o.shape[0],o.shape[1],o.shape[2]]));const a={images:r},l={alignCorners:e,halfPixelCenters:s,size:t},c=_.runKernel(Gl,a,l);return i?L(c,[c.shape[1],c.shape[2],c.shape[3]]):c}const ax=P({resizeBilinear_:G2});function H2(n,t,e=!1,s=!1){const o=E(n,"images","resizeNearestNeighbor");v(o.rank===3||o.rank===4,()=>`Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank ${o.rank}.`),v(t.length===2,()=>`Error in resizeNearestNeighbor: new shape must 2D, but got shape ${t}.`),v(o.dtype==="float32"||o.dtype==="int32",()=>"`images` must have `int32` or `float32` as dtype"),v(s===!1||e===!1,()=>"Error in resizeNearestNeighbor: If halfPixelCenters is true, alignCorners must be false.");let r=o,i=!1;o.rank===3&&(i=!0,r=L(o,[1,o.shape[0],o.shape[1],o.shape[2]]));const a={images:r},l={alignCorners:e,halfPixelCenters:s,size:t},c=_.runKernel(Ul,a,l);return i?L(c,[c.shape[1],c.shape[2],c.shape[3]]):c}const lx=P({resizeNearestNeighbor_:H2});function j2(n,t="binary",e=!1,s=.5){const o=E(n,"image","threshold"),r=.2989,i=.587,a=.114,l=o.shape[0]*o.shape[1];let c=F(We([s]),255),u,h,d,p;if(v(o.rank===3,()=>`Error in threshold: image must be rank 3,but got rank ${o.rank}.`),v(o.shape[2]===3||o.shape[2]===1,()=>`Error in threshold: image color channel must be equal to 3 or 1but got ${o.shape[2]}.`),v(o.dtype==="int32"||o.dtype==="float32",()=>`Error in dtype: image dtype must be int32 or float32,but got dtype ${o.dtype}.`),v(t==="otsu"||t==="binary",()=>`Method must be binary or otsu, but was ${t}`),o.shape[2]===3){[u,h,d]=Xe(o,[1,1,1],-1);const g=F(u,r),x=F(h,i),b=F(d,a);p=J(J(g,x),b)}else p=n;if(t==="otsu"){const g=WI(st(Xg(p),"int32"),So([]),256);c=q2(g,l)}const f=e?jo(p,c):Ze(p,c);return st(F(f,255),"int32")}function q2(n,t){let e=We([-1]),s=We([0]),o=We([0]),r,i,a,l,c,u;for(let h=0;h<n.size-1;h++){r=zt(n,0,h+1),i=zt(n,h+1),c=ut(ct(r),t),u=ut(ct(i),t);const d=ct(F(r,Ir(0,r.size)));a=ut(d,ct(r));const p=ic(i.shape,r.size),f=J(Ir(0,i.size),p),m=F(i,f);l=ut(ct(m),ct(i));const g=pt(a,l),x=pt(a,l),b=F(c,u);o=F(F(b,g),x);const w=Ze(o,s);s=Re(w,o,s),e=Re(w,We([h]),e)}return e}const K2=P({threshold_:j2});function X2(n,t,e="nearest",s="constant",o=0,r){const i=E(n,"image","transform","float32"),a=E(t,"transforms","transform","float32");v(i.rank===4,()=>`Error in transform: image must be rank 4,but got rank ${i.rank}.`),v(a.rank===2&&(a.shape[0]===i.shape[0]||a.shape[0]===1)&&a.shape[1]===8,()=>"Error in transform: Input transform should be batch x 8 or 1 x 8"),v(r==null||r.length===2,()=>`Error in transform: outputShape must be [height, width] or null, but got ${r}.`);const l={image:i,transforms:a},c={interpolation:e,fillMode:s,fillValue:o,outputShape:r};return _.runKernel(_h,l,c)}const Y2=P({transform_:X2});function Z2(n,t,e){const s=E(n,"a","bandPart");v(s.rank>=2,()=>`bandPart(): Rank must be at least 2, got ${s.rank}.`);const o=s.shape,[r,i]=s.shape.slice(-2);let a,l;typeof t=="number"?(v(t%1===0,()=>`bandPart(): numLower must be an integer, got ${t}.`),v(t<=r,()=>`bandPart(): numLower (${t}) must not be greater than the number of rows (${r}).`),a=E(t<0?r:t,"numLower","bandPart")):(v(t.dtype==="int32",()=>"bandPart(): numLower's dtype must be an int32."),a=Re(Da(t,0),r,$r(t,r))),typeof e=="number"?(v(e%1===0,()=>`bandPart(): numUpper must be an integer, got ${e}.`),v(e<=i,()=>`bandPart(): numUpper (${e}) must not be greater than the number of columns (${i}).`),l=E(e<0?i:e,"numUpper","bandPart")):(v(e.dtype==="int32",()=>"bandPart(): numUpper's dtype must be an int32."),l=Re(Da(e,0),i,$r(e,i)));const c=L(Ir(0,r,1,"int32"),[-1,1]),u=Ir(0,i,1,"int32"),h=pt(c,u),d=Xn(jo(h,a),ao(h,Zt(l))),p=de([r,i],s.dtype);return L(Bn(eo(L(s,[-1,r,i])).map(f=>Re(d,f,p))),o)}const J2=P({bandPart_:Z2});function Q2(n){let t;if(Array.isArray(n)){t=!1,v(n!=null&&n.length>0,()=>"Gram-Schmidt process: input must not be null, undefined, or empty");const o=n[0].shape[0];for(let r=1;r<n.length;++r)v(n[r].shape[0]===o,()=>`Gram-Schmidt: Non-unique lengths found in the input vectors: (${n[r].shape[0]} vs. ${o})`)}else t=!0,n=Xe(n,n.shape[0],0).map(o=>Ai(o,[0]));v(n.length<=n[0].shape[0],()=>`Gram-Schmidt: Number of vectors (${n.length}) exceeds number of dimensions (${n[0].shape[0]}).`);const e=[],s=n;for(let o=0;o<n.length;++o)e.push(_.tidy(()=>{let r=s[o];if(o>0)for(let i=0;i<o;++i){const a=F(ct(F(e[i],r)),e[i]);r=pt(r,a)}return ut(r,lc(r,"euclidean"))}));return t?Bn(e,0):e}const tN=P({gramSchmidt_:Q2});function eN(n,t=!1){if(v(n.rank>=2,()=>`qr() requires input tensor to have a rank >= 2, but got rank ${n.rank}`),n.rank===2)return pf(n,t);{const e=n.shape.slice(0,n.shape.length-2).reduce((l,c)=>l*c),s=eo(L(n,[e,n.shape[n.shape.length-2],n.shape[n.shape.length-1]]),0),o=[],r=[];s.forEach(l=>{const[c,u]=pf(l,t);o.push(c),r.push(u)});const i=L(Bn(o,0),n.shape),a=L(Bn(r,0),n.shape);return[i,a]}}function pf(n,t=!1){return _.tidy(()=>{v(n.shape.length===2,()=>`qr2d() requires a 2D Tensor, but got a ${n.shape.length}D Tensor.`);const e=n.shape[0],s=n.shape[1];let o=Vg(e),r=Ws(n);const i=Vc([[1]],[1,1]);let a=Ws(i);const l=e>=s?s:e;for(let c=0;c<l;++c){const u=r,h=a,d=o;[a,r,o]=_.tidy(()=>{const p=zt(r,[c,c],[e-c,1]),f=lc(p),m=zt(r,[c,c],[1,1]),g=Re(Ze(m,0),Vc([[-1]]),Vc([[1]])),x=pt(m,F(g,f)),b=ut(p,x);b.shape[0]===1?a=Ws(i):a=Me([i,zt(b,[1,0],[b.shape[0]-1,b.shape[1]])],0);const w=Zt(ut(It(g,x),f)),y=zt(r,[c,0],[e-c,s]),C=F(w,a),I=vt(a);if(c===0)r=pt(y,It(C,It(I,y)));else{const k=pt(y,It(C,It(I,y)));r=Me([zt(r,[0,0],[c,s]),k],0)}const N=vt(C),T=zt(o,[0,c],[e,o.shape[1]-c]);if(c===0)o=pt(T,It(It(T,a),N));else{const k=pt(T,It(It(T,a),N));o=Me([zt(o,[0,0],[e,c]),k],1)}return[a,r,o]}),yt([u,h,d])}return!t&&e>s&&(o=zt(o,[0,0],[e,s]),r=zt(r,[0,0],[s,s])),[o,r]})}const nN=P({qr_:eN});const Kn={flipLeftRight:y2,grayscaleToRGB:C2,resizeNearestNeighbor:lx,resizeBilinear:ax,rgbToGrayscale:I2,rotateWithOffset:k2,cropAndResize:x2,nonMaxSuppression:N2,nonMaxSuppressionAsync:O2,nonMaxSuppressionWithScore:L2,nonMaxSuppressionWithScoreAsync:z2,nonMaxSuppressionPadded:V2,nonMaxSuppressionPaddedAsync:U2,threshold:K2,transform:Y2},sN={bandPart:J2,gramSchmidt:tN,qr:nN};const oN=new Map,rN=new Map;class Ko{getClassName(){return this.constructor.className}static fromConfig(t,e){return new t(e)}}class nn{constructor(){this.classNameMap={}}static getMap(){return nn.instance==null&&(nn.instance=new nn),nn.instance}static register(t){nn.getMap().classNameMap[t.className]=[t,t.fromConfig]}}function X(n,t,e){v(n.className!=null,()=>"Class being registered does not have the static className property defined."),v(typeof n.className=="string",()=>"className is required to be a string, but got type "+typeof n.className),v(n.className.length>0,()=>"Class being registered has an empty-string as its className, which is disallowed."),typeof t>"u"&&(t="Custom"),typeof e>"u"&&(e=n.className);const s=e,o=t+">"+s;return nn.register(n),oN.set(o,n),rN.set(n,o),n}class Ns extends Ko{minimize(t,e=!1,s){const{value:o,grads:r}=this.computeGradients(t,s);if(s!=null){const i=s.map(a=>({name:a.name,tensor:r[a.name]}));this.applyGradients(i)}else this.applyGradients(r);return yt(r),e?o:(o.dispose(),null)}get iterations(){return this.iterations_==null&&(this.iterations_=0),this.iterations_}incrementIterations(){this.iterations_=this.iterations+1}computeGradients(t,e){return ck(t,e)}dispose(){this.iterations_!=null&&yt(this.iterations_)}async saveIterations(){return this.iterations_==null&&(this.iterations_=0),{name:"iter",tensor:Tt(this.iterations_,"int32")}}async getWeights(){throw new Error("getWeights() is not implemented for this optimizer yet.")}async setWeights(t){throw new Error(`setWeights() is not implemented for this optimizer class ${this.getClassName()}`)}async extractIterations(t){return this.iterations_=(await t[0].tensor.data())[0],t.slice(1)}}Object.defineProperty(Ns,Symbol.hasInstance,{value:n=>n.minimize!=null&&n.computeGradients!=null&&n.applyGradients!=null});class cx extends Ns{static get className(){return"Adadelta"}constructor(t,e,s=null){super(),this.learningRate=t,this.rho=e,this.epsilon=s,this.accumulatedGrads=[],this.accumulatedUpdates=[],s==null&&(this.epsilon=_.backend.epsilon())}applyGradients(t){(Array.isArray(t)?t.map(s=>s.name):Object.keys(t)).forEach((s,o)=>{const r=_.registeredVariables[s],i=!1;this.accumulatedGrads[o]==null&&(this.accumulatedGrads[o]={originalName:`${s}/accum_grad`,variable:B(()=>kt(r).variable(i))}),this.accumulatedUpdates[o]==null&&(this.accumulatedUpdates[o]={originalName:`${s}/accum_var`,variable:B(()=>kt(r).variable(i))});const a=Array.isArray(t)?t[o].tensor:t[s];if(a==null)return;const l=this.accumulatedGrads[o].variable,c=this.accumulatedUpdates[o].variable;B(()=>{const u=J(F(l,this.rho),F(Vt(a),1-this.rho)),h=F(ut(Ie(J(c,this.epsilon)),Ie(J(l,this.epsilon))),a),d=J(F(c,this.rho),F(Vt(h),1-this.rho));l.assign(u),c.assign(d);const p=J(F(h,-this.learningRate),r);r.assign(p)})}),this.incrementIterations()}dispose(){this.accumulatedUpdates!=null&&(yt(this.accumulatedGrads.map(t=>t.variable)),yt(this.accumulatedUpdates.map(t=>t.variable)))}async getWeights(){const t=[...this.accumulatedGrads,...this.accumulatedUpdates];return[await this.saveIterations()].concat(t.map(e=>({name:e.originalName,tensor:e.variable})))}async setWeights(t){t=await this.extractIterations(t);const e=t.length/2,s=!1;this.accumulatedGrads=t.slice(0,e).map(o=>({originalName:o.name,variable:o.tensor.variable(s)})),this.accumulatedUpdates=t.slice(e,e*2).map(o=>({originalName:o.name,variable:o.tensor.variable(s)}))}getConfig(){return{learningRate:this.learningRate,rho:this.rho,epsilon:this.epsilon}}static fromConfig(t,e){return new t(e.learningRate,e.rho,e.epsilon)}}class ux extends Ns{static get className(){return"Adagrad"}constructor(t,e=.1){super(),this.learningRate=t,this.initialAccumulatorValue=e,this.accumulatedGrads=[]}applyGradients(t){(Array.isArray(t)?t.map(s=>s.name):Object.keys(t)).forEach((s,o)=>{const r=_.registeredVariables[s];this.accumulatedGrads[o]==null&&(this.accumulatedGrads[o]={originalName:`${s}/accumulator`,variable:B(()=>ic(r.shape,this.initialAccumulatorValue).variable(!1))});const i=Array.isArray(t)?t[o].tensor:t[s];if(i==null)return;const a=this.accumulatedGrads[o].variable;B(()=>{const l=J(a,Vt(i));a.assign(l);const c=J(F(ut(i,Ie(J(l,_.backend.epsilon()))),-this.learningRate),r);r.assign(c)})}),this.incrementIterations()}dispose(){this.accumulatedGrads!=null&&yt(this.accumulatedGrads.map(t=>t.variable))}async getWeights(){return[await this.saveIterations()].concat(this.accumulatedGrads.map(t=>({name:t.originalName,tensor:t.variable})))}async setWeights(t){t=await this.extractIterations(t);const e=!1;this.accumulatedGrads=t.map(s=>({originalName:s.name,variable:s.tensor.variable(e)}))}getConfig(){return{learningRate:this.learningRate,initialAccumulatorValue:this.initialAccumulatorValue}}static fromConfig(t,e){return new t(e.learningRate,e.initialAccumulatorValue)}}class hx extends Ns{static get className(){return"Adam"}constructor(t,e,s,o=null){super(),this.learningRate=t,this.beta1=e,this.beta2=s,this.epsilon=o,this.accumulatedFirstMoment=[],this.accumulatedSecondMoment=[],B(()=>{this.accBeta1=Tt(e).variable(),this.accBeta2=Tt(s).variable()}),o==null&&(this.epsilon=_.backend.epsilon())}applyGradients(t){const e=Array.isArray(t)?t.map(s=>s.name):Object.keys(t);B(()=>{const s=pt(1,this.accBeta1),o=pt(1,this.accBeta2);e.forEach((r,i)=>{const a=_.registeredVariables[r],l=!1;this.accumulatedFirstMoment[i]==null&&(this.accumulatedFirstMoment[i]={originalName:`${r}/m`,variable:B(()=>kt(a).variable(l))}),this.accumulatedSecondMoment[i]==null&&(this.accumulatedSecondMoment[i]={originalName:`${r}/v`,variable:B(()=>kt(a).variable(l))});const c=Array.isArray(t)?t[i].tensor:t[r];if(c==null)return;const u=this.accumulatedFirstMoment[i].variable,h=this.accumulatedSecondMoment[i].variable,d=J(F(u,this.beta1),F(c,1-this.beta1)),p=J(F(h,this.beta2),F(Vt(c),1-this.beta2)),f=ut(d,s),m=ut(p,o);u.assign(d),h.assign(p);const g=J(F(ut(f,J(Ie(m),this.epsilon)),-this.learningRate),a);a.assign(g)}),this.accBeta1.assign(F(this.accBeta1,this.beta1)),this.accBeta2.assign(F(this.accBeta2,this.beta2))}),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.accBeta2.dispose(),this.accumulatedFirstMoment!=null&&yt(this.accumulatedFirstMoment.map(t=>t.variable)),this.accumulatedSecondMoment!=null&&yt(this.accumulatedSecondMoment.map(t=>t.variable))}async getWeights(){const t=[...this.accumulatedFirstMoment,...this.accumulatedSecondMoment];return[await this.saveIterations()].concat(t.map(e=>({name:e.originalName,tensor:e.variable})))}async setWeights(t){t=await this.extractIterations(t),B(()=>{this.accBeta1.assign(Qs(this.beta1,this.iterations_+1)),this.accBeta2.assign(Qs(this.beta2,this.iterations_+1))});const e=t.length/2,s=!1;this.accumulatedFirstMoment=t.slice(0,e).map(o=>({originalName:o.name,variable:o.tensor.variable(s)})),this.accumulatedSecondMoment=t.slice(e,e*2).map(o=>({originalName:o.name,variable:o.tensor.variable(s)}))}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon}}static fromConfig(t,e){return new t(e.learningRate,e.beta1,e.beta2,e.epsilon)}}class dx extends Ns{static get className(){return"Adamax"}constructor(t,e,s,o=null,r=0){super(),this.learningRate=t,this.beta1=e,this.beta2=s,this.epsilon=o,this.decay=r,this.accumulatedFirstMoment=[],this.accumulatedWeightedInfNorm=[],B(()=>{this.iteration=Tt(0).variable(),this.accBeta1=Tt(e).variable()}),o==null&&(this.epsilon=_.backend.epsilon())}applyGradients(t){const e=Array.isArray(t)?t.map(s=>s.name):Object.keys(t);B(()=>{const s=pt(1,this.accBeta1),o=ut(-this.learningRate,J(F(this.iteration,this.decay),1));e.forEach((r,i)=>{const a=_.registeredVariables[r],l=!1;this.accumulatedFirstMoment[i]==null&&(this.accumulatedFirstMoment[i]={originalName:`${r}/m`,variable:kt(a).variable(l)}),this.accumulatedWeightedInfNorm[i]==null&&(this.accumulatedWeightedInfNorm[i]={originalName:`${r}/v`,variable:kt(a).variable(l)});const c=Array.isArray(t)?t[i].tensor:t[r];if(c==null)return;const u=this.accumulatedFirstMoment[i].variable,h=this.accumulatedWeightedInfNorm[i].variable,d=J(F(u,this.beta1),F(c,1-this.beta1)),p=F(h,this.beta2),f=Ne(c),m=Ss(p,f);u.assign(d),h.assign(m);const g=J(F(ut(o,s),ut(d,J(m,this.epsilon))),a);a.assign(g)}),this.iteration.assign(J(this.iteration,1)),this.accBeta1.assign(F(this.accBeta1,this.beta1))}),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.iteration.dispose(),this.accumulatedFirstMoment!=null&&yt(this.accumulatedFirstMoment.map(t=>t.variable)),this.accumulatedWeightedInfNorm!=null&&yt(this.accumulatedWeightedInfNorm.map(t=>t.variable))}async getWeights(){throw new Error("getWeights() is not implemented for Adamax yet.")}async setWeights(t){throw new Error("setWeights() is not implemented for Adamax yet.")}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon,decay:this.decay}}static fromConfig(t,e){return new t(e.learningRate,e.beta1,e.beta2,e.epsilon,e.decay)}}class md extends Ns{static get className(){return"SGD"}constructor(t){super(),this.learningRate=t,this.setLearningRate(t)}applyGradients(t){(Array.isArray(t)?t.map(s=>s.name):Object.keys(t)).forEach((s,o)=>{const r=Array.isArray(t)?t[o].tensor:t[s];if(r==null)return;const i=_.registeredVariables[s];B(()=>{const a=J(F(this.c,r),i);i.assign(a)})}),this.incrementIterations()}setLearningRate(t){this.learningRate=t,this.c!=null&&this.c.dispose(),this.c=Dn(Tt(-t))}dispose(){this.c.dispose()}async getWeights(){return[await this.saveIterations()]}async setWeights(t){if(t=await this.extractIterations(t),t.length!==0)throw new Error("SGD optimizer does not have settable weights.")}getConfig(){return{learningRate:this.learningRate}}static fromConfig(t,e){return new t(e.learningRate)}}class px extends md{static get className(){return"Momentum"}constructor(t,e,s=!1){super(t),this.learningRate=t,this.momentum=e,this.useNesterov=s,this.accumulations=[],this.m=Tt(this.momentum)}applyGradients(t){(Array.isArray(t)?t.map(s=>s.name):Object.keys(t)).forEach((s,o)=>{const r=_.registeredVariables[s];this.accumulations[o]==null&&(this.accumulations[o]={originalName:`${s}/momentum`,variable:B(()=>kt(r).variable(!1))});const i=this.accumulations[o].variable,a=Array.isArray(t)?t[o].tensor:t[s];a!=null&&B(()=>{let l;const c=J(F(this.m,i),a);this.useNesterov?l=J(F(this.c,J(a,F(c,this.m))),r):l=J(F(this.c,c),r),i.assign(c),r.assign(l)})}),this.incrementIterations()}dispose(){this.m.dispose(),this.accumulations!=null&&yt(this.accumulations.map(t=>t.variable))}setMomentum(t){this.momentum=t}async getWeights(){return[await this.saveIterations()].concat(this.accumulations.map(t=>({name:t.originalName,tensor:t.variable})))}async setWeights(t){t=await this.extractIterations(t);const e=!1;this.accumulations=t.map(s=>({originalName:s.name,variable:s.tensor.variable(e)}))}getConfig(){return{learningRate:this.learningRate,momentum:this.momentum,useNesterov:this.useNesterov}}static fromConfig(t,e){return new t(e.learningRate,e.momentum,e.useNesterov)}}class fx extends Ns{static get className(){return"RMSProp"}constructor(t,e=.9,s=0,o=null,r=!1){if(super(),this.learningRate=t,this.decay=e,this.momentum=s,this.epsilon=o,this.accumulatedMeanSquares=[],this.accumulatedMoments=[],this.accumulatedMeanGrads=[],this.centered=r,o==null&&(this.epsilon=_.backend.epsilon()),t==null)throw new Error("learningRate for RMSPropOptimizer must be defined.")}applyGradients(t){(Array.isArray(t)?t.map(s=>s.name):Object.keys(t)).forEach((s,o)=>{const r=_.registeredVariables[s],i=!1;this.accumulatedMeanSquares[o]==null&&(this.accumulatedMeanSquares[o]={originalName:`${s}/rms`,variable:B(()=>kt(r).variable(i))}),this.accumulatedMoments[o]==null&&(this.accumulatedMoments[o]={originalName:`${s}/momentum`,variable:B(()=>kt(r).variable(i))}),this.accumulatedMeanGrads[o]==null&&this.centered&&(this.accumulatedMeanGrads[o]={originalName:`${s}/mg`,variable:B(()=>kt(r).variable(i))});const a=Array.isArray(t)?t[o].tensor:t[s];if(a==null)return;const l=this.accumulatedMeanSquares[o].variable,c=this.accumulatedMoments[o].variable;B(()=>{const u=J(F(l,this.decay),F(Vt(a),1-this.decay));if(this.centered){const h=this.accumulatedMeanGrads[o].variable,d=J(F(h,this.decay),F(a,1-this.decay)),p=ut(F(a,this.learningRate),Ie(pt(u,J(Vt(d),this.epsilon)))),f=J(F(c,this.momentum),p);l.assign(u),h.assign(d),c.assign(f);const m=pt(r,f);r.assign(m)}else{const h=J(F(l,this.decay),F(Vt(a),1-this.decay)),d=J(F(c,this.momentum),ut(F(a,this.learningRate),Ie(J(h,this.epsilon))));l.assign(h),c.assign(d);const p=pt(r,d);r.assign(p)}})}),this.incrementIterations()}dispose(){this.accumulatedMeanSquares!=null&&yt(this.accumulatedMeanSquares.map(t=>t.variable)),this.accumulatedMeanGrads!=null&&this.centered&&yt(this.accumulatedMeanGrads.map(t=>t.variable)),this.accumulatedMoments!=null&&yt(this.accumulatedMoments.map(t=>t.variable))}async getWeights(){const t=[...this.accumulatedMeanSquares,...this.accumulatedMoments];return this.centered&&t.push(...this.accumulatedMeanGrads),[await this.saveIterations()].concat(t.map(e=>({name:e.originalName,tensor:e.variable})))}async setWeights(t){t=await this.extractIterations(t);const e=this.centered?t.length/3:t.length/2,s=!1;this.accumulatedMeanSquares=t.slice(0,e).map(o=>({originalName:o.name,variable:o.tensor.variable(s)})),this.accumulatedMoments=t.slice(e,e*2).map(o=>({originalName:o.name,variable:o.tensor.variable(s)})),this.centered&&(this.accumulatedMeanGrads=t.slice(e*2,e*3).map(o=>({originalName:o.name,variable:o.tensor.variable(s)})))}getConfig(){return{learningRate:this.learningRate,decay:this.decay,momentum:this.momentum,epsilon:this.epsilon,centered:this.centered}}static fromConfig(t,e){return new t(e.learningRate,e.decay,e.momentum,e.epsilon,e.centered)}}const iN=[cx,ux,hx,dx,px,fx,md];function aN(){for(const n of iN)X(n)}function ff(n,t,e,s){i(n),e=e??0,s=s??1,a(e,s);let o=0;const r=l=>(l.then(c=>{const u=e+ ++o/n.length*(s-e);return t(u),c}),l);function i(l){v(l!=null&&Array.isArray(l)&&l.length>0,()=>"promises must be a none empty array")}function a(l,c){v(l>=0&&l<=1,()=>`Progress fraction must be in range [0, 1], but got startFraction ${l}`),v(c>=0&&c<=1,()=>`Progress fraction must be in range [0, 1], but got endFraction ${c}`),v(c>=l,()=>`startFraction must be no more than endFraction, but got startFraction ${l} and endFraction ${c}`)}return Promise.all(n.map(r))}async function lN(n,t){t==null&&(t={});const e=t.fetchFunc==null?W().platform.fetch:t.fetchFunc,s=n.map(h=>e(h,t.requestInit,{isBinary:!0})),a=(t.onProgress==null?await Promise.all(s):await ff(s,t.onProgress,0,.5)).map(h=>h.arrayBuffer());return t.onProgress==null?await Promise.all(a):await ff(a,t.onProgress,.5,1)}function cN(n,t){var e;const s=t.fetchFunc==null?W().platform.fetch:t.fetchFunc;let o=0,r;return(e=t.onProgress)===null||e===void 0||e.call(t,0),new ReadableStream({pull:async i=>{for(var a;o<n.length;){r||(r=(await s(n[o],t.requestInit,{isBinary:!0})).body.getReader());const{done:l,value:c}=await r.read();if(l){o++,r=void 0,(a=t.onProgress)===null||a===void 0||a.call(t,o/n.length);continue}i.enqueue(c);return}i.close()}})}const uN="application/octet-stream",hN="application/json";class gd{constructor(t,e){if(this.DEFAULT_METHOD="POST",e==null&&(e={}),this.weightPathPrefix=e.weightPathPrefix,this.weightUrlConverter=e.weightUrlConverter,e.fetchFunc!=null?(v(typeof e.fetchFunc=="function",()=>"Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)"),this.fetch=e.fetchFunc):this.fetch=W().platform.fetch,v(t!=null&&t.length>0,()=>"URL path for http must not be null, undefined or empty."),Array.isArray(t)&&v(t.length===2,()=>`URL paths for http must have a length of 2, (actual length is ${t.length}).`),this.path=t,e.requestInit!=null&&e.requestInit.body!=null)throw new Error("requestInit is expected to have no pre-existing body, but has one.");this.requestInit=e.requestInit||{},this.loadOptions=e}async save(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.");const e=Object.assign({method:this.DEFAULT_METHOD},this.requestInit);e.body=new FormData;const s=[{paths:["./model.weights.bin"],weights:t.weightSpecs}],o=$$(t,s);if(e.body.append("model.json",new Blob([JSON.stringify(o)],{type:hN}),"model.json"),t.weightData!=null){const i=Is.join(t.weightData);e.body.append("model.weights.bin",new Blob([i],{type:uN}),"model.weights.bin")}const r=await this.fetch(this.path,e);if(r.ok)return{modelArtifactsInfo:zh(t),responses:[r]};throw new Error(`BrowserHTTPRequest.save() failed due to HTTP response status ${r.status}.`)}async loadModelJSON(){const t=await this.fetch(this.path,this.requestInit);if(!t.ok)throw new Error(`Request to ${this.path} failed with status code ${t.status}. Please verify this URL points to the model JSON of the model to load.`);let e;try{e=await t.json()}catch{let i=`Failed to parse model JSON of response from ${this.path}.`;throw this.path.endsWith(".pb")?i+=" Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository.":i+=" Please make sure the server is serving valid JSON for this request.",new Error(i)}const s=e.modelTopology,o=e.weightsManifest;if(s==null&&o==null)throw new Error(`The JSON from HTTP path ${this.path} contains neither model topology or manifest for weights.`);return e}async load(){if(this.loadOptions.streamWeights)return this.loadStream();const t=await this.loadModelJSON();return v$(t,e=>this.loadWeights(e))}async loadStream(){const t=await this.loadModelJSON(),e=await this.getWeightUrls(t.weightsManifest),s=Jp(t.weightsManifest),o=()=>cN(e,this.loadOptions);return Object.assign(Object.assign({},t),{weightSpecs:s,getWeightStream:o})}async getWeightUrls(t){const e=Array.isArray(this.path)?this.path[1]:this.path,[s,o]=dN(e),r=this.weightPathPrefix||s,i=[],a=[];for(const l of t)for(const c of l.paths)this.weightUrlConverter!=null?a.push(this.weightUrlConverter(c)):i.push(r+c+o);return this.weightUrlConverter&&i.push(...await Promise.all(a)),i}async loadWeights(t){const e=await this.getWeightUrls(t),s=Jp(t),o=await lN(e,this.loadOptions);return[s,o]}}gd.URL_SCHEME_REGEX=/^https?:\/\//;function dN(n){const t=n.lastIndexOf("/"),e=n.lastIndexOf("?"),s=n.substring(0,t),o=e>t?n.substring(e):"";return[s+"/",o]}function mf(n){return n.match(gd.URL_SCHEME_REGEX)!=null}const mx=(n,t)=>{if(typeof fetch>"u"&&(t==null||t.fetchFunc==null))return null;{let e=!0;if(Array.isArray(n)?e=n.every(s=>mf(s)):e=mf(n),e)return gx(n,t)}return null};ue.registerSaveRouter(mx);ue.registerLoadRouter(mx);function gx(n,t){return new gd(n,t)}function pN(n,t){return gx(n,t)}function xd(n,t){const e=n.shape.length,s=t.shape.length;if(e<1)throw new Error(`tf.gatherND() expects the input to be rank 1 or higher, but the rank was ${e}.`);if(s<1)throw new Error(`tf.gatherND() expects the indices to be rank 1 or higher, but the rank was ${s}.`);if(t.dtype!=="int32")throw new Error(`tf.gatherND() expects the indices to be int32 type, but the dtype was ${t.dtype}.`);if(t.shape[s-1]>e)throw new Error(`index innermost dimension length must be <= tensor rank; saw: ${t.shape[s-1]} vs. ${e}`);if(H(n.shape)===0)throw new Error(`Requested more than 0 entries, but input is empty. Input shape: ${n.shape}.`);const o=t.shape,r=o[o.length-1];let i=1;for(let h=0;h<o.length-1;++h)i*=o[h];const a=n.shape,l=o.slice();l.pop();let c=1;for(let h=r;h<e;++h)c*=a[h],l.push(a[h]);const u=[...lt(n.shape).map(h=>h/c),1].slice(0,r);return[l,i,c,u]}const Iu=-2,fN=-1;function bd(n,t,e){const s=n.shape.length;v(s===t.length,()=>`Error in slice${s}D: Length of begin ${t} must match the rank of the array (${s}).`),v(s===e.length,()=>`Error in slice${s}D: Length of size ${e} must match the rank of the array (${s}).`);for(let o=0;o<s;++o)v(t[o]+e[o]<=n.shape[o],()=>`Error in slice${s}D: begin[${o}] + size[${o}] (${t[o]+e[o]}) would overflow input.shape[${o}] (${n.shape[o]})`)}function mN(n){const t=[];let e=0;for(;n>0;)n&1&&t.push(e),n/=2,e++;return t}function yd(n,t,e){const s=[];for(let o=0;o<n.length;o++)s[o]=Math.ceil((t[o]-n[o])/e[o]);return s}function xx(n,t,e,s){const o=[...n];for(let r=o.length;r<s.length;r++)o.push(1);for(let r=0;r<e;r++)r===0?o[t]=1:(o.splice(t,0,1),o.pop());return o}function bx(n,t,e){return e<=n?e:e-(t-1)}function yx(n,t){const e=[];for(let s=0;s<n;s++)e.push(t+s);return e}function gN(n,t,e,s,o,r,i,a,l){const c=n.length;let u=new Array(c),h=new Array(c),d=new Array(c);if(t.length&&e>0){const p=t[0],f=e+1;u=wx(i,p,f,s,n),h=Cx(a,p,f,o,n),d=xx(r,p,f,n)}else for(let p=0;p<c;p++)u[p]=Ix(i,s,r,n,p,l),h[p]=vx(a,o,r,n,p,l),d[p]=$x(r,p,l);return{begin:u,end:h,strides:d}}function wx(n,t,e,s,o){const r=[...o],i=yx(e,t);for(let a=0;a<r.length;a++)if(i.indexOf(a)>-1)r[a]=0;else{const l=bx(t,e,a);let c=s[l];n&1<<l&&(c=0),r[a]=c}return r}function Cx(n,t,e,s,o){const r=[...o],i=yx(e,t);for(let a=0;a<r.length;a++)if(i.indexOf(a)>-1)r[a]=Number.MAX_SAFE_INTEGER;else{const l=bx(t,e,a);let c=s[l];n&1<<l&&(c=Number.MAX_SAFE_INTEGER),r[a]=c}for(let a=0;a<r.length;a++){const l=o[a];r[a]<0&&(r[a]+=l),r[a]=Hs(0,r[a],o[a])}return r}function $x(n,t,e){let s=n[t];return(e&1<<t||s==null)&&(s=1),s}function Ix(n,t,e,s,o,r){let i=t[o];const a=e[o]||1;(n&1<<o||r&1<<o||i==null)&&(a>0?i=Number.MIN_SAFE_INTEGER:i=Number.MAX_SAFE_INTEGER);const l=s[o];return i<0&&(i+=l),i=Hs(0,i,l-1),i}function vx(n,t,e,s,o,r){let i=t[o];const a=e[o]||1;(n&1<<o||r&1<<o||i==null)&&(a>0?i=Number.MAX_SAFE_INTEGER:i=Number.MIN_SAFE_INTEGER);const l=s[o];return i<0&&(i+=l),a>0?i=Hs(0,i,l):i=Hs(-1,i,l-1),i}function wd(n,t,e){let s=e.length;for(let o=0;o<e.length;o++)if(e[o]>1){s=o;break}for(let o=s+1;o<e.length;o++)if(t[o]>0||e[o]!==n[o])return!1;return!0}function Cd(n,t){let e=n.length>0?n[n.length-1]:1;for(let s=0;s<n.length-1;s++)e+=n[s]*t[s];return e}function uc(n,t,e){let s;const o=n.shape.length;typeof t=="number"?s=[t,...new Array(o-1).fill(0)]:t.length<o?s=t.concat(new Array(o-t.length).fill(0)):s=t.slice(),s.forEach(i=>{v(i!==-1,()=>"slice() does not support negative begin indexing.")});let r;return e==null?r=new Array(o).fill(-1):typeof e=="number"?r=[e,...new Array(o-1).fill(-1)]:e.length<o?r=e.concat(new Array(o-e.length).fill(-1)):r=e,r=r.map((i,a)=>i>=0?i:(v(i===-1,()=>`Negative size values should be exactly -1 but got ${i} for the slice() size at index ${a}.`),n.shape[a]-s[a])),[s,r]}function $d(n,t,e,s,o,r,i,a,l){let c;if(s==null?(c=new Array(t.length),c.fill(1)):c=s,i!=null&&(i&i-1)!==0)throw new Error("Multiple ellipses in slice is not allowed.");let u=!1;const h={dims:c.length,numAddAxisAfterEllipsis:0,begin:t.slice(),end:e.slice(),strides:c.slice(),beginMask:o,endMask:r,ellipsisMask:i,newAxisMask:a,shrinkAxisMask:l};for(let w=0;w<h.dims;w++)u&&(1<<w&a)!==0&&h.numAddAxisAfterEllipsis++,1<<w&i&&(u=!0);u||(h.ellipsisMask|=1<<h.dims,h.dims++);const d={dims:n.length,beginMask:0,endMask:0,beginValid:!1,endValid:!1};xN(h,d);let p=!0,f=!0,m=!0;const g=[],x=[];for(let w=0;w<n.length;++w){if(d.strides[w]===0)throw Error(`strides[${w}] must be non-zero`);const y=!!(d.shrinkAxisMask&1<<w),C=n[w];if(C===-1){g.push(y?1:-1);continue}const I=[d.beginMask&1<<w,d.endMask&1<<w],N=[d.strides[w]>0?0:-1,d.strides[w]>0?C:C-1];if(y&&d.strides[w]<=0)throw Error("only stride 1 allowed on non-range indexing.");m=m&&d.strides[w]===1;const T=!!(d.beginMask&1<<w&&d.endMask&1<<w);if(d.beginValid&&d.endValid){if(y){const R=d.begin[w]<0?C+d.begin[w]:d.begin[w];if(d.begin[w]=R,d.end[w]=d.begin[w]+1,R<0||R>=C)throw Error(`slice index ${d.begin[w]} of dimension ${w} out of bounds.`)}else d.begin[w]=gf(d.begin[w],0,d.strides[w],C,I,N),d.end[w]=gf(d.end[w],1,d.strides[w],C,I,N);const $=d.strides[w]===1&&d.begin[w]===0&&d.end[w]===C;p=p&&$,f=f&&(w===0&&d.strides[w]===1||$)}else p=p&&d.strides[w]===1&&T,f=f&&(w===0&&d.strides[w]===1||T);let k,S=!1;if(d.beginValid&&d.endValid?(k=d.end[w]-d.begin[w],S=!0):y?(k=1,S=!0):T&&C>=0&&(d.strides[w]<0?k=-C:k=C,S=!0),S){let $;k===0||k<0!=d.strides[w]<0?$=0:$=Math.trunc(k/d.strides[w])+(k%d.strides[w]!==0?1:0),g.push($)}else g.push(-1)}for(let w=0;w<d.finalShapeGatherIndices.length;++w){const y=d.finalShapeGatherIndices[w];y>=0?x.push(g[y]):y===Iu&&x.push(1)}return{finalShapeSparse:x.filter((w,y)=>d.finalShapeGatherIndices[y]!==Iu),finalShape:x,isIdentity:p,sliceDim0:f,isSimpleSlice:m,begin:d.begin,end:d.end,strides:d.strides}}function xN(n,t){t.beginMask=0,t.endMask=0,t.shrinkAxisMask=0;let e=0;t.beginValid=n.begin!=null,t.endValid=n.end!=null,t.begin=new Array(t.dims),t.end=new Array(t.dims),t.strides=new Array(t.dims),t.finalShapeGatherIndices=[],t.finalShapeGatherIndicesSparse=[],t.inputShapeGatherIndicesSparse=new Array(t.dims);for(let s=0;s<n.dims;s++)if(1<<s&n.ellipsisMask){const o=Math.min(t.dims-(n.dims-s)+1+n.numAddAxisAfterEllipsis,t.dims);for(;e<o;e++)t.begin[e]=0,t.end[e]=0,t.strides[e]=1,t.beginMask|=1<<e,t.endMask|=1<<e,t.finalShapeGatherIndices.push(e),t.finalShapeGatherIndicesSparse.push(-1),t.inputShapeGatherIndicesSparse[e]=s}else if(1<<s&n.newAxisMask)t.finalShapeGatherIndices.push(Iu),t.finalShapeGatherIndicesSparse.push(-1);else{if(e===t.begin.length)throw Error(`Index out of range using input dim ${e}; input has only ${t.dims} dims, ${t.begin.length}.`);n.begin!=null&&(t.begin[e]=n.begin[s]),n.end!=null&&(t.end[e]=n.end[s]),t.strides[e]=n.strides[s],n.beginMask&1<<s&&(t.beginMask|=1<<e),n.endMask&1<<s&&(t.endMask|=1<<e),n.shrinkAxisMask&1<<s?(t.finalShapeGatherIndices.push(fN),t.finalShapeGatherIndicesSparse.push(-1),t.shrinkAxisMask|=1<<e):(t.finalShapeGatherIndices.push(e),t.finalShapeGatherIndicesSparse.push(s)),t.inputShapeGatherIndicesSparse[e]=s,e++}}function gf(n,t,e,s,o,r){if(o[t])return e>0?r[t]:r[t+1&1];{const i=n<0?s+n:n;return i<r[0]?r[0]:i>r[1]?r[1]:i}}const bN=Object.freeze(Object.defineProperty({__proto__:null,assertParamsValid:bd,computeFlatOffset:Cd,computeOutShape:yd,getNormalizedAxes:gN,isSliceContinous:wd,maskToAxes:mN,parseSliceParams:uc,sliceInfo:$d,startForAxis:Ix,startIndicesWithElidedDims:wx,stopForAxis:vx,stopIndicesWithElidedDims:Cx,stridesForAxis:$x,stridesWithElidedDims:xx},Symbol.toStringTag,{value:"Module"}));class yN{static sgd(t){return new md(t)}static momentum(t,e,s=!1){return new px(t,e,s)}static rmsprop(t,e=.9,s=0,o=null,r=!1){return new fx(t,e,s,o,r)}static adam(t=.001,e=.9,s=.999,o=null){return new hx(t,e,s,o)}static adadelta(t=.001,e=.95,s=null){return new cx(t,e,s)}static adamax(t=.002,e=.9,s=.999,o=null,r=0){return new dx(t,e,s,o,r)}static adagrad(t,e=.1){return new ux(t,e)}}const xo=yN;const wN=typeof requestAnimationFrame<"u"?requestAnimationFrame:typeof setImmediate<"u"?setImmediate:n=>n();function kx(){return new Promise(n=>wN(()=>n()))}function Id(n,t){const e=n[0].length;n.forEach((o,r)=>{v(o.length===e,()=>`Error in concat${e}D: rank of tensors[${r}] must be the same as the rank of the rest (${e})`)}),v(t>=0&&t<e,()=>`Error in concat${e}D: axis must be between 0 and ${e-1}.`);const s=n[0];n.forEach((o,r)=>{for(let i=0;i<e;i++)v(i===t||o[i]===s[i],()=>`Error in concat${e}D: Shape of tensors[${r}] (${o}) does not match the shape of the rest (${s}) along the non-concatenated axis ${r}.`)})}function Fn(n,t){const e=n[0].slice();for(let s=1;s<n.length;s++)e[t]+=n[s][t];return e}var gn;(function(n){n[n.FIRST_DIM_SIZE=0]="FIRST_DIM_SIZE",n[n.VALUE_ROWIDS=1]="VALUE_ROWIDS",n[n.ROW_LENGTHS=2]="ROW_LENGTHS",n[n.ROW_SPLITS=3]="ROW_SPLITS",n[n.ROW_LIMITS=4]="ROW_LIMITS",n[n.ROW_STARTS=5]="ROW_STARTS"})(gn||(gn={}));function Sx(n,t,e){let s=new Array;if(e==null&&t==null)return s;if(t==null)for(;s.length<n+e.length;)s.push(-1);else s=t.slice();if(e==null)return s;if(n+e.length!==s.length)throw new Error(`rt input.shape and shape=${t} are incompatible: rt input.rank = ${n+e.length}, but shape.rank = ${s.length}`);for(let o=1;o<e.length;++o){const r=e[o],i=s[s.length-e.length+o],a=s[i];if(r>=0)if(a>=0){if(a!==r)throw new Error(`rt input.shape and shape=${t} are incompatible: rt input.shape[${o+n}] = ${r} but shape[${o+n}] = ${a}`)}else s[i]=r}return s}function Nx(n){const t={FIRST_DIM_SIZE:gn.FIRST_DIM_SIZE,VALUE_ROWIDS:gn.VALUE_ROWIDS,ROW_LENGTHS:gn.ROW_LENGTHS,ROW_SPLITS:gn.ROW_SPLITS,ROW_LIMITS:gn.ROW_LIMITS,ROW_STARTS:gn.ROW_STARTS},e=[];for(const s of n)if(s in t)e.push(t[s]);else break;return e}function Tx(n){return n.length===0?0:n[0]===gn.FIRST_DIM_SIZE?n.length-1:n.length}function Ex(n,t){if(n==null||t==null)return;const e=n.length,s=t.length;if(e>=s)throw new Error(`defaultValue.shape=${n} and ragged tensor flatValues.shape=${t}, are incompatible: defaultValue.rank = ${e} must be less than ragged tensor input flatValues.rank = ${s})`);for(let o=0;o<Math.min(e,s-1);++o){const r=n[o],i=t[o+1];if(r>=0&&i>=0&&r!==1&&r!==i)throw new Error(`defaultValue.shape=${n}, and ragged tensor input flatValues.shape=${t} are incompatible: defaultValue.shape[${o-n.length}] = ${r} but ragged tensor input.flatValues.shape[${o-n.length}] = ${i}`)}}const vd=30;function hc(n){return n<=vd?n:au(n,Math.floor(Math.sqrt(n)))}function kd(n,t,e){const s=e*(typeof n=="number"?n:n[0]),o=t*(typeof n=="number"?n:n[1]);return[s,o]}function Fi(n,t,e,s=!0){let o=[];if(s)o=o.concat(t.slice(0)),o.push(n[0]/e),o=o.concat(n.slice(1));else{o=o.concat(n[0]);const r=t.length;for(let i=0;i<r;++i)o=o.concat([n[i+1]/t[i],t[i]]);o=o.concat(n.slice(r+1))}return o}function _i(n,t,e=!0){const s=[];if(e){s.push(t);for(let o=t+1;o<n;++o)o<=2*t?(s.push(o),s.push(o-(t+1))):s.push(o)}else{const o=[],r=[];for(let i=1;i<n;++i)i>=t*2+1||i%2===1?r.push(i):o.push(i);s.push(...o),s.push(0),s.push(...r)}return s}function Oi(n,t,e,s=!0){const o=[];s?o.push(n[0]/e):o.push(n[0]*e);for(let r=1;r<n.length;++r)r<=t.length?s?o.push(t[r-1]*n[r]):o.push(n[r]/t[r-1]):o.push(n[r]);return o}function Sd(n,t){const e=[0];for(let s=0;s<t;++s)e.push(n[s][0]);return e}function Nd(n,t,e){const s=n.slice(0,1);for(let o=0;o<e;++o)s.push(n[o+1]-t[o][0]-t[o][1]);return s}const dc=1.7580993408473768,pc=1.0507009873554805;const Td=.3275911,Ed=.254829592,Rd=-.284496736,Ad=1.421413741,Dd=-1.453152027,Fd=1.061405429;function Yn(n,t){if(n.length!==t.length)throw new Error(`Cannot merge real and imag arrays of different lengths. real:${n.length}, imag: ${t.length}.`);const e=new Float32Array(n.length*2);for(let s=0;s<e.length;s+=2)e[s]=n[s/2],e[s+1]=t[s/2];return e}function Rx(n){const t=new Float32Array(n.length/2),e=new Float32Array(n.length/2);for(let s=0;s<n.length;s+=2)t[s/2]=n[s],e[s/2]=n[s+1];return{real:t,imag:e}}function Ax(n){const t=Math.ceil(n.length/4),e=new Float32Array(t),s=new Float32Array(t);for(let o=0;o<n.length;o+=4)e[Math.floor(o/4)]=n[o],s[Math.floor(o/4)]=n[o+1];return{real:e,imag:s}}function Dx(n){const t=Math.floor(n.length/4),e=new Float32Array(t),s=new Float32Array(t);for(let o=2;o<n.length;o+=4)e[Math.floor(o/4)]=n[o],s[Math.floor(o/4)]=n[o+1];return{real:e,imag:s}}function _d(n,t){const e=n[t*2],s=n[t*2+1];return{real:e,imag:s}}function Fx(n,t,e,s){n[s*2]=t,n[s*2+1]=e}function _x(n,t){const e=new Float32Array(n/2),s=new Float32Array(n/2);for(let o=0;o<Math.ceil(n/2);o++){const r=(t?2:-2)*Math.PI*(o/n);e[o]=Math.cos(r),s[o]=Math.sin(r)}return{real:e,imag:s}}function Ox(n,t,e){const s=(e?2:-2)*Math.PI*(n/t),o=Math.cos(s),r=Math.sin(s);return{real:o,imag:r}}const Wc="->",CN=/->/g,xf=",",bf="...";function Od(n,t){n=n.replace(/\s/g,"");const e=(n.length-n.replace(CN,"").length)/Wc.length;if(e<1)throw new Error("Equations without an arrow are not supported.");if(e>1)throw new Error(`Equation must contain exactly one arrow ("${Wc}").`);const[s,o]=n.split(Wc);v(s.indexOf(bf)===-1,()=>`The ellipsis notation ("${bf}") is not supported yet.`);const r=s.split(xf),i=r.length;if(t!==i)throw new Error(`Expected ${i} input tensors, received ${t}`);if(i>2)throw new Error("Support for more than 2 input tensors is not implemented yet.");const a=[];for(let d=0;d<o.length;++d){const p=o[d];if(!r.some(f=>f.indexOf(p)!==-1))throw new Error(`Output subscripts contain the label ${p} not present in the input subscripts.`);a.indexOf(p)===-1&&a.push(p)}for(let d=0;d<s.length;++d){const p=s[d];a.indexOf(p)===-1&&p!==xf&&a.push(p)}const l=new Array(r.length);for(let d=0;d<i;++d){if(new Set(r[d].split("")).size!==r[d].length)throw new Error(`Found duplicate axes in input component ${r[d]}. Support for duplicate axes in input is not implemented yet.`);l[d]=[];for(let p=0;p<r[d].length;++p)l[d].push(a.indexOf(r[d][p]))}const c=a.length,u=o.length,h=[];for(let d=u;d<c;++d)h.push(d);return{allDims:a,summedDims:h,idDims:l}}function Md(n,t){let e=new Array(n);e.fill(-1);for(let o=0;o<t.length;++o)e[t[o]]=o;const s=[];for(let o=0;o<n;++o)e[o]===-1&&s.push(o);return e=e.filter(o=>o!==-1),{permutationIndices:e,expandDims:s}}function Ld(n,t,e){const s=new Array(n);for(let o=0;o<e.length;++o){const r=e[o].shape;for(let i=0;i<t[o].length;++i)s[t[o][i]]===void 0?s[t[o][i]]=r[i]:v(s[t[o][i]]===r[i],()=>`Expected dimension ${s[t[o][i]]} at axis ${i} of input shaped ${JSON.stringify(r)}, but got dimension ${r[i]}`)}}function Pd(n,t){const e=n,s=[];let o=0;n.length===0&&e.push(-1),o=n.length+1;for(let i=0;i<o;++i)s.push([]);const r=[];for(let i=0;i<e.length;++i){const a=e[i],l=$N(t,a);for(const c of l)r.indexOf(c)===-1&&(s[i].push(c),r.push(c))}return{path:e,steps:s}}function zd(n){return n.every((t,e)=>t===e)}function $N(n,t){const e=[];for(let s=0;s<n.length;++s)(n[s].length===0||n[s].indexOf(t)!==-1||t===-1)&&e.push(s);return e}function Bd(n,t,e=0){let s=[];if(typeof t=="number")v(n.shape[e]%t===0,()=>"Number of splits must evenly divide the axis."),s=new Array(t).fill(n.shape[e]/t);else{const o=t.reduce((i,a)=>(a===-1&&(i+=1),i),0);v(o<=1,()=>"There should be only one negative value in split array.");const r=t.indexOf(-1);if(r!==-1){const i=t.reduce((a,l)=>l>0?a+l:a);t[r]=n.shape[e]-i}v(n.shape[e]===t.reduce((i,a)=>i+a),()=>"The sum of sizes must match the size of the axis dimension."),s=t}return s}function Mx(n){return`Received SparseTensor with denseShape[0] = 0 but
  indices.shape[0] = ${n}`}function Lx(n,t){return`indices(${n}, 0) is invalid: ${t} < 0`}function Px(n,t,e){return`indices(${n}, 0) is invalid: ${t} >= ${e}`}function zx(n,t){return`only one output dimension may be -1, not both ${n} and ${t}`}function Bx(n,t){return`size ${n} must be non-negative, not ${t}`}function Vx(){return"reshape cannot infer the missing input size for an empty tensor unless all specified input sizes are non-zero"}function Wx(n,t){const e=H(n),s=H(t);return`Input to reshape is a SparseTensor with ${e}
  dense values, but the requested shape requires a multiple of ${s}. inputShape=${n} outputShape= ${t}`}function Ux(n,t){const e=H(n),s=H(t);return`Input to reshape is a tensor with ${e} dense values, but the requested shape has ${s}. inputShape=${n} outputShape=${t}`}function vu(){return"segment ids must be >= 0"}function Gx(){return"segment ids are not increasing"}function Hx(n,t){return`Segment id ${n} out of range [0, ${t}), possibly because segmentIds input is not sorted.`}function jx(n,t,e){return`Bad: indices[${n}] == ${t} out of range [0, ${e})`}function qx(n,t){let e=!1,s;for(n<=vd?(s=n,e=!0):s=au(n,Math.floor(Math.sqrt(n)));!e;)s>t||s===n?e=!0:s=au(n,s+1);return s}function Kx(n,t,e){const s=[],o=n.length;for(let r=0;r<o;r++)r!==t?s.push(n[r]):s.push(e);return s}function Vd(n,t,e,s){const o=t.shape.length,r=n.shape.length;if(s!==0&&(s<-o||s>o))throw new Error(`Expect batchDims in the range of [-${o}, ${o}], but got ${s}`);if(s<0&&(s+=o),s>r)throw new Error(`batchDims (${s}) must be less than rank(x) (
    ${r}).`);if(e<s)throw new Error(`batchDims (${s}) must be less than or equal to axis (${e}).`);for(let h=0;h<s;++h)if(n.shape[h]!==t.shape[h])throw new Error(`x.shape[${h}]: ${n.shape[h]} should be equal to indices.shape[${h}]: ${t.shape[h]}.`);const i=n.shape[e],a=[];let l=1,c=1,u=1;for(let h=0;h<s;++h)a.push(n.shape[h]),l*=n.shape[h];for(let h=s;h<e;h++)a.push(n.shape[h]),c*=n.shape[h];for(let h=s;h<o;h++)a.push(t.shape[h]);for(let h=e+1;h<r;h++)a.push(n.shape[h]),u*=n.shape[h];return{batchSize:l,sliceSize:u,outerSize:c,dimSize:i,outputShape:a}}const IN=Object.freeze(Object.defineProperty({__proto__:null,collectGatherOpShapeInfo:Vd,computeOutShape:Kx,segOpComputeOptimalWindowSize:qx},Symbol.toStringTag,{value:"Module"}));function Zn(n){try{return n.map(t=>ms(t))}catch(t){throw new Error(`Failed to decode encoded string bytes into utf-8, error: ${t}`)}}function Xx(n){return n.map(t=>ds(t))}const vN=Object.freeze(Object.defineProperty({__proto__:null,ERF_A1:Ed,ERF_A2:Rd,ERF_A3:Ad,ERF_A4:Dd,ERF_A5:Fd,ERF_P:Td,PARALLELIZE_THRESHOLD:vd,get RowPartitionType(){return gn},SELU_SCALE:pc,SELU_SCALEALPHA:dc,applyActivation:cd,assertAndGetBroadcastShape:mt,assertAxesAreInnerMostDims:ye,assertParamsConsistent:Id,assignToTypedArray:Fx,axesAreInnerMostDims:jh,calculateShapes:co,checkEinsumDimSizes:Ld,checkPadOnDimRoundingMode:ze,combineLocations:zg,combineRaggedTensorToTensorShapes:Sx,complexWithEvenIndex:Ax,complexWithOddIndex:Dx,computeConv2DInfo:be,computeConv3DInfo:vs,computeDefaultPad:Bh,computeDilation2DInfo:Ti,computeOptimalWindowSize:hc,computeOutAndReduceShapes:fe,computeOutShape:Fn,computePool2DInfo:cn,computePool3DInfo:Qn,convertConv2DDataFormat:ts,decodeEinsumEquation:Od,eitherStridesOrDilationsAreOne:ve,expandShapeToKeepDim:se,exponent:Ox,exponents:_x,fromStringArrayToUint8:Xx,fromUint8ToStringArray:Zn,getAxesPermutation:qt,getBroadcastDims:_o,getComplexWithIndex:_d,getEinsumComputePath:Pd,getEinsumPermutation:Md,getFusedBiasGradient:ld,getFusedDyActivation:ad,getImageCenter:kd,getInnerMostAxes:Qt,getPermuted:_i,getRaggedRank:Tx,getReductionAxes:le,getReshaped:Fi,getReshapedPermuted:Oi,getRowPartitionTypesHelper:Nx,getSliceBeginCoords:Sd,getSliceSize:Nd,getSparseFillEmptyRowsIndicesDenseShapeMismatch:Mx,getSparseFillEmptyRowsNegativeIndexErrorMessage:Lx,getSparseFillEmptyRowsOutOfRangeIndexErrorMessage:Px,getSparseReshapeEmptyTensorZeroOutputDimErrorMessage:Vx,getSparseReshapeInputOutputMismatchErrorMessage:Ux,getSparseReshapeInputOutputMultipleErrorMessage:Wx,getSparseReshapeMultipleNegativeOneOutputDimErrorMessage:zx,getSparseReshapeNegativeOutputDimErrorMessage:Bx,getSparseSegmentReductionIndicesOutOfRangeErrorMessage:jx,getSparseSegmentReductionNegativeSegmentIdsErrorMessage:vu,getSparseSegmentReductionNonIncreasingSegmentIdsErrorMessage:Gx,getSparseSegmentReductionSegmentIdOutOfRangeErrorMessage:Hx,getUndoAxesPermutation:ks,isIdentityPermutation:zd,log:zC,mergeRealAndImagArrays:Yn,prepareAndValidate:xd,prepareSplitSize:Bd,segment_util:IN,shouldFuse:ud,slice_util:bN,splitRealAndImagArrays:Rx,stridesOrDilationsArePositive:Zs,tupleValuesAreOne:Ys,upcastType:Ue,validateDefaultValueShape:Ex,validateInput:XS,validateUpdateShape:sx,warn:qe},Symbol.toStringTag,{value:"Module"}));aN();const Yx={kernelName:el,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>F(n,Di(st(e,"float32"),-1))}}};const kN={kernelName:Fr,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>{const s=Vt(st(e,"float32")),o=Ie(pt(Tt(1),s));return Zt(ut(n,o))}}}};const SN={kernelName:_r,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>{const s=Ie(pt(Vt(st(e,"float32")),1));return ut(n,s)}}}};const NN={kernelName:Go,inputsToSave:["a","b"],gradFunc:(n,t)=>{const[e,s]=t,o=mt(e.shape,s.shape);return{a:()=>{let a=n;const l=le(e.shape,o);return l.length>0&&(a=ct(a,l)),L(a,e.shape)},b:()=>{let a=n;const l=le(s.shape,o);return l.length>0&&(a=ct(a,l)),L(a,s.shape)}}}};const TN={kernelName:Xu,saveAllInputs:!0,gradFunc:(n,t)=>{const e={};return t.forEach((s,o)=>{e[o]=()=>n.clone()}),e}};const EN={kernelName:nl,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>kt(e)}}};const RN={kernelName:sl,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>kt(e)}}};const AN={kernelName:Or,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>ut(n,Ie(pt(Tt(1),Vt(st(e,"float32")))))}}};const DN={kernelName:Mr,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>{const s=Ie(J(Tt(1),Vt(st(e,"float32"))));return ut(n,s)}}}};const FN={kernelName:zr,inputsToSave:["a","b"],gradFunc:(n,t)=>{const[e,s]=t,o=mt(e.shape,s.shape);return{a:()=>{const a=J(Vt(e),Vt(s));let l=F(n,ut(s,a));const c=le(e.shape,o);return c.length>0&&(l=ct(l,c)),L(l,e.shape)},b:()=>{const a=J(Vt(e),Vt(s));let l=Zt(F(n,ut(e,a)));const c=le(s.shape,o);return c.length>0&&(l=ct(l,c)),L(l,s.shape)}}}};const _N={kernelName:Lr,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>ut(n,J(Vt(st(e,"float32")),1))}}};const ON={kernelName:Pr,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>ut(n,pt(Tt(1),Vt(st(e,"float32"))))}}};function MN(n,t,e,s,o,r){const i=E(n,"dy","avgPool3dGrad"),a=E(t,"input","avgPool3dGrad");let l=i,c=a,u=!1;a.rank===4&&(u=!0,l=L(i,[1,i.shape[0],i.shape[1],i.shape[2],i.shape[3]]),c=L(a,[1,a.shape[0],a.shape[1],a.shape[2],a.shape[3]])),v(l.rank===5,()=>`Error in avgPool3dGrad: dy must be rank 5 but got rank ${l.rank}.`),v(c.rank===5,()=>`Error in avgPool3dGrad: input must be rank 5 but got rank ${c.rank}.`),ze("avgPool3dGrad",o,r);const h={dy:l,input:c},d={filterSize:e,strides:s,pad:o,dimRoundingMode:r},p=_.runKernel(Qu,h,d);return u?L(p,[p.shape[1],p.shape[2],p.shape[3],p.shape[4]]):p}const LN=P({avgPool3dGrad_:MN});const PN={kernelName:rl,inputsToSave:["x"],gradFunc:(n,t,e)=>{const[s]=t,{filterSize:o,strides:r,pad:i,dimRoundingMode:a}=e;return{x:()=>LN(n,s,o,r,i,a)}}};function zN(n,t,e,s,o){const r=E(n,"dy","avgPoolGrad"),i=E(t,"input","avgPoolGrad");v(i.rank===r.rank,()=>`Rank of input (${i.rank}) does not match rank of dy (${r.rank})`);let a=i,l=r,c=!1;i.rank===3&&(c=!0,a=L(i,[1,i.shape[0],i.shape[1],i.shape[2]]),l=L(r,[1,r.shape[0],r.shape[1],r.shape[2]])),v(l.rank===4,()=>`Error in avgPoolGrad: dy must be rank 4 but got rank ${l.rank}.`),v(a.rank===4,()=>`Error in avgPoolGrad: input must be rank 4 but got rank ${a.rank}.`);const u={dy:l,input:a},h={filterSize:e,strides:s,pad:o},d=_.runKernel(Ju,u,h);return c?L(d,[d.shape[1],d.shape[2],d.shape[3]]):d}const BN=P({avgPoolGrad_:zN});const VN={kernelName:ol,inputsToSave:["x"],gradFunc:(n,t,e)=>{const[s]=t,{filterSize:o,strides:r,pad:i}=e;return{x:()=>BN(n,s,o,r,i)}}};const WN={kernelName:il,inputsToSave:["a","b"],gradFunc:(n,t,e)=>{const[s,o]=t,{transposeA:r,transposeB:i}=e;return!r&&!i?{a:()=>It(n,o,!1,!0),b:()=>It(s,n,!0,!1)}:!r&&i?{a:()=>It(n,o,!1,!1),b:()=>It(n,s,!0,!1)}:r&&!i?{a:()=>It(o,n,!1,!0),b:()=>It(s,n,!1,!1)}:{a:()=>It(o,n,!0,!0),b:()=>It(n,s,!0,!0)}}};const UN={kernelName:al,gradFunc:(n,t,e)=>{const{blockShape:s,crops:o}=e;return{x:()=>td(n,s,o)}}};const GN={kernelName:OC,gradFunc:(n,t,e)=>{const s=e,o=s.inputShape,r=s.shape,i=Array.from(r);for(let l=o.length-1;l>=0;l--)if(o[l]===r[l])i[l]=1;else if(o[l]!==1)throw new Error(`broadcastTo(): [${o}] cannot be broadcast to [${r}].`);const a=[];for(let l=0;l<i.length;l++)i[l]>1&&a.push(l);return{x:()=>ct(n,a,!0)}}};const HN={kernelName:Br,gradFunc:n=>({x:()=>n.clone()})};const jN={kernelName:Vr,gradFunc:n=>({x:()=>kt(n)})};const qN={kernelName:Wr,inputsToSave:["x"],gradFunc:(n,t,e)=>{const[s]=t,{clipValueMin:o,clipValueMax:r}=e;return{x:()=>Re(Xn(ao(s,o),jo(s,r)),n,kt(n))}}};const KN={kernelName:ll,inputsToSave:["x"],gradFunc:Yx.gradFunc};const XN={kernelName:cl,saveAllInputs:!0,gradFunc:(n,t,e)=>{const s=t.map(l=>l.shape),{axis:o}=e,r=Ct(o,t[0].shape)[0],i=s.map(l=>l[r]);return Xe(n,i,r).map(l=>()=>l)}};const YN={kernelName:ul,inputsToSave:["x","filter"],gradFunc:(n,t,e)=>{const[s,o]=t,{dilations:r,strides:i,pad:a,dataFormat:l}=e;return v(Ys(r),()=>`Error in gradient of conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${r}'`),{x:()=>Uh(s.shape,n,o,i,a,l),filter:()=>id(s,n,o.shape,i,a,l)}}};const ZN={kernelName:hl,inputsToSave:["dy","filter"],gradFunc:(n,t,e)=>{const[s,o]=t,{strides:r,pad:i,dataFormat:a,dimRoundingMode:l}=e;return{dy:()=>Js(n,o,r,i,a,1,l),filter:()=>id(n,s,o.shape,r,i,a,l)}}};function JN(n,t,e,s,o){let r=n;n.rank===4&&(r=L(n,[1,n.shape[0],n.shape[1],n.shape[2],n.shape[3]]));let i=t;i.rank===4&&(i=L(t,[1,t.shape[0],t.shape[1],t.shape[2],t.shape[3]])),v(r.rank===5,()=>`Error in conv3dDerFilter: input must be rank 5, but got shape ${r.shape}.`),v(i.rank===5,()=>`Error in conv3dDerFilter: dy must be rank 5, but got shape ${i.shape}.`),v(e.length===5,()=>`Error in conv3dDerFilter: filterShape must be length 5, but got ${e}.`),v(r.shape[4]===e[3],()=>`Error in conv3dDerFilter: depth of input ${r.shape[4]}) must match input depth in filter (${e[3]}.`),v(i.shape[4]===e[4],()=>`Error in conv3dDerFilter: depth of dy (${i.shape[4]}) must match output depth for filter (${e[4]}).`);const a={x:r,dy:i},l={strides:s,pad:o,filterShape:e};return _.runKernel(oh,a,l)}const QN=P({conv3DBackpropFilter_:JN});const tT={kernelName:dl,inputsToSave:["x","filter"],gradFunc:(n,t,e)=>{const{dilations:s,strides:o,pad:r}=e;v(Ys(s),()=>`Error in gradient of conv3D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${s}'`);const[i,a]=t;return{x:()=>Og(i.shape,n,a,o,r),filter:()=>QN(i,n,a.shape,o,r)}}};const eT={kernelName:Ur,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>F(Zt(Qg(st(e,"float32"))),n)}}};const nT={kernelName:Gr,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>F(tx(st(e,"float32")),n)}}};const sT={kernelName:pl,inputsToSave:["x"],gradFunc:(n,t,e)=>{const[s]=t,{axis:o,exclusive:r,reverse:i}=e;return{x:()=>{const a=qt([o],s.rank);let l=Lg(n,o,r,!i);return a!=null&&(l=vt(l,a)),l}}}};const oT={kernelName:fl,inputsToSave:["x","filter"],gradFunc:(n,t,e)=>{const{dilations:s,strides:o,pad:r,dimRoundingMode:i}=e,a=s??[1,1];v(Ys(a),()=>`Error in gradient of depthwiseConv2dNative: dilation rates greater than 1 are not yet supported. Got dilations '${a}'`);const[l,c]=t;return v(l.rank===4,()=>`Error in gradient of depthwiseConv2dNative: input must be rank 4, but got rank ${l.rank}.`),v(c.rank===4,()=>`Error in gradient of depthwiseConv2dNative: filter must be rank 4, but got rank ${c.rank}.`),v(l.shape[3]===c.shape[2],()=>`Error in gradient of depthwiseConv2d: number of input channels (${l.shape[3]}) must match the inChannels dimension in filter ${c.shape[2]}.`),v(ve(o,a),()=>`Error in gradient of depthwiseConv2d: Either strides or dilations must be  1. Got strides ${o} and dilations '${a}'.`),ze("depthwiseConv2d",r,i),{x:()=>f2(l.shape,n,c,o,r,a,i),filter:()=>d2(l,n,c.shape,o,r,a,i)}}};const rT={kernelName:ml,inputsToSave:["x","filter"],gradFunc:(n,t,e)=>{const[s,o]=t,r={x:s,filter:o,dy:n},i={x:s,filter:o,dy:n};return{x:()=>_.runKernel(lu,r,e),filter:()=>_.runKernel(cu,i,e)}}};const iT={kernelName:jr,outputsToSave:[!0],gradFunc:(n,t)=>{const[e]=t,s={dy:n,y:e};return{x:()=>_.runKernel(ph,s)}}};const aT={kernelName:qr,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t,s=F(Pn(Zt(Vt(e))),2/Math.sqrt(Math.PI));return{x:()=>F(n,s)}}};const lT={kernelName:Kr,outputsToSave:[!0],gradFunc:(n,t)=>{const[e]=t;return{x:()=>F(n,e)}}};const cT={kernelName:xl,inputsToSave:["input"],gradFunc:(n,t)=>{const[e]=t;return{input:()=>L(n,e.shape)}}};const uT={kernelName:Xr,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>F(n,Pn(e))}}};const hT={kernelName:Yr,gradFunc:n=>({x:()=>kt(n)})};const dT={kernelName:Zr,inputsToSave:["a","b"],gradFunc:(n,t)=>{const[e,s]=t,o=mt(e.shape,s.shape);return{a:()=>{const a=ut(n,st(s,"float32")),l=le(e.shape,o);return l.length>0?L(ct(a,l),e.shape):a},b:()=>{let a=F(n,st(e,"float32"));const l=le(s.shape,o);l.length>0&&(a=L(ct(a,l),s.shape));const c=Vt(s);return Zt(ut(a,st(c,"float32")))}}}};const pT={kernelName:bl,inputsToSave:["x","mean","variance","scale"],gradFunc:(n,t,e)=>{const{varianceEpsilon:s}=e,[o,r,i,a]=t,l=a??Tt(1),c=le(r.shape,o.shape),u=[];if(r.rank===1){for(let y=0;y<o.shape.length-1;++y)u.push(o.shape[y]);u.push(1)}const h=pt(o,r),d=F(n,l),p=Yg(J(i,Tt(s))),f=F(F(F(p,p),p),Tt(-.5));return{x:()=>r.rank===1?L(F(F(n,xn(L(p,[1,1,1,r.shape[0]]),u)),l),o.shape):L(F(F(n,p),l),o.shape),mean:()=>{let y=F(F(p,Tt(-1)),d);return r.rank===1&&(y=ct(y,c)),L(y,r.shape)},variance:()=>{let y=F(F(f,h),d);return r.rank===1&&(y=ct(y,c)),L(y,r.shape)},scale:()=>{const y=F(h,p);let C=F(n,y);return r.rank===1&&(C=ct(C,c)),L(C,r.shape)},offset:()=>{let y=n;return r.rank===1&&(y=ct(y,c)),L(y,r.shape)}}}};const fT={kernelName:yl,inputsToSave:["x","indices"],gradFunc:(n,t,e)=>{const[s,o]=t,{axis:r,batchDims:i}=e,a=Ct(r,s.shape)[0],l=(c,u,h)=>()=>{const d=c.shape,p=u.size,f=d.slice(0,a),m=f.length,g=d.slice(r,d.length).slice(1),x=g.length,b=yf(0,m),w=yf(m+1,m+1+x),y=wf([f,[p],g]),C=L(h,y),I=L(u,[p]),N=wf([[m],b,w]),T=vt(C,N);let k=rx(T,I,c.shape[a]);const S=ks(N);return k=vt(k,S),k};if(i===1){const c=s.shape[0],u=s.split(c,0);return{x:()=>Bn(u.map((p,f)=>l(p,o.slice(f,1),n.slice(f,1))())).reshape(s.shape),indices:()=>o}}else return{x:l(s,o,n),indices:()=>o}}};function yf(n,t){const e=[];for(let s=n;s<t;++s)e.push(s);return e}function wf(n){const t=[];for(let e=0;e<n.length;++e)for(let s=0;s<n[e].length;++s)t.push(n[e][s]);return t}const mT={kernelName:Jr,inputsToSave:["a","b"],gradFunc:(n,t)=>{const[e,s]=t;return{a:()=>kt(e),b:()=>kt(s)}}};const gT={kernelName:Qr,gradFunc:n=>({x:()=>st(n,"float32")})};const xT={kernelName:ti,gradFunc:n=>({x:()=>kt(n)})};const bT={kernelName:ei,gradFunc:n=>({x:()=>kt(n)})};const yT={kernelName:ni,gradFunc:n=>({x:()=>kt(n)})};const wT={kernelName:Cl,inputsToSave:["x"],gradFunc:(n,t,e)=>{const[s]=t,{alpha:o}=e,r=Ze(s,0);return{x:()=>Re(r,n,F(n,o))}}};const CT={kernelName:oi,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>ut(n,J(e,1))}}};const $T={kernelName:si,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>ut(n,st(e,"float32"))}}};const IT={kernelName:LC,inputsToSave:[],outputsToSave:[!0],gradFunc:(n,t,e)=>{const[s]=t,{axis:o}=e;return{logits:()=>{const i=Pn(s);return pt(n,F(ct(n,o,!0),i))}}}};function vT(n,t,e,s=5,o=1,r=1,i=.5){const a={x:n,y:t,dy:e},l={depthRadius:s,bias:o,alpha:r,beta:i};return _.runKernel(wh,a,l)}const kT=P({localResponseNormalizationBackprop_:vT});const ST={kernelName:Nl,inputsToSave:["x"],outputsToSave:[!0],gradFunc:(n,t,e)=>{const[s,o]=t,{depthRadius:r,bias:i,alpha:a,beta:l}=e;return{x:()=>kT(s,o,n,r,i,a,l)}}};function Zx(n,t,e,s){return t.rank<e.rank&&(t=L(t,se(t.shape,s))),n.rank<e.rank&&(n=L(n,se(n.shape,s))),{x:()=>F(n,st(Ln(e,t),n.dtype))}}const Cf={kernelName:Tl,inputsToSave:["x"],outputsToSave:[!0],gradFunc:(n,t,e)=>{const s=e,{reductionIndices:o}=s,r=t[0],i=t[1],a=Ct(o,r.shape),l=Zx(n,i,r,a);return{x:()=>l.x()}}};const NT={kernelName:ri,inputsToSave:["a","b"],gradFunc:(n,t)=>{const[e,s]=t;return{a:()=>F(n,st(ao(e,s),"float32")),b:()=>F(n,st(Da(e,s),"float32"))}}};function TT(n,t,e,s,o,r,i){const a=E(n,"dy","maxPool3dGrad"),l=E(t,"input","maxPool3dGrad"),c=E(e,"output","maxPool3dGrad");let u=a,h=l,d=c,p=!1;l.rank===4&&(p=!0,u=L(a,[1,a.shape[0],a.shape[1],a.shape[2],a.shape[3]]),h=L(l,[1,l.shape[0],l.shape[1],l.shape[2],l.shape[3]]),d=L(c,[1,c.shape[0],c.shape[1],c.shape[2],c.shape[3]])),v(u.rank===5,()=>`Error in maxPool3dGrad: dy must be rank 5 but got rank ${u.rank}.`),v(h.rank===5,()=>`Error in maxPool3dGrad: input must be rank 5 but got rank ${h.rank}.`),v(d.rank===5,()=>`Error in maxPool3dGrad: output must be rank 5 but got rank ${d.rank}.`),ze("maxPool3dGrad",r,i);const f={dy:u,input:h,output:d},m={filterSize:s,strides:o,pad:r,dimRoundingMode:i},g=_.runKernel($h,f,m);return p?L(g,[g.shape[1],g.shape[2],g.shape[3],g.shape[4]]):g}const ET=P({maxPool3dGrad_:TT});const RT={kernelName:Rl,inputsToSave:["x"],outputsToSave:[!0],gradFunc:(n,t,e)=>{const[s,o]=t,{filterSize:r,strides:i,pad:a,dimRoundingMode:l}=e;return{x:()=>ET(n,s,o,r,i,a,l)}}};function AT(n,t,e,s,o,r,i){const a=E(n,"dy","maxPoolGrad"),l=E(t,"input","maxPoolGrad"),c=E(e,"output","maxPoolGrad");v(l.rank===a.rank,()=>`Rank of input (${l.rank}) does not match rank of dy (${a.rank})`),v(a.rank===4,()=>`Error in maxPoolGrad: dy must be rank 4 but got rank ${a.rank}.`),v(l.rank===4,()=>`Error in maxPoolGrad: input must be rank 4 but got rank ${l.rank}.`),ze("maxPoolGrad",r,i);const u={dy:a,input:l,output:c},h={filterSize:s,strides:o,pad:r,dimRoundingMode:i};return _.runKernel(Ch,u,h)}const DT=P({maxPoolGrad_:AT});const FT={kernelName:El,inputsToSave:["x"],outputsToSave:[!0],gradFunc:(n,t,e)=>{const[s,o]=t,{filterSize:r,strides:i,pad:a}=e;return{x:()=>DT(n,s,o,r,i,a)}}};const _T={kernelName:Al,inputsToSave:["x"],gradFunc:(n,t,e)=>{const[s]=t,{axis:o}=e,r=Ct(o,s.shape),a=fe(s.shape,r)[1],l=H(a);return{x:()=>{const u=s.shape.slice();r.forEach(p=>{u[p]=1});const h=L(n,u);return ut(F(h,sn(s.shape,"float32")),l)}}}};const OT={kernelName:Dl,inputsToSave:["x"],outputsToSave:[!0],gradFunc:(n,t,e)=>{const s=e,{axis:o}=s,[r,i]=t,a=Ct(o,r.shape),l=Zx(n,i,r,a);return{x:()=>l.x()}}};const MT={kernelName:ii,inputsToSave:["a","b"],gradFunc:(n,t)=>{const[e,s]=t;return{a:()=>F(n,st(jo(e,s),"float32")),b:()=>F(n,st(Ze(e,s),"float32"))}}};const LT={kernelName:Fl,inputsToSave:["x"],gradFunc:(n,t,e)=>{const s=t[0],{paddings:o}=e,r=o.map(i=>i[0]);return{x:()=>zt(n,r,s.shape)}}};const PT={kernelName:ai,inputsToSave:["a","b"],gradFunc:(n,t)=>{const[e,s]=t,o=mt(e.shape,s.shape);return{a:()=>{const a=le(e.shape,o);return a.length>0?L(ct(n,a),e.shape):n},b:()=>{const a=F(n,Zt(cc(ut(e,s)))),l=le(s.shape,o);return l.length>0?L(ct(a,l),s.shape):a}}}};const zT={kernelName:li,inputsToSave:["a","b"],gradFunc:(n,t)=>{const[e,s]=t,o=mt(e.shape,s.shape);return{a:()=>{const a=F(n,st(s,"float32")),l=le(e.shape,o);return l.length>0?L(ct(a,l),e.shape):a},b:()=>{const a=F(n,st(e,"float32")),l=le(s.shape,o);return l.length>0?L(ct(a,l),s.shape):a}}}};const BT={kernelName:_l,gradFunc:n=>({x:()=>Zt(n)})};const VT={kernelName:Ll,inputsToSave:["indices"],gradFunc:(n,t)=>{const e=t[0];return{indices:()=>de(e.shape,"float32")}}};const WT={kernelName:Ml,gradFunc:n=>({x:()=>kt(n)})};const UT={kernelName:Pl,saveAllInputs:!0,gradFunc:(n,t,e)=>{const{axis:s}=e;return eo(n,s).map(r=>()=>r)}};const $f={kernelName:zl,inputsToSave:["x"],gradFunc:(n,t,e)=>{const s=t[0],{paddings:o}=e,r=o.map(i=>i[0]);return{x:()=>zt(n,r,s.shape)}}};const GT={kernelName:ci,inputsToSave:["a","b"],outputsToSave:[!0],gradFunc:(n,t)=>{const[e,s,o]=t,r=e,i=s,a=mt(r.shape,i.shape);return{a:()=>{const u=st(i,"float32");let h=F(n,F(u,Qs(r,pt(u,Tt(1)))));const d=le(r.shape,a);return d.length>0&&(h=ct(h,d)),L(h,r.shape)},b:()=>{const u=Ze(r,0),h=Re(u,zn(r),kt(r));let d=F(n,F(o,h));const p=le(i.shape,a);return p.length>0&&(d=ct(d,p)),L(d,i.shape)}}}};const HT={kernelName:Bl,inputsToSave:["x","alpha"],gradFunc:(n,t)=>{const[e,s]=t,o=Ze(e,0);return{x:()=>Re(o,n,F(n,s)),alpha:()=>{let r=Re(o,kt(n),F(n,e));const i=le(s.shape,n.shape);return i.length>0&&(r=ct(r,i)),L(r,s.shape)}}}};function jT(n,t,e){const s=n.shape.slice();s[e]=1;const o=L(t,s),r=Cu(n,e,!0,!1),i=Cu(n,e,!0,!0),a=F(r,i);return F(o,a)}function qT(n,t,e){const s=n.shape.length,o=s-e.length,r=qt(e,s);let i=n;r!=null&&(i=vt(n,r));const a=i.shape.slice(),c=a.splice(s-e.length,e.length).reduce((d,p)=>d*p,1);a.push(c);const u=i.reshape(a);let h=jT(u,t,o);if(h=h.reshape(i.shape),r!=null){const d=ks(r);h=vt(h,d)}return h}const KT={kernelName:Vl,inputsToSave:["x"],gradFunc:(n,t,e)=>{const[s]=t,{axis:o}=e;let r=[];return o==null?r=s.shape.map((i,a)=>a):typeof o=="number"?r=[o]:r=o,{x:()=>qT(s,n,r)}}};const XT={kernelName:Hr,inputsToSave:["a","b"],gradFunc:(n,t)=>{const[e,s]=t,o=mt(e.shape,s.shape);return{a:()=>{const a=ut(n,st(s,"float32")),l=le(e.shape,o);return l.length>0?L(ct(a,l),e.shape):a},b:()=>{let a=F(n,st(e,"float32"));const l=le(s.shape,o);l.length>0&&(a=L(ct(a,l),s.shape));const c=Vt(s);return Zt(ut(a,st(c,"float32")))}}}};const YT={kernelName:ui,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>ut(n,Zt(Vt(e)))}}};const ZT={kernelName:di,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t,s=F(jo(e,6),Di(e));return{x:()=>F(n,st(s,"float32"))}}};const JT={kernelName:hi,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>F(n,st(Di(e),"float32"))}}};const QT={kernelName:Wl,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>L(n,e.shape)}}};const tE={kernelName:Gl,inputsToSave:["images"],gradFunc:(n,t,e)=>{const[s]=t,o={dy:n,images:s};return{images:()=>_.runKernel(Eh,o,e)}}};const eE={kernelName:Ul,inputsToSave:["images"],gradFunc:(n,t,e)=>{const[s]=t,o={dy:n,images:s};return{images:()=>_.runKernel(Th,o,e)}}};const nE={kernelName:Hl,gradFunc:(n,t,e)=>{const{dims:s}=e,o=Ct(s,n.shape);return{x:()=>to(n,o)}}};const sE={kernelName:pi,gradFunc:n=>({x:()=>kt(n)})};const oE={kernelName:fi,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>Zt(ut(n,F(Qs(e,1.5),2)))}}};const rE={kernelName:jl,inputsToSave:["condition"],gradFunc:(n,t)=>{const[e]=t;return{condition:()=>st(kt(e),"float32"),t:()=>F(n,st(e,n.dtype)),e:()=>F(n,st(Yh(e),n.dtype))}}};const iE={kernelName:mi,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>{const s=Ze(e,Tt(0)),o=Tt(dc),r=Tt(pc),i=F(n,r),a=F(F(n,o),Pn(st(e,"float32")));return Re(s,i,a)}}}};const aE={kernelName:yi,outputsToSave:[!0],gradFunc:(n,t)=>{const[e]=t;return{x:()=>F(n,F(e,pt(Tt(1),e)))}}};const lE={kernelName:bi,gradFunc:n=>({x:()=>kt(n)})};const cE={kernelName:gi,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>F(Gh(st(e,"float32")),n)}}};const uE={kernelName:xi,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>F(Mg(st(e,"float32")),n)}}};const hE={kernelName:ql,inputsToSave:["x"],gradFunc:(n,t,e)=>{const[s]=t,{begin:o,size:r}=e,i=s.shape,[a,l]=uc(s,o,r),c=[];for(let u=0;u<n.rank;u++)c.push([a[u],i[u]-a[u]-l[u]]);return{x:()=>Qh(n,c)}}};const dE={kernelName:Zl,outputsToSave:[!0],gradFunc:(n,t,e)=>{const[s]=t,{dim:o}=e,r=!0,i=F(n,s);return{logits:()=>pt(i,F(ct(i,[o],r),s))}}};const pE={kernelName:wi,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>F(n,Ho(e))}}};const If={kernelName:Xl,gradFunc:(n,t,e)=>{const{blockShape:s,paddings:o}=e;return{x:()=>Wh(n,s,o)}}};const vf={kernelName:Yl,gradFunc:(n,t,e)=>{const{axis:s}=e;return{x:()=>Me(n,s)}}};const fE={kernelName:Ci,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>ut(n,F(Ie(st(e,"float32")),2))}}};const mE={kernelName:Rh,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>F(n,F(st(e,"float32"),2))}}};const gE={kernelName:$i,inputsToSave:["a","b"],gradFunc:(n,t)=>{const[e,s]=t,o=Tt(2);return{a:()=>F(n,F(o,pt(e,s))),b:()=>F(n,F(o,pt(s,e)))}}};const xE={kernelName:Ni,gradFunc:n=>({x:()=>kt(n)})};const bE={kernelName:Ii,inputsToSave:["a","b"],gradFunc:(n,t)=>{const[e,s]=t,o=mt(e.shape,s.shape);return{a:()=>{let a=n;const l=le(e.shape,o);return l.length>0&&(a=ct(a,l)),L(a,e.shape)},b:()=>{let a=n;const l=le(s.shape,o);return l.length>0&&(a=ct(a,l)),L(Zt(a),s.shape)}}}};const yE={kernelName:Kl,inputsToSave:["x"],gradFunc:(n,t,e)=>{const[s]=t,o=s.shape.slice(),{axis:r}=e;Ct(r,s.shape).forEach(c=>{o[c]=1});const a=L(n,o),l=F(a,sn(s.shape,"float32"));return{x:()=>l}}};const wE={kernelName:vi,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>ut(n,Vt(Gh(e)))}}};const CE={kernelName:ki,outputsToSave:[!0],gradFunc:(n,t)=>{const[e]=t;return{x:()=>F(pt(Tt(1),Vt(e)),n)}}};const $E={kernelName:Si,inputsToSave:["x"],gradFunc:(n,t,e)=>{const[s]=t,{reps:o}=e;return{x:()=>{let i=kt(s);if(s.rank===1)for(let a=0;a<o[0];++a)i=J(i,zt(n,[a*s.shape[0]],[s.shape[0]]));else if(s.rank===2)for(let a=0;a<o[0];++a)for(let l=0;l<o[1];++l)i=J(i,zt(n,[a*s.shape[0],l*s.shape[1]],[s.shape[0],s.shape[1]]));else if(s.rank===3)for(let a=0;a<o[0];++a)for(let l=0;l<o[1];++l)for(let c=0;c<o[2];++c)i=J(i,zt(n,[a*s.shape[0],l*s.shape[1],c*s.shape[2]],[s.shape[0],s.shape[1],s.shape[2]]));else if(s.rank===4)for(let a=0;a<o[0];++a)for(let l=0;l<o[1];++l)for(let c=0;c<o[2];++c)for(let u=0;u<o[3];++u)i=J(i,zt(n,[a*s.shape[0],l*s.shape[1],c*s.shape[2],u*s.shape[3]],[s.shape[0],s.shape[1],s.shape[2],s.shape[3]]));else throw new Error(`Gradient for tile operation is not implemented for rank-${s.rank} tensors yet.`);return i}}}};const IE={kernelName:ko,gradFunc:(n,t,e)=>{const s=e,{perm:o}=s,r=ks(o);return{x:()=>vt(n,r)}}};const vE={kernelName:Jl,gradFunc:(n,t,e)=>{const s=e,{axis:o}=s;return{value:()=>Bn(n,o)}}};const kE={kernelName:Ql,inputsToSave:["segmentIds"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>SE(n,e)}}};function SE(n,t){const e=Ss(t,kt(t)),s=qh(n,e);let o=ao(t,Tt(0,"int32"));const r=s.rank-o.rank;for(let a=0;a<r;++a)o=_e(o,a+1);o=Xn(o,sn(s.shape,"bool"));const i=kt(s);return Re(o,s,i)}const NE={kernelName:tc,gradFunc:n=>({x:()=>kt(n)})};const TE=[Yx,kN,SN,NN,TN,EN,RN,AN,DN,FN,_N,ON,PN,VN,WN,UN,GN,HN,jN,qN,KN,XN,ZN,YN,tT,eT,nT,sT,oT,rT,XT,iT,aT,lT,cT,uT,dT,hT,pT,fT,mT,gT,xT,bT,yT,wT,CT,$T,IT,ST,Cf,Cf,NT,RT,FT,_T,OT,MT,LT,PT,zT,BT,VT,WT,UT,$f,$f,GT,HT,KT,YT,ZT,JT,QT,tE,eE,nE,sE,oE,rE,iE,aE,lE,cE,uE,hE,dE,pE,If,If,vf,vf,fE,gE,mE,xE,bE,yE,wE,CE,$E,IE,vE,kE,NE];for(const n of TE)BC(n);j().prototype.abs=function(){return this.throwIfDisposed(),Ne(this)};j().prototype.acos=function(){return this.throwIfDisposed(),eI(this)};j().prototype.acosh=function(){return this.throwIfDisposed(),sI(this)};j().prototype.add=function(n){return this.throwIfDisposed(),J(this,n)};j().prototype.all=function(n,t){return this.throwIfDisposed(),Dg(this,n,t)};j().prototype.any=function(n,t){return this.throwIfDisposed(),yu(this,n,t)};j().prototype.argMax=function(n){return this.throwIfDisposed(),yr(this,n)};j().prototype.argMin=function(n){return this.throwIfDisposed(),lI(this,n)};j().prototype.asScalar=function(){return this.throwIfDisposed(),v(this.size===1,()=>"The array must have only 1 element."),L(this,[])};j().prototype.asType=function(n){return this.throwIfDisposed(),st(this,n)};j().prototype.as1D=function(){return this.throwIfDisposed(),L(this,[this.size])};j().prototype.as2D=function(n,t){return this.throwIfDisposed(),L(this,[n,t])};j().prototype.as3D=function(n,t,e){return this.throwIfDisposed(),L(this,[n,t,e])};j().prototype.as4D=function(n,t,e,s){return this.throwIfDisposed(),L(this,[n,t,e,s])};j().prototype.as5D=function(n,t,e,s,o){return this.throwIfDisposed(),L(this,[n,t,e,s,o])};j().prototype.asin=function(){return this.throwIfDisposed(),uI(this)};j().prototype.asinh=function(){return this.throwIfDisposed(),dI(this)};j().prototype.atan=function(){return this.throwIfDisposed(),fI(this)};j().prototype.atan2=function(n){return this.throwIfDisposed(),gI(this,n)};j().prototype.atanh=function(){return this.throwIfDisposed(),bI(this)};j().prototype.avgPool=function(n,t,e,s){return this.throwIfDisposed(),Vh(this,n,t,e,s)};j().prototype.batchToSpaceND=function(n,t){return this.throwIfDisposed(),Wh(this,n,t)};j().prototype.batchNorm=function(n,t,e,s,o){return this.throwIfDisposed(),rc(this,n,t,e,s,o)};j().prototype.broadcastTo=function(n){return this.throwIfDisposed(),xr(this,n)};j().prototype.cast=function(n){return this.throwIfDisposed(),st(this,n)};j().prototype.ceil=function(){return this.throwIfDisposed(),HI(this)};j().prototype.clipByValue=function(n,t){return this.throwIfDisposed(),Ye(this,n,t)};j().prototype.concat=function(n,t){return this.throwIfDisposed(),n instanceof Xt&&(n=[n]),Me([this,...n],t)};j().prototype.conv1d=function(n,t,e,s,o,r){return this.throwIfDisposed(),Fg(this,n,t,e,s,o,r)};j().prototype.conv2dTranspose=function(n,t,e,s,o){return this.throwIfDisposed(),_g(this,n,t,e,s,o)};j().prototype.conv2d=function(n,t,e,s,o,r){return this.throwIfDisposed(),Js(this,n,t,e,s,o,r)};j().prototype.cos=function(){return this.throwIfDisposed(),Gh(this)};j().prototype.cosh=function(){return this.throwIfDisposed(),Mg(this)};j().prototype.cumprod=function(n,t,e){return this.throwIfDisposed(),Cu(this,n,t,e)};j().prototype.cumsum=function(n,t,e){return this.throwIfDisposed(),Lg(this,n,t,e)};j().prototype.depthToSpace=function(n,t){return this.throwIfDisposed(),gv(this,n,t)};j().prototype.depthwiseConv2d=function(n,t,e,s,o,r){return this.throwIfDisposed(),Hh(this,n,t,e,s,o,r)};j().prototype.dilation2d=function(n,t,e,s,o){return this.throwIfDisposed(),yv(this,n,t,e,s,o)};j().prototype.divNoNan=function(n){return this.throwIfDisposed(),vv(this,n)};j().prototype.div=function(n){return this.throwIfDisposed(),ut(this,n)};j().prototype.dot=function(n){return this.throwIfDisposed(),Sv(this,n)};j().prototype.elu=function(){return this.throwIfDisposed(),ac(this)};j().prototype.equal=function(n){return this.throwIfDisposed(),Ln(this,n)};j().prototype.erf=function(){return this.throwIfDisposed(),Pg(this)};j().prototype.euclideanNorm=function(n,t){return this.throwIfDisposed(),Pv(this,n,t)};j().prototype.exp=function(){return this.throwIfDisposed(),Pn(this)};j().prototype.expandDims=function(n){return this.throwIfDisposed(),_e(this,n)};j().prototype.expm1=function(){return this.throwIfDisposed(),Wv(this)};j().prototype.fft=function(){return this.throwIfDisposed(),nx(this)};j().prototype.flatten=function(){return this.throwIfDisposed(),L(this,[this.size])};j().prototype.floor=function(){return this.throwIfDisposed(),cc(this)};j().prototype.floorDiv=function(n){return this.throwIfDisposed(),Ag(this,n)};j().prototype.gather=function(n,t,e){return this.throwIfDisposed(),qh(this,n,t,e)};j().prototype.greaterEqual=function(n){return this.throwIfDisposed(),ao(this,n)};j().prototype.greater=function(n){return this.throwIfDisposed(),Ze(this,n)};j().prototype.ifft=function(){return this.throwIfDisposed(),$u(this)};j().prototype.irfft=function(){return this.throwIfDisposed(),MS(this)};j().prototype.isFinite=function(){return this.throwIfDisposed(),Zv(this)};j().prototype.isInf=function(){return this.throwIfDisposed(),Qv(this)};j().prototype.isNaN=function(){return this.throwIfDisposed(),ek(this)};j().prototype.leakyRelu=function(n){return this.throwIfDisposed(),Xh(this,n)};j().prototype.lessEqual=function(n){return this.throwIfDisposed(),jo(this,n)};j().prototype.less=function(n){return this.throwIfDisposed(),Da(this,n)};j().prototype.localResponseNormalization=function(n,t,e,s){return this.throwIfDisposed(),ik(this,n,t,e,s)};j().prototype.logSigmoid=function(){return this.throwIfDisposed(),pk(this)};j().prototype.logSoftmax=function(n){return this.throwIfDisposed(),Ug(this,n)};j().prototype.logSumExp=function(n,t){return this.throwIfDisposed(),Gg(this,n,t)};j().prototype.log=function(){return this.throwIfDisposed(),zn(this)};j().prototype.log1p=function(){return this.throwIfDisposed(),Wg(this)};j().prototype.logicalAnd=function(n){return this.throwIfDisposed(),Xn(this,n)};j().prototype.logicalNot=function(){return this.throwIfDisposed(),Yh(this)};j().prototype.logicalOr=function(n){return this.throwIfDisposed(),Hg(this,n)};j().prototype.logicalXor=function(n){return this.throwIfDisposed(),Ck(this,n)};j().prototype.matMul=function(n,t,e){return this.throwIfDisposed(),It(this,n,t,e)};j().prototype.maxPool=function(n,t,e,s){return this.throwIfDisposed(),Zh(this,n,t,e,s)};j().prototype.max=function(n,t){return this.throwIfDisposed(),yn(this,n,t)};j().prototype.maximum=function(n){return this.throwIfDisposed(),Ss(this,n)};j().prototype.mean=function(n,t){return this.throwIfDisposed(),ne(this,n,t)};j().prototype.min=function(n,t){return this.throwIfDisposed(),Aa(this,n,t)};j().prototype.minimum=function(n){return this.throwIfDisposed(),$r(this,n)};j().prototype.mirrorPad=function(n,t){return this.throwIfDisposed(),Rk(this,n,t)};j().prototype.mod=function(n){return this.throwIfDisposed(),Dk(this,n)};j().prototype.mul=function(n){return this.throwIfDisposed(),F(this,n)};j().prototype.neg=function(){return this.throwIfDisposed(),Zt(this)};j().prototype.norm=function(n,t,e){return this.throwIfDisposed(),lc(this,n,t,e)};j().prototype.notEqual=function(n){return this.throwIfDisposed(),Fa(this,n)};j().prototype.oneHot=function(n,t=1,e=0){return this.throwIfDisposed(),jg(this,n,t,e)};j().prototype.onesLike=function(){return this.throwIfDisposed(),ln(this)};j().prototype.pad=function(n,t){return this.throwIfDisposed(),Qh(this,n,t)};j().prototype.pool=function(n,t,e,s,o,r){return this.throwIfDisposed(),Wk(this,n,t,e,s,o,r)};j().prototype.pow=function(n){return this.throwIfDisposed(),Qs(this,n)};j().prototype.prelu=function(n){return this.throwIfDisposed(),ed(this,n)};j().prototype.prod=function(n,t){return this.throwIfDisposed(),Hk(this,n,t)};j().prototype.reciprocal=function(){return this.throwIfDisposed(),gS(this)};j().prototype.relu=function(){return this.throwIfDisposed(),lo(this)};j().prototype.relu6=function(){return this.throwIfDisposed(),Kg(this)};j().prototype.reshapeAs=function(n){return this.throwIfDisposed(),L(this,n.shape)};j().prototype.reshape=function(n){return this.throwIfDisposed(),L(this,n)};j().prototype.resizeBilinear=function(n,t,e){return this.throwIfDisposed(),ax(this,n,t,e)};j().prototype.resizeNearestNeighbor=function(n,t,e){return this.throwIfDisposed(),lx(this,n,t,e)};j().prototype.reverse=function(n){return this.throwIfDisposed(),to(this,n)};j().prototype.rfft=function(){return this.throwIfDisposed(),zS(this)};j().prototype.round=function(){return this.throwIfDisposed(),Xg(this)};j().prototype.rsqrt=function(){return this.throwIfDisposed(),Yg(this)};j().prototype.selu=function(){return this.throwIfDisposed(),Zg(this)};j().prototype.separableConv2d=function(n,t,e,s,o,r){return this.throwIfDisposed(),Jg(this,n,t,e,s,o,r)};j().prototype.sigmoid=function(){return this.throwIfDisposed(),Ho(this)};j().prototype.sign=function(){return this.throwIfDisposed(),kS(this)};j().prototype.sin=function(){return this.throwIfDisposed(),Qg(this)};j().prototype.sinh=function(){return this.throwIfDisposed(),tx(this)};j().prototype.slice=function(n,t){return this.throwIfDisposed(),zt(this,n,t)};j().prototype.softmax=function(n){return this.throwIfDisposed(),rd(this,n)};j().prototype.softplus=function(){return this.throwIfDisposed(),Ei(this)};j().prototype.spaceToBatchND=function(n,t){return this.throwIfDisposed(),td(this,n,t)};j().prototype.split=function(n,t){return this.throwIfDisposed(),Xe(this,n,t)};j().prototype.sqrt=function(){return this.throwIfDisposed(),Ie(this)};j().prototype.square=function(){return this.throwIfDisposed(),Vt(this)};j().prototype.squaredDifference=function(n){return this.throwIfDisposed(),VS(this,n)};j().prototype.squeeze=function(n){return this.throwIfDisposed(),Ai(this,n)};j().prototype.stack=function(n,t){this.throwIfDisposed();const e=n instanceof Xt?[this,n]:[this,...n];return Bn(e,t)};j().prototype.step=function(n){return this.throwIfDisposed(),Di(this,n)};j().prototype.stridedSlice=function(n,t,e,s,o,r,i,a){return this.throwIfDisposed(),jS(this,n,t,e,s,o,r,i,a)};j().prototype.sub=function(n){return this.throwIfDisposed(),pt(this,n)};j().prototype.sum=function(n,t){return this.throwIfDisposed(),ct(this,n,t)};j().prototype.tan=function(){return this.throwIfDisposed(),KS(this)};j().prototype.tanh=function(){return this.throwIfDisposed(),oc(this)};j().prototype.tile=function(n){return this.throwIfDisposed(),xn(this,n)};j().prototype.toBool=function(){return this.throwIfDisposed(),st(this,"bool")};j().prototype.toFloat=function(){return this.throwIfDisposed(),st(this,"float32")};j().prototype.toInt=function(){return this.throwIfDisposed(),st(this,"int32")};j().prototype.topk=function(n,t){return this.throwIfDisposed(),ZS(this,n,t)};j().prototype.transpose=function(n){return this.throwIfDisposed(),vt(this,n)};j().prototype.unique=function(n){return this.throwIfDisposed(),t2(this,n)};j().prototype.unsortedSegmentSum=function(n,t){return this.throwIfDisposed(),rx(this,n,t)};j().prototype.unstack=function(n){return this.throwIfDisposed(),eo(this,n)};j().prototype.where=function(n,t){return this.throwIfDisposed(),Re(n,this,t)};j().prototype.zerosLike=function(){return this.throwIfDisposed(),kt(this)};class Nn extends Error{constructor(t){super(t),Object.setPrototypeOf(this,Nn.prototype)}}class on extends Error{constructor(t){super(t),Object.setPrototypeOf(this,on.prototype)}}class D extends Error{constructor(t){super(t),Object.setPrototypeOf(this,D.prototype)}}class xt extends Error{constructor(t){super(t),Object.setPrototypeOf(this,xt.prototype)}}class Wd extends Error{constructor(t){super(t),Object.setPrototypeOf(this,Wd.prototype)}}class Jx{constructor(t){this.maxEntries=t||100,this.cache=new Map}get(t){let e;return this.cache.has(t)&&(e=this.cache.get(t),this.cache.delete(t),this.cache.set(t,e)),e}put(t,e){if(this.cache.has(t))this.cache.delete(t);else if(this.cache.size>=this.maxEntries){const s=this.cache.keys().next().value;this.cache.delete(s)}this.cache.set(t,e)}getMaxEntries(){return this.maxEntries}setMaxEntries(t){if(t<0)throw new Error(`The maxEntries of LRU caches must be at least 0, but got ${t}.`);if(this.maxEntries>t)for(let e=0;e<this.maxEntries-t;e++){const s=this.cache.keys().next().value;this.cache.delete(s)}this.maxEntries=t}}function no(n,t){if(Array.isArray(n)){let e=[];for(let s=0;s<t;s++)e=e.concat(n);return e}else{const e=new Array(t);return e.fill(n),e}}function Tn(n,t){if(!n)throw new Wd(t)}function kf(n,t){let e=0;for(const s of n)s===t&&e++;return e}function Oe(n){return n.length===1?n[0]:n}function At(n){return Array.isArray(n)?n:[n]}function jn(n){const e=n.replace(/(.)([A-Z][a-z0-9]+)/g,"$1_$2").replace(/([a-z])([A-Z])/g,"$1_$2").toLowerCase();return e[0]!=="_"?e:"private"+e}function Ps(n){return n.length<=1||n.indexOf("_")===-1?n:n.replace(/[_]+(\w|$)/g,(t,e)=>e.toUpperCase())}let Qe={};function Ud(n){if(n==null)return null;const t={};return t.className=n.getClassName(),t.config=n.getConfig(),t}function ku(n){if(!(n==null||typeof n!="object"))if(Array.isArray(n))n.forEach(t=>ku(t));else{const t=Object.keys(n);for(const e of t){const s=n[e];s!=null&&typeof s=="object"&&(!Array.isArray(s)&&s.type==="ndarray"&&typeof s.value=="number"?n[e]=s.value:ku(s))}}}function Mi(n,t={},e={},s="object",o=!1){if(typeof n=="string"){const r=n;let i;if(r in e)i=e[r];else if(r in Qe)i=Qe[r];else if(i=t[r],i==null)throw new D(`Unknown ${s}: ${n}. This may be due to one of the following reasons:
1. The ${s} is defined in Python, in which case it needs to be ported to TensorFlow.js or your JavaScript code.
2. The custom ${s} is defined in JavaScript, but is not registered properly with tf.serialization.registerClass().`);return i}else{const r=n;if(r.className==null||r.config==null)throw new D(`${s}: Improper config format: ${JSON.stringify(r)}.
'className' and 'config' must set.`);const i=r.className;let a,l;if(i in e?[a,l]=e[i]:i in Qe?[a,l]=Qe.className:i in t&&([a,l]=t[i]),a==null)throw new D(`Unknown ${s}: ${i}. This may be due to one of the following reasons:
1. The ${s} is defined in Python, in which case it needs to be ported to TensorFlow.js or your JavaScript code.
2. The custom ${s} is defined in JavaScript, but is not registered properly with tf.serialization.registerClass().`);if(l!=null){const c={};for(const p of Object.keys(Qe))c[p]=Qe[p];for(const p of Object.keys(e))c[p]=e[p];const u=r.config;u.customObjects=c;const h=Object.assign({},Qe);for(const p of Object.keys(e))Qe[p]=e[p];ku(r.config);const d=l(a,r.config,e,o);return Qe=Object.assign({},h),d}else{const c=Object.assign({},Qe);for(const h of Object.keys(e))Qe[h]=e[h];const u=new a(r.config);return Qe=Object.assign({},c),u}}}function EE(n,t){return n<t?-1:n>t?1:0}function ta(n,t){return-1*EE(n,t)}function ps(n){if(n==null)return n;const t=[];for(const e of n)t.indexOf(e)===-1&&t.push(e);return t}function RE(n){if(n==null)throw new D(`Invalid value in obj: ${JSON.stringify(n)}`);for(const t in n)if(n.hasOwnProperty(t))return!1;return!0}function uo(n,t,e){if(e!=null&&n.indexOf(e)<0)throw new D(`${e} is not a valid ${t}.  Valid values are ${n} or null/undefined.`)}function Gd(n,t,e=0,s=1/0){return Tn(e>=0),Tn(s>=e),Array.isArray(n)&&n.length>=e&&n.length<=s&&n.every(o=>typeof o===t)}function pe(n,t){Array.isArray(n)?(v(n.length>0,()=>`${t} is unexpectedly an empty array.`),n.forEach((e,s)=>pe(e,`element ${s+1} of ${t}`))):v(Number.isInteger(n)&&n>0,()=>`Expected ${t} to be a positive integer, but got ${Qx(n)}.`)}function Qx(n){return n===null?"null":Array.isArray(n)?"["+n.map(t=>Qx(t)).join(",")+"]":typeof n=="string"?`"${n}"`:`${n}`}function AE(n,t,e){let s=e!=null?e():Fe(),o;return(...i)=>{const a=e!=null?e():Fe();return a-s<t||(s=a,o=n(...i)),o}}function tb(n){return n==="relu"?"relu":n==="linear"?"linear":n==="elu"?"elu":null}let DE=0;function eb(){return DE++}const ea={};function fc(n=""){return n in ea||(ea[n]=0),ea[n]+=1,n+ea[n].toString()}const FE=["channelsFirst","channelsLast"],_E=["nearest","bilinear"],OE=["valid","same","causal"],ME=["max","avg"],LE=["sum","mul","concat","ave"];const bo=new Map;function te(n){uo(FE,"DataFormat",n)}function PE(n){uo(_E,"InterpolationFormat",n)}function Je(n){uo(OE,"PaddingMode",n)}function nb(n){uo(ME,"PoolMode",n)}const br=[],Sf="/";function Us(n,t){br.push(n);try{const e=t();return br.pop(),e}catch(e){throw br.pop(),e}}function zE(){return br.length===0?"":br.join(Sf)+Sf}function sb(n){if(!rb(n))throw new Error("Not a valid tensor name: '"+n+"'");return zE()+n}function ob(n){if(!rb(n))throw new Error("Not a valid tensor name: '"+n+"'");bo.has(n)||bo.set(n,0);const t=bo.get(n);if(bo.set(n,bo.get(n)+1),t>0){const e=`${n}_${t}`;return bo.set(e,1),e}else return n}const BE=new RegExp(/^[A-Za-z0-9][-A-Za-z0-9\._\/]*$/);function rb(n){return!!n.match(BE)}function VE(n){return n===parseInt(n.toString(),10)}function fs(n,t,e){t==null&&(t=0),e==null&&(e=n.length);let s=1;for(let o=t;o<e;++o)s*=n[o];return s}function Mo(n){if(n.length===0)return Number.NaN;let t=Number.POSITIVE_INFINITY;for(let e=0;e<n.length;e++){const s=n[e];s<t&&(t=s)}return t}function gs(n){if(n.length===0)return Number.NaN;let t=Number.NEGATIVE_INFINITY;for(let e=0;e<n.length;e++){const s=n[e];s>t&&(t=s)}return t}function Cn(n,t){if(t<n)throw new D(`end (${t}) < begin (${n}) is forbidden.`);const e=[];for(let s=n;s<t;++s)e.push(s);return e}let Uc;function oe(){return Uc==null&&(Uc=f$().epsilon()),Uc}function $n(){return"channelsLast"}function _n(n,t){return st(n,t)}function Li(n,t=-1){const e=n.shape.slice();return t<0&&(t=e.length+t+1),e.splice(t,0,1),L(n,e)}function WE(n,t){return B(()=>{if(n.shape.length!==2)throw new D(`repeat() expects a rank-2 tensor, but received a rank-${n.shape.length} tensor.`);const e=Li(n,1);return Su(e,[1,t,1])})}function UE(n){const t=[fs(n.shape)];return L(n,t)}function GE(n){if(n.rank<=1)throw new D(`batchFlatten requires a minimum rank of 2. Got rank: ${n.rank}.`);const t=[n.shape[0],fs(n.shape,1)];return L(n,t)}function Gs(n,t,e){return B(()=>{switch(n.rank){case 1:return sd(n,t,e);case 2:return ex(n,[t,0],[e,n.shape[1]]);case 3:return od(n,[t,0,0],[e,n.shape[1],n.shape[2]]);case 4:return Oa(n,[t,0,0,0],[e,n.shape[1],n.shape[2],n.shape[3]]);case 5:return zt(n,[t,0,0,0,0],[e,n.shape[1],n.shape[2],n.shape[3],n.shape[4]]);case 6:return zt(n,[t,0,0,0,0,0],[e,n.shape[1],n.shape[2],n.shape[3],n.shape[4],n.shape[5]]);default:throw new D(`sliceAlongFirstAxis() received an unsupported tensor rank: ${n.rank}`)}})}function Gc(n,t,e){return B(()=>{switch(n.rank){case 1:return sd(n,t,e);case 2:return ex(n,[0,t],[n.shape[0],e]);case 3:return od(n,[0,0,t],[n.shape[0],n.shape[1],e]);case 4:return Oa(n,[0,0,0,t],[n.shape[0],n.shape[1],n.shape[2],e]);default:throw new D(`sliceAlongLastAxis() received an unsupported tensor rank: ${n.rank}`)}})}function na(n,t,e,s){return B(()=>{switch(n.rank){case 1:return sd(n,t,e);case 2:switch(s){case 1:return Gs(n,t,e);case 2:return Gc(n,t,e);default:throw new D(`The axis is not within the rank of the tensor ${s}`)}case 3:switch(s){case 1:return Gs(n,t,e);case 2:return od(n,[0,t,0],[n.shape[0],e,n.shape[2]]);case 3:return Gc(n,t,e);default:throw new D(`The axis is not within the rank of the tensor ${s}`)}case 4:switch(s){case 1:return Gs(n,t,e);case 2:return Oa(n,[0,t,0,0],[n.shape[0],e,n.shape[2],n.shape[3]]);case 3:return Oa(n,[0,0,t,0],[n.shape[0],n.shape[1],e,n.shape[3]]);case 4:return Gc(n,t,e);default:throw new D(`The axis is not within the rank of the tensor ${s}`)}default:throw new D(`sliceAlongLastAxis() received an unsupported tensor rank: ${n.rank}`)}})}function Hd(n,t=-1){let e;return t<0&&(e=n[0].rank,e!==0?t=e:t=0),t===n[0].rank&&(t=-1),Me(n,t)}function Nf(n,t){switch(n.rank){case 1:return KI([n,t]);case 2:return YI([n,t],0);case 3:return JI([n,t],0);case 4:return tv([n,t],0);default:throw new D(`concatAlongFirstAxis() received an unsupported tensor rank: ${n.rank}`)}}function Su(n,t){if(Array.isArray(t)||(t=[t]),n.rank!==t.length)throw new D(`The length of input n (${t.length}) does not match the number of dimensions in input x (${n.rank})`);return xn(n,t)}function mc(n,t=0,e=1,s,o){return dS(n,t,e,s,o)}function On(n,t,e,s){if(n.rank<2||t.rank<2)throw new xt(`dot requires both inputs to be rank >= 2 but got x shape = ${n.shape} and y shape = ${t.shape}`);if(t.rank>=3){const o=n.shape.slice(-1)[0],r=t.shape.slice(-2)[0];if(o!==r)throw new xt(`If rank y >= 3, then the second last dim of y must equal the last dim of x but got x shape = ${n.shape} and  y shape = ${t.shape}`)}if(n.rank===2&&t.rank===2)return hf({a:n,b:t,transposeA:!1,transposeB:!1,bias:s?Nu(n.rank,s,$n()):null,activation:e});{const o=n.shape.slice(),r=o.pop();n=L(n,[-1,r]);const i=t.shape.slice(),a=i.pop(),l=i.pop(),c=[...i,a],u=Array.from({length:t.rank},(f,m)=>m===0?t.rank-2:m<=t.rank-2?m-1:m);t=L(vt(t,u),[l,-1]);const h=[...o,...c];return L(hf({a:n,b:t,transposeA:!1,transposeB:!1,bias:s?Nu(n.rank,s,$n()):null,activation:e}),h)}}function ib(n,t,e){return B(()=>(Array.isArray(t)?t=We(t,"int32"):t=st(t,"int32"),qh(n,t,e)))}function Pi(n){return F(n,n)}function Nu(n,t,e){const s=t.shape;if(t.rank!==1&&t.rank!==n)throw new D(`Unexpected bias dimensions: ${t.rank}; expected it to be 1 or ${n}`);if(n===5){if(e==="channelsFirst")return s.length===1?L(t,[1,s[0],1,1,1]):L(t,[1,s[3],s[0],s[1],s[2]]);if(e==="channelsLast")return s.length===1?L(t,[1,1,1,1,s[0]]):L(t,[1].concat(s))}else if(n===4){if(e==="channelsFirst")return s.length===1?L(t,[1,s[0],1,1]):L(t,[1,s[2],s[0],s[1]]);if(e==="channelsLast")return s.length===1?L(t,[1,1,1,s[0]]):L(t,[1].concat(s))}else if(n===3){if(e==="channelsFirst")return s.length===1?L(t,[1,s[0],1]):L(t,[1,s[1],s[0]]);if(e==="channelsLast")return s.length===1?L(t,[1,1,s[0]]):L(t,[1].concat(s))}else if(n<3)return t;throw new D(`Unsupported input rank by biasAdd: ${t.rank}`)}function vn(n,t,e){return B(()=>(e==null&&(e=$n()),te(e),J(n,Nu(n.rank,t,e))))}function HE(n,t=1){if(t!==1)throw new xt(`Support for alpha values other than 1 (${t}) is not implemented yet.`);return ac(n)}function jE(n){return B(()=>ut(n,J(Ne(n),1)))}function ab(n,t,e,s){return B(()=>a2(n,t,e,s))}function qE(n){return B(()=>{const t=J(.5,F(.2,n));return Ye(t,0,1)})}function zi(n,t,e=!1){return e?n():t()}const KE=["fanIn","fanOut","fanAvg"],XE=["normal","uniform","truncatedNormal"];function YE(n){uo(KE,"FanMode",n)}function ZE(n){uo(XE,"Distribution",n)}class un extends Ko{fromConfigUsesCustomObjects(){return!1}getConfig(){return{}}}class lb extends un{apply(t,e){return de(t,e)}}lb.className="Zeros";X(lb);class jd extends un{apply(t,e){return sn(t,e)}}jd.className="Ones";X(jd);class cb extends un{constructor(t){if(super(),typeof t!="object")throw new D(`Expected argument of type ConstantConfig but got ${t}`);if(t.value===void 0)throw new D(`config must have value set but got ${t}`);this.value=t.value}apply(t,e){return B(()=>F(Tt(this.value),sn(t,e)))}getConfig(){return{value:this.value}}}cb.className="Constant";X(cb);class ub extends un{constructor(t){super(),this.DEFAULT_MINVAL=-.05,this.DEFAULT_MAXVAL=.05,this.minval=t.minval||this.DEFAULT_MINVAL,this.maxval=t.maxval||this.DEFAULT_MAXVAL,this.seed=t.seed}apply(t,e){return Ri(t,this.minval,this.maxval,e,this.seed)}getConfig(){return{minval:this.minval,maxval:this.maxval,seed:this.seed}}}ub.className="RandomUniform";X(ub);class hb extends un{constructor(t){super(),this.DEFAULT_MEAN=0,this.DEFAULT_STDDEV=.05,this.mean=t.mean||this.DEFAULT_MEAN,this.stddev=t.stddev||this.DEFAULT_STDDEV,this.seed=t.seed}apply(t,e){if(e=e||"float32",e!=="float32"&&e!=="int32")throw new xt(`randomNormal does not support dType ${e}.`);return mc(t,this.mean,this.stddev,e,this.seed)}getConfig(){return{mean:this.mean,stddev:this.stddev,seed:this.seed}}}hb.className="RandomNormal";X(hb);class db extends un{constructor(t){super(),this.DEFAULT_MEAN=0,this.DEFAULT_STDDEV=.05,this.mean=t.mean||this.DEFAULT_MEAN,this.stddev=t.stddev||this.DEFAULT_STDDEV,this.seed=t.seed}apply(t,e){if(e=e||"float32",e!=="float32"&&e!=="int32")throw new xt(`truncatedNormal does not support dType ${e}.`);return ox(t,this.mean,this.stddev,e,this.seed)}getConfig(){return{mean:this.mean,stddev:this.stddev,seed:this.seed}}}db.className="TruncatedNormal";X(db);class pb extends un{constructor(t){super(),this.gain=t.gain!=null?t.gain:1}apply(t,e){return B(()=>{if(t.length!==2||t[0]!==t[1])throw new D("Identity matrix initializer can only be used for 2D square matrices.");return F(this.gain,Vg(t[0]))})}getConfig(){return{gain:this.gain}}}pb.className="Identity";X(pb);function JE(n,t="channelsLast"){let e,s;if(te(t),n.length===2)e=n[0],s=n[1];else if([3,4,5].indexOf(n.length)!==-1){if(t==="channelsFirst"){const o=fs(n,2);e=n[1]*o,s=n[0]*o}else if(t==="channelsLast"){const o=fs(n,0,n.length-2);e=n[n.length-2]*o,s=n[n.length-1]*o}}else{const o=fs(n);e=Math.sqrt(o),s=Math.sqrt(o)}return[e,s]}class Ge extends un{constructor(t){if(super(),t.scale<0)throw new D(`scale must be a positive float. Got: ${t.scale}`);this.scale=t.scale==null?1:t.scale,this.mode=t.mode==null?"fanIn":t.mode,YE(this.mode),this.distribution=t.distribution==null?"normal":t.distribution,ZE(this.distribution),this.seed=t.seed}apply(t,e){const s=JE(t),o=s[0],r=s[1];let i=this.scale;if(this.mode==="fanIn"?i/=Math.max(1,o):this.mode==="fanOut"?i/=Math.max(1,r):i/=Math.max(1,(o+r)/2),this.distribution==="normal"){const a=Math.sqrt(i);if(e=e||"float32",e!=="float32"&&e!=="int32")throw new xt(`${this.getClassName()} does not support dType ${e}.`);return ox(t,0,a,e,this.seed)}else{const a=Math.sqrt(3*i);return Ri(t,-a,a,e,this.seed)}}getConfig(){return{scale:this.scale,mode:this.mode,distribution:this.distribution,seed:this.seed}}}Ge.className="VarianceScaling";X(Ge);class qd extends Ge{constructor(t){super({scale:1,mode:"fanAvg",distribution:"uniform",seed:t==null?null:t.seed})}getClassName(){return Ge.className}}qd.className="GlorotUniform";X(qd);class Kd extends Ge{constructor(t){super({scale:1,mode:"fanAvg",distribution:"normal",seed:t==null?null:t.seed})}getClassName(){return Ge.className}}Kd.className="GlorotNormal";X(Kd);class Xd extends Ge{constructor(t){super({scale:2,mode:"fanIn",distribution:"normal",seed:t==null?null:t.seed})}getClassName(){return Ge.className}}Xd.className="HeNormal";X(Xd);class Yd extends Ge{constructor(t){super({scale:2,mode:"fanIn",distribution:"uniform",seed:t==null?null:t.seed})}getClassName(){return Ge.className}}Yd.className="HeUniform";X(Yd);class Zd extends Ge{constructor(t){super({scale:1,mode:"fanIn",distribution:"normal",seed:t==null?null:t.seed})}getClassName(){return Ge.className}}Zd.className="LeCunNormal";X(Zd);class Jd extends Ge{constructor(t){super({scale:1,mode:"fanIn",distribution:"uniform",seed:t==null?null:t.seed})}getClassName(){return Ge.className}}Jd.className="LeCunUniform";X(Jd);class fb extends un{constructor(t){super(),this.DEFAULT_GAIN=1,this.ELEMENTS_WARN_SLOW=2e3,this.gain=t.gain==null?this.DEFAULT_GAIN:t.gain,this.seed=t.seed}apply(t,e){return B(()=>{if(t.length<2)throw new xt("Shape must be at least 2D.");if(e!=="int32"&&e!=="float32"&&e!==void 0)throw new TypeError(`Unsupported data type ${e}.`);e=e;const s=H(t.slice(0,-1)),o=t[t.length-1],r=s*o;r>this.ELEMENTS_WARN_SLOW&&console.warn(`Orthogonal initializer is being called on a matrix with more than ${this.ELEMENTS_WARN_SLOW} (${r}) elements: Slowness may result.`);const i=[Math.max(o,s),Math.min(o,s)],a=mc(i,0,1,e,this.seed),l=sN.qr(a,!1);let c=l[0];const h=l[1].flatten().stridedSlice([0],[Math.min(o,s)*Math.min(o,s)],[Math.min(o,s)+1]);return c=F(c,h.sign()),s<o&&(c=c.transpose()),F(Tt(this.gain),c.reshape(t))})}getConfig(){return{gain:this.gain,seed:this.seed}}}fb.className="Orthogonal";X(fb);const Tf={constant:"Constant",glorotNormal:"GlorotNormal",glorotUniform:"GlorotUniform",heNormal:"HeNormal",heUniform:"HeUniform",identity:"Identity",leCunNormal:"LeCunNormal",leCunUniform:"LeCunUniform",ones:"Ones",orthogonal:"Orthogonal",randomNormal:"RandomNormal",randomUniform:"RandomUniform",truncatedNormal:"TruncatedNormal",varianceScaling:"VarianceScaling",zeros:"Zeros"};function Ef(n,t={}){return Mi(n,nn.getMap().classNameMap,t,"initializer")}function jt(n){return Ud(n)}function Ut(n){if(typeof n=="string"){const t=n in Tf?Tf[n]:n;if(t==="GlorotNormal")return new Kd;if(t==="GlorotUniform")return new qd;if(t==="HeNormal")return new Xd;if(t==="HeUniform")return new Yd;if(t==="LeCunNormal")return new Zd;if(t==="LeCunUniform")return new Jd;{const e={};return e.className=t,e.config={},Ef(e)}}else return n instanceof un?n:Ef(n)}function Tu(n){return Array.isArray(n)&&Array.isArray(n[0])}function Ma(n){return n.length===0?[]:Array.isArray(n[0])?n:[n]}function ft(n){let t;if(Array.isArray(n)){if(n.length!==1)throw new D(`Expected Tensor length to be 1; got ${n.length}`);t=n[0]}else t=n;return t}function Nt(n){if(Array.isArray(n)&&Array.isArray(n[0])){if(n.length===1)return n=n,n[0];throw new D(`Expected exactly 1 Shape; got ${n.length}`)}else return n}function La(n){let t=0;for(const e of n)e.shape.length===0?t+=1:t+=e.shape.reduce((s,o)=>s*o);return t}const Rf="Variable";class QE{constructor(t,e="float32",s=Rf,o=!0,r=null){this.dtype=e??"float32",this.shape=t.shape,this.id=eb(),s=s??Rf,this.originalName=sb(s),this.name=ob(this.originalName),this.trainable_=o,this.constraint=r,this.val=s2(t,this.trainable_,this.name,this.dtype)}read(){return this.assertNotDisposed(),this.val}write(t){return this.assertNotDisposed(),tR(this.val,t),this.val.id!==t.id&&(this.val.assign(t),this.constraint!=null&&this.val.assign(this.constraint.apply(this.val))),this}dispose(){this.assertNotDisposed(),this.val.dispose()}assertNotDisposed(){if(this.val.isDisposed)throw new Error(`LayersVariable ${this.name} is already disposed.`)}get trainable(){return this.trainable_}set trainable(t){this.trainable_=t,this.val.trainable=t}}function tR(n,t){if(n.shape.toString()!==t.shape.toString())throw new Error("Shape mismatch: "+JSON.stringify(n.shape)+" vs. "+JSON.stringify(t.shape))}function Eu(n){return n.map(t=>t.read())}function Qd(n){n.forEach(t=>{t[0].write(t[1])})}class re{constructor(t){this.dtype=t.dtype,this.shape=t.shape,t.shape!=null?this.ndim=t.shape.length:this.ndim=t.ndim,this.maxNDim=t.maxNDim,this.minNDim=t.minNDim,this.axes=t.axes||{}}}class Vn{constructor(t,e,s,o,r,i,a){this.dtype=t,this.shape=e,this.sourceLayer=s,this.inputs=o,this.callArgs=r,this.outputTensorIndex=a,this.id=eb(),i!=null&&(this.originalName=sb(i),this.name=ob(this.originalName)),this.rank=e.length}}let eR=0;class gc{constructor(t,e){this.callArgs=e,this.id=eR++,this.outboundLayer=t.outboundLayer,this.inboundLayers=t.inboundLayers,this.nodeIndices=t.nodeIndices,this.tensorIndices=t.tensorIndices,this.inputTensors=t.inputTensors,this.outputTensors=t.outputTensors,this.inputMasks=t.inputMasks,this.outputMasks=t.outputMasks,this.inputShapes=t.inputShapes,this.outputShapes=t.outputShapes;for(const s of t.inboundLayers)s?.outboundNodes.push(this);t.outboundLayer.inboundNodes.push(this)}getConfig(){const t=[];for(const e of this.inboundLayers)e!=null?t.push(e.name):t.push(null);return{outboundLayer:this.outboundLayer?this.outboundLayer.name:null,inboundLayers:t,nodeIndices:this.nodeIndices,tensorIndices:this.tensorIndices}}}let nR=0;class $t extends Ko{constructor(t={}){super(),this._callHook=null,this._addedWeightNames=[],this._stateful=!1,this.id=nR++,this.activityRegularizer=null,this.inputSpec=null,this.supportsMasking=!1,this._trainableWeights=[],this._nonTrainableWeights=[],this._losses=[],this._updates=[],this._built=!1,this.inboundNodes=[],this.outboundNodes=[];let e=t.name;if(!e){const s=this.getClassName();e=jn(s)+"_"+fc(s)}if(this.name=e,this.trainable_=t.trainable==null?!0:t.trainable,t.inputShape!=null||t.batchInputShape!=null){let s;if(t.batchInputShape!=null)s=t.batchInputShape;else if(t.inputShape!=null){let r=null;t.batchSize!=null&&(r=t.batchSize),s=[r].concat(t.inputShape)}this.batchInputShape=s;let o=t.dtype;o==null&&(o=t.inputDType),o==null&&(o="float32"),this.dtype=o}t.weights!=null?this.initialWeights=t.weights:this.initialWeights=null,this._refCount=null,this.fastWeightInitDuringBuild=!1}static nodeKey(t,e){return t.name+"_ib-"+e.toString()}getNodeAtIndex(t,e){if(this.inboundNodes.length===0)throw new on(`The layer has never been called and thus has no defined ${e}.`);if(this.inboundNodes.length<=t)throw new D(`Asked to get ${e} at node ${t}, but the layer has only ${this.inboundNodes.length} inbound nodes.`);return this.inboundNodes[t]}getInputAt(t){return Oe(this.getNodeAtIndex(t,"input").inputTensors)}getOutputAt(t){return Oe(this.getNodeAtIndex(t,"output").outputTensors)}get input(){if(this.inboundNodes.length>1)throw new Nn(`Layer ${this.name} has multiple inbound nodes, hence the notion of "layer input" is ill-defined. Use \`getInputAt(nodeIndex)\` instead.`);if(this.inboundNodes.length===0)throw new Nn(`Layer ${this.name} is not connected, no input to return.`);return Oe(this.getNodeAtIndex(0,"input").inputTensors)}get output(){if(this.inboundNodes.length===0)throw new Nn(`Layer ${this.name} has no inbound nodes.`);if(this.inboundNodes.length>1)throw new Nn(`Layer ${this.name} has multiple inbound nodes, hence the notion of "layer output" is ill-defined. Use \`getOutputAt(nodeIndex)\` instead.`);return Oe(this.getNodeAtIndex(0,"output").outputTensors)}get losses(){return this._losses}calculateLosses(){return this.losses.map(t=>t())}get updates(){return this._updates}get built(){return this._built}set built(t){this._built=t}get trainable(){return this.trainable_}set trainable(t){this._trainableWeights.forEach(e=>e.trainable=t),this.trainable_=t}get trainableWeights(){return this.trainable_?this._trainableWeights.filter(t=>t.trainable):[]}set trainableWeights(t){this._trainableWeights=t}get nonTrainableWeights(){return this.trainable?this._trainableWeights.filter(t=>!t.trainable).concat(this._nonTrainableWeights):this._trainableWeights.concat(this._nonTrainableWeights)}set nonTrainableWeights(t){this._nonTrainableWeights=t}get weights(){return this.trainableWeights.concat(this.nonTrainableWeights)}get stateful(){return this._stateful}resetStates(){if(!this.stateful)throw new Error("Cannot call the resetStates() method of a non-stateful Layer object.")}assertInputCompatibility(t){const e=At(t);if(this.inputSpec==null||this.inputSpec.length===0)return;const s=At(this.inputSpec);if(e.length!==s.length)throw new D(`Layer ${this.name} expects ${s.length} inputs, but it received ${e.length} input tensors. Input received: ${t}`);for(let o=0;o<e.length;o++){const r=e[o],i=s[o];if(i==null)continue;const a=r.rank;if(i.ndim!=null&&a!==i.ndim)throw new D(`Input ${o} is incompatible with layer ${this.name}: expected ndim=${i.ndim}, found ndim=${a}`);if(i.maxNDim!=null&&a>i.maxNDim)throw new D(`Input ${o} is incompatible with layer ${this.name}: expected max_ndim=${i.maxNDim}, found ndim=${a}`);if(i.minNDim!=null&&a<i.minNDim)throw new D(`Input ${o} is incompatible with layer ${this.name}: expected min_ndim=${i.minNDim}, found ndim=${a}.`);if(i.dtype!=null&&r.dtype!==i.dtype)throw new D(`Input ${o} is incompatible with layer ${this.name} : expected dtype=${i.dtype}, found dtype=${r.dtype}.`);if(i.axes){const l=r.shape;for(const c in i.axes){const u=Number(c),h=i.axes[c],d=u>=0?l[u]:l[l.length+u];if(h!=null&&[h,null].indexOf(d)===-1)throw new D(`Input ${o} is incompatible with layer ${this.name}: expected axis ${u} of input shape to have value ${h} but got shape ${l}.`)}}if(i.shape!=null)for(let l=0;l<i.shape.length;++l){const c=i.shape[l],u=r.shape[l];if(c!=null&&u!=null&&c!==u)throw new D(`Input ${o} is incompatible with layer ${this.name}: expected shape=${i.shape}, found shape=${r.shape}.`)}}}call(t,e){return t}invokeCallHook(t,e){this._callHook!=null&&this._callHook(t,e)}setCallHook(t){this._callHook=t}clearCallHook(){this._callHook=null}apply(t,e){e=e||{},this.assertNotDisposed();const s=At(t),o=rR(t),r=iR(t);if(o===r)throw new D("Arguments to apply() must be all SymbolicTensors or all Tensors");return Us(this.name,()=>{if(!this.built){this.assertInputCompatibility(t);const i=[];for(const a of At(t))i.push(a.shape);this.build(Oe(i)),this.built=!0,this.initialWeights&&this.setWeights(this.initialWeights),this._refCount===null&&r&&(this._refCount=1)}if(this.assertInputCompatibility(t),r){let i=this.call(t,e);this.supportsMasking&&this.setMaskMetadata(t,i);const a=At(i),l=[];for(let c of a)s.indexOf(c)!==-1&&(c=c.clone()),l.push(c);if(i=Oe(l),this.activityRegularizer!=null)throw new xt("Layer invocation in the presence of activity regularizer(s) is not supported yet.");return i}else{const i=sR(t),a=this.computeOutputShape(i);let l;const c=oR(t);if(this.warnOnIncompatibleInputShape(Array.isArray(t)?i[0]:i),a!=null&&a.length>0&&Array.isArray(a[0])?l=a.map((u,h)=>new Vn(c,u,this,At(t),e,this.name,h)):l=new Vn(c,a,this,At(t),e,this.name),this.addInboundNode(t,l,null,null,i,a,e),this._refCount++,this.activityRegularizer!=null)throw new xt("Layer invocation in the presence of activity regularizer(s) is not supported yet.");return l}})}warnOnIncompatibleInputShape(t){if(this.batchInputShape!=null)if(t.length!==this.batchInputShape.length)console.warn(`The rank of the input tensor provided (shape: ${JSON.stringify(t)}) does not match that of the batchInputShape (${JSON.stringify(this.batchInputShape)}) of the layer ${this.name}`);else{let e=!1;this.batchInputShape.forEach((s,o)=>{s!=null&&t[o]!=null&&t[o]!==s&&(e=!0)}),e&&console.warn(`The shape of the input tensor (${JSON.stringify(t)}) does not match the expectation of layer ${this.name}: ${JSON.stringify(this.batchInputShape)}`)}}get outputShape(){if(this.inboundNodes==null||this.inboundNodes.length===0)throw new Nn(`The layer ${this.name} has never been called and thus has no defined output shape.`);const t=[];for(const e of this.inboundNodes){const s=JSON.stringify(e.outputShapes);t.indexOf(s)===-1&&t.push(s)}if(t.length===1){const e=this.inboundNodes[0].outputShapes;return Array.isArray(e)&&Array.isArray(e[0])&&e.length===1?e[0]:e}else throw new Nn(`The layer ${this.name} has multiple inbound nodes with different output shapes. Hence the notion of "output shape" is ill-defined for the layer.`)}countParams(){if(!this.built)throw new on(`You tried to call countParams() on ${this.name}, but the layer is not built yet. Build it first by calling build(batchInputShape).`);return La(this.weights)}build(t){this.built=!0}getWeights(t=!1){return Eu(t?this.trainableWeights:this.weights)}setWeights(t){B(()=>{const e=this.weights;if(e.length!==t.length)throw new D(`You called setWeights(weights) on layer "${this.name}" with a weight list of length ${t.length}, but the layer was expecting ${e.length} weights. Provided weights: ${t}...`);if(e.length===0)return;const s=[],o=Eu(e);for(let r=0;r<o.length;++r){const i=o[r],a=e[r],l=t[r];if(!Et(i.shape,l.shape))throw new D(`Layer weight shape ${i.shape} not compatible with provided weight shape ${l.shape}`);s.push([a,l])}Qd(s)})}addWeight(t,e,s,o,r,i,a,l){if(this._addedWeightNames.indexOf(t)!==-1)throw new D(`Duplicate weight name ${t} for layer ${this.name}`);this._addedWeightNames.push(t),s==null&&(s="float32"),this.fastWeightInitDuringBuild&&(o=l!=null?l():Ut("zeros"));const c=o.apply(e,s),u=new QE(c,s,t,i,a);return c.dispose(),r!=null&&this.addLoss(()=>r.apply(u.read())),i==null&&(i=!0),i?this._trainableWeights.push(u):this._nonTrainableWeights.push(u),u}setFastWeightInitDuringBuild(t){this.fastWeightInitDuringBuild=t}addLoss(t){t==null||Array.isArray(t)&&t.length===0||(t=At(t),this._losses!==void 0&&this._losses!==null&&this.losses.push(...t))}computeOutputShape(t){return t}computeMask(t,e){if(!this.supportsMasking){if(e!=null)if(Array.isArray(e))e.forEach(s=>{if(s!=null)throw new TypeError(`Layer ${this.name} does not support masking, but was passed an inputMask.`)});else throw new TypeError(`Layer ${this.name} does not support masking, but was passed an inputMask.`);return null}return e}setMaskMetadata(t,e,s){if(!this.supportsMasking)return;const o=this.computeMask(t,s),r=At(e),i=At(o);if(r.length!==i.length)throw new Error(`${this.name} outputs ${r.length} tensors but ${r.length} masks for those tensors`);for(let a=0;a<r.length;a++)r[a].kerasMask=i[a]}addInboundNode(t,e,s,o,r,i,a=null){const l=At(t);e=At(e),s=At(s),o=At(o),r=Ma(r),i=Ma(i);const c=[],u=[],h=[];for(const d of l)c.push(d.sourceLayer),u.push(d.nodeIndex),h.push(d.tensorIndex);new gc({outboundLayer:this,inboundLayers:c,nodeIndices:u,tensorIndices:h,inputTensors:l,outputTensors:e,inputMasks:s,outputMasks:o,inputShapes:r,outputShapes:i},a);for(let d=0;d<e.length;d++)e[d].sourceLayer=this,e[d].nodeIndex=this.inboundNodes.length-1,e[d].tensorIndex=d}getConfig(){const t={name:this.name,trainable:this.trainable};return this.batchInputShape!=null&&(t.batchInputShape=this.batchInputShape),this.dtype!=null&&(t.dtype=this.dtype),t}disposeWeights(){return this.weights.forEach(t=>t.dispose()),this.weights.length}assertNotDisposed(){if(this._refCount===0)throw new Error(`Layer '${this.name}' is already disposed.`)}dispose(){if(!this.built)throw new Error(`Cannot dispose Layer ${this.name} because it has not been built yet.`);if(this._refCount===null)throw new Error(`Cannot dispose Layer ${this.name} because it has not been used yet.`);this.assertNotDisposed();let t=0;return--this._refCount===0&&(t=this.disposeWeights()),{refCountAfterDispose:this._refCount,numDisposedVariables:t}}}function sR(n){n=At(n);const t=[];for(const e of n)t.push(e.shape);return Oe(t)}function oR(n){return"float32"}function mb(n,t,e){if((t==null||e!=null&&e>0)&&(t=n.sourceLayer,e=n.nodeIndex),t.inboundNodes.length===0)return[n];{const s=t.inboundNodes[e];if(s.inboundLayers.length===0)return s.inputTensors;{const o=[];for(let r=0;r<s.inboundLayers.length;r++){const i=s.inputTensors[r],a=s.inboundLayers[r],l=s.nodeIndices[r],c=mb(i,a,l);for(const u of c)o.indexOf(u)===-1&&o.push(u)}return o}}}function rR(n){let t=!0;for(const e of At(n))if(!(e instanceof Vn)){t=!1;break}return t}function iR(n){let t=!0;for(const e of At(n))if(e instanceof Vn){t=!1;break}return t}class Bi extends $t{constructor(t){if(super({dtype:t.dtype,name:t.name!=null?t.name:fc("input").toString()}),t.batchSize==null&&(t.batchSize=null),t.sparse==null&&(t.sparse=!1),this.trainable=!1,this.built=!0,this.sparse=t.sparse,t.inputShape!=null&&t.batchInputShape!=null)throw new D("Only provide the inputShape OR batchInputShape argument to inputLayer, not both at the same time.");let e=t.batchInputShape;if(e==null){if(t.inputShape==null)throw new D("An InputLayer should be passed either a `batchInputShape` or an `inputShape`.");e=[t.batchSize].concat(t.inputShape)}else if(t.batchSize!=null)throw new D("Cannot specify batchSize if batchInputShape is specified when creating an InputLayer.");const s=t.dtype||"float32";this.batchInputShape=e,this.dtype=s,this.inputSpec=[{shape:e}];const o=new Vn(this.dtype,this.batchInputShape,this,[],{},this.name);o.nodeIndex=0,o.tensorIndex=0,new gc({outboundLayer:this,inboundLayers:[],nodeIndices:[],tensorIndices:[],inputTensors:[o],outputTensors:[o],inputMasks:[null],outputMasks:[null],inputShapes:[e],outputShapes:[e]})}apply(t,e){throw new D(`Cannot pass any input to an InputLayer's apply() method. InputLayer name: ${this.name}`)}dispose(){return{refCountAfterDispose:this._refCount,numDisposedVariables:0}}getConfig(){return{batchInputShape:this.batchInputShape,dtype:this.dtype,sparse:this.sparse,name:this.name}}}Bi.className="InputLayer";X(Bi);function aR(n){if(n.batchShape==null&&n.shape==null)throw new Error("Please provide to Input either a `shape` or a `batchShape` argument. Note that `shape` does not include the batch dimension.");if(n.batchShape!=null&&n.shape!=null)throw new D("Please provide either a `shape` or `batchShape` argument to Input, but not both.");let t=n.batchShape;n.shape!=null&&t==null&&(t=[null].concat(n.shape));let e=n.dtype;return e==null&&(e="float32"),new Bi({batchInputShape:t,name:n.name,dtype:e,sparse:n.sparse}).inboundNodes[0].outputTensors[0]}function lR(n,t){if(n.dtype==null||n.dtype===t.dtype)return t;try{return st(t,n.dtype)}catch{throw new D(`The dtype of the feed (${t.dtype}) can not be cast to the dtype of the key '${n.name}' (${n.dtype}).`)}}class cs{constructor(t){if(this.id2Value={},this.id2Mask={},this.name2Id={},t instanceof cs)for(const e in t.id2Value)this.id2Value[e]=t.id2Value[e],e in t.id2Mask&&(this.id2Mask[e]=t.id2Mask[e]);else{if(t==null)return;for(const e of t)this.add(e.key,e.value)}}add(t,e,s){if(this.id2Value[t.id]==null)this.id2Value[t.id]=lR(t,e),this.name2Id[t.name]=t.id,s!=null&&(this.id2Mask[t.id]=s);else throw new D(`Duplicate key: name=${t.name}, id=${t.id}`);return this}addFeed(t){this.add(t.key,t.value)}hasKey(t){return this.id2Value[t.id]!=null}names(){return Object.keys(this.name2Id)}getValue(t){if(t instanceof Vn){if(this.id2Value[t.id]==null)throw new D(`Nonexistent key: ${t.name}`);return this.id2Value[t.id]}else{const e=this.name2Id[t];if(e==null)throw new D(`Feed dict has no SymbolicTensor name: ${t}`);return this.id2Value[e]}}getMask(t){if(t instanceof Vn){if(this.id2Value[t.id]==null)throw new D(`Nonexistent key: ${t.name}`);return this.id2Mask[t.id]}else{const e=this.name2Id[t];if(e==null)throw new D(`Feed dict has no SymbolicTensor name: ${t}`);return this.id2Mask[e]}}disposeMasks(){this.id2Mask!=null&&yt(this.id2Mask)}}const Pa=new Jx,za=new Jx;function cR(n){Pa?.setMaxEntries(n),za?.setMaxEntries(n)}function pr(n,t,e,s){const o=e==null?!1:e.training,r=Array.isArray(n),i=r?n:[n],a=i.map(f=>f.name),l=[],c=t.names();for(const f of a)c.indexOf(f)!==-1?l.push(t.getValue(f)):l.push(null);const u=a.join(",")+"|"+t.names().sort().join(",");let h=Pa.get(u),d;if(h==null){const f=uR(i,t);h=f.sorted,d=f.recipientCounts,Pa.put(u,h),za.put(u,d)}d={},o||Object.assign(d,za.get(u));const p=new cs(t);for(let f=0;f<h.length;++f){const m=h[f],g=m.sourceLayer;if(g instanceof Bi)continue;const x=[],b=[],w=[];let y=!1;for(const k of m.inputs){const S=p.getValue(k),$=p.getMask(k);x.push(S),b.push($),$!=null&&(y=!0),o||(d[k.name]--,d[k.name]===0&&!t.hasKey(k)&&a.indexOf(k.name)===-1&&!S.isDisposed&&k.sourceLayer.stateful!==!0&&w.push(S))}y&&(e=e||{},e.mask=b[0]);const C=At(g.apply(x,e));let I=null;g.supportsMasking&&(I=g.computeMask(x,b));const N=dR(m),T=Array.isArray(N)?N:[N];for(let k=0;k<T.length;++k){p.hasKey(T[k])||p.add(T[k],C[k],Array.isArray(I)?I[0]:I);const S=a.indexOf(T[k].name);S!==-1&&(l[S]=C[k])}o||yt(w)}return p.disposeMasks(),r?l:l[0]}function uR(n,t){v(n!=null&&n.length>0,()=>"Expected at least one fetch, got none");let e=[],s={};if(n.length===1){const o=Af(n[0],t);e=o.sorted,s=o.recipientMap}else{const o=new Set;for(const r of n){const{sorted:i,recipientMap:a}=Af(r,t);for(const l of i)o.has(l.name)||(e.push(l),o.add(l.name));for(const l in a)s[l]==null&&(s[l]=new Set),a[l].forEach(c=>s[l].add(c))}}return{sorted:e,recipientCounts:hR(s)}}function hR(n){const t={};for(const e in n)t[e]=n[e].size;return t}function Af(n,t){const e=new Set,s=[],o={};for(const a of t.names())e.add(a);const r=[],i=[];for(r.push(n);r.length>0;){const a=r[r.length-1];if(e.has(a.name)){r.pop();continue}const l=i[i.length-1]===r.length-1;if(a.inputs.length===0||l)r.pop(),s.push(a),e.add(a.name),l&&i.pop();else{i.push(r.length-1);for(const c of a.inputs)o[c.name]==null&&(o[c.name]=new Set),o[c.name].add(a.name),!e.has(c.name)&&r.push(c)}}return{sorted:s,recipientMap:o}}function dR(n){let t;if(n.sourceLayer.inboundNodes.length===1)t=n.sourceLayer.output;else{let e=null;for(let s=0;s<n.sourceLayer.inboundNodes.length;++s)for(const o of n.sourceLayer.inboundNodes[s].outputTensors)if(o.id===n.id){e=s;break}t=n.sourceLayer.getOutputAt(e)}return t}const pR=W();pR.registerFlag("TOPOLOGICAL_SORT_CACHE_MAX_ENTRIES",()=>100,cR);function tp(n,t){return B(()=>Ie(ct(F(n,n),t,!0)))}class Vi extends Ko{getConfig(){return{}}}class gb extends Vi{constructor(t){super(),this.defaultMaxValue=2,this.defaultAxis=0,this.maxValue=t.maxValue!=null?t.maxValue:this.defaultMaxValue,this.axis=t.axis!=null?t.axis:this.defaultAxis}apply(t){return B(()=>{const e=tp(t,this.axis),s=Ye(e,0,this.maxValue);return F(t,ut(s,J(oe(),e)))})}getConfig(){return{maxValue:this.maxValue,axis:this.axis}}}gb.className="MaxNorm";X(gb);class xb extends Vi{constructor(t){super(),this.defaultAxis=0,this.axis=t.axis!=null?t.axis:this.defaultAxis}apply(t){return B(()=>ut(t,J(oe(),tp(t,this.axis))))}getConfig(){return{axis:this.axis}}}xb.className="UnitNorm";X(xb);class bb extends Vi{apply(t){return lo(t)}}bb.className="NonNeg";X(bb);class yb extends Vi{constructor(t){super(),this.defaultMinValue=0,this.defaultMaxValue=1,this.defaultRate=1,this.defaultAxis=0,this.minValue=t.minValue!=null?t.minValue:this.defaultMinValue,this.maxValue=t.maxValue!=null?t.maxValue:this.defaultMaxValue,this.rate=t.rate!=null?t.rate:this.defaultRate,this.axis=t.axis!=null?t.axis:this.defaultAxis}apply(t){return B(()=>{const e=tp(t,this.axis),s=J(F(this.rate,Ye(e,this.minValue,this.maxValue)),F(1-this.rate,e));return F(t,ut(s,J(oe(),e)))})}getConfig(){return{minValue:this.minValue,maxValue:this.maxValue,rate:this.rate,axis:this.axis}}}yb.className="MinMaxNorm";X(yb);const Df={maxNorm:"MaxNorm",minMaxNorm:"MinMaxNorm",nonNeg:"NonNeg",unitNorm:"UnitNorm"};function ie(n){return Ud(n)}function Ff(n,t={}){return Mi(n,nn.getMap().classNameMap,t,"constraint")}function ae(n){if(n==null)return null;if(typeof n=="string"){const e={className:n in Df?Df[n]:n,config:{}};return Ff(e)}else return n instanceof Vi?n:Ff(n)}async function _s(n){if(n==null)return;const t=[],e=[],s=[];for(const o in n){const r=n[o];if(typeof r!="number"){const i=r;t.push(i.data()),e.push(o),s.push(i)}}if(t.length>0){const o=await Promise.all(t);for(let r=0;r<o.length;++r)n[e[r]]=o[r][0];yt(s)}}function wb(n){if(n!=null)for(const t in n){const e=n[t];typeof e!="number"&&e.dispose()}}var _f;(function(n){n[n.SILENT=0]="SILENT",n[n.VERBOSE=1]="VERBOSE"})(_f||(_f={}));const fR=125;class vr{constructor(){this.validationData=null}setParams(t){this.params=t}async onEpochBegin(t,e){}async onEpochEnd(t,e){}async onBatchBegin(t,e){}async onBatchEnd(t,e){}async onTrainBegin(t){}async onTrainEnd(t){}setModel(t){}}class mR{constructor(t,e=10){t==null&&(t=[]),this.callbacks=t,this.queueLength=e}append(t){this.callbacks.push(t)}setParams(t){for(const e of this.callbacks)e.setParams(t)}setModel(t){for(const e of this.callbacks)e.setModel(t)}async onEpochBegin(t,e){e==null&&(e={});for(const s of this.callbacks)await s.onEpochBegin(t,e)}async onEpochEnd(t,e){e==null&&(e={});for(const s of this.callbacks)await s.onEpochEnd(t,e)}async onBatchBegin(t,e){e==null&&(e={});for(const s of this.callbacks)await s.onBatchBegin(t,e)}async onBatchEnd(t,e){e==null&&(e={});for(const s of this.callbacks)await s.onBatchEnd(t,e)}async onTrainBegin(t){t==null&&(t={});for(const e of this.callbacks)await e.onTrainBegin(t)}async onTrainEnd(t){t==null&&(t={});for(const e of this.callbacks)await e.onTrainEnd(t)}}class gR extends vr{constructor(){super()}async onEpochBegin(t){this.seen=0,this.totals={}}async onBatchEnd(t,e){e==null&&(e={});const s=e.size==null?0:e.size;this.seen+=s;for(const o in e){const r=e[o];if(typeof r=="number")this.totals.hasOwnProperty(o)||(this.totals[o]=0),this.totals[o]=this.totals[o]+r*s;else{let i;o in this.totals?i=this.totals[o]:this.totals[o]=0;const a=B(()=>J(this.totals[o],F(r,s)));this.totals[o]=a,i?.dispose()}}}async onEpochEnd(t,e){if(e!=null)for(const s of this.params.metrics)this.totals[s]!=null&&(typeof this.totals[s]=="number"?e[s]=this.totals[s]/this.seen:B(()=>{const o=F(ut(1,this.seen),this.totals[s]);e[s]=o,this.totals[s].dispose(),Dn(e[s])}))}}class xR extends vr{async onTrainBegin(t){this.epoch=[],this.history={}}async onEpochEnd(t,e){e==null&&(e={}),this.epoch.push(t);for(const s in e)this.history[s]==null&&(this.history[s]=[]),this.history[s].push(e[s])}async syncData(){const t=[],e=[],s=[];for(const r in this.history){const i=this.history[r];for(let a=0;a<i.length;++a)if(typeof i[a]!="number"){const l=i[a];t.push(l.data()),e.push(r),s.push(a)}}const o=await Promise.all(t);for(let r=0;r<o.length;++r)this.history[e[r]][s[r]].dispose(),this.history[e[r]][s[r]]=o[r][0]}}class bR extends vr{constructor(t,e){if(super(),this.currentEpoch=0,this.nowFunc=t.nowFunc,this.nextFrameFunc=t.nextFrameFunc||kx,this.yieldEvery=e||"auto",this.yieldEvery==="auto"&&(this.yieldEvery=fR),this.yieldEvery==="never"&&t.onYield!=null)throw new Error("yieldEvery is `never` but you provided an `onYield` callback. Either change `yieldEvery` or remove the callback");ru(this.yieldEvery)&&(this.maybeWait=AE(this.maybeWait.bind(this),this.yieldEvery,this.nowFunc)),this.trainBegin=t.onTrainBegin,this.trainEnd=t.onTrainEnd,this.epochBegin=t.onEpochBegin,this.epochEnd=t.onEpochEnd,this.batchBegin=t.onBatchBegin,this.batchEnd=t.onBatchEnd,this.yield=t.onYield}async maybeWait(t,e,s){const o=[];this.yield!=null&&(await _s(s),o.push(this.yield(t,e,s))),o.push(this.nextFrameFunc()),await Promise.all(o)}async onEpochBegin(t,e){this.currentEpoch=t,this.epochBegin!=null&&(await _s(e),await this.epochBegin(t,e))}async onEpochEnd(t,e){const s=[];this.epochEnd!=null&&(await _s(e),s.push(this.epochEnd(t,e))),this.yieldEvery==="epoch"&&s.push(this.nextFrameFunc()),await Promise.all(s)}async onBatchBegin(t,e){this.batchBegin!=null&&(await _s(e),await this.batchBegin(t,e))}async onBatchEnd(t,e){const s=[];this.batchEnd!=null&&(await _s(e),s.push(this.batchEnd(t,e))),this.yieldEvery==="batch"?s.push(this.nextFrameFunc()):ru(this.yieldEvery)&&s.push(this.maybeWait(this.currentEpoch,t,e)),await Promise.all(s)}async onTrainBegin(t){this.trainBegin!=null&&(await _s(t),await this.trainBegin(t))}async onTrainEnd(t){this.trainEnd!=null&&(await _s(t),await this.trainEnd(t))}}function Cb(n,t){return n==null&&(n={}),n instanceof vr?[n]:Array.isArray(n)&&n[0]instanceof vr?n:At(n).map(s=>new bR(s,t))}class en{constructor(){}static registerCallbackConstructor(t,e){v(t>=0&&Number.isInteger(t),()=>`Verbosity level is expected to be an integer >= 0, but got ${t}`),en.checkForDuplicate(e),en.constructors[t]==null&&(en.constructors[t]=[]),en.constructors[t].push(e)}static checkForDuplicate(t){for(const e in en.constructors)en.constructors[+e].forEach(o=>{if(o===t)throw new D("Duplicate callback constructor.")})}static clear(){en.constructors={}}static createCallbacks(t){const e=[];for(const s in en.constructors){const o=+s;t>=o&&e.push(...en.constructors[o])}return e.map(s=>new s)}}en.constructors={};function $b(n,t,e,s,o,r,i,a,l){const c=new xR,u=[new gR,...en.createCallbacks(t)];n!=null&&u.push(...n),u.push(c);const h=new mR(u);return h.setParams({epochs:e,initialEpoch:s,samples:o,steps:r,batchSize:i,verbose:t,doValidation:a,metrics:l}),{callbackList:h,history:c}}function Mn(n,t={},e=!1){return Mi(n,nn.getMap().classNameMap,t,"layer",e)}function Ba(n,t){return B(()=>{n.dtype!=="float32"&&(n=st(n,"float32"));const e=ct(Pi(n),t,!0),s=ic(e.shape,oe()),o=Ie(Ss(e,s));return ut(n,o)})}function xc(n,t){return B(()=>ne(Pi(pt(t,n)),-1))}function ep(n,t){return B(()=>ne(Ne(pt(t,n)),-1))}function np(n,t){return B(()=>{const e=pt(n,t),s=Ye(Ne(n),oe(),Number.MAX_VALUE),o=Ne(ut(e,s));return F(100,ne(o,-1))})}function yR(n,t){return B(()=>{const e=Ye(t,oe(),Number.MAX_VALUE),s=zn(J(1,e)),o=Ye(n,oe(),Number.MAX_VALUE),r=zn(J(1,o));return ne(Pi(pt(s,r)),-1)})}function wR(n,t){return B(()=>{const e=Ss(0,pt(1,F(n,t)));return ne(Pi(e),-1)})}function CR(n,t){return B(()=>{const e=Ss(0,pt(1,F(n,t)));return ne(e,-1)})}function $R(n,t){return B(()=>{const e=ct(F(n,t),-1),s=yn(F(pt(1,n),t),-1);return Ss(0,J(1,pt(s,e)))})}function IR(n,t){return B(()=>{const e=Math.log(2),s=pt(t,n),o=pt(J(s,Ei(F(-2,s))),e);return ne(o,-1)})}function kr(n,t,e=!1){return B(()=>{if(e)t=rd(t);else{const s=ct(t,t.shape.length-1,!0);t=ut(t,s)}return t=Ye(t,oe(),1-oe()),Zt(ct(F(st(n,"float32"),zn(t)),t.shape.length-1))})}function Va(n,t,e=!1){return B(()=>{const s=st(cc(UE(n)),"int32");t=Ye(t,oe(),1-oe());const o=t.shape,r=L(jg(s,o[o.length-1]),o);return kr(r,t,e)})}function vR(n,t){if(!Et(n.shape,t.shape))throw new D(`logits and labels must have the same shape, but got shapes ${JSON.stringify(n.shape)} and ${JSON.stringify(t.shape)}`);return B(()=>{const e=lo(t),s=Zt(Ne(t));return J(pt(e,F(t,n)),Wg(Pn(s)))})}function bc(n,t){return B(()=>{let e;return e=Ye(t,oe(),1-oe()),e=zn(ut(e,pt(1,e))),ne(vR(n,e),-1)})}function kR(n,t){return B(()=>{const e=Ye(n,oe(),1),s=Ye(t,oe(),1);return ct(F(n,zn(ut(e,s))),-1)})}function SR(n,t){return B(()=>{const e=zn(J(oe(),t));return ne(pt(t,F(n,e)),-1)})}function Ib(n,t){return B(()=>{const e=Ba(n,-1),s=Ba(t,-1),o=F(e,s);return Zt(ct(o,-1))})}const Wa={meanSquaredError:xc,meanAbsoluteError:ep,meanAbsolutePercentageError:np,meanSquaredLogarithmicError:yR,squaredHinge:wR,hinge:CR,categoricalHinge:$R,logcosh:IR,categoricalCrossentropy:kr,sparseCategoricalCrossentropy:Va,binaryCrossentropy:bc,kullbackLeiblerDivergence:kR,poisson:SR,cosineProximity:Ib};function Hc(n){if(typeof n=="string"){if(n in Wa)return Wa[n];let t=`Unknown loss ${n}`;throw n.toLowerCase().includes("softmaxcrossentropy")&&(t=`Unknown loss ${n}. Use "categoricalCrossentropy" as the string name for tf.losses.softmaxCrossEntropy`),new D(t)}else return n}function vb(n,t){return B(()=>{const e=F(.5,ln(t)),s=_n(Ze(t,e),n.dtype);return ne(Ln(n,s),-1)})}function kb(n,t){return B(()=>_n(Ln(yr(n,-1),yr(t,-1)),"float32"))}function NR(n,t){return B(()=>st(ct(Xn(Ln(n,1),Ln(t,1))),"float32"))}function TR(n,t){return B(()=>st(ct(Xn(Ln(n,0),Ln(t,1))),"float32"))}function ER(n,t){return B(()=>{const e=NR(n,t),s=TR(n,t),o=J(e,s);return st(Re(Ze(o,0),ut(e,o),0),"float32")})}function RR(n,t){return bc(n,t)}function AR(n,t){return n.rank===t.rank&&(n=Ai(n,[n.rank-1])),t=yr(t,-1),t.dtype!==n.dtype&&(t=st(t,n.dtype)),st(Ln(n,t),"float32")}const DR=xc,FR=xc,_R=ep,OR=ep,MR=np,LR=np,Sb=kr,PR=Ib,Nb=Va,Ua={binaryAccuracy:vb,categoricalAccuracy:kb,precision:ER,categoricalCrossentropy:Sb,sparseCategoricalCrossentropy:Nb,mse:DR,MSE:FR,mae:_R,MAE:OR,mape:MR,MAPE:LR,cosine:PR};function zR(n){if(typeof n=="string"&&n in Ua)return Ua[n];if(typeof n!="string"&&n!=null)return n;throw new D(`Unknown metric ${n}`)}function sa(n){if(Tn(n!==null,`Unknown LossOrMetricFn ${n}`),typeof n=="string")return n;{let t;for(const e of Object.keys(Wa))if(Wa[e]===n){t=e;break}if(t!==void 0)return t;for(const e of Object.keys(Ua))if(Ua[e]===n){t=e;break}return t!==void 0?t:n.name}}function BR(n){const t={Adagrad:()=>xo.adagrad(.01),Adadelta:()=>xo.adadelta(1,.95,oe()),Adam:()=>xo.adam(.001,.9,.999,oe()),Adamax:()=>xo.adamax(.002,.9,.999,oe(),0),RMSProp:()=>xo.rmsprop(.001,.9,0,oe()),SGD:()=>xo.sgd(.01)};if(t.adagrad=t.Adagrad,t.adadelta=t.Adadelta,t.adam=t.Adam,t.adamax=t.Adamax,t.rmsprop=t.RMSProp,t.sgd=t.SGD,n in t)return t[n]();throw new D(`Unknown Optimizer ${n}`)}const Of=1*1024*1024;function Mf(n,t,e=!1){if(n==null||typeof n!="object"||Object.getPrototypeOf(n)!==Object.prototype||!Ru(n))throw new Error("User-defined metadata is expected to be a JSON object, but is not.");if(e){const s=JSON.stringify(n);s.length>Of&&console.warn(`User-defined metadata of model "${t}" is too large in size (length=${s.length} when serialized). It is not recommended to store such large objects in user-defined metadata. Please make sure its serialized length is <= ${Of}.`)}}function Ru(n){if(n===null)return!0;if(typeof n=="object")if(Object.getPrototypeOf(n)===Object.prototype){const t=Object.keys(n);for(const e of t)if(typeof e!="string"||!Ru(n[e]))return!1;return!0}else if(Array.isArray(n)){for(const t of n)if(!Ru(t))return!1;return!0}else return!1;else{const t=typeof n;return t==="string"||t==="number"||t==="boolean"}}function VR(n,t,e,s=console.log){const o=UR(n),r=["Layer (type)","Input Shape","Output shape","Param #"];o?(t=t||90,e=e||[.32,.61,.89,1]):(t=t||115,e=e||[.24,.48,.7,.8,1]),e[e.length-1]<=1&&(e=e.map(u=>Math.floor(t*u)));let i;if(!o){r.push("Receives inputs"),i=[];for(const u in n.nodesByDepth)i.push(...n.nodesByDepth[u])}s("_".repeat(t)),Ga(r,e,s),s("=".repeat(t));const a=n.layers;for(let u=0;u<a.length;++u)o?GR(a[u],e,s):HR(a[u],e,i,s),s((u===a.length-1?"=":"_").repeat(t));n.checkTrainableWeightsConsistency();const l=WR(n),c=La(n.nonTrainableWeights);s(`Total params: ${l+c}`),s(`Trainable params: ${l}`),s(`Non-trainable params: ${c}`),s("_".repeat(t))}function WR(n){let t;return n.collectedTrainableWeights!=null?t=La(n.collectedTrainableWeights):t=La(n.trainableWeights),t}function UR(n){let t=!0;const e=[],s=[];for(const o in n.nodesByDepth)e.push(n.nodesByDepth[o]);for(const o of e){if(o.length>1||o.length===1&&o[0].inboundLayers.length>1){t=!1;break}s.push(...o)}if(t)for(const o of n.layers){let r=!1;for(const i of o.inboundNodes)if(s.indexOf(i)!==-1)if(r){t=!1;break}else r=!0;if(!t)break}return t}function Ga(n,t,e=console.log){let s="";for(let o=0;o<n.length;++o)o>0&&(s=s.slice(0,s.length-1)+" "),s+=n[o],s=s.slice(0,t[o]),s+=" ".repeat(t[o]-s.length);e(s)}function GR(n,t,e){let s,o;try{o=n.inboundNodes.map(l=>JSON.stringify(l.inputShapes)).join(",")}catch{o="multiple"}try{s=JSON.stringify(n.outputShape)}catch{s="multiple"}const r=n.name,i=n.getClassName(),a=[`${r} (${i})`,o,s,n.countParams().toString()];Ga(a,t,e)}function HR(n,t,e,s){let o,r;try{r=n.inboundNodes.map(h=>JSON.stringify(h.inputShapes)).join(",")}catch{r="multiple"}try{o=JSON.stringify(n.outputShape)}catch{o="multiple"}const i=[];for(const h of n.inboundNodes)if(!(e!=null&&e.length>0&&e.indexOf(h)===-1))for(let d=0;d<h.inboundLayers.length;++d){const p=h.inboundLayers[d].name,f=h.nodeIndices[d],m=h.tensorIndices[d];i.push(`${p}[${f}][${m}]`)}const a=n.name,l=n.getClassName(),c=i.length===0?"":i[0],u=[`${a} (${l})`,r,o,n.countParams().toString(),c];Ga(u,t,s);for(let h=1;h<i.length;++h)Ga(["","","","",i[h]],t,s)}function Tb(n,t,e){return(n==="inboundNodes"||n==="outputLayers"||n==="inputLayers")&&t===0&&typeof e=="string"}function Ha(n,t){if(n===null)return null;if(typeof n=="string")return Ps(n);if(typeof n=="number"||typeof n=="boolean")return n;if(n instanceof Array){const e=[],s=n.length;for(let o=0;o<s;++o){const r=n[o];Tb(t,o,r)?e.push(r):e.push(Ha(r,t))}return e}else{const e={};for(const s of Object.keys(n)){const o=n[s];if(s==="name"&&typeof o=="string")e[s]=o;else{const r=Ps(s);e[r]=Ha(o,r)}}return e}}function Au(n,t){if(n==null)return null;if(typeof n=="string")return jn(n);if(typeof n=="number"||typeof n=="boolean")return n;if(n instanceof Array){const e=[],s=n.length;for(let o=0;o<s;++o){const r=n[o];Tb(t,o,r)?e.push(r):e.push(Au(r,t))}return e}else{const e={};for(const s of Object.keys(n)){const o=n[s],r=jn(s);(s==="name"||s==="className")&&typeof o=="string"?e[r]=o:e[r]=Au(o,s)}return e}}const Eb="4.22.0";const jR=n=>{const t=Object.keys(n);if(t.length===0)return!1;const e=t[0].split("/");return!isNaN(parseInt(e[e.length-1],10))};class fn extends $t{constructor(t){if(super({}),this.containerNodes=new Set,this.name=t.name,this.name==null){const b=this.getClassName().toLowerCase();this.name=fc(b)}if(this.supportsMasking=!1,this.trainable_=!0,Array.isArray(t.inputs)?this.inputs=t.inputs.slice():this.inputs=[t.inputs],Array.isArray(t.outputs)?this.outputs=t.outputs.slice():this.outputs=[t.outputs],ps(this.inputs).length!==this.inputs.length)throw new D(`The list of inputs passed to the model is redundant. All inputs should only appear once. Found: ${this.inputs.map(b=>b.name)}`);ps(this.outputs).length!==this.outputs.length&&console.warn(`The list of outputs passed to the model is redundant. All outputs should only appear once. Found: ${this.outputs.map(b=>b.name)}`),this.inputLayers=[],this.inputLayersNodeIndices=[],this.inputLayersTensorIndices=[],this.outputLayers=[],this.outputLayersNodeIndices=[],this.outputLayersTensorIndices=[],this.layers=[],this.internalContainerRefs=[];for(const b of this.outputs){const w=b.sourceLayer,y=b.nodeIndex,C=b.tensorIndex;this.outputLayers.push(w),this.outputLayersNodeIndices.push(y),this.outputLayersTensorIndices.push(C)}for(const b of this.inputs){const w=b.sourceLayer,y=b.nodeIndex,C=b.tensorIndex;Tn(y===0,"input layer has >1 nodes"),Tn(C===0,"input layer has >1 tensors"),this.inputLayers.push(w),this.inputLayersNodeIndices.push(y),this.inputLayersTensorIndices.push(C)}this.inputNames=[],this.outputNames=[],this.feedInputShapes=[],this.feedInputNames=[],this.feedOutputNames=[];for(let b=0;b<this.inputLayers.length;b++){const w=this.inputLayers[b];if(!(w instanceof Bi))throw new TypeError(`Input layers to a LayersModel must be InputLayer objects. Received inputs: ${t.inputs}. Input ${b} (0-based) originates from layer type ${w.getClassName()}.`);this.inputNames.push(w.name),this.feedInputShapes.push(w.batchInputShape),this.feedInputNames.push(w.name)}for(const b of this.outputLayers)this.outputNames.push(b.name);this.internalInputShapes=this.inputs.map(b=>b.shape),this.internalOutputShapes=this.outputs.map(b=>b.shape);const e={},s={},o={},r={},i={},a=[],l=(b,w,y,C,I,N)=>{(C==null||I==null||N==null)&&(C=b.sourceLayer,I=b.nodeIndex,N=b.tensorIndex);const T=C.inboundNodes[I];if(y.indexOf(T)!==-1)throw new on(`The tensor ${b.name} at layer "${C.name}" is part of a cycle.`);if(w.indexOf(T)!==-1)return;this.containerNodes.add(fn.nodeKey(C,I)),C.id in i||(i[C.id]=Object.keys(i).length),y.indexOf(T)===-1&&y.push(T);const k=T.inboundLayers.length;for(let S=0;S<k;S++){const $=T.inputTensors[S],R=T.inboundLayers[S],A=T.nodeIndices[S],O=T.tensorIndices[S];l($,w,y,R,A,O)}for(w.push(T);y.indexOf(T)>=0;)y.splice(y.indexOf(T),1);a.push(T)},c=[],u=[];for(const b of this.outputs)l(b,c,u);const h=a.slice().reverse();for(const b of h){s[b.id]=b,b.id in e||(e[b.id]=0);let w=e[b.id];const y=o[b.outboundLayer.id]==null?0:o[b.outboundLayer.id];w=Math.max(w,y),o[b.outboundLayer.id]=w,r[b.outboundLayer.id]=b.outboundLayer,e[b.id]=w;for(let C=0;C<b.inboundLayers.length;C++){const I=b.inboundLayers[C],N=b.nodeIndices[C],T=I.inboundNodes[N],k=e[T.id]==null?0:e[T.id];e[T.id]=Math.max(w+1,k),s[T.id]=T}}const d={};for(const b in e){const w=e[b];w in d||(d[w]=[]),d[w].push(s[b])}const p={};for(const b in o){const w=o[b];w in p||(p[w]=[]),p[w].push(r[b])}let f=Object.keys(p).map(b=>parseInt(b,10)).sort(ta);this.layers=[];for(const b of f){const w=p[b];w.sort((y,C)=>{const I=i[y.id],N=i[C.id];return I<N?-1:I>N?1:0});for(const y of w)y instanceof fn&&this.internalContainerRefs.push(y),this.layers.push(y)}this.layersByDepth=p,f=Object.keys(d).map(b=>parseInt(b,10)).sort(ta);const m=this.inputs.slice(),g=[];for(const b of f)for(const w of d[b]){const y=w.outboundLayer;if(y!=null){for(const C of w.inputTensors)if(m.indexOf(C)===-1)throw new on(`Graph disconnected: cannot obtain value for tensor ${C} at layer "${y.name}". The following previous layers were accessed without issue: ${g}`);for(const C of w.outputTensors)m.push(C);g.push(y.name)}}this.nodesByDepth=d;const x=this.layers.map(b=>b.name);for(const b of x){const w=x.filter(y=>y===b).length;if(w!==1)throw new on(`The name "${b}" is used ${w} times in the model. All layer names should be unique. Layer names: `+JSON.stringify(x))}this.outboundNodes=[],this.inboundNodes=[],new gc({outboundLayer:this,inboundLayers:[],nodeIndices:[],tensorIndices:[],inputTensors:this.inputs,outputTensors:this.outputs,inputMasks:this.inputs.map(b=>null),outputMasks:this.outputs.map(b=>null),inputShapes:this.inputs.map(b=>b.shape),outputShapes:this.outputs.map(b=>b.shape)}),this.built=!0,this._refCount=1}assertNotDisposed(){if(this._refCount===0)throw new Error(`Container '${this.name}' is already disposed.`)}dispose(){this.assertNotDisposed();const t={refCountAfterDispose:null,numDisposedVariables:0};if(--this._refCount===0){for(const e of this.layers)t.numDisposedVariables+=e.dispose().numDisposedVariables;for(const e of this.internalContainerRefs)t.numDisposedVariables+=e.dispose().numDisposedVariables}return t.refCountAfterDispose=this._refCount,t}get trainable(){return this.trainable_}set trainable(t){this.layers.forEach(e=>{e._trainableWeights.forEach(s=>s.trainable=t)}),this.trainable_=t}get trainableWeights(){if(this._trainableWeights.length>0)throw new D("Container instance unexpectedly contains _trainableWeights.The trainable weights of a Container are a union of the trainable weights of its consituent Layers. Its own _trainableWeights must remain an empty Array.");if(!this.trainable)return[];let t=[];for(const e of this.layers)t=t.concat(e.trainableWeights);return t}get nonTrainableWeights(){const t=[];for(const e of this.layers)t.push(...e.nonTrainableWeights);if(!this.trainable){const e=[];for(const s of this.layers)e.push(...s.trainableWeights);return e.concat(t)}return t}get weights(){return this.trainableWeights.concat(this.nonTrainableWeights)}loadWeights(t,e=!0){const s={};let o=0;const r=jR(t);r&&this.parseWeights(t);for(const a of this.layers)for(const[l,c]of a.weights.entries()){const u=r?`${c.name.split("/").slice(0,-1).join("/")+"/"}${l}`:c.originalName;if(s[u]!=null)throw new D(`Duplicate weight name: ${u}`);s[u]=c,o++}const i=[];for(const a in t){let l=a;if(s[a]==null){const c=a.split("/");l=c.slice(0,-2).concat([c[c.length-1]]).join("/")}if(s[l]!=null)i.push([s[l],t[a]]);else if(e)throw new D(`Provided weight data has no target variable: ${a}`);delete s[l]}if(e){const a=[];for(const l in s)a.push(l);if(a.length>0)throw new D(`${a.length} of ${o} weights are not set: ${a}`)}Qd(i)}parseWeights(t){for(const e in Object.keys(t)){const s=e.split("/"),o=["vars","layer_checkpoint_dependencies"],r=s.map(i=>i.startsWith("_")?i.slice(1):i).filter(i=>!o.includes(i)).join("/");r!==e&&(t[r]=t[e],delete t[e])}}updatedConfig(){const t=this.getConfig(),e={};return e.className=this.getClassName(),e.config=t,e.kerasVersion=`tfjs-layers ${Eb}`,e.backend="TensorFlow.js",e}toJSON(t,e=!0){const s=Au(this.updatedConfig());return e?JSON.stringify(s):s}call(t,e){return B(()=>{t=At(t);const s=new cs;for(let o=0;o<this.inputs.length;++o)s.add(this.inputs[o],t[o]);return pr(this.outputs,s,e)})}computeMask(t,e){return B(()=>{t=At(t);let s;return e==null?s=no(null,t.length):s=At(e),this.runInternalGraph(t,s)[1]})}computeOutputShape(t){const e=Ma(t);if(e.length!==this.inputLayers.length)throw new D(`Invalid inputShape argument ${t}: model has ${this.inputLayers.length} tensor inputs.`);const s={};for(let a=0;a<e.length;a++){const l=this.inputLayers[a],c=e[a],u=l.name+"_0_0";s[u]=c}const o=Object.keys(this.nodesByDepth).map(a=>parseInt(a,10)).sort(ta);if(o.length>1)for(const a of o){const l=this.nodesByDepth[a];for(const c of l){const u=c.outboundLayer;if(this.inputLayers.map(m=>m.id).indexOf(u.id)!==-1)continue;const h=[];for(let m=0;m<c.inboundLayers.length;m++){const g=c.inboundLayers[m],x=c.nodeIndices[m],b=c.tensorIndices[m],w=`${g.name}_${x}_${b}`,y=s[w];h.push(y)}const d=u.computeOutputShape(Oe(h)),p=Ma(d),f=u.inboundNodes.indexOf(c);for(let m=0;m<p.length;m++){const g=`${u.name}_${f}_${m}`;s[g]=p[m]}}}const r=[],i=[];for(let a=0;a<this.outputLayers.length;a++){const l=this.outputLayers[a],c=this.outputLayersNodeIndices[a],u=this.outputLayersTensorIndices[a],h=`${l.name}_${c}_${u}`;i.push(h)}for(let a=0;a<i.length;a++){const l=i[a];Tn(l in s),r.push(s[l])}return Oe(r)}runInternalGraph(t,e){e==null&&(e=no(null,t.length));const s={};for(let l=0;l<this.inputs.length;++l){const c=this.inputs[l],u=t[l],h=e[l];s[c.id]=[u,h]}const o=Object.keys(this.nodesByDepth).map(l=>parseInt(l,10)).sort(ta);for(const l of o){const c=this.nodesByDepth[l];for(const u of c){const h=u.outboundLayer,d=u.inputTensors,p=u.outputTensors,f=new Array;for(const m of d)m.id in s&&f.push(s[m.id]);if(f.length===d.length){let m={},g,x,b,w;if(u.callArgs!=null&&(m=u.callArgs),f.length===1){const[y,C]=f[0];m.mask==null&&(m.mask=C),b=At(h.call(y,m)),w=At(h.computeMask(y,C)),g=[y],x=[C]}else g=f.map(y=>y[0]),x=f.map(y=>y[1]),m.mask==null&&(m.mask=x),b=At(h.call(g,m)),w=At(h.computeMask(g,x));if(h.activityRegularizer)throw new xt("LayersModel invocation with concrete Tensor value(s) in the presence of activity regularizer(s) is not supported yet.");for(let y=0;y<p.length;++y){const C=p[y],I=b[y],N=w[y];s[C.id]=[I,N]}}}}const r=[],i=[],a=[];for(const l of this.outputs){Tn(l.id in s,`Could not compute output ${l.name} : ${l.id}`);const[c,u]=s[l.id];a.push(c.shape),r.push(c),i.push(u)}return[r,i,a]}buildNodeConversionMap(t){const e={};let s;for(const o of this.layers){s=o instanceof fn?1:0;for(let r=0;r<o.inboundNodes.length;r++){const i=fn.nodeKey(o,r);this.containerNodes.has(i)&&(e[i]=s,s+=1)}}return e}getLayer(t,e){if(e!=null)return this.findLayer(e);if(t==null)throw new D("Provide either a layer name or layer index");if(typeof t=="number")return this.findLayer(t);for(const s of this.layers)if(s.name===t)return s;throw new D(`No such layer: ${t}`)}findLayer(t){if(this.layers.length<=t)throw new D(`Was asked to retrieve layer at index ${t}, but model only has ${this.layers.length} layer(s).`);return this.layers[t]}calculateLosses(){return B(()=>{const t=[];for(const e of this.layers)for(let s=0;s<e.inboundNodes.length;++s){const o=fn.nodeKey(e,s);this.containerNodes.has(o)&&t.push(...e.calculateLosses())}return t})}getConfig(){const t={name:this.name},e=this.buildNodeConversionMap(this.layers),s=[];for(const i of this.layers){const a=i.getClassName(),l=i.getConfig(),c=[];for(let h=0;h<i.inboundNodes.length;h++){const d=i.inboundNodes[h],p=fn.nodeKey(i,h);let f={};if(this.containerNodes.has(p)){if(d.callArgs)try{JSON.stringify(d.callArgs),f=d.callArgs}catch{console.warn(`Layer ${i.name} was passed non-serializable keyword arguments: ${d.callArgs}. They will not be included in the serialized model (and thus will be missing at deserialization time).`),f={}}if(d.inboundLayers.length>0){const m=[];for(let g=0;g<d.inboundLayers.length;g++){const x=d.inboundLayers[g],b=d.nodeIndices[g],w=d.tensorIndices[g],y=fn.nodeKey(x,b);let C=e[y];C==null&&(C=0),m.push([x.name,C,w,f])}c.push(m)}}}const u={};u.name=i.name,u.className=a,u.config=l,u.inboundNodes=c,s.push(u)}t.layers=s;const o=[];for(let i=0;i<this.inputLayers.length;i++){const a=this.inputLayers[i],l=this.inputLayersNodeIndices[i],c=fn.nodeKey(a,l);if(!this.containerNodes.has(c))continue;let u=e[c];u==null&&(u=0);const h=this.inputLayersTensorIndices[i];o.push([a.name,u,h])}t.inputLayers=o;const r=[];for(let i=0;i<this.outputLayers.length;i++){const a=this.outputLayers[i],l=this.outputLayersNodeIndices[i],c=fn.nodeKey(a,l);if(!this.containerNodes.has(c))continue;let u=e[c];u==null&&(u=0);const h=this.outputLayersTensorIndices[i];r.push([a.name,u,h])}return t.outputLayers=r,t}static fromConfig(t,e,s={},o=!1){const r={},i={};function a(g,x){g.name in i?i[g.name].push(x):i[g.name]=[x]}function l(g,x){const b=[];let w;for(const y of x){const C=y[0],I=y[1],N=y[2];if(w=y[3]==null?{}:y[3],!(C in r)){a(g,x);return}const T=r[C];if(T.inboundNodes.length<=I){a(g,x);return}const k=T.inboundNodes[I];b.push(k.outputTensors[N])}b.length>0&&g.apply(Oe(b),w)}function c(g){const x=g.name,b=Mn(g,e.customObjects!=null?e.customObjects:{});b.setFastWeightInitDuringBuild(o),r[x]=b,g.inboundNodes.forEach(y=>{if(!(y instanceof Array))throw new D(`Corrupted configuration, expected array for nodeData: ${y}`);a(b,y)})}const u=e.name,h=e.layers;for(const g of h)c(g);for(;!RE(i);)for(const g of h){const x=r[g.name];if(x.name in i){const b=i[x.name];delete i[x.name];for(const w of b)l(x,w)}}const d=[],p=[],f=e.inputLayers;for(const g of f){const x=g[0],b=g[1],w=g[2];Tn(x in r);const C=r[x].inboundNodes[b].outputTensors;d.push(C[w])}const m=e.outputLayers;for(const g of m){const x=g[0],b=g[1],w=g[2];Tn(x in r);const C=r[x].inboundNodes[b].outputTensors;p.push(C[w])}return new t({inputs:d,outputs:p,name:u})}get stateful(){if(this._stateful)throw new D("Container instance unexpectedly has _stateful = true. The statefulness of a Container is determined by the Layers it contains. Its _stateful property must remain the default false.");for(const t of this.layers)if(t.stateful)return!0;return!1}resetStates(){B(()=>{this.layers.forEach(t=>{t.stateful&&t.resetStates()})})}}function qR(n,t,e){const s=t.length;if(n==null||Array.isArray(n)&&n.length===0)return t.map(o=>null);if(s===1)return Array.isArray(n)&&n.length===1?n:typeof n=="object"&&t[0]in n?[n[t[0]]]:[n];if(Array.isArray(n)){if(n.length!==s)throw new Error(`Provided ${e} is an array of ${n.length} element(s), but the model has ${s} outputs. Make sure a set of weights is provided for each model output.`);return n}else if(typeof n=="object"&&Object.keys(n).length>0&&typeof n[Object.keys(n)[0]]=="object"){const o=[];return t.forEach(r=>{r in n?o.push(n[r]):o.push(null)}),o}else throw new Error(`The model has multiple (${s}) outputs, so ${e} must be either an array with ${s} elements or an object with ${t} keys. Provided ${e} not understood: ${JSON.stringify(n)}`)}function Rb(n,t){return qR(n,t,"classWeight")}async function Ab(n,t,e,s){if(e!=null){const o=B(()=>{if(n.shape.length===1)return Ws(n);if(n.shape.length===2){if(n.shape[1]>1)return yr(n,1);if(n.shape[1]===1)return L(n,[n.shape[0]]);throw new Error(`Encountered unexpected last-dimension size (${n.shape[1]}) during handling of class weights. The size is expected to be >= 1.`)}else throw new Error(`Unexpected rank of target (y) tensor (${n.rank}) during handling of class weights. The rank is expected to be 1 or 2.`)}),r=Array.from(await o.data());yt(o);const i=[];return r.forEach(a=>{if(e[a]==null)throw new Error(`classWeight must contain all classes in the training data. The class ${a} exists in the data but not in classWeight`);i.push(e[a])}),We(i,"float32")}else return null}function KR(n,t){return F(n,t)}const XR=32;function Db(n,t){let e,s;const o=t;e=o.xs,s=o.ys,v(e!=null&&s!=null,()=>`A Dataset iterator for fitDataset() is expected to generate objects of the form \`{xs: xVal, ys: yVal}\`, where the two values may be \`tf.Tensor\`, an array of Tensors, or a map of string to Tensor.  The provided Dataset instead generates ${t}`);const r=Lf("input",n.inputNames,e),i=Lf("output",n.outputNames,s),a=r[0].shape[0];v(r.length===n.inputs.length,()=>`LayersModel has ${n.inputs.length} inputs, but the dataset provides ${r.length} inputs.  (Expected input keys: ${JSON.stringify(n.inputNames)})`),v(i.length===n.outputs.length,()=>`LayersModel has ${n.outputs.length} outputs, but the dataset provides ${i.length} outputs.  (Expected output keys: ${JSON.stringify(n.outputNames)})`);for(let l=0;l<r.length;l++)v(r[l].shape[0]===a,()=>`Batch size mismatch: input ${n.inputNames[l]} has ${r[l].shape[0]}; expected  ${a} based on input ${n.inputNames[0]}.`);for(let l=0;l<i.length;l++)v(i[l].shape[0]===a,()=>`Batch size mismatch: output ${n.outputNames[l]} has ${i[l].shape[0]}; expected  ${a} based on input ${n.inputNames[0]}.`);return{xs:r,ys:i}}function Lf(n,t,e){if(e instanceof Xt)return[e];if(Array.isArray(e))return v(e.length===t.length,()=>`Received an array of ${e.length} Tensors, but expected ${t.length} to match the ${n} keys ${t}.`),e;{const s=[];for(const o of t){if(e[o]==null)throw new D(`The feature data generated by the dataset lacks the required ${n} key '${o}'.`);s.push(e[o])}return s}}function YR(n){if(n.length===3)throw new xt("Validation with sample weights is not implemented yet.");return{xs:n[0],ys:n[1]}}async function ZR(n,t,e){const s=e.batchesPerEpoch!=null;if(v(n.optimizer!=null,()=>"You must compile a model before training/testing. Use LayersModel.compile(modelCompileConfig)."),v(e!=null,()=>"For fitDataset(), the 2nd argument (config) is required, but it is not provided in this call."),v(e.epochs!=null&&e.epochs>0&&Number.isInteger(e.epochs),()=>`For fitDataset(), config.epochs is expected to be a positive integer, but got ${e.epochs}`),v(!s||e.batchesPerEpoch>0&&Number.isInteger(e.batchesPerEpoch),()=>`For fitDataset(), config.batchesPerEpoch is expected to be a positive integer if specified, but got ${e.batchesPerEpoch}`),v(e.validationSplit==null,()=>"`validationSplit` is not supported by `fitDataset()`. Use validationData instead."),n.isTraining)throw new Error("Cannot start training because another fit() call is ongoing.");n.isTraining=!0;try{const o=e.validationData!=null;let r,i;if(o)if(Pf(e.validationData))v(e.validationBatches==null||e.validationBatches>0&&Number.isInteger(e.validationBatches),()=>`For fitDataset() with dataset-based validation, config.validationBatches is expected not to be provided, or to be a positive integer, but got ${e.validationBatches}`);else{const g=YR(e.validationData);r=g.xs,i=g.ys}const a=n.makeTrainFunction(),l=n.getDedupedMetricsNames();let c;o?c=l.slice().concat(l.map(g=>"val_"+g)):c=l.slice();const u=Cb(e.callbacks,e.yieldEvery),h=e.verbose==null?1:e.verbose,{callbackList:d,history:p}=$b(u,h,e.epochs,null,null,JR(t,e),null,o,c);d.setModel(n),n.history=p,await d.onTrainBegin(),n.stopTraining_=!1;let f=e.initialEpoch==null?0:e.initialEpoch,m=await t.iterator();for(;f<e.epochs;){const g={};await d.onEpochBegin(f);let x=0,b=0;for(s||(m=await t.iterator());!s||x<e.batchesPerEpoch;){const w=await m.next();if(s&&w.done){console.warn(`You provided \`batchesPerEpoch\` as ${e.batchesPerEpoch}, but your dataset iterator ran out of data after ${x} batches; interrupting training. Make sure that your dataset can generate at least \`batchesPerEpoch * epochs\` batches (in this case, ${e.batchesPerEpoch*e.epochs} batches). You may need to use the repeat() function when building your dataset.`);break}if(w.value!=null){const{xs:y,ys:C}=Db(n,w.value),I={};I.batch=b,I.size=y[0].shape[0],await d.onBatchBegin(b,I);const N=[];if(e.classWeight!=null){const S=Rb(e.classWeight,n.outputNames);for(let $=0;$<S.length;++$)N.push(await Ab(C[$],null,S[$]))}const T=y.concat(C).concat(N),k=a(T);yt(T);for(let S=0;S<l.length;++S){const $=l[S],R=k[S];I[$]=R,Dn(R)}await d.onBatchEnd(b,I),wb(I),b++,x++}if(s?x>=e.batchesPerEpoch:w.done){if(o){let y;Pf(e.validationData)?y=At(await n.evaluateDataset(e.validationData,{batches:e.validationBatches})):y=At(n.evaluate(r,i,{batchSize:e.validationBatchSize==null?XR:e.validationBatchSize,verbose:0}));for(let C=0;C<n.metricsNames.length;++C)g[`val_${n.metricsNames[C]}`]=y[C]}break}if(n.stopTraining_)break}if(await d.onEpochEnd(f,g),f++,n.stopTraining_)break}return await d.onTrainEnd(),await n.history.syncData(),n.history}finally{n.isTraining=!1}}function JR(n,t){let e=null;return t.batchesPerEpoch!=null?e=t.batchesPerEpoch:Number.isFinite(n.size)&&(e=n.size),e}function Pf(n){return typeof n.iterator=="function"}function QR(n){return typeof n.next=="function"}async function tA(n,t,e){e=e||{};const s=e.batches!=null,o=n.testFunction;let r=[];if(e.verbose>0)throw new xt("Verbose mode is not implemented yet.");v(!s||e.batches>0&&Number.isInteger(e.batches),()=>`Test loop expects \`batches\` to be a positive integer, but received ${JSON.stringify(e.batches)}`);const i=QR(t)?t:await t.iterator();let a=0,l=0;for(;!s||l<e.batches;){const c=await i.next();if(r=B(()=>{if(c.value){const{xs:u,ys:h}=Db(n,c.value),d=u.concat(h),p=B(()=>o(d));if(yt(d),l===0)for(let m=0;m<p.length;++m)r.push(Tt(0));const f=d[0].shape[0];for(let m=0;m<p.length;++m){const g=p[m],x=r[m];r[m]=B(()=>J(r[m],F(f,g))),l>0&&yt(x)}yt(p),a+=f,++l}return r}),c.done){s&&console.warn(`Your dataset iterator ran out of data during evaluateDataset(). Interrupting evalution. Make sure that your dataset can generate at least \`batches\` batches (in this case, ${e.batches} batches). You may need to use the repeat() function when building your dataset.`);break}}for(let c=0;c<r.length;++c){const u=r[c];r[c]=ut(r[c],a),yt(u)}return Oe(r)}function jc(n){v(n>0&&Number.isInteger(n),()=>`batchSize is required to be a positive integer, but got ${n}`)}function cr(n,t,e){return n==null?[null]:Array.isArray(n)?n.map(s=>Gs(s,t,e-t)):Gs(n,t,e-t)}function Du(n,t){return B(()=>n==null?null:Array.isArray(n)?n.map(e=>Du(e,t)):ib(n,t.dtype==="int32"?t:st(t,"int32")))}function qc(n,t){const e=[];let s=0,o=null;for(;s<n;)o=s+t,o>=n&&(o=n),e.push([s,o]),s=o;return e}function Fb(n){const t=[];n instanceof Xt&&(n=[n]);for(let e=0;e<n.length;++e){const s=n[e];if(s.rank===1)t.push(Li(s,1));else{if(s.rank===0)throw new Error("Expected tensor to be at least 1D, but received a 0D tensor (scalar).");t.push(s)}}return t}function pn(n,t){if(n==null)return;const e=[];if(t instanceof Xt)e.push(t.id);else if(Array.isArray(t))t.forEach(o=>e.push(o.id));else if(t!=null)for(const o in t){const r=t[o];e.push(r.id)}const s=[];if(n instanceof Xt)e.indexOf(n.id)===-1&&s.push(n);else if(Array.isArray(n))n.forEach(o=>{e.indexOf(o.id)===-1&&s.push(o)});else if(n!=null)for(const o in n){const r=n[o];e.indexOf(r.id)===-1&&s.push(r)}s.forEach(o=>{o.isDisposed||o.dispose()})}function eA(n){return n instanceof Xt}function Fu(n){return Array.isArray(n)}function zf(n){return!eA(n)&&!Fu(n)}function Bf(n,t,e,s=!0,o=""){if(t==null||t.length===0){if(n!=null){let i=!1;if(Fu(n)&&n.length>0)i=!0;else if(zf(n)){for(const a in n)if(n.hasOwnProperty(a)){i=!0;break}}else i=!0;if(i)throw new D(`Error when checking model ${o} expected no data, but got ${n}`)}return[]}if(n==null)return t.map(i=>null);let r;if(zf(n)){n=n,r=[];for(const i of t){if(n[i]==null)throw new D(`No data provided for "${i}". Need data for each key in: ${t}`);r.push(n[i])}}else if(Fu(n)){if(n=n,n.length!==t.length)throw new D(`Error when checking model ${o}: the Array of Tensors that you are passing to your model is not the size the model expected. Expected to see ${t.length} Tensor(s), but instead got the following list of Tensor(s): ${n}`);r=n}else{if(n=n,t.length>1)throw new D(`The model ${o} expects ${t.length} Tensor(s), but only received one Tensor. Found: Tensor with shape ${n.shape}`);r=[n]}if(r=Fb(r),e!=null)for(let i=0;i<t.length;++i){if(e[i]==null)continue;const a=r[i];if(a.shape.length!==e[i].length)throw new D(`Error when checking ${o}: expected ${t[i]} to have ${e[i].length} dimension(s). but got array with shape ${a.shape}`);for(let l=0;l<e[i].length;++l){if(l===0&&!s)continue;const c=a.shape[l],u=e[i][l];if(u!=null&&u>=0&&c!==u)throw new D(`${o} expected a batch of elements where each example has shape [${e[i].slice(1,e[i].length)}] (i.e.,tensor shape [*,${e[i].slice(1,e[i].length)}]) but the ${o} received an input with ${a.shape[0]} examples, each with shape [${a.shape.slice(1,a.shape.length)}] (tensor shape [${a.shape}])`)}}return r}function nA(n,t,e){const s=ps(n.map(r=>r.shape[0]));s.sort();const o=ps(t.map(r=>r.shape[0]));if(o.sort(),s.length>1)throw new D(`All input Tensors (x) should have the same number of samples. Got array shapes: ${JSON.stringify(n.map(r=>r.shape))}`);if(o.length>1)throw new D(`All target Tensors (y) should have the same number of samples. Got array shapes: ${JSON.stringify(t.map(r=>r.shape))}`);if(s.length>0&&o.length>0&&!Et(s,o))throw new D(`Input Tensors should have the same number of samples as target Tensors. Found ${s[0]} input sample(s) and ${o[0]} target sample(s).`)}function sA(n,t,e){const s=[xc,bc,kr];for(let o=0;o<n.length;++o){const r=n[o],i=t[o],a=e[o];if(i!=null){if(i===kr&&r.shape[r.shape.length-1]===1)throw new D(`You are passing a target array of shape ${r.shape} while using a loss 'categorical_crossentropy'. 'categorical_crossentropy'expects targets to be binary matrices (1s and 0s) of shape [samples, classes].`);if(s.indexOf(i)!==-1){const l=r.shape.slice(1),c=a.slice(1);for(let u=0;u<l.length;++u){const h=l[u],d=c[u];if(d!=null&&h!==d)throw new D(`A target Tensor with shape ${r.shape} was passed for an output of shape ${a}, while using a loss function that expects targets to have the same shape as the output.`)}}}}}function Vf(n,t,e,s=!0,o=""){let r;if(Array.isArray(n)){if(n.length!==t.length)throw new D(`Error when checking model ${o}: the Array of Tensors that you are passing to your model is not the size the the model expected. Expected to see ${t.length} Tensor(s), but instead got ${n.length} Tensors(s).`);r=n}else{if(t.length>1)throw new D(`The model expects ${t.length} ${o} Tensors, but only received one Tensor. Found: array with shape ${JSON.stringify(n.shape)}.`);r=[n]}if(e!=null)for(let i=0;i<t.length;++i){if(e[i]==null)continue;const a=r[i];if(a.shape.length!==e[i].length)throw new D(`Error when checking ${o}: expected ${t[i]} to have ${e[i].length} dimension(s), but got array with shape ${JSON.stringify(a.shape)}`);for(let l=0;l<e[i].length;++l){if(l===0&&!s)continue;const c=a.shape[l],u=e[i][l];if(u!=null&&u!==c)throw new D(`Error when checking ${o}: expected ${t[i]} to have shape ${JSON.stringify(e[i])} but got array with shape ${JSON.stringify(a.shape)}.`)}}}function oA(n,t){if(n==null||Array.isArray(n)&&n.length===0)return t.map(s=>[]);let e;if(typeof n=="string"||typeof n=="function")e=[n];else if(Array.isArray(n)||typeof n=="object")e=n;else throw new TypeError(`Type of metrics argument not understood. Expected an string,function, Array, or Object, found: ${n}`);if(Array.isArray(e))return t.map(s=>e);{const s=[];for(const o of t){let r=e.hasOwnProperty(o)?e[o]:[];Array.isArray(r)||(r=[r]),s.push(r)}return s}}const rA="layers-model";class To extends fn{constructor(t){super(t),this.isTraining=!1}summary(t,e,s=console.log){if(!this.built)throw new D("This model has never been called, thus its weights have not been created yet. So no summary can be displayed. Build the model first (e.g., by calling it on some test data).");VR(this,t,e,s)}compile(t){if(t.loss==null&&(t.loss=[]),this.loss=t.loss,typeof t.optimizer=="string")this.optimizer_=BR(t.optimizer),this.isOptimizerOwned=!0;else{if(!(t.optimizer instanceof Ns))throw new D("User-defined optimizer must be an instance of tf.Optimizer.");this.optimizer_=t.optimizer,this.isOptimizerOwned=!1}let e=[];if(!Array.isArray(t.loss)&&typeof t.loss!="string"&&typeof t.loss!="function"){t.loss=t.loss;for(const i in t.loss)if(this.outputNames.indexOf(i)===-1)throw new D(`Unknown entry in loss dictionary: "${i}". Only expected the following keys: ${this.outputNames}`);for(const i of this.outputNames)t.loss[i]==null&&console.warn(`Output "${i}" is missing from loss dictionary. We assume this was done on purpose, and we will not be expecting data to be passed to ${i} during training`),e.push(Hc(t.loss[i]))}else if(Array.isArray(t.loss)){if(t.loss.length!==this.outputs.length)throw new D(`When passing an Array as loss, it should have one entry per model output. The model has ${this.outputs.length} output(s), but you passed loss=${t.loss}.`);e=t.loss.map(a=>Hc(a))}else{const i=Hc(t.loss);this.outputs.forEach(a=>{e.push(i)})}this.lossFunctions=e,this.feedOutputNames=[],this.feedOutputShapes=[],this.feedLossFns=[];for(let i=0;i<this.outputs.length;++i){const a=this.internalOutputShapes[i],l=this.outputNames[i];this.feedOutputNames.push(l),this.feedOutputShapes.push(a),this.feedLossFns.push(this.lossFunctions[i])}const s=[];this.metrics=t.metrics,this.metricsNames=["loss"],this.metricsTensors=[],Us("loss",()=>{for(let i=0;i<this.outputs.length;++i){if(s.indexOf(i)!==-1)continue;const a=this.lossFunctions[i];this.outputs.length>1&&(this.metricsTensors.push([a,i]),this.metricsNames.push(this.outputNames[i]+"_loss"))}});const o=oA(t.metrics,this.outputNames),r=(i,a,l)=>{this.outputNames.length>1&&(a=this.outputNames[i]+"_"+a),this.metricsNames.push(a),this.metricsTensors.push([l,i])};Us("metric",()=>{for(let i=0;i<this.outputs.length;++i){if(s.indexOf(i)!==-1)continue;const a=o[i];(c=>{let h,d,p;for(const f of c){if(typeof f=="string"&&["accuracy","acc","crossentropy","ce"].indexOf(f)!==-1){const g=this.internalOutputShapes[i];g[g.length-1]===1||this.lossFunctions[i]===bc?["accuracy","acc"].indexOf(f)!==-1?d=vb:["crossentropy","ce"].indexOf(f)!==-1&&(d=RR):this.lossFunctions[i]===Va?["accuracy","acc"].indexOf(f)!==-1?d=AR:["crossentropy","ce"].indexOf(f)!==-1&&(d=Nb):["accuracy","acc"].indexOf(f)!==-1?d=kb:["crossentropy","ce"].indexOf(f)!==-1&&(d=Sb);let x;["accuracy","acc"].indexOf(f)!==-1?x="acc":["crossentropy","ce"].indexOf(f)!==-1&&(x="ce"),p=d,h=""+x}else p=zR(f),h=""+sa(f);let m;Us(h,()=>{m=p}),r(i,h,m)}})(a)}}),this.collectedTrainableWeights=this.trainableWeights}checkTrainableWeightsConsistency(){this.collectedTrainableWeights!=null&&this.trainableWeights.length!==this.collectedTrainableWeights.length&&console.warn("Discrepancy between trainableweights and collected trainable weights. Did you set `model.trainable` without calling `model.compile()` afterwards?")}evaluate(t,e,s={}){const o=s.batchSize==null?32:s.batchSize;jc(o);const i=this.standardizeUserDataXY(t,e,!0,o);try{const a=i[0].concat(i[1]);this.makeTestFunction();const l=this.testFunction,c=this.testLoop(l,a,o,s.verbose,s.steps);return Oe(c)}finally{pn(i[0],t),pn(i[1],e)}}async evaluateDataset(t,e){return this.makeTestFunction(),tA(this,t,e)}checkNumSamples(t,e,s,o="steps"){let r;if(s!=null){if(r=null,e!=null)throw new D(`If ${o} is set, batchSize must be null or undefined.Got batchSize = ${e}`)}else if(t!=null)Array.isArray(t)?r=t[0].shape[0]:r=t.shape[0];else throw new D(`Either the input data should have a defined shape, or ${o} shoud be specified.`);return r}execute(t,e){if(Array.isArray(e)&&e.length===0)throw new D("`outputs` is an empty Array, which is not allowed.");const s=Array.isArray(e),o=s?e:[e],r=this.retrieveSymbolicTensors(o),i=new cs;if(t instanceof Xt&&(t=[t]),Array.isArray(t)){if(t.length!==this.inputs.length)throw new D(`The number of inputs provided (${t.length}) does not match the number of inputs of this model (${this.inputs.length}).`);for(let l=0;l<this.inputs.length;++l)i.add(this.inputs[l],t[l])}else for(const l of this.inputs){const c=t[l.name];if(c==null)throw new D(`No value is provided for the model's input ${l.name}`);i.add(l,c)}const a=pr(r,i);return s?a:a[0]}retrieveSymbolicTensors(t){const e=no(null,t.length);let s=t.length;for(const o of this.layers){const r=Array.isArray(o.output)?o.output:[o.output],i=r.map(a=>a.name);for(let a=0;a<t.length;++a){const l=i.indexOf(t[a]);if(l!==-1&&(e[a]=r[l],s--),s===0)break}if(s===0)break}if(s>0){const o=[];throw e.forEach((r,i)=>{r==null&&o.push(t[i])}),new D(`Cannot find SymbolicTensors for output name(s): ${JSON.stringify(o)}`)}return e}predictLoop(t,e=32,s=!1){return B(()=>{const o=this.checkNumSamples(t);if(s)throw new xt("Verbose predictLoop() is not implemented yet.");const r=qc(o,e),i=this.outputs.map(a=>[]);for(let a=0;a<r.length;++a)B(()=>{const c=r[a][0],u=r[a][1],h=cr(t,c,u),d=[];if(Array.isArray(h))for(let f=0;f<h.length;++f)d.push({key:this.inputs[f],value:h[f]});else d.push({key:this.inputs[0],value:h});const p=new cs(d);return pr(this.outputs,p)}).forEach((c,u)=>i[u].push(c));return Oe(i.map(a=>Me(a,0)))})}predict(t,e={}){const s=Fb(t);Vf(s,this.inputNames,this.feedInputShapes,!1);try{const o=e.batchSize==null?32:e.batchSize;return jc(o),this.predictLoop(s,o)}finally{pn(s,t)}}predictOnBatch(t){Vf(t,this.inputNames,this.feedInputShapes,!0);const e=(Array.isArray(t)?t[0]:t).shape[0];return this.predictLoop(t,e)}standardizeUserDataXY(t,e,s=!0,o){if(this.optimizer_==null)throw new on("You must compile a model before training/testing. Use LayersModel.compile(modelCompileArgs).");const r=[];for(let i=0;i<this.feedOutputShapes.length;++i){const a=this.feedOutputShapes[i];this.feedLossFns[i]===Va?r.push(a.slice(0,a.length-1).concat([1])):r.push(a)}if(t=Bf(t,this.feedInputNames,this.feedInputShapes,!1,"input"),e=Bf(e,this.feedOutputNames,r,!1,"target"),nA(t,e),sA(e,this.feedLossFns,this.feedOutputShapes),this.stateful&&o!=null&&o>0&&t[0].shape[0]%o!==0)throw new D(`In a stateful network, you should only pass inputs with a number of samples that is divisible by the batch size ${o}. Found: ${t[0].shape[0]} sample(s).`);return[t,e]}async standardizeUserData(t,e,s,o,r=!0,i){const[a,l]=this.standardizeUserDataXY(t,e,r,i);if(s!=null)throw new Error("sample weight is not supported yet.");let c=null;if(o!=null){const u=Rb(o,this.outputNames);c=[];for(let h=0;h<u.length;++h)c.push(await Ab(l[h],null,u[h]))}return[a,l,c]}testLoop(t,e,s,o=0,r){return B(()=>{const i=this.checkNumSamples(e,s,r,"steps"),a=[];if(o>0)throw new xt("Verbose mode is not implemented yet.");if(r!=null)throw new xt("steps mode in testLoop() is not implemented yet");{const l=qc(i,s),c=We(Cn(0,i));for(let u=0;u<l.length;++u){const h=l[u][0],d=l[u][1],p=Gs(c,h,d-h),f=Du(e,p),m=t(f);if(u===0)for(let g=0;g<m.length;++g)a.push(Tt(0));for(let g=0;g<m.length;++g){const x=m[g];a[g]=J(a[g],F(d-h,x))}}for(let u=0;u<a.length;++u)a[u]=ut(a[u],i)}return a})}getDedupedMetricsNames(){const t=this.metricsNames,e=[];for(let s=0;s<t.length;++s){const o=t[s];let r=o;if(kf(t,o)>1){const i=kf(t.slice(0,s),o);r+=`_${i}`}e.push(r)}return e}makeTrainFunction(){return t=>{const e=[],s=t.slice(0,this.inputs.length),o=t.slice(this.inputs.length,this.inputs.length+this.outputs.length),r=t.slice(this.inputs.length+this.outputs.length,this.inputs.length+this.outputs.length*2),i=[],a=()=>{const h=[];for(let m=0;m<this.inputs.length;++m)h.push({key:this.inputs[m],value:s[m]});const d=new cs(h),p=pr(this.outputs,d,{training:!0});let f;for(let m=0;m<this.lossFunctions.length;++m){const g=this.lossFunctions[m];let x=g(o[m],p[m]);r[m]!=null&&(x=KR(x,r[m]));const b=ne(x);e.push(b),m===0?f=x:f=J(f,x)}for(let m=0;m<this.metricsTensors.length;++m){let g;if(this.outputs.length>1&&m<this.outputs.length)g=e[m];else{const x=this.metricsTensors[m][0],b=this.metricsTensors[m][1];g=ne(x(o[b],p[b]))}Dn(g),i.push(g)}return f=ne(f),this.calculateLosses().forEach(m=>{f=J(f,m)}),f},l=this.collectedTrainableWeights.map(h=>h.read());return[this.optimizer_.minimize(a,!0,l)].concat(i)}}makeTestFunction(){this.testFunction=t=>B(()=>{const e=[];let s;const o=t.slice(0,this.inputs.length),r=t.slice(this.inputs.length,this.inputs.length+this.outputs.length),i=[];for(let c=0;c<this.inputs.length;++c)i.push({key:this.inputs[c],value:o[c]});const a=new cs(i),l=pr(this.outputs,a);for(let c=0;c<this.lossFunctions.length;++c){const u=this.lossFunctions[c],h=ne(u(r[c],l[c]));c===0?s=h:s=J(s,h),e.push(s)}for(let c=0;c<this.metricsTensors.length;++c){const u=this.metricsTensors[c][0],h=this.metricsTensors[c][1],d=ne(u(r[h],l[h]));e.push(d)}return e})}async fit(t,e,s={}){if(this.isTraining)throw new Error("Cannot start training because another fit() call is ongoing.");this.isTraining=!0;let o,r,i,a,l,c,u,h,d;try{const p=s.batchSize==null?32:s.batchSize;jc(p);const m=await this.standardizeUserData(t,e,s.sampleWeight,s.classWeight,!1,p);o=m[0],r=m[1],d=m[2];let g=!1,x;if(s.validationData!=null&&s.validationData.length>0){if(g=!0,s.validationData.length===2)l=s.validationData[0],c=s.validationData[1];else throw s.validationData.length===3?new xt("validationData including sample weights is not supported yet."):new D(`When passing validation data, it must contain 2 (valX, valY) or 3 (valX, valY, valSampleWeight) items; ${s.validationData} is invalid.`);const S=await this.standardizeUserData(l,c,null,null,!0,p);u=S[0],h=S[1],x=u.concat(h)}else if(s.validationSplit!=null&&s.validationSplit>0&&s.validationSplit<1){g=!0;const k=Math.floor(o[0].shape[0]*(1-s.validationSplit)),S=o[0].shape[0];u=cr(o,k,S),i=o,o=cr(o,0,k),h=cr(r,k,S),a=r,r=cr(r,0,k),x=u.concat(h)}else s.validationSteps!=null&&(g=!0);const b=o.concat(r).concat(d);this.checkTrainableWeightsConsistency();const w=this.makeTrainFunction(),y=this.getDedupedMetricsNames();let C,I;g?(this.makeTestFunction(),C=this.testFunction,I=y.slice().concat(y.map(k=>"val_"+k))):(C=null,x=[],I=y.slice());const N=Cb(s.callbacks,s.yieldEvery);return await this.fitLoop(w,b,y,p,s.epochs,s.verbose,N,C,x,s.shuffle,I,s.initialEpoch,null,null)}finally{this.isTraining=!1,pn(o,t),pn(r,e),pn(i,t),pn(a,e),pn(u,l),pn(h,c),d!=null&&yt(d)}}async fitLoop(t,e,s,o,r,i,a,l,c,u,h,d,p,f){o==null&&(o=32),r==null&&(r=1),u==null&&(u=!0),d==null&&(d=0);let m=!1;if(l!=null&&c!=null&&(m=!0),f!=null&&(m=!0,p==null))throw new D("Can only use `validationSteps` when doing step-wise training, i.e., `stepsPerEpoch` must be set.");const g=this.checkNumSamples(e,o,p,"steps_per_epoch");let x;g!=null&&(x=Cn(0,g)),i==null&&(i=1);const{callbackList:b,history:w}=$b(a,i,r,d,g,p,o,m,h);b.setModel(this),this.history=w,await b.onTrainBegin(),this.stopTraining_=!1;for(let y=d;y<r;++y){await b.onEpochBegin(y);const C={};if(p!=null)throw new xt("stepsPerEpoch mode is not implemented yet.");{if(u==="batch")throw new xt("batch shuffling is not implemneted yet");u&&$C(x);const I=We(x),N=qc(g,o);for(let T=0;T<N.length;++T){const k={};if(await b.onBatchBegin(T,k),B(()=>{const S=N[T][0],$=N[T][1],R=Gs(I,S,$-S);k.batch=T,k.size=$-S;const A=Du(e,R),O=t(A);for(let M=0;M<s.length;++M){const z=s[M],G=O[M];k[z]=G,Dn(G)}if(T===N.length-1&&m){const M=this.testLoop(l,c,o);for(let z=0;z<s.length;++z){const G=s[z],V=M[z];Dn(V),C["val_"+G]=V}}}),await b.onBatchEnd(T,k),wb(k),this.stopTraining_)break}I.dispose()}if(await b.onEpochEnd(y,C),this.stopTraining_)break}return await b.onTrainEnd(),await this.history.syncData(),this.history}async fitDataset(t,e){return ZR(this,t,e)}async trainOnBatch(t,e){const s=await this.standardizeUserData(t,e),o=s[0],r=s[1],a=this.makeTrainFunction()(o.concat(r)),l=[];for(const c of a){const u=await c.data();l.push(u[0])}return yt(a),pn(s[0],t),pn(s[1],e),Oe(l)}getNamedWeights(t){const e=[],s=t!=null&&t.trainableOnly,o=s?this.trainableWeights:this.weights,r=this.getWeights(s);for(let i=0;i<o.length;++i)s&&!o[i].trainable||e.push({name:o[i].originalName,tensor:r[i]});return e}set stopTraining(t){this.stopTraining_=t}get stopTraining(){return this.stopTraining_}get optimizer(){return this.optimizer_}set optimizer(t){this.optimizer_!==t&&(this.optimizer_=t,this.isOptimizerOwned=!1)}dispose(){const t=super.dispose();if(t.refCountAfterDispose===0&&this.optimizer!=null&&this.isOptimizerOwned){const e=Xp().numTensors;this.optimizer_.dispose(),t.numDisposedVariables+=e-Xp().numTensors}return t}getLossIdentifiers(){let t;if(typeof this.loss=="string")t=jn(this.loss);else if(Array.isArray(this.loss)){for(const e of this.loss)if(typeof e!="string")throw new Error("Serialization of non-string loss is not supported.");t=this.loss.map(e=>jn(e))}else{const e=Object.keys(this.loss);t={};const s=this.loss;for(const o of e)if(typeof s[o]=="string")t[o]=jn(s[o]);else throw new Error("Serialization of non-string loss is not supported.")}return t}getMetricIdentifiers(){if(typeof this.metrics=="string"||typeof this.metrics=="function")return[jn(sa(this.metrics))];if(Array.isArray(this.metrics))return this.metrics.map(t=>jn(sa(t)));{const t={};for(const e in this.metrics)t[e]=jn(sa(this.metrics[e]));return t}}getTrainingConfig(){return{loss:this.getLossIdentifiers(),metrics:this.getMetricIdentifiers(),optimizer_config:{class_name:this.optimizer.getClassName(),config:this.optimizer.getConfig()}}}loadTrainingConfig(t){if(t.weighted_metrics!=null)throw new Error("Loading weight_metrics is not supported yet.");if(t.loss_weights!=null)throw new Error("Loading loss_weights is not supported yet.");if(t.sample_weight_mode!=null)throw new Error("Loading sample_weight_mode is not supported yet.");const e=Ha(t.optimizer_config),s=Mn(e);let o;if(typeof t.loss=="string")o=Ps(t.loss);else if(Array.isArray(t.loss))o=t.loss.map(i=>Ps(i));else if(t.loss!=null){o={};for(const i in t.loss)o[i]=Ps(t.loss[i])}let r;if(Array.isArray(t.metrics))r=t.metrics.map(i=>Ps(i));else if(t.metrics!=null){r={};for(const i in t.metrics)r[i]=Ps(t.metrics[i])}this.compile({loss:o,metrics:r,optimizer:s})}async save(t,e){if(typeof t=="string"){const c=E$(t);if(c.length===0)throw new D(`Cannot find any save handlers for URL '${t}'`);if(c.length>1)throw new D(`Found more than one (${c.length}) save handlers for URL '${t}'`);t=c[0]}if(t.save==null)throw new D("LayersModel.save() cannot proceed because the IOHandler provided does not have the `save` attribute defined.");const s=await Yp(this.getNamedWeights(e)),a={modelTopology:this.toJSON(null,!1),format:rA,generatedBy:`TensorFlow.js tfjs-layers v${Eb}`,convertedBy:null};if((e==null?!1:e.includeOptimizer)&&this.optimizer!=null){a.trainingConfig=this.getTrainingConfig();const c="optimizer",{data:u,specs:h}=await Yp(await this.optimizer.getWeights(),c);s.specs.push(...h),s.data=C$([s.data,u])}return this.userDefinedMetadata!=null&&(Mf(this.userDefinedMetadata,this.name,!0),a.userDefinedMetadata=this.userDefinedMetadata),a.weightData=s.data,a.weightSpecs=s.specs,t.save(a)}setUserDefinedMetadata(t){Mf(t,this.name),this.userDefinedMetadata=t}getUserDefinedMetadata(){return this.userDefinedMetadata}}To.className="Model";X(To);class _b extends To{}_b.className="Functional";X(_b);async function iA(n,t){if(t==null&&(t={}),typeof n=="string"){const e=R$(n,t);if(e.length===0)e.push(pN(n,t));else if(e.length>1)throw new D(`Found more than one (${e.length}) load handlers for URL '${n}'`);n=e[0]}return aA(n,void 0,t)}async function aA(n,t,e){if(e==null&&(e={}),n.load==null)throw new D("Cannot proceed with model loading because the IOHandler provided does not have the `load` method implemented.");const s=await n.load();let o=s.modelTopology;o.model_config!=null&&(o=o.model_config);const r=e.strict==null?!0:e.strict,i=s.weightData!=null&&s.weightSpecs!=null&&r,a=Mn(Ha(o),t,i),l=s.trainingConfig;if(l!=null&&a.loadTrainingConfig(l),s.userDefinedMetadata!=null&&a.setUserDefinedMetadata(s.userDefinedMetadata),s.weightData!=null){if(s.weightSpecs==null)throw new D("LayersModel artifacts contains weight data, but not weight specs. Therefore loading of weights cannot proceed.");const{modelWeights:c,optimizerWeights:u}=lA(s.weightData,s.weightSpecs);a.loadWeights(c,r),a.optimizer!=null&&u.length>0&&await a.optimizer.setWeights(u),yt(c),yt(u.map(h=>h.tensor))}return a}function lA(n,t){const e=m$(n,t),s={},o=[];return t.forEach(r=>{r.group==="optimizer"?o.push({name:r.name,tensor:e[r.name]}):s[r.name]=e[r.name]}),{modelWeights:s,optimizerWeights:o}}class Sr extends To{constructor(t){if(super({inputs:[],outputs:[]}),t=t||{},this.trainable=!0,this.built=!1,this.name=t.name!=null?t.name:fc("sequential_"),t.layers!=null)for(const e of t.layers)this.add(e)}checkShape(t){if(t.inboundNodes[0].outputTensors[0].shape.some(s=>s<0))throw new D(`Negative dimension size caused by adding layer ${t.name} with input shape [${t.inboundNodes[0].inputTensors[0].shape}]`)}add(t){const e=t instanceof Sr||t instanceof To;let s;if(e){if(s=t,s.outputs.length!==1)throw new D("All layers in a Sequential model should have a single output tensor. For multi-output layers, use the functional API.");if(s.inputs.length!==1)throw new D("All layers in a Sequential model should have a single input tensor. For multi-input layers, use the functional API.")}if(this.outputs.length===0){if(t.inboundNodes.length===0){if(t.batchInputShape==null)throw new D("The first layer in a Sequential model must get an `inputShape` or `batchInputShape` argument.");const o=aR({batchShape:t.batchInputShape,dtype:t.dtype,name:t.name+"_input"});t.apply(o)}if(e)this.outputs=s.outputs,this.inputs=s.inputs;else{if(t.inboundNodes.length!==1)throw new D(`A layer added to a Sequential model must not already be connected somewhere else. LayersModel received layer ${t.name} which has ${t.inboundNodes.length} pre-existing inbound connections.`);if(t.inboundNodes[0].outputTensors.length!==1)throw new D("All layers in a Sequential model should have a single output tensor. For multi-output layers, use the functional API.");this.checkShape(t),this.outputs=[t.inboundNodes[0].outputTensors[0]],this.inputs=mb(this.outputs[0])}this.inboundNodes=[],new gc({outboundLayer:this,inboundLayers:[],nodeIndices:[],tensorIndices:[],inputTensors:this.inputs,outputTensors:this.outputs,inputMasks:no(null,this.inputs.length),outputMasks:[null],inputShapes:this.inputs.map(o=>o.shape),outputShapes:this.outputs[0].shape})}else{const o=t.apply(this.outputs[0]);if(Array.isArray(o))throw new TypeError("All layers in a Sequential model should have a single output tensor. For multi-output layers, use the functional API.");this.checkShape(t),this.outputs=[o],this.inboundNodes[0].outputTensors=this.outputs,this.inboundNodes[0].outputShapes=[this.outputs[0].shape]}this.layers.push(t),this.built=!1}pop(){if(this.layers.length===0)throw new TypeError("There are no layers in the model.");if(this.layers.pop(),this.layers.length===0)this.outputs=[],this.inboundNodes=[],this.outboundNodes=[];else{const t=this.layers.length-1;this.layers[t].outboundNodes=[],this.outputs=[this.layers[t].output],this.inboundNodes[0].outputTensors=this.outputs,this.inboundNodes[0].outputShapes=[this.outputs[0].shape]}}call(t,e){return this.model==null&&this.build(),this.model.call(t,e)}build(t){if(Nt(t),this.inputs.length===0||this.outputs.length===0)throw new TypeError("Sequential model cannot be built: model is empty. Add some layers first.");this.model=new To({inputs:this.inputs,outputs:this.outputs[0],name:this.name+"_model"}),this.model.trainable=this.trainable,this.supportsMasking=this.model.supportsMasking,this.inputLayers=this.model.inputLayers,this.inputLayersNodeIndices=this.model.inputLayersNodeIndices,this.inputLayersTensorIndices=this.model.inputLayersTensorIndices,this.outputLayers=this.model.outputLayers,this.outputLayersNodeIndices=this.model.outputLayersNodeIndices,this.outputLayersTensorIndices=this.model.outputLayersTensorIndices,this.nodesByDepth=this.model.nodesByDepth,this.containerNodes=this.model.containerNodes,this.outputNames=this.model.outputNames,this.inputNames=this.model.inputNames,this.built=!0}countParams(){return this.built||this.build(),super.countParams()}summary(t,e,s=console.log){this.built||this.build(),super.summary(t,e,s)}setWeights(t){this.model==null&&this.build(),this.model.setWeights(t)}evaluate(t,e,s={}){if(!this.built)throw new on("The model needs to be compiled before being used.");return this.model.evaluate(t,e,s)}async evaluateDataset(t,e){if(!this.built)throw new on("The model needs to be compiled before being used.");return this.model.evaluateDataset(t,e)}predict(t,e={}){return this.model==null&&this.build(),this.model.predict(t,e)}predictOnBatch(t){return this.model==null&&this.build(),this.model.predictOnBatch(t)}compile(t){this.build(),this.model.compile(t),this.optimizer_=this.model.optimizer,this.isOptimizerOwned=this.model.isOptimizerOwned,this.loss=this.model.loss,this.metrics=this.model.metrics,this.metricsTensors=this.model.metricsTensors,this.metricsNames=this.model.metricsNames}get optimizer(){return this.model==null?void 0:this.model.optimizer}set optimizer(t){this.model.optimizer=t}async fit(t,e,s={}){if(!this.built)throw new on("The model needs to be compiled before being used.");return this.model.fit(t,e,s)}async fitDataset(t,e){if(!this.built)throw new on("The model needs to be compiled before being used.");return this.model.fitDataset(t,e)}async trainOnBatch(t,e){return this.model.trainOnBatch(t,e)}static fromConfig(t,e,s={},o=!1){let r,i={};if(e instanceof Array){if(e[0].className==null||e[0].className==="Merge")throw new D("Legacy serialization format not supported yet.");r=e}else v(e.layers!=null,()=>"When the config data for a Sequential model is not an Array, it must be an Object that contains the 'layers' field."),r=e.layers,delete e.layers,i=e;const a=new t(i);if(!(a instanceof Sr))throw new xt(`Sequential.fromConfig called on non-Sequential input: ${a}`);for(const l of r){const u=Mn(l,void 0,o);o&&u.setFastWeightInitDuringBuild(!0),a.add(u)}return a}set stopTraining(t){if(this.model==null)throw new D("Cannot set the stopTraining property of a sequential model before it is compiled.");this.model.stopTraining=t}get stopTraining(){if(this.model==null)throw new D("Cannot get the stopTraining property of a sequential model before it is compiled.");return this.model.stopTraining}getConfig(){const t=[];for(const e of this.layers){const s={};s.className=e.getClassName(),s.config=e.getConfig(),t.push(s)}return{name:this.name,layers:t}}}Sr.className="Sequential";X(Sr);let ke=class extends Ko{getConfig(){return{}}};class Ob extends ke{apply(t,e=1){return HE(t,e)}}Ob.className="elu";X(Ob);class Mb extends ke{apply(t){return Zg(t)}}Mb.className="selu";X(Mb);class Lb extends ke{apply(t){return lo(t)}}Lb.className="relu";X(Lb);class Pb extends ke{apply(t){return B(()=>$r(6,lo(t)))}}Pb.className="relu6";X(Pb);class zb extends ke{apply(t){return t}}zb.className="linear";X(zb);class Bb extends ke{apply(t){return Ho(t)}}Bb.className="sigmoid";X(Bb);class Vb extends ke{apply(t){return qE(t)}}Vb.className="hardSigmoid";X(Vb);class Wb extends ke{apply(t){return Ei(t)}}Wb.className="softplus";X(Wb);class Ub extends ke{apply(t){return jE(t)}}Ub.className="softsign";X(Ub);class Gb extends ke{apply(t){return oc(t)}}Gb.className="tanh";X(Gb);let sp=class extends ke{apply(t,e=-1){return rd(t,e)}};sp.className="softmax";X(sp);class Hb extends ke{apply(t,e=-1){return Ug(t,e)}}Hb.className="logSoftmax";X(Hb);class jb extends ke{apply(t){return B(()=>B(()=>{const e=Math.sqrt(2),s=F(.5,J(1,Pg(ut(t,e))));return F(t,s)}))}}jb.className="gelu";X(jb);class qb extends ke{apply(t){return B(()=>F(.5,F(t,J(1,oc(F(Ie(ut(2,Math.PI)),J(t,F(.044715,Qs(t,3)))))))))}}qb.className="gelu_new";X(qb);class Kb extends ke{apply(t){return B(()=>F(t,oc(Ei(t))))}}Kb.className="mish";X(Kb);class Xb extends ke{apply(t,e=1){return B(()=>F(Ho(F(t,e)),t))}}Xb.className="swish";X(Xb);function xs(n){return n.getClassName()}function Kc(n,t={}){return Mi(n,nn.getMap().classNameMap,t,"activation")}function bs(n){if(n==null){const t={};return t.className="linear",t.config={},Kc(t)}if(typeof n=="string"){const t={};return t.className=n,t.config={},Kc(t)}else return n instanceof ke?n:Kc(n)}function cA(n){if(n!=null&&typeof n!="object")throw new Error(`Argument to L1L2 regularizer's constructor is expected to be an object, but received: ${n}`)}class Yb extends Ko{}class Zb extends Yb{constructor(t){super(),cA(t),this.l1=t==null||t.l1==null?.01:t.l1,this.l2=t==null||t.l2==null?.01:t.l2,this.hasL1=this.l1!==0,this.hasL2=this.l2!==0}apply(t){return B(()=>{let e=de([1]);return this.hasL1&&(e=J(e,ct(F(this.l1,Ne(t))))),this.hasL2&&(e=J(e,ct(F(this.l2,Pi(t))))),L(e,[])})}getConfig(){return{l1:this.l1,l2:this.l2}}static fromConfig(t,e){return new t({l1:e.l1,l2:e.l2})}}Zb.className="L1L2";X(Zb);const Wf={l1l2:"L1L2"};function Ot(n){return Ud(n)}function Uf(n,t={}){return Mi(n,nn.getMap().classNameMap,t,"regularizer")}function Gt(n){if(n==null)return null;if(typeof n=="string"){const e={className:n in Wf?Wf[n]:n,config:{}};return Uf(e)}else return n instanceof Yb?n:Uf(n)}class Jb extends $t{constructor(t){super(t??{}),this.supportsMasking=!0,t!=null&&(this.maxValue=t.maxValue)}call(t,e){t=ft(t);let s=lo(t);return this.maxValue!=null&&(s=Ye(s,0,this.maxValue)),s}computeOutputShape(t){return t}getConfig(){const t={maxValue:this.maxValue},e=super.getConfig();return Object.assign(t,e),t}}Jb.className="ReLU";X(Jb);class Qb extends $t{constructor(t){super(t??{}),this.DEFAULT_ALPHA=.3,t==null&&(t={}),this.alpha=t.alpha==null?this.DEFAULT_ALPHA:t.alpha}call(t,e){const s=ft(t);return Xh(s,this.alpha)}computeOutputShape(t){return t}getConfig(){const t={alpha:this.alpha},e=super.getConfig();return Object.assign(t,e),t}}Qb.className="LeakyReLU";X(Qb);class t0 extends $t{constructor(t){if(super(t??{}),this.DEFAULT_ALPHA_INITIALIZER="zeros",t==null&&(t={}),this.supportsMasking=!0,this.alphaInitializer=Ut(t.alphaInitializer||this.DEFAULT_ALPHA_INITIALIZER),this.alphaRegularizer=Gt(t.alphaRegularizer),this.alphaConstraint=ae(t.alphaConstraint),t.sharedAxes==null)this.sharedAxes=null;else if(Array.isArray(t.sharedAxes))this.sharedAxes=t.sharedAxes;else if(typeof t.sharedAxes=="number")this.sharedAxes=[t.sharedAxes];else throw new D(`Expected sharedAxes to be a number or an array of numbers, but got ${t.sharedAxes}`)}build(t){t=Nt(t);const e=t.slice(1);if(this.sharedAxes!=null)for(const o of this.sharedAxes)e[o-1]=1;this.alpha=this.addWeight("alpha",e,"float32",this.alphaInitializer,this.alphaRegularizer,!0,this.alphaConstraint);const s={};if(this.sharedAxes!=null)for(let o=1;o<t.length;++o)s[o]=t[o];this.inputSpec=[new re({ndim:t.length,axes:s})],this.built=!0}call(t,e){return t=ft(t),ed(t,this.alpha.read())}getConfig(){const t={alphaInitializer:jt(this.alphaInitializer),alphaRegularizer:Ot(this.alphaRegularizer),alphaConstraint:ie(this.alphaConstraint),sharedAxes:this.sharedAxes},e=super.getConfig();return Object.assign(t,e),t}}t0.className="PReLU";X(t0);let e0=class extends $t{constructor(t){if(super(t??{}),this.DEFAULT_ALPHA=1,t==null&&(t={}),t.alpha!=null&&t.alpha!==this.DEFAULT_ALPHA)throw new xt(`Non-default alpha value (${t.alpha}) is not supported by the ELU layer yet.`);this.alpha=t.alpha==null?this.DEFAULT_ALPHA:t.alpha}call(t,e){const s=ft(t);return ac(s)}computeOutputShape(t){return t}getConfig(){const t={alpha:this.alpha},e=super.getConfig();return Object.assign(t,e),t}};e0.className="ELU";X(e0);class n0 extends $t{constructor(t){super(t??{}),this.DEFAULT_THETA=1,t==null&&(t={}),this.theta=t.theta==null?this.DEFAULT_THETA:t.theta}call(t,e){const s=ft(t);return F(s,st(Ze(s,this.theta),"float32"))}computeOutputShape(t){return t}getConfig(){const t={theta:this.theta},e=super.getConfig();return Object.assign(t,e),t}}n0.className="ThresholdedReLU";X(n0);class s0 extends $t{constructor(t){super(t??{}),this.DEFAULT_AXIS=1,t==null&&(t={}),this.softmax=new sp().apply,this.axis=t.axis==null?this.DEFAULT_AXIS:t.axis}call(t,e){return B(()=>{let s=ft(t);const o=e.mask;if(o!=null){const r=F(pt(sn(s.shape),st(o,s.dtype)),Tt(-1e9));s=J(s,r)}return this.axis instanceof Array?this.axis.length>1?Pn(pt(s,Gg(s,this.axis,!0))):this.softmax(s,this.axis[0]):this.softmax(s,this.axis)})}computeOutputShape(t){return t}getConfig(){const t={axis:this.axis},e=super.getConfig();return Object.assign(t,e),t}}s0.className="Softmax";X(s0);function Eo(n,t,e){if(typeof n=="number")return no(n,t);if(n.length!==t)throw new D(`The ${e} argument must be an integer or tuple of ${t} integers. Received: ${n.length} elements.`);for(let s=0;s<t;++s){const o=n[s];if(!VE(o))throw new D(`The ${e} argument must be an integer or tuple of ${t} integers. Received: ${JSON.stringify(n)} including a non-integer number ${o}`)}return n}function wn(n,t,e,s,o=1){if(n==null)return n;const r=t+(t-1)*(o-1);let i;return e==="same"?i=n:i=n-r+1,Math.floor((i+s-1)/s)}function En(n,t,e,s){if(n==null)return null;if(s==="valid")n=n*t+gs([e-t,0]);else if(s==="same")n=n*t;else throw new D(`Unsupport padding mode: ${s}.`);return n}function op(n,t){return B(()=>(te(t),t==="channelsFirst"?vt(n,[0,2,3,1]):n))}function o0(n,t){return B(()=>(te(t),t==="channelsFirst"?vt(n,[0,2,3,4,1]):n))}function uA(n,t,e,s=1,o="valid",r,i=1){return B(()=>{if(r==null&&(r=$n()),te(r),n.shape.length!==3)throw new D(`The input of a conv1dWithBias operation should be 3, but is ${n.shape.length} instead.`);if(t.shape.length!==3)throw new D(`The kernel for a conv1dWithBias operation should be 3, but is ${t.shape.length} instead`);if(e!=null&&e.shape.length!==1)throw new D(`The bias for a conv1dWithBias operation should be 1, but is ${e.shape.length} instead`);if(r==="channelsFirst"&&(n=vt(n,[0,2,1])),o==="causal")throw new xt("The support for CAUSAL padding mode in conv1dWithBias is not implemented yet.");let a=Fg(n,t,s,o==="same"?"same":"valid","NWC",i);return e!=null&&(a=vn(a,e)),a})}function Gf(n,t,e,s=[1,1],o="valid",r,i,a=null){return B(()=>{if(r==null&&(r=$n()),te(r),n.rank!==3&&n.rank!==4)throw new D(`conv2dWithBiasActivation expects input to be of rank 3 or 4, but received ${n.rank}.`);if(t.rank!==3&&t.rank!==4)throw new D(`conv2dWithBiasActivation expects kernel to be of rank 3 or 4, but received ${n.rank}.`);let l=op(n,r);if(o==="causal")throw new xt("The support for CAUSAL padding mode in conv1dWithBias is not implemented yet.");return l=u2({x:l,filter:t,strides:s,pad:o==="same"?"same":"valid",dilations:i,dataFormat:"NHWC",bias:e,activation:a}),r==="channelsFirst"&&(l=vt(l,[0,3,1,2])),l})}function hA(n,t,e,s=[1,1,1],o="valid",r,i){return B(()=>{if(r==null&&(r=$n()),te(r),n.rank!==4&&n.rank!==5)throw new D(`conv3dWithBias expects input to be of rank 4 or 5, but received ${n.rank}.`);if(t.rank!==4&&t.rank!==5)throw new D(`conv3dWithBias expects kernel to be of rank 4 or 5, but received ${n.rank}.`);let a=o0(n,r);if(o==="causal")throw new xt("The support for CAUSAL padding mode in conv3dWithBias is not implemented yet.");return a=iv(a,t,s,o==="same"?"same":"valid","NDHWC",i),e!=null&&(a=vn(a,e)),r==="channelsFirst"&&(a=vt(a,[0,4,1,2,3])),a})}class yc extends $t{constructor(t,e){if(super(e),this.bias=null,this.DEFAULT_KERNEL_INITIALIZER="glorotNormal",this.DEFAULT_BIAS_INITIALIZER="zeros",yc.verifyArgs(e),this.rank=t,pe(this.rank,"rank"),this.rank!==1&&this.rank!==2&&this.rank!==3)throw new xt(`Convolution layer for rank other than 1, 2, or 3 (${this.rank}) is not implemented yet.`);if(this.kernelSize=Eo(e.kernelSize,t,"kernelSize"),this.strides=Eo(e.strides==null?1:e.strides,t,"strides"),this.padding=e.padding==null?"valid":e.padding,Je(this.padding),this.dataFormat=e.dataFormat==null?"channelsLast":e.dataFormat,te(this.dataFormat),this.activation=bs(e.activation),this.useBias=e.useBias==null?!0:e.useBias,this.biasInitializer=Ut(e.biasInitializer||this.DEFAULT_BIAS_INITIALIZER),this.biasConstraint=ae(e.biasConstraint),this.biasRegularizer=Gt(e.biasRegularizer),this.activityRegularizer=Gt(e.activityRegularizer),this.dilationRate=Eo(e.dilationRate==null?1:e.dilationRate,t,"dilationRate"),this.rank===1&&Array.isArray(this.dilationRate)&&this.dilationRate.length!==1)throw new D(`dilationRate must be a number or an array of a single number for 1D convolution, but received ${JSON.stringify(this.dilationRate)}`);if(this.rank===2){if(typeof this.dilationRate=="number")this.dilationRate=[this.dilationRate,this.dilationRate];else if(this.dilationRate.length!==2)throw new D(`dilationRate must be a number or array of two numbers for 2D convolution, but received ${JSON.stringify(this.dilationRate)}`)}else if(this.rank===3){if(typeof this.dilationRate=="number")this.dilationRate=[this.dilationRate,this.dilationRate,this.dilationRate];else if(this.dilationRate.length!==3)throw new D(`dilationRate must be a number or array of three numbers for 3D convolution, but received ${JSON.stringify(this.dilationRate)}`)}}static verifyArgs(t){if(Tn("kernelSize"in t,"required key 'kernelSize' not in config"),typeof t.kernelSize!="number"&&!Gd(t.kernelSize,"number",1,3))throw new D(`BaseConv expects config.kernelSize to be number or number[] with length 1, 2, or 3, but received ${JSON.stringify(t.kernelSize)}.`)}getConfig(){const t={kernelSize:this.kernelSize,strides:this.strides,padding:this.padding,dataFormat:this.dataFormat,dilationRate:this.dilationRate,activation:xs(this.activation),useBias:this.useBias,biasInitializer:jt(this.biasInitializer),biasRegularizer:Ot(this.biasRegularizer),activityRegularizer:Ot(this.activityRegularizer),biasConstraint:ie(this.biasConstraint)},e=super.getConfig();return Object.assign(t,e),t}}class Xo extends yc{constructor(t,e){super(t,e),this.kernel=null,Xo.verifyArgs(e),this.filters=e.filters,pe(this.filters,"filters"),this.kernelInitializer=Ut(e.kernelInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.kernelConstraint=ae(e.kernelConstraint),this.kernelRegularizer=Gt(e.kernelRegularizer)}build(t){t=Nt(t);const e=this.dataFormat==="channelsFirst"?1:t.length-1;if(t[e]==null)throw new D(`The channel dimension of the input should be defined. Found ${t[e]}`);const s=t[e],o=this.kernelSize.concat([s,this.filters]);this.kernel=this.addWeight("kernel",o,null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.useBias&&(this.bias=this.addWeight("bias",[this.filters],null,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint)),this.inputSpec=[{ndim:this.rank+2,axes:{[e]:s}}],this.built=!0}call(t,e){return B(()=>{t=ft(t);let s;const o=this.bias==null?null:this.bias.read(),r=tb(this.activation.getClassName());if(r!=null&&this.rank===2)s=Gf(t,this.kernel.read(),o,this.strides,this.padding,this.dataFormat,this.dilationRate,r);else{if(this.rank===1)s=uA(t,this.kernel.read(),o,this.strides[0],this.padding,this.dataFormat,this.dilationRate[0]);else if(this.rank===2)s=Gf(t,this.kernel.read(),o,this.strides,this.padding,this.dataFormat,this.dilationRate);else if(this.rank===3)s=hA(t,this.kernel.read(),o,this.strides,this.padding,this.dataFormat,this.dilationRate);else throw new xt("convolutions greater than 3D are not implemented yet.");this.activation!=null&&(s=this.activation.apply(s))}return s})}computeOutputShape(t){t=Nt(t);const e=[],s=this.dataFormat==="channelsLast"?t.slice(1,t.length-1):t.slice(2);for(let r=0;r<s.length;++r){const i=wn(s[r],this.kernelSize[r],this.padding,this.strides[r],typeof this.dilationRate=="number"?this.dilationRate:this.dilationRate[r]);e.push(i)}let o=[t[0]];return this.dataFormat==="channelsLast"?(o=o.concat(e),o.push(this.filters)):(o.push(this.filters),o=o.concat(e)),o}getConfig(){const t={filters:this.filters,kernelInitializer:jt(this.kernelInitializer),kernelRegularizer:Ot(this.kernelRegularizer),kernelConstraint:ie(this.kernelConstraint)},e=super.getConfig();return Object.assign(t,e),t}static verifyArgs(t){if(!("filters"in t)||typeof t.filters!="number"||t.filters<1)throw new D(`Convolution layer expected config.filters to be a 'number' > 0 but got ${JSON.stringify(t.filters)}`)}}class Wi extends Xo{constructor(t){super(2,t),Wi.verifyArgs(t)}getConfig(){const t=super.getConfig();return delete t.rank,t}static verifyArgs(t){if(typeof t.kernelSize!="number"&&!Gd(t.kernelSize,"number",1,2))throw new D(`Conv2D expects config.kernelSize to be number or number[] with length 1 or 2, but received ${JSON.stringify(t.kernelSize)}.`)}}Wi.className="Conv2D";X(Wi);class Ui extends Xo{constructor(t){super(3,t),Ui.verifyArgs(t)}getConfig(){const t=super.getConfig();return delete t.rank,t}static verifyArgs(t){if(typeof t.kernelSize!="number"&&!(Array.isArray(t.kernelSize)&&(t.kernelSize.length===1||t.kernelSize.length===3)))throw new D(`Conv3D expects config.kernelSize to be number or [number, number, number], but received ${JSON.stringify(t.kernelSize)}.`)}}Ui.className="Conv3D";X(Ui);class r0 extends Wi{constructor(t){if(super(t),this.inputSpec=[new re({ndim:4})],this.padding!=="same"&&this.padding!=="valid")throw new D(`Conv2DTranspose currently supports only padding modes 'same' and 'valid', but received padding mode ${this.padding}`)}build(t){if(t=Nt(t),t.length!==4)throw new D("Input should have rank 4; Received input shape: "+JSON.stringify(t));const e=this.dataFormat==="channelsFirst"?1:t.length-1;if(t[e]==null)throw new D("The channel dimension of the inputs should be defined. Found `None`.");const s=t[e],o=this.kernelSize.concat([this.filters,s]);this.kernel=this.addWeight("kernel",o,"float32",this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.useBias&&(this.bias=this.addWeight("bias",[this.filters],"float32",this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint)),this.inputSpec=[new re({ndim:4,axes:{[e]:s}})],this.built=!0}call(t,e){return B(()=>{let s=ft(t);if(s.shape.length!==4)throw new D(`Conv2DTranspose.call() expects input tensor to be rank-4, but received a tensor of rank-${s.shape.length}`);const o=s.shape,r=o[0];let i,a;this.dataFormat==="channelsFirst"?(i=2,a=3):(i=1,a=2);const l=o[i],c=o[a],u=this.kernelSize[0],h=this.kernelSize[1],d=this.strides[0],p=this.strides[1],f=En(l,d,u,this.padding),m=En(c,p,h,this.padding),g=[r,f,m,this.filters];this.dataFormat!=="channelsLast"&&(s=vt(s,[0,2,3,1]));let x=_g(s,this.kernel.read(),g,this.strides,this.padding);return this.dataFormat!=="channelsLast"&&(x=vt(x,[0,3,1,2])),this.bias!=null&&(x=vn(x,this.bias.read(),this.dataFormat)),this.activation!=null&&(x=this.activation.apply(x)),x})}computeOutputShape(t){t=Nt(t);const e=t.slice();let s,o,r;this.dataFormat==="channelsFirst"?(s=1,o=2,r=3):(s=3,o=1,r=2);const i=this.kernelSize[0],a=this.kernelSize[1],l=this.strides[0],c=this.strides[1];return e[s]=this.filters,e[o]=En(e[o],l,i,this.padding),e[r]=En(e[r],c,a,this.padding),e}getConfig(){const t=super.getConfig();return delete t.dilationRate,t}}r0.className="Conv2DTranspose";X(r0);class i0 extends Ui{constructor(t){if(super(t),this.inputSpec=[new re({ndim:5})],this.padding!=="same"&&this.padding!=="valid")throw new D(`Conv3DTranspose currently supports only padding modes 'same' and 'valid', but received padding mode ${this.padding}`)}build(t){if(t=Nt(t),t.length!==5)throw new D("Input should have rank 5; Received input shape: "+JSON.stringify(t));const e=this.dataFormat==="channelsFirst"?1:t.length-1;if(t[e]==null)throw new D("The channel dimension of the inputs should be defined. Found `None`.");const s=t[e],o=this.kernelSize.concat([this.filters,s]);this.kernel=this.addWeight("kernel",o,"float32",this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.useBias&&(this.bias=this.addWeight("bias",[this.filters],"float32",this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint)),this.inputSpec=[new re({ndim:5,axes:{[e]:s}})],this.built=!0}call(t,e){return B(()=>{let s=ft(t);if(s.shape.length!==5)throw new D(`Conv3DTranspose.call() expects input tensor to be rank-4, but received a tensor of rank-${s.shape.length}`);const o=s.shape,r=o[0];let i,a,l;this.dataFormat==="channelsFirst"?(l=2,i=3,a=4):(l=1,i=2,a=3);const c=o[l],u=o[i],h=o[a],d=this.kernelSize[0],p=this.kernelSize[1],f=this.kernelSize[2],m=this.strides[0],g=this.strides[1],x=this.strides[2],b=En(c,m,d,this.padding),w=En(u,g,p,this.padding),y=En(h,x,f,this.padding),C=[r,b,w,y,this.filters];this.dataFormat!=="channelsLast"&&(s=vt(s,[0,2,3,4,1]));let I=cv(s,this.kernel.read(),C,this.strides,this.padding);return this.dataFormat!=="channelsLast"&&(I=vt(I,[0,4,1,2,3])),this.bias!==null&&(I=vn(I,this.bias.read(),this.dataFormat)),this.activation!==null&&(I=this.activation.apply(I)),I})}computeOutputShape(t){t=Nt(t);const e=t.slice();let s,o,r,i;this.dataFormat==="channelsFirst"?(s=1,o=2,r=3,i=4):(s=4,o=1,r=2,i=3);const a=this.kernelSize[0],l=this.kernelSize[1],c=this.kernelSize[2],u=this.strides[0],h=this.strides[1],d=this.strides[2];return e[s]=this.filters,e[o]=En(e[o],u,a,this.padding),e[r]=En(e[r],h,l,this.padding),e[i]=En(e[i],d,c,this.padding),e}getConfig(){const t=super.getConfig();return delete t.dilationRate,t}}i0.className="Conv3DTranspose";X(i0);class a0 extends Xo{constructor(t,e){if(super(t,e),this.DEFAULT_DEPTHWISE_INITIALIZER="glorotUniform",this.DEFAULT_POINTWISE_INITIALIZER="glorotUniform",this.depthwiseKernel=null,this.pointwiseKernel=null,e.filters==null)throw new D("The `filters` configuration field is required by SeparableConv, but is unspecified.");if(e.kernelInitializer!=null||e.kernelRegularizer!=null||e.kernelConstraint!=null)throw new D("Fields kernelInitializer, kernelRegularizer and kernelConstraint are invalid for SeparableConv2D. Use depthwiseInitializer, depthwiseRegularizer, depthwiseConstraint, pointwiseInitializer, pointwiseRegularizer and pointwiseConstraint instead.");if(e.padding!=null&&e.padding!=="same"&&e.padding!=="valid")throw new D(`SeparableConv${this.rank}D supports only padding modes: 'same' and 'valid', but received ${JSON.stringify(e.padding)}`);this.depthMultiplier=e.depthMultiplier==null?1:e.depthMultiplier,this.depthwiseInitializer=Ut(e.depthwiseInitializer||this.DEFAULT_DEPTHWISE_INITIALIZER),this.depthwiseRegularizer=Gt(e.depthwiseRegularizer),this.depthwiseConstraint=ae(e.depthwiseConstraint),this.pointwiseInitializer=Ut(e.depthwiseInitializer||this.DEFAULT_POINTWISE_INITIALIZER),this.pointwiseRegularizer=Gt(e.pointwiseRegularizer),this.pointwiseConstraint=ae(e.pointwiseConstraint)}build(t){if(t=Nt(t),t.length<this.rank+2)throw new D(`Inputs to SeparableConv${this.rank}D should have rank ${this.rank+2}, but received input shape: ${JSON.stringify(t)}`);const e=this.dataFormat==="channelsFirst"?1:t.length-1;if(t[e]==null||t[e]<0)throw new D(`The channel dimension of the inputs should be defined, but found ${JSON.stringify(t[e])}`);const s=t[e],o=this.kernelSize.concat([s,this.depthMultiplier]),r=[];for(let a=0;a<this.rank;++a)r.push(1);r.push(s*this.depthMultiplier,this.filters);const i=!0;this.depthwiseKernel=this.addWeight("depthwise_kernel",o,"float32",this.depthwiseInitializer,this.depthwiseRegularizer,i,this.depthwiseConstraint),this.pointwiseKernel=this.addWeight("pointwise_kernel",r,"float32",this.pointwiseInitializer,this.pointwiseRegularizer,i,this.pointwiseConstraint),this.useBias?this.bias=this.addWeight("bias",[this.filters],"float32",this.biasInitializer,this.biasRegularizer,i,this.biasConstraint):this.bias=null,this.inputSpec=[new re({ndim:this.rank+2,axes:{[e]:s}})],this.built=!0}call(t,e){return B(()=>{t=ft(t);let s;if(this.rank===1)throw new xt("1D separable convolution is not implemented yet.");return this.rank===2&&(this.dataFormat==="channelsFirst"&&(t=vt(t,[0,2,3,1])),s=Jg(t,this.depthwiseKernel.read(),this.pointwiseKernel.read(),this.strides,this.padding,this.dilationRate,"NHWC")),this.useBias&&(s=vn(s,this.bias.read(),this.dataFormat)),this.activation!=null&&(s=this.activation.apply(s)),this.dataFormat==="channelsFirst"&&(s=vt(s,[0,3,1,2])),s})}getConfig(){const t=super.getConfig();return delete t.rank,delete t.kernelInitializer,delete t.kernelRegularizer,delete t.kernelConstraint,t.depthwiseInitializer=jt(this.depthwiseInitializer),t.pointwiseInitializer=jt(this.pointwiseInitializer),t.depthwiseRegularizer=Ot(this.depthwiseRegularizer),t.pointwiseRegularizer=Ot(this.pointwiseRegularizer),t.depthwiseConstraint=ie(this.depthwiseConstraint),t.pointwiseConstraint=ie(this.pointwiseConstraint),t}}a0.className="SeparableConv";class l0 extends a0{constructor(t){super(2,t)}}l0.className="SeparableConv2D";X(l0);class wc extends Xo{constructor(t){super(1,t),wc.verifyArgs(t),this.inputSpec=[{ndim:3}]}getConfig(){const t=super.getConfig();return delete t.rank,delete t.dataFormat,t}static verifyArgs(t){if(typeof t.kernelSize!="number"&&!Gd(t.kernelSize,"number",1,1))throw new D(`Conv1D expects config.kernelSize to be number or number[] with length 1, but received ${JSON.stringify(t.kernelSize)}.`)}}wc.className="Conv1D";X(wc);class c0 extends $t{constructor(t){super(t),typeof t.cropping=="number"?this.cropping=[[t.cropping,t.cropping],[t.cropping,t.cropping]]:typeof t.cropping[0]=="number"?this.cropping=[[t.cropping[0],t.cropping[0]],[t.cropping[1],t.cropping[1]]]:this.cropping=t.cropping,this.dataFormat=t.dataFormat===void 0?"channelsLast":t.dataFormat,this.inputSpec=[{ndim:4}]}computeOutputShape(t){return this.dataFormat==="channelsFirst"?[t[0],t[1],t[2]-this.cropping[0][0]-this.cropping[0][1],t[3]-this.cropping[1][0]-this.cropping[1][1]]:[t[0],t[1]-this.cropping[0][0]-this.cropping[0][1],t[2]-this.cropping[1][0]-this.cropping[1][1],t[3]]}call(t,e){return B(()=>{if(t=ft(t),this.dataFormat==="channelsLast"){const s=na(t,this.cropping[0][0],t.shape[1]-this.cropping[0][0]-this.cropping[0][1],2);return na(s,this.cropping[1][0],t.shape[2]-this.cropping[1][1]-this.cropping[1][0],3)}else{const s=na(t,this.cropping[0][0],t.shape[2]-this.cropping[0][0]-this.cropping[0][1],3);return na(s,this.cropping[1][0],t.shape[3]-this.cropping[1][1]-this.cropping[1][0],4)}})}getConfig(){const t={cropping:this.cropping,dataFormat:this.dataFormat},e=super.getConfig();return Object.assign(t,e),t}}c0.className="Cropping2D";X(c0);class u0 extends $t{constructor(t){super(t),this.DEFAULT_SIZE=[2,2],this.inputSpec=[{ndim:4}],this.size=t.size==null?this.DEFAULT_SIZE:t.size,this.dataFormat=t.dataFormat==null?"channelsLast":t.dataFormat,te(this.dataFormat),this.interpolation=t.interpolation==null?"nearest":t.interpolation,PE(this.interpolation)}computeOutputShape(t){if(this.dataFormat==="channelsFirst"){const e=t[2]==null?null:this.size[0]*t[2],s=t[3]==null?null:this.size[1]*t[3];return[t[0],t[1],e,s]}else{const e=t[1]==null?null:this.size[0]*t[1],s=t[2]==null?null:this.size[1]*t[2];return[t[0],e,s,t[3]]}}call(t,e){return B(()=>{let s=ft(t);const o=s.shape;if(this.dataFormat==="channelsFirst"){s=vt(s,[0,2,3,1]);const r=this.size[0]*o[2],i=this.size[1]*o[3],a=this.interpolation==="nearest"?Kn.resizeNearestNeighbor(s,[r,i]):Kn.resizeBilinear(s,[r,i]);return vt(a,[0,3,1,2])}else{const r=this.size[0]*o[1],i=this.size[1]*o[2];return this.interpolation==="nearest"?Kn.resizeNearestNeighbor(s,[r,i]):Kn.resizeBilinear(s,[r,i])}})}getConfig(){const t={size:this.size,dataFormat:this.dataFormat,interpolation:this.interpolation},e=super.getConfig();return Object.assign(t,e),t}}u0.className="UpSampling2D";X(u0);function dA(n,t,e=[1,1],s="valid",o,r){return B(()=>{o==null&&(o=$n()),te(o);let i=op(n,o);if(n.rank!==4)throw new D(`Input for depthwiseConv2d is required to be 4-D, but is instead ${n.rank}-D`);if(t.rank!==4)throw new D(`depthwiseKernel is required to be 4-D, but is instead ${t.rank}-D`);return i=Hh(i,t,e,s==="same"?"same":"valid","NHWC",r),o==="channelsFirst"&&(i=vt(i,[0,3,1,2])),i})}class h0 extends yc{constructor(t){super(2,t),this.depthwiseKernel=null,this.depthMultiplier=t.depthMultiplier==null?1:t.depthMultiplier,this.depthwiseInitializer=Ut(t.depthwiseInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.depthwiseConstraint=ae(t.depthwiseConstraint),this.depthwiseRegularizer=Gt(t.depthwiseRegularizer)}build(t){if(t=Nt(t),t.length<4)throw new D(`Inputs to DepthwiseConv2D should have rank 4. Received input shape: ${JSON.stringify(t)}.`);const e=this.dataFormat==="channelsFirst"?1:3;if(t[e]==null||t[e]<0)throw new D(`The channel dimension of the inputs to DepthwiseConv2D should be defined, but is not (${t[e]}).`);const s=t[e],o=[this.kernelSize[0],this.kernelSize[1],s,this.depthMultiplier];this.depthwiseKernel=this.addWeight("depthwise_kernel",o,null,this.depthwiseInitializer,this.depthwiseRegularizer,!0,this.depthwiseConstraint),this.useBias?this.bias=this.addWeight("bias",[s*this.depthMultiplier],null,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint):this.bias=null,this.built=!0}call(t,e){return B(()=>{t=ft(t);let s=dA(t,this.depthwiseKernel.read(),this.strides,this.padding,this.dataFormat,null);return this.useBias&&(s=vn(s,this.bias.read(),this.dataFormat)),this.activation!=null&&(s=this.activation.apply(s)),s})}computeOutputShape(t){t=Nt(t);const e=this.dataFormat==="channelsFirst"?t[2]:t[1],s=this.dataFormat==="channelsFirst"?t[3]:t[2],o=this.dataFormat==="channelsFirst"?t[1]*this.depthMultiplier:t[3]*this.depthMultiplier,r=wn(e,this.kernelSize[0],this.padding,this.strides[0]),i=wn(s,this.kernelSize[1],this.padding,this.strides[1]);return this.dataFormat==="channelsFirst"?[t[0],o,r,i]:[t[0],r,i,o]}getConfig(){const t=super.getConfig();return t.depthMultiplier=this.depthMultiplier,t.depthwiseInitializer=jt(this.depthwiseInitializer),t.depthwiseRegularizer=Ot(this.depthwiseRegularizer),t.depthwiseConstraint=ie(this.depthwiseRegularizer),t}}h0.className="DepthwiseConv2D";X(h0);function d0(n,t,e,s){if(Array.isArray(n)){if(t!=null||e!=null)throw new D("When inputs is an array, neither initialState or constants should be provided");s!=null&&(e=n.slice(n.length-s,n.length),n=n.slice(0,n.length-s)),n.length>1&&(t=n.slice(1,n.length)),n=n[0]}function o(r){return r==null||Array.isArray(r)?r:[r]}return t=o(t),e=o(e),{inputs:n,initialState:t,constants:e}}function p0(n,t,e,s=!1,o,r,i=!1,a=!1){return B(()=>{const l=t.shape.length;if(l<3)throw new D(`Input should be at least 3D, but is ${l}D.`);const c=[1,0].concat(Cn(2,l));t=vt(t,c),i&&console.warn("Backend rnn(): the unroll = true option is not applicable to the imperative deeplearn.js backend."),o!=null&&(o=st(st(o,"bool"),"float32"),o.rank===l-1&&(o=_e(o,-1)),o=vt(o,c)),s&&(t=to(t,0),o!=null&&(o=to(o,0)));const u=[];let h,d=e;const p=t.shape[0],f=eo(t);let m;o!=null&&(m=eo(o));for(let x=0;x<p;++x){const b=f[x],w=B(()=>n(b,d));if(o==null)h=w[0],d=w[1];else{const y=B(()=>{const C=m[x],I=pt(ln(C),C),N=J(F(w[0],C),F(d[0],I)),T=d.map((k,S)=>J(F(w[1][S],C),F(k,I)));return{output:N,newStates:T}});h=y.output,d=y.newStates}a&&u.push(h)}let g;return a&&(g=Bn(u,1)),[h,g,d]})}class Ts extends $t{constructor(t){super(t);let e;if(t.cell==null)throw new D("cell property is missing for the constructor of RNN.");if(Array.isArray(t.cell)?e=new ap({cells:t.cell}):e=t.cell,e.stateSize==null)throw new D("The RNN cell should have an attribute `stateSize` (tuple of integers, one integer per RNN state).");this.cell=e,this.returnSequences=t.returnSequences==null?!1:t.returnSequences,this.returnState=t.returnState==null?!1:t.returnState,this.goBackwards=t.goBackwards==null?!1:t.goBackwards,this._stateful=t.stateful==null?!1:t.stateful,this.unroll=t.unroll==null?!1:t.unroll,this.supportsMasking=!0,this.inputSpec=[new re({ndim:3})],this.stateSpec=null,this.states_=null,this.numConstants=null,this.keptStates=[]}getStates(){if(this.states_==null){const t=Array.isArray(this.cell.stateSize)?this.cell.stateSize.length:1;return Cn(0,t).map(e=>null)}else return this.states_}setStates(t){this.states_=t}computeOutputShape(t){Tu(t)&&(t=t[0]),t=t;let e=this.cell.stateSize;Array.isArray(e)||(e=[e]);const s=e[0];let o;if(this.returnSequences?o=[t[0],t[1],s]:o=[t[0],s],this.returnState){const r=[];for(const i of e)r.push([t[0],i]);return[o].concat(r)}else return o}computeMask(t,e){return B(()=>{Array.isArray(e)&&(e=e[0]);const s=this.returnSequences?e:null;if(this.returnState){const o=this.states.map(r=>null);return[s].concat(o)}else return s})}get states(){if(this.states_==null){const t=Array.isArray(this.cell.stateSize)?this.cell.stateSize.length:1,e=[];for(let s=0;s<t;++s)e.push(null);return e}else return this.states_}set states(t){this.states_=t}build(t){if(this.numConstants!=null)throw new xt("Constants support is not implemented in RNN yet.");Tu(t)&&(t=t[0]),t=t;const e=this.stateful?t[0]:null,s=t.slice(2);this.inputSpec[0]=new re({shape:[e,null,...s]});const o=[t[0]].concat(t.slice(2));this.cell.build(o);let r;if(Array.isArray(this.cell.stateSize)?r=this.cell.stateSize:r=[this.cell.stateSize],this.stateSpec!=null){if(!Et(this.stateSpec.map(i=>i.shape[i.shape.length-1]),r))throw new D(`An initialState was passed that is not compatible with cell.stateSize. Received stateSpec=${this.stateSpec}; However cell.stateSize is ${this.cell.stateSize}`)}else this.stateSpec=r.map(i=>new re({shape:[null,i]}));this.stateful&&this.resetStates()}resetStates(t,e=!1){B(()=>{if(!this.stateful)throw new Nn("Cannot call resetStates() on an RNN Layer that is not stateful.");const s=this.inputSpec[0].shape[0];if(s==null)throw new D("If an RNN is stateful, it needs to know its batch size. Specify the batch size of your input tensors: \n- If using a Sequential model, specify the batch size by passing a `batchInputShape` option to your first layer.\n- If using the functional API, specify the batch size by passing a `batchShape` option to your Input layer.");if(this.states_==null)Array.isArray(this.cell.stateSize)?this.states_=this.cell.stateSize.map(o=>de([s,o])):this.states_=[de([s,this.cell.stateSize])];else if(t==null)yt(this.states_),this.keptStates!=null&&(yt(this.keptStates),this.keptStates=[]),Array.isArray(this.cell.stateSize)?this.states_=this.cell.stateSize.map(o=>de([s,o])):this.states_[0]=de([s,this.cell.stateSize]);else{if(Array.isArray(t)||(t=[t]),t.length!==this.states_.length)throw new D(`Layer ${this.name} expects ${this.states_.length} state(s), but it received ${t.length} state value(s). Input received: ${t}`);e===!0?this.keptStates.push(this.states_.slice()):yt(this.states_);for(let o=0;o<this.states_.length;++o){const r=t[o],i=Array.isArray(this.cell.stateSize)?this.cell.stateSize[o]:this.cell.stateSize,a=[s,i];if(!Et(r.shape,a))throw new D(`State ${o} is incompatible with layer ${this.name}: expected shape=${a}, received shape=${r.shape}`);this.states_[o]=r}}this.states_=this.states_.map(o=>Dn(o.clone()))})}apply(t,e){let s=e==null?null:e.initialState,o=e==null?null:e.constants;e==null&&(e={});const r=d0(t,s,o,this.numConstants);t=r.inputs,s=r.initialState,o=r.constants;let i=[],a=[];if(s!=null){e.initialState=s,i=i.concat(s),this.stateSpec=[];for(const c of s)this.stateSpec.push(new re({shape:c.shape}));a=a.concat(this.stateSpec)}if(o!=null&&(e.constants=o,i=i.concat(o),this.numConstants=o.length),i[0]instanceof Vn){const c=[t].concat(i),u=this.inputSpec.concat(a),h=this.inputSpec;this.inputSpec=u;const d=super.apply(c,e);return this.inputSpec=h,d}else return super.apply(t,e)}call(t,e){return B(()=>{const s=e==null?null:e.mask,o=e==null?null:e.training;let r=e==null?null:e.initialState;t=ft(t),r==null&&(this.stateful?r=this.states_:r=this.getInitialState(t));const i=Array.isArray(this.cell.stateSize)?this.cell.stateSize.length:1;if(r.length!==i)throw new D(`RNN Layer has ${i} state(s) but was passed ${r.length} initial state(s).`);this.unroll&&console.warn("Ignoring unroll = true for RNN layer, due to imperative backend.");const a={training:o},c=p0((f,m)=>{const g=this.cell.call([f].concat(m),a);return[g[0],g.slice(1)]},t,r,this.goBackwards,s,null,this.unroll,this.returnSequences),u=c[0],h=c[1],d=c[2];this.stateful&&this.resetStates(d,o);const p=this.returnSequences?h:u;return this.returnState?[p].concat(d):p})}getInitialState(t){return B(()=>{let e=de(t.shape);return e=ct(e,[1,2]),e=Li(e),Array.isArray(this.cell.stateSize)?this.cell.stateSize.map(s=>s>1?Su(e,[1,s]):e):this.cell.stateSize>1?[Su(e,[1,this.cell.stateSize])]:[e]})}get trainableWeights(){return this.trainable?this.cell.trainableWeights:[]}get nonTrainableWeights(){return this.trainable?this.cell.nonTrainableWeights:this.cell.weights}setFastWeightInitDuringBuild(t){super.setFastWeightInitDuringBuild(t),this.cell!=null&&this.cell.setFastWeightInitDuringBuild(t)}getConfig(){const t=super.getConfig(),e={returnSequences:this.returnSequences,returnState:this.returnState,goBackwards:this.goBackwards,stateful:this.stateful,unroll:this.unroll};this.numConstants!=null&&(e.numConstants=this.numConstants);const s=this.cell.getConfig();return this.getClassName()===Ts.className&&(e.cell={className:this.cell.getClassName(),config:s}),Object.assign(Object.assign(Object.assign({},s),t),e)}static fromConfig(t,e,s={}){const o=e.cell,r=Mn(o,s);return new t(Object.assign(e,{cell:r}))}}Ts.className="RNN";X(Ts);class Cc extends $t{}class rp extends Cc{constructor(t){super(t),this.DEFAULT_ACTIVATION="tanh",this.DEFAULT_KERNEL_INITIALIZER="glorotNormal",this.DEFAULT_RECURRENT_INITIALIZER="orthogonal",this.DEFAULT_BIAS_INITIALIZER="zeros",this.units=t.units,pe(this.units,"units"),this.activation=bs(t.activation==null?this.DEFAULT_ACTIVATION:t.activation),this.useBias=t.useBias==null?!0:t.useBias,this.kernelInitializer=Ut(t.kernelInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.recurrentInitializer=Ut(t.recurrentInitializer||this.DEFAULT_RECURRENT_INITIALIZER),this.biasInitializer=Ut(t.biasInitializer||this.DEFAULT_BIAS_INITIALIZER),this.kernelRegularizer=Gt(t.kernelRegularizer),this.recurrentRegularizer=Gt(t.recurrentRegularizer),this.biasRegularizer=Gt(t.biasRegularizer),this.kernelConstraint=ae(t.kernelConstraint),this.recurrentConstraint=ae(t.recurrentConstraint),this.biasConstraint=ae(t.biasConstraint),this.dropout=Mo([1,gs([0,t.dropout==null?0:t.dropout])]),this.recurrentDropout=Mo([1,gs([0,t.recurrentDropout==null?0:t.recurrentDropout])]),this.dropoutFunc=t.dropoutFunc,this.stateSize=this.units,this.dropoutMask=null,this.recurrentDropoutMask=null}build(t){t=Nt(t),this.kernel=this.addWeight("kernel",[t[t.length-1],this.units],null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.recurrentKernel=this.addWeight("recurrent_kernel",[this.units,this.units],null,this.recurrentInitializer,this.recurrentRegularizer,!0,this.recurrentConstraint),this.useBias?this.bias=this.addWeight("bias",[this.units],null,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint):this.bias=null,this.built=!0}call(t,e){return B(()=>{if(t=t,t.length!==2)throw new D(`SimpleRNNCell expects 2 input Tensors, got ${t.length}.`);let s=t[1];t=t[0];const o=e.training==null?!1:e.training;0<this.dropout&&this.dropout<1&&this.dropoutMask==null&&(this.dropoutMask=ys({ones:()=>ln(t),rate:this.dropout,training:o,dropoutFunc:this.dropoutFunc})),0<this.recurrentDropout&&this.recurrentDropout<1&&this.recurrentDropoutMask==null&&(this.recurrentDropoutMask=ys({ones:()=>ln(s),rate:this.recurrentDropout,training:o,dropoutFunc:this.dropoutFunc}));let r;const i=this.dropoutMask,a=this.recurrentDropoutMask;i!=null?r=On(F(t,i),this.kernel.read()):r=On(t,this.kernel.read()),this.bias!=null&&(r=vn(r,this.bias.read())),a!=null&&(s=F(s,a));let l=J(r,On(s,this.recurrentKernel.read()));return this.activation!=null&&(l=this.activation.apply(l)),[l,l]})}getConfig(){const t=super.getConfig(),e={units:this.units,activation:xs(this.activation),useBias:this.useBias,kernelInitializer:jt(this.kernelInitializer),recurrentInitializer:jt(this.recurrentInitializer),biasInitializer:jt(this.biasInitializer),kernelRegularizer:Ot(this.kernelRegularizer),recurrentRegularizer:Ot(this.recurrentRegularizer),biasRegularizer:Ot(this.biasRegularizer),activityRegularizer:Ot(this.activityRegularizer),kernelConstraint:ie(this.kernelConstraint),recurrentConstraint:ie(this.recurrentConstraint),biasConstraint:ie(this.biasConstraint),dropout:this.dropout,recurrentDropout:this.recurrentDropout};return Object.assign(Object.assign({},t),e)}}rp.className="SimpleRNNCell";X(rp);class f0 extends Ts{constructor(t){t.cell=new rp(t),super(t)}call(t,e){return B(()=>{this.cell.dropoutMask!=null&&(yt(this.cell.dropoutMask),this.cell.dropoutMask=null),this.cell.recurrentDropoutMask!=null&&(yt(this.cell.recurrentDropoutMask),this.cell.recurrentDropoutMask=null);const s=e==null?null:e.mask,o=e==null?null:e.training,r=e==null?null:e.initialState;return super.call(t,{mask:s,training:o,initialState:r})})}static fromConfig(t,e){return new t(e)}}f0.className="SimpleRNN";X(f0);class ip extends Cc{constructor(t){if(super(t),this.DEFAULT_ACTIVATION="tanh",this.DEFAULT_RECURRENT_ACTIVATION="hardSigmoid",this.DEFAULT_KERNEL_INITIALIZER="glorotNormal",this.DEFAULT_RECURRENT_INITIALIZER="orthogonal",this.DEFAULT_BIAS_INITIALIZER="zeros",t.resetAfter)throw new D("GRUCell does not support reset_after parameter set to true.");this.units=t.units,pe(this.units,"units"),this.activation=bs(t.activation===void 0?this.DEFAULT_ACTIVATION:t.activation),this.recurrentActivation=bs(t.recurrentActivation===void 0?this.DEFAULT_RECURRENT_ACTIVATION:t.recurrentActivation),this.useBias=t.useBias==null?!0:t.useBias,this.kernelInitializer=Ut(t.kernelInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.recurrentInitializer=Ut(t.recurrentInitializer||this.DEFAULT_RECURRENT_INITIALIZER),this.biasInitializer=Ut(t.biasInitializer||this.DEFAULT_BIAS_INITIALIZER),this.kernelRegularizer=Gt(t.kernelRegularizer),this.recurrentRegularizer=Gt(t.recurrentRegularizer),this.biasRegularizer=Gt(t.biasRegularizer),this.kernelConstraint=ae(t.kernelConstraint),this.recurrentConstraint=ae(t.recurrentConstraint),this.biasConstraint=ae(t.biasConstraint),this.dropout=Mo([1,gs([0,t.dropout==null?0:t.dropout])]),this.recurrentDropout=Mo([1,gs([0,t.recurrentDropout==null?0:t.recurrentDropout])]),this.dropoutFunc=t.dropoutFunc,this.implementation=t.implementation,this.stateSize=this.units,this.dropoutMask=null,this.recurrentDropoutMask=null}build(t){t=Nt(t);const e=t[t.length-1];this.kernel=this.addWeight("kernel",[e,this.units*3],null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.recurrentKernel=this.addWeight("recurrent_kernel",[this.units,this.units*3],null,this.recurrentInitializer,this.recurrentRegularizer,!0,this.recurrentConstraint),this.useBias?this.bias=this.addWeight("bias",[this.units*3],null,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint):this.bias=null,this.built=!0}call(t,e){return B(()=>{if(t=t,t.length!==2)throw new D(`GRUCell expects 2 input Tensors (inputs, h, c), got ${t.length}.`);const s=e.training==null?!1:e.training;let o=t[1];t=t[0],0<this.dropout&&this.dropout<1&&this.dropoutMask==null&&(this.dropoutMask=ys({ones:()=>ln(t),rate:this.dropout,training:s,count:3,dropoutFunc:this.dropoutFunc})),0<this.recurrentDropout&&this.recurrentDropout<1&&this.recurrentDropoutMask==null&&(this.recurrentDropoutMask=ys({ones:()=>ln(o),rate:this.recurrentDropout,training:s,count:3,dropoutFunc:this.dropoutFunc}));const r=this.dropoutMask,i=this.recurrentDropoutMask;let a,l,c;0<this.dropout&&this.dropout<1&&(t=F(t,r[0]));let u=On(t,this.kernel.read());this.useBias&&(u=vn(u,this.bias.read())),0<this.recurrentDropout&&this.recurrentDropout<1&&(o=F(o,i[0]));const h=this.recurrentKernel.read(),[d,p]=Xe(h,[2*this.units,this.units],h.rank-1),f=On(o,d),[m,g,x]=Xe(u,3,u.rank-1),[b,w]=Xe(f,2,f.rank-1);a=this.recurrentActivation.apply(J(m,b)),l=this.recurrentActivation.apply(J(g,w));const y=On(F(l,o),p);c=this.activation.apply(J(x,y));const C=J(F(a,o),F(J(1,Zt(a)),c));return[C,C]})}getConfig(){const t=super.getConfig(),e={units:this.units,activation:xs(this.activation),recurrentActivation:xs(this.recurrentActivation),useBias:this.useBias,kernelInitializer:jt(this.kernelInitializer),recurrentInitializer:jt(this.recurrentInitializer),biasInitializer:jt(this.biasInitializer),kernelRegularizer:Ot(this.kernelRegularizer),recurrentRegularizer:Ot(this.recurrentRegularizer),biasRegularizer:Ot(this.biasRegularizer),activityRegularizer:Ot(this.activityRegularizer),kernelConstraint:ie(this.kernelConstraint),recurrentConstraint:ie(this.recurrentConstraint),biasConstraint:ie(this.biasConstraint),dropout:this.dropout,recurrentDropout:this.recurrentDropout,implementation:this.implementation,resetAfter:!1};return Object.assign(Object.assign({},t),e)}}ip.className="GRUCell";X(ip);class m0 extends Ts{constructor(t){t.implementation===0&&console.warn("`implementation=0` has been deprecated, and now defaults to `implementation=1`. Please update your layer call."),t.cell=new ip(t),super(t)}call(t,e){return B(()=>{this.cell.dropoutMask!=null&&(yt(this.cell.dropoutMask),this.cell.dropoutMask=null),this.cell.recurrentDropoutMask!=null&&(yt(this.cell.recurrentDropoutMask),this.cell.recurrentDropoutMask=null);const s=e==null?null:e.mask,o=e==null?null:e.training,r=e==null?null:e.initialState;return super.call(t,{mask:s,training:o,initialState:r})})}static fromConfig(t,e){return e.implmentation===0&&(e.implementation=1),new t(e)}}m0.className="GRU";X(m0);class $c extends Cc{constructor(t){super(t),this.DEFAULT_ACTIVATION="tanh",this.DEFAULT_RECURRENT_ACTIVATION="hardSigmoid",this.DEFAULT_KERNEL_INITIALIZER="glorotNormal",this.DEFAULT_RECURRENT_INITIALIZER="orthogonal",this.DEFAULT_BIAS_INITIALIZER="zeros",this.units=t.units,pe(this.units,"units"),this.activation=bs(t.activation===void 0?this.DEFAULT_ACTIVATION:t.activation),this.recurrentActivation=bs(t.recurrentActivation===void 0?this.DEFAULT_RECURRENT_ACTIVATION:t.recurrentActivation),this.useBias=t.useBias==null?!0:t.useBias,this.kernelInitializer=Ut(t.kernelInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.recurrentInitializer=Ut(t.recurrentInitializer||this.DEFAULT_RECURRENT_INITIALIZER),this.biasInitializer=Ut(t.biasInitializer||this.DEFAULT_BIAS_INITIALIZER),this.unitForgetBias=t.unitForgetBias,this.kernelRegularizer=Gt(t.kernelRegularizer),this.recurrentRegularizer=Gt(t.recurrentRegularizer),this.biasRegularizer=Gt(t.biasRegularizer),this.kernelConstraint=ae(t.kernelConstraint),this.recurrentConstraint=ae(t.recurrentConstraint),this.biasConstraint=ae(t.biasConstraint),this.dropout=Mo([1,gs([0,t.dropout==null?0:t.dropout])]),this.recurrentDropout=Mo([1,gs([0,t.recurrentDropout==null?0:t.recurrentDropout])]),this.dropoutFunc=t.dropoutFunc,this.implementation=t.implementation,this.stateSize=[this.units,this.units],this.dropoutMask=null,this.recurrentDropoutMask=null}build(t){var e;t=Nt(t);const s=t[t.length-1];this.kernel=this.addWeight("kernel",[s,this.units*4],null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.recurrentKernel=this.addWeight("recurrent_kernel",[this.units,this.units*4],null,this.recurrentInitializer,this.recurrentRegularizer,!0,this.recurrentConstraint);let o;if(this.useBias){if(this.unitForgetBias){const r=this.biasInitializer,i=this.units;o=new(e=class extends un{apply(l,c){const u=r.apply([i]),h=new jd().apply([i]),d=r.apply([i*2]);return Nf(Nf(u,h),d)}},e.className="CustomInit",e)}else o=this.biasInitializer;this.bias=this.addWeight("bias",[this.units*4],null,o,this.biasRegularizer,!0,this.biasConstraint)}else this.bias=null;this.built=!0}call(t,e){return B(()=>{const s=e.training==null?!1:e.training;if(t=t,t.length!==3)throw new D(`LSTMCell expects 3 input Tensors (inputs, h, c), got ${t.length}.`);let o=t[1];const r=t[2];t=t[0],0<this.dropout&&this.dropout<1&&this.dropoutMask==null&&(this.dropoutMask=ys({ones:()=>ln(t),rate:this.dropout,training:s,count:4,dropoutFunc:this.dropoutFunc})),0<this.recurrentDropout&&this.recurrentDropout<1&&this.recurrentDropoutMask==null&&(this.recurrentDropoutMask=ys({ones:()=>ln(o),rate:this.recurrentDropout,training:s,count:4,dropoutFunc:this.dropoutFunc}));const i=this.dropoutMask,a=this.recurrentDropoutMask;let l,c,u,h;0<this.dropout&&this.dropout<1&&(t=F(t,i[0]));let d=On(t,this.kernel.read());0<this.recurrentDropout&&this.recurrentDropout<1&&(o=F(o,a[0])),d=J(d,On(o,this.recurrentKernel.read())),this.useBias&&(d=vn(d,this.bias.read()));const[p,f,m,g]=Xe(d,4,d.rank-1);l=this.recurrentActivation.apply(p),c=this.recurrentActivation.apply(f),u=J(F(c,r),F(l,this.activation.apply(m))),h=this.recurrentActivation.apply(g);const x=F(h,this.activation.apply(u));return[x,x,u]})}getConfig(){const t=super.getConfig(),e={units:this.units,activation:xs(this.activation),recurrentActivation:xs(this.recurrentActivation),useBias:this.useBias,kernelInitializer:jt(this.kernelInitializer),recurrentInitializer:jt(this.recurrentInitializer),biasInitializer:jt(this.biasInitializer),unitForgetBias:this.unitForgetBias,kernelRegularizer:Ot(this.kernelRegularizer),recurrentRegularizer:Ot(this.recurrentRegularizer),biasRegularizer:Ot(this.biasRegularizer),activityRegularizer:Ot(this.activityRegularizer),kernelConstraint:ie(this.kernelConstraint),recurrentConstraint:ie(this.recurrentConstraint),biasConstraint:ie(this.biasConstraint),dropout:this.dropout,recurrentDropout:this.recurrentDropout,implementation:this.implementation};return Object.assign(Object.assign({},t),e)}}$c.className="LSTMCell";X($c);class g0 extends Ts{constructor(t){t.implementation===0&&console.warn("`implementation=0` has been deprecated, and now defaults to `implementation=1`. Please update your layer call."),t.cell=new $c(t),super(t)}call(t,e){return B(()=>{this.cell.dropoutMask!=null&&(yt(this.cell.dropoutMask),this.cell.dropoutMask=null),this.cell.recurrentDropoutMask!=null&&(yt(this.cell.recurrentDropoutMask),this.cell.recurrentDropoutMask=null);const s=e==null?null:e.mask,o=e==null?null:e.training,r=e==null?null:e.initialState;return super.call(t,{mask:s,training:o,initialState:r})})}static fromConfig(t,e){return e.implmentation===0&&(e.implementation=1),new t(e)}}g0.className="LSTM";X(g0);class ap extends Cc{constructor(t){super(t),this.cells=t.cells}get stateSize(){const t=[];for(const e of this.cells.slice().reverse())Array.isArray(e.stateSize)?t.push(...e.stateSize):t.push(e.stateSize);return t}call(t,e){return B(()=>{t=t;let s=t.slice(1);const o=[];for(const a of this.cells.slice().reverse())Array.isArray(a.stateSize)?o.push(s.splice(0,a.stateSize.length)):o.push(s.splice(0,1));o.reverse();const r=[];let i;for(let a=0;a<this.cells.length;++a){const l=this.cells[a];s=o[a],a===0?i=[t[0]].concat(s):i=[i[0]].concat(s),i=l.call(i,e),r.push(i.slice(1))}s=[];for(const a of r.slice().reverse())s.push(...a);return[i[0]].concat(s)})}build(t){Tu(t)&&(t=t[0]),t=t;let e;this.cells.forEach((s,o)=>{Us(`RNNCell_${o}`,()=>{s.build(t),Array.isArray(s.stateSize)?e=s.stateSize[0]:e=s.stateSize,t=[t[0],e]})}),this.built=!0}getConfig(){const t=super.getConfig(),e=r=>({className:r.getClassName(),config:r.getConfig()}),o={cells:this.cells.map(e)};return Object.assign(Object.assign({},t),o)}static fromConfig(t,e,s={}){const o=[];for(const r of e.cells)o.push(Mn(r,s));return new t({cells:o})}get trainableWeights(){if(!this.trainable)return[];const t=[];for(const e of this.cells)t.push(...e.trainableWeights);return t}get nonTrainableWeights(){const t=[];for(const e of this.cells)t.push(...e.nonTrainableWeights);if(!this.trainable){const e=[];for(const s of this.cells)e.push(...s.trainableWeights);return e.concat(t)}return t}getWeights(){const t=[];for(const e of this.cells)t.push(...e.weights);return Eu(t)}setWeights(t){const e=[];for(const s of this.cells){const o=s.weights.length,r=t.splice(o);for(let i=0;i<s.weights.length;++i)e.push([s.weights[i],r[i]])}Qd(e)}}ap.className="StackedRNNCells";X(ap);function ys(n){const{ones:t,rate:e,training:s=!1,count:o=1,dropoutFunc:r}=n,i=()=>r!=null?r(t(),e):ab(t(),e),a=()=>zi(i,t,s);return!o||o<=1?Dn(a().clone()):Array(o).fill(void 0).map(a).map(c=>Dn(c.clone()))}var pA=function(n,t){var e={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&t.indexOf(s)<0&&(e[s]=n[s]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(n);o<s.length;o++)t.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(n,s[o])&&(e[s[o]]=n[s[o]]);return e};class x0 extends Ts{constructor(t){if(t.unroll)throw new xt("Unrolling is not possible with convolutional RNNs.");if(Array.isArray(t.cell))throw new xt("It is not possible at the moment to stack convolutional cells.");super(t),this.inputSpec=[new re({ndim:5})]}call(t,e){return B(()=>{if(this.cell.dropoutMask!=null&&(yt(this.cell.dropoutMask),this.cell.dropoutMask=null),this.cell.recurrentDropoutMask!=null&&(yt(this.cell.recurrentDropoutMask),this.cell.recurrentDropoutMask=null),e&&e.constants)throw new D("ConvRNN2D cell does not support constants");const s=e==null?null:e.mask,o=e==null?null:e.training,r=e==null?null:e.initialState;return super.call(t,{mask:s,training:o,initialState:r})})}computeOutputShape(t){let e=this.computeSingleOutputShape(t);return this.returnSequences||(e=[e[0],...e.slice(2)]),this.returnState&&(e=[e,...Array(2).fill([t[0],...e.slice(-3)])]),e}getInitialState(t){return B(()=>{const{stateSize:e}=this.cell,s=t.shape,o=this.computeSingleOutputShape(s),r=[o[0],...o.slice(2)],i=de(r);return Array.isArray(e)?Array(e.length).fill(i):[i]})}resetStates(t,e=!1){B(()=>{if(!this.stateful)throw new Nn("Cannot call resetStates() on an RNN Layer that is not stateful.");const s=this.inputSpec[0].shape,o=this.computeSingleOutputShape(s),r=[o[0],...o.slice(2)];if(s[0]==null)throw new D("If an RNN is stateful, it needs to know its batch size. Specify the batch size of your input tensors: \n- If using a Sequential model, specify the batch size by passing a `batchInputShape` option to your first layer.\n- If using the functional API, specify the batch size by passing a `batchShape` option to your Input layer.");if(this.getStates()==null)Array.isArray(this.cell.stateSize)?this.states_=this.cell.stateSize.map(()=>de(r)):this.states_=[de(r)];else if(t==null)yt(this.states_),this.keptStates!=null&&(yt(this.keptStates),this.keptStates=[]),Array.isArray(this.cell.stateSize)?this.states_=this.cell.stateSize.map(()=>de(r)):this.states_[0]=de(r);else{if(Array.isArray(t)||(t=[t]),t.length!==this.states_.length)throw new D(`Layer ${this.name} expects ${this.states_.length} state(s), but it received ${t.length} state value(s). Input received: ${t}`);e?this.keptStates.push(this.states_.slice()):yt(this.states_);for(let a=0;a<this.states_.length;++a){const l=t[a],c=r;if(!Et(l.shape,c))throw new D(`State ${a} is incompatible with layer ${this.name}: expected shape=${c}, received shape=${l.shape}`);this.states_[a]=l}}this.states_=this.states_.map(a=>Dn(a.clone()))})}computeSingleOutputShape(t){const{dataFormat:e,filters:s,kernelSize:o,padding:r,strides:i,dilationRate:a}=this.cell,l=e==="channelsFirst",c=t[l?3:2],u=t[l?4:3],h=wn(c,o[0],r,i[0],a[0]),d=wn(u,o[1],r,i[1],a[1]);return[...t.slice(0,2),...l?[s,h,d]:[h,d,s]]}}x0.className="ConvRNN2D";class lp extends $c{constructor(t){const{filters:e,kernelSize:s,strides:o,padding:r,dataFormat:i,dilationRate:a}=t;super(Object.assign(Object.assign({},t),{units:e})),this.filters=e,pe(this.filters,"filters"),this.kernelSize=Eo(s,2,"kernelSize"),this.kernelSize.forEach(l=>pe(l,"kernelSize")),this.strides=Eo(o||1,2,"strides"),this.strides.forEach(l=>pe(l,"strides")),this.padding=r||"valid",Je(this.padding),this.dataFormat=i||"channelsLast",te(this.dataFormat),this.dilationRate=Eo(a||1,2,"dilationRate"),this.dilationRate.forEach(l=>pe(l,"dilationRate"))}build(t){var e;t=Nt(t);const s=this.dataFormat==="channelsFirst"?1:t.length-1;if(t[s]==null)throw new D(`The channel dimension of the input should be defined. Found ${t[s]}`);const o=t[s],r=4,i=this.kernelSize.concat([o,this.filters*r]);this.kernel=this.addWeight("kernel",i,null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint);const a=this.kernelSize.concat([this.filters,this.filters*r]);if(this.recurrentKernel=this.addWeight("recurrent_kernel",a,null,this.recurrentInitializer,this.recurrentRegularizer,!0,this.recurrentConstraint),this.useBias){let l;if(this.unitForgetBias){const c=this.biasInitializer,u=this.filters;l=new(e=class extends un{apply(d,p){const f=c.apply([u]),m=sn([u]),g=c.apply([u*2]);return Hd([f,m,g])}},e.className="CustomInit",e)}else l=this.biasInitializer;this.bias=this.addWeight("bias",[this.filters*r],null,l,this.biasRegularizer,!0,this.biasConstraint)}this.built=!0}call(t,e){return B(()=>{if(t.length!==3)throw new D(`ConvLSTM2DCell expects 3 input Tensors (inputs, h, c), got ${t.length}.`);const s=e.training||!1,o=t[0],r=t[1],i=t[2],a=4;0<this.dropout&&this.dropout<1&&this.dropoutMask==null&&(this.dropoutMask=ys({ones:()=>ln(o),rate:this.dropout,training:s,count:a,dropoutFunc:this.dropoutFunc}));const l=this.dropoutMask,c=(q,K,Y)=>!K||!K[Y]?q:F(K[Y],q);let u=c(o,l,0),h=c(o,l,1),d=c(o,l,2),p=c(o,l,3);0<this.recurrentDropout&&this.recurrentDropout<1&&this.recurrentDropoutMask==null&&(this.recurrentDropoutMask=ys({ones:()=>ln(r),rate:this.recurrentDropout,training:s,count:a,dropoutFunc:this.dropoutFunc}));const f=this.recurrentDropoutMask;let m=c(r,f,0),g=c(r,f,1),x=c(r,f,2),b=c(r,f,3);const w=3,[y,C,I,N]=Xe(this.kernel.read(),a,w),[T,k,S,$]=this.useBias?Xe(this.bias.read(),a):[null,null,null,null];u=this.inputConv(u,y,T,this.padding),h=this.inputConv(h,C,k,this.padding),d=this.inputConv(d,I,S,this.padding),p=this.inputConv(p,N,$,this.padding);const[R,A,O,M]=Xe(this.recurrentKernel.read(),a,w);m=this.recurrentConv(m,R),g=this.recurrentConv(g,A),x=this.recurrentConv(x,O),b=this.recurrentConv(b,M);const z=this.recurrentActivation.apply(J(u,m)),G=this.recurrentActivation.apply(J(h,g)),V=J(F(G,i),F(z,this.activation.apply(J(d,x)))),U=F(this.recurrentActivation.apply(J(p,b)),this.activation.apply(V));return[U,U,V]})}getConfig(){const t=super.getConfig(),{units:e}=t,s=pA(t,["units"]),o={filters:this.filters,kernelSize:this.kernelSize,padding:this.padding,dataFormat:this.dataFormat,dilationRate:this.dilationRate,strides:this.strides};return Object.assign(Object.assign({},s),o)}inputConv(t,e,s,o){const r=Js(t,e,this.strides,o||"valid",this.dataFormat==="channelsFirst"?"NCHW":"NHWC",this.dilationRate);return s?vn(r,s,this.dataFormat):r}recurrentConv(t,e){return Js(t,e,1,"same",this.dataFormat==="channelsFirst"?"NCHW":"NHWC")}}lp.className="ConvLSTM2DCell";X(lp);class b0 extends x0{constructor(t){const e=new lp(t);super(Object.assign(Object.assign({},t),{cell:e}))}static fromConfig(t,e){return new t(e)}}b0.className="ConvLSTM2D";X(b0);class cp extends $t{constructor(t){super(t),this.rate=Math.max(Math.min(t.rate,1),0),this.noiseShape=t.noiseShape,this.seed=t.seed,this.supportsMasking=!0}getNoiseShape(t){if(this.noiseShape==null)return this.noiseShape;const e=t.shape,s=[];for(let o=0;o<this.noiseShape.length;++o)s.push(this.noiseShape[o]==null?e[o]:this.noiseShape[o]);return s}call(t,e){return B(()=>{this.invokeCallHook(t,e);const s=ft(t);if(0<this.rate&&this.rate<1){const o=e.training==null?!1:e.training,r=this.getNoiseShape(s);return zi(()=>ab(s,this.rate,r,this.seed),()=>s,o)}return t})}getConfig(){const t={rate:this.rate,noiseShape:this.noiseShape,seed:this.seed},e=super.getConfig();return Object.assign(t,e),t}dispose(){return super.dispose()}}cp.className="Dropout";X(cp);class y0 extends cp{constructor(t){super(t),this.inputSpec=[{ndim:3}]}getNoiseShape(t){const e=t.shape;return[e[0],1,e[2]]}}y0.className="SpatialDropout1D";X(y0);class w0 extends $t{constructor(t){if(super(t),this.activation=null,this.useBias=!0,this.kernel=null,this.bias=null,this.DEFAULT_KERNEL_INITIALIZER="glorotNormal",this.DEFAULT_BIAS_INITIALIZER="zeros",t.batchInputShape==null&&t.inputShape==null&&t.inputDim!=null){let e=null;t.batchSize!=null&&(e=t.batchSize),this.batchInputShape=[e,t.inputDim]}this.units=t.units,pe(this.units,"units"),this.activation=bs(t.activation),t.useBias!=null&&(this.useBias=t.useBias),this.kernelInitializer=Ut(t.kernelInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.biasInitializer=Ut(t.biasInitializer||this.DEFAULT_BIAS_INITIALIZER),this.kernelConstraint=ae(t.kernelConstraint),this.biasConstraint=ae(t.biasConstraint),this.kernelRegularizer=Gt(t.kernelRegularizer),this.biasRegularizer=Gt(t.biasRegularizer),this.activityRegularizer=Gt(t.activityRegularizer),this.supportsMasking=!0,this.inputSpec=[{minNDim:2}]}build(t){t=Nt(t);const e=t[t.length-1];this.kernel==null&&(this.kernel=this.addWeight("kernel",[e,this.units],null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.useBias&&(this.bias=this.addWeight("bias",[this.units],null,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint))),this.inputSpec=[{minNDim:2,axes:{[-1]:e}}],this.built=!0}computeOutputShape(t){t=Nt(t);const e=t.slice();return e[e.length-1]=this.units,e}call(t,e){return B(()=>{this.invokeCallHook(t,e);const s=ft(t),o=tb(this.activation.getClassName());let r;return o!=null?r=On(s,this.kernel.read(),o,this.bias?this.bias.read():null):(r=On(s,this.kernel.read()),this.bias!=null&&(r=vn(r,this.bias.read())),this.activation!=null&&(r=this.activation.apply(r))),r})}getConfig(){const t={units:this.units,activation:xs(this.activation),useBias:this.useBias,kernelInitializer:jt(this.kernelInitializer),biasInitializer:jt(this.biasInitializer),kernelRegularizer:Ot(this.kernelRegularizer),biasRegularizer:Ot(this.biasRegularizer),activityRegularizer:Ot(this.activityRegularizer),kernelConstraint:ie(this.kernelConstraint),biasConstraint:ie(this.biasConstraint)},e=super.getConfig();return Object.assign(t,e),t}}w0.className="Dense";X(w0);class C0 extends $t{constructor(t){t=t||{},super(t),this.inputSpec=[{minNDim:3}],this.dataFormat=t.dataFormat}computeOutputShape(t){t=Nt(t);for(const e of t.slice(1))if(e==null)throw new D(`The shape of the input to "Flatten" is not fully defined (got ${t.slice(1)}). Make sure to pass a complete "input_shape" or "batch_input_shape" argument to the first layer in your model.`);return[t[0],fs(t,1)]}call(t,e){return B(()=>{this.invokeCallHook(t,e);let s=ft(t);if(this.dataFormat==="channelsFirst"&&s.rank>1){const o=[0];for(let r=2;r<s.rank;++r)o.push(r);o.push(1),s=vt(s,o)}return GE(s)})}getConfig(){const t={};this.dataFormat!=null&&(t.dataFormat=this.dataFormat);const e=super.getConfig();return Object.assign(t,e),t}}C0.className="Flatten";X(C0);class $0 extends $t{constructor(t){super(t),this.supportsMasking=!0,this.activation=bs(t.activation)}call(t,e){return B(()=>{this.invokeCallHook(t,e);const s=ft(t);return this.activation.apply(s)})}getConfig(){const t={activation:xs(this.activation)},e=super.getConfig();return Object.assign(t,e),t}}$0.className="Activation";X($0);class I0 extends $t{constructor(t){super(t),this.n=t.n,this.inputSpec=[{ndim:2}]}computeOutputShape(t){return[t[0],this.n,t[1]]}call(t,e){return B(()=>(t=ft(t),WE(t,this.n)))}getConfig(){const t={n:this.n},e=super.getConfig();return Object.assign(t,e),t}}I0.className="RepeatVector";X(I0);class v0 extends $t{constructor(t){super(t),this.targetShape=t.targetShape;for(let e=0;e<this.targetShape.length;++e)this.isUnknown(this.targetShape[e])&&(this.targetShape[e]=null)}isUnknown(t){return t<0||t==null}fixUnknownDimension(t,e){const s="Total size of new array must be unchanged.",o=e.slice();let r=1,i=null;for(let l=0;l<o.length;++l){const c=o[l];if(this.isUnknown(c))if(i===null)i=l;else throw new D("Can only specifiy one unknown dimension.");else r*=c}const a=fs(t);if(i!==null){if(r===0||a%r!==0)throw new D(s);o[i]=a/r}else if(a!==r)throw new D(s);return o}computeOutputShape(t){let e=!1;for(let s=0;s<t.length;++s)if(this.isUnknown(t[s])){e=!0;break}return e?t.slice(0,1).concat(this.targetShape):t.slice(0,1).concat(this.fixUnknownDimension(t.slice(1),this.targetShape))}call(t,e){return B(()=>{this.invokeCallHook(t,e);const s=ft(t),o=s.shape,r=o.slice(0,1).concat(this.fixUnknownDimension(o.slice(1),this.targetShape));return L(s,r)})}getConfig(){const t={targetShape:this.targetShape},e=super.getConfig();return Object.assign(t,e),t}}v0.className="Reshape";X(v0);class k0 extends $t{constructor(t){if(super(t),t.dims==null)throw new Error("Required configuration field `dims` is missing during Permute constructor call.");if(!Array.isArray(t.dims))throw new Error(`Permute constructor requires \`dims\` to be an Array, but received ${t.dims} instead.`);const e=Cn(1,t.dims.length+1);if(!Et(t.dims.slice().sort(),e))throw new Error("Invalid permutation `dims`: "+JSON.stringify(t.dims)+" `dims` must contain consecutive integers starting from 1.");this.dims=t.dims,this.dimsIncludingBatch=[0].concat(this.dims),this.inputSpec=[new re({ndim:this.dims.length+1})]}computeOutputShape(t){t=Nt(t);const e=t.slice();return this.dims.forEach((s,o)=>{e[o+1]=t[s]}),e}call(t,e){return vt(ft(t),this.dimsIncludingBatch)}getConfig(){const t={dims:this.dims},e=super.getConfig();return Object.assign(t,e),t}}k0.className="Permute";X(k0);class S0 extends $t{constructor(t){super(t??{}),this.supportsMasking=!0,t!=null?this.maskValue=t.maskValue==null?0:t.maskValue:this.maskValue=0}computeOutputShape(t){return t}getConfig(){const t=super.getConfig(),e={maskValue:this.maskValue};return Object.assign(e,t),e}computeMask(t,e){const s=ft(t);return yu(Fa(s,this.maskValue),-1)}call(t,e){return B(()=>{this.invokeCallHook(t,e);const s=ft(t),i=yu(Fa(s,this.maskValue),-1,!0);return F(s,st(i,s.dtype))})}}S0.className="Masking";X(S0);class N0 extends $t{constructor(t){if(super(t),this.embeddings=null,this.DEFAULT_EMBEDDINGS_INITIALIZER="randomUniform",t.batchInputShape==null&&t.inputShape==null){let e=null;t.batchSize!=null&&(e=t.batchSize),t.inputLength==null?this.batchInputShape=[e,null]:this.batchInputShape=[e].concat(At(t.inputLength))}this.inputDim=t.inputDim,pe(this.inputDim,"inputDim"),this.outputDim=t.outputDim,pe(this.outputDim,"outputDim"),this.embeddingsInitializer=Ut(t.embeddingsInitializer||this.DEFAULT_EMBEDDINGS_INITIALIZER),this.embeddingsRegularizer=Gt(t.embeddingsRegularizer),this.activityRegularizer=Gt(t.activityRegularizer),this.embeddingsConstraint=ae(t.embeddingsConstraint),this.maskZero=t.maskZero,this.supportsMasking=t.maskZero,this.inputLength=t.inputLength}build(t){this.embeddings=this.addWeight("embeddings",[this.inputDim,this.outputDim],this.dtype,this.embeddingsInitializer,this.embeddingsRegularizer,!0,this.embeddingsConstraint),this.built=!0}warnOnIncompatibleInputShape(t){}computeMask(t,e){return B(()=>this.maskZero?(t=ft(t),Fa(t,kt(t))):null)}computeOutputShape(t){if(t=Nt(t),this.inputLength==null)return[...t,this.outputDim];const e=At(this.inputLength);if(e.length!==t.length-1)throw new D(`"inputLength" is ${this.inputLength}, but received input shape has shape ${t}`);{let s=0;for(let o=0;o<e.length;++o){const r=e[o],i=t[o+1];if(r!=null&&i!=null&&r!==i)throw new D(`"inputLength" is ${this.inputLength}, but received input shape has shape ${t}`);r==null&&(e[s]=i),s++}}return[t[0],...e,this.outputDim]}call(t,e){return B(()=>{this.invokeCallHook(t,e);let s=ft(t);s.dtype!=="int32"&&(s=_n(s,"int32"));const o=ib(this.embeddings.read(),L(s,[s.size]));return L(o,Nt(this.computeOutputShape(s.shape)))})}getConfig(){const t={inputDim:this.inputDim,outputDim:this.outputDim,embeddingsInitializer:jt(this.embeddingsInitializer),embeddingsRegularizer:Ot(this.embeddingsRegularizer),activityRegularizer:Ot(this.activityRegularizer),embeddingsConstraint:ie(this.embeddingsConstraint),maskZero:this.maskZero,inputLength:this.inputLength},e=super.getConfig();return Object.assign(t,e),t}}N0.className="Embedding";X(N0);class ho extends $t{constructor(t){super(t||{}),this.supportsMasking=!0}mergeFunction(t){throw new xt}computeElementwiseOpOutputShape(t,e){if(t==null||e==null)return null;if(t.length<e.length)return this.computeElementwiseOpOutputShape(e,t);if(e.length===0)return t;const s=t.slice(0,t.length-e.length);for(let o=0;o<e.length;++o){const r=t[t.length-e.length+o],i=e[o];if(r==null||i==null||r<0||i<0)s.push(null);else if(r===1)s.push(i);else if(i===1)s.push(r);else{if(r!==i)throw new D("Operands could not be broadcast together with shapes "+JSON.stringify(t)+" "+JSON.stringify(e));s.push(r)}}return s}build(t){if(Array.isArray(t)&&!Array.isArray(t[0])&&(t=[Nt(t)]),t=t,t.length<2)throw new D(`A merge layer should be called on an Array of at least 2 inputs. Got ${t.length} input(s).`);let e=[];for(const r of t)r!=null&&r[0]!==null&&e.push(r[0]);if(e=ps(e),e.length>1)throw new D(`Can not merge tensors with different batch sizes. Got tensors with shapes: ${JSON.stringify(t)}.`);let s=t[0]==null?null:t[0].slice(1);for(let r=1;r<t.length;++r){const i=t[r]==null?null:t[r].slice(1);s=this.computeElementwiseOpOutputShape(s,i)}const o=t.map(r=>r.length);t.indexOf(null)===-1&&ps(o).length===1?this.reshapeRequired=!1:this.reshapeRequired=!0}call(t,e){return B(()=>{if(t=t,this.reshapeRequired){const s=[],o=t.map(r=>r.rank);if(o.indexOf(null)===-1){const r=gs(o);for(let i of t){const a=i.rank;for(let l=0;l<r-a;++l)i=Li(i,1);s.push(i)}return this.mergeFunction(s)}else{let r=!1;for(const l of t){const c=l.rank;if(c==null){const u=l.shape,h=u[0],d=u.slice(1).concat([h]);let p=L(l,[h].concat(fs(u.slice(1))));p=vt(p,[1,0]),p=L(p,d),s.push(p),r=!0}else if(c>1){const u=Cn(1,c).concat([0]);s.push(vt(l,u)),r=!0}else s.push(l)}let i=this.mergeFunction(s);const a=i.rank;if(r){if(a==null){const l=i.shape,c=l.length,u=l[c-1],h=[u].concat(l.slice(0,l.length-1));i=L(vt(L(i,[-1,u]),[1,0]),h)}else if(a>1){const l=[a-1].concat(Cn(0,a-1));i=vt(i,l)}}return i}}else return this.mergeFunction(t)})}computeOutputShape(t){t=t;let e;t[0]==null?e=null:e=t[0].slice(1);for(let o=1;o<t.length;++o){const r=t[o]==null?null:t[o].slice(1);e=this.computeElementwiseOpOutputShape(e,r)}let s=[];for(const o of t)o!=null&&o[0]!==null&&s.push(o[0]);return s=ps(s),s.length===1?e=s.concat(e):e=[null].concat(e),e}computeMask(t,e){return B(()=>{if(e==null)return null;if(!Array.isArray(e))throw new D("`mask` should be an Array");if(!Array.isArray(t))throw new D("`inputs` should be an Array");if(e.length!==t.length)throw new D(`The Array 'inputs' and 'mask' are expected to have the same length, but have different lengths (${t.length} vs ${e.length})`);if(e.every(o=>o==null))return null;e=e.map(o=>o==null?o:_e(o,0));let s=e[0];for(let o=1;o<e.length-1;++o)s=Xn(s,e[o]);return s})}}class T0 extends ho{constructor(t){super(t)}mergeFunction(t){return B(()=>{let e=t[0].clone();for(let s=1;s<t.length;++s)e=J(e,t[s]);return e})}}T0.className="Add";X(T0);class E0 extends ho{constructor(t){super(t)}mergeFunction(t){return B(()=>{let e=t[0].clone();for(let s=1;s<t.length;++s)e=F(e,t[s]);return e})}}E0.className="Multiply";X(E0);class R0 extends ho{constructor(t){super(t)}mergeFunction(t){return B(()=>{let e=t[0].clone();for(let s=1;s<t.length;++s)e=J(e,t[s]);return F(1/t.length,e)})}}R0.className="Average";X(R0);class A0 extends ho{constructor(t){super(t)}mergeFunction(t){return B(()=>{let e=t[0];for(let s=1;s<t.length;++s)e=Ss(e,t[s]);return e})}}A0.className="Maximum";X(A0);class D0 extends ho{constructor(t){super(t)}mergeFunction(t){return B(()=>{let e=t[0];for(let s=1;s<t.length;++s)e=$r(e,t[s]);return e})}}D0.className="Minimum";X(D0);class F0 extends ho{constructor(t){super(t),this.DEFAULT_AXIS=-1,t==null&&(t={}),this.axis=t.axis==null?this.DEFAULT_AXIS:t.axis,this.supportsMasking=!0,this.reshapeRequired=!1}build(t){if(!(Array.isArray(t)&&Array.isArray(t[0]))||t.length===1)throw new D("A `Concatenate` layer should be called on a list of at least 2 inputs");t=t;let e=!0;for(const o of t)if(o!=null){e=!1;break}if(e)return;const s=[];for(let o=0;o<t.length;++o){const r=t[o].slice();r.splice(this.axis,1);let i=!1;for(const a of s)if(Et(a,r)){i=!0;break}i||s.push(r)}if(s.length>1)throw new D("A `Concatenate` layer requires inputs with matching shapes except for the concat axis. Got input shapes: "+JSON.stringify(t))}mergeFunction(t){return B(()=>Hd(t,this.axis))}computeOutputShape(t){if(!(Array.isArray(t)&&Array.isArray(t[0])))throw new D("A `Concatenate` layer should be called on a list of inputs.");const e=t,s=e[0].slice(),o=this.axis<0?s.length+this.axis:this.axis;for(const r of e.slice(1)){if(s[o]==null||r[o]==null){s[o]=null;break}s[o]+=r[o]}return s}computeMask(t,e){if(e==null)return null;if(!Array.isArray(e))throw new D("`mask` should be an array for Concatenate");if(!Array.isArray(t))throw new D("`inputs` should be an array for Concatenate");if(e.length!==t.length)throw new D(`Mismatch in the length of mask (${e.length}) and the legnth of inputs (${t.length})`);return B(()=>{let s=!0;if(e.forEach(i=>{if(i!=null){s=!1;return}}),s)return null;const o=[];for(let i=0;i<t.length;++i)e[i]==null?o.push(st(ln(t[i]),"bool")):e[i].rank<t[i].rank?o.push(_e(e[i],-1)):o.push(e[i]);const r=Me(o,this.axis);return Dg(r,-1,!1)})}getConfig(){const t={axis:this.axis},e=super.getConfig();return Object.assign(t,e),t}}F0.className="Concatenate";X(F0);function ur(n,t){for(;n<0;)n+=t;return n}function fA(n,t,e){if(n.shape.length>3||t.shape.length>3)throw new xt("batchDot is not implemented for tensors of 4D or higher rank yet");if(v(n.shape.length>=2,()=>`batchDot requires the rank of x to be >= 2, but got ${n.shape.length}`),v(n.shape.length>=2,()=>`batchDot requires the rank of y to be >= 2, but got ${t.shape.length}`),typeof e=="number"&&(e=[e,e]),n.dtype==="complex64"||t.dtype==="complex64")throw new xt("batchDot is not implemented for complex64-type Tensors yet.");const s=n.shape.length,o=t.shape.length;e==null&&(e=[s-1,o-2]);const r=e;return B(()=>{let i;if(s>o){i=s-o;const l=[];for(let c=0;c<i;++c)l.push(1);t=L(t,t.shape.concat(l))}else if(o>s){i=o-s;const l=[];for(let c=0;c<i;++c)l.push(1);n=L(n,n.shape.concat(l))}else i=0;let a;if(n.shape.length===2&&t.shape.length===2)r[0]===r[1]?a=ct(F(n,t),r[0]):a=ct(F(vt(n,[1,0]),t),r[1]);else{const l=r[0]!==n.shape.length-1,c=r[1]===t.shape.length-1;a=It(n,t,l,c)}if(i>0){let l;s>o?l=s+o-3:l=s-1;const c=[];for(let u=l;u<l+i;++u)c.push(u);a=Ai(a,c)}return a.shape.length===1&&(a=_e(a,1)),a})}class _0 extends ho{constructor(t){super(t),this.axes=t.axes,this.normalize=t.normalize==null?!1:t.normalize,this.supportsMasking=!0,this.reshapeRequired=!1}build(t){v(Array.isArray(t)&&t.length===2&&Array.isArray(t[0])&&Array.isArray(t[1]),()=>"A `Dot` layer should be called on a list of exactly 2 inputs.");const e=t[0],s=t[1];if(e.length>3||s.length>3)throw new xt("Dot layer does not support tensors of 4D or higher rank yet.");const o=this.interpretAxes(e,s);if(e[o[0]]!==s[o[1]])throw new D(`Dimension incompatibility: ${e[o[0]]} !== ${s[o[1]]}`)}mergeFunction(t){if(t.length!==2)throw new D(`A \`Dot\` layer must be called on exactly 2 inputs, but received ${t.length} input(s).`);let e=t[0],s=t[1],o;return Array.isArray(this.axes)?o=this.axes.map((r,i)=>ur(r,t[i].shape.length)):o=[ur(this.axes,e.shape.length),ur(this.axes,s.shape.length)],this.normalize&&(e=Ba(e,o[0]),s=Ba(s,o[1])),fA(e,s,o)}interpretAxes(t,e){let s;return Array.isArray(this.axes)?s=this.axes:s=[ur(this.axes,t.length),ur(this.axes,e.length)],s}computeOutputShape(t){v(Array.isArray(t)&&t.length===2&&Array.isArray(t[0])&&Array.isArray(t[1]),()=>"A `Dot` layer should be called on a list of exactly 2 inputs.");const e=t[0].slice(),s=t[1].slice();if(e.length>3||s.length>3)throw new xt("Dot layer does not support tensors of 4D or higher rank yet.");const o=this.interpretAxes(e,s);e.splice(o[0],1),s.splice(o[1],1),s.splice(0,1);const r=e.concat(s);return r.length===1&&r.push(1),r}computeMask(t,e){return null}getConfig(){const t={axes:this.axes,normalize:this.normalize},e=super.getConfig();return Object.assign(t,e),t}}_0.className="Dot";X(_0);class O0 extends $t{constructor(t){super(t),this.supportsMasking=!0,this.stddev=t.stddev}computeOutputShape(t){return t}getConfig(){const t=super.getConfig(),e={stddev:this.stddev};return Object.assign(e,t),e}call(t,e){return B(()=>{this.invokeCallHook(t,e);const s=ft(t);return zi(()=>J(mc(s.shape,0,this.stddev),s),()=>s,e.training||!1)})}}O0.className="GaussianNoise";X(O0);class M0 extends $t{constructor(t){super(t),this.supportsMasking=!0,this.rate=t.rate}computeOutputShape(t){return t}getConfig(){const t=super.getConfig(),e={rate:this.rate};return Object.assign(e,t),e}call(t,e){return B(()=>{this.invokeCallHook(t,e);const s=ft(t);return this.rate>0&&this.rate<1?zi(()=>{const r=Math.sqrt(this.rate/(1-this.rate));return F(s,mc(s.shape,1,r))},()=>s,e.training||!1):s})}}M0.className="GaussianDropout";X(M0);class L0 extends $t{constructor(t){super(t),this.supportsMasking=!0,this.rate=t.rate,this.noiseShape=t.noiseShape}_getNoiseShape(t){return this.noiseShape||ft(t).shape}computeOutputShape(t){return t}getConfig(){const t=super.getConfig(),e={rate:this.rate};return Object.assign(e,t),e}call(t,e){return B(()=>{if(this.rate<1&&this.rate>0){const s=this._getNoiseShape(t);return zi(()=>{const r=ft(t),a=-1.6732632423543772*1.0507009873554805;let l=ao(Ri(s),this.rate);l=_n(l,"float32");const c=((1-this.rate)*(1+this.rate*a**2))**-.5,u=-c*a*this.rate,h=J(F(r,l),F(J(l,-1),a));return J(F(h,c),u)},()=>ft(t),e.training||!1)}return t})}}L0.className="AlphaDropout";X(L0);function Nr(n,t,e,s,o,r=.001){let i;if(n.rank===2)i=MI(n,t,e,s,o,r);else if(n.rank===3)i=PI(n,t,e,s,o,r);else if(n.rank===4)i=BI(n,t,e,s,o,r);else throw new xt(`batchNormalization is not implemented for array of rank ${n.rank} yet`);return i}function mA(n,t,e,s,o=.001){return B(()=>{const r=Jh(n,s),i=r.mean,a=r.variance;return[Nr(n,i,a,e,t,o),i,a]})}function gA(n,t,e,s,o=.001){return B(()=>{const r=Jh(n,s),i=r.mean,a=r.variance,l=[];for(const f of Cn(0,n.rank))s.indexOf(f)!==-1?l.push(1):l.push(n.shape[f]);const c=L(i,l),u=L(a,l),h=t==null?null:L(t,l),d=e==null?null:L(e,l);return[Nr(n,c,u,d,h,o),i,a]})}function xA(n,t,e,s,o=.001){return Et(s.slice().sort(),Cn(0,n.rank-1))?mA(n,t,e,s,o):gA(n,t,e,s,o)}class P0 extends $t{constructor(t){t==null&&(t={}),super(t),this.supportsMasking=!0,this.axis=t.axis==null?-1:t.axis,this.momentum=t.momentum==null?.99:t.momentum,this.epsilon=t.epsilon==null?.001:t.epsilon,this.center=t.center==null?!0:t.center,this.scale=t.scale==null?!0:t.scale,this.betaInitializer=Ut(t.betaInitializer||"zeros"),this.gammaInitializer=Ut(t.gammaInitializer||"ones"),this.movingMeanInitializer=Ut(t.movingMeanInitializer||"zeros"),this.movingVarianceInitializer=Ut(t.movingVarianceInitializer||"ones"),this.betaConstraint=ae(t.betaConstraint),this.gammaConstraint=ae(t.gammaConstraint),this.betaRegularizer=Gt(t.betaRegularizer),this.gammaRegularizer=Gt(t.gammaRegularizer)}build(t){t=Nt(t);const e=this.axis>=0?this.axis:this.axis+t.length,s=t[e];if(s==null)throw new D(`Axis ${e} of input tensor should have a defined dimension but the layer received an input with shape ${JSON.stringify(t)}.`);this.inputSpec=[new re({ndim:t.length,axes:{[e]:s}})];const o=[s];this.scale&&(this.gamma=this.addWeight("gamma",o,null,this.gammaInitializer,this.gammaRegularizer,!0,this.gammaConstraint)),this.center&&(this.beta=this.addWeight("beta",o,null,this.betaInitializer,this.betaRegularizer,!0,this.betaConstraint)),this.movingMean=this.addWeight("moving_mean",o,null,this.movingMeanInitializer,null,!1),this.movingVariance=this.addWeight("moving_variance",o,null,this.movingVarianceInitializer,null,!1),this.built=!0}call(t,e){return B(()=>{const s=e.training==null?!1:e.training,o=ft(t),r=o.shape,i=r.length,a=Cn(0,i),l=this.axis>=0?this.axis:this.axis+i;a.splice(l,1);const c=no(1,i);c[l]=r[l];const u=a.slice();u.sort();const h=!Et(u,Cn(0,i).slice(0,i-1)),d=()=>{if(h){const b=L(this.movingMean.read(),c),w=L(this.movingVariance.read(),c),y=this.center?L(this.beta.read(),c):null,C=this.scale?L(this.gamma.read(),c):null;return Nr(o,b,w,y,C,this.epsilon)}else return Nr(o,this.movingMean.read(),this.movingVariance.read(),this.beta==null?null:this.beta.read(),this.gamma==null?null:this.gamma.read(),this.epsilon)};if(!s)return d();const[p,f,m]=xA(o,this.gamma.read(),this.beta.read(),a,this.epsilon),g=(b,w,y)=>{B(()=>{const C=1-y,I=b.read(),N=F(pt(I,w),C);b.write(pt(I,N))})};return g(this.movingMean,f,this.momentum),g(this.movingVariance,m,this.momentum),p})}getConfig(){const t={axis:this.axis,momentum:this.momentum,epsilon:this.epsilon,center:this.center,scale:this.scale,betaInitializer:jt(this.betaInitializer),gammaInitializer:jt(this.gammaInitializer),movingMeanInitializer:jt(this.movingMeanInitializer),movingVarianceInitializer:jt(this.movingVarianceInitializer),betaRegularizer:Ot(this.betaRegularizer),gammaRegularizer:Ot(this.gammaRegularizer),betaConstraint:ie(this.betaConstraint),gammaConstraint:ie(this.gammaConstraint)},e=super.getConfig();return Object.assign(t,e),t}}P0.className="BatchNormalization";X(P0);class z0 extends $t{constructor(t){if(t==null&&(t={}),super(t),this.axis=t.axis==null?-1:t.axis,typeof this.axis=="number"){if(!Number.isInteger(this.axis))throw new Error(`Expected axis to be an integer, but received ${this.axis}`)}else if(Array.isArray(this.axis)){for(const e of this.axis)if(!Number.isInteger(e))throw new Error(`Expected axis to be an array of integers, but received ${JSON.stringify(this.axis)}`)}else throw new Error(`Expected axis to be an integer or an array of integers, but received ${JSON.stringify(this.axis)}`);this.epsilon=t.epsilon==null?.001:t.epsilon,this.center=t.center==null?!0:t.center,this.scale=t.scale==null?!0:t.scale,this.betaInitializer=Ut(t.betaInitializer||"zeros"),this.gammaInitializer=Ut(t.gammaInitializer||"ones"),this.betaRegularizer=Gt(t.betaRegularizer),this.gammaRegularizer=Gt(t.gammaRegularizer),this.supportsMasking=!0}build(t){t=Nt(t);const e=t.length;typeof this.axis=="number"&&(this.axis=[this.axis]);for(let r=0;r<this.axis.length;++r)this.axis[r]<0&&(this.axis[r]+=e);for(const r of this.axis)if(r<0||r>=e)throw new Error(`Invalid axis: ${r}`);if(this.axis.length!==ps(this.axis).length)throw new Error(`Found duplicate axes in: ${this.axis}`);const s=this.axis.map(r=>t[r]),o=!0;this.scale?this.gamma=this.addWeight("gamma",s,"float32",this.gammaInitializer,this.gammaRegularizer,o):this.gamma=null,this.center?this.beta=this.addWeight("beta",s,"float32",this.betaInitializer,this.betaRegularizer,o):this.beta=null,this.built=!0}call(t,e){const s=ft(t),o=s.shape,r=o.length;return B(()=>{let{mean:a,variance:l}=Jh(s,this.axis,!0);const c=no(1,r);for(const m of this.axis)c[m]=o[m];const u=m=>m!=null&&m.shape.length!==r?L(m,c):m;let h=this.scale?u(this.gamma.read()):null,d=this.center?u(this.beta.read()):null;const p=[],f=[];for(let m=0;m<r;++m)this.axis.indexOf(m)!==-1?(p.push(o[m]),f.push(1)):(p.push(1),f.push(o[m]));return a=xn(a,p),l=xn(l,p),h!=null&&(h=xn(h,f)),d!=null&&(d=xn(d,f)),Nr(s,a,l,d,h,this.epsilon)})}getConfig(){const t={axis:this.axis,epsilon:this.epsilon,center:this.center,scale:this.scale,betaInitializer:jt(this.betaInitializer),gammaInitializer:jt(this.gammaInitializer),betaRegularizer:Ot(this.betaRegularizer),gammaRegularizer:Ot(this.gammaRegularizer)},e=super.getConfig();return Object.assign(t,e),t}}z0.className="LayerNormalization";X(z0);function bA(n,t,e){return B(()=>{if(n.rank!==4)throw new D(`temporalPadding expects input tensor to be 4-D, but received a ${n.rank}-D tensor.`);if(t==null&&(t=[[1,1],[1,1]]),t.length!==2||t[0].length!==2||t[1].length!==2)throw new D("spatial2dPadding expects `padding` to be an Array of two Arrays, each of which is an Array of two integers.");if(e==null&&(e=$n()),e!=="channelsLast"&&e!=="channelsFirst")throw new D(`Unknown data format: ${e}. Supported data formats are 'channelsLast' and 'channelsFirst.`);let s;return e==="channelsFirst"?s=[[0,0],[0,0],t[0],t[1]]:s=[[0,0],t[0],t[1],[0,0]],Qh(n,s)})}class B0 extends $t{constructor(t){if(t==null&&(t={}),super(t),this.dataFormat=t.dataFormat==null?$n():t.dataFormat,t.padding==null)this.padding=[[1,1],[1,1]];else if(typeof t.padding=="number")this.padding=[[t.padding,t.padding],[t.padding,t.padding]];else{if(t.padding=t.padding,t.padding.length!==2)throw new D(`ZeroPadding2D expects padding to be a length-2 array, but received a length-${t.padding.length} array.`);let e,s;if(typeof t.padding[0]=="number")e=[t.padding[0],t.padding[0]],s=[t.padding[1],t.padding[1]];else{if(t.padding=t.padding,t.padding[0].length!==2)throw new D(`ZeroPadding2D expects height padding to be a length-2 array, but received a length-${t.padding[0].length} array.`);if(e=t.padding[0],t.padding[1].length!==2)throw new D(`ZeroPadding2D expects width padding to be a length-2 array, but received a length-${t.padding[1].length} array.`);s=t.padding[1]}this.padding=[e,s]}this.inputSpec=[new re({ndim:4})]}computeOutputShape(t){t=Nt(t);let e,s;return this.dataFormat==="channelsFirst"?(t[2]!=null&&t[2]>=0?e=t[2]+this.padding[0][0]+this.padding[0][1]:e=null,t[3]!=null&&t[3]>=0?s=t[3]+this.padding[1][0]+this.padding[1][1]:s=null,[t[0],t[1],e,s]):(t[1]!=null&&t[1]>=0?e=t[1]+this.padding[0][0]+this.padding[0][1]:e=null,t[2]!=null&&t[2]>=0?s=t[2]+this.padding[1][0]+this.padding[1][1]:s=null,[t[0],e,s,t[3]])}call(t,e){return B(()=>bA(ft(t),this.padding,this.dataFormat))}getConfig(){const t={padding:this.padding,dataFormat:this.dataFormat},e=super.getConfig();return Object.assign(t,e),t}}B0.className="ZeroPadding2D";X(B0);function Ic(n,t,e,s,o,r){return B(()=>{te(o),nb(r),Je(s),e==null&&(e=[1,1]),s==null&&(s="valid"),o==null&&(o=$n()),r==null&&(r="max"),n=op(n,o);let i;const a=s==="same"?"same":"valid";return r==="max"?i=Zh(n,t,e,a):i=Vh(n,t,e,a),o==="channelsFirst"&&(i=vt(i,[0,3,1,2])),i})}function V0(n,t,e,s,o,r){return B(()=>{te(o),nb(r),Je(s),e==null&&(e=[1,1,1]),s==null&&(s="valid"),o==null&&(o=$n()),r==null&&(r="max"),n=o0(n,o);let i;const a=s==="same"?"same":"valid";return r==="max"?i=vk(n,t,e,a):i=SI(n,t,e,a),o==="channelsFirst"&&(i=vt(i,[0,4,1,2,3])),i})}class W0 extends $t{constructor(t){if(t.poolSize==null&&(t.poolSize=2),super(t),typeof t.poolSize=="number")this.poolSize=[t.poolSize];else if(Array.isArray(t.poolSize)&&t.poolSize.length===1&&typeof t.poolSize[0]=="number")this.poolSize=t.poolSize;else throw new D(`poolSize for 1D convolutional layer must be a number or an Array of a single number, but received ${JSON.stringify(t.poolSize)}`);if(pe(this.poolSize,"poolSize"),t.strides==null)this.strides=this.poolSize;else if(typeof t.strides=="number")this.strides=[t.strides];else if(Array.isArray(t.strides)&&t.strides.length===1&&typeof t.strides[0]=="number")this.strides=t.strides;else throw new D(`strides for 1D convolutional layer must be a number or an Array of a single number, but received ${JSON.stringify(t.strides)}`);pe(this.strides,"strides"),this.padding=t.padding==null?"valid":t.padding,Je(this.padding),this.inputSpec=[new re({ndim:3})]}computeOutputShape(t){t=Nt(t);const e=wn(t[1],this.poolSize[0],this.padding,this.strides[0]);return[t[0],e,t[2]]}call(t,e){return B(()=>{this.invokeCallHook(t,e),t=Li(ft(t),2);const s=this.poolingFunction(ft(t),[this.poolSize[0],1],[this.strides[0],1],this.padding,"channelsLast");return Ai(s,[2])})}getConfig(){const t={poolSize:this.poolSize,padding:this.padding,strides:this.strides},e=super.getConfig();return Object.assign(t,e),t}}class U0 extends W0{constructor(t){super(t)}poolingFunction(t,e,s,o,r){return te(r),Je(o),Ic(t,e,s,o,r,"max")}}U0.className="MaxPooling1D";X(U0);class G0 extends W0{constructor(t){super(t)}poolingFunction(t,e,s,o,r){return te(r),Je(o),Ic(t,e,s,o,r,"avg")}}G0.className="AveragePooling1D";X(G0);class H0 extends $t{constructor(t){if(t.poolSize==null&&(t.poolSize=[2,2]),super(t),this.poolSize=Array.isArray(t.poolSize)?t.poolSize:[t.poolSize,t.poolSize],t.strides==null)this.strides=this.poolSize;else if(Array.isArray(t.strides)){if(t.strides.length!==2)throw new D(`If the strides property of a 2D pooling layer is an Array, it is expected to have a length of 2, but received length ${t.strides.length}.`);this.strides=t.strides}else this.strides=[t.strides,t.strides];pe(this.poolSize,"poolSize"),pe(this.strides,"strides"),this.padding=t.padding==null?"valid":t.padding,this.dataFormat=t.dataFormat==null?"channelsLast":t.dataFormat,te(this.dataFormat),Je(this.padding),this.inputSpec=[new re({ndim:4})]}computeOutputShape(t){t=Nt(t);let e=this.dataFormat==="channelsFirst"?t[2]:t[1],s=this.dataFormat==="channelsFirst"?t[3]:t[2];return e=wn(e,this.poolSize[0],this.padding,this.strides[0]),s=wn(s,this.poolSize[1],this.padding,this.strides[1]),this.dataFormat==="channelsFirst"?[t[0],t[1],e,s]:[t[0],e,s,t[3]]}call(t,e){return B(()=>(this.invokeCallHook(t,e),this.poolingFunction(ft(t),this.poolSize,this.strides,this.padding,this.dataFormat)))}getConfig(){const t={poolSize:this.poolSize,padding:this.padding,strides:this.strides,dataFormat:this.dataFormat},e=super.getConfig();return Object.assign(t,e),t}}class j0 extends H0{constructor(t){super(t)}poolingFunction(t,e,s,o,r){return te(r),Je(o),Ic(t,e,s,o,r,"max")}}j0.className="MaxPooling2D";X(j0);class q0 extends H0{constructor(t){super(t)}poolingFunction(t,e,s,o,r){return te(r),Je(o),Ic(t,e,s,o,r,"avg")}}q0.className="AveragePooling2D";X(q0);class K0 extends $t{constructor(t){if(t.poolSize==null&&(t.poolSize=[2,2,2]),super(t),this.poolSize=Array.isArray(t.poolSize)?t.poolSize:[t.poolSize,t.poolSize,t.poolSize],t.strides==null)this.strides=this.poolSize;else if(Array.isArray(t.strides)){if(t.strides.length!==3)throw new D(`If the strides property of a 3D pooling layer is an Array, it is expected to have a length of 3, but received length ${t.strides.length}.`);this.strides=t.strides}else this.strides=[t.strides,t.strides,t.strides];pe(this.poolSize,"poolSize"),pe(this.strides,"strides"),this.padding=t.padding==null?"valid":t.padding,this.dataFormat=t.dataFormat==null?"channelsLast":t.dataFormat,te(this.dataFormat),Je(this.padding),this.inputSpec=[new re({ndim:5})]}computeOutputShape(t){t=Nt(t);let e=this.dataFormat==="channelsFirst"?t[2]:t[1],s=this.dataFormat==="channelsFirst"?t[3]:t[2],o=this.dataFormat==="channelsFirst"?t[4]:t[3];return e=wn(e,this.poolSize[0],this.padding,this.strides[0]),s=wn(s,this.poolSize[1],this.padding,this.strides[1]),o=wn(o,this.poolSize[2],this.padding,this.strides[2]),this.dataFormat==="channelsFirst"?[t[0],t[1],e,s,o]:[t[0],e,s,o,t[4]]}call(t,e){return B(()=>(this.invokeCallHook(t,e),this.poolingFunction(ft(t),this.poolSize,this.strides,this.padding,this.dataFormat)))}getConfig(){const t={poolSize:this.poolSize,padding:this.padding,strides:this.strides,dataFormat:this.dataFormat},e=super.getConfig();return Object.assign(t,e),t}}class X0 extends K0{constructor(t){super(t)}poolingFunction(t,e,s,o,r){return te(r),Je(o),V0(t,e,s,o,r,"max")}}X0.className="MaxPooling3D";X(X0);class Y0 extends K0{constructor(t){super(t)}poolingFunction(t,e,s,o,r){return te(r),Je(o),V0(t,e,s,o,r,"avg")}}Y0.className="AveragePooling3D";X(Y0);class Z0 extends $t{constructor(t){super(t),this.inputSpec=[new re({ndim:3})]}computeOutputShape(t){return[t[0],t[2]]}call(t,e){throw new xt}}class J0 extends Z0{constructor(t){super(t||{})}call(t,e){return B(()=>{const s=ft(t);return ne(s,1)})}}J0.className="GlobalAveragePooling1D";X(J0);class Q0 extends Z0{constructor(t){super(t||{})}call(t,e){return B(()=>{const s=ft(t);return yn(s,1)})}}Q0.className="GlobalMaxPooling1D";X(Q0);class t1 extends $t{constructor(t){super(t),this.dataFormat=t.dataFormat==null?"channelsLast":t.dataFormat,te(this.dataFormat),this.inputSpec=[new re({ndim:4})]}computeOutputShape(t){return t=t,this.dataFormat==="channelsLast"?[t[0],t[3]]:[t[0],t[1]]}call(t,e){throw new xt}getConfig(){const t={dataFormat:this.dataFormat},e=super.getConfig();return Object.assign(t,e),t}}class e1 extends t1{call(t,e){return B(()=>{const s=ft(t);return this.dataFormat==="channelsLast"?ne(s,[1,2]):ne(s,[2,3])})}}e1.className="GlobalAveragePooling2D";X(e1);class n1 extends t1{call(t,e){return B(()=>{const s=ft(t);return this.dataFormat==="channelsLast"?yn(s,[1,2]):yn(s,[2,3])})}}n1.className="GlobalMaxPooling2D";X(n1);class s1 extends $t{constructor(t){super(t),this.layer=t.layer}build(t){this.built=!0}get trainable(){return this.layer!=null?this.layer.trainable:!1}set trainable(t){this.layer!=null&&(this.layer.trainable=t)}get trainableWeights(){return this.layer.trainableWeights}get nonTrainableWeights(){return this.layer.nonTrainableWeights}get updates(){return this.layer._updates}get losses(){return this.layer.losses}getWeights(){return this.layer.getWeights()}setWeights(t){this.layer.setWeights(t)}getConfig(){const t={layer:{className:this.layer.getClassName(),config:this.layer.getConfig()}},e=super.getConfig();return Object.assign(t,e),t}setFastWeightInitDuringBuild(t){super.setFastWeightInitDuringBuild(t),this.layer!=null&&this.layer.setFastWeightInitDuringBuild(t)}static fromConfig(t,e,s={}){const o=e.layer,r=Mn(o,s);delete e.layer;const i={layer:r};return Object.assign(i,e),new t(i)}}class o1 extends s1{constructor(t){super(t),this.supportsMasking=!0}build(t){if(t=Nt(t),t.length<3)throw new D(`TimeDistributed layer expects an input shape >= 3D, but received input shape ${JSON.stringify(t)}`);this.inputSpec=[{shape:t}];const e=[t[0]].concat(t.slice(2));this.layer.built||(this.layer.build(e),this.layer.built=!0),super.build(t)}computeOutputShape(t){t=Nt(t);const e=[t[0]].concat(t.slice(2)),s=this.layer.computeOutputShape(e),o=t[1];return[s[0],o].concat(s.slice(1))}call(t,e){return B(()=>(t=ft(t),p0((i,a)=>[ft(this.layer.call(i,e)),[]],t,[],!1,null,null,!1,!0)[1]))}}o1.className="TimeDistributed";X(o1);function yA(n){uo(LE,"BidirectionalMergeMode",n)}const wA="concat";class r1 extends s1{constructor(t){super(t);const e=t.layer.getConfig(),s={};s.className=t.layer.getClassName(),s.config=e,this.forwardLayer=Mn(s),e.goBackwards=e.goBackwards!==!0;const o={};if(o.className=t.layer.getClassName(),o.config=e,this.backwardLayer=Mn(o),this.forwardLayer.name="forward_"+this.forwardLayer.name,this.backwardLayer.name="backward_"+this.backwardLayer.name,this.mergeMode=t.mergeMode===void 0?wA:t.mergeMode,yA(this.mergeMode),t.weights)throw new xt("weights support is not implemented for Bidirectional layer yet.");this._stateful=t.layer.stateful,this.returnSequences=t.layer.returnSequences,this.returnState=t.layer.returnState,this.supportsMasking=!0,this._trainable=!0,this.inputSpec=t.layer.inputSpec,this.numConstants=null}get trainable(){return this._trainable}set trainable(t){this._trainable=t,this.forwardLayer!=null&&(this.forwardLayer.trainable=t),this.backwardLayer!=null&&(this.backwardLayer.trainable=t)}getWeights(){return this.forwardLayer.getWeights().concat(this.backwardLayer.getWeights())}setWeights(t){const e=t.length,s=Math.floor(e/2);this.forwardLayer.setWeights(t.slice(0,s)),this.backwardLayer.setWeights(t.slice(s))}computeOutputShape(t){let e=this.forwardLayer.computeOutputShape(t);Array.isArray(e)&&Array.isArray(e[0])||(e=[e]),e=e;let s,o,r;return this.returnState&&(r=e.slice(1)),s=e[0],s=s,this.mergeMode==="concat"?(s[s.length-1]*=2,o=[s]):this.mergeMode==null?o=[s,s.slice()]:o=[s],this.returnState?this.mergeMode==null?o.concat(r).concat(r.slice()):[s].concat(r).concat(r.slice()):Oe(o)}apply(t,e){let s=e==null?null:e.initialState,o=e==null?null:e.constants;e==null&&(e={});const r=d0(t,s,o,this.numConstants);if(t=r.inputs,s=r.initialState,o=r.constants,Array.isArray(t)&&(s=t.slice(1),t=t[0]),(s==null||s.length===0)&&o==null)return super.apply(t,e);const i=[],a=[];if(s!=null){const c=s.length;if(c%2>0)throw new D("When passing `initialState` to a Bidrectional RNN, the state should be an Array containing the states of the underlying RNNs.");e.initialState=s,i.push(...s);const u=s.map(h=>new re({shape:h.shape}));this.forwardLayer.stateSpec=u.slice(0,c/2),this.backwardLayer.stateSpec=u.slice(c/2),a.push(...u)}if(o!=null)throw new xt("Support for constants in Bidirectional layers is not implemented yet.");const l=i[0]instanceof Vn;for(const c of i)if(c instanceof Vn!==l)throw new D("The initial state of a Bidirectional layer cannot be specified as a mix of symbolic and non-symbolic tensors");if(l){const c=[t].concat(i),u=this.inputSpec.concat(a),h=this.inputSpec;this.inputSpec=u;const d=super.apply(c,e);return this.inputSpec=h,d}else return super.apply(t,e)}call(t,e){return B(()=>{const s=e.initialState;let o,r;if(s==null)o=this.forwardLayer.call(t,e),r=this.backwardLayer.call(t,e);else{const l=s.slice(0,s.length/2),c=s.slice(s.length/2);o=this.forwardLayer.call(t,Object.assign(e,{initialState:l})),r=this.backwardLayer.call(t,Object.assign(e,{initialState:c}))}let i;this.returnState&&(Array.isArray(o)&&(i=o.slice(1).concat(r.slice(1))),o=o[0],r=r[0]),this.returnSequences&&(r=to(r,1));let a;return this.mergeMode==="concat"?a=Hd([o,r]):this.mergeMode==="sum"?a=J(o,r):this.mergeMode==="ave"?a=F(.5,J(o,r)):this.mergeMode==="mul"?a=F(o,r):this.mergeMode==null&&(a=[o,r]),this.returnState?this.mergeMode==null?a.concat(i):[a].concat(i):a})}resetStates(t){this.forwardLayer.resetStates(),this.backwardLayer.resetStates()}build(t){Us(this.forwardLayer.name,()=>{this.forwardLayer.build(t)}),Us(this.backwardLayer.name,()=>{this.backwardLayer.build(t)}),this.built=!0}computeMask(t,e){Array.isArray(e)&&(e=e[0]);let s;if(this.returnSequences?this.mergeMode==null?s=[e,e]:s=e:this.mergeMode==null?s=[null,null]:s=null,this.returnState){const r=this.forwardLayer.states.map(i=>null);return Array.isArray(s)?s.concat(r).concat(r):[s].concat(r).concat(r)}else return s}get trainableWeights(){return this.forwardLayer.trainableWeights.concat(this.backwardLayer.trainableWeights)}get nonTrainableWeights(){return this.forwardLayer.nonTrainableWeights.concat(this.backwardLayer.nonTrainableWeights)}setFastWeightInitDuringBuild(t){super.setFastWeightInitDuringBuild(t),this.forwardLayer!=null&&this.forwardLayer.setFastWeightInitDuringBuild(t),this.backwardLayer!=null&&this.backwardLayer.setFastWeightInitDuringBuild(t)}getConfig(){const t={mergeMode:this.mergeMode},e=super.getConfig();return Object.assign(t,e),t}static fromConfig(t,e){const s=Mn(e.layer);if(delete e.layer,e.numConstants!=null)throw new xt("Deserialization of a Bidirectional layer with numConstants present is not supported yet.");const o=e;return o.layer=s,new t(o)}}r1.className="Bidirectional";X(r1);class i1 extends $t{constructor(t){super(t),this.scale=t.scale,t.offset?this.offset=t.offset:this.offset=0}getConfig(){const t={scale:this.scale,offset:this.offset},e=super.getConfig();return Object.assign(t,e),t}call(t,e){return B(()=>(t=ft(t),t.dtype!=="float32"&&(t=_n(t,"float32")),J(F(t,this.scale),this.offset)))}}i1.className="Rescaling";X(i1);const{resizeBilinear:CA,cropAndResize:$A}=Kn;class a1 extends $t{constructor(t){super(t),this.height=t.height,this.width=t.width}centerCrop(t,e,s,o,r,i,a,l){return B(()=>{let c,u=!1;const h=e/i,d=s/a,p=(o+e)/i,f=(r+s)/a,m=[h,d,p,f],g=[];t.rank===3?(u=!0,c=Bn([t])):c=t;for(let C=0;C<c.shape[0];C++)g.push(m);const x=So(g,[g.length,4]),b=Ir(0,g.length,1,"int32"),y=$A(c,x,b,[o,r],"nearest");return _n(u?ft(eo(y)):y,l)})}upsize(t,e,s,o){return B(()=>{const r=CA(t,[e,s]);return _n(r,o)})}call(t,e){return B(()=>{const s=ft(t),o=s.dtype,r=s.shape,i=r[r.length-3],a=r[r.length-2];let l=0;i!==this.height&&(l=Math.floor((i-this.height)/2));let c=0;return a!==this.width&&(c=Math.floor((a-this.width)/2),c===0&&(c=1)),l>=0&&c>=0?this.centerCrop(s,l,c,this.height,this.width,i,a,o):this.upsize(t,this.height,this.width,o)})}getConfig(){const t={height:this.height,width:this.width},e=super.getConfig();return Object.assign(t,e),t}computeOutputShape(t){t=Nt(t);const e=t.length-3,s=t.length-2;return t[e]=this.height,t[s]=this.width,t}}a1.className="CenterCrop";X(a1);function IA(n,t,e,s){let o=ft(n);if(o.dtype!=="int32"&&(o=_n(o,"int32")),t==="int")return o;const r=o.shape;if(o.rank===0&&(o=_e(o,-1)),t==="oneHot"&&o.shape[o.shape.length-1]!==1&&(o=_e(o,-1)),o.rank>2)throw new D(`When outputMode is not int, maximum output rank is 2 Received outputMode ${t} and input shape ${r} which would result in output rank ${o.rank}.`);const i=["multiHot","oneHot"].includes(t),a=o;let l;if(typeof s<"u"&&t==="count"?l=tf(a,s,e,i):l=tf(a,[],e,i),t!=="tfIdf")return l;if(s)return F(l,s);throw new D("When outputMode is 'tfIdf', weights must be provided.")}class l1 extends $t{constructor(t){super(t),this.numTokens=t.numTokens,t.outputMode?this.outputMode=t.outputMode:this.outputMode="multiHot"}getConfig(){const t={numTokens:this.numTokens,outputMode:this.outputMode},e=super.getConfig();return Object.assign(t,e),t}computeOutputShape(t){return t=Nt(t),t==null?[this.numTokens]:this.outputMode==="oneHot"&&t[t.length-1]!==1?(t.push(this.numTokens),t):(t[t.length-1]=this.numTokens,t)}call(t,e){return B(()=>{t=ft(t),t.dtype!=="int32"&&(t=_n(t,"int32"));let s;if(typeof e.countWeights<"u"){if(this.outputMode!=="count")throw new D(`countWeights is not used when outputMode !== count.
              Received countWeights=${e.countWeights}`);s=ft(e.countWeights)}const o=yn(t),r=Aa(t),i=Ze(this.numTokens,o).bufferSync().get(0),a=ao(r,0).bufferSync().get(0);if(!(i&&a))throw new D(`Input values must be between 0 < values <= numTokens with numTokens=${this.numTokens}`);return IA(t,this.outputMode,this.numTokens,s)})}}l1.className="CategoryEncoding";X(l1);const vA=["bilinear","nearest"],Hf=new Set(vA);class c1 extends $t{constructor(t){if(super(t),this.height=t.height,this.width=t.width,t.interpolation)if(Hf.has(t.interpolation))this.interpolation=t.interpolation;else throw new D(`Invalid interpolation parameter: ${t.interpolation} is not implemented`);else this.interpolation="bilinear";this.cropToAspectRatio=!!t.cropToAspectRatio}computeOutputShape(t){t=Nt(t);const e=t[2];return[this.height,this.width,e]}getConfig(){const t={height:this.height,width:this.width,interpolation:this.interpolation,cropToAspectRatio:this.cropToAspectRatio},e=super.getConfig();return Object.assign(t,e),t}call(t,e){return B(()=>{const s=[this.height,this.width];if(this.interpolation==="bilinear")return Kn.resizeBilinear(t,s,!this.cropToAspectRatio);if(this.interpolation==="nearest")return Kn.resizeNearestNeighbor(t,s,!this.cropToAspectRatio);throw new Error(`Interpolation is ${this.interpolation} but only ${[...Hf]} are supported`)})}}c1.className="Resizing";X(c1);class u1{constructor(t){this.seed=t}next(){if(this.seed!==void 0)return this.seed++}}u1.className="RandomSeed";class h1 extends $t{constructor(t){super(t),this.randomGenerator=new u1(t.seed)}getConfig(){const t={seed:this.randomGenerator.seed},e=super.getConfig();return Object.assign(t,e),t}}h1.className="BaseRandomLayer";const kA=["bilinear","nearest"],jf=new Set(kA);class d1 extends h1{constructor(t){super(t);const{factor:e,interpolation:s="bilinear"}=t;if(this.factor=e,Array.isArray(this.factor)&&this.factor.length===2)this.widthLower=this.factor[0],this.widthUpper=this.factor[1];else if(!Array.isArray(this.factor)&&this.factor>0)this.widthLower=-this.factor,this.widthUpper=this.factor;else throw new D(`Invalid factor: ${this.factor}. Must be positive number or tuple of 2 numbers`);if(this.widthLower<-1||this.widthUpper<-1)throw new D(`factor must have values larger than -1. Got: ${this.factor}`);if(this.widthUpper<this.widthLower)throw new D(`factor cannot have upper bound less than lower bound.
        Got upper bound: ${this.widthUpper}.
        Got lower bound: ${this.widthLower}
      `);if(s)if(jf.has(s))this.interpolation=s;else throw new D(`Invalid interpolation parameter: ${s} is not implemented`)}getConfig(){const t={factor:this.factor,interpolation:this.interpolation},e=super.getConfig();return Object.assign(t,e),t}computeOutputShape(t){t=Nt(t);const e=t[2];return[this.imgHeight,-1,e]}call(t,e){return B(()=>{const s=ft(t);this.imgHeight=s.shape[s.shape.length-3];const o=s.shape[s.shape.length-2];this.widthFactor=Ri([1],1+this.widthLower,1+this.widthUpper,"float32",this.randomGenerator.next());let r=this.widthFactor.dataSync()[0]*o;r=Math.round(r);const i=[this.imgHeight,r];switch(this.interpolation){case"bilinear":return Kn.resizeBilinear(t,i);case"nearest":return Kn.resizeNearestNeighbor(t,i);default:throw new Error(`Interpolation is ${this.interpolation}
          but only ${[...jf]} are supported`)}})}}d1.className="RandomWidth";X(d1);const SA=W();SA.registerFlag("KEEP_INTERMEDIATE_TENSORS",()=>!1,n=>{n&&console.warn("Keep intermediate tensors is ON. This will print the values of all intermediate tensors during model inference. Not all models support this mode. For details, check e2e/benchmarks/ model_config.js. This significantly impacts performance.")});var qf;(function(n){n[n.DT_INVALID=0]="DT_INVALID",n[n.DT_FLOAT=1]="DT_FLOAT",n[n.DT_DOUBLE=2]="DT_DOUBLE",n[n.DT_INT32=3]="DT_INT32",n[n.DT_UINT8=4]="DT_UINT8",n[n.DT_INT16=5]="DT_INT16",n[n.DT_INT8=6]="DT_INT8",n[n.DT_STRING=7]="DT_STRING",n[n.DT_COMPLEX64=8]="DT_COMPLEX64",n[n.DT_INT64=9]="DT_INT64",n[n.DT_BOOL=10]="DT_BOOL",n[n.DT_QINT8=11]="DT_QINT8",n[n.DT_QUINT8=12]="DT_QUINT8",n[n.DT_QINT32=13]="DT_QINT32",n[n.DT_BFLOAT16=14]="DT_BFLOAT16",n[n.DT_QINT16=15]="DT_QINT16",n[n.DT_QUINT16=16]="DT_QUINT16",n[n.DT_UINT16=17]="DT_UINT16",n[n.DT_COMPLEX128=18]="DT_COMPLEX128",n[n.DT_HALF=19]="DT_HALF",n[n.DT_RESOURCE=20]="DT_RESOURCE",n[n.DT_VARIANT=21]="DT_VARIANT",n[n.DT_UINT32=22]="DT_UINT32",n[n.DT_UINT64=23]="DT_UINT64",n[n.DT_FLOAT_REF=101]="DT_FLOAT_REF",n[n.DT_DOUBLE_REF=102]="DT_DOUBLE_REF",n[n.DT_INT32_REF=103]="DT_INT32_REF",n[n.DT_UINT8_REF=104]="DT_UINT8_REF",n[n.DT_INT16_REF=105]="DT_INT16_REF",n[n.DT_INT8_REF=106]="DT_INT8_REF",n[n.DT_STRING_REF=107]="DT_STRING_REF",n[n.DT_COMPLEX64_REF=108]="DT_COMPLEX64_REF",n[n.DT_INT64_REF=109]="DT_INT64_REF",n[n.DT_BOOL_REF=110]="DT_BOOL_REF",n[n.DT_QINT8_REF=111]="DT_QINT8_REF",n[n.DT_QUINT8_REF=112]="DT_QUINT8_REF",n[n.DT_QINT32_REF=113]="DT_QINT32_REF",n[n.DT_BFLOAT16_REF=114]="DT_BFLOAT16_REF",n[n.DT_QINT16_REF=115]="DT_QINT16_REF",n[n.DT_QUINT16_REF=116]="DT_QUINT16_REF",n[n.DT_UINT16_REF=117]="DT_UINT16_REF",n[n.DT_COMPLEX128_REF=118]="DT_COMPLEX128_REF",n[n.DT_HALF_REF=119]="DT_HALF_REF",n[n.DT_RESOURCE_REF=120]="DT_RESOURCE_REF",n[n.DT_VARIANT_REF=121]="DT_VARIANT_REF",n[n.DT_UINT32_REF=122]="DT_UINT32_REF",n[n.DT_UINT64_REF=123]="DT_UINT64_REF"})(qf||(qf={}));var Kf;(function(n){(function(t){t[t.LEGACY=0]="LEGACY",t[t.V1=1]="V1",t[t.V2=2]="V2"})(n.CheckpointFormatVersion||(n.CheckpointFormatVersion={}))})(Kf||(Kf={}));var Xf;(function(n){n[n.FAIL=0]="FAIL",n[n.SHORTEST=1]="SHORTEST",n[n.LONGEST=2]="LONGEST"})(Xf||(Xf={}));function rt(n,t){Array.isArray(n)||(n=[n]),n.forEach(e=>{e!=null&&v(e.dtype!=="complex64",()=>`${t} does not support complex64 tensors in the CPU backend.`)})}const NA=ix;class vc extends Uu{nextDataId(){return vc.nextDataId++}constructor(){super(),this.blockSize=48,this.firstUse=!0,this.data=new Fm(this,kn())}write(t,e,s){this.firstUse&&(this.firstUse=!1,W().get("IS_NODE")&&qe(`
============================
Hi, looks like you are running TensorFlow.js in Node.js. To speed things up dramatically, install our node backend, visit https://github.com/tensorflow/tfjs-node for more details. 
============================`));const o={id:this.nextDataId()};return this.data.set(o,{values:t,dtype:s,refCount:1}),o}makeTensorInfo(t,e,s){let o;if(e==="string"&&s!=null&&s.length>0&&Dr(s[0])){const r=s.map(i=>ds(i));o=this.write(r,t,e)}else o=this.write(s,t,e);return{dataId:o,shape:t,dtype:e}}refCount(t){return this.data.has(t)?this.data.get(t).refCount:0}incRef(t){const e=this.data.get(t);e.refCount++}decRef(t){if(this.data.has(t)){const e=this.data.get(t);e.refCount--}}move(t,e,s,o,r){this.data.set(t,{values:e,dtype:o,refCount:r})}numDataIds(){return this.data.numDataIds()}async read(t){return this.readSync(t)}readSync(t){const{dtype:e,complexTensorInfos:s}=this.data.get(t);if(e==="complex64"){const o=this.readSync(s.real.dataId),r=this.readSync(s.imag.dataId);return Yn(o,r)}return TC(this.data.get(t).values,e)}bufferSync(t){const e=this.readSync(t.dataId);if(t.dtype==="string")try{const s=e.map(o=>ms(o));return wt(t.shape,t.dtype,s)}catch{throw new Error("Failed to decode encoded string bytes into utf-8")}return wt(t.shape,t.dtype,e)}makeOutput(t,e,s){return kn().makeTensorFromTensorInfo(this.makeTensorInfo(e,s,t),this)}disposeData(t,e=!1){if(this.data.has(t)){if(this.data.get(t).refCount--,!e&&this.data.get(t).refCount>0)return!1;const{complexTensorInfos:s}=this.data.get(t);s!=null&&(this.disposeData(s.real.dataId,!0),this.disposeData(s.imag.dataId,!0)),this.data.delete(t)}return!0}disposeIntermediateTensorInfo(t){this.disposeData(t.dataId)}async time(t){const e=Fe();return t(),{kernelMs:Fe()-e}}memory(){return{unreliable:!0,reasons:["The reported memory is an upper bound. Due to automatic garbage collection, the true allocated memory may be less."]}}where(t){rt([t],"where");const e=this.readSync(t.dataId);return NA(t.shape,e)}dispose(){}floatPrecision(){return 32}epsilon(){return super.epsilon()}}vc.nextDataId=0;function p1(n){const t=new Float32Array(n.length);for(let e=0;e<n.length;++e)t[e]=Math.abs(n[e]);return t}const TA=n=>{const{x:t}=n.inputs,e=n.backend;rt(t,"abs");let s=new Float32Array(H(t.shape));const o=e.data.get(t.dataId).values;return s=p1(o),e.makeOutput(s,t.shape,t.dtype)},EA={kernelName:el,backendName:"cpu",kernelFunc:TA};function ee(n){return(t,e,s,o,r)=>{const i=mt(t,e),a=i.length,l=lt(i),c=H(i),u=Ce(r,c),h=t.length,d=e.length,p=lt(t),f=lt(e),m=_o(t,i),g=_o(e,i);if(m.length+g.length===0)for(let x=0;x<u.length;++x)u[x]=n(s[x%s.length],o[x%o.length]);else for(let x=0;x<u.length;++x){const b=Uo(x,a,l),w=b.slice(-h);m.forEach(N=>w[N]=0);const y=An(w,h,p),C=b.slice(-d);g.forEach(N=>C[N]=0);const I=An(C,d,f);u[x]=n(s[y],o[I])}return[u,i]}}function Ve(n){const{inputs:t,backend:e}=n,{real:s,imag:o}=t,r=e.data.get(s.dataId).values,i=e.data.get(o.dataId).values,a=e.makeTensorInfo(s.shape,"complex64"),l=e.data.get(a.dataId);return l.complexTensorInfos={real:e.makeTensorInfo(s.shape,"float32",r),imag:e.makeTensorInfo(o.shape,"float32",i)},a}const RA={kernelName:nh,backendName:"cpu",kernelFunc:Ve};function ja(n,t,e="float32"){if(e==="complex64"){const o=ja(n,t,"float32"),r=ja(n,t,"float32");return Ve({inputs:{real:o,imag:r},backend:n})}const s=$e(H(t),e);return n.makeTensorInfo(t,e,s)}function Wn(n){const{inputs:t,backend:e}=n,{x:s}=t;return e.incRef(s.dataId),{dataId:s.dataId,shape:s.shape,dtype:s.dtype}}const AA={kernelName:Qr,backendName:"cpu",kernelFunc:Wn};function so(n){const{inputs:t,backend:e}=n,{input:s}=t,o=e.data.get(s.dataId).complexTensorInfos.real,r=e.data.get(o.dataId).values;return e.makeTensorInfo(o.shape,o.dtype,r)}const DA={kernelName:Nh,backendName:"cpu",kernelFunc:so};function f1(n,t,e,s){if(s==="int32"){const o=Int32Array.from(n);return[t,"int32",o]}if(s==="bool"){const o=io([0],e),[r,i]=ee((a,l)=>a!==l?1:0)(t,[],n,o,"bool");return[i,"bool",r]}throw new Error(`Error in Cast: failed to cast ${e} to ${s}`)}function ws(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{dtype:r}=s;if(r==="complex64"){if(o.dtype==="complex64")return Wn({inputs:{x:o},backend:e});const u=ja(e,o.shape,o.dtype),h=ws({inputs:{x:o},backend:e,attrs:{dtype:"float32"}}),d=Ve({inputs:{real:h,imag:u},backend:e});return e.disposeIntermediateTensorInfo(u),e.disposeIntermediateTensorInfo(h),d}if(o.dtype==="complex64"){const u=so({inputs:{input:o},backend:e}),h=ws({inputs:{x:u},backend:e,attrs:{dtype:r}});return e.disposeIntermediateTensorInfo(u),h}if(!Mm(o.dtype,r)){const u=Wn({inputs:{x:o},backend:e});return{dataId:u.dataId,shape:u.shape,dtype:r}}const i=e.data.get(o.dataId).values,[a,l,c]=f1(i,o.shape,o.dtype,r);return e.makeTensorInfo(a,l,c)}const FA={kernelName:Br,backendName:"cpu",kernelFunc:ws};function ce(n,t,e,s){return e==null?({inputs:o,backend:r})=>{const{a:i,b:a}=o,l=r;rt([i,a],n);const c=l.data.get(i.dataId).values,u=l.data.get(a.dataId).values,h=i.dtype==="string"?Zn(c):c,d=i.dtype==="string"?Zn(u):u,p=s||i.dtype,[f,m]=t(i.shape,a.shape,h,d,p);return l.makeTensorInfo(m,p,f)}:({inputs:o,backend:r})=>{const{a:i,b:a}=o,l=r;if(i.dtype==="complex64"||a.dtype==="complex64"){const c=ws({inputs:{x:i},backend:l,attrs:{dtype:"complex64"}}),u=l.data.get(c.dataId),h=u.complexTensorInfos.real,d=u.complexTensorInfos.imag,p=l.data.get(h.dataId).values,f=l.data.get(d.dataId).values,m=ws({inputs:{x:a},backend:l,attrs:{dtype:"complex64"}}),g=l.data.get(m.dataId),x=g.complexTensorInfos.real,b=g.complexTensorInfos.imag,w=l.data.get(x.dataId).values,y=l.data.get(b.dataId).values,[C,I,N]=e(i.shape,a.shape,p,f,w,y),T=l.makeTensorInfo(N,"float32",C),k=l.makeTensorInfo(N,"float32",I),S=Ve({inputs:{real:T,imag:k},backend:l});return l.disposeIntermediateTensorInfo(c),l.disposeIntermediateTensorInfo(m),l.disposeIntermediateTensorInfo(T),l.disposeIntermediateTensorInfo(k),S}else{const c=l.data.get(i.dataId).values,u=l.data.get(a.dataId).values,h=s||i.dtype,[d,p]=t(i.shape,a.shape,c,u,h);return l.makeTensorInfo(p,h,d)}}}function up(n){return(t,e,s,o,r,i)=>{const a=mt(t,e),l=H(a),c=a.length,u=lt(a),h=Ce("float32",l),d=Ce("float32",l),p=_o(t,a),f=_o(e,a),m=Yn(s,o),g=Yn(r,i),x=t.length,b=lt(t),w=e.length,y=lt(e);if(p.length+f.length===0)for(let C=0;C<h.length;C++){const I=C%m.length,N=C%g.length,T=n(m[I*2],m[I*2+1],g[N*2],g[N*2+1]);h[C]=T.real,d[C]=T.imag}else for(let C=0;C<h.length;C++){const I=Uo(C,c,u),N=I.slice(-x);p.forEach(R=>N[R]=0);const T=An(N,x,b),k=I.slice(-w);f.forEach(R=>k[R]=0);const S=An(k,w,y),$=n(m[T*2],m[T*2+1],g[S*2],g[S*2+1]);h[C]=$.real,d[C]=$.imag}return[h,d,a]}}const m1=ee(((n,t)=>n+t)),_A=up(((n,t,e,s)=>({real:n+e,imag:t+s}))),Lo=ce(Go,m1,_A),OA={kernelName:Go,backendName:"cpu",kernelFunc:Lo};function hp(n,t,e,s,o){const r=H(s),i=$e(o,e);for(let a=0;a<n.length;a++){const l=n[a];if(l<0)throw new Error("Input x must be non-negative!");l>=o||(r>0?i[l]+=t[a]:i[l]+=1)}return i}function g1(n,t,e,s=!1){const o=n.shape[0],r=n.shape[1],i=wt([o,e],t.dtype);for(let a=0;a<o;a++)for(let l=0;l<r;l++){const c=n.get(a,l);if(c<0)throw new Error("Input x must be non-negative!");c>=e||(s?i.set(1,a,c):t.size>0?i.set(i.get(a,c)+t.get(a,l),a,c):i.set(i.get(a,c)+1,a,c))}return i}const x1=ee(((n,t)=>n&t)),MA=ce(eh,x1),LA={kernelName:eh,backendName:"cpu",kernelFunc:MA};function Un(n){return(t,e,s)=>{const o=Yt(e,t.length);for(let r=0;r<t.length;++r)o[r]=n(t[r],s);return o}}function Dt(n,t,e){const s=Un(t);return Es(n,s,e)}function Es(n,t,e){return({inputs:s,attrs:o,backend:r})=>{const{x:i}=s;rt(i,n);const a=r,l=a.data.get(i.dataId).values;let c;if(i.dtype==="string"){if(!Array.isArray(l))throw new Error("String tensor's value was not an instance of Array");c=Zn(l)}else c=l;const u=e||i.dtype,h=t(c,u,o);return a.makeTensorInfo(i.shape,u,h)}}const b1=Un(n=>Math.ceil(n)),PA=Es(Vr,b1),zA={kernelName:Vr,backendName:"cpu",kernelFunc:PA};function y1(n,t,e,s){const o=Yt(e,H(t));if(s&&e!=="string"){let r=0;n.forEach(i=>{const a=H(i.shape);o.set(i.vals,r),r+=a})}else{let r=0;n.forEach(i=>{const a=e==="string"?Zn(i.vals):i.vals;let l=0;for(let c=0;c<i.shape[0];++c){const u=c*t[1]+r;for(let h=0;h<i.shape[1];++h)o[u+h]=a[l++]}r+=i.shape[1]})}return o}const w1=ee((n,t)=>n===t?1:0),C1=ce(gl,w1,null,"bool"),BA={kernelName:gl,backendName:"cpu",kernelFunc:C1};const $1=Un(n=>Math.exp(n)),I1=Es(Kr,$1,"float32"),VA={kernelName:Kr,backendName:"cpu",kernelFunc:I1};const v1=Un(n=>Math.expm1(n)),WA=Es(Xr,v1),UA={kernelName:Xr,backendName:"cpu",kernelFunc:WA};const k1=Un(n=>Math.floor(n)),GA=Es(Yr,k1),HA={kernelName:Yr,backendName:"cpu",kernelFunc:GA};const S1=ee((n,t)=>Math.floor(n/t)),jA=ce(Zr,S1,null,"int32"),qA={kernelName:Zr,backendName:"cpu",kernelFunc:jA};function N1(n,t,e,s,o,r,i,a,l){const c=wt([s,r],e);for(let u=0;u<s;u++){const h=[];let d=0;for(let p=0;p<o;p++){const f=n[u*o+p];d+=f*i[p],h.push(f)}if(d<0||d>=l/r)throw new Error(`Invalid indices: ${h} does not index into ${a}`);for(let p=0;p<r;p++)c.values[u*r+p]=t.get(...t.indexToLoc(d*r+p))}return c}function T1(n,t,e){const s=wt(e,n.dtype);for(let o=0;o<s.size;++o){const i=s.indexToLoc(o).slice(),a=i[0],l=i[2],c=t.locToIndex([a,l]);i[2]=t.values[c];const u=n.locToIndex(i);0<=u&&u<n.values.length&&(s.values[o]=n.values[u])}return s}const E1=ee((n,t)=>n>t?1:0),KA=ce(wl,E1,null,"bool"),XA={kernelName:wl,backendName:"cpu",kernelFunc:KA};const R1=ee((n,t)=>n>=t?1:0),YA=ce(Jr,R1,null,"bool"),ZA={kernelName:Jr,backendName:"cpu",kernelFunc:YA};const A1=ee((n,t)=>n<t?1:0),JA=ce($l,A1,null,"bool"),QA={kernelName:$l,backendName:"cpu",kernelFunc:JA};const D1=ee((n,t)=>n<=t?1:0),tD=ce(Il,D1,null,"bool"),eD={kernelName:Il,backendName:"cpu",kernelFunc:tD};function F1(n,t,e){const s=(t-n)/(e-1),o=$e(e,"float32");o[0]=n;for(let r=1;r<o.length;r++)o[r]=o[r-1]+s;return o}const _1=Un(n=>Math.log(n)),nD=Es(si,_1),sD={kernelName:si,backendName:"cpu",kernelFunc:nD};function O1(n,t,e,s){const o=Ce(s,H(e));for(let r=0;r<o.length;++r){const i=r*t;let a=n[i];for(let l=0;l<t;++l){const c=n[i+l];(Number.isNaN(c)||c>a)&&(a=c)}o[r]=a}return o}const M1=ee(((n,t)=>Math.max(n,t))),oD=ce(ri,M1),rD={kernelName:ri,backendName:"cpu",kernelFunc:oD};const L1=ee(((n,t)=>Math.min(n,t))),iD=ce(ii,L1),aD={kernelName:ii,backendName:"cpu",kernelFunc:iD};const dp=ee(((n,t)=>n*t)),lD=up(((n,t,e,s)=>({real:n*e-t*s,imag:n*s+t*e}))),kc=ce(li,dp,lD),cD={kernelName:li,backendName:"cpu",kernelFunc:kc};function P1(n,t,e){const s=$s(-1,e);return dp([],t,s,n,e)}function uD(n){const{inputs:t,backend:e}=n,{x:s}=t;rt(s,"neg");const o=e.data.get(s.dataId).values,[r,i]=P1(o,s.shape,s.dtype);return e.makeTensorInfo(i,s.dtype,r)}const hD={kernelName:_l,backendName:"cpu",kernelFunc:uD};const z1=ee(((n,t)=>n!==t?1:0)),dD=ce(Ol,z1,null,"bool"),pD={kernelName:Ol,backendName:"cpu",kernelFunc:dD};function pp(n,t,e,s,o){const r=t.length,i=H(t),a=lt(t),l=lt(o),c=Ce(e,H(o));for(let u=0;u<i;++u){const h=Uo(u,r,a),d=new Array(h.length);for(let f=0;f<d.length;f++)d[f]=h[s[f]];const p=An(d,r,l);c[p]=n[u]}return c}function Pe(n){const{inputs:t,attrs:e,backend:s}=n,{x:o}=t,{perm:r}=e;rt(o,"transpose");const i=o.shape.length,a=new Array(i);for(let h=0;h<a.length;h++)a[h]=o.shape[r[h]];const l=s.data.get(o.dataId).values,c=pp(l,o.shape,o.dtype,r,a);return{dataId:s.write(c,a,o.dtype),shape:a,dtype:o.dtype}}const fD={kernelName:ko,backendName:"cpu",kernelFunc:Pe};function B1(n,t,e,s){const[o,r]=fe(n,s),i=Ue(t,"int32"),a=$e(H(o),i),l=H(r);for(let c=0;c<a.length;++c){const u=c*l;let h=1;for(let d=0;d<l;++d)h*=e[u+d];a[c]=h}return{outVals:a,outShape:o,outDtype:i}}function mD(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{axis:r,keepDims:i}=s;rt(o,"prod");const a=o.shape.length,l=Ct(r,o.shape),c=qt(l,a);let u=l,h=o;const d=[];c!=null&&(h=Pe({inputs:{x:o},backend:e,attrs:{perm:c}}),d.push(h),u=Qt(u.length,a));const p=e.data.get(h.dataId).values,{outVals:f,outShape:m,outDtype:g}=B1(h.shape,h.dtype,p,u);let x=m;return i&&(x=se(m,l)),d.forEach(b=>e.disposeIntermediateTensorInfo(b)),e.makeTensorInfo(x,g,f)}const gD={kernelName:Vl,backendName:"cpu",kernelFunc:mD};function xD(n,t,e){n.forEach((s,o)=>{if(s<0||s>=e){const r=Uo(o,t.length,lt(t)).join(",");throw new Error(`indices[${r}] = ${s} is not in [0, ${e})`)}})}function bD(n,t){for(let e=0;e<n.length;++e){const s=n[e],o=e===n.length-1?t:n[e+1].length;if(s.length===0)throw new Error("Ragged splits may not be empty");if(s[0]<0)throw new Error("Ragged splits must be non-negative");if(s[s.length-1]>o)throw new Error("Ragged splits must not point past values");for(let r=1;r<s.length;++r)if(s[r-1]>s[r])throw new Error("Ragged splits must be sorted in ascending order")}}function yD(n,t,e,s){const o=[];let r=0;const i=t.length-1+e.length,a=new Array(i).fill(null).map(()=>[0]);bD(e,s);let l=1;for(let c=0;c<t.length-1;++c){l*=t[c];const u=t[c+1];for(let h=1;h<l+1;++h)a[c].push(h*u)}for(let c=0;c<n.length;++c){let u=n[c],h=n[c]+1;for(let d=0;d<e.length;++d){const p=e[d],f=d+t.length-1;if(f>=0){const m=a[f],g=m[m.length-1]-p[u];for(let x=u;x<h;++x)a[f].push(p[x+1]+g)}u=p[u],h=p[h]}h!==u&&(o.push([u,h]),r+=h-u)}return{outSplits:a,valueSlices:o,numValues:r}}function wD(n){const t=[];for(let e=0;e<n.length;++e){const s=n[e].length,o=Yt("int32",s);t.push(o),n[e].forEach((r,i)=>o[i]=r)}return t}function Yf(n,t){const e=n.slice(0,t);for(;e.length<t;)e.push(1);for(let s=t;s<n.length;s++)e[t-1]*=n[s];return e}function CD(n,t,e,s,o,r){const i=Yf(t,2)[1],a=Yf(r,2)[1];let l=0;for(const c of e)for(let u=c[0];u<c[1];++u){for(let h=0;h<s;++h)o[l*a+h]=n[u*i+h];++l}}function $D(n,t,e,s,o){const r=t.slice();r[0]=o;const i=Yt(e,H(r)),a=n.length,l=a===0?0:a/t[0];return CD(n,t,s,l,i,r),[i,r]}function V1(n,t,e,s,o,r,i,a){if(n.length===0)throw new Error("paramsNestedSplits must be non empty");if(t[0].length===0)throw new Error("Split tensors must not be scalars");const l=t[0][0]-1;if(xD(r,i,l),s.length===0)throw new Error("params.rank must be nonzero");const c=s[0],{outSplits:u,valueSlices:h,numValues:d}=yD(r,i,n,c),p=wD(u),f=$D(e,s,o,h,d);return[p,f[0],f[1]]}const Zf=2147483647;function W1(n,t,e,s,o,r,i){if(t.length>1)throw new Error("starts must be a scalar or vector");if(o.length>1)throw new Error("limits must be a scalar or vector");if(i.length>1)throw new Error("deltas must be a scalar or vector");const a=t.length===0,l=o.length===0,c=i.length===0,u=[];a||u.push(t[0]),l||u.push(o[0]),c||u.push(i[0]);for(let g=1;g<u.length;++g)if(u[g]!==u[g-1])throw new Error("starts, limits, and deltas must have the same shape");const h=u.length===0?1:u[0],d=Yt("int32",h+1);d[0]=0;for(let g=0;g<h;++g){const x=a?n[0]:n[g],b=l?s[0]:s[g],w=c?r[0]:r[g];if(w===0)throw new Error("Requires delta != 0");let y;if(w>0&&b<x||w<0&&b>x)y=0;else if(y=Math.ceil(Math.abs((b-x)/w)),y>Zf)throw new Error(`Requires ((limit - start) / delta) <= ${Zf}`);d[g+1]=d[g]+y}const p=d[h],f=Yt(e,p);let m=0;for(let g=0;g<h;++g){const x=d[g+1]-d[g];let b=a?n[0]:n[g];const w=c?r[0]:r[g];for(let y=0;y<x;++y)f[m++]=b,b+=w}return[d,f]}var tn=gn;class qa{constructor(t,e,s,o,r,i,a,l,c,u){this.shape=t,this.shapeShape=e,this.values=s,this.valuesShape=o,this.valuesDType=r,this.defaultValue=i,this.defaultValueShape=a,this.rowPartitionValues=l,this.rowPartitionValuesShapes=c,this.rowPartitionTypes=Nx(u),this.raggedRank=Tx(this.rowPartitionTypes)}getRowPartitionTypeByDimension(t){return this.rowPartitionTypes[0]===tn.FIRST_DIM_SIZE?this.rowPartitionTypes[t+1]:this.rowPartitionTypes[t]}getRowPartitionTensor(t){return this.rowPartitionTypes[0]===tn.FIRST_DIM_SIZE?this.rowPartitionValues[t+1]:this.rowPartitionValues[t]}getMaxWidth(t){const e=this.getRowPartitionTensor(t-1);switch(this.getRowPartitionTypeByDimension(t-1)){case tn.VALUE_ROWIDS:return qa.getMaxWidthValueRowID(e);case tn.ROW_SPLITS:return qa.getMaxWidthRowSplit(e);default:throw new Error(`Cannot handle partition type ${tn[this.getRowPartitionTypeByDimension(t-1)]}`)}}static getMaxWidthRowSplit(t){const e=t.length;if(e===0||e===1)return 0;let s=0;for(let o=0;o<e-1;++o){const r=t[o+1]-t[o];r>s&&(s=r)}return s}static getMaxWidthValueRowID(t){const e=t.length;if(e===0)return 0;let s=0,o=t[0],r=0;for(let i=1;i<e;++i){const a=t[i];a!==o&&(o=a,r=Math.max(i-s,r),s=i)}return Math.max(e-s,r)}tensorShapeFromTensor(t,e,s=!0){if(e.length===0){if(t[0]===-1)return[];throw new Error("The only valid scalar shape tensor is the fully unknown shape specified as -1.")}return Qf(t,s)}calculateOutputSize(t){const e=this.valuesShape,s=this.defaultValueShape;Ex(s,e);const o=this.tensorShapeFromTensor(this.shape,this.shapeShape),i=Sx(this.raggedRank,o,e);i[0]<0&&(i[0]=t);for(let a=1;a<=this.raggedRank;++a)i[a]<0&&(i[a]=this.getMaxWidth(a));return i}calculateFirstParentOutputIndex(t,e,s){const o=Math.min(t,s),r=[];let i=0;for(let a=0;a<o;++a,i+=e)r.push(i);for(let a=o;a<t;++a)r.push(-1);return v(r.length===t,()=>"Final length of result must be equal to firstDimension."),r}calculateOutputIndexRowSplit(t,e,s,o){const r=t.length,i=[];for(let a=0;a<r-1;++a){const l=t[a+1]-t[a];let c=Math.min(o,l),u=e[a];u===-1&&(c=0);for(let h=0;h<c;++h)i.push(u),u+=s;for(let h=0;h<l-c;++h)i.push(-1)}if(r>0&&i.length!==t[r-1])throw new Error("Invalid row split size.");return i}calculateOutputIndexValueRowID(t,e,s,o){const r=t.length,i=[];if(r===0)return[];let a=0,l=t[0];if(l>=e.length)throw new Error(`Got currentValueRowId=${l}, which is not less than ${e.length}`);let c=e[l];i.push(c);for(let u=1;u<r;++u){const h=t[u];if(h===l)c>=0&&(++a,a<o?c+=s:c=-1);else{if(a=0,l=h,h>=e.length)throw new Error(`Got nextValueRowId=${h} which is not less than ${e.length}`);c=e[h]}i.push(c)}if(i.length!==t.length)throw new Error("Invalid row ids.");return i}calculateOutputIndex(t,e,s,o){const r=this.getRowPartitionTensor(t),i=this.getRowPartitionTypeByDimension(t);switch(i){case tn.VALUE_ROWIDS:return this.calculateOutputIndexValueRowID(r,e,s,o);case tn.ROW_SPLITS:if(r.length-1>e.length)throw new Error(`Row partition size is greater than output size: ${r.length-1} > ${e.length}`);return this.calculateOutputIndexRowSplit(r,e,s,o);default:throw new Error(`Unsupported partition type: ${tn[i]}`)}}getFirstDimensionSize(){const t=this.rowPartitionValues[0];if(this.rowPartitionTypes.length===0)throw new Error("No row_partition_types given.");const e=this.rowPartitionTypes[0];switch(e){case tn.FIRST_DIM_SIZE:return t[0];case tn.VALUE_ROWIDS:throw new Error("Cannot handle VALUE_ROWIDS in first dimension.");case tn.ROW_SPLITS:return this.rowPartitionValuesShapes[0][0]-1;default:throw new Error(`Cannot handle type ${tn[e]}`)}}compute(){if(this.rowPartitionValues[0].length<=0)throw new Error("Invalid first partition input. Tensor requires at least one element.");const e=this.getFirstDimensionSize(),s=this.calculateOutputSize(e),o=new Array(this.raggedRank+1);o[o.length-1]=1;for(let l=o.length-2;l>=0;--l)o[l]=o[l+1]*s[l+1];const r=Qf(s,!1),i=Yt(this.valuesDType,H(r));if(o[0]*s[0]>0){let l=this.calculateFirstParentOutputIndex(e,o[0],s[0]);for(let c=1;c<=this.raggedRank;++c)l=this.calculateOutputIndex(c-1,l,o[c],s[c]);this.setOutput(this.raggedRank,l,i,r)}return[r,i]}setOutput(t,e,s,o){if(s.length===0)return;const r=this.values,i=s;let a=o.slice();a=a.slice(t+1);const l=H(a),c=e.length;let u=this.defaultValue;if(u.length!==l&&u.length!==1){const f=this.defaultValueShape;B(()=>{const m=L(u,f);u=xr(m,a).dataSync()})}let h=0,d=0,p=0;for(let f=0;f<=c;++f){let m=f<c?e[f]:-1;if(m===p){++p;continue}if(d<p){const g=r.subarray(h*l),x=i.subarray(d*l),b=(p-d)*l;Jf(x,g,b)}if(f>=c){const g=s.length;m=Math.floor(g/l)}if(m>p)if(this.defaultValue.length===1)i.subarray(p*l,m*l).fill(this.defaultValue[0]),p=m;else for(;m>p;){const g=i.slice(p*l);Jf(g,u,l),++p}m<0?(h=f+1,d=p):(h=f,d=p,p=d+1)}}}function Jf(n,t,e){for(let s=0;s<e;s++)n[s]=t[s]}function Qf(n,t){const e=[];for(let s of n){if(s<0){if(!t)throw new Error(`Dimension ${s} must be >= 0`);if(s<-1)throw new Error(`Dimension ${s} must be >= -1`);s=-1}e.push(s)}return e}function U1(n,t,e,s,o,r,i,a,l,c){return new qa(n,t,e,s,o,r,i,a,l,c).compute()}function G1(n,t,e,s){const o=n===t,r=n<t&&e<0,i=t<n&&e>1;if(o||r||i)return $e(0,s);const a=Math.abs(Math.ceil((t-n)/e)),l=$e(a,s);t<n&&e===1&&(e=-1),l[0]=n;for(let c=1;c<l.length;c++)l[c]=l[c-1]+e;return l}const H1=Un(n=>1/Math.sqrt(n)),ID=Es(fi,H1),vD={kernelName:fi,backendName:"cpu",kernelFunc:ID};function Vs(n,t,e,s,o,r,i,a,l,c){const u=[s/o,o],h=n.values,d=t.values;if(s===0)return wt(e,t.dtype);const p=l instanceof xe?l:wt(u,t.dtype);typeof l=="string"||typeof l=="number"?p.values.fill(l):typeof l=="boolean"&&p.values.fill(+l);for(let f=0;f<r;f++){const m=[];let g=0;for(let x=0;x<i;x++){const b=h[f*i+x];m.push(b),g+=b*a[x]}if(g<0||g>=s/o)throw new Error(`Invalid indices: ${m} does not index into ${e}`);for(let x=0;x<o;x++)c?p.values[g*o+x]+=d[f*o+x]:p.values[g*o+x]=t.rank===0?d[0]:d[f*o+x]}return p}const kD=Un(n=>1/(1+Math.exp(-n))),j1=Dt(yi,n=>1/(1+Math.exp(-n))),SD={kernelName:yi,backendName:"cpu",kernelFunc:j1};function q1(n,t,e,s,o){const r=wd(s,t,e),i=H(e),a=lt(s);if(r){const h=Cd(t,a);return o==="string"?n.slice(h,h+i):n.subarray(h,h+i)}const l=o==="string"?Zn(n):n,c=wt(s,o,l),u=wt(e,o);for(let h=0;h<u.size;++h){const d=u.indexToLoc(h),p=d.map((f,m)=>f+t[m]);u.set(c.get(...p),...d)}return o==="string"?Xx(u.values):u.values}function oo(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{begin:r,size:i}=s;rt(o,"slice");const[a,l]=uc(o,r,i);bd(o,a,l);const c=e.data.get(o.dataId).values,u=q1(c,a,l,o.shape,o.dtype);return e.makeTensorInfo(l,o.dtype,u)}const ND={kernelName:ql,backendName:"cpu",kernelFunc:oo};function K1(n,t,e,s,o,r,i){const a=t[0],l=r[0],c=new Array(l),u=new Array(a),h=t[1];if(l===0){if(a!==0)throw new Error(Mx(a));const g=Yt(e,0),x=Yt(o,0);return[g,[0,h],x,c,u]}let d=!0,p=0;const f=new Array(l).fill(0);for(let g=0;g<a;++g){const x=n[g*h];if(x<0)throw new Error(Lx(g,x));if(x>=l)throw new Error(Px(g,x,l));++f[x],d=d&&x>=p,p=x}let m=!0;for(let g=0;g<l;++g){const x=f[g]===0;c[g]=x,m=m&&!x,f[g]=Math.max(f[g],1),g>0&&(f[g]+=f[g-1])}if(m&&d){const g=n,x=s;for(let b=0;b<a;++b)u[b]=b;return[g,[a,h],x,c,u]}else{const g=f[l-1],x=Yt(e,g*h),b=Yt(o,g),w=new Array(l).fill(0);for(let y=0;y<a;++y){const C=n[y*h],I=w[C],N=(C===0?0:f[C-1])+I;w[C]++;for(let T=0;T<h;++T)x[N*h+T]=n[y*h+T];b[N]=s[y],u[y]=N}for(let y=0;y<l;++y)if(w[y]===0){const I=y===0?0:f[y-1];x[I*h+0]=y;for(let N=1;N<h;++N)x[I*h+N]=0;b[I]=i}return[x,[g,h],b,c,u]}}function X1(n,t,e,s,o){const r=H(s),i=t[0],a=o.length,l=[];let c=1,u=-1;for(let g=0;g<a;++g){const x=o[g];if(x===-1){if(u!==-1)throw new Error(zx(u,g));u=g,l.push(1)}else{if(x<0)throw new Error(Bx(g,x));c*=x,l.push(x)}}if(u!==-1){if(c<=0)throw new Error(Vx());const g=Math.trunc(r/c);if(c*g!==r)throw new Error(Wx(s,l));l[u]=g}if(H(l)!==r)throw new Error(Ux(s,l));const d=s.length,p=[];if(d>0){p[d-1]=1;for(let g=d-2;g>=0;--g)p[g]=p[g+1]*s[g+1]}const f=[];if(a>0){f[a-1]=1;for(let g=a-2;g>=0;--g)f[g]=f[g+1]*l[g+1]}const m=Yt(e,i*a);for(let g=0;g<i;++g){let x=0;for(let b=0;b<d;++b)x+=n[g*d+b]*p[b];for(let b=0;b<a;++b)m[g*a+b]=Math.trunc(x/f[b]),x%=f[b]}return[m,[i,a],l]}function fp(n,t,e,s,o,r=!1,i=0){const a=s.length,l=[t[0],n.length/t[0]],c=l[1],h=a>0?o[a-1]+1:0;if(h<0)throw new Error(vu());const d=t.slice();d[0]=h;const p=d.reduce((w,y)=>w*y,1),f=Yt(e,p);if(a===0)return h>0&&f.fill(i),[f,d];if(h<=0)throw new Error(vu());let m=0,g=1,x=0,b=o[m];for(;;){let w=0;if(g<a){if(w=o[g],b===w){++g;continue}if(b>=w)throw new Error(Gx())}if(b<0||b>=h)throw new Error(Hx(b,h));b>x&&f.fill(i,x*c,b*c);for(let y=m;y<g;++y){const C=s[y];if(C<0||C>=l[0])throw new Error(jx(y,s[y],l[0]));for(let I=0;I<c;I++)f[b*c+I]+=n[C*c+I]}if(r)for(let y=0;y<c;y++)f[b*c+y]/=g-m;if(m=g,++g,x=b+1,b=w,g>a)break}return x<h&&f.fill(i,x*c,h*c),[f,d]}const TD=Un(n=>Math.sqrt(n)),ED=Dt(Ci,n=>Math.sqrt(n)),RD={kernelName:Ci,backendName:"cpu",kernelFunc:ED};const Y1=ee(((n,t)=>{const e=n-t;return e*e})),AD=ce($i,Y1),DD={kernelName:$i,backendName:"cpu",kernelFunc:AD};const Z1=Un((n,t)=>{const{pattern:e,replaceGlobal:s,rewrite:o}=t;return n.replace(new RegExp(e,s?"g":""),o)}),FD=Es(Ah,Z1),_D={kernelName:Ah,backendName:"cpu",kernelFunc:FD};function J1(n,t,e,s){const o=wt(n,t.dtype);for(let r=0;r<o.size;r++){const i=o.indexToLoc(r),a=new Array(i.length);for(let l=0;l<a.length;l++)a[l]=i[l]*e[l]+s[l];o.set(t.get(...a),...i)}return o}class OD{constructor(t,e,s,o,r,i){this.separator=ds(t),this.nGramWidths=e,this.leftPad=ds(s),this.rightPad=ds(o),this.padWidth=r,this.preserveShort=i}getPadWidth(t){return Math.min(this.padWidth<0?t-1:this.padWidth,t-1)}getNumNGrams(t,e){const s=this.getPadWidth(e);return Math.max(0,t+2*s-e+1)}createNGrams(t,e,s,o,r,i){for(let a=0;a<r;++a){const l=this.getPadWidth(i),c=Math.max(0,l-a),u=Math.max(0,l-(r-(a+1))),h=i-(c+u),d=e+(c>0?0:a-l);let p=0;p+=c*this.leftPad.length;for(let b=0;b<h;++b)p+=t[d+b].length;p+=u*this.rightPad.length;const f=c+u+h-1;p+=f*this.separator.length,s[o+a]=new Uint8Array(p);const m=s[o+a];let g=0;const x=b=>b.forEach(w=>m[g++]=w);for(let b=0;b<c;++b)x(this.leftPad),x(this.separator);for(let b=0;b<h-1;++b)x(t[d+b]),x(this.separator);if(h>0){x(t[d+h-1]);for(let b=0;b<u;++b)x(this.separator),x(this.rightPad)}else{for(let b=0;b<u-1;++b)x(this.rightPad),x(this.separator);x(this.rightPad)}}}compute(t,e){const s=t.length,o=e.length;if(o>0){let l=e[0];if(l!==0)throw new Error(`First split value must be 0, got ${l}`);for(let c=1;c<o;++c){let u=e[c]>=l;if(u=u&&e[c]<=s,!u)throw new Error(`Invalid split value ${e[c]}, must be in [${l}, ${s}]`);l=e[c]}if(l!==s)throw new Error(`Last split value must be data size. Expected ${s}, got ${l}`)}const r=o-1,i=Yt("int32",o);if(s===0||o===0){const l=new Array(s);for(let c=0;c<=r;++c)i[c]=0;return[l,i]}i[0]=0;for(let l=1;l<=r;++l){const c=e[l]-e[l-1];let u=0;this.nGramWidths.forEach(h=>{u+=this.getNumNGrams(c,h)}),this.preserveShort&&c>0&&u===0&&(u=1),i[l]=i[l-1]+u}const a=new Array(i[r]);for(let l=0;l<r;++l){const c=e[l];let u=i[l];if(this.nGramWidths.forEach(h=>{const d=e[l+1]-e[l],p=this.getNumNGrams(d,h);this.createNGrams(t,c,a,u,p,h),u+=p}),this.preserveShort&&u===i[l]){const h=e[l+1]-e[l];if(h===0)continue;const d=h+2*this.padWidth;this.createNGrams(t,c,a,u,1,d)}}return[a,i]}}function Q1(n,t,e,s,o,r,i,a){return new OD(e,s,o,r,i,a).compute(n,t)}function MD(n,t,e,s){if(!n.length)return;if(t.length===0){for(let r=0;r<n.length;++r)s.push(n.subarray(r,r+1));return}if(t.length===1){const r=t[0];let i=n.indexOf(r);for(;i!==-1;){const a=n.subarray(0,i);(!e||a.length!==0)&&s.push(a),n=n.subarray(i+1),i=n.indexOf(r)}(!e||n.length!==0)&&s.push(n);return}let o=0;for(let r=0;r<n.length+1;r++)if(r===n.length||t.indexOf(n[r])!==-1){const i=n.subarray(o,r);(!e||i.length!==0)&&s.push(i),o=r+1}}function ty(n,t,e){const s=n.length,o=[];let r=0,i=0;const a=new Array(s);for(let d=0;d<s;++d){const p=o.length;MD(n[d],t,e,o);const f=o.length-p;a[d]=f,r+=f,i=Math.max(i,f)}const l=Yt("int32",r*2),c=new Array(r),u=[s,i];let h=0;for(let d=0;d<s;++d)for(let p=0;p<a[d];++p)l[h*2]=d,l[h*2+1]=p,c[h]=o[h],++h;return[l,c,u]}function ey(n,t){const e=Yt("int32",n.length);for(let s=0;s<n.length;++s)e[s]=XC(n[s]).modulo(t).getLowBitsUnsigned();return e}const ny=ee(((n,t)=>n-t)),LD=up(((n,t,e,s)=>({real:n-e,imag:t-s}))),mp=ce(Ii,ny,LD),PD={kernelName:Ii,backendName:"cpu",kernelFunc:mp};function sy(n,t){const e=new Array(n.rank);for(let o=0;o<e.length;o++)e[o]=n.shape[o]*t[o];const s=wt(e,n.dtype);for(let o=0;o<s.values.length;++o){const r=s.indexToLoc(o),i=new Array(n.rank);for(let l=0;l<i.length;l++)i[l]=r[l]%n.shape[l];const a=n.locToIndex(i);s.values[o]=n.values[a]}return s}const fr=(n,t)=>{const e=t.value-n.value;return e===0?n.index-t.index:e};function oy(n,t,e=0,s=n.length-1){for(;s>e;){if(s-e>600){const a=s-e+1,l=t-e+1,c=Math.log(a),u=.5*Math.exp(2*c/3),h=.5*Math.sqrt(c*u*(a-u)/a)*Math.sign(l-a/2),d=Math.max(e,Math.floor(t-l*u/a+h)),p=Math.min(s,Math.floor(t+(a-l)*u/a+h));oy(n,t,d,p)}const o=n[t];let r=e,i=s;for(wo(n,e,t),fr(n[s],o)>0&&wo(n,e,s);r<i;){for(wo(n,r,i),r++,i--;fr(n[r],o)<0;)r=r+1;for(;fr(n[i],o)>0;)i=i-1}fr(n[e],o)===0?wo(n,e,i):(i=i+1,wo(n,i,s)),i<=t&&(e=i+1),t<=i&&(s=i-1)}}function ry(n,t,e,s,o){const r=t[t.length-1],[i,a]=[n.length/r,r],l=Ce(e,i*s),c=Ce("int32",i*s);for(let h=0;h<i;h++){const d=h*a,p=n.subarray(d,d+a);let f=new Array(p.length);p.forEach((b,w)=>f[w]={value:b,index:w}),s<f.length&&(oy(f,s),f=f.slice(0,s)),o&&f.sort(fr);const m=h*s,g=l.subarray(m,m+s),x=c.subarray(m,m+s);for(let b=0;b<s;b++)g[b]=f[b].value,x[b]=f[b].index}const u=t.slice();return u[u.length-1]=s,[wt(u,e,l),wt(u,"int32",c)]}function iy(n,t,e,s){const o=Ct(t,e)[0],r=[1,e[0],1];for(let f=0;f<o;f++)r[0]*=e[f];r[1]=e[o];for(let f=o+1;f<e.length;f++)r[2]*=e[f];const i=new Map,a=new Int32Array(e[o]),l=new xe(r,s,n),c=[],u=r[0]===1&&r[2]===1;for(let f=0;f<e[o];f++){let m;if(u)m=n[f].toString();else{const x=[];for(let b=0;b<r[0];b++)for(let w=0;w<r[2];w++)x.push(l.get(b,f,w));m=x.join(",")}const g=i.get(m);if(g!=null)a[f]=g;else{const x=i.size;i.set(m,x),a[f]=x,c.push(f)}}const h=r.slice();h[1]=i.size;const d=new xe(h,s);c.forEach((f,m)=>{for(let g=0;g<r[0];g++)for(let x=0;x<r[2];x++)d.set(l.get(g,f,x),g,m,x)});const p=e.slice();return p[o]=h[1],{outputValues:d.values,outputShape:p,indices:a}}const zD=Object.freeze(Object.defineProperty({__proto__:null,addImpl:m1,bincountImpl:hp,bincountReduceImpl:g1,bitwiseAndImpl:x1,castImpl:f1,ceilImpl:b1,concatImpl:y1,equalImpl:w1,expImpl:$1,expm1Impl:v1,floorDivImpl:S1,floorImpl:k1,gatherNdImpl:N1,gatherV2Impl:T1,greaterEqualImpl:R1,greaterImpl:E1,lessEqualImpl:D1,lessImpl:A1,linSpaceImpl:F1,logImpl:_1,maxImpl:O1,maximumImpl:M1,minimumImpl:L1,multiplyImpl:dp,negImpl:P1,notEqualImpl:z1,prodImpl:B1,raggedGatherImpl:V1,raggedRangeImpl:W1,raggedTensorToTensorImpl:U1,rangeImpl:G1,rsqrtImpl:H1,scatterImpl:Vs,sigmoidImpl:kD,simpleAbsImpl:p1,sliceImpl:q1,sparseFillEmptyRowsImpl:K1,sparseReshapeImpl:X1,sparseSegmentReductionImpl:fp,sqrtImpl:TD,squaredDifferenceImpl:Y1,staticRegexReplaceImpl:Z1,stridedSliceImpl:J1,stringNGramsImpl:Q1,stringSplitImpl:ty,stringToHashBucketFastImpl:ey,subImpl:ny,tileImpl:sy,topKImpl:ry,transposeImpl:pp,uniqueImpl:iy},Symbol.toStringTag,{value:"Module"}));vg("cpu",()=>new vc,1);const ay=Dt(jr,n=>n>=0?n:Math.exp(n)-1),BD={kernelName:jr,backendName:"cpu",kernelFunc:ay};function ly(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{alpha:r}=s;rt([o],"leakyRelu");const i=H(o.shape),a=e.data.get(o.dataId).values,l=Ce("float32",i);for(let c=0;c<a.length;c++)l[c]=a[c]<0?r*a[c]:a[c];return e.makeTensorInfo(o.shape,"float32",l)}const VD={kernelName:Cl,backendName:"cpu",kernelFunc:ly};const WD=ee((n,t)=>n<0?t*n:n);function cy(n){const{inputs:t,backend:e}=n,{x:s,alpha:o}=t;rt([s,o],"prelu");const r=e.data.get(s.dataId).values,i=e.data.get(o.dataId).values,[a,l]=WD(s.shape,o.shape,r,i,"float32");return e.makeTensorInfo(l,"float32",a)}const UD={kernelName:Bl,backendName:"cpu",kernelFunc:cy};const uy=Dt(hi,n=>Math.max(0,n)),GD={kernelName:hi,backendName:"cpu",kernelFunc:uy};const hy=Dt(di,n=>Math.min(Math.max(0,n),6)),HD={kernelName:di,backendName:"cpu",kernelFunc:hy};function Ka(n,t,e,s,o){if(e==="linear")return Wn({inputs:{x:t},backend:n});if(e==="relu")return uy({inputs:{x:t},backend:n});if(e==="elu")return ay({inputs:{x:t},backend:n});if(e==="relu6")return hy({inputs:{x:t},backend:n});if(e==="prelu")return cy({inputs:{x:t,alpha:s},backend:n});if(e==="leakyrelu")return ly({inputs:{x:t},backend:n,attrs:{alpha:o}});if(e==="sigmoid")return j1({inputs:{x:t},backend:n});throw new Error(`Activation ${e} has not been implemented for the CPU backend.`)}function Bt(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{shape:r}=s,i=H(o.shape),a=Om(r,i),l=H(a);v(i===l,()=>`The new shape (${a}) has ${l} elements and the old shape (${o.shape}) has ${i} elements. The new shape and old shape must have the same number of elements.`),e.incRef(o.dataId);const c=e.data.get(o.dataId);if(c.complexTensorInfos!=null){const u=c.complexTensorInfos.real,h=c.complexTensorInfos.imag;u.shape=a,h.shape=a}return{dataId:o.dataId,shape:a,dtype:o.dtype}}const jD={kernelName:Wl,backendName:"cpu",kernelFunc:Bt};function dy(n){const{inputs:t,backend:e,attrs:s}=n,{a:o,b:r}=t,{transposeA:i,transposeB:a}=s;rt([o,r],"matMul");const l=o.shape.length,c=r.shape.length,u=i?o.shape[l-2]:o.shape[l-1],h=a?r.shape[c-1]:r.shape[c-2],d=i?o.shape[l-1]:o.shape[l-2],p=a?r.shape[c-2]:r.shape[c-1],f=o.shape.slice(0,-2),m=r.shape.slice(0,-2),g=H(f),x=H(m),w=mt(o.shape.slice(0,-2),r.shape.slice(0,-2)).concat([d,p]);v(u===h,()=>`Error in matMul: inner shapes (${u}) and (${h}) of Tensors with shapes ${o.shape} and ${r.shape} and transposeA=${i} and transposeB=${a} must match.`);const y=i?[g,u,d]:[g,d,u],C=a?[x,p,h]:[x,h,p],I=Bt({inputs:{x:o},backend:e,attrs:{shape:y}}),N=Bt({inputs:{x:r},backend:e,attrs:{shape:C}}),T=i?I.shape[1]:I.shape[2],k=i?I.shape[2]:I.shape[1],S=a?N.shape[1]:N.shape[2],$=Math.max(g,x),R=e.data.get(I.dataId).values,A=e.data.get(N.dataId).values,O=lt(I.shape),M=lt(N.shape),[z,G,V]=i?[O[0],1,O[1]]:[O[0],O[1],1],[U,q,K]=a?[1,M[1],M[0]]:[M[1],1,M[0]],Y=k*S,Z=wt([$,k,S],I.dtype),tt=Z.values,Q=e.blockSize;for(let ot=0;ot<$;ot++){const at=ot%g,dt=ot%x;for(let ht=0;ht<k;ht+=Q){const gt=Math.min(ht+Q,k);for(let bt=0;bt<S;bt+=Q){const Rt=Math.min(bt+Q,S);for(let Mt=0;Mt<T;Mt+=Q){const Kt=Math.min(Mt+Q,T);for(let Lt=ht;Lt<gt;Lt++)for(let Ft=bt;Ft<Rt;Ft++){let Ht=0;for(let Wt=Mt;Wt<Kt;Wt++){const Gn=R[at*z+Lt*G+Wt*V],me=A[Wt*U+Ft*q+dt*K];Ht+=Gn*me}tt[ot*Y+(Lt*S+Ft)]+=Ht}}}}}return e.disposeIntermediateTensorInfo(I),e.disposeIntermediateTensorInfo(N),e.makeTensorInfo(w,Z.dtype,Z.values)}const qD={kernelName:il,backendName:"cpu",kernelFunc:dy};function KD(n){const{inputs:t,backend:e,attrs:s}=n,{a:o,b:r,bias:i,preluActivationWeights:a}=t,{transposeA:l,transposeB:c,activation:u,leakyreluAlpha:h}=s;let d,p,f;const m=[];d=dy({inputs:{a:o,b:r},attrs:{transposeA:l,transposeB:c},backend:e}),i&&(p=Lo({inputs:{a:d,b:i},backend:e}),m.push(d),d=p),u&&(f=Ka(e,d,u,a,h),m.push(d),d=f);for(const x of m)e.disposeIntermediateTensorInfo(x);return d}const XD={kernelName:Sa,backendName:"cpu",kernelFunc:KD};const YD=Dt(Fr,n=>Math.acos(n)),ZD={kernelName:Fr,backendName:"cpu",kernelFunc:YD};const JD=Dt(_r,n=>Math.acosh(n)),QD={kernelName:_r,backendName:"cpu",kernelFunc:JD};function tF(n){const{inputs:t,backend:e}=n,s=t;rt(t,"addN");const o=s.map(a=>e.data.get(a.dataId).values),r=wt(s[0].shape,s[0].dtype),i=r.values;for(let a=0;a<s.length;a++){const l=o[a];for(let c=0;c<i.length;c++)i[c]+=l[c]}return e.makeTensorInfo(r.shape,r.dtype,r.values)}const eF={kernelName:Xu,backendName:"cpu",kernelFunc:tF};function nF(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{axis:r,keepDims:i}=s;rt(o,"all");const a=Ct(r,o.shape);let l=a;const c=qt(l,o.shape.length);let u=o;c!=null&&(u=Pe({inputs:{x:o},backend:e,attrs:{perm:c}}),l=Qt(l.length,o.shape.length)),ye("all",l,u.shape.length);const[h,d]=fe(u.shape,l),p=H(d),f=$e(H(h),u.dtype),m=e.data.get(u.dataId).values;for(let x=0;x<f.length;++x){const b=x*p;let w=m[b];for(let y=0;y<p;++y){const C=m[b+y];w=w&&C}f[x]=w}c!=null&&e.disposeIntermediateTensorInfo(u);const g=e.makeTensorInfo(h,u.dtype,f);if(i){const x=se(h,a),b=Bt({inputs:{x:g},backend:e,attrs:{shape:x}});return e.disposeIntermediateTensorInfo(g),b}return g}const sF={kernelName:Yu,backendName:"cpu",kernelFunc:nF};function oF(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{axis:r,keepDims:i}=s;rt(o,"any");const a=Ct(r,o.shape);let l=a;const c=qt(l,o.shape.length);let u=o;c!=null&&(u=Pe({inputs:{x:o},backend:e,attrs:{perm:c}}),l=Qt(l.length,o.shape.length)),ye("any",l,u.shape.length);const[h,d]=fe(u.shape,l),p=H(d),f=$e(H(h),u.dtype),m=e.data.get(u.dataId).values;for(let x=0;x<f.length;++x){const b=x*p;let w=m[b];for(let y=0;y<p;++y){const C=m[b+y];w=w||C}f[x]=w}c!=null&&e.disposeIntermediateTensorInfo(u);const g=e.makeTensorInfo(h,u.dtype,f);if(i){const x=se(h,a),b=Bt({inputs:{x:g},backend:e,attrs:{shape:x}});return e.disposeIntermediateTensorInfo(g),b}return g}const rF={kernelName:Zu,backendName:"cpu",kernelFunc:oF};function iF(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{axis:r}=s;rt(o,"argMax");let i=Ct(r,o.shape);const a=qt(i,o.shape.length);let l=o;const c=[];a!=null&&(l=Pe({inputs:{x:o},backend:e,attrs:{perm:a}}),c.push(l),i=Qt(i.length,l.shape.length)),i=[i[0]],ye("argMax",i,l.shape.length);const[u,h]=fe(l.shape,i),d=H(u),p=$e(d,"int32"),f=H(h),m=e.data.get(l.dataId).values;for(let g=0;g<p.length;++g){const x=g*f;let b=m[x],w=0;for(let y=0;y<f;++y){const C=m[x+y];C>b&&(b=C,w=y)}p[g]=w}return c.forEach(g=>e.disposeIntermediateTensorInfo(g)),e.makeTensorInfo(u,"int32",p)}const aF={kernelName:nl,backendName:"cpu",kernelFunc:iF};function lF(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{axis:r}=s;rt(o,"argMin");let i=Ct(r,o.shape);const a=qt(i,o.shape.length);let l=o;const c=[];a!=null&&(l=Pe({inputs:{x:o},backend:e,attrs:{perm:a}}),c.push(l),i=Qt(i.length,l.shape.length)),i=[i[0]],ye("argMin",i,l.shape.length);const[u,h]=fe(l.shape,i),d=H(u),p=$e(d,"int32"),f=H(h),m=e.data.get(l.dataId).values;for(let g=0;g<p.length;++g){const x=g*f;let b=m[x],w=0;for(let y=0;y<f;++y){const C=m[x+y];C<b&&(b=C,w=y)}p[g]=w}return c.forEach(g=>e.disposeIntermediateTensorInfo(g)),e.makeTensorInfo(u,"int32",p)}const cF={kernelName:sl,backendName:"cpu",kernelFunc:lF};const uF=Dt(Or,n=>Math.asin(n)),hF={kernelName:Or,backendName:"cpu",kernelFunc:uF};const dF=Dt(Mr,n=>Math.asinh(n)),pF={kernelName:Mr,backendName:"cpu",kernelFunc:dF};const fF=Dt(Lr,n=>Math.atan(n)),mF={kernelName:Lr,backendName:"cpu",kernelFunc:fF};const gF=ee((n,t)=>Math.atan2(n,t)),xF=ce(zr,gF),bF={kernelName:zr,backendName:"cpu",kernelFunc:xF};const yF=Dt(Pr,n=>Math.atanh(n)),wF={kernelName:Pr,backendName:"cpu",kernelFunc:yF};function gp(n,t,e,s,o,r){const i=o.strideHeight,a=o.strideWidth,l=o.dilationHeight,c=o.dilationWidth,u=o.effectiveFilterHeight,h=o.effectiveFilterWidth,d=o.padInfo.top,p=o.padInfo.left,f=r==="max"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,m=wt(o.outShape,e),g=m.values,x=o.outShape[1]*o.outShape[2]*o.outShape[3],b=o.outShape[2]*o.outShape[3],w=o.outShape[3];for(let y=0;y<o.batchSize;++y){const C=y*x,I=y*s[0];for(let N=0;N<o.inChannels;++N)for(let T=0;T<o.outHeight;++T){const k=T*i-d,S=Math.max(0,k),$=Math.min(o.inHeight,u+k),R=C+T*b;for(let A=0;A<o.outWidth;++A){const O=A*a-p,M=Math.max(0,O),z=Math.min(o.inWidth,h+O);let G=f,V=0,U=0;for(let K=S;K<$;K+=l){const Y=I+K*s[1];for(let Z=M;Z<z;Z+=c){const tt=Y+Z*s[2],Q=n[tt+N];r==="max"&&Q>G?G=Q:r==="avg"&&(V+=Q,U++)}if(isNaN(G))break}const q=R+A*w+N;g[q]=r==="avg"?V/U:G}}}return m}function py(n,t,e,s,o=!1,r=!1){const i=wt(s.outShape,"int32"),a=s.strideHeight,l=s.strideWidth,c=s.dilationHeight,u=s.dilationWidth,h=s.effectiveFilterHeight,d=s.effectiveFilterWidth,p=s.padInfo.top,f=s.padInfo.left,m=wt(t,e,n);for(let g=0;g<s.batchSize;++g)for(let x=0;x<s.inChannels;++x)for(let b=0;b<s.outHeight;++b){const w=b*a-p;let y=w;for(;y<0;)y+=c;const C=Math.min(s.inHeight,h+w);for(let I=0;I<s.outWidth;++I){const N=I*l-f;let T=N;for(;T<0;)T+=u;const k=Math.min(s.inWidth,d+N);let S=Number.NEGATIVE_INFINITY,$=-1;for(let R=y;R<C;R+=c){const A=R-w;for(let O=T;O<k;O+=u){const M=O-N,z=m.get(g,R,O,x);z>S&&(S=z,o?$=r?((g*s.inHeight+R)*s.inWidth+O)*s.inChannels+x:(R*s.inWidth+O)*s.inChannels+x:$=A*d+M)}}i.set($,g,b,I,x)}}return i}function fy(n,t,e,s,o,r){const i=o.strideDepth,a=o.strideHeight,l=o.strideWidth,c=o.dilationDepth,u=o.dilationHeight,h=o.dilationWidth,d=o.effectiveFilterDepth,p=o.effectiveFilterHeight,f=o.effectiveFilterWidth,m=o.padInfo.front,g=o.padInfo.top,x=o.padInfo.left,b=r==="max"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,w=wt(o.outShape,e),y=w.values,C=o.outShape[1]*o.outShape[2]*o.outShape[3]*o.outShape[4],I=o.outShape[2]*o.outShape[3]*o.outShape[4],N=o.outShape[3]*o.outShape[4],T=o.outShape[4];for(let k=0;k<o.batchSize;++k){const S=k*C,$=k*s[0];for(let R=0;R<o.inChannels;++R)for(let A=0;A<o.outDepth;++A){const O=A*i-m;let M=O;for(;M<0;)M+=c;const z=Math.min(o.inDepth,d+O),G=S+A*I;for(let V=0;V<o.outHeight;++V){const U=V*a-g;let q=U;for(;q<0;)q+=u;const K=Math.min(o.inHeight,p+U),Y=G+V*N;for(let Z=0;Z<o.outWidth;++Z){const tt=Z*l-x;let Q=tt;for(;Q<0;)Q+=h;const ot=Math.min(o.inWidth,f+tt),at=Y+Z*T;let dt=b,ht=0,gt=0;for(let Rt=M;Rt<z;Rt+=c){const Mt=$+Rt*s[1];for(let Kt=q;Kt<K;Kt+=u){const Lt=Mt+Kt*s[2];for(let Ft=Q;Ft<ot;Ft+=h){const Ht=Lt+Ft*s[3],Wt=n[Ht+R];if(r==="max"&&Wt>dt?dt=Wt:r==="avg"&&(ht+=Wt,gt++),isNaN(dt))break}if(isNaN(dt))break}if(isNaN(dt))break}const bt=at+R;y[bt]=r==="avg"?ht/Math.max(gt,1):dt}}}}return w}function CF(n,t){const e=wt(t.outShape,"int32"),s=t.strideDepth,o=t.strideHeight,r=t.strideWidth,i=t.dilationDepth,a=t.dilationHeight,l=t.dilationWidth,c=t.effectiveFilterDepth,u=t.effectiveFilterHeight,h=t.effectiveFilterWidth,d=t.padInfo.front,p=t.padInfo.top,f=t.padInfo.left;for(let m=0;m<t.batchSize;++m)for(let g=0;g<t.inChannels;++g)for(let x=0;x<t.outDepth;++x){const b=x*s-d;let w=b;for(;w<0;)w+=i;const y=Math.min(t.inDepth,c+b);for(let C=0;C<t.outHeight;++C){const I=C*o-p;let N=I;for(;N<0;)N+=a;const T=Math.min(t.inHeight,u+I);for(let k=0;k<t.outWidth;++k){const S=k*r-f;let $=S;for(;$<0;)$+=l;const R=Math.min(t.inWidth,h+S);let A=Number.NEGATIVE_INFINITY,O=-1;for(let M=w;M<y;M+=i){const z=M-b;for(let G=N;G<T;G+=a){const V=G-I;for(let U=$;U<R;U+=l){const q=U-S,K=n.get(m,M,G,U,g);K>=A&&(A=K,O=z*u*h+V*u+q)}}}e.set(O,m,x,C,k,g)}}}return e}function $F(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t;rt(o,"avgPool");const{filterSize:r,strides:i,pad:a,dimRoundingMode:l}=s,c=1;v(ve(i,c),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${i} and dilations '${c}'`);const u=cn(o.shape,r,i,c,a,l);let h;if(u.filterWidth===1&&u.filterHeight===1&&Et(u.inShape,u.outShape))h=Wn({inputs:{x:o},backend:e});else{const d=e.data.get(o.dataId).values,p=lt(o.shape),f=gp(d,o.shape,o.dtype,p,u,"avg");h=e.makeTensorInfo(u.outShape,o.dtype,f.values)}return h}const IF={kernelName:ol,backendName:"cpu",kernelFunc:$F};function vF(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{filterSize:r,strides:i,pad:a,dimRoundingMode:l,dataFormat:c}=s;rt(o,"avgPool3d");const u=Qn(o.shape,r,i,1,a,l,c),h=e.data.get(o.dataId).values,d=fy(h,o.shape,o.dtype,lt(o.shape),u,"avg");return e.makeTensorInfo(d.shape,"float32",d.values)}const kF={kernelName:rl,backendName:"cpu",kernelFunc:vF};function SF(n){const{inputs:t,backend:e,attrs:s}=n,{dy:o,input:r}=t,{filterSize:i,strides:a,pad:l,dimRoundingMode:c}=s;rt([o,r],"avgPool3DGrad");const u=Qn(r.shape,i,a,1,l,c),h=u.strideDepth,d=u.strideHeight,p=u.strideWidth,f=u.filterDepth,m=u.filterHeight,g=u.filterWidth,x=u.dilationDepth,b=u.dilationHeight,w=u.dilationWidth,y=u.effectiveFilterDepth,C=u.effectiveFilterHeight,I=u.effectiveFilterWidth,N=y-1-u.padInfo.front,T=I-1-u.padInfo.left,k=C-1-u.padInfo.top,S=wt(r.shape,"float32"),$=1/(f*m*g),R=e.bufferSync(o);for(let A=0;A<u.batchSize;++A)for(let O=0;O<u.inChannels;++O)for(let M=0;M<u.inDepth;++M)for(let z=0;z<u.inHeight;++z)for(let G=0;G<u.inWidth;++G){const V=M-N,U=z-k,q=G-T;let K=0;for(let Y=0;Y<y;Y+=x){const Z=(V+Y)/h;if(!(Z<0||Z>=u.outDepth||Math.floor(Z)!==Z))for(let tt=0;tt<C;tt+=b){const Q=(U+tt)/d;if(!(Q<0||Q>=u.outHeight||Math.floor(Q)!==Q))for(let ot=0;ot<I;ot+=w){const at=(q+ot)/p;if(at<0||at>=u.outWidth||Math.floor(at)!==at)continue;const dt=R.get(A,Z,Q,at,O);K+=dt}}}S.set(K*$,A,M,z,G,O)}return e.makeTensorInfo(S.shape,S.dtype,S.values)}const NF={kernelName:Qu,backendName:"cpu",kernelFunc:SF};function TF(n){const{inputs:t,backend:e,attrs:s}=n,{dy:o,input:r}=t,i=r;rt([o,r],"avgPoolGrad");const{filterSize:a,strides:l,pad:c}=s,u=cn(i.shape,a,l,1,c),h=u.strideHeight,d=u.strideWidth,p=u.filterHeight,f=u.filterWidth,m=u.dilationHeight,g=u.dilationWidth,x=u.effectiveFilterHeight,b=u.effectiveFilterWidth,w=b-1-u.padInfo.left,y=x-1-u.padInfo.top,C=wt(i.shape,"float32"),I=1/(p*f),N=e.data.get(o.dataId).values,T=wt(o.shape,"float32",N);for(let k=0;k<u.batchSize;++k)for(let S=0;S<u.inChannels;++S)for(let $=0;$<u.inHeight;++$)for(let R=0;R<u.inWidth;++R){const A=$-y,O=R-w;let M=0;for(let z=0;z<x;z+=m){const G=(A+z)/h;if(!(G<0||G>=u.outHeight||Math.floor(G)!==G))for(let V=0;V<b;V+=g){const U=(O+V)/d;if(U<0||U>=u.outWidth||Math.floor(U)!==U)continue;const q=T.get(k,G,U,S);M+=q}}C.set(M*I,k,$,R,S)}return e.makeTensorInfo(C.shape,C.dtype,C.values)}const EF={kernelName:Ju,backendName:"cpu",kernelFunc:TF};function RF(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,scale:r,offset:i,mean:a,variance:l}=t;v(a.shape.length===l.shape.length,()=>"Batch normalization gradient requires mean and variance to have equal ranks."),v(i==null||a.shape.length===i.shape.length,()=>"Batch normalization gradient requires mean and offset to have equal ranks."),v(r==null||a.shape.length===r.shape.length,()=>"Batch normalization gradient requires mean and scale to have equal ranks."),rt([o,a,l,r,i],"batchNorm");let{varianceEpsilon:c}=s;c==null&&(c=.001);const u=e.data.get(o.dataId).values,h=e.data.get(a.dataId).values,d=e.data.get(l.dataId).values,p=r?e.data.get(r.dataId).values:new Float32Array([1]),f=i?e.data.get(i.dataId).values:new Float32Array([0]),m=new Float32Array(u.length),g=f.length,x=p.length,b=d.length,w=h.length;let y=0,C=0,I=0,N=0;for(let T=0;T<u.length;++T)m[T]=f[y++]+(u[T]-h[C++])*p[I++]/Math.sqrt(d[N++]+c),y>=g&&(y=0),C>=w&&(C=0),I>=x&&(I=0),N>=b&&(N=0);return e.makeTensorInfo(o.shape,o.dtype,m)}const AF={kernelName:bl,backendName:"cpu",kernelFunc:RF};function DF(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{blockShape:r,crops:i}=s;rt([o],"batchToSpaceND");const a=r.reduce((x,b)=>x*b),l=Fi(o.shape,r,a),c=_i(l.length,r.length),u=Oi(o.shape,r,a),h=Sd(i,r.length),d=Nd(u,i,r.length),p=Bt({inputs:{x:o},backend:e,attrs:{shape:l}}),f=Pe({inputs:{x:p},backend:e,attrs:{perm:c}}),m=Bt({inputs:{x:f},backend:e,attrs:{shape:u}}),g=oo({inputs:{x:m},backend:e,attrs:{begin:h,size:d}});return e.disposeIntermediateTensorInfo(p),e.disposeIntermediateTensorInfo(f),e.disposeIntermediateTensorInfo(m),g}const FF={kernelName:al,backendName:"cpu",kernelFunc:DF};function _F(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,weights:r}=t,{size:i}=s,a=e.data.get(o.dataId).values,l=e.data.get(r.dataId).values,c=hp(a,l,r.dtype,r.shape,i);return e.makeTensorInfo([i],r.dtype,c)}const OF={kernelName:th,backendName:"cpu",kernelFunc:_F};function MF(n){const{inputs:t,backend:e}=n,{s0:s,s1:o}=t,r=e.data.get(s.dataId).values,i=e.data.get(o.dataId).values,a=mt(Array.from(r),Array.from(i));return e.makeTensorInfo([a.length],"int32",Int32Array.from(a))}const LF={kernelName:Vm,backendName:"cpu",kernelFunc:MF};const PF=Dt(Wr,(n,t)=>{const e=t;return n>e.clipValueMax?e.clipValueMax:n<e.clipValueMin?e.clipValueMin:n}),zF={kernelName:Wr,backendName:"cpu",kernelFunc:PF};const BF=n=>{const{x:t}=n.inputs,e=n.backend,s=new Float32Array(H(t.shape)),o=e.data.get(t.dataId),r=o.complexTensorInfos.real,i=o.complexTensorInfos.imag,a=e.data.get(r.dataId).values,l=e.data.get(i.dataId).values;for(let c=0;c<a.length;c++){const u=a[c],h=l[c];s[c]=Math.hypot(u,h)}return e.makeOutput(s,t.shape,"float32")},VF={kernelName:ll,backendName:"cpu",kernelFunc:BF};function Po(n){const{inputs:t,backend:e}=n,{input:s}=t,o=e.data.get(s.dataId).complexTensorInfos.imag,r=e.data.get(o.dataId).values;return e.makeTensorInfo(o.shape,o.dtype,r)}const WF={kernelName:bh,backendName:"cpu",kernelFunc:Po};function zo(n){const{inputs:t,backend:e,attrs:s}=n,{axis:o}=s,r=Ct(o,t[0].shape)[0],i=t.map(m=>m.shape);Id(i,r);let a=Fn(t.map(m=>m.shape),r);if(H(a)===0)return e.makeTensorInfo(a,t[0].dtype,[]);const l=t.filter(m=>H(m.shape)>0);if(l.length===1)return Wn({inputs:{x:l[0]},backend:e});if(l[0].dtype==="complex64"){const m=l.map(y=>so({inputs:{input:y},backend:e})),g=l.map(y=>Po({inputs:{input:y},backend:e})),x=zo({inputs:m,backend:e,attrs:{axis:r}}),b=zo({inputs:g,backend:e,attrs:{axis:r}}),w=Ve({inputs:{real:x,imag:b},backend:e});return m.forEach(y=>e.disposeIntermediateTensorInfo(y)),g.forEach(y=>e.disposeIntermediateTensorInfo(y)),e.disposeIntermediateTensorInfo(x),e.disposeIntermediateTensorInfo(b),w}const c=l.map(m=>{const x=[-1,H(m.shape.slice(r))];return Bt({inputs:{x:m},backend:e,attrs:{shape:x}})}),u=c.map(m=>({vals:e.data.get(m.dataId).values,shape:m.shape}));a=Fn(c.map(m=>m.shape),1);const h=c[0].shape[0]===1,d=y1(u,a,t[0].dtype,h),p=Fn(l.map(m=>m.shape),r),f=e.makeTensorInfo(p,t[0].dtype,d);return c.forEach(m=>e.disposeIntermediateTensorInfo(m)),f}const UF={kernelName:cl,backendName:"cpu",kernelFunc:zo};function my(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,filter:r}=t,{strides:i,pad:a,dataFormat:l,dilations:c,dimRoundingMode:u}=s;rt([o,r],"conv2d");const h=ts(l),d=be(o.shape,r.shape,i,c,a,u,!1,h),p=d.filterHeight,f=d.filterWidth,m=d.dilationHeight,g=d.dilationWidth,x=d.padInfo.left,b=d.padInfo.top,w=d.dataFormat==="channelsLast",y=new xe(d.outShape,o.dtype),C=lt(o.shape),I=lt(r.shape),N=C[0],T=w?C[1]:C[2],k=w?C[2]:1,S=w?1:C[1],$=y.strides[0],R=w?y.strides[1]:y.strides[2],A=w?y.strides[2]:1,O=w?1:y.strides[1],M=e.data.get(o.dataId).values,z=e.data.get(r.dataId).values,G=y.values;for(let V=0;V<d.batchSize;++V){const U=V*N,q=V*$;for(let K=0;K<d.outHeight;++K){const Y=q+K*R,Z=K*d.strideHeight-b;for(let tt=0;tt<p;++tt){const Q=Z+tt*m;if(Q<0||Q>=d.inHeight)continue;const ot=tt*I[0],at=U+Q*T;for(let dt=0;dt<d.outWidth;++dt){const ht=Y+dt*A,gt=dt*d.strideWidth-x;for(let bt=0;bt<f;++bt){const Rt=gt+bt*g;if(Rt<0||Rt>=d.inWidth)continue;const Mt=ot+bt*I[1],Kt=at+Rt*k;let Lt=Mt;for(let Ft=0;Ft<d.inChannels;++Ft){const Ht=M[Kt+Ft*S];for(let Wt=0;Wt<d.outChannels;++Wt)G[ht+Wt*O]+=Ht*z[Lt+Wt];Lt+=d.outChannels}}}}}}return e.makeTensorInfo(y.shape,y.dtype,G)}const GF={kernelName:ul,backendName:"cpu",kernelFunc:my};function HF(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,dy:r}=t,{strides:i,pad:a,dataFormat:l,dimRoundingMode:c,filterShape:u}=s;rt([o,r],"conv2dBackpropFilter");const h=ts(l),d=be(o.shape,u,i,1,a,c,!1,h),{strideHeight:p,strideWidth:f,filterHeight:m,filterWidth:g}=d,x=d.dataFormat==="channelsLast",b=new xe(d.filterShape,"float32"),w=d.padInfo.left,y=d.padInfo.top,C=e.data.get(o.dataId).values,I=e.data.get(r.dataId).values,N=new xe(o.shape,o.dtype,C),T=new xe(r.shape,r.dtype,I);for(let k=0;k<m;++k){const S=Math.max(0,Math.ceil((y-k)/p)),$=Math.min(d.outHeight,(d.inHeight+y-k)/p);for(let R=0;R<g;++R){const A=Math.max(0,Math.ceil((w-R)/f)),O=Math.min(d.outWidth,(d.inWidth+w-R)/f);for(let M=0;M<d.inChannels;++M)for(let z=0;z<d.outChannels;++z){let G=0;for(let V=0;V<d.batchSize;++V)for(let U=S;U<$;++U){const q=k+U*p-y;for(let K=A;K<O;++K){const Y=R+K*f-w;x?G+=N.get(V,q,Y,M)*T.get(V,U,K,z):G+=N.get(V,M,q,Y)*T.get(V,z,U,K)}}b.set(G,k,R,M,z)}}}return e.makeTensorInfo(b.shape,b.dtype,b.values)}const jF={kernelName:sh,backendName:"cpu",kernelFunc:HF};function qF(n){const{inputs:t,backend:e,attrs:s}=n,{dy:o,filter:r}=t,{inputShape:i,strides:a,pad:l,dataFormat:c,dimRoundingMode:u}=s;rt([o,r],"conv2dBackpropInput");const h=lt(r.shape),d=lt(o.shape);let p=ts(c);const f=be(i,r.shape,a,1,l,u,!1,p),m=new xe(f.inShape,"float32"),g=m.values,x=e.data.get(o.dataId).values,b=e.data.get(r.dataId).values,[w,y,C]=h,{batchSize:I,filterHeight:N,filterWidth:T,inChannels:k,inHeight:S,inWidth:$,outChannels:R,outHeight:A,outWidth:O,strideHeight:M,strideWidth:z}=f;p=f.dataFormat;const G=N-1-f.padInfo.top,V=T-1-f.padInfo.left,U=p==="channelsLast",q=m.strides[0],K=U?m.strides[1]:m.strides[2],Y=U?m.strides[2]:1,Z=U?1:m.strides[1],tt=d[0],Q=U?d[1]:d[2],ot=U?d[2]:1,at=U?1:d[1];for(let dt=0;dt<I;++dt)for(let ht=0;ht<k;++ht)for(let gt=0;gt<S;++gt){const bt=gt-G,Rt=Math.max(0,Math.ceil(bt/M)),Mt=Math.min(A,(N+bt)/M);for(let Kt=0;Kt<$;++Kt){const Lt=Kt-V,Ft=Math.max(0,Math.ceil(Lt/z)),Ht=Math.min(O,(T+Lt)/z);let Wt=0;for(let me=Rt;me<Mt;++me){const ns=me*M-bt;for(let je=Ft;je<Ht;++je){const As=je*z-Lt,dn=tt*dt+Q*me+ot*je,Hn=w*(N-1-ns)+y*(T-1-As)+C*ht;for(let ss=0;ss<R;++ss){const os=x[dn+at*ss],rs=b[Hn+ss];Wt+=os*rs}}}const Gn=q*dt+K*gt+Y*Kt+Z*ht;g[Gn]=Wt}}return e.makeTensorInfo(m.shape,m.dtype,m.values)}const KF={kernelName:hl,backendName:"cpu",kernelFunc:qF};function XF(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,filter:r}=t,{strides:i,pad:a,dilations:l}=s;rt([o,r],"conv3d");const c=vs(o.shape,r.shape,i,l,a),{filterDepth:u,filterHeight:h,filterWidth:d,dilationDepth:p,dilationHeight:f,dilationWidth:m,padInfo:g}=c,x=g.front,b=g.left,w=g.top,y=new xe(c.outShape,o.dtype),C=e.data.get(o.dataId).values,I=e.data.get(r.dataId).values,N=y.values,T=lt(o.shape),k=lt(r.shape);for(let S=0;S<c.batchSize;++S){const $=S*T[0],R=S*y.strides[0];for(let A=0;A<c.outDepth;++A){const O=R+A*y.strides[1],M=A*c.strideDepth-x;for(let z=0;z<u;++z){const G=M+z*p;if(G<0||G>=c.inDepth)continue;const V=z*k[0],U=$+G*T[1];for(let q=0;q<c.outHeight;++q){const K=O+q*y.strides[2],Y=q*c.strideHeight-w;for(let Z=0;Z<h;++Z){const tt=Y+Z*f;if(tt<0||tt>=c.inHeight)continue;const Q=V+Z*k[1],ot=U+tt*T[2];for(let at=0;at<c.outWidth;++at){const dt=K+at*c.outChannels,ht=at*c.strideWidth-b;for(let gt=0;gt<d;++gt){const bt=ht+gt*m;if(bt<0||bt>=c.inWidth)continue;const Rt=Q+gt*k[2],Mt=ot+bt*c.inChannels;let Kt=Rt;for(let Lt=0;Lt<c.inChannels;++Lt){const Ft=C[Mt+Lt];for(let Ht=0;Ht<c.outChannels;++Ht)N[dt+Ht]+=Ft*I[Kt+Ht];Kt+=c.outChannels}}}}}}}}return e.makeTensorInfo(y.shape,y.dtype,y.values)}const YF={kernelName:dl,backendName:"cpu",kernelFunc:XF};function ZF(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,dy:r}=t,{strides:i,pad:a,filterShape:l}=s;rt([o,r],"conv3dBackpropFilterV2");const c=lt(o.shape),u=lt(r.shape),h=vs(o.shape,l,i,1,a),d=h.strideDepth,p=h.strideHeight,f=h.strideWidth,m=h.filterDepth,g=h.filterHeight,x=h.filterWidth,b=new xe(h.filterShape,"float32"),w=b.values,[y,C,I,N]=b.strides,T=e.data.get(r.dataId).values,[k,S,$,R]=u,A=e.data.get(o.dataId).values,[O,M,z,G]=c,V=h.padInfo.front,U=h.padInfo.left,q=h.padInfo.top;for(let K=0;K<m;++K){const Y=Math.max(0,Math.ceil((V-K)/d)),Z=Math.min(h.outDepth,(h.inDepth+V-K)/d),tt=K*y;for(let Q=0;Q<g;++Q){const ot=Math.max(0,Math.ceil((q-Q)/p)),at=Math.min(h.outHeight,(h.inHeight+q-Q)/p),dt=Q*C+tt;for(let ht=0;ht<x;++ht){const gt=Math.max(0,Math.ceil((U-ht)/f)),bt=Math.min(h.outWidth,(h.inWidth+U-ht)/f),Rt=ht*I+dt;for(let Mt=0;Mt<h.inChannels;++Mt){const Kt=Mt*N+Rt;for(let Lt=0;Lt<h.outChannels;++Lt){let Ft=0;for(let Ht=0;Ht<h.batchSize;++Ht){const Wt=Ht*O,Gn=Ht*k;for(let me=Y;me<Z;++me){const je=(K+me*d-V)*M+Wt,As=me*S+Gn;for(let dn=ot;dn<at;++dn){const ss=(Q+dn*p-q)*z+je,os=dn*$+As;for(let rs=gt;rs<bt;++rs){const Ac=(ht+rs*f-U)*G+ss,Dc=rs*R+os;Ft+=A[Ac+Mt]*T[Dc+Lt]}}}}w[Kt+Lt]=Ft}}}}}return e.makeTensorInfo(b.shape,b.dtype,b.values)}const JF={kernelName:oh,backendName:"cpu",kernelFunc:ZF};function QF(n){const{inputs:t,backend:e,attrs:s}=n,{dy:o,filter:r}=t,{pad:i,strides:a,inputShape:l}=s;rt([o],"conv3dBackpropInputV2");const c=lt(o.shape),u=lt(r.shape),h=vs(l,r.shape,a,1,i),d=new xe(h.inShape,"float32"),p=d.values,[f,m,g,x]=d.strides,b=e.data.get(o.dataId).values,[w,y,C,I]=c,N=e.data.get(r.dataId).values,[T,k,S,$]=u,{batchSize:R,filterDepth:A,filterHeight:O,filterWidth:M,inChannels:z,inDepth:G,inHeight:V,inWidth:U,outChannels:q,outDepth:K,outHeight:Y,outWidth:Z,strideDepth:tt,strideHeight:Q,strideWidth:ot}=h,at=A-1-h.padInfo.front,dt=O-1-h.padInfo.top,ht=M-1-h.padInfo.left;for(let gt=0;gt<R;++gt)for(let bt=0;bt<z;++bt)for(let Rt=0;Rt<G;++Rt){const Mt=Rt-at,Kt=Math.max(0,Math.ceil(Mt/tt)),Lt=Math.min(K,(A+Mt)/tt);for(let Ft=0;Ft<V;++Ft){const Ht=Ft-dt,Wt=Math.max(0,Math.ceil(Ht/Q)),Gn=Math.min(Y,(O+Ht)/Q);for(let me=0;me<U;++me){const ns=me-ht,je=Math.max(0,Math.ceil(ns/ot)),As=Math.min(Z,(M+ns)/ot);let dn=0;for(let Hn=Kt;Hn<Lt;++Hn){const ss=Hn*tt-Mt;for(let os=Wt;os<Gn;++os){const rs=os*Q-Ht;for(let or=je;or<As;++or){const Ac=or*ot-ns,Dc=w*gt+y*Hn+C*os+I*or,mw=T*(A-1-ss)+k*(O-1-rs)+S*(M-1-Ac)+$*bt;for(let Yi=0;Yi<q;++Yi){const gw=b[Dc+Yi],xw=N[mw+Yi];dn+=gw*xw}}}}p[f*gt+m*Rt+g*Ft+x*me+bt]=dn}}}return e.makeTensorInfo(d.shape,d.dtype,d.values)}const t_={kernelName:rh,backendName:"cpu",kernelFunc:QF};const e_=Dt(Ur,n=>Math.cos(n)),n_={kernelName:Ur,backendName:"cpu",kernelFunc:e_};const s_=Dt(Gr,n=>Math.cosh(n)),o_={kernelName:Gr,backendName:"cpu",kernelFunc:s_};function r_(n){const{inputs:t,backend:e,attrs:s}=n,{image:o,boxes:r,boxInd:i}=t,{cropSize:a,method:l,extrapolationValue:c}=s,[u,h,d,p]=o.shape,f=r.shape[0],[m,g]=a,x=wt([f,m,g,p],"float32"),b=e.data.get(r.dataId).values,w=e.data.get(i.dataId).values,y=e.data.get(o.dataId).values,C=lt(o.shape),I=lt(x.shape);for(let N=0;N<f;N++){const T=N*4,k=b[T],S=b[T+1],$=b[T+2],R=b[T+3],A=w[N];if(A>=u)continue;const O=m>1?($-k)*(h-1)/(m-1):0,M=g>1?(R-S)*(d-1)/(g-1):0;for(let z=0;z<m;z++){const G=m>1?k*(h-1)+z*O:.5*(k+$)*(h-1);if(G<0||G>h-1){for(let V=0;V<g;V++)for(let U=0;U<p;U++){const q=U+V*I[2]+z*I[1]+N*I[0];x.values[q]=c}continue}if(l==="bilinear"){const V=Math.floor(G),U=Math.ceil(G),q=G-V;for(let K=0;K<g;K++){const Y=g>1?S*(d-1)+K*M:.5*(S+R)*(d-1);if(Y<0||Y>d-1){for(let ot=0;ot<p;ot++){const at=ot+K*I[2]+z*I[1]+N*I[0];x.values[at]=c}continue}const Z=Math.floor(Y),tt=Math.ceil(Y),Q=Y-Z;for(let ot=0;ot<p;ot++){let at=ot+Z*C[2]+V*C[1]+A*C[0];const dt=y[at];at=ot+tt*C[2]+V*C[1]+A*C[0];const ht=y[at];at=ot+Z*C[2]+U*C[1]+A*C[0];const gt=y[at];at=ot+tt*C[2]+U*C[1]+A*C[0];const bt=y[at],Rt=dt+(ht-dt)*Q,Mt=gt+(bt-gt)*Q;at=ot+K*I[2]+z*I[1]+N*I[0],x.values[at]=Rt+(Mt-Rt)*q}}}else for(let V=0;V<g;++V){const U=g>1?S*(d-1)+V*M:.5*(S+R)*(d-1);if(U<0||U>d-1){for(let Y=0;Y<p;Y++){const Z=Y+V*I[2]+z*I[1]+N*I[0];x.values[Z]=c}continue}const q=Math.round(U),K=Math.round(G);for(let Y=0;Y<p;Y++){const Z=Y+q*C[2]+K*C[1]+A*C[0],tt=Y+V*I[2]+z*I[1]+N*I[0];x.values[tt]=y[Z]}}}}return e.makeTensorInfo(x.shape,x.dtype,x.values)}const i_={kernelName:ah,backendName:"cpu",kernelFunc:r_};function a_(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{axis:r,exclusive:i,reverse:a}=s;rt(o,"cumprod");const l=qt([r],o.shape.length);let c=o;l!=null&&(c=Pe({inputs:{x:o},backend:e,attrs:{perm:l}}));const u=Qt(1,o.shape.length)[0];if(u!==c.shape.length-1)throw new Error(`backend.cumprod in CPU expects an inner-most axis=${c.shape.length-1} but got axis=${u}`);const h=Ue(c.dtype,"int32"),d=ju(H(c.shape),h),p=e.data.get(c.dataId).values,f=c.shape[c.shape.length-1],m=a?(x,b)=>x+f-b-1:(x,b)=>x+b;for(let x=0;x<p.length;x+=f)for(let b=0;b<f;b++){const w=m(x,b);if(b===0)d[w]=i?1:p[w];else{const y=m(x,b-1);d[w]=i?p[y]*d[y]:p[w]*d[y]}}const g=e.makeTensorInfo(c.shape,h,d);if(l!=null){const x=ks(l),b=Pe({inputs:{x:g},backend:e,attrs:{perm:x}});return e.disposeIntermediateTensorInfo(g),e.disposeIntermediateTensorInfo(c),b}return g}const l_={kernelName:ih,backendName:"cpu",kernelFunc:a_};function c_(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{axis:r,exclusive:i,reverse:a}=s;rt(o,"cumsum");const l=qt([r],o.shape.length);let c=o;l!=null&&(c=Pe({inputs:{x:o},backend:e,attrs:{perm:l}}));const u=Qt(1,o.shape.length)[0];if(u!==c.shape.length-1)throw new Error(`backend.cumsum in CPU expects an inner-most axis=${c.shape.length-1} but got axis=${u}`);const h=Ue(c.dtype,"int32"),d=$e(H(c.shape),h),p=e.data.get(c.dataId).values,f=c.shape[c.shape.length-1],m=a?(x,b)=>x+f-b-1:(x,b)=>x+b;for(let x=0;x<p.length;x+=f)for(let b=0;b<f;b++){const w=m(x,b);if(b===0)d[w]=i?0:p[w];else{const y=m(x,b-1);d[w]=i?p[y]+d[y]:p[w]+d[y]}}const g=e.makeTensorInfo(c.shape,h,d);if(l!=null){const x=ks(l),b=Pe({inputs:{x:g},backend:e,attrs:{perm:x}});return e.disposeIntermediateTensorInfo(g),e.disposeIntermediateTensorInfo(c),b}return g}const u_={kernelName:pl,backendName:"cpu",kernelFunc:c_};function h_(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,weights:r}=t,{size:i,binaryOutput:a}=s;if(o.shape.length===1){const l=e.data.get(o.dataId).values,c=e.data.get(r.dataId).values,u=hp(l,c,r.dtype,r.shape,i);return e.makeTensorInfo([i],r.dtype,u)}else if(o.shape.length===2){const l=e.bufferSync(o),c=e.bufferSync(r),u=g1(l,c,i,a);return e.makeTensorInfo(u.shape,r.dtype,u.values)}throw new Error(`Error in denseBincount: input must be at most rank 2, but got rank${o.shape.length}.`)}const d_={kernelName:lh,backendName:"cpu",kernelFunc:h_};function p_(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{blockSize:r,dataFormat:i}=s;v(i==="NHWC",()=>`Only NHWC dataFormat supported on CPU for depthToSpace. Got ${i}`);const a=o.shape[0],l=o.shape[1],c=o.shape[2],u=o.shape[3],h=l*r,d=c*r,p=u/(r*r),f=e.data.get(o.dataId).values,m=new Float32Array(a*h*d*p);let g=0;for(let x=0;x<a;++x)for(let b=0;b<h;++b){const w=Math.floor(b/r),y=b%r;for(let C=0;C<d;++C){const I=Math.floor(C/r),N=C%r,T=(y*r+N)*p;for(let k=0;k<p;++k){const $=k+T+u*(I+c*(w+l*x));m[g++]=f[$]}}}return e.makeTensorInfo([a,h,d,p],o.dtype,m)}const f_={kernelName:ch,backendName:"cpu",kernelFunc:p_};function gy(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,filter:r}=t,{strides:i,pad:a,dilations:l,dimRoundingMode:c}=s;rt([o,r],"depthwiseConv2DNative");const u=lt(o.shape),h=lt(r.shape);let d=l;d==null&&(d=[1,1]),v(ve(i,d),()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${i} and dilations '${d}'`);const p=be(o.shape,r.shape,i,d,a,c,!0),{filterHeight:f,filterWidth:m,dilationHeight:g,dilationWidth:x,padInfo:b}=p,w=b.left,y=b.top,C=p.outChannels/p.inChannels,I=new xe(p.outShape,o.dtype),N=e.data.get(o.dataId).values,T=e.data.get(r.dataId).values,k=I.values;for(let S=0;S<p.batchSize;++S){const $=S*u[0],R=S*I.strides[0];for(let A=0;A<p.outHeight;++A){const O=R+A*I.strides[1],M=A*p.strideHeight-y;for(let z=0;z<f;++z){const G=M+z*g;if(G<0||G>=p.inHeight)continue;const V=z*h[0],U=$+G*u[1];for(let q=0;q<p.outWidth;++q){const K=O+q*I.strides[2],Y=q*p.strideWidth-w;for(let Z=0;Z<m;++Z){const tt=Y+Z*x;if(tt<0||tt>=p.inWidth)continue;const Q=V+Z*h[1],ot=U+tt*p.inChannels;let at=K,dt=Q;for(let ht=0;ht<p.inChannels;++ht){const gt=N[ot+ht];for(let bt=0;bt<C;++bt)k[at+bt]+=gt*T[dt+bt];at+=C,dt+=C}}}}}}return e.makeTensorInfo(I.shape,I.dtype,I.values)}const m_={kernelName:fl,backendName:"cpu",kernelFunc:gy};function g_(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,dy:r}=t,{strides:i,dilations:a,pad:l,dimRoundingMode:c,filterShape:u}=s;rt([o,r],"depthwiseConv2dNativeBackpropFilter");const h=be(o.shape,u,i,a,l,c,!0),{strideHeight:d,strideWidth:p,filterHeight:f,filterWidth:m}=h,g=new xe(h.filterShape,"float32"),x=h.padInfo.left,b=h.padInfo.top,w=h.outChannels/h.inChannels,y=e.data.get(o.dataId).values,C=new xe(o.shape,o.dtype,y),I=e.data.get(r.dataId).values,N=new xe(r.shape,r.dtype,I);for(let T=0;T<f;++T){const k=Math.max(0,Math.ceil((b-T)/d)),S=Math.min(h.outHeight,(h.inHeight+b-T)/d);for(let $=0;$<m;++$){const R=Math.max(0,Math.ceil((x-$)/p)),A=Math.min(h.outWidth,(h.inWidth+x-$)/p);for(let O=0;O<h.outChannels;++O){const M=Math.trunc(O/w),z=O%w;let G=0;for(let V=0;V<h.batchSize;++V)for(let U=k;U<S;++U){const q=T+U*d-b;for(let K=R;K<A;++K){const Y=$+K*p-x;G+=C.get(V,q,Y,M)*N.get(V,U,K,O)}}g.set(G,T,$,M,z)}}}return e.makeTensorInfo(g.shape,g.dtype,g.values)}const x_={kernelName:uh,backendName:"cpu",kernelFunc:g_};function b_(n){const{inputs:t,backend:e,attrs:s}=n,{dy:o,filter:r}=t,{strides:i,dilations:a,pad:l,dimRoundingMode:c,inputShape:u}=s;rt([o,r],"depthwiseConv2DNativeBackpropInput");const h=lt(o.shape),d=lt(r.shape),p=be(u,r.shape,i,a,l,c,!0),f=new xe(p.inShape,"float32"),m=f.values,[g,x,b]=f.strides,w=e.data.get(o.dataId).values,[y,C,I]=h,N=e.data.get(r.dataId).values,[T,k,S]=d,{batchSize:$,filterHeight:R,filterWidth:A,inChannels:O,inHeight:M,inWidth:z,outChannels:G,outHeight:V,outWidth:U,strideHeight:q,strideWidth:K}=p,Y=R-1-p.padInfo.top,Z=A-1-p.padInfo.left,tt=G/O;for(let Q=0;Q<$;++Q)for(let ot=0;ot<O;++ot)for(let at=0;at<M;++at){const dt=at-Y,ht=Math.max(0,Math.ceil(dt/q)),gt=Math.min(V,(R+dt)/q);for(let bt=0;bt<z;++bt){const Rt=bt-Z,Mt=Math.max(0,Math.ceil(Rt/K)),Kt=Math.min(U,(A+Rt)/K);let Lt=0;for(let Ft=ht;Ft<gt;++Ft){const Ht=Ft*q-dt;for(let Wt=Mt;Wt<Kt;++Wt){const Gn=Wt*K-Rt,me=y*Q+C*Ft+I*Wt,ns=T*(R-1-Ht)+k*(A-1-Gn)+S*ot;for(let je=0;je<tt;++je){const As=ot*tt+je,dn=w[me+As],Hn=N[ns+je];Lt+=dn*Hn}}}m[g*Q+x*at+b*bt+ot]=Lt}}return e.makeTensorInfo(f.shape,f.dtype,f.values)}const y_={kernelName:hh,backendName:"cpu",kernelFunc:b_};function w_(n){const{inputs:t,backend:e}=n,{x:s}=t,o=H(s.shape),r=e.data.get(s.dataId).values,i=wt([o,o],s.dtype),a=i.values;for(let c=0;c<r.length;c++)a[c*o+c]=r[c];const l=[...s.shape,...s.shape];return e.makeTensorInfo(l,i.dtype,i.values)}const C_={kernelName:Wm,backendName:"cpu",kernelFunc:w_};const $_={kernelName:ml,backendName:"cpu",kernelFunc:({inputs:n,backend:t,attrs:e})=>{const{x:s,filter:o}=n,{strides:r,pad:i,dilations:a}=e,l=t,c=l.data.get(s.dataId).values,u=s.shape.length,h=l.data.get(o.dataId).values,d=o.shape.length,{batchSize:p,inHeight:f,inWidth:m,inChannels:g,outHeight:x,outWidth:b,padInfo:w,strideHeight:y,strideWidth:C,filterHeight:I,filterWidth:N,dilationHeight:T,dilationWidth:k,outShape:S}=Ti(s.shape,o.shape,r,i,"NHWC",a),$=H(S),R=S.length,A=Yt(s.dtype,$);for(let M=0;M<p;++M)for(let z=0;z<x;++z){const G=z*y-w.top;for(let V=0;V<b;++V){const U=V*C-w.left;for(let q=0;q<g;++q){let K=Number.MIN_SAFE_INTEGER;for(let Z=0;Z<I;++Z){const tt=G+Z*T;if(tt>=0&&tt<f)for(let Q=0;Q<N;++Q){const ot=U+Q*k;if(ot>=0&&ot<m){const at=An([M,tt,ot,q],u,lt(s.shape)),dt=An([Z,Q,q],d,lt(o.shape)),ht=c[at]+h[dt];ht>K&&(K=ht)}}}const Y=An([M,z,V,q],R,lt(S));A[Y]=K}}}return{dataId:l.write(io(A,s.dtype),S,s.dtype),shape:S,dtype:s.dtype}}};const I_={kernelName:cu,backendName:"cpu",kernelFunc:({inputs:n,backend:t,attrs:e})=>{const{x:s,filter:o,dy:r}=n,{strides:i,pad:a,dilations:l}=e,c=t,u=bn(s.shape,c.data.get(s.dataId).values),h=bn(o.shape,c.data.get(o.dataId).values),{batchSize:d,inHeight:p,inWidth:f,inChannels:m,outHeight:g,outWidth:x,padInfo:b,strideHeight:w,strideWidth:y,filterHeight:C,filterWidth:I,dilationHeight:N,dilationWidth:T,outShape:k}=Ti(s.shape,o.shape,i,a,"NHWC",l);v(r.rank===k.length,()=>`Error in ${cu}, dy must have the same rank as output ${k.length}, but got ${r.rank}`);const S=bn(k,c.data.get(r.dataId).values),$=Pm(o.shape,o.dtype);for(let A=0;A<d;++A)for(let O=0;O<g;++O){const M=O*w-b.top;for(let z=0;z<x;++z){const G=z*y-b.left;for(let V=0;V<m;++V){let U=Number.MIN_SAFE_INTEGER,q=0,K=0;for(let Y=0;Y<C;++Y){const Z=M+Y*N;if(Z>=0&&Z<p)for(let tt=0;tt<I;++tt){const Q=G+tt*T;if(Q>=0&&Q<f){const ot=u[A][Z][Q][V]+h[Y][tt][V];ot>U&&(U=ot,q=Y,K=tt)}}}$[q][K][V]+=S[A][O][z][V]}}}return{dataId:c.write(io($,s.dtype),o.shape,o.dtype),shape:o.shape,dtype:o.dtype}}};const v_={kernelName:lu,backendName:"cpu",kernelFunc:({inputs:n,backend:t,attrs:e})=>{const{x:s,filter:o,dy:r}=n,{strides:i,pad:a,dilations:l}=e,c=t,u=bn(s.shape,c.data.get(s.dataId).values),h=bn(o.shape,c.data.get(o.dataId).values),{batchSize:d,inHeight:p,inWidth:f,inChannels:m,outHeight:g,outWidth:x,padInfo:b,strideHeight:w,strideWidth:y,filterHeight:C,filterWidth:I,dilationHeight:N,dilationWidth:T,outShape:k}=Ti(s.shape,o.shape,i,a,"NHWC",l);v(r.rank===k.length,()=>`Error in ${lu}, dy must have the same rank as output ${k.length}, but got ${r.rank}`);const S=bn(k,c.data.get(r.dataId).values),$=Pm(s.shape,s.dtype);for(let A=0;A<d;++A)for(let O=0;O<g;++O){const M=O*w-b.top;for(let z=0;z<x;++z){const G=z*y-b.left;for(let V=0;V<m;++V){let U=Number.MIN_SAFE_INTEGER,q=M<0?0:M,K=G<0?0:G;for(let Y=0;Y<C;++Y){const Z=M+Y*N;if(Z>=0&&Z<p)for(let tt=0;tt<I;++tt){const Q=G+tt*T;if(Q>=0&&Q<f){const ot=u[A][Z][Q][V]+h[Y][tt][V];ot>U&&(U=ot,q=Z,K=Q)}}}$[A][q][K][V]+=S[A][O][z][V]}}}return{dataId:c.write(io($,s.dtype),s.shape,s.dtype),shape:s.shape,dtype:s.dtype}}};function k_(n){const{inputs:t,backend:e,attrs:s}=n,{image:o}=t,{canvas:r,options:i}=s,{contextOptions:a,imageOptions:l}=i||{},c=l?.alpha||1,u=a?.contextType||"2d";if(u!=="2d")throw new Error(`Context type ${a.contextType} is not supported by the CPU backend.`);const h=r.getContext(u,a?.contextAttributes||{});if(h==null)throw new Error(`Could not get the context with ${u} type.`);const[d,p]=o.shape.slice(0,2),f=o.shape.length===2?1:o.shape[2],m=e.data.get(o.dataId).values,g=o.dtype==="float32"?255:1,x=new Uint8ClampedArray(p*d*4);for(let w=0;w<d*p;++w){const y=[0,0,0,255*c];for(let I=0;I<f;I++){const N=m[w*f+I];if(o.dtype==="float32"){if(N<0||N>1)throw new Error(`Tensor values for a float32 Tensor must be in the range [0 - 1] but encountered ${N}.`)}else if(o.dtype==="int32"&&(N<0||N>255))throw new Error(`Tensor values for a int32 Tensor must be in the range [0 - 255] but encountered ${N}.`);f===1?(y[0]=N*g,y[1]=N*g,y[2]=N*g):y[I]=N*g}const C=w*4;x[C+0]=Math.round(y[0]),x[C+1]=Math.round(y[1]),x[C+2]=Math.round(y[2]),x[C+3]=Math.round(y[3])}r.width=p,r.height=d;const b=new ImageData(x,p,d);return h.putImageData(b,0,0),o}const S_={kernelName:MC,backendName:"cpu",kernelFunc:k_};function Gi(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{axis:r,keepDims:i}=s;rt(o,"sum");let a;o.dtype==="bool"?a=ws({inputs:{x:o},backend:e,attrs:{dtype:"int32"}}):a=Wn({inputs:{x:o},backend:e});const l=a.shape.length,c=Ct(r,a.shape),u=qt(c,l);let h=c,d=a;u!=null&&(d=Pe({inputs:{x:a},backend:e,attrs:{perm:u}}),h=Qt(h.length,l)),ye("sum",h,d.shape.length);const[p,f]=fe(d.shape,h),m=Ue(d.dtype,"int32");let g=ja(e,p,m);const x=H(f),b=e.data.get(g.dataId).values,w=e.data.get(d.dataId).values;for(let y=0;y<b.length;++y){const C=y*x;let I=0;for(let N=0;N<x;++N)I+=w[C+N];b[y]=I}if(i){const y=se(g.shape,c),C=g;g=Bt({inputs:{x:g},backend:e,attrs:{shape:y}}),e.disposeIntermediateTensorInfo(C)}return e.disposeIntermediateTensorInfo(a),u!=null&&e.disposeIntermediateTensorInfo(d),g}const N_={kernelName:Kl,backendName:"cpu",kernelFunc:Gi};function T_(n){const{inputs:t,backend:e,attrs:s}=n,{equation:o}=s,r=t,{allDims:i,summedDims:a,idDims:l}=Od(o,r.length);Ld(i.length,l,r);const{path:c,steps:u}=Pd(a,l),h=u.length;let d=null,p=i.length;const f=[];for(let m=0;m<h;++m){for(const g of u[m]){const{permutationIndices:x,expandDims:b}=Md(p,l[g]);let w;zd(x)?w=r[g]:(w=Pe({inputs:{x:r[g]},backend:e,attrs:{perm:x}}),f.push(w));const y=w.shape.slice();for(let C=0;C<b.length;++C)y.splice(b[C],0,1);Et(w.shape,y)||(w=Bt({inputs:{x:w},backend:e,attrs:{shape:y}}),f.push(w)),d===null?d=w:(d=kc({inputs:{a:w,b:d},backend:e}),f.push(d))}m<h-1&&(c[m]>=0&&(d=Gi({inputs:{x:d},backend:e,attrs:{axis:c[m]-(i.length-p),keepDims:!1}}),f.push(d)),p--)}for(const m of f)m!==d&&e.disposeIntermediateTensorInfo(m);return d}const E_={kernelName:dh,backendName:"cpu",kernelFunc:T_};function R_(n){const{inputs:t,backend:e}=n,{dy:s,y:o}=t;rt([s,o],"eluGrad");const r=new Float32Array(H(o.shape)),i=e.data.get(o.dataId).values,a=e.data.get(s.dataId).values;for(let l=0;l<i.length;++l){const c=i[l];c>=0?r[l]=a[l]:r[l]=a[l]*(c+1)}return e.makeTensorInfo(o.shape,"float32",r)}const A_={kernelName:ph,backendName:"cpu",kernelFunc:R_};const D_=Td,F_=Ed,__=Rd,O_=Ad,M_=Dd,L_=Fd,P_=Dt(qr,n=>{const t=Math.sign(n),e=Math.abs(n),s=1/(1+D_*e);return t*(1-((((L_*s+M_)*s+O_)*s+__)*s+F_)*s*Math.exp(-e*e))}),z_={kernelName:qr,backendName:"cpu",kernelFunc:P_};function Xa(n){const{inputs:t,backend:e,attrs:s}=n,{input:o}=t,{dim:r}=s,i=o.shape.length,a=o.shape.slice();let l=r;return r<0&&(v(-(i+1)<=r,()=>`Axis must be in the interval [${-(i+1)}, ${i}]`),l=i+r+1),a.splice(l,0,1),Bt({inputs:{x:o},backend:e,attrs:{shape:a}})}const B_={kernelName:xl,backendName:"cpu",kernelFunc:Xa};const V_=ee((n,t)=>n/t),xp=ce(Hr,V_),_u={kernelName:Hr,backendName:"cpu",kernelFunc:xp};function xy(n,t,e){const s=n.shape,o=s[0],r=s[1],i=e.data.get(n.dataId),a=i.complexTensorInfos.real,l=i.complexTensorInfos.imag,c=[o,r],u=H(c),h=Ce("float32",u),d=Ce("float32",u);for(let g=0;g<o;g++){const x=oo({inputs:{x:a},backend:e,attrs:{begin:[g,0],size:[1,r]}}),b=oo({inputs:{x:l},backend:e,attrs:{begin:[g,0],size:[1,r]}}),w=Ve({inputs:{real:x,imag:b},backend:e}),{real:y,imag:C}=W_(w,t,e),I=Yn(y,C);for(let N=0;N<r;N++){const T=_d(I,N);h[g*r+N]=T.real,d[g*r+N]=T.imag}e.disposeIntermediateTensorInfo(x),e.disposeIntermediateTensorInfo(b),e.disposeIntermediateTensorInfo(w)}const p=e.makeTensorInfo(c,"float32",h),f=e.makeTensorInfo(c,"float32",d),m=Ve({inputs:{real:p,imag:f},backend:e});return e.disposeIntermediateTensorInfo(p),e.disposeIntermediateTensorInfo(f),m}function W_(n,t,e){const s=H(n.shape),o=e.data.get(n.dataId),r=e.data.get(o.complexTensorInfos.real.dataId).values,i=e.data.get(o.complexTensorInfos.imag.dataId).values;if(U_(s)){const a=Ou(r,i,s,t,e),l=[n.shape[0],n.shape[1]];if(t){const c=e.makeTensorInfo(l,"float32",a.real),u=e.makeTensorInfo(l,"float32",a.imag),h=e.makeTensorInfo([],"float32",$s(s,"float32")),d=Wn({inputs:{x:h},backend:e}),p=_u.kernelFunc({inputs:{a:c,b:h},backend:e}),f=_u.kernelFunc({inputs:{a:u,b:d},backend:e}),m=e.data.get(p.dataId).values,g=e.data.get(f.dataId).values;return e.disposeIntermediateTensorInfo(c),e.disposeIntermediateTensorInfo(u),e.disposeIntermediateTensorInfo(h),e.disposeIntermediateTensorInfo(d),e.disposeIntermediateTensorInfo(p),e.disposeIntermediateTensorInfo(f),{real:m,imag:g}}return a}else{const a=Yn(r,i),l=G_(a,s,t);return Rx(l)}}function U_(n){return(n&n-1)===0}function Ou(n,t,e,s,o){if(e===1)return{real:n,imag:t};const r=Yn(n,t),i=e/2,a=Ax(r),l=a.real,c=a.imag,u=[l.length],h=o.makeTensorInfo(u,"float32",l),d=o.makeTensorInfo(u,"float32",c),p=Ve({inputs:{real:h,imag:d},backend:o}),f=Dx(r),m=f.real,g=f.imag,x=[m.length],b=o.makeTensorInfo(x,"float32",m),w=o.makeTensorInfo(x,"float32",g),y=Ve({inputs:{real:b,imag:w},backend:o}),C=Ou(l,c,i,s,o),I=C.real,N=C.imag,T=[I.length],k=o.makeTensorInfo(T,"float32",I),S=o.makeTensorInfo(T,"float32",N),$=Ve({inputs:{real:k,imag:S},backend:o}),R=Ou(m,g,i,s,o),A=R.real,O=R.imag,M=[A.length],z=o.makeTensorInfo(M,"float32",A),G=o.makeTensorInfo(M,"float32",O),V=Ve({inputs:{real:z,imag:G},backend:o}),U=_x(e,s),q=[U.real.length],K=o.makeTensorInfo(q,"float32",U.real),Y=o.makeTensorInfo(q,"float32",U.imag),Z=Ve({inputs:{real:K,imag:Y},backend:o}),tt=kc({inputs:{a:Z,b:V},backend:o}),Q=Lo({inputs:{a:$,b:tt},backend:o}),ot=mp({inputs:{a:$,b:tt},backend:o}),at=so({inputs:{input:Q},backend:o}),dt=so({inputs:{input:ot},backend:o}),ht=Po({inputs:{input:Q},backend:o}),gt=Po({inputs:{input:ot},backend:o}),bt=zo({inputs:[at,dt],backend:o,attrs:{axis:0}}),Rt=zo({inputs:[ht,gt],backend:o,attrs:{axis:0}}),Mt=o.data.get(bt.dataId).values,Kt=o.data.get(Rt.dataId).values;return o.disposeIntermediateTensorInfo(h),o.disposeIntermediateTensorInfo(d),o.disposeIntermediateTensorInfo(p),o.disposeIntermediateTensorInfo(b),o.disposeIntermediateTensorInfo(w),o.disposeIntermediateTensorInfo(y),o.disposeIntermediateTensorInfo(k),o.disposeIntermediateTensorInfo(S),o.disposeIntermediateTensorInfo($),o.disposeIntermediateTensorInfo(z),o.disposeIntermediateTensorInfo(G),o.disposeIntermediateTensorInfo(V),o.disposeIntermediateTensorInfo(K),o.disposeIntermediateTensorInfo(Y),o.disposeIntermediateTensorInfo(Z),o.disposeIntermediateTensorInfo(tt),o.disposeIntermediateTensorInfo(Q),o.disposeIntermediateTensorInfo(ot),o.disposeIntermediateTensorInfo(at),o.disposeIntermediateTensorInfo(ht),o.disposeIntermediateTensorInfo(dt),o.disposeIntermediateTensorInfo(gt),o.disposeIntermediateTensorInfo(bt),o.disposeIntermediateTensorInfo(Rt),{real:Mt,imag:Kt}}function G_(n,t,e){const s=new Float32Array(t*2);for(let o=0;o<t;o++){let r=0,i=0;for(let a=0;a<t;a++){const l=Ox(o*a,t,e),c=_d(n,a);r+=c.real*l.real-c.imag*l.imag,i+=c.real*l.imag+c.imag*l.real}e&&(r/=t,i/=t),Fx(s,r,i,o)}return s}function H_(n){const{inputs:t,backend:e}=n,{input:s}=t,o=H(s.shape),r=s.shape[s.shape.length-1],i=o/r,a=Bt({inputs:{x:s},backend:e,attrs:{shape:[i,r]}}),l=xy(a,!1,e),c=Bt({inputs:{x:l},backend:e,attrs:{shape:s.shape}});return e.disposeIntermediateTensorInfo(a),e.disposeIntermediateTensorInfo(l),c}const j_={kernelName:fh,backendName:"cpu",kernelFunc:H_};function bp(n){const{backend:t,attrs:e}=n,{shape:s,value:o,dtype:r}=e,i=r||Wo(o),a=Yt(i,H(s));return K_(a,o,i),t.makeTensorInfo(s,i,a)}const q_={kernelName:mh,backendName:"cpu",kernelFunc:bp};function K_(n,t,e){n.fill(t)}const X_={kernelName:gh,backendName:"cpu",kernelFunc:({inputs:n,attrs:t,backend:e})=>{const{image:s}=n,o=e,r=Ce(s.dtype,H(s.shape)),[i,a,l,c]=s.shape,u=o.data.get(s.dataId).values;for(let d=0;d<i;d++){const p=d*l*a*c;for(let f=0;f<a;f++){const m=f*(l*c);for(let g=0;g<l;g++){const x=g*c;for(let b=0;b<c;b++){const w=Math.round(l-g-1),y=p+m+x+b;let C=u[y];if(w>=0&&w<l){const I=w*c,N=p+m+I+b;C=u[N]}r[y]=C}}}}return{dataId:o.write(r,s.shape,s.dtype),shape:s.shape,dtype:s.dtype}}};function Y_(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,filter:r,bias:i,preluActivationWeights:a}=t,{strides:l,pad:c,dataFormat:u,dilations:h,dimRoundingMode:d,activation:p,leakyreluAlpha:f}=s;let m=my({inputs:{x:o,filter:r},backend:e,attrs:{strides:l,pad:c,dataFormat:u,dilations:h,dimRoundingMode:d}});if(i){const g=m;if(u==="NCHW"&&i.shape.length===1&&i.shape[0]!==1){const x=Bt({inputs:{x:i},backend:e,attrs:{shape:[i.shape[0],1,1]}});m=Lo({inputs:{a:m,b:x},backend:e}),e.disposeIntermediateTensorInfo(x)}else m=Lo({inputs:{a:m,b:i},backend:e});e.disposeIntermediateTensorInfo(g)}if(p){const g=m;if(u==="NCHW"&&p==="prelu"&&a.shape.length===1&&a.shape[0]!==1){const x=Bt({inputs:{x:a},backend:e,attrs:{shape:[a.shape[0],1,1]}});m=Ka(e,m,p,x,f),e.disposeIntermediateTensorInfo(x)}else m=Ka(e,m,p,a,f);e.disposeIntermediateTensorInfo(g)}return m}const Z_={kernelName:Na,backendName:"cpu",kernelFunc:Y_};function J_(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,filter:r,bias:i,preluActivationWeights:a}=t,{strides:l,pad:c,dataFormat:u,dilations:h,dimRoundingMode:d,activation:p,leakyreluAlpha:f}=s;let m=gy({inputs:{x:o,filter:r},backend:e,attrs:{strides:l,pad:c,dataFormat:u,dilations:h,dimRoundingMode:d}});if(i){const g=m;m=Lo({inputs:{a:m,b:i},backend:e}),e.disposeIntermediateTensorInfo(g)}if(p){const g=m;m=Ka(e,m,p,a,f),e.disposeIntermediateTensorInfo(g)}return m}const Q_={kernelName:ig,backendName:"cpu",kernelFunc:J_};function tO(n){const{inputs:t,backend:e}=n,{params:s,indices:o}=t,r=H(s.shape),i=o.shape,a=i[i.length-1],[l,c,u,h]=xd(s,o);if(c===0)return e.makeTensorInfo(l,s.dtype,[]);const d=e.data.get(o.dataId).values,p=e.bufferSync(s),f=N1(d,p,s.dtype,c,a,u,h,s.shape,r);return e.makeTensorInfo(l,s.dtype,f.values)}const eO={kernelName:Um,backendName:"cpu",kernelFunc:tO};function nO(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,indices:r}=t,{axis:i,batchDims:a}=s;rt([o,r],"gatherV2");const l=Ct(i,o.shape)[0],c=e.data.get(r.dataId).values,u=o.shape[l];for(let y=0;y<c.length;++y){const C=c[y];v(C<=u-1&&C>=0,()=>`GatherV2: the index value ${C} is not in [0, ${u-1}]`)}let h=a;a==null&&(h=0);const d=H(r.shape),p=Vd(o,r,l,h),f=Bt({inputs:{x:o},backend:e,attrs:{shape:[p.batchSize,p.outerSize,p.dimSize,p.sliceSize]}}),m=Bt({inputs:{x:r},backend:e,attrs:{shape:[p.batchSize,d/p.batchSize]}}),g=[p.batchSize,p.outerSize,d/p.batchSize,p.sliceSize],x=e.bufferSync(m),b=e.bufferSync(f),w=T1(b,x,g);return e.disposeIntermediateTensorInfo(f),e.disposeIntermediateTensorInfo(m),e.makeTensorInfo(p.outputShape,w.dtype,w.values)}const sO={kernelName:yl,backendName:"cpu",kernelFunc:nO};function oO(n){const{inputs:t,backend:e}=n,{input:s}=t,o=H(s.shape),r=s.shape[s.shape.length-1],i=o/r,a=Bt({inputs:{x:s},backend:e,attrs:{shape:[i,r]}}),l=xy(a,!0,e),c=Bt({inputs:{x:l},backend:e,attrs:{shape:s.shape}});return e.disposeIntermediateTensorInfo(a),e.disposeIntermediateTensorInfo(l),c}const rO={kernelName:xh,backendName:"cpu",kernelFunc:oO};const iO=Dt(ti,n=>Number.isFinite(n)?1:0,"bool"),aO={kernelName:ti,backendName:"cpu",kernelFunc:iO};const lO=Dt(ei,n=>Math.abs(n)===1/0?1:0,"bool"),cO={kernelName:ei,backendName:"cpu",kernelFunc:lO};const uO=Dt(ni,n=>Number.isNaN(n)?1:0,"bool"),hO={kernelName:ni,backendName:"cpu",kernelFunc:uO};function dO(n){const{backend:t,attrs:e}=n,{start:s,stop:o,num:r}=e,i=F1(s,o,r);return t.makeTensorInfo([i.length],"float32",i)}const pO={kernelName:yh,backendName:"cpu",kernelFunc:dO};const fO=Dt(oi,n=>Math.log1p(n)),mO={kernelName:oi,backendName:"cpu",kernelFunc:fO};const gO=ee((n,t)=>n&&t),xO=ce(vl,gO,null,"bool"),bO={kernelName:vl,backendName:"cpu",kernelFunc:xO};const yO=Dt(kl,n=>n?0:1,"bool"),wO={kernelName:kl,backendName:"cpu",kernelFunc:yO};const CO=ee((n,t)=>n||t),$O=ce(Sl,CO,null,"bool"),IO={kernelName:Sl,backendName:"cpu",kernelFunc:$O};function vO(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{depthRadius:r,bias:i,alpha:a,beta:l}=s;rt(o,"LRN");const c=o.shape[3],u=c-1,h=e.data.get(o.dataId).values,d=H(o.shape),p=new Float32Array(d);function f(m){const g=m%c;let x=m-g+Math.max(0,g-r);const b=m-g+Math.min(g+r,u);let w=0;for(;x<=b;x++){const y=h[x];w+=y*y}return w}for(let m=0;m<d;m++){const g=f(m),x=h[m]*Math.pow(i+a*g,-l);p[m]=x}return e.makeTensorInfo(o.shape,o.dtype,p)}const kO={kernelName:Nl,backendName:"cpu",kernelFunc:vO};function SO(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,y:r,dy:i}=t,{depthRadius:a,bias:l,alpha:c,beta:u}=s;rt(i,"LRNGrad");const h=H(i.shape),d=i.shape[3],p=e.data.get(i.dataId).values,f=e.data.get(o.dataId).values,m=e.data.get(r.dataId).values,g=new Float32Array(h),x=h;for(let b=0;b<x;b++){const w=b%d,y=b-w+Math.max(0,w-a),C=b-w+Math.min(d,w+a+1);let I=0;for(let N=y;N<C;N++)I+=Math.pow(f[N],2);I=c*I+l;for(let N=y;N<C;N++){let T=-2*c*u*f[N]*m[b]/I;b===N&&(T+=Math.pow(I,-u)),T*=p[b],g[N]+=T}}return e.makeTensorInfo(i.shape,o.dtype,g)}const NO={kernelName:wh,backendName:"cpu",kernelFunc:SO};function by(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{reductionIndices:r,keepDims:i}=s,a=e;let l=o.shape;const c=l.length,u=Ct(r,l);let h=u;const d=qt(h,c);let p=a.data.get(o.dataId).values;if(d!=null){const y=new Array(c);for(let C=0;C<y.length;C++)y[C]=l[d[C]];p=pp(p,l,o.dtype,d,y),h=Qt(h.length,c),l=y}rt(o,"max"),ye("max",h,c);const[f,m]=fe(l,h),g=H(m),x=O1(p,g,f,o.dtype),b=a.write(x,f,o.dtype);let w=f;return i&&(w=se(f,u)),{dataId:b,shape:w,dtype:o.dtype}}const TO={kernelName:Tl,backendName:"cpu",kernelFunc:by};function EO(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t;rt(o,"maxPool");const{filterSize:r,strides:i,pad:a,dimRoundingMode:l}=s,c=1;v(ve(i,c),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${i} and dilations '${c}'`);const u=cn(o.shape,r,i,c,a,l);let h;if(u.filterWidth===1&&u.filterHeight===1&&Et(u.inShape,u.outShape))h=Wn({inputs:{x:o},backend:e});else{const d=e.data.get(o.dataId).values,p=lt(o.shape),f=gp(d,o.shape,o.dtype,p,u,"max");h=e.makeTensorInfo(u.outShape,o.dtype,f.values)}return h}const RO={kernelName:El,backendName:"cpu",kernelFunc:EO};function AO(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{filterSize:r,strides:i,pad:a,dimRoundingMode:l,dataFormat:c}=s;rt(o,"maxPool3d");const u=Qn(o.shape,r,i,1,a,l,c),h=e.data.get(o.dataId).values,d=fy(h,o.shape,o.dtype,lt(o.shape),u,"max");return e.makeTensorInfo(d.shape,"float32",d.values)}const DO={kernelName:Rl,backendName:"cpu",kernelFunc:AO};function FO(n){const{inputs:t,backend:e,attrs:s}=n,{dy:o,input:r}=t,{filterSize:i,strides:a,pad:l,dimRoundingMode:c}=s;rt([o,r],"maxPool3DGrad");const u=Qn(r.shape,i,a,1,l,c),h=e.bufferSync(r),d=CF(h,u),p=u.strideDepth,f=u.strideHeight,m=u.strideWidth,g=u.dilationDepth,x=u.dilationHeight,b=u.dilationWidth,w=u.effectiveFilterDepth,y=u.effectiveFilterHeight,C=u.effectiveFilterWidth,I=w-1-u.padInfo.front,N=C-1-u.padInfo.left,T=y-1-u.padInfo.top,k=wt(r.shape,"float32"),S=e.bufferSync(o);for(let $=0;$<u.batchSize;++$)for(let R=0;R<u.inChannels;++R)for(let A=0;A<u.inDepth;++A)for(let O=0;O<u.inHeight;++O)for(let M=0;M<u.inWidth;++M){const z=A-I,G=O-T,V=M-N;let U=0;for(let q=0;q<w;q+=g){const K=(z+q)/p;if(!(K<0||K>=u.outDepth||Math.floor(K)!==K))for(let Y=0;Y<y;Y+=x){const Z=(G+Y)/f;if(!(Z<0||Z>=u.outHeight||Math.floor(Z)!==Z))for(let tt=0;tt<C;tt+=b){const Q=(V+tt)/m;if(Q<0||Q>=u.outWidth||Math.floor(Q)!==Q)continue;const ot=w*y*C-1-d.get($,K,Z,Q,R),at=q*y*C+Y*C+tt,dt=ot===at?1:0;if(dt===0)continue;const ht=S.get($,K,Z,Q,R);U+=ht*dt}}}k.set(U,$,A,O,M,R)}return e.makeTensorInfo(k.shape,k.dtype,k.values)}const _O={kernelName:$h,backendName:"cpu",kernelFunc:FO};function OO(n){const{inputs:t,backend:e,attrs:s}=n,{dy:o,input:r,output:i}=t,a=r;rt([r,i],"maxPoolGrad");const{filterSize:l,strides:c,pad:u,dimRoundingMode:h}=s,d=cn(a.shape,l,c,1,u,h),p=e.data.get(a.dataId).values,f=wt(d.outShape,a.dtype,py(p,a.shape,a.dtype,d).values),m=d.strideHeight,g=d.strideWidth,x=d.dilationHeight,b=d.dilationWidth,w=d.effectiveFilterHeight,y=d.effectiveFilterWidth,C=y-1-d.padInfo.left,I=w-1-d.padInfo.top,N=wt(a.shape,"float32"),T=e.data.get(o.dataId).values,k=wt(o.shape,"float32",T);for(let S=0;S<d.batchSize;++S)for(let $=0;$<d.inChannels;++$)for(let R=0;R<d.inHeight;++R)for(let A=0;A<d.inWidth;++A){const O=R-I,M=A-C;let z=0;for(let G=0;G<w;G+=x){const V=(O+G)/m;if(!(V<0||V>=d.outHeight||Math.floor(V)!==V))for(let U=0;U<y;U+=b){const q=(M+U)/g;if(q<0||q>=d.outWidth||Math.floor(q)!==q)continue;const K=w*y-1-f.get(S,V,q,$),Y=G*y+U,Z=K===Y?1:0;if(Z===0)continue;const tt=k.get(S,V,q,$);z+=tt*Z}}N.set(z,S,R,A,$)}return e.makeTensorInfo(N.shape,N.dtype,N.values)}const MO={kernelName:Ch,backendName:"cpu",kernelFunc:OO};function LO(n,t,e,s,o){const r=lt(t),i=gp(n,t,e,r,o,"max"),a=py(n,t,e,o,!0,s);return[i.values,a.values]}const PO={kernelName:Gm,backendName:"cpu",kernelFunc:({inputs:n,attrs:t,backend:e})=>{const{x:s}=n,{filterSize:o,strides:r,pad:i,includeBatchInIndex:a}=t,l=e;rt(s,"MaxPoolWithArgmax");const c=l.data.get(s.dataId).values,u=cn(s.shape,o,r,[1,1],i),[h,d]=LO(c,s.shape,s.dtype,a,u),p=l.write(h,u.outShape,s.dtype),f=l.write(d,u.outShape,s.dtype);return[{dataId:p,shape:u.outShape,dtype:s.dtype},{dataId:f,shape:u.outShape,dtype:"int32"}]}};function zO(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{axis:r,keepDims:i}=s,a=Ct(r,o.shape),c=fe(o.shape,a)[1],u=H(c),h=[],d=e.makeTensorInfo([],"float32",new Float32Array([u]));h.push(d);const p=ws({inputs:{x:o},backend:e,attrs:{dtype:"float32"}});h.push(p);const f=xp({inputs:{a:p,b:d},backend:e});h.push(f);const m=Gi({inputs:{x:f},backend:e,attrs:{axis:r,keepDims:i}});return h.forEach(g=>e.disposeIntermediateTensorInfo(g)),m}const BO={kernelName:Al,backendName:"cpu",kernelFunc:zO};function VO(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{axis:r,keepDims:i}=s;rt(o,"min");const a=Ct(r,o.shape);let l=a;const c=qt(l,o.shape.length);let u=o;c!=null&&(u=Pe({inputs:{x:o},backend:e,attrs:{perm:c}}),l=Qt(l.length,o.shape.length)),ye("min",l,u.shape.length);const[h,d]=fe(u.shape,l),p=H(d),f=$e(H(h),u.dtype),m=e.data.get(u.dataId).values;for(let x=0;x<f.length;++x){const b=x*p;let w=m[b];for(let y=0;y<p;++y){const C=m[b+y];(Number.isNaN(C)||C<w)&&(w=C)}f[x]=w}c!=null&&e.disposeIntermediateTensorInfo(u);const g=e.makeTensorInfo(h,u.dtype,f);if(i){const x=se(h,a),b=Bt({inputs:{x:g},backend:e,attrs:{shape:x}});return e.disposeIntermediateTensorInfo(g),b}return g}const WO={kernelName:Dl,backendName:"cpu",kernelFunc:VO};function UO(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{paddings:r,mode:i}=s;rt(o,"mirrorPad");const a=r.map((w,y)=>w[0]+o.shape[y]+w[1]),l=r.map(w=>w[0]),c=r.map((w,y)=>w[0]+o.shape[y]),u=i==="reflect"?0:1,h=e.data.get(o.dataId).values,d=o.shape.length,p=lt(o.shape),f=H(a),m=a.length,g=lt(a),x=Ce(o.dtype,f);for(let w=0;w<f;w++){let y=Uo(w,m,g);for(let I=0;I<m;I++)y[I]<l[I]?y[I]=l[I]*2-y[I]-u:y[I]>=c[I]&&(y[I]=(c[I]-1)*2-y[I]+u);y=y.map((I,N)=>I-l[N]);const C=An(y,d,p);x[w]=h[C]}return{dataId:e.write(x,a,o.dtype),shape:a,dtype:o.dtype}}const GO={kernelName:Fl,backendName:"cpu",kernelFunc:UO};const HO=ee(((n,t)=>{const e=n%t;return n<0&&t<0||n>=0&&t>=0?e:(e+t)%t})),jO=ce(ai,HO),qO={kernelName:ai,backendName:"cpu",kernelFunc:jO};function yy(n){const{inputs:t,backend:e,attrs:s}=n,{logits:o}=t,{dim:r}=s,i=o.shape.length;let a=r;if(a===-1&&(a=i-1),a!==i-1)throw Error(`Softmax along a non-last dimension is not yet supported. Logits was rank ${i} and dim was ${a}`);const l=Ct([a],o.shape),c=by({inputs:{x:o},backend:e,attrs:{reductionIndices:l,keepDims:!1}}),u=se(c.shape,l),h=Bt({inputs:{x:c},backend:e,attrs:{shape:u}}),d=mp({inputs:{a:o,b:h},backend:e}),p=I1({inputs:{x:d},backend:e}),f=Gi({inputs:{x:p},backend:e,attrs:{axis:l,keepDims:!1}}),m=Bt({inputs:{x:f},backend:e,attrs:{shape:u}}),g=xp({inputs:{a:p,b:m},backend:e});return e.disposeIntermediateTensorInfo(c),e.disposeIntermediateTensorInfo(h),e.disposeIntermediateTensorInfo(d),e.disposeIntermediateTensorInfo(p),e.disposeIntermediateTensorInfo(f),e.disposeIntermediateTensorInfo(m),g}const KO={kernelName:Zl,backendName:"cpu",kernelFunc:yy};function XO(n){const{inputs:t,backend:e,attrs:s}=n,{logits:o}=t,{numSamples:r,seed:i,normalized:a}=s;rt(o,"multinomial");const l=a?o:yy({inputs:{logits:o},backend:e,attrs:{dim:-1}}),c=l.shape[0],u=l.shape[1],h=e.data.get(l.dataId).values,d=[c,r],p=$e(H(d),"int32");for(let f=0;f<c;++f){const m=f*u,g=new Float32Array(u-1);g[0]=h[m];for(let w=1;w<g.length;++w)g[w]=g[w-1]+h[m+w];const x=nd.alea(i.toString()),b=f*r;for(let w=0;w<r;++w){const y=x();p[b+w]=g.length;for(let C=0;C<g.length;C++)if(y<g[C]){p[b+w]=C;break}}}return a||e.disposeIntermediateTensorInfo(l),e.makeTensorInfo(d,"int32",p)}const YO={kernelName:Hm,backendName:"cpu",kernelFunc:XO};const ZO=hd;function JO(n){const{inputs:t,backend:e,attrs:s}=n,{boxes:o,scores:r}=t,{maxOutputSize:i,iouThreshold:a,scoreThreshold:l}=s;rt(o,"NonMaxSuppression");const c=e.data.get(o.dataId).values,u=e.data.get(r.dataId).values,{selectedIndices:h}=ZO(c,u,i,a,l);return e.makeTensorInfo([h.length],"int32",new Int32Array(h))}const QO={kernelName:Ih,backendName:"cpu",kernelFunc:JO};const tM=dd;function eM(n){const{inputs:t,backend:e,attrs:s}=n,{boxes:o,scores:r}=t,{maxOutputSize:i,iouThreshold:a,scoreThreshold:l,padToMaxOutputSize:c}=s;rt(o,"NonMaxSuppressionPadded");const u=e.data.get(o.dataId).values,h=e.data.get(r.dataId).values,{selectedIndices:d,validOutputs:p}=tM(u,h,i,a,l,c);return[e.makeTensorInfo([d.length],"int32",new Int32Array(d)),e.makeTensorInfo([],"int32",new Int32Array([p]))]}const nM={kernelName:vh,backendName:"cpu",kernelFunc:eM};const sM=pd;function oM(n){const{inputs:t,backend:e,attrs:s}=n,{boxes:o,scores:r}=t,{maxOutputSize:i,iouThreshold:a,scoreThreshold:l,softNmsSigma:c}=s;rt(o,"NonMaxSuppressionWithScore");const u=e.data.get(o.dataId).values,h=e.data.get(r.dataId).values,d=i,p=a,f=l,m=c,{selectedIndices:g,selectedScores:x}=sM(u,h,d,p,f,m);return[e.makeTensorInfo([g.length],"int32",new Int32Array(g)),e.makeTensorInfo([x.length],"float32",new Float32Array(x))]}const rM={kernelName:kh,backendName:"cpu",kernelFunc:oM};function iM(n){const{inputs:t,backend:e,attrs:s}=n,{indices:o}=t,{dtype:r,depth:i,onValue:a,offValue:l}=s;rt(o,"oneHot");const c=H(o.shape),u=new Float32Array(c*i);u.fill(l);const h=e.data.get(o.dataId).values;for(let d=0;d<c;++d)h[d]>=0&&h[d]<i&&(u[d*i+h[d]]=a);return e.makeTensorInfo([...o.shape,i],r,u)}const aM={kernelName:Ll,backendName:"cpu",kernelFunc:iM};function Ya(n){const{inputs:t,backend:e}=n,{x:s}=t;if(s.dtype==="string")throw new Error("zerosLike is not supported for string tensors");if(s.dtype==="complex64"){const o=so({inputs:{input:s},backend:e}),r=Ya({inputs:{x:o},backend:e}),i=Po({inputs:{input:s},backend:e}),a=Ya({inputs:{x:i},backend:e}),l=Ve({inputs:{real:r,imag:a},backend:e});return e.disposeIntermediateTensorInfo(o),e.disposeIntermediateTensorInfo(r),e.disposeIntermediateTensorInfo(i),e.disposeIntermediateTensorInfo(a),l}else return bp({backend:e,attrs:{shape:s.shape,value:0,dtype:s.dtype}})}const lM={kernelName:tc,backendName:"cpu",kernelFunc:Ya};function wy(n){const{inputs:t,backend:e}=n,{x:s}=t;if(s.dtype==="string")throw new Error("onesLike is not supported for string tensors");if(s.dtype==="complex64"){const o=so({inputs:{input:s},backend:e}),r=wy({inputs:{x:o},backend:e}),i=Po({inputs:{input:s},backend:e}),a=Ya({inputs:{x:i},backend:e}),l=Ve({inputs:{real:r,imag:a},backend:e});return e.disposeIntermediateTensorInfo(o),e.disposeIntermediateTensorInfo(r),e.disposeIntermediateTensorInfo(i),e.disposeIntermediateTensorInfo(a),l}else return bp({backend:e,attrs:{shape:s.shape,value:1,dtype:s.dtype}})}const cM={kernelName:Ml,backendName:"cpu",kernelFunc:wy};function Cy(n){const{inputs:t,backend:e,attrs:s}=n,{axis:o}=s;if(t.length===1)return Xa({inputs:{input:t[0]},backend:e,attrs:{dim:o}});const r=t[0].shape,i=t[0].dtype;t.forEach(u=>{Hu(r,u.shape,"All tensors passed to stack must have matching shapes"),v(i===u.dtype,()=>"All tensors passed to stack must have matching dtypes")});const a=[],l=t.map(u=>{const h=Xa({inputs:{input:u},backend:e,attrs:{dim:o}});return a.push(h),h}),c=zo({inputs:l,backend:e,attrs:{axis:o}});return a.forEach(u=>e.disposeIntermediateTensorInfo(u)),c}const uM={kernelName:Pl,backendName:"cpu",kernelFunc:Cy};function hM(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{paddings:r,constantValue:i}=s;rt(o,"pad");const a=r.map((b,w)=>b[0]+o.shape[w]+b[1]),l=r.map(b=>b[0]),c=e.data.get(o.dataId).values,u=H(o.shape),h=o.shape.length,d=lt(o.shape),p=H(a),f=a.length,m=lt(a),g=Ce(o.dtype,p);i!==0&&g.fill(i);for(let b=0;b<u;b++){const y=Uo(b,h,d).map((I,N)=>I+l[N]),C=An(y,f,m);g[C]=c[b]}return{dataId:e.write(g,a,o.dtype),shape:a,dtype:o.dtype}}const $y={kernelName:zl,backendName:"cpu",kernelFunc:hM};const dM=ee((n,t)=>Math.pow(n,t)),pM=ce(ci,dM),fM={kernelName:ci,backendName:"cpu",kernelFunc:pM};function mM(n){const{inputs:t,backend:e,attrs:s}=n,{paramsNestedSplits:o,paramsDenseValues:r,indices:i}=t,{outputRaggedRank:a}=s,l=o.map(x=>e.data.get(x.dataId).values),c=o.map(x=>x.shape),u=e.data.get(r.dataId).values,h=e.data.get(i.dataId).values,[d,p,f]=V1(l,c,u,r.shape,r.dtype,h,i.shape),m=d.map(x=>e.makeTensorInfo([x.length],"int32",x)),g=e.makeTensorInfo(f,r.dtype,p);return m.concat([g])}const gM={kernelName:jm,backendName:"cpu",kernelFunc:mM};function xM(n){const{inputs:t,backend:e}=n,{starts:s,limits:o,deltas:r}=t,i=e.data.get(s.dataId).values,a=e.data.get(o.dataId).values,l=e.data.get(r.dataId).values,[c,u]=W1(i,s.shape,s.dtype,a,o.shape,l,r.shape),h=e.makeTensorInfo([c.length],"int32",c),d=e.makeTensorInfo([u.length],s.dtype,u);return[h,d]}const bM={kernelName:qm,backendName:"cpu",kernelFunc:xM};function yM(n){const{inputs:t,backend:e,attrs:s}=n,{shape:o,values:r,defaultValue:i,rowPartitionTensors:a}=t,{rowPartitionTypes:l}=s,c=e.data.get(o.dataId).values,u=e.data.get(r.dataId).values,h=e.data.get(i.dataId).values,d=a.map(g=>e.data.get(g.dataId).values),p=a.map(g=>g.shape),[f,m]=U1(c,o.shape,u,r.shape,r.dtype,h,i.shape,d,p,l);return e.makeTensorInfo(f,r.dtype,m)}const wM={kernelName:Km,backendName:"cpu",kernelFunc:yM};function CM(n){const{backend:t,attrs:e}=n,{start:s,stop:o,dtype:r,step:i}=e,a=G1(s,o,i,r);return t.makeTensorInfo([a.length],r,a)}const $M={kernelName:Sh,backendName:"cpu",kernelFunc:CM};const IM=Dt(ui,n=>1/n),vM={kernelName:ui,backendName:"cpu",kernelFunc:IM};function kM(n){const{inputs:t,backend:e,attrs:s}=n,{images:o}=t,{alignCorners:r,halfPixelCenters:i,size:a}=s;rt(o,"resizeBilinear");const l=lt(o.shape),[c,u]=a,[h,d,p,f]=o.shape,m=e.data.get(o.dataId).values,g=new Float32Array(H([h,c,u,f])),x=[r&&c>1?d-1:d,r&&u>1?p-1:p],b=[r&&c>1?c-1:c,r&&u>1?u-1:u];let w=0;const y=x[0]/b[0],C=x[1]/b[1];for(let I=0;I<h;I++)for(let N=0;N<c;N++){let T;i?T=y*(N+.5)-.5:T=y*N;const k=Math.max(0,Math.floor(T)),S=T-k,$=Math.min(d-1,Math.ceil(T)),R=I*l[0]+k*l[1],A=I*l[0]+$*l[1];for(let O=0;O<u;O++){let M;i?M=C*(O+.5)-.5:M=C*O;const z=Math.max(0,Math.floor(M)),G=M-z,V=Math.min(p-1,Math.ceil(M)),U=R+z*l[2],q=A+z*l[2],K=R+V*l[2],Y=A+V*l[2];for(let Z=0;Z<f;Z++){const tt=m[U+Z],Q=m[q+Z],ot=m[K+Z],at=m[Y+Z],dt=tt+(ot-tt)*G,ht=Q+(at-Q)*G,gt=dt+(ht-dt)*S;g[w++]=gt}}}return e.makeTensorInfo([h,c,u,f],"float32",g)}const SM={kernelName:Gl,backendName:"cpu",kernelFunc:kM};function NM(n){const{inputs:t,backend:e,attrs:s}=n,{images:o,dy:r}=t,{alignCorners:i}=s;rt([r,o],"resizeBilinearGrad");const a=lt(o.shape),[l,c,u,h]=o.shape,[,d,p]=r.shape,f=new Float32Array(l*c*u*h),m=[i&&d>1?c-1:c,i&&p>1?u-1:u],g=[i&&d>1?d-1:d,i&&p>1?p-1:p],x=m[0]/g[0],b=m[1]/g[1],w=e.data.get(r.dataId).values;let y=0;for(let C=0;C<l;C++){const I=C*a[0];for(let N=0;N<d;N++){const T=N*x,k=Math.floor(T),S=Math.min(Math.ceil(T),c-1),$=I+k*a[1],R=I+S*a[1],A=T-k,O=1-A;for(let M=0;M<p;M++){const z=M*b,G=Math.floor(z),V=Math.min(Math.ceil(z),u-1),U=z-G,q=1-U,K=$+G*a[2],Y=$+V*a[2],Z=R+G*a[2],tt=R+V*a[2],Q=O*q,ot=O*U,at=A*q,dt=A*U;for(let ht=0;ht<h;ht++){const gt=w[y++];f[K+ht]+=gt*Q,f[Y+ht]+=gt*ot,f[Z+ht]+=gt*at,f[tt+ht]+=gt*dt}}}}return e.makeTensorInfo([l,u,c,h],"float32",f)}const TM={kernelName:Eh,backendName:"cpu",kernelFunc:NM};function EM(n){const{inputs:t,backend:e,attrs:s}=n,{images:o}=t,{alignCorners:r,halfPixelCenters:i,size:a}=s;rt(o,"resizeNearestNeighbor");const l=lt(o.shape),[c,u]=a,[h,d,p,f]=o.shape,m=e.data.get(o.dataId).values,g=new Float32Array(h*c*u*f),x=[r&&c>1?d-1:d,r&&u>1?p-1:p],b=[r&&c>1?c-1:c,r&&u>1?u-1:u],w=x[0]/b[0],y=x[1]/b[1];let C=0;for(let I=0;I<h;I++){const N=I*l[0];for(let T=0;T<c;T++){const k=i?w*(T+.5):w*T;let S=Math.min(d-1,r?Math.round(k):Math.floor(k));i&&(S=Math.max(0,S));const $=N+S*l[1];for(let R=0;R<u;R++){const A=i?y*(R+.5):y*R;let O=Math.min(p-1,r?Math.round(A):Math.floor(A));i&&(O=Math.max(0,O));const M=$+O*l[2];for(let z=0;z<f;z++){const G=m[M+z];g[C++]=G}}}}return e.makeTensorInfo([h,c,u,f],o.dtype,g)}const RM={kernelName:Ul,backendName:"cpu",kernelFunc:EM};function AM(n){const{inputs:t,backend:e,attrs:s}=n,{images:o,dy:r}=t,{alignCorners:i}=s;rt([r,o],"resizeNearestNeighborGrad");const a=lt(o.shape),l=lt(r.shape),[c,u,h,d]=o.shape,[,p,f]=r.shape,m=new Float32Array(c*u*h*d),g=e.data.get(r.dataId).values,x=[i&&p>1?u-1:u,i&&f>1?h-1:h],b=[i&&p>1?p-1:p,i&&f>1?f-1:f],w=x[0]/b[0],y=x[1]/b[1],C=1/w,I=1/y,N=Math.ceil(C)*2+2,T=Math.ceil(I)*2+2;for(let k=0;k<c;k++){const S=k*a[0];for(let $=0;$<u;$++){const R=S+$*a[1],A=Math.floor($*C),O=Math.floor(A-N/2);for(let M=0;M<h;M++){const z=R+M*a[2],G=Math.floor(M*I),V=Math.floor(G-T/2);for(let U=0;U<d;U++){let q=0;for(let K=0;K<N;K++){const Y=K+O;if(Y<0||Y>=p)continue;const Z=S+Y*l[1],tt=Y*w,Q=Math.min(u-1,i?Math.round(tt):Math.floor(tt));if($===Q)for(let ot=0;ot<T;ot++){const at=ot+V;if(at<0||at>=f)continue;const dt=Z+at*l[2],ht=at*y,gt=Math.min(h-1,i?Math.round(ht):Math.floor(ht));M===gt&&(q+=g[dt+U])}}m[z+U]=q}}}}return e.makeTensorInfo(o.shape,o.dtype,m)}const DM={kernelName:Th,backendName:"cpu",kernelFunc:AM};function FM(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{dims:r}=s;rt(o,"reverse");const i=o.shape.length,a=Ct(r,o.shape);if(i===0)return Wn({inputs:{x:o},backend:e});const l=new xe(o.shape,o.dtype),c=e.bufferSync(o);for(let u=0;u<l.size;u++){const h=l.indexToLoc(u),d=h.slice();a.forEach(p=>d[p]=o.shape[p]-1-d[p]),l.set(c.get(...d),...h)}return e.makeTensorInfo(l.shape,l.dtype,l.values)}const _M={kernelName:Hl,backendName:"cpu",kernelFunc:FM};const OM={kernelName:Mh,backendName:"cpu",kernelFunc:({inputs:n,attrs:t,backend:e})=>{const{image:s}=n,{radians:o,fillValue:r,center:i}=t,a=e,l=Ce(s.dtype,H(s.shape)),[c,u,h,d]=s.shape,[p,f]=kd(i,u,h),m=255,g=Math.sin(o),x=Math.cos(o),b=a.data.get(s.dataId).values;for(let y=0;y<c;y++){const C=y*h*u*d;for(let I=0;I<u;I++){const N=I*(h*d);for(let T=0;T<h;T++){const k=T*d;for(let S=0;S<d;S++){const $=[c,I,T,S],R=$[2],A=$[1];let O=(R-p)*x-(A-f)*g,M=(R-p)*g+(A-f)*x;O=Math.round(O+p),M=Math.round(M+f);let z=r;if(typeof r!="number"&&(S===3?z=m:z=r[S]),O>=0&&O<h&&M>=0&&M<u){const V=M*(h*d),U=O*d,q=C+V+U+S;z=b[q]}const G=C+N+k+S;l[G]=z}}}}return{dataId:a.write(l,s.shape,s.dtype),shape:s.shape,dtype:s.dtype}}};const MM=Dt(pi,n=>{const t=Math.floor(n);return n-t<.5?Math.floor(n):n-t>.5?Math.ceil(n):t%2===0?t:t+1}),LM={kernelName:pi,backendName:"cpu",kernelFunc:MM};function PM(n){const{inputs:t,backend:e,attrs:s}=n,{indices:o,updates:r}=t,{shape:i}=s,{sliceRank:a,numUpdates:l,sliceSize:c,strides:u,outputSize:h}=co(r,o,i),d=!0,p=e.bufferSync(o),f=e.bufferSync(r),m=Vs(p,f,i,h,c,l,a,u,0,d);return e.makeTensorInfo(i,m.dtype,m.values)}const zM={kernelName:Xm,backendName:"cpu",kernelFunc:PM};function BM(n,t){let e=0,s=n.length,o=0;for(;e<s;)o=Math.floor((e+s)/2),n[o]<t?e=o+1:s=o;return s}function VM(n,t){let e=0,s=n.length,o=0;for(;e<s;)o=Math.floor((e+s)/2),n[o]<=t?e=o+1:s=o;return s}function WM(n,t,e,s,o,r){const i=Yt("int32",e*o);for(let a=0;a<e;++a){const l=n.slice(a*s,(a+1)*s),c=a*o;for(let u=0;u<o;++u)i[c+u]=r==="left"?BM(l,t[u+c]):VM(l,t[u+c])}return i}function UM(n){const{inputs:t,backend:e,attrs:s}=n,{sortedSequence:o,values:r}=t,{side:i}=s,a=e.data.get(o.dataId).values,l=e.data.get(r.dataId).values,c=WM(a,l,o.shape[0],o.shape[1],r.shape[1],i);return e.makeTensorInfo(r.shape,"int32",c)}const GM={kernelName:Zm,backendName:"cpu",kernelFunc:UM};function HM(n){const{inputs:t,backend:e}=n,{condition:s,t:o,e:r}=t;rt([s,o,r],"select");const i=s.shape.length,a=e.data.get(s.dataId).values,l=e.data.get(o.dataId).values,c=e.data.get(r.dataId).values,u=Ue(o.dtype,r.dtype),h=$e(H(o.shape),u);let d=0;const p=i===0||i>1||o.shape.length===1?1:H(o.shape.slice(1));for(let f=0;f<a.length;f++)for(let m=0;m<p;m++)a[f]===1?h[d++]=l[f]:h[d++]=c[f];return e.makeTensorInfo(o.shape,u,h)}const jM={kernelName:jl,backendName:"cpu",kernelFunc:HM};const qM=dc,KM=pc,XM=Dt(mi,n=>n>=0?KM*n:qM*(Math.exp(n)-1)),YM={kernelName:mi,backendName:"cpu",kernelFunc:XM};const ZM=Dt(bi,n=>n<0?-1:n>0?1:0),JM={kernelName:bi,backendName:"cpu",kernelFunc:ZM};const QM=Dt(gi,n=>Math.sin(n)),tL={kernelName:gi,backendName:"cpu",kernelFunc:QM};const eL=Dt(xi,n=>Math.sinh(n)),nL={kernelName:xi,backendName:"cpu",kernelFunc:eL};const sL=11920928955078125e-23,tm=Math.log(sL)+2,oL=Dt(wi,n=>{const t=n>-tm,e=n<tm,s=Math.exp(n);let o;return e?o=s:t?o=n:o=Math.log(1+s),o}),rL={kernelName:wi,backendName:"cpu",kernelFunc:oL};function iL(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{blockShape:r,paddings:i}=s;rt([o],"spaceToBatchND");const a=H(r),l=[[0,0]];l.push(...i);for(let I=1+r.length;I<o.shape.length;++I)l.push([0,0]);const c=$y.kernelFunc({inputs:{x:o},backend:e,attrs:{paddings:l,constantValue:0}}),u=Fi(c.shape,r,a,!1),h=_i(u.length,r.length,!1),d=Oi(c.shape,r,a,!1),m=Bt({inputs:{x:c},backend:e,attrs:{shape:u}}),b=Pe({inputs:{x:m},backend:e,attrs:{perm:h}}),C=Bt({inputs:{x:b},backend:e,attrs:{shape:d}});return e.disposeIntermediateTensorInfo(c),e.disposeIntermediateTensorInfo(m),e.disposeIntermediateTensorInfo(b),C}const aL={kernelName:Xl,backendName:"cpu",kernelFunc:iL};function lL(n){const{inputs:t,backend:e}=n,{indices:s,values:o,denseShape:r,defaultValue:i}=t;if(r.shape.length!==1)throw new Error(`Dense shape must be a vector, saw:
        ${r.shape}`);if(s.shape.length!==2)throw new Error(`Indices must be a matrix, saw:
        ${s.shape}`);if(o.shape.length!==1)throw new Error(`Values must be a vector, saw:
        ${o.shape}`);if(i.shape.length!==0)throw new Error(`Default value must be a scalar, saw:
        ${i.shape}`);const a=e.data.get(s.dataId).values,l=e.data.get(o.dataId).values,c=e.data.get(r.dataId).values,u=e.data.get(i.dataId).values[0],[h,d,p,f,m]=K1(a,s.shape,s.dtype,l,o.dtype,c,u);return[e.makeTensorInfo(d,s.dtype,h),e.makeTensorInfo([d[0]],o.dtype,p),e.makeTensorInfo([f.length],"bool",new Uint8Array(f.map(g=>Number(g)))),e.makeTensorInfo([m.length],s.dtype,new Int32Array(m))]}const cL={kernelName:Jm,backendName:"cpu",kernelFunc:lL};function uL(n){const{inputs:t,backend:e}=n,{inputIndices:s,inputShape:o,newShape:r}=t;if(s.shape.length!==2)throw new Error(`Input indices should be a matrix but received shape
        ${s.shape}`);if(o.shape.length!==1)throw new Error(`Input shape should be a vector but received shape
        ${o.shape}`);if(r.shape.length!==1)throw new Error(`Target shape should be a vector but received shape ${r.shape}`);const i=Array.from(e.data.get(o.dataId).values),a=e.data.get(s.dataId).values,l=Array.from(e.data.get(r.dataId).values),[c,u,h]=X1(a,s.shape,s.dtype,i,l);return[e.makeTensorInfo(u,s.dtype,c),e.makeTensorInfo([h.length],r.dtype,new Int32Array(h))]}const hL={kernelName:Qm,backendName:"cpu",kernelFunc:uL};function dL(n){const{inputs:t,backend:e}=n,{data:s,indices:o,segmentIds:r}=t;if(s.shape.length<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(o.shape.length!==1)throw new Error(`Indices should be a vector but received shape
          ${o.shape}`);if(r.shape.length!==1)throw new Error(`Segment ids should be a vector but received shape
          ${r.shape}`);if(o.shape[0]!==r.shape[0])throw new Error("segmentIds and indices should have same size.");const i=e.data.get(s.dataId).values,a=e.data.get(o.dataId).values,l=e.data.get(r.dataId).values,[c,u]=fp(i,s.shape,s.dtype,a,l,!0);return e.makeTensorInfo(u,s.dtype,c)}const pL={kernelName:tg,backendName:"cpu",kernelFunc:dL};function fL(n){const{inputs:t,backend:e}=n,{data:s,indices:o,segmentIds:r}=t;if(s.shape.length<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(o.shape.length!==1)throw new Error(`Indices should be a vector but received shape
         ${o.shape}`);if(r.shape.length!==1)throw new Error(`Segment ids should be a vector but received shape
         ${r.shape}`);if(o.shape[0]!==r.shape[0])throw new Error("segmentIds and indices should have same size.");const i=e.data.get(s.dataId).values,a=e.data.get(o.dataId).values,l=e.data.get(r.dataId).values,[c,u]=fp(i,s.shape,s.dtype,a,l);return e.makeTensorInfo(u,s.dtype,c)}const mL={kernelName:eg,backendName:"cpu",kernelFunc:fL};function gL(n){const{inputs:t,backend:e,attrs:s}=n,{sparseIndices:o,sparseValues:r,defaultValue:i}=t,{outputShape:a}=s,{sliceRank:l,numUpdates:c,sliceSize:u,strides:h,outputSize:d}=co(r,o,a),p=!1,f=e.bufferSync(o);let m;switch(r.dtype){case"bool":{const g=e.bufferSync(r),x=!!e.data.get(i.dataId).values[0];m=Vs(f,g,a,d,u,c,l,h,x,p);break}case"float32":{const g=e.bufferSync(r),x=e.data.get(i.dataId).values[0];m=Vs(f,g,a,d,u,c,l,h,x,p);break}case"int32":{const g=e.bufferSync(r),x=e.data.get(i.dataId).values[0];m=Vs(f,g,a,d,u,c,l,h,x,p);break}case"string":{const g=e.bufferSync(r),x=ms(e.data.get(i.dataId).values[0]);m=Vs(f,g,a,d,u,c,l,h,x,p);break}default:throw new Error(`Unsupported type ${r.dtype}`)}return e.makeTensorInfo(a,m.dtype,m.values)}const xL={kernelName:ng,backendName:"cpu",kernelFunc:gL};function bL(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{numOrSizeSplits:r,axis:i}=s,a=Ct(i,o.shape)[0],l=Bd(o,r,a),c=new Array(o.shape.length).fill(0),u=o.shape.slice();return l.map(h=>{const d=[...u];d[a]=h;const p=oo({inputs:{x:o},backend:e,attrs:{begin:c,size:d}});return c[a]+=h,p})}const yL={kernelName:Yl,backendName:"cpu",kernelFunc:bL};const wL={kernelName:Rh,backendName:"cpu",kernelFunc:({inputs:n,backend:t})=>{const{x:e}=n,s=t;rt(e,"square");const o=s.data.get(e.dataId).values,r=new Float32Array(o.length);for(let a=0;a<o.length;++a){const l=o[a];r[a]=l*l}return{dataId:s.write(r,e.shape,e.dtype),shape:e.shape,dtype:e.dtype}}};const CL=Dt(Ni,(n,t)=>{const e=t;return isNaN(n)?NaN:n>0?1:e.alpha}),$L={kernelName:Ni,backendName:"cpu",kernelFunc:CL};function IL(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{begin:r,end:i,strides:a,beginMask:l,endMask:c,ellipsisMask:u,newAxisMask:h,shrinkAxisMask:d}=s;rt(o,"stridedSlice");const{finalShapeSparse:p,finalShape:f,isIdentity:m,sliceDim0:g,isSimpleSlice:x,begin:b,end:w,strides:y}=$d(o.shape,r,i,a,l,c,u,h,d);let C;if(m)C=Bt({inputs:{x:o},backend:e,attrs:{shape:f}});else if(g||x){v(o.shape.length>=1,()=>`Input must have rank at least 1, got: ${o.shape.length}`);const I=yd(b,w,y),N=oo({inputs:{x:o},backend:e,attrs:{begin:b,size:I}});C=Bt({inputs:{x:N},backend:e,attrs:{shape:f}}),e.disposeIntermediateTensorInfo(N)}else{const I=e.bufferSync(o),N=J1(p,I,y,b);C=e.makeTensorInfo(f,N.dtype,N.values)}return C}const vL={kernelName:Dh,backendName:"cpu",kernelFunc:IL};function kL(n){const{inputs:t,backend:e,attrs:s}=n,{separator:o,nGramWidths:r,leftPad:i,rightPad:a,padWidth:l,preserveShortSequences:c}=s,{data:u,dataSplits:h}=t,d=e.data.get(u.dataId).values,p=e.data.get(h.dataId).values,[f,m]=Q1(d,p,o,r,i,a,l,c);return[e.makeTensorInfo([f.length],"string",f),e.makeTensorInfo(h.shape,"int32",m)]}const SL={kernelName:sg,backendName:"cpu",kernelFunc:kL};function NL(n){const{inputs:t,backend:e,attrs:s}=n,{skipEmpty:o}=s,{input:r,delimiter:i}=t;if(r.dtype!=="string")throw new Error("Input must be of datatype string");if(r.shape.length!==1)throw new Error(`Input must be a vector, got shape: ${r.shape}`);if(i.shape.length!==0)throw new Error(`Delimiter must be a scalar, got shape: ${i.shape}`);const a=e.data.get(r.dataId).values,l=e.data.get(i.dataId).values[0],[c,u,h]=ty(a,l,o),d=u.length;return[e.makeTensorInfo([d,2],"int32",c),e.makeTensorInfo([d],"string",u),e.makeTensorInfo([2],"int32",new Int32Array(h))]}const TL={kernelName:og,backendName:"cpu",kernelFunc:NL};function EL(n){const{inputs:t,backend:e,attrs:s}=n,{numBuckets:o}=s,{input:r}=t;if(r.dtype!=="string")throw new Error("Input must be of datatype string");if(o<=0)throw new Error("Number of buckets must be at least 1");const i=e.data.get(r.dataId).values,a=ey(i,o);return e.makeTensorInfo(r.shape,"int32",a)}const RL={kernelName:rg,backendName:"cpu",kernelFunc:EL};const AL=Dt(vi,n=>Math.tan(n)),DL={kernelName:vi,backendName:"cpu",kernelFunc:AL};const FL=Dt(ki,n=>Math.tanh(n)),_L={kernelName:ki,backendName:"cpu",kernelFunc:FL};function OL(n){const{inputs:t,backend:e}=n,{tensor:s,indices:o,updates:r}=t,{sliceRank:i,numUpdates:a,sliceSize:l,strides:c,outputSize:u}=co(r,o,s.shape),h=!1,d=e.bufferSync(o),p=e.bufferSync(r),f=e.bufferSync(s),m=Vs(d,p,s.shape,u,l,a,i,c,f,h);return e.makeTensorInfo(s.shape,m.dtype,m.values)}const ML={kernelName:Ym,backendName:"cpu",kernelFunc:OL};function LL(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{reps:r}=s;rt(o,"tile");const i=sy(e.bufferSync(o),r);return e.makeTensorInfo(i.shape,i.dtype,i.values)}const PL={kernelName:Si,backendName:"cpu",kernelFunc:LL};function zL(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{k:r,sorted:i}=s;rt(o,"topk");const a=e.data.get(o.dataId).values,[l,c]=ry(a,o.shape,o.dtype,r,i);return[e.makeTensorInfo(l.shape,l.dtype,l.values),e.makeTensorInfo(c.shape,c.dtype,c.values)]}const BL={kernelName:Fh,backendName:"cpu",kernelFunc:zL};function VL(n){const{inputs:t,attrs:e,backend:s}=n,{image:o,transforms:r}=t,{interpolation:i,fillMode:a,fillValue:l,outputShape:c}=e,[u,h,d,p]=o.shape,[f,m]=c??[h,d],g=[u,f,m,p],x=lt(o.shape),b=x[0],w=x[1],y=x[2],C=lt(g),I=C[0],N=C[1],T=C[2],k=Ce(o.dtype,H(g));k.fill(l);const S=s.data.get(o.dataId).values,$=s.data.get(r.dataId).values;for(let A=0;A<u;++A){const O=r.shape[0]===1?$:$.subarray(A*8,A*8+8);for(let M=0;M<f;++M)for(let z=0;z<m;++z)for(let G=0;G<p;++G){let V;const U=O[6]*z+O[7]*M+1;if(U===0)continue;const q=(O[0]*z+O[1]*M+O[2])/U,K=(O[3]*z+O[4]*M+O[5])/U,Y=em(q,d,a),Z=em(K,h,a);switch(i){case"nearest":V=qL(S,h,d,b,w,y,A,Z,Y,G,l);break;case"bilinear":V=KL(S,h,d,b,w,y,A,Z,Y,G,l);break;default:throw new Error(`Error in Transform: Expect 'nearest' or 'bilinear', but got ${i}`)}const tt=A*I+M*N+z*T+G;k[tt]=V}return s.makeTensorInfo(g,o.dtype,k)}return{dataId:s.write(k,g,o.dtype),shape:o.shape,dtype:o.dtype}}const WL={kernelName:_h,backendName:"cpu",kernelFunc:VL};function em(n,t,e){switch(e){case"reflect":return UL(n,t);case"wrap":return GL(n,t);case"nearest":return jL(n,t);default:return HL(n)}}function UL(n,t){let e=n;if(e<0)if(t<=1)e=0;else{const s=2*t;e<s&&(e=s*Math.trunc(-e/s)+e),e=e<-t?e+s:-e-1}else if(e>t-1)if(t<=1)e=0;else{const s=2*t;e-=s*Math.trunc(e/s),e>=t&&(e=s-e-1)}return Hs(0,e,t-1)}function GL(n,t){let e=n;if(e<0)if(t<=1)e=0;else{const s=t-1;e+=t*(Math.trunc(-e/s)+1)}else if(e>t-1)if(t<=1)e=0;else{const s=t-1;e-=t*Math.trunc(e/s)}return Hs(0,e,t-1)}function HL(n,t){return n}function jL(n,t){return Hs(0,n,t-1)}function mr(n,t,e,s,o,r,i,a,l,c,u){const h=i*s+a*o+l*r+c;return 0<=a&&a<t&&0<=l&&l<e?n[h]:u}function qL(n,t,e,s,o,r,i,a,l,c,u){const h=Math.round(a),d=Math.round(l);return mr(n,t,e,s,o,r,i,h,d,c,u)}function KL(n,t,e,s,o,r,i,a,l,c,u){const h=Math.floor(a),d=Math.floor(l),p=h+1,f=d+1,m=(f-l)*mr(n,t,e,s,o,r,i,h,d,c,u)+(l-d)*mr(n,t,e,s,o,r,i,h,f,c,u),g=(f-l)*mr(n,t,e,s,o,r,i,p,d,c,u)+(l-d)*mr(n,t,e,s,o,r,i,p,f,c,u);return(p-a)*m+(a-h)*g}function XL(n){const{inputs:t,attrs:e,backend:s}=n,{axis:o}=e,{x:r}=t;rt(r,"unique");const i=s.data.get(r.dataId).values,{outputValues:a,outputShape:l,indices:c}=iy(i,o,r.shape,r.dtype);return[s.makeTensorInfo(l,r.dtype,a),s.makeTensorInfo([c.length],"int32",c)]}const YL={kernelName:Oh,backendName:"cpu",kernelFunc:XL};function ZL(n){const{inputs:t,backend:e,attrs:s}=n,{value:o}=t;let{axis:r}=s;r<0&&(r+=o.shape.length);const i=o.shape.length,a=o.shape[r],l=new Array(i-1);let c=0;for(let p=0;p<i;p++)p!==r&&(l[c++]=o.shape[p]);const u=new Array(i).fill(0),h=o.shape.slice();h[r]=1;const d=new Array(a);for(let p=0;p<d.length;p++){u[r]=p;const f=oo({inputs:{x:o},backend:e,attrs:{begin:u,size:h}});d[p]=Bt({inputs:{x:f},backend:e,attrs:{shape:l}}),e.disposeIntermediateTensorInfo(f)}return d}const JL={kernelName:Jl,backendName:"cpu",kernelFunc:ZL};function QL(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,segmentIds:r}=t,{numSegments:i}=s;rt(o,"unsortedSegmentSum");const a=o.shape.length,l=r.shape.length,c=[],u=[],h=a-l;let d=r;for(let f=0;f<h;++f){const m=Xa({inputs:{input:d},backend:e,attrs:{dim:f+1}});d=m,u.push(m)}for(let f=0;f<i;++f){const m=$s(f,"int32"),g=e.makeTensorInfo([],"int32",m),x=C1({inputs:{a:g,b:d},backend:e}),b=ws({inputs:{x},backend:e,attrs:{dtype:"float32"}}),w=kc({inputs:{a:b,b:o},backend:e}),y=Gi({inputs:{x:w},backend:e,attrs:{axis:0,keepDims:!1}});c.push(y),u.push(g),u.push(x),u.push(b),u.push(w),u.push(y)}const p=Cy({inputs:c,backend:e,attrs:{axis:0}});return u.forEach(f=>e.disposeIntermediateTensorInfo(f)),p}const tP={kernelName:Ql,backendName:"cpu",kernelFunc:QL};const eP=[XD,EA,ZD,QD,OA,eF,sF,rF,aF,cF,hF,pF,mF,bF,wF,IF,kF,NF,EF,qD,AF,FF,OF,LA,LF,FA,zA,zF,RA,VF,UF,GF,jF,KF,YF,JF,t_,n_,o_,i_,l_,u_,d_,f_,m_,x_,y_,C_,$_,I_,v_,S_,E_,BD,A_,BA,z_,VA,B_,UA,j_,q_,X_,HA,qA,Z_,Q_,eO,sO,XA,ZA,AA,rO,WF,aO,cO,hO,VD,QA,eD,pO,sD,mO,bO,wO,IO,kO,NO,TO,rD,RO,DO,_O,MO,PO,BO,WO,aD,GO,qO,YO,cD,hD,QO,nM,rM,pD,aM,cM,uM,$y,fM,UD,gD,gM,bM,wM,$M,DA,_u,vM,GD,HD,jD,SM,TM,RM,DM,_M,OM,LM,vD,zM,GM,jM,YM,SD,JM,tL,nL,ND,KO,rL,aL,cL,hL,pL,mL,xL,yL,RD,wL,DD,_D,$L,vL,SL,TL,RL,PD,N_,DL,_L,ML,PL,BL,WL,fD,YL,JL,tP,lM];for(const n of eP)ag(n);const zs={},oa={alpha:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1,depth:!1,stencil:!1,failIfMajorPerformanceCaveat:!0};function nP(n,t){zs[n]=t}function In(n,t){if(!(n in zs)||t!=null){const s=oP(n,t);if(s!==null)zs[n]=s;else return console.log("Could not get context for WebGL version",n),null}const e=zs[n];return e==null||e.isContextLost()?(delete zs[n],In(n)):(e.disable(e.DEPTH_TEST),e.disable(e.STENCIL_TEST),e.disable(e.BLEND),e.disable(e.DITHER),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SAMPLE_COVERAGE),e.enable(e.SCISSOR_TEST),e.enable(e.CULL_FACE),e.cullFace(e.BACK),zs[n])}function sP(n){if(!W().getBool("IS_SAFARI")&&typeof OffscreenCanvas<"u"&&n===2)return new OffscreenCanvas(300,150);if(typeof document<"u")return document.createElement("canvas");throw new Error("Cannot create a canvas in this context")}function oP(n,t){if(n!==1&&n!==2)throw new Error("Cannot get WebGL rendering context, WebGL is disabled.");const e=t??sP(n);return e.addEventListener("webglcontextlost",s=>{s.preventDefault(),delete zs[n]},!1),W().getBool("SOFTWARE_WEBGL_ENABLED")&&(oa.failIfMajorPerformanceCaveat=!1),n===1?e.getContext("webgl",oa)||e.getContext("experimental-webgl",oa):e.getContext("webgl2",oa)}var Tr;(function(n){n[n.DENSE=0]="DENSE",n[n.SHARED_BATCH=1]="SHARED_BATCH"})(Tr||(Tr={}));var Ke;(function(n){n[n.RENDER=0]="RENDER",n[n.UPLOAD=1]="UPLOAD",n[n.PIXELS=2]="PIXELS",n[n.DOWNLOAD=3]="DOWNLOAD"})(Ke||(Ke={}));var ge;(function(n){n[n.UNPACKED_FLOAT16=0]="UNPACKED_FLOAT16",n[n.UNPACKED_FLOAT32=1]="UNPACKED_FLOAT32",n[n.PACKED_4X1_UNSIGNED_BYTE=2]="PACKED_4X1_UNSIGNED_BYTE",n[n.PACKED_2X2_FLOAT32=3]="PACKED_2X2_FLOAT32",n[n.PACKED_2X2_FLOAT16=4]="PACKED_2X2_FLOAT16"})(ge||(ge={}));function Hi(n,t){return[t,n]}function rP(n,t){return n*t}function ra(n){const t=H(n),e=Math.ceil(t/4);return ou(e)}function Yo(n,t){return[Math.max(1,Math.ceil(t/2)),Math.max(1,Math.ceil(n/2))]}function iP(n,t){const[e,s]=Yo(n,t);return e*s*4}function yp(n,t){const e=n;let s,o,r,i,a,l,c,u,h,d;return W().getNumber("WEBGL_VERSION")===2?(s=e.R32F,o=e.R16F,r=e.RGBA16F,i=e.RGBA32F,a=e.RED,c=4,u=1,h=e.HALF_FLOAT,d=e.FLOAT,l=e.RGBA8):(s=n.RGBA,o=n.RGBA,r=n.RGBA,i=e.RGBA,a=n.RGBA,c=4,u=4,h=t!=null?t.HALF_FLOAT_OES:null,d=n.FLOAT,l=n.RGBA),{internalFormatFloat:s,internalFormatHalfFloat:o,internalFormatPackedHalfFloat:r,internalFormatPackedFloat:i,textureFormatFloat:a,downloadTextureFormat:l,downloadUnpackNumChannels:c,defaultNumChannels:u,textureTypeHalfFloat:h,textureTypeFloat:d}}function nt(n,t){const e=t();return W().getBool("DEBUG")&&aP(n),e}function aP(n){const t=n.getError();if(t!==n.NO_ERROR)throw new Error("WebGL Error: "+hP(n,t))}const lP=596e-10,cP=65504;function uP(n){return!!(W().getBool("WEBGL_RENDER_FLOAT32_ENABLED")||n===0||lP<Math.abs(n)&&Math.abs(n)<cP)}function hP(n,t){switch(t){case n.NO_ERROR:return"NO_ERROR";case n.INVALID_ENUM:return"INVALID_ENUM";case n.INVALID_VALUE:return"INVALID_VALUE";case n.INVALID_OPERATION:return"INVALID_OPERATION";case n.INVALID_FRAMEBUFFER_OPERATION:return"INVALID_FRAMEBUFFER_OPERATION";case n.OUT_OF_MEMORY:return"OUT_OF_MEMORY";case n.CONTEXT_LOST_WEBGL:return"CONTEXT_LOST_WEBGL";default:return`Unknown error code ${t}`}}function ia(n,t){return es(n,()=>n.getExtension(t),'Extension "'+t+'" not supported on this browser.')}function dP(n,t){const e=es(n,()=>n.createShader(n.VERTEX_SHADER),"Unable to create vertex WebGLShader.");if(nt(n,()=>n.shaderSource(e,t)),nt(n,()=>n.compileShader(e)),n.getShaderParameter(e,n.COMPILE_STATUS)===!1)throw console.log(n.getShaderInfoLog(e)),new Error("Failed to compile vertex shader.");return e}function pP(n,t){const e=es(n,()=>n.createShader(n.FRAGMENT_SHADER),"Unable to create fragment WebGLShader.");if(nt(n,()=>n.shaderSource(e,t)),nt(n,()=>n.compileShader(e)),W().get("ENGINE_COMPILE_ONLY"))return e;if(n.getShaderParameter(e,n.COMPILE_STATUS)===!1)throw Iy(t,n.getShaderInfoLog(e)),new Error("Failed to compile fragment shader.");return e}const fP=/ERROR: [0-9]+:([0-9]+):/g;function Iy(n,t){const e=fP.exec(t);if(e==null){console.log(`Couldn't parse line number in error: ${t}`),console.log(n);return}const s=+e[1],o=n.split(`
`),r=o.length.toString().length+2,i=o.map((h,d)=>vo((d+1).toString(),r)+h);let a=0;for(let h=0;h<i.length;h++)a=Math.max(i[h].length,a);const l=i.slice(0,s-1),c=i.slice(s-1,s),u=i.slice(s);console.log(l.join(`
`)),console.log(t.split(`
`)[0]),console.log(`%c ${vo(c[0],a)}`,"border:1px solid red; background-color:#e3d2d2; color:#a61717"),console.log(u.join(`
`))}function mP(n){return es(n,()=>n.createProgram(),"Unable to create WebGLProgram.")}function gP(n,t){if(nt(n,()=>n.linkProgram(t)),!W().get("ENGINE_COMPILE_ONLY")&&n.getProgramParameter(t,n.LINK_STATUS)===!1)throw console.log(n.getProgramInfoLog(t)),new Error("Failed to link vertex and fragment shaders.")}function Xc(n,t){if(nt(n,()=>n.validateProgram(t)),n.getProgramParameter(t,n.VALIDATE_STATUS)===!1)throw console.log(n.getProgramInfoLog(t)),new Error("Shader program validation failed.")}function xP(n,t){const e=es(n,()=>n.createBuffer(),"Unable to create WebGLBuffer");return nt(n,()=>n.bindBuffer(n.ARRAY_BUFFER,e)),nt(n,()=>n.bufferData(n.ARRAY_BUFFER,t,n.STATIC_DRAW)),e}function bP(n,t){const e=es(n,()=>n.createBuffer(),"Unable to create WebGLBuffer");return nt(n,()=>n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e)),nt(n,()=>n.bufferData(n.ELEMENT_ARRAY_BUFFER,t,n.STATIC_DRAW)),e}function yP(n){return es(n,()=>n.createTexture(),"Unable to create WebGLTexture.")}function wP(n,t){const e=W().getNumber("WEBGL_MAX_TEXTURE_SIZE");if(n<=0||t<=0){const s=`[${n}x${t}]`;throw new Error("Requested texture size "+s+" is invalid.")}if(n>e||t>e){const s=`[${n}x${t}]`,o=`[${e}x${e}]`;throw new Error("Requested texture size "+s+" greater than WebGL maximum on this browser / GPU "+o+".")}}function CP(n){return es(n,()=>n.createFramebuffer(),"Unable to create WebGLFramebuffer.")}function nm(n,t,e,s,o,r,i){const a=n.getAttribLocation(t,e);return a===-1?!1:(nt(n,()=>n.bindBuffer(n.ARRAY_BUFFER,s)),nt(n,()=>n.vertexAttribPointer(a,o,n.FLOAT,!1,r,i)),nt(n,()=>n.enableVertexAttribArray(a)),!0)}function $P(n,t,e){NP(n,e),nt(n,()=>n.activeTexture(n.TEXTURE0+e)),nt(n,()=>n.bindTexture(n.TEXTURE_2D,t))}function IP(n,t,e){return es(n,()=>n.getUniformLocation(t,e),'uniform "'+e+'" not present in program.')}function vP(n,t,e){return n.getUniformLocation(t,e)}function kP(n,t,e,s){nt(n,()=>$P(n,t,s)),nt(n,()=>n.uniform1i(e,s))}function Yc(n,t,e){nt(n,()=>n.bindFramebuffer(n.FRAMEBUFFER,e)),nt(n,()=>n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,t,0))}function sm(n,t){nt(n,()=>n.bindFramebuffer(n.FRAMEBUFFER,t)),nt(n,()=>n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,null,0))}function aa(n){const t=n.checkFramebufferStatus(n.FRAMEBUFFER);if(t!==n.FRAMEBUFFER_COMPLETE)throw new Error("Error binding framebuffer: "+SP(n,t))}function SP(n,t){switch(t){case n.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_ATTACHMENT";case n.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT";case n.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:return"FRAMEBUFFER_INCOMPLETE_DIMENSIONS";case n.FRAMEBUFFER_UNSUPPORTED:return"FRAMEBUFFER_UNSUPPORTED";default:return`unknown error ${t}`}}function es(n,t,e){const s=nt(n,()=>t());if(s==null)throw new Error(e);return s}function NP(n,t){const e=n.MAX_COMBINED_TEXTURE_IMAGE_UNITS-1,s=t+n.TEXTURE0;if(s<n.TEXTURE0||s>e){const o=`[gl.TEXTURE0, gl.TEXTURE${e}]`;throw new Error(`textureUnit must be in ${o}.`)}}function Bo(n,t=2){return H(n.slice(0,n.length-t))}function Vo(n){if(n.length===0)throw Error("Cannot get rows and columns of an empty shape array.");return[n.length>1?n[n.length-2]:1,n[n.length-1]]}function la(n){let t=[1,1,1];return n.length===0||n.length===1&&n[0]===1||(t=[Bo(n),...Vo(n)]),t}function TP(n,t=!1){let e=W().getNumber("WEBGL_MAX_TEXTURE_SIZE"),s=W().getNumber("WEBGL_MAX_SIZE_FOR_NARROW_TEXTURE");s===1/0&&W().getBool("WEBGL_AUTO_SQUARIFY_NARROW_TEXTURE_SHAPE")&&(s=e/2),t&&(e=e*2,s=s*2,n=n.map((a,l)=>l>=n.length-2?Gu(n[l]):n[l]),n.length===1&&(n=[2,n[0]])),n.length!==2&&(n=Cs(n).newShape);let o=H(n),r=null;n.length<=1&&o<=e?r=[1,o]:n.length===2&&n[0]<=e&&n[1]<=e?r=n:n.length===3&&n[0]*n[1]<=e&&n[2]<=e?r=[n[0]*n[1],n[2]]:n.length===3&&n[0]<=e&&n[1]*n[2]<=e?r=[n[0],n[1]*n[2]]:n.length===4&&n[0]*n[1]*n[2]<=e&&n[3]<=e?r=[n[0]*n[1]*n[2],n[3]]:n.length===4&&n[0]<=e&&n[1]*n[2]*n[3]<=e&&(r=[n[0],n[1]*n[2]*n[3]]);const i=r!=null&&Math.max(...r)>s&&Math.min(...r)<=(t?2:1)&&Math.min(...r)>0;if(r==null||i)if(t){const a=Bo(n);let l=2,c=2;n.length&&([l,c]=Vo(n)),o=a*(l/2)*(c/2),r=ou(o).map(u=>u*2)}else r=ou(o);return r}function ca(n){return n%2===0}function Za(n,t){if(n=n.slice(-2),t=t.slice(-2),Et(n,t)||!n.length||!t.length||n[0]===0||n[1]===0||t[0]===0||t[1]===0)return!0;if(n.length!==t.length){const e=n[n.length-1],s=t[t.length-1];if(e===s||ca(e)&&ca(s)&&(n[0]===1||t[0]===1))return!0}return n[1]===t[1]&&ca(n[0])&&ca(t[0])}let Zc,Jc;function EP(n){if(Zc==null){const t=In(n);Zc=t.getParameter(t.MAX_TEXTURE_SIZE)}return Zc}function RP(n){if(Jc==null){const t=In(n);Jc=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS)}return Math.min(16,Jc)}function AP(n){if(n===0)return 0;let t;const e=In(n);return rn(e,"EXT_disjoint_timer_query_webgl2")&&n===2?t=2:rn(e,"EXT_disjoint_timer_query")?t=1:t=0,t}function rn(n,t){return n.getExtension(t)!=null}function om(n){try{if(In(n)!=null)return!0}catch(t){return console.log("Error when getting WebGL context: ",t),!1}return!1}function DP(n){if(n===0)return!1;const t=In(n);if(n===1){if(!rn(t,"OES_texture_float"))return!1}else if(!rn(t,"EXT_color_buffer_float"))return!1;return Mu(t)}function FP(n){if(n===0)return!1;const t=In(n);if(n===1){if(!rn(t,"OES_texture_float")||!rn(t,"WEBGL_color_buffer_float"))return!1}else{if(rn(t,"EXT_color_buffer_float"))return Mu(t);const s="EXT_color_buffer_half_float";if(rn(t,s)){const o=t.getExtension(s);return _P(t,o)}return!1}return Mu(t)}function Mu(n){const t=yp(n),e=n.createTexture();n.bindTexture(n.TEXTURE_2D,e),n.texImage2D(n.TEXTURE_2D,0,t.internalFormatFloat,1,1,0,t.textureFormatFloat,t.textureTypeFloat,null);const r=n.createFramebuffer();n.bindFramebuffer(n.FRAMEBUFFER,r),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e,0);const i=n.checkFramebufferStatus(n.FRAMEBUFFER)===n.FRAMEBUFFER_COMPLETE;return n.bindTexture(n.TEXTURE_2D,null),n.bindFramebuffer(n.FRAMEBUFFER,null),n.deleteTexture(e),n.deleteFramebuffer(r),i}function _P(n,t){const e=yp(n,t),s=n.createTexture();n.bindTexture(n.TEXTURE_2D,s),n.texImage2D(n.TEXTURE_2D,0,e.internalFormatHalfFloat,1,1,0,e.textureFormatFloat,e.textureTypeHalfFloat,null);const i=n.createFramebuffer();n.bindFramebuffer(n.FRAMEBUFFER,i),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,s,0);const a=n.checkFramebufferStatus(n.FRAMEBUFFER)===n.FRAMEBUFFER_COMPLETE;return n.bindTexture(n.TEXTURE_2D,null),n.bindFramebuffer(n.FRAMEBUFFER,null),n.deleteTexture(s),n.deleteFramebuffer(i),a}function OP(n){return n!==2?!1:In(n).fenceSync!=null}function ji(n,t){Array.isArray(n)||(n=[n]),n.forEach(e=>{e!=null&&v(e.dtype!=="complex64",()=>`${t} does not support complex64 tensors in the WebGL backend.`)})}const it=W();it.registerFlag("HAS_WEBGL",()=>it.getNumber("WEBGL_VERSION")>0);it.registerFlag("WEBGL_VERSION",()=>om(2)?2:om(1)?1:0);it.registerFlag("WEBGL_CHECK_NUMERICAL_PROBLEMS",()=>!1);it.registerFlag("WEBGL_BUFFER_SUPPORTED",()=>it.get("WEBGL_VERSION")===2);it.registerFlag("WEBGL_CPU_FORWARD",()=>!0);it.registerFlag("WEBGL_FORCE_F16_TEXTURES",()=>!1);it.registerFlag("WEBGL_PACK",()=>it.getBool("HAS_WEBGL"));it.registerFlag("WEBGL_PACK_NORMALIZATION",()=>it.getBool("WEBGL_PACK"));it.registerFlag("WEBGL_PACK_CLIP",()=>it.getBool("WEBGL_PACK"));it.registerFlag("WEBGL_PACK_DEPTHWISECONV",()=>it.getBool("WEBGL_PACK"));it.registerFlag("WEBGL_PACK_BINARY_OPERATIONS",()=>it.getBool("WEBGL_PACK"));it.registerFlag("WEBGL_PACK_UNARY_OPERATIONS",()=>it.getBool("WEBGL_PACK"));it.registerFlag("WEBGL_PACK_ARRAY_OPERATIONS",()=>it.getBool("WEBGL_PACK"));it.registerFlag("WEBGL_PACK_IMAGE_OPERATIONS",()=>it.getBool("WEBGL_PACK"));it.registerFlag("WEBGL_PACK_REDUCE",()=>it.getBool("WEBGL_PACK"));it.registerFlag("WEBGL_LAZILY_UNPACK",()=>it.getBool("WEBGL_PACK"));it.registerFlag("WEBGL_CONV_IM2COL",()=>it.getBool("WEBGL_PACK"));it.registerFlag("WEBGL_PACK_CONV2DTRANSPOSE",()=>it.getBool("WEBGL_PACK"));it.registerFlag("WEBGL_MAX_TEXTURE_SIZE",()=>EP(it.getNumber("WEBGL_VERSION")));it.registerFlag("WEBGL_MAX_TEXTURES_IN_SHADER",()=>RP(it.getNumber("WEBGL_VERSION")));it.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION",()=>{const n=it.getNumber("WEBGL_VERSION");return n===0?0:AP(n)});it.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE",()=>it.getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0&&!wg());it.registerFlag("WEBGL_RENDER_FLOAT32_CAPABLE",()=>DP(it.getNumber("WEBGL_VERSION")));it.registerFlag("WEBGL_RENDER_FLOAT32_ENABLED",()=>it.getBool("WEBGL_FORCE_F16_TEXTURES")?!1:it.getBool("WEBGL_RENDER_FLOAT32_CAPABLE"));it.registerFlag("WEBGL_DOWNLOAD_FLOAT_ENABLED",()=>FP(it.getNumber("WEBGL_VERSION")));it.registerFlag("WEBGL_FENCE_API_ENABLED",()=>OP(it.getNumber("WEBGL_VERSION")));it.registerFlag("WEBGL_SIZE_UPLOAD_UNIFORM",()=>it.getBool("WEBGL_RENDER_FLOAT32_ENABLED")?4:0);it.registerFlag("WEBGL_DELETE_TEXTURE_THRESHOLD",()=>-1,n=>{if(typeof n!="number")throw new Error(`WEBGL_DELETE_TEXTURE_THRESHOLD must be a number but got ${n}.`);if(n<0&&n!==-1)throw new Error(`WEBGL_DELETE_TEXTURE_THRESHOLD must be -1 (indicating never delete) or at least 0, but got ${n}.`)});it.registerFlag("WEBGL_FLUSH_THRESHOLD",()=>wg()?1:-1,n=>{if(typeof n!="number")throw new Error(`WEBGL_FLUSH_THRESHOLD must be a number but got ${n}.`);if(n<0&&n!==-1)throw new Error(`WEBGL_FLUSH_THRESHOLD must be -1 (indicating never manual flush) or at least 0, but got ${n}.`)});it.registerFlag("CPU_HANDOFF_SIZE_THRESHOLD",()=>128);it.registerFlag("WEBGL_USE_SHAPES_UNIFORMS",()=>!1);it.registerFlag("TOPK_LAST_DIM_CPU_HANDOFF_SIZE_THRESHOLD",()=>1e5);it.registerFlag("TOPK_K_CPU_HANDOFF_THRESHOLD",()=>128);it.registerFlag("WEBGL_EXP_CONV",()=>!1);it.registerFlag("SOFTWARE_WEBGL_ENABLED",()=>it.getBool("IS_TEST"));it.registerFlag("WEBGL_MAX_SIZE_FOR_NARROW_TEXTURE",()=>1/0);it.registerFlag("WEBGL_AUTO_SQUARIFY_NARROW_TEXTURE_SHAPE",()=>!1);it.registerFlag("WEBGL2_ISNAN_CUSTOM",()=>!1);it.registerFlag("ENGINE_COMPILE_ONLY",()=>!1);function De(){let n,t,e,s,o,r,i,a,l,c;return W().getNumber("WEBGL_VERSION")===2?(n="#version 300 es",t="in",e="out",s="in",o="texture",r="outputColor",i="out vec4 outputColor;",a=W().getBool("WEBGL2_ISNAN_CUSTOM")?`
      bool isnan_custom(float val) {
        uint floatToUint = floatBitsToUint(val);
        return (floatToUint & 0x7fffffffu) > 0x7f800000u;
      }

      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan_custom(val.x),
          isnan_custom(val.y), isnan_custom(val.z), isnan_custom(val.w));
      }

      #define isnan(value) isnan_custom(value)
    `:"",l="",c=`
      #define round(value) newRound(value)
      int newRound(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 newRound(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `):(n="",t="attribute",e="varying",s="varying",o="texture2D",r="gl_FragColor",i="",a=`
      #define isnan(value) isnan_custom(value)
      bool isnan_custom(float val) {
        return (val > 0. || val < 1. || val == 0.) ? false : true;
      }
      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan(val.x), isnan(val.y), isnan(val.z), isnan(val.w));
      }
    `,l=`
      uniform float INFINITY;

      bool isinf(float val) {
        return abs(val) == INFINITY;
      }
      bvec4 isinf(vec4 val) {
        return equal(abs(val), vec4(INFINITY));
      }
    `,c=`
      int round(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 round(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `),{version:n,attribute:t,varyingVs:e,varyingFs:s,texture2D:o,output:r,defineOutput:i,defineSpecialNaN:a,defineSpecialInf:l,defineRound:c}}function po(n,t,e="index"){const s=lt(t);return s.map((o,r)=>{const i=`int ${n[r]} = ${e} / ${o}`,a=r===s.length-1?`int ${n[r+1]} = ${e} - ${n[r]} * ${o}`:`index -= ${n[r]} * ${o}`;return`${i}; ${a};`}).join("")}function Sc(n,t,e="index"){const s=lt(t);return s.map((o,r)=>{const i=`int ${n[r]} = ${e} / outShapeStrides[${r}]`,a=r===s.length-1?`int ${n[r+1]} = ${e} - ${n[r]} * outShapeStrides[${r}]`:`index -= ${n[r]} * outShapeStrides[${r}]`;return`${i}; ${a};`}).join("")}function MP(n,t){const e=n.length,s=n.map(r=>`${t}[${r}]`),o=new Array(e-1);o[e-2]=s[e-1];for(let r=e-3;r>=0;--r)o[r]=`(${o[r+1]} * ${s[r+1]})`;return o}function LP(n,t,e="index"){const s=n.map((r,i)=>i),o=MP(s,t);return o.map((r,i)=>{const a=`int ${n[i]} = ${e} / ${o[i]}`,l=i===o.length-1?`int ${n[i+1]} = ${e} - ${n[i]} * ${o[i]}`:`index -= ${n[i]} * ${o[i]}`;return`${a}; ${l};`}).join("")}function wp(n){const t=lt(n).map(e=>e.toString());return`
  int getFlatIndex(ivec3 coords) {
    return coords.x * ${t[0]} + coords.y * ${t[1]} + coords.z;
  }
`}function Cp(){return`
  int getFlatIndex(ivec3 coords) {
    return coords.x * outShapeStrides[0] + coords.y * outShapeStrides[1] + coords.z;
  }
`}const vy=`
  const float FLOAT_MAX = 1.70141184e38;
  const float FLOAT_MIN = 1.17549435e-38;

  lowp vec4 encode_float(highp float v) {
    if (isnan(v)) {
      return vec4(255, 255, 255, 255);
    }

    highp float av = abs(v);

    if(av < FLOAT_MIN) {
      return vec4(0.0, 0.0, 0.0, 0.0);
    } else if(v > FLOAT_MAX) {
      return vec4(0.0, 0.0, 128.0, 127.0) / 255.0;
    } else if(v < -FLOAT_MAX) {
      return vec4(0.0, 0.0,  128.0, 255.0) / 255.0;
    }

    highp vec4 c = vec4(0,0,0,0);

    highp float e = floor(log2(av));
    highp float m = exp2(fract(log2(av))) - 1.0;

    c[2] = floor(128.0 * m);
    m -= c[2] / 128.0;
    c[1] = floor(32768.0 * m);
    m -= c[1] / 32768.0;
    c[0] = floor(8388608.0 * m);

    highp float ebias = e + 127.0;
    c[3] = floor(ebias / 2.0);
    ebias -= c[3] * 2.0;
    c[2] += floor(ebias) * 128.0;

    c[3] += 128.0 * step(0.0, -v);

    return c / 255.0;
  }
`;const{getBroadcastDims:ky}=vN;function PP(n,t,e){const s=[];if(n.forEach(p=>{const f=H(p.shapeInfo.logicalShape);if(p.shapeInfo.isUniform?s.push(`uniform float ${p.name}${f>1?`[${f}]`:""};`):(s.push(`uniform sampler2D ${p.name};`),s.push(`uniform int offset${p.name};`)),e.enableShapeUniforms){const{uniformShape:m}=$p(e.packedInputs,p.shapeInfo.logicalShape,p.shapeInfo.texShape);switch(m.length){case 1:s.push(`uniform int ${p.name}Shape;`);break;case 2:s.push(`uniform ivec2 ${p.name}Shape;`);break;case 3:s.push(`uniform ivec3 ${p.name}Shape;`);break;case 4:s.push(`uniform ivec4 ${p.name}Shape;`);break}s.push(`uniform ivec2 ${p.name}TexShape;`)}}),e.enableShapeUniforms){switch(t.logicalShape.length){case 1:s.push("uniform int outShape;");break;case 2:s.push("uniform ivec2 outShape;"),s.push("uniform int outShapeStrides;");break;case 3:s.push("uniform ivec3 outShape;"),s.push("uniform ivec2 outShapeStrides;");break;case 4:s.push("uniform ivec4 outShape;"),s.push("uniform ivec3 outShapeStrides;");break}s.push("uniform ivec2 outTexShape;")}e.customUniforms&&e.customUniforms.forEach(p=>{s.push(`uniform ${p.type} ${p.name}${p.arrayIndex?`[${p.arrayIndex}]`:""};`)});const o=s.join(`
`),r=n.map(p=>zP(p,t,e.packedInputs,e.enableShapeUniforms)).join(`
`),i=t.texShape,a=De(),l=WP(a);let c,u,h=HP(a);return t.isPacked?(c=BP(t.logicalShape,i,e.enableShapeUniforms),u=GP(a)):(c=VP(t.logicalShape,i,e.enableShapeUniforms),u=UP(a)),e.packedInputs&&(h+=XP),[h,l,u,o,c,r,e.userCode].join(`
`)}function Zo(n,t=!1){const e=n.shapeInfo.logicalShape;switch(e.length){case 0:return a3(n,t);case 1:return c3(n,t);case 2:return h3(n,t);case 3:return p3(n,t);case 4:return m3(n,t);case 5:return g3(n);case 6:return x3(n);default:throw new Error(`${e.length}-D input sampling is not yet supported`)}}function Sy(n,t){switch(n.shapeInfo.logicalShape.length){case 0:return i3(n);case 1:return l3(n,t);case 2:return u3(n,t);case 3:return d3(n,t);default:return f3(n,t)}}function zP(n,t,e=!1,s){let o="";e?o+=Sy(n,s):o+=Zo(n,s);const r=n.shapeInfo.logicalShape,i=t.logicalShape;return r.length<=i.length&&(e?o+=b3(n,t):o+=y3(n,t)),o}function BP(n,t,e){switch(n.length){case 0:return Ny();case 1:return YP(n,t,e);case 2:return o3(n,t,e);case 3:return JP(n,t,e);default:return t3(n,t,e)}}function VP(n,t,e){switch(n.length){case 0:return Ny();case 1:return ZP(n,t,e);case 2:return r3(n,t,e);case 3:return QP(n,t,e);case 4:return e3(n,t,e);case 5:return n3(n,t);case 6:return s3(n,t);default:throw new Error(`${n.length}-D output sampling is not yet supported`)}}function WP(n){return`
    float sampleTexture(sampler2D textureSampler, vec2 uv) {
      return ${n.texture2D}(textureSampler, uv).r;
    }
  `}function UP(n){return`
    void setOutput(float val) {
      ${n.output} = vec4(val, 0, 0, 0);
    }
  `}function GP(n){return`
    void setOutput(vec4 val) {
      ${n.output} = val;
    }
  `}function HP(n){return`${n.version}
    precision highp float;
    precision highp int;
    precision highp sampler2D;
    ${n.varyingFs} vec2 resultUV;
    ${n.defineOutput}
    const vec2 halfCR = vec2(0.5, 0.5);

    struct ivec5
    {
      int x;
      int y;
      int z;
      int w;
      int u;
    };

    struct ivec6
    {
      int x;
      int y;
      int z;
      int w;
      int u;
      int v;
    };

    uniform float NAN;
    ${n.defineSpecialNaN}
    ${n.defineSpecialInf}
    ${n.defineRound}

    int imod(int x, int y) {
      return x - y * (x / y);
    }

    int idiv(int a, int b, float sign) {
      int res = a / b;
      int mod = imod(a, b);
      if (sign < 0. && mod != 0) {
        res -= 1;
      }
      return res;
    }

    //Based on the work of Dave Hoskins
    //https://www.shadertoy.com/view/4djSRW
    #define HASHSCALE1 443.8975
    float random(float seed){
      vec2 p = resultUV * seed;
      vec3 p3  = fract(vec3(p.xyx) * HASHSCALE1);
      p3 += dot(p3, p3.yzx + 19.19);
      return fract((p3.x + p3.y) * p3.z);
    }

    ${jP}
    ${qP}
    ${KP}
  `}const jP=`
vec2 uvFromFlat(int texNumR, int texNumC, int index) {
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
vec2 packedUVfrom1D(int texNumR, int texNumC, int index) {
  int texelIndex = index / 2;
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,qP=`
vec2 packedUVfrom2D(int texelsInLogicalRow, int texNumR,
  int texNumC, int row, int col) {
  int texelIndex = (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,KP=`
vec2 packedUVfrom3D(int texNumR, int texNumC,
    int texelsInBatch, int texelsInLogicalRow, int b,
    int row, int col) {
  int index = b * texelsInBatch + (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,XP=`
  float getChannel(vec4 frag, vec2 innerDims) {
    vec2 modCoord = mod(innerDims, 2.);
    return modCoord.x == 0. ?
      (modCoord.y == 0. ? frag.r : frag.g) :
      (modCoord.y == 0. ? frag.b : frag.a);
  }
  float getChannel(vec4 frag, int dim) {
    float modCoord = mod(float(dim), 2.);
    return modCoord == 0. ? frag.r : frag.g;
  }
`;function Ny(){return`
    int getOutputCoords() {
      return 0;
    }
  `}function YP(n,t,e){const s=[Math.ceil(t[0]/2),Math.ceil(t[1]/2)];return s[0]===1?e?`
      int getOutputCoords() {
        return 2 * int(resultUV.x * ceil(float(outTexShape[1]) / 2.0));
      }
    `:`
      int getOutputCoords() {
        return 2 * int(resultUV.x * ${s[1]}.0);
      }
    `:s[1]===1?e?`
      int getOutputCoords() {
        return 2 * int(resultUV.y * ceil(float(outTexShape[0]) / 2.0));
      }
    `:`
      int getOutputCoords() {
        return 2 * int(resultUV.y * ${s[0]}.0);
      }
    `:e?`
    int getOutputCoords() {
      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(packedTexShape[0], packedTexShape[1]));
      return 2 * (resTexRC.x * packedTexShape[1] + resTexRC.y);
    }
  `:`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${s[0]}, ${s[1]}));
      return 2 * (resTexRC.x * ${s[1]} + resTexRC.y);
    }
  `}function ZP(n,t,e){return t[0]===1?e?`
      int getOutputCoords() {
        return int(resultUV.x * float(outTexShape[1]));
      }
    `:`
      int getOutputCoords() {
        return int(resultUV.x * ${t[1]}.0);
      }
    `:t[1]===1?e?`
      int getOutputCoords() {
        return int(resultUV.y * float(outTexShape[0]));
      }
    `:`
      int getOutputCoords() {
        return int(resultUV.y * ${t[0]}.0);
      }
    `:e?`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(outTexShape[0], outTexShape[1]));
      return resTexRC.x * outTexShape[1] + resTexRC.y;
    }
  `:`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${t[0]}, ${t[1]}));
      return resTexRC.x * ${t[1]} + resTexRC.y;
    }
  `}function JP(n,t,e){if(e)return`
    ivec3 getOutputCoords() {
      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
      int texelsInLogicalRow = int(ceil(float(outShape[2]) / 2.0));
      int texelsInBatch = texelsInLogicalRow * int(ceil(float(outShape[1]) / 2.0));
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(packedTexShape[0], packedTexShape[1]));
      int index = resTexRC.x * packedTexShape[1] + resTexRC.y;

      int b = index / texelsInBatch;
      index -= b * texelsInBatch;

      int r = 2 * (index / texelsInLogicalRow);
      int c = imod(index, texelsInLogicalRow) * 2;

      return ivec3(b, r, c);
    }
  `;const s=[Math.ceil(t[0]/2),Math.ceil(t[1]/2)],o=Math.ceil(n[2]/2),r=o*Math.ceil(n[1]/2);return`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${s[0]}, ${s[1]}));
      int index = resTexRC.x * ${s[1]} + resTexRC.y;

      int b = index / ${r};
      index -= b * ${r};

      int r = 2 * (index / ${o});
      int c = imod(index, ${o}) * 2;

      return ivec3(b, r, c);
    }
  `}function QP(n,t,e){if(e)return`
  ivec3 getOutputCoords() {
    ivec2 resTexRC = ivec2(resultUV.yx *
                           vec2(outTexShape[0], outTexShape[1]));
    int index = resTexRC.x * outTexShape[1] + resTexRC.y;
    ${Sc(["r","c","d"],n)}
    return ivec3(r, c, d);
  }
`;const s=po(["r","c","d"],n);return`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${t[0]}, ${t[1]}));
      int index = resTexRC.x * ${t[1]} + resTexRC.y;
      ${s}
      return ivec3(r, c, d);
    }
  `}function t3(n,t,e){if(e)return`
    ivec4 getOutputCoords() {
      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(packedTexShape[0], packedTexShape[1]));
      int index = resTexRC.x * packedTexShape[1] + resTexRC.y;

      int texelsInLogicalRow = int(ceil(float(outShape[3]) / 2.0));
      int texelsInBatch = texelsInLogicalRow * int(ceil(float(outShape[2]) / 2.0));
      int texelsInBatchN = texelsInBatch * outShape[1];

      int b2 = index / texelsInBatchN;
      index -= b2 * texelsInBatchN;

      int b = index / texelsInBatch;
      index -= b * texelsInBatch;

      int r = 2 * (index / texelsInLogicalRow);
      int c = imod(index, texelsInLogicalRow) * 2;

      return ivec4(b2, b, r, c);
    }
  `;const s=[Math.ceil(t[0]/2),Math.ceil(t[1]/2)],o=Math.ceil(n[n.length-1]/2),r=o*Math.ceil(n[n.length-2]/2);let i=r,a="",l="b, r, c";for(let c=2;c<n.length-1;c++)i*=n[n.length-c-1],a=`
      int b${c} = index / ${i};
      index -= b${c} * ${i};
    `+a,l=`b${c}, `+l;return`
    ivec${n.length} getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${s[0]}, ${s[1]}));
      int index = resTexRC.x * ${s[1]} + resTexRC.y;

      ${a}

      int b = index / ${r};
      index -= b * ${r};

      int r = 2 * (index / ${o});
      int c = imod(index, ${o}) * 2;

      return ivec${n.length}(${l});
    }
  `}function e3(n,t,e){if(e)return`
    ivec4 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(outTexShape[0], outTexShape[1]));
      int index = resTexRC.x * outTexShape[1] + resTexRC.y;
      ${Sc(["r","c","d","d2"],n)}
      return ivec4(r, c, d, d2);
    }
  `;const s=po(["r","c","d","d2"],n);return`
    ivec4 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(${t[0]}, ${t[1]}));
      int index = resTexRC.x * ${t[1]} + resTexRC.y;
      ${s}
      return ivec4(r, c, d, d2);
    }
  `}function n3(n,t){const e=po(["r","c","d","d2","d3"],n);return`
    ivec5 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx * vec2(${t[0]},
                             ${t[1]}));

      int index = resTexRC.x * ${t[1]} + resTexRC.y;

      ${e}

      ivec5 outShape = ivec5(r, c, d, d2, d3);
      return outShape;
    }
  `}function s3(n,t){const e=po(["r","c","d","d2","d3","d4"],n);return`
    ivec6 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(${t[0]}, ${t[1]}));
      int index = resTexRC.x * ${t[1]} + resTexRC.y;

      ${e}

      ivec6 result = ivec6(r, c, d, d2, d3, d4);
      return result;
    }
  `}function o3(n,t,e){const s=[Math.ceil(t[0]/2),Math.ceil(t[1]/2)];if(Et(n,t))return e?`
      ivec2 getOutputCoords() {
        ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
        return 2 * ivec2(resultUV.yx * vec2(packedTexShape[0], packedTexShape[1]));
      }
    `:`
      ivec2 getOutputCoords() {
        return 2 * ivec2(resultUV.yx * vec2(${s[0]}, ${s[1]}));
      }
    `;const o=Math.ceil(n[1]/2);return e?`
    ivec2 getOutputCoords() {
      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
      int texelsInLogicalRow = int(ceil(float(outShape[1]) / 2.0));
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(packedTexShape[0], packedTexShape[1]));

      int index = resTexRC.x * packedTexShape[1] + resTexRC.y;
      int r = 2 * (index / texelsInLogicalRow);
      int c = imod(index, texelsInLogicalRow) * 2;

      return ivec2(r, c);
    }
  `:`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${s[0]}, ${s[1]}));

      int index = resTexRC.x * ${s[1]} + resTexRC.y;
      int r = 2 * (index / ${o});
      int c = imod(index, ${o}) * 2;

      return ivec2(r, c);
    }
  `}function r3(n,t,e){return Et(n,t)?e?`
      ivec2 getOutputCoords() {
        return ivec2(resultUV.yx * vec2(outTexShape[0], outTexShape[1]));
      }
    `:`
      ivec2 getOutputCoords() {
        return ivec2(resultUV.yx * vec2(${t[0]}, ${t[1]}));
      }
    `:n[1]===1?e?`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(outTexShape[0], outTexShape[1]));
        int index = resTexRC.x * outTexShape[1] + resTexRC.y;
        return ivec2(index, 0);
      }
    `:`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(${t[0]}, ${t[1]}));
        int index = resTexRC.x * ${t[1]} + resTexRC.y;
        return ivec2(index, 0);
      }
    `:n[0]===1?e?`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(outTexShape[0], outTexShape[1]));
        int index = resTexRC.x * outTexShape[1] + resTexRC.y;
        return ivec2(0, index);
      }
    `:`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(${t[0]}, ${t[1]}));
        int index = resTexRC.x * ${t[1]} + resTexRC.y;
        return ivec2(0, index);
      }
    `:e?`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(outTexShape[0], outTexShape[1]));
      int index = resTexRC.x * outTexShape[1] + resTexRC.y;
      int r = index / outShape[1];
      int c = index - r * outShape[1];
      return ivec2(r, c);
    }
  `:`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${t[0]}, ${t[1]}));
      int index = resTexRC.x * ${t[1]} + resTexRC.y;
      int r = index / ${n[1]};
      int c = index - r * ${n[1]};
      return ivec2(r, c);
    }
  `}function fo(n){return`offset${n}`}function i3(n){const t=n.name,e="get"+t.charAt(0).toUpperCase()+t.slice(1),s=De();return`
    vec4 ${e}() {
      return ${s.texture2D}(${t}, halfCR);
    }
  `}function a3(n,t){const e=n.name,s="get"+e.charAt(0).toUpperCase()+e.slice(1);if(n.shapeInfo.isUniform)return`float ${s}() {return ${e};}`;const[o,r]=n.shapeInfo.texShape;if(o===1&&r===1)return`
      float ${s}() {
        return sampleTexture(${e}, halfCR);
      }
    `;const i=fo(e);if(t)return`
    float ${s}() {
      vec2 uv = uvFromFlat(${e}TexShape[0], ${e}TexShape[1], ${i});
      return sampleTexture(${e}, uv);
    }
  `;const[a,l]=n.shapeInfo.texShape;return`
    float ${s}() {
      vec2 uv = uvFromFlat(${a}, ${l}, ${i});
      return sampleTexture(${e}, uv);
    }
  `}function l3(n,t){const e=n.name,s="get"+e.charAt(0).toUpperCase()+e.slice(1),o=n.shapeInfo.texShape,r=De();if(t)return`
    vec4 ${s}(int index) {
      ivec2 packedTexShape = ivec2(ceil(float(${e}TexShape[0]) / 2.0), ceil(float(${e}TexShape[1]) / 2.0));
      vec2 uv = packedUVfrom1D(
        packedTexShape[0], packedTexShape[1], index);
      return ${r.texture2D}(${e}, uv);
    }
  `;const i=[Math.ceil(o[0]/2),Math.ceil(o[1]/2)];return`
    vec4 ${s}(int index) {
      vec2 uv = packedUVfrom1D(
        ${i[0]}, ${i[1]}, index);
      return ${r.texture2D}(${e}, uv);
    }
  `}function c3(n,t){const e=n.name,s="get"+e.charAt(0).toUpperCase()+e.slice(1);if(n.shapeInfo.isUniform)return`
      float ${s}(int index) {
        ${Jo(n)}
      }
    `;const o=n.shapeInfo.texShape,r=o[0],i=o[1];if(i===1&&r===1)return`
      float ${s}(int index) {
        return sampleTexture(${e}, halfCR);
      }
    `;const a=fo(e);return i===1?t?`
      float ${s}(int index) {
        vec2 uv = vec2(0.5, (float(index + ${a}) + 0.5) / float(${e}TexShape[0]));
        return sampleTexture(${e}, uv);
      }
    `:`
      float ${s}(int index) {
        vec2 uv = vec2(0.5, (float(index + ${a}) + 0.5) / ${r}.0);
        return sampleTexture(${e}, uv);
      }
    `:r===1?t?`
      float ${s}(int index) {
        vec2 uv = vec2((float(index + ${a}) + 0.5) / float(${e}TexShape[1]), 0.5);
        return sampleTexture(${e}, uv);
      }
    `:`
      float ${s}(int index) {
        vec2 uv = vec2((float(index + ${a}) + 0.5) / ${i}.0, 0.5);
        return sampleTexture(${e}, uv);
      }
    `:t?`
    float ${s}(int index) {
      vec2 uv = uvFromFlat(${e}TexShape[0], ${e}TexShape[1], index + ${a});
      return sampleTexture(${e}, uv);
    }
  `:`
    float ${s}(int index) {
      vec2 uv = uvFromFlat(${r}, ${i}, index + ${a});
      return sampleTexture(${e}, uv);
    }
  `}function u3(n,t){const e=n.shapeInfo.logicalShape,s=n.name,o="get"+s.charAt(0).toUpperCase()+s.slice(1),r=n.shapeInfo.texShape,i=r[0],a=r[1],l=De();if(r!=null&&Et(e,r))return t?`
      vec4 ${o}(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(${s}TexShape[1], ${s}TexShape[0]);

        return ${l.texture2D}(${s}, uv);
      }
    `:`
      vec4 ${o}(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(${a}.0, ${i}.0);

        return ${l.texture2D}(${s}, uv);
      }
    `;if(t)return`
    vec4 ${o}(int row, int col) {
      ivec2 packedTexShape = ivec2(ceil(float(${s}TexShape[0]) / 2.0), ceil(float(${s}TexShape[1]) / 2.0));
      int valuesPerRow = int(ceil(float(${s}Shape[1]) / 2.0));
      vec2 uv = packedUVfrom2D(valuesPerRow, packedTexShape[0], packedTexShape[1], row, col);
      return ${l.texture2D}(${s}, uv);
    }
  `;const c=[Math.ceil(r[0]/2),Math.ceil(r[1]/2)],u=Math.ceil(e[1]/2);return`
    vec4 ${o}(int row, int col) {
      vec2 uv = packedUVfrom2D(${u}, ${c[0]}, ${c[1]}, row, col);
      return ${l.texture2D}(${s}, uv);
    }
  `}function h3(n,t){const e=n.shapeInfo.logicalShape,s=n.name,o="get"+s.charAt(0).toUpperCase()+s.slice(1),r=n.shapeInfo.texShape;if(r!=null&&Et(e,r)){if(t)return`
      float ${o}(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(${s}TexShape[1], ${s}TexShape[0]);
        return sampleTexture(${s}, uv);
      }
    `;const d=r[0],p=r[1];return`
    float ${o}(int row, int col) {
      vec2 uv = (vec2(col, row) + halfCR) / vec2(${p}.0, ${d}.0);
      return sampleTexture(${s}, uv);
    }
  `}const{newShape:i,keptDims:a}=Cs(e),l=i;if(l.length<e.length){const d=Qo(n,l),p=["row","col"];return`
      ${Zo(d,t)}
      float ${o}(int row, int col) {
        return ${o}(${tr(p,a)});
      }
    `}if(n.shapeInfo.isUniform)return`
      float ${o}(int row, int col) {
        int index = round(dot(vec2(row, col), vec2(${e[1]}, 1)));
        ${Jo(n)}
      }
    `;const c=r[0],u=r[1],h=fo(s);return u===1?t?`
      float ${o}(int row, int col) {
        float index = dot(vec3(row, col, ${h}), vec3(${s}Shape[1], 1, 1));
        vec2 uv = vec2(0.5, (index + 0.5) / float(${s}TexShape[0]));
        return sampleTexture(${s}, uv);
      }
    `:`
    float ${o}(int row, int col) {
      float index = dot(vec3(row, col, ${h}), vec3(${e[1]}, 1, 1));
      vec2 uv = vec2(0.5, (index + 0.5) / ${c}.0);
      return sampleTexture(${s}, uv);
    }
  `:c===1?t?`
      float ${o}(int row, int col) {
        float index = dot(vec3(row, col, ${h}), vec3(${s}Shape[1], 1, 1));
        vec2 uv = vec2((index + 0.5) / float(${s}TexShape[1]), 0.5);
        return sampleTexture(${s}, uv);
      }
    `:`
    float ${o}(int row, int col) {
      float index = dot(vec3(row, col, ${h}), vec3(${e[1]}, 1, 1));
      vec2 uv = vec2((index + 0.5) / ${u}.0, 0.5);
      return sampleTexture(${s}, uv);
    }
  `:t?`
      float ${o}(int row, int col) {
        // Explicitly use integer operations as dot() only works on floats.
        int index = row * ${s}Shape[1] + col + ${h};
        vec2 uv = uvFromFlat(${s}TexShape[0], ${s}TexShape[1], index);
        return sampleTexture(${s}, uv);
      }
    `:`
  float ${o}(int row, int col) {
    // Explicitly use integer operations as dot() only works on floats.
    int index = row * ${e[1]} + col + ${h};
    vec2 uv = uvFromFlat(${c}, ${u}, index);
    return sampleTexture(${s}, uv);
  }
`}function d3(n,t){const e=n.shapeInfo.logicalShape,s=n.name,o="get"+s.charAt(0).toUpperCase()+s.slice(1),r=n.shapeInfo.texShape,i=[Math.ceil(r[0]/2),Math.ceil(r[1]/2)];if(e[0]===1){const d=e.slice(1),p=[1,2],f=Qo(n,d),m=["b","row","col"];return`
        ${Sy(f,t)}
        vec4 ${o}(int b, int row, int col) {
          return ${o}(${tr(m,p)});
        }
      `}const a=De();if(t)return`
    vec4 ${o}(int b, int row, int col) {
      ivec2 packedTexShape = ivec2(ceil(float(${s}TexShape[0]) / 2.0), ceil(float(${s}TexShape[1]) / 2.0));
      int valuesPerRow = int(ceil(float(${s}Shape[2]) / 2.0));
      int texelsInBatch = valuesPerRow * int(ceil(float(${s}Shape[1]) / 2.0));
      vec2 uv = packedUVfrom3D(
        packedTexShape[0], packedTexShape[1], texelsInBatch, valuesPerRow, b, row, col);
      return ${a.texture2D}(${s}, uv);
    }
  `;const l=i[0],c=i[1],u=Math.ceil(e[2]/2),h=u*Math.ceil(e[1]/2);return`
    vec4 ${o}(int b, int row, int col) {
      vec2 uv = packedUVfrom3D(
        ${l}, ${c}, ${h}, ${u}, b, row, col);
      return ${a.texture2D}(${s}, uv);
    }
  `}function p3(n,t){const e=n.shapeInfo.logicalShape,s=n.name,o="get"+s.charAt(0).toUpperCase()+s.slice(1),r=e[1]*e[2],i=e[2],{newShape:a,keptDims:l}=Cs(e),c=a;if(c.length<e.length){const m=Qo(n,c),g=["row","col","depth"];return`
        ${Zo(m,t)}
        float ${o}(int row, int col, int depth) {
          return ${o}(${tr(g,l)});
        }
      `}if(n.shapeInfo.isUniform)return`
      float ${o}(int row, int col, int depth) {
        int index = round(dot(vec3(row, col, depth),
                          vec3(${r}, ${i}, 1)));
        ${Jo(n)}
      }
    `;const u=n.shapeInfo.texShape,h=u[0],d=u[1],p=n.shapeInfo.flatOffset;if(d===r&&p==null)return t?`
      float ${o}(int row, int col, int depth) {
        int stride1 = ${s}Shape[2];
        float texR = float(row);
        float texC = dot(vec2(col, depth), vec2(stride1, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${s}TexShape[1], ${s}TexShape[0]);
        return sampleTexture(${s}, uv);
      }
    `:`
        float ${o}(int row, int col, int depth) {
          float texR = float(row);
          float texC = dot(vec2(col, depth), vec2(${i}, 1));
          vec2 uv = (vec2(texC, texR) + halfCR) /
                     vec2(${d}.0, ${h}.0);
          return sampleTexture(${s}, uv);
        }
      `;if(d===i&&p==null)return t?`
      float ${o}(int row, int col, int depth) {
        float texR = dot(vec2(row, col), vec2(${s}Shape[1], 1));
        float texC = float(depth);
        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${s}TexShape[1], ${s}TexShape[0]);
        return sampleTexture(${s}, uv);
      }
    `:`
    float ${o}(int row, int col, int depth) {
      float texR = dot(vec2(row, col), vec2(${e[1]}, 1));
      float texC = float(depth);
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${d}.0, ${h}.0);
      return sampleTexture(${s}, uv);
    }
  `;const f=fo(s);return t?`
    float ${o}(int row, int col, int depth) {
      // Explicitly use integer operations as dot() only works on floats.
      int stride0 = ${s}Shape[1] * ${s}Shape[2];
      int stride1 = ${s}Shape[2];
      int index = row * stride0 + col * stride1 + depth + ${f};
      vec2 uv = uvFromFlat(${s}TexShape[0], ${s}TexShape[1], index);
      return sampleTexture(${s}, uv);
    }
    `:`
      float ${o}(int row, int col, int depth) {
        // Explicitly use integer operations as dot() only works on floats.
        int index = row * ${r} + col * ${i} + depth + ${f};
        vec2 uv = uvFromFlat(${h}, ${d}, index);
        return sampleTexture(${s}, uv);
      }
  `}function f3(n,t){const e=n.name,s="get"+e.charAt(0).toUpperCase()+e.slice(1),o=De();if(t)return`
    vec4 ${s}(int b2, int b, int row, int col) {
      int valuesPerRow = int(ceil(float(${e}Shape[3]) / 2.0));
      int texelsInBatch = valuesPerRow * int(ceil(float(${e}Shape[2]) / 2.0));
      int index = b * texelsInBatch + (row / 2) * valuesPerRow + (col / 2);
      texelsInBatch *= ${e}Shape[1];
      index = b2 * texelsInBatch + index;
      ivec2 packedTexShape = ivec2(ceil(float(${e}TexShape[0]) / 2.0), ceil(float(${e}TexShape[1]) / 2.0));
      int texR = index / packedTexShape[1];
      int texC = index - texR * packedTexShape[1];
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(packedTexShape[1], packedTexShape[0]); return ${o.texture2D}(${e}, uv);
    }
  `;const r=n.shapeInfo.logicalShape,i=r.length,a=n.shapeInfo.texShape,l=[Math.ceil(a[0]/2),Math.ceil(a[1]/2)],c=l[0],u=l[1],h=Math.ceil(r[i-1]/2);let d=h*Math.ceil(r[i-2]/2),p="int b, int row, int col",f=`b * ${d} + (row / 2) * ${h} + (col / 2)`;for(let m=2;m<i-1;m++)p=`int b${m}, `+p,d*=r[i-m-1],f=`b${m} * ${d} + `+f;return`
    vec4 ${s}(${p}) {
      int index = ${f};
      int texR = index / ${u};
      int texC = index - texR * ${u};
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${u}, ${c});
      return ${o.texture2D}(${e}, uv);
    }
  `}function m3(n,t){const e=n.shapeInfo.logicalShape,s=n.name,o="get"+s.charAt(0).toUpperCase()+s.slice(1),r=e[3],i=e[2]*r,a=e[1]*i,{newShape:l,keptDims:c}=Cs(e);if(l.length<e.length){const b=Qo(n,l),w=["row","col","depth","depth2"];return`
      ${Zo(b,t)}
      float ${o}(int row, int col, int depth, int depth2) {
        return ${o}(${tr(w,c)});
      }
    `}if(n.shapeInfo.isUniform)return`
      float ${o}(int row, int col, int depth, int depth2) {
        int index = round(dot(vec4(row, col, depth, depth2),
                          vec4(${a}, ${i}, ${r}, 1)));
        ${Jo(n)}
      }
    `;const u=n.shapeInfo.flatOffset,h=n.shapeInfo.texShape,d=h[0],p=h[1],f=`int stride2 = ${s}Shape[3];`,m=`int stride1 = ${s}Shape[2] * stride2;`,g=`int stride0 = ${s}Shape[1] * stride1;`;if(p===a&&u==null)return t?`
      float ${o}(int row, int col, int depth, int depth2) {
        ${f}
        ${m}
        float texR = float(row);
        float texC =
            dot(vec3(col, depth, depth2),
                vec3(stride1, stride2, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${s}TexShape[1], ${s}TexShape[0]);
        return sampleTexture(${s}, uv);
      }
    `:`
      float ${o}(int row, int col, int depth, int depth2) {
        float texR = float(row);
        float texC =
            dot(vec3(col, depth, depth2),
                vec3(${i}, ${r}, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${p}.0, ${d}.0);
        return sampleTexture(${s}, uv);
      }
    `;if(p===r&&u==null)return t?`
      float ${o}(int row, int col, int depth, int depth2) {
        float texR = dot(vec3(row, col, depth),
                         vec3(${s}Shape[1] * ${s}Shape[2], ${s}Shape[2], 1));
        float texC = float(depth2);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${s}TexShape[1], ${s}TexShape[0]);
        return sampleTexture(${s}, uv);
      }
    `:`
      float ${o}(int row, int col, int depth, int depth2) {
        float texR = dot(vec3(row, col, depth),
                         vec3(${e[1]*e[2]}, ${e[2]}, 1));
        float texC = float(depth2);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${p}.0, ${d}.0);
        return sampleTexture(${s}, uv);
      }
    `;const x=fo(s);return t?`
    float ${o}(int row, int col, int depth, int depth2) {
      // Explicitly use integer operations as dot() only works on floats.
      ${f}
      ${m}
      ${g}
      int index = row * stride0 + col * stride1 +
          depth * stride2 + depth2;
      vec2 uv = uvFromFlat(${s}TexShape[0], ${s}TexShape[1], index + ${x});
      return sampleTexture(${s}, uv);
    }
  `:`
    float ${o}(int row, int col, int depth, int depth2) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * ${a} + col * ${i} +
          depth * ${r} + depth2;
      vec2 uv = uvFromFlat(${d}, ${p}, index + ${x});
      return sampleTexture(${s}, uv);
    }
  `}function g3(n){const t=n.shapeInfo.logicalShape,e=n.name,s="get"+e.charAt(0).toUpperCase()+e.slice(1),o=t[4],r=t[3]*o,i=t[2]*r,a=t[1]*i,{newShape:l,keptDims:c}=Cs(t);if(l.length<t.length){const m=Qo(n,l),g=["row","col","depth","depth2","depth3"];return`
      ${Zo(m)}
      float ${s}(int row, int col, int depth, int depth2, int depth3) {
        return ${s}(${tr(g,c)});
      }
    `}if(n.shapeInfo.isUniform)return`
      float ${s}(int row, int col, int depth, int depth2, int depth3) {
        float index = dot(
          vec4(row, col, depth, depth2),
          vec4(${a}, ${i}, ${r}, ${o})) +
          depth3;
        ${Jo(n)}
      }
    `;const u=n.shapeInfo.flatOffset,h=n.shapeInfo.texShape,d=h[0],p=h[1];if(p===a&&u==null)return`
      float ${s}(int row, int col, int depth, int depth2, int depth3) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
                         vec4(${i}, ${r}, ${o}, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${p}.0, ${d}.0);
        return sampleTexture(${e}, uv);
      }
    `;if(p===o&&u==null)return`
      float ${s}(int row, int col, int depth, int depth2, int depth3) {
        float texR = dot(
          vec4(row, col, depth, depth2),
          vec4(${t[1]*t[2]*t[3]},
               ${t[2]*t[3]}, ${t[3]}, 1));
        int texC = depth3;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${p}.0, ${d}.0);
        return sampleTexture(${e}, uv);
      }
    `;const f=fo(e);return`
    float ${s}(int row, int col, int depth, int depth2, int depth3) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * ${a} + col * ${i} + depth * ${r} +
          depth2 * ${o} + depth3 + ${f};
      vec2 uv = uvFromFlat(${d}, ${p}, index);
      return sampleTexture(${e}, uv);
    }
  `}function x3(n){const t=n.shapeInfo.logicalShape,e=n.name,s="get"+e.charAt(0).toUpperCase()+e.slice(1),{newShape:o,keptDims:r}=Cs(t);if(o.length<t.length){const g=Qo(n,o),x=["row","col","depth","depth2","depth3","depth4"];return`
      ${Zo(g)}
      float ${s}(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        return ${s}(${tr(x,r)});
      }
    `}const i=t[5],a=t[4]*i,l=t[3]*a,c=t[2]*l,u=t[1]*c;if(n.shapeInfo.isUniform)return`
      float ${s}(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
        int index = round(dot(
          vec4(row, col, depth, depth2),
          vec4(${u}, ${c}, ${l}, ${a})) +
          dot(
            vec2(depth3, depth4),
            vec2(${i}, 1)));
        ${Jo(n)}
      }
    `;const h=n.shapeInfo.flatOffset,d=n.shapeInfo.texShape,p=d[0],f=d[1];if(f===u&&h==null)return`
      float ${s}(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
          vec4(${c}, ${l}, ${a}, ${i})) +
               float(depth4);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${f}.0, ${p}.0);
        return sampleTexture(${e}, uv);
      }
    `;if(f===i&&h==null)return`
      float ${s}(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        float texR = dot(vec4(row, col, depth, depth2),
          vec4(${t[1]*t[2]*t[3]*t[4]},
               ${t[2]*t[3]*t[4]},
               ${t[3]*t[4]},
               ${t[4]})) + float(depth3);
        int texC = depth4;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${f}.0, ${p}.0);
        return sampleTexture(${e}, uv);
      }
    `;const m=fo(e);return`
    float ${s}(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * ${u} + col * ${c} + depth * ${l} +
          depth2 * ${a} + depth3 * ${i} + depth4 + ${m};
      vec2 uv = uvFromFlat(${p}, ${f}, index);
      return sampleTexture(${e}, uv);
    }
  `}function Jo(n){const t=n.name,e=H(n.shapeInfo.logicalShape);return e<2?`return ${t};`:`
    for (int i = 0; i < ${e}; i++) {
      if (i == index) {
        return ${t}[i];
      }
    }
  `}function b3(n,t){const e=n.name,s=e.charAt(0).toUpperCase()+e.slice(1),o="get"+s+"AtOutCoords",r=n.shapeInfo.logicalShape.length,i=t.logicalShape.length,a=ky(n.shapeInfo.logicalShape,t.logicalShape),l=_t(i),c=i-r;let u;const h=["x","y","z","w","u","v"];r===0?u="":i<2&&a.length>=1?u="coords = 0;":u=a.map(b=>`coords.${h[b+c]} = 0;`).join(`
`);let d="";i<2&&r>0?d="coords":d=n.shapeInfo.logicalShape.map((b,w)=>`coords.${h[w+c]}`).join(", ");let p="return outputValue;";const m=H(n.shapeInfo.logicalShape)===1,x=H(t.logicalShape)===1;if(r===1&&!m&&!x)p=`
      return vec4(outputValue.xy, outputValue.xy);
    `;else if(m&&!x)i===1?p=`
        return vec4(outputValue.x, outputValue.x, 0., 0.);
      `:p=`
        return vec4(outputValue.x);
      `;else if(a.length){const b=r-2,w=r-1;a.indexOf(b)>-1&&a.indexOf(w)>-1?p="return vec4(outputValue.x);":a.indexOf(b)>-1?p="return vec4(outputValue.x, outputValue.y, outputValue.x, outputValue.y);":a.indexOf(w)>-1&&(p="return vec4(outputValue.xx, outputValue.zz);")}return`
    vec4 ${o}() {
      ${l} coords = getOutputCoords();
      ${u}
      vec4 outputValue = get${s}(${d});
      ${p}
    }
  `}function y3(n,t){const e=n.name,s=e.charAt(0).toUpperCase()+e.slice(1),o="get"+s+"AtOutCoords",r=t.texShape,i=n.shapeInfo.texShape,a=n.shapeInfo.logicalShape.length,l=t.logicalShape.length;if(!n.shapeInfo.isUniform&&a===l&&n.shapeInfo.flatOffset==null&&Et(i,r))return`
      float ${o}() {
        return sampleTexture(${e}, resultUV);
      }
    `;const c=_t(l),u=ky(n.shapeInfo.logicalShape,t.logicalShape),h=l-a;let d;const p=["x","y","z","w","u","v"];a===0?d="":l<2&&u.length>=1?d="coords = 0;":d=u.map(m=>`coords.${p[m+h]} = 0;`).join(`
`);let f="";return l<2&&a>0?f="coords":f=n.shapeInfo.logicalShape.map((m,g)=>`coords.${p[g+h]}`).join(", "),`
    float ${o}() {
      ${c} coords = getOutputCoords();
      ${d}
      return get${s}(${f});
    }
  `}function _t(n){if(n<=1)return"int";if(n===2)return"ivec2";if(n===3)return"ivec3";if(n===4)return"ivec4";if(n===5)return"ivec5";if(n===6)return"ivec6";throw Error(`GPU for rank ${n} is not yet supported`)}function $p(n,t,e){const{newShape:s,keptDims:o}=Cs(t),r=t.length,i=n&&r===3&&t[0]===1,a=i?t.slice(1):s,l=!n&&r>1&&!Et(t,e)&&s.length<r||i;return{useSqueezeShape:l,uniformShape:l?a:t,keptDims:o}}function Qo(n,t){const e=JSON.parse(JSON.stringify(n));return e.shapeInfo.logicalShape=t,e}function tr(n,t){return t.map(e=>n[e]).join(", ")}function w3(n,t,e,s){const o=e.map((u,h)=>{const d={logicalShape:u.shape,texShape:u.isUniform?null:u.texData.texShape,isUniform:u.isUniform,isPacked:u.isUniform?!1:u.texData.isPacked,flatOffset:null};return u.texData!=null&&u.texData.slice!=null&&u.texData.slice.flatOffset>0&&(d.flatOffset=u.texData.slice.flatOffset),{name:t.variableNames[h],shapeInfo:d}}),r=o.map(u=>u.shapeInfo),i={logicalShape:s.shape,texShape:s.texData.texShape,isUniform:!1,isPacked:s.texData.isPacked,flatOffset:null},a=PP(o,i,t),l=pP(n.gl,a),c=n.createProgram(l);return W().get("ENGINE_COMPILE_ONLY")?{program:t,fragmentShader:l,source:a,webGLProgram:c,inShapeInfos:r,outShapeInfo:i,variablesLocations:null,customUniformLocations:null,infLoc:null,nanLoc:null,outShapeLocation:null,outShapeStridesLocation:null,outTexShapeLocation:null}:(n.buildVao(c),Object.assign({program:t,fragmentShader:l,source:a,webGLProgram:c,inShapeInfos:r,outShapeInfo:i},Ty(n,t,c)))}function Ty(n,t,e){const s=[],o=[];let r,i,a,l=null,c=null;c=n.getUniformLocation(e,"NAN",!1),W().getNumber("WEBGL_VERSION")===1&&(l=n.getUniformLocation(e,"INFINITY",!1));const u=!1;for(const h of t.variableNames){const d={name:h,uniform:n.getUniformLocation(e,h,u),offset:n.getUniformLocation(e,`offset${h}`,u)};t.enableShapeUniforms&&(d.shape=n.getUniformLocation(e,`${h}Shape`,u),d.texShape=n.getUniformLocation(e,`${h}TexShape`,u)),s.push(d)}if(t.enableShapeUniforms&&(r=n.getUniformLocation(e,"outShape",u),a=n.getUniformLocation(e,"outShapeStrides",u),i=n.getUniformLocation(e,"outTexShape",u)),t.customUniforms)for(const h of t.customUniforms)o.push(n.getUniformLocation(e,h.name,u));return{variablesLocations:s,customUniformLocations:o,infLoc:l,nanLoc:c,outShapeLocation:r,outShapeStridesLocation:a,outTexShapeLocation:i}}function rm(n,t){if(n.length!==t.length)throw Error(`Binary was compiled with ${n.length} inputs, but was executed with ${t.length} inputs`);n.forEach((e,s)=>{const o=e.logicalShape,r=t[s],i=r.shape;if(!Et(o,i))throw Error(`Binary was compiled with different shapes than the current args. Shapes ${o} and ${i} must match`);if(e.isUniform&&r.isUniform)return;const a=e.texShape,l=r.isUniform?null:r.texData.texShape;if(!Et(a,l))throw Error(`Binary was compiled with different texture shapes than the current args. Shape ${a} and ${l} must match`)})}function C3(n,t,e,s,o){t.program.enableShapeUniforms||(rm(t.inShapeInfos,e),rm([t.outShapeInfo],[s]));const r=s.texData.texture,i=s.texData.texShape;s.texData.isPacked?n.setOutputPackedMatrixTexture(r.texture,i[0],i[1]):n.setOutputMatrixTexture(r.texture,i[0],i[1]),n.setProgram(t.webGLProgram),n.bindVertexArray(t.webGLProgram.vao),W().getNumber("WEBGL_VERSION")===1&&t.infLoc!==null&&n.gl.uniform1f(t.infLoc,1/0),t.nanLoc!==null&&n.gl.uniform1f(t.nanLoc,NaN);for(let l=0;l<e.length;++l){const c=e[l],{uniform:u,offset:h,shape:d,texShape:p}=t.variablesLocations[l];if(d){const{uniformShape:f}=$p(t.program.packedInputs,c.shape,c.texData.texShape);switch(f.length){case 1:n.gl.uniform1iv(d,new Int32Array(f));break;case 2:n.gl.uniform2iv(d,new Int32Array(f));break;case 3:n.gl.uniform3iv(d,new Int32Array(f));break;case 4:n.gl.uniform4iv(d,new Int32Array(f));break}}if(p&&n.gl.uniform2i(p,c.texData.texShape[0],c.texData.texShape[1]),u!=null){if(c.isUniform){if(H(c.shape)<2)n.gl.uniform1f(u,c.uniformValues[0]);else{let f=c.uniformValues;f instanceof Float32Array||(f=new Float32Array(f)),n.gl.uniform1fv(u,f)}continue}c.texData.slice!=null&&h!=null&&n.gl.uniform1i(h,c.texData.slice.flatOffset),n.setInputMatrixTexture(c.texData.texture.texture,u,l)}}const a=t.outShapeLocation;if(a)switch(s.shape.length){case 1:n.gl.uniform1iv(a,new Int32Array(s.shape));break;case 2:n.gl.uniform2iv(a,new Int32Array(s.shape));break;case 3:n.gl.uniform3iv(a,new Int32Array(s.shape));break;case 4:n.gl.uniform4iv(a,new Int32Array(s.shape));break}if(t.outShapeStridesLocation){const l=lt(s.shape);switch(s.shape.length){case 2:n.gl.uniform1iv(t.outShapeStridesLocation,new Int32Array(l));break;case 3:n.gl.uniform2iv(t.outShapeStridesLocation,new Int32Array(l));break;case 4:n.gl.uniform3iv(t.outShapeStridesLocation,new Int32Array(l));break}}if(t.outTexShapeLocation&&n.gl.uniform2i(t.outTexShapeLocation,s.texData.texShape[0],s.texData.texShape[1]),t.program.customUniforms&&o)for(let l=0;l<t.program.customUniforms.length;++l){const c=t.program.customUniforms[l],u=t.customUniformLocations[l],h=o[l];if(c.type==="float")n.gl.uniform1fv(u,h);else if(c.type==="vec2")n.gl.uniform2fv(u,h);else if(c.type==="vec3")n.gl.uniform3fv(u,h);else if(c.type==="vec4")n.gl.uniform4fv(u,h);else if(c.type==="int")n.gl.uniform1iv(u,h);else if(c.type==="ivec2")n.gl.uniform2iv(u,h);else if(c.type==="ivec3")n.gl.uniform3iv(u,h);else if(c.type==="ivec4")n.gl.uniform4iv(u,h);else throw Error(`uniform type ${c.type} is not supported yet.`)}n.executeProgram()}function $3(n,t,e){let s="";t.concat(e).forEach(i=>{const a=i.texData!=null&&i.texData.slice!=null&&i.texData.slice.flatOffset>0;if(n.enableShapeUniforms&&!i.isUniform){const l=i.texData.texShape,{useSqueezeShape:c,uniformShape:u,keptDims:h}=$p(n.packedInputs,i.shape,l);let d="",p="",f="";if(u.length===1&&n.packedInputs){const C=[Math.ceil(l[0]/2),Math.ceil(l[1]/2)];d=`${C[0]>1}_${C[1]>1}`}else if(u.length===2&&!n.packedInputs)p=`${u[0]>1}_${u[1]>1}`;else if(u.length>2&&!n.packedInputs){const C=lt(u);f=`${C[0]===l[1]}_${C[C.length-1]===l[1]}`}const m=i.shape.length,g=u.length===2&&Et(i.shape,l),x=H(i.shape)===1,b=_o(i.shape,e.shape),w=!n.packedInputs&&m===e.shape.length&&Et(l,e.texData.texShape),y=n.packedInputs||u.length>2?"":`${l[0]>1}_${l[1]>1}`;s+=`${m}_${w}_${c?h:""}_${u.length}_${x}_${b}_${g}_${d}_${p}_${f}_${y}_${a}`}else{const l=i.isUniform?"uniform":i.texData.texShape;s+=`${i.shape}_${l}_${a}`}});const o=n.userCode;let r=n.constructor.name;return r+="_"+s+"_"+o+`${W().getNumber("WEBGL_VERSION")}`,r}function Se(n){return W().getBool("WEBGL_USE_SHAPES_UNIFORMS")&&n<=4}class I3{constructor(t){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outPackingScheme=Tr.DENSE,this.customUniforms=[{name:"texShape",type:"ivec2"}];const e=De();this.outputShape=t,this.enableShapeUniforms=Se(this.outputShape.length),this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        ${this.enableShapeUniforms?Sc(["r","c","d"],t):po(["r","c","d"],t)}
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx * vec2(texShape[0], texShape[1]));
        int index = 4 * (resTexRC.x * texShape[1] + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getA(rc.x, rc.y, rc.z);
        }

        ${e.output} = result;
      }
    `}}class v3{constructor(t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outPackingScheme=Tr.DENSE,this.customUniforms=[{name:"texShape",type:"ivec2"}];const e=De();this.outputShape=t,this.enableShapeUniforms=Se(this.outputShape.length),this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        ${this.enableShapeUniforms?Sc(["r","c","d"],t):po(["r","c","d"],t)}
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx * vec2(texShape[0], texShape[1]));
        int index = 4 * (resTexRC.x * texShape[1] + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getChannel(getA(rc.x, rc.y, rc.z), vec2(rc.y, rc.z));
        }

        ${e.output} = result;
      }
    `}}class k3{constructor(t){this.variableNames=["A"],this.outTexUsage=Ke.DOWNLOAD;const e=De();this.outputShape=t,this.userCode=`
      ${vy}

      void main() {
        float x = getAAtOutCoords();
        ${e.output} = encode_float(x);
      }
    `}}class S3{constructor(t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outTexUsage=Ke.DOWNLOAD;const e=De();this.outputShape=t,this.userCode=`
      ${vy}

      void main() {
        ivec3 coords = getOutputCoords();
        float x = getChannel(getAAtOutCoords(), vec2(coords.y, coords.z));
        ${e.output} = encode_float(x);
      }
    `}}const N3={R:0,G:1,B:2,A:3};class im{constructor(t,e=!1,s="RGBA"){this.variableNames=["A"],this.customUniforms=[{name:"texShape",type:"ivec2"}];const o=De();this.outputShape=t,this.enableShapeUniforms=Se(this.outputShape.length);let r="result";e&&(r="floor(result * 255. + 0.5)");let i="";for(let a=0;a<s.length;a++){const l=s[a];i+=`
          if(offset == ${a}) {
            result = values[${N3[l]}];
          }`}this.userCode=`
      ${this.enableShapeUniforms?Cp():wp(t)}

      void main() {
        ivec3 coords = getOutputCoords();
        int flatIndex = getFlatIndex(coords);
        float result = 0.;
        int offset = imod(flatIndex, ${s.length});

        flatIndex = idiv(flatIndex, ${s.length}, 1.);

        int r = flatIndex / texShape[1];
        if (r < texShape[0]) {
          int c = imod(flatIndex, texShape[1]);
          vec2 uv = (vec2(c, r) + halfCR) / vec2(texShape[1], texShape[0]);
          vec4 values = ${o.texture2D}(A, uv);
          ${i}
        }
        ${o.output} = vec4(${r}, 0., 0., 0.);
      }
    `}}class T3{constructor(t,e=!1){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.customUniforms=[{name:"texShape",type:"ivec2"}];const s=De();this.outputShape=t,this.enableShapeUniforms=Se(this.outputShape.length);let o="",r="result";e&&(r="floor(result * 255. + 0.5)");for(let i=0;i<=1;i++)for(let a=0;a<=1;a++){const l=i*2+a;o+=`
          localCoords = coords;
          if(localCoords[2] + ${a} < ${this.enableShapeUniforms?"outShape[2]":`${t[2]}`}) {
          localCoords[2] += ${a};
          if (localCoords[1] + ${i} < ${this.enableShapeUniforms?"outShape[1]":`${t[1]}`}) {
            localCoords[1] += ${i};

            flatIndex = getFlatIndex(localCoords);
            offset = imod(flatIndex, 4);

            flatIndex = idiv(flatIndex, 4, 1.);

            int r = flatIndex / texShape[1];
            int c = imod(flatIndex, texShape[1]);
            vec2 uv = (vec2(c, r) + halfCR) / vec2(texShape[1], texShape[0]);
            values = ${s.texture2D}(A, uv);

            if (offset == 0) {
              result[${l}] = values[0];
            } else if (offset == 1) {
              result[${l}] = values[1];
            } else if (offset == 2) {
              result[${l}] = values[2];
            } else {
              result[${l}] = values[3];
            }
          }
        }
        `}this.userCode=`
        ${this.enableShapeUniforms?Cp():wp(t)}

        void main() {
          ivec3 coords = getOutputCoords();

          vec4 result = vec4(0.);
          int flatIndex, r, c, offset;
          ivec3 localCoords;
          vec2 uv;
          vec4 values;

          ${o}

          ${s.output} = ${r};
        }
    `}}function E3(n){const t=De(),e=`${t.version}
    precision highp float;
    ${t.attribute} vec3 clipSpacePos;
    ${t.attribute} vec2 uv;
    ${t.varyingVs} vec2 resultUV;

    void main() {
      gl_Position = vec4(clipSpacePos, 1);
      resultUV = uv;
    }`;return dP(n,e)}function R3(n){const t=new Float32Array([-1,1,0,0,1,-1,-1,0,0,0,1,1,0,1,1,1,-1,0,1,0]);return xP(n,t)}function A3(n){const t=new Uint16Array([0,1,2,2,1,3]);return bP(n,t)}function qi(n,t,e,s,o,r){wP(t,e);const i=yP(n),a=n.TEXTURE_2D;return nt(n,()=>n.bindTexture(a,i)),nt(n,()=>n.texParameteri(a,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE)),nt(n,()=>n.texParameteri(a,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)),nt(n,()=>n.texParameteri(a,n.TEXTURE_MIN_FILTER,n.NEAREST)),nt(n,()=>n.texParameteri(a,n.TEXTURE_MAG_FILTER,n.NEAREST)),W().getNumber("WEBGL_VERSION")===1?nt(n,()=>n.texImage2D(a,0,s,t,e,0,o,r,null)):nt(n,()=>n.texStorage2D(a,1,s,t,e)),nt(n,()=>n.bindTexture(n.TEXTURE_2D,null)),{texture:i,texShape:[e,t]}}function Ey(n){return n.internalFormatFloat}function D3(n,t,e,s){const[o,r]=Hi(t,e);return qi(n,o,r,Ey(s),s.textureFormatFloat,n.FLOAT)}function Ry(n){return n.internalFormatHalfFloat}function F3(n,t,e,s){const[o,r]=Hi(t,e);return qi(n,o,r,Ry(s),s.textureFormatFloat,s.textureTypeHalfFloat)}function Ay(n){return n.downloadTextureFormat}function _3(n,t,e,s){const[o,r]=Hi(t,e);return qi(n,o,r,Ay(s),n.RGBA,n.UNSIGNED_BYTE)}function Dy(n){return n.internalFormatPackedFloat}function O3(n,t,e,s){const[o,r]=Yo(t,e);return qi(n,o,r,Dy(s),n.RGBA,n.FLOAT)}function Fy(n){return n.internalFormatPackedHalfFloat}function M3(n,t,e,s){const[o,r]=Yo(t,e);return qi(n,o,r,Fy(s),n.RGBA,s.textureTypeHalfFloat)}function L3(n,t,e){return nt(n,()=>n.bindBuffer(n.ARRAY_BUFFER,e)),nm(n,t,"clipSpacePos",e,3,20,0)&&nm(n,t,"uv",e,2,20,12)}function P3(n,t,e,s,o,r){nt(n,()=>n.bindTexture(n.TEXTURE_2D,t));let i,a,l;o instanceof Uint8Array?(i=new Uint8Array(e*s*4),a=n.UNSIGNED_BYTE,l=n.RGBA):(i=new Float32Array(e*s*4),a=n.FLOAT,l=r.internalFormatPackedFloat),i.set(o),W().getNumber("WEBGL_VERSION")===2?nt(n,()=>n.texSubImage2D(n.TEXTURE_2D,0,0,0,e,s,n.RGBA,a,i)):nt(n,()=>n.texImage2D(n.TEXTURE_2D,0,l,e,s,0,n.RGBA,a,i)),nt(n,()=>n.bindTexture(n.TEXTURE_2D,null))}function z3(n,t,e){nt(n,()=>n.bindTexture(n.TEXTURE_2D,t)),e.data instanceof Uint8Array?W().getNumber("WEBGL_VERSION")===2?nt(n,()=>n.texSubImage2D(n.TEXTURE_2D,0,0,0,e.width,e.height,n.RGBA,n.UNSIGNED_BYTE,e.data)):nt(n,()=>n.texImage2D(n.TEXTURE_2D,0,n.RGBA,e.width,e.height,0,n.RGBA,n.UNSIGNED_BYTE,e.data)):W().getNumber("WEBGL_VERSION")===2?nt(n,()=>n.texSubImage2D(n.TEXTURE_2D,0,0,0,n.RGBA,n.UNSIGNED_BYTE,e)):nt(n,()=>n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,e)),nt(n,()=>n.bindTexture(n.TEXTURE_2D,null))}function B3(n,t,e,s){const o=n.createBuffer();nt(n,()=>n.bindBuffer(n.PIXEL_PACK_BUFFER,o));const a=4*4*t*e;return nt(n,()=>n.bufferData(n.PIXEL_PACK_BUFFER,a,n.STREAM_READ)),nt(n,()=>n.readPixels(0,0,e,t,n.RGBA,n.FLOAT,0)),nt(n,()=>n.bindBuffer(n.PIXEL_PACK_BUFFER,null)),o}function V3(n,t,e){const s=n,o=new Float32Array(e);return s.bindBuffer(s.PIXEL_PACK_BUFFER,t),s.getBufferSubData(s.PIXEL_PACK_BUFFER,0,o),s.bindBuffer(s.PIXEL_PACK_BUFFER,null),o}function W3(n,t,e,s){const[o,r]=Hi(t,e),i=4,a=new Uint8Array(rP(t*e,i));return nt(n,()=>n.readPixels(0,0,o,r,s.downloadTextureFormat,n.UNSIGNED_BYTE,a)),new Float32Array(a.buffer)}function U3(n,t,e,s,o,r,i,a){const l=n,c=new Float32Array(iP(r,i));return l.bindBuffer(l.PIXEL_PACK_BUFFER,t),l.getBufferSubData(l.PIXEL_PACK_BUFFER,0,c),l.bindBuffer(l.PIXEL_PACK_BUFFER,null),c}function G3(n,t,e){const s=new Float32Array(t*e*4);return nt(n,()=>n.readPixels(0,0,e,t,n.RGBA,n.FLOAT,s)),s}class Qc{constructor(t){this.outputTexture=null,this.program=null,this.disposed=!1,this.itemsToPoll=[];const e=W().getNumber("WEBGL_VERSION");if(t!=null?(this.gl=t,nP(e,t)):this.gl=In(e),t=this.gl,W().getNumber("WEBGL_VERSION")===2){const r=t;this.createVertexArray=()=>nt(r,()=>r.createVertexArray()),this.bindVertexArray=i=>nt(r,()=>r.bindVertexArray(i)),this.deleteVertexArray=i=>nt(r,()=>r.deleteVertexArray(i)),this.getVertexArray=()=>nt(r,()=>r.getParameter(r.VERTEX_ARRAY_BINDING))}else if(t!=null){const r=t.getExtension("OES_vertex_array_object");if(r==null)throw new Error("All WebGL1 implementations are expected to offer OES_vertex_array_object.");this.createVertexArray=()=>nt(t,()=>r.createVertexArrayOES()),this.bindVertexArray=i=>nt(t,()=>r.bindVertexArrayOES(i)),this.deleteVertexArray=i=>nt(t,()=>r.deleteVertexArrayOES(i)),this.getVertexArray=()=>nt(t,()=>t.getParameter(r.VERTEX_ARRAY_BINDING_OES))}let s="WEBGL_color_buffer_float";const o="EXT_color_buffer_half_float";if(this.parallelCompilationExtension=this.gl.getExtension("KHR_parallel_shader_compile"),W().getNumber("WEBGL_VERSION")===1){const r="OES_texture_float",i="OES_texture_half_float";if(this.textureFloatExtension=ia(this.gl,r),rn(this.gl,i))this.textureHalfFloatExtension=ia(this.gl,i);else if(W().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support half float textures, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.");if(this.colorBufferFloatExtension=this.gl.getExtension(s),rn(this.gl,o))this.colorBufferHalfFloatExtension=ia(this.gl,o);else if(W().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support color renderable half floats, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.")}else if(s="EXT_color_buffer_float",rn(this.gl,s))this.colorBufferFloatExtension=this.gl.getExtension(s);else if(rn(this.gl,o))this.colorBufferHalfFloatExtension=this.gl.getExtension(o);else throw new Error("GL context does not support color renderable floats");this.vertexBuffer=R3(this.gl),this.indexBuffer=A3(this.gl),this.framebuffer=CP(this.gl),this.textureConfig=yp(this.gl,this.textureHalfFloatExtension)}get debug(){return W().getBool("DEBUG")}dispose(){if(this.disposed)return;this.program!=null&&console.warn("Disposing a GPGPUContext that still has a bound WebGLProgram. This is probably a resource leak, delete the program with GPGPUContext.deleteProgram before disposing."),this.outputTexture!=null&&console.warn("Disposing a GPGPUContext that still has a bound output matrix texture.  This is probably a resource leak, delete the output matrix texture with GPGPUContext.deleteMatrixTexture before disposing.");const t=this.gl;nt(t,()=>t.finish()),nt(t,()=>t.bindFramebuffer(t.FRAMEBUFFER,null)),nt(t,()=>t.deleteFramebuffer(this.framebuffer)),nt(t,()=>t.bindBuffer(t.ARRAY_BUFFER,null)),nt(t,()=>t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,null)),nt(t,()=>t.deleteBuffer(this.indexBuffer)),this.disposed=!0}createFloat32MatrixTexture(t,e){return this.throwIfDisposed(),D3(this.gl,t,e,this.textureConfig)}createFloat16MatrixTexture(t,e){return this.throwIfDisposed(),F3(this.gl,t,e,this.textureConfig)}createUnsignedBytesMatrixTexture(t,e){return this.throwIfDisposed(),_3(this.gl,t,e,this.textureConfig)}uploadPixelDataToTexture(t,e){this.throwIfDisposed(),z3(this.gl,t,e)}uploadDenseMatrixToTexture(t,e,s,o){this.throwIfDisposed(),P3(this.gl,t,e,s,o,this.textureConfig)}createFloat16PackedMatrixTexture(t,e){return this.throwIfDisposed(),M3(this.gl,t,e,this.textureConfig)}createPackedMatrixTexture(t,e){return this.throwIfDisposed(),O3(this.gl,t,e,this.textureConfig)}deleteMatrixTexture(t){this.throwIfDisposed(),this.outputTexture===t&&(sm(this.gl,this.framebuffer),this.outputTexture=null),nt(this.gl,()=>this.gl.deleteTexture(t))}downloadByteEncodedFloatMatrixFromOutputTexture(t,e,s){return this.downloadMatrixDriver(t,()=>W3(this.gl,e,s,this.textureConfig))}downloadPackedMatrixFromBuffer(t,e,s,o,r,i){return U3(this.gl,t,e,s,o,r,i,this.textureConfig)}downloadFloat32MatrixFromBuffer(t,e){return V3(this.gl,t,e)}createBufferFromTexture(t,e,s){this.bindTextureToFrameBuffer(t);const o=B3(this.gl,e,s,this.textureConfig);return this.unbindTextureToFrameBuffer(),o}createAndWaitForFence(){const t=this.createFence(this.gl);return this.pollFence(t)}createFence(t){let e,s;if(W().getBool("WEBGL_FENCE_API_ENABLED")){const o=t,r=o.fenceSync(o.SYNC_GPU_COMMANDS_COMPLETE,0);t.flush(),s=()=>{const i=o.clientWaitSync(r,0,0);return i===o.ALREADY_SIGNALED||i===o.CONDITION_SATISFIED},e=r}else W().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0?(e=this.beginQuery(),this.endQuery(),s=()=>this.isQueryAvailable(e,W().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))):s=()=>!0;return{query:e,isFencePassed:s}}downloadMatrixFromPackedTexture(t,e,s){return this.downloadMatrixDriver(t,()=>G3(this.gl,e,s))}createProgram(t){this.throwIfDisposed();const e=this.gl;this.vertexShader==null&&(this.vertexShader=E3(e));const s=mP(e);nt(e,()=>e.attachShader(s,this.vertexShader)),nt(e,()=>e.attachShader(s,t)),gP(e,s);const o=Object.assign(s,{vao:this.createVertexArray()});return this.debug&&Xc(e,o),o}buildVao(t){this.setProgram(t),this.bindVertexArray(t.vao);const e=this.gl;nt(e,()=>e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,this.indexBuffer)),L3(e,t,this.vertexBuffer)}deleteProgram(t){this.throwIfDisposed(),t===this.program&&(this.program=null),t!=null&&(nt(this.gl,()=>this.gl.deleteProgram(t)),this.deleteVertexArray(t.vao))}setProgram(t){this.throwIfDisposed(),this.program=t,this.program!=null&&this.debug&&Xc(this.gl,this.program),nt(this.gl,()=>this.gl.useProgram(t))}getUniformLocation(t,e,s=!0){return this.throwIfDisposed(),s?IP(this.gl,t,e):vP(this.gl,t,e)}getAttributeLocation(t,e){return this.throwIfDisposed(),nt(this.gl,()=>this.gl.getAttribLocation(t,e))}getUniformLocationNoThrow(t,e){return this.throwIfDisposed(),this.gl.getUniformLocation(t,e)}setInputMatrixTexture(t,e,s){this.throwIfDisposed(),this.throwIfNoProgram(),kP(this.gl,t,e,s)}setOutputMatrixTexture(t,e,s){this.setOutputMatrixTextureDriver(t,s,e)}setOutputPackedMatrixTexture(t,e,s){this.throwIfDisposed();const[o,r]=Yo(e,s);this.setOutputMatrixTextureDriver(t,o,r)}setOutputMatrixWriteRegion(t,e,s,o){this.setOutputMatrixWriteRegionDriver(s,t,o,e)}setOutputPackedMatrixWriteRegion(t,e,s,o){throw new Error("setOutputPackedMatrixWriteRegion not implemented.")}debugValidate(){this.program!=null&&Xc(this.gl,this.program),aa(this.gl)}executeProgram(){this.throwIfDisposed(),this.throwIfNoProgram();const t=this.gl;if(this.debug){const e=this.getVertexArray();console.assert(e===this.program.vao,"VAO changed between setProgram and executeProgram!"),this.debugValidate()}nt(t,()=>t.drawElements(t.TRIANGLES,6,t.UNSIGNED_SHORT,0))}blockUntilAllProgramsCompleted(){this.throwIfDisposed(),nt(this.gl,()=>this.gl.finish())}getQueryTimerExtension(){return this.disjointQueryTimerExtension==null&&(this.disjointQueryTimerExtension=ia(this.gl,W().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2?"EXT_disjoint_timer_query_webgl2":"EXT_disjoint_timer_query")),this.disjointQueryTimerExtension}getQueryTimerExtensionWebGL2(){return this.getQueryTimerExtension()}getQueryTimerExtensionWebGL1(){return this.getQueryTimerExtension()}beginQuery(){if(W().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2){const s=this.gl,o=this.getQueryTimerExtensionWebGL2(),r=s.createQuery();return s.beginQuery(o.TIME_ELAPSED_EXT,r),r}const t=this.getQueryTimerExtensionWebGL1(),e=t.createQueryEXT();return t.beginQueryEXT(t.TIME_ELAPSED_EXT,e),e}endQuery(){if(W().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2){const e=this.gl,s=this.getQueryTimerExtensionWebGL2();e.endQuery(s.TIME_ELAPSED_EXT);return}const t=this.getQueryTimerExtensionWebGL1();t.endQueryEXT(t.TIME_ELAPSED_EXT)}async waitForQueryAndGetTime(t){return await Pp(()=>this.disposed||this.isQueryAvailable(t,W().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))),this.getQueryTime(t,W().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))}getQueryTime(t,e){if(e===0)return null;if(e===2){const s=this.gl;return s.getQueryParameter(t,s.QUERY_RESULT)/1e6}else{const s=this.getQueryTimerExtensionWebGL1();return s.getQueryObjectEXT(t,s.QUERY_RESULT_EXT)/1e6}}isQueryAvailable(t,e){if(e===0)return!0;if(e===2){const s=this.gl,o=this.getQueryTimerExtensionWebGL2(),r=s.getQueryParameter(t,s.QUERY_RESULT_AVAILABLE);return this.disjoint==null&&(this.disjoint=this.gl.getParameter(o.GPU_DISJOINT_EXT)),r&&!this.disjoint}else{const s=this.getQueryTimerExtensionWebGL1(),o=s.getQueryObjectEXT(t,s.QUERY_RESULT_AVAILABLE_EXT);return this.disjoint==null&&(this.disjoint=this.gl.getParameter(s.GPU_DISJOINT_EXT)),o&&!this.disjoint}}pollFence(t){return new Promise(e=>{this.addItemToPoll(()=>t.isFencePassed(),()=>e())})}pollItems(){const t=H3(this.itemsToPoll.map(e=>e.isDoneFn));for(let e=0;e<=t;++e){const{resolveFn:s}=this.itemsToPoll[e];s()}this.itemsToPoll=this.itemsToPoll.slice(t+1)}addItemToPoll(t,e){if(this.itemsToPoll.push({isDoneFn:t,resolveFn:e}),this.itemsToPoll.length>1)return;let s;"setTimeoutCustom"in W().platform&&(s=W().platform.setTimeoutCustom.bind(W().platform)),Pp(()=>(this.pollItems(),this.itemsToPoll.length===0),()=>0,null,s)}bindTextureToFrameBuffer(t){this.throwIfDisposed(),Yc(this.gl,t,this.framebuffer),this.debug&&aa(this.gl)}unbindTextureToFrameBuffer(){this.outputTexture!=null?(Yc(this.gl,this.outputTexture,this.framebuffer),this.debug&&aa(this.gl)):sm(this.gl,this.framebuffer)}downloadMatrixDriver(t,e){this.bindTextureToFrameBuffer(t);const s=e();return this.unbindTextureToFrameBuffer(),s}setOutputMatrixTextureDriver(t,e,s){this.throwIfDisposed();const o=this.gl;Yc(o,t,this.framebuffer),this.debug&&aa(o),this.outputTexture=t,nt(o,()=>o.viewport(0,0,e,s)),nt(o,()=>o.scissor(0,0,e,s))}setOutputMatrixWriteRegionDriver(t,e,s,o){this.throwIfDisposed(),nt(this.gl,()=>this.gl.scissor(t,e,s,o))}throwIfDisposed(){if(this.disposed)throw new Error("Attempted to use disposed GPGPUContext.")}throwIfNoProgram(){if(this.program==null)throw new Error("No GPU program is currently set.")}}function H3(n){let t=0;for(;t<n.length&&n[t]();++t);return t-1}const{addImpl:j3,bincountImpl:_y,bincountReduceImpl:q3,bitwiseAndImpl:K3,castImpl:X3,ceilImpl:Y3,concatImpl:Z3,equalImpl:J3,expImpl:Q3,expm1Impl:tz,floorImpl:ez,gatherNdImpl:nz,gatherV2Impl:sz,greaterImpl:oz,greaterEqualImpl:rz,lessImpl:iz,lessEqualImpl:az,linSpaceImpl:lz,logImpl:cz,maxImpl:uz,maximumImpl:hz,minimumImpl:dz,multiplyImpl:pz,negImpl:fz,notEqualImpl:mz,prodImpl:gz,raggedGatherImpl:xz,raggedRangeImpl:bz,raggedTensorToTensorImpl:yz,rangeImpl:wz,rsqrtImpl:Cz,scatterImpl:$z,sigmoidImpl:Iz,simpleAbsImpl:Oy,sliceImpl:vz,sparseFillEmptyRowsImpl:kz,sparseReshapeImpl:Sz,sparseSegmentReductionImpl:My,sqrtImpl:Nz,staticRegexReplaceImpl:Tz,stridedSliceImpl:Ez,stringNGramsImpl:Rz,stringSplitImpl:Az,stringToHashBucketFastImpl:Dz,subImpl:Fz,tileImpl:_z,topKImpl:Oz,transposeImpl:Ip,uniqueImpl:Mz}=zD;function Ly(n,t){return["x","y","z","w","u","v"].slice(0,t).map(e=>`${n}.${e}`)}function Ee(n,t){return t===1?[n]:Ly(n,t)}function Lz(n,t){if(n===1)return"rc";let e="";for(let s=0;s<n;s++)e+=t[s],s<n-1&&(e+=",");return e}class Pz{constructor(t){if(this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outputShape=t,this.rank=t.length,this.enableShapeUniforms=Se(this.outputShape.length),this.rank===0)this.userCode=`
        void main() {
          setOutput(vec4(getA(), 0., 0., 0.));
        }
      `;else{const e=Ee("rc",this.rank),s=_t(this.rank),o=this.getOutOfBoundsCondition(e),r=this.getSetup(e),i=this.getOutput(e);this.userCode=`
        void main() {
          ${s} rc = getOutputCoords();

          if(${o}) {
            setOutput(vec4(0));
          } else {
            ${r}

            setOutput(vec4(${i}));
          }
        }
      `}}getSourceCoordsArr(t){const e=[];for(let s=0;s<=1;s++)for(let o=0;o<=1;o++){let r=`${s===0?"r":"rp1"}, ${o===0?"c":"cp1"}`;for(let i=2;i<this.rank;i++)r=`${t[t.length-1-i]},`+r;e.push(r)}return e}getOutOfBoundsCondition(t){if(this.rank===1)return`rc > ${this.enableShapeUniforms?"outShape":this.outputShape[0]}`;let e="";for(let s=this.rank-2;s<this.rank;s++)e+=`${t[s]} >= ${this.enableShapeUniforms?`outShape[${s}]`:this.outputShape[s]}`,s<this.rank-1&&(e+="||");return e}getSetup(t){if(this.rank===1)return"";const e=t.slice(-2),s=this.enableShapeUniforms?`outShape[${this.rank} - 1]`:this.outputShape[this.rank-1],o=this.enableShapeUniforms?`outShape[${this.rank} - 2]`:this.outputShape[this.rank-2];return`
      int r = ${e[0]};
      int c = ${e[1]};
      int rp1 = r + 1;
      int cp1 = c + 1;

      bool cEdge = cp1 >= ${s};
      bool rEdge = rp1 >= ${o};
    `}getOutput(t){const e=this.getSourceCoordsArr(t);return this.rank===1?`getA(rc), (rc + 1 >= ${this.enableShapeUniforms?"outShape":this.outputShape[0]} ? 0. : getA(rc + 1)), 0, 0`:`getA(${e[0]}),
            cEdge ? 0. : getA(${e[1]}),
            rEdge ? 0. : getA(${e[2]}),
            rEdge || cEdge ? 0. : getA(${e[3]})`}}class Py{constructor(t,e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"inputShape",type:"ivec3"}],this.outputShape=t,this.enableShapeUniforms=Se(this.outputShape.length);let s="";for(let o=0;o<4;o++){let r="thisRC = rc;";o%2===1&&(r+="thisRC.z += 1;"),o>1&&(r+="thisRC.y += 1;"),s+=`
        ${r}
        ${o>0?"if(thisRC.y < rows && thisRC.z < cols){":""}
          int flatIndex = getFlatIndex(thisRC);

          ivec3 inputRC = inputCoordsFromReshapedOutCoords(flatIndex);
          vec2 inputRCInnerDims = vec2(float(inputRC.y),float(inputRC.z));

          result[${o}] =
            getChannel(getA(inputRC.x, inputRC.y, inputRC.z), inputRCInnerDims);
        ${o>0?"}":""}
      `}this.userCode=`
      ${zz(e,this.enableShapeUniforms)}
      ${this.enableShapeUniforms?Cp():wp(t)}

      void main() {
        ivec3 rc = getOutputCoords();

        vec4 result = vec4(0.);

        ivec3 thisRC;
        int rows = ${this.enableShapeUniforms?"outShape[1]":t[1]};
        int cols = ${this.enableShapeUniforms?"outShape[2]":t[2]};

        ${s}

        setOutput(result);
      }
    `}}function zz(n,t){return`
    ivec3 inputCoordsFromReshapedOutCoords(int index) {
      ${t?LP(["r","c","d"],"inputShape"):po(["r","c","d"],n)}
      return ivec3(r, c, d);
    }
  `}class Bz{constructor(t){this.gpgpu=t,this.numUsedTextures=0,this.numFreeTextures=0,this._numBytesAllocated=0,this._numBytesFree=0,this.freeTextures={},this.usedTextures={},this.logEnabled=!1}acquireTexture(t,e,s){const o=lm(e,s),r=cm(t,o,s);r in this.freeTextures||(this.freeTextures[r]=[]),r in this.usedTextures||(this.usedTextures[r]=[]);const i=am(t,o,this.gpgpu.gl,this.gpgpu.textureConfig,s);if(this.freeTextures[r].length>0){this.numFreeTextures--,this.numUsedTextures++,this._numBytesFree-=i,this.log();const l=this.freeTextures[r].pop();return this.usedTextures[r].push(l),l}let a;return o===ge.PACKED_2X2_FLOAT32?a=this.gpgpu.createPackedMatrixTexture(t[0],t[1]):o===ge.PACKED_2X2_FLOAT16?a=this.gpgpu.createFloat16PackedMatrixTexture(t[0],t[1]):o===ge.UNPACKED_FLOAT32?a=this.gpgpu.createFloat32MatrixTexture(t[0],t[1]):o===ge.UNPACKED_FLOAT16?a=this.gpgpu.createFloat16MatrixTexture(t[0],t[1]):o===ge.PACKED_4X1_UNSIGNED_BYTE&&(a=this.gpgpu.createUnsignedBytesMatrixTexture(t[0],t[1])),this.usedTextures[r].push(a),this.numUsedTextures++,this._numBytesAllocated+=i,this.log(),a}releaseTexture(t,e,s,o){if(this.freeTextures==null)return;const r=lm(s,o),i=cm(e,r,o);i in this.freeTextures||(this.freeTextures[i]=[]);const a=am(e,r,this.gpgpu.gl,this.gpgpu.textureConfig,o),l=W().getNumber("WEBGL_DELETE_TEXTURE_THRESHOLD");l!==-1&&this._numBytesAllocated>l?(this.gpgpu.deleteMatrixTexture(t.texture),this._numBytesAllocated-=a):(this.freeTextures[i].push(t),this.numFreeTextures++,this._numBytesFree+=a),this.numUsedTextures--;const c=this.usedTextures[i],u=c&&c.indexOf(t);if(u==null||u<0)throw new Error("Cannot release a texture that was never provided by this texture manager");c[u]=c[c.length-1],c.pop(),this.log()}log(){if(!this.logEnabled)return;const t=this.numFreeTextures+this.numUsedTextures;console.log("Free/Used",`${this.numFreeTextures} / ${this.numUsedTextures}`,`(${t})`);const e=this._numBytesFree/this._numBytesAllocated;console.log(`Bytes allocated: ${this._numBytesAllocated}`),console.log(`Bytes unused: ${this._numBytesFree} (${Math.round(100*e)}%)`)}get numBytesAllocated(){return this._numBytesAllocated}get numBytesFree(){return this._numBytesFree}getNumUsedTextures(){return this.numUsedTextures}getNumFreeTextures(){return this.numFreeTextures}dispose(){if(this.freeTextures!=null){for(const t in this.freeTextures)this.freeTextures[t].forEach(e=>{this.gpgpu.deleteMatrixTexture(e.texture)});for(const t in this.usedTextures)this.usedTextures[t].forEach(e=>{this.gpgpu.deleteMatrixTexture(e.texture)});this.freeTextures=null,this.usedTextures=null,this.numUsedTextures=0,this.numFreeTextures=0,this._numBytesAllocated=0,this._numBytesFree=0}}}function Vz(n,t){const e=n;if(t===e.R32F)return 4;if(t===e.R16F)return 2;if(t===e.RGBA32F)return 16;if(t===n.RGBA)return 16;if(t===e.RGBA16F)return 8;if(t===e.RGBA8)return 4;throw new Error(`Unknown internal format ${t}`)}function am(n,t,e,s,o){const r=Wz(t,s);let i;if(o){const[l,c]=Yo(n[0],n[1]);i=l*c}else{const[l,c]=Hi(n[0],n[1]);i=l*c}const a=Vz(e,r);return i*a}function Wz(n,t){switch(n){case ge.PACKED_2X2_FLOAT32:return Dy(t);case ge.PACKED_2X2_FLOAT16:return Fy(t);case ge.UNPACKED_FLOAT32:return Ey(t);case ge.UNPACKED_FLOAT16:return Ry(t);case ge.PACKED_4X1_UNSIGNED_BYTE:return Ay(t);default:throw new Error(`Unknown physical texture type ${n}`)}}function Uz(n){return W().getBool("WEBGL_RENDER_FLOAT32_ENABLED")?n?ge.PACKED_2X2_FLOAT32:ge.UNPACKED_FLOAT32:n?ge.PACKED_2X2_FLOAT16:ge.UNPACKED_FLOAT16}function lm(n,t){if(n===Ke.UPLOAD)return ge.PACKED_2X2_FLOAT32;if(n===Ke.RENDER||n==null)return Uz(t);if(n===Ke.DOWNLOAD||n===Ke.PIXELS)return ge.PACKED_4X1_UNSIGNED_BYTE;throw new Error(`Unknown logical texture type ${n}`)}function cm(n,t,e){return`${n[0]}_${n[1]}_${t}_${e}`}class Rn{constructor(t,e){this.variableNames=["A"],this.outputShape=t,this.enableShapeUniforms=Se(this.outputShape.length),this.userCode=`
      float unaryOperation(float x) {
        ${e}
      }

      void main() {
        float x = getAAtOutCoords();
        float y = unaryOperation(x);

        setOutput(y);
      }
    `}}const hn="if (isnan(x)) return x;",Gz="return x;",um="return abs(x);",Hz="return (x >= 0.0) ? x : (exp(x) - 1.0);",jz=hn+`
  return (x < 0.0) ? 0.0 : x;
`,qz=hn+`
  return (x < 0.0) ? 0.0 : min(6.0, x);
`,as="return x;",Kz="return 1.0 / (1.0 + exp(-1.0 * x));";const Xz="return x;",Yz=`
  vec4 result;

  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);
  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);
  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);
  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);

  return result;
`,Zz=`
  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,Jz=`
  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,Qz="return 1.0 / (1.0 + exp(-1.0 * x));";class us{constructor(t,e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t,this.enableShapeUniforms=Se(this.outputShape.length),this.userCode=`
      vec4 unaryOperation(vec4 x) {
        ${e}
      }

      void main() {
        vec4 x = getAAtOutCoords();
        vec4 y = unaryOperation(x);

        setOutput(y);
      }
    `}}class tB{constructor(t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outputShape=t,this.enableShapeUniforms=Se(this.outputShape.length);const e=t.length,s=Ee("rc",e),o=_t(e),r=Lz(e,s),i=s.slice(-2),a=e<=1?"rc":`vec2(${i.join(",")})`;this.userCode=`
      void main() {
        ${o} rc = getOutputCoords();
        vec4 packedInput = getA(${r});

        setOutput(getChannel(packedInput, ${a}));
      }
    `}}const eB=ix,nB=1e-7,sB=1e-4,ua={};function oB(n){return n in ua||(ua[n]={}),ua[n]}const rB=W().getNumber("CPU_HANDOFF_SIZE_THRESHOLD"),iB=600;function aB(){return W().global.screen==null?1024:W().global.screen.height*W().global.screen.width*window.devicePixelRatio*iB/1024/1024}class Nc extends Uu{nextDataId(){return Nc.nextDataId++}constructor(t){if(super(),this.pendingRead=new WeakMap,this.pendingDisposal=new WeakSet,this.dataRefCount=new WeakMap,this.numBytesInGPU=0,this.uploadWaitMs=0,this.downloadWaitMs=0,this.lastGlFlushTime=0,this.warnedAboutMemory=!1,this.pendingDeletes=0,this.disposed=!1,!W().getBool("HAS_WEBGL"))throw new Error("WebGL is not supported on this device");let e;if(t!=null){if(t instanceof Qc)e=t;else{const s=In(W().getNumber("WEBGL_VERSION"),t);e=new Qc(s)}this.binaryCache={},this.gpgpuCreatedLocally=!1}else{const s=In(W().getNumber("WEBGL_VERSION"));e=new Qc(s),this.binaryCache=oB(W().getNumber("WEBGL_VERSION")),this.gpgpuCreatedLocally=!0}this.gpgpu=e,this.canvas=this.gpgpu.gl.canvas,this.textureManager=new Bz(this.gpgpu),this.numMBBeforeWarning=aB(),this.texData=new Fm(this,kn())}numDataIds(){return this.texData.numDataIds()-this.pendingDeletes}writeTexture(t,e,s,o,r,i){const a=this.makeTensorInfo(e,s),l=this.texData.get(a.dataId);l.isPacked=!1,l.texture={texture:t,texShape:[o,r]},l.texShape=[o,r];const c=la(e),u=new im(c,!1,i),h=this.runWebGLProgram(u,[a],s,[[o,r]]);return h.shape=e,l.texture=null,this.disposeIntermediateTensorInfo(a),h.dataId}write(t,e,s){if((W().getBool("WEBGL_CHECK_NUMERICAL_PROBLEMS")||W().getBool("DEBUG"))&&this.checkNumericalProblems(t),s==="complex64"&&t!=null)throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");const o={id:this.nextDataId()};return this.texData.set(o,{shape:e,dtype:s,values:t,usage:Ke.UPLOAD,refCount:1}),o}refCount(t){return this.texData.has(t)?this.texData.get(t).refCount:0}incRef(t){const e=this.texData.get(t);e.refCount++}decRef(t){if(this.texData.has(t)){const e=this.texData.get(t);e.refCount--}}move(t,e,s,o,r){if(W().getBool("DEBUG")&&this.checkNumericalProblems(e),o==="complex64")throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");this.texData.set(t,{shape:s,dtype:o,values:e,usage:Ke.UPLOAD,refCount:r})}disposeIntermediateTensorInfo(t){this.disposeData(t.dataId)}readSync(t){const e=this.texData.get(t),{values:s,dtype:o,complexTensorInfos:r,slice:i,shape:a,isPacked:l}=e;if(i!=null){let d;l?d=new us(a,as):d=new Rn(a,as);const p=this.runWebGLProgram(d,[{dataId:t,shape:a,dtype:o}],o),f=this.readSync(p.dataId);return this.disposeIntermediateTensorInfo(p),f}if(s!=null)return this.convertAndCacheOnCPU(t);if(o==="string")return s;const c=this.activeTimers!=null;let u;c&&(u=Fe());let h;if(o==="complex64"){const d=this.readSync(r.real.dataId),p=this.readSync(r.imag.dataId);h=Yn(d,p)}else h=this.getValuesFromTexture(t);return c&&(this.downloadWaitMs+=Fe()-u),this.convertAndCacheOnCPU(t,h)}async read(t){if(this.pendingRead.has(t)){const f=this.pendingRead.get(t);return new Promise(m=>f.push(m))}const e=this.texData.get(t),{values:s,shape:o,slice:r,dtype:i,complexTensorInfos:a,isPacked:l}=e;if(r!=null){let f;l?f=new us(o,as):f=new Rn(o,as);const m=this.runWebGLProgram(f,[{dataId:t,shape:o,dtype:i}],i),g=this.read(m.dataId);return this.disposeIntermediateTensorInfo(m),g}if(s!=null)return this.convertAndCacheOnCPU(t);if(W().getBool("DEBUG")&&!W().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")&&W().getNumber("WEBGL_VERSION")===2)throw new Error("tensor.data() with WEBGL_DOWNLOAD_FLOAT_ENABLED=false and WEBGL_VERSION=2 not yet supported.");let c=null,u;if(i!=="complex64"&&W().get("WEBGL_BUFFER_SUPPORTED")){u=this.decode(t);const f=this.texData.get(u.dataId);c=this.gpgpu.createBufferFromTexture(f.texture.texture,...ra(o))}this.pendingRead.set(t,[]),i!=="complex64"&&await this.gpgpu.createAndWaitForFence();let h;if(i==="complex64"){const f=await Promise.all([this.read(a.real.dataId),this.read(a.imag.dataId)]),m=f[0],g=f[1];h=Yn(m,g)}else if(c==null)h=this.getValuesFromTexture(t);else{const f=H(o);h=this.gpgpu.downloadFloat32MatrixFromBuffer(c,f)}if(u!=null&&this.disposeIntermediateTensorInfo(u),c!=null){const f=this.gpgpu.gl;nt(f,()=>f.deleteBuffer(c))}const d=this.convertAndCacheOnCPU(t,h),p=this.pendingRead.get(t);return this.pendingRead.delete(t),p.forEach(f=>f(d)),this.pendingDisposal.has(t)&&(this.pendingDisposal.delete(t),this.disposeData(t)&&kn().removeDataId(t,this),this.pendingDeletes--),d}readToGPU(t,e={}){const s=this.texData.get(t),{values:o,shape:r,slice:i,dtype:a,isPacked:l,texture:c}=s;if(a==="complex64")throw new Error("Does not support reading texture for complex64 dtype.");if(i!=null){let p;l?p=new us(r,as):p=new Rn(r,as);const f=this.runWebGLProgram(p,[{dataId:t,shape:r,dtype:a}],a),m=this.readToGPU(f,e);return this.disposeIntermediateTensorInfo(f),m}if(c==null)throw o!=null?new Error("Data is not on GPU but on CPU."):new Error("There is no data on GPU or CPU.");const u=this.decode(t,e.customTexShape),h=kn().makeTensorFromTensorInfo(u),d=this.texData.get(u.dataId);return Object.assign({tensorRef:h},d.texture)}bufferSync(t){const e=this.readSync(t.dataId);if(t.dtype==="string")try{const s=e.map(o=>ms(o));return wt(t.shape,t.dtype,s)}catch{throw new Error("Failed to decode encoded string bytes into utf-8")}return wt(t.shape,t.dtype,e)}checkNumericalProblems(t){if(t!=null)for(let e=0;e<t.length;e++){const s=t[e];if(!uP(s))throw W().getBool("WEBGL_RENDER_FLOAT32_CAPABLE")?Error(`The value ${s} cannot be represented with your current settings. Consider enabling float32 rendering: 'tf.env().set('WEBGL_RENDER_FLOAT32_ENABLED', true);'`):Error(`The value ${s} cannot be represented on this device.`)}}getValuesFromTexture(t){const{shape:e,dtype:s,isPacked:o}=this.texData.get(t),r=H(e);if(W().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")){const d=this.decode(t),p=this.texData.get(d.dataId),f=this.gpgpu.downloadMatrixFromPackedTexture(p.texture.texture,...ra(e)).subarray(0,r);return this.disposeIntermediateTensorInfo(d),f}const i=W().getBool("WEBGL_PACK")&&o===!0,a=i?la(e):e,l=i?new S3(a):new k3(a),c=this.runWebGLProgram(l,[{shape:a,dtype:s,dataId:t}],"float32"),u=this.texData.get(c.dataId),h=this.gpgpu.downloadByteEncodedFloatMatrixFromOutputTexture(u.texture.texture,u.texShape[0],u.texShape[1]).subarray(0,r);return this.disposeIntermediateTensorInfo(c),h}timerAvailable(){return W().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0}time(t){const e=this.activeTimers,s=[];let o=!1;this.programTimersStack==null?(this.programTimersStack=s,o=!0):this.activeTimers.push(s),this.activeTimers=s,t();const r=js(this.activeTimers.map(l=>l.query)).filter(l=>l!=null),i=js(this.activeTimers.map(l=>l.name)).filter(l=>l!=null);this.activeTimers=e,o&&(this.programTimersStack=null);const a={uploadWaitMs:this.uploadWaitMs,downloadWaitMs:this.downloadWaitMs,kernelMs:null,wallMs:null};return(async()=>{if(W().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0){const l=await Promise.all(r);a.kernelMs=IC(l),a.getExtraProfileInfo=()=>l.map((c,u)=>({name:i[u],ms:c})).map(c=>`${c.name}: ${c.ms}`).join(", ")}else a.kernelMs={error:"WebGL query timers are not supported in this environment."};return this.uploadWaitMs=0,this.downloadWaitMs=0,a})()}memory(){return{unreliable:!1,numBytesInGPU:this.numBytesInGPU,numBytesInGPUAllocated:this.textureManager.numBytesAllocated,numBytesInGPUFree:this.textureManager.numBytesFree}}startTimer(){return W().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?this.gpgpu.beginQuery():{startMs:Fe(),endMs:null}}endTimer(t){return W().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?(this.gpgpu.endQuery(),t):(t.endMs=Fe(),t)}async getQueryTime(t){if(W().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0)return this.gpgpu.waitForQueryAndGetTime(t);const e=t;return e.endMs-e.startMs}disposeData(t,e=!1){if(this.pendingDisposal.has(t))return!1;if(!this.texData.has(t))return!0;if(e?this.texData.get(t).refCount=0:this.texData.get(t).refCount--,!e&&this.texData.get(t).refCount>0)return!1;if(this.pendingRead.has(t))return this.pendingDisposal.add(t),this.pendingDeletes++,!1;this.releaseGPUData(t);const{complexTensorInfos:s}=this.texData.get(t);return s!=null&&(this.disposeData(s.real.dataId,e),this.disposeData(s.imag.dataId,e)),this.texData.delete(t),!0}releaseGPUData(t){const{texture:e,dtype:s,texShape:o,usage:r,isPacked:i,slice:a}=this.texData.get(t),l=a&&a.origDataId||t,c=this.dataRefCount.get(l);c>1?this.dataRefCount.set(l,c-1):(this.dataRefCount.delete(l),e!=null&&(this.numBytesInGPU-=this.computeBytes(o,s),this.textureManager.releaseTexture(e,o,r,i)));const u=this.texData.get(t);u.texture=null,u.texShape=null,u.isPacked=!1,u.slice=null}getTexture(t){return this.uploadToGPU(t),this.texData.get(t).texture.texture}getDataInfo(t){return this.texData.get(t)}shouldExecuteOnCPU(t,e=rB){return W().getBool("WEBGL_CPU_FORWARD")&&t.every(s=>this.texData.get(s.dataId).texture==null&&H(s.shape)<e)}getGPGPUContext(){return this.gpgpu}where(t){qe("tf.where() in webgl locks the UI thread. Call tf.whereAsync() instead");const e=t.dataSync();return eB(t.shape,e)}packedUnaryOp(t,e,s){const o=new us(t.shape,e),r=this.compileAndRun(o,[t],s);return kn().makeTensorFromTensorInfo(r)}abs(t){if(this.shouldExecuteOnCPU([t])&&t.dtype!=="complex64"){const o=Oy(this.texData.get(t.dataId).values);return this.makeOutput(t.shape,t.dtype,o)}if(W().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(t,um,t.dtype);const e=new Rn(t.shape,um),s=this.compileAndRun(e,[t]);return kn().makeTensorFromTensorInfo(s)}makeTensorInfo(t,e,s){let o;if(e==="string"&&s!=null&&s.length>0&&Dr(s[0])){const r=s.map(i=>ds(i));o=this.write(r,t,e)}else o=this.write(s,t,e);return this.texData.get(o).usage=null,{dataId:o,shape:t,dtype:e}}makeOutput(t,e,s){return kn().makeTensorFromTensorInfo(this.makeTensorInfo(t,e,s),this)}unpackTensor(t){const e=new tB(t.shape);return this.runWebGLProgram(e,[t],t.dtype)}packTensor(t){const e=new Pz(t.shape);return this.runWebGLProgram(e,[t],t.dtype,null,!0)}packedReshape(t,e){const s=[Bo(t.shape),...Vo(t.shape)],o={dtype:t.dtype,shape:s,dataId:t.dataId},r=[Bo(e),...Vo(e)],i=new Py(r,s),a=!0,l=[s],c=this.runWebGLProgram(i,[o],t.dtype,l,a);return{dataId:c.dataId,shape:e,dtype:c.dtype}}decode(t,e){const s=this.texData.get(t),{isPacked:o,shape:r,dtype:i}=s;if(e!=null){const d=H(r),p=e[0]*e[1]*4;v(d<=p,()=>"customTexShape is too small. Row * Column * 4 should be equal or larger than the size of the tensor data.")}const a=la(r);let l;o?l=new v3(a):l=new I3(a);const c=!0,u=[e??ra(a)],h=this.runWebGLProgram(l,[{shape:a,dtype:i,dataId:t}],i,u,c,e);return{dtype:i,shape:r,dataId:h.dataId}}runWebGLProgram(t,e,s,o,r=!1,i){const a=this.makeTensorInfo(t.outputShape,s),l=this.texData.get(a.dataId);if(t.packedOutput&&(l.isPacked=!0),t.outPackingScheme===Tr.DENSE){const x=i??ra(t.outputShape);l.texShape=x.map(b=>b*2)}if(t.outTexUsage!=null&&(l.usage=t.outTexUsage),H(a.shape)===0)return l.values=Ce(a.dtype,0),a;const c=[],u=e.map(x=>{if(x.dtype==="complex64")throw new Error("GPGPUProgram does not support complex64 input. For complex64 dtypes, please separate the program into real and imaginary parts.");let b=this.texData.get(x.dataId);if(b.texture==null){if(!t.packedInputs&&H(x.shape)<=W().getNumber("WEBGL_SIZE_UPLOAD_UNIFORM"))return{shape:x.shape,texData:null,isUniform:!0,uniformValues:b.values};t.packedInputs&&(b.isPacked=!0,b.shape=x.shape)}if(this.uploadToGPU(x.dataId),!!b.isPacked!=!!t.packedInputs)x=b.isPacked?this.unpackTensor(x):this.packTensor(x),c.push(x),b=this.texData.get(x.dataId);else if(b.isPacked&&!Za(b.shape,x.shape)){const w=x,y=x.shape;x.shape=b.shape,x=this.packedReshape(x,y),c.push(x),b=this.texData.get(x.dataId),w.shape=y}return{shape:x.shape,texData:b,isUniform:!1}});this.uploadToGPU(a.dataId);const h={shape:a.shape,texData:l,isUniform:!1},d=$3(t,u,h),p=this.getAndSaveBinary(d,()=>w3(this.gpgpu,t,u,h)),f=this.activeTimers!=null;let m;f&&(m=this.startTimer()),W().get("ENGINE_COMPILE_ONLY")||C3(this.gpgpu,p,u,h,o),c.forEach(x=>this.disposeIntermediateTensorInfo(x)),f&&(m=this.endTimer(m),this.activeTimers.push({name:t.constructor.name,query:this.getQueryTime(m)}));const g=W().getNumber("WEBGL_FLUSH_THRESHOLD");if(g>0){const x=Fe();x-this.lastGlFlushTime>g&&(this.gpgpu.gl.flush(),this.lastGlFlushTime=x)}if(!W().getBool("WEBGL_LAZILY_UNPACK")&&l.isPacked&&r===!1){const x=this.unpackTensor(a);return this.disposeIntermediateTensorInfo(a),x}return a}compileAndRun(t,e,s,o,r=!1){return s=s||e[0].dtype,this.runWebGLProgram(t,e,s,o,r)}getAndSaveBinary(t,e){return t in this.binaryCache||(this.binaryCache[t]=e()),this.binaryCache[t]}getTextureManager(){return this.textureManager}dispose(){this.disposed||(W().getBool("IS_TEST")||Object.keys(this.binaryCache).forEach(e=>{this.gpgpu.deleteProgram(this.binaryCache[e].webGLProgram),delete this.binaryCache[e]}),this.textureManager.dispose(),this.canvas!=null&&typeof HTMLCanvasElement<"u"&&this.canvas instanceof HTMLCanvasElement?this.canvas.remove():this.canvas=null,this.gpgpuCreatedLocally&&(this.gpgpu.program=null,this.gpgpu.dispose()),this.disposed=!0)}floatPrecision(){return this.floatPrecisionValue==null&&(this.floatPrecisionValue=B(()=>{if(!W().get("WEBGL_RENDER_FLOAT32_ENABLED")){const t=W().getBool("DEBUG");W().set("DEBUG",!1);const e=this.abs(Tt(1e-8)).dataSync()[0];if(W().set("DEBUG",t),e>0)return 32}return 16})),this.floatPrecisionValue}epsilon(){return this.floatPrecision()===32?nB:sB}uploadToGPU(t){const e=this.texData.get(t),{shape:s,dtype:o,values:r,texture:i,usage:a,isPacked:l}=e;if(i!=null)return;const c=this.activeTimers!=null;let u;c&&(u=Fe());let h=e.texShape;if(h==null&&(h=TP(s,l),e.texShape=h),r!=null){const d=la(s);let p,f=h[1],m=h[0];const g=r instanceof Uint8Array||r instanceof Uint8ClampedArray;(l||!g)&&([f,m]=Yo(h[0],h[1])),l?p=new T3(d,g):p=new im(d,g);const x=g?[m,f]:h,b=this.makeTensorInfo(x,o),w=this.texData.get(b.dataId);g?w.usage=Ke.PIXELS:w.usage=Ke.UPLOAD,w.texShape=x,this.gpgpu.uploadDenseMatrixToTexture(this.getTexture(b.dataId),f,m,r);const y=[[m,f]],I=this.runWebGLProgram(p,[b],o,y,!0),N=this.texData.get(I.dataId);e.texShape=N.texShape,e.isPacked=N.isPacked,e.usage=N.usage,W().get("ENGINE_COMPILE_ONLY")?this.disposeData(I.dataId):(e.texture=N.texture,e.values=null,this.texData.delete(I.dataId)),this.disposeIntermediateTensorInfo(b),c&&(this.uploadWaitMs+=Fe()-u)}else{const d=this.acquireTexture(h,a,o,l);e.texture=d}}convertAndCacheOnCPU(t,e){const s=this.texData.get(t),{dtype:o}=s;return e!=null&&(s.values=lB(e,o)),s.values}acquireTexture(t,e,s,o){if(this.numBytesInGPU+=this.computeBytes(t,s),!this.warnedAboutMemory&&this.numBytesInGPU>this.numMBBeforeWarning*1024*1024){const r=(this.numBytesInGPU/1024/1024).toFixed(2);this.warnedAboutMemory=!0,console.warn(`High memory usage in GPU: ${r} MB, most likely due to a memory leak`)}return this.textureManager.acquireTexture(t,e,o)}computeBytes(t,e){return t[0]*t[1]*ka(e)}checkCompileCompletion(){for(const[,t]of Object.entries(this.binaryCache))this.checkCompletion_(t)}async checkCompileCompletionAsync(){const t=[];if(this.gpgpu.parallelCompilationExtension){for(const[,e]of Object.entries(this.binaryCache))t.push(this.checkCompletionAsync_(e));return Promise.all(t)}else{for(const[,e]of Object.entries(this.binaryCache)){const s=new Promise(o=>{try{this.checkCompletion_(e),o(!0)}catch(r){throw r}});t.push(s)}return Promise.all(t)}}async checkCompletionAsync_(t){return this.gpgpu.gl.getProgramParameter(t.webGLProgram,this.gpgpu.parallelCompilationExtension.COMPLETION_STATUS_KHR)?this.checkCompletion_(t):(await kx(),this.checkCompletionAsync_(t))}checkCompletion_(t){if(this.gpgpu.gl.getProgramParameter(t.webGLProgram,this.gpgpu.gl.LINK_STATUS)===!1)throw console.log(this.gpgpu.gl.getProgramInfoLog(t.webGLProgram)),this.gpgpu.gl.getShaderParameter(t.fragmentShader,this.gpgpu.gl.COMPILE_STATUS)===!1?(Iy(t.source,this.gpgpu.gl.getShaderInfoLog(t.fragmentShader)),new Error("Failed to compile fragment shader.")):new Error("Failed to link vertex and fragment shaders.");return!0}getUniformLocations(){for(const t of Object.values(this.binaryCache)){this.gpgpu.buildVao(t.webGLProgram);const{variablesLocations:e,customUniformLocations:s,infLoc:o,nanLoc:r,outShapeLocation:i,outShapeStridesLocation:a,outTexShapeLocation:l}=Ty(this.gpgpu,t.program,t.webGLProgram);t.variablesLocations=e,t.customUniformLocations=s,t.infLoc=o,t.nanLoc=r,t.outShapeLocation=i,t.outShapeStridesLocation=a,t.outTexShapeLocation=l}}createTensorFromGPUData(t,e,s){t.channels=t.channels||"RGBA";const{texture:o,height:r,width:i,channels:a}=t,l=kn().backend;if(!l.gpgpu.gl.isTexture(o))throw new Error("The texture is invalid. Also, please make sure the texture and the TFJS WebGL backend are using the same canvas. If you want to use your own custom canvas, you have to create and use the custom TFJS WebGL backend created from the canvas through 'new tf.MathBackendWebGL(customCanvas)'.");const c=l.writeTexture(o,e,s,r,i,a);return kn().makeTensorFromDataId(c,e,s,l)}}Nc.nextDataId=0;function lB(n,t){if(t==="float32"||t==="complex64")return n;if(t==="int32"||t==="bool"){const e=t==="int32"?new Int32Array(n.length):new Uint8Array(n.length);for(let s=0;s<e.length;++s)e[s]=Math.round(n[s]);return e}else throw new Error(`Unknown dtype ${t}`)}Cg()&&vg("webgl",()=>new Nc,2);const vp=`
  if (isnan(a)) return a;
  if (isnan(b)) return b;
`;class ro{constructor(t,e,s){this.variableNames=["A","B"],this.outputShape=mt(e,s),this.enableShapeUniforms=Se(this.outputShape.length),this.userCode=`
      float binaryOperation(float a, float b) {
        ${t}
      }

      void main() {
        float a = getAAtOutCoords();
        float b = getBAtOutCoords();
        setOutput(binaryOperation(a, b));
      }
    `}}const mo=`
  result.r = isNaN.r ? NAN : result.r;
  result.g = isNaN.g ? NAN : result.g;
  result.b = isNaN.b ? NAN : result.b;
  result.a = isNaN.a ? NAN : result.a;
`;class er{constructor(t,e,s,o=!1){this.variableNames=["A","B"],this.supportsBroadcasting=!0,this.packedInputs=!0,this.packedOutput=!0,this.outputShape=mt(e,s);const r=this.outputShape.length;this.enableShapeUniforms=Se(r);let i="";if(o)if(r===0||H(this.outputShape)===1)i=`
          result.y = 0.;
          result.z = 0.;
          result.w = 0.;
        `;else if(i=`
          ${_t(r)} coords = getOutputCoords();
        `,r===1)this.enableShapeUniforms?i+=`
            result.y = (coords + 1) >= outShape ? 0. : result.y;
            result.z = 0.;
            result.w = 0.;
          `:i+=`
            result.y = (coords + 1) >= ${this.outputShape[0]} ? 0. : result.y;
            result.z = 0.;
            result.w = 0.;
          `;else{const l=Ee("coords",r);this.enableShapeUniforms?i+=`
            bool nextRowOutOfBounds =
              (${l[r-2]} + 1) >= outShape[${r} - 2];
            bool nextColOutOfBounds =
              (${l[r-1]} + 1) >= outShape[${r} - 1];
            result.y = nextColOutOfBounds ? 0. : result.y;
            result.z = nextRowOutOfBounds ? 0. : result.z;
            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;
          `:i+=`
            bool nextRowOutOfBounds =
              (${l[r-2]} + 1) >= ${this.outputShape[r-2]};
            bool nextColOutOfBounds =
              (${l[r-1]} + 1) >= ${this.outputShape[r-1]};
            result.y = nextColOutOfBounds ? 0. : result.y;
            result.z = nextRowOutOfBounds ? 0. : result.z;
            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;
          `}this.userCode=`
      vec4 binaryOperation(vec4 a, vec4 b) {
        ${t}
      }

      void main() {
        vec4 a = getAAtOutCoords();
        vec4 b = getBAtOutCoords();

        vec4 result = binaryOperation(a, b);
        ${i}

        setOutput(result);
      }
    `}}function He(n){const{inputs:t,backend:e}=n,{x:s}=t;return e.incRef(s.dataId),{dataId:s.dataId,shape:s.shape,dtype:s.dtype}}const cB={kernelName:Qr,backendName:"webgl",kernelFunc:He};function Rs(n){const{inputs:t,backend:e}=n,{real:s,imag:o}=t,r=e.makeTensorInfo(s.shape,"complex64"),i=e.texData.get(r.dataId),a=He({inputs:{x:s},backend:e}),l=He({inputs:{x:o},backend:e});return i.complexTensorInfos={real:a,imag:l},r}const uB={kernelName:nh,backendName:"webgl",kernelFunc:Rs};const zy="return (a < 0.) ? b * a : a;",By=`
  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));
  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);
`;function hB(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{alpha:r}=s,i=e.makeTensorInfo([],"float32",$s(r,"float32")),a=W().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new er(By,o.shape,i.shape):new ro(zy,o.shape,i.shape),l=e.runWebGLProgram(a,[o,i],"float32");return e.disposeIntermediateTensorInfo(i),l}const dB={kernelName:Cl,backendName:"webgl",kernelFunc:hB};const Vy="return (a < 0.) ? b * a : a;",Wy=`
  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));
  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);
`;function pB(n){const{inputs:t,backend:e}=n,{x:s,alpha:o}=t,r=W().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new er(Wy,s.shape,o.shape):new ro(Vy,s.shape,o.shape);return e.runWebGLProgram(r,[s,o],"float32")}const fB={kernelName:Bl,backendName:"webgl",kernelFunc:pB};const nr="if (isnan(x)) return x;";function St({opSnippet:n,packedOpSnippet:t,cpuKernelImpl:e,dtype:s}){return({inputs:o,backend:r})=>{const{x:i}=o,a=r,l=s||i.dtype;if(a.shouldExecuteOnCPU([i])&&e!=null){const h=a.texData.get(i.dataId),d=e(h.values,l);return a.makeTensorInfo(i.shape,l,d)}const c=W().getBool("WEBGL_PACK_UNARY_OPERATIONS")&&t!=null;let u;return c?u=new us(i.shape,t):u=new Rn(i.shape,n),a.runWebGLProgram(u,[i],l)}}function we({opSnippet:n,packedOpSnippet:t,checkOutOfBounds:e=!1,supportsComplex:s=!1,cpuKernelImpl:o,dtype:r}){return({inputs:i,backend:a})=>{const{a:l,b:c}=i,u=a;if(s&&l.dtype==="complex64"){const f=u.texData.get(l.dataId),m=u.texData.get(c.dataId),[g,x]=[[f.complexTensorInfos.real,m.complexTensorInfos.real],[f.complexTensorInfos.imag,m.complexTensorInfos.imag]].map(w=>{const[y,C]=w,I={dataId:y.dataId,dtype:y.dtype,shape:l.shape},N={dataId:C.dataId,dtype:C.dtype,shape:c.shape},T=new ro(n,l.shape,c.shape);return u.runWebGLProgram(T,[I,N],Ue(y.dtype,C.dtype))}),b=Rs({inputs:{real:g,imag:x},backend:u});return u.disposeIntermediateTensorInfo(g),u.disposeIntermediateTensorInfo(x),b}const h=r||Ue(l.dtype,c.dtype);if((l.dtype==="string"||c.dtype==="string"||u.shouldExecuteOnCPU([l,c]))&&o!=null){const f=u.texData.get(l.dataId).values,m=u.texData.get(c.dataId).values,g=l.dtype==="string"?Zn(f):f,x=l.dtype==="string"?Zn(m):m,[b,w]=o(l.shape,c.shape,g,x,h),y=u.makeTensorInfo(w,h),C=u.texData.get(y.dataId);return C.values=b,y}const d=W().getBool("WEBGL_PACK_BINARY_OPERATIONS")&&t!=null;let p;return d?p=new er(t,l.shape,c.shape,e):p=new ro(n,l.shape,c.shape),u.runWebGLProgram(p,[l,c],h)}}function Er(n,t=!1){if(n==="linear")return t?Xz:Gz;if(n==="relu")return t?Zz:jz;if(n==="elu")return t?Yz:Hz;if(n==="relu6")return t?Jz:qz;if(n==="prelu")return t?Wy:Vy;if(n==="leakyrelu")return t?By:zy;if(n==="sigmoid")return t?Qz:Kz;throw new Error(`Activation ${n} has not been implemented for the WebGL backend.`)}class Uy{constructor(t,e,s,o=!1,r=!1,i=!1,a=null,l=!1,c=!1){this.variableNames=["matrixA","matrixB"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=s,this.enableShapeUniforms=Se(this.outputShape.length);const u=o?t[1]:t[2],h=Math.ceil(u/2),d=o?"i * 2, rc.y":"rc.y, i * 2",p=r?"rc.z, i * 2":"i * 2, rc.z",f=o?["a.xxyy","a.zzww"]:["a.xxzz","a.yyww"],m=r?["b.xzxz","b.ywyw"]:["b.xyxy","b.zwzw"];let g="",x="";a&&(l?g=`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          ${a}
        }`:c?g=`vec4 activation(vec4 a) {
          vec4 b = getLeakyreluAlphaAtOutCoords();
          ${a}
        }`:g=`vec4 activation(vec4 x) {
          ${a}
        }`,x="result = activation(result);");const b=i?"result += getBiasAtOutCoords();":"";i&&this.variableNames.push("bias"),l&&this.variableNames.push("preluActivationWeights"),c&&this.variableNames.push("leakyreluAlpha");let w="rc.x",y="rc.x";t[0]<e[0]?w=`imod(rc.x, ${t[0]})`:e[0]<t[0]&&(y=`imod(rc.x, ${e[0]})`),this.userCode=`
      ${g}
      // Don't use uniform for sharedDimensionPacked for performance.
      const float sharedDimension = ${h}.0;

      vec4 dot2x2ARowBCol(ivec3 rc) {
        vec4 result = vec4(0);
        int batchA = ${w};
        int batchB = ${y};
        for (int i = 0; i < ${h}; i++) {
          vec4 a = getMatrixA(batchA, ${d});
          vec4 b = getMatrixB(batchB, ${p});

          // These swizzled products need to be separately added.
          // See: https://github.com/tensorflow/tfjs/issues/1735
          result += (${f[0]} * ${m[0]});
          result += (${f[1]} * ${m[1]});
        }
        return result;
      }

      void main() {
        ivec3 rc = getOutputCoords();
        vec4 result = dot2x2ARowBCol(rc);

        ${b}

        ${x}

        setOutput(result);
      }
    `}}const hm={REAL:"return areal * breal - aimag * bimag;",IMAG:"return areal * bimag + aimag * breal;"};class dm{constructor(t,e,s){this.variableNames=["AReal","AImag","BReal","BImag"],this.outputShape=mt(e,s),this.userCode=`
      float binaryOpComplex(
          float areal, float aimag, float breal, float bimag) {
        ${t}
      }

      void main() {
        float areal = getARealAtOutCoords();
        float aimag = getAImagAtOutCoords();
        float breal = getBRealAtOutCoords();
        float bimag = getBImagAtOutCoords();
        setOutput(binaryOpComplex(areal, aimag, breal, bimag));
      }
    `}}const pm="return a * b;";function kp(n){const{inputs:t,backend:e}=n,{a:s,b:o}=t,r=Ue(s.dtype,o.dtype);if(s.dtype==="complex64"){const a=e.texData.get(s.dataId),l=e.texData.get(o.dataId),c=new dm(hm.REAL,s.shape,o.shape),u=new dm(hm.IMAG,s.shape,o.shape),h=[{dataId:a.complexTensorInfos.real.dataId,dtype:a.complexTensorInfos.real.dtype,shape:s.shape},{dataId:a.complexTensorInfos.imag.dataId,dtype:a.complexTensorInfos.imag.dtype,shape:s.shape},{dataId:l.complexTensorInfos.real.dataId,dtype:l.complexTensorInfos.real.dtype,shape:o.shape},{dataId:l.complexTensorInfos.imag.dataId,dtype:l.complexTensorInfos.imag.dtype,shape:o.shape}],d=e.runWebGLProgram(c,h,"float32"),p=e.runWebGLProgram(u,h,"float32"),f=Rs({inputs:{real:d,imag:p},backend:e});return e.disposeIntermediateTensorInfo(d),e.disposeIntermediateTensorInfo(p),f}if(e.shouldExecuteOnCPU([s,o])){const a=e.texData.get(s.dataId),l=e.texData.get(o.dataId),[c,u]=pz(s.shape,o.shape,a.values,l.values,r),h=e.makeTensorInfo(u,r),d=e.texData.get(h.dataId);return d.values=c,h}let i;return W().getBool("WEBGL_PACK_BINARY_OPERATIONS")?i=new er(pm,s.shape,o.shape):i=new ro(pm,s.shape,o.shape),e.runWebGLProgram(i,[s,o],r)}const mB={kernelName:li,backendName:"webgl",kernelFunc:kp};function gB(n,t,e){const s=[Bo(n.shape),...Vo(n.shape)],o={dtype:n.dtype,shape:s,dataId:n.dataId},r=[Bo(t),...Vo(t)],i=new Py(r,s),a=!0,l=[s],c=e.runWebGLProgram(i,[o],n.dtype,l,a);return{dataId:c.dataId,shape:t,dtype:c.dtype}}function et(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{shape:r}=s,i=e,a=H(o.shape),l=Om(r,a),c=H(l);v(a===c,()=>`The new shape (${l}) has ${c} elements and the old shape (${o.shape}) has ${a} elements. The new shape and old shape must have the same number of elements.`);const u=i.texData.get(o.dataId);return u.isPacked&&!Za(o.shape,l)&&!(u.texture!==null&&Za(u.shape,l))?gB(o,l,i):(i.incRef(o.dataId),{dataId:o.dataId,shape:l,dtype:o.dtype})}const xB={kernelName:Wl,backendName:"webgl",kernelFunc:et};class fm{constructor(t,e){this.variableNames=["x"];const{windowSize:s,batchSize:o,inSize:r,outSize:i}=t;this.outputShape=[o,i];const a=Math.floor(s/4)*4,l=s%4;let c="sumValue += dot(values, ones);";if(e!=null){const h=1/e;c=`sumValue += dot(values * ${Ao(h)?h.toPrecision(2):h}, ones);`}let u="";r%s>0&&(u=`
        if (inIdx < 0 || inIdx >= ${r}) {
          return 0.0;
        }
      `),this.userCode=`
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float getValue(int batch, int inIdx) {
        ${u}
        return getX(batch, inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * ${s};

        float sumValue = 0.0;

        for (int i = 0; i < ${a}; i += 4) {
          int inIdx = inOffset + i;
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          ${c}
        }

        int inIdx = inOffset + ${a};
        if (${l===1}) {
          vec4 values = vec4(getValue(batch, inIdx), 0.0, 0.0, 0.0);

          ${c}
        } else if (${l===2}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1), 0.0, 0.0);

          ${c}
        } else if (${l===3}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2), 0.0);

          ${c}
        }
        setOutput(sumValue);
      }
    `}}class bB{constructor(t,e){this.variableNames=["x"];const{windowSize:s,batchSize:o,inSize:r,outSize:i}=t;this.outputShape=[o,i];let a="0.0",l="";e==="prod"?a="1.0":e==="min"?(a="1.0 / 1e-20",l="min"):e==="max"&&(a="-1.0 / 1e-20",l="max");let c=`${e}(${e}(${e}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;e==="sum"?c="sumValue":e==="prod"?c="prodValue":e==="all"?c="allValue":e==="any"&&(c="anyValue");const u=Math.floor(s/4)*4,h=s%4;let d=`
      if (${e==="sum"}) {
        sumValue += dot(values, ones);
      } else if (${e==="prod"}) {
        vec2 tmp = vec2(values[0], values[1]) * vec2(values[2], values[3]);
        prodValue *= tmp[0] * tmp[1];
      } else {
        minMaxValue = ${l}(values, minMaxValue);
        if (${e==="min"} || ${e==="max"}) {
          minMaxValue = ${l}(values, minMaxValue);
          bvec4 isNaN = isnan(values);
          if (isNaN.r || isNaN.g || isNaN.b || isNaN.a) {
            minMaxValue = vec4(NAN);
          }
        }
      }
    `,p="vec4";e==="all"?(a="1.0",d=`
        bool reducedAllValue = all(values);
        float floatedReducedAllValue = float(reducedAllValue);
        allValue = float(allValue >= 1.0 && floatedReducedAllValue >= 1.0);
      `,p="bvec4"):e==="any"&&(a="0.0",d=`
        bool reducedAnyValue = any(values);
        float floatedReducedAnyValue = float(reducedAnyValue);
        anyValue = float(anyValue >= 1.0 || floatedReducedAnyValue >= 1.0);
      `,p="bvec4");let f="";r%s>0&&(f=`
        if (inIdx < 0 || inIdx >= ${r}) {
          return initializationValue;
        }
      `),this.userCode=`
      const float initializationValue = ${a};
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float getValue(int batch, int inIdx) {
        ${f}
        return getX(batch, inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * ${s};

        vec4 minMaxValue = vec4(${a});
        float prodValue = 1.0;
        float sumValue = 0.0;
        float allValue = 1.0;
        float anyValue = 0.0;

        for (int i = 0; i < ${u}; i += 4) {
          int inIdx = inOffset + i;
          ${p} values = ${p}(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          ${d}
        }

        int inIdx = inOffset + ${u};
        if (${h===1}) {
          ${p} values = ${p}(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          ${d}
        } else if (${h===2}) {
          ${p} values = ${p}(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          ${d}
        } else if (${h===3}) {
          ${p} values = ${p}(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          ${d}
        }
        setOutput(${c});
      }
    `}}function yB(n){const t=[];for(;t.length===0||t[t.length-1].outSize!==1;){const e=t.length?t[t.length-1].outSize:n[1],s=hc(e);t.push({inSize:e,windowSize:s,outSize:Math.ceil(e/s)})}return t}function go(n,t,e,s){const o=yB(n.shape);let r=n;for(let i=0;i<o.length;i++){const{inSize:a,windowSize:l,outSize:c}=o[i];let u,h;e==="mean"?u=i===0?new fm({windowSize:l,inSize:a,batchSize:n.shape[0],outSize:c},a):new fm({windowSize:l,inSize:a,batchSize:n.shape[0],outSize:c}):u=new bB({windowSize:l,inSize:a,batchSize:n.shape[0],outSize:c},e),h=r,r=s.runWebGLProgram(u,[r],t),h.dataId!==n.dataId&&s.disposeIntermediateTensorInfo(h)}return r}class wB{constructor(t,e){this.variableNames=["A"];const s=new Array(t.length);for(let i=0;i<s.length;i++)s[i]=t[e[i]];this.outputShape=s,this.rank=s.length;const o=_t(this.rank),r=CB(e);this.userCode=`
    void main() {
      ${o} resRC = getOutputCoords();
      setOutput(getA(${r}));
    }
    `}}function CB(n){const t=n.length;if(t>6)throw Error(`Transpose for rank ${t} is not yet supported`);const e=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u","resRC.v"],s=new Array(t);for(let o=0;o<n.length;o++)s[n[o]]=e[o];return s.join()}class $B{constructor(t,e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0;const s=new Array(t.length);for(let u=0;u<s.length;u++)s[u]=t[e[u]];if(this.outputShape=s,this.rank=s.length,this.rank>6)throw Error(`Packed transpose for rank ${this.rank} is not yet supported.`);const o=_t(this.rank),r=Ly("rc",this.rank),i=new Array(this.rank);for(let u=0;u<e.length;u++)i[e[u]]=r[u];const a=`vec2(${i.slice(-2).join()})`,l=`++${r[this.rank-1]} < ${s[this.rank-1]}`,c=`getChannel(getA(${i.join()}), ${a})`;this.userCode=`
    void main() {
      ${o} rc = getOutputCoords();
      vec4 result = vec4(0.);
      result[0] = ${c};
      if(${l}) {
        result[1] = ${c};
      }
      --${r[this.rank-1]};
      if(++${r[this.rank-2]} < ${s[this.rank-2]}) {
        result[2] = ${c};
        if(${l}) {
          result[3] = ${c};
        }
      }
      setOutput(result);
    }
    `}}function Tc(n,t,e){const s=W().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new $B(n.shape,t):new wB(n.shape,t);return e.runWebGLProgram(s,[n],n.dtype)}function IB(n,t,e,s){const o=t,r=n.shape.length,i=Ct(o,n.shape);let a=i;const l=qt(a,r),c=l!=null;let u=n;c&&(u=Tc(n,l,s),a=Qt(a.length,r)),ye("sum",a,r);const[h,d]=fe(u.shape,a);let p=h;e&&(p=se(h,i));const f=H(d),g=H(n.shape)/f,x=et({inputs:{x:u},attrs:{shape:[g,f]},backend:s}),b=Lh(n.dtype),w=go(x,b,"sum",s),y=et({inputs:{x:w},attrs:{shape:p},backend:s});return s.disposeIntermediateTensorInfo(x),s.disposeIntermediateTensorInfo(w),c&&s.disposeIntermediateTensorInfo(u),y}function Ec(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{axis:r,keepDims:i}=s;return IB(o,r,i,e)}const vB={kernelName:Kl,backendName:"webgl",kernelFunc:Ec};function Ae(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{perm:r}=s,i=e,a=o.shape.length,l=new Array(a);for(let u=0;u<l.length;u++)l[u]=o.shape[r[u]];let c;if(i.shouldExecuteOnCPU([o])){const h=i.texData.get(o.dataId).values,d=Ip(h,o.shape,o.dtype,r,l);c=i.makeTensorInfo(l,o.dtype);const p=i.texData.get(c.dataId);p.values=d}else c=Tc(o,r,i);return c}const kB={kernelName:ko,backendName:"webgl",kernelFunc:Ae};const Gy=1e3;function Ja({a:n,b:t,transposeA:e,transposeB:s,backend:o,bias:r=null,preluActivationWeights:i=null,leakyreluAlpha:a=0,activation:l=null}){const c=n.shape.length,u=t.shape.length,h=e?n.shape[c-2]:n.shape[c-1],d=s?t.shape[u-1]:t.shape[u-2],p=e?n.shape[c-1]:n.shape[c-2],f=s?t.shape[u-2]:t.shape[u-1],m=n.shape.slice(0,-2),g=t.shape.slice(0,-2),x=H(m),b=H(g),y=mt(n.shape.slice(0,-2),t.shape.slice(0,-2)).concat([p,f]);v(h===d,()=>`Error in matMul: inner shapes (${h}) and (${d}) of Tensors with shapes ${n.shape} and ${t.shape} and transposeA=${e} and transposeB=${s} must match.`);const C=e?[x,h,p]:[x,p,h],I=s?[b,f,d]:[b,d,f],N=et({inputs:{x:n},backend:o,attrs:{shape:C}}),T=et({inputs:{x:t},backend:o,attrs:{shape:I}}),k=[N,T],S=Math.max(x,b),$=e?N.shape[1]:N.shape[2],R=r!=null,A=i!=null,O=l==="leakyrelu",M=l!=null?Er(l,!0):null,z=R||A||O||M!=null;let G;if((p===1||f===1)&&$>Gy&&z===!1){let U=N,q=T;e&&(U=Ae({inputs:{x:N},backend:o,attrs:{perm:[0,2,1]}}),k.push(U)),s&&(q=Ae({inputs:{x:T},backend:o,attrs:{perm:[0,2,1]}}),k.push(q));const K=f!==1,Y=f===1;let Z=U;K&&(Z=et({inputs:{x:U},backend:o,attrs:{shape:[S,$,1]}}),k.push(Z));const tt=f===1?2:1;let Q=q;Y&&(Q=et({inputs:{x:q},backend:o,attrs:{shape:[S,1,$]}}),k.push(Q));const ot=kp({inputs:{a:Z,b:Q},backend:o});G=Ec({inputs:{x:ot},backend:o,attrs:{axis:tt,keepDims:!0}}),k.push(ot)}else{const U=Ue(n.dtype,t.dtype),q=new Uy(C,I,[S,p,f],e,s,R,M,A,O),K=[N,T];if(r!=null&&K.push(r),A&&K.push(i),O){const Y=o.makeTensorInfo([],"float32",$s(a,"float32"));K.push(Y),k.push(Y)}G=o.runWebGLProgram(q,K,U)}const V=et({inputs:{x:G},backend:o,attrs:{shape:y}});k.push(G);for(const U of k)o.disposeIntermediateTensorInfo(U);return V}function SB(n){const{inputs:t,backend:e,attrs:s}=n,{a:o,b:r,bias:i,preluActivationWeights:a}=t,{transposeA:l,transposeB:c,activation:u,leakyreluAlpha:h}=s;return Ja({a:o,b:r,transposeA:l,transposeB:c,backend:e,bias:i,preluActivationWeights:a,leakyreluAlpha:h,activation:u})}const NB={kernelName:Sa,backendName:"webgl",kernelFunc:SB};const mm="return abs(x);";function TB(n){const{inputs:t,backend:e}=n,{x:s}=t;if(e.shouldExecuteOnCPU([s])&&s.dtype!=="complex64"){const r=e.texData.get(s.dataId),i=Oy(r.values);return e.makeTensorInfo(s.shape,s.dtype,i)}let o;return W().getBool("WEBGL_PACK_UNARY_OPERATIONS")?o=new us(s.shape,mm):o=new Rn(s.shape,mm),e.runWebGLProgram(o,[s],s.dtype)}const EB={kernelName:el,backendName:"webgl",kernelFunc:TB};const RB=hn+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return acos(x);
`,AB=St({opSnippet:RB}),DB={kernelName:Fr,backendName:"webgl",kernelFunc:AB};const FB=hn+`
  if (x < 1.0) return NAN;
return log(x + sqrt(x * x - 1.0));`,_B=St({opSnippet:FB}),OB={kernelName:_r,backendName:"webgl",kernelFunc:_B};const gm="return a + b;",MB=we({opSnippet:gm,packedOpSnippet:gm,supportsComplex:!0,cpuKernelImpl:j3}),LB={kernelName:Go,backendName:"webgl",kernelFunc:MB};class PB{constructor(t,e){this.outputShape=[],this.outputShape=t,this.variableNames=e.map((r,i)=>`T${i}`);const s=[];this.variableNames.forEach(r=>{s.push(`float v${r} = get${r}AtOutCoords();`)});const o=this.variableNames.map(r=>`v${r}`).join(" + ");this.userCode=`
      void main() {
        ${s.join(`
        `)}

        float result = ${o};
        setOutput(result);
      }
    `}}class zB{constructor(t,e){this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t,this.variableNames=e.map((r,i)=>`T${i}`);const s=[];this.variableNames.forEach(r=>{s.push(`vec4 v${r} = get${r}AtOutCoords();`)});const o=this.variableNames.map(r=>`v${r}`).join(" + ");this.userCode=`
      void main() {
        ${s.join(`
        `)}

        vec4 result = ${o};
        setOutput(result);
      }
    `}}function Ca(n){const{inputs:t,backend:e}=n,s=t;if(s.length===1)return He({inputs:{x:s[0]},backend:e});if(s.length>W().getNumber("WEBGL_MAX_TEXTURES_IN_SHADER")){const l=Math.floor(s.length/2),c=Ca({inputs:s.slice(0,l),backend:e}),u=Ca({inputs:s.slice(l),backend:e});return Ca({inputs:[c,u],backend:e})}const o=s.map(l=>l.dtype).reduce((l,c)=>Ue(l,c)),r=s.map(l=>l.shape),a=W().getBool("WEBGL_PACK")?new zB(s[0].shape,r):new PB(s[0].shape,r);return e.runWebGLProgram(a,s,o)}const BB={kernelName:Xu,backendName:"webgl",kernelFunc:Ca};function VB(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{axis:r,keepDims:i}=s,a=o.shape.length,l=Ct(r,o.shape);let c=l;const u=qt(c,a);let h=o;u!=null&&(h=Ae({inputs:{x:o},backend:e,attrs:{perm:u}}),c=Qt(c.length,a)),ye("all",c,a);const[d,p]=fe(h.shape,c),f=H(p),m=et({inputs:{x:h},backend:e,attrs:{shape:[-1,f]}}),g=go(m,m.dtype,"all",e);let x;if(i){const b=se(d,l);x=et({inputs:{x:g},backend:e,attrs:{shape:b}})}else x=et({inputs:{x:g},backend:e,attrs:{shape:d}});return e.disposeIntermediateTensorInfo(m),e.disposeIntermediateTensorInfo(g),u!=null&&e.disposeIntermediateTensorInfo(h),x}const WB={kernelName:Yu,backendName:"webgl",kernelFunc:VB};function UB(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{axis:r,keepDims:i}=s,a=o.shape.length,l=Ct(r,o.shape);let c=l;const u=qt(c,a);let h=o;u!=null&&(h=Ae({inputs:{x:o},backend:e,attrs:{perm:u}}),c=Qt(c.length,a)),ye("any",c,a);const[d,p]=fe(h.shape,c),f=H(p),m=et({inputs:{x:h},backend:e,attrs:{shape:[-1,f]}}),g=go(m,m.dtype,"any",e);let x;if(i){const b=se(d,l);x=et({inputs:{x:g},backend:e,attrs:{shape:b}})}else x=et({inputs:{x:g},backend:e,attrs:{shape:d}});return e.disposeIntermediateTensorInfo(m),e.disposeIntermediateTensorInfo(g),u!=null&&e.disposeIntermediateTensorInfo(h),x}const GB={kernelName:Zu,backendName:"webgl",kernelFunc:UB};class HB{constructor(t,e,s){this.variableNames=["A"];const{windowSize:o,batchSize:r,outSize:i}=t;s||this.variableNames.push("bestIndicesA"),this.outputShape=[r,i];const a=e==="max"?">":"<",l=s?"inOffset + i;":"round(getBestIndicesA(batch, inOffset + i));";this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * ${o};

        int bestIndex = inOffset;
        float bestValue = getA(batch, bestIndex);

        for (int i = 0; i < ${o}; i++) {
          int inIdx = ${l};
          float candidate = getA(batch, inIdx);
          if (candidate ${a} bestValue) {
            bestValue = candidate;
            bestIndex = inIdx;
          }
        }
        setOutput(float(bestIndex));
      }
    `}}class jB{constructor(t,e,s,o){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,v(t.length>2,()=>`Packed arg${s.charAt(0).toUpperCase()+s.slice(1)} supports only inputs with rank above 2.`);const r=t[t.length-1],i=Math.ceil(r/e);this.outputShape=t.slice(0,-1),i>1&&this.outputShape.push(i),o||this.variableNames.push("bestIndicesA");const a=this.outputShape,l=a.length,c=_t(l),u=Ee("coords",l);let h,d;if(i===1){d=l+1;const T=_t(d);h=`
        ${T} sourceLocR = ${T}(${u.join()}, 0);
        ++${u[l-1]};
        ${T} sourceLocG = ${T}(${u.join()}, 0);
        ++${u[l-2]};
        ${T} sourceLocA = ${T}(${u.join()}, 0);
        --${u[l-1]};
        ${T} sourceLocB = ${T}(${u.join()}, 0);
        --${u[l-2]};`}else d=l,h=`
        ${c} sourceLocR = coords;
        ++${u[l-1]};
        ${c} sourceLocG = coords;
        ++${u[l-2]};
        ${c} sourceLocA = coords;
        --${u[l-1]};
        ${c} sourceLocB = coords;
        --${u[l-2]};`;const p=["x","y","z","w","u","v"].slice(0,d),f="."+p[d-1],m=p.map(T=>"int "+T),g=Ee("sourceLocR",d-1).concat("inIdx.r"),x=Ee("sourceLocG",d-1).concat("inIdx.g"),b=Ee("sourceLocB",d-1).concat("inIdx.b"),w=Ee("sourceLocA",d-1).concat("inIdx.a"),y=s==="max"?"greaterThan":"lessThan",C=o?"":`
          inIdx = round(vec4(getBestIndicesAChannel(${g.join()}),
                             getBestIndicesAChannel(${x.join()}),
                             getBestIndicesAChannel(${b.join()}),
                             getBestIndicesAChannel(${w.join()})));`,I=`vec4(
            getAChannel(${g.join()}),
            hasNextCol ? getAChannel(${x.join()}) : 0.,
            hasNextRow ? getAChannel(${b.join()}) : 0.,
            hasNextRow && hasNextCol ? getAChannel(${w.join()}) : 0.)`,N=o?"":`
      float getBestIndicesAChannel(${m.join()}) {
        return getChannel(getBestIndicesA(${p.join()}),
                                          vec2(${p.slice(-2).join()}));
      }`;this.userCode=`
      float getAChannel(${m.join()}) {
        return getChannel(getA(${p.join()}),
                               vec2(${p.slice(-2).join()}));
      }
      ${N}
      void main() {
        ${c} coords = getOutputCoords();
        bool hasNextCol = ${u[l-1]} < ${a[l-1]-1};
        bool hasNextRow = ${u[l-2]} < ${a[l-2]-1};
        ${h}
        ivec4 srcIdx = ivec4(sourceLocR${f}, sourceLocG${f},
          sourceLocB${f}, sourceLocA${f}) * ${e};
        ivec4 inIdx = srcIdx;
        vec4 bestIndex = vec4(inIdx);
        vec4 bestValue = ${I};

        for (int i = 0; i < ${e}; i++) {
          inIdx = srcIdx;
          ${C}
          vec4 candidate = ${I};
          bvec4 nan = isnan(candidate);
          bvec4 replace = bvec4(
            vec4(${y}(candidate, bestValue)) * (vec4(1.0) - vec4(nan)));

          bestValue = vec4(replace.x  ? candidate.x : bestValue.x,
                           replace.y  ? candidate.y : bestValue.y,
                           replace.z  ? candidate.z : bestValue.z,
                           replace.w  ? candidate.w : bestValue.w);
          bestIndex = mix(bestIndex, vec4(inIdx), vec4(replace));
          srcIdx++;
        }
        setOutput(bestIndex);
      }
    `}}function Hy(n,t,e,s=null){let o=t.shape[0],r=t.shape[1];s!=null&&(o=s.shape[0],r=s.shape[1]);const i=hc(r),a={windowSize:i,inSize:r,batchSize:o,outSize:Math.ceil(r/i)},l=new HB(a,e,s==null),c=[t];s!=null&&c.push(s);const u=n.runWebGLProgram(l,c,"int32");if(u.shape[1]===1)return u;const h=Hy(n,t,e,u);return n.disposeIntermediateTensorInfo(u),h}function jy(n,t,e,s=null){const o=s!=null?s.shape:t.shape,r=o[o.length-1],i=hc(r),a=new jB(o,i,e,s==null),l=s==null?[t]:[t,s],c=n.runWebGLProgram(a,l,"int32");if(c.shape.length===t.shape.length){const u=jy(n,t,e,c);return n.disposeIntermediateTensorInfo(c),u}return c}function qy(n,t,e,s){const o=[e];if(ye("arg"+s.charAt(0).toUpperCase()+s.slice(1),o,t.shape.length),!W().getBool("WEBGL_PACK_REDUCE")||t.shape.length<=2){const r=[],i=n.texData.get(t.dataId),a=i!==null&&i.isPacked;let l=t;a&&(l=n.unpackTensor(t),r.push(l));const[c,u]=fe(l.shape,o),h=H(u),d=et({inputs:{x:l},backend:n,attrs:{shape:[-1,h]}});r.push(d);const p=Hy(n,d,s);r.push(p);const f=et({inputs:{x:p},backend:n,attrs:{shape:c}});return r.forEach(m=>n.disposeIntermediateTensorInfo(m)),f}return jy(n,t,s)}function qB(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{axis:r}=s;let i=Ct(r,o.shape);const a=qt(i,o.shape.length);let l=o;const c=[];a!=null&&(l=Ae({inputs:{x:o},backend:e,attrs:{perm:a}}),c.push(l),i=Qt(i.length,l.shape.length)),ye("argMax",[i[0]],l.shape.length);const u=qy(e,l,i[0],"max");return c.forEach(h=>e.disposeIntermediateTensorInfo(h)),u}const KB={kernelName:nl,backendName:"webgl",kernelFunc:qB};function XB(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{axis:r}=s;let i=Ct(r,o.shape);const a=qt(i,o.shape.length);let l=o;const c=[];a!=null&&(l=Ae({inputs:{x:o},backend:e,attrs:{perm:a}}),c.push(l),i=Qt(i.length,l.shape.length)),ye("argMin",[i[0]],l.shape.length);const u=qy(e,l,i[0],"min");return c.forEach(h=>e.disposeIntermediateTensorInfo(h)),u}const YB={kernelName:sl,backendName:"webgl",kernelFunc:XB};const ZB=hn+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return asin(x);
`,JB=St({opSnippet:ZB}),QB={kernelName:Or,backendName:"webgl",kernelFunc:JB};const tV=hn+"return log(x + sqrt(x * x + 1.0));",eV=St({opSnippet:tV}),nV={kernelName:Mr,backendName:"webgl",kernelFunc:eV};const sV=hn+`
  return atan(x);
`,oV=St({opSnippet:sV}),rV={kernelName:Lr,backendName:"webgl",kernelFunc:oV};const iV=vp+`
  return atan(a, b);
`,aV=`
  vec4 result = atan(a, b);
  bvec4 isNaNA = isnan(a);
  bvec4 isNaNB = isnan(b);
  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);
  `+mo+`
  return result;
`,lV=we({opSnippet:iV,packedOpSnippet:aV}),cV={kernelName:zr,backendName:"webgl",kernelFunc:lV};const uV=hn+`
  if ((x < -1.0) || (x > 1.0)) return NAN;
return (log(1.0 + x) - log(1.0 - x)) / 2.0;`,hV=St({opSnippet:uV}),dV={kernelName:Pr,backendName:"webgl",kernelFunc:hV};class Rr{constructor(t,e,s,o=!1,r=!1){if(this.variableNames=["x"],e==="avg"&&s)throw new Error("Cannot compute positions for average pool.");const i=t.filterWidth,a=t.strideHeight,l=t.strideWidth,c=t.dilationHeight,u=t.dilationWidth,h=t.effectiveFilterHeight,d=t.effectiveFilterWidth,p=t.padInfo.top,f=t.padInfo.left;this.outputShape=t.outShape;const m=e==="avg",g=`((batch  * ${t.inHeight} + xR) * ${t.inWidth} + xC) * ${t.inChannels} + d`,x=`(xR * ${t.inWidth} + xC) * ${t.inChannels} + d`;let b="0.0";if(m||(b="-1.0 / 1e-20"),s){this.userCode=`
        const ivec2 strides = ivec2(${a}, ${l});
        const ivec2 pads = ivec2(${p}, ${f});

        void main() {
          ivec4 coords = getOutputCoords();
          int batch = coords[0];
          int d = coords[3];

          ivec2 xRCCorner = coords.yz * strides - pads;
          int xRCorner = xRCCorner.x;
          int xCCorner = xRCCorner.y;

          // max/min x(?, ?, d) to get y(yR, yC, d).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;
          float avgValue = 0.0;

          for (int wR = 0; wR < ${h};
              wR += ${c}) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= ${t.inHeight}) {
              continue;
            }

            for (int wC = 0; wC < ${d};
                wC += ${u}) {
              int xC = xCCorner + wC;

              if (xC < 0 || xC >= ${t.inWidth}) {
                continue;
              }

              float value = getX(batch, xR, xC, d);

              // If a min / max value has already been found, use it. If not,
              // use the current value.
              float currMinMaxValue = mix(
                  value, minMaxValue, minMaxValueFound);
              if (value >= currMinMaxValue) {
                minMaxValue = value;
                minMaxValueFound = 1.0;
                minMaxPosition = ${o?r?g:x:`wR * ${d} + wC`};
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;return}const w="max";let y=`${e}(${e}(${e}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;e==="avg"&&(y="avgValue / max(count, 1.0)");const C=Math.floor(i/4)*4,I=i%4,N=`
      if (${m}) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = ${w}(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec2 strides = ivec2(${a}, ${l});
      const ivec2 pads = ivec2(${p}, ${f});
      const float initializationValue = ${b};
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xR, int xC, int d) {
        if (xC < 0 || xC >= ${t.inWidth}) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xR, xC, d);
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d = coords[3];

        ivec2 xRCCorner = coords.yz * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // max/min x(?, ?, d) to get y(yR, yC, d).
        // ? = to be determined
        vec4 minMaxValue = vec4(${b});
        float avgValue = 0.0;
        count = 0.0;

        for (int wR = 0; wR < ${h};
            wR += ${c}) {
          int xR = xRCorner + wR;

          if (xR < 0 || xR >= ${t.inHeight}) {
            continue;
          }

          for (int wC = 0; wC < ${C}; wC += 4) {
            int xC = xCCorner + wC * ${u};

            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + ${u}, d),
              getValue(batch, xR, xC + 2 * ${u}, d),
              getValue(batch, xR, xC + 3 * ${u}, d)
            );

            ${N}
          }

          int xC = xCCorner + ${C};
          if (${I===1}) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              initializationValue,
              initializationValue,
              initializationValue
            );

            ${N}
          } else if (${I===2}) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + ${u}, d),
              initializationValue,
              initializationValue
            );

            ${N}
          } else if (${I===3}) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + ${u}, d),
              getValue(batch, xR, xC + 2 * ${u}, d),
              initializationValue
            );

            ${N}
          }
        }
        setOutput(${y});
      }
    `}}class Sp{constructor(t,e,s,o=!1,r=!1){if(this.variableNames=["x"],e==="avg"&&s)throw new Error("Cannot compute positions for average pool.");const i=t.filterWidth,a=t.strideDepth,l=t.strideHeight,c=t.strideWidth,u=t.dilationDepth,h=t.dilationHeight,d=t.dilationWidth,p=t.effectiveFilterDepth,f=t.effectiveFilterHeight,m=t.effectiveFilterWidth,g=t.padInfo.front,x=t.padInfo.top,b=t.padInfo.left;this.outputShape=t.outShape;const w=e==="avg";let y="0.0";if(w||(y="-1.0 / 1e-20"),s){this.userCode=`
        const ivec3 strides =
            ivec3(${a}, ${l}, ${c});
        const ivec3 pads = ivec3(${g}, ${x}, ${b});

        void main() {
          ivec5 coords = getOutputCoords();
          int batch = coords.x;
          int ch = coords.u;

          ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
          int xDCorner = xCorner.x;
          int xRCorner = xCorner.y;
          int xCCorner = xCorner.z;

          // max/min x(?, ?, ?, ch) to get y(yD, yR, yC, ch).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;

          for (int wD = 0; wD < ${p};
              wD += ${u}) {
            int xD = xDCorner + wD;

            if (xD < 0 || xD >= ${t.inDepth}) {
              continue;
            }

            for (int wR = 0; wR < ${f};
                wR += ${h}) {
              int xR = xRCorner + wR;

              if (xR < 0 || xR >= ${t.inHeight}) {
                continue;
              }

              for (int wC = 0; wC < ${m};
                  wC += ${d}) {
                int xC = xCCorner + wC;

                if (xC < 0 || xC >= ${t.inWidth}) {
                  continue;
                }

                float value = getX(batch, xD, xR, xC, ch);

                // If a min / max value has already been found, use it. If not,
                // use the current value.
                float currMinMaxValue = mix(
                    value, minMaxValue, minMaxValueFound);
                if (value >= currMinMaxValue) {
                  minMaxValue = value;
                  minMaxValueFound = 1.0;
                  minMaxPosition = ${o?r?`(((batch * ${t.inDepth} + xD) * ${t.inHeight} + xR) * ${t.inWidth} + xC) * ${t.inChannels} + ch`:`((xD * ${t.inHeight} + xR) * ${t.inWidth} + xC) * ${t.inChannels} + ch`:`wD * ${f} * ${m} +
                      wR * ${m} + wC`};
                }
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;return}const C="max";let I=`${e}(${e}(${e}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;e==="avg"&&(I="avgValue / max(count, 1.0)");const N=Math.floor(i/4)*4,T=i%4,k=`
      if (${w}) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = ${C}(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec3 strides =
        ivec3(${a}, ${l}, ${c});
      const ivec3 pads = ivec3(${g}, ${x}, ${b});
      const float initializationValue = ${y};
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xD, int xR, int xC, int ch) {
        if (xC < 0 || xC >= ${t.inWidth}) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xD, xR, xC, ch);
      }

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xDCorner = xCorner.x;
        int xRCorner = xCorner.y;
        int xCCorner = xCorner.z;

        // max/min x(?, ?, ?, d) to get y(yD, yR, yC, ch).
        // ? = to be determined
        vec4 minMaxValue = vec4(${y});
        float avgValue = 0.0;
        count = 0.0;

        for (int wD = 0; wD < ${p};
            wD += ${u}) {
          int xD = xDCorner + wD;

          if (xD < 0 || xD >= ${t.inDepth}) {
            continue;
          }

          for (int wR = 0; wR < ${f};
            wR += ${h}) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= ${t.inHeight}) {
              continue;
            }

            for (int wC = 0; wC < ${N}; wC += 4) {
              int xC = xCCorner + wC * ${d};

              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ${d}, ch),
                getValue(batch, xD, xR, xC + 2 * ${d}, ch),
                getValue(batch, xD, xR, xC + 3 * ${d}, ch)
              );

              ${k}
            }

            int xC = xCCorner + ${N};
            if (${T===1}) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                initializationValue,
                initializationValue,
                initializationValue
              );

              ${k}
            } else if (${T===2}) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ${d}, ch),
                initializationValue,
                initializationValue
              );

              ${k}
            } else if (${T===3}) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ${d}, ch),
                getValue(batch, xD, xR, xC + 2 * ${d}, ch),
                initializationValue
              );

              ${k}
            }
          }
        }
        setOutput(${I});
      }
    `}}function pV(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t;ji(o,"avgPool");const{filterSize:r,strides:i,pad:a,dimRoundingMode:l}=s,c=1;v(ve(i,c),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${i} and dilations '${c}'`);const u=cn(o.shape,r,i,c,a,l);if(u.filterWidth===1&&u.filterHeight===1&&Et(u.inShape,u.outShape))return He({inputs:{x:o},backend:e});const h=new Rr(u,"avg",!1);return e.runWebGLProgram(h,[o],"float32")}const fV={kernelName:ol,backendName:"webgl",kernelFunc:pV};function mV(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{filterSize:r,strides:i,pad:a,dimRoundingMode:l,dataFormat:c}=s,u=[1,1,1],h=Qn(o.shape,r,i,u,a,l,c),d=new Sp(h,"avg",!1);return e.runWebGLProgram(d,[o],"float32")}const gV={kernelName:rl,backendName:"webgl",kernelFunc:mV};class xV{constructor(t){this.variableNames=["dy"],this.outputShape=t.inShape;const e=t.filterHeight,s=t.filterWidth,o=t.strideHeight,r=t.strideWidth,i=t.dilationHeight,a=t.dilationWidth,l=t.effectiveFilterHeight,c=t.effectiveFilterWidth,u=l-1-t.padInfo.top,h=c-1-t.padInfo.left,d=1/(e*s);this.userCode=`
      const ivec2 pads = ivec2(${u}, ${h});
      const float avgMultiplier = float(${d});

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${l};
            wR += ${i}) {
          float dyR = float(dyRCorner + wR) / ${o}.0;

          if (dyR < 0.0 || dyR >= ${t.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < ${c};
            wC+= ${a}) {
            float dyC = float(dyCCorner + wC) / ${r}.0;

            if (dyC < 0.0 || dyC >= ${t.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);

            dotProd += dyValue * avgMultiplier;
          }
        }
        setOutput(dotProd);
      }
    `}}class bV{constructor(t){this.variableNames=["dy"],this.outputShape=t.inShape;const e=t.filterDepth,s=t.filterHeight,o=t.filterWidth,r=t.strideDepth,i=t.strideHeight,a=t.strideWidth,l=t.dilationDepth,c=t.dilationHeight,u=t.dilationWidth,h=t.effectiveFilterDepth,d=t.effectiveFilterHeight,p=t.effectiveFilterWidth,f=h-1-t.padInfo.front,m=d-1-t.padInfo.top,g=p-1-t.padInfo.left,x=1/(e*s*o);this.userCode=`
      const ivec3 pads = ivec3(${f}, ${m}, ${g});
      const float avgMultiplier = float(${x});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, d) with pos mask(:, :, :, ch) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < ${h};
            wD += ${l}) {
          float dyD = float(dyDCorner + wD) / ${r}.0;

          if (dyD < 0.0 || dyD >= ${t.outDepth}.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < ${d};
              wR += ${c}) {
            float dyR = float(dyRCorner + wR) / ${i}.0;

            if (dyR < 0.0 || dyR >= ${t.outHeight}.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < ${p};
                wC += ${u}) {
              float dyC = float(dyCCorner + wC) / ${a}.0;

              if (dyC < 0.0 || dyC >= ${t.outWidth}.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);

              dotProd += dyValue * avgMultiplier;
            }
          }
        }
        setOutput(dotProd);
      }
    `}}function yV(n){const{inputs:t,backend:e,attrs:s}=n,{dy:o,input:r}=t,i=r,{filterSize:a,strides:l,pad:c,dimRoundingMode:u}=s,h=[1,1,1],d=Qn(i.shape,a,l,h,c,u),p=new bV(d);return e.runWebGLProgram(p,[o],i.dtype)}const wV={kernelName:Qu,backendName:"webgl",kernelFunc:yV};function CV(n){const{inputs:t,backend:e,attrs:s}=n,{dy:o,input:r}=t,i=r;ji([o,r],"avgPoolGrad");const{filterSize:a,strides:l,pad:c}=s,u=cn(i.shape,a,l,1,c),h=new xV(u);return e.runWebGLProgram(h,[o],i.dtype)}const $V={kernelName:Ju,backendName:"webgl",kernelFunc:CV};function IV(n){const{inputs:t,backend:e,attrs:s}=n,{a:o,b:r}=t,{transposeA:i,transposeB:a}=s;return Ja({a:o,b:r,transposeA:i,transposeB:a,backend:e})}const vV={kernelName:il,backendName:"webgl",kernelFunc:IV};class kV{constructor(t,e,s,o,r,i){this.outputShape=[],this.variableNames=["x","mean","variance"],mt(t,e),mt(t,s);let a="0.0";o!=null&&(mt(t,o),this.variableNames.push("offset"),a="getOffsetAtOutCoords()");let l="1.0";r!=null&&(mt(t,r),this.variableNames.push("scale"),l="getScaleAtOutCoords()"),this.outputShape=t,this.userCode=`
      void main() {
        float x = getXAtOutCoords();
        float mean = getMeanAtOutCoords();
        float variance = getVarianceAtOutCoords();
        float offset = ${a};
        float scale = ${l};
        float inv = scale * inversesqrt(variance + float(${i}));
        setOutput(dot(vec3(x, -mean, offset), vec3(inv, inv, 1)));
      }
    `}}class SV{constructor(t,e,s,o,r,i){this.packedInputs=!0,this.packedOutput=!0,this.variableNames=["x","mean","variance"],mt(t,e),mt(t,s);let a="vec4(0.0)";o!=null&&(mt(t,o),this.variableNames.push("offset"),a="getOffsetAtOutCoords()");let l="vec4(1.0)";r!=null&&(mt(t,r),this.variableNames.push("scale"),l="getScaleAtOutCoords()"),this.outputShape=t,this.userCode=`
      void main() {
        vec4 offset = ${a};
        vec4 scale = ${l};

        vec4 x = getXAtOutCoords();
        vec4 mean = getMeanAtOutCoords();
        vec4 variance = getVarianceAtOutCoords();

        vec4 inv = scale * inversesqrt(variance + vec4(${i}));

        setOutput((x - mean) * inv + offset);
      }
    `}}const NV=({inputs:n,backend:t,attrs:e})=>{const{x:s,mean:o,variance:r,offset:i,scale:a}=n;v(o.shape.length===r.shape.length,()=>"Batch normalization gradient requires mean and variance to have equal ranks."),v(i==null||o.shape.length===i.shape.length,()=>"Batch normalization gradient requires mean and offset to have equal ranks."),v(a==null||o.shape.length===a.shape.length,()=>"Batch normalization gradient requires mean and scale to have equal ranks.");let{varianceEpsilon:l}=e;l==null&&(l=.001);const c=[s,o,r];let u=null;i!=null&&(u=i.shape,c.push(i));let h=null;a!=null&&(h=a.shape,c.push(a));const d=W().getBool("WEBGL_PACK_NORMALIZATION")?new SV(s.shape,o.shape,r.shape,u,h,l):new kV(s.shape,o.shape,r.shape,u,h,l);return t.runWebGLProgram(d,c,c[0].dtype)},TV={kernelName:bl,backendName:"webgl",kernelFunc:NV};class EV{constructor(t){this.variableNames=["source"],this.outputShape=t,this.rank=t.length;const e=_t(this.rank);this.customUniforms=[{name:"start",arrayIndex:this.rank,type:"int"}];const s=RV(this.rank);let o;const r=t.map((i,a)=>`sourceLoc.${Lu[a]} = start[${a}] + coords.${Lu[a]};`);o=`
        ${e} sourceLoc;
        ${e} coords = getOutputCoords();
        ${r.join(`
`)}
      `,this.userCode=`
      void main() {
        ${o}
        setOutput(getSource(${s}));
      }
    `}}const Lu=["x","y","z","w","u","v"];function RV(n){if(n===1)return"sourceLoc";if(n<=6)return Lu.slice(0,n).map(t=>"sourceLoc."+t).join(",");throw Error(`Slicing for rank ${n} is not yet supported`)}class AV{constructor(t){this.variableNames=["source"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t,this.rank=t.length,this.customUniforms=[{name:"start",arrayIndex:this.rank,type:"int"}];const e=_t(this.rank),s=Ee("coords",this.rank),o=Ee("sourceLoc",this.rank),r=this.rank===1?"sourceLoc":`vec2(${o.slice(-2).join()})`,i=`getChannel(getSource(${o.join()}), ${r})`,a=`
      result.x = ${i};
      if (++${s[this.rank-1]} < ${t[this.rank-1]}) {
        ++${o[this.rank-1]};
        result.y = ${i};
        --${o[this.rank-1]};
      }
    `,l=this.rank===1?"":`
      --${s[this.rank-1]};
      if (++${s[this.rank-2]} < ${t[this.rank-2]}) {
        ++${o[this.rank-2]};
        result.z = ${i};
        if (++${s[this.rank-1]} < ${t[this.rank-1]}) {
          ++${o[this.rank-1]};
          result.w = ${i};
        }
      }
    `,c=this.rank<=4?`sourceLoc = coords +
            ${e}(${t.map((u,h)=>`start[${h}]`).join()});`:t.map((u,h)=>`${o[h]} = ${s[h]} + start[${h}];`).join(`
`);this.userCode=`
      void main() {
        ${e} coords = getOutputCoords();
        ${e} sourceLoc;
        ${c}
        vec4 result = vec4(0.);
        ${a}
        ${l}
        setOutput(result);
      }
    `}}function DV(n,t,e,s){const o=s.texData.get(n.dataId),r=s.makeTensorInfo(e,n.dtype),i=s.texData.get(r.dataId);Object.assign(i,o),i.refCount=1,i.shape=e,i.dtype=n.dtype;let a=Cd(t,lt(n.shape));o.slice&&(a+=o.slice.flatOffset),i.slice={flatOffset:a,origDataId:o.slice&&o.slice.origDataId||n.dataId};const l=s.dataRefCount.get(i.slice.origDataId)||1;return s.dataRefCount.set(i.slice.origDataId,l+1),r}function sr(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{begin:r,size:i}=s,[a,l]=uc(o,r,i);if(bd(o,a,l),H(l)===0)return e.makeTensorInfo(l,o.dtype,[]);if(e.shouldExecuteOnCPU([o])||o.dtype==="string"){const h=e.texData.get(o.dataId),d=vz(h.values,a,l,o.shape,o.dtype);return e.makeTensorInfo(l,o.dtype,d)}const{isPacked:c}=e.texData.get(o.dataId),u=wd(o.shape,a,l);if(c||!u){const h=W().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new AV(l):new EV(l),d=[a];return e.runWebGLProgram(h,[o],o.dtype,d)}return e.uploadToGPU(o.dataId),DV(o,a,l,e)}const FV={kernelName:ql,backendName:"webgl",kernelFunc:sr};const _V=n=>{const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{blockShape:r,crops:i}=s;v(o.shape.length<=4,()=>"batchToSpaceND for rank > 4 with a WebGL backend not implemented yet");const a=r.reduce((b,w)=>b*w),l=Fi(o.shape,r,a),c=_i(l.length,r.length),u=Oi(o.shape,r,a),h=Sd(i,r.length),d=Nd(u,i,r.length),p=[],f=et({inputs:{x:o},backend:e,attrs:{shape:l}}),m=Ae({inputs:{x:f},backend:e,attrs:{perm:c}}),g=et({inputs:{x:m},backend:e,attrs:{shape:u}}),x=sr({inputs:{x:g},backend:e,attrs:{begin:h,size:d}});return p.push(f),p.push(m),p.push(g),p.forEach(b=>e.disposeIntermediateTensorInfo(b)),x},OV={kernelName:al,backendName:"webgl",kernelFunc:_V};function MV(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,weights:r}=t,{size:i}=s,a=e.readSync(o.dataId),l=e.readSync(r.dataId),c=_y(a,l,r.dtype,r.shape,i);return e.makeTensorInfo([i],r.dtype,c)}const LV={kernelName:th,backendName:"webgl",kernelFunc:MV};const PV=`
  int r = int(a.r) & int(b.r);
  int g = int(a.g) & int(b.g);
  int rb = int(a.b) & int(b.b);
  int ra = int(a.a) & int(b.a);
  return vec4(r, g, rb, ra);
`,zV=`
  return float(int(a.r) & int(b.r));
`;function BV(n){const{inputs:t,backend:e}=n,{a:s,b:o}=t,r=W().getBool("WEBGL_PACK_BINARY_OPERATIONS"),i=W().getNumber("WEBGL_VERSION");if(e.shouldExecuteOnCPU([s,o])||i===1){const l=e.texData.get(s.dataId).values,c=e.texData.get(o.dataId).values,[u,h]=K3(s.shape,o.shape,l,c,s.dtype),d=e.makeTensorInfo(h,s.dtype),p=e.texData.get(d.dataId);return p.values=u,d}let a;return r?a=new er(PV,s.shape,o.shape,!1):a=new ro(zV,s.shape,o.shape),e.runWebGLProgram(a,[s,o],s.dtype)}const VV={kernelName:eh,backendName:"webgl",kernelFunc:BV};function WV(n){const{inputs:t,backend:e}=n,{s0:s,s1:o}=t,r=e.readSync(s.dataId),i=e.readSync(o.dataId),a=mt(Array.from(r),Array.from(i));return e.makeTensorInfo([a.length],"int32",Int32Array.from(a))}const UV={kernelName:Vm,backendName:"webgl",kernelFunc:WV};const GV="return float(a != b);",Ky=we({opSnippet:GV,cpuKernelImpl:mz,dtype:"bool"}),HV={kernelName:Ol,backendName:"webgl",kernelFunc:Ky};function Ki(n){const{inputs:t,backend:e}=n,{input:s}=t,o=e.texData.get(s.dataId);return He({inputs:{x:o.complexTensorInfos.real},backend:e})}const jV={kernelName:Nh,backendName:"webgl",kernelFunc:Ki};const qV="return float(int(x));";function KV(n,t){const e=new Rn(n.shape,qV),s=t.runWebGLProgram(e,[n],"int32");return{dataId:s.dataId,shape:s.shape,dtype:s.dtype}}function Pu(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{dtype:r}=s;if(r==="complex64"){if(o.dtype==="complex64")return He({inputs:{x:o},backend:e});const i=de(o.shape),a=Pu({inputs:{x:o},backend:e,attrs:{dtype:"float32"}}),l=Rs({inputs:{real:a,imag:i},backend:e});return i.dispose(),e.disposeIntermediateTensorInfo(a),l}if(o.dtype==="complex64"){const i=Ki({inputs:{input:o},backend:e}),a=Pu({inputs:{x:i},backend:e,attrs:{dtype:r}});return e.disposeIntermediateTensorInfo(i),a}if(!Mm(o.dtype,r)){const i=He({inputs:{x:o},backend:e});return{dataId:i.dataId,shape:i.shape,dtype:r}}if(e.shouldExecuteOnCPU([o])){const i=e.texData.get(o.dataId).values,[a,l,c]=X3(i,o.shape,o.dtype,r);return e.makeTensorInfo(a,l,c)}if(r==="int32")return KV(o,e);if(r==="bool"){const i=e.makeTensorInfo([],"bool",Ce("bool",1)),l=Ky({inputs:{a:o,b:i},backend:e});return e.disposeIntermediateTensorInfo(i),l}throw new Error(`Error in Cast: failed to cast ${o.dtype} to ${r}`)}const XV={kernelName:Br,backendName:"webgl",kernelFunc:Pu};const xm="return ceil(x);",YV=St({opSnippet:xm,packedOpSnippet:xm,cpuKernelImpl:Y3}),ZV={kernelName:Vr,backendName:"webgl",kernelFunc:YV};class JV{constructor(t){this.variableNames=["A"],this.customUniforms=[{name:"minVal",type:"float"},{name:"maxVal",type:"float"}],this.outputShape=t,this.userCode=`

      void main() {
        float value = getAAtOutCoords();
        if (isnan(value)) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, minVal, maxVal));
      }
    `}}class QV{constructor(t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"minVal",type:"float"},{name:"maxVal",type:"float"}],this.outputShape=t,this.userCode=`
      void main() {
        vec4 value = getAAtOutCoords();

        if (any(isnan(value))) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, vec4(minVal), vec4(maxVal)));
      }
    `}}function tW(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{clipValueMin:r,clipValueMax:i}=s;let a;W().getBool("WEBGL_PACK_CLIP")?a=new QV(o.shape):a=new JV(o.shape);const l=[[r],[i]];return e.runWebGLProgram(a,[o],o.dtype,l)}const eW={kernelName:Wr,backendName:"webgl",kernelFunc:tW};class nW{constructor(t){this.variableNames=["real","imag"],this.outputShape=t,this.userCode=`
      void main() {
        float re = abs(getRealAtOutCoords());
        float im = abs(getImagAtOutCoords());
        float mx = max(re, im);

        // sadly the length function in glsl is not underflow-safe
        // (at least not on Intel GPUs). So the safe solution is
        // to ensure underflow-safety in all cases.
        setOutput(
          mx == 0.0 ? 0.0 : mx * length(vec2(1, min(re, im)/mx))
        );
      }
    `}}function bm(n,t){return{dataId:t.dataId,dtype:t.dtype,shape:n.shape}}function sW(n){const{inputs:t,backend:e}=n,{x:s}=t,o=e.texData.get(s.dataId),r=new nW(s.shape),i=[bm(s,o.complexTensorInfos.real),bm(s,o.complexTensorInfos.imag)];return e.runWebGLProgram(r,i,i[0].dtype)}const oW={kernelName:ll,backendName:"webgl",kernelFunc:sW};class rW{constructor(t){this.outputShape=[],this.outputShape=Fn(t,1),this.variableNames=t.map((i,a)=>`T${a}`);const e=new Array(t.length-1);e[0]=t[0][1];for(let i=1;i<e.length;i++)e[i]=e[i-1]+t[i][1];const s=[`if (yC < ${e[0]}) setOutput(getT0(yR, yC));`];for(let i=1;i<e.length;i++){const a=e[i-1];s.push(`else if (yC < ${e[i]}) setOutput(getT${i}(yR, yC-${a}));`)}const o=e.length,r=e[e.length-1];s.push(`else setOutput(getT${o}(yR, yC-${r}));`),this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int yR = coords.x;
        int yC = coords.y;

        ${s.join(`
        `)}
      }
    `}}class iW{constructor(t,e){this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[],this.outputShape=Fn(t,e);const s=this.outputShape,o=s.length,r=_t(o),i=Ee("coords",o),a=["x","y","z","w","u","v"].slice(0,o);this.variableNames=t.map((m,g)=>`T${g}`);const l=new Array(t.length-1);l[0]=t[0][e];for(let m=1;m<l.length;m++)l[m]=l[m-1]+t[m][e];const c=a[e],u=a.slice(-2),h=a.join();let d=`if (${c} < ${l[0]}) {
        return getChannel(
            getT0(${h}), vec2(${u.join()}));
        }`;for(let m=1;m<l.length;m++){const g=l[m-1];d+=`
        if (${c} < ${l[m]}  && ${c} >= ${l[m-1]}) {
          return getChannel(
            getT${m}(${ha(a,c,g)}),
            vec2(${ha(u,c,g)}));
        }`}const p=l.length,f=l[l.length-1];d+=`
        return getChannel(
          getT${p}(${ha(a,c,f)}),
          vec2(${ha(u,c,f)}));`,this.userCode=`
      float getValue(${a.map(m=>"int "+m)}) {
        ${d}
      }

      void main() {
        ${r} coords = getOutputCoords();
        vec4 result = vec4(getValue(${i}), 0., 0., 0.);

        ${i[o-1]} = ${i[o-1]} + 1;
        if (${i[o-1]} < ${s[o-1]}) {
          result.g = getValue(${i});
        }

        ${i[o-2]} = ${i[o-2]} + 1;
        if (${i[o-2]} < ${s[o-2]}) {
          result.a = getValue(${i});
        }

        ${i[o-1]} = ${i[o-1]} - 1;
        if (${i[o-2]} < ${s[o-2]} &&
            ${i[o-1]} < ${s[o-1]}) {
          result.b = getValue(${i});
        }
        setOutput(result);
      }
    `}}function ha(n,t,e){const s=n.indexOf(t);return n.map((r,i)=>i===s?`${r} - ${e}`:r).join()}function Rc(n){const{inputs:t,backend:e}=n,{input:s}=t,o=e.texData.get(s.dataId);return He({inputs:{x:o.complexTensorInfos.imag},backend:e})}const aW={kernelName:bh,backendName:"webgl",kernelFunc:Rc};function gr(n,t,e){const s=n[0].dtype;if(s==="complex64"){const p=n.map(b=>Ki({inputs:{input:b},backend:e})),f=n.map(b=>Rc({inputs:{input:b},backend:e})),m=gr(p,t,e),g=gr(f,t,e),x=Rs({inputs:{real:m,imag:g},backend:e});return p.forEach(b=>e.disposeIntermediateTensorInfo(b)),f.forEach(b=>e.disposeIntermediateTensorInfo(b)),e.disposeIntermediateTensorInfo(m),e.disposeIntermediateTensorInfo(g),x}let o=e.shouldExecuteOnCPU(n);if(s==="string"&&(o=!0),o){const p=n.map(y=>{const I=[-1,H(y.shape.slice(t))];return et({inputs:{x:y},backend:e,attrs:{shape:I}})}),f=p.map(y=>({vals:e.readSync(y.dataId),shape:y.shape})),m=Fn(p.map(y=>y.shape),1),g=p[0].shape[0]===1,x=Z3(f,m,s,g),b=Fn(n.map(y=>y.shape),t),w=e.makeTensorInfo(b,s,x);return p.forEach(y=>e.disposeIntermediateTensorInfo(y)),w}const r=n.filter(p=>H(p.shape)>0),i=W().getBool("WEBGL_PACK_ARRAY_OPERATIONS")&&r[0].shape.length>1;if(r.length===1){const p=i?new Rn(n[0].shape,as):new us(n[0].shape,as);return e.runWebGLProgram(p,n,s)}const a=W().getNumber("WEBGL_MAX_TEXTURES_IN_SHADER");if(r.length>a){const p=[];for(let m=0;m<r.length;m+=a){const g=r.slice(m,m+a);p.push(gr(g,t,e))}const f=gr(p,t,e);for(const m of p)e.disposeIntermediateTensorInfo(m);return f}if(i){const p=new iW(r.map(f=>f.shape),t);return e.runWebGLProgram(p,r,s)}const{tensors2D:l,outShape:c}=lW(r,t,e),u=new rW(l.map(p=>p.shape)),h=e.runWebGLProgram(u,l,s);l.forEach(p=>e.disposeIntermediateTensorInfo(p));const d=et({inputs:{x:h},attrs:{shape:c},backend:e});return e.disposeIntermediateTensorInfo(h),d}function lW(n,t,e){const s=Fn(n.map(r=>r.shape),t);return{tensors2D:n.map(r=>et({inputs:{x:r},attrs:{shape:[-1,H(r.shape.slice(t))]},backend:e})),outShape:s}}function Xy(n){const{inputs:t,backend:e,attrs:s}=n,{axis:o}=s,r=Ct(o,t[0].shape)[0],i=t.map(c=>c.shape);Id(i,r);const a=Fn(t.map(c=>c.shape),r);if(H(a)===0)return e.makeTensorInfo(a,t[0].dtype,[]);const l=t.filter(c=>H(c.shape)>0);return l.length===1?He({inputs:{x:l[0]},backend:e}):gr(l,r,e)}const cW={kernelName:cl,backendName:"webgl",kernelFunc:Xy};class Yy{constructor(t,e=!1,s=null,o=!1,r=!1){this.variableNames=["x","W"],this.outputShape=t.outShape;const i=t.padInfo.top,a=t.padInfo.left,l=t.strideHeight,c=t.strideWidth,u=t.dilationHeight,h=t.dilationWidth,d=t.filterHeight,p=t.filterWidth,f=Math.floor(t.inChannels/4)*4,m=t.inChannels%4,g=t.dataFormat==="channelsLast",x=g?1:2,b=g?2:3,w=g?3:1;let y="",C="";s&&(o?y=`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          ${s}
        }`:r?y=`float activation(float a) {
          float b = getLeakyreluAlphaAtOutCoords();
          ${s}
        }`:y=`
          float activation(float x) {
            ${s}
          }
        `,C="result = activation(result);");const I=e?"result += getBiasAtOutCoords();":"";e&&this.variableNames.push("bias"),o&&this.variableNames.push("preluActivationWeights"),r&&this.variableNames.push("leakyreluAlpha"),this.userCode=`
      ${y}

      const ivec2 strides = ivec2(${l}, ${c});
      const ivec2 pads = ivec2(${i}, ${a});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d2 = coords[${w}];

        ivec2 xRCCorner =
            ivec2(coords[${x}], coords[${b}]) * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, d2) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${d}; wR++) {
          int xR = xRCorner + wR * ${u};

          if (xR < 0 || xR >= ${t.inHeight}) {
            continue;
          }

          for (int wC = 0; wC < ${p}; wC++) {
            int xC = xCCorner + wC * ${h};

            if (xC < 0 || xC >= ${t.inWidth}) {
              continue;
            }

            for (int d1 = 0; d1 < ${f}; d1 += 4) {
              vec4 wValues = vec4(
                getW(wR, wC, d1, d2),
                getW(wR, wC, d1 + 1, d2),
                getW(wR, wC, d1 + 2, d2),
                getW(wR, wC, d1 + 3, d2)
              );

              if (${g}) {
                vec4 xValues = vec4(
                  getX(batch, xR, xC, d1),
                  getX(batch, xR, xC, d1 + 1),
                  getX(batch, xR, xC, d1 + 2),
                  getX(batch, xR, xC, d1 + 3)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec4 xValues = vec4(
                  getX(batch, d1, xR, xC),
                  getX(batch, d1 + 1, xR, xC),
                  getX(batch, d1 + 2, xR, xC),
                  getX(batch, d1 + 3, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }
            }

            if (${m===1}) {

              if (${g}) {
                dotProd +=
                    getX(batch, xR, xC, ${f}) *
                    getW(wR, wC, ${f}, d2);
              } else {
                dotProd +=
                    getX(batch, ${f}, xR, xC) *
                    getW(wR, wC, ${f}, d2);
              }

            } else if (${m===2}) {
              vec2 wValues = vec2(
                getW(wR, wC, ${f}, d2),
                getW(wR, wC, ${f} + 1, d2)
              );

              if (${g}) {
                vec2 xValues = vec2(
                  getX(batch, xR, xC, ${f}),
                  getX(batch, xR, xC, ${f} + 1)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec2 xValues = vec2(
                  getX(batch, ${f}, xR, xC),
                  getX(batch, ${f} + 1, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            } else if (${m===3}) {
              vec3 wValues = vec3(
                getW(wR, wC, ${f}, d2),
                getW(wR, wC, ${f} + 1, d2),
                getW(wR, wC, ${f} + 2, d2)
              );

              if (${g}) {
                vec3 xValues = vec3(
                  getX(batch, xR, xC, ${f}),
                  getX(batch, xR, xC, ${f} + 1),
                  getX(batch, xR, xC, ${f} + 2)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec3 xValues = vec3(
                  getX(batch, ${f}, xR, xC),
                  getX(batch, ${f} + 1, xR, xC),
                  getX(batch, ${f} + 2, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            }
          }
        }

        float result = dotProd;
        ${I}
        ${C}
        setOutput(result);
      }
    `}}class uW{constructor(t){this.variableNames=["x","W"],this.outputShape=t.outShape;const e=t.padInfo.front,s=t.padInfo.top,o=t.padInfo.left,r=t.strideDepth,i=t.strideHeight,a=t.strideWidth,l=t.dilationDepth,c=t.dilationHeight,u=t.dilationWidth,h=t.filterDepth,d=t.filterHeight,p=t.filterWidth,f=Math.floor(t.inChannels/4)*4,m=t.inChannels%4;this.userCode=`
      const ivec3 strides = ivec3(${r}, ${i}, ${a});
      const ivec3 pads = ivec3(${e}, ${s}, ${o});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d2 = coords.u;

        ivec3 xFRCCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xFCorner = xFRCCorner.x;
        int xRCorner = xFRCCorner.y;
        int xCCorner = xFRCCorner.z;

        // Convolve x(?, ?, ?, d1) with w(:, :, :, d1, d2) to get
        // y(yF, yR, yC, d2). ? = to be determined. : = across all
        // values in that axis.
        float dotProd = 0.0;
        for (int wF = 0; wF < ${h}; wF++) {
          int xF = xFCorner + wF * ${l};

          if (xF < 0 || xF >= ${t.inDepth}) {
            continue;
          }

          for (int wR = 0; wR < ${d}; wR++) {
            int xR = xRCorner + wR * ${c};

            if (xR < 0 || xR >= ${t.inHeight}) {
              continue;
            }

            for (int wC = 0; wC < ${p}; wC++) {
              int xC = xCCorner + wC * ${u};

              if (xC < 0 || xC >= ${t.inWidth}) {
                continue;
              }

              for (int d1 = 0; d1 < ${f}; d1 += 4) {
                vec4 xValues = vec4(
                  getX(batch, xF, xR, xC, d1),
                  getX(batch, xF, xR, xC, d1 + 1),
                  getX(batch, xF, xR, xC, d1 + 2),
                  getX(batch, xF, xR, xC, d1 + 3)
                );
                vec4 wValues = vec4(
                  getW(wF, wR, wC, d1, d2),
                  getW(wF, wR, wC, d1 + 1, d2),
                  getW(wF, wR, wC, d1 + 2, d2),
                  getW(wF, wR, wC, d1 + 3, d2)
                );

                dotProd += dot(xValues, wValues);
              }

              if (${m===1}) {
                dotProd +=
                  getX(batch, xF, xR, xC, ${f}) *
                  getW(wF, wR, wC, ${f}, d2);
              } else if (${m===2}) {
                vec2 xValues = vec2(
                  getX(batch, xF, xR, xC, ${f}),
                  getX(batch, xF, xR, xC, ${f} + 1)
                );
                vec2 wValues = vec2(
                  getW(wF, wR, wC, ${f}, d2),
                  getW(wF, wR, wC, ${f} + 1, d2)
                );
                dotProd += dot(xValues, wValues);
              } else if (${m===3}) {
                vec3 xValues = vec3(
                  getX(batch, xF, xR, xC, ${f}),
                  getX(batch, xF, xR, xC, ${f} + 1),
                  getX(batch, xF, xR, xC, ${f} + 2)
                );
                vec3 wValues = vec3(
                  getW(wF, wR, wC, ${f}, d2),
                  getW(wF, wR, wC, ${f} + 1, d2),
                  getW(wF, wR, wC, ${f} + 2, d2)
                );
                dotProd += dot(xValues, wValues);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `}}class Zy{constructor(t,e=!1,s=null,o=!1,r=!1){this.variableNames=["x","W"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"pads",type:"ivec2"},{name:"strides",type:"ivec2"},{name:"dilations",type:"ivec2"},{name:"inDims",type:"ivec2"}],this.outputShape=t.outShape,this.enableShapeUniforms=Se(this.outputShape.length);const i=t.padInfo.left,a=t.strideWidth,l=t.dilationWidth,c=t.filterHeight,u=t.filterWidth,h=u;let d=`
       int xR; int xC; int xCOffset;
       vec4 wTexel; vec4 previous; vec4 final;`;for(let g=0;g<u;g++)d+=`
           vec4 xTexelC${g*2};
           int xTexelC${g*2}Ready;
           vec4 xTexelC${g*2+1};
           int xTexelC${g*2+1}Ready;
           vec4 xC${g};`;d+=`
     for (int r = 0; r < ${c}; r++) {
      for (int d1 = 0; d1 < ${t.inChannels}; d1 += 2) {
       `;for(let g=0;g<u;g++)d+=`
           xTexelC${g*2} = vec4(0.0);
           xTexelC${g*2}Ready = 0;
           xTexelC${g*2+1} = vec4(0.0);
           xTexelC${g*2+1}Ready = 0;
           xC${g} = vec4(0.0);`;d+=`
         xR = xRCorner + r * dilations[0];
         if (xR >=0 && xR < inDims[0]) {
       `;for(let g=0;g<(h+1)/2;g++){const x=g*2;if(d+=`
           xC = xCCorner + ${x*l};
           `,a===1){if(x<u&&(i%2===1?(d+=`
                 xCOffset = xC + 1;
                 if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${x}Ready == 0) {
                   xTexelC${x} = getX(batch, xR, xCOffset, d1);

                   // Need to manually clear unused channels in case
                   // we're reading from recycled texture.
                   if (xCOffset + 1 >= inDims[1]) {
                     xTexelC${x}.zw = vec2(0.0);
                   }
                   xTexelC${x}Ready = 1;
                 }
               `,l===1&&x>0?d+=`
                 xC${x} = vec4(xTexelC${x-2}.zw, xTexelC${x}.xy);
                 `:d+=`
                   xCOffset = xC + 1 - 2;

                   if (xCOffset >= 0 && xCOffset < inDims[1]) {
                     previous = getX(batch, xR, xCOffset, d1);

                     // Need to manually clear unused channels in case
                     // we're reading from recycled texture.
                     if (xCOffset + 1 >= inDims[1]) {
                       previous.zw = vec2(0.0);
                     }

                     xC${x} = vec4(previous.zw, xTexelC${x}.xy);
                   } else {
                     xC${x} = vec4(0.0, 0.0, xTexelC${x}.xy);
                   }
                   `):d+=`
                 if (xC >= 0 && xC < inDims[1] && xTexelC${x}Ready == 0) {
                   xTexelC${x} = getX(batch, xR, xC, d1);
                   if (xC + 1 >= inDims[1]) {
                     xTexelC${x}.zw = vec2(0.0);
                   }
                   xTexelC${x}Ready = 1;
                 }

                 xC${x} = xTexelC${x};
                 `,x+1<u)){const b=i%2===0?Gu(l):l;l%2===0&&i%2===1||l%2!==0&&i%2!==1?(d+=`
                   xCOffset = xC + imod(pads[1], 2) + ${b};

                   if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${x+1}Ready == 0) {
                     xTexelC${x+1} = getX(batch, xR, xCOffset, d1);

                     // Need to manually clear unused channels in case
                     // we're reading from recycled texture.
                     if (xCOffset + 1 >= inDims[1]) {
                       xTexelC${x+1}.zw = vec2(0.0);
                     }
                     xTexelC${x+1}Ready = 1;
                   }
                   `,l>1?d+=`
                     xCOffset -= 2;
                     if (xCOffset >= 0 && xCOffset < inDims[1]) {
                      previous = getX(batch, xR, xCOffset, d1);
                      xC${x+1} = vec4(previous.zw, xTexelC${x+1}.xy);
                     } else {
                      xC${x+1} = vec4(0.0, 0.0, xTexelC${x+1}.xy);
                     }
                     `:d+=`
                     xC${x+1} = vec4(xTexelC${x}.zw, xTexelC${x+1}.xy);
                     `):b===1?d+=`
                     xC${x+1} = xTexelC${x};
                     `:d+=`
                     xCOffset = xC + ${b};

                     if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${x+1}Ready == 0) {
                       xTexelC${x+1} = getX(batch, xR, xCOffset, d1);
                       if (xCOffset + 1 >= inDims[1]) {
                         xTexelC${x+1}.zw = vec2(0.0);
                       }
                       xTexelC${x+1}Ready = 1;
                     }

                     xC${x+1} = xTexelC${x+1};
                     `}}else x<u&&(i%2===1?(d+=`
                 xCOffset = xC + 1 - strides[1];
                 if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${x}Ready == 0) {
                   xTexelC${x} = getX(batch, xR, xCOffset, d1);
                   // Need to manually clear unused channels in case
                   // we're reading from recycled texture.
                   if (xCOffset + 1 >= inDims[1]) {
                     xTexelC${x}.zw = vec2(0.0);
                   }
                   xTexelC${x}Ready = 1;
                 }

                 if(xC + 1 >= 0 && xC + 1 < inDims[1] && xTexelC${x+1}Ready == 0) {
                   xTexelC${x+1} = getX(batch, xR, xC + 1, d1);
                   // Need to manually clear unused channels in case
                   // we're reading from recycled texture.
                   if (xC + 2 >= inDims[1]) {
                     xTexelC${x+1}.zw = vec2(0.0);
                   }
                   xTexelC${x+1}Ready = 1;
                 }

                 xC${x} = vec4(xTexelC${x}.zw, xTexelC${x+1}.zw);
               `,x+1<u&&(d+=`
                   final = vec4(0.0);
                   xCOffset = xC + 1 + strides[1];
                   if(xCOffset >= 0 && xCOffset < inDims[1]) {
                     final = getX(batch, xR, xCOffset, d1);
                   }
                   xC${x+1} = vec4(xTexelC${x+1}.xy, final.xy);
                 `)):(d+=`
                 if(xC >= 0 && xC < inDims[1] && xTexelC${x}Ready == 0) {
                   xTexelC${x} = getX(batch, xR, xC, d1);
                   if (xC + 1 >= inDims[1]) {
                     xTexelC${x}.zw = vec2(0.0);
                   }
                   xTexelC${x}Ready = 1;
                 }

                 xCOffset = xC + strides[1];
                 if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${x+1}Ready == 0) {
                   xTexelC${x+1} = getX(batch, xR, xCOffset, d1);
                   if (xCOffset + 1 >= inDims[1]) {
                     xTexelC${x+1}.zw = vec2(0.);
                   }
                   xTexelC${x+1}Ready = 1;
                 }

                 xC${x} = vec4(
                   xTexelC${x}.xy, xTexelC${x+1}.xy);
               `,x+1<u&&(d+=`
                   xC${x+1} = vec4(xTexelC${x}.zw, xTexelC${x+1}.zw);
                 `)));x<u&&(d+=`
             wTexel = getW(r, ${x}, d1, d2);
             dotProd += xC${x}.xxzz * vec4(wTexel.xy, wTexel.xy);
             if(d1 + 1 < ${t.inChannels}) {
               dotProd += xC${x}.yyww * vec4(wTexel.zw, wTexel.zw);
             }
           `,x+1<u&&(d+=`
               wTexel = getW(r, ${x+1}, d1, d2);
               dotProd += xC${x+1}.xxzz * vec4(wTexel.xy, wTexel.xy);
               if(d1 + 1 < ${t.inChannels}) {
                 dotProd += xC${x+1}.yyww * vec4(wTexel.zw, wTexel.zw);
               }
             `))}d+=`
     }
   `,d+=`
     }
   `,d+=`
     }
   `;let p="",f="";s&&(o?p=`vec4 activation(vec4 a) {
           vec4 b = getPreluActivationWeightsAtOutCoords();
           ${s}
         }`:r?p=`vec4 activation(vec4 a) {
           vec4 b = getLeakyreluAlphaAtOutCoords();
           ${s}
         }`:p=`vec4 activation(vec4 x) {
           ${s}
         }`,f="result = activation(result);");const m=e?"result += getBiasAtOutCoords();":"";e&&this.variableNames.push("bias"),o&&this.variableNames.push("preluActivationWeights"),r&&this.variableNames.push("leakyreluAlpha"),this.userCode=`
       ${p}

       void main() {
         ivec4 coords = getOutputCoords();
         int batch = coords.x;
         ivec2 xRCCorner = coords.yz * strides - pads;
         int d2 = coords.w;
         int xRCorner = xRCCorner.x;
         int xCCorner = xRCCorner.y;

         //intialize dotProd with a small epsilon seems to reduce GPU accuracy loss.
         vec4 dotProd = vec4(0.000000000000001);

         ${d}

         vec4 result = dotProd - vec4(0.000000000000001);
         ${m}
         ${f}
         setOutput(result);
       }
     `}}class hW{constructor(t,e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"inputShape",type:"ivec4"},{name:"pad",type:"ivec2"},{name:"stride",type:"ivec2"},{name:"dilation",type:"ivec2"},{name:"inChannels",type:"int"},{name:"itemsPerBlockRow",type:"int"},{name:"outWidth",type:"int"}],this.outputShape=t,this.enableShapeUniforms=Se(this.outputShape.length);const{dataFormat:s}=e,o=De(),r=s==="channelsLast",i=r?1:2,a=r?2:3,l=this.enableShapeUniforms?"if(blockIndex < outShape[2] && pos < outShape[1]) {":`if(blockIndex < ${t[2]} && pos < ${t[1]}) {`;let c="";for(let u=0;u<=1;u++)for(let h=0;h<=1;h++)c+=`
          blockIndex = rc.z + ${h};
          pos = rc.y + ${u};

          ${l}
            offsetY = int(blockIndex / outWidth) * stride[0] - pad[0];
            d0 = offsetY + dilation[0] * (pos / itemsPerBlockRow);

            if(d0 < inputShape[${i}] && d0 >= 0) {
              // Use custom imod instead mod. On Intel GPU, mod may generate
              // unexpected value.
              // https://github.com/tensorflow/tfjs/issues/5447
              offsetX = imod(blockIndex, outWidth) * stride[1] - pad[1];
              d1 = offsetX + dilation[1] * (imod(pos, itemsPerBlockRow) /
                  inChannels);

              if(d1 < inputShape[${a}] && d1 >= 0) {

                ch = imod(pos, inChannels);

                if (${r}) {
                  innerDims = vec2(d1, ch);
                  result[${u*2+h}] = getChannel(
                    getA(rc.x, d0, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                } else {
                  innerDims = vec2(d0, d1);
                  result[${u*2+h}] = getChannel(
                    getA(rc.x, ch, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                }
              }
            }
          }
        `;this.userCode=`
      void main() {
        ivec3 rc = getOutputCoords();

        vec4 result = vec4(0);

        int blockIndex, pos, offsetY, d0, offsetX, d1, ch;
        vec2 innerDims;

        ${c}

        ${o.output} = result;
      }
    `}}function Qa(n,t){const e=n.length;return e>=3?t?[...n.slice(0,-3),n[e-3]*n[e-2],n[e-1]]:[...n.slice(0,-3),n[e-3],n[e-2]*n[e-1]]:!t&&e===1&&n[0]>1?[n[0],1]:null}function Jy({x:n,filter:t,convInfo:e,backend:s,bias:o=null,preluActivationWeights:r=null,leakyreluAlpha:i=0,activation:a=null}){const l=n.shape,c=s.texData.get(n.dataId),u=e.inChannels,h=l[0]*l[1]*l[2],d=e.outChannels,p=e.dataFormat==="channelsLast",f=!1,m=!1;let g;const x=[];if(r!=null){const y=Qa(r.shape,p);y!=null&&(r=et({inputs:{x:r},backend:s,attrs:{shape:y}}),x.push(r))}if(o!=null){const y=Qa(o.shape,p);y!=null&&(o=et({inputs:{x:o},backend:s,attrs:{shape:y}}),x.push(o))}if(!((h===1||d===1)&&u>Gy)&&c.isPacked&&p&&c.texture!=null&&l[2]%2!==0&&Et(c.shape.slice(-3),l.slice(-3))){const y=l[0]*l[1]*(l[2]+1),C={dataId:n.dataId,shape:[1,y,e.inChannels],dtype:n.dtype},I=c.shape;c.shape=c.shape.slice(),c.shape[c.shape.length-2]++,v(Za(c.shape,C.shape),()=>`packed reshape ${c.shape} to ${C.shape} isn't free`);const N=et({inputs:{x:t},backend:s,attrs:{shape:[1,e.inChannels,e.outChannels]}});x.push(N);const T=Ja({a:C,b:N,backend:s,transposeA:f,transposeB:m,bias:o,activation:a,preluActivationWeights:r,leakyreluAlpha:i}),k=s.texData.get(T.dataId);v(k.isPacked,()=>"batchMatMul result is expected to be packed"),c.shape=I,k.shape=e.outShape,g=He({inputs:{x:T},backend:s}),g.shape=e.outShape,x.push(T)}else{const y=e.outHeight*e.outWidth,C=et({inputs:{x:n},backend:s,attrs:{shape:p?[e.batchSize,y,e.inChannels]:[e.batchSize,e.inChannels,y]}}),I=et({inputs:{x:t},backend:s,attrs:{shape:[1,e.inChannels,e.outChannels]}}),N=Ja({a:p?C:I,b:p?I:C,transposeA:!p,transposeB:m,backend:s,bias:o,activation:a,preluActivationWeights:r,leakyreluAlpha:i});g=et({inputs:{x:N},backend:s,attrs:{shape:e.outShape}}),x.push(C),x.push(I),x.push(N)}for(const y of x)s.disposeIntermediateTensorInfo(y);return g}function Qy({x:n,filter:t,convInfo:e,backend:s,bias:o=null,preluActivationWeights:r=null,leakyreluAlpha:i=0,activation:a=null}){const{filterWidth:l,filterHeight:c,inChannels:u,outWidth:h,outHeight:d,dataFormat:p}=e,f=p==="channelsLast",m=l*c*u,g=d*h,x=[e.batchSize,m,g],b=!0,w=!1,y=[];if(r!=null){const V=Qa(r.shape,f);V!=null&&(r=et({inputs:{x:r},backend:s,attrs:{shape:V}}),y.push(r))}if(o!=null){const V=Qa(o.shape,f);V!=null&&(o=et({inputs:{x:o},backend:s,attrs:{shape:V}}),y.push(o))}const C=et({inputs:{x:t},backend:s,attrs:{shape:[1,m,H(t.shape)/m]}});y.push(C);const I=new hW(x,e),N=[n.shape,[e.padInfo.top,e.padInfo.left],[e.strideHeight,e.strideWidth],[e.dilationHeight,e.dilationWidth],[e.inChannels],[e.filterWidth*e.inChannels],[e.outWidth]],T=s.runWebGLProgram(I,[n],"float32",N),k=et({inputs:{x:T},backend:s,attrs:{shape:x}});y.push(T),y.push(k);const S=o!=null,$=r!=null,R=a==="leakyrelu",A=a?Er(a,!0):null,O=new Uy(f?k.shape:C.shape,f?C.shape:k.shape,f?[e.batchSize,g,e.outChannels]:[e.batchSize,e.outChannels,g],b,w,S,A,$,R),M=f?[k,C]:[C,k];if(o&&M.push(o),$&&M.push(r),R){const V=s.makeTensorInfo([],"float32",$s(i,"float32"));M.push(V),y.push(V)}const z=s.runWebGLProgram(O,M,"float32"),G=et({inputs:{x:z},backend:s,attrs:{shape:e.outShape}});y.push(z);for(const V of y)s.disposeIntermediateTensorInfo(V);return G}function dW(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,filter:r}=t,{strides:i,pad:a,dataFormat:l,dilations:c,dimRoundingMode:u}=s,h=ts(l),d=be(o.shape,r.shape,i,c,a,u,!1,h);let p;if(d.filterHeight===1&&d.filterWidth===1&&d.dilationHeight===1&&d.dilationWidth===1&&d.strideHeight===1&&d.strideWidth===1&&(d.padInfo.type==="SAME"||d.padInfo.type==="VALID"))p=Jy({x:o,filter:r,convInfo:d,backend:e});else if(d.strideWidth<=2&&h==="channelsLast"&&W().getBool("WEBGL_EXP_CONV")){const m=new Zy(d),g=[[d.padInfo.top,d.padInfo.left],[d.strideHeight,d.strideWidth],[d.dilationHeight,d.dilationWidth],[d.inHeight,d.inWidth]];p=e.runWebGLProgram(m,[o,r],"float32",g)}else if(W().getBool("WEBGL_CONV_IM2COL"))p=Qy({x:o,filter:r,convInfo:d,backend:e});else{const m=new Yy(d);p=e.runWebGLProgram(m,[o,r],"float32")}const f=et({inputs:{x:p},backend:e,attrs:{shape:d.outShape}});return e.disposeIntermediateTensorInfo(p),f}const pW={kernelName:ul,backendName:"webgl",kernelFunc:dW};class fW{constructor(t){this.variableNames=["x","dy"],this.outputShape=t.filterShape;const e=t.strideHeight,s=t.strideWidth,o=t.padInfo.top,r=t.padInfo.left,i=t.dataFormat==="channelsLast";this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int d2 = coords.w;

        // Convolve x(?, ?, d1) with dy(:, :, d2) to get dw(wR, wC, d1, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int b = 0; b < ${t.batchSize}; b++) {
          for (int yR = 0; yR < ${t.outHeight}; yR++) {
            int xR = wR + yR * ${e} - ${o};

            if (xR < 0 || xR >= ${t.inHeight}) {
              continue;
            }

            for (int yC = 0; yC < ${t.outWidth}; yC++) {
              int xC = wC + yC * ${s} - ${r};

              if (xC < 0 || xC >= ${t.inWidth}) {
                continue;
              }

              ${i?`float dyValue = getDy(b, yR, yC, d2);
              float xValue = getX(b, xR, xC, d1);
              dotProd += (xValue * dyValue);`:`float dyValue = getDy(b, d2, yR, yC);
              float xValue = getX(b, d1, xR, xC);
              dotProd += (xValue * dyValue);`}
            }
          }
        }
        setOutput(dotProd);
      }
    `}}class mW{constructor(t){this.variableNames=["dy","W"],this.outputShape=t.inShape;const e=t.filterHeight,s=t.filterWidth,o=t.strideHeight,r=t.strideWidth,i=t.dataFormat==="channelsLast",a=e-1-t.padInfo.top,l=s-1-t.padInfo.left,c=i?1:2,u=i?2:3,h=i?3:1;this.userCode=`
      const ivec2 pads = ivec2(${a}, ${l});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[${h}];

        ivec2 dyCorner = ivec2(coords[${c}], coords[${u}]) - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${e}; wR++) {
          float dyR = float(dyRCorner + wR) / ${o}.0;

          if (dyR < 0.0 || dyR >= ${t.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = ${e} - 1 - wR;

          for (int wC = 0; wC < ${s}; wC++) {
            float dyC = float(dyCCorner + wC) / ${r}.0;

            if (dyC < 0.0 || dyC >= ${t.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = ${s} - 1 - wC;

            for (int d2 = 0; d2 < ${t.outChannels}; d2++) {

              if (${i}) {
                float xValue = getDy(batch, idyR, idyC, d2);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              } else {
                float xValue = getDy(batch, d2, idyR, idyC);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }

            }
          }
        }
        setOutput(dotProd);
      }
    `}}class gW{constructor(t){this.variableNames=["x","dy"],this.outputShape=t.filterShape;const e=t.strideDepth,s=t.strideHeight,o=t.strideWidth,r=t.padInfo.front,i=t.padInfo.top,a=t.padInfo.left;this.userCode=`
      void main() {
        ivec5 coords = getOutputCoords();
        int wF = coords.x;
        int wR = coords.y;
        int wC = coords.z;
        int d1 = coords.w;
        int d2 = coords.u;

        float dotProd = 0.0;

        for (int b = 0; b < ${t.batchSize}; b++) {
          for (int yF = 0; yF < ${t.outDepth}; yF++) {
            int xF = wF + yF * ${e} - ${r};

            if (xF < 0 || xF >= ${t.inDepth}) {
              continue;
            }

            for (int yR = 0; yR < ${t.outHeight}; yR++) {
              int xR = wR + yR * ${s} - ${i};

              if (xR < 0 || xR >= ${t.inHeight}) {
                continue;
              }

              for (int yC = 0; yC < ${t.outWidth}; yC++) {
                int xC = wC + yC * ${o} - ${a};

                if (xC < 0 || xC >= ${t.inWidth}) {
                  continue;
                }

                float dyValue = getDy(b, yF, yR, yC, d2);
                float xValue = getX(b, xF, xR, xC, d1);
                dotProd += (xValue * dyValue);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `}}class xW{constructor(t){this.variableNames=["dy","W"],this.outputShape=t.inShape;const e=t.filterDepth,s=t.filterHeight,o=t.filterWidth,r=t.strideDepth,i=t.strideHeight,a=t.strideWidth,l=e-1-t.padInfo.front,c=s-1-t.padInfo.top,u=o-1-t.padInfo.left;this.userCode=`
      const ivec3 pads = ivec3(${l}, ${c}, ${u});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d1 = coords.u;


        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyFCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        float dotProd = 0.0;
        for (int wF = 0; wF < ${e}; wF++) {
          float dyF = float(dyFCorner + wF) / ${r}.0;

          if (dyF < 0.0 || dyF >= ${t.outDepth}.0 || fract(dyF) > 0.0) {
            continue;
          }
          int idyF = int(dyF);

          int wFPerm = ${e} - 1 - wF;

          for (int wR = 0; wR < ${s}; wR++) {
            float dyR = float(dyRCorner + wR) / ${i}.0;

            if (dyR < 0.0 || dyR >= ${t.outHeight}.0 ||
              fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            int wRPerm = ${s} - 1 - wR;

            for (int wC = 0; wC < ${o}; wC++) {
              float dyC = float(dyCCorner + wC) / ${a}.0;

              if (dyC < 0.0 || dyC >= ${t.outWidth}.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              int wCPerm = ${o} - 1 - wC;

              for (int d2 = 0; d2 < ${t.outChannels}; d2++) {
                float xValue = getDy(batch, idyF, idyR, idyC, d2);
                float wValue = getW(wFPerm, wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `}}function bW(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,dy:r}=t,{strides:i,pad:a,dataFormat:l,dimRoundingMode:c,filterShape:u}=s,h=ts(l),d=be(o.shape,u,i,1,a,c,!1,h),p=new fW(d);return e.runWebGLProgram(p,[o,r],"float32")}const yW={kernelName:sh,backendName:"webgl",kernelFunc:bW};class wW{constructor(t){this.variableNames=["dy","W"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"strides",type:"vec2"}],this.outputShape=t.inShape,this.enableShapeUniforms=Se(this.outputShape.length);const e=t.filterHeight,s=t.filterWidth,o=e-1-t.padInfo.top,r=s-1-t.padInfo.left;this.userCode=`
      const ivec2 pads = ivec2(${o}, ${r});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[3];

        ivec2 dyCorner = ivec2(coords[1], coords[2]) - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        vec4 result = vec4(0.);
        for (int wR = 0; wR < ${e}; wR++) {
          float dyR = float(dyRCorner + wR) / strides[0];
          if (dyR < 0.0 || dyR >= ${t.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);
          int wRPerm = ${e} - 1 - wR;

          for (int wC = 0; wC < ${s}; wC++) {
            int wCPerm = ${s} - 1 - wC;

            float dyC = float(dyCCorner + wC) / strides[1];
            bool idyCVal = (dyC >= 0.0) && (dyC < ${t.outWidth}.0)
              && (fract(dyC) == 0.0);
            int idyC = int(dyC);

            float dyC2 = float(dyCCorner + wC + 1) / strides[1];
            bool idyCVal2 = (dyC2 >= 0.0) && (dyC2 < ${t.outWidth}.0)
              && (fract(dyC2) == 0.0);
            int idyC2 = int(dyC2);

            if (idyCVal && idyCVal2) {
              for (int d2 = 0; d2 < ${t.outChannels}; d2 += 2) {
                vec4 wValue = getW(wRPerm, wCPerm, d1, d2);
                vec4 dySample = getDy(batch, idyR, idyC, d2);
                vec4 dySample2 = (idyC / 2 == idyC2 / 2) ?
                  dySample : getDy(batch, idyR, idyC2, d2);

                vec2 dyValue = mod(float(idyC), 2.) == 0. ?
                  dySample.xy : dySample.zw;
                result.xy += vec2(dot(dyValue, wValue.xy),
                  dot(dyValue, wValue.zw));

                dyValue = mod(float(idyC2), 2.) == 0. ?
                  dySample2.xy : dySample2.zw;
                result.zw += vec2(dot(dyValue, wValue.xy),
                  dot(dyValue, wValue.zw));
              }
            } else if (idyCVal) {
              for (int d2 = 0; d2 < ${t.outChannels}; d2 += 2) {
                vec4 wValue = getW(wRPerm, wCPerm, d1, d2);
                vec4 dySample = getDy(batch, idyR, idyC, d2);
                vec2 dyValue = mod(float(idyC), 2.) == 0. ?
                  dySample.xy : dySample.zw;
                result.xy += vec2(dot(dyValue, wValue.xy),
                  dot(dyValue, wValue.zw));
              }
            } else if (idyCVal2) {
              for (int d2 = 0; d2 < ${t.outChannels}; d2 += 2) {
                vec4 wValue = getW(wRPerm, wCPerm, d1, d2);
                vec4 dySample = getDy(batch, idyR, idyC2, d2);
                vec2 dyValue = mod(float(idyC2), 2.) == 0. ?
                  dySample.xy : dySample.zw;
                result.zw += vec2(dot(dyValue, wValue.xy),
                  dot(dyValue, wValue.zw));
              }
            }
          }
        }
        setOutput(result);
      }
    `}}function CW(n){const{inputs:t,backend:e,attrs:s}=n,{dy:o,filter:r}=t,{inputShape:i,strides:a,pad:l,dataFormat:c,dimRoundingMode:u}=s,h=ts(c),d=be(i,r.shape,a,1,l,u,!1,h);if(W().getBool("WEBGL_PACK_CONV2DTRANSPOSE")&&h==="channelsLast"){const p=[[d.strideHeight,d.strideWidth]],f=new wW(d);return e.runWebGLProgram(f,[o,r],"float32",p)}else{const p=new mW(d);return e.runWebGLProgram(p,[o,r],"float32")}}const $W={kernelName:hl,backendName:"webgl",kernelFunc:CW};function IW(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,filter:r}=t,{strides:i,pad:a,dilations:l}=s,c=vs(o.shape,r.shape,i,l,a),u=new uW(c);return e.runWebGLProgram(u,[o,r],"float32")}const vW={kernelName:dl,backendName:"webgl",kernelFunc:IW};function kW(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,dy:r}=t,{strides:i,pad:a,filterShape:l}=s,c=vs(o.shape,l,i,1,a),u=new gW(c);return e.runWebGLProgram(u,[o,r],"float32")}const SW={kernelName:oh,backendName:"webgl",kernelFunc:kW};function NW(n){const{inputs:t,backend:e,attrs:s}=n,{dy:o,filter:r}=t,{pad:i,strides:a,inputShape:l}=s,c=vs(l,r.shape,a,1,i),u=new xW(c);return e.runWebGLProgram(u,[o,r],"float32")}const TW={kernelName:rh,backendName:"webgl",kernelFunc:NW};const EW=nr+`
  return cos(x);
`,RW=`
  vec4 result = cos(x);
  bvec4 isNaN = isnan(x);
  ${mo}
  return result;
`,AW=St({opSnippet:EW,packedOpSnippet:RW}),DW={kernelName:Ur,backendName:"webgl",kernelFunc:AW};const FW=`
  float e2x = exp(-x);
  return (e2x + 1.0 / e2x) / 2.0;
`,_W=St({opSnippet:FW}),OW={kernelName:Gr,backendName:"webgl",kernelFunc:_W};class MW{constructor(t,e,s,o,r){this.variableNames=["Image","Boxes","BoxInd"],this.outputShape=[];const[i,a,l,c]=t,[u]=e,[h,d]=s;this.outputShape=[u,h,d,c];const p=o==="bilinear"?1:0,[f,m]=[`${a-1}.0`,`${l-1}.0`],[g,x,b]=h>1?[`${(a-1)/(h-1)}`,"(y2-y1) * height_ratio",`y1*${f} + float(y)*(height_scale)`]:["0.0","0.0",`0.5 * (y1+y2) * ${f}`],[w,y,C]=d>1?[`${(l-1)/(d-1)}`,"(x2-x1) * width_ratio",`x1*${m} + float(x)*(width_scale)`]:["0.0","0.0",`0.5 * (x1+x2) * ${m}`];this.userCode=`
      const float height_ratio = float(${g});
      const float width_ratio = float(${w});
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int y = coords[1];
        int x = coords[2];
        int d = coords[3];

        // get box vals
        float y1 = getBoxes(b,0);
        float x1 = getBoxes(b,1);
        float y2 = getBoxes(b,2);
        float x2 = getBoxes(b,3);

        // get image in batch index
        int bInd = round(getBoxInd(b));
        if(bInd < 0 || bInd >= ${i}) {
          return;
        }

        float height_scale = ${x};
        float width_scale = ${y};

        float in_y = ${b};
        if( in_y < 0.0 || in_y > ${f} ) {
          setOutput(float(${r}));
          return;
        }
        float in_x = ${C};
        if( in_x < 0.0 || in_x > ${m} ) {
          setOutput(float(${r}));
          return;
        }

        vec2 sourceFracIndexCR = vec2(in_x,in_y);
        if(${p} == 1) {
          // Compute the four integer indices.
          ivec2 sourceFloorCR = ivec2(sourceFracIndexCR);
          ivec2 sourceCeilCR = ivec2(ceil(sourceFracIndexCR));

          float topLeft = getImage(b, sourceFloorCR.y, sourceFloorCR.x, d);
          float bottomLeft = getImage(b, sourceCeilCR.y, sourceFloorCR.x, d);
          float topRight = getImage(b, sourceFloorCR.y, sourceCeilCR.x, d);
          float bottomRight = getImage(b, sourceCeilCR.y, sourceCeilCR.x, d);

          vec2 fracCR = sourceFracIndexCR - vec2(sourceFloorCR);

          float top = topLeft + (topRight - topLeft) * fracCR.x;
          float bottom = bottomLeft + (bottomRight - bottomLeft) * fracCR.x;
          float newValue = top + (bottom - top) * fracCR.y;
          setOutput(newValue);
        } else {
          // Compute the coordinators of nearest neighbor point.
          ivec2 sourceNearestCR = ivec2(floor(
            sourceFracIndexCR + vec2(0.5,0.5)));
          float newValue = getImage(b, sourceNearestCR.y, sourceNearestCR.x, d);
          setOutput(newValue);
        }
      }
    `}}const LW=n=>{const{inputs:t,backend:e,attrs:s}=n,{image:o,boxes:r,boxInd:i}=t,{cropSize:a,method:l,extrapolationValue:c}=s,u=new MW(o.shape,r.shape,a,l,c);return e.runWebGLProgram(u,[o,r,i],"float32")},PW={kernelName:ah,backendName:"webgl",kernelFunc:LW};var Ar;(function(n){n.Prod="*",n.Sum="+"})(Ar||(Ar={}));class ym{constructor(t,e,s,o){this.op=t,this.outputShape=e,this.variableNames=["x"],this.customUniforms=[{name:"index",type:"float"}];const r=this.outputShape.length,i=this.op===Ar.Prod?"1.0":"0.0",a=s?i:`getX(${wm(r,"coords",this.op)})`,l=this.outputShape[this.outputShape.length-1];let c="",u="";s?(c=o?`end != ${l-1}`:"end != 0",u=o?"end + 1":"end - 1"):(c=o?`end + pow2 < ${l}`:"end >= pow2",u=o?"end + pow2":"end - pow2"),this.userCode=`
      void main() {
        ${_t(r)} coords = getOutputCoords();
        int end = ${Cm(r,"coords",this.op)};
        float val = ${a};
        int pow2 = int(pow(2.0, index));
        if (${c}) {
          int idx = ${u};
          ${Cm(r,"coords",this.op)} = idx;
          val ${this.op}= getX(${wm(r,"coords",this.op)});
        }
        setOutput(val);
      }
    `}}function wm(n,t,e){if(n===1)return`${t}`;if(n===2)return`${t}.x, ${t}.y`;if(n===3)return`${t}.x, ${t}.y, ${t}.z`;if(n===4)return`${t}.x, ${t}.y, ${t}.z, ${t}.w`;throw new Error(`Cumulative ${e} for rank ${n} is not yet supported`)}function Cm(n,t,e){if(n===1)return`${t}`;if(n===2)return`${t}.y`;if(n===3)return`${t}.z`;if(n===4)return`${t}.w`;throw new Error(`Cumulative ${e} for rank ${n} is not yet supported`)}function tw(n,t,e,s,o,r){const i=t.shape.length,a=qt([s],i);let l=t;a!=null&&(l=Ae({inputs:{x:t},backend:e,attrs:{perm:a}}));const c=Qt(1,i)[0];if(c!==i-1)throw new Error(`WebGL cumprod shader expects an inner-most axis=${t.shape.length-1} but got axis=${s}`);const u=l.shape[c];let h=He({inputs:{x:l},backend:e});for(let d=0;d<=Math.ceil(Math.log2(u))-1;d++){const p=new ym(n,l.shape,!1,r),f=[[d]],m=h;h=e.runWebGLProgram(p,[h],h.dtype,f),e.disposeIntermediateTensorInfo(m)}if(o){const d=new ym(n,l.shape,o,r),p=h;h=e.runWebGLProgram(d,[h],h.dtype),e.disposeIntermediateTensorInfo(p)}if(a!=null){const d=ks(a),p=Ae({inputs:{x:h},backend:e,attrs:{perm:d}});return e.disposeIntermediateTensorInfo(h),e.disposeIntermediateTensorInfo(l),p}return h}function zW(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{axis:r,exclusive:i,reverse:a}=s;return tw(Ar.Prod,o,e,r,i,a)}const BW={kernelName:ih,backendName:"webgl",kernelFunc:zW};function VW(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{axis:r,exclusive:i,reverse:a}=s;return tw(Ar.Sum,o,e,r,i,a)}const WW={kernelName:pl,backendName:"webgl",kernelFunc:VW};function UW(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,weights:r}=t,{size:i,binaryOutput:a}=s;if(o.shape.length===1){const l=e.readSync(o.dataId),c=e.readSync(r.dataId),u=_y(l,c,r.dtype,r.shape,i);return e.makeTensorInfo([i],r.dtype,u)}else if(o.shape.length===2){const l=e.bufferSync(o),c=e.bufferSync(r),u=q3(l,c,i,a);return e.makeTensorInfo(u.shape,r.dtype,u.values)}throw new Error(`Error in denseBincount: input must be at most rank 2, but got rank${o.shape.length}.`)}const GW={kernelName:lh,backendName:"webgl",kernelFunc:UW};class HW{constructor(t,e,s){this.variableNames=["x"],this.outputShape=[],this.outputShape=t,this.blockSize=e,this.dataFormat=s,this.userCode=`
    void main() {
      ivec4 coords = getOutputCoords();
      int b = coords[0];
      int h = ${this.getHeightCoordString()};
      int w = ${this.getWidthCoordString()};
      int d = ${this.getDepthCoordString()};

      int in_h = h / ${e};
      int offset_h = imod(h, ${e});
      int in_w = w / ${e};
      int offset_w = imod(w, ${e});
      int offset_d = (offset_h * ${e} + offset_w) *
        ${this.getOutputDepthSize()};
      int in_d = d + offset_d;

      float result = ${this.getInputSamplingString()};
      setOutput(result);
    }
  `}getHeightCoordString(){return this.dataFormat==="NHWC"?"coords[1]":"coords[2]"}getWidthCoordString(){return this.dataFormat==="NHWC"?"coords[2]":"coords[3]"}getDepthCoordString(){return this.dataFormat==="NHWC"?"coords[3]":"coords[1]"}getOutputDepthSize(){return this.dataFormat==="NHWC"?this.outputShape[3]:this.outputShape[1]}getInputSamplingString(){return this.dataFormat==="NHWC"?"getX(b, in_h, in_w, in_d)":"getX(b, in_d, in_h, in_w)"}}function jW(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{blockSize:r,dataFormat:i}=s,a=o.shape[0],l=i==="NHWC"?o.shape[1]:o.shape[2],c=i==="NHWC"?o.shape[2]:o.shape[3],u=i==="NHWC"?o.shape[3]:o.shape[1],h=l*r,d=c*r,p=u/(r*r),f=i==="NHWC"?[a,h,d,p]:[a,p,h,d],m=new HW(f,r,i);return e.runWebGLProgram(m,[o],o.dtype)}const qW={kernelName:ch,backendName:"webgl",kernelFunc:jW};class ew{constructor(t,e=!1,s=null,o=!1,r=!1){this.variableNames=["x","W"],this.customUniforms=[{name:"pads",type:"ivec2"},{name:"strides",type:"ivec2"},{name:"dilations",type:"ivec2"},{name:"inDims",type:"ivec2"}],this.outputShape=t.outShape,this.enableShapeUniforms=Se(this.outputShape.length);const i=t.filterHeight,a=t.filterWidth,l=t.outChannels/t.inChannels;let c="",u="";s&&(o?c=`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          ${s}
        }`:r?c=`float activation(float a) {
          float b = getLeakyreluAlphaAtOutCoords();
          ${s}
        }`:c=`
          float activation(float x) {
            ${s}
          }
        `,u="result = activation(result);");const h=e?"result += getBiasAtOutCoords();":"";e&&this.variableNames.push("bias"),o&&this.variableNames.push("preluActivationWeights"),r&&this.variableNames.push("leakyreluAlpha"),this.userCode=`
      ${c}

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2 / ${l};
        int q = d2 - d1 * ${l};

        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, q) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        // TO DO(dsmilkov): Flatten the two for loops and vec4 the operations.
        for (int wR = 0; wR < ${i}; wR++) {
          int xR = xRCorner + wR * dilations[0];

          if (xR < 0 || xR >= inDims[0]) {
            continue;
          }

          for (int wC = 0; wC < ${a}; wC++) {
            int xC = xCCorner + wC * dilations[1];

            if (xC < 0 || xC >= inDims[1]) {
              continue;
            }

            float xVal = getX(batch, xR, xC, d1);
            float wVal = getW(wR, wC, d1, q);
            dotProd += xVal * wVal;
          }
        }

        float result = dotProd;
        ${h}
        ${u}
        setOutput(result);
      }
    `}}class nw{constructor(t,e=!1,s=null,o=!1,r=!1){this.variableNames=["x","W"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"pads",type:"ivec2"},{name:"strides",type:"ivec2"},{name:"dilations",type:"ivec2"},{name:"inDims",type:"ivec2"}],this.outputShape=t.outShape,this.enableShapeUniforms=Se(this.outputShape.length);const i=t.outChannels/t.inChannels,a=t.padInfo.left,l=t.strideWidth,c=t.dilationWidth,u=t.filterHeight,h=t.filterWidth,d=h;let p=`
      int xR; int xC; int xCOffset;
      vec4 wTexel; vec4 previous; vec4 final;`;for(let x=0;x<h;x++)p+=`
          vec4 xTexelC${x*2};
          int xTexelC${x*2}Ready;
          vec4 xTexelC${x*2+1};
          int xTexelC${x*2+1}Ready;
          vec4 xC${x};`;p+=`
    for (int r = 0; r < ${u}; r++) {
      `;for(let x=0;x<h;x++)p+=`
          xTexelC${x*2} = vec4(0.0);
          xTexelC${x*2}Ready = 0;
          xTexelC${x*2+1} = vec4(0.0);
          xTexelC${x*2+1}Ready = 0;
          xC${x} = vec4(0.0);`;p+=`
        xR = xRCorner + r * dilations[0];
        if (xR >=0 && xR < inDims[0]) {
      `;for(let x=0;x<(d+1)/2;x++){const b=x*2;if(p+=`
          xC = xCCorner + ${b*c};
          `,l===1){if(b<h&&(a%2===1?(p+=`
                xCOffset = xC + 1;
                if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${b}Ready == 0) {
                  xTexelC${b} = getX(batch, xR, xCOffset, d1);

                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if (xCOffset + 1 >= inDims[1]) {
                    xTexelC${b}.zw = vec2(0.0);
                  }
                  xTexelC${b}Ready = 1;
                }
              `,c===1&&b>0?p+=`
                xC${b} = vec4(xTexelC${b-2}.zw, xTexelC${b}.xy);
                `:p+=`
                  xCOffset = xC + 1 - 2;

                  if (xCOffset >= 0 && xCOffset < inDims[1]) {
                    previous = getX(batch, xR, xCOffset, d1);

                    // Need to manually clear unused channels in case
                    // we're reading from recycled texture.
                    if (xCOffset + 1 >= inDims[1]) {
                      previous.zw = vec2(0.0);
                    }

                    xC${b} = vec4(previous.zw, xTexelC${b}.xy);
                  } else {
                    xC${b} = vec4(0.0, 0.0, xTexelC${b}.xy);
                  }
                  `):p+=`
                if (xC >= 0 && xC < inDims[1] && xTexelC${b}Ready == 0) {
                  xTexelC${b} = getX(batch, xR, xC, d1);
                  if (xC + 1 >= inDims[1]) {
                    xTexelC${b}.zw = vec2(0.0);
                  }
                  xTexelC${b}Ready = 1;
                }

                xC${b} = xTexelC${b};
                `,b+1<h)){const w=a%2===0?Gu(c):c;c%2===0&&a%2===1||c%2!==0&&a%2!==1?(p+=`
                  xCOffset = xC + imod(pads[1], 2) + ${w};

                  if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${b+1}Ready == 0) {
                    xTexelC${b+1} = getX(batch, xR, xCOffset, d1);

                    // Need to manually clear unused channels in case
                    // we're reading from recycled texture.
                    if (xCOffset + 1 >= inDims[1]) {
                      xTexelC${b+1}.zw = vec2(0.0);
                    }
                    xTexelC${b+1}Ready = 1;
                  }
                  `,c>1?p+=`
                    xCOffset -= 2;
                    if (xCOffset >= 0 && xCOffset < inDims[1]) {
                     previous = getX(batch, xR, xCOffset, d1);
                     xC${b+1} = vec4(previous.zw, xTexelC${b+1}.xy);
                    } else {
                     xC${b+1} = vec4(0.0, 0.0, xTexelC${b+1}.xy);
                    }
                    `:p+=`
                    xC${b+1} = vec4(xTexelC${b}.zw, xTexelC${b+1}.xy);
                    `):w===1?p+=`
                    xC${b+1} = xTexelC${b};
                    `:p+=`
                    xCOffset = xC + ${w};

                    if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${b+1}Ready == 0) {
                      xTexelC${b+1} = getX(batch, xR, xCOffset, d1);
                      if (xCOffset + 1 >= inDims[1]) {
                        xTexelC${b+1}.zw = vec2(0.0);
                      }
                      xTexelC${b+1}Ready = 1;
                    }

                    xC${b+1} = xTexelC${b+1};
                    `}}else b<h&&(a%2===1?(p+=`
                xCOffset = xC + 1 - strides[1];
                if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${b}Ready == 0) {
                  xTexelC${b} = getX(batch, xR, xCOffset, d1);
                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if (xCOffset + 1 >= inDims[1]) {
                    xTexelC${b}.zw = vec2(0.0);
                  }
                  xTexelC${b}Ready = 1;
                }

                if(xC + 1 >= 0 && xC + 1 < inDims[1] && xTexelC${b+1}Ready == 0) {
                  xTexelC${b+1} = getX(batch, xR, xC + 1, d1);
                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if (xC + 2 >= inDims[1]) {
                    xTexelC${b+1}.zw = vec2(0.0);
                  }
                  xTexelC${b+1}Ready = 1;
                }

                xC${b} = vec4(xTexelC${b}.zw, xTexelC${b+1}.zw);
              `,b+1<h&&(p+=`
                  final = vec4(0.0);
                  xCOffset = xC + 1 + strides[1];
                  if(xCOffset >= 0 && xCOffset < inDims[1]) {
                    final = getX(batch, xR, xCOffset, d1);
                  }
                  xC${b+1} = vec4(xTexelC${b+1}.xy, final.xy);
                `)):(p+=`
                if(xC >= 0 && xC < inDims[1] && xTexelC${b}Ready == 0) {
                  xTexelC${b} = getX(batch, xR, xC, d1);
                  if (xC + 1 >= inDims[1]) {
                    xTexelC${b}.zw = vec2(0.0);
                  }
                  xTexelC${b}Ready = 1;
                }

                xCOffset = xC + strides[1];
                if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${b+1}Ready == 0) {
                  xTexelC${b+1} = getX(batch, xR, xCOffset, d1);
                  if (xCOffset + 1 >= inDims[1]) {
                    xTexelC${b+1}.zw = vec2(0.);
                  }
                  xTexelC${b+1}Ready = 1;
                }

                xC${b} = vec4(
                  xTexelC${b}.xy, xTexelC${b+1}.xy);
              `,b+1<h&&(p+=`
                  xC${b+1} = vec4(xTexelC${b}.zw, xTexelC${b+1}.zw);
                `)));b<h&&(p+=`
            wTexel = getW(r, ${b}, d1, q);
            dotProd += xC${b} * vec4(wTexel.xz, wTexel.xz);
          `,b+1<h&&(p+=`
              wTexel = getW(r, ${b+1}, d1, q);
              dotProd += xC${b+1} * vec4(wTexel.xz, wTexel.xz);
            `))}p+=`
    }
  `,p+=`
      }
    `;let f="",m="";s&&(o?f=`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          ${s}
        }`:r?f=`vec4 activation(vec4 a) {
          vec4 b = getLeakyreluAlphaAtOutCoords();
          ${s}
        }`:f=`vec4 activation(vec4 x) {
          ${s}
        }`,m="result = activation(result);");const g=e?"result += getBiasAtOutCoords();":"";e&&this.variableNames.push("bias"),o&&this.variableNames.push("preluActivationWeights"),r&&this.variableNames.push("leakyreluAlpha"),this.userCode=`
      ${f}

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2 / ${i};
        int q = d2 - d1 * ${i};
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        //intialize dotProd with a small epsilon seems to reduce GPU accuracy loss.
        vec4 dotProd = vec4(0.000000000000001);

        ${p}

        vec4 result = dotProd - vec4(0.000000000000001);
        ${g}
        ${m}
        setOutput(result);
      }
    `}}function KW(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,filter:r}=t,{strides:i,pad:a,dilations:l,dimRoundingMode:c}=s;let u=l;u==null&&(u=[1,1]),v(ve(i,u),()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${i} and dilations '${u}'`);const h=be(o.shape,r.shape,i,u,a,c,!0);let d;W().getBool("WEBGL_PACK_DEPTHWISECONV")&&h.strideWidth<=2&&h.outChannels/h.inChannels===1?d=new nw(h):d=new ew(h);const p=[[h.padInfo.top,h.padInfo.left],[h.strideHeight,h.strideWidth],[h.dilationHeight,h.dilationWidth],[h.inHeight,h.inWidth]];return e.runWebGLProgram(d,[o,r],"float32",p)}const XW={kernelName:fl,backendName:"webgl",kernelFunc:KW};class YW{constructor(t){this.variableNames=["x","dy"],this.outputShape=t.filterShape;const e=t.strideHeight,s=t.strideWidth,o=t.padInfo.top,r=t.padInfo.left,i=t.outChannels/t.inChannels;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int dm = coords.w;
        int d2 = d1 * ${i} + dm;

        float dotProd = 0.0;

        // TO DO: Vec4 over the batch size
        for (int b = 0; b < ${t.batchSize}; b++) {
          for (int yR = 0; yR < ${t.outHeight}; yR++) {
            int xR = wR + yR * ${e} - ${o};

            if (xR < 0 || xR >= ${t.inHeight}) {
              continue;
            }

            for (int yC = 0; yC < ${t.outWidth}; yC++) {
              int xC = wC + yC * ${s} - ${r};

              if (xC < 0 || xC >= ${t.inWidth}) {
                continue;
              }

              float dyValue = getDy(b, yR, yC, d2);
              float xValue = getX(b, xR, xC, d1);
              dotProd += (xValue * dyValue);
            }
          }
        }
        setOutput(dotProd);
      }
    `}}class ZW{constructor(t){this.variableNames=["dy","W"],this.outputShape=t.inShape;const e=t.filterHeight,s=t.filterWidth,o=t.strideHeight,r=t.strideWidth,i=e-1-t.padInfo.top,a=s-1-t.padInfo.left,l=t.outChannels/t.inChannels;this.userCode=`
      const ivec2 pads = ivec2(${i}, ${a});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[3];
        ivec2 dyCorner = coords.yz - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        float dotProd = 0.0;

        for (int wR = 0; wR < ${e}; wR++) {
          float dyR = float(dyRCorner + wR) / ${o}.0;

          if (dyR < 0.0 || dyR >= ${t.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = ${e} - 1 - wR;

          for (int wC = 0; wC < ${s}; wC++) {
            float dyC = float(dyCCorner + wC) / ${r}.0;

            if (dyC < 0.0 || dyC >= ${t.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = ${s} - 1 - wC;

            // TO DO: Vec4 over the channelMul
            for (int dm = 0; dm < ${l}; dm++) {
              int d2 = d1 * ${l} + dm;
              float xValue = getDy(batch, idyR, idyC, d2);
              float wValue = getW(wRPerm, wCPerm, d1, dm);
              dotProd += xValue * wValue;
            }
          }
        }
        setOutput(dotProd);
      }
    `}}function JW(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,dy:r}=t,{strides:i,dilations:a,pad:l,dimRoundingMode:c,filterShape:u}=s,h=be(o.shape,u,i,a,l,c,!0),d=new YW(h);return e.runWebGLProgram(d,[o,r],"float32")}const QW={kernelName:uh,backendName:"webgl",kernelFunc:JW};function t4(n){const{inputs:t,backend:e,attrs:s}=n,{dy:o,filter:r}=t,{strides:i,dilations:a,pad:l,dimRoundingMode:c,inputShape:u}=s,h=be(u,r.shape,i,a,l,c,!0),d=new ZW(h);return e.runWebGLProgram(d,[o,r],"float32")}const e4={kernelName:hh,backendName:"webgl",kernelFunc:t4};class n4{constructor(t){this.variableNames=["X"],this.outputShape=[t,t],this.userCode=`
      void main() {
          ivec2 coords = getOutputCoords();
          float val = coords[0] == coords[1] ? getX(coords[0]) : 0.0;
          setOutput(val);
      }
    `}}function s4(n){const{inputs:t,backend:e}=n,{x:s}=t,o=[...s.shape,...s.shape],r=H(s.shape),i=et({inputs:{x:s},backend:e,attrs:{shape:[r]}}),a=new n4(r),l=e.runWebGLProgram(a,[i],i.dtype),c=et({inputs:{x:l},backend:e,attrs:{shape:o}});return e.disposeIntermediateTensorInfo(i),e.disposeIntermediateTensorInfo(l),c}const o4={kernelName:Wm,backendName:"webgl",kernelFunc:s4};class r4{constructor(t){this.variableNames=["x","W"],this.outputShape=t.outShape;const{inHeight:e,inWidth:s,padInfo:o,strideHeight:r,strideWidth:i,filterHeight:a,filterWidth:l,dilationHeight:c,dilationWidth:u}=t,{top:h,left:d}=o;this.userCode=`
      const ivec2 strides = ivec2(${r}, ${i});
      const ivec2 pads = ivec2(${h}, ${d});
      const float neg_infinity = -3.4e38;

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        int d1 = coords.w;
        ivec2 outTopLeftCorner =
            coords.yz * strides - pads;
        int hBeg = outTopLeftCorner.x;
        int wBeg = outTopLeftCorner.y;

        float curVal = neg_infinity;
        for (int h = 0; h < ${a}; h++) {
          int hIn = hBeg + h * ${c};

          if (hIn >= 0 && hIn < ${e}) {
            for (int w = 0; w < ${l}; w++) {
              int wIn = wBeg + w * ${u};

              if (wIn >= 0 && wIn < ${s}) {
                float xVal = getX(batch, hIn, wIn, d1);
                float wVal = getW(h, w, d1);

                float val = xVal + wVal;
                if (val > curVal) {
                  curVal = val;
                }
              }
            }
          }
        }

        float result = curVal;
        setOutput(result);
      }
    `}}function i4(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,filter:r}=t,{strides:i,pad:a,dilations:l}=s,c=Ti(o.shape,r.shape,i,a,"NHWC",l);let u;const h=new r4(c);u=e.runWebGLProgram(h,[o,r],"float32");const d=et({inputs:{x:u},backend:e,attrs:{shape:c.outShape}});return e.disposeIntermediateTensorInfo(u),d}const a4={kernelName:ml,backendName:"webgl",kernelFunc:i4};function l4(n){const{inputs:t,backend:e,attrs:s}=n,{equation:o}=s,r=t,{allDims:i,summedDims:a,idDims:l}=Od(o,r.length);Ld(i.length,l,r);const{path:c,steps:u}=Pd(a,l),h=u.length;let d=null,p=i.length;const f=[];for(let m=0;m<h;++m){for(const g of u[m]){const{permutationIndices:x,expandDims:b}=Md(p,l[g]);let w;zd(x)?w=r[g]:(w=Ae({inputs:{x:r[g]},backend:e,attrs:{perm:x}}),f.push(w));const y=w.shape.slice();for(let C=0;C<b.length;++C)y.splice(b[C],0,1);Et(w.shape,y)||(w=et({inputs:{x:w},backend:e,attrs:{shape:y}}),f.push(w)),d===null?d=w:(d=kp({inputs:{a:w,b:d},backend:e}),f.push(d))}m<h-1&&(c[m]>=0&&(d=Ec({inputs:{x:d},backend:e,attrs:{axis:c[m]-(i.length-p),keepDims:!1}}),f.push(d)),p--)}for(const m of f)m!==d&&e.disposeIntermediateTensorInfo(m);return d}const c4={kernelName:dh,backendName:"webgl",kernelFunc:l4};const u4="return (x >= 0.0) ? x : (exp(x) - 1.0);",h4=`
  vec4 result;

  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);
  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);
  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);
  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);

  return result;
`,d4=St({opSnippet:u4,packedOpSnippet:h4}),p4={kernelName:jr,backendName:"webgl",kernelFunc:d4};const f4="return (b >= 0.0) ? a : a * (b + 1.0);",m4=`
  vec4 bGTEZero = vec4(greaterThanEqual(b, vec4(0.)));
  return (bGTEZero * a) + ((vec4(1.0) - bGTEZero) * (a * (b + vec4(1.0))));
`,g4=n=>{const{inputs:t,backend:e}=n,{dy:s,y:o}=t,r=W().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new er(m4,s.shape,o.shape):new ro(f4,s.shape,o.shape);return e.runWebGLProgram(r,[s,o],s.dtype)},x4={kernelName:ph,backendName:"webgl",kernelFunc:g4};const b4=`
  return vec4(equal(a, b));
`,y4="return float(a == b);",w4=we({opSnippet:y4,packedOpSnippet:b4,dtype:"bool",cpuKernelImpl:J3}),C4={kernelName:gl,backendName:"webgl",kernelFunc:w4};const $4=`
  // Error function is calculated approximately with elementary function.
  // See "Handbook of Mathematical Functions with Formulas,
  // Graphs, and Mathematical Tables", Abramowitz and Stegun.
  float p = ${Td};
  float a1 = ${Ed};
  float a2 = ${Rd};
  float a3 = ${Ad};
  float a4 = ${Dd};
  float a5 = ${Fd};

  float sign = sign(x);
  x = abs(x);
  float t = 1.0 / (1.0 + p * x);
  return sign * (1.0 - (((((a5*t + a4)*t) + a3)*t + a2)*t + a1)*t*exp(-x*x));
`,I4=St({opSnippet:$4}),v4={kernelName:qr,backendName:"webgl",kernelFunc:I4};const k4=nr+`
  return exp(x);
`,S4=`
  vec4 result = exp(x);
  bvec4 isNaN = isnan(x);
  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,sw=St({opSnippet:k4,packedOpSnippet:S4,cpuKernelImpl:Q3,dtype:"float32"}),N4={kernelName:Kr,backendName:"webgl",kernelFunc:sw};function zu(n){const{inputs:t,attrs:e,backend:s}=n,{dim:o}=e,{input:r}=t,i=r.shape.length,a=r.shape.slice();let l=o;return o<0&&(v(-(i+1)<=o,()=>`Axis must be in the interval [${-(i+1)}, ${i}]`),l=i+o+1),a.splice(l,0,1),et({inputs:{x:r},backend:s,attrs:{shape:a}})}const T4={kernelName:xl,backendName:"webgl",kernelFunc:zu};const $m="return exp(x) - 1.0;",E4=St({opSnippet:$m,packedOpSnippet:$m,cpuKernelImpl:tz}),R4={kernelName:Xr,backendName:"webgl",kernelFunc:E4};class Im{constructor(t,e,s){this.variableNames=["real","imag"];const o=e[1];this.outputShape=e;const r=s?`2.0 * ${Math.PI}`:`-2.0 * ${Math.PI}`,i=s?`${o}.0`:"1.0";let a;if(t==="real")a="return real * expR - imag * expI;";else if(t==="imag")a="return real * expI + imag * expR;";else throw new Error(`FFT component must be either "real" or "imag", got ${t}.`);this.userCode=`
      const float exponentMultiplier = ${r};

      float unaryOpComplex(float real, float expR, float imag, float expI) {
        ${a}
      }

      float mulMatDFT(int batch, int index) {
        float indexRatio = float(index) / float(${o});
        float exponentMultiplierTimesIndexRatio =
            exponentMultiplier * indexRatio;

        float result = 0.0;

        for (int i = 0; i < ${o}; i++) {
          // x = (-2|2 * PI / N) * index * i;
          float x = exponentMultiplierTimesIndexRatio * float(i);
          float expR = cos(x);
          float expI = sin(x);
          float real = getReal(batch, i);
          float imag = getImag(batch, i);

          result +=
              unaryOpComplex(real, expR, imag, expI) / ${i};
        }

        return result;
      }

      void main() {
        ivec2 coords = getOutputCoords();
        setOutput(mulMatDFT(coords[0], coords[1]));
      }
    `}}function ow(n,t,e){const s=e.texData.get(n.dataId),o=H(n.shape),r=n.shape[n.shape.length-1],i=o/r,a=et({inputs:{x:n},backend:e,attrs:{shape:[i,r]}}),l=a.shape,c=new Im("real",l,t),u=new Im("imag",l,t),h=[{dataId:s.complexTensorInfos.real.dataId,dtype:s.complexTensorInfos.real.dtype,shape:l},{dataId:s.complexTensorInfos.imag.dataId,dtype:s.complexTensorInfos.imag.dtype,shape:l}],d=e.runWebGLProgram(c,h,"float32"),p=e.runWebGLProgram(u,h,"float32"),f=Rs({inputs:{real:d,imag:p},backend:e});e.disposeIntermediateTensorInfo(d),e.disposeIntermediateTensorInfo(p);const m=et({inputs:{x:f},backend:e,attrs:{shape:n.shape}});return e.disposeIntermediateTensorInfo(a),e.disposeIntermediateTensorInfo(f),m}function A4(n){const{inputs:t,backend:e}=n,{input:s}=t;return ow(s,!1,e)}const D4={kernelName:fh,backendName:"webgl",kernelFunc:A4};class F4{constructor(t,e){this.outputShape=[],this.customUniforms=[{name:"value",type:"float"}],this.variableNames=["x"],this.outputShape=t,this.userCode=`
      void main() {
        // Input can be obtained from uniform value.
        setOutput(value);
      }
    `}}function Xi(n){const{backend:t,attrs:e}=n,{shape:s,value:o}=e;let{dtype:r}=e;if(r=r||Wo(o),r==="string"){const i=Yt(r,H(s));return i.fill(o),t.makeTensorInfo(s,r,i)}else{const i=new F4(s,o),a=[[o]];return t.runWebGLProgram(i,[],r,a)}}const _4={kernelName:mh,backendName:"webgl",kernelFunc:Xi};class O4{constructor(t){this.variableNames=["Image"],this.outputShape=[];const e=t[2];this.outputShape=t,this.userCode=`
        void main() {
          ivec4 coords = getOutputCoords();
          int x = coords[2];

          int coordX = ${e} - x - 1;
          float outputValue;
          if(coordX >= 0 && coordX < ${e}) {
            outputValue = getImage(coords[0], coords[1], coordX, coords[3]);
          } else {
            outputValue = getImage(coords[0], coords[1], coords[2], coords[3]);
          }
          setOutput(outputValue);
        }
    `}}const M4={kernelName:gh,backendName:"webgl",kernelFunc:({inputs:n,backend:t})=>{const{image:e}=n,s=t,o=new O4(e.shape);return s.runWebGLProgram(o,[e],e.dtype)}};const vm="return floor(x);",L4=St({opSnippet:vm,packedOpSnippet:vm,cpuKernelImpl:ez}),P4={kernelName:Yr,backendName:"webgl",kernelFunc:L4};const z4=`
  float s = sign(a) * sign(b);
  int ia = round(a);
  int ib = round(b);
  if (ib != 0) {
    // Windows (D3D) wants guaranteed non-zero int division at compile-time.
    return float(idiv(ia, ib, s));
  } else {
    return NAN;
  }
`,B4=`
  ivec4 ia = round(a);
  ivec4 ib = round(b);
  bvec4 cond = notEqual(ib, ivec4(0));
  ivec4 result = ivec4(0);
  vec4 s = sign(a) * sign(b);

  // Windows (D3D) wants guaranteed non-zero int division at compile-time.
  if (cond[0]) {
    result[0] = idiv(ia[0], ib[0], s[0]);
  }
  if (cond[1]) {
    result[1] = idiv(ia[1], ib[1], s[1]);
  }
  if (cond[2]) {
    result[2] = idiv(ia[2], ib[2], s[2]);
  }
  if (cond[3]) {
    result[3] = idiv(ia[3], ib[3], s[3]);
  }
  return vec4(result);
`,V4=we({opSnippet:z4,packedOpSnippet:B4,dtype:"int32"}),W4={kernelName:Zr,backendName:"webgl",kernelFunc:V4};class U4{constructor(t){this.variableNames=["A"];const e=De(),[s,o]=t;this.outputShape=t,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];
        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${o}.0, ${s}.0);

        vec4 values = ${e.texture2D}(A, uv);
        float value;
        if (depth == 0) {
          value = values.r;
        } else if (depth == 1) {
          value = values.g;
        } else if (depth == 2) {
          value = values.b;
        } else if (depth == 3) {
          value = values.a;
        }

        setOutput(floor(value * 255.0 + 0.5));
      }
    `}}class G4{constructor(t){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0;const e=De(),[s,o]=t;this.outputShape=t,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];

        vec4 result = vec4(0.);

        for(int row=0; row<=1; row++) {
          for(int col=0; col<=1; col++) {
            texC = coords[1] + row;
            depth = coords[2] + col;

            vec2 uv = (vec2(texC, texR) + halfCR) /
                       vec2(${o}.0, ${s}.0);
            vec4 values = ${e.texture2D}(A, uv);
            float value;
            if (depth == 0) {
              value = values.r;
            } else if (depth == 1) {
              value = values.g;
            } else if (depth == 2) {
              value = values.b;
            } else if (depth == 3) {
              value = values.a;
            }

            result[row * 2 + col] = floor(value * 255.0 + 0.5);
          }
        }

        ${e.output} = result;
      }
    `}}const H4={kernelName:PC,backendName:"webgl",kernelFunc:j4};let yo,tu=W().getBool("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU");function j4(n){const{inputs:t,backend:e,attrs:s}=n;let{pixels:o}=t;const{numChannels:r}=s,i=typeof HTMLVideoElement<"u"&&o instanceof HTMLVideoElement,a=typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement,[l,c]=i?[o.videoWidth,o.videoHeight]:[o.width,o.height],u=[c,l],h=[c,l,r];if(a||i){const m=W().getBool("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU");(yo==null||m!==tu)&&(tu=m,yo=document.createElement("canvas").getContext("2d",{willReadFrequently:tu})),yo.canvas.width=l,yo.canvas.height=c,yo.drawImage(o,0,0,l,c),o=yo.canvas}const d=e.makeTensorInfo(u,"int32");e.texData.get(d.dataId).usage=Ke.PIXELS,e.gpgpu.uploadPixelDataToTexture(e.getTexture(d.dataId),o);const p=W().getBool("WEBGL_PACK")?new G4(h):new U4(h),f=e.runWebGLProgram(p,[d],"int32");return e.disposeData(d.dataId),f}function q4(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,filter:r,bias:i,preluActivationWeights:a}=t,{strides:l,pad:c,dataFormat:u,dilations:h,dimRoundingMode:d,activation:p,leakyreluAlpha:f}=s,m=ts(u),g=be(o.shape,r.shape,l,h,c,d,!1,m);let x;const b=[],w=i!=null,y=a!=null,C=p==="leakyrelu",I=()=>{const T=[o,r],k=(S,$)=>{if($==="NCHW"&&S.shape.length===1&&S.shape[0]!==1){const R=et({inputs:{x:S},backend:e,attrs:{shape:[S.shape[0],1,1]}});return b.push(R),R}return S};if(w&&T.push(k(i,u)),y&&T.push(k(a,u)),C){const S=e.makeTensorInfo([],"float32",$s(f,"float32"));T.push(S),b.push(S)}return T};if(g.filterHeight===1&&g.filterWidth===1&&g.dilationHeight===1&&g.dilationWidth===1&&g.strideHeight===1&&g.strideWidth===1&&(g.padInfo.type==="SAME"||g.padInfo.type==="VALID"))x=Jy({x:o,filter:r,convInfo:g,backend:e,bias:i,activation:p,preluActivationWeights:a,leakyreluAlpha:f});else if(g.strideWidth<=2&&m==="channelsLast"&&W().getBool("WEBGL_EXP_CONV")){const T=p?Er(p,!0):null,k=new Zy(g,w,T,y,C),S=[[g.padInfo.top,g.padInfo.left],[g.strideHeight,g.strideWidth],[g.dilationHeight,g.dilationWidth],[g.inHeight,g.inWidth]],$=I();x=e.runWebGLProgram(k,$,"float32",S)}else if(W().getBool("WEBGL_CONV_IM2COL"))x=Qy({x:o,filter:r,convInfo:g,backend:e,bias:i,activation:p,preluActivationWeights:a,leakyreluAlpha:f});else{const T=p?Er(p,!1):null,k=new Yy(g,w,T,y,C),S=I();x=e.runWebGLProgram(k,S,"float32")}const N=et({inputs:{x},backend:e,attrs:{shape:g.outShape}});return b.push(x),b.forEach(T=>e.disposeIntermediateTensorInfo(T)),N}const K4={kernelName:Na,backendName:"webgl",kernelFunc:q4};function X4(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,filter:r,bias:i,preluActivationWeights:a}=t,{strides:l,pad:c,dilations:u,dimRoundingMode:h,activation:d,leakyreluAlpha:p}=s,f=[];let m=u;m==null&&(m=[1,1]),v(ve(l,m),()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${l} and dilations '${m}'`);const g=be(o.shape,r.shape,l,m,c,h,!0),x=W().getBool("WEBGL_PACK_DEPTHWISECONV")&&g.strideWidth<=2&&g.outChannels/g.inChannels===1,b=d?Er(d,x):null,w=[o,r],y=i!=null,C=a!=null,I=d==="leakyrelu";if(y&&w.push(i),C&&w.push(a),I){const S=e.makeTensorInfo([],"float32",$s(p,"float32"));w.push(S),f.push(S)}let N;x?N=new nw(g,y,b,C,I):N=new ew(g,y,b,C,I);const T=[[g.padInfo.top,g.padInfo.left],[g.strideHeight,g.strideWidth],[g.dilationHeight,g.dilationWidth],[g.inHeight,g.inWidth]],k=e.runWebGLProgram(N,w,"float32",T);return f.forEach(S=>e.disposeIntermediateTensorInfo(S)),k}const Y4={kernelName:ig,backendName:"webgl",kernelFunc:X4};class Z4{constructor(t,e,s,o){this.sliceDim=t,this.strides=e,this.paramsShape=o,this.variableNames=["x","indices"],this.outputShape=s;const r=_t(s.length);let i=`
    int index;`;for(let a=0;a<this.sliceDim;a++)i+=`
          index = round(getIndices(coords[0], ${a}));
          out_of_bounds = out_of_bounds || index < 0;
          out_of_bounds = out_of_bounds || index >= ${this.paramsShape[a]};
          flattenIndex += index * ${this.strides[a]};`;this.userCode=`
         void main() {
          ${r} coords = getOutputCoords();
          int flattenIndex = 0;
          bool out_of_bounds = false;

          ${i}

          setOutput(out_of_bounds ? 0.0 : getX(flattenIndex, coords[1]));
        }
      `}}function J4(n){const{inputs:t,backend:e}=n,{params:s,indices:o}=t,r=o.shape,i=r[r.length-1],a=H(s.shape),[l,c,u,h]=xd(s,o),d=et({inputs:{x:o},backend:e,attrs:{shape:[c,i]}}),p=et({inputs:{x:s},backend:e,attrs:{shape:[H(s.shape)/u,u]}});if(e.shouldExecuteOnCPU([s,o])||s.dtype==="string"){const x=e.readSync(o.dataId),b=e.bufferSync(s),w=nz(x,b,s.dtype,c,i,u,h,s.shape,a);return e.makeTensorInfo(l,s.dtype,w.values)}const f=new Z4(i,h,[c,u],s.shape),m=e.runWebGLProgram(f,[p,d],p.dtype),g=et({inputs:{x:m},backend:e,attrs:{shape:l}});return e.disposeIntermediateTensorInfo(d),e.disposeIntermediateTensorInfo(p),e.disposeIntermediateTensorInfo(m),g}const Q4={kernelName:Um,backendName:"webgl",kernelFunc:J4};class tU{constructor(t,e){this.variableNames=["A","indices"],this.outputShape=e,this.rank=e.length;const s=_t(this.rank),o=eU(t);this.userCode=`
      void main() {
        ${s} resRC = getOutputCoords();
        int index = int(getIndices(resRC.x, resRC.z));
        float inBounds = (index >= 0) && (index < ${t[2]}) ? 1.0 : 0.0;
        setOutput(inBounds * getA(${o}));
      }
    `}}function eU(n,t){const e=["resRC.x","resRC.y","resRC.z","resRC.w"],s=[];for(let o=0;o<n.length;o++)o===2?s.push("index"):s.push(`${e[o]}`);return s.join()}function rw(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,indices:r}=t,{axis:i,batchDims:a}=s,l=Ct(i,o.shape)[0];if(W().get("DEBUG")){const b=e.readSync(r.dataId),w=o.shape[l];for(let y=0;y<b.length;++y){const C=b[y];v(C<=w-1&&C>=0,()=>`GatherV2: the index value ${C} is not in [0, ${w-1}]`)}}const c=Vd(o,r,l,a),u=H(r.shape),h=[],d=et({inputs:{x:o},backend:e,attrs:{shape:[c.batchSize,c.outerSize,c.dimSize,c.sliceSize]}}),p=et({inputs:{x:r},backend:e,attrs:{shape:[c.batchSize,u/c.batchSize]}});h.push(d),h.push(p);const f=[c.batchSize,c.outerSize,u/c.batchSize,c.sliceSize];if(e.shouldExecuteOnCPU([o,r])||o.dtype==="string"){const b=e.bufferSync(p),w=e.bufferSync(d),y=sz(w,b,f);return h.forEach(C=>e.disposeIntermediateTensorInfo(C)),e.makeTensorInfo(c.outputShape,y.dtype,y.values)}const m=new tU(d.shape,f),g=e.runWebGLProgram(m,[d,p],d.dtype);h.push(g);const x=et({inputs:{x:g},backend:e,attrs:{shape:c.outputShape}});return h.forEach(b=>e.disposeIntermediateTensorInfo(b)),x}const nU={kernelName:yl,backendName:"webgl",kernelFunc:rw};const sU="return float(a > b);",oU=`
  return vec4(greaterThan(a, b));
`,rU=we({opSnippet:sU,packedOpSnippet:oU,cpuKernelImpl:oz,dtype:"bool"}),iU={kernelName:wl,backendName:"webgl",kernelFunc:rU};const aU="return float(a >= b);",lU=`
  return vec4(greaterThanEqual(a, b));
`,cU=we({opSnippet:aU,packedOpSnippet:lU,dtype:"bool",cpuKernelImpl:rz}),uU={kernelName:Jr,backendName:"webgl",kernelFunc:cU};function hU(n){const{inputs:t,backend:e}=n,{input:s}=t;return ow(s,!0,e)}const dU={kernelName:xh,backendName:"webgl",kernelFunc:hU};const pU="return float(!isnan(x) && !isinf(x));",fU=St({opSnippet:pU,dtype:"bool"}),mU={kernelName:ti,backendName:"webgl",kernelFunc:fU};const gU="return float(isinf(x));",xU=St({opSnippet:gU,dtype:"bool"}),bU={kernelName:ei,backendName:"webgl",kernelFunc:xU};const yU="return float(isnan(x));",wU=St({opSnippet:yU,dtype:"bool"}),CU={kernelName:ni,backendName:"webgl",kernelFunc:wU};const $U="return float(a < b);",IU=`
  return vec4(lessThan(a, b));
`,vU=we({opSnippet:$U,packedOpSnippet:IU,cpuKernelImpl:iz,dtype:"bool"}),kU={kernelName:$l,backendName:"webgl",kernelFunc:vU};const SU="return float(a <= b);",NU=`
  return vec4(lessThanEqual(a, b));
`,TU=we({opSnippet:SU,packedOpSnippet:NU,cpuKernelImpl:az,dtype:"bool"}),EU={kernelName:Il,backendName:"webgl",kernelFunc:TU};function RU(n){const{backend:t,attrs:e}=n,{start:s,stop:o,num:r}=e,i=lz(s,o,r);return t.makeTensorInfo([i.length],"float32",i)}const AU={kernelName:yh,backendName:"webgl",kernelFunc:RU};const DU=nr+`
  return x < 0.0 ? 0./0. : log(x);
`,FU=`
  vec4 result = log(x);
  bvec4 isNaN = isnan(x);
  result.r = isNaN.r ? x.r : (x.r < 0.0 ? 0./0. : result.r);
  result.g = isNaN.g ? x.g : (x.g < 0.0 ? 0./0. : result.g);
  result.b = isNaN.b ? x.b : (x.b < 0.0 ? 0./0. : result.b);
  result.a = isNaN.a ? x.a : (x.a < 0.0 ? 0./0. : result.a);
  return result;
`,_U=St({opSnippet:DU,packedOpSnippet:FU,cpuKernelImpl:cz}),OU={kernelName:si,backendName:"webgl",kernelFunc:_U};const MU=nr+`
  return log(1.0 + x);
`,LU=St({opSnippet:MU}),PU={kernelName:oi,backendName:"webgl",kernelFunc:LU};const zU="return float(a >= 1.0 && b >= 1.0);",BU=`
  return vec4(
    vec4(greaterThanEqual(a, vec4(1.0))) *
    vec4(greaterThanEqual(b, vec4(1.0))));
`,VU=we({opSnippet:zU,packedOpSnippet:BU,dtype:"bool"}),WU={kernelName:vl,backendName:"webgl",kernelFunc:VU};const UU="return float(!(x >= 1.0));",GU=St({opSnippet:UU}),HU={kernelName:kl,backendName:"webgl",kernelFunc:GU};const jU="return float(a >= 1.0 || b >= 1.0);",qU=`
  return min(
    vec4(greaterThanEqual(a, vec4(1.0))) +
    vec4(greaterThanEqual(b, vec4(1.0))),
    vec4(1.0));
`,KU=we({opSnippet:jU,packedOpSnippet:qU,dtype:"bool"}),XU={kernelName:Sl,backendName:"webgl",kernelFunc:KU};class YU{constructor(t,e,s,o,r){this.variableNames=["x"],this.outputShape=[];const i=e,a=t[3]-1;this.outputShape=t;let l;const c=`float(${s}) + float(${o}) * sum`;r===.5?l=`inversesqrt(${c})`:r===1?l=`1.0/(${c})`:l=`exp(log(${c}) * float(-${r}));`,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];
        int d = coords[3];
        float x = getX(b, r, c, d);
        float sum = 0.0;
        for (int j = -${i}; j <= ${i}; j++) {
          int idx = d + j;
          if (idx >= 0 && idx <=  ${a}) {
            float z = getX(b, r, c, idx);
            sum += z * z;
          }
        }
        float val = x * ${l};
        setOutput(val);
      }
    `}}class ZU{constructor(t,e,s,o,r){this.variableNames=["x"],this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0;const i=e,a=t[3]-1;this.outputShape=t;let l;const c=`float(${s}) + float(${o}) * sum`;r===.5?l=`inversesqrt(${c})`:r===1?l=`1.0/(${c})`:l=`exp(log(${c}) * float(-${r}));`,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords.x;
        int r = coords.y;
        int c = coords.z;
        int d = coords.w;

        bool hasNextCol = d < ${this.outputShape[3]};
        bool hasNextRow = c < ${this.outputShape[2]};

        vec4 sum = vec4(0.);
        vec4 xFragAtOutputCoords = getX(b, r, c, d);

        vec4 xAtOutputCoords = vec4(
          getChannel(xFragAtOutputCoords, vec2(c, d)),
          hasNextCol ?
            getChannel(xFragAtOutputCoords, vec2(c, d + 1)) : 0.0,
          hasNextRow ?
            getChannel(xFragAtOutputCoords , vec2(c + 1, d)) : 0.0,
          (hasNextRow && hasNextCol) ?
            getChannel(xFragAtOutputCoords, vec2(c + 1, d + 1)) : 0.0
        );

        int firstChannel = d - ${i};
        vec2 cache = vec2(0.);
        if(firstChannel >= 0){
          vec4 firstChannelFrag = getX(b, r, c, firstChannel);
          cache.x = getChannel(firstChannelFrag, vec2(c, firstChannel));
            if(hasNextRow){
              cache.y = getChannel(firstChannelFrag, vec2(c + 1, firstChannel));
            }
        }

        ivec2 depth = ivec2(d, d + 1);
        for (int j = - ${i}; j <= ${i}; j++) {
          ivec2 idx = depth + j;
          bvec2 aboveLowerBound = greaterThanEqual(idx, ivec2(0));
          bvec2 belowUpperBound = lessThanEqual(idx, ivec2(${a}));

          bool depthInRange = aboveLowerBound.x && belowUpperBound.x;
          bool depthPlusOneInRange = aboveLowerBound.y && belowUpperBound.y;

          if(depthInRange || depthPlusOneInRange){
            vec4 z = vec4(0.);
            vec4 xFragAtCurrentDepth;
            z.xz = cache.xy;
            if(depthPlusOneInRange && hasNextCol){
              xFragAtCurrentDepth = idx.y != d ?
                getX(b, r, c, idx.y) : xFragAtOutputCoords;
              z.y = getChannel(xFragAtCurrentDepth, vec2(c, idx.y));
              if(hasNextRow){
                z.w = getChannel(xFragAtCurrentDepth, vec2(c + 1, idx.y));
              }
            }
            cache.xy = z.yw;
            sum += z * z;
          }
        }
        vec4 result = xAtOutputCoords * ${l};
        setOutput(result);
      }
    `}}const JU=n=>{const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{depthRadius:r,bias:i,alpha:a,beta:l}=s,c=W().getBool("WEBGL_PACK_NORMALIZATION")?new ZU(o.shape,r,i,a,l):new YU(o.shape,r,i,a,l);return e.runWebGLProgram(c,[o],o.dtype)},QU={kernelName:Nl,backendName:"webgl",kernelFunc:JU};class tG{constructor(t,e,s,o,r){this.variableNames=["inputImage","outputImage","dy"],this.outputShape=[],this.outputShape=t,this.depth=t[3],this.depthRadius=e,this.bias=s,this.alpha=o,this.beta=r,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];

        float result = 0.0;
        for (int d = 0; d < ${this.depth}; ++d) {
          int depthBegin = int(max(0.0, float(d - ${e})));
          int depthEnd = int(min(float(${this.depth}),
              float(d + ${e} + 1)));

          const int MIN_DEPTH_BEGIN = 0;
          const int MAX_DEPTH_END = ${this.depth};

          float norm = 0.0;
          for (int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k) {
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd) {
              norm += getInputImage(b, r, c, k) * getInputImage(b, r, c, k);
            }
            else {
              break;
            }
          }

          norm = float(${o}) * norm + float(${s});

          for(int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k){
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd){
              float dyi = -2.0 * float(${o})
                * float(${r})
                * getInputImage(b, r, c, k) * getOutputImage(b, r, c, d)
                / norm;
              if (k == d) {
                dyi += pow(norm, -1.0 * ${r});
              }
              if (k == coords[3]) {
                dyi *= getDy(b, r, c, d);
                result += dyi;
              }
            }
            else {
              break;
            }
          }
      }
      setOutput(result);
      }
    `}}const eG=n=>{const{inputs:t,backend:e,attrs:s}=n,{x:o,y:r,dy:i}=t,{depthRadius:a,bias:l,alpha:c,beta:u}=s,h=new tG(o.shape,a,l,c,u);return e.runWebGLProgram(h,[o,r,i],o.dtype)},nG={kernelName:wh,backendName:"webgl",kernelFunc:eG};function sG(n,t,e,s){const o=H(t),i=H(n.shape)/o,a=et({inputs:{x:n},attrs:{shape:[i,o]},backend:s}),l=go(a,n.dtype,"max",s),c=et({inputs:{x:l},attrs:{shape:e},backend:s});return s.disposeIntermediateTensorInfo(a),s.disposeIntermediateTensorInfo(l),c}function iw(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{reductionIndices:r,keepDims:i}=s,a=o.shape.length,l=Ct(r,o.shape);let c=l;const u=qt(c,a),h=u!=null,d=e.shouldExecuteOnCPU([o]);let p=o;if(h){if(d){const w=e.texData.get(p.dataId).values,y=new Array(a);for(let N=0;N<y.length;N++)y[N]=o.shape[u[N]];const C=Ip(w,o.shape,o.dtype,u,y);p=e.makeTensorInfo(y,o.dtype);const I=e.texData.get(p.dataId);I.values=C}else p=Tc(o,u,e);c=Qt(c.length,a)}ye("max",c,a);const[f,m]=fe(p.shape,c);let g=f;i&&(g=se(f,l));let x;if(d){const w=e.texData.get(p.dataId).values,y=uz(w,H(m),g,o.dtype);x=e.makeTensorInfo(g,o.dtype);const C=e.texData.get(x.dataId);C.values=y}else x=sG(p,m,g,e);return h&&e.disposeIntermediateTensorInfo(p),x}const oG={kernelName:Tl,backendName:"webgl",kernelFunc:iw};const rG=vp+`
  return max(a, b);
`,iG=`
  vec4 result = vec4(max(a, b));
  bvec4 isNaNA = isnan(a);
  bvec4 isNaNB = isnan(b);
  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);
  `+mo+`
  return result;
`,aG=we({opSnippet:rG,packedOpSnippet:iG,cpuKernelImpl:hz}),lG={kernelName:ri,backendName:"webgl",kernelFunc:aG};function cG(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t;ji(o,"maxPool");const{filterSize:r,strides:i,pad:a,dimRoundingMode:l}=s,c=1;v(ve(i,c),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${i} and dilations '${c}'`);const u=cn(o.shape,r,i,c,a,l);if(u.filterWidth===1&&u.filterHeight===1&&Et(u.inShape,u.outShape))return He({inputs:{x:o},backend:e});const h=new Rr(u,"max",!1);return e.runWebGLProgram(h,[o],o.dtype)}const uG={kernelName:El,backendName:"webgl",kernelFunc:cG};function hG(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{filterSize:r,strides:i,pad:a,dataFormat:l,dimRoundingMode:c}=s,u=[1,1,1],h=Qn(o.shape,r,i,u,a,c,l),d=new Sp(h,"max",!1);return e.runWebGLProgram(d,[o],o.dtype)}const dG={kernelName:Rl,backendName:"webgl",kernelFunc:hG};class pG{constructor(t){this.variableNames=["dy","maxPos"],this.outputShape=t.inShape;const e=t.strideHeight,s=t.strideWidth,o=t.dilationHeight,r=t.effectiveFilterHeight,i=t.effectiveFilterWidth,a=r-1-t.padInfo.top,l=i-1-t.padInfo.left,c=r*i-1;this.userCode=`
      const ivec2 pads = ivec2(${a}, ${l});

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${r};
          wR += ${o}) {
          float dyR = float(dyRCorner + wR) / ${e}.0;

          if (dyR < 0.0 || dyR >= ${t.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < ${i}; wC++) {
            float dyC = float(dyCCorner + wC) / ${s}.0;

            if (dyC < 0.0 || dyC >= ${t.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);
            int maxPosValue = ${c} - int(getMaxPos(b, idyR, idyC, d));

            // Get the current value, check it against the value from the
            // position matrix.
            int curPosValue = wR * ${i} + wC;
            float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

            dotProd += dyValue * mask;
          }
        }
        setOutput(dotProd);
      }
    `}}class fG{constructor(t){this.variableNames=["dy","maxPos"],this.outputShape=t.inShape;const e=t.strideDepth,s=t.strideHeight,o=t.strideWidth,r=t.dilationDepth,i=t.dilationHeight,a=t.dilationWidth,l=t.effectiveFilterDepth,c=t.effectiveFilterHeight,u=t.effectiveFilterWidth,h=l-1-t.padInfo.front,d=c-1-t.padInfo.top,p=u-1-t.padInfo.left,f=l*c*u-1;this.userCode=`
      const ivec3 pads = ivec3(${h}, ${d}, ${p});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, ch) with pos mask(:, :, :, d) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < ${l};
           wD += ${r}) {
          float dyD = float(dyDCorner + wD) / ${e}.0;

          if (dyD < 0.0 || dyD >= ${t.outDepth}.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < ${c};
              wR += ${i}) {
            float dyR = float(dyRCorner + wR) / ${s}.0;

            if (dyR < 0.0 || dyR >= ${t.outHeight}.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < ${u};
                wC += ${a}) {
              float dyC = float(dyCCorner + wC) / ${o}.0;

              if (dyC < 0.0 || dyC >= ${t.outWidth}.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);
              int maxPosValue = ${f} -
                  int(getMaxPos(batch, idyD, idyR, idyC, ch));

              // Get the current value, check it against the value from the
              // position matrix.
              int curPosValue =
                  wD * ${c} * ${u} +
                  wR * ${u} + wC;
              float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

              dotProd += dyValue * mask;
            }
          }
        }
        setOutput(dotProd);
      }
    `}}function mG(n){const{inputs:t,backend:e,attrs:s}=n,{dy:o,input:r}=t,i=r,{filterSize:a,strides:l,pad:c,dimRoundingMode:u}=s,h=[1,1,1],d=Qn(i.shape,a,l,h,c,u),p=new Sp(d,"max",!0),f=e.runWebGLProgram(p,[i],i.dtype),m=new fG(d),g=e.runWebGLProgram(m,[o,f],i.dtype);return e.disposeIntermediateTensorInfo(f),g}const gG={kernelName:$h,backendName:"webgl",kernelFunc:mG};function xG(n){const{inputs:t,backend:e,attrs:s}=n,{dy:o,input:r,output:i}=t,a=r;ji([r,i],"maxPoolGrad");const{filterSize:l,strides:c,pad:u,dimRoundingMode:h}=s,d=cn(a.shape,l,c,1,u,h),p=!0,f=new Rr(d,"max",p),m=e.runWebGLProgram(f,[a],a.dtype),g=new pG(d),x=e.runWebGLProgram(g,[o,m],a.dtype);return e.disposeIntermediateTensorInfo(m),x}const bG={kernelName:Ch,backendName:"webgl",kernelFunc:xG};function yG(n,t,e,s){let o=new Rr(e,"max",!1);const r=s.runWebGLProgram(o,[n],"float32");o=new Rr(e,"max",!0,!0,t);const i=s.runWebGLProgram(o,[n],"float32");return[r,i]}const wG={kernelName:Gm,backendName:"webgl",kernelFunc:({inputs:n,attrs:t,backend:e})=>{const{x:s}=n,{filterSize:o,strides:r,pad:i,includeBatchInIndex:a}=t,l=e;v(s.shape.length===4,()=>`Error in maxPool: input must be rank 4 but got rank ${s.shape.length}.`);const c=[1,1];v(ve(r,c),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${r} and dilations '${c}'`);const u=cn(s.shape,o,r,c,i),[h,d]=yG(s,a,u,l);return[h,d]}};function CG(n,t,e,s){const o=H(t),i=H(n.shape)/o,a=et({inputs:{x:n},attrs:{shape:[i,o]},backend:s}),l=go(a,"float32","mean",s),c=et({inputs:{x:l},attrs:{shape:e},backend:s});return s.disposeIntermediateTensorInfo(a),s.disposeIntermediateTensorInfo(l),c}const $G={kernelName:Al,backendName:"webgl",kernelFunc:({inputs:n,attrs:t,backend:e})=>{const{x:s}=n,{keepDims:o,axis:r}=t,i=e,a=s.shape.length,l=Ct(r,s.shape);let c=l;const u=qt(c,a),h=u!=null,d=i.shouldExecuteOnCPU([s]),p=[];let f=s;if(h){if(d){const y=i.texData.get(f.dataId).values,C=new Array(a);for(let T=0;T<C.length;T++)C[T]=s.shape[u[T]];const I=Ip(y,s.shape,s.dtype,u,C);f=i.makeTensorInfo(C,s.dtype);const N=i.texData.get(f.dataId);N.values=I}else f=Tc(s,u,i);p.push(f),c=Qt(c.length,a)}ye("sum",c,a);const[m,g]=fe(f.shape,c);let x=m;o&&(x=se(m,l));const b=CG(f,g,x,i);for(const w of p)i.disposeIntermediateTensorInfo(w);return b}};function IG(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{axis:r,keepDims:i}=s,a=o.shape.length,l=Ct(r,o.shape);let c=l;const u=qt(c,a);let h=o;u!=null&&(h=Ae({inputs:{x:o},backend:e,attrs:{perm:u}}),c=Qt(c.length,o.shape.length)),ye("min",c,a);const[d,p]=fe(h.shape,c),f=H(p),m=et({inputs:{x:h},backend:e,attrs:{shape:[-1,f]}}),g=go(m,m.dtype,"min",e);let x;if(i){const b=se(d,l);x=et({inputs:{x:g},backend:e,attrs:{shape:b}})}else x=et({inputs:{x:g},backend:e,attrs:{shape:d}});return e.disposeIntermediateTensorInfo(m),e.disposeIntermediateTensorInfo(g),u!=null&&e.disposeIntermediateTensorInfo(h),x}const vG={kernelName:Dl,backendName:"webgl",kernelFunc:IG};const kG=vp+`
  return min(a, b);
`,SG=`
  vec4 result = vec4(min(a, b));
  bvec4 isNaNA = isnan(a);
  bvec4 isNaNB = isnan(b);
  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);
  `+mo+`
  return result;
`,NG=we({opSnippet:kG,packedOpSnippet:SG,cpuKernelImpl:dz}),TG={kernelName:ii,backendName:"webgl",kernelFunc:NG};class EG{constructor(t,e,s){this.variableNames=["x"],this.outputShape=e.map((u,h)=>u[0]+t[h]+u[1]);const o=t.length,r=_t(o),i=e.map(u=>u[0]).join(","),a=e.map((u,h)=>u[0]+t[h]).join(","),l=["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,o),c=s==="reflect"?0:1;if(o===1){this.userCode=`
        int start = ${i};
        int end = ${a};

        void main() {
          int outC = getOutputCoords();
          if (outC < start) {
            outC = start * 2 - outC - ${c};
          } else if(outC >= end) {
            outC = (end - 1) * 2 - outC + ${c};
          }
          setOutput(getX(outC - start));
        }
      `;return}this.userCode=`
      ${r} start = ${r}(${i});
      ${r} end = ${r}(${a});

      void main() {
        ${r} outC = getOutputCoords();
        for (int i = 0; i < ${o}; i++) {
          if (outC[i] < start[i]) {
            outC[i] = start[i] * 2 - outC[i] - ${c};
          } else if(outC[i] >= end[i]) {
            outC[i] = (end[i] - 1) * 2 - outC[i] + ${c};
          }
        }
        ${r} coords = outC - start;
        setOutput(getX(${l}));
      }
    `}}class RG{constructor(t,e,s){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e.map((f,m)=>f[0]+t[m]+f[1]);const o=t.length,r=_t(o),i=e.map(f=>f[0]).join(","),a=e.map((f,m)=>f[0]+t[m]).join(","),l=Ee("rc",o),c=Ee("source",o),u=`${l[o-1]} < ${this.outputShape[o-1]}`,h=o===1?"source":`vec2(${c.slice(-2).join()})`,d=s==="reflect"?0:1;let p="";if(o===1){const f=`
        ${r} source = rc;
        if (source < start) {
          source = start * 2 - source - ${d};
        } else if (source >= end) {
          source = (end - 1) * 2 - source + ${d};
        }
        source -= start;
      `;p=`
        ${r} rc = outputLoc;
        ${f}
        result[0] = getChannel(getX(${c.join()}), ${h});
        ${l[o-1]} += 1;
        if(${u}) {
          ${f}
          result[1] = getChannel(getX(${c.join()}), ${h});
        }
      `}else{const f=`
        ${r} source = rc;
        ${r} lt = ${r}(lessThan(source, start));
        ${r} gte = ${r}(greaterThanEqual(source, end));
        ${r} orig = 1 - (lt + gte);
        source = orig * source +
                lt * (start * 2 - source - ${d}) +
                gte * ((end - 1) * 2 - source + ${d});
        source -= start;
      `;p=`
        ${r} rc = outputLoc;
        ${f}
        result[0] = getChannel(getX(${c.join()}), ${h});
        ${l[o-1]} += 1;
        if(${u}) {
          ${f}
          result[1] = getChannel(getX(${c.join()}), ${h});
        }
        rc = outputLoc;
        ${l[o-2]} += 1;
        if(${l[o-2]} < ${this.outputShape[o-2]}) {
          ${f}
          result[2] = getChannel(getX(${c.join()}), ${h});
          ${l[o-1]} += 1;
          if(${u}) {
            ${f}
            result[3] = getChannel(getX(${c.join()}), ${h});
          }
        }
      `}this.userCode=`
      const ${r} start = ${r}(${i});
      const ${r} end = ${r}(${a});

      void main() {
        ${r} outputLoc = getOutputCoords();
        vec4 result = vec4(0.);
        ${p}
        setOutput(result);
      }
    `}}const AG=({inputs:n,backend:t,attrs:e})=>{const{x:s}=n,{paddings:o,mode:r}=e,i=W().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new RG(s.shape,o,r):new EG(s.shape,o,r);return t.runWebGLProgram(i,[s],s.dtype)},DG={kernelName:Fl,backendName:"webgl",kernelFunc:AG};const FG=`if (b == 0.0) return NAN;
  return mod(a, b);`,_G=`
  vec4 result = mod(a, b);
  bvec4 isNaN = equal(b, vec4(0.0));
  `+mo+`
  return result;
`,OG=we({opSnippet:FG,packedOpSnippet:_G}),MG={kernelName:ai,backendName:"webgl",kernelFunc:OG};class LG{constructor(t,e,s){this.variableNames=["probs"],this.customUniforms=[{name:"seed",type:"float"}],this.outputShape=[t,s],this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];

        float r = random(seed);
        float cdf = 0.0;

        for (int i = 0; i < ${e-1}; i++) {
          cdf += getProbs(batch, i);

          if (r < cdf) {
            setOutput(float(i));
            return;
          }
        }

        // If no other event happened, last event happened.
        setOutput(float(${e-1}));
      }
    `}}const PG=`
if (a == b) {
  return 1.0;
};
return a / b;`,zG=`
  // vec4 one = vec4(equal(a, b));
  // return one + (vec4(1.0) - one) * a / b;
  vec4 result = a / b;
  if(a.x == b.x) {
    result.x = 1.;
  }
  if(a.y == b.y) {
    result.y = 1.;
  }
  if(a.z == b.z) {
    result.z = 1.;
  }
  if(a.w == b.w) {
    result.w = 1.;
  }

  return result;
`,aw=we({opSnippet:PG,packedOpSnippet:zG,checkOutOfBounds:!0}),BG={kernelName:Hr,backendName:"webgl",kernelFunc:aw};const km="return a - b;",lw=we({opSnippet:km,packedOpSnippet:km,supportsComplex:!0,cpuKernelImpl:Fz}),VG={kernelName:Ii,backendName:"webgl",kernelFunc:lw};function cw(n){const{inputs:t,backend:e,attrs:s}=n,{logits:o}=t,{dim:r}=s,i=Ct([r],o.shape),a=iw({inputs:{x:o},backend:e,attrs:{reductionIndices:i,keepDims:!1}}),l=se(a.shape,i),c=et({inputs:{x:a},backend:e,attrs:{shape:l}}),u=lw({inputs:{a:o,b:c},backend:e}),h=sw({inputs:{x:u},backend:e}),d=Ec({inputs:{x:h},backend:e,attrs:{axis:i,keepDims:!1}}),p=et({inputs:{x:d},backend:e,attrs:{shape:l}}),f=aw({inputs:{a:h,b:p},backend:e});return e.disposeIntermediateTensorInfo(a),e.disposeIntermediateTensorInfo(c),e.disposeIntermediateTensorInfo(u),e.disposeIntermediateTensorInfo(h),e.disposeIntermediateTensorInfo(d),e.disposeIntermediateTensorInfo(p),f}const WG={kernelName:Zl,backendName:"webgl",kernelFunc:cw};function UG(n){const{inputs:t,backend:e,attrs:s}=n,{logits:o}=t,{numSamples:r,seed:i,normalized:a}=s,l=a?o:cw({inputs:{logits:o},backend:e,attrs:{dim:o.shape.length-1}}),c=l.shape[0],u=l.shape[1],h=new LG(c,u,r),d=[[i]],p=e.runWebGLProgram(h,[l],"int32",d);return a||e.disposeIntermediateTensorInfo(l),p}const GG={kernelName:Hm,backendName:"webgl",kernelFunc:UG};const HG=hn+`
  return -x;
`,jG=`
  vec4 result = -x;
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`;function qG(n){const{inputs:t,backend:e}=n,{x:s}=t;if(e.shouldExecuteOnCPU([s])){const r=e.texData.get(s.dataId),[i,a]=fz(r.values,s.shape,s.dtype);return e.makeTensorInfo(a,s.dtype,i)}let o;return W().getBool("WEBGL_PACK_UNARY_OPERATIONS")?o=new us(s.shape,jG):o=new Rn(s.shape,HG),e.runWebGLProgram(o,[s],s.dtype)}const KG={kernelName:_l,backendName:"webgl",kernelFunc:qG};const XG=hd;function YG(n){qe("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");const{inputs:t,backend:e,attrs:s}=n,{boxes:o,scores:r}=t,{maxOutputSize:i,iouThreshold:a,scoreThreshold:l}=s,c=e.readSync(o.dataId),u=e.readSync(r.dataId),{selectedIndices:h}=XG(c,u,i,a,l);return e.makeTensorInfo([h.length],"int32",new Int32Array(h))}const ZG={kernelName:Ih,backendName:"webgl",kernelFunc:YG};const JG=dd;function QG(n){qe("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");const{inputs:t,backend:e,attrs:s}=n,{boxes:o,scores:r}=t,{maxOutputSize:i,iouThreshold:a,scoreThreshold:l,padToMaxOutputSize:c}=s,u=e.readSync(o.dataId),h=e.readSync(r.dataId),{selectedIndices:d,validOutputs:p}=JG(u,h,i,a,l,c);return[e.makeTensorInfo([d.length],"int32",new Int32Array(d)),e.makeTensorInfo([],"int32",new Int32Array([p]))]}const tH={kernelName:vh,backendName:"webgl",kernelFunc:QG};const eH=pd;function nH(n){qe("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");const{inputs:t,backend:e,attrs:s}=n,{boxes:o,scores:r}=t,{maxOutputSize:i,iouThreshold:a,scoreThreshold:l,softNmsSigma:c}=s,u=e.readSync(o.dataId),h=e.readSync(r.dataId),d=i,p=a,f=l,m=c,{selectedIndices:g,selectedScores:x}=eH(u,h,d,p,f,m);return[e.makeTensorInfo([g.length],"int32",new Int32Array(g)),e.makeTensorInfo([x.length],"float32",new Float32Array(x))]}const sH={kernelName:kh,backendName:"webgl",kernelFunc:nH};class oH{constructor(t,e,s,o){this.variableNames=["indices"],this.outputShape=[t,e],this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int index = round(getIndices(coords.x));
        setOutput(mix(float(${o}), float(${s}),
                      float(index == coords.y)));
      }
    `}}const rH=n=>{const{inputs:t,backend:e,attrs:s}=n,{indices:o}=t,{dtype:r,depth:i,onValue:a,offValue:l}=s,c=H(o.shape),u=new oH(c,i,a,l),h=et({inputs:{x:o},backend:e,attrs:{shape:[c]}}),d=e.runWebGLProgram(u,[h],r);e.disposeIntermediateTensorInfo(h);const p=[...o.shape,i],f=et({inputs:{x:d},backend:e,attrs:{shape:p}});return e.disposeIntermediateTensorInfo(d),f},iH={kernelName:Ll,backendName:"webgl",kernelFunc:rH};function tl(n){const{inputs:t,backend:e}=n,{x:s}=t;if(s.dtype==="complex64"){const o=Ki({inputs:{input:s},backend:e}),r=tl({inputs:{x:o},backend:e}),i=Rc({inputs:{input:s},backend:e}),a=tl({inputs:{x:i},backend:e}),l=Rs({inputs:{real:r,imag:a},backend:e});return e.disposeIntermediateTensorInfo(o),e.disposeIntermediateTensorInfo(r),e.disposeIntermediateTensorInfo(i),e.disposeIntermediateTensorInfo(a),l}else return Xi({attrs:{shape:s.shape,dtype:s.dtype,value:s.dtype==="string"?"":0},backend:e})}const aH={kernelName:tc,backendName:"webgl",kernelFunc:tl};function uw(n){const{inputs:t,backend:e}=n,{x:s}=t;if(s.dtype==="string")throw new Error("onesLike is not supported under string dtype");if(s.dtype==="complex64"){const o=Ki({inputs:{input:s},backend:e}),r=uw({inputs:{x:o},backend:e}),i=Rc({inputs:{input:s},backend:e}),a=tl({inputs:{x:i},backend:e}),l=Rs({inputs:{real:r,imag:a},backend:e});return e.disposeIntermediateTensorInfo(o),e.disposeIntermediateTensorInfo(r),e.disposeIntermediateTensorInfo(i),e.disposeIntermediateTensorInfo(a),l}else return Xi({attrs:{shape:s.shape,dtype:s.dtype,value:1},backend:e})}const lH={kernelName:Ml,backendName:"webgl",kernelFunc:uw};function cH(n){const{inputs:t,backend:e,attrs:s}=n,{axis:o}=s;if(t.length===1)return zu({inputs:{input:t[0]},backend:e,attrs:{dim:o}});const r=t[0].shape,i=t[0].dtype;t.forEach(u=>{Hu(r,u.shape,"All tensors passed to stack must have matching shapes"),v(i===u.dtype,()=>"All tensors passed to stack must have matching dtypes")});const a=[],l=t.map(u=>{const h=zu({inputs:{input:u},backend:e,attrs:{dim:o}});return a.push(h),h}),c=Xy({inputs:l,backend:e,attrs:{axis:o}});return a.forEach(u=>e.disposeIntermediateTensorInfo(u)),c}const uH={kernelName:Pl,backendName:"webgl",kernelFunc:cH};class hH{constructor(t,e,s){this.variableNames=["x"],this.customUniforms=[{name:"value",type:"float"}],this.outputShape=e.map((c,u)=>c[0]+t[u]+c[1]);const o=t.length,r=_t(o),i=e.map(c=>c[0]).join(","),a=e.map((c,u)=>c[0]+t[u]).join(","),l=["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,o);if(o===1){this.userCode=`
        int start = ${i};
        int end = ${a};

        void main() {
          int outC = getOutputCoords();
          if (outC < start || outC >= end) {
            setOutput(value);
          } else {
            setOutput(getX(outC - start));
          }
        }
      `;return}this.userCode=`
      ${r} start = ${r}(${i});
      ${r} end = ${r}(${a});

      void main() {
        ${r} outC = getOutputCoords();
        if (any(lessThan(outC, start)) || any(greaterThanEqual(outC, end))) {
          setOutput(value);
        } else {
          ${r} coords = outC - start;
          setOutput(getX(${l}));
        }
      }
    `}}class dH{constructor(t,e,s){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"value",type:"float"}],this.outputShape=e.map((m,g)=>m[0]+t[g]+m[1]);const o=t.length,r=_t(o),i=e.map(m=>m[0]).join(","),a=e.map((m,g)=>m[0]+t[g]).join(","),l=Ee("rc",o),c=Ee("source",o),u=`${l[o-1]} < ${this.outputShape[o-1]}`,h=o===1?"source":`vec2(${c.slice(-2).join()})`,d=[`${r} rc = outputLoc;`,`${l[o-1]} += 1;
       if(${u}) {
      `,o===1?"":`}
       rc = outputLoc;
       ${l[o-2]} += 1;
       if(${l[o-2]} < ${this.outputShape[o-2]}) {`,o===1?"":`  ${l[o-1]} += 1;
         if(${u}) {`],p=o===1?"rc < start || rc >= end":"any(lessThan(rc, start)) || any(greaterThanEqual(rc, end))";let f="";for(let m=0,g=o===1?2:4;m<g;m++)f+=`
        ${d[m]}
        if (${p}) {
          result[${m}] = float(value);
        } else {
          ${r} source = rc - start;
          result[${m}] = getChannel(getX(${c.join()}), ${h});
        }
      `;f+=o===1?"} ":"}}",this.userCode=`
      const ${r} start = ${r}(${i});
      const ${r} end = ${r}(${a});

      void main() {
        ${r} outputLoc = getOutputCoords();
        vec4 result = vec4(0.);
        ${f}
        setOutput(result);
      }
    `}}const hw=n=>{const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{paddings:r,constantValue:i}=s;if(H(o.shape)===0){const c=r.map((u,h)=>u[0]+o.shape[h]+u[1]);return Xi({backend:e,attrs:{shape:c,value:i,dtype:o.dtype}})}const a=W().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new dH(o.shape,r,i):new hH(o.shape,r,i),l=[[i]];return e.runWebGLProgram(a,[o],o.dtype,l)},pH={kernelName:zl,backendName:"webgl",kernelFunc:hw};const fH=`
  if(a < 0.0 && floor(b) < b){
    return NAN;
  }
  if (b == 0.0) {
    return 1.0;
  }
  return (round(mod(b, 2.0)) != 1) ?
      pow(abs(a), b) : sign(a) * pow(abs(a), b);
`,mH=`
  // isModRound1 has 1 for components with round(mod(b, 2.0)) == 1, 0 otherwise.
  vec4 isModRound1 = vec4(equal(round(mod(b, 2.0)), ivec4(1)));
  vec4 multiplier = sign(a) * isModRound1 + (vec4(1.0) - isModRound1);
  vec4 result = multiplier * pow(abs(a), b);

  // Ensure that a^0 = 1, including 0^0 = 1 as this correspond to TF and JS
  bvec4 isExpZero = equal(b, vec4(0.0));
  result.r = isExpZero.r ? 1.0 : result.r;
  result.g = isExpZero.g ? 1.0 : result.g;
  result.b = isExpZero.b ? 1.0 : result.b;
  result.a = isExpZero.a ? 1.0 : result.a;

  bvec4 isNaN1 = lessThan(a, vec4(0.0));
  bvec4 isNaN2 = lessThan(floor(b), b);
  bvec4 isNaN = bvec4(isNaN1.x && isNaN2.x, isNaN1.y && isNaN2.y, isNaN1.z && isNaN2.z, isNaN1.w && isNaN2.w);
  `+mo+`
  return result;
`,gH=we({opSnippet:fH,packedOpSnippet:mH}),xH={kernelName:ci,backendName:"webgl",kernelFunc:gH};function bH(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{axis:r,keepDims:i}=s,a=o.shape.length,l=[],c=Ct(r,o.shape);let u=c;const h=qt(u,a);let d=o;h!=null&&(d=Ae({inputs:{x:o},backend:e,attrs:{perm:h}}),u=Qt(u.length,a),l.push(d)),ye("prod",u,a);let p;if(e.shouldExecuteOnCPU([d])){const f=e.texData.get(d.dataId).values,{outVals:m,outShape:g,outDtype:x}=gz(d.shape,d.dtype,f,u);p=e.makeTensorInfo(g,x,m)}else{const[f,m]=fe(d.shape,u),g=H(m),x=et({inputs:{x:d},backend:e,attrs:{shape:[-1,g]}}),b=Lh(o.dtype),w=go(x,b,"prod",e);p=et({inputs:{x:w},backend:e,attrs:{shape:f}}),l.push(x),l.push(w)}if(i){l.push(p);const f=se(p.shape,c);p=et({inputs:{x:p},backend:e,attrs:{shape:f}})}return l.forEach(f=>e.disposeIntermediateTensorInfo(f)),p}const yH={kernelName:Vl,backendName:"webgl",kernelFunc:bH};function wH(n){const{inputs:t,backend:e,attrs:s}=n,{paramsNestedSplits:o,paramsDenseValues:r,indices:i}=t,{outputRaggedRank:a}=s,l=o.map(x=>e.readSync(x.dataId)),c=o.map(x=>x.shape),u=e.readSync(r.dataId),h=e.readSync(i.dataId),[d,p,f]=xz(l,c,u,r.shape,r.dtype,h,i.shape,a),m=d.map(x=>e.makeTensorInfo([x.length],"int32",x)),g=e.makeTensorInfo(f,r.dtype,p);return m.concat([g])}const CH={kernelName:jm,backendName:"webgl",kernelFunc:wH};function $H(n){const{inputs:t,backend:e}=n,{starts:s,limits:o,deltas:r}=t,i=e.readSync(s.dataId),a=e.readSync(o.dataId),l=e.readSync(r.dataId),[c,u]=bz(i,s.shape,s.dtype,a,o.shape,l,r.shape),h=e.makeTensorInfo([c.length],"int32",c),d=e.makeTensorInfo([u.length],s.dtype,u);return[h,d]}const IH={kernelName:qm,backendName:"webgl",kernelFunc:$H};function vH(n){const{inputs:t,backend:e,attrs:s}=n,{shape:o,values:r,defaultValue:i,rowPartitionTensors:a}=t,{rowPartitionTypes:l}=s,c=e.readSync(o.dataId),u=e.readSync(r.dataId),h=e.readSync(i.dataId),d=a.map(g=>e.readSync(g.dataId)),p=a.map(g=>g.shape),[f,m]=yz(c,o.shape,u,r.shape,r.dtype,h,i.shape,d,p,l);return e.makeTensorInfo(f,r.dtype,m)}const kH={kernelName:Km,backendName:"webgl",kernelFunc:vH};const dw=n=>{const{backend:t,attrs:e}=n,{start:s,stop:o,step:r,dtype:i}=e,a=wz(s,o,r,i);return t.makeTensorInfo([a.length],i,a)},SH={kernelName:Sh,backendName:"webgl",kernelFunc:dw};const NH="return 1.0 / x;",TH=St({opSnippet:NH}),EH={kernelName:ui,backendName:"webgl",kernelFunc:TH};const RH=hn+`
  return (x < 0.0) ? 0.0 : x;
`,AH=`
  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,DH=St({opSnippet:RH,packedOpSnippet:AH}),FH={kernelName:hi,backendName:"webgl",kernelFunc:DH};const _H=hn+`
  return (x < 0.0) ? 0.0 : min(6.0, x);
`,OH=`
  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,MH=St({opSnippet:_H,packedOpSnippet:OH}),LH={kernelName:di,backendName:"webgl",kernelFunc:MH};class PH{constructor(t,e,s,o,r){this.variableNames=["A"],this.outputShape=[];const[i,a,l,c]=t;this.outputShape=[i,e,s,c];const u=[o&&e>1?a-1:a,o&&s>1?l-1:l],h=[o&&e>1?e-1:e,o&&s>1?s-1:s];let d;r?d="(vec2(yRC) + vec2(0.5)) * effectiveInputOverOutputRatioRC - vec2(0.5)":d="vec2(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          ${u[0]/h[0]},
          ${u[1]/h[1]});
      const vec2 inputShapeRC = vec2(${a}.0, ${l}.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = ${d};

        // Compute the four integer indices.
        ivec2 sourceFloorRC = ivec2(max(sourceFracIndexRC, vec2(0.0)));
        ivec2 sourceCeilRC = ivec2(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        float topLeft = getA(b, sourceFloorRC.x, sourceFloorRC.y, d);
        float bottomLeft = getA(b, sourceCeilRC.x, sourceFloorRC.y, d);
        float topRight = getA(b, sourceFloorRC.x, sourceCeilRC.y, d);
        float bottomRight = getA(b, sourceCeilRC.x, sourceCeilRC.y, d);

        vec2 fracRC = sourceFracIndexRC - vec2(sourceFloorRC);

        float top = topLeft + (topRight - topLeft) * fracRC.y;
        float bottom = bottomLeft + (bottomRight - bottomLeft) * fracRC.y;
        float newValue = top + (bottom - top) * fracRC.x;

        setOutput(newValue);
      }
    `}}class zH{constructor(t,e,s,o,r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[];const[i,a,l,c]=t;this.outputShape=[i,e,s,c];const u=[o&&e>1?a-1:a,o&&s>1?l-1:l],h=[o&&e>1?e-1:e,o&&s>1?s-1:s];let d;r?d="(vec3(yRC) + vec3(0.5)) * effectiveInputOverOutputRatioRC - vec3(0.5)":d="vec3(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`
      const vec3 effectiveInputOverOutputRatioRC = vec3(
          ${u[0]/h[0]},
          ${u[1]/h[1]},
          ${u[1]/h[1]});
      const vec3 inputShapeRC = vec3(${a}.0, ${l}.0,
                                     ${l}.0);

      float getAValue(int b, int r, int c, int d) {
        return getChannel(getA(b, r, c, d), vec2(c, d));
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        // Calculate values for next column in yRC.z.
        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);

        // Fractional source index.
        vec3 sourceFracIndexRC = ${d};

        // Compute the four integer indices.
        ivec3 sourceFloorRC = ivec3(max(sourceFracIndexRC, vec3(0.0)));
        ivec3 sourceCeilRC = ivec3(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        // Should we calculate next column and row elements in 2x2 packed cell.
        bool hasNextCol = d < ${c-1};
        bool hasNextRow = coords.z < ${s-1};

        // In parallel, construct four corners for all four components in
        // packed 2x2 cell.
        vec4 topLeft = vec4(
          getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 bottomLeft = vec4(
          getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 topRight = vec4(
          getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec4 bottomRight = vec4(
          getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec3 fracRC = sourceFracIndexRC - vec3(sourceFloorRC);

        vec4 top = mix(topLeft, topRight, fracRC.yyzz);
        vec4 bottom = mix(bottomLeft, bottomRight, fracRC.yyzz);
        vec4 newValue = mix(top, bottom, fracRC.x);

        setOutput(newValue);
      }
    `}}function BH(n){const{inputs:t,backend:e,attrs:s}=n,{images:o}=t,{alignCorners:r,halfPixelCenters:i,size:a}=s,[l,c]=a,u=W().getBool("WEBGL_PACK_IMAGE_OPERATIONS")?new zH(o.shape,l,c,r,i):new PH(o.shape,l,c,r,i);return e.runWebGLProgram(u,[o],"float32")}const VH={kernelName:Gl,backendName:"webgl",kernelFunc:BH};class WH{constructor(t,e,s){this.variableNames=["dy"],this.outputShape=[],this.outputShape=e;const[,o,r]=e,[,i,a]=t,l=[s&&i>1?o-1:o,s&&a>1?r-1:r],c=[s&&i>1?i-1:i,s&&a>1?a-1:a],u=l[0]/c[0],h=l[1]/c[1],d=1/u,p=1/h,f=Math.ceil(d)*2+2,m=Math.ceil(p)*2+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(${u});
        const float widthScale = float(${h});

        const float invHeightScale = float(${d});
        const float invWidthScale = float(${p});

        const int winHeight = int(${f});
        const int winWidth = int(${m});

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(startRLerp - float(winHeight / 2));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(startCLerp - float(winWidth / 2));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= ${i}) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= ${a}) {
              continue;
            }

            float dxR = float(dyR) * heightScale;
            int topDxRIndex = int(floor(dxR));
            int bottomDxRIndex = int(min(ceil(dxR), ${o-1}.0));
            float dxRLerp = dxR - float(topDxRIndex);
            float inverseDxRLerp = 1.0 - dxRLerp;

            float dxC = float(dyC) * widthScale;
            int leftDxCIndex = int(floor(dxC));
            int rightDxCIndex = int(min(ceil(dxC), ${r-1}.0));
            float dxCLerp = dxC - float(leftDxCIndex);
            float inverseDxCLerp = 1.0 - dxCLerp;

            if (r == topDxRIndex && c == leftDxCIndex) {
              // topLeft
              accumulator +=
                getDy(b, dyR, dyC, d) * inverseDxRLerp * inverseDxCLerp;
            }

            if (r == topDxRIndex && c == rightDxCIndex) {
              // topRight
              accumulator += getDy(b, dyR, dyC, d) * inverseDxRLerp * dxCLerp;
            }

            if (r == bottomDxRIndex && c == leftDxCIndex) {
              // bottomLeft
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * inverseDxCLerp;
            }

            if (r == bottomDxRIndex && c == rightDxCIndex) {
              // bottomRight
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * dxCLerp;
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `}}function UH(n){const{inputs:t,backend:e,attrs:s}=n,{images:o,dy:r}=t,{alignCorners:i}=s,a=new WH(r.shape,o.shape,i);return e.runWebGLProgram(a,[r],r.dtype)}const GH={kernelName:Eh,backendName:"webgl",kernelFunc:UH};class HH{constructor(t,e,s,o,r){this.variableNames=["A"],this.outputShape=[];const[i,a,l,c]=t;this.outputShape=[i,e,s,c];const u=[o&&e>1?a-1:a,o&&s>1?l-1:l],h=[o&&e>1?e-1:e,o&&s>1?s-1:s],d=o?"0.5":"0.0";let p;r?p="max((vec2(yRC) + vec2(0.5)) * effectiveInputOverOutputRatioRC, vec2(0.0))":p="vec2(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          ${u[0]/h[0]},
          ${u[1]/h[1]});
      const vec2 inputShapeRC = vec2(${a}.0, ${l}.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = ${p};

        // Compute the coordinators of nearest neighbor point.
        ivec2 sourceNearestRC = ivec2(
          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + ${d})));
        float newValue = getA(b, sourceNearestRC.x, sourceNearestRC.y, d);

        setOutput(newValue);
      }
    `}}class jH{constructor(t,e,s,o,r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[];const[i,a,l,c]=t;this.outputShape=[i,e,s,c];const u=[o&&e>1?a-1:a,o&&s>1?l-1:l],h=[o&&e>1?e-1:e,o&&s>1?s-1:s],d=o?"0.5":"0.0";let p;r?p="max((vec3(yRC) + vec3(0.5)) * effectiveInputOverOutputRatioRC, vec3(0.0))":p="vec3(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`
      const vec3 effectiveInputOverOutputRatioRC = vec3(
          ${u[0]/h[0]},
          ${u[1]/h[1]},
          ${u[1]/h[1]});
      const vec3 inputShapeRC = vec3(${a}.0, ${l}.0,
                                     ${l}.0);

      float getAValue(int b, int r, int c, int d) {
        return getChannel(getA(b, r, c, d), vec2(c, d));
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        // Calculate values for next column in yRC.z.
        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);

        // Fractional source index.
        vec3 sourceFracIndexRC = ${p};

        // Compute the coordinators of nearest neighbor point.
        ivec3 sourceNearestRC = ivec3(
          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + ${d})));

        // Should we calculate next column and row elements in 2x2 packed cell.
        bool hasNextCol = d < ${c-1};
        bool hasNextRow = coords.z < ${s-1};

        vec4 newValue = vec4(
          getAValue(b, sourceNearestRC.x, sourceNearestRC.y, d),
          hasNextCol ? getAValue(b, sourceNearestRC.x, sourceNearestRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceNearestRC.x, sourceNearestRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceNearestRC.x, sourceNearestRC.z, d + 1) : 0.0);

        setOutput(newValue);
      }
    `}}function qH(n){const{inputs:t,backend:e,attrs:s}=n,{images:o}=t,{alignCorners:r,halfPixelCenters:i,size:a}=s,[l,c]=a,u=W().getBool("WEBGL_PACK_IMAGE_OPERATIONS")?new jH(o.shape,l,c,r,i):new HH(o.shape,l,c,r,i);return e.runWebGLProgram(u,[o],o.dtype)}const KH={kernelName:Ul,backendName:"webgl",kernelFunc:qH};class XH{constructor(t,e,s){this.variableNames=["dy"],this.outputShape=[],this.outputShape=e;const[,o,r]=e,[,i,a]=t,l=[s&&i>1?o-1:o,s&&a>1?r-1:r],c=[s&&i>1?i-1:i,s&&a>1?a-1:a],u=l[0]/c[0],h=l[1]/c[1],d=1/u,p=1/h,f=Math.ceil(d)*2+2,m=Math.ceil(p)*2+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(${u});
        const float widthScale = float(${h});

        const float invHeightScale = float(${d});
        const float invWidthScale = float(${p});

        const int winHeight = int(${f});
        const int winWidth = int(${m});

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(floor(startRLerp - float(winHeight / 2)));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(floor(startCLerp - float(winWidth / 2)));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= ${i}) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= ${a}) {
              continue;
            }

            float sourceFracRow =
              float(${l[0]}) *
                (float(dyR) / float(${c[0]}));

            float sourceFracCol =
                float(${l[1]}) *
                  (float(dyC) / float(${c[1]}));

            int sourceNearestRow = int(min(
                float(int(${o}) - 1),
                ${s} ? float(round(sourceFracRow)) :
                                  float(floor(sourceFracRow))));

            int sourceNearestCol = int(min(
                float(int(${r}) - 1),
                ${s} ? float(round(sourceFracCol)) :
                                  float(floor(sourceFracCol))));

            if (r == sourceNearestRow && c == sourceNearestCol) {
              accumulator += getDy(b, dyR, dyC, d);
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `}}function YH(n){const{inputs:t,backend:e,attrs:s}=n,{images:o,dy:r}=t,{alignCorners:i}=s,a=new XH(r.shape,o.shape,i);return e.runWebGLProgram(a,[r],r.dtype)}const ZH={kernelName:Th,backendName:"webgl",kernelFunc:YH};class JH{constructor(t,e){this.variableNames=["x"];const s=t.length;if(s>4)throw new Error(`WebGL backend: Reverse of rank-${s} tensor is not yet supported`);if(this.outputShape=t,s===1){this.userCode=`
        void main() {
          int coord = getOutputCoords();
          setOutput(getX(${t[0]} - coord - 1));
        }
      `;return}const o=a=>e.indexOf(a)!==-1&&t[a]!==1?`${t[a]} - coords[${a}] - 1`:`coords[${a}]`,r=t.map((a,l)=>o(l)).join(","),i=_t(s);this.userCode=`
      void main() {
        ${i} coords = getOutputCoords();
        setOutput(getX(${r}));
      }
    `}}class QH{constructor(t,e){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0;const s=t.length;if(s>4)throw new Error(`WebGL backend: Reverse of rank-${s} tensor is not yet supported`);this.outputShape=t;const o=Ee("rc",s),r=`${o[s-1]} + 1 < ${this.outputShape[s-1]}`,i=`${o[s-2]} + 1 < ${this.outputShape[s-2]}`,a=_t(s);s===1?this.userCode=`
        void main(){
          int rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = getChannel(getX(${t[0]} - rc - 1),
            ${t[0]} - rc - 1);
          if(${r}){
              result.g = getChannel(getX(${t[0]} - (rc  + 1) - 1),
                ${t[0]} - (rc  + 1) - 1);
          }
          setOutput(result);
        }
      `:this.userCode=`
        void main() {
          ${a} rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = ${l(o.slice())};
          if(${r}){
            result.g = ${c(o.slice())};
          }
          if(${i}) {
            result.b = ${u(o.slice())};
            if(${r}) {
              result.a = ${h(o.slice())};
            }
          }
          setOutput(result);
        }
    `;function l(f){return d(f)}function c(f){return f[s-1]="("+f[s-1]+" + 1)",d(f)}function u(f){return f[s-2]="("+f[s-2]+" + 1)",d(f)}function h(f){return f[s-1]="("+f[s-1]+" + 1)",f[s-2]="("+f[s-2]+" + 1)",d(f)}function d(f){const m=t.map((b,w)=>p(w,f)),g=m.join(","),x=m.slice(-2).join(",");return`getChannel(getX(${g}), vec2(${x}))`}function p(f,m){return e.indexOf(f)!==-1&&t[f]!==1?`${t[f]} - ${m[f]} - 1`:`${m[f]}`}}}function tj(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{dims:r}=s,i=o.shape.length,a=Ct(r,o.shape);if(i===0)return He({inputs:{x:o},backend:e});const l=W().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new QH(o.shape,a):new JH(o.shape,a);return e.runWebGLProgram(l,[o],o.dtype)}const ej={kernelName:Hl,backendName:"webgl",kernelFunc:tj};class nj{constructor(t,e){this.variableNames=["Image"],this.outputShape=[],this.customUniforms=[{name:"params",type:"vec4"}];const s=t[1],o=t[2];this.outputShape=t;let r="";typeof e=="number"?r=`float outputValue = ${e.toFixed(2)};`:r=`
        vec3 fill = vec3(${e.join(",")});
        float outputValue = fill[coords[3]];`,this.userCode=`
        void main() {
          ivec4 coords = getOutputCoords();
          int x = coords[2];
          int y = coords[1];
          float coordXFloat = (float(x) - params[0]) * params[3] -
            (float(y) - params[1]) * params[2];
          float coordYFloat = (float(x) - params[0]) * params[2] +
            (float(y) - params[1]) * params[3];
          int coordX = int(round(coordXFloat + params[0]));
          int coordY = int(round(coordYFloat + params[1]));
          ${r}
          if(coordX >= 0 && coordX < ${o} && coordY >= 0 && coordY < ${s}) {
            outputValue = getImage(coords[0], coordY, coordX, coords[3]);
          }
          setOutput(outputValue);
        }
    `}}const sj={kernelName:Mh,backendName:"webgl",kernelFunc:({inputs:n,attrs:t,backend:e})=>{const{image:s}=n,{radians:o,fillValue:r,center:i}=t,a=e,l=new nj(s.shape,r),[c,u]=kd(i,s.shape[1],s.shape[2]),h=[[c,u,Math.sin(o),Math.cos(o)]];return a.runWebGLProgram(l,[s],s.dtype,h)}};const oj=`
  // OpenGL ES does not support round function.
  // The algorithm is based on banker's rounding.
  float base = floor(x);
  if ((x - base) < 0.5) {
    return floor(x);
  } else if ((x - base) > 0.5) {
    return ceil(x);
  } else {
    if (mod(base, 2.0) == 0.0) {
      return base;
    } else {
      return base + 1.0;
    }
  }
`,rj=St({opSnippet:oj}),ij={kernelName:pi,backendName:"webgl",kernelFunc:rj};const aj="return inversesqrt(x);",lj=St({opSnippet:aj,cpuKernelImpl:Cz}),cj={kernelName:fi,backendName:"webgl",kernelFunc:lj};class Np{constructor(t,e,s,o,r,i,a=!0,l=!1){this.variableNames=["updates","indices","defaultValue"],this.outputShape=i;const c=_t(r.length),u=_t(i.length);let h="";s===1?h="i":s===2&&(h="i, j");const d=`getIndices(${h})`;let p="";o===1?p="i":o===2&&(p="i, coords[1]");const f=`getUpdates(${p})`;let m="";l&&(m="coords[0], coords[1]");const g=`getDefaultValue(${m})`,x=e>1?"strides[j]":"strides";this.userCode=`
        ${c} strides = ${c}(${r});

        void main() {
          ${u} coords = getOutputCoords();
          float sum = 0.0;
          bool found = false;
          for (int i = 0; i < ${t}; i++) {
            int flattenedIndex = 0;
            for (int j = 0; j < ${e}; j++) {
              int index = round(${d});
              flattenedIndex += index * ${x};
            }
            if (flattenedIndex == coords[0]) {
              sum += ${f};
              found = true;
            }
          }
          setOutput(mix(${g}, sum, float(found)));
        }
      `}}class uj{constructor(t,e,s,o,r,i,a=!0,l=!1){this.variableNames=["updates","indices","defaultValue"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=i;const c=_t(r.length),u=_t(i.length);let h="";s===1?h="i":s===2&&(h="i, j");const d=`getIndices(${h})`;let p="";o===1?p="i":o===2&&(p="i, coords[1]");const f=`getUpdates(${p})`;let m="";l&&(m="coords[0], coords[1]");const g=`getDefaultValue(${m})`,x=e>1?"strides[j]":"strides",b=e>1?"strides[j + 1]":"strides";this.userCode=`
        ${c} strides = ${c}(${r});

        void main() {
          ${u} coords = getOutputCoords();
          vec4 sum = vec4(0.);
          vec4 found = vec4(0.);
          for (int i = 0; i < ${t}; i+=2) {
            ivec2 flattenedIndex = ivec2(0);
            for (int j = 0; j < ${e}; j+=2) {
              ivec4 index = round(${d});
              flattenedIndex += index.xz * ${x};
              if (j + 1 < ${e}) {
                flattenedIndex += index.yw * ${b};
              }
            }
            if (flattenedIndex[0] == coords[0] || flattenedIndex[1] == coords[0] ||
                flattenedIndex[0] == coords[0] + 1 || flattenedIndex[1] == coords[0] + 1) {
              vec4 updVals = ${f};
              if (flattenedIndex[0] == coords[0]) {
                sum.xy += updVals.xy;
                found.xy = vec2(1.);
              } else if (flattenedIndex[0] == coords[0] + 1) {
                sum.zw += updVals.xy;
                found.zw = vec2(1.);
              }
              if (flattenedIndex[1] == coords[0]) {
                sum.xy += updVals.zw;
                found.xy = vec2(1.);
              } else if (flattenedIndex[1] == coords[0] + 1) {
                sum.zw += updVals.zw;
                found.zw = vec2(1.);
              }
            }
          }
          setOutput(mix(${g}, sum, found));
        }
      `}}function hj(n){const{inputs:t,backend:e,attrs:s}=n,{indices:o,updates:r}=t,{shape:i}=s,{sliceRank:a,numUpdates:l,sliceSize:c,strides:u,outputSize:h}=co(r,o,i),d=[h/c,c];if(h===0)return e.makeTensorInfo(i,o.dtype);const p=et({inputs:{x:o},backend:e,attrs:{shape:[l,a]}}),f=et({inputs:{x:r},backend:e,attrs:{shape:[l,c]}}),m=e.makeTensorInfo([],"float32",new Float32Array([0]));let g;W().getBool("WEBGL_PACK")?g=new uj(l,a,p.shape.length,f.shape.length,u,d):g=new Np(l,a,p.shape.length,f.shape.length,u,d);const x=e.runWebGLProgram(g,[f,p,m],f.dtype),b=et({inputs:{x},backend:e,attrs:{shape:i}});return e.disposeIntermediateTensorInfo(p),e.disposeIntermediateTensorInfo(f),e.disposeIntermediateTensorInfo(x),e.disposeIntermediateTensorInfo(m),b}const dj={kernelName:Xm,backendName:"webgl",kernelFunc:hj};class pj{constructor(t,e,s,o){this.variableNames=["sortedSequence","values"],this.customUniforms=[{name:"numInputs",type:"int"}],this.outputShape=[t,s];const r="while (left < right) {",i=`for (int i = 0; i < ${Math.ceil(Math.log2(e+1))}; ++i) { if (left >= right) break;`,a=W().getNumber("WEBGL_VERSION")===2?r:i,l=o==="left"?"<":"<=";this.userCode=`
       int findBound(int batch, float value) {
         int left = 0;
         int right = numInputs;
         int mid;
         ${a}
           mid = (left + right) / 2;
           if (getSortedSequence(batch, mid) ${l} value) {
             left = mid + 1;
           } else {
             right = mid;
           }
         }
         return right;
       }

       void main() {
         ivec2 coords = getOutputCoords();
         int batch = coords[0];
         int valueIndex = coords[1];

         float value = getValues(batch, valueIndex);

         setOutput(float(findBound(batch, value)));
       }
     `}}function fj(n){const{inputs:t,backend:e,attrs:s}=n,{sortedSequence:o,values:r}=t,{side:i}=s,a=new pj(o.shape[0],o.shape[1],r.shape[1],i),l=[[o.shape[1]]];return e.runWebGLProgram(a,[o,r],"int32",l)}const mj={kernelName:Zm,backendName:"webgl",kernelFunc:fj};class gj{constructor(t,e,s){this.variableNames=["c","a","b"],this.outputShape=e;let o,r;if(s>4)throw Error(`Where for rank ${s} is not yet supported`);if(s===1)r="resRC",o="resRC";else{const a=["resRC.x","resRC.y","resRC.z","resRC.w"],l=[],c=[];for(let u=0;u<e.length;u++)c.push(`${a[u]}`),u<t&&l.push(`${a[u]}`);o=l.join(),r=c.join()}const i=_t(s);this.userCode=`
      void main() {
        ${i} resRC = getOutputCoords();
        float cVal = getC(${o});
        if (cVal >= 1.0) {
          setOutput(getA(${r}));
        } else {
          setOutput(getB(${r}));
        }
      }
    `}}function xj(n){const{inputs:t,backend:e}=n,{condition:s,t:o,e:r}=t,i=new gj(s.shape.length,o.shape,o.shape.length);return e.runWebGLProgram(i,[s,o,r],Ue(o.dtype,r.dtype))}const bj={kernelName:jl,backendName:"webgl",kernelFunc:xj};const yj=`
  // Stable and Attracting Fixed Point (0, 1) for Normalized Weights.
  // see: https://arxiv.org/abs/1706.02515
  float scaleAlpha = ${dc};
  float scale = ${pc};
  return (x >= 0.0) ? scale * x : scaleAlpha * (exp(x) - 1.0);
`,wj=St({opSnippet:yj}),Cj={kernelName:mi,backendName:"webgl",kernelFunc:wj};const $j=nr+`
  return 1.0 / (1.0 + exp(-1.0 * x));
`,Ij=`
  vec4 result = 1.0 / (1.0 + exp(-1.0 * x));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,vj=St({opSnippet:$j,packedOpSnippet:Ij,cpuKernelImpl:Iz}),kj={kernelName:yi,backendName:"webgl",kernelFunc:vj};const Sj=`
  if (isnan(x)) { return 0.0; }
  return sign(x);
`,Nj=St({opSnippet:Sj}),Tj={kernelName:bi,backendName:"webgl",kernelFunc:Nj};const Ej=nr+`
  return sin(x);
`,Rj=`
  vec4 result = sin(x);
  bvec4 isNaN = isnan(x);
  ${mo}
  return result;
`,Aj=St({opSnippet:Ej,packedOpSnippet:Rj}),Dj={kernelName:gi,backendName:"webgl",kernelFunc:Aj};const Fj=`
  float e2x = exp(x);
  return (e2x - 1.0 / e2x) / 2.0;
`,_j=St({opSnippet:Fj}),Oj={kernelName:xi,backendName:"webgl",kernelFunc:_j};const Mj=`
  float epsilon = 1.1920928955078125e-7;
  float threshold = log(epsilon) + 2.0;

  bool too_large = x > -threshold;
  bool too_small = x < threshold;

  float result;
  float exp_x = exp(x);

  if (too_large){
    result = x;
  }
  else if (too_small){
    result = exp_x;
  }
  else{
    result = log(exp_x + 1.0);
  }
  return result;
`,Lj=St({opSnippet:Mj}),Pj={kernelName:wi,backendName:"webgl",kernelFunc:Lj};const zj=n=>{const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{blockShape:r,paddings:i}=s;v(o.shape.length<=4,()=>"spaceToBatchND for rank > 4 with a WebGL backend not implemented yet");const a=r.reduce((x,b)=>x*b),l=[[0,0]];l.push(...i);for(let x=1+r.length;x<o.shape.length;++x)l.push([0,0]);const c=[],u=hw({inputs:{x:o},backend:e,attrs:{paddings:l,constantValue:0}}),h=Fi(u.shape,r,a,!1),d=_i(h.length,r.length,!1),p=Oi(u.shape,r,a,!1),f=et({inputs:{x:u},backend:e,attrs:{shape:h}}),m=Ae({inputs:{x:f},backend:e,attrs:{perm:d}}),g=et({inputs:{x:m},backend:e,attrs:{shape:p}});return c.push(u),c.push(f),c.push(m),c.forEach(x=>e.disposeIntermediateTensorInfo(x)),g},Bj={kernelName:Xl,backendName:"webgl",kernelFunc:zj};function Vj(n){const{inputs:t,backend:e}=n,{indices:s,values:o,denseShape:r,defaultValue:i}=t;if(r.shape.length!==1)throw new Error(`Dense shape must be a vector, saw:
         ${r.shape}`);if(s.shape.length!==2)throw new Error(`Indices must be a matrix, saw:
         ${s.shape}`);if(o.shape.length!==1)throw new Error(`Values must be a vector, saw:
         ${o.shape}`);if(i.shape.length!==0)throw new Error(`Default value must be a scalar, saw:
        ${i.shape}`);const a=e.readSync(s.dataId),l=e.readSync(o.dataId),c=e.readSync(r.dataId),u=e.readSync(i.dataId)[0],[h,d,p,f,m]=kz(a,s.shape,s.dtype,l,o.dtype,c,u);return[e.makeTensorInfo(d,s.dtype,h),e.makeTensorInfo([d[0]],o.dtype,p),e.makeTensorInfo([f.length],"bool",new Uint8Array(f.map(g=>Number(g)))),e.makeTensorInfo([m.length],s.dtype,new Int32Array(m))]}const Wj={kernelName:Jm,backendName:"webgl",kernelFunc:Vj};function Uj(n){const{inputs:t,backend:e}=n,{inputIndices:s,inputShape:o,newShape:r}=t;if(s.shape.length!==2)throw new Error(`Input indices should be a matrix but received shape ${s.shape}`);if(o.shape.length!==1)throw new Error(`Input shape should be a vector but received shape ${o.shape}`);if(r.shape.length!==1)throw new Error(`Target shape should be a vector but received shape ${r.shape}`);const i=Array.from(e.readSync(o.dataId)),a=e.readSync(s.dataId),l=Array.from(e.readSync(r.dataId)),[c,u,h]=Sz(a,s.shape,s.dtype,i,l);return[e.makeTensorInfo(u,s.dtype,c),e.makeTensorInfo([h.length],r.dtype,new Int32Array(h))]}const Gj={kernelName:Qm,backendName:"webgl",kernelFunc:Uj};function Hj(n){const{inputs:t,backend:e}=n,{data:s,indices:o,segmentIds:r}=t;if(s.shape.length<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(o.shape.length!==1)throw new Error(`Indices should be a vector but received shape
              ${o.shape}`);if(r.shape.length!==1)throw new Error(`Segment ids should be a vector but received shape
              ${r.shape}`);const i=e.readSync(s.dataId),a=e.readSync(o.dataId),l=e.readSync(r.dataId),[c,u]=My(i,s.shape,s.dtype,a,l,!0);return e.makeTensorInfo(u,s.dtype,c)}const jj={kernelName:tg,backendName:"webgl",kernelFunc:Hj};function qj(n){const{inputs:t,backend:e}=n,{data:s,indices:o,segmentIds:r}=t;if(s.shape.length<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(o.shape.length!==1)throw new Error(`Indices should be a vector but received shape
             ${o.shape}`);if(r.shape.length!==1)throw new Error(`Segment ids should be a vector but received shape
             ${r.shape}`);const i=e.readSync(s.dataId),a=e.readSync(o.dataId),l=e.readSync(r.dataId),[c,u]=My(i,s.shape,s.dtype,a,l);return e.makeTensorInfo(u,s.dtype,c)}const Kj={kernelName:eg,backendName:"webgl",kernelFunc:qj};function Xj(n){const{inputs:t,backend:e,attrs:s}=n,{sparseIndices:o,sparseValues:r,defaultValue:i}=t,{outputShape:a}=s,{sliceRank:l,numUpdates:c,sliceSize:u,strides:h,outputSize:d}=co(r,o,a),p=!1;if(r.dtype==="string"){const x=e.bufferSync(o),b=e.bufferSync(r),w=ms(e.readSync(i.dataId)[0]),y=$z(x,b,a,d,u,c,l,h,w,p);return e.makeTensorInfo(a,y.dtype,y.values)}const f=new Np(c,l,o.shape.length,r.shape.length,h,[d,1],p),m=e.runWebGLProgram(f,[r,o,i],r.dtype),g=et({inputs:{x:m},backend:e,attrs:{shape:a}});return e.disposeIntermediateTensorInfo(m),g}const Yj={kernelName:ng,backendName:"webgl",kernelFunc:Xj};function Zj(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{numOrSizeSplits:r,axis:i}=s,a=Ct(i,o.shape)[0],l=Bd(o,r,a),c=o.shape.length,u=new Array(c).fill(0),h=o.shape.slice();return l.map(d=>{const p=[...h];p[a]=d;const f=sr({inputs:{x:o},backend:e,attrs:{begin:u,size:p}});return u[a]+=d,f})}const Jj={kernelName:Yl,backendName:"webgl",kernelFunc:Zj};const Sm="return sqrt(x);",Qj=St({opSnippet:Sm,packedOpSnippet:Sm,cpuKernelImpl:Nz}),tq={kernelName:Ci,backendName:"webgl",kernelFunc:Qj};const eq="return x * x;",nq=St({opSnippet:eq}),sq={kernelName:Rh,backendName:"webgl",kernelFunc:nq};const Nm="return (a - b) * (a - b);",oq=we({opSnippet:Nm,packedOpSnippet:Nm}),rq={kernelName:$i,backendName:"webgl",kernelFunc:oq};function iq(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t;if(o.dtype!=="string")throw new Error("Input must be of datatype string");const r=e.readSync(o.dataId),i=Zn(r),a=Tz(i,"string",s);return e.makeTensorInfo(o.shape,"string",a)}const aq={kernelName:Ah,backendName:"webgl",kernelFunc:iq};function lq({inputs:n,attrs:t,backend:e}){const{x:s}=n,o=hn+`
    return x > 0.0 ? 1.0 : float(${t.alpha});
  `,r=new Rn(s.shape,o);return e.runWebGLProgram(r,[s],s.dtype)}const cq={kernelName:Ni,backendName:"webgl",kernelFunc:lq};class uq{constructor(t,e,s){this.variableNames=["x"],this.outputShape=s;const o=s.length,r=_t(s.length),i=_t(s.length);let a="";if(o===1)a="coords * strides + begin";else{let l=0;a=s.map((c,u)=>(l++,s.length===1?`coords * strides[${u}] + begin[${u}]`:`coords[${l-1}] * strides[${u}] + begin[${u}]`)).join(",")}this.userCode=`
      ${r} begin = ${r}(${t});
      ${r} strides = ${r}(${e});

      void main() {
        ${i} coords = getOutputCoords();
        setOutput(getX(${a}));
      }
    `}}function hq(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{begin:r,end:i,strides:a,beginMask:l,endMask:c,ellipsisMask:u,newAxisMask:h,shrinkAxisMask:d}=s,{finalShapeSparse:p,finalShape:f,isIdentity:m,sliceDim0:g,isSimpleSlice:x,begin:b,end:w,strides:y}=$d(o.shape,r,i,a,l,c,u,h,d);let C;if(m)C=et({inputs:{x:o},backend:e,attrs:{shape:f}});else if(g||x){v(o.shape.length>=1,()=>`Input must have rank at least 1, got: ${o.shape.length}`);const N=yd(b,w,y),T=sr({inputs:{x:o},backend:e,attrs:{begin:b,size:N}});C=et({inputs:{x:T},backend:e,attrs:{shape:f}}),e.disposeIntermediateTensorInfo(T)}else if(e.shouldExecuteOnCPU([o])){const T=e.readSync(o.dataId),k=wt(o.shape,o.dtype,T),S=Ez(p,k,y,b);C=e.makeTensorInfo(f,o.dtype,S.values)}else{const T=new uq(b,y,p);C=e.runWebGLProgram(T,[o],o.dtype)}const I=et({inputs:{x:C},backend:e,attrs:{shape:f}});return e.disposeIntermediateTensorInfo(C),I}const dq={kernelName:Dh,backendName:"webgl",kernelFunc:hq};function pq(n){const{inputs:t,backend:e,attrs:s}=n,{separator:o,nGramWidths:r,leftPad:i,rightPad:a,padWidth:l,preserveShortSequences:c}=s,{data:u,dataSplits:h}=t,d=e.readSync(u.dataId),p=e.readSync(h.dataId),[f,m]=Rz(d,p,o,r,i,a,l,c);return[e.makeTensorInfo([f.length],"string",f),e.makeTensorInfo(h.shape,"int32",m)]}const fq={kernelName:sg,backendName:"webgl",kernelFunc:pq};function mq(n){const{inputs:t,backend:e,attrs:s}=n,{skipEmpty:o}=s,{input:r,delimiter:i}=t;if(r.dtype!=="string")throw new Error("Input must be of datatype string");if(r.shape.length!==1)throw new Error(`Input must be a vector, got shape: ${r.shape}`);if(i.shape.length!==0)throw new Error(`Delimiter must be a scalar, got shape: ${i.shape}`);const a=e.readSync(r.dataId),l=e.readSync(i.dataId)[0],[c,u,h]=Az(a,l,o),d=u.length;return[e.makeTensorInfo([d,2],"int32",c),e.makeTensorInfo([d],"string",u),e.makeTensorInfo([2],"int32",new Int32Array(h))]}const gq={kernelName:og,backendName:"webgl",kernelFunc:mq};function xq(n){const{inputs:t,backend:e,attrs:s}=n,{numBuckets:o}=s,{input:r}=t;if(r.dtype!=="string")throw new Error("Input must be of datatype string");if(o<=0)throw new Error("Number of buckets must be at least 1");const i=e.readSync(r.dataId),a=Dz(i,o);return e.makeTensorInfo(r.shape,"int32",a)}const bq={kernelName:rg,backendName:"webgl",kernelFunc:xq};const yq="return tan(x);",wq=St({opSnippet:yq}),Cq={kernelName:vi,backendName:"webgl",kernelFunc:wq};const $q=`
  float e2x = exp(-2.0 * abs(x));
  return sign(x) * (1.0 - e2x) / (1.0 + e2x);
`,Iq=St({opSnippet:$q}),vq={kernelName:ki,backendName:"webgl",kernelFunc:Iq};function kq(n){const{inputs:t,backend:e,attrs:s}=n,{tensor:o,indices:r,updates:i}=t,{sliceRank:a,numUpdates:l,sliceSize:c,strides:u,outputSize:h}=co(i,r,o.shape),d=[h/c,c];if(h===0)return e.makeTensorInfo(o.shape,r.dtype);const p=et({inputs:{x:r},backend:e,attrs:{shape:[l,a]}}),f=et({inputs:{x:i},backend:e,attrs:{shape:[l,c]}}),m=et({inputs:{x:o},backend:e,attrs:{shape:d}}),g=new Np(l,a,p.shape.length,f.shape.length,u,d,!1,!0),x=e.runWebGLProgram(g,[f,p,m],m.dtype),b=et({inputs:{x},backend:e,attrs:{shape:o.shape}});return e.disposeIntermediateTensorInfo(p),e.disposeIntermediateTensorInfo(f),e.disposeIntermediateTensorInfo(m),e.disposeIntermediateTensorInfo(x),b}const Sq={kernelName:Ym,backendName:"webgl",kernelFunc:kq};class Nq{constructor(t,e){this.variableNames=["A"];const s=new Array(t.length);for(let i=0;i<s.length;i++)s[i]=t[i]*e[i];this.outputShape=s,this.rank=s.length;const o=_t(this.rank),r=Tq(t);this.userCode=`
      void main() {
        ${o} resRC = getOutputCoords();
        setOutput(getA(${r}));
      }
    `}}function Tq(n){const t=n.length;if(t>5)throw Error(`Tile for rank ${t} is not yet supported`);if(t===1)return`imod(resRC, ${n[0]})`;const e=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u"],s=[];for(let o=0;o<n.length;o++)s.push(`imod(${e[o]}, ${n[o]})`);return s.join()}function pw(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{reps:r}=s;if(o.dtype==="string"||o.shape.length>5){const l=e.readSync(o.dataId),c=o.dtype==="string"?l.map(d=>ms(d)):l,u=wt(o.shape,o.dtype,c),h=_z(u,r);return e.makeTensorInfo(h.shape,h.dtype,h.values)}const i=new Nq(o.shape,r);return e.runWebGLProgram(i,[o],o.dtype)}const Eq={kernelName:Si,backendName:"webgl",kernelFunc:pw};class Rq{constructor(t){this.variableNames=["x","indices"],this.customUniforms=[{name:"n",type:"int"},{name:"firstPass",type:"int"},{name:"negativeInf",type:"float"},{name:"dir",type:"int"},{name:"inc",type:"int"}],this.outputShape=t,this.userCode=`
       void main() {
         ivec2 coords = getOutputCoords();
         int batch = coords[0];
         int elemIdx = coords[1];

         // We compare elements pair-wise within a group of size 2 * inc.
         // The comparing rule for each group alternates between ascending
         // and descending. Within each group, we compare each pair at
         // positions i and i+inc. To decide whether an element at position i
         // is x0 or x1, we mod it by 2 * inc, if the result is smaller than
         // inc, it is in the first half of the group, we denote it as x0,
         // otherwise we denote it as x1.
         // For example, as shown in the Bitonic top K paper referenced above,
         // Figure5(a) shows that element[1] is in the
         // second half of the group when group size is 2, but it is in the
         // first half of the group when group size is 4.

         bool isFirstInPair = imod(elemIdx, 2 * inc) < inc;
         int i = isFirstInPair ? elemIdx : elemIdx - inc;

         int i0 = firstPass == 1 ? i : int(getIndices(batch, i));
         int i1 = firstPass == 1 ? i + inc : int(getIndices(batch, i + inc));
         float x0 = i0 < n ? getX(batch, i0) : negativeInf;
         float x1 = i1 < n ? getX(batch, i1) : negativeInf;

         // Denotes which direction indices are in (ascending or descending).
         bool reverse = imod(elemIdx, 2 * dir) >= dir;
         bool isGreater = x0 > x1 || (x0 == x1 && i1 > i0);
         if (reverse == isGreater) { // Elements in opposite order of direction
           int iTemp = i0;
           i0 = i1;
           i1 = iTemp;
         }
         if (isFirstInPair) {
            setOutput(float(i0));
         } else {
            setOutput(float(i1));
         }
       }
     `}}class Aq{constructor(t){this.variableNames=["x","indices"],this.customUniforms=[{name:"n",type:"int"},{name:"firstPass",type:"int"},{name:"k",type:"int"}],this.outputShape=t,this.userCode=`
    void main() {
         // Takes max of indices (0, k), (1, k + 1), (2, k + 2) ...
         ivec2 coords = getOutputCoords();
         int batch = coords[0];
         int elemIdx = coords[1];

         // The output size is half of the previous size.
         // If the previous sequence is | | | | _ _ _ _  | | | |  _ _ _ _ (k=4),
         // we only need to output the indices at positions |, the indices at
         // positions _ can be thrown away, see Figure5(b) After Phase 2
         // (Merge phase) in the Bitonic Top K paper referenced above.
         // For example, the paper shows we only need to output the orange bars.
         // The output sequence should look like this | | | | | | | |.
         // Because the sequence is halved, to map the output index back
         // to the previous sequence to find the corresponding value,
         // we need to double the index. When we double the index,
         // we basically interpolate a position, so 2i looks like
         // | _ | _ | _ | _ | _ | _ | _. We move the | to the first k position
         // of each 2k positions by - elemIdx % k. E.g. for output at
         // index 4,5,6,7, we want to get the corresponding element at
         // original index 8,9,10,11, for output at index 8,9,10,11,
         // we want to get the corresponding element at original index
         // 16,17,18,19, so on and so forth.

         int i = elemIdx < k ? elemIdx : (elemIdx * 2 - imod(elemIdx, k));
         int i0 = firstPass == 1 ? i : int(getIndices(batch, i));
         int i1 = firstPass == 1 ? i + k : int(getIndices(batch, i + k));

         float x0 = getX(batch, i0);
         float x1 = i1 < n ? getX(batch, i1) : x0;

         setOutput(x0 >= x1 ? float(i0) : float(i1));
       }
     `}}function Os(n,t){t!==null&&n.disposeIntermediateTensorInfo(t)}function Tm(n){let t=1;for(;t<n;)t*=2;return t}function Dq(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{k:r,sorted:i}=s,a=W().getNumber("TOPK_LAST_DIM_CPU_HANDOFF_SIZE_THRESHOLD"),l=W().getNumber("TOPK_K_CPU_HANDOFF_THRESHOLD"),c=o.shape,u=c[c.length-1];if(e.shouldExecuteOnCPU([o])||u<a||r>l){const S=e.readSync(o.dataId),[$,R]=Oz(S,c,o.dtype,r,i);return[e.makeTensorInfo($.shape,$.dtype,$.values),e.makeTensorInfo(R.shape,R.dtype,R.values)]}if(r===0)return c[c.length-1]=0,[e.makeTensorInfo(c,o.dtype,[]),e.makeTensorInfo(c,"int32",[])];if(u===1)return[o,Xi({attrs:{shape:c,dtype:"int32",value:0},backend:e})];const h=e.texData.get(o.dataId),d=h!==null&&h.isPacked,p=d?e.unpackTensor(o):o,m=H(c)/u,g=et({inputs:{x:p},attrs:{shape:[m,u]},backend:e});d&&Os(e,p);const x=Tm(r),b=Tm(u);let w=null;const y=()=>w===null?[g,g]:[g,w],C=(S,$,R)=>{const A=y(),O=new Rq(R),z=[[u],[w===null?1:0],[Number.NEGATIVE_INFINITY],[S],[$]],G=w;w=e.runWebGLProgram(O,A,"int32",z),Os(e,G)};for(let S=1;S<x;S*=2){const $=S*2;for(let R=S;R>=1;R/=2)C($,R,[m,b])}for(let S=b;S>x;S/=2){const $=y(),R=new Aq([m,S/2]),O=[[u],[w===null?1:0],[x]],M=w;w=e.runWebGLProgram(R,$,"int32",O),Os(e,M);const z=x/2,G=z*2;for(let V=z;V>=1;V/=2)C(G,V,w.shape)}let I=w;w=sr({inputs:{x:w},backend:e,attrs:{begin:0,size:[m,r]}}),Os(e,I);let N=rw({inputs:{x:g,indices:w},backend:e,attrs:{axis:1,batchDims:1}});Os(e,g);const T=c.slice(0,-1);T.push(r),I=w,w=et({inputs:{x:w},attrs:{shape:T},backend:e}),Os(e,I);const k=N;return N=et({inputs:{x:N},attrs:{shape:T},backend:e}),Os(e,k),[N,w]}const Fq={kernelName:Fh,backendName:"webgl",kernelFunc:Dq};class _q{constructor(t,e,s,o,r,i){this.variableNames=["Image","Transforms"],this.outputShape=i;const a=s==="nearest"?1:2;let l;switch(o){case"constant":l=1;break;case"reflect":l=2;break;case"wrap":l=3;break;case"nearest":l=4;break;default:l=1;break}this.userCode=`
            float mapCoord(float outCoord, float len) {
              float inCoord = outCoord;
              if(${l} == 2) {
                if (inCoord < 0.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz2 = 2.0 * len;
                    if (inCoord < sz2) {
                      inCoord = sz2 * float(int(float(-inCoord / sz2))) +
                      inCoord;
                    }
                    inCoord = inCoord < -len ? inCoord + sz2 : -inCoord - 1.0;
                  }
                } else if (inCoord > len - 1.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz2 = 2.0 * len;
                    inCoord -= sz2 * float(int(float(inCoord / sz2)));
                    if (inCoord >= len) {
                      inCoord = sz2 - inCoord - 1.0;
                    }
                  }
                }
                return clamp(inCoord, 0.0, len - 1.0);
              } else if (${l} == 3) {
                if (inCoord < 0.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz = len - 1.0;
                    inCoord += len * (float(int(float(-inCoord / sz))) + 1.0);
                  }
                } else if (inCoord > len - 1.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz = len - 1.0;
                    inCoord -= len * float(int(float(inCoord / sz)));
                  }
                }
                return clamp(inCoord, 0.0, len - 1.0);
              } else if (${l} == 4) {
                return clamp(outCoord, 0.0, len - 1.0);
              } else {
                return outCoord;
              }
            }

            float readWithFillValue(int batch, int coordY, int coordX,
              int channel) {
              float outputValue;
              if (0 <= coordY && coordY < ${t} && 0 <= coordX && coordX < ${e}) {
                  outputValue = getImage(batch, coordY, coordX, channel);
              } else {
                outputValue = float(${r});
              }
              return outputValue;
            }

            void main() {
              ivec4 coords = getOutputCoords();
              float outputValue;
              int batch = coords[0];
              int x = coords[2];
              int y = coords[1];
              int channel = coords[3];
              float xf = float(x);
              float yf = float(y);
              float a1 = getTransforms(batch, 0);
              float a2 = getTransforms(batch, 1);
              float a3 = getTransforms(batch, 2);
              float b1 = getTransforms(batch, 3);
              float b2 = getTransforms(batch, 4);
              float b3 = getTransforms(batch, 5);
              float c1 = getTransforms(batch, 6);
              float c2 = getTransforms(batch, 7);
              float projection = c1 * xf + c2 * yf + 1.0;
              if (projection == 0.0) {
                outputValue = float(${r});
              } else {
                float inX = (a1 * xf + a2 * yf + a3) / projection;
                float inY = (b1 * xf + b2 * yf + b3) / projection;
                float mapX = mapCoord(inX, float(${e}));
                float mapY = mapCoord(inY, float(${t}));

                if (${a} == 1) {
                  int coordY = int(round(mapY));
                  int coordX = int(round(mapX));
                  outputValue = readWithFillValue(batch, coordY, coordX,
                    channel);
                } else {
                  float yFloor = floor(mapY);
                  float xFloor = floor(mapX);
                  float yCeil = yFloor + 1.0;
                  float xCeil = xFloor + 1.0;
                  float valueYFloor = (xCeil - mapX) *
                  readWithFillValue(batch, int(yFloor), int(xFloor), channel) +
                  (mapX - xFloor) *
                  readWithFillValue(batch, int(yFloor), int(xCeil), channel);
                  float valueYCeil = (xCeil - mapX) *
                  readWithFillValue(batch, int(yCeil), int(xFloor), channel) +
                  (mapX - xFloor) *
                  readWithFillValue(batch, int(yCeil), int(xCeil), channel);
                  outputValue = (yCeil - mapY) * valueYFloor +
                  (mapY - yFloor) * valueYCeil;
                }
              }
              setOutput(outputValue);
            }
        `}}function Oq(n){const{inputs:t,backend:e,attrs:s}=n,{image:o,transforms:r}=t,{interpolation:i,fillMode:a,fillValue:l,outputShape:c}=s,[u,h,d,p]=o.shape,[f,m]=c??[h,d],g=[u,f,m,p],x=new _q(h,d,i,a,l,g);return e.runWebGLProgram(x,[o,r],"float32")}const Mq={kernelName:_h,backendName:"webgl",kernelFunc:Oq};function Lq(n){const{inputs:t,attrs:e,backend:s}=n,{axis:o}=e,{x:r}=t;ji(r,"unique"),console.warn("WARNING: ","UI might be locked temporarily as data is being downloaded");const i=s.readSync(r.dataId),{outputValues:a,outputShape:l,indices:c}=Mz(i,o,r.shape,r.dtype);return[s.makeTensorInfo(l,r.dtype,a),s.makeTensorInfo([c.length],"int32",c)]}const Pq={kernelName:Oh,backendName:"webgl",kernelFunc:Lq};function zq(n){const{inputs:t,backend:e,attrs:s}=n,{value:o}=t;let{axis:r}=s;r<0&&(r+=o.shape.length);const i=o,a=i.shape.length,l=o.shape[r],c=new Array(a-1);let u=0;for(let m=0;m<a;m++)m!==r&&(c[u++]=i.shape[m]);const h=[],d=new Array(a).fill(0),p=i.shape.slice();p[r]=1;const f=new Array(l);for(let m=0;m<f.length;m++){d[r]=m;const g=sr({inputs:{x:i},backend:e,attrs:{begin:d,size:p}}),x=et({inputs:{x:g},backend:e,attrs:{shape:c}});f[m]=x,h.push(g)}return h.forEach(m=>e.disposeIntermediateTensorInfo(m)),f}const Bq={kernelName:Jl,backendName:"webgl",kernelFunc:zq};class Vq{constructor(t,e){this.variableNames=["x","segmentIds"];const s=t.windowSize,o=t.batchSize,r=t.inSize,i=t.numSegments,a=i*Math.ceil(r/s);this.outputShape=[o,a];const l="0.0",c="sumValue",u=Math.floor(s/4)*4,h=s%4,d=`
        sumValue += dot(values, segFilter);
    `;let p="";r%s>0&&(p=`
        if (inIdx < 0 || inIdx >= ${r}) {
          return initializationValue;
        }
      `);let f="";r%s>0&&(f=`
        if (inIdx < 0 || inIdx >= ${r}) {
          return -1.0;
        }
      `),this.userCode=`
      const float initializationValue = ${l};

      float getValue(int batch, int inIdx) {
        ${p}
        return getX(batch, inIdx);
      }

      float getSegmentIdAtIndex(int inIdx) {
        ${f}
        return getSegmentIds(inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = int(floor(float(outIdx) / float(
          ${i})) * float(${s}));
        int currentSeg = int(mod(float(outIdx), float(${i})));

        float sumValue = 0.0;

        for (int i = 0; i < ${u}; i += 4) {
          int inIdx = inOffset + i;
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 3)) == currentSeg ? 1 : 0
          );

          ${d}
        }

        int inIdx = inOffset + ${u};
        if (${h===1}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          int inIdxSeg = int(getSegmentIdAtIndex(inIdx));

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            0,
            0,
            0
          );

          ${d}
        } else if (${h===2}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
              0,
              0
          );

          ${d}
        } else if (${h===3}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            0
          );

          ${d}
        }
        setOutput(${c});
      }
    `}}function Wq(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,segmentIds:r}=t,{numSegments:i}=s,a=o.shape.length,l=[];let c=0;const u=qt([c],a);let h=o;u!=null&&(h=Ae({inputs:{x:o},backend:e,attrs:{perm:u}}),l.push(h),c=Qt(1,a)[0]);const d=Kx(h.shape,c,i),p=H([h.shape[c]]),f=et({inputs:{x:h},backend:e,attrs:{shape:[-1,p]}});l.push(f);const m=Lh(o.dtype),g=(y,C,I,N,T)=>{const k=y.shape[0],S=y.shape[1],$=qx(S,T),R={windowSize:$,inSize:S,batchSize:k,numSegments:T},A=new Vq(R,C),O=e.compileAndRun(A,[y,I],N);if(l.push(O),O.shape[1]===T)return O;const M=dw({backend:e,attrs:{start:0,stop:T,step:1,dtype:"float32"}}),z=pw({inputs:{x:M},backend:e,attrs:{reps:[S/$]}});return l.push(M),l.push(z),g(O,C,z,N,T)},x=g(f,"unsortedSegmentSum",r,m,i),b=et({inputs:{x},backend:e,attrs:{shape:d}});let w=b;if(u!=null){l.push(b);const y=ks(u);w=Ae({inputs:{x:w},backend:e,attrs:{perm:y}})}return l.forEach(y=>e.disposeIntermediateTensorInfo(y)),w}const Uq={kernelName:Ql,backendName:"webgl",kernelFunc:Wq};const Gq=[NB,EB,DB,OB,LB,BB,WB,GB,KB,YB,QB,nV,rV,cV,dV,fV,gV,wV,$V,vV,TV,OV,LV,VV,UV,XV,ZV,eW,uB,oW,cW,pW,yW,$W,vW,SW,TW,DW,OW,PW,BW,WW,GW,qW,XW,QW,e4,o4,a4,c4,p4,x4,C4,v4,N4,T4,R4,D4,_4,M4,P4,W4,H4,K4,Y4,Q4,nU,iU,uU,cB,dU,aW,mU,bU,CU,dB,kU,EU,AU,OU,PU,WU,HU,XU,QU,nG,oG,lG,uG,dG,gG,bG,wG,$G,vG,TG,DG,MG,GG,mB,KG,ZG,tH,sH,HV,iH,lH,uH,pH,xH,fB,yH,CH,IH,kH,SH,jV,BG,EH,FH,LH,xB,VH,GH,KH,ZH,ej,sj,ij,cj,dj,mj,bj,Cj,kj,Tj,Dj,Oj,FV,WG,Pj,Bj,Wj,Gj,jj,Kj,Yj,Jj,tq,sq,rq,aq,cq,dq,fq,gq,bq,VG,vB,Cq,vq,Sq,Eq,Fq,Mq,kB,Pq,Bq,Uq,aH];for(const n of Gq)ag(n);async function d6(n,t){try{const r=[...(await(await fetch(n)).json()).points];for(let i=r.length-1;i>0;i--){const a=Math.floor(Math.random()*(i+1));[r[i],r[a]]=[r[a],r[i]]}return r.slice(0,t)}catch(e){return console.error("Failed to load target distribution:",e),null}}async function p6(n){try{const t=await fetch(n);if(!t.ok)return console.log("Cached trajectories file not found:",n),null;const e=await t.json();return!e||!Array.isArray(e)?(console.error("Invalid cached trajectories format from file: ",n),null):e.length>0&&e[0]?{trajectories:e,sourceDistribution:e[0]}:(console.error("Cached trajectories array is empty"),null)}catch(t){return console.log("Could not load cached trajectories:",t),null}}async function f6(n){try{const t=await fetch(n);if(!t.ok)return console.log("Cached vector field file not found:",n),null;const e=await t.json();return!e||typeof e.gridResolution!="number"||!Array.isArray(e.timeSteps)||!Array.isArray(e.velocities)?(console.error("Invalid cached vector field format"),null):e}catch(t){return console.log("Could not load cached vector field:",t),null}}async function m6(n){try{const t=await fetch(n);if(!t.ok)return console.log("Cached rectified flow file not found:",n),null;const e=await t.json();return!e||!Array.isArray(e.allRectifiedTrajectories)||typeof e.modelPath!="string"?(console.error("Invalid cached rectified flow format"),null):e}catch(t){return console.log("Could not load cached rectified flow:",t),null}}async function g6(n,t){try{await(await iA(n)).save(`downloads://${t}`),console.log(`Model downloaded as ${t}.json and ${t}.weights.bin`)}catch(e){console.error(`Failed to download model from ${n}:`,e)}}async function x6(n){const t=n.endsWith(".json")?n:n.endsWith("/")?`${n}model.json`:`${n}/model.json`;try{const e=await fetch(t);if(!e.ok)throw new Error(`Model not found at path: ${n} (HTTP ${e.status} for ${t})`);const s=await e.json();if(!s.modelTopology&&!s.weightsManifest)throw new Error(`Invalid model.json format at: ${t}`)}catch(e){throw e instanceof Error&&e.message.startsWith("Model not found")?e:new Error(`Failed to validate model at path: ${n} - ${e instanceof Error?e.message:"Unknown error"}`)}}function b6(n,t="data.json"){const e=JSON.stringify(n,null,2),s=new Blob([e],{type:"application/json"}),o=URL.createObjectURL(s),r=document.createElement("a");r.href=o,r.download=t,r.click(),URL.revokeObjectURL(o)}function Hq(){let n=0,t=0;for(;n===0;)n=Math.random();for(;t===0;)t=Math.random();return Math.sqrt(-2*Math.log(n))*Math.cos(2*Math.PI*t)}function jq(n){return Array.from({length:n},Hq)}function qq(n){const t=n.length,e=Array.from({length:t},()=>Array(t).fill(0));for(let s=0;s<t;s++)for(let o=0;o<=s;o++){let r=n[s][o];for(let i=0;i<o;i++)r-=e[s][i]*e[o][i];s===o?e[s][o]=Math.sqrt(r):e[s][o]=r/e[o][o]}return e}function Kq(n,t){const e=n.length,s=Array(e).fill(0);for(let o=0;o<e;o++)for(let r=0;r<=o;r++)s[o]+=n[o][r]*t[r];return s}function Xq(n,t){return n.map((e,s)=>e+t[s])}function fw(n,t,e=1){if(e==1){const s=n.length,o=qq(t),r=jq(s),i=Kq(o,r);return Xq(i,n)}else{const s=[];for(let o=0;o<e;o++){const r=fw(n,t);s.push(r)}return So(s)}}function y6(n,t,e=!1){const{xMin:s,xMax:o,yMin:r,yMax:i}=t;if(e){const a=ef(s,o,n),l=ef(r,i,n);return Bn(Nk(a,l),2).reshape([n*n,2])}else{const a=[];for(let l=0;l<n;l++)for(let c=0;c<n;c++){const u=s+(o-s)*(l/(n-1)),h=r+(i-r)*(c/(n-1));a.push([u,h])}return a}}function w6(n){return B(()=>{const t=[0,0],e=[[1,0],[0,1]],o=2*Math.sqrt(2);let r=[],i=0;const a=10,l=Math.ceil(n*1.5);for(;r.length<n&&i<a;){i++;const u=fw(t,e,l).arraySync(),h=Yq(u,o);r=r.concat(h)}return r.slice(0,n)})}function Yq(n,t){return n.filter(e=>{const[s,o]=e;return Math.sqrt(s*s+o*o)<=t})}function C6(n,t){if(!n||n.length===0)return n;const e=n[0],s=[];for(let o=0;o<e.length;o++){const[r,i]=e[o];Math.sqrt(r*r+i*i)<=t&&s.push(o)}return n.map(o=>s.map(r=>o[r]))}const $6={targetDistributionPointsPath:"data/smiley_face.json",cachedFlowMatchingTrajectoriesPath:"cached_samples/flow_matching_trajectories.json",cachedFlowMatchingVectorFieldPath:"cached_samples/flow_matching_vector_field.json",cachedFlowMatchingGridTrajectoriesPath:"cached_samples/flow_matching_grid_trajectories.json",cachedRectifiedFlowTrajectoriesPath:"cached_samples/rectified_flow_trajectories.json",cachedRectifiedFlowGridTrajectoriesPath:"cached_samples/rectified_flow_grid_trajectories.json",cachedRectifiedFlowVectorFieldPath:"cached_samples/rectified_flow_vector_field.json",cachedRecursiveRectifiedFlowTrajectoriesPath:null,cachedOTCouplingPath:"cached_samples/ot_coupling.json",flowModelWorkerUrl:"/workers/flow_model.worker.js",flowMatchingModelPath:"/models/flow_matching_model.json",rectifiedFlowModelPath:"/models/rectified_flow_model.json",samplingSettings:{numSamples:150,numSteps:300},interactiveSettings:{maxUserTrajectories:5},modelSettings:{dim:2,hidden:64,domainRange:null},trainingSettings:{modelConfig:{dim:2,hidden:64},domainRange:null,flowMatchingTrainingConfig:{epochs:2e3,batchSize:1024,verbose:!0,displayInterval:100},rectifiedFlowTrainingConfig:{num_rectified_steps:4,epochs_per_rectified_step:2e3,batchSize:1024,num_simulation_steps:200}},stylingSettings:{global:{figureWidth:800},layout:{sourceCenterX:.2,targetCenterX:.8},label:{fontSize:28,fontWeight:400,yShiftFactor:.5,color:"#5e5e5eff",opacity:.9,outlineColor:"#f9f9f9",outlineOpacity:.5},scatterPlot:{radius:5,opacity:.25,color:"#3b82f6",yShiftFactor:-.5,scaleFactor:.8,clippingRadius:2},figureLatex:{color:"#666",outline:!0,outlineColor:"#fff",outlineWidth:3,outlineOpacity:.5,fontSize:24,latexLabelOffsetY:-10},trajectory:{color:"#f17720",strokeWidth:3,endpointRadius:3,opacity:.8,previewOpacity:0,outline:{enabled:!0,color:"#333333",strokeWidth:3,opacity:.5}},contour:{bandwidth:30,thresholds:3,opacity:.3,fillColor:"#f17720",blendMode:void 0}}};export{o6 as D,p6 as a,m6 as b,b6 as c,g6 as d,y6 as e,gC as f,w6 as g,i6 as h,Bw as i,r6 as j,B as k,d6 as l,Tt as m,F as n,C6 as o,Yq as p,f6 as q,$6 as s,nu as t,x6 as v};
