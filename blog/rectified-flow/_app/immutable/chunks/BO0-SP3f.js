import{f as _r,a as Qn,e as Cx,c as HC}from"./DD4Kl2nM.js";import{i as dd}from"./BXZ92wne.js";import{o as $x,a as Ix}from"./DFsFD_-h.js";import{h as ii,a_ as qC,f as Uo,aN as jC,B as XC,a3 as KC,a$ as YC,l as fd,aV as qn,t as Yt,u as ze,Y as Kn,aW as kx,q as Xe,w as Ke,o as hr,ax as ZC,E as $l,v as ot,n as pd,O as Ua,D as JC,aX as Ga}from"./DwidL9pJ.js";import{d as QC,s as um}from"./DdgxXY5T.js";import{p as bt,i as Il,b as bh,s as t$,a as e$,c as n$}from"./DpR1bQtt.js";import{r as s$,a as Ha,s as qa}from"./BbeJ-MKm.js";import{w as r$}from"./CBi_vaey.js";function o$(n,t){for(var e=0;e<t.length;e++){const s=t[e];if(typeof s!="string"&&!Array.isArray(s)){for(const r in s)if(r!=="default"&&!(r in n)){const o=Object.getOwnPropertyDescriptor(s,r);o&&Object.defineProperty(n,r,o.get?o:{enumerable:!0,get:()=>s[r]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}const hm=[...` 	
\r\f \v\uFEFF`];function i$(n,t,e){var s=n==null?"":""+n;if(e){for(var r in e)if(e[r])s=s?s+" "+r:r;else if(s.length)for(var o=r.length,i=0;(i=s.indexOf(r,i))>=0;){var a=i+o;(i===0||hm.includes(s[i-1]))&&(a===s.length||hm.includes(s[a]))?s=(i===0?"":s.substring(0,i))+s.substring(a+1):i=a}}return s===""?null:s}function a$(n,t){return n==null?null:String(n)}function yh(n,t,e,s,r,o){var i=n.__className;if(ii||i!==e||i===void 0){var a=i$(e,s,o);(!ii||a!==n.getAttribute("class"))&&(a==null?n.removeAttribute("class"):n.className=a),n.__className=e}else if(o&&r!==o)for(var l in o){var c=!!o[l];(r==null||c!==!!r[l])&&n.classList.toggle(l,c)}return o}function Jr(n,t,e,s){var r=n.__style;if(ii||r!==t){var o=a$(t);(!ii||o!==n.getAttribute("style"))&&(o==null?n.removeAttribute("style"):n.style.cssText=o),n.__style=t}return s}function l$(n,t,e=t){var s=new WeakSet;qC(n,"input",async r=>{var o=r?n.defaultValue:n.value;if(o=Xu(n)?Ku(o):o,e(o),Uo!==null&&s.add(Uo),await jC(),o!==(o=t())){var i=n.selectionStart,a=n.selectionEnd,l=n.value.length;if(n.value=o??"",a!==null){var c=n.value.length;i===a&&a===l&&c>l?(n.selectionStart=c,n.selectionEnd=c):(n.selectionStart=i,n.selectionEnd=Math.min(a,c))}}}),(ii&&n.defaultValue!==n.value||XC(t)==null&&n.value)&&(e(Xu(n)?Ku(n.value):n.value),Uo!==null&&s.add(Uo)),KC(()=>{var r=t();if(n===document.activeElement){var o=YC??Uo;if(s.has(o))return}Xu(n)&&r===Ku(n.value)||n.type==="date"&&!r&&!n.value||r!==n.value&&(n.value=r??"")})}function Xu(n){var t=n.type;return t==="number"||t==="range"}function Ku(n){return n===""?null:+n}function c$(n,t){return n.filter(e=>{const[s,r]=e;return Math.sqrt(s*s+r*r)<=t})}function lY(n,t="data.json"){const e=JSON.stringify(n,null,2),s=new Blob([e],{type:"application/json"}),r=URL.createObjectURL(s),o=document.createElement("a");o.href=r,o.download=t,o.click(),URL.revokeObjectURL(r)}const Hr={targetDistributionPointsPath:"data/smiley_face.json",cachedFlowMatchingTrajectoriesPath:"cached_samples/flow_matching_trajectories.json",cachedFlowMatchingVectorFieldPath:"cached_samples/flow_matching_vector_field.json",cachedFlowMatchingGridTrajectoriesPath:"cached_samples/flow_matching_grid_trajectories.json",cachedRectifiedFlowTrajectoriesPath:"cached_samples/rectified_flow_trajectories.json",cachedRectifiedFlowGridTrajectoriesPath:"cached_samples/rectified_flow_grid_trajectories.json",cachedRectifiedFlowVectorFieldPath:"cached_samples/rectified_flow_vector_field.json",trainWorkerUrl:"src/lib/flow_matching/workers/train.worker.js",samplingWorkerUrl:"src/lib/flow_matching/workers/sampling.worker.js",flowMatchingModelPath:null,rectifiedFlowModelPath:null,samplingSettings:{flowMatching:{numSamples:100,numSteps:300},flowMatchingGrid:{gridResolution:6,gridDomainRange:{xMin:-1.5,xMax:1.5,yMin:-1.5,yMax:1.5},numSteps:300},flowMatchingVectorField:{gridResolution:8,numTimeSteps:200,domainRange:{xMin:-2.5,xMax:2.5,yMin:-2.5,yMax:2.5}},rectifiedFlow:{numSamples:100,numSteps:300},rectifiedFlowGrid:{gridResolution:6,gridDomainRange:{xMin:-1.5,xMax:1.5,yMin:-1.5,yMax:1.5},numSteps:300},rectifiedFlowVectorField:{gridResolution:8,numTimeSteps:300,domainRange:{xMin:-2.5,xMax:2.5,yMin:-2.5,yMax:2.5}}},trainingSettings:{modelConfig:{dim:2,hidden:64},domainRange:null,flowMatchingTrainingConfig:{epochs:500,batchSize:1024,verbose:!0,displayInterval:100},rectifiedFlowTrainingConfig:{num_rectified_steps:3,epochs_per_rectified_step:200,batchSize:64,num_simulation_steps:200}},stylingSettings:{global:{figureWidth:750},layout:{sourceCenterX:.2,targetCenterX:.8},label:{fontSize:22,yShiftFactor:.5,color:"#666",outlineColor:"#f9f9f9",outlineOpacity:.5},scatterPlot:{radius:5,opacity:.25,color:"#3b82f6",yShiftFactor:-.5,scaleFactor:.8,clippingRadius:2},figureLatex:{color:"#666",outline:!0,outlineColor:"#fff",outlineWidth:3,outlineOpacity:.5},trajectory:{color:"#f17720",strokeWidth:2.5,pointRadius:4,fullOpacity:.15,progressOpacity:.8}}};const u$=1e-7,h$=1e-4;class Sx{constructor(t,e){this.backend=t,this.dataMover=e,this.data=new WeakMap,this.dataIdsCount=0}get(t){return this.data.has(t)||this.dataMover.moveData(this.backend,t),this.data.get(t)}set(t,e){this.dataIdsCount++,this.data.set(t,e)}has(t){return this.data.has(t)}delete(t){return this.dataIdsCount--,this.data.delete(t)}numDataIds(){return this.dataIdsCount}}class md{refCount(t){return je("refCount")}incRef(t){return je("incRef")}timerAvailable(){return!0}time(t){return je("time")}read(t){return je("read")}readSync(t){return je("readSync")}readToGPU(t,e){return je("readToGPU")}numDataIds(){return je("numDataIds")}disposeData(t,e){return je("disposeData")}write(t,e,s){return je("write")}move(t,e,s,r,o){return je("move")}createTensorFromGPUData(t,e,s){return je("createTensorFromGPUData")}memory(){return je("memory")}floatPrecision(){return je("floatPrecision")}epsilon(){return this.floatPrecision()===32?u$:h$}dispose(){return je("dispose")}}function je(n){throw new Error(`'${n}' not yet implemented or not found in the registry. This kernel may not be supported by the tfjs backend you have chosen`)}function d$(n){let t=n.length,e=0;for(;t>0;)e=Math.random()*t|0,t--,Kr(n,t,e)}function gr(n,t,e){return Math.max(n,Math.min(t,e))}function gd(n){return n%2===0?n:n+1}function Kr(n,t,e){const s=n[t];n[t]=n[e],n[e]=s}function f$(n){let t=0;for(let e=0;e<n.length;e++)t+=n[e];return t}function S(n,t){if(!n)throw new Error(typeof t=="string"?t:t())}function xd(n,t,e=""){S(Mt(n,t),()=>e+` Shapes ${n} and ${t} must match`)}function Nx(n){S(n!=null,()=>"The input to the tensor constructor must be a non-null value.")}function q(n){if(n.length===0)return 1;let t=n[0];for(let e=1;e<n.length;e++)t*=n[e];return t}function Mt(n,t){if(n===t)return!0;if(n==null||t==null||n.length!==t.length)return!1;for(let e=0;e<n.length;e++)if(n[e]!==t[e])return!1;return!0}function ao(n){return n%1===0}function wh(n){const t=Math.ceil(Math.sqrt(n));return[t,Math.ceil(n/t)]}function to(n,t){return t<=n.length?n:n+" ".repeat(t-n.length)}function dm(n,t=r=>0,e,s){return new Promise((r,o)=>{let i=0;const a=()=>{if(n()){r();return}i++;const l=t(i);if(e!=null&&i>=e){o();return}s!=null?s(a,l):setTimeout(a,l)};a()})}function Tx(n,t){let e=1,s=-1;for(let o=0;o<n.length;++o)if(n[o]>=0)e*=n[o];else if(n[o]===-1){if(s!==-1)throw Error(`Shapes can only have 1 implicit size. Found -1 at dim ${s} and dim ${o}`);s=o}else if(n[o]<0)throw Error(`Shapes can not be < 0. Found ${n[o]} at dim ${o}`);if(s===-1){if(t>0&&t!==e)throw Error(`Size(${t}) must match the product of shape ${n}`);return n}if(e===0)throw Error(`Cannot infer the missing size in [${n}] when there are 0 elements`);if(t%e!==0)throw Error(`The implicit shape can't be a fractional number. Got ${t} / ${e}`);const r=n.slice();return r[s]=t/e,r}function It(n,t){const e=t.length;return n=n==null?t.map((s,r)=>r):[].concat(n),S(n.every(s=>s>=-e&&s<e),()=>`All values in axis param must be in range [-${e}, ${e}) but got axis ${n}`),S(n.every(s=>ao(s)),()=>`All values in axis param must be integers but got axis ${n}`),n.map(s=>s<0?e+s:s)}function Hs(n,t){const e=[],s=[],r=t!=null&&Array.isArray(t)&&t.length===0,o=t==null||r?null:It(t,n).sort();let i=0;for(let a=0;a<n.length;++a){if(o!=null){if(o[i]===a&&n[a]!==1)throw new Error(`Can't squeeze axis ${a} since its dim '${n[a]}' is not 1`);(o[i]==null||o[i]>a)&&n[a]===1&&(e.push(n[a]),s.push(a)),o[i]<=a&&i++}n[a]!==1&&(e.push(n[a]),s.push(a))}return{newShape:e,keptDims:s}}function ke(n,t){return Qt(n,t)}function Qt(n,t){let e=null;if(n==null||n==="float32")e=new Float32Array(t);else if(n==="int32")e=new Int32Array(t);else if(n==="bool")e=new Uint8Array(t);else if(n==="string")e=new Array(t);else throw new Error(`Unknown data type ${n}`);return e}function p$(n,t){for(let e=0;e<n.length;e++){const s=n[e];if(isNaN(s)||!isFinite(s))throw Error(`A tensor of type ${t} being uploaded contains ${s}.`)}}function m$(n){return n==="bool"||n==="complex64"||n==="float32"||n==="int32"||n==="string"}function Ex(n,t){return!(t==="complex64"||t==="float32"&&n!=="complex64"||t==="int32"&&n!=="float32"&&n!=="complex64"||t==="bool"&&n==="bool")}function kl(n){if(n==="float32"||n==="int32")return 4;if(n==="complex64")return 8;if(n==="bool")return 1;throw new Error(`Unknown dtype ${n}`)}function g$(n){if(n==null)return 0;let t=0;return n.forEach(e=>t+=e.length),t}function $i(n){return typeof n=="string"||n instanceof String}function x$(n){return typeof n=="boolean"}function vh(n){return typeof n=="number"}function Co(n){return Array.isArray(n)?Co(n[0]):n instanceof Float32Array?"float32":n instanceof Int32Array||n instanceof Uint8Array||n instanceof Uint8ClampedArray?"int32":vh(n)?"float32":$i(n)?"string":x$(n)?"bool":"float32"}function Ch(n){return!!(n&&n.constructor&&n.call&&n.apply)}function $h(n,t){for(let e=t;e<n;++e)if(n%e===0)return e;return n}function ut(n){const t=n.length;if(t<2)return[];const e=new Array(t-1);e[t-2]=n[t-1];for(let s=t-3;s>=0;--s)e[s]=e[s+1]*n[s+1];return e}function Rx(n,t,e,s=!1){const r=new Array;if(t.length===1){const o=t[0]*(s?2:1);for(let i=0;i<o;i++)r[i]=e[n+i]}else{const o=t[0],i=t.slice(1),a=i.reduce((l,c)=>l*c)*(s?2:1);for(let l=0;l<o;l++)r[l]=Rx(n+l*a,i,e,s)}return r}function _n(n,t,e=!1){if(n.length===0)return t[0];const s=n.reduce((r,o)=>r*o)*(e?2:1);if(s===0)return[];if(s!==t.length)throw new Error(`[${n}] does not match the input size ${t.length}${e?" for a complex tensor":""}.`);return Rx(0,n,t,e)}function b$(n,t){if(Array.isArray(n))return n;if(t==="float32")return n instanceof Float32Array?n:new Float32Array(n);if(t==="int32")return n instanceof Int32Array?n:new Int32Array(n);if(t==="bool"||t==="string")return Uint8Array.from(new Int32Array(n));throw new Error(`Unknown dtype ${t}`)}function bd(n,t){const e=Se(n,t);for(let s=0;s<e.length;s++)e[s]=1;return e}function Se(n,t){if(t==null||t==="float32"||t==="complex64")return new Float32Array(n);if(t==="int32")return new Int32Array(n);if(t==="bool")return new Uint8Array(n);throw new Error(`Unknown data type ${t}`)}function Ax(n,t){const e=n.reduce((s,r)=>s*r,1);if(t==null||t==="float32")return _n(n,new Float32Array(e));if(t==="int32")return _n(n,new Int32Array(e));if(t==="bool")return _n(n,new Uint8Array(e));throw new Error(`Unknown data type ${t}`)}function ks(n){n.forEach(t=>{S(Number.isInteger(t)&&t>=0,()=>`Tensor must have a shape comprised of positive integers but got shape [${n}].`)})}function es(n,t,e){if(t===0)return 0;if(t===1)return n[0];let s=n[n.length-1];for(let r=0;r<n.length-1;++r)s+=e[r]*n[r];return s}function $o(n,t,e){if(t===0)return[];if(t===1)return[n];const s=new Array(t);for(let r=0;r<s.length-1;++r)s[r]=Math.floor(n/e[r]),n-=s[r]*e[r];return s[s.length-1]=n,s}function yd(n){return n&&n.then&&typeof n.then=="function"}const fm="tfjsflags";class y${constructor(t){this.global=t,this.flags={},this.flagRegistry={},this.urlFlags={},this.getQueryParams=w$,this.populateURLFlags()}setPlatform(t,e){this.platform!=null&&(W().getBool("IS_TEST")||W().getBool("PROD")||console.warn(`Platform ${this.platformName} has already been set. Overwriting the platform with ${t}.`)),this.platformName=t,this.platform=e}registerFlag(t,e,s){if(this.flagRegistry[t]={evaluationFn:e,setHook:s},this.urlFlags[t]!=null){const r=this.urlFlags[t];W().getBool("IS_TEST")||W().getBool("PROD")||console.warn(`Setting feature override from URL ${t}: ${r}.`),this.set(t,r)}}async getAsync(t){return t in this.flags?this.flags[t]:(this.flags[t]=await this.evaluateFlag(t),this.flags[t])}get(t){if(t in this.flags)return this.flags[t];const e=this.evaluateFlag(t);if(yd(e))throw new Error(`Flag ${t} cannot be synchronously evaluated. Please use getAsync() instead.`);return this.flags[t]=e,this.flags[t]}getNumber(t){return this.get(t)}getBool(t){return this.get(t)}getString(t){return this.get(t)}getFlags(){return this.flags}get features(){return this.flags}set(t,e){if(this.flagRegistry[t]==null)throw new Error(`Cannot set flag ${t} as it has not been registered.`);this.flags[t]=e,this.flagRegistry[t].setHook!=null&&this.flagRegistry[t].setHook(e)}evaluateFlag(t){if(this.flagRegistry[t]==null)throw new Error(`Cannot evaluate flag '${t}': no evaluation function found.`);return this.flagRegistry[t].evaluationFn()}setFlags(t){this.flags=Object.assign({},t)}reset(){this.flags={},this.urlFlags={},this.populateURLFlags()}populateURLFlags(){if(typeof this.global>"u"||typeof this.global.location>"u"||typeof this.global.location.search>"u")return;const t=this.getQueryParams(this.global.location.search);fm in t&&t[fm].split(",").forEach(s=>{const[r,o]=s.split(":");this.urlFlags[r]=C$(r,o)})}}function w$(n){const t={};return n.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g,(e,...s)=>(v$(t,s[0],s[1]),s.join("="))),t}function v$(n,t,e){n[decodeURIComponent(t)]=decodeURIComponent(e||"")}function C$(n,t){const e=t.toLowerCase();return e==="true"||e==="false"?e==="true":`${+e}`===e?+e:t}function W(){return Dx}let Dx=null;function $$(n){Dx=n}let Yu;function _x(){if(Yu==null){let n;if(typeof window<"u")n=window;else if(typeof global<"u")n=global;else if(typeof process<"u")n=process;else if(typeof self<"u")n=self;else throw new Error("Could not find a global object");Yu=n}return Yu}function I$(){const n=_x();return n._tfGlobals==null&&(n._tfGlobals=new Map),n._tfGlobals}function wd(n,t){const e=I$();if(e.has(n))return e.get(n);{const s=t();return e.set(n,s),e.get(n)}}const hc="Abs",Ii="Acos",ki="Acosh",Io="Add",vd="AddN",Cd="All",$d="Any",dc="ArgMax",fc="ArgMin",Si="Asin",Ni="Asinh",Ti="Atan",Ei="Atanh",Ri="Atan2",pc="AvgPool",Id="AvgPoolGrad",mc="AvgPool3D",kd="AvgPool3DGrad",gc="BatchMatMul",xc="BatchToSpaceND",Sd="Bincount",Nd="BitwiseAnd",k$="BroadcastTo",Fx="BroadcastArgs",Ai="Cast",Di="Ceil",_i="ClipByValue",Td="Complex",bc="ComplexAbs",yc="Concat",wc="Conv2D",Ed="Conv2DBackpropFilter",vc="Conv2DBackpropInput",Cc="Conv3D",Rd="Conv3DBackpropFilterV2",Ad="Conv3DBackpropInputV2",Fi="Cos",Oi="Cosh",Dd="Cumprod",$c="Cumsum",_d="CropAndResize",Fd="DenseBincount",Od="DepthToSpace",Ic="DepthwiseConv2dNative",Md="DepthwiseConv2dNativeBackpropFilter",Ld="DepthwiseConv2dNativeBackpropInput",Ox="Diag",kc="Dilation2D",Ih="Dilation2DBackpropInput",kh="Dilation2DBackpropFilter",S$="Draw",Mi="RealDiv",Pd="Einsum",Li="Elu",zd="EluGrad",Pi="Erf",Sc="Equal",zi="Exp",Nc="ExpandDims",Bi="Expm1",Bd="FFT",Vd="Fill",Wd="FlipLeftRight",Vi="Floor",Wi="FloorDiv",Tc="FusedBatchNorm",Ec="GatherV2",Mx="GatherNd",Rc="Greater",Ui="GreaterEqual",Gi="Identity",Ud="IFFT",Gd="Imag",Hi="IsFinite",qi="IsInf",ji="IsNan",Ac="LeakyRelu",Dc="Less",_c="LessEqual",Lx="LinSpace",Xi="Log",Ki="Log1p",Fc="LogicalAnd",Oc="LogicalNot",Mc="LogicalOr",N$="LogSoftmax",Lc="LRN",Hd="LRNGrad",Pc="Max",Yi="Maximum",zc="MaxPool",qd="MaxPoolGrad",Bc="MaxPool3D",jd="MaxPool3DGrad",Px="MaxPoolWithArgmax",Vc="Mean",Wc="Min",Zi="Minimum",Uc="MirrorPad",Ji="Mod",zx="Multinomial",Qi="Multiply",Gc="Neg",Hc="NotEqual",Xd="NonMaxSuppressionV3",Kd="NonMaxSuppressionV4",Yd="NonMaxSuppressionV5",qc="OnesLike",jc="OneHot",Xc="Pack",Kc="PadV2",ta="Pow",Yc="Prelu",Zc="Prod",Bx="RaggedGather",Vx="RaggedRange",Wx="RaggedTensorToTensor",Zd="Range",Jd="Real",ea="Reciprocal",na="Relu",Jc="Reshape",Qc="ResizeNearestNeighbor",Qd="ResizeNearestNeighborGrad",tu="ResizeBilinear",tf="ResizeBilinearGrad",sa="Relu6",eu="Reverse",ra="Round",oa="Rsqrt",Ux="ScatterNd",Gx="TensorScatterUpdate",Hx="SearchSorted",nu="Select",ia="Selu",su="Slice",aa="Sin",la="Sinh",ca="Sign",ua="Sigmoid",ha="Softplus",da="Sqrt",ru="Sum",ou="SpaceToBatchND",iu="SplitV",au="Softmax",qx="SparseFillEmptyRows",jx="SparseReshape",Xx="SparseSegmentMean",Kx="SparseSegmentSum",Yx="SparseToDense",fa="SquaredDifference",ef="Square",nf="StaticRegexReplace",sf="StridedSlice",Zx="StringNGrams",Jx="StringSplit",Qx="StringToHashBucketFast",pa="Sub",ma="Tan",ga="Tanh",xa="Tile",rf="TopK",of="Transform",eo="Transpose",af="Unique",lu="Unpack",cu="UnsortedSegmentSum",uu="ZerosLike",ba="Step",T$="FromPixels",lf="RotateWithOffset",Sl="_FusedMatMul",Nl="FusedConv2D",t0="FusedDepthwiseConv2D";function rn(...n){W().getBool("IS_TEST")||W().getBool("PROD")||console.warn(...n)}function E$(...n){W().getBool("IS_TEST")||W().getBool("PROD")||console.log(...n)}const Tl=wd("kernelRegistry",()=>new Map),Sh=wd("gradRegistry",()=>new Map);function pm(n,t){const e=n0(n,t);return Tl.get(e)}function mm(n){return Sh.get(n)}function gm(n){const t=Tl.entries(),e=[];for(;;){const{done:s,value:r}=t.next();if(s)break;const[o,i]=r,[a]=o.split("_");a===n&&e.push(i)}return e}function e0(n){const{kernelName:t,backendName:e}=n,s=n0(t,e);Tl.has(s)&&rn(`The kernel '${t}' for backend '${e}' is already registered`),Tl.set(s,n)}function R$(n){const{kernelName:t}=n;Sh.has(t)&&W().getBool("DEBUG")&&rn(`Overriding the gradient for '${t}'`),Sh.set(t,n)}function n0(n,t){return`${t}_${n}`}function s0(n){return n instanceof Float32Array||n instanceof Int32Array||n instanceof Uint8Array||n instanceof Uint8ClampedArray}function A$(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}function D$(n){if(Object.prototype.hasOwnProperty.call(n,"__esModule"))return n;var t=n.default;if(typeof t=="function"){var e=function s(){var r=!1;try{r=this instanceof s}catch{}return r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};e.prototype=t.prototype}else e={};return Object.defineProperty(e,"__esModule",{value:!0}),Object.keys(n).forEach(function(s){var r=Object.getOwnPropertyDescriptor(n,s);Object.defineProperty(e,s,r.get?r:{enumerable:!0,get:function(){return n[s]}})}),e}var Zu,xm;function _$(){if(xm)return Zu;xm=1,Zu=t;var n=null;try{n=new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0,97,115,109,1,0,0,0,1,13,2,96,0,1,127,96,4,127,127,127,127,1,127,3,7,6,0,1,1,1,1,1,6,6,1,127,1,65,0,11,7,50,6,3,109,117,108,0,1,5,100,105,118,95,115,0,2,5,100,105,118,95,117,0,3,5,114,101,109,95,115,0,4,5,114,101,109,95,117,0,5,8,103,101,116,95,104,105,103,104,0,0,10,191,1,6,4,0,35,0,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,126,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,127,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,128,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,129,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,130,34,4,66,32,135,167,36,0,32,4,167,11])),{}).exports}catch{}function t(k,C,R){this.low=k|0,this.high=C|0,this.unsigned=!!R}t.prototype.__isLong__,Object.defineProperty(t.prototype,"__isLong__",{value:!0});function e(k){return(k&&k.__isLong__)===!0}t.isLong=e;var s={},r={};function o(k,C){var R,D,M;return C?(k>>>=0,(M=0<=k&&k<256)&&(D=r[k],D)?D:(R=a(k,(k|0)<0?-1:0,!0),M&&(r[k]=R),R)):(k|=0,(M=-128<=k&&k<128)&&(D=s[k],D)?D:(R=a(k,k<0?-1:0,!1),M&&(s[k]=R),R))}t.fromInt=o;function i(k,C){if(isNaN(k))return C?b:x;if(C){if(k<0)return b;if(k>=p)return N}else{if(k<=-m)return T;if(k+1>=m)return $}return k<0?i(-k,C).neg():a(k%f|0,k/f|0,C)}t.fromNumber=i;function a(k,C,R){return new t(k,C,R)}t.fromBits=a;var l=Math.pow;function c(k,C,R){if(k.length===0)throw Error("empty string");if(k==="NaN"||k==="Infinity"||k==="+Infinity"||k==="-Infinity")return x;if(typeof C=="number"?(R=C,C=!1):C=!!C,R=R||10,R<2||36<R)throw RangeError("radix");var D;if((D=k.indexOf("-"))>0)throw Error("interior hyphen");if(D===0)return c(k.substring(1),C,R).neg();for(var M=i(l(R,8)),O=x,z=0;z<k.length;z+=8){var G=Math.min(8,k.length-z),V=parseInt(k.substring(z,z+G),R);if(G<8){var U=i(l(R,G));O=O.mul(U).add(i(V))}else O=O.mul(M),O=O.add(i(V))}return O.unsigned=C,O}t.fromString=c;function u(k,C){return typeof k=="number"?i(k,C):typeof k=="string"?c(k,C):a(k.low,k.high,typeof C=="boolean"?C:k.unsigned)}t.fromValue=u;var h=65536,d=1<<24,f=h*h,p=f*f,m=p/2,g=o(d),x=o(0);t.ZERO=x;var b=o(0,!0);t.UZERO=b;var w=o(1);t.ONE=w;var y=o(1,!0);t.UONE=y;var v=o(-1);t.NEG_ONE=v;var $=a(-1,2147483647,!1);t.MAX_VALUE=$;var N=a(-1,-1,!0);t.MAX_UNSIGNED_VALUE=N;var T=a(0,-2147483648,!1);t.MIN_VALUE=T;var I=t.prototype;return I.toInt=function(){return this.unsigned?this.low>>>0:this.low},I.toNumber=function(){return this.unsigned?(this.high>>>0)*f+(this.low>>>0):this.high*f+(this.low>>>0)},I.toString=function(C){if(C=C||10,C<2||36<C)throw RangeError("radix");if(this.isZero())return"0";if(this.isNegative())if(this.eq(T)){var R=i(C),D=this.div(R),M=D.mul(R).sub(this);return D.toString(C)+M.toInt().toString(C)}else return"-"+this.neg().toString(C);for(var O=i(l(C,6),this.unsigned),z=this,G="";;){var V=z.div(O),U=z.sub(V.mul(O)).toInt()>>>0,j=U.toString(C);if(z=V,z.isZero())return j+G;for(;j.length<6;)j="0"+j;G=""+j+G}},I.getHighBits=function(){return this.high},I.getHighBitsUnsigned=function(){return this.high>>>0},I.getLowBits=function(){return this.low},I.getLowBitsUnsigned=function(){return this.low>>>0},I.getNumBitsAbs=function(){if(this.isNegative())return this.eq(T)?64:this.neg().getNumBitsAbs();for(var C=this.high!=0?this.high:this.low,R=31;R>0&&(C&1<<R)==0;R--);return this.high!=0?R+33:R+1},I.isZero=function(){return this.high===0&&this.low===0},I.eqz=I.isZero,I.isNegative=function(){return!this.unsigned&&this.high<0},I.isPositive=function(){return this.unsigned||this.high>=0},I.isOdd=function(){return(this.low&1)===1},I.isEven=function(){return(this.low&1)===0},I.equals=function(C){return e(C)||(C=u(C)),this.unsigned!==C.unsigned&&this.high>>>31===1&&C.high>>>31===1?!1:this.high===C.high&&this.low===C.low},I.eq=I.equals,I.notEquals=function(C){return!this.eq(C)},I.neq=I.notEquals,I.ne=I.notEquals,I.lessThan=function(C){return this.comp(C)<0},I.lt=I.lessThan,I.lessThanOrEqual=function(C){return this.comp(C)<=0},I.lte=I.lessThanOrEqual,I.le=I.lessThanOrEqual,I.greaterThan=function(C){return this.comp(C)>0},I.gt=I.greaterThan,I.greaterThanOrEqual=function(C){return this.comp(C)>=0},I.gte=I.greaterThanOrEqual,I.ge=I.greaterThanOrEqual,I.compare=function(C){if(e(C)||(C=u(C)),this.eq(C))return 0;var R=this.isNegative(),D=C.isNegative();return R&&!D?-1:!R&&D?1:this.unsigned?C.high>>>0>this.high>>>0||C.high===this.high&&C.low>>>0>this.low>>>0?-1:1:this.sub(C).isNegative()?-1:1},I.comp=I.compare,I.negate=function(){return!this.unsigned&&this.eq(T)?T:this.not().add(w)},I.neg=I.negate,I.add=function(C){e(C)||(C=u(C));var R=this.high>>>16,D=this.high&65535,M=this.low>>>16,O=this.low&65535,z=C.high>>>16,G=C.high&65535,V=C.low>>>16,U=C.low&65535,j=0,K=0,Y=0,X=0;return X+=O+U,Y+=X>>>16,X&=65535,Y+=M+V,K+=Y>>>16,Y&=65535,K+=D+G,j+=K>>>16,K&=65535,j+=R+z,j&=65535,a(Y<<16|X,j<<16|K,this.unsigned)},I.subtract=function(C){return e(C)||(C=u(C)),this.add(C.neg())},I.sub=I.subtract,I.multiply=function(C){if(this.isZero())return x;if(e(C)||(C=u(C)),n){var R=n.mul(this.low,this.high,C.low,C.high);return a(R,n.get_high(),this.unsigned)}if(C.isZero())return x;if(this.eq(T))return C.isOdd()?T:x;if(C.eq(T))return this.isOdd()?T:x;if(this.isNegative())return C.isNegative()?this.neg().mul(C.neg()):this.neg().mul(C).neg();if(C.isNegative())return this.mul(C.neg()).neg();if(this.lt(g)&&C.lt(g))return i(this.toNumber()*C.toNumber(),this.unsigned);var D=this.high>>>16,M=this.high&65535,O=this.low>>>16,z=this.low&65535,G=C.high>>>16,V=C.high&65535,U=C.low>>>16,j=C.low&65535,K=0,Y=0,X=0,Q=0;return Q+=z*j,X+=Q>>>16,Q&=65535,X+=O*j,Y+=X>>>16,X&=65535,X+=z*U,Y+=X>>>16,X&=65535,Y+=M*j,K+=Y>>>16,Y&=65535,Y+=O*U,K+=Y>>>16,Y&=65535,Y+=z*V,K+=Y>>>16,Y&=65535,K+=D*j+M*U+O*V+z*G,K&=65535,a(X<<16|Q,K<<16|Y,this.unsigned)},I.mul=I.multiply,I.divide=function(C){if(e(C)||(C=u(C)),C.isZero())throw Error("division by zero");if(n){if(!this.unsigned&&this.high===-2147483648&&C.low===-1&&C.high===-1)return this;var R=(this.unsigned?n.div_u:n.div_s)(this.low,this.high,C.low,C.high);return a(R,n.get_high(),this.unsigned)}if(this.isZero())return this.unsigned?b:x;var D,M,O;if(this.unsigned){if(C.unsigned||(C=C.toUnsigned()),C.gt(this))return b;if(C.gt(this.shru(1)))return y;O=b}else{if(this.eq(T)){if(C.eq(w)||C.eq(v))return T;if(C.eq(T))return w;var z=this.shr(1);return D=z.div(C).shl(1),D.eq(x)?C.isNegative()?w:v:(M=this.sub(C.mul(D)),O=D.add(M.div(C)),O)}else if(C.eq(T))return this.unsigned?b:x;if(this.isNegative())return C.isNegative()?this.neg().div(C.neg()):this.neg().div(C).neg();if(C.isNegative())return this.div(C.neg()).neg();O=x}for(M=this;M.gte(C);){D=Math.max(1,Math.floor(M.toNumber()/C.toNumber()));for(var G=Math.ceil(Math.log(D)/Math.LN2),V=G<=48?1:l(2,G-48),U=i(D),j=U.mul(C);j.isNegative()||j.gt(M);)D-=V,U=i(D,this.unsigned),j=U.mul(C);U.isZero()&&(U=w),O=O.add(U),M=M.sub(j)}return O},I.div=I.divide,I.modulo=function(C){if(e(C)||(C=u(C)),n){var R=(this.unsigned?n.rem_u:n.rem_s)(this.low,this.high,C.low,C.high);return a(R,n.get_high(),this.unsigned)}return this.sub(this.div(C).mul(C))},I.mod=I.modulo,I.rem=I.modulo,I.not=function(){return a(~this.low,~this.high,this.unsigned)},I.and=function(C){return e(C)||(C=u(C)),a(this.low&C.low,this.high&C.high,this.unsigned)},I.or=function(C){return e(C)||(C=u(C)),a(this.low|C.low,this.high|C.high,this.unsigned)},I.xor=function(C){return e(C)||(C=u(C)),a(this.low^C.low,this.high^C.high,this.unsigned)},I.shiftLeft=function(C){return e(C)&&(C=C.toInt()),(C&=63)===0?this:C<32?a(this.low<<C,this.high<<C|this.low>>>32-C,this.unsigned):a(0,this.low<<C-32,this.unsigned)},I.shl=I.shiftLeft,I.shiftRight=function(C){return e(C)&&(C=C.toInt()),(C&=63)===0?this:C<32?a(this.low>>>C|this.high<<32-C,this.high>>C,this.unsigned):a(this.high>>C-32,this.high>=0?0:-1,this.unsigned)},I.shr=I.shiftRight,I.shiftRightUnsigned=function(C){if(e(C)&&(C=C.toInt()),C&=63,C===0)return this;var R=this.high;if(C<32){var D=this.low;return a(D>>>C|R<<32-C,R>>>C,this.unsigned)}else return C===32?a(R,0,this.unsigned):a(R>>>C-32,0,this.unsigned)},I.shru=I.shiftRightUnsigned,I.shr_u=I.shiftRightUnsigned,I.toSigned=function(){return this.unsigned?a(this.low,this.high,!1):this},I.toUnsigned=function(){return this.unsigned?this:a(this.low,this.high,!0)},I.toBytes=function(C){return C?this.toBytesLE():this.toBytesBE()},I.toBytesLE=function(){var C=this.high,R=this.low;return[R&255,R>>>8&255,R>>>16&255,R>>>24,C&255,C>>>8&255,C>>>16&255,C>>>24]},I.toBytesBE=function(){var C=this.high,R=this.low;return[C>>>24,C>>>16&255,C>>>8&255,C&255,R>>>24,R>>>16&255,R>>>8&255,R&255]},t.fromBytes=function(C,R,D){return D?t.fromBytesLE(C,R):t.fromBytesBE(C,R)},t.fromBytesLE=function(C,R){return new t(C[0]|C[1]<<8|C[2]<<16|C[3]<<24,C[4]|C[5]<<8|C[6]<<16|C[7]<<24,R)},t.fromBytesBE=function(C,R){return new t(C[4]<<24|C[5]<<16|C[6]<<8|C[7],C[0]<<24|C[1]<<16|C[2]<<8|C[3],R)},Zu}var r0=_$();const o0=A$(r0),F$=o$({__proto__:null,default:o0},[r0]);const or=o0||F$;function hu(n){return or.fromString(n,!0,16)}const i0=hu("c3a5c85c97cb3127"),rr=hu("b492b66fbe98f273"),_e=hu("9ae16a3b2f90404f");function Nh(n){return n.xor(n.shru(47))}function a0(n,t,e){const s=n.slice(t,t+e);return or.fromBytes(Array.from(s),!0,!0)}function Gt(n,t){return a0(n,t,8)}function bm(n,t){return a0(n,t,4)}function ge(n,t){return t===0?n:n.shru(t).or(n.shl(64-t))}function Os(n,t,e=hu("9ddfea08eb382d69")){let s=n.xor(t).mul(e);s=s.xor(s.shru(47));let r=t.xor(s).mul(e);return r=r.xor(r.shru(47)),r=r.mul(e),r}function O$(n,t,e,s,r,o){r=r.add(n),o=ge(o.add(r).add(s),21);const i=r;return r=r.add(t),r=r.add(e),o=o.add(ge(r,44)),[r.add(s),o.add(i)]}function ja(n,t,e,s){return O$(Gt(n,t),Gt(n,t+8),Gt(n,t+16),Gt(n,t+24),e,s)}function M$(n,t=n.length){if(t>=8){const e=_e.add(t*2),s=Gt(n,0).add(_e),r=Gt(n,t-8),o=ge(r,37).mul(e).add(s),i=ge(s,25).add(r).mul(e);return Os(o,i,e)}if(t>=4){const e=_e.add(t*2),s=bm(n,0);return Os(s.shl(3).add(t),bm(n,t-4),e)}if(t>0){const e=n[0],s=n[t>>1],r=n[t-1],o=e+(s<<8),i=t+(r<<2);return Nh(_e.mul(o).xor(i0.mul(i))).mul(_e)}return _e}function L$(n,t=n.length){const e=_e.add(t*2),s=Gt(n,0).mul(rr),r=Gt(n,8),o=Gt(n,t-8).mul(e),i=Gt(n,t-16).mul(_e);return Os(ge(s.add(r),43).add(ge(o,30)).add(i),s.add(ge(r.add(_e),18)).add(o),e)}function P$(n,t=n.length){const e=_e.add(t*2),s=Gt(n,0).mul(_e),r=Gt(n,8),o=Gt(n,t-8).mul(e),i=Gt(n,t-16).mul(_e),a=ge(s.add(r),43).add(ge(o,30)).add(i),l=Os(a,s.add(ge(r.add(_e),18)).add(o),e),c=Gt(n,16).mul(e),u=Gt(n,24),h=a.add(Gt(n,t-32)).mul(e),d=l.add(Gt(n,t-24)).mul(e);return Os(ge(c.add(u),43).add(ge(h,30)).add(d),c.add(ge(u.add(s),18)).add(h),e)}function z$(n,t=n.length){const e=or.fromNumber(81,!0);if(t<=32)return t<=16?M$(n,t):L$(n,t);if(t<=64)return P$(n,t);let s=e,r=e.mul(rr).add(113),o=Nh(r.mul(_e).add(113)).mul(_e),i=[or.UZERO,or.UZERO],a=[or.UZERO,or.UZERO];s=s.mul(_e).add(Gt(n,0));let l=0;const c=(t-1>>6)*64,u=c+(t-1&63)-63;do s=ge(s.add(r).add(i[0]).add(Gt(n,l+8)),37).mul(rr),r=ge(r.add(i[1]).add(Gt(n,l+48)),42).mul(rr),s=s.xor(a[1]),r=r.add(i[0]).add(Gt(n,l+40)),o=ge(o.add(a[0]),33).mul(rr),i=ja(n,l,i[1].mul(rr),s.add(a[0])),a=ja(n,l+32,o.add(a[1]),r.add(Gt(n,l+16))),[o,s]=[s,o],l+=64;while(l!==c);const h=rr.add(o.and(255).shl(1));return l=u,a[0]=a[0].add(t-1&63),i[0]=i[0].add(a[0]),a[0]=a[0].add(i[0]),s=ge(s.add(r).add(i[0]).add(Gt(n,l+8)),37).mul(h),r=ge(r.add(i[1]).add(Gt(n,l+48)),42).mul(h),s=s.xor(a[1].mul(9)),r=r.add(i[0].mul(9).add(Gt(n,l+40))),o=ge(o.add(a[0]),33).mul(h),i=ja(n,l,i[1].mul(h),s.add(a[0])),a=ja(n,l+32,o.add(a[1]),r.add(Gt(n,l+16))),[o,s]=[s,o],Os(Os(i[0],a[0],h).add(Nh(r).mul(i0)).add(o),Os(i[1],a[1],h).add(s),h)}function qs(n,t){return t==="string"?Ms(n):Fr([n],t)}function B$(n,t){return n instanceof Float32Array&&t==="float32"||n instanceof Int32Array&&t==="int32"||n instanceof Uint8Array&&t==="bool"}function Fr(n,t){if(t==="string")throw new Error("Cannot convert a string[] to a TypedArray");if(Array.isArray(n)&&(n=xr(n)),W().getBool("DEBUG")&&p$(n,t),B$(n,t))return n;if(t==null||t==="float32"||t==="complex64")return new Float32Array(n);if(t==="int32")return new Int32Array(n);if(t==="bool"){const e=new Uint8Array(n.length);for(let s=0;s<e.length;++s)Math.round(n[s])!==0&&(e[s]=1);return e}else throw new Error(`Unknown data type ${t}`)}function Be(){return W().platform.now()}function Ms(n,t="utf-8"){return t=t||"utf-8",W().platform.encode(n,t)}function zs(n,t="utf-8"){return t=t||"utf-8",W().platform.decode(n,t)}function xn(n){return W().platform.isTypedArray!=null?W().platform.isTypedArray(n):s0(n)}function xr(n,t=[],e=!1){if(t==null&&(t=[]),typeof n=="boolean"||typeof n=="number"||typeof n=="string"||yd(n)||n==null||xn(n)&&e)t.push(n);else if(Array.isArray(n)||xn(n))for(let s=0;s<n.length;++s)xr(n[s],t,e);else{let s=-1;for(const r of Object.keys(n))/^([1-9]+[0-9]*|0)$/.test(r)&&(s=Math.max(s,Number(r)));for(let r=0;r<=s;r++)xr(n[r],t,e)}return t}class V${constructor(t,e){this.backendTimer=t,this.logger=e,e==null&&(this.logger=new U$)}profileKernel(t,e,s){let r;const o=()=>{r=s()};let i;const a=Be();if(this.backendTimer.timerAvailable())i=this.backendTimer.time(o);else{o();for(const c of r)c.dataSync();i=Promise.resolve({kernelMs:Be()-a})}if(W().getBool("CHECK_COMPUTATION_FOR_ERRORS"))for(let c=0;c<r.length;c++){const u=r[c];u.data().then(h=>{W$(h,u.dtype,t)})}return{kernelName:t,outputs:r,inputs:e,timeMs:i.then(c=>c.kernelMs),extraInfo:i.then(c=>c.getExtraProfileInfo!=null?c.getExtraProfileInfo():"")}}logKernelProfile(t){const{kernelName:e,outputs:s,timeMs:r,inputs:o,extraInfo:i}=t;s.forEach(a=>{Promise.all([a.data(),r,i]).then(l=>{this.logger.logKernelProfile(e,a,l[0],l[1],o,l[2])})})}}function W$(n,t,e){if(t!=="float32")return!1;for(let s=0;s<n.length;s++){const r=n[s];if(isNaN(r)||!isFinite(r))return console.warn(`Found ${r} in the result of '${e}'`),!0}return!1}class U${logKernelProfile(t,e,s,r,o,i){const a=typeof r=="number"?to(`${r}ms`,9):r.error,l=to(t,25),c=e.rank,u=e.size,h=to(e.shape.toString(),14);let d="";for(const f in o){const p=o[f];if(p!=null){const m=p.shape||e.shape,g=m.length;d+=`${f}: ${g}D ${g>0?m:""} `}}console.log(`%c${l}	%c${a}	%c${c}D ${h}	%c${u}	%c${d}	%c${i}`,"font-weight:bold","color:red","color:blue","color: orange","color: green","color: steelblue")}}function G$(n,t,e){const s={},r={};for(let l=0;l<t.length;l++)s[t[l].id]=!0;for(let l=0;l<n.length;l++){const c=n[l],u=c.inputs;for(const h in u){const d=u[h];let f=!1;for(let p=0;p<t.length;p++)if(s[d.id]){c.outputs.forEach(m=>s[m.id]=!0),f=!0,r[c.id]=!0;break}if(f)break}}const o={};o[e.id]=!0;const i={};for(let l=n.length-1;l>=0;l--){const c=n[l],u=c.inputs;for(let h=0;h<c.outputs.length;h++)if(o[c.outputs[h].id]){for(const d in u)o[u[d].id]=!0,i[c.id]=!0;break}}const a=[];for(let l=0;l<n.length;l++){const c=n[l];if(r[c.id]&&i[c.id]){const u={};for(const d in c.inputs){const f=c.inputs[d];s[f.id]&&(u[d]=f)}const h=Object.assign({},c);h.inputs=u,h.outputs=c.outputs,a.push(h)}}return a}function H$(n,t,e,s){for(let r=t.length-1;r>=0;r--){const o=t[r],i=[];if(o.outputs.forEach(l=>{const c=n[l.id];c!=null?i.push(c):i.push(null)}),o.gradient==null)throw new Error(`Cannot compute gradient: gradient function not found for ${o.kernelName}.`);const a=o.gradient(i);for(const l in o.inputs){if(!(l in a))throw new Error(`Cannot backprop through input ${l}. Available gradients found: ${Object.keys(a)}.`);const c=e(()=>a[l]());if(c.dtype!=="float32")throw new Error(`Error in gradient for op ${o.kernelName}. The gradient of input ${l} must have 'float32' dtype, but has '${c.dtype}'`);const u=o.inputs[l];if(!Mt(c.shape,u.shape))throw new Error(`Error in gradient for op ${o.kernelName}. The gradient of input '${l}' has shape '${c.shape}', which does not match the shape of the input '${u.shape}'`);if(n[u.id]==null)n[u.id]=c;else{const h=n[u.id];n[u.id]=s(h,c),h.dispose()}}}}const ym=20,Go=3,Ju=7;function q$(n,t,e,s){const r=ut(t),o=j$(n,t,e,r),i=t.length,a=ul(n,t,e,r,o),l=["Tensor"];return s&&(l.push(`  dtype: ${e}`),l.push(`  rank: ${i}`),l.push(`  shape: [${t}]`),l.push("  values:")),l.push(a.map(c=>"    "+c).join(`
`)),l.join(`
`)}function j$(n,t,e,s){const r=q(t),o=s[s.length-1],i=new Array(o).fill(0),a=t.length,l=e==="complex64"?Yo(n):n;if(a>1)for(let c=0;c<r/o;c++){const u=c*o;for(let h=0;h<o;h++)i[h]=Math.max(i[h],Ko(l[u+h],0,e).length)}return i}function Ko(n,t,e){let s;return Array.isArray(n)?s=`${parseFloat(n[0].toFixed(Ju))} + ${parseFloat(n[1].toFixed(Ju))}j`:$i(n)?s=`'${n}'`:e==="bool"?s=l0(n):s=parseFloat(n.toFixed(Ju)).toString(),to(s,t)}function l0(n){return n===0?"false":"true"}function ul(n,t,e,s,r,o=!0){const i=e==="complex64"?2:1,a=t[0],l=t.length;if(l===0){if(e==="complex64"){const m=Yo(n);return[Ko(m[0],0,e)]}return e==="bool"?[l0(n[0])]:[n[0].toString()]}if(l===1){if(a>ym){const g=Go*i;let x=Array.from(n.slice(0,g)),b=Array.from(n.slice((a-Go)*i,a*i));return e==="complex64"&&(x=Yo(x),b=Yo(b)),["["+x.map((w,y)=>Ko(w,r[y],e)).join(", ")+", ..., "+b.map((w,y)=>Ko(w,r[a-Go+y],e)).join(", ")+"]"]}return["["+(e==="complex64"?Yo(n):Array.from(n)).map((g,x)=>Ko(g,r[x],e)).join(", ")+"]"]}const c=t.slice(1),u=s.slice(1),h=s[0]*i,d=[];if(a>ym){for(let m=0;m<Go;m++){const g=m*h,x=g+h;d.push(...ul(n.slice(g,x),c,e,u,r,!1))}d.push("...");for(let m=a-Go;m<a;m++){const g=m*h,x=g+h;d.push(...ul(n.slice(g,x),c,e,u,r,m===a-1))}}else for(let m=0;m<a;m++){const g=m*h,x=g+h;d.push(...ul(n.slice(g,x),c,e,u,r,m===a-1))}const f=l===2?",":"";d[0]="["+(a>0?d[0]+f:"");for(let m=1;m<d.length-1;m++)d[m]=" "+d[m]+f;let p=`,
`;for(let m=2;m<l;m++)p+=`
`;return d[d.length-1]=" "+d[d.length-1]+"]"+(o?"":p),d}function Yo(n){const t=[];for(let e=0;e<n.length;e+=2)t.push([n[e],n[e+1]]);return t}class ve{constructor(t,e,s){if(this.dtype=e,this.shape=t.slice(),this.size=q(t),s!=null){const r=s.length;S(r===this.size,()=>`Length of values '${r}' does not match the size inferred by the shape '${this.size}'.`)}if(e==="complex64")throw new Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");this.values=s||Qt(e,this.size),this.strides=ut(t)}set(t,...e){e.length===0&&(e=[0]),S(e.length===this.rank,()=>`The number of provided coordinates (${e.length}) must match the rank (${this.rank})`);const s=this.locToIndex(e);this.values[s]=t}get(...t){t.length===0&&(t=[0]);let e=0;for(const r of t){if(r<0||r>=this.shape[e]){const o=`Requested out of range element at ${t}.   Buffer shape=${this.shape}`;throw new Error(o)}e++}let s=t[t.length-1];for(let r=0;r<t.length-1;++r)s+=this.strides[r]*t[r];return this.values[s]}locToIndex(t){if(this.rank===0)return 0;if(this.rank===1)return t[0];let e=t[t.length-1];for(let s=0;s<t.length-1;++s)e+=this.strides[s]*t[s];return e}indexToLoc(t){if(this.rank===0)return[];if(this.rank===1)return[t];const e=new Array(this.shape.length);for(let s=0;s<e.length-1;++s)e[s]=Math.floor(t/this.strides[s]),t-=e[s]*this.strides[s];return e[e.length-1]=t,e}get rank(){return this.shape.length}toTensor(){return Tn().makeTensor(this.values,this.shape,this.dtype)}}let Tn=null,Yr=null;function X$(n){Tn=n}function K$(n){Yr=n}class le{constructor(t,e,s,r){this.kept=!1,this.isDisposedInternal=!1,this.shape=t.slice(),this.dtype=e||"float32",this.size=q(t),this.strides=ut(t),this.dataId=s,this.id=r,this.rankType=this.rank<5?this.rank.toString():"higher"}get rank(){return this.shape.length}async buffer(){const t=await this.data();return Yr.buffer(this.shape,this.dtype,t)}bufferSync(){return Yr.buffer(this.shape,this.dtype,this.dataSync())}async array(){const t=await this.data();return _n(this.shape,t,this.dtype==="complex64")}arraySync(){return _n(this.shape,this.dataSync(),this.dtype==="complex64")}async data(){this.throwIfDisposed();const t=Tn().read(this.dataId);if(this.dtype==="string"){const e=await t;try{return e.map(s=>zs(s))}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}}return t}dataToGPU(t){return this.throwIfDisposed(),Tn().readToGPU(this.dataId,t)}dataSync(){this.throwIfDisposed();const t=Tn().readSync(this.dataId);if(this.dtype==="string")try{return t.map(e=>zs(e))}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}return t}async bytes(){this.throwIfDisposed();const t=await Tn().read(this.dataId);return this.dtype==="string"?t:new Uint8Array(t.buffer)}dispose(){this.isDisposed||(this.kerasMask&&this.kerasMask.dispose(),Tn().disposeTensor(this),this.isDisposedInternal=!0)}get isDisposed(){return this.isDisposedInternal}throwIfDisposed(){if(this.isDisposed)throw new Error("Tensor is disposed.")}print(t=!1){return Yr.print(this,t)}clone(){return this.throwIfDisposed(),Yr.clone(this)}toString(t=!1){const e=this.dataSync();return q$(e,this.shape,this.dtype,t)}cast(t){return this.throwIfDisposed(),Yr.cast(this,t)}variable(t=!0,e,s){return this.throwIfDisposed(),Tn().makeVariable(this,t,e,s)}}Object.defineProperty(le,Symbol.hasInstance,{value:n=>!!n&&n.data!=null&&n.dataSync!=null&&n.throwIfDisposed!=null});function H(){return wd("Tensor",()=>le)}H();class El extends le{constructor(t,e,s,r){super(t.shape,t.dtype,t.dataId,r),this.trainable=e,this.name=s}assign(t){if(t.dtype!==this.dtype)throw new Error(`dtype of the new value (${t.dtype}) and previous value (${this.dtype}) must match`);if(!Mt(t.shape,this.shape))throw new Error(`shape of the new value (${t.shape}) and previous value (${this.shape}) must match`);Tn().disposeTensor(this),this.dataId=t.dataId,Tn().incRef(this,null)}dispose(){Tn().disposeVariable(this),this.isDisposedInternal=!0}}Object.defineProperty(El,Symbol.hasInstance,{value:n=>n instanceof le&&n.assign!=null&&n.assign instanceof Function});var wm;(function(n){n.R0="R0",n.R1="R1",n.R2="R2",n.R3="R3",n.R4="R4",n.R5="R5",n.R6="R6"})(wm||(wm={}));var Th;(function(n){n.float32="float32",n.int32="int32",n.bool="int32",n.complex64="complex64"})(Th||(Th={}));var Eh;(function(n){n.float32="float32",n.int32="int32",n.bool="bool",n.complex64="complex64"})(Eh||(Eh={}));var Rh;(function(n){n.float32="float32",n.int32="float32",n.bool="float32",n.complex64="complex64"})(Rh||(Rh={}));var Ah;(function(n){n.float32="complex64",n.int32="complex64",n.bool="complex64",n.complex64="complex64"})(Ah||(Ah={}));const Y$={float32:Rh,int32:Th,bool:Eh,complex64:Ah};function Qe(n,t){if(n==="string"||t==="string"){if(n==="string"&&t==="string")return"string";throw new Error(`Can not upcast ${n} with ${t}`)}return Y$[n][t]}function cf(n){return Qe(n,"int32")}function c0(n){return n!=null&&typeof n=="object"&&"texture"in n&&n.texture instanceof WebGLTexture}function u0(n){return typeof GPUBuffer<"u"&&n!=null&&typeof n=="object"&&"buffer"in n&&n.buffer instanceof GPUBuffer}function ee(n,t){if(n.dtype===t.dtype)return[n,t];const e=Qe(n.dtype,t.dtype);return[n.cast(e),t.cast(e)]}function h0(n){const t=[];return d0(n,t,new Set),t}function d0(n,t,e){if(n==null)return;if(n instanceof le){t.push(n);return}if(!Z$(n))return;const s=n;for(const r in s){const o=s[r];e.has(o)||(e.add(o),d0(o,t,e))}}function Z$(n){return Array.isArray(n)||typeof n=="object"}function Qu(n){return n.kernelName!=null}class vm{constructor(){this.registeredVariables={},this.nextTapeNodeId=0,this.numBytes=0,this.numTensors=0,this.numStringTensors=0,this.numDataBuffers=0,this.gradientDepth=0,this.kernelDepth=0,this.scopeStack=[],this.numDataMovesStack=[],this.nextScopeId=0,this.tensorInfo=new WeakMap,this.profiling=!1,this.activeProfile={newBytes:0,newTensors:0,peakBytes:0,kernels:[],result:null,get kernelNames(){return Array.from(new Set(this.kernels.map(t=>t.name)))}}}dispose(){for(const t in this.registeredVariables)this.registeredVariables[t].dispose()}}class lo{constructor(t){this.ENV=t,this.registry={},this.registryFactory={},this.pendingBackendInitId=0,this.state=new vm}async ready(){if(this.pendingBackendInit!=null)return this.pendingBackendInit.then(()=>{});if(this.backendInstance!=null)return;const t=this.getSortedBackends();for(let e=0;e<t.length;e++){const s=t[e];if(await this.initializeBackend(s).success){await this.setBackend(s);return}}throw new Error("Could not initialize any backends, all backend initializations failed.")}get backend(){if(this.pendingBackendInit!=null)throw new Error(`Backend '${this.backendName}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);if(this.backendInstance==null){const{name:t,asyncInit:e}=this.initializeBackendsAndReturnBest();if(e)throw new Error(`The highest priority backend '${t}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);this.setBackend(t)}return this.backendInstance}backendNames(){return Object.keys(this.registryFactory)}findBackend(t){if(!(t in this.registry))if(t in this.registryFactory){const{asyncInit:e}=this.initializeBackend(t);if(e)return null}else return null;return this.registry[t]}findBackendFactory(t){return t in this.registryFactory?this.registryFactory[t].factory:null}registerBackend(t,e,s=1){return t in this.registryFactory?(rn(`${t} backend was already registered. Reusing existing backend factory.`),!1):(this.registryFactory[t]={factory:e,priority:s},!0)}async setBackend(t){if(this.registryFactory[t]==null)throw new Error(`Backend name '${t}' not found in registry`);if(this.backendName=t,this.registry[t]==null){this.backendInstance=null;const{success:e,asyncInit:s}=this.initializeBackend(t);if(!(s?await e:e))return!1}return this.backendInstance=this.registry[t],this.setupRegisteredKernels(),this.profiler=new V$(this.backendInstance),!0}setupRegisteredKernels(){gm(this.backendName).forEach(e=>{e.setupFunc!=null&&e.setupFunc(this.backendInstance)})}disposeRegisteredKernels(t){gm(t).forEach(s=>{s.disposeFunc!=null&&s.disposeFunc(this.registry[t])})}initializeBackend(t){const e=this.registryFactory[t];if(e==null)throw new Error(`Cannot initialize backend ${t}, no registration found.`);try{const s=e.factory();if(s&&!(s instanceof md)&&typeof s.then=="function"){const r=++this.pendingBackendInitId,o=s.then(i=>r<this.pendingBackendInitId?!1:(this.registry[t]=i,this.pendingBackendInit=null,!0)).catch(i=>(r<this.pendingBackendInitId||(this.pendingBackendInit=null,rn(`Initialization of backend ${t} failed`),rn(i.stack||i.message)),!1));return this.pendingBackendInit=o,{success:o,asyncInit:!0}}else return this.registry[t]=s,{success:!0,asyncInit:!1}}catch(s){return rn(`Initialization of backend ${t} failed`),rn(s.stack||s.message),{success:!1,asyncInit:!1}}}removeBackend(t){if(!(t in this.registryFactory))throw new Error(`${t} backend not found in registry`);this.backendName===t&&this.pendingBackendInit!=null&&this.pendingBackendInitId++,t in this.registry&&(this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t]),delete this.registryFactory[t],this.backendName===t&&(this.pendingBackendInit=null,this.backendName=null,this.backendInstance=null)}getSortedBackends(){if(Object.keys(this.registryFactory).length===0)throw new Error("No backend found in registry.");return Object.keys(this.registryFactory).sort((t,e)=>this.registryFactory[e].priority-this.registryFactory[t].priority)}initializeBackendsAndReturnBest(){const t=this.getSortedBackends();for(let e=0;e<t.length;e++){const s=t[e],{success:r,asyncInit:o}=this.initializeBackend(s);if(o||r)return{name:s,asyncInit:o}}throw new Error("Could not initialize any backends, all backend initializations failed.")}moveData(t,e){const s=this.state.tensorInfo.get(e),r=s.backend,o=this.readSync(e),i=r.refCount(e);r.disposeData(e,!0),s.backend=t,t.move(e,o,s.shape,s.dtype,i),this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack[this.state.numDataMovesStack.length-1]++}tidy(t,e){let s=null;if(e==null){if(typeof t!="function")throw new Error("Please provide a function to tidy()");e=t}else{if(typeof t!="string"&&!(t instanceof String))throw new Error("When calling with two arguments, the first argument to tidy() must be a string");if(typeof e!="function")throw new Error("When calling with two arguments, the 2nd argument to tidy() must be a function");s=t}let r;return this.scopedRun(()=>this.startScope(s),()=>this.endScope(r),()=>(r=e(),r instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),r))}scopedRun(t,e,s){t();try{const r=s();return e(),r}catch(r){throw e(),r}}nextTensorId(){return lo.nextTensorId++}nextVariableId(){return lo.nextVariableId++}clone(t){const e=F.runKernel(Gi,{x:t}),s={x:t},r=i=>({x:()=>{const a="float32",l={x:i},c={dtype:a};return F.runKernel(Ai,l,c)}}),o=[];return this.addTapeNode(this.state.activeScope.name,s,[e],r,o,{}),e}runKernel(t,e,s){if(this.backendName==null&&this.backend,!(pm(t,this.backendName)!=null))throw new Error(`Kernel '${t}' not registered for backend '${this.backendName}'`);return this.runKernelFunc({kernelName:t,inputs:e,attrs:s})}shouldCheckForMemLeaks(){return this.ENV.getBool("IS_TEST")}checkKernelForMemLeak(t,e,s){const r=this.backend.numDataIds();let o=0;s.forEach(l=>{o+=l.dtype==="complex64"?3:1});const i=this.state.numDataMovesStack[this.state.numDataMovesStack.length-1],a=r-e-o-i;if(a>0)throw new Error(`Backend '${this.backendName}' has an internal memory leak (${a} data ids) after running '${t}'`)}runKernelFunc(t){let e,s=[];const r=this.isTapeOn(),o=this.state.numBytes,i=this.state.numTensors;this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack.push(0);let a;this.backendName==null&&this.backend;let l;const c=Qu(t)?t.kernelName:this.state.activeScope!=null?this.state.activeScope.name:"";if(Qu(t)){const{kernelName:p,inputs:m,attrs:g}=t;this.backendName==null&&this.backend;const x=pm(p,this.backendName);S(x!=null,()=>`Cannot find registered kernel '${p}' for backend '${this.backendName}'`),a=()=>{const b=this.backend.numDataIds();l=x.kernelFunc({inputs:m,attrs:g,backend:this.backend});const w=Array.isArray(l)?l:[l];this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(p,b,w);const y=w.map(v=>v.rank!=null?v:this.makeTensorFromTensorInfo(v));if(r){const v=this.getTensorsForGradient(p,m,y);s=this.saveTensorsForBackwardMode(v)}return y}}else{const{forwardFunc:p}=t,m=g=>{r&&(s=g.map(x=>this.keep(this.clone(x))))};a=()=>{const g=this.backend.numDataIds();l=this.tidy(()=>p(this.backend,m));const x=Array.isArray(l)?l:[l];return this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(c,g,x),x}}const{inputs:u,attrs:h}=t,d=Qu(t)?null:t.backwardsFunc;let f;return this.scopedRun(()=>this.state.kernelDepth++,()=>this.state.kernelDepth--,()=>{!this.ENV.getBool("DEBUG")&&!this.state.profiling?e=a():(f=this.profiler.profileKernel(c,u,()=>a()),this.ENV.getBool("DEBUG")&&this.profiler.logKernelProfile(f),e=f.outputs)}),r&&this.addTapeNode(c,u,e,d,s,h),this.state.profiling&&this.state.activeProfile.kernels.push({name:c,bytesAdded:this.state.numBytes-o,totalBytesSnapshot:this.state.numBytes,tensorsAdded:this.state.numTensors-i,totalTensorsSnapshot:this.state.numTensors,inputShapes:Object.keys(u).map(p=>u[p]!=null?u[p].shape:null),outputShapes:e.map(p=>p.shape),kernelTimeMs:f.timeMs,extraInfo:f.extraInfo}),Array.isArray(l)?e:e[0]}saveTensorsForBackwardMode(t){return t.map(s=>this.keep(this.clone(s)))}getTensorsForGradient(t,e,s){const r=mm(t);if(r!=null){const o=r.inputsToSave||[],i=r.outputsToSave||[];let a;r.saveAllInputs?(S(Array.isArray(e),()=>"saveAllInputs is true, expected inputs to be an array."),a=Object.keys(e).map(c=>e[c])):a=o.map(c=>e[c]);const l=s.filter((c,u)=>i[u]);return a.concat(l)}return[]}makeTensor(t,e,s,r){if(t==null)throw new Error("Values passed to engine.makeTensor() are null");s=s||"float32",r=r||this.backend;let o=t;s==="string"&&$i(t[0])&&(o=t.map(l=>Ms(l)));const i=r.write(o,e,s),a=new le(e,s,i,this.nextTensorId());if(this.trackTensor(a,r),s==="string"){const l=this.state.tensorInfo.get(i),c=g$(o);this.state.numBytes+=c-l.bytes,l.bytes=c}return a}makeTensorFromDataId(t,e,s,r){s=s||"float32";const o={dataId:t,shape:e,dtype:s};return this.makeTensorFromTensorInfo(o,r)}makeTensorFromTensorInfo(t,e){const{dataId:s,shape:r,dtype:o}=t,i=new le(r,o,s,this.nextTensorId());return this.trackTensor(i,e),i}makeVariable(t,e=!0,s,r){s=s||this.nextVariableId().toString(),r!=null&&r!==t.dtype&&(t=t.cast(r));const o=new El(t,e,s,this.nextTensorId());if(this.state.registeredVariables[o.name]!=null)throw new Error(`Variable with name ${o.name} was already registered`);return this.state.registeredVariables[o.name]=o,this.incRef(o,this.backend),o}trackTensor(t,e){this.state.numTensors++,t.dtype==="string"&&this.state.numStringTensors++;let s=0;t.dtype!=="complex64"&&t.dtype!=="string"&&(s=t.size*kl(t.dtype)),this.state.numBytes+=s,this.state.tensorInfo.has(t.dataId)||(this.state.numDataBuffers++,this.state.tensorInfo.set(t.dataId,{backend:e||this.backend,dtype:t.dtype,shape:t.shape,bytes:s})),t instanceof El||this.track(t)}incRef(t,e){this.trackTensor(t,e),this.backend.incRef(t.dataId)}removeDataId(t,e){this.state.tensorInfo.has(t)&&this.state.tensorInfo.get(t).backend===e&&(this.state.tensorInfo.delete(t),this.state.numDataBuffers--)}disposeTensor(t){if(!this.state.tensorInfo.has(t.dataId))return;const e=this.state.tensorInfo.get(t.dataId);if(this.state.numTensors--,t.dtype==="string"&&(this.state.numStringTensors--,this.state.numBytes-=e.bytes),t.dtype!=="complex64"&&t.dtype!=="string"){const s=t.size*kl(t.dtype);this.state.numBytes-=s}e.backend.disposeData(t.dataId)&&this.removeDataId(t.dataId,e.backend)}disposeVariables(){for(const t in this.state.registeredVariables){const e=this.state.registeredVariables[t];this.disposeVariable(e)}}disposeVariable(t){this.disposeTensor(t),this.state.registeredVariables[t.name]!=null&&delete this.state.registeredVariables[t.name]}memory(){const t=this.backend.memory();return t.numTensors=this.state.numTensors,t.numDataBuffers=this.state.numDataBuffers,t.numBytes=this.state.numBytes,this.state.numStringTensors>0&&(t.unreliable=!0,t.reasons==null&&(t.reasons=[]),t.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)")),t}async profile(t){this.state.profiling=!0;const e=this.state.numBytes,s=this.state.numTensors;this.state.activeProfile.kernels=[],this.state.activeProfile.result=await t(),this.state.profiling=!1,this.state.activeProfile.peakBytes=Math.max(...this.state.activeProfile.kernels.map(r=>r.totalBytesSnapshot)),this.state.activeProfile.newBytes=this.state.numBytes-e,this.state.activeProfile.newTensors=this.state.numTensors-s;for(const r of this.state.activeProfile.kernels)r.kernelTimeMs=await r.kernelTimeMs,r.extraInfo=await r.extraInfo;return this.state.activeProfile}isTapeOn(){return this.state.gradientDepth>0&&this.state.kernelDepth===0}addTapeNode(t,e,s,r,o,i){const a={id:this.state.nextTapeNodeId++,kernelName:t,inputs:e,outputs:s,saved:o},l=mm(t);l!=null&&(r=l.gradFunc),r!=null&&(a.gradient=c=>(c=c.map((u,h)=>{if(u==null){const d=s[h],f=Se(d.size,d.dtype);return this.makeTensor(f,d.shape,d.dtype)}return u}),r(c.length>1?c:c[0],o,i))),this.state.activeTape.push(a)}keep(t){return t.kept=!0,t}startTape(){this.state.gradientDepth===0&&(this.state.activeTape=[]),this.state.gradientDepth++}endTape(){this.state.gradientDepth--}startScope(t){const e={track:[],name:"unnamed scope",id:this.state.nextScopeId++};t&&(e.name=t),this.state.scopeStack.push(e),this.state.activeScope=e}endScope(t){const e=h0(t),s=new Set(e.map(o=>o.id));for(let o=0;o<this.state.activeScope.track.length;o++){const i=this.state.activeScope.track[o];!i.kept&&!s.has(i.id)&&i.dispose()}const r=this.state.scopeStack.pop();this.state.activeScope=this.state.scopeStack.length===0?null:this.state.scopeStack[this.state.scopeStack.length-1],e.forEach(o=>{!o.kept&&o.scopeId===r.id&&this.track(o)})}gradients(t,e,s,r=!1){if(S(e.length>0,()=>"gradients() received an empty list of xs."),s!=null&&s.dtype!=="float32")throw new Error(`dy must have 'float32' dtype, but has '${s.dtype}'`);const o=this.scopedRun(()=>this.startTape(),()=>this.endTape(),()=>this.tidy("forward",t));S(o instanceof le,()=>"The result y returned by f() must be a tensor.");const i=G$(this.state.activeTape,e,o);if(!r&&i.length===0&&e.length>0)throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");return this.tidy("backward",()=>{const a={};a[o.id]=s??J$(o.shape),H$(a,i,c=>this.tidy(c),Q$);const l=e.map(c=>a[c.id]);return this.state.gradientDepth===0&&(this.state.activeTape.forEach(c=>{for(const u of c.saved)u.dispose()}),this.state.activeTape=null),{value:o,grads:l}})}customGrad(t){return S(Ch(t),()=>"The f passed in customGrad(f) must be a function."),(...e)=>{S(e.every(a=>a instanceof le),()=>"The args passed in customGrad(f)(x1, x2,...) must all be tensors");let s;const r={};e.forEach((a,l)=>{r[l]=a});const o=(a,l)=>(s=t(...e,l),S(s.value instanceof le,()=>"The function f passed in customGrad(f) must return an object where `obj.value` is a tensor"),S(Ch(s.gradFunc),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function."),s.value),i=(a,l)=>{const c=s.gradFunc(a,l),u=Array.isArray(c)?c:[c];S(u.length===e.length,()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...)."),S(u.every(d=>d instanceof le),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors.");const h={};return u.forEach((d,f)=>{h[f]=()=>d}),h};return this.runKernelFunc({forwardFunc:o,backwardsFunc:i,inputs:r})}}readSync(t){return this.state.tensorInfo.get(t).backend.readSync(t)}read(t){return this.state.tensorInfo.get(t).backend.read(t)}readToGPU(t,e){return this.state.tensorInfo.get(t).backend.readToGPU(t,e)}async time(t){const e=Be(),s=await this.backend.time(t);return s.wallMs=Be()-e,s}track(t){return this.state.activeScope!=null&&(t.scopeId=this.state.activeScope.id,this.state.activeScope.track.push(t)),t}get registeredVariables(){return this.state.registeredVariables}reset(){this.pendingBackendInitId++,this.state.dispose(),this.ENV.reset(),this.state=new vm;for(const t in this.registry)this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t];this.backendName=null,this.backendInstance=null,this.pendingBackendInit=null}}lo.nextTensorId=0;lo.nextVariableId=0;function J$(n){const t=bd(q(n),"float32");return F.makeTensor(t,n,"float32")}function f0(){const n=_x();if(n._tfengine==null){const t=new y$(n);n._tfengine=new lo(t)}return $$(n._tfengine.ENV),X$(()=>n._tfengine),n._tfengine}const F=f0();function Q$(n,t){const e={a:n,b:t};return F.runKernel(Io,e)}function tI(){return typeof navigator<"u"&&navigator!=null}function p0(n){if(n||tI()){if(n||(n=navigator),n.product==="ReactNative")return!0;const t=n.userAgent||n.vendor||(typeof window<"u"?window.opera:"");if(!t){const e=n;return e.userAgentData&&e.userAgentData.mobile}return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4))}return!1}function m0(){return typeof window<"u"&&window.document!=null||typeof WorkerGlobalScope<"u"}const Ge=W();Ge.registerFlag("DEBUG",()=>!1,n=>{n&&console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.")});Ge.registerFlag("IS_BROWSER",()=>m0());Ge.registerFlag("IS_NODE",()=>typeof process<"u"&&typeof process.versions<"u"&&typeof process.versions.node<"u");Ge.registerFlag("IS_CHROME",()=>typeof navigator<"u"&&navigator!=null&&navigator.userAgent!=null&&/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor));Ge.registerFlag("IS_SAFARI",()=>typeof navigator<"u"&&navigator!=null&&navigator.userAgent!=null&&/Safari/.test(navigator.userAgent)&&/Apple/.test(navigator.vendor));Ge.registerFlag("PROD",()=>!1);Ge.registerFlag("TENSORLIKE_CHECK_SHAPE_CONSISTENCY",()=>Ge.getBool("DEBUG"));Ge.registerFlag("DEPRECATION_WARNINGS_ENABLED",()=>!0);Ge.registerFlag("IS_TEST",()=>!1);Ge.registerFlag("CHECK_COMPUTATION_FOR_ERRORS",()=>Ge.getBool("DEBUG"));Ge.registerFlag("WRAP_TO_IMAGEBITMAP",()=>!1);Ge.registerFlag("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU",()=>!1);Ge.registerFlag("USE_SETTIMEOUTCUSTOM",()=>!1);function du(n,t){let e=n;if(xn(n))return t==="string"?[]:[n.length];if(c0(n)){const r=n.channels||"RGBA";return[n.height,n.width*r.length]}else if(u0(n))return[n.buffer.size/(t==null?4:kl(t))];if(!Array.isArray(n))return[];const s=[];for(;Array.isArray(e)||xn(e)&&t!=="string";)s.push(e.length),e=e[0];return Array.isArray(n)&&W().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY")&&g0(n,s,[]),s}function g0(n,t,e){if(e=e||[],!Array.isArray(n)&&!xn(n)){S(t.length===0,()=>`Element arr[${e.join("][")}] is a primitive, but should be an array/TypedArray of ${t[0]} elements`);return}S(t.length>0,()=>`Element arr[${e.join("][")}] should be a primitive, but is an array of ${n.length} elements`),S(n.length===t[0],()=>`Element arr[${e.join("][")}] should have ${t[0]} elements, but has ${n.length} elements`);const s=t.slice(1);for(let r=0;r<n.length;++r)g0(n[r],s,e.concat(r))}function Cm(n,t,e,s){if(n!=="string_or_numeric"){if(n==null)throw new Error("Expected dtype cannot be null.");if(n!=="numeric"&&n!==t||n==="numeric"&&t==="string")throw new Error(`Argument '${e}' passed to '${s}' must be ${n} tensor, but got ${t} tensor`)}}function E(n,t,e,s="numeric"){if(n instanceof H())return Cm(s,n.dtype,t,e),n;let r=Co(n);if(r!=="string"&&["bool","int32","float32"].indexOf(s)>=0&&(r=s),Cm(s,r,t,e),n==null||!xn(n)&&!Array.isArray(n)&&typeof n!="number"&&typeof n!="boolean"&&typeof n!="string"){const l=n==null?"null":n.constructor.name;throw new Error(`Argument '${t}' passed to '${e}' must be a Tensor or TensorLike, but got '${l}'`)}const o=du(n,r);!xn(n)&&!Array.isArray(n)&&(n=[n]);const a=r!=="string"?Fr(n,r):xr(n,[],!0);return F.makeTensor(a,o,r)}function x0(n,t,e,s="numeric"){if(!Array.isArray(n))throw new Error(`Argument ${t} passed to ${e} must be a \`Tensor[]\` or \`TensorLike[]\``);return n.map((o,i)=>E(o,`${t}[${i}]`,e,s))}const eI="__op";function P(n){const t=Object.keys(n);if(t.length!==1)throw new Error(`Please provide an object with a single key (operation name) mapping to a function. Got an object with ${t.length} keys.`);let e=t[0];const s=n[e];e.endsWith("_")&&(e=e.substring(0,e.length-1)),e=e+eI;const r=(...o)=>{F.startScope(e);try{const i=s(...o);return yd(i)&&console.error("Cannot return a Promise inside of tidy."),F.endScope(i),i}catch(i){throw F.endScope(null),i}};return Object.defineProperty(r,"name",{value:e,configurable:!0}),r}function nI(n,t){const e=E(n,"real","complex"),s=E(t,"imag","complex");xd(e.shape,s.shape,`real and imag shapes, ${e.shape} and ${s.shape}, must match in call to tf.complex().`);const r={real:e,imag:s};return F.runKernel(Td,r)}const br=P({complex_:nI});function fu(n,t,e,s){if(s==null)s=Co(n);else if(s==="complex64")throw new Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");if(u0(n)||c0(n)){if(s!=="float32"&&s!=="int32")throw new Error(`Creating tensor from GPU data only supports 'float32'|'int32' dtype, while the dtype is ${s}.`);return F.backend.createTensorFromGPUData(n,t||e,s)}if(!xn(n)&&!Array.isArray(n)&&typeof n!="number"&&typeof n!="boolean"&&typeof n!="string")throw new Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");if(t!=null){ks(t);const r=q(t),o=q(e);S(r===o,()=>`Based on the provided shape, [${t}], the tensor should have ${r} values but has ${o}`);for(let i=0;i<e.length;++i){const a=e[i],l=i===e.length-1?a!==q(t.slice(i)):!0;S(e[i]===t[i]||!l,()=>`Error creating a new Tensor. Inferred shape (${e}) does not match the provided shape (${t}). `)}}return!xn(n)&&!Array.isArray(n)&&(n=[n]),t=t||e,n=s!=="string"?Fr(n,s):xr(n,[],!0),F.makeTensor(n,t,s)}function no(n,t,e){const s=du(n,e);return fu(n,t,s,e)}const Rl={float32:4,float16:2,int32:4,uint16:2,uint8:1,bool:1,complex64:8};class js{static join(t){return new js(t).slice()}constructor(t){if(this.shards=[],this.previousShardIndex=0,t==null||(t instanceof Array||(t=[t]),t=t.map(s=>xn(s)?s.buffer:s),t.length===0))return;this.bufferUniformSize=t[0].byteLength;let e=0;for(let s=0;s<t.length;s++){const r=t[s];s!==t.length-1&&r.byteLength!==this.bufferUniformSize&&(this.bufferUniformSize=void 0);const o=e+r.byteLength;this.shards.push({buffer:r,start:e,end:o}),e=o}this.shards.length===0&&(this.byteLength=0),this.byteLength=this.shards[this.shards.length-1].end}slice(t=0,e=this.byteLength){if(this.shards.length===0)return new ArrayBuffer(0);if(t=isNaN(Number(t))?0:t,e=isNaN(Number(e))?0:e,t=Math.max(0,t),e=Math.min(this.byteLength,e),e<=t)return new ArrayBuffer(0);const s=this.findShardForByte(t);if(s===-1)throw new Error(`Could not find start shard for byte ${t}`);const r=e-t,o=new ArrayBuffer(r),i=new Uint8Array(o);let a=0;for(let l=s;l<this.shards.length;l++){const c=this.shards[l],h=t+a-c.start,d=a,p=Math.min(e,c.end)-c.start,m=new Uint8Array(c.buffer,h,p-h);if(i.set(m,d),a+=m.length,e<c.end)break}return o}findShardForByte(t){if(this.shards.length===0||t<0||t>=this.byteLength)return-1;if(this.bufferUniformSize!=null)return this.previousShardIndex=Math.floor(t/this.bufferUniformSize),this.previousShardIndex;function e(r){return t<r.start?-1:t>=r.end?1:0}if(e(this.shards[this.previousShardIndex])===0)return this.previousShardIndex;const s=sI(this.shards,e);return s===-1?-1:(this.previousShardIndex=s,this.previousShardIndex)}}function sI(n,t){let e=0,s=n.length;for(;e<=s;){const r=Math.floor((s-e)/2)+e,o=t(n[r]);if(o===0)return r;o<0?s=r:e=r+1}return-1}function jn(){return F}function $m(){return F.memory()}function B(n,t){return F.tidy(n,t)}function Ct(n){h0(n).forEach(e=>e.dispose())}function ns(n){return F.keep(n)}function b0(n,t,e=1){return F.registerBackend(n,t,e)}function rI(){return F.backend}const co=4;async function Im(n,t){const e=[],s=[],r=Array.isArray(n)?n.map(i=>i.name):Object.keys(n);for(let i=0;i<r.length;++i){const a=r[i],l=Array.isArray(n)?n[i].tensor:n[a];if(l.dtype!=="float32"&&l.dtype!=="int32"&&l.dtype!=="bool"&&l.dtype!=="string"&&l.dtype!=="complex64")throw new Error(`Unsupported dtype in weight '${a}': ${l.dtype}`);const c={name:a,shape:l.shape,dtype:l.dtype};if(l.dtype==="string"){const u=new Promise(async h=>{const d=await l.bytes(),f=d.reduce((g,x)=>g+x.length,0)+co*d.length,p=new Uint8Array(f);let m=0;for(let g=0;g<d.length;g++){const x=d[g],b=new Uint8Array(new Uint32Array([x.length]).buffer);p.set(b,m),m+=co,p.set(x,m),m+=x.length}h(p)});s.push(u)}else s.push(l.data());t!=null&&(c.group=t),e.push(c)}const o=await Promise.all(s);return{data:lI(o),specs:e}}function oI(n,t){const e=new js(n),s={};let r=0;for(const o of t){const i=iI(o,(a,l)=>e.slice(r+a,r+l));s[o.name]=aI(o,e.slice(r,r+i)),r+=i}return s}function iI(n,t){const e=q(n.shape);let s;if("quantization"in n){const r=n.quantization;s=Rl[r.dtype]}else if(n.dtype==="string"){let r=0;for(let o=0;o<e;o++)r+=co+new Uint32Array(t(r,r+co))[0];return r}else s=Rl[n.dtype];return e*s}function aI(n,t){const e=n.name,s=n.dtype,r=n.shape,o=q(r);let i,a=0;if("quantization"in n){const l=n.quantization;if(l.dtype==="uint8"||l.dtype==="uint16"){if(!("min"in l&&"scale"in l))throw new Error(`Weight ${n.name} with quantization ${l.dtype} doesn't have corresponding metadata min and scale.`)}else if(l.dtype==="float16"){if(s!=="float32")throw new Error(`Weight ${n.name} is quantized with ${l.dtype} which only supports weights of type float32 not ${s}.`)}else throw new Error(`Weight ${n.name} has unknown quantization dtype ${l.dtype}. Supported quantization dtypes are: 'uint8', 'uint16', and 'float16'.`);const c=Rl[l.dtype],u=l.dtype==="uint8"?new Uint8Array(t):new Uint16Array(t);if(s==="float32")if(l.dtype==="uint8"||l.dtype==="uint16"){i=new Float32Array(u.length);for(let h=0;h<u.length;h++){const d=u[h];i[h]=d*l.scale+l.min}}else if(l.dtype==="float16")i=bI()(u);else throw new Error(`Unsupported quantization type ${l.dtype} for weight type float32.`);else if(s==="int32"){if(l.dtype!=="uint8"&&l.dtype!=="uint16")throw new Error(`Unsupported quantization type ${l.dtype} for weight type int32.`);i=new Int32Array(u.length);for(let h=0;h<u.length;h++){const d=u[h];i[h]=Math.round(d*l.scale+l.min)}}else throw new Error(`Unsupported dtype in weight '${e}': ${s}`);a+=o*c}else if(s==="string"){const l=q(n.shape);i=[];for(let c=0;c<l;c++){const u=new Uint32Array(t.slice(a,a+co))[0];a+=co;const h=new Uint8Array(t.slice(a,a+u));i.push(h),a+=u}}else{const l=Rl[s];if(s==="float32")i=new Float32Array(t);else if(s==="int32")i=new Int32Array(t);else if(s==="bool")i=new Uint8Array(t);else if(s==="complex64"){i=new Float32Array(t);const c=new Float32Array(i.length/2),u=new Float32Array(i.length/2);for(let p=0;p<c.length;p++)c[p]=i[p*2],u[p]=i[p*2+1];const h=no(c,r,"float32"),d=no(u,r,"float32"),f=br(h,d);return h.dispose(),d.dispose(),f}else throw new Error(`Unsupported dtype in weight '${e}': ${s}`);a+=o*l}return no(i,r,s)}function lI(n){if(n===null)throw new Error(`Invalid input value: ${JSON.stringify(n)}`);let t=0;const e=[];n.forEach(o=>{if(t+=o.byteLength,e.push(o.byteLength===o.buffer.byteLength?o:new o.constructor(o)),!(o instanceof Float32Array||o instanceof Int32Array||o instanceof Uint8Array))throw new Error(`Unsupported TypedArray subtype: ${o.constructor.name}`)});const s=new Uint8Array(t);let r=0;return e.forEach(o=>{s.set(new Uint8Array(o.buffer),r),r+=o.byteLength}),s.buffer}const uf=typeof Buffer<"u"&&(typeof Blob>"u"||typeof atob>"u"||typeof btoa>"u");function km(n){return uf?Buffer.byteLength(n,"utf8"):new Blob([n]).size}function cI(n){if(uf)return Buffer.from(n).toString("base64");const t=new Uint8Array(n);let e="";for(let s=0,r=t.length;s<r;s++)e+=String.fromCharCode(t[s]);return btoa(e)}function uI(n){if(uf){const s=Buffer.from(n,"base64");return s.buffer.slice(s.byteOffset,s.byteOffset+s.byteLength)}const t=atob(n),e=new Uint8Array(t.length);for(let s=0;s<t.length;++s)e.set([t.charCodeAt(s)],s);return e.buffer}function hI(n){return js.join(n)}function dI(n,t){const e={modelTopology:n.modelTopology,format:n.format,generatedBy:n.generatedBy,convertedBy:n.convertedBy,weightsManifest:t};return n.signature!=null&&(e.signature=n.signature),n.userDefinedMetadata!=null&&(e.userDefinedMetadata=n.userDefinedMetadata),n.modelInitializer!=null&&(e.modelInitializer=n.modelInitializer),n.initializerSignature!=null&&(e.initializerSignature=n.initializerSignature),n.trainingConfig!=null&&(e.trainingConfig=n.trainingConfig),e}function fI(n,t,e){const s={modelTopology:n.modelTopology,format:n.format,generatedBy:n.generatedBy,convertedBy:n.convertedBy};if(n.trainingConfig!=null&&(s.trainingConfig=n.trainingConfig),n.weightsManifest!=null){if(!t)throw new Error("modelJSON has weightsManifest but weightSpecs is null");if(!e)throw new Error("modelJSON has weightsManifest but weightData is null");s.weightSpecs=t,s.weightData=e}return n.signature!=null&&(s.signature=n.signature),n.userDefinedMetadata!=null&&(s.userDefinedMetadata=n.userDefinedMetadata),n.modelInitializer!=null&&(s.modelInitializer=n.modelInitializer),n.initializerSignature!=null&&(s.initializerSignature=n.initializerSignature),s}async function pI(n,t){let e,s;return n.weightsManifest!=null&&([e,s]=await t(n.weightsManifest)),fI(n,e,s)}function hf(n){if(n.modelTopology instanceof ArrayBuffer)throw new Error("Expected JSON model topology, received ArrayBuffer.");return{dateSaved:new Date,modelTopologyType:"JSON",modelTopologyBytes:n.modelTopology==null?0:km(JSON.stringify(n.modelTopology)),weightSpecsBytes:n.weightSpecs==null?0:km(JSON.stringify(n.weightSpecs)),weightDataBytes:n.weightData==null?0:new js(n.weightData).byteLength}}function Sm(n){const t=[];for(const e of n)t.push(...e.weights);return t}function mI(){const n=e=>{let s=e<<13,r=0;for(;(s&8388608)===0;)r-=8388608,s<<=1;return s&=-8388609,r+=947912704,s|r},t=new Uint32Array(2048);t[0]=0;for(let e=1;e<1024;e++)t[e]=n(e);for(let e=1024;e<2048;e++)t[e]=939524096+(e-1024<<13);return t}function gI(){const n=new Uint32Array(64);n[0]=0,n[31]=1199570944,n[32]=2147483648,n[63]=3347054592;for(let t=1;t<31;t++)n[t]=t<<23;for(let t=33;t<63;t++)n[t]=2147483648+(t-32<<23);return n}function xI(){const n=new Uint32Array(64);for(let t=0;t<64;t++)n[t]=1024;return n[0]=n[32]=0,n}function bI(){const n=mI(),t=gI(),e=xI();return s=>{const r=new ArrayBuffer(4*s.length),o=new Uint32Array(r);for(let i=0;i<s.length;i++){const a=s[i],l=n[e[a>>10]+(a&1023)]+t[a>>10];o[i]=l}return new Float32Array(r)}}class me{constructor(){this.saveRouters=[],this.loadRouters=[]}static getInstance(){return me.instance==null&&(me.instance=new me),me.instance}static registerSaveRouter(t){me.getInstance().saveRouters.push(t)}static registerLoadRouter(t){me.getInstance().loadRouters.push(t)}static getSaveHandlers(t){return me.getHandlers(t,"save")}static getLoadHandlers(t,e){return me.getHandlers(t,"load",e)}static getHandlers(t,e,s){const r=[];return(e==="load"?me.getInstance().loadRouters:me.getInstance().saveRouters).forEach(i=>{const a=i(t,s);a!==null&&r.push(a)}),r}}const yI=n=>me.getSaveHandlers(n),wI=(n,t)=>me.getLoadHandlers(n,t);const Dh="tensorflowjs",_h=1,lr="models_store",Ds="model_info_store";function y0(){if(!W().getBool("IS_BROWSER"))throw new Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");const n=typeof window>"u"?self:window,t=n.indexedDB||n.mozIndexedDB||n.webkitIndexedDB||n.msIndexedDB||n.shimIndexedDB;if(t==null)throw new Error("The current browser does not appear to support IndexedDB.");return t}function Fh(n){const t=n.result;t.createObjectStore(lr,{keyPath:"modelPath"}),t.createObjectStore(Ds,{keyPath:"modelPath"})}class yr{constructor(t){if(this.indexedDB=y0(),t==null||!t)throw new Error("For IndexedDB, modelPath must not be null, undefined or empty.");this.modelPath=t}async save(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");return this.databaseAction(this.modelPath,t)}async load(){return this.databaseAction(this.modelPath)}databaseAction(t,e){return new Promise((s,r)=>{const o=this.indexedDB.open(Dh,_h);o.onupgradeneeded=()=>Fh(o),o.onsuccess=()=>{const i=o.result;if(e==null){const a=i.transaction(lr,"readonly"),c=a.objectStore(lr).get(this.modelPath);c.onsuccess=()=>{if(c.result==null)return i.close(),r(new Error(`Cannot find model with path '${this.modelPath}' in IndexedDB.`));s(c.result.modelArtifacts)},c.onerror=u=>(i.close(),r(c.error)),a.oncomplete=()=>i.close()}else{e.weightData=js.join(e.weightData);const a=hf(e),l=i.transaction(Ds,"readwrite");let c=l.objectStore(Ds),u;try{u=c.put({modelPath:this.modelPath,modelArtifactsInfo:a})}catch(d){return r(d)}let h;u.onsuccess=()=>{h=i.transaction(lr,"readwrite");const d=h.objectStore(lr);let f;try{f=d.put({modelPath:this.modelPath,modelArtifacts:e,modelArtifactsInfo:a})}catch(p){return r(p)}f.onsuccess=()=>s({modelArtifactsInfo:a}),f.onerror=p=>{c=l.objectStore(Ds);const m=c.delete(this.modelPath);m.onsuccess=()=>(i.close(),r(f.error)),m.onerror=g=>(i.close(),r(f.error))}},u.onerror=d=>(i.close(),r(u.error)),l.oncomplete=()=>{h==null?i.close():h.oncomplete=()=>i.close()}}},o.onerror=i=>r(o.error)})}}yr.URL_SCHEME="indexeddb://";const w0=n=>W().getBool("IS_BROWSER")&&!Array.isArray(n)&&n.startsWith(yr.URL_SCHEME)?vI(n.slice(yr.URL_SCHEME.length)):null;me.registerSaveRouter(w0);me.registerLoadRouter(w0);function vI(n){return new yr(n)}function CI(n){return n.startsWith(yr.URL_SCHEME)?n.slice(yr.URL_SCHEME.length):n}class $I{constructor(){this.indexedDB=y0()}async listModels(){return new Promise((t,e)=>{const s=this.indexedDB.open(Dh,_h);s.onupgradeneeded=()=>Fh(s),s.onsuccess=()=>{const r=s.result,o=r.transaction(Ds,"readonly"),a=o.objectStore(Ds).getAll();a.onsuccess=()=>{const l={};for(const c of a.result)l[c.modelPath]=c.modelArtifactsInfo;t(l)},a.onerror=l=>(r.close(),e(a.error)),o.oncomplete=()=>r.close()},s.onerror=r=>e(s.error)})}async removeModel(t){return t=CI(t),new Promise((e,s)=>{const r=this.indexedDB.open(Dh,_h);r.onupgradeneeded=()=>Fh(r),r.onsuccess=()=>{const o=r.result,i=o.transaction(Ds,"readwrite"),a=i.objectStore(Ds),l=a.get(t);let c;l.onsuccess=()=>{if(l.result==null)return o.close(),s(new Error(`Cannot find model with path '${t}' in IndexedDB.`));{const u=a.delete(t),h=()=>{c=o.transaction(lr,"readwrite");const f=c.objectStore(lr).delete(t);f.onsuccess=()=>e(l.result.modelArtifactsInfo),f.onerror=p=>s(l.error)};u.onsuccess=h,u.onerror=d=>(h(),o.close(),s(l.error))}},l.onerror=u=>(o.close(),s(l.error)),i.oncomplete=()=>{c==null?o.close():c.oncomplete=()=>o.close()}},r.onerror=o=>s(r.error)})}}const bs="/",Zr="tensorflowjs_models",v0="info",II="model_topology",kI="weight_specs",SI="weight_data",NI="model_metadata";function C0(n){return{info:[Zr,n,v0].join(bs),topology:[Zr,n,II].join(bs),weightSpecs:[Zr,n,kI].join(bs),weightData:[Zr,n,SI].join(bs),modelMetadata:[Zr,n,NI].join(bs)}}function $0(n){for(const t of Object.values(n))window.localStorage.removeItem(t)}function TI(n){const t=n.split(bs);if(t.length<3)throw new Error(`Invalid key format: ${n}`);return t.slice(1,t.length-1).join(bs)}function EI(n){return n.startsWith(wr.URL_SCHEME)?n.slice(wr.URL_SCHEME.length):n}class wr{constructor(t){if(!W().getBool("IS_BROWSER")||typeof window>"u"||typeof window.localStorage>"u")throw new Error("The current environment does not support local storage.");if(this.LS=window.localStorage,t==null||!t)throw new Error("For local storage, modelPath must not be null, undefined or empty.");this.modelPath=t,this.keys=C0(this.modelPath)}async save(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");{const e=JSON.stringify(t.modelTopology),s=JSON.stringify(t.weightSpecs),r=hf(t),o=js.join(t.weightData);try{this.LS.setItem(this.keys.info,JSON.stringify(r)),this.LS.setItem(this.keys.topology,e),this.LS.setItem(this.keys.weightSpecs,s),this.LS.setItem(this.keys.weightData,cI(o));const i={format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,signature:t.signature!=null?t.signature:void 0,userDefinedMetadata:t.userDefinedMetadata!=null?t.userDefinedMetadata:void 0,modelInitializer:t.modelInitializer!=null?t.modelInitializer:void 0,initializerSignature:t.initializerSignature!=null?t.initializerSignature:void 0,trainingConfig:t.trainingConfig!=null?t.trainingConfig:void 0};return this.LS.setItem(this.keys.modelMetadata,JSON.stringify(i)),{modelArtifactsInfo:r}}catch{throw $0(this.keys),new Error(`Failed to save model '${this.modelPath}' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes=${r.modelTopologyBytes}, weightSpecsBytes=${r.weightSpecsBytes}, weightDataBytes=${r.weightDataBytes}.`)}}}async load(){const t=JSON.parse(this.LS.getItem(this.keys.info));if(t==null)throw new Error(`In local storage, there is no model with name '${this.modelPath}'`);if(t.modelTopologyType!=="JSON")throw new Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");const e={},s=JSON.parse(this.LS.getItem(this.keys.topology));if(s==null)throw new Error(`In local storage, the topology of model '${this.modelPath}' is missing.`);e.modelTopology=s;const r=JSON.parse(this.LS.getItem(this.keys.weightSpecs));if(r==null)throw new Error(`In local storage, the weight specs of model '${this.modelPath}' are missing.`);e.weightSpecs=r;const o=this.LS.getItem(this.keys.modelMetadata);if(o!=null){const a=JSON.parse(o);e.format=a.format,e.generatedBy=a.generatedBy,e.convertedBy=a.convertedBy,a.signature!=null&&(e.signature=a.signature),a.userDefinedMetadata!=null&&(e.userDefinedMetadata=a.userDefinedMetadata),a.modelInitializer!=null&&(e.modelInitializer=a.modelInitializer),a.initializerSignature!=null&&(e.initializerSignature=a.initializerSignature),a.trainingConfig!=null&&(e.trainingConfig=a.trainingConfig)}const i=this.LS.getItem(this.keys.weightData);if(i==null)throw new Error(`In local storage, the binary weight values of model '${this.modelPath}' are missing.`);return e.weightData=uI(i),e}}wr.URL_SCHEME="localstorage://";const I0=n=>W().getBool("IS_BROWSER")&&!Array.isArray(n)&&n.startsWith(wr.URL_SCHEME)?RI(n.slice(wr.URL_SCHEME.length)):null;me.registerSaveRouter(I0);me.registerLoadRouter(I0);function RI(n){return new wr(n)}class AI{constructor(){S(W().getBool("IS_BROWSER"),()=>"Current environment is not a web browser"),S(typeof window>"u"||typeof window.localStorage<"u",()=>"Current browser does not appear to support localStorage"),this.LS=window.localStorage}async listModels(){const t={},e=Zr+bs,s=bs+v0;for(let r=0;r<this.LS.length;++r){const o=this.LS.key(r);if(o.startsWith(e)&&o.endsWith(s)){const i=TI(o);t[i]=JSON.parse(this.LS.getItem(o))}}return t}async removeModel(t){t=EI(t);const e=C0(t);if(this.LS.getItem(e.info)==null)throw new Error(`Cannot find model at path '${t}'`);const s=JSON.parse(this.LS.getItem(e.info));return $0(e),s}}const Nm="://";class Xn{constructor(){this.managers={}}static getInstance(){return Xn.instance==null&&(Xn.instance=new Xn),Xn.instance}static registerManager(t,e){S(t!=null,()=>"scheme must not be undefined or null."),t.endsWith(Nm)&&(t=t.slice(0,t.indexOf(Nm))),S(t.length>0,()=>"scheme must not be an empty string.");const s=Xn.getInstance();S(s.managers[t]==null,()=>`A model store manager is already registered for scheme '${t}'.`),s.managers[t]=e}static getManager(t){const e=Xn.getInstance().managers[t];if(e==null)throw new Error(`Cannot find model manager for scheme '${t}'`);return e}static getSchemes(){return Object.keys(Xn.getInstance().managers)}}class DI{constructor(){this.messageName="setTimeoutCustom",this.functionRefs=[],this.handledMessageCount=0,this.hasEventListener=!1}fetch(t,e){return fetch(t,e)}now(){return performance.now()}encode(t,e){if(e!=="utf-8"&&e!=="utf8")throw new Error(`Browser's encoder only supports utf-8, but got ${e}`);return this.textEncoder==null&&(this.textEncoder=new TextEncoder),this.textEncoder.encode(t)}decode(t,e){return new TextDecoder(e).decode(t)}setTimeoutCustom(t,e){if(typeof window>"u"||!W().getBool("USE_SETTIMEOUTCUSTOM")){setTimeout(t,e);return}this.functionRefs.push(t),setTimeout(()=>{window.postMessage({name:this.messageName,index:this.functionRefs.length-1},"*")},e),this.hasEventListener||(this.hasEventListener=!0,window.addEventListener("message",s=>{if(s.source===window&&s.data.name===this.messageName){s.stopPropagation();const r=this.functionRefs[s.data.index];r(),this.handledMessageCount++,this.handledMessageCount===this.functionRefs.length&&(this.functionRefs=[],this.handledMessageCount=0)}},!0))}isTypedArray(t){return s0(t)}}if(W().get("IS_BROWSER")){W().setPlatform("browser",new DI);try{Xn.registerManager(wr.URL_SCHEME,new AI)}catch{}try{Xn.registerManager(yr.URL_SCHEME,new $I)}catch{}}const _I={importFetch:()=>require("node-fetch")};let th;class FI{constructor(){this.util=require("util"),this.textEncoder=new this.util.TextEncoder}fetch(t,e){return W().global.fetch!=null?W().global.fetch(t,e):(th==null&&(th=_I.importFetch()),th(t,e))}now(){const t=process.hrtime();return t[0]*1e3+t[1]/1e6}encode(t,e){if(e!=="utf-8"&&e!=="utf8")throw new Error(`Node built-in encoder only supports utf-8, but got ${e}`);return this.textEncoder.encode(t)}decode(t,e){return t.length===0?"":new this.util.TextDecoder(e).decode(t)}isTypedArray(t){return this.util.types.isFloat32Array(t)||this.util.types.isInt32Array(t)||this.util.types.isUint8Array(t)||this.util.types.isUint8ClampedArray(t)}}W().get("IS_NODE")&&!W().get("IS_BROWSER")&&W().setPlatform("node",new FI);function $t(n,t="float32",e){return t=t||"float32",ks(n),new ve(n,t,e)}function OI(n,t){const e=E(n,"x","cast");if(!m$(t))throw new Error(`Failed to cast to unknown dtype ${t}`);if(t==="string"&&e.dtype!=="string"||t!=="string"&&e.dtype==="string")throw new Error("Only strings can be casted to strings");const s={x:e},r={dtype:t};return F.runKernel(Ai,s,r)}const rt=P({cast_:OI});function MI(n){const e={x:E(n,"x","clone","string_or_numeric")};return F.runKernel(Gi,e)}const dr=P({clone_:MI});function LI(n,t=!1){console.log(n.toString(t))}f0();const PI={buffer:$t,cast:rt,clone:dr,print:LI};K$(PI);function zI(n,t){let e=E(n,"a","add"),s=E(t,"b","add");[e,s]=ee(e,s);const r={a:e,b:s};return F.runKernel(Io,r)}const J=P({add_:zI});function BI(n,t){let e=E(n,"a","floorDiv"),s=E(t,"b","floorDiv");[e,s]=ee(e,s);const r={a:e,b:s};return F.runKernel(Wi,r)}const k0=P({floorDiv_:BI});function VI(n,t){let e=E(n,"a","div"),s=E(t,"b","div");if([e,s]=ee(e,s),e.dtype==="int32"&&s.dtype==="int32")return k0(e,s);const r={a:e,b:s},o={};return F.runKernel(Mi,r,o)}const ft=P({div_:VI});function WI(n,t){let e=E(n,"a","mul"),s=E(t,"b","mul");[e,s]=ee(e,s);const r={a:e,b:s};return F.runKernel(Qi,r)}const _=P({mul_:WI});function UI(n){const t=E(n,"x","abs");if(t.dtype==="complex64"){const e={x:t};return F.runKernel(bc,e)}else{const e={x:t};return F.runKernel(hc,e)}}const De=P({abs_:UI});function GI(n){const e={x:E(n,"x","acos")};return F.runKernel(Ii,e)}const HI=P({acos_:GI});function qI(n){const e={x:E(n,"x","acosh")};return F.runKernel(ki,e)}const jI=P({acosh_:qI});function XI(n,t=null,e=!1){const r={x:E(n,"x","all","bool")},o={axis:t,keepDims:e};return F.runKernel(Cd,r,o)}const S0=P({all_:XI});function KI(n,t=null,e=!1){const r={x:E(n,"x","any","bool")},o={axis:t,keepDims:e};return F.runKernel($d,r,o)}const Oh=P({any_:KI});function YI(n,t=0){const s={x:E(n,"x","argMax")},r={axis:t};return F.runKernel(dc,s,r)}const ai=P({argMax_:YI});function ZI(n,t=0){const s={x:E(n,"x","argMin")},r={axis:t};return F.runKernel(fc,s,r)}const JI=P({argMin_:ZI});function QI(n){const e={x:E(n,"x","asin")};return F.runKernel(Si,e)}const tk=P({asin_:QI});function ek(n){const e={x:E(n,"x","asinh")};return F.runKernel(Ni,e)}const nk=P({asinh_:ek});function sk(n){const e={x:E(n,"x","atan")};return F.runKernel(Ti,e)}const rk=P({atan_:sk});function ok(n,t){let e=E(n,"a","atan2"),s=E(t,"b","atan2");[e,s]=ee(e,s);const r={a:e,b:s};return F.runKernel(Ri,r)}const ik=P({atan2_:ok});function ak(n){const e={x:E(n,"x","atanh")};return F.runKernel(Ei,e)}const lk=P({atanh_:ak});function ya(n,t,e,s,r="NHWC",o){const i=n[3],a=[...t,i],l=Ns(r);return Ce(n,a,e,o,s,null,null,l)}function yn(n,t,e,s,r,o,i="channelsLast"){const[a,l]=li(t);let c;if(i==="channelsLast")c=[a,l,n[3],n[3]];else if(i==="channelsFirst")c=[a,l,n[1],n[1]];else throw new Error(`Unknown dataFormat ${i}`);return Ce(n,c,e,s,r,o,!1,i)}function Ss(n,t,e,s,r,o,i="NDHWC"){const[a,l,c]=Mh(t);let u,h;if(i==="NDHWC")h="channelsLast",u=[a,l,c,n[4],n[4]];else if(i==="NCDHW")h="channelsFirst",u=[a,l,c,n[1],n[1]];else throw new Error(`Unknown dataFormat ${i}`);return Xs(n,u,e,s,r,!1,h,o)}function Ce(n,t,e,s,r,o,i=!1,a="channelsLast"){let[l,c,u,h]=[-1,-1,-1,-1];if(a==="channelsLast")[l,c,u,h]=n;else if(a==="channelsFirst")[l,h,c,u]=n;else throw new Error(`Unknown dataFormat ${a}`);const[d,f,,p]=t,[m,g]=li(e),[x,b]=li(s),w=so(d,x),y=so(f,b),{padInfo:v,outHeight:$,outWidth:N}=hk(r,c,u,m,g,w,y,o,a),T=i?p*h:p;let I;return a==="channelsFirst"?I=[l,T,$,N]:a==="channelsLast"&&(I=[l,$,N,T]),{batchSize:l,dataFormat:a,inHeight:c,inWidth:u,inChannels:h,outHeight:$,outWidth:N,outChannels:T,padInfo:v,strideHeight:m,strideWidth:g,filterHeight:d,filterWidth:f,effectiveFilterHeight:w,effectiveFilterWidth:y,dilationHeight:x,dilationWidth:b,inShape:n,outShape:I,filterShape:t}}function Xs(n,t,e,s,r,o=!1,i="channelsLast",a){let[l,c,u,h,d]=[-1,-1,-1,-1,-1];if(i==="channelsLast")[l,c,u,h,d]=n;else if(i==="channelsFirst")[l,d,c,u,h]=n;else throw new Error(`Unknown dataFormat ${i}`);const[f,p,m,,g]=t,[x,b,w]=Mh(e),[y,v,$]=Mh(s),N=so(f,y),T=so(p,v),I=so(m,$),{padInfo:k,outDepth:C,outHeight:R,outWidth:D}=dk(r,c,u,h,x,b,w,N,T,I,a),M=o?g*d:g;let O;return i==="channelsFirst"?O=[l,M,C,R,D]:i==="channelsLast"&&(O=[l,C,R,D,M]),{batchSize:l,dataFormat:i,inDepth:c,inHeight:u,inWidth:h,inChannels:d,outDepth:C,outHeight:R,outWidth:D,outChannels:M,padInfo:k,strideDepth:x,strideHeight:b,strideWidth:w,filterDepth:f,filterHeight:p,filterWidth:m,effectiveFilterDepth:N,effectiveFilterHeight:T,effectiveFilterWidth:I,dilationDepth:y,dilationHeight:v,dilationWidth:$,inShape:n,outShape:O,filterShape:t}}function ck(n,t,e,s,r){s==null&&(s=df(n,t,e));const o=n[0],i=n[1],a=ci((o-t+2*s)/e+1,r),l=ci((i-t+2*s)/e+1,r);return[a,l]}function uk(n,t,e,s,r,o){r==null&&(r=df(n,t[0],s[0]));const i=[0,0,0,e];for(let a=0;a<3;a++)n[a]+2*r>=t[a]&&(i[a]=ci((n[a]-t[a]+2*r)/s[a]+1,o));return i}function df(n,t,e,s=1){const r=so(t,s);return Math.floor((n[0]*(e-1)-e+r)/2)}function li(n){return typeof n=="number"?[n,n,n]:n.length===2?[n[0],n[1],1]:n}function Mh(n){return typeof n=="number"?[n,n,n]:n}function so(n,t){return t<=1?n:n+(n-1)*(t-1)}function hk(n,t,e,s,r,o,i,a,l){let c,u,h;if(typeof n=="number"){c={top:n,bottom:n,left:n,right:n,type:n===0?"VALID":"NUMBER"};const f=ck([t,e],o,s,n,a);u=f[0],h=f[1]}else if(n==="same"){u=Math.ceil(t/s),h=Math.ceil(e/r);const d=Math.max(0,(u-1)*s+o-t),f=Math.max(0,(h-1)*r+i-e),p=Math.floor(d/2),m=d-p,g=Math.floor(f/2),x=f-g;c={top:p,bottom:m,left:g,right:x,type:"SAME"}}else if(n==="valid")c={top:0,bottom:0,left:0,right:0,type:"VALID"},u=Math.ceil((t-o+1)/s),h=Math.ceil((e-i+1)/r);else if(typeof n=="object"){const d=l==="channelsLast"?n[1][0]:n[2][0],f=l==="channelsLast"?n[1][1]:n[2][1],p=l==="channelsLast"?n[2][0]:n[3][0],m=l==="channelsLast"?n[2][1]:n[3][1];c={top:d,bottom:f,left:p,right:m,type:d===0&&f===0&&p===0&&m===0?"VALID":"EXPLICIT"},u=ci((t-o+d+f)/s+1,a),h=ci((e-i+p+m)/r+1,a)}else throw Error(`Unknown padding parameter: ${n}`);return{padInfo:c,outHeight:u,outWidth:h}}function dk(n,t,e,s,r,o,i,a,l,c,u){let h,d,f,p;if(n==="valid"&&(n=0),typeof n=="number"){h={top:n,bottom:n,left:n,right:n,front:n,back:n,type:n===0?"VALID":"NUMBER"};const g=uk([t,e,s,1],[a,l,c],1,[r,o,i],n,u);d=g[0],f=g[1],p=g[2]}else if(n==="same"){d=Math.ceil(t/r),f=Math.ceil(e/o),p=Math.ceil(s/i);const m=(d-1)*r+a-t,g=(f-1)*o+l-e,x=(p-1)*i+c-s,b=Math.floor(m/2),w=m-b,y=Math.floor(g/2),v=g-y,$=Math.floor(x/2),N=x-$;h={top:y,bottom:v,left:$,right:N,front:b,back:w,type:"SAME"}}else throw Error(`Unknown padding parameter: ${n}`);return{padInfo:h,outDepth:d,outHeight:f,outWidth:p}}function ci(n,t){if(!t)return Math.trunc(n);switch(t){case"round":return Math.round(n);case"ceil":return Math.ceil(n);case"floor":return Math.floor(n);default:throw new Error(`Unknown roundingMode ${t}`)}}function vr(n){const[t,e,s]=li(n);return t===1&&e===1&&s===1}function Te(n,t){return vr(n)||vr(t)}function Cr(n){return li(n).every(t=>t>0)}function Ns(n){if(n==="NHWC")return"channelsLast";if(n==="NCHW")return"channelsFirst";throw new Error(`Unknown dataFormat ${n}`)}function qe(n,t,e){if(e!=null){if(typeof t=="string")throw Error(`Error in ${n}: pad must be an integer when using dimRoundingMode ${e} but got pad ${t}.`);if(typeof t=="number")S(ao(t),()=>`Error in ${n}: pad must be an integer when using dimRoundingMode ${e} but got pad ${t}.`);else if(typeof t=="object")t.forEach(s=>{s.forEach(r=>{S(ao(r),()=>`Error in ${n}: pad must be an integer when using dimRoundingMode ${e} but got pad ${r}.`)})});else throw Error(`Error in ${n}: Unknown padding parameter: ${t}`)}}function fk(n,t){const s={x:E(n,"x","reshape","string_or_numeric")},r={shape:t};return F.runKernel(Jc,s,r)}const L=P({reshape_:fk});function pk(n,t,e,s,r){const o=E(n,"x","avgPool","float32"),i=1;S(Te(e,i),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${e} and dilations '${i}'`);let a=o,l=!1;o.rank===3&&(l=!0,a=L(o,[1,o.shape[0],o.shape[1],o.shape[2]])),S(a.rank===4,()=>`Error in avgPool: x must be rank 4 but got rank ${a.rank}.`),qe("avgPool",s,r);const c={x:a},u={filterSize:t,strides:e,pad:s,dimRoundingMode:r};let h=F.runKernel(pc,c,u);return h=rt(h,o.dtype),l?L(h,[h.shape[1],h.shape[2],h.shape[3]]):h}const ff=P({avgPool_:pk});function mk(n,t,e,s,r,o="NDHWC"){const i=E(n,"x","avgPool3d","float32");let a=i,l=!1;i.rank===4&&(l=!0,a=L(i,[1,i.shape[0],i.shape[1],i.shape[2],i.shape[3]])),S(a.rank===5,()=>`Error in avgPool3d: x must be rank 5 but got rank ${a.rank}.`),S(o==="NDHWC",()=>`Error in avgPool3d: Only NDHWC is currently supported, but got dataFormat of ${o}`),S(typeof e=="number"&&e>0||Array.isArray(e)&&e[0]>0&&e[1]>0&&e[2]>0,()=>`Error in avgPool3d: Stride must be > 0, but got '${e}'`),qe("avgPool3d",s,r);const c={x:a},u={filterSize:t,strides:e,pad:s,dimRoundingMode:r,dataFormat:o};let h=F.runKernel(mc,c,u);return h=rt(h,a.dtype),l?L(h,[h.shape[1],h.shape[2],h.shape[3],h.shape[4]]):h}const gk=P({avgPool3d_:mk});function xk(n,t=0){S(n.length>=1,()=>"Pass at least one tensor to concat");const e=x0(n,"tensors","concat","string_or_numeric");if(e[0].dtype==="complex64"&&e.forEach(o=>{if(o.dtype!=="complex64")throw new Error(`Cannot concatenate complex64 tensors with a tensor
          with dtype ${o.dtype}. `)}),e.length===1)return dr(e[0]);const s=e,r={axis:t};return F.runKernel(yc,s,r)}const Ue=P({concat_:xk});function bk(n,t,e=!1,s=!1){let r=E(n,"a","matMul"),o=E(t,"b","matMul");[r,o]=ee(r,o);const i={a:r,b:o},a={transposeA:e,transposeB:s};return F.runKernel(gc,i,a)}const Ft=P({matMul_:bk});function yk(n){const e={x:E(n,"x","sigmoid","float32")};return F.runKernel(ua,e)}const ko=P({sigmoid_:yk});function wk(n,t,e){const s=E(n,"x","slice","string_or_numeric");if(s.rank===0)throw new Error("Slicing scalar is not possible");const r={x:s},o={begin:t,size:e};return F.runKernel(su,r,o)}const Ht=P({slice_:wk});function vk(n){const e={x:E(n,"x","tanh","float32")};return F.runKernel(ga,e)}const pu=P({tanh_:vk});function Ck(n,t,e){const s=E(n,"x","batchToSpaceND"),r=t.reduce((a,l)=>a*l);S(s.rank>=1+t.length,()=>`input rank is ${s.rank} but should be > than blockShape.length ${t.length}`),S(e.length===t.length,()=>`crops.length is ${e.length} but should be equal to blockShape.length  ${t.length}`),S(s.shape[0]%r===0,()=>`input tensor batch is ${s.shape[0]} but is not divisible by the product of the elements of blockShape ${t.join(" * ")} === ${r}`);const o={x:s},i={blockShape:t,crops:e};return F.runKernel(xc,o,i)}const pf=P({batchToSpaceND_:Ck});function $k(n){let t;return n.rank===0||n.rank===1?t=L(n,[1,1,1,n.size]):n.rank===2?t=L(n,[1,1,n.shape[0],n.shape[1]]):n.rank===3?t=L(n,[1,n.shape[0],n.shape[1],n.shape[2]]):t=n,t}function Ik(n,t,e,s,r,o){o==null&&(o=.001);const i=E(n,"x","batchNorm"),a=E(t,"mean","batchNorm"),l=E(e,"variance","batchNorm");let c;r!=null&&(c=E(r,"scale","batchNorm"));let u;s!=null&&(u=E(s,"offset","batchNorm")),S(a.rank===l.rank,()=>"Batch normalization gradient requires mean and variance to have equal ranks."),S(u==null||a.rank===u.rank,()=>"Batch normalization gradient requires mean and offset to have equal ranks."),S(c==null||a.rank===c.rank,()=>"Batch normalization gradient requires mean and scale to have equal ranks.");const d={x:$k(i),scale:c,offset:u,mean:a,variance:l},f={varianceEpsilon:o},p=F.runKernel(Tc,d,f);return L(p,i.shape)}const mu=P({batchNorm_:Ik});function kk(n,t,e,s,r,o){const i=E(n,"x","batchNorm"),a=E(t,"mean","batchNorm"),l=E(e,"variance","batchNorm");let c;r!=null&&(c=E(r,"scale","batchNorm"));let u;return s!=null&&(u=E(s,"offset","batchNorm")),S(i.rank===2,()=>`Error in batchNorm2D: x must be rank 2 but got rank ${i.rank}.`),S(a.rank===2||a.rank===1,()=>`Error in batchNorm2D: mean must be rank 2 or rank 1 but got rank ${a.rank}.`),S(l.rank===2||l.rank===1,()=>`Error in batchNorm2D: variance must be rank 2 or rank 1 but got rank ${l.rank}.`),c!=null&&S(c.rank===2||c.rank===1,()=>`Error in batchNorm2D: scale must be rank 2 or rank 1 but got rank ${c.rank}.`),u!=null&&S(u.rank===2||u.rank===1,()=>`Error in batchNorm2D: offset must be rank 2 or rank 1 but got rank ${u.rank}.`),mu(i,a,l,u,c,o)}const Sk=P({batchNorm2d_:kk});function Nk(n,t,e,s,r,o){const i=E(n,"x","batchNorm"),a=E(t,"mean","batchNorm"),l=E(e,"variance","batchNorm");let c;r!=null&&(c=E(r,"scale","batchNorm"));let u;return s!=null&&(u=E(s,"offset","batchNorm")),S(i.rank===3,()=>`Error in batchNorm3D: x must be rank 3 but got rank ${i.rank}.`),S(a.rank===3||a.rank===1,()=>`Error in batchNorm3D: mean must be rank 3 or rank 1 but got rank ${a.rank}.`),S(l.rank===3||l.rank===1,()=>`Error in batchNorm3D: variance must be rank 3 or rank 1 but got rank ${l.rank}.`),c!=null&&S(c.rank===3||c.rank===1,()=>`Error in batchNorm3D: scale must be rank 3 or rank 1 but got rank ${c.rank}.`),u!=null&&S(u.rank===3||u.rank===1,()=>`Error in batchNorm3D: offset must be rank 3 or rank 1 but got rank ${u.rank}.`),mu(i,a,l,u,c,o)}const Tk=P({batchNorm3d_:Nk});function Ek(n,t,e,s,r,o){const i=E(n,"x","batchNorm"),a=E(t,"mean","batchNorm"),l=E(e,"variance","batchNorm");let c;r!=null&&(c=E(r,"scale","batchNorm"));let u;return s!=null&&(u=E(s,"offset","batchNorm")),S(i.rank===4,()=>`Error in batchNorm4D: x must be rank 4 but got rank ${i.rank}.`),S(a.rank===4||a.rank===1,()=>`Error in batchNorm4D: mean must be rank 4 or rank 1 but got rank ${a.rank}.`),S(l.rank===4||l.rank===1,()=>`Error in batchNorm4D: variance must be rank 4 or rank 1 but got rank ${l.rank}.`),c!=null&&S(c.rank===4||c.rank===1,()=>`Error in batchNorm4D: scale must be rank 4 or rank 1 but got rank ${c.rank}.`),u!=null&&S(u.rank===4||u.rank===1,()=>`Error in batchNorm4D: offset must be rank 4 or rank 1 but got rank ${u.rank}.`),mu(i,a,l,u,c,o)}const Rk=P({batchNorm4d_:Ek});function Ak(n,t,e){const s=E(n,"x","bincount"),r=E(t,"weights","bincount");S(s.dtype==="int32",()=>`Error in bincount: input dtype must be int32, but got ${s.dtype}`),S(e>=0,()=>`size must be non-negative, but got ${e}.`),S(r.size===s.size||r.size===0,()=>`Error in bincount: weights must have the same size as input or0-length, but got input shape: ${s.shape}, weights shape: ${r.shape}.`);const o={x:s,weights:r},i={size:e};return F.runKernel(Sd,o,i)}const Dk=P({bincount_:Ak});function _k(n,t){let e=E(n,"broadcastTo","x");const s=e.shape;if(ks(t),t.length<e.rank)throw new Error(`broadcastTo(): shape.length=${t.length} < input.rank=${e.rank}.`);if(t.length>e.rank){const c=e.shape.slice();for(;c.length<t.length;)c.unshift(1);e=L(e,c)}const r=e.shape,o=Array.from(t);for(let c=t.length-1;c>=0;c--)if(r[c]===t[c])o[c]=1;else if(e.shape[c]!==1)throw new Error(`broadcastTo(): [${s}] cannot be broadcast to [${t}].`);if(o.map((c,u)=>c>1?u:-1).filter(c=>c>=0).length===0)return dr(e);const a={x:e},l={reps:o};return F.runKernel(xa,a,l)}const ri=P({broadcastTo_:_k});function Fk(n){const e={x:E(n,"x","ceil","float32")};return F.runKernel(Di,e)}const Ok=P({ceil_:Fk});function gu(n,t,e){ks(n),e=e||Co(t);const s={shape:n,value:t,dtype:e};return F.runKernel(Vd,{},s)}function Mk(n,t,e){const s=E(n,"x","clipByValue");if(S(t<=e,()=>`Error in clip: min (${t}) must be less than or equal to max (${e}).`),t===e)return gu(s.shape,t,s.dtype);const r={x:s},o={clipValueMin:t,clipValueMax:e};return F.runKernel(_i,r,o)}const ln=P({clipByValue_:Mk});function Lk(n){return Ue(n,0)}const Pk=P({concat1d_:Lk});function zk(n,t){return Ue(n,t)}const Bk=P({concat2d_:zk});function Vk(n,t){return Ue(n,t)}const Wk=P({concat3d_:Vk});function Uk(n,t){return Ue(n,t)}const Gk=P({concat4d_:Uk});function Hk(n,t,e,s,r="NHWC",o=[1,1],i){const a=E(n,"x","conv2d","float32"),l=E(t,"filter","conv2d","float32");let c=a,u=!1;a.rank===3&&(u=!0,c=L(a,[1,a.shape[0],a.shape[1],a.shape[2]])),S(c.rank===4,()=>`Error in conv2d: input must be rank 4, but got rank ${c.rank}.`),S(l.rank===4,()=>`Error in conv2d: filter must be rank 4, but got rank ${l.rank}.`),qe("conv2d",s,i);const h=r==="NHWC"?c.shape[3]:c.shape[1];S(h===l.shape[2],()=>`Error in conv2d: depth of input (${h}) must match input depth for filter ${l.shape[2]}.`),S(Te(e,o),()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${e} and dilations '${o}'`),S(Cr(o),()=>"Error in conv2D: Dilated rates should be larger than 0."),S(Cr(e),()=>"Error in conv2D: Strides should be larger than 0.");const d={x:c,filter:l},f={strides:e,pad:s,dataFormat:r,dilations:o,dimRoundingMode:i},p=F.runKernel(wc,d,f);return u?L(p,[p.shape[1],p.shape[2],p.shape[3]]):p}const $r=P({conv2d_:Hk});function qk(n,t,e,s,r="NWC",o=1,i){const a=E(n,"x","conv1d"),l=E(t,"filter","conv1d");let c=a,u=!1;a.rank===2&&(u=!0,c=L(a,[1,a.shape[0],a.shape[1]])),S(c.rank===3,()=>`Error in conv1d: input must be rank 3, but got rank ${c.rank}.`),S(l.rank===3,()=>`Error in conv1d: filter must be rank 3, but got rank ${l.rank}.`),qe("conv1d",s,i),S(c.shape[2]===l.shape[1],()=>`Error in conv1d: depth of input (${c.shape[2]}) must match input depth for filter ${l.shape[1]}.`),S(Te(e,o),()=>`Error in conv1D: Either stride or dilation must be 1. Got stride ${e} and dilation '${o}'`),S(Cr(o),()=>"Error in conv1D: Dilated rates should be larger than 0."),S(Cr(e),()=>"Error in conv1D: Stride should be larger than 0."),S(r==="NWC",()=>`Error in conv1d: got dataFormat of ${r} but only NWC is currently supported.`);const h=L(l,[1,l.shape[0],l.shape[1],l.shape[2]]),d=L(c,[c.shape[0],1,c.shape[1],c.shape[2]]),g=$r(d,h,[1,e],s,"NHWC",[1,o],i);return u?L(g,[g.shape[2],g.shape[3]]):L(g,[g.shape[0],g.shape[2],g.shape[3]])}const N0=P({conv1d_:qk});function jk(n,t,e,s,r,o="NHWC",i){S(n.length===t.rank,()=>`Length of inShape (${n.length}) and rank of dy (${t.rank}) must match`);let a=n,l=t,c=!1;t.rank===3&&(c=!0,l=L(t,[1,t.shape[0],t.shape[1],t.shape[2]]),a=[1,n[0],n[1],n[2]]),S(a.length===4,()=>`Error in conv2dDerInput: inShape must be length 4, but got length ${a.length}.`),S(l.rank===4,()=>`Error in conv2dDerInput: dy must be rank 4, but got rank ${l.rank}`),S(e.rank===4,()=>`Error in conv2dDerInput: filter must be rank 4, but got rank ${e.rank}`);const u=o==="NHWC"?a[3]:a[1],h=o==="NHWC"?l.shape[3]:l.shape[1];S(u===e.shape[2],()=>`Error in conv2dDerInput: depth of input (${u}) must match input depth for filter ${e.shape[2]}.`),S(h===e.shape[3],()=>`Error in conv2dDerInput: depth of output (${h}) must match output depth for filter ${e.shape[3]}.`),qe("conv2dDerInput",r,i);const d={dy:l,filter:e},f={strides:s,pad:r,dataFormat:o,dimRoundingMode:i,inputShape:a},p=F.runKernel(vc,d,f);return c?L(p,[p.shape[1],p.shape[2],p.shape[3]]):p}const mf=P({conv2DBackpropInput_:jk});function Xk(n,t,e,s,r,o){const i=E(n,"x","conv2dTranspose"),a=E(t,"filter","conv2dTranspose");return mf(e,i,a,s,r,"NHWC",o)}const T0=P({conv2dTranspose_:Xk});function Kk(n,t,e,s,r="NDHWC",o=[1,1,1]){const i=E(n,"x","conv3d"),a=E(t,"filter","conv3d");let l=i,c=!1;i.rank===4&&(c=!0,l=L(i,[1,i.shape[0],i.shape[1],i.shape[2],i.shape[3]])),S(l.rank===5,()=>`Error in conv3d: input must be rank 5, but got rank ${l.rank}.`),S(a.rank===5,()=>`Error in conv3d: filter must be rank 5, but got rank ${a.rank}.`),S(l.shape[4]===a.shape[3],()=>`Error in conv3d: depth of input (${l.shape[4]}) must match input depth for filter ${a.shape[3]}.`),S(Te(e,o),()=>`Error in conv3D: Either strides or dilations must be 1. Got strides ${e} and dilations '${o}'`),S(r==="NDHWC",()=>`Error in conv3d: got dataFormat of ${r} but only NDHWC is currently supported.`),S(Cr(o),()=>"Error in conv3D: Dilated rates should be larger than 0."),S(Cr(e),()=>"Error in conv3D: Strides should be larger than 0.");const u={x:l,filter:a},h={strides:e,pad:s,dataFormat:r,dilations:o},d=F.runKernel(Cc,u,h);return c?L(d,[d.shape[1],d.shape[2],d.shape[3],d.shape[4]]):d}const Yk=P({conv3d_:Kk});function Zk(n,t,e,s,r){S(n.length===t.rank,()=>`Length of inShape (${n.length}) and rank of dy (${t.rank}) must match`);let o=n,i=t,a=!1;t.rank===4&&(a=!0,i=L(t,[1,t.shape[0],t.shape[1],t.shape[2],t.shape[3]]),o=[1,n[0],n[1],n[2],n[3]]);const l=o[4],c=i.shape[4];S(o.length===5,()=>`Error in conv3dDerInput: inShape must be length 5, but got length ${o.length}.`),S(i.rank===5,()=>`Error in conv3dDerInput: dy must be rank 5, but got rank ${i.rank}`),S(e.rank===5,()=>`Error in conv3dDerInput: filter must be rank 5, but got rank ${e.rank}`),S(l===e.shape[3],()=>`Error in conv3dDerInput: depth of input (${l}) must match input depth for filter ${e.shape[3]}.`),S(c===e.shape[4],()=>`Error in conv3dDerInput: depth of output (${c}) must match output depth for filter ${e.shape[4]}.`);const u={dy:i,filter:e},h={pad:r,strides:s,inputShape:o},d=F.runKernel(Ad,u,h);return a?L(d,[d.shape[1],d.shape[2],d.shape[3],d.shape[4]]):d}const E0=P({conv3DBackpropInput_:Zk});function Jk(n,t,e,s,r){const o=E(n,"x","conv3dTranspose"),i=E(t,"filter","conv3dTranspose");return E0(e,o,i,s,r)}const Qk=P({conv3dTranspose_:Jk});function tS(n){const e={x:E(n,"x","cos","float32")};return F.runKernel(Fi,e)}const gf=P({cos_:tS});function eS(n){const e={x:E(n,"x","cosh","float32")};return F.runKernel(Oi,e)}const R0=P({cosh_:eS});function nS(n,t=0,e=!1,s=!1){const o={x:E(n,"x","cumprod")},i={axis:t,exclusive:e,reverse:s};return F.runKernel(Dd,o,i)}const Lh=P({cumprod_:nS});function sS(n,t=0,e=!1,s=!1){const o={x:E(n,"x","cumsum")},i={axis:t,exclusive:e,reverse:s};return F.runKernel($c,o,i)}const A0=P({cumsum_:sS});function rS(n,t,e,s=!1){const r=E(n,"x","denseBincount"),o=E(t,"weights","denseBincount");S(r.dtype==="int32",()=>`Error in denseBincount: input dtype must be int32, but got ${r.dtype}`),S(r.rank<=2,()=>`Error in denseBincount: input must be at most rank 2, but got rank ${r.rank}.`),S(e>=0,()=>`size must be non-negative, but got ${e}.`),S(o.size===r.size||o.size===0,()=>`Error in denseBincount: weights must have the same shape as x or 0-length, but got x shape: ${r.shape}, weights shape: ${o.shape}.`);const i={x:r,weights:o},a={size:e,binaryOutput:s};return F.runKernel(Fd,i,a)}const Tm=P({denseBincount_:rS});function oS(n,t,e="NHWC"){const s=E(n,"x","depthToSpace","float32"),r=e==="NHWC"?s.shape[1]:s.shape[2],o=e==="NHWC"?s.shape[2]:s.shape[3],i=e==="NHWC"?s.shape[3]:s.shape[1];S(t>1,()=>`blockSize should be > 1 for depthToSpace, but was: ${t}`),S(r*t>=0,()=>`Negative dimension size caused by overflow when multiplying
    ${r} and ${t}  for depthToSpace with input shape
    ${s.shape}`),S(o*t>=0,()=>`Negative dimension size caused by overflow when multiplying
    ${o} and ${t} for depthToSpace with input shape
        ${s.shape}`),S(i%(t*t)===0,()=>`Dimension size must be evenly divisible by ${t*t} but is ${i} for depthToSpace with input shape ${s.shape}`);const a={x:s},l={blockSize:t,dataFormat:e};return F.runKernel(Od,a,l)}const iS=P({depthToSpace_:oS});function aS(n,t,e,s,r="NHWC",o=[1,1],i){const a=E(n,"x","depthwiseConv2d","float32"),l=E(t,"filter","depthwiseConv2d","float32");let c=a,u=!1;a.rank===3&&(u=!0,c=L(a,[1,a.shape[0],a.shape[1],a.shape[2]])),S(c.rank===4,()=>`Error in depthwiseConv2d: input must be rank 4, but got rank ${c.rank}.`),S(l.rank===4,()=>`Error in depthwiseConv2d: filter must be rank 4, but got rank ${l.rank}.`);const h=r==="NHWC"?c.shape[3]:c.shape[1];S(h===l.shape[2],()=>`Error in depthwiseConv2d: number of input channels (${h}) must match the inChannels dimension in filter ${l.shape[2]}.`),qe("depthwiseConv2d",s,i);const d={x:c,filter:l},f={strides:e,pad:s,dataFormat:r,dilations:o,dimRoundingMode:i},p=F.runKernel(Ic,d,f);return u?L(p,[p.shape[1],p.shape[2],p.shape[3]]):p}const xf=P({depthwiseConv2d_:aS});function lS(n,t,e,s,r=[1,1],o="NHWC"){const i=E(n,"x","dilation2d"),a=E(t,"filter","dilation2d");S(i.rank===3||i.rank===4,()=>`Error in dilation2d: input must be rank 3 or 4, but got rank ${i.rank}.`),S(a.rank===3,()=>`Error in dilation2d: filter must be rank 3, but got rank ${a.rank}.`),S(o==="NHWC",()=>`Error in dilation2d: Only NHWC is currently supported, but got dataFormat of ${o}`);let l=i,c=!1;i.rank===3&&(l=L(i,[1,i.shape[0],i.shape[1],i.shape[2]]),c=!0),S(l.shape[3]===a.shape[2],()=>`Error in dilation2d:  input and filter must have the same depth: ${l.shape[3]} vs ${a.shape[2]}`);const u={x:l,filter:a},h={strides:e,pad:s,dilations:r},d=F.runKernel(kc,u,h);return c?L(d,[d.shape[1],d.shape[2],d.shape[3]]):d}const cS=P({dilation2d_:lS});function uo(n,t){const e=n.length,s=[];for(let r=0;r<e;r++){const o=e-1-r,i=n[o]||1;(t[t.length-1-r]||1)>1&&i===1&&s.unshift(o)}return s}function fe(n,t){const e=[];for(let s=0;s<t.length;s++){const r=n[n.length-s-1],o=t.length-s-1,i=t[o];(r==null||r===1&&i>1)&&e.unshift(o)}return e}function yt(n,t){const e=Math.max(n.length,t.length),s=new Array(e);for(let r=0;r<e;r++){let o=n[n.length-r-1];o==null&&(o=1);let i=t[t.length-r-1];if(i==null&&(i=1),o===1)s[e-r-1]=i;else if(i===1)s[e-r-1]=o;else if(o!==i){const a=`Operands could not be broadcast together with shapes ${n} and ${t}.`;throw Error(a)}else s[e-r-1]=o}return s}function uS(n,t){let e=E(n,"a","equal","string_or_numeric"),s=E(t,"b","equal","string_or_numeric");[e,s]=ee(e,s),yt(e.shape,s.shape);const r={a:e,b:s};return F.runKernel(Sc,r)}const ls=P({equal_:uS});function hS(n,t,e){const s=E(t,"a","where"),r=E(e,"b","where"),o=E(n,"condition","where","bool"),i=yt(yt(o.shape,s.shape),r.shape),a=ri(o,i),l=ri(s,i),c=ri(r,i),u={condition:a,t:l,e:c};return F.runKernel(nu,u)}const Oe=P({where_:hS});function dS(n){const e={x:E(n,"x","zerosLike")};return F.runKernel(uu,e)}const Et=P({zerosLike_:dS});function fS(n,t){let e=E(n,"a","div"),s=E(t,"b","div");[e,s]=ee(e,s);const r=ft(e,s),o=Et(r),i=ls(s,o);return Oe(i,o,r)}const pS=P({divNoNan_:fS});function mS(n,t){const e=E(n,"t1","dot"),s=E(t,"t2","dot");S((e.rank===1||e.rank===2)&&(s.rank===1||s.rank===2),()=>`Error in dot: inputs must all be rank 1 or 2, but got ranks ${e.rank} and ${s.rank}.`);const r=e.rank===1?e.size:e.shape[1],o=s.rank===1?s.size:s.shape[0];if(S(r===o,()=>`Error in dot: inner dimensions of inputs must match, but got ${r} and ${o}.`),e.rank===1&&s.rank===1){const i=L(e,[1,-1]),a=L(s,[-1,1]),l=Ft(i,a);return L(l,[])}else if(e.rank===1&&s.rank===2){const i=L(e,[1,-1]),a=L(s,[s.shape[0],s.shape[1]]),l=Ft(i,a);return L(l,[l.size])}else if(e.rank===2&&s.rank===1){const i=L(s,[-1,1]),a=Ft(e,i);return L(a,[a.size])}else{const i=L(s,[s.shape[0],s.shape[1]]);return Ft(e,i)}}const gS=P({dot_:mS});function xS(n,...t){const e=t.map((r,o)=>E(r,`tensors${o}`,"einsum")),s={equation:n};return F.runKernel(Pd,e,s)}const Ho=P({einsum_:xS});function bS(n){const e={x:E(n,"x","elu","float32")};return F.runKernel(Li,e)}const xu=P({elu_:bS});function yS(n){let t=E(n,"x","erf");S(t.dtype==="int32"||t.dtype==="float32",()=>"Input dtype must be `int32` or `float32`."),t.dtype==="int32"&&(t=rt(t,"float32"));const e={x:t};return F.runKernel(Pi,e)}const D0=P({erf_:yS});function bf(n,t){for(let e=0;e<n.length;++e)if(n[n.length-e-1]!==t-1-e)return!1;return!0}function _0(n,t,e){const s=n.length+t.length,r=[];let o=0,i=0;for(let a=0;a<s;a++)e.indexOf(a)===-1?r.push(n[o++]):r.push(t[i++]);return r}function ye(n,t){const e=[],s=n.length;for(let o=0;o<s;o++)t.indexOf(o)===-1&&e.push(n[o]);const r=t.map(o=>n[o]);return[e,r]}function ae(n,t){const e=t.map(s=>1);return _0(n,e,t)}function $e(n,t,e){S(bf(t,e),()=>`${n} supports only inner-most axes for now. Got axes ${t} and rank-${e} input.`)}function Jt(n,t){if(bf(n,t))return null;const e=[];for(let s=0;s<t;++s)n.indexOf(s)===-1&&e.push(s);return n.forEach(s=>e.push(s)),e}function Ks(n){return n.map((t,e)=>[e,t]).sort((t,e)=>t[1]-e[1]).map(t=>t[0])}function ne(n,t){const e=[];for(let s=t-n;s<t;++s)e.push(s);return e}function wS(n,t=null,e=!1){const r={x:E(n,"x","max")},o={reductionIndices:t,keepDims:e};return F.runKernel(Pc,r,o)}const Fn=P({max_:wS});function vS(n,t=null,e=!1){const r={x:E(n,"x","min")},o={axis:t,keepDims:e};return F.runKernel(Wc,r,o)}const Al=P({min_:vS});function CS(n,t){let e=E(n,"base","pow"),s=E(t,"exp","pow");[e,s]=ee(e,s);const r={a:e,b:s};return F.runKernel(ta,r)}const Ir=P({pow_:CS});function Ot(n,t){if((xn(n)&&t!=="string"||Array.isArray(n))&&t!=="complex64")throw new Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");if(t==="string"&&xn(n)&&!(n instanceof Uint8Array))throw new Error("When making a scalar from encoded string, the value must be `Uint8Array`.");return fu(n,[],[],t)}function $S(n){const e={x:E(n,"x","sqrt","float32")};return F.runKernel(da,e)}const Ne=P({sqrt_:$S});function IS(n){const t=E(n,"x","square"),e={};return F.runKernel("Square",{x:t},e)}const jt=P({square_:IS});function kS(n,t=null,e=!1){let s=E(n,"x","sum");s.dtype==="bool"&&(s=rt(s,"int32"));const r={x:s},o={axis:t,keepDims:e};return F.runKernel(ru,r,o)}const dt=P({sum_:kS});function SS(n,t="euclidean",e=null,s=!1){n=E(n,"x","norm");const r=F0(n,t,e);let o=r.shape;if(s){const i=It(e,n.shape);o=ae(r.shape,i)}return L(r,o)}function F0(n,t,e=null){if(n.rank===0)return De(n);if(n.rank!==1&&e===null)return F0(L(n,[-1]),t,e);if(n.rank===1||typeof e=="number"||Array.isArray(e)&&e.length===1){if(t===1)return dt(De(n),e);if(t===1/0)return Fn(De(n),e);if(t===-1/0)return Al(De(n),e);if(t==="euclidean"||t===2)return Ne(dt(Ir(De(n),Ot(2,"int32")),e));throw new Error(`Error in norm: invalid ord value: ${t}`)}if(Array.isArray(e)&&e.length===2){if(t===1)return Fn(dt(De(n),e[0]),e[1]-1);if(t===1/0)return Fn(dt(De(n),e[1]),e[0]);if(t===-1/0)return Al(dt(De(n),e[1]),e[0]);if(t==="fro"||t==="euclidean")return Ne(dt(jt(n),e));throw new Error(`Error in norm: invalid ord value: ${t}`)}throw new Error(`Error in norm: invalid axis: ${e}`)}const bu=P({norm_:SS});function NS(n,t=null,e=!1){return bu(n,"euclidean",t,e)}const TS=P({euclideanNorm_:NS});function ES(n){const e={x:E(n,"x","exp")};return F.runKernel(zi,e)}const cs=P({exp_:ES});function RS(n,t=0){const e=E(n,"x","expandDims","string_or_numeric");S(t<=e.rank,()=>"Axis must be <= rank of the tensor");const s={input:e},r={dim:t};return F.runKernel(Nc,s,r)}const Ve=P({expandDims_:RS});function AS(n){const e={x:E(n,"x","expm1")};return F.runKernel(Bi,e)}const DS=P({expm1_:AS});function _S(n,t){const e=E(n,"x","tile","string_or_numeric");S(e.rank===t.length,()=>`Error in transpose: rank of input ${e.rank} must match length of reps ${t}.`);const s={x:e},r={reps:t};return F.runKernel(xa,s,r)}const Dn=P({tile_:_S});function FS(n,t,e,s="float32"){t==null&&(t=n);const r=$t([n,t],s),o=n<=t?n:t;for(let a=0;a<o;++a)r.set(1,a,a);const i=L(r.toTensor(),[n,t]);if(e==null)return i;if(e.length===1)return Dn(Ve(i,0),[e[0],1,1]);if(e.length===2)return Dn(Ve(Ve(i,0),0),[e[0],e[1],1,1]);if(e.length===3)return Dn(Ve(Ve(Ve(i,0),0),0),[e[0],e[1],e[2],1,1]);throw new Error(`eye() currently supports only 1D and 2D batchShapes, but received ${e.length}D.`)}const O0=P({eye_:FS});function OS(n){const e={x:E(n,"x","floor","float32")};return F.runKernel(Vi,e)}const yu=P({floor_:OS});function MS(n,t,e=0,s=0){const r=E(n,"x","gather"),o=E(t,"indices","gather","int32"),i={x:r,indices:o},a={axis:e,batchDims:s};return F.runKernel(Ec,i,a)}const yf=P({gather_:MS});function LS(n,t){let e=E(n,"a","greater","string_or_numeric"),s=E(t,"b","greater","string_or_numeric");[e,s]=ee(e,s),yt(e.shape,s.shape);const r={a:e,b:s};return F.runKernel(Rc,r)}const cn=P({greater_:LS});function PS(n,t){let e=E(n,"a","greaterEqual","string_or_numeric"),s=E(t,"b","greaterEqual","string_or_numeric");[e,s]=ee(e,s),yt(e.shape,s.shape);const r={a:e,b:s};return F.runKernel(Ui,r)}const Or=P({greaterEqual_:PS});function zS(n){const e={input:E(n,"input","imag")};return F.runKernel(Gd,e)}const wf=P({imag_:zS});function BS(n){const e={x:E(n,"x","isFinite")};return F.runKernel(Hi,e)}const VS=P({isFinite_:BS});function WS(n){const e={x:E(n,"x","isInf")};return F.runKernel(qi,e)}const US=P({isInf_:WS});function GS(n){const e={x:E(n,"x","isNaN")};return F.runKernel(ji,e)}const HS=P({isNaN_:GS});function qS(n,t=.2){const s={x:E(n,"x","leakyRelu")},r={alpha:t};return F.runKernel(Ac,s,r)}const vf=P({leakyRelu_:qS});function jS(n,t){let e=E(n,"a","less","string_or_numeric"),s=E(t,"b","less","string_or_numeric");[e,s]=ee(e,s),yt(e.shape,s.shape);const r={a:e,b:s};return F.runKernel(Dc,r)}const Dl=P({less_:jS});function XS(n,t){let e=E(n,"a","lessEqual","string_or_numeric"),s=E(t,"b","lessEqual","string_or_numeric");[e,s]=ee(e,s),yt(e.shape,s.shape);const r={a:e,b:s};return F.runKernel(_c,r)}const So=P({lessEqual_:XS});function KS(n,t=5,e=1,s=1,r=.5){const o=E(n,"x","localResponseNormalization");S(o.rank===4||o.rank===3,()=>`Error in localResponseNormalization: x must be rank 3 or 4 but got
               rank ${o.rank}.`),S(ao(t),()=>`Error in localResponseNormalization: depthRadius must be an integer but got depthRadius ${t}.`);let i=o,a=!1;o.rank===3&&(a=!0,i=L(o,[1,o.shape[0],o.shape[1],o.shape[2]]));const l={x:i},c={depthRadius:t,bias:e,alpha:s,beta:r},u=F.runKernel(Lc,l,c);return a?L(u,[u.shape[1],u.shape[2],u.shape[3]]):u}const YS=P({localResponseNormalization_:KS});function ZS(n){const e={x:E(n,"x","log","float32")};return F.runKernel(Xi,e)}const us=P({log_:ZS});function JS(n){const e={x:E(n,"x","log1p")};return F.runKernel(Ki,e)}const M0=P({log1p_:JS});function QS(n,t){S(Ch(n),()=>"The f passed in variableGrads(f) must be a function"),S(t==null||Array.isArray(t)&&t.every(c=>c instanceof El),()=>"The varList passed in variableGrads(f, varList) must be an array of variables");const e=t!=null;if(!e){t=[];for(const c in F.registeredVariables)t.push(F.registeredVariables[c])}const s=e?t.filter(c=>!c.trainable):null,r=t.length;t=t.filter(c=>c.trainable),S(t.length>0,()=>`variableGrads() expects at least one of the input variables to be trainable, but none of the ${r} variables is trainable.`);const o=!0,{value:i,grads:a}=F.gradients(n,t,null,o);S(a.some(c=>c!=null),()=>"Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize()."),S(i.rank===0,()=>`The f passed in variableGrads(f) must return a scalar, but it returned a rank-${i.rank} tensor`);const l={};return t.forEach((c,u)=>{a[u]!=null&&(l[c.name]=a[u])}),s?.forEach(c=>l[c.name]=null),{value:i,grads:l}}function ho(n){return F.customGrad(n)}function t2(n){const e={x:E(n,"x","neg")};return F.runKernel(Gc,e)}const te=P({neg_:t2});function e2(n){const e={x:E(n,"x","softplus")};return F.runKernel(ha,e)}const wa=P({softplus_:e2});function n2(n){const t=E(n,"x","logSigmoid");return ho(s=>({value:te(wa(te(s))),gradFunc:i=>_(i,ko(te(s)))}))(t)}const s2=P({logSigmoid_:n2});function r2(n,t){let e=E(n,"a","sub"),s=E(t,"b","sub");[e,s]=ee(e,s);const r={a:e,b:s};return F.runKernel(pa,r)}const pt=P({sub_:r2});function o2(n,t=-1){const e=E(n,"logits","logSoftmax");if(t===-1&&(t=e.rank-1),t!==e.rank-1)throw Error(`Log Softmax along a non-last dimension is not yet supported. Logits was rank ${e.rank} and axis was ${t}`);return ho((r,o)=>{const a=Fn(r,t,!0),l=pt(r,a),c=pt(rt(l,"float32"),us(dt(cs(l),t,!0)));return o([c]),{value:c,gradFunc:(h,d)=>{const[f]=d,p=!0,m=cs(f);return pt(h,_(dt(h,t,p),m))}}})(e)}const L0=P({logSoftmax_:o2});function i2(n,t=null,e=!1){const s=E(n,"x","logSumExp"),r=It(t,s.shape),o=Fn(s,r,!0),i=pt(s,o),a=cs(i),l=dt(a,r),c=us(l),u=J(L(o,c.shape),c);if(e){const h=ae(u.shape,r);return L(u,h)}return u}const P0=P({logSumExp_:i2});function a2(n,t){const e=E(n,"a","logicalAnd","bool"),s=E(t,"b","logicalAnd","bool");yt(e.shape,s.shape);const r={a:e,b:s};return F.runKernel(Fc,r)}const ws=P({logicalAnd_:a2});function l2(n){const e={x:E(n,"x","logicalNot","bool")};return F.runKernel(Oc,e)}const Cf=P({logicalNot_:l2});function c2(n,t){const e=E(n,"a","logicalOr","bool"),s=E(t,"b","logicalOr","bool");yt(e.shape,s.shape);const r={a:e,b:s};return F.runKernel(Mc,r)}const z0=P({logicalOr_:c2});function u2(n,t){const e=E(n,"a","logicalXor","bool"),s=E(t,"b","logicalXor","bool");return yt(e.shape,s.shape),ws(z0(n,t),Cf(ws(n,t)))}const h2=P({logicalXor_:u2});function d2(n,t,e,s,r){const o=E(n,"x","maxPool"),i=1;let a=o,l=!1;o.rank===3&&(l=!0,a=L(o,[1,o.shape[0],o.shape[1],o.shape[2]])),S(a.rank===4,()=>`Error in maxPool: input must be rank 4 but got rank ${a.rank}.`),S(Te(e,i),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${e} and dilations '${i}'`),qe("maxPool",s,r);const c={x:a},u={filterSize:t,strides:e,pad:s,dimRoundingMode:r},h=F.runKernel(zc,c,u);return l?L(h,[h.shape[1],h.shape[2],h.shape[3]]):h}const $f=P({maxPool_:d2});function f2(n,t=[1,1,1],e,s,r,o="NDHWC"){const i=E(n,"x","maxPool3d");let a=i,l=!1;i.rank===4&&(l=!0,a=L(i,[1,i.shape[0],i.shape[1],i.shape[2],i.shape[3]])),S(a.rank===5,()=>`Error in maxPool3d: x must be rank 5 but got rank ${a.rank}.`),S(o==="NDHWC",()=>`Error in maxPool3d: Only NDHWC is currently supported, but got dataFormat of ${o}`),qe("maxPool3d",s,r);const c={x:a},u={filterSize:t,strides:e,pad:s,dimRoundingMode:r,dataFormat:o},h=F.runKernel(Bc,c,u);return l?L(h,[h.shape[1],h.shape[2],h.shape[3],h.shape[4]]):h}const p2=P({maxPool3d_:f2});function m2(n,t){let e=E(n,"a","maximum"),s=E(t,"b","maximum");[e,s]=ee(e,s),e.dtype==="bool"&&(e=rt(e,"int32"),s=rt(s,"int32")),yt(e.shape,s.shape);const r={a:e,b:s};return F.runKernel(Yi,r)}const Ys=P({maximum_:m2});function g2(n,t=null,e=!1){const r={x:E(n,"x","mean")},o={axis:t,keepDims:e};return F.runKernel(Vc,r,o)}const ie=P({mean_:g2});function xe(n,t="float32"){if(ks(n),t==="complex64"){const s=xe(n,"float32"),r=xe(n,"float32");return br(s,r)}const e=Se(q(n),t);return F.makeTensor(e,n,t)}function Zs(n,t="float32"){if(ks(n),t==="complex64"){const s=Zs(n,"float32"),r=xe(n,"float32");return br(s,r)}const e=bd(q(n),t);return F.makeTensor(e,n,t)}function x2(n,t){let e=E(n,"a","minimum"),s=E(t,"b","minimum");[e,s]=ee(e,s),e.dtype==="bool"&&(e=rt(e,"int32"),s=rt(s,"int32")),yt(e.shape,s.shape);const r={a:e,b:s};return F.runKernel(Zi,r)}const ui=P({minimum_:x2});function b2(n,t,e){S(e==="reflect"||e==="symmetric",()=>`Invalid mode. Mode must be either reflect or symmetric. Got ${e}.`);const s=E(n,"x","mirrorPad");if(s.rank===0)throw new Error("mirrorPad(scalar) is not defined. Pass non-scalar to mirrorPad");S(t.length===s.rank,()=>`Padding doesn't match input. Must be ${s.rank}. Got ${t.length}.`);const r=e==="reflect"?1:0;for(let a=0;a<s.rank;a++)S(t[a].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),S(t[a][0]>=0&&t[a][0]<=s.shape[a]-r&&t[a][1]>=0&&t[a][1]<=s.shape[a]-r,()=>`Padding in dimension ${a} cannot be greater than or equal to ${s.shape[a]-r} or less than 0 for input of shape ${s.shape}`);const o={paddings:t,mode:e},i={x:s};return F.runKernel(Uc,i,o)}const y2=P({mirrorPad_:b2});function w2(n,t){let e=E(n,"a","mod"),s=E(t,"b","mod");[e,s]=ee(e,s);const r={a:e,b:s};return F.runKernel(Ji,r)}const v2=P({mod_:w2});function C2(n,t=null,e=!1){n=E(n,"x","moments");const s=It(t,n.shape),r=ie(n,s,e);let o=r.shape;e||(o=ae(r.shape,s));const i=jt(pt(rt(n,"float32"),L(r,o))),a=ie(i,s,e);return{mean:r,variance:a}}const If=P({moments_:C2});function $2(n,t){let e=E(n,"a","notEqual","string_or_numeric"),s=E(t,"b","notEqual","string_or_numeric");[e,s]=ee(e,s),yt(e.shape,s.shape);const r={a:e,b:s};return F.runKernel(Hc,r)}const _l=P({notEqual_:$2});function I2(n,t,e=1,s=0,r="int32"){if(t<2)throw new Error(`Error in oneHot: depth must be >=2, but it is ${t}`);const i={indices:E(n,"indices","oneHot","int32")},a={dtype:r,depth:t,onValue:e,offValue:s};return F.runKernel(jc,i,a)}const B0=P({oneHot_:I2});function k2(n){const e={x:E(n,"x","onesLike")};return F.runKernel(qc,e)}const bn=P({onesLike_:k2});function S2(n,t,e=0){const s=E(n,"x","pad");if(s.rank===0)throw new Error("pad(scalar) is not defined. Pass non-scalar to pad");const r={paddings:t,constantValue:e},o={x:s};return F.runKernel(Kc,o,r)}const kf=P({pad_:S2});function N2(n,t,e){const s=E(n,"x","spaceToBatchND");S(s.rank>=1+t.length,()=>`input rank ${s.rank} should be > than [blockShape] ${t.length}`),S(e.length===t.length,()=>`paddings.shape[0] ${e.length} must be equal to [blockShape] ${t.length}`),S(s.shape.reduce((i,a,l)=>l>0&&l<=t.length?i&&(a+e[l-1][0]+e[l-1][1])%t[l-1]===0:i,!0),()=>`input spatial dimensions ${s.shape.slice(1)} with paddings ${e.toString()} must be divisible by blockShapes ${t.toString()}`);const r={x:s},o={blockShape:t,paddings:e};return F.runKernel(ou,r,o)}const Sf=P({spaceToBatchND_:N2});function T2(n,t,e,s,r,o,i){r==null&&(r=[1,1]),o==null&&(o=1),s===0&&(s="valid");const a=E(n,"x","maxPool");let l=a,c=!1;a.rank===3&&(c=!0,l=L(a,[1,a.shape[0],a.shape[1],a.shape[2]])),S(Te(o,r),()=>`Error in pool: Either strides or dilations must be 1. Got strides ${o} and dilations '${r}'`);const u=yn(l.shape,t,o,r,s),h=[u.dilationHeight,u.dilationWidth];let d;s==="same"?d=R2([u.filterHeight,u.filterWidth],h):d=[[0,0],[0,0]];const f=h[0]===1&&h[1]===1,[p,m]=E2([u.inHeight,u.inWidth],h,d),g=f?s:"valid",x=f?l:Sf(l,h,p),w=(e==="avg"?()=>ff(x,t,o,g,i):()=>$f(x,t,o,g,i))(),y=f?w:pf(w,h,m);return c?L(y,[y.shape[1],y.shape[2],y.shape[3]]):y}function E2(n,t,e){const s=e.map(u=>u[0]),r=e.map(u=>u[1]),o=n.concat(s,r),i=t.map((u,h)=>(u-o[h]%u)%u),a=r.map((u,h)=>u+i[h]),l=t.map((u,h)=>[s[h],a[h]]),c=t.map((u,h)=>[0,i[h]]);return[l,c]}function R2(n,t){const s=n.map((i,a)=>i+(i-1)*(t[a]-1)).map(i=>i-1),r=s.map(i=>Math.floor(i/2)),o=s.map((i,a)=>i-r[a]);return s.map((i,a)=>[r[a],o[a]])}const A2=P({pool_:T2});function D2(n,t){const e=E(n,"x","prelu"),s=E(t,"alpha","prelu"),r={x:e,alpha:s};return F.runKernel(Yc,r)}const Nf=P({prelu_:D2});function _2(n,t=null,e=!1){let s=E(n,"x","prod");s.dtype==="bool"&&(s=rt(s,"int32"));const r={x:s},o={axis:t,keepDims:e};return F.runKernel(Zc,r,o)}const F2=P({prod_:_2});var hl={exports:{}},O2=hl.exports,Em;function M2(){return Em||(Em=1,(function(n){(function(t,e,s){function r(l){var c=this,u=a();c.next=function(){var h=2091639*c.s0+c.c*23283064365386963e-26;return c.s0=c.s1,c.s1=c.s2,c.s2=h-(c.c=h|0)},c.c=1,c.s0=u(" "),c.s1=u(" "),c.s2=u(" "),c.s0-=u(l),c.s0<0&&(c.s0+=1),c.s1-=u(l),c.s1<0&&(c.s1+=1),c.s2-=u(l),c.s2<0&&(c.s2+=1),u=null}function o(l,c){return c.c=l.c,c.s0=l.s0,c.s1=l.s1,c.s2=l.s2,c}function i(l,c){var u=new r(l),h=c&&c.state,d=u.next;return d.int32=function(){return u.next()*4294967296|0},d.double=function(){return d()+(d()*2097152|0)*11102230246251565e-32},d.quick=d,h&&(typeof h=="object"&&o(h,u),d.state=function(){return o(u,{})}),d}function a(){var l=4022871197,c=function(u){u=String(u);for(var h=0;h<u.length;h++){l+=u.charCodeAt(h);var d=.02519603282416938*l;l=d>>>0,d-=l,d*=l,l=d>>>0,d-=l,l+=d*4294967296}return(l>>>0)*23283064365386963e-26};return c}e&&e.exports?e.exports=i:this.alea=i})(O2,n)})(hl)),hl.exports}var dl={exports:{}},L2=dl.exports,Rm;function P2(){return Rm||(Rm=1,(function(n){(function(t,e,s){function r(a){var l=this,c="";l.x=0,l.y=0,l.z=0,l.w=0,l.next=function(){var h=l.x^l.x<<11;return l.x=l.y,l.y=l.z,l.z=l.w,l.w^=l.w>>>19^h^h>>>8},a===(a|0)?l.x=a:c+=a;for(var u=0;u<c.length+64;u++)l.x^=c.charCodeAt(u)|0,l.next()}function o(a,l){return l.x=a.x,l.y=a.y,l.z=a.z,l.w=a.w,l}function i(a,l){var c=new r(a),u=l&&l.state,h=function(){return(c.next()>>>0)/4294967296};return h.double=function(){do var d=c.next()>>>11,f=(c.next()>>>0)/4294967296,p=(d+f)/(1<<21);while(p===0);return p},h.int32=c.next,h.quick=h,u&&(typeof u=="object"&&o(u,c),h.state=function(){return o(c,{})}),h}e&&e.exports?e.exports=i:this.xor128=i})(L2,n)})(dl)),dl.exports}var fl={exports:{}},z2=fl.exports,Am;function B2(){return Am||(Am=1,(function(n){(function(t,e,s){function r(a){var l=this,c="";l.next=function(){var h=l.x^l.x>>>2;return l.x=l.y,l.y=l.z,l.z=l.w,l.w=l.v,(l.d=l.d+362437|0)+(l.v=l.v^l.v<<4^(h^h<<1))|0},l.x=0,l.y=0,l.z=0,l.w=0,l.v=0,a===(a|0)?l.x=a:c+=a;for(var u=0;u<c.length+64;u++)l.x^=c.charCodeAt(u)|0,u==c.length&&(l.d=l.x<<10^l.x>>>4),l.next()}function o(a,l){return l.x=a.x,l.y=a.y,l.z=a.z,l.w=a.w,l.v=a.v,l.d=a.d,l}function i(a,l){var c=new r(a),u=l&&l.state,h=function(){return(c.next()>>>0)/4294967296};return h.double=function(){do var d=c.next()>>>11,f=(c.next()>>>0)/4294967296,p=(d+f)/(1<<21);while(p===0);return p},h.int32=c.next,h.quick=h,u&&(typeof u=="object"&&o(u,c),h.state=function(){return o(c,{})}),h}e&&e.exports?e.exports=i:this.xorwow=i})(z2,n)})(fl)),fl.exports}var pl={exports:{}},V2=pl.exports,Dm;function W2(){return Dm||(Dm=1,(function(n){(function(t,e,s){function r(a){var l=this;l.next=function(){var u=l.x,h=l.i,d,f;return d=u[h],d^=d>>>7,f=d^d<<24,d=u[h+1&7],f^=d^d>>>10,d=u[h+3&7],f^=d^d>>>3,d=u[h+4&7],f^=d^d<<7,d=u[h+7&7],d=d^d<<13,f^=d^d<<9,u[h]=f,l.i=h+1&7,f};function c(u,h){var d,f=[];if(h===(h|0))f[0]=h;else for(h=""+h,d=0;d<h.length;++d)f[d&7]=f[d&7]<<15^h.charCodeAt(d)+f[d+1&7]<<13;for(;f.length<8;)f.push(0);for(d=0;d<8&&f[d]===0;++d);for(d==8?f[7]=-1:f[d],u.x=f,u.i=0,d=256;d>0;--d)u.next()}c(l,a)}function o(a,l){return l.x=a.x.slice(),l.i=a.i,l}function i(a,l){a==null&&(a=+new Date);var c=new r(a),u=l&&l.state,h=function(){return(c.next()>>>0)/4294967296};return h.double=function(){do var d=c.next()>>>11,f=(c.next()>>>0)/4294967296,p=(d+f)/(1<<21);while(p===0);return p},h.int32=c.next,h.quick=h,u&&(u.x&&o(u,c),h.state=function(){return o(c,{})}),h}e&&e.exports?e.exports=i:this.xorshift7=i})(V2,n)})(pl)),pl.exports}var ml={exports:{}},U2=ml.exports,_m;function G2(){return _m||(_m=1,(function(n){(function(t,e,s){function r(a){var l=this;l.next=function(){var u=l.w,h=l.X,d=l.i,f,p;return l.w=u=u+1640531527|0,p=h[d+34&127],f=h[d=d+1&127],p^=p<<13,f^=f<<17,p^=p>>>15,f^=f>>>12,p=h[d]=p^f,l.i=d,p+(u^u>>>16)|0};function c(u,h){var d,f,p,m,g,x=[],b=128;for(h===(h|0)?(f=h,h=null):(h=h+"\0",f=0,b=Math.max(b,h.length)),p=0,m=-32;m<b;++m)h&&(f^=h.charCodeAt((m+32)%h.length)),m===0&&(g=f),f^=f<<10,f^=f>>>15,f^=f<<4,f^=f>>>13,m>=0&&(g=g+1640531527|0,d=x[m&127]^=f+g,p=d==0?p+1:0);for(p>=128&&(x[(h&&h.length||0)&127]=-1),p=127,m=512;m>0;--m)f=x[p+34&127],d=x[p=p+1&127],f^=f<<13,d^=d<<17,f^=f>>>15,d^=d>>>12,x[p]=f^d;u.w=g,u.X=x,u.i=p}c(l,a)}function o(a,l){return l.i=a.i,l.w=a.w,l.X=a.X.slice(),l}function i(a,l){a==null&&(a=+new Date);var c=new r(a),u=l&&l.state,h=function(){return(c.next()>>>0)/4294967296};return h.double=function(){do var d=c.next()>>>11,f=(c.next()>>>0)/4294967296,p=(d+f)/(1<<21);while(p===0);return p},h.int32=c.next,h.quick=h,u&&(u.X&&o(u,c),h.state=function(){return o(c,{})}),h}e&&e.exports?e.exports=i:this.xor4096=i})(U2,n)})(ml)),ml.exports}var gl={exports:{}},H2=gl.exports,Fm;function q2(){return Fm||(Fm=1,(function(n){(function(t,e,s){function r(a){var l=this,c="";l.next=function(){var h=l.b,d=l.c,f=l.d,p=l.a;return h=h<<25^h>>>7^d,d=d-f|0,f=f<<24^f>>>8^p,p=p-h|0,l.b=h=h<<20^h>>>12^d,l.c=d=d-f|0,l.d=f<<16^d>>>16^p,l.a=p-h|0},l.a=0,l.b=0,l.c=-1640531527,l.d=1367130551,a===Math.floor(a)?(l.a=a/4294967296|0,l.b=a|0):c+=a;for(var u=0;u<c.length+20;u++)l.b^=c.charCodeAt(u)|0,l.next()}function o(a,l){return l.a=a.a,l.b=a.b,l.c=a.c,l.d=a.d,l}function i(a,l){var c=new r(a),u=l&&l.state,h=function(){return(c.next()>>>0)/4294967296};return h.double=function(){do var d=c.next()>>>11,f=(c.next()>>>0)/4294967296,p=(d+f)/(1<<21);while(p===0);return p},h.int32=c.next,h.quick=h,u&&(typeof u=="object"&&o(u,c),h.state=function(){return o(c,{})}),h}e&&e.exports?e.exports=i:this.tychei=i})(H2,n)})(gl)),gl.exports}var xl={exports:{}};const j2={},X2=Object.freeze(Object.defineProperty({__proto__:null,default:j2},Symbol.toStringTag,{value:"Module"})),K2=D$(X2);var Y2=xl.exports,Om;function Z2(){return Om||(Om=1,(function(n){(function(t,e,s){var r=256,o=6,i=52,a="random",l=s.pow(r,o),c=s.pow(2,i),u=c*2,h=r-1,d;function f(y,v,$){var N=[];v=v==!0?{entropy:!0}:v||{};var T=x(g(v.entropy?[y,w(e)]:y??b(),3),N),I=new p(N),k=function(){for(var C=I.g(o),R=l,D=0;C<c;)C=(C+D)*r,R*=r,D=I.g(1);for(;C>=u;)C/=2,R/=2,D>>>=1;return(C+D)/R};return k.int32=function(){return I.g(4)|0},k.quick=function(){return I.g(4)/4294967296},k.double=k,x(w(I.S),e),(v.pass||$||function(C,R,D,M){return M&&(M.S&&m(M,I),C.state=function(){return m(I,{})}),D?(s[a]=C,R):C})(k,T,"global"in v?v.global:this==s,v.state)}function p(y){var v,$=y.length,N=this,T=0,I=N.i=N.j=0,k=N.S=[];for($||(y=[$++]);T<r;)k[T]=T++;for(T=0;T<r;T++)k[T]=k[I=h&I+y[T%$]+(v=k[T])],k[I]=v;(N.g=function(C){for(var R,D=0,M=N.i,O=N.j,z=N.S;C--;)R=z[M=h&M+1],D=D*r+z[h&(z[M]=z[O=h&O+R])+(z[O]=R)];return N.i=M,N.j=O,D})(r)}function m(y,v){return v.i=y.i,v.j=y.j,v.S=y.S.slice(),v}function g(y,v){var $=[],N=typeof y,T;if(v&&N=="object")for(T in y)try{$.push(g(y[T],v-1))}catch{}return $.length?$:N=="string"?y:y+"\0"}function x(y,v){for(var $=y+"",N,T=0;T<$.length;)v[h&T]=h&(N^=v[h&T]*19)+$.charCodeAt(T++);return w(v)}function b(){try{var y;return d&&(y=d.randomBytes)?y=y(r):(y=new Uint8Array(r),(t.crypto||t.msCrypto).getRandomValues(y)),w(y)}catch{var v=t.navigator,$=v&&v.plugins;return[+new Date,t,$,t.screen,w(e)]}}function w(y){return String.fromCharCode.apply(0,y)}if(x(s.random(),e),n.exports){n.exports=f;try{d=K2}catch{}}else s["seed"+a]=f})(typeof self<"u"?self:Y2,[],Math)})(xl)),xl.exports}var eh,Mm;function J2(){if(Mm)return eh;Mm=1;var n=M2(),t=P2(),e=B2(),s=W2(),r=G2(),o=q2(),i=Z2();return i.alea=n,i.xor128=t,i.xorwow=e,i.xorshift7=s,i.xor4096=r,i.tychei=o,eh=i,eh}var Tf=J2();class V0{constructor(t,e,s,r,o){this.mean=t,this.stdDev=e,this.dtype=s,this.nextVal=NaN,this.truncated=r,this.truncated&&(this.upper=this.mean+this.stdDev*2,this.lower=this.mean-this.stdDev*2);const i=o||Math.random();this.random=Tf.alea(i.toString())}nextValue(){if(!isNaN(this.nextVal)){const r=this.nextVal;return this.nextVal=NaN,r}let t,e,s=!1;for(;!s;){let r,o,i;do r=2*this.random()-1,o=2*this.random()-1,i=r*r+o*o;while(i>=1||i===0);const a=Math.sqrt(-2*Math.log(i)/i);t=this.mean+this.stdDev*r*a,e=this.mean+this.stdDev*o*a,(!this.truncated||this.isValidTruncated(t))&&(s=!0)}return(!this.truncated||this.isValidTruncated(e))&&(this.nextVal=this.convertValue(e)),this.convertValue(t)}convertValue(t){return this.dtype==null||this.dtype==="float32"?t:Math.round(t)}isValidTruncated(t){return t<=this.upper&&t>=this.lower}}class Q2{constructor(t=0,e=1,s,r){if(this.canReturnFloat=()=>this.dtype==null||this.dtype==="float32",this.min=t,this.range=e-t,this.dtype=s,r==null&&(r=Math.random()),typeof r=="number"&&(r=r.toString()),!this.canReturnFloat()&&this.range<=1)throw new Error(`The difference between ${t} - ${e} <= 1 and dtype is not float`);this.random=Tf.alea(r)}convertValue(t){return this.canReturnFloat()?t:Math.round(t)}nextValue(){return this.convertValue(this.min+this.range*this.random())}}function tN(n,t=0,e=1,s,r){if(ks(n),s!=null&&s==="bool")throw new Error(`Unsupported data type ${s}`);const o=new V0(t,e,s,!1,r),i=$t(n,s);for(let a=0;a<i.values.length;a++)i.values[a]=o.nextValue();return i.toTensor()}const eN=P({randomNormal_:tN});function nN(n,t=0,e=1,s="float32",r){ks(n);const o=$t(n,s),i=new Q2(t,e,null,r);for(let a=0;a<o.values.length;a++)o.values[a]=i.nextValue();return o.toTensor()}const va=P({randomUniform_:nN});function hi(n,t,e=1,s="float32"){if(e===0)throw new Error("Cannot have a step of zero");const r={start:n,stop:t,step:e,dtype:s};return F.runKernel(Zd,{},r)}function sN(n){const e={input:E(n,"input","real")};return F.runKernel(Jd,e)}const Fl=P({real_:sN});function rN(n){const e={x:E(n,"x","reciprocal")};return F.runKernel(ea,e)}const oN=P({reciprocal_:rN});function iN(n){const e={x:E(n,"x","relu")};return F.runKernel(na,e)}const Mr=P({relu_:iN});function aN(n){const e={x:E(n,"x","relu6")};return F.runKernel(sa,e)}const W0=P({relu6_:aN});function lN(n,t){const s={x:E(n,"x","reverse")},r={dims:t};return F.runKernel(eu,s,r)}const kr=P({reverse_:lN});function cN(n){const e={x:E(n,"x","round")};return F.runKernel(ra,e)}const U0=P({round_:cN});function uN(n){const e={x:E(n,"x","rsqrt","float32")};return F.runKernel(oa,e)}const G0=P({rsqrt_:uN});function hN(n){const e={x:E(n,"x","selu")};return F.runKernel(ia,e)}const H0=P({selu_:hN});function dN(n,t,e,s,r,o=[1,1],i="NHWC"){const a=E(n,"x","separableConv2d"),l=E(t,"depthwiseFilter","separableConv2d"),c=E(e,"pointwiseFilter","separableConv2d");let u=a,h=!1;if(a.rank===3&&(h=!0,u=L(a,[1,a.shape[0],a.shape[1],a.shape[2]])),i==="NCHW")throw new Error("separableConv2d currently does not support dataFormat NCHW; only NHWC is supported");S(u.rank===4,()=>`Error in separableConv2d: input must be rank 4, but got rank ${u.rank}.`),S(l.rank===4,()=>`Error in separableConv2d: depthwise filter must be rank 4, but got rank ${l.rank}.`),S(c.rank===4,()=>`Error in separableConv2d: pointwise filter must be rank 4, but got rank ${l.rank}.`),S(c.shape[0]===1,()=>`Error in separableConv2d: the first dimension of pointwise filter  must be 1, but got ${c.shape[0]}.`),S(c.shape[1]===1,()=>`Error in separableConv2d: the second dimension of pointwise filter must be 1, but got ${c.shape[1]}.`);const d=l.shape[2],f=l.shape[3];S(c.shape[2]===d*f,()=>`Error in separableConv2d: the third dimension of pointwise filter must be ${d*f}, but got ${c.shape[2]}.`);const p=xf(u,l,s,r,i,o),g=$r(p,c,1,"valid",i);return h?L(g,[g.shape[1],g.shape[2],g.shape[3]]):g}const q0=P({separableConv2d_:dN});function fN(n){const e={x:E(n,"x","sign")};return F.runKernel(ca,e)}const pN=P({sign_:fN});function mN(n){const e={x:E(n,"x","sin","float32")};return F.runKernel(aa,e)}const j0=P({sin_:mN});function gN(n){const e={x:E(n,"x","sinh")};return F.runKernel(la,e)}const X0=P({sinh_:gN});function xN(n,t,e){const s=E(n,"x","slice1d");return S(s.rank===1,()=>`slice1d expects a rank-1 tensor, but got a rank-${s.rank} tensor`),Ht(s,[t],[e])}const Ef=P({slice1d_:xN});function bN(n,t,e){const s=E(n,"x","slice2d");return S(s.rank===2,()=>`slice2d expects a rank-2 tensor, but got a rank-${s.rank} tensor`),Ht(s,t,e)}const K0=P({slice2d_:bN});function yN(n,t,e){const s=E(n,"x","slice3d");return S(s.rank===3,()=>`slice3d expects a rank-3 tensor, but got a rank-${s.rank} tensor`),Ht(s,t,e)}const Rf=P({slice3d_:yN});function wN(n,t,e){const s=E(n,"x","slice4d");return S(s.rank===4,()=>`slice4d expects a rank-4 tensor, but got a rank-${s.rank} tensor`),Ht(s,t,e)}const Ol=P({slice4d_:wN});function vN(n,t=-1){const e=E(n,"logits","softmax","float32");if(t===-1&&(t=e.rank-1),t!==e.rank-1)throw Error(`Softmax along a non-last dimension is not yet supported. Logits was rank ${e.rank} and dim was ${t}`);const s={logits:e},r={dim:t};return F.runKernel(au,s,r)}const Af=P({softmax_:vN});function CN(n){S(n.dtype==="complex64",()=>`The dtype for tf.spectral.fft() must be complex64 but got ${n.dtype}.`);const t={input:n};return F.runKernel(Bd,t)}const Y0=P({fft_:CN});function $N(n){S(n.dtype==="complex64",()=>`The dtype for tf.spectral.ifft() must be complex64 but got ${n.dtype}.`);const t={input:n};return F.runKernel(Ud,t)}const Ph=P({ifft_:$N});function IN(n){const t=n.shape[n.shape.length-1],e=n.size/t;let s;if(t<=2){const r=L(n,[e,t]);s=Ph(r)}else{const r=[e,2*(t-1)],o=L(Fl(n),[e,t]),i=L(wf(n),[e,t]),a=kr(Ht(o,[0,1],[e,t-2]),1),l=_(kr(Ht(i,[0,1],[e,t-2]),1),Ot(-1)),c=Ue([o,a],1),u=Ue([i,l],1),h=L(br(c,u),[r[0],r[1]]);s=Ph(h)}if(s=Fl(s),n.rank===3&&n.shape[0]!==0){const r=s,o=n.shape[0];s=L(s,[o,s.shape[0]/o,s.shape[1]]),r.dispose()}return s}const kN=P({irfft_:IN});function SN(n,t,e=0){const r={x:E(n,"x","split")},o={numOrSizeSplits:t,axis:e};return F.runKernel(iu,r,o)}const an=P({split_:SN});function NN(n,t){S(n.dtype==="float32",()=>`The dtype for rfft() must be real value but got ${n.dtype}`);let e=n.shape[n.shape.length-1];const s=n.size/e;let r;if(t!=null&&t<e){const p=n.shape.map(g=>0),m=n.shape.map(g=>g);m[n.shape.length-1]=t,r=Ht(n,p,m),e=t}else if(t!=null&&t>e){const p=n.shape.map(m=>m);p[n.shape.length-1]=t-e,r=Ue([n,xe(p)],n.shape.length-1),e=t}else r=n;const o=Et(r),i=L(br(r,o),[s,e]),a=Y0(i),l=Math.floor(e/2)+1,c=Fl(a),u=wf(a),h=an(c,[l,e-l],c.shape.length-1),d=an(u,[l,e-l],u.shape.length-1),f=r.shape.slice();return f[r.shape.length-1]=l,L(br(h[0],d[0]),f)}const TN=P({rfft_:NN});function EN(n,t){let e=E(n,"a","squaredDifference"),s=E(t,"b","squaredDifference");[e,s]=ee(e,s),yt(e.shape,s.shape);const r={a:e,b:s},o={};return F.runKernel(fa,r,o)}const RN=P({squaredDifference_:EN});function AN(n,t){const e=E(n,"x","squeeze","string_or_numeric");return L(e,Hs(e.shape,t).newShape)}const Ca=P({squeeze_:AN});function DN(n,t=0){const e=x0(n,"tensors","stack","string_or_numeric");S(e.length>=1,()=>"Pass at least one tensor to tf.stack"),e.length>0&&S(t<=e[0].rank,()=>"Axis must be <= rank of the tensor");const s=e,r={axis:t};return F.runKernel(Xc,s,r)}const vs=P({stack_:DN});function _N(n,t=0){const s={x:E(n,"x","step")},r={alpha:t};return F.runKernel(ba,s,r)}const $a=P({step_:_N});function FN(n,t,e,s,r=0,o=0,i=0,a=0,l=0){const u={x:E(n,"x","stridedSlice","string_or_numeric")},h={begin:t,end:e,strides:s,beginMask:r,endMask:o,ellipsisMask:i,newAxisMask:a,shrinkAxisMask:l};return F.runKernel(sf,u,h)}const ON=P({stridedSlice_:FN});function MN(n){const e={x:E(n,"x","tan","float32")};return F.runKernel(ma,e)}const LN=P({tan_:MN});function Ze(n,t){Nx(n);const e=du(n,t);if(e.length!==1)throw new Error("tensor1d() requires values to be a flat/TypedArray");return fu(n,null,e,t)}function nh(n,t,e){if(Nx(n),t!=null&&t.length!==2)throw new Error("tensor2d() requires shape to have two numbers");const s=du(n,e);if(s.length!==2&&s.length!==1)throw new Error("tensor2d() requires values to be number[][] or flat/TypedArray");if(s.length===1&&t==null)throw new Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");return fu(n,t,s,e)}function Z0(n,t,e){const s=t.rank>1?t.shape[t.rank-1]:1,r=t.rank>1?t.rank-1:1,o=`Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: ${e.shape}, indices.shape: ${t.shape}, shape: ${n}, sliceDim: ${s}, and batchDim: ${r}.`;if(e.rank<r)throw new Error(o+` update.rank < ${r}. `);if(n.length<s+(e.rank-r))throw new Error(o+` Output shape length < ${s+(e.rank-r)}`);if(e.rank!==r+n.length-s)throw new Error(o+` update.rank != ${r+n.length-s}`);for(let i=0;i<r;++i)if(e.shape[i]!==t.shape[i])throw new Error(o+` updates.shape[${i}] (${e.shape[i]}) != indices.shape[${i}] (${t.shape[i]}).`);for(let i=0;i<e.rank-r;++i)if(e.shape[i+r]!==n[i+s])throw new Error(o+` updates.shape[${i+r}] (${e.shape[i+r]}) != shape[${i+r}] (${n[i+r]})`)}function PN(n,t,e){if(t.rank<1)throw new Error(`tf.scatterND() expects the indices to be rank 1 or higher, but the rank was ${t.rank}.`);if(n.rank<1)throw new Error(`tf.scatterND() expects the updates to be rank 1 or higher, but the rank was ${n.rank}.`);if(t.dtype!=="int32")throw new Error(`The dtype of 'indices' should be int32, but got dtype: ${t.dtype}`);if(e.length<1)throw new Error(`Output rank must be greater or equal to 1, but got shape: ${e}`);if(e.length===0){if(t.size===0)throw new Error(`Indices specified for empty output. indices shape: ${t.shape}`);if(n.size===0)throw new Error(`Updates specified for empty output. updates shape: ${n.shape}`)}Z0(e,t,n)}function Lr(n,t,e){const s=t.shape.length,r=s>1?t.shape[s-1]:1,o=e.length;let i=1;for(let h=r;h<o;++h)i*=e[h];const a=r<1?1:r,l=q(t.shape)/a,c=[...ut(e.slice(0,r)),1],u=q(e);return{sliceRank:r,numUpdates:l,sliceSize:i,strides:c,outputSize:u}}function zN(n,t=1,e=!0){const s=E(n,"x","topk");if(s.rank===0)throw new Error("topk() expects the input to be of rank 1 or higher");const r=s.shape[s.shape.length-1];if(t<0)throw new Error(`'k' passed to topk() must be >= 0 but got ${t}`);if(t>r)throw new Error(`'k' passed to topk() must be <= the last dimension (${r}) but got ${t}`);const o={x:s},i={k:t,sorted:e},[a,l]=F.runKernel(rf,o,i);return{values:a,indices:l}}const BN=P({topk_:zN});function VN(n,t=0,e=1,s,r){if(ks(n),s!=null&&s==="bool")throw new Error("Unsupported data type $ { dtype }");const o=new V0(t,e,s,!0,r),i=$t(n,s);for(let a=0;a<i.values.length;a++)i.values[a]=o.nextValue();return i.toTensor()}const J0=P({truncatedNormal_:VN});function WN(n,t=0){const e=E(n,"x","unique","string_or_numeric");S(e.rank>0,()=>"The input tensor must be at least 1D");const s={x:e},r={axis:t},[o,i]=F.runKernel(af,s,r);return{values:o,indices:i}}const UN=P({unique_:WN});function GN(n,t,e){const s=E(n,"x","unsortedSegmentSum"),r=E(t,"segmentIds","unsortedSegmentSum","int32");S(ao(e),()=>"numSegments must be of dtype int");const o={x:s,segmentIds:r},i={numSegments:e};return F.runKernel(cu,o,i)}const Q0=P({unsortedSegmentSum_:GN});function HN(n,t=0){const e=E(n,"x","unstack","string_or_numeric");S(t>=-e.shape.length&&t<e.shape.length,()=>`Axis = ${t} is not in [-${e.shape.length}, ${e.shape.length})`);const s={value:e},r={axis:t};return F.runKernel(lu,s,r)}const Sr=P({unstack_:HN});function qN(n,t=!0,e,s){return F.makeVariable(n,t,e,s)}function tb(n,t){const e=[];for(let o=0;o<t.length;o++)t[o]&&e.push(o);const s=$t(n,"int32"),r=$t([e.length,n.length],"int32");for(let o=0;o<e.length;o++){const i=s.indexToLoc(e[o]),a=o*n.length;r.values.set(i,a)}return r.toTensor()}function jN(n,t,e){const s=E(n,"x","transpose");if(t==null&&(t=s.shape.map((i,a)=>a).reverse()),S(s.rank===t.length,()=>`Error in transpose: rank of input ${s.rank} must match length of perm ${t}.`),t.forEach(i=>{S(i>=0&&i<s.rank,()=>`All entries in 'perm' must be between 0 and ${s.rank-1} but got ${t}`)}),s.rank<=1)return s.clone();const r={x:s},o={perm:t};return s.dtype==="complex64"?B(()=>{let i=Fl(s),a=wf(s);return i=F.runKernel(eo,{x:i},o),a=F.runKernel(eo,{x:a},o),e&&(a=te(a)),br(i,a)}):F.runKernel(eo,r,o)}const Tt=P({transpose_:jN});function XN(n,t){if(t==null)return n.shape.slice();if(Mt(n.shape,t))return t;if(n.shape.length===t.length){const e=[];for(let s=0;s<n.shape.length;s++)t[s]==null&&n.shape[s]!=null?e.push(n.shape[s]):e.push(t[s]);return e}return t}function KN(n,t,e,s){const r=E(n,"x","dropout");if(S(r.dtype==="float32",()=>`x has to be a floating point tensor since it's going to be scaled, but got a ${r.dtype} tensor instead.`),S(t>=0&&t<1,()=>`rate must be a float in the range [0, 1), but got ${t}.`),t===0)return n instanceof le?r.clone():r;const o=XN(r,e),i=1-t,a=ft(yu(J(va(o,0,1,"float32",s),i)),i);return _(r,a)}const YN=P({dropout_:KN});function ZN(n,t,e,s,r,o="NHWC",i){let a=n;n.rank===3&&(a=L(n,[1,n.shape[0],n.shape[1],n.shape[2]]));let l=t;l.rank===3&&(l=L(t,[1,t.shape[0],t.shape[1],t.shape[2]])),S(a.rank===4,()=>`Error in conv2dDerFilter: input must be rank 4, but got shape ${a.shape}.`),S(l.rank===4,()=>`Error in conv2dDerFilter: dy must be rank 4, but got shape ${l.shape}.`),S(e.length===4,()=>`Error in conv2dDerFilter: filterShape must be length 4, but got ${e}.`);const c=o==="NHWC"?a.shape[3]:a.shape[1],u=o==="NHWC"?l.shape[3]:l.shape[1];S(c===e[2],()=>`Error in conv2dDerFilter: depth of input ${c}) must match input depth in filter (${e[2]}.`),S(u===e[3],()=>`Error in conv2dDerFilter: depth of dy (${u}) must match output depth for filter (${e[3]}).`),qe("conv2dDerFilter",r,i);const h={x:a,dy:l},d={strides:s,pad:r,dataFormat:o,dimRoundingMode:i,filterShape:e};return F.runKernel(Ed,h,d)}const Df=P({conv2DBackpropFilter_:ZN});function _f(n,t,e){if(e==null||e==="linear")return n;if(e==="relu")return _(n,$a(t));throw new Error(`Cannot compute gradient for fused activation ${e}.`)}function Ff(n,t){let e=t;const s=fe(n.shape,t.shape);return s.length>0&&(e=dt(e,s)),L(e,n.shape)}function Of(n,t,e,s){if(t==="linear")return n;if(t==="relu")return Mr(n);if(t==="elu")return xu(n);if(t==="relu6")return W0(n);if(t==="prelu")return Nf(n,e);if(t==="leakyrelu")return vf(n,s);if(t==="sigmoid")return ko(n);throw new Error(`Unknown fused activation ${t}.`)}const Mf=(n,t)=>!(n>0)||t==="linear";function JN({x:n,filter:t,strides:e,pad:s,dataFormat:r="NHWC",dilations:o=[1,1],dimRoundingMode:i,bias:a,activation:l="linear",preluActivationWeights:c,leakyreluAlpha:u}){if(l=l||"linear",Mf(F.state.gradientDepth,l)===!1){S(r==="NHWC",()=>`Error in fused conv2d: got dataFormat of ${r} but only NHWC is currently supported for the case of gradient depth is 0 and the activation is not linear.`);let $=$r(n,t,e,s,r,o,i);return a!=null&&($=J($,a)),Of($,l,c,u)}const h=E(n,"x","conv2d","float32"),d=E(t,"filter","conv2d","float32");let f=h,p=!1;h.rank===3&&(p=!0,f=L(h,[1,h.shape[0],h.shape[1],h.shape[2]])),S(f.rank===4,()=>`Error in fused conv2d: input must be rank 4, but got rank ${f.rank}.`),S(d.rank===4,()=>`Error in fused conv2d: filter must be rank 4, but got rank ${d.rank}.`),qe("fused conv2d",s,i);const m=r==="NHWC"?f.shape[3]:f.shape[1];S(d.shape[2]===m,()=>`Error in conv2d: depth of input (${m}) must match input depth for filter ${d.shape[2]}.`),S(Te(e,o),()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${e} and dilations '${o}'`);const g=Ce(f.shape,d.shape,e,o,s,i);let x;a!=null&&(x=E(a,"bias","fused conv2d"),[x]=ee(x,h),r==="NHWC"?yt(g.outShape,x.shape):(S(x.shape.length<=1,()=>`Error in fused conv2d: only supports scalar or 1-D Tensor bias for NCHW format but got the bias of rank-${x.shape.length}.`),S(x.shape.length===0||x.shape[0]===g.outChannels||x.shape[0]===1,()=>`Error in fused conv2d: bias shape (${x.shape}) is not compatible with the number of output channels (${g.outChannels})`)));let b;if(c!=null){const $=c.shape;if(S($.length<=1||$.length===3,()=>`Error in fused conv2d: only supports scalar, 1-D Tensor or 3-D Tensor PReLU activation weights but got a tensor of rank-${$.length}.`),$.length===1)S($[0]===1||$[0]===g.outChannels,()=>`Error in fused conv2d: PReLU activation weights (${$}) is not compatible with the number of output channels (${g.outChannels}).`);else if($.length===3)try{yt($,g.outShape)}catch{const T=`Error in fused conv2d: PReLU activation weights (${$}) is not compatible with the output shape of the conv2d (${g.outShape}).`;throw Error(T)}b=E(c,"prelu weights","fused conv2d")}const w=($,N)=>{S(r==="NHWC",()=>`Error in gradient of fused conv2D: got dataFormat of ${r} but only NHWC is currently supported.`);const[T,I,k,C]=N,R=_f($,k,l);S(vr(o),()=>`Error in gradient of fused conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${o}'`);const D=mf(I.shape,R,T,e,s),M=Df(I,R,T.shape,e,s),O=[D,M];if(C!=null){const z=Ff(C,R);O.push(z)}return O},y={x:f,filter:d,bias:x,preluActivationWeights:b},v={strides:e,pad:s,dataFormat:r,dilations:o,dimRoundingMode:i,activation:l,leakyreluAlpha:u};return a==null?ho((N,T,I)=>{let k=F.runKernel(Nl,y,v);return I([T,N,k]),p&&(k=L(k,[k.shape[1],k.shape[2],k.shape[3]])),{value:k,gradFunc:w}})(f,d):ho((N,T,I,k)=>{let C=F.runKernel(Nl,y,v);return k([T,N,C,I]),p&&(C=L(C,[C.shape[1],C.shape[2],C.shape[3]])),{value:C,gradFunc:w}})(f,d,x)}const QN=P({fusedConv2d_:JN});function tT(n,t,e,s,r,o=[1,1],i){let a=n;n.rank===3&&(a=L(n,[1,n.shape[0],n.shape[1],n.shape[2]]));let l=t;l.rank===3&&(l=L(t,[1,t.shape[0],t.shape[1],t.shape[2]]));const c={x:a,dy:l},u={strides:s,pad:r,dimRoundingMode:i,dilations:o,filterShape:e};return F.runKernel(Md,c,u)}const eT=P({depthwiseConv2dNativeBackpropFilter_:tT});function nT(n,t,e,s,r,o=[1,1],i){let a=t,l=!1;t.rank===3&&(l=!0,a=L(t,[1,t.shape[0],t.shape[1],t.shape[2]]));const c={dy:a,filter:e},u={strides:s,pad:r,dimRoundingMode:i,dilations:o,inputShape:n},h=F.runKernel(Ld,c,u);return l?L(h,[h.shape[1],h.shape[2],h.shape[3]]):h}const sT=P({depthwiseConv2dNativeBackpropInput_:nT});function rT({a:n,b:t,transposeA:e=!1,transposeB:s=!1,bias:r,activation:o="linear",preluActivationWeights:i,leakyreluAlpha:a=.2}){if(Mf(F.state.gradientDepth,o)===!1){let C=Ft(n,t,e,s);return r!=null&&(C=J(C,r)),Of(C,o,i,a)}let l=E(n,"a","fused matMul"),c=E(t,"b","fused matMul");[l,c]=ee(l,c);const u=e?l.shape[l.rank-2]:l.shape[l.rank-1],h=s?c.shape[c.rank-1]:c.shape[c.rank-2],d=e?l.shape[l.rank-1]:l.shape[l.rank-2],f=s?c.shape[c.rank-2]:c.shape[c.rank-1],p=l.shape.slice(0,-2),m=c.shape.slice(0,-2),g=q(p),x=q(m);S(u===h,()=>`Error in fused matMul: inner shapes (${u}) and (${h}) of Tensors with shapes ${l.shape} and ${c.shape} and transposeA=${e} and transposeB=${s} must match.`);const w=yt(l.shape.slice(0,-2),c.shape.slice(0,-2)).concat([d,f]),y=e?L(l,[g,u,d]):L(l,[g,d,u]),v=s?L(c,[x,f,h]):L(c,[x,h,f]);let $;r!=null&&($=E(r,"bias","fused matMul"),[$]=ee($,l),yt(w,$.shape));let N;i!=null&&(N=E(i,"prelu weights","fused matMul"));const T=(C,R)=>{const[D,M,O,z]=R,G=_f(L(C,O.shape),O,o);let V,U;if(!e&&!s?(V=Ft(G,M,!1,!0),U=Ft(D,G,!0,!1)):!e&&s?(V=Ft(G,M,!1,!1),U=Ft(G,D,!0,!1)):e&&!s?(V=Ft(M,G,!1,!0),U=Ft(D,G,!1,!1)):(V=Ft(M,G,!0,!0),U=Ft(G,D,!0,!0)),r!=null){const j=Ff(z,G);return[V,U,j]}else return[V,U]},I={a:y,b:v,bias:$,preluActivationWeights:N},k={transposeA:e,transposeB:s,activation:o,leakyreluAlpha:a};return r==null?ho((R,D,M)=>{const O=F.runKernel(Sl,I,k);return M([R,D,O]),{value:L(O,w),gradFunc:T}})(y,v):ho((R,D,M,O)=>{const z=F.runKernel(Sl,I,k);return O([R,D,z,M]),{value:L(z,w),gradFunc:T}})(y,v,$)}const Lm=P({fusedMatMul_:rT});function oT(n,t,e,s,r="bilinear",o=0){const i=E(n,"image","cropAndResize"),a=E(t,"boxes","cropAndResize","float32"),l=E(e,"boxInd","cropAndResize","int32"),c=a.shape[0];S(i.rank===4,()=>`Error in cropAndResize: image must be rank 4,but got rank ${i.rank}.`),S(a.rank===2&&a.shape[1]===4,()=>`Error in cropAndResize: boxes must be have size [${c},4] but had shape ${a.shape}.`),S(l.rank===1&&l.shape[0]===c,()=>`Error in cropAndResize: boxInd must be have size [${c}] but had shape ${a.shape}.`),S(s.length===2,()=>`Error in cropAndResize: cropSize must be of length 2, but got length ${s.length}.`),S(s[0]>=1&&s[1]>=1,()=>`cropSize must be atleast [1,1], but was ${s}`),S(r==="bilinear"||r==="nearest",()=>`method must be bilinear or nearest, but was ${r}`);const u={image:i,boxes:a,boxInd:l},h={method:r,extrapolationValue:o,cropSize:s};return F.runKernel(_d,u,h)}const iT=P({cropAndResize_:oT});function aT(n){const t=E(n,"image","flipLeftRight","float32");S(t.rank===4,()=>`Error in flipLeftRight: image must be rank 4,but got rank ${t.rank}.`);const e={image:t};return F.runKernel(Wd,e,{})}const lT=P({flipLeftRight_:aT});function cT(n){const t=E(n,"image","grayscaleToRGB"),e=t.rank-1,s=t.shape[e];S(t.rank>=2,()=>`Error in grayscaleToRGB: images must be at least rank 2, but got rank ${t.rank}.`),S(s===1,()=>`Error in grayscaleToRGB: last dimension of a grayscale image should be size 1, but got size ${s}.`);const r=new Array(t.rank);return r.fill(1,0,e),r[e]=3,Dn(t,r)}const uT=P({grayscaleToRGB_:cT});function hT(n){const t=E(n,"image","RGBToGrayscale"),e=t.rank-1,s=t.shape[e];S(t.rank>=2,()=>`Error in RGBToGrayscale: images must be at least rank 2, but got rank ${t.rank}.`),S(s===3,()=>`Error in RGBToGrayscale: last dimension of an RGB image should be size 3, but got size ${s}.`);const r=t.dtype,o=rt(t,"float32"),i=Ze([.2989,.587,.114]);let a;switch(t.rank){case 2:a=Ho("ij,j->i",o,i);break;case 3:a=Ho("ijk,k->ij",o,i);break;case 4:a=Ho("ijkl,l->ijk",o,i);break;case 5:a=Ho("ijklm,m->ijkl",o,i);break;case 6:a=Ho("ijklmn,n->ijklm",o,i);break;default:throw new Error("Not a valid tensor rank.")}return a=Ve(a,-1),rt(a,r)}const dT=P({rgbToGrayscale_:hT});function fT(n,t,e=0,s=.5){const r=E(n,"image","rotateWithOffset","float32");S(r.rank===4,()=>`Error in rotateWithOffset: image must be rank 4,but got rank ${r.rank}.`);const o={image:r},i={radians:t,fillValue:e,center:s};return F.runKernel(lf,o,i)}const pT=P({rotateWithOffset_:fT});function No(n,t,e,s,r,o){s==null&&(s=.5),r==null&&(r=Number.NEGATIVE_INFINITY),o==null&&(o=0);const i=n.shape[0];return e=Math.min(e,i),S(0<=s&&s<=1,()=>`iouThreshold must be in [0, 1], but was '${s}'`),S(n.rank===2,()=>`boxes must be a 2D tensor, but was of rank '${n.rank}'`),S(n.shape[1]===4,()=>`boxes must have 4 columns, but 2nd dimension was ${n.shape[1]}`),S(t.rank===1,()=>"scores must be a 1D tensor"),S(t.shape[0]===i,()=>`scores has incompatible shape with boxes. Expected ${i}, but was ${t.shape[0]}`),S(0<=o&&o<=1,()=>`softNmsSigma must be in [0, 1], but was '${o}'`),{maxOutputSize:e,iouThreshold:s,scoreThreshold:r,softNmsSigma:o}}function mT(n,t,e,s=.5,r=Number.NEGATIVE_INFINITY){const o=E(n,"boxes","nonMaxSuppression","float32"),i=E(t,"scores","nonMaxSuppression","float32"),a=No(o,i,e,s,r);e=a.maxOutputSize,s=a.iouThreshold,r=a.scoreThreshold;const l={maxOutputSize:e,iouThreshold:s,scoreThreshold:r};return F.runKernel(Xd,{boxes:o,scores:i},l)}const gT=P({nonMaxSuppression_:mT});function xT(n,t,e){const s=bT(n,t,e),r=s<0?-(s+1):s;n.splice(r,0,t)}function bT(n,t,e){return wT(n,t,e||yT)}function yT(n,t){return n>t?1:n<t?-1:0}function wT(n,t,e){let s=0,r=n.length,o=0,i=!1;for(;s<r;){o=s+(r-s>>>1);const a=e(t,n[o]);a>0?s=o+1:(r=o,i=!a)}return i?s:-s-1}function Lf(n,t,e,s,r){return Bf(n,t,e,s,r,0)}function Pf(n,t,e,s,r,o){return Bf(n,t,e,s,r,0,!1,o,!0)}function zf(n,t,e,s,r,o){return Bf(n,t,e,s,r,o,!0)}function Bf(n,t,e,s,r,o,i=!1,a=!1,l=!1){const c=[];for(let g=0;g<t.length;g++)t[g]>r&&c.push({score:t[g],boxIndex:g,suppressBeginIndex:0});c.sort(Pm);const u=o>0?-.5/o:0,h=[],d=[];for(;h.length<e&&c.length>0;){const g=c.pop(),{score:x,boxIndex:b,suppressBeginIndex:w}=g;if(x<r)break;let y=!1;for(let v=h.length-1;v>=w;--v){const $=vT(n,b,h[v]);if($>=s){y=!0;break}if(g.score=g.score*CT(s,u,$),g.score<=r)break}g.suppressBeginIndex=h.length,y||(g.score===x?(h.push(b),d.push(g.score)):g.score>r&&xT(c,g,Pm))}const f=h.length,p=e-f;a&&p>0&&(h.push(...new Array(p).fill(0)),d.push(...new Array(p).fill(0)));const m={selectedIndices:h};return i&&(m.selectedScores=d),l&&(m.validOutputs=f),m}function vT(n,t,e){const s=n.subarray(t*4,t*4+4),r=n.subarray(e*4,e*4+4),o=Math.min(s[0],s[2]),i=Math.min(s[1],s[3]),a=Math.max(s[0],s[2]),l=Math.max(s[1],s[3]),c=Math.min(r[0],r[2]),u=Math.min(r[1],r[3]),h=Math.max(r[0],r[2]),d=Math.max(r[1],r[3]),f=(a-o)*(l-i),p=(h-c)*(d-u);if(f<=0||p<=0)return 0;const m=Math.max(o,c),g=Math.max(i,u),x=Math.min(a,h),b=Math.min(l,d),w=Math.max(x-m,0)*Math.max(b-g,0);return w/(f+p-w)}function CT(n,t,e){const s=Math.exp(t*e*e);return e<=n?s:0}function Pm(n,t){return n.score-t.score||n.score===t.score&&t.boxIndex-n.boxIndex}async function $T(n,t,e,s=.5,r=Number.NEGATIVE_INFINITY){const o=E(n,"boxes","nonMaxSuppressionAsync"),i=E(t,"scores","nonMaxSuppressionAsync"),a=No(o,i,e,s,r);e=a.maxOutputSize,s=a.iouThreshold,r=a.scoreThreshold;const l=await Promise.all([o.data(),i.data()]),c=l[0],u=l[1],{selectedIndices:h}=Lf(c,u,e,s,r);return o!==n&&o.dispose(),i!==t&&i.dispose(),Ze(h,"int32")}const IT=$T;function kT(n,t,e,s=.5,r=Number.NEGATIVE_INFINITY,o=0){const i=E(n,"boxes","nonMaxSuppression"),a=E(t,"scores","nonMaxSuppression"),l=No(i,a,e,s,r,o);e=l.maxOutputSize,s=l.iouThreshold,r=l.scoreThreshold,o=l.softNmsSigma;const c={boxes:i,scores:a},u={maxOutputSize:e,iouThreshold:s,scoreThreshold:r,softNmsSigma:o},h=F.runKernel(Yd,c,u);return{selectedIndices:h[0],selectedScores:h[1]}}const ST=P({nonMaxSuppressionWithScore_:kT});async function NT(n,t,e,s=.5,r=Number.NEGATIVE_INFINITY,o=0){const i=E(n,"boxes","nonMaxSuppressionAsync"),a=E(t,"scores","nonMaxSuppressionAsync"),l=No(i,a,e,s,r,o);e=l.maxOutputSize,s=l.iouThreshold,r=l.scoreThreshold,o=l.softNmsSigma;const c=await Promise.all([i.data(),a.data()]),u=c[0],h=c[1],{selectedIndices:d,selectedScores:f}=zf(u,h,e,s,r,o);return i!==n&&i.dispose(),a!==t&&a.dispose(),{selectedIndices:Ze(d,"int32"),selectedScores:Ze(f)}}const TT=NT;function ET(n,t,e,s=.5,r=Number.NEGATIVE_INFINITY,o=!1){const i=E(n,"boxes","nonMaxSuppression"),a=E(t,"scores","nonMaxSuppression"),l=No(i,a,e,s,r,null),c=l.maxOutputSize,u=l.iouThreshold,h=l.scoreThreshold,d={boxes:i,scores:a},f={maxOutputSize:c,iouThreshold:u,scoreThreshold:h,padToMaxOutputSize:o},p=F.runKernel(Kd,d,f);return{selectedIndices:p[0],validOutputs:p[1]}}const RT=P({nonMaxSuppressionPadded_:ET});async function AT(n,t,e,s=.5,r=Number.NEGATIVE_INFINITY,o=!1){const i=E(n,"boxes","nonMaxSuppressionAsync"),a=E(t,"scores","nonMaxSuppressionAsync"),l=No(i,a,e,s,r,null),c=l.maxOutputSize,u=l.iouThreshold,h=l.scoreThreshold,[d,f]=await Promise.all([i.data(),a.data()]),{selectedIndices:p,validOutputs:m}=Pf(d,f,c,u,h,o);return i!==n&&i.dispose(),a!==t&&a.dispose(),{selectedIndices:Ze(p,"int32"),validOutputs:Ot(m,"int32")}}const DT=AT;function _T(n,t,e=!1,s=!1){const r=E(n,"images","resizeBilinear");S(r.rank===3||r.rank===4,()=>`Error in resizeBilinear: x must be rank 3 or 4, but got rank ${r.rank}.`),S(t.length===2,()=>`Error in resizeBilinear: new shape must 2D, but got shape ${t}.`),S(s===!1||e===!1,()=>"Error in resizeBilinear: If halfPixelCenters is true, alignCorners must be false.");let o=r,i=!1;r.rank===3&&(i=!0,o=L(r,[1,r.shape[0],r.shape[1],r.shape[2]]));const a={images:o},l={alignCorners:e,halfPixelCenters:s,size:t},c=F.runKernel(tu,a,l);return i?L(c,[c.shape[1],c.shape[2],c.shape[3]]):c}const eb=P({resizeBilinear_:_T});function FT(n,t,e=!1,s=!1){const r=E(n,"images","resizeNearestNeighbor");S(r.rank===3||r.rank===4,()=>`Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank ${r.rank}.`),S(t.length===2,()=>`Error in resizeNearestNeighbor: new shape must 2D, but got shape ${t}.`),S(r.dtype==="float32"||r.dtype==="int32",()=>"`images` must have `int32` or `float32` as dtype"),S(s===!1||e===!1,()=>"Error in resizeNearestNeighbor: If halfPixelCenters is true, alignCorners must be false.");let o=r,i=!1;r.rank===3&&(i=!0,o=L(r,[1,r.shape[0],r.shape[1],r.shape[2]]));const a={images:o},l={alignCorners:e,halfPixelCenters:s,size:t},c=F.runKernel(Qc,a,l);return i?L(c,[c.shape[1],c.shape[2],c.shape[3]]):c}const nb=P({resizeNearestNeighbor_:FT});function OT(n,t="binary",e=!1,s=.5){const r=E(n,"image","threshold"),o=.2989,i=.587,a=.114,l=r.shape[0]*r.shape[1];let c=_(Ze([s]),255),u,h,d,f;if(S(r.rank===3,()=>`Error in threshold: image must be rank 3,but got rank ${r.rank}.`),S(r.shape[2]===3||r.shape[2]===1,()=>`Error in threshold: image color channel must be equal to 3 or 1but got ${r.shape[2]}.`),S(r.dtype==="int32"||r.dtype==="float32",()=>`Error in dtype: image dtype must be int32 or float32,but got dtype ${r.dtype}.`),S(t==="otsu"||t==="binary",()=>`Method must be binary or otsu, but was ${t}`),r.shape[2]===3){[u,h,d]=an(r,[1,1,1],-1);const g=_(u,o),x=_(h,i),b=_(d,a);f=J(J(g,x),b)}else f=n;if(t==="otsu"){const g=Dk(rt(U0(f),"int32"),no([]),256);c=MT(g,l)}const p=e?So(f,c):cn(f,c);return rt(_(p,255),"int32")}function MT(n,t){let e=Ze([-1]),s=Ze([0]),r=Ze([0]),o,i,a,l,c,u;for(let h=0;h<n.size-1;h++){o=Ht(n,0,h+1),i=Ht(n,h+1),c=ft(dt(o),t),u=ft(dt(i),t);const d=dt(_(o,hi(0,o.size)));a=ft(d,dt(o));const f=gu(i.shape,o.size),p=J(hi(0,i.size),f),m=_(i,p);l=ft(dt(m),dt(i));const g=pt(a,l),x=pt(a,l),b=_(c,u);r=_(_(b,g),x);const w=cn(r,s);s=Oe(w,r,s),e=Oe(w,Ze([h]),e)}return e}const LT=P({threshold_:OT});function PT(n,t,e="nearest",s="constant",r=0,o){const i=E(n,"image","transform","float32"),a=E(t,"transforms","transform","float32");S(i.rank===4,()=>`Error in transform: image must be rank 4,but got rank ${i.rank}.`),S(a.rank===2&&(a.shape[0]===i.shape[0]||a.shape[0]===1)&&a.shape[1]===8,()=>"Error in transform: Input transform should be batch x 8 or 1 x 8"),S(o==null||o.length===2,()=>`Error in transform: outputShape must be [height, width] or null, but got ${o}.`);const l={image:i,transforms:a},c={interpolation:e,fillMode:s,fillValue:r,outputShape:o};return F.runKernel(of,l,c)}const zT=P({transform_:PT});function BT(n,t,e){const s=E(n,"a","bandPart");S(s.rank>=2,()=>`bandPart(): Rank must be at least 2, got ${s.rank}.`);const r=s.shape,[o,i]=s.shape.slice(-2);let a,l;typeof t=="number"?(S(t%1===0,()=>`bandPart(): numLower must be an integer, got ${t}.`),S(t<=o,()=>`bandPart(): numLower (${t}) must not be greater than the number of rows (${o}).`),a=E(t<0?o:t,"numLower","bandPart")):(S(t.dtype==="int32",()=>"bandPart(): numLower's dtype must be an int32."),a=Oe(Dl(t,0),o,ui(t,o))),typeof e=="number"?(S(e%1===0,()=>`bandPart(): numUpper must be an integer, got ${e}.`),S(e<=i,()=>`bandPart(): numUpper (${e}) must not be greater than the number of columns (${i}).`),l=E(e<0?i:e,"numUpper","bandPart")):(S(e.dtype==="int32",()=>"bandPart(): numUpper's dtype must be an int32."),l=Oe(Dl(e,0),i,ui(e,i)));const c=L(hi(0,o,1,"int32"),[-1,1]),u=hi(0,i,1,"int32"),h=pt(c,u),d=ws(So(h,a),Or(h,te(l))),f=xe([o,i],s.dtype);return L(vs(Sr(L(s,[-1,o,i])).map(p=>Oe(d,p,f))),r)}const VT=P({bandPart_:BT});function WT(n){let t;if(Array.isArray(n)){t=!1,S(n!=null&&n.length>0,()=>"Gram-Schmidt process: input must not be null, undefined, or empty");const r=n[0].shape[0];for(let o=1;o<n.length;++o)S(n[o].shape[0]===r,()=>`Gram-Schmidt: Non-unique lengths found in the input vectors: (${n[o].shape[0]} vs. ${r})`)}else t=!0,n=an(n,n.shape[0],0).map(r=>Ca(r,[0]));S(n.length<=n[0].shape[0],()=>`Gram-Schmidt: Number of vectors (${n.length}) exceeds number of dimensions (${n[0].shape[0]}).`);const e=[],s=n;for(let r=0;r<n.length;++r)e.push(F.tidy(()=>{let o=s[r];if(r>0)for(let i=0;i<r;++i){const a=_(dt(_(e[i],o)),e[i]);o=pt(o,a)}return ft(o,bu(o,"euclidean"))}));return t?vs(e,0):e}const UT=P({gramSchmidt_:WT});function GT(n,t=!1){if(S(n.rank>=2,()=>`qr() requires input tensor to have a rank >= 2, but got rank ${n.rank}`),n.rank===2)return zm(n,t);{const e=n.shape.slice(0,n.shape.length-2).reduce((l,c)=>l*c),s=Sr(L(n,[e,n.shape[n.shape.length-2],n.shape[n.shape.length-1]]),0),r=[],o=[];s.forEach(l=>{const[c,u]=zm(l,t);r.push(c),o.push(u)});const i=L(vs(r,0),n.shape),a=L(vs(o,0),n.shape);return[i,a]}}function zm(n,t=!1){return F.tidy(()=>{S(n.shape.length===2,()=>`qr2d() requires a 2D Tensor, but got a ${n.shape.length}D Tensor.`);const e=n.shape[0],s=n.shape[1];let r=O0(e),o=dr(n);const i=nh([[1]],[1,1]);let a=dr(i);const l=e>=s?s:e;for(let c=0;c<l;++c){const u=o,h=a,d=r;[a,o,r]=F.tidy(()=>{const f=Ht(o,[c,c],[e-c,1]),p=bu(f),m=Ht(o,[c,c],[1,1]),g=Oe(cn(m,0),nh([[-1]]),nh([[1]])),x=pt(m,_(g,p)),b=ft(f,x);b.shape[0]===1?a=dr(i):a=Ue([i,Ht(b,[1,0],[b.shape[0]-1,b.shape[1]])],0);const w=te(ft(Ft(g,x),p)),y=Ht(o,[c,0],[e-c,s]),v=_(w,a),$=Tt(a);if(c===0)o=pt(y,Ft(v,Ft($,y)));else{const I=pt(y,Ft(v,Ft($,y)));o=Ue([Ht(o,[0,0],[c,s]),I],0)}const N=Tt(v),T=Ht(r,[0,c],[e,r.shape[1]-c]);if(c===0)r=pt(T,Ft(Ft(T,a),N));else{const I=pt(T,Ft(Ft(T,a),N));r=Ue([Ht(r,[0,0],[e,c]),I],1)}return[a,o,r]}),Ct([u,h,d])}return!t&&e>s&&(r=Ht(r,[0,0],[e,s]),o=Ht(o,[0,0],[s,s])),[r,o]})}const HT=P({qr_:GT});const ys={flipLeftRight:lT,grayscaleToRGB:uT,resizeNearestNeighbor:nb,resizeBilinear:eb,rgbToGrayscale:dT,rotateWithOffset:pT,cropAndResize:iT,nonMaxSuppression:gT,nonMaxSuppressionAsync:IT,nonMaxSuppressionWithScore:ST,nonMaxSuppressionWithScoreAsync:TT,nonMaxSuppressionPadded:RT,nonMaxSuppressionPaddedAsync:DT,threshold:LT,transform:zT},qT={bandPart:VT,gramSchmidt:UT,qr:HT};const jT=new Map,XT=new Map;class To{getClassName(){return this.constructor.className}static fromConfig(t,e){return new t(e)}}class pn{constructor(){this.classNameMap={}}static getMap(){return pn.instance==null&&(pn.instance=new pn),pn.instance}static register(t){pn.getMap().classNameMap[t.className]=[t,t.fromConfig]}}function Z(n,t,e){S(n.className!=null,()=>"Class being registered does not have the static className property defined."),S(typeof n.className=="string",()=>"className is required to be a string, but got type "+typeof n.className),S(n.className.length>0,()=>"Class being registered has an empty-string as its className, which is disallowed."),typeof t>"u"&&(t="Custom"),typeof e>"u"&&(e=n.className);const s=e,r=t+">"+s;return pn.register(n),jT.set(r,n),XT.set(n,r),n}class Js extends To{minimize(t,e=!1,s){const{value:r,grads:o}=this.computeGradients(t,s);if(s!=null){const i=s.map(a=>({name:a.name,tensor:o[a.name]}));this.applyGradients(i)}else this.applyGradients(o);return Ct(o),e?r:(r.dispose(),null)}get iterations(){return this.iterations_==null&&(this.iterations_=0),this.iterations_}incrementIterations(){this.iterations_=this.iterations+1}computeGradients(t,e){return QS(t,e)}dispose(){this.iterations_!=null&&Ct(this.iterations_)}async saveIterations(){return this.iterations_==null&&(this.iterations_=0),{name:"iter",tensor:Ot(this.iterations_,"int32")}}async getWeights(){throw new Error("getWeights() is not implemented for this optimizer yet.")}async setWeights(t){throw new Error(`setWeights() is not implemented for this optimizer class ${this.getClassName()}`)}async extractIterations(t){return this.iterations_=(await t[0].tensor.data())[0],t.slice(1)}}Object.defineProperty(Js,Symbol.hasInstance,{value:n=>n.minimize!=null&&n.computeGradients!=null&&n.applyGradients!=null});class sb extends Js{static get className(){return"Adadelta"}constructor(t,e,s=null){super(),this.learningRate=t,this.rho=e,this.epsilon=s,this.accumulatedGrads=[],this.accumulatedUpdates=[],s==null&&(this.epsilon=F.backend.epsilon())}applyGradients(t){(Array.isArray(t)?t.map(s=>s.name):Object.keys(t)).forEach((s,r)=>{const o=F.registeredVariables[s],i=!1;this.accumulatedGrads[r]==null&&(this.accumulatedGrads[r]={originalName:`${s}/accum_grad`,variable:B(()=>Et(o).variable(i))}),this.accumulatedUpdates[r]==null&&(this.accumulatedUpdates[r]={originalName:`${s}/accum_var`,variable:B(()=>Et(o).variable(i))});const a=Array.isArray(t)?t[r].tensor:t[s];if(a==null)return;const l=this.accumulatedGrads[r].variable,c=this.accumulatedUpdates[r].variable;B(()=>{const u=J(_(l,this.rho),_(jt(a),1-this.rho)),h=_(ft(Ne(J(c,this.epsilon)),Ne(J(l,this.epsilon))),a),d=J(_(c,this.rho),_(jt(h),1-this.rho));l.assign(u),c.assign(d);const f=J(_(h,-this.learningRate),o);o.assign(f)})}),this.incrementIterations()}dispose(){this.accumulatedUpdates!=null&&(Ct(this.accumulatedGrads.map(t=>t.variable)),Ct(this.accumulatedUpdates.map(t=>t.variable)))}async getWeights(){const t=[...this.accumulatedGrads,...this.accumulatedUpdates];return[await this.saveIterations()].concat(t.map(e=>({name:e.originalName,tensor:e.variable})))}async setWeights(t){t=await this.extractIterations(t);const e=t.length/2,s=!1;this.accumulatedGrads=t.slice(0,e).map(r=>({originalName:r.name,variable:r.tensor.variable(s)})),this.accumulatedUpdates=t.slice(e,e*2).map(r=>({originalName:r.name,variable:r.tensor.variable(s)}))}getConfig(){return{learningRate:this.learningRate,rho:this.rho,epsilon:this.epsilon}}static fromConfig(t,e){return new t(e.learningRate,e.rho,e.epsilon)}}class rb extends Js{static get className(){return"Adagrad"}constructor(t,e=.1){super(),this.learningRate=t,this.initialAccumulatorValue=e,this.accumulatedGrads=[]}applyGradients(t){(Array.isArray(t)?t.map(s=>s.name):Object.keys(t)).forEach((s,r)=>{const o=F.registeredVariables[s];this.accumulatedGrads[r]==null&&(this.accumulatedGrads[r]={originalName:`${s}/accumulator`,variable:B(()=>gu(o.shape,this.initialAccumulatorValue).variable(!1))});const i=Array.isArray(t)?t[r].tensor:t[s];if(i==null)return;const a=this.accumulatedGrads[r].variable;B(()=>{const l=J(a,jt(i));a.assign(l);const c=J(_(ft(i,Ne(J(l,F.backend.epsilon()))),-this.learningRate),o);o.assign(c)})}),this.incrementIterations()}dispose(){this.accumulatedGrads!=null&&Ct(this.accumulatedGrads.map(t=>t.variable))}async getWeights(){return[await this.saveIterations()].concat(this.accumulatedGrads.map(t=>({name:t.originalName,tensor:t.variable})))}async setWeights(t){t=await this.extractIterations(t);const e=!1;this.accumulatedGrads=t.map(s=>({originalName:s.name,variable:s.tensor.variable(e)}))}getConfig(){return{learningRate:this.learningRate,initialAccumulatorValue:this.initialAccumulatorValue}}static fromConfig(t,e){return new t(e.learningRate,e.initialAccumulatorValue)}}class ob extends Js{static get className(){return"Adam"}constructor(t,e,s,r=null){super(),this.learningRate=t,this.beta1=e,this.beta2=s,this.epsilon=r,this.accumulatedFirstMoment=[],this.accumulatedSecondMoment=[],B(()=>{this.accBeta1=Ot(e).variable(),this.accBeta2=Ot(s).variable()}),r==null&&(this.epsilon=F.backend.epsilon())}applyGradients(t){const e=Array.isArray(t)?t.map(s=>s.name):Object.keys(t);B(()=>{const s=pt(1,this.accBeta1),r=pt(1,this.accBeta2);e.forEach((o,i)=>{const a=F.registeredVariables[o],l=!1;this.accumulatedFirstMoment[i]==null&&(this.accumulatedFirstMoment[i]={originalName:`${o}/m`,variable:B(()=>Et(a).variable(l))}),this.accumulatedSecondMoment[i]==null&&(this.accumulatedSecondMoment[i]={originalName:`${o}/v`,variable:B(()=>Et(a).variable(l))});const c=Array.isArray(t)?t[i].tensor:t[o];if(c==null)return;const u=this.accumulatedFirstMoment[i].variable,h=this.accumulatedSecondMoment[i].variable,d=J(_(u,this.beta1),_(c,1-this.beta1)),f=J(_(h,this.beta2),_(jt(c),1-this.beta2)),p=ft(d,s),m=ft(f,r);u.assign(d),h.assign(f);const g=J(_(ft(p,J(Ne(m),this.epsilon)),-this.learningRate),a);a.assign(g)}),this.accBeta1.assign(_(this.accBeta1,this.beta1)),this.accBeta2.assign(_(this.accBeta2,this.beta2))}),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.accBeta2.dispose(),this.accumulatedFirstMoment!=null&&Ct(this.accumulatedFirstMoment.map(t=>t.variable)),this.accumulatedSecondMoment!=null&&Ct(this.accumulatedSecondMoment.map(t=>t.variable))}async getWeights(){const t=[...this.accumulatedFirstMoment,...this.accumulatedSecondMoment];return[await this.saveIterations()].concat(t.map(e=>({name:e.originalName,tensor:e.variable})))}async setWeights(t){t=await this.extractIterations(t),B(()=>{this.accBeta1.assign(Ir(this.beta1,this.iterations_+1)),this.accBeta2.assign(Ir(this.beta2,this.iterations_+1))});const e=t.length/2,s=!1;this.accumulatedFirstMoment=t.slice(0,e).map(r=>({originalName:r.name,variable:r.tensor.variable(s)})),this.accumulatedSecondMoment=t.slice(e,e*2).map(r=>({originalName:r.name,variable:r.tensor.variable(s)}))}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon}}static fromConfig(t,e){return new t(e.learningRate,e.beta1,e.beta2,e.epsilon)}}class ib extends Js{static get className(){return"Adamax"}constructor(t,e,s,r=null,o=0){super(),this.learningRate=t,this.beta1=e,this.beta2=s,this.epsilon=r,this.decay=o,this.accumulatedFirstMoment=[],this.accumulatedWeightedInfNorm=[],B(()=>{this.iteration=Ot(0).variable(),this.accBeta1=Ot(e).variable()}),r==null&&(this.epsilon=F.backend.epsilon())}applyGradients(t){const e=Array.isArray(t)?t.map(s=>s.name):Object.keys(t);B(()=>{const s=pt(1,this.accBeta1),r=ft(-this.learningRate,J(_(this.iteration,this.decay),1));e.forEach((o,i)=>{const a=F.registeredVariables[o],l=!1;this.accumulatedFirstMoment[i]==null&&(this.accumulatedFirstMoment[i]={originalName:`${o}/m`,variable:Et(a).variable(l)}),this.accumulatedWeightedInfNorm[i]==null&&(this.accumulatedWeightedInfNorm[i]={originalName:`${o}/v`,variable:Et(a).variable(l)});const c=Array.isArray(t)?t[i].tensor:t[o];if(c==null)return;const u=this.accumulatedFirstMoment[i].variable,h=this.accumulatedWeightedInfNorm[i].variable,d=J(_(u,this.beta1),_(c,1-this.beta1)),f=_(h,this.beta2),p=De(c),m=Ys(f,p);u.assign(d),h.assign(m);const g=J(_(ft(r,s),ft(d,J(m,this.epsilon))),a);a.assign(g)}),this.iteration.assign(J(this.iteration,1)),this.accBeta1.assign(_(this.accBeta1,this.beta1))}),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.iteration.dispose(),this.accumulatedFirstMoment!=null&&Ct(this.accumulatedFirstMoment.map(t=>t.variable)),this.accumulatedWeightedInfNorm!=null&&Ct(this.accumulatedWeightedInfNorm.map(t=>t.variable))}async getWeights(){throw new Error("getWeights() is not implemented for Adamax yet.")}async setWeights(t){throw new Error("setWeights() is not implemented for Adamax yet.")}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon,decay:this.decay}}static fromConfig(t,e){return new t(e.learningRate,e.beta1,e.beta2,e.epsilon,e.decay)}}class Vf extends Js{static get className(){return"SGD"}constructor(t){super(),this.learningRate=t,this.setLearningRate(t)}applyGradients(t){(Array.isArray(t)?t.map(s=>s.name):Object.keys(t)).forEach((s,r)=>{const o=Array.isArray(t)?t[r].tensor:t[s];if(o==null)return;const i=F.registeredVariables[s];B(()=>{const a=J(_(this.c,o),i);i.assign(a)})}),this.incrementIterations()}setLearningRate(t){this.learningRate=t,this.c!=null&&this.c.dispose(),this.c=ns(Ot(-t))}dispose(){this.c.dispose()}async getWeights(){return[await this.saveIterations()]}async setWeights(t){if(t=await this.extractIterations(t),t.length!==0)throw new Error("SGD optimizer does not have settable weights.")}getConfig(){return{learningRate:this.learningRate}}static fromConfig(t,e){return new t(e.learningRate)}}class ab extends Vf{static get className(){return"Momentum"}constructor(t,e,s=!1){super(t),this.learningRate=t,this.momentum=e,this.useNesterov=s,this.accumulations=[],this.m=Ot(this.momentum)}applyGradients(t){(Array.isArray(t)?t.map(s=>s.name):Object.keys(t)).forEach((s,r)=>{const o=F.registeredVariables[s];this.accumulations[r]==null&&(this.accumulations[r]={originalName:`${s}/momentum`,variable:B(()=>Et(o).variable(!1))});const i=this.accumulations[r].variable,a=Array.isArray(t)?t[r].tensor:t[s];a!=null&&B(()=>{let l;const c=J(_(this.m,i),a);this.useNesterov?l=J(_(this.c,J(a,_(c,this.m))),o):l=J(_(this.c,c),o),i.assign(c),o.assign(l)})}),this.incrementIterations()}dispose(){this.m.dispose(),this.accumulations!=null&&Ct(this.accumulations.map(t=>t.variable))}setMomentum(t){this.momentum=t}async getWeights(){return[await this.saveIterations()].concat(this.accumulations.map(t=>({name:t.originalName,tensor:t.variable})))}async setWeights(t){t=await this.extractIterations(t);const e=!1;this.accumulations=t.map(s=>({originalName:s.name,variable:s.tensor.variable(e)}))}getConfig(){return{learningRate:this.learningRate,momentum:this.momentum,useNesterov:this.useNesterov}}static fromConfig(t,e){return new t(e.learningRate,e.momentum,e.useNesterov)}}class lb extends Js{static get className(){return"RMSProp"}constructor(t,e=.9,s=0,r=null,o=!1){if(super(),this.learningRate=t,this.decay=e,this.momentum=s,this.epsilon=r,this.accumulatedMeanSquares=[],this.accumulatedMoments=[],this.accumulatedMeanGrads=[],this.centered=o,r==null&&(this.epsilon=F.backend.epsilon()),t==null)throw new Error("learningRate for RMSPropOptimizer must be defined.")}applyGradients(t){(Array.isArray(t)?t.map(s=>s.name):Object.keys(t)).forEach((s,r)=>{const o=F.registeredVariables[s],i=!1;this.accumulatedMeanSquares[r]==null&&(this.accumulatedMeanSquares[r]={originalName:`${s}/rms`,variable:B(()=>Et(o).variable(i))}),this.accumulatedMoments[r]==null&&(this.accumulatedMoments[r]={originalName:`${s}/momentum`,variable:B(()=>Et(o).variable(i))}),this.accumulatedMeanGrads[r]==null&&this.centered&&(this.accumulatedMeanGrads[r]={originalName:`${s}/mg`,variable:B(()=>Et(o).variable(i))});const a=Array.isArray(t)?t[r].tensor:t[s];if(a==null)return;const l=this.accumulatedMeanSquares[r].variable,c=this.accumulatedMoments[r].variable;B(()=>{const u=J(_(l,this.decay),_(jt(a),1-this.decay));if(this.centered){const h=this.accumulatedMeanGrads[r].variable,d=J(_(h,this.decay),_(a,1-this.decay)),f=ft(_(a,this.learningRate),Ne(pt(u,J(jt(d),this.epsilon)))),p=J(_(c,this.momentum),f);l.assign(u),h.assign(d),c.assign(p);const m=pt(o,p);o.assign(m)}else{const h=J(_(l,this.decay),_(jt(a),1-this.decay)),d=J(_(c,this.momentum),ft(_(a,this.learningRate),Ne(J(h,this.epsilon))));l.assign(h),c.assign(d);const f=pt(o,d);o.assign(f)}})}),this.incrementIterations()}dispose(){this.accumulatedMeanSquares!=null&&Ct(this.accumulatedMeanSquares.map(t=>t.variable)),this.accumulatedMeanGrads!=null&&this.centered&&Ct(this.accumulatedMeanGrads.map(t=>t.variable)),this.accumulatedMoments!=null&&Ct(this.accumulatedMoments.map(t=>t.variable))}async getWeights(){const t=[...this.accumulatedMeanSquares,...this.accumulatedMoments];return this.centered&&t.push(...this.accumulatedMeanGrads),[await this.saveIterations()].concat(t.map(e=>({name:e.originalName,tensor:e.variable})))}async setWeights(t){t=await this.extractIterations(t);const e=this.centered?t.length/3:t.length/2,s=!1;this.accumulatedMeanSquares=t.slice(0,e).map(r=>({originalName:r.name,variable:r.tensor.variable(s)})),this.accumulatedMoments=t.slice(e,e*2).map(r=>({originalName:r.name,variable:r.tensor.variable(s)})),this.centered&&(this.accumulatedMeanGrads=t.slice(e*2,e*3).map(r=>({originalName:r.name,variable:r.tensor.variable(s)})))}getConfig(){return{learningRate:this.learningRate,decay:this.decay,momentum:this.momentum,epsilon:this.epsilon,centered:this.centered}}static fromConfig(t,e){return new t(e.learningRate,e.decay,e.momentum,e.epsilon,e.centered)}}const KT=[sb,rb,ob,ib,ab,lb,Vf];function YT(){for(const n of KT)Z(n)}function Bm(n,t,e,s){i(n),e=e??0,s=s??1,a(e,s);let r=0;const o=l=>(l.then(c=>{const u=e+ ++r/n.length*(s-e);return t(u),c}),l);function i(l){S(l!=null&&Array.isArray(l)&&l.length>0,()=>"promises must be a none empty array")}function a(l,c){S(l>=0&&l<=1,()=>`Progress fraction must be in range [0, 1], but got startFraction ${l}`),S(c>=0&&c<=1,()=>`Progress fraction must be in range [0, 1], but got endFraction ${c}`),S(c>=l,()=>`startFraction must be no more than endFraction, but got startFraction ${l} and endFraction ${c}`)}return Promise.all(n.map(o))}async function ZT(n,t){t==null&&(t={});const e=t.fetchFunc==null?W().platform.fetch:t.fetchFunc,s=n.map(h=>e(h,t.requestInit,{isBinary:!0})),a=(t.onProgress==null?await Promise.all(s):await Bm(s,t.onProgress,0,.5)).map(h=>h.arrayBuffer());return t.onProgress==null?await Promise.all(a):await Bm(a,t.onProgress,.5,1)}function JT(n,t){var e;const s=t.fetchFunc==null?W().platform.fetch:t.fetchFunc;let r=0,o;return(e=t.onProgress)===null||e===void 0||e.call(t,0),new ReadableStream({pull:async i=>{for(var a;r<n.length;){o||(o=(await s(n[r],t.requestInit,{isBinary:!0})).body.getReader());const{done:l,value:c}=await o.read();if(l){r++,o=void 0,(a=t.onProgress)===null||a===void 0||a.call(t,r/n.length);continue}i.enqueue(c);return}i.close()}})}const QT="application/octet-stream",tE="application/json";class Wf{constructor(t,e){if(this.DEFAULT_METHOD="POST",e==null&&(e={}),this.weightPathPrefix=e.weightPathPrefix,this.weightUrlConverter=e.weightUrlConverter,e.fetchFunc!=null?(S(typeof e.fetchFunc=="function",()=>"Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)"),this.fetch=e.fetchFunc):this.fetch=W().platform.fetch,S(t!=null&&t.length>0,()=>"URL path for http must not be null, undefined or empty."),Array.isArray(t)&&S(t.length===2,()=>`URL paths for http must have a length of 2, (actual length is ${t.length}).`),this.path=t,e.requestInit!=null&&e.requestInit.body!=null)throw new Error("requestInit is expected to have no pre-existing body, but has one.");this.requestInit=e.requestInit||{},this.loadOptions=e}async save(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.");const e=Object.assign({method:this.DEFAULT_METHOD},this.requestInit);e.body=new FormData;const s=[{paths:["./model.weights.bin"],weights:t.weightSpecs}],r=dI(t,s);if(e.body.append("model.json",new Blob([JSON.stringify(r)],{type:tE}),"model.json"),t.weightData!=null){const i=js.join(t.weightData);e.body.append("model.weights.bin",new Blob([i],{type:QT}),"model.weights.bin")}const o=await this.fetch(this.path,e);if(o.ok)return{modelArtifactsInfo:hf(t),responses:[o]};throw new Error(`BrowserHTTPRequest.save() failed due to HTTP response status ${o.status}.`)}async loadModelJSON(){const t=await this.fetch(this.path,this.requestInit);if(!t.ok)throw new Error(`Request to ${this.path} failed with status code ${t.status}. Please verify this URL points to the model JSON of the model to load.`);let e;try{e=await t.json()}catch{let i=`Failed to parse model JSON of response from ${this.path}.`;throw this.path.endsWith(".pb")?i+=" Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository.":i+=" Please make sure the server is serving valid JSON for this request.",new Error(i)}const s=e.modelTopology,r=e.weightsManifest;if(s==null&&r==null)throw new Error(`The JSON from HTTP path ${this.path} contains neither model topology or manifest for weights.`);return e}async load(){if(this.loadOptions.streamWeights)return this.loadStream();const t=await this.loadModelJSON();return pI(t,e=>this.loadWeights(e))}async loadStream(){const t=await this.loadModelJSON(),e=await this.getWeightUrls(t.weightsManifest),s=Sm(t.weightsManifest),r=()=>JT(e,this.loadOptions);return Object.assign(Object.assign({},t),{weightSpecs:s,getWeightStream:r})}async getWeightUrls(t){const e=Array.isArray(this.path)?this.path[1]:this.path,[s,r]=eE(e),o=this.weightPathPrefix||s,i=[],a=[];for(const l of t)for(const c of l.paths)this.weightUrlConverter!=null?a.push(this.weightUrlConverter(c)):i.push(o+c+r);return this.weightUrlConverter&&i.push(...await Promise.all(a)),i}async loadWeights(t){const e=await this.getWeightUrls(t),s=Sm(t),r=await ZT(e,this.loadOptions);return[s,r]}}Wf.URL_SCHEME_REGEX=/^https?:\/\//;function eE(n){const t=n.lastIndexOf("/"),e=n.lastIndexOf("?"),s=n.substring(0,t),r=e>t?n.substring(e):"";return[s+"/",r]}function Vm(n){return n.match(Wf.URL_SCHEME_REGEX)!=null}const cb=(n,t)=>{if(typeof fetch>"u"&&(t==null||t.fetchFunc==null))return null;{let e=!0;if(Array.isArray(n)?e=n.every(s=>Vm(s)):e=Vm(n),e)return ub(n,t)}return null};me.registerSaveRouter(cb);me.registerLoadRouter(cb);function ub(n,t){return new Wf(n,t)}function nE(n,t){return ub(n,t)}function Uf(n,t){const e=n.shape.length,s=t.shape.length;if(e<1)throw new Error(`tf.gatherND() expects the input to be rank 1 or higher, but the rank was ${e}.`);if(s<1)throw new Error(`tf.gatherND() expects the indices to be rank 1 or higher, but the rank was ${s}.`);if(t.dtype!=="int32")throw new Error(`tf.gatherND() expects the indices to be int32 type, but the dtype was ${t.dtype}.`);if(t.shape[s-1]>e)throw new Error(`index innermost dimension length must be <= tensor rank; saw: ${t.shape[s-1]} vs. ${e}`);if(q(n.shape)===0)throw new Error(`Requested more than 0 entries, but input is empty. Input shape: ${n.shape}.`);const r=t.shape,o=r[r.length-1];let i=1;for(let h=0;h<r.length-1;++h)i*=r[h];const a=n.shape,l=r.slice();l.pop();let c=1;for(let h=o;h<e;++h)c*=a[h],l.push(a[h]);const u=[...ut(n.shape).map(h=>h/c),1].slice(0,o);return[l,i,c,u]}const zh=-2,sE=-1;function Gf(n,t,e){const s=n.shape.length;S(s===t.length,()=>`Error in slice${s}D: Length of begin ${t} must match the rank of the array (${s}).`),S(s===e.length,()=>`Error in slice${s}D: Length of size ${e} must match the rank of the array (${s}).`);for(let r=0;r<s;++r)S(t[r]+e[r]<=n.shape[r],()=>`Error in slice${s}D: begin[${r}] + size[${r}] (${t[r]+e[r]}) would overflow input.shape[${r}] (${n.shape[r]})`)}function rE(n){const t=[];let e=0;for(;n>0;)n&1&&t.push(e),n/=2,e++;return t}function Hf(n,t,e){const s=[];for(let r=0;r<n.length;r++)s[r]=Math.ceil((t[r]-n[r])/e[r]);return s}function hb(n,t,e,s){const r=[...n];for(let o=r.length;o<s.length;o++)r.push(1);for(let o=0;o<e;o++)o===0?r[t]=1:(r.splice(t,0,1),r.pop());return r}function db(n,t,e){return e<=n?e:e-(t-1)}function fb(n,t){const e=[];for(let s=0;s<n;s++)e.push(t+s);return e}function oE(n,t,e,s,r,o,i,a,l){const c=n.length;let u=new Array(c),h=new Array(c),d=new Array(c);if(t.length&&e>0){const f=t[0],p=e+1;u=pb(i,f,p,s,n),h=mb(a,f,p,r,n),d=hb(o,f,p,n)}else for(let f=0;f<c;f++)u[f]=xb(i,s,o,n,f,l),h[f]=bb(a,r,o,n,f,l),d[f]=gb(o,f,l);return{begin:u,end:h,strides:d}}function pb(n,t,e,s,r){const o=[...r],i=fb(e,t);for(let a=0;a<o.length;a++)if(i.indexOf(a)>-1)o[a]=0;else{const l=db(t,e,a);let c=s[l];n&1<<l&&(c=0),o[a]=c}return o}function mb(n,t,e,s,r){const o=[...r],i=fb(e,t);for(let a=0;a<o.length;a++)if(i.indexOf(a)>-1)o[a]=Number.MAX_SAFE_INTEGER;else{const l=db(t,e,a);let c=s[l];n&1<<l&&(c=Number.MAX_SAFE_INTEGER),o[a]=c}for(let a=0;a<o.length;a++){const l=r[a];o[a]<0&&(o[a]+=l),o[a]=gr(0,o[a],r[a])}return o}function gb(n,t,e){let s=n[t];return(e&1<<t||s==null)&&(s=1),s}function xb(n,t,e,s,r,o){let i=t[r];const a=e[r]||1;(n&1<<r||o&1<<r||i==null)&&(a>0?i=Number.MIN_SAFE_INTEGER:i=Number.MAX_SAFE_INTEGER);const l=s[r];return i<0&&(i+=l),i=gr(0,i,l-1),i}function bb(n,t,e,s,r,o){let i=t[r];const a=e[r]||1;(n&1<<r||o&1<<r||i==null)&&(a>0?i=Number.MAX_SAFE_INTEGER:i=Number.MIN_SAFE_INTEGER);const l=s[r];return i<0&&(i+=l),a>0?i=gr(0,i,l):i=gr(-1,i,l-1),i}function qf(n,t,e){let s=e.length;for(let r=0;r<e.length;r++)if(e[r]>1){s=r;break}for(let r=s+1;r<e.length;r++)if(t[r]>0||e[r]!==n[r])return!1;return!0}function jf(n,t){let e=n.length>0?n[n.length-1]:1;for(let s=0;s<n.length-1;s++)e+=n[s]*t[s];return e}function wu(n,t,e){let s;const r=n.shape.length;typeof t=="number"?s=[t,...new Array(r-1).fill(0)]:t.length<r?s=t.concat(new Array(r-t.length).fill(0)):s=t.slice(),s.forEach(i=>{S(i!==-1,()=>"slice() does not support negative begin indexing.")});let o;return e==null?o=new Array(r).fill(-1):typeof e=="number"?o=[e,...new Array(r-1).fill(-1)]:e.length<r?o=e.concat(new Array(r-e.length).fill(-1)):o=e,o=o.map((i,a)=>i>=0?i:(S(i===-1,()=>`Negative size values should be exactly -1 but got ${i} for the slice() size at index ${a}.`),n.shape[a]-s[a])),[s,o]}function Xf(n,t,e,s,r,o,i,a,l){let c;if(s==null?(c=new Array(t.length),c.fill(1)):c=s,i!=null&&(i&i-1)!==0)throw new Error("Multiple ellipses in slice is not allowed.");let u=!1;const h={dims:c.length,numAddAxisAfterEllipsis:0,begin:t.slice(),end:e.slice(),strides:c.slice(),beginMask:r,endMask:o,ellipsisMask:i,newAxisMask:a,shrinkAxisMask:l};for(let w=0;w<h.dims;w++)u&&(1<<w&a)!==0&&h.numAddAxisAfterEllipsis++,1<<w&i&&(u=!0);u||(h.ellipsisMask|=1<<h.dims,h.dims++);const d={dims:n.length,beginMask:0,endMask:0,beginValid:!1,endValid:!1};iE(h,d);let f=!0,p=!0,m=!0;const g=[],x=[];for(let w=0;w<n.length;++w){if(d.strides[w]===0)throw Error(`strides[${w}] must be non-zero`);const y=!!(d.shrinkAxisMask&1<<w),v=n[w];if(v===-1){g.push(y?1:-1);continue}const $=[d.beginMask&1<<w,d.endMask&1<<w],N=[d.strides[w]>0?0:-1,d.strides[w]>0?v:v-1];if(y&&d.strides[w]<=0)throw Error("only stride 1 allowed on non-range indexing.");m=m&&d.strides[w]===1;const T=!!(d.beginMask&1<<w&&d.endMask&1<<w);if(d.beginValid&&d.endValid){if(y){const R=d.begin[w]<0?v+d.begin[w]:d.begin[w];if(d.begin[w]=R,d.end[w]=d.begin[w]+1,R<0||R>=v)throw Error(`slice index ${d.begin[w]} of dimension ${w} out of bounds.`)}else d.begin[w]=Wm(d.begin[w],0,d.strides[w],v,$,N),d.end[w]=Wm(d.end[w],1,d.strides[w],v,$,N);const C=d.strides[w]===1&&d.begin[w]===0&&d.end[w]===v;f=f&&C,p=p&&(w===0&&d.strides[w]===1||C)}else f=f&&d.strides[w]===1&&T,p=p&&(w===0&&d.strides[w]===1||T);let I,k=!1;if(d.beginValid&&d.endValid?(I=d.end[w]-d.begin[w],k=!0):y?(I=1,k=!0):T&&v>=0&&(d.strides[w]<0?I=-v:I=v,k=!0),k){let C;I===0||I<0!=d.strides[w]<0?C=0:C=Math.trunc(I/d.strides[w])+(I%d.strides[w]!==0?1:0),g.push(C)}else g.push(-1)}for(let w=0;w<d.finalShapeGatherIndices.length;++w){const y=d.finalShapeGatherIndices[w];y>=0?x.push(g[y]):y===zh&&x.push(1)}return{finalShapeSparse:x.filter((w,y)=>d.finalShapeGatherIndices[y]!==zh),finalShape:x,isIdentity:f,sliceDim0:p,isSimpleSlice:m,begin:d.begin,end:d.end,strides:d.strides}}function iE(n,t){t.beginMask=0,t.endMask=0,t.shrinkAxisMask=0;let e=0;t.beginValid=n.begin!=null,t.endValid=n.end!=null,t.begin=new Array(t.dims),t.end=new Array(t.dims),t.strides=new Array(t.dims),t.finalShapeGatherIndices=[],t.finalShapeGatherIndicesSparse=[],t.inputShapeGatherIndicesSparse=new Array(t.dims);for(let s=0;s<n.dims;s++)if(1<<s&n.ellipsisMask){const r=Math.min(t.dims-(n.dims-s)+1+n.numAddAxisAfterEllipsis,t.dims);for(;e<r;e++)t.begin[e]=0,t.end[e]=0,t.strides[e]=1,t.beginMask|=1<<e,t.endMask|=1<<e,t.finalShapeGatherIndices.push(e),t.finalShapeGatherIndicesSparse.push(-1),t.inputShapeGatherIndicesSparse[e]=s}else if(1<<s&n.newAxisMask)t.finalShapeGatherIndices.push(zh),t.finalShapeGatherIndicesSparse.push(-1);else{if(e===t.begin.length)throw Error(`Index out of range using input dim ${e}; input has only ${t.dims} dims, ${t.begin.length}.`);n.begin!=null&&(t.begin[e]=n.begin[s]),n.end!=null&&(t.end[e]=n.end[s]),t.strides[e]=n.strides[s],n.beginMask&1<<s&&(t.beginMask|=1<<e),n.endMask&1<<s&&(t.endMask|=1<<e),n.shrinkAxisMask&1<<s?(t.finalShapeGatherIndices.push(sE),t.finalShapeGatherIndicesSparse.push(-1),t.shrinkAxisMask|=1<<e):(t.finalShapeGatherIndices.push(e),t.finalShapeGatherIndicesSparse.push(s)),t.inputShapeGatherIndicesSparse[e]=s,e++}}function Wm(n,t,e,s,r,o){if(r[t])return e>0?o[t]:o[t+1&1];{const i=n<0?s+n:n;return i<o[0]?o[0]:i>o[1]?o[1]:i}}const aE=Object.freeze(Object.defineProperty({__proto__:null,assertParamsValid:Gf,computeFlatOffset:jf,computeOutShape:Hf,getNormalizedAxes:oE,isSliceContinous:qf,maskToAxes:rE,parseSliceParams:wu,sliceInfo:Xf,startForAxis:xb,startIndicesWithElidedDims:pb,stopForAxis:bb,stopIndicesWithElidedDims:mb,stridesForAxis:gb,stridesWithElidedDims:hb},Symbol.toStringTag,{value:"Module"}));class lE{static sgd(t){return new Vf(t)}static momentum(t,e,s=!1){return new ab(t,e,s)}static rmsprop(t,e=.9,s=0,r=null,o=!1){return new lb(t,e,s,r,o)}static adam(t=.001,e=.9,s=.999,r=null){return new ob(t,e,s,r)}static adadelta(t=.001,e=.95,s=null){return new sb(t,e,s)}static adamax(t=.002,e=.9,s=.999,r=null,o=0){return new ib(t,e,s,r,o)}static adagrad(t,e=.1){return new rb(t,e)}}const qr=lE;const cE=typeof requestAnimationFrame<"u"?requestAnimationFrame:typeof setImmediate<"u"?setImmediate:n=>n();function yb(){return new Promise(n=>cE(()=>n()))}function Kf(n,t){const e=n[0].length;n.forEach((r,o)=>{S(r.length===e,()=>`Error in concat${e}D: rank of tensors[${o}] must be the same as the rank of the rest (${e})`)}),S(t>=0&&t<e,()=>`Error in concat${e}D: axis must be between 0 and ${e-1}.`);const s=n[0];n.forEach((r,o)=>{for(let i=0;i<e;i++)S(i===t||r[i]===s[i],()=>`Error in concat${e}D: Shape of tensors[${o}] (${r}) does not match the shape of the rest (${s}) along the non-concatenated axis ${o}.`)})}function ss(n,t){const e=n[0].slice();for(let s=1;s<n.length;s++)e[t]+=n[s][t];return e}var En;(function(n){n[n.FIRST_DIM_SIZE=0]="FIRST_DIM_SIZE",n[n.VALUE_ROWIDS=1]="VALUE_ROWIDS",n[n.ROW_LENGTHS=2]="ROW_LENGTHS",n[n.ROW_SPLITS=3]="ROW_SPLITS",n[n.ROW_LIMITS=4]="ROW_LIMITS",n[n.ROW_STARTS=5]="ROW_STARTS"})(En||(En={}));function wb(n,t,e){let s=new Array;if(e==null&&t==null)return s;if(t==null)for(;s.length<n+e.length;)s.push(-1);else s=t.slice();if(e==null)return s;if(n+e.length!==s.length)throw new Error(`rt input.shape and shape=${t} are incompatible: rt input.rank = ${n+e.length}, but shape.rank = ${s.length}`);for(let r=1;r<e.length;++r){const o=e[r],i=s[s.length-e.length+r],a=s[i];if(o>=0)if(a>=0){if(a!==o)throw new Error(`rt input.shape and shape=${t} are incompatible: rt input.shape[${r+n}] = ${o} but shape[${r+n}] = ${a}`)}else s[i]=o}return s}function vb(n){const t={FIRST_DIM_SIZE:En.FIRST_DIM_SIZE,VALUE_ROWIDS:En.VALUE_ROWIDS,ROW_LENGTHS:En.ROW_LENGTHS,ROW_SPLITS:En.ROW_SPLITS,ROW_LIMITS:En.ROW_LIMITS,ROW_STARTS:En.ROW_STARTS},e=[];for(const s of n)if(s in t)e.push(t[s]);else break;return e}function Cb(n){return n.length===0?0:n[0]===En.FIRST_DIM_SIZE?n.length-1:n.length}function $b(n,t){if(n==null||t==null)return;const e=n.length,s=t.length;if(e>=s)throw new Error(`defaultValue.shape=${n} and ragged tensor flatValues.shape=${t}, are incompatible: defaultValue.rank = ${e} must be less than ragged tensor input flatValues.rank = ${s})`);for(let r=0;r<Math.min(e,s-1);++r){const o=n[r],i=t[r+1];if(o>=0&&i>=0&&o!==1&&o!==i)throw new Error(`defaultValue.shape=${n}, and ragged tensor input flatValues.shape=${t} are incompatible: defaultValue.shape[${r-n.length}] = ${o} but ragged tensor input.flatValues.shape[${r-n.length}] = ${i}`)}}const Yf=30;function vu(n){return n<=Yf?n:$h(n,Math.floor(Math.sqrt(n)))}function Zf(n,t,e){const s=e*(typeof n=="number"?n:n[0]),r=t*(typeof n=="number"?n:n[1]);return[s,r]}function Ia(n,t,e,s=!0){let r=[];if(s)r=r.concat(t.slice(0)),r.push(n[0]/e),r=r.concat(n.slice(1));else{r=r.concat(n[0]);const o=t.length;for(let i=0;i<o;++i)r=r.concat([n[i+1]/t[i],t[i]]);r=r.concat(n.slice(o+1))}return r}function ka(n,t,e=!0){const s=[];if(e){s.push(t);for(let r=t+1;r<n;++r)r<=2*t?(s.push(r),s.push(r-(t+1))):s.push(r)}else{const r=[],o=[];for(let i=1;i<n;++i)i>=t*2+1||i%2===1?o.push(i):r.push(i);s.push(...r),s.push(0),s.push(...o)}return s}function Sa(n,t,e,s=!0){const r=[];s?r.push(n[0]/e):r.push(n[0]*e);for(let o=1;o<n.length;++o)o<=t.length?s?r.push(t[o-1]*n[o]):r.push(n[o]/t[o-1]):r.push(n[o]);return r}function Jf(n,t){const e=[0];for(let s=0;s<t;++s)e.push(n[s][0]);return e}function Qf(n,t,e){const s=n.slice(0,1);for(let r=0;r<e;++r)s.push(n[r+1]-t[r][0]-t[r][1]);return s}const Cu=1.7580993408473768,$u=1.0507009873554805;const tp=.3275911,ep=.254829592,np=-.284496736,sp=1.421413741,rp=-1.453152027,op=1.061405429;function Cs(n,t){if(n.length!==t.length)throw new Error(`Cannot merge real and imag arrays of different lengths. real:${n.length}, imag: ${t.length}.`);const e=new Float32Array(n.length*2);for(let s=0;s<e.length;s+=2)e[s]=n[s/2],e[s+1]=t[s/2];return e}function Ib(n){const t=new Float32Array(n.length/2),e=new Float32Array(n.length/2);for(let s=0;s<n.length;s+=2)t[s/2]=n[s],e[s/2]=n[s+1];return{real:t,imag:e}}function kb(n){const t=Math.ceil(n.length/4),e=new Float32Array(t),s=new Float32Array(t);for(let r=0;r<n.length;r+=4)e[Math.floor(r/4)]=n[r],s[Math.floor(r/4)]=n[r+1];return{real:e,imag:s}}function Sb(n){const t=Math.floor(n.length/4),e=new Float32Array(t),s=new Float32Array(t);for(let r=2;r<n.length;r+=4)e[Math.floor(r/4)]=n[r],s[Math.floor(r/4)]=n[r+1];return{real:e,imag:s}}function ip(n,t){const e=n[t*2],s=n[t*2+1];return{real:e,imag:s}}function Nb(n,t,e,s){n[s*2]=t,n[s*2+1]=e}function Tb(n,t){const e=new Float32Array(n/2),s=new Float32Array(n/2);for(let r=0;r<Math.ceil(n/2);r++){const o=(t?2:-2)*Math.PI*(r/n);e[r]=Math.cos(o),s[r]=Math.sin(o)}return{real:e,imag:s}}function Eb(n,t,e){const s=(e?2:-2)*Math.PI*(n/t),r=Math.cos(s),o=Math.sin(s);return{real:r,imag:o}}const sh="->",uE=/->/g,Um=",",Gm="...";function ap(n,t){n=n.replace(/\s/g,"");const e=(n.length-n.replace(uE,"").length)/sh.length;if(e<1)throw new Error("Equations without an arrow are not supported.");if(e>1)throw new Error(`Equation must contain exactly one arrow ("${sh}").`);const[s,r]=n.split(sh);S(s.indexOf(Gm)===-1,()=>`The ellipsis notation ("${Gm}") is not supported yet.`);const o=s.split(Um),i=o.length;if(t!==i)throw new Error(`Expected ${i} input tensors, received ${t}`);if(i>2)throw new Error("Support for more than 2 input tensors is not implemented yet.");const a=[];for(let d=0;d<r.length;++d){const f=r[d];if(!o.some(p=>p.indexOf(f)!==-1))throw new Error(`Output subscripts contain the label ${f} not present in the input subscripts.`);a.indexOf(f)===-1&&a.push(f)}for(let d=0;d<s.length;++d){const f=s[d];a.indexOf(f)===-1&&f!==Um&&a.push(f)}const l=new Array(o.length);for(let d=0;d<i;++d){if(new Set(o[d].split("")).size!==o[d].length)throw new Error(`Found duplicate axes in input component ${o[d]}. Support for duplicate axes in input is not implemented yet.`);l[d]=[];for(let f=0;f<o[d].length;++f)l[d].push(a.indexOf(o[d][f]))}const c=a.length,u=r.length,h=[];for(let d=u;d<c;++d)h.push(d);return{allDims:a,summedDims:h,idDims:l}}function lp(n,t){let e=new Array(n);e.fill(-1);for(let r=0;r<t.length;++r)e[t[r]]=r;const s=[];for(let r=0;r<n;++r)e[r]===-1&&s.push(r);return e=e.filter(r=>r!==-1),{permutationIndices:e,expandDims:s}}function cp(n,t,e){const s=new Array(n);for(let r=0;r<e.length;++r){const o=e[r].shape;for(let i=0;i<t[r].length;++i)s[t[r][i]]===void 0?s[t[r][i]]=o[i]:S(s[t[r][i]]===o[i],()=>`Expected dimension ${s[t[r][i]]} at axis ${i} of input shaped ${JSON.stringify(o)}, but got dimension ${o[i]}`)}}function up(n,t){const e=n,s=[];let r=0;n.length===0&&e.push(-1),r=n.length+1;for(let i=0;i<r;++i)s.push([]);const o=[];for(let i=0;i<e.length;++i){const a=e[i],l=hE(t,a);for(const c of l)o.indexOf(c)===-1&&(s[i].push(c),o.push(c))}return{path:e,steps:s}}function hp(n){return n.every((t,e)=>t===e)}function hE(n,t){const e=[];for(let s=0;s<n.length;++s)(n[s].length===0||n[s].indexOf(t)!==-1||t===-1)&&e.push(s);return e}function dp(n,t,e=0){let s=[];if(typeof t=="number")S(n.shape[e]%t===0,()=>"Number of splits must evenly divide the axis."),s=new Array(t).fill(n.shape[e]/t);else{const r=t.reduce((i,a)=>(a===-1&&(i+=1),i),0);S(r<=1,()=>"There should be only one negative value in split array.");const o=t.indexOf(-1);if(o!==-1){const i=t.reduce((a,l)=>l>0?a+l:a);t[o]=n.shape[e]-i}S(n.shape[e]===t.reduce((i,a)=>i+a),()=>"The sum of sizes must match the size of the axis dimension."),s=t}return s}function Rb(n){return`Received SparseTensor with denseShape[0] = 0 but
  indices.shape[0] = ${n}`}function Ab(n,t){return`indices(${n}, 0) is invalid: ${t} < 0`}function Db(n,t,e){return`indices(${n}, 0) is invalid: ${t} >= ${e}`}function _b(n,t){return`only one output dimension may be -1, not both ${n} and ${t}`}function Fb(n,t){return`size ${n} must be non-negative, not ${t}`}function Ob(){return"reshape cannot infer the missing input size for an empty tensor unless all specified input sizes are non-zero"}function Mb(n,t){const e=q(n),s=q(t);return`Input to reshape is a SparseTensor with ${e}
  dense values, but the requested shape requires a multiple of ${s}. inputShape=${n} outputShape= ${t}`}function Lb(n,t){const e=q(n),s=q(t);return`Input to reshape is a tensor with ${e} dense values, but the requested shape has ${s}. inputShape=${n} outputShape=${t}`}function Bh(){return"segment ids must be >= 0"}function Pb(){return"segment ids are not increasing"}function zb(n,t){return`Segment id ${n} out of range [0, ${t}), possibly because segmentIds input is not sorted.`}function Bb(n,t,e){return`Bad: indices[${n}] == ${t} out of range [0, ${e})`}function Vb(n,t){let e=!1,s;for(n<=Yf?(s=n,e=!0):s=$h(n,Math.floor(Math.sqrt(n)));!e;)s>t||s===n?e=!0:s=$h(n,s+1);return s}function Wb(n,t,e){const s=[],r=n.length;for(let o=0;o<r;o++)o!==t?s.push(n[o]):s.push(e);return s}function fp(n,t,e,s){const r=t.shape.length,o=n.shape.length;if(s!==0&&(s<-r||s>r))throw new Error(`Expect batchDims in the range of [-${r}, ${r}], but got ${s}`);if(s<0&&(s+=r),s>o)throw new Error(`batchDims (${s}) must be less than rank(x) (
    ${o}).`);if(e<s)throw new Error(`batchDims (${s}) must be less than or equal to axis (${e}).`);for(let h=0;h<s;++h)if(n.shape[h]!==t.shape[h])throw new Error(`x.shape[${h}]: ${n.shape[h]} should be equal to indices.shape[${h}]: ${t.shape[h]}.`);const i=n.shape[e],a=[];let l=1,c=1,u=1;for(let h=0;h<s;++h)a.push(n.shape[h]),l*=n.shape[h];for(let h=s;h<e;h++)a.push(n.shape[h]),c*=n.shape[h];for(let h=s;h<r;h++)a.push(t.shape[h]);for(let h=e+1;h<o;h++)a.push(n.shape[h]),u*=n.shape[h];return{batchSize:l,sliceSize:u,outerSize:c,dimSize:i,outputShape:a}}const dE=Object.freeze(Object.defineProperty({__proto__:null,collectGatherOpShapeInfo:fp,computeOutShape:Wb,segOpComputeOptimalWindowSize:Vb},Symbol.toStringTag,{value:"Module"}));function $s(n){try{return n.map(t=>zs(t))}catch(t){throw new Error(`Failed to decode encoded string bytes into utf-8, error: ${t}`)}}function Ub(n){return n.map(t=>Ms(t))}const fE=Object.freeze(Object.defineProperty({__proto__:null,ERF_A1:ep,ERF_A2:np,ERF_A3:sp,ERF_A4:rp,ERF_A5:op,ERF_P:tp,PARALLELIZE_THRESHOLD:Yf,get RowPartitionType(){return En},SELU_SCALE:$u,SELU_SCALEALPHA:Cu,applyActivation:Of,assertAndGetBroadcastShape:yt,assertAxesAreInnerMostDims:$e,assertParamsConsistent:Kf,assignToTypedArray:Nb,axesAreInnerMostDims:bf,calculateShapes:Lr,checkEinsumDimSizes:cp,checkPadOnDimRoundingMode:qe,combineLocations:_0,combineRaggedTensorToTensorShapes:wb,complexWithEvenIndex:kb,complexWithOddIndex:Sb,computeConv2DInfo:Ce,computeConv3DInfo:Xs,computeDefaultPad:df,computeDilation2DInfo:ya,computeOptimalWindowSize:vu,computeOutAndReduceShapes:ye,computeOutShape:ss,computePool2DInfo:yn,computePool3DInfo:Ss,convertConv2DDataFormat:Ns,decodeEinsumEquation:ap,eitherStridesOrDilationsAreOne:Te,expandShapeToKeepDim:ae,exponent:Eb,exponents:Tb,fromStringArrayToUint8:Ub,fromUint8ToStringArray:$s,getAxesPermutation:Jt,getBroadcastDims:uo,getComplexWithIndex:ip,getEinsumComputePath:up,getEinsumPermutation:lp,getFusedBiasGradient:Ff,getFusedDyActivation:_f,getImageCenter:Zf,getInnerMostAxes:ne,getPermuted:ka,getRaggedRank:Cb,getReductionAxes:fe,getReshaped:Ia,getReshapedPermuted:Sa,getRowPartitionTypesHelper:vb,getSliceBeginCoords:Jf,getSliceSize:Qf,getSparseFillEmptyRowsIndicesDenseShapeMismatch:Rb,getSparseFillEmptyRowsNegativeIndexErrorMessage:Ab,getSparseFillEmptyRowsOutOfRangeIndexErrorMessage:Db,getSparseReshapeEmptyTensorZeroOutputDimErrorMessage:Ob,getSparseReshapeInputOutputMismatchErrorMessage:Lb,getSparseReshapeInputOutputMultipleErrorMessage:Mb,getSparseReshapeMultipleNegativeOneOutputDimErrorMessage:_b,getSparseReshapeNegativeOutputDimErrorMessage:Fb,getSparseSegmentReductionIndicesOutOfRangeErrorMessage:Bb,getSparseSegmentReductionNegativeSegmentIdsErrorMessage:Bh,getSparseSegmentReductionNonIncreasingSegmentIdsErrorMessage:Pb,getSparseSegmentReductionSegmentIdOutOfRangeErrorMessage:zb,getUndoAxesPermutation:Ks,isIdentityPermutation:hp,log:E$,mergeRealAndImagArrays:Cs,prepareAndValidate:Uf,prepareSplitSize:dp,segment_util:dE,shouldFuse:Mf,slice_util:aE,splitRealAndImagArrays:Ib,stridesOrDilationsArePositive:Cr,tupleValuesAreOne:vr,upcastType:Qe,validateDefaultValueShape:$b,validateInput:PN,validateUpdateShape:Z0,warn:rn},Symbol.toStringTag,{value:"Module"}));YT();const Gb={kernelName:hc,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>_(n,$a(rt(e,"float32"),-1))}}};const pE={kernelName:Ii,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>{const s=jt(rt(e,"float32")),r=Ne(pt(Ot(1),s));return te(ft(n,r))}}}};const mE={kernelName:ki,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>{const s=Ne(pt(jt(rt(e,"float32")),1));return ft(n,s)}}}};const gE={kernelName:Io,inputsToSave:["a","b"],gradFunc:(n,t)=>{const[e,s]=t,r=yt(e.shape,s.shape);return{a:()=>{let a=n;const l=fe(e.shape,r);return l.length>0&&(a=dt(a,l)),L(a,e.shape)},b:()=>{let a=n;const l=fe(s.shape,r);return l.length>0&&(a=dt(a,l)),L(a,s.shape)}}}};const xE={kernelName:vd,saveAllInputs:!0,gradFunc:(n,t)=>{const e={};return t.forEach((s,r)=>{e[r]=()=>n.clone()}),e}};const bE={kernelName:dc,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>Et(e)}}};const yE={kernelName:fc,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>Et(e)}}};const wE={kernelName:Si,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>ft(n,Ne(pt(Ot(1),jt(rt(e,"float32")))))}}};const vE={kernelName:Ni,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>{const s=Ne(J(Ot(1),jt(rt(e,"float32"))));return ft(n,s)}}}};const CE={kernelName:Ri,inputsToSave:["a","b"],gradFunc:(n,t)=>{const[e,s]=t,r=yt(e.shape,s.shape);return{a:()=>{const a=J(jt(e),jt(s));let l=_(n,ft(s,a));const c=fe(e.shape,r);return c.length>0&&(l=dt(l,c)),L(l,e.shape)},b:()=>{const a=J(jt(e),jt(s));let l=te(_(n,ft(e,a)));const c=fe(s.shape,r);return c.length>0&&(l=dt(l,c)),L(l,s.shape)}}}};const $E={kernelName:Ti,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>ft(n,J(jt(rt(e,"float32")),1))}}};const IE={kernelName:Ei,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>ft(n,pt(Ot(1),jt(rt(e,"float32"))))}}};function kE(n,t,e,s,r,o){const i=E(n,"dy","avgPool3dGrad"),a=E(t,"input","avgPool3dGrad");let l=i,c=a,u=!1;a.rank===4&&(u=!0,l=L(i,[1,i.shape[0],i.shape[1],i.shape[2],i.shape[3]]),c=L(a,[1,a.shape[0],a.shape[1],a.shape[2],a.shape[3]])),S(l.rank===5,()=>`Error in avgPool3dGrad: dy must be rank 5 but got rank ${l.rank}.`),S(c.rank===5,()=>`Error in avgPool3dGrad: input must be rank 5 but got rank ${c.rank}.`),qe("avgPool3dGrad",r,o);const h={dy:l,input:c},d={filterSize:e,strides:s,pad:r,dimRoundingMode:o},f=F.runKernel(kd,h,d);return u?L(f,[f.shape[1],f.shape[2],f.shape[3],f.shape[4]]):f}const SE=P({avgPool3dGrad_:kE});const NE={kernelName:mc,inputsToSave:["x"],gradFunc:(n,t,e)=>{const[s]=t,{filterSize:r,strides:o,pad:i,dimRoundingMode:a}=e;return{x:()=>SE(n,s,r,o,i,a)}}};function TE(n,t,e,s,r){const o=E(n,"dy","avgPoolGrad"),i=E(t,"input","avgPoolGrad");S(i.rank===o.rank,()=>`Rank of input (${i.rank}) does not match rank of dy (${o.rank})`);let a=i,l=o,c=!1;i.rank===3&&(c=!0,a=L(i,[1,i.shape[0],i.shape[1],i.shape[2]]),l=L(o,[1,o.shape[0],o.shape[1],o.shape[2]])),S(l.rank===4,()=>`Error in avgPoolGrad: dy must be rank 4 but got rank ${l.rank}.`),S(a.rank===4,()=>`Error in avgPoolGrad: input must be rank 4 but got rank ${a.rank}.`);const u={dy:l,input:a},h={filterSize:e,strides:s,pad:r},d=F.runKernel(Id,u,h);return c?L(d,[d.shape[1],d.shape[2],d.shape[3]]):d}const EE=P({avgPoolGrad_:TE});const RE={kernelName:pc,inputsToSave:["x"],gradFunc:(n,t,e)=>{const[s]=t,{filterSize:r,strides:o,pad:i}=e;return{x:()=>EE(n,s,r,o,i)}}};const AE={kernelName:gc,inputsToSave:["a","b"],gradFunc:(n,t,e)=>{const[s,r]=t,{transposeA:o,transposeB:i}=e;return!o&&!i?{a:()=>Ft(n,r,!1,!0),b:()=>Ft(s,n,!0,!1)}:!o&&i?{a:()=>Ft(n,r,!1,!1),b:()=>Ft(n,s,!0,!1)}:o&&!i?{a:()=>Ft(r,n,!1,!0),b:()=>Ft(s,n,!1,!1)}:{a:()=>Ft(r,n,!0,!0),b:()=>Ft(n,s,!0,!0)}}};const DE={kernelName:xc,gradFunc:(n,t,e)=>{const{blockShape:s,crops:r}=e;return{x:()=>Sf(n,s,r)}}};const _E={kernelName:k$,gradFunc:(n,t,e)=>{const s=e,r=s.inputShape,o=s.shape,i=Array.from(o);for(let l=r.length-1;l>=0;l--)if(r[l]===o[l])i[l]=1;else if(r[l]!==1)throw new Error(`broadcastTo(): [${r}] cannot be broadcast to [${o}].`);const a=[];for(let l=0;l<i.length;l++)i[l]>1&&a.push(l);return{x:()=>dt(n,a,!0)}}};const FE={kernelName:Ai,gradFunc:n=>({x:()=>n.clone()})};const OE={kernelName:Di,gradFunc:n=>({x:()=>Et(n)})};const ME={kernelName:_i,inputsToSave:["x"],gradFunc:(n,t,e)=>{const[s]=t,{clipValueMin:r,clipValueMax:o}=e;return{x:()=>Oe(ws(Or(s,r),So(s,o)),n,Et(n))}}};const LE={kernelName:bc,inputsToSave:["x"],gradFunc:Gb.gradFunc};const PE={kernelName:yc,saveAllInputs:!0,gradFunc:(n,t,e)=>{const s=t.map(l=>l.shape),{axis:r}=e,o=It(r,t[0].shape)[0],i=s.map(l=>l[o]);return an(n,i,o).map(l=>()=>l)}};const zE={kernelName:wc,inputsToSave:["x","filter"],gradFunc:(n,t,e)=>{const[s,r]=t,{dilations:o,strides:i,pad:a,dataFormat:l}=e;return S(vr(o),()=>`Error in gradient of conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${o}'`),{x:()=>mf(s.shape,n,r,i,a,l),filter:()=>Df(s,n,r.shape,i,a,l)}}};const BE={kernelName:vc,inputsToSave:["dy","filter"],gradFunc:(n,t,e)=>{const[s,r]=t,{strides:o,pad:i,dataFormat:a,dimRoundingMode:l}=e;return{dy:()=>$r(n,r,o,i,a,1,l),filter:()=>Df(n,s,r.shape,o,i,a,l)}}};function VE(n,t,e,s,r){let o=n;n.rank===4&&(o=L(n,[1,n.shape[0],n.shape[1],n.shape[2],n.shape[3]]));let i=t;i.rank===4&&(i=L(t,[1,t.shape[0],t.shape[1],t.shape[2],t.shape[3]])),S(o.rank===5,()=>`Error in conv3dDerFilter: input must be rank 5, but got shape ${o.shape}.`),S(i.rank===5,()=>`Error in conv3dDerFilter: dy must be rank 5, but got shape ${i.shape}.`),S(e.length===5,()=>`Error in conv3dDerFilter: filterShape must be length 5, but got ${e}.`),S(o.shape[4]===e[3],()=>`Error in conv3dDerFilter: depth of input ${o.shape[4]}) must match input depth in filter (${e[3]}.`),S(i.shape[4]===e[4],()=>`Error in conv3dDerFilter: depth of dy (${i.shape[4]}) must match output depth for filter (${e[4]}).`);const a={x:o,dy:i},l={strides:s,pad:r,filterShape:e};return F.runKernel(Rd,a,l)}const WE=P({conv3DBackpropFilter_:VE});const UE={kernelName:Cc,inputsToSave:["x","filter"],gradFunc:(n,t,e)=>{const{dilations:s,strides:r,pad:o}=e;S(vr(s),()=>`Error in gradient of conv3D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${s}'`);const[i,a]=t;return{x:()=>E0(i.shape,n,a,r,o),filter:()=>WE(i,n,a.shape,r,o)}}};const GE={kernelName:Fi,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>_(te(j0(rt(e,"float32"))),n)}}};const HE={kernelName:Oi,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>_(X0(rt(e,"float32")),n)}}};const qE={kernelName:$c,inputsToSave:["x"],gradFunc:(n,t,e)=>{const[s]=t,{axis:r,exclusive:o,reverse:i}=e;return{x:()=>{const a=Jt([r],s.rank);let l=A0(n,r,o,!i);return a!=null&&(l=Tt(l,a)),l}}}};const jE={kernelName:Ic,inputsToSave:["x","filter"],gradFunc:(n,t,e)=>{const{dilations:s,strides:r,pad:o,dimRoundingMode:i}=e,a=s??[1,1];S(vr(a),()=>`Error in gradient of depthwiseConv2dNative: dilation rates greater than 1 are not yet supported. Got dilations '${a}'`);const[l,c]=t;return S(l.rank===4,()=>`Error in gradient of depthwiseConv2dNative: input must be rank 4, but got rank ${l.rank}.`),S(c.rank===4,()=>`Error in gradient of depthwiseConv2dNative: filter must be rank 4, but got rank ${c.rank}.`),S(l.shape[3]===c.shape[2],()=>`Error in gradient of depthwiseConv2d: number of input channels (${l.shape[3]}) must match the inChannels dimension in filter ${c.shape[2]}.`),S(Te(r,a),()=>`Error in gradient of depthwiseConv2d: Either strides or dilations must be  1. Got strides ${r} and dilations '${a}'.`),qe("depthwiseConv2d",o,i),{x:()=>sT(l.shape,n,c,r,o,a,i),filter:()=>eT(l,n,c.shape,r,o,a,i)}}};const XE={kernelName:kc,inputsToSave:["x","filter"],gradFunc:(n,t,e)=>{const[s,r]=t,o={x:s,filter:r,dy:n},i={x:s,filter:r,dy:n};return{x:()=>F.runKernel(Ih,o,e),filter:()=>F.runKernel(kh,i,e)}}};const KE={kernelName:Li,outputsToSave:[!0],gradFunc:(n,t)=>{const[e]=t,s={dy:n,y:e};return{x:()=>F.runKernel(zd,s)}}};const YE={kernelName:Pi,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t,s=_(cs(te(jt(e))),2/Math.sqrt(Math.PI));return{x:()=>_(n,s)}}};const ZE={kernelName:zi,outputsToSave:[!0],gradFunc:(n,t)=>{const[e]=t;return{x:()=>_(n,e)}}};const JE={kernelName:Nc,inputsToSave:["input"],gradFunc:(n,t)=>{const[e]=t;return{input:()=>L(n,e.shape)}}};const QE={kernelName:Bi,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>_(n,cs(e))}}};const tR={kernelName:Vi,gradFunc:n=>({x:()=>Et(n)})};const eR={kernelName:Wi,inputsToSave:["a","b"],gradFunc:(n,t)=>{const[e,s]=t,r=yt(e.shape,s.shape);return{a:()=>{const a=ft(n,rt(s,"float32")),l=fe(e.shape,r);return l.length>0?L(dt(a,l),e.shape):a},b:()=>{let a=_(n,rt(e,"float32"));const l=fe(s.shape,r);l.length>0&&(a=L(dt(a,l),s.shape));const c=jt(s);return te(ft(a,rt(c,"float32")))}}}};const nR={kernelName:Tc,inputsToSave:["x","mean","variance","scale"],gradFunc:(n,t,e)=>{const{varianceEpsilon:s}=e,[r,o,i,a]=t,l=a??Ot(1),c=fe(o.shape,r.shape),u=[];if(o.rank===1){for(let y=0;y<r.shape.length-1;++y)u.push(r.shape[y]);u.push(1)}const h=pt(r,o),d=_(n,l),f=G0(J(i,Ot(s))),p=_(_(_(f,f),f),Ot(-.5));return{x:()=>o.rank===1?L(_(_(n,Dn(L(f,[1,1,1,o.shape[0]]),u)),l),r.shape):L(_(_(n,f),l),r.shape),mean:()=>{let y=_(_(f,Ot(-1)),d);return o.rank===1&&(y=dt(y,c)),L(y,o.shape)},variance:()=>{let y=_(_(p,h),d);return o.rank===1&&(y=dt(y,c)),L(y,o.shape)},scale:()=>{const y=_(h,f);let v=_(n,y);return o.rank===1&&(v=dt(v,c)),L(v,o.shape)},offset:()=>{let y=n;return o.rank===1&&(y=dt(y,c)),L(y,o.shape)}}}};const sR={kernelName:Ec,inputsToSave:["x","indices"],gradFunc:(n,t,e)=>{const[s,r]=t,{axis:o,batchDims:i}=e,a=It(o,s.shape)[0],l=(c,u,h)=>()=>{const d=c.shape,f=u.size,p=d.slice(0,a),m=p.length,g=d.slice(o,d.length).slice(1),x=g.length,b=Hm(0,m),w=Hm(m+1,m+1+x),y=qm([p,[f],g]),v=L(h,y),$=L(u,[f]),N=qm([[m],b,w]),T=Tt(v,N);let I=Q0(T,$,c.shape[a]);const k=Ks(N);return I=Tt(I,k),I};if(i===1){const c=s.shape[0],u=s.split(c,0);return{x:()=>vs(u.map((f,p)=>l(f,r.slice(p,1),n.slice(p,1))())).reshape(s.shape),indices:()=>r}}else return{x:l(s,r,n),indices:()=>r}}};function Hm(n,t){const e=[];for(let s=n;s<t;++s)e.push(s);return e}function qm(n){const t=[];for(let e=0;e<n.length;++e)for(let s=0;s<n[e].length;++s)t.push(n[e][s]);return t}const rR={kernelName:Ui,inputsToSave:["a","b"],gradFunc:(n,t)=>{const[e,s]=t;return{a:()=>Et(e),b:()=>Et(s)}}};const oR={kernelName:Gi,gradFunc:n=>({x:()=>rt(n,"float32")})};const iR={kernelName:Hi,gradFunc:n=>({x:()=>Et(n)})};const aR={kernelName:qi,gradFunc:n=>({x:()=>Et(n)})};const lR={kernelName:ji,gradFunc:n=>({x:()=>Et(n)})};const cR={kernelName:Ac,inputsToSave:["x"],gradFunc:(n,t,e)=>{const[s]=t,{alpha:r}=e,o=cn(s,0);return{x:()=>Oe(o,n,_(n,r))}}};const uR={kernelName:Ki,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>ft(n,J(e,1))}}};const hR={kernelName:Xi,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>ft(n,rt(e,"float32"))}}};const dR={kernelName:N$,inputsToSave:[],outputsToSave:[!0],gradFunc:(n,t,e)=>{const[s]=t,{axis:r}=e;return{logits:()=>{const i=cs(s);return pt(n,_(dt(n,r,!0),i))}}}};function fR(n,t,e,s=5,r=1,o=1,i=.5){const a={x:n,y:t,dy:e},l={depthRadius:s,bias:r,alpha:o,beta:i};return F.runKernel(Hd,a,l)}const pR=P({localResponseNormalizationBackprop_:fR});const mR={kernelName:Lc,inputsToSave:["x"],outputsToSave:[!0],gradFunc:(n,t,e)=>{const[s,r]=t,{depthRadius:o,bias:i,alpha:a,beta:l}=e;return{x:()=>pR(s,r,n,o,i,a,l)}}};function Hb(n,t,e,s){return t.rank<e.rank&&(t=L(t,ae(t.shape,s))),n.rank<e.rank&&(n=L(n,ae(n.shape,s))),{x:()=>_(n,rt(ls(e,t),n.dtype))}}const jm={kernelName:Pc,inputsToSave:["x"],outputsToSave:[!0],gradFunc:(n,t,e)=>{const s=e,{reductionIndices:r}=s,o=t[0],i=t[1],a=It(r,o.shape),l=Hb(n,i,o,a);return{x:()=>l.x()}}};const gR={kernelName:Yi,inputsToSave:["a","b"],gradFunc:(n,t)=>{const[e,s]=t;return{a:()=>_(n,rt(Or(e,s),"float32")),b:()=>_(n,rt(Dl(e,s),"float32"))}}};function xR(n,t,e,s,r,o,i){const a=E(n,"dy","maxPool3dGrad"),l=E(t,"input","maxPool3dGrad"),c=E(e,"output","maxPool3dGrad");let u=a,h=l,d=c,f=!1;l.rank===4&&(f=!0,u=L(a,[1,a.shape[0],a.shape[1],a.shape[2],a.shape[3]]),h=L(l,[1,l.shape[0],l.shape[1],l.shape[2],l.shape[3]]),d=L(c,[1,c.shape[0],c.shape[1],c.shape[2],c.shape[3]])),S(u.rank===5,()=>`Error in maxPool3dGrad: dy must be rank 5 but got rank ${u.rank}.`),S(h.rank===5,()=>`Error in maxPool3dGrad: input must be rank 5 but got rank ${h.rank}.`),S(d.rank===5,()=>`Error in maxPool3dGrad: output must be rank 5 but got rank ${d.rank}.`),qe("maxPool3dGrad",o,i);const p={dy:u,input:h,output:d},m={filterSize:s,strides:r,pad:o,dimRoundingMode:i},g=F.runKernel(jd,p,m);return f?L(g,[g.shape[1],g.shape[2],g.shape[3],g.shape[4]]):g}const bR=P({maxPool3dGrad_:xR});const yR={kernelName:Bc,inputsToSave:["x"],outputsToSave:[!0],gradFunc:(n,t,e)=>{const[s,r]=t,{filterSize:o,strides:i,pad:a,dimRoundingMode:l}=e;return{x:()=>bR(n,s,r,o,i,a,l)}}};function wR(n,t,e,s,r,o,i){const a=E(n,"dy","maxPoolGrad"),l=E(t,"input","maxPoolGrad"),c=E(e,"output","maxPoolGrad");S(l.rank===a.rank,()=>`Rank of input (${l.rank}) does not match rank of dy (${a.rank})`),S(a.rank===4,()=>`Error in maxPoolGrad: dy must be rank 4 but got rank ${a.rank}.`),S(l.rank===4,()=>`Error in maxPoolGrad: input must be rank 4 but got rank ${l.rank}.`),qe("maxPoolGrad",o,i);const u={dy:a,input:l,output:c},h={filterSize:s,strides:r,pad:o,dimRoundingMode:i};return F.runKernel(qd,u,h)}const vR=P({maxPoolGrad_:wR});const CR={kernelName:zc,inputsToSave:["x"],outputsToSave:[!0],gradFunc:(n,t,e)=>{const[s,r]=t,{filterSize:o,strides:i,pad:a}=e;return{x:()=>vR(n,s,r,o,i,a)}}};const $R={kernelName:Vc,inputsToSave:["x"],gradFunc:(n,t,e)=>{const[s]=t,{axis:r}=e,o=It(r,s.shape),a=ye(s.shape,o)[1],l=q(a);return{x:()=>{const u=s.shape.slice();o.forEach(f=>{u[f]=1});const h=L(n,u);return ft(_(h,Zs(s.shape,"float32")),l)}}}};const IR={kernelName:Wc,inputsToSave:["x"],outputsToSave:[!0],gradFunc:(n,t,e)=>{const s=e,{axis:r}=s,[o,i]=t,a=It(r,o.shape),l=Hb(n,i,o,a);return{x:()=>l.x()}}};const kR={kernelName:Zi,inputsToSave:["a","b"],gradFunc:(n,t)=>{const[e,s]=t;return{a:()=>_(n,rt(So(e,s),"float32")),b:()=>_(n,rt(cn(e,s),"float32"))}}};const SR={kernelName:Uc,inputsToSave:["x"],gradFunc:(n,t,e)=>{const s=t[0],{paddings:r}=e,o=r.map(i=>i[0]);return{x:()=>Ht(n,o,s.shape)}}};const NR={kernelName:Ji,inputsToSave:["a","b"],gradFunc:(n,t)=>{const[e,s]=t,r=yt(e.shape,s.shape);return{a:()=>{const a=fe(e.shape,r);return a.length>0?L(dt(n,a),e.shape):n},b:()=>{const a=_(n,te(yu(ft(e,s)))),l=fe(s.shape,r);return l.length>0?L(dt(a,l),s.shape):a}}}};const TR={kernelName:Qi,inputsToSave:["a","b"],gradFunc:(n,t)=>{const[e,s]=t,r=yt(e.shape,s.shape);return{a:()=>{const a=_(n,rt(s,"float32")),l=fe(e.shape,r);return l.length>0?L(dt(a,l),e.shape):a},b:()=>{const a=_(n,rt(e,"float32")),l=fe(s.shape,r);return l.length>0?L(dt(a,l),s.shape):a}}}};const ER={kernelName:Gc,gradFunc:n=>({x:()=>te(n)})};const RR={kernelName:jc,inputsToSave:["indices"],gradFunc:(n,t)=>{const e=t[0];return{indices:()=>xe(e.shape,"float32")}}};const AR={kernelName:qc,gradFunc:n=>({x:()=>Et(n)})};const DR={kernelName:Xc,saveAllInputs:!0,gradFunc:(n,t,e)=>{const{axis:s}=e;return Sr(n,s).map(o=>()=>o)}};const Xm={kernelName:Kc,inputsToSave:["x"],gradFunc:(n,t,e)=>{const s=t[0],{paddings:r}=e,o=r.map(i=>i[0]);return{x:()=>Ht(n,o,s.shape)}}};const _R={kernelName:ta,inputsToSave:["a","b"],outputsToSave:[!0],gradFunc:(n,t)=>{const[e,s,r]=t,o=e,i=s,a=yt(o.shape,i.shape);return{a:()=>{const u=rt(i,"float32");let h=_(n,_(u,Ir(o,pt(u,Ot(1)))));const d=fe(o.shape,a);return d.length>0&&(h=dt(h,d)),L(h,o.shape)},b:()=>{const u=cn(o,0),h=Oe(u,us(o),Et(o));let d=_(n,_(r,h));const f=fe(i.shape,a);return f.length>0&&(d=dt(d,f)),L(d,i.shape)}}}};const FR={kernelName:Yc,inputsToSave:["x","alpha"],gradFunc:(n,t)=>{const[e,s]=t,r=cn(e,0);return{x:()=>Oe(r,n,_(n,s)),alpha:()=>{let o=Oe(r,Et(n),_(n,e));const i=fe(s.shape,n.shape);return i.length>0&&(o=dt(o,i)),L(o,s.shape)}}}};function OR(n,t,e){const s=n.shape.slice();s[e]=1;const r=L(t,s),o=Lh(n,e,!0,!1),i=Lh(n,e,!0,!0),a=_(o,i);return _(r,a)}function MR(n,t,e){const s=n.shape.length,r=s-e.length,o=Jt(e,s);let i=n;o!=null&&(i=Tt(n,o));const a=i.shape.slice(),c=a.splice(s-e.length,e.length).reduce((d,f)=>d*f,1);a.push(c);const u=i.reshape(a);let h=OR(u,t,r);if(h=h.reshape(i.shape),o!=null){const d=Ks(o);h=Tt(h,d)}return h}const LR={kernelName:Zc,inputsToSave:["x"],gradFunc:(n,t,e)=>{const[s]=t,{axis:r}=e;let o=[];return r==null?o=s.shape.map((i,a)=>a):typeof r=="number"?o=[r]:o=r,{x:()=>MR(s,n,o)}}};const PR={kernelName:Mi,inputsToSave:["a","b"],gradFunc:(n,t)=>{const[e,s]=t,r=yt(e.shape,s.shape);return{a:()=>{const a=ft(n,rt(s,"float32")),l=fe(e.shape,r);return l.length>0?L(dt(a,l),e.shape):a},b:()=>{let a=_(n,rt(e,"float32"));const l=fe(s.shape,r);l.length>0&&(a=L(dt(a,l),s.shape));const c=jt(s);return te(ft(a,rt(c,"float32")))}}}};const zR={kernelName:ea,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>ft(n,te(jt(e)))}}};const BR={kernelName:sa,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t,s=_(So(e,6),$a(e));return{x:()=>_(n,rt(s,"float32"))}}};const VR={kernelName:na,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>_(n,rt($a(e),"float32"))}}};const WR={kernelName:Jc,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>L(n,e.shape)}}};const UR={kernelName:tu,inputsToSave:["images"],gradFunc:(n,t,e)=>{const[s]=t,r={dy:n,images:s};return{images:()=>F.runKernel(tf,r,e)}}};const GR={kernelName:Qc,inputsToSave:["images"],gradFunc:(n,t,e)=>{const[s]=t,r={dy:n,images:s};return{images:()=>F.runKernel(Qd,r,e)}}};const HR={kernelName:eu,gradFunc:(n,t,e)=>{const{dims:s}=e,r=It(s,n.shape);return{x:()=>kr(n,r)}}};const qR={kernelName:ra,gradFunc:n=>({x:()=>Et(n)})};const jR={kernelName:oa,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>te(ft(n,_(Ir(e,1.5),2)))}}};const XR={kernelName:nu,inputsToSave:["condition"],gradFunc:(n,t)=>{const[e]=t;return{condition:()=>rt(Et(e),"float32"),t:()=>_(n,rt(e,n.dtype)),e:()=>_(n,rt(Cf(e),n.dtype))}}};const KR={kernelName:ia,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>{const s=cn(e,Ot(0)),r=Ot(Cu),o=Ot($u),i=_(n,o),a=_(_(n,r),cs(rt(e,"float32")));return Oe(s,i,a)}}}};const YR={kernelName:ua,outputsToSave:[!0],gradFunc:(n,t)=>{const[e]=t;return{x:()=>_(n,_(e,pt(Ot(1),e)))}}};const ZR={kernelName:ca,gradFunc:n=>({x:()=>Et(n)})};const JR={kernelName:aa,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>_(gf(rt(e,"float32")),n)}}};const QR={kernelName:la,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>_(R0(rt(e,"float32")),n)}}};const tA={kernelName:su,inputsToSave:["x"],gradFunc:(n,t,e)=>{const[s]=t,{begin:r,size:o}=e,i=s.shape,[a,l]=wu(s,r,o),c=[];for(let u=0;u<n.rank;u++)c.push([a[u],i[u]-a[u]-l[u]]);return{x:()=>kf(n,c)}}};const eA={kernelName:au,outputsToSave:[!0],gradFunc:(n,t,e)=>{const[s]=t,{dim:r}=e,o=!0,i=_(n,s);return{logits:()=>pt(i,_(dt(i,[r],o),s))}}};const nA={kernelName:ha,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>_(n,ko(e))}}};const Km={kernelName:ou,gradFunc:(n,t,e)=>{const{blockShape:s,paddings:r}=e;return{x:()=>pf(n,s,r)}}};const Ym={kernelName:iu,gradFunc:(n,t,e)=>{const{axis:s}=e;return{x:()=>Ue(n,s)}}};const sA={kernelName:da,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>ft(n,_(Ne(rt(e,"float32")),2))}}};const rA={kernelName:ef,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>_(n,_(rt(e,"float32"),2))}}};const oA={kernelName:fa,inputsToSave:["a","b"],gradFunc:(n,t)=>{const[e,s]=t,r=Ot(2);return{a:()=>_(n,_(r,pt(e,s))),b:()=>_(n,_(r,pt(s,e)))}}};const iA={kernelName:ba,gradFunc:n=>({x:()=>Et(n)})};const aA={kernelName:pa,inputsToSave:["a","b"],gradFunc:(n,t)=>{const[e,s]=t,r=yt(e.shape,s.shape);return{a:()=>{let a=n;const l=fe(e.shape,r);return l.length>0&&(a=dt(a,l)),L(a,e.shape)},b:()=>{let a=n;const l=fe(s.shape,r);return l.length>0&&(a=dt(a,l)),L(te(a),s.shape)}}}};const lA={kernelName:ru,inputsToSave:["x"],gradFunc:(n,t,e)=>{const[s]=t,r=s.shape.slice(),{axis:o}=e;It(o,s.shape).forEach(c=>{r[c]=1});const a=L(n,r),l=_(a,Zs(s.shape,"float32"));return{x:()=>l}}};const cA={kernelName:ma,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>ft(n,jt(gf(e)))}}};const uA={kernelName:ga,outputsToSave:[!0],gradFunc:(n,t)=>{const[e]=t;return{x:()=>_(pt(Ot(1),jt(e)),n)}}};const hA={kernelName:xa,inputsToSave:["x"],gradFunc:(n,t,e)=>{const[s]=t,{reps:r}=e;return{x:()=>{let i=Et(s);if(s.rank===1)for(let a=0;a<r[0];++a)i=J(i,Ht(n,[a*s.shape[0]],[s.shape[0]]));else if(s.rank===2)for(let a=0;a<r[0];++a)for(let l=0;l<r[1];++l)i=J(i,Ht(n,[a*s.shape[0],l*s.shape[1]],[s.shape[0],s.shape[1]]));else if(s.rank===3)for(let a=0;a<r[0];++a)for(let l=0;l<r[1];++l)for(let c=0;c<r[2];++c)i=J(i,Ht(n,[a*s.shape[0],l*s.shape[1],c*s.shape[2]],[s.shape[0],s.shape[1],s.shape[2]]));else if(s.rank===4)for(let a=0;a<r[0];++a)for(let l=0;l<r[1];++l)for(let c=0;c<r[2];++c)for(let u=0;u<r[3];++u)i=J(i,Ht(n,[a*s.shape[0],l*s.shape[1],c*s.shape[2],u*s.shape[3]],[s.shape[0],s.shape[1],s.shape[2],s.shape[3]]));else throw new Error(`Gradient for tile operation is not implemented for rank-${s.rank} tensors yet.`);return i}}}};const dA={kernelName:eo,gradFunc:(n,t,e)=>{const s=e,{perm:r}=s,o=Ks(r);return{x:()=>Tt(n,o)}}};const fA={kernelName:lu,gradFunc:(n,t,e)=>{const s=e,{axis:r}=s;return{value:()=>vs(n,r)}}};const pA={kernelName:cu,inputsToSave:["segmentIds"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>mA(n,e)}}};function mA(n,t){const e=Ys(t,Et(t)),s=yf(n,e);let r=Or(t,Ot(0,"int32"));const o=s.rank-r.rank;for(let a=0;a<o;++a)r=Ve(r,a+1);r=ws(r,Zs(s.shape,"bool"));const i=Et(s);return Oe(r,s,i)}const gA={kernelName:uu,gradFunc:n=>({x:()=>Et(n)})};const xA=[Gb,pE,mE,gE,xE,bE,yE,wE,vE,CE,$E,IE,NE,RE,AE,DE,_E,FE,OE,ME,LE,PE,BE,zE,UE,GE,HE,qE,jE,XE,PR,KE,YE,ZE,JE,QE,eR,tR,nR,sR,rR,oR,iR,aR,lR,cR,uR,hR,dR,mR,jm,jm,gR,yR,CR,$R,IR,kR,SR,NR,TR,ER,RR,AR,DR,Xm,Xm,_R,FR,LR,zR,BR,VR,WR,UR,GR,HR,qR,jR,XR,KR,YR,ZR,JR,QR,tA,eA,nA,Km,Km,Ym,Ym,sA,oA,rA,iA,aA,lA,cA,uA,hA,dA,fA,pA,gA];for(const n of xA)R$(n);H().prototype.abs=function(){return this.throwIfDisposed(),De(this)};H().prototype.acos=function(){return this.throwIfDisposed(),HI(this)};H().prototype.acosh=function(){return this.throwIfDisposed(),jI(this)};H().prototype.add=function(n){return this.throwIfDisposed(),J(this,n)};H().prototype.all=function(n,t){return this.throwIfDisposed(),S0(this,n,t)};H().prototype.any=function(n,t){return this.throwIfDisposed(),Oh(this,n,t)};H().prototype.argMax=function(n){return this.throwIfDisposed(),ai(this,n)};H().prototype.argMin=function(n){return this.throwIfDisposed(),JI(this,n)};H().prototype.asScalar=function(){return this.throwIfDisposed(),S(this.size===1,()=>"The array must have only 1 element."),L(this,[])};H().prototype.asType=function(n){return this.throwIfDisposed(),rt(this,n)};H().prototype.as1D=function(){return this.throwIfDisposed(),L(this,[this.size])};H().prototype.as2D=function(n,t){return this.throwIfDisposed(),L(this,[n,t])};H().prototype.as3D=function(n,t,e){return this.throwIfDisposed(),L(this,[n,t,e])};H().prototype.as4D=function(n,t,e,s){return this.throwIfDisposed(),L(this,[n,t,e,s])};H().prototype.as5D=function(n,t,e,s,r){return this.throwIfDisposed(),L(this,[n,t,e,s,r])};H().prototype.asin=function(){return this.throwIfDisposed(),tk(this)};H().prototype.asinh=function(){return this.throwIfDisposed(),nk(this)};H().prototype.atan=function(){return this.throwIfDisposed(),rk(this)};H().prototype.atan2=function(n){return this.throwIfDisposed(),ik(this,n)};H().prototype.atanh=function(){return this.throwIfDisposed(),lk(this)};H().prototype.avgPool=function(n,t,e,s){return this.throwIfDisposed(),ff(this,n,t,e,s)};H().prototype.batchToSpaceND=function(n,t){return this.throwIfDisposed(),pf(this,n,t)};H().prototype.batchNorm=function(n,t,e,s,r){return this.throwIfDisposed(),mu(this,n,t,e,s,r)};H().prototype.broadcastTo=function(n){return this.throwIfDisposed(),ri(this,n)};H().prototype.cast=function(n){return this.throwIfDisposed(),rt(this,n)};H().prototype.ceil=function(){return this.throwIfDisposed(),Ok(this)};H().prototype.clipByValue=function(n,t){return this.throwIfDisposed(),ln(this,n,t)};H().prototype.concat=function(n,t){return this.throwIfDisposed(),n instanceof le&&(n=[n]),Ue([this,...n],t)};H().prototype.conv1d=function(n,t,e,s,r,o){return this.throwIfDisposed(),N0(this,n,t,e,s,r,o)};H().prototype.conv2dTranspose=function(n,t,e,s,r){return this.throwIfDisposed(),T0(this,n,t,e,s,r)};H().prototype.conv2d=function(n,t,e,s,r,o){return this.throwIfDisposed(),$r(this,n,t,e,s,r,o)};H().prototype.cos=function(){return this.throwIfDisposed(),gf(this)};H().prototype.cosh=function(){return this.throwIfDisposed(),R0(this)};H().prototype.cumprod=function(n,t,e){return this.throwIfDisposed(),Lh(this,n,t,e)};H().prototype.cumsum=function(n,t,e){return this.throwIfDisposed(),A0(this,n,t,e)};H().prototype.depthToSpace=function(n,t){return this.throwIfDisposed(),iS(this,n,t)};H().prototype.depthwiseConv2d=function(n,t,e,s,r,o){return this.throwIfDisposed(),xf(this,n,t,e,s,r,o)};H().prototype.dilation2d=function(n,t,e,s,r){return this.throwIfDisposed(),cS(this,n,t,e,s,r)};H().prototype.divNoNan=function(n){return this.throwIfDisposed(),pS(this,n)};H().prototype.div=function(n){return this.throwIfDisposed(),ft(this,n)};H().prototype.dot=function(n){return this.throwIfDisposed(),gS(this,n)};H().prototype.elu=function(){return this.throwIfDisposed(),xu(this)};H().prototype.equal=function(n){return this.throwIfDisposed(),ls(this,n)};H().prototype.erf=function(){return this.throwIfDisposed(),D0(this)};H().prototype.euclideanNorm=function(n,t){return this.throwIfDisposed(),TS(this,n,t)};H().prototype.exp=function(){return this.throwIfDisposed(),cs(this)};H().prototype.expandDims=function(n){return this.throwIfDisposed(),Ve(this,n)};H().prototype.expm1=function(){return this.throwIfDisposed(),DS(this)};H().prototype.fft=function(){return this.throwIfDisposed(),Y0(this)};H().prototype.flatten=function(){return this.throwIfDisposed(),L(this,[this.size])};H().prototype.floor=function(){return this.throwIfDisposed(),yu(this)};H().prototype.floorDiv=function(n){return this.throwIfDisposed(),k0(this,n)};H().prototype.gather=function(n,t,e){return this.throwIfDisposed(),yf(this,n,t,e)};H().prototype.greaterEqual=function(n){return this.throwIfDisposed(),Or(this,n)};H().prototype.greater=function(n){return this.throwIfDisposed(),cn(this,n)};H().prototype.ifft=function(){return this.throwIfDisposed(),Ph(this)};H().prototype.irfft=function(){return this.throwIfDisposed(),kN(this)};H().prototype.isFinite=function(){return this.throwIfDisposed(),VS(this)};H().prototype.isInf=function(){return this.throwIfDisposed(),US(this)};H().prototype.isNaN=function(){return this.throwIfDisposed(),HS(this)};H().prototype.leakyRelu=function(n){return this.throwIfDisposed(),vf(this,n)};H().prototype.lessEqual=function(n){return this.throwIfDisposed(),So(this,n)};H().prototype.less=function(n){return this.throwIfDisposed(),Dl(this,n)};H().prototype.localResponseNormalization=function(n,t,e,s){return this.throwIfDisposed(),YS(this,n,t,e,s)};H().prototype.logSigmoid=function(){return this.throwIfDisposed(),s2(this)};H().prototype.logSoftmax=function(n){return this.throwIfDisposed(),L0(this,n)};H().prototype.logSumExp=function(n,t){return this.throwIfDisposed(),P0(this,n,t)};H().prototype.log=function(){return this.throwIfDisposed(),us(this)};H().prototype.log1p=function(){return this.throwIfDisposed(),M0(this)};H().prototype.logicalAnd=function(n){return this.throwIfDisposed(),ws(this,n)};H().prototype.logicalNot=function(){return this.throwIfDisposed(),Cf(this)};H().prototype.logicalOr=function(n){return this.throwIfDisposed(),z0(this,n)};H().prototype.logicalXor=function(n){return this.throwIfDisposed(),h2(this,n)};H().prototype.matMul=function(n,t,e){return this.throwIfDisposed(),Ft(this,n,t,e)};H().prototype.maxPool=function(n,t,e,s){return this.throwIfDisposed(),$f(this,n,t,e,s)};H().prototype.max=function(n,t){return this.throwIfDisposed(),Fn(this,n,t)};H().prototype.maximum=function(n){return this.throwIfDisposed(),Ys(this,n)};H().prototype.mean=function(n,t){return this.throwIfDisposed(),ie(this,n,t)};H().prototype.min=function(n,t){return this.throwIfDisposed(),Al(this,n,t)};H().prototype.minimum=function(n){return this.throwIfDisposed(),ui(this,n)};H().prototype.mirrorPad=function(n,t){return this.throwIfDisposed(),y2(this,n,t)};H().prototype.mod=function(n){return this.throwIfDisposed(),v2(this,n)};H().prototype.mul=function(n){return this.throwIfDisposed(),_(this,n)};H().prototype.neg=function(){return this.throwIfDisposed(),te(this)};H().prototype.norm=function(n,t,e){return this.throwIfDisposed(),bu(this,n,t,e)};H().prototype.notEqual=function(n){return this.throwIfDisposed(),_l(this,n)};H().prototype.oneHot=function(n,t=1,e=0){return this.throwIfDisposed(),B0(this,n,t,e)};H().prototype.onesLike=function(){return this.throwIfDisposed(),bn(this)};H().prototype.pad=function(n,t){return this.throwIfDisposed(),kf(this,n,t)};H().prototype.pool=function(n,t,e,s,r,o){return this.throwIfDisposed(),A2(this,n,t,e,s,r,o)};H().prototype.pow=function(n){return this.throwIfDisposed(),Ir(this,n)};H().prototype.prelu=function(n){return this.throwIfDisposed(),Nf(this,n)};H().prototype.prod=function(n,t){return this.throwIfDisposed(),F2(this,n,t)};H().prototype.reciprocal=function(){return this.throwIfDisposed(),oN(this)};H().prototype.relu=function(){return this.throwIfDisposed(),Mr(this)};H().prototype.relu6=function(){return this.throwIfDisposed(),W0(this)};H().prototype.reshapeAs=function(n){return this.throwIfDisposed(),L(this,n.shape)};H().prototype.reshape=function(n){return this.throwIfDisposed(),L(this,n)};H().prototype.resizeBilinear=function(n,t,e){return this.throwIfDisposed(),eb(this,n,t,e)};H().prototype.resizeNearestNeighbor=function(n,t,e){return this.throwIfDisposed(),nb(this,n,t,e)};H().prototype.reverse=function(n){return this.throwIfDisposed(),kr(this,n)};H().prototype.rfft=function(){return this.throwIfDisposed(),TN(this)};H().prototype.round=function(){return this.throwIfDisposed(),U0(this)};H().prototype.rsqrt=function(){return this.throwIfDisposed(),G0(this)};H().prototype.selu=function(){return this.throwIfDisposed(),H0(this)};H().prototype.separableConv2d=function(n,t,e,s,r,o){return this.throwIfDisposed(),q0(this,n,t,e,s,r,o)};H().prototype.sigmoid=function(){return this.throwIfDisposed(),ko(this)};H().prototype.sign=function(){return this.throwIfDisposed(),pN(this)};H().prototype.sin=function(){return this.throwIfDisposed(),j0(this)};H().prototype.sinh=function(){return this.throwIfDisposed(),X0(this)};H().prototype.slice=function(n,t){return this.throwIfDisposed(),Ht(this,n,t)};H().prototype.softmax=function(n){return this.throwIfDisposed(),Af(this,n)};H().prototype.softplus=function(){return this.throwIfDisposed(),wa(this)};H().prototype.spaceToBatchND=function(n,t){return this.throwIfDisposed(),Sf(this,n,t)};H().prototype.split=function(n,t){return this.throwIfDisposed(),an(this,n,t)};H().prototype.sqrt=function(){return this.throwIfDisposed(),Ne(this)};H().prototype.square=function(){return this.throwIfDisposed(),jt(this)};H().prototype.squaredDifference=function(n){return this.throwIfDisposed(),RN(this,n)};H().prototype.squeeze=function(n){return this.throwIfDisposed(),Ca(this,n)};H().prototype.stack=function(n,t){this.throwIfDisposed();const e=n instanceof le?[this,n]:[this,...n];return vs(e,t)};H().prototype.step=function(n){return this.throwIfDisposed(),$a(this,n)};H().prototype.stridedSlice=function(n,t,e,s,r,o,i,a){return this.throwIfDisposed(),ON(this,n,t,e,s,r,o,i,a)};H().prototype.sub=function(n){return this.throwIfDisposed(),pt(this,n)};H().prototype.sum=function(n,t){return this.throwIfDisposed(),dt(this,n,t)};H().prototype.tan=function(){return this.throwIfDisposed(),LN(this)};H().prototype.tanh=function(){return this.throwIfDisposed(),pu(this)};H().prototype.tile=function(n){return this.throwIfDisposed(),Dn(this,n)};H().prototype.toBool=function(){return this.throwIfDisposed(),rt(this,"bool")};H().prototype.toFloat=function(){return this.throwIfDisposed(),rt(this,"float32")};H().prototype.toInt=function(){return this.throwIfDisposed(),rt(this,"int32")};H().prototype.topk=function(n,t){return this.throwIfDisposed(),BN(this,n,t)};H().prototype.transpose=function(n){return this.throwIfDisposed(),Tt(this,n)};H().prototype.unique=function(n){return this.throwIfDisposed(),UN(this,n)};H().prototype.unsortedSegmentSum=function(n,t){return this.throwIfDisposed(),Q0(this,n,t)};H().prototype.unstack=function(n){return this.throwIfDisposed(),Sr(this,n)};H().prototype.where=function(n,t){return this.throwIfDisposed(),Oe(n,this,t)};H().prototype.zerosLike=function(){return this.throwIfDisposed(),Et(this)};class Yn extends Error{constructor(t){super(t),Object.setPrototypeOf(this,Yn.prototype)}}class mn extends Error{constructor(t){super(t),Object.setPrototypeOf(this,mn.prototype)}}class A extends Error{constructor(t){super(t),Object.setPrototypeOf(this,A.prototype)}}class vt extends Error{constructor(t){super(t),Object.setPrototypeOf(this,vt.prototype)}}class pp extends Error{constructor(t){super(t),Object.setPrototypeOf(this,pp.prototype)}}class qb{constructor(t){this.maxEntries=t||100,this.cache=new Map}get(t){let e;return this.cache.has(t)&&(e=this.cache.get(t),this.cache.delete(t),this.cache.set(t,e)),e}put(t,e){if(this.cache.has(t))this.cache.delete(t);else if(this.cache.size>=this.maxEntries){const s=this.cache.keys().next().value;this.cache.delete(s)}this.cache.set(t,e)}getMaxEntries(){return this.maxEntries}setMaxEntries(t){if(t<0)throw new Error(`The maxEntries of LRU caches must be at least 0, but got ${t}.`);if(this.maxEntries>t)for(let e=0;e<this.maxEntries-t;e++){const s=this.cache.keys().next().value;this.cache.delete(s)}this.maxEntries=t}}function Nr(n,t){if(Array.isArray(n)){let e=[];for(let s=0;s<t;s++)e=e.concat(n);return e}else{const e=new Array(t);return e.fill(n),e}}function Zn(n,t){if(!n)throw new pp(t)}function Zm(n,t){let e=0;for(const s of n)s===t&&e++;return e}function We(n){return n.length===1?n[0]:n}function zt(n){return Array.isArray(n)?n:[n]}function xs(n){const e=n.replace(/(.)([A-Z][a-z0-9]+)/g,"$1_$2").replace(/([a-z])([A-Z])/g,"$1_$2").toLowerCase();return e[0]!=="_"?e:"private"+e}function ir(n){return n.length<=1||n.indexOf("_")===-1?n:n.replace(/[_]+(\w|$)/g,(t,e)=>e.toUpperCase())}let hn={};function mp(n){if(n==null)return null;const t={};return t.className=n.getClassName(),t.config=n.getConfig(),t}function Vh(n){if(!(n==null||typeof n!="object"))if(Array.isArray(n))n.forEach(t=>Vh(t));else{const t=Object.keys(n);for(const e of t){const s=n[e];s!=null&&typeof s=="object"&&(!Array.isArray(s)&&s.type==="ndarray"&&typeof s.value=="number"?n[e]=s.value:Vh(s))}}}function Na(n,t={},e={},s="object",r=!1){if(typeof n=="string"){const o=n;let i;if(o in e)i=e[o];else if(o in hn)i=hn[o];else if(i=t[o],i==null)throw new A(`Unknown ${s}: ${n}. This may be due to one of the following reasons:
1. The ${s} is defined in Python, in which case it needs to be ported to TensorFlow.js or your JavaScript code.
2. The custom ${s} is defined in JavaScript, but is not registered properly with tf.serialization.registerClass().`);return i}else{const o=n;if(o.className==null||o.config==null)throw new A(`${s}: Improper config format: ${JSON.stringify(o)}.
'className' and 'config' must set.`);const i=o.className;let a,l;if(i in e?[a,l]=e[i]:i in hn?[a,l]=hn.className:i in t&&([a,l]=t[i]),a==null)throw new A(`Unknown ${s}: ${i}. This may be due to one of the following reasons:
1. The ${s} is defined in Python, in which case it needs to be ported to TensorFlow.js or your JavaScript code.
2. The custom ${s} is defined in JavaScript, but is not registered properly with tf.serialization.registerClass().`);if(l!=null){const c={};for(const f of Object.keys(hn))c[f]=hn[f];for(const f of Object.keys(e))c[f]=e[f];const u=o.config;u.customObjects=c;const h=Object.assign({},hn);for(const f of Object.keys(e))hn[f]=e[f];Vh(o.config);const d=l(a,o.config,e,r);return hn=Object.assign({},h),d}else{const c=Object.assign({},hn);for(const h of Object.keys(e))hn[h]=e[h];const u=new a(o.config);return hn=Object.assign({},c),u}}}function bA(n,t){return n<t?-1:n>t?1:0}function Xa(n,t){return-1*bA(n,t)}function Ls(n){if(n==null)return n;const t=[];for(const e of n)t.indexOf(e)===-1&&t.push(e);return t}function yA(n){if(n==null)throw new A(`Invalid value in obj: ${JSON.stringify(n)}`);for(const t in n)if(n.hasOwnProperty(t))return!1;return!0}function Pr(n,t,e){if(e!=null&&n.indexOf(e)<0)throw new A(`${e} is not a valid ${t}.  Valid values are ${n} or null/undefined.`)}function gp(n,t,e=0,s=1/0){return Zn(e>=0),Zn(s>=e),Array.isArray(n)&&n.length>=e&&n.length<=s&&n.every(r=>typeof r===t)}function be(n,t){Array.isArray(n)?(S(n.length>0,()=>`${t} is unexpectedly an empty array.`),n.forEach((e,s)=>be(e,`element ${s+1} of ${t}`))):S(Number.isInteger(n)&&n>0,()=>`Expected ${t} to be a positive integer, but got ${jb(n)}.`)}function jb(n){return n===null?"null":Array.isArray(n)?"["+n.map(t=>jb(t)).join(",")+"]":typeof n=="string"?`"${n}"`:`${n}`}function wA(n,t,e){let s=e!=null?e():Be(),r;return(...i)=>{const a=e!=null?e():Be();return a-s<t||(s=a,r=n(...i)),r}}function Xb(n){return n==="relu"?"relu":n==="linear"?"linear":n==="elu"?"elu":null}let vA=0;function Kb(){return vA++}const Ka={};function Iu(n=""){return n in Ka||(Ka[n]=0),Ka[n]+=1,n+Ka[n].toString()}const CA=["channelsFirst","channelsLast"],$A=["nearest","bilinear"],IA=["valid","same","causal"],kA=["max","avg"],SA=["sum","mul","concat","ave"];const jr=new Map;function se(n){Pr(CA,"DataFormat",n)}function NA(n){Pr($A,"InterpolationFormat",n)}function un(n){Pr(IA,"PaddingMode",n)}function Yb(n){Pr(kA,"PoolMode",n)}const oi=[],Jm="/";function fr(n,t){oi.push(n);try{const e=t();return oi.pop(),e}catch(e){throw oi.pop(),e}}function TA(){return oi.length===0?"":oi.join(Jm)+Jm}function Zb(n){if(!Qb(n))throw new Error("Not a valid tensor name: '"+n+"'");return TA()+n}function Jb(n){if(!Qb(n))throw new Error("Not a valid tensor name: '"+n+"'");jr.has(n)||jr.set(n,0);const t=jr.get(n);if(jr.set(n,jr.get(n)+1),t>0){const e=`${n}_${t}`;return jr.set(e,1),e}else return n}const EA=new RegExp(/^[A-Za-z0-9][-A-Za-z0-9\._\/]*$/);function Qb(n){return!!n.match(EA)}function RA(n){return n===parseInt(n.toString(),10)}function Ps(n,t,e){t==null&&(t=0),e==null&&(e=n.length);let s=1;for(let r=t;r<e;++r)s*=n[r];return s}function fo(n){if(n.length===0)return Number.NaN;let t=Number.POSITIVE_INFINITY;for(let e=0;e<n.length;e++){const s=n[e];s<t&&(t=s)}return t}function Bs(n){if(n.length===0)return Number.NaN;let t=Number.NEGATIVE_INFINITY;for(let e=0;e<n.length;e++){const s=n[e];s>t&&(t=s)}return t}function Mn(n,t){if(t<n)throw new A(`end (${t}) < begin (${n}) is forbidden.`);const e=[];for(let s=n;s<t;++s)e.push(s);return e}let rh;function ce(){return rh==null&&(rh=rI().epsilon()),rh}function Ln(){return"channelsLast"}function rs(n,t){return rt(n,t)}function Ta(n,t=-1){const e=n.shape.slice();return t<0&&(t=e.length+t+1),e.splice(t,0,1),L(n,e)}function AA(n,t){return B(()=>{if(n.shape.length!==2)throw new A(`repeat() expects a rank-2 tensor, but received a rank-${n.shape.length} tensor.`);const e=Ta(n,1);return Wh(e,[1,t,1])})}function DA(n){const t=[Ps(n.shape)];return L(n,t)}function _A(n){if(n.rank<=1)throw new A(`batchFlatten requires a minimum rank of 2. Got rank: ${n.rank}.`);const t=[n.shape[0],Ps(n.shape,1)];return L(n,t)}function pr(n,t,e){return B(()=>{switch(n.rank){case 1:return Ef(n,t,e);case 2:return K0(n,[t,0],[e,n.shape[1]]);case 3:return Rf(n,[t,0,0],[e,n.shape[1],n.shape[2]]);case 4:return Ol(n,[t,0,0,0],[e,n.shape[1],n.shape[2],n.shape[3]]);case 5:return Ht(n,[t,0,0,0,0],[e,n.shape[1],n.shape[2],n.shape[3],n.shape[4]]);case 6:return Ht(n,[t,0,0,0,0,0],[e,n.shape[1],n.shape[2],n.shape[3],n.shape[4],n.shape[5]]);default:throw new A(`sliceAlongFirstAxis() received an unsupported tensor rank: ${n.rank}`)}})}function oh(n,t,e){return B(()=>{switch(n.rank){case 1:return Ef(n,t,e);case 2:return K0(n,[0,t],[n.shape[0],e]);case 3:return Rf(n,[0,0,t],[n.shape[0],n.shape[1],e]);case 4:return Ol(n,[0,0,0,t],[n.shape[0],n.shape[1],n.shape[2],e]);default:throw new A(`sliceAlongLastAxis() received an unsupported tensor rank: ${n.rank}`)}})}function Ya(n,t,e,s){return B(()=>{switch(n.rank){case 1:return Ef(n,t,e);case 2:switch(s){case 1:return pr(n,t,e);case 2:return oh(n,t,e);default:throw new A(`The axis is not within the rank of the tensor ${s}`)}case 3:switch(s){case 1:return pr(n,t,e);case 2:return Rf(n,[0,t,0],[n.shape[0],e,n.shape[2]]);case 3:return oh(n,t,e);default:throw new A(`The axis is not within the rank of the tensor ${s}`)}case 4:switch(s){case 1:return pr(n,t,e);case 2:return Ol(n,[0,t,0,0],[n.shape[0],e,n.shape[2],n.shape[3]]);case 3:return Ol(n,[0,0,t,0],[n.shape[0],n.shape[1],e,n.shape[3]]);case 4:return oh(n,t,e);default:throw new A(`The axis is not within the rank of the tensor ${s}`)}default:throw new A(`sliceAlongLastAxis() received an unsupported tensor rank: ${n.rank}`)}})}function xp(n,t=-1){let e;return t<0&&(e=n[0].rank,e!==0?t=e:t=0),t===n[0].rank&&(t=-1),Ue(n,t)}function Qm(n,t){switch(n.rank){case 1:return Pk([n,t]);case 2:return Bk([n,t],0);case 3:return Wk([n,t],0);case 4:return Gk([n,t],0);default:throw new A(`concatAlongFirstAxis() received an unsupported tensor rank: ${n.rank}`)}}function Wh(n,t){if(Array.isArray(t)||(t=[t]),n.rank!==t.length)throw new A(`The length of input n (${t.length}) does not match the number of dimensions in input x (${n.rank})`);return Dn(n,t)}function ku(n,t=0,e=1,s,r){return eN(n,t,e,s,r)}function os(n,t,e,s){if(n.rank<2||t.rank<2)throw new vt(`dot requires both inputs to be rank >= 2 but got x shape = ${n.shape} and y shape = ${t.shape}`);if(t.rank>=3){const r=n.shape.slice(-1)[0],o=t.shape.slice(-2)[0];if(r!==o)throw new vt(`If rank y >= 3, then the second last dim of y must equal the last dim of x but got x shape = ${n.shape} and  y shape = ${t.shape}`)}if(n.rank===2&&t.rank===2)return Lm({a:n,b:t,transposeA:!1,transposeB:!1,bias:s?Uh(n.rank,s,Ln()):null,activation:e});{const r=n.shape.slice(),o=r.pop();n=L(n,[-1,o]);const i=t.shape.slice(),a=i.pop(),l=i.pop(),c=[...i,a],u=Array.from({length:t.rank},(p,m)=>m===0?t.rank-2:m<=t.rank-2?m-1:m);t=L(Tt(t,u),[l,-1]);const h=[...r,...c];return L(Lm({a:n,b:t,transposeA:!1,transposeB:!1,bias:s?Uh(n.rank,s,Ln()):null,activation:e}),h)}}function ty(n,t,e){return B(()=>(Array.isArray(t)?t=Ze(t,"int32"):t=rt(t,"int32"),yf(n,t,e)))}function Ea(n){return _(n,n)}function Uh(n,t,e){const s=t.shape;if(t.rank!==1&&t.rank!==n)throw new A(`Unexpected bias dimensions: ${t.rank}; expected it to be 1 or ${n}`);if(n===5){if(e==="channelsFirst")return s.length===1?L(t,[1,s[0],1,1,1]):L(t,[1,s[3],s[0],s[1],s[2]]);if(e==="channelsLast")return s.length===1?L(t,[1,1,1,1,s[0]]):L(t,[1].concat(s))}else if(n===4){if(e==="channelsFirst")return s.length===1?L(t,[1,s[0],1,1]):L(t,[1,s[2],s[0],s[1]]);if(e==="channelsLast")return s.length===1?L(t,[1,1,1,s[0]]):L(t,[1].concat(s))}else if(n===3){if(e==="channelsFirst")return s.length===1?L(t,[1,s[0],1]):L(t,[1,s[1],s[0]]);if(e==="channelsLast")return s.length===1?L(t,[1,1,s[0]]):L(t,[1].concat(s))}else if(n<3)return t;throw new A(`Unsupported input rank by biasAdd: ${t.rank}`)}function Bn(n,t,e){return B(()=>(e==null&&(e=Ln()),se(e),J(n,Uh(n.rank,t,e))))}function FA(n,t=1){if(t!==1)throw new vt(`Support for alpha values other than 1 (${t}) is not implemented yet.`);return xu(n)}function OA(n){return B(()=>ft(n,J(De(n),1)))}function ey(n,t,e,s){return B(()=>YN(n,t,e,s))}function MA(n){return B(()=>{const t=J(.5,_(.2,n));return ln(t,0,1)})}function Ra(n,t,e=!1){return e?n():t()}const LA=["fanIn","fanOut","fanAvg"],PA=["normal","uniform","truncatedNormal"];function zA(n){Pr(LA,"FanMode",n)}function BA(n){Pr(PA,"Distribution",n)}class wn extends To{fromConfigUsesCustomObjects(){return!1}getConfig(){return{}}}class ny extends wn{apply(t,e){return xe(t,e)}}ny.className="Zeros";Z(ny);class bp extends wn{apply(t,e){return Zs(t,e)}}bp.className="Ones";Z(bp);class sy extends wn{constructor(t){if(super(),typeof t!="object")throw new A(`Expected argument of type ConstantConfig but got ${t}`);if(t.value===void 0)throw new A(`config must have value set but got ${t}`);this.value=t.value}apply(t,e){return B(()=>_(Ot(this.value),Zs(t,e)))}getConfig(){return{value:this.value}}}sy.className="Constant";Z(sy);class ry extends wn{constructor(t){super(),this.DEFAULT_MINVAL=-.05,this.DEFAULT_MAXVAL=.05,this.minval=t.minval||this.DEFAULT_MINVAL,this.maxval=t.maxval||this.DEFAULT_MAXVAL,this.seed=t.seed}apply(t,e){return va(t,this.minval,this.maxval,e,this.seed)}getConfig(){return{minval:this.minval,maxval:this.maxval,seed:this.seed}}}ry.className="RandomUniform";Z(ry);class oy extends wn{constructor(t){super(),this.DEFAULT_MEAN=0,this.DEFAULT_STDDEV=.05,this.mean=t.mean||this.DEFAULT_MEAN,this.stddev=t.stddev||this.DEFAULT_STDDEV,this.seed=t.seed}apply(t,e){if(e=e||"float32",e!=="float32"&&e!=="int32")throw new vt(`randomNormal does not support dType ${e}.`);return ku(t,this.mean,this.stddev,e,this.seed)}getConfig(){return{mean:this.mean,stddev:this.stddev,seed:this.seed}}}oy.className="RandomNormal";Z(oy);class iy extends wn{constructor(t){super(),this.DEFAULT_MEAN=0,this.DEFAULT_STDDEV=.05,this.mean=t.mean||this.DEFAULT_MEAN,this.stddev=t.stddev||this.DEFAULT_STDDEV,this.seed=t.seed}apply(t,e){if(e=e||"float32",e!=="float32"&&e!=="int32")throw new vt(`truncatedNormal does not support dType ${e}.`);return J0(t,this.mean,this.stddev,e,this.seed)}getConfig(){return{mean:this.mean,stddev:this.stddev,seed:this.seed}}}iy.className="TruncatedNormal";Z(iy);class ay extends wn{constructor(t){super(),this.gain=t.gain!=null?t.gain:1}apply(t,e){return B(()=>{if(t.length!==2||t[0]!==t[1])throw new A("Identity matrix initializer can only be used for 2D square matrices.");return _(this.gain,O0(t[0]))})}getConfig(){return{gain:this.gain}}}ay.className="Identity";Z(ay);function VA(n,t="channelsLast"){let e,s;if(se(t),n.length===2)e=n[0],s=n[1];else if([3,4,5].indexOf(n.length)!==-1){if(t==="channelsFirst"){const r=Ps(n,2);e=n[1]*r,s=n[0]*r}else if(t==="channelsLast"){const r=Ps(n,0,n.length-2);e=n[n.length-2]*r,s=n[n.length-1]*r}}else{const r=Ps(n);e=Math.sqrt(r),s=Math.sqrt(r)}return[e,s]}class tn extends wn{constructor(t){if(super(),t.scale<0)throw new A(`scale must be a positive float. Got: ${t.scale}`);this.scale=t.scale==null?1:t.scale,this.mode=t.mode==null?"fanIn":t.mode,zA(this.mode),this.distribution=t.distribution==null?"normal":t.distribution,BA(this.distribution),this.seed=t.seed}apply(t,e){const s=VA(t),r=s[0],o=s[1];let i=this.scale;if(this.mode==="fanIn"?i/=Math.max(1,r):this.mode==="fanOut"?i/=Math.max(1,o):i/=Math.max(1,(r+o)/2),this.distribution==="normal"){const a=Math.sqrt(i);if(e=e||"float32",e!=="float32"&&e!=="int32")throw new vt(`${this.getClassName()} does not support dType ${e}.`);return J0(t,0,a,e,this.seed)}else{const a=Math.sqrt(3*i);return va(t,-a,a,e,this.seed)}}getConfig(){return{scale:this.scale,mode:this.mode,distribution:this.distribution,seed:this.seed}}}tn.className="VarianceScaling";Z(tn);class yp extends tn{constructor(t){super({scale:1,mode:"fanAvg",distribution:"uniform",seed:t==null?null:t.seed})}getClassName(){return tn.className}}yp.className="GlorotUniform";Z(yp);class wp extends tn{constructor(t){super({scale:1,mode:"fanAvg",distribution:"normal",seed:t==null?null:t.seed})}getClassName(){return tn.className}}wp.className="GlorotNormal";Z(wp);class vp extends tn{constructor(t){super({scale:2,mode:"fanIn",distribution:"normal",seed:t==null?null:t.seed})}getClassName(){return tn.className}}vp.className="HeNormal";Z(vp);class Cp extends tn{constructor(t){super({scale:2,mode:"fanIn",distribution:"uniform",seed:t==null?null:t.seed})}getClassName(){return tn.className}}Cp.className="HeUniform";Z(Cp);class $p extends tn{constructor(t){super({scale:1,mode:"fanIn",distribution:"normal",seed:t==null?null:t.seed})}getClassName(){return tn.className}}$p.className="LeCunNormal";Z($p);class Ip extends tn{constructor(t){super({scale:1,mode:"fanIn",distribution:"uniform",seed:t==null?null:t.seed})}getClassName(){return tn.className}}Ip.className="LeCunUniform";Z(Ip);class ly extends wn{constructor(t){super(),this.DEFAULT_GAIN=1,this.ELEMENTS_WARN_SLOW=2e3,this.gain=t.gain==null?this.DEFAULT_GAIN:t.gain,this.seed=t.seed}apply(t,e){return B(()=>{if(t.length<2)throw new vt("Shape must be at least 2D.");if(e!=="int32"&&e!=="float32"&&e!==void 0)throw new TypeError(`Unsupported data type ${e}.`);e=e;const s=q(t.slice(0,-1)),r=t[t.length-1],o=s*r;o>this.ELEMENTS_WARN_SLOW&&console.warn(`Orthogonal initializer is being called on a matrix with more than ${this.ELEMENTS_WARN_SLOW} (${o}) elements: Slowness may result.`);const i=[Math.max(r,s),Math.min(r,s)],a=ku(i,0,1,e,this.seed),l=qT.qr(a,!1);let c=l[0];const h=l[1].flatten().stridedSlice([0],[Math.min(r,s)*Math.min(r,s)],[Math.min(r,s)+1]);return c=_(c,h.sign()),s<r&&(c=c.transpose()),_(Ot(this.gain),c.reshape(t))})}getConfig(){return{gain:this.gain,seed:this.seed}}}ly.className="Orthogonal";Z(ly);const tg={constant:"Constant",glorotNormal:"GlorotNormal",glorotUniform:"GlorotUniform",heNormal:"HeNormal",heUniform:"HeUniform",identity:"Identity",leCunNormal:"LeCunNormal",leCunUniform:"LeCunUniform",ones:"Ones",orthogonal:"Orthogonal",randomNormal:"RandomNormal",randomUniform:"RandomUniform",truncatedNormal:"TruncatedNormal",varianceScaling:"VarianceScaling",zeros:"Zeros"};function eg(n,t={}){return Na(n,pn.getMap().classNameMap,t,"initializer")}function Zt(n){return mp(n)}function Xt(n){if(typeof n=="string"){const t=n in tg?tg[n]:n;if(t==="GlorotNormal")return new wp;if(t==="GlorotUniform")return new yp;if(t==="HeNormal")return new vp;if(t==="HeUniform")return new Cp;if(t==="LeCunNormal")return new $p;if(t==="LeCunUniform")return new Ip;{const e={};return e.className=t,e.config={},eg(e)}}else return n instanceof wn?n:eg(n)}function Gh(n){return Array.isArray(n)&&Array.isArray(n[0])}function Ml(n){return n.length===0?[]:Array.isArray(n[0])?n:[n]}function gt(n){let t;if(Array.isArray(n)){if(n.length!==1)throw new A(`Expected Tensor length to be 1; got ${n.length}`);t=n[0]}else t=n;return t}function At(n){if(Array.isArray(n)&&Array.isArray(n[0])){if(n.length===1)return n=n,n[0];throw new A(`Expected exactly 1 Shape; got ${n.length}`)}else return n}function Ll(n){let t=0;for(const e of n)e.shape.length===0?t+=1:t+=e.shape.reduce((s,r)=>s*r);return t}const ng="Variable";class WA{constructor(t,e="float32",s=ng,r=!0,o=null){this.dtype=e??"float32",this.shape=t.shape,this.id=Kb(),s=s??ng,this.originalName=Zb(s),this.name=Jb(this.originalName),this.trainable_=r,this.constraint=o,this.val=qN(t,this.trainable_,this.name,this.dtype)}read(){return this.assertNotDisposed(),this.val}write(t){return this.assertNotDisposed(),UA(this.val,t),this.val.id!==t.id&&(this.val.assign(t),this.constraint!=null&&this.val.assign(this.constraint.apply(this.val))),this}dispose(){this.assertNotDisposed(),this.val.dispose()}assertNotDisposed(){if(this.val.isDisposed)throw new Error(`LayersVariable ${this.name} is already disposed.`)}get trainable(){return this.trainable_}set trainable(t){this.trainable_=t,this.val.trainable=t}}function UA(n,t){if(n.shape.toString()!==t.shape.toString())throw new Error("Shape mismatch: "+JSON.stringify(n.shape)+" vs. "+JSON.stringify(t.shape))}function Hh(n){return n.map(t=>t.read())}function kp(n){n.forEach(t=>{t[0].write(t[1])})}class ue{constructor(t){this.dtype=t.dtype,this.shape=t.shape,t.shape!=null?this.ndim=t.shape.length:this.ndim=t.ndim,this.maxNDim=t.maxNDim,this.minNDim=t.minNDim,this.axes=t.axes||{}}}class hs{constructor(t,e,s,r,o,i,a){this.dtype=t,this.shape=e,this.sourceLayer=s,this.inputs=r,this.callArgs=o,this.outputTensorIndex=a,this.id=Kb(),i!=null&&(this.originalName=Zb(i),this.name=Jb(this.originalName)),this.rank=e.length}}let GA=0;class Su{constructor(t,e){this.callArgs=e,this.id=GA++,this.outboundLayer=t.outboundLayer,this.inboundLayers=t.inboundLayers,this.nodeIndices=t.nodeIndices,this.tensorIndices=t.tensorIndices,this.inputTensors=t.inputTensors,this.outputTensors=t.outputTensors,this.inputMasks=t.inputMasks,this.outputMasks=t.outputMasks,this.inputShapes=t.inputShapes,this.outputShapes=t.outputShapes;for(const s of t.inboundLayers)s?.outboundNodes.push(this);t.outboundLayer.inboundNodes.push(this)}getConfig(){const t=[];for(const e of this.inboundLayers)e!=null?t.push(e.name):t.push(null);return{outboundLayer:this.outboundLayer?this.outboundLayer.name:null,inboundLayers:t,nodeIndices:this.nodeIndices,tensorIndices:this.tensorIndices}}}let HA=0;class kt extends To{constructor(t={}){super(),this._callHook=null,this._addedWeightNames=[],this._stateful=!1,this.id=HA++,this.activityRegularizer=null,this.inputSpec=null,this.supportsMasking=!1,this._trainableWeights=[],this._nonTrainableWeights=[],this._losses=[],this._updates=[],this._built=!1,this.inboundNodes=[],this.outboundNodes=[];let e=t.name;if(!e){const s=this.getClassName();e=xs(s)+"_"+Iu(s)}if(this.name=e,this.trainable_=t.trainable==null?!0:t.trainable,t.inputShape!=null||t.batchInputShape!=null){let s;if(t.batchInputShape!=null)s=t.batchInputShape;else if(t.inputShape!=null){let o=null;t.batchSize!=null&&(o=t.batchSize),s=[o].concat(t.inputShape)}this.batchInputShape=s;let r=t.dtype;r==null&&(r=t.inputDType),r==null&&(r="float32"),this.dtype=r}t.weights!=null?this.initialWeights=t.weights:this.initialWeights=null,this._refCount=null,this.fastWeightInitDuringBuild=!1}static nodeKey(t,e){return t.name+"_ib-"+e.toString()}getNodeAtIndex(t,e){if(this.inboundNodes.length===0)throw new mn(`The layer has never been called and thus has no defined ${e}.`);if(this.inboundNodes.length<=t)throw new A(`Asked to get ${e} at node ${t}, but the layer has only ${this.inboundNodes.length} inbound nodes.`);return this.inboundNodes[t]}getInputAt(t){return We(this.getNodeAtIndex(t,"input").inputTensors)}getOutputAt(t){return We(this.getNodeAtIndex(t,"output").outputTensors)}get input(){if(this.inboundNodes.length>1)throw new Yn(`Layer ${this.name} has multiple inbound nodes, hence the notion of "layer input" is ill-defined. Use \`getInputAt(nodeIndex)\` instead.`);if(this.inboundNodes.length===0)throw new Yn(`Layer ${this.name} is not connected, no input to return.`);return We(this.getNodeAtIndex(0,"input").inputTensors)}get output(){if(this.inboundNodes.length===0)throw new Yn(`Layer ${this.name} has no inbound nodes.`);if(this.inboundNodes.length>1)throw new Yn(`Layer ${this.name} has multiple inbound nodes, hence the notion of "layer output" is ill-defined. Use \`getOutputAt(nodeIndex)\` instead.`);return We(this.getNodeAtIndex(0,"output").outputTensors)}get losses(){return this._losses}calculateLosses(){return this.losses.map(t=>t())}get updates(){return this._updates}get built(){return this._built}set built(t){this._built=t}get trainable(){return this.trainable_}set trainable(t){this._trainableWeights.forEach(e=>e.trainable=t),this.trainable_=t}get trainableWeights(){return this.trainable_?this._trainableWeights.filter(t=>t.trainable):[]}set trainableWeights(t){this._trainableWeights=t}get nonTrainableWeights(){return this.trainable?this._trainableWeights.filter(t=>!t.trainable).concat(this._nonTrainableWeights):this._trainableWeights.concat(this._nonTrainableWeights)}set nonTrainableWeights(t){this._nonTrainableWeights=t}get weights(){return this.trainableWeights.concat(this.nonTrainableWeights)}get stateful(){return this._stateful}resetStates(){if(!this.stateful)throw new Error("Cannot call the resetStates() method of a non-stateful Layer object.")}assertInputCompatibility(t){const e=zt(t);if(this.inputSpec==null||this.inputSpec.length===0)return;const s=zt(this.inputSpec);if(e.length!==s.length)throw new A(`Layer ${this.name} expects ${s.length} inputs, but it received ${e.length} input tensors. Input received: ${t}`);for(let r=0;r<e.length;r++){const o=e[r],i=s[r];if(i==null)continue;const a=o.rank;if(i.ndim!=null&&a!==i.ndim)throw new A(`Input ${r} is incompatible with layer ${this.name}: expected ndim=${i.ndim}, found ndim=${a}`);if(i.maxNDim!=null&&a>i.maxNDim)throw new A(`Input ${r} is incompatible with layer ${this.name}: expected max_ndim=${i.maxNDim}, found ndim=${a}`);if(i.minNDim!=null&&a<i.minNDim)throw new A(`Input ${r} is incompatible with layer ${this.name}: expected min_ndim=${i.minNDim}, found ndim=${a}.`);if(i.dtype!=null&&o.dtype!==i.dtype)throw new A(`Input ${r} is incompatible with layer ${this.name} : expected dtype=${i.dtype}, found dtype=${o.dtype}.`);if(i.axes){const l=o.shape;for(const c in i.axes){const u=Number(c),h=i.axes[c],d=u>=0?l[u]:l[l.length+u];if(h!=null&&[h,null].indexOf(d)===-1)throw new A(`Input ${r} is incompatible with layer ${this.name}: expected axis ${u} of input shape to have value ${h} but got shape ${l}.`)}}if(i.shape!=null)for(let l=0;l<i.shape.length;++l){const c=i.shape[l],u=o.shape[l];if(c!=null&&u!=null&&c!==u)throw new A(`Input ${r} is incompatible with layer ${this.name}: expected shape=${i.shape}, found shape=${o.shape}.`)}}}call(t,e){return t}invokeCallHook(t,e){this._callHook!=null&&this._callHook(t,e)}setCallHook(t){this._callHook=t}clearCallHook(){this._callHook=null}apply(t,e){e=e||{},this.assertNotDisposed();const s=zt(t),r=XA(t),o=KA(t);if(r===o)throw new A("Arguments to apply() must be all SymbolicTensors or all Tensors");return fr(this.name,()=>{if(!this.built){this.assertInputCompatibility(t);const i=[];for(const a of zt(t))i.push(a.shape);this.build(We(i)),this.built=!0,this.initialWeights&&this.setWeights(this.initialWeights),this._refCount===null&&o&&(this._refCount=1)}if(this.assertInputCompatibility(t),o){let i=this.call(t,e);this.supportsMasking&&this.setMaskMetadata(t,i);const a=zt(i),l=[];for(let c of a)s.indexOf(c)!==-1&&(c=c.clone()),l.push(c);if(i=We(l),this.activityRegularizer!=null)throw new vt("Layer invocation in the presence of activity regularizer(s) is not supported yet.");return i}else{const i=qA(t),a=this.computeOutputShape(i);let l;const c=jA(t);if(this.warnOnIncompatibleInputShape(Array.isArray(t)?i[0]:i),a!=null&&a.length>0&&Array.isArray(a[0])?l=a.map((u,h)=>new hs(c,u,this,zt(t),e,this.name,h)):l=new hs(c,a,this,zt(t),e,this.name),this.addInboundNode(t,l,null,null,i,a,e),this._refCount++,this.activityRegularizer!=null)throw new vt("Layer invocation in the presence of activity regularizer(s) is not supported yet.");return l}})}warnOnIncompatibleInputShape(t){if(this.batchInputShape!=null)if(t.length!==this.batchInputShape.length)console.warn(`The rank of the input tensor provided (shape: ${JSON.stringify(t)}) does not match that of the batchInputShape (${JSON.stringify(this.batchInputShape)}) of the layer ${this.name}`);else{let e=!1;this.batchInputShape.forEach((s,r)=>{s!=null&&t[r]!=null&&t[r]!==s&&(e=!0)}),e&&console.warn(`The shape of the input tensor (${JSON.stringify(t)}) does not match the expectation of layer ${this.name}: ${JSON.stringify(this.batchInputShape)}`)}}get outputShape(){if(this.inboundNodes==null||this.inboundNodes.length===0)throw new Yn(`The layer ${this.name} has never been called and thus has no defined output shape.`);const t=[];for(const e of this.inboundNodes){const s=JSON.stringify(e.outputShapes);t.indexOf(s)===-1&&t.push(s)}if(t.length===1){const e=this.inboundNodes[0].outputShapes;return Array.isArray(e)&&Array.isArray(e[0])&&e.length===1?e[0]:e}else throw new Yn(`The layer ${this.name} has multiple inbound nodes with different output shapes. Hence the notion of "output shape" is ill-defined for the layer.`)}countParams(){if(!this.built)throw new mn(`You tried to call countParams() on ${this.name}, but the layer is not built yet. Build it first by calling build(batchInputShape).`);return Ll(this.weights)}build(t){this.built=!0}getWeights(t=!1){return Hh(t?this.trainableWeights:this.weights)}setWeights(t){B(()=>{const e=this.weights;if(e.length!==t.length)throw new A(`You called setWeights(weights) on layer "${this.name}" with a weight list of length ${t.length}, but the layer was expecting ${e.length} weights. Provided weights: ${t}...`);if(e.length===0)return;const s=[],r=Hh(e);for(let o=0;o<r.length;++o){const i=r[o],a=e[o],l=t[o];if(!Mt(i.shape,l.shape))throw new A(`Layer weight shape ${i.shape} not compatible with provided weight shape ${l.shape}`);s.push([a,l])}kp(s)})}addWeight(t,e,s,r,o,i,a,l){if(this._addedWeightNames.indexOf(t)!==-1)throw new A(`Duplicate weight name ${t} for layer ${this.name}`);this._addedWeightNames.push(t),s==null&&(s="float32"),this.fastWeightInitDuringBuild&&(r=l!=null?l():Xt("zeros"));const c=r.apply(e,s),u=new WA(c,s,t,i,a);return c.dispose(),o!=null&&this.addLoss(()=>o.apply(u.read())),i==null&&(i=!0),i?this._trainableWeights.push(u):this._nonTrainableWeights.push(u),u}setFastWeightInitDuringBuild(t){this.fastWeightInitDuringBuild=t}addLoss(t){t==null||Array.isArray(t)&&t.length===0||(t=zt(t),this._losses!==void 0&&this._losses!==null&&this.losses.push(...t))}computeOutputShape(t){return t}computeMask(t,e){if(!this.supportsMasking){if(e!=null)if(Array.isArray(e))e.forEach(s=>{if(s!=null)throw new TypeError(`Layer ${this.name} does not support masking, but was passed an inputMask.`)});else throw new TypeError(`Layer ${this.name} does not support masking, but was passed an inputMask.`);return null}return e}setMaskMetadata(t,e,s){if(!this.supportsMasking)return;const r=this.computeMask(t,s),o=zt(e),i=zt(r);if(o.length!==i.length)throw new Error(`${this.name} outputs ${o.length} tensors but ${o.length} masks for those tensors`);for(let a=0;a<o.length;a++)o[a].kerasMask=i[a]}addInboundNode(t,e,s,r,o,i,a=null){const l=zt(t);e=zt(e),s=zt(s),r=zt(r),o=Ml(o),i=Ml(i);const c=[],u=[],h=[];for(const d of l)c.push(d.sourceLayer),u.push(d.nodeIndex),h.push(d.tensorIndex);new Su({outboundLayer:this,inboundLayers:c,nodeIndices:u,tensorIndices:h,inputTensors:l,outputTensors:e,inputMasks:s,outputMasks:r,inputShapes:o,outputShapes:i},a);for(let d=0;d<e.length;d++)e[d].sourceLayer=this,e[d].nodeIndex=this.inboundNodes.length-1,e[d].tensorIndex=d}getConfig(){const t={name:this.name,trainable:this.trainable};return this.batchInputShape!=null&&(t.batchInputShape=this.batchInputShape),this.dtype!=null&&(t.dtype=this.dtype),t}disposeWeights(){return this.weights.forEach(t=>t.dispose()),this.weights.length}assertNotDisposed(){if(this._refCount===0)throw new Error(`Layer '${this.name}' is already disposed.`)}dispose(){if(!this.built)throw new Error(`Cannot dispose Layer ${this.name} because it has not been built yet.`);if(this._refCount===null)throw new Error(`Cannot dispose Layer ${this.name} because it has not been used yet.`);this.assertNotDisposed();let t=0;return--this._refCount===0&&(t=this.disposeWeights()),{refCountAfterDispose:this._refCount,numDisposedVariables:t}}}function qA(n){n=zt(n);const t=[];for(const e of n)t.push(e.shape);return We(t)}function jA(n){return"float32"}function cy(n,t,e){if((t==null||e!=null&&e>0)&&(t=n.sourceLayer,e=n.nodeIndex),t.inboundNodes.length===0)return[n];{const s=t.inboundNodes[e];if(s.inboundLayers.length===0)return s.inputTensors;{const r=[];for(let o=0;o<s.inboundLayers.length;o++){const i=s.inputTensors[o],a=s.inboundLayers[o],l=s.nodeIndices[o],c=cy(i,a,l);for(const u of c)r.indexOf(u)===-1&&r.push(u)}return r}}}function XA(n){let t=!0;for(const e of zt(n))if(!(e instanceof hs)){t=!1;break}return t}function KA(n){let t=!0;for(const e of zt(n))if(e instanceof hs){t=!1;break}return t}class Aa extends kt{constructor(t){if(super({dtype:t.dtype,name:t.name!=null?t.name:Iu("input").toString()}),t.batchSize==null&&(t.batchSize=null),t.sparse==null&&(t.sparse=!1),this.trainable=!1,this.built=!0,this.sparse=t.sparse,t.inputShape!=null&&t.batchInputShape!=null)throw new A("Only provide the inputShape OR batchInputShape argument to inputLayer, not both at the same time.");let e=t.batchInputShape;if(e==null){if(t.inputShape==null)throw new A("An InputLayer should be passed either a `batchInputShape` or an `inputShape`.");e=[t.batchSize].concat(t.inputShape)}else if(t.batchSize!=null)throw new A("Cannot specify batchSize if batchInputShape is specified when creating an InputLayer.");const s=t.dtype||"float32";this.batchInputShape=e,this.dtype=s,this.inputSpec=[{shape:e}];const r=new hs(this.dtype,this.batchInputShape,this,[],{},this.name);r.nodeIndex=0,r.tensorIndex=0,new Su({outboundLayer:this,inboundLayers:[],nodeIndices:[],tensorIndices:[],inputTensors:[r],outputTensors:[r],inputMasks:[null],outputMasks:[null],inputShapes:[e],outputShapes:[e]})}apply(t,e){throw new A(`Cannot pass any input to an InputLayer's apply() method. InputLayer name: ${this.name}`)}dispose(){return{refCountAfterDispose:this._refCount,numDisposedVariables:0}}getConfig(){return{batchInputShape:this.batchInputShape,dtype:this.dtype,sparse:this.sparse,name:this.name}}}Aa.className="InputLayer";Z(Aa);function YA(n){if(n.batchShape==null&&n.shape==null)throw new Error("Please provide to Input either a `shape` or a `batchShape` argument. Note that `shape` does not include the batch dimension.");if(n.batchShape!=null&&n.shape!=null)throw new A("Please provide either a `shape` or `batchShape` argument to Input, but not both.");let t=n.batchShape;n.shape!=null&&t==null&&(t=[null].concat(n.shape));let e=n.dtype;return e==null&&(e="float32"),new Aa({batchInputShape:t,name:n.name,dtype:e,sparse:n.sparse}).inboundNodes[0].outputTensors[0]}function ZA(n,t){if(n.dtype==null||n.dtype===t.dtype)return t;try{return rt(t,n.dtype)}catch{throw new A(`The dtype of the feed (${t.dtype}) can not be cast to the dtype of the key '${n.name}' (${n.dtype}).`)}}class _s{constructor(t){if(this.id2Value={},this.id2Mask={},this.name2Id={},t instanceof _s)for(const e in t.id2Value)this.id2Value[e]=t.id2Value[e],e in t.id2Mask&&(this.id2Mask[e]=t.id2Mask[e]);else{if(t==null)return;for(const e of t)this.add(e.key,e.value)}}add(t,e,s){if(this.id2Value[t.id]==null)this.id2Value[t.id]=ZA(t,e),this.name2Id[t.name]=t.id,s!=null&&(this.id2Mask[t.id]=s);else throw new A(`Duplicate key: name=${t.name}, id=${t.id}`);return this}addFeed(t){this.add(t.key,t.value)}hasKey(t){return this.id2Value[t.id]!=null}names(){return Object.keys(this.name2Id)}getValue(t){if(t instanceof hs){if(this.id2Value[t.id]==null)throw new A(`Nonexistent key: ${t.name}`);return this.id2Value[t.id]}else{const e=this.name2Id[t];if(e==null)throw new A(`Feed dict has no SymbolicTensor name: ${t}`);return this.id2Value[e]}}getMask(t){if(t instanceof hs){if(this.id2Value[t.id]==null)throw new A(`Nonexistent key: ${t.name}`);return this.id2Mask[t.id]}else{const e=this.name2Id[t];if(e==null)throw new A(`Feed dict has no SymbolicTensor name: ${t}`);return this.id2Mask[e]}}disposeMasks(){this.id2Mask!=null&&Ct(this.id2Mask)}}const Pl=new qb,zl=new qb;function JA(n){Pl?.setMaxEntries(n),zl?.setMaxEntries(n)}function Zo(n,t,e,s){const r=e==null?!1:e.training,o=Array.isArray(n),i=o?n:[n],a=i.map(p=>p.name),l=[],c=t.names();for(const p of a)c.indexOf(p)!==-1?l.push(t.getValue(p)):l.push(null);const u=a.join(",")+"|"+t.names().sort().join(",");let h=Pl.get(u),d;if(h==null){const p=QA(i,t);h=p.sorted,d=p.recipientCounts,Pl.put(u,h),zl.put(u,d)}d={},r||Object.assign(d,zl.get(u));const f=new _s(t);for(let p=0;p<h.length;++p){const m=h[p],g=m.sourceLayer;if(g instanceof Aa)continue;const x=[],b=[],w=[];let y=!1;for(const I of m.inputs){const k=f.getValue(I),C=f.getMask(I);x.push(k),b.push(C),C!=null&&(y=!0),r||(d[I.name]--,d[I.name]===0&&!t.hasKey(I)&&a.indexOf(I.name)===-1&&!k.isDisposed&&I.sourceLayer.stateful!==!0&&w.push(k))}y&&(e=e||{},e.mask=b[0]);const v=zt(g.apply(x,e));let $=null;g.supportsMasking&&($=g.computeMask(x,b));const N=eD(m),T=Array.isArray(N)?N:[N];for(let I=0;I<T.length;++I){f.hasKey(T[I])||f.add(T[I],v[I],Array.isArray($)?$[0]:$);const k=a.indexOf(T[I].name);k!==-1&&(l[k]=v[I])}r||Ct(w)}return f.disposeMasks(),o?l:l[0]}function QA(n,t){S(n!=null&&n.length>0,()=>"Expected at least one fetch, got none");let e=[],s={};if(n.length===1){const r=sg(n[0],t);e=r.sorted,s=r.recipientMap}else{const r=new Set;for(const o of n){const{sorted:i,recipientMap:a}=sg(o,t);for(const l of i)r.has(l.name)||(e.push(l),r.add(l.name));for(const l in a)s[l]==null&&(s[l]=new Set),a[l].forEach(c=>s[l].add(c))}}return{sorted:e,recipientCounts:tD(s)}}function tD(n){const t={};for(const e in n)t[e]=n[e].size;return t}function sg(n,t){const e=new Set,s=[],r={};for(const a of t.names())e.add(a);const o=[],i=[];for(o.push(n);o.length>0;){const a=o[o.length-1];if(e.has(a.name)){o.pop();continue}const l=i[i.length-1]===o.length-1;if(a.inputs.length===0||l)o.pop(),s.push(a),e.add(a.name),l&&i.pop();else{i.push(o.length-1);for(const c of a.inputs)r[c.name]==null&&(r[c.name]=new Set),r[c.name].add(a.name),!e.has(c.name)&&o.push(c)}}return{sorted:s,recipientMap:r}}function eD(n){let t;if(n.sourceLayer.inboundNodes.length===1)t=n.sourceLayer.output;else{let e=null;for(let s=0;s<n.sourceLayer.inboundNodes.length;++s)for(const r of n.sourceLayer.inboundNodes[s].outputTensors)if(r.id===n.id){e=s;break}t=n.sourceLayer.getOutputAt(e)}return t}const nD=W();nD.registerFlag("TOPOLOGICAL_SORT_CACHE_MAX_ENTRIES",()=>100,JA);function Sp(n,t){return B(()=>Ne(dt(_(n,n),t,!0)))}class Da extends To{getConfig(){return{}}}class uy extends Da{constructor(t){super(),this.defaultMaxValue=2,this.defaultAxis=0,this.maxValue=t.maxValue!=null?t.maxValue:this.defaultMaxValue,this.axis=t.axis!=null?t.axis:this.defaultAxis}apply(t){return B(()=>{const e=Sp(t,this.axis),s=ln(e,0,this.maxValue);return _(t,ft(s,J(ce(),e)))})}getConfig(){return{maxValue:this.maxValue,axis:this.axis}}}uy.className="MaxNorm";Z(uy);class hy extends Da{constructor(t){super(),this.defaultAxis=0,this.axis=t.axis!=null?t.axis:this.defaultAxis}apply(t){return B(()=>ft(t,J(ce(),Sp(t,this.axis))))}getConfig(){return{axis:this.axis}}}hy.className="UnitNorm";Z(hy);class dy extends Da{apply(t){return Mr(t)}}dy.className="NonNeg";Z(dy);class fy extends Da{constructor(t){super(),this.defaultMinValue=0,this.defaultMaxValue=1,this.defaultRate=1,this.defaultAxis=0,this.minValue=t.minValue!=null?t.minValue:this.defaultMinValue,this.maxValue=t.maxValue!=null?t.maxValue:this.defaultMaxValue,this.rate=t.rate!=null?t.rate:this.defaultRate,this.axis=t.axis!=null?t.axis:this.defaultAxis}apply(t){return B(()=>{const e=Sp(t,this.axis),s=J(_(this.rate,ln(e,this.minValue,this.maxValue)),_(1-this.rate,e));return _(t,ft(s,J(ce(),e)))})}getConfig(){return{minValue:this.minValue,maxValue:this.maxValue,rate:this.rate,axis:this.axis}}}fy.className="MinMaxNorm";Z(fy);const rg={maxNorm:"MaxNorm",minMaxNorm:"MinMaxNorm",nonNeg:"NonNeg",unitNorm:"UnitNorm"};function he(n){return mp(n)}function og(n,t={}){return Na(n,pn.getMap().classNameMap,t,"constraint")}function de(n){if(n==null)return null;if(typeof n=="string"){const e={className:n in rg?rg[n]:n,config:{}};return og(e)}else return n instanceof Da?n:og(n)}async function nr(n){if(n==null)return;const t=[],e=[],s=[];for(const r in n){const o=n[r];if(typeof o!="number"){const i=o;t.push(i.data()),e.push(r),s.push(i)}}if(t.length>0){const r=await Promise.all(t);for(let o=0;o<r.length;++o)n[e[o]]=r[o][0];Ct(s)}}function py(n){if(n!=null)for(const t in n){const e=n[t];typeof e!="number"&&e.dispose()}}var ig;(function(n){n[n.SILENT=0]="SILENT",n[n.VERBOSE=1]="VERBOSE"})(ig||(ig={}));const sD=125;class di{constructor(){this.validationData=null}setParams(t){this.params=t}async onEpochBegin(t,e){}async onEpochEnd(t,e){}async onBatchBegin(t,e){}async onBatchEnd(t,e){}async onTrainBegin(t){}async onTrainEnd(t){}setModel(t){}}class rD{constructor(t,e=10){t==null&&(t=[]),this.callbacks=t,this.queueLength=e}append(t){this.callbacks.push(t)}setParams(t){for(const e of this.callbacks)e.setParams(t)}setModel(t){for(const e of this.callbacks)e.setModel(t)}async onEpochBegin(t,e){e==null&&(e={});for(const s of this.callbacks)await s.onEpochBegin(t,e)}async onEpochEnd(t,e){e==null&&(e={});for(const s of this.callbacks)await s.onEpochEnd(t,e)}async onBatchBegin(t,e){e==null&&(e={});for(const s of this.callbacks)await s.onBatchBegin(t,e)}async onBatchEnd(t,e){e==null&&(e={});for(const s of this.callbacks)await s.onBatchEnd(t,e)}async onTrainBegin(t){t==null&&(t={});for(const e of this.callbacks)await e.onTrainBegin(t)}async onTrainEnd(t){t==null&&(t={});for(const e of this.callbacks)await e.onTrainEnd(t)}}class oD extends di{constructor(){super()}async onEpochBegin(t){this.seen=0,this.totals={}}async onBatchEnd(t,e){e==null&&(e={});const s=e.size==null?0:e.size;this.seen+=s;for(const r in e){const o=e[r];if(typeof o=="number")this.totals.hasOwnProperty(r)||(this.totals[r]=0),this.totals[r]=this.totals[r]+o*s;else{let i;r in this.totals?i=this.totals[r]:this.totals[r]=0;const a=B(()=>J(this.totals[r],_(o,s)));this.totals[r]=a,i?.dispose()}}}async onEpochEnd(t,e){if(e!=null)for(const s of this.params.metrics)this.totals[s]!=null&&(typeof this.totals[s]=="number"?e[s]=this.totals[s]/this.seen:B(()=>{const r=_(ft(1,this.seen),this.totals[s]);e[s]=r,this.totals[s].dispose(),ns(e[s])}))}}class iD extends di{async onTrainBegin(t){this.epoch=[],this.history={}}async onEpochEnd(t,e){e==null&&(e={}),this.epoch.push(t);for(const s in e)this.history[s]==null&&(this.history[s]=[]),this.history[s].push(e[s])}async syncData(){const t=[],e=[],s=[];for(const o in this.history){const i=this.history[o];for(let a=0;a<i.length;++a)if(typeof i[a]!="number"){const l=i[a];t.push(l.data()),e.push(o),s.push(a)}}const r=await Promise.all(t);for(let o=0;o<r.length;++o)this.history[e[o]][s[o]].dispose(),this.history[e[o]][s[o]]=r[o][0]}}class aD extends di{constructor(t,e){if(super(),this.currentEpoch=0,this.nowFunc=t.nowFunc,this.nextFrameFunc=t.nextFrameFunc||yb,this.yieldEvery=e||"auto",this.yieldEvery==="auto"&&(this.yieldEvery=sD),this.yieldEvery==="never"&&t.onYield!=null)throw new Error("yieldEvery is `never` but you provided an `onYield` callback. Either change `yieldEvery` or remove the callback");vh(this.yieldEvery)&&(this.maybeWait=wA(this.maybeWait.bind(this),this.yieldEvery,this.nowFunc)),this.trainBegin=t.onTrainBegin,this.trainEnd=t.onTrainEnd,this.epochBegin=t.onEpochBegin,this.epochEnd=t.onEpochEnd,this.batchBegin=t.onBatchBegin,this.batchEnd=t.onBatchEnd,this.yield=t.onYield}async maybeWait(t,e,s){const r=[];this.yield!=null&&(await nr(s),r.push(this.yield(t,e,s))),r.push(this.nextFrameFunc()),await Promise.all(r)}async onEpochBegin(t,e){this.currentEpoch=t,this.epochBegin!=null&&(await nr(e),await this.epochBegin(t,e))}async onEpochEnd(t,e){const s=[];this.epochEnd!=null&&(await nr(e),s.push(this.epochEnd(t,e))),this.yieldEvery==="epoch"&&s.push(this.nextFrameFunc()),await Promise.all(s)}async onBatchBegin(t,e){this.batchBegin!=null&&(await nr(e),await this.batchBegin(t,e))}async onBatchEnd(t,e){const s=[];this.batchEnd!=null&&(await nr(e),s.push(this.batchEnd(t,e))),this.yieldEvery==="batch"?s.push(this.nextFrameFunc()):vh(this.yieldEvery)&&s.push(this.maybeWait(this.currentEpoch,t,e)),await Promise.all(s)}async onTrainBegin(t){this.trainBegin!=null&&(await nr(t),await this.trainBegin(t))}async onTrainEnd(t){this.trainEnd!=null&&(await nr(t),await this.trainEnd(t))}}function my(n,t){return n==null&&(n={}),n instanceof di?[n]:Array.isArray(n)&&n[0]instanceof di?n:zt(n).map(s=>new aD(s,t))}class fn{constructor(){}static registerCallbackConstructor(t,e){S(t>=0&&Number.isInteger(t),()=>`Verbosity level is expected to be an integer >= 0, but got ${t}`),fn.checkForDuplicate(e),fn.constructors[t]==null&&(fn.constructors[t]=[]),fn.constructors[t].push(e)}static checkForDuplicate(t){for(const e in fn.constructors)fn.constructors[+e].forEach(r=>{if(r===t)throw new A("Duplicate callback constructor.")})}static clear(){fn.constructors={}}static createCallbacks(t){const e=[];for(const s in fn.constructors){const r=+s;t>=r&&e.push(...fn.constructors[r])}return e.map(s=>new s)}}fn.constructors={};function gy(n,t,e,s,r,o,i,a,l){const c=new iD,u=[new oD,...fn.createCallbacks(t)];n!=null&&u.push(...n),u.push(c);const h=new rD(u);return h.setParams({epochs:e,initialEpoch:s,samples:r,steps:o,batchSize:i,verbose:t,doValidation:a,metrics:l}),{callbackList:h,history:c}}function is(n,t={},e=!1){return Na(n,pn.getMap().classNameMap,t,"layer",e)}function Bl(n,t){return B(()=>{n.dtype!=="float32"&&(n=rt(n,"float32"));const e=dt(Ea(n),t,!0),s=gu(e.shape,ce()),r=Ne(Ys(e,s));return ft(n,r)})}function Nu(n,t){return B(()=>ie(Ea(pt(t,n)),-1))}function Np(n,t){return B(()=>ie(De(pt(t,n)),-1))}function Tp(n,t){return B(()=>{const e=pt(n,t),s=ln(De(n),ce(),Number.MAX_VALUE),r=De(ft(e,s));return _(100,ie(r,-1))})}function lD(n,t){return B(()=>{const e=ln(t,ce(),Number.MAX_VALUE),s=us(J(1,e)),r=ln(n,ce(),Number.MAX_VALUE),o=us(J(1,r));return ie(Ea(pt(s,o)),-1)})}function cD(n,t){return B(()=>{const e=Ys(0,pt(1,_(n,t)));return ie(Ea(e),-1)})}function uD(n,t){return B(()=>{const e=Ys(0,pt(1,_(n,t)));return ie(e,-1)})}function hD(n,t){return B(()=>{const e=dt(_(n,t),-1),s=Fn(_(pt(1,n),t),-1);return Ys(0,J(1,pt(s,e)))})}function dD(n,t){return B(()=>{const e=Math.log(2),s=pt(t,n),r=pt(J(s,wa(_(-2,s))),e);return ie(r,-1)})}function fi(n,t,e=!1){return B(()=>{if(e)t=Af(t);else{const s=dt(t,t.shape.length-1,!0);t=ft(t,s)}return t=ln(t,ce(),1-ce()),te(dt(_(rt(n,"float32"),us(t)),t.shape.length-1))})}function Vl(n,t,e=!1){return B(()=>{const s=rt(yu(DA(n)),"int32");t=ln(t,ce(),1-ce());const r=t.shape,o=L(B0(s,r[r.length-1]),r);return fi(o,t,e)})}function fD(n,t){if(!Mt(n.shape,t.shape))throw new A(`logits and labels must have the same shape, but got shapes ${JSON.stringify(n.shape)} and ${JSON.stringify(t.shape)}`);return B(()=>{const e=Mr(t),s=te(De(t));return J(pt(e,_(t,n)),M0(cs(s)))})}function Tu(n,t){return B(()=>{let e;return e=ln(t,ce(),1-ce()),e=us(ft(e,pt(1,e))),ie(fD(n,e),-1)})}function pD(n,t){return B(()=>{const e=ln(n,ce(),1),s=ln(t,ce(),1);return dt(_(n,us(ft(e,s))),-1)})}function mD(n,t){return B(()=>{const e=us(J(ce(),t));return ie(pt(t,_(n,e)),-1)})}function xy(n,t){return B(()=>{const e=Bl(n,-1),s=Bl(t,-1),r=_(e,s);return te(dt(r,-1))})}const Wl={meanSquaredError:Nu,meanAbsoluteError:Np,meanAbsolutePercentageError:Tp,meanSquaredLogarithmicError:lD,squaredHinge:cD,hinge:uD,categoricalHinge:hD,logcosh:dD,categoricalCrossentropy:fi,sparseCategoricalCrossentropy:Vl,binaryCrossentropy:Tu,kullbackLeiblerDivergence:pD,poisson:mD,cosineProximity:xy};function ih(n){if(typeof n=="string"){if(n in Wl)return Wl[n];let t=`Unknown loss ${n}`;throw n.toLowerCase().includes("softmaxcrossentropy")&&(t=`Unknown loss ${n}. Use "categoricalCrossentropy" as the string name for tf.losses.softmaxCrossEntropy`),new A(t)}else return n}function by(n,t){return B(()=>{const e=_(.5,bn(t)),s=rs(cn(t,e),n.dtype);return ie(ls(n,s),-1)})}function yy(n,t){return B(()=>rs(ls(ai(n,-1),ai(t,-1)),"float32"))}function gD(n,t){return B(()=>rt(dt(ws(ls(n,1),ls(t,1))),"float32"))}function xD(n,t){return B(()=>rt(dt(ws(ls(n,0),ls(t,1))),"float32"))}function bD(n,t){return B(()=>{const e=gD(n,t),s=xD(n,t),r=J(e,s);return rt(Oe(cn(r,0),ft(e,r),0),"float32")})}function yD(n,t){return Tu(n,t)}function wD(n,t){return n.rank===t.rank&&(n=Ca(n,[n.rank-1])),t=ai(t,-1),t.dtype!==n.dtype&&(t=rt(t,n.dtype)),rt(ls(n,t),"float32")}const vD=Nu,CD=Nu,$D=Np,ID=Np,kD=Tp,SD=Tp,wy=fi,ND=xy,vy=Vl,Ul={binaryAccuracy:by,categoricalAccuracy:yy,precision:bD,categoricalCrossentropy:wy,sparseCategoricalCrossentropy:vy,mse:vD,MSE:CD,mae:$D,MAE:ID,mape:kD,MAPE:SD,cosine:ND};function TD(n){if(typeof n=="string"&&n in Ul)return Ul[n];if(typeof n!="string"&&n!=null)return n;throw new A(`Unknown metric ${n}`)}function Za(n){if(Zn(n!==null,`Unknown LossOrMetricFn ${n}`),typeof n=="string")return n;{let t;for(const e of Object.keys(Wl))if(Wl[e]===n){t=e;break}if(t!==void 0)return t;for(const e of Object.keys(Ul))if(Ul[e]===n){t=e;break}return t!==void 0?t:n.name}}function ED(n){const t={Adagrad:()=>qr.adagrad(.01),Adadelta:()=>qr.adadelta(1,.95,ce()),Adam:()=>qr.adam(.001,.9,.999,ce()),Adamax:()=>qr.adamax(.002,.9,.999,ce(),0),RMSProp:()=>qr.rmsprop(.001,.9,0,ce()),SGD:()=>qr.sgd(.01)};if(t.adagrad=t.Adagrad,t.adadelta=t.Adadelta,t.adam=t.Adam,t.adamax=t.Adamax,t.rmsprop=t.RMSProp,t.sgd=t.SGD,n in t)return t[n]();throw new A(`Unknown Optimizer ${n}`)}const ag=1*1024*1024;function lg(n,t,e=!1){if(n==null||typeof n!="object"||Object.getPrototypeOf(n)!==Object.prototype||!qh(n))throw new Error("User-defined metadata is expected to be a JSON object, but is not.");if(e){const s=JSON.stringify(n);s.length>ag&&console.warn(`User-defined metadata of model "${t}" is too large in size (length=${s.length} when serialized). It is not recommended to store such large objects in user-defined metadata. Please make sure its serialized length is <= ${ag}.`)}}function qh(n){if(n===null)return!0;if(typeof n=="object")if(Object.getPrototypeOf(n)===Object.prototype){const t=Object.keys(n);for(const e of t)if(typeof e!="string"||!qh(n[e]))return!1;return!0}else if(Array.isArray(n)){for(const t of n)if(!qh(t))return!1;return!0}else return!1;else{const t=typeof n;return t==="string"||t==="number"||t==="boolean"}}function RD(n,t,e,s=console.log){const r=DD(n),o=["Layer (type)","Input Shape","Output shape","Param #"];r?(t=t||90,e=e||[.32,.61,.89,1]):(t=t||115,e=e||[.24,.48,.7,.8,1]),e[e.length-1]<=1&&(e=e.map(u=>Math.floor(t*u)));let i;if(!r){o.push("Receives inputs"),i=[];for(const u in n.nodesByDepth)i.push(...n.nodesByDepth[u])}s("_".repeat(t)),Gl(o,e,s),s("=".repeat(t));const a=n.layers;for(let u=0;u<a.length;++u)r?_D(a[u],e,s):FD(a[u],e,i,s),s((u===a.length-1?"=":"_").repeat(t));n.checkTrainableWeightsConsistency();const l=AD(n),c=Ll(n.nonTrainableWeights);s(`Total params: ${l+c}`),s(`Trainable params: ${l}`),s(`Non-trainable params: ${c}`),s("_".repeat(t))}function AD(n){let t;return n.collectedTrainableWeights!=null?t=Ll(n.collectedTrainableWeights):t=Ll(n.trainableWeights),t}function DD(n){let t=!0;const e=[],s=[];for(const r in n.nodesByDepth)e.push(n.nodesByDepth[r]);for(const r of e){if(r.length>1||r.length===1&&r[0].inboundLayers.length>1){t=!1;break}s.push(...r)}if(t)for(const r of n.layers){let o=!1;for(const i of r.inboundNodes)if(s.indexOf(i)!==-1)if(o){t=!1;break}else o=!0;if(!t)break}return t}function Gl(n,t,e=console.log){let s="";for(let r=0;r<n.length;++r)r>0&&(s=s.slice(0,s.length-1)+" "),s+=n[r],s=s.slice(0,t[r]),s+=" ".repeat(t[r]-s.length);e(s)}function _D(n,t,e){let s,r;try{r=n.inboundNodes.map(l=>JSON.stringify(l.inputShapes)).join(",")}catch{r="multiple"}try{s=JSON.stringify(n.outputShape)}catch{s="multiple"}const o=n.name,i=n.getClassName(),a=[`${o} (${i})`,r,s,n.countParams().toString()];Gl(a,t,e)}function FD(n,t,e,s){let r,o;try{o=n.inboundNodes.map(h=>JSON.stringify(h.inputShapes)).join(",")}catch{o="multiple"}try{r=JSON.stringify(n.outputShape)}catch{r="multiple"}const i=[];for(const h of n.inboundNodes)if(!(e!=null&&e.length>0&&e.indexOf(h)===-1))for(let d=0;d<h.inboundLayers.length;++d){const f=h.inboundLayers[d].name,p=h.nodeIndices[d],m=h.tensorIndices[d];i.push(`${f}[${p}][${m}]`)}const a=n.name,l=n.getClassName(),c=i.length===0?"":i[0],u=[`${a} (${l})`,o,r,n.countParams().toString(),c];Gl(u,t,s);for(let h=1;h<i.length;++h)Gl(["","","","",i[h]],t,s)}function Cy(n,t,e){return(n==="inboundNodes"||n==="outputLayers"||n==="inputLayers")&&t===0&&typeof e=="string"}function Hl(n,t){if(n===null)return null;if(typeof n=="string")return ir(n);if(typeof n=="number"||typeof n=="boolean")return n;if(n instanceof Array){const e=[],s=n.length;for(let r=0;r<s;++r){const o=n[r];Cy(t,r,o)?e.push(o):e.push(Hl(o,t))}return e}else{const e={};for(const s of Object.keys(n)){const r=n[s];if(s==="name"&&typeof r=="string")e[s]=r;else{const o=ir(s);e[o]=Hl(r,o)}}return e}}function jh(n,t){if(n==null)return null;if(typeof n=="string")return xs(n);if(typeof n=="number"||typeof n=="boolean")return n;if(n instanceof Array){const e=[],s=n.length;for(let r=0;r<s;++r){const o=n[r];Cy(t,r,o)?e.push(o):e.push(jh(o,t))}return e}else{const e={};for(const s of Object.keys(n)){const r=n[s],o=xs(s);(s==="name"||s==="className")&&typeof r=="string"?e[o]=r:e[o]=jh(r,s)}return e}}const $y="4.22.0";const OD=n=>{const t=Object.keys(n);if(t.length===0)return!1;const e=t[0].split("/");return!isNaN(parseInt(e[e.length-1],10))};class Nn extends kt{constructor(t){if(super({}),this.containerNodes=new Set,this.name=t.name,this.name==null){const b=this.getClassName().toLowerCase();this.name=Iu(b)}if(this.supportsMasking=!1,this.trainable_=!0,Array.isArray(t.inputs)?this.inputs=t.inputs.slice():this.inputs=[t.inputs],Array.isArray(t.outputs)?this.outputs=t.outputs.slice():this.outputs=[t.outputs],Ls(this.inputs).length!==this.inputs.length)throw new A(`The list of inputs passed to the model is redundant. All inputs should only appear once. Found: ${this.inputs.map(b=>b.name)}`);Ls(this.outputs).length!==this.outputs.length&&console.warn(`The list of outputs passed to the model is redundant. All outputs should only appear once. Found: ${this.outputs.map(b=>b.name)}`),this.inputLayers=[],this.inputLayersNodeIndices=[],this.inputLayersTensorIndices=[],this.outputLayers=[],this.outputLayersNodeIndices=[],this.outputLayersTensorIndices=[],this.layers=[],this.internalContainerRefs=[];for(const b of this.outputs){const w=b.sourceLayer,y=b.nodeIndex,v=b.tensorIndex;this.outputLayers.push(w),this.outputLayersNodeIndices.push(y),this.outputLayersTensorIndices.push(v)}for(const b of this.inputs){const w=b.sourceLayer,y=b.nodeIndex,v=b.tensorIndex;Zn(y===0,"input layer has >1 nodes"),Zn(v===0,"input layer has >1 tensors"),this.inputLayers.push(w),this.inputLayersNodeIndices.push(y),this.inputLayersTensorIndices.push(v)}this.inputNames=[],this.outputNames=[],this.feedInputShapes=[],this.feedInputNames=[],this.feedOutputNames=[];for(let b=0;b<this.inputLayers.length;b++){const w=this.inputLayers[b];if(!(w instanceof Aa))throw new TypeError(`Input layers to a LayersModel must be InputLayer objects. Received inputs: ${t.inputs}. Input ${b} (0-based) originates from layer type ${w.getClassName()}.`);this.inputNames.push(w.name),this.feedInputShapes.push(w.batchInputShape),this.feedInputNames.push(w.name)}for(const b of this.outputLayers)this.outputNames.push(b.name);this.internalInputShapes=this.inputs.map(b=>b.shape),this.internalOutputShapes=this.outputs.map(b=>b.shape);const e={},s={},r={},o={},i={},a=[],l=(b,w,y,v,$,N)=>{(v==null||$==null||N==null)&&(v=b.sourceLayer,$=b.nodeIndex,N=b.tensorIndex);const T=v.inboundNodes[$];if(y.indexOf(T)!==-1)throw new mn(`The tensor ${b.name} at layer "${v.name}" is part of a cycle.`);if(w.indexOf(T)!==-1)return;this.containerNodes.add(Nn.nodeKey(v,$)),v.id in i||(i[v.id]=Object.keys(i).length),y.indexOf(T)===-1&&y.push(T);const I=T.inboundLayers.length;for(let k=0;k<I;k++){const C=T.inputTensors[k],R=T.inboundLayers[k],D=T.nodeIndices[k],M=T.tensorIndices[k];l(C,w,y,R,D,M)}for(w.push(T);y.indexOf(T)>=0;)y.splice(y.indexOf(T),1);a.push(T)},c=[],u=[];for(const b of this.outputs)l(b,c,u);const h=a.slice().reverse();for(const b of h){s[b.id]=b,b.id in e||(e[b.id]=0);let w=e[b.id];const y=r[b.outboundLayer.id]==null?0:r[b.outboundLayer.id];w=Math.max(w,y),r[b.outboundLayer.id]=w,o[b.outboundLayer.id]=b.outboundLayer,e[b.id]=w;for(let v=0;v<b.inboundLayers.length;v++){const $=b.inboundLayers[v],N=b.nodeIndices[v],T=$.inboundNodes[N],I=e[T.id]==null?0:e[T.id];e[T.id]=Math.max(w+1,I),s[T.id]=T}}const d={};for(const b in e){const w=e[b];w in d||(d[w]=[]),d[w].push(s[b])}const f={};for(const b in r){const w=r[b];w in f||(f[w]=[]),f[w].push(o[b])}let p=Object.keys(f).map(b=>parseInt(b,10)).sort(Xa);this.layers=[];for(const b of p){const w=f[b];w.sort((y,v)=>{const $=i[y.id],N=i[v.id];return $<N?-1:$>N?1:0});for(const y of w)y instanceof Nn&&this.internalContainerRefs.push(y),this.layers.push(y)}this.layersByDepth=f,p=Object.keys(d).map(b=>parseInt(b,10)).sort(Xa);const m=this.inputs.slice(),g=[];for(const b of p)for(const w of d[b]){const y=w.outboundLayer;if(y!=null){for(const v of w.inputTensors)if(m.indexOf(v)===-1)throw new mn(`Graph disconnected: cannot obtain value for tensor ${v} at layer "${y.name}". The following previous layers were accessed without issue: ${g}`);for(const v of w.outputTensors)m.push(v);g.push(y.name)}}this.nodesByDepth=d;const x=this.layers.map(b=>b.name);for(const b of x){const w=x.filter(y=>y===b).length;if(w!==1)throw new mn(`The name "${b}" is used ${w} times in the model. All layer names should be unique. Layer names: `+JSON.stringify(x))}this.outboundNodes=[],this.inboundNodes=[],new Su({outboundLayer:this,inboundLayers:[],nodeIndices:[],tensorIndices:[],inputTensors:this.inputs,outputTensors:this.outputs,inputMasks:this.inputs.map(b=>null),outputMasks:this.outputs.map(b=>null),inputShapes:this.inputs.map(b=>b.shape),outputShapes:this.outputs.map(b=>b.shape)}),this.built=!0,this._refCount=1}assertNotDisposed(){if(this._refCount===0)throw new Error(`Container '${this.name}' is already disposed.`)}dispose(){this.assertNotDisposed();const t={refCountAfterDispose:null,numDisposedVariables:0};if(--this._refCount===0){for(const e of this.layers)t.numDisposedVariables+=e.dispose().numDisposedVariables;for(const e of this.internalContainerRefs)t.numDisposedVariables+=e.dispose().numDisposedVariables}return t.refCountAfterDispose=this._refCount,t}get trainable(){return this.trainable_}set trainable(t){this.layers.forEach(e=>{e._trainableWeights.forEach(s=>s.trainable=t)}),this.trainable_=t}get trainableWeights(){if(this._trainableWeights.length>0)throw new A("Container instance unexpectedly contains _trainableWeights.The trainable weights of a Container are a union of the trainable weights of its consituent Layers. Its own _trainableWeights must remain an empty Array.");if(!this.trainable)return[];let t=[];for(const e of this.layers)t=t.concat(e.trainableWeights);return t}get nonTrainableWeights(){const t=[];for(const e of this.layers)t.push(...e.nonTrainableWeights);if(!this.trainable){const e=[];for(const s of this.layers)e.push(...s.trainableWeights);return e.concat(t)}return t}get weights(){return this.trainableWeights.concat(this.nonTrainableWeights)}loadWeights(t,e=!0){const s={};let r=0;const o=OD(t);o&&this.parseWeights(t);for(const a of this.layers)for(const[l,c]of a.weights.entries()){const u=o?`${c.name.split("/").slice(0,-1).join("/")+"/"}${l}`:c.originalName;if(s[u]!=null)throw new A(`Duplicate weight name: ${u}`);s[u]=c,r++}const i=[];for(const a in t){let l=a;if(s[a]==null){const c=a.split("/");l=c.slice(0,-2).concat([c[c.length-1]]).join("/")}if(s[l]!=null)i.push([s[l],t[a]]);else if(e)throw new A(`Provided weight data has no target variable: ${a}`);delete s[l]}if(e){const a=[];for(const l in s)a.push(l);if(a.length>0)throw new A(`${a.length} of ${r} weights are not set: ${a}`)}kp(i)}parseWeights(t){for(const e in Object.keys(t)){const s=e.split("/"),r=["vars","layer_checkpoint_dependencies"],o=s.map(i=>i.startsWith("_")?i.slice(1):i).filter(i=>!r.includes(i)).join("/");o!==e&&(t[o]=t[e],delete t[e])}}updatedConfig(){const t=this.getConfig(),e={};return e.className=this.getClassName(),e.config=t,e.kerasVersion=`tfjs-layers ${$y}`,e.backend="TensorFlow.js",e}toJSON(t,e=!0){const s=jh(this.updatedConfig());return e?JSON.stringify(s):s}call(t,e){return B(()=>{t=zt(t);const s=new _s;for(let r=0;r<this.inputs.length;++r)s.add(this.inputs[r],t[r]);return Zo(this.outputs,s,e)})}computeMask(t,e){return B(()=>{t=zt(t);let s;return e==null?s=Nr(null,t.length):s=zt(e),this.runInternalGraph(t,s)[1]})}computeOutputShape(t){const e=Ml(t);if(e.length!==this.inputLayers.length)throw new A(`Invalid inputShape argument ${t}: model has ${this.inputLayers.length} tensor inputs.`);const s={};for(let a=0;a<e.length;a++){const l=this.inputLayers[a],c=e[a],u=l.name+"_0_0";s[u]=c}const r=Object.keys(this.nodesByDepth).map(a=>parseInt(a,10)).sort(Xa);if(r.length>1)for(const a of r){const l=this.nodesByDepth[a];for(const c of l){const u=c.outboundLayer;if(this.inputLayers.map(m=>m.id).indexOf(u.id)!==-1)continue;const h=[];for(let m=0;m<c.inboundLayers.length;m++){const g=c.inboundLayers[m],x=c.nodeIndices[m],b=c.tensorIndices[m],w=`${g.name}_${x}_${b}`,y=s[w];h.push(y)}const d=u.computeOutputShape(We(h)),f=Ml(d),p=u.inboundNodes.indexOf(c);for(let m=0;m<f.length;m++){const g=`${u.name}_${p}_${m}`;s[g]=f[m]}}}const o=[],i=[];for(let a=0;a<this.outputLayers.length;a++){const l=this.outputLayers[a],c=this.outputLayersNodeIndices[a],u=this.outputLayersTensorIndices[a],h=`${l.name}_${c}_${u}`;i.push(h)}for(let a=0;a<i.length;a++){const l=i[a];Zn(l in s),o.push(s[l])}return We(o)}runInternalGraph(t,e){e==null&&(e=Nr(null,t.length));const s={};for(let l=0;l<this.inputs.length;++l){const c=this.inputs[l],u=t[l],h=e[l];s[c.id]=[u,h]}const r=Object.keys(this.nodesByDepth).map(l=>parseInt(l,10)).sort(Xa);for(const l of r){const c=this.nodesByDepth[l];for(const u of c){const h=u.outboundLayer,d=u.inputTensors,f=u.outputTensors,p=new Array;for(const m of d)m.id in s&&p.push(s[m.id]);if(p.length===d.length){let m={},g,x,b,w;if(u.callArgs!=null&&(m=u.callArgs),p.length===1){const[y,v]=p[0];m.mask==null&&(m.mask=v),b=zt(h.call(y,m)),w=zt(h.computeMask(y,v)),g=[y],x=[v]}else g=p.map(y=>y[0]),x=p.map(y=>y[1]),m.mask==null&&(m.mask=x),b=zt(h.call(g,m)),w=zt(h.computeMask(g,x));if(h.activityRegularizer)throw new vt("LayersModel invocation with concrete Tensor value(s) in the presence of activity regularizer(s) is not supported yet.");for(let y=0;y<f.length;++y){const v=f[y],$=b[y],N=w[y];s[v.id]=[$,N]}}}}const o=[],i=[],a=[];for(const l of this.outputs){Zn(l.id in s,`Could not compute output ${l.name} : ${l.id}`);const[c,u]=s[l.id];a.push(c.shape),o.push(c),i.push(u)}return[o,i,a]}buildNodeConversionMap(t){const e={};let s;for(const r of this.layers){s=r instanceof Nn?1:0;for(let o=0;o<r.inboundNodes.length;o++){const i=Nn.nodeKey(r,o);this.containerNodes.has(i)&&(e[i]=s,s+=1)}}return e}getLayer(t,e){if(e!=null)return this.findLayer(e);if(t==null)throw new A("Provide either a layer name or layer index");if(typeof t=="number")return this.findLayer(t);for(const s of this.layers)if(s.name===t)return s;throw new A(`No such layer: ${t}`)}findLayer(t){if(this.layers.length<=t)throw new A(`Was asked to retrieve layer at index ${t}, but model only has ${this.layers.length} layer(s).`);return this.layers[t]}calculateLosses(){return B(()=>{const t=[];for(const e of this.layers)for(let s=0;s<e.inboundNodes.length;++s){const r=Nn.nodeKey(e,s);this.containerNodes.has(r)&&t.push(...e.calculateLosses())}return t})}getConfig(){const t={name:this.name},e=this.buildNodeConversionMap(this.layers),s=[];for(const i of this.layers){const a=i.getClassName(),l=i.getConfig(),c=[];for(let h=0;h<i.inboundNodes.length;h++){const d=i.inboundNodes[h],f=Nn.nodeKey(i,h);let p={};if(this.containerNodes.has(f)){if(d.callArgs)try{JSON.stringify(d.callArgs),p=d.callArgs}catch{console.warn(`Layer ${i.name} was passed non-serializable keyword arguments: ${d.callArgs}. They will not be included in the serialized model (and thus will be missing at deserialization time).`),p={}}if(d.inboundLayers.length>0){const m=[];for(let g=0;g<d.inboundLayers.length;g++){const x=d.inboundLayers[g],b=d.nodeIndices[g],w=d.tensorIndices[g],y=Nn.nodeKey(x,b);let v=e[y];v==null&&(v=0),m.push([x.name,v,w,p])}c.push(m)}}}const u={};u.name=i.name,u.className=a,u.config=l,u.inboundNodes=c,s.push(u)}t.layers=s;const r=[];for(let i=0;i<this.inputLayers.length;i++){const a=this.inputLayers[i],l=this.inputLayersNodeIndices[i],c=Nn.nodeKey(a,l);if(!this.containerNodes.has(c))continue;let u=e[c];u==null&&(u=0);const h=this.inputLayersTensorIndices[i];r.push([a.name,u,h])}t.inputLayers=r;const o=[];for(let i=0;i<this.outputLayers.length;i++){const a=this.outputLayers[i],l=this.outputLayersNodeIndices[i],c=Nn.nodeKey(a,l);if(!this.containerNodes.has(c))continue;let u=e[c];u==null&&(u=0);const h=this.outputLayersTensorIndices[i];o.push([a.name,u,h])}return t.outputLayers=o,t}static fromConfig(t,e,s={},r=!1){const o={},i={};function a(g,x){g.name in i?i[g.name].push(x):i[g.name]=[x]}function l(g,x){const b=[];let w;for(const y of x){const v=y[0],$=y[1],N=y[2];if(w=y[3]==null?{}:y[3],!(v in o)){a(g,x);return}const T=o[v];if(T.inboundNodes.length<=$){a(g,x);return}const I=T.inboundNodes[$];b.push(I.outputTensors[N])}b.length>0&&g.apply(We(b),w)}function c(g){const x=g.name,b=is(g,e.customObjects!=null?e.customObjects:{});b.setFastWeightInitDuringBuild(r),o[x]=b,g.inboundNodes.forEach(y=>{if(!(y instanceof Array))throw new A(`Corrupted configuration, expected array for nodeData: ${y}`);a(b,y)})}const u=e.name,h=e.layers;for(const g of h)c(g);for(;!yA(i);)for(const g of h){const x=o[g.name];if(x.name in i){const b=i[x.name];delete i[x.name];for(const w of b)l(x,w)}}const d=[],f=[],p=e.inputLayers;for(const g of p){const x=g[0],b=g[1],w=g[2];Zn(x in o);const v=o[x].inboundNodes[b].outputTensors;d.push(v[w])}const m=e.outputLayers;for(const g of m){const x=g[0],b=g[1],w=g[2];Zn(x in o);const v=o[x].inboundNodes[b].outputTensors;f.push(v[w])}return new t({inputs:d,outputs:f,name:u})}get stateful(){if(this._stateful)throw new A("Container instance unexpectedly has _stateful = true. The statefulness of a Container is determined by the Layers it contains. Its _stateful property must remain the default false.");for(const t of this.layers)if(t.stateful)return!0;return!1}resetStates(){B(()=>{this.layers.forEach(t=>{t.stateful&&t.resetStates()})})}}function MD(n,t,e){const s=t.length;if(n==null||Array.isArray(n)&&n.length===0)return t.map(r=>null);if(s===1)return Array.isArray(n)&&n.length===1?n:typeof n=="object"&&t[0]in n?[n[t[0]]]:[n];if(Array.isArray(n)){if(n.length!==s)throw new Error(`Provided ${e} is an array of ${n.length} element(s), but the model has ${s} outputs. Make sure a set of weights is provided for each model output.`);return n}else if(typeof n=="object"&&Object.keys(n).length>0&&typeof n[Object.keys(n)[0]]=="object"){const r=[];return t.forEach(o=>{o in n?r.push(n[o]):r.push(null)}),r}else throw new Error(`The model has multiple (${s}) outputs, so ${e} must be either an array with ${s} elements or an object with ${t} keys. Provided ${e} not understood: ${JSON.stringify(n)}`)}function Iy(n,t){return MD(n,t,"classWeight")}async function ky(n,t,e,s){if(e!=null){const r=B(()=>{if(n.shape.length===1)return dr(n);if(n.shape.length===2){if(n.shape[1]>1)return ai(n,1);if(n.shape[1]===1)return L(n,[n.shape[0]]);throw new Error(`Encountered unexpected last-dimension size (${n.shape[1]}) during handling of class weights. The size is expected to be >= 1.`)}else throw new Error(`Unexpected rank of target (y) tensor (${n.rank}) during handling of class weights. The rank is expected to be 1 or 2.`)}),o=Array.from(await r.data());Ct(r);const i=[];return o.forEach(a=>{if(e[a]==null)throw new Error(`classWeight must contain all classes in the training data. The class ${a} exists in the data but not in classWeight`);i.push(e[a])}),Ze(i,"float32")}else return null}function LD(n,t){return _(n,t)}const PD=32;function Sy(n,t){let e,s;const r=t;e=r.xs,s=r.ys,S(e!=null&&s!=null,()=>`A Dataset iterator for fitDataset() is expected to generate objects of the form \`{xs: xVal, ys: yVal}\`, where the two values may be \`tf.Tensor\`, an array of Tensors, or a map of string to Tensor.  The provided Dataset instead generates ${t}`);const o=cg("input",n.inputNames,e),i=cg("output",n.outputNames,s),a=o[0].shape[0];S(o.length===n.inputs.length,()=>`LayersModel has ${n.inputs.length} inputs, but the dataset provides ${o.length} inputs.  (Expected input keys: ${JSON.stringify(n.inputNames)})`),S(i.length===n.outputs.length,()=>`LayersModel has ${n.outputs.length} outputs, but the dataset provides ${i.length} outputs.  (Expected output keys: ${JSON.stringify(n.outputNames)})`);for(let l=0;l<o.length;l++)S(o[l].shape[0]===a,()=>`Batch size mismatch: input ${n.inputNames[l]} has ${o[l].shape[0]}; expected  ${a} based on input ${n.inputNames[0]}.`);for(let l=0;l<i.length;l++)S(i[l].shape[0]===a,()=>`Batch size mismatch: output ${n.outputNames[l]} has ${i[l].shape[0]}; expected  ${a} based on input ${n.inputNames[0]}.`);return{xs:o,ys:i}}function cg(n,t,e){if(e instanceof le)return[e];if(Array.isArray(e))return S(e.length===t.length,()=>`Received an array of ${e.length} Tensors, but expected ${t.length} to match the ${n} keys ${t}.`),e;{const s=[];for(const r of t){if(e[r]==null)throw new A(`The feature data generated by the dataset lacks the required ${n} key '${r}'.`);s.push(e[r])}return s}}function zD(n){if(n.length===3)throw new vt("Validation with sample weights is not implemented yet.");return{xs:n[0],ys:n[1]}}async function BD(n,t,e){const s=e.batchesPerEpoch!=null;if(S(n.optimizer!=null,()=>"You must compile a model before training/testing. Use LayersModel.compile(modelCompileConfig)."),S(e!=null,()=>"For fitDataset(), the 2nd argument (config) is required, but it is not provided in this call."),S(e.epochs!=null&&e.epochs>0&&Number.isInteger(e.epochs),()=>`For fitDataset(), config.epochs is expected to be a positive integer, but got ${e.epochs}`),S(!s||e.batchesPerEpoch>0&&Number.isInteger(e.batchesPerEpoch),()=>`For fitDataset(), config.batchesPerEpoch is expected to be a positive integer if specified, but got ${e.batchesPerEpoch}`),S(e.validationSplit==null,()=>"`validationSplit` is not supported by `fitDataset()`. Use validationData instead."),n.isTraining)throw new Error("Cannot start training because another fit() call is ongoing.");n.isTraining=!0;try{const r=e.validationData!=null;let o,i;if(r)if(ug(e.validationData))S(e.validationBatches==null||e.validationBatches>0&&Number.isInteger(e.validationBatches),()=>`For fitDataset() with dataset-based validation, config.validationBatches is expected not to be provided, or to be a positive integer, but got ${e.validationBatches}`);else{const g=zD(e.validationData);o=g.xs,i=g.ys}const a=n.makeTrainFunction(),l=n.getDedupedMetricsNames();let c;r?c=l.slice().concat(l.map(g=>"val_"+g)):c=l.slice();const u=my(e.callbacks,e.yieldEvery),h=e.verbose==null?1:e.verbose,{callbackList:d,history:f}=gy(u,h,e.epochs,null,null,VD(t,e),null,r,c);d.setModel(n),n.history=f,await d.onTrainBegin(),n.stopTraining_=!1;let p=e.initialEpoch==null?0:e.initialEpoch,m=await t.iterator();for(;p<e.epochs;){const g={};await d.onEpochBegin(p);let x=0,b=0;for(s||(m=await t.iterator());!s||x<e.batchesPerEpoch;){const w=await m.next();if(s&&w.done){console.warn(`You provided \`batchesPerEpoch\` as ${e.batchesPerEpoch}, but your dataset iterator ran out of data after ${x} batches; interrupting training. Make sure that your dataset can generate at least \`batchesPerEpoch * epochs\` batches (in this case, ${e.batchesPerEpoch*e.epochs} batches). You may need to use the repeat() function when building your dataset.`);break}if(w.value!=null){const{xs:y,ys:v}=Sy(n,w.value),$={};$.batch=b,$.size=y[0].shape[0],await d.onBatchBegin(b,$);const N=[];if(e.classWeight!=null){const k=Iy(e.classWeight,n.outputNames);for(let C=0;C<k.length;++C)N.push(await ky(v[C],null,k[C]))}const T=y.concat(v).concat(N),I=a(T);Ct(T);for(let k=0;k<l.length;++k){const C=l[k],R=I[k];$[C]=R,ns(R)}await d.onBatchEnd(b,$),py($),b++,x++}if(s?x>=e.batchesPerEpoch:w.done){if(r){let y;ug(e.validationData)?y=zt(await n.evaluateDataset(e.validationData,{batches:e.validationBatches})):y=zt(n.evaluate(o,i,{batchSize:e.validationBatchSize==null?PD:e.validationBatchSize,verbose:0}));for(let v=0;v<n.metricsNames.length;++v)g[`val_${n.metricsNames[v]}`]=y[v]}break}if(n.stopTraining_)break}if(await d.onEpochEnd(p,g),p++,n.stopTraining_)break}return await d.onTrainEnd(),await n.history.syncData(),n.history}finally{n.isTraining=!1}}function VD(n,t){let e=null;return t.batchesPerEpoch!=null?e=t.batchesPerEpoch:Number.isFinite(n.size)&&(e=n.size),e}function ug(n){return typeof n.iterator=="function"}function WD(n){return typeof n.next=="function"}async function UD(n,t,e){e=e||{};const s=e.batches!=null,r=n.testFunction;let o=[];if(e.verbose>0)throw new vt("Verbose mode is not implemented yet.");S(!s||e.batches>0&&Number.isInteger(e.batches),()=>`Test loop expects \`batches\` to be a positive integer, but received ${JSON.stringify(e.batches)}`);const i=WD(t)?t:await t.iterator();let a=0,l=0;for(;!s||l<e.batches;){const c=await i.next();if(o=B(()=>{if(c.value){const{xs:u,ys:h}=Sy(n,c.value),d=u.concat(h),f=B(()=>r(d));if(Ct(d),l===0)for(let m=0;m<f.length;++m)o.push(Ot(0));const p=d[0].shape[0];for(let m=0;m<f.length;++m){const g=f[m],x=o[m];o[m]=B(()=>J(o[m],_(p,g))),l>0&&Ct(x)}Ct(f),a+=p,++l}return o}),c.done){s&&console.warn(`Your dataset iterator ran out of data during evaluateDataset(). Interrupting evalution. Make sure that your dataset can generate at least \`batches\` batches (in this case, ${e.batches} batches). You may need to use the repeat() function when building your dataset.`);break}}for(let c=0;c<o.length;++c){const u=o[c];o[c]=ft(o[c],a),Ct(u)}return We(o)}function ah(n){S(n>0&&Number.isInteger(n),()=>`batchSize is required to be a positive integer, but got ${n}`)}function qo(n,t,e){return n==null?[null]:Array.isArray(n)?n.map(s=>pr(s,t,e-t)):pr(n,t,e-t)}function Xh(n,t){return B(()=>n==null?null:Array.isArray(n)?n.map(e=>Xh(e,t)):ty(n,t.dtype==="int32"?t:rt(t,"int32")))}function lh(n,t){const e=[];let s=0,r=null;for(;s<n;)r=s+t,r>=n&&(r=n),e.push([s,r]),s=r;return e}function Ny(n){const t=[];n instanceof le&&(n=[n]);for(let e=0;e<n.length;++e){const s=n[e];if(s.rank===1)t.push(Ta(s,1));else{if(s.rank===0)throw new Error("Expected tensor to be at least 1D, but received a 0D tensor (scalar).");t.push(s)}}return t}function Sn(n,t){if(n==null)return;const e=[];if(t instanceof le)e.push(t.id);else if(Array.isArray(t))t.forEach(r=>e.push(r.id));else if(t!=null)for(const r in t){const o=t[r];e.push(o.id)}const s=[];if(n instanceof le)e.indexOf(n.id)===-1&&s.push(n);else if(Array.isArray(n))n.forEach(r=>{e.indexOf(r.id)===-1&&s.push(r)});else if(n!=null)for(const r in n){const o=n[r];e.indexOf(o.id)===-1&&s.push(o)}s.forEach(r=>{r.isDisposed||r.dispose()})}function GD(n){return n instanceof le}function Kh(n){return Array.isArray(n)}function hg(n){return!GD(n)&&!Kh(n)}function dg(n,t,e,s=!0,r=""){if(t==null||t.length===0){if(n!=null){let i=!1;if(Kh(n)&&n.length>0)i=!0;else if(hg(n)){for(const a in n)if(n.hasOwnProperty(a)){i=!0;break}}else i=!0;if(i)throw new A(`Error when checking model ${r} expected no data, but got ${n}`)}return[]}if(n==null)return t.map(i=>null);let o;if(hg(n)){n=n,o=[];for(const i of t){if(n[i]==null)throw new A(`No data provided for "${i}". Need data for each key in: ${t}`);o.push(n[i])}}else if(Kh(n)){if(n=n,n.length!==t.length)throw new A(`Error when checking model ${r}: the Array of Tensors that you are passing to your model is not the size the model expected. Expected to see ${t.length} Tensor(s), but instead got the following list of Tensor(s): ${n}`);o=n}else{if(n=n,t.length>1)throw new A(`The model ${r} expects ${t.length} Tensor(s), but only received one Tensor. Found: Tensor with shape ${n.shape}`);o=[n]}if(o=Ny(o),e!=null)for(let i=0;i<t.length;++i){if(e[i]==null)continue;const a=o[i];if(a.shape.length!==e[i].length)throw new A(`Error when checking ${r}: expected ${t[i]} to have ${e[i].length} dimension(s). but got array with shape ${a.shape}`);for(let l=0;l<e[i].length;++l){if(l===0&&!s)continue;const c=a.shape[l],u=e[i][l];if(u!=null&&u>=0&&c!==u)throw new A(`${r} expected a batch of elements where each example has shape [${e[i].slice(1,e[i].length)}] (i.e.,tensor shape [*,${e[i].slice(1,e[i].length)}]) but the ${r} received an input with ${a.shape[0]} examples, each with shape [${a.shape.slice(1,a.shape.length)}] (tensor shape [${a.shape}])`)}}return o}function HD(n,t,e){const s=Ls(n.map(o=>o.shape[0]));s.sort();const r=Ls(t.map(o=>o.shape[0]));if(r.sort(),s.length>1)throw new A(`All input Tensors (x) should have the same number of samples. Got array shapes: ${JSON.stringify(n.map(o=>o.shape))}`);if(r.length>1)throw new A(`All target Tensors (y) should have the same number of samples. Got array shapes: ${JSON.stringify(t.map(o=>o.shape))}`);if(s.length>0&&r.length>0&&!Mt(s,r))throw new A(`Input Tensors should have the same number of samples as target Tensors. Found ${s[0]} input sample(s) and ${r[0]} target sample(s).`)}function qD(n,t,e){const s=[Nu,Tu,fi];for(let r=0;r<n.length;++r){const o=n[r],i=t[r],a=e[r];if(i!=null){if(i===fi&&o.shape[o.shape.length-1]===1)throw new A(`You are passing a target array of shape ${o.shape} while using a loss 'categorical_crossentropy'. 'categorical_crossentropy'expects targets to be binary matrices (1s and 0s) of shape [samples, classes].`);if(s.indexOf(i)!==-1){const l=o.shape.slice(1),c=a.slice(1);for(let u=0;u<l.length;++u){const h=l[u],d=c[u];if(d!=null&&h!==d)throw new A(`A target Tensor with shape ${o.shape} was passed for an output of shape ${a}, while using a loss function that expects targets to have the same shape as the output.`)}}}}}function fg(n,t,e,s=!0,r=""){let o;if(Array.isArray(n)){if(n.length!==t.length)throw new A(`Error when checking model ${r}: the Array of Tensors that you are passing to your model is not the size the the model expected. Expected to see ${t.length} Tensor(s), but instead got ${n.length} Tensors(s).`);o=n}else{if(t.length>1)throw new A(`The model expects ${t.length} ${r} Tensors, but only received one Tensor. Found: array with shape ${JSON.stringify(n.shape)}.`);o=[n]}if(e!=null)for(let i=0;i<t.length;++i){if(e[i]==null)continue;const a=o[i];if(a.shape.length!==e[i].length)throw new A(`Error when checking ${r}: expected ${t[i]} to have ${e[i].length} dimension(s), but got array with shape ${JSON.stringify(a.shape)}`);for(let l=0;l<e[i].length;++l){if(l===0&&!s)continue;const c=a.shape[l],u=e[i][l];if(u!=null&&u!==c)throw new A(`Error when checking ${r}: expected ${t[i]} to have shape ${JSON.stringify(e[i])} but got array with shape ${JSON.stringify(a.shape)}.`)}}}function jD(n,t){if(n==null||Array.isArray(n)&&n.length===0)return t.map(s=>[]);let e;if(typeof n=="string"||typeof n=="function")e=[n];else if(Array.isArray(n)||typeof n=="object")e=n;else throw new TypeError(`Type of metrics argument not understood. Expected an string,function, Array, or Object, found: ${n}`);if(Array.isArray(e))return t.map(s=>e);{const s=[];for(const r of t){let o=e.hasOwnProperty(r)?e[r]:[];Array.isArray(o)||(o=[o]),s.push(o)}return s}}const XD="layers-model";class ro extends Nn{constructor(t){super(t),this.isTraining=!1}summary(t,e,s=console.log){if(!this.built)throw new A("This model has never been called, thus its weights have not been created yet. So no summary can be displayed. Build the model first (e.g., by calling it on some test data).");RD(this,t,e,s)}compile(t){if(t.loss==null&&(t.loss=[]),this.loss=t.loss,typeof t.optimizer=="string")this.optimizer_=ED(t.optimizer),this.isOptimizerOwned=!0;else{if(!(t.optimizer instanceof Js))throw new A("User-defined optimizer must be an instance of tf.Optimizer.");this.optimizer_=t.optimizer,this.isOptimizerOwned=!1}let e=[];if(!Array.isArray(t.loss)&&typeof t.loss!="string"&&typeof t.loss!="function"){t.loss=t.loss;for(const i in t.loss)if(this.outputNames.indexOf(i)===-1)throw new A(`Unknown entry in loss dictionary: "${i}". Only expected the following keys: ${this.outputNames}`);for(const i of this.outputNames)t.loss[i]==null&&console.warn(`Output "${i}" is missing from loss dictionary. We assume this was done on purpose, and we will not be expecting data to be passed to ${i} during training`),e.push(ih(t.loss[i]))}else if(Array.isArray(t.loss)){if(t.loss.length!==this.outputs.length)throw new A(`When passing an Array as loss, it should have one entry per model output. The model has ${this.outputs.length} output(s), but you passed loss=${t.loss}.`);e=t.loss.map(a=>ih(a))}else{const i=ih(t.loss);this.outputs.forEach(a=>{e.push(i)})}this.lossFunctions=e,this.feedOutputNames=[],this.feedOutputShapes=[],this.feedLossFns=[];for(let i=0;i<this.outputs.length;++i){const a=this.internalOutputShapes[i],l=this.outputNames[i];this.feedOutputNames.push(l),this.feedOutputShapes.push(a),this.feedLossFns.push(this.lossFunctions[i])}const s=[];this.metrics=t.metrics,this.metricsNames=["loss"],this.metricsTensors=[],fr("loss",()=>{for(let i=0;i<this.outputs.length;++i){if(s.indexOf(i)!==-1)continue;const a=this.lossFunctions[i];this.outputs.length>1&&(this.metricsTensors.push([a,i]),this.metricsNames.push(this.outputNames[i]+"_loss"))}});const r=jD(t.metrics,this.outputNames),o=(i,a,l)=>{this.outputNames.length>1&&(a=this.outputNames[i]+"_"+a),this.metricsNames.push(a),this.metricsTensors.push([l,i])};fr("metric",()=>{for(let i=0;i<this.outputs.length;++i){if(s.indexOf(i)!==-1)continue;const a=r[i];(c=>{let h,d,f;for(const p of c){if(typeof p=="string"&&["accuracy","acc","crossentropy","ce"].indexOf(p)!==-1){const g=this.internalOutputShapes[i];g[g.length-1]===1||this.lossFunctions[i]===Tu?["accuracy","acc"].indexOf(p)!==-1?d=by:["crossentropy","ce"].indexOf(p)!==-1&&(d=yD):this.lossFunctions[i]===Vl?["accuracy","acc"].indexOf(p)!==-1?d=wD:["crossentropy","ce"].indexOf(p)!==-1&&(d=vy):["accuracy","acc"].indexOf(p)!==-1?d=yy:["crossentropy","ce"].indexOf(p)!==-1&&(d=wy);let x;["accuracy","acc"].indexOf(p)!==-1?x="acc":["crossentropy","ce"].indexOf(p)!==-1&&(x="ce"),f=d,h=""+x}else f=TD(p),h=""+Za(p);let m;fr(h,()=>{m=f}),o(i,h,m)}})(a)}}),this.collectedTrainableWeights=this.trainableWeights}checkTrainableWeightsConsistency(){this.collectedTrainableWeights!=null&&this.trainableWeights.length!==this.collectedTrainableWeights.length&&console.warn("Discrepancy between trainableweights and collected trainable weights. Did you set `model.trainable` without calling `model.compile()` afterwards?")}evaluate(t,e,s={}){const r=s.batchSize==null?32:s.batchSize;ah(r);const i=this.standardizeUserDataXY(t,e,!0,r);try{const a=i[0].concat(i[1]);this.makeTestFunction();const l=this.testFunction,c=this.testLoop(l,a,r,s.verbose,s.steps);return We(c)}finally{Sn(i[0],t),Sn(i[1],e)}}async evaluateDataset(t,e){return this.makeTestFunction(),UD(this,t,e)}checkNumSamples(t,e,s,r="steps"){let o;if(s!=null){if(o=null,e!=null)throw new A(`If ${r} is set, batchSize must be null or undefined.Got batchSize = ${e}`)}else if(t!=null)Array.isArray(t)?o=t[0].shape[0]:o=t.shape[0];else throw new A(`Either the input data should have a defined shape, or ${r} shoud be specified.`);return o}execute(t,e){if(Array.isArray(e)&&e.length===0)throw new A("`outputs` is an empty Array, which is not allowed.");const s=Array.isArray(e),r=s?e:[e],o=this.retrieveSymbolicTensors(r),i=new _s;if(t instanceof le&&(t=[t]),Array.isArray(t)){if(t.length!==this.inputs.length)throw new A(`The number of inputs provided (${t.length}) does not match the number of inputs of this model (${this.inputs.length}).`);for(let l=0;l<this.inputs.length;++l)i.add(this.inputs[l],t[l])}else for(const l of this.inputs){const c=t[l.name];if(c==null)throw new A(`No value is provided for the model's input ${l.name}`);i.add(l,c)}const a=Zo(o,i);return s?a:a[0]}retrieveSymbolicTensors(t){const e=Nr(null,t.length);let s=t.length;for(const r of this.layers){const o=Array.isArray(r.output)?r.output:[r.output],i=o.map(a=>a.name);for(let a=0;a<t.length;++a){const l=i.indexOf(t[a]);if(l!==-1&&(e[a]=o[l],s--),s===0)break}if(s===0)break}if(s>0){const r=[];throw e.forEach((o,i)=>{o==null&&r.push(t[i])}),new A(`Cannot find SymbolicTensors for output name(s): ${JSON.stringify(r)}`)}return e}predictLoop(t,e=32,s=!1){return B(()=>{const r=this.checkNumSamples(t);if(s)throw new vt("Verbose predictLoop() is not implemented yet.");const o=lh(r,e),i=this.outputs.map(a=>[]);for(let a=0;a<o.length;++a)B(()=>{const c=o[a][0],u=o[a][1],h=qo(t,c,u),d=[];if(Array.isArray(h))for(let p=0;p<h.length;++p)d.push({key:this.inputs[p],value:h[p]});else d.push({key:this.inputs[0],value:h});const f=new _s(d);return Zo(this.outputs,f)}).forEach((c,u)=>i[u].push(c));return We(i.map(a=>Ue(a,0)))})}predict(t,e={}){const s=Ny(t);fg(s,this.inputNames,this.feedInputShapes,!1);try{const r=e.batchSize==null?32:e.batchSize;return ah(r),this.predictLoop(s,r)}finally{Sn(s,t)}}predictOnBatch(t){fg(t,this.inputNames,this.feedInputShapes,!0);const e=(Array.isArray(t)?t[0]:t).shape[0];return this.predictLoop(t,e)}standardizeUserDataXY(t,e,s=!0,r){if(this.optimizer_==null)throw new mn("You must compile a model before training/testing. Use LayersModel.compile(modelCompileArgs).");const o=[];for(let i=0;i<this.feedOutputShapes.length;++i){const a=this.feedOutputShapes[i];this.feedLossFns[i]===Vl?o.push(a.slice(0,a.length-1).concat([1])):o.push(a)}if(t=dg(t,this.feedInputNames,this.feedInputShapes,!1,"input"),e=dg(e,this.feedOutputNames,o,!1,"target"),HD(t,e),qD(e,this.feedLossFns,this.feedOutputShapes),this.stateful&&r!=null&&r>0&&t[0].shape[0]%r!==0)throw new A(`In a stateful network, you should only pass inputs with a number of samples that is divisible by the batch size ${r}. Found: ${t[0].shape[0]} sample(s).`);return[t,e]}async standardizeUserData(t,e,s,r,o=!0,i){const[a,l]=this.standardizeUserDataXY(t,e,o,i);if(s!=null)throw new Error("sample weight is not supported yet.");let c=null;if(r!=null){const u=Iy(r,this.outputNames);c=[];for(let h=0;h<u.length;++h)c.push(await ky(l[h],null,u[h]))}return[a,l,c]}testLoop(t,e,s,r=0,o){return B(()=>{const i=this.checkNumSamples(e,s,o,"steps"),a=[];if(r>0)throw new vt("Verbose mode is not implemented yet.");if(o!=null)throw new vt("steps mode in testLoop() is not implemented yet");{const l=lh(i,s),c=Ze(Mn(0,i));for(let u=0;u<l.length;++u){const h=l[u][0],d=l[u][1],f=pr(c,h,d-h),p=Xh(e,f),m=t(p);if(u===0)for(let g=0;g<m.length;++g)a.push(Ot(0));for(let g=0;g<m.length;++g){const x=m[g];a[g]=J(a[g],_(d-h,x))}}for(let u=0;u<a.length;++u)a[u]=ft(a[u],i)}return a})}getDedupedMetricsNames(){const t=this.metricsNames,e=[];for(let s=0;s<t.length;++s){const r=t[s];let o=r;if(Zm(t,r)>1){const i=Zm(t.slice(0,s),r);o+=`_${i}`}e.push(o)}return e}makeTrainFunction(){return t=>{const e=[],s=t.slice(0,this.inputs.length),r=t.slice(this.inputs.length,this.inputs.length+this.outputs.length),o=t.slice(this.inputs.length+this.outputs.length,this.inputs.length+this.outputs.length*2),i=[],a=()=>{const h=[];for(let m=0;m<this.inputs.length;++m)h.push({key:this.inputs[m],value:s[m]});const d=new _s(h),f=Zo(this.outputs,d,{training:!0});let p;for(let m=0;m<this.lossFunctions.length;++m){const g=this.lossFunctions[m];let x=g(r[m],f[m]);o[m]!=null&&(x=LD(x,o[m]));const b=ie(x);e.push(b),m===0?p=x:p=J(p,x)}for(let m=0;m<this.metricsTensors.length;++m){let g;if(this.outputs.length>1&&m<this.outputs.length)g=e[m];else{const x=this.metricsTensors[m][0],b=this.metricsTensors[m][1];g=ie(x(r[b],f[b]))}ns(g),i.push(g)}return p=ie(p),this.calculateLosses().forEach(m=>{p=J(p,m)}),p},l=this.collectedTrainableWeights.map(h=>h.read());return[this.optimizer_.minimize(a,!0,l)].concat(i)}}makeTestFunction(){this.testFunction=t=>B(()=>{const e=[];let s;const r=t.slice(0,this.inputs.length),o=t.slice(this.inputs.length,this.inputs.length+this.outputs.length),i=[];for(let c=0;c<this.inputs.length;++c)i.push({key:this.inputs[c],value:r[c]});const a=new _s(i),l=Zo(this.outputs,a);for(let c=0;c<this.lossFunctions.length;++c){const u=this.lossFunctions[c],h=ie(u(o[c],l[c]));c===0?s=h:s=J(s,h),e.push(s)}for(let c=0;c<this.metricsTensors.length;++c){const u=this.metricsTensors[c][0],h=this.metricsTensors[c][1],d=ie(u(o[h],l[h]));e.push(d)}return e})}async fit(t,e,s={}){if(this.isTraining)throw new Error("Cannot start training because another fit() call is ongoing.");this.isTraining=!0;let r,o,i,a,l,c,u,h,d;try{const f=s.batchSize==null?32:s.batchSize;ah(f);const m=await this.standardizeUserData(t,e,s.sampleWeight,s.classWeight,!1,f);r=m[0],o=m[1],d=m[2];let g=!1,x;if(s.validationData!=null&&s.validationData.length>0){if(g=!0,s.validationData.length===2)l=s.validationData[0],c=s.validationData[1];else throw s.validationData.length===3?new vt("validationData including sample weights is not supported yet."):new A(`When passing validation data, it must contain 2 (valX, valY) or 3 (valX, valY, valSampleWeight) items; ${s.validationData} is invalid.`);const k=await this.standardizeUserData(l,c,null,null,!0,f);u=k[0],h=k[1],x=u.concat(h)}else if(s.validationSplit!=null&&s.validationSplit>0&&s.validationSplit<1){g=!0;const I=Math.floor(r[0].shape[0]*(1-s.validationSplit)),k=r[0].shape[0];u=qo(r,I,k),i=r,r=qo(r,0,I),h=qo(o,I,k),a=o,o=qo(o,0,I),x=u.concat(h)}else s.validationSteps!=null&&(g=!0);const b=r.concat(o).concat(d);this.checkTrainableWeightsConsistency();const w=this.makeTrainFunction(),y=this.getDedupedMetricsNames();let v,$;g?(this.makeTestFunction(),v=this.testFunction,$=y.slice().concat(y.map(I=>"val_"+I))):(v=null,x=[],$=y.slice());const N=my(s.callbacks,s.yieldEvery);return await this.fitLoop(w,b,y,f,s.epochs,s.verbose,N,v,x,s.shuffle,$,s.initialEpoch,null,null)}finally{this.isTraining=!1,Sn(r,t),Sn(o,e),Sn(i,t),Sn(a,e),Sn(u,l),Sn(h,c),d!=null&&Ct(d)}}async fitLoop(t,e,s,r,o,i,a,l,c,u,h,d,f,p){r==null&&(r=32),o==null&&(o=1),u==null&&(u=!0),d==null&&(d=0);let m=!1;if(l!=null&&c!=null&&(m=!0),p!=null&&(m=!0,f==null))throw new A("Can only use `validationSteps` when doing step-wise training, i.e., `stepsPerEpoch` must be set.");const g=this.checkNumSamples(e,r,f,"steps_per_epoch");let x;g!=null&&(x=Mn(0,g)),i==null&&(i=1);const{callbackList:b,history:w}=gy(a,i,o,d,g,f,r,m,h);b.setModel(this),this.history=w,await b.onTrainBegin(),this.stopTraining_=!1;for(let y=d;y<o;++y){await b.onEpochBegin(y);const v={};if(f!=null)throw new vt("stepsPerEpoch mode is not implemented yet.");{if(u==="batch")throw new vt("batch shuffling is not implemneted yet");u&&d$(x);const $=Ze(x),N=lh(g,r);for(let T=0;T<N.length;++T){const I={};if(await b.onBatchBegin(T,I),B(()=>{const k=N[T][0],C=N[T][1],R=pr($,k,C-k);I.batch=T,I.size=C-k;const D=Xh(e,R),M=t(D);for(let O=0;O<s.length;++O){const z=s[O],G=M[O];I[z]=G,ns(G)}if(T===N.length-1&&m){const O=this.testLoop(l,c,r);for(let z=0;z<s.length;++z){const G=s[z],V=O[z];ns(V),v["val_"+G]=V}}}),await b.onBatchEnd(T,I),py(I),this.stopTraining_)break}$.dispose()}if(await b.onEpochEnd(y,v),this.stopTraining_)break}return await b.onTrainEnd(),await this.history.syncData(),this.history}async fitDataset(t,e){return BD(this,t,e)}async trainOnBatch(t,e){const s=await this.standardizeUserData(t,e),r=s[0],o=s[1],a=this.makeTrainFunction()(r.concat(o)),l=[];for(const c of a){const u=await c.data();l.push(u[0])}return Ct(a),Sn(s[0],t),Sn(s[1],e),We(l)}getNamedWeights(t){const e=[],s=t!=null&&t.trainableOnly,r=s?this.trainableWeights:this.weights,o=this.getWeights(s);for(let i=0;i<r.length;++i)s&&!r[i].trainable||e.push({name:r[i].originalName,tensor:o[i]});return e}set stopTraining(t){this.stopTraining_=t}get stopTraining(){return this.stopTraining_}get optimizer(){return this.optimizer_}set optimizer(t){this.optimizer_!==t&&(this.optimizer_=t,this.isOptimizerOwned=!1)}dispose(){const t=super.dispose();if(t.refCountAfterDispose===0&&this.optimizer!=null&&this.isOptimizerOwned){const e=$m().numTensors;this.optimizer_.dispose(),t.numDisposedVariables+=e-$m().numTensors}return t}getLossIdentifiers(){let t;if(typeof this.loss=="string")t=xs(this.loss);else if(Array.isArray(this.loss)){for(const e of this.loss)if(typeof e!="string")throw new Error("Serialization of non-string loss is not supported.");t=this.loss.map(e=>xs(e))}else{const e=Object.keys(this.loss);t={};const s=this.loss;for(const r of e)if(typeof s[r]=="string")t[r]=xs(s[r]);else throw new Error("Serialization of non-string loss is not supported.")}return t}getMetricIdentifiers(){if(typeof this.metrics=="string"||typeof this.metrics=="function")return[xs(Za(this.metrics))];if(Array.isArray(this.metrics))return this.metrics.map(t=>xs(Za(t)));{const t={};for(const e in this.metrics)t[e]=xs(Za(this.metrics[e]));return t}}getTrainingConfig(){return{loss:this.getLossIdentifiers(),metrics:this.getMetricIdentifiers(),optimizer_config:{class_name:this.optimizer.getClassName(),config:this.optimizer.getConfig()}}}loadTrainingConfig(t){if(t.weighted_metrics!=null)throw new Error("Loading weight_metrics is not supported yet.");if(t.loss_weights!=null)throw new Error("Loading loss_weights is not supported yet.");if(t.sample_weight_mode!=null)throw new Error("Loading sample_weight_mode is not supported yet.");const e=Hl(t.optimizer_config),s=is(e);let r;if(typeof t.loss=="string")r=ir(t.loss);else if(Array.isArray(t.loss))r=t.loss.map(i=>ir(i));else if(t.loss!=null){r={};for(const i in t.loss)r[i]=ir(t.loss[i])}let o;if(Array.isArray(t.metrics))o=t.metrics.map(i=>ir(i));else if(t.metrics!=null){o={};for(const i in t.metrics)o[i]=ir(t.metrics[i])}this.compile({loss:r,metrics:o,optimizer:s})}async save(t,e){if(typeof t=="string"){const c=yI(t);if(c.length===0)throw new A(`Cannot find any save handlers for URL '${t}'`);if(c.length>1)throw new A(`Found more than one (${c.length}) save handlers for URL '${t}'`);t=c[0]}if(t.save==null)throw new A("LayersModel.save() cannot proceed because the IOHandler provided does not have the `save` attribute defined.");const s=await Im(this.getNamedWeights(e)),a={modelTopology:this.toJSON(null,!1),format:XD,generatedBy:`TensorFlow.js tfjs-layers v${$y}`,convertedBy:null};if((e==null?!1:e.includeOptimizer)&&this.optimizer!=null){a.trainingConfig=this.getTrainingConfig();const c="optimizer",{data:u,specs:h}=await Im(await this.optimizer.getWeights(),c);s.specs.push(...h),s.data=hI([s.data,u])}return this.userDefinedMetadata!=null&&(lg(this.userDefinedMetadata,this.name,!0),a.userDefinedMetadata=this.userDefinedMetadata),a.weightData=s.data,a.weightSpecs=s.specs,t.save(a)}setUserDefinedMetadata(t){lg(t,this.name),this.userDefinedMetadata=t}getUserDefinedMetadata(){return this.userDefinedMetadata}}ro.className="Model";Z(ro);class Ty extends ro{}Ty.className="Functional";Z(Ty);async function cY(n,t){if(t==null&&(t={}),typeof n=="string"){const e=wI(n,t);if(e.length===0)e.push(nE(n,t));else if(e.length>1)throw new A(`Found more than one (${e.length}) load handlers for URL '${n}'`);n=e[0]}return KD(n,void 0,t)}async function KD(n,t,e){if(e==null&&(e={}),n.load==null)throw new A("Cannot proceed with model loading because the IOHandler provided does not have the `load` method implemented.");const s=await n.load();let r=s.modelTopology;r.model_config!=null&&(r=r.model_config);const o=e.strict==null?!0:e.strict,i=s.weightData!=null&&s.weightSpecs!=null&&o,a=is(Hl(r),t,i),l=s.trainingConfig;if(l!=null&&a.loadTrainingConfig(l),s.userDefinedMetadata!=null&&a.setUserDefinedMetadata(s.userDefinedMetadata),s.weightData!=null){if(s.weightSpecs==null)throw new A("LayersModel artifacts contains weight data, but not weight specs. Therefore loading of weights cannot proceed.");const{modelWeights:c,optimizerWeights:u}=YD(s.weightData,s.weightSpecs);a.loadWeights(c,o),a.optimizer!=null&&u.length>0&&await a.optimizer.setWeights(u),Ct(c),Ct(u.map(h=>h.tensor))}return a}function YD(n,t){const e=oI(n,t),s={},r=[];return t.forEach(o=>{o.group==="optimizer"?r.push({name:o.name,tensor:e[o.name]}):s[o.name]=e[o.name]}),{modelWeights:s,optimizerWeights:r}}class pi extends ro{constructor(t){if(super({inputs:[],outputs:[]}),t=t||{},this.trainable=!0,this.built=!1,this.name=t.name!=null?t.name:Iu("sequential_"),t.layers!=null)for(const e of t.layers)this.add(e)}checkShape(t){if(t.inboundNodes[0].outputTensors[0].shape.some(s=>s<0))throw new A(`Negative dimension size caused by adding layer ${t.name} with input shape [${t.inboundNodes[0].inputTensors[0].shape}]`)}add(t){const e=t instanceof pi||t instanceof ro;let s;if(e){if(s=t,s.outputs.length!==1)throw new A("All layers in a Sequential model should have a single output tensor. For multi-output layers, use the functional API.");if(s.inputs.length!==1)throw new A("All layers in a Sequential model should have a single input tensor. For multi-input layers, use the functional API.")}if(this.outputs.length===0){if(t.inboundNodes.length===0){if(t.batchInputShape==null)throw new A("The first layer in a Sequential model must get an `inputShape` or `batchInputShape` argument.");const r=YA({batchShape:t.batchInputShape,dtype:t.dtype,name:t.name+"_input"});t.apply(r)}if(e)this.outputs=s.outputs,this.inputs=s.inputs;else{if(t.inboundNodes.length!==1)throw new A(`A layer added to a Sequential model must not already be connected somewhere else. LayersModel received layer ${t.name} which has ${t.inboundNodes.length} pre-existing inbound connections.`);if(t.inboundNodes[0].outputTensors.length!==1)throw new A("All layers in a Sequential model should have a single output tensor. For multi-output layers, use the functional API.");this.checkShape(t),this.outputs=[t.inboundNodes[0].outputTensors[0]],this.inputs=cy(this.outputs[0])}this.inboundNodes=[],new Su({outboundLayer:this,inboundLayers:[],nodeIndices:[],tensorIndices:[],inputTensors:this.inputs,outputTensors:this.outputs,inputMasks:Nr(null,this.inputs.length),outputMasks:[null],inputShapes:this.inputs.map(r=>r.shape),outputShapes:this.outputs[0].shape})}else{const r=t.apply(this.outputs[0]);if(Array.isArray(r))throw new TypeError("All layers in a Sequential model should have a single output tensor. For multi-output layers, use the functional API.");this.checkShape(t),this.outputs=[r],this.inboundNodes[0].outputTensors=this.outputs,this.inboundNodes[0].outputShapes=[this.outputs[0].shape]}this.layers.push(t),this.built=!1}pop(){if(this.layers.length===0)throw new TypeError("There are no layers in the model.");if(this.layers.pop(),this.layers.length===0)this.outputs=[],this.inboundNodes=[],this.outboundNodes=[];else{const t=this.layers.length-1;this.layers[t].outboundNodes=[],this.outputs=[this.layers[t].output],this.inboundNodes[0].outputTensors=this.outputs,this.inboundNodes[0].outputShapes=[this.outputs[0].shape]}}call(t,e){return this.model==null&&this.build(),this.model.call(t,e)}build(t){if(At(t),this.inputs.length===0||this.outputs.length===0)throw new TypeError("Sequential model cannot be built: model is empty. Add some layers first.");this.model=new ro({inputs:this.inputs,outputs:this.outputs[0],name:this.name+"_model"}),this.model.trainable=this.trainable,this.supportsMasking=this.model.supportsMasking,this.inputLayers=this.model.inputLayers,this.inputLayersNodeIndices=this.model.inputLayersNodeIndices,this.inputLayersTensorIndices=this.model.inputLayersTensorIndices,this.outputLayers=this.model.outputLayers,this.outputLayersNodeIndices=this.model.outputLayersNodeIndices,this.outputLayersTensorIndices=this.model.outputLayersTensorIndices,this.nodesByDepth=this.model.nodesByDepth,this.containerNodes=this.model.containerNodes,this.outputNames=this.model.outputNames,this.inputNames=this.model.inputNames,this.built=!0}countParams(){return this.built||this.build(),super.countParams()}summary(t,e,s=console.log){this.built||this.build(),super.summary(t,e,s)}setWeights(t){this.model==null&&this.build(),this.model.setWeights(t)}evaluate(t,e,s={}){if(!this.built)throw new mn("The model needs to be compiled before being used.");return this.model.evaluate(t,e,s)}async evaluateDataset(t,e){if(!this.built)throw new mn("The model needs to be compiled before being used.");return this.model.evaluateDataset(t,e)}predict(t,e={}){return this.model==null&&this.build(),this.model.predict(t,e)}predictOnBatch(t){return this.model==null&&this.build(),this.model.predictOnBatch(t)}compile(t){this.build(),this.model.compile(t),this.optimizer_=this.model.optimizer,this.isOptimizerOwned=this.model.isOptimizerOwned,this.loss=this.model.loss,this.metrics=this.model.metrics,this.metricsTensors=this.model.metricsTensors,this.metricsNames=this.model.metricsNames}get optimizer(){return this.model==null?void 0:this.model.optimizer}set optimizer(t){this.model.optimizer=t}async fit(t,e,s={}){if(!this.built)throw new mn("The model needs to be compiled before being used.");return this.model.fit(t,e,s)}async fitDataset(t,e){if(!this.built)throw new mn("The model needs to be compiled before being used.");return this.model.fitDataset(t,e)}async trainOnBatch(t,e){return this.model.trainOnBatch(t,e)}static fromConfig(t,e,s={},r=!1){let o,i={};if(e instanceof Array){if(e[0].className==null||e[0].className==="Merge")throw new A("Legacy serialization format not supported yet.");o=e}else S(e.layers!=null,()=>"When the config data for a Sequential model is not an Array, it must be an Object that contains the 'layers' field."),o=e.layers,delete e.layers,i=e;const a=new t(i);if(!(a instanceof pi))throw new vt(`Sequential.fromConfig called on non-Sequential input: ${a}`);for(const l of o){const u=is(l,void 0,r);r&&u.setFastWeightInitDuringBuild(!0),a.add(u)}return a}set stopTraining(t){if(this.model==null)throw new A("Cannot set the stopTraining property of a sequential model before it is compiled.");this.model.stopTraining=t}get stopTraining(){if(this.model==null)throw new A("Cannot get the stopTraining property of a sequential model before it is compiled.");return this.model.stopTraining}getConfig(){const t=[];for(const e of this.layers){const s={};s.className=e.getClassName(),s.config=e.getConfig(),t.push(s)}return{name:this.name,layers:t}}}pi.className="Sequential";Z(pi);let Ee=class extends To{getConfig(){return{}}};class Ey extends Ee{apply(t,e=1){return FA(t,e)}}Ey.className="elu";Z(Ey);class Ry extends Ee{apply(t){return H0(t)}}Ry.className="selu";Z(Ry);class Ay extends Ee{apply(t){return Mr(t)}}Ay.className="relu";Z(Ay);class Dy extends Ee{apply(t){return B(()=>ui(6,Mr(t)))}}Dy.className="relu6";Z(Dy);class _y extends Ee{apply(t){return t}}_y.className="linear";Z(_y);class Fy extends Ee{apply(t){return ko(t)}}Fy.className="sigmoid";Z(Fy);class Oy extends Ee{apply(t){return MA(t)}}Oy.className="hardSigmoid";Z(Oy);class My extends Ee{apply(t){return wa(t)}}My.className="softplus";Z(My);class Ly extends Ee{apply(t){return OA(t)}}Ly.className="softsign";Z(Ly);class Py extends Ee{apply(t){return pu(t)}}Py.className="tanh";Z(Py);let Ep=class extends Ee{apply(t,e=-1){return Af(t,e)}};Ep.className="softmax";Z(Ep);class zy extends Ee{apply(t,e=-1){return L0(t,e)}}zy.className="logSoftmax";Z(zy);class By extends Ee{apply(t){return B(()=>B(()=>{const e=Math.sqrt(2),s=_(.5,J(1,D0(ft(t,e))));return _(t,s)}))}}By.className="gelu";Z(By);class Vy extends Ee{apply(t){return B(()=>_(.5,_(t,J(1,pu(_(Ne(ft(2,Math.PI)),J(t,_(.044715,Ir(t,3)))))))))}}Vy.className="gelu_new";Z(Vy);class Wy extends Ee{apply(t){return B(()=>_(t,pu(wa(t))))}}Wy.className="mish";Z(Wy);class Uy extends Ee{apply(t,e=1){return B(()=>_(ko(_(t,e)),t))}}Uy.className="swish";Z(Uy);function Vs(n){return n.getClassName()}function ch(n,t={}){return Na(n,pn.getMap().classNameMap,t,"activation")}function Ws(n){if(n==null){const t={};return t.className="linear",t.config={},ch(t)}if(typeof n=="string"){const t={};return t.className=n,t.config={},ch(t)}else return n instanceof Ee?n:ch(n)}function ZD(n){if(n!=null&&typeof n!="object")throw new Error(`Argument to L1L2 regularizer's constructor is expected to be an object, but received: ${n}`)}class Gy extends To{}class Hy extends Gy{constructor(t){super(),ZD(t),this.l1=t==null||t.l1==null?.01:t.l1,this.l2=t==null||t.l2==null?.01:t.l2,this.hasL1=this.l1!==0,this.hasL2=this.l2!==0}apply(t){return B(()=>{let e=xe([1]);return this.hasL1&&(e=J(e,dt(_(this.l1,De(t))))),this.hasL2&&(e=J(e,dt(_(this.l2,Ea(t))))),L(e,[])})}getConfig(){return{l1:this.l1,l2:this.l2}}static fromConfig(t,e){return new t({l1:e.l1,l2:e.l2})}}Hy.className="L1L2";Z(Hy);const pg={l1l2:"L1L2"};function Ut(n){return mp(n)}function mg(n,t={}){return Na(n,pn.getMap().classNameMap,t,"regularizer")}function Kt(n){if(n==null)return null;if(typeof n=="string"){const e={className:n in pg?pg[n]:n,config:{}};return mg(e)}else return n instanceof Gy?n:mg(n)}class qy extends kt{constructor(t){super(t??{}),this.supportsMasking=!0,t!=null&&(this.maxValue=t.maxValue)}call(t,e){t=gt(t);let s=Mr(t);return this.maxValue!=null&&(s=ln(s,0,this.maxValue)),s}computeOutputShape(t){return t}getConfig(){const t={maxValue:this.maxValue},e=super.getConfig();return Object.assign(t,e),t}}qy.className="ReLU";Z(qy);class jy extends kt{constructor(t){super(t??{}),this.DEFAULT_ALPHA=.3,t==null&&(t={}),this.alpha=t.alpha==null?this.DEFAULT_ALPHA:t.alpha}call(t,e){const s=gt(t);return vf(s,this.alpha)}computeOutputShape(t){return t}getConfig(){const t={alpha:this.alpha},e=super.getConfig();return Object.assign(t,e),t}}jy.className="LeakyReLU";Z(jy);class Xy extends kt{constructor(t){if(super(t??{}),this.DEFAULT_ALPHA_INITIALIZER="zeros",t==null&&(t={}),this.supportsMasking=!0,this.alphaInitializer=Xt(t.alphaInitializer||this.DEFAULT_ALPHA_INITIALIZER),this.alphaRegularizer=Kt(t.alphaRegularizer),this.alphaConstraint=de(t.alphaConstraint),t.sharedAxes==null)this.sharedAxes=null;else if(Array.isArray(t.sharedAxes))this.sharedAxes=t.sharedAxes;else if(typeof t.sharedAxes=="number")this.sharedAxes=[t.sharedAxes];else throw new A(`Expected sharedAxes to be a number or an array of numbers, but got ${t.sharedAxes}`)}build(t){t=At(t);const e=t.slice(1);if(this.sharedAxes!=null)for(const r of this.sharedAxes)e[r-1]=1;this.alpha=this.addWeight("alpha",e,"float32",this.alphaInitializer,this.alphaRegularizer,!0,this.alphaConstraint);const s={};if(this.sharedAxes!=null)for(let r=1;r<t.length;++r)s[r]=t[r];this.inputSpec=[new ue({ndim:t.length,axes:s})],this.built=!0}call(t,e){return t=gt(t),Nf(t,this.alpha.read())}getConfig(){const t={alphaInitializer:Zt(this.alphaInitializer),alphaRegularizer:Ut(this.alphaRegularizer),alphaConstraint:he(this.alphaConstraint),sharedAxes:this.sharedAxes},e=super.getConfig();return Object.assign(t,e),t}}Xy.className="PReLU";Z(Xy);let Ky=class extends kt{constructor(t){if(super(t??{}),this.DEFAULT_ALPHA=1,t==null&&(t={}),t.alpha!=null&&t.alpha!==this.DEFAULT_ALPHA)throw new vt(`Non-default alpha value (${t.alpha}) is not supported by the ELU layer yet.`);this.alpha=t.alpha==null?this.DEFAULT_ALPHA:t.alpha}call(t,e){const s=gt(t);return xu(s)}computeOutputShape(t){return t}getConfig(){const t={alpha:this.alpha},e=super.getConfig();return Object.assign(t,e),t}};Ky.className="ELU";Z(Ky);class Yy extends kt{constructor(t){super(t??{}),this.DEFAULT_THETA=1,t==null&&(t={}),this.theta=t.theta==null?this.DEFAULT_THETA:t.theta}call(t,e){const s=gt(t);return _(s,rt(cn(s,this.theta),"float32"))}computeOutputShape(t){return t}getConfig(){const t={theta:this.theta},e=super.getConfig();return Object.assign(t,e),t}}Yy.className="ThresholdedReLU";Z(Yy);class Zy extends kt{constructor(t){super(t??{}),this.DEFAULT_AXIS=1,t==null&&(t={}),this.softmax=new Ep().apply,this.axis=t.axis==null?this.DEFAULT_AXIS:t.axis}call(t,e){return B(()=>{let s=gt(t);const r=e.mask;if(r!=null){const o=_(pt(Zs(s.shape),rt(r,s.dtype)),Ot(-1e9));s=J(s,o)}return this.axis instanceof Array?this.axis.length>1?cs(pt(s,P0(s,this.axis,!0))):this.softmax(s,this.axis[0]):this.softmax(s,this.axis)})}computeOutputShape(t){return t}getConfig(){const t={axis:this.axis},e=super.getConfig();return Object.assign(t,e),t}}Zy.className="Softmax";Z(Zy);function oo(n,t,e){if(typeof n=="number")return Nr(n,t);if(n.length!==t)throw new A(`The ${e} argument must be an integer or tuple of ${t} integers. Received: ${n.length} elements.`);for(let s=0;s<t;++s){const r=n[s];if(!RA(r))throw new A(`The ${e} argument must be an integer or tuple of ${t} integers. Received: ${JSON.stringify(n)} including a non-integer number ${r}`)}return n}function On(n,t,e,s,r=1){if(n==null)return n;const o=t+(t-1)*(r-1);let i;return e==="same"?i=n:i=n-o+1,Math.floor((i+s-1)/s)}function Jn(n,t,e,s){if(n==null)return null;if(s==="valid")n=n*t+Bs([e-t,0]);else if(s==="same")n=n*t;else throw new A(`Unsupport padding mode: ${s}.`);return n}function Rp(n,t){return B(()=>(se(t),t==="channelsFirst"?Tt(n,[0,2,3,1]):n))}function Jy(n,t){return B(()=>(se(t),t==="channelsFirst"?Tt(n,[0,2,3,4,1]):n))}function JD(n,t,e,s=1,r="valid",o,i=1){return B(()=>{if(o==null&&(o=Ln()),se(o),n.shape.length!==3)throw new A(`The input of a conv1dWithBias operation should be 3, but is ${n.shape.length} instead.`);if(t.shape.length!==3)throw new A(`The kernel for a conv1dWithBias operation should be 3, but is ${t.shape.length} instead`);if(e!=null&&e.shape.length!==1)throw new A(`The bias for a conv1dWithBias operation should be 1, but is ${e.shape.length} instead`);if(o==="channelsFirst"&&(n=Tt(n,[0,2,1])),r==="causal")throw new vt("The support for CAUSAL padding mode in conv1dWithBias is not implemented yet.");let a=N0(n,t,s,r==="same"?"same":"valid","NWC",i);return e!=null&&(a=Bn(a,e)),a})}function gg(n,t,e,s=[1,1],r="valid",o,i,a=null){return B(()=>{if(o==null&&(o=Ln()),se(o),n.rank!==3&&n.rank!==4)throw new A(`conv2dWithBiasActivation expects input to be of rank 3 or 4, but received ${n.rank}.`);if(t.rank!==3&&t.rank!==4)throw new A(`conv2dWithBiasActivation expects kernel to be of rank 3 or 4, but received ${n.rank}.`);let l=Rp(n,o);if(r==="causal")throw new vt("The support for CAUSAL padding mode in conv1dWithBias is not implemented yet.");return l=QN({x:l,filter:t,strides:s,pad:r==="same"?"same":"valid",dilations:i,dataFormat:"NHWC",bias:e,activation:a}),o==="channelsFirst"&&(l=Tt(l,[0,3,1,2])),l})}function QD(n,t,e,s=[1,1,1],r="valid",o,i){return B(()=>{if(o==null&&(o=Ln()),se(o),n.rank!==4&&n.rank!==5)throw new A(`conv3dWithBias expects input to be of rank 4 or 5, but received ${n.rank}.`);if(t.rank!==4&&t.rank!==5)throw new A(`conv3dWithBias expects kernel to be of rank 4 or 5, but received ${n.rank}.`);let a=Jy(n,o);if(r==="causal")throw new vt("The support for CAUSAL padding mode in conv3dWithBias is not implemented yet.");return a=Yk(a,t,s,r==="same"?"same":"valid","NDHWC",i),e!=null&&(a=Bn(a,e)),o==="channelsFirst"&&(a=Tt(a,[0,4,1,2,3])),a})}class Eu extends kt{constructor(t,e){if(super(e),this.bias=null,this.DEFAULT_KERNEL_INITIALIZER="glorotNormal",this.DEFAULT_BIAS_INITIALIZER="zeros",Eu.verifyArgs(e),this.rank=t,be(this.rank,"rank"),this.rank!==1&&this.rank!==2&&this.rank!==3)throw new vt(`Convolution layer for rank other than 1, 2, or 3 (${this.rank}) is not implemented yet.`);if(this.kernelSize=oo(e.kernelSize,t,"kernelSize"),this.strides=oo(e.strides==null?1:e.strides,t,"strides"),this.padding=e.padding==null?"valid":e.padding,un(this.padding),this.dataFormat=e.dataFormat==null?"channelsLast":e.dataFormat,se(this.dataFormat),this.activation=Ws(e.activation),this.useBias=e.useBias==null?!0:e.useBias,this.biasInitializer=Xt(e.biasInitializer||this.DEFAULT_BIAS_INITIALIZER),this.biasConstraint=de(e.biasConstraint),this.biasRegularizer=Kt(e.biasRegularizer),this.activityRegularizer=Kt(e.activityRegularizer),this.dilationRate=oo(e.dilationRate==null?1:e.dilationRate,t,"dilationRate"),this.rank===1&&Array.isArray(this.dilationRate)&&this.dilationRate.length!==1)throw new A(`dilationRate must be a number or an array of a single number for 1D convolution, but received ${JSON.stringify(this.dilationRate)}`);if(this.rank===2){if(typeof this.dilationRate=="number")this.dilationRate=[this.dilationRate,this.dilationRate];else if(this.dilationRate.length!==2)throw new A(`dilationRate must be a number or array of two numbers for 2D convolution, but received ${JSON.stringify(this.dilationRate)}`)}else if(this.rank===3){if(typeof this.dilationRate=="number")this.dilationRate=[this.dilationRate,this.dilationRate,this.dilationRate];else if(this.dilationRate.length!==3)throw new A(`dilationRate must be a number or array of three numbers for 3D convolution, but received ${JSON.stringify(this.dilationRate)}`)}}static verifyArgs(t){if(Zn("kernelSize"in t,"required key 'kernelSize' not in config"),typeof t.kernelSize!="number"&&!gp(t.kernelSize,"number",1,3))throw new A(`BaseConv expects config.kernelSize to be number or number[] with length 1, 2, or 3, but received ${JSON.stringify(t.kernelSize)}.`)}getConfig(){const t={kernelSize:this.kernelSize,strides:this.strides,padding:this.padding,dataFormat:this.dataFormat,dilationRate:this.dilationRate,activation:Vs(this.activation),useBias:this.useBias,biasInitializer:Zt(this.biasInitializer),biasRegularizer:Ut(this.biasRegularizer),activityRegularizer:Ut(this.activityRegularizer),biasConstraint:he(this.biasConstraint)},e=super.getConfig();return Object.assign(t,e),t}}class Eo extends Eu{constructor(t,e){super(t,e),this.kernel=null,Eo.verifyArgs(e),this.filters=e.filters,be(this.filters,"filters"),this.kernelInitializer=Xt(e.kernelInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.kernelConstraint=de(e.kernelConstraint),this.kernelRegularizer=Kt(e.kernelRegularizer)}build(t){t=At(t);const e=this.dataFormat==="channelsFirst"?1:t.length-1;if(t[e]==null)throw new A(`The channel dimension of the input should be defined. Found ${t[e]}`);const s=t[e],r=this.kernelSize.concat([s,this.filters]);this.kernel=this.addWeight("kernel",r,null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.useBias&&(this.bias=this.addWeight("bias",[this.filters],null,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint)),this.inputSpec=[{ndim:this.rank+2,axes:{[e]:s}}],this.built=!0}call(t,e){return B(()=>{t=gt(t);let s;const r=this.bias==null?null:this.bias.read(),o=Xb(this.activation.getClassName());if(o!=null&&this.rank===2)s=gg(t,this.kernel.read(),r,this.strides,this.padding,this.dataFormat,this.dilationRate,o);else{if(this.rank===1)s=JD(t,this.kernel.read(),r,this.strides[0],this.padding,this.dataFormat,this.dilationRate[0]);else if(this.rank===2)s=gg(t,this.kernel.read(),r,this.strides,this.padding,this.dataFormat,this.dilationRate);else if(this.rank===3)s=QD(t,this.kernel.read(),r,this.strides,this.padding,this.dataFormat,this.dilationRate);else throw new vt("convolutions greater than 3D are not implemented yet.");this.activation!=null&&(s=this.activation.apply(s))}return s})}computeOutputShape(t){t=At(t);const e=[],s=this.dataFormat==="channelsLast"?t.slice(1,t.length-1):t.slice(2);for(let o=0;o<s.length;++o){const i=On(s[o],this.kernelSize[o],this.padding,this.strides[o],typeof this.dilationRate=="number"?this.dilationRate:this.dilationRate[o]);e.push(i)}let r=[t[0]];return this.dataFormat==="channelsLast"?(r=r.concat(e),r.push(this.filters)):(r.push(this.filters),r=r.concat(e)),r}getConfig(){const t={filters:this.filters,kernelInitializer:Zt(this.kernelInitializer),kernelRegularizer:Ut(this.kernelRegularizer),kernelConstraint:he(this.kernelConstraint)},e=super.getConfig();return Object.assign(t,e),t}static verifyArgs(t){if(!("filters"in t)||typeof t.filters!="number"||t.filters<1)throw new A(`Convolution layer expected config.filters to be a 'number' > 0 but got ${JSON.stringify(t.filters)}`)}}class _a extends Eo{constructor(t){super(2,t),_a.verifyArgs(t)}getConfig(){const t=super.getConfig();return delete t.rank,t}static verifyArgs(t){if(typeof t.kernelSize!="number"&&!gp(t.kernelSize,"number",1,2))throw new A(`Conv2D expects config.kernelSize to be number or number[] with length 1 or 2, but received ${JSON.stringify(t.kernelSize)}.`)}}_a.className="Conv2D";Z(_a);class Fa extends Eo{constructor(t){super(3,t),Fa.verifyArgs(t)}getConfig(){const t=super.getConfig();return delete t.rank,t}static verifyArgs(t){if(typeof t.kernelSize!="number"&&!(Array.isArray(t.kernelSize)&&(t.kernelSize.length===1||t.kernelSize.length===3)))throw new A(`Conv3D expects config.kernelSize to be number or [number, number, number], but received ${JSON.stringify(t.kernelSize)}.`)}}Fa.className="Conv3D";Z(Fa);class Qy extends _a{constructor(t){if(super(t),this.inputSpec=[new ue({ndim:4})],this.padding!=="same"&&this.padding!=="valid")throw new A(`Conv2DTranspose currently supports only padding modes 'same' and 'valid', but received padding mode ${this.padding}`)}build(t){if(t=At(t),t.length!==4)throw new A("Input should have rank 4; Received input shape: "+JSON.stringify(t));const e=this.dataFormat==="channelsFirst"?1:t.length-1;if(t[e]==null)throw new A("The channel dimension of the inputs should be defined. Found `None`.");const s=t[e],r=this.kernelSize.concat([this.filters,s]);this.kernel=this.addWeight("kernel",r,"float32",this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.useBias&&(this.bias=this.addWeight("bias",[this.filters],"float32",this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint)),this.inputSpec=[new ue({ndim:4,axes:{[e]:s}})],this.built=!0}call(t,e){return B(()=>{let s=gt(t);if(s.shape.length!==4)throw new A(`Conv2DTranspose.call() expects input tensor to be rank-4, but received a tensor of rank-${s.shape.length}`);const r=s.shape,o=r[0];let i,a;this.dataFormat==="channelsFirst"?(i=2,a=3):(i=1,a=2);const l=r[i],c=r[a],u=this.kernelSize[0],h=this.kernelSize[1],d=this.strides[0],f=this.strides[1],p=Jn(l,d,u,this.padding),m=Jn(c,f,h,this.padding),g=[o,p,m,this.filters];this.dataFormat!=="channelsLast"&&(s=Tt(s,[0,2,3,1]));let x=T0(s,this.kernel.read(),g,this.strides,this.padding);return this.dataFormat!=="channelsLast"&&(x=Tt(x,[0,3,1,2])),this.bias!=null&&(x=Bn(x,this.bias.read(),this.dataFormat)),this.activation!=null&&(x=this.activation.apply(x)),x})}computeOutputShape(t){t=At(t);const e=t.slice();let s,r,o;this.dataFormat==="channelsFirst"?(s=1,r=2,o=3):(s=3,r=1,o=2);const i=this.kernelSize[0],a=this.kernelSize[1],l=this.strides[0],c=this.strides[1];return e[s]=this.filters,e[r]=Jn(e[r],l,i,this.padding),e[o]=Jn(e[o],c,a,this.padding),e}getConfig(){const t=super.getConfig();return delete t.dilationRate,t}}Qy.className="Conv2DTranspose";Z(Qy);class t1 extends Fa{constructor(t){if(super(t),this.inputSpec=[new ue({ndim:5})],this.padding!=="same"&&this.padding!=="valid")throw new A(`Conv3DTranspose currently supports only padding modes 'same' and 'valid', but received padding mode ${this.padding}`)}build(t){if(t=At(t),t.length!==5)throw new A("Input should have rank 5; Received input shape: "+JSON.stringify(t));const e=this.dataFormat==="channelsFirst"?1:t.length-1;if(t[e]==null)throw new A("The channel dimension of the inputs should be defined. Found `None`.");const s=t[e],r=this.kernelSize.concat([this.filters,s]);this.kernel=this.addWeight("kernel",r,"float32",this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.useBias&&(this.bias=this.addWeight("bias",[this.filters],"float32",this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint)),this.inputSpec=[new ue({ndim:5,axes:{[e]:s}})],this.built=!0}call(t,e){return B(()=>{let s=gt(t);if(s.shape.length!==5)throw new A(`Conv3DTranspose.call() expects input tensor to be rank-4, but received a tensor of rank-${s.shape.length}`);const r=s.shape,o=r[0];let i,a,l;this.dataFormat==="channelsFirst"?(l=2,i=3,a=4):(l=1,i=2,a=3);const c=r[l],u=r[i],h=r[a],d=this.kernelSize[0],f=this.kernelSize[1],p=this.kernelSize[2],m=this.strides[0],g=this.strides[1],x=this.strides[2],b=Jn(c,m,d,this.padding),w=Jn(u,g,f,this.padding),y=Jn(h,x,p,this.padding),v=[o,b,w,y,this.filters];this.dataFormat!=="channelsLast"&&(s=Tt(s,[0,2,3,4,1]));let $=Qk(s,this.kernel.read(),v,this.strides,this.padding);return this.dataFormat!=="channelsLast"&&($=Tt($,[0,4,1,2,3])),this.bias!==null&&($=Bn($,this.bias.read(),this.dataFormat)),this.activation!==null&&($=this.activation.apply($)),$})}computeOutputShape(t){t=At(t);const e=t.slice();let s,r,o,i;this.dataFormat==="channelsFirst"?(s=1,r=2,o=3,i=4):(s=4,r=1,o=2,i=3);const a=this.kernelSize[0],l=this.kernelSize[1],c=this.kernelSize[2],u=this.strides[0],h=this.strides[1],d=this.strides[2];return e[s]=this.filters,e[r]=Jn(e[r],u,a,this.padding),e[o]=Jn(e[o],h,l,this.padding),e[i]=Jn(e[i],d,c,this.padding),e}getConfig(){const t=super.getConfig();return delete t.dilationRate,t}}t1.className="Conv3DTranspose";Z(t1);class e1 extends Eo{constructor(t,e){if(super(t,e),this.DEFAULT_DEPTHWISE_INITIALIZER="glorotUniform",this.DEFAULT_POINTWISE_INITIALIZER="glorotUniform",this.depthwiseKernel=null,this.pointwiseKernel=null,e.filters==null)throw new A("The `filters` configuration field is required by SeparableConv, but is unspecified.");if(e.kernelInitializer!=null||e.kernelRegularizer!=null||e.kernelConstraint!=null)throw new A("Fields kernelInitializer, kernelRegularizer and kernelConstraint are invalid for SeparableConv2D. Use depthwiseInitializer, depthwiseRegularizer, depthwiseConstraint, pointwiseInitializer, pointwiseRegularizer and pointwiseConstraint instead.");if(e.padding!=null&&e.padding!=="same"&&e.padding!=="valid")throw new A(`SeparableConv${this.rank}D supports only padding modes: 'same' and 'valid', but received ${JSON.stringify(e.padding)}`);this.depthMultiplier=e.depthMultiplier==null?1:e.depthMultiplier,this.depthwiseInitializer=Xt(e.depthwiseInitializer||this.DEFAULT_DEPTHWISE_INITIALIZER),this.depthwiseRegularizer=Kt(e.depthwiseRegularizer),this.depthwiseConstraint=de(e.depthwiseConstraint),this.pointwiseInitializer=Xt(e.depthwiseInitializer||this.DEFAULT_POINTWISE_INITIALIZER),this.pointwiseRegularizer=Kt(e.pointwiseRegularizer),this.pointwiseConstraint=de(e.pointwiseConstraint)}build(t){if(t=At(t),t.length<this.rank+2)throw new A(`Inputs to SeparableConv${this.rank}D should have rank ${this.rank+2}, but received input shape: ${JSON.stringify(t)}`);const e=this.dataFormat==="channelsFirst"?1:t.length-1;if(t[e]==null||t[e]<0)throw new A(`The channel dimension of the inputs should be defined, but found ${JSON.stringify(t[e])}`);const s=t[e],r=this.kernelSize.concat([s,this.depthMultiplier]),o=[];for(let a=0;a<this.rank;++a)o.push(1);o.push(s*this.depthMultiplier,this.filters);const i=!0;this.depthwiseKernel=this.addWeight("depthwise_kernel",r,"float32",this.depthwiseInitializer,this.depthwiseRegularizer,i,this.depthwiseConstraint),this.pointwiseKernel=this.addWeight("pointwise_kernel",o,"float32",this.pointwiseInitializer,this.pointwiseRegularizer,i,this.pointwiseConstraint),this.useBias?this.bias=this.addWeight("bias",[this.filters],"float32",this.biasInitializer,this.biasRegularizer,i,this.biasConstraint):this.bias=null,this.inputSpec=[new ue({ndim:this.rank+2,axes:{[e]:s}})],this.built=!0}call(t,e){return B(()=>{t=gt(t);let s;if(this.rank===1)throw new vt("1D separable convolution is not implemented yet.");return this.rank===2&&(this.dataFormat==="channelsFirst"&&(t=Tt(t,[0,2,3,1])),s=q0(t,this.depthwiseKernel.read(),this.pointwiseKernel.read(),this.strides,this.padding,this.dilationRate,"NHWC")),this.useBias&&(s=Bn(s,this.bias.read(),this.dataFormat)),this.activation!=null&&(s=this.activation.apply(s)),this.dataFormat==="channelsFirst"&&(s=Tt(s,[0,3,1,2])),s})}getConfig(){const t=super.getConfig();return delete t.rank,delete t.kernelInitializer,delete t.kernelRegularizer,delete t.kernelConstraint,t.depthwiseInitializer=Zt(this.depthwiseInitializer),t.pointwiseInitializer=Zt(this.pointwiseInitializer),t.depthwiseRegularizer=Ut(this.depthwiseRegularizer),t.pointwiseRegularizer=Ut(this.pointwiseRegularizer),t.depthwiseConstraint=he(this.depthwiseConstraint),t.pointwiseConstraint=he(this.pointwiseConstraint),t}}e1.className="SeparableConv";class n1 extends e1{constructor(t){super(2,t)}}n1.className="SeparableConv2D";Z(n1);class Ru extends Eo{constructor(t){super(1,t),Ru.verifyArgs(t),this.inputSpec=[{ndim:3}]}getConfig(){const t=super.getConfig();return delete t.rank,delete t.dataFormat,t}static verifyArgs(t){if(typeof t.kernelSize!="number"&&!gp(t.kernelSize,"number",1,1))throw new A(`Conv1D expects config.kernelSize to be number or number[] with length 1, but received ${JSON.stringify(t.kernelSize)}.`)}}Ru.className="Conv1D";Z(Ru);class s1 extends kt{constructor(t){super(t),typeof t.cropping=="number"?this.cropping=[[t.cropping,t.cropping],[t.cropping,t.cropping]]:typeof t.cropping[0]=="number"?this.cropping=[[t.cropping[0],t.cropping[0]],[t.cropping[1],t.cropping[1]]]:this.cropping=t.cropping,this.dataFormat=t.dataFormat===void 0?"channelsLast":t.dataFormat,this.inputSpec=[{ndim:4}]}computeOutputShape(t){return this.dataFormat==="channelsFirst"?[t[0],t[1],t[2]-this.cropping[0][0]-this.cropping[0][1],t[3]-this.cropping[1][0]-this.cropping[1][1]]:[t[0],t[1]-this.cropping[0][0]-this.cropping[0][1],t[2]-this.cropping[1][0]-this.cropping[1][1],t[3]]}call(t,e){return B(()=>{if(t=gt(t),this.dataFormat==="channelsLast"){const s=Ya(t,this.cropping[0][0],t.shape[1]-this.cropping[0][0]-this.cropping[0][1],2);return Ya(s,this.cropping[1][0],t.shape[2]-this.cropping[1][1]-this.cropping[1][0],3)}else{const s=Ya(t,this.cropping[0][0],t.shape[2]-this.cropping[0][0]-this.cropping[0][1],3);return Ya(s,this.cropping[1][0],t.shape[3]-this.cropping[1][1]-this.cropping[1][0],4)}})}getConfig(){const t={cropping:this.cropping,dataFormat:this.dataFormat},e=super.getConfig();return Object.assign(t,e),t}}s1.className="Cropping2D";Z(s1);class r1 extends kt{constructor(t){super(t),this.DEFAULT_SIZE=[2,2],this.inputSpec=[{ndim:4}],this.size=t.size==null?this.DEFAULT_SIZE:t.size,this.dataFormat=t.dataFormat==null?"channelsLast":t.dataFormat,se(this.dataFormat),this.interpolation=t.interpolation==null?"nearest":t.interpolation,NA(this.interpolation)}computeOutputShape(t){if(this.dataFormat==="channelsFirst"){const e=t[2]==null?null:this.size[0]*t[2],s=t[3]==null?null:this.size[1]*t[3];return[t[0],t[1],e,s]}else{const e=t[1]==null?null:this.size[0]*t[1],s=t[2]==null?null:this.size[1]*t[2];return[t[0],e,s,t[3]]}}call(t,e){return B(()=>{let s=gt(t);const r=s.shape;if(this.dataFormat==="channelsFirst"){s=Tt(s,[0,2,3,1]);const o=this.size[0]*r[2],i=this.size[1]*r[3],a=this.interpolation==="nearest"?ys.resizeNearestNeighbor(s,[o,i]):ys.resizeBilinear(s,[o,i]);return Tt(a,[0,3,1,2])}else{const o=this.size[0]*r[1],i=this.size[1]*r[2];return this.interpolation==="nearest"?ys.resizeNearestNeighbor(s,[o,i]):ys.resizeBilinear(s,[o,i])}})}getConfig(){const t={size:this.size,dataFormat:this.dataFormat,interpolation:this.interpolation},e=super.getConfig();return Object.assign(t,e),t}}r1.className="UpSampling2D";Z(r1);function t_(n,t,e=[1,1],s="valid",r,o){return B(()=>{r==null&&(r=Ln()),se(r);let i=Rp(n,r);if(n.rank!==4)throw new A(`Input for depthwiseConv2d is required to be 4-D, but is instead ${n.rank}-D`);if(t.rank!==4)throw new A(`depthwiseKernel is required to be 4-D, but is instead ${t.rank}-D`);return i=xf(i,t,e,s==="same"?"same":"valid","NHWC",o),r==="channelsFirst"&&(i=Tt(i,[0,3,1,2])),i})}class o1 extends Eu{constructor(t){super(2,t),this.depthwiseKernel=null,this.depthMultiplier=t.depthMultiplier==null?1:t.depthMultiplier,this.depthwiseInitializer=Xt(t.depthwiseInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.depthwiseConstraint=de(t.depthwiseConstraint),this.depthwiseRegularizer=Kt(t.depthwiseRegularizer)}build(t){if(t=At(t),t.length<4)throw new A(`Inputs to DepthwiseConv2D should have rank 4. Received input shape: ${JSON.stringify(t)}.`);const e=this.dataFormat==="channelsFirst"?1:3;if(t[e]==null||t[e]<0)throw new A(`The channel dimension of the inputs to DepthwiseConv2D should be defined, but is not (${t[e]}).`);const s=t[e],r=[this.kernelSize[0],this.kernelSize[1],s,this.depthMultiplier];this.depthwiseKernel=this.addWeight("depthwise_kernel",r,null,this.depthwiseInitializer,this.depthwiseRegularizer,!0,this.depthwiseConstraint),this.useBias?this.bias=this.addWeight("bias",[s*this.depthMultiplier],null,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint):this.bias=null,this.built=!0}call(t,e){return B(()=>{t=gt(t);let s=t_(t,this.depthwiseKernel.read(),this.strides,this.padding,this.dataFormat,null);return this.useBias&&(s=Bn(s,this.bias.read(),this.dataFormat)),this.activation!=null&&(s=this.activation.apply(s)),s})}computeOutputShape(t){t=At(t);const e=this.dataFormat==="channelsFirst"?t[2]:t[1],s=this.dataFormat==="channelsFirst"?t[3]:t[2],r=this.dataFormat==="channelsFirst"?t[1]*this.depthMultiplier:t[3]*this.depthMultiplier,o=On(e,this.kernelSize[0],this.padding,this.strides[0]),i=On(s,this.kernelSize[1],this.padding,this.strides[1]);return this.dataFormat==="channelsFirst"?[t[0],r,o,i]:[t[0],o,i,r]}getConfig(){const t=super.getConfig();return t.depthMultiplier=this.depthMultiplier,t.depthwiseInitializer=Zt(this.depthwiseInitializer),t.depthwiseRegularizer=Ut(this.depthwiseRegularizer),t.depthwiseConstraint=he(this.depthwiseRegularizer),t}}o1.className="DepthwiseConv2D";Z(o1);function i1(n,t,e,s){if(Array.isArray(n)){if(t!=null||e!=null)throw new A("When inputs is an array, neither initialState or constants should be provided");s!=null&&(e=n.slice(n.length-s,n.length),n=n.slice(0,n.length-s)),n.length>1&&(t=n.slice(1,n.length)),n=n[0]}function r(o){return o==null||Array.isArray(o)?o:[o]}return t=r(t),e=r(e),{inputs:n,initialState:t,constants:e}}function a1(n,t,e,s=!1,r,o,i=!1,a=!1){return B(()=>{const l=t.shape.length;if(l<3)throw new A(`Input should be at least 3D, but is ${l}D.`);const c=[1,0].concat(Mn(2,l));t=Tt(t,c),i&&console.warn("Backend rnn(): the unroll = true option is not applicable to the imperative deeplearn.js backend."),r!=null&&(r=rt(rt(r,"bool"),"float32"),r.rank===l-1&&(r=Ve(r,-1)),r=Tt(r,c)),s&&(t=kr(t,0),r!=null&&(r=kr(r,0)));const u=[];let h,d=e;const f=t.shape[0],p=Sr(t);let m;r!=null&&(m=Sr(r));for(let x=0;x<f;++x){const b=p[x],w=B(()=>n(b,d));if(r==null)h=w[0],d=w[1];else{const y=B(()=>{const v=m[x],$=pt(bn(v),v),N=J(_(w[0],v),_(d[0],$)),T=d.map((I,k)=>J(_(w[1][k],v),_(I,$)));return{output:N,newStates:T}});h=y.output,d=y.newStates}a&&u.push(h)}let g;return a&&(g=vs(u,1)),[h,g,d]})}class Qs extends kt{constructor(t){super(t);let e;if(t.cell==null)throw new A("cell property is missing for the constructor of RNN.");if(Array.isArray(t.cell)?e=new _p({cells:t.cell}):e=t.cell,e.stateSize==null)throw new A("The RNN cell should have an attribute `stateSize` (tuple of integers, one integer per RNN state).");this.cell=e,this.returnSequences=t.returnSequences==null?!1:t.returnSequences,this.returnState=t.returnState==null?!1:t.returnState,this.goBackwards=t.goBackwards==null?!1:t.goBackwards,this._stateful=t.stateful==null?!1:t.stateful,this.unroll=t.unroll==null?!1:t.unroll,this.supportsMasking=!0,this.inputSpec=[new ue({ndim:3})],this.stateSpec=null,this.states_=null,this.numConstants=null,this.keptStates=[]}getStates(){if(this.states_==null){const t=Array.isArray(this.cell.stateSize)?this.cell.stateSize.length:1;return Mn(0,t).map(e=>null)}else return this.states_}setStates(t){this.states_=t}computeOutputShape(t){Gh(t)&&(t=t[0]),t=t;let e=this.cell.stateSize;Array.isArray(e)||(e=[e]);const s=e[0];let r;if(this.returnSequences?r=[t[0],t[1],s]:r=[t[0],s],this.returnState){const o=[];for(const i of e)o.push([t[0],i]);return[r].concat(o)}else return r}computeMask(t,e){return B(()=>{Array.isArray(e)&&(e=e[0]);const s=this.returnSequences?e:null;if(this.returnState){const r=this.states.map(o=>null);return[s].concat(r)}else return s})}get states(){if(this.states_==null){const t=Array.isArray(this.cell.stateSize)?this.cell.stateSize.length:1,e=[];for(let s=0;s<t;++s)e.push(null);return e}else return this.states_}set states(t){this.states_=t}build(t){if(this.numConstants!=null)throw new vt("Constants support is not implemented in RNN yet.");Gh(t)&&(t=t[0]),t=t;const e=this.stateful?t[0]:null,s=t.slice(2);this.inputSpec[0]=new ue({shape:[e,null,...s]});const r=[t[0]].concat(t.slice(2));this.cell.build(r);let o;if(Array.isArray(this.cell.stateSize)?o=this.cell.stateSize:o=[this.cell.stateSize],this.stateSpec!=null){if(!Mt(this.stateSpec.map(i=>i.shape[i.shape.length-1]),o))throw new A(`An initialState was passed that is not compatible with cell.stateSize. Received stateSpec=${this.stateSpec}; However cell.stateSize is ${this.cell.stateSize}`)}else this.stateSpec=o.map(i=>new ue({shape:[null,i]}));this.stateful&&this.resetStates()}resetStates(t,e=!1){B(()=>{if(!this.stateful)throw new Yn("Cannot call resetStates() on an RNN Layer that is not stateful.");const s=this.inputSpec[0].shape[0];if(s==null)throw new A("If an RNN is stateful, it needs to know its batch size. Specify the batch size of your input tensors: \n- If using a Sequential model, specify the batch size by passing a `batchInputShape` option to your first layer.\n- If using the functional API, specify the batch size by passing a `batchShape` option to your Input layer.");if(this.states_==null)Array.isArray(this.cell.stateSize)?this.states_=this.cell.stateSize.map(r=>xe([s,r])):this.states_=[xe([s,this.cell.stateSize])];else if(t==null)Ct(this.states_),this.keptStates!=null&&(Ct(this.keptStates),this.keptStates=[]),Array.isArray(this.cell.stateSize)?this.states_=this.cell.stateSize.map(r=>xe([s,r])):this.states_[0]=xe([s,this.cell.stateSize]);else{if(Array.isArray(t)||(t=[t]),t.length!==this.states_.length)throw new A(`Layer ${this.name} expects ${this.states_.length} state(s), but it received ${t.length} state value(s). Input received: ${t}`);e===!0?this.keptStates.push(this.states_.slice()):Ct(this.states_);for(let r=0;r<this.states_.length;++r){const o=t[r],i=Array.isArray(this.cell.stateSize)?this.cell.stateSize[r]:this.cell.stateSize,a=[s,i];if(!Mt(o.shape,a))throw new A(`State ${r} is incompatible with layer ${this.name}: expected shape=${a}, received shape=${o.shape}`);this.states_[r]=o}}this.states_=this.states_.map(r=>ns(r.clone()))})}apply(t,e){let s=e==null?null:e.initialState,r=e==null?null:e.constants;e==null&&(e={});const o=i1(t,s,r,this.numConstants);t=o.inputs,s=o.initialState,r=o.constants;let i=[],a=[];if(s!=null){e.initialState=s,i=i.concat(s),this.stateSpec=[];for(const c of s)this.stateSpec.push(new ue({shape:c.shape}));a=a.concat(this.stateSpec)}if(r!=null&&(e.constants=r,i=i.concat(r),this.numConstants=r.length),i[0]instanceof hs){const c=[t].concat(i),u=this.inputSpec.concat(a),h=this.inputSpec;this.inputSpec=u;const d=super.apply(c,e);return this.inputSpec=h,d}else return super.apply(t,e)}call(t,e){return B(()=>{const s=e==null?null:e.mask,r=e==null?null:e.training;let o=e==null?null:e.initialState;t=gt(t),o==null&&(this.stateful?o=this.states_:o=this.getInitialState(t));const i=Array.isArray(this.cell.stateSize)?this.cell.stateSize.length:1;if(o.length!==i)throw new A(`RNN Layer has ${i} state(s) but was passed ${o.length} initial state(s).`);this.unroll&&console.warn("Ignoring unroll = true for RNN layer, due to imperative backend.");const a={training:r},c=a1((p,m)=>{const g=this.cell.call([p].concat(m),a);return[g[0],g.slice(1)]},t,o,this.goBackwards,s,null,this.unroll,this.returnSequences),u=c[0],h=c[1],d=c[2];this.stateful&&this.resetStates(d,r);const f=this.returnSequences?h:u;return this.returnState?[f].concat(d):f})}getInitialState(t){return B(()=>{let e=xe(t.shape);return e=dt(e,[1,2]),e=Ta(e),Array.isArray(this.cell.stateSize)?this.cell.stateSize.map(s=>s>1?Wh(e,[1,s]):e):this.cell.stateSize>1?[Wh(e,[1,this.cell.stateSize])]:[e]})}get trainableWeights(){return this.trainable?this.cell.trainableWeights:[]}get nonTrainableWeights(){return this.trainable?this.cell.nonTrainableWeights:this.cell.weights}setFastWeightInitDuringBuild(t){super.setFastWeightInitDuringBuild(t),this.cell!=null&&this.cell.setFastWeightInitDuringBuild(t)}getConfig(){const t=super.getConfig(),e={returnSequences:this.returnSequences,returnState:this.returnState,goBackwards:this.goBackwards,stateful:this.stateful,unroll:this.unroll};this.numConstants!=null&&(e.numConstants=this.numConstants);const s=this.cell.getConfig();return this.getClassName()===Qs.className&&(e.cell={className:this.cell.getClassName(),config:s}),Object.assign(Object.assign(Object.assign({},s),t),e)}static fromConfig(t,e,s={}){const r=e.cell,o=is(r,s);return new t(Object.assign(e,{cell:o}))}}Qs.className="RNN";Z(Qs);class Au extends kt{}class Ap extends Au{constructor(t){super(t),this.DEFAULT_ACTIVATION="tanh",this.DEFAULT_KERNEL_INITIALIZER="glorotNormal",this.DEFAULT_RECURRENT_INITIALIZER="orthogonal",this.DEFAULT_BIAS_INITIALIZER="zeros",this.units=t.units,be(this.units,"units"),this.activation=Ws(t.activation==null?this.DEFAULT_ACTIVATION:t.activation),this.useBias=t.useBias==null?!0:t.useBias,this.kernelInitializer=Xt(t.kernelInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.recurrentInitializer=Xt(t.recurrentInitializer||this.DEFAULT_RECURRENT_INITIALIZER),this.biasInitializer=Xt(t.biasInitializer||this.DEFAULT_BIAS_INITIALIZER),this.kernelRegularizer=Kt(t.kernelRegularizer),this.recurrentRegularizer=Kt(t.recurrentRegularizer),this.biasRegularizer=Kt(t.biasRegularizer),this.kernelConstraint=de(t.kernelConstraint),this.recurrentConstraint=de(t.recurrentConstraint),this.biasConstraint=de(t.biasConstraint),this.dropout=fo([1,Bs([0,t.dropout==null?0:t.dropout])]),this.recurrentDropout=fo([1,Bs([0,t.recurrentDropout==null?0:t.recurrentDropout])]),this.dropoutFunc=t.dropoutFunc,this.stateSize=this.units,this.dropoutMask=null,this.recurrentDropoutMask=null}build(t){t=At(t),this.kernel=this.addWeight("kernel",[t[t.length-1],this.units],null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.recurrentKernel=this.addWeight("recurrent_kernel",[this.units,this.units],null,this.recurrentInitializer,this.recurrentRegularizer,!0,this.recurrentConstraint),this.useBias?this.bias=this.addWeight("bias",[this.units],null,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint):this.bias=null,this.built=!0}call(t,e){return B(()=>{if(t=t,t.length!==2)throw new A(`SimpleRNNCell expects 2 input Tensors, got ${t.length}.`);let s=t[1];t=t[0];const r=e.training==null?!1:e.training;0<this.dropout&&this.dropout<1&&this.dropoutMask==null&&(this.dropoutMask=Us({ones:()=>bn(t),rate:this.dropout,training:r,dropoutFunc:this.dropoutFunc})),0<this.recurrentDropout&&this.recurrentDropout<1&&this.recurrentDropoutMask==null&&(this.recurrentDropoutMask=Us({ones:()=>bn(s),rate:this.recurrentDropout,training:r,dropoutFunc:this.dropoutFunc}));let o;const i=this.dropoutMask,a=this.recurrentDropoutMask;i!=null?o=os(_(t,i),this.kernel.read()):o=os(t,this.kernel.read()),this.bias!=null&&(o=Bn(o,this.bias.read())),a!=null&&(s=_(s,a));let l=J(o,os(s,this.recurrentKernel.read()));return this.activation!=null&&(l=this.activation.apply(l)),[l,l]})}getConfig(){const t=super.getConfig(),e={units:this.units,activation:Vs(this.activation),useBias:this.useBias,kernelInitializer:Zt(this.kernelInitializer),recurrentInitializer:Zt(this.recurrentInitializer),biasInitializer:Zt(this.biasInitializer),kernelRegularizer:Ut(this.kernelRegularizer),recurrentRegularizer:Ut(this.recurrentRegularizer),biasRegularizer:Ut(this.biasRegularizer),activityRegularizer:Ut(this.activityRegularizer),kernelConstraint:he(this.kernelConstraint),recurrentConstraint:he(this.recurrentConstraint),biasConstraint:he(this.biasConstraint),dropout:this.dropout,recurrentDropout:this.recurrentDropout};return Object.assign(Object.assign({},t),e)}}Ap.className="SimpleRNNCell";Z(Ap);class l1 extends Qs{constructor(t){t.cell=new Ap(t),super(t)}call(t,e){return B(()=>{this.cell.dropoutMask!=null&&(Ct(this.cell.dropoutMask),this.cell.dropoutMask=null),this.cell.recurrentDropoutMask!=null&&(Ct(this.cell.recurrentDropoutMask),this.cell.recurrentDropoutMask=null);const s=e==null?null:e.mask,r=e==null?null:e.training,o=e==null?null:e.initialState;return super.call(t,{mask:s,training:r,initialState:o})})}static fromConfig(t,e){return new t(e)}}l1.className="SimpleRNN";Z(l1);class Dp extends Au{constructor(t){if(super(t),this.DEFAULT_ACTIVATION="tanh",this.DEFAULT_RECURRENT_ACTIVATION="hardSigmoid",this.DEFAULT_KERNEL_INITIALIZER="glorotNormal",this.DEFAULT_RECURRENT_INITIALIZER="orthogonal",this.DEFAULT_BIAS_INITIALIZER="zeros",t.resetAfter)throw new A("GRUCell does not support reset_after parameter set to true.");this.units=t.units,be(this.units,"units"),this.activation=Ws(t.activation===void 0?this.DEFAULT_ACTIVATION:t.activation),this.recurrentActivation=Ws(t.recurrentActivation===void 0?this.DEFAULT_RECURRENT_ACTIVATION:t.recurrentActivation),this.useBias=t.useBias==null?!0:t.useBias,this.kernelInitializer=Xt(t.kernelInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.recurrentInitializer=Xt(t.recurrentInitializer||this.DEFAULT_RECURRENT_INITIALIZER),this.biasInitializer=Xt(t.biasInitializer||this.DEFAULT_BIAS_INITIALIZER),this.kernelRegularizer=Kt(t.kernelRegularizer),this.recurrentRegularizer=Kt(t.recurrentRegularizer),this.biasRegularizer=Kt(t.biasRegularizer),this.kernelConstraint=de(t.kernelConstraint),this.recurrentConstraint=de(t.recurrentConstraint),this.biasConstraint=de(t.biasConstraint),this.dropout=fo([1,Bs([0,t.dropout==null?0:t.dropout])]),this.recurrentDropout=fo([1,Bs([0,t.recurrentDropout==null?0:t.recurrentDropout])]),this.dropoutFunc=t.dropoutFunc,this.implementation=t.implementation,this.stateSize=this.units,this.dropoutMask=null,this.recurrentDropoutMask=null}build(t){t=At(t);const e=t[t.length-1];this.kernel=this.addWeight("kernel",[e,this.units*3],null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.recurrentKernel=this.addWeight("recurrent_kernel",[this.units,this.units*3],null,this.recurrentInitializer,this.recurrentRegularizer,!0,this.recurrentConstraint),this.useBias?this.bias=this.addWeight("bias",[this.units*3],null,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint):this.bias=null,this.built=!0}call(t,e){return B(()=>{if(t=t,t.length!==2)throw new A(`GRUCell expects 2 input Tensors (inputs, h, c), got ${t.length}.`);const s=e.training==null?!1:e.training;let r=t[1];t=t[0],0<this.dropout&&this.dropout<1&&this.dropoutMask==null&&(this.dropoutMask=Us({ones:()=>bn(t),rate:this.dropout,training:s,count:3,dropoutFunc:this.dropoutFunc})),0<this.recurrentDropout&&this.recurrentDropout<1&&this.recurrentDropoutMask==null&&(this.recurrentDropoutMask=Us({ones:()=>bn(r),rate:this.recurrentDropout,training:s,count:3,dropoutFunc:this.dropoutFunc}));const o=this.dropoutMask,i=this.recurrentDropoutMask;let a,l,c;0<this.dropout&&this.dropout<1&&(t=_(t,o[0]));let u=os(t,this.kernel.read());this.useBias&&(u=Bn(u,this.bias.read())),0<this.recurrentDropout&&this.recurrentDropout<1&&(r=_(r,i[0]));const h=this.recurrentKernel.read(),[d,f]=an(h,[2*this.units,this.units],h.rank-1),p=os(r,d),[m,g,x]=an(u,3,u.rank-1),[b,w]=an(p,2,p.rank-1);a=this.recurrentActivation.apply(J(m,b)),l=this.recurrentActivation.apply(J(g,w));const y=os(_(l,r),f);c=this.activation.apply(J(x,y));const v=J(_(a,r),_(J(1,te(a)),c));return[v,v]})}getConfig(){const t=super.getConfig(),e={units:this.units,activation:Vs(this.activation),recurrentActivation:Vs(this.recurrentActivation),useBias:this.useBias,kernelInitializer:Zt(this.kernelInitializer),recurrentInitializer:Zt(this.recurrentInitializer),biasInitializer:Zt(this.biasInitializer),kernelRegularizer:Ut(this.kernelRegularizer),recurrentRegularizer:Ut(this.recurrentRegularizer),biasRegularizer:Ut(this.biasRegularizer),activityRegularizer:Ut(this.activityRegularizer),kernelConstraint:he(this.kernelConstraint),recurrentConstraint:he(this.recurrentConstraint),biasConstraint:he(this.biasConstraint),dropout:this.dropout,recurrentDropout:this.recurrentDropout,implementation:this.implementation,resetAfter:!1};return Object.assign(Object.assign({},t),e)}}Dp.className="GRUCell";Z(Dp);class c1 extends Qs{constructor(t){t.implementation===0&&console.warn("`implementation=0` has been deprecated, and now defaults to `implementation=1`. Please update your layer call."),t.cell=new Dp(t),super(t)}call(t,e){return B(()=>{this.cell.dropoutMask!=null&&(Ct(this.cell.dropoutMask),this.cell.dropoutMask=null),this.cell.recurrentDropoutMask!=null&&(Ct(this.cell.recurrentDropoutMask),this.cell.recurrentDropoutMask=null);const s=e==null?null:e.mask,r=e==null?null:e.training,o=e==null?null:e.initialState;return super.call(t,{mask:s,training:r,initialState:o})})}static fromConfig(t,e){return e.implmentation===0&&(e.implementation=1),new t(e)}}c1.className="GRU";Z(c1);class Du extends Au{constructor(t){super(t),this.DEFAULT_ACTIVATION="tanh",this.DEFAULT_RECURRENT_ACTIVATION="hardSigmoid",this.DEFAULT_KERNEL_INITIALIZER="glorotNormal",this.DEFAULT_RECURRENT_INITIALIZER="orthogonal",this.DEFAULT_BIAS_INITIALIZER="zeros",this.units=t.units,be(this.units,"units"),this.activation=Ws(t.activation===void 0?this.DEFAULT_ACTIVATION:t.activation),this.recurrentActivation=Ws(t.recurrentActivation===void 0?this.DEFAULT_RECURRENT_ACTIVATION:t.recurrentActivation),this.useBias=t.useBias==null?!0:t.useBias,this.kernelInitializer=Xt(t.kernelInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.recurrentInitializer=Xt(t.recurrentInitializer||this.DEFAULT_RECURRENT_INITIALIZER),this.biasInitializer=Xt(t.biasInitializer||this.DEFAULT_BIAS_INITIALIZER),this.unitForgetBias=t.unitForgetBias,this.kernelRegularizer=Kt(t.kernelRegularizer),this.recurrentRegularizer=Kt(t.recurrentRegularizer),this.biasRegularizer=Kt(t.biasRegularizer),this.kernelConstraint=de(t.kernelConstraint),this.recurrentConstraint=de(t.recurrentConstraint),this.biasConstraint=de(t.biasConstraint),this.dropout=fo([1,Bs([0,t.dropout==null?0:t.dropout])]),this.recurrentDropout=fo([1,Bs([0,t.recurrentDropout==null?0:t.recurrentDropout])]),this.dropoutFunc=t.dropoutFunc,this.implementation=t.implementation,this.stateSize=[this.units,this.units],this.dropoutMask=null,this.recurrentDropoutMask=null}build(t){var e;t=At(t);const s=t[t.length-1];this.kernel=this.addWeight("kernel",[s,this.units*4],null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.recurrentKernel=this.addWeight("recurrent_kernel",[this.units,this.units*4],null,this.recurrentInitializer,this.recurrentRegularizer,!0,this.recurrentConstraint);let r;if(this.useBias){if(this.unitForgetBias){const o=this.biasInitializer,i=this.units;r=new(e=class extends wn{apply(l,c){const u=o.apply([i]),h=new bp().apply([i]),d=o.apply([i*2]);return Qm(Qm(u,h),d)}},e.className="CustomInit",e)}else r=this.biasInitializer;this.bias=this.addWeight("bias",[this.units*4],null,r,this.biasRegularizer,!0,this.biasConstraint)}else this.bias=null;this.built=!0}call(t,e){return B(()=>{const s=e.training==null?!1:e.training;if(t=t,t.length!==3)throw new A(`LSTMCell expects 3 input Tensors (inputs, h, c), got ${t.length}.`);let r=t[1];const o=t[2];t=t[0],0<this.dropout&&this.dropout<1&&this.dropoutMask==null&&(this.dropoutMask=Us({ones:()=>bn(t),rate:this.dropout,training:s,count:4,dropoutFunc:this.dropoutFunc})),0<this.recurrentDropout&&this.recurrentDropout<1&&this.recurrentDropoutMask==null&&(this.recurrentDropoutMask=Us({ones:()=>bn(r),rate:this.recurrentDropout,training:s,count:4,dropoutFunc:this.dropoutFunc}));const i=this.dropoutMask,a=this.recurrentDropoutMask;let l,c,u,h;0<this.dropout&&this.dropout<1&&(t=_(t,i[0]));let d=os(t,this.kernel.read());0<this.recurrentDropout&&this.recurrentDropout<1&&(r=_(r,a[0])),d=J(d,os(r,this.recurrentKernel.read())),this.useBias&&(d=Bn(d,this.bias.read()));const[f,p,m,g]=an(d,4,d.rank-1);l=this.recurrentActivation.apply(f),c=this.recurrentActivation.apply(p),u=J(_(c,o),_(l,this.activation.apply(m))),h=this.recurrentActivation.apply(g);const x=_(h,this.activation.apply(u));return[x,x,u]})}getConfig(){const t=super.getConfig(),e={units:this.units,activation:Vs(this.activation),recurrentActivation:Vs(this.recurrentActivation),useBias:this.useBias,kernelInitializer:Zt(this.kernelInitializer),recurrentInitializer:Zt(this.recurrentInitializer),biasInitializer:Zt(this.biasInitializer),unitForgetBias:this.unitForgetBias,kernelRegularizer:Ut(this.kernelRegularizer),recurrentRegularizer:Ut(this.recurrentRegularizer),biasRegularizer:Ut(this.biasRegularizer),activityRegularizer:Ut(this.activityRegularizer),kernelConstraint:he(this.kernelConstraint),recurrentConstraint:he(this.recurrentConstraint),biasConstraint:he(this.biasConstraint),dropout:this.dropout,recurrentDropout:this.recurrentDropout,implementation:this.implementation};return Object.assign(Object.assign({},t),e)}}Du.className="LSTMCell";Z(Du);class u1 extends Qs{constructor(t){t.implementation===0&&console.warn("`implementation=0` has been deprecated, and now defaults to `implementation=1`. Please update your layer call."),t.cell=new Du(t),super(t)}call(t,e){return B(()=>{this.cell.dropoutMask!=null&&(Ct(this.cell.dropoutMask),this.cell.dropoutMask=null),this.cell.recurrentDropoutMask!=null&&(Ct(this.cell.recurrentDropoutMask),this.cell.recurrentDropoutMask=null);const s=e==null?null:e.mask,r=e==null?null:e.training,o=e==null?null:e.initialState;return super.call(t,{mask:s,training:r,initialState:o})})}static fromConfig(t,e){return e.implmentation===0&&(e.implementation=1),new t(e)}}u1.className="LSTM";Z(u1);class _p extends Au{constructor(t){super(t),this.cells=t.cells}get stateSize(){const t=[];for(const e of this.cells.slice().reverse())Array.isArray(e.stateSize)?t.push(...e.stateSize):t.push(e.stateSize);return t}call(t,e){return B(()=>{t=t;let s=t.slice(1);const r=[];for(const a of this.cells.slice().reverse())Array.isArray(a.stateSize)?r.push(s.splice(0,a.stateSize.length)):r.push(s.splice(0,1));r.reverse();const o=[];let i;for(let a=0;a<this.cells.length;++a){const l=this.cells[a];s=r[a],a===0?i=[t[0]].concat(s):i=[i[0]].concat(s),i=l.call(i,e),o.push(i.slice(1))}s=[];for(const a of o.slice().reverse())s.push(...a);return[i[0]].concat(s)})}build(t){Gh(t)&&(t=t[0]),t=t;let e;this.cells.forEach((s,r)=>{fr(`RNNCell_${r}`,()=>{s.build(t),Array.isArray(s.stateSize)?e=s.stateSize[0]:e=s.stateSize,t=[t[0],e]})}),this.built=!0}getConfig(){const t=super.getConfig(),e=o=>({className:o.getClassName(),config:o.getConfig()}),r={cells:this.cells.map(e)};return Object.assign(Object.assign({},t),r)}static fromConfig(t,e,s={}){const r=[];for(const o of e.cells)r.push(is(o,s));return new t({cells:r})}get trainableWeights(){if(!this.trainable)return[];const t=[];for(const e of this.cells)t.push(...e.trainableWeights);return t}get nonTrainableWeights(){const t=[];for(const e of this.cells)t.push(...e.nonTrainableWeights);if(!this.trainable){const e=[];for(const s of this.cells)e.push(...s.trainableWeights);return e.concat(t)}return t}getWeights(){const t=[];for(const e of this.cells)t.push(...e.weights);return Hh(t)}setWeights(t){const e=[];for(const s of this.cells){const r=s.weights.length,o=t.splice(r);for(let i=0;i<s.weights.length;++i)e.push([s.weights[i],o[i]])}kp(e)}}_p.className="StackedRNNCells";Z(_p);function Us(n){const{ones:t,rate:e,training:s=!1,count:r=1,dropoutFunc:o}=n,i=()=>o!=null?o(t(),e):ey(t(),e),a=()=>Ra(i,t,s);return!r||r<=1?ns(a().clone()):Array(r).fill(void 0).map(a).map(c=>ns(c.clone()))}var e_=function(n,t){var e={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&t.indexOf(s)<0&&(e[s]=n[s]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(n);r<s.length;r++)t.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(n,s[r])&&(e[s[r]]=n[s[r]]);return e};class h1 extends Qs{constructor(t){if(t.unroll)throw new vt("Unrolling is not possible with convolutional RNNs.");if(Array.isArray(t.cell))throw new vt("It is not possible at the moment to stack convolutional cells.");super(t),this.inputSpec=[new ue({ndim:5})]}call(t,e){return B(()=>{if(this.cell.dropoutMask!=null&&(Ct(this.cell.dropoutMask),this.cell.dropoutMask=null),this.cell.recurrentDropoutMask!=null&&(Ct(this.cell.recurrentDropoutMask),this.cell.recurrentDropoutMask=null),e&&e.constants)throw new A("ConvRNN2D cell does not support constants");const s=e==null?null:e.mask,r=e==null?null:e.training,o=e==null?null:e.initialState;return super.call(t,{mask:s,training:r,initialState:o})})}computeOutputShape(t){let e=this.computeSingleOutputShape(t);return this.returnSequences||(e=[e[0],...e.slice(2)]),this.returnState&&(e=[e,...Array(2).fill([t[0],...e.slice(-3)])]),e}getInitialState(t){return B(()=>{const{stateSize:e}=this.cell,s=t.shape,r=this.computeSingleOutputShape(s),o=[r[0],...r.slice(2)],i=xe(o);return Array.isArray(e)?Array(e.length).fill(i):[i]})}resetStates(t,e=!1){B(()=>{if(!this.stateful)throw new Yn("Cannot call resetStates() on an RNN Layer that is not stateful.");const s=this.inputSpec[0].shape,r=this.computeSingleOutputShape(s),o=[r[0],...r.slice(2)];if(s[0]==null)throw new A("If an RNN is stateful, it needs to know its batch size. Specify the batch size of your input tensors: \n- If using a Sequential model, specify the batch size by passing a `batchInputShape` option to your first layer.\n- If using the functional API, specify the batch size by passing a `batchShape` option to your Input layer.");if(this.getStates()==null)Array.isArray(this.cell.stateSize)?this.states_=this.cell.stateSize.map(()=>xe(o)):this.states_=[xe(o)];else if(t==null)Ct(this.states_),this.keptStates!=null&&(Ct(this.keptStates),this.keptStates=[]),Array.isArray(this.cell.stateSize)?this.states_=this.cell.stateSize.map(()=>xe(o)):this.states_[0]=xe(o);else{if(Array.isArray(t)||(t=[t]),t.length!==this.states_.length)throw new A(`Layer ${this.name} expects ${this.states_.length} state(s), but it received ${t.length} state value(s). Input received: ${t}`);e?this.keptStates.push(this.states_.slice()):Ct(this.states_);for(let a=0;a<this.states_.length;++a){const l=t[a],c=o;if(!Mt(l.shape,c))throw new A(`State ${a} is incompatible with layer ${this.name}: expected shape=${c}, received shape=${l.shape}`);this.states_[a]=l}}this.states_=this.states_.map(a=>ns(a.clone()))})}computeSingleOutputShape(t){const{dataFormat:e,filters:s,kernelSize:r,padding:o,strides:i,dilationRate:a}=this.cell,l=e==="channelsFirst",c=t[l?3:2],u=t[l?4:3],h=On(c,r[0],o,i[0],a[0]),d=On(u,r[1],o,i[1],a[1]);return[...t.slice(0,2),...l?[s,h,d]:[h,d,s]]}}h1.className="ConvRNN2D";class Fp extends Du{constructor(t){const{filters:e,kernelSize:s,strides:r,padding:o,dataFormat:i,dilationRate:a}=t;super(Object.assign(Object.assign({},t),{units:e})),this.filters=e,be(this.filters,"filters"),this.kernelSize=oo(s,2,"kernelSize"),this.kernelSize.forEach(l=>be(l,"kernelSize")),this.strides=oo(r||1,2,"strides"),this.strides.forEach(l=>be(l,"strides")),this.padding=o||"valid",un(this.padding),this.dataFormat=i||"channelsLast",se(this.dataFormat),this.dilationRate=oo(a||1,2,"dilationRate"),this.dilationRate.forEach(l=>be(l,"dilationRate"))}build(t){var e;t=At(t);const s=this.dataFormat==="channelsFirst"?1:t.length-1;if(t[s]==null)throw new A(`The channel dimension of the input should be defined. Found ${t[s]}`);const r=t[s],o=4,i=this.kernelSize.concat([r,this.filters*o]);this.kernel=this.addWeight("kernel",i,null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint);const a=this.kernelSize.concat([this.filters,this.filters*o]);if(this.recurrentKernel=this.addWeight("recurrent_kernel",a,null,this.recurrentInitializer,this.recurrentRegularizer,!0,this.recurrentConstraint),this.useBias){let l;if(this.unitForgetBias){const c=this.biasInitializer,u=this.filters;l=new(e=class extends wn{apply(d,f){const p=c.apply([u]),m=Zs([u]),g=c.apply([u*2]);return xp([p,m,g])}},e.className="CustomInit",e)}else l=this.biasInitializer;this.bias=this.addWeight("bias",[this.filters*o],null,l,this.biasRegularizer,!0,this.biasConstraint)}this.built=!0}call(t,e){return B(()=>{if(t.length!==3)throw new A(`ConvLSTM2DCell expects 3 input Tensors (inputs, h, c), got ${t.length}.`);const s=e.training||!1,r=t[0],o=t[1],i=t[2],a=4;0<this.dropout&&this.dropout<1&&this.dropoutMask==null&&(this.dropoutMask=Us({ones:()=>bn(r),rate:this.dropout,training:s,count:a,dropoutFunc:this.dropoutFunc}));const l=this.dropoutMask,c=(j,K,Y)=>!K||!K[Y]?j:_(K[Y],j);let u=c(r,l,0),h=c(r,l,1),d=c(r,l,2),f=c(r,l,3);0<this.recurrentDropout&&this.recurrentDropout<1&&this.recurrentDropoutMask==null&&(this.recurrentDropoutMask=Us({ones:()=>bn(o),rate:this.recurrentDropout,training:s,count:a,dropoutFunc:this.dropoutFunc}));const p=this.recurrentDropoutMask;let m=c(o,p,0),g=c(o,p,1),x=c(o,p,2),b=c(o,p,3);const w=3,[y,v,$,N]=an(this.kernel.read(),a,w),[T,I,k,C]=this.useBias?an(this.bias.read(),a):[null,null,null,null];u=this.inputConv(u,y,T,this.padding),h=this.inputConv(h,v,I,this.padding),d=this.inputConv(d,$,k,this.padding),f=this.inputConv(f,N,C,this.padding);const[R,D,M,O]=an(this.recurrentKernel.read(),a,w);m=this.recurrentConv(m,R),g=this.recurrentConv(g,D),x=this.recurrentConv(x,M),b=this.recurrentConv(b,O);const z=this.recurrentActivation.apply(J(u,m)),G=this.recurrentActivation.apply(J(h,g)),V=J(_(G,i),_(z,this.activation.apply(J(d,x)))),U=_(this.recurrentActivation.apply(J(f,b)),this.activation.apply(V));return[U,U,V]})}getConfig(){const t=super.getConfig(),{units:e}=t,s=e_(t,["units"]),r={filters:this.filters,kernelSize:this.kernelSize,padding:this.padding,dataFormat:this.dataFormat,dilationRate:this.dilationRate,strides:this.strides};return Object.assign(Object.assign({},s),r)}inputConv(t,e,s,r){const o=$r(t,e,this.strides,r||"valid",this.dataFormat==="channelsFirst"?"NCHW":"NHWC",this.dilationRate);return s?Bn(o,s,this.dataFormat):o}recurrentConv(t,e){return $r(t,e,1,"same",this.dataFormat==="channelsFirst"?"NCHW":"NHWC")}}Fp.className="ConvLSTM2DCell";Z(Fp);class d1 extends h1{constructor(t){const e=new Fp(t);super(Object.assign(Object.assign({},t),{cell:e}))}static fromConfig(t,e){return new t(e)}}d1.className="ConvLSTM2D";Z(d1);class Op extends kt{constructor(t){super(t),this.rate=Math.max(Math.min(t.rate,1),0),this.noiseShape=t.noiseShape,this.seed=t.seed,this.supportsMasking=!0}getNoiseShape(t){if(this.noiseShape==null)return this.noiseShape;const e=t.shape,s=[];for(let r=0;r<this.noiseShape.length;++r)s.push(this.noiseShape[r]==null?e[r]:this.noiseShape[r]);return s}call(t,e){return B(()=>{this.invokeCallHook(t,e);const s=gt(t);if(0<this.rate&&this.rate<1){const r=e.training==null?!1:e.training,o=this.getNoiseShape(s);return Ra(()=>ey(s,this.rate,o,this.seed),()=>s,r)}return t})}getConfig(){const t={rate:this.rate,noiseShape:this.noiseShape,seed:this.seed},e=super.getConfig();return Object.assign(t,e),t}dispose(){return super.dispose()}}Op.className="Dropout";Z(Op);class f1 extends Op{constructor(t){super(t),this.inputSpec=[{ndim:3}]}getNoiseShape(t){const e=t.shape;return[e[0],1,e[2]]}}f1.className="SpatialDropout1D";Z(f1);class p1 extends kt{constructor(t){if(super(t),this.activation=null,this.useBias=!0,this.kernel=null,this.bias=null,this.DEFAULT_KERNEL_INITIALIZER="glorotNormal",this.DEFAULT_BIAS_INITIALIZER="zeros",t.batchInputShape==null&&t.inputShape==null&&t.inputDim!=null){let e=null;t.batchSize!=null&&(e=t.batchSize),this.batchInputShape=[e,t.inputDim]}this.units=t.units,be(this.units,"units"),this.activation=Ws(t.activation),t.useBias!=null&&(this.useBias=t.useBias),this.kernelInitializer=Xt(t.kernelInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.biasInitializer=Xt(t.biasInitializer||this.DEFAULT_BIAS_INITIALIZER),this.kernelConstraint=de(t.kernelConstraint),this.biasConstraint=de(t.biasConstraint),this.kernelRegularizer=Kt(t.kernelRegularizer),this.biasRegularizer=Kt(t.biasRegularizer),this.activityRegularizer=Kt(t.activityRegularizer),this.supportsMasking=!0,this.inputSpec=[{minNDim:2}]}build(t){t=At(t);const e=t[t.length-1];this.kernel==null&&(this.kernel=this.addWeight("kernel",[e,this.units],null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.useBias&&(this.bias=this.addWeight("bias",[this.units],null,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint))),this.inputSpec=[{minNDim:2,axes:{[-1]:e}}],this.built=!0}computeOutputShape(t){t=At(t);const e=t.slice();return e[e.length-1]=this.units,e}call(t,e){return B(()=>{this.invokeCallHook(t,e);const s=gt(t),r=Xb(this.activation.getClassName());let o;return r!=null?o=os(s,this.kernel.read(),r,this.bias?this.bias.read():null):(o=os(s,this.kernel.read()),this.bias!=null&&(o=Bn(o,this.bias.read())),this.activation!=null&&(o=this.activation.apply(o))),o})}getConfig(){const t={units:this.units,activation:Vs(this.activation),useBias:this.useBias,kernelInitializer:Zt(this.kernelInitializer),biasInitializer:Zt(this.biasInitializer),kernelRegularizer:Ut(this.kernelRegularizer),biasRegularizer:Ut(this.biasRegularizer),activityRegularizer:Ut(this.activityRegularizer),kernelConstraint:he(this.kernelConstraint),biasConstraint:he(this.biasConstraint)},e=super.getConfig();return Object.assign(t,e),t}}p1.className="Dense";Z(p1);class m1 extends kt{constructor(t){t=t||{},super(t),this.inputSpec=[{minNDim:3}],this.dataFormat=t.dataFormat}computeOutputShape(t){t=At(t);for(const e of t.slice(1))if(e==null)throw new A(`The shape of the input to "Flatten" is not fully defined (got ${t.slice(1)}). Make sure to pass a complete "input_shape" or "batch_input_shape" argument to the first layer in your model.`);return[t[0],Ps(t,1)]}call(t,e){return B(()=>{this.invokeCallHook(t,e);let s=gt(t);if(this.dataFormat==="channelsFirst"&&s.rank>1){const r=[0];for(let o=2;o<s.rank;++o)r.push(o);r.push(1),s=Tt(s,r)}return _A(s)})}getConfig(){const t={};this.dataFormat!=null&&(t.dataFormat=this.dataFormat);const e=super.getConfig();return Object.assign(t,e),t}}m1.className="Flatten";Z(m1);class g1 extends kt{constructor(t){super(t),this.supportsMasking=!0,this.activation=Ws(t.activation)}call(t,e){return B(()=>{this.invokeCallHook(t,e);const s=gt(t);return this.activation.apply(s)})}getConfig(){const t={activation:Vs(this.activation)},e=super.getConfig();return Object.assign(t,e),t}}g1.className="Activation";Z(g1);class x1 extends kt{constructor(t){super(t),this.n=t.n,this.inputSpec=[{ndim:2}]}computeOutputShape(t){return[t[0],this.n,t[1]]}call(t,e){return B(()=>(t=gt(t),AA(t,this.n)))}getConfig(){const t={n:this.n},e=super.getConfig();return Object.assign(t,e),t}}x1.className="RepeatVector";Z(x1);class b1 extends kt{constructor(t){super(t),this.targetShape=t.targetShape;for(let e=0;e<this.targetShape.length;++e)this.isUnknown(this.targetShape[e])&&(this.targetShape[e]=null)}isUnknown(t){return t<0||t==null}fixUnknownDimension(t,e){const s="Total size of new array must be unchanged.",r=e.slice();let o=1,i=null;for(let l=0;l<r.length;++l){const c=r[l];if(this.isUnknown(c))if(i===null)i=l;else throw new A("Can only specifiy one unknown dimension.");else o*=c}const a=Ps(t);if(i!==null){if(o===0||a%o!==0)throw new A(s);r[i]=a/o}else if(a!==o)throw new A(s);return r}computeOutputShape(t){let e=!1;for(let s=0;s<t.length;++s)if(this.isUnknown(t[s])){e=!0;break}return e?t.slice(0,1).concat(this.targetShape):t.slice(0,1).concat(this.fixUnknownDimension(t.slice(1),this.targetShape))}call(t,e){return B(()=>{this.invokeCallHook(t,e);const s=gt(t),r=s.shape,o=r.slice(0,1).concat(this.fixUnknownDimension(r.slice(1),this.targetShape));return L(s,o)})}getConfig(){const t={targetShape:this.targetShape},e=super.getConfig();return Object.assign(t,e),t}}b1.className="Reshape";Z(b1);class y1 extends kt{constructor(t){if(super(t),t.dims==null)throw new Error("Required configuration field `dims` is missing during Permute constructor call.");if(!Array.isArray(t.dims))throw new Error(`Permute constructor requires \`dims\` to be an Array, but received ${t.dims} instead.`);const e=Mn(1,t.dims.length+1);if(!Mt(t.dims.slice().sort(),e))throw new Error("Invalid permutation `dims`: "+JSON.stringify(t.dims)+" `dims` must contain consecutive integers starting from 1.");this.dims=t.dims,this.dimsIncludingBatch=[0].concat(this.dims),this.inputSpec=[new ue({ndim:this.dims.length+1})]}computeOutputShape(t){t=At(t);const e=t.slice();return this.dims.forEach((s,r)=>{e[r+1]=t[s]}),e}call(t,e){return Tt(gt(t),this.dimsIncludingBatch)}getConfig(){const t={dims:this.dims},e=super.getConfig();return Object.assign(t,e),t}}y1.className="Permute";Z(y1);class w1 extends kt{constructor(t){super(t??{}),this.supportsMasking=!0,t!=null?this.maskValue=t.maskValue==null?0:t.maskValue:this.maskValue=0}computeOutputShape(t){return t}getConfig(){const t=super.getConfig(),e={maskValue:this.maskValue};return Object.assign(e,t),e}computeMask(t,e){const s=gt(t);return Oh(_l(s,this.maskValue),-1)}call(t,e){return B(()=>{this.invokeCallHook(t,e);const s=gt(t),i=Oh(_l(s,this.maskValue),-1,!0);return _(s,rt(i,s.dtype))})}}w1.className="Masking";Z(w1);class v1 extends kt{constructor(t){if(super(t),this.embeddings=null,this.DEFAULT_EMBEDDINGS_INITIALIZER="randomUniform",t.batchInputShape==null&&t.inputShape==null){let e=null;t.batchSize!=null&&(e=t.batchSize),t.inputLength==null?this.batchInputShape=[e,null]:this.batchInputShape=[e].concat(zt(t.inputLength))}this.inputDim=t.inputDim,be(this.inputDim,"inputDim"),this.outputDim=t.outputDim,be(this.outputDim,"outputDim"),this.embeddingsInitializer=Xt(t.embeddingsInitializer||this.DEFAULT_EMBEDDINGS_INITIALIZER),this.embeddingsRegularizer=Kt(t.embeddingsRegularizer),this.activityRegularizer=Kt(t.activityRegularizer),this.embeddingsConstraint=de(t.embeddingsConstraint),this.maskZero=t.maskZero,this.supportsMasking=t.maskZero,this.inputLength=t.inputLength}build(t){this.embeddings=this.addWeight("embeddings",[this.inputDim,this.outputDim],this.dtype,this.embeddingsInitializer,this.embeddingsRegularizer,!0,this.embeddingsConstraint),this.built=!0}warnOnIncompatibleInputShape(t){}computeMask(t,e){return B(()=>this.maskZero?(t=gt(t),_l(t,Et(t))):null)}computeOutputShape(t){if(t=At(t),this.inputLength==null)return[...t,this.outputDim];const e=zt(this.inputLength);if(e.length!==t.length-1)throw new A(`"inputLength" is ${this.inputLength}, but received input shape has shape ${t}`);{let s=0;for(let r=0;r<e.length;++r){const o=e[r],i=t[r+1];if(o!=null&&i!=null&&o!==i)throw new A(`"inputLength" is ${this.inputLength}, but received input shape has shape ${t}`);o==null&&(e[s]=i),s++}}return[t[0],...e,this.outputDim]}call(t,e){return B(()=>{this.invokeCallHook(t,e);let s=gt(t);s.dtype!=="int32"&&(s=rs(s,"int32"));const r=ty(this.embeddings.read(),L(s,[s.size]));return L(r,At(this.computeOutputShape(s.shape)))})}getConfig(){const t={inputDim:this.inputDim,outputDim:this.outputDim,embeddingsInitializer:Zt(this.embeddingsInitializer),embeddingsRegularizer:Ut(this.embeddingsRegularizer),activityRegularizer:Ut(this.activityRegularizer),embeddingsConstraint:he(this.embeddingsConstraint),maskZero:this.maskZero,inputLength:this.inputLength},e=super.getConfig();return Object.assign(t,e),t}}v1.className="Embedding";Z(v1);class zr extends kt{constructor(t){super(t||{}),this.supportsMasking=!0}mergeFunction(t){throw new vt}computeElementwiseOpOutputShape(t,e){if(t==null||e==null)return null;if(t.length<e.length)return this.computeElementwiseOpOutputShape(e,t);if(e.length===0)return t;const s=t.slice(0,t.length-e.length);for(let r=0;r<e.length;++r){const o=t[t.length-e.length+r],i=e[r];if(o==null||i==null||o<0||i<0)s.push(null);else if(o===1)s.push(i);else if(i===1)s.push(o);else{if(o!==i)throw new A("Operands could not be broadcast together with shapes "+JSON.stringify(t)+" "+JSON.stringify(e));s.push(o)}}return s}build(t){if(Array.isArray(t)&&!Array.isArray(t[0])&&(t=[At(t)]),t=t,t.length<2)throw new A(`A merge layer should be called on an Array of at least 2 inputs. Got ${t.length} input(s).`);let e=[];for(const o of t)o!=null&&o[0]!==null&&e.push(o[0]);if(e=Ls(e),e.length>1)throw new A(`Can not merge tensors with different batch sizes. Got tensors with shapes: ${JSON.stringify(t)}.`);let s=t[0]==null?null:t[0].slice(1);for(let o=1;o<t.length;++o){const i=t[o]==null?null:t[o].slice(1);s=this.computeElementwiseOpOutputShape(s,i)}const r=t.map(o=>o.length);t.indexOf(null)===-1&&Ls(r).length===1?this.reshapeRequired=!1:this.reshapeRequired=!0}call(t,e){return B(()=>{if(t=t,this.reshapeRequired){const s=[],r=t.map(o=>o.rank);if(r.indexOf(null)===-1){const o=Bs(r);for(let i of t){const a=i.rank;for(let l=0;l<o-a;++l)i=Ta(i,1);s.push(i)}return this.mergeFunction(s)}else{let o=!1;for(const l of t){const c=l.rank;if(c==null){const u=l.shape,h=u[0],d=u.slice(1).concat([h]);let f=L(l,[h].concat(Ps(u.slice(1))));f=Tt(f,[1,0]),f=L(f,d),s.push(f),o=!0}else if(c>1){const u=Mn(1,c).concat([0]);s.push(Tt(l,u)),o=!0}else s.push(l)}let i=this.mergeFunction(s);const a=i.rank;if(o){if(a==null){const l=i.shape,c=l.length,u=l[c-1],h=[u].concat(l.slice(0,l.length-1));i=L(Tt(L(i,[-1,u]),[1,0]),h)}else if(a>1){const l=[a-1].concat(Mn(0,a-1));i=Tt(i,l)}}return i}}else return this.mergeFunction(t)})}computeOutputShape(t){t=t;let e;t[0]==null?e=null:e=t[0].slice(1);for(let r=1;r<t.length;++r){const o=t[r]==null?null:t[r].slice(1);e=this.computeElementwiseOpOutputShape(e,o)}let s=[];for(const r of t)r!=null&&r[0]!==null&&s.push(r[0]);return s=Ls(s),s.length===1?e=s.concat(e):e=[null].concat(e),e}computeMask(t,e){return B(()=>{if(e==null)return null;if(!Array.isArray(e))throw new A("`mask` should be an Array");if(!Array.isArray(t))throw new A("`inputs` should be an Array");if(e.length!==t.length)throw new A(`The Array 'inputs' and 'mask' are expected to have the same length, but have different lengths (${t.length} vs ${e.length})`);if(e.every(r=>r==null))return null;e=e.map(r=>r==null?r:Ve(r,0));let s=e[0];for(let r=1;r<e.length-1;++r)s=ws(s,e[r]);return s})}}class C1 extends zr{constructor(t){super(t)}mergeFunction(t){return B(()=>{let e=t[0].clone();for(let s=1;s<t.length;++s)e=J(e,t[s]);return e})}}C1.className="Add";Z(C1);class $1 extends zr{constructor(t){super(t)}mergeFunction(t){return B(()=>{let e=t[0].clone();for(let s=1;s<t.length;++s)e=_(e,t[s]);return e})}}$1.className="Multiply";Z($1);class I1 extends zr{constructor(t){super(t)}mergeFunction(t){return B(()=>{let e=t[0].clone();for(let s=1;s<t.length;++s)e=J(e,t[s]);return _(1/t.length,e)})}}I1.className="Average";Z(I1);class k1 extends zr{constructor(t){super(t)}mergeFunction(t){return B(()=>{let e=t[0];for(let s=1;s<t.length;++s)e=Ys(e,t[s]);return e})}}k1.className="Maximum";Z(k1);class S1 extends zr{constructor(t){super(t)}mergeFunction(t){return B(()=>{let e=t[0];for(let s=1;s<t.length;++s)e=ui(e,t[s]);return e})}}S1.className="Minimum";Z(S1);class N1 extends zr{constructor(t){super(t),this.DEFAULT_AXIS=-1,t==null&&(t={}),this.axis=t.axis==null?this.DEFAULT_AXIS:t.axis,this.supportsMasking=!0,this.reshapeRequired=!1}build(t){if(!(Array.isArray(t)&&Array.isArray(t[0]))||t.length===1)throw new A("A `Concatenate` layer should be called on a list of at least 2 inputs");t=t;let e=!0;for(const r of t)if(r!=null){e=!1;break}if(e)return;const s=[];for(let r=0;r<t.length;++r){const o=t[r].slice();o.splice(this.axis,1);let i=!1;for(const a of s)if(Mt(a,o)){i=!0;break}i||s.push(o)}if(s.length>1)throw new A("A `Concatenate` layer requires inputs with matching shapes except for the concat axis. Got input shapes: "+JSON.stringify(t))}mergeFunction(t){return B(()=>xp(t,this.axis))}computeOutputShape(t){if(!(Array.isArray(t)&&Array.isArray(t[0])))throw new A("A `Concatenate` layer should be called on a list of inputs.");const e=t,s=e[0].slice(),r=this.axis<0?s.length+this.axis:this.axis;for(const o of e.slice(1)){if(s[r]==null||o[r]==null){s[r]=null;break}s[r]+=o[r]}return s}computeMask(t,e){if(e==null)return null;if(!Array.isArray(e))throw new A("`mask` should be an array for Concatenate");if(!Array.isArray(t))throw new A("`inputs` should be an array for Concatenate");if(e.length!==t.length)throw new A(`Mismatch in the length of mask (${e.length}) and the legnth of inputs (${t.length})`);return B(()=>{let s=!0;if(e.forEach(i=>{if(i!=null){s=!1;return}}),s)return null;const r=[];for(let i=0;i<t.length;++i)e[i]==null?r.push(rt(bn(t[i]),"bool")):e[i].rank<t[i].rank?r.push(Ve(e[i],-1)):r.push(e[i]);const o=Ue(r,this.axis);return S0(o,-1,!1)})}getConfig(){const t={axis:this.axis},e=super.getConfig();return Object.assign(t,e),t}}N1.className="Concatenate";Z(N1);function jo(n,t){for(;n<0;)n+=t;return n}function n_(n,t,e){if(n.shape.length>3||t.shape.length>3)throw new vt("batchDot is not implemented for tensors of 4D or higher rank yet");if(S(n.shape.length>=2,()=>`batchDot requires the rank of x to be >= 2, but got ${n.shape.length}`),S(n.shape.length>=2,()=>`batchDot requires the rank of y to be >= 2, but got ${t.shape.length}`),typeof e=="number"&&(e=[e,e]),n.dtype==="complex64"||t.dtype==="complex64")throw new vt("batchDot is not implemented for complex64-type Tensors yet.");const s=n.shape.length,r=t.shape.length;e==null&&(e=[s-1,r-2]);const o=e;return B(()=>{let i;if(s>r){i=s-r;const l=[];for(let c=0;c<i;++c)l.push(1);t=L(t,t.shape.concat(l))}else if(r>s){i=r-s;const l=[];for(let c=0;c<i;++c)l.push(1);n=L(n,n.shape.concat(l))}else i=0;let a;if(n.shape.length===2&&t.shape.length===2)o[0]===o[1]?a=dt(_(n,t),o[0]):a=dt(_(Tt(n,[1,0]),t),o[1]);else{const l=o[0]!==n.shape.length-1,c=o[1]===t.shape.length-1;a=Ft(n,t,l,c)}if(i>0){let l;s>r?l=s+r-3:l=s-1;const c=[];for(let u=l;u<l+i;++u)c.push(u);a=Ca(a,c)}return a.shape.length===1&&(a=Ve(a,1)),a})}class T1 extends zr{constructor(t){super(t),this.axes=t.axes,this.normalize=t.normalize==null?!1:t.normalize,this.supportsMasking=!0,this.reshapeRequired=!1}build(t){S(Array.isArray(t)&&t.length===2&&Array.isArray(t[0])&&Array.isArray(t[1]),()=>"A `Dot` layer should be called on a list of exactly 2 inputs.");const e=t[0],s=t[1];if(e.length>3||s.length>3)throw new vt("Dot layer does not support tensors of 4D or higher rank yet.");const r=this.interpretAxes(e,s);if(e[r[0]]!==s[r[1]])throw new A(`Dimension incompatibility: ${e[r[0]]} !== ${s[r[1]]}`)}mergeFunction(t){if(t.length!==2)throw new A(`A \`Dot\` layer must be called on exactly 2 inputs, but received ${t.length} input(s).`);let e=t[0],s=t[1],r;return Array.isArray(this.axes)?r=this.axes.map((o,i)=>jo(o,t[i].shape.length)):r=[jo(this.axes,e.shape.length),jo(this.axes,s.shape.length)],this.normalize&&(e=Bl(e,r[0]),s=Bl(s,r[1])),n_(e,s,r)}interpretAxes(t,e){let s;return Array.isArray(this.axes)?s=this.axes:s=[jo(this.axes,t.length),jo(this.axes,e.length)],s}computeOutputShape(t){S(Array.isArray(t)&&t.length===2&&Array.isArray(t[0])&&Array.isArray(t[1]),()=>"A `Dot` layer should be called on a list of exactly 2 inputs.");const e=t[0].slice(),s=t[1].slice();if(e.length>3||s.length>3)throw new vt("Dot layer does not support tensors of 4D or higher rank yet.");const r=this.interpretAxes(e,s);e.splice(r[0],1),s.splice(r[1],1),s.splice(0,1);const o=e.concat(s);return o.length===1&&o.push(1),o}computeMask(t,e){return null}getConfig(){const t={axes:this.axes,normalize:this.normalize},e=super.getConfig();return Object.assign(t,e),t}}T1.className="Dot";Z(T1);class E1 extends kt{constructor(t){super(t),this.supportsMasking=!0,this.stddev=t.stddev}computeOutputShape(t){return t}getConfig(){const t=super.getConfig(),e={stddev:this.stddev};return Object.assign(e,t),e}call(t,e){return B(()=>{this.invokeCallHook(t,e);const s=gt(t);return Ra(()=>J(ku(s.shape,0,this.stddev),s),()=>s,e.training||!1)})}}E1.className="GaussianNoise";Z(E1);class R1 extends kt{constructor(t){super(t),this.supportsMasking=!0,this.rate=t.rate}computeOutputShape(t){return t}getConfig(){const t=super.getConfig(),e={rate:this.rate};return Object.assign(e,t),e}call(t,e){return B(()=>{this.invokeCallHook(t,e);const s=gt(t);return this.rate>0&&this.rate<1?Ra(()=>{const o=Math.sqrt(this.rate/(1-this.rate));return _(s,ku(s.shape,1,o))},()=>s,e.training||!1):s})}}R1.className="GaussianDropout";Z(R1);class A1 extends kt{constructor(t){super(t),this.supportsMasking=!0,this.rate=t.rate,this.noiseShape=t.noiseShape}_getNoiseShape(t){return this.noiseShape||gt(t).shape}computeOutputShape(t){return t}getConfig(){const t=super.getConfig(),e={rate:this.rate};return Object.assign(e,t),e}call(t,e){return B(()=>{if(this.rate<1&&this.rate>0){const s=this._getNoiseShape(t);return Ra(()=>{const o=gt(t),a=-1.6732632423543772*1.0507009873554805;let l=Or(va(s),this.rate);l=rs(l,"float32");const c=((1-this.rate)*(1+this.rate*a**2))**-.5,u=-c*a*this.rate,h=J(_(o,l),_(J(l,-1),a));return J(_(h,c),u)},()=>gt(t),e.training||!1)}return t})}}A1.className="AlphaDropout";Z(A1);function mi(n,t,e,s,r,o=.001){let i;if(n.rank===2)i=Sk(n,t,e,s,r,o);else if(n.rank===3)i=Tk(n,t,e,s,r,o);else if(n.rank===4)i=Rk(n,t,e,s,r,o);else throw new vt(`batchNormalization is not implemented for array of rank ${n.rank} yet`);return i}function s_(n,t,e,s,r=.001){return B(()=>{const o=If(n,s),i=o.mean,a=o.variance;return[mi(n,i,a,e,t,r),i,a]})}function r_(n,t,e,s,r=.001){return B(()=>{const o=If(n,s),i=o.mean,a=o.variance,l=[];for(const p of Mn(0,n.rank))s.indexOf(p)!==-1?l.push(1):l.push(n.shape[p]);const c=L(i,l),u=L(a,l),h=t==null?null:L(t,l),d=e==null?null:L(e,l);return[mi(n,c,u,d,h,r),i,a]})}function o_(n,t,e,s,r=.001){return Mt(s.slice().sort(),Mn(0,n.rank-1))?s_(n,t,e,s,r):r_(n,t,e,s,r)}class D1 extends kt{constructor(t){t==null&&(t={}),super(t),this.supportsMasking=!0,this.axis=t.axis==null?-1:t.axis,this.momentum=t.momentum==null?.99:t.momentum,this.epsilon=t.epsilon==null?.001:t.epsilon,this.center=t.center==null?!0:t.center,this.scale=t.scale==null?!0:t.scale,this.betaInitializer=Xt(t.betaInitializer||"zeros"),this.gammaInitializer=Xt(t.gammaInitializer||"ones"),this.movingMeanInitializer=Xt(t.movingMeanInitializer||"zeros"),this.movingVarianceInitializer=Xt(t.movingVarianceInitializer||"ones"),this.betaConstraint=de(t.betaConstraint),this.gammaConstraint=de(t.gammaConstraint),this.betaRegularizer=Kt(t.betaRegularizer),this.gammaRegularizer=Kt(t.gammaRegularizer)}build(t){t=At(t);const e=this.axis>=0?this.axis:this.axis+t.length,s=t[e];if(s==null)throw new A(`Axis ${e} of input tensor should have a defined dimension but the layer received an input with shape ${JSON.stringify(t)}.`);this.inputSpec=[new ue({ndim:t.length,axes:{[e]:s}})];const r=[s];this.scale&&(this.gamma=this.addWeight("gamma",r,null,this.gammaInitializer,this.gammaRegularizer,!0,this.gammaConstraint)),this.center&&(this.beta=this.addWeight("beta",r,null,this.betaInitializer,this.betaRegularizer,!0,this.betaConstraint)),this.movingMean=this.addWeight("moving_mean",r,null,this.movingMeanInitializer,null,!1),this.movingVariance=this.addWeight("moving_variance",r,null,this.movingVarianceInitializer,null,!1),this.built=!0}call(t,e){return B(()=>{const s=e.training==null?!1:e.training,r=gt(t),o=r.shape,i=o.length,a=Mn(0,i),l=this.axis>=0?this.axis:this.axis+i;a.splice(l,1);const c=Nr(1,i);c[l]=o[l];const u=a.slice();u.sort();const h=!Mt(u,Mn(0,i).slice(0,i-1)),d=()=>{if(h){const b=L(this.movingMean.read(),c),w=L(this.movingVariance.read(),c),y=this.center?L(this.beta.read(),c):null,v=this.scale?L(this.gamma.read(),c):null;return mi(r,b,w,y,v,this.epsilon)}else return mi(r,this.movingMean.read(),this.movingVariance.read(),this.beta==null?null:this.beta.read(),this.gamma==null?null:this.gamma.read(),this.epsilon)};if(!s)return d();const[f,p,m]=o_(r,this.gamma.read(),this.beta.read(),a,this.epsilon),g=(b,w,y)=>{B(()=>{const v=1-y,$=b.read(),N=_(pt($,w),v);b.write(pt($,N))})};return g(this.movingMean,p,this.momentum),g(this.movingVariance,m,this.momentum),f})}getConfig(){const t={axis:this.axis,momentum:this.momentum,epsilon:this.epsilon,center:this.center,scale:this.scale,betaInitializer:Zt(this.betaInitializer),gammaInitializer:Zt(this.gammaInitializer),movingMeanInitializer:Zt(this.movingMeanInitializer),movingVarianceInitializer:Zt(this.movingVarianceInitializer),betaRegularizer:Ut(this.betaRegularizer),gammaRegularizer:Ut(this.gammaRegularizer),betaConstraint:he(this.betaConstraint),gammaConstraint:he(this.gammaConstraint)},e=super.getConfig();return Object.assign(t,e),t}}D1.className="BatchNormalization";Z(D1);class _1 extends kt{constructor(t){if(t==null&&(t={}),super(t),this.axis=t.axis==null?-1:t.axis,typeof this.axis=="number"){if(!Number.isInteger(this.axis))throw new Error(`Expected axis to be an integer, but received ${this.axis}`)}else if(Array.isArray(this.axis)){for(const e of this.axis)if(!Number.isInteger(e))throw new Error(`Expected axis to be an array of integers, but received ${JSON.stringify(this.axis)}`)}else throw new Error(`Expected axis to be an integer or an array of integers, but received ${JSON.stringify(this.axis)}`);this.epsilon=t.epsilon==null?.001:t.epsilon,this.center=t.center==null?!0:t.center,this.scale=t.scale==null?!0:t.scale,this.betaInitializer=Xt(t.betaInitializer||"zeros"),this.gammaInitializer=Xt(t.gammaInitializer||"ones"),this.betaRegularizer=Kt(t.betaRegularizer),this.gammaRegularizer=Kt(t.gammaRegularizer),this.supportsMasking=!0}build(t){t=At(t);const e=t.length;typeof this.axis=="number"&&(this.axis=[this.axis]);for(let o=0;o<this.axis.length;++o)this.axis[o]<0&&(this.axis[o]+=e);for(const o of this.axis)if(o<0||o>=e)throw new Error(`Invalid axis: ${o}`);if(this.axis.length!==Ls(this.axis).length)throw new Error(`Found duplicate axes in: ${this.axis}`);const s=this.axis.map(o=>t[o]),r=!0;this.scale?this.gamma=this.addWeight("gamma",s,"float32",this.gammaInitializer,this.gammaRegularizer,r):this.gamma=null,this.center?this.beta=this.addWeight("beta",s,"float32",this.betaInitializer,this.betaRegularizer,r):this.beta=null,this.built=!0}call(t,e){const s=gt(t),r=s.shape,o=r.length;return B(()=>{let{mean:a,variance:l}=If(s,this.axis,!0);const c=Nr(1,o);for(const m of this.axis)c[m]=r[m];const u=m=>m!=null&&m.shape.length!==o?L(m,c):m;let h=this.scale?u(this.gamma.read()):null,d=this.center?u(this.beta.read()):null;const f=[],p=[];for(let m=0;m<o;++m)this.axis.indexOf(m)!==-1?(f.push(r[m]),p.push(1)):(f.push(1),p.push(r[m]));return a=Dn(a,f),l=Dn(l,f),h!=null&&(h=Dn(h,p)),d!=null&&(d=Dn(d,p)),mi(s,a,l,d,h,this.epsilon)})}getConfig(){const t={axis:this.axis,epsilon:this.epsilon,center:this.center,scale:this.scale,betaInitializer:Zt(this.betaInitializer),gammaInitializer:Zt(this.gammaInitializer),betaRegularizer:Ut(this.betaRegularizer),gammaRegularizer:Ut(this.gammaRegularizer)},e=super.getConfig();return Object.assign(t,e),t}}_1.className="LayerNormalization";Z(_1);function i_(n,t,e){return B(()=>{if(n.rank!==4)throw new A(`temporalPadding expects input tensor to be 4-D, but received a ${n.rank}-D tensor.`);if(t==null&&(t=[[1,1],[1,1]]),t.length!==2||t[0].length!==2||t[1].length!==2)throw new A("spatial2dPadding expects `padding` to be an Array of two Arrays, each of which is an Array of two integers.");if(e==null&&(e=Ln()),e!=="channelsLast"&&e!=="channelsFirst")throw new A(`Unknown data format: ${e}. Supported data formats are 'channelsLast' and 'channelsFirst.`);let s;return e==="channelsFirst"?s=[[0,0],[0,0],t[0],t[1]]:s=[[0,0],t[0],t[1],[0,0]],kf(n,s)})}class F1 extends kt{constructor(t){if(t==null&&(t={}),super(t),this.dataFormat=t.dataFormat==null?Ln():t.dataFormat,t.padding==null)this.padding=[[1,1],[1,1]];else if(typeof t.padding=="number")this.padding=[[t.padding,t.padding],[t.padding,t.padding]];else{if(t.padding=t.padding,t.padding.length!==2)throw new A(`ZeroPadding2D expects padding to be a length-2 array, but received a length-${t.padding.length} array.`);let e,s;if(typeof t.padding[0]=="number")e=[t.padding[0],t.padding[0]],s=[t.padding[1],t.padding[1]];else{if(t.padding=t.padding,t.padding[0].length!==2)throw new A(`ZeroPadding2D expects height padding to be a length-2 array, but received a length-${t.padding[0].length} array.`);if(e=t.padding[0],t.padding[1].length!==2)throw new A(`ZeroPadding2D expects width padding to be a length-2 array, but received a length-${t.padding[1].length} array.`);s=t.padding[1]}this.padding=[e,s]}this.inputSpec=[new ue({ndim:4})]}computeOutputShape(t){t=At(t);let e,s;return this.dataFormat==="channelsFirst"?(t[2]!=null&&t[2]>=0?e=t[2]+this.padding[0][0]+this.padding[0][1]:e=null,t[3]!=null&&t[3]>=0?s=t[3]+this.padding[1][0]+this.padding[1][1]:s=null,[t[0],t[1],e,s]):(t[1]!=null&&t[1]>=0?e=t[1]+this.padding[0][0]+this.padding[0][1]:e=null,t[2]!=null&&t[2]>=0?s=t[2]+this.padding[1][0]+this.padding[1][1]:s=null,[t[0],e,s,t[3]])}call(t,e){return B(()=>i_(gt(t),this.padding,this.dataFormat))}getConfig(){const t={padding:this.padding,dataFormat:this.dataFormat},e=super.getConfig();return Object.assign(t,e),t}}F1.className="ZeroPadding2D";Z(F1);function _u(n,t,e,s,r,o){return B(()=>{se(r),Yb(o),un(s),e==null&&(e=[1,1]),s==null&&(s="valid"),r==null&&(r=Ln()),o==null&&(o="max"),n=Rp(n,r);let i;const a=s==="same"?"same":"valid";return o==="max"?i=$f(n,t,e,a):i=ff(n,t,e,a),r==="channelsFirst"&&(i=Tt(i,[0,3,1,2])),i})}function O1(n,t,e,s,r,o){return B(()=>{se(r),Yb(o),un(s),e==null&&(e=[1,1,1]),s==null&&(s="valid"),r==null&&(r=Ln()),o==null&&(o="max"),n=Jy(n,r);let i;const a=s==="same"?"same":"valid";return o==="max"?i=p2(n,t,e,a):i=gk(n,t,e,a),r==="channelsFirst"&&(i=Tt(i,[0,4,1,2,3])),i})}class M1 extends kt{constructor(t){if(t.poolSize==null&&(t.poolSize=2),super(t),typeof t.poolSize=="number")this.poolSize=[t.poolSize];else if(Array.isArray(t.poolSize)&&t.poolSize.length===1&&typeof t.poolSize[0]=="number")this.poolSize=t.poolSize;else throw new A(`poolSize for 1D convolutional layer must be a number or an Array of a single number, but received ${JSON.stringify(t.poolSize)}`);if(be(this.poolSize,"poolSize"),t.strides==null)this.strides=this.poolSize;else if(typeof t.strides=="number")this.strides=[t.strides];else if(Array.isArray(t.strides)&&t.strides.length===1&&typeof t.strides[0]=="number")this.strides=t.strides;else throw new A(`strides for 1D convolutional layer must be a number or an Array of a single number, but received ${JSON.stringify(t.strides)}`);be(this.strides,"strides"),this.padding=t.padding==null?"valid":t.padding,un(this.padding),this.inputSpec=[new ue({ndim:3})]}computeOutputShape(t){t=At(t);const e=On(t[1],this.poolSize[0],this.padding,this.strides[0]);return[t[0],e,t[2]]}call(t,e){return B(()=>{this.invokeCallHook(t,e),t=Ta(gt(t),2);const s=this.poolingFunction(gt(t),[this.poolSize[0],1],[this.strides[0],1],this.padding,"channelsLast");return Ca(s,[2])})}getConfig(){const t={poolSize:this.poolSize,padding:this.padding,strides:this.strides},e=super.getConfig();return Object.assign(t,e),t}}class L1 extends M1{constructor(t){super(t)}poolingFunction(t,e,s,r,o){return se(o),un(r),_u(t,e,s,r,o,"max")}}L1.className="MaxPooling1D";Z(L1);class P1 extends M1{constructor(t){super(t)}poolingFunction(t,e,s,r,o){return se(o),un(r),_u(t,e,s,r,o,"avg")}}P1.className="AveragePooling1D";Z(P1);class z1 extends kt{constructor(t){if(t.poolSize==null&&(t.poolSize=[2,2]),super(t),this.poolSize=Array.isArray(t.poolSize)?t.poolSize:[t.poolSize,t.poolSize],t.strides==null)this.strides=this.poolSize;else if(Array.isArray(t.strides)){if(t.strides.length!==2)throw new A(`If the strides property of a 2D pooling layer is an Array, it is expected to have a length of 2, but received length ${t.strides.length}.`);this.strides=t.strides}else this.strides=[t.strides,t.strides];be(this.poolSize,"poolSize"),be(this.strides,"strides"),this.padding=t.padding==null?"valid":t.padding,this.dataFormat=t.dataFormat==null?"channelsLast":t.dataFormat,se(this.dataFormat),un(this.padding),this.inputSpec=[new ue({ndim:4})]}computeOutputShape(t){t=At(t);let e=this.dataFormat==="channelsFirst"?t[2]:t[1],s=this.dataFormat==="channelsFirst"?t[3]:t[2];return e=On(e,this.poolSize[0],this.padding,this.strides[0]),s=On(s,this.poolSize[1],this.padding,this.strides[1]),this.dataFormat==="channelsFirst"?[t[0],t[1],e,s]:[t[0],e,s,t[3]]}call(t,e){return B(()=>(this.invokeCallHook(t,e),this.poolingFunction(gt(t),this.poolSize,this.strides,this.padding,this.dataFormat)))}getConfig(){const t={poolSize:this.poolSize,padding:this.padding,strides:this.strides,dataFormat:this.dataFormat},e=super.getConfig();return Object.assign(t,e),t}}class B1 extends z1{constructor(t){super(t)}poolingFunction(t,e,s,r,o){return se(o),un(r),_u(t,e,s,r,o,"max")}}B1.className="MaxPooling2D";Z(B1);class V1 extends z1{constructor(t){super(t)}poolingFunction(t,e,s,r,o){return se(o),un(r),_u(t,e,s,r,o,"avg")}}V1.className="AveragePooling2D";Z(V1);class W1 extends kt{constructor(t){if(t.poolSize==null&&(t.poolSize=[2,2,2]),super(t),this.poolSize=Array.isArray(t.poolSize)?t.poolSize:[t.poolSize,t.poolSize,t.poolSize],t.strides==null)this.strides=this.poolSize;else if(Array.isArray(t.strides)){if(t.strides.length!==3)throw new A(`If the strides property of a 3D pooling layer is an Array, it is expected to have a length of 3, but received length ${t.strides.length}.`);this.strides=t.strides}else this.strides=[t.strides,t.strides,t.strides];be(this.poolSize,"poolSize"),be(this.strides,"strides"),this.padding=t.padding==null?"valid":t.padding,this.dataFormat=t.dataFormat==null?"channelsLast":t.dataFormat,se(this.dataFormat),un(this.padding),this.inputSpec=[new ue({ndim:5})]}computeOutputShape(t){t=At(t);let e=this.dataFormat==="channelsFirst"?t[2]:t[1],s=this.dataFormat==="channelsFirst"?t[3]:t[2],r=this.dataFormat==="channelsFirst"?t[4]:t[3];return e=On(e,this.poolSize[0],this.padding,this.strides[0]),s=On(s,this.poolSize[1],this.padding,this.strides[1]),r=On(r,this.poolSize[2],this.padding,this.strides[2]),this.dataFormat==="channelsFirst"?[t[0],t[1],e,s,r]:[t[0],e,s,r,t[4]]}call(t,e){return B(()=>(this.invokeCallHook(t,e),this.poolingFunction(gt(t),this.poolSize,this.strides,this.padding,this.dataFormat)))}getConfig(){const t={poolSize:this.poolSize,padding:this.padding,strides:this.strides,dataFormat:this.dataFormat},e=super.getConfig();return Object.assign(t,e),t}}class U1 extends W1{constructor(t){super(t)}poolingFunction(t,e,s,r,o){return se(o),un(r),O1(t,e,s,r,o,"max")}}U1.className="MaxPooling3D";Z(U1);class G1 extends W1{constructor(t){super(t)}poolingFunction(t,e,s,r,o){return se(o),un(r),O1(t,e,s,r,o,"avg")}}G1.className="AveragePooling3D";Z(G1);class H1 extends kt{constructor(t){super(t),this.inputSpec=[new ue({ndim:3})]}computeOutputShape(t){return[t[0],t[2]]}call(t,e){throw new vt}}class q1 extends H1{constructor(t){super(t||{})}call(t,e){return B(()=>{const s=gt(t);return ie(s,1)})}}q1.className="GlobalAveragePooling1D";Z(q1);class j1 extends H1{constructor(t){super(t||{})}call(t,e){return B(()=>{const s=gt(t);return Fn(s,1)})}}j1.className="GlobalMaxPooling1D";Z(j1);class X1 extends kt{constructor(t){super(t),this.dataFormat=t.dataFormat==null?"channelsLast":t.dataFormat,se(this.dataFormat),this.inputSpec=[new ue({ndim:4})]}computeOutputShape(t){return t=t,this.dataFormat==="channelsLast"?[t[0],t[3]]:[t[0],t[1]]}call(t,e){throw new vt}getConfig(){const t={dataFormat:this.dataFormat},e=super.getConfig();return Object.assign(t,e),t}}class K1 extends X1{call(t,e){return B(()=>{const s=gt(t);return this.dataFormat==="channelsLast"?ie(s,[1,2]):ie(s,[2,3])})}}K1.className="GlobalAveragePooling2D";Z(K1);class Y1 extends X1{call(t,e){return B(()=>{const s=gt(t);return this.dataFormat==="channelsLast"?Fn(s,[1,2]):Fn(s,[2,3])})}}Y1.className="GlobalMaxPooling2D";Z(Y1);class Z1 extends kt{constructor(t){super(t),this.layer=t.layer}build(t){this.built=!0}get trainable(){return this.layer!=null?this.layer.trainable:!1}set trainable(t){this.layer!=null&&(this.layer.trainable=t)}get trainableWeights(){return this.layer.trainableWeights}get nonTrainableWeights(){return this.layer.nonTrainableWeights}get updates(){return this.layer._updates}get losses(){return this.layer.losses}getWeights(){return this.layer.getWeights()}setWeights(t){this.layer.setWeights(t)}getConfig(){const t={layer:{className:this.layer.getClassName(),config:this.layer.getConfig()}},e=super.getConfig();return Object.assign(t,e),t}setFastWeightInitDuringBuild(t){super.setFastWeightInitDuringBuild(t),this.layer!=null&&this.layer.setFastWeightInitDuringBuild(t)}static fromConfig(t,e,s={}){const r=e.layer,o=is(r,s);delete e.layer;const i={layer:o};return Object.assign(i,e),new t(i)}}class J1 extends Z1{constructor(t){super(t),this.supportsMasking=!0}build(t){if(t=At(t),t.length<3)throw new A(`TimeDistributed layer expects an input shape >= 3D, but received input shape ${JSON.stringify(t)}`);this.inputSpec=[{shape:t}];const e=[t[0]].concat(t.slice(2));this.layer.built||(this.layer.build(e),this.layer.built=!0),super.build(t)}computeOutputShape(t){t=At(t);const e=[t[0]].concat(t.slice(2)),s=this.layer.computeOutputShape(e),r=t[1];return[s[0],r].concat(s.slice(1))}call(t,e){return B(()=>(t=gt(t),a1((i,a)=>[gt(this.layer.call(i,e)),[]],t,[],!1,null,null,!1,!0)[1]))}}J1.className="TimeDistributed";Z(J1);function a_(n){Pr(SA,"BidirectionalMergeMode",n)}const l_="concat";class Q1 extends Z1{constructor(t){super(t);const e=t.layer.getConfig(),s={};s.className=t.layer.getClassName(),s.config=e,this.forwardLayer=is(s),e.goBackwards=e.goBackwards!==!0;const r={};if(r.className=t.layer.getClassName(),r.config=e,this.backwardLayer=is(r),this.forwardLayer.name="forward_"+this.forwardLayer.name,this.backwardLayer.name="backward_"+this.backwardLayer.name,this.mergeMode=t.mergeMode===void 0?l_:t.mergeMode,a_(this.mergeMode),t.weights)throw new vt("weights support is not implemented for Bidirectional layer yet.");this._stateful=t.layer.stateful,this.returnSequences=t.layer.returnSequences,this.returnState=t.layer.returnState,this.supportsMasking=!0,this._trainable=!0,this.inputSpec=t.layer.inputSpec,this.numConstants=null}get trainable(){return this._trainable}set trainable(t){this._trainable=t,this.forwardLayer!=null&&(this.forwardLayer.trainable=t),this.backwardLayer!=null&&(this.backwardLayer.trainable=t)}getWeights(){return this.forwardLayer.getWeights().concat(this.backwardLayer.getWeights())}setWeights(t){const e=t.length,s=Math.floor(e/2);this.forwardLayer.setWeights(t.slice(0,s)),this.backwardLayer.setWeights(t.slice(s))}computeOutputShape(t){let e=this.forwardLayer.computeOutputShape(t);Array.isArray(e)&&Array.isArray(e[0])||(e=[e]),e=e;let s,r,o;return this.returnState&&(o=e.slice(1)),s=e[0],s=s,this.mergeMode==="concat"?(s[s.length-1]*=2,r=[s]):this.mergeMode==null?r=[s,s.slice()]:r=[s],this.returnState?this.mergeMode==null?r.concat(o).concat(o.slice()):[s].concat(o).concat(o.slice()):We(r)}apply(t,e){let s=e==null?null:e.initialState,r=e==null?null:e.constants;e==null&&(e={});const o=i1(t,s,r,this.numConstants);if(t=o.inputs,s=o.initialState,r=o.constants,Array.isArray(t)&&(s=t.slice(1),t=t[0]),(s==null||s.length===0)&&r==null)return super.apply(t,e);const i=[],a=[];if(s!=null){const c=s.length;if(c%2>0)throw new A("When passing `initialState` to a Bidrectional RNN, the state should be an Array containing the states of the underlying RNNs.");e.initialState=s,i.push(...s);const u=s.map(h=>new ue({shape:h.shape}));this.forwardLayer.stateSpec=u.slice(0,c/2),this.backwardLayer.stateSpec=u.slice(c/2),a.push(...u)}if(r!=null)throw new vt("Support for constants in Bidirectional layers is not implemented yet.");const l=i[0]instanceof hs;for(const c of i)if(c instanceof hs!==l)throw new A("The initial state of a Bidirectional layer cannot be specified as a mix of symbolic and non-symbolic tensors");if(l){const c=[t].concat(i),u=this.inputSpec.concat(a),h=this.inputSpec;this.inputSpec=u;const d=super.apply(c,e);return this.inputSpec=h,d}else return super.apply(t,e)}call(t,e){return B(()=>{const s=e.initialState;let r,o;if(s==null)r=this.forwardLayer.call(t,e),o=this.backwardLayer.call(t,e);else{const l=s.slice(0,s.length/2),c=s.slice(s.length/2);r=this.forwardLayer.call(t,Object.assign(e,{initialState:l})),o=this.backwardLayer.call(t,Object.assign(e,{initialState:c}))}let i;this.returnState&&(Array.isArray(r)&&(i=r.slice(1).concat(o.slice(1))),r=r[0],o=o[0]),this.returnSequences&&(o=kr(o,1));let a;return this.mergeMode==="concat"?a=xp([r,o]):this.mergeMode==="sum"?a=J(r,o):this.mergeMode==="ave"?a=_(.5,J(r,o)):this.mergeMode==="mul"?a=_(r,o):this.mergeMode==null&&(a=[r,o]),this.returnState?this.mergeMode==null?a.concat(i):[a].concat(i):a})}resetStates(t){this.forwardLayer.resetStates(),this.backwardLayer.resetStates()}build(t){fr(this.forwardLayer.name,()=>{this.forwardLayer.build(t)}),fr(this.backwardLayer.name,()=>{this.backwardLayer.build(t)}),this.built=!0}computeMask(t,e){Array.isArray(e)&&(e=e[0]);let s;if(this.returnSequences?this.mergeMode==null?s=[e,e]:s=e:this.mergeMode==null?s=[null,null]:s=null,this.returnState){const o=this.forwardLayer.states.map(i=>null);return Array.isArray(s)?s.concat(o).concat(o):[s].concat(o).concat(o)}else return s}get trainableWeights(){return this.forwardLayer.trainableWeights.concat(this.backwardLayer.trainableWeights)}get nonTrainableWeights(){return this.forwardLayer.nonTrainableWeights.concat(this.backwardLayer.nonTrainableWeights)}setFastWeightInitDuringBuild(t){super.setFastWeightInitDuringBuild(t),this.forwardLayer!=null&&this.forwardLayer.setFastWeightInitDuringBuild(t),this.backwardLayer!=null&&this.backwardLayer.setFastWeightInitDuringBuild(t)}getConfig(){const t={mergeMode:this.mergeMode},e=super.getConfig();return Object.assign(t,e),t}static fromConfig(t,e){const s=is(e.layer);if(delete e.layer,e.numConstants!=null)throw new vt("Deserialization of a Bidirectional layer with numConstants present is not supported yet.");const r=e;return r.layer=s,new t(r)}}Q1.className="Bidirectional";Z(Q1);class tw extends kt{constructor(t){super(t),this.scale=t.scale,t.offset?this.offset=t.offset:this.offset=0}getConfig(){const t={scale:this.scale,offset:this.offset},e=super.getConfig();return Object.assign(t,e),t}call(t,e){return B(()=>(t=gt(t),t.dtype!=="float32"&&(t=rs(t,"float32")),J(_(t,this.scale),this.offset)))}}tw.className="Rescaling";Z(tw);const{resizeBilinear:c_,cropAndResize:u_}=ys;class ew extends kt{constructor(t){super(t),this.height=t.height,this.width=t.width}centerCrop(t,e,s,r,o,i,a,l){return B(()=>{let c,u=!1;const h=e/i,d=s/a,f=(r+e)/i,p=(o+s)/a,m=[h,d,f,p],g=[];t.rank===3?(u=!0,c=vs([t])):c=t;for(let v=0;v<c.shape[0];v++)g.push(m);const x=no(g,[g.length,4]),b=hi(0,g.length,1,"int32"),y=u_(c,x,b,[r,o],"nearest");return rs(u?gt(Sr(y)):y,l)})}upsize(t,e,s,r){return B(()=>{const o=c_(t,[e,s]);return rs(o,r)})}call(t,e){return B(()=>{const s=gt(t),r=s.dtype,o=s.shape,i=o[o.length-3],a=o[o.length-2];let l=0;i!==this.height&&(l=Math.floor((i-this.height)/2));let c=0;return a!==this.width&&(c=Math.floor((a-this.width)/2),c===0&&(c=1)),l>=0&&c>=0?this.centerCrop(s,l,c,this.height,this.width,i,a,r):this.upsize(t,this.height,this.width,r)})}getConfig(){const t={height:this.height,width:this.width},e=super.getConfig();return Object.assign(t,e),t}computeOutputShape(t){t=At(t);const e=t.length-3,s=t.length-2;return t[e]=this.height,t[s]=this.width,t}}ew.className="CenterCrop";Z(ew);function h_(n,t,e,s){let r=gt(n);if(r.dtype!=="int32"&&(r=rs(r,"int32")),t==="int")return r;const o=r.shape;if(r.rank===0&&(r=Ve(r,-1)),t==="oneHot"&&r.shape[r.shape.length-1]!==1&&(r=Ve(r,-1)),r.rank>2)throw new A(`When outputMode is not int, maximum output rank is 2 Received outputMode ${t} and input shape ${o} which would result in output rank ${r.rank}.`);const i=["multiHot","oneHot"].includes(t),a=r;let l;if(typeof s<"u"&&t==="count"?l=Tm(a,s,e,i):l=Tm(a,[],e,i),t!=="tfIdf")return l;if(s)return _(l,s);throw new A("When outputMode is 'tfIdf', weights must be provided.")}class nw extends kt{constructor(t){super(t),this.numTokens=t.numTokens,t.outputMode?this.outputMode=t.outputMode:this.outputMode="multiHot"}getConfig(){const t={numTokens:this.numTokens,outputMode:this.outputMode},e=super.getConfig();return Object.assign(t,e),t}computeOutputShape(t){return t=At(t),t==null?[this.numTokens]:this.outputMode==="oneHot"&&t[t.length-1]!==1?(t.push(this.numTokens),t):(t[t.length-1]=this.numTokens,t)}call(t,e){return B(()=>{t=gt(t),t.dtype!=="int32"&&(t=rs(t,"int32"));let s;if(typeof e.countWeights<"u"){if(this.outputMode!=="count")throw new A(`countWeights is not used when outputMode !== count.
              Received countWeights=${e.countWeights}`);s=gt(e.countWeights)}const r=Fn(t),o=Al(t),i=cn(this.numTokens,r).bufferSync().get(0),a=Or(o,0).bufferSync().get(0);if(!(i&&a))throw new A(`Input values must be between 0 < values <= numTokens with numTokens=${this.numTokens}`);return h_(t,this.outputMode,this.numTokens,s)})}}nw.className="CategoryEncoding";Z(nw);const d_=["bilinear","nearest"],xg=new Set(d_);class sw extends kt{constructor(t){if(super(t),this.height=t.height,this.width=t.width,t.interpolation)if(xg.has(t.interpolation))this.interpolation=t.interpolation;else throw new A(`Invalid interpolation parameter: ${t.interpolation} is not implemented`);else this.interpolation="bilinear";this.cropToAspectRatio=!!t.cropToAspectRatio}computeOutputShape(t){t=At(t);const e=t[2];return[this.height,this.width,e]}getConfig(){const t={height:this.height,width:this.width,interpolation:this.interpolation,cropToAspectRatio:this.cropToAspectRatio},e=super.getConfig();return Object.assign(t,e),t}call(t,e){return B(()=>{const s=[this.height,this.width];if(this.interpolation==="bilinear")return ys.resizeBilinear(t,s,!this.cropToAspectRatio);if(this.interpolation==="nearest")return ys.resizeNearestNeighbor(t,s,!this.cropToAspectRatio);throw new Error(`Interpolation is ${this.interpolation} but only ${[...xg]} are supported`)})}}sw.className="Resizing";Z(sw);class rw{constructor(t){this.seed=t}next(){if(this.seed!==void 0)return this.seed++}}rw.className="RandomSeed";class ow extends kt{constructor(t){super(t),this.randomGenerator=new rw(t.seed)}getConfig(){const t={seed:this.randomGenerator.seed},e=super.getConfig();return Object.assign(t,e),t}}ow.className="BaseRandomLayer";const f_=["bilinear","nearest"],bg=new Set(f_);class iw extends ow{constructor(t){super(t);const{factor:e,interpolation:s="bilinear"}=t;if(this.factor=e,Array.isArray(this.factor)&&this.factor.length===2)this.widthLower=this.factor[0],this.widthUpper=this.factor[1];else if(!Array.isArray(this.factor)&&this.factor>0)this.widthLower=-this.factor,this.widthUpper=this.factor;else throw new A(`Invalid factor: ${this.factor}. Must be positive number or tuple of 2 numbers`);if(this.widthLower<-1||this.widthUpper<-1)throw new A(`factor must have values larger than -1. Got: ${this.factor}`);if(this.widthUpper<this.widthLower)throw new A(`factor cannot have upper bound less than lower bound.
        Got upper bound: ${this.widthUpper}.
        Got lower bound: ${this.widthLower}
      `);if(s)if(bg.has(s))this.interpolation=s;else throw new A(`Invalid interpolation parameter: ${s} is not implemented`)}getConfig(){const t={factor:this.factor,interpolation:this.interpolation},e=super.getConfig();return Object.assign(t,e),t}computeOutputShape(t){t=At(t);const e=t[2];return[this.imgHeight,-1,e]}call(t,e){return B(()=>{const s=gt(t);this.imgHeight=s.shape[s.shape.length-3];const r=s.shape[s.shape.length-2];this.widthFactor=va([1],1+this.widthLower,1+this.widthUpper,"float32",this.randomGenerator.next());let o=this.widthFactor.dataSync()[0]*r;o=Math.round(o);const i=[this.imgHeight,o];switch(this.interpolation){case"bilinear":return ys.resizeBilinear(t,i);case"nearest":return ys.resizeNearestNeighbor(t,i);default:throw new Error(`Interpolation is ${this.interpolation}
          but only ${[...bg]} are supported`)}})}}iw.className="RandomWidth";Z(iw);const p_=W();p_.registerFlag("KEEP_INTERMEDIATE_TENSORS",()=>!1,n=>{n&&console.warn("Keep intermediate tensors is ON. This will print the values of all intermediate tensors during model inference. Not all models support this mode. For details, check e2e/benchmarks/ model_config.js. This significantly impacts performance.")});var yg;(function(n){n[n.DT_INVALID=0]="DT_INVALID",n[n.DT_FLOAT=1]="DT_FLOAT",n[n.DT_DOUBLE=2]="DT_DOUBLE",n[n.DT_INT32=3]="DT_INT32",n[n.DT_UINT8=4]="DT_UINT8",n[n.DT_INT16=5]="DT_INT16",n[n.DT_INT8=6]="DT_INT8",n[n.DT_STRING=7]="DT_STRING",n[n.DT_COMPLEX64=8]="DT_COMPLEX64",n[n.DT_INT64=9]="DT_INT64",n[n.DT_BOOL=10]="DT_BOOL",n[n.DT_QINT8=11]="DT_QINT8",n[n.DT_QUINT8=12]="DT_QUINT8",n[n.DT_QINT32=13]="DT_QINT32",n[n.DT_BFLOAT16=14]="DT_BFLOAT16",n[n.DT_QINT16=15]="DT_QINT16",n[n.DT_QUINT16=16]="DT_QUINT16",n[n.DT_UINT16=17]="DT_UINT16",n[n.DT_COMPLEX128=18]="DT_COMPLEX128",n[n.DT_HALF=19]="DT_HALF",n[n.DT_RESOURCE=20]="DT_RESOURCE",n[n.DT_VARIANT=21]="DT_VARIANT",n[n.DT_UINT32=22]="DT_UINT32",n[n.DT_UINT64=23]="DT_UINT64",n[n.DT_FLOAT_REF=101]="DT_FLOAT_REF",n[n.DT_DOUBLE_REF=102]="DT_DOUBLE_REF",n[n.DT_INT32_REF=103]="DT_INT32_REF",n[n.DT_UINT8_REF=104]="DT_UINT8_REF",n[n.DT_INT16_REF=105]="DT_INT16_REF",n[n.DT_INT8_REF=106]="DT_INT8_REF",n[n.DT_STRING_REF=107]="DT_STRING_REF",n[n.DT_COMPLEX64_REF=108]="DT_COMPLEX64_REF",n[n.DT_INT64_REF=109]="DT_INT64_REF",n[n.DT_BOOL_REF=110]="DT_BOOL_REF",n[n.DT_QINT8_REF=111]="DT_QINT8_REF",n[n.DT_QUINT8_REF=112]="DT_QUINT8_REF",n[n.DT_QINT32_REF=113]="DT_QINT32_REF",n[n.DT_BFLOAT16_REF=114]="DT_BFLOAT16_REF",n[n.DT_QINT16_REF=115]="DT_QINT16_REF",n[n.DT_QUINT16_REF=116]="DT_QUINT16_REF",n[n.DT_UINT16_REF=117]="DT_UINT16_REF",n[n.DT_COMPLEX128_REF=118]="DT_COMPLEX128_REF",n[n.DT_HALF_REF=119]="DT_HALF_REF",n[n.DT_RESOURCE_REF=120]="DT_RESOURCE_REF",n[n.DT_VARIANT_REF=121]="DT_VARIANT_REF",n[n.DT_UINT32_REF=122]="DT_UINT32_REF",n[n.DT_UINT64_REF=123]="DT_UINT64_REF"})(yg||(yg={}));var wg;(function(n){(function(t){t[t.LEGACY=0]="LEGACY",t[t.V1=1]="V1",t[t.V2=2]="V2"})(n.CheckpointFormatVersion||(n.CheckpointFormatVersion={}))})(wg||(wg={}));var vg;(function(n){n[n.FAIL=0]="FAIL",n[n.SHORTEST=1]="SHORTEST",n[n.LONGEST=2]="LONGEST"})(vg||(vg={}));function at(n,t){Array.isArray(n)||(n=[n]),n.forEach(e=>{e!=null&&S(e.dtype!=="complex64",()=>`${t} does not support complex64 tensors in the CPU backend.`)})}const m_=tb;class Fu extends md{nextDataId(){return Fu.nextDataId++}constructor(){super(),this.blockSize=48,this.firstUse=!0,this.data=new Sx(this,jn())}write(t,e,s){this.firstUse&&(this.firstUse=!1,W().get("IS_NODE")&&rn(`
============================
Hi, looks like you are running TensorFlow.js in Node.js. To speed things up dramatically, install our node backend, visit https://github.com/tensorflow/tfjs-node for more details. 
============================`));const r={id:this.nextDataId()};return this.data.set(r,{values:t,dtype:s,refCount:1}),r}makeTensorInfo(t,e,s){let r;if(e==="string"&&s!=null&&s.length>0&&$i(s[0])){const o=s.map(i=>Ms(i));r=this.write(o,t,e)}else r=this.write(s,t,e);return{dataId:r,shape:t,dtype:e}}refCount(t){return this.data.has(t)?this.data.get(t).refCount:0}incRef(t){const e=this.data.get(t);e.refCount++}decRef(t){if(this.data.has(t)){const e=this.data.get(t);e.refCount--}}move(t,e,s,r,o){this.data.set(t,{values:e,dtype:r,refCount:o})}numDataIds(){return this.data.numDataIds()}async read(t){return this.readSync(t)}readSync(t){const{dtype:e,complexTensorInfos:s}=this.data.get(t);if(e==="complex64"){const r=this.readSync(s.real.dataId),o=this.readSync(s.imag.dataId);return Cs(r,o)}return b$(this.data.get(t).values,e)}bufferSync(t){const e=this.readSync(t.dataId);if(t.dtype==="string")try{const s=e.map(r=>zs(r));return $t(t.shape,t.dtype,s)}catch{throw new Error("Failed to decode encoded string bytes into utf-8")}return $t(t.shape,t.dtype,e)}makeOutput(t,e,s){return jn().makeTensorFromTensorInfo(this.makeTensorInfo(e,s,t),this)}disposeData(t,e=!1){if(this.data.has(t)){if(this.data.get(t).refCount--,!e&&this.data.get(t).refCount>0)return!1;const{complexTensorInfos:s}=this.data.get(t);s!=null&&(this.disposeData(s.real.dataId,!0),this.disposeData(s.imag.dataId,!0)),this.data.delete(t)}return!0}disposeIntermediateTensorInfo(t){this.disposeData(t.dataId)}async time(t){const e=Be();return t(),{kernelMs:Be()-e}}memory(){return{unreliable:!0,reasons:["The reported memory is an upper bound. Due to automatic garbage collection, the true allocated memory may be less."]}}where(t){at([t],"where");const e=this.readSync(t.dataId);return m_(t.shape,e)}dispose(){}floatPrecision(){return 32}epsilon(){return super.epsilon()}}Fu.nextDataId=0;function aw(n){const t=new Float32Array(n.length);for(let e=0;e<n.length;++e)t[e]=Math.abs(n[e]);return t}const g_=n=>{const{x:t}=n.inputs,e=n.backend;at(t,"abs");let s=new Float32Array(q(t.shape));const r=e.data.get(t.dataId).values;return s=aw(r),e.makeOutput(s,t.shape,t.dtype)},x_={kernelName:hc,backendName:"cpu",kernelFunc:g_};function re(n){return(t,e,s,r,o)=>{const i=yt(t,e),a=i.length,l=ut(i),c=q(i),u=ke(o,c),h=t.length,d=e.length,f=ut(t),p=ut(e),m=uo(t,i),g=uo(e,i);if(m.length+g.length===0)for(let x=0;x<u.length;++x)u[x]=n(s[x%s.length],r[x%r.length]);else for(let x=0;x<u.length;++x){const b=$o(x,a,l),w=b.slice(-h);m.forEach(N=>w[N]=0);const y=es(w,h,f),v=b.slice(-d);g.forEach(N=>v[N]=0);const $=es(v,d,p);u[x]=n(s[y],r[$])}return[u,i]}}function Ye(n){const{inputs:t,backend:e}=n,{real:s,imag:r}=t,o=e.data.get(s.dataId).values,i=e.data.get(r.dataId).values,a=e.makeTensorInfo(s.shape,"complex64"),l=e.data.get(a.dataId);return l.complexTensorInfos={real:e.makeTensorInfo(s.shape,"float32",o),imag:e.makeTensorInfo(r.shape,"float32",i)},a}const b_={kernelName:Td,backendName:"cpu",kernelFunc:Ye};function ql(n,t,e="float32"){if(e==="complex64"){const r=ql(n,t,"float32"),o=ql(n,t,"float32");return Ye({inputs:{real:r,imag:o},backend:n})}const s=Se(q(t),e);return n.makeTensorInfo(t,e,s)}function ds(n){const{inputs:t,backend:e}=n,{x:s}=t;return e.incRef(s.dataId),{dataId:s.dataId,shape:s.shape,dtype:s.dtype}}const y_={kernelName:Gi,backendName:"cpu",kernelFunc:ds};function Tr(n){const{inputs:t,backend:e}=n,{input:s}=t,r=e.data.get(s.dataId).complexTensorInfos.real,o=e.data.get(r.dataId).values;return e.makeTensorInfo(r.shape,r.dtype,o)}const w_={kernelName:Jd,backendName:"cpu",kernelFunc:Tr};function lw(n,t,e,s){if(s==="int32"){const r=Int32Array.from(n);return[t,"int32",r]}if(s==="bool"){const r=Fr([0],e),[o,i]=re((a,l)=>a!==l?1:0)(t,[],n,r,"bool");return[i,"bool",o]}throw new Error(`Error in Cast: failed to cast ${e} to ${s}`)}function Gs(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{dtype:o}=s;if(o==="complex64"){if(r.dtype==="complex64")return ds({inputs:{x:r},backend:e});const u=ql(e,r.shape,r.dtype),h=Gs({inputs:{x:r},backend:e,attrs:{dtype:"float32"}}),d=Ye({inputs:{real:h,imag:u},backend:e});return e.disposeIntermediateTensorInfo(u),e.disposeIntermediateTensorInfo(h),d}if(r.dtype==="complex64"){const u=Tr({inputs:{input:r},backend:e}),h=Gs({inputs:{x:u},backend:e,attrs:{dtype:o}});return e.disposeIntermediateTensorInfo(u),h}if(!Ex(r.dtype,o)){const u=ds({inputs:{x:r},backend:e});return{dataId:u.dataId,shape:u.shape,dtype:o}}const i=e.data.get(r.dataId).values,[a,l,c]=lw(i,r.shape,r.dtype,o);return e.makeTensorInfo(a,l,c)}const v_={kernelName:Ai,backendName:"cpu",kernelFunc:Gs};function pe(n,t,e,s){return e==null?({inputs:r,backend:o})=>{const{a:i,b:a}=r,l=o;at([i,a],n);const c=l.data.get(i.dataId).values,u=l.data.get(a.dataId).values,h=i.dtype==="string"?$s(c):c,d=i.dtype==="string"?$s(u):u,f=s||i.dtype,[p,m]=t(i.shape,a.shape,h,d,f);return l.makeTensorInfo(m,f,p)}:({inputs:r,backend:o})=>{const{a:i,b:a}=r,l=o;if(i.dtype==="complex64"||a.dtype==="complex64"){const c=Gs({inputs:{x:i},backend:l,attrs:{dtype:"complex64"}}),u=l.data.get(c.dataId),h=u.complexTensorInfos.real,d=u.complexTensorInfos.imag,f=l.data.get(h.dataId).values,p=l.data.get(d.dataId).values,m=Gs({inputs:{x:a},backend:l,attrs:{dtype:"complex64"}}),g=l.data.get(m.dataId),x=g.complexTensorInfos.real,b=g.complexTensorInfos.imag,w=l.data.get(x.dataId).values,y=l.data.get(b.dataId).values,[v,$,N]=e(i.shape,a.shape,f,p,w,y),T=l.makeTensorInfo(N,"float32",v),I=l.makeTensorInfo(N,"float32",$),k=Ye({inputs:{real:T,imag:I},backend:l});return l.disposeIntermediateTensorInfo(c),l.disposeIntermediateTensorInfo(m),l.disposeIntermediateTensorInfo(T),l.disposeIntermediateTensorInfo(I),k}else{const c=l.data.get(i.dataId).values,u=l.data.get(a.dataId).values,h=s||i.dtype,[d,f]=t(i.shape,a.shape,c,u,h);return l.makeTensorInfo(f,h,d)}}}function Mp(n){return(t,e,s,r,o,i)=>{const a=yt(t,e),l=q(a),c=a.length,u=ut(a),h=ke("float32",l),d=ke("float32",l),f=uo(t,a),p=uo(e,a),m=Cs(s,r),g=Cs(o,i),x=t.length,b=ut(t),w=e.length,y=ut(e);if(f.length+p.length===0)for(let v=0;v<h.length;v++){const $=v%m.length,N=v%g.length,T=n(m[$*2],m[$*2+1],g[N*2],g[N*2+1]);h[v]=T.real,d[v]=T.imag}else for(let v=0;v<h.length;v++){const $=$o(v,c,u),N=$.slice(-x);f.forEach(R=>N[R]=0);const T=es(N,x,b),I=$.slice(-w);p.forEach(R=>I[R]=0);const k=es(I,w,y),C=n(m[T*2],m[T*2+1],g[k*2],g[k*2+1]);h[v]=C.real,d[v]=C.imag}return[h,d,a]}}const cw=re(((n,t)=>n+t)),C_=Mp(((n,t,e,s)=>({real:n+e,imag:t+s}))),po=pe(Io,cw,C_),$_={kernelName:Io,backendName:"cpu",kernelFunc:po};function Lp(n,t,e,s,r){const o=q(s),i=Se(r,e);for(let a=0;a<n.length;a++){const l=n[a];if(l<0)throw new Error("Input x must be non-negative!");l>=r||(o>0?i[l]+=t[a]:i[l]+=1)}return i}function uw(n,t,e,s=!1){const r=n.shape[0],o=n.shape[1],i=$t([r,e],t.dtype);for(let a=0;a<r;a++)for(let l=0;l<o;l++){const c=n.get(a,l);if(c<0)throw new Error("Input x must be non-negative!");c>=e||(s?i.set(1,a,c):t.size>0?i.set(i.get(a,c)+t.get(a,l),a,c):i.set(i.get(a,c)+1,a,c))}return i}const hw=re(((n,t)=>n&t)),I_=pe(Nd,hw),k_={kernelName:Nd,backendName:"cpu",kernelFunc:I_};function fs(n){return(t,e,s)=>{const r=Qt(e,t.length);for(let o=0;o<t.length;++o)r[o]=n(t[o],s);return r}}function Bt(n,t,e){const s=fs(t);return tr(n,s,e)}function tr(n,t,e){return({inputs:s,attrs:r,backend:o})=>{const{x:i}=s;at(i,n);const a=o,l=a.data.get(i.dataId).values;let c;if(i.dtype==="string"){if(!Array.isArray(l))throw new Error("String tensor's value was not an instance of Array");c=$s(l)}else c=l;const u=e||i.dtype,h=t(c,u,r);return a.makeTensorInfo(i.shape,u,h)}}const dw=fs(n=>Math.ceil(n)),S_=tr(Di,dw),N_={kernelName:Di,backendName:"cpu",kernelFunc:S_};function fw(n,t,e,s){const r=Qt(e,q(t));if(s&&e!=="string"){let o=0;n.forEach(i=>{const a=q(i.shape);r.set(i.vals,o),o+=a})}else{let o=0;n.forEach(i=>{const a=e==="string"?$s(i.vals):i.vals;let l=0;for(let c=0;c<i.shape[0];++c){const u=c*t[1]+o;for(let h=0;h<i.shape[1];++h)r[u+h]=a[l++]}o+=i.shape[1]})}return r}const pw=re((n,t)=>n===t?1:0),mw=pe(Sc,pw,null,"bool"),T_={kernelName:Sc,backendName:"cpu",kernelFunc:mw};const gw=fs(n=>Math.exp(n)),xw=tr(zi,gw,"float32"),E_={kernelName:zi,backendName:"cpu",kernelFunc:xw};const bw=fs(n=>Math.expm1(n)),R_=tr(Bi,bw),A_={kernelName:Bi,backendName:"cpu",kernelFunc:R_};const yw=fs(n=>Math.floor(n)),D_=tr(Vi,yw),__={kernelName:Vi,backendName:"cpu",kernelFunc:D_};const ww=re((n,t)=>Math.floor(n/t)),F_=pe(Wi,ww,null,"int32"),O_={kernelName:Wi,backendName:"cpu",kernelFunc:F_};function vw(n,t,e,s,r,o,i,a,l){const c=$t([s,o],e);for(let u=0;u<s;u++){const h=[];let d=0;for(let f=0;f<r;f++){const p=n[u*r+f];d+=p*i[f],h.push(p)}if(d<0||d>=l/o)throw new Error(`Invalid indices: ${h} does not index into ${a}`);for(let f=0;f<o;f++)c.values[u*o+f]=t.get(...t.indexToLoc(d*o+f))}return c}function Cw(n,t,e){const s=$t(e,n.dtype);for(let r=0;r<s.size;++r){const i=s.indexToLoc(r).slice(),a=i[0],l=i[2],c=t.locToIndex([a,l]);i[2]=t.values[c];const u=n.locToIndex(i);0<=u&&u<n.values.length&&(s.values[r]=n.values[u])}return s}const $w=re((n,t)=>n>t?1:0),M_=pe(Rc,$w,null,"bool"),L_={kernelName:Rc,backendName:"cpu",kernelFunc:M_};const Iw=re((n,t)=>n>=t?1:0),P_=pe(Ui,Iw,null,"bool"),z_={kernelName:Ui,backendName:"cpu",kernelFunc:P_};const kw=re((n,t)=>n<t?1:0),B_=pe(Dc,kw,null,"bool"),V_={kernelName:Dc,backendName:"cpu",kernelFunc:B_};const Sw=re((n,t)=>n<=t?1:0),W_=pe(_c,Sw,null,"bool"),U_={kernelName:_c,backendName:"cpu",kernelFunc:W_};function Nw(n,t,e){const s=(t-n)/(e-1),r=Se(e,"float32");r[0]=n;for(let o=1;o<r.length;o++)r[o]=r[o-1]+s;return r}const Tw=fs(n=>Math.log(n)),G_=tr(Xi,Tw),H_={kernelName:Xi,backendName:"cpu",kernelFunc:G_};function Ew(n,t,e,s){const r=ke(s,q(e));for(let o=0;o<r.length;++o){const i=o*t;let a=n[i];for(let l=0;l<t;++l){const c=n[i+l];(Number.isNaN(c)||c>a)&&(a=c)}r[o]=a}return r}const Rw=re(((n,t)=>Math.max(n,t))),q_=pe(Yi,Rw),j_={kernelName:Yi,backendName:"cpu",kernelFunc:q_};const Aw=re(((n,t)=>Math.min(n,t))),X_=pe(Zi,Aw),K_={kernelName:Zi,backendName:"cpu",kernelFunc:X_};const Pp=re(((n,t)=>n*t)),Y_=Mp(((n,t,e,s)=>({real:n*e-t*s,imag:n*s+t*e}))),Ou=pe(Qi,Pp,Y_),Z_={kernelName:Qi,backendName:"cpu",kernelFunc:Ou};function Dw(n,t,e){const s=qs(-1,e);return Pp([],t,s,n,e)}function J_(n){const{inputs:t,backend:e}=n,{x:s}=t;at(s,"neg");const r=e.data.get(s.dataId).values,[o,i]=Dw(r,s.shape,s.dtype);return e.makeTensorInfo(i,s.dtype,o)}const Q_={kernelName:Gc,backendName:"cpu",kernelFunc:J_};const _w=re(((n,t)=>n!==t?1:0)),tF=pe(Hc,_w,null,"bool"),eF={kernelName:Hc,backendName:"cpu",kernelFunc:tF};function zp(n,t,e,s,r){const o=t.length,i=q(t),a=ut(t),l=ut(r),c=ke(e,q(r));for(let u=0;u<i;++u){const h=$o(u,o,a),d=new Array(h.length);for(let p=0;p<d.length;p++)d[p]=h[s[p]];const f=es(d,o,l);c[f]=n[u]}return c}function He(n){const{inputs:t,attrs:e,backend:s}=n,{x:r}=t,{perm:o}=e;at(r,"transpose");const i=r.shape.length,a=new Array(i);for(let h=0;h<a.length;h++)a[h]=r.shape[o[h]];const l=s.data.get(r.dataId).values,c=zp(l,r.shape,r.dtype,o,a);return{dataId:s.write(c,a,r.dtype),shape:a,dtype:r.dtype}}const nF={kernelName:eo,backendName:"cpu",kernelFunc:He};function Fw(n,t,e,s){const[r,o]=ye(n,s),i=Qe(t,"int32"),a=Se(q(r),i),l=q(o);for(let c=0;c<a.length;++c){const u=c*l;let h=1;for(let d=0;d<l;++d)h*=e[u+d];a[c]=h}return{outVals:a,outShape:r,outDtype:i}}function sF(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{axis:o,keepDims:i}=s;at(r,"prod");const a=r.shape.length,l=It(o,r.shape),c=Jt(l,a);let u=l,h=r;const d=[];c!=null&&(h=He({inputs:{x:r},backend:e,attrs:{perm:c}}),d.push(h),u=ne(u.length,a));const f=e.data.get(h.dataId).values,{outVals:p,outShape:m,outDtype:g}=Fw(h.shape,h.dtype,f,u);let x=m;return i&&(x=ae(m,l)),d.forEach(b=>e.disposeIntermediateTensorInfo(b)),e.makeTensorInfo(x,g,p)}const rF={kernelName:Zc,backendName:"cpu",kernelFunc:sF};function oF(n,t,e){n.forEach((s,r)=>{if(s<0||s>=e){const o=$o(r,t.length,ut(t)).join(",");throw new Error(`indices[${o}] = ${s} is not in [0, ${e})`)}})}function iF(n,t){for(let e=0;e<n.length;++e){const s=n[e],r=e===n.length-1?t:n[e+1].length;if(s.length===0)throw new Error("Ragged splits may not be empty");if(s[0]<0)throw new Error("Ragged splits must be non-negative");if(s[s.length-1]>r)throw new Error("Ragged splits must not point past values");for(let o=1;o<s.length;++o)if(s[o-1]>s[o])throw new Error("Ragged splits must be sorted in ascending order")}}function aF(n,t,e,s){const r=[];let o=0;const i=t.length-1+e.length,a=new Array(i).fill(null).map(()=>[0]);iF(e,s);let l=1;for(let c=0;c<t.length-1;++c){l*=t[c];const u=t[c+1];for(let h=1;h<l+1;++h)a[c].push(h*u)}for(let c=0;c<n.length;++c){let u=n[c],h=n[c]+1;for(let d=0;d<e.length;++d){const f=e[d],p=d+t.length-1;if(p>=0){const m=a[p],g=m[m.length-1]-f[u];for(let x=u;x<h;++x)a[p].push(f[x+1]+g)}u=f[u],h=f[h]}h!==u&&(r.push([u,h]),o+=h-u)}return{outSplits:a,valueSlices:r,numValues:o}}function lF(n){const t=[];for(let e=0;e<n.length;++e){const s=n[e].length,r=Qt("int32",s);t.push(r),n[e].forEach((o,i)=>r[i]=o)}return t}function Cg(n,t){const e=n.slice(0,t);for(;e.length<t;)e.push(1);for(let s=t;s<n.length;s++)e[t-1]*=n[s];return e}function cF(n,t,e,s,r,o){const i=Cg(t,2)[1],a=Cg(o,2)[1];let l=0;for(const c of e)for(let u=c[0];u<c[1];++u){for(let h=0;h<s;++h)r[l*a+h]=n[u*i+h];++l}}function uF(n,t,e,s,r){const o=t.slice();o[0]=r;const i=Qt(e,q(o)),a=n.length,l=a===0?0:a/t[0];return cF(n,t,s,l,i,o),[i,o]}function Ow(n,t,e,s,r,o,i,a){if(n.length===0)throw new Error("paramsNestedSplits must be non empty");if(t[0].length===0)throw new Error("Split tensors must not be scalars");const l=t[0][0]-1;if(oF(o,i,l),s.length===0)throw new Error("params.rank must be nonzero");const c=s[0],{outSplits:u,valueSlices:h,numValues:d}=aF(o,i,n,c),f=lF(u),p=uF(e,s,r,h,d);return[f,p[0],p[1]]}const $g=2147483647;function Mw(n,t,e,s,r,o,i){if(t.length>1)throw new Error("starts must be a scalar or vector");if(r.length>1)throw new Error("limits must be a scalar or vector");if(i.length>1)throw new Error("deltas must be a scalar or vector");const a=t.length===0,l=r.length===0,c=i.length===0,u=[];a||u.push(t[0]),l||u.push(r[0]),c||u.push(i[0]);for(let g=1;g<u.length;++g)if(u[g]!==u[g-1])throw new Error("starts, limits, and deltas must have the same shape");const h=u.length===0?1:u[0],d=Qt("int32",h+1);d[0]=0;for(let g=0;g<h;++g){const x=a?n[0]:n[g],b=l?s[0]:s[g],w=c?o[0]:o[g];if(w===0)throw new Error("Requires delta != 0");let y;if(w>0&&b<x||w<0&&b>x)y=0;else if(y=Math.ceil(Math.abs((b-x)/w)),y>$g)throw new Error(`Requires ((limit - start) / delta) <= ${$g}`);d[g+1]=d[g]+y}const f=d[h],p=Qt(e,f);let m=0;for(let g=0;g<h;++g){const x=d[g+1]-d[g];let b=a?n[0]:n[g];const w=c?o[0]:o[g];for(let y=0;y<x;++y)p[m++]=b,b+=w}return[d,p]}var dn=En;class jl{constructor(t,e,s,r,o,i,a,l,c,u){this.shape=t,this.shapeShape=e,this.values=s,this.valuesShape=r,this.valuesDType=o,this.defaultValue=i,this.defaultValueShape=a,this.rowPartitionValues=l,this.rowPartitionValuesShapes=c,this.rowPartitionTypes=vb(u),this.raggedRank=Cb(this.rowPartitionTypes)}getRowPartitionTypeByDimension(t){return this.rowPartitionTypes[0]===dn.FIRST_DIM_SIZE?this.rowPartitionTypes[t+1]:this.rowPartitionTypes[t]}getRowPartitionTensor(t){return this.rowPartitionTypes[0]===dn.FIRST_DIM_SIZE?this.rowPartitionValues[t+1]:this.rowPartitionValues[t]}getMaxWidth(t){const e=this.getRowPartitionTensor(t-1);switch(this.getRowPartitionTypeByDimension(t-1)){case dn.VALUE_ROWIDS:return jl.getMaxWidthValueRowID(e);case dn.ROW_SPLITS:return jl.getMaxWidthRowSplit(e);default:throw new Error(`Cannot handle partition type ${dn[this.getRowPartitionTypeByDimension(t-1)]}`)}}static getMaxWidthRowSplit(t){const e=t.length;if(e===0||e===1)return 0;let s=0;for(let r=0;r<e-1;++r){const o=t[r+1]-t[r];o>s&&(s=o)}return s}static getMaxWidthValueRowID(t){const e=t.length;if(e===0)return 0;let s=0,r=t[0],o=0;for(let i=1;i<e;++i){const a=t[i];a!==r&&(r=a,o=Math.max(i-s,o),s=i)}return Math.max(e-s,o)}tensorShapeFromTensor(t,e,s=!0){if(e.length===0){if(t[0]===-1)return[];throw new Error("The only valid scalar shape tensor is the fully unknown shape specified as -1.")}return kg(t,s)}calculateOutputSize(t){const e=this.valuesShape,s=this.defaultValueShape;$b(s,e);const r=this.tensorShapeFromTensor(this.shape,this.shapeShape),i=wb(this.raggedRank,r,e);i[0]<0&&(i[0]=t);for(let a=1;a<=this.raggedRank;++a)i[a]<0&&(i[a]=this.getMaxWidth(a));return i}calculateFirstParentOutputIndex(t,e,s){const r=Math.min(t,s),o=[];let i=0;for(let a=0;a<r;++a,i+=e)o.push(i);for(let a=r;a<t;++a)o.push(-1);return S(o.length===t,()=>"Final length of result must be equal to firstDimension."),o}calculateOutputIndexRowSplit(t,e,s,r){const o=t.length,i=[];for(let a=0;a<o-1;++a){const l=t[a+1]-t[a];let c=Math.min(r,l),u=e[a];u===-1&&(c=0);for(let h=0;h<c;++h)i.push(u),u+=s;for(let h=0;h<l-c;++h)i.push(-1)}if(o>0&&i.length!==t[o-1])throw new Error("Invalid row split size.");return i}calculateOutputIndexValueRowID(t,e,s,r){const o=t.length,i=[];if(o===0)return[];let a=0,l=t[0];if(l>=e.length)throw new Error(`Got currentValueRowId=${l}, which is not less than ${e.length}`);let c=e[l];i.push(c);for(let u=1;u<o;++u){const h=t[u];if(h===l)c>=0&&(++a,a<r?c+=s:c=-1);else{if(a=0,l=h,h>=e.length)throw new Error(`Got nextValueRowId=${h} which is not less than ${e.length}`);c=e[h]}i.push(c)}if(i.length!==t.length)throw new Error("Invalid row ids.");return i}calculateOutputIndex(t,e,s,r){const o=this.getRowPartitionTensor(t),i=this.getRowPartitionTypeByDimension(t);switch(i){case dn.VALUE_ROWIDS:return this.calculateOutputIndexValueRowID(o,e,s,r);case dn.ROW_SPLITS:if(o.length-1>e.length)throw new Error(`Row partition size is greater than output size: ${o.length-1} > ${e.length}`);return this.calculateOutputIndexRowSplit(o,e,s,r);default:throw new Error(`Unsupported partition type: ${dn[i]}`)}}getFirstDimensionSize(){const t=this.rowPartitionValues[0];if(this.rowPartitionTypes.length===0)throw new Error("No row_partition_types given.");const e=this.rowPartitionTypes[0];switch(e){case dn.FIRST_DIM_SIZE:return t[0];case dn.VALUE_ROWIDS:throw new Error("Cannot handle VALUE_ROWIDS in first dimension.");case dn.ROW_SPLITS:return this.rowPartitionValuesShapes[0][0]-1;default:throw new Error(`Cannot handle type ${dn[e]}`)}}compute(){if(this.rowPartitionValues[0].length<=0)throw new Error("Invalid first partition input. Tensor requires at least one element.");const e=this.getFirstDimensionSize(),s=this.calculateOutputSize(e),r=new Array(this.raggedRank+1);r[r.length-1]=1;for(let l=r.length-2;l>=0;--l)r[l]=r[l+1]*s[l+1];const o=kg(s,!1),i=Qt(this.valuesDType,q(o));if(r[0]*s[0]>0){let l=this.calculateFirstParentOutputIndex(e,r[0],s[0]);for(let c=1;c<=this.raggedRank;++c)l=this.calculateOutputIndex(c-1,l,r[c],s[c]);this.setOutput(this.raggedRank,l,i,o)}return[o,i]}setOutput(t,e,s,r){if(s.length===0)return;const o=this.values,i=s;let a=r.slice();a=a.slice(t+1);const l=q(a),c=e.length;let u=this.defaultValue;if(u.length!==l&&u.length!==1){const p=this.defaultValueShape;B(()=>{const m=L(u,p);u=ri(m,a).dataSync()})}let h=0,d=0,f=0;for(let p=0;p<=c;++p){let m=p<c?e[p]:-1;if(m===f){++f;continue}if(d<f){const g=o.subarray(h*l),x=i.subarray(d*l),b=(f-d)*l;Ig(x,g,b)}if(p>=c){const g=s.length;m=Math.floor(g/l)}if(m>f)if(this.defaultValue.length===1)i.subarray(f*l,m*l).fill(this.defaultValue[0]),f=m;else for(;m>f;){const g=i.slice(f*l);Ig(g,u,l),++f}m<0?(h=p+1,d=f):(h=p,d=f,f=d+1)}}}function Ig(n,t,e){for(let s=0;s<e;s++)n[s]=t[s]}function kg(n,t){const e=[];for(let s of n){if(s<0){if(!t)throw new Error(`Dimension ${s} must be >= 0`);if(s<-1)throw new Error(`Dimension ${s} must be >= -1`);s=-1}e.push(s)}return e}function Lw(n,t,e,s,r,o,i,a,l,c){return new jl(n,t,e,s,r,o,i,a,l,c).compute()}function Pw(n,t,e,s){const r=n===t,o=n<t&&e<0,i=t<n&&e>1;if(r||o||i)return Se(0,s);const a=Math.abs(Math.ceil((t-n)/e)),l=Se(a,s);t<n&&e===1&&(e=-1),l[0]=n;for(let c=1;c<l.length;c++)l[c]=l[c-1]+e;return l}const zw=fs(n=>1/Math.sqrt(n)),hF=tr(oa,zw),dF={kernelName:oa,backendName:"cpu",kernelFunc:hF};function cr(n,t,e,s,r,o,i,a,l,c){const u=[s/r,r],h=n.values,d=t.values;if(s===0)return $t(e,t.dtype);const f=l instanceof ve?l:$t(u,t.dtype);typeof l=="string"||typeof l=="number"?f.values.fill(l):typeof l=="boolean"&&f.values.fill(+l);for(let p=0;p<o;p++){const m=[];let g=0;for(let x=0;x<i;x++){const b=h[p*i+x];m.push(b),g+=b*a[x]}if(g<0||g>=s/r)throw new Error(`Invalid indices: ${m} does not index into ${e}`);for(let x=0;x<r;x++)c?f.values[g*r+x]+=d[p*r+x]:f.values[g*r+x]=t.rank===0?d[0]:d[p*r+x]}return f}const fF=fs(n=>1/(1+Math.exp(-n))),Bw=Bt(ua,n=>1/(1+Math.exp(-n))),pF={kernelName:ua,backendName:"cpu",kernelFunc:Bw};function Vw(n,t,e,s,r){const o=qf(s,t,e),i=q(e),a=ut(s);if(o){const h=jf(t,a);return r==="string"?n.slice(h,h+i):n.subarray(h,h+i)}const l=r==="string"?$s(n):n,c=$t(s,r,l),u=$t(e,r);for(let h=0;h<u.size;++h){const d=u.indexToLoc(h),f=d.map((p,m)=>p+t[m]);u.set(c.get(...f),...d)}return r==="string"?Ub(u.values):u.values}function Er(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{begin:o,size:i}=s;at(r,"slice");const[a,l]=wu(r,o,i);Gf(r,a,l);const c=e.data.get(r.dataId).values,u=Vw(c,a,l,r.shape,r.dtype);return e.makeTensorInfo(l,r.dtype,u)}const mF={kernelName:su,backendName:"cpu",kernelFunc:Er};function Ww(n,t,e,s,r,o,i){const a=t[0],l=o[0],c=new Array(l),u=new Array(a),h=t[1];if(l===0){if(a!==0)throw new Error(Rb(a));const g=Qt(e,0),x=Qt(r,0);return[g,[0,h],x,c,u]}let d=!0,f=0;const p=new Array(l).fill(0);for(let g=0;g<a;++g){const x=n[g*h];if(x<0)throw new Error(Ab(g,x));if(x>=l)throw new Error(Db(g,x,l));++p[x],d=d&&x>=f,f=x}let m=!0;for(let g=0;g<l;++g){const x=p[g]===0;c[g]=x,m=m&&!x,p[g]=Math.max(p[g],1),g>0&&(p[g]+=p[g-1])}if(m&&d){const g=n,x=s;for(let b=0;b<a;++b)u[b]=b;return[g,[a,h],x,c,u]}else{const g=p[l-1],x=Qt(e,g*h),b=Qt(r,g),w=new Array(l).fill(0);for(let y=0;y<a;++y){const v=n[y*h],$=w[v],N=(v===0?0:p[v-1])+$;w[v]++;for(let T=0;T<h;++T)x[N*h+T]=n[y*h+T];b[N]=s[y],u[y]=N}for(let y=0;y<l;++y)if(w[y]===0){const $=y===0?0:p[y-1];x[$*h+0]=y;for(let N=1;N<h;++N)x[$*h+N]=0;b[$]=i}return[x,[g,h],b,c,u]}}function Uw(n,t,e,s,r){const o=q(s),i=t[0],a=r.length,l=[];let c=1,u=-1;for(let g=0;g<a;++g){const x=r[g];if(x===-1){if(u!==-1)throw new Error(_b(u,g));u=g,l.push(1)}else{if(x<0)throw new Error(Fb(g,x));c*=x,l.push(x)}}if(u!==-1){if(c<=0)throw new Error(Ob());const g=Math.trunc(o/c);if(c*g!==o)throw new Error(Mb(s,l));l[u]=g}if(q(l)!==o)throw new Error(Lb(s,l));const d=s.length,f=[];if(d>0){f[d-1]=1;for(let g=d-2;g>=0;--g)f[g]=f[g+1]*s[g+1]}const p=[];if(a>0){p[a-1]=1;for(let g=a-2;g>=0;--g)p[g]=p[g+1]*l[g+1]}const m=Qt(e,i*a);for(let g=0;g<i;++g){let x=0;for(let b=0;b<d;++b)x+=n[g*d+b]*f[b];for(let b=0;b<a;++b)m[g*a+b]=Math.trunc(x/p[b]),x%=p[b]}return[m,[i,a],l]}function Bp(n,t,e,s,r,o=!1,i=0){const a=s.length,l=[t[0],n.length/t[0]],c=l[1],h=a>0?r[a-1]+1:0;if(h<0)throw new Error(Bh());const d=t.slice();d[0]=h;const f=d.reduce((w,y)=>w*y,1),p=Qt(e,f);if(a===0)return h>0&&p.fill(i),[p,d];if(h<=0)throw new Error(Bh());let m=0,g=1,x=0,b=r[m];for(;;){let w=0;if(g<a){if(w=r[g],b===w){++g;continue}if(b>=w)throw new Error(Pb())}if(b<0||b>=h)throw new Error(zb(b,h));b>x&&p.fill(i,x*c,b*c);for(let y=m;y<g;++y){const v=s[y];if(v<0||v>=l[0])throw new Error(Bb(y,s[y],l[0]));for(let $=0;$<c;$++)p[b*c+$]+=n[v*c+$]}if(o)for(let y=0;y<c;y++)p[b*c+y]/=g-m;if(m=g,++g,x=b+1,b=w,g>a)break}return x<h&&p.fill(i,x*c,h*c),[p,d]}const gF=fs(n=>Math.sqrt(n)),xF=Bt(da,n=>Math.sqrt(n)),bF={kernelName:da,backendName:"cpu",kernelFunc:xF};const Gw=re(((n,t)=>{const e=n-t;return e*e})),yF=pe(fa,Gw),wF={kernelName:fa,backendName:"cpu",kernelFunc:yF};const Hw=fs((n,t)=>{const{pattern:e,replaceGlobal:s,rewrite:r}=t;return n.replace(new RegExp(e,s?"g":""),r)}),vF=tr(nf,Hw),CF={kernelName:nf,backendName:"cpu",kernelFunc:vF};function qw(n,t,e,s){const r=$t(n,t.dtype);for(let o=0;o<r.size;o++){const i=r.indexToLoc(o),a=new Array(i.length);for(let l=0;l<a.length;l++)a[l]=i[l]*e[l]+s[l];r.set(t.get(...a),...i)}return r}class $F{constructor(t,e,s,r,o,i){this.separator=Ms(t),this.nGramWidths=e,this.leftPad=Ms(s),this.rightPad=Ms(r),this.padWidth=o,this.preserveShort=i}getPadWidth(t){return Math.min(this.padWidth<0?t-1:this.padWidth,t-1)}getNumNGrams(t,e){const s=this.getPadWidth(e);return Math.max(0,t+2*s-e+1)}createNGrams(t,e,s,r,o,i){for(let a=0;a<o;++a){const l=this.getPadWidth(i),c=Math.max(0,l-a),u=Math.max(0,l-(o-(a+1))),h=i-(c+u),d=e+(c>0?0:a-l);let f=0;f+=c*this.leftPad.length;for(let b=0;b<h;++b)f+=t[d+b].length;f+=u*this.rightPad.length;const p=c+u+h-1;f+=p*this.separator.length,s[r+a]=new Uint8Array(f);const m=s[r+a];let g=0;const x=b=>b.forEach(w=>m[g++]=w);for(let b=0;b<c;++b)x(this.leftPad),x(this.separator);for(let b=0;b<h-1;++b)x(t[d+b]),x(this.separator);if(h>0){x(t[d+h-1]);for(let b=0;b<u;++b)x(this.separator),x(this.rightPad)}else{for(let b=0;b<u-1;++b)x(this.rightPad),x(this.separator);x(this.rightPad)}}}compute(t,e){const s=t.length,r=e.length;if(r>0){let l=e[0];if(l!==0)throw new Error(`First split value must be 0, got ${l}`);for(let c=1;c<r;++c){let u=e[c]>=l;if(u=u&&e[c]<=s,!u)throw new Error(`Invalid split value ${e[c]}, must be in [${l}, ${s}]`);l=e[c]}if(l!==s)throw new Error(`Last split value must be data size. Expected ${s}, got ${l}`)}const o=r-1,i=Qt("int32",r);if(s===0||r===0){const l=new Array(s);for(let c=0;c<=o;++c)i[c]=0;return[l,i]}i[0]=0;for(let l=1;l<=o;++l){const c=e[l]-e[l-1];let u=0;this.nGramWidths.forEach(h=>{u+=this.getNumNGrams(c,h)}),this.preserveShort&&c>0&&u===0&&(u=1),i[l]=i[l-1]+u}const a=new Array(i[o]);for(let l=0;l<o;++l){const c=e[l];let u=i[l];if(this.nGramWidths.forEach(h=>{const d=e[l+1]-e[l],f=this.getNumNGrams(d,h);this.createNGrams(t,c,a,u,f,h),u+=f}),this.preserveShort&&u===i[l]){const h=e[l+1]-e[l];if(h===0)continue;const d=h+2*this.padWidth;this.createNGrams(t,c,a,u,1,d)}}return[a,i]}}function jw(n,t,e,s,r,o,i,a){return new $F(e,s,r,o,i,a).compute(n,t)}function IF(n,t,e,s){if(!n.length)return;if(t.length===0){for(let o=0;o<n.length;++o)s.push(n.subarray(o,o+1));return}if(t.length===1){const o=t[0];let i=n.indexOf(o);for(;i!==-1;){const a=n.subarray(0,i);(!e||a.length!==0)&&s.push(a),n=n.subarray(i+1),i=n.indexOf(o)}(!e||n.length!==0)&&s.push(n);return}let r=0;for(let o=0;o<n.length+1;o++)if(o===n.length||t.indexOf(n[o])!==-1){const i=n.subarray(r,o);(!e||i.length!==0)&&s.push(i),r=o+1}}function Xw(n,t,e){const s=n.length,r=[];let o=0,i=0;const a=new Array(s);for(let d=0;d<s;++d){const f=r.length;IF(n[d],t,e,r);const p=r.length-f;a[d]=p,o+=p,i=Math.max(i,p)}const l=Qt("int32",o*2),c=new Array(o),u=[s,i];let h=0;for(let d=0;d<s;++d)for(let f=0;f<a[d];++f)l[h*2]=d,l[h*2+1]=f,c[h]=r[h],++h;return[l,c,u]}function Kw(n,t){const e=Qt("int32",n.length);for(let s=0;s<n.length;++s)e[s]=z$(n[s]).modulo(t).getLowBitsUnsigned();return e}const Yw=re(((n,t)=>n-t)),kF=Mp(((n,t,e,s)=>({real:n-e,imag:t-s}))),Vp=pe(pa,Yw,kF),SF={kernelName:pa,backendName:"cpu",kernelFunc:Vp};function Zw(n,t){const e=new Array(n.rank);for(let r=0;r<e.length;r++)e[r]=n.shape[r]*t[r];const s=$t(e,n.dtype);for(let r=0;r<s.values.length;++r){const o=s.indexToLoc(r),i=new Array(n.rank);for(let l=0;l<i.length;l++)i[l]=o[l]%n.shape[l];const a=n.locToIndex(i);s.values[r]=n.values[a]}return s}const Jo=(n,t)=>{const e=t.value-n.value;return e===0?n.index-t.index:e};function Jw(n,t,e=0,s=n.length-1){for(;s>e;){if(s-e>600){const a=s-e+1,l=t-e+1,c=Math.log(a),u=.5*Math.exp(2*c/3),h=.5*Math.sqrt(c*u*(a-u)/a)*Math.sign(l-a/2),d=Math.max(e,Math.floor(t-l*u/a+h)),f=Math.min(s,Math.floor(t+(a-l)*u/a+h));Jw(n,t,d,f)}const r=n[t];let o=e,i=s;for(Kr(n,e,t),Jo(n[s],r)>0&&Kr(n,e,s);o<i;){for(Kr(n,o,i),o++,i--;Jo(n[o],r)<0;)o=o+1;for(;Jo(n[i],r)>0;)i=i-1}Jo(n[e],r)===0?Kr(n,e,i):(i=i+1,Kr(n,i,s)),i<=t&&(e=i+1),t<=i&&(s=i-1)}}function Qw(n,t,e,s,r){const o=t[t.length-1],[i,a]=[n.length/o,o],l=ke(e,i*s),c=ke("int32",i*s);for(let h=0;h<i;h++){const d=h*a,f=n.subarray(d,d+a);let p=new Array(f.length);f.forEach((b,w)=>p[w]={value:b,index:w}),s<p.length&&(Jw(p,s),p=p.slice(0,s)),r&&p.sort(Jo);const m=h*s,g=l.subarray(m,m+s),x=c.subarray(m,m+s);for(let b=0;b<s;b++)g[b]=p[b].value,x[b]=p[b].index}const u=t.slice();return u[u.length-1]=s,[$t(u,e,l),$t(u,"int32",c)]}function tv(n,t,e,s){const r=It(t,e)[0],o=[1,e[0],1];for(let p=0;p<r;p++)o[0]*=e[p];o[1]=e[r];for(let p=r+1;p<e.length;p++)o[2]*=e[p];const i=new Map,a=new Int32Array(e[r]),l=new ve(o,s,n),c=[],u=o[0]===1&&o[2]===1;for(let p=0;p<e[r];p++){let m;if(u)m=n[p].toString();else{const x=[];for(let b=0;b<o[0];b++)for(let w=0;w<o[2];w++)x.push(l.get(b,p,w));m=x.join(",")}const g=i.get(m);if(g!=null)a[p]=g;else{const x=i.size;i.set(m,x),a[p]=x,c.push(p)}}const h=o.slice();h[1]=i.size;const d=new ve(h,s);c.forEach((p,m)=>{for(let g=0;g<o[0];g++)for(let x=0;x<o[2];x++)d.set(l.get(g,p,x),g,m,x)});const f=e.slice();return f[r]=h[1],{outputValues:d.values,outputShape:f,indices:a}}const NF=Object.freeze(Object.defineProperty({__proto__:null,addImpl:cw,bincountImpl:Lp,bincountReduceImpl:uw,bitwiseAndImpl:hw,castImpl:lw,ceilImpl:dw,concatImpl:fw,equalImpl:pw,expImpl:gw,expm1Impl:bw,floorDivImpl:ww,floorImpl:yw,gatherNdImpl:vw,gatherV2Impl:Cw,greaterEqualImpl:Iw,greaterImpl:$w,lessEqualImpl:Sw,lessImpl:kw,linSpaceImpl:Nw,logImpl:Tw,maxImpl:Ew,maximumImpl:Rw,minimumImpl:Aw,multiplyImpl:Pp,negImpl:Dw,notEqualImpl:_w,prodImpl:Fw,raggedGatherImpl:Ow,raggedRangeImpl:Mw,raggedTensorToTensorImpl:Lw,rangeImpl:Pw,rsqrtImpl:zw,scatterImpl:cr,sigmoidImpl:fF,simpleAbsImpl:aw,sliceImpl:Vw,sparseFillEmptyRowsImpl:Ww,sparseReshapeImpl:Uw,sparseSegmentReductionImpl:Bp,sqrtImpl:gF,squaredDifferenceImpl:Gw,staticRegexReplaceImpl:Hw,stridedSliceImpl:qw,stringNGramsImpl:jw,stringSplitImpl:Xw,stringToHashBucketFastImpl:Kw,subImpl:Yw,tileImpl:Zw,topKImpl:Qw,transposeImpl:zp,uniqueImpl:tv},Symbol.toStringTag,{value:"Module"}));b0("cpu",()=>new Fu,1);const ev=Bt(Li,n=>n>=0?n:Math.exp(n)-1),TF={kernelName:Li,backendName:"cpu",kernelFunc:ev};function nv(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{alpha:o}=s;at([r],"leakyRelu");const i=q(r.shape),a=e.data.get(r.dataId).values,l=ke("float32",i);for(let c=0;c<a.length;c++)l[c]=a[c]<0?o*a[c]:a[c];return e.makeTensorInfo(r.shape,"float32",l)}const EF={kernelName:Ac,backendName:"cpu",kernelFunc:nv};const RF=re((n,t)=>n<0?t*n:n);function sv(n){const{inputs:t,backend:e}=n,{x:s,alpha:r}=t;at([s,r],"prelu");const o=e.data.get(s.dataId).values,i=e.data.get(r.dataId).values,[a,l]=RF(s.shape,r.shape,o,i,"float32");return e.makeTensorInfo(l,"float32",a)}const AF={kernelName:Yc,backendName:"cpu",kernelFunc:sv};const rv=Bt(na,n=>Math.max(0,n)),DF={kernelName:na,backendName:"cpu",kernelFunc:rv};const ov=Bt(sa,n=>Math.min(Math.max(0,n),6)),_F={kernelName:sa,backendName:"cpu",kernelFunc:ov};function Xl(n,t,e,s,r){if(e==="linear")return ds({inputs:{x:t},backend:n});if(e==="relu")return rv({inputs:{x:t},backend:n});if(e==="elu")return ev({inputs:{x:t},backend:n});if(e==="relu6")return ov({inputs:{x:t},backend:n});if(e==="prelu")return sv({inputs:{x:t,alpha:s},backend:n});if(e==="leakyrelu")return nv({inputs:{x:t},backend:n,attrs:{alpha:r}});if(e==="sigmoid")return Bw({inputs:{x:t},backend:n});throw new Error(`Activation ${e} has not been implemented for the CPU backend.`)}function qt(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{shape:o}=s,i=q(r.shape),a=Tx(o,i),l=q(a);S(i===l,()=>`The new shape (${a}) has ${l} elements and the old shape (${r.shape}) has ${i} elements. The new shape and old shape must have the same number of elements.`),e.incRef(r.dataId);const c=e.data.get(r.dataId);if(c.complexTensorInfos!=null){const u=c.complexTensorInfos.real,h=c.complexTensorInfos.imag;u.shape=a,h.shape=a}return{dataId:r.dataId,shape:a,dtype:r.dtype}}const FF={kernelName:Jc,backendName:"cpu",kernelFunc:qt};function iv(n){const{inputs:t,backend:e,attrs:s}=n,{a:r,b:o}=t,{transposeA:i,transposeB:a}=s;at([r,o],"matMul");const l=r.shape.length,c=o.shape.length,u=i?r.shape[l-2]:r.shape[l-1],h=a?o.shape[c-1]:o.shape[c-2],d=i?r.shape[l-1]:r.shape[l-2],f=a?o.shape[c-2]:o.shape[c-1],p=r.shape.slice(0,-2),m=o.shape.slice(0,-2),g=q(p),x=q(m),w=yt(r.shape.slice(0,-2),o.shape.slice(0,-2)).concat([d,f]);S(u===h,()=>`Error in matMul: inner shapes (${u}) and (${h}) of Tensors with shapes ${r.shape} and ${o.shape} and transposeA=${i} and transposeB=${a} must match.`);const y=i?[g,u,d]:[g,d,u],v=a?[x,f,h]:[x,h,f],$=qt({inputs:{x:r},backend:e,attrs:{shape:y}}),N=qt({inputs:{x:o},backend:e,attrs:{shape:v}}),T=i?$.shape[1]:$.shape[2],I=i?$.shape[2]:$.shape[1],k=a?N.shape[1]:N.shape[2],C=Math.max(g,x),R=e.data.get($.dataId).values,D=e.data.get(N.dataId).values,M=ut($.shape),O=ut(N.shape),[z,G,V]=i?[M[0],1,M[1]]:[M[0],M[1],1],[U,j,K]=a?[1,O[1],O[0]]:[O[1],1,O[0]],Y=I*k,X=$t([C,I,k],$.dtype),Q=X.values,tt=e.blockSize;for(let nt=0;nt<C;nt++){const it=nt%g,ht=nt%x;for(let ct=0;ct<I;ct+=tt){const xt=Math.min(ct+tt,I);for(let mt=0;mt<k;mt+=tt){const Nt=Math.min(mt+tt,k);for(let wt=0;wt<T;wt+=tt){const St=Math.min(wt+tt,T);for(let Dt=ct;Dt<xt;Dt++)for(let _t=mt;_t<Nt;_t++){let Vt=0;for(let Lt=wt;Lt<St;Lt++){const nn=R[it*z+Dt*G+Lt*V],oe=D[Lt*U+_t*j+ht*K];Vt+=nn*oe}Q[nt*Y+(Dt*k+_t)]+=Vt}}}}}return e.disposeIntermediateTensorInfo($),e.disposeIntermediateTensorInfo(N),e.makeTensorInfo(w,X.dtype,X.values)}const OF={kernelName:gc,backendName:"cpu",kernelFunc:iv};function MF(n){const{inputs:t,backend:e,attrs:s}=n,{a:r,b:o,bias:i,preluActivationWeights:a}=t,{transposeA:l,transposeB:c,activation:u,leakyreluAlpha:h}=s;let d,f,p;const m=[];d=iv({inputs:{a:r,b:o},attrs:{transposeA:l,transposeB:c},backend:e}),i&&(f=po({inputs:{a:d,b:i},backend:e}),m.push(d),d=f),u&&(p=Xl(e,d,u,a,h),m.push(d),d=p);for(const x of m)e.disposeIntermediateTensorInfo(x);return d}const LF={kernelName:Sl,backendName:"cpu",kernelFunc:MF};const PF=Bt(Ii,n=>Math.acos(n)),zF={kernelName:Ii,backendName:"cpu",kernelFunc:PF};const BF=Bt(ki,n=>Math.acosh(n)),VF={kernelName:ki,backendName:"cpu",kernelFunc:BF};function WF(n){const{inputs:t,backend:e}=n,s=t;at(t,"addN");const r=s.map(a=>e.data.get(a.dataId).values),o=$t(s[0].shape,s[0].dtype),i=o.values;for(let a=0;a<s.length;a++){const l=r[a];for(let c=0;c<i.length;c++)i[c]+=l[c]}return e.makeTensorInfo(o.shape,o.dtype,o.values)}const UF={kernelName:vd,backendName:"cpu",kernelFunc:WF};function GF(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{axis:o,keepDims:i}=s;at(r,"all");const a=It(o,r.shape);let l=a;const c=Jt(l,r.shape.length);let u=r;c!=null&&(u=He({inputs:{x:r},backend:e,attrs:{perm:c}}),l=ne(l.length,r.shape.length)),$e("all",l,u.shape.length);const[h,d]=ye(u.shape,l),f=q(d),p=Se(q(h),u.dtype),m=e.data.get(u.dataId).values;for(let x=0;x<p.length;++x){const b=x*f;let w=m[b];for(let y=0;y<f;++y){const v=m[b+y];w=w&&v}p[x]=w}c!=null&&e.disposeIntermediateTensorInfo(u);const g=e.makeTensorInfo(h,u.dtype,p);if(i){const x=ae(h,a),b=qt({inputs:{x:g},backend:e,attrs:{shape:x}});return e.disposeIntermediateTensorInfo(g),b}return g}const HF={kernelName:Cd,backendName:"cpu",kernelFunc:GF};function qF(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{axis:o,keepDims:i}=s;at(r,"any");const a=It(o,r.shape);let l=a;const c=Jt(l,r.shape.length);let u=r;c!=null&&(u=He({inputs:{x:r},backend:e,attrs:{perm:c}}),l=ne(l.length,r.shape.length)),$e("any",l,u.shape.length);const[h,d]=ye(u.shape,l),f=q(d),p=Se(q(h),u.dtype),m=e.data.get(u.dataId).values;for(let x=0;x<p.length;++x){const b=x*f;let w=m[b];for(let y=0;y<f;++y){const v=m[b+y];w=w||v}p[x]=w}c!=null&&e.disposeIntermediateTensorInfo(u);const g=e.makeTensorInfo(h,u.dtype,p);if(i){const x=ae(h,a),b=qt({inputs:{x:g},backend:e,attrs:{shape:x}});return e.disposeIntermediateTensorInfo(g),b}return g}const jF={kernelName:$d,backendName:"cpu",kernelFunc:qF};function XF(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{axis:o}=s;at(r,"argMax");let i=It(o,r.shape);const a=Jt(i,r.shape.length);let l=r;const c=[];a!=null&&(l=He({inputs:{x:r},backend:e,attrs:{perm:a}}),c.push(l),i=ne(i.length,l.shape.length)),i=[i[0]],$e("argMax",i,l.shape.length);const[u,h]=ye(l.shape,i),d=q(u),f=Se(d,"int32"),p=q(h),m=e.data.get(l.dataId).values;for(let g=0;g<f.length;++g){const x=g*p;let b=m[x],w=0;for(let y=0;y<p;++y){const v=m[x+y];v>b&&(b=v,w=y)}f[g]=w}return c.forEach(g=>e.disposeIntermediateTensorInfo(g)),e.makeTensorInfo(u,"int32",f)}const KF={kernelName:dc,backendName:"cpu",kernelFunc:XF};function YF(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{axis:o}=s;at(r,"argMin");let i=It(o,r.shape);const a=Jt(i,r.shape.length);let l=r;const c=[];a!=null&&(l=He({inputs:{x:r},backend:e,attrs:{perm:a}}),c.push(l),i=ne(i.length,l.shape.length)),i=[i[0]],$e("argMin",i,l.shape.length);const[u,h]=ye(l.shape,i),d=q(u),f=Se(d,"int32"),p=q(h),m=e.data.get(l.dataId).values;for(let g=0;g<f.length;++g){const x=g*p;let b=m[x],w=0;for(let y=0;y<p;++y){const v=m[x+y];v<b&&(b=v,w=y)}f[g]=w}return c.forEach(g=>e.disposeIntermediateTensorInfo(g)),e.makeTensorInfo(u,"int32",f)}const ZF={kernelName:fc,backendName:"cpu",kernelFunc:YF};const JF=Bt(Si,n=>Math.asin(n)),QF={kernelName:Si,backendName:"cpu",kernelFunc:JF};const tO=Bt(Ni,n=>Math.asinh(n)),eO={kernelName:Ni,backendName:"cpu",kernelFunc:tO};const nO=Bt(Ti,n=>Math.atan(n)),sO={kernelName:Ti,backendName:"cpu",kernelFunc:nO};const rO=re((n,t)=>Math.atan2(n,t)),oO=pe(Ri,rO),iO={kernelName:Ri,backendName:"cpu",kernelFunc:oO};const aO=Bt(Ei,n=>Math.atanh(n)),lO={kernelName:Ei,backendName:"cpu",kernelFunc:aO};function Wp(n,t,e,s,r,o){const i=r.strideHeight,a=r.strideWidth,l=r.dilationHeight,c=r.dilationWidth,u=r.effectiveFilterHeight,h=r.effectiveFilterWidth,d=r.padInfo.top,f=r.padInfo.left,p=o==="max"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,m=$t(r.outShape,e),g=m.values,x=r.outShape[1]*r.outShape[2]*r.outShape[3],b=r.outShape[2]*r.outShape[3],w=r.outShape[3];for(let y=0;y<r.batchSize;++y){const v=y*x,$=y*s[0];for(let N=0;N<r.inChannels;++N)for(let T=0;T<r.outHeight;++T){const I=T*i-d,k=Math.max(0,I),C=Math.min(r.inHeight,u+I),R=v+T*b;for(let D=0;D<r.outWidth;++D){const M=D*a-f,O=Math.max(0,M),z=Math.min(r.inWidth,h+M);let G=p,V=0,U=0;for(let K=k;K<C;K+=l){const Y=$+K*s[1];for(let X=O;X<z;X+=c){const Q=Y+X*s[2],tt=n[Q+N];o==="max"&&tt>G?G=tt:o==="avg"&&(V+=tt,U++)}if(isNaN(G))break}const j=R+D*w+N;g[j]=o==="avg"?V/U:G}}}return m}function av(n,t,e,s,r=!1,o=!1){const i=$t(s.outShape,"int32"),a=s.strideHeight,l=s.strideWidth,c=s.dilationHeight,u=s.dilationWidth,h=s.effectiveFilterHeight,d=s.effectiveFilterWidth,f=s.padInfo.top,p=s.padInfo.left,m=$t(t,e,n);for(let g=0;g<s.batchSize;++g)for(let x=0;x<s.inChannels;++x)for(let b=0;b<s.outHeight;++b){const w=b*a-f;let y=w;for(;y<0;)y+=c;const v=Math.min(s.inHeight,h+w);for(let $=0;$<s.outWidth;++$){const N=$*l-p;let T=N;for(;T<0;)T+=u;const I=Math.min(s.inWidth,d+N);let k=Number.NEGATIVE_INFINITY,C=-1;for(let R=y;R<v;R+=c){const D=R-w;for(let M=T;M<I;M+=u){const O=M-N,z=m.get(g,R,M,x);z>k&&(k=z,r?C=o?((g*s.inHeight+R)*s.inWidth+M)*s.inChannels+x:(R*s.inWidth+M)*s.inChannels+x:C=D*d+O)}}i.set(C,g,b,$,x)}}return i}function lv(n,t,e,s,r,o){const i=r.strideDepth,a=r.strideHeight,l=r.strideWidth,c=r.dilationDepth,u=r.dilationHeight,h=r.dilationWidth,d=r.effectiveFilterDepth,f=r.effectiveFilterHeight,p=r.effectiveFilterWidth,m=r.padInfo.front,g=r.padInfo.top,x=r.padInfo.left,b=o==="max"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,w=$t(r.outShape,e),y=w.values,v=r.outShape[1]*r.outShape[2]*r.outShape[3]*r.outShape[4],$=r.outShape[2]*r.outShape[3]*r.outShape[4],N=r.outShape[3]*r.outShape[4],T=r.outShape[4];for(let I=0;I<r.batchSize;++I){const k=I*v,C=I*s[0];for(let R=0;R<r.inChannels;++R)for(let D=0;D<r.outDepth;++D){const M=D*i-m;let O=M;for(;O<0;)O+=c;const z=Math.min(r.inDepth,d+M),G=k+D*$;for(let V=0;V<r.outHeight;++V){const U=V*a-g;let j=U;for(;j<0;)j+=u;const K=Math.min(r.inHeight,f+U),Y=G+V*N;for(let X=0;X<r.outWidth;++X){const Q=X*l-x;let tt=Q;for(;tt<0;)tt+=h;const nt=Math.min(r.inWidth,p+Q),it=Y+X*T;let ht=b,ct=0,xt=0;for(let Nt=O;Nt<z;Nt+=c){const wt=C+Nt*s[1];for(let St=j;St<K;St+=u){const Dt=wt+St*s[2];for(let _t=tt;_t<nt;_t+=h){const Vt=Dt+_t*s[3],Lt=n[Vt+R];if(o==="max"&&Lt>ht?ht=Lt:o==="avg"&&(ct+=Lt,xt++),isNaN(ht))break}if(isNaN(ht))break}if(isNaN(ht))break}const mt=it+R;y[mt]=o==="avg"?ct/Math.max(xt,1):ht}}}}return w}function cO(n,t){const e=$t(t.outShape,"int32"),s=t.strideDepth,r=t.strideHeight,o=t.strideWidth,i=t.dilationDepth,a=t.dilationHeight,l=t.dilationWidth,c=t.effectiveFilterDepth,u=t.effectiveFilterHeight,h=t.effectiveFilterWidth,d=t.padInfo.front,f=t.padInfo.top,p=t.padInfo.left;for(let m=0;m<t.batchSize;++m)for(let g=0;g<t.inChannels;++g)for(let x=0;x<t.outDepth;++x){const b=x*s-d;let w=b;for(;w<0;)w+=i;const y=Math.min(t.inDepth,c+b);for(let v=0;v<t.outHeight;++v){const $=v*r-f;let N=$;for(;N<0;)N+=a;const T=Math.min(t.inHeight,u+$);for(let I=0;I<t.outWidth;++I){const k=I*o-p;let C=k;for(;C<0;)C+=l;const R=Math.min(t.inWidth,h+k);let D=Number.NEGATIVE_INFINITY,M=-1;for(let O=w;O<y;O+=i){const z=O-b;for(let G=N;G<T;G+=a){const V=G-$;for(let U=C;U<R;U+=l){const j=U-k,K=n.get(m,O,G,U,g);K>=D&&(D=K,M=z*u*h+V*u+j)}}}e.set(M,m,x,v,I,g)}}}return e}function uO(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t;at(r,"avgPool");const{filterSize:o,strides:i,pad:a,dimRoundingMode:l}=s,c=1;S(Te(i,c),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${i} and dilations '${c}'`);const u=yn(r.shape,o,i,c,a,l);let h;if(u.filterWidth===1&&u.filterHeight===1&&Mt(u.inShape,u.outShape))h=ds({inputs:{x:r},backend:e});else{const d=e.data.get(r.dataId).values,f=ut(r.shape),p=Wp(d,r.shape,r.dtype,f,u,"avg");h=e.makeTensorInfo(u.outShape,r.dtype,p.values)}return h}const hO={kernelName:pc,backendName:"cpu",kernelFunc:uO};function dO(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{filterSize:o,strides:i,pad:a,dimRoundingMode:l,dataFormat:c}=s;at(r,"avgPool3d");const u=Ss(r.shape,o,i,1,a,l,c),h=e.data.get(r.dataId).values,d=lv(h,r.shape,r.dtype,ut(r.shape),u,"avg");return e.makeTensorInfo(d.shape,"float32",d.values)}const fO={kernelName:mc,backendName:"cpu",kernelFunc:dO};function pO(n){const{inputs:t,backend:e,attrs:s}=n,{dy:r,input:o}=t,{filterSize:i,strides:a,pad:l,dimRoundingMode:c}=s;at([r,o],"avgPool3DGrad");const u=Ss(o.shape,i,a,1,l,c),h=u.strideDepth,d=u.strideHeight,f=u.strideWidth,p=u.filterDepth,m=u.filterHeight,g=u.filterWidth,x=u.dilationDepth,b=u.dilationHeight,w=u.dilationWidth,y=u.effectiveFilterDepth,v=u.effectiveFilterHeight,$=u.effectiveFilterWidth,N=y-1-u.padInfo.front,T=$-1-u.padInfo.left,I=v-1-u.padInfo.top,k=$t(o.shape,"float32"),C=1/(p*m*g),R=e.bufferSync(r);for(let D=0;D<u.batchSize;++D)for(let M=0;M<u.inChannels;++M)for(let O=0;O<u.inDepth;++O)for(let z=0;z<u.inHeight;++z)for(let G=0;G<u.inWidth;++G){const V=O-N,U=z-I,j=G-T;let K=0;for(let Y=0;Y<y;Y+=x){const X=(V+Y)/h;if(!(X<0||X>=u.outDepth||Math.floor(X)!==X))for(let Q=0;Q<v;Q+=b){const tt=(U+Q)/d;if(!(tt<0||tt>=u.outHeight||Math.floor(tt)!==tt))for(let nt=0;nt<$;nt+=w){const it=(j+nt)/f;if(it<0||it>=u.outWidth||Math.floor(it)!==it)continue;const ht=R.get(D,X,tt,it,M);K+=ht}}}k.set(K*C,D,O,z,G,M)}return e.makeTensorInfo(k.shape,k.dtype,k.values)}const mO={kernelName:kd,backendName:"cpu",kernelFunc:pO};function gO(n){const{inputs:t,backend:e,attrs:s}=n,{dy:r,input:o}=t,i=o;at([r,o],"avgPoolGrad");const{filterSize:a,strides:l,pad:c}=s,u=yn(i.shape,a,l,1,c),h=u.strideHeight,d=u.strideWidth,f=u.filterHeight,p=u.filterWidth,m=u.dilationHeight,g=u.dilationWidth,x=u.effectiveFilterHeight,b=u.effectiveFilterWidth,w=b-1-u.padInfo.left,y=x-1-u.padInfo.top,v=$t(i.shape,"float32"),$=1/(f*p),N=e.data.get(r.dataId).values,T=$t(r.shape,"float32",N);for(let I=0;I<u.batchSize;++I)for(let k=0;k<u.inChannels;++k)for(let C=0;C<u.inHeight;++C)for(let R=0;R<u.inWidth;++R){const D=C-y,M=R-w;let O=0;for(let z=0;z<x;z+=m){const G=(D+z)/h;if(!(G<0||G>=u.outHeight||Math.floor(G)!==G))for(let V=0;V<b;V+=g){const U=(M+V)/d;if(U<0||U>=u.outWidth||Math.floor(U)!==U)continue;const j=T.get(I,G,U,k);O+=j}}v.set(O*$,I,C,R,k)}return e.makeTensorInfo(v.shape,v.dtype,v.values)}const xO={kernelName:Id,backendName:"cpu",kernelFunc:gO};function bO(n){const{inputs:t,backend:e,attrs:s}=n,{x:r,scale:o,offset:i,mean:a,variance:l}=t;S(a.shape.length===l.shape.length,()=>"Batch normalization gradient requires mean and variance to have equal ranks."),S(i==null||a.shape.length===i.shape.length,()=>"Batch normalization gradient requires mean and offset to have equal ranks."),S(o==null||a.shape.length===o.shape.length,()=>"Batch normalization gradient requires mean and scale to have equal ranks."),at([r,a,l,o,i],"batchNorm");let{varianceEpsilon:c}=s;c==null&&(c=.001);const u=e.data.get(r.dataId).values,h=e.data.get(a.dataId).values,d=e.data.get(l.dataId).values,f=o?e.data.get(o.dataId).values:new Float32Array([1]),p=i?e.data.get(i.dataId).values:new Float32Array([0]),m=new Float32Array(u.length),g=p.length,x=f.length,b=d.length,w=h.length;let y=0,v=0,$=0,N=0;for(let T=0;T<u.length;++T)m[T]=p[y++]+(u[T]-h[v++])*f[$++]/Math.sqrt(d[N++]+c),y>=g&&(y=0),v>=w&&(v=0),$>=x&&($=0),N>=b&&(N=0);return e.makeTensorInfo(r.shape,r.dtype,m)}const yO={kernelName:Tc,backendName:"cpu",kernelFunc:bO};function wO(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{blockShape:o,crops:i}=s;at([r],"batchToSpaceND");const a=o.reduce((x,b)=>x*b),l=Ia(r.shape,o,a),c=ka(l.length,o.length),u=Sa(r.shape,o,a),h=Jf(i,o.length),d=Qf(u,i,o.length),f=qt({inputs:{x:r},backend:e,attrs:{shape:l}}),p=He({inputs:{x:f},backend:e,attrs:{perm:c}}),m=qt({inputs:{x:p},backend:e,attrs:{shape:u}}),g=Er({inputs:{x:m},backend:e,attrs:{begin:h,size:d}});return e.disposeIntermediateTensorInfo(f),e.disposeIntermediateTensorInfo(p),e.disposeIntermediateTensorInfo(m),g}const vO={kernelName:xc,backendName:"cpu",kernelFunc:wO};function CO(n){const{inputs:t,backend:e,attrs:s}=n,{x:r,weights:o}=t,{size:i}=s,a=e.data.get(r.dataId).values,l=e.data.get(o.dataId).values,c=Lp(a,l,o.dtype,o.shape,i);return e.makeTensorInfo([i],o.dtype,c)}const $O={kernelName:Sd,backendName:"cpu",kernelFunc:CO};function IO(n){const{inputs:t,backend:e}=n,{s0:s,s1:r}=t,o=e.data.get(s.dataId).values,i=e.data.get(r.dataId).values,a=yt(Array.from(o),Array.from(i));return e.makeTensorInfo([a.length],"int32",Int32Array.from(a))}const kO={kernelName:Fx,backendName:"cpu",kernelFunc:IO};const SO=Bt(_i,(n,t)=>{const e=t;return n>e.clipValueMax?e.clipValueMax:n<e.clipValueMin?e.clipValueMin:n}),NO={kernelName:_i,backendName:"cpu",kernelFunc:SO};const TO=n=>{const{x:t}=n.inputs,e=n.backend,s=new Float32Array(q(t.shape)),r=e.data.get(t.dataId),o=r.complexTensorInfos.real,i=r.complexTensorInfos.imag,a=e.data.get(o.dataId).values,l=e.data.get(i.dataId).values;for(let c=0;c<a.length;c++){const u=a[c],h=l[c];s[c]=Math.hypot(u,h)}return e.makeOutput(s,t.shape,"float32")},EO={kernelName:bc,backendName:"cpu",kernelFunc:TO};function mo(n){const{inputs:t,backend:e}=n,{input:s}=t,r=e.data.get(s.dataId).complexTensorInfos.imag,o=e.data.get(r.dataId).values;return e.makeTensorInfo(r.shape,r.dtype,o)}const RO={kernelName:Gd,backendName:"cpu",kernelFunc:mo};function go(n){const{inputs:t,backend:e,attrs:s}=n,{axis:r}=s,o=It(r,t[0].shape)[0],i=t.map(m=>m.shape);Kf(i,o);let a=ss(t.map(m=>m.shape),o);if(q(a)===0)return e.makeTensorInfo(a,t[0].dtype,[]);const l=t.filter(m=>q(m.shape)>0);if(l.length===1)return ds({inputs:{x:l[0]},backend:e});if(l[0].dtype==="complex64"){const m=l.map(y=>Tr({inputs:{input:y},backend:e})),g=l.map(y=>mo({inputs:{input:y},backend:e})),x=go({inputs:m,backend:e,attrs:{axis:o}}),b=go({inputs:g,backend:e,attrs:{axis:o}}),w=Ye({inputs:{real:x,imag:b},backend:e});return m.forEach(y=>e.disposeIntermediateTensorInfo(y)),g.forEach(y=>e.disposeIntermediateTensorInfo(y)),e.disposeIntermediateTensorInfo(x),e.disposeIntermediateTensorInfo(b),w}const c=l.map(m=>{const x=[-1,q(m.shape.slice(o))];return qt({inputs:{x:m},backend:e,attrs:{shape:x}})}),u=c.map(m=>({vals:e.data.get(m.dataId).values,shape:m.shape}));a=ss(c.map(m=>m.shape),1);const h=c[0].shape[0]===1,d=fw(u,a,t[0].dtype,h),f=ss(l.map(m=>m.shape),o),p=e.makeTensorInfo(f,t[0].dtype,d);return c.forEach(m=>e.disposeIntermediateTensorInfo(m)),p}const AO={kernelName:yc,backendName:"cpu",kernelFunc:go};function cv(n){const{inputs:t,backend:e,attrs:s}=n,{x:r,filter:o}=t,{strides:i,pad:a,dataFormat:l,dilations:c,dimRoundingMode:u}=s;at([r,o],"conv2d");const h=Ns(l),d=Ce(r.shape,o.shape,i,c,a,u,!1,h),f=d.filterHeight,p=d.filterWidth,m=d.dilationHeight,g=d.dilationWidth,x=d.padInfo.left,b=d.padInfo.top,w=d.dataFormat==="channelsLast",y=new ve(d.outShape,r.dtype),v=ut(r.shape),$=ut(o.shape),N=v[0],T=w?v[1]:v[2],I=w?v[2]:1,k=w?1:v[1],C=y.strides[0],R=w?y.strides[1]:y.strides[2],D=w?y.strides[2]:1,M=w?1:y.strides[1],O=e.data.get(r.dataId).values,z=e.data.get(o.dataId).values,G=y.values;for(let V=0;V<d.batchSize;++V){const U=V*N,j=V*C;for(let K=0;K<d.outHeight;++K){const Y=j+K*R,X=K*d.strideHeight-b;for(let Q=0;Q<f;++Q){const tt=X+Q*m;if(tt<0||tt>=d.inHeight)continue;const nt=Q*$[0],it=U+tt*T;for(let ht=0;ht<d.outWidth;++ht){const ct=Y+ht*D,xt=ht*d.strideWidth-x;for(let mt=0;mt<p;++mt){const Nt=xt+mt*g;if(Nt<0||Nt>=d.inWidth)continue;const wt=nt+mt*$[1],St=it+Nt*I;let Dt=wt;for(let _t=0;_t<d.inChannels;++_t){const Vt=O[St+_t*k];for(let Lt=0;Lt<d.outChannels;++Lt)G[ct+Lt*M]+=Vt*z[Dt+Lt];Dt+=d.outChannels}}}}}}return e.makeTensorInfo(y.shape,y.dtype,G)}const DO={kernelName:wc,backendName:"cpu",kernelFunc:cv};function _O(n){const{inputs:t,backend:e,attrs:s}=n,{x:r,dy:o}=t,{strides:i,pad:a,dataFormat:l,dimRoundingMode:c,filterShape:u}=s;at([r,o],"conv2dBackpropFilter");const h=Ns(l),d=Ce(r.shape,u,i,1,a,c,!1,h),{strideHeight:f,strideWidth:p,filterHeight:m,filterWidth:g}=d,x=d.dataFormat==="channelsLast",b=new ve(d.filterShape,"float32"),w=d.padInfo.left,y=d.padInfo.top,v=e.data.get(r.dataId).values,$=e.data.get(o.dataId).values,N=new ve(r.shape,r.dtype,v),T=new ve(o.shape,o.dtype,$);for(let I=0;I<m;++I){const k=Math.max(0,Math.ceil((y-I)/f)),C=Math.min(d.outHeight,(d.inHeight+y-I)/f);for(let R=0;R<g;++R){const D=Math.max(0,Math.ceil((w-R)/p)),M=Math.min(d.outWidth,(d.inWidth+w-R)/p);for(let O=0;O<d.inChannels;++O)for(let z=0;z<d.outChannels;++z){let G=0;for(let V=0;V<d.batchSize;++V)for(let U=k;U<C;++U){const j=I+U*f-y;for(let K=D;K<M;++K){const Y=R+K*p-w;x?G+=N.get(V,j,Y,O)*T.get(V,U,K,z):G+=N.get(V,O,j,Y)*T.get(V,z,U,K)}}b.set(G,I,R,O,z)}}}return e.makeTensorInfo(b.shape,b.dtype,b.values)}const FO={kernelName:Ed,backendName:"cpu",kernelFunc:_O};function OO(n){const{inputs:t,backend:e,attrs:s}=n,{dy:r,filter:o}=t,{inputShape:i,strides:a,pad:l,dataFormat:c,dimRoundingMode:u}=s;at([r,o],"conv2dBackpropInput");const h=ut(o.shape),d=ut(r.shape);let f=Ns(c);const p=Ce(i,o.shape,a,1,l,u,!1,f),m=new ve(p.inShape,"float32"),g=m.values,x=e.data.get(r.dataId).values,b=e.data.get(o.dataId).values,[w,y,v]=h,{batchSize:$,filterHeight:N,filterWidth:T,inChannels:I,inHeight:k,inWidth:C,outChannels:R,outHeight:D,outWidth:M,strideHeight:O,strideWidth:z}=p;f=p.dataFormat;const G=N-1-p.padInfo.top,V=T-1-p.padInfo.left,U=f==="channelsLast",j=m.strides[0],K=U?m.strides[1]:m.strides[2],Y=U?m.strides[2]:1,X=U?1:m.strides[1],Q=d[0],tt=U?d[1]:d[2],nt=U?d[2]:1,it=U?1:d[1];for(let ht=0;ht<$;++ht)for(let ct=0;ct<I;++ct)for(let xt=0;xt<k;++xt){const mt=xt-G,Nt=Math.max(0,Math.ceil(mt/O)),wt=Math.min(D,(N+mt)/O);for(let St=0;St<C;++St){const Dt=St-V,_t=Math.max(0,Math.ceil(Dt/z)),Vt=Math.min(M,(T+Dt)/z);let Lt=0;for(let oe=Nt;oe<wt;++oe){const Cn=oe*O-mt;for(let Ae=_t;Ae<Vt;++Ae){const sn=Ae*z-Dt,Pe=Q*ht+tt*oe+nt*Ae,$n=w*(N-1-Cn)+y*(T-1-sn)+v*ct;for(let Wn=0;Wn<R;++Wn){const In=x[Pe+it*Wn],Un=b[$n+Wn];Lt+=In*Un}}}const nn=j*ht+K*xt+Y*St+X*ct;g[nn]=Lt}}return e.makeTensorInfo(m.shape,m.dtype,m.values)}const MO={kernelName:vc,backendName:"cpu",kernelFunc:OO};function LO(n){const{inputs:t,backend:e,attrs:s}=n,{x:r,filter:o}=t,{strides:i,pad:a,dilations:l}=s;at([r,o],"conv3d");const c=Xs(r.shape,o.shape,i,l,a),{filterDepth:u,filterHeight:h,filterWidth:d,dilationDepth:f,dilationHeight:p,dilationWidth:m,padInfo:g}=c,x=g.front,b=g.left,w=g.top,y=new ve(c.outShape,r.dtype),v=e.data.get(r.dataId).values,$=e.data.get(o.dataId).values,N=y.values,T=ut(r.shape),I=ut(o.shape);for(let k=0;k<c.batchSize;++k){const C=k*T[0],R=k*y.strides[0];for(let D=0;D<c.outDepth;++D){const M=R+D*y.strides[1],O=D*c.strideDepth-x;for(let z=0;z<u;++z){const G=O+z*f;if(G<0||G>=c.inDepth)continue;const V=z*I[0],U=C+G*T[1];for(let j=0;j<c.outHeight;++j){const K=M+j*y.strides[2],Y=j*c.strideHeight-w;for(let X=0;X<h;++X){const Q=Y+X*p;if(Q<0||Q>=c.inHeight)continue;const tt=V+X*I[1],nt=U+Q*T[2];for(let it=0;it<c.outWidth;++it){const ht=K+it*c.outChannels,ct=it*c.strideWidth-b;for(let xt=0;xt<d;++xt){const mt=ct+xt*m;if(mt<0||mt>=c.inWidth)continue;const Nt=tt+xt*I[2],wt=nt+mt*c.inChannels;let St=Nt;for(let Dt=0;Dt<c.inChannels;++Dt){const _t=v[wt+Dt];for(let Vt=0;Vt<c.outChannels;++Vt)N[ht+Vt]+=_t*$[St+Vt];St+=c.outChannels}}}}}}}}return e.makeTensorInfo(y.shape,y.dtype,y.values)}const PO={kernelName:Cc,backendName:"cpu",kernelFunc:LO};function zO(n){const{inputs:t,backend:e,attrs:s}=n,{x:r,dy:o}=t,{strides:i,pad:a,filterShape:l}=s;at([r,o],"conv3dBackpropFilterV2");const c=ut(r.shape),u=ut(o.shape),h=Xs(r.shape,l,i,1,a),d=h.strideDepth,f=h.strideHeight,p=h.strideWidth,m=h.filterDepth,g=h.filterHeight,x=h.filterWidth,b=new ve(h.filterShape,"float32"),w=b.values,[y,v,$,N]=b.strides,T=e.data.get(o.dataId).values,[I,k,C,R]=u,D=e.data.get(r.dataId).values,[M,O,z,G]=c,V=h.padInfo.front,U=h.padInfo.left,j=h.padInfo.top;for(let K=0;K<m;++K){const Y=Math.max(0,Math.ceil((V-K)/d)),X=Math.min(h.outDepth,(h.inDepth+V-K)/d),Q=K*y;for(let tt=0;tt<g;++tt){const nt=Math.max(0,Math.ceil((j-tt)/f)),it=Math.min(h.outHeight,(h.inHeight+j-tt)/f),ht=tt*v+Q;for(let ct=0;ct<x;++ct){const xt=Math.max(0,Math.ceil((U-ct)/p)),mt=Math.min(h.outWidth,(h.inWidth+U-ct)/p),Nt=ct*$+ht;for(let wt=0;wt<h.inChannels;++wt){const St=wt*N+Nt;for(let Dt=0;Dt<h.outChannels;++Dt){let _t=0;for(let Vt=0;Vt<h.batchSize;++Vt){const Lt=Vt*M,nn=Vt*I;for(let oe=Y;oe<X;++oe){const Ae=(K+oe*d-V)*O+Lt,sn=oe*k+nn;for(let Pe=nt;Pe<it;++Pe){const Wn=(tt+Pe*f-j)*z+Ae,In=Pe*C+sn;for(let Un=xt;Un<mt;++Un){const Po=(ct+Un*p-U)*G+Wn,Rs=Un*R+In;_t+=D[Po+wt]*T[Rs+Dt]}}}}w[St+Dt]=_t}}}}}return e.makeTensorInfo(b.shape,b.dtype,b.values)}const BO={kernelName:Rd,backendName:"cpu",kernelFunc:zO};function VO(n){const{inputs:t,backend:e,attrs:s}=n,{dy:r,filter:o}=t,{pad:i,strides:a,inputShape:l}=s;at([r],"conv3dBackpropInputV2");const c=ut(r.shape),u=ut(o.shape),h=Xs(l,o.shape,a,1,i),d=new ve(h.inShape,"float32"),f=d.values,[p,m,g,x]=d.strides,b=e.data.get(r.dataId).values,[w,y,v,$]=c,N=e.data.get(o.dataId).values,[T,I,k,C]=u,{batchSize:R,filterDepth:D,filterHeight:M,filterWidth:O,inChannels:z,inDepth:G,inHeight:V,inWidth:U,outChannels:j,outDepth:K,outHeight:Y,outWidth:X,strideDepth:Q,strideHeight:tt,strideWidth:nt}=h,it=D-1-h.padInfo.front,ht=M-1-h.padInfo.top,ct=O-1-h.padInfo.left;for(let xt=0;xt<R;++xt)for(let mt=0;mt<z;++mt)for(let Nt=0;Nt<G;++Nt){const wt=Nt-it,St=Math.max(0,Math.ceil(wt/Q)),Dt=Math.min(K,(D+wt)/Q);for(let _t=0;_t<V;++_t){const Vt=_t-ht,Lt=Math.max(0,Math.ceil(Vt/tt)),nn=Math.min(Y,(M+Vt)/tt);for(let oe=0;oe<U;++oe){const Cn=oe-ct,Ae=Math.max(0,Math.ceil(Cn/nt)),sn=Math.min(X,(O+Cn)/nt);let Pe=0;for(let $n=St;$n<Dt;++$n){const Wn=$n*Q-wt;for(let In=Lt;In<nn;++In){const Un=In*tt-Vt;for(let Es=Ae;Es<sn;++Es){const Po=Es*nt-Cn,Rs=w*xt+y*$n+v*In+$*Es,zo=T*(D-1-Wn)+I*(M-1-Un)+k*(O-1-Po)+C*mt;for(let Gr=0;Gr<j;++Gr){const Bo=b[Rs+Gr],Gu=N[zo+Gr];Pe+=Bo*Gu}}}}f[p*xt+m*Nt+g*_t+x*oe+mt]=Pe}}}return e.makeTensorInfo(d.shape,d.dtype,d.values)}const WO={kernelName:Ad,backendName:"cpu",kernelFunc:VO};const UO=Bt(Fi,n=>Math.cos(n)),GO={kernelName:Fi,backendName:"cpu",kernelFunc:UO};const HO=Bt(Oi,n=>Math.cosh(n)),qO={kernelName:Oi,backendName:"cpu",kernelFunc:HO};function jO(n){const{inputs:t,backend:e,attrs:s}=n,{image:r,boxes:o,boxInd:i}=t,{cropSize:a,method:l,extrapolationValue:c}=s,[u,h,d,f]=r.shape,p=o.shape[0],[m,g]=a,x=$t([p,m,g,f],"float32"),b=e.data.get(o.dataId).values,w=e.data.get(i.dataId).values,y=e.data.get(r.dataId).values,v=ut(r.shape),$=ut(x.shape);for(let N=0;N<p;N++){const T=N*4,I=b[T],k=b[T+1],C=b[T+2],R=b[T+3],D=w[N];if(D>=u)continue;const M=m>1?(C-I)*(h-1)/(m-1):0,O=g>1?(R-k)*(d-1)/(g-1):0;for(let z=0;z<m;z++){const G=m>1?I*(h-1)+z*M:.5*(I+C)*(h-1);if(G<0||G>h-1){for(let V=0;V<g;V++)for(let U=0;U<f;U++){const j=U+V*$[2]+z*$[1]+N*$[0];x.values[j]=c}continue}if(l==="bilinear"){const V=Math.floor(G),U=Math.ceil(G),j=G-V;for(let K=0;K<g;K++){const Y=g>1?k*(d-1)+K*O:.5*(k+R)*(d-1);if(Y<0||Y>d-1){for(let nt=0;nt<f;nt++){const it=nt+K*$[2]+z*$[1]+N*$[0];x.values[it]=c}continue}const X=Math.floor(Y),Q=Math.ceil(Y),tt=Y-X;for(let nt=0;nt<f;nt++){let it=nt+X*v[2]+V*v[1]+D*v[0];const ht=y[it];it=nt+Q*v[2]+V*v[1]+D*v[0];const ct=y[it];it=nt+X*v[2]+U*v[1]+D*v[0];const xt=y[it];it=nt+Q*v[2]+U*v[1]+D*v[0];const mt=y[it],Nt=ht+(ct-ht)*tt,wt=xt+(mt-xt)*tt;it=nt+K*$[2]+z*$[1]+N*$[0],x.values[it]=Nt+(wt-Nt)*j}}}else for(let V=0;V<g;++V){const U=g>1?k*(d-1)+V*O:.5*(k+R)*(d-1);if(U<0||U>d-1){for(let Y=0;Y<f;Y++){const X=Y+V*$[2]+z*$[1]+N*$[0];x.values[X]=c}continue}const j=Math.round(U),K=Math.round(G);for(let Y=0;Y<f;Y++){const X=Y+j*v[2]+K*v[1]+D*v[0],Q=Y+V*$[2]+z*$[1]+N*$[0];x.values[Q]=y[X]}}}}return e.makeTensorInfo(x.shape,x.dtype,x.values)}const XO={kernelName:_d,backendName:"cpu",kernelFunc:jO};function KO(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{axis:o,exclusive:i,reverse:a}=s;at(r,"cumprod");const l=Jt([o],r.shape.length);let c=r;l!=null&&(c=He({inputs:{x:r},backend:e,attrs:{perm:l}}));const u=ne(1,r.shape.length)[0];if(u!==c.shape.length-1)throw new Error(`backend.cumprod in CPU expects an inner-most axis=${c.shape.length-1} but got axis=${u}`);const h=Qe(c.dtype,"int32"),d=bd(q(c.shape),h),f=e.data.get(c.dataId).values,p=c.shape[c.shape.length-1],m=a?(x,b)=>x+p-b-1:(x,b)=>x+b;for(let x=0;x<f.length;x+=p)for(let b=0;b<p;b++){const w=m(x,b);if(b===0)d[w]=i?1:f[w];else{const y=m(x,b-1);d[w]=i?f[y]*d[y]:f[w]*d[y]}}const g=e.makeTensorInfo(c.shape,h,d);if(l!=null){const x=Ks(l),b=He({inputs:{x:g},backend:e,attrs:{perm:x}});return e.disposeIntermediateTensorInfo(g),e.disposeIntermediateTensorInfo(c),b}return g}const YO={kernelName:Dd,backendName:"cpu",kernelFunc:KO};function ZO(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{axis:o,exclusive:i,reverse:a}=s;at(r,"cumsum");const l=Jt([o],r.shape.length);let c=r;l!=null&&(c=He({inputs:{x:r},backend:e,attrs:{perm:l}}));const u=ne(1,r.shape.length)[0];if(u!==c.shape.length-1)throw new Error(`backend.cumsum in CPU expects an inner-most axis=${c.shape.length-1} but got axis=${u}`);const h=Qe(c.dtype,"int32"),d=Se(q(c.shape),h),f=e.data.get(c.dataId).values,p=c.shape[c.shape.length-1],m=a?(x,b)=>x+p-b-1:(x,b)=>x+b;for(let x=0;x<f.length;x+=p)for(let b=0;b<p;b++){const w=m(x,b);if(b===0)d[w]=i?0:f[w];else{const y=m(x,b-1);d[w]=i?f[y]+d[y]:f[w]+d[y]}}const g=e.makeTensorInfo(c.shape,h,d);if(l!=null){const x=Ks(l),b=He({inputs:{x:g},backend:e,attrs:{perm:x}});return e.disposeIntermediateTensorInfo(g),e.disposeIntermediateTensorInfo(c),b}return g}const JO={kernelName:$c,backendName:"cpu",kernelFunc:ZO};function QO(n){const{inputs:t,backend:e,attrs:s}=n,{x:r,weights:o}=t,{size:i,binaryOutput:a}=s;if(r.shape.length===1){const l=e.data.get(r.dataId).values,c=e.data.get(o.dataId).values,u=Lp(l,c,o.dtype,o.shape,i);return e.makeTensorInfo([i],o.dtype,u)}else if(r.shape.length===2){const l=e.bufferSync(r),c=e.bufferSync(o),u=uw(l,c,i,a);return e.makeTensorInfo(u.shape,o.dtype,u.values)}throw new Error(`Error in denseBincount: input must be at most rank 2, but got rank${r.shape.length}.`)}const tM={kernelName:Fd,backendName:"cpu",kernelFunc:QO};function eM(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{blockSize:o,dataFormat:i}=s;S(i==="NHWC",()=>`Only NHWC dataFormat supported on CPU for depthToSpace. Got ${i}`);const a=r.shape[0],l=r.shape[1],c=r.shape[2],u=r.shape[3],h=l*o,d=c*o,f=u/(o*o),p=e.data.get(r.dataId).values,m=new Float32Array(a*h*d*f);let g=0;for(let x=0;x<a;++x)for(let b=0;b<h;++b){const w=Math.floor(b/o),y=b%o;for(let v=0;v<d;++v){const $=Math.floor(v/o),N=v%o,T=(y*o+N)*f;for(let I=0;I<f;++I){const C=I+T+u*($+c*(w+l*x));m[g++]=p[C]}}}return e.makeTensorInfo([a,h,d,f],r.dtype,m)}const nM={kernelName:Od,backendName:"cpu",kernelFunc:eM};function uv(n){const{inputs:t,backend:e,attrs:s}=n,{x:r,filter:o}=t,{strides:i,pad:a,dilations:l,dimRoundingMode:c}=s;at([r,o],"depthwiseConv2DNative");const u=ut(r.shape),h=ut(o.shape);let d=l;d==null&&(d=[1,1]),S(Te(i,d),()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${i} and dilations '${d}'`);const f=Ce(r.shape,o.shape,i,d,a,c,!0),{filterHeight:p,filterWidth:m,dilationHeight:g,dilationWidth:x,padInfo:b}=f,w=b.left,y=b.top,v=f.outChannels/f.inChannels,$=new ve(f.outShape,r.dtype),N=e.data.get(r.dataId).values,T=e.data.get(o.dataId).values,I=$.values;for(let k=0;k<f.batchSize;++k){const C=k*u[0],R=k*$.strides[0];for(let D=0;D<f.outHeight;++D){const M=R+D*$.strides[1],O=D*f.strideHeight-y;for(let z=0;z<p;++z){const G=O+z*g;if(G<0||G>=f.inHeight)continue;const V=z*h[0],U=C+G*u[1];for(let j=0;j<f.outWidth;++j){const K=M+j*$.strides[2],Y=j*f.strideWidth-w;for(let X=0;X<m;++X){const Q=Y+X*x;if(Q<0||Q>=f.inWidth)continue;const tt=V+X*h[1],nt=U+Q*f.inChannels;let it=K,ht=tt;for(let ct=0;ct<f.inChannels;++ct){const xt=N[nt+ct];for(let mt=0;mt<v;++mt)I[it+mt]+=xt*T[ht+mt];it+=v,ht+=v}}}}}}return e.makeTensorInfo($.shape,$.dtype,$.values)}const sM={kernelName:Ic,backendName:"cpu",kernelFunc:uv};function rM(n){const{inputs:t,backend:e,attrs:s}=n,{x:r,dy:o}=t,{strides:i,dilations:a,pad:l,dimRoundingMode:c,filterShape:u}=s;at([r,o],"depthwiseConv2dNativeBackpropFilter");const h=Ce(r.shape,u,i,a,l,c,!0),{strideHeight:d,strideWidth:f,filterHeight:p,filterWidth:m}=h,g=new ve(h.filterShape,"float32"),x=h.padInfo.left,b=h.padInfo.top,w=h.outChannels/h.inChannels,y=e.data.get(r.dataId).values,v=new ve(r.shape,r.dtype,y),$=e.data.get(o.dataId).values,N=new ve(o.shape,o.dtype,$);for(let T=0;T<p;++T){const I=Math.max(0,Math.ceil((b-T)/d)),k=Math.min(h.outHeight,(h.inHeight+b-T)/d);for(let C=0;C<m;++C){const R=Math.max(0,Math.ceil((x-C)/f)),D=Math.min(h.outWidth,(h.inWidth+x-C)/f);for(let M=0;M<h.outChannels;++M){const O=Math.trunc(M/w),z=M%w;let G=0;for(let V=0;V<h.batchSize;++V)for(let U=I;U<k;++U){const j=T+U*d-b;for(let K=R;K<D;++K){const Y=C+K*f-x;G+=v.get(V,j,Y,O)*N.get(V,U,K,M)}}g.set(G,T,C,O,z)}}}return e.makeTensorInfo(g.shape,g.dtype,g.values)}const oM={kernelName:Md,backendName:"cpu",kernelFunc:rM};function iM(n){const{inputs:t,backend:e,attrs:s}=n,{dy:r,filter:o}=t,{strides:i,dilations:a,pad:l,dimRoundingMode:c,inputShape:u}=s;at([r,o],"depthwiseConv2DNativeBackpropInput");const h=ut(r.shape),d=ut(o.shape),f=Ce(u,o.shape,i,a,l,c,!0),p=new ve(f.inShape,"float32"),m=p.values,[g,x,b]=p.strides,w=e.data.get(r.dataId).values,[y,v,$]=h,N=e.data.get(o.dataId).values,[T,I,k]=d,{batchSize:C,filterHeight:R,filterWidth:D,inChannels:M,inHeight:O,inWidth:z,outChannels:G,outHeight:V,outWidth:U,strideHeight:j,strideWidth:K}=f,Y=R-1-f.padInfo.top,X=D-1-f.padInfo.left,Q=G/M;for(let tt=0;tt<C;++tt)for(let nt=0;nt<M;++nt)for(let it=0;it<O;++it){const ht=it-Y,ct=Math.max(0,Math.ceil(ht/j)),xt=Math.min(V,(R+ht)/j);for(let mt=0;mt<z;++mt){const Nt=mt-X,wt=Math.max(0,Math.ceil(Nt/K)),St=Math.min(U,(D+Nt)/K);let Dt=0;for(let _t=ct;_t<xt;++_t){const Vt=_t*j-ht;for(let Lt=wt;Lt<St;++Lt){const nn=Lt*K-Nt,oe=y*tt+v*_t+$*Lt,Cn=T*(R-1-Vt)+I*(D-1-nn)+k*nt;for(let Ae=0;Ae<Q;++Ae){const sn=nt*Q+Ae,Pe=w[oe+sn],$n=N[Cn+Ae];Dt+=Pe*$n}}}m[g*tt+x*it+b*mt+nt]=Dt}}return e.makeTensorInfo(p.shape,p.dtype,p.values)}const aM={kernelName:Ld,backendName:"cpu",kernelFunc:iM};function lM(n){const{inputs:t,backend:e}=n,{x:s}=t,r=q(s.shape),o=e.data.get(s.dataId).values,i=$t([r,r],s.dtype),a=i.values;for(let c=0;c<o.length;c++)a[c*r+c]=o[c];const l=[...s.shape,...s.shape];return e.makeTensorInfo(l,i.dtype,i.values)}const cM={kernelName:Ox,backendName:"cpu",kernelFunc:lM};const uM={kernelName:kc,backendName:"cpu",kernelFunc:({inputs:n,backend:t,attrs:e})=>{const{x:s,filter:r}=n,{strides:o,pad:i,dilations:a}=e,l=t,c=l.data.get(s.dataId).values,u=s.shape.length,h=l.data.get(r.dataId).values,d=r.shape.length,{batchSize:f,inHeight:p,inWidth:m,inChannels:g,outHeight:x,outWidth:b,padInfo:w,strideHeight:y,strideWidth:v,filterHeight:$,filterWidth:N,dilationHeight:T,dilationWidth:I,outShape:k}=ya(s.shape,r.shape,o,i,"NHWC",a),C=q(k),R=k.length,D=Qt(s.dtype,C);for(let O=0;O<f;++O)for(let z=0;z<x;++z){const G=z*y-w.top;for(let V=0;V<b;++V){const U=V*v-w.left;for(let j=0;j<g;++j){let K=Number.MIN_SAFE_INTEGER;for(let X=0;X<$;++X){const Q=G+X*T;if(Q>=0&&Q<p)for(let tt=0;tt<N;++tt){const nt=U+tt*I;if(nt>=0&&nt<m){const it=es([O,Q,nt,j],u,ut(s.shape)),ht=es([X,tt,j],d,ut(r.shape)),ct=c[it]+h[ht];ct>K&&(K=ct)}}}const Y=es([O,z,V,j],R,ut(k));D[Y]=K}}}return{dataId:l.write(Fr(D,s.dtype),k,s.dtype),shape:k,dtype:s.dtype}}};const hM={kernelName:kh,backendName:"cpu",kernelFunc:({inputs:n,backend:t,attrs:e})=>{const{x:s,filter:r,dy:o}=n,{strides:i,pad:a,dilations:l}=e,c=t,u=_n(s.shape,c.data.get(s.dataId).values),h=_n(r.shape,c.data.get(r.dataId).values),{batchSize:d,inHeight:f,inWidth:p,inChannels:m,outHeight:g,outWidth:x,padInfo:b,strideHeight:w,strideWidth:y,filterHeight:v,filterWidth:$,dilationHeight:N,dilationWidth:T,outShape:I}=ya(s.shape,r.shape,i,a,"NHWC",l);S(o.rank===I.length,()=>`Error in ${kh}, dy must have the same rank as output ${I.length}, but got ${o.rank}`);const k=_n(I,c.data.get(o.dataId).values),C=Ax(r.shape,r.dtype);for(let D=0;D<d;++D)for(let M=0;M<g;++M){const O=M*w-b.top;for(let z=0;z<x;++z){const G=z*y-b.left;for(let V=0;V<m;++V){let U=Number.MIN_SAFE_INTEGER,j=0,K=0;for(let Y=0;Y<v;++Y){const X=O+Y*N;if(X>=0&&X<f)for(let Q=0;Q<$;++Q){const tt=G+Q*T;if(tt>=0&&tt<p){const nt=u[D][X][tt][V]+h[Y][Q][V];nt>U&&(U=nt,j=Y,K=Q)}}}C[j][K][V]+=k[D][M][z][V]}}}return{dataId:c.write(Fr(C,s.dtype),r.shape,r.dtype),shape:r.shape,dtype:r.dtype}}};const dM={kernelName:Ih,backendName:"cpu",kernelFunc:({inputs:n,backend:t,attrs:e})=>{const{x:s,filter:r,dy:o}=n,{strides:i,pad:a,dilations:l}=e,c=t,u=_n(s.shape,c.data.get(s.dataId).values),h=_n(r.shape,c.data.get(r.dataId).values),{batchSize:d,inHeight:f,inWidth:p,inChannels:m,outHeight:g,outWidth:x,padInfo:b,strideHeight:w,strideWidth:y,filterHeight:v,filterWidth:$,dilationHeight:N,dilationWidth:T,outShape:I}=ya(s.shape,r.shape,i,a,"NHWC",l);S(o.rank===I.length,()=>`Error in ${Ih}, dy must have the same rank as output ${I.length}, but got ${o.rank}`);const k=_n(I,c.data.get(o.dataId).values),C=Ax(s.shape,s.dtype);for(let D=0;D<d;++D)for(let M=0;M<g;++M){const O=M*w-b.top;for(let z=0;z<x;++z){const G=z*y-b.left;for(let V=0;V<m;++V){let U=Number.MIN_SAFE_INTEGER,j=O<0?0:O,K=G<0?0:G;for(let Y=0;Y<v;++Y){const X=O+Y*N;if(X>=0&&X<f)for(let Q=0;Q<$;++Q){const tt=G+Q*T;if(tt>=0&&tt<p){const nt=u[D][X][tt][V]+h[Y][Q][V];nt>U&&(U=nt,j=X,K=tt)}}}C[D][j][K][V]+=k[D][M][z][V]}}}return{dataId:c.write(Fr(C,s.dtype),s.shape,s.dtype),shape:s.shape,dtype:s.dtype}}};function fM(n){const{inputs:t,backend:e,attrs:s}=n,{image:r}=t,{canvas:o,options:i}=s,{contextOptions:a,imageOptions:l}=i||{},c=l?.alpha||1,u=a?.contextType||"2d";if(u!=="2d")throw new Error(`Context type ${a.contextType} is not supported by the CPU backend.`);const h=o.getContext(u,a?.contextAttributes||{});if(h==null)throw new Error(`Could not get the context with ${u} type.`);const[d,f]=r.shape.slice(0,2),p=r.shape.length===2?1:r.shape[2],m=e.data.get(r.dataId).values,g=r.dtype==="float32"?255:1,x=new Uint8ClampedArray(f*d*4);for(let w=0;w<d*f;++w){const y=[0,0,0,255*c];for(let $=0;$<p;$++){const N=m[w*p+$];if(r.dtype==="float32"){if(N<0||N>1)throw new Error(`Tensor values for a float32 Tensor must be in the range [0 - 1] but encountered ${N}.`)}else if(r.dtype==="int32"&&(N<0||N>255))throw new Error(`Tensor values for a int32 Tensor must be in the range [0 - 255] but encountered ${N}.`);p===1?(y[0]=N*g,y[1]=N*g,y[2]=N*g):y[$]=N*g}const v=w*4;x[v+0]=Math.round(y[0]),x[v+1]=Math.round(y[1]),x[v+2]=Math.round(y[2]),x[v+3]=Math.round(y[3])}o.width=f,o.height=d;const b=new ImageData(x,f,d);return h.putImageData(b,0,0),r}const pM={kernelName:S$,backendName:"cpu",kernelFunc:fM};function Oa(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{axis:o,keepDims:i}=s;at(r,"sum");let a;r.dtype==="bool"?a=Gs({inputs:{x:r},backend:e,attrs:{dtype:"int32"}}):a=ds({inputs:{x:r},backend:e});const l=a.shape.length,c=It(o,a.shape),u=Jt(c,l);let h=c,d=a;u!=null&&(d=He({inputs:{x:a},backend:e,attrs:{perm:u}}),h=ne(h.length,l)),$e("sum",h,d.shape.length);const[f,p]=ye(d.shape,h),m=Qe(d.dtype,"int32");let g=ql(e,f,m);const x=q(p),b=e.data.get(g.dataId).values,w=e.data.get(d.dataId).values;for(let y=0;y<b.length;++y){const v=y*x;let $=0;for(let N=0;N<x;++N)$+=w[v+N];b[y]=$}if(i){const y=ae(g.shape,c),v=g;g=qt({inputs:{x:g},backend:e,attrs:{shape:y}}),e.disposeIntermediateTensorInfo(v)}return e.disposeIntermediateTensorInfo(a),u!=null&&e.disposeIntermediateTensorInfo(d),g}const mM={kernelName:ru,backendName:"cpu",kernelFunc:Oa};function gM(n){const{inputs:t,backend:e,attrs:s}=n,{equation:r}=s,o=t,{allDims:i,summedDims:a,idDims:l}=ap(r,o.length);cp(i.length,l,o);const{path:c,steps:u}=up(a,l),h=u.length;let d=null,f=i.length;const p=[];for(let m=0;m<h;++m){for(const g of u[m]){const{permutationIndices:x,expandDims:b}=lp(f,l[g]);let w;hp(x)?w=o[g]:(w=He({inputs:{x:o[g]},backend:e,attrs:{perm:x}}),p.push(w));const y=w.shape.slice();for(let v=0;v<b.length;++v)y.splice(b[v],0,1);Mt(w.shape,y)||(w=qt({inputs:{x:w},backend:e,attrs:{shape:y}}),p.push(w)),d===null?d=w:(d=Ou({inputs:{a:w,b:d},backend:e}),p.push(d))}m<h-1&&(c[m]>=0&&(d=Oa({inputs:{x:d},backend:e,attrs:{axis:c[m]-(i.length-f),keepDims:!1}}),p.push(d)),f--)}for(const m of p)m!==d&&e.disposeIntermediateTensorInfo(m);return d}const xM={kernelName:Pd,backendName:"cpu",kernelFunc:gM};function bM(n){const{inputs:t,backend:e}=n,{dy:s,y:r}=t;at([s,r],"eluGrad");const o=new Float32Array(q(r.shape)),i=e.data.get(r.dataId).values,a=e.data.get(s.dataId).values;for(let l=0;l<i.length;++l){const c=i[l];c>=0?o[l]=a[l]:o[l]=a[l]*(c+1)}return e.makeTensorInfo(r.shape,"float32",o)}const yM={kernelName:zd,backendName:"cpu",kernelFunc:bM};const wM=tp,vM=ep,CM=np,$M=sp,IM=rp,kM=op,SM=Bt(Pi,n=>{const t=Math.sign(n),e=Math.abs(n),s=1/(1+wM*e);return t*(1-((((kM*s+IM)*s+$M)*s+CM)*s+vM)*s*Math.exp(-e*e))}),NM={kernelName:Pi,backendName:"cpu",kernelFunc:SM};function Kl(n){const{inputs:t,backend:e,attrs:s}=n,{input:r}=t,{dim:o}=s,i=r.shape.length,a=r.shape.slice();let l=o;return o<0&&(S(-(i+1)<=o,()=>`Axis must be in the interval [${-(i+1)}, ${i}]`),l=i+o+1),a.splice(l,0,1),qt({inputs:{x:r},backend:e,attrs:{shape:a}})}const TM={kernelName:Nc,backendName:"cpu",kernelFunc:Kl};const EM=re((n,t)=>n/t),Up=pe(Mi,EM),Yh={kernelName:Mi,backendName:"cpu",kernelFunc:Up};function hv(n,t,e){const s=n.shape,r=s[0],o=s[1],i=e.data.get(n.dataId),a=i.complexTensorInfos.real,l=i.complexTensorInfos.imag,c=[r,o],u=q(c),h=ke("float32",u),d=ke("float32",u);for(let g=0;g<r;g++){const x=Er({inputs:{x:a},backend:e,attrs:{begin:[g,0],size:[1,o]}}),b=Er({inputs:{x:l},backend:e,attrs:{begin:[g,0],size:[1,o]}}),w=Ye({inputs:{real:x,imag:b},backend:e}),{real:y,imag:v}=RM(w,t,e),$=Cs(y,v);for(let N=0;N<o;N++){const T=ip($,N);h[g*o+N]=T.real,d[g*o+N]=T.imag}e.disposeIntermediateTensorInfo(x),e.disposeIntermediateTensorInfo(b),e.disposeIntermediateTensorInfo(w)}const f=e.makeTensorInfo(c,"float32",h),p=e.makeTensorInfo(c,"float32",d),m=Ye({inputs:{real:f,imag:p},backend:e});return e.disposeIntermediateTensorInfo(f),e.disposeIntermediateTensorInfo(p),m}function RM(n,t,e){const s=q(n.shape),r=e.data.get(n.dataId),o=e.data.get(r.complexTensorInfos.real.dataId).values,i=e.data.get(r.complexTensorInfos.imag.dataId).values;if(AM(s)){const a=Zh(o,i,s,t,e),l=[n.shape[0],n.shape[1]];if(t){const c=e.makeTensorInfo(l,"float32",a.real),u=e.makeTensorInfo(l,"float32",a.imag),h=e.makeTensorInfo([],"float32",qs(s,"float32")),d=ds({inputs:{x:h},backend:e}),f=Yh.kernelFunc({inputs:{a:c,b:h},backend:e}),p=Yh.kernelFunc({inputs:{a:u,b:d},backend:e}),m=e.data.get(f.dataId).values,g=e.data.get(p.dataId).values;return e.disposeIntermediateTensorInfo(c),e.disposeIntermediateTensorInfo(u),e.disposeIntermediateTensorInfo(h),e.disposeIntermediateTensorInfo(d),e.disposeIntermediateTensorInfo(f),e.disposeIntermediateTensorInfo(p),{real:m,imag:g}}return a}else{const a=Cs(o,i),l=DM(a,s,t);return Ib(l)}}function AM(n){return(n&n-1)===0}function Zh(n,t,e,s,r){if(e===1)return{real:n,imag:t};const o=Cs(n,t),i=e/2,a=kb(o),l=a.real,c=a.imag,u=[l.length],h=r.makeTensorInfo(u,"float32",l),d=r.makeTensorInfo(u,"float32",c),f=Ye({inputs:{real:h,imag:d},backend:r}),p=Sb(o),m=p.real,g=p.imag,x=[m.length],b=r.makeTensorInfo(x,"float32",m),w=r.makeTensorInfo(x,"float32",g),y=Ye({inputs:{real:b,imag:w},backend:r}),v=Zh(l,c,i,s,r),$=v.real,N=v.imag,T=[$.length],I=r.makeTensorInfo(T,"float32",$),k=r.makeTensorInfo(T,"float32",N),C=Ye({inputs:{real:I,imag:k},backend:r}),R=Zh(m,g,i,s,r),D=R.real,M=R.imag,O=[D.length],z=r.makeTensorInfo(O,"float32",D),G=r.makeTensorInfo(O,"float32",M),V=Ye({inputs:{real:z,imag:G},backend:r}),U=Tb(e,s),j=[U.real.length],K=r.makeTensorInfo(j,"float32",U.real),Y=r.makeTensorInfo(j,"float32",U.imag),X=Ye({inputs:{real:K,imag:Y},backend:r}),Q=Ou({inputs:{a:X,b:V},backend:r}),tt=po({inputs:{a:C,b:Q},backend:r}),nt=Vp({inputs:{a:C,b:Q},backend:r}),it=Tr({inputs:{input:tt},backend:r}),ht=Tr({inputs:{input:nt},backend:r}),ct=mo({inputs:{input:tt},backend:r}),xt=mo({inputs:{input:nt},backend:r}),mt=go({inputs:[it,ht],backend:r,attrs:{axis:0}}),Nt=go({inputs:[ct,xt],backend:r,attrs:{axis:0}}),wt=r.data.get(mt.dataId).values,St=r.data.get(Nt.dataId).values;return r.disposeIntermediateTensorInfo(h),r.disposeIntermediateTensorInfo(d),r.disposeIntermediateTensorInfo(f),r.disposeIntermediateTensorInfo(b),r.disposeIntermediateTensorInfo(w),r.disposeIntermediateTensorInfo(y),r.disposeIntermediateTensorInfo(I),r.disposeIntermediateTensorInfo(k),r.disposeIntermediateTensorInfo(C),r.disposeIntermediateTensorInfo(z),r.disposeIntermediateTensorInfo(G),r.disposeIntermediateTensorInfo(V),r.disposeIntermediateTensorInfo(K),r.disposeIntermediateTensorInfo(Y),r.disposeIntermediateTensorInfo(X),r.disposeIntermediateTensorInfo(Q),r.disposeIntermediateTensorInfo(tt),r.disposeIntermediateTensorInfo(nt),r.disposeIntermediateTensorInfo(it),r.disposeIntermediateTensorInfo(ct),r.disposeIntermediateTensorInfo(ht),r.disposeIntermediateTensorInfo(xt),r.disposeIntermediateTensorInfo(mt),r.disposeIntermediateTensorInfo(Nt),{real:wt,imag:St}}function DM(n,t,e){const s=new Float32Array(t*2);for(let r=0;r<t;r++){let o=0,i=0;for(let a=0;a<t;a++){const l=Eb(r*a,t,e),c=ip(n,a);o+=c.real*l.real-c.imag*l.imag,i+=c.real*l.imag+c.imag*l.real}e&&(o/=t,i/=t),Nb(s,o,i,r)}return s}function _M(n){const{inputs:t,backend:e}=n,{input:s}=t,r=q(s.shape),o=s.shape[s.shape.length-1],i=r/o,a=qt({inputs:{x:s},backend:e,attrs:{shape:[i,o]}}),l=hv(a,!1,e),c=qt({inputs:{x:l},backend:e,attrs:{shape:s.shape}});return e.disposeIntermediateTensorInfo(a),e.disposeIntermediateTensorInfo(l),c}const FM={kernelName:Bd,backendName:"cpu",kernelFunc:_M};function Gp(n){const{backend:t,attrs:e}=n,{shape:s,value:r,dtype:o}=e,i=o||Co(r),a=Qt(i,q(s));return MM(a,r,i),t.makeTensorInfo(s,i,a)}const OM={kernelName:Vd,backendName:"cpu",kernelFunc:Gp};function MM(n,t,e){n.fill(t)}const LM={kernelName:Wd,backendName:"cpu",kernelFunc:({inputs:n,attrs:t,backend:e})=>{const{image:s}=n,r=e,o=ke(s.dtype,q(s.shape)),[i,a,l,c]=s.shape,u=r.data.get(s.dataId).values;for(let d=0;d<i;d++){const f=d*l*a*c;for(let p=0;p<a;p++){const m=p*(l*c);for(let g=0;g<l;g++){const x=g*c;for(let b=0;b<c;b++){const w=Math.round(l-g-1),y=f+m+x+b;let v=u[y];if(w>=0&&w<l){const $=w*c,N=f+m+$+b;v=u[N]}o[y]=v}}}}return{dataId:r.write(o,s.shape,s.dtype),shape:s.shape,dtype:s.dtype}}};function PM(n){const{inputs:t,backend:e,attrs:s}=n,{x:r,filter:o,bias:i,preluActivationWeights:a}=t,{strides:l,pad:c,dataFormat:u,dilations:h,dimRoundingMode:d,activation:f,leakyreluAlpha:p}=s;let m=cv({inputs:{x:r,filter:o},backend:e,attrs:{strides:l,pad:c,dataFormat:u,dilations:h,dimRoundingMode:d}});if(i){const g=m;if(u==="NCHW"&&i.shape.length===1&&i.shape[0]!==1){const x=qt({inputs:{x:i},backend:e,attrs:{shape:[i.shape[0],1,1]}});m=po({inputs:{a:m,b:x},backend:e}),e.disposeIntermediateTensorInfo(x)}else m=po({inputs:{a:m,b:i},backend:e});e.disposeIntermediateTensorInfo(g)}if(f){const g=m;if(u==="NCHW"&&f==="prelu"&&a.shape.length===1&&a.shape[0]!==1){const x=qt({inputs:{x:a},backend:e,attrs:{shape:[a.shape[0],1,1]}});m=Xl(e,m,f,x,p),e.disposeIntermediateTensorInfo(x)}else m=Xl(e,m,f,a,p);e.disposeIntermediateTensorInfo(g)}return m}const zM={kernelName:Nl,backendName:"cpu",kernelFunc:PM};function BM(n){const{inputs:t,backend:e,attrs:s}=n,{x:r,filter:o,bias:i,preluActivationWeights:a}=t,{strides:l,pad:c,dataFormat:u,dilations:h,dimRoundingMode:d,activation:f,leakyreluAlpha:p}=s;let m=uv({inputs:{x:r,filter:o},backend:e,attrs:{strides:l,pad:c,dataFormat:u,dilations:h,dimRoundingMode:d}});if(i){const g=m;m=po({inputs:{a:m,b:i},backend:e}),e.disposeIntermediateTensorInfo(g)}if(f){const g=m;m=Xl(e,m,f,a,p),e.disposeIntermediateTensorInfo(g)}return m}const VM={kernelName:t0,backendName:"cpu",kernelFunc:BM};function WM(n){const{inputs:t,backend:e}=n,{params:s,indices:r}=t,o=q(s.shape),i=r.shape,a=i[i.length-1],[l,c,u,h]=Uf(s,r);if(c===0)return e.makeTensorInfo(l,s.dtype,[]);const d=e.data.get(r.dataId).values,f=e.bufferSync(s),p=vw(d,f,s.dtype,c,a,u,h,s.shape,o);return e.makeTensorInfo(l,s.dtype,p.values)}const UM={kernelName:Mx,backendName:"cpu",kernelFunc:WM};function GM(n){const{inputs:t,backend:e,attrs:s}=n,{x:r,indices:o}=t,{axis:i,batchDims:a}=s;at([r,o],"gatherV2");const l=It(i,r.shape)[0],c=e.data.get(o.dataId).values,u=r.shape[l];for(let y=0;y<c.length;++y){const v=c[y];S(v<=u-1&&v>=0,()=>`GatherV2: the index value ${v} is not in [0, ${u-1}]`)}let h=a;a==null&&(h=0);const d=q(o.shape),f=fp(r,o,l,h),p=qt({inputs:{x:r},backend:e,attrs:{shape:[f.batchSize,f.outerSize,f.dimSize,f.sliceSize]}}),m=qt({inputs:{x:o},backend:e,attrs:{shape:[f.batchSize,d/f.batchSize]}}),g=[f.batchSize,f.outerSize,d/f.batchSize,f.sliceSize],x=e.bufferSync(m),b=e.bufferSync(p),w=Cw(b,x,g);return e.disposeIntermediateTensorInfo(p),e.disposeIntermediateTensorInfo(m),e.makeTensorInfo(f.outputShape,w.dtype,w.values)}const HM={kernelName:Ec,backendName:"cpu",kernelFunc:GM};function qM(n){const{inputs:t,backend:e}=n,{input:s}=t,r=q(s.shape),o=s.shape[s.shape.length-1],i=r/o,a=qt({inputs:{x:s},backend:e,attrs:{shape:[i,o]}}),l=hv(a,!0,e),c=qt({inputs:{x:l},backend:e,attrs:{shape:s.shape}});return e.disposeIntermediateTensorInfo(a),e.disposeIntermediateTensorInfo(l),c}const jM={kernelName:Ud,backendName:"cpu",kernelFunc:qM};const XM=Bt(Hi,n=>Number.isFinite(n)?1:0,"bool"),KM={kernelName:Hi,backendName:"cpu",kernelFunc:XM};const YM=Bt(qi,n=>Math.abs(n)===1/0?1:0,"bool"),ZM={kernelName:qi,backendName:"cpu",kernelFunc:YM};const JM=Bt(ji,n=>Number.isNaN(n)?1:0,"bool"),QM={kernelName:ji,backendName:"cpu",kernelFunc:JM};function tL(n){const{backend:t,attrs:e}=n,{start:s,stop:r,num:o}=e,i=Nw(s,r,o);return t.makeTensorInfo([i.length],"float32",i)}const eL={kernelName:Lx,backendName:"cpu",kernelFunc:tL};const nL=Bt(Ki,n=>Math.log1p(n)),sL={kernelName:Ki,backendName:"cpu",kernelFunc:nL};const rL=re((n,t)=>n&&t),oL=pe(Fc,rL,null,"bool"),iL={kernelName:Fc,backendName:"cpu",kernelFunc:oL};const aL=Bt(Oc,n=>n?0:1,"bool"),lL={kernelName:Oc,backendName:"cpu",kernelFunc:aL};const cL=re((n,t)=>n||t),uL=pe(Mc,cL,null,"bool"),hL={kernelName:Mc,backendName:"cpu",kernelFunc:uL};function dL(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{depthRadius:o,bias:i,alpha:a,beta:l}=s;at(r,"LRN");const c=r.shape[3],u=c-1,h=e.data.get(r.dataId).values,d=q(r.shape),f=new Float32Array(d);function p(m){const g=m%c;let x=m-g+Math.max(0,g-o);const b=m-g+Math.min(g+o,u);let w=0;for(;x<=b;x++){const y=h[x];w+=y*y}return w}for(let m=0;m<d;m++){const g=p(m),x=h[m]*Math.pow(i+a*g,-l);f[m]=x}return e.makeTensorInfo(r.shape,r.dtype,f)}const fL={kernelName:Lc,backendName:"cpu",kernelFunc:dL};function pL(n){const{inputs:t,backend:e,attrs:s}=n,{x:r,y:o,dy:i}=t,{depthRadius:a,bias:l,alpha:c,beta:u}=s;at(i,"LRNGrad");const h=q(i.shape),d=i.shape[3],f=e.data.get(i.dataId).values,p=e.data.get(r.dataId).values,m=e.data.get(o.dataId).values,g=new Float32Array(h),x=h;for(let b=0;b<x;b++){const w=b%d,y=b-w+Math.max(0,w-a),v=b-w+Math.min(d,w+a+1);let $=0;for(let N=y;N<v;N++)$+=Math.pow(p[N],2);$=c*$+l;for(let N=y;N<v;N++){let T=-2*c*u*p[N]*m[b]/$;b===N&&(T+=Math.pow($,-u)),T*=f[b],g[N]+=T}}return e.makeTensorInfo(i.shape,r.dtype,g)}const mL={kernelName:Hd,backendName:"cpu",kernelFunc:pL};function dv(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{reductionIndices:o,keepDims:i}=s,a=e;let l=r.shape;const c=l.length,u=It(o,l);let h=u;const d=Jt(h,c);let f=a.data.get(r.dataId).values;if(d!=null){const y=new Array(c);for(let v=0;v<y.length;v++)y[v]=l[d[v]];f=zp(f,l,r.dtype,d,y),h=ne(h.length,c),l=y}at(r,"max"),$e("max",h,c);const[p,m]=ye(l,h),g=q(m),x=Ew(f,g,p,r.dtype),b=a.write(x,p,r.dtype);let w=p;return i&&(w=ae(p,u)),{dataId:b,shape:w,dtype:r.dtype}}const gL={kernelName:Pc,backendName:"cpu",kernelFunc:dv};function xL(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t;at(r,"maxPool");const{filterSize:o,strides:i,pad:a,dimRoundingMode:l}=s,c=1;S(Te(i,c),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${i} and dilations '${c}'`);const u=yn(r.shape,o,i,c,a,l);let h;if(u.filterWidth===1&&u.filterHeight===1&&Mt(u.inShape,u.outShape))h=ds({inputs:{x:r},backend:e});else{const d=e.data.get(r.dataId).values,f=ut(r.shape),p=Wp(d,r.shape,r.dtype,f,u,"max");h=e.makeTensorInfo(u.outShape,r.dtype,p.values)}return h}const bL={kernelName:zc,backendName:"cpu",kernelFunc:xL};function yL(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{filterSize:o,strides:i,pad:a,dimRoundingMode:l,dataFormat:c}=s;at(r,"maxPool3d");const u=Ss(r.shape,o,i,1,a,l,c),h=e.data.get(r.dataId).values,d=lv(h,r.shape,r.dtype,ut(r.shape),u,"max");return e.makeTensorInfo(d.shape,"float32",d.values)}const wL={kernelName:Bc,backendName:"cpu",kernelFunc:yL};function vL(n){const{inputs:t,backend:e,attrs:s}=n,{dy:r,input:o}=t,{filterSize:i,strides:a,pad:l,dimRoundingMode:c}=s;at([r,o],"maxPool3DGrad");const u=Ss(o.shape,i,a,1,l,c),h=e.bufferSync(o),d=cO(h,u),f=u.strideDepth,p=u.strideHeight,m=u.strideWidth,g=u.dilationDepth,x=u.dilationHeight,b=u.dilationWidth,w=u.effectiveFilterDepth,y=u.effectiveFilterHeight,v=u.effectiveFilterWidth,$=w-1-u.padInfo.front,N=v-1-u.padInfo.left,T=y-1-u.padInfo.top,I=$t(o.shape,"float32"),k=e.bufferSync(r);for(let C=0;C<u.batchSize;++C)for(let R=0;R<u.inChannels;++R)for(let D=0;D<u.inDepth;++D)for(let M=0;M<u.inHeight;++M)for(let O=0;O<u.inWidth;++O){const z=D-$,G=M-T,V=O-N;let U=0;for(let j=0;j<w;j+=g){const K=(z+j)/f;if(!(K<0||K>=u.outDepth||Math.floor(K)!==K))for(let Y=0;Y<y;Y+=x){const X=(G+Y)/p;if(!(X<0||X>=u.outHeight||Math.floor(X)!==X))for(let Q=0;Q<v;Q+=b){const tt=(V+Q)/m;if(tt<0||tt>=u.outWidth||Math.floor(tt)!==tt)continue;const nt=w*y*v-1-d.get(C,K,X,tt,R),it=j*y*v+Y*v+Q,ht=nt===it?1:0;if(ht===0)continue;const ct=k.get(C,K,X,tt,R);U+=ct*ht}}}I.set(U,C,D,M,O,R)}return e.makeTensorInfo(I.shape,I.dtype,I.values)}const CL={kernelName:jd,backendName:"cpu",kernelFunc:vL};function $L(n){const{inputs:t,backend:e,attrs:s}=n,{dy:r,input:o,output:i}=t,a=o;at([o,i],"maxPoolGrad");const{filterSize:l,strides:c,pad:u,dimRoundingMode:h}=s,d=yn(a.shape,l,c,1,u,h),f=e.data.get(a.dataId).values,p=$t(d.outShape,a.dtype,av(f,a.shape,a.dtype,d).values),m=d.strideHeight,g=d.strideWidth,x=d.dilationHeight,b=d.dilationWidth,w=d.effectiveFilterHeight,y=d.effectiveFilterWidth,v=y-1-d.padInfo.left,$=w-1-d.padInfo.top,N=$t(a.shape,"float32"),T=e.data.get(r.dataId).values,I=$t(r.shape,"float32",T);for(let k=0;k<d.batchSize;++k)for(let C=0;C<d.inChannels;++C)for(let R=0;R<d.inHeight;++R)for(let D=0;D<d.inWidth;++D){const M=R-$,O=D-v;let z=0;for(let G=0;G<w;G+=x){const V=(M+G)/m;if(!(V<0||V>=d.outHeight||Math.floor(V)!==V))for(let U=0;U<y;U+=b){const j=(O+U)/g;if(j<0||j>=d.outWidth||Math.floor(j)!==j)continue;const K=w*y-1-p.get(k,V,j,C),Y=G*y+U,X=K===Y?1:0;if(X===0)continue;const Q=I.get(k,V,j,C);z+=Q*X}}N.set(z,k,R,D,C)}return e.makeTensorInfo(N.shape,N.dtype,N.values)}const IL={kernelName:qd,backendName:"cpu",kernelFunc:$L};function kL(n,t,e,s,r){const o=ut(t),i=Wp(n,t,e,o,r,"max"),a=av(n,t,e,r,!0,s);return[i.values,a.values]}const SL={kernelName:Px,backendName:"cpu",kernelFunc:({inputs:n,attrs:t,backend:e})=>{const{x:s}=n,{filterSize:r,strides:o,pad:i,includeBatchInIndex:a}=t,l=e;at(s,"MaxPoolWithArgmax");const c=l.data.get(s.dataId).values,u=yn(s.shape,r,o,[1,1],i),[h,d]=kL(c,s.shape,s.dtype,a,u),f=l.write(h,u.outShape,s.dtype),p=l.write(d,u.outShape,s.dtype);return[{dataId:f,shape:u.outShape,dtype:s.dtype},{dataId:p,shape:u.outShape,dtype:"int32"}]}};function NL(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{axis:o,keepDims:i}=s,a=It(o,r.shape),c=ye(r.shape,a)[1],u=q(c),h=[],d=e.makeTensorInfo([],"float32",new Float32Array([u]));h.push(d);const f=Gs({inputs:{x:r},backend:e,attrs:{dtype:"float32"}});h.push(f);const p=Up({inputs:{a:f,b:d},backend:e});h.push(p);const m=Oa({inputs:{x:p},backend:e,attrs:{axis:o,keepDims:i}});return h.forEach(g=>e.disposeIntermediateTensorInfo(g)),m}const TL={kernelName:Vc,backendName:"cpu",kernelFunc:NL};function EL(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{axis:o,keepDims:i}=s;at(r,"min");const a=It(o,r.shape);let l=a;const c=Jt(l,r.shape.length);let u=r;c!=null&&(u=He({inputs:{x:r},backend:e,attrs:{perm:c}}),l=ne(l.length,r.shape.length)),$e("min",l,u.shape.length);const[h,d]=ye(u.shape,l),f=q(d),p=Se(q(h),u.dtype),m=e.data.get(u.dataId).values;for(let x=0;x<p.length;++x){const b=x*f;let w=m[b];for(let y=0;y<f;++y){const v=m[b+y];(Number.isNaN(v)||v<w)&&(w=v)}p[x]=w}c!=null&&e.disposeIntermediateTensorInfo(u);const g=e.makeTensorInfo(h,u.dtype,p);if(i){const x=ae(h,a),b=qt({inputs:{x:g},backend:e,attrs:{shape:x}});return e.disposeIntermediateTensorInfo(g),b}return g}const RL={kernelName:Wc,backendName:"cpu",kernelFunc:EL};function AL(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{paddings:o,mode:i}=s;at(r,"mirrorPad");const a=o.map((w,y)=>w[0]+r.shape[y]+w[1]),l=o.map(w=>w[0]),c=o.map((w,y)=>w[0]+r.shape[y]),u=i==="reflect"?0:1,h=e.data.get(r.dataId).values,d=r.shape.length,f=ut(r.shape),p=q(a),m=a.length,g=ut(a),x=ke(r.dtype,p);for(let w=0;w<p;w++){let y=$o(w,m,g);for(let $=0;$<m;$++)y[$]<l[$]?y[$]=l[$]*2-y[$]-u:y[$]>=c[$]&&(y[$]=(c[$]-1)*2-y[$]+u);y=y.map(($,N)=>$-l[N]);const v=es(y,d,f);x[w]=h[v]}return{dataId:e.write(x,a,r.dtype),shape:a,dtype:r.dtype}}const DL={kernelName:Uc,backendName:"cpu",kernelFunc:AL};const _L=re(((n,t)=>{const e=n%t;return n<0&&t<0||n>=0&&t>=0?e:(e+t)%t})),FL=pe(Ji,_L),OL={kernelName:Ji,backendName:"cpu",kernelFunc:FL};function fv(n){const{inputs:t,backend:e,attrs:s}=n,{logits:r}=t,{dim:o}=s,i=r.shape.length;let a=o;if(a===-1&&(a=i-1),a!==i-1)throw Error(`Softmax along a non-last dimension is not yet supported. Logits was rank ${i} and dim was ${a}`);const l=It([a],r.shape),c=dv({inputs:{x:r},backend:e,attrs:{reductionIndices:l,keepDims:!1}}),u=ae(c.shape,l),h=qt({inputs:{x:c},backend:e,attrs:{shape:u}}),d=Vp({inputs:{a:r,b:h},backend:e}),f=xw({inputs:{x:d},backend:e}),p=Oa({inputs:{x:f},backend:e,attrs:{axis:l,keepDims:!1}}),m=qt({inputs:{x:p},backend:e,attrs:{shape:u}}),g=Up({inputs:{a:f,b:m},backend:e});return e.disposeIntermediateTensorInfo(c),e.disposeIntermediateTensorInfo(h),e.disposeIntermediateTensorInfo(d),e.disposeIntermediateTensorInfo(f),e.disposeIntermediateTensorInfo(p),e.disposeIntermediateTensorInfo(m),g}const ML={kernelName:au,backendName:"cpu",kernelFunc:fv};function LL(n){const{inputs:t,backend:e,attrs:s}=n,{logits:r}=t,{numSamples:o,seed:i,normalized:a}=s;at(r,"multinomial");const l=a?r:fv({inputs:{logits:r},backend:e,attrs:{dim:-1}}),c=l.shape[0],u=l.shape[1],h=e.data.get(l.dataId).values,d=[c,o],f=Se(q(d),"int32");for(let p=0;p<c;++p){const m=p*u,g=new Float32Array(u-1);g[0]=h[m];for(let w=1;w<g.length;++w)g[w]=g[w-1]+h[m+w];const x=Tf.alea(i.toString()),b=p*o;for(let w=0;w<o;++w){const y=x();f[b+w]=g.length;for(let v=0;v<g.length;v++)if(y<g[v]){f[b+w]=v;break}}}return a||e.disposeIntermediateTensorInfo(l),e.makeTensorInfo(d,"int32",f)}const PL={kernelName:zx,backendName:"cpu",kernelFunc:LL};const zL=Lf;function BL(n){const{inputs:t,backend:e,attrs:s}=n,{boxes:r,scores:o}=t,{maxOutputSize:i,iouThreshold:a,scoreThreshold:l}=s;at(r,"NonMaxSuppression");const c=e.data.get(r.dataId).values,u=e.data.get(o.dataId).values,{selectedIndices:h}=zL(c,u,i,a,l);return e.makeTensorInfo([h.length],"int32",new Int32Array(h))}const VL={kernelName:Xd,backendName:"cpu",kernelFunc:BL};const WL=Pf;function UL(n){const{inputs:t,backend:e,attrs:s}=n,{boxes:r,scores:o}=t,{maxOutputSize:i,iouThreshold:a,scoreThreshold:l,padToMaxOutputSize:c}=s;at(r,"NonMaxSuppressionPadded");const u=e.data.get(r.dataId).values,h=e.data.get(o.dataId).values,{selectedIndices:d,validOutputs:f}=WL(u,h,i,a,l,c);return[e.makeTensorInfo([d.length],"int32",new Int32Array(d)),e.makeTensorInfo([],"int32",new Int32Array([f]))]}const GL={kernelName:Kd,backendName:"cpu",kernelFunc:UL};const HL=zf;function qL(n){const{inputs:t,backend:e,attrs:s}=n,{boxes:r,scores:o}=t,{maxOutputSize:i,iouThreshold:a,scoreThreshold:l,softNmsSigma:c}=s;at(r,"NonMaxSuppressionWithScore");const u=e.data.get(r.dataId).values,h=e.data.get(o.dataId).values,d=i,f=a,p=l,m=c,{selectedIndices:g,selectedScores:x}=HL(u,h,d,f,p,m);return[e.makeTensorInfo([g.length],"int32",new Int32Array(g)),e.makeTensorInfo([x.length],"float32",new Float32Array(x))]}const jL={kernelName:Yd,backendName:"cpu",kernelFunc:qL};function XL(n){const{inputs:t,backend:e,attrs:s}=n,{indices:r}=t,{dtype:o,depth:i,onValue:a,offValue:l}=s;at(r,"oneHot");const c=q(r.shape),u=new Float32Array(c*i);u.fill(l);const h=e.data.get(r.dataId).values;for(let d=0;d<c;++d)h[d]>=0&&h[d]<i&&(u[d*i+h[d]]=a);return e.makeTensorInfo([...r.shape,i],o,u)}const KL={kernelName:jc,backendName:"cpu",kernelFunc:XL};function Yl(n){const{inputs:t,backend:e}=n,{x:s}=t;if(s.dtype==="string")throw new Error("zerosLike is not supported for string tensors");if(s.dtype==="complex64"){const r=Tr({inputs:{input:s},backend:e}),o=Yl({inputs:{x:r},backend:e}),i=mo({inputs:{input:s},backend:e}),a=Yl({inputs:{x:i},backend:e}),l=Ye({inputs:{real:o,imag:a},backend:e});return e.disposeIntermediateTensorInfo(r),e.disposeIntermediateTensorInfo(o),e.disposeIntermediateTensorInfo(i),e.disposeIntermediateTensorInfo(a),l}else return Gp({backend:e,attrs:{shape:s.shape,value:0,dtype:s.dtype}})}const YL={kernelName:uu,backendName:"cpu",kernelFunc:Yl};function pv(n){const{inputs:t,backend:e}=n,{x:s}=t;if(s.dtype==="string")throw new Error("onesLike is not supported for string tensors");if(s.dtype==="complex64"){const r=Tr({inputs:{input:s},backend:e}),o=pv({inputs:{x:r},backend:e}),i=mo({inputs:{input:s},backend:e}),a=Yl({inputs:{x:i},backend:e}),l=Ye({inputs:{real:o,imag:a},backend:e});return e.disposeIntermediateTensorInfo(r),e.disposeIntermediateTensorInfo(o),e.disposeIntermediateTensorInfo(i),e.disposeIntermediateTensorInfo(a),l}else return Gp({backend:e,attrs:{shape:s.shape,value:1,dtype:s.dtype}})}const ZL={kernelName:qc,backendName:"cpu",kernelFunc:pv};function mv(n){const{inputs:t,backend:e,attrs:s}=n,{axis:r}=s;if(t.length===1)return Kl({inputs:{input:t[0]},backend:e,attrs:{dim:r}});const o=t[0].shape,i=t[0].dtype;t.forEach(u=>{xd(o,u.shape,"All tensors passed to stack must have matching shapes"),S(i===u.dtype,()=>"All tensors passed to stack must have matching dtypes")});const a=[],l=t.map(u=>{const h=Kl({inputs:{input:u},backend:e,attrs:{dim:r}});return a.push(h),h}),c=go({inputs:l,backend:e,attrs:{axis:r}});return a.forEach(u=>e.disposeIntermediateTensorInfo(u)),c}const JL={kernelName:Xc,backendName:"cpu",kernelFunc:mv};function QL(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{paddings:o,constantValue:i}=s;at(r,"pad");const a=o.map((b,w)=>b[0]+r.shape[w]+b[1]),l=o.map(b=>b[0]),c=e.data.get(r.dataId).values,u=q(r.shape),h=r.shape.length,d=ut(r.shape),f=q(a),p=a.length,m=ut(a),g=ke(r.dtype,f);i!==0&&g.fill(i);for(let b=0;b<u;b++){const y=$o(b,h,d).map(($,N)=>$+l[N]),v=es(y,p,m);g[v]=c[b]}return{dataId:e.write(g,a,r.dtype),shape:a,dtype:r.dtype}}const gv={kernelName:Kc,backendName:"cpu",kernelFunc:QL};const tP=re((n,t)=>Math.pow(n,t)),eP=pe(ta,tP),nP={kernelName:ta,backendName:"cpu",kernelFunc:eP};function sP(n){const{inputs:t,backend:e,attrs:s}=n,{paramsNestedSplits:r,paramsDenseValues:o,indices:i}=t,{outputRaggedRank:a}=s,l=r.map(x=>e.data.get(x.dataId).values),c=r.map(x=>x.shape),u=e.data.get(o.dataId).values,h=e.data.get(i.dataId).values,[d,f,p]=Ow(l,c,u,o.shape,o.dtype,h,i.shape),m=d.map(x=>e.makeTensorInfo([x.length],"int32",x)),g=e.makeTensorInfo(p,o.dtype,f);return m.concat([g])}const rP={kernelName:Bx,backendName:"cpu",kernelFunc:sP};function oP(n){const{inputs:t,backend:e}=n,{starts:s,limits:r,deltas:o}=t,i=e.data.get(s.dataId).values,a=e.data.get(r.dataId).values,l=e.data.get(o.dataId).values,[c,u]=Mw(i,s.shape,s.dtype,a,r.shape,l,o.shape),h=e.makeTensorInfo([c.length],"int32",c),d=e.makeTensorInfo([u.length],s.dtype,u);return[h,d]}const iP={kernelName:Vx,backendName:"cpu",kernelFunc:oP};function aP(n){const{inputs:t,backend:e,attrs:s}=n,{shape:r,values:o,defaultValue:i,rowPartitionTensors:a}=t,{rowPartitionTypes:l}=s,c=e.data.get(r.dataId).values,u=e.data.get(o.dataId).values,h=e.data.get(i.dataId).values,d=a.map(g=>e.data.get(g.dataId).values),f=a.map(g=>g.shape),[p,m]=Lw(c,r.shape,u,o.shape,o.dtype,h,i.shape,d,f,l);return e.makeTensorInfo(p,o.dtype,m)}const lP={kernelName:Wx,backendName:"cpu",kernelFunc:aP};function cP(n){const{backend:t,attrs:e}=n,{start:s,stop:r,dtype:o,step:i}=e,a=Pw(s,r,i,o);return t.makeTensorInfo([a.length],o,a)}const uP={kernelName:Zd,backendName:"cpu",kernelFunc:cP};const hP=Bt(ea,n=>1/n),dP={kernelName:ea,backendName:"cpu",kernelFunc:hP};function fP(n){const{inputs:t,backend:e,attrs:s}=n,{images:r}=t,{alignCorners:o,halfPixelCenters:i,size:a}=s;at(r,"resizeBilinear");const l=ut(r.shape),[c,u]=a,[h,d,f,p]=r.shape,m=e.data.get(r.dataId).values,g=new Float32Array(q([h,c,u,p])),x=[o&&c>1?d-1:d,o&&u>1?f-1:f],b=[o&&c>1?c-1:c,o&&u>1?u-1:u];let w=0;const y=x[0]/b[0],v=x[1]/b[1];for(let $=0;$<h;$++)for(let N=0;N<c;N++){let T;i?T=y*(N+.5)-.5:T=y*N;const I=Math.max(0,Math.floor(T)),k=T-I,C=Math.min(d-1,Math.ceil(T)),R=$*l[0]+I*l[1],D=$*l[0]+C*l[1];for(let M=0;M<u;M++){let O;i?O=v*(M+.5)-.5:O=v*M;const z=Math.max(0,Math.floor(O)),G=O-z,V=Math.min(f-1,Math.ceil(O)),U=R+z*l[2],j=D+z*l[2],K=R+V*l[2],Y=D+V*l[2];for(let X=0;X<p;X++){const Q=m[U+X],tt=m[j+X],nt=m[K+X],it=m[Y+X],ht=Q+(nt-Q)*G,ct=tt+(it-tt)*G,xt=ht+(ct-ht)*k;g[w++]=xt}}}return e.makeTensorInfo([h,c,u,p],"float32",g)}const pP={kernelName:tu,backendName:"cpu",kernelFunc:fP};function mP(n){const{inputs:t,backend:e,attrs:s}=n,{images:r,dy:o}=t,{alignCorners:i}=s;at([o,r],"resizeBilinearGrad");const a=ut(r.shape),[l,c,u,h]=r.shape,[,d,f]=o.shape,p=new Float32Array(l*c*u*h),m=[i&&d>1?c-1:c,i&&f>1?u-1:u],g=[i&&d>1?d-1:d,i&&f>1?f-1:f],x=m[0]/g[0],b=m[1]/g[1],w=e.data.get(o.dataId).values;let y=0;for(let v=0;v<l;v++){const $=v*a[0];for(let N=0;N<d;N++){const T=N*x,I=Math.floor(T),k=Math.min(Math.ceil(T),c-1),C=$+I*a[1],R=$+k*a[1],D=T-I,M=1-D;for(let O=0;O<f;O++){const z=O*b,G=Math.floor(z),V=Math.min(Math.ceil(z),u-1),U=z-G,j=1-U,K=C+G*a[2],Y=C+V*a[2],X=R+G*a[2],Q=R+V*a[2],tt=M*j,nt=M*U,it=D*j,ht=D*U;for(let ct=0;ct<h;ct++){const xt=w[y++];p[K+ct]+=xt*tt,p[Y+ct]+=xt*nt,p[X+ct]+=xt*it,p[Q+ct]+=xt*ht}}}}return e.makeTensorInfo([l,u,c,h],"float32",p)}const gP={kernelName:tf,backendName:"cpu",kernelFunc:mP};function xP(n){const{inputs:t,backend:e,attrs:s}=n,{images:r}=t,{alignCorners:o,halfPixelCenters:i,size:a}=s;at(r,"resizeNearestNeighbor");const l=ut(r.shape),[c,u]=a,[h,d,f,p]=r.shape,m=e.data.get(r.dataId).values,g=new Float32Array(h*c*u*p),x=[o&&c>1?d-1:d,o&&u>1?f-1:f],b=[o&&c>1?c-1:c,o&&u>1?u-1:u],w=x[0]/b[0],y=x[1]/b[1];let v=0;for(let $=0;$<h;$++){const N=$*l[0];for(let T=0;T<c;T++){const I=i?w*(T+.5):w*T;let k=Math.min(d-1,o?Math.round(I):Math.floor(I));i&&(k=Math.max(0,k));const C=N+k*l[1];for(let R=0;R<u;R++){const D=i?y*(R+.5):y*R;let M=Math.min(f-1,o?Math.round(D):Math.floor(D));i&&(M=Math.max(0,M));const O=C+M*l[2];for(let z=0;z<p;z++){const G=m[O+z];g[v++]=G}}}}return e.makeTensorInfo([h,c,u,p],r.dtype,g)}const bP={kernelName:Qc,backendName:"cpu",kernelFunc:xP};function yP(n){const{inputs:t,backend:e,attrs:s}=n,{images:r,dy:o}=t,{alignCorners:i}=s;at([o,r],"resizeNearestNeighborGrad");const a=ut(r.shape),l=ut(o.shape),[c,u,h,d]=r.shape,[,f,p]=o.shape,m=new Float32Array(c*u*h*d),g=e.data.get(o.dataId).values,x=[i&&f>1?u-1:u,i&&p>1?h-1:h],b=[i&&f>1?f-1:f,i&&p>1?p-1:p],w=x[0]/b[0],y=x[1]/b[1],v=1/w,$=1/y,N=Math.ceil(v)*2+2,T=Math.ceil($)*2+2;for(let I=0;I<c;I++){const k=I*a[0];for(let C=0;C<u;C++){const R=k+C*a[1],D=Math.floor(C*v),M=Math.floor(D-N/2);for(let O=0;O<h;O++){const z=R+O*a[2],G=Math.floor(O*$),V=Math.floor(G-T/2);for(let U=0;U<d;U++){let j=0;for(let K=0;K<N;K++){const Y=K+M;if(Y<0||Y>=f)continue;const X=k+Y*l[1],Q=Y*w,tt=Math.min(u-1,i?Math.round(Q):Math.floor(Q));if(C===tt)for(let nt=0;nt<T;nt++){const it=nt+V;if(it<0||it>=p)continue;const ht=X+it*l[2],ct=it*y,xt=Math.min(h-1,i?Math.round(ct):Math.floor(ct));O===xt&&(j+=g[ht+U])}}m[z+U]=j}}}}return e.makeTensorInfo(r.shape,r.dtype,m)}const wP={kernelName:Qd,backendName:"cpu",kernelFunc:yP};function vP(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{dims:o}=s;at(r,"reverse");const i=r.shape.length,a=It(o,r.shape);if(i===0)return ds({inputs:{x:r},backend:e});const l=new ve(r.shape,r.dtype),c=e.bufferSync(r);for(let u=0;u<l.size;u++){const h=l.indexToLoc(u),d=h.slice();a.forEach(f=>d[f]=r.shape[f]-1-d[f]),l.set(c.get(...d),...h)}return e.makeTensorInfo(l.shape,l.dtype,l.values)}const CP={kernelName:eu,backendName:"cpu",kernelFunc:vP};const $P={kernelName:lf,backendName:"cpu",kernelFunc:({inputs:n,attrs:t,backend:e})=>{const{image:s}=n,{radians:r,fillValue:o,center:i}=t,a=e,l=ke(s.dtype,q(s.shape)),[c,u,h,d]=s.shape,[f,p]=Zf(i,u,h),m=255,g=Math.sin(r),x=Math.cos(r),b=a.data.get(s.dataId).values;for(let y=0;y<c;y++){const v=y*h*u*d;for(let $=0;$<u;$++){const N=$*(h*d);for(let T=0;T<h;T++){const I=T*d;for(let k=0;k<d;k++){const C=[c,$,T,k],R=C[2],D=C[1];let M=(R-f)*x-(D-p)*g,O=(R-f)*g+(D-p)*x;M=Math.round(M+f),O=Math.round(O+p);let z=o;if(typeof o!="number"&&(k===3?z=m:z=o[k]),M>=0&&M<h&&O>=0&&O<u){const V=O*(h*d),U=M*d,j=v+V+U+k;z=b[j]}const G=v+N+I+k;l[G]=z}}}}return{dataId:a.write(l,s.shape,s.dtype),shape:s.shape,dtype:s.dtype}}};const IP=Bt(ra,n=>{const t=Math.floor(n);return n-t<.5?Math.floor(n):n-t>.5?Math.ceil(n):t%2===0?t:t+1}),kP={kernelName:ra,backendName:"cpu",kernelFunc:IP};function SP(n){const{inputs:t,backend:e,attrs:s}=n,{indices:r,updates:o}=t,{shape:i}=s,{sliceRank:a,numUpdates:l,sliceSize:c,strides:u,outputSize:h}=Lr(o,r,i),d=!0,f=e.bufferSync(r),p=e.bufferSync(o),m=cr(f,p,i,h,c,l,a,u,0,d);return e.makeTensorInfo(i,m.dtype,m.values)}const NP={kernelName:Ux,backendName:"cpu",kernelFunc:SP};function TP(n,t){let e=0,s=n.length,r=0;for(;e<s;)r=Math.floor((e+s)/2),n[r]<t?e=r+1:s=r;return s}function EP(n,t){let e=0,s=n.length,r=0;for(;e<s;)r=Math.floor((e+s)/2),n[r]<=t?e=r+1:s=r;return s}function RP(n,t,e,s,r,o){const i=Qt("int32",e*r);for(let a=0;a<e;++a){const l=n.slice(a*s,(a+1)*s),c=a*r;for(let u=0;u<r;++u)i[c+u]=o==="left"?TP(l,t[u+c]):EP(l,t[u+c])}return i}function AP(n){const{inputs:t,backend:e,attrs:s}=n,{sortedSequence:r,values:o}=t,{side:i}=s,a=e.data.get(r.dataId).values,l=e.data.get(o.dataId).values,c=RP(a,l,r.shape[0],r.shape[1],o.shape[1],i);return e.makeTensorInfo(o.shape,"int32",c)}const DP={kernelName:Hx,backendName:"cpu",kernelFunc:AP};function _P(n){const{inputs:t,backend:e}=n,{condition:s,t:r,e:o}=t;at([s,r,o],"select");const i=s.shape.length,a=e.data.get(s.dataId).values,l=e.data.get(r.dataId).values,c=e.data.get(o.dataId).values,u=Qe(r.dtype,o.dtype),h=Se(q(r.shape),u);let d=0;const f=i===0||i>1||r.shape.length===1?1:q(r.shape.slice(1));for(let p=0;p<a.length;p++)for(let m=0;m<f;m++)a[p]===1?h[d++]=l[p]:h[d++]=c[p];return e.makeTensorInfo(r.shape,u,h)}const FP={kernelName:nu,backendName:"cpu",kernelFunc:_P};const OP=Cu,MP=$u,LP=Bt(ia,n=>n>=0?MP*n:OP*(Math.exp(n)-1)),PP={kernelName:ia,backendName:"cpu",kernelFunc:LP};const zP=Bt(ca,n=>n<0?-1:n>0?1:0),BP={kernelName:ca,backendName:"cpu",kernelFunc:zP};const VP=Bt(aa,n=>Math.sin(n)),WP={kernelName:aa,backendName:"cpu",kernelFunc:VP};const UP=Bt(la,n=>Math.sinh(n)),GP={kernelName:la,backendName:"cpu",kernelFunc:UP};const HP=11920928955078125e-23,Sg=Math.log(HP)+2,qP=Bt(ha,n=>{const t=n>-Sg,e=n<Sg,s=Math.exp(n);let r;return e?r=s:t?r=n:r=Math.log(1+s),r}),jP={kernelName:ha,backendName:"cpu",kernelFunc:qP};function XP(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{blockShape:o,paddings:i}=s;at([r],"spaceToBatchND");const a=q(o),l=[[0,0]];l.push(...i);for(let $=1+o.length;$<r.shape.length;++$)l.push([0,0]);const c=gv.kernelFunc({inputs:{x:r},backend:e,attrs:{paddings:l,constantValue:0}}),u=Ia(c.shape,o,a,!1),h=ka(u.length,o.length,!1),d=Sa(c.shape,o,a,!1),m=qt({inputs:{x:c},backend:e,attrs:{shape:u}}),b=He({inputs:{x:m},backend:e,attrs:{perm:h}}),v=qt({inputs:{x:b},backend:e,attrs:{shape:d}});return e.disposeIntermediateTensorInfo(c),e.disposeIntermediateTensorInfo(m),e.disposeIntermediateTensorInfo(b),v}const KP={kernelName:ou,backendName:"cpu",kernelFunc:XP};function YP(n){const{inputs:t,backend:e}=n,{indices:s,values:r,denseShape:o,defaultValue:i}=t;if(o.shape.length!==1)throw new Error(`Dense shape must be a vector, saw:
        ${o.shape}`);if(s.shape.length!==2)throw new Error(`Indices must be a matrix, saw:
        ${s.shape}`);if(r.shape.length!==1)throw new Error(`Values must be a vector, saw:
        ${r.shape}`);if(i.shape.length!==0)throw new Error(`Default value must be a scalar, saw:
        ${i.shape}`);const a=e.data.get(s.dataId).values,l=e.data.get(r.dataId).values,c=e.data.get(o.dataId).values,u=e.data.get(i.dataId).values[0],[h,d,f,p,m]=Ww(a,s.shape,s.dtype,l,r.dtype,c,u);return[e.makeTensorInfo(d,s.dtype,h),e.makeTensorInfo([d[0]],r.dtype,f),e.makeTensorInfo([p.length],"bool",new Uint8Array(p.map(g=>Number(g)))),e.makeTensorInfo([m.length],s.dtype,new Int32Array(m))]}const ZP={kernelName:qx,backendName:"cpu",kernelFunc:YP};function JP(n){const{inputs:t,backend:e}=n,{inputIndices:s,inputShape:r,newShape:o}=t;if(s.shape.length!==2)throw new Error(`Input indices should be a matrix but received shape
        ${s.shape}`);if(r.shape.length!==1)throw new Error(`Input shape should be a vector but received shape
        ${r.shape}`);if(o.shape.length!==1)throw new Error(`Target shape should be a vector but received shape ${o.shape}`);const i=Array.from(e.data.get(r.dataId).values),a=e.data.get(s.dataId).values,l=Array.from(e.data.get(o.dataId).values),[c,u,h]=Uw(a,s.shape,s.dtype,i,l);return[e.makeTensorInfo(u,s.dtype,c),e.makeTensorInfo([h.length],o.dtype,new Int32Array(h))]}const QP={kernelName:jx,backendName:"cpu",kernelFunc:JP};function t3(n){const{inputs:t,backend:e}=n,{data:s,indices:r,segmentIds:o}=t;if(s.shape.length<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(r.shape.length!==1)throw new Error(`Indices should be a vector but received shape
          ${r.shape}`);if(o.shape.length!==1)throw new Error(`Segment ids should be a vector but received shape
          ${o.shape}`);if(r.shape[0]!==o.shape[0])throw new Error("segmentIds and indices should have same size.");const i=e.data.get(s.dataId).values,a=e.data.get(r.dataId).values,l=e.data.get(o.dataId).values,[c,u]=Bp(i,s.shape,s.dtype,a,l,!0);return e.makeTensorInfo(u,s.dtype,c)}const e3={kernelName:Xx,backendName:"cpu",kernelFunc:t3};function n3(n){const{inputs:t,backend:e}=n,{data:s,indices:r,segmentIds:o}=t;if(s.shape.length<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(r.shape.length!==1)throw new Error(`Indices should be a vector but received shape
         ${r.shape}`);if(o.shape.length!==1)throw new Error(`Segment ids should be a vector but received shape
         ${o.shape}`);if(r.shape[0]!==o.shape[0])throw new Error("segmentIds and indices should have same size.");const i=e.data.get(s.dataId).values,a=e.data.get(r.dataId).values,l=e.data.get(o.dataId).values,[c,u]=Bp(i,s.shape,s.dtype,a,l);return e.makeTensorInfo(u,s.dtype,c)}const s3={kernelName:Kx,backendName:"cpu",kernelFunc:n3};function r3(n){const{inputs:t,backend:e,attrs:s}=n,{sparseIndices:r,sparseValues:o,defaultValue:i}=t,{outputShape:a}=s,{sliceRank:l,numUpdates:c,sliceSize:u,strides:h,outputSize:d}=Lr(o,r,a),f=!1,p=e.bufferSync(r);let m;switch(o.dtype){case"bool":{const g=e.bufferSync(o),x=!!e.data.get(i.dataId).values[0];m=cr(p,g,a,d,u,c,l,h,x,f);break}case"float32":{const g=e.bufferSync(o),x=e.data.get(i.dataId).values[0];m=cr(p,g,a,d,u,c,l,h,x,f);break}case"int32":{const g=e.bufferSync(o),x=e.data.get(i.dataId).values[0];m=cr(p,g,a,d,u,c,l,h,x,f);break}case"string":{const g=e.bufferSync(o),x=zs(e.data.get(i.dataId).values[0]);m=cr(p,g,a,d,u,c,l,h,x,f);break}default:throw new Error(`Unsupported type ${o.dtype}`)}return e.makeTensorInfo(a,m.dtype,m.values)}const o3={kernelName:Yx,backendName:"cpu",kernelFunc:r3};function i3(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{numOrSizeSplits:o,axis:i}=s,a=It(i,r.shape)[0],l=dp(r,o,a),c=new Array(r.shape.length).fill(0),u=r.shape.slice();return l.map(h=>{const d=[...u];d[a]=h;const f=Er({inputs:{x:r},backend:e,attrs:{begin:c,size:d}});return c[a]+=h,f})}const a3={kernelName:iu,backendName:"cpu",kernelFunc:i3};const l3={kernelName:ef,backendName:"cpu",kernelFunc:({inputs:n,backend:t})=>{const{x:e}=n,s=t;at(e,"square");const r=s.data.get(e.dataId).values,o=new Float32Array(r.length);for(let a=0;a<r.length;++a){const l=r[a];o[a]=l*l}return{dataId:s.write(o,e.shape,e.dtype),shape:e.shape,dtype:e.dtype}}};const c3=Bt(ba,(n,t)=>{const e=t;return isNaN(n)?NaN:n>0?1:e.alpha}),u3={kernelName:ba,backendName:"cpu",kernelFunc:c3};function h3(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{begin:o,end:i,strides:a,beginMask:l,endMask:c,ellipsisMask:u,newAxisMask:h,shrinkAxisMask:d}=s;at(r,"stridedSlice");const{finalShapeSparse:f,finalShape:p,isIdentity:m,sliceDim0:g,isSimpleSlice:x,begin:b,end:w,strides:y}=Xf(r.shape,o,i,a,l,c,u,h,d);let v;if(m)v=qt({inputs:{x:r},backend:e,attrs:{shape:p}});else if(g||x){S(r.shape.length>=1,()=>`Input must have rank at least 1, got: ${r.shape.length}`);const $=Hf(b,w,y),N=Er({inputs:{x:r},backend:e,attrs:{begin:b,size:$}});v=qt({inputs:{x:N},backend:e,attrs:{shape:p}}),e.disposeIntermediateTensorInfo(N)}else{const $=e.bufferSync(r),N=qw(f,$,y,b);v=e.makeTensorInfo(p,N.dtype,N.values)}return v}const d3={kernelName:sf,backendName:"cpu",kernelFunc:h3};function f3(n){const{inputs:t,backend:e,attrs:s}=n,{separator:r,nGramWidths:o,leftPad:i,rightPad:a,padWidth:l,preserveShortSequences:c}=s,{data:u,dataSplits:h}=t,d=e.data.get(u.dataId).values,f=e.data.get(h.dataId).values,[p,m]=jw(d,f,r,o,i,a,l,c);return[e.makeTensorInfo([p.length],"string",p),e.makeTensorInfo(h.shape,"int32",m)]}const p3={kernelName:Zx,backendName:"cpu",kernelFunc:f3};function m3(n){const{inputs:t,backend:e,attrs:s}=n,{skipEmpty:r}=s,{input:o,delimiter:i}=t;if(o.dtype!=="string")throw new Error("Input must be of datatype string");if(o.shape.length!==1)throw new Error(`Input must be a vector, got shape: ${o.shape}`);if(i.shape.length!==0)throw new Error(`Delimiter must be a scalar, got shape: ${i.shape}`);const a=e.data.get(o.dataId).values,l=e.data.get(i.dataId).values[0],[c,u,h]=Xw(a,l,r),d=u.length;return[e.makeTensorInfo([d,2],"int32",c),e.makeTensorInfo([d],"string",u),e.makeTensorInfo([2],"int32",new Int32Array(h))]}const g3={kernelName:Jx,backendName:"cpu",kernelFunc:m3};function x3(n){const{inputs:t,backend:e,attrs:s}=n,{numBuckets:r}=s,{input:o}=t;if(o.dtype!=="string")throw new Error("Input must be of datatype string");if(r<=0)throw new Error("Number of buckets must be at least 1");const i=e.data.get(o.dataId).values,a=Kw(i,r);return e.makeTensorInfo(o.shape,"int32",a)}const b3={kernelName:Qx,backendName:"cpu",kernelFunc:x3};const y3=Bt(ma,n=>Math.tan(n)),w3={kernelName:ma,backendName:"cpu",kernelFunc:y3};const v3=Bt(ga,n=>Math.tanh(n)),C3={kernelName:ga,backendName:"cpu",kernelFunc:v3};function $3(n){const{inputs:t,backend:e}=n,{tensor:s,indices:r,updates:o}=t,{sliceRank:i,numUpdates:a,sliceSize:l,strides:c,outputSize:u}=Lr(o,r,s.shape),h=!1,d=e.bufferSync(r),f=e.bufferSync(o),p=e.bufferSync(s),m=cr(d,f,s.shape,u,l,a,i,c,p,h);return e.makeTensorInfo(s.shape,m.dtype,m.values)}const I3={kernelName:Gx,backendName:"cpu",kernelFunc:$3};function k3(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{reps:o}=s;at(r,"tile");const i=Zw(e.bufferSync(r),o);return e.makeTensorInfo(i.shape,i.dtype,i.values)}const S3={kernelName:xa,backendName:"cpu",kernelFunc:k3};function N3(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{k:o,sorted:i}=s;at(r,"topk");const a=e.data.get(r.dataId).values,[l,c]=Qw(a,r.shape,r.dtype,o,i);return[e.makeTensorInfo(l.shape,l.dtype,l.values),e.makeTensorInfo(c.shape,c.dtype,c.values)]}const T3={kernelName:rf,backendName:"cpu",kernelFunc:N3};function E3(n){const{inputs:t,attrs:e,backend:s}=n,{image:r,transforms:o}=t,{interpolation:i,fillMode:a,fillValue:l,outputShape:c}=e,[u,h,d,f]=r.shape,[p,m]=c??[h,d],g=[u,p,m,f],x=ut(r.shape),b=x[0],w=x[1],y=x[2],v=ut(g),$=v[0],N=v[1],T=v[2],I=ke(r.dtype,q(g));I.fill(l);const k=s.data.get(r.dataId).values,C=s.data.get(o.dataId).values;for(let D=0;D<u;++D){const M=o.shape[0]===1?C:C.subarray(D*8,D*8+8);for(let O=0;O<p;++O)for(let z=0;z<m;++z)for(let G=0;G<f;++G){let V;const U=M[6]*z+M[7]*O+1;if(U===0)continue;const j=(M[0]*z+M[1]*O+M[2])/U,K=(M[3]*z+M[4]*O+M[5])/U,Y=Ng(j,d,a),X=Ng(K,h,a);switch(i){case"nearest":V=O3(k,h,d,b,w,y,D,X,Y,G,l);break;case"bilinear":V=M3(k,h,d,b,w,y,D,X,Y,G,l);break;default:throw new Error(`Error in Transform: Expect 'nearest' or 'bilinear', but got ${i}`)}const Q=D*$+O*N+z*T+G;I[Q]=V}return s.makeTensorInfo(g,r.dtype,I)}return{dataId:s.write(I,g,r.dtype),shape:r.shape,dtype:r.dtype}}const R3={kernelName:of,backendName:"cpu",kernelFunc:E3};function Ng(n,t,e){switch(e){case"reflect":return A3(n,t);case"wrap":return D3(n,t);case"nearest":return F3(n,t);default:return _3(n)}}function A3(n,t){let e=n;if(e<0)if(t<=1)e=0;else{const s=2*t;e<s&&(e=s*Math.trunc(-e/s)+e),e=e<-t?e+s:-e-1}else if(e>t-1)if(t<=1)e=0;else{const s=2*t;e-=s*Math.trunc(e/s),e>=t&&(e=s-e-1)}return gr(0,e,t-1)}function D3(n,t){let e=n;if(e<0)if(t<=1)e=0;else{const s=t-1;e+=t*(Math.trunc(-e/s)+1)}else if(e>t-1)if(t<=1)e=0;else{const s=t-1;e-=t*Math.trunc(e/s)}return gr(0,e,t-1)}function _3(n,t){return n}function F3(n,t){return gr(0,n,t-1)}function Qo(n,t,e,s,r,o,i,a,l,c,u){const h=i*s+a*r+l*o+c;return 0<=a&&a<t&&0<=l&&l<e?n[h]:u}function O3(n,t,e,s,r,o,i,a,l,c,u){const h=Math.round(a),d=Math.round(l);return Qo(n,t,e,s,r,o,i,h,d,c,u)}function M3(n,t,e,s,r,o,i,a,l,c,u){const h=Math.floor(a),d=Math.floor(l),f=h+1,p=d+1,m=(p-l)*Qo(n,t,e,s,r,o,i,h,d,c,u)+(l-d)*Qo(n,t,e,s,r,o,i,h,p,c,u),g=(p-l)*Qo(n,t,e,s,r,o,i,f,d,c,u)+(l-d)*Qo(n,t,e,s,r,o,i,f,p,c,u);return(f-a)*m+(a-h)*g}function L3(n){const{inputs:t,attrs:e,backend:s}=n,{axis:r}=e,{x:o}=t;at(o,"unique");const i=s.data.get(o.dataId).values,{outputValues:a,outputShape:l,indices:c}=tv(i,r,o.shape,o.dtype);return[s.makeTensorInfo(l,o.dtype,a),s.makeTensorInfo([c.length],"int32",c)]}const P3={kernelName:af,backendName:"cpu",kernelFunc:L3};function z3(n){const{inputs:t,backend:e,attrs:s}=n,{value:r}=t;let{axis:o}=s;o<0&&(o+=r.shape.length);const i=r.shape.length,a=r.shape[o],l=new Array(i-1);let c=0;for(let f=0;f<i;f++)f!==o&&(l[c++]=r.shape[f]);const u=new Array(i).fill(0),h=r.shape.slice();h[o]=1;const d=new Array(a);for(let f=0;f<d.length;f++){u[o]=f;const p=Er({inputs:{x:r},backend:e,attrs:{begin:u,size:h}});d[f]=qt({inputs:{x:p},backend:e,attrs:{shape:l}}),e.disposeIntermediateTensorInfo(p)}return d}const B3={kernelName:lu,backendName:"cpu",kernelFunc:z3};function V3(n){const{inputs:t,backend:e,attrs:s}=n,{x:r,segmentIds:o}=t,{numSegments:i}=s;at(r,"unsortedSegmentSum");const a=r.shape.length,l=o.shape.length,c=[],u=[],h=a-l;let d=o;for(let p=0;p<h;++p){const m=Kl({inputs:{input:d},backend:e,attrs:{dim:p+1}});d=m,u.push(m)}for(let p=0;p<i;++p){const m=qs(p,"int32"),g=e.makeTensorInfo([],"int32",m),x=mw({inputs:{a:g,b:d},backend:e}),b=Gs({inputs:{x},backend:e,attrs:{dtype:"float32"}}),w=Ou({inputs:{a:b,b:r},backend:e}),y=Oa({inputs:{x:w},backend:e,attrs:{axis:0,keepDims:!1}});c.push(y),u.push(g),u.push(x),u.push(b),u.push(w),u.push(y)}const f=mv({inputs:c,backend:e,attrs:{axis:0}});return u.forEach(p=>e.disposeIntermediateTensorInfo(p)),f}const W3={kernelName:cu,backendName:"cpu",kernelFunc:V3};const U3=[LF,x_,zF,VF,$_,UF,HF,jF,KF,ZF,QF,eO,sO,iO,lO,hO,fO,mO,xO,OF,yO,vO,$O,k_,kO,v_,N_,NO,b_,EO,AO,DO,FO,MO,PO,BO,WO,GO,qO,XO,YO,JO,tM,nM,sM,oM,aM,cM,uM,hM,dM,pM,xM,TF,yM,T_,NM,E_,TM,A_,FM,OM,LM,__,O_,zM,VM,UM,HM,L_,z_,y_,jM,RO,KM,ZM,QM,EF,V_,U_,eL,H_,sL,iL,lL,hL,fL,mL,gL,j_,bL,wL,CL,IL,SL,TL,RL,K_,DL,OL,PL,Z_,Q_,VL,GL,jL,eF,KL,ZL,JL,gv,nP,AF,rF,rP,iP,lP,uP,w_,Yh,dP,DF,_F,FF,pP,gP,bP,wP,CP,$P,kP,dF,NP,DP,FP,PP,pF,BP,WP,GP,mF,ML,jP,KP,ZP,QP,e3,s3,o3,a3,bF,l3,wF,CF,u3,d3,p3,g3,b3,SF,mM,w3,C3,I3,S3,T3,R3,nF,P3,B3,W3,YL];for(const n of U3)e0(n);const ar={},Ja={alpha:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1,depth:!1,stencil:!1,failIfMajorPerformanceCaveat:!0};function G3(n,t){ar[n]=t}function Pn(n,t){if(!(n in ar)||t!=null){const s=q3(n,t);if(s!==null)ar[n]=s;else return console.log("Could not get context for WebGL version",n),null}const e=ar[n];return e==null||e.isContextLost()?(delete ar[n],Pn(n)):(e.disable(e.DEPTH_TEST),e.disable(e.STENCIL_TEST),e.disable(e.BLEND),e.disable(e.DITHER),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SAMPLE_COVERAGE),e.enable(e.SCISSOR_TEST),e.enable(e.CULL_FACE),e.cullFace(e.BACK),ar[n])}function H3(n){if(!W().getBool("IS_SAFARI")&&typeof OffscreenCanvas<"u"&&n===2)return new OffscreenCanvas(300,150);if(typeof document<"u")return document.createElement("canvas");throw new Error("Cannot create a canvas in this context")}function q3(n,t){if(n!==1&&n!==2)throw new Error("Cannot get WebGL rendering context, WebGL is disabled.");const e=t??H3(n);return e.addEventListener("webglcontextlost",s=>{s.preventDefault(),delete ar[n]},!1),W().getBool("SOFTWARE_WEBGL_ENABLED")&&(Ja.failIfMajorPerformanceCaveat=!1),n===1?e.getContext("webgl",Ja)||e.getContext("experimental-webgl",Ja):e.getContext("webgl2",Ja)}var gi;(function(n){n[n.DENSE=0]="DENSE",n[n.SHARED_BATCH=1]="SHARED_BATCH"})(gi||(gi={}));var on;(function(n){n[n.RENDER=0]="RENDER",n[n.UPLOAD=1]="UPLOAD",n[n.PIXELS=2]="PIXELS",n[n.DOWNLOAD=3]="DOWNLOAD"})(on||(on={}));var we;(function(n){n[n.UNPACKED_FLOAT16=0]="UNPACKED_FLOAT16",n[n.UNPACKED_FLOAT32=1]="UNPACKED_FLOAT32",n[n.PACKED_4X1_UNSIGNED_BYTE=2]="PACKED_4X1_UNSIGNED_BYTE",n[n.PACKED_2X2_FLOAT32=3]="PACKED_2X2_FLOAT32",n[n.PACKED_2X2_FLOAT16=4]="PACKED_2X2_FLOAT16"})(we||(we={}));function Ma(n,t){return[t,n]}function j3(n,t){return n*t}function Qa(n){const t=q(n),e=Math.ceil(t/4);return wh(e)}function Ro(n,t){return[Math.max(1,Math.ceil(t/2)),Math.max(1,Math.ceil(n/2))]}function X3(n,t){const[e,s]=Ro(n,t);return e*s*4}function Hp(n,t){const e=n;let s,r,o,i,a,l,c,u,h,d;return W().getNumber("WEBGL_VERSION")===2?(s=e.R32F,r=e.R16F,o=e.RGBA16F,i=e.RGBA32F,a=e.RED,c=4,u=1,h=e.HALF_FLOAT,d=e.FLOAT,l=e.RGBA8):(s=n.RGBA,r=n.RGBA,o=n.RGBA,i=e.RGBA,a=n.RGBA,c=4,u=4,h=t!=null?t.HALF_FLOAT_OES:null,d=n.FLOAT,l=n.RGBA),{internalFormatFloat:s,internalFormatHalfFloat:r,internalFormatPackedHalfFloat:o,internalFormatPackedFloat:i,textureFormatFloat:a,downloadTextureFormat:l,downloadUnpackNumChannels:c,defaultNumChannels:u,textureTypeHalfFloat:h,textureTypeFloat:d}}function st(n,t){const e=t();return W().getBool("DEBUG")&&K3(n),e}function K3(n){const t=n.getError();if(t!==n.NO_ERROR)throw new Error("WebGL Error: "+Q3(n,t))}const Y3=596e-10,Z3=65504;function J3(n){return!!(W().getBool("WEBGL_RENDER_FLOAT32_ENABLED")||n===0||Y3<Math.abs(n)&&Math.abs(n)<Z3)}function Q3(n,t){switch(t){case n.NO_ERROR:return"NO_ERROR";case n.INVALID_ENUM:return"INVALID_ENUM";case n.INVALID_VALUE:return"INVALID_VALUE";case n.INVALID_OPERATION:return"INVALID_OPERATION";case n.INVALID_FRAMEBUFFER_OPERATION:return"INVALID_FRAMEBUFFER_OPERATION";case n.OUT_OF_MEMORY:return"OUT_OF_MEMORY";case n.CONTEXT_LOST_WEBGL:return"CONTEXT_LOST_WEBGL";default:return`Unknown error code ${t}`}}function tl(n,t){return Ts(n,()=>n.getExtension(t),'Extension "'+t+'" not supported on this browser.')}function tz(n,t){const e=Ts(n,()=>n.createShader(n.VERTEX_SHADER),"Unable to create vertex WebGLShader.");if(st(n,()=>n.shaderSource(e,t)),st(n,()=>n.compileShader(e)),n.getShaderParameter(e,n.COMPILE_STATUS)===!1)throw console.log(n.getShaderInfoLog(e)),new Error("Failed to compile vertex shader.");return e}function ez(n,t){const e=Ts(n,()=>n.createShader(n.FRAGMENT_SHADER),"Unable to create fragment WebGLShader.");if(st(n,()=>n.shaderSource(e,t)),st(n,()=>n.compileShader(e)),W().get("ENGINE_COMPILE_ONLY"))return e;if(n.getShaderParameter(e,n.COMPILE_STATUS)===!1)throw xv(t,n.getShaderInfoLog(e)),new Error("Failed to compile fragment shader.");return e}const nz=/ERROR: [0-9]+:([0-9]+):/g;function xv(n,t){const e=nz.exec(t);if(e==null){console.log(`Couldn't parse line number in error: ${t}`),console.log(n);return}const s=+e[1],r=n.split(`
`),o=r.length.toString().length+2,i=r.map((h,d)=>to((d+1).toString(),o)+h);let a=0;for(let h=0;h<i.length;h++)a=Math.max(i[h].length,a);const l=i.slice(0,s-1),c=i.slice(s-1,s),u=i.slice(s);console.log(l.join(`
`)),console.log(t.split(`
`)[0]),console.log(`%c ${to(c[0],a)}`,"border:1px solid red; background-color:#e3d2d2; color:#a61717"),console.log(u.join(`
`))}function sz(n){return Ts(n,()=>n.createProgram(),"Unable to create WebGLProgram.")}function rz(n,t){if(st(n,()=>n.linkProgram(t)),!W().get("ENGINE_COMPILE_ONLY")&&n.getProgramParameter(t,n.LINK_STATUS)===!1)throw console.log(n.getProgramInfoLog(t)),new Error("Failed to link vertex and fragment shaders.")}function uh(n,t){if(st(n,()=>n.validateProgram(t)),n.getProgramParameter(t,n.VALIDATE_STATUS)===!1)throw console.log(n.getProgramInfoLog(t)),new Error("Shader program validation failed.")}function oz(n,t){const e=Ts(n,()=>n.createBuffer(),"Unable to create WebGLBuffer");return st(n,()=>n.bindBuffer(n.ARRAY_BUFFER,e)),st(n,()=>n.bufferData(n.ARRAY_BUFFER,t,n.STATIC_DRAW)),e}function iz(n,t){const e=Ts(n,()=>n.createBuffer(),"Unable to create WebGLBuffer");return st(n,()=>n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e)),st(n,()=>n.bufferData(n.ELEMENT_ARRAY_BUFFER,t,n.STATIC_DRAW)),e}function az(n){return Ts(n,()=>n.createTexture(),"Unable to create WebGLTexture.")}function lz(n,t){const e=W().getNumber("WEBGL_MAX_TEXTURE_SIZE");if(n<=0||t<=0){const s=`[${n}x${t}]`;throw new Error("Requested texture size "+s+" is invalid.")}if(n>e||t>e){const s=`[${n}x${t}]`,r=`[${e}x${e}]`;throw new Error("Requested texture size "+s+" greater than WebGL maximum on this browser / GPU "+r+".")}}function cz(n){return Ts(n,()=>n.createFramebuffer(),"Unable to create WebGLFramebuffer.")}function Tg(n,t,e,s,r,o,i){const a=n.getAttribLocation(t,e);return a===-1?!1:(st(n,()=>n.bindBuffer(n.ARRAY_BUFFER,s)),st(n,()=>n.vertexAttribPointer(a,r,n.FLOAT,!1,o,i)),st(n,()=>n.enableVertexAttribArray(a)),!0)}function uz(n,t,e){mz(n,e),st(n,()=>n.activeTexture(n.TEXTURE0+e)),st(n,()=>n.bindTexture(n.TEXTURE_2D,t))}function hz(n,t,e){return Ts(n,()=>n.getUniformLocation(t,e),'uniform "'+e+'" not present in program.')}function dz(n,t,e){return n.getUniformLocation(t,e)}function fz(n,t,e,s){st(n,()=>uz(n,t,s)),st(n,()=>n.uniform1i(e,s))}function hh(n,t,e){st(n,()=>n.bindFramebuffer(n.FRAMEBUFFER,e)),st(n,()=>n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,t,0))}function Eg(n,t){st(n,()=>n.bindFramebuffer(n.FRAMEBUFFER,t)),st(n,()=>n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,null,0))}function el(n){const t=n.checkFramebufferStatus(n.FRAMEBUFFER);if(t!==n.FRAMEBUFFER_COMPLETE)throw new Error("Error binding framebuffer: "+pz(n,t))}function pz(n,t){switch(t){case n.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_ATTACHMENT";case n.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT";case n.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:return"FRAMEBUFFER_INCOMPLETE_DIMENSIONS";case n.FRAMEBUFFER_UNSUPPORTED:return"FRAMEBUFFER_UNSUPPORTED";default:return`unknown error ${t}`}}function Ts(n,t,e){const s=st(n,()=>t());if(s==null)throw new Error(e);return s}function mz(n,t){const e=n.MAX_COMBINED_TEXTURE_IMAGE_UNITS-1,s=t+n.TEXTURE0;if(s<n.TEXTURE0||s>e){const r=`[gl.TEXTURE0, gl.TEXTURE${e}]`;throw new Error(`textureUnit must be in ${r}.`)}}function xo(n,t=2){return q(n.slice(0,n.length-t))}function bo(n){if(n.length===0)throw Error("Cannot get rows and columns of an empty shape array.");return[n.length>1?n[n.length-2]:1,n[n.length-1]]}function nl(n){let t=[1,1,1];return n.length===0||n.length===1&&n[0]===1||(t=[xo(n),...bo(n)]),t}function gz(n,t=!1){let e=W().getNumber("WEBGL_MAX_TEXTURE_SIZE"),s=W().getNumber("WEBGL_MAX_SIZE_FOR_NARROW_TEXTURE");s===1/0&&W().getBool("WEBGL_AUTO_SQUARIFY_NARROW_TEXTURE_SHAPE")&&(s=e/2),t&&(e=e*2,s=s*2,n=n.map((a,l)=>l>=n.length-2?gd(n[l]):n[l]),n.length===1&&(n=[2,n[0]])),n.length!==2&&(n=Hs(n).newShape);let r=q(n),o=null;n.length<=1&&r<=e?o=[1,r]:n.length===2&&n[0]<=e&&n[1]<=e?o=n:n.length===3&&n[0]*n[1]<=e&&n[2]<=e?o=[n[0]*n[1],n[2]]:n.length===3&&n[0]<=e&&n[1]*n[2]<=e?o=[n[0],n[1]*n[2]]:n.length===4&&n[0]*n[1]*n[2]<=e&&n[3]<=e?o=[n[0]*n[1]*n[2],n[3]]:n.length===4&&n[0]<=e&&n[1]*n[2]*n[3]<=e&&(o=[n[0],n[1]*n[2]*n[3]]);const i=o!=null&&Math.max(...o)>s&&Math.min(...o)<=(t?2:1)&&Math.min(...o)>0;if(o==null||i)if(t){const a=xo(n);let l=2,c=2;n.length&&([l,c]=bo(n)),r=a*(l/2)*(c/2),o=wh(r).map(u=>u*2)}else o=wh(r);return o}function sl(n){return n%2===0}function Zl(n,t){if(n=n.slice(-2),t=t.slice(-2),Mt(n,t)||!n.length||!t.length||n[0]===0||n[1]===0||t[0]===0||t[1]===0)return!0;if(n.length!==t.length){const e=n[n.length-1],s=t[t.length-1];if(e===s||sl(e)&&sl(s)&&(n[0]===1||t[0]===1))return!0}return n[1]===t[1]&&sl(n[0])&&sl(t[0])}let dh,fh;function xz(n){if(dh==null){const t=Pn(n);dh=t.getParameter(t.MAX_TEXTURE_SIZE)}return dh}function bz(n){if(fh==null){const t=Pn(n);fh=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS)}return Math.min(16,fh)}function yz(n){if(n===0)return 0;let t;const e=Pn(n);return gn(e,"EXT_disjoint_timer_query_webgl2")&&n===2?t=2:gn(e,"EXT_disjoint_timer_query")?t=1:t=0,t}function gn(n,t){return n.getExtension(t)!=null}function Rg(n){try{if(Pn(n)!=null)return!0}catch(t){return console.log("Error when getting WebGL context: ",t),!1}return!1}function wz(n){if(n===0)return!1;const t=Pn(n);if(n===1){if(!gn(t,"OES_texture_float"))return!1}else if(!gn(t,"EXT_color_buffer_float"))return!1;return Jh(t)}function vz(n){if(n===0)return!1;const t=Pn(n);if(n===1){if(!gn(t,"OES_texture_float")||!gn(t,"WEBGL_color_buffer_float"))return!1}else{if(gn(t,"EXT_color_buffer_float"))return Jh(t);const s="EXT_color_buffer_half_float";if(gn(t,s)){const r=t.getExtension(s);return Cz(t,r)}return!1}return Jh(t)}function Jh(n){const t=Hp(n),e=n.createTexture();n.bindTexture(n.TEXTURE_2D,e),n.texImage2D(n.TEXTURE_2D,0,t.internalFormatFloat,1,1,0,t.textureFormatFloat,t.textureTypeFloat,null);const o=n.createFramebuffer();n.bindFramebuffer(n.FRAMEBUFFER,o),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e,0);const i=n.checkFramebufferStatus(n.FRAMEBUFFER)===n.FRAMEBUFFER_COMPLETE;return n.bindTexture(n.TEXTURE_2D,null),n.bindFramebuffer(n.FRAMEBUFFER,null),n.deleteTexture(e),n.deleteFramebuffer(o),i}function Cz(n,t){const e=Hp(n,t),s=n.createTexture();n.bindTexture(n.TEXTURE_2D,s),n.texImage2D(n.TEXTURE_2D,0,e.internalFormatHalfFloat,1,1,0,e.textureFormatFloat,e.textureTypeHalfFloat,null);const i=n.createFramebuffer();n.bindFramebuffer(n.FRAMEBUFFER,i),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,s,0);const a=n.checkFramebufferStatus(n.FRAMEBUFFER)===n.FRAMEBUFFER_COMPLETE;return n.bindTexture(n.TEXTURE_2D,null),n.bindFramebuffer(n.FRAMEBUFFER,null),n.deleteTexture(s),n.deleteFramebuffer(i),a}function $z(n){return n!==2?!1:Pn(n).fenceSync!=null}function La(n,t){Array.isArray(n)||(n=[n]),n.forEach(e=>{e!=null&&S(e.dtype!=="complex64",()=>`${t} does not support complex64 tensors in the WebGL backend.`)})}const lt=W();lt.registerFlag("HAS_WEBGL",()=>lt.getNumber("WEBGL_VERSION")>0);lt.registerFlag("WEBGL_VERSION",()=>Rg(2)?2:Rg(1)?1:0);lt.registerFlag("WEBGL_CHECK_NUMERICAL_PROBLEMS",()=>!1);lt.registerFlag("WEBGL_BUFFER_SUPPORTED",()=>lt.get("WEBGL_VERSION")===2);lt.registerFlag("WEBGL_CPU_FORWARD",()=>!0);lt.registerFlag("WEBGL_FORCE_F16_TEXTURES",()=>!1);lt.registerFlag("WEBGL_PACK",()=>lt.getBool("HAS_WEBGL"));lt.registerFlag("WEBGL_PACK_NORMALIZATION",()=>lt.getBool("WEBGL_PACK"));lt.registerFlag("WEBGL_PACK_CLIP",()=>lt.getBool("WEBGL_PACK"));lt.registerFlag("WEBGL_PACK_DEPTHWISECONV",()=>lt.getBool("WEBGL_PACK"));lt.registerFlag("WEBGL_PACK_BINARY_OPERATIONS",()=>lt.getBool("WEBGL_PACK"));lt.registerFlag("WEBGL_PACK_UNARY_OPERATIONS",()=>lt.getBool("WEBGL_PACK"));lt.registerFlag("WEBGL_PACK_ARRAY_OPERATIONS",()=>lt.getBool("WEBGL_PACK"));lt.registerFlag("WEBGL_PACK_IMAGE_OPERATIONS",()=>lt.getBool("WEBGL_PACK"));lt.registerFlag("WEBGL_PACK_REDUCE",()=>lt.getBool("WEBGL_PACK"));lt.registerFlag("WEBGL_LAZILY_UNPACK",()=>lt.getBool("WEBGL_PACK"));lt.registerFlag("WEBGL_CONV_IM2COL",()=>lt.getBool("WEBGL_PACK"));lt.registerFlag("WEBGL_PACK_CONV2DTRANSPOSE",()=>lt.getBool("WEBGL_PACK"));lt.registerFlag("WEBGL_MAX_TEXTURE_SIZE",()=>xz(lt.getNumber("WEBGL_VERSION")));lt.registerFlag("WEBGL_MAX_TEXTURES_IN_SHADER",()=>bz(lt.getNumber("WEBGL_VERSION")));lt.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION",()=>{const n=lt.getNumber("WEBGL_VERSION");return n===0?0:yz(n)});lt.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE",()=>lt.getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0&&!p0());lt.registerFlag("WEBGL_RENDER_FLOAT32_CAPABLE",()=>wz(lt.getNumber("WEBGL_VERSION")));lt.registerFlag("WEBGL_RENDER_FLOAT32_ENABLED",()=>lt.getBool("WEBGL_FORCE_F16_TEXTURES")?!1:lt.getBool("WEBGL_RENDER_FLOAT32_CAPABLE"));lt.registerFlag("WEBGL_DOWNLOAD_FLOAT_ENABLED",()=>vz(lt.getNumber("WEBGL_VERSION")));lt.registerFlag("WEBGL_FENCE_API_ENABLED",()=>$z(lt.getNumber("WEBGL_VERSION")));lt.registerFlag("WEBGL_SIZE_UPLOAD_UNIFORM",()=>lt.getBool("WEBGL_RENDER_FLOAT32_ENABLED")?4:0);lt.registerFlag("WEBGL_DELETE_TEXTURE_THRESHOLD",()=>-1,n=>{if(typeof n!="number")throw new Error(`WEBGL_DELETE_TEXTURE_THRESHOLD must be a number but got ${n}.`);if(n<0&&n!==-1)throw new Error(`WEBGL_DELETE_TEXTURE_THRESHOLD must be -1 (indicating never delete) or at least 0, but got ${n}.`)});lt.registerFlag("WEBGL_FLUSH_THRESHOLD",()=>p0()?1:-1,n=>{if(typeof n!="number")throw new Error(`WEBGL_FLUSH_THRESHOLD must be a number but got ${n}.`);if(n<0&&n!==-1)throw new Error(`WEBGL_FLUSH_THRESHOLD must be -1 (indicating never manual flush) or at least 0, but got ${n}.`)});lt.registerFlag("CPU_HANDOFF_SIZE_THRESHOLD",()=>128);lt.registerFlag("WEBGL_USE_SHAPES_UNIFORMS",()=>!1);lt.registerFlag("TOPK_LAST_DIM_CPU_HANDOFF_SIZE_THRESHOLD",()=>1e5);lt.registerFlag("TOPK_K_CPU_HANDOFF_THRESHOLD",()=>128);lt.registerFlag("WEBGL_EXP_CONV",()=>!1);lt.registerFlag("SOFTWARE_WEBGL_ENABLED",()=>lt.getBool("IS_TEST"));lt.registerFlag("WEBGL_MAX_SIZE_FOR_NARROW_TEXTURE",()=>1/0);lt.registerFlag("WEBGL_AUTO_SQUARIFY_NARROW_TEXTURE_SHAPE",()=>!1);lt.registerFlag("WEBGL2_ISNAN_CUSTOM",()=>!1);lt.registerFlag("ENGINE_COMPILE_ONLY",()=>!1);function Le(){let n,t,e,s,r,o,i,a,l,c;return W().getNumber("WEBGL_VERSION")===2?(n="#version 300 es",t="in",e="out",s="in",r="texture",o="outputColor",i="out vec4 outputColor;",a=W().getBool("WEBGL2_ISNAN_CUSTOM")?`
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
    `):(n="",t="attribute",e="varying",s="varying",r="texture2D",o="gl_FragColor",i="",a=`
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
    `),{version:n,attribute:t,varyingVs:e,varyingFs:s,texture2D:r,output:o,defineOutput:i,defineSpecialNaN:a,defineSpecialInf:l,defineRound:c}}function Br(n,t,e="index"){const s=ut(t);return s.map((r,o)=>{const i=`int ${n[o]} = ${e} / ${r}`,a=o===s.length-1?`int ${n[o+1]} = ${e} - ${n[o]} * ${r}`:`index -= ${n[o]} * ${r}`;return`${i}; ${a};`}).join("")}function Mu(n,t,e="index"){const s=ut(t);return s.map((r,o)=>{const i=`int ${n[o]} = ${e} / outShapeStrides[${o}]`,a=o===s.length-1?`int ${n[o+1]} = ${e} - ${n[o]} * outShapeStrides[${o}]`:`index -= ${n[o]} * outShapeStrides[${o}]`;return`${i}; ${a};`}).join("")}function Iz(n,t){const e=n.length,s=n.map(o=>`${t}[${o}]`),r=new Array(e-1);r[e-2]=s[e-1];for(let o=e-3;o>=0;--o)r[o]=`(${r[o+1]} * ${s[o+1]})`;return r}function kz(n,t,e="index"){const s=n.map((o,i)=>i),r=Iz(s,t);return r.map((o,i)=>{const a=`int ${n[i]} = ${e} / ${r[i]}`,l=i===r.length-1?`int ${n[i+1]} = ${e} - ${n[i]} * ${r[i]}`:`index -= ${n[i]} * ${r[i]}`;return`${a}; ${l};`}).join("")}function qp(n){const t=ut(n).map(e=>e.toString());return`
  int getFlatIndex(ivec3 coords) {
    return coords.x * ${t[0]} + coords.y * ${t[1]} + coords.z;
  }
`}function jp(){return`
  int getFlatIndex(ivec3 coords) {
    return coords.x * outShapeStrides[0] + coords.y * outShapeStrides[1] + coords.z;
  }
`}const bv=`
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
`;const{getBroadcastDims:yv}=fE;function Sz(n,t,e){const s=[];if(n.forEach(f=>{const p=q(f.shapeInfo.logicalShape);if(f.shapeInfo.isUniform?s.push(`uniform float ${f.name}${p>1?`[${p}]`:""};`):(s.push(`uniform sampler2D ${f.name};`),s.push(`uniform int offset${f.name};`)),e.enableShapeUniforms){const{uniformShape:m}=Xp(e.packedInputs,f.shapeInfo.logicalShape,f.shapeInfo.texShape);switch(m.length){case 1:s.push(`uniform int ${f.name}Shape;`);break;case 2:s.push(`uniform ivec2 ${f.name}Shape;`);break;case 3:s.push(`uniform ivec3 ${f.name}Shape;`);break;case 4:s.push(`uniform ivec4 ${f.name}Shape;`);break}s.push(`uniform ivec2 ${f.name}TexShape;`)}}),e.enableShapeUniforms){switch(t.logicalShape.length){case 1:s.push("uniform int outShape;");break;case 2:s.push("uniform ivec2 outShape;"),s.push("uniform int outShapeStrides;");break;case 3:s.push("uniform ivec3 outShape;"),s.push("uniform ivec2 outShapeStrides;");break;case 4:s.push("uniform ivec4 outShape;"),s.push("uniform ivec3 outShapeStrides;");break}s.push("uniform ivec2 outTexShape;")}e.customUniforms&&e.customUniforms.forEach(f=>{s.push(`uniform ${f.type} ${f.name}${f.arrayIndex?`[${f.arrayIndex}]`:""};`)});const r=s.join(`
`),o=n.map(f=>Nz(f,t,e.packedInputs,e.enableShapeUniforms)).join(`
`),i=t.texShape,a=Le(),l=Rz(a);let c,u,h=_z(a);return t.isPacked?(c=Tz(t.logicalShape,i,e.enableShapeUniforms),u=Dz(a)):(c=Ez(t.logicalShape,i,e.enableShapeUniforms),u=Az(a)),e.packedInputs&&(h+=Lz),[h,l,u,r,c,o,e.userCode].join(`
`)}function Ao(n,t=!1){const e=n.shapeInfo.logicalShape;switch(e.length){case 0:return Kz(n,t);case 1:return Zz(n,t);case 2:return Qz(n,t);case 3:return eB(n,t);case 4:return sB(n,t);case 5:return rB(n);case 6:return oB(n);default:throw new Error(`${e.length}-D input sampling is not yet supported`)}}function wv(n,t){switch(n.shapeInfo.logicalShape.length){case 0:return Xz(n);case 1:return Yz(n,t);case 2:return Jz(n,t);case 3:return tB(n,t);default:return nB(n,t)}}function Nz(n,t,e=!1,s){let r="";e?r+=wv(n,s):r+=Ao(n,s);const o=n.shapeInfo.logicalShape,i=t.logicalShape;return o.length<=i.length&&(e?r+=iB(n,t):r+=aB(n,t)),r}function Tz(n,t,e){switch(n.length){case 0:return vv();case 1:return Pz(n,t,e);case 2:return qz(n,t,e);case 3:return Bz(n,t,e);default:return Wz(n,t,e)}}function Ez(n,t,e){switch(n.length){case 0:return vv();case 1:return zz(n,t,e);case 2:return jz(n,t,e);case 3:return Vz(n,t,e);case 4:return Uz(n,t,e);case 5:return Gz(n,t);case 6:return Hz(n,t);default:throw new Error(`${n.length}-D output sampling is not yet supported`)}}function Rz(n){return`
    float sampleTexture(sampler2D textureSampler, vec2 uv) {
      return ${n.texture2D}(textureSampler, uv).r;
    }
  `}function Az(n){return`
    void setOutput(float val) {
      ${n.output} = vec4(val, 0, 0, 0);
    }
  `}function Dz(n){return`
    void setOutput(vec4 val) {
      ${n.output} = val;
    }
  `}function _z(n){return`${n.version}
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

    ${Fz}
    ${Oz}
    ${Mz}
  `}const Fz=`
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
`,Oz=`
vec2 packedUVfrom2D(int texelsInLogicalRow, int texNumR,
  int texNumC, int row, int col) {
  int texelIndex = (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,Mz=`
vec2 packedUVfrom3D(int texNumR, int texNumC,
    int texelsInBatch, int texelsInLogicalRow, int b,
    int row, int col) {
  int index = b * texelsInBatch + (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,Lz=`
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
`;function vv(){return`
    int getOutputCoords() {
      return 0;
    }
  `}function Pz(n,t,e){const s=[Math.ceil(t[0]/2),Math.ceil(t[1]/2)];return s[0]===1?e?`
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
  `}function zz(n,t,e){return t[0]===1?e?`
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
  `}function Bz(n,t,e){if(e)return`
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
  `;const s=[Math.ceil(t[0]/2),Math.ceil(t[1]/2)],r=Math.ceil(n[2]/2),o=r*Math.ceil(n[1]/2);return`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${s[0]}, ${s[1]}));
      int index = resTexRC.x * ${s[1]} + resTexRC.y;

      int b = index / ${o};
      index -= b * ${o};

      int r = 2 * (index / ${r});
      int c = imod(index, ${r}) * 2;

      return ivec3(b, r, c);
    }
  `}function Vz(n,t,e){if(e)return`
  ivec3 getOutputCoords() {
    ivec2 resTexRC = ivec2(resultUV.yx *
                           vec2(outTexShape[0], outTexShape[1]));
    int index = resTexRC.x * outTexShape[1] + resTexRC.y;
    ${Mu(["r","c","d"],n)}
    return ivec3(r, c, d);
  }
`;const s=Br(["r","c","d"],n);return`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${t[0]}, ${t[1]}));
      int index = resTexRC.x * ${t[1]} + resTexRC.y;
      ${s}
      return ivec3(r, c, d);
    }
  `}function Wz(n,t,e){if(e)return`
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
  `;const s=[Math.ceil(t[0]/2),Math.ceil(t[1]/2)],r=Math.ceil(n[n.length-1]/2),o=r*Math.ceil(n[n.length-2]/2);let i=o,a="",l="b, r, c";for(let c=2;c<n.length-1;c++)i*=n[n.length-c-1],a=`
      int b${c} = index / ${i};
      index -= b${c} * ${i};
    `+a,l=`b${c}, `+l;return`
    ivec${n.length} getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${s[0]}, ${s[1]}));
      int index = resTexRC.x * ${s[1]} + resTexRC.y;

      ${a}

      int b = index / ${o};
      index -= b * ${o};

      int r = 2 * (index / ${r});
      int c = imod(index, ${r}) * 2;

      return ivec${n.length}(${l});
    }
  `}function Uz(n,t,e){if(e)return`
    ivec4 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(outTexShape[0], outTexShape[1]));
      int index = resTexRC.x * outTexShape[1] + resTexRC.y;
      ${Mu(["r","c","d","d2"],n)}
      return ivec4(r, c, d, d2);
    }
  `;const s=Br(["r","c","d","d2"],n);return`
    ivec4 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(${t[0]}, ${t[1]}));
      int index = resTexRC.x * ${t[1]} + resTexRC.y;
      ${s}
      return ivec4(r, c, d, d2);
    }
  `}function Gz(n,t){const e=Br(["r","c","d","d2","d3"],n);return`
    ivec5 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx * vec2(${t[0]},
                             ${t[1]}));

      int index = resTexRC.x * ${t[1]} + resTexRC.y;

      ${e}

      ivec5 outShape = ivec5(r, c, d, d2, d3);
      return outShape;
    }
  `}function Hz(n,t){const e=Br(["r","c","d","d2","d3","d4"],n);return`
    ivec6 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(${t[0]}, ${t[1]}));
      int index = resTexRC.x * ${t[1]} + resTexRC.y;

      ${e}

      ivec6 result = ivec6(r, c, d, d2, d3, d4);
      return result;
    }
  `}function qz(n,t,e){const s=[Math.ceil(t[0]/2),Math.ceil(t[1]/2)];if(Mt(n,t))return e?`
      ivec2 getOutputCoords() {
        ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
        return 2 * ivec2(resultUV.yx * vec2(packedTexShape[0], packedTexShape[1]));
      }
    `:`
      ivec2 getOutputCoords() {
        return 2 * ivec2(resultUV.yx * vec2(${s[0]}, ${s[1]}));
      }
    `;const r=Math.ceil(n[1]/2);return e?`
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
      int r = 2 * (index / ${r});
      int c = imod(index, ${r}) * 2;

      return ivec2(r, c);
    }
  `}function jz(n,t,e){return Mt(n,t)?e?`
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
  `}function Vr(n){return`offset${n}`}function Xz(n){const t=n.name,e="get"+t.charAt(0).toUpperCase()+t.slice(1),s=Le();return`
    vec4 ${e}() {
      return ${s.texture2D}(${t}, halfCR);
    }
  `}function Kz(n,t){const e=n.name,s="get"+e.charAt(0).toUpperCase()+e.slice(1);if(n.shapeInfo.isUniform)return`float ${s}() {return ${e};}`;const[r,o]=n.shapeInfo.texShape;if(r===1&&o===1)return`
      float ${s}() {
        return sampleTexture(${e}, halfCR);
      }
    `;const i=Vr(e);if(t)return`
    float ${s}() {
      vec2 uv = uvFromFlat(${e}TexShape[0], ${e}TexShape[1], ${i});
      return sampleTexture(${e}, uv);
    }
  `;const[a,l]=n.shapeInfo.texShape;return`
    float ${s}() {
      vec2 uv = uvFromFlat(${a}, ${l}, ${i});
      return sampleTexture(${e}, uv);
    }
  `}function Yz(n,t){const e=n.name,s="get"+e.charAt(0).toUpperCase()+e.slice(1),r=n.shapeInfo.texShape,o=Le();if(t)return`
    vec4 ${s}(int index) {
      ivec2 packedTexShape = ivec2(ceil(float(${e}TexShape[0]) / 2.0), ceil(float(${e}TexShape[1]) / 2.0));
      vec2 uv = packedUVfrom1D(
        packedTexShape[0], packedTexShape[1], index);
      return ${o.texture2D}(${e}, uv);
    }
  `;const i=[Math.ceil(r[0]/2),Math.ceil(r[1]/2)];return`
    vec4 ${s}(int index) {
      vec2 uv = packedUVfrom1D(
        ${i[0]}, ${i[1]}, index);
      return ${o.texture2D}(${e}, uv);
    }
  `}function Zz(n,t){const e=n.name,s="get"+e.charAt(0).toUpperCase()+e.slice(1);if(n.shapeInfo.isUniform)return`
      float ${s}(int index) {
        ${Do(n)}
      }
    `;const r=n.shapeInfo.texShape,o=r[0],i=r[1];if(i===1&&o===1)return`
      float ${s}(int index) {
        return sampleTexture(${e}, halfCR);
      }
    `;const a=Vr(e);return i===1?t?`
      float ${s}(int index) {
        vec2 uv = vec2(0.5, (float(index + ${a}) + 0.5) / float(${e}TexShape[0]));
        return sampleTexture(${e}, uv);
      }
    `:`
      float ${s}(int index) {
        vec2 uv = vec2(0.5, (float(index + ${a}) + 0.5) / ${o}.0);
        return sampleTexture(${e}, uv);
      }
    `:o===1?t?`
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
      vec2 uv = uvFromFlat(${o}, ${i}, index + ${a});
      return sampleTexture(${e}, uv);
    }
  `}function Jz(n,t){const e=n.shapeInfo.logicalShape,s=n.name,r="get"+s.charAt(0).toUpperCase()+s.slice(1),o=n.shapeInfo.texShape,i=o[0],a=o[1],l=Le();if(o!=null&&Mt(e,o))return t?`
      vec4 ${r}(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(${s}TexShape[1], ${s}TexShape[0]);

        return ${l.texture2D}(${s}, uv);
      }
    `:`
      vec4 ${r}(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(${a}.0, ${i}.0);

        return ${l.texture2D}(${s}, uv);
      }
    `;if(t)return`
    vec4 ${r}(int row, int col) {
      ivec2 packedTexShape = ivec2(ceil(float(${s}TexShape[0]) / 2.0), ceil(float(${s}TexShape[1]) / 2.0));
      int valuesPerRow = int(ceil(float(${s}Shape[1]) / 2.0));
      vec2 uv = packedUVfrom2D(valuesPerRow, packedTexShape[0], packedTexShape[1], row, col);
      return ${l.texture2D}(${s}, uv);
    }
  `;const c=[Math.ceil(o[0]/2),Math.ceil(o[1]/2)],u=Math.ceil(e[1]/2);return`
    vec4 ${r}(int row, int col) {
      vec2 uv = packedUVfrom2D(${u}, ${c[0]}, ${c[1]}, row, col);
      return ${l.texture2D}(${s}, uv);
    }
  `}function Qz(n,t){const e=n.shapeInfo.logicalShape,s=n.name,r="get"+s.charAt(0).toUpperCase()+s.slice(1),o=n.shapeInfo.texShape;if(o!=null&&Mt(e,o)){if(t)return`
      float ${r}(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(${s}TexShape[1], ${s}TexShape[0]);
        return sampleTexture(${s}, uv);
      }
    `;const d=o[0],f=o[1];return`
    float ${r}(int row, int col) {
      vec2 uv = (vec2(col, row) + halfCR) / vec2(${f}.0, ${d}.0);
      return sampleTexture(${s}, uv);
    }
  `}const{newShape:i,keptDims:a}=Hs(e),l=i;if(l.length<e.length){const d=_o(n,l),f=["row","col"];return`
      ${Ao(d,t)}
      float ${r}(int row, int col) {
        return ${r}(${Fo(f,a)});
      }
    `}if(n.shapeInfo.isUniform)return`
      float ${r}(int row, int col) {
        int index = round(dot(vec2(row, col), vec2(${e[1]}, 1)));
        ${Do(n)}
      }
    `;const c=o[0],u=o[1],h=Vr(s);return u===1?t?`
      float ${r}(int row, int col) {
        float index = dot(vec3(row, col, ${h}), vec3(${s}Shape[1], 1, 1));
        vec2 uv = vec2(0.5, (index + 0.5) / float(${s}TexShape[0]));
        return sampleTexture(${s}, uv);
      }
    `:`
    float ${r}(int row, int col) {
      float index = dot(vec3(row, col, ${h}), vec3(${e[1]}, 1, 1));
      vec2 uv = vec2(0.5, (index + 0.5) / ${c}.0);
      return sampleTexture(${s}, uv);
    }
  `:c===1?t?`
      float ${r}(int row, int col) {
        float index = dot(vec3(row, col, ${h}), vec3(${s}Shape[1], 1, 1));
        vec2 uv = vec2((index + 0.5) / float(${s}TexShape[1]), 0.5);
        return sampleTexture(${s}, uv);
      }
    `:`
    float ${r}(int row, int col) {
      float index = dot(vec3(row, col, ${h}), vec3(${e[1]}, 1, 1));
      vec2 uv = vec2((index + 0.5) / ${u}.0, 0.5);
      return sampleTexture(${s}, uv);
    }
  `:t?`
      float ${r}(int row, int col) {
        // Explicitly use integer operations as dot() only works on floats.
        int index = row * ${s}Shape[1] + col + ${h};
        vec2 uv = uvFromFlat(${s}TexShape[0], ${s}TexShape[1], index);
        return sampleTexture(${s}, uv);
      }
    `:`
  float ${r}(int row, int col) {
    // Explicitly use integer operations as dot() only works on floats.
    int index = row * ${e[1]} + col + ${h};
    vec2 uv = uvFromFlat(${c}, ${u}, index);
    return sampleTexture(${s}, uv);
  }
`}function tB(n,t){const e=n.shapeInfo.logicalShape,s=n.name,r="get"+s.charAt(0).toUpperCase()+s.slice(1),o=n.shapeInfo.texShape,i=[Math.ceil(o[0]/2),Math.ceil(o[1]/2)];if(e[0]===1){const d=e.slice(1),f=[1,2],p=_o(n,d),m=["b","row","col"];return`
        ${wv(p,t)}
        vec4 ${r}(int b, int row, int col) {
          return ${r}(${Fo(m,f)});
        }
      `}const a=Le();if(t)return`
    vec4 ${r}(int b, int row, int col) {
      ivec2 packedTexShape = ivec2(ceil(float(${s}TexShape[0]) / 2.0), ceil(float(${s}TexShape[1]) / 2.0));
      int valuesPerRow = int(ceil(float(${s}Shape[2]) / 2.0));
      int texelsInBatch = valuesPerRow * int(ceil(float(${s}Shape[1]) / 2.0));
      vec2 uv = packedUVfrom3D(
        packedTexShape[0], packedTexShape[1], texelsInBatch, valuesPerRow, b, row, col);
      return ${a.texture2D}(${s}, uv);
    }
  `;const l=i[0],c=i[1],u=Math.ceil(e[2]/2),h=u*Math.ceil(e[1]/2);return`
    vec4 ${r}(int b, int row, int col) {
      vec2 uv = packedUVfrom3D(
        ${l}, ${c}, ${h}, ${u}, b, row, col);
      return ${a.texture2D}(${s}, uv);
    }
  `}function eB(n,t){const e=n.shapeInfo.logicalShape,s=n.name,r="get"+s.charAt(0).toUpperCase()+s.slice(1),o=e[1]*e[2],i=e[2],{newShape:a,keptDims:l}=Hs(e),c=a;if(c.length<e.length){const m=_o(n,c),g=["row","col","depth"];return`
        ${Ao(m,t)}
        float ${r}(int row, int col, int depth) {
          return ${r}(${Fo(g,l)});
        }
      `}if(n.shapeInfo.isUniform)return`
      float ${r}(int row, int col, int depth) {
        int index = round(dot(vec3(row, col, depth),
                          vec3(${o}, ${i}, 1)));
        ${Do(n)}
      }
    `;const u=n.shapeInfo.texShape,h=u[0],d=u[1],f=n.shapeInfo.flatOffset;if(d===o&&f==null)return t?`
      float ${r}(int row, int col, int depth) {
        int stride1 = ${s}Shape[2];
        float texR = float(row);
        float texC = dot(vec2(col, depth), vec2(stride1, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${s}TexShape[1], ${s}TexShape[0]);
        return sampleTexture(${s}, uv);
      }
    `:`
        float ${r}(int row, int col, int depth) {
          float texR = float(row);
          float texC = dot(vec2(col, depth), vec2(${i}, 1));
          vec2 uv = (vec2(texC, texR) + halfCR) /
                     vec2(${d}.0, ${h}.0);
          return sampleTexture(${s}, uv);
        }
      `;if(d===i&&f==null)return t?`
      float ${r}(int row, int col, int depth) {
        float texR = dot(vec2(row, col), vec2(${s}Shape[1], 1));
        float texC = float(depth);
        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${s}TexShape[1], ${s}TexShape[0]);
        return sampleTexture(${s}, uv);
      }
    `:`
    float ${r}(int row, int col, int depth) {
      float texR = dot(vec2(row, col), vec2(${e[1]}, 1));
      float texC = float(depth);
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${d}.0, ${h}.0);
      return sampleTexture(${s}, uv);
    }
  `;const p=Vr(s);return t?`
    float ${r}(int row, int col, int depth) {
      // Explicitly use integer operations as dot() only works on floats.
      int stride0 = ${s}Shape[1] * ${s}Shape[2];
      int stride1 = ${s}Shape[2];
      int index = row * stride0 + col * stride1 + depth + ${p};
      vec2 uv = uvFromFlat(${s}TexShape[0], ${s}TexShape[1], index);
      return sampleTexture(${s}, uv);
    }
    `:`
      float ${r}(int row, int col, int depth) {
        // Explicitly use integer operations as dot() only works on floats.
        int index = row * ${o} + col * ${i} + depth + ${p};
        vec2 uv = uvFromFlat(${h}, ${d}, index);
        return sampleTexture(${s}, uv);
      }
  `}function nB(n,t){const e=n.name,s="get"+e.charAt(0).toUpperCase()+e.slice(1),r=Le();if(t)return`
    vec4 ${s}(int b2, int b, int row, int col) {
      int valuesPerRow = int(ceil(float(${e}Shape[3]) / 2.0));
      int texelsInBatch = valuesPerRow * int(ceil(float(${e}Shape[2]) / 2.0));
      int index = b * texelsInBatch + (row / 2) * valuesPerRow + (col / 2);
      texelsInBatch *= ${e}Shape[1];
      index = b2 * texelsInBatch + index;
      ivec2 packedTexShape = ivec2(ceil(float(${e}TexShape[0]) / 2.0), ceil(float(${e}TexShape[1]) / 2.0));
      int texR = index / packedTexShape[1];
      int texC = index - texR * packedTexShape[1];
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(packedTexShape[1], packedTexShape[0]); return ${r.texture2D}(${e}, uv);
    }
  `;const o=n.shapeInfo.logicalShape,i=o.length,a=n.shapeInfo.texShape,l=[Math.ceil(a[0]/2),Math.ceil(a[1]/2)],c=l[0],u=l[1],h=Math.ceil(o[i-1]/2);let d=h*Math.ceil(o[i-2]/2),f="int b, int row, int col",p=`b * ${d} + (row / 2) * ${h} + (col / 2)`;for(let m=2;m<i-1;m++)f=`int b${m}, `+f,d*=o[i-m-1],p=`b${m} * ${d} + `+p;return`
    vec4 ${s}(${f}) {
      int index = ${p};
      int texR = index / ${u};
      int texC = index - texR * ${u};
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${u}, ${c});
      return ${r.texture2D}(${e}, uv);
    }
  `}function sB(n,t){const e=n.shapeInfo.logicalShape,s=n.name,r="get"+s.charAt(0).toUpperCase()+s.slice(1),o=e[3],i=e[2]*o,a=e[1]*i,{newShape:l,keptDims:c}=Hs(e);if(l.length<e.length){const b=_o(n,l),w=["row","col","depth","depth2"];return`
      ${Ao(b,t)}
      float ${r}(int row, int col, int depth, int depth2) {
        return ${r}(${Fo(w,c)});
      }
    `}if(n.shapeInfo.isUniform)return`
      float ${r}(int row, int col, int depth, int depth2) {
        int index = round(dot(vec4(row, col, depth, depth2),
                          vec4(${a}, ${i}, ${o}, 1)));
        ${Do(n)}
      }
    `;const u=n.shapeInfo.flatOffset,h=n.shapeInfo.texShape,d=h[0],f=h[1],p=`int stride2 = ${s}Shape[3];`,m=`int stride1 = ${s}Shape[2] * stride2;`,g=`int stride0 = ${s}Shape[1] * stride1;`;if(f===a&&u==null)return t?`
      float ${r}(int row, int col, int depth, int depth2) {
        ${p}
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
      float ${r}(int row, int col, int depth, int depth2) {
        float texR = float(row);
        float texC =
            dot(vec3(col, depth, depth2),
                vec3(${i}, ${o}, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${f}.0, ${d}.0);
        return sampleTexture(${s}, uv);
      }
    `;if(f===o&&u==null)return t?`
      float ${r}(int row, int col, int depth, int depth2) {
        float texR = dot(vec3(row, col, depth),
                         vec3(${s}Shape[1] * ${s}Shape[2], ${s}Shape[2], 1));
        float texC = float(depth2);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${s}TexShape[1], ${s}TexShape[0]);
        return sampleTexture(${s}, uv);
      }
    `:`
      float ${r}(int row, int col, int depth, int depth2) {
        float texR = dot(vec3(row, col, depth),
                         vec3(${e[1]*e[2]}, ${e[2]}, 1));
        float texC = float(depth2);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${f}.0, ${d}.0);
        return sampleTexture(${s}, uv);
      }
    `;const x=Vr(s);return t?`
    float ${r}(int row, int col, int depth, int depth2) {
      // Explicitly use integer operations as dot() only works on floats.
      ${p}
      ${m}
      ${g}
      int index = row * stride0 + col * stride1 +
          depth * stride2 + depth2;
      vec2 uv = uvFromFlat(${s}TexShape[0], ${s}TexShape[1], index + ${x});
      return sampleTexture(${s}, uv);
    }
  `:`
    float ${r}(int row, int col, int depth, int depth2) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * ${a} + col * ${i} +
          depth * ${o} + depth2;
      vec2 uv = uvFromFlat(${d}, ${f}, index + ${x});
      return sampleTexture(${s}, uv);
    }
  `}function rB(n){const t=n.shapeInfo.logicalShape,e=n.name,s="get"+e.charAt(0).toUpperCase()+e.slice(1),r=t[4],o=t[3]*r,i=t[2]*o,a=t[1]*i,{newShape:l,keptDims:c}=Hs(t);if(l.length<t.length){const m=_o(n,l),g=["row","col","depth","depth2","depth3"];return`
      ${Ao(m)}
      float ${s}(int row, int col, int depth, int depth2, int depth3) {
        return ${s}(${Fo(g,c)});
      }
    `}if(n.shapeInfo.isUniform)return`
      float ${s}(int row, int col, int depth, int depth2, int depth3) {
        float index = dot(
          vec4(row, col, depth, depth2),
          vec4(${a}, ${i}, ${o}, ${r})) +
          depth3;
        ${Do(n)}
      }
    `;const u=n.shapeInfo.flatOffset,h=n.shapeInfo.texShape,d=h[0],f=h[1];if(f===a&&u==null)return`
      float ${s}(int row, int col, int depth, int depth2, int depth3) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
                         vec4(${i}, ${o}, ${r}, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${f}.0, ${d}.0);
        return sampleTexture(${e}, uv);
      }
    `;if(f===r&&u==null)return`
      float ${s}(int row, int col, int depth, int depth2, int depth3) {
        float texR = dot(
          vec4(row, col, depth, depth2),
          vec4(${t[1]*t[2]*t[3]},
               ${t[2]*t[3]}, ${t[3]}, 1));
        int texC = depth3;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${f}.0, ${d}.0);
        return sampleTexture(${e}, uv);
      }
    `;const p=Vr(e);return`
    float ${s}(int row, int col, int depth, int depth2, int depth3) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * ${a} + col * ${i} + depth * ${o} +
          depth2 * ${r} + depth3 + ${p};
      vec2 uv = uvFromFlat(${d}, ${f}, index);
      return sampleTexture(${e}, uv);
    }
  `}function oB(n){const t=n.shapeInfo.logicalShape,e=n.name,s="get"+e.charAt(0).toUpperCase()+e.slice(1),{newShape:r,keptDims:o}=Hs(t);if(r.length<t.length){const g=_o(n,r),x=["row","col","depth","depth2","depth3","depth4"];return`
      ${Ao(g)}
      float ${s}(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        return ${s}(${Fo(x,o)});
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
        ${Do(n)}
      }
    `;const h=n.shapeInfo.flatOffset,d=n.shapeInfo.texShape,f=d[0],p=d[1];if(p===u&&h==null)return`
      float ${s}(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
          vec4(${c}, ${l}, ${a}, ${i})) +
               float(depth4);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${p}.0, ${f}.0);
        return sampleTexture(${e}, uv);
      }
    `;if(p===i&&h==null)return`
      float ${s}(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        float texR = dot(vec4(row, col, depth, depth2),
          vec4(${t[1]*t[2]*t[3]*t[4]},
               ${t[2]*t[3]*t[4]},
               ${t[3]*t[4]},
               ${t[4]})) + float(depth3);
        int texC = depth4;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${p}.0, ${f}.0);
        return sampleTexture(${e}, uv);
      }
    `;const m=Vr(e);return`
    float ${s}(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * ${u} + col * ${c} + depth * ${l} +
          depth2 * ${a} + depth3 * ${i} + depth4 + ${m};
      vec2 uv = uvFromFlat(${f}, ${p}, index);
      return sampleTexture(${e}, uv);
    }
  `}function Do(n){const t=n.name,e=q(n.shapeInfo.logicalShape);return e<2?`return ${t};`:`
    for (int i = 0; i < ${e}; i++) {
      if (i == index) {
        return ${t}[i];
      }
    }
  `}function iB(n,t){const e=n.name,s=e.charAt(0).toUpperCase()+e.slice(1),r="get"+s+"AtOutCoords",o=n.shapeInfo.logicalShape.length,i=t.logicalShape.length,a=yv(n.shapeInfo.logicalShape,t.logicalShape),l=Wt(i),c=i-o;let u;const h=["x","y","z","w","u","v"];o===0?u="":i<2&&a.length>=1?u="coords = 0;":u=a.map(b=>`coords.${h[b+c]} = 0;`).join(`
`);let d="";i<2&&o>0?d="coords":d=n.shapeInfo.logicalShape.map((b,w)=>`coords.${h[w+c]}`).join(", ");let f="return outputValue;";const m=q(n.shapeInfo.logicalShape)===1,x=q(t.logicalShape)===1;if(o===1&&!m&&!x)f=`
      return vec4(outputValue.xy, outputValue.xy);
    `;else if(m&&!x)i===1?f=`
        return vec4(outputValue.x, outputValue.x, 0., 0.);
      `:f=`
        return vec4(outputValue.x);
      `;else if(a.length){const b=o-2,w=o-1;a.indexOf(b)>-1&&a.indexOf(w)>-1?f="return vec4(outputValue.x);":a.indexOf(b)>-1?f="return vec4(outputValue.x, outputValue.y, outputValue.x, outputValue.y);":a.indexOf(w)>-1&&(f="return vec4(outputValue.xx, outputValue.zz);")}return`
    vec4 ${r}() {
      ${l} coords = getOutputCoords();
      ${u}
      vec4 outputValue = get${s}(${d});
      ${f}
    }
  `}function aB(n,t){const e=n.name,s=e.charAt(0).toUpperCase()+e.slice(1),r="get"+s+"AtOutCoords",o=t.texShape,i=n.shapeInfo.texShape,a=n.shapeInfo.logicalShape.length,l=t.logicalShape.length;if(!n.shapeInfo.isUniform&&a===l&&n.shapeInfo.flatOffset==null&&Mt(i,o))return`
      float ${r}() {
        return sampleTexture(${e}, resultUV);
      }
    `;const c=Wt(l),u=yv(n.shapeInfo.logicalShape,t.logicalShape),h=l-a;let d;const f=["x","y","z","w","u","v"];a===0?d="":l<2&&u.length>=1?d="coords = 0;":d=u.map(m=>`coords.${f[m+h]} = 0;`).join(`
`);let p="";return l<2&&a>0?p="coords":p=n.shapeInfo.logicalShape.map((m,g)=>`coords.${f[g+h]}`).join(", "),`
    float ${r}() {
      ${c} coords = getOutputCoords();
      ${d}
      return get${s}(${p});
    }
  `}function Wt(n){if(n<=1)return"int";if(n===2)return"ivec2";if(n===3)return"ivec3";if(n===4)return"ivec4";if(n===5)return"ivec5";if(n===6)return"ivec6";throw Error(`GPU for rank ${n} is not yet supported`)}function Xp(n,t,e){const{newShape:s,keptDims:r}=Hs(t),o=t.length,i=n&&o===3&&t[0]===1,a=i?t.slice(1):s,l=!n&&o>1&&!Mt(t,e)&&s.length<o||i;return{useSqueezeShape:l,uniformShape:l?a:t,keptDims:r}}function _o(n,t){const e=JSON.parse(JSON.stringify(n));return e.shapeInfo.logicalShape=t,e}function Fo(n,t){return t.map(e=>n[e]).join(", ")}function lB(n,t,e,s){const r=e.map((u,h)=>{const d={logicalShape:u.shape,texShape:u.isUniform?null:u.texData.texShape,isUniform:u.isUniform,isPacked:u.isUniform?!1:u.texData.isPacked,flatOffset:null};return u.texData!=null&&u.texData.slice!=null&&u.texData.slice.flatOffset>0&&(d.flatOffset=u.texData.slice.flatOffset),{name:t.variableNames[h],shapeInfo:d}}),o=r.map(u=>u.shapeInfo),i={logicalShape:s.shape,texShape:s.texData.texShape,isUniform:!1,isPacked:s.texData.isPacked,flatOffset:null},a=Sz(r,i,t),l=ez(n.gl,a),c=n.createProgram(l);return W().get("ENGINE_COMPILE_ONLY")?{program:t,fragmentShader:l,source:a,webGLProgram:c,inShapeInfos:o,outShapeInfo:i,variablesLocations:null,customUniformLocations:null,infLoc:null,nanLoc:null,outShapeLocation:null,outShapeStridesLocation:null,outTexShapeLocation:null}:(n.buildVao(c),Object.assign({program:t,fragmentShader:l,source:a,webGLProgram:c,inShapeInfos:o,outShapeInfo:i},Cv(n,t,c)))}function Cv(n,t,e){const s=[],r=[];let o,i,a,l=null,c=null;c=n.getUniformLocation(e,"NAN",!1),W().getNumber("WEBGL_VERSION")===1&&(l=n.getUniformLocation(e,"INFINITY",!1));const u=!1;for(const h of t.variableNames){const d={name:h,uniform:n.getUniformLocation(e,h,u),offset:n.getUniformLocation(e,`offset${h}`,u)};t.enableShapeUniforms&&(d.shape=n.getUniformLocation(e,`${h}Shape`,u),d.texShape=n.getUniformLocation(e,`${h}TexShape`,u)),s.push(d)}if(t.enableShapeUniforms&&(o=n.getUniformLocation(e,"outShape",u),a=n.getUniformLocation(e,"outShapeStrides",u),i=n.getUniformLocation(e,"outTexShape",u)),t.customUniforms)for(const h of t.customUniforms)r.push(n.getUniformLocation(e,h.name,u));return{variablesLocations:s,customUniformLocations:r,infLoc:l,nanLoc:c,outShapeLocation:o,outShapeStridesLocation:a,outTexShapeLocation:i}}function Ag(n,t){if(n.length!==t.length)throw Error(`Binary was compiled with ${n.length} inputs, but was executed with ${t.length} inputs`);n.forEach((e,s)=>{const r=e.logicalShape,o=t[s],i=o.shape;if(!Mt(r,i))throw Error(`Binary was compiled with different shapes than the current args. Shapes ${r} and ${i} must match`);if(e.isUniform&&o.isUniform)return;const a=e.texShape,l=o.isUniform?null:o.texData.texShape;if(!Mt(a,l))throw Error(`Binary was compiled with different texture shapes than the current args. Shape ${a} and ${l} must match`)})}function cB(n,t,e,s,r){t.program.enableShapeUniforms||(Ag(t.inShapeInfos,e),Ag([t.outShapeInfo],[s]));const o=s.texData.texture,i=s.texData.texShape;s.texData.isPacked?n.setOutputPackedMatrixTexture(o.texture,i[0],i[1]):n.setOutputMatrixTexture(o.texture,i[0],i[1]),n.setProgram(t.webGLProgram),n.bindVertexArray(t.webGLProgram.vao),W().getNumber("WEBGL_VERSION")===1&&t.infLoc!==null&&n.gl.uniform1f(t.infLoc,1/0),t.nanLoc!==null&&n.gl.uniform1f(t.nanLoc,NaN);for(let l=0;l<e.length;++l){const c=e[l],{uniform:u,offset:h,shape:d,texShape:f}=t.variablesLocations[l];if(d){const{uniformShape:p}=Xp(t.program.packedInputs,c.shape,c.texData.texShape);switch(p.length){case 1:n.gl.uniform1iv(d,new Int32Array(p));break;case 2:n.gl.uniform2iv(d,new Int32Array(p));break;case 3:n.gl.uniform3iv(d,new Int32Array(p));break;case 4:n.gl.uniform4iv(d,new Int32Array(p));break}}if(f&&n.gl.uniform2i(f,c.texData.texShape[0],c.texData.texShape[1]),u!=null){if(c.isUniform){if(q(c.shape)<2)n.gl.uniform1f(u,c.uniformValues[0]);else{let p=c.uniformValues;p instanceof Float32Array||(p=new Float32Array(p)),n.gl.uniform1fv(u,p)}continue}c.texData.slice!=null&&h!=null&&n.gl.uniform1i(h,c.texData.slice.flatOffset),n.setInputMatrixTexture(c.texData.texture.texture,u,l)}}const a=t.outShapeLocation;if(a)switch(s.shape.length){case 1:n.gl.uniform1iv(a,new Int32Array(s.shape));break;case 2:n.gl.uniform2iv(a,new Int32Array(s.shape));break;case 3:n.gl.uniform3iv(a,new Int32Array(s.shape));break;case 4:n.gl.uniform4iv(a,new Int32Array(s.shape));break}if(t.outShapeStridesLocation){const l=ut(s.shape);switch(s.shape.length){case 2:n.gl.uniform1iv(t.outShapeStridesLocation,new Int32Array(l));break;case 3:n.gl.uniform2iv(t.outShapeStridesLocation,new Int32Array(l));break;case 4:n.gl.uniform3iv(t.outShapeStridesLocation,new Int32Array(l));break}}if(t.outTexShapeLocation&&n.gl.uniform2i(t.outTexShapeLocation,s.texData.texShape[0],s.texData.texShape[1]),t.program.customUniforms&&r)for(let l=0;l<t.program.customUniforms.length;++l){const c=t.program.customUniforms[l],u=t.customUniformLocations[l],h=r[l];if(c.type==="float")n.gl.uniform1fv(u,h);else if(c.type==="vec2")n.gl.uniform2fv(u,h);else if(c.type==="vec3")n.gl.uniform3fv(u,h);else if(c.type==="vec4")n.gl.uniform4fv(u,h);else if(c.type==="int")n.gl.uniform1iv(u,h);else if(c.type==="ivec2")n.gl.uniform2iv(u,h);else if(c.type==="ivec3")n.gl.uniform3iv(u,h);else if(c.type==="ivec4")n.gl.uniform4iv(u,h);else throw Error(`uniform type ${c.type} is not supported yet.`)}n.executeProgram()}function uB(n,t,e){let s="";t.concat(e).forEach(i=>{const a=i.texData!=null&&i.texData.slice!=null&&i.texData.slice.flatOffset>0;if(n.enableShapeUniforms&&!i.isUniform){const l=i.texData.texShape,{useSqueezeShape:c,uniformShape:u,keptDims:h}=Xp(n.packedInputs,i.shape,l);let d="",f="",p="";if(u.length===1&&n.packedInputs){const v=[Math.ceil(l[0]/2),Math.ceil(l[1]/2)];d=`${v[0]>1}_${v[1]>1}`}else if(u.length===2&&!n.packedInputs)f=`${u[0]>1}_${u[1]>1}`;else if(u.length>2&&!n.packedInputs){const v=ut(u);p=`${v[0]===l[1]}_${v[v.length-1]===l[1]}`}const m=i.shape.length,g=u.length===2&&Mt(i.shape,l),x=q(i.shape)===1,b=uo(i.shape,e.shape),w=!n.packedInputs&&m===e.shape.length&&Mt(l,e.texData.texShape),y=n.packedInputs||u.length>2?"":`${l[0]>1}_${l[1]>1}`;s+=`${m}_${w}_${c?h:""}_${u.length}_${x}_${b}_${g}_${d}_${f}_${p}_${y}_${a}`}else{const l=i.isUniform?"uniform":i.texData.texShape;s+=`${i.shape}_${l}_${a}`}});const r=n.userCode;let o=n.constructor.name;return o+="_"+s+"_"+r+`${W().getNumber("WEBGL_VERSION")}`,o}function Re(n){return W().getBool("WEBGL_USE_SHAPES_UNIFORMS")&&n<=4}class hB{constructor(t){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outPackingScheme=gi.DENSE,this.customUniforms=[{name:"texShape",type:"ivec2"}];const e=Le();this.outputShape=t,this.enableShapeUniforms=Re(this.outputShape.length),this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        ${this.enableShapeUniforms?Mu(["r","c","d"],t):Br(["r","c","d"],t)}
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
    `}}class dB{constructor(t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outPackingScheme=gi.DENSE,this.customUniforms=[{name:"texShape",type:"ivec2"}];const e=Le();this.outputShape=t,this.enableShapeUniforms=Re(this.outputShape.length),this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        ${this.enableShapeUniforms?Mu(["r","c","d"],t):Br(["r","c","d"],t)}
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
    `}}class fB{constructor(t){this.variableNames=["A"],this.outTexUsage=on.DOWNLOAD;const e=Le();this.outputShape=t,this.userCode=`
      ${bv}

      void main() {
        float x = getAAtOutCoords();
        ${e.output} = encode_float(x);
      }
    `}}class pB{constructor(t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outTexUsage=on.DOWNLOAD;const e=Le();this.outputShape=t,this.userCode=`
      ${bv}

      void main() {
        ivec3 coords = getOutputCoords();
        float x = getChannel(getAAtOutCoords(), vec2(coords.y, coords.z));
        ${e.output} = encode_float(x);
      }
    `}}const mB={R:0,G:1,B:2,A:3};class Dg{constructor(t,e=!1,s="RGBA"){this.variableNames=["A"],this.customUniforms=[{name:"texShape",type:"ivec2"}];const r=Le();this.outputShape=t,this.enableShapeUniforms=Re(this.outputShape.length);let o="result";e&&(o="floor(result * 255. + 0.5)");let i="";for(let a=0;a<s.length;a++){const l=s[a];i+=`
          if(offset == ${a}) {
            result = values[${mB[l]}];
          }`}this.userCode=`
      ${this.enableShapeUniforms?jp():qp(t)}

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
          vec4 values = ${r.texture2D}(A, uv);
          ${i}
        }
        ${r.output} = vec4(${o}, 0., 0., 0.);
      }
    `}}class gB{constructor(t,e=!1){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.customUniforms=[{name:"texShape",type:"ivec2"}];const s=Le();this.outputShape=t,this.enableShapeUniforms=Re(this.outputShape.length);let r="",o="result";e&&(o="floor(result * 255. + 0.5)");for(let i=0;i<=1;i++)for(let a=0;a<=1;a++){const l=i*2+a;r+=`
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
        ${this.enableShapeUniforms?jp():qp(t)}

        void main() {
          ivec3 coords = getOutputCoords();

          vec4 result = vec4(0.);
          int flatIndex, r, c, offset;
          ivec3 localCoords;
          vec2 uv;
          vec4 values;

          ${r}

          ${s.output} = ${o};
        }
    `}}function xB(n){const t=Le(),e=`${t.version}
    precision highp float;
    ${t.attribute} vec3 clipSpacePos;
    ${t.attribute} vec2 uv;
    ${t.varyingVs} vec2 resultUV;

    void main() {
      gl_Position = vec4(clipSpacePos, 1);
      resultUV = uv;
    }`;return tz(n,e)}function bB(n){const t=new Float32Array([-1,1,0,0,1,-1,-1,0,0,0,1,1,0,1,1,1,-1,0,1,0]);return oz(n,t)}function yB(n){const t=new Uint16Array([0,1,2,2,1,3]);return iz(n,t)}function Pa(n,t,e,s,r,o){lz(t,e);const i=az(n),a=n.TEXTURE_2D;return st(n,()=>n.bindTexture(a,i)),st(n,()=>n.texParameteri(a,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE)),st(n,()=>n.texParameteri(a,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)),st(n,()=>n.texParameteri(a,n.TEXTURE_MIN_FILTER,n.NEAREST)),st(n,()=>n.texParameteri(a,n.TEXTURE_MAG_FILTER,n.NEAREST)),W().getNumber("WEBGL_VERSION")===1?st(n,()=>n.texImage2D(a,0,s,t,e,0,r,o,null)):st(n,()=>n.texStorage2D(a,1,s,t,e)),st(n,()=>n.bindTexture(n.TEXTURE_2D,null)),{texture:i,texShape:[e,t]}}function $v(n){return n.internalFormatFloat}function wB(n,t,e,s){const[r,o]=Ma(t,e);return Pa(n,r,o,$v(s),s.textureFormatFloat,n.FLOAT)}function Iv(n){return n.internalFormatHalfFloat}function vB(n,t,e,s){const[r,o]=Ma(t,e);return Pa(n,r,o,Iv(s),s.textureFormatFloat,s.textureTypeHalfFloat)}function kv(n){return n.downloadTextureFormat}function CB(n,t,e,s){const[r,o]=Ma(t,e);return Pa(n,r,o,kv(s),n.RGBA,n.UNSIGNED_BYTE)}function Sv(n){return n.internalFormatPackedFloat}function $B(n,t,e,s){const[r,o]=Ro(t,e);return Pa(n,r,o,Sv(s),n.RGBA,n.FLOAT)}function Nv(n){return n.internalFormatPackedHalfFloat}function IB(n,t,e,s){const[r,o]=Ro(t,e);return Pa(n,r,o,Nv(s),n.RGBA,s.textureTypeHalfFloat)}function kB(n,t,e){return st(n,()=>n.bindBuffer(n.ARRAY_BUFFER,e)),Tg(n,t,"clipSpacePos",e,3,20,0)&&Tg(n,t,"uv",e,2,20,12)}function SB(n,t,e,s,r,o){st(n,()=>n.bindTexture(n.TEXTURE_2D,t));let i,a,l;r instanceof Uint8Array?(i=new Uint8Array(e*s*4),a=n.UNSIGNED_BYTE,l=n.RGBA):(i=new Float32Array(e*s*4),a=n.FLOAT,l=o.internalFormatPackedFloat),i.set(r),W().getNumber("WEBGL_VERSION")===2?st(n,()=>n.texSubImage2D(n.TEXTURE_2D,0,0,0,e,s,n.RGBA,a,i)):st(n,()=>n.texImage2D(n.TEXTURE_2D,0,l,e,s,0,n.RGBA,a,i)),st(n,()=>n.bindTexture(n.TEXTURE_2D,null))}function NB(n,t,e){st(n,()=>n.bindTexture(n.TEXTURE_2D,t)),e.data instanceof Uint8Array?W().getNumber("WEBGL_VERSION")===2?st(n,()=>n.texSubImage2D(n.TEXTURE_2D,0,0,0,e.width,e.height,n.RGBA,n.UNSIGNED_BYTE,e.data)):st(n,()=>n.texImage2D(n.TEXTURE_2D,0,n.RGBA,e.width,e.height,0,n.RGBA,n.UNSIGNED_BYTE,e.data)):W().getNumber("WEBGL_VERSION")===2?st(n,()=>n.texSubImage2D(n.TEXTURE_2D,0,0,0,n.RGBA,n.UNSIGNED_BYTE,e)):st(n,()=>n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,e)),st(n,()=>n.bindTexture(n.TEXTURE_2D,null))}function TB(n,t,e,s){const r=n.createBuffer();st(n,()=>n.bindBuffer(n.PIXEL_PACK_BUFFER,r));const a=4*4*t*e;return st(n,()=>n.bufferData(n.PIXEL_PACK_BUFFER,a,n.STREAM_READ)),st(n,()=>n.readPixels(0,0,e,t,n.RGBA,n.FLOAT,0)),st(n,()=>n.bindBuffer(n.PIXEL_PACK_BUFFER,null)),r}function EB(n,t,e){const s=n,r=new Float32Array(e);return s.bindBuffer(s.PIXEL_PACK_BUFFER,t),s.getBufferSubData(s.PIXEL_PACK_BUFFER,0,r),s.bindBuffer(s.PIXEL_PACK_BUFFER,null),r}function RB(n,t,e,s){const[r,o]=Ma(t,e),i=4,a=new Uint8Array(j3(t*e,i));return st(n,()=>n.readPixels(0,0,r,o,s.downloadTextureFormat,n.UNSIGNED_BYTE,a)),new Float32Array(a.buffer)}function AB(n,t,e,s,r,o,i,a){const l=n,c=new Float32Array(X3(o,i));return l.bindBuffer(l.PIXEL_PACK_BUFFER,t),l.getBufferSubData(l.PIXEL_PACK_BUFFER,0,c),l.bindBuffer(l.PIXEL_PACK_BUFFER,null),c}function DB(n,t,e){const s=new Float32Array(t*e*4);return st(n,()=>n.readPixels(0,0,e,t,n.RGBA,n.FLOAT,s)),s}class ph{constructor(t){this.outputTexture=null,this.program=null,this.disposed=!1,this.itemsToPoll=[];const e=W().getNumber("WEBGL_VERSION");if(t!=null?(this.gl=t,G3(e,t)):this.gl=Pn(e),t=this.gl,W().getNumber("WEBGL_VERSION")===2){const o=t;this.createVertexArray=()=>st(o,()=>o.createVertexArray()),this.bindVertexArray=i=>st(o,()=>o.bindVertexArray(i)),this.deleteVertexArray=i=>st(o,()=>o.deleteVertexArray(i)),this.getVertexArray=()=>st(o,()=>o.getParameter(o.VERTEX_ARRAY_BINDING))}else if(t!=null){const o=t.getExtension("OES_vertex_array_object");if(o==null)throw new Error("All WebGL1 implementations are expected to offer OES_vertex_array_object.");this.createVertexArray=()=>st(t,()=>o.createVertexArrayOES()),this.bindVertexArray=i=>st(t,()=>o.bindVertexArrayOES(i)),this.deleteVertexArray=i=>st(t,()=>o.deleteVertexArrayOES(i)),this.getVertexArray=()=>st(t,()=>t.getParameter(o.VERTEX_ARRAY_BINDING_OES))}let s="WEBGL_color_buffer_float";const r="EXT_color_buffer_half_float";if(this.parallelCompilationExtension=this.gl.getExtension("KHR_parallel_shader_compile"),W().getNumber("WEBGL_VERSION")===1){const o="OES_texture_float",i="OES_texture_half_float";if(this.textureFloatExtension=tl(this.gl,o),gn(this.gl,i))this.textureHalfFloatExtension=tl(this.gl,i);else if(W().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support half float textures, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.");if(this.colorBufferFloatExtension=this.gl.getExtension(s),gn(this.gl,r))this.colorBufferHalfFloatExtension=tl(this.gl,r);else if(W().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support color renderable half floats, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.")}else if(s="EXT_color_buffer_float",gn(this.gl,s))this.colorBufferFloatExtension=this.gl.getExtension(s);else if(gn(this.gl,r))this.colorBufferHalfFloatExtension=this.gl.getExtension(r);else throw new Error("GL context does not support color renderable floats");this.vertexBuffer=bB(this.gl),this.indexBuffer=yB(this.gl),this.framebuffer=cz(this.gl),this.textureConfig=Hp(this.gl,this.textureHalfFloatExtension)}get debug(){return W().getBool("DEBUG")}dispose(){if(this.disposed)return;this.program!=null&&console.warn("Disposing a GPGPUContext that still has a bound WebGLProgram. This is probably a resource leak, delete the program with GPGPUContext.deleteProgram before disposing."),this.outputTexture!=null&&console.warn("Disposing a GPGPUContext that still has a bound output matrix texture.  This is probably a resource leak, delete the output matrix texture with GPGPUContext.deleteMatrixTexture before disposing.");const t=this.gl;st(t,()=>t.finish()),st(t,()=>t.bindFramebuffer(t.FRAMEBUFFER,null)),st(t,()=>t.deleteFramebuffer(this.framebuffer)),st(t,()=>t.bindBuffer(t.ARRAY_BUFFER,null)),st(t,()=>t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,null)),st(t,()=>t.deleteBuffer(this.indexBuffer)),this.disposed=!0}createFloat32MatrixTexture(t,e){return this.throwIfDisposed(),wB(this.gl,t,e,this.textureConfig)}createFloat16MatrixTexture(t,e){return this.throwIfDisposed(),vB(this.gl,t,e,this.textureConfig)}createUnsignedBytesMatrixTexture(t,e){return this.throwIfDisposed(),CB(this.gl,t,e,this.textureConfig)}uploadPixelDataToTexture(t,e){this.throwIfDisposed(),NB(this.gl,t,e)}uploadDenseMatrixToTexture(t,e,s,r){this.throwIfDisposed(),SB(this.gl,t,e,s,r,this.textureConfig)}createFloat16PackedMatrixTexture(t,e){return this.throwIfDisposed(),IB(this.gl,t,e,this.textureConfig)}createPackedMatrixTexture(t,e){return this.throwIfDisposed(),$B(this.gl,t,e,this.textureConfig)}deleteMatrixTexture(t){this.throwIfDisposed(),this.outputTexture===t&&(Eg(this.gl,this.framebuffer),this.outputTexture=null),st(this.gl,()=>this.gl.deleteTexture(t))}downloadByteEncodedFloatMatrixFromOutputTexture(t,e,s){return this.downloadMatrixDriver(t,()=>RB(this.gl,e,s,this.textureConfig))}downloadPackedMatrixFromBuffer(t,e,s,r,o,i){return AB(this.gl,t,e,s,r,o,i,this.textureConfig)}downloadFloat32MatrixFromBuffer(t,e){return EB(this.gl,t,e)}createBufferFromTexture(t,e,s){this.bindTextureToFrameBuffer(t);const r=TB(this.gl,e,s,this.textureConfig);return this.unbindTextureToFrameBuffer(),r}createAndWaitForFence(){const t=this.createFence(this.gl);return this.pollFence(t)}createFence(t){let e,s;if(W().getBool("WEBGL_FENCE_API_ENABLED")){const r=t,o=r.fenceSync(r.SYNC_GPU_COMMANDS_COMPLETE,0);t.flush(),s=()=>{const i=r.clientWaitSync(o,0,0);return i===r.ALREADY_SIGNALED||i===r.CONDITION_SATISFIED},e=o}else W().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0?(e=this.beginQuery(),this.endQuery(),s=()=>this.isQueryAvailable(e,W().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))):s=()=>!0;return{query:e,isFencePassed:s}}downloadMatrixFromPackedTexture(t,e,s){return this.downloadMatrixDriver(t,()=>DB(this.gl,e,s))}createProgram(t){this.throwIfDisposed();const e=this.gl;this.vertexShader==null&&(this.vertexShader=xB(e));const s=sz(e);st(e,()=>e.attachShader(s,this.vertexShader)),st(e,()=>e.attachShader(s,t)),rz(e,s);const r=Object.assign(s,{vao:this.createVertexArray()});return this.debug&&uh(e,r),r}buildVao(t){this.setProgram(t),this.bindVertexArray(t.vao);const e=this.gl;st(e,()=>e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,this.indexBuffer)),kB(e,t,this.vertexBuffer)}deleteProgram(t){this.throwIfDisposed(),t===this.program&&(this.program=null),t!=null&&(st(this.gl,()=>this.gl.deleteProgram(t)),this.deleteVertexArray(t.vao))}setProgram(t){this.throwIfDisposed(),this.program=t,this.program!=null&&this.debug&&uh(this.gl,this.program),st(this.gl,()=>this.gl.useProgram(t))}getUniformLocation(t,e,s=!0){return this.throwIfDisposed(),s?hz(this.gl,t,e):dz(this.gl,t,e)}getAttributeLocation(t,e){return this.throwIfDisposed(),st(this.gl,()=>this.gl.getAttribLocation(t,e))}getUniformLocationNoThrow(t,e){return this.throwIfDisposed(),this.gl.getUniformLocation(t,e)}setInputMatrixTexture(t,e,s){this.throwIfDisposed(),this.throwIfNoProgram(),fz(this.gl,t,e,s)}setOutputMatrixTexture(t,e,s){this.setOutputMatrixTextureDriver(t,s,e)}setOutputPackedMatrixTexture(t,e,s){this.throwIfDisposed();const[r,o]=Ro(e,s);this.setOutputMatrixTextureDriver(t,r,o)}setOutputMatrixWriteRegion(t,e,s,r){this.setOutputMatrixWriteRegionDriver(s,t,r,e)}setOutputPackedMatrixWriteRegion(t,e,s,r){throw new Error("setOutputPackedMatrixWriteRegion not implemented.")}debugValidate(){this.program!=null&&uh(this.gl,this.program),el(this.gl)}executeProgram(){this.throwIfDisposed(),this.throwIfNoProgram();const t=this.gl;if(this.debug){const e=this.getVertexArray();console.assert(e===this.program.vao,"VAO changed between setProgram and executeProgram!"),this.debugValidate()}st(t,()=>t.drawElements(t.TRIANGLES,6,t.UNSIGNED_SHORT,0))}blockUntilAllProgramsCompleted(){this.throwIfDisposed(),st(this.gl,()=>this.gl.finish())}getQueryTimerExtension(){return this.disjointQueryTimerExtension==null&&(this.disjointQueryTimerExtension=tl(this.gl,W().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2?"EXT_disjoint_timer_query_webgl2":"EXT_disjoint_timer_query")),this.disjointQueryTimerExtension}getQueryTimerExtensionWebGL2(){return this.getQueryTimerExtension()}getQueryTimerExtensionWebGL1(){return this.getQueryTimerExtension()}beginQuery(){if(W().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2){const s=this.gl,r=this.getQueryTimerExtensionWebGL2(),o=s.createQuery();return s.beginQuery(r.TIME_ELAPSED_EXT,o),o}const t=this.getQueryTimerExtensionWebGL1(),e=t.createQueryEXT();return t.beginQueryEXT(t.TIME_ELAPSED_EXT,e),e}endQuery(){if(W().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2){const e=this.gl,s=this.getQueryTimerExtensionWebGL2();e.endQuery(s.TIME_ELAPSED_EXT);return}const t=this.getQueryTimerExtensionWebGL1();t.endQueryEXT(t.TIME_ELAPSED_EXT)}async waitForQueryAndGetTime(t){return await dm(()=>this.disposed||this.isQueryAvailable(t,W().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))),this.getQueryTime(t,W().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))}getQueryTime(t,e){if(e===0)return null;if(e===2){const s=this.gl;return s.getQueryParameter(t,s.QUERY_RESULT)/1e6}else{const s=this.getQueryTimerExtensionWebGL1();return s.getQueryObjectEXT(t,s.QUERY_RESULT_EXT)/1e6}}isQueryAvailable(t,e){if(e===0)return!0;if(e===2){const s=this.gl,r=this.getQueryTimerExtensionWebGL2(),o=s.getQueryParameter(t,s.QUERY_RESULT_AVAILABLE);return this.disjoint==null&&(this.disjoint=this.gl.getParameter(r.GPU_DISJOINT_EXT)),o&&!this.disjoint}else{const s=this.getQueryTimerExtensionWebGL1(),r=s.getQueryObjectEXT(t,s.QUERY_RESULT_AVAILABLE_EXT);return this.disjoint==null&&(this.disjoint=this.gl.getParameter(s.GPU_DISJOINT_EXT)),r&&!this.disjoint}}pollFence(t){return new Promise(e=>{this.addItemToPoll(()=>t.isFencePassed(),()=>e())})}pollItems(){const t=_B(this.itemsToPoll.map(e=>e.isDoneFn));for(let e=0;e<=t;++e){const{resolveFn:s}=this.itemsToPoll[e];s()}this.itemsToPoll=this.itemsToPoll.slice(t+1)}addItemToPoll(t,e){if(this.itemsToPoll.push({isDoneFn:t,resolveFn:e}),this.itemsToPoll.length>1)return;let s;"setTimeoutCustom"in W().platform&&(s=W().platform.setTimeoutCustom.bind(W().platform)),dm(()=>(this.pollItems(),this.itemsToPoll.length===0),()=>0,null,s)}bindTextureToFrameBuffer(t){this.throwIfDisposed(),hh(this.gl,t,this.framebuffer),this.debug&&el(this.gl)}unbindTextureToFrameBuffer(){this.outputTexture!=null?(hh(this.gl,this.outputTexture,this.framebuffer),this.debug&&el(this.gl)):Eg(this.gl,this.framebuffer)}downloadMatrixDriver(t,e){this.bindTextureToFrameBuffer(t);const s=e();return this.unbindTextureToFrameBuffer(),s}setOutputMatrixTextureDriver(t,e,s){this.throwIfDisposed();const r=this.gl;hh(r,t,this.framebuffer),this.debug&&el(r),this.outputTexture=t,st(r,()=>r.viewport(0,0,e,s)),st(r,()=>r.scissor(0,0,e,s))}setOutputMatrixWriteRegionDriver(t,e,s,r){this.throwIfDisposed(),st(this.gl,()=>this.gl.scissor(t,e,s,r))}throwIfDisposed(){if(this.disposed)throw new Error("Attempted to use disposed GPGPUContext.")}throwIfNoProgram(){if(this.program==null)throw new Error("No GPU program is currently set.")}}function _B(n){let t=0;for(;t<n.length&&n[t]();++t);return t-1}const{addImpl:FB,bincountImpl:Tv,bincountReduceImpl:OB,bitwiseAndImpl:MB,castImpl:LB,ceilImpl:PB,concatImpl:zB,equalImpl:BB,expImpl:VB,expm1Impl:WB,floorImpl:UB,gatherNdImpl:GB,gatherV2Impl:HB,greaterImpl:qB,greaterEqualImpl:jB,lessImpl:XB,lessEqualImpl:KB,linSpaceImpl:YB,logImpl:ZB,maxImpl:JB,maximumImpl:QB,minimumImpl:tV,multiplyImpl:eV,negImpl:nV,notEqualImpl:sV,prodImpl:rV,raggedGatherImpl:oV,raggedRangeImpl:iV,raggedTensorToTensorImpl:aV,rangeImpl:lV,rsqrtImpl:cV,scatterImpl:uV,sigmoidImpl:hV,simpleAbsImpl:Ev,sliceImpl:dV,sparseFillEmptyRowsImpl:fV,sparseReshapeImpl:pV,sparseSegmentReductionImpl:Rv,sqrtImpl:mV,staticRegexReplaceImpl:gV,stridedSliceImpl:xV,stringNGramsImpl:bV,stringSplitImpl:yV,stringToHashBucketFastImpl:wV,subImpl:vV,tileImpl:CV,topKImpl:$V,transposeImpl:Kp,uniqueImpl:IV}=NF;function Av(n,t){return["x","y","z","w","u","v"].slice(0,t).map(e=>`${n}.${e}`)}function Fe(n,t){return t===1?[n]:Av(n,t)}function kV(n,t){if(n===1)return"rc";let e="";for(let s=0;s<n;s++)e+=t[s],s<n-1&&(e+=",");return e}class SV{constructor(t){if(this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outputShape=t,this.rank=t.length,this.enableShapeUniforms=Re(this.outputShape.length),this.rank===0)this.userCode=`
        void main() {
          setOutput(vec4(getA(), 0., 0., 0.));
        }
      `;else{const e=Fe("rc",this.rank),s=Wt(this.rank),r=this.getOutOfBoundsCondition(e),o=this.getSetup(e),i=this.getOutput(e);this.userCode=`
        void main() {
          ${s} rc = getOutputCoords();

          if(${r}) {
            setOutput(vec4(0));
          } else {
            ${o}

            setOutput(vec4(${i}));
          }
        }
      `}}getSourceCoordsArr(t){const e=[];for(let s=0;s<=1;s++)for(let r=0;r<=1;r++){let o=`${s===0?"r":"rp1"}, ${r===0?"c":"cp1"}`;for(let i=2;i<this.rank;i++)o=`${t[t.length-1-i]},`+o;e.push(o)}return e}getOutOfBoundsCondition(t){if(this.rank===1)return`rc > ${this.enableShapeUniforms?"outShape":this.outputShape[0]}`;let e="";for(let s=this.rank-2;s<this.rank;s++)e+=`${t[s]} >= ${this.enableShapeUniforms?`outShape[${s}]`:this.outputShape[s]}`,s<this.rank-1&&(e+="||");return e}getSetup(t){if(this.rank===1)return"";const e=t.slice(-2),s=this.enableShapeUniforms?`outShape[${this.rank} - 1]`:this.outputShape[this.rank-1],r=this.enableShapeUniforms?`outShape[${this.rank} - 2]`:this.outputShape[this.rank-2];return`
      int r = ${e[0]};
      int c = ${e[1]};
      int rp1 = r + 1;
      int cp1 = c + 1;

      bool cEdge = cp1 >= ${s};
      bool rEdge = rp1 >= ${r};
    `}getOutput(t){const e=this.getSourceCoordsArr(t);return this.rank===1?`getA(rc), (rc + 1 >= ${this.enableShapeUniforms?"outShape":this.outputShape[0]} ? 0. : getA(rc + 1)), 0, 0`:`getA(${e[0]}),
            cEdge ? 0. : getA(${e[1]}),
            rEdge ? 0. : getA(${e[2]}),
            rEdge || cEdge ? 0. : getA(${e[3]})`}}class Dv{constructor(t,e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"inputShape",type:"ivec3"}],this.outputShape=t,this.enableShapeUniforms=Re(this.outputShape.length);let s="";for(let r=0;r<4;r++){let o="thisRC = rc;";r%2===1&&(o+="thisRC.z += 1;"),r>1&&(o+="thisRC.y += 1;"),s+=`
        ${o}
        ${r>0?"if(thisRC.y < rows && thisRC.z < cols){":""}
          int flatIndex = getFlatIndex(thisRC);

          ivec3 inputRC = inputCoordsFromReshapedOutCoords(flatIndex);
          vec2 inputRCInnerDims = vec2(float(inputRC.y),float(inputRC.z));

          result[${r}] =
            getChannel(getA(inputRC.x, inputRC.y, inputRC.z), inputRCInnerDims);
        ${r>0?"}":""}
      `}this.userCode=`
      ${NV(e,this.enableShapeUniforms)}
      ${this.enableShapeUniforms?jp():qp(t)}

      void main() {
        ivec3 rc = getOutputCoords();

        vec4 result = vec4(0.);

        ivec3 thisRC;
        int rows = ${this.enableShapeUniforms?"outShape[1]":t[1]};
        int cols = ${this.enableShapeUniforms?"outShape[2]":t[2]};

        ${s}

        setOutput(result);
      }
    `}}function NV(n,t){return`
    ivec3 inputCoordsFromReshapedOutCoords(int index) {
      ${t?kz(["r","c","d"],"inputShape"):Br(["r","c","d"],n)}
      return ivec3(r, c, d);
    }
  `}class TV{constructor(t){this.gpgpu=t,this.numUsedTextures=0,this.numFreeTextures=0,this._numBytesAllocated=0,this._numBytesFree=0,this.freeTextures={},this.usedTextures={},this.logEnabled=!1}acquireTexture(t,e,s){const r=Fg(e,s),o=Og(t,r,s);o in this.freeTextures||(this.freeTextures[o]=[]),o in this.usedTextures||(this.usedTextures[o]=[]);const i=_g(t,r,this.gpgpu.gl,this.gpgpu.textureConfig,s);if(this.freeTextures[o].length>0){this.numFreeTextures--,this.numUsedTextures++,this._numBytesFree-=i,this.log();const l=this.freeTextures[o].pop();return this.usedTextures[o].push(l),l}let a;return r===we.PACKED_2X2_FLOAT32?a=this.gpgpu.createPackedMatrixTexture(t[0],t[1]):r===we.PACKED_2X2_FLOAT16?a=this.gpgpu.createFloat16PackedMatrixTexture(t[0],t[1]):r===we.UNPACKED_FLOAT32?a=this.gpgpu.createFloat32MatrixTexture(t[0],t[1]):r===we.UNPACKED_FLOAT16?a=this.gpgpu.createFloat16MatrixTexture(t[0],t[1]):r===we.PACKED_4X1_UNSIGNED_BYTE&&(a=this.gpgpu.createUnsignedBytesMatrixTexture(t[0],t[1])),this.usedTextures[o].push(a),this.numUsedTextures++,this._numBytesAllocated+=i,this.log(),a}releaseTexture(t,e,s,r){if(this.freeTextures==null)return;const o=Fg(s,r),i=Og(e,o,r);i in this.freeTextures||(this.freeTextures[i]=[]);const a=_g(e,o,this.gpgpu.gl,this.gpgpu.textureConfig,r),l=W().getNumber("WEBGL_DELETE_TEXTURE_THRESHOLD");l!==-1&&this._numBytesAllocated>l?(this.gpgpu.deleteMatrixTexture(t.texture),this._numBytesAllocated-=a):(this.freeTextures[i].push(t),this.numFreeTextures++,this._numBytesFree+=a),this.numUsedTextures--;const c=this.usedTextures[i],u=c&&c.indexOf(t);if(u==null||u<0)throw new Error("Cannot release a texture that was never provided by this texture manager");c[u]=c[c.length-1],c.pop(),this.log()}log(){if(!this.logEnabled)return;const t=this.numFreeTextures+this.numUsedTextures;console.log("Free/Used",`${this.numFreeTextures} / ${this.numUsedTextures}`,`(${t})`);const e=this._numBytesFree/this._numBytesAllocated;console.log(`Bytes allocated: ${this._numBytesAllocated}`),console.log(`Bytes unused: ${this._numBytesFree} (${Math.round(100*e)}%)`)}get numBytesAllocated(){return this._numBytesAllocated}get numBytesFree(){return this._numBytesFree}getNumUsedTextures(){return this.numUsedTextures}getNumFreeTextures(){return this.numFreeTextures}dispose(){if(this.freeTextures!=null){for(const t in this.freeTextures)this.freeTextures[t].forEach(e=>{this.gpgpu.deleteMatrixTexture(e.texture)});for(const t in this.usedTextures)this.usedTextures[t].forEach(e=>{this.gpgpu.deleteMatrixTexture(e.texture)});this.freeTextures=null,this.usedTextures=null,this.numUsedTextures=0,this.numFreeTextures=0,this._numBytesAllocated=0,this._numBytesFree=0}}}function EV(n,t){const e=n;if(t===e.R32F)return 4;if(t===e.R16F)return 2;if(t===e.RGBA32F)return 16;if(t===n.RGBA)return 16;if(t===e.RGBA16F)return 8;if(t===e.RGBA8)return 4;throw new Error(`Unknown internal format ${t}`)}function _g(n,t,e,s,r){const o=RV(t,s);let i;if(r){const[l,c]=Ro(n[0],n[1]);i=l*c}else{const[l,c]=Ma(n[0],n[1]);i=l*c}const a=EV(e,o);return i*a}function RV(n,t){switch(n){case we.PACKED_2X2_FLOAT32:return Sv(t);case we.PACKED_2X2_FLOAT16:return Nv(t);case we.UNPACKED_FLOAT32:return $v(t);case we.UNPACKED_FLOAT16:return Iv(t);case we.PACKED_4X1_UNSIGNED_BYTE:return kv(t);default:throw new Error(`Unknown physical texture type ${n}`)}}function AV(n){return W().getBool("WEBGL_RENDER_FLOAT32_ENABLED")?n?we.PACKED_2X2_FLOAT32:we.UNPACKED_FLOAT32:n?we.PACKED_2X2_FLOAT16:we.UNPACKED_FLOAT16}function Fg(n,t){if(n===on.UPLOAD)return we.PACKED_2X2_FLOAT32;if(n===on.RENDER||n==null)return AV(t);if(n===on.DOWNLOAD||n===on.PIXELS)return we.PACKED_4X1_UNSIGNED_BYTE;throw new Error(`Unknown logical texture type ${n}`)}function Og(n,t,e){return`${n[0]}_${n[1]}_${t}_${e}`}class ts{constructor(t,e){this.variableNames=["A"],this.outputShape=t,this.enableShapeUniforms=Re(this.outputShape.length),this.userCode=`
      float unaryOperation(float x) {
        ${e}
      }

      void main() {
        float x = getAAtOutCoords();
        float y = unaryOperation(x);

        setOutput(y);
      }
    `}}const vn="if (isnan(x)) return x;",DV="return x;",Mg="return abs(x);",_V="return (x >= 0.0) ? x : (exp(x) - 1.0);",FV=vn+`
  return (x < 0.0) ? 0.0 : x;
`,OV=vn+`
  return (x < 0.0) ? 0.0 : min(6.0, x);
`,As="return x;",MV="return 1.0 / (1.0 + exp(-1.0 * x));";const LV="return x;",PV=`
  vec4 result;

  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);
  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);
  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);
  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);

  return result;
`,zV=`
  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,BV=`
  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,VV="return 1.0 / (1.0 + exp(-1.0 * x));";class Fs{constructor(t,e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t,this.enableShapeUniforms=Re(this.outputShape.length),this.userCode=`
      vec4 unaryOperation(vec4 x) {
        ${e}
      }

      void main() {
        vec4 x = getAAtOutCoords();
        vec4 y = unaryOperation(x);

        setOutput(y);
      }
    `}}class WV{constructor(t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outputShape=t,this.enableShapeUniforms=Re(this.outputShape.length);const e=t.length,s=Fe("rc",e),r=Wt(e),o=kV(e,s),i=s.slice(-2),a=e<=1?"rc":`vec2(${i.join(",")})`;this.userCode=`
      void main() {
        ${r} rc = getOutputCoords();
        vec4 packedInput = getA(${o});

        setOutput(getChannel(packedInput, ${a}));
      }
    `}}const UV=tb,GV=1e-7,HV=1e-4,rl={};function qV(n){return n in rl||(rl[n]={}),rl[n]}const jV=W().getNumber("CPU_HANDOFF_SIZE_THRESHOLD"),XV=600;function KV(){return W().global.screen==null?1024:W().global.screen.height*W().global.screen.width*window.devicePixelRatio*XV/1024/1024}class Lu extends md{nextDataId(){return Lu.nextDataId++}constructor(t){if(super(),this.pendingRead=new WeakMap,this.pendingDisposal=new WeakSet,this.dataRefCount=new WeakMap,this.numBytesInGPU=0,this.uploadWaitMs=0,this.downloadWaitMs=0,this.lastGlFlushTime=0,this.warnedAboutMemory=!1,this.pendingDeletes=0,this.disposed=!1,!W().getBool("HAS_WEBGL"))throw new Error("WebGL is not supported on this device");let e;if(t!=null){if(t instanceof ph)e=t;else{const s=Pn(W().getNumber("WEBGL_VERSION"),t);e=new ph(s)}this.binaryCache={},this.gpgpuCreatedLocally=!1}else{const s=Pn(W().getNumber("WEBGL_VERSION"));e=new ph(s),this.binaryCache=qV(W().getNumber("WEBGL_VERSION")),this.gpgpuCreatedLocally=!0}this.gpgpu=e,this.canvas=this.gpgpu.gl.canvas,this.textureManager=new TV(this.gpgpu),this.numMBBeforeWarning=KV(),this.texData=new Sx(this,jn())}numDataIds(){return this.texData.numDataIds()-this.pendingDeletes}writeTexture(t,e,s,r,o,i){const a=this.makeTensorInfo(e,s),l=this.texData.get(a.dataId);l.isPacked=!1,l.texture={texture:t,texShape:[r,o]},l.texShape=[r,o];const c=nl(e),u=new Dg(c,!1,i),h=this.runWebGLProgram(u,[a],s,[[r,o]]);return h.shape=e,l.texture=null,this.disposeIntermediateTensorInfo(a),h.dataId}write(t,e,s){if((W().getBool("WEBGL_CHECK_NUMERICAL_PROBLEMS")||W().getBool("DEBUG"))&&this.checkNumericalProblems(t),s==="complex64"&&t!=null)throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");const r={id:this.nextDataId()};return this.texData.set(r,{shape:e,dtype:s,values:t,usage:on.UPLOAD,refCount:1}),r}refCount(t){return this.texData.has(t)?this.texData.get(t).refCount:0}incRef(t){const e=this.texData.get(t);e.refCount++}decRef(t){if(this.texData.has(t)){const e=this.texData.get(t);e.refCount--}}move(t,e,s,r,o){if(W().getBool("DEBUG")&&this.checkNumericalProblems(e),r==="complex64")throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");this.texData.set(t,{shape:s,dtype:r,values:e,usage:on.UPLOAD,refCount:o})}disposeIntermediateTensorInfo(t){this.disposeData(t.dataId)}readSync(t){const e=this.texData.get(t),{values:s,dtype:r,complexTensorInfos:o,slice:i,shape:a,isPacked:l}=e;if(i!=null){let d;l?d=new Fs(a,As):d=new ts(a,As);const f=this.runWebGLProgram(d,[{dataId:t,shape:a,dtype:r}],r),p=this.readSync(f.dataId);return this.disposeIntermediateTensorInfo(f),p}if(s!=null)return this.convertAndCacheOnCPU(t);if(r==="string")return s;const c=this.activeTimers!=null;let u;c&&(u=Be());let h;if(r==="complex64"){const d=this.readSync(o.real.dataId),f=this.readSync(o.imag.dataId);h=Cs(d,f)}else h=this.getValuesFromTexture(t);return c&&(this.downloadWaitMs+=Be()-u),this.convertAndCacheOnCPU(t,h)}async read(t){if(this.pendingRead.has(t)){const p=this.pendingRead.get(t);return new Promise(m=>p.push(m))}const e=this.texData.get(t),{values:s,shape:r,slice:o,dtype:i,complexTensorInfos:a,isPacked:l}=e;if(o!=null){let p;l?p=new Fs(r,As):p=new ts(r,As);const m=this.runWebGLProgram(p,[{dataId:t,shape:r,dtype:i}],i),g=this.read(m.dataId);return this.disposeIntermediateTensorInfo(m),g}if(s!=null)return this.convertAndCacheOnCPU(t);if(W().getBool("DEBUG")&&!W().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")&&W().getNumber("WEBGL_VERSION")===2)throw new Error("tensor.data() with WEBGL_DOWNLOAD_FLOAT_ENABLED=false and WEBGL_VERSION=2 not yet supported.");let c=null,u;if(i!=="complex64"&&W().get("WEBGL_BUFFER_SUPPORTED")){u=this.decode(t);const p=this.texData.get(u.dataId);c=this.gpgpu.createBufferFromTexture(p.texture.texture,...Qa(r))}this.pendingRead.set(t,[]),i!=="complex64"&&await this.gpgpu.createAndWaitForFence();let h;if(i==="complex64"){const p=await Promise.all([this.read(a.real.dataId),this.read(a.imag.dataId)]),m=p[0],g=p[1];h=Cs(m,g)}else if(c==null)h=this.getValuesFromTexture(t);else{const p=q(r);h=this.gpgpu.downloadFloat32MatrixFromBuffer(c,p)}if(u!=null&&this.disposeIntermediateTensorInfo(u),c!=null){const p=this.gpgpu.gl;st(p,()=>p.deleteBuffer(c))}const d=this.convertAndCacheOnCPU(t,h),f=this.pendingRead.get(t);return this.pendingRead.delete(t),f.forEach(p=>p(d)),this.pendingDisposal.has(t)&&(this.pendingDisposal.delete(t),this.disposeData(t)&&jn().removeDataId(t,this),this.pendingDeletes--),d}readToGPU(t,e={}){const s=this.texData.get(t),{values:r,shape:o,slice:i,dtype:a,isPacked:l,texture:c}=s;if(a==="complex64")throw new Error("Does not support reading texture for complex64 dtype.");if(i!=null){let f;l?f=new Fs(o,As):f=new ts(o,As);const p=this.runWebGLProgram(f,[{dataId:t,shape:o,dtype:a}],a),m=this.readToGPU(p,e);return this.disposeIntermediateTensorInfo(p),m}if(c==null)throw r!=null?new Error("Data is not on GPU but on CPU."):new Error("There is no data on GPU or CPU.");const u=this.decode(t,e.customTexShape),h=jn().makeTensorFromTensorInfo(u),d=this.texData.get(u.dataId);return Object.assign({tensorRef:h},d.texture)}bufferSync(t){const e=this.readSync(t.dataId);if(t.dtype==="string")try{const s=e.map(r=>zs(r));return $t(t.shape,t.dtype,s)}catch{throw new Error("Failed to decode encoded string bytes into utf-8")}return $t(t.shape,t.dtype,e)}checkNumericalProblems(t){if(t!=null)for(let e=0;e<t.length;e++){const s=t[e];if(!J3(s))throw W().getBool("WEBGL_RENDER_FLOAT32_CAPABLE")?Error(`The value ${s} cannot be represented with your current settings. Consider enabling float32 rendering: 'tf.env().set('WEBGL_RENDER_FLOAT32_ENABLED', true);'`):Error(`The value ${s} cannot be represented on this device.`)}}getValuesFromTexture(t){const{shape:e,dtype:s,isPacked:r}=this.texData.get(t),o=q(e);if(W().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")){const d=this.decode(t),f=this.texData.get(d.dataId),p=this.gpgpu.downloadMatrixFromPackedTexture(f.texture.texture,...Qa(e)).subarray(0,o);return this.disposeIntermediateTensorInfo(d),p}const i=W().getBool("WEBGL_PACK")&&r===!0,a=i?nl(e):e,l=i?new pB(a):new fB(a),c=this.runWebGLProgram(l,[{shape:a,dtype:s,dataId:t}],"float32"),u=this.texData.get(c.dataId),h=this.gpgpu.downloadByteEncodedFloatMatrixFromOutputTexture(u.texture.texture,u.texShape[0],u.texShape[1]).subarray(0,o);return this.disposeIntermediateTensorInfo(c),h}timerAvailable(){return W().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0}time(t){const e=this.activeTimers,s=[];let r=!1;this.programTimersStack==null?(this.programTimersStack=s,r=!0):this.activeTimers.push(s),this.activeTimers=s,t();const o=xr(this.activeTimers.map(l=>l.query)).filter(l=>l!=null),i=xr(this.activeTimers.map(l=>l.name)).filter(l=>l!=null);this.activeTimers=e,r&&(this.programTimersStack=null);const a={uploadWaitMs:this.uploadWaitMs,downloadWaitMs:this.downloadWaitMs,kernelMs:null,wallMs:null};return(async()=>{if(W().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0){const l=await Promise.all(o);a.kernelMs=f$(l),a.getExtraProfileInfo=()=>l.map((c,u)=>({name:i[u],ms:c})).map(c=>`${c.name}: ${c.ms}`).join(", ")}else a.kernelMs={error:"WebGL query timers are not supported in this environment."};return this.uploadWaitMs=0,this.downloadWaitMs=0,a})()}memory(){return{unreliable:!1,numBytesInGPU:this.numBytesInGPU,numBytesInGPUAllocated:this.textureManager.numBytesAllocated,numBytesInGPUFree:this.textureManager.numBytesFree}}startTimer(){return W().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?this.gpgpu.beginQuery():{startMs:Be(),endMs:null}}endTimer(t){return W().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?(this.gpgpu.endQuery(),t):(t.endMs=Be(),t)}async getQueryTime(t){if(W().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0)return this.gpgpu.waitForQueryAndGetTime(t);const e=t;return e.endMs-e.startMs}disposeData(t,e=!1){if(this.pendingDisposal.has(t))return!1;if(!this.texData.has(t))return!0;if(e?this.texData.get(t).refCount=0:this.texData.get(t).refCount--,!e&&this.texData.get(t).refCount>0)return!1;if(this.pendingRead.has(t))return this.pendingDisposal.add(t),this.pendingDeletes++,!1;this.releaseGPUData(t);const{complexTensorInfos:s}=this.texData.get(t);return s!=null&&(this.disposeData(s.real.dataId,e),this.disposeData(s.imag.dataId,e)),this.texData.delete(t),!0}releaseGPUData(t){const{texture:e,dtype:s,texShape:r,usage:o,isPacked:i,slice:a}=this.texData.get(t),l=a&&a.origDataId||t,c=this.dataRefCount.get(l);c>1?this.dataRefCount.set(l,c-1):(this.dataRefCount.delete(l),e!=null&&(this.numBytesInGPU-=this.computeBytes(r,s),this.textureManager.releaseTexture(e,r,o,i)));const u=this.texData.get(t);u.texture=null,u.texShape=null,u.isPacked=!1,u.slice=null}getTexture(t){return this.uploadToGPU(t),this.texData.get(t).texture.texture}getDataInfo(t){return this.texData.get(t)}shouldExecuteOnCPU(t,e=jV){return W().getBool("WEBGL_CPU_FORWARD")&&t.every(s=>this.texData.get(s.dataId).texture==null&&q(s.shape)<e)}getGPGPUContext(){return this.gpgpu}where(t){rn("tf.where() in webgl locks the UI thread. Call tf.whereAsync() instead");const e=t.dataSync();return UV(t.shape,e)}packedUnaryOp(t,e,s){const r=new Fs(t.shape,e),o=this.compileAndRun(r,[t],s);return jn().makeTensorFromTensorInfo(o)}abs(t){if(this.shouldExecuteOnCPU([t])&&t.dtype!=="complex64"){const r=Ev(this.texData.get(t.dataId).values);return this.makeOutput(t.shape,t.dtype,r)}if(W().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(t,Mg,t.dtype);const e=new ts(t.shape,Mg),s=this.compileAndRun(e,[t]);return jn().makeTensorFromTensorInfo(s)}makeTensorInfo(t,e,s){let r;if(e==="string"&&s!=null&&s.length>0&&$i(s[0])){const o=s.map(i=>Ms(i));r=this.write(o,t,e)}else r=this.write(s,t,e);return this.texData.get(r).usage=null,{dataId:r,shape:t,dtype:e}}makeOutput(t,e,s){return jn().makeTensorFromTensorInfo(this.makeTensorInfo(t,e,s),this)}unpackTensor(t){const e=new WV(t.shape);return this.runWebGLProgram(e,[t],t.dtype)}packTensor(t){const e=new SV(t.shape);return this.runWebGLProgram(e,[t],t.dtype,null,!0)}packedReshape(t,e){const s=[xo(t.shape),...bo(t.shape)],r={dtype:t.dtype,shape:s,dataId:t.dataId},o=[xo(e),...bo(e)],i=new Dv(o,s),a=!0,l=[s],c=this.runWebGLProgram(i,[r],t.dtype,l,a);return{dataId:c.dataId,shape:e,dtype:c.dtype}}decode(t,e){const s=this.texData.get(t),{isPacked:r,shape:o,dtype:i}=s;if(e!=null){const d=q(o),f=e[0]*e[1]*4;S(d<=f,()=>"customTexShape is too small. Row * Column * 4 should be equal or larger than the size of the tensor data.")}const a=nl(o);let l;r?l=new dB(a):l=new hB(a);const c=!0,u=[e??Qa(a)],h=this.runWebGLProgram(l,[{shape:a,dtype:i,dataId:t}],i,u,c,e);return{dtype:i,shape:o,dataId:h.dataId}}runWebGLProgram(t,e,s,r,o=!1,i){const a=this.makeTensorInfo(t.outputShape,s),l=this.texData.get(a.dataId);if(t.packedOutput&&(l.isPacked=!0),t.outPackingScheme===gi.DENSE){const x=i??Qa(t.outputShape);l.texShape=x.map(b=>b*2)}if(t.outTexUsage!=null&&(l.usage=t.outTexUsage),q(a.shape)===0)return l.values=ke(a.dtype,0),a;const c=[],u=e.map(x=>{if(x.dtype==="complex64")throw new Error("GPGPUProgram does not support complex64 input. For complex64 dtypes, please separate the program into real and imaginary parts.");let b=this.texData.get(x.dataId);if(b.texture==null){if(!t.packedInputs&&q(x.shape)<=W().getNumber("WEBGL_SIZE_UPLOAD_UNIFORM"))return{shape:x.shape,texData:null,isUniform:!0,uniformValues:b.values};t.packedInputs&&(b.isPacked=!0,b.shape=x.shape)}if(this.uploadToGPU(x.dataId),!!b.isPacked!=!!t.packedInputs)x=b.isPacked?this.unpackTensor(x):this.packTensor(x),c.push(x),b=this.texData.get(x.dataId);else if(b.isPacked&&!Zl(b.shape,x.shape)){const w=x,y=x.shape;x.shape=b.shape,x=this.packedReshape(x,y),c.push(x),b=this.texData.get(x.dataId),w.shape=y}return{shape:x.shape,texData:b,isUniform:!1}});this.uploadToGPU(a.dataId);const h={shape:a.shape,texData:l,isUniform:!1},d=uB(t,u,h),f=this.getAndSaveBinary(d,()=>lB(this.gpgpu,t,u,h)),p=this.activeTimers!=null;let m;p&&(m=this.startTimer()),W().get("ENGINE_COMPILE_ONLY")||cB(this.gpgpu,f,u,h,r),c.forEach(x=>this.disposeIntermediateTensorInfo(x)),p&&(m=this.endTimer(m),this.activeTimers.push({name:t.constructor.name,query:this.getQueryTime(m)}));const g=W().getNumber("WEBGL_FLUSH_THRESHOLD");if(g>0){const x=Be();x-this.lastGlFlushTime>g&&(this.gpgpu.gl.flush(),this.lastGlFlushTime=x)}if(!W().getBool("WEBGL_LAZILY_UNPACK")&&l.isPacked&&o===!1){const x=this.unpackTensor(a);return this.disposeIntermediateTensorInfo(a),x}return a}compileAndRun(t,e,s,r,o=!1){return s=s||e[0].dtype,this.runWebGLProgram(t,e,s,r,o)}getAndSaveBinary(t,e){return t in this.binaryCache||(this.binaryCache[t]=e()),this.binaryCache[t]}getTextureManager(){return this.textureManager}dispose(){this.disposed||(W().getBool("IS_TEST")||Object.keys(this.binaryCache).forEach(e=>{this.gpgpu.deleteProgram(this.binaryCache[e].webGLProgram),delete this.binaryCache[e]}),this.textureManager.dispose(),this.canvas!=null&&typeof HTMLCanvasElement<"u"&&this.canvas instanceof HTMLCanvasElement?this.canvas.remove():this.canvas=null,this.gpgpuCreatedLocally&&(this.gpgpu.program=null,this.gpgpu.dispose()),this.disposed=!0)}floatPrecision(){return this.floatPrecisionValue==null&&(this.floatPrecisionValue=B(()=>{if(!W().get("WEBGL_RENDER_FLOAT32_ENABLED")){const t=W().getBool("DEBUG");W().set("DEBUG",!1);const e=this.abs(Ot(1e-8)).dataSync()[0];if(W().set("DEBUG",t),e>0)return 32}return 16})),this.floatPrecisionValue}epsilon(){return this.floatPrecision()===32?GV:HV}uploadToGPU(t){const e=this.texData.get(t),{shape:s,dtype:r,values:o,texture:i,usage:a,isPacked:l}=e;if(i!=null)return;const c=this.activeTimers!=null;let u;c&&(u=Be());let h=e.texShape;if(h==null&&(h=gz(s,l),e.texShape=h),o!=null){const d=nl(s);let f,p=h[1],m=h[0];const g=o instanceof Uint8Array||o instanceof Uint8ClampedArray;(l||!g)&&([p,m]=Ro(h[0],h[1])),l?f=new gB(d,g):f=new Dg(d,g);const x=g?[m,p]:h,b=this.makeTensorInfo(x,r),w=this.texData.get(b.dataId);g?w.usage=on.PIXELS:w.usage=on.UPLOAD,w.texShape=x,this.gpgpu.uploadDenseMatrixToTexture(this.getTexture(b.dataId),p,m,o);const y=[[m,p]],$=this.runWebGLProgram(f,[b],r,y,!0),N=this.texData.get($.dataId);e.texShape=N.texShape,e.isPacked=N.isPacked,e.usage=N.usage,W().get("ENGINE_COMPILE_ONLY")?this.disposeData($.dataId):(e.texture=N.texture,e.values=null,this.texData.delete($.dataId)),this.disposeIntermediateTensorInfo(b),c&&(this.uploadWaitMs+=Be()-u)}else{const d=this.acquireTexture(h,a,r,l);e.texture=d}}convertAndCacheOnCPU(t,e){const s=this.texData.get(t),{dtype:r}=s;return e!=null&&(s.values=YV(e,r)),s.values}acquireTexture(t,e,s,r){if(this.numBytesInGPU+=this.computeBytes(t,s),!this.warnedAboutMemory&&this.numBytesInGPU>this.numMBBeforeWarning*1024*1024){const o=(this.numBytesInGPU/1024/1024).toFixed(2);this.warnedAboutMemory=!0,console.warn(`High memory usage in GPU: ${o} MB, most likely due to a memory leak`)}return this.textureManager.acquireTexture(t,e,r)}computeBytes(t,e){return t[0]*t[1]*kl(e)}checkCompileCompletion(){for(const[,t]of Object.entries(this.binaryCache))this.checkCompletion_(t)}async checkCompileCompletionAsync(){const t=[];if(this.gpgpu.parallelCompilationExtension){for(const[,e]of Object.entries(this.binaryCache))t.push(this.checkCompletionAsync_(e));return Promise.all(t)}else{for(const[,e]of Object.entries(this.binaryCache)){const s=new Promise(r=>{try{this.checkCompletion_(e),r(!0)}catch(o){throw o}});t.push(s)}return Promise.all(t)}}async checkCompletionAsync_(t){return this.gpgpu.gl.getProgramParameter(t.webGLProgram,this.gpgpu.parallelCompilationExtension.COMPLETION_STATUS_KHR)?this.checkCompletion_(t):(await yb(),this.checkCompletionAsync_(t))}checkCompletion_(t){if(this.gpgpu.gl.getProgramParameter(t.webGLProgram,this.gpgpu.gl.LINK_STATUS)===!1)throw console.log(this.gpgpu.gl.getProgramInfoLog(t.webGLProgram)),this.gpgpu.gl.getShaderParameter(t.fragmentShader,this.gpgpu.gl.COMPILE_STATUS)===!1?(xv(t.source,this.gpgpu.gl.getShaderInfoLog(t.fragmentShader)),new Error("Failed to compile fragment shader.")):new Error("Failed to link vertex and fragment shaders.");return!0}getUniformLocations(){for(const t of Object.values(this.binaryCache)){this.gpgpu.buildVao(t.webGLProgram);const{variablesLocations:e,customUniformLocations:s,infLoc:r,nanLoc:o,outShapeLocation:i,outShapeStridesLocation:a,outTexShapeLocation:l}=Cv(this.gpgpu,t.program,t.webGLProgram);t.variablesLocations=e,t.customUniformLocations=s,t.infLoc=r,t.nanLoc=o,t.outShapeLocation=i,t.outShapeStridesLocation=a,t.outTexShapeLocation=l}}createTensorFromGPUData(t,e,s){t.channels=t.channels||"RGBA";const{texture:r,height:o,width:i,channels:a}=t,l=jn().backend;if(!l.gpgpu.gl.isTexture(r))throw new Error("The texture is invalid. Also, please make sure the texture and the TFJS WebGL backend are using the same canvas. If you want to use your own custom canvas, you have to create and use the custom TFJS WebGL backend created from the canvas through 'new tf.MathBackendWebGL(customCanvas)'.");const c=l.writeTexture(r,e,s,o,i,a);return jn().makeTensorFromDataId(c,e,s,l)}}Lu.nextDataId=0;function YV(n,t){if(t==="float32"||t==="complex64")return n;if(t==="int32"||t==="bool"){const e=t==="int32"?new Int32Array(n.length):new Uint8Array(n.length);for(let s=0;s<e.length;++s)e[s]=Math.round(n[s]);return e}else throw new Error(`Unknown dtype ${t}`)}m0()&&b0("webgl",()=>new Lu,2);const Yp=`
  if (isnan(a)) return a;
  if (isnan(b)) return b;
`;class Rr{constructor(t,e,s){this.variableNames=["A","B"],this.outputShape=yt(e,s),this.enableShapeUniforms=Re(this.outputShape.length),this.userCode=`
      float binaryOperation(float a, float b) {
        ${t}
      }

      void main() {
        float a = getAAtOutCoords();
        float b = getBAtOutCoords();
        setOutput(binaryOperation(a, b));
      }
    `}}const Wr=`
  result.r = isNaN.r ? NAN : result.r;
  result.g = isNaN.g ? NAN : result.g;
  result.b = isNaN.b ? NAN : result.b;
  result.a = isNaN.a ? NAN : result.a;
`;class Oo{constructor(t,e,s,r=!1){this.variableNames=["A","B"],this.supportsBroadcasting=!0,this.packedInputs=!0,this.packedOutput=!0,this.outputShape=yt(e,s);const o=this.outputShape.length;this.enableShapeUniforms=Re(o);let i="";if(r)if(o===0||q(this.outputShape)===1)i=`
          result.y = 0.;
          result.z = 0.;
          result.w = 0.;
        `;else if(i=`
          ${Wt(o)} coords = getOutputCoords();
        `,o===1)this.enableShapeUniforms?i+=`
            result.y = (coords + 1) >= outShape ? 0. : result.y;
            result.z = 0.;
            result.w = 0.;
          `:i+=`
            result.y = (coords + 1) >= ${this.outputShape[0]} ? 0. : result.y;
            result.z = 0.;
            result.w = 0.;
          `;else{const l=Fe("coords",o);this.enableShapeUniforms?i+=`
            bool nextRowOutOfBounds =
              (${l[o-2]} + 1) >= outShape[${o} - 2];
            bool nextColOutOfBounds =
              (${l[o-1]} + 1) >= outShape[${o} - 1];
            result.y = nextColOutOfBounds ? 0. : result.y;
            result.z = nextRowOutOfBounds ? 0. : result.z;
            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;
          `:i+=`
            bool nextRowOutOfBounds =
              (${l[o-2]} + 1) >= ${this.outputShape[o-2]};
            bool nextColOutOfBounds =
              (${l[o-1]} + 1) >= ${this.outputShape[o-1]};
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
    `}}function en(n){const{inputs:t,backend:e}=n,{x:s}=t;return e.incRef(s.dataId),{dataId:s.dataId,shape:s.shape,dtype:s.dtype}}const ZV={kernelName:Gi,backendName:"webgl",kernelFunc:en};function er(n){const{inputs:t,backend:e}=n,{real:s,imag:r}=t,o=e.makeTensorInfo(s.shape,"complex64"),i=e.texData.get(o.dataId),a=en({inputs:{x:s},backend:e}),l=en({inputs:{x:r},backend:e});return i.complexTensorInfos={real:a,imag:l},o}const JV={kernelName:Td,backendName:"webgl",kernelFunc:er};const _v="return (a < 0.) ? b * a : a;",Fv=`
  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));
  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);
`;function QV(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{alpha:o}=s,i=e.makeTensorInfo([],"float32",qs(o,"float32")),a=W().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Oo(Fv,r.shape,i.shape):new Rr(_v,r.shape,i.shape),l=e.runWebGLProgram(a,[r,i],"float32");return e.disposeIntermediateTensorInfo(i),l}const t4={kernelName:Ac,backendName:"webgl",kernelFunc:QV};const Ov="return (a < 0.) ? b * a : a;",Mv=`
  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));
  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);
`;function e4(n){const{inputs:t,backend:e}=n,{x:s,alpha:r}=t,o=W().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Oo(Mv,s.shape,r.shape):new Rr(Ov,s.shape,r.shape);return e.runWebGLProgram(o,[s,r],"float32")}const n4={kernelName:Yc,backendName:"webgl",kernelFunc:e4};const Mo="if (isnan(x)) return x;";function Rt({opSnippet:n,packedOpSnippet:t,cpuKernelImpl:e,dtype:s}){return({inputs:r,backend:o})=>{const{x:i}=r,a=o,l=s||i.dtype;if(a.shouldExecuteOnCPU([i])&&e!=null){const h=a.texData.get(i.dataId),d=e(h.values,l);return a.makeTensorInfo(i.shape,l,d)}const c=W().getBool("WEBGL_PACK_UNARY_OPERATIONS")&&t!=null;let u;return c?u=new Fs(i.shape,t):u=new ts(i.shape,n),a.runWebGLProgram(u,[i],l)}}function Ie({opSnippet:n,packedOpSnippet:t,checkOutOfBounds:e=!1,supportsComplex:s=!1,cpuKernelImpl:r,dtype:o}){return({inputs:i,backend:a})=>{const{a:l,b:c}=i,u=a;if(s&&l.dtype==="complex64"){const p=u.texData.get(l.dataId),m=u.texData.get(c.dataId),[g,x]=[[p.complexTensorInfos.real,m.complexTensorInfos.real],[p.complexTensorInfos.imag,m.complexTensorInfos.imag]].map(w=>{const[y,v]=w,$={dataId:y.dataId,dtype:y.dtype,shape:l.shape},N={dataId:v.dataId,dtype:v.dtype,shape:c.shape},T=new Rr(n,l.shape,c.shape);return u.runWebGLProgram(T,[$,N],Qe(y.dtype,v.dtype))}),b=er({inputs:{real:g,imag:x},backend:u});return u.disposeIntermediateTensorInfo(g),u.disposeIntermediateTensorInfo(x),b}const h=o||Qe(l.dtype,c.dtype);if((l.dtype==="string"||c.dtype==="string"||u.shouldExecuteOnCPU([l,c]))&&r!=null){const p=u.texData.get(l.dataId).values,m=u.texData.get(c.dataId).values,g=l.dtype==="string"?$s(p):p,x=l.dtype==="string"?$s(m):m,[b,w]=r(l.shape,c.shape,g,x,h),y=u.makeTensorInfo(w,h),v=u.texData.get(y.dataId);return v.values=b,y}const d=W().getBool("WEBGL_PACK_BINARY_OPERATIONS")&&t!=null;let f;return d?f=new Oo(t,l.shape,c.shape,e):f=new Rr(n,l.shape,c.shape),u.runWebGLProgram(f,[l,c],h)}}function xi(n,t=!1){if(n==="linear")return t?LV:DV;if(n==="relu")return t?zV:FV;if(n==="elu")return t?PV:_V;if(n==="relu6")return t?BV:OV;if(n==="prelu")return t?Mv:Ov;if(n==="leakyrelu")return t?Fv:_v;if(n==="sigmoid")return t?VV:MV;throw new Error(`Activation ${n} has not been implemented for the WebGL backend.`)}class Lv{constructor(t,e,s,r=!1,o=!1,i=!1,a=null,l=!1,c=!1){this.variableNames=["matrixA","matrixB"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=s,this.enableShapeUniforms=Re(this.outputShape.length);const u=r?t[1]:t[2],h=Math.ceil(u/2),d=r?"i * 2, rc.y":"rc.y, i * 2",f=o?"rc.z, i * 2":"i * 2, rc.z",p=r?["a.xxyy","a.zzww"]:["a.xxzz","a.yyww"],m=o?["b.xzxz","b.ywyw"]:["b.xyxy","b.zwzw"];let g="",x="";a&&(l?g=`vec4 activation(vec4 a) {
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
          vec4 b = getMatrixB(batchB, ${f});

          // These swizzled products need to be separately added.
          // See: https://github.com/tensorflow/tfjs/issues/1735
          result += (${p[0]} * ${m[0]});
          result += (${p[1]} * ${m[1]});
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
    `}}const Lg={REAL:"return areal * breal - aimag * bimag;",IMAG:"return areal * bimag + aimag * breal;"};class Pg{constructor(t,e,s){this.variableNames=["AReal","AImag","BReal","BImag"],this.outputShape=yt(e,s),this.userCode=`
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
    `}}const zg="return a * b;";function Zp(n){const{inputs:t,backend:e}=n,{a:s,b:r}=t,o=Qe(s.dtype,r.dtype);if(s.dtype==="complex64"){const a=e.texData.get(s.dataId),l=e.texData.get(r.dataId),c=new Pg(Lg.REAL,s.shape,r.shape),u=new Pg(Lg.IMAG,s.shape,r.shape),h=[{dataId:a.complexTensorInfos.real.dataId,dtype:a.complexTensorInfos.real.dtype,shape:s.shape},{dataId:a.complexTensorInfos.imag.dataId,dtype:a.complexTensorInfos.imag.dtype,shape:s.shape},{dataId:l.complexTensorInfos.real.dataId,dtype:l.complexTensorInfos.real.dtype,shape:r.shape},{dataId:l.complexTensorInfos.imag.dataId,dtype:l.complexTensorInfos.imag.dtype,shape:r.shape}],d=e.runWebGLProgram(c,h,"float32"),f=e.runWebGLProgram(u,h,"float32"),p=er({inputs:{real:d,imag:f},backend:e});return e.disposeIntermediateTensorInfo(d),e.disposeIntermediateTensorInfo(f),p}if(e.shouldExecuteOnCPU([s,r])){const a=e.texData.get(s.dataId),l=e.texData.get(r.dataId),[c,u]=eV(s.shape,r.shape,a.values,l.values,o),h=e.makeTensorInfo(u,o),d=e.texData.get(h.dataId);return d.values=c,h}let i;return W().getBool("WEBGL_PACK_BINARY_OPERATIONS")?i=new Oo(zg,s.shape,r.shape):i=new Rr(zg,s.shape,r.shape),e.runWebGLProgram(i,[s,r],o)}const s4={kernelName:Qi,backendName:"webgl",kernelFunc:Zp};function r4(n,t,e){const s=[xo(n.shape),...bo(n.shape)],r={dtype:n.dtype,shape:s,dataId:n.dataId},o=[xo(t),...bo(t)],i=new Dv(o,s),a=!0,l=[s],c=e.runWebGLProgram(i,[r],n.dtype,l,a);return{dataId:c.dataId,shape:t,dtype:c.dtype}}function et(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{shape:o}=s,i=e,a=q(r.shape),l=Tx(o,a),c=q(l);S(a===c,()=>`The new shape (${l}) has ${c} elements and the old shape (${r.shape}) has ${a} elements. The new shape and old shape must have the same number of elements.`);const u=i.texData.get(r.dataId);return u.isPacked&&!Zl(r.shape,l)&&!(u.texture!==null&&Zl(u.shape,l))?r4(r,l,i):(i.incRef(r.dataId),{dataId:r.dataId,shape:l,dtype:r.dtype})}const o4={kernelName:Jc,backendName:"webgl",kernelFunc:et};class Bg{constructor(t,e){this.variableNames=["x"];const{windowSize:s,batchSize:r,inSize:o,outSize:i}=t;this.outputShape=[r,i];const a=Math.floor(s/4)*4,l=s%4;let c="sumValue += dot(values, ones);";if(e!=null){const h=1/e;c=`sumValue += dot(values * ${ao(h)?h.toPrecision(2):h}, ones);`}let u="";o%s>0&&(u=`
        if (inIdx < 0 || inIdx >= ${o}) {
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
    `}}class i4{constructor(t,e){this.variableNames=["x"];const{windowSize:s,batchSize:r,inSize:o,outSize:i}=t;this.outputShape=[r,i];let a="0.0",l="";e==="prod"?a="1.0":e==="min"?(a="1.0 / 1e-20",l="min"):e==="max"&&(a="-1.0 / 1e-20",l="max");let c=`${e}(${e}(${e}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;e==="sum"?c="sumValue":e==="prod"?c="prodValue":e==="all"?c="allValue":e==="any"&&(c="anyValue");const u=Math.floor(s/4)*4,h=s%4;let d=`
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
    `,f="vec4";e==="all"?(a="1.0",d=`
        bool reducedAllValue = all(values);
        float floatedReducedAllValue = float(reducedAllValue);
        allValue = float(allValue >= 1.0 && floatedReducedAllValue >= 1.0);
      `,f="bvec4"):e==="any"&&(a="0.0",d=`
        bool reducedAnyValue = any(values);
        float floatedReducedAnyValue = float(reducedAnyValue);
        anyValue = float(anyValue >= 1.0 || floatedReducedAnyValue >= 1.0);
      `,f="bvec4");let p="";o%s>0&&(p=`
        if (inIdx < 0 || inIdx >= ${o}) {
          return initializationValue;
        }
      `),this.userCode=`
      const float initializationValue = ${a};
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float getValue(int batch, int inIdx) {
        ${p}
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
          ${f} values = ${f}(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          ${d}
        }

        int inIdx = inOffset + ${u};
        if (${h===1}) {
          ${f} values = ${f}(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          ${d}
        } else if (${h===2}) {
          ${f} values = ${f}(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          ${d}
        } else if (${h===3}) {
          ${f} values = ${f}(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          ${d}
        }
        setOutput(${c});
      }
    `}}function a4(n){const t=[];for(;t.length===0||t[t.length-1].outSize!==1;){const e=t.length?t[t.length-1].outSize:n[1],s=vu(e);t.push({inSize:e,windowSize:s,outSize:Math.ceil(e/s)})}return t}function Ur(n,t,e,s){const r=a4(n.shape);let o=n;for(let i=0;i<r.length;i++){const{inSize:a,windowSize:l,outSize:c}=r[i];let u,h;e==="mean"?u=i===0?new Bg({windowSize:l,inSize:a,batchSize:n.shape[0],outSize:c},a):new Bg({windowSize:l,inSize:a,batchSize:n.shape[0],outSize:c}):u=new i4({windowSize:l,inSize:a,batchSize:n.shape[0],outSize:c},e),h=o,o=s.runWebGLProgram(u,[o],t),h.dataId!==n.dataId&&s.disposeIntermediateTensorInfo(h)}return o}class l4{constructor(t,e){this.variableNames=["A"];const s=new Array(t.length);for(let i=0;i<s.length;i++)s[i]=t[e[i]];this.outputShape=s,this.rank=s.length;const r=Wt(this.rank),o=c4(e);this.userCode=`
    void main() {
      ${r} resRC = getOutputCoords();
      setOutput(getA(${o}));
    }
    `}}function c4(n){const t=n.length;if(t>6)throw Error(`Transpose for rank ${t} is not yet supported`);const e=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u","resRC.v"],s=new Array(t);for(let r=0;r<n.length;r++)s[n[r]]=e[r];return s.join()}class u4{constructor(t,e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0;const s=new Array(t.length);for(let u=0;u<s.length;u++)s[u]=t[e[u]];if(this.outputShape=s,this.rank=s.length,this.rank>6)throw Error(`Packed transpose for rank ${this.rank} is not yet supported.`);const r=Wt(this.rank),o=Av("rc",this.rank),i=new Array(this.rank);for(let u=0;u<e.length;u++)i[e[u]]=o[u];const a=`vec2(${i.slice(-2).join()})`,l=`++${o[this.rank-1]} < ${s[this.rank-1]}`,c=`getChannel(getA(${i.join()}), ${a})`;this.userCode=`
    void main() {
      ${r} rc = getOutputCoords();
      vec4 result = vec4(0.);
      result[0] = ${c};
      if(${l}) {
        result[1] = ${c};
      }
      --${o[this.rank-1]};
      if(++${o[this.rank-2]} < ${s[this.rank-2]}) {
        result[2] = ${c};
        if(${l}) {
          result[3] = ${c};
        }
      }
      setOutput(result);
    }
    `}}function Pu(n,t,e){const s=W().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new u4(n.shape,t):new l4(n.shape,t);return e.runWebGLProgram(s,[n],n.dtype)}function h4(n,t,e,s){const r=t,o=n.shape.length,i=It(r,n.shape);let a=i;const l=Jt(a,o),c=l!=null;let u=n;c&&(u=Pu(n,l,s),a=ne(a.length,o)),$e("sum",a,o);const[h,d]=ye(u.shape,a);let f=h;e&&(f=ae(h,i));const p=q(d),g=q(n.shape)/p,x=et({inputs:{x:u},attrs:{shape:[g,p]},backend:s}),b=cf(n.dtype),w=Ur(x,b,"sum",s),y=et({inputs:{x:w},attrs:{shape:f},backend:s});return s.disposeIntermediateTensorInfo(x),s.disposeIntermediateTensorInfo(w),c&&s.disposeIntermediateTensorInfo(u),y}function zu(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{axis:o,keepDims:i}=s;return h4(r,o,i,e)}const d4={kernelName:ru,backendName:"webgl",kernelFunc:zu};function Me(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{perm:o}=s,i=e,a=r.shape.length,l=new Array(a);for(let u=0;u<l.length;u++)l[u]=r.shape[o[u]];let c;if(i.shouldExecuteOnCPU([r])){const h=i.texData.get(r.dataId).values,d=Kp(h,r.shape,r.dtype,o,l);c=i.makeTensorInfo(l,r.dtype);const f=i.texData.get(c.dataId);f.values=d}else c=Pu(r,o,i);return c}const f4={kernelName:eo,backendName:"webgl",kernelFunc:Me};const Pv=1e3;function Jl({a:n,b:t,transposeA:e,transposeB:s,backend:r,bias:o=null,preluActivationWeights:i=null,leakyreluAlpha:a=0,activation:l=null}){const c=n.shape.length,u=t.shape.length,h=e?n.shape[c-2]:n.shape[c-1],d=s?t.shape[u-1]:t.shape[u-2],f=e?n.shape[c-1]:n.shape[c-2],p=s?t.shape[u-2]:t.shape[u-1],m=n.shape.slice(0,-2),g=t.shape.slice(0,-2),x=q(m),b=q(g),y=yt(n.shape.slice(0,-2),t.shape.slice(0,-2)).concat([f,p]);S(h===d,()=>`Error in matMul: inner shapes (${h}) and (${d}) of Tensors with shapes ${n.shape} and ${t.shape} and transposeA=${e} and transposeB=${s} must match.`);const v=e?[x,h,f]:[x,f,h],$=s?[b,p,d]:[b,d,p],N=et({inputs:{x:n},backend:r,attrs:{shape:v}}),T=et({inputs:{x:t},backend:r,attrs:{shape:$}}),I=[N,T],k=Math.max(x,b),C=e?N.shape[1]:N.shape[2],R=o!=null,D=i!=null,M=l==="leakyrelu",O=l!=null?xi(l,!0):null,z=R||D||M||O!=null;let G;if((f===1||p===1)&&C>Pv&&z===!1){let U=N,j=T;e&&(U=Me({inputs:{x:N},backend:r,attrs:{perm:[0,2,1]}}),I.push(U)),s&&(j=Me({inputs:{x:T},backend:r,attrs:{perm:[0,2,1]}}),I.push(j));const K=p!==1,Y=p===1;let X=U;K&&(X=et({inputs:{x:U},backend:r,attrs:{shape:[k,C,1]}}),I.push(X));const Q=p===1?2:1;let tt=j;Y&&(tt=et({inputs:{x:j},backend:r,attrs:{shape:[k,1,C]}}),I.push(tt));const nt=Zp({inputs:{a:X,b:tt},backend:r});G=zu({inputs:{x:nt},backend:r,attrs:{axis:Q,keepDims:!0}}),I.push(nt)}else{const U=Qe(n.dtype,t.dtype),j=new Lv(v,$,[k,f,p],e,s,R,O,D,M),K=[N,T];if(o!=null&&K.push(o),D&&K.push(i),M){const Y=r.makeTensorInfo([],"float32",qs(a,"float32"));K.push(Y),I.push(Y)}G=r.runWebGLProgram(j,K,U)}const V=et({inputs:{x:G},backend:r,attrs:{shape:y}});I.push(G);for(const U of I)r.disposeIntermediateTensorInfo(U);return V}function p4(n){const{inputs:t,backend:e,attrs:s}=n,{a:r,b:o,bias:i,preluActivationWeights:a}=t,{transposeA:l,transposeB:c,activation:u,leakyreluAlpha:h}=s;return Jl({a:r,b:o,transposeA:l,transposeB:c,backend:e,bias:i,preluActivationWeights:a,leakyreluAlpha:h,activation:u})}const m4={kernelName:Sl,backendName:"webgl",kernelFunc:p4};const Vg="return abs(x);";function g4(n){const{inputs:t,backend:e}=n,{x:s}=t;if(e.shouldExecuteOnCPU([s])&&s.dtype!=="complex64"){const o=e.texData.get(s.dataId),i=Ev(o.values);return e.makeTensorInfo(s.shape,s.dtype,i)}let r;return W().getBool("WEBGL_PACK_UNARY_OPERATIONS")?r=new Fs(s.shape,Vg):r=new ts(s.shape,Vg),e.runWebGLProgram(r,[s],s.dtype)}const x4={kernelName:hc,backendName:"webgl",kernelFunc:g4};const b4=vn+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return acos(x);
`,y4=Rt({opSnippet:b4}),w4={kernelName:Ii,backendName:"webgl",kernelFunc:y4};const v4=vn+`
  if (x < 1.0) return NAN;
return log(x + sqrt(x * x - 1.0));`,C4=Rt({opSnippet:v4}),$4={kernelName:ki,backendName:"webgl",kernelFunc:C4};const Wg="return a + b;",I4=Ie({opSnippet:Wg,packedOpSnippet:Wg,supportsComplex:!0,cpuKernelImpl:FB}),k4={kernelName:Io,backendName:"webgl",kernelFunc:I4};class S4{constructor(t,e){this.outputShape=[],this.outputShape=t,this.variableNames=e.map((o,i)=>`T${i}`);const s=[];this.variableNames.forEach(o=>{s.push(`float v${o} = get${o}AtOutCoords();`)});const r=this.variableNames.map(o=>`v${o}`).join(" + ");this.userCode=`
      void main() {
        ${s.join(`
        `)}

        float result = ${r};
        setOutput(result);
      }
    `}}class N4{constructor(t,e){this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t,this.variableNames=e.map((o,i)=>`T${i}`);const s=[];this.variableNames.forEach(o=>{s.push(`vec4 v${o} = get${o}AtOutCoords();`)});const r=this.variableNames.map(o=>`v${o}`).join(" + ");this.userCode=`
      void main() {
        ${s.join(`
        `)}

        vec4 result = ${r};
        setOutput(result);
      }
    `}}function bl(n){const{inputs:t,backend:e}=n,s=t;if(s.length===1)return en({inputs:{x:s[0]},backend:e});if(s.length>W().getNumber("WEBGL_MAX_TEXTURES_IN_SHADER")){const l=Math.floor(s.length/2),c=bl({inputs:s.slice(0,l),backend:e}),u=bl({inputs:s.slice(l),backend:e});return bl({inputs:[c,u],backend:e})}const r=s.map(l=>l.dtype).reduce((l,c)=>Qe(l,c)),o=s.map(l=>l.shape),a=W().getBool("WEBGL_PACK")?new N4(s[0].shape,o):new S4(s[0].shape,o);return e.runWebGLProgram(a,s,r)}const T4={kernelName:vd,backendName:"webgl",kernelFunc:bl};function E4(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{axis:o,keepDims:i}=s,a=r.shape.length,l=It(o,r.shape);let c=l;const u=Jt(c,a);let h=r;u!=null&&(h=Me({inputs:{x:r},backend:e,attrs:{perm:u}}),c=ne(c.length,a)),$e("all",c,a);const[d,f]=ye(h.shape,c),p=q(f),m=et({inputs:{x:h},backend:e,attrs:{shape:[-1,p]}}),g=Ur(m,m.dtype,"all",e);let x;if(i){const b=ae(d,l);x=et({inputs:{x:g},backend:e,attrs:{shape:b}})}else x=et({inputs:{x:g},backend:e,attrs:{shape:d}});return e.disposeIntermediateTensorInfo(m),e.disposeIntermediateTensorInfo(g),u!=null&&e.disposeIntermediateTensorInfo(h),x}const R4={kernelName:Cd,backendName:"webgl",kernelFunc:E4};function A4(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{axis:o,keepDims:i}=s,a=r.shape.length,l=It(o,r.shape);let c=l;const u=Jt(c,a);let h=r;u!=null&&(h=Me({inputs:{x:r},backend:e,attrs:{perm:u}}),c=ne(c.length,a)),$e("any",c,a);const[d,f]=ye(h.shape,c),p=q(f),m=et({inputs:{x:h},backend:e,attrs:{shape:[-1,p]}}),g=Ur(m,m.dtype,"any",e);let x;if(i){const b=ae(d,l);x=et({inputs:{x:g},backend:e,attrs:{shape:b}})}else x=et({inputs:{x:g},backend:e,attrs:{shape:d}});return e.disposeIntermediateTensorInfo(m),e.disposeIntermediateTensorInfo(g),u!=null&&e.disposeIntermediateTensorInfo(h),x}const D4={kernelName:$d,backendName:"webgl",kernelFunc:A4};class _4{constructor(t,e,s){this.variableNames=["A"];const{windowSize:r,batchSize:o,outSize:i}=t;s||this.variableNames.push("bestIndicesA"),this.outputShape=[o,i];const a=e==="max"?">":"<",l=s?"inOffset + i;":"round(getBestIndicesA(batch, inOffset + i));";this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * ${r};

        int bestIndex = inOffset;
        float bestValue = getA(batch, bestIndex);

        for (int i = 0; i < ${r}; i++) {
          int inIdx = ${l};
          float candidate = getA(batch, inIdx);
          if (candidate ${a} bestValue) {
            bestValue = candidate;
            bestIndex = inIdx;
          }
        }
        setOutput(float(bestIndex));
      }
    `}}class F4{constructor(t,e,s,r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,S(t.length>2,()=>`Packed arg${s.charAt(0).toUpperCase()+s.slice(1)} supports only inputs with rank above 2.`);const o=t[t.length-1],i=Math.ceil(o/e);this.outputShape=t.slice(0,-1),i>1&&this.outputShape.push(i),r||this.variableNames.push("bestIndicesA");const a=this.outputShape,l=a.length,c=Wt(l),u=Fe("coords",l);let h,d;if(i===1){d=l+1;const T=Wt(d);h=`
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
        --${u[l-2]};`;const f=["x","y","z","w","u","v"].slice(0,d),p="."+f[d-1],m=f.map(T=>"int "+T),g=Fe("sourceLocR",d-1).concat("inIdx.r"),x=Fe("sourceLocG",d-1).concat("inIdx.g"),b=Fe("sourceLocB",d-1).concat("inIdx.b"),w=Fe("sourceLocA",d-1).concat("inIdx.a"),y=s==="max"?"greaterThan":"lessThan",v=r?"":`
          inIdx = round(vec4(getBestIndicesAChannel(${g.join()}),
                             getBestIndicesAChannel(${x.join()}),
                             getBestIndicesAChannel(${b.join()}),
                             getBestIndicesAChannel(${w.join()})));`,$=`vec4(
            getAChannel(${g.join()}),
            hasNextCol ? getAChannel(${x.join()}) : 0.,
            hasNextRow ? getAChannel(${b.join()}) : 0.,
            hasNextRow && hasNextCol ? getAChannel(${w.join()}) : 0.)`,N=r?"":`
      float getBestIndicesAChannel(${m.join()}) {
        return getChannel(getBestIndicesA(${f.join()}),
                                          vec2(${f.slice(-2).join()}));
      }`;this.userCode=`
      float getAChannel(${m.join()}) {
        return getChannel(getA(${f.join()}),
                               vec2(${f.slice(-2).join()}));
      }
      ${N}
      void main() {
        ${c} coords = getOutputCoords();
        bool hasNextCol = ${u[l-1]} < ${a[l-1]-1};
        bool hasNextRow = ${u[l-2]} < ${a[l-2]-1};
        ${h}
        ivec4 srcIdx = ivec4(sourceLocR${p}, sourceLocG${p},
          sourceLocB${p}, sourceLocA${p}) * ${e};
        ivec4 inIdx = srcIdx;
        vec4 bestIndex = vec4(inIdx);
        vec4 bestValue = ${$};

        for (int i = 0; i < ${e}; i++) {
          inIdx = srcIdx;
          ${v}
          vec4 candidate = ${$};
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
    `}}function zv(n,t,e,s=null){let r=t.shape[0],o=t.shape[1];s!=null&&(r=s.shape[0],o=s.shape[1]);const i=vu(o),a={windowSize:i,inSize:o,batchSize:r,outSize:Math.ceil(o/i)},l=new _4(a,e,s==null),c=[t];s!=null&&c.push(s);const u=n.runWebGLProgram(l,c,"int32");if(u.shape[1]===1)return u;const h=zv(n,t,e,u);return n.disposeIntermediateTensorInfo(u),h}function Bv(n,t,e,s=null){const r=s!=null?s.shape:t.shape,o=r[r.length-1],i=vu(o),a=new F4(r,i,e,s==null),l=s==null?[t]:[t,s],c=n.runWebGLProgram(a,l,"int32");if(c.shape.length===t.shape.length){const u=Bv(n,t,e,c);return n.disposeIntermediateTensorInfo(c),u}return c}function Vv(n,t,e,s){const r=[e];if($e("arg"+s.charAt(0).toUpperCase()+s.slice(1),r,t.shape.length),!W().getBool("WEBGL_PACK_REDUCE")||t.shape.length<=2){const o=[],i=n.texData.get(t.dataId),a=i!==null&&i.isPacked;let l=t;a&&(l=n.unpackTensor(t),o.push(l));const[c,u]=ye(l.shape,r),h=q(u),d=et({inputs:{x:l},backend:n,attrs:{shape:[-1,h]}});o.push(d);const f=zv(n,d,s);o.push(f);const p=et({inputs:{x:f},backend:n,attrs:{shape:c}});return o.forEach(m=>n.disposeIntermediateTensorInfo(m)),p}return Bv(n,t,s)}function O4(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{axis:o}=s;let i=It(o,r.shape);const a=Jt(i,r.shape.length);let l=r;const c=[];a!=null&&(l=Me({inputs:{x:r},backend:e,attrs:{perm:a}}),c.push(l),i=ne(i.length,l.shape.length)),$e("argMax",[i[0]],l.shape.length);const u=Vv(e,l,i[0],"max");return c.forEach(h=>e.disposeIntermediateTensorInfo(h)),u}const M4={kernelName:dc,backendName:"webgl",kernelFunc:O4};function L4(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{axis:o}=s;let i=It(o,r.shape);const a=Jt(i,r.shape.length);let l=r;const c=[];a!=null&&(l=Me({inputs:{x:r},backend:e,attrs:{perm:a}}),c.push(l),i=ne(i.length,l.shape.length)),$e("argMin",[i[0]],l.shape.length);const u=Vv(e,l,i[0],"min");return c.forEach(h=>e.disposeIntermediateTensorInfo(h)),u}const P4={kernelName:fc,backendName:"webgl",kernelFunc:L4};const z4=vn+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return asin(x);
`,B4=Rt({opSnippet:z4}),V4={kernelName:Si,backendName:"webgl",kernelFunc:B4};const W4=vn+"return log(x + sqrt(x * x + 1.0));",U4=Rt({opSnippet:W4}),G4={kernelName:Ni,backendName:"webgl",kernelFunc:U4};const H4=vn+`
  return atan(x);
`,q4=Rt({opSnippet:H4}),j4={kernelName:Ti,backendName:"webgl",kernelFunc:q4};const X4=Yp+`
  return atan(a, b);
`,K4=`
  vec4 result = atan(a, b);
  bvec4 isNaNA = isnan(a);
  bvec4 isNaNB = isnan(b);
  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);
  `+Wr+`
  return result;
`,Y4=Ie({opSnippet:X4,packedOpSnippet:K4}),Z4={kernelName:Ri,backendName:"webgl",kernelFunc:Y4};const J4=vn+`
  if ((x < -1.0) || (x > 1.0)) return NAN;
return (log(1.0 + x) - log(1.0 - x)) / 2.0;`,Q4=Rt({opSnippet:J4}),tW={kernelName:Ei,backendName:"webgl",kernelFunc:Q4};class bi{constructor(t,e,s,r=!1,o=!1){if(this.variableNames=["x"],e==="avg"&&s)throw new Error("Cannot compute positions for average pool.");const i=t.filterWidth,a=t.strideHeight,l=t.strideWidth,c=t.dilationHeight,u=t.dilationWidth,h=t.effectiveFilterHeight,d=t.effectiveFilterWidth,f=t.padInfo.top,p=t.padInfo.left;this.outputShape=t.outShape;const m=e==="avg",g=`((batch  * ${t.inHeight} + xR) * ${t.inWidth} + xC) * ${t.inChannels} + d`,x=`(xR * ${t.inWidth} + xC) * ${t.inChannels} + d`;let b="0.0";if(m||(b="-1.0 / 1e-20"),s){this.userCode=`
        const ivec2 strides = ivec2(${a}, ${l});
        const ivec2 pads = ivec2(${f}, ${p});

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
                minMaxPosition = ${r?o?g:x:`wR * ${d} + wC`};
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;return}const w="max";let y=`${e}(${e}(${e}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;e==="avg"&&(y="avgValue / max(count, 1.0)");const v=Math.floor(i/4)*4,$=i%4,N=`
      if (${m}) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = ${w}(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec2 strides = ivec2(${a}, ${l});
      const ivec2 pads = ivec2(${f}, ${p});
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

          for (int wC = 0; wC < ${v}; wC += 4) {
            int xC = xCCorner + wC * ${u};

            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + ${u}, d),
              getValue(batch, xR, xC + 2 * ${u}, d),
              getValue(batch, xR, xC + 3 * ${u}, d)
            );

            ${N}
          }

          int xC = xCCorner + ${v};
          if (${$===1}) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              initializationValue,
              initializationValue,
              initializationValue
            );

            ${N}
          } else if (${$===2}) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + ${u}, d),
              initializationValue,
              initializationValue
            );

            ${N}
          } else if (${$===3}) {
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
    `}}class Jp{constructor(t,e,s,r=!1,o=!1){if(this.variableNames=["x"],e==="avg"&&s)throw new Error("Cannot compute positions for average pool.");const i=t.filterWidth,a=t.strideDepth,l=t.strideHeight,c=t.strideWidth,u=t.dilationDepth,h=t.dilationHeight,d=t.dilationWidth,f=t.effectiveFilterDepth,p=t.effectiveFilterHeight,m=t.effectiveFilterWidth,g=t.padInfo.front,x=t.padInfo.top,b=t.padInfo.left;this.outputShape=t.outShape;const w=e==="avg";let y="0.0";if(w||(y="-1.0 / 1e-20"),s){this.userCode=`
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

          for (int wD = 0; wD < ${f};
              wD += ${u}) {
            int xD = xDCorner + wD;

            if (xD < 0 || xD >= ${t.inDepth}) {
              continue;
            }

            for (int wR = 0; wR < ${p};
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
                  minMaxPosition = ${r?o?`(((batch * ${t.inDepth} + xD) * ${t.inHeight} + xR) * ${t.inWidth} + xC) * ${t.inChannels} + ch`:`((xD * ${t.inHeight} + xR) * ${t.inWidth} + xC) * ${t.inChannels} + ch`:`wD * ${p} * ${m} +
                      wR * ${m} + wC`};
                }
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;return}const v="max";let $=`${e}(${e}(${e}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;e==="avg"&&($="avgValue / max(count, 1.0)");const N=Math.floor(i/4)*4,T=i%4,I=`
      if (${w}) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = ${v}(values, minMaxValue);
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

        for (int wD = 0; wD < ${f};
            wD += ${u}) {
          int xD = xDCorner + wD;

          if (xD < 0 || xD >= ${t.inDepth}) {
            continue;
          }

          for (int wR = 0; wR < ${p};
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

              ${I}
            }

            int xC = xCCorner + ${N};
            if (${T===1}) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                initializationValue,
                initializationValue,
                initializationValue
              );

              ${I}
            } else if (${T===2}) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ${d}, ch),
                initializationValue,
                initializationValue
              );

              ${I}
            } else if (${T===3}) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ${d}, ch),
                getValue(batch, xD, xR, xC + 2 * ${d}, ch),
                initializationValue
              );

              ${I}
            }
          }
        }
        setOutput(${$});
      }
    `}}function eW(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t;La(r,"avgPool");const{filterSize:o,strides:i,pad:a,dimRoundingMode:l}=s,c=1;S(Te(i,c),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${i} and dilations '${c}'`);const u=yn(r.shape,o,i,c,a,l);if(u.filterWidth===1&&u.filterHeight===1&&Mt(u.inShape,u.outShape))return en({inputs:{x:r},backend:e});const h=new bi(u,"avg",!1);return e.runWebGLProgram(h,[r],"float32")}const nW={kernelName:pc,backendName:"webgl",kernelFunc:eW};function sW(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{filterSize:o,strides:i,pad:a,dimRoundingMode:l,dataFormat:c}=s,u=[1,1,1],h=Ss(r.shape,o,i,u,a,l,c),d=new Jp(h,"avg",!1);return e.runWebGLProgram(d,[r],"float32")}const rW={kernelName:mc,backendName:"webgl",kernelFunc:sW};class oW{constructor(t){this.variableNames=["dy"],this.outputShape=t.inShape;const e=t.filterHeight,s=t.filterWidth,r=t.strideHeight,o=t.strideWidth,i=t.dilationHeight,a=t.dilationWidth,l=t.effectiveFilterHeight,c=t.effectiveFilterWidth,u=l-1-t.padInfo.top,h=c-1-t.padInfo.left,d=1/(e*s);this.userCode=`
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
          float dyR = float(dyRCorner + wR) / ${r}.0;

          if (dyR < 0.0 || dyR >= ${t.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < ${c};
            wC+= ${a}) {
            float dyC = float(dyCCorner + wC) / ${o}.0;

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
    `}}class iW{constructor(t){this.variableNames=["dy"],this.outputShape=t.inShape;const e=t.filterDepth,s=t.filterHeight,r=t.filterWidth,o=t.strideDepth,i=t.strideHeight,a=t.strideWidth,l=t.dilationDepth,c=t.dilationHeight,u=t.dilationWidth,h=t.effectiveFilterDepth,d=t.effectiveFilterHeight,f=t.effectiveFilterWidth,p=h-1-t.padInfo.front,m=d-1-t.padInfo.top,g=f-1-t.padInfo.left,x=1/(e*s*r);this.userCode=`
      const ivec3 pads = ivec3(${p}, ${m}, ${g});
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
          float dyD = float(dyDCorner + wD) / ${o}.0;

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

            for (int wC = 0; wC < ${f};
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
    `}}function aW(n){const{inputs:t,backend:e,attrs:s}=n,{dy:r,input:o}=t,i=o,{filterSize:a,strides:l,pad:c,dimRoundingMode:u}=s,h=[1,1,1],d=Ss(i.shape,a,l,h,c,u),f=new iW(d);return e.runWebGLProgram(f,[r],i.dtype)}const lW={kernelName:kd,backendName:"webgl",kernelFunc:aW};function cW(n){const{inputs:t,backend:e,attrs:s}=n,{dy:r,input:o}=t,i=o;La([r,o],"avgPoolGrad");const{filterSize:a,strides:l,pad:c}=s,u=yn(i.shape,a,l,1,c),h=new oW(u);return e.runWebGLProgram(h,[r],i.dtype)}const uW={kernelName:Id,backendName:"webgl",kernelFunc:cW};function hW(n){const{inputs:t,backend:e,attrs:s}=n,{a:r,b:o}=t,{transposeA:i,transposeB:a}=s;return Jl({a:r,b:o,transposeA:i,transposeB:a,backend:e})}const dW={kernelName:gc,backendName:"webgl",kernelFunc:hW};class fW{constructor(t,e,s,r,o,i){this.outputShape=[],this.variableNames=["x","mean","variance"],yt(t,e),yt(t,s);let a="0.0";r!=null&&(yt(t,r),this.variableNames.push("offset"),a="getOffsetAtOutCoords()");let l="1.0";o!=null&&(yt(t,o),this.variableNames.push("scale"),l="getScaleAtOutCoords()"),this.outputShape=t,this.userCode=`
      void main() {
        float x = getXAtOutCoords();
        float mean = getMeanAtOutCoords();
        float variance = getVarianceAtOutCoords();
        float offset = ${a};
        float scale = ${l};
        float inv = scale * inversesqrt(variance + float(${i}));
        setOutput(dot(vec3(x, -mean, offset), vec3(inv, inv, 1)));
      }
    `}}class pW{constructor(t,e,s,r,o,i){this.packedInputs=!0,this.packedOutput=!0,this.variableNames=["x","mean","variance"],yt(t,e),yt(t,s);let a="vec4(0.0)";r!=null&&(yt(t,r),this.variableNames.push("offset"),a="getOffsetAtOutCoords()");let l="vec4(1.0)";o!=null&&(yt(t,o),this.variableNames.push("scale"),l="getScaleAtOutCoords()"),this.outputShape=t,this.userCode=`
      void main() {
        vec4 offset = ${a};
        vec4 scale = ${l};

        vec4 x = getXAtOutCoords();
        vec4 mean = getMeanAtOutCoords();
        vec4 variance = getVarianceAtOutCoords();

        vec4 inv = scale * inversesqrt(variance + vec4(${i}));

        setOutput((x - mean) * inv + offset);
      }
    `}}const mW=({inputs:n,backend:t,attrs:e})=>{const{x:s,mean:r,variance:o,offset:i,scale:a}=n;S(r.shape.length===o.shape.length,()=>"Batch normalization gradient requires mean and variance to have equal ranks."),S(i==null||r.shape.length===i.shape.length,()=>"Batch normalization gradient requires mean and offset to have equal ranks."),S(a==null||r.shape.length===a.shape.length,()=>"Batch normalization gradient requires mean and scale to have equal ranks.");let{varianceEpsilon:l}=e;l==null&&(l=.001);const c=[s,r,o];let u=null;i!=null&&(u=i.shape,c.push(i));let h=null;a!=null&&(h=a.shape,c.push(a));const d=W().getBool("WEBGL_PACK_NORMALIZATION")?new pW(s.shape,r.shape,o.shape,u,h,l):new fW(s.shape,r.shape,o.shape,u,h,l);return t.runWebGLProgram(d,c,c[0].dtype)},gW={kernelName:Tc,backendName:"webgl",kernelFunc:mW};class xW{constructor(t){this.variableNames=["source"],this.outputShape=t,this.rank=t.length;const e=Wt(this.rank);this.customUniforms=[{name:"start",arrayIndex:this.rank,type:"int"}];const s=bW(this.rank);let r;const o=t.map((i,a)=>`sourceLoc.${Qh[a]} = start[${a}] + coords.${Qh[a]};`);r=`
        ${e} sourceLoc;
        ${e} coords = getOutputCoords();
        ${o.join(`
`)}
      `,this.userCode=`
      void main() {
        ${r}
        setOutput(getSource(${s}));
      }
    `}}const Qh=["x","y","z","w","u","v"];function bW(n){if(n===1)return"sourceLoc";if(n<=6)return Qh.slice(0,n).map(t=>"sourceLoc."+t).join(",");throw Error(`Slicing for rank ${n} is not yet supported`)}class yW{constructor(t){this.variableNames=["source"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t,this.rank=t.length,this.customUniforms=[{name:"start",arrayIndex:this.rank,type:"int"}];const e=Wt(this.rank),s=Fe("coords",this.rank),r=Fe("sourceLoc",this.rank),o=this.rank===1?"sourceLoc":`vec2(${r.slice(-2).join()})`,i=`getChannel(getSource(${r.join()}), ${o})`,a=`
      result.x = ${i};
      if (++${s[this.rank-1]} < ${t[this.rank-1]}) {
        ++${r[this.rank-1]};
        result.y = ${i};
        --${r[this.rank-1]};
      }
    `,l=this.rank===1?"":`
      --${s[this.rank-1]};
      if (++${s[this.rank-2]} < ${t[this.rank-2]}) {
        ++${r[this.rank-2]};
        result.z = ${i};
        if (++${s[this.rank-1]} < ${t[this.rank-1]}) {
          ++${r[this.rank-1]};
          result.w = ${i};
        }
      }
    `,c=this.rank<=4?`sourceLoc = coords +
            ${e}(${t.map((u,h)=>`start[${h}]`).join()});`:t.map((u,h)=>`${r[h]} = ${s[h]} + start[${h}];`).join(`
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
    `}}function wW(n,t,e,s){const r=s.texData.get(n.dataId),o=s.makeTensorInfo(e,n.dtype),i=s.texData.get(o.dataId);Object.assign(i,r),i.refCount=1,i.shape=e,i.dtype=n.dtype;let a=jf(t,ut(n.shape));r.slice&&(a+=r.slice.flatOffset),i.slice={flatOffset:a,origDataId:r.slice&&r.slice.origDataId||n.dataId};const l=s.dataRefCount.get(i.slice.origDataId)||1;return s.dataRefCount.set(i.slice.origDataId,l+1),o}function Lo(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{begin:o,size:i}=s,[a,l]=wu(r,o,i);if(Gf(r,a,l),q(l)===0)return e.makeTensorInfo(l,r.dtype,[]);if(e.shouldExecuteOnCPU([r])||r.dtype==="string"){const h=e.texData.get(r.dataId),d=dV(h.values,a,l,r.shape,r.dtype);return e.makeTensorInfo(l,r.dtype,d)}const{isPacked:c}=e.texData.get(r.dataId),u=qf(r.shape,a,l);if(c||!u){const h=W().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new yW(l):new xW(l),d=[a];return e.runWebGLProgram(h,[r],r.dtype,d)}return e.uploadToGPU(r.dataId),wW(r,a,l,e)}const vW={kernelName:su,backendName:"webgl",kernelFunc:Lo};const CW=n=>{const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{blockShape:o,crops:i}=s;S(r.shape.length<=4,()=>"batchToSpaceND for rank > 4 with a WebGL backend not implemented yet");const a=o.reduce((b,w)=>b*w),l=Ia(r.shape,o,a),c=ka(l.length,o.length),u=Sa(r.shape,o,a),h=Jf(i,o.length),d=Qf(u,i,o.length),f=[],p=et({inputs:{x:r},backend:e,attrs:{shape:l}}),m=Me({inputs:{x:p},backend:e,attrs:{perm:c}}),g=et({inputs:{x:m},backend:e,attrs:{shape:u}}),x=Lo({inputs:{x:g},backend:e,attrs:{begin:h,size:d}});return f.push(p),f.push(m),f.push(g),f.forEach(b=>e.disposeIntermediateTensorInfo(b)),x},$W={kernelName:xc,backendName:"webgl",kernelFunc:CW};function IW(n){const{inputs:t,backend:e,attrs:s}=n,{x:r,weights:o}=t,{size:i}=s,a=e.readSync(r.dataId),l=e.readSync(o.dataId),c=Tv(a,l,o.dtype,o.shape,i);return e.makeTensorInfo([i],o.dtype,c)}const kW={kernelName:Sd,backendName:"webgl",kernelFunc:IW};const SW=`
  int r = int(a.r) & int(b.r);
  int g = int(a.g) & int(b.g);
  int rb = int(a.b) & int(b.b);
  int ra = int(a.a) & int(b.a);
  return vec4(r, g, rb, ra);
`,NW=`
  return float(int(a.r) & int(b.r));
`;function TW(n){const{inputs:t,backend:e}=n,{a:s,b:r}=t,o=W().getBool("WEBGL_PACK_BINARY_OPERATIONS"),i=W().getNumber("WEBGL_VERSION");if(e.shouldExecuteOnCPU([s,r])||i===1){const l=e.texData.get(s.dataId).values,c=e.texData.get(r.dataId).values,[u,h]=MB(s.shape,r.shape,l,c,s.dtype),d=e.makeTensorInfo(h,s.dtype),f=e.texData.get(d.dataId);return f.values=u,d}let a;return o?a=new Oo(SW,s.shape,r.shape,!1):a=new Rr(NW,s.shape,r.shape),e.runWebGLProgram(a,[s,r],s.dtype)}const EW={kernelName:Nd,backendName:"webgl",kernelFunc:TW};function RW(n){const{inputs:t,backend:e}=n,{s0:s,s1:r}=t,o=e.readSync(s.dataId),i=e.readSync(r.dataId),a=yt(Array.from(o),Array.from(i));return e.makeTensorInfo([a.length],"int32",Int32Array.from(a))}const AW={kernelName:Fx,backendName:"webgl",kernelFunc:RW};const DW="return float(a != b);",Wv=Ie({opSnippet:DW,cpuKernelImpl:sV,dtype:"bool"}),_W={kernelName:Hc,backendName:"webgl",kernelFunc:Wv};function za(n){const{inputs:t,backend:e}=n,{input:s}=t,r=e.texData.get(s.dataId);return en({inputs:{x:r.complexTensorInfos.real},backend:e})}const FW={kernelName:Jd,backendName:"webgl",kernelFunc:za};const OW="return float(int(x));";function MW(n,t){const e=new ts(n.shape,OW),s=t.runWebGLProgram(e,[n],"int32");return{dataId:s.dataId,shape:s.shape,dtype:s.dtype}}function td(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{dtype:o}=s;if(o==="complex64"){if(r.dtype==="complex64")return en({inputs:{x:r},backend:e});const i=xe(r.shape),a=td({inputs:{x:r},backend:e,attrs:{dtype:"float32"}}),l=er({inputs:{real:a,imag:i},backend:e});return i.dispose(),e.disposeIntermediateTensorInfo(a),l}if(r.dtype==="complex64"){const i=za({inputs:{input:r},backend:e}),a=td({inputs:{x:i},backend:e,attrs:{dtype:o}});return e.disposeIntermediateTensorInfo(i),a}if(!Ex(r.dtype,o)){const i=en({inputs:{x:r},backend:e});return{dataId:i.dataId,shape:i.shape,dtype:o}}if(e.shouldExecuteOnCPU([r])){const i=e.texData.get(r.dataId).values,[a,l,c]=LB(i,r.shape,r.dtype,o);return e.makeTensorInfo(a,l,c)}if(o==="int32")return MW(r,e);if(o==="bool"){const i=e.makeTensorInfo([],"bool",ke("bool",1)),l=Wv({inputs:{a:r,b:i},backend:e});return e.disposeIntermediateTensorInfo(i),l}throw new Error(`Error in Cast: failed to cast ${r.dtype} to ${o}`)}const LW={kernelName:Ai,backendName:"webgl",kernelFunc:td};const Ug="return ceil(x);",PW=Rt({opSnippet:Ug,packedOpSnippet:Ug,cpuKernelImpl:PB}),zW={kernelName:Di,backendName:"webgl",kernelFunc:PW};class BW{constructor(t){this.variableNames=["A"],this.customUniforms=[{name:"minVal",type:"float"},{name:"maxVal",type:"float"}],this.outputShape=t,this.userCode=`

      void main() {
        float value = getAAtOutCoords();
        if (isnan(value)) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, minVal, maxVal));
      }
    `}}class VW{constructor(t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"minVal",type:"float"},{name:"maxVal",type:"float"}],this.outputShape=t,this.userCode=`
      void main() {
        vec4 value = getAAtOutCoords();

        if (any(isnan(value))) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, vec4(minVal), vec4(maxVal)));
      }
    `}}function WW(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{clipValueMin:o,clipValueMax:i}=s;let a;W().getBool("WEBGL_PACK_CLIP")?a=new VW(r.shape):a=new BW(r.shape);const l=[[o],[i]];return e.runWebGLProgram(a,[r],r.dtype,l)}const UW={kernelName:_i,backendName:"webgl",kernelFunc:WW};class GW{constructor(t){this.variableNames=["real","imag"],this.outputShape=t,this.userCode=`
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
    `}}function Gg(n,t){return{dataId:t.dataId,dtype:t.dtype,shape:n.shape}}function HW(n){const{inputs:t,backend:e}=n,{x:s}=t,r=e.texData.get(s.dataId),o=new GW(s.shape),i=[Gg(s,r.complexTensorInfos.real),Gg(s,r.complexTensorInfos.imag)];return e.runWebGLProgram(o,i,i[0].dtype)}const qW={kernelName:bc,backendName:"webgl",kernelFunc:HW};class jW{constructor(t){this.outputShape=[],this.outputShape=ss(t,1),this.variableNames=t.map((i,a)=>`T${a}`);const e=new Array(t.length-1);e[0]=t[0][1];for(let i=1;i<e.length;i++)e[i]=e[i-1]+t[i][1];const s=[`if (yC < ${e[0]}) setOutput(getT0(yR, yC));`];for(let i=1;i<e.length;i++){const a=e[i-1];s.push(`else if (yC < ${e[i]}) setOutput(getT${i}(yR, yC-${a}));`)}const r=e.length,o=e[e.length-1];s.push(`else setOutput(getT${r}(yR, yC-${o}));`),this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int yR = coords.x;
        int yC = coords.y;

        ${s.join(`
        `)}
      }
    `}}class XW{constructor(t,e){this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[],this.outputShape=ss(t,e);const s=this.outputShape,r=s.length,o=Wt(r),i=Fe("coords",r),a=["x","y","z","w","u","v"].slice(0,r);this.variableNames=t.map((m,g)=>`T${g}`);const l=new Array(t.length-1);l[0]=t[0][e];for(let m=1;m<l.length;m++)l[m]=l[m-1]+t[m][e];const c=a[e],u=a.slice(-2),h=a.join();let d=`if (${c} < ${l[0]}) {
        return getChannel(
            getT0(${h}), vec2(${u.join()}));
        }`;for(let m=1;m<l.length;m++){const g=l[m-1];d+=`
        if (${c} < ${l[m]}  && ${c} >= ${l[m-1]}) {
          return getChannel(
            getT${m}(${ol(a,c,g)}),
            vec2(${ol(u,c,g)}));
        }`}const f=l.length,p=l[l.length-1];d+=`
        return getChannel(
          getT${f}(${ol(a,c,p)}),
          vec2(${ol(u,c,p)}));`,this.userCode=`
      float getValue(${a.map(m=>"int "+m)}) {
        ${d}
      }

      void main() {
        ${o} coords = getOutputCoords();
        vec4 result = vec4(getValue(${i}), 0., 0., 0.);

        ${i[r-1]} = ${i[r-1]} + 1;
        if (${i[r-1]} < ${s[r-1]}) {
          result.g = getValue(${i});
        }

        ${i[r-2]} = ${i[r-2]} + 1;
        if (${i[r-2]} < ${s[r-2]}) {
          result.a = getValue(${i});
        }

        ${i[r-1]} = ${i[r-1]} - 1;
        if (${i[r-2]} < ${s[r-2]} &&
            ${i[r-1]} < ${s[r-1]}) {
          result.b = getValue(${i});
        }
        setOutput(result);
      }
    `}}function ol(n,t,e){const s=n.indexOf(t);return n.map((o,i)=>i===s?`${o} - ${e}`:o).join()}function Bu(n){const{inputs:t,backend:e}=n,{input:s}=t,r=e.texData.get(s.dataId);return en({inputs:{x:r.complexTensorInfos.imag},backend:e})}const KW={kernelName:Gd,backendName:"webgl",kernelFunc:Bu};function ti(n,t,e){const s=n[0].dtype;if(s==="complex64"){const f=n.map(b=>za({inputs:{input:b},backend:e})),p=n.map(b=>Bu({inputs:{input:b},backend:e})),m=ti(f,t,e),g=ti(p,t,e),x=er({inputs:{real:m,imag:g},backend:e});return f.forEach(b=>e.disposeIntermediateTensorInfo(b)),p.forEach(b=>e.disposeIntermediateTensorInfo(b)),e.disposeIntermediateTensorInfo(m),e.disposeIntermediateTensorInfo(g),x}let r=e.shouldExecuteOnCPU(n);if(s==="string"&&(r=!0),r){const f=n.map(y=>{const $=[-1,q(y.shape.slice(t))];return et({inputs:{x:y},backend:e,attrs:{shape:$}})}),p=f.map(y=>({vals:e.readSync(y.dataId),shape:y.shape})),m=ss(f.map(y=>y.shape),1),g=f[0].shape[0]===1,x=zB(p,m,s,g),b=ss(n.map(y=>y.shape),t),w=e.makeTensorInfo(b,s,x);return f.forEach(y=>e.disposeIntermediateTensorInfo(y)),w}const o=n.filter(f=>q(f.shape)>0),i=W().getBool("WEBGL_PACK_ARRAY_OPERATIONS")&&o[0].shape.length>1;if(o.length===1){const f=i?new ts(n[0].shape,As):new Fs(n[0].shape,As);return e.runWebGLProgram(f,n,s)}const a=W().getNumber("WEBGL_MAX_TEXTURES_IN_SHADER");if(o.length>a){const f=[];for(let m=0;m<o.length;m+=a){const g=o.slice(m,m+a);f.push(ti(g,t,e))}const p=ti(f,t,e);for(const m of f)e.disposeIntermediateTensorInfo(m);return p}if(i){const f=new XW(o.map(p=>p.shape),t);return e.runWebGLProgram(f,o,s)}const{tensors2D:l,outShape:c}=YW(o,t,e),u=new jW(l.map(f=>f.shape)),h=e.runWebGLProgram(u,l,s);l.forEach(f=>e.disposeIntermediateTensorInfo(f));const d=et({inputs:{x:h},attrs:{shape:c},backend:e});return e.disposeIntermediateTensorInfo(h),d}function YW(n,t,e){const s=ss(n.map(o=>o.shape),t);return{tensors2D:n.map(o=>et({inputs:{x:o},attrs:{shape:[-1,q(o.shape.slice(t))]},backend:e})),outShape:s}}function Uv(n){const{inputs:t,backend:e,attrs:s}=n,{axis:r}=s,o=It(r,t[0].shape)[0],i=t.map(c=>c.shape);Kf(i,o);const a=ss(t.map(c=>c.shape),o);if(q(a)===0)return e.makeTensorInfo(a,t[0].dtype,[]);const l=t.filter(c=>q(c.shape)>0);return l.length===1?en({inputs:{x:l[0]},backend:e}):ti(l,o,e)}const ZW={kernelName:yc,backendName:"webgl",kernelFunc:Uv};class Gv{constructor(t,e=!1,s=null,r=!1,o=!1){this.variableNames=["x","W"],this.outputShape=t.outShape;const i=t.padInfo.top,a=t.padInfo.left,l=t.strideHeight,c=t.strideWidth,u=t.dilationHeight,h=t.dilationWidth,d=t.filterHeight,f=t.filterWidth,p=Math.floor(t.inChannels/4)*4,m=t.inChannels%4,g=t.dataFormat==="channelsLast",x=g?1:2,b=g?2:3,w=g?3:1;let y="",v="";s&&(r?y=`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          ${s}
        }`:o?y=`float activation(float a) {
          float b = getLeakyreluAlphaAtOutCoords();
          ${s}
        }`:y=`
          float activation(float x) {
            ${s}
          }
        `,v="result = activation(result);");const $=e?"result += getBiasAtOutCoords();":"";e&&this.variableNames.push("bias"),r&&this.variableNames.push("preluActivationWeights"),o&&this.variableNames.push("leakyreluAlpha"),this.userCode=`
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

          for (int wC = 0; wC < ${f}; wC++) {
            int xC = xCCorner + wC * ${h};

            if (xC < 0 || xC >= ${t.inWidth}) {
              continue;
            }

            for (int d1 = 0; d1 < ${p}; d1 += 4) {
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
                    getX(batch, xR, xC, ${p}) *
                    getW(wR, wC, ${p}, d2);
              } else {
                dotProd +=
                    getX(batch, ${p}, xR, xC) *
                    getW(wR, wC, ${p}, d2);
              }

            } else if (${m===2}) {
              vec2 wValues = vec2(
                getW(wR, wC, ${p}, d2),
                getW(wR, wC, ${p} + 1, d2)
              );

              if (${g}) {
                vec2 xValues = vec2(
                  getX(batch, xR, xC, ${p}),
                  getX(batch, xR, xC, ${p} + 1)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec2 xValues = vec2(
                  getX(batch, ${p}, xR, xC),
                  getX(batch, ${p} + 1, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            } else if (${m===3}) {
              vec3 wValues = vec3(
                getW(wR, wC, ${p}, d2),
                getW(wR, wC, ${p} + 1, d2),
                getW(wR, wC, ${p} + 2, d2)
              );

              if (${g}) {
                vec3 xValues = vec3(
                  getX(batch, xR, xC, ${p}),
                  getX(batch, xR, xC, ${p} + 1),
                  getX(batch, xR, xC, ${p} + 2)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec3 xValues = vec3(
                  getX(batch, ${p}, xR, xC),
                  getX(batch, ${p} + 1, xR, xC),
                  getX(batch, ${p} + 2, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            }
          }
        }

        float result = dotProd;
        ${$}
        ${v}
        setOutput(result);
      }
    `}}class JW{constructor(t){this.variableNames=["x","W"],this.outputShape=t.outShape;const e=t.padInfo.front,s=t.padInfo.top,r=t.padInfo.left,o=t.strideDepth,i=t.strideHeight,a=t.strideWidth,l=t.dilationDepth,c=t.dilationHeight,u=t.dilationWidth,h=t.filterDepth,d=t.filterHeight,f=t.filterWidth,p=Math.floor(t.inChannels/4)*4,m=t.inChannels%4;this.userCode=`
      const ivec3 strides = ivec3(${o}, ${i}, ${a});
      const ivec3 pads = ivec3(${e}, ${s}, ${r});

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

            for (int wC = 0; wC < ${f}; wC++) {
              int xC = xCCorner + wC * ${u};

              if (xC < 0 || xC >= ${t.inWidth}) {
                continue;
              }

              for (int d1 = 0; d1 < ${p}; d1 += 4) {
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
                  getX(batch, xF, xR, xC, ${p}) *
                  getW(wF, wR, wC, ${p}, d2);
              } else if (${m===2}) {
                vec2 xValues = vec2(
                  getX(batch, xF, xR, xC, ${p}),
                  getX(batch, xF, xR, xC, ${p} + 1)
                );
                vec2 wValues = vec2(
                  getW(wF, wR, wC, ${p}, d2),
                  getW(wF, wR, wC, ${p} + 1, d2)
                );
                dotProd += dot(xValues, wValues);
              } else if (${m===3}) {
                vec3 xValues = vec3(
                  getX(batch, xF, xR, xC, ${p}),
                  getX(batch, xF, xR, xC, ${p} + 1),
                  getX(batch, xF, xR, xC, ${p} + 2)
                );
                vec3 wValues = vec3(
                  getW(wF, wR, wC, ${p}, d2),
                  getW(wF, wR, wC, ${p} + 1, d2),
                  getW(wF, wR, wC, ${p} + 2, d2)
                );
                dotProd += dot(xValues, wValues);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `}}class Hv{constructor(t,e=!1,s=null,r=!1,o=!1){this.variableNames=["x","W"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"pads",type:"ivec2"},{name:"strides",type:"ivec2"},{name:"dilations",type:"ivec2"},{name:"inDims",type:"ivec2"}],this.outputShape=t.outShape,this.enableShapeUniforms=Re(this.outputShape.length);const i=t.padInfo.left,a=t.strideWidth,l=t.dilationWidth,c=t.filterHeight,u=t.filterWidth,h=u;let d=`
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
                 `,x+1<u)){const b=i%2===0?gd(l):l;l%2===0&&i%2===1||l%2!==0&&i%2!==1?(d+=`
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
   `;let f="",p="";s&&(r?f=`vec4 activation(vec4 a) {
           vec4 b = getPreluActivationWeightsAtOutCoords();
           ${s}
         }`:o?f=`vec4 activation(vec4 a) {
           vec4 b = getLeakyreluAlphaAtOutCoords();
           ${s}
         }`:f=`vec4 activation(vec4 x) {
           ${s}
         }`,p="result = activation(result);");const m=e?"result += getBiasAtOutCoords();":"";e&&this.variableNames.push("bias"),r&&this.variableNames.push("preluActivationWeights"),o&&this.variableNames.push("leakyreluAlpha"),this.userCode=`
       ${f}

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
         ${p}
         setOutput(result);
       }
     `}}class QW{constructor(t,e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"inputShape",type:"ivec4"},{name:"pad",type:"ivec2"},{name:"stride",type:"ivec2"},{name:"dilation",type:"ivec2"},{name:"inChannels",type:"int"},{name:"itemsPerBlockRow",type:"int"},{name:"outWidth",type:"int"}],this.outputShape=t,this.enableShapeUniforms=Re(this.outputShape.length);const{dataFormat:s}=e,r=Le(),o=s==="channelsLast",i=o?1:2,a=o?2:3,l=this.enableShapeUniforms?"if(blockIndex < outShape[2] && pos < outShape[1]) {":`if(blockIndex < ${t[2]} && pos < ${t[1]}) {`;let c="";for(let u=0;u<=1;u++)for(let h=0;h<=1;h++)c+=`
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

                if (${o}) {
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

        ${r.output} = result;
      }
    `}}function Ql(n,t){const e=n.length;return e>=3?t?[...n.slice(0,-3),n[e-3]*n[e-2],n[e-1]]:[...n.slice(0,-3),n[e-3],n[e-2]*n[e-1]]:!t&&e===1&&n[0]>1?[n[0],1]:null}function qv({x:n,filter:t,convInfo:e,backend:s,bias:r=null,preluActivationWeights:o=null,leakyreluAlpha:i=0,activation:a=null}){const l=n.shape,c=s.texData.get(n.dataId),u=e.inChannels,h=l[0]*l[1]*l[2],d=e.outChannels,f=e.dataFormat==="channelsLast",p=!1,m=!1;let g;const x=[];if(o!=null){const y=Ql(o.shape,f);y!=null&&(o=et({inputs:{x:o},backend:s,attrs:{shape:y}}),x.push(o))}if(r!=null){const y=Ql(r.shape,f);y!=null&&(r=et({inputs:{x:r},backend:s,attrs:{shape:y}}),x.push(r))}if(!((h===1||d===1)&&u>Pv)&&c.isPacked&&f&&c.texture!=null&&l[2]%2!==0&&Mt(c.shape.slice(-3),l.slice(-3))){const y=l[0]*l[1]*(l[2]+1),v={dataId:n.dataId,shape:[1,y,e.inChannels],dtype:n.dtype},$=c.shape;c.shape=c.shape.slice(),c.shape[c.shape.length-2]++,S(Zl(c.shape,v.shape),()=>`packed reshape ${c.shape} to ${v.shape} isn't free`);const N=et({inputs:{x:t},backend:s,attrs:{shape:[1,e.inChannels,e.outChannels]}});x.push(N);const T=Jl({a:v,b:N,backend:s,transposeA:p,transposeB:m,bias:r,activation:a,preluActivationWeights:o,leakyreluAlpha:i}),I=s.texData.get(T.dataId);S(I.isPacked,()=>"batchMatMul result is expected to be packed"),c.shape=$,I.shape=e.outShape,g=en({inputs:{x:T},backend:s}),g.shape=e.outShape,x.push(T)}else{const y=e.outHeight*e.outWidth,v=et({inputs:{x:n},backend:s,attrs:{shape:f?[e.batchSize,y,e.inChannels]:[e.batchSize,e.inChannels,y]}}),$=et({inputs:{x:t},backend:s,attrs:{shape:[1,e.inChannels,e.outChannels]}}),N=Jl({a:f?v:$,b:f?$:v,transposeA:!f,transposeB:m,backend:s,bias:r,activation:a,preluActivationWeights:o,leakyreluAlpha:i});g=et({inputs:{x:N},backend:s,attrs:{shape:e.outShape}}),x.push(v),x.push($),x.push(N)}for(const y of x)s.disposeIntermediateTensorInfo(y);return g}function jv({x:n,filter:t,convInfo:e,backend:s,bias:r=null,preluActivationWeights:o=null,leakyreluAlpha:i=0,activation:a=null}){const{filterWidth:l,filterHeight:c,inChannels:u,outWidth:h,outHeight:d,dataFormat:f}=e,p=f==="channelsLast",m=l*c*u,g=d*h,x=[e.batchSize,m,g],b=!0,w=!1,y=[];if(o!=null){const V=Ql(o.shape,p);V!=null&&(o=et({inputs:{x:o},backend:s,attrs:{shape:V}}),y.push(o))}if(r!=null){const V=Ql(r.shape,p);V!=null&&(r=et({inputs:{x:r},backend:s,attrs:{shape:V}}),y.push(r))}const v=et({inputs:{x:t},backend:s,attrs:{shape:[1,m,q(t.shape)/m]}});y.push(v);const $=new QW(x,e),N=[n.shape,[e.padInfo.top,e.padInfo.left],[e.strideHeight,e.strideWidth],[e.dilationHeight,e.dilationWidth],[e.inChannels],[e.filterWidth*e.inChannels],[e.outWidth]],T=s.runWebGLProgram($,[n],"float32",N),I=et({inputs:{x:T},backend:s,attrs:{shape:x}});y.push(T),y.push(I);const k=r!=null,C=o!=null,R=a==="leakyrelu",D=a?xi(a,!0):null,M=new Lv(p?I.shape:v.shape,p?v.shape:I.shape,p?[e.batchSize,g,e.outChannels]:[e.batchSize,e.outChannels,g],b,w,k,D,C,R),O=p?[I,v]:[v,I];if(r&&O.push(r),C&&O.push(o),R){const V=s.makeTensorInfo([],"float32",qs(i,"float32"));O.push(V),y.push(V)}const z=s.runWebGLProgram(M,O,"float32"),G=et({inputs:{x:z},backend:s,attrs:{shape:e.outShape}});y.push(z);for(const V of y)s.disposeIntermediateTensorInfo(V);return G}function tU(n){const{inputs:t,backend:e,attrs:s}=n,{x:r,filter:o}=t,{strides:i,pad:a,dataFormat:l,dilations:c,dimRoundingMode:u}=s,h=Ns(l),d=Ce(r.shape,o.shape,i,c,a,u,!1,h);let f;if(d.filterHeight===1&&d.filterWidth===1&&d.dilationHeight===1&&d.dilationWidth===1&&d.strideHeight===1&&d.strideWidth===1&&(d.padInfo.type==="SAME"||d.padInfo.type==="VALID"))f=qv({x:r,filter:o,convInfo:d,backend:e});else if(d.strideWidth<=2&&h==="channelsLast"&&W().getBool("WEBGL_EXP_CONV")){const m=new Hv(d),g=[[d.padInfo.top,d.padInfo.left],[d.strideHeight,d.strideWidth],[d.dilationHeight,d.dilationWidth],[d.inHeight,d.inWidth]];f=e.runWebGLProgram(m,[r,o],"float32",g)}else if(W().getBool("WEBGL_CONV_IM2COL"))f=jv({x:r,filter:o,convInfo:d,backend:e});else{const m=new Gv(d);f=e.runWebGLProgram(m,[r,o],"float32")}const p=et({inputs:{x:f},backend:e,attrs:{shape:d.outShape}});return e.disposeIntermediateTensorInfo(f),p}const eU={kernelName:wc,backendName:"webgl",kernelFunc:tU};class nU{constructor(t){this.variableNames=["x","dy"],this.outputShape=t.filterShape;const e=t.strideHeight,s=t.strideWidth,r=t.padInfo.top,o=t.padInfo.left,i=t.dataFormat==="channelsLast";this.userCode=`
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
            int xR = wR + yR * ${e} - ${r};

            if (xR < 0 || xR >= ${t.inHeight}) {
              continue;
            }

            for (int yC = 0; yC < ${t.outWidth}; yC++) {
              int xC = wC + yC * ${s} - ${o};

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
    `}}class sU{constructor(t){this.variableNames=["dy","W"],this.outputShape=t.inShape;const e=t.filterHeight,s=t.filterWidth,r=t.strideHeight,o=t.strideWidth,i=t.dataFormat==="channelsLast",a=e-1-t.padInfo.top,l=s-1-t.padInfo.left,c=i?1:2,u=i?2:3,h=i?3:1;this.userCode=`
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
          float dyR = float(dyRCorner + wR) / ${r}.0;

          if (dyR < 0.0 || dyR >= ${t.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = ${e} - 1 - wR;

          for (int wC = 0; wC < ${s}; wC++) {
            float dyC = float(dyCCorner + wC) / ${o}.0;

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
    `}}class rU{constructor(t){this.variableNames=["x","dy"],this.outputShape=t.filterShape;const e=t.strideDepth,s=t.strideHeight,r=t.strideWidth,o=t.padInfo.front,i=t.padInfo.top,a=t.padInfo.left;this.userCode=`
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
            int xF = wF + yF * ${e} - ${o};

            if (xF < 0 || xF >= ${t.inDepth}) {
              continue;
            }

            for (int yR = 0; yR < ${t.outHeight}; yR++) {
              int xR = wR + yR * ${s} - ${i};

              if (xR < 0 || xR >= ${t.inHeight}) {
                continue;
              }

              for (int yC = 0; yC < ${t.outWidth}; yC++) {
                int xC = wC + yC * ${r} - ${a};

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
    `}}class oU{constructor(t){this.variableNames=["dy","W"],this.outputShape=t.inShape;const e=t.filterDepth,s=t.filterHeight,r=t.filterWidth,o=t.strideDepth,i=t.strideHeight,a=t.strideWidth,l=e-1-t.padInfo.front,c=s-1-t.padInfo.top,u=r-1-t.padInfo.left;this.userCode=`
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
          float dyF = float(dyFCorner + wF) / ${o}.0;

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

            for (int wC = 0; wC < ${r}; wC++) {
              float dyC = float(dyCCorner + wC) / ${a}.0;

              if (dyC < 0.0 || dyC >= ${t.outWidth}.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              int wCPerm = ${r} - 1 - wC;

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
    `}}function iU(n){const{inputs:t,backend:e,attrs:s}=n,{x:r,dy:o}=t,{strides:i,pad:a,dataFormat:l,dimRoundingMode:c,filterShape:u}=s,h=Ns(l),d=Ce(r.shape,u,i,1,a,c,!1,h),f=new nU(d);return e.runWebGLProgram(f,[r,o],"float32")}const aU={kernelName:Ed,backendName:"webgl",kernelFunc:iU};class lU{constructor(t){this.variableNames=["dy","W"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"strides",type:"vec2"}],this.outputShape=t.inShape,this.enableShapeUniforms=Re(this.outputShape.length);const e=t.filterHeight,s=t.filterWidth,r=e-1-t.padInfo.top,o=s-1-t.padInfo.left;this.userCode=`
      const ivec2 pads = ivec2(${r}, ${o});

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
    `}}function cU(n){const{inputs:t,backend:e,attrs:s}=n,{dy:r,filter:o}=t,{inputShape:i,strides:a,pad:l,dataFormat:c,dimRoundingMode:u}=s,h=Ns(c),d=Ce(i,o.shape,a,1,l,u,!1,h);if(W().getBool("WEBGL_PACK_CONV2DTRANSPOSE")&&h==="channelsLast"){const f=[[d.strideHeight,d.strideWidth]],p=new lU(d);return e.runWebGLProgram(p,[r,o],"float32",f)}else{const f=new sU(d);return e.runWebGLProgram(f,[r,o],"float32")}}const uU={kernelName:vc,backendName:"webgl",kernelFunc:cU};function hU(n){const{inputs:t,backend:e,attrs:s}=n,{x:r,filter:o}=t,{strides:i,pad:a,dilations:l}=s,c=Xs(r.shape,o.shape,i,l,a),u=new JW(c);return e.runWebGLProgram(u,[r,o],"float32")}const dU={kernelName:Cc,backendName:"webgl",kernelFunc:hU};function fU(n){const{inputs:t,backend:e,attrs:s}=n,{x:r,dy:o}=t,{strides:i,pad:a,filterShape:l}=s,c=Xs(r.shape,l,i,1,a),u=new rU(c);return e.runWebGLProgram(u,[r,o],"float32")}const pU={kernelName:Rd,backendName:"webgl",kernelFunc:fU};function mU(n){const{inputs:t,backend:e,attrs:s}=n,{dy:r,filter:o}=t,{pad:i,strides:a,inputShape:l}=s,c=Xs(l,o.shape,a,1,i),u=new oU(c);return e.runWebGLProgram(u,[r,o],"float32")}const gU={kernelName:Ad,backendName:"webgl",kernelFunc:mU};const xU=Mo+`
  return cos(x);
`,bU=`
  vec4 result = cos(x);
  bvec4 isNaN = isnan(x);
  ${Wr}
  return result;
`,yU=Rt({opSnippet:xU,packedOpSnippet:bU}),wU={kernelName:Fi,backendName:"webgl",kernelFunc:yU};const vU=`
  float e2x = exp(-x);
  return (e2x + 1.0 / e2x) / 2.0;
`,CU=Rt({opSnippet:vU}),$U={kernelName:Oi,backendName:"webgl",kernelFunc:CU};class IU{constructor(t,e,s,r,o){this.variableNames=["Image","Boxes","BoxInd"],this.outputShape=[];const[i,a,l,c]=t,[u]=e,[h,d]=s;this.outputShape=[u,h,d,c];const f=r==="bilinear"?1:0,[p,m]=[`${a-1}.0`,`${l-1}.0`],[g,x,b]=h>1?[`${(a-1)/(h-1)}`,"(y2-y1) * height_ratio",`y1*${p} + float(y)*(height_scale)`]:["0.0","0.0",`0.5 * (y1+y2) * ${p}`],[w,y,v]=d>1?[`${(l-1)/(d-1)}`,"(x2-x1) * width_ratio",`x1*${m} + float(x)*(width_scale)`]:["0.0","0.0",`0.5 * (x1+x2) * ${m}`];this.userCode=`
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
        if( in_y < 0.0 || in_y > ${p} ) {
          setOutput(float(${o}));
          return;
        }
        float in_x = ${v};
        if( in_x < 0.0 || in_x > ${m} ) {
          setOutput(float(${o}));
          return;
        }

        vec2 sourceFracIndexCR = vec2(in_x,in_y);
        if(${f} == 1) {
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
    `}}const kU=n=>{const{inputs:t,backend:e,attrs:s}=n,{image:r,boxes:o,boxInd:i}=t,{cropSize:a,method:l,extrapolationValue:c}=s,u=new IU(r.shape,o.shape,a,l,c);return e.runWebGLProgram(u,[r,o,i],"float32")},SU={kernelName:_d,backendName:"webgl",kernelFunc:kU};var yi;(function(n){n.Prod="*",n.Sum="+"})(yi||(yi={}));class Hg{constructor(t,e,s,r){this.op=t,this.outputShape=e,this.variableNames=["x"],this.customUniforms=[{name:"index",type:"float"}];const o=this.outputShape.length,i=this.op===yi.Prod?"1.0":"0.0",a=s?i:`getX(${qg(o,"coords",this.op)})`,l=this.outputShape[this.outputShape.length-1];let c="",u="";s?(c=r?`end != ${l-1}`:"end != 0",u=r?"end + 1":"end - 1"):(c=r?`end + pow2 < ${l}`:"end >= pow2",u=r?"end + pow2":"end - pow2"),this.userCode=`
      void main() {
        ${Wt(o)} coords = getOutputCoords();
        int end = ${jg(o,"coords",this.op)};
        float val = ${a};
        int pow2 = int(pow(2.0, index));
        if (${c}) {
          int idx = ${u};
          ${jg(o,"coords",this.op)} = idx;
          val ${this.op}= getX(${qg(o,"coords",this.op)});
        }
        setOutput(val);
      }
    `}}function qg(n,t,e){if(n===1)return`${t}`;if(n===2)return`${t}.x, ${t}.y`;if(n===3)return`${t}.x, ${t}.y, ${t}.z`;if(n===4)return`${t}.x, ${t}.y, ${t}.z, ${t}.w`;throw new Error(`Cumulative ${e} for rank ${n} is not yet supported`)}function jg(n,t,e){if(n===1)return`${t}`;if(n===2)return`${t}.y`;if(n===3)return`${t}.z`;if(n===4)return`${t}.w`;throw new Error(`Cumulative ${e} for rank ${n} is not yet supported`)}function Xv(n,t,e,s,r,o){const i=t.shape.length,a=Jt([s],i);let l=t;a!=null&&(l=Me({inputs:{x:t},backend:e,attrs:{perm:a}}));const c=ne(1,i)[0];if(c!==i-1)throw new Error(`WebGL cumprod shader expects an inner-most axis=${t.shape.length-1} but got axis=${s}`);const u=l.shape[c];let h=en({inputs:{x:l},backend:e});for(let d=0;d<=Math.ceil(Math.log2(u))-1;d++){const f=new Hg(n,l.shape,!1,o),p=[[d]],m=h;h=e.runWebGLProgram(f,[h],h.dtype,p),e.disposeIntermediateTensorInfo(m)}if(r){const d=new Hg(n,l.shape,r,o),f=h;h=e.runWebGLProgram(d,[h],h.dtype),e.disposeIntermediateTensorInfo(f)}if(a!=null){const d=Ks(a),f=Me({inputs:{x:h},backend:e,attrs:{perm:d}});return e.disposeIntermediateTensorInfo(h),e.disposeIntermediateTensorInfo(l),f}return h}function NU(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{axis:o,exclusive:i,reverse:a}=s;return Xv(yi.Prod,r,e,o,i,a)}const TU={kernelName:Dd,backendName:"webgl",kernelFunc:NU};function EU(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{axis:o,exclusive:i,reverse:a}=s;return Xv(yi.Sum,r,e,o,i,a)}const RU={kernelName:$c,backendName:"webgl",kernelFunc:EU};function AU(n){const{inputs:t,backend:e,attrs:s}=n,{x:r,weights:o}=t,{size:i,binaryOutput:a}=s;if(r.shape.length===1){const l=e.readSync(r.dataId),c=e.readSync(o.dataId),u=Tv(l,c,o.dtype,o.shape,i);return e.makeTensorInfo([i],o.dtype,u)}else if(r.shape.length===2){const l=e.bufferSync(r),c=e.bufferSync(o),u=OB(l,c,i,a);return e.makeTensorInfo(u.shape,o.dtype,u.values)}throw new Error(`Error in denseBincount: input must be at most rank 2, but got rank${r.shape.length}.`)}const DU={kernelName:Fd,backendName:"webgl",kernelFunc:AU};class _U{constructor(t,e,s){this.variableNames=["x"],this.outputShape=[],this.outputShape=t,this.blockSize=e,this.dataFormat=s,this.userCode=`
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
  `}getHeightCoordString(){return this.dataFormat==="NHWC"?"coords[1]":"coords[2]"}getWidthCoordString(){return this.dataFormat==="NHWC"?"coords[2]":"coords[3]"}getDepthCoordString(){return this.dataFormat==="NHWC"?"coords[3]":"coords[1]"}getOutputDepthSize(){return this.dataFormat==="NHWC"?this.outputShape[3]:this.outputShape[1]}getInputSamplingString(){return this.dataFormat==="NHWC"?"getX(b, in_h, in_w, in_d)":"getX(b, in_d, in_h, in_w)"}}function FU(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{blockSize:o,dataFormat:i}=s,a=r.shape[0],l=i==="NHWC"?r.shape[1]:r.shape[2],c=i==="NHWC"?r.shape[2]:r.shape[3],u=i==="NHWC"?r.shape[3]:r.shape[1],h=l*o,d=c*o,f=u/(o*o),p=i==="NHWC"?[a,h,d,f]:[a,f,h,d],m=new _U(p,o,i);return e.runWebGLProgram(m,[r],r.dtype)}const OU={kernelName:Od,backendName:"webgl",kernelFunc:FU};class Kv{constructor(t,e=!1,s=null,r=!1,o=!1){this.variableNames=["x","W"],this.customUniforms=[{name:"pads",type:"ivec2"},{name:"strides",type:"ivec2"},{name:"dilations",type:"ivec2"},{name:"inDims",type:"ivec2"}],this.outputShape=t.outShape,this.enableShapeUniforms=Re(this.outputShape.length);const i=t.filterHeight,a=t.filterWidth,l=t.outChannels/t.inChannels;let c="",u="";s&&(r?c=`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          ${s}
        }`:o?c=`float activation(float a) {
          float b = getLeakyreluAlphaAtOutCoords();
          ${s}
        }`:c=`
          float activation(float x) {
            ${s}
          }
        `,u="result = activation(result);");const h=e?"result += getBiasAtOutCoords();":"";e&&this.variableNames.push("bias"),r&&this.variableNames.push("preluActivationWeights"),o&&this.variableNames.push("leakyreluAlpha"),this.userCode=`
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
    `}}class Yv{constructor(t,e=!1,s=null,r=!1,o=!1){this.variableNames=["x","W"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"pads",type:"ivec2"},{name:"strides",type:"ivec2"},{name:"dilations",type:"ivec2"},{name:"inDims",type:"ivec2"}],this.outputShape=t.outShape,this.enableShapeUniforms=Re(this.outputShape.length);const i=t.outChannels/t.inChannels,a=t.padInfo.left,l=t.strideWidth,c=t.dilationWidth,u=t.filterHeight,h=t.filterWidth,d=h;let f=`
      int xR; int xC; int xCOffset;
      vec4 wTexel; vec4 previous; vec4 final;`;for(let x=0;x<h;x++)f+=`
          vec4 xTexelC${x*2};
          int xTexelC${x*2}Ready;
          vec4 xTexelC${x*2+1};
          int xTexelC${x*2+1}Ready;
          vec4 xC${x};`;f+=`
    for (int r = 0; r < ${u}; r++) {
      `;for(let x=0;x<h;x++)f+=`
          xTexelC${x*2} = vec4(0.0);
          xTexelC${x*2}Ready = 0;
          xTexelC${x*2+1} = vec4(0.0);
          xTexelC${x*2+1}Ready = 0;
          xC${x} = vec4(0.0);`;f+=`
        xR = xRCorner + r * dilations[0];
        if (xR >=0 && xR < inDims[0]) {
      `;for(let x=0;x<(d+1)/2;x++){const b=x*2;if(f+=`
          xC = xCCorner + ${b*c};
          `,l===1){if(b<h&&(a%2===1?(f+=`
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
              `,c===1&&b>0?f+=`
                xC${b} = vec4(xTexelC${b-2}.zw, xTexelC${b}.xy);
                `:f+=`
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
                  `):f+=`
                if (xC >= 0 && xC < inDims[1] && xTexelC${b}Ready == 0) {
                  xTexelC${b} = getX(batch, xR, xC, d1);
                  if (xC + 1 >= inDims[1]) {
                    xTexelC${b}.zw = vec2(0.0);
                  }
                  xTexelC${b}Ready = 1;
                }

                xC${b} = xTexelC${b};
                `,b+1<h)){const w=a%2===0?gd(c):c;c%2===0&&a%2===1||c%2!==0&&a%2!==1?(f+=`
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
                  `,c>1?f+=`
                    xCOffset -= 2;
                    if (xCOffset >= 0 && xCOffset < inDims[1]) {
                     previous = getX(batch, xR, xCOffset, d1);
                     xC${b+1} = vec4(previous.zw, xTexelC${b+1}.xy);
                    } else {
                     xC${b+1} = vec4(0.0, 0.0, xTexelC${b+1}.xy);
                    }
                    `:f+=`
                    xC${b+1} = vec4(xTexelC${b}.zw, xTexelC${b+1}.xy);
                    `):w===1?f+=`
                    xC${b+1} = xTexelC${b};
                    `:f+=`
                    xCOffset = xC + ${w};

                    if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${b+1}Ready == 0) {
                      xTexelC${b+1} = getX(batch, xR, xCOffset, d1);
                      if (xCOffset + 1 >= inDims[1]) {
                        xTexelC${b+1}.zw = vec2(0.0);
                      }
                      xTexelC${b+1}Ready = 1;
                    }

                    xC${b+1} = xTexelC${b+1};
                    `}}else b<h&&(a%2===1?(f+=`
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
              `,b+1<h&&(f+=`
                  final = vec4(0.0);
                  xCOffset = xC + 1 + strides[1];
                  if(xCOffset >= 0 && xCOffset < inDims[1]) {
                    final = getX(batch, xR, xCOffset, d1);
                  }
                  xC${b+1} = vec4(xTexelC${b+1}.xy, final.xy);
                `)):(f+=`
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
              `,b+1<h&&(f+=`
                  xC${b+1} = vec4(xTexelC${b}.zw, xTexelC${b+1}.zw);
                `)));b<h&&(f+=`
            wTexel = getW(r, ${b}, d1, q);
            dotProd += xC${b} * vec4(wTexel.xz, wTexel.xz);
          `,b+1<h&&(f+=`
              wTexel = getW(r, ${b+1}, d1, q);
              dotProd += xC${b+1} * vec4(wTexel.xz, wTexel.xz);
            `))}f+=`
    }
  `,f+=`
      }
    `;let p="",m="";s&&(r?p=`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          ${s}
        }`:o?p=`vec4 activation(vec4 a) {
          vec4 b = getLeakyreluAlphaAtOutCoords();
          ${s}
        }`:p=`vec4 activation(vec4 x) {
          ${s}
        }`,m="result = activation(result);");const g=e?"result += getBiasAtOutCoords();":"";e&&this.variableNames.push("bias"),r&&this.variableNames.push("preluActivationWeights"),o&&this.variableNames.push("leakyreluAlpha"),this.userCode=`
      ${p}

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

        ${f}

        vec4 result = dotProd - vec4(0.000000000000001);
        ${g}
        ${m}
        setOutput(result);
      }
    `}}function MU(n){const{inputs:t,backend:e,attrs:s}=n,{x:r,filter:o}=t,{strides:i,pad:a,dilations:l,dimRoundingMode:c}=s;let u=l;u==null&&(u=[1,1]),S(Te(i,u),()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${i} and dilations '${u}'`);const h=Ce(r.shape,o.shape,i,u,a,c,!0);let d;W().getBool("WEBGL_PACK_DEPTHWISECONV")&&h.strideWidth<=2&&h.outChannels/h.inChannels===1?d=new Yv(h):d=new Kv(h);const f=[[h.padInfo.top,h.padInfo.left],[h.strideHeight,h.strideWidth],[h.dilationHeight,h.dilationWidth],[h.inHeight,h.inWidth]];return e.runWebGLProgram(d,[r,o],"float32",f)}const LU={kernelName:Ic,backendName:"webgl",kernelFunc:MU};class PU{constructor(t){this.variableNames=["x","dy"],this.outputShape=t.filterShape;const e=t.strideHeight,s=t.strideWidth,r=t.padInfo.top,o=t.padInfo.left,i=t.outChannels/t.inChannels;this.userCode=`
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
            int xR = wR + yR * ${e} - ${r};

            if (xR < 0 || xR >= ${t.inHeight}) {
              continue;
            }

            for (int yC = 0; yC < ${t.outWidth}; yC++) {
              int xC = wC + yC * ${s} - ${o};

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
    `}}class zU{constructor(t){this.variableNames=["dy","W"],this.outputShape=t.inShape;const e=t.filterHeight,s=t.filterWidth,r=t.strideHeight,o=t.strideWidth,i=e-1-t.padInfo.top,a=s-1-t.padInfo.left,l=t.outChannels/t.inChannels;this.userCode=`
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
          float dyR = float(dyRCorner + wR) / ${r}.0;

          if (dyR < 0.0 || dyR >= ${t.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = ${e} - 1 - wR;

          for (int wC = 0; wC < ${s}; wC++) {
            float dyC = float(dyCCorner + wC) / ${o}.0;

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
    `}}function BU(n){const{inputs:t,backend:e,attrs:s}=n,{x:r,dy:o}=t,{strides:i,dilations:a,pad:l,dimRoundingMode:c,filterShape:u}=s,h=Ce(r.shape,u,i,a,l,c,!0),d=new PU(h);return e.runWebGLProgram(d,[r,o],"float32")}const VU={kernelName:Md,backendName:"webgl",kernelFunc:BU};function WU(n){const{inputs:t,backend:e,attrs:s}=n,{dy:r,filter:o}=t,{strides:i,dilations:a,pad:l,dimRoundingMode:c,inputShape:u}=s,h=Ce(u,o.shape,i,a,l,c,!0),d=new zU(h);return e.runWebGLProgram(d,[r,o],"float32")}const UU={kernelName:Ld,backendName:"webgl",kernelFunc:WU};class GU{constructor(t){this.variableNames=["X"],this.outputShape=[t,t],this.userCode=`
      void main() {
          ivec2 coords = getOutputCoords();
          float val = coords[0] == coords[1] ? getX(coords[0]) : 0.0;
          setOutput(val);
      }
    `}}function HU(n){const{inputs:t,backend:e}=n,{x:s}=t,r=[...s.shape,...s.shape],o=q(s.shape),i=et({inputs:{x:s},backend:e,attrs:{shape:[o]}}),a=new GU(o),l=e.runWebGLProgram(a,[i],i.dtype),c=et({inputs:{x:l},backend:e,attrs:{shape:r}});return e.disposeIntermediateTensorInfo(i),e.disposeIntermediateTensorInfo(l),c}const qU={kernelName:Ox,backendName:"webgl",kernelFunc:HU};class jU{constructor(t){this.variableNames=["x","W"],this.outputShape=t.outShape;const{inHeight:e,inWidth:s,padInfo:r,strideHeight:o,strideWidth:i,filterHeight:a,filterWidth:l,dilationHeight:c,dilationWidth:u}=t,{top:h,left:d}=r;this.userCode=`
      const ivec2 strides = ivec2(${o}, ${i});
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
    `}}function XU(n){const{inputs:t,backend:e,attrs:s}=n,{x:r,filter:o}=t,{strides:i,pad:a,dilations:l}=s,c=ya(r.shape,o.shape,i,a,"NHWC",l);let u;const h=new jU(c);u=e.runWebGLProgram(h,[r,o],"float32");const d=et({inputs:{x:u},backend:e,attrs:{shape:c.outShape}});return e.disposeIntermediateTensorInfo(u),d}const KU={kernelName:kc,backendName:"webgl",kernelFunc:XU};function YU(n){const{inputs:t,backend:e,attrs:s}=n,{equation:r}=s,o=t,{allDims:i,summedDims:a,idDims:l}=ap(r,o.length);cp(i.length,l,o);const{path:c,steps:u}=up(a,l),h=u.length;let d=null,f=i.length;const p=[];for(let m=0;m<h;++m){for(const g of u[m]){const{permutationIndices:x,expandDims:b}=lp(f,l[g]);let w;hp(x)?w=o[g]:(w=Me({inputs:{x:o[g]},backend:e,attrs:{perm:x}}),p.push(w));const y=w.shape.slice();for(let v=0;v<b.length;++v)y.splice(b[v],0,1);Mt(w.shape,y)||(w=et({inputs:{x:w},backend:e,attrs:{shape:y}}),p.push(w)),d===null?d=w:(d=Zp({inputs:{a:w,b:d},backend:e}),p.push(d))}m<h-1&&(c[m]>=0&&(d=zu({inputs:{x:d},backend:e,attrs:{axis:c[m]-(i.length-f),keepDims:!1}}),p.push(d)),f--)}for(const m of p)m!==d&&e.disposeIntermediateTensorInfo(m);return d}const ZU={kernelName:Pd,backendName:"webgl",kernelFunc:YU};const JU="return (x >= 0.0) ? x : (exp(x) - 1.0);",QU=`
  vec4 result;

  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);
  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);
  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);
  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);

  return result;
`,tG=Rt({opSnippet:JU,packedOpSnippet:QU}),eG={kernelName:Li,backendName:"webgl",kernelFunc:tG};const nG="return (b >= 0.0) ? a : a * (b + 1.0);",sG=`
  vec4 bGTEZero = vec4(greaterThanEqual(b, vec4(0.)));
  return (bGTEZero * a) + ((vec4(1.0) - bGTEZero) * (a * (b + vec4(1.0))));
`,rG=n=>{const{inputs:t,backend:e}=n,{dy:s,y:r}=t,o=W().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Oo(sG,s.shape,r.shape):new Rr(nG,s.shape,r.shape);return e.runWebGLProgram(o,[s,r],s.dtype)},oG={kernelName:zd,backendName:"webgl",kernelFunc:rG};const iG=`
  return vec4(equal(a, b));
`,aG="return float(a == b);",lG=Ie({opSnippet:aG,packedOpSnippet:iG,dtype:"bool",cpuKernelImpl:BB}),cG={kernelName:Sc,backendName:"webgl",kernelFunc:lG};const uG=`
  // Error function is calculated approximately with elementary function.
  // See "Handbook of Mathematical Functions with Formulas,
  // Graphs, and Mathematical Tables", Abramowitz and Stegun.
  float p = ${tp};
  float a1 = ${ep};
  float a2 = ${np};
  float a3 = ${sp};
  float a4 = ${rp};
  float a5 = ${op};

  float sign = sign(x);
  x = abs(x);
  float t = 1.0 / (1.0 + p * x);
  return sign * (1.0 - (((((a5*t + a4)*t) + a3)*t + a2)*t + a1)*t*exp(-x*x));
`,hG=Rt({opSnippet:uG}),dG={kernelName:Pi,backendName:"webgl",kernelFunc:hG};const fG=Mo+`
  return exp(x);
`,pG=`
  vec4 result = exp(x);
  bvec4 isNaN = isnan(x);
  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,Zv=Rt({opSnippet:fG,packedOpSnippet:pG,cpuKernelImpl:VB,dtype:"float32"}),mG={kernelName:zi,backendName:"webgl",kernelFunc:Zv};function ed(n){const{inputs:t,attrs:e,backend:s}=n,{dim:r}=e,{input:o}=t,i=o.shape.length,a=o.shape.slice();let l=r;return r<0&&(S(-(i+1)<=r,()=>`Axis must be in the interval [${-(i+1)}, ${i}]`),l=i+r+1),a.splice(l,0,1),et({inputs:{x:o},backend:s,attrs:{shape:a}})}const gG={kernelName:Nc,backendName:"webgl",kernelFunc:ed};const Xg="return exp(x) - 1.0;",xG=Rt({opSnippet:Xg,packedOpSnippet:Xg,cpuKernelImpl:WB}),bG={kernelName:Bi,backendName:"webgl",kernelFunc:xG};class Kg{constructor(t,e,s){this.variableNames=["real","imag"];const r=e[1];this.outputShape=e;const o=s?`2.0 * ${Math.PI}`:`-2.0 * ${Math.PI}`,i=s?`${r}.0`:"1.0";let a;if(t==="real")a="return real * expR - imag * expI;";else if(t==="imag")a="return real * expI + imag * expR;";else throw new Error(`FFT component must be either "real" or "imag", got ${t}.`);this.userCode=`
      const float exponentMultiplier = ${o};

      float unaryOpComplex(float real, float expR, float imag, float expI) {
        ${a}
      }

      float mulMatDFT(int batch, int index) {
        float indexRatio = float(index) / float(${r});
        float exponentMultiplierTimesIndexRatio =
            exponentMultiplier * indexRatio;

        float result = 0.0;

        for (int i = 0; i < ${r}; i++) {
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
    `}}function Jv(n,t,e){const s=e.texData.get(n.dataId),r=q(n.shape),o=n.shape[n.shape.length-1],i=r/o,a=et({inputs:{x:n},backend:e,attrs:{shape:[i,o]}}),l=a.shape,c=new Kg("real",l,t),u=new Kg("imag",l,t),h=[{dataId:s.complexTensorInfos.real.dataId,dtype:s.complexTensorInfos.real.dtype,shape:l},{dataId:s.complexTensorInfos.imag.dataId,dtype:s.complexTensorInfos.imag.dtype,shape:l}],d=e.runWebGLProgram(c,h,"float32"),f=e.runWebGLProgram(u,h,"float32"),p=er({inputs:{real:d,imag:f},backend:e});e.disposeIntermediateTensorInfo(d),e.disposeIntermediateTensorInfo(f);const m=et({inputs:{x:p},backend:e,attrs:{shape:n.shape}});return e.disposeIntermediateTensorInfo(a),e.disposeIntermediateTensorInfo(p),m}function yG(n){const{inputs:t,backend:e}=n,{input:s}=t;return Jv(s,!1,e)}const wG={kernelName:Bd,backendName:"webgl",kernelFunc:yG};class vG{constructor(t,e){this.outputShape=[],this.customUniforms=[{name:"value",type:"float"}],this.variableNames=["x"],this.outputShape=t,this.userCode=`
      void main() {
        // Input can be obtained from uniform value.
        setOutput(value);
      }
    `}}function Ba(n){const{backend:t,attrs:e}=n,{shape:s,value:r}=e;let{dtype:o}=e;if(o=o||Co(r),o==="string"){const i=Qt(o,q(s));return i.fill(r),t.makeTensorInfo(s,o,i)}else{const i=new vG(s,r),a=[[r]];return t.runWebGLProgram(i,[],o,a)}}const CG={kernelName:Vd,backendName:"webgl",kernelFunc:Ba};class $G{constructor(t){this.variableNames=["Image"],this.outputShape=[];const e=t[2];this.outputShape=t,this.userCode=`
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
    `}}const IG={kernelName:Wd,backendName:"webgl",kernelFunc:({inputs:n,backend:t})=>{const{image:e}=n,s=t,r=new $G(e.shape);return s.runWebGLProgram(r,[e],e.dtype)}};const Yg="return floor(x);",kG=Rt({opSnippet:Yg,packedOpSnippet:Yg,cpuKernelImpl:UB}),SG={kernelName:Vi,backendName:"webgl",kernelFunc:kG};const NG=`
  float s = sign(a) * sign(b);
  int ia = round(a);
  int ib = round(b);
  if (ib != 0) {
    // Windows (D3D) wants guaranteed non-zero int division at compile-time.
    return float(idiv(ia, ib, s));
  } else {
    return NAN;
  }
`,TG=`
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
`,EG=Ie({opSnippet:NG,packedOpSnippet:TG,dtype:"int32"}),RG={kernelName:Wi,backendName:"webgl",kernelFunc:EG};class AG{constructor(t){this.variableNames=["A"];const e=Le(),[s,r]=t;this.outputShape=t,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];
        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${r}.0, ${s}.0);

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
    `}}class DG{constructor(t){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0;const e=Le(),[s,r]=t;this.outputShape=t,this.userCode=`
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
                       vec2(${r}.0, ${s}.0);
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
    `}}const _G={kernelName:T$,backendName:"webgl",kernelFunc:FG};let Xr,mh=W().getBool("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU");function FG(n){const{inputs:t,backend:e,attrs:s}=n;let{pixels:r}=t;const{numChannels:o}=s,i=typeof HTMLVideoElement<"u"&&r instanceof HTMLVideoElement,a=typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement,[l,c]=i?[r.videoWidth,r.videoHeight]:[r.width,r.height],u=[c,l],h=[c,l,o];if(a||i){const m=W().getBool("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU");(Xr==null||m!==mh)&&(mh=m,Xr=document.createElement("canvas").getContext("2d",{willReadFrequently:mh})),Xr.canvas.width=l,Xr.canvas.height=c,Xr.drawImage(r,0,0,l,c),r=Xr.canvas}const d=e.makeTensorInfo(u,"int32");e.texData.get(d.dataId).usage=on.PIXELS,e.gpgpu.uploadPixelDataToTexture(e.getTexture(d.dataId),r);const f=W().getBool("WEBGL_PACK")?new DG(h):new AG(h),p=e.runWebGLProgram(f,[d],"int32");return e.disposeData(d.dataId),p}function OG(n){const{inputs:t,backend:e,attrs:s}=n,{x:r,filter:o,bias:i,preluActivationWeights:a}=t,{strides:l,pad:c,dataFormat:u,dilations:h,dimRoundingMode:d,activation:f,leakyreluAlpha:p}=s,m=Ns(u),g=Ce(r.shape,o.shape,l,h,c,d,!1,m);let x;const b=[],w=i!=null,y=a!=null,v=f==="leakyrelu",$=()=>{const T=[r,o],I=(k,C)=>{if(C==="NCHW"&&k.shape.length===1&&k.shape[0]!==1){const R=et({inputs:{x:k},backend:e,attrs:{shape:[k.shape[0],1,1]}});return b.push(R),R}return k};if(w&&T.push(I(i,u)),y&&T.push(I(a,u)),v){const k=e.makeTensorInfo([],"float32",qs(p,"float32"));T.push(k),b.push(k)}return T};if(g.filterHeight===1&&g.filterWidth===1&&g.dilationHeight===1&&g.dilationWidth===1&&g.strideHeight===1&&g.strideWidth===1&&(g.padInfo.type==="SAME"||g.padInfo.type==="VALID"))x=qv({x:r,filter:o,convInfo:g,backend:e,bias:i,activation:f,preluActivationWeights:a,leakyreluAlpha:p});else if(g.strideWidth<=2&&m==="channelsLast"&&W().getBool("WEBGL_EXP_CONV")){const T=f?xi(f,!0):null,I=new Hv(g,w,T,y,v),k=[[g.padInfo.top,g.padInfo.left],[g.strideHeight,g.strideWidth],[g.dilationHeight,g.dilationWidth],[g.inHeight,g.inWidth]],C=$();x=e.runWebGLProgram(I,C,"float32",k)}else if(W().getBool("WEBGL_CONV_IM2COL"))x=jv({x:r,filter:o,convInfo:g,backend:e,bias:i,activation:f,preluActivationWeights:a,leakyreluAlpha:p});else{const T=f?xi(f,!1):null,I=new Gv(g,w,T,y,v),k=$();x=e.runWebGLProgram(I,k,"float32")}const N=et({inputs:{x},backend:e,attrs:{shape:g.outShape}});return b.push(x),b.forEach(T=>e.disposeIntermediateTensorInfo(T)),N}const MG={kernelName:Nl,backendName:"webgl",kernelFunc:OG};function LG(n){const{inputs:t,backend:e,attrs:s}=n,{x:r,filter:o,bias:i,preluActivationWeights:a}=t,{strides:l,pad:c,dilations:u,dimRoundingMode:h,activation:d,leakyreluAlpha:f}=s,p=[];let m=u;m==null&&(m=[1,1]),S(Te(l,m),()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${l} and dilations '${m}'`);const g=Ce(r.shape,o.shape,l,m,c,h,!0),x=W().getBool("WEBGL_PACK_DEPTHWISECONV")&&g.strideWidth<=2&&g.outChannels/g.inChannels===1,b=d?xi(d,x):null,w=[r,o],y=i!=null,v=a!=null,$=d==="leakyrelu";if(y&&w.push(i),v&&w.push(a),$){const k=e.makeTensorInfo([],"float32",qs(f,"float32"));w.push(k),p.push(k)}let N;x?N=new Yv(g,y,b,v,$):N=new Kv(g,y,b,v,$);const T=[[g.padInfo.top,g.padInfo.left],[g.strideHeight,g.strideWidth],[g.dilationHeight,g.dilationWidth],[g.inHeight,g.inWidth]],I=e.runWebGLProgram(N,w,"float32",T);return p.forEach(k=>e.disposeIntermediateTensorInfo(k)),I}const PG={kernelName:t0,backendName:"webgl",kernelFunc:LG};class zG{constructor(t,e,s,r){this.sliceDim=t,this.strides=e,this.paramsShape=r,this.variableNames=["x","indices"],this.outputShape=s;const o=Wt(s.length);let i=`
    int index;`;for(let a=0;a<this.sliceDim;a++)i+=`
          index = round(getIndices(coords[0], ${a}));
          out_of_bounds = out_of_bounds || index < 0;
          out_of_bounds = out_of_bounds || index >= ${this.paramsShape[a]};
          flattenIndex += index * ${this.strides[a]};`;this.userCode=`
         void main() {
          ${o} coords = getOutputCoords();
          int flattenIndex = 0;
          bool out_of_bounds = false;

          ${i}

          setOutput(out_of_bounds ? 0.0 : getX(flattenIndex, coords[1]));
        }
      `}}function BG(n){const{inputs:t,backend:e}=n,{params:s,indices:r}=t,o=r.shape,i=o[o.length-1],a=q(s.shape),[l,c,u,h]=Uf(s,r),d=et({inputs:{x:r},backend:e,attrs:{shape:[c,i]}}),f=et({inputs:{x:s},backend:e,attrs:{shape:[q(s.shape)/u,u]}});if(e.shouldExecuteOnCPU([s,r])||s.dtype==="string"){const x=e.readSync(r.dataId),b=e.bufferSync(s),w=GB(x,b,s.dtype,c,i,u,h,s.shape,a);return e.makeTensorInfo(l,s.dtype,w.values)}const p=new zG(i,h,[c,u],s.shape),m=e.runWebGLProgram(p,[f,d],f.dtype),g=et({inputs:{x:m},backend:e,attrs:{shape:l}});return e.disposeIntermediateTensorInfo(d),e.disposeIntermediateTensorInfo(f),e.disposeIntermediateTensorInfo(m),g}const VG={kernelName:Mx,backendName:"webgl",kernelFunc:BG};class WG{constructor(t,e){this.variableNames=["A","indices"],this.outputShape=e,this.rank=e.length;const s=Wt(this.rank),r=UG(t);this.userCode=`
      void main() {
        ${s} resRC = getOutputCoords();
        int index = int(getIndices(resRC.x, resRC.z));
        float inBounds = (index >= 0) && (index < ${t[2]}) ? 1.0 : 0.0;
        setOutput(inBounds * getA(${r}));
      }
    `}}function UG(n,t){const e=["resRC.x","resRC.y","resRC.z","resRC.w"],s=[];for(let r=0;r<n.length;r++)r===2?s.push("index"):s.push(`${e[r]}`);return s.join()}function Qv(n){const{inputs:t,backend:e,attrs:s}=n,{x:r,indices:o}=t,{axis:i,batchDims:a}=s,l=It(i,r.shape)[0];if(W().get("DEBUG")){const b=e.readSync(o.dataId),w=r.shape[l];for(let y=0;y<b.length;++y){const v=b[y];S(v<=w-1&&v>=0,()=>`GatherV2: the index value ${v} is not in [0, ${w-1}]`)}}const c=fp(r,o,l,a),u=q(o.shape),h=[],d=et({inputs:{x:r},backend:e,attrs:{shape:[c.batchSize,c.outerSize,c.dimSize,c.sliceSize]}}),f=et({inputs:{x:o},backend:e,attrs:{shape:[c.batchSize,u/c.batchSize]}});h.push(d),h.push(f);const p=[c.batchSize,c.outerSize,u/c.batchSize,c.sliceSize];if(e.shouldExecuteOnCPU([r,o])||r.dtype==="string"){const b=e.bufferSync(f),w=e.bufferSync(d),y=HB(w,b,p);return h.forEach(v=>e.disposeIntermediateTensorInfo(v)),e.makeTensorInfo(c.outputShape,y.dtype,y.values)}const m=new WG(d.shape,p),g=e.runWebGLProgram(m,[d,f],d.dtype);h.push(g);const x=et({inputs:{x:g},backend:e,attrs:{shape:c.outputShape}});return h.forEach(b=>e.disposeIntermediateTensorInfo(b)),x}const GG={kernelName:Ec,backendName:"webgl",kernelFunc:Qv};const HG="return float(a > b);",qG=`
  return vec4(greaterThan(a, b));
`,jG=Ie({opSnippet:HG,packedOpSnippet:qG,cpuKernelImpl:qB,dtype:"bool"}),XG={kernelName:Rc,backendName:"webgl",kernelFunc:jG};const KG="return float(a >= b);",YG=`
  return vec4(greaterThanEqual(a, b));
`,ZG=Ie({opSnippet:KG,packedOpSnippet:YG,dtype:"bool",cpuKernelImpl:jB}),JG={kernelName:Ui,backendName:"webgl",kernelFunc:ZG};function QG(n){const{inputs:t,backend:e}=n,{input:s}=t;return Jv(s,!0,e)}const tH={kernelName:Ud,backendName:"webgl",kernelFunc:QG};const eH="return float(!isnan(x) && !isinf(x));",nH=Rt({opSnippet:eH,dtype:"bool"}),sH={kernelName:Hi,backendName:"webgl",kernelFunc:nH};const rH="return float(isinf(x));",oH=Rt({opSnippet:rH,dtype:"bool"}),iH={kernelName:qi,backendName:"webgl",kernelFunc:oH};const aH="return float(isnan(x));",lH=Rt({opSnippet:aH,dtype:"bool"}),cH={kernelName:ji,backendName:"webgl",kernelFunc:lH};const uH="return float(a < b);",hH=`
  return vec4(lessThan(a, b));
`,dH=Ie({opSnippet:uH,packedOpSnippet:hH,cpuKernelImpl:XB,dtype:"bool"}),fH={kernelName:Dc,backendName:"webgl",kernelFunc:dH};const pH="return float(a <= b);",mH=`
  return vec4(lessThanEqual(a, b));
`,gH=Ie({opSnippet:pH,packedOpSnippet:mH,cpuKernelImpl:KB,dtype:"bool"}),xH={kernelName:_c,backendName:"webgl",kernelFunc:gH};function bH(n){const{backend:t,attrs:e}=n,{start:s,stop:r,num:o}=e,i=YB(s,r,o);return t.makeTensorInfo([i.length],"float32",i)}const yH={kernelName:Lx,backendName:"webgl",kernelFunc:bH};const wH=Mo+`
  return x < 0.0 ? 0./0. : log(x);
`,vH=`
  vec4 result = log(x);
  bvec4 isNaN = isnan(x);
  result.r = isNaN.r ? x.r : (x.r < 0.0 ? 0./0. : result.r);
  result.g = isNaN.g ? x.g : (x.g < 0.0 ? 0./0. : result.g);
  result.b = isNaN.b ? x.b : (x.b < 0.0 ? 0./0. : result.b);
  result.a = isNaN.a ? x.a : (x.a < 0.0 ? 0./0. : result.a);
  return result;
`,CH=Rt({opSnippet:wH,packedOpSnippet:vH,cpuKernelImpl:ZB}),$H={kernelName:Xi,backendName:"webgl",kernelFunc:CH};const IH=Mo+`
  return log(1.0 + x);
`,kH=Rt({opSnippet:IH}),SH={kernelName:Ki,backendName:"webgl",kernelFunc:kH};const NH="return float(a >= 1.0 && b >= 1.0);",TH=`
  return vec4(
    vec4(greaterThanEqual(a, vec4(1.0))) *
    vec4(greaterThanEqual(b, vec4(1.0))));
`,EH=Ie({opSnippet:NH,packedOpSnippet:TH,dtype:"bool"}),RH={kernelName:Fc,backendName:"webgl",kernelFunc:EH};const AH="return float(!(x >= 1.0));",DH=Rt({opSnippet:AH}),_H={kernelName:Oc,backendName:"webgl",kernelFunc:DH};const FH="return float(a >= 1.0 || b >= 1.0);",OH=`
  return min(
    vec4(greaterThanEqual(a, vec4(1.0))) +
    vec4(greaterThanEqual(b, vec4(1.0))),
    vec4(1.0));
`,MH=Ie({opSnippet:FH,packedOpSnippet:OH,dtype:"bool"}),LH={kernelName:Mc,backendName:"webgl",kernelFunc:MH};class PH{constructor(t,e,s,r,o){this.variableNames=["x"],this.outputShape=[];const i=e,a=t[3]-1;this.outputShape=t;let l;const c=`float(${s}) + float(${r}) * sum`;o===.5?l=`inversesqrt(${c})`:o===1?l=`1.0/(${c})`:l=`exp(log(${c}) * float(-${o}));`,this.userCode=`
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
    `}}class zH{constructor(t,e,s,r,o){this.variableNames=["x"],this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0;const i=e,a=t[3]-1;this.outputShape=t;let l;const c=`float(${s}) + float(${r}) * sum`;o===.5?l=`inversesqrt(${c})`:o===1?l=`1.0/(${c})`:l=`exp(log(${c}) * float(-${o}));`,this.userCode=`
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
    `}}const BH=n=>{const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{depthRadius:o,bias:i,alpha:a,beta:l}=s,c=W().getBool("WEBGL_PACK_NORMALIZATION")?new zH(r.shape,o,i,a,l):new PH(r.shape,o,i,a,l);return e.runWebGLProgram(c,[r],r.dtype)},VH={kernelName:Lc,backendName:"webgl",kernelFunc:BH};class WH{constructor(t,e,s,r,o){this.variableNames=["inputImage","outputImage","dy"],this.outputShape=[],this.outputShape=t,this.depth=t[3],this.depthRadius=e,this.bias=s,this.alpha=r,this.beta=o,this.userCode=`
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

          norm = float(${r}) * norm + float(${s});

          for(int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k){
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd){
              float dyi = -2.0 * float(${r})
                * float(${o})
                * getInputImage(b, r, c, k) * getOutputImage(b, r, c, d)
                / norm;
              if (k == d) {
                dyi += pow(norm, -1.0 * ${o});
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
    `}}const UH=n=>{const{inputs:t,backend:e,attrs:s}=n,{x:r,y:o,dy:i}=t,{depthRadius:a,bias:l,alpha:c,beta:u}=s,h=new WH(r.shape,a,l,c,u);return e.runWebGLProgram(h,[r,o,i],r.dtype)},GH={kernelName:Hd,backendName:"webgl",kernelFunc:UH};function HH(n,t,e,s){const r=q(t),i=q(n.shape)/r,a=et({inputs:{x:n},attrs:{shape:[i,r]},backend:s}),l=Ur(a,n.dtype,"max",s),c=et({inputs:{x:l},attrs:{shape:e},backend:s});return s.disposeIntermediateTensorInfo(a),s.disposeIntermediateTensorInfo(l),c}function tC(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{reductionIndices:o,keepDims:i}=s,a=r.shape.length,l=It(o,r.shape);let c=l;const u=Jt(c,a),h=u!=null,d=e.shouldExecuteOnCPU([r]);let f=r;if(h){if(d){const w=e.texData.get(f.dataId).values,y=new Array(a);for(let N=0;N<y.length;N++)y[N]=r.shape[u[N]];const v=Kp(w,r.shape,r.dtype,u,y);f=e.makeTensorInfo(y,r.dtype);const $=e.texData.get(f.dataId);$.values=v}else f=Pu(r,u,e);c=ne(c.length,a)}$e("max",c,a);const[p,m]=ye(f.shape,c);let g=p;i&&(g=ae(p,l));let x;if(d){const w=e.texData.get(f.dataId).values,y=JB(w,q(m),g,r.dtype);x=e.makeTensorInfo(g,r.dtype);const v=e.texData.get(x.dataId);v.values=y}else x=HH(f,m,g,e);return h&&e.disposeIntermediateTensorInfo(f),x}const qH={kernelName:Pc,backendName:"webgl",kernelFunc:tC};const jH=Yp+`
  return max(a, b);
`,XH=`
  vec4 result = vec4(max(a, b));
  bvec4 isNaNA = isnan(a);
  bvec4 isNaNB = isnan(b);
  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);
  `+Wr+`
  return result;
`,KH=Ie({opSnippet:jH,packedOpSnippet:XH,cpuKernelImpl:QB}),YH={kernelName:Yi,backendName:"webgl",kernelFunc:KH};function ZH(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t;La(r,"maxPool");const{filterSize:o,strides:i,pad:a,dimRoundingMode:l}=s,c=1;S(Te(i,c),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${i} and dilations '${c}'`);const u=yn(r.shape,o,i,c,a,l);if(u.filterWidth===1&&u.filterHeight===1&&Mt(u.inShape,u.outShape))return en({inputs:{x:r},backend:e});const h=new bi(u,"max",!1);return e.runWebGLProgram(h,[r],r.dtype)}const JH={kernelName:zc,backendName:"webgl",kernelFunc:ZH};function QH(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{filterSize:o,strides:i,pad:a,dataFormat:l,dimRoundingMode:c}=s,u=[1,1,1],h=Ss(r.shape,o,i,u,a,c,l),d=new Jp(h,"max",!1);return e.runWebGLProgram(d,[r],r.dtype)}const tq={kernelName:Bc,backendName:"webgl",kernelFunc:QH};class eq{constructor(t){this.variableNames=["dy","maxPos"],this.outputShape=t.inShape;const e=t.strideHeight,s=t.strideWidth,r=t.dilationHeight,o=t.effectiveFilterHeight,i=t.effectiveFilterWidth,a=o-1-t.padInfo.top,l=i-1-t.padInfo.left,c=o*i-1;this.userCode=`
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
        for (int wR = 0; wR < ${o};
          wR += ${r}) {
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
    `}}class nq{constructor(t){this.variableNames=["dy","maxPos"],this.outputShape=t.inShape;const e=t.strideDepth,s=t.strideHeight,r=t.strideWidth,o=t.dilationDepth,i=t.dilationHeight,a=t.dilationWidth,l=t.effectiveFilterDepth,c=t.effectiveFilterHeight,u=t.effectiveFilterWidth,h=l-1-t.padInfo.front,d=c-1-t.padInfo.top,f=u-1-t.padInfo.left,p=l*c*u-1;this.userCode=`
      const ivec3 pads = ivec3(${h}, ${d}, ${f});

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
           wD += ${o}) {
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
              float dyC = float(dyCCorner + wC) / ${r}.0;

              if (dyC < 0.0 || dyC >= ${t.outWidth}.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);
              int maxPosValue = ${p} -
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
    `}}function sq(n){const{inputs:t,backend:e,attrs:s}=n,{dy:r,input:o}=t,i=o,{filterSize:a,strides:l,pad:c,dimRoundingMode:u}=s,h=[1,1,1],d=Ss(i.shape,a,l,h,c,u),f=new Jp(d,"max",!0),p=e.runWebGLProgram(f,[i],i.dtype),m=new nq(d),g=e.runWebGLProgram(m,[r,p],i.dtype);return e.disposeIntermediateTensorInfo(p),g}const rq={kernelName:jd,backendName:"webgl",kernelFunc:sq};function oq(n){const{inputs:t,backend:e,attrs:s}=n,{dy:r,input:o,output:i}=t,a=o;La([o,i],"maxPoolGrad");const{filterSize:l,strides:c,pad:u,dimRoundingMode:h}=s,d=yn(a.shape,l,c,1,u,h),f=!0,p=new bi(d,"max",f),m=e.runWebGLProgram(p,[a],a.dtype),g=new eq(d),x=e.runWebGLProgram(g,[r,m],a.dtype);return e.disposeIntermediateTensorInfo(m),x}const iq={kernelName:qd,backendName:"webgl",kernelFunc:oq};function aq(n,t,e,s){let r=new bi(e,"max",!1);const o=s.runWebGLProgram(r,[n],"float32");r=new bi(e,"max",!0,!0,t);const i=s.runWebGLProgram(r,[n],"float32");return[o,i]}const lq={kernelName:Px,backendName:"webgl",kernelFunc:({inputs:n,attrs:t,backend:e})=>{const{x:s}=n,{filterSize:r,strides:o,pad:i,includeBatchInIndex:a}=t,l=e;S(s.shape.length===4,()=>`Error in maxPool: input must be rank 4 but got rank ${s.shape.length}.`);const c=[1,1];S(Te(o,c),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${o} and dilations '${c}'`);const u=yn(s.shape,r,o,c,i),[h,d]=aq(s,a,u,l);return[h,d]}};function cq(n,t,e,s){const r=q(t),i=q(n.shape)/r,a=et({inputs:{x:n},attrs:{shape:[i,r]},backend:s}),l=Ur(a,"float32","mean",s),c=et({inputs:{x:l},attrs:{shape:e},backend:s});return s.disposeIntermediateTensorInfo(a),s.disposeIntermediateTensorInfo(l),c}const uq={kernelName:Vc,backendName:"webgl",kernelFunc:({inputs:n,attrs:t,backend:e})=>{const{x:s}=n,{keepDims:r,axis:o}=t,i=e,a=s.shape.length,l=It(o,s.shape);let c=l;const u=Jt(c,a),h=u!=null,d=i.shouldExecuteOnCPU([s]),f=[];let p=s;if(h){if(d){const y=i.texData.get(p.dataId).values,v=new Array(a);for(let T=0;T<v.length;T++)v[T]=s.shape[u[T]];const $=Kp(y,s.shape,s.dtype,u,v);p=i.makeTensorInfo(v,s.dtype);const N=i.texData.get(p.dataId);N.values=$}else p=Pu(s,u,i);f.push(p),c=ne(c.length,a)}$e("sum",c,a);const[m,g]=ye(p.shape,c);let x=m;r&&(x=ae(m,l));const b=cq(p,g,x,i);for(const w of f)i.disposeIntermediateTensorInfo(w);return b}};function hq(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{axis:o,keepDims:i}=s,a=r.shape.length,l=It(o,r.shape);let c=l;const u=Jt(c,a);let h=r;u!=null&&(h=Me({inputs:{x:r},backend:e,attrs:{perm:u}}),c=ne(c.length,r.shape.length)),$e("min",c,a);const[d,f]=ye(h.shape,c),p=q(f),m=et({inputs:{x:h},backend:e,attrs:{shape:[-1,p]}}),g=Ur(m,m.dtype,"min",e);let x;if(i){const b=ae(d,l);x=et({inputs:{x:g},backend:e,attrs:{shape:b}})}else x=et({inputs:{x:g},backend:e,attrs:{shape:d}});return e.disposeIntermediateTensorInfo(m),e.disposeIntermediateTensorInfo(g),u!=null&&e.disposeIntermediateTensorInfo(h),x}const dq={kernelName:Wc,backendName:"webgl",kernelFunc:hq};const fq=Yp+`
  return min(a, b);
`,pq=`
  vec4 result = vec4(min(a, b));
  bvec4 isNaNA = isnan(a);
  bvec4 isNaNB = isnan(b);
  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);
  `+Wr+`
  return result;
`,mq=Ie({opSnippet:fq,packedOpSnippet:pq,cpuKernelImpl:tV}),gq={kernelName:Zi,backendName:"webgl",kernelFunc:mq};class xq{constructor(t,e,s){this.variableNames=["x"],this.outputShape=e.map((u,h)=>u[0]+t[h]+u[1]);const r=t.length,o=Wt(r),i=e.map(u=>u[0]).join(","),a=e.map((u,h)=>u[0]+t[h]).join(","),l=["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,r),c=s==="reflect"?0:1;if(r===1){this.userCode=`
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
      ${o} start = ${o}(${i});
      ${o} end = ${o}(${a});

      void main() {
        ${o} outC = getOutputCoords();
        for (int i = 0; i < ${r}; i++) {
          if (outC[i] < start[i]) {
            outC[i] = start[i] * 2 - outC[i] - ${c};
          } else if(outC[i] >= end[i]) {
            outC[i] = (end[i] - 1) * 2 - outC[i] + ${c};
          }
        }
        ${o} coords = outC - start;
        setOutput(getX(${l}));
      }
    `}}class bq{constructor(t,e,s){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e.map((p,m)=>p[0]+t[m]+p[1]);const r=t.length,o=Wt(r),i=e.map(p=>p[0]).join(","),a=e.map((p,m)=>p[0]+t[m]).join(","),l=Fe("rc",r),c=Fe("source",r),u=`${l[r-1]} < ${this.outputShape[r-1]}`,h=r===1?"source":`vec2(${c.slice(-2).join()})`,d=s==="reflect"?0:1;let f="";if(r===1){const p=`
        ${o} source = rc;
        if (source < start) {
          source = start * 2 - source - ${d};
        } else if (source >= end) {
          source = (end - 1) * 2 - source + ${d};
        }
        source -= start;
      `;f=`
        ${o} rc = outputLoc;
        ${p}
        result[0] = getChannel(getX(${c.join()}), ${h});
        ${l[r-1]} += 1;
        if(${u}) {
          ${p}
          result[1] = getChannel(getX(${c.join()}), ${h});
        }
      `}else{const p=`
        ${o} source = rc;
        ${o} lt = ${o}(lessThan(source, start));
        ${o} gte = ${o}(greaterThanEqual(source, end));
        ${o} orig = 1 - (lt + gte);
        source = orig * source +
                lt * (start * 2 - source - ${d}) +
                gte * ((end - 1) * 2 - source + ${d});
        source -= start;
      `;f=`
        ${o} rc = outputLoc;
        ${p}
        result[0] = getChannel(getX(${c.join()}), ${h});
        ${l[r-1]} += 1;
        if(${u}) {
          ${p}
          result[1] = getChannel(getX(${c.join()}), ${h});
        }
        rc = outputLoc;
        ${l[r-2]} += 1;
        if(${l[r-2]} < ${this.outputShape[r-2]}) {
          ${p}
          result[2] = getChannel(getX(${c.join()}), ${h});
          ${l[r-1]} += 1;
          if(${u}) {
            ${p}
            result[3] = getChannel(getX(${c.join()}), ${h});
          }
        }
      `}this.userCode=`
      const ${o} start = ${o}(${i});
      const ${o} end = ${o}(${a});

      void main() {
        ${o} outputLoc = getOutputCoords();
        vec4 result = vec4(0.);
        ${f}
        setOutput(result);
      }
    `}}const yq=({inputs:n,backend:t,attrs:e})=>{const{x:s}=n,{paddings:r,mode:o}=e,i=W().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new bq(s.shape,r,o):new xq(s.shape,r,o);return t.runWebGLProgram(i,[s],s.dtype)},wq={kernelName:Uc,backendName:"webgl",kernelFunc:yq};const vq=`if (b == 0.0) return NAN;
  return mod(a, b);`,Cq=`
  vec4 result = mod(a, b);
  bvec4 isNaN = equal(b, vec4(0.0));
  `+Wr+`
  return result;
`,$q=Ie({opSnippet:vq,packedOpSnippet:Cq}),Iq={kernelName:Ji,backendName:"webgl",kernelFunc:$q};class kq{constructor(t,e,s){this.variableNames=["probs"],this.customUniforms=[{name:"seed",type:"float"}],this.outputShape=[t,s],this.userCode=`
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
    `}}const Sq=`
if (a == b) {
  return 1.0;
};
return a / b;`,Nq=`
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
`,eC=Ie({opSnippet:Sq,packedOpSnippet:Nq,checkOutOfBounds:!0}),Tq={kernelName:Mi,backendName:"webgl",kernelFunc:eC};const Zg="return a - b;",nC=Ie({opSnippet:Zg,packedOpSnippet:Zg,supportsComplex:!0,cpuKernelImpl:vV}),Eq={kernelName:pa,backendName:"webgl",kernelFunc:nC};function sC(n){const{inputs:t,backend:e,attrs:s}=n,{logits:r}=t,{dim:o}=s,i=It([o],r.shape),a=tC({inputs:{x:r},backend:e,attrs:{reductionIndices:i,keepDims:!1}}),l=ae(a.shape,i),c=et({inputs:{x:a},backend:e,attrs:{shape:l}}),u=nC({inputs:{a:r,b:c},backend:e}),h=Zv({inputs:{x:u},backend:e}),d=zu({inputs:{x:h},backend:e,attrs:{axis:i,keepDims:!1}}),f=et({inputs:{x:d},backend:e,attrs:{shape:l}}),p=eC({inputs:{a:h,b:f},backend:e});return e.disposeIntermediateTensorInfo(a),e.disposeIntermediateTensorInfo(c),e.disposeIntermediateTensorInfo(u),e.disposeIntermediateTensorInfo(h),e.disposeIntermediateTensorInfo(d),e.disposeIntermediateTensorInfo(f),p}const Rq={kernelName:au,backendName:"webgl",kernelFunc:sC};function Aq(n){const{inputs:t,backend:e,attrs:s}=n,{logits:r}=t,{numSamples:o,seed:i,normalized:a}=s,l=a?r:sC({inputs:{logits:r},backend:e,attrs:{dim:r.shape.length-1}}),c=l.shape[0],u=l.shape[1],h=new kq(c,u,o),d=[[i]],f=e.runWebGLProgram(h,[l],"int32",d);return a||e.disposeIntermediateTensorInfo(l),f}const Dq={kernelName:zx,backendName:"webgl",kernelFunc:Aq};const _q=vn+`
  return -x;
`,Fq=`
  vec4 result = -x;
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`;function Oq(n){const{inputs:t,backend:e}=n,{x:s}=t;if(e.shouldExecuteOnCPU([s])){const o=e.texData.get(s.dataId),[i,a]=nV(o.values,s.shape,s.dtype);return e.makeTensorInfo(a,s.dtype,i)}let r;return W().getBool("WEBGL_PACK_UNARY_OPERATIONS")?r=new Fs(s.shape,Fq):r=new ts(s.shape,_q),e.runWebGLProgram(r,[s],s.dtype)}const Mq={kernelName:Gc,backendName:"webgl",kernelFunc:Oq};const Lq=Lf;function Pq(n){rn("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");const{inputs:t,backend:e,attrs:s}=n,{boxes:r,scores:o}=t,{maxOutputSize:i,iouThreshold:a,scoreThreshold:l}=s,c=e.readSync(r.dataId),u=e.readSync(o.dataId),{selectedIndices:h}=Lq(c,u,i,a,l);return e.makeTensorInfo([h.length],"int32",new Int32Array(h))}const zq={kernelName:Xd,backendName:"webgl",kernelFunc:Pq};const Bq=Pf;function Vq(n){rn("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");const{inputs:t,backend:e,attrs:s}=n,{boxes:r,scores:o}=t,{maxOutputSize:i,iouThreshold:a,scoreThreshold:l,padToMaxOutputSize:c}=s,u=e.readSync(r.dataId),h=e.readSync(o.dataId),{selectedIndices:d,validOutputs:f}=Bq(u,h,i,a,l,c);return[e.makeTensorInfo([d.length],"int32",new Int32Array(d)),e.makeTensorInfo([],"int32",new Int32Array([f]))]}const Wq={kernelName:Kd,backendName:"webgl",kernelFunc:Vq};const Uq=zf;function Gq(n){rn("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");const{inputs:t,backend:e,attrs:s}=n,{boxes:r,scores:o}=t,{maxOutputSize:i,iouThreshold:a,scoreThreshold:l,softNmsSigma:c}=s,u=e.readSync(r.dataId),h=e.readSync(o.dataId),d=i,f=a,p=l,m=c,{selectedIndices:g,selectedScores:x}=Uq(u,h,d,f,p,m);return[e.makeTensorInfo([g.length],"int32",new Int32Array(g)),e.makeTensorInfo([x.length],"float32",new Float32Array(x))]}const Hq={kernelName:Yd,backendName:"webgl",kernelFunc:Gq};class qq{constructor(t,e,s,r){this.variableNames=["indices"],this.outputShape=[t,e],this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int index = round(getIndices(coords.x));
        setOutput(mix(float(${r}), float(${s}),
                      float(index == coords.y)));
      }
    `}}const jq=n=>{const{inputs:t,backend:e,attrs:s}=n,{indices:r}=t,{dtype:o,depth:i,onValue:a,offValue:l}=s,c=q(r.shape),u=new qq(c,i,a,l),h=et({inputs:{x:r},backend:e,attrs:{shape:[c]}}),d=e.runWebGLProgram(u,[h],o);e.disposeIntermediateTensorInfo(h);const f=[...r.shape,i],p=et({inputs:{x:d},backend:e,attrs:{shape:f}});return e.disposeIntermediateTensorInfo(d),p},Xq={kernelName:jc,backendName:"webgl",kernelFunc:jq};function tc(n){const{inputs:t,backend:e}=n,{x:s}=t;if(s.dtype==="complex64"){const r=za({inputs:{input:s},backend:e}),o=tc({inputs:{x:r},backend:e}),i=Bu({inputs:{input:s},backend:e}),a=tc({inputs:{x:i},backend:e}),l=er({inputs:{real:o,imag:a},backend:e});return e.disposeIntermediateTensorInfo(r),e.disposeIntermediateTensorInfo(o),e.disposeIntermediateTensorInfo(i),e.disposeIntermediateTensorInfo(a),l}else return Ba({attrs:{shape:s.shape,dtype:s.dtype,value:s.dtype==="string"?"":0},backend:e})}const Kq={kernelName:uu,backendName:"webgl",kernelFunc:tc};function rC(n){const{inputs:t,backend:e}=n,{x:s}=t;if(s.dtype==="string")throw new Error("onesLike is not supported under string dtype");if(s.dtype==="complex64"){const r=za({inputs:{input:s},backend:e}),o=rC({inputs:{x:r},backend:e}),i=Bu({inputs:{input:s},backend:e}),a=tc({inputs:{x:i},backend:e}),l=er({inputs:{real:o,imag:a},backend:e});return e.disposeIntermediateTensorInfo(r),e.disposeIntermediateTensorInfo(o),e.disposeIntermediateTensorInfo(i),e.disposeIntermediateTensorInfo(a),l}else return Ba({attrs:{shape:s.shape,dtype:s.dtype,value:1},backend:e})}const Yq={kernelName:qc,backendName:"webgl",kernelFunc:rC};function Zq(n){const{inputs:t,backend:e,attrs:s}=n,{axis:r}=s;if(t.length===1)return ed({inputs:{input:t[0]},backend:e,attrs:{dim:r}});const o=t[0].shape,i=t[0].dtype;t.forEach(u=>{xd(o,u.shape,"All tensors passed to stack must have matching shapes"),S(i===u.dtype,()=>"All tensors passed to stack must have matching dtypes")});const a=[],l=t.map(u=>{const h=ed({inputs:{input:u},backend:e,attrs:{dim:r}});return a.push(h),h}),c=Uv({inputs:l,backend:e,attrs:{axis:r}});return a.forEach(u=>e.disposeIntermediateTensorInfo(u)),c}const Jq={kernelName:Xc,backendName:"webgl",kernelFunc:Zq};class Qq{constructor(t,e,s){this.variableNames=["x"],this.customUniforms=[{name:"value",type:"float"}],this.outputShape=e.map((c,u)=>c[0]+t[u]+c[1]);const r=t.length,o=Wt(r),i=e.map(c=>c[0]).join(","),a=e.map((c,u)=>c[0]+t[u]).join(","),l=["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,r);if(r===1){this.userCode=`
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
      ${o} start = ${o}(${i});
      ${o} end = ${o}(${a});

      void main() {
        ${o} outC = getOutputCoords();
        if (any(lessThan(outC, start)) || any(greaterThanEqual(outC, end))) {
          setOutput(value);
        } else {
          ${o} coords = outC - start;
          setOutput(getX(${l}));
        }
      }
    `}}class t6{constructor(t,e,s){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"value",type:"float"}],this.outputShape=e.map((m,g)=>m[0]+t[g]+m[1]);const r=t.length,o=Wt(r),i=e.map(m=>m[0]).join(","),a=e.map((m,g)=>m[0]+t[g]).join(","),l=Fe("rc",r),c=Fe("source",r),u=`${l[r-1]} < ${this.outputShape[r-1]}`,h=r===1?"source":`vec2(${c.slice(-2).join()})`,d=[`${o} rc = outputLoc;`,`${l[r-1]} += 1;
       if(${u}) {
      `,r===1?"":`}
       rc = outputLoc;
       ${l[r-2]} += 1;
       if(${l[r-2]} < ${this.outputShape[r-2]}) {`,r===1?"":`  ${l[r-1]} += 1;
         if(${u}) {`],f=r===1?"rc < start || rc >= end":"any(lessThan(rc, start)) || any(greaterThanEqual(rc, end))";let p="";for(let m=0,g=r===1?2:4;m<g;m++)p+=`
        ${d[m]}
        if (${f}) {
          result[${m}] = float(value);
        } else {
          ${o} source = rc - start;
          result[${m}] = getChannel(getX(${c.join()}), ${h});
        }
      `;p+=r===1?"} ":"}}",this.userCode=`
      const ${o} start = ${o}(${i});
      const ${o} end = ${o}(${a});

      void main() {
        ${o} outputLoc = getOutputCoords();
        vec4 result = vec4(0.);
        ${p}
        setOutput(result);
      }
    `}}const oC=n=>{const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{paddings:o,constantValue:i}=s;if(q(r.shape)===0){const c=o.map((u,h)=>u[0]+r.shape[h]+u[1]);return Ba({backend:e,attrs:{shape:c,value:i,dtype:r.dtype}})}const a=W().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new t6(r.shape,o,i):new Qq(r.shape,o,i),l=[[i]];return e.runWebGLProgram(a,[r],r.dtype,l)},e6={kernelName:Kc,backendName:"webgl",kernelFunc:oC};const n6=`
  if(a < 0.0 && floor(b) < b){
    return NAN;
  }
  if (b == 0.0) {
    return 1.0;
  }
  return (round(mod(b, 2.0)) != 1) ?
      pow(abs(a), b) : sign(a) * pow(abs(a), b);
`,s6=`
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
  `+Wr+`
  return result;
`,r6=Ie({opSnippet:n6,packedOpSnippet:s6}),o6={kernelName:ta,backendName:"webgl",kernelFunc:r6};function i6(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{axis:o,keepDims:i}=s,a=r.shape.length,l=[],c=It(o,r.shape);let u=c;const h=Jt(u,a);let d=r;h!=null&&(d=Me({inputs:{x:r},backend:e,attrs:{perm:h}}),u=ne(u.length,a),l.push(d)),$e("prod",u,a);let f;if(e.shouldExecuteOnCPU([d])){const p=e.texData.get(d.dataId).values,{outVals:m,outShape:g,outDtype:x}=rV(d.shape,d.dtype,p,u);f=e.makeTensorInfo(g,x,m)}else{const[p,m]=ye(d.shape,u),g=q(m),x=et({inputs:{x:d},backend:e,attrs:{shape:[-1,g]}}),b=cf(r.dtype),w=Ur(x,b,"prod",e);f=et({inputs:{x:w},backend:e,attrs:{shape:p}}),l.push(x),l.push(w)}if(i){l.push(f);const p=ae(f.shape,c);f=et({inputs:{x:f},backend:e,attrs:{shape:p}})}return l.forEach(p=>e.disposeIntermediateTensorInfo(p)),f}const a6={kernelName:Zc,backendName:"webgl",kernelFunc:i6};function l6(n){const{inputs:t,backend:e,attrs:s}=n,{paramsNestedSplits:r,paramsDenseValues:o,indices:i}=t,{outputRaggedRank:a}=s,l=r.map(x=>e.readSync(x.dataId)),c=r.map(x=>x.shape),u=e.readSync(o.dataId),h=e.readSync(i.dataId),[d,f,p]=oV(l,c,u,o.shape,o.dtype,h,i.shape,a),m=d.map(x=>e.makeTensorInfo([x.length],"int32",x)),g=e.makeTensorInfo(p,o.dtype,f);return m.concat([g])}const c6={kernelName:Bx,backendName:"webgl",kernelFunc:l6};function u6(n){const{inputs:t,backend:e}=n,{starts:s,limits:r,deltas:o}=t,i=e.readSync(s.dataId),a=e.readSync(r.dataId),l=e.readSync(o.dataId),[c,u]=iV(i,s.shape,s.dtype,a,r.shape,l,o.shape),h=e.makeTensorInfo([c.length],"int32",c),d=e.makeTensorInfo([u.length],s.dtype,u);return[h,d]}const h6={kernelName:Vx,backendName:"webgl",kernelFunc:u6};function d6(n){const{inputs:t,backend:e,attrs:s}=n,{shape:r,values:o,defaultValue:i,rowPartitionTensors:a}=t,{rowPartitionTypes:l}=s,c=e.readSync(r.dataId),u=e.readSync(o.dataId),h=e.readSync(i.dataId),d=a.map(g=>e.readSync(g.dataId)),f=a.map(g=>g.shape),[p,m]=aV(c,r.shape,u,o.shape,o.dtype,h,i.shape,d,f,l);return e.makeTensorInfo(p,o.dtype,m)}const f6={kernelName:Wx,backendName:"webgl",kernelFunc:d6};const iC=n=>{const{backend:t,attrs:e}=n,{start:s,stop:r,step:o,dtype:i}=e,a=lV(s,r,o,i);return t.makeTensorInfo([a.length],i,a)},p6={kernelName:Zd,backendName:"webgl",kernelFunc:iC};const m6="return 1.0 / x;",g6=Rt({opSnippet:m6}),x6={kernelName:ea,backendName:"webgl",kernelFunc:g6};const b6=vn+`
  return (x < 0.0) ? 0.0 : x;
`,y6=`
  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,w6=Rt({opSnippet:b6,packedOpSnippet:y6}),v6={kernelName:na,backendName:"webgl",kernelFunc:w6};const C6=vn+`
  return (x < 0.0) ? 0.0 : min(6.0, x);
`,$6=`
  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,I6=Rt({opSnippet:C6,packedOpSnippet:$6}),k6={kernelName:sa,backendName:"webgl",kernelFunc:I6};class S6{constructor(t,e,s,r,o){this.variableNames=["A"],this.outputShape=[];const[i,a,l,c]=t;this.outputShape=[i,e,s,c];const u=[r&&e>1?a-1:a,r&&s>1?l-1:l],h=[r&&e>1?e-1:e,r&&s>1?s-1:s];let d;o?d="(vec2(yRC) + vec2(0.5)) * effectiveInputOverOutputRatioRC - vec2(0.5)":d="vec2(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`
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
    `}}class N6{constructor(t,e,s,r,o){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[];const[i,a,l,c]=t;this.outputShape=[i,e,s,c];const u=[r&&e>1?a-1:a,r&&s>1?l-1:l],h=[r&&e>1?e-1:e,r&&s>1?s-1:s];let d;o?d="(vec3(yRC) + vec3(0.5)) * effectiveInputOverOutputRatioRC - vec3(0.5)":d="vec3(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`
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
    `}}function T6(n){const{inputs:t,backend:e,attrs:s}=n,{images:r}=t,{alignCorners:o,halfPixelCenters:i,size:a}=s,[l,c]=a,u=W().getBool("WEBGL_PACK_IMAGE_OPERATIONS")?new N6(r.shape,l,c,o,i):new S6(r.shape,l,c,o,i);return e.runWebGLProgram(u,[r],"float32")}const E6={kernelName:tu,backendName:"webgl",kernelFunc:T6};class R6{constructor(t,e,s){this.variableNames=["dy"],this.outputShape=[],this.outputShape=e;const[,r,o]=e,[,i,a]=t,l=[s&&i>1?r-1:r,s&&a>1?o-1:o],c=[s&&i>1?i-1:i,s&&a>1?a-1:a],u=l[0]/c[0],h=l[1]/c[1],d=1/u,f=1/h,p=Math.ceil(d)*2+2,m=Math.ceil(f)*2+2;this.userCode=`
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
        const float invWidthScale = float(${f});

        const int winHeight = int(${p});
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
            int bottomDxRIndex = int(min(ceil(dxR), ${r-1}.0));
            float dxRLerp = dxR - float(topDxRIndex);
            float inverseDxRLerp = 1.0 - dxRLerp;

            float dxC = float(dyC) * widthScale;
            int leftDxCIndex = int(floor(dxC));
            int rightDxCIndex = int(min(ceil(dxC), ${o-1}.0));
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
    `}}function A6(n){const{inputs:t,backend:e,attrs:s}=n,{images:r,dy:o}=t,{alignCorners:i}=s,a=new R6(o.shape,r.shape,i);return e.runWebGLProgram(a,[o],o.dtype)}const D6={kernelName:tf,backendName:"webgl",kernelFunc:A6};class _6{constructor(t,e,s,r,o){this.variableNames=["A"],this.outputShape=[];const[i,a,l,c]=t;this.outputShape=[i,e,s,c];const u=[r&&e>1?a-1:a,r&&s>1?l-1:l],h=[r&&e>1?e-1:e,r&&s>1?s-1:s],d=r?"0.5":"0.0";let f;o?f="max((vec2(yRC) + vec2(0.5)) * effectiveInputOverOutputRatioRC, vec2(0.0))":f="vec2(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`
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
        vec2 sourceFracIndexRC = ${f};

        // Compute the coordinators of nearest neighbor point.
        ivec2 sourceNearestRC = ivec2(
          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + ${d})));
        float newValue = getA(b, sourceNearestRC.x, sourceNearestRC.y, d);

        setOutput(newValue);
      }
    `}}class F6{constructor(t,e,s,r,o){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[];const[i,a,l,c]=t;this.outputShape=[i,e,s,c];const u=[r&&e>1?a-1:a,r&&s>1?l-1:l],h=[r&&e>1?e-1:e,r&&s>1?s-1:s],d=r?"0.5":"0.0";let f;o?f="max((vec3(yRC) + vec3(0.5)) * effectiveInputOverOutputRatioRC, vec3(0.0))":f="vec3(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`
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
        vec3 sourceFracIndexRC = ${f};

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
    `}}function O6(n){const{inputs:t,backend:e,attrs:s}=n,{images:r}=t,{alignCorners:o,halfPixelCenters:i,size:a}=s,[l,c]=a,u=W().getBool("WEBGL_PACK_IMAGE_OPERATIONS")?new F6(r.shape,l,c,o,i):new _6(r.shape,l,c,o,i);return e.runWebGLProgram(u,[r],r.dtype)}const M6={kernelName:Qc,backendName:"webgl",kernelFunc:O6};class L6{constructor(t,e,s){this.variableNames=["dy"],this.outputShape=[],this.outputShape=e;const[,r,o]=e,[,i,a]=t,l=[s&&i>1?r-1:r,s&&a>1?o-1:o],c=[s&&i>1?i-1:i,s&&a>1?a-1:a],u=l[0]/c[0],h=l[1]/c[1],d=1/u,f=1/h,p=Math.ceil(d)*2+2,m=Math.ceil(f)*2+2;this.userCode=`
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
        const float invWidthScale = float(${f});

        const int winHeight = int(${p});
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
                float(int(${r}) - 1),
                ${s} ? float(round(sourceFracRow)) :
                                  float(floor(sourceFracRow))));

            int sourceNearestCol = int(min(
                float(int(${o}) - 1),
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
    `}}function P6(n){const{inputs:t,backend:e,attrs:s}=n,{images:r,dy:o}=t,{alignCorners:i}=s,a=new L6(o.shape,r.shape,i);return e.runWebGLProgram(a,[o],o.dtype)}const z6={kernelName:Qd,backendName:"webgl",kernelFunc:P6};class B6{constructor(t,e){this.variableNames=["x"];const s=t.length;if(s>4)throw new Error(`WebGL backend: Reverse of rank-${s} tensor is not yet supported`);if(this.outputShape=t,s===1){this.userCode=`
        void main() {
          int coord = getOutputCoords();
          setOutput(getX(${t[0]} - coord - 1));
        }
      `;return}const r=a=>e.indexOf(a)!==-1&&t[a]!==1?`${t[a]} - coords[${a}] - 1`:`coords[${a}]`,o=t.map((a,l)=>r(l)).join(","),i=Wt(s);this.userCode=`
      void main() {
        ${i} coords = getOutputCoords();
        setOutput(getX(${o}));
      }
    `}}class V6{constructor(t,e){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0;const s=t.length;if(s>4)throw new Error(`WebGL backend: Reverse of rank-${s} tensor is not yet supported`);this.outputShape=t;const r=Fe("rc",s),o=`${r[s-1]} + 1 < ${this.outputShape[s-1]}`,i=`${r[s-2]} + 1 < ${this.outputShape[s-2]}`,a=Wt(s);s===1?this.userCode=`
        void main(){
          int rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = getChannel(getX(${t[0]} - rc - 1),
            ${t[0]} - rc - 1);
          if(${o}){
              result.g = getChannel(getX(${t[0]} - (rc  + 1) - 1),
                ${t[0]} - (rc  + 1) - 1);
          }
          setOutput(result);
        }
      `:this.userCode=`
        void main() {
          ${a} rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = ${l(r.slice())};
          if(${o}){
            result.g = ${c(r.slice())};
          }
          if(${i}) {
            result.b = ${u(r.slice())};
            if(${o}) {
              result.a = ${h(r.slice())};
            }
          }
          setOutput(result);
        }
    `;function l(p){return d(p)}function c(p){return p[s-1]="("+p[s-1]+" + 1)",d(p)}function u(p){return p[s-2]="("+p[s-2]+" + 1)",d(p)}function h(p){return p[s-1]="("+p[s-1]+" + 1)",p[s-2]="("+p[s-2]+" + 1)",d(p)}function d(p){const m=t.map((b,w)=>f(w,p)),g=m.join(","),x=m.slice(-2).join(",");return`getChannel(getX(${g}), vec2(${x}))`}function f(p,m){return e.indexOf(p)!==-1&&t[p]!==1?`${t[p]} - ${m[p]} - 1`:`${m[p]}`}}}function W6(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{dims:o}=s,i=r.shape.length,a=It(o,r.shape);if(i===0)return en({inputs:{x:r},backend:e});const l=W().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new V6(r.shape,a):new B6(r.shape,a);return e.runWebGLProgram(l,[r],r.dtype)}const U6={kernelName:eu,backendName:"webgl",kernelFunc:W6};class G6{constructor(t,e){this.variableNames=["Image"],this.outputShape=[],this.customUniforms=[{name:"params",type:"vec4"}];const s=t[1],r=t[2];this.outputShape=t;let o="";typeof e=="number"?o=`float outputValue = ${e.toFixed(2)};`:o=`
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
          ${o}
          if(coordX >= 0 && coordX < ${r} && coordY >= 0 && coordY < ${s}) {
            outputValue = getImage(coords[0], coordY, coordX, coords[3]);
          }
          setOutput(outputValue);
        }
    `}}const H6={kernelName:lf,backendName:"webgl",kernelFunc:({inputs:n,attrs:t,backend:e})=>{const{image:s}=n,{radians:r,fillValue:o,center:i}=t,a=e,l=new G6(s.shape,o),[c,u]=Zf(i,s.shape[1],s.shape[2]),h=[[c,u,Math.sin(r),Math.cos(r)]];return a.runWebGLProgram(l,[s],s.dtype,h)}};const q6=`
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
`,j6=Rt({opSnippet:q6}),X6={kernelName:ra,backendName:"webgl",kernelFunc:j6};const K6="return inversesqrt(x);",Y6=Rt({opSnippet:K6,cpuKernelImpl:cV}),Z6={kernelName:oa,backendName:"webgl",kernelFunc:Y6};class Qp{constructor(t,e,s,r,o,i,a=!0,l=!1){this.variableNames=["updates","indices","defaultValue"],this.outputShape=i;const c=Wt(o.length),u=Wt(i.length);let h="";s===1?h="i":s===2&&(h="i, j");const d=`getIndices(${h})`;let f="";r===1?f="i":r===2&&(f="i, coords[1]");const p=`getUpdates(${f})`;let m="";l&&(m="coords[0], coords[1]");const g=`getDefaultValue(${m})`,x=e>1?"strides[j]":"strides";this.userCode=`
        ${c} strides = ${c}(${o});

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
              sum += ${p};
              found = true;
            }
          }
          setOutput(mix(${g}, sum, float(found)));
        }
      `}}class J6{constructor(t,e,s,r,o,i,a=!0,l=!1){this.variableNames=["updates","indices","defaultValue"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=i;const c=Wt(o.length),u=Wt(i.length);let h="";s===1?h="i":s===2&&(h="i, j");const d=`getIndices(${h})`;let f="";r===1?f="i":r===2&&(f="i, coords[1]");const p=`getUpdates(${f})`;let m="";l&&(m="coords[0], coords[1]");const g=`getDefaultValue(${m})`,x=e>1?"strides[j]":"strides",b=e>1?"strides[j + 1]":"strides";this.userCode=`
        ${c} strides = ${c}(${o});

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
              vec4 updVals = ${p};
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
      `}}function Q6(n){const{inputs:t,backend:e,attrs:s}=n,{indices:r,updates:o}=t,{shape:i}=s,{sliceRank:a,numUpdates:l,sliceSize:c,strides:u,outputSize:h}=Lr(o,r,i),d=[h/c,c];if(h===0)return e.makeTensorInfo(i,r.dtype);const f=et({inputs:{x:r},backend:e,attrs:{shape:[l,a]}}),p=et({inputs:{x:o},backend:e,attrs:{shape:[l,c]}}),m=e.makeTensorInfo([],"float32",new Float32Array([0]));let g;W().getBool("WEBGL_PACK")?g=new J6(l,a,f.shape.length,p.shape.length,u,d):g=new Qp(l,a,f.shape.length,p.shape.length,u,d);const x=e.runWebGLProgram(g,[p,f,m],p.dtype),b=et({inputs:{x},backend:e,attrs:{shape:i}});return e.disposeIntermediateTensorInfo(f),e.disposeIntermediateTensorInfo(p),e.disposeIntermediateTensorInfo(x),e.disposeIntermediateTensorInfo(m),b}const tj={kernelName:Ux,backendName:"webgl",kernelFunc:Q6};class ej{constructor(t,e,s,r){this.variableNames=["sortedSequence","values"],this.customUniforms=[{name:"numInputs",type:"int"}],this.outputShape=[t,s];const o="while (left < right) {",i=`for (int i = 0; i < ${Math.ceil(Math.log2(e+1))}; ++i) { if (left >= right) break;`,a=W().getNumber("WEBGL_VERSION")===2?o:i,l=r==="left"?"<":"<=";this.userCode=`
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
     `}}function nj(n){const{inputs:t,backend:e,attrs:s}=n,{sortedSequence:r,values:o}=t,{side:i}=s,a=new ej(r.shape[0],r.shape[1],o.shape[1],i),l=[[r.shape[1]]];return e.runWebGLProgram(a,[r,o],"int32",l)}const sj={kernelName:Hx,backendName:"webgl",kernelFunc:nj};class rj{constructor(t,e,s){this.variableNames=["c","a","b"],this.outputShape=e;let r,o;if(s>4)throw Error(`Where for rank ${s} is not yet supported`);if(s===1)o="resRC",r="resRC";else{const a=["resRC.x","resRC.y","resRC.z","resRC.w"],l=[],c=[];for(let u=0;u<e.length;u++)c.push(`${a[u]}`),u<t&&l.push(`${a[u]}`);r=l.join(),o=c.join()}const i=Wt(s);this.userCode=`
      void main() {
        ${i} resRC = getOutputCoords();
        float cVal = getC(${r});
        if (cVal >= 1.0) {
          setOutput(getA(${o}));
        } else {
          setOutput(getB(${o}));
        }
      }
    `}}function oj(n){const{inputs:t,backend:e}=n,{condition:s,t:r,e:o}=t,i=new rj(s.shape.length,r.shape,r.shape.length);return e.runWebGLProgram(i,[s,r,o],Qe(r.dtype,o.dtype))}const ij={kernelName:nu,backendName:"webgl",kernelFunc:oj};const aj=`
  // Stable and Attracting Fixed Point (0, 1) for Normalized Weights.
  // see: https://arxiv.org/abs/1706.02515
  float scaleAlpha = ${Cu};
  float scale = ${$u};
  return (x >= 0.0) ? scale * x : scaleAlpha * (exp(x) - 1.0);
`,lj=Rt({opSnippet:aj}),cj={kernelName:ia,backendName:"webgl",kernelFunc:lj};const uj=Mo+`
  return 1.0 / (1.0 + exp(-1.0 * x));
`,hj=`
  vec4 result = 1.0 / (1.0 + exp(-1.0 * x));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,dj=Rt({opSnippet:uj,packedOpSnippet:hj,cpuKernelImpl:hV}),fj={kernelName:ua,backendName:"webgl",kernelFunc:dj};const pj=`
  if (isnan(x)) { return 0.0; }
  return sign(x);
`,mj=Rt({opSnippet:pj}),gj={kernelName:ca,backendName:"webgl",kernelFunc:mj};const xj=Mo+`
  return sin(x);
`,bj=`
  vec4 result = sin(x);
  bvec4 isNaN = isnan(x);
  ${Wr}
  return result;
`,yj=Rt({opSnippet:xj,packedOpSnippet:bj}),wj={kernelName:aa,backendName:"webgl",kernelFunc:yj};const vj=`
  float e2x = exp(x);
  return (e2x - 1.0 / e2x) / 2.0;
`,Cj=Rt({opSnippet:vj}),$j={kernelName:la,backendName:"webgl",kernelFunc:Cj};const Ij=`
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
`,kj=Rt({opSnippet:Ij}),Sj={kernelName:ha,backendName:"webgl",kernelFunc:kj};const Nj=n=>{const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{blockShape:o,paddings:i}=s;S(r.shape.length<=4,()=>"spaceToBatchND for rank > 4 with a WebGL backend not implemented yet");const a=o.reduce((x,b)=>x*b),l=[[0,0]];l.push(...i);for(let x=1+o.length;x<r.shape.length;++x)l.push([0,0]);const c=[],u=oC({inputs:{x:r},backend:e,attrs:{paddings:l,constantValue:0}}),h=Ia(u.shape,o,a,!1),d=ka(h.length,o.length,!1),f=Sa(u.shape,o,a,!1),p=et({inputs:{x:u},backend:e,attrs:{shape:h}}),m=Me({inputs:{x:p},backend:e,attrs:{perm:d}}),g=et({inputs:{x:m},backend:e,attrs:{shape:f}});return c.push(u),c.push(p),c.push(m),c.forEach(x=>e.disposeIntermediateTensorInfo(x)),g},Tj={kernelName:ou,backendName:"webgl",kernelFunc:Nj};function Ej(n){const{inputs:t,backend:e}=n,{indices:s,values:r,denseShape:o,defaultValue:i}=t;if(o.shape.length!==1)throw new Error(`Dense shape must be a vector, saw:
         ${o.shape}`);if(s.shape.length!==2)throw new Error(`Indices must be a matrix, saw:
         ${s.shape}`);if(r.shape.length!==1)throw new Error(`Values must be a vector, saw:
         ${r.shape}`);if(i.shape.length!==0)throw new Error(`Default value must be a scalar, saw:
        ${i.shape}`);const a=e.readSync(s.dataId),l=e.readSync(r.dataId),c=e.readSync(o.dataId),u=e.readSync(i.dataId)[0],[h,d,f,p,m]=fV(a,s.shape,s.dtype,l,r.dtype,c,u);return[e.makeTensorInfo(d,s.dtype,h),e.makeTensorInfo([d[0]],r.dtype,f),e.makeTensorInfo([p.length],"bool",new Uint8Array(p.map(g=>Number(g)))),e.makeTensorInfo([m.length],s.dtype,new Int32Array(m))]}const Rj={kernelName:qx,backendName:"webgl",kernelFunc:Ej};function Aj(n){const{inputs:t,backend:e}=n,{inputIndices:s,inputShape:r,newShape:o}=t;if(s.shape.length!==2)throw new Error(`Input indices should be a matrix but received shape ${s.shape}`);if(r.shape.length!==1)throw new Error(`Input shape should be a vector but received shape ${r.shape}`);if(o.shape.length!==1)throw new Error(`Target shape should be a vector but received shape ${o.shape}`);const i=Array.from(e.readSync(r.dataId)),a=e.readSync(s.dataId),l=Array.from(e.readSync(o.dataId)),[c,u,h]=pV(a,s.shape,s.dtype,i,l);return[e.makeTensorInfo(u,s.dtype,c),e.makeTensorInfo([h.length],o.dtype,new Int32Array(h))]}const Dj={kernelName:jx,backendName:"webgl",kernelFunc:Aj};function _j(n){const{inputs:t,backend:e}=n,{data:s,indices:r,segmentIds:o}=t;if(s.shape.length<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(r.shape.length!==1)throw new Error(`Indices should be a vector but received shape
              ${r.shape}`);if(o.shape.length!==1)throw new Error(`Segment ids should be a vector but received shape
              ${o.shape}`);const i=e.readSync(s.dataId),a=e.readSync(r.dataId),l=e.readSync(o.dataId),[c,u]=Rv(i,s.shape,s.dtype,a,l,!0);return e.makeTensorInfo(u,s.dtype,c)}const Fj={kernelName:Xx,backendName:"webgl",kernelFunc:_j};function Oj(n){const{inputs:t,backend:e}=n,{data:s,indices:r,segmentIds:o}=t;if(s.shape.length<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(r.shape.length!==1)throw new Error(`Indices should be a vector but received shape
             ${r.shape}`);if(o.shape.length!==1)throw new Error(`Segment ids should be a vector but received shape
             ${o.shape}`);const i=e.readSync(s.dataId),a=e.readSync(r.dataId),l=e.readSync(o.dataId),[c,u]=Rv(i,s.shape,s.dtype,a,l);return e.makeTensorInfo(u,s.dtype,c)}const Mj={kernelName:Kx,backendName:"webgl",kernelFunc:Oj};function Lj(n){const{inputs:t,backend:e,attrs:s}=n,{sparseIndices:r,sparseValues:o,defaultValue:i}=t,{outputShape:a}=s,{sliceRank:l,numUpdates:c,sliceSize:u,strides:h,outputSize:d}=Lr(o,r,a),f=!1;if(o.dtype==="string"){const x=e.bufferSync(r),b=e.bufferSync(o),w=zs(e.readSync(i.dataId)[0]),y=uV(x,b,a,d,u,c,l,h,w,f);return e.makeTensorInfo(a,y.dtype,y.values)}const p=new Qp(c,l,r.shape.length,o.shape.length,h,[d,1],f),m=e.runWebGLProgram(p,[o,r,i],o.dtype),g=et({inputs:{x:m},backend:e,attrs:{shape:a}});return e.disposeIntermediateTensorInfo(m),g}const Pj={kernelName:Yx,backendName:"webgl",kernelFunc:Lj};function zj(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{numOrSizeSplits:o,axis:i}=s,a=It(i,r.shape)[0],l=dp(r,o,a),c=r.shape.length,u=new Array(c).fill(0),h=r.shape.slice();return l.map(d=>{const f=[...h];f[a]=d;const p=Lo({inputs:{x:r},backend:e,attrs:{begin:u,size:f}});return u[a]+=d,p})}const Bj={kernelName:iu,backendName:"webgl",kernelFunc:zj};const Jg="return sqrt(x);",Vj=Rt({opSnippet:Jg,packedOpSnippet:Jg,cpuKernelImpl:mV}),Wj={kernelName:da,backendName:"webgl",kernelFunc:Vj};const Uj="return x * x;",Gj=Rt({opSnippet:Uj}),Hj={kernelName:ef,backendName:"webgl",kernelFunc:Gj};const Qg="return (a - b) * (a - b);",qj=Ie({opSnippet:Qg,packedOpSnippet:Qg}),jj={kernelName:fa,backendName:"webgl",kernelFunc:qj};function Xj(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t;if(r.dtype!=="string")throw new Error("Input must be of datatype string");const o=e.readSync(r.dataId),i=$s(o),a=gV(i,"string",s);return e.makeTensorInfo(r.shape,"string",a)}const Kj={kernelName:nf,backendName:"webgl",kernelFunc:Xj};function Yj({inputs:n,attrs:t,backend:e}){const{x:s}=n,r=vn+`
    return x > 0.0 ? 1.0 : float(${t.alpha});
  `,o=new ts(s.shape,r);return e.runWebGLProgram(o,[s],s.dtype)}const Zj={kernelName:ba,backendName:"webgl",kernelFunc:Yj};class Jj{constructor(t,e,s){this.variableNames=["x"],this.outputShape=s;const r=s.length,o=Wt(s.length),i=Wt(s.length);let a="";if(r===1)a="coords * strides + begin";else{let l=0;a=s.map((c,u)=>(l++,s.length===1?`coords * strides[${u}] + begin[${u}]`:`coords[${l-1}] * strides[${u}] + begin[${u}]`)).join(",")}this.userCode=`
      ${o} begin = ${o}(${t});
      ${o} strides = ${o}(${e});

      void main() {
        ${i} coords = getOutputCoords();
        setOutput(getX(${a}));
      }
    `}}function Qj(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{begin:o,end:i,strides:a,beginMask:l,endMask:c,ellipsisMask:u,newAxisMask:h,shrinkAxisMask:d}=s,{finalShapeSparse:f,finalShape:p,isIdentity:m,sliceDim0:g,isSimpleSlice:x,begin:b,end:w,strides:y}=Xf(r.shape,o,i,a,l,c,u,h,d);let v;if(m)v=et({inputs:{x:r},backend:e,attrs:{shape:p}});else if(g||x){S(r.shape.length>=1,()=>`Input must have rank at least 1, got: ${r.shape.length}`);const N=Hf(b,w,y),T=Lo({inputs:{x:r},backend:e,attrs:{begin:b,size:N}});v=et({inputs:{x:T},backend:e,attrs:{shape:p}}),e.disposeIntermediateTensorInfo(T)}else if(e.shouldExecuteOnCPU([r])){const T=e.readSync(r.dataId),I=$t(r.shape,r.dtype,T),k=xV(f,I,y,b);v=e.makeTensorInfo(p,r.dtype,k.values)}else{const T=new Jj(b,y,f);v=e.runWebGLProgram(T,[r],r.dtype)}const $=et({inputs:{x:v},backend:e,attrs:{shape:p}});return e.disposeIntermediateTensorInfo(v),$}const tX={kernelName:sf,backendName:"webgl",kernelFunc:Qj};function eX(n){const{inputs:t,backend:e,attrs:s}=n,{separator:r,nGramWidths:o,leftPad:i,rightPad:a,padWidth:l,preserveShortSequences:c}=s,{data:u,dataSplits:h}=t,d=e.readSync(u.dataId),f=e.readSync(h.dataId),[p,m]=bV(d,f,r,o,i,a,l,c);return[e.makeTensorInfo([p.length],"string",p),e.makeTensorInfo(h.shape,"int32",m)]}const nX={kernelName:Zx,backendName:"webgl",kernelFunc:eX};function sX(n){const{inputs:t,backend:e,attrs:s}=n,{skipEmpty:r}=s,{input:o,delimiter:i}=t;if(o.dtype!=="string")throw new Error("Input must be of datatype string");if(o.shape.length!==1)throw new Error(`Input must be a vector, got shape: ${o.shape}`);if(i.shape.length!==0)throw new Error(`Delimiter must be a scalar, got shape: ${i.shape}`);const a=e.readSync(o.dataId),l=e.readSync(i.dataId)[0],[c,u,h]=yV(a,l,r),d=u.length;return[e.makeTensorInfo([d,2],"int32",c),e.makeTensorInfo([d],"string",u),e.makeTensorInfo([2],"int32",new Int32Array(h))]}const rX={kernelName:Jx,backendName:"webgl",kernelFunc:sX};function oX(n){const{inputs:t,backend:e,attrs:s}=n,{numBuckets:r}=s,{input:o}=t;if(o.dtype!=="string")throw new Error("Input must be of datatype string");if(r<=0)throw new Error("Number of buckets must be at least 1");const i=e.readSync(o.dataId),a=wV(i,r);return e.makeTensorInfo(o.shape,"int32",a)}const iX={kernelName:Qx,backendName:"webgl",kernelFunc:oX};const aX="return tan(x);",lX=Rt({opSnippet:aX}),cX={kernelName:ma,backendName:"webgl",kernelFunc:lX};const uX=`
  float e2x = exp(-2.0 * abs(x));
  return sign(x) * (1.0 - e2x) / (1.0 + e2x);
`,hX=Rt({opSnippet:uX}),dX={kernelName:ga,backendName:"webgl",kernelFunc:hX};function fX(n){const{inputs:t,backend:e,attrs:s}=n,{tensor:r,indices:o,updates:i}=t,{sliceRank:a,numUpdates:l,sliceSize:c,strides:u,outputSize:h}=Lr(i,o,r.shape),d=[h/c,c];if(h===0)return e.makeTensorInfo(r.shape,o.dtype);const f=et({inputs:{x:o},backend:e,attrs:{shape:[l,a]}}),p=et({inputs:{x:i},backend:e,attrs:{shape:[l,c]}}),m=et({inputs:{x:r},backend:e,attrs:{shape:d}}),g=new Qp(l,a,f.shape.length,p.shape.length,u,d,!1,!0),x=e.runWebGLProgram(g,[p,f,m],m.dtype),b=et({inputs:{x},backend:e,attrs:{shape:r.shape}});return e.disposeIntermediateTensorInfo(f),e.disposeIntermediateTensorInfo(p),e.disposeIntermediateTensorInfo(m),e.disposeIntermediateTensorInfo(x),b}const pX={kernelName:Gx,backendName:"webgl",kernelFunc:fX};class mX{constructor(t,e){this.variableNames=["A"];const s=new Array(t.length);for(let i=0;i<s.length;i++)s[i]=t[i]*e[i];this.outputShape=s,this.rank=s.length;const r=Wt(this.rank),o=gX(t);this.userCode=`
      void main() {
        ${r} resRC = getOutputCoords();
        setOutput(getA(${o}));
      }
    `}}function gX(n){const t=n.length;if(t>5)throw Error(`Tile for rank ${t} is not yet supported`);if(t===1)return`imod(resRC, ${n[0]})`;const e=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u"],s=[];for(let r=0;r<n.length;r++)s.push(`imod(${e[r]}, ${n[r]})`);return s.join()}function aC(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{reps:o}=s;if(r.dtype==="string"||r.shape.length>5){const l=e.readSync(r.dataId),c=r.dtype==="string"?l.map(d=>zs(d)):l,u=$t(r.shape,r.dtype,c),h=CV(u,o);return e.makeTensorInfo(h.shape,h.dtype,h.values)}const i=new mX(r.shape,o);return e.runWebGLProgram(i,[r],r.dtype)}const xX={kernelName:xa,backendName:"webgl",kernelFunc:aC};class bX{constructor(t){this.variableNames=["x","indices"],this.customUniforms=[{name:"n",type:"int"},{name:"firstPass",type:"int"},{name:"negativeInf",type:"float"},{name:"dir",type:"int"},{name:"inc",type:"int"}],this.outputShape=t,this.userCode=`
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
     `}}class yX{constructor(t){this.variableNames=["x","indices"],this.customUniforms=[{name:"n",type:"int"},{name:"firstPass",type:"int"},{name:"k",type:"int"}],this.outputShape=t,this.userCode=`
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
     `}}function sr(n,t){t!==null&&n.disposeIntermediateTensorInfo(t)}function tx(n){let t=1;for(;t<n;)t*=2;return t}function wX(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{k:o,sorted:i}=s,a=W().getNumber("TOPK_LAST_DIM_CPU_HANDOFF_SIZE_THRESHOLD"),l=W().getNumber("TOPK_K_CPU_HANDOFF_THRESHOLD"),c=r.shape,u=c[c.length-1];if(e.shouldExecuteOnCPU([r])||u<a||o>l){const k=e.readSync(r.dataId),[C,R]=$V(k,c,r.dtype,o,i);return[e.makeTensorInfo(C.shape,C.dtype,C.values),e.makeTensorInfo(R.shape,R.dtype,R.values)]}if(o===0)return c[c.length-1]=0,[e.makeTensorInfo(c,r.dtype,[]),e.makeTensorInfo(c,"int32",[])];if(u===1)return[r,Ba({attrs:{shape:c,dtype:"int32",value:0},backend:e})];const h=e.texData.get(r.dataId),d=h!==null&&h.isPacked,f=d?e.unpackTensor(r):r,m=q(c)/u,g=et({inputs:{x:f},attrs:{shape:[m,u]},backend:e});d&&sr(e,f);const x=tx(o),b=tx(u);let w=null;const y=()=>w===null?[g,g]:[g,w],v=(k,C,R)=>{const D=y(),M=new bX(R),z=[[u],[w===null?1:0],[Number.NEGATIVE_INFINITY],[k],[C]],G=w;w=e.runWebGLProgram(M,D,"int32",z),sr(e,G)};for(let k=1;k<x;k*=2){const C=k*2;for(let R=k;R>=1;R/=2)v(C,R,[m,b])}for(let k=b;k>x;k/=2){const C=y(),R=new yX([m,k/2]),M=[[u],[w===null?1:0],[x]],O=w;w=e.runWebGLProgram(R,C,"int32",M),sr(e,O);const z=x/2,G=z*2;for(let V=z;V>=1;V/=2)v(G,V,w.shape)}let $=w;w=Lo({inputs:{x:w},backend:e,attrs:{begin:0,size:[m,o]}}),sr(e,$);let N=Qv({inputs:{x:g,indices:w},backend:e,attrs:{axis:1,batchDims:1}});sr(e,g);const T=c.slice(0,-1);T.push(o),$=w,w=et({inputs:{x:w},attrs:{shape:T},backend:e}),sr(e,$);const I=N;return N=et({inputs:{x:N},attrs:{shape:T},backend:e}),sr(e,I),[N,w]}const vX={kernelName:rf,backendName:"webgl",kernelFunc:wX};class CX{constructor(t,e,s,r,o,i){this.variableNames=["Image","Transforms"],this.outputShape=i;const a=s==="nearest"?1:2;let l;switch(r){case"constant":l=1;break;case"reflect":l=2;break;case"wrap":l=3;break;case"nearest":l=4;break;default:l=1;break}this.userCode=`
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
                outputValue = float(${o});
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
                outputValue = float(${o});
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
        `}}function $X(n){const{inputs:t,backend:e,attrs:s}=n,{image:r,transforms:o}=t,{interpolation:i,fillMode:a,fillValue:l,outputShape:c}=s,[u,h,d,f]=r.shape,[p,m]=c??[h,d],g=[u,p,m,f],x=new CX(h,d,i,a,l,g);return e.runWebGLProgram(x,[r,o],"float32")}const IX={kernelName:of,backendName:"webgl",kernelFunc:$X};function kX(n){const{inputs:t,attrs:e,backend:s}=n,{axis:r}=e,{x:o}=t;La(o,"unique"),console.warn("WARNING: ","UI might be locked temporarily as data is being downloaded");const i=s.readSync(o.dataId),{outputValues:a,outputShape:l,indices:c}=IV(i,r,o.shape,o.dtype);return[s.makeTensorInfo(l,o.dtype,a),s.makeTensorInfo([c.length],"int32",c)]}const SX={kernelName:af,backendName:"webgl",kernelFunc:kX};function NX(n){const{inputs:t,backend:e,attrs:s}=n,{value:r}=t;let{axis:o}=s;o<0&&(o+=r.shape.length);const i=r,a=i.shape.length,l=r.shape[o],c=new Array(a-1);let u=0;for(let m=0;m<a;m++)m!==o&&(c[u++]=i.shape[m]);const h=[],d=new Array(a).fill(0),f=i.shape.slice();f[o]=1;const p=new Array(l);for(let m=0;m<p.length;m++){d[o]=m;const g=Lo({inputs:{x:i},backend:e,attrs:{begin:d,size:f}}),x=et({inputs:{x:g},backend:e,attrs:{shape:c}});p[m]=x,h.push(g)}return h.forEach(m=>e.disposeIntermediateTensorInfo(m)),p}const TX={kernelName:lu,backendName:"webgl",kernelFunc:NX};class EX{constructor(t,e){this.variableNames=["x","segmentIds"];const s=t.windowSize,r=t.batchSize,o=t.inSize,i=t.numSegments,a=i*Math.ceil(o/s);this.outputShape=[r,a];const l="0.0",c="sumValue",u=Math.floor(s/4)*4,h=s%4,d=`
        sumValue += dot(values, segFilter);
    `;let f="";o%s>0&&(f=`
        if (inIdx < 0 || inIdx >= ${o}) {
          return initializationValue;
        }
      `);let p="";o%s>0&&(p=`
        if (inIdx < 0 || inIdx >= ${o}) {
          return -1.0;
        }
      `),this.userCode=`
      const float initializationValue = ${l};

      float getValue(int batch, int inIdx) {
        ${f}
        return getX(batch, inIdx);
      }

      float getSegmentIdAtIndex(int inIdx) {
        ${p}
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
    `}}function RX(n){const{inputs:t,backend:e,attrs:s}=n,{x:r,segmentIds:o}=t,{numSegments:i}=s,a=r.shape.length,l=[];let c=0;const u=Jt([c],a);let h=r;u!=null&&(h=Me({inputs:{x:r},backend:e,attrs:{perm:u}}),l.push(h),c=ne(1,a)[0]);const d=Wb(h.shape,c,i),f=q([h.shape[c]]),p=et({inputs:{x:h},backend:e,attrs:{shape:[-1,f]}});l.push(p);const m=cf(r.dtype),g=(y,v,$,N,T)=>{const I=y.shape[0],k=y.shape[1],C=Vb(k,T),R={windowSize:C,inSize:k,batchSize:I,numSegments:T},D=new EX(R,v),M=e.compileAndRun(D,[y,$],N);if(l.push(M),M.shape[1]===T)return M;const O=iC({backend:e,attrs:{start:0,stop:T,step:1,dtype:"float32"}}),z=aC({inputs:{x:O},backend:e,attrs:{reps:[k/C]}});return l.push(O),l.push(z),g(M,v,z,N,T)},x=g(p,"unsortedSegmentSum",o,m,i),b=et({inputs:{x},backend:e,attrs:{shape:d}});let w=b;if(u!=null){l.push(b);const y=Ks(u);w=Me({inputs:{x:w},backend:e,attrs:{perm:y}})}return l.forEach(y=>e.disposeIntermediateTensorInfo(y)),w}const AX={kernelName:cu,backendName:"webgl",kernelFunc:RX};const DX=[m4,x4,w4,$4,k4,T4,R4,D4,M4,P4,V4,G4,j4,Z4,tW,nW,rW,lW,uW,dW,gW,$W,kW,EW,AW,LW,zW,UW,JV,qW,ZW,eU,aU,uU,dU,pU,gU,wU,$U,SU,TU,RU,DU,OU,LU,VU,UU,qU,KU,ZU,eG,oG,cG,dG,mG,gG,bG,wG,CG,IG,SG,RG,_G,MG,PG,VG,GG,XG,JG,ZV,tH,KW,sH,iH,cH,t4,fH,xH,yH,$H,SH,RH,_H,LH,VH,GH,qH,YH,JH,tq,rq,iq,lq,uq,dq,gq,wq,Iq,Dq,s4,Mq,zq,Wq,Hq,_W,Xq,Yq,Jq,e6,o6,n4,a6,c6,h6,f6,p6,FW,Tq,x6,v6,k6,o4,E6,D6,M6,z6,U6,H6,X6,Z6,tj,sj,ij,cj,fj,gj,wj,$j,vW,Rq,Sj,Tj,Rj,Dj,Fj,Mj,Pj,Bj,Wj,Hj,jj,Kj,Zj,tX,nX,rX,iX,Eq,d4,cX,dX,pX,xX,vX,IX,f4,SX,TX,AX,Kq];for(const n of DX)e0(n);function _X(){let n=0,t=0;for(;n===0;)n=Math.random();for(;t===0;)t=Math.random();return Math.sqrt(-2*Math.log(n))*Math.cos(2*Math.PI*t)}function FX(n){return Array.from({length:n},_X)}function OX(n){const t=n.length,e=Array.from({length:t},()=>Array(t).fill(0));for(let s=0;s<t;s++)for(let r=0;r<=s;r++){let o=n[s][r];for(let i=0;i<r;i++)o-=e[s][i]*e[r][i];s===r?e[s][r]=Math.sqrt(o):e[s][r]=o/e[r][r]}return e}function MX(n,t){const e=n.length,s=Array(e).fill(0);for(let r=0;r<e;r++)for(let o=0;o<=r;o++)s[r]+=n[r][o]*t[o];return s}function LX(n,t){return n.map((e,s)=>e+t[s])}function lC(n,t,e=1){if(e==1){const s=n.length,r=OX(t),o=FX(s),i=MX(r,o);return LX(i,n)}else{const s=[];for(let r=0;r<e;r++){const o=lC(n,t);s.push(o)}return no(s)}}function cC(n,t,e,s){const r=new Worker(n,{type:"module"});return console.log(n),r.onmessage=o=>{const{type:i}=o.data;i==="result"?s(o.data.allSamples,o.data.guidance):i==="status"?console.log("Worker status:",o.data.message):i==="error"&&console.error("Worker error:",o.data.message)},r.postMessage({type:t,data:e}),console.log(r),r}function uC(n,t,e,s,r,o,i,a=null,l={}){return cC(n,"sample_from_initial_points",{modelJSONPath:t,trainingObjective:e,modelConfig:s,initialPoints:r,numberOfSteps:o,domainRange:a,options:l},i)}function PX(n,t,e,s,r,o,i,a=.5,l={}){return cC(n,"vector_field_grid",{modelJSONPath:t,trainingObjective:e,modelConfig:s,gridResolution:r,timeValue:a,domainRange:o,options:l},i)}new URL("./workers/sampling.worker.ts",import.meta.url).href;new URL("./workers/train.worker.ts",import.meta.url).href;function zX(n,t){const e=[],{xMin:s,xMax:r,yMin:o,yMax:i}=t;for(let a=0;a<n;a++)for(let l=0;l<n;l++){const c=s+(r-s)*(a/(n-1)),u=o+(i-o)*(l/(n-1));e.push([c,u])}return e}function BX(n){return B(()=>{const t=[0,0],e=[[1,0],[0,1]],r=2*Math.sqrt(2);let o=[],i=0;const a=10,l=Math.ceil(n*1.5);for(;o.length<n&&i<a;){i++;const u=lC(t,e,l).arraySync(),h=c$(u,r);o=o.concat(h)}return o.slice(0,n)})}async function mY(n,t){try{const o=[...(await(await fetch(n)).json()).points];for(let i=o.length-1;i>0;i--){const a=Math.floor(Math.random()*(i+1));[o[i],o[a]]=[o[a],o[i]]}return o.slice(0,t)}catch(e){return console.error("Failed to load target distribution:",e),null}}async function gY(n){try{const t=await fetch(n);if(!t.ok)return console.log("Cached trajectories file not found:",n),null;const e=await t.json();return!e||!Array.isArray(e)?(console.error("Invalid cached trajectories format from file: ",n),null):e.length>0&&e[0]?{trajectories:e,sourceDistribution:e[0]}:(console.error("Cached trajectories array is empty"),null)}catch(t){return console.log("Could not load cached trajectories:",t),null}}async function xY(n){try{const t=await fetch(n);if(!t.ok)return console.log("Cached vector field file not found:",n),null;const e=await t.json();return!e||typeof e.gridResolution!="number"||!Array.isArray(e.timeSteps)||!Array.isArray(e.velocities)?(console.error("Invalid cached vector field format"),null):e}catch(t){return console.log("Could not load cached vector field:",t),null}}async function bY(n){try{const t=await fetch(n);if(!t.ok)return console.log("Cached rectified flow file not found:",n),null;const e=await t.json();return!e||!Array.isArray(e.allRectifiedTrajectories)||typeof e.modelPath!="string"?(console.error("Invalid cached rectified flow format"),null):e}catch(t){return console.log("Could not load cached rectified flow:",t),null}}async function yY(n,t,e,s,r){const o=s.modelConfig,i=BX(t);return new Promise(a=>{uC(r,n,"Flow Matching",o,i,e,l=>{console.log("Generated samples:",l.length),a({allTimeSamples:l,sourceDistribution:l[0]})},s.domainRange)})}async function wY(n,t,e,s,r,o){const i=r.modelConfig,a=zX(t,e);return new Promise(l=>{uC(o,n,"Flow Matching",i,a,s,c=>{console.log("Generated uniform grid samples:",c.length,"timesteps"),l({allTimeSamples:c,sourceDistribution:c[0]})},e)})}async function vY(n,t,e,s,r,o){console.log("Generating vector field...");const i=r.modelConfig,a=[];for(let h=0;h<e;h++)a.push(h/(e-1));const l=[];let c=[];for(let h=0;h<a.length;h++){const d=a[h];console.log(`Sampling vector field at t=${d.toFixed(2)}...`);const f=await new Promise(p=>{const m=PX(o,n,"Flow Matching",i,t,s,g=>{p({velocities:g})},d);m.onmessage=g=>{g.data.type==="result"&&p({velocities:g.data.velocities,gridPoints:g.data.gridPoints})}});l.push(f.velocities),h===0&&f.gridPoints&&(c=f.gridPoints)}const u={gridResolution:t,timeSteps:a,domainRange:s,velocities:l,gridPoints:c};return console.log("Vector field generation complete:",l.length,"timesteps"),u}function yl(n,t){return n==null||t==null?NaN:n<t?-1:n>t?1:n>=t?0:NaN}function VX(n,t){return n==null||t==null?NaN:t<n?-1:t>n?1:t>=n?0:NaN}function hC(n){let t,e,s;n.length!==2?(t=yl,e=(a,l)=>yl(n(a),l),s=(a,l)=>n(a)-l):(t=n===yl||n===VX?n:WX,e=n,s=n);function r(a,l,c=0,u=a.length){if(c<u){if(t(l,l)!==0)return u;do{const h=c+u>>>1;e(a[h],l)<0?c=h+1:u=h}while(c<u)}return c}function o(a,l,c=0,u=a.length){if(c<u){if(t(l,l)!==0)return u;do{const h=c+u>>>1;e(a[h],l)<=0?c=h+1:u=h}while(c<u)}return c}function i(a,l,c=0,u=a.length){const h=r(a,l,c,u-1);return h>c&&s(a[h-1],l)>-s(a[h],l)?h-1:h}return{left:r,center:i,right:o}}function WX(){return 0}function UX(n){return n===null?NaN:+n}const GX=hC(yl),HX=GX.right;hC(UX).center;const qX=Math.sqrt(50),jX=Math.sqrt(10),XX=Math.sqrt(2);function ec(n,t,e){const s=(t-n)/Math.max(0,e),r=Math.floor(Math.log10(s)),o=s/Math.pow(10,r),i=o>=qX?10:o>=jX?5:o>=XX?2:1;let a,l,c;return r<0?(c=Math.pow(10,-r)/i,a=Math.round(n*c),l=Math.round(t*c),a/c<n&&++a,l/c>t&&--l,c=-c):(c=Math.pow(10,r)*i,a=Math.round(n/c),l=Math.round(t/c),a*c<n&&++a,l*c>t&&--l),l<a&&.5<=e&&e<2?ec(n,t,e*2):[a,l,c]}function KX(n,t,e){if(t=+t,n=+n,e=+e,!(e>0))return[];if(n===t)return[n];const s=t<n,[r,o,i]=s?ec(t,n,e):ec(n,t,e);if(!(o>=r))return[];const a=o-r+1,l=new Array(a);if(s)if(i<0)for(let c=0;c<a;++c)l[c]=(o-c)/-i;else for(let c=0;c<a;++c)l[c]=(o-c)*i;else if(i<0)for(let c=0;c<a;++c)l[c]=(r+c)/-i;else for(let c=0;c<a;++c)l[c]=(r+c)*i;return l}function nd(n,t,e){return t=+t,n=+n,e=+e,ec(n,t,e)[2]}function YX(n,t,e){t=+t,n=+n,e=+e;const s=t<n,r=s?nd(t,n,e):nd(n,t,e);return(s?-1:1)*(r<0?1/-r:r)}var ZX={value:()=>{}};function dC(){for(var n=0,t=arguments.length,e={},s;n<t;++n){if(!(s=arguments[n]+"")||s in e||/[\s.]/.test(s))throw new Error("illegal type: "+s);e[s]=[]}return new wl(e)}function wl(n){this._=n}function JX(n,t){return n.trim().split(/^|\s+/).map(function(e){var s="",r=e.indexOf(".");if(r>=0&&(s=e.slice(r+1),e=e.slice(0,r)),e&&!t.hasOwnProperty(e))throw new Error("unknown type: "+e);return{type:e,name:s}})}wl.prototype=dC.prototype={constructor:wl,on:function(n,t){var e=this._,s=JX(n+"",e),r,o=-1,i=s.length;if(arguments.length<2){for(;++o<i;)if((r=(n=s[o]).type)&&(r=QX(e[r],n.name)))return r;return}if(t!=null&&typeof t!="function")throw new Error("invalid callback: "+t);for(;++o<i;)if(r=(n=s[o]).type)e[r]=ex(e[r],n.name,t);else if(t==null)for(r in e)e[r]=ex(e[r],n.name,null);return this},copy:function(){var n={},t=this._;for(var e in t)n[e]=t[e].slice();return new wl(n)},call:function(n,t){if((r=arguments.length-2)>0)for(var e=new Array(r),s=0,r,o;s<r;++s)e[s]=arguments[s+2];if(!this._.hasOwnProperty(n))throw new Error("unknown type: "+n);for(o=this._[n],s=0,r=o.length;s<r;++s)o[s].value.apply(t,e)},apply:function(n,t,e){if(!this._.hasOwnProperty(n))throw new Error("unknown type: "+n);for(var s=this._[n],r=0,o=s.length;r<o;++r)s[r].value.apply(t,e)}};function QX(n,t){for(var e=0,s=n.length,r;e<s;++e)if((r=n[e]).name===t)return r.value}function ex(n,t,e){for(var s=0,r=n.length;s<r;++s)if(n[s].name===t){n[s]=ZX,n=n.slice(0,s).concat(n.slice(s+1));break}return e!=null&&n.push({name:t,value:e}),n}var sd="http://www.w3.org/1999/xhtml";const nx={svg:"http://www.w3.org/2000/svg",xhtml:sd,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function Vu(n){var t=n+="",e=t.indexOf(":");return e>=0&&(t=n.slice(0,e))!=="xmlns"&&(n=n.slice(e+1)),nx.hasOwnProperty(t)?{space:nx[t],local:n}:n}function t5(n){return function(){var t=this.ownerDocument,e=this.namespaceURI;return e===sd&&t.documentElement.namespaceURI===sd?t.createElement(n):t.createElementNS(e,n)}}function e5(n){return function(){return this.ownerDocument.createElementNS(n.space,n.local)}}function fC(n){var t=Vu(n);return(t.local?e5:t5)(t)}function n5(){}function tm(n){return n==null?n5:function(){return this.querySelector(n)}}function s5(n){typeof n!="function"&&(n=tm(n));for(var t=this._groups,e=t.length,s=new Array(e),r=0;r<e;++r)for(var o=t[r],i=o.length,a=s[r]=new Array(i),l,c,u=0;u<i;++u)(l=o[u])&&(c=n.call(l,l.__data__,u,o))&&("__data__"in l&&(c.__data__=l.__data__),a[u]=c);return new zn(s,this._parents)}function r5(n){return n==null?[]:Array.isArray(n)?n:Array.from(n)}function o5(){return[]}function pC(n){return n==null?o5:function(){return this.querySelectorAll(n)}}function i5(n){return function(){return r5(n.apply(this,arguments))}}function a5(n){typeof n=="function"?n=i5(n):n=pC(n);for(var t=this._groups,e=t.length,s=[],r=[],o=0;o<e;++o)for(var i=t[o],a=i.length,l,c=0;c<a;++c)(l=i[c])&&(s.push(n.call(l,l.__data__,c,i)),r.push(l));return new zn(s,r)}function mC(n){return function(){return this.matches(n)}}function gC(n){return function(t){return t.matches(n)}}var l5=Array.prototype.find;function c5(n){return function(){return l5.call(this.children,n)}}function u5(){return this.firstElementChild}function h5(n){return this.select(n==null?u5:c5(typeof n=="function"?n:gC(n)))}var d5=Array.prototype.filter;function f5(){return Array.from(this.children)}function p5(n){return function(){return d5.call(this.children,n)}}function m5(n){return this.selectAll(n==null?f5:p5(typeof n=="function"?n:gC(n)))}function g5(n){typeof n!="function"&&(n=mC(n));for(var t=this._groups,e=t.length,s=new Array(e),r=0;r<e;++r)for(var o=t[r],i=o.length,a=s[r]=[],l,c=0;c<i;++c)(l=o[c])&&n.call(l,l.__data__,c,o)&&a.push(l);return new zn(s,this._parents)}function xC(n){return new Array(n.length)}function x5(){return new zn(this._enter||this._groups.map(xC),this._parents)}function nc(n,t){this.ownerDocument=n.ownerDocument,this.namespaceURI=n.namespaceURI,this._next=null,this._parent=n,this.__data__=t}nc.prototype={constructor:nc,appendChild:function(n){return this._parent.insertBefore(n,this._next)},insertBefore:function(n,t){return this._parent.insertBefore(n,t)},querySelector:function(n){return this._parent.querySelector(n)},querySelectorAll:function(n){return this._parent.querySelectorAll(n)}};function b5(n){return function(){return n}}function y5(n,t,e,s,r,o){for(var i=0,a,l=t.length,c=o.length;i<c;++i)(a=t[i])?(a.__data__=o[i],s[i]=a):e[i]=new nc(n,o[i]);for(;i<l;++i)(a=t[i])&&(r[i]=a)}function w5(n,t,e,s,r,o,i){var a,l,c=new Map,u=t.length,h=o.length,d=new Array(u),f;for(a=0;a<u;++a)(l=t[a])&&(d[a]=f=i.call(l,l.__data__,a,t)+"",c.has(f)?r[a]=l:c.set(f,l));for(a=0;a<h;++a)f=i.call(n,o[a],a,o)+"",(l=c.get(f))?(s[a]=l,l.__data__=o[a],c.delete(f)):e[a]=new nc(n,o[a]);for(a=0;a<u;++a)(l=t[a])&&c.get(d[a])===l&&(r[a]=l)}function v5(n){return n.__data__}function C5(n,t){if(!arguments.length)return Array.from(this,v5);var e=t?w5:y5,s=this._parents,r=this._groups;typeof n!="function"&&(n=b5(n));for(var o=r.length,i=new Array(o),a=new Array(o),l=new Array(o),c=0;c<o;++c){var u=s[c],h=r[c],d=h.length,f=$5(n.call(u,u&&u.__data__,c,s)),p=f.length,m=a[c]=new Array(p),g=i[c]=new Array(p),x=l[c]=new Array(d);e(u,h,m,g,x,f,t);for(var b=0,w=0,y,v;b<p;++b)if(y=m[b]){for(b>=w&&(w=b+1);!(v=g[w])&&++w<p;);y._next=v||null}}return i=new zn(i,s),i._enter=a,i._exit=l,i}function $5(n){return typeof n=="object"&&"length"in n?n:Array.from(n)}function I5(){return new zn(this._exit||this._groups.map(xC),this._parents)}function k5(n,t,e){var s=this.enter(),r=this,o=this.exit();return typeof n=="function"?(s=n(s),s&&(s=s.selection())):s=s.append(n+""),t!=null&&(r=t(r),r&&(r=r.selection())),e==null?o.remove():e(o),s&&r?s.merge(r).order():r}function S5(n){for(var t=n.selection?n.selection():n,e=this._groups,s=t._groups,r=e.length,o=s.length,i=Math.min(r,o),a=new Array(r),l=0;l<i;++l)for(var c=e[l],u=s[l],h=c.length,d=a[l]=new Array(h),f,p=0;p<h;++p)(f=c[p]||u[p])&&(d[p]=f);for(;l<r;++l)a[l]=e[l];return new zn(a,this._parents)}function N5(){for(var n=this._groups,t=-1,e=n.length;++t<e;)for(var s=n[t],r=s.length-1,o=s[r],i;--r>=0;)(i=s[r])&&(o&&i.compareDocumentPosition(o)^4&&o.parentNode.insertBefore(i,o),o=i);return this}function T5(n){n||(n=E5);function t(h,d){return h&&d?n(h.__data__,d.__data__):!h-!d}for(var e=this._groups,s=e.length,r=new Array(s),o=0;o<s;++o){for(var i=e[o],a=i.length,l=r[o]=new Array(a),c,u=0;u<a;++u)(c=i[u])&&(l[u]=c);l.sort(t)}return new zn(r,this._parents).order()}function E5(n,t){return n<t?-1:n>t?1:n>=t?0:NaN}function R5(){var n=arguments[0];return arguments[0]=this,n.apply(null,arguments),this}function A5(){return Array.from(this)}function D5(){for(var n=this._groups,t=0,e=n.length;t<e;++t)for(var s=n[t],r=0,o=s.length;r<o;++r){var i=s[r];if(i)return i}return null}function _5(){let n=0;for(const t of this)++n;return n}function F5(){return!this.node()}function O5(n){for(var t=this._groups,e=0,s=t.length;e<s;++e)for(var r=t[e],o=0,i=r.length,a;o<i;++o)(a=r[o])&&n.call(a,a.__data__,o,r);return this}function M5(n){return function(){this.removeAttribute(n)}}function L5(n){return function(){this.removeAttributeNS(n.space,n.local)}}function P5(n,t){return function(){this.setAttribute(n,t)}}function z5(n,t){return function(){this.setAttributeNS(n.space,n.local,t)}}function B5(n,t){return function(){var e=t.apply(this,arguments);e==null?this.removeAttribute(n):this.setAttribute(n,e)}}function V5(n,t){return function(){var e=t.apply(this,arguments);e==null?this.removeAttributeNS(n.space,n.local):this.setAttributeNS(n.space,n.local,e)}}function W5(n,t){var e=Vu(n);if(arguments.length<2){var s=this.node();return e.local?s.getAttributeNS(e.space,e.local):s.getAttribute(e)}return this.each((t==null?e.local?L5:M5:typeof t=="function"?e.local?V5:B5:e.local?z5:P5)(e,t))}function bC(n){return n.ownerDocument&&n.ownerDocument.defaultView||n.document&&n||n.defaultView}function U5(n){return function(){this.style.removeProperty(n)}}function G5(n,t,e){return function(){this.style.setProperty(n,t,e)}}function H5(n,t,e){return function(){var s=t.apply(this,arguments);s==null?this.style.removeProperty(n):this.style.setProperty(n,s,e)}}function q5(n,t,e){return arguments.length>1?this.each((t==null?U5:typeof t=="function"?H5:G5)(n,t,e??"")):yo(this.node(),n)}function yo(n,t){return n.style.getPropertyValue(t)||bC(n).getComputedStyle(n,null).getPropertyValue(t)}function j5(n){return function(){delete this[n]}}function X5(n,t){return function(){this[n]=t}}function K5(n,t){return function(){var e=t.apply(this,arguments);e==null?delete this[n]:this[n]=e}}function Y5(n,t){return arguments.length>1?this.each((t==null?j5:typeof t=="function"?K5:X5)(n,t)):this.node()[n]}function yC(n){return n.trim().split(/^|\s+/)}function em(n){return n.classList||new wC(n)}function wC(n){this._node=n,this._names=yC(n.getAttribute("class")||"")}wC.prototype={add:function(n){var t=this._names.indexOf(n);t<0&&(this._names.push(n),this._node.setAttribute("class",this._names.join(" ")))},remove:function(n){var t=this._names.indexOf(n);t>=0&&(this._names.splice(t,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(n){return this._names.indexOf(n)>=0}};function vC(n,t){for(var e=em(n),s=-1,r=t.length;++s<r;)e.add(t[s])}function CC(n,t){for(var e=em(n),s=-1,r=t.length;++s<r;)e.remove(t[s])}function Z5(n){return function(){vC(this,n)}}function J5(n){return function(){CC(this,n)}}function Q5(n,t){return function(){(t.apply(this,arguments)?vC:CC)(this,n)}}function tK(n,t){var e=yC(n+"");if(arguments.length<2){for(var s=em(this.node()),r=-1,o=e.length;++r<o;)if(!s.contains(e[r]))return!1;return!0}return this.each((typeof t=="function"?Q5:t?Z5:J5)(e,t))}function eK(){this.textContent=""}function nK(n){return function(){this.textContent=n}}function sK(n){return function(){var t=n.apply(this,arguments);this.textContent=t??""}}function rK(n){return arguments.length?this.each(n==null?eK:(typeof n=="function"?sK:nK)(n)):this.node().textContent}function oK(){this.innerHTML=""}function iK(n){return function(){this.innerHTML=n}}function aK(n){return function(){var t=n.apply(this,arguments);this.innerHTML=t??""}}function lK(n){return arguments.length?this.each(n==null?oK:(typeof n=="function"?aK:iK)(n)):this.node().innerHTML}function cK(){this.nextSibling&&this.parentNode.appendChild(this)}function uK(){return this.each(cK)}function hK(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function dK(){return this.each(hK)}function fK(n){var t=typeof n=="function"?n:fC(n);return this.select(function(){return this.appendChild(t.apply(this,arguments))})}function pK(){return null}function mK(n,t){var e=typeof n=="function"?n:fC(n),s=t==null?pK:typeof t=="function"?t:tm(t);return this.select(function(){return this.insertBefore(e.apply(this,arguments),s.apply(this,arguments)||null)})}function gK(){var n=this.parentNode;n&&n.removeChild(this)}function xK(){return this.each(gK)}function bK(){var n=this.cloneNode(!1),t=this.parentNode;return t?t.insertBefore(n,this.nextSibling):n}function yK(){var n=this.cloneNode(!0),t=this.parentNode;return t?t.insertBefore(n,this.nextSibling):n}function wK(n){return this.select(n?yK:bK)}function vK(n){return arguments.length?this.property("__data__",n):this.node().__data__}function CK(n){return function(t){n.call(this,t,this.__data__)}}function $K(n){return n.trim().split(/^|\s+/).map(function(t){var e="",s=t.indexOf(".");return s>=0&&(e=t.slice(s+1),t=t.slice(0,s)),{type:t,name:e}})}function IK(n){return function(){var t=this.__on;if(t){for(var e=0,s=-1,r=t.length,o;e<r;++e)o=t[e],(!n.type||o.type===n.type)&&o.name===n.name?this.removeEventListener(o.type,o.listener,o.options):t[++s]=o;++s?t.length=s:delete this.__on}}}function kK(n,t,e){return function(){var s=this.__on,r,o=CK(t);if(s){for(var i=0,a=s.length;i<a;++i)if((r=s[i]).type===n.type&&r.name===n.name){this.removeEventListener(r.type,r.listener,r.options),this.addEventListener(r.type,r.listener=o,r.options=e),r.value=t;return}}this.addEventListener(n.type,o,e),r={type:n.type,name:n.name,value:t,listener:o,options:e},s?s.push(r):this.__on=[r]}}function SK(n,t,e){var s=$K(n+""),r,o=s.length,i;if(arguments.length<2){var a=this.node().__on;if(a){for(var l=0,c=a.length,u;l<c;++l)for(r=0,u=a[l];r<o;++r)if((i=s[r]).type===u.type&&i.name===u.name)return u.value}return}for(a=t?kK:IK,r=0;r<o;++r)this.each(a(s[r],t,e));return this}function $C(n,t,e){var s=bC(n),r=s.CustomEvent;typeof r=="function"?r=new r(t,e):(r=s.document.createEvent("Event"),e?(r.initEvent(t,e.bubbles,e.cancelable),r.detail=e.detail):r.initEvent(t,!1,!1)),n.dispatchEvent(r)}function NK(n,t){return function(){return $C(this,n,t)}}function TK(n,t){return function(){return $C(this,n,t.apply(this,arguments))}}function EK(n,t){return this.each((typeof t=="function"?TK:NK)(n,t))}function*RK(){for(var n=this._groups,t=0,e=n.length;t<e;++t)for(var s=n[t],r=0,o=s.length,i;r<o;++r)(i=s[r])&&(yield i)}var AK=[null];function zn(n,t){this._groups=n,this._parents=t}function Va(){return new zn([[document.documentElement]],AK)}function DK(){return this}zn.prototype=Va.prototype={constructor:zn,select:s5,selectAll:a5,selectChild:h5,selectChildren:m5,filter:g5,data:C5,enter:x5,exit:I5,join:k5,merge:S5,selection:DK,order:N5,sort:T5,call:R5,nodes:A5,node:D5,size:_5,empty:F5,each:O5,attr:W5,style:q5,property:Y5,classed:tK,text:rK,html:lK,raise:uK,lower:dK,append:fK,insert:mK,remove:xK,clone:wK,datum:vK,on:SK,dispatch:EK,[Symbol.iterator]:RK};function nm(n,t,e){n.prototype=t.prototype=e,e.constructor=n}function IC(n,t){var e=Object.create(n.prototype);for(var s in t)e[s]=t[s];return e}function Wa(){}var wi=.7,sc=1/wi,io="\\s*([+-]?\\d+)\\s*",vi="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",as="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",_K=/^#([0-9a-f]{3,8})$/,FK=new RegExp(`^rgb\\(${io},${io},${io}\\)$`),OK=new RegExp(`^rgb\\(${as},${as},${as}\\)$`),MK=new RegExp(`^rgba\\(${io},${io},${io},${vi}\\)$`),LK=new RegExp(`^rgba\\(${as},${as},${as},${vi}\\)$`),PK=new RegExp(`^hsl\\(${vi},${as},${as}\\)$`),zK=new RegExp(`^hsla\\(${vi},${as},${as},${vi}\\)$`),sx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};nm(Wa,Ar,{copy(n){return Object.assign(new this.constructor,this,n)},displayable(){return this.rgb().displayable()},hex:rx,formatHex:rx,formatHex8:BK,formatHsl:VK,formatRgb:ox,toString:ox});function rx(){return this.rgb().formatHex()}function BK(){return this.rgb().formatHex8()}function VK(){return kC(this).formatHsl()}function ox(){return this.rgb().formatRgb()}function Ar(n){var t,e;return n=(n+"").trim().toLowerCase(),(t=_K.exec(n))?(e=t[1].length,t=parseInt(t[1],16),e===6?ix(t):e===3?new Je(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):e===8?il(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):e===4?il(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=FK.exec(n))?new Je(t[1],t[2],t[3],1):(t=OK.exec(n))?new Je(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=MK.exec(n))?il(t[1],t[2],t[3],t[4]):(t=LK.exec(n))?il(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=PK.exec(n))?cx(t[1],t[2]/100,t[3]/100,1):(t=zK.exec(n))?cx(t[1],t[2]/100,t[3]/100,t[4]):sx.hasOwnProperty(n)?ix(sx[n]):n==="transparent"?new Je(NaN,NaN,NaN,0):null}function ix(n){return new Je(n>>16&255,n>>8&255,n&255,1)}function il(n,t,e,s){return s<=0&&(n=t=e=NaN),new Je(n,t,e,s)}function WK(n){return n instanceof Wa||(n=Ar(n)),n?(n=n.rgb(),new Je(n.r,n.g,n.b,n.opacity)):new Je}function rd(n,t,e,s){return arguments.length===1?WK(n):new Je(n,t,e,s??1)}function Je(n,t,e,s){this.r=+n,this.g=+t,this.b=+e,this.opacity=+s}nm(Je,rd,IC(Wa,{brighter(n){return n=n==null?sc:Math.pow(sc,n),new Je(this.r*n,this.g*n,this.b*n,this.opacity)},darker(n){return n=n==null?wi:Math.pow(wi,n),new Je(this.r*n,this.g*n,this.b*n,this.opacity)},rgb(){return this},clamp(){return new Je(mr(this.r),mr(this.g),mr(this.b),rc(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:ax,formatHex:ax,formatHex8:UK,formatRgb:lx,toString:lx}));function ax(){return`#${ur(this.r)}${ur(this.g)}${ur(this.b)}`}function UK(){return`#${ur(this.r)}${ur(this.g)}${ur(this.b)}${ur((isNaN(this.opacity)?1:this.opacity)*255)}`}function lx(){const n=rc(this.opacity);return`${n===1?"rgb(":"rgba("}${mr(this.r)}, ${mr(this.g)}, ${mr(this.b)}${n===1?")":`, ${n})`}`}function rc(n){return isNaN(n)?1:Math.max(0,Math.min(1,n))}function mr(n){return Math.max(0,Math.min(255,Math.round(n)||0))}function ur(n){return n=mr(n),(n<16?"0":"")+n.toString(16)}function cx(n,t,e,s){return s<=0?n=t=e=NaN:e<=0||e>=1?n=t=NaN:t<=0&&(n=NaN),new An(n,t,e,s)}function kC(n){if(n instanceof An)return new An(n.h,n.s,n.l,n.opacity);if(n instanceof Wa||(n=Ar(n)),!n)return new An;if(n instanceof An)return n;n=n.rgb();var t=n.r/255,e=n.g/255,s=n.b/255,r=Math.min(t,e,s),o=Math.max(t,e,s),i=NaN,a=o-r,l=(o+r)/2;return a?(t===o?i=(e-s)/a+(e<s)*6:e===o?i=(s-t)/a+2:i=(t-e)/a+4,a/=l<.5?o+r:2-o-r,i*=60):a=l>0&&l<1?0:i,new An(i,a,l,n.opacity)}function GK(n,t,e,s){return arguments.length===1?kC(n):new An(n,t,e,s??1)}function An(n,t,e,s){this.h=+n,this.s=+t,this.l=+e,this.opacity=+s}nm(An,GK,IC(Wa,{brighter(n){return n=n==null?sc:Math.pow(sc,n),new An(this.h,this.s,this.l*n,this.opacity)},darker(n){return n=n==null?wi:Math.pow(wi,n),new An(this.h,this.s,this.l*n,this.opacity)},rgb(){var n=this.h%360+(this.h<0)*360,t=isNaN(n)||isNaN(this.s)?0:this.s,e=this.l,s=e+(e<.5?e:1-e)*t,r=2*e-s;return new Je(gh(n>=240?n-240:n+120,r,s),gh(n,r,s),gh(n<120?n+240:n-120,r,s),this.opacity)},clamp(){return new An(ux(this.h),al(this.s),al(this.l),rc(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const n=rc(this.opacity);return`${n===1?"hsl(":"hsla("}${ux(this.h)}, ${al(this.s)*100}%, ${al(this.l)*100}%${n===1?")":`, ${n})`}`}}));function ux(n){return n=(n||0)%360,n<0?n+360:n}function al(n){return Math.max(0,Math.min(1,n||0))}function gh(n,t,e){return(n<60?t+(e-t)*n/60:n<180?e:n<240?t+(e-t)*(240-n)/60:t)*255}const sm=n=>()=>n;function HK(n,t){return function(e){return n+e*t}}function qK(n,t,e){return n=Math.pow(n,e),t=Math.pow(t,e)-n,e=1/e,function(s){return Math.pow(n+s*t,e)}}function jK(n){return(n=+n)==1?SC:function(t,e){return e-t?qK(t,e,n):sm(isNaN(t)?e:t)}}function SC(n,t){var e=t-n;return e?HK(n,e):sm(isNaN(n)?t:n)}const oc=(function n(t){var e=jK(t);function s(r,o){var i=e((r=rd(r)).r,(o=rd(o)).r),a=e(r.g,o.g),l=e(r.b,o.b),c=SC(r.opacity,o.opacity);return function(u){return r.r=i(u),r.g=a(u),r.b=l(u),r.opacity=c(u),r+""}}return s.gamma=n,s})(1);function XK(n,t){t||(t=[]);var e=n?Math.min(t.length,n.length):0,s=t.slice(),r;return function(o){for(r=0;r<e;++r)s[r]=n[r]*(1-o)+t[r]*o;return s}}function KK(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function YK(n,t){var e=t?t.length:0,s=n?Math.min(e,n.length):0,r=new Array(s),o=new Array(e),i;for(i=0;i<s;++i)r[i]=rm(n[i],t[i]);for(;i<e;++i)o[i]=t[i];return function(a){for(i=0;i<s;++i)o[i]=r[i](a);return o}}function ZK(n,t){var e=new Date;return n=+n,t=+t,function(s){return e.setTime(n*(1-s)+t*s),e}}function Rn(n,t){return n=+n,t=+t,function(e){return n*(1-e)+t*e}}function JK(n,t){var e={},s={},r;(n===null||typeof n!="object")&&(n={}),(t===null||typeof t!="object")&&(t={});for(r in t)r in n?e[r]=rm(n[r],t[r]):s[r]=t[r];return function(o){for(r in e)s[r]=e[r](o);return s}}var od=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,xh=new RegExp(od.source,"g");function QK(n){return function(){return n}}function t8(n){return function(t){return n(t)+""}}function NC(n,t){var e=od.lastIndex=xh.lastIndex=0,s,r,o,i=-1,a=[],l=[];for(n=n+"",t=t+"";(s=od.exec(n))&&(r=xh.exec(t));)(o=r.index)>e&&(o=t.slice(e,o),a[i]?a[i]+=o:a[++i]=o),(s=s[0])===(r=r[0])?a[i]?a[i]+=r:a[++i]=r:(a[++i]=null,l.push({i,x:Rn(s,r)})),e=xh.lastIndex;return e<t.length&&(o=t.slice(e),a[i]?a[i]+=o:a[++i]=o),a.length<2?l[0]?t8(l[0].x):QK(t):(t=l.length,function(c){for(var u=0,h;u<t;++u)a[(h=l[u]).i]=h.x(c);return a.join("")})}function rm(n,t){var e=typeof t,s;return t==null||e==="boolean"?sm(t):(e==="number"?Rn:e==="string"?(s=Ar(t))?(t=s,oc):NC:t instanceof Ar?oc:t instanceof Date?ZK:KK(t)?XK:Array.isArray(t)?YK:typeof t.valueOf!="function"&&typeof t.toString!="function"||isNaN(t)?JK:Rn)(n,t)}function e8(n,t){return n=+n,t=+t,function(e){return Math.round(n*(1-e)+t*e)}}var hx=180/Math.PI,id={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function TC(n,t,e,s,r,o){var i,a,l;return(i=Math.sqrt(n*n+t*t))&&(n/=i,t/=i),(l=n*e+t*s)&&(e-=n*l,s-=t*l),(a=Math.sqrt(e*e+s*s))&&(e/=a,s/=a,l/=a),n*s<t*e&&(n=-n,t=-t,l=-l,i=-i),{translateX:r,translateY:o,rotate:Math.atan2(t,n)*hx,skewX:Math.atan(l)*hx,scaleX:i,scaleY:a}}var ll;function n8(n){const t=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(n+"");return t.isIdentity?id:TC(t.a,t.b,t.c,t.d,t.e,t.f)}function s8(n){return n==null||(ll||(ll=document.createElementNS("http://www.w3.org/2000/svg","g")),ll.setAttribute("transform",n),!(n=ll.transform.baseVal.consolidate()))?id:(n=n.matrix,TC(n.a,n.b,n.c,n.d,n.e,n.f))}function EC(n,t,e,s){function r(c){return c.length?c.pop()+" ":""}function o(c,u,h,d,f,p){if(c!==h||u!==d){var m=f.push("translate(",null,t,null,e);p.push({i:m-4,x:Rn(c,h)},{i:m-2,x:Rn(u,d)})}else(h||d)&&f.push("translate("+h+t+d+e)}function i(c,u,h,d){c!==u?(c-u>180?u+=360:u-c>180&&(c+=360),d.push({i:h.push(r(h)+"rotate(",null,s)-2,x:Rn(c,u)})):u&&h.push(r(h)+"rotate("+u+s)}function a(c,u,h,d){c!==u?d.push({i:h.push(r(h)+"skewX(",null,s)-2,x:Rn(c,u)}):u&&h.push(r(h)+"skewX("+u+s)}function l(c,u,h,d,f,p){if(c!==h||u!==d){var m=f.push(r(f)+"scale(",null,",",null,")");p.push({i:m-4,x:Rn(c,h)},{i:m-2,x:Rn(u,d)})}else(h!==1||d!==1)&&f.push(r(f)+"scale("+h+","+d+")")}return function(c,u){var h=[],d=[];return c=n(c),u=n(u),o(c.translateX,c.translateY,u.translateX,u.translateY,h,d),i(c.rotate,u.rotate,h,d),a(c.skewX,u.skewX,h,d),l(c.scaleX,c.scaleY,u.scaleX,u.scaleY,h,d),c=u=null,function(f){for(var p=-1,m=d.length,g;++p<m;)h[(g=d[p]).i]=g.x(f);return h.join("")}}}var r8=EC(n8,"px, ","px)","deg)"),o8=EC(s8,", ",")",")"),wo=0,ei=0,Xo=0,RC=1e3,ic,ni,ac=0,Dr=0,Wu=0,Ci=typeof performance=="object"&&performance.now?performance:Date,AC=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(n){setTimeout(n,17)};function om(){return Dr||(AC(i8),Dr=Ci.now()+Wu)}function i8(){Dr=0}function lc(){this._call=this._time=this._next=null}lc.prototype=DC.prototype={constructor:lc,restart:function(n,t,e){if(typeof n!="function")throw new TypeError("callback is not a function");e=(e==null?om():+e)+(t==null?0:+t),!this._next&&ni!==this&&(ni?ni._next=this:ic=this,ni=this),this._call=n,this._time=e,ad()},stop:function(){this._call&&(this._call=null,this._time=1/0,ad())}};function DC(n,t,e){var s=new lc;return s.restart(n,t,e),s}function a8(){om(),++wo;for(var n=ic,t;n;)(t=Dr-n._time)>=0&&n._call.call(void 0,t),n=n._next;--wo}function dx(){Dr=(ac=Ci.now())+Wu,wo=ei=0;try{a8()}finally{wo=0,c8(),Dr=0}}function l8(){var n=Ci.now(),t=n-ac;t>RC&&(Wu-=t,ac=n)}function c8(){for(var n,t=ic,e,s=1/0;t;)t._call?(s>t._time&&(s=t._time),n=t,t=t._next):(e=t._next,t._next=null,t=n?n._next=e:ic=e);ni=n,ad(s)}function ad(n){if(!wo){ei&&(ei=clearTimeout(ei));var t=n-Dr;t>24?(n<1/0&&(ei=setTimeout(dx,n-Ci.now()-Wu)),Xo&&(Xo=clearInterval(Xo))):(Xo||(ac=Ci.now(),Xo=setInterval(l8,RC)),wo=1,AC(dx))}}function fx(n,t,e){var s=new lc;return t=t==null?0:+t,s.restart(r=>{s.stop(),n(r+t)},t,e),s}var u8=dC("start","end","cancel","interrupt"),h8=[],_C=0,px=1,ld=2,vl=3,mx=4,cd=5,Cl=6;function Uu(n,t,e,s,r,o){var i=n.__transition;if(!i)n.__transition={};else if(e in i)return;d8(n,e,{name:t,index:s,group:r,on:u8,tween:h8,time:o.time,delay:o.delay,duration:o.duration,ease:o.ease,timer:null,state:_C})}function im(n,t){var e=Vn(n,t);if(e.state>_C)throw new Error("too late; already scheduled");return e}function ps(n,t){var e=Vn(n,t);if(e.state>vl)throw new Error("too late; already running");return e}function Vn(n,t){var e=n.__transition;if(!e||!(e=e[t]))throw new Error("transition not found");return e}function d8(n,t,e){var s=n.__transition,r;s[t]=e,e.timer=DC(o,0,e.time);function o(c){e.state=px,e.timer.restart(i,e.delay,e.time),e.delay<=c&&i(c-e.delay)}function i(c){var u,h,d,f;if(e.state!==px)return l();for(u in s)if(f=s[u],f.name===e.name){if(f.state===vl)return fx(i);f.state===mx?(f.state=Cl,f.timer.stop(),f.on.call("interrupt",n,n.__data__,f.index,f.group),delete s[u]):+u<t&&(f.state=Cl,f.timer.stop(),f.on.call("cancel",n,n.__data__,f.index,f.group),delete s[u])}if(fx(function(){e.state===vl&&(e.state=mx,e.timer.restart(a,e.delay,e.time),a(c))}),e.state=ld,e.on.call("start",n,n.__data__,e.index,e.group),e.state===ld){for(e.state=vl,r=new Array(d=e.tween.length),u=0,h=-1;u<d;++u)(f=e.tween[u].value.call(n,n.__data__,e.index,e.group))&&(r[++h]=f);r.length=h+1}}function a(c){for(var u=c<e.duration?e.ease.call(null,c/e.duration):(e.timer.restart(l),e.state=cd,1),h=-1,d=r.length;++h<d;)r[h].call(n,u);e.state===cd&&(e.on.call("end",n,n.__data__,e.index,e.group),l())}function l(){e.state=Cl,e.timer.stop(),delete s[t];for(var c in s)return;delete n.__transition}}function f8(n,t){var e=n.__transition,s,r,o=!0,i;if(e){t=t==null?null:t+"";for(i in e){if((s=e[i]).name!==t){o=!1;continue}r=s.state>ld&&s.state<cd,s.state=Cl,s.timer.stop(),s.on.call(r?"interrupt":"cancel",n,n.__data__,s.index,s.group),delete e[i]}o&&delete n.__transition}}function p8(n){return this.each(function(){f8(this,n)})}function m8(n,t){var e,s;return function(){var r=ps(this,n),o=r.tween;if(o!==e){s=e=o;for(var i=0,a=s.length;i<a;++i)if(s[i].name===t){s=s.slice(),s.splice(i,1);break}}r.tween=s}}function g8(n,t,e){var s,r;if(typeof e!="function")throw new Error;return function(){var o=ps(this,n),i=o.tween;if(i!==s){r=(s=i).slice();for(var a={name:t,value:e},l=0,c=r.length;l<c;++l)if(r[l].name===t){r[l]=a;break}l===c&&r.push(a)}o.tween=r}}function x8(n,t){var e=this._id;if(n+="",arguments.length<2){for(var s=Vn(this.node(),e).tween,r=0,o=s.length,i;r<o;++r)if((i=s[r]).name===n)return i.value;return null}return this.each((t==null?m8:g8)(e,n,t))}function am(n,t,e){var s=n._id;return n.each(function(){var r=ps(this,s);(r.value||(r.value={}))[t]=e.apply(this,arguments)}),function(r){return Vn(r,s).value[t]}}function FC(n,t){var e;return(typeof t=="number"?Rn:t instanceof Ar?oc:(e=Ar(t))?(t=e,oc):NC)(n,t)}function b8(n){return function(){this.removeAttribute(n)}}function y8(n){return function(){this.removeAttributeNS(n.space,n.local)}}function w8(n,t,e){var s,r=e+"",o;return function(){var i=this.getAttribute(n);return i===r?null:i===s?o:o=t(s=i,e)}}function v8(n,t,e){var s,r=e+"",o;return function(){var i=this.getAttributeNS(n.space,n.local);return i===r?null:i===s?o:o=t(s=i,e)}}function C8(n,t,e){var s,r,o;return function(){var i,a=e(this),l;return a==null?void this.removeAttribute(n):(i=this.getAttribute(n),l=a+"",i===l?null:i===s&&l===r?o:(r=l,o=t(s=i,a)))}}function $8(n,t,e){var s,r,o;return function(){var i,a=e(this),l;return a==null?void this.removeAttributeNS(n.space,n.local):(i=this.getAttributeNS(n.space,n.local),l=a+"",i===l?null:i===s&&l===r?o:(r=l,o=t(s=i,a)))}}function I8(n,t){var e=Vu(n),s=e==="transform"?o8:FC;return this.attrTween(n,typeof t=="function"?(e.local?$8:C8)(e,s,am(this,"attr."+n,t)):t==null?(e.local?y8:b8)(e):(e.local?v8:w8)(e,s,t))}function k8(n,t){return function(e){this.setAttribute(n,t.call(this,e))}}function S8(n,t){return function(e){this.setAttributeNS(n.space,n.local,t.call(this,e))}}function N8(n,t){var e,s;function r(){var o=t.apply(this,arguments);return o!==s&&(e=(s=o)&&S8(n,o)),e}return r._value=t,r}function T8(n,t){var e,s;function r(){var o=t.apply(this,arguments);return o!==s&&(e=(s=o)&&k8(n,o)),e}return r._value=t,r}function E8(n,t){var e="attr."+n;if(arguments.length<2)return(e=this.tween(e))&&e._value;if(t==null)return this.tween(e,null);if(typeof t!="function")throw new Error;var s=Vu(n);return this.tween(e,(s.local?N8:T8)(s,t))}function R8(n,t){return function(){im(this,n).delay=+t.apply(this,arguments)}}function A8(n,t){return t=+t,function(){im(this,n).delay=t}}function D8(n){var t=this._id;return arguments.length?this.each((typeof n=="function"?R8:A8)(t,n)):Vn(this.node(),t).delay}function _8(n,t){return function(){ps(this,n).duration=+t.apply(this,arguments)}}function F8(n,t){return t=+t,function(){ps(this,n).duration=t}}function O8(n){var t=this._id;return arguments.length?this.each((typeof n=="function"?_8:F8)(t,n)):Vn(this.node(),t).duration}function M8(n,t){if(typeof t!="function")throw new Error;return function(){ps(this,n).ease=t}}function L8(n){var t=this._id;return arguments.length?this.each(M8(t,n)):Vn(this.node(),t).ease}function P8(n,t){return function(){var e=t.apply(this,arguments);if(typeof e!="function")throw new Error;ps(this,n).ease=e}}function z8(n){if(typeof n!="function")throw new Error;return this.each(P8(this._id,n))}function B8(n){typeof n!="function"&&(n=mC(n));for(var t=this._groups,e=t.length,s=new Array(e),r=0;r<e;++r)for(var o=t[r],i=o.length,a=s[r]=[],l,c=0;c<i;++c)(l=o[c])&&n.call(l,l.__data__,c,o)&&a.push(l);return new Is(s,this._parents,this._name,this._id)}function V8(n){if(n._id!==this._id)throw new Error;for(var t=this._groups,e=n._groups,s=t.length,r=e.length,o=Math.min(s,r),i=new Array(s),a=0;a<o;++a)for(var l=t[a],c=e[a],u=l.length,h=i[a]=new Array(u),d,f=0;f<u;++f)(d=l[f]||c[f])&&(h[f]=d);for(;a<s;++a)i[a]=t[a];return new Is(i,this._parents,this._name,this._id)}function W8(n){return(n+"").trim().split(/^|\s+/).every(function(t){var e=t.indexOf(".");return e>=0&&(t=t.slice(0,e)),!t||t==="start"})}function U8(n,t,e){var s,r,o=W8(t)?im:ps;return function(){var i=o(this,n),a=i.on;a!==s&&(r=(s=a).copy()).on(t,e),i.on=r}}function G8(n,t){var e=this._id;return arguments.length<2?Vn(this.node(),e).on.on(n):this.each(U8(e,n,t))}function H8(n){return function(){var t=this.parentNode;for(var e in this.__transition)if(+e!==n)return;t&&t.removeChild(this)}}function q8(){return this.on("end.remove",H8(this._id))}function j8(n){var t=this._name,e=this._id;typeof n!="function"&&(n=tm(n));for(var s=this._groups,r=s.length,o=new Array(r),i=0;i<r;++i)for(var a=s[i],l=a.length,c=o[i]=new Array(l),u,h,d=0;d<l;++d)(u=a[d])&&(h=n.call(u,u.__data__,d,a))&&("__data__"in u&&(h.__data__=u.__data__),c[d]=h,Uu(c[d],t,e,d,c,Vn(u,e)));return new Is(o,this._parents,t,e)}function X8(n){var t=this._name,e=this._id;typeof n!="function"&&(n=pC(n));for(var s=this._groups,r=s.length,o=[],i=[],a=0;a<r;++a)for(var l=s[a],c=l.length,u,h=0;h<c;++h)if(u=l[h]){for(var d=n.call(u,u.__data__,h,l),f,p=Vn(u,e),m=0,g=d.length;m<g;++m)(f=d[m])&&Uu(f,t,e,m,d,p);o.push(d),i.push(u)}return new Is(o,i,t,e)}var K8=Va.prototype.constructor;function Y8(){return new K8(this._groups,this._parents)}function Z8(n,t){var e,s,r;return function(){var o=yo(this,n),i=(this.style.removeProperty(n),yo(this,n));return o===i?null:o===e&&i===s?r:r=t(e=o,s=i)}}function OC(n){return function(){this.style.removeProperty(n)}}function J8(n,t,e){var s,r=e+"",o;return function(){var i=yo(this,n);return i===r?null:i===s?o:o=t(s=i,e)}}function Q8(n,t,e){var s,r,o;return function(){var i=yo(this,n),a=e(this),l=a+"";return a==null&&(l=a=(this.style.removeProperty(n),yo(this,n))),i===l?null:i===s&&l===r?o:(r=l,o=t(s=i,a))}}function t7(n,t){var e,s,r,o="style."+t,i="end."+o,a;return function(){var l=ps(this,n),c=l.on,u=l.value[o]==null?a||(a=OC(t)):void 0;(c!==e||r!==u)&&(s=(e=c).copy()).on(i,r=u),l.on=s}}function e7(n,t,e){var s=(n+="")=="transform"?r8:FC;return t==null?this.styleTween(n,Z8(n,s)).on("end.style."+n,OC(n)):typeof t=="function"?this.styleTween(n,Q8(n,s,am(this,"style."+n,t))).each(t7(this._id,n)):this.styleTween(n,J8(n,s,t),e).on("end.style."+n,null)}function n7(n,t,e){return function(s){this.style.setProperty(n,t.call(this,s),e)}}function s7(n,t,e){var s,r;function o(){var i=t.apply(this,arguments);return i!==r&&(s=(r=i)&&n7(n,i,e)),s}return o._value=t,o}function r7(n,t,e){var s="style."+(n+="");if(arguments.length<2)return(s=this.tween(s))&&s._value;if(t==null)return this.tween(s,null);if(typeof t!="function")throw new Error;return this.tween(s,s7(n,t,e??""))}function o7(n){return function(){this.textContent=n}}function i7(n){return function(){var t=n(this);this.textContent=t??""}}function a7(n){return this.tween("text",typeof n=="function"?i7(am(this,"text",n)):o7(n==null?"":n+""))}function l7(n){return function(t){this.textContent=n.call(this,t)}}function c7(n){var t,e;function s(){var r=n.apply(this,arguments);return r!==e&&(t=(e=r)&&l7(r)),t}return s._value=n,s}function u7(n){var t="text";if(arguments.length<1)return(t=this.tween(t))&&t._value;if(n==null)return this.tween(t,null);if(typeof n!="function")throw new Error;return this.tween(t,c7(n))}function h7(){for(var n=this._name,t=this._id,e=MC(),s=this._groups,r=s.length,o=0;o<r;++o)for(var i=s[o],a=i.length,l,c=0;c<a;++c)if(l=i[c]){var u=Vn(l,t);Uu(l,n,e,c,i,{time:u.time+u.delay+u.duration,delay:0,duration:u.duration,ease:u.ease})}return new Is(s,this._parents,n,e)}function d7(){var n,t,e=this,s=e._id,r=e.size();return new Promise(function(o,i){var a={value:i},l={value:function(){--r===0&&o()}};e.each(function(){var c=ps(this,s),u=c.on;u!==n&&(t=(n=u).copy(),t._.cancel.push(a),t._.interrupt.push(a),t._.end.push(l)),c.on=t}),r===0&&o()})}var f7=0;function Is(n,t,e,s){this._groups=n,this._parents=t,this._name=e,this._id=s}function MC(){return++f7}var gs=Va.prototype;Is.prototype={constructor:Is,select:j8,selectAll:X8,selectChild:gs.selectChild,selectChildren:gs.selectChildren,filter:B8,merge:V8,selection:Y8,transition:h7,call:gs.call,nodes:gs.nodes,node:gs.node,size:gs.size,empty:gs.empty,each:gs.each,on:G8,attr:I8,attrTween:E8,style:e7,styleTween:r7,text:a7,textTween:u7,remove:q8,tween:x8,delay:D8,duration:O8,ease:L8,easeVarying:z8,end:d7,[Symbol.iterator]:gs[Symbol.iterator]};function p7(n){return((n*=2)<=1?n*n*n:(n-=2)*n*n+2)/2}var m7={time:null,delay:0,duration:250,ease:p7};function g7(n,t){for(var e;!(e=n.__transition)||!(e=e[t]);)if(!(n=n.parentNode))throw new Error(`transition ${t} not found`);return e}function x7(n){var t,e;n instanceof Is?(t=n._id,n=n._name):(t=MC(),(e=m7).time=om(),n=n==null?null:n+"");for(var s=this._groups,r=s.length,o=0;o<r;++o)for(var i=s[o],a=i.length,l,c=0;c<a;++c)(l=i[c])&&Uu(l,n,t,c,i,e||g7(l,t));return new Is(s,this._parents,n,t)}Va.prototype.interrupt=p8;Va.prototype.transition=x7;function b7(n){return Math.abs(n=Math.round(n))>=1e21?n.toLocaleString("en").replace(/,/g,""):n.toString(10)}function cc(n,t){if((e=(n=t?n.toExponential(t-1):n.toExponential()).indexOf("e"))<0)return null;var e,s=n.slice(0,e);return[s.length>1?s[0]+s.slice(2):s,+n.slice(e+1)]}function vo(n){return n=cc(Math.abs(n)),n?n[1]:NaN}function y7(n,t){return function(e,s){for(var r=e.length,o=[],i=0,a=n[0],l=0;r>0&&a>0&&(l+a+1>s&&(a=Math.max(1,s-l)),o.push(e.substring(r-=a,r+a)),!((l+=a+1)>s));)a=n[i=(i+1)%n.length];return o.reverse().join(t)}}function w7(n){return function(t){return t.replace(/[0-9]/g,function(e){return n[+e]})}}var v7=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function uc(n){if(!(t=v7.exec(n)))throw new Error("invalid format: "+n);var t;return new lm({fill:t[1],align:t[2],sign:t[3],symbol:t[4],zero:t[5],width:t[6],comma:t[7],precision:t[8]&&t[8].slice(1),trim:t[9],type:t[10]})}uc.prototype=lm.prototype;function lm(n){this.fill=n.fill===void 0?" ":n.fill+"",this.align=n.align===void 0?">":n.align+"",this.sign=n.sign===void 0?"-":n.sign+"",this.symbol=n.symbol===void 0?"":n.symbol+"",this.zero=!!n.zero,this.width=n.width===void 0?void 0:+n.width,this.comma=!!n.comma,this.precision=n.precision===void 0?void 0:+n.precision,this.trim=!!n.trim,this.type=n.type===void 0?"":n.type+""}lm.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function C7(n){t:for(var t=n.length,e=1,s=-1,r;e<t;++e)switch(n[e]){case".":s=r=e;break;case"0":s===0&&(s=e),r=e;break;default:if(!+n[e])break t;s>0&&(s=0);break}return s>0?n.slice(0,s)+n.slice(r+1):n}var LC;function $7(n,t){var e=cc(n,t);if(!e)return n+"";var s=e[0],r=e[1],o=r-(LC=Math.max(-8,Math.min(8,Math.floor(r/3)))*3)+1,i=s.length;return o===i?s:o>i?s+new Array(o-i+1).join("0"):o>0?s.slice(0,o)+"."+s.slice(o):"0."+new Array(1-o).join("0")+cc(n,Math.max(0,t+o-1))[0]}function gx(n,t){var e=cc(n,t);if(!e)return n+"";var s=e[0],r=e[1];return r<0?"0."+new Array(-r).join("0")+s:s.length>r+1?s.slice(0,r+1)+"."+s.slice(r+1):s+new Array(r-s.length+2).join("0")}const xx={"%":(n,t)=>(n*100).toFixed(t),b:n=>Math.round(n).toString(2),c:n=>n+"",d:b7,e:(n,t)=>n.toExponential(t),f:(n,t)=>n.toFixed(t),g:(n,t)=>n.toPrecision(t),o:n=>Math.round(n).toString(8),p:(n,t)=>gx(n*100,t),r:gx,s:$7,X:n=>Math.round(n).toString(16).toUpperCase(),x:n=>Math.round(n).toString(16)};function bx(n){return n}var yx=Array.prototype.map,wx=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function I7(n){var t=n.grouping===void 0||n.thousands===void 0?bx:y7(yx.call(n.grouping,Number),n.thousands+""),e=n.currency===void 0?"":n.currency[0]+"",s=n.currency===void 0?"":n.currency[1]+"",r=n.decimal===void 0?".":n.decimal+"",o=n.numerals===void 0?bx:w7(yx.call(n.numerals,String)),i=n.percent===void 0?"%":n.percent+"",a=n.minus===void 0?"−":n.minus+"",l=n.nan===void 0?"NaN":n.nan+"";function c(h){h=uc(h);var d=h.fill,f=h.align,p=h.sign,m=h.symbol,g=h.zero,x=h.width,b=h.comma,w=h.precision,y=h.trim,v=h.type;v==="n"?(b=!0,v="g"):xx[v]||(w===void 0&&(w=12),y=!0,v="g"),(g||d==="0"&&f==="=")&&(g=!0,d="0",f="=");var $=m==="$"?e:m==="#"&&/[boxX]/.test(v)?"0"+v.toLowerCase():"",N=m==="$"?s:/[%p]/.test(v)?i:"",T=xx[v],I=/[defgprs%]/.test(v);w=w===void 0?6:/[gprs]/.test(v)?Math.max(1,Math.min(21,w)):Math.max(0,Math.min(20,w));function k(C){var R=$,D=N,M,O,z;if(v==="c")D=T(C)+D,C="";else{C=+C;var G=C<0||1/C<0;if(C=isNaN(C)?l:T(Math.abs(C),w),y&&(C=C7(C)),G&&+C==0&&p!=="+"&&(G=!1),R=(G?p==="("?p:a:p==="-"||p==="("?"":p)+R,D=(v==="s"?wx[8+LC/3]:"")+D+(G&&p==="("?")":""),I){for(M=-1,O=C.length;++M<O;)if(z=C.charCodeAt(M),48>z||z>57){D=(z===46?r+C.slice(M+1):C.slice(M))+D,C=C.slice(0,M);break}}}b&&!g&&(C=t(C,1/0));var V=R.length+C.length+D.length,U=V<x?new Array(x-V+1).join(d):"";switch(b&&g&&(C=t(U+C,U.length?x-D.length:1/0),U=""),f){case"<":C=R+C+D+U;break;case"=":C=R+U+C+D;break;case"^":C=U.slice(0,V=U.length>>1)+R+C+D+U.slice(V);break;default:C=U+R+C+D;break}return o(C)}return k.toString=function(){return h+""},k}function u(h,d){var f=c((h=uc(h),h.type="f",h)),p=Math.max(-8,Math.min(8,Math.floor(vo(d)/3)))*3,m=Math.pow(10,-p),g=wx[8+p/3];return function(x){return f(m*x)+g}}return{format:c,formatPrefix:u}}var cl,PC,zC;k7({thousands:",",grouping:[3],currency:["$",""]});function k7(n){return cl=I7(n),PC=cl.format,zC=cl.formatPrefix,cl}function S7(n){return Math.max(0,-vo(Math.abs(n)))}function N7(n,t){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(vo(t)/3)))*3-vo(Math.abs(n)))}function T7(n,t){return n=Math.abs(n),t=Math.abs(t)-n,Math.max(0,vo(t)-vo(n))+1}function E7(n,t){switch(arguments.length){case 0:break;case 1:this.range(n);break;default:this.range(t).domain(n);break}return this}function R7(n){return function(){return n}}function A7(n){return+n}var vx=[0,1];function Qr(n){return n}function ud(n,t){return(t-=n=+n)?function(e){return(e-n)/t}:R7(isNaN(t)?NaN:.5)}function D7(n,t){var e;return n>t&&(e=n,n=t,t=e),function(s){return Math.max(n,Math.min(t,s))}}function _7(n,t,e){var s=n[0],r=n[1],o=t[0],i=t[1];return r<s?(s=ud(r,s),o=e(i,o)):(s=ud(s,r),o=e(o,i)),function(a){return o(s(a))}}function F7(n,t,e){var s=Math.min(n.length,t.length)-1,r=new Array(s),o=new Array(s),i=-1;for(n[s]<n[0]&&(n=n.slice().reverse(),t=t.slice().reverse());++i<s;)r[i]=ud(n[i],n[i+1]),o[i]=e(t[i],t[i+1]);return function(a){var l=HX(n,a,1,s)-1;return o[l](r[l](a))}}function O7(n,t){return t.domain(n.domain()).range(n.range()).interpolate(n.interpolate()).clamp(n.clamp()).unknown(n.unknown())}function M7(){var n=vx,t=vx,e=rm,s,r,o,i=Qr,a,l,c;function u(){var d=Math.min(n.length,t.length);return i!==Qr&&(i=D7(n[0],n[d-1])),a=d>2?F7:_7,l=c=null,h}function h(d){return d==null||isNaN(d=+d)?o:(l||(l=a(n.map(s),t,e)))(s(i(d)))}return h.invert=function(d){return i(r((c||(c=a(t,n.map(s),Rn)))(d)))},h.domain=function(d){return arguments.length?(n=Array.from(d,A7),u()):n.slice()},h.range=function(d){return arguments.length?(t=Array.from(d),u()):t.slice()},h.rangeRound=function(d){return t=Array.from(d),e=e8,u()},h.clamp=function(d){return arguments.length?(i=d?!0:Qr,u()):i!==Qr},h.interpolate=function(d){return arguments.length?(e=d,u()):e},h.unknown=function(d){return arguments.length?(o=d,h):o},function(d,f){return s=d,r=f,u()}}function L7(){return M7()(Qr,Qr)}function P7(n,t,e,s){var r=YX(n,t,e),o;switch(s=uc(s??",f"),s.type){case"s":{var i=Math.max(Math.abs(n),Math.abs(t));return s.precision==null&&!isNaN(o=N7(r,i))&&(s.precision=o),zC(s,i)}case"":case"e":case"g":case"p":case"r":{s.precision==null&&!isNaN(o=T7(r,Math.max(Math.abs(n),Math.abs(t))))&&(s.precision=o-(s.type==="e"));break}case"f":case"%":{s.precision==null&&!isNaN(o=S7(r))&&(s.precision=o-(s.type==="%")*2);break}}return PC(s)}function z7(n){var t=n.domain;return n.ticks=function(e){var s=t();return KX(s[0],s[s.length-1],e??10)},n.tickFormat=function(e,s){var r=t();return P7(r[0],r[r.length-1],e??10,s)},n.nice=function(e){e==null&&(e=10);var s=t(),r=0,o=s.length-1,i=s[r],a=s[o],l,c,u=10;for(a<i&&(c=i,i=a,a=c,c=r,r=o,o=c);u-- >0;){if(c=nd(i,a,e),c===l)return s[r]=i,s[o]=a,t(s);if(c>0)i=Math.floor(i/c)*c,a=Math.ceil(a/c)*c;else if(c<0)i=Math.ceil(i*c)/c,a=Math.floor(a*c)/c;else break;l=c}return n},n}function hd(){var n=L7();return n.copy=function(){return O7(n,hd())},E7.apply(n,arguments),z7(n)}function si(n,t,e){this.k=n,this.x=t,this.y=e}si.prototype={constructor:si,scale:function(n){return n===1?this:new si(this.k*n,this.x,this.y)},translate:function(n,t){return n===0&t===0?this:new si(this.k,this.x+this.k*n,this.y+this.k*t)},apply:function(n){return[n[0]*this.k+this.x,n[1]*this.k+this.y]},applyX:function(n){return n*this.k+this.x},applyY:function(n){return n*this.k+this.y},invert:function(n){return[(n[0]-this.x)/this.k,(n[1]-this.y)/this.k]},invertX:function(n){return(n-this.x)/this.k},invertY:function(n){return(n-this.y)/this.k},rescaleX:function(n){return n.copy().domain(n.range().map(this.invertX,this).map(n.invert,n))},rescaleY:function(n){return n.copy().domain(n.range().map(this.invertY,this).map(n.invert,n))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};si.prototype;var B7=Cx('<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" class="svelte-wfqo9c"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>'),V7=Cx('<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" class="svelte-wfqo9c"><path d="M8 5v14l11-7z"></path></svg>'),W7=_r('<div class="tick-container svelte-wfqo9c"><div class="tick svelte-wfqo9c" style="left: 1%;"></div> <div class="tick-label svelte-wfqo9c" style="left: 1%;">t=0</div> <div class="time-label svelte-wfqo9c">Time</div> <div class="tick svelte-wfqo9c" style="left: 99%;"></div> <div class="tick-label svelte-wfqo9c" style="left: 99%;">t=1</div></div>'),U7=_r('<div><div class="time-slider-inner svelte-wfqo9c"><button class="play-button svelte-wfqo9c"><!></button> <div class="slider-wrapper svelte-wfqo9c"><input type="range" class="slider svelte-wfqo9c"/> <!></div> <div class="spacer svelte-wfqo9c"></div></div></div>');function G7(n,t){fd(t,!1);let e=bt(t,"value",12,0),s=bt(t,"isPlaying",8,!1),r=bt(t,"min",8,0),o=bt(t,"max",8,1),i=bt(t,"step",8,.001),a=bt(t,"disabled",8,!1),l=bt(t,"color",8,"#4594e3"),c=bt(t,"showTicks",8,!0),u=bt(t,"onTogglePlay",8,()=>{}),h=bt(t,"onInput",8,()=>{}),d=ze();function f(){u()()}qn(()=>(Kn(e()),Kn(r()),Kn(o()),Kn(l())),()=>{const I=(e()-r())/(o()-r())*100;Yt(d,`background: linear-gradient(to right, ${l()} ${I}%, #d3d3d3 ${I}%)`)}),kx(),dd();var p=U7();let m;var g=Xe(p),x=Xe(g);x.__click=f;var b=Xe(x);{var w=I=>{var k=B7();Qn(I,k)},y=I=>{var k=V7();Qn(I,k)};Il(b,I=>{s()?I(w):I(y,!1)})}Ke(x);var v=hr(x,2),$=Xe(v);s$($),$.__input=function(...I){h()?.apply(this,I)};var N=hr($,2);{var T=I=>{var k=W7();Qn(I,k)};Il(N,I=>{c()&&I(T)})}Ke(v),ZC(2),Ke(g),Ke(p),$l(()=>{m=yh(p,1,"time-slider-container svelte-wfqo9c",null,m,{disabled:a()}),Ha(x,"aria-label",s()?"Pause":"Play"),x.disabled=a(),Ha($,"min",r()),Ha($,"max",o()),Ha($,"step",i()),Jr($,`${ot(d)??""}; --slider-color: ${l()??""};`),$.disabled=a()}),l$($,e),Qn(n,p),pd()}QC(["click","input"]);function CY(n,t,e,s,r){const{font:o="22px Helvetica, Arial, sans-serif",color:i="#666",align:a="center",baseline:l="top",offsetX:c=0,offsetY:u=0}=r??{};n.save(),n.font=o,n.fillStyle=i,n.textAlign=a,n.textBaseline=l,n.fillText(t,e+c,s+u),n.restore()}function H7(n,t,e,s,r,o){const i=Math.atan2(r-e,s-t);n.beginPath(),n.moveTo(t,e),n.lineTo(s,r),n.stroke();let a=i;n.beginPath(),n.moveTo(s+o*Math.cos(a),r+o*Math.sin(a)),a+=2*Math.PI/3,n.lineTo(s+o*Math.cos(a),r+o*Math.sin(a)),a+=2*Math.PI/3,n.lineTo(s+o*Math.cos(a),r+o*Math.sin(a)),n.closePath(),n.fill()}function $Y(n,t,e,s){if(t.length===0||e.length===0)return;const r=s.headRadius??5;let o=0;for(const[i,a]of e){const l=Math.sqrt(i*i+a*a);l>o&&(o=l)}o===0&&(o=1),n.save(),n.strokeStyle=s.color,n.fillStyle=s.color,n.lineWidth=s.strokeWidth,n.globalAlpha=1,n.lineCap="butt",n.lineJoin="miter",n.shadowColor="transparent",n.shadowBlur=0;for(let i=0;i<t.length;i++){const[a,l]=t[i],[c,u]=e[i];let h,d;if(s.normalizeVectors){const f=Math.sqrt(c*c+u*u);f>0?(h=c/f*s.arrowScale,d=u/f*s.arrowScale):(h=0,d=0)}else h=c/o*s.arrowScale,d=u/o*s.arrowScale;H7(n,a,l,a+h,l+d,r)}n.restore()}function q7(n,t,e,s,r){n.fillStyle=s,n.globalAlpha=r;for(const[o,i]of t)n.beginPath(),n.arc(o,i,e,0,2*Math.PI),n.fill();n.globalAlpha=1}function j7(n,t,e,s,r){const o=t.length;if(o!==0){n.lineWidth=s.strokeWidth,n.strokeStyle=s.color,n.lineCap="round",n.lineJoin="round";for(let i=0;i<o;i++){const a=t[i];if(s.showPreview&&s.previewOpacity!==void 0){n.globalAlpha=s.previewOpacity,n.beginPath();for(let f=0;f<a.length;f++){const[p,m]=a[f];f===0?n.moveTo(p,m):n.lineTo(p,m)}n.stroke()}const l=Math.min(e+1,a.length-1),c=Math.max(1,Math.floor(r*a.length)),u=Math.max(0,l-c);if(l>u)for(let f=u;f<l;f++){const p=(f-u+1)/(l-u);n.globalAlpha=p*s.progressOpacity;const[m,g]=a[f],[x,b]=a[f+1];n.beginPath(),n.moveTo(m,g),n.lineTo(x,b),n.stroke()}const[h,d]=a[l];n.beginPath(),n.arc(h,d,s.pointRadius,0,2*Math.PI),n.fillStyle=s.color,n.globalAlpha=s.progressOpacity,n.fill()}n.globalAlpha=1}}function IY(n,t,e,s){const r=t.length;if(r!==0){n.lineWidth=s.strokeWidth,n.strokeStyle=s.color,n.lineCap="round",n.lineJoin="round";for(let o=0;o<r;o++){const i=t[o];if(s.showPreview!==!1){n.globalAlpha=s.previewOpacity??.15,n.beginPath();for(let u=0;u<i.length;u++){const[h,d]=i[u];u===0?n.moveTo(h,d):n.lineTo(h,d)}n.stroke()}n.globalAlpha=s.progressOpacity,n.beginPath();for(let u=0;u<=e+1&&u<i.length;u++){const[h,d]=i[u];u===0?n.moveTo(h,d):n.lineTo(h,d)}n.stroke();const a=Math.min(e+1,i.length-1),[l,c]=i[a];n.beginPath(),n.arc(l,c,s.pointRadius,0,2*Math.PI),n.fillStyle=s.color,n.globalAlpha=s.progressOpacity,n.fill()}n.globalAlpha=1}}var X7=_r('<div class="figure-footer svelte-377qv7"><!></div>'),K7=_r('<figure class="double-figure svelte-377qv7"><div class="double-figure-container svelte-377qv7"><div><!></div> <div><!></div></div> <!> <figcaption class="figure-caption svelte-377qv7"><!></figcaption></figure>');function Y7(n,t){fd(t,!1);let e=bt(t,"left",8,void 0),s=bt(t,"right",8,void 0),r=bt(t,"footer",8,void 0),o=bt(t,"caption",8,void 0),i=bt(t,"gap",8,20),a=bt(t,"backgroundVisible",8,!0),l=bt(t,"isActive",24,()=>r$(!1)),c=ze(),u=null,h=!1,d=!0;function f(){l().set(h&&d)}$x(()=>{u=new IntersectionObserver(C=>{C.forEach(R=>{h=R.isIntersecting,f()})},{threshold:0,rootMargin:"50px"}),ot(c)&&u.observe(ot(c));const k=()=>{d=!document.hidden,f()};return document.addEventListener("visibilitychange",k),()=>{document.removeEventListener("visibilitychange",k)}}),Ix(()=>{u&&u.disconnect()}),dd();var p=K7(),m=Xe(p),g=Xe(m);let x;var b=Xe(g);qa(b,()=>e()??Ua),Ke(g);var w=hr(g,2);let y;var v=Xe(w);qa(v,()=>s()??Ua),Ke(w),Ke(m);var $=hr(m,2);{var N=k=>{var C=X7(),R=Xe(C);qa(R,()=>r()??Ua),Ke(C),Qn(k,C)};Il($,k=>{r()&&k(N)})}var T=hr($,2),I=Xe(T);qa(I,()=>o()??Ua),Ke(T),Ke(p),bh(p,k=>Yt(c,k),()=>ot(c)),$l(()=>{Jr(m,`gap: ${i()??""}px;`),x=yh(g,1,"figure-content left-figure svelte-377qv7",null,x,{"no-background":!a()}),y=yh(w,1,"figure-content right-figure svelte-377qv7",null,y,{"no-background":!a()})}),Qn(n,p),pd()}var Z7=_r('<div class="panel-container svelte-ipvq8u"><div class="panel-label svelte-ipvq8u"> </div> <canvas class="panel-canvas svelte-ipvq8u"></canvas></div>'),J7=_r('<div class="panel-container svelte-ipvq8u"><div class="panel-label svelte-ipvq8u"> </div> <canvas class="panel-canvas svelte-ipvq8u"></canvas></div>'),Q7=_r(`<div class="placeholder svelte-ipvq8u"><p>Rectified flow superimposed visualization requires rectified flow data
      with at least 2 steps.</p></div>`);function kY(n,t){fd(t,!1);const e=()=>e$(ot(sn),"$figureIsActive",s),[s,r]=t$(),o=ze(),i=ze(),a=ze(),l=ze(),c=ze();let u=bt(t,"leftTrajectories",24,()=>[]),h=bt(t,"rightTrajectories",24,()=>[]),d=bt(t,"targetDistribution",24,()=>[]),f=bt(t,"canvasWidth",8,400),p=bt(t,"canvasHeight",8,400),m=bt(t,"marginWidth",8,10),g=bt(t,"marginHeight",8,10),x=bt(t,"gap",8,20),b=bt(t,"domainRange",24,()=>({xMin:-1.7,xMax:1.7,yMin:-1.7,yMax:1.7})),w=bt(t,"leftLabel",8,"Flow Matching"),y=bt(t,"rightLabel",8,"Rectified Flow"),v=bt(t,"labelFontSize",8,26),$=bt(t,"labelColor",24,()=>Hr.stylingSettings.label.color),N=bt(t,"targetColor",8,"#3b82f6"),T=bt(t,"targetOpacity",8,.35),I=bt(t,"targetPointRadius",8,5),k=bt(t,"trajectoryColor",24,()=>Hr.stylingSettings.trajectory.color),C=bt(t,"trajectoryStrokeWidth",24,()=>Hr.stylingSettings.trajectory.strokeWidth),R=bt(t,"trajectoryPointRadius",24,()=>Hr.stylingSettings.trajectory.pointRadius),D=bt(t,"trajectoryProgressOpacity",24,()=>Hr.stylingSettings.trajectory.progressOpacity),M=bt(t,"trajectoryFullOpacity",24,()=>Hr.stylingSettings.trajectory.fullOpacity),O=bt(t,"showTrajectoryPreview",8,!1),z=bt(t,"alphaTimeWindow",8,.8),G=bt(t,"animationDuration",8,8e3),V=bt(t,"pauseDuration",8,1e3),U=bt(t,"playingByDefault",8,!0),j=bt(t,"onInitialized",8,void 0),K=bt(t,"backgroundVisible",8,!0),Y=bt(t,"children",8,void 0),X=ze(),Q=ze(),tt,nt,it=1,ht,ct,xt=ze(0),mt=0,Nt=0,wt=ze(U()),St=ze(null),Dt=null,_t=!1,Vt=null,Lt=ze(!1),nn=ze(!1),oe=[],Cn=[],Ae=[],sn=ze(),Pe=!1;function $n(){if(!ot(i))return;const{xMin:Pt,xMax:Gn,yMin:Vo,yMax:Wo}=b();ht=hd().domain([Pt,Gn]).range([m(),f()-m()]),ct=hd().domain([Vo,Wo]).range([g(),p()-g()])}function Wn(){it=window.devicePixelRatio||1,ot(X)&&(Ga(X,ot(X).width=f()*it),Ga(X,ot(X).height=p()*it),tt=ot(X).getContext("2d"),tt.scale(it,it)),ot(Q)&&(Ga(Q,ot(Q).width=f()*it),Ga(Q,ot(Q).height=p()*it),nt=ot(Q).getContext("2d"),nt.scale(it,it))}function In(Pt){if(!ht||!ct||!Pt||Pt.length===0)return[];const Gn=Pt[0]?.length||0;return Array.from({length:Gn},(Vo,Wo)=>Pt.map(Hn=>[ht(Hn[Wo][0]),ct(Hn[Wo][1])]))}function Un(){!ht||!ct||(oe=d().map(Pt=>[ht(Pt[0]),ct(Pt[1])]),Cn=In(u()),Ae=In(h()))}function Es(Pt,Gn,Vo){Pt&&(Pt.clearRect(0,0,f(),p()),q7(Pt,oe,I(),N(),T()),j7(Pt,Gn,Vo,{strokeWidth:C(),color:k(),progressOpacity:D(),pointRadius:R(),showPreview:O(),previewOpacity:M()},z()))}function Po(){!ot(X)||!ot(Q)||!ot(i)||($n(),Wn(),Un(),Yt(nn,!0),Rs(),Yt(Lt,!0),j()?.())}function Rs(){!ot(i)||!tt||!nt||(Es(tt,Cn,mt),Es(nt,Ae,mt))}function zo(Pt){if(!ot(wt)){Yt(St,null);return}Dt===null&&(Dt=Pt);const Gn=Pt-Dt;if(Dt=Pt,_t&&Vt!==null){Pt-Vt>=V()&&(_t=!1,Vt=null,mt=0,Nt=0,Yt(xt,0),Rs()),Yt(St,requestAnimationFrame(zo));return}for(Nt+=Gn;Nt>=ot(c)&&mt<ot(l);)Nt-=ot(c),mt+=1;Yt(xt,ot(l)>0?mt/ot(l):0),Rs(),mt>=ot(l)&&(_t=!0,Vt=Pt),Yt(St,requestAnimationFrame(zo))}function Gr(){ot(St)===null&&(Dt=null,Yt(St,requestAnimationFrame(zo)))}function Bo(){ot(St)!==null&&(cancelAnimationFrame(ot(St)),Yt(St,null))}function Gu(){Yt(wt,!ot(wt)),ot(wt)||Bo()}function BC(){ot(wt)&&(Yt(wt,!1),Bo()),mt=Math.round(ot(xt)*ot(l)),Nt=0,Rs()}function VC(Pt){!Pt&&ot(wt)?(Pe=!0,Yt(wt,!1)):Pt&&Pe&&(Pe=!1,Yt(wt,!0))}$x(()=>{}),Ix(()=>{ot(St)&&cancelAnimationFrame(ot(St))}),qn(()=>Kn(Y()),()=>{Yt(o,Y())}),qn(()=>(Kn(u()),Kn(h()),Kn(d())),()=>{Yt(i,u()?.length>0&&h()?.length>0&&d()?.length>0)}),qn(()=>(ot(i),Kn(u())),()=>{Yt(a,ot(i)?u().length:1)}),qn(()=>ot(a),()=>{Yt(l,ot(a)-1)}),qn(()=>(ot(l),Kn(G())),()=>{Yt(c,ot(l)>0?G()/ot(l):G())}),qn(()=>(ot(i),ot(X),ot(Q),ot(Lt)),()=>{ot(i)&&ot(X)&&ot(Q)&&!ot(Lt)&&Po()}),qn(()=>(ot(wt),ot(nn),ot(St)),()=>{ot(wt)&&ot(nn)&&!ot(St)&&Gr()}),qn(()=>(ot(wt),ot(St)),()=>{!ot(wt)&&ot(St)&&Bo()}),qn(()=>(ot(sn),ot(Lt),e()),()=>{ot(sn)!==void 0&&ot(Lt)&&VC(e())}),kx(),dd();var cm=HC(),WC=JC(cm);{var UC=Pt=>{Y7(Pt,{get gap(){return x()},get caption(){return ot(o)},get backgroundVisible(){return K()},get isActive(){return ot(sn)},set isActive(Hn){n$(Yt(sn,Hn),"$figureIsActive",s)},left:Hn=>{var kn=Z7(),ms=Xe(kn),Hu=Xe(ms,!0);Ke(ms);var qu=hr(ms,2);bh(qu,ju=>Yt(X,ju),()=>ot(X)),Ke(kn),$l(()=>{Jr(kn,`max-width: ${f()??""}px;`),Jr(ms,`font-size: ${v()??""}px; color: ${$()??""};`),um(Hu,w())}),Qn(Hn,kn)},right:Hn=>{var kn=J7(),ms=Xe(kn),Hu=Xe(ms,!0);Ke(ms);var qu=hr(ms,2);bh(qu,ju=>Yt(Q,ju),()=>ot(Q)),Ke(kn),$l(()=>{Jr(kn,`max-width: ${f()??""}px;`),Jr(ms,`font-size: ${v()??""}px; color: ${$()??""};`),um(Hu,y())}),Qn(Hn,kn)},footer:Hn=>{G7(Hn,{get isPlaying(){return ot(wt)},min:0,max:1,onTogglePlay:Gu,onInput:BC,color:"#f17720",get value(){return ot(xt)},set value(kn){Yt(xt,kn)},$$legacy:!0})},$$slots:{left:!0,right:!0,footer:!0},$$legacy:!0})},GC=Pt=>{var Gn=Q7();Qn(Pt,Gn)};Il(WC,Pt=>{ot(i)?Pt(UC):Pt(GC,!1)})}Qn(n,cm),pd(),r()}export{Y7 as D,kY as R,zn as S,G7 as T,gY as a,bY as b,cY as c,yh as d,hd as e,Jr as f,CY as g,q7 as h,IY as i,Ot as j,$Y as k,mY as l,_ as m,H7 as n,c$ as o,xY as p,yY as q,AK as r,Hr as s,B as t,vY as u,wY as v,lY as w};
