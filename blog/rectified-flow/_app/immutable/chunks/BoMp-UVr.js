import{f as oo,a as es,e as Qg,c as CC}from"./DSi9nmV3.js";import{i as tx}from"./DcV_5Cje.js";import{h as Wo,a$ as $C,f as ko,aR as kC,D as IC,a7 as SC,b0 as NC,l as ex,a0 as TC,t as nx,u as sx,Z as Sa,a1 as EC,q as Xe,w as Ye,o as Lr,F as ja,v as Ka,n as rx,aB as RC,E as AC,P as Na}from"./CmFTLy_c.js";import{d as DC,s as Vp}from"./DAsjSGO6.js";import{p as se,i as Ro,c as _C}from"./D8qFlxh6.js";import{r as FC,a as Ta,s as Ea}from"./DM3KIUfw.js";import{o as OC,a as MC}from"./MxO7E7yY.js";import{w as LC}from"./bsExAe0A.js";function PC(n,t){for(var e=0;e<t.length;e++){const s=t[e];if(typeof s!="string"&&!Array.isArray(s)){for(const r in s)if(r!=="default"&&!(r in n)){const o=Object.getOwnPropertyDescriptor(s,r);o&&Object.defineProperty(n,r,o.get?o:{enumerable:!0,get:()=>s[r]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}const Wp=[...` 	
\r\f \v\uFEFF`];function zC(n,t,e){var s=n==null?"":""+n;if(e){for(var r in e)if(e[r])s=s?s+" "+r:r;else if(s.length)for(var o=r.length,i=0;(i=s.indexOf(r,i))>=0;){var a=i+o;(i===0||Wp.includes(s[i-1]))&&(a===s.length||Wp.includes(s[a]))?s=(i===0?"":s.substring(0,i))+s.substring(a+1):i=a}}return s===""?null:s}function BC(n,t){return n==null?null:String(n)}function th(n,t,e,s,r,o){var i=n.__className;if(Wo||i!==e||i===void 0){var a=zC(e,s,o);(!Wo||a!==n.getAttribute("class"))&&(a==null?n.removeAttribute("class"):n.className=a),n.__className=e}else if(o&&r!==o)for(var l in o){var c=!!o[l];(r==null||c!==!!r[l])&&n.classList.toggle(l,c)}return o}function eh(n,t,e,s){var r=n.__style;if(Wo||r!==t){var o=BC(t);(!Wo||o!==n.getAttribute("style"))&&(o==null?n.removeAttribute("style"):n.style.cssText=o),n.__style=t}return s}function VC(n,t,e=t){var s=new WeakSet;$C(n,"input",async r=>{var o=r?n.defaultValue:n.value;if(o=Ru(n)?Au(o):o,e(o),ko!==null&&s.add(ko),await kC(),o!==(o=t())){var i=n.selectionStart,a=n.selectionEnd,l=n.value.length;if(n.value=o??"",a!==null){var c=n.value.length;i===a&&a===l&&c>l?(n.selectionStart=c,n.selectionEnd=c):(n.selectionStart=i,n.selectionEnd=Math.min(a,c))}}}),(Wo&&n.defaultValue!==n.value||IC(t)==null&&n.value)&&(e(Ru(n)?Au(n.value):n.value),ko!==null&&s.add(ko)),SC(()=>{var r=t();if(n===document.activeElement){var o=NC??ko;if(s.has(o))return}Ru(n)&&r===Au(n.value)||n.type==="date"&&!r&&!n.value||r!==n.value&&(n.value=r??"")})}function Ru(n){var t=n.type;return t==="number"||t==="range"}function Au(n){return n===""?null:+n}function WC(n,t){return n.filter(e=>{const[s,r]=e;return Math.sqrt(s*s+r*r)<=t})}function BY(n,t="data.json"){const e=JSON.stringify(n,null,2),s=new Blob([e],{type:"application/json"}),r=URL.createObjectURL(s),o=document.createElement("a");o.href=r,o.download=t,o.click(),URL.revokeObjectURL(r)}const VY={targetDistributionPointsPath:"data/smiley_face.json",cachedFlowMatchingTrajectoriesPath:"cached_samples/flow_matching_trajectories.json",cachedFlowMatchingVectorFieldPath:"cached_samples/flow_matching_vector_field.json",cachedFlowMatchingGridTrajectoriesPath:"cached_samples/flow_matching_grid_trajectories.json",cachedRectifiedFlowTrajectoriesPath:"cached_samples/rectified_flow_trajectories.json",cachedRectifiedFlowGridTrajectoriesPath:"cached_samples/rectified_flow_grid_trajectories.json",cachedRectifiedFlowVectorFieldPath:"cached_samples/rectified_flow_vector_field.json",trainWorkerUrl:"/src/lib/flow_matching/workers/train.worker.ts",samplingWorkerUrl:"/src/lib/flow_matching/workers/sampling.worker.ts",flowMatchingModelPath:"/models/flow_matching_model.json",rectifiedFlowModelPath:"/models/rectified_flow_model.json",samplingSettings:{flowMatching:{numSamples:100,numSteps:300},flowMatchingGrid:{gridResolution:6,gridDomainRange:{xMin:-1.5,xMax:1.5,yMin:-1.5,yMax:1.5},numSteps:300},flowMatchingVectorField:{gridResolution:8,numTimeSteps:200,domainRange:{xMin:-2.5,xMax:2.5,yMin:-2.5,yMax:2.5}},rectifiedFlow:{numSamples:100,numSteps:300},rectifiedFlowGrid:{gridResolution:6,gridDomainRange:{xMin:-1.5,xMax:1.5,yMin:-1.5,yMax:1.5},numSteps:300},rectifiedFlowVectorField:{gridResolution:8,numTimeSteps:300,domainRange:{xMin:-2.5,xMax:2.5,yMin:-2.5,yMax:2.5}}},trainingSettings:{modelConfig:{dim:2,hidden:64},domainRange:null,flowMatchingTrainingConfig:{epochs:2e3,batchSize:1024,verbose:!0,displayInterval:100},rectifiedFlowTrainingConfig:{num_rectified_steps:4,epochs_per_rectified_step:2e3,batchSize:1024,num_simulation_steps:200}},stylingSettings:{global:{figureWidth:800},layout:{sourceCenterX:.25,targetCenterX:.75},label:{fontSize:28,fontWeight:400,yShiftFactor:.5,color:"#666",outlineColor:"#f9f9f9",outlineOpacity:.5},scatterPlot:{radius:5,opacity:.25,color:"#3b82f6",yShiftFactor:-.5,scaleFactor:.8,clippingRadius:2},figureLatex:{color:"#666",outline:!0,outlineColor:"#fff",outlineWidth:3,outlineOpacity:.5,fontSize:20,latexLabelOffsetY:-10},trajectory:{color:"#f17720",strokeWidth:4.5,pointRadius:4,fullOpacity:.15,progressOpacity:.8},contour:{bandwidth:15,thresholds:3,opacity:.3,fillColor:"#f17720",blendMode:void 0}}};const UC=1e-7,GC=1e-4;class ox{constructor(t,e){this.backend=t,this.dataMover=e,this.data=new WeakMap,this.dataIdsCount=0}get(t){return this.data.has(t)||this.dataMover.moveData(this.backend,t),this.data.get(t)}set(t,e){this.dataIdsCount++,this.data.set(t,e)}has(t){return this.data.has(t)}delete(t){return this.dataIdsCount--,this.data.delete(t)}numDataIds(){return this.dataIdsCount}}class qh{refCount(t){return Ve("refCount")}incRef(t){return Ve("incRef")}timerAvailable(){return!0}time(t){return Ve("time")}read(t){return Ve("read")}readSync(t){return Ve("readSync")}readToGPU(t,e){return Ve("readToGPU")}numDataIds(){return Ve("numDataIds")}disposeData(t,e){return Ve("disposeData")}write(t,e,s){return Ve("write")}move(t,e,s,r,o){return Ve("move")}createTensorFromGPUData(t,e,s){return Ve("createTensorFromGPUData")}memory(){return Ve("memory")}floatPrecision(){return Ve("floatPrecision")}epsilon(){return this.floatPrecision()===32?UC:GC}dispose(){return Ve("dispose")}}function Ve(n){throw new Error(`'${n}' not yet implemented or not found in the registry. This kernel may not be supported by the tfjs backend you have chosen`)}function HC(n){let t=n.length,e=0;for(;t>0;)e=Math.random()*t|0,t--,_r(n,t,e)}function sr(n,t,e){return Math.max(n,Math.min(t,e))}function jh(n){return n%2===0?n:n+1}function _r(n,t,e){const s=n[t];n[t]=n[e],n[e]=s}function qC(n){let t=0;for(let e=0;e<n.length;e++)t+=n[e];return t}function S(n,t){if(!n)throw new Error(typeof t=="string"?t:t())}function Kh(n,t,e=""){S(Et(n,t),()=>e+` Shapes ${n} and ${t} must match`)}function ix(n){S(n!=null,()=>"The input to the tensor constructor must be a non-null value.")}function q(n){if(n.length===0)return 1;let t=n[0];for(let e=1;e<n.length;e++)t*=n[e];return t}function Et(n,t){if(n===t)return!0;if(n==null||t==null||n.length!==t.length)return!1;for(let e=0;e<n.length;e++)if(n[e]!==t[e])return!1;return!0}function Hr(n){return n%1===0}function nh(n){const t=Math.ceil(Math.sqrt(n));return[t,Math.ceil(n/t)]}function Pr(n,t){return t<=n.length?n:n+" ".repeat(t-n.length)}function Up(n,t=r=>0,e,s){return new Promise((r,o)=>{let i=0;const a=()=>{if(n()){r();return}i++;const l=t(i);if(e!=null&&i>=e){o();return}s!=null?s(a,l):setTimeout(a,l)};a()})}function ax(n,t){let e=1,s=-1;for(let o=0;o<n.length;++o)if(n[o]>=0)e*=n[o];else if(n[o]===-1){if(s!==-1)throw Error(`Shapes can only have 1 implicit size. Found -1 at dim ${s} and dim ${o}`);s=o}else if(n[o]<0)throw Error(`Shapes can not be < 0. Found ${n[o]} at dim ${o}`);if(s===-1){if(t>0&&t!==e)throw Error(`Size(${t}) must match the product of shape ${n}`);return n}if(e===0)throw Error(`Cannot infer the missing size in [${n}] when there are 0 elements`);if(t%e!==0)throw Error(`The implicit shape can't be a fractional number. Got ${t} / ${e}`);const r=n.slice();return r[s]=t/e,r}function vt(n,t){const e=t.length;return n=n==null?t.map((s,r)=>r):[].concat(n),S(n.every(s=>s>=-e&&s<e),()=>`All values in axis param must be in range [-${e}, ${e}) but got axis ${n}`),S(n.every(s=>Hr(s)),()=>`All values in axis param must be integers but got axis ${n}`),n.map(s=>s<0?e+s:s)}function Ds(n,t){const e=[],s=[],r=t!=null&&Array.isArray(t)&&t.length===0,o=t==null||r?null:vt(t,n).sort();let i=0;for(let a=0;a<n.length;++a){if(o!=null){if(o[i]===a&&n[a]!==1)throw new Error(`Can't squeeze axis ${a} since its dim '${n[a]}' is not 1`);(o[i]==null||o[i]>a)&&n[a]===1&&(e.push(n[a]),s.push(a)),o[i]<=a&&i++}n[a]!==1&&(e.push(n[a]),s.push(a))}return{newShape:e,keptDims:s}}function Ce(n,t){return Xt(n,t)}function Xt(n,t){let e=null;if(n==null||n==="float32")e=new Float32Array(t);else if(n==="int32")e=new Int32Array(t);else if(n==="bool")e=new Uint8Array(t);else if(n==="string")e=new Array(t);else throw new Error(`Unknown data type ${n}`);return e}function jC(n,t){for(let e=0;e<n.length;e++){const s=n[e];if(isNaN(s)||!isFinite(s))throw Error(`A tensor of type ${t} being uploaded contains ${s}.`)}}function KC(n){return n==="bool"||n==="complex64"||n==="float32"||n==="int32"||n==="string"}function lx(n,t){return!(t==="complex64"||t==="float32"&&n!=="complex64"||t==="int32"&&n!=="float32"&&n!=="complex64"||t==="bool"&&n==="bool")}function ll(n){if(n==="float32"||n==="int32")return 4;if(n==="complex64")return 8;if(n==="bool")return 1;throw new Error(`Unknown dtype ${n}`)}function XC(n){if(n==null)return 0;let t=0;return n.forEach(e=>t+=e.length),t}function oi(n){return typeof n=="string"||n instanceof String}function YC(n){return typeof n=="boolean"}function sh(n){return typeof n=="number"}function io(n){return Array.isArray(n)?io(n[0]):n instanceof Float32Array?"float32":n instanceof Int32Array||n instanceof Uint8Array||n instanceof Uint8ClampedArray?"int32":sh(n)?"float32":oi(n)?"string":YC(n)?"bool":"float32"}function rh(n){return!!(n&&n.constructor&&n.call&&n.apply)}function oh(n,t){for(let e=t;e<n;++e)if(n%e===0)return e;return n}function lt(n){const t=n.length;if(t<2)return[];const e=new Array(t-1);e[t-2]=n[t-1];for(let s=t-3;s>=0;--s)e[s]=e[s+1]*n[s+1];return e}function cx(n,t,e,s=!1){const r=new Array;if(t.length===1){const o=t[0]*(s?2:1);for(let i=0;i<o;i++)r[i]=e[n+i]}else{const o=t[0],i=t.slice(1),a=i.reduce((l,c)=>l*c)*(s?2:1);for(let l=0;l<o;l++)r[l]=cx(n+l*a,i,e,s)}return r}function $n(n,t,e=!1){if(n.length===0)return t[0];const s=n.reduce((r,o)=>r*o)*(e?2:1);if(s===0)return[];if(s!==t.length)throw new Error(`[${n}] does not match the input size ${t.length}${e?" for a complex tensor":""}.`);return cx(0,n,t,e)}function ZC(n,t){if(Array.isArray(n))return n;if(t==="float32")return n instanceof Float32Array?n:new Float32Array(n);if(t==="int32")return n instanceof Int32Array?n:new Int32Array(n);if(t==="bool"||t==="string")return Uint8Array.from(new Int32Array(n));throw new Error(`Unknown dtype ${t}`)}function Xh(n,t){const e=$e(n,t);for(let s=0;s<e.length;s++)e[s]=1;return e}function $e(n,t){if(t==null||t==="float32"||t==="complex64")return new Float32Array(n);if(t==="int32")return new Int32Array(n);if(t==="bool")return new Uint8Array(n);throw new Error(`Unknown data type ${t}`)}function ux(n,t){const e=n.reduce((s,r)=>s*r,1);if(t==null||t==="float32")return $n(n,new Float32Array(e));if(t==="int32")return $n(n,new Int32Array(e));if(t==="bool")return $n(n,new Uint8Array(e));throw new Error(`Unknown data type ${t}`)}function us(n){n.forEach(t=>{S(Number.isInteger(t)&&t>=0,()=>`Tensor must have a shape comprised of positive integers but got shape [${n}].`)})}function Pn(n,t,e){if(t===0)return 0;if(t===1)return n[0];let s=n[n.length-1];for(let r=0;r<n.length-1;++r)s+=e[r]*n[r];return s}function ao(n,t,e){if(t===0)return[];if(t===1)return[n];const s=new Array(t);for(let r=0;r<s.length-1;++r)s[r]=Math.floor(n/e[r]),n-=s[r]*e[r];return s[s.length-1]=n,s}function Yh(n){return n&&n.then&&typeof n.then=="function"}const Gp="tfjsflags";class JC{constructor(t){this.global=t,this.flags={},this.flagRegistry={},this.urlFlags={},this.getQueryParams=QC,this.populateURLFlags()}setPlatform(t,e){this.platform!=null&&(W().getBool("IS_TEST")||W().getBool("PROD")||console.warn(`Platform ${this.platformName} has already been set. Overwriting the platform with ${t}.`)),this.platformName=t,this.platform=e}registerFlag(t,e,s){if(this.flagRegistry[t]={evaluationFn:e,setHook:s},this.urlFlags[t]!=null){const r=this.urlFlags[t];W().getBool("IS_TEST")||W().getBool("PROD")||console.warn(`Setting feature override from URL ${t}: ${r}.`),this.set(t,r)}}async getAsync(t){return t in this.flags?this.flags[t]:(this.flags[t]=await this.evaluateFlag(t),this.flags[t])}get(t){if(t in this.flags)return this.flags[t];const e=this.evaluateFlag(t);if(Yh(e))throw new Error(`Flag ${t} cannot be synchronously evaluated. Please use getAsync() instead.`);return this.flags[t]=e,this.flags[t]}getNumber(t){return this.get(t)}getBool(t){return this.get(t)}getString(t){return this.get(t)}getFlags(){return this.flags}get features(){return this.flags}set(t,e){if(this.flagRegistry[t]==null)throw new Error(`Cannot set flag ${t} as it has not been registered.`);this.flags[t]=e,this.flagRegistry[t].setHook!=null&&this.flagRegistry[t].setHook(e)}evaluateFlag(t){if(this.flagRegistry[t]==null)throw new Error(`Cannot evaluate flag '${t}': no evaluation function found.`);return this.flagRegistry[t].evaluationFn()}setFlags(t){this.flags=Object.assign({},t)}reset(){this.flags={},this.urlFlags={},this.populateURLFlags()}populateURLFlags(){if(typeof this.global>"u"||typeof this.global.location>"u"||typeof this.global.location.search>"u")return;const t=this.getQueryParams(this.global.location.search);Gp in t&&t[Gp].split(",").forEach(s=>{const[r,o]=s.split(":");this.urlFlags[r]=e$(r,o)})}}function QC(n){const t={};return n.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g,(e,...s)=>(t$(t,s[0],s[1]),s.join("="))),t}function t$(n,t,e){n[decodeURIComponent(t)]=decodeURIComponent(e||"")}function e$(n,t){const e=t.toLowerCase();return e==="true"||e==="false"?e==="true":`${+e}`===e?+e:t}function W(){return hx}let hx=null;function n$(n){hx=n}let Du;function dx(){if(Du==null){let n;if(typeof window<"u")n=window;else if(typeof global<"u")n=global;else if(typeof process<"u")n=process;else if(typeof self<"u")n=self;else throw new Error("Could not find a global object");Du=n}return Du}function s$(){const n=dx();return n._tfGlobals==null&&(n._tfGlobals=new Map),n._tfGlobals}function Zh(n,t){const e=s$();if(e.has(n))return e.get(n);{const s=t();return e.set(n,s),e.get(n)}}const Xl="Abs",ii="Acos",ai="Acosh",lo="Add",Jh="AddN",Qh="All",td="Any",Yl="ArgMax",Zl="ArgMin",li="Asin",ci="Asinh",ui="Atan",hi="Atanh",di="Atan2",Jl="AvgPool",ed="AvgPoolGrad",Ql="AvgPool3D",nd="AvgPool3DGrad",tc="BatchMatMul",ec="BatchToSpaceND",sd="Bincount",rd="BitwiseAnd",r$="BroadcastTo",fx="BroadcastArgs",fi="Cast",pi="Ceil",mi="ClipByValue",od="Complex",nc="ComplexAbs",sc="Concat",rc="Conv2D",id="Conv2DBackpropFilter",oc="Conv2DBackpropInput",ic="Conv3D",ad="Conv3DBackpropFilterV2",ld="Conv3DBackpropInputV2",gi="Cos",xi="Cosh",cd="Cumprod",ac="Cumsum",ud="CropAndResize",hd="DenseBincount",dd="DepthToSpace",lc="DepthwiseConv2dNative",fd="DepthwiseConv2dNativeBackpropFilter",pd="DepthwiseConv2dNativeBackpropInput",px="Diag",cc="Dilation2D",ih="Dilation2DBackpropInput",ah="Dilation2DBackpropFilter",o$="Draw",bi="RealDiv",md="Einsum",yi="Elu",gd="EluGrad",wi="Erf",uc="Equal",vi="Exp",hc="ExpandDims",Ci="Expm1",xd="FFT",bd="Fill",yd="FlipLeftRight",$i="Floor",ki="FloorDiv",dc="FusedBatchNorm",fc="GatherV2",mx="GatherNd",pc="Greater",Ii="GreaterEqual",Si="Identity",wd="IFFT",vd="Imag",Ni="IsFinite",Ti="IsInf",Ei="IsNan",mc="LeakyRelu",gc="Less",xc="LessEqual",gx="LinSpace",Ri="Log",Ai="Log1p",bc="LogicalAnd",yc="LogicalNot",wc="LogicalOr",i$="LogSoftmax",vc="LRN",Cd="LRNGrad",Cc="Max",Di="Maximum",$c="MaxPool",$d="MaxPoolGrad",kc="MaxPool3D",kd="MaxPool3DGrad",xx="MaxPoolWithArgmax",Ic="Mean",Sc="Min",_i="Minimum",Nc="MirrorPad",Fi="Mod",bx="Multinomial",Oi="Multiply",Tc="Neg",Ec="NotEqual",Id="NonMaxSuppressionV3",Sd="NonMaxSuppressionV4",Nd="NonMaxSuppressionV5",Rc="OnesLike",Ac="OneHot",Dc="Pack",_c="PadV2",Mi="Pow",Fc="Prelu",Oc="Prod",yx="RaggedGather",wx="RaggedRange",vx="RaggedTensorToTensor",Td="Range",Ed="Real",Li="Reciprocal",Pi="Relu",Mc="Reshape",Lc="ResizeNearestNeighbor",Rd="ResizeNearestNeighborGrad",Pc="ResizeBilinear",Ad="ResizeBilinearGrad",zi="Relu6",zc="Reverse",Bi="Round",Vi="Rsqrt",Cx="ScatterNd",$x="TensorScatterUpdate",kx="SearchSorted",Bc="Select",Wi="Selu",Vc="Slice",Ui="Sin",Gi="Sinh",Hi="Sign",qi="Sigmoid",ji="Softplus",Ki="Sqrt",Wc="Sum",Uc="SpaceToBatchND",Gc="SplitV",Hc="Softmax",Ix="SparseFillEmptyRows",Sx="SparseReshape",Nx="SparseSegmentMean",Tx="SparseSegmentSum",Ex="SparseToDense",Xi="SquaredDifference",Dd="Square",_d="StaticRegexReplace",Fd="StridedSlice",Rx="StringNGrams",Ax="StringSplit",Dx="StringToHashBucketFast",Yi="Sub",Zi="Tan",Ji="Tanh",Qi="Tile",Od="TopK",Md="Transform",zr="Transpose",Ld="Unique",qc="Unpack",jc="UnsortedSegmentSum",Kc="ZerosLike",ta="Step",a$="FromPixels",Pd="RotateWithOffset",cl="_FusedMatMul",ul="FusedConv2D",_x="FusedDepthwiseConv2D";function Ze(...n){W().getBool("IS_TEST")||W().getBool("PROD")||console.warn(...n)}function l$(...n){W().getBool("IS_TEST")||W().getBool("PROD")||console.log(...n)}const hl=Zh("kernelRegistry",()=>new Map),lh=Zh("gradRegistry",()=>new Map);function Hp(n,t){const e=Ox(n,t);return hl.get(e)}function qp(n){return lh.get(n)}function jp(n){const t=hl.entries(),e=[];for(;;){const{done:s,value:r}=t.next();if(s)break;const[o,i]=r,[a]=o.split("_");a===n&&e.push(i)}return e}function Fx(n){const{kernelName:t,backendName:e}=n,s=Ox(t,e);hl.has(s)&&Ze(`The kernel '${t}' for backend '${e}' is already registered`),hl.set(s,n)}function c$(n){const{kernelName:t}=n;lh.has(t)&&W().getBool("DEBUG")&&Ze(`Overriding the gradient for '${t}'`),lh.set(t,n)}function Ox(n,t){return`${t}_${n}`}function Mx(n){return n instanceof Float32Array||n instanceof Int32Array||n instanceof Uint8Array||n instanceof Uint8ClampedArray}function u$(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}function h$(n){if(Object.prototype.hasOwnProperty.call(n,"__esModule"))return n;var t=n.default;if(typeof t=="function"){var e=function s(){var r=!1;try{r=this instanceof s}catch{}return r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};e.prototype=t.prototype}else e={};return Object.defineProperty(e,"__esModule",{value:!0}),Object.keys(n).forEach(function(s){var r=Object.getOwnPropertyDescriptor(n,s);Object.defineProperty(e,s,r.get?r:{enumerable:!0,get:function(){return n[s]}})}),e}var _u,Kp;function d$(){if(Kp)return _u;Kp=1,_u=t;var n=null;try{n=new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0,97,115,109,1,0,0,0,1,13,2,96,0,1,127,96,4,127,127,127,127,1,127,3,7,6,0,1,1,1,1,1,6,6,1,127,1,65,0,11,7,50,6,3,109,117,108,0,1,5,100,105,118,95,115,0,2,5,100,105,118,95,117,0,3,5,114,101,109,95,115,0,4,5,114,101,109,95,117,0,5,8,103,101,116,95,104,105,103,104,0,0,10,191,1,6,4,0,35,0,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,126,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,127,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,128,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,129,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,130,34,4,66,32,135,167,36,0,32,4,167,11])),{}).exports}catch{}function t(I,C,R){this.low=I|0,this.high=C|0,this.unsigned=!!R}t.prototype.__isLong__,Object.defineProperty(t.prototype,"__isLong__",{value:!0});function e(I){return(I&&I.__isLong__)===!0}t.isLong=e;var s={},r={};function o(I,C){var R,A,O;return C?(I>>>=0,(O=0<=I&&I<256)&&(A=r[I],A)?A:(R=a(I,(I|0)<0?-1:0,!0),O&&(r[I]=R),R)):(I|=0,(O=-128<=I&&I<128)&&(A=s[I],A)?A:(R=a(I,I<0?-1:0,!1),O&&(s[I]=R),R))}t.fromInt=o;function i(I,C){if(isNaN(I))return C?b:x;if(C){if(I<0)return b;if(I>=p)return N}else{if(I<=-m)return T;if(I+1>=m)return $}return I<0?i(-I,C).neg():a(I%f|0,I/f|0,C)}t.fromNumber=i;function a(I,C,R){return new t(I,C,R)}t.fromBits=a;var l=Math.pow;function c(I,C,R){if(I.length===0)throw Error("empty string");if(I==="NaN"||I==="Infinity"||I==="+Infinity"||I==="-Infinity")return x;if(typeof C=="number"?(R=C,C=!1):C=!!C,R=R||10,R<2||36<R)throw RangeError("radix");var A;if((A=I.indexOf("-"))>0)throw Error("interior hyphen");if(A===0)return c(I.substring(1),C,R).neg();for(var O=i(l(R,8)),M=x,z=0;z<I.length;z+=8){var U=Math.min(8,I.length-z),B=parseInt(I.substring(z,z+U),R);if(U<8){var G=i(l(R,U));M=M.mul(G).add(i(B))}else M=M.mul(O),M=M.add(i(B))}return M.unsigned=C,M}t.fromString=c;function u(I,C){return typeof I=="number"?i(I,C):typeof I=="string"?c(I,C):a(I.low,I.high,typeof C=="boolean"?C:I.unsigned)}t.fromValue=u;var h=65536,d=1<<24,f=h*h,p=f*f,m=p/2,g=o(d),x=o(0);t.ZERO=x;var b=o(0,!0);t.UZERO=b;var w=o(1);t.ONE=w;var y=o(1,!0);t.UONE=y;var v=o(-1);t.NEG_ONE=v;var $=a(-1,2147483647,!1);t.MAX_VALUE=$;var N=a(-1,-1,!0);t.MAX_UNSIGNED_VALUE=N;var T=a(0,-2147483648,!1);t.MIN_VALUE=T;var k=t.prototype;return k.toInt=function(){return this.unsigned?this.low>>>0:this.low},k.toNumber=function(){return this.unsigned?(this.high>>>0)*f+(this.low>>>0):this.high*f+(this.low>>>0)},k.toString=function(C){if(C=C||10,C<2||36<C)throw RangeError("radix");if(this.isZero())return"0";if(this.isNegative())if(this.eq(T)){var R=i(C),A=this.div(R),O=A.mul(R).sub(this);return A.toString(C)+O.toInt().toString(C)}else return"-"+this.neg().toString(C);for(var M=i(l(C,6),this.unsigned),z=this,U="";;){var B=z.div(M),G=z.sub(B.mul(M)).toInt()>>>0,j=G.toString(C);if(z=B,z.isZero())return j+U;for(;j.length<6;)j="0"+j;U=""+j+U}},k.getHighBits=function(){return this.high},k.getHighBitsUnsigned=function(){return this.high>>>0},k.getLowBits=function(){return this.low},k.getLowBitsUnsigned=function(){return this.low>>>0},k.getNumBitsAbs=function(){if(this.isNegative())return this.eq(T)?64:this.neg().getNumBitsAbs();for(var C=this.high!=0?this.high:this.low,R=31;R>0&&(C&1<<R)==0;R--);return this.high!=0?R+33:R+1},k.isZero=function(){return this.high===0&&this.low===0},k.eqz=k.isZero,k.isNegative=function(){return!this.unsigned&&this.high<0},k.isPositive=function(){return this.unsigned||this.high>=0},k.isOdd=function(){return(this.low&1)===1},k.isEven=function(){return(this.low&1)===0},k.equals=function(C){return e(C)||(C=u(C)),this.unsigned!==C.unsigned&&this.high>>>31===1&&C.high>>>31===1?!1:this.high===C.high&&this.low===C.low},k.eq=k.equals,k.notEquals=function(C){return!this.eq(C)},k.neq=k.notEquals,k.ne=k.notEquals,k.lessThan=function(C){return this.comp(C)<0},k.lt=k.lessThan,k.lessThanOrEqual=function(C){return this.comp(C)<=0},k.lte=k.lessThanOrEqual,k.le=k.lessThanOrEqual,k.greaterThan=function(C){return this.comp(C)>0},k.gt=k.greaterThan,k.greaterThanOrEqual=function(C){return this.comp(C)>=0},k.gte=k.greaterThanOrEqual,k.ge=k.greaterThanOrEqual,k.compare=function(C){if(e(C)||(C=u(C)),this.eq(C))return 0;var R=this.isNegative(),A=C.isNegative();return R&&!A?-1:!R&&A?1:this.unsigned?C.high>>>0>this.high>>>0||C.high===this.high&&C.low>>>0>this.low>>>0?-1:1:this.sub(C).isNegative()?-1:1},k.comp=k.compare,k.negate=function(){return!this.unsigned&&this.eq(T)?T:this.not().add(w)},k.neg=k.negate,k.add=function(C){e(C)||(C=u(C));var R=this.high>>>16,A=this.high&65535,O=this.low>>>16,M=this.low&65535,z=C.high>>>16,U=C.high&65535,B=C.low>>>16,G=C.low&65535,j=0,K=0,Y=0,Z=0;return Z+=M+G,Y+=Z>>>16,Z&=65535,Y+=O+B,K+=Y>>>16,Y&=65535,K+=A+U,j+=K>>>16,K&=65535,j+=R+z,j&=65535,a(Y<<16|Z,j<<16|K,this.unsigned)},k.subtract=function(C){return e(C)||(C=u(C)),this.add(C.neg())},k.sub=k.subtract,k.multiply=function(C){if(this.isZero())return x;if(e(C)||(C=u(C)),n){var R=n.mul(this.low,this.high,C.low,C.high);return a(R,n.get_high(),this.unsigned)}if(C.isZero())return x;if(this.eq(T))return C.isOdd()?T:x;if(C.eq(T))return this.isOdd()?T:x;if(this.isNegative())return C.isNegative()?this.neg().mul(C.neg()):this.neg().mul(C).neg();if(C.isNegative())return this.mul(C.neg()).neg();if(this.lt(g)&&C.lt(g))return i(this.toNumber()*C.toNumber(),this.unsigned);var A=this.high>>>16,O=this.high&65535,M=this.low>>>16,z=this.low&65535,U=C.high>>>16,B=C.high&65535,G=C.low>>>16,j=C.low&65535,K=0,Y=0,Z=0,tt=0;return tt+=z*j,Z+=tt>>>16,tt&=65535,Z+=M*j,Y+=Z>>>16,Z&=65535,Z+=z*G,Y+=Z>>>16,Z&=65535,Y+=O*j,K+=Y>>>16,Y&=65535,Y+=M*G,K+=Y>>>16,Y&=65535,Y+=z*B,K+=Y>>>16,Y&=65535,K+=A*j+O*G+M*B+z*U,K&=65535,a(Z<<16|tt,K<<16|Y,this.unsigned)},k.mul=k.multiply,k.divide=function(C){if(e(C)||(C=u(C)),C.isZero())throw Error("division by zero");if(n){if(!this.unsigned&&this.high===-2147483648&&C.low===-1&&C.high===-1)return this;var R=(this.unsigned?n.div_u:n.div_s)(this.low,this.high,C.low,C.high);return a(R,n.get_high(),this.unsigned)}if(this.isZero())return this.unsigned?b:x;var A,O,M;if(this.unsigned){if(C.unsigned||(C=C.toUnsigned()),C.gt(this))return b;if(C.gt(this.shru(1)))return y;M=b}else{if(this.eq(T)){if(C.eq(w)||C.eq(v))return T;if(C.eq(T))return w;var z=this.shr(1);return A=z.div(C).shl(1),A.eq(x)?C.isNegative()?w:v:(O=this.sub(C.mul(A)),M=A.add(O.div(C)),M)}else if(C.eq(T))return this.unsigned?b:x;if(this.isNegative())return C.isNegative()?this.neg().div(C.neg()):this.neg().div(C).neg();if(C.isNegative())return this.div(C.neg()).neg();M=x}for(O=this;O.gte(C);){A=Math.max(1,Math.floor(O.toNumber()/C.toNumber()));for(var U=Math.ceil(Math.log(A)/Math.LN2),B=U<=48?1:l(2,U-48),G=i(A),j=G.mul(C);j.isNegative()||j.gt(O);)A-=B,G=i(A,this.unsigned),j=G.mul(C);G.isZero()&&(G=w),M=M.add(G),O=O.sub(j)}return M},k.div=k.divide,k.modulo=function(C){if(e(C)||(C=u(C)),n){var R=(this.unsigned?n.rem_u:n.rem_s)(this.low,this.high,C.low,C.high);return a(R,n.get_high(),this.unsigned)}return this.sub(this.div(C).mul(C))},k.mod=k.modulo,k.rem=k.modulo,k.not=function(){return a(~this.low,~this.high,this.unsigned)},k.and=function(C){return e(C)||(C=u(C)),a(this.low&C.low,this.high&C.high,this.unsigned)},k.or=function(C){return e(C)||(C=u(C)),a(this.low|C.low,this.high|C.high,this.unsigned)},k.xor=function(C){return e(C)||(C=u(C)),a(this.low^C.low,this.high^C.high,this.unsigned)},k.shiftLeft=function(C){return e(C)&&(C=C.toInt()),(C&=63)===0?this:C<32?a(this.low<<C,this.high<<C|this.low>>>32-C,this.unsigned):a(0,this.low<<C-32,this.unsigned)},k.shl=k.shiftLeft,k.shiftRight=function(C){return e(C)&&(C=C.toInt()),(C&=63)===0?this:C<32?a(this.low>>>C|this.high<<32-C,this.high>>C,this.unsigned):a(this.high>>C-32,this.high>=0?0:-1,this.unsigned)},k.shr=k.shiftRight,k.shiftRightUnsigned=function(C){if(e(C)&&(C=C.toInt()),C&=63,C===0)return this;var R=this.high;if(C<32){var A=this.low;return a(A>>>C|R<<32-C,R>>>C,this.unsigned)}else return C===32?a(R,0,this.unsigned):a(R>>>C-32,0,this.unsigned)},k.shru=k.shiftRightUnsigned,k.shr_u=k.shiftRightUnsigned,k.toSigned=function(){return this.unsigned?a(this.low,this.high,!1):this},k.toUnsigned=function(){return this.unsigned?this:a(this.low,this.high,!0)},k.toBytes=function(C){return C?this.toBytesLE():this.toBytesBE()},k.toBytesLE=function(){var C=this.high,R=this.low;return[R&255,R>>>8&255,R>>>16&255,R>>>24,C&255,C>>>8&255,C>>>16&255,C>>>24]},k.toBytesBE=function(){var C=this.high,R=this.low;return[C>>>24,C>>>16&255,C>>>8&255,C&255,R>>>24,R>>>16&255,R>>>8&255,R&255]},t.fromBytes=function(C,R,A){return A?t.fromBytesLE(C,R):t.fromBytesBE(C,R)},t.fromBytesLE=function(C,R){return new t(C[0]|C[1]<<8|C[2]<<16|C[3]<<24,C[4]|C[5]<<8|C[6]<<16|C[7]<<24,R)},t.fromBytesBE=function(C,R){return new t(C[4]<<24|C[5]<<16|C[6]<<8|C[7],C[0]<<24|C[1]<<16|C[2]<<8|C[3],R)},_u}var Lx=d$();const Px=u$(Lx),f$=PC({__proto__:null,default:Px},[Lx]);const js=Px||f$;function Xc(n){return js.fromString(n,!0,16)}const zx=Xc("c3a5c85c97cb3127"),qs=Xc("b492b66fbe98f273"),Ee=Xc("9ae16a3b2f90404f");function ch(n){return n.xor(n.shru(47))}function Bx(n,t,e){const s=n.slice(t,t+e);return js.fromBytes(Array.from(s),!0,!0)}function Pt(n,t){return Bx(n,t,8)}function Xp(n,t){return Bx(n,t,4)}function de(n,t){return t===0?n:n.shru(t).or(n.shl(64-t))}function Cs(n,t,e=Xc("9ddfea08eb382d69")){let s=n.xor(t).mul(e);s=s.xor(s.shru(47));let r=t.xor(s).mul(e);return r=r.xor(r.shru(47)),r=r.mul(e),r}function p$(n,t,e,s,r,o){r=r.add(n),o=de(o.add(r).add(s),21);const i=r;return r=r.add(t),r=r.add(e),o=o.add(de(r,44)),[r.add(s),o.add(i)]}function Ra(n,t,e,s){return p$(Pt(n,t),Pt(n,t+8),Pt(n,t+16),Pt(n,t+24),e,s)}function m$(n,t=n.length){if(t>=8){const e=Ee.add(t*2),s=Pt(n,0).add(Ee),r=Pt(n,t-8),o=de(r,37).mul(e).add(s),i=de(s,25).add(r).mul(e);return Cs(o,i,e)}if(t>=4){const e=Ee.add(t*2),s=Xp(n,0);return Cs(s.shl(3).add(t),Xp(n,t-4),e)}if(t>0){const e=n[0],s=n[t>>1],r=n[t-1],o=e+(s<<8),i=t+(r<<2);return ch(Ee.mul(o).xor(zx.mul(i))).mul(Ee)}return Ee}function g$(n,t=n.length){const e=Ee.add(t*2),s=Pt(n,0).mul(qs),r=Pt(n,8),o=Pt(n,t-8).mul(e),i=Pt(n,t-16).mul(Ee);return Cs(de(s.add(r),43).add(de(o,30)).add(i),s.add(de(r.add(Ee),18)).add(o),e)}function x$(n,t=n.length){const e=Ee.add(t*2),s=Pt(n,0).mul(Ee),r=Pt(n,8),o=Pt(n,t-8).mul(e),i=Pt(n,t-16).mul(Ee),a=de(s.add(r),43).add(de(o,30)).add(i),l=Cs(a,s.add(de(r.add(Ee),18)).add(o),e),c=Pt(n,16).mul(e),u=Pt(n,24),h=a.add(Pt(n,t-32)).mul(e),d=l.add(Pt(n,t-24)).mul(e);return Cs(de(c.add(u),43).add(de(h,30)).add(d),c.add(de(u.add(s),18)).add(h),e)}function b$(n,t=n.length){const e=js.fromNumber(81,!0);if(t<=32)return t<=16?m$(n,t):g$(n,t);if(t<=64)return x$(n,t);let s=e,r=e.mul(qs).add(113),o=ch(r.mul(Ee).add(113)).mul(Ee),i=[js.UZERO,js.UZERO],a=[js.UZERO,js.UZERO];s=s.mul(Ee).add(Pt(n,0));let l=0;const c=(t-1>>6)*64,u=c+(t-1&63)-63;do s=de(s.add(r).add(i[0]).add(Pt(n,l+8)),37).mul(qs),r=de(r.add(i[1]).add(Pt(n,l+48)),42).mul(qs),s=s.xor(a[1]),r=r.add(i[0]).add(Pt(n,l+40)),o=de(o.add(a[0]),33).mul(qs),i=Ra(n,l,i[1].mul(qs),s.add(a[0])),a=Ra(n,l+32,o.add(a[1]),r.add(Pt(n,l+16))),[o,s]=[s,o],l+=64;while(l!==c);const h=qs.add(o.and(255).shl(1));return l=u,a[0]=a[0].add(t-1&63),i[0]=i[0].add(a[0]),a[0]=a[0].add(i[0]),s=de(s.add(r).add(i[0]).add(Pt(n,l+8)),37).mul(h),r=de(r.add(i[1]).add(Pt(n,l+48)),42).mul(h),s=s.xor(a[1].mul(9)),r=r.add(i[0].mul(9).add(Pt(n,l+40))),o=de(o.add(a[0]),33).mul(h),i=Ra(n,l,i[1].mul(h),s.add(a[0])),a=Ra(n,l+32,o.add(a[1]),r.add(Pt(n,l+16))),[o,s]=[s,o],Cs(Cs(i[0],a[0],h).add(ch(r).mul(zx)).add(o),Cs(i[1],a[1],h).add(s),h)}function _s(n,t){return t==="string"?$s(n):wr([n],t)}function y$(n,t){return n instanceof Float32Array&&t==="float32"||n instanceof Int32Array&&t==="int32"||n instanceof Uint8Array&&t==="bool"}function wr(n,t){if(t==="string")throw new Error("Cannot convert a string[] to a TypedArray");if(Array.isArray(n)&&(n=rr(n)),W().getBool("DEBUG")&&jC(n,t),y$(n,t))return n;if(t==null||t==="float32"||t==="complex64")return new Float32Array(n);if(t==="int32")return new Int32Array(n);if(t==="bool"){const e=new Uint8Array(n.length);for(let s=0;s<e.length;++s)Math.round(n[s])!==0&&(e[s]=1);return e}else throw new Error(`Unknown data type ${t}`)}function Fe(){return W().platform.now()}function $s(n,t="utf-8"){return t=t||"utf-8",W().platform.encode(n,t)}function Ss(n,t="utf-8"){return t=t||"utf-8",W().platform.decode(n,t)}function un(n){return W().platform.isTypedArray!=null?W().platform.isTypedArray(n):Mx(n)}function rr(n,t=[],e=!1){if(t==null&&(t=[]),typeof n=="boolean"||typeof n=="number"||typeof n=="string"||Yh(n)||n==null||un(n)&&e)t.push(n);else if(Array.isArray(n)||un(n))for(let s=0;s<n.length;++s)rr(n[s],t,e);else{let s=-1;for(const r of Object.keys(n))/^([1-9]+[0-9]*|0)$/.test(r)&&(s=Math.max(s,Number(r)));for(let r=0;r<=s;r++)rr(n[r],t,e)}return t}class w${constructor(t,e){this.backendTimer=t,this.logger=e,e==null&&(this.logger=new C$)}profileKernel(t,e,s){let r;const o=()=>{r=s()};let i;const a=Fe();if(this.backendTimer.timerAvailable())i=this.backendTimer.time(o);else{o();for(const c of r)c.dataSync();i=Promise.resolve({kernelMs:Fe()-a})}if(W().getBool("CHECK_COMPUTATION_FOR_ERRORS"))for(let c=0;c<r.length;c++){const u=r[c];u.data().then(h=>{v$(h,u.dtype,t)})}return{kernelName:t,outputs:r,inputs:e,timeMs:i.then(c=>c.kernelMs),extraInfo:i.then(c=>c.getExtraProfileInfo!=null?c.getExtraProfileInfo():"")}}logKernelProfile(t){const{kernelName:e,outputs:s,timeMs:r,inputs:o,extraInfo:i}=t;s.forEach(a=>{Promise.all([a.data(),r,i]).then(l=>{this.logger.logKernelProfile(e,a,l[0],l[1],o,l[2])})})}}function v$(n,t,e){if(t!=="float32")return!1;for(let s=0;s<n.length;s++){const r=n[s];if(isNaN(r)||!isFinite(r))return console.warn(`Found ${r} in the result of '${e}'`),!0}return!1}class C${logKernelProfile(t,e,s,r,o,i){const a=typeof r=="number"?Pr(`${r}ms`,9):r.error,l=Pr(t,25),c=e.rank,u=e.size,h=Pr(e.shape.toString(),14);let d="";for(const f in o){const p=o[f];if(p!=null){const m=p.shape||e.shape,g=m.length;d+=`${f}: ${g}D ${g>0?m:""} `}}console.log(`%c${l}	%c${a}	%c${c}D ${h}	%c${u}	%c${d}	%c${i}`,"font-weight:bold","color:red","color:blue","color: orange","color: green","color: steelblue")}}function $$(n,t,e){const s={},r={};for(let l=0;l<t.length;l++)s[t[l].id]=!0;for(let l=0;l<n.length;l++){const c=n[l],u=c.inputs;for(const h in u){const d=u[h];let f=!1;for(let p=0;p<t.length;p++)if(s[d.id]){c.outputs.forEach(m=>s[m.id]=!0),f=!0,r[c.id]=!0;break}if(f)break}}const o={};o[e.id]=!0;const i={};for(let l=n.length-1;l>=0;l--){const c=n[l],u=c.inputs;for(let h=0;h<c.outputs.length;h++)if(o[c.outputs[h].id]){for(const d in u)o[u[d].id]=!0,i[c.id]=!0;break}}const a=[];for(let l=0;l<n.length;l++){const c=n[l];if(r[c.id]&&i[c.id]){const u={};for(const d in c.inputs){const f=c.inputs[d];s[f.id]&&(u[d]=f)}const h=Object.assign({},c);h.inputs=u,h.outputs=c.outputs,a.push(h)}}return a}function k$(n,t,e,s){for(let r=t.length-1;r>=0;r--){const o=t[r],i=[];if(o.outputs.forEach(l=>{const c=n[l.id];c!=null?i.push(c):i.push(null)}),o.gradient==null)throw new Error(`Cannot compute gradient: gradient function not found for ${o.kernelName}.`);const a=o.gradient(i);for(const l in o.inputs){if(!(l in a))throw new Error(`Cannot backprop through input ${l}. Available gradients found: ${Object.keys(a)}.`);const c=e(()=>a[l]());if(c.dtype!=="float32")throw new Error(`Error in gradient for op ${o.kernelName}. The gradient of input ${l} must have 'float32' dtype, but has '${c.dtype}'`);const u=o.inputs[l];if(!Et(c.shape,u.shape))throw new Error(`Error in gradient for op ${o.kernelName}. The gradient of input '${l}' has shape '${c.shape}', which does not match the shape of the input '${u.shape}'`);if(n[u.id]==null)n[u.id]=c;else{const h=n[u.id];n[u.id]=s(h,c),h.dispose()}}}}const Yp=20,Io=3,Fu=7;function I$(n,t,e,s){const r=lt(t),o=S$(n,t,e,r),i=t.length,a=Xa(n,t,e,r,o),l=["Tensor"];return s&&(l.push(`  dtype: ${e}`),l.push(`  rank: ${i}`),l.push(`  shape: [${t}]`),l.push("  values:")),l.push(a.map(c=>"    "+c).join(`
`)),l.join(`
`)}function S$(n,t,e,s){const r=q(t),o=s[s.length-1],i=new Array(o).fill(0),a=t.length,l=e==="complex64"?Do(n):n;if(a>1)for(let c=0;c<r/o;c++){const u=c*o;for(let h=0;h<o;h++)i[h]=Math.max(i[h],Ao(l[u+h],0,e).length)}return i}function Ao(n,t,e){let s;return Array.isArray(n)?s=`${parseFloat(n[0].toFixed(Fu))} + ${parseFloat(n[1].toFixed(Fu))}j`:oi(n)?s=`'${n}'`:e==="bool"?s=Vx(n):s=parseFloat(n.toFixed(Fu)).toString(),Pr(s,t)}function Vx(n){return n===0?"false":"true"}function Xa(n,t,e,s,r,o=!0){const i=e==="complex64"?2:1,a=t[0],l=t.length;if(l===0){if(e==="complex64"){const m=Do(n);return[Ao(m[0],0,e)]}return e==="bool"?[Vx(n[0])]:[n[0].toString()]}if(l===1){if(a>Yp){const g=Io*i;let x=Array.from(n.slice(0,g)),b=Array.from(n.slice((a-Io)*i,a*i));return e==="complex64"&&(x=Do(x),b=Do(b)),["["+x.map((w,y)=>Ao(w,r[y],e)).join(", ")+", ..., "+b.map((w,y)=>Ao(w,r[a-Io+y],e)).join(", ")+"]"]}return["["+(e==="complex64"?Do(n):Array.from(n)).map((g,x)=>Ao(g,r[x],e)).join(", ")+"]"]}const c=t.slice(1),u=s.slice(1),h=s[0]*i,d=[];if(a>Yp){for(let m=0;m<Io;m++){const g=m*h,x=g+h;d.push(...Xa(n.slice(g,x),c,e,u,r,!1))}d.push("...");for(let m=a-Io;m<a;m++){const g=m*h,x=g+h;d.push(...Xa(n.slice(g,x),c,e,u,r,m===a-1))}}else for(let m=0;m<a;m++){const g=m*h,x=g+h;d.push(...Xa(n.slice(g,x),c,e,u,r,m===a-1))}const f=l===2?",":"";d[0]="["+(a>0?d[0]+f:"");for(let m=1;m<d.length-1;m++)d[m]=" "+d[m]+f;let p=`,
`;for(let m=2;m<l;m++)p+=`
`;return d[d.length-1]=" "+d[d.length-1]+"]"+(o?"":p),d}function Do(n){const t=[];for(let e=0;e<n.length;e+=2)t.push([n[e],n[e+1]]);return t}class be{constructor(t,e,s){if(this.dtype=e,this.shape=t.slice(),this.size=q(t),s!=null){const r=s.length;S(r===this.size,()=>`Length of values '${r}' does not match the size inferred by the shape '${this.size}'.`)}if(e==="complex64")throw new Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");this.values=s||Xt(e,this.size),this.strides=lt(t)}set(t,...e){e.length===0&&(e=[0]),S(e.length===this.rank,()=>`The number of provided coordinates (${e.length}) must match the rank (${this.rank})`);const s=this.locToIndex(e);this.values[s]=t}get(...t){t.length===0&&(t=[0]);let e=0;for(const r of t){if(r<0||r>=this.shape[e]){const o=`Requested out of range element at ${t}.   Buffer shape=${this.shape}`;throw new Error(o)}e++}let s=t[t.length-1];for(let r=0;r<t.length-1;++r)s+=this.strides[r]*t[r];return this.values[s]}locToIndex(t){if(this.rank===0)return 0;if(this.rank===1)return t[0];let e=t[t.length-1];for(let s=0;s<t.length-1;++s)e+=this.strides[s]*t[s];return e}indexToLoc(t){if(this.rank===0)return[];if(this.rank===1)return[t];const e=new Array(this.shape.length);for(let s=0;s<e.length-1;++s)e[s]=Math.floor(t/this.strides[s]),t-=e[s]*this.strides[s];return e[e.length-1]=t,e}get rank(){return this.shape.length}toTensor(){return bn().makeTensor(this.values,this.shape,this.dtype)}}let bn=null,Fr=null;function N$(n){bn=n}function T$(n){Fr=n}class re{constructor(t,e,s,r){this.kept=!1,this.isDisposedInternal=!1,this.shape=t.slice(),this.dtype=e||"float32",this.size=q(t),this.strides=lt(t),this.dataId=s,this.id=r,this.rankType=this.rank<5?this.rank.toString():"higher"}get rank(){return this.shape.length}async buffer(){const t=await this.data();return Fr.buffer(this.shape,this.dtype,t)}bufferSync(){return Fr.buffer(this.shape,this.dtype,this.dataSync())}async array(){const t=await this.data();return $n(this.shape,t,this.dtype==="complex64")}arraySync(){return $n(this.shape,this.dataSync(),this.dtype==="complex64")}async data(){this.throwIfDisposed();const t=bn().read(this.dataId);if(this.dtype==="string"){const e=await t;try{return e.map(s=>Ss(s))}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}}return t}dataToGPU(t){return this.throwIfDisposed(),bn().readToGPU(this.dataId,t)}dataSync(){this.throwIfDisposed();const t=bn().readSync(this.dataId);if(this.dtype==="string")try{return t.map(e=>Ss(e))}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}return t}async bytes(){this.throwIfDisposed();const t=await bn().read(this.dataId);return this.dtype==="string"?t:new Uint8Array(t.buffer)}dispose(){this.isDisposed||(this.kerasMask&&this.kerasMask.dispose(),bn().disposeTensor(this),this.isDisposedInternal=!0)}get isDisposed(){return this.isDisposedInternal}throwIfDisposed(){if(this.isDisposed)throw new Error("Tensor is disposed.")}print(t=!1){return Fr.print(this,t)}clone(){return this.throwIfDisposed(),Fr.clone(this)}toString(t=!1){const e=this.dataSync();return I$(e,this.shape,this.dtype,t)}cast(t){return this.throwIfDisposed(),Fr.cast(this,t)}variable(t=!0,e,s){return this.throwIfDisposed(),bn().makeVariable(this,t,e,s)}}Object.defineProperty(re,Symbol.hasInstance,{value:n=>!!n&&n.data!=null&&n.dataSync!=null&&n.throwIfDisposed!=null});function H(){return Zh("Tensor",()=>re)}H();class dl extends re{constructor(t,e,s,r){super(t.shape,t.dtype,t.dataId,r),this.trainable=e,this.name=s}assign(t){if(t.dtype!==this.dtype)throw new Error(`dtype of the new value (${t.dtype}) and previous value (${this.dtype}) must match`);if(!Et(t.shape,this.shape))throw new Error(`shape of the new value (${t.shape}) and previous value (${this.shape}) must match`);bn().disposeTensor(this),this.dataId=t.dataId,bn().incRef(this,null)}dispose(){bn().disposeVariable(this),this.isDisposedInternal=!0}}Object.defineProperty(dl,Symbol.hasInstance,{value:n=>n instanceof re&&n.assign!=null&&n.assign instanceof Function});var Zp;(function(n){n.R0="R0",n.R1="R1",n.R2="R2",n.R3="R3",n.R4="R4",n.R5="R5",n.R6="R6"})(Zp||(Zp={}));var uh;(function(n){n.float32="float32",n.int32="int32",n.bool="int32",n.complex64="complex64"})(uh||(uh={}));var hh;(function(n){n.float32="float32",n.int32="int32",n.bool="bool",n.complex64="complex64"})(hh||(hh={}));var dh;(function(n){n.float32="float32",n.int32="float32",n.bool="float32",n.complex64="complex64"})(dh||(dh={}));var fh;(function(n){n.float32="complex64",n.int32="complex64",n.bool="complex64",n.complex64="complex64"})(fh||(fh={}));const E$={float32:dh,int32:uh,bool:hh,complex64:fh};function He(n,t){if(n==="string"||t==="string"){if(n==="string"&&t==="string")return"string";throw new Error(`Can not upcast ${n} with ${t}`)}return E$[n][t]}function zd(n){return He(n,"int32")}function Wx(n){return n!=null&&typeof n=="object"&&"texture"in n&&n.texture instanceof WebGLTexture}function Ux(n){return typeof GPUBuffer<"u"&&n!=null&&typeof n=="object"&&"buffer"in n&&n.buffer instanceof GPUBuffer}function Zt(n,t){if(n.dtype===t.dtype)return[n,t];const e=He(n.dtype,t.dtype);return[n.cast(e),t.cast(e)]}function Gx(n){const t=[];return Hx(n,t,new Set),t}function Hx(n,t,e){if(n==null)return;if(n instanceof re){t.push(n);return}if(!R$(n))return;const s=n;for(const r in s){const o=s[r];e.has(o)||(e.add(o),Hx(o,t,e))}}function R$(n){return Array.isArray(n)||typeof n=="object"}function Ou(n){return n.kernelName!=null}class Jp{constructor(){this.registeredVariables={},this.nextTapeNodeId=0,this.numBytes=0,this.numTensors=0,this.numStringTensors=0,this.numDataBuffers=0,this.gradientDepth=0,this.kernelDepth=0,this.scopeStack=[],this.numDataMovesStack=[],this.nextScopeId=0,this.tensorInfo=new WeakMap,this.profiling=!1,this.activeProfile={newBytes:0,newTensors:0,peakBytes:0,kernels:[],result:null,get kernelNames(){return Array.from(new Set(this.kernels.map(t=>t.name)))}}}dispose(){for(const t in this.registeredVariables)this.registeredVariables[t].dispose()}}class qr{constructor(t){this.ENV=t,this.registry={},this.registryFactory={},this.pendingBackendInitId=0,this.state=new Jp}async ready(){if(this.pendingBackendInit!=null)return this.pendingBackendInit.then(()=>{});if(this.backendInstance!=null)return;const t=this.getSortedBackends();for(let e=0;e<t.length;e++){const s=t[e];if(await this.initializeBackend(s).success){await this.setBackend(s);return}}throw new Error("Could not initialize any backends, all backend initializations failed.")}get backend(){if(this.pendingBackendInit!=null)throw new Error(`Backend '${this.backendName}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);if(this.backendInstance==null){const{name:t,asyncInit:e}=this.initializeBackendsAndReturnBest();if(e)throw new Error(`The highest priority backend '${t}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);this.setBackend(t)}return this.backendInstance}backendNames(){return Object.keys(this.registryFactory)}findBackend(t){if(!(t in this.registry))if(t in this.registryFactory){const{asyncInit:e}=this.initializeBackend(t);if(e)return null}else return null;return this.registry[t]}findBackendFactory(t){return t in this.registryFactory?this.registryFactory[t].factory:null}registerBackend(t,e,s=1){return t in this.registryFactory?(Ze(`${t} backend was already registered. Reusing existing backend factory.`),!1):(this.registryFactory[t]={factory:e,priority:s},!0)}async setBackend(t){if(this.registryFactory[t]==null)throw new Error(`Backend name '${t}' not found in registry`);if(this.backendName=t,this.registry[t]==null){this.backendInstance=null;const{success:e,asyncInit:s}=this.initializeBackend(t);if(!(s?await e:e))return!1}return this.backendInstance=this.registry[t],this.setupRegisteredKernels(),this.profiler=new w$(this.backendInstance),!0}setupRegisteredKernels(){jp(this.backendName).forEach(e=>{e.setupFunc!=null&&e.setupFunc(this.backendInstance)})}disposeRegisteredKernels(t){jp(t).forEach(s=>{s.disposeFunc!=null&&s.disposeFunc(this.registry[t])})}initializeBackend(t){const e=this.registryFactory[t];if(e==null)throw new Error(`Cannot initialize backend ${t}, no registration found.`);try{const s=e.factory();if(s&&!(s instanceof qh)&&typeof s.then=="function"){const r=++this.pendingBackendInitId,o=s.then(i=>r<this.pendingBackendInitId?!1:(this.registry[t]=i,this.pendingBackendInit=null,!0)).catch(i=>(r<this.pendingBackendInitId||(this.pendingBackendInit=null,Ze(`Initialization of backend ${t} failed`),Ze(i.stack||i.message)),!1));return this.pendingBackendInit=o,{success:o,asyncInit:!0}}else return this.registry[t]=s,{success:!0,asyncInit:!1}}catch(s){return Ze(`Initialization of backend ${t} failed`),Ze(s.stack||s.message),{success:!1,asyncInit:!1}}}removeBackend(t){if(!(t in this.registryFactory))throw new Error(`${t} backend not found in registry`);this.backendName===t&&this.pendingBackendInit!=null&&this.pendingBackendInitId++,t in this.registry&&(this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t]),delete this.registryFactory[t],this.backendName===t&&(this.pendingBackendInit=null,this.backendName=null,this.backendInstance=null)}getSortedBackends(){if(Object.keys(this.registryFactory).length===0)throw new Error("No backend found in registry.");return Object.keys(this.registryFactory).sort((t,e)=>this.registryFactory[e].priority-this.registryFactory[t].priority)}initializeBackendsAndReturnBest(){const t=this.getSortedBackends();for(let e=0;e<t.length;e++){const s=t[e],{success:r,asyncInit:o}=this.initializeBackend(s);if(o||r)return{name:s,asyncInit:o}}throw new Error("Could not initialize any backends, all backend initializations failed.")}moveData(t,e){const s=this.state.tensorInfo.get(e),r=s.backend,o=this.readSync(e),i=r.refCount(e);r.disposeData(e,!0),s.backend=t,t.move(e,o,s.shape,s.dtype,i),this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack[this.state.numDataMovesStack.length-1]++}tidy(t,e){let s=null;if(e==null){if(typeof t!="function")throw new Error("Please provide a function to tidy()");e=t}else{if(typeof t!="string"&&!(t instanceof String))throw new Error("When calling with two arguments, the first argument to tidy() must be a string");if(typeof e!="function")throw new Error("When calling with two arguments, the 2nd argument to tidy() must be a function");s=t}let r;return this.scopedRun(()=>this.startScope(s),()=>this.endScope(r),()=>(r=e(),r instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),r))}scopedRun(t,e,s){t();try{const r=s();return e(),r}catch(r){throw e(),r}}nextTensorId(){return qr.nextTensorId++}nextVariableId(){return qr.nextVariableId++}clone(t){const e=F.runKernel(Si,{x:t}),s={x:t},r=i=>({x:()=>{const a="float32",l={x:i},c={dtype:a};return F.runKernel(fi,l,c)}}),o=[];return this.addTapeNode(this.state.activeScope.name,s,[e],r,o,{}),e}runKernel(t,e,s){if(this.backendName==null&&this.backend,!(Hp(t,this.backendName)!=null))throw new Error(`Kernel '${t}' not registered for backend '${this.backendName}'`);return this.runKernelFunc({kernelName:t,inputs:e,attrs:s})}shouldCheckForMemLeaks(){return this.ENV.getBool("IS_TEST")}checkKernelForMemLeak(t,e,s){const r=this.backend.numDataIds();let o=0;s.forEach(l=>{o+=l.dtype==="complex64"?3:1});const i=this.state.numDataMovesStack[this.state.numDataMovesStack.length-1],a=r-e-o-i;if(a>0)throw new Error(`Backend '${this.backendName}' has an internal memory leak (${a} data ids) after running '${t}'`)}runKernelFunc(t){let e,s=[];const r=this.isTapeOn(),o=this.state.numBytes,i=this.state.numTensors;this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack.push(0);let a;this.backendName==null&&this.backend;let l;const c=Ou(t)?t.kernelName:this.state.activeScope!=null?this.state.activeScope.name:"";if(Ou(t)){const{kernelName:p,inputs:m,attrs:g}=t;this.backendName==null&&this.backend;const x=Hp(p,this.backendName);S(x!=null,()=>`Cannot find registered kernel '${p}' for backend '${this.backendName}'`),a=()=>{const b=this.backend.numDataIds();l=x.kernelFunc({inputs:m,attrs:g,backend:this.backend});const w=Array.isArray(l)?l:[l];this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(p,b,w);const y=w.map(v=>v.rank!=null?v:this.makeTensorFromTensorInfo(v));if(r){const v=this.getTensorsForGradient(p,m,y);s=this.saveTensorsForBackwardMode(v)}return y}}else{const{forwardFunc:p}=t,m=g=>{r&&(s=g.map(x=>this.keep(this.clone(x))))};a=()=>{const g=this.backend.numDataIds();l=this.tidy(()=>p(this.backend,m));const x=Array.isArray(l)?l:[l];return this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(c,g,x),x}}const{inputs:u,attrs:h}=t,d=Ou(t)?null:t.backwardsFunc;let f;return this.scopedRun(()=>this.state.kernelDepth++,()=>this.state.kernelDepth--,()=>{!this.ENV.getBool("DEBUG")&&!this.state.profiling?e=a():(f=this.profiler.profileKernel(c,u,()=>a()),this.ENV.getBool("DEBUG")&&this.profiler.logKernelProfile(f),e=f.outputs)}),r&&this.addTapeNode(c,u,e,d,s,h),this.state.profiling&&this.state.activeProfile.kernels.push({name:c,bytesAdded:this.state.numBytes-o,totalBytesSnapshot:this.state.numBytes,tensorsAdded:this.state.numTensors-i,totalTensorsSnapshot:this.state.numTensors,inputShapes:Object.keys(u).map(p=>u[p]!=null?u[p].shape:null),outputShapes:e.map(p=>p.shape),kernelTimeMs:f.timeMs,extraInfo:f.extraInfo}),Array.isArray(l)?e:e[0]}saveTensorsForBackwardMode(t){return t.map(s=>this.keep(this.clone(s)))}getTensorsForGradient(t,e,s){const r=qp(t);if(r!=null){const o=r.inputsToSave||[],i=r.outputsToSave||[];let a;r.saveAllInputs?(S(Array.isArray(e),()=>"saveAllInputs is true, expected inputs to be an array."),a=Object.keys(e).map(c=>e[c])):a=o.map(c=>e[c]);const l=s.filter((c,u)=>i[u]);return a.concat(l)}return[]}makeTensor(t,e,s,r){if(t==null)throw new Error("Values passed to engine.makeTensor() are null");s=s||"float32",r=r||this.backend;let o=t;s==="string"&&oi(t[0])&&(o=t.map(l=>$s(l)));const i=r.write(o,e,s),a=new re(e,s,i,this.nextTensorId());if(this.trackTensor(a,r),s==="string"){const l=this.state.tensorInfo.get(i),c=XC(o);this.state.numBytes+=c-l.bytes,l.bytes=c}return a}makeTensorFromDataId(t,e,s,r){s=s||"float32";const o={dataId:t,shape:e,dtype:s};return this.makeTensorFromTensorInfo(o,r)}makeTensorFromTensorInfo(t,e){const{dataId:s,shape:r,dtype:o}=t,i=new re(r,o,s,this.nextTensorId());return this.trackTensor(i,e),i}makeVariable(t,e=!0,s,r){s=s||this.nextVariableId().toString(),r!=null&&r!==t.dtype&&(t=t.cast(r));const o=new dl(t,e,s,this.nextTensorId());if(this.state.registeredVariables[o.name]!=null)throw new Error(`Variable with name ${o.name} was already registered`);return this.state.registeredVariables[o.name]=o,this.incRef(o,this.backend),o}trackTensor(t,e){this.state.numTensors++,t.dtype==="string"&&this.state.numStringTensors++;let s=0;t.dtype!=="complex64"&&t.dtype!=="string"&&(s=t.size*ll(t.dtype)),this.state.numBytes+=s,this.state.tensorInfo.has(t.dataId)||(this.state.numDataBuffers++,this.state.tensorInfo.set(t.dataId,{backend:e||this.backend,dtype:t.dtype,shape:t.shape,bytes:s})),t instanceof dl||this.track(t)}incRef(t,e){this.trackTensor(t,e),this.backend.incRef(t.dataId)}removeDataId(t,e){this.state.tensorInfo.has(t)&&this.state.tensorInfo.get(t).backend===e&&(this.state.tensorInfo.delete(t),this.state.numDataBuffers--)}disposeTensor(t){if(!this.state.tensorInfo.has(t.dataId))return;const e=this.state.tensorInfo.get(t.dataId);if(this.state.numTensors--,t.dtype==="string"&&(this.state.numStringTensors--,this.state.numBytes-=e.bytes),t.dtype!=="complex64"&&t.dtype!=="string"){const s=t.size*ll(t.dtype);this.state.numBytes-=s}e.backend.disposeData(t.dataId)&&this.removeDataId(t.dataId,e.backend)}disposeVariables(){for(const t in this.state.registeredVariables){const e=this.state.registeredVariables[t];this.disposeVariable(e)}}disposeVariable(t){this.disposeTensor(t),this.state.registeredVariables[t.name]!=null&&delete this.state.registeredVariables[t.name]}memory(){const t=this.backend.memory();return t.numTensors=this.state.numTensors,t.numDataBuffers=this.state.numDataBuffers,t.numBytes=this.state.numBytes,this.state.numStringTensors>0&&(t.unreliable=!0,t.reasons==null&&(t.reasons=[]),t.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)")),t}async profile(t){this.state.profiling=!0;const e=this.state.numBytes,s=this.state.numTensors;this.state.activeProfile.kernels=[],this.state.activeProfile.result=await t(),this.state.profiling=!1,this.state.activeProfile.peakBytes=Math.max(...this.state.activeProfile.kernels.map(r=>r.totalBytesSnapshot)),this.state.activeProfile.newBytes=this.state.numBytes-e,this.state.activeProfile.newTensors=this.state.numTensors-s;for(const r of this.state.activeProfile.kernels)r.kernelTimeMs=await r.kernelTimeMs,r.extraInfo=await r.extraInfo;return this.state.activeProfile}isTapeOn(){return this.state.gradientDepth>0&&this.state.kernelDepth===0}addTapeNode(t,e,s,r,o,i){const a={id:this.state.nextTapeNodeId++,kernelName:t,inputs:e,outputs:s,saved:o},l=qp(t);l!=null&&(r=l.gradFunc),r!=null&&(a.gradient=c=>(c=c.map((u,h)=>{if(u==null){const d=s[h],f=$e(d.size,d.dtype);return this.makeTensor(f,d.shape,d.dtype)}return u}),r(c.length>1?c:c[0],o,i))),this.state.activeTape.push(a)}keep(t){return t.kept=!0,t}startTape(){this.state.gradientDepth===0&&(this.state.activeTape=[]),this.state.gradientDepth++}endTape(){this.state.gradientDepth--}startScope(t){const e={track:[],name:"unnamed scope",id:this.state.nextScopeId++};t&&(e.name=t),this.state.scopeStack.push(e),this.state.activeScope=e}endScope(t){const e=Gx(t),s=new Set(e.map(o=>o.id));for(let o=0;o<this.state.activeScope.track.length;o++){const i=this.state.activeScope.track[o];!i.kept&&!s.has(i.id)&&i.dispose()}const r=this.state.scopeStack.pop();this.state.activeScope=this.state.scopeStack.length===0?null:this.state.scopeStack[this.state.scopeStack.length-1],e.forEach(o=>{!o.kept&&o.scopeId===r.id&&this.track(o)})}gradients(t,e,s,r=!1){if(S(e.length>0,()=>"gradients() received an empty list of xs."),s!=null&&s.dtype!=="float32")throw new Error(`dy must have 'float32' dtype, but has '${s.dtype}'`);const o=this.scopedRun(()=>this.startTape(),()=>this.endTape(),()=>this.tidy("forward",t));S(o instanceof re,()=>"The result y returned by f() must be a tensor.");const i=$$(this.state.activeTape,e,o);if(!r&&i.length===0&&e.length>0)throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");return this.tidy("backward",()=>{const a={};a[o.id]=s??A$(o.shape),k$(a,i,c=>this.tidy(c),D$);const l=e.map(c=>a[c.id]);return this.state.gradientDepth===0&&(this.state.activeTape.forEach(c=>{for(const u of c.saved)u.dispose()}),this.state.activeTape=null),{value:o,grads:l}})}customGrad(t){return S(rh(t),()=>"The f passed in customGrad(f) must be a function."),(...e)=>{S(e.every(a=>a instanceof re),()=>"The args passed in customGrad(f)(x1, x2,...) must all be tensors");let s;const r={};e.forEach((a,l)=>{r[l]=a});const o=(a,l)=>(s=t(...e,l),S(s.value instanceof re,()=>"The function f passed in customGrad(f) must return an object where `obj.value` is a tensor"),S(rh(s.gradFunc),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function."),s.value),i=(a,l)=>{const c=s.gradFunc(a,l),u=Array.isArray(c)?c:[c];S(u.length===e.length,()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...)."),S(u.every(d=>d instanceof re),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors.");const h={};return u.forEach((d,f)=>{h[f]=()=>d}),h};return this.runKernelFunc({forwardFunc:o,backwardsFunc:i,inputs:r})}}readSync(t){return this.state.tensorInfo.get(t).backend.readSync(t)}read(t){return this.state.tensorInfo.get(t).backend.read(t)}readToGPU(t,e){return this.state.tensorInfo.get(t).backend.readToGPU(t,e)}async time(t){const e=Fe(),s=await this.backend.time(t);return s.wallMs=Fe()-e,s}track(t){return this.state.activeScope!=null&&(t.scopeId=this.state.activeScope.id,this.state.activeScope.track.push(t)),t}get registeredVariables(){return this.state.registeredVariables}reset(){this.pendingBackendInitId++,this.state.dispose(),this.ENV.reset(),this.state=new Jp;for(const t in this.registry)this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t];this.backendName=null,this.backendInstance=null,this.pendingBackendInit=null}}qr.nextTensorId=0;qr.nextVariableId=0;function A$(n){const t=Xh(q(n),"float32");return F.makeTensor(t,n,"float32")}function qx(){const n=dx();if(n._tfengine==null){const t=new JC(n);n._tfengine=new qr(t)}return n$(n._tfengine.ENV),N$(()=>n._tfengine),n._tfengine}const F=qx();function D$(n,t){const e={a:n,b:t};return F.runKernel(lo,e)}function _$(){return typeof navigator<"u"&&navigator!=null}function jx(n){if(n||_$()){if(n||(n=navigator),n.product==="ReactNative")return!0;const t=n.userAgent||n.vendor||(typeof window<"u"?window.opera:"");if(!t){const e=n;return e.userAgentData&&e.userAgentData.mobile}return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4))}return!1}function Kx(){return typeof window<"u"&&window.document!=null||typeof WorkerGlobalScope<"u"}const Pe=W();Pe.registerFlag("DEBUG",()=>!1,n=>{n&&console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.")});Pe.registerFlag("IS_BROWSER",()=>Kx());Pe.registerFlag("IS_NODE",()=>typeof process<"u"&&typeof process.versions<"u"&&typeof process.versions.node<"u");Pe.registerFlag("IS_CHROME",()=>typeof navigator<"u"&&navigator!=null&&navigator.userAgent!=null&&/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor));Pe.registerFlag("IS_SAFARI",()=>typeof navigator<"u"&&navigator!=null&&navigator.userAgent!=null&&/Safari/.test(navigator.userAgent)&&/Apple/.test(navigator.vendor));Pe.registerFlag("PROD",()=>!1);Pe.registerFlag("TENSORLIKE_CHECK_SHAPE_CONSISTENCY",()=>Pe.getBool("DEBUG"));Pe.registerFlag("DEPRECATION_WARNINGS_ENABLED",()=>!0);Pe.registerFlag("IS_TEST",()=>!1);Pe.registerFlag("CHECK_COMPUTATION_FOR_ERRORS",()=>Pe.getBool("DEBUG"));Pe.registerFlag("WRAP_TO_IMAGEBITMAP",()=>!1);Pe.registerFlag("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU",()=>!1);Pe.registerFlag("USE_SETTIMEOUTCUSTOM",()=>!1);function Yc(n,t){let e=n;if(un(n))return t==="string"?[]:[n.length];if(Wx(n)){const r=n.channels||"RGBA";return[n.height,n.width*r.length]}else if(Ux(n))return[n.buffer.size/(t==null?4:ll(t))];if(!Array.isArray(n))return[];const s=[];for(;Array.isArray(e)||un(e)&&t!=="string";)s.push(e.length),e=e[0];return Array.isArray(n)&&W().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY")&&Xx(n,s,[]),s}function Xx(n,t,e){if(e=e||[],!Array.isArray(n)&&!un(n)){S(t.length===0,()=>`Element arr[${e.join("][")}] is a primitive, but should be an array/TypedArray of ${t[0]} elements`);return}S(t.length>0,()=>`Element arr[${e.join("][")}] should be a primitive, but is an array of ${n.length} elements`),S(n.length===t[0],()=>`Element arr[${e.join("][")}] should have ${t[0]} elements, but has ${n.length} elements`);const s=t.slice(1);for(let r=0;r<n.length;++r)Xx(n[r],s,e.concat(r))}function Qp(n,t,e,s){if(n!=="string_or_numeric"){if(n==null)throw new Error("Expected dtype cannot be null.");if(n!=="numeric"&&n!==t||n==="numeric"&&t==="string")throw new Error(`Argument '${e}' passed to '${s}' must be ${n} tensor, but got ${t} tensor`)}}function E(n,t,e,s="numeric"){if(n instanceof H())return Qp(s,n.dtype,t,e),n;let r=io(n);if(r!=="string"&&["bool","int32","float32"].indexOf(s)>=0&&(r=s),Qp(s,r,t,e),n==null||!un(n)&&!Array.isArray(n)&&typeof n!="number"&&typeof n!="boolean"&&typeof n!="string"){const l=n==null?"null":n.constructor.name;throw new Error(`Argument '${t}' passed to '${e}' must be a Tensor or TensorLike, but got '${l}'`)}const o=Yc(n,r);!un(n)&&!Array.isArray(n)&&(n=[n]);const a=r!=="string"?wr(n,r):rr(n,[],!0);return F.makeTensor(a,o,r)}function Yx(n,t,e,s="numeric"){if(!Array.isArray(n))throw new Error(`Argument ${t} passed to ${e} must be a \`Tensor[]\` or \`TensorLike[]\``);return n.map((o,i)=>E(o,`${t}[${i}]`,e,s))}const F$="__op";function P(n){const t=Object.keys(n);if(t.length!==1)throw new Error(`Please provide an object with a single key (operation name) mapping to a function. Got an object with ${t.length} keys.`);let e=t[0];const s=n[e];e.endsWith("_")&&(e=e.substring(0,e.length-1)),e=e+F$;const r=(...o)=>{F.startScope(e);try{const i=s(...o);return Yh(i)&&console.error("Cannot return a Promise inside of tidy."),F.endScope(i),i}catch(i){throw F.endScope(null),i}};return Object.defineProperty(r,"name",{value:e,configurable:!0}),r}function O$(n,t){const e=E(n,"real","complex"),s=E(t,"imag","complex");Kh(e.shape,s.shape,`real and imag shapes, ${e.shape} and ${s.shape}, must match in call to tf.complex().`);const r={real:e,imag:s};return F.runKernel(od,r)}const or=P({complex_:O$});function Zc(n,t,e,s){if(s==null)s=io(n);else if(s==="complex64")throw new Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");if(Ux(n)||Wx(n)){if(s!=="float32"&&s!=="int32")throw new Error(`Creating tensor from GPU data only supports 'float32'|'int32' dtype, while the dtype is ${s}.`);return F.backend.createTensorFromGPUData(n,t||e,s)}if(!un(n)&&!Array.isArray(n)&&typeof n!="number"&&typeof n!="boolean"&&typeof n!="string")throw new Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");if(t!=null){us(t);const r=q(t),o=q(e);S(r===o,()=>`Based on the provided shape, [${t}], the tensor should have ${r} values but has ${o}`);for(let i=0;i<e.length;++i){const a=e[i],l=i===e.length-1?a!==q(t.slice(i)):!0;S(e[i]===t[i]||!l,()=>`Error creating a new Tensor. Inferred shape (${e}) does not match the provided shape (${t}). `)}}return!un(n)&&!Array.isArray(n)&&(n=[n]),t=t||e,n=s!=="string"?wr(n,s):rr(n,[],!0),F.makeTensor(n,t,s)}function Br(n,t,e){const s=Yc(n,e);return Zc(n,t,s,e)}const fl={float32:4,float16:2,int32:4,uint16:2,uint8:1,bool:1,complex64:8};class Fs{static join(t){return new Fs(t).slice()}constructor(t){if(this.shards=[],this.previousShardIndex=0,t==null||(t instanceof Array||(t=[t]),t=t.map(s=>un(s)?s.buffer:s),t.length===0))return;this.bufferUniformSize=t[0].byteLength;let e=0;for(let s=0;s<t.length;s++){const r=t[s];s!==t.length-1&&r.byteLength!==this.bufferUniformSize&&(this.bufferUniformSize=void 0);const o=e+r.byteLength;this.shards.push({buffer:r,start:e,end:o}),e=o}this.shards.length===0&&(this.byteLength=0),this.byteLength=this.shards[this.shards.length-1].end}slice(t=0,e=this.byteLength){if(this.shards.length===0)return new ArrayBuffer(0);if(t=isNaN(Number(t))?0:t,e=isNaN(Number(e))?0:e,t=Math.max(0,t),e=Math.min(this.byteLength,e),e<=t)return new ArrayBuffer(0);const s=this.findShardForByte(t);if(s===-1)throw new Error(`Could not find start shard for byte ${t}`);const r=e-t,o=new ArrayBuffer(r),i=new Uint8Array(o);let a=0;for(let l=s;l<this.shards.length;l++){const c=this.shards[l],h=t+a-c.start,d=a,p=Math.min(e,c.end)-c.start,m=new Uint8Array(c.buffer,h,p-h);if(i.set(m,d),a+=m.length,e<c.end)break}return o}findShardForByte(t){if(this.shards.length===0||t<0||t>=this.byteLength)return-1;if(this.bufferUniformSize!=null)return this.previousShardIndex=Math.floor(t/this.bufferUniformSize),this.previousShardIndex;function e(r){return t<r.start?-1:t>=r.end?1:0}if(e(this.shards[this.previousShardIndex])===0)return this.previousShardIndex;const s=M$(this.shards,e);return s===-1?-1:(this.previousShardIndex=s,this.previousShardIndex)}}function M$(n,t){let e=0,s=n.length;for(;e<=s;){const r=Math.floor((s-e)/2)+e,o=t(n[r]);if(o===0)return r;o<0?s=r:e=r+1}return-1}function Dn(){return F}function tm(){return F.memory()}function V(n,t){return F.tidy(n,t)}function yt(n){Gx(n).forEach(e=>e.dispose())}function zn(n){return F.keep(n)}function Zx(n,t,e=1){return F.registerBackend(n,t,e)}function L$(){return F.backend}const jr=4;async function em(n,t){const e=[],s=[],r=Array.isArray(n)?n.map(i=>i.name):Object.keys(n);for(let i=0;i<r.length;++i){const a=r[i],l=Array.isArray(n)?n[i].tensor:n[a];if(l.dtype!=="float32"&&l.dtype!=="int32"&&l.dtype!=="bool"&&l.dtype!=="string"&&l.dtype!=="complex64")throw new Error(`Unsupported dtype in weight '${a}': ${l.dtype}`);const c={name:a,shape:l.shape,dtype:l.dtype};if(l.dtype==="string"){const u=new Promise(async h=>{const d=await l.bytes(),f=d.reduce((g,x)=>g+x.length,0)+jr*d.length,p=new Uint8Array(f);let m=0;for(let g=0;g<d.length;g++){const x=d[g],b=new Uint8Array(new Uint32Array([x.length]).buffer);p.set(b,m),m+=jr,p.set(x,m),m+=x.length}h(p)});s.push(u)}else s.push(l.data());t!=null&&(c.group=t),e.push(c)}const o=await Promise.all(s);return{data:V$(o),specs:e}}function P$(n,t){const e=new Fs(n),s={};let r=0;for(const o of t){const i=z$(o,(a,l)=>e.slice(r+a,r+l));s[o.name]=B$(o,e.slice(r,r+i)),r+=i}return s}function z$(n,t){const e=q(n.shape);let s;if("quantization"in n){const r=n.quantization;s=fl[r.dtype]}else if(n.dtype==="string"){let r=0;for(let o=0;o<e;o++)r+=jr+new Uint32Array(t(r,r+jr))[0];return r}else s=fl[n.dtype];return e*s}function B$(n,t){const e=n.name,s=n.dtype,r=n.shape,o=q(r);let i,a=0;if("quantization"in n){const l=n.quantization;if(l.dtype==="uint8"||l.dtype==="uint16"){if(!("min"in l&&"scale"in l))throw new Error(`Weight ${n.name} with quantization ${l.dtype} doesn't have corresponding metadata min and scale.`)}else if(l.dtype==="float16"){if(s!=="float32")throw new Error(`Weight ${n.name} is quantized with ${l.dtype} which only supports weights of type float32 not ${s}.`)}else throw new Error(`Weight ${n.name} has unknown quantization dtype ${l.dtype}. Supported quantization dtypes are: 'uint8', 'uint16', and 'float16'.`);const c=fl[l.dtype],u=l.dtype==="uint8"?new Uint8Array(t):new Uint16Array(t);if(s==="float32")if(l.dtype==="uint8"||l.dtype==="uint16"){i=new Float32Array(u.length);for(let h=0;h<u.length;h++){const d=u[h];i[h]=d*l.scale+l.min}}else if(l.dtype==="float16")i=Z$()(u);else throw new Error(`Unsupported quantization type ${l.dtype} for weight type float32.`);else if(s==="int32"){if(l.dtype!=="uint8"&&l.dtype!=="uint16")throw new Error(`Unsupported quantization type ${l.dtype} for weight type int32.`);i=new Int32Array(u.length);for(let h=0;h<u.length;h++){const d=u[h];i[h]=Math.round(d*l.scale+l.min)}}else throw new Error(`Unsupported dtype in weight '${e}': ${s}`);a+=o*c}else if(s==="string"){const l=q(n.shape);i=[];for(let c=0;c<l;c++){const u=new Uint32Array(t.slice(a,a+jr))[0];a+=jr;const h=new Uint8Array(t.slice(a,a+u));i.push(h),a+=u}}else{const l=fl[s];if(s==="float32")i=new Float32Array(t);else if(s==="int32")i=new Int32Array(t);else if(s==="bool")i=new Uint8Array(t);else if(s==="complex64"){i=new Float32Array(t);const c=new Float32Array(i.length/2),u=new Float32Array(i.length/2);for(let p=0;p<c.length;p++)c[p]=i[p*2],u[p]=i[p*2+1];const h=Br(c,r,"float32"),d=Br(u,r,"float32"),f=or(h,d);return h.dispose(),d.dispose(),f}else throw new Error(`Unsupported dtype in weight '${e}': ${s}`);a+=o*l}return Br(i,r,s)}function V$(n){if(n===null)throw new Error(`Invalid input value: ${JSON.stringify(n)}`);let t=0;const e=[];n.forEach(o=>{if(t+=o.byteLength,e.push(o.byteLength===o.buffer.byteLength?o:new o.constructor(o)),!(o instanceof Float32Array||o instanceof Int32Array||o instanceof Uint8Array))throw new Error(`Unsupported TypedArray subtype: ${o.constructor.name}`)});const s=new Uint8Array(t);let r=0;return e.forEach(o=>{s.set(new Uint8Array(o.buffer),r),r+=o.byteLength}),s.buffer}const Bd=typeof Buffer<"u"&&(typeof Blob>"u"||typeof atob>"u"||typeof btoa>"u");function nm(n){return Bd?Buffer.byteLength(n,"utf8"):new Blob([n]).size}function W$(n){if(Bd)return Buffer.from(n).toString("base64");const t=new Uint8Array(n);let e="";for(let s=0,r=t.length;s<r;s++)e+=String.fromCharCode(t[s]);return btoa(e)}function U$(n){if(Bd){const s=Buffer.from(n,"base64");return s.buffer.slice(s.byteOffset,s.byteOffset+s.byteLength)}const t=atob(n),e=new Uint8Array(t.length);for(let s=0;s<t.length;++s)e.set([t.charCodeAt(s)],s);return e.buffer}function G$(n){return Fs.join(n)}function H$(n,t){const e={modelTopology:n.modelTopology,format:n.format,generatedBy:n.generatedBy,convertedBy:n.convertedBy,weightsManifest:t};return n.signature!=null&&(e.signature=n.signature),n.userDefinedMetadata!=null&&(e.userDefinedMetadata=n.userDefinedMetadata),n.modelInitializer!=null&&(e.modelInitializer=n.modelInitializer),n.initializerSignature!=null&&(e.initializerSignature=n.initializerSignature),n.trainingConfig!=null&&(e.trainingConfig=n.trainingConfig),e}function q$(n,t,e){const s={modelTopology:n.modelTopology,format:n.format,generatedBy:n.generatedBy,convertedBy:n.convertedBy};if(n.trainingConfig!=null&&(s.trainingConfig=n.trainingConfig),n.weightsManifest!=null){if(!t)throw new Error("modelJSON has weightsManifest but weightSpecs is null");if(!e)throw new Error("modelJSON has weightsManifest but weightData is null");s.weightSpecs=t,s.weightData=e}return n.signature!=null&&(s.signature=n.signature),n.userDefinedMetadata!=null&&(s.userDefinedMetadata=n.userDefinedMetadata),n.modelInitializer!=null&&(s.modelInitializer=n.modelInitializer),n.initializerSignature!=null&&(s.initializerSignature=n.initializerSignature),s}async function j$(n,t){let e,s;return n.weightsManifest!=null&&([e,s]=await t(n.weightsManifest)),q$(n,e,s)}function Vd(n){if(n.modelTopology instanceof ArrayBuffer)throw new Error("Expected JSON model topology, received ArrayBuffer.");return{dateSaved:new Date,modelTopologyType:"JSON",modelTopologyBytes:n.modelTopology==null?0:nm(JSON.stringify(n.modelTopology)),weightSpecsBytes:n.weightSpecs==null?0:nm(JSON.stringify(n.weightSpecs)),weightDataBytes:n.weightData==null?0:new Fs(n.weightData).byteLength}}function sm(n){const t=[];for(const e of n)t.push(...e.weights);return t}function K$(){const n=e=>{let s=e<<13,r=0;for(;(s&8388608)===0;)r-=8388608,s<<=1;return s&=-8388609,r+=947912704,s|r},t=new Uint32Array(2048);t[0]=0;for(let e=1;e<1024;e++)t[e]=n(e);for(let e=1024;e<2048;e++)t[e]=939524096+(e-1024<<13);return t}function X$(){const n=new Uint32Array(64);n[0]=0,n[31]=1199570944,n[32]=2147483648,n[63]=3347054592;for(let t=1;t<31;t++)n[t]=t<<23;for(let t=33;t<63;t++)n[t]=2147483648+(t-32<<23);return n}function Y$(){const n=new Uint32Array(64);for(let t=0;t<64;t++)n[t]=1024;return n[0]=n[32]=0,n}function Z$(){const n=K$(),t=X$(),e=Y$();return s=>{const r=new ArrayBuffer(4*s.length),o=new Uint32Array(r);for(let i=0;i<s.length;i++){const a=s[i],l=n[e[a>>10]+(a&1023)]+t[a>>10];o[i]=l}return new Float32Array(r)}}class he{constructor(){this.saveRouters=[],this.loadRouters=[]}static getInstance(){return he.instance==null&&(he.instance=new he),he.instance}static registerSaveRouter(t){he.getInstance().saveRouters.push(t)}static registerLoadRouter(t){he.getInstance().loadRouters.push(t)}static getSaveHandlers(t){return he.getHandlers(t,"save")}static getLoadHandlers(t,e){return he.getHandlers(t,"load",e)}static getHandlers(t,e,s){const r=[];return(e==="load"?he.getInstance().loadRouters:he.getInstance().saveRouters).forEach(i=>{const a=i(t,s);a!==null&&r.push(a)}),r}}const J$=n=>he.getSaveHandlers(n),Q$=(n,t)=>he.getLoadHandlers(n,t);const ph="tensorflowjs",mh=1,Ys="models_store",ys="model_info_store";function Jx(){if(!W().getBool("IS_BROWSER"))throw new Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");const n=typeof window>"u"?self:window,t=n.indexedDB||n.mozIndexedDB||n.webkitIndexedDB||n.msIndexedDB||n.shimIndexedDB;if(t==null)throw new Error("The current browser does not appear to support IndexedDB.");return t}function gh(n){const t=n.result;t.createObjectStore(Ys,{keyPath:"modelPath"}),t.createObjectStore(ys,{keyPath:"modelPath"})}class ir{constructor(t){if(this.indexedDB=Jx(),t==null||!t)throw new Error("For IndexedDB, modelPath must not be null, undefined or empty.");this.modelPath=t}async save(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");return this.databaseAction(this.modelPath,t)}async load(){return this.databaseAction(this.modelPath)}databaseAction(t,e){return new Promise((s,r)=>{const o=this.indexedDB.open(ph,mh);o.onupgradeneeded=()=>gh(o),o.onsuccess=()=>{const i=o.result;if(e==null){const a=i.transaction(Ys,"readonly"),c=a.objectStore(Ys).get(this.modelPath);c.onsuccess=()=>{if(c.result==null)return i.close(),r(new Error(`Cannot find model with path '${this.modelPath}' in IndexedDB.`));s(c.result.modelArtifacts)},c.onerror=u=>(i.close(),r(c.error)),a.oncomplete=()=>i.close()}else{e.weightData=Fs.join(e.weightData);const a=Vd(e),l=i.transaction(ys,"readwrite");let c=l.objectStore(ys),u;try{u=c.put({modelPath:this.modelPath,modelArtifactsInfo:a})}catch(d){return r(d)}let h;u.onsuccess=()=>{h=i.transaction(Ys,"readwrite");const d=h.objectStore(Ys);let f;try{f=d.put({modelPath:this.modelPath,modelArtifacts:e,modelArtifactsInfo:a})}catch(p){return r(p)}f.onsuccess=()=>s({modelArtifactsInfo:a}),f.onerror=p=>{c=l.objectStore(ys);const m=c.delete(this.modelPath);m.onsuccess=()=>(i.close(),r(f.error)),m.onerror=g=>(i.close(),r(f.error))}},u.onerror=d=>(i.close(),r(u.error)),l.oncomplete=()=>{h==null?i.close():h.oncomplete=()=>i.close()}}},o.onerror=i=>r(o.error)})}}ir.URL_SCHEME="indexeddb://";const Qx=n=>W().getBool("IS_BROWSER")&&!Array.isArray(n)&&n.startsWith(ir.URL_SCHEME)?tk(n.slice(ir.URL_SCHEME.length)):null;he.registerSaveRouter(Qx);he.registerLoadRouter(Qx);function tk(n){return new ir(n)}function ek(n){return n.startsWith(ir.URL_SCHEME)?n.slice(ir.URL_SCHEME.length):n}class nk{constructor(){this.indexedDB=Jx()}async listModels(){return new Promise((t,e)=>{const s=this.indexedDB.open(ph,mh);s.onupgradeneeded=()=>gh(s),s.onsuccess=()=>{const r=s.result,o=r.transaction(ys,"readonly"),a=o.objectStore(ys).getAll();a.onsuccess=()=>{const l={};for(const c of a.result)l[c.modelPath]=c.modelArtifactsInfo;t(l)},a.onerror=l=>(r.close(),e(a.error)),o.oncomplete=()=>r.close()},s.onerror=r=>e(s.error)})}async removeModel(t){return t=ek(t),new Promise((e,s)=>{const r=this.indexedDB.open(ph,mh);r.onupgradeneeded=()=>gh(r),r.onsuccess=()=>{const o=r.result,i=o.transaction(ys,"readwrite"),a=i.objectStore(ys),l=a.get(t);let c;l.onsuccess=()=>{if(l.result==null)return o.close(),s(new Error(`Cannot find model with path '${t}' in IndexedDB.`));{const u=a.delete(t),h=()=>{c=o.transaction(Ys,"readwrite");const f=c.objectStore(Ys).delete(t);f.onsuccess=()=>e(l.result.modelArtifactsInfo),f.onerror=p=>s(l.error)};u.onsuccess=h,u.onerror=d=>(h(),o.close(),s(l.error))}},l.onerror=u=>(o.close(),s(l.error)),i.oncomplete=()=>{c==null?o.close():c.oncomplete=()=>o.close()}},r.onerror=o=>s(r.error)})}}const ss="/",Or="tensorflowjs_models",t0="info",sk="model_topology",rk="weight_specs",ok="weight_data",ik="model_metadata";function e0(n){return{info:[Or,n,t0].join(ss),topology:[Or,n,sk].join(ss),weightSpecs:[Or,n,rk].join(ss),weightData:[Or,n,ok].join(ss),modelMetadata:[Or,n,ik].join(ss)}}function n0(n){for(const t of Object.values(n))window.localStorage.removeItem(t)}function ak(n){const t=n.split(ss);if(t.length<3)throw new Error(`Invalid key format: ${n}`);return t.slice(1,t.length-1).join(ss)}function lk(n){return n.startsWith(ar.URL_SCHEME)?n.slice(ar.URL_SCHEME.length):n}class ar{constructor(t){if(!W().getBool("IS_BROWSER")||typeof window>"u"||typeof window.localStorage>"u")throw new Error("The current environment does not support local storage.");if(this.LS=window.localStorage,t==null||!t)throw new Error("For local storage, modelPath must not be null, undefined or empty.");this.modelPath=t,this.keys=e0(this.modelPath)}async save(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");{const e=JSON.stringify(t.modelTopology),s=JSON.stringify(t.weightSpecs),r=Vd(t),o=Fs.join(t.weightData);try{this.LS.setItem(this.keys.info,JSON.stringify(r)),this.LS.setItem(this.keys.topology,e),this.LS.setItem(this.keys.weightSpecs,s),this.LS.setItem(this.keys.weightData,W$(o));const i={format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,signature:t.signature!=null?t.signature:void 0,userDefinedMetadata:t.userDefinedMetadata!=null?t.userDefinedMetadata:void 0,modelInitializer:t.modelInitializer!=null?t.modelInitializer:void 0,initializerSignature:t.initializerSignature!=null?t.initializerSignature:void 0,trainingConfig:t.trainingConfig!=null?t.trainingConfig:void 0};return this.LS.setItem(this.keys.modelMetadata,JSON.stringify(i)),{modelArtifactsInfo:r}}catch{throw n0(this.keys),new Error(`Failed to save model '${this.modelPath}' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes=${r.modelTopologyBytes}, weightSpecsBytes=${r.weightSpecsBytes}, weightDataBytes=${r.weightDataBytes}.`)}}}async load(){const t=JSON.parse(this.LS.getItem(this.keys.info));if(t==null)throw new Error(`In local storage, there is no model with name '${this.modelPath}'`);if(t.modelTopologyType!=="JSON")throw new Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");const e={},s=JSON.parse(this.LS.getItem(this.keys.topology));if(s==null)throw new Error(`In local storage, the topology of model '${this.modelPath}' is missing.`);e.modelTopology=s;const r=JSON.parse(this.LS.getItem(this.keys.weightSpecs));if(r==null)throw new Error(`In local storage, the weight specs of model '${this.modelPath}' are missing.`);e.weightSpecs=r;const o=this.LS.getItem(this.keys.modelMetadata);if(o!=null){const a=JSON.parse(o);e.format=a.format,e.generatedBy=a.generatedBy,e.convertedBy=a.convertedBy,a.signature!=null&&(e.signature=a.signature),a.userDefinedMetadata!=null&&(e.userDefinedMetadata=a.userDefinedMetadata),a.modelInitializer!=null&&(e.modelInitializer=a.modelInitializer),a.initializerSignature!=null&&(e.initializerSignature=a.initializerSignature),a.trainingConfig!=null&&(e.trainingConfig=a.trainingConfig)}const i=this.LS.getItem(this.keys.weightData);if(i==null)throw new Error(`In local storage, the binary weight values of model '${this.modelPath}' are missing.`);return e.weightData=U$(i),e}}ar.URL_SCHEME="localstorage://";const s0=n=>W().getBool("IS_BROWSER")&&!Array.isArray(n)&&n.startsWith(ar.URL_SCHEME)?ck(n.slice(ar.URL_SCHEME.length)):null;he.registerSaveRouter(s0);he.registerLoadRouter(s0);function ck(n){return new ar(n)}class uk{constructor(){S(W().getBool("IS_BROWSER"),()=>"Current environment is not a web browser"),S(typeof window>"u"||typeof window.localStorage<"u",()=>"Current browser does not appear to support localStorage"),this.LS=window.localStorage}async listModels(){const t={},e=Or+ss,s=ss+t0;for(let r=0;r<this.LS.length;++r){const o=this.LS.key(r);if(o.startsWith(e)&&o.endsWith(s)){const i=ak(o);t[i]=JSON.parse(this.LS.getItem(o))}}return t}async removeModel(t){t=lk(t);const e=e0(t);if(this.LS.getItem(e.info)==null)throw new Error(`Cannot find model at path '${t}'`);const s=JSON.parse(this.LS.getItem(e.info));return n0(e),s}}const rm="://";class _n{constructor(){this.managers={}}static getInstance(){return _n.instance==null&&(_n.instance=new _n),_n.instance}static registerManager(t,e){S(t!=null,()=>"scheme must not be undefined or null."),t.endsWith(rm)&&(t=t.slice(0,t.indexOf(rm))),S(t.length>0,()=>"scheme must not be an empty string.");const s=_n.getInstance();S(s.managers[t]==null,()=>`A model store manager is already registered for scheme '${t}'.`),s.managers[t]=e}static getManager(t){const e=_n.getInstance().managers[t];if(e==null)throw new Error(`Cannot find model manager for scheme '${t}'`);return e}static getSchemes(){return Object.keys(_n.getInstance().managers)}}class hk{constructor(){this.messageName="setTimeoutCustom",this.functionRefs=[],this.handledMessageCount=0,this.hasEventListener=!1}fetch(t,e){return fetch(t,e)}now(){return performance.now()}encode(t,e){if(e!=="utf-8"&&e!=="utf8")throw new Error(`Browser's encoder only supports utf-8, but got ${e}`);return this.textEncoder==null&&(this.textEncoder=new TextEncoder),this.textEncoder.encode(t)}decode(t,e){return new TextDecoder(e).decode(t)}setTimeoutCustom(t,e){if(typeof window>"u"||!W().getBool("USE_SETTIMEOUTCUSTOM")){setTimeout(t,e);return}this.functionRefs.push(t),setTimeout(()=>{window.postMessage({name:this.messageName,index:this.functionRefs.length-1},"*")},e),this.hasEventListener||(this.hasEventListener=!0,window.addEventListener("message",s=>{if(s.source===window&&s.data.name===this.messageName){s.stopPropagation();const r=this.functionRefs[s.data.index];r(),this.handledMessageCount++,this.handledMessageCount===this.functionRefs.length&&(this.functionRefs=[],this.handledMessageCount=0)}},!0))}isTypedArray(t){return Mx(t)}}if(W().get("IS_BROWSER")){W().setPlatform("browser",new hk);try{_n.registerManager(ar.URL_SCHEME,new uk)}catch{}try{_n.registerManager(ir.URL_SCHEME,new nk)}catch{}}const dk={importFetch:()=>require("node-fetch")};let Mu;class fk{constructor(){this.util=require("util"),this.textEncoder=new this.util.TextEncoder}fetch(t,e){return W().global.fetch!=null?W().global.fetch(t,e):(Mu==null&&(Mu=dk.importFetch()),Mu(t,e))}now(){const t=process.hrtime();return t[0]*1e3+t[1]/1e6}encode(t,e){if(e!=="utf-8"&&e!=="utf8")throw new Error(`Node built-in encoder only supports utf-8, but got ${e}`);return this.textEncoder.encode(t)}decode(t,e){return t.length===0?"":new this.util.TextDecoder(e).decode(t)}isTypedArray(t){return this.util.types.isFloat32Array(t)||this.util.types.isInt32Array(t)||this.util.types.isUint8Array(t)||this.util.types.isUint8ClampedArray(t)}}W().get("IS_NODE")&&!W().get("IS_BROWSER")&&W().setPlatform("node",new fk);function wt(n,t="float32",e){return t=t||"float32",us(n),new be(n,t,e)}function pk(n,t){const e=E(n,"x","cast");if(!KC(t))throw new Error(`Failed to cast to unknown dtype ${t}`);if(t==="string"&&e.dtype!=="string"||t!=="string"&&e.dtype==="string")throw new Error("Only strings can be casted to strings");const s={x:e},r={dtype:t};return F.runKernel(fi,s,r)}const st=P({cast_:pk});function mk(n){const e={x:E(n,"x","clone","string_or_numeric")};return F.runKernel(Si,e)}const Qs=P({clone_:mk});function gk(n,t=!1){console.log(n.toString(t))}qx();const xk={buffer:wt,cast:st,clone:Qs,print:gk};T$(xk);function bk(n,t){let e=E(n,"a","add"),s=E(t,"b","add");[e,s]=Zt(e,s);const r={a:e,b:s};return F.runKernel(lo,r)}const J=P({add_:bk});function yk(n,t){let e=E(n,"a","floorDiv"),s=E(t,"b","floorDiv");[e,s]=Zt(e,s);const r={a:e,b:s};return F.runKernel(ki,r)}const r0=P({floorDiv_:yk});function wk(n,t){let e=E(n,"a","div"),s=E(t,"b","div");if([e,s]=Zt(e,s),e.dtype==="int32"&&s.dtype==="int32")return r0(e,s);const r={a:e,b:s},o={};return F.runKernel(bi,r,o)}const ut=P({div_:wk});function vk(n,t){let e=E(n,"a","mul"),s=E(t,"b","mul");[e,s]=Zt(e,s);const r={a:e,b:s};return F.runKernel(Oi,r)}const _=P({mul_:vk});function Ck(n){const t=E(n,"x","abs");if(t.dtype==="complex64"){const e={x:t};return F.runKernel(nc,e)}else{const e={x:t};return F.runKernel(Xl,e)}}const Te=P({abs_:Ck});function $k(n){const e={x:E(n,"x","acos")};return F.runKernel(ii,e)}const kk=P({acos_:$k});function Ik(n){const e={x:E(n,"x","acosh")};return F.runKernel(ai,e)}const Sk=P({acosh_:Ik});function Nk(n,t=null,e=!1){const r={x:E(n,"x","all","bool")},o={axis:t,keepDims:e};return F.runKernel(Qh,r,o)}const o0=P({all_:Nk});function Tk(n,t=null,e=!1){const r={x:E(n,"x","any","bool")},o={axis:t,keepDims:e};return F.runKernel(td,r,o)}const xh=P({any_:Tk});function Ek(n,t=0){const s={x:E(n,"x","argMax")},r={axis:t};return F.runKernel(Yl,s,r)}const Uo=P({argMax_:Ek});function Rk(n,t=0){const s={x:E(n,"x","argMin")},r={axis:t};return F.runKernel(Zl,s,r)}const Ak=P({argMin_:Rk});function Dk(n){const e={x:E(n,"x","asin")};return F.runKernel(li,e)}const _k=P({asin_:Dk});function Fk(n){const e={x:E(n,"x","asinh")};return F.runKernel(ci,e)}const Ok=P({asinh_:Fk});function Mk(n){const e={x:E(n,"x","atan")};return F.runKernel(ui,e)}const Lk=P({atan_:Mk});function Pk(n,t){let e=E(n,"a","atan2"),s=E(t,"b","atan2");[e,s]=Zt(e,s);const r={a:e,b:s};return F.runKernel(di,r)}const zk=P({atan2_:Pk});function Bk(n){const e={x:E(n,"x","atanh")};return F.runKernel(hi,e)}const Vk=P({atanh_:Bk});function ea(n,t,e,s,r="NHWC",o){const i=n[3],a=[...t,i],l=ds(r);return ye(n,a,e,o,s,null,null,l)}function dn(n,t,e,s,r,o,i="channelsLast"){const[a,l]=Go(t);let c;if(i==="channelsLast")c=[a,l,n[3],n[3]];else if(i==="channelsFirst")c=[a,l,n[1],n[1]];else throw new Error(`Unknown dataFormat ${i}`);return ye(n,c,e,s,r,o,!1,i)}function hs(n,t,e,s,r,o,i="NDHWC"){const[a,l,c]=bh(t);let u,h;if(i==="NDHWC")h="channelsLast",u=[a,l,c,n[4],n[4]];else if(i==="NCDHW")h="channelsFirst",u=[a,l,c,n[1],n[1]];else throw new Error(`Unknown dataFormat ${i}`);return Os(n,u,e,s,r,!1,h,o)}function ye(n,t,e,s,r,o,i=!1,a="channelsLast"){let[l,c,u,h]=[-1,-1,-1,-1];if(a==="channelsLast")[l,c,u,h]=n;else if(a==="channelsFirst")[l,h,c,u]=n;else throw new Error(`Unknown dataFormat ${a}`);const[d,f,,p]=t,[m,g]=Go(e),[x,b]=Go(s),w=Vr(d,x),y=Vr(f,b),{padInfo:v,outHeight:$,outWidth:N}=Gk(r,c,u,m,g,w,y,o,a),T=i?p*h:p;let k;return a==="channelsFirst"?k=[l,T,$,N]:a==="channelsLast"&&(k=[l,$,N,T]),{batchSize:l,dataFormat:a,inHeight:c,inWidth:u,inChannels:h,outHeight:$,outWidth:N,outChannels:T,padInfo:v,strideHeight:m,strideWidth:g,filterHeight:d,filterWidth:f,effectiveFilterHeight:w,effectiveFilterWidth:y,dilationHeight:x,dilationWidth:b,inShape:n,outShape:k,filterShape:t}}function Os(n,t,e,s,r,o=!1,i="channelsLast",a){let[l,c,u,h,d]=[-1,-1,-1,-1,-1];if(i==="channelsLast")[l,c,u,h,d]=n;else if(i==="channelsFirst")[l,d,c,u,h]=n;else throw new Error(`Unknown dataFormat ${i}`);const[f,p,m,,g]=t,[x,b,w]=bh(e),[y,v,$]=bh(s),N=Vr(f,y),T=Vr(p,v),k=Vr(m,$),{padInfo:I,outDepth:C,outHeight:R,outWidth:A}=Hk(r,c,u,h,x,b,w,N,T,k,a),O=o?g*d:g;let M;return i==="channelsFirst"?M=[l,O,C,R,A]:i==="channelsLast"&&(M=[l,C,R,A,O]),{batchSize:l,dataFormat:i,inDepth:c,inHeight:u,inWidth:h,inChannels:d,outDepth:C,outHeight:R,outWidth:A,outChannels:O,padInfo:I,strideDepth:x,strideHeight:b,strideWidth:w,filterDepth:f,filterHeight:p,filterWidth:m,effectiveFilterDepth:N,effectiveFilterHeight:T,effectiveFilterWidth:k,dilationDepth:y,dilationHeight:v,dilationWidth:$,inShape:n,outShape:M,filterShape:t}}function Wk(n,t,e,s,r){s==null&&(s=Wd(n,t,e));const o=n[0],i=n[1],a=Ho((o-t+2*s)/e+1,r),l=Ho((i-t+2*s)/e+1,r);return[a,l]}function Uk(n,t,e,s,r,o){r==null&&(r=Wd(n,t[0],s[0]));const i=[0,0,0,e];for(let a=0;a<3;a++)n[a]+2*r>=t[a]&&(i[a]=Ho((n[a]-t[a]+2*r)/s[a]+1,o));return i}function Wd(n,t,e,s=1){const r=Vr(t,s);return Math.floor((n[0]*(e-1)-e+r)/2)}function Go(n){return typeof n=="number"?[n,n,n]:n.length===2?[n[0],n[1],1]:n}function bh(n){return typeof n=="number"?[n,n,n]:n}function Vr(n,t){return t<=1?n:n+(n-1)*(t-1)}function Gk(n,t,e,s,r,o,i,a,l){let c,u,h;if(typeof n=="number"){c={top:n,bottom:n,left:n,right:n,type:n===0?"VALID":"NUMBER"};const f=Wk([t,e],o,s,n,a);u=f[0],h=f[1]}else if(n==="same"){u=Math.ceil(t/s),h=Math.ceil(e/r);const d=Math.max(0,(u-1)*s+o-t),f=Math.max(0,(h-1)*r+i-e),p=Math.floor(d/2),m=d-p,g=Math.floor(f/2),x=f-g;c={top:p,bottom:m,left:g,right:x,type:"SAME"}}else if(n==="valid")c={top:0,bottom:0,left:0,right:0,type:"VALID"},u=Math.ceil((t-o+1)/s),h=Math.ceil((e-i+1)/r);else if(typeof n=="object"){const d=l==="channelsLast"?n[1][0]:n[2][0],f=l==="channelsLast"?n[1][1]:n[2][1],p=l==="channelsLast"?n[2][0]:n[3][0],m=l==="channelsLast"?n[2][1]:n[3][1];c={top:d,bottom:f,left:p,right:m,type:d===0&&f===0&&p===0&&m===0?"VALID":"EXPLICIT"},u=Ho((t-o+d+f)/s+1,a),h=Ho((e-i+p+m)/r+1,a)}else throw Error(`Unknown padding parameter: ${n}`);return{padInfo:c,outHeight:u,outWidth:h}}function Hk(n,t,e,s,r,o,i,a,l,c,u){let h,d,f,p;if(n==="valid"&&(n=0),typeof n=="number"){h={top:n,bottom:n,left:n,right:n,front:n,back:n,type:n===0?"VALID":"NUMBER"};const g=Uk([t,e,s,1],[a,l,c],1,[r,o,i],n,u);d=g[0],f=g[1],p=g[2]}else if(n==="same"){d=Math.ceil(t/r),f=Math.ceil(e/o),p=Math.ceil(s/i);const m=(d-1)*r+a-t,g=(f-1)*o+l-e,x=(p-1)*i+c-s,b=Math.floor(m/2),w=m-b,y=Math.floor(g/2),v=g-y,$=Math.floor(x/2),N=x-$;h={top:y,bottom:v,left:$,right:N,front:b,back:w,type:"SAME"}}else throw Error(`Unknown padding parameter: ${n}`);return{padInfo:h,outDepth:d,outHeight:f,outWidth:p}}function Ho(n,t){if(!t)return Math.trunc(n);switch(t){case"round":return Math.round(n);case"ceil":return Math.ceil(n);case"floor":return Math.floor(n);default:throw new Error(`Unknown roundingMode ${t}`)}}function lr(n){const[t,e,s]=Go(n);return t===1&&e===1&&s===1}function Ie(n,t){return lr(n)||lr(t)}function cr(n){return Go(n).every(t=>t>0)}function ds(n){if(n==="NHWC")return"channelsLast";if(n==="NCHW")return"channelsFirst";throw new Error(`Unknown dataFormat ${n}`)}function Be(n,t,e){if(e!=null){if(typeof t=="string")throw Error(`Error in ${n}: pad must be an integer when using dimRoundingMode ${e} but got pad ${t}.`);if(typeof t=="number")S(Hr(t),()=>`Error in ${n}: pad must be an integer when using dimRoundingMode ${e} but got pad ${t}.`);else if(typeof t=="object")t.forEach(s=>{s.forEach(r=>{S(Hr(r),()=>`Error in ${n}: pad must be an integer when using dimRoundingMode ${e} but got pad ${r}.`)})});else throw Error(`Error in ${n}: Unknown padding parameter: ${t}`)}}function qk(n,t){const s={x:E(n,"x","reshape","string_or_numeric")},r={shape:t};return F.runKernel(Mc,s,r)}const L=P({reshape_:qk});function jk(n,t,e,s,r){const o=E(n,"x","avgPool","float32"),i=1;S(Ie(e,i),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${e} and dilations '${i}'`);let a=o,l=!1;o.rank===3&&(l=!0,a=L(o,[1,o.shape[0],o.shape[1],o.shape[2]])),S(a.rank===4,()=>`Error in avgPool: x must be rank 4 but got rank ${a.rank}.`),Be("avgPool",s,r);const c={x:a},u={filterSize:t,strides:e,pad:s,dimRoundingMode:r};let h=F.runKernel(Jl,c,u);return h=st(h,o.dtype),l?L(h,[h.shape[1],h.shape[2],h.shape[3]]):h}const Ud=P({avgPool_:jk});function Kk(n,t,e,s,r,o="NDHWC"){const i=E(n,"x","avgPool3d","float32");let a=i,l=!1;i.rank===4&&(l=!0,a=L(i,[1,i.shape[0],i.shape[1],i.shape[2],i.shape[3]])),S(a.rank===5,()=>`Error in avgPool3d: x must be rank 5 but got rank ${a.rank}.`),S(o==="NDHWC",()=>`Error in avgPool3d: Only NDHWC is currently supported, but got dataFormat of ${o}`),S(typeof e=="number"&&e>0||Array.isArray(e)&&e[0]>0&&e[1]>0&&e[2]>0,()=>`Error in avgPool3d: Stride must be > 0, but got '${e}'`),Be("avgPool3d",s,r);const c={x:a},u={filterSize:t,strides:e,pad:s,dimRoundingMode:r,dataFormat:o};let h=F.runKernel(Ql,c,u);return h=st(h,a.dtype),l?L(h,[h.shape[1],h.shape[2],h.shape[3],h.shape[4]]):h}const Xk=P({avgPool3d_:Kk});function Yk(n,t=0){S(n.length>=1,()=>"Pass at least one tensor to concat");const e=Yx(n,"tensors","concat","string_or_numeric");if(e[0].dtype==="complex64"&&e.forEach(o=>{if(o.dtype!=="complex64")throw new Error(`Cannot concatenate complex64 tensors with a tensor
          with dtype ${o.dtype}. `)}),e.length===1)return Qs(e[0]);const s=e,r={axis:t};return F.runKernel(sc,s,r)}const Le=P({concat_:Yk});function Zk(n,t,e=!1,s=!1){let r=E(n,"a","matMul"),o=E(t,"b","matMul");[r,o]=Zt(r,o);const i={a:r,b:o},a={transposeA:e,transposeB:s};return F.runKernel(tc,i,a)}const Nt=P({matMul_:Zk});function Jk(n){const e={x:E(n,"x","sigmoid","float32")};return F.runKernel(qi,e)}const co=P({sigmoid_:Jk});function Qk(n,t,e){const s=E(n,"x","slice","string_or_numeric");if(s.rank===0)throw new Error("Slicing scalar is not possible");const r={x:s},o={begin:t,size:e};return F.runKernel(Vc,r,o)}const zt=P({slice_:Qk});function tI(n){const e={x:E(n,"x","tanh","float32")};return F.runKernel(Ji,e)}const Jc=P({tanh_:tI});function eI(n,t,e){const s=E(n,"x","batchToSpaceND"),r=t.reduce((a,l)=>a*l);S(s.rank>=1+t.length,()=>`input rank is ${s.rank} but should be > than blockShape.length ${t.length}`),S(e.length===t.length,()=>`crops.length is ${e.length} but should be equal to blockShape.length  ${t.length}`),S(s.shape[0]%r===0,()=>`input tensor batch is ${s.shape[0]} but is not divisible by the product of the elements of blockShape ${t.join(" * ")} === ${r}`);const o={x:s},i={blockShape:t,crops:e};return F.runKernel(ec,o,i)}const Gd=P({batchToSpaceND_:eI});function nI(n){let t;return n.rank===0||n.rank===1?t=L(n,[1,1,1,n.size]):n.rank===2?t=L(n,[1,1,n.shape[0],n.shape[1]]):n.rank===3?t=L(n,[1,n.shape[0],n.shape[1],n.shape[2]]):t=n,t}function sI(n,t,e,s,r,o){o==null&&(o=.001);const i=E(n,"x","batchNorm"),a=E(t,"mean","batchNorm"),l=E(e,"variance","batchNorm");let c;r!=null&&(c=E(r,"scale","batchNorm"));let u;s!=null&&(u=E(s,"offset","batchNorm")),S(a.rank===l.rank,()=>"Batch normalization gradient requires mean and variance to have equal ranks."),S(u==null||a.rank===u.rank,()=>"Batch normalization gradient requires mean and offset to have equal ranks."),S(c==null||a.rank===c.rank,()=>"Batch normalization gradient requires mean and scale to have equal ranks.");const d={x:nI(i),scale:c,offset:u,mean:a,variance:l},f={varianceEpsilon:o},p=F.runKernel(dc,d,f);return L(p,i.shape)}const Qc=P({batchNorm_:sI});function rI(n,t,e,s,r,o){const i=E(n,"x","batchNorm"),a=E(t,"mean","batchNorm"),l=E(e,"variance","batchNorm");let c;r!=null&&(c=E(r,"scale","batchNorm"));let u;return s!=null&&(u=E(s,"offset","batchNorm")),S(i.rank===2,()=>`Error in batchNorm2D: x must be rank 2 but got rank ${i.rank}.`),S(a.rank===2||a.rank===1,()=>`Error in batchNorm2D: mean must be rank 2 or rank 1 but got rank ${a.rank}.`),S(l.rank===2||l.rank===1,()=>`Error in batchNorm2D: variance must be rank 2 or rank 1 but got rank ${l.rank}.`),c!=null&&S(c.rank===2||c.rank===1,()=>`Error in batchNorm2D: scale must be rank 2 or rank 1 but got rank ${c.rank}.`),u!=null&&S(u.rank===2||u.rank===1,()=>`Error in batchNorm2D: offset must be rank 2 or rank 1 but got rank ${u.rank}.`),Qc(i,a,l,u,c,o)}const oI=P({batchNorm2d_:rI});function iI(n,t,e,s,r,o){const i=E(n,"x","batchNorm"),a=E(t,"mean","batchNorm"),l=E(e,"variance","batchNorm");let c;r!=null&&(c=E(r,"scale","batchNorm"));let u;return s!=null&&(u=E(s,"offset","batchNorm")),S(i.rank===3,()=>`Error in batchNorm3D: x must be rank 3 but got rank ${i.rank}.`),S(a.rank===3||a.rank===1,()=>`Error in batchNorm3D: mean must be rank 3 or rank 1 but got rank ${a.rank}.`),S(l.rank===3||l.rank===1,()=>`Error in batchNorm3D: variance must be rank 3 or rank 1 but got rank ${l.rank}.`),c!=null&&S(c.rank===3||c.rank===1,()=>`Error in batchNorm3D: scale must be rank 3 or rank 1 but got rank ${c.rank}.`),u!=null&&S(u.rank===3||u.rank===1,()=>`Error in batchNorm3D: offset must be rank 3 or rank 1 but got rank ${u.rank}.`),Qc(i,a,l,u,c,o)}const aI=P({batchNorm3d_:iI});function lI(n,t,e,s,r,o){const i=E(n,"x","batchNorm"),a=E(t,"mean","batchNorm"),l=E(e,"variance","batchNorm");let c;r!=null&&(c=E(r,"scale","batchNorm"));let u;return s!=null&&(u=E(s,"offset","batchNorm")),S(i.rank===4,()=>`Error in batchNorm4D: x must be rank 4 but got rank ${i.rank}.`),S(a.rank===4||a.rank===1,()=>`Error in batchNorm4D: mean must be rank 4 or rank 1 but got rank ${a.rank}.`),S(l.rank===4||l.rank===1,()=>`Error in batchNorm4D: variance must be rank 4 or rank 1 but got rank ${l.rank}.`),c!=null&&S(c.rank===4||c.rank===1,()=>`Error in batchNorm4D: scale must be rank 4 or rank 1 but got rank ${c.rank}.`),u!=null&&S(u.rank===4||u.rank===1,()=>`Error in batchNorm4D: offset must be rank 4 or rank 1 but got rank ${u.rank}.`),Qc(i,a,l,u,c,o)}const cI=P({batchNorm4d_:lI});function uI(n,t,e){const s=E(n,"x","bincount"),r=E(t,"weights","bincount");S(s.dtype==="int32",()=>`Error in bincount: input dtype must be int32, but got ${s.dtype}`),S(e>=0,()=>`size must be non-negative, but got ${e}.`),S(r.size===s.size||r.size===0,()=>`Error in bincount: weights must have the same size as input or0-length, but got input shape: ${s.shape}, weights shape: ${r.shape}.`);const o={x:s,weights:r},i={size:e};return F.runKernel(sd,o,i)}const hI=P({bincount_:uI});function dI(n,t){let e=E(n,"broadcastTo","x");const s=e.shape;if(us(t),t.length<e.rank)throw new Error(`broadcastTo(): shape.length=${t.length} < input.rank=${e.rank}.`);if(t.length>e.rank){const c=e.shape.slice();for(;c.length<t.length;)c.unshift(1);e=L(e,c)}const r=e.shape,o=Array.from(t);for(let c=t.length-1;c>=0;c--)if(r[c]===t[c])o[c]=1;else if(e.shape[c]!==1)throw new Error(`broadcastTo(): [${s}] cannot be broadcast to [${t}].`);if(o.map((c,u)=>c>1?u:-1).filter(c=>c>=0).length===0)return Qs(e);const a={x:e},l={reps:o};return F.runKernel(Qi,a,l)}const Bo=P({broadcastTo_:dI});function fI(n){const e={x:E(n,"x","ceil","float32")};return F.runKernel(pi,e)}const pI=P({ceil_:fI});function tu(n,t,e){us(n),e=e||io(t);const s={shape:n,value:t,dtype:e};return F.runKernel(bd,{},s)}function mI(n,t,e){const s=E(n,"x","clipByValue");if(S(t<=e,()=>`Error in clip: min (${t}) must be less than or equal to max (${e}).`),t===e)return tu(s.shape,t,s.dtype);const r={x:s},o={clipValueMin:t,clipValueMax:e};return F.runKernel(mi,r,o)}const tn=P({clipByValue_:mI});function gI(n){return Le(n,0)}const xI=P({concat1d_:gI});function bI(n,t){return Le(n,t)}const yI=P({concat2d_:bI});function wI(n,t){return Le(n,t)}const vI=P({concat3d_:wI});function CI(n,t){return Le(n,t)}const $I=P({concat4d_:CI});function kI(n,t,e,s,r="NHWC",o=[1,1],i){const a=E(n,"x","conv2d","float32"),l=E(t,"filter","conv2d","float32");let c=a,u=!1;a.rank===3&&(u=!0,c=L(a,[1,a.shape[0],a.shape[1],a.shape[2]])),S(c.rank===4,()=>`Error in conv2d: input must be rank 4, but got rank ${c.rank}.`),S(l.rank===4,()=>`Error in conv2d: filter must be rank 4, but got rank ${l.rank}.`),Be("conv2d",s,i);const h=r==="NHWC"?c.shape[3]:c.shape[1];S(h===l.shape[2],()=>`Error in conv2d: depth of input (${h}) must match input depth for filter ${l.shape[2]}.`),S(Ie(e,o),()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${e} and dilations '${o}'`),S(cr(o),()=>"Error in conv2D: Dilated rates should be larger than 0."),S(cr(e),()=>"Error in conv2D: Strides should be larger than 0.");const d={x:c,filter:l},f={strides:e,pad:s,dataFormat:r,dilations:o,dimRoundingMode:i},p=F.runKernel(rc,d,f);return u?L(p,[p.shape[1],p.shape[2],p.shape[3]]):p}const ur=P({conv2d_:kI});function II(n,t,e,s,r="NWC",o=1,i){const a=E(n,"x","conv1d"),l=E(t,"filter","conv1d");let c=a,u=!1;a.rank===2&&(u=!0,c=L(a,[1,a.shape[0],a.shape[1]])),S(c.rank===3,()=>`Error in conv1d: input must be rank 3, but got rank ${c.rank}.`),S(l.rank===3,()=>`Error in conv1d: filter must be rank 3, but got rank ${l.rank}.`),Be("conv1d",s,i),S(c.shape[2]===l.shape[1],()=>`Error in conv1d: depth of input (${c.shape[2]}) must match input depth for filter ${l.shape[1]}.`),S(Ie(e,o),()=>`Error in conv1D: Either stride or dilation must be 1. Got stride ${e} and dilation '${o}'`),S(cr(o),()=>"Error in conv1D: Dilated rates should be larger than 0."),S(cr(e),()=>"Error in conv1D: Stride should be larger than 0."),S(r==="NWC",()=>`Error in conv1d: got dataFormat of ${r} but only NWC is currently supported.`);const h=L(l,[1,l.shape[0],l.shape[1],l.shape[2]]),d=L(c,[c.shape[0],1,c.shape[1],c.shape[2]]),g=ur(d,h,[1,e],s,"NHWC",[1,o],i);return u?L(g,[g.shape[2],g.shape[3]]):L(g,[g.shape[0],g.shape[2],g.shape[3]])}const i0=P({conv1d_:II});function SI(n,t,e,s,r,o="NHWC",i){S(n.length===t.rank,()=>`Length of inShape (${n.length}) and rank of dy (${t.rank}) must match`);let a=n,l=t,c=!1;t.rank===3&&(c=!0,l=L(t,[1,t.shape[0],t.shape[1],t.shape[2]]),a=[1,n[0],n[1],n[2]]),S(a.length===4,()=>`Error in conv2dDerInput: inShape must be length 4, but got length ${a.length}.`),S(l.rank===4,()=>`Error in conv2dDerInput: dy must be rank 4, but got rank ${l.rank}`),S(e.rank===4,()=>`Error in conv2dDerInput: filter must be rank 4, but got rank ${e.rank}`);const u=o==="NHWC"?a[3]:a[1],h=o==="NHWC"?l.shape[3]:l.shape[1];S(u===e.shape[2],()=>`Error in conv2dDerInput: depth of input (${u}) must match input depth for filter ${e.shape[2]}.`),S(h===e.shape[3],()=>`Error in conv2dDerInput: depth of output (${h}) must match output depth for filter ${e.shape[3]}.`),Be("conv2dDerInput",r,i);const d={dy:l,filter:e},f={strides:s,pad:r,dataFormat:o,dimRoundingMode:i,inputShape:a},p=F.runKernel(oc,d,f);return c?L(p,[p.shape[1],p.shape[2],p.shape[3]]):p}const Hd=P({conv2DBackpropInput_:SI});function NI(n,t,e,s,r,o){const i=E(n,"x","conv2dTranspose"),a=E(t,"filter","conv2dTranspose");return Hd(e,i,a,s,r,"NHWC",o)}const a0=P({conv2dTranspose_:NI});function TI(n,t,e,s,r="NDHWC",o=[1,1,1]){const i=E(n,"x","conv3d"),a=E(t,"filter","conv3d");let l=i,c=!1;i.rank===4&&(c=!0,l=L(i,[1,i.shape[0],i.shape[1],i.shape[2],i.shape[3]])),S(l.rank===5,()=>`Error in conv3d: input must be rank 5, but got rank ${l.rank}.`),S(a.rank===5,()=>`Error in conv3d: filter must be rank 5, but got rank ${a.rank}.`),S(l.shape[4]===a.shape[3],()=>`Error in conv3d: depth of input (${l.shape[4]}) must match input depth for filter ${a.shape[3]}.`),S(Ie(e,o),()=>`Error in conv3D: Either strides or dilations must be 1. Got strides ${e} and dilations '${o}'`),S(r==="NDHWC",()=>`Error in conv3d: got dataFormat of ${r} but only NDHWC is currently supported.`),S(cr(o),()=>"Error in conv3D: Dilated rates should be larger than 0."),S(cr(e),()=>"Error in conv3D: Strides should be larger than 0.");const u={x:l,filter:a},h={strides:e,pad:s,dataFormat:r,dilations:o},d=F.runKernel(ic,u,h);return c?L(d,[d.shape[1],d.shape[2],d.shape[3],d.shape[4]]):d}const EI=P({conv3d_:TI});function RI(n,t,e,s,r){S(n.length===t.rank,()=>`Length of inShape (${n.length}) and rank of dy (${t.rank}) must match`);let o=n,i=t,a=!1;t.rank===4&&(a=!0,i=L(t,[1,t.shape[0],t.shape[1],t.shape[2],t.shape[3]]),o=[1,n[0],n[1],n[2],n[3]]);const l=o[4],c=i.shape[4];S(o.length===5,()=>`Error in conv3dDerInput: inShape must be length 5, but got length ${o.length}.`),S(i.rank===5,()=>`Error in conv3dDerInput: dy must be rank 5, but got rank ${i.rank}`),S(e.rank===5,()=>`Error in conv3dDerInput: filter must be rank 5, but got rank ${e.rank}`),S(l===e.shape[3],()=>`Error in conv3dDerInput: depth of input (${l}) must match input depth for filter ${e.shape[3]}.`),S(c===e.shape[4],()=>`Error in conv3dDerInput: depth of output (${c}) must match output depth for filter ${e.shape[4]}.`);const u={dy:i,filter:e},h={pad:r,strides:s,inputShape:o},d=F.runKernel(ld,u,h);return a?L(d,[d.shape[1],d.shape[2],d.shape[3],d.shape[4]]):d}const l0=P({conv3DBackpropInput_:RI});function AI(n,t,e,s,r){const o=E(n,"x","conv3dTranspose"),i=E(t,"filter","conv3dTranspose");return l0(e,o,i,s,r)}const DI=P({conv3dTranspose_:AI});function _I(n){const e={x:E(n,"x","cos","float32")};return F.runKernel(gi,e)}const qd=P({cos_:_I});function FI(n){const e={x:E(n,"x","cosh","float32")};return F.runKernel(xi,e)}const c0=P({cosh_:FI});function OI(n,t=0,e=!1,s=!1){const o={x:E(n,"x","cumprod")},i={axis:t,exclusive:e,reverse:s};return F.runKernel(cd,o,i)}const yh=P({cumprod_:OI});function MI(n,t=0,e=!1,s=!1){const o={x:E(n,"x","cumsum")},i={axis:t,exclusive:e,reverse:s};return F.runKernel(ac,o,i)}const u0=P({cumsum_:MI});function LI(n,t,e,s=!1){const r=E(n,"x","denseBincount"),o=E(t,"weights","denseBincount");S(r.dtype==="int32",()=>`Error in denseBincount: input dtype must be int32, but got ${r.dtype}`),S(r.rank<=2,()=>`Error in denseBincount: input must be at most rank 2, but got rank ${r.rank}.`),S(e>=0,()=>`size must be non-negative, but got ${e}.`),S(o.size===r.size||o.size===0,()=>`Error in denseBincount: weights must have the same shape as x or 0-length, but got x shape: ${r.shape}, weights shape: ${o.shape}.`);const i={x:r,weights:o},a={size:e,binaryOutput:s};return F.runKernel(hd,i,a)}const om=P({denseBincount_:LI});function PI(n,t,e="NHWC"){const s=E(n,"x","depthToSpace","float32"),r=e==="NHWC"?s.shape[1]:s.shape[2],o=e==="NHWC"?s.shape[2]:s.shape[3],i=e==="NHWC"?s.shape[3]:s.shape[1];S(t>1,()=>`blockSize should be > 1 for depthToSpace, but was: ${t}`),S(r*t>=0,()=>`Negative dimension size caused by overflow when multiplying
    ${r} and ${t}  for depthToSpace with input shape
    ${s.shape}`),S(o*t>=0,()=>`Negative dimension size caused by overflow when multiplying
    ${o} and ${t} for depthToSpace with input shape
        ${s.shape}`),S(i%(t*t)===0,()=>`Dimension size must be evenly divisible by ${t*t} but is ${i} for depthToSpace with input shape ${s.shape}`);const a={x:s},l={blockSize:t,dataFormat:e};return F.runKernel(dd,a,l)}const zI=P({depthToSpace_:PI});function BI(n,t,e,s,r="NHWC",o=[1,1],i){const a=E(n,"x","depthwiseConv2d","float32"),l=E(t,"filter","depthwiseConv2d","float32");let c=a,u=!1;a.rank===3&&(u=!0,c=L(a,[1,a.shape[0],a.shape[1],a.shape[2]])),S(c.rank===4,()=>`Error in depthwiseConv2d: input must be rank 4, but got rank ${c.rank}.`),S(l.rank===4,()=>`Error in depthwiseConv2d: filter must be rank 4, but got rank ${l.rank}.`);const h=r==="NHWC"?c.shape[3]:c.shape[1];S(h===l.shape[2],()=>`Error in depthwiseConv2d: number of input channels (${h}) must match the inChannels dimension in filter ${l.shape[2]}.`),Be("depthwiseConv2d",s,i);const d={x:c,filter:l},f={strides:e,pad:s,dataFormat:r,dilations:o,dimRoundingMode:i},p=F.runKernel(lc,d,f);return u?L(p,[p.shape[1],p.shape[2],p.shape[3]]):p}const jd=P({depthwiseConv2d_:BI});function VI(n,t,e,s,r=[1,1],o="NHWC"){const i=E(n,"x","dilation2d"),a=E(t,"filter","dilation2d");S(i.rank===3||i.rank===4,()=>`Error in dilation2d: input must be rank 3 or 4, but got rank ${i.rank}.`),S(a.rank===3,()=>`Error in dilation2d: filter must be rank 3, but got rank ${a.rank}.`),S(o==="NHWC",()=>`Error in dilation2d: Only NHWC is currently supported, but got dataFormat of ${o}`);let l=i,c=!1;i.rank===3&&(l=L(i,[1,i.shape[0],i.shape[1],i.shape[2]]),c=!0),S(l.shape[3]===a.shape[2],()=>`Error in dilation2d:  input and filter must have the same depth: ${l.shape[3]} vs ${a.shape[2]}`);const u={x:l,filter:a},h={strides:e,pad:s,dilations:r},d=F.runKernel(cc,u,h);return c?L(d,[d.shape[1],d.shape[2],d.shape[3]]):d}const WI=P({dilation2d_:VI});function Kr(n,t){const e=n.length,s=[];for(let r=0;r<e;r++){const o=e-1-r,i=n[o]||1;(t[t.length-1-r]||1)>1&&i===1&&s.unshift(o)}return s}function ce(n,t){const e=[];for(let s=0;s<t.length;s++){const r=n[n.length-s-1],o=t.length-s-1,i=t[o];(r==null||r===1&&i>1)&&e.unshift(o)}return e}function mt(n,t){const e=Math.max(n.length,t.length),s=new Array(e);for(let r=0;r<e;r++){let o=n[n.length-r-1];o==null&&(o=1);let i=t[t.length-r-1];if(i==null&&(i=1),o===1)s[e-r-1]=i;else if(i===1)s[e-r-1]=o;else if(o!==i){const a=`Operands could not be broadcast together with shapes ${n} and ${t}.`;throw Error(a)}else s[e-r-1]=o}return s}function UI(n,t){let e=E(n,"a","equal","string_or_numeric"),s=E(t,"b","equal","string_or_numeric");[e,s]=Zt(e,s),mt(e.shape,s.shape);const r={a:e,b:s};return F.runKernel(uc,r)}const Hn=P({equal_:UI});function GI(n,t,e){const s=E(t,"a","where"),r=E(e,"b","where"),o=E(n,"condition","where","bool"),i=mt(mt(o.shape,s.shape),r.shape),a=Bo(o,i),l=Bo(s,i),c=Bo(r,i),u={condition:a,t:l,e:c};return F.runKernel(Bc,u)}const Ae=P({where_:GI});function HI(n){const e={x:E(n,"x","zerosLike")};return F.runKernel(Kc,e)}const kt=P({zerosLike_:HI});function qI(n,t){let e=E(n,"a","div"),s=E(t,"b","div");[e,s]=Zt(e,s);const r=ut(e,s),o=kt(r),i=Hn(s,o);return Ae(i,o,r)}const jI=P({divNoNan_:qI});function KI(n,t){const e=E(n,"t1","dot"),s=E(t,"t2","dot");S((e.rank===1||e.rank===2)&&(s.rank===1||s.rank===2),()=>`Error in dot: inputs must all be rank 1 or 2, but got ranks ${e.rank} and ${s.rank}.`);const r=e.rank===1?e.size:e.shape[1],o=s.rank===1?s.size:s.shape[0];if(S(r===o,()=>`Error in dot: inner dimensions of inputs must match, but got ${r} and ${o}.`),e.rank===1&&s.rank===1){const i=L(e,[1,-1]),a=L(s,[-1,1]),l=Nt(i,a);return L(l,[])}else if(e.rank===1&&s.rank===2){const i=L(e,[1,-1]),a=L(s,[s.shape[0],s.shape[1]]),l=Nt(i,a);return L(l,[l.size])}else if(e.rank===2&&s.rank===1){const i=L(s,[-1,1]),a=Nt(e,i);return L(a,[a.size])}else{const i=L(s,[s.shape[0],s.shape[1]]);return Nt(e,i)}}const XI=P({dot_:KI});function YI(n,...t){const e=t.map((r,o)=>E(r,`tensors${o}`,"einsum")),s={equation:n};return F.runKernel(md,e,s)}const So=P({einsum_:YI});function ZI(n){const e={x:E(n,"x","elu","float32")};return F.runKernel(yi,e)}const eu=P({elu_:ZI});function JI(n){let t=E(n,"x","erf");S(t.dtype==="int32"||t.dtype==="float32",()=>"Input dtype must be `int32` or `float32`."),t.dtype==="int32"&&(t=st(t,"float32"));const e={x:t};return F.runKernel(wi,e)}const h0=P({erf_:JI});function Kd(n,t){for(let e=0;e<n.length;++e)if(n[n.length-e-1]!==t-1-e)return!1;return!0}function d0(n,t,e){const s=n.length+t.length,r=[];let o=0,i=0;for(let a=0;a<s;a++)e.indexOf(a)===-1?r.push(n[o++]):r.push(t[i++]);return r}function me(n,t){const e=[],s=n.length;for(let o=0;o<s;o++)t.indexOf(o)===-1&&e.push(n[o]);const r=t.map(o=>n[o]);return[e,r]}function ne(n,t){const e=t.map(s=>1);return d0(n,e,t)}function we(n,t,e){S(Kd(t,e),()=>`${n} supports only inner-most axes for now. Got axes ${t} and rank-${e} input.`)}function jt(n,t){if(Kd(n,t))return null;const e=[];for(let s=0;s<t;++s)n.indexOf(s)===-1&&e.push(s);return n.forEach(s=>e.push(s)),e}function Ms(n){return n.map((t,e)=>[e,t]).sort((t,e)=>t[1]-e[1]).map(t=>t[0])}function Jt(n,t){const e=[];for(let s=t-n;s<t;++s)e.push(s);return e}function QI(n,t=null,e=!1){const r={x:E(n,"x","max")},o={reductionIndices:t,keepDims:e};return F.runKernel(Cc,r,o)}const kn=P({max_:QI});function tS(n,t=null,e=!1){const r={x:E(n,"x","min")},o={axis:t,keepDims:e};return F.runKernel(Sc,r,o)}const pl=P({min_:tS});function eS(n,t){let e=E(n,"base","pow"),s=E(t,"exp","pow");[e,s]=Zt(e,s);const r={a:e,b:s};return F.runKernel(Mi,r)}const hr=P({pow_:eS});function Tt(n,t){if((un(n)&&t!=="string"||Array.isArray(n))&&t!=="complex64")throw new Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");if(t==="string"&&un(n)&&!(n instanceof Uint8Array))throw new Error("When making a scalar from encoded string, the value must be `Uint8Array`.");return Zc(n,[],[],t)}function nS(n){const e={x:E(n,"x","sqrt","float32")};return F.runKernel(Ki,e)}const ke=P({sqrt_:nS});function sS(n){const t=E(n,"x","square"),e={};return F.runKernel("Square",{x:t},e)}const Vt=P({square_:sS});function rS(n,t=null,e=!1){let s=E(n,"x","sum");s.dtype==="bool"&&(s=st(s,"int32"));const r={x:s},o={axis:t,keepDims:e};return F.runKernel(Wc,r,o)}const ct=P({sum_:rS});function oS(n,t="euclidean",e=null,s=!1){n=E(n,"x","norm");const r=f0(n,t,e);let o=r.shape;if(s){const i=vt(e,n.shape);o=ne(r.shape,i)}return L(r,o)}function f0(n,t,e=null){if(n.rank===0)return Te(n);if(n.rank!==1&&e===null)return f0(L(n,[-1]),t,e);if(n.rank===1||typeof e=="number"||Array.isArray(e)&&e.length===1){if(t===1)return ct(Te(n),e);if(t===1/0)return kn(Te(n),e);if(t===-1/0)return pl(Te(n),e);if(t==="euclidean"||t===2)return ke(ct(hr(Te(n),Tt(2,"int32")),e));throw new Error(`Error in norm: invalid ord value: ${t}`)}if(Array.isArray(e)&&e.length===2){if(t===1)return kn(ct(Te(n),e[0]),e[1]-1);if(t===1/0)return kn(ct(Te(n),e[1]),e[0]);if(t===-1/0)return pl(ct(Te(n),e[1]),e[0]);if(t==="fro"||t==="euclidean")return ke(ct(Vt(n),e));throw new Error(`Error in norm: invalid ord value: ${t}`)}throw new Error(`Error in norm: invalid axis: ${e}`)}const nu=P({norm_:oS});function iS(n,t=null,e=!1){return nu(n,"euclidean",t,e)}const aS=P({euclideanNorm_:iS});function lS(n){const e={x:E(n,"x","exp")};return F.runKernel(vi,e)}const qn=P({exp_:lS});function cS(n,t=0){const e=E(n,"x","expandDims","string_or_numeric");S(t<=e.rank,()=>"Axis must be <= rank of the tensor");const s={input:e},r={dim:t};return F.runKernel(hc,s,r)}const Oe=P({expandDims_:cS});function uS(n){const e={x:E(n,"x","expm1")};return F.runKernel(Ci,e)}const hS=P({expm1_:uS});function dS(n,t){const e=E(n,"x","tile","string_or_numeric");S(e.rank===t.length,()=>`Error in transpose: rank of input ${e.rank} must match length of reps ${t}.`);const s={x:e},r={reps:t};return F.runKernel(Qi,s,r)}const Cn=P({tile_:dS});function fS(n,t,e,s="float32"){t==null&&(t=n);const r=wt([n,t],s),o=n<=t?n:t;for(let a=0;a<o;++a)r.set(1,a,a);const i=L(r.toTensor(),[n,t]);if(e==null)return i;if(e.length===1)return Cn(Oe(i,0),[e[0],1,1]);if(e.length===2)return Cn(Oe(Oe(i,0),0),[e[0],e[1],1,1]);if(e.length===3)return Cn(Oe(Oe(Oe(i,0),0),0),[e[0],e[1],e[2],1,1]);throw new Error(`eye() currently supports only 1D and 2D batchShapes, but received ${e.length}D.`)}const p0=P({eye_:fS});function pS(n){const e={x:E(n,"x","floor","float32")};return F.runKernel($i,e)}const su=P({floor_:pS});function mS(n,t,e=0,s=0){const r=E(n,"x","gather"),o=E(t,"indices","gather","int32"),i={x:r,indices:o},a={axis:e,batchDims:s};return F.runKernel(fc,i,a)}const Xd=P({gather_:mS});function gS(n,t){let e=E(n,"a","greater","string_or_numeric"),s=E(t,"b","greater","string_or_numeric");[e,s]=Zt(e,s),mt(e.shape,s.shape);const r={a:e,b:s};return F.runKernel(pc,r)}const en=P({greater_:gS});function xS(n,t){let e=E(n,"a","greaterEqual","string_or_numeric"),s=E(t,"b","greaterEqual","string_or_numeric");[e,s]=Zt(e,s),mt(e.shape,s.shape);const r={a:e,b:s};return F.runKernel(Ii,r)}const vr=P({greaterEqual_:xS});function bS(n){const e={input:E(n,"input","imag")};return F.runKernel(vd,e)}const Yd=P({imag_:bS});function yS(n){const e={x:E(n,"x","isFinite")};return F.runKernel(Ni,e)}const wS=P({isFinite_:yS});function vS(n){const e={x:E(n,"x","isInf")};return F.runKernel(Ti,e)}const CS=P({isInf_:vS});function $S(n){const e={x:E(n,"x","isNaN")};return F.runKernel(Ei,e)}const kS=P({isNaN_:$S});function IS(n,t=.2){const s={x:E(n,"x","leakyRelu")},r={alpha:t};return F.runKernel(mc,s,r)}const Zd=P({leakyRelu_:IS});function SS(n,t){let e=E(n,"a","less","string_or_numeric"),s=E(t,"b","less","string_or_numeric");[e,s]=Zt(e,s),mt(e.shape,s.shape);const r={a:e,b:s};return F.runKernel(gc,r)}const ml=P({less_:SS});function NS(n,t){let e=E(n,"a","lessEqual","string_or_numeric"),s=E(t,"b","lessEqual","string_or_numeric");[e,s]=Zt(e,s),mt(e.shape,s.shape);const r={a:e,b:s};return F.runKernel(xc,r)}const uo=P({lessEqual_:NS});function TS(n,t=5,e=1,s=1,r=.5){const o=E(n,"x","localResponseNormalization");S(o.rank===4||o.rank===3,()=>`Error in localResponseNormalization: x must be rank 3 or 4 but got
               rank ${o.rank}.`),S(Hr(t),()=>`Error in localResponseNormalization: depthRadius must be an integer but got depthRadius ${t}.`);let i=o,a=!1;o.rank===3&&(a=!0,i=L(o,[1,o.shape[0],o.shape[1],o.shape[2]]));const l={x:i},c={depthRadius:t,bias:e,alpha:s,beta:r},u=F.runKernel(vc,l,c);return a?L(u,[u.shape[1],u.shape[2],u.shape[3]]):u}const ES=P({localResponseNormalization_:TS});function RS(n){const e={x:E(n,"x","log","float32")};return F.runKernel(Ri,e)}const jn=P({log_:RS});function AS(n){const e={x:E(n,"x","log1p")};return F.runKernel(Ai,e)}const m0=P({log1p_:AS});function DS(n,t){S(rh(n),()=>"The f passed in variableGrads(f) must be a function"),S(t==null||Array.isArray(t)&&t.every(c=>c instanceof dl),()=>"The varList passed in variableGrads(f, varList) must be an array of variables");const e=t!=null;if(!e){t=[];for(const c in F.registeredVariables)t.push(F.registeredVariables[c])}const s=e?t.filter(c=>!c.trainable):null,r=t.length;t=t.filter(c=>c.trainable),S(t.length>0,()=>`variableGrads() expects at least one of the input variables to be trainable, but none of the ${r} variables is trainable.`);const o=!0,{value:i,grads:a}=F.gradients(n,t,null,o);S(a.some(c=>c!=null),()=>"Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize()."),S(i.rank===0,()=>`The f passed in variableGrads(f) must return a scalar, but it returned a rank-${i.rank} tensor`);const l={};return t.forEach((c,u)=>{a[u]!=null&&(l[c.name]=a[u])}),s?.forEach(c=>l[c.name]=null),{value:i,grads:l}}function Xr(n){return F.customGrad(n)}function _S(n){const e={x:E(n,"x","neg")};return F.runKernel(Tc,e)}const Yt=P({neg_:_S});function FS(n){const e={x:E(n,"x","softplus")};return F.runKernel(ji,e)}const na=P({softplus_:FS});function OS(n){const t=E(n,"x","logSigmoid");return Xr(s=>({value:Yt(na(Yt(s))),gradFunc:i=>_(i,co(Yt(s)))}))(t)}const MS=P({logSigmoid_:OS});function LS(n,t){let e=E(n,"a","sub"),s=E(t,"b","sub");[e,s]=Zt(e,s);const r={a:e,b:s};return F.runKernel(Yi,r)}const ft=P({sub_:LS});function PS(n,t=-1){const e=E(n,"logits","logSoftmax");if(t===-1&&(t=e.rank-1),t!==e.rank-1)throw Error(`Log Softmax along a non-last dimension is not yet supported. Logits was rank ${e.rank} and axis was ${t}`);return Xr((r,o)=>{const a=kn(r,t,!0),l=ft(r,a),c=ft(st(l,"float32"),jn(ct(qn(l),t,!0)));return o([c]),{value:c,gradFunc:(h,d)=>{const[f]=d,p=!0,m=qn(f);return ft(h,_(ct(h,t,p),m))}}})(e)}const g0=P({logSoftmax_:PS});function zS(n,t=null,e=!1){const s=E(n,"x","logSumExp"),r=vt(t,s.shape),o=kn(s,r,!0),i=ft(s,o),a=qn(i),l=ct(a,r),c=jn(l),u=J(L(o,c.shape),c);if(e){const h=ne(u.shape,r);return L(u,h)}return u}const x0=P({logSumExp_:zS});function BS(n,t){const e=E(n,"a","logicalAnd","bool"),s=E(t,"b","logicalAnd","bool");mt(e.shape,s.shape);const r={a:e,b:s};return F.runKernel(bc,r)}const os=P({logicalAnd_:BS});function VS(n){const e={x:E(n,"x","logicalNot","bool")};return F.runKernel(yc,e)}const Jd=P({logicalNot_:VS});function WS(n,t){const e=E(n,"a","logicalOr","bool"),s=E(t,"b","logicalOr","bool");mt(e.shape,s.shape);const r={a:e,b:s};return F.runKernel(wc,r)}const b0=P({logicalOr_:WS});function US(n,t){const e=E(n,"a","logicalXor","bool"),s=E(t,"b","logicalXor","bool");return mt(e.shape,s.shape),os(b0(n,t),Jd(os(n,t)))}const GS=P({logicalXor_:US});function HS(n,t,e,s,r){const o=E(n,"x","maxPool"),i=1;let a=o,l=!1;o.rank===3&&(l=!0,a=L(o,[1,o.shape[0],o.shape[1],o.shape[2]])),S(a.rank===4,()=>`Error in maxPool: input must be rank 4 but got rank ${a.rank}.`),S(Ie(e,i),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${e} and dilations '${i}'`),Be("maxPool",s,r);const c={x:a},u={filterSize:t,strides:e,pad:s,dimRoundingMode:r},h=F.runKernel($c,c,u);return l?L(h,[h.shape[1],h.shape[2],h.shape[3]]):h}const Qd=P({maxPool_:HS});function qS(n,t=[1,1,1],e,s,r,o="NDHWC"){const i=E(n,"x","maxPool3d");let a=i,l=!1;i.rank===4&&(l=!0,a=L(i,[1,i.shape[0],i.shape[1],i.shape[2],i.shape[3]])),S(a.rank===5,()=>`Error in maxPool3d: x must be rank 5 but got rank ${a.rank}.`),S(o==="NDHWC",()=>`Error in maxPool3d: Only NDHWC is currently supported, but got dataFormat of ${o}`),Be("maxPool3d",s,r);const c={x:a},u={filterSize:t,strides:e,pad:s,dimRoundingMode:r,dataFormat:o},h=F.runKernel(kc,c,u);return l?L(h,[h.shape[1],h.shape[2],h.shape[3],h.shape[4]]):h}const jS=P({maxPool3d_:qS});function KS(n,t){let e=E(n,"a","maximum"),s=E(t,"b","maximum");[e,s]=Zt(e,s),e.dtype==="bool"&&(e=st(e,"int32"),s=st(s,"int32")),mt(e.shape,s.shape);const r={a:e,b:s};return F.runKernel(Di,r)}const Ls=P({maximum_:KS});function XS(n,t=null,e=!1){const r={x:E(n,"x","mean")},o={axis:t,keepDims:e};return F.runKernel(Ic,r,o)}const ee=P({mean_:XS});function fe(n,t="float32"){if(us(n),t==="complex64"){const s=fe(n,"float32"),r=fe(n,"float32");return or(s,r)}const e=$e(q(n),t);return F.makeTensor(e,n,t)}function Ps(n,t="float32"){if(us(n),t==="complex64"){const s=Ps(n,"float32"),r=fe(n,"float32");return or(s,r)}const e=Xh(q(n),t);return F.makeTensor(e,n,t)}function YS(n,t){let e=E(n,"a","minimum"),s=E(t,"b","minimum");[e,s]=Zt(e,s),e.dtype==="bool"&&(e=st(e,"int32"),s=st(s,"int32")),mt(e.shape,s.shape);const r={a:e,b:s};return F.runKernel(_i,r)}const qo=P({minimum_:YS});function ZS(n,t,e){S(e==="reflect"||e==="symmetric",()=>`Invalid mode. Mode must be either reflect or symmetric. Got ${e}.`);const s=E(n,"x","mirrorPad");if(s.rank===0)throw new Error("mirrorPad(scalar) is not defined. Pass non-scalar to mirrorPad");S(t.length===s.rank,()=>`Padding doesn't match input. Must be ${s.rank}. Got ${t.length}.`);const r=e==="reflect"?1:0;for(let a=0;a<s.rank;a++)S(t[a].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),S(t[a][0]>=0&&t[a][0]<=s.shape[a]-r&&t[a][1]>=0&&t[a][1]<=s.shape[a]-r,()=>`Padding in dimension ${a} cannot be greater than or equal to ${s.shape[a]-r} or less than 0 for input of shape ${s.shape}`);const o={paddings:t,mode:e},i={x:s};return F.runKernel(Nc,i,o)}const JS=P({mirrorPad_:ZS});function QS(n,t){let e=E(n,"a","mod"),s=E(t,"b","mod");[e,s]=Zt(e,s);const r={a:e,b:s};return F.runKernel(Fi,r)}const t2=P({mod_:QS});function e2(n,t=null,e=!1){n=E(n,"x","moments");const s=vt(t,n.shape),r=ee(n,s,e);let o=r.shape;e||(o=ne(r.shape,s));const i=Vt(ft(st(n,"float32"),L(r,o))),a=ee(i,s,e);return{mean:r,variance:a}}const tf=P({moments_:e2});function n2(n,t){let e=E(n,"a","notEqual","string_or_numeric"),s=E(t,"b","notEqual","string_or_numeric");[e,s]=Zt(e,s),mt(e.shape,s.shape);const r={a:e,b:s};return F.runKernel(Ec,r)}const gl=P({notEqual_:n2});function s2(n,t,e=1,s=0,r="int32"){if(t<2)throw new Error(`Error in oneHot: depth must be >=2, but it is ${t}`);const i={indices:E(n,"indices","oneHot","int32")},a={dtype:r,depth:t,onValue:e,offValue:s};return F.runKernel(Ac,i,a)}const y0=P({oneHot_:s2});function r2(n){const e={x:E(n,"x","onesLike")};return F.runKernel(Rc,e)}const hn=P({onesLike_:r2});function o2(n,t,e=0){const s=E(n,"x","pad");if(s.rank===0)throw new Error("pad(scalar) is not defined. Pass non-scalar to pad");const r={paddings:t,constantValue:e},o={x:s};return F.runKernel(_c,o,r)}const ef=P({pad_:o2});function i2(n,t,e){const s=E(n,"x","spaceToBatchND");S(s.rank>=1+t.length,()=>`input rank ${s.rank} should be > than [blockShape] ${t.length}`),S(e.length===t.length,()=>`paddings.shape[0] ${e.length} must be equal to [blockShape] ${t.length}`),S(s.shape.reduce((i,a,l)=>l>0&&l<=t.length?i&&(a+e[l-1][0]+e[l-1][1])%t[l-1]===0:i,!0),()=>`input spatial dimensions ${s.shape.slice(1)} with paddings ${e.toString()} must be divisible by blockShapes ${t.toString()}`);const r={x:s},o={blockShape:t,paddings:e};return F.runKernel(Uc,r,o)}const nf=P({spaceToBatchND_:i2});function a2(n,t,e,s,r,o,i){r==null&&(r=[1,1]),o==null&&(o=1),s===0&&(s="valid");const a=E(n,"x","maxPool");let l=a,c=!1;a.rank===3&&(c=!0,l=L(a,[1,a.shape[0],a.shape[1],a.shape[2]])),S(Ie(o,r),()=>`Error in pool: Either strides or dilations must be 1. Got strides ${o} and dilations '${r}'`);const u=dn(l.shape,t,o,r,s),h=[u.dilationHeight,u.dilationWidth];let d;s==="same"?d=c2([u.filterHeight,u.filterWidth],h):d=[[0,0],[0,0]];const f=h[0]===1&&h[1]===1,[p,m]=l2([u.inHeight,u.inWidth],h,d),g=f?s:"valid",x=f?l:nf(l,h,p),w=(e==="avg"?()=>Ud(x,t,o,g,i):()=>Qd(x,t,o,g,i))(),y=f?w:Gd(w,h,m);return c?L(y,[y.shape[1],y.shape[2],y.shape[3]]):y}function l2(n,t,e){const s=e.map(u=>u[0]),r=e.map(u=>u[1]),o=n.concat(s,r),i=t.map((u,h)=>(u-o[h]%u)%u),a=r.map((u,h)=>u+i[h]),l=t.map((u,h)=>[s[h],a[h]]),c=t.map((u,h)=>[0,i[h]]);return[l,c]}function c2(n,t){const s=n.map((i,a)=>i+(i-1)*(t[a]-1)).map(i=>i-1),r=s.map(i=>Math.floor(i/2)),o=s.map((i,a)=>i-r[a]);return s.map((i,a)=>[r[a],o[a]])}const u2=P({pool_:a2});function h2(n,t){const e=E(n,"x","prelu"),s=E(t,"alpha","prelu"),r={x:e,alpha:s};return F.runKernel(Fc,r)}const sf=P({prelu_:h2});function d2(n,t=null,e=!1){let s=E(n,"x","prod");s.dtype==="bool"&&(s=st(s,"int32"));const r={x:s},o={axis:t,keepDims:e};return F.runKernel(Oc,r,o)}const f2=P({prod_:d2});var Ya={exports:{}},p2=Ya.exports,im;function m2(){return im||(im=1,(function(n){(function(t,e,s){function r(l){var c=this,u=a();c.next=function(){var h=2091639*c.s0+c.c*23283064365386963e-26;return c.s0=c.s1,c.s1=c.s2,c.s2=h-(c.c=h|0)},c.c=1,c.s0=u(" "),c.s1=u(" "),c.s2=u(" "),c.s0-=u(l),c.s0<0&&(c.s0+=1),c.s1-=u(l),c.s1<0&&(c.s1+=1),c.s2-=u(l),c.s2<0&&(c.s2+=1),u=null}function o(l,c){return c.c=l.c,c.s0=l.s0,c.s1=l.s1,c.s2=l.s2,c}function i(l,c){var u=new r(l),h=c&&c.state,d=u.next;return d.int32=function(){return u.next()*4294967296|0},d.double=function(){return d()+(d()*2097152|0)*11102230246251565e-32},d.quick=d,h&&(typeof h=="object"&&o(h,u),d.state=function(){return o(u,{})}),d}function a(){var l=4022871197,c=function(u){u=String(u);for(var h=0;h<u.length;h++){l+=u.charCodeAt(h);var d=.02519603282416938*l;l=d>>>0,d-=l,d*=l,l=d>>>0,d-=l,l+=d*4294967296}return(l>>>0)*23283064365386963e-26};return c}e&&e.exports?e.exports=i:this.alea=i})(p2,n)})(Ya)),Ya.exports}var Za={exports:{}},g2=Za.exports,am;function x2(){return am||(am=1,(function(n){(function(t,e,s){function r(a){var l=this,c="";l.x=0,l.y=0,l.z=0,l.w=0,l.next=function(){var h=l.x^l.x<<11;return l.x=l.y,l.y=l.z,l.z=l.w,l.w^=l.w>>>19^h^h>>>8},a===(a|0)?l.x=a:c+=a;for(var u=0;u<c.length+64;u++)l.x^=c.charCodeAt(u)|0,l.next()}function o(a,l){return l.x=a.x,l.y=a.y,l.z=a.z,l.w=a.w,l}function i(a,l){var c=new r(a),u=l&&l.state,h=function(){return(c.next()>>>0)/4294967296};return h.double=function(){do var d=c.next()>>>11,f=(c.next()>>>0)/4294967296,p=(d+f)/(1<<21);while(p===0);return p},h.int32=c.next,h.quick=h,u&&(typeof u=="object"&&o(u,c),h.state=function(){return o(c,{})}),h}e&&e.exports?e.exports=i:this.xor128=i})(g2,n)})(Za)),Za.exports}var Ja={exports:{}},b2=Ja.exports,lm;function y2(){return lm||(lm=1,(function(n){(function(t,e,s){function r(a){var l=this,c="";l.next=function(){var h=l.x^l.x>>>2;return l.x=l.y,l.y=l.z,l.z=l.w,l.w=l.v,(l.d=l.d+362437|0)+(l.v=l.v^l.v<<4^(h^h<<1))|0},l.x=0,l.y=0,l.z=0,l.w=0,l.v=0,a===(a|0)?l.x=a:c+=a;for(var u=0;u<c.length+64;u++)l.x^=c.charCodeAt(u)|0,u==c.length&&(l.d=l.x<<10^l.x>>>4),l.next()}function o(a,l){return l.x=a.x,l.y=a.y,l.z=a.z,l.w=a.w,l.v=a.v,l.d=a.d,l}function i(a,l){var c=new r(a),u=l&&l.state,h=function(){return(c.next()>>>0)/4294967296};return h.double=function(){do var d=c.next()>>>11,f=(c.next()>>>0)/4294967296,p=(d+f)/(1<<21);while(p===0);return p},h.int32=c.next,h.quick=h,u&&(typeof u=="object"&&o(u,c),h.state=function(){return o(c,{})}),h}e&&e.exports?e.exports=i:this.xorwow=i})(b2,n)})(Ja)),Ja.exports}var Qa={exports:{}},w2=Qa.exports,cm;function v2(){return cm||(cm=1,(function(n){(function(t,e,s){function r(a){var l=this;l.next=function(){var u=l.x,h=l.i,d,f;return d=u[h],d^=d>>>7,f=d^d<<24,d=u[h+1&7],f^=d^d>>>10,d=u[h+3&7],f^=d^d>>>3,d=u[h+4&7],f^=d^d<<7,d=u[h+7&7],d=d^d<<13,f^=d^d<<9,u[h]=f,l.i=h+1&7,f};function c(u,h){var d,f=[];if(h===(h|0))f[0]=h;else for(h=""+h,d=0;d<h.length;++d)f[d&7]=f[d&7]<<15^h.charCodeAt(d)+f[d+1&7]<<13;for(;f.length<8;)f.push(0);for(d=0;d<8&&f[d]===0;++d);for(d==8?f[7]=-1:f[d],u.x=f,u.i=0,d=256;d>0;--d)u.next()}c(l,a)}function o(a,l){return l.x=a.x.slice(),l.i=a.i,l}function i(a,l){a==null&&(a=+new Date);var c=new r(a),u=l&&l.state,h=function(){return(c.next()>>>0)/4294967296};return h.double=function(){do var d=c.next()>>>11,f=(c.next()>>>0)/4294967296,p=(d+f)/(1<<21);while(p===0);return p},h.int32=c.next,h.quick=h,u&&(u.x&&o(u,c),h.state=function(){return o(c,{})}),h}e&&e.exports?e.exports=i:this.xorshift7=i})(w2,n)})(Qa)),Qa.exports}var tl={exports:{}},C2=tl.exports,um;function $2(){return um||(um=1,(function(n){(function(t,e,s){function r(a){var l=this;l.next=function(){var u=l.w,h=l.X,d=l.i,f,p;return l.w=u=u+1640531527|0,p=h[d+34&127],f=h[d=d+1&127],p^=p<<13,f^=f<<17,p^=p>>>15,f^=f>>>12,p=h[d]=p^f,l.i=d,p+(u^u>>>16)|0};function c(u,h){var d,f,p,m,g,x=[],b=128;for(h===(h|0)?(f=h,h=null):(h=h+"\0",f=0,b=Math.max(b,h.length)),p=0,m=-32;m<b;++m)h&&(f^=h.charCodeAt((m+32)%h.length)),m===0&&(g=f),f^=f<<10,f^=f>>>15,f^=f<<4,f^=f>>>13,m>=0&&(g=g+1640531527|0,d=x[m&127]^=f+g,p=d==0?p+1:0);for(p>=128&&(x[(h&&h.length||0)&127]=-1),p=127,m=512;m>0;--m)f=x[p+34&127],d=x[p=p+1&127],f^=f<<13,d^=d<<17,f^=f>>>15,d^=d>>>12,x[p]=f^d;u.w=g,u.X=x,u.i=p}c(l,a)}function o(a,l){return l.i=a.i,l.w=a.w,l.X=a.X.slice(),l}function i(a,l){a==null&&(a=+new Date);var c=new r(a),u=l&&l.state,h=function(){return(c.next()>>>0)/4294967296};return h.double=function(){do var d=c.next()>>>11,f=(c.next()>>>0)/4294967296,p=(d+f)/(1<<21);while(p===0);return p},h.int32=c.next,h.quick=h,u&&(u.X&&o(u,c),h.state=function(){return o(c,{})}),h}e&&e.exports?e.exports=i:this.xor4096=i})(C2,n)})(tl)),tl.exports}var el={exports:{}},k2=el.exports,hm;function I2(){return hm||(hm=1,(function(n){(function(t,e,s){function r(a){var l=this,c="";l.next=function(){var h=l.b,d=l.c,f=l.d,p=l.a;return h=h<<25^h>>>7^d,d=d-f|0,f=f<<24^f>>>8^p,p=p-h|0,l.b=h=h<<20^h>>>12^d,l.c=d=d-f|0,l.d=f<<16^d>>>16^p,l.a=p-h|0},l.a=0,l.b=0,l.c=-1640531527,l.d=1367130551,a===Math.floor(a)?(l.a=a/4294967296|0,l.b=a|0):c+=a;for(var u=0;u<c.length+20;u++)l.b^=c.charCodeAt(u)|0,l.next()}function o(a,l){return l.a=a.a,l.b=a.b,l.c=a.c,l.d=a.d,l}function i(a,l){var c=new r(a),u=l&&l.state,h=function(){return(c.next()>>>0)/4294967296};return h.double=function(){do var d=c.next()>>>11,f=(c.next()>>>0)/4294967296,p=(d+f)/(1<<21);while(p===0);return p},h.int32=c.next,h.quick=h,u&&(typeof u=="object"&&o(u,c),h.state=function(){return o(c,{})}),h}e&&e.exports?e.exports=i:this.tychei=i})(k2,n)})(el)),el.exports}var nl={exports:{}};const S2={},N2=Object.freeze(Object.defineProperty({__proto__:null,default:S2},Symbol.toStringTag,{value:"Module"})),T2=h$(N2);var E2=nl.exports,dm;function R2(){return dm||(dm=1,(function(n){(function(t,e,s){var r=256,o=6,i=52,a="random",l=s.pow(r,o),c=s.pow(2,i),u=c*2,h=r-1,d;function f(y,v,$){var N=[];v=v==!0?{entropy:!0}:v||{};var T=x(g(v.entropy?[y,w(e)]:y??b(),3),N),k=new p(N),I=function(){for(var C=k.g(o),R=l,A=0;C<c;)C=(C+A)*r,R*=r,A=k.g(1);for(;C>=u;)C/=2,R/=2,A>>>=1;return(C+A)/R};return I.int32=function(){return k.g(4)|0},I.quick=function(){return k.g(4)/4294967296},I.double=I,x(w(k.S),e),(v.pass||$||function(C,R,A,O){return O&&(O.S&&m(O,k),C.state=function(){return m(k,{})}),A?(s[a]=C,R):C})(I,T,"global"in v?v.global:this==s,v.state)}function p(y){var v,$=y.length,N=this,T=0,k=N.i=N.j=0,I=N.S=[];for($||(y=[$++]);T<r;)I[T]=T++;for(T=0;T<r;T++)I[T]=I[k=h&k+y[T%$]+(v=I[T])],I[k]=v;(N.g=function(C){for(var R,A=0,O=N.i,M=N.j,z=N.S;C--;)R=z[O=h&O+1],A=A*r+z[h&(z[O]=z[M=h&M+R])+(z[M]=R)];return N.i=O,N.j=M,A})(r)}function m(y,v){return v.i=y.i,v.j=y.j,v.S=y.S.slice(),v}function g(y,v){var $=[],N=typeof y,T;if(v&&N=="object")for(T in y)try{$.push(g(y[T],v-1))}catch{}return $.length?$:N=="string"?y:y+"\0"}function x(y,v){for(var $=y+"",N,T=0;T<$.length;)v[h&T]=h&(N^=v[h&T]*19)+$.charCodeAt(T++);return w(v)}function b(){try{var y;return d&&(y=d.randomBytes)?y=y(r):(y=new Uint8Array(r),(t.crypto||t.msCrypto).getRandomValues(y)),w(y)}catch{var v=t.navigator,$=v&&v.plugins;return[+new Date,t,$,t.screen,w(e)]}}function w(y){return String.fromCharCode.apply(0,y)}if(x(s.random(),e),n.exports){n.exports=f;try{d=T2}catch{}}else s["seed"+a]=f})(typeof self<"u"?self:E2,[],Math)})(nl)),nl.exports}var Lu,fm;function A2(){if(fm)return Lu;fm=1;var n=m2(),t=x2(),e=y2(),s=v2(),r=$2(),o=I2(),i=R2();return i.alea=n,i.xor128=t,i.xorwow=e,i.xorshift7=s,i.xor4096=r,i.tychei=o,Lu=i,Lu}var rf=A2();class w0{constructor(t,e,s,r,o){this.mean=t,this.stdDev=e,this.dtype=s,this.nextVal=NaN,this.truncated=r,this.truncated&&(this.upper=this.mean+this.stdDev*2,this.lower=this.mean-this.stdDev*2);const i=o||Math.random();this.random=rf.alea(i.toString())}nextValue(){if(!isNaN(this.nextVal)){const r=this.nextVal;return this.nextVal=NaN,r}let t,e,s=!1;for(;!s;){let r,o,i;do r=2*this.random()-1,o=2*this.random()-1,i=r*r+o*o;while(i>=1||i===0);const a=Math.sqrt(-2*Math.log(i)/i);t=this.mean+this.stdDev*r*a,e=this.mean+this.stdDev*o*a,(!this.truncated||this.isValidTruncated(t))&&(s=!0)}return(!this.truncated||this.isValidTruncated(e))&&(this.nextVal=this.convertValue(e)),this.convertValue(t)}convertValue(t){return this.dtype==null||this.dtype==="float32"?t:Math.round(t)}isValidTruncated(t){return t<=this.upper&&t>=this.lower}}class D2{constructor(t=0,e=1,s,r){if(this.canReturnFloat=()=>this.dtype==null||this.dtype==="float32",this.min=t,this.range=e-t,this.dtype=s,r==null&&(r=Math.random()),typeof r=="number"&&(r=r.toString()),!this.canReturnFloat()&&this.range<=1)throw new Error(`The difference between ${t} - ${e} <= 1 and dtype is not float`);this.random=rf.alea(r)}convertValue(t){return this.canReturnFloat()?t:Math.round(t)}nextValue(){return this.convertValue(this.min+this.range*this.random())}}function _2(n,t=0,e=1,s,r){if(us(n),s!=null&&s==="bool")throw new Error(`Unsupported data type ${s}`);const o=new w0(t,e,s,!1,r),i=wt(n,s);for(let a=0;a<i.values.length;a++)i.values[a]=o.nextValue();return i.toTensor()}const F2=P({randomNormal_:_2});function O2(n,t=0,e=1,s="float32",r){us(n);const o=wt(n,s),i=new D2(t,e,null,r);for(let a=0;a<o.values.length;a++)o.values[a]=i.nextValue();return o.toTensor()}const sa=P({randomUniform_:O2});function jo(n,t,e=1,s="float32"){if(e===0)throw new Error("Cannot have a step of zero");const r={start:n,stop:t,step:e,dtype:s};return F.runKernel(Td,{},r)}function M2(n){const e={input:E(n,"input","real")};return F.runKernel(Ed,e)}const xl=P({real_:M2});function L2(n){const e={x:E(n,"x","reciprocal")};return F.runKernel(Li,e)}const P2=P({reciprocal_:L2});function z2(n){const e={x:E(n,"x","relu")};return F.runKernel(Pi,e)}const Cr=P({relu_:z2});function B2(n){const e={x:E(n,"x","relu6")};return F.runKernel(zi,e)}const v0=P({relu6_:B2});function V2(n,t){const s={x:E(n,"x","reverse")},r={dims:t};return F.runKernel(zc,s,r)}const dr=P({reverse_:V2});function W2(n){const e={x:E(n,"x","round")};return F.runKernel(Bi,e)}const C0=P({round_:W2});function U2(n){const e={x:E(n,"x","rsqrt","float32")};return F.runKernel(Vi,e)}const $0=P({rsqrt_:U2});function G2(n){const e={x:E(n,"x","selu")};return F.runKernel(Wi,e)}const k0=P({selu_:G2});function H2(n,t,e,s,r,o=[1,1],i="NHWC"){const a=E(n,"x","separableConv2d"),l=E(t,"depthwiseFilter","separableConv2d"),c=E(e,"pointwiseFilter","separableConv2d");let u=a,h=!1;if(a.rank===3&&(h=!0,u=L(a,[1,a.shape[0],a.shape[1],a.shape[2]])),i==="NCHW")throw new Error("separableConv2d currently does not support dataFormat NCHW; only NHWC is supported");S(u.rank===4,()=>`Error in separableConv2d: input must be rank 4, but got rank ${u.rank}.`),S(l.rank===4,()=>`Error in separableConv2d: depthwise filter must be rank 4, but got rank ${l.rank}.`),S(c.rank===4,()=>`Error in separableConv2d: pointwise filter must be rank 4, but got rank ${l.rank}.`),S(c.shape[0]===1,()=>`Error in separableConv2d: the first dimension of pointwise filter  must be 1, but got ${c.shape[0]}.`),S(c.shape[1]===1,()=>`Error in separableConv2d: the second dimension of pointwise filter must be 1, but got ${c.shape[1]}.`);const d=l.shape[2],f=l.shape[3];S(c.shape[2]===d*f,()=>`Error in separableConv2d: the third dimension of pointwise filter must be ${d*f}, but got ${c.shape[2]}.`);const p=jd(u,l,s,r,i,o),g=ur(p,c,1,"valid",i);return h?L(g,[g.shape[1],g.shape[2],g.shape[3]]):g}const I0=P({separableConv2d_:H2});function q2(n){const e={x:E(n,"x","sign")};return F.runKernel(Hi,e)}const j2=P({sign_:q2});function K2(n){const e={x:E(n,"x","sin","float32")};return F.runKernel(Ui,e)}const S0=P({sin_:K2});function X2(n){const e={x:E(n,"x","sinh")};return F.runKernel(Gi,e)}const N0=P({sinh_:X2});function Y2(n,t,e){const s=E(n,"x","slice1d");return S(s.rank===1,()=>`slice1d expects a rank-1 tensor, but got a rank-${s.rank} tensor`),zt(s,[t],[e])}const of=P({slice1d_:Y2});function Z2(n,t,e){const s=E(n,"x","slice2d");return S(s.rank===2,()=>`slice2d expects a rank-2 tensor, but got a rank-${s.rank} tensor`),zt(s,t,e)}const T0=P({slice2d_:Z2});function J2(n,t,e){const s=E(n,"x","slice3d");return S(s.rank===3,()=>`slice3d expects a rank-3 tensor, but got a rank-${s.rank} tensor`),zt(s,t,e)}const af=P({slice3d_:J2});function Q2(n,t,e){const s=E(n,"x","slice4d");return S(s.rank===4,()=>`slice4d expects a rank-4 tensor, but got a rank-${s.rank} tensor`),zt(s,t,e)}const bl=P({slice4d_:Q2});function tN(n,t=-1){const e=E(n,"logits","softmax","float32");if(t===-1&&(t=e.rank-1),t!==e.rank-1)throw Error(`Softmax along a non-last dimension is not yet supported. Logits was rank ${e.rank} and dim was ${t}`);const s={logits:e},r={dim:t};return F.runKernel(Hc,s,r)}const lf=P({softmax_:tN});function eN(n){S(n.dtype==="complex64",()=>`The dtype for tf.spectral.fft() must be complex64 but got ${n.dtype}.`);const t={input:n};return F.runKernel(xd,t)}const E0=P({fft_:eN});function nN(n){S(n.dtype==="complex64",()=>`The dtype for tf.spectral.ifft() must be complex64 but got ${n.dtype}.`);const t={input:n};return F.runKernel(wd,t)}const wh=P({ifft_:nN});function sN(n){const t=n.shape[n.shape.length-1],e=n.size/t;let s;if(t<=2){const r=L(n,[e,t]);s=wh(r)}else{const r=[e,2*(t-1)],o=L(xl(n),[e,t]),i=L(Yd(n),[e,t]),a=dr(zt(o,[0,1],[e,t-2]),1),l=_(dr(zt(i,[0,1],[e,t-2]),1),Tt(-1)),c=Le([o,a],1),u=Le([i,l],1),h=L(or(c,u),[r[0],r[1]]);s=wh(h)}if(s=xl(s),n.rank===3&&n.shape[0]!==0){const r=s,o=n.shape[0];s=L(s,[o,s.shape[0]/o,s.shape[1]]),r.dispose()}return s}const rN=P({irfft_:sN});function oN(n,t,e=0){const r={x:E(n,"x","split")},o={numOrSizeSplits:t,axis:e};return F.runKernel(Gc,r,o)}const Qe=P({split_:oN});function iN(n,t){S(n.dtype==="float32",()=>`The dtype for rfft() must be real value but got ${n.dtype}`);let e=n.shape[n.shape.length-1];const s=n.size/e;let r;if(t!=null&&t<e){const p=n.shape.map(g=>0),m=n.shape.map(g=>g);m[n.shape.length-1]=t,r=zt(n,p,m),e=t}else if(t!=null&&t>e){const p=n.shape.map(m=>m);p[n.shape.length-1]=t-e,r=Le([n,fe(p)],n.shape.length-1),e=t}else r=n;const o=kt(r),i=L(or(r,o),[s,e]),a=E0(i),l=Math.floor(e/2)+1,c=xl(a),u=Yd(a),h=Qe(c,[l,e-l],c.shape.length-1),d=Qe(u,[l,e-l],u.shape.length-1),f=r.shape.slice();return f[r.shape.length-1]=l,L(or(h[0],d[0]),f)}const aN=P({rfft_:iN});function lN(n,t){let e=E(n,"a","squaredDifference"),s=E(t,"b","squaredDifference");[e,s]=Zt(e,s),mt(e.shape,s.shape);const r={a:e,b:s},o={};return F.runKernel(Xi,r,o)}const cN=P({squaredDifference_:lN});function uN(n,t){const e=E(n,"x","squeeze","string_or_numeric");return L(e,Ds(e.shape,t).newShape)}const ra=P({squeeze_:uN});function hN(n,t=0){const e=Yx(n,"tensors","stack","string_or_numeric");S(e.length>=1,()=>"Pass at least one tensor to tf.stack"),e.length>0&&S(t<=e[0].rank,()=>"Axis must be <= rank of the tensor");const s=e,r={axis:t};return F.runKernel(Dc,s,r)}const is=P({stack_:hN});function dN(n,t=0){const s={x:E(n,"x","step")},r={alpha:t};return F.runKernel(ta,s,r)}const oa=P({step_:dN});function fN(n,t,e,s,r=0,o=0,i=0,a=0,l=0){const u={x:E(n,"x","stridedSlice","string_or_numeric")},h={begin:t,end:e,strides:s,beginMask:r,endMask:o,ellipsisMask:i,newAxisMask:a,shrinkAxisMask:l};return F.runKernel(Fd,u,h)}const pN=P({stridedSlice_:fN});function mN(n){const e={x:E(n,"x","tan","float32")};return F.runKernel(Zi,e)}const gN=P({tan_:mN});function Ue(n,t){ix(n);const e=Yc(n,t);if(e.length!==1)throw new Error("tensor1d() requires values to be a flat/TypedArray");return Zc(n,null,e,t)}function Pu(n,t,e){if(ix(n),t!=null&&t.length!==2)throw new Error("tensor2d() requires shape to have two numbers");const s=Yc(n,e);if(s.length!==2&&s.length!==1)throw new Error("tensor2d() requires values to be number[][] or flat/TypedArray");if(s.length===1&&t==null)throw new Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");return Zc(n,t,s,e)}function R0(n,t,e){const s=t.rank>1?t.shape[t.rank-1]:1,r=t.rank>1?t.rank-1:1,o=`Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: ${e.shape}, indices.shape: ${t.shape}, shape: ${n}, sliceDim: ${s}, and batchDim: ${r}.`;if(e.rank<r)throw new Error(o+` update.rank < ${r}. `);if(n.length<s+(e.rank-r))throw new Error(o+` Output shape length < ${s+(e.rank-r)}`);if(e.rank!==r+n.length-s)throw new Error(o+` update.rank != ${r+n.length-s}`);for(let i=0;i<r;++i)if(e.shape[i]!==t.shape[i])throw new Error(o+` updates.shape[${i}] (${e.shape[i]}) != indices.shape[${i}] (${t.shape[i]}).`);for(let i=0;i<e.rank-r;++i)if(e.shape[i+r]!==n[i+s])throw new Error(o+` updates.shape[${i+r}] (${e.shape[i+r]}) != shape[${i+r}] (${n[i+r]})`)}function xN(n,t,e){if(t.rank<1)throw new Error(`tf.scatterND() expects the indices to be rank 1 or higher, but the rank was ${t.rank}.`);if(n.rank<1)throw new Error(`tf.scatterND() expects the updates to be rank 1 or higher, but the rank was ${n.rank}.`);if(t.dtype!=="int32")throw new Error(`The dtype of 'indices' should be int32, but got dtype: ${t.dtype}`);if(e.length<1)throw new Error(`Output rank must be greater or equal to 1, but got shape: ${e}`);if(e.length===0){if(t.size===0)throw new Error(`Indices specified for empty output. indices shape: ${t.shape}`);if(n.size===0)throw new Error(`Updates specified for empty output. updates shape: ${n.shape}`)}R0(e,t,n)}function $r(n,t,e){const s=t.shape.length,r=s>1?t.shape[s-1]:1,o=e.length;let i=1;for(let h=r;h<o;++h)i*=e[h];const a=r<1?1:r,l=q(t.shape)/a,c=[...lt(e.slice(0,r)),1],u=q(e);return{sliceRank:r,numUpdates:l,sliceSize:i,strides:c,outputSize:u}}function bN(n,t=1,e=!0){const s=E(n,"x","topk");if(s.rank===0)throw new Error("topk() expects the input to be of rank 1 or higher");const r=s.shape[s.shape.length-1];if(t<0)throw new Error(`'k' passed to topk() must be >= 0 but got ${t}`);if(t>r)throw new Error(`'k' passed to topk() must be <= the last dimension (${r}) but got ${t}`);const o={x:s},i={k:t,sorted:e},[a,l]=F.runKernel(Od,o,i);return{values:a,indices:l}}const yN=P({topk_:bN});function wN(n,t=0,e=1,s,r){if(us(n),s!=null&&s==="bool")throw new Error("Unsupported data type $ { dtype }");const o=new w0(t,e,s,!0,r),i=wt(n,s);for(let a=0;a<i.values.length;a++)i.values[a]=o.nextValue();return i.toTensor()}const A0=P({truncatedNormal_:wN});function vN(n,t=0){const e=E(n,"x","unique","string_or_numeric");S(e.rank>0,()=>"The input tensor must be at least 1D");const s={x:e},r={axis:t},[o,i]=F.runKernel(Ld,s,r);return{values:o,indices:i}}const CN=P({unique_:vN});function $N(n,t,e){const s=E(n,"x","unsortedSegmentSum"),r=E(t,"segmentIds","unsortedSegmentSum","int32");S(Hr(e),()=>"numSegments must be of dtype int");const o={x:s,segmentIds:r},i={numSegments:e};return F.runKernel(jc,o,i)}const D0=P({unsortedSegmentSum_:$N});function kN(n,t=0){const e=E(n,"x","unstack","string_or_numeric");S(t>=-e.shape.length&&t<e.shape.length,()=>`Axis = ${t} is not in [-${e.shape.length}, ${e.shape.length})`);const s={value:e},r={axis:t};return F.runKernel(qc,s,r)}const fr=P({unstack_:kN});function IN(n,t=!0,e,s){return F.makeVariable(n,t,e,s)}function _0(n,t){const e=[];for(let o=0;o<t.length;o++)t[o]&&e.push(o);const s=wt(n,"int32"),r=wt([e.length,n.length],"int32");for(let o=0;o<e.length;o++){const i=s.indexToLoc(e[o]),a=o*n.length;r.values.set(i,a)}return r.toTensor()}function SN(n,t,e){const s=E(n,"x","transpose");if(t==null&&(t=s.shape.map((i,a)=>a).reverse()),S(s.rank===t.length,()=>`Error in transpose: rank of input ${s.rank} must match length of perm ${t}.`),t.forEach(i=>{S(i>=0&&i<s.rank,()=>`All entries in 'perm' must be between 0 and ${s.rank-1} but got ${t}`)}),s.rank<=1)return s.clone();const r={x:s},o={perm:t};return s.dtype==="complex64"?V(()=>{let i=xl(s),a=Yd(s);return i=F.runKernel(zr,{x:i},o),a=F.runKernel(zr,{x:a},o),e&&(a=Yt(a)),or(i,a)}):F.runKernel(zr,r,o)}const $t=P({transpose_:SN});function NN(n,t){if(t==null)return n.shape.slice();if(Et(n.shape,t))return t;if(n.shape.length===t.length){const e=[];for(let s=0;s<n.shape.length;s++)t[s]==null&&n.shape[s]!=null?e.push(n.shape[s]):e.push(t[s]);return e}return t}function TN(n,t,e,s){const r=E(n,"x","dropout");if(S(r.dtype==="float32",()=>`x has to be a floating point tensor since it's going to be scaled, but got a ${r.dtype} tensor instead.`),S(t>=0&&t<1,()=>`rate must be a float in the range [0, 1), but got ${t}.`),t===0)return n instanceof re?r.clone():r;const o=NN(r,e),i=1-t,a=ut(su(J(sa(o,0,1,"float32",s),i)),i);return _(r,a)}const EN=P({dropout_:TN});function RN(n,t,e,s,r,o="NHWC",i){let a=n;n.rank===3&&(a=L(n,[1,n.shape[0],n.shape[1],n.shape[2]]));let l=t;l.rank===3&&(l=L(t,[1,t.shape[0],t.shape[1],t.shape[2]])),S(a.rank===4,()=>`Error in conv2dDerFilter: input must be rank 4, but got shape ${a.shape}.`),S(l.rank===4,()=>`Error in conv2dDerFilter: dy must be rank 4, but got shape ${l.shape}.`),S(e.length===4,()=>`Error in conv2dDerFilter: filterShape must be length 4, but got ${e}.`);const c=o==="NHWC"?a.shape[3]:a.shape[1],u=o==="NHWC"?l.shape[3]:l.shape[1];S(c===e[2],()=>`Error in conv2dDerFilter: depth of input ${c}) must match input depth in filter (${e[2]}.`),S(u===e[3],()=>`Error in conv2dDerFilter: depth of dy (${u}) must match output depth for filter (${e[3]}).`),Be("conv2dDerFilter",r,i);const h={x:a,dy:l},d={strides:s,pad:r,dataFormat:o,dimRoundingMode:i,filterShape:e};return F.runKernel(id,h,d)}const cf=P({conv2DBackpropFilter_:RN});function uf(n,t,e){if(e==null||e==="linear")return n;if(e==="relu")return _(n,oa(t));throw new Error(`Cannot compute gradient for fused activation ${e}.`)}function hf(n,t){let e=t;const s=ce(n.shape,t.shape);return s.length>0&&(e=ct(e,s)),L(e,n.shape)}function df(n,t,e,s){if(t==="linear")return n;if(t==="relu")return Cr(n);if(t==="elu")return eu(n);if(t==="relu6")return v0(n);if(t==="prelu")return sf(n,e);if(t==="leakyrelu")return Zd(n,s);if(t==="sigmoid")return co(n);throw new Error(`Unknown fused activation ${t}.`)}const ff=(n,t)=>!(n>0)||t==="linear";function AN({x:n,filter:t,strides:e,pad:s,dataFormat:r="NHWC",dilations:o=[1,1],dimRoundingMode:i,bias:a,activation:l="linear",preluActivationWeights:c,leakyreluAlpha:u}){if(l=l||"linear",ff(F.state.gradientDepth,l)===!1){S(r==="NHWC",()=>`Error in fused conv2d: got dataFormat of ${r} but only NHWC is currently supported for the case of gradient depth is 0 and the activation is not linear.`);let $=ur(n,t,e,s,r,o,i);return a!=null&&($=J($,a)),df($,l,c,u)}const h=E(n,"x","conv2d","float32"),d=E(t,"filter","conv2d","float32");let f=h,p=!1;h.rank===3&&(p=!0,f=L(h,[1,h.shape[0],h.shape[1],h.shape[2]])),S(f.rank===4,()=>`Error in fused conv2d: input must be rank 4, but got rank ${f.rank}.`),S(d.rank===4,()=>`Error in fused conv2d: filter must be rank 4, but got rank ${d.rank}.`),Be("fused conv2d",s,i);const m=r==="NHWC"?f.shape[3]:f.shape[1];S(d.shape[2]===m,()=>`Error in conv2d: depth of input (${m}) must match input depth for filter ${d.shape[2]}.`),S(Ie(e,o),()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${e} and dilations '${o}'`);const g=ye(f.shape,d.shape,e,o,s,i);let x;a!=null&&(x=E(a,"bias","fused conv2d"),[x]=Zt(x,h),r==="NHWC"?mt(g.outShape,x.shape):(S(x.shape.length<=1,()=>`Error in fused conv2d: only supports scalar or 1-D Tensor bias for NCHW format but got the bias of rank-${x.shape.length}.`),S(x.shape.length===0||x.shape[0]===g.outChannels||x.shape[0]===1,()=>`Error in fused conv2d: bias shape (${x.shape}) is not compatible with the number of output channels (${g.outChannels})`)));let b;if(c!=null){const $=c.shape;if(S($.length<=1||$.length===3,()=>`Error in fused conv2d: only supports scalar, 1-D Tensor or 3-D Tensor PReLU activation weights but got a tensor of rank-${$.length}.`),$.length===1)S($[0]===1||$[0]===g.outChannels,()=>`Error in fused conv2d: PReLU activation weights (${$}) is not compatible with the number of output channels (${g.outChannels}).`);else if($.length===3)try{mt($,g.outShape)}catch{const T=`Error in fused conv2d: PReLU activation weights (${$}) is not compatible with the output shape of the conv2d (${g.outShape}).`;throw Error(T)}b=E(c,"prelu weights","fused conv2d")}const w=($,N)=>{S(r==="NHWC",()=>`Error in gradient of fused conv2D: got dataFormat of ${r} but only NHWC is currently supported.`);const[T,k,I,C]=N,R=uf($,I,l);S(lr(o),()=>`Error in gradient of fused conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${o}'`);const A=Hd(k.shape,R,T,e,s),O=cf(k,R,T.shape,e,s),M=[A,O];if(C!=null){const z=hf(C,R);M.push(z)}return M},y={x:f,filter:d,bias:x,preluActivationWeights:b},v={strides:e,pad:s,dataFormat:r,dilations:o,dimRoundingMode:i,activation:l,leakyreluAlpha:u};return a==null?Xr((N,T,k)=>{let I=F.runKernel(ul,y,v);return k([T,N,I]),p&&(I=L(I,[I.shape[1],I.shape[2],I.shape[3]])),{value:I,gradFunc:w}})(f,d):Xr((N,T,k,I)=>{let C=F.runKernel(ul,y,v);return I([T,N,C,k]),p&&(C=L(C,[C.shape[1],C.shape[2],C.shape[3]])),{value:C,gradFunc:w}})(f,d,x)}const DN=P({fusedConv2d_:AN});function _N(n,t,e,s,r,o=[1,1],i){let a=n;n.rank===3&&(a=L(n,[1,n.shape[0],n.shape[1],n.shape[2]]));let l=t;l.rank===3&&(l=L(t,[1,t.shape[0],t.shape[1],t.shape[2]]));const c={x:a,dy:l},u={strides:s,pad:r,dimRoundingMode:i,dilations:o,filterShape:e};return F.runKernel(fd,c,u)}const FN=P({depthwiseConv2dNativeBackpropFilter_:_N});function ON(n,t,e,s,r,o=[1,1],i){let a=t,l=!1;t.rank===3&&(l=!0,a=L(t,[1,t.shape[0],t.shape[1],t.shape[2]]));const c={dy:a,filter:e},u={strides:s,pad:r,dimRoundingMode:i,dilations:o,inputShape:n},h=F.runKernel(pd,c,u);return l?L(h,[h.shape[1],h.shape[2],h.shape[3]]):h}const MN=P({depthwiseConv2dNativeBackpropInput_:ON});function LN({a:n,b:t,transposeA:e=!1,transposeB:s=!1,bias:r,activation:o="linear",preluActivationWeights:i,leakyreluAlpha:a=.2}){if(ff(F.state.gradientDepth,o)===!1){let C=Nt(n,t,e,s);return r!=null&&(C=J(C,r)),df(C,o,i,a)}let l=E(n,"a","fused matMul"),c=E(t,"b","fused matMul");[l,c]=Zt(l,c);const u=e?l.shape[l.rank-2]:l.shape[l.rank-1],h=s?c.shape[c.rank-1]:c.shape[c.rank-2],d=e?l.shape[l.rank-1]:l.shape[l.rank-2],f=s?c.shape[c.rank-2]:c.shape[c.rank-1],p=l.shape.slice(0,-2),m=c.shape.slice(0,-2),g=q(p),x=q(m);S(u===h,()=>`Error in fused matMul: inner shapes (${u}) and (${h}) of Tensors with shapes ${l.shape} and ${c.shape} and transposeA=${e} and transposeB=${s} must match.`);const w=mt(l.shape.slice(0,-2),c.shape.slice(0,-2)).concat([d,f]),y=e?L(l,[g,u,d]):L(l,[g,d,u]),v=s?L(c,[x,f,h]):L(c,[x,h,f]);let $;r!=null&&($=E(r,"bias","fused matMul"),[$]=Zt($,l),mt(w,$.shape));let N;i!=null&&(N=E(i,"prelu weights","fused matMul"));const T=(C,R)=>{const[A,O,M,z]=R,U=uf(L(C,M.shape),M,o);let B,G;if(!e&&!s?(B=Nt(U,O,!1,!0),G=Nt(A,U,!0,!1)):!e&&s?(B=Nt(U,O,!1,!1),G=Nt(U,A,!0,!1)):e&&!s?(B=Nt(O,U,!1,!0),G=Nt(A,U,!1,!1)):(B=Nt(O,U,!0,!0),G=Nt(U,A,!0,!0)),r!=null){const j=hf(z,U);return[B,G,j]}else return[B,G]},k={a:y,b:v,bias:$,preluActivationWeights:N},I={transposeA:e,transposeB:s,activation:o,leakyreluAlpha:a};return r==null?Xr((R,A,O)=>{const M=F.runKernel(cl,k,I);return O([R,A,M]),{value:L(M,w),gradFunc:T}})(y,v):Xr((R,A,O,M)=>{const z=F.runKernel(cl,k,I);return M([R,A,z,O]),{value:L(z,w),gradFunc:T}})(y,v,$)}const pm=P({fusedMatMul_:LN});function PN(n,t,e,s,r="bilinear",o=0){const i=E(n,"image","cropAndResize"),a=E(t,"boxes","cropAndResize","float32"),l=E(e,"boxInd","cropAndResize","int32"),c=a.shape[0];S(i.rank===4,()=>`Error in cropAndResize: image must be rank 4,but got rank ${i.rank}.`),S(a.rank===2&&a.shape[1]===4,()=>`Error in cropAndResize: boxes must be have size [${c},4] but had shape ${a.shape}.`),S(l.rank===1&&l.shape[0]===c,()=>`Error in cropAndResize: boxInd must be have size [${c}] but had shape ${a.shape}.`),S(s.length===2,()=>`Error in cropAndResize: cropSize must be of length 2, but got length ${s.length}.`),S(s[0]>=1&&s[1]>=1,()=>`cropSize must be atleast [1,1], but was ${s}`),S(r==="bilinear"||r==="nearest",()=>`method must be bilinear or nearest, but was ${r}`);const u={image:i,boxes:a,boxInd:l},h={method:r,extrapolationValue:o,cropSize:s};return F.runKernel(ud,u,h)}const zN=P({cropAndResize_:PN});function BN(n){const t=E(n,"image","flipLeftRight","float32");S(t.rank===4,()=>`Error in flipLeftRight: image must be rank 4,but got rank ${t.rank}.`);const e={image:t};return F.runKernel(yd,e,{})}const VN=P({flipLeftRight_:BN});function WN(n){const t=E(n,"image","grayscaleToRGB"),e=t.rank-1,s=t.shape[e];S(t.rank>=2,()=>`Error in grayscaleToRGB: images must be at least rank 2, but got rank ${t.rank}.`),S(s===1,()=>`Error in grayscaleToRGB: last dimension of a grayscale image should be size 1, but got size ${s}.`);const r=new Array(t.rank);return r.fill(1,0,e),r[e]=3,Cn(t,r)}const UN=P({grayscaleToRGB_:WN});function GN(n){const t=E(n,"image","RGBToGrayscale"),e=t.rank-1,s=t.shape[e];S(t.rank>=2,()=>`Error in RGBToGrayscale: images must be at least rank 2, but got rank ${t.rank}.`),S(s===3,()=>`Error in RGBToGrayscale: last dimension of an RGB image should be size 3, but got size ${s}.`);const r=t.dtype,o=st(t,"float32"),i=Ue([.2989,.587,.114]);let a;switch(t.rank){case 2:a=So("ij,j->i",o,i);break;case 3:a=So("ijk,k->ij",o,i);break;case 4:a=So("ijkl,l->ijk",o,i);break;case 5:a=So("ijklm,m->ijkl",o,i);break;case 6:a=So("ijklmn,n->ijklm",o,i);break;default:throw new Error("Not a valid tensor rank.")}return a=Oe(a,-1),st(a,r)}const HN=P({rgbToGrayscale_:GN});function qN(n,t,e=0,s=.5){const r=E(n,"image","rotateWithOffset","float32");S(r.rank===4,()=>`Error in rotateWithOffset: image must be rank 4,but got rank ${r.rank}.`);const o={image:r},i={radians:t,fillValue:e,center:s};return F.runKernel(Pd,o,i)}const jN=P({rotateWithOffset_:qN});function ho(n,t,e,s,r,o){s==null&&(s=.5),r==null&&(r=Number.NEGATIVE_INFINITY),o==null&&(o=0);const i=n.shape[0];return e=Math.min(e,i),S(0<=s&&s<=1,()=>`iouThreshold must be in [0, 1], but was '${s}'`),S(n.rank===2,()=>`boxes must be a 2D tensor, but was of rank '${n.rank}'`),S(n.shape[1]===4,()=>`boxes must have 4 columns, but 2nd dimension was ${n.shape[1]}`),S(t.rank===1,()=>"scores must be a 1D tensor"),S(t.shape[0]===i,()=>`scores has incompatible shape with boxes. Expected ${i}, but was ${t.shape[0]}`),S(0<=o&&o<=1,()=>`softNmsSigma must be in [0, 1], but was '${o}'`),{maxOutputSize:e,iouThreshold:s,scoreThreshold:r,softNmsSigma:o}}function KN(n,t,e,s=.5,r=Number.NEGATIVE_INFINITY){const o=E(n,"boxes","nonMaxSuppression","float32"),i=E(t,"scores","nonMaxSuppression","float32"),a=ho(o,i,e,s,r);e=a.maxOutputSize,s=a.iouThreshold,r=a.scoreThreshold;const l={maxOutputSize:e,iouThreshold:s,scoreThreshold:r};return F.runKernel(Id,{boxes:o,scores:i},l)}const XN=P({nonMaxSuppression_:KN});function YN(n,t,e){const s=ZN(n,t,e),r=s<0?-(s+1):s;n.splice(r,0,t)}function ZN(n,t,e){return QN(n,t,e||JN)}function JN(n,t){return n>t?1:n<t?-1:0}function QN(n,t,e){let s=0,r=n.length,o=0,i=!1;for(;s<r;){o=s+(r-s>>>1);const a=e(t,n[o]);a>0?s=o+1:(r=o,i=!a)}return i?s:-s-1}function pf(n,t,e,s,r){return xf(n,t,e,s,r,0)}function mf(n,t,e,s,r,o){return xf(n,t,e,s,r,0,!1,o,!0)}function gf(n,t,e,s,r,o){return xf(n,t,e,s,r,o,!0)}function xf(n,t,e,s,r,o,i=!1,a=!1,l=!1){const c=[];for(let g=0;g<t.length;g++)t[g]>r&&c.push({score:t[g],boxIndex:g,suppressBeginIndex:0});c.sort(mm);const u=o>0?-.5/o:0,h=[],d=[];for(;h.length<e&&c.length>0;){const g=c.pop(),{score:x,boxIndex:b,suppressBeginIndex:w}=g;if(x<r)break;let y=!1;for(let v=h.length-1;v>=w;--v){const $=tT(n,b,h[v]);if($>=s){y=!0;break}if(g.score=g.score*eT(s,u,$),g.score<=r)break}g.suppressBeginIndex=h.length,y||(g.score===x?(h.push(b),d.push(g.score)):g.score>r&&YN(c,g,mm))}const f=h.length,p=e-f;a&&p>0&&(h.push(...new Array(p).fill(0)),d.push(...new Array(p).fill(0)));const m={selectedIndices:h};return i&&(m.selectedScores=d),l&&(m.validOutputs=f),m}function tT(n,t,e){const s=n.subarray(t*4,t*4+4),r=n.subarray(e*4,e*4+4),o=Math.min(s[0],s[2]),i=Math.min(s[1],s[3]),a=Math.max(s[0],s[2]),l=Math.max(s[1],s[3]),c=Math.min(r[0],r[2]),u=Math.min(r[1],r[3]),h=Math.max(r[0],r[2]),d=Math.max(r[1],r[3]),f=(a-o)*(l-i),p=(h-c)*(d-u);if(f<=0||p<=0)return 0;const m=Math.max(o,c),g=Math.max(i,u),x=Math.min(a,h),b=Math.min(l,d),w=Math.max(x-m,0)*Math.max(b-g,0);return w/(f+p-w)}function eT(n,t,e){const s=Math.exp(t*e*e);return e<=n?s:0}function mm(n,t){return n.score-t.score||n.score===t.score&&t.boxIndex-n.boxIndex}async function nT(n,t,e,s=.5,r=Number.NEGATIVE_INFINITY){const o=E(n,"boxes","nonMaxSuppressionAsync"),i=E(t,"scores","nonMaxSuppressionAsync"),a=ho(o,i,e,s,r);e=a.maxOutputSize,s=a.iouThreshold,r=a.scoreThreshold;const l=await Promise.all([o.data(),i.data()]),c=l[0],u=l[1],{selectedIndices:h}=pf(c,u,e,s,r);return o!==n&&o.dispose(),i!==t&&i.dispose(),Ue(h,"int32")}const sT=nT;function rT(n,t,e,s=.5,r=Number.NEGATIVE_INFINITY,o=0){const i=E(n,"boxes","nonMaxSuppression"),a=E(t,"scores","nonMaxSuppression"),l=ho(i,a,e,s,r,o);e=l.maxOutputSize,s=l.iouThreshold,r=l.scoreThreshold,o=l.softNmsSigma;const c={boxes:i,scores:a},u={maxOutputSize:e,iouThreshold:s,scoreThreshold:r,softNmsSigma:o},h=F.runKernel(Nd,c,u);return{selectedIndices:h[0],selectedScores:h[1]}}const oT=P({nonMaxSuppressionWithScore_:rT});async function iT(n,t,e,s=.5,r=Number.NEGATIVE_INFINITY,o=0){const i=E(n,"boxes","nonMaxSuppressionAsync"),a=E(t,"scores","nonMaxSuppressionAsync"),l=ho(i,a,e,s,r,o);e=l.maxOutputSize,s=l.iouThreshold,r=l.scoreThreshold,o=l.softNmsSigma;const c=await Promise.all([i.data(),a.data()]),u=c[0],h=c[1],{selectedIndices:d,selectedScores:f}=gf(u,h,e,s,r,o);return i!==n&&i.dispose(),a!==t&&a.dispose(),{selectedIndices:Ue(d,"int32"),selectedScores:Ue(f)}}const aT=iT;function lT(n,t,e,s=.5,r=Number.NEGATIVE_INFINITY,o=!1){const i=E(n,"boxes","nonMaxSuppression"),a=E(t,"scores","nonMaxSuppression"),l=ho(i,a,e,s,r,null),c=l.maxOutputSize,u=l.iouThreshold,h=l.scoreThreshold,d={boxes:i,scores:a},f={maxOutputSize:c,iouThreshold:u,scoreThreshold:h,padToMaxOutputSize:o},p=F.runKernel(Sd,d,f);return{selectedIndices:p[0],validOutputs:p[1]}}const cT=P({nonMaxSuppressionPadded_:lT});async function uT(n,t,e,s=.5,r=Number.NEGATIVE_INFINITY,o=!1){const i=E(n,"boxes","nonMaxSuppressionAsync"),a=E(t,"scores","nonMaxSuppressionAsync"),l=ho(i,a,e,s,r,null),c=l.maxOutputSize,u=l.iouThreshold,h=l.scoreThreshold,[d,f]=await Promise.all([i.data(),a.data()]),{selectedIndices:p,validOutputs:m}=mf(d,f,c,u,h,o);return i!==n&&i.dispose(),a!==t&&a.dispose(),{selectedIndices:Ue(p,"int32"),validOutputs:Tt(m,"int32")}}const hT=uT;function dT(n,t,e=!1,s=!1){const r=E(n,"images","resizeBilinear");S(r.rank===3||r.rank===4,()=>`Error in resizeBilinear: x must be rank 3 or 4, but got rank ${r.rank}.`),S(t.length===2,()=>`Error in resizeBilinear: new shape must 2D, but got shape ${t}.`),S(s===!1||e===!1,()=>"Error in resizeBilinear: If halfPixelCenters is true, alignCorners must be false.");let o=r,i=!1;r.rank===3&&(i=!0,o=L(r,[1,r.shape[0],r.shape[1],r.shape[2]]));const a={images:o},l={alignCorners:e,halfPixelCenters:s,size:t},c=F.runKernel(Pc,a,l);return i?L(c,[c.shape[1],c.shape[2],c.shape[3]]):c}const F0=P({resizeBilinear_:dT});function fT(n,t,e=!1,s=!1){const r=E(n,"images","resizeNearestNeighbor");S(r.rank===3||r.rank===4,()=>`Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank ${r.rank}.`),S(t.length===2,()=>`Error in resizeNearestNeighbor: new shape must 2D, but got shape ${t}.`),S(r.dtype==="float32"||r.dtype==="int32",()=>"`images` must have `int32` or `float32` as dtype"),S(s===!1||e===!1,()=>"Error in resizeNearestNeighbor: If halfPixelCenters is true, alignCorners must be false.");let o=r,i=!1;r.rank===3&&(i=!0,o=L(r,[1,r.shape[0],r.shape[1],r.shape[2]]));const a={images:o},l={alignCorners:e,halfPixelCenters:s,size:t},c=F.runKernel(Lc,a,l);return i?L(c,[c.shape[1],c.shape[2],c.shape[3]]):c}const O0=P({resizeNearestNeighbor_:fT});function pT(n,t="binary",e=!1,s=.5){const r=E(n,"image","threshold"),o=.2989,i=.587,a=.114,l=r.shape[0]*r.shape[1];let c=_(Ue([s]),255),u,h,d,f;if(S(r.rank===3,()=>`Error in threshold: image must be rank 3,but got rank ${r.rank}.`),S(r.shape[2]===3||r.shape[2]===1,()=>`Error in threshold: image color channel must be equal to 3 or 1but got ${r.shape[2]}.`),S(r.dtype==="int32"||r.dtype==="float32",()=>`Error in dtype: image dtype must be int32 or float32,but got dtype ${r.dtype}.`),S(t==="otsu"||t==="binary",()=>`Method must be binary or otsu, but was ${t}`),r.shape[2]===3){[u,h,d]=Qe(r,[1,1,1],-1);const g=_(u,o),x=_(h,i),b=_(d,a);f=J(J(g,x),b)}else f=n;if(t==="otsu"){const g=hI(st(C0(f),"int32"),Br([]),256);c=mT(g,l)}const p=e?uo(f,c):en(f,c);return st(_(p,255),"int32")}function mT(n,t){let e=Ue([-1]),s=Ue([0]),r=Ue([0]),o,i,a,l,c,u;for(let h=0;h<n.size-1;h++){o=zt(n,0,h+1),i=zt(n,h+1),c=ut(ct(o),t),u=ut(ct(i),t);const d=ct(_(o,jo(0,o.size)));a=ut(d,ct(o));const f=tu(i.shape,o.size),p=J(jo(0,i.size),f),m=_(i,p);l=ut(ct(m),ct(i));const g=ft(a,l),x=ft(a,l),b=_(c,u);r=_(_(b,g),x);const w=en(r,s);s=Ae(w,r,s),e=Ae(w,Ue([h]),e)}return e}const gT=P({threshold_:pT});function xT(n,t,e="nearest",s="constant",r=0,o){const i=E(n,"image","transform","float32"),a=E(t,"transforms","transform","float32");S(i.rank===4,()=>`Error in transform: image must be rank 4,but got rank ${i.rank}.`),S(a.rank===2&&(a.shape[0]===i.shape[0]||a.shape[0]===1)&&a.shape[1]===8,()=>"Error in transform: Input transform should be batch x 8 or 1 x 8"),S(o==null||o.length===2,()=>`Error in transform: outputShape must be [height, width] or null, but got ${o}.`);const l={image:i,transforms:a},c={interpolation:e,fillMode:s,fillValue:r,outputShape:o};return F.runKernel(Md,l,c)}const bT=P({transform_:xT});function yT(n,t,e){const s=E(n,"a","bandPart");S(s.rank>=2,()=>`bandPart(): Rank must be at least 2, got ${s.rank}.`);const r=s.shape,[o,i]=s.shape.slice(-2);let a,l;typeof t=="number"?(S(t%1===0,()=>`bandPart(): numLower must be an integer, got ${t}.`),S(t<=o,()=>`bandPart(): numLower (${t}) must not be greater than the number of rows (${o}).`),a=E(t<0?o:t,"numLower","bandPart")):(S(t.dtype==="int32",()=>"bandPart(): numLower's dtype must be an int32."),a=Ae(ml(t,0),o,qo(t,o))),typeof e=="number"?(S(e%1===0,()=>`bandPart(): numUpper must be an integer, got ${e}.`),S(e<=i,()=>`bandPart(): numUpper (${e}) must not be greater than the number of columns (${i}).`),l=E(e<0?i:e,"numUpper","bandPart")):(S(e.dtype==="int32",()=>"bandPart(): numUpper's dtype must be an int32."),l=Ae(ml(e,0),i,qo(e,i)));const c=L(jo(0,o,1,"int32"),[-1,1]),u=jo(0,i,1,"int32"),h=ft(c,u),d=os(uo(h,a),vr(h,Yt(l))),f=fe([o,i],s.dtype);return L(is(fr(L(s,[-1,o,i])).map(p=>Ae(d,p,f))),r)}const wT=P({bandPart_:yT});function vT(n){let t;if(Array.isArray(n)){t=!1,S(n!=null&&n.length>0,()=>"Gram-Schmidt process: input must not be null, undefined, or empty");const r=n[0].shape[0];for(let o=1;o<n.length;++o)S(n[o].shape[0]===r,()=>`Gram-Schmidt: Non-unique lengths found in the input vectors: (${n[o].shape[0]} vs. ${r})`)}else t=!0,n=Qe(n,n.shape[0],0).map(r=>ra(r,[0]));S(n.length<=n[0].shape[0],()=>`Gram-Schmidt: Number of vectors (${n.length}) exceeds number of dimensions (${n[0].shape[0]}).`);const e=[],s=n;for(let r=0;r<n.length;++r)e.push(F.tidy(()=>{let o=s[r];if(r>0)for(let i=0;i<r;++i){const a=_(ct(_(e[i],o)),e[i]);o=ft(o,a)}return ut(o,nu(o,"euclidean"))}));return t?is(e,0):e}const CT=P({gramSchmidt_:vT});function $T(n,t=!1){if(S(n.rank>=2,()=>`qr() requires input tensor to have a rank >= 2, but got rank ${n.rank}`),n.rank===2)return gm(n,t);{const e=n.shape.slice(0,n.shape.length-2).reduce((l,c)=>l*c),s=fr(L(n,[e,n.shape[n.shape.length-2],n.shape[n.shape.length-1]]),0),r=[],o=[];s.forEach(l=>{const[c,u]=gm(l,t);r.push(c),o.push(u)});const i=L(is(r,0),n.shape),a=L(is(o,0),n.shape);return[i,a]}}function gm(n,t=!1){return F.tidy(()=>{S(n.shape.length===2,()=>`qr2d() requires a 2D Tensor, but got a ${n.shape.length}D Tensor.`);const e=n.shape[0],s=n.shape[1];let r=p0(e),o=Qs(n);const i=Pu([[1]],[1,1]);let a=Qs(i);const l=e>=s?s:e;for(let c=0;c<l;++c){const u=o,h=a,d=r;[a,o,r]=F.tidy(()=>{const f=zt(o,[c,c],[e-c,1]),p=nu(f),m=zt(o,[c,c],[1,1]),g=Ae(en(m,0),Pu([[-1]]),Pu([[1]])),x=ft(m,_(g,p)),b=ut(f,x);b.shape[0]===1?a=Qs(i):a=Le([i,zt(b,[1,0],[b.shape[0]-1,b.shape[1]])],0);const w=Yt(ut(Nt(g,x),p)),y=zt(o,[c,0],[e-c,s]),v=_(w,a),$=$t(a);if(c===0)o=ft(y,Nt(v,Nt($,y)));else{const k=ft(y,Nt(v,Nt($,y)));o=Le([zt(o,[0,0],[c,s]),k],0)}const N=$t(v),T=zt(r,[0,c],[e,r.shape[1]-c]);if(c===0)r=ft(T,Nt(Nt(T,a),N));else{const k=ft(T,Nt(Nt(T,a),N));r=Le([zt(r,[0,0],[e,c]),k],1)}return[a,o,r]}),yt([u,h,d])}return!t&&e>s&&(r=zt(r,[0,0],[e,s]),o=zt(o,[0,0],[s,s])),[r,o]})}const kT=P({qr_:$T});const rs={flipLeftRight:VN,grayscaleToRGB:UN,resizeNearestNeighbor:O0,resizeBilinear:F0,rgbToGrayscale:HN,rotateWithOffset:jN,cropAndResize:zN,nonMaxSuppression:XN,nonMaxSuppressionAsync:sT,nonMaxSuppressionWithScore:oT,nonMaxSuppressionWithScoreAsync:aT,nonMaxSuppressionPadded:cT,nonMaxSuppressionPaddedAsync:hT,threshold:gT,transform:bT},IT={bandPart:wT,gramSchmidt:CT,qr:kT};const ST=new Map,NT=new Map;class fo{getClassName(){return this.constructor.className}static fromConfig(t,e){return new t(e)}}class an{constructor(){this.classNameMap={}}static getMap(){return an.instance==null&&(an.instance=new an),an.instance}static register(t){an.getMap().classNameMap[t.className]=[t,t.fromConfig]}}function X(n,t,e){S(n.className!=null,()=>"Class being registered does not have the static className property defined."),S(typeof n.className=="string",()=>"className is required to be a string, but got type "+typeof n.className),S(n.className.length>0,()=>"Class being registered has an empty-string as its className, which is disallowed."),typeof t>"u"&&(t="Custom"),typeof e>"u"&&(e=n.className);const s=e,r=t+">"+s;return an.register(n),ST.set(r,n),NT.set(n,r),n}class zs extends fo{minimize(t,e=!1,s){const{value:r,grads:o}=this.computeGradients(t,s);if(s!=null){const i=s.map(a=>({name:a.name,tensor:o[a.name]}));this.applyGradients(i)}else this.applyGradients(o);return yt(o),e?r:(r.dispose(),null)}get iterations(){return this.iterations_==null&&(this.iterations_=0),this.iterations_}incrementIterations(){this.iterations_=this.iterations+1}computeGradients(t,e){return DS(t,e)}dispose(){this.iterations_!=null&&yt(this.iterations_)}async saveIterations(){return this.iterations_==null&&(this.iterations_=0),{name:"iter",tensor:Tt(this.iterations_,"int32")}}async getWeights(){throw new Error("getWeights() is not implemented for this optimizer yet.")}async setWeights(t){throw new Error(`setWeights() is not implemented for this optimizer class ${this.getClassName()}`)}async extractIterations(t){return this.iterations_=(await t[0].tensor.data())[0],t.slice(1)}}Object.defineProperty(zs,Symbol.hasInstance,{value:n=>n.minimize!=null&&n.computeGradients!=null&&n.applyGradients!=null});class M0 extends zs{static get className(){return"Adadelta"}constructor(t,e,s=null){super(),this.learningRate=t,this.rho=e,this.epsilon=s,this.accumulatedGrads=[],this.accumulatedUpdates=[],s==null&&(this.epsilon=F.backend.epsilon())}applyGradients(t){(Array.isArray(t)?t.map(s=>s.name):Object.keys(t)).forEach((s,r)=>{const o=F.registeredVariables[s],i=!1;this.accumulatedGrads[r]==null&&(this.accumulatedGrads[r]={originalName:`${s}/accum_grad`,variable:V(()=>kt(o).variable(i))}),this.accumulatedUpdates[r]==null&&(this.accumulatedUpdates[r]={originalName:`${s}/accum_var`,variable:V(()=>kt(o).variable(i))});const a=Array.isArray(t)?t[r].tensor:t[s];if(a==null)return;const l=this.accumulatedGrads[r].variable,c=this.accumulatedUpdates[r].variable;V(()=>{const u=J(_(l,this.rho),_(Vt(a),1-this.rho)),h=_(ut(ke(J(c,this.epsilon)),ke(J(l,this.epsilon))),a),d=J(_(c,this.rho),_(Vt(h),1-this.rho));l.assign(u),c.assign(d);const f=J(_(h,-this.learningRate),o);o.assign(f)})}),this.incrementIterations()}dispose(){this.accumulatedUpdates!=null&&(yt(this.accumulatedGrads.map(t=>t.variable)),yt(this.accumulatedUpdates.map(t=>t.variable)))}async getWeights(){const t=[...this.accumulatedGrads,...this.accumulatedUpdates];return[await this.saveIterations()].concat(t.map(e=>({name:e.originalName,tensor:e.variable})))}async setWeights(t){t=await this.extractIterations(t);const e=t.length/2,s=!1;this.accumulatedGrads=t.slice(0,e).map(r=>({originalName:r.name,variable:r.tensor.variable(s)})),this.accumulatedUpdates=t.slice(e,e*2).map(r=>({originalName:r.name,variable:r.tensor.variable(s)}))}getConfig(){return{learningRate:this.learningRate,rho:this.rho,epsilon:this.epsilon}}static fromConfig(t,e){return new t(e.learningRate,e.rho,e.epsilon)}}class L0 extends zs{static get className(){return"Adagrad"}constructor(t,e=.1){super(),this.learningRate=t,this.initialAccumulatorValue=e,this.accumulatedGrads=[]}applyGradients(t){(Array.isArray(t)?t.map(s=>s.name):Object.keys(t)).forEach((s,r)=>{const o=F.registeredVariables[s];this.accumulatedGrads[r]==null&&(this.accumulatedGrads[r]={originalName:`${s}/accumulator`,variable:V(()=>tu(o.shape,this.initialAccumulatorValue).variable(!1))});const i=Array.isArray(t)?t[r].tensor:t[s];if(i==null)return;const a=this.accumulatedGrads[r].variable;V(()=>{const l=J(a,Vt(i));a.assign(l);const c=J(_(ut(i,ke(J(l,F.backend.epsilon()))),-this.learningRate),o);o.assign(c)})}),this.incrementIterations()}dispose(){this.accumulatedGrads!=null&&yt(this.accumulatedGrads.map(t=>t.variable))}async getWeights(){return[await this.saveIterations()].concat(this.accumulatedGrads.map(t=>({name:t.originalName,tensor:t.variable})))}async setWeights(t){t=await this.extractIterations(t);const e=!1;this.accumulatedGrads=t.map(s=>({originalName:s.name,variable:s.tensor.variable(e)}))}getConfig(){return{learningRate:this.learningRate,initialAccumulatorValue:this.initialAccumulatorValue}}static fromConfig(t,e){return new t(e.learningRate,e.initialAccumulatorValue)}}class P0 extends zs{static get className(){return"Adam"}constructor(t,e,s,r=null){super(),this.learningRate=t,this.beta1=e,this.beta2=s,this.epsilon=r,this.accumulatedFirstMoment=[],this.accumulatedSecondMoment=[],V(()=>{this.accBeta1=Tt(e).variable(),this.accBeta2=Tt(s).variable()}),r==null&&(this.epsilon=F.backend.epsilon())}applyGradients(t){const e=Array.isArray(t)?t.map(s=>s.name):Object.keys(t);V(()=>{const s=ft(1,this.accBeta1),r=ft(1,this.accBeta2);e.forEach((o,i)=>{const a=F.registeredVariables[o],l=!1;this.accumulatedFirstMoment[i]==null&&(this.accumulatedFirstMoment[i]={originalName:`${o}/m`,variable:V(()=>kt(a).variable(l))}),this.accumulatedSecondMoment[i]==null&&(this.accumulatedSecondMoment[i]={originalName:`${o}/v`,variable:V(()=>kt(a).variable(l))});const c=Array.isArray(t)?t[i].tensor:t[o];if(c==null)return;const u=this.accumulatedFirstMoment[i].variable,h=this.accumulatedSecondMoment[i].variable,d=J(_(u,this.beta1),_(c,1-this.beta1)),f=J(_(h,this.beta2),_(Vt(c),1-this.beta2)),p=ut(d,s),m=ut(f,r);u.assign(d),h.assign(f);const g=J(_(ut(p,J(ke(m),this.epsilon)),-this.learningRate),a);a.assign(g)}),this.accBeta1.assign(_(this.accBeta1,this.beta1)),this.accBeta2.assign(_(this.accBeta2,this.beta2))}),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.accBeta2.dispose(),this.accumulatedFirstMoment!=null&&yt(this.accumulatedFirstMoment.map(t=>t.variable)),this.accumulatedSecondMoment!=null&&yt(this.accumulatedSecondMoment.map(t=>t.variable))}async getWeights(){const t=[...this.accumulatedFirstMoment,...this.accumulatedSecondMoment];return[await this.saveIterations()].concat(t.map(e=>({name:e.originalName,tensor:e.variable})))}async setWeights(t){t=await this.extractIterations(t),V(()=>{this.accBeta1.assign(hr(this.beta1,this.iterations_+1)),this.accBeta2.assign(hr(this.beta2,this.iterations_+1))});const e=t.length/2,s=!1;this.accumulatedFirstMoment=t.slice(0,e).map(r=>({originalName:r.name,variable:r.tensor.variable(s)})),this.accumulatedSecondMoment=t.slice(e,e*2).map(r=>({originalName:r.name,variable:r.tensor.variable(s)}))}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon}}static fromConfig(t,e){return new t(e.learningRate,e.beta1,e.beta2,e.epsilon)}}class z0 extends zs{static get className(){return"Adamax"}constructor(t,e,s,r=null,o=0){super(),this.learningRate=t,this.beta1=e,this.beta2=s,this.epsilon=r,this.decay=o,this.accumulatedFirstMoment=[],this.accumulatedWeightedInfNorm=[],V(()=>{this.iteration=Tt(0).variable(),this.accBeta1=Tt(e).variable()}),r==null&&(this.epsilon=F.backend.epsilon())}applyGradients(t){const e=Array.isArray(t)?t.map(s=>s.name):Object.keys(t);V(()=>{const s=ft(1,this.accBeta1),r=ut(-this.learningRate,J(_(this.iteration,this.decay),1));e.forEach((o,i)=>{const a=F.registeredVariables[o],l=!1;this.accumulatedFirstMoment[i]==null&&(this.accumulatedFirstMoment[i]={originalName:`${o}/m`,variable:kt(a).variable(l)}),this.accumulatedWeightedInfNorm[i]==null&&(this.accumulatedWeightedInfNorm[i]={originalName:`${o}/v`,variable:kt(a).variable(l)});const c=Array.isArray(t)?t[i].tensor:t[o];if(c==null)return;const u=this.accumulatedFirstMoment[i].variable,h=this.accumulatedWeightedInfNorm[i].variable,d=J(_(u,this.beta1),_(c,1-this.beta1)),f=_(h,this.beta2),p=Te(c),m=Ls(f,p);u.assign(d),h.assign(m);const g=J(_(ut(r,s),ut(d,J(m,this.epsilon))),a);a.assign(g)}),this.iteration.assign(J(this.iteration,1)),this.accBeta1.assign(_(this.accBeta1,this.beta1))}),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.iteration.dispose(),this.accumulatedFirstMoment!=null&&yt(this.accumulatedFirstMoment.map(t=>t.variable)),this.accumulatedWeightedInfNorm!=null&&yt(this.accumulatedWeightedInfNorm.map(t=>t.variable))}async getWeights(){throw new Error("getWeights() is not implemented for Adamax yet.")}async setWeights(t){throw new Error("setWeights() is not implemented for Adamax yet.")}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon,decay:this.decay}}static fromConfig(t,e){return new t(e.learningRate,e.beta1,e.beta2,e.epsilon,e.decay)}}class bf extends zs{static get className(){return"SGD"}constructor(t){super(),this.learningRate=t,this.setLearningRate(t)}applyGradients(t){(Array.isArray(t)?t.map(s=>s.name):Object.keys(t)).forEach((s,r)=>{const o=Array.isArray(t)?t[r].tensor:t[s];if(o==null)return;const i=F.registeredVariables[s];V(()=>{const a=J(_(this.c,o),i);i.assign(a)})}),this.incrementIterations()}setLearningRate(t){this.learningRate=t,this.c!=null&&this.c.dispose(),this.c=zn(Tt(-t))}dispose(){this.c.dispose()}async getWeights(){return[await this.saveIterations()]}async setWeights(t){if(t=await this.extractIterations(t),t.length!==0)throw new Error("SGD optimizer does not have settable weights.")}getConfig(){return{learningRate:this.learningRate}}static fromConfig(t,e){return new t(e.learningRate)}}class B0 extends bf{static get className(){return"Momentum"}constructor(t,e,s=!1){super(t),this.learningRate=t,this.momentum=e,this.useNesterov=s,this.accumulations=[],this.m=Tt(this.momentum)}applyGradients(t){(Array.isArray(t)?t.map(s=>s.name):Object.keys(t)).forEach((s,r)=>{const o=F.registeredVariables[s];this.accumulations[r]==null&&(this.accumulations[r]={originalName:`${s}/momentum`,variable:V(()=>kt(o).variable(!1))});const i=this.accumulations[r].variable,a=Array.isArray(t)?t[r].tensor:t[s];a!=null&&V(()=>{let l;const c=J(_(this.m,i),a);this.useNesterov?l=J(_(this.c,J(a,_(c,this.m))),o):l=J(_(this.c,c),o),i.assign(c),o.assign(l)})}),this.incrementIterations()}dispose(){this.m.dispose(),this.accumulations!=null&&yt(this.accumulations.map(t=>t.variable))}setMomentum(t){this.momentum=t}async getWeights(){return[await this.saveIterations()].concat(this.accumulations.map(t=>({name:t.originalName,tensor:t.variable})))}async setWeights(t){t=await this.extractIterations(t);const e=!1;this.accumulations=t.map(s=>({originalName:s.name,variable:s.tensor.variable(e)}))}getConfig(){return{learningRate:this.learningRate,momentum:this.momentum,useNesterov:this.useNesterov}}static fromConfig(t,e){return new t(e.learningRate,e.momentum,e.useNesterov)}}class V0 extends zs{static get className(){return"RMSProp"}constructor(t,e=.9,s=0,r=null,o=!1){if(super(),this.learningRate=t,this.decay=e,this.momentum=s,this.epsilon=r,this.accumulatedMeanSquares=[],this.accumulatedMoments=[],this.accumulatedMeanGrads=[],this.centered=o,r==null&&(this.epsilon=F.backend.epsilon()),t==null)throw new Error("learningRate for RMSPropOptimizer must be defined.")}applyGradients(t){(Array.isArray(t)?t.map(s=>s.name):Object.keys(t)).forEach((s,r)=>{const o=F.registeredVariables[s],i=!1;this.accumulatedMeanSquares[r]==null&&(this.accumulatedMeanSquares[r]={originalName:`${s}/rms`,variable:V(()=>kt(o).variable(i))}),this.accumulatedMoments[r]==null&&(this.accumulatedMoments[r]={originalName:`${s}/momentum`,variable:V(()=>kt(o).variable(i))}),this.accumulatedMeanGrads[r]==null&&this.centered&&(this.accumulatedMeanGrads[r]={originalName:`${s}/mg`,variable:V(()=>kt(o).variable(i))});const a=Array.isArray(t)?t[r].tensor:t[s];if(a==null)return;const l=this.accumulatedMeanSquares[r].variable,c=this.accumulatedMoments[r].variable;V(()=>{const u=J(_(l,this.decay),_(Vt(a),1-this.decay));if(this.centered){const h=this.accumulatedMeanGrads[r].variable,d=J(_(h,this.decay),_(a,1-this.decay)),f=ut(_(a,this.learningRate),ke(ft(u,J(Vt(d),this.epsilon)))),p=J(_(c,this.momentum),f);l.assign(u),h.assign(d),c.assign(p);const m=ft(o,p);o.assign(m)}else{const h=J(_(l,this.decay),_(Vt(a),1-this.decay)),d=J(_(c,this.momentum),ut(_(a,this.learningRate),ke(J(h,this.epsilon))));l.assign(h),c.assign(d);const f=ft(o,d);o.assign(f)}})}),this.incrementIterations()}dispose(){this.accumulatedMeanSquares!=null&&yt(this.accumulatedMeanSquares.map(t=>t.variable)),this.accumulatedMeanGrads!=null&&this.centered&&yt(this.accumulatedMeanGrads.map(t=>t.variable)),this.accumulatedMoments!=null&&yt(this.accumulatedMoments.map(t=>t.variable))}async getWeights(){const t=[...this.accumulatedMeanSquares,...this.accumulatedMoments];return this.centered&&t.push(...this.accumulatedMeanGrads),[await this.saveIterations()].concat(t.map(e=>({name:e.originalName,tensor:e.variable})))}async setWeights(t){t=await this.extractIterations(t);const e=this.centered?t.length/3:t.length/2,s=!1;this.accumulatedMeanSquares=t.slice(0,e).map(r=>({originalName:r.name,variable:r.tensor.variable(s)})),this.accumulatedMoments=t.slice(e,e*2).map(r=>({originalName:r.name,variable:r.tensor.variable(s)})),this.centered&&(this.accumulatedMeanGrads=t.slice(e*2,e*3).map(r=>({originalName:r.name,variable:r.tensor.variable(s)})))}getConfig(){return{learningRate:this.learningRate,decay:this.decay,momentum:this.momentum,epsilon:this.epsilon,centered:this.centered}}static fromConfig(t,e){return new t(e.learningRate,e.decay,e.momentum,e.epsilon,e.centered)}}const TT=[M0,L0,P0,z0,B0,V0,bf];function ET(){for(const n of TT)X(n)}function xm(n,t,e,s){i(n),e=e??0,s=s??1,a(e,s);let r=0;const o=l=>(l.then(c=>{const u=e+ ++r/n.length*(s-e);return t(u),c}),l);function i(l){S(l!=null&&Array.isArray(l)&&l.length>0,()=>"promises must be a none empty array")}function a(l,c){S(l>=0&&l<=1,()=>`Progress fraction must be in range [0, 1], but got startFraction ${l}`),S(c>=0&&c<=1,()=>`Progress fraction must be in range [0, 1], but got endFraction ${c}`),S(c>=l,()=>`startFraction must be no more than endFraction, but got startFraction ${l} and endFraction ${c}`)}return Promise.all(n.map(o))}async function RT(n,t){t==null&&(t={});const e=t.fetchFunc==null?W().platform.fetch:t.fetchFunc,s=n.map(h=>e(h,t.requestInit,{isBinary:!0})),a=(t.onProgress==null?await Promise.all(s):await xm(s,t.onProgress,0,.5)).map(h=>h.arrayBuffer());return t.onProgress==null?await Promise.all(a):await xm(a,t.onProgress,.5,1)}function AT(n,t){var e;const s=t.fetchFunc==null?W().platform.fetch:t.fetchFunc;let r=0,o;return(e=t.onProgress)===null||e===void 0||e.call(t,0),new ReadableStream({pull:async i=>{for(var a;r<n.length;){o||(o=(await s(n[r],t.requestInit,{isBinary:!0})).body.getReader());const{done:l,value:c}=await o.read();if(l){r++,o=void 0,(a=t.onProgress)===null||a===void 0||a.call(t,r/n.length);continue}i.enqueue(c);return}i.close()}})}const DT="application/octet-stream",_T="application/json";class yf{constructor(t,e){if(this.DEFAULT_METHOD="POST",e==null&&(e={}),this.weightPathPrefix=e.weightPathPrefix,this.weightUrlConverter=e.weightUrlConverter,e.fetchFunc!=null?(S(typeof e.fetchFunc=="function",()=>"Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)"),this.fetch=e.fetchFunc):this.fetch=W().platform.fetch,S(t!=null&&t.length>0,()=>"URL path for http must not be null, undefined or empty."),Array.isArray(t)&&S(t.length===2,()=>`URL paths for http must have a length of 2, (actual length is ${t.length}).`),this.path=t,e.requestInit!=null&&e.requestInit.body!=null)throw new Error("requestInit is expected to have no pre-existing body, but has one.");this.requestInit=e.requestInit||{},this.loadOptions=e}async save(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.");const e=Object.assign({method:this.DEFAULT_METHOD},this.requestInit);e.body=new FormData;const s=[{paths:["./model.weights.bin"],weights:t.weightSpecs}],r=H$(t,s);if(e.body.append("model.json",new Blob([JSON.stringify(r)],{type:_T}),"model.json"),t.weightData!=null){const i=Fs.join(t.weightData);e.body.append("model.weights.bin",new Blob([i],{type:DT}),"model.weights.bin")}const o=await this.fetch(this.path,e);if(o.ok)return{modelArtifactsInfo:Vd(t),responses:[o]};throw new Error(`BrowserHTTPRequest.save() failed due to HTTP response status ${o.status}.`)}async loadModelJSON(){const t=await this.fetch(this.path,this.requestInit);if(!t.ok)throw new Error(`Request to ${this.path} failed with status code ${t.status}. Please verify this URL points to the model JSON of the model to load.`);let e;try{e=await t.json()}catch{let i=`Failed to parse model JSON of response from ${this.path}.`;throw this.path.endsWith(".pb")?i+=" Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository.":i+=" Please make sure the server is serving valid JSON for this request.",new Error(i)}const s=e.modelTopology,r=e.weightsManifest;if(s==null&&r==null)throw new Error(`The JSON from HTTP path ${this.path} contains neither model topology or manifest for weights.`);return e}async load(){if(this.loadOptions.streamWeights)return this.loadStream();const t=await this.loadModelJSON();return j$(t,e=>this.loadWeights(e))}async loadStream(){const t=await this.loadModelJSON(),e=await this.getWeightUrls(t.weightsManifest),s=sm(t.weightsManifest),r=()=>AT(e,this.loadOptions);return Object.assign(Object.assign({},t),{weightSpecs:s,getWeightStream:r})}async getWeightUrls(t){const e=Array.isArray(this.path)?this.path[1]:this.path,[s,r]=FT(e),o=this.weightPathPrefix||s,i=[],a=[];for(const l of t)for(const c of l.paths)this.weightUrlConverter!=null?a.push(this.weightUrlConverter(c)):i.push(o+c+r);return this.weightUrlConverter&&i.push(...await Promise.all(a)),i}async loadWeights(t){const e=await this.getWeightUrls(t),s=sm(t),r=await RT(e,this.loadOptions);return[s,r]}}yf.URL_SCHEME_REGEX=/^https?:\/\//;function FT(n){const t=n.lastIndexOf("/"),e=n.lastIndexOf("?"),s=n.substring(0,t),r=e>t?n.substring(e):"";return[s+"/",r]}function bm(n){return n.match(yf.URL_SCHEME_REGEX)!=null}const W0=(n,t)=>{if(typeof fetch>"u"&&(t==null||t.fetchFunc==null))return null;{let e=!0;if(Array.isArray(n)?e=n.every(s=>bm(s)):e=bm(n),e)return U0(n,t)}return null};he.registerSaveRouter(W0);he.registerLoadRouter(W0);function U0(n,t){return new yf(n,t)}function OT(n,t){return U0(n,t)}function wf(n,t){const e=n.shape.length,s=t.shape.length;if(e<1)throw new Error(`tf.gatherND() expects the input to be rank 1 or higher, but the rank was ${e}.`);if(s<1)throw new Error(`tf.gatherND() expects the indices to be rank 1 or higher, but the rank was ${s}.`);if(t.dtype!=="int32")throw new Error(`tf.gatherND() expects the indices to be int32 type, but the dtype was ${t.dtype}.`);if(t.shape[s-1]>e)throw new Error(`index innermost dimension length must be <= tensor rank; saw: ${t.shape[s-1]} vs. ${e}`);if(q(n.shape)===0)throw new Error(`Requested more than 0 entries, but input is empty. Input shape: ${n.shape}.`);const r=t.shape,o=r[r.length-1];let i=1;for(let h=0;h<r.length-1;++h)i*=r[h];const a=n.shape,l=r.slice();l.pop();let c=1;for(let h=o;h<e;++h)c*=a[h],l.push(a[h]);const u=[...lt(n.shape).map(h=>h/c),1].slice(0,o);return[l,i,c,u]}const vh=-2,MT=-1;function vf(n,t,e){const s=n.shape.length;S(s===t.length,()=>`Error in slice${s}D: Length of begin ${t} must match the rank of the array (${s}).`),S(s===e.length,()=>`Error in slice${s}D: Length of size ${e} must match the rank of the array (${s}).`);for(let r=0;r<s;++r)S(t[r]+e[r]<=n.shape[r],()=>`Error in slice${s}D: begin[${r}] + size[${r}] (${t[r]+e[r]}) would overflow input.shape[${r}] (${n.shape[r]})`)}function LT(n){const t=[];let e=0;for(;n>0;)n&1&&t.push(e),n/=2,e++;return t}function Cf(n,t,e){const s=[];for(let r=0;r<n.length;r++)s[r]=Math.ceil((t[r]-n[r])/e[r]);return s}function G0(n,t,e,s){const r=[...n];for(let o=r.length;o<s.length;o++)r.push(1);for(let o=0;o<e;o++)o===0?r[t]=1:(r.splice(t,0,1),r.pop());return r}function H0(n,t,e){return e<=n?e:e-(t-1)}function q0(n,t){const e=[];for(let s=0;s<n;s++)e.push(t+s);return e}function PT(n,t,e,s,r,o,i,a,l){const c=n.length;let u=new Array(c),h=new Array(c),d=new Array(c);if(t.length&&e>0){const f=t[0],p=e+1;u=j0(i,f,p,s,n),h=K0(a,f,p,r,n),d=G0(o,f,p,n)}else for(let f=0;f<c;f++)u[f]=Y0(i,s,o,n,f,l),h[f]=Z0(a,r,o,n,f,l),d[f]=X0(o,f,l);return{begin:u,end:h,strides:d}}function j0(n,t,e,s,r){const o=[...r],i=q0(e,t);for(let a=0;a<o.length;a++)if(i.indexOf(a)>-1)o[a]=0;else{const l=H0(t,e,a);let c=s[l];n&1<<l&&(c=0),o[a]=c}return o}function K0(n,t,e,s,r){const o=[...r],i=q0(e,t);for(let a=0;a<o.length;a++)if(i.indexOf(a)>-1)o[a]=Number.MAX_SAFE_INTEGER;else{const l=H0(t,e,a);let c=s[l];n&1<<l&&(c=Number.MAX_SAFE_INTEGER),o[a]=c}for(let a=0;a<o.length;a++){const l=r[a];o[a]<0&&(o[a]+=l),o[a]=sr(0,o[a],r[a])}return o}function X0(n,t,e){let s=n[t];return(e&1<<t||s==null)&&(s=1),s}function Y0(n,t,e,s,r,o){let i=t[r];const a=e[r]||1;(n&1<<r||o&1<<r||i==null)&&(a>0?i=Number.MIN_SAFE_INTEGER:i=Number.MAX_SAFE_INTEGER);const l=s[r];return i<0&&(i+=l),i=sr(0,i,l-1),i}function Z0(n,t,e,s,r,o){let i=t[r];const a=e[r]||1;(n&1<<r||o&1<<r||i==null)&&(a>0?i=Number.MAX_SAFE_INTEGER:i=Number.MIN_SAFE_INTEGER);const l=s[r];return i<0&&(i+=l),a>0?i=sr(0,i,l):i=sr(-1,i,l-1),i}function $f(n,t,e){let s=e.length;for(let r=0;r<e.length;r++)if(e[r]>1){s=r;break}for(let r=s+1;r<e.length;r++)if(t[r]>0||e[r]!==n[r])return!1;return!0}function kf(n,t){let e=n.length>0?n[n.length-1]:1;for(let s=0;s<n.length-1;s++)e+=n[s]*t[s];return e}function ru(n,t,e){let s;const r=n.shape.length;typeof t=="number"?s=[t,...new Array(r-1).fill(0)]:t.length<r?s=t.concat(new Array(r-t.length).fill(0)):s=t.slice(),s.forEach(i=>{S(i!==-1,()=>"slice() does not support negative begin indexing.")});let o;return e==null?o=new Array(r).fill(-1):typeof e=="number"?o=[e,...new Array(r-1).fill(-1)]:e.length<r?o=e.concat(new Array(r-e.length).fill(-1)):o=e,o=o.map((i,a)=>i>=0?i:(S(i===-1,()=>`Negative size values should be exactly -1 but got ${i} for the slice() size at index ${a}.`),n.shape[a]-s[a])),[s,o]}function If(n,t,e,s,r,o,i,a,l){let c;if(s==null?(c=new Array(t.length),c.fill(1)):c=s,i!=null&&(i&i-1)!==0)throw new Error("Multiple ellipses in slice is not allowed.");let u=!1;const h={dims:c.length,numAddAxisAfterEllipsis:0,begin:t.slice(),end:e.slice(),strides:c.slice(),beginMask:r,endMask:o,ellipsisMask:i,newAxisMask:a,shrinkAxisMask:l};for(let w=0;w<h.dims;w++)u&&(1<<w&a)!==0&&h.numAddAxisAfterEllipsis++,1<<w&i&&(u=!0);u||(h.ellipsisMask|=1<<h.dims,h.dims++);const d={dims:n.length,beginMask:0,endMask:0,beginValid:!1,endValid:!1};zT(h,d);let f=!0,p=!0,m=!0;const g=[],x=[];for(let w=0;w<n.length;++w){if(d.strides[w]===0)throw Error(`strides[${w}] must be non-zero`);const y=!!(d.shrinkAxisMask&1<<w),v=n[w];if(v===-1){g.push(y?1:-1);continue}const $=[d.beginMask&1<<w,d.endMask&1<<w],N=[d.strides[w]>0?0:-1,d.strides[w]>0?v:v-1];if(y&&d.strides[w]<=0)throw Error("only stride 1 allowed on non-range indexing.");m=m&&d.strides[w]===1;const T=!!(d.beginMask&1<<w&&d.endMask&1<<w);if(d.beginValid&&d.endValid){if(y){const R=d.begin[w]<0?v+d.begin[w]:d.begin[w];if(d.begin[w]=R,d.end[w]=d.begin[w]+1,R<0||R>=v)throw Error(`slice index ${d.begin[w]} of dimension ${w} out of bounds.`)}else d.begin[w]=ym(d.begin[w],0,d.strides[w],v,$,N),d.end[w]=ym(d.end[w],1,d.strides[w],v,$,N);const C=d.strides[w]===1&&d.begin[w]===0&&d.end[w]===v;f=f&&C,p=p&&(w===0&&d.strides[w]===1||C)}else f=f&&d.strides[w]===1&&T,p=p&&(w===0&&d.strides[w]===1||T);let k,I=!1;if(d.beginValid&&d.endValid?(k=d.end[w]-d.begin[w],I=!0):y?(k=1,I=!0):T&&v>=0&&(d.strides[w]<0?k=-v:k=v,I=!0),I){let C;k===0||k<0!=d.strides[w]<0?C=0:C=Math.trunc(k/d.strides[w])+(k%d.strides[w]!==0?1:0),g.push(C)}else g.push(-1)}for(let w=0;w<d.finalShapeGatherIndices.length;++w){const y=d.finalShapeGatherIndices[w];y>=0?x.push(g[y]):y===vh&&x.push(1)}return{finalShapeSparse:x.filter((w,y)=>d.finalShapeGatherIndices[y]!==vh),finalShape:x,isIdentity:f,sliceDim0:p,isSimpleSlice:m,begin:d.begin,end:d.end,strides:d.strides}}function zT(n,t){t.beginMask=0,t.endMask=0,t.shrinkAxisMask=0;let e=0;t.beginValid=n.begin!=null,t.endValid=n.end!=null,t.begin=new Array(t.dims),t.end=new Array(t.dims),t.strides=new Array(t.dims),t.finalShapeGatherIndices=[],t.finalShapeGatherIndicesSparse=[],t.inputShapeGatherIndicesSparse=new Array(t.dims);for(let s=0;s<n.dims;s++)if(1<<s&n.ellipsisMask){const r=Math.min(t.dims-(n.dims-s)+1+n.numAddAxisAfterEllipsis,t.dims);for(;e<r;e++)t.begin[e]=0,t.end[e]=0,t.strides[e]=1,t.beginMask|=1<<e,t.endMask|=1<<e,t.finalShapeGatherIndices.push(e),t.finalShapeGatherIndicesSparse.push(-1),t.inputShapeGatherIndicesSparse[e]=s}else if(1<<s&n.newAxisMask)t.finalShapeGatherIndices.push(vh),t.finalShapeGatherIndicesSparse.push(-1);else{if(e===t.begin.length)throw Error(`Index out of range using input dim ${e}; input has only ${t.dims} dims, ${t.begin.length}.`);n.begin!=null&&(t.begin[e]=n.begin[s]),n.end!=null&&(t.end[e]=n.end[s]),t.strides[e]=n.strides[s],n.beginMask&1<<s&&(t.beginMask|=1<<e),n.endMask&1<<s&&(t.endMask|=1<<e),n.shrinkAxisMask&1<<s?(t.finalShapeGatherIndices.push(MT),t.finalShapeGatherIndicesSparse.push(-1),t.shrinkAxisMask|=1<<e):(t.finalShapeGatherIndices.push(e),t.finalShapeGatherIndicesSparse.push(s)),t.inputShapeGatherIndicesSparse[e]=s,e++}}function ym(n,t,e,s,r,o){if(r[t])return e>0?o[t]:o[t+1&1];{const i=n<0?s+n:n;return i<o[0]?o[0]:i>o[1]?o[1]:i}}const BT=Object.freeze(Object.defineProperty({__proto__:null,assertParamsValid:vf,computeFlatOffset:kf,computeOutShape:Cf,getNormalizedAxes:PT,isSliceContinous:$f,maskToAxes:LT,parseSliceParams:ru,sliceInfo:If,startForAxis:Y0,startIndicesWithElidedDims:j0,stopForAxis:Z0,stopIndicesWithElidedDims:K0,stridesForAxis:X0,stridesWithElidedDims:G0},Symbol.toStringTag,{value:"Module"}));class VT{static sgd(t){return new bf(t)}static momentum(t,e,s=!1){return new B0(t,e,s)}static rmsprop(t,e=.9,s=0,r=null,o=!1){return new V0(t,e,s,r,o)}static adam(t=.001,e=.9,s=.999,r=null){return new P0(t,e,s,r)}static adadelta(t=.001,e=.95,s=null){return new M0(t,e,s)}static adamax(t=.002,e=.9,s=.999,r=null,o=0){return new z0(t,e,s,r,o)}static adagrad(t,e=.1){return new L0(t,e)}}const Rr=VT;const WT=typeof requestAnimationFrame<"u"?requestAnimationFrame:typeof setImmediate<"u"?setImmediate:n=>n();function J0(){return new Promise(n=>WT(()=>n()))}function Sf(n,t){const e=n[0].length;n.forEach((r,o)=>{S(r.length===e,()=>`Error in concat${e}D: rank of tensors[${o}] must be the same as the rank of the rest (${e})`)}),S(t>=0&&t<e,()=>`Error in concat${e}D: axis must be between 0 and ${e-1}.`);const s=n[0];n.forEach((r,o)=>{for(let i=0;i<e;i++)S(i===t||r[i]===s[i],()=>`Error in concat${e}D: Shape of tensors[${o}] (${r}) does not match the shape of the rest (${s}) along the non-concatenated axis ${o}.`)})}function Bn(n,t){const e=n[0].slice();for(let s=1;s<n.length;s++)e[t]+=n[s][t];return e}var yn;(function(n){n[n.FIRST_DIM_SIZE=0]="FIRST_DIM_SIZE",n[n.VALUE_ROWIDS=1]="VALUE_ROWIDS",n[n.ROW_LENGTHS=2]="ROW_LENGTHS",n[n.ROW_SPLITS=3]="ROW_SPLITS",n[n.ROW_LIMITS=4]="ROW_LIMITS",n[n.ROW_STARTS=5]="ROW_STARTS"})(yn||(yn={}));function Q0(n,t,e){let s=new Array;if(e==null&&t==null)return s;if(t==null)for(;s.length<n+e.length;)s.push(-1);else s=t.slice();if(e==null)return s;if(n+e.length!==s.length)throw new Error(`rt input.shape and shape=${t} are incompatible: rt input.rank = ${n+e.length}, but shape.rank = ${s.length}`);for(let r=1;r<e.length;++r){const o=e[r],i=s[s.length-e.length+r],a=s[i];if(o>=0)if(a>=0){if(a!==o)throw new Error(`rt input.shape and shape=${t} are incompatible: rt input.shape[${r+n}] = ${o} but shape[${r+n}] = ${a}`)}else s[i]=o}return s}function tb(n){const t={FIRST_DIM_SIZE:yn.FIRST_DIM_SIZE,VALUE_ROWIDS:yn.VALUE_ROWIDS,ROW_LENGTHS:yn.ROW_LENGTHS,ROW_SPLITS:yn.ROW_SPLITS,ROW_LIMITS:yn.ROW_LIMITS,ROW_STARTS:yn.ROW_STARTS},e=[];for(const s of n)if(s in t)e.push(t[s]);else break;return e}function eb(n){return n.length===0?0:n[0]===yn.FIRST_DIM_SIZE?n.length-1:n.length}function nb(n,t){if(n==null||t==null)return;const e=n.length,s=t.length;if(e>=s)throw new Error(`defaultValue.shape=${n} and ragged tensor flatValues.shape=${t}, are incompatible: defaultValue.rank = ${e} must be less than ragged tensor input flatValues.rank = ${s})`);for(let r=0;r<Math.min(e,s-1);++r){const o=n[r],i=t[r+1];if(o>=0&&i>=0&&o!==1&&o!==i)throw new Error(`defaultValue.shape=${n}, and ragged tensor input flatValues.shape=${t} are incompatible: defaultValue.shape[${r-n.length}] = ${o} but ragged tensor input.flatValues.shape[${r-n.length}] = ${i}`)}}const Nf=30;function ou(n){return n<=Nf?n:oh(n,Math.floor(Math.sqrt(n)))}function Tf(n,t,e){const s=e*(typeof n=="number"?n:n[0]),r=t*(typeof n=="number"?n:n[1]);return[s,r]}function ia(n,t,e,s=!0){let r=[];if(s)r=r.concat(t.slice(0)),r.push(n[0]/e),r=r.concat(n.slice(1));else{r=r.concat(n[0]);const o=t.length;for(let i=0;i<o;++i)r=r.concat([n[i+1]/t[i],t[i]]);r=r.concat(n.slice(o+1))}return r}function aa(n,t,e=!0){const s=[];if(e){s.push(t);for(let r=t+1;r<n;++r)r<=2*t?(s.push(r),s.push(r-(t+1))):s.push(r)}else{const r=[],o=[];for(let i=1;i<n;++i)i>=t*2+1||i%2===1?o.push(i):r.push(i);s.push(...r),s.push(0),s.push(...o)}return s}function la(n,t,e,s=!0){const r=[];s?r.push(n[0]/e):r.push(n[0]*e);for(let o=1;o<n.length;++o)o<=t.length?s?r.push(t[o-1]*n[o]):r.push(n[o]/t[o-1]):r.push(n[o]);return r}function Ef(n,t){const e=[0];for(let s=0;s<t;++s)e.push(n[s][0]);return e}function Rf(n,t,e){const s=n.slice(0,1);for(let r=0;r<e;++r)s.push(n[r+1]-t[r][0]-t[r][1]);return s}const iu=1.7580993408473768,au=1.0507009873554805;const Af=.3275911,Df=.254829592,_f=-.284496736,Ff=1.421413741,Of=-1.453152027,Mf=1.061405429;function as(n,t){if(n.length!==t.length)throw new Error(`Cannot merge real and imag arrays of different lengths. real:${n.length}, imag: ${t.length}.`);const e=new Float32Array(n.length*2);for(let s=0;s<e.length;s+=2)e[s]=n[s/2],e[s+1]=t[s/2];return e}function sb(n){const t=new Float32Array(n.length/2),e=new Float32Array(n.length/2);for(let s=0;s<n.length;s+=2)t[s/2]=n[s],e[s/2]=n[s+1];return{real:t,imag:e}}function rb(n){const t=Math.ceil(n.length/4),e=new Float32Array(t),s=new Float32Array(t);for(let r=0;r<n.length;r+=4)e[Math.floor(r/4)]=n[r],s[Math.floor(r/4)]=n[r+1];return{real:e,imag:s}}function ob(n){const t=Math.floor(n.length/4),e=new Float32Array(t),s=new Float32Array(t);for(let r=2;r<n.length;r+=4)e[Math.floor(r/4)]=n[r],s[Math.floor(r/4)]=n[r+1];return{real:e,imag:s}}function Lf(n,t){const e=n[t*2],s=n[t*2+1];return{real:e,imag:s}}function ib(n,t,e,s){n[s*2]=t,n[s*2+1]=e}function ab(n,t){const e=new Float32Array(n/2),s=new Float32Array(n/2);for(let r=0;r<Math.ceil(n/2);r++){const o=(t?2:-2)*Math.PI*(r/n);e[r]=Math.cos(o),s[r]=Math.sin(o)}return{real:e,imag:s}}function lb(n,t,e){const s=(e?2:-2)*Math.PI*(n/t),r=Math.cos(s),o=Math.sin(s);return{real:r,imag:o}}const zu="->",UT=/->/g,wm=",",vm="...";function Pf(n,t){n=n.replace(/\s/g,"");const e=(n.length-n.replace(UT,"").length)/zu.length;if(e<1)throw new Error("Equations without an arrow are not supported.");if(e>1)throw new Error(`Equation must contain exactly one arrow ("${zu}").`);const[s,r]=n.split(zu);S(s.indexOf(vm)===-1,()=>`The ellipsis notation ("${vm}") is not supported yet.`);const o=s.split(wm),i=o.length;if(t!==i)throw new Error(`Expected ${i} input tensors, received ${t}`);if(i>2)throw new Error("Support for more than 2 input tensors is not implemented yet.");const a=[];for(let d=0;d<r.length;++d){const f=r[d];if(!o.some(p=>p.indexOf(f)!==-1))throw new Error(`Output subscripts contain the label ${f} not present in the input subscripts.`);a.indexOf(f)===-1&&a.push(f)}for(let d=0;d<s.length;++d){const f=s[d];a.indexOf(f)===-1&&f!==wm&&a.push(f)}const l=new Array(o.length);for(let d=0;d<i;++d){if(new Set(o[d].split("")).size!==o[d].length)throw new Error(`Found duplicate axes in input component ${o[d]}. Support for duplicate axes in input is not implemented yet.`);l[d]=[];for(let f=0;f<o[d].length;++f)l[d].push(a.indexOf(o[d][f]))}const c=a.length,u=r.length,h=[];for(let d=u;d<c;++d)h.push(d);return{allDims:a,summedDims:h,idDims:l}}function zf(n,t){let e=new Array(n);e.fill(-1);for(let r=0;r<t.length;++r)e[t[r]]=r;const s=[];for(let r=0;r<n;++r)e[r]===-1&&s.push(r);return e=e.filter(r=>r!==-1),{permutationIndices:e,expandDims:s}}function Bf(n,t,e){const s=new Array(n);for(let r=0;r<e.length;++r){const o=e[r].shape;for(let i=0;i<t[r].length;++i)s[t[r][i]]===void 0?s[t[r][i]]=o[i]:S(s[t[r][i]]===o[i],()=>`Expected dimension ${s[t[r][i]]} at axis ${i} of input shaped ${JSON.stringify(o)}, but got dimension ${o[i]}`)}}function Vf(n,t){const e=n,s=[];let r=0;n.length===0&&e.push(-1),r=n.length+1;for(let i=0;i<r;++i)s.push([]);const o=[];for(let i=0;i<e.length;++i){const a=e[i],l=GT(t,a);for(const c of l)o.indexOf(c)===-1&&(s[i].push(c),o.push(c))}return{path:e,steps:s}}function Wf(n){return n.every((t,e)=>t===e)}function GT(n,t){const e=[];for(let s=0;s<n.length;++s)(n[s].length===0||n[s].indexOf(t)!==-1||t===-1)&&e.push(s);return e}function Uf(n,t,e=0){let s=[];if(typeof t=="number")S(n.shape[e]%t===0,()=>"Number of splits must evenly divide the axis."),s=new Array(t).fill(n.shape[e]/t);else{const r=t.reduce((i,a)=>(a===-1&&(i+=1),i),0);S(r<=1,()=>"There should be only one negative value in split array.");const o=t.indexOf(-1);if(o!==-1){const i=t.reduce((a,l)=>l>0?a+l:a);t[o]=n.shape[e]-i}S(n.shape[e]===t.reduce((i,a)=>i+a),()=>"The sum of sizes must match the size of the axis dimension."),s=t}return s}function cb(n){return`Received SparseTensor with denseShape[0] = 0 but
  indices.shape[0] = ${n}`}function ub(n,t){return`indices(${n}, 0) is invalid: ${t} < 0`}function hb(n,t,e){return`indices(${n}, 0) is invalid: ${t} >= ${e}`}function db(n,t){return`only one output dimension may be -1, not both ${n} and ${t}`}function fb(n,t){return`size ${n} must be non-negative, not ${t}`}function pb(){return"reshape cannot infer the missing input size for an empty tensor unless all specified input sizes are non-zero"}function mb(n,t){const e=q(n),s=q(t);return`Input to reshape is a SparseTensor with ${e}
  dense values, but the requested shape requires a multiple of ${s}. inputShape=${n} outputShape= ${t}`}function gb(n,t){const e=q(n),s=q(t);return`Input to reshape is a tensor with ${e} dense values, but the requested shape has ${s}. inputShape=${n} outputShape=${t}`}function Ch(){return"segment ids must be >= 0"}function xb(){return"segment ids are not increasing"}function bb(n,t){return`Segment id ${n} out of range [0, ${t}), possibly because segmentIds input is not sorted.`}function yb(n,t,e){return`Bad: indices[${n}] == ${t} out of range [0, ${e})`}function wb(n,t){let e=!1,s;for(n<=Nf?(s=n,e=!0):s=oh(n,Math.floor(Math.sqrt(n)));!e;)s>t||s===n?e=!0:s=oh(n,s+1);return s}function vb(n,t,e){const s=[],r=n.length;for(let o=0;o<r;o++)o!==t?s.push(n[o]):s.push(e);return s}function Gf(n,t,e,s){const r=t.shape.length,o=n.shape.length;if(s!==0&&(s<-r||s>r))throw new Error(`Expect batchDims in the range of [-${r}, ${r}], but got ${s}`);if(s<0&&(s+=r),s>o)throw new Error(`batchDims (${s}) must be less than rank(x) (
    ${o}).`);if(e<s)throw new Error(`batchDims (${s}) must be less than or equal to axis (${e}).`);for(let h=0;h<s;++h)if(n.shape[h]!==t.shape[h])throw new Error(`x.shape[${h}]: ${n.shape[h]} should be equal to indices.shape[${h}]: ${t.shape[h]}.`);const i=n.shape[e],a=[];let l=1,c=1,u=1;for(let h=0;h<s;++h)a.push(n.shape[h]),l*=n.shape[h];for(let h=s;h<e;h++)a.push(n.shape[h]),c*=n.shape[h];for(let h=s;h<r;h++)a.push(t.shape[h]);for(let h=e+1;h<o;h++)a.push(n.shape[h]),u*=n.shape[h];return{batchSize:l,sliceSize:u,outerSize:c,dimSize:i,outputShape:a}}const HT=Object.freeze(Object.defineProperty({__proto__:null,collectGatherOpShapeInfo:Gf,computeOutShape:vb,segOpComputeOptimalWindowSize:wb},Symbol.toStringTag,{value:"Module"}));function ls(n){try{return n.map(t=>Ss(t))}catch(t){throw new Error(`Failed to decode encoded string bytes into utf-8, error: ${t}`)}}function Cb(n){return n.map(t=>$s(t))}const qT=Object.freeze(Object.defineProperty({__proto__:null,ERF_A1:Df,ERF_A2:_f,ERF_A3:Ff,ERF_A4:Of,ERF_A5:Mf,ERF_P:Af,PARALLELIZE_THRESHOLD:Nf,get RowPartitionType(){return yn},SELU_SCALE:au,SELU_SCALEALPHA:iu,applyActivation:df,assertAndGetBroadcastShape:mt,assertAxesAreInnerMostDims:we,assertParamsConsistent:Sf,assignToTypedArray:ib,axesAreInnerMostDims:Kd,calculateShapes:$r,checkEinsumDimSizes:Bf,checkPadOnDimRoundingMode:Be,combineLocations:d0,combineRaggedTensorToTensorShapes:Q0,complexWithEvenIndex:rb,complexWithOddIndex:ob,computeConv2DInfo:ye,computeConv3DInfo:Os,computeDefaultPad:Wd,computeDilation2DInfo:ea,computeOptimalWindowSize:ou,computeOutAndReduceShapes:me,computeOutShape:Bn,computePool2DInfo:dn,computePool3DInfo:hs,convertConv2DDataFormat:ds,decodeEinsumEquation:Pf,eitherStridesOrDilationsAreOne:Ie,expandShapeToKeepDim:ne,exponent:lb,exponents:ab,fromStringArrayToUint8:Cb,fromUint8ToStringArray:ls,getAxesPermutation:jt,getBroadcastDims:Kr,getComplexWithIndex:Lf,getEinsumComputePath:Vf,getEinsumPermutation:zf,getFusedBiasGradient:hf,getFusedDyActivation:uf,getImageCenter:Tf,getInnerMostAxes:Jt,getPermuted:aa,getRaggedRank:eb,getReductionAxes:ce,getReshaped:ia,getReshapedPermuted:la,getRowPartitionTypesHelper:tb,getSliceBeginCoords:Ef,getSliceSize:Rf,getSparseFillEmptyRowsIndicesDenseShapeMismatch:cb,getSparseFillEmptyRowsNegativeIndexErrorMessage:ub,getSparseFillEmptyRowsOutOfRangeIndexErrorMessage:hb,getSparseReshapeEmptyTensorZeroOutputDimErrorMessage:pb,getSparseReshapeInputOutputMismatchErrorMessage:gb,getSparseReshapeInputOutputMultipleErrorMessage:mb,getSparseReshapeMultipleNegativeOneOutputDimErrorMessage:db,getSparseReshapeNegativeOutputDimErrorMessage:fb,getSparseSegmentReductionIndicesOutOfRangeErrorMessage:yb,getSparseSegmentReductionNegativeSegmentIdsErrorMessage:Ch,getSparseSegmentReductionNonIncreasingSegmentIdsErrorMessage:xb,getSparseSegmentReductionSegmentIdOutOfRangeErrorMessage:bb,getUndoAxesPermutation:Ms,isIdentityPermutation:Wf,log:l$,mergeRealAndImagArrays:as,prepareAndValidate:wf,prepareSplitSize:Uf,segment_util:HT,shouldFuse:ff,slice_util:BT,splitRealAndImagArrays:sb,stridesOrDilationsArePositive:cr,tupleValuesAreOne:lr,upcastType:He,validateDefaultValueShape:nb,validateInput:xN,validateUpdateShape:R0,warn:Ze},Symbol.toStringTag,{value:"Module"}));ET();const $b={kernelName:Xl,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>_(n,oa(st(e,"float32"),-1))}}};const jT={kernelName:ii,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>{const s=Vt(st(e,"float32")),r=ke(ft(Tt(1),s));return Yt(ut(n,r))}}}};const KT={kernelName:ai,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>{const s=ke(ft(Vt(st(e,"float32")),1));return ut(n,s)}}}};const XT={kernelName:lo,inputsToSave:["a","b"],gradFunc:(n,t)=>{const[e,s]=t,r=mt(e.shape,s.shape);return{a:()=>{let a=n;const l=ce(e.shape,r);return l.length>0&&(a=ct(a,l)),L(a,e.shape)},b:()=>{let a=n;const l=ce(s.shape,r);return l.length>0&&(a=ct(a,l)),L(a,s.shape)}}}};const YT={kernelName:Jh,saveAllInputs:!0,gradFunc:(n,t)=>{const e={};return t.forEach((s,r)=>{e[r]=()=>n.clone()}),e}};const ZT={kernelName:Yl,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>kt(e)}}};const JT={kernelName:Zl,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>kt(e)}}};const QT={kernelName:li,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>ut(n,ke(ft(Tt(1),Vt(st(e,"float32")))))}}};const tE={kernelName:ci,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>{const s=ke(J(Tt(1),Vt(st(e,"float32"))));return ut(n,s)}}}};const eE={kernelName:di,inputsToSave:["a","b"],gradFunc:(n,t)=>{const[e,s]=t,r=mt(e.shape,s.shape);return{a:()=>{const a=J(Vt(e),Vt(s));let l=_(n,ut(s,a));const c=ce(e.shape,r);return c.length>0&&(l=ct(l,c)),L(l,e.shape)},b:()=>{const a=J(Vt(e),Vt(s));let l=Yt(_(n,ut(e,a)));const c=ce(s.shape,r);return c.length>0&&(l=ct(l,c)),L(l,s.shape)}}}};const nE={kernelName:ui,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>ut(n,J(Vt(st(e,"float32")),1))}}};const sE={kernelName:hi,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>ut(n,ft(Tt(1),Vt(st(e,"float32"))))}}};function rE(n,t,e,s,r,o){const i=E(n,"dy","avgPool3dGrad"),a=E(t,"input","avgPool3dGrad");let l=i,c=a,u=!1;a.rank===4&&(u=!0,l=L(i,[1,i.shape[0],i.shape[1],i.shape[2],i.shape[3]]),c=L(a,[1,a.shape[0],a.shape[1],a.shape[2],a.shape[3]])),S(l.rank===5,()=>`Error in avgPool3dGrad: dy must be rank 5 but got rank ${l.rank}.`),S(c.rank===5,()=>`Error in avgPool3dGrad: input must be rank 5 but got rank ${c.rank}.`),Be("avgPool3dGrad",r,o);const h={dy:l,input:c},d={filterSize:e,strides:s,pad:r,dimRoundingMode:o},f=F.runKernel(nd,h,d);return u?L(f,[f.shape[1],f.shape[2],f.shape[3],f.shape[4]]):f}const oE=P({avgPool3dGrad_:rE});const iE={kernelName:Ql,inputsToSave:["x"],gradFunc:(n,t,e)=>{const[s]=t,{filterSize:r,strides:o,pad:i,dimRoundingMode:a}=e;return{x:()=>oE(n,s,r,o,i,a)}}};function aE(n,t,e,s,r){const o=E(n,"dy","avgPoolGrad"),i=E(t,"input","avgPoolGrad");S(i.rank===o.rank,()=>`Rank of input (${i.rank}) does not match rank of dy (${o.rank})`);let a=i,l=o,c=!1;i.rank===3&&(c=!0,a=L(i,[1,i.shape[0],i.shape[1],i.shape[2]]),l=L(o,[1,o.shape[0],o.shape[1],o.shape[2]])),S(l.rank===4,()=>`Error in avgPoolGrad: dy must be rank 4 but got rank ${l.rank}.`),S(a.rank===4,()=>`Error in avgPoolGrad: input must be rank 4 but got rank ${a.rank}.`);const u={dy:l,input:a},h={filterSize:e,strides:s,pad:r},d=F.runKernel(ed,u,h);return c?L(d,[d.shape[1],d.shape[2],d.shape[3]]):d}const lE=P({avgPoolGrad_:aE});const cE={kernelName:Jl,inputsToSave:["x"],gradFunc:(n,t,e)=>{const[s]=t,{filterSize:r,strides:o,pad:i}=e;return{x:()=>lE(n,s,r,o,i)}}};const uE={kernelName:tc,inputsToSave:["a","b"],gradFunc:(n,t,e)=>{const[s,r]=t,{transposeA:o,transposeB:i}=e;return!o&&!i?{a:()=>Nt(n,r,!1,!0),b:()=>Nt(s,n,!0,!1)}:!o&&i?{a:()=>Nt(n,r,!1,!1),b:()=>Nt(n,s,!0,!1)}:o&&!i?{a:()=>Nt(r,n,!1,!0),b:()=>Nt(s,n,!1,!1)}:{a:()=>Nt(r,n,!0,!0),b:()=>Nt(n,s,!0,!0)}}};const hE={kernelName:ec,gradFunc:(n,t,e)=>{const{blockShape:s,crops:r}=e;return{x:()=>nf(n,s,r)}}};const dE={kernelName:r$,gradFunc:(n,t,e)=>{const s=e,r=s.inputShape,o=s.shape,i=Array.from(o);for(let l=r.length-1;l>=0;l--)if(r[l]===o[l])i[l]=1;else if(r[l]!==1)throw new Error(`broadcastTo(): [${r}] cannot be broadcast to [${o}].`);const a=[];for(let l=0;l<i.length;l++)i[l]>1&&a.push(l);return{x:()=>ct(n,a,!0)}}};const fE={kernelName:fi,gradFunc:n=>({x:()=>n.clone()})};const pE={kernelName:pi,gradFunc:n=>({x:()=>kt(n)})};const mE={kernelName:mi,inputsToSave:["x"],gradFunc:(n,t,e)=>{const[s]=t,{clipValueMin:r,clipValueMax:o}=e;return{x:()=>Ae(os(vr(s,r),uo(s,o)),n,kt(n))}}};const gE={kernelName:nc,inputsToSave:["x"],gradFunc:$b.gradFunc};const xE={kernelName:sc,saveAllInputs:!0,gradFunc:(n,t,e)=>{const s=t.map(l=>l.shape),{axis:r}=e,o=vt(r,t[0].shape)[0],i=s.map(l=>l[o]);return Qe(n,i,o).map(l=>()=>l)}};const bE={kernelName:rc,inputsToSave:["x","filter"],gradFunc:(n,t,e)=>{const[s,r]=t,{dilations:o,strides:i,pad:a,dataFormat:l}=e;return S(lr(o),()=>`Error in gradient of conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${o}'`),{x:()=>Hd(s.shape,n,r,i,a,l),filter:()=>cf(s,n,r.shape,i,a,l)}}};const yE={kernelName:oc,inputsToSave:["dy","filter"],gradFunc:(n,t,e)=>{const[s,r]=t,{strides:o,pad:i,dataFormat:a,dimRoundingMode:l}=e;return{dy:()=>ur(n,r,o,i,a,1,l),filter:()=>cf(n,s,r.shape,o,i,a,l)}}};function wE(n,t,e,s,r){let o=n;n.rank===4&&(o=L(n,[1,n.shape[0],n.shape[1],n.shape[2],n.shape[3]]));let i=t;i.rank===4&&(i=L(t,[1,t.shape[0],t.shape[1],t.shape[2],t.shape[3]])),S(o.rank===5,()=>`Error in conv3dDerFilter: input must be rank 5, but got shape ${o.shape}.`),S(i.rank===5,()=>`Error in conv3dDerFilter: dy must be rank 5, but got shape ${i.shape}.`),S(e.length===5,()=>`Error in conv3dDerFilter: filterShape must be length 5, but got ${e}.`),S(o.shape[4]===e[3],()=>`Error in conv3dDerFilter: depth of input ${o.shape[4]}) must match input depth in filter (${e[3]}.`),S(i.shape[4]===e[4],()=>`Error in conv3dDerFilter: depth of dy (${i.shape[4]}) must match output depth for filter (${e[4]}).`);const a={x:o,dy:i},l={strides:s,pad:r,filterShape:e};return F.runKernel(ad,a,l)}const vE=P({conv3DBackpropFilter_:wE});const CE={kernelName:ic,inputsToSave:["x","filter"],gradFunc:(n,t,e)=>{const{dilations:s,strides:r,pad:o}=e;S(lr(s),()=>`Error in gradient of conv3D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${s}'`);const[i,a]=t;return{x:()=>l0(i.shape,n,a,r,o),filter:()=>vE(i,n,a.shape,r,o)}}};const $E={kernelName:gi,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>_(Yt(S0(st(e,"float32"))),n)}}};const kE={kernelName:xi,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>_(N0(st(e,"float32")),n)}}};const IE={kernelName:ac,inputsToSave:["x"],gradFunc:(n,t,e)=>{const[s]=t,{axis:r,exclusive:o,reverse:i}=e;return{x:()=>{const a=jt([r],s.rank);let l=u0(n,r,o,!i);return a!=null&&(l=$t(l,a)),l}}}};const SE={kernelName:lc,inputsToSave:["x","filter"],gradFunc:(n,t,e)=>{const{dilations:s,strides:r,pad:o,dimRoundingMode:i}=e,a=s??[1,1];S(lr(a),()=>`Error in gradient of depthwiseConv2dNative: dilation rates greater than 1 are not yet supported. Got dilations '${a}'`);const[l,c]=t;return S(l.rank===4,()=>`Error in gradient of depthwiseConv2dNative: input must be rank 4, but got rank ${l.rank}.`),S(c.rank===4,()=>`Error in gradient of depthwiseConv2dNative: filter must be rank 4, but got rank ${c.rank}.`),S(l.shape[3]===c.shape[2],()=>`Error in gradient of depthwiseConv2d: number of input channels (${l.shape[3]}) must match the inChannels dimension in filter ${c.shape[2]}.`),S(Ie(r,a),()=>`Error in gradient of depthwiseConv2d: Either strides or dilations must be  1. Got strides ${r} and dilations '${a}'.`),Be("depthwiseConv2d",o,i),{x:()=>MN(l.shape,n,c,r,o,a,i),filter:()=>FN(l,n,c.shape,r,o,a,i)}}};const NE={kernelName:cc,inputsToSave:["x","filter"],gradFunc:(n,t,e)=>{const[s,r]=t,o={x:s,filter:r,dy:n},i={x:s,filter:r,dy:n};return{x:()=>F.runKernel(ih,o,e),filter:()=>F.runKernel(ah,i,e)}}};const TE={kernelName:yi,outputsToSave:[!0],gradFunc:(n,t)=>{const[e]=t,s={dy:n,y:e};return{x:()=>F.runKernel(gd,s)}}};const EE={kernelName:wi,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t,s=_(qn(Yt(Vt(e))),2/Math.sqrt(Math.PI));return{x:()=>_(n,s)}}};const RE={kernelName:vi,outputsToSave:[!0],gradFunc:(n,t)=>{const[e]=t;return{x:()=>_(n,e)}}};const AE={kernelName:hc,inputsToSave:["input"],gradFunc:(n,t)=>{const[e]=t;return{input:()=>L(n,e.shape)}}};const DE={kernelName:Ci,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>_(n,qn(e))}}};const _E={kernelName:$i,gradFunc:n=>({x:()=>kt(n)})};const FE={kernelName:ki,inputsToSave:["a","b"],gradFunc:(n,t)=>{const[e,s]=t,r=mt(e.shape,s.shape);return{a:()=>{const a=ut(n,st(s,"float32")),l=ce(e.shape,r);return l.length>0?L(ct(a,l),e.shape):a},b:()=>{let a=_(n,st(e,"float32"));const l=ce(s.shape,r);l.length>0&&(a=L(ct(a,l),s.shape));const c=Vt(s);return Yt(ut(a,st(c,"float32")))}}}};const OE={kernelName:dc,inputsToSave:["x","mean","variance","scale"],gradFunc:(n,t,e)=>{const{varianceEpsilon:s}=e,[r,o,i,a]=t,l=a??Tt(1),c=ce(o.shape,r.shape),u=[];if(o.rank===1){for(let y=0;y<r.shape.length-1;++y)u.push(r.shape[y]);u.push(1)}const h=ft(r,o),d=_(n,l),f=$0(J(i,Tt(s))),p=_(_(_(f,f),f),Tt(-.5));return{x:()=>o.rank===1?L(_(_(n,Cn(L(f,[1,1,1,o.shape[0]]),u)),l),r.shape):L(_(_(n,f),l),r.shape),mean:()=>{let y=_(_(f,Tt(-1)),d);return o.rank===1&&(y=ct(y,c)),L(y,o.shape)},variance:()=>{let y=_(_(p,h),d);return o.rank===1&&(y=ct(y,c)),L(y,o.shape)},scale:()=>{const y=_(h,f);let v=_(n,y);return o.rank===1&&(v=ct(v,c)),L(v,o.shape)},offset:()=>{let y=n;return o.rank===1&&(y=ct(y,c)),L(y,o.shape)}}}};const ME={kernelName:fc,inputsToSave:["x","indices"],gradFunc:(n,t,e)=>{const[s,r]=t,{axis:o,batchDims:i}=e,a=vt(o,s.shape)[0],l=(c,u,h)=>()=>{const d=c.shape,f=u.size,p=d.slice(0,a),m=p.length,g=d.slice(o,d.length).slice(1),x=g.length,b=Cm(0,m),w=Cm(m+1,m+1+x),y=$m([p,[f],g]),v=L(h,y),$=L(u,[f]),N=$m([[m],b,w]),T=$t(v,N);let k=D0(T,$,c.shape[a]);const I=Ms(N);return k=$t(k,I),k};if(i===1){const c=s.shape[0],u=s.split(c,0);return{x:()=>is(u.map((f,p)=>l(f,r.slice(p,1),n.slice(p,1))())).reshape(s.shape),indices:()=>r}}else return{x:l(s,r,n),indices:()=>r}}};function Cm(n,t){const e=[];for(let s=n;s<t;++s)e.push(s);return e}function $m(n){const t=[];for(let e=0;e<n.length;++e)for(let s=0;s<n[e].length;++s)t.push(n[e][s]);return t}const LE={kernelName:Ii,inputsToSave:["a","b"],gradFunc:(n,t)=>{const[e,s]=t;return{a:()=>kt(e),b:()=>kt(s)}}};const PE={kernelName:Si,gradFunc:n=>({x:()=>st(n,"float32")})};const zE={kernelName:Ni,gradFunc:n=>({x:()=>kt(n)})};const BE={kernelName:Ti,gradFunc:n=>({x:()=>kt(n)})};const VE={kernelName:Ei,gradFunc:n=>({x:()=>kt(n)})};const WE={kernelName:mc,inputsToSave:["x"],gradFunc:(n,t,e)=>{const[s]=t,{alpha:r}=e,o=en(s,0);return{x:()=>Ae(o,n,_(n,r))}}};const UE={kernelName:Ai,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>ut(n,J(e,1))}}};const GE={kernelName:Ri,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>ut(n,st(e,"float32"))}}};const HE={kernelName:i$,inputsToSave:[],outputsToSave:[!0],gradFunc:(n,t,e)=>{const[s]=t,{axis:r}=e;return{logits:()=>{const i=qn(s);return ft(n,_(ct(n,r,!0),i))}}}};function qE(n,t,e,s=5,r=1,o=1,i=.5){const a={x:n,y:t,dy:e},l={depthRadius:s,bias:r,alpha:o,beta:i};return F.runKernel(Cd,a,l)}const jE=P({localResponseNormalizationBackprop_:qE});const KE={kernelName:vc,inputsToSave:["x"],outputsToSave:[!0],gradFunc:(n,t,e)=>{const[s,r]=t,{depthRadius:o,bias:i,alpha:a,beta:l}=e;return{x:()=>jE(s,r,n,o,i,a,l)}}};function kb(n,t,e,s){return t.rank<e.rank&&(t=L(t,ne(t.shape,s))),n.rank<e.rank&&(n=L(n,ne(n.shape,s))),{x:()=>_(n,st(Hn(e,t),n.dtype))}}const km={kernelName:Cc,inputsToSave:["x"],outputsToSave:[!0],gradFunc:(n,t,e)=>{const s=e,{reductionIndices:r}=s,o=t[0],i=t[1],a=vt(r,o.shape),l=kb(n,i,o,a);return{x:()=>l.x()}}};const XE={kernelName:Di,inputsToSave:["a","b"],gradFunc:(n,t)=>{const[e,s]=t;return{a:()=>_(n,st(vr(e,s),"float32")),b:()=>_(n,st(ml(e,s),"float32"))}}};function YE(n,t,e,s,r,o,i){const a=E(n,"dy","maxPool3dGrad"),l=E(t,"input","maxPool3dGrad"),c=E(e,"output","maxPool3dGrad");let u=a,h=l,d=c,f=!1;l.rank===4&&(f=!0,u=L(a,[1,a.shape[0],a.shape[1],a.shape[2],a.shape[3]]),h=L(l,[1,l.shape[0],l.shape[1],l.shape[2],l.shape[3]]),d=L(c,[1,c.shape[0],c.shape[1],c.shape[2],c.shape[3]])),S(u.rank===5,()=>`Error in maxPool3dGrad: dy must be rank 5 but got rank ${u.rank}.`),S(h.rank===5,()=>`Error in maxPool3dGrad: input must be rank 5 but got rank ${h.rank}.`),S(d.rank===5,()=>`Error in maxPool3dGrad: output must be rank 5 but got rank ${d.rank}.`),Be("maxPool3dGrad",o,i);const p={dy:u,input:h,output:d},m={filterSize:s,strides:r,pad:o,dimRoundingMode:i},g=F.runKernel(kd,p,m);return f?L(g,[g.shape[1],g.shape[2],g.shape[3],g.shape[4]]):g}const ZE=P({maxPool3dGrad_:YE});const JE={kernelName:kc,inputsToSave:["x"],outputsToSave:[!0],gradFunc:(n,t,e)=>{const[s,r]=t,{filterSize:o,strides:i,pad:a,dimRoundingMode:l}=e;return{x:()=>ZE(n,s,r,o,i,a,l)}}};function QE(n,t,e,s,r,o,i){const a=E(n,"dy","maxPoolGrad"),l=E(t,"input","maxPoolGrad"),c=E(e,"output","maxPoolGrad");S(l.rank===a.rank,()=>`Rank of input (${l.rank}) does not match rank of dy (${a.rank})`),S(a.rank===4,()=>`Error in maxPoolGrad: dy must be rank 4 but got rank ${a.rank}.`),S(l.rank===4,()=>`Error in maxPoolGrad: input must be rank 4 but got rank ${l.rank}.`),Be("maxPoolGrad",o,i);const u={dy:a,input:l,output:c},h={filterSize:s,strides:r,pad:o,dimRoundingMode:i};return F.runKernel($d,u,h)}const tR=P({maxPoolGrad_:QE});const eR={kernelName:$c,inputsToSave:["x"],outputsToSave:[!0],gradFunc:(n,t,e)=>{const[s,r]=t,{filterSize:o,strides:i,pad:a}=e;return{x:()=>tR(n,s,r,o,i,a)}}};const nR={kernelName:Ic,inputsToSave:["x"],gradFunc:(n,t,e)=>{const[s]=t,{axis:r}=e,o=vt(r,s.shape),a=me(s.shape,o)[1],l=q(a);return{x:()=>{const u=s.shape.slice();o.forEach(f=>{u[f]=1});const h=L(n,u);return ut(_(h,Ps(s.shape,"float32")),l)}}}};const sR={kernelName:Sc,inputsToSave:["x"],outputsToSave:[!0],gradFunc:(n,t,e)=>{const s=e,{axis:r}=s,[o,i]=t,a=vt(r,o.shape),l=kb(n,i,o,a);return{x:()=>l.x()}}};const rR={kernelName:_i,inputsToSave:["a","b"],gradFunc:(n,t)=>{const[e,s]=t;return{a:()=>_(n,st(uo(e,s),"float32")),b:()=>_(n,st(en(e,s),"float32"))}}};const oR={kernelName:Nc,inputsToSave:["x"],gradFunc:(n,t,e)=>{const s=t[0],{paddings:r}=e,o=r.map(i=>i[0]);return{x:()=>zt(n,o,s.shape)}}};const iR={kernelName:Fi,inputsToSave:["a","b"],gradFunc:(n,t)=>{const[e,s]=t,r=mt(e.shape,s.shape);return{a:()=>{const a=ce(e.shape,r);return a.length>0?L(ct(n,a),e.shape):n},b:()=>{const a=_(n,Yt(su(ut(e,s)))),l=ce(s.shape,r);return l.length>0?L(ct(a,l),s.shape):a}}}};const aR={kernelName:Oi,inputsToSave:["a","b"],gradFunc:(n,t)=>{const[e,s]=t,r=mt(e.shape,s.shape);return{a:()=>{const a=_(n,st(s,"float32")),l=ce(e.shape,r);return l.length>0?L(ct(a,l),e.shape):a},b:()=>{const a=_(n,st(e,"float32")),l=ce(s.shape,r);return l.length>0?L(ct(a,l),s.shape):a}}}};const lR={kernelName:Tc,gradFunc:n=>({x:()=>Yt(n)})};const cR={kernelName:Ac,inputsToSave:["indices"],gradFunc:(n,t)=>{const e=t[0];return{indices:()=>fe(e.shape,"float32")}}};const uR={kernelName:Rc,gradFunc:n=>({x:()=>kt(n)})};const hR={kernelName:Dc,saveAllInputs:!0,gradFunc:(n,t,e)=>{const{axis:s}=e;return fr(n,s).map(o=>()=>o)}};const Im={kernelName:_c,inputsToSave:["x"],gradFunc:(n,t,e)=>{const s=t[0],{paddings:r}=e,o=r.map(i=>i[0]);return{x:()=>zt(n,o,s.shape)}}};const dR={kernelName:Mi,inputsToSave:["a","b"],outputsToSave:[!0],gradFunc:(n,t)=>{const[e,s,r]=t,o=e,i=s,a=mt(o.shape,i.shape);return{a:()=>{const u=st(i,"float32");let h=_(n,_(u,hr(o,ft(u,Tt(1)))));const d=ce(o.shape,a);return d.length>0&&(h=ct(h,d)),L(h,o.shape)},b:()=>{const u=en(o,0),h=Ae(u,jn(o),kt(o));let d=_(n,_(r,h));const f=ce(i.shape,a);return f.length>0&&(d=ct(d,f)),L(d,i.shape)}}}};const fR={kernelName:Fc,inputsToSave:["x","alpha"],gradFunc:(n,t)=>{const[e,s]=t,r=en(e,0);return{x:()=>Ae(r,n,_(n,s)),alpha:()=>{let o=Ae(r,kt(n),_(n,e));const i=ce(s.shape,n.shape);return i.length>0&&(o=ct(o,i)),L(o,s.shape)}}}};function pR(n,t,e){const s=n.shape.slice();s[e]=1;const r=L(t,s),o=yh(n,e,!0,!1),i=yh(n,e,!0,!0),a=_(o,i);return _(r,a)}function mR(n,t,e){const s=n.shape.length,r=s-e.length,o=jt(e,s);let i=n;o!=null&&(i=$t(n,o));const a=i.shape.slice(),c=a.splice(s-e.length,e.length).reduce((d,f)=>d*f,1);a.push(c);const u=i.reshape(a);let h=pR(u,t,r);if(h=h.reshape(i.shape),o!=null){const d=Ms(o);h=$t(h,d)}return h}const gR={kernelName:Oc,inputsToSave:["x"],gradFunc:(n,t,e)=>{const[s]=t,{axis:r}=e;let o=[];return r==null?o=s.shape.map((i,a)=>a):typeof r=="number"?o=[r]:o=r,{x:()=>mR(s,n,o)}}};const xR={kernelName:bi,inputsToSave:["a","b"],gradFunc:(n,t)=>{const[e,s]=t,r=mt(e.shape,s.shape);return{a:()=>{const a=ut(n,st(s,"float32")),l=ce(e.shape,r);return l.length>0?L(ct(a,l),e.shape):a},b:()=>{let a=_(n,st(e,"float32"));const l=ce(s.shape,r);l.length>0&&(a=L(ct(a,l),s.shape));const c=Vt(s);return Yt(ut(a,st(c,"float32")))}}}};const bR={kernelName:Li,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>ut(n,Yt(Vt(e)))}}};const yR={kernelName:zi,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t,s=_(uo(e,6),oa(e));return{x:()=>_(n,st(s,"float32"))}}};const wR={kernelName:Pi,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>_(n,st(oa(e),"float32"))}}};const vR={kernelName:Mc,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>L(n,e.shape)}}};const CR={kernelName:Pc,inputsToSave:["images"],gradFunc:(n,t,e)=>{const[s]=t,r={dy:n,images:s};return{images:()=>F.runKernel(Ad,r,e)}}};const $R={kernelName:Lc,inputsToSave:["images"],gradFunc:(n,t,e)=>{const[s]=t,r={dy:n,images:s};return{images:()=>F.runKernel(Rd,r,e)}}};const kR={kernelName:zc,gradFunc:(n,t,e)=>{const{dims:s}=e,r=vt(s,n.shape);return{x:()=>dr(n,r)}}};const IR={kernelName:Bi,gradFunc:n=>({x:()=>kt(n)})};const SR={kernelName:Vi,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>Yt(ut(n,_(hr(e,1.5),2)))}}};const NR={kernelName:Bc,inputsToSave:["condition"],gradFunc:(n,t)=>{const[e]=t;return{condition:()=>st(kt(e),"float32"),t:()=>_(n,st(e,n.dtype)),e:()=>_(n,st(Jd(e),n.dtype))}}};const TR={kernelName:Wi,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>{const s=en(e,Tt(0)),r=Tt(iu),o=Tt(au),i=_(n,o),a=_(_(n,r),qn(st(e,"float32")));return Ae(s,i,a)}}}};const ER={kernelName:qi,outputsToSave:[!0],gradFunc:(n,t)=>{const[e]=t;return{x:()=>_(n,_(e,ft(Tt(1),e)))}}};const RR={kernelName:Hi,gradFunc:n=>({x:()=>kt(n)})};const AR={kernelName:Ui,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>_(qd(st(e,"float32")),n)}}};const DR={kernelName:Gi,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>_(c0(st(e,"float32")),n)}}};const _R={kernelName:Vc,inputsToSave:["x"],gradFunc:(n,t,e)=>{const[s]=t,{begin:r,size:o}=e,i=s.shape,[a,l]=ru(s,r,o),c=[];for(let u=0;u<n.rank;u++)c.push([a[u],i[u]-a[u]-l[u]]);return{x:()=>ef(n,c)}}};const FR={kernelName:Hc,outputsToSave:[!0],gradFunc:(n,t,e)=>{const[s]=t,{dim:r}=e,o=!0,i=_(n,s);return{logits:()=>ft(i,_(ct(i,[r],o),s))}}};const OR={kernelName:ji,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>_(n,co(e))}}};const Sm={kernelName:Uc,gradFunc:(n,t,e)=>{const{blockShape:s,paddings:r}=e;return{x:()=>Gd(n,s,r)}}};const Nm={kernelName:Gc,gradFunc:(n,t,e)=>{const{axis:s}=e;return{x:()=>Le(n,s)}}};const MR={kernelName:Ki,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>ut(n,_(ke(st(e,"float32")),2))}}};const LR={kernelName:Dd,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>_(n,_(st(e,"float32"),2))}}};const PR={kernelName:Xi,inputsToSave:["a","b"],gradFunc:(n,t)=>{const[e,s]=t,r=Tt(2);return{a:()=>_(n,_(r,ft(e,s))),b:()=>_(n,_(r,ft(s,e)))}}};const zR={kernelName:ta,gradFunc:n=>({x:()=>kt(n)})};const BR={kernelName:Yi,inputsToSave:["a","b"],gradFunc:(n,t)=>{const[e,s]=t,r=mt(e.shape,s.shape);return{a:()=>{let a=n;const l=ce(e.shape,r);return l.length>0&&(a=ct(a,l)),L(a,e.shape)},b:()=>{let a=n;const l=ce(s.shape,r);return l.length>0&&(a=ct(a,l)),L(Yt(a),s.shape)}}}};const VR={kernelName:Wc,inputsToSave:["x"],gradFunc:(n,t,e)=>{const[s]=t,r=s.shape.slice(),{axis:o}=e;vt(o,s.shape).forEach(c=>{r[c]=1});const a=L(n,r),l=_(a,Ps(s.shape,"float32"));return{x:()=>l}}};const WR={kernelName:Zi,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>ut(n,Vt(qd(e)))}}};const UR={kernelName:Ji,outputsToSave:[!0],gradFunc:(n,t)=>{const[e]=t;return{x:()=>_(ft(Tt(1),Vt(e)),n)}}};const GR={kernelName:Qi,inputsToSave:["x"],gradFunc:(n,t,e)=>{const[s]=t,{reps:r}=e;return{x:()=>{let i=kt(s);if(s.rank===1)for(let a=0;a<r[0];++a)i=J(i,zt(n,[a*s.shape[0]],[s.shape[0]]));else if(s.rank===2)for(let a=0;a<r[0];++a)for(let l=0;l<r[1];++l)i=J(i,zt(n,[a*s.shape[0],l*s.shape[1]],[s.shape[0],s.shape[1]]));else if(s.rank===3)for(let a=0;a<r[0];++a)for(let l=0;l<r[1];++l)for(let c=0;c<r[2];++c)i=J(i,zt(n,[a*s.shape[0],l*s.shape[1],c*s.shape[2]],[s.shape[0],s.shape[1],s.shape[2]]));else if(s.rank===4)for(let a=0;a<r[0];++a)for(let l=0;l<r[1];++l)for(let c=0;c<r[2];++c)for(let u=0;u<r[3];++u)i=J(i,zt(n,[a*s.shape[0],l*s.shape[1],c*s.shape[2],u*s.shape[3]],[s.shape[0],s.shape[1],s.shape[2],s.shape[3]]));else throw new Error(`Gradient for tile operation is not implemented for rank-${s.rank} tensors yet.`);return i}}}};const HR={kernelName:zr,gradFunc:(n,t,e)=>{const s=e,{perm:r}=s,o=Ms(r);return{x:()=>$t(n,o)}}};const qR={kernelName:qc,gradFunc:(n,t,e)=>{const s=e,{axis:r}=s;return{value:()=>is(n,r)}}};const jR={kernelName:jc,inputsToSave:["segmentIds"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>KR(n,e)}}};function KR(n,t){const e=Ls(t,kt(t)),s=Xd(n,e);let r=vr(t,Tt(0,"int32"));const o=s.rank-r.rank;for(let a=0;a<o;++a)r=Oe(r,a+1);r=os(r,Ps(s.shape,"bool"));const i=kt(s);return Ae(r,s,i)}const XR={kernelName:Kc,gradFunc:n=>({x:()=>kt(n)})};const YR=[$b,jT,KT,XT,YT,ZT,JT,QT,tE,eE,nE,sE,iE,cE,uE,hE,dE,fE,pE,mE,gE,xE,yE,bE,CE,$E,kE,IE,SE,NE,xR,TE,EE,RE,AE,DE,FE,_E,OE,ME,LE,PE,zE,BE,VE,WE,UE,GE,HE,KE,km,km,XE,JE,eR,nR,sR,rR,oR,iR,aR,lR,cR,uR,hR,Im,Im,dR,fR,gR,bR,yR,wR,vR,CR,$R,kR,IR,SR,NR,TR,ER,RR,AR,DR,_R,FR,OR,Sm,Sm,Nm,Nm,MR,PR,LR,zR,BR,VR,WR,UR,GR,HR,qR,jR,XR];for(const n of YR)c$(n);H().prototype.abs=function(){return this.throwIfDisposed(),Te(this)};H().prototype.acos=function(){return this.throwIfDisposed(),kk(this)};H().prototype.acosh=function(){return this.throwIfDisposed(),Sk(this)};H().prototype.add=function(n){return this.throwIfDisposed(),J(this,n)};H().prototype.all=function(n,t){return this.throwIfDisposed(),o0(this,n,t)};H().prototype.any=function(n,t){return this.throwIfDisposed(),xh(this,n,t)};H().prototype.argMax=function(n){return this.throwIfDisposed(),Uo(this,n)};H().prototype.argMin=function(n){return this.throwIfDisposed(),Ak(this,n)};H().prototype.asScalar=function(){return this.throwIfDisposed(),S(this.size===1,()=>"The array must have only 1 element."),L(this,[])};H().prototype.asType=function(n){return this.throwIfDisposed(),st(this,n)};H().prototype.as1D=function(){return this.throwIfDisposed(),L(this,[this.size])};H().prototype.as2D=function(n,t){return this.throwIfDisposed(),L(this,[n,t])};H().prototype.as3D=function(n,t,e){return this.throwIfDisposed(),L(this,[n,t,e])};H().prototype.as4D=function(n,t,e,s){return this.throwIfDisposed(),L(this,[n,t,e,s])};H().prototype.as5D=function(n,t,e,s,r){return this.throwIfDisposed(),L(this,[n,t,e,s,r])};H().prototype.asin=function(){return this.throwIfDisposed(),_k(this)};H().prototype.asinh=function(){return this.throwIfDisposed(),Ok(this)};H().prototype.atan=function(){return this.throwIfDisposed(),Lk(this)};H().prototype.atan2=function(n){return this.throwIfDisposed(),zk(this,n)};H().prototype.atanh=function(){return this.throwIfDisposed(),Vk(this)};H().prototype.avgPool=function(n,t,e,s){return this.throwIfDisposed(),Ud(this,n,t,e,s)};H().prototype.batchToSpaceND=function(n,t){return this.throwIfDisposed(),Gd(this,n,t)};H().prototype.batchNorm=function(n,t,e,s,r){return this.throwIfDisposed(),Qc(this,n,t,e,s,r)};H().prototype.broadcastTo=function(n){return this.throwIfDisposed(),Bo(this,n)};H().prototype.cast=function(n){return this.throwIfDisposed(),st(this,n)};H().prototype.ceil=function(){return this.throwIfDisposed(),pI(this)};H().prototype.clipByValue=function(n,t){return this.throwIfDisposed(),tn(this,n,t)};H().prototype.concat=function(n,t){return this.throwIfDisposed(),n instanceof re&&(n=[n]),Le([this,...n],t)};H().prototype.conv1d=function(n,t,e,s,r,o){return this.throwIfDisposed(),i0(this,n,t,e,s,r,o)};H().prototype.conv2dTranspose=function(n,t,e,s,r){return this.throwIfDisposed(),a0(this,n,t,e,s,r)};H().prototype.conv2d=function(n,t,e,s,r,o){return this.throwIfDisposed(),ur(this,n,t,e,s,r,o)};H().prototype.cos=function(){return this.throwIfDisposed(),qd(this)};H().prototype.cosh=function(){return this.throwIfDisposed(),c0(this)};H().prototype.cumprod=function(n,t,e){return this.throwIfDisposed(),yh(this,n,t,e)};H().prototype.cumsum=function(n,t,e){return this.throwIfDisposed(),u0(this,n,t,e)};H().prototype.depthToSpace=function(n,t){return this.throwIfDisposed(),zI(this,n,t)};H().prototype.depthwiseConv2d=function(n,t,e,s,r,o){return this.throwIfDisposed(),jd(this,n,t,e,s,r,o)};H().prototype.dilation2d=function(n,t,e,s,r){return this.throwIfDisposed(),WI(this,n,t,e,s,r)};H().prototype.divNoNan=function(n){return this.throwIfDisposed(),jI(this,n)};H().prototype.div=function(n){return this.throwIfDisposed(),ut(this,n)};H().prototype.dot=function(n){return this.throwIfDisposed(),XI(this,n)};H().prototype.elu=function(){return this.throwIfDisposed(),eu(this)};H().prototype.equal=function(n){return this.throwIfDisposed(),Hn(this,n)};H().prototype.erf=function(){return this.throwIfDisposed(),h0(this)};H().prototype.euclideanNorm=function(n,t){return this.throwIfDisposed(),aS(this,n,t)};H().prototype.exp=function(){return this.throwIfDisposed(),qn(this)};H().prototype.expandDims=function(n){return this.throwIfDisposed(),Oe(this,n)};H().prototype.expm1=function(){return this.throwIfDisposed(),hS(this)};H().prototype.fft=function(){return this.throwIfDisposed(),E0(this)};H().prototype.flatten=function(){return this.throwIfDisposed(),L(this,[this.size])};H().prototype.floor=function(){return this.throwIfDisposed(),su(this)};H().prototype.floorDiv=function(n){return this.throwIfDisposed(),r0(this,n)};H().prototype.gather=function(n,t,e){return this.throwIfDisposed(),Xd(this,n,t,e)};H().prototype.greaterEqual=function(n){return this.throwIfDisposed(),vr(this,n)};H().prototype.greater=function(n){return this.throwIfDisposed(),en(this,n)};H().prototype.ifft=function(){return this.throwIfDisposed(),wh(this)};H().prototype.irfft=function(){return this.throwIfDisposed(),rN(this)};H().prototype.isFinite=function(){return this.throwIfDisposed(),wS(this)};H().prototype.isInf=function(){return this.throwIfDisposed(),CS(this)};H().prototype.isNaN=function(){return this.throwIfDisposed(),kS(this)};H().prototype.leakyRelu=function(n){return this.throwIfDisposed(),Zd(this,n)};H().prototype.lessEqual=function(n){return this.throwIfDisposed(),uo(this,n)};H().prototype.less=function(n){return this.throwIfDisposed(),ml(this,n)};H().prototype.localResponseNormalization=function(n,t,e,s){return this.throwIfDisposed(),ES(this,n,t,e,s)};H().prototype.logSigmoid=function(){return this.throwIfDisposed(),MS(this)};H().prototype.logSoftmax=function(n){return this.throwIfDisposed(),g0(this,n)};H().prototype.logSumExp=function(n,t){return this.throwIfDisposed(),x0(this,n,t)};H().prototype.log=function(){return this.throwIfDisposed(),jn(this)};H().prototype.log1p=function(){return this.throwIfDisposed(),m0(this)};H().prototype.logicalAnd=function(n){return this.throwIfDisposed(),os(this,n)};H().prototype.logicalNot=function(){return this.throwIfDisposed(),Jd(this)};H().prototype.logicalOr=function(n){return this.throwIfDisposed(),b0(this,n)};H().prototype.logicalXor=function(n){return this.throwIfDisposed(),GS(this,n)};H().prototype.matMul=function(n,t,e){return this.throwIfDisposed(),Nt(this,n,t,e)};H().prototype.maxPool=function(n,t,e,s){return this.throwIfDisposed(),Qd(this,n,t,e,s)};H().prototype.max=function(n,t){return this.throwIfDisposed(),kn(this,n,t)};H().prototype.maximum=function(n){return this.throwIfDisposed(),Ls(this,n)};H().prototype.mean=function(n,t){return this.throwIfDisposed(),ee(this,n,t)};H().prototype.min=function(n,t){return this.throwIfDisposed(),pl(this,n,t)};H().prototype.minimum=function(n){return this.throwIfDisposed(),qo(this,n)};H().prototype.mirrorPad=function(n,t){return this.throwIfDisposed(),JS(this,n,t)};H().prototype.mod=function(n){return this.throwIfDisposed(),t2(this,n)};H().prototype.mul=function(n){return this.throwIfDisposed(),_(this,n)};H().prototype.neg=function(){return this.throwIfDisposed(),Yt(this)};H().prototype.norm=function(n,t,e){return this.throwIfDisposed(),nu(this,n,t,e)};H().prototype.notEqual=function(n){return this.throwIfDisposed(),gl(this,n)};H().prototype.oneHot=function(n,t=1,e=0){return this.throwIfDisposed(),y0(this,n,t,e)};H().prototype.onesLike=function(){return this.throwIfDisposed(),hn(this)};H().prototype.pad=function(n,t){return this.throwIfDisposed(),ef(this,n,t)};H().prototype.pool=function(n,t,e,s,r,o){return this.throwIfDisposed(),u2(this,n,t,e,s,r,o)};H().prototype.pow=function(n){return this.throwIfDisposed(),hr(this,n)};H().prototype.prelu=function(n){return this.throwIfDisposed(),sf(this,n)};H().prototype.prod=function(n,t){return this.throwIfDisposed(),f2(this,n,t)};H().prototype.reciprocal=function(){return this.throwIfDisposed(),P2(this)};H().prototype.relu=function(){return this.throwIfDisposed(),Cr(this)};H().prototype.relu6=function(){return this.throwIfDisposed(),v0(this)};H().prototype.reshapeAs=function(n){return this.throwIfDisposed(),L(this,n.shape)};H().prototype.reshape=function(n){return this.throwIfDisposed(),L(this,n)};H().prototype.resizeBilinear=function(n,t,e){return this.throwIfDisposed(),F0(this,n,t,e)};H().prototype.resizeNearestNeighbor=function(n,t,e){return this.throwIfDisposed(),O0(this,n,t,e)};H().prototype.reverse=function(n){return this.throwIfDisposed(),dr(this,n)};H().prototype.rfft=function(){return this.throwIfDisposed(),aN(this)};H().prototype.round=function(){return this.throwIfDisposed(),C0(this)};H().prototype.rsqrt=function(){return this.throwIfDisposed(),$0(this)};H().prototype.selu=function(){return this.throwIfDisposed(),k0(this)};H().prototype.separableConv2d=function(n,t,e,s,r,o){return this.throwIfDisposed(),I0(this,n,t,e,s,r,o)};H().prototype.sigmoid=function(){return this.throwIfDisposed(),co(this)};H().prototype.sign=function(){return this.throwIfDisposed(),j2(this)};H().prototype.sin=function(){return this.throwIfDisposed(),S0(this)};H().prototype.sinh=function(){return this.throwIfDisposed(),N0(this)};H().prototype.slice=function(n,t){return this.throwIfDisposed(),zt(this,n,t)};H().prototype.softmax=function(n){return this.throwIfDisposed(),lf(this,n)};H().prototype.softplus=function(){return this.throwIfDisposed(),na(this)};H().prototype.spaceToBatchND=function(n,t){return this.throwIfDisposed(),nf(this,n,t)};H().prototype.split=function(n,t){return this.throwIfDisposed(),Qe(this,n,t)};H().prototype.sqrt=function(){return this.throwIfDisposed(),ke(this)};H().prototype.square=function(){return this.throwIfDisposed(),Vt(this)};H().prototype.squaredDifference=function(n){return this.throwIfDisposed(),cN(this,n)};H().prototype.squeeze=function(n){return this.throwIfDisposed(),ra(this,n)};H().prototype.stack=function(n,t){this.throwIfDisposed();const e=n instanceof re?[this,n]:[this,...n];return is(e,t)};H().prototype.step=function(n){return this.throwIfDisposed(),oa(this,n)};H().prototype.stridedSlice=function(n,t,e,s,r,o,i,a){return this.throwIfDisposed(),pN(this,n,t,e,s,r,o,i,a)};H().prototype.sub=function(n){return this.throwIfDisposed(),ft(this,n)};H().prototype.sum=function(n,t){return this.throwIfDisposed(),ct(this,n,t)};H().prototype.tan=function(){return this.throwIfDisposed(),gN(this)};H().prototype.tanh=function(){return this.throwIfDisposed(),Jc(this)};H().prototype.tile=function(n){return this.throwIfDisposed(),Cn(this,n)};H().prototype.toBool=function(){return this.throwIfDisposed(),st(this,"bool")};H().prototype.toFloat=function(){return this.throwIfDisposed(),st(this,"float32")};H().prototype.toInt=function(){return this.throwIfDisposed(),st(this,"int32")};H().prototype.topk=function(n,t){return this.throwIfDisposed(),yN(this,n,t)};H().prototype.transpose=function(n){return this.throwIfDisposed(),$t(this,n)};H().prototype.unique=function(n){return this.throwIfDisposed(),CN(this,n)};H().prototype.unsortedSegmentSum=function(n,t){return this.throwIfDisposed(),D0(this,n,t)};H().prototype.unstack=function(n){return this.throwIfDisposed(),fr(this,n)};H().prototype.where=function(n,t){return this.throwIfDisposed(),Ae(n,this,t)};H().prototype.zerosLike=function(){return this.throwIfDisposed(),kt(this)};class Fn extends Error{constructor(t){super(t),Object.setPrototypeOf(this,Fn.prototype)}}class ln extends Error{constructor(t){super(t),Object.setPrototypeOf(this,ln.prototype)}}class D extends Error{constructor(t){super(t),Object.setPrototypeOf(this,D.prototype)}}class xt extends Error{constructor(t){super(t),Object.setPrototypeOf(this,xt.prototype)}}class Hf extends Error{constructor(t){super(t),Object.setPrototypeOf(this,Hf.prototype)}}class Ib{constructor(t){this.maxEntries=t||100,this.cache=new Map}get(t){let e;return this.cache.has(t)&&(e=this.cache.get(t),this.cache.delete(t),this.cache.set(t,e)),e}put(t,e){if(this.cache.has(t))this.cache.delete(t);else if(this.cache.size>=this.maxEntries){const s=this.cache.keys().next().value;this.cache.delete(s)}this.cache.set(t,e)}getMaxEntries(){return this.maxEntries}setMaxEntries(t){if(t<0)throw new Error(`The maxEntries of LRU caches must be at least 0, but got ${t}.`);if(this.maxEntries>t)for(let e=0;e<this.maxEntries-t;e++){const s=this.cache.keys().next().value;this.cache.delete(s)}this.maxEntries=t}}function pr(n,t){if(Array.isArray(n)){let e=[];for(let s=0;s<t;s++)e=e.concat(n);return e}else{const e=new Array(t);return e.fill(n),e}}function On(n,t){if(!n)throw new Hf(t)}function Tm(n,t){let e=0;for(const s of n)s===t&&e++;return e}function Me(n){return n.length===1?n[0]:n}function At(n){return Array.isArray(n)?n:[n]}function ns(n){const e=n.replace(/(.)([A-Z][a-z0-9]+)/g,"$1_$2").replace(/([a-z])([A-Z])/g,"$1_$2").toLowerCase();return e[0]!=="_"?e:"private"+e}function Ks(n){return n.length<=1||n.indexOf("_")===-1?n:n.replace(/[_]+(\w|$)/g,(t,e)=>e.toUpperCase())}let sn={};function qf(n){if(n==null)return null;const t={};return t.className=n.getClassName(),t.config=n.getConfig(),t}function $h(n){if(!(n==null||typeof n!="object"))if(Array.isArray(n))n.forEach(t=>$h(t));else{const t=Object.keys(n);for(const e of t){const s=n[e];s!=null&&typeof s=="object"&&(!Array.isArray(s)&&s.type==="ndarray"&&typeof s.value=="number"?n[e]=s.value:$h(s))}}}function ca(n,t={},e={},s="object",r=!1){if(typeof n=="string"){const o=n;let i;if(o in e)i=e[o];else if(o in sn)i=sn[o];else if(i=t[o],i==null)throw new D(`Unknown ${s}: ${n}. This may be due to one of the following reasons:
1. The ${s} is defined in Python, in which case it needs to be ported to TensorFlow.js or your JavaScript code.
2. The custom ${s} is defined in JavaScript, but is not registered properly with tf.serialization.registerClass().`);return i}else{const o=n;if(o.className==null||o.config==null)throw new D(`${s}: Improper config format: ${JSON.stringify(o)}.
'className' and 'config' must set.`);const i=o.className;let a,l;if(i in e?[a,l]=e[i]:i in sn?[a,l]=sn.className:i in t&&([a,l]=t[i]),a==null)throw new D(`Unknown ${s}: ${i}. This may be due to one of the following reasons:
1. The ${s} is defined in Python, in which case it needs to be ported to TensorFlow.js or your JavaScript code.
2. The custom ${s} is defined in JavaScript, but is not registered properly with tf.serialization.registerClass().`);if(l!=null){const c={};for(const f of Object.keys(sn))c[f]=sn[f];for(const f of Object.keys(e))c[f]=e[f];const u=o.config;u.customObjects=c;const h=Object.assign({},sn);for(const f of Object.keys(e))sn[f]=e[f];$h(o.config);const d=l(a,o.config,e,r);return sn=Object.assign({},h),d}else{const c=Object.assign({},sn);for(const h of Object.keys(e))sn[h]=e[h];const u=new a(o.config);return sn=Object.assign({},c),u}}}function ZR(n,t){return n<t?-1:n>t?1:0}function Aa(n,t){return-1*ZR(n,t)}function ks(n){if(n==null)return n;const t=[];for(const e of n)t.indexOf(e)===-1&&t.push(e);return t}function JR(n){if(n==null)throw new D(`Invalid value in obj: ${JSON.stringify(n)}`);for(const t in n)if(n.hasOwnProperty(t))return!1;return!0}function kr(n,t,e){if(e!=null&&n.indexOf(e)<0)throw new D(`${e} is not a valid ${t}.  Valid values are ${n} or null/undefined.`)}function jf(n,t,e=0,s=1/0){return On(e>=0),On(s>=e),Array.isArray(n)&&n.length>=e&&n.length<=s&&n.every(r=>typeof r===t)}function pe(n,t){Array.isArray(n)?(S(n.length>0,()=>`${t} is unexpectedly an empty array.`),n.forEach((e,s)=>pe(e,`element ${s+1} of ${t}`))):S(Number.isInteger(n)&&n>0,()=>`Expected ${t} to be a positive integer, but got ${Sb(n)}.`)}function Sb(n){return n===null?"null":Array.isArray(n)?"["+n.map(t=>Sb(t)).join(",")+"]":typeof n=="string"?`"${n}"`:`${n}`}function QR(n,t,e){let s=e!=null?e():Fe(),r;return(...i)=>{const a=e!=null?e():Fe();return a-s<t||(s=a,r=n(...i)),r}}function Nb(n){return n==="relu"?"relu":n==="linear"?"linear":n==="elu"?"elu":null}let tA=0;function Tb(){return tA++}const Da={};function lu(n=""){return n in Da||(Da[n]=0),Da[n]+=1,n+Da[n].toString()}const eA=["channelsFirst","channelsLast"],nA=["nearest","bilinear"],sA=["valid","same","causal"],rA=["max","avg"],oA=["sum","mul","concat","ave"];const Ar=new Map;function Qt(n){kr(eA,"DataFormat",n)}function iA(n){kr(nA,"InterpolationFormat",n)}function nn(n){kr(sA,"PaddingMode",n)}function Eb(n){kr(rA,"PoolMode",n)}const Vo=[],Em="/";function tr(n,t){Vo.push(n);try{const e=t();return Vo.pop(),e}catch(e){throw Vo.pop(),e}}function aA(){return Vo.length===0?"":Vo.join(Em)+Em}function Rb(n){if(!Db(n))throw new Error("Not a valid tensor name: '"+n+"'");return aA()+n}function Ab(n){if(!Db(n))throw new Error("Not a valid tensor name: '"+n+"'");Ar.has(n)||Ar.set(n,0);const t=Ar.get(n);if(Ar.set(n,Ar.get(n)+1),t>0){const e=`${n}_${t}`;return Ar.set(e,1),e}else return n}const lA=new RegExp(/^[A-Za-z0-9][-A-Za-z0-9\._\/]*$/);function Db(n){return!!n.match(lA)}function cA(n){return n===parseInt(n.toString(),10)}function Is(n,t,e){t==null&&(t=0),e==null&&(e=n.length);let s=1;for(let r=t;r<e;++r)s*=n[r];return s}function Yr(n){if(n.length===0)return Number.NaN;let t=Number.POSITIVE_INFINITY;for(let e=0;e<n.length;e++){const s=n[e];s<t&&(t=s)}return t}function Ns(n){if(n.length===0)return Number.NaN;let t=Number.NEGATIVE_INFINITY;for(let e=0;e<n.length;e++){const s=n[e];s>t&&(t=s)}return t}function Sn(n,t){if(t<n)throw new D(`end (${t}) < begin (${n}) is forbidden.`);const e=[];for(let s=n;s<t;++s)e.push(s);return e}let Bu;function oe(){return Bu==null&&(Bu=L$().epsilon()),Bu}function Nn(){return"channelsLast"}function Vn(n,t){return st(n,t)}function ua(n,t=-1){const e=n.shape.slice();return t<0&&(t=e.length+t+1),e.splice(t,0,1),L(n,e)}function uA(n,t){return V(()=>{if(n.shape.length!==2)throw new D(`repeat() expects a rank-2 tensor, but received a rank-${n.shape.length} tensor.`);const e=ua(n,1);return kh(e,[1,t,1])})}function hA(n){const t=[Is(n.shape)];return L(n,t)}function dA(n){if(n.rank<=1)throw new D(`batchFlatten requires a minimum rank of 2. Got rank: ${n.rank}.`);const t=[n.shape[0],Is(n.shape,1)];return L(n,t)}function er(n,t,e){return V(()=>{switch(n.rank){case 1:return of(n,t,e);case 2:return T0(n,[t,0],[e,n.shape[1]]);case 3:return af(n,[t,0,0],[e,n.shape[1],n.shape[2]]);case 4:return bl(n,[t,0,0,0],[e,n.shape[1],n.shape[2],n.shape[3]]);case 5:return zt(n,[t,0,0,0,0],[e,n.shape[1],n.shape[2],n.shape[3],n.shape[4]]);case 6:return zt(n,[t,0,0,0,0,0],[e,n.shape[1],n.shape[2],n.shape[3],n.shape[4],n.shape[5]]);default:throw new D(`sliceAlongFirstAxis() received an unsupported tensor rank: ${n.rank}`)}})}function Vu(n,t,e){return V(()=>{switch(n.rank){case 1:return of(n,t,e);case 2:return T0(n,[0,t],[n.shape[0],e]);case 3:return af(n,[0,0,t],[n.shape[0],n.shape[1],e]);case 4:return bl(n,[0,0,0,t],[n.shape[0],n.shape[1],n.shape[2],e]);default:throw new D(`sliceAlongLastAxis() received an unsupported tensor rank: ${n.rank}`)}})}function _a(n,t,e,s){return V(()=>{switch(n.rank){case 1:return of(n,t,e);case 2:switch(s){case 1:return er(n,t,e);case 2:return Vu(n,t,e);default:throw new D(`The axis is not within the rank of the tensor ${s}`)}case 3:switch(s){case 1:return er(n,t,e);case 2:return af(n,[0,t,0],[n.shape[0],e,n.shape[2]]);case 3:return Vu(n,t,e);default:throw new D(`The axis is not within the rank of the tensor ${s}`)}case 4:switch(s){case 1:return er(n,t,e);case 2:return bl(n,[0,t,0,0],[n.shape[0],e,n.shape[2],n.shape[3]]);case 3:return bl(n,[0,0,t,0],[n.shape[0],n.shape[1],e,n.shape[3]]);case 4:return Vu(n,t,e);default:throw new D(`The axis is not within the rank of the tensor ${s}`)}default:throw new D(`sliceAlongLastAxis() received an unsupported tensor rank: ${n.rank}`)}})}function Kf(n,t=-1){let e;return t<0&&(e=n[0].rank,e!==0?t=e:t=0),t===n[0].rank&&(t=-1),Le(n,t)}function Rm(n,t){switch(n.rank){case 1:return xI([n,t]);case 2:return yI([n,t],0);case 3:return vI([n,t],0);case 4:return $I([n,t],0);default:throw new D(`concatAlongFirstAxis() received an unsupported tensor rank: ${n.rank}`)}}function kh(n,t){if(Array.isArray(t)||(t=[t]),n.rank!==t.length)throw new D(`The length of input n (${t.length}) does not match the number of dimensions in input x (${n.rank})`);return Cn(n,t)}function cu(n,t=0,e=1,s,r){return F2(n,t,e,s,r)}function Wn(n,t,e,s){if(n.rank<2||t.rank<2)throw new xt(`dot requires both inputs to be rank >= 2 but got x shape = ${n.shape} and y shape = ${t.shape}`);if(t.rank>=3){const r=n.shape.slice(-1)[0],o=t.shape.slice(-2)[0];if(r!==o)throw new xt(`If rank y >= 3, then the second last dim of y must equal the last dim of x but got x shape = ${n.shape} and  y shape = ${t.shape}`)}if(n.rank===2&&t.rank===2)return pm({a:n,b:t,transposeA:!1,transposeB:!1,bias:s?Ih(n.rank,s,Nn()):null,activation:e});{const r=n.shape.slice(),o=r.pop();n=L(n,[-1,o]);const i=t.shape.slice(),a=i.pop(),l=i.pop(),c=[...i,a],u=Array.from({length:t.rank},(p,m)=>m===0?t.rank-2:m<=t.rank-2?m-1:m);t=L($t(t,u),[l,-1]);const h=[...r,...c];return L(pm({a:n,b:t,transposeA:!1,transposeB:!1,bias:s?Ih(n.rank,s,Nn()):null,activation:e}),h)}}function _b(n,t,e){return V(()=>(Array.isArray(t)?t=Ue(t,"int32"):t=st(t,"int32"),Xd(n,t,e)))}function ha(n){return _(n,n)}function Ih(n,t,e){const s=t.shape;if(t.rank!==1&&t.rank!==n)throw new D(`Unexpected bias dimensions: ${t.rank}; expected it to be 1 or ${n}`);if(n===5){if(e==="channelsFirst")return s.length===1?L(t,[1,s[0],1,1,1]):L(t,[1,s[3],s[0],s[1],s[2]]);if(e==="channelsLast")return s.length===1?L(t,[1,1,1,1,s[0]]):L(t,[1].concat(s))}else if(n===4){if(e==="channelsFirst")return s.length===1?L(t,[1,s[0],1,1]):L(t,[1,s[2],s[0],s[1]]);if(e==="channelsLast")return s.length===1?L(t,[1,1,1,s[0]]):L(t,[1].concat(s))}else if(n===3){if(e==="channelsFirst")return s.length===1?L(t,[1,s[0],1]):L(t,[1,s[1],s[0]]);if(e==="channelsLast")return s.length===1?L(t,[1,1,s[0]]):L(t,[1].concat(s))}else if(n<3)return t;throw new D(`Unsupported input rank by biasAdd: ${t.rank}`)}function Rn(n,t,e){return V(()=>(e==null&&(e=Nn()),Qt(e),J(n,Ih(n.rank,t,e))))}function fA(n,t=1){if(t!==1)throw new xt(`Support for alpha values other than 1 (${t}) is not implemented yet.`);return eu(n)}function pA(n){return V(()=>ut(n,J(Te(n),1)))}function Fb(n,t,e,s){return V(()=>EN(n,t,e,s))}function mA(n){return V(()=>{const t=J(.5,_(.2,n));return tn(t,0,1)})}function da(n,t,e=!1){return e?n():t()}const gA=["fanIn","fanOut","fanAvg"],xA=["normal","uniform","truncatedNormal"];function bA(n){kr(gA,"FanMode",n)}function yA(n){kr(xA,"Distribution",n)}class fn extends fo{fromConfigUsesCustomObjects(){return!1}getConfig(){return{}}}class Ob extends fn{apply(t,e){return fe(t,e)}}Ob.className="Zeros";X(Ob);class Xf extends fn{apply(t,e){return Ps(t,e)}}Xf.className="Ones";X(Xf);class Mb extends fn{constructor(t){if(super(),typeof t!="object")throw new D(`Expected argument of type ConstantConfig but got ${t}`);if(t.value===void 0)throw new D(`config must have value set but got ${t}`);this.value=t.value}apply(t,e){return V(()=>_(Tt(this.value),Ps(t,e)))}getConfig(){return{value:this.value}}}Mb.className="Constant";X(Mb);class Lb extends fn{constructor(t){super(),this.DEFAULT_MINVAL=-.05,this.DEFAULT_MAXVAL=.05,this.minval=t.minval||this.DEFAULT_MINVAL,this.maxval=t.maxval||this.DEFAULT_MAXVAL,this.seed=t.seed}apply(t,e){return sa(t,this.minval,this.maxval,e,this.seed)}getConfig(){return{minval:this.minval,maxval:this.maxval,seed:this.seed}}}Lb.className="RandomUniform";X(Lb);class Pb extends fn{constructor(t){super(),this.DEFAULT_MEAN=0,this.DEFAULT_STDDEV=.05,this.mean=t.mean||this.DEFAULT_MEAN,this.stddev=t.stddev||this.DEFAULT_STDDEV,this.seed=t.seed}apply(t,e){if(e=e||"float32",e!=="float32"&&e!=="int32")throw new xt(`randomNormal does not support dType ${e}.`);return cu(t,this.mean,this.stddev,e,this.seed)}getConfig(){return{mean:this.mean,stddev:this.stddev,seed:this.seed}}}Pb.className="RandomNormal";X(Pb);class zb extends fn{constructor(t){super(),this.DEFAULT_MEAN=0,this.DEFAULT_STDDEV=.05,this.mean=t.mean||this.DEFAULT_MEAN,this.stddev=t.stddev||this.DEFAULT_STDDEV,this.seed=t.seed}apply(t,e){if(e=e||"float32",e!=="float32"&&e!=="int32")throw new xt(`truncatedNormal does not support dType ${e}.`);return A0(t,this.mean,this.stddev,e,this.seed)}getConfig(){return{mean:this.mean,stddev:this.stddev,seed:this.seed}}}zb.className="TruncatedNormal";X(zb);class Bb extends fn{constructor(t){super(),this.gain=t.gain!=null?t.gain:1}apply(t,e){return V(()=>{if(t.length!==2||t[0]!==t[1])throw new D("Identity matrix initializer can only be used for 2D square matrices.");return _(this.gain,p0(t[0]))})}getConfig(){return{gain:this.gain}}}Bb.className="Identity";X(Bb);function wA(n,t="channelsLast"){let e,s;if(Qt(t),n.length===2)e=n[0],s=n[1];else if([3,4,5].indexOf(n.length)!==-1){if(t==="channelsFirst"){const r=Is(n,2);e=n[1]*r,s=n[0]*r}else if(t==="channelsLast"){const r=Is(n,0,n.length-2);e=n[n.length-2]*r,s=n[n.length-1]*r}}else{const r=Is(n);e=Math.sqrt(r),s=Math.sqrt(r)}return[e,s]}class qe extends fn{constructor(t){if(super(),t.scale<0)throw new D(`scale must be a positive float. Got: ${t.scale}`);this.scale=t.scale==null?1:t.scale,this.mode=t.mode==null?"fanIn":t.mode,bA(this.mode),this.distribution=t.distribution==null?"normal":t.distribution,yA(this.distribution),this.seed=t.seed}apply(t,e){const s=wA(t),r=s[0],o=s[1];let i=this.scale;if(this.mode==="fanIn"?i/=Math.max(1,r):this.mode==="fanOut"?i/=Math.max(1,o):i/=Math.max(1,(r+o)/2),this.distribution==="normal"){const a=Math.sqrt(i);if(e=e||"float32",e!=="float32"&&e!=="int32")throw new xt(`${this.getClassName()} does not support dType ${e}.`);return A0(t,0,a,e,this.seed)}else{const a=Math.sqrt(3*i);return sa(t,-a,a,e,this.seed)}}getConfig(){return{scale:this.scale,mode:this.mode,distribution:this.distribution,seed:this.seed}}}qe.className="VarianceScaling";X(qe);class Yf extends qe{constructor(t){super({scale:1,mode:"fanAvg",distribution:"uniform",seed:t==null?null:t.seed})}getClassName(){return qe.className}}Yf.className="GlorotUniform";X(Yf);class Zf extends qe{constructor(t){super({scale:1,mode:"fanAvg",distribution:"normal",seed:t==null?null:t.seed})}getClassName(){return qe.className}}Zf.className="GlorotNormal";X(Zf);class Jf extends qe{constructor(t){super({scale:2,mode:"fanIn",distribution:"normal",seed:t==null?null:t.seed})}getClassName(){return qe.className}}Jf.className="HeNormal";X(Jf);class Qf extends qe{constructor(t){super({scale:2,mode:"fanIn",distribution:"uniform",seed:t==null?null:t.seed})}getClassName(){return qe.className}}Qf.className="HeUniform";X(Qf);class tp extends qe{constructor(t){super({scale:1,mode:"fanIn",distribution:"normal",seed:t==null?null:t.seed})}getClassName(){return qe.className}}tp.className="LeCunNormal";X(tp);class ep extends qe{constructor(t){super({scale:1,mode:"fanIn",distribution:"uniform",seed:t==null?null:t.seed})}getClassName(){return qe.className}}ep.className="LeCunUniform";X(ep);class Vb extends fn{constructor(t){super(),this.DEFAULT_GAIN=1,this.ELEMENTS_WARN_SLOW=2e3,this.gain=t.gain==null?this.DEFAULT_GAIN:t.gain,this.seed=t.seed}apply(t,e){return V(()=>{if(t.length<2)throw new xt("Shape must be at least 2D.");if(e!=="int32"&&e!=="float32"&&e!==void 0)throw new TypeError(`Unsupported data type ${e}.`);e=e;const s=q(t.slice(0,-1)),r=t[t.length-1],o=s*r;o>this.ELEMENTS_WARN_SLOW&&console.warn(`Orthogonal initializer is being called on a matrix with more than ${this.ELEMENTS_WARN_SLOW} (${o}) elements: Slowness may result.`);const i=[Math.max(r,s),Math.min(r,s)],a=cu(i,0,1,e,this.seed),l=IT.qr(a,!1);let c=l[0];const h=l[1].flatten().stridedSlice([0],[Math.min(r,s)*Math.min(r,s)],[Math.min(r,s)+1]);return c=_(c,h.sign()),s<r&&(c=c.transpose()),_(Tt(this.gain),c.reshape(t))})}getConfig(){return{gain:this.gain,seed:this.seed}}}Vb.className="Orthogonal";X(Vb);const Am={constant:"Constant",glorotNormal:"GlorotNormal",glorotUniform:"GlorotUniform",heNormal:"HeNormal",heUniform:"HeUniform",identity:"Identity",leCunNormal:"LeCunNormal",leCunUniform:"LeCunUniform",ones:"Ones",orthogonal:"Orthogonal",randomNormal:"RandomNormal",randomUniform:"RandomUniform",truncatedNormal:"TruncatedNormal",varianceScaling:"VarianceScaling",zeros:"Zeros"};function Dm(n,t={}){return ca(n,an.getMap().classNameMap,t,"initializer")}function qt(n){return qf(n)}function Ut(n){if(typeof n=="string"){const t=n in Am?Am[n]:n;if(t==="GlorotNormal")return new Zf;if(t==="GlorotUniform")return new Yf;if(t==="HeNormal")return new Jf;if(t==="HeUniform")return new Qf;if(t==="LeCunNormal")return new tp;if(t==="LeCunUniform")return new ep;{const e={};return e.className=t,e.config={},Dm(e)}}else return n instanceof fn?n:Dm(n)}function Sh(n){return Array.isArray(n)&&Array.isArray(n[0])}function yl(n){return n.length===0?[]:Array.isArray(n[0])?n:[n]}function pt(n){let t;if(Array.isArray(n)){if(n.length!==1)throw new D(`Expected Tensor length to be 1; got ${n.length}`);t=n[0]}else t=n;return t}function St(n){if(Array.isArray(n)&&Array.isArray(n[0])){if(n.length===1)return n=n,n[0];throw new D(`Expected exactly 1 Shape; got ${n.length}`)}else return n}function wl(n){let t=0;for(const e of n)e.shape.length===0?t+=1:t+=e.shape.reduce((s,r)=>s*r);return t}const _m="Variable";class vA{constructor(t,e="float32",s=_m,r=!0,o=null){this.dtype=e??"float32",this.shape=t.shape,this.id=Tb(),s=s??_m,this.originalName=Rb(s),this.name=Ab(this.originalName),this.trainable_=r,this.constraint=o,this.val=IN(t,this.trainable_,this.name,this.dtype)}read(){return this.assertNotDisposed(),this.val}write(t){return this.assertNotDisposed(),CA(this.val,t),this.val.id!==t.id&&(this.val.assign(t),this.constraint!=null&&this.val.assign(this.constraint.apply(this.val))),this}dispose(){this.assertNotDisposed(),this.val.dispose()}assertNotDisposed(){if(this.val.isDisposed)throw new Error(`LayersVariable ${this.name} is already disposed.`)}get trainable(){return this.trainable_}set trainable(t){this.trainable_=t,this.val.trainable=t}}function CA(n,t){if(n.shape.toString()!==t.shape.toString())throw new Error("Shape mismatch: "+JSON.stringify(n.shape)+" vs. "+JSON.stringify(t.shape))}function Nh(n){return n.map(t=>t.read())}function np(n){n.forEach(t=>{t[0].write(t[1])})}class ie{constructor(t){this.dtype=t.dtype,this.shape=t.shape,t.shape!=null?this.ndim=t.shape.length:this.ndim=t.ndim,this.maxNDim=t.maxNDim,this.minNDim=t.minNDim,this.axes=t.axes||{}}}class Kn{constructor(t,e,s,r,o,i,a){this.dtype=t,this.shape=e,this.sourceLayer=s,this.inputs=r,this.callArgs=o,this.outputTensorIndex=a,this.id=Tb(),i!=null&&(this.originalName=Rb(i),this.name=Ab(this.originalName)),this.rank=e.length}}let $A=0;class uu{constructor(t,e){this.callArgs=e,this.id=$A++,this.outboundLayer=t.outboundLayer,this.inboundLayers=t.inboundLayers,this.nodeIndices=t.nodeIndices,this.tensorIndices=t.tensorIndices,this.inputTensors=t.inputTensors,this.outputTensors=t.outputTensors,this.inputMasks=t.inputMasks,this.outputMasks=t.outputMasks,this.inputShapes=t.inputShapes,this.outputShapes=t.outputShapes;for(const s of t.inboundLayers)s?.outboundNodes.push(this);t.outboundLayer.inboundNodes.push(this)}getConfig(){const t=[];for(const e of this.inboundLayers)e!=null?t.push(e.name):t.push(null);return{outboundLayer:this.outboundLayer?this.outboundLayer.name:null,inboundLayers:t,nodeIndices:this.nodeIndices,tensorIndices:this.tensorIndices}}}let kA=0;class Ct extends fo{constructor(t={}){super(),this._callHook=null,this._addedWeightNames=[],this._stateful=!1,this.id=kA++,this.activityRegularizer=null,this.inputSpec=null,this.supportsMasking=!1,this._trainableWeights=[],this._nonTrainableWeights=[],this._losses=[],this._updates=[],this._built=!1,this.inboundNodes=[],this.outboundNodes=[];let e=t.name;if(!e){const s=this.getClassName();e=ns(s)+"_"+lu(s)}if(this.name=e,this.trainable_=t.trainable==null?!0:t.trainable,t.inputShape!=null||t.batchInputShape!=null){let s;if(t.batchInputShape!=null)s=t.batchInputShape;else if(t.inputShape!=null){let o=null;t.batchSize!=null&&(o=t.batchSize),s=[o].concat(t.inputShape)}this.batchInputShape=s;let r=t.dtype;r==null&&(r=t.inputDType),r==null&&(r="float32"),this.dtype=r}t.weights!=null?this.initialWeights=t.weights:this.initialWeights=null,this._refCount=null,this.fastWeightInitDuringBuild=!1}static nodeKey(t,e){return t.name+"_ib-"+e.toString()}getNodeAtIndex(t,e){if(this.inboundNodes.length===0)throw new ln(`The layer has never been called and thus has no defined ${e}.`);if(this.inboundNodes.length<=t)throw new D(`Asked to get ${e} at node ${t}, but the layer has only ${this.inboundNodes.length} inbound nodes.`);return this.inboundNodes[t]}getInputAt(t){return Me(this.getNodeAtIndex(t,"input").inputTensors)}getOutputAt(t){return Me(this.getNodeAtIndex(t,"output").outputTensors)}get input(){if(this.inboundNodes.length>1)throw new Fn(`Layer ${this.name} has multiple inbound nodes, hence the notion of "layer input" is ill-defined. Use \`getInputAt(nodeIndex)\` instead.`);if(this.inboundNodes.length===0)throw new Fn(`Layer ${this.name} is not connected, no input to return.`);return Me(this.getNodeAtIndex(0,"input").inputTensors)}get output(){if(this.inboundNodes.length===0)throw new Fn(`Layer ${this.name} has no inbound nodes.`);if(this.inboundNodes.length>1)throw new Fn(`Layer ${this.name} has multiple inbound nodes, hence the notion of "layer output" is ill-defined. Use \`getOutputAt(nodeIndex)\` instead.`);return Me(this.getNodeAtIndex(0,"output").outputTensors)}get losses(){return this._losses}calculateLosses(){return this.losses.map(t=>t())}get updates(){return this._updates}get built(){return this._built}set built(t){this._built=t}get trainable(){return this.trainable_}set trainable(t){this._trainableWeights.forEach(e=>e.trainable=t),this.trainable_=t}get trainableWeights(){return this.trainable_?this._trainableWeights.filter(t=>t.trainable):[]}set trainableWeights(t){this._trainableWeights=t}get nonTrainableWeights(){return this.trainable?this._trainableWeights.filter(t=>!t.trainable).concat(this._nonTrainableWeights):this._trainableWeights.concat(this._nonTrainableWeights)}set nonTrainableWeights(t){this._nonTrainableWeights=t}get weights(){return this.trainableWeights.concat(this.nonTrainableWeights)}get stateful(){return this._stateful}resetStates(){if(!this.stateful)throw new Error("Cannot call the resetStates() method of a non-stateful Layer object.")}assertInputCompatibility(t){const e=At(t);if(this.inputSpec==null||this.inputSpec.length===0)return;const s=At(this.inputSpec);if(e.length!==s.length)throw new D(`Layer ${this.name} expects ${s.length} inputs, but it received ${e.length} input tensors. Input received: ${t}`);for(let r=0;r<e.length;r++){const o=e[r],i=s[r];if(i==null)continue;const a=o.rank;if(i.ndim!=null&&a!==i.ndim)throw new D(`Input ${r} is incompatible with layer ${this.name}: expected ndim=${i.ndim}, found ndim=${a}`);if(i.maxNDim!=null&&a>i.maxNDim)throw new D(`Input ${r} is incompatible with layer ${this.name}: expected max_ndim=${i.maxNDim}, found ndim=${a}`);if(i.minNDim!=null&&a<i.minNDim)throw new D(`Input ${r} is incompatible with layer ${this.name}: expected min_ndim=${i.minNDim}, found ndim=${a}.`);if(i.dtype!=null&&o.dtype!==i.dtype)throw new D(`Input ${r} is incompatible with layer ${this.name} : expected dtype=${i.dtype}, found dtype=${o.dtype}.`);if(i.axes){const l=o.shape;for(const c in i.axes){const u=Number(c),h=i.axes[c],d=u>=0?l[u]:l[l.length+u];if(h!=null&&[h,null].indexOf(d)===-1)throw new D(`Input ${r} is incompatible with layer ${this.name}: expected axis ${u} of input shape to have value ${h} but got shape ${l}.`)}}if(i.shape!=null)for(let l=0;l<i.shape.length;++l){const c=i.shape[l],u=o.shape[l];if(c!=null&&u!=null&&c!==u)throw new D(`Input ${r} is incompatible with layer ${this.name}: expected shape=${i.shape}, found shape=${o.shape}.`)}}}call(t,e){return t}invokeCallHook(t,e){this._callHook!=null&&this._callHook(t,e)}setCallHook(t){this._callHook=t}clearCallHook(){this._callHook=null}apply(t,e){e=e||{},this.assertNotDisposed();const s=At(t),r=NA(t),o=TA(t);if(r===o)throw new D("Arguments to apply() must be all SymbolicTensors or all Tensors");return tr(this.name,()=>{if(!this.built){this.assertInputCompatibility(t);const i=[];for(const a of At(t))i.push(a.shape);this.build(Me(i)),this.built=!0,this.initialWeights&&this.setWeights(this.initialWeights),this._refCount===null&&o&&(this._refCount=1)}if(this.assertInputCompatibility(t),o){let i=this.call(t,e);this.supportsMasking&&this.setMaskMetadata(t,i);const a=At(i),l=[];for(let c of a)s.indexOf(c)!==-1&&(c=c.clone()),l.push(c);if(i=Me(l),this.activityRegularizer!=null)throw new xt("Layer invocation in the presence of activity regularizer(s) is not supported yet.");return i}else{const i=IA(t),a=this.computeOutputShape(i);let l;const c=SA(t);if(this.warnOnIncompatibleInputShape(Array.isArray(t)?i[0]:i),a!=null&&a.length>0&&Array.isArray(a[0])?l=a.map((u,h)=>new Kn(c,u,this,At(t),e,this.name,h)):l=new Kn(c,a,this,At(t),e,this.name),this.addInboundNode(t,l,null,null,i,a,e),this._refCount++,this.activityRegularizer!=null)throw new xt("Layer invocation in the presence of activity regularizer(s) is not supported yet.");return l}})}warnOnIncompatibleInputShape(t){if(this.batchInputShape!=null)if(t.length!==this.batchInputShape.length)console.warn(`The rank of the input tensor provided (shape: ${JSON.stringify(t)}) does not match that of the batchInputShape (${JSON.stringify(this.batchInputShape)}) of the layer ${this.name}`);else{let e=!1;this.batchInputShape.forEach((s,r)=>{s!=null&&t[r]!=null&&t[r]!==s&&(e=!0)}),e&&console.warn(`The shape of the input tensor (${JSON.stringify(t)}) does not match the expectation of layer ${this.name}: ${JSON.stringify(this.batchInputShape)}`)}}get outputShape(){if(this.inboundNodes==null||this.inboundNodes.length===0)throw new Fn(`The layer ${this.name} has never been called and thus has no defined output shape.`);const t=[];for(const e of this.inboundNodes){const s=JSON.stringify(e.outputShapes);t.indexOf(s)===-1&&t.push(s)}if(t.length===1){const e=this.inboundNodes[0].outputShapes;return Array.isArray(e)&&Array.isArray(e[0])&&e.length===1?e[0]:e}else throw new Fn(`The layer ${this.name} has multiple inbound nodes with different output shapes. Hence the notion of "output shape" is ill-defined for the layer.`)}countParams(){if(!this.built)throw new ln(`You tried to call countParams() on ${this.name}, but the layer is not built yet. Build it first by calling build(batchInputShape).`);return wl(this.weights)}build(t){this.built=!0}getWeights(t=!1){return Nh(t?this.trainableWeights:this.weights)}setWeights(t){V(()=>{const e=this.weights;if(e.length!==t.length)throw new D(`You called setWeights(weights) on layer "${this.name}" with a weight list of length ${t.length}, but the layer was expecting ${e.length} weights. Provided weights: ${t}...`);if(e.length===0)return;const s=[],r=Nh(e);for(let o=0;o<r.length;++o){const i=r[o],a=e[o],l=t[o];if(!Et(i.shape,l.shape))throw new D(`Layer weight shape ${i.shape} not compatible with provided weight shape ${l.shape}`);s.push([a,l])}np(s)})}addWeight(t,e,s,r,o,i,a,l){if(this._addedWeightNames.indexOf(t)!==-1)throw new D(`Duplicate weight name ${t} for layer ${this.name}`);this._addedWeightNames.push(t),s==null&&(s="float32"),this.fastWeightInitDuringBuild&&(r=l!=null?l():Ut("zeros"));const c=r.apply(e,s),u=new vA(c,s,t,i,a);return c.dispose(),o!=null&&this.addLoss(()=>o.apply(u.read())),i==null&&(i=!0),i?this._trainableWeights.push(u):this._nonTrainableWeights.push(u),u}setFastWeightInitDuringBuild(t){this.fastWeightInitDuringBuild=t}addLoss(t){t==null||Array.isArray(t)&&t.length===0||(t=At(t),this._losses!==void 0&&this._losses!==null&&this.losses.push(...t))}computeOutputShape(t){return t}computeMask(t,e){if(!this.supportsMasking){if(e!=null)if(Array.isArray(e))e.forEach(s=>{if(s!=null)throw new TypeError(`Layer ${this.name} does not support masking, but was passed an inputMask.`)});else throw new TypeError(`Layer ${this.name} does not support masking, but was passed an inputMask.`);return null}return e}setMaskMetadata(t,e,s){if(!this.supportsMasking)return;const r=this.computeMask(t,s),o=At(e),i=At(r);if(o.length!==i.length)throw new Error(`${this.name} outputs ${o.length} tensors but ${o.length} masks for those tensors`);for(let a=0;a<o.length;a++)o[a].kerasMask=i[a]}addInboundNode(t,e,s,r,o,i,a=null){const l=At(t);e=At(e),s=At(s),r=At(r),o=yl(o),i=yl(i);const c=[],u=[],h=[];for(const d of l)c.push(d.sourceLayer),u.push(d.nodeIndex),h.push(d.tensorIndex);new uu({outboundLayer:this,inboundLayers:c,nodeIndices:u,tensorIndices:h,inputTensors:l,outputTensors:e,inputMasks:s,outputMasks:r,inputShapes:o,outputShapes:i},a);for(let d=0;d<e.length;d++)e[d].sourceLayer=this,e[d].nodeIndex=this.inboundNodes.length-1,e[d].tensorIndex=d}getConfig(){const t={name:this.name,trainable:this.trainable};return this.batchInputShape!=null&&(t.batchInputShape=this.batchInputShape),this.dtype!=null&&(t.dtype=this.dtype),t}disposeWeights(){return this.weights.forEach(t=>t.dispose()),this.weights.length}assertNotDisposed(){if(this._refCount===0)throw new Error(`Layer '${this.name}' is already disposed.`)}dispose(){if(!this.built)throw new Error(`Cannot dispose Layer ${this.name} because it has not been built yet.`);if(this._refCount===null)throw new Error(`Cannot dispose Layer ${this.name} because it has not been used yet.`);this.assertNotDisposed();let t=0;return--this._refCount===0&&(t=this.disposeWeights()),{refCountAfterDispose:this._refCount,numDisposedVariables:t}}}function IA(n){n=At(n);const t=[];for(const e of n)t.push(e.shape);return Me(t)}function SA(n){return"float32"}function Wb(n,t,e){if((t==null||e!=null&&e>0)&&(t=n.sourceLayer,e=n.nodeIndex),t.inboundNodes.length===0)return[n];{const s=t.inboundNodes[e];if(s.inboundLayers.length===0)return s.inputTensors;{const r=[];for(let o=0;o<s.inboundLayers.length;o++){const i=s.inputTensors[o],a=s.inboundLayers[o],l=s.nodeIndices[o],c=Wb(i,a,l);for(const u of c)r.indexOf(u)===-1&&r.push(u)}return r}}}function NA(n){let t=!0;for(const e of At(n))if(!(e instanceof Kn)){t=!1;break}return t}function TA(n){let t=!0;for(const e of At(n))if(e instanceof Kn){t=!1;break}return t}class fa extends Ct{constructor(t){if(super({dtype:t.dtype,name:t.name!=null?t.name:lu("input").toString()}),t.batchSize==null&&(t.batchSize=null),t.sparse==null&&(t.sparse=!1),this.trainable=!1,this.built=!0,this.sparse=t.sparse,t.inputShape!=null&&t.batchInputShape!=null)throw new D("Only provide the inputShape OR batchInputShape argument to inputLayer, not both at the same time.");let e=t.batchInputShape;if(e==null){if(t.inputShape==null)throw new D("An InputLayer should be passed either a `batchInputShape` or an `inputShape`.");e=[t.batchSize].concat(t.inputShape)}else if(t.batchSize!=null)throw new D("Cannot specify batchSize if batchInputShape is specified when creating an InputLayer.");const s=t.dtype||"float32";this.batchInputShape=e,this.dtype=s,this.inputSpec=[{shape:e}];const r=new Kn(this.dtype,this.batchInputShape,this,[],{},this.name);r.nodeIndex=0,r.tensorIndex=0,new uu({outboundLayer:this,inboundLayers:[],nodeIndices:[],tensorIndices:[],inputTensors:[r],outputTensors:[r],inputMasks:[null],outputMasks:[null],inputShapes:[e],outputShapes:[e]})}apply(t,e){throw new D(`Cannot pass any input to an InputLayer's apply() method. InputLayer name: ${this.name}`)}dispose(){return{refCountAfterDispose:this._refCount,numDisposedVariables:0}}getConfig(){return{batchInputShape:this.batchInputShape,dtype:this.dtype,sparse:this.sparse,name:this.name}}}fa.className="InputLayer";X(fa);function EA(n){if(n.batchShape==null&&n.shape==null)throw new Error("Please provide to Input either a `shape` or a `batchShape` argument. Note that `shape` does not include the batch dimension.");if(n.batchShape!=null&&n.shape!=null)throw new D("Please provide either a `shape` or `batchShape` argument to Input, but not both.");let t=n.batchShape;n.shape!=null&&t==null&&(t=[null].concat(n.shape));let e=n.dtype;return e==null&&(e="float32"),new fa({batchInputShape:t,name:n.name,dtype:e,sparse:n.sparse}).inboundNodes[0].outputTensors[0]}function RA(n,t){if(n.dtype==null||n.dtype===t.dtype)return t;try{return st(t,n.dtype)}catch{throw new D(`The dtype of the feed (${t.dtype}) can not be cast to the dtype of the key '${n.name}' (${n.dtype}).`)}}class ws{constructor(t){if(this.id2Value={},this.id2Mask={},this.name2Id={},t instanceof ws)for(const e in t.id2Value)this.id2Value[e]=t.id2Value[e],e in t.id2Mask&&(this.id2Mask[e]=t.id2Mask[e]);else{if(t==null)return;for(const e of t)this.add(e.key,e.value)}}add(t,e,s){if(this.id2Value[t.id]==null)this.id2Value[t.id]=RA(t,e),this.name2Id[t.name]=t.id,s!=null&&(this.id2Mask[t.id]=s);else throw new D(`Duplicate key: name=${t.name}, id=${t.id}`);return this}addFeed(t){this.add(t.key,t.value)}hasKey(t){return this.id2Value[t.id]!=null}names(){return Object.keys(this.name2Id)}getValue(t){if(t instanceof Kn){if(this.id2Value[t.id]==null)throw new D(`Nonexistent key: ${t.name}`);return this.id2Value[t.id]}else{const e=this.name2Id[t];if(e==null)throw new D(`Feed dict has no SymbolicTensor name: ${t}`);return this.id2Value[e]}}getMask(t){if(t instanceof Kn){if(this.id2Value[t.id]==null)throw new D(`Nonexistent key: ${t.name}`);return this.id2Mask[t.id]}else{const e=this.name2Id[t];if(e==null)throw new D(`Feed dict has no SymbolicTensor name: ${t}`);return this.id2Mask[e]}}disposeMasks(){this.id2Mask!=null&&yt(this.id2Mask)}}const vl=new Ib,Cl=new Ib;function AA(n){vl?.setMaxEntries(n),Cl?.setMaxEntries(n)}function _o(n,t,e,s){const r=e==null?!1:e.training,o=Array.isArray(n),i=o?n:[n],a=i.map(p=>p.name),l=[],c=t.names();for(const p of a)c.indexOf(p)!==-1?l.push(t.getValue(p)):l.push(null);const u=a.join(",")+"|"+t.names().sort().join(",");let h=vl.get(u),d;if(h==null){const p=DA(i,t);h=p.sorted,d=p.recipientCounts,vl.put(u,h),Cl.put(u,d)}d={},r||Object.assign(d,Cl.get(u));const f=new ws(t);for(let p=0;p<h.length;++p){const m=h[p],g=m.sourceLayer;if(g instanceof fa)continue;const x=[],b=[],w=[];let y=!1;for(const k of m.inputs){const I=f.getValue(k),C=f.getMask(k);x.push(I),b.push(C),C!=null&&(y=!0),r||(d[k.name]--,d[k.name]===0&&!t.hasKey(k)&&a.indexOf(k.name)===-1&&!I.isDisposed&&k.sourceLayer.stateful!==!0&&w.push(I))}y&&(e=e||{},e.mask=b[0]);const v=At(g.apply(x,e));let $=null;g.supportsMasking&&($=g.computeMask(x,b));const N=FA(m),T=Array.isArray(N)?N:[N];for(let k=0;k<T.length;++k){f.hasKey(T[k])||f.add(T[k],v[k],Array.isArray($)?$[0]:$);const I=a.indexOf(T[k].name);I!==-1&&(l[I]=v[k])}r||yt(w)}return f.disposeMasks(),o?l:l[0]}function DA(n,t){S(n!=null&&n.length>0,()=>"Expected at least one fetch, got none");let e=[],s={};if(n.length===1){const r=Fm(n[0],t);e=r.sorted,s=r.recipientMap}else{const r=new Set;for(const o of n){const{sorted:i,recipientMap:a}=Fm(o,t);for(const l of i)r.has(l.name)||(e.push(l),r.add(l.name));for(const l in a)s[l]==null&&(s[l]=new Set),a[l].forEach(c=>s[l].add(c))}}return{sorted:e,recipientCounts:_A(s)}}function _A(n){const t={};for(const e in n)t[e]=n[e].size;return t}function Fm(n,t){const e=new Set,s=[],r={};for(const a of t.names())e.add(a);const o=[],i=[];for(o.push(n);o.length>0;){const a=o[o.length-1];if(e.has(a.name)){o.pop();continue}const l=i[i.length-1]===o.length-1;if(a.inputs.length===0||l)o.pop(),s.push(a),e.add(a.name),l&&i.pop();else{i.push(o.length-1);for(const c of a.inputs)r[c.name]==null&&(r[c.name]=new Set),r[c.name].add(a.name),!e.has(c.name)&&o.push(c)}}return{sorted:s,recipientMap:r}}function FA(n){let t;if(n.sourceLayer.inboundNodes.length===1)t=n.sourceLayer.output;else{let e=null;for(let s=0;s<n.sourceLayer.inboundNodes.length;++s)for(const r of n.sourceLayer.inboundNodes[s].outputTensors)if(r.id===n.id){e=s;break}t=n.sourceLayer.getOutputAt(e)}return t}const OA=W();OA.registerFlag("TOPOLOGICAL_SORT_CACHE_MAX_ENTRIES",()=>100,AA);function sp(n,t){return V(()=>ke(ct(_(n,n),t,!0)))}class pa extends fo{getConfig(){return{}}}class Ub extends pa{constructor(t){super(),this.defaultMaxValue=2,this.defaultAxis=0,this.maxValue=t.maxValue!=null?t.maxValue:this.defaultMaxValue,this.axis=t.axis!=null?t.axis:this.defaultAxis}apply(t){return V(()=>{const e=sp(t,this.axis),s=tn(e,0,this.maxValue);return _(t,ut(s,J(oe(),e)))})}getConfig(){return{maxValue:this.maxValue,axis:this.axis}}}Ub.className="MaxNorm";X(Ub);class Gb extends pa{constructor(t){super(),this.defaultAxis=0,this.axis=t.axis!=null?t.axis:this.defaultAxis}apply(t){return V(()=>ut(t,J(oe(),sp(t,this.axis))))}getConfig(){return{axis:this.axis}}}Gb.className="UnitNorm";X(Gb);class Hb extends pa{apply(t){return Cr(t)}}Hb.className="NonNeg";X(Hb);class qb extends pa{constructor(t){super(),this.defaultMinValue=0,this.defaultMaxValue=1,this.defaultRate=1,this.defaultAxis=0,this.minValue=t.minValue!=null?t.minValue:this.defaultMinValue,this.maxValue=t.maxValue!=null?t.maxValue:this.defaultMaxValue,this.rate=t.rate!=null?t.rate:this.defaultRate,this.axis=t.axis!=null?t.axis:this.defaultAxis}apply(t){return V(()=>{const e=sp(t,this.axis),s=J(_(this.rate,tn(e,this.minValue,this.maxValue)),_(1-this.rate,e));return _(t,ut(s,J(oe(),e)))})}getConfig(){return{minValue:this.minValue,maxValue:this.maxValue,rate:this.rate,axis:this.axis}}}qb.className="MinMaxNorm";X(qb);const Om={maxNorm:"MaxNorm",minMaxNorm:"MinMaxNorm",nonNeg:"NonNeg",unitNorm:"UnitNorm"};function ae(n){return qf(n)}function Mm(n,t={}){return ca(n,an.getMap().classNameMap,t,"constraint")}function le(n){if(n==null)return null;if(typeof n=="string"){const e={className:n in Om?Om[n]:n,config:{}};return Mm(e)}else return n instanceof pa?n:Mm(n)}async function Gs(n){if(n==null)return;const t=[],e=[],s=[];for(const r in n){const o=n[r];if(typeof o!="number"){const i=o;t.push(i.data()),e.push(r),s.push(i)}}if(t.length>0){const r=await Promise.all(t);for(let o=0;o<r.length;++o)n[e[o]]=r[o][0];yt(s)}}function jb(n){if(n!=null)for(const t in n){const e=n[t];typeof e!="number"&&e.dispose()}}var Lm;(function(n){n[n.SILENT=0]="SILENT",n[n.VERBOSE=1]="VERBOSE"})(Lm||(Lm={}));const MA=125;class Ko{constructor(){this.validationData=null}setParams(t){this.params=t}async onEpochBegin(t,e){}async onEpochEnd(t,e){}async onBatchBegin(t,e){}async onBatchEnd(t,e){}async onTrainBegin(t){}async onTrainEnd(t){}setModel(t){}}class LA{constructor(t,e=10){t==null&&(t=[]),this.callbacks=t,this.queueLength=e}append(t){this.callbacks.push(t)}setParams(t){for(const e of this.callbacks)e.setParams(t)}setModel(t){for(const e of this.callbacks)e.setModel(t)}async onEpochBegin(t,e){e==null&&(e={});for(const s of this.callbacks)await s.onEpochBegin(t,e)}async onEpochEnd(t,e){e==null&&(e={});for(const s of this.callbacks)await s.onEpochEnd(t,e)}async onBatchBegin(t,e){e==null&&(e={});for(const s of this.callbacks)await s.onBatchBegin(t,e)}async onBatchEnd(t,e){e==null&&(e={});for(const s of this.callbacks)await s.onBatchEnd(t,e)}async onTrainBegin(t){t==null&&(t={});for(const e of this.callbacks)await e.onTrainBegin(t)}async onTrainEnd(t){t==null&&(t={});for(const e of this.callbacks)await e.onTrainEnd(t)}}class PA extends Ko{constructor(){super()}async onEpochBegin(t){this.seen=0,this.totals={}}async onBatchEnd(t,e){e==null&&(e={});const s=e.size==null?0:e.size;this.seen+=s;for(const r in e){const o=e[r];if(typeof o=="number")this.totals.hasOwnProperty(r)||(this.totals[r]=0),this.totals[r]=this.totals[r]+o*s;else{let i;r in this.totals?i=this.totals[r]:this.totals[r]=0;const a=V(()=>J(this.totals[r],_(o,s)));this.totals[r]=a,i?.dispose()}}}async onEpochEnd(t,e){if(e!=null)for(const s of this.params.metrics)this.totals[s]!=null&&(typeof this.totals[s]=="number"?e[s]=this.totals[s]/this.seen:V(()=>{const r=_(ut(1,this.seen),this.totals[s]);e[s]=r,this.totals[s].dispose(),zn(e[s])}))}}class zA extends Ko{async onTrainBegin(t){this.epoch=[],this.history={}}async onEpochEnd(t,e){e==null&&(e={}),this.epoch.push(t);for(const s in e)this.history[s]==null&&(this.history[s]=[]),this.history[s].push(e[s])}async syncData(){const t=[],e=[],s=[];for(const o in this.history){const i=this.history[o];for(let a=0;a<i.length;++a)if(typeof i[a]!="number"){const l=i[a];t.push(l.data()),e.push(o),s.push(a)}}const r=await Promise.all(t);for(let o=0;o<r.length;++o)this.history[e[o]][s[o]].dispose(),this.history[e[o]][s[o]]=r[o][0]}}class BA extends Ko{constructor(t,e){if(super(),this.currentEpoch=0,this.nowFunc=t.nowFunc,this.nextFrameFunc=t.nextFrameFunc||J0,this.yieldEvery=e||"auto",this.yieldEvery==="auto"&&(this.yieldEvery=MA),this.yieldEvery==="never"&&t.onYield!=null)throw new Error("yieldEvery is `never` but you provided an `onYield` callback. Either change `yieldEvery` or remove the callback");sh(this.yieldEvery)&&(this.maybeWait=QR(this.maybeWait.bind(this),this.yieldEvery,this.nowFunc)),this.trainBegin=t.onTrainBegin,this.trainEnd=t.onTrainEnd,this.epochBegin=t.onEpochBegin,this.epochEnd=t.onEpochEnd,this.batchBegin=t.onBatchBegin,this.batchEnd=t.onBatchEnd,this.yield=t.onYield}async maybeWait(t,e,s){const r=[];this.yield!=null&&(await Gs(s),r.push(this.yield(t,e,s))),r.push(this.nextFrameFunc()),await Promise.all(r)}async onEpochBegin(t,e){this.currentEpoch=t,this.epochBegin!=null&&(await Gs(e),await this.epochBegin(t,e))}async onEpochEnd(t,e){const s=[];this.epochEnd!=null&&(await Gs(e),s.push(this.epochEnd(t,e))),this.yieldEvery==="epoch"&&s.push(this.nextFrameFunc()),await Promise.all(s)}async onBatchBegin(t,e){this.batchBegin!=null&&(await Gs(e),await this.batchBegin(t,e))}async onBatchEnd(t,e){const s=[];this.batchEnd!=null&&(await Gs(e),s.push(this.batchEnd(t,e))),this.yieldEvery==="batch"?s.push(this.nextFrameFunc()):sh(this.yieldEvery)&&s.push(this.maybeWait(this.currentEpoch,t,e)),await Promise.all(s)}async onTrainBegin(t){this.trainBegin!=null&&(await Gs(t),await this.trainBegin(t))}async onTrainEnd(t){this.trainEnd!=null&&(await Gs(t),await this.trainEnd(t))}}function Kb(n,t){return n==null&&(n={}),n instanceof Ko?[n]:Array.isArray(n)&&n[0]instanceof Ko?n:At(n).map(s=>new BA(s,t))}class on{constructor(){}static registerCallbackConstructor(t,e){S(t>=0&&Number.isInteger(t),()=>`Verbosity level is expected to be an integer >= 0, but got ${t}`),on.checkForDuplicate(e),on.constructors[t]==null&&(on.constructors[t]=[]),on.constructors[t].push(e)}static checkForDuplicate(t){for(const e in on.constructors)on.constructors[+e].forEach(r=>{if(r===t)throw new D("Duplicate callback constructor.")})}static clear(){on.constructors={}}static createCallbacks(t){const e=[];for(const s in on.constructors){const r=+s;t>=r&&e.push(...on.constructors[r])}return e.map(s=>new s)}}on.constructors={};function Xb(n,t,e,s,r,o,i,a,l){const c=new zA,u=[new PA,...on.createCallbacks(t)];n!=null&&u.push(...n),u.push(c);const h=new LA(u);return h.setParams({epochs:e,initialEpoch:s,samples:r,steps:o,batchSize:i,verbose:t,doValidation:a,metrics:l}),{callbackList:h,history:c}}function Un(n,t={},e=!1){return ca(n,an.getMap().classNameMap,t,"layer",e)}function $l(n,t){return V(()=>{n.dtype!=="float32"&&(n=st(n,"float32"));const e=ct(ha(n),t,!0),s=tu(e.shape,oe()),r=ke(Ls(e,s));return ut(n,r)})}function hu(n,t){return V(()=>ee(ha(ft(t,n)),-1))}function rp(n,t){return V(()=>ee(Te(ft(t,n)),-1))}function op(n,t){return V(()=>{const e=ft(n,t),s=tn(Te(n),oe(),Number.MAX_VALUE),r=Te(ut(e,s));return _(100,ee(r,-1))})}function VA(n,t){return V(()=>{const e=tn(t,oe(),Number.MAX_VALUE),s=jn(J(1,e)),r=tn(n,oe(),Number.MAX_VALUE),o=jn(J(1,r));return ee(ha(ft(s,o)),-1)})}function WA(n,t){return V(()=>{const e=Ls(0,ft(1,_(n,t)));return ee(ha(e),-1)})}function UA(n,t){return V(()=>{const e=Ls(0,ft(1,_(n,t)));return ee(e,-1)})}function GA(n,t){return V(()=>{const e=ct(_(n,t),-1),s=kn(_(ft(1,n),t),-1);return Ls(0,J(1,ft(s,e)))})}function HA(n,t){return V(()=>{const e=Math.log(2),s=ft(t,n),r=ft(J(s,na(_(-2,s))),e);return ee(r,-1)})}function Xo(n,t,e=!1){return V(()=>{if(e)t=lf(t);else{const s=ct(t,t.shape.length-1,!0);t=ut(t,s)}return t=tn(t,oe(),1-oe()),Yt(ct(_(st(n,"float32"),jn(t)),t.shape.length-1))})}function kl(n,t,e=!1){return V(()=>{const s=st(su(hA(n)),"int32");t=tn(t,oe(),1-oe());const r=t.shape,o=L(y0(s,r[r.length-1]),r);return Xo(o,t,e)})}function qA(n,t){if(!Et(n.shape,t.shape))throw new D(`logits and labels must have the same shape, but got shapes ${JSON.stringify(n.shape)} and ${JSON.stringify(t.shape)}`);return V(()=>{const e=Cr(t),s=Yt(Te(t));return J(ft(e,_(t,n)),m0(qn(s)))})}function du(n,t){return V(()=>{let e;return e=tn(t,oe(),1-oe()),e=jn(ut(e,ft(1,e))),ee(qA(n,e),-1)})}function jA(n,t){return V(()=>{const e=tn(n,oe(),1),s=tn(t,oe(),1);return ct(_(n,jn(ut(e,s))),-1)})}function KA(n,t){return V(()=>{const e=jn(J(oe(),t));return ee(ft(t,_(n,e)),-1)})}function Yb(n,t){return V(()=>{const e=$l(n,-1),s=$l(t,-1),r=_(e,s);return Yt(ct(r,-1))})}const Il={meanSquaredError:hu,meanAbsoluteError:rp,meanAbsolutePercentageError:op,meanSquaredLogarithmicError:VA,squaredHinge:WA,hinge:UA,categoricalHinge:GA,logcosh:HA,categoricalCrossentropy:Xo,sparseCategoricalCrossentropy:kl,binaryCrossentropy:du,kullbackLeiblerDivergence:jA,poisson:KA,cosineProximity:Yb};function Wu(n){if(typeof n=="string"){if(n in Il)return Il[n];let t=`Unknown loss ${n}`;throw n.toLowerCase().includes("softmaxcrossentropy")&&(t=`Unknown loss ${n}. Use "categoricalCrossentropy" as the string name for tf.losses.softmaxCrossEntropy`),new D(t)}else return n}function Zb(n,t){return V(()=>{const e=_(.5,hn(t)),s=Vn(en(t,e),n.dtype);return ee(Hn(n,s),-1)})}function Jb(n,t){return V(()=>Vn(Hn(Uo(n,-1),Uo(t,-1)),"float32"))}function XA(n,t){return V(()=>st(ct(os(Hn(n,1),Hn(t,1))),"float32"))}function YA(n,t){return V(()=>st(ct(os(Hn(n,0),Hn(t,1))),"float32"))}function ZA(n,t){return V(()=>{const e=XA(n,t),s=YA(n,t),r=J(e,s);return st(Ae(en(r,0),ut(e,r),0),"float32")})}function JA(n,t){return du(n,t)}function QA(n,t){return n.rank===t.rank&&(n=ra(n,[n.rank-1])),t=Uo(t,-1),t.dtype!==n.dtype&&(t=st(t,n.dtype)),st(Hn(n,t),"float32")}const tD=hu,eD=hu,nD=rp,sD=rp,rD=op,oD=op,Qb=Xo,iD=Yb,ty=kl,Sl={binaryAccuracy:Zb,categoricalAccuracy:Jb,precision:ZA,categoricalCrossentropy:Qb,sparseCategoricalCrossentropy:ty,mse:tD,MSE:eD,mae:nD,MAE:sD,mape:rD,MAPE:oD,cosine:iD};function aD(n){if(typeof n=="string"&&n in Sl)return Sl[n];if(typeof n!="string"&&n!=null)return n;throw new D(`Unknown metric ${n}`)}function Fa(n){if(On(n!==null,`Unknown LossOrMetricFn ${n}`),typeof n=="string")return n;{let t;for(const e of Object.keys(Il))if(Il[e]===n){t=e;break}if(t!==void 0)return t;for(const e of Object.keys(Sl))if(Sl[e]===n){t=e;break}return t!==void 0?t:n.name}}function lD(n){const t={Adagrad:()=>Rr.adagrad(.01),Adadelta:()=>Rr.adadelta(1,.95,oe()),Adam:()=>Rr.adam(.001,.9,.999,oe()),Adamax:()=>Rr.adamax(.002,.9,.999,oe(),0),RMSProp:()=>Rr.rmsprop(.001,.9,0,oe()),SGD:()=>Rr.sgd(.01)};if(t.adagrad=t.Adagrad,t.adadelta=t.Adadelta,t.adam=t.Adam,t.adamax=t.Adamax,t.rmsprop=t.RMSProp,t.sgd=t.SGD,n in t)return t[n]();throw new D(`Unknown Optimizer ${n}`)}const Pm=1*1024*1024;function zm(n,t,e=!1){if(n==null||typeof n!="object"||Object.getPrototypeOf(n)!==Object.prototype||!Th(n))throw new Error("User-defined metadata is expected to be a JSON object, but is not.");if(e){const s=JSON.stringify(n);s.length>Pm&&console.warn(`User-defined metadata of model "${t}" is too large in size (length=${s.length} when serialized). It is not recommended to store such large objects in user-defined metadata. Please make sure its serialized length is <= ${Pm}.`)}}function Th(n){if(n===null)return!0;if(typeof n=="object")if(Object.getPrototypeOf(n)===Object.prototype){const t=Object.keys(n);for(const e of t)if(typeof e!="string"||!Th(n[e]))return!1;return!0}else if(Array.isArray(n)){for(const t of n)if(!Th(t))return!1;return!0}else return!1;else{const t=typeof n;return t==="string"||t==="number"||t==="boolean"}}function cD(n,t,e,s=console.log){const r=hD(n),o=["Layer (type)","Input Shape","Output shape","Param #"];r?(t=t||90,e=e||[.32,.61,.89,1]):(t=t||115,e=e||[.24,.48,.7,.8,1]),e[e.length-1]<=1&&(e=e.map(u=>Math.floor(t*u)));let i;if(!r){o.push("Receives inputs"),i=[];for(const u in n.nodesByDepth)i.push(...n.nodesByDepth[u])}s("_".repeat(t)),Nl(o,e,s),s("=".repeat(t));const a=n.layers;for(let u=0;u<a.length;++u)r?dD(a[u],e,s):fD(a[u],e,i,s),s((u===a.length-1?"=":"_").repeat(t));n.checkTrainableWeightsConsistency();const l=uD(n),c=wl(n.nonTrainableWeights);s(`Total params: ${l+c}`),s(`Trainable params: ${l}`),s(`Non-trainable params: ${c}`),s("_".repeat(t))}function uD(n){let t;return n.collectedTrainableWeights!=null?t=wl(n.collectedTrainableWeights):t=wl(n.trainableWeights),t}function hD(n){let t=!0;const e=[],s=[];for(const r in n.nodesByDepth)e.push(n.nodesByDepth[r]);for(const r of e){if(r.length>1||r.length===1&&r[0].inboundLayers.length>1){t=!1;break}s.push(...r)}if(t)for(const r of n.layers){let o=!1;for(const i of r.inboundNodes)if(s.indexOf(i)!==-1)if(o){t=!1;break}else o=!0;if(!t)break}return t}function Nl(n,t,e=console.log){let s="";for(let r=0;r<n.length;++r)r>0&&(s=s.slice(0,s.length-1)+" "),s+=n[r],s=s.slice(0,t[r]),s+=" ".repeat(t[r]-s.length);e(s)}function dD(n,t,e){let s,r;try{r=n.inboundNodes.map(l=>JSON.stringify(l.inputShapes)).join(",")}catch{r="multiple"}try{s=JSON.stringify(n.outputShape)}catch{s="multiple"}const o=n.name,i=n.getClassName(),a=[`${o} (${i})`,r,s,n.countParams().toString()];Nl(a,t,e)}function fD(n,t,e,s){let r,o;try{o=n.inboundNodes.map(h=>JSON.stringify(h.inputShapes)).join(",")}catch{o="multiple"}try{r=JSON.stringify(n.outputShape)}catch{r="multiple"}const i=[];for(const h of n.inboundNodes)if(!(e!=null&&e.length>0&&e.indexOf(h)===-1))for(let d=0;d<h.inboundLayers.length;++d){const f=h.inboundLayers[d].name,p=h.nodeIndices[d],m=h.tensorIndices[d];i.push(`${f}[${p}][${m}]`)}const a=n.name,l=n.getClassName(),c=i.length===0?"":i[0],u=[`${a} (${l})`,o,r,n.countParams().toString(),c];Nl(u,t,s);for(let h=1;h<i.length;++h)Nl(["","","","",i[h]],t,s)}function ey(n,t,e){return(n==="inboundNodes"||n==="outputLayers"||n==="inputLayers")&&t===0&&typeof e=="string"}function Tl(n,t){if(n===null)return null;if(typeof n=="string")return Ks(n);if(typeof n=="number"||typeof n=="boolean")return n;if(n instanceof Array){const e=[],s=n.length;for(let r=0;r<s;++r){const o=n[r];ey(t,r,o)?e.push(o):e.push(Tl(o,t))}return e}else{const e={};for(const s of Object.keys(n)){const r=n[s];if(s==="name"&&typeof r=="string")e[s]=r;else{const o=Ks(s);e[o]=Tl(r,o)}}return e}}function Eh(n,t){if(n==null)return null;if(typeof n=="string")return ns(n);if(typeof n=="number"||typeof n=="boolean")return n;if(n instanceof Array){const e=[],s=n.length;for(let r=0;r<s;++r){const o=n[r];ey(t,r,o)?e.push(o):e.push(Eh(o,t))}return e}else{const e={};for(const s of Object.keys(n)){const r=n[s],o=ns(s);(s==="name"||s==="className")&&typeof r=="string"?e[o]=r:e[o]=Eh(r,s)}return e}}const ny="4.22.0";const pD=n=>{const t=Object.keys(n);if(t.length===0)return!1;const e=t[0].split("/");return!isNaN(parseInt(e[e.length-1],10))};class xn extends Ct{constructor(t){if(super({}),this.containerNodes=new Set,this.name=t.name,this.name==null){const b=this.getClassName().toLowerCase();this.name=lu(b)}if(this.supportsMasking=!1,this.trainable_=!0,Array.isArray(t.inputs)?this.inputs=t.inputs.slice():this.inputs=[t.inputs],Array.isArray(t.outputs)?this.outputs=t.outputs.slice():this.outputs=[t.outputs],ks(this.inputs).length!==this.inputs.length)throw new D(`The list of inputs passed to the model is redundant. All inputs should only appear once. Found: ${this.inputs.map(b=>b.name)}`);ks(this.outputs).length!==this.outputs.length&&console.warn(`The list of outputs passed to the model is redundant. All outputs should only appear once. Found: ${this.outputs.map(b=>b.name)}`),this.inputLayers=[],this.inputLayersNodeIndices=[],this.inputLayersTensorIndices=[],this.outputLayers=[],this.outputLayersNodeIndices=[],this.outputLayersTensorIndices=[],this.layers=[],this.internalContainerRefs=[];for(const b of this.outputs){const w=b.sourceLayer,y=b.nodeIndex,v=b.tensorIndex;this.outputLayers.push(w),this.outputLayersNodeIndices.push(y),this.outputLayersTensorIndices.push(v)}for(const b of this.inputs){const w=b.sourceLayer,y=b.nodeIndex,v=b.tensorIndex;On(y===0,"input layer has >1 nodes"),On(v===0,"input layer has >1 tensors"),this.inputLayers.push(w),this.inputLayersNodeIndices.push(y),this.inputLayersTensorIndices.push(v)}this.inputNames=[],this.outputNames=[],this.feedInputShapes=[],this.feedInputNames=[],this.feedOutputNames=[];for(let b=0;b<this.inputLayers.length;b++){const w=this.inputLayers[b];if(!(w instanceof fa))throw new TypeError(`Input layers to a LayersModel must be InputLayer objects. Received inputs: ${t.inputs}. Input ${b} (0-based) originates from layer type ${w.getClassName()}.`);this.inputNames.push(w.name),this.feedInputShapes.push(w.batchInputShape),this.feedInputNames.push(w.name)}for(const b of this.outputLayers)this.outputNames.push(b.name);this.internalInputShapes=this.inputs.map(b=>b.shape),this.internalOutputShapes=this.outputs.map(b=>b.shape);const e={},s={},r={},o={},i={},a=[],l=(b,w,y,v,$,N)=>{(v==null||$==null||N==null)&&(v=b.sourceLayer,$=b.nodeIndex,N=b.tensorIndex);const T=v.inboundNodes[$];if(y.indexOf(T)!==-1)throw new ln(`The tensor ${b.name} at layer "${v.name}" is part of a cycle.`);if(w.indexOf(T)!==-1)return;this.containerNodes.add(xn.nodeKey(v,$)),v.id in i||(i[v.id]=Object.keys(i).length),y.indexOf(T)===-1&&y.push(T);const k=T.inboundLayers.length;for(let I=0;I<k;I++){const C=T.inputTensors[I],R=T.inboundLayers[I],A=T.nodeIndices[I],O=T.tensorIndices[I];l(C,w,y,R,A,O)}for(w.push(T);y.indexOf(T)>=0;)y.splice(y.indexOf(T),1);a.push(T)},c=[],u=[];for(const b of this.outputs)l(b,c,u);const h=a.slice().reverse();for(const b of h){s[b.id]=b,b.id in e||(e[b.id]=0);let w=e[b.id];const y=r[b.outboundLayer.id]==null?0:r[b.outboundLayer.id];w=Math.max(w,y),r[b.outboundLayer.id]=w,o[b.outboundLayer.id]=b.outboundLayer,e[b.id]=w;for(let v=0;v<b.inboundLayers.length;v++){const $=b.inboundLayers[v],N=b.nodeIndices[v],T=$.inboundNodes[N],k=e[T.id]==null?0:e[T.id];e[T.id]=Math.max(w+1,k),s[T.id]=T}}const d={};for(const b in e){const w=e[b];w in d||(d[w]=[]),d[w].push(s[b])}const f={};for(const b in r){const w=r[b];w in f||(f[w]=[]),f[w].push(o[b])}let p=Object.keys(f).map(b=>parseInt(b,10)).sort(Aa);this.layers=[];for(const b of p){const w=f[b];w.sort((y,v)=>{const $=i[y.id],N=i[v.id];return $<N?-1:$>N?1:0});for(const y of w)y instanceof xn&&this.internalContainerRefs.push(y),this.layers.push(y)}this.layersByDepth=f,p=Object.keys(d).map(b=>parseInt(b,10)).sort(Aa);const m=this.inputs.slice(),g=[];for(const b of p)for(const w of d[b]){const y=w.outboundLayer;if(y!=null){for(const v of w.inputTensors)if(m.indexOf(v)===-1)throw new ln(`Graph disconnected: cannot obtain value for tensor ${v} at layer "${y.name}". The following previous layers were accessed without issue: ${g}`);for(const v of w.outputTensors)m.push(v);g.push(y.name)}}this.nodesByDepth=d;const x=this.layers.map(b=>b.name);for(const b of x){const w=x.filter(y=>y===b).length;if(w!==1)throw new ln(`The name "${b}" is used ${w} times in the model. All layer names should be unique. Layer names: `+JSON.stringify(x))}this.outboundNodes=[],this.inboundNodes=[],new uu({outboundLayer:this,inboundLayers:[],nodeIndices:[],tensorIndices:[],inputTensors:this.inputs,outputTensors:this.outputs,inputMasks:this.inputs.map(b=>null),outputMasks:this.outputs.map(b=>null),inputShapes:this.inputs.map(b=>b.shape),outputShapes:this.outputs.map(b=>b.shape)}),this.built=!0,this._refCount=1}assertNotDisposed(){if(this._refCount===0)throw new Error(`Container '${this.name}' is already disposed.`)}dispose(){this.assertNotDisposed();const t={refCountAfterDispose:null,numDisposedVariables:0};if(--this._refCount===0){for(const e of this.layers)t.numDisposedVariables+=e.dispose().numDisposedVariables;for(const e of this.internalContainerRefs)t.numDisposedVariables+=e.dispose().numDisposedVariables}return t.refCountAfterDispose=this._refCount,t}get trainable(){return this.trainable_}set trainable(t){this.layers.forEach(e=>{e._trainableWeights.forEach(s=>s.trainable=t)}),this.trainable_=t}get trainableWeights(){if(this._trainableWeights.length>0)throw new D("Container instance unexpectedly contains _trainableWeights.The trainable weights of a Container are a union of the trainable weights of its consituent Layers. Its own _trainableWeights must remain an empty Array.");if(!this.trainable)return[];let t=[];for(const e of this.layers)t=t.concat(e.trainableWeights);return t}get nonTrainableWeights(){const t=[];for(const e of this.layers)t.push(...e.nonTrainableWeights);if(!this.trainable){const e=[];for(const s of this.layers)e.push(...s.trainableWeights);return e.concat(t)}return t}get weights(){return this.trainableWeights.concat(this.nonTrainableWeights)}loadWeights(t,e=!0){const s={};let r=0;const o=pD(t);o&&this.parseWeights(t);for(const a of this.layers)for(const[l,c]of a.weights.entries()){const u=o?`${c.name.split("/").slice(0,-1).join("/")+"/"}${l}`:c.originalName;if(s[u]!=null)throw new D(`Duplicate weight name: ${u}`);s[u]=c,r++}const i=[];for(const a in t){let l=a;if(s[a]==null){const c=a.split("/");l=c.slice(0,-2).concat([c[c.length-1]]).join("/")}if(s[l]!=null)i.push([s[l],t[a]]);else if(e)throw new D(`Provided weight data has no target variable: ${a}`);delete s[l]}if(e){const a=[];for(const l in s)a.push(l);if(a.length>0)throw new D(`${a.length} of ${r} weights are not set: ${a}`)}np(i)}parseWeights(t){for(const e in Object.keys(t)){const s=e.split("/"),r=["vars","layer_checkpoint_dependencies"],o=s.map(i=>i.startsWith("_")?i.slice(1):i).filter(i=>!r.includes(i)).join("/");o!==e&&(t[o]=t[e],delete t[e])}}updatedConfig(){const t=this.getConfig(),e={};return e.className=this.getClassName(),e.config=t,e.kerasVersion=`tfjs-layers ${ny}`,e.backend="TensorFlow.js",e}toJSON(t,e=!0){const s=Eh(this.updatedConfig());return e?JSON.stringify(s):s}call(t,e){return V(()=>{t=At(t);const s=new ws;for(let r=0;r<this.inputs.length;++r)s.add(this.inputs[r],t[r]);return _o(this.outputs,s,e)})}computeMask(t,e){return V(()=>{t=At(t);let s;return e==null?s=pr(null,t.length):s=At(e),this.runInternalGraph(t,s)[1]})}computeOutputShape(t){const e=yl(t);if(e.length!==this.inputLayers.length)throw new D(`Invalid inputShape argument ${t}: model has ${this.inputLayers.length} tensor inputs.`);const s={};for(let a=0;a<e.length;a++){const l=this.inputLayers[a],c=e[a],u=l.name+"_0_0";s[u]=c}const r=Object.keys(this.nodesByDepth).map(a=>parseInt(a,10)).sort(Aa);if(r.length>1)for(const a of r){const l=this.nodesByDepth[a];for(const c of l){const u=c.outboundLayer;if(this.inputLayers.map(m=>m.id).indexOf(u.id)!==-1)continue;const h=[];for(let m=0;m<c.inboundLayers.length;m++){const g=c.inboundLayers[m],x=c.nodeIndices[m],b=c.tensorIndices[m],w=`${g.name}_${x}_${b}`,y=s[w];h.push(y)}const d=u.computeOutputShape(Me(h)),f=yl(d),p=u.inboundNodes.indexOf(c);for(let m=0;m<f.length;m++){const g=`${u.name}_${p}_${m}`;s[g]=f[m]}}}const o=[],i=[];for(let a=0;a<this.outputLayers.length;a++){const l=this.outputLayers[a],c=this.outputLayersNodeIndices[a],u=this.outputLayersTensorIndices[a],h=`${l.name}_${c}_${u}`;i.push(h)}for(let a=0;a<i.length;a++){const l=i[a];On(l in s),o.push(s[l])}return Me(o)}runInternalGraph(t,e){e==null&&(e=pr(null,t.length));const s={};for(let l=0;l<this.inputs.length;++l){const c=this.inputs[l],u=t[l],h=e[l];s[c.id]=[u,h]}const r=Object.keys(this.nodesByDepth).map(l=>parseInt(l,10)).sort(Aa);for(const l of r){const c=this.nodesByDepth[l];for(const u of c){const h=u.outboundLayer,d=u.inputTensors,f=u.outputTensors,p=new Array;for(const m of d)m.id in s&&p.push(s[m.id]);if(p.length===d.length){let m={},g,x,b,w;if(u.callArgs!=null&&(m=u.callArgs),p.length===1){const[y,v]=p[0];m.mask==null&&(m.mask=v),b=At(h.call(y,m)),w=At(h.computeMask(y,v)),g=[y],x=[v]}else g=p.map(y=>y[0]),x=p.map(y=>y[1]),m.mask==null&&(m.mask=x),b=At(h.call(g,m)),w=At(h.computeMask(g,x));if(h.activityRegularizer)throw new xt("LayersModel invocation with concrete Tensor value(s) in the presence of activity regularizer(s) is not supported yet.");for(let y=0;y<f.length;++y){const v=f[y],$=b[y],N=w[y];s[v.id]=[$,N]}}}}const o=[],i=[],a=[];for(const l of this.outputs){On(l.id in s,`Could not compute output ${l.name} : ${l.id}`);const[c,u]=s[l.id];a.push(c.shape),o.push(c),i.push(u)}return[o,i,a]}buildNodeConversionMap(t){const e={};let s;for(const r of this.layers){s=r instanceof xn?1:0;for(let o=0;o<r.inboundNodes.length;o++){const i=xn.nodeKey(r,o);this.containerNodes.has(i)&&(e[i]=s,s+=1)}}return e}getLayer(t,e){if(e!=null)return this.findLayer(e);if(t==null)throw new D("Provide either a layer name or layer index");if(typeof t=="number")return this.findLayer(t);for(const s of this.layers)if(s.name===t)return s;throw new D(`No such layer: ${t}`)}findLayer(t){if(this.layers.length<=t)throw new D(`Was asked to retrieve layer at index ${t}, but model only has ${this.layers.length} layer(s).`);return this.layers[t]}calculateLosses(){return V(()=>{const t=[];for(const e of this.layers)for(let s=0;s<e.inboundNodes.length;++s){const r=xn.nodeKey(e,s);this.containerNodes.has(r)&&t.push(...e.calculateLosses())}return t})}getConfig(){const t={name:this.name},e=this.buildNodeConversionMap(this.layers),s=[];for(const i of this.layers){const a=i.getClassName(),l=i.getConfig(),c=[];for(let h=0;h<i.inboundNodes.length;h++){const d=i.inboundNodes[h],f=xn.nodeKey(i,h);let p={};if(this.containerNodes.has(f)){if(d.callArgs)try{JSON.stringify(d.callArgs),p=d.callArgs}catch{console.warn(`Layer ${i.name} was passed non-serializable keyword arguments: ${d.callArgs}. They will not be included in the serialized model (and thus will be missing at deserialization time).`),p={}}if(d.inboundLayers.length>0){const m=[];for(let g=0;g<d.inboundLayers.length;g++){const x=d.inboundLayers[g],b=d.nodeIndices[g],w=d.tensorIndices[g],y=xn.nodeKey(x,b);let v=e[y];v==null&&(v=0),m.push([x.name,v,w,p])}c.push(m)}}}const u={};u.name=i.name,u.className=a,u.config=l,u.inboundNodes=c,s.push(u)}t.layers=s;const r=[];for(let i=0;i<this.inputLayers.length;i++){const a=this.inputLayers[i],l=this.inputLayersNodeIndices[i],c=xn.nodeKey(a,l);if(!this.containerNodes.has(c))continue;let u=e[c];u==null&&(u=0);const h=this.inputLayersTensorIndices[i];r.push([a.name,u,h])}t.inputLayers=r;const o=[];for(let i=0;i<this.outputLayers.length;i++){const a=this.outputLayers[i],l=this.outputLayersNodeIndices[i],c=xn.nodeKey(a,l);if(!this.containerNodes.has(c))continue;let u=e[c];u==null&&(u=0);const h=this.outputLayersTensorIndices[i];o.push([a.name,u,h])}return t.outputLayers=o,t}static fromConfig(t,e,s={},r=!1){const o={},i={};function a(g,x){g.name in i?i[g.name].push(x):i[g.name]=[x]}function l(g,x){const b=[];let w;for(const y of x){const v=y[0],$=y[1],N=y[2];if(w=y[3]==null?{}:y[3],!(v in o)){a(g,x);return}const T=o[v];if(T.inboundNodes.length<=$){a(g,x);return}const k=T.inboundNodes[$];b.push(k.outputTensors[N])}b.length>0&&g.apply(Me(b),w)}function c(g){const x=g.name,b=Un(g,e.customObjects!=null?e.customObjects:{});b.setFastWeightInitDuringBuild(r),o[x]=b,g.inboundNodes.forEach(y=>{if(!(y instanceof Array))throw new D(`Corrupted configuration, expected array for nodeData: ${y}`);a(b,y)})}const u=e.name,h=e.layers;for(const g of h)c(g);for(;!JR(i);)for(const g of h){const x=o[g.name];if(x.name in i){const b=i[x.name];delete i[x.name];for(const w of b)l(x,w)}}const d=[],f=[],p=e.inputLayers;for(const g of p){const x=g[0],b=g[1],w=g[2];On(x in o);const v=o[x].inboundNodes[b].outputTensors;d.push(v[w])}const m=e.outputLayers;for(const g of m){const x=g[0],b=g[1],w=g[2];On(x in o);const v=o[x].inboundNodes[b].outputTensors;f.push(v[w])}return new t({inputs:d,outputs:f,name:u})}get stateful(){if(this._stateful)throw new D("Container instance unexpectedly has _stateful = true. The statefulness of a Container is determined by the Layers it contains. Its _stateful property must remain the default false.");for(const t of this.layers)if(t.stateful)return!0;return!1}resetStates(){V(()=>{this.layers.forEach(t=>{t.stateful&&t.resetStates()})})}}function mD(n,t,e){const s=t.length;if(n==null||Array.isArray(n)&&n.length===0)return t.map(r=>null);if(s===1)return Array.isArray(n)&&n.length===1?n:typeof n=="object"&&t[0]in n?[n[t[0]]]:[n];if(Array.isArray(n)){if(n.length!==s)throw new Error(`Provided ${e} is an array of ${n.length} element(s), but the model has ${s} outputs. Make sure a set of weights is provided for each model output.`);return n}else if(typeof n=="object"&&Object.keys(n).length>0&&typeof n[Object.keys(n)[0]]=="object"){const r=[];return t.forEach(o=>{o in n?r.push(n[o]):r.push(null)}),r}else throw new Error(`The model has multiple (${s}) outputs, so ${e} must be either an array with ${s} elements or an object with ${t} keys. Provided ${e} not understood: ${JSON.stringify(n)}`)}function sy(n,t){return mD(n,t,"classWeight")}async function ry(n,t,e,s){if(e!=null){const r=V(()=>{if(n.shape.length===1)return Qs(n);if(n.shape.length===2){if(n.shape[1]>1)return Uo(n,1);if(n.shape[1]===1)return L(n,[n.shape[0]]);throw new Error(`Encountered unexpected last-dimension size (${n.shape[1]}) during handling of class weights. The size is expected to be >= 1.`)}else throw new Error(`Unexpected rank of target (y) tensor (${n.rank}) during handling of class weights. The rank is expected to be 1 or 2.`)}),o=Array.from(await r.data());yt(r);const i=[];return o.forEach(a=>{if(e[a]==null)throw new Error(`classWeight must contain all classes in the training data. The class ${a} exists in the data but not in classWeight`);i.push(e[a])}),Ue(i,"float32")}else return null}function gD(n,t){return _(n,t)}const xD=32;function oy(n,t){let e,s;const r=t;e=r.xs,s=r.ys,S(e!=null&&s!=null,()=>`A Dataset iterator for fitDataset() is expected to generate objects of the form \`{xs: xVal, ys: yVal}\`, where the two values may be \`tf.Tensor\`, an array of Tensors, or a map of string to Tensor.  The provided Dataset instead generates ${t}`);const o=Bm("input",n.inputNames,e),i=Bm("output",n.outputNames,s),a=o[0].shape[0];S(o.length===n.inputs.length,()=>`LayersModel has ${n.inputs.length} inputs, but the dataset provides ${o.length} inputs.  (Expected input keys: ${JSON.stringify(n.inputNames)})`),S(i.length===n.outputs.length,()=>`LayersModel has ${n.outputs.length} outputs, but the dataset provides ${i.length} outputs.  (Expected output keys: ${JSON.stringify(n.outputNames)})`);for(let l=0;l<o.length;l++)S(o[l].shape[0]===a,()=>`Batch size mismatch: input ${n.inputNames[l]} has ${o[l].shape[0]}; expected  ${a} based on input ${n.inputNames[0]}.`);for(let l=0;l<i.length;l++)S(i[l].shape[0]===a,()=>`Batch size mismatch: output ${n.outputNames[l]} has ${i[l].shape[0]}; expected  ${a} based on input ${n.inputNames[0]}.`);return{xs:o,ys:i}}function Bm(n,t,e){if(e instanceof re)return[e];if(Array.isArray(e))return S(e.length===t.length,()=>`Received an array of ${e.length} Tensors, but expected ${t.length} to match the ${n} keys ${t}.`),e;{const s=[];for(const r of t){if(e[r]==null)throw new D(`The feature data generated by the dataset lacks the required ${n} key '${r}'.`);s.push(e[r])}return s}}function bD(n){if(n.length===3)throw new xt("Validation with sample weights is not implemented yet.");return{xs:n[0],ys:n[1]}}async function yD(n,t,e){const s=e.batchesPerEpoch!=null;if(S(n.optimizer!=null,()=>"You must compile a model before training/testing. Use LayersModel.compile(modelCompileConfig)."),S(e!=null,()=>"For fitDataset(), the 2nd argument (config) is required, but it is not provided in this call."),S(e.epochs!=null&&e.epochs>0&&Number.isInteger(e.epochs),()=>`For fitDataset(), config.epochs is expected to be a positive integer, but got ${e.epochs}`),S(!s||e.batchesPerEpoch>0&&Number.isInteger(e.batchesPerEpoch),()=>`For fitDataset(), config.batchesPerEpoch is expected to be a positive integer if specified, but got ${e.batchesPerEpoch}`),S(e.validationSplit==null,()=>"`validationSplit` is not supported by `fitDataset()`. Use validationData instead."),n.isTraining)throw new Error("Cannot start training because another fit() call is ongoing.");n.isTraining=!0;try{const r=e.validationData!=null;let o,i;if(r)if(Vm(e.validationData))S(e.validationBatches==null||e.validationBatches>0&&Number.isInteger(e.validationBatches),()=>`For fitDataset() with dataset-based validation, config.validationBatches is expected not to be provided, or to be a positive integer, but got ${e.validationBatches}`);else{const g=bD(e.validationData);o=g.xs,i=g.ys}const a=n.makeTrainFunction(),l=n.getDedupedMetricsNames();let c;r?c=l.slice().concat(l.map(g=>"val_"+g)):c=l.slice();const u=Kb(e.callbacks,e.yieldEvery),h=e.verbose==null?1:e.verbose,{callbackList:d,history:f}=Xb(u,h,e.epochs,null,null,wD(t,e),null,r,c);d.setModel(n),n.history=f,await d.onTrainBegin(),n.stopTraining_=!1;let p=e.initialEpoch==null?0:e.initialEpoch,m=await t.iterator();for(;p<e.epochs;){const g={};await d.onEpochBegin(p);let x=0,b=0;for(s||(m=await t.iterator());!s||x<e.batchesPerEpoch;){const w=await m.next();if(s&&w.done){console.warn(`You provided \`batchesPerEpoch\` as ${e.batchesPerEpoch}, but your dataset iterator ran out of data after ${x} batches; interrupting training. Make sure that your dataset can generate at least \`batchesPerEpoch * epochs\` batches (in this case, ${e.batchesPerEpoch*e.epochs} batches). You may need to use the repeat() function when building your dataset.`);break}if(w.value!=null){const{xs:y,ys:v}=oy(n,w.value),$={};$.batch=b,$.size=y[0].shape[0],await d.onBatchBegin(b,$);const N=[];if(e.classWeight!=null){const I=sy(e.classWeight,n.outputNames);for(let C=0;C<I.length;++C)N.push(await ry(v[C],null,I[C]))}const T=y.concat(v).concat(N),k=a(T);yt(T);for(let I=0;I<l.length;++I){const C=l[I],R=k[I];$[C]=R,zn(R)}await d.onBatchEnd(b,$),jb($),b++,x++}if(s?x>=e.batchesPerEpoch:w.done){if(r){let y;Vm(e.validationData)?y=At(await n.evaluateDataset(e.validationData,{batches:e.validationBatches})):y=At(n.evaluate(o,i,{batchSize:e.validationBatchSize==null?xD:e.validationBatchSize,verbose:0}));for(let v=0;v<n.metricsNames.length;++v)g[`val_${n.metricsNames[v]}`]=y[v]}break}if(n.stopTraining_)break}if(await d.onEpochEnd(p,g),p++,n.stopTraining_)break}return await d.onTrainEnd(),await n.history.syncData(),n.history}finally{n.isTraining=!1}}function wD(n,t){let e=null;return t.batchesPerEpoch!=null?e=t.batchesPerEpoch:Number.isFinite(n.size)&&(e=n.size),e}function Vm(n){return typeof n.iterator=="function"}function vD(n){return typeof n.next=="function"}async function CD(n,t,e){e=e||{};const s=e.batches!=null,r=n.testFunction;let o=[];if(e.verbose>0)throw new xt("Verbose mode is not implemented yet.");S(!s||e.batches>0&&Number.isInteger(e.batches),()=>`Test loop expects \`batches\` to be a positive integer, but received ${JSON.stringify(e.batches)}`);const i=vD(t)?t:await t.iterator();let a=0,l=0;for(;!s||l<e.batches;){const c=await i.next();if(o=V(()=>{if(c.value){const{xs:u,ys:h}=oy(n,c.value),d=u.concat(h),f=V(()=>r(d));if(yt(d),l===0)for(let m=0;m<f.length;++m)o.push(Tt(0));const p=d[0].shape[0];for(let m=0;m<f.length;++m){const g=f[m],x=o[m];o[m]=V(()=>J(o[m],_(p,g))),l>0&&yt(x)}yt(f),a+=p,++l}return o}),c.done){s&&console.warn(`Your dataset iterator ran out of data during evaluateDataset(). Interrupting evalution. Make sure that your dataset can generate at least \`batches\` batches (in this case, ${e.batches} batches). You may need to use the repeat() function when building your dataset.`);break}}for(let c=0;c<o.length;++c){const u=o[c];o[c]=ut(o[c],a),yt(u)}return Me(o)}function Uu(n){S(n>0&&Number.isInteger(n),()=>`batchSize is required to be a positive integer, but got ${n}`)}function No(n,t,e){return n==null?[null]:Array.isArray(n)?n.map(s=>er(s,t,e-t)):er(n,t,e-t)}function Rh(n,t){return V(()=>n==null?null:Array.isArray(n)?n.map(e=>Rh(e,t)):_b(n,t.dtype==="int32"?t:st(t,"int32")))}function Gu(n,t){const e=[];let s=0,r=null;for(;s<n;)r=s+t,r>=n&&(r=n),e.push([s,r]),s=r;return e}function iy(n){const t=[];n instanceof re&&(n=[n]);for(let e=0;e<n.length;++e){const s=n[e];if(s.rank===1)t.push(ua(s,1));else{if(s.rank===0)throw new Error("Expected tensor to be at least 1D, but received a 0D tensor (scalar).");t.push(s)}}return t}function gn(n,t){if(n==null)return;const e=[];if(t instanceof re)e.push(t.id);else if(Array.isArray(t))t.forEach(r=>e.push(r.id));else if(t!=null)for(const r in t){const o=t[r];e.push(o.id)}const s=[];if(n instanceof re)e.indexOf(n.id)===-1&&s.push(n);else if(Array.isArray(n))n.forEach(r=>{e.indexOf(r.id)===-1&&s.push(r)});else if(n!=null)for(const r in n){const o=n[r];e.indexOf(o.id)===-1&&s.push(o)}s.forEach(r=>{r.isDisposed||r.dispose()})}function $D(n){return n instanceof re}function Ah(n){return Array.isArray(n)}function Wm(n){return!$D(n)&&!Ah(n)}function Um(n,t,e,s=!0,r=""){if(t==null||t.length===0){if(n!=null){let i=!1;if(Ah(n)&&n.length>0)i=!0;else if(Wm(n)){for(const a in n)if(n.hasOwnProperty(a)){i=!0;break}}else i=!0;if(i)throw new D(`Error when checking model ${r} expected no data, but got ${n}`)}return[]}if(n==null)return t.map(i=>null);let o;if(Wm(n)){n=n,o=[];for(const i of t){if(n[i]==null)throw new D(`No data provided for "${i}". Need data for each key in: ${t}`);o.push(n[i])}}else if(Ah(n)){if(n=n,n.length!==t.length)throw new D(`Error when checking model ${r}: the Array of Tensors that you are passing to your model is not the size the model expected. Expected to see ${t.length} Tensor(s), but instead got the following list of Tensor(s): ${n}`);o=n}else{if(n=n,t.length>1)throw new D(`The model ${r} expects ${t.length} Tensor(s), but only received one Tensor. Found: Tensor with shape ${n.shape}`);o=[n]}if(o=iy(o),e!=null)for(let i=0;i<t.length;++i){if(e[i]==null)continue;const a=o[i];if(a.shape.length!==e[i].length)throw new D(`Error when checking ${r}: expected ${t[i]} to have ${e[i].length} dimension(s). but got array with shape ${a.shape}`);for(let l=0;l<e[i].length;++l){if(l===0&&!s)continue;const c=a.shape[l],u=e[i][l];if(u!=null&&u>=0&&c!==u)throw new D(`${r} expected a batch of elements where each example has shape [${e[i].slice(1,e[i].length)}] (i.e.,tensor shape [*,${e[i].slice(1,e[i].length)}]) but the ${r} received an input with ${a.shape[0]} examples, each with shape [${a.shape.slice(1,a.shape.length)}] (tensor shape [${a.shape}])`)}}return o}function kD(n,t,e){const s=ks(n.map(o=>o.shape[0]));s.sort();const r=ks(t.map(o=>o.shape[0]));if(r.sort(),s.length>1)throw new D(`All input Tensors (x) should have the same number of samples. Got array shapes: ${JSON.stringify(n.map(o=>o.shape))}`);if(r.length>1)throw new D(`All target Tensors (y) should have the same number of samples. Got array shapes: ${JSON.stringify(t.map(o=>o.shape))}`);if(s.length>0&&r.length>0&&!Et(s,r))throw new D(`Input Tensors should have the same number of samples as target Tensors. Found ${s[0]} input sample(s) and ${r[0]} target sample(s).`)}function ID(n,t,e){const s=[hu,du,Xo];for(let r=0;r<n.length;++r){const o=n[r],i=t[r],a=e[r];if(i!=null){if(i===Xo&&o.shape[o.shape.length-1]===1)throw new D(`You are passing a target array of shape ${o.shape} while using a loss 'categorical_crossentropy'. 'categorical_crossentropy'expects targets to be binary matrices (1s and 0s) of shape [samples, classes].`);if(s.indexOf(i)!==-1){const l=o.shape.slice(1),c=a.slice(1);for(let u=0;u<l.length;++u){const h=l[u],d=c[u];if(d!=null&&h!==d)throw new D(`A target Tensor with shape ${o.shape} was passed for an output of shape ${a}, while using a loss function that expects targets to have the same shape as the output.`)}}}}}function Gm(n,t,e,s=!0,r=""){let o;if(Array.isArray(n)){if(n.length!==t.length)throw new D(`Error when checking model ${r}: the Array of Tensors that you are passing to your model is not the size the the model expected. Expected to see ${t.length} Tensor(s), but instead got ${n.length} Tensors(s).`);o=n}else{if(t.length>1)throw new D(`The model expects ${t.length} ${r} Tensors, but only received one Tensor. Found: array with shape ${JSON.stringify(n.shape)}.`);o=[n]}if(e!=null)for(let i=0;i<t.length;++i){if(e[i]==null)continue;const a=o[i];if(a.shape.length!==e[i].length)throw new D(`Error when checking ${r}: expected ${t[i]} to have ${e[i].length} dimension(s), but got array with shape ${JSON.stringify(a.shape)}`);for(let l=0;l<e[i].length;++l){if(l===0&&!s)continue;const c=a.shape[l],u=e[i][l];if(u!=null&&u!==c)throw new D(`Error when checking ${r}: expected ${t[i]} to have shape ${JSON.stringify(e[i])} but got array with shape ${JSON.stringify(a.shape)}.`)}}}function SD(n,t){if(n==null||Array.isArray(n)&&n.length===0)return t.map(s=>[]);let e;if(typeof n=="string"||typeof n=="function")e=[n];else if(Array.isArray(n)||typeof n=="object")e=n;else throw new TypeError(`Type of metrics argument not understood. Expected an string,function, Array, or Object, found: ${n}`);if(Array.isArray(e))return t.map(s=>e);{const s=[];for(const r of t){let o=e.hasOwnProperty(r)?e[r]:[];Array.isArray(o)||(o=[o]),s.push(o)}return s}}const ND="layers-model";class Wr extends xn{constructor(t){super(t),this.isTraining=!1}summary(t,e,s=console.log){if(!this.built)throw new D("This model has never been called, thus its weights have not been created yet. So no summary can be displayed. Build the model first (e.g., by calling it on some test data).");cD(this,t,e,s)}compile(t){if(t.loss==null&&(t.loss=[]),this.loss=t.loss,typeof t.optimizer=="string")this.optimizer_=lD(t.optimizer),this.isOptimizerOwned=!0;else{if(!(t.optimizer instanceof zs))throw new D("User-defined optimizer must be an instance of tf.Optimizer.");this.optimizer_=t.optimizer,this.isOptimizerOwned=!1}let e=[];if(!Array.isArray(t.loss)&&typeof t.loss!="string"&&typeof t.loss!="function"){t.loss=t.loss;for(const i in t.loss)if(this.outputNames.indexOf(i)===-1)throw new D(`Unknown entry in loss dictionary: "${i}". Only expected the following keys: ${this.outputNames}`);for(const i of this.outputNames)t.loss[i]==null&&console.warn(`Output "${i}" is missing from loss dictionary. We assume this was done on purpose, and we will not be expecting data to be passed to ${i} during training`),e.push(Wu(t.loss[i]))}else if(Array.isArray(t.loss)){if(t.loss.length!==this.outputs.length)throw new D(`When passing an Array as loss, it should have one entry per model output. The model has ${this.outputs.length} output(s), but you passed loss=${t.loss}.`);e=t.loss.map(a=>Wu(a))}else{const i=Wu(t.loss);this.outputs.forEach(a=>{e.push(i)})}this.lossFunctions=e,this.feedOutputNames=[],this.feedOutputShapes=[],this.feedLossFns=[];for(let i=0;i<this.outputs.length;++i){const a=this.internalOutputShapes[i],l=this.outputNames[i];this.feedOutputNames.push(l),this.feedOutputShapes.push(a),this.feedLossFns.push(this.lossFunctions[i])}const s=[];this.metrics=t.metrics,this.metricsNames=["loss"],this.metricsTensors=[],tr("loss",()=>{for(let i=0;i<this.outputs.length;++i){if(s.indexOf(i)!==-1)continue;const a=this.lossFunctions[i];this.outputs.length>1&&(this.metricsTensors.push([a,i]),this.metricsNames.push(this.outputNames[i]+"_loss"))}});const r=SD(t.metrics,this.outputNames),o=(i,a,l)=>{this.outputNames.length>1&&(a=this.outputNames[i]+"_"+a),this.metricsNames.push(a),this.metricsTensors.push([l,i])};tr("metric",()=>{for(let i=0;i<this.outputs.length;++i){if(s.indexOf(i)!==-1)continue;const a=r[i];(c=>{let h,d,f;for(const p of c){if(typeof p=="string"&&["accuracy","acc","crossentropy","ce"].indexOf(p)!==-1){const g=this.internalOutputShapes[i];g[g.length-1]===1||this.lossFunctions[i]===du?["accuracy","acc"].indexOf(p)!==-1?d=Zb:["crossentropy","ce"].indexOf(p)!==-1&&(d=JA):this.lossFunctions[i]===kl?["accuracy","acc"].indexOf(p)!==-1?d=QA:["crossentropy","ce"].indexOf(p)!==-1&&(d=ty):["accuracy","acc"].indexOf(p)!==-1?d=Jb:["crossentropy","ce"].indexOf(p)!==-1&&(d=Qb);let x;["accuracy","acc"].indexOf(p)!==-1?x="acc":["crossentropy","ce"].indexOf(p)!==-1&&(x="ce"),f=d,h=""+x}else f=aD(p),h=""+Fa(p);let m;tr(h,()=>{m=f}),o(i,h,m)}})(a)}}),this.collectedTrainableWeights=this.trainableWeights}checkTrainableWeightsConsistency(){this.collectedTrainableWeights!=null&&this.trainableWeights.length!==this.collectedTrainableWeights.length&&console.warn("Discrepancy between trainableweights and collected trainable weights. Did you set `model.trainable` without calling `model.compile()` afterwards?")}evaluate(t,e,s={}){const r=s.batchSize==null?32:s.batchSize;Uu(r);const i=this.standardizeUserDataXY(t,e,!0,r);try{const a=i[0].concat(i[1]);this.makeTestFunction();const l=this.testFunction,c=this.testLoop(l,a,r,s.verbose,s.steps);return Me(c)}finally{gn(i[0],t),gn(i[1],e)}}async evaluateDataset(t,e){return this.makeTestFunction(),CD(this,t,e)}checkNumSamples(t,e,s,r="steps"){let o;if(s!=null){if(o=null,e!=null)throw new D(`If ${r} is set, batchSize must be null or undefined.Got batchSize = ${e}`)}else if(t!=null)Array.isArray(t)?o=t[0].shape[0]:o=t.shape[0];else throw new D(`Either the input data should have a defined shape, or ${r} shoud be specified.`);return o}execute(t,e){if(Array.isArray(e)&&e.length===0)throw new D("`outputs` is an empty Array, which is not allowed.");const s=Array.isArray(e),r=s?e:[e],o=this.retrieveSymbolicTensors(r),i=new ws;if(t instanceof re&&(t=[t]),Array.isArray(t)){if(t.length!==this.inputs.length)throw new D(`The number of inputs provided (${t.length}) does not match the number of inputs of this model (${this.inputs.length}).`);for(let l=0;l<this.inputs.length;++l)i.add(this.inputs[l],t[l])}else for(const l of this.inputs){const c=t[l.name];if(c==null)throw new D(`No value is provided for the model's input ${l.name}`);i.add(l,c)}const a=_o(o,i);return s?a:a[0]}retrieveSymbolicTensors(t){const e=pr(null,t.length);let s=t.length;for(const r of this.layers){const o=Array.isArray(r.output)?r.output:[r.output],i=o.map(a=>a.name);for(let a=0;a<t.length;++a){const l=i.indexOf(t[a]);if(l!==-1&&(e[a]=o[l],s--),s===0)break}if(s===0)break}if(s>0){const r=[];throw e.forEach((o,i)=>{o==null&&r.push(t[i])}),new D(`Cannot find SymbolicTensors for output name(s): ${JSON.stringify(r)}`)}return e}predictLoop(t,e=32,s=!1){return V(()=>{const r=this.checkNumSamples(t);if(s)throw new xt("Verbose predictLoop() is not implemented yet.");const o=Gu(r,e),i=this.outputs.map(a=>[]);for(let a=0;a<o.length;++a)V(()=>{const c=o[a][0],u=o[a][1],h=No(t,c,u),d=[];if(Array.isArray(h))for(let p=0;p<h.length;++p)d.push({key:this.inputs[p],value:h[p]});else d.push({key:this.inputs[0],value:h});const f=new ws(d);return _o(this.outputs,f)}).forEach((c,u)=>i[u].push(c));return Me(i.map(a=>Le(a,0)))})}predict(t,e={}){const s=iy(t);Gm(s,this.inputNames,this.feedInputShapes,!1);try{const r=e.batchSize==null?32:e.batchSize;return Uu(r),this.predictLoop(s,r)}finally{gn(s,t)}}predictOnBatch(t){Gm(t,this.inputNames,this.feedInputShapes,!0);const e=(Array.isArray(t)?t[0]:t).shape[0];return this.predictLoop(t,e)}standardizeUserDataXY(t,e,s=!0,r){if(this.optimizer_==null)throw new ln("You must compile a model before training/testing. Use LayersModel.compile(modelCompileArgs).");const o=[];for(let i=0;i<this.feedOutputShapes.length;++i){const a=this.feedOutputShapes[i];this.feedLossFns[i]===kl?o.push(a.slice(0,a.length-1).concat([1])):o.push(a)}if(t=Um(t,this.feedInputNames,this.feedInputShapes,!1,"input"),e=Um(e,this.feedOutputNames,o,!1,"target"),kD(t,e),ID(e,this.feedLossFns,this.feedOutputShapes),this.stateful&&r!=null&&r>0&&t[0].shape[0]%r!==0)throw new D(`In a stateful network, you should only pass inputs with a number of samples that is divisible by the batch size ${r}. Found: ${t[0].shape[0]} sample(s).`);return[t,e]}async standardizeUserData(t,e,s,r,o=!0,i){const[a,l]=this.standardizeUserDataXY(t,e,o,i);if(s!=null)throw new Error("sample weight is not supported yet.");let c=null;if(r!=null){const u=sy(r,this.outputNames);c=[];for(let h=0;h<u.length;++h)c.push(await ry(l[h],null,u[h]))}return[a,l,c]}testLoop(t,e,s,r=0,o){return V(()=>{const i=this.checkNumSamples(e,s,o,"steps"),a=[];if(r>0)throw new xt("Verbose mode is not implemented yet.");if(o!=null)throw new xt("steps mode in testLoop() is not implemented yet");{const l=Gu(i,s),c=Ue(Sn(0,i));for(let u=0;u<l.length;++u){const h=l[u][0],d=l[u][1],f=er(c,h,d-h),p=Rh(e,f),m=t(p);if(u===0)for(let g=0;g<m.length;++g)a.push(Tt(0));for(let g=0;g<m.length;++g){const x=m[g];a[g]=J(a[g],_(d-h,x))}}for(let u=0;u<a.length;++u)a[u]=ut(a[u],i)}return a})}getDedupedMetricsNames(){const t=this.metricsNames,e=[];for(let s=0;s<t.length;++s){const r=t[s];let o=r;if(Tm(t,r)>1){const i=Tm(t.slice(0,s),r);o+=`_${i}`}e.push(o)}return e}makeTrainFunction(){return t=>{const e=[],s=t.slice(0,this.inputs.length),r=t.slice(this.inputs.length,this.inputs.length+this.outputs.length),o=t.slice(this.inputs.length+this.outputs.length,this.inputs.length+this.outputs.length*2),i=[],a=()=>{const h=[];for(let m=0;m<this.inputs.length;++m)h.push({key:this.inputs[m],value:s[m]});const d=new ws(h),f=_o(this.outputs,d,{training:!0});let p;for(let m=0;m<this.lossFunctions.length;++m){const g=this.lossFunctions[m];let x=g(r[m],f[m]);o[m]!=null&&(x=gD(x,o[m]));const b=ee(x);e.push(b),m===0?p=x:p=J(p,x)}for(let m=0;m<this.metricsTensors.length;++m){let g;if(this.outputs.length>1&&m<this.outputs.length)g=e[m];else{const x=this.metricsTensors[m][0],b=this.metricsTensors[m][1];g=ee(x(r[b],f[b]))}zn(g),i.push(g)}return p=ee(p),this.calculateLosses().forEach(m=>{p=J(p,m)}),p},l=this.collectedTrainableWeights.map(h=>h.read());return[this.optimizer_.minimize(a,!0,l)].concat(i)}}makeTestFunction(){this.testFunction=t=>V(()=>{const e=[];let s;const r=t.slice(0,this.inputs.length),o=t.slice(this.inputs.length,this.inputs.length+this.outputs.length),i=[];for(let c=0;c<this.inputs.length;++c)i.push({key:this.inputs[c],value:r[c]});const a=new ws(i),l=_o(this.outputs,a);for(let c=0;c<this.lossFunctions.length;++c){const u=this.lossFunctions[c],h=ee(u(o[c],l[c]));c===0?s=h:s=J(s,h),e.push(s)}for(let c=0;c<this.metricsTensors.length;++c){const u=this.metricsTensors[c][0],h=this.metricsTensors[c][1],d=ee(u(o[h],l[h]));e.push(d)}return e})}async fit(t,e,s={}){if(this.isTraining)throw new Error("Cannot start training because another fit() call is ongoing.");this.isTraining=!0;let r,o,i,a,l,c,u,h,d;try{const f=s.batchSize==null?32:s.batchSize;Uu(f);const m=await this.standardizeUserData(t,e,s.sampleWeight,s.classWeight,!1,f);r=m[0],o=m[1],d=m[2];let g=!1,x;if(s.validationData!=null&&s.validationData.length>0){if(g=!0,s.validationData.length===2)l=s.validationData[0],c=s.validationData[1];else throw s.validationData.length===3?new xt("validationData including sample weights is not supported yet."):new D(`When passing validation data, it must contain 2 (valX, valY) or 3 (valX, valY, valSampleWeight) items; ${s.validationData} is invalid.`);const I=await this.standardizeUserData(l,c,null,null,!0,f);u=I[0],h=I[1],x=u.concat(h)}else if(s.validationSplit!=null&&s.validationSplit>0&&s.validationSplit<1){g=!0;const k=Math.floor(r[0].shape[0]*(1-s.validationSplit)),I=r[0].shape[0];u=No(r,k,I),i=r,r=No(r,0,k),h=No(o,k,I),a=o,o=No(o,0,k),x=u.concat(h)}else s.validationSteps!=null&&(g=!0);const b=r.concat(o).concat(d);this.checkTrainableWeightsConsistency();const w=this.makeTrainFunction(),y=this.getDedupedMetricsNames();let v,$;g?(this.makeTestFunction(),v=this.testFunction,$=y.slice().concat(y.map(k=>"val_"+k))):(v=null,x=[],$=y.slice());const N=Kb(s.callbacks,s.yieldEvery);return await this.fitLoop(w,b,y,f,s.epochs,s.verbose,N,v,x,s.shuffle,$,s.initialEpoch,null,null)}finally{this.isTraining=!1,gn(r,t),gn(o,e),gn(i,t),gn(a,e),gn(u,l),gn(h,c),d!=null&&yt(d)}}async fitLoop(t,e,s,r,o,i,a,l,c,u,h,d,f,p){r==null&&(r=32),o==null&&(o=1),u==null&&(u=!0),d==null&&(d=0);let m=!1;if(l!=null&&c!=null&&(m=!0),p!=null&&(m=!0,f==null))throw new D("Can only use `validationSteps` when doing step-wise training, i.e., `stepsPerEpoch` must be set.");const g=this.checkNumSamples(e,r,f,"steps_per_epoch");let x;g!=null&&(x=Sn(0,g)),i==null&&(i=1);const{callbackList:b,history:w}=Xb(a,i,o,d,g,f,r,m,h);b.setModel(this),this.history=w,await b.onTrainBegin(),this.stopTraining_=!1;for(let y=d;y<o;++y){await b.onEpochBegin(y);const v={};if(f!=null)throw new xt("stepsPerEpoch mode is not implemented yet.");{if(u==="batch")throw new xt("batch shuffling is not implemneted yet");u&&HC(x);const $=Ue(x),N=Gu(g,r);for(let T=0;T<N.length;++T){const k={};if(await b.onBatchBegin(T,k),V(()=>{const I=N[T][0],C=N[T][1],R=er($,I,C-I);k.batch=T,k.size=C-I;const A=Rh(e,R),O=t(A);for(let M=0;M<s.length;++M){const z=s[M],U=O[M];k[z]=U,zn(U)}if(T===N.length-1&&m){const M=this.testLoop(l,c,r);for(let z=0;z<s.length;++z){const U=s[z],B=M[z];zn(B),v["val_"+U]=B}}}),await b.onBatchEnd(T,k),jb(k),this.stopTraining_)break}$.dispose()}if(await b.onEpochEnd(y,v),this.stopTraining_)break}return await b.onTrainEnd(),await this.history.syncData(),this.history}async fitDataset(t,e){return yD(this,t,e)}async trainOnBatch(t,e){const s=await this.standardizeUserData(t,e),r=s[0],o=s[1],a=this.makeTrainFunction()(r.concat(o)),l=[];for(const c of a){const u=await c.data();l.push(u[0])}return yt(a),gn(s[0],t),gn(s[1],e),Me(l)}getNamedWeights(t){const e=[],s=t!=null&&t.trainableOnly,r=s?this.trainableWeights:this.weights,o=this.getWeights(s);for(let i=0;i<r.length;++i)s&&!r[i].trainable||e.push({name:r[i].originalName,tensor:o[i]});return e}set stopTraining(t){this.stopTraining_=t}get stopTraining(){return this.stopTraining_}get optimizer(){return this.optimizer_}set optimizer(t){this.optimizer_!==t&&(this.optimizer_=t,this.isOptimizerOwned=!1)}dispose(){const t=super.dispose();if(t.refCountAfterDispose===0&&this.optimizer!=null&&this.isOptimizerOwned){const e=tm().numTensors;this.optimizer_.dispose(),t.numDisposedVariables+=e-tm().numTensors}return t}getLossIdentifiers(){let t;if(typeof this.loss=="string")t=ns(this.loss);else if(Array.isArray(this.loss)){for(const e of this.loss)if(typeof e!="string")throw new Error("Serialization of non-string loss is not supported.");t=this.loss.map(e=>ns(e))}else{const e=Object.keys(this.loss);t={};const s=this.loss;for(const r of e)if(typeof s[r]=="string")t[r]=ns(s[r]);else throw new Error("Serialization of non-string loss is not supported.")}return t}getMetricIdentifiers(){if(typeof this.metrics=="string"||typeof this.metrics=="function")return[ns(Fa(this.metrics))];if(Array.isArray(this.metrics))return this.metrics.map(t=>ns(Fa(t)));{const t={};for(const e in this.metrics)t[e]=ns(Fa(this.metrics[e]));return t}}getTrainingConfig(){return{loss:this.getLossIdentifiers(),metrics:this.getMetricIdentifiers(),optimizer_config:{class_name:this.optimizer.getClassName(),config:this.optimizer.getConfig()}}}loadTrainingConfig(t){if(t.weighted_metrics!=null)throw new Error("Loading weight_metrics is not supported yet.");if(t.loss_weights!=null)throw new Error("Loading loss_weights is not supported yet.");if(t.sample_weight_mode!=null)throw new Error("Loading sample_weight_mode is not supported yet.");const e=Tl(t.optimizer_config),s=Un(e);let r;if(typeof t.loss=="string")r=Ks(t.loss);else if(Array.isArray(t.loss))r=t.loss.map(i=>Ks(i));else if(t.loss!=null){r={};for(const i in t.loss)r[i]=Ks(t.loss[i])}let o;if(Array.isArray(t.metrics))o=t.metrics.map(i=>Ks(i));else if(t.metrics!=null){o={};for(const i in t.metrics)o[i]=Ks(t.metrics[i])}this.compile({loss:r,metrics:o,optimizer:s})}async save(t,e){if(typeof t=="string"){const c=J$(t);if(c.length===0)throw new D(`Cannot find any save handlers for URL '${t}'`);if(c.length>1)throw new D(`Found more than one (${c.length}) save handlers for URL '${t}'`);t=c[0]}if(t.save==null)throw new D("LayersModel.save() cannot proceed because the IOHandler provided does not have the `save` attribute defined.");const s=await em(this.getNamedWeights(e)),a={modelTopology:this.toJSON(null,!1),format:ND,generatedBy:`TensorFlow.js tfjs-layers v${ny}`,convertedBy:null};if((e==null?!1:e.includeOptimizer)&&this.optimizer!=null){a.trainingConfig=this.getTrainingConfig();const c="optimizer",{data:u,specs:h}=await em(await this.optimizer.getWeights(),c);s.specs.push(...h),s.data=G$([s.data,u])}return this.userDefinedMetadata!=null&&(zm(this.userDefinedMetadata,this.name,!0),a.userDefinedMetadata=this.userDefinedMetadata),a.weightData=s.data,a.weightSpecs=s.specs,t.save(a)}setUserDefinedMetadata(t){zm(t,this.name),this.userDefinedMetadata=t}getUserDefinedMetadata(){return this.userDefinedMetadata}}Wr.className="Model";X(Wr);class ay extends Wr{}ay.className="Functional";X(ay);async function WY(n,t){if(t==null&&(t={}),typeof n=="string"){const e=Q$(n,t);if(e.length===0)e.push(OT(n,t));else if(e.length>1)throw new D(`Found more than one (${e.length}) load handlers for URL '${n}'`);n=e[0]}return TD(n,void 0,t)}async function TD(n,t,e){if(e==null&&(e={}),n.load==null)throw new D("Cannot proceed with model loading because the IOHandler provided does not have the `load` method implemented.");const s=await n.load();let r=s.modelTopology;r.model_config!=null&&(r=r.model_config);const o=e.strict==null?!0:e.strict,i=s.weightData!=null&&s.weightSpecs!=null&&o,a=Un(Tl(r),t,i),l=s.trainingConfig;if(l!=null&&a.loadTrainingConfig(l),s.userDefinedMetadata!=null&&a.setUserDefinedMetadata(s.userDefinedMetadata),s.weightData!=null){if(s.weightSpecs==null)throw new D("LayersModel artifacts contains weight data, but not weight specs. Therefore loading of weights cannot proceed.");const{modelWeights:c,optimizerWeights:u}=ED(s.weightData,s.weightSpecs);a.loadWeights(c,o),a.optimizer!=null&&u.length>0&&await a.optimizer.setWeights(u),yt(c),yt(u.map(h=>h.tensor))}return a}function ED(n,t){const e=P$(n,t),s={},r=[];return t.forEach(o=>{o.group==="optimizer"?r.push({name:o.name,tensor:e[o.name]}):s[o.name]=e[o.name]}),{modelWeights:s,optimizerWeights:r}}class Yo extends Wr{constructor(t){if(super({inputs:[],outputs:[]}),t=t||{},this.trainable=!0,this.built=!1,this.name=t.name!=null?t.name:lu("sequential_"),t.layers!=null)for(const e of t.layers)this.add(e)}checkShape(t){if(t.inboundNodes[0].outputTensors[0].shape.some(s=>s<0))throw new D(`Negative dimension size caused by adding layer ${t.name} with input shape [${t.inboundNodes[0].inputTensors[0].shape}]`)}add(t){const e=t instanceof Yo||t instanceof Wr;let s;if(e){if(s=t,s.outputs.length!==1)throw new D("All layers in a Sequential model should have a single output tensor. For multi-output layers, use the functional API.");if(s.inputs.length!==1)throw new D("All layers in a Sequential model should have a single input tensor. For multi-input layers, use the functional API.")}if(this.outputs.length===0){if(t.inboundNodes.length===0){if(t.batchInputShape==null)throw new D("The first layer in a Sequential model must get an `inputShape` or `batchInputShape` argument.");const r=EA({batchShape:t.batchInputShape,dtype:t.dtype,name:t.name+"_input"});t.apply(r)}if(e)this.outputs=s.outputs,this.inputs=s.inputs;else{if(t.inboundNodes.length!==1)throw new D(`A layer added to a Sequential model must not already be connected somewhere else. LayersModel received layer ${t.name} which has ${t.inboundNodes.length} pre-existing inbound connections.`);if(t.inboundNodes[0].outputTensors.length!==1)throw new D("All layers in a Sequential model should have a single output tensor. For multi-output layers, use the functional API.");this.checkShape(t),this.outputs=[t.inboundNodes[0].outputTensors[0]],this.inputs=Wb(this.outputs[0])}this.inboundNodes=[],new uu({outboundLayer:this,inboundLayers:[],nodeIndices:[],tensorIndices:[],inputTensors:this.inputs,outputTensors:this.outputs,inputMasks:pr(null,this.inputs.length),outputMasks:[null],inputShapes:this.inputs.map(r=>r.shape),outputShapes:this.outputs[0].shape})}else{const r=t.apply(this.outputs[0]);if(Array.isArray(r))throw new TypeError("All layers in a Sequential model should have a single output tensor. For multi-output layers, use the functional API.");this.checkShape(t),this.outputs=[r],this.inboundNodes[0].outputTensors=this.outputs,this.inboundNodes[0].outputShapes=[this.outputs[0].shape]}this.layers.push(t),this.built=!1}pop(){if(this.layers.length===0)throw new TypeError("There are no layers in the model.");if(this.layers.pop(),this.layers.length===0)this.outputs=[],this.inboundNodes=[],this.outboundNodes=[];else{const t=this.layers.length-1;this.layers[t].outboundNodes=[],this.outputs=[this.layers[t].output],this.inboundNodes[0].outputTensors=this.outputs,this.inboundNodes[0].outputShapes=[this.outputs[0].shape]}}call(t,e){return this.model==null&&this.build(),this.model.call(t,e)}build(t){if(St(t),this.inputs.length===0||this.outputs.length===0)throw new TypeError("Sequential model cannot be built: model is empty. Add some layers first.");this.model=new Wr({inputs:this.inputs,outputs:this.outputs[0],name:this.name+"_model"}),this.model.trainable=this.trainable,this.supportsMasking=this.model.supportsMasking,this.inputLayers=this.model.inputLayers,this.inputLayersNodeIndices=this.model.inputLayersNodeIndices,this.inputLayersTensorIndices=this.model.inputLayersTensorIndices,this.outputLayers=this.model.outputLayers,this.outputLayersNodeIndices=this.model.outputLayersNodeIndices,this.outputLayersTensorIndices=this.model.outputLayersTensorIndices,this.nodesByDepth=this.model.nodesByDepth,this.containerNodes=this.model.containerNodes,this.outputNames=this.model.outputNames,this.inputNames=this.model.inputNames,this.built=!0}countParams(){return this.built||this.build(),super.countParams()}summary(t,e,s=console.log){this.built||this.build(),super.summary(t,e,s)}setWeights(t){this.model==null&&this.build(),this.model.setWeights(t)}evaluate(t,e,s={}){if(!this.built)throw new ln("The model needs to be compiled before being used.");return this.model.evaluate(t,e,s)}async evaluateDataset(t,e){if(!this.built)throw new ln("The model needs to be compiled before being used.");return this.model.evaluateDataset(t,e)}predict(t,e={}){return this.model==null&&this.build(),this.model.predict(t,e)}predictOnBatch(t){return this.model==null&&this.build(),this.model.predictOnBatch(t)}compile(t){this.build(),this.model.compile(t),this.optimizer_=this.model.optimizer,this.isOptimizerOwned=this.model.isOptimizerOwned,this.loss=this.model.loss,this.metrics=this.model.metrics,this.metricsTensors=this.model.metricsTensors,this.metricsNames=this.model.metricsNames}get optimizer(){return this.model==null?void 0:this.model.optimizer}set optimizer(t){this.model.optimizer=t}async fit(t,e,s={}){if(!this.built)throw new ln("The model needs to be compiled before being used.");return this.model.fit(t,e,s)}async fitDataset(t,e){if(!this.built)throw new ln("The model needs to be compiled before being used.");return this.model.fitDataset(t,e)}async trainOnBatch(t,e){return this.model.trainOnBatch(t,e)}static fromConfig(t,e,s={},r=!1){let o,i={};if(e instanceof Array){if(e[0].className==null||e[0].className==="Merge")throw new D("Legacy serialization format not supported yet.");o=e}else S(e.layers!=null,()=>"When the config data for a Sequential model is not an Array, it must be an Object that contains the 'layers' field."),o=e.layers,delete e.layers,i=e;const a=new t(i);if(!(a instanceof Yo))throw new xt(`Sequential.fromConfig called on non-Sequential input: ${a}`);for(const l of o){const u=Un(l,void 0,r);r&&u.setFastWeightInitDuringBuild(!0),a.add(u)}return a}set stopTraining(t){if(this.model==null)throw new D("Cannot set the stopTraining property of a sequential model before it is compiled.");this.model.stopTraining=t}get stopTraining(){if(this.model==null)throw new D("Cannot get the stopTraining property of a sequential model before it is compiled.");return this.model.stopTraining}getConfig(){const t=[];for(const e of this.layers){const s={};s.className=e.getClassName(),s.config=e.getConfig(),t.push(s)}return{name:this.name,layers:t}}}Yo.className="Sequential";X(Yo);let Se=class extends fo{getConfig(){return{}}};class ly extends Se{apply(t,e=1){return fA(t,e)}}ly.className="elu";X(ly);class cy extends Se{apply(t){return k0(t)}}cy.className="selu";X(cy);class uy extends Se{apply(t){return Cr(t)}}uy.className="relu";X(uy);class hy extends Se{apply(t){return V(()=>qo(6,Cr(t)))}}hy.className="relu6";X(hy);class dy extends Se{apply(t){return t}}dy.className="linear";X(dy);class fy extends Se{apply(t){return co(t)}}fy.className="sigmoid";X(fy);class py extends Se{apply(t){return mA(t)}}py.className="hardSigmoid";X(py);class my extends Se{apply(t){return na(t)}}my.className="softplus";X(my);class gy extends Se{apply(t){return pA(t)}}gy.className="softsign";X(gy);class xy extends Se{apply(t){return Jc(t)}}xy.className="tanh";X(xy);let ip=class extends Se{apply(t,e=-1){return lf(t,e)}};ip.className="softmax";X(ip);class by extends Se{apply(t,e=-1){return g0(t,e)}}by.className="logSoftmax";X(by);class yy extends Se{apply(t){return V(()=>V(()=>{const e=Math.sqrt(2),s=_(.5,J(1,h0(ut(t,e))));return _(t,s)}))}}yy.className="gelu";X(yy);class wy extends Se{apply(t){return V(()=>_(.5,_(t,J(1,Jc(_(ke(ut(2,Math.PI)),J(t,_(.044715,hr(t,3)))))))))}}wy.className="gelu_new";X(wy);class vy extends Se{apply(t){return V(()=>_(t,Jc(na(t))))}}vy.className="mish";X(vy);class Cy extends Se{apply(t,e=1){return V(()=>_(co(_(t,e)),t))}}Cy.className="swish";X(Cy);function Ts(n){return n.getClassName()}function Hu(n,t={}){return ca(n,an.getMap().classNameMap,t,"activation")}function Es(n){if(n==null){const t={};return t.className="linear",t.config={},Hu(t)}if(typeof n=="string"){const t={};return t.className=n,t.config={},Hu(t)}else return n instanceof Se?n:Hu(n)}function RD(n){if(n!=null&&typeof n!="object")throw new Error(`Argument to L1L2 regularizer's constructor is expected to be an object, but received: ${n}`)}class $y extends fo{}class ky extends $y{constructor(t){super(),RD(t),this.l1=t==null||t.l1==null?.01:t.l1,this.l2=t==null||t.l2==null?.01:t.l2,this.hasL1=this.l1!==0,this.hasL2=this.l2!==0}apply(t){return V(()=>{let e=fe([1]);return this.hasL1&&(e=J(e,ct(_(this.l1,Te(t))))),this.hasL2&&(e=J(e,ct(_(this.l2,ha(t))))),L(e,[])})}getConfig(){return{l1:this.l1,l2:this.l2}}static fromConfig(t,e){return new t({l1:e.l1,l2:e.l2})}}ky.className="L1L2";X(ky);const Hm={l1l2:"L1L2"};function Ot(n){return qf(n)}function qm(n,t={}){return ca(n,an.getMap().classNameMap,t,"regularizer")}function Gt(n){if(n==null)return null;if(typeof n=="string"){const e={className:n in Hm?Hm[n]:n,config:{}};return qm(e)}else return n instanceof $y?n:qm(n)}class Iy extends Ct{constructor(t){super(t??{}),this.supportsMasking=!0,t!=null&&(this.maxValue=t.maxValue)}call(t,e){t=pt(t);let s=Cr(t);return this.maxValue!=null&&(s=tn(s,0,this.maxValue)),s}computeOutputShape(t){return t}getConfig(){const t={maxValue:this.maxValue},e=super.getConfig();return Object.assign(t,e),t}}Iy.className="ReLU";X(Iy);class Sy extends Ct{constructor(t){super(t??{}),this.DEFAULT_ALPHA=.3,t==null&&(t={}),this.alpha=t.alpha==null?this.DEFAULT_ALPHA:t.alpha}call(t,e){const s=pt(t);return Zd(s,this.alpha)}computeOutputShape(t){return t}getConfig(){const t={alpha:this.alpha},e=super.getConfig();return Object.assign(t,e),t}}Sy.className="LeakyReLU";X(Sy);class Ny extends Ct{constructor(t){if(super(t??{}),this.DEFAULT_ALPHA_INITIALIZER="zeros",t==null&&(t={}),this.supportsMasking=!0,this.alphaInitializer=Ut(t.alphaInitializer||this.DEFAULT_ALPHA_INITIALIZER),this.alphaRegularizer=Gt(t.alphaRegularizer),this.alphaConstraint=le(t.alphaConstraint),t.sharedAxes==null)this.sharedAxes=null;else if(Array.isArray(t.sharedAxes))this.sharedAxes=t.sharedAxes;else if(typeof t.sharedAxes=="number")this.sharedAxes=[t.sharedAxes];else throw new D(`Expected sharedAxes to be a number or an array of numbers, but got ${t.sharedAxes}`)}build(t){t=St(t);const e=t.slice(1);if(this.sharedAxes!=null)for(const r of this.sharedAxes)e[r-1]=1;this.alpha=this.addWeight("alpha",e,"float32",this.alphaInitializer,this.alphaRegularizer,!0,this.alphaConstraint);const s={};if(this.sharedAxes!=null)for(let r=1;r<t.length;++r)s[r]=t[r];this.inputSpec=[new ie({ndim:t.length,axes:s})],this.built=!0}call(t,e){return t=pt(t),sf(t,this.alpha.read())}getConfig(){const t={alphaInitializer:qt(this.alphaInitializer),alphaRegularizer:Ot(this.alphaRegularizer),alphaConstraint:ae(this.alphaConstraint),sharedAxes:this.sharedAxes},e=super.getConfig();return Object.assign(t,e),t}}Ny.className="PReLU";X(Ny);let Ty=class extends Ct{constructor(t){if(super(t??{}),this.DEFAULT_ALPHA=1,t==null&&(t={}),t.alpha!=null&&t.alpha!==this.DEFAULT_ALPHA)throw new xt(`Non-default alpha value (${t.alpha}) is not supported by the ELU layer yet.`);this.alpha=t.alpha==null?this.DEFAULT_ALPHA:t.alpha}call(t,e){const s=pt(t);return eu(s)}computeOutputShape(t){return t}getConfig(){const t={alpha:this.alpha},e=super.getConfig();return Object.assign(t,e),t}};Ty.className="ELU";X(Ty);class Ey extends Ct{constructor(t){super(t??{}),this.DEFAULT_THETA=1,t==null&&(t={}),this.theta=t.theta==null?this.DEFAULT_THETA:t.theta}call(t,e){const s=pt(t);return _(s,st(en(s,this.theta),"float32"))}computeOutputShape(t){return t}getConfig(){const t={theta:this.theta},e=super.getConfig();return Object.assign(t,e),t}}Ey.className="ThresholdedReLU";X(Ey);class Ry extends Ct{constructor(t){super(t??{}),this.DEFAULT_AXIS=1,t==null&&(t={}),this.softmax=new ip().apply,this.axis=t.axis==null?this.DEFAULT_AXIS:t.axis}call(t,e){return V(()=>{let s=pt(t);const r=e.mask;if(r!=null){const o=_(ft(Ps(s.shape),st(r,s.dtype)),Tt(-1e9));s=J(s,o)}return this.axis instanceof Array?this.axis.length>1?qn(ft(s,x0(s,this.axis,!0))):this.softmax(s,this.axis[0]):this.softmax(s,this.axis)})}computeOutputShape(t){return t}getConfig(){const t={axis:this.axis},e=super.getConfig();return Object.assign(t,e),t}}Ry.className="Softmax";X(Ry);function Ur(n,t,e){if(typeof n=="number")return pr(n,t);if(n.length!==t)throw new D(`The ${e} argument must be an integer or tuple of ${t} integers. Received: ${n.length} elements.`);for(let s=0;s<t;++s){const r=n[s];if(!cA(r))throw new D(`The ${e} argument must be an integer or tuple of ${t} integers. Received: ${JSON.stringify(n)} including a non-integer number ${r}`)}return n}function In(n,t,e,s,r=1){if(n==null)return n;const o=t+(t-1)*(r-1);let i;return e==="same"?i=n:i=n-o+1,Math.floor((i+s-1)/s)}function Mn(n,t,e,s){if(n==null)return null;if(s==="valid")n=n*t+Ns([e-t,0]);else if(s==="same")n=n*t;else throw new D(`Unsupport padding mode: ${s}.`);return n}function ap(n,t){return V(()=>(Qt(t),t==="channelsFirst"?$t(n,[0,2,3,1]):n))}function Ay(n,t){return V(()=>(Qt(t),t==="channelsFirst"?$t(n,[0,2,3,4,1]):n))}function AD(n,t,e,s=1,r="valid",o,i=1){return V(()=>{if(o==null&&(o=Nn()),Qt(o),n.shape.length!==3)throw new D(`The input of a conv1dWithBias operation should be 3, but is ${n.shape.length} instead.`);if(t.shape.length!==3)throw new D(`The kernel for a conv1dWithBias operation should be 3, but is ${t.shape.length} instead`);if(e!=null&&e.shape.length!==1)throw new D(`The bias for a conv1dWithBias operation should be 1, but is ${e.shape.length} instead`);if(o==="channelsFirst"&&(n=$t(n,[0,2,1])),r==="causal")throw new xt("The support for CAUSAL padding mode in conv1dWithBias is not implemented yet.");let a=i0(n,t,s,r==="same"?"same":"valid","NWC",i);return e!=null&&(a=Rn(a,e)),a})}function jm(n,t,e,s=[1,1],r="valid",o,i,a=null){return V(()=>{if(o==null&&(o=Nn()),Qt(o),n.rank!==3&&n.rank!==4)throw new D(`conv2dWithBiasActivation expects input to be of rank 3 or 4, but received ${n.rank}.`);if(t.rank!==3&&t.rank!==4)throw new D(`conv2dWithBiasActivation expects kernel to be of rank 3 or 4, but received ${n.rank}.`);let l=ap(n,o);if(r==="causal")throw new xt("The support for CAUSAL padding mode in conv1dWithBias is not implemented yet.");return l=DN({x:l,filter:t,strides:s,pad:r==="same"?"same":"valid",dilations:i,dataFormat:"NHWC",bias:e,activation:a}),o==="channelsFirst"&&(l=$t(l,[0,3,1,2])),l})}function DD(n,t,e,s=[1,1,1],r="valid",o,i){return V(()=>{if(o==null&&(o=Nn()),Qt(o),n.rank!==4&&n.rank!==5)throw new D(`conv3dWithBias expects input to be of rank 4 or 5, but received ${n.rank}.`);if(t.rank!==4&&t.rank!==5)throw new D(`conv3dWithBias expects kernel to be of rank 4 or 5, but received ${n.rank}.`);let a=Ay(n,o);if(r==="causal")throw new xt("The support for CAUSAL padding mode in conv3dWithBias is not implemented yet.");return a=EI(a,t,s,r==="same"?"same":"valid","NDHWC",i),e!=null&&(a=Rn(a,e)),o==="channelsFirst"&&(a=$t(a,[0,4,1,2,3])),a})}class fu extends Ct{constructor(t,e){if(super(e),this.bias=null,this.DEFAULT_KERNEL_INITIALIZER="glorotNormal",this.DEFAULT_BIAS_INITIALIZER="zeros",fu.verifyArgs(e),this.rank=t,pe(this.rank,"rank"),this.rank!==1&&this.rank!==2&&this.rank!==3)throw new xt(`Convolution layer for rank other than 1, 2, or 3 (${this.rank}) is not implemented yet.`);if(this.kernelSize=Ur(e.kernelSize,t,"kernelSize"),this.strides=Ur(e.strides==null?1:e.strides,t,"strides"),this.padding=e.padding==null?"valid":e.padding,nn(this.padding),this.dataFormat=e.dataFormat==null?"channelsLast":e.dataFormat,Qt(this.dataFormat),this.activation=Es(e.activation),this.useBias=e.useBias==null?!0:e.useBias,this.biasInitializer=Ut(e.biasInitializer||this.DEFAULT_BIAS_INITIALIZER),this.biasConstraint=le(e.biasConstraint),this.biasRegularizer=Gt(e.biasRegularizer),this.activityRegularizer=Gt(e.activityRegularizer),this.dilationRate=Ur(e.dilationRate==null?1:e.dilationRate,t,"dilationRate"),this.rank===1&&Array.isArray(this.dilationRate)&&this.dilationRate.length!==1)throw new D(`dilationRate must be a number or an array of a single number for 1D convolution, but received ${JSON.stringify(this.dilationRate)}`);if(this.rank===2){if(typeof this.dilationRate=="number")this.dilationRate=[this.dilationRate,this.dilationRate];else if(this.dilationRate.length!==2)throw new D(`dilationRate must be a number or array of two numbers for 2D convolution, but received ${JSON.stringify(this.dilationRate)}`)}else if(this.rank===3){if(typeof this.dilationRate=="number")this.dilationRate=[this.dilationRate,this.dilationRate,this.dilationRate];else if(this.dilationRate.length!==3)throw new D(`dilationRate must be a number or array of three numbers for 3D convolution, but received ${JSON.stringify(this.dilationRate)}`)}}static verifyArgs(t){if(On("kernelSize"in t,"required key 'kernelSize' not in config"),typeof t.kernelSize!="number"&&!jf(t.kernelSize,"number",1,3))throw new D(`BaseConv expects config.kernelSize to be number or number[] with length 1, 2, or 3, but received ${JSON.stringify(t.kernelSize)}.`)}getConfig(){const t={kernelSize:this.kernelSize,strides:this.strides,padding:this.padding,dataFormat:this.dataFormat,dilationRate:this.dilationRate,activation:Ts(this.activation),useBias:this.useBias,biasInitializer:qt(this.biasInitializer),biasRegularizer:Ot(this.biasRegularizer),activityRegularizer:Ot(this.activityRegularizer),biasConstraint:ae(this.biasConstraint)},e=super.getConfig();return Object.assign(t,e),t}}class po extends fu{constructor(t,e){super(t,e),this.kernel=null,po.verifyArgs(e),this.filters=e.filters,pe(this.filters,"filters"),this.kernelInitializer=Ut(e.kernelInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.kernelConstraint=le(e.kernelConstraint),this.kernelRegularizer=Gt(e.kernelRegularizer)}build(t){t=St(t);const e=this.dataFormat==="channelsFirst"?1:t.length-1;if(t[e]==null)throw new D(`The channel dimension of the input should be defined. Found ${t[e]}`);const s=t[e],r=this.kernelSize.concat([s,this.filters]);this.kernel=this.addWeight("kernel",r,null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.useBias&&(this.bias=this.addWeight("bias",[this.filters],null,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint)),this.inputSpec=[{ndim:this.rank+2,axes:{[e]:s}}],this.built=!0}call(t,e){return V(()=>{t=pt(t);let s;const r=this.bias==null?null:this.bias.read(),o=Nb(this.activation.getClassName());if(o!=null&&this.rank===2)s=jm(t,this.kernel.read(),r,this.strides,this.padding,this.dataFormat,this.dilationRate,o);else{if(this.rank===1)s=AD(t,this.kernel.read(),r,this.strides[0],this.padding,this.dataFormat,this.dilationRate[0]);else if(this.rank===2)s=jm(t,this.kernel.read(),r,this.strides,this.padding,this.dataFormat,this.dilationRate);else if(this.rank===3)s=DD(t,this.kernel.read(),r,this.strides,this.padding,this.dataFormat,this.dilationRate);else throw new xt("convolutions greater than 3D are not implemented yet.");this.activation!=null&&(s=this.activation.apply(s))}return s})}computeOutputShape(t){t=St(t);const e=[],s=this.dataFormat==="channelsLast"?t.slice(1,t.length-1):t.slice(2);for(let o=0;o<s.length;++o){const i=In(s[o],this.kernelSize[o],this.padding,this.strides[o],typeof this.dilationRate=="number"?this.dilationRate:this.dilationRate[o]);e.push(i)}let r=[t[0]];return this.dataFormat==="channelsLast"?(r=r.concat(e),r.push(this.filters)):(r.push(this.filters),r=r.concat(e)),r}getConfig(){const t={filters:this.filters,kernelInitializer:qt(this.kernelInitializer),kernelRegularizer:Ot(this.kernelRegularizer),kernelConstraint:ae(this.kernelConstraint)},e=super.getConfig();return Object.assign(t,e),t}static verifyArgs(t){if(!("filters"in t)||typeof t.filters!="number"||t.filters<1)throw new D(`Convolution layer expected config.filters to be a 'number' > 0 but got ${JSON.stringify(t.filters)}`)}}class ma extends po{constructor(t){super(2,t),ma.verifyArgs(t)}getConfig(){const t=super.getConfig();return delete t.rank,t}static verifyArgs(t){if(typeof t.kernelSize!="number"&&!jf(t.kernelSize,"number",1,2))throw new D(`Conv2D expects config.kernelSize to be number or number[] with length 1 or 2, but received ${JSON.stringify(t.kernelSize)}.`)}}ma.className="Conv2D";X(ma);class ga extends po{constructor(t){super(3,t),ga.verifyArgs(t)}getConfig(){const t=super.getConfig();return delete t.rank,t}static verifyArgs(t){if(typeof t.kernelSize!="number"&&!(Array.isArray(t.kernelSize)&&(t.kernelSize.length===1||t.kernelSize.length===3)))throw new D(`Conv3D expects config.kernelSize to be number or [number, number, number], but received ${JSON.stringify(t.kernelSize)}.`)}}ga.className="Conv3D";X(ga);class Dy extends ma{constructor(t){if(super(t),this.inputSpec=[new ie({ndim:4})],this.padding!=="same"&&this.padding!=="valid")throw new D(`Conv2DTranspose currently supports only padding modes 'same' and 'valid', but received padding mode ${this.padding}`)}build(t){if(t=St(t),t.length!==4)throw new D("Input should have rank 4; Received input shape: "+JSON.stringify(t));const e=this.dataFormat==="channelsFirst"?1:t.length-1;if(t[e]==null)throw new D("The channel dimension of the inputs should be defined. Found `None`.");const s=t[e],r=this.kernelSize.concat([this.filters,s]);this.kernel=this.addWeight("kernel",r,"float32",this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.useBias&&(this.bias=this.addWeight("bias",[this.filters],"float32",this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint)),this.inputSpec=[new ie({ndim:4,axes:{[e]:s}})],this.built=!0}call(t,e){return V(()=>{let s=pt(t);if(s.shape.length!==4)throw new D(`Conv2DTranspose.call() expects input tensor to be rank-4, but received a tensor of rank-${s.shape.length}`);const r=s.shape,o=r[0];let i,a;this.dataFormat==="channelsFirst"?(i=2,a=3):(i=1,a=2);const l=r[i],c=r[a],u=this.kernelSize[0],h=this.kernelSize[1],d=this.strides[0],f=this.strides[1],p=Mn(l,d,u,this.padding),m=Mn(c,f,h,this.padding),g=[o,p,m,this.filters];this.dataFormat!=="channelsLast"&&(s=$t(s,[0,2,3,1]));let x=a0(s,this.kernel.read(),g,this.strides,this.padding);return this.dataFormat!=="channelsLast"&&(x=$t(x,[0,3,1,2])),this.bias!=null&&(x=Rn(x,this.bias.read(),this.dataFormat)),this.activation!=null&&(x=this.activation.apply(x)),x})}computeOutputShape(t){t=St(t);const e=t.slice();let s,r,o;this.dataFormat==="channelsFirst"?(s=1,r=2,o=3):(s=3,r=1,o=2);const i=this.kernelSize[0],a=this.kernelSize[1],l=this.strides[0],c=this.strides[1];return e[s]=this.filters,e[r]=Mn(e[r],l,i,this.padding),e[o]=Mn(e[o],c,a,this.padding),e}getConfig(){const t=super.getConfig();return delete t.dilationRate,t}}Dy.className="Conv2DTranspose";X(Dy);class _y extends ga{constructor(t){if(super(t),this.inputSpec=[new ie({ndim:5})],this.padding!=="same"&&this.padding!=="valid")throw new D(`Conv3DTranspose currently supports only padding modes 'same' and 'valid', but received padding mode ${this.padding}`)}build(t){if(t=St(t),t.length!==5)throw new D("Input should have rank 5; Received input shape: "+JSON.stringify(t));const e=this.dataFormat==="channelsFirst"?1:t.length-1;if(t[e]==null)throw new D("The channel dimension of the inputs should be defined. Found `None`.");const s=t[e],r=this.kernelSize.concat([this.filters,s]);this.kernel=this.addWeight("kernel",r,"float32",this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.useBias&&(this.bias=this.addWeight("bias",[this.filters],"float32",this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint)),this.inputSpec=[new ie({ndim:5,axes:{[e]:s}})],this.built=!0}call(t,e){return V(()=>{let s=pt(t);if(s.shape.length!==5)throw new D(`Conv3DTranspose.call() expects input tensor to be rank-4, but received a tensor of rank-${s.shape.length}`);const r=s.shape,o=r[0];let i,a,l;this.dataFormat==="channelsFirst"?(l=2,i=3,a=4):(l=1,i=2,a=3);const c=r[l],u=r[i],h=r[a],d=this.kernelSize[0],f=this.kernelSize[1],p=this.kernelSize[2],m=this.strides[0],g=this.strides[1],x=this.strides[2],b=Mn(c,m,d,this.padding),w=Mn(u,g,f,this.padding),y=Mn(h,x,p,this.padding),v=[o,b,w,y,this.filters];this.dataFormat!=="channelsLast"&&(s=$t(s,[0,2,3,4,1]));let $=DI(s,this.kernel.read(),v,this.strides,this.padding);return this.dataFormat!=="channelsLast"&&($=$t($,[0,4,1,2,3])),this.bias!==null&&($=Rn($,this.bias.read(),this.dataFormat)),this.activation!==null&&($=this.activation.apply($)),$})}computeOutputShape(t){t=St(t);const e=t.slice();let s,r,o,i;this.dataFormat==="channelsFirst"?(s=1,r=2,o=3,i=4):(s=4,r=1,o=2,i=3);const a=this.kernelSize[0],l=this.kernelSize[1],c=this.kernelSize[2],u=this.strides[0],h=this.strides[1],d=this.strides[2];return e[s]=this.filters,e[r]=Mn(e[r],u,a,this.padding),e[o]=Mn(e[o],h,l,this.padding),e[i]=Mn(e[i],d,c,this.padding),e}getConfig(){const t=super.getConfig();return delete t.dilationRate,t}}_y.className="Conv3DTranspose";X(_y);class Fy extends po{constructor(t,e){if(super(t,e),this.DEFAULT_DEPTHWISE_INITIALIZER="glorotUniform",this.DEFAULT_POINTWISE_INITIALIZER="glorotUniform",this.depthwiseKernel=null,this.pointwiseKernel=null,e.filters==null)throw new D("The `filters` configuration field is required by SeparableConv, but is unspecified.");if(e.kernelInitializer!=null||e.kernelRegularizer!=null||e.kernelConstraint!=null)throw new D("Fields kernelInitializer, kernelRegularizer and kernelConstraint are invalid for SeparableConv2D. Use depthwiseInitializer, depthwiseRegularizer, depthwiseConstraint, pointwiseInitializer, pointwiseRegularizer and pointwiseConstraint instead.");if(e.padding!=null&&e.padding!=="same"&&e.padding!=="valid")throw new D(`SeparableConv${this.rank}D supports only padding modes: 'same' and 'valid', but received ${JSON.stringify(e.padding)}`);this.depthMultiplier=e.depthMultiplier==null?1:e.depthMultiplier,this.depthwiseInitializer=Ut(e.depthwiseInitializer||this.DEFAULT_DEPTHWISE_INITIALIZER),this.depthwiseRegularizer=Gt(e.depthwiseRegularizer),this.depthwiseConstraint=le(e.depthwiseConstraint),this.pointwiseInitializer=Ut(e.depthwiseInitializer||this.DEFAULT_POINTWISE_INITIALIZER),this.pointwiseRegularizer=Gt(e.pointwiseRegularizer),this.pointwiseConstraint=le(e.pointwiseConstraint)}build(t){if(t=St(t),t.length<this.rank+2)throw new D(`Inputs to SeparableConv${this.rank}D should have rank ${this.rank+2}, but received input shape: ${JSON.stringify(t)}`);const e=this.dataFormat==="channelsFirst"?1:t.length-1;if(t[e]==null||t[e]<0)throw new D(`The channel dimension of the inputs should be defined, but found ${JSON.stringify(t[e])}`);const s=t[e],r=this.kernelSize.concat([s,this.depthMultiplier]),o=[];for(let a=0;a<this.rank;++a)o.push(1);o.push(s*this.depthMultiplier,this.filters);const i=!0;this.depthwiseKernel=this.addWeight("depthwise_kernel",r,"float32",this.depthwiseInitializer,this.depthwiseRegularizer,i,this.depthwiseConstraint),this.pointwiseKernel=this.addWeight("pointwise_kernel",o,"float32",this.pointwiseInitializer,this.pointwiseRegularizer,i,this.pointwiseConstraint),this.useBias?this.bias=this.addWeight("bias",[this.filters],"float32",this.biasInitializer,this.biasRegularizer,i,this.biasConstraint):this.bias=null,this.inputSpec=[new ie({ndim:this.rank+2,axes:{[e]:s}})],this.built=!0}call(t,e){return V(()=>{t=pt(t);let s;if(this.rank===1)throw new xt("1D separable convolution is not implemented yet.");return this.rank===2&&(this.dataFormat==="channelsFirst"&&(t=$t(t,[0,2,3,1])),s=I0(t,this.depthwiseKernel.read(),this.pointwiseKernel.read(),this.strides,this.padding,this.dilationRate,"NHWC")),this.useBias&&(s=Rn(s,this.bias.read(),this.dataFormat)),this.activation!=null&&(s=this.activation.apply(s)),this.dataFormat==="channelsFirst"&&(s=$t(s,[0,3,1,2])),s})}getConfig(){const t=super.getConfig();return delete t.rank,delete t.kernelInitializer,delete t.kernelRegularizer,delete t.kernelConstraint,t.depthwiseInitializer=qt(this.depthwiseInitializer),t.pointwiseInitializer=qt(this.pointwiseInitializer),t.depthwiseRegularizer=Ot(this.depthwiseRegularizer),t.pointwiseRegularizer=Ot(this.pointwiseRegularizer),t.depthwiseConstraint=ae(this.depthwiseConstraint),t.pointwiseConstraint=ae(this.pointwiseConstraint),t}}Fy.className="SeparableConv";class Oy extends Fy{constructor(t){super(2,t)}}Oy.className="SeparableConv2D";X(Oy);class pu extends po{constructor(t){super(1,t),pu.verifyArgs(t),this.inputSpec=[{ndim:3}]}getConfig(){const t=super.getConfig();return delete t.rank,delete t.dataFormat,t}static verifyArgs(t){if(typeof t.kernelSize!="number"&&!jf(t.kernelSize,"number",1,1))throw new D(`Conv1D expects config.kernelSize to be number or number[] with length 1, but received ${JSON.stringify(t.kernelSize)}.`)}}pu.className="Conv1D";X(pu);class My extends Ct{constructor(t){super(t),typeof t.cropping=="number"?this.cropping=[[t.cropping,t.cropping],[t.cropping,t.cropping]]:typeof t.cropping[0]=="number"?this.cropping=[[t.cropping[0],t.cropping[0]],[t.cropping[1],t.cropping[1]]]:this.cropping=t.cropping,this.dataFormat=t.dataFormat===void 0?"channelsLast":t.dataFormat,this.inputSpec=[{ndim:4}]}computeOutputShape(t){return this.dataFormat==="channelsFirst"?[t[0],t[1],t[2]-this.cropping[0][0]-this.cropping[0][1],t[3]-this.cropping[1][0]-this.cropping[1][1]]:[t[0],t[1]-this.cropping[0][0]-this.cropping[0][1],t[2]-this.cropping[1][0]-this.cropping[1][1],t[3]]}call(t,e){return V(()=>{if(t=pt(t),this.dataFormat==="channelsLast"){const s=_a(t,this.cropping[0][0],t.shape[1]-this.cropping[0][0]-this.cropping[0][1],2);return _a(s,this.cropping[1][0],t.shape[2]-this.cropping[1][1]-this.cropping[1][0],3)}else{const s=_a(t,this.cropping[0][0],t.shape[2]-this.cropping[0][0]-this.cropping[0][1],3);return _a(s,this.cropping[1][0],t.shape[3]-this.cropping[1][1]-this.cropping[1][0],4)}})}getConfig(){const t={cropping:this.cropping,dataFormat:this.dataFormat},e=super.getConfig();return Object.assign(t,e),t}}My.className="Cropping2D";X(My);class Ly extends Ct{constructor(t){super(t),this.DEFAULT_SIZE=[2,2],this.inputSpec=[{ndim:4}],this.size=t.size==null?this.DEFAULT_SIZE:t.size,this.dataFormat=t.dataFormat==null?"channelsLast":t.dataFormat,Qt(this.dataFormat),this.interpolation=t.interpolation==null?"nearest":t.interpolation,iA(this.interpolation)}computeOutputShape(t){if(this.dataFormat==="channelsFirst"){const e=t[2]==null?null:this.size[0]*t[2],s=t[3]==null?null:this.size[1]*t[3];return[t[0],t[1],e,s]}else{const e=t[1]==null?null:this.size[0]*t[1],s=t[2]==null?null:this.size[1]*t[2];return[t[0],e,s,t[3]]}}call(t,e){return V(()=>{let s=pt(t);const r=s.shape;if(this.dataFormat==="channelsFirst"){s=$t(s,[0,2,3,1]);const o=this.size[0]*r[2],i=this.size[1]*r[3],a=this.interpolation==="nearest"?rs.resizeNearestNeighbor(s,[o,i]):rs.resizeBilinear(s,[o,i]);return $t(a,[0,3,1,2])}else{const o=this.size[0]*r[1],i=this.size[1]*r[2];return this.interpolation==="nearest"?rs.resizeNearestNeighbor(s,[o,i]):rs.resizeBilinear(s,[o,i])}})}getConfig(){const t={size:this.size,dataFormat:this.dataFormat,interpolation:this.interpolation},e=super.getConfig();return Object.assign(t,e),t}}Ly.className="UpSampling2D";X(Ly);function _D(n,t,e=[1,1],s="valid",r,o){return V(()=>{r==null&&(r=Nn()),Qt(r);let i=ap(n,r);if(n.rank!==4)throw new D(`Input for depthwiseConv2d is required to be 4-D, but is instead ${n.rank}-D`);if(t.rank!==4)throw new D(`depthwiseKernel is required to be 4-D, but is instead ${t.rank}-D`);return i=jd(i,t,e,s==="same"?"same":"valid","NHWC",o),r==="channelsFirst"&&(i=$t(i,[0,3,1,2])),i})}class Py extends fu{constructor(t){super(2,t),this.depthwiseKernel=null,this.depthMultiplier=t.depthMultiplier==null?1:t.depthMultiplier,this.depthwiseInitializer=Ut(t.depthwiseInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.depthwiseConstraint=le(t.depthwiseConstraint),this.depthwiseRegularizer=Gt(t.depthwiseRegularizer)}build(t){if(t=St(t),t.length<4)throw new D(`Inputs to DepthwiseConv2D should have rank 4. Received input shape: ${JSON.stringify(t)}.`);const e=this.dataFormat==="channelsFirst"?1:3;if(t[e]==null||t[e]<0)throw new D(`The channel dimension of the inputs to DepthwiseConv2D should be defined, but is not (${t[e]}).`);const s=t[e],r=[this.kernelSize[0],this.kernelSize[1],s,this.depthMultiplier];this.depthwiseKernel=this.addWeight("depthwise_kernel",r,null,this.depthwiseInitializer,this.depthwiseRegularizer,!0,this.depthwiseConstraint),this.useBias?this.bias=this.addWeight("bias",[s*this.depthMultiplier],null,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint):this.bias=null,this.built=!0}call(t,e){return V(()=>{t=pt(t);let s=_D(t,this.depthwiseKernel.read(),this.strides,this.padding,this.dataFormat,null);return this.useBias&&(s=Rn(s,this.bias.read(),this.dataFormat)),this.activation!=null&&(s=this.activation.apply(s)),s})}computeOutputShape(t){t=St(t);const e=this.dataFormat==="channelsFirst"?t[2]:t[1],s=this.dataFormat==="channelsFirst"?t[3]:t[2],r=this.dataFormat==="channelsFirst"?t[1]*this.depthMultiplier:t[3]*this.depthMultiplier,o=In(e,this.kernelSize[0],this.padding,this.strides[0]),i=In(s,this.kernelSize[1],this.padding,this.strides[1]);return this.dataFormat==="channelsFirst"?[t[0],r,o,i]:[t[0],o,i,r]}getConfig(){const t=super.getConfig();return t.depthMultiplier=this.depthMultiplier,t.depthwiseInitializer=qt(this.depthwiseInitializer),t.depthwiseRegularizer=Ot(this.depthwiseRegularizer),t.depthwiseConstraint=ae(this.depthwiseRegularizer),t}}Py.className="DepthwiseConv2D";X(Py);function zy(n,t,e,s){if(Array.isArray(n)){if(t!=null||e!=null)throw new D("When inputs is an array, neither initialState or constants should be provided");s!=null&&(e=n.slice(n.length-s,n.length),n=n.slice(0,n.length-s)),n.length>1&&(t=n.slice(1,n.length)),n=n[0]}function r(o){return o==null||Array.isArray(o)?o:[o]}return t=r(t),e=r(e),{inputs:n,initialState:t,constants:e}}function By(n,t,e,s=!1,r,o,i=!1,a=!1){return V(()=>{const l=t.shape.length;if(l<3)throw new D(`Input should be at least 3D, but is ${l}D.`);const c=[1,0].concat(Sn(2,l));t=$t(t,c),i&&console.warn("Backend rnn(): the unroll = true option is not applicable to the imperative deeplearn.js backend."),r!=null&&(r=st(st(r,"bool"),"float32"),r.rank===l-1&&(r=Oe(r,-1)),r=$t(r,c)),s&&(t=dr(t,0),r!=null&&(r=dr(r,0)));const u=[];let h,d=e;const f=t.shape[0],p=fr(t);let m;r!=null&&(m=fr(r));for(let x=0;x<f;++x){const b=p[x],w=V(()=>n(b,d));if(r==null)h=w[0],d=w[1];else{const y=V(()=>{const v=m[x],$=ft(hn(v),v),N=J(_(w[0],v),_(d[0],$)),T=d.map((k,I)=>J(_(w[1][I],v),_(k,$)));return{output:N,newStates:T}});h=y.output,d=y.newStates}a&&u.push(h)}let g;return a&&(g=is(u,1)),[h,g,d]})}class Bs extends Ct{constructor(t){super(t);let e;if(t.cell==null)throw new D("cell property is missing for the constructor of RNN.");if(Array.isArray(t.cell)?e=new up({cells:t.cell}):e=t.cell,e.stateSize==null)throw new D("The RNN cell should have an attribute `stateSize` (tuple of integers, one integer per RNN state).");this.cell=e,this.returnSequences=t.returnSequences==null?!1:t.returnSequences,this.returnState=t.returnState==null?!1:t.returnState,this.goBackwards=t.goBackwards==null?!1:t.goBackwards,this._stateful=t.stateful==null?!1:t.stateful,this.unroll=t.unroll==null?!1:t.unroll,this.supportsMasking=!0,this.inputSpec=[new ie({ndim:3})],this.stateSpec=null,this.states_=null,this.numConstants=null,this.keptStates=[]}getStates(){if(this.states_==null){const t=Array.isArray(this.cell.stateSize)?this.cell.stateSize.length:1;return Sn(0,t).map(e=>null)}else return this.states_}setStates(t){this.states_=t}computeOutputShape(t){Sh(t)&&(t=t[0]),t=t;let e=this.cell.stateSize;Array.isArray(e)||(e=[e]);const s=e[0];let r;if(this.returnSequences?r=[t[0],t[1],s]:r=[t[0],s],this.returnState){const o=[];for(const i of e)o.push([t[0],i]);return[r].concat(o)}else return r}computeMask(t,e){return V(()=>{Array.isArray(e)&&(e=e[0]);const s=this.returnSequences?e:null;if(this.returnState){const r=this.states.map(o=>null);return[s].concat(r)}else return s})}get states(){if(this.states_==null){const t=Array.isArray(this.cell.stateSize)?this.cell.stateSize.length:1,e=[];for(let s=0;s<t;++s)e.push(null);return e}else return this.states_}set states(t){this.states_=t}build(t){if(this.numConstants!=null)throw new xt("Constants support is not implemented in RNN yet.");Sh(t)&&(t=t[0]),t=t;const e=this.stateful?t[0]:null,s=t.slice(2);this.inputSpec[0]=new ie({shape:[e,null,...s]});const r=[t[0]].concat(t.slice(2));this.cell.build(r);let o;if(Array.isArray(this.cell.stateSize)?o=this.cell.stateSize:o=[this.cell.stateSize],this.stateSpec!=null){if(!Et(this.stateSpec.map(i=>i.shape[i.shape.length-1]),o))throw new D(`An initialState was passed that is not compatible with cell.stateSize. Received stateSpec=${this.stateSpec}; However cell.stateSize is ${this.cell.stateSize}`)}else this.stateSpec=o.map(i=>new ie({shape:[null,i]}));this.stateful&&this.resetStates()}resetStates(t,e=!1){V(()=>{if(!this.stateful)throw new Fn("Cannot call resetStates() on an RNN Layer that is not stateful.");const s=this.inputSpec[0].shape[0];if(s==null)throw new D("If an RNN is stateful, it needs to know its batch size. Specify the batch size of your input tensors: \n- If using a Sequential model, specify the batch size by passing a `batchInputShape` option to your first layer.\n- If using the functional API, specify the batch size by passing a `batchShape` option to your Input layer.");if(this.states_==null)Array.isArray(this.cell.stateSize)?this.states_=this.cell.stateSize.map(r=>fe([s,r])):this.states_=[fe([s,this.cell.stateSize])];else if(t==null)yt(this.states_),this.keptStates!=null&&(yt(this.keptStates),this.keptStates=[]),Array.isArray(this.cell.stateSize)?this.states_=this.cell.stateSize.map(r=>fe([s,r])):this.states_[0]=fe([s,this.cell.stateSize]);else{if(Array.isArray(t)||(t=[t]),t.length!==this.states_.length)throw new D(`Layer ${this.name} expects ${this.states_.length} state(s), but it received ${t.length} state value(s). Input received: ${t}`);e===!0?this.keptStates.push(this.states_.slice()):yt(this.states_);for(let r=0;r<this.states_.length;++r){const o=t[r],i=Array.isArray(this.cell.stateSize)?this.cell.stateSize[r]:this.cell.stateSize,a=[s,i];if(!Et(o.shape,a))throw new D(`State ${r} is incompatible with layer ${this.name}: expected shape=${a}, received shape=${o.shape}`);this.states_[r]=o}}this.states_=this.states_.map(r=>zn(r.clone()))})}apply(t,e){let s=e==null?null:e.initialState,r=e==null?null:e.constants;e==null&&(e={});const o=zy(t,s,r,this.numConstants);t=o.inputs,s=o.initialState,r=o.constants;let i=[],a=[];if(s!=null){e.initialState=s,i=i.concat(s),this.stateSpec=[];for(const c of s)this.stateSpec.push(new ie({shape:c.shape}));a=a.concat(this.stateSpec)}if(r!=null&&(e.constants=r,i=i.concat(r),this.numConstants=r.length),i[0]instanceof Kn){const c=[t].concat(i),u=this.inputSpec.concat(a),h=this.inputSpec;this.inputSpec=u;const d=super.apply(c,e);return this.inputSpec=h,d}else return super.apply(t,e)}call(t,e){return V(()=>{const s=e==null?null:e.mask,r=e==null?null:e.training;let o=e==null?null:e.initialState;t=pt(t),o==null&&(this.stateful?o=this.states_:o=this.getInitialState(t));const i=Array.isArray(this.cell.stateSize)?this.cell.stateSize.length:1;if(o.length!==i)throw new D(`RNN Layer has ${i} state(s) but was passed ${o.length} initial state(s).`);this.unroll&&console.warn("Ignoring unroll = true for RNN layer, due to imperative backend.");const a={training:r},c=By((p,m)=>{const g=this.cell.call([p].concat(m),a);return[g[0],g.slice(1)]},t,o,this.goBackwards,s,null,this.unroll,this.returnSequences),u=c[0],h=c[1],d=c[2];this.stateful&&this.resetStates(d,r);const f=this.returnSequences?h:u;return this.returnState?[f].concat(d):f})}getInitialState(t){return V(()=>{let e=fe(t.shape);return e=ct(e,[1,2]),e=ua(e),Array.isArray(this.cell.stateSize)?this.cell.stateSize.map(s=>s>1?kh(e,[1,s]):e):this.cell.stateSize>1?[kh(e,[1,this.cell.stateSize])]:[e]})}get trainableWeights(){return this.trainable?this.cell.trainableWeights:[]}get nonTrainableWeights(){return this.trainable?this.cell.nonTrainableWeights:this.cell.weights}setFastWeightInitDuringBuild(t){super.setFastWeightInitDuringBuild(t),this.cell!=null&&this.cell.setFastWeightInitDuringBuild(t)}getConfig(){const t=super.getConfig(),e={returnSequences:this.returnSequences,returnState:this.returnState,goBackwards:this.goBackwards,stateful:this.stateful,unroll:this.unroll};this.numConstants!=null&&(e.numConstants=this.numConstants);const s=this.cell.getConfig();return this.getClassName()===Bs.className&&(e.cell={className:this.cell.getClassName(),config:s}),Object.assign(Object.assign(Object.assign({},s),t),e)}static fromConfig(t,e,s={}){const r=e.cell,o=Un(r,s);return new t(Object.assign(e,{cell:o}))}}Bs.className="RNN";X(Bs);class mu extends Ct{}class lp extends mu{constructor(t){super(t),this.DEFAULT_ACTIVATION="tanh",this.DEFAULT_KERNEL_INITIALIZER="glorotNormal",this.DEFAULT_RECURRENT_INITIALIZER="orthogonal",this.DEFAULT_BIAS_INITIALIZER="zeros",this.units=t.units,pe(this.units,"units"),this.activation=Es(t.activation==null?this.DEFAULT_ACTIVATION:t.activation),this.useBias=t.useBias==null?!0:t.useBias,this.kernelInitializer=Ut(t.kernelInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.recurrentInitializer=Ut(t.recurrentInitializer||this.DEFAULT_RECURRENT_INITIALIZER),this.biasInitializer=Ut(t.biasInitializer||this.DEFAULT_BIAS_INITIALIZER),this.kernelRegularizer=Gt(t.kernelRegularizer),this.recurrentRegularizer=Gt(t.recurrentRegularizer),this.biasRegularizer=Gt(t.biasRegularizer),this.kernelConstraint=le(t.kernelConstraint),this.recurrentConstraint=le(t.recurrentConstraint),this.biasConstraint=le(t.biasConstraint),this.dropout=Yr([1,Ns([0,t.dropout==null?0:t.dropout])]),this.recurrentDropout=Yr([1,Ns([0,t.recurrentDropout==null?0:t.recurrentDropout])]),this.dropoutFunc=t.dropoutFunc,this.stateSize=this.units,this.dropoutMask=null,this.recurrentDropoutMask=null}build(t){t=St(t),this.kernel=this.addWeight("kernel",[t[t.length-1],this.units],null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.recurrentKernel=this.addWeight("recurrent_kernel",[this.units,this.units],null,this.recurrentInitializer,this.recurrentRegularizer,!0,this.recurrentConstraint),this.useBias?this.bias=this.addWeight("bias",[this.units],null,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint):this.bias=null,this.built=!0}call(t,e){return V(()=>{if(t=t,t.length!==2)throw new D(`SimpleRNNCell expects 2 input Tensors, got ${t.length}.`);let s=t[1];t=t[0];const r=e.training==null?!1:e.training;0<this.dropout&&this.dropout<1&&this.dropoutMask==null&&(this.dropoutMask=Rs({ones:()=>hn(t),rate:this.dropout,training:r,dropoutFunc:this.dropoutFunc})),0<this.recurrentDropout&&this.recurrentDropout<1&&this.recurrentDropoutMask==null&&(this.recurrentDropoutMask=Rs({ones:()=>hn(s),rate:this.recurrentDropout,training:r,dropoutFunc:this.dropoutFunc}));let o;const i=this.dropoutMask,a=this.recurrentDropoutMask;i!=null?o=Wn(_(t,i),this.kernel.read()):o=Wn(t,this.kernel.read()),this.bias!=null&&(o=Rn(o,this.bias.read())),a!=null&&(s=_(s,a));let l=J(o,Wn(s,this.recurrentKernel.read()));return this.activation!=null&&(l=this.activation.apply(l)),[l,l]})}getConfig(){const t=super.getConfig(),e={units:this.units,activation:Ts(this.activation),useBias:this.useBias,kernelInitializer:qt(this.kernelInitializer),recurrentInitializer:qt(this.recurrentInitializer),biasInitializer:qt(this.biasInitializer),kernelRegularizer:Ot(this.kernelRegularizer),recurrentRegularizer:Ot(this.recurrentRegularizer),biasRegularizer:Ot(this.biasRegularizer),activityRegularizer:Ot(this.activityRegularizer),kernelConstraint:ae(this.kernelConstraint),recurrentConstraint:ae(this.recurrentConstraint),biasConstraint:ae(this.biasConstraint),dropout:this.dropout,recurrentDropout:this.recurrentDropout};return Object.assign(Object.assign({},t),e)}}lp.className="SimpleRNNCell";X(lp);class Vy extends Bs{constructor(t){t.cell=new lp(t),super(t)}call(t,e){return V(()=>{this.cell.dropoutMask!=null&&(yt(this.cell.dropoutMask),this.cell.dropoutMask=null),this.cell.recurrentDropoutMask!=null&&(yt(this.cell.recurrentDropoutMask),this.cell.recurrentDropoutMask=null);const s=e==null?null:e.mask,r=e==null?null:e.training,o=e==null?null:e.initialState;return super.call(t,{mask:s,training:r,initialState:o})})}static fromConfig(t,e){return new t(e)}}Vy.className="SimpleRNN";X(Vy);class cp extends mu{constructor(t){if(super(t),this.DEFAULT_ACTIVATION="tanh",this.DEFAULT_RECURRENT_ACTIVATION="hardSigmoid",this.DEFAULT_KERNEL_INITIALIZER="glorotNormal",this.DEFAULT_RECURRENT_INITIALIZER="orthogonal",this.DEFAULT_BIAS_INITIALIZER="zeros",t.resetAfter)throw new D("GRUCell does not support reset_after parameter set to true.");this.units=t.units,pe(this.units,"units"),this.activation=Es(t.activation===void 0?this.DEFAULT_ACTIVATION:t.activation),this.recurrentActivation=Es(t.recurrentActivation===void 0?this.DEFAULT_RECURRENT_ACTIVATION:t.recurrentActivation),this.useBias=t.useBias==null?!0:t.useBias,this.kernelInitializer=Ut(t.kernelInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.recurrentInitializer=Ut(t.recurrentInitializer||this.DEFAULT_RECURRENT_INITIALIZER),this.biasInitializer=Ut(t.biasInitializer||this.DEFAULT_BIAS_INITIALIZER),this.kernelRegularizer=Gt(t.kernelRegularizer),this.recurrentRegularizer=Gt(t.recurrentRegularizer),this.biasRegularizer=Gt(t.biasRegularizer),this.kernelConstraint=le(t.kernelConstraint),this.recurrentConstraint=le(t.recurrentConstraint),this.biasConstraint=le(t.biasConstraint),this.dropout=Yr([1,Ns([0,t.dropout==null?0:t.dropout])]),this.recurrentDropout=Yr([1,Ns([0,t.recurrentDropout==null?0:t.recurrentDropout])]),this.dropoutFunc=t.dropoutFunc,this.implementation=t.implementation,this.stateSize=this.units,this.dropoutMask=null,this.recurrentDropoutMask=null}build(t){t=St(t);const e=t[t.length-1];this.kernel=this.addWeight("kernel",[e,this.units*3],null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.recurrentKernel=this.addWeight("recurrent_kernel",[this.units,this.units*3],null,this.recurrentInitializer,this.recurrentRegularizer,!0,this.recurrentConstraint),this.useBias?this.bias=this.addWeight("bias",[this.units*3],null,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint):this.bias=null,this.built=!0}call(t,e){return V(()=>{if(t=t,t.length!==2)throw new D(`GRUCell expects 2 input Tensors (inputs, h, c), got ${t.length}.`);const s=e.training==null?!1:e.training;let r=t[1];t=t[0],0<this.dropout&&this.dropout<1&&this.dropoutMask==null&&(this.dropoutMask=Rs({ones:()=>hn(t),rate:this.dropout,training:s,count:3,dropoutFunc:this.dropoutFunc})),0<this.recurrentDropout&&this.recurrentDropout<1&&this.recurrentDropoutMask==null&&(this.recurrentDropoutMask=Rs({ones:()=>hn(r),rate:this.recurrentDropout,training:s,count:3,dropoutFunc:this.dropoutFunc}));const o=this.dropoutMask,i=this.recurrentDropoutMask;let a,l,c;0<this.dropout&&this.dropout<1&&(t=_(t,o[0]));let u=Wn(t,this.kernel.read());this.useBias&&(u=Rn(u,this.bias.read())),0<this.recurrentDropout&&this.recurrentDropout<1&&(r=_(r,i[0]));const h=this.recurrentKernel.read(),[d,f]=Qe(h,[2*this.units,this.units],h.rank-1),p=Wn(r,d),[m,g,x]=Qe(u,3,u.rank-1),[b,w]=Qe(p,2,p.rank-1);a=this.recurrentActivation.apply(J(m,b)),l=this.recurrentActivation.apply(J(g,w));const y=Wn(_(l,r),f);c=this.activation.apply(J(x,y));const v=J(_(a,r),_(J(1,Yt(a)),c));return[v,v]})}getConfig(){const t=super.getConfig(),e={units:this.units,activation:Ts(this.activation),recurrentActivation:Ts(this.recurrentActivation),useBias:this.useBias,kernelInitializer:qt(this.kernelInitializer),recurrentInitializer:qt(this.recurrentInitializer),biasInitializer:qt(this.biasInitializer),kernelRegularizer:Ot(this.kernelRegularizer),recurrentRegularizer:Ot(this.recurrentRegularizer),biasRegularizer:Ot(this.biasRegularizer),activityRegularizer:Ot(this.activityRegularizer),kernelConstraint:ae(this.kernelConstraint),recurrentConstraint:ae(this.recurrentConstraint),biasConstraint:ae(this.biasConstraint),dropout:this.dropout,recurrentDropout:this.recurrentDropout,implementation:this.implementation,resetAfter:!1};return Object.assign(Object.assign({},t),e)}}cp.className="GRUCell";X(cp);class Wy extends Bs{constructor(t){t.implementation===0&&console.warn("`implementation=0` has been deprecated, and now defaults to `implementation=1`. Please update your layer call."),t.cell=new cp(t),super(t)}call(t,e){return V(()=>{this.cell.dropoutMask!=null&&(yt(this.cell.dropoutMask),this.cell.dropoutMask=null),this.cell.recurrentDropoutMask!=null&&(yt(this.cell.recurrentDropoutMask),this.cell.recurrentDropoutMask=null);const s=e==null?null:e.mask,r=e==null?null:e.training,o=e==null?null:e.initialState;return super.call(t,{mask:s,training:r,initialState:o})})}static fromConfig(t,e){return e.implmentation===0&&(e.implementation=1),new t(e)}}Wy.className="GRU";X(Wy);class gu extends mu{constructor(t){super(t),this.DEFAULT_ACTIVATION="tanh",this.DEFAULT_RECURRENT_ACTIVATION="hardSigmoid",this.DEFAULT_KERNEL_INITIALIZER="glorotNormal",this.DEFAULT_RECURRENT_INITIALIZER="orthogonal",this.DEFAULT_BIAS_INITIALIZER="zeros",this.units=t.units,pe(this.units,"units"),this.activation=Es(t.activation===void 0?this.DEFAULT_ACTIVATION:t.activation),this.recurrentActivation=Es(t.recurrentActivation===void 0?this.DEFAULT_RECURRENT_ACTIVATION:t.recurrentActivation),this.useBias=t.useBias==null?!0:t.useBias,this.kernelInitializer=Ut(t.kernelInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.recurrentInitializer=Ut(t.recurrentInitializer||this.DEFAULT_RECURRENT_INITIALIZER),this.biasInitializer=Ut(t.biasInitializer||this.DEFAULT_BIAS_INITIALIZER),this.unitForgetBias=t.unitForgetBias,this.kernelRegularizer=Gt(t.kernelRegularizer),this.recurrentRegularizer=Gt(t.recurrentRegularizer),this.biasRegularizer=Gt(t.biasRegularizer),this.kernelConstraint=le(t.kernelConstraint),this.recurrentConstraint=le(t.recurrentConstraint),this.biasConstraint=le(t.biasConstraint),this.dropout=Yr([1,Ns([0,t.dropout==null?0:t.dropout])]),this.recurrentDropout=Yr([1,Ns([0,t.recurrentDropout==null?0:t.recurrentDropout])]),this.dropoutFunc=t.dropoutFunc,this.implementation=t.implementation,this.stateSize=[this.units,this.units],this.dropoutMask=null,this.recurrentDropoutMask=null}build(t){var e;t=St(t);const s=t[t.length-1];this.kernel=this.addWeight("kernel",[s,this.units*4],null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.recurrentKernel=this.addWeight("recurrent_kernel",[this.units,this.units*4],null,this.recurrentInitializer,this.recurrentRegularizer,!0,this.recurrentConstraint);let r;if(this.useBias){if(this.unitForgetBias){const o=this.biasInitializer,i=this.units;r=new(e=class extends fn{apply(l,c){const u=o.apply([i]),h=new Xf().apply([i]),d=o.apply([i*2]);return Rm(Rm(u,h),d)}},e.className="CustomInit",e)}else r=this.biasInitializer;this.bias=this.addWeight("bias",[this.units*4],null,r,this.biasRegularizer,!0,this.biasConstraint)}else this.bias=null;this.built=!0}call(t,e){return V(()=>{const s=e.training==null?!1:e.training;if(t=t,t.length!==3)throw new D(`LSTMCell expects 3 input Tensors (inputs, h, c), got ${t.length}.`);let r=t[1];const o=t[2];t=t[0],0<this.dropout&&this.dropout<1&&this.dropoutMask==null&&(this.dropoutMask=Rs({ones:()=>hn(t),rate:this.dropout,training:s,count:4,dropoutFunc:this.dropoutFunc})),0<this.recurrentDropout&&this.recurrentDropout<1&&this.recurrentDropoutMask==null&&(this.recurrentDropoutMask=Rs({ones:()=>hn(r),rate:this.recurrentDropout,training:s,count:4,dropoutFunc:this.dropoutFunc}));const i=this.dropoutMask,a=this.recurrentDropoutMask;let l,c,u,h;0<this.dropout&&this.dropout<1&&(t=_(t,i[0]));let d=Wn(t,this.kernel.read());0<this.recurrentDropout&&this.recurrentDropout<1&&(r=_(r,a[0])),d=J(d,Wn(r,this.recurrentKernel.read())),this.useBias&&(d=Rn(d,this.bias.read()));const[f,p,m,g]=Qe(d,4,d.rank-1);l=this.recurrentActivation.apply(f),c=this.recurrentActivation.apply(p),u=J(_(c,o),_(l,this.activation.apply(m))),h=this.recurrentActivation.apply(g);const x=_(h,this.activation.apply(u));return[x,x,u]})}getConfig(){const t=super.getConfig(),e={units:this.units,activation:Ts(this.activation),recurrentActivation:Ts(this.recurrentActivation),useBias:this.useBias,kernelInitializer:qt(this.kernelInitializer),recurrentInitializer:qt(this.recurrentInitializer),biasInitializer:qt(this.biasInitializer),unitForgetBias:this.unitForgetBias,kernelRegularizer:Ot(this.kernelRegularizer),recurrentRegularizer:Ot(this.recurrentRegularizer),biasRegularizer:Ot(this.biasRegularizer),activityRegularizer:Ot(this.activityRegularizer),kernelConstraint:ae(this.kernelConstraint),recurrentConstraint:ae(this.recurrentConstraint),biasConstraint:ae(this.biasConstraint),dropout:this.dropout,recurrentDropout:this.recurrentDropout,implementation:this.implementation};return Object.assign(Object.assign({},t),e)}}gu.className="LSTMCell";X(gu);class Uy extends Bs{constructor(t){t.implementation===0&&console.warn("`implementation=0` has been deprecated, and now defaults to `implementation=1`. Please update your layer call."),t.cell=new gu(t),super(t)}call(t,e){return V(()=>{this.cell.dropoutMask!=null&&(yt(this.cell.dropoutMask),this.cell.dropoutMask=null),this.cell.recurrentDropoutMask!=null&&(yt(this.cell.recurrentDropoutMask),this.cell.recurrentDropoutMask=null);const s=e==null?null:e.mask,r=e==null?null:e.training,o=e==null?null:e.initialState;return super.call(t,{mask:s,training:r,initialState:o})})}static fromConfig(t,e){return e.implmentation===0&&(e.implementation=1),new t(e)}}Uy.className="LSTM";X(Uy);class up extends mu{constructor(t){super(t),this.cells=t.cells}get stateSize(){const t=[];for(const e of this.cells.slice().reverse())Array.isArray(e.stateSize)?t.push(...e.stateSize):t.push(e.stateSize);return t}call(t,e){return V(()=>{t=t;let s=t.slice(1);const r=[];for(const a of this.cells.slice().reverse())Array.isArray(a.stateSize)?r.push(s.splice(0,a.stateSize.length)):r.push(s.splice(0,1));r.reverse();const o=[];let i;for(let a=0;a<this.cells.length;++a){const l=this.cells[a];s=r[a],a===0?i=[t[0]].concat(s):i=[i[0]].concat(s),i=l.call(i,e),o.push(i.slice(1))}s=[];for(const a of o.slice().reverse())s.push(...a);return[i[0]].concat(s)})}build(t){Sh(t)&&(t=t[0]),t=t;let e;this.cells.forEach((s,r)=>{tr(`RNNCell_${r}`,()=>{s.build(t),Array.isArray(s.stateSize)?e=s.stateSize[0]:e=s.stateSize,t=[t[0],e]})}),this.built=!0}getConfig(){const t=super.getConfig(),e=o=>({className:o.getClassName(),config:o.getConfig()}),r={cells:this.cells.map(e)};return Object.assign(Object.assign({},t),r)}static fromConfig(t,e,s={}){const r=[];for(const o of e.cells)r.push(Un(o,s));return new t({cells:r})}get trainableWeights(){if(!this.trainable)return[];const t=[];for(const e of this.cells)t.push(...e.trainableWeights);return t}get nonTrainableWeights(){const t=[];for(const e of this.cells)t.push(...e.nonTrainableWeights);if(!this.trainable){const e=[];for(const s of this.cells)e.push(...s.trainableWeights);return e.concat(t)}return t}getWeights(){const t=[];for(const e of this.cells)t.push(...e.weights);return Nh(t)}setWeights(t){const e=[];for(const s of this.cells){const r=s.weights.length,o=t.splice(r);for(let i=0;i<s.weights.length;++i)e.push([s.weights[i],o[i]])}np(e)}}up.className="StackedRNNCells";X(up);function Rs(n){const{ones:t,rate:e,training:s=!1,count:r=1,dropoutFunc:o}=n,i=()=>o!=null?o(t(),e):Fb(t(),e),a=()=>da(i,t,s);return!r||r<=1?zn(a().clone()):Array(r).fill(void 0).map(a).map(c=>zn(c.clone()))}var FD=function(n,t){var e={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&t.indexOf(s)<0&&(e[s]=n[s]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(n);r<s.length;r++)t.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(n,s[r])&&(e[s[r]]=n[s[r]]);return e};class Gy extends Bs{constructor(t){if(t.unroll)throw new xt("Unrolling is not possible with convolutional RNNs.");if(Array.isArray(t.cell))throw new xt("It is not possible at the moment to stack convolutional cells.");super(t),this.inputSpec=[new ie({ndim:5})]}call(t,e){return V(()=>{if(this.cell.dropoutMask!=null&&(yt(this.cell.dropoutMask),this.cell.dropoutMask=null),this.cell.recurrentDropoutMask!=null&&(yt(this.cell.recurrentDropoutMask),this.cell.recurrentDropoutMask=null),e&&e.constants)throw new D("ConvRNN2D cell does not support constants");const s=e==null?null:e.mask,r=e==null?null:e.training,o=e==null?null:e.initialState;return super.call(t,{mask:s,training:r,initialState:o})})}computeOutputShape(t){let e=this.computeSingleOutputShape(t);return this.returnSequences||(e=[e[0],...e.slice(2)]),this.returnState&&(e=[e,...Array(2).fill([t[0],...e.slice(-3)])]),e}getInitialState(t){return V(()=>{const{stateSize:e}=this.cell,s=t.shape,r=this.computeSingleOutputShape(s),o=[r[0],...r.slice(2)],i=fe(o);return Array.isArray(e)?Array(e.length).fill(i):[i]})}resetStates(t,e=!1){V(()=>{if(!this.stateful)throw new Fn("Cannot call resetStates() on an RNN Layer that is not stateful.");const s=this.inputSpec[0].shape,r=this.computeSingleOutputShape(s),o=[r[0],...r.slice(2)];if(s[0]==null)throw new D("If an RNN is stateful, it needs to know its batch size. Specify the batch size of your input tensors: \n- If using a Sequential model, specify the batch size by passing a `batchInputShape` option to your first layer.\n- If using the functional API, specify the batch size by passing a `batchShape` option to your Input layer.");if(this.getStates()==null)Array.isArray(this.cell.stateSize)?this.states_=this.cell.stateSize.map(()=>fe(o)):this.states_=[fe(o)];else if(t==null)yt(this.states_),this.keptStates!=null&&(yt(this.keptStates),this.keptStates=[]),Array.isArray(this.cell.stateSize)?this.states_=this.cell.stateSize.map(()=>fe(o)):this.states_[0]=fe(o);else{if(Array.isArray(t)||(t=[t]),t.length!==this.states_.length)throw new D(`Layer ${this.name} expects ${this.states_.length} state(s), but it received ${t.length} state value(s). Input received: ${t}`);e?this.keptStates.push(this.states_.slice()):yt(this.states_);for(let a=0;a<this.states_.length;++a){const l=t[a],c=o;if(!Et(l.shape,c))throw new D(`State ${a} is incompatible with layer ${this.name}: expected shape=${c}, received shape=${l.shape}`);this.states_[a]=l}}this.states_=this.states_.map(a=>zn(a.clone()))})}computeSingleOutputShape(t){const{dataFormat:e,filters:s,kernelSize:r,padding:o,strides:i,dilationRate:a}=this.cell,l=e==="channelsFirst",c=t[l?3:2],u=t[l?4:3],h=In(c,r[0],o,i[0],a[0]),d=In(u,r[1],o,i[1],a[1]);return[...t.slice(0,2),...l?[s,h,d]:[h,d,s]]}}Gy.className="ConvRNN2D";class hp extends gu{constructor(t){const{filters:e,kernelSize:s,strides:r,padding:o,dataFormat:i,dilationRate:a}=t;super(Object.assign(Object.assign({},t),{units:e})),this.filters=e,pe(this.filters,"filters"),this.kernelSize=Ur(s,2,"kernelSize"),this.kernelSize.forEach(l=>pe(l,"kernelSize")),this.strides=Ur(r||1,2,"strides"),this.strides.forEach(l=>pe(l,"strides")),this.padding=o||"valid",nn(this.padding),this.dataFormat=i||"channelsLast",Qt(this.dataFormat),this.dilationRate=Ur(a||1,2,"dilationRate"),this.dilationRate.forEach(l=>pe(l,"dilationRate"))}build(t){var e;t=St(t);const s=this.dataFormat==="channelsFirst"?1:t.length-1;if(t[s]==null)throw new D(`The channel dimension of the input should be defined. Found ${t[s]}`);const r=t[s],o=4,i=this.kernelSize.concat([r,this.filters*o]);this.kernel=this.addWeight("kernel",i,null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint);const a=this.kernelSize.concat([this.filters,this.filters*o]);if(this.recurrentKernel=this.addWeight("recurrent_kernel",a,null,this.recurrentInitializer,this.recurrentRegularizer,!0,this.recurrentConstraint),this.useBias){let l;if(this.unitForgetBias){const c=this.biasInitializer,u=this.filters;l=new(e=class extends fn{apply(d,f){const p=c.apply([u]),m=Ps([u]),g=c.apply([u*2]);return Kf([p,m,g])}},e.className="CustomInit",e)}else l=this.biasInitializer;this.bias=this.addWeight("bias",[this.filters*o],null,l,this.biasRegularizer,!0,this.biasConstraint)}this.built=!0}call(t,e){return V(()=>{if(t.length!==3)throw new D(`ConvLSTM2DCell expects 3 input Tensors (inputs, h, c), got ${t.length}.`);const s=e.training||!1,r=t[0],o=t[1],i=t[2],a=4;0<this.dropout&&this.dropout<1&&this.dropoutMask==null&&(this.dropoutMask=Rs({ones:()=>hn(r),rate:this.dropout,training:s,count:a,dropoutFunc:this.dropoutFunc}));const l=this.dropoutMask,c=(j,K,Y)=>!K||!K[Y]?j:_(K[Y],j);let u=c(r,l,0),h=c(r,l,1),d=c(r,l,2),f=c(r,l,3);0<this.recurrentDropout&&this.recurrentDropout<1&&this.recurrentDropoutMask==null&&(this.recurrentDropoutMask=Rs({ones:()=>hn(o),rate:this.recurrentDropout,training:s,count:a,dropoutFunc:this.dropoutFunc}));const p=this.recurrentDropoutMask;let m=c(o,p,0),g=c(o,p,1),x=c(o,p,2),b=c(o,p,3);const w=3,[y,v,$,N]=Qe(this.kernel.read(),a,w),[T,k,I,C]=this.useBias?Qe(this.bias.read(),a):[null,null,null,null];u=this.inputConv(u,y,T,this.padding),h=this.inputConv(h,v,k,this.padding),d=this.inputConv(d,$,I,this.padding),f=this.inputConv(f,N,C,this.padding);const[R,A,O,M]=Qe(this.recurrentKernel.read(),a,w);m=this.recurrentConv(m,R),g=this.recurrentConv(g,A),x=this.recurrentConv(x,O),b=this.recurrentConv(b,M);const z=this.recurrentActivation.apply(J(u,m)),U=this.recurrentActivation.apply(J(h,g)),B=J(_(U,i),_(z,this.activation.apply(J(d,x)))),G=_(this.recurrentActivation.apply(J(f,b)),this.activation.apply(B));return[G,G,B]})}getConfig(){const t=super.getConfig(),{units:e}=t,s=FD(t,["units"]),r={filters:this.filters,kernelSize:this.kernelSize,padding:this.padding,dataFormat:this.dataFormat,dilationRate:this.dilationRate,strides:this.strides};return Object.assign(Object.assign({},s),r)}inputConv(t,e,s,r){const o=ur(t,e,this.strides,r||"valid",this.dataFormat==="channelsFirst"?"NCHW":"NHWC",this.dilationRate);return s?Rn(o,s,this.dataFormat):o}recurrentConv(t,e){return ur(t,e,1,"same",this.dataFormat==="channelsFirst"?"NCHW":"NHWC")}}hp.className="ConvLSTM2DCell";X(hp);class Hy extends Gy{constructor(t){const e=new hp(t);super(Object.assign(Object.assign({},t),{cell:e}))}static fromConfig(t,e){return new t(e)}}Hy.className="ConvLSTM2D";X(Hy);class dp extends Ct{constructor(t){super(t),this.rate=Math.max(Math.min(t.rate,1),0),this.noiseShape=t.noiseShape,this.seed=t.seed,this.supportsMasking=!0}getNoiseShape(t){if(this.noiseShape==null)return this.noiseShape;const e=t.shape,s=[];for(let r=0;r<this.noiseShape.length;++r)s.push(this.noiseShape[r]==null?e[r]:this.noiseShape[r]);return s}call(t,e){return V(()=>{this.invokeCallHook(t,e);const s=pt(t);if(0<this.rate&&this.rate<1){const r=e.training==null?!1:e.training,o=this.getNoiseShape(s);return da(()=>Fb(s,this.rate,o,this.seed),()=>s,r)}return t})}getConfig(){const t={rate:this.rate,noiseShape:this.noiseShape,seed:this.seed},e=super.getConfig();return Object.assign(t,e),t}dispose(){return super.dispose()}}dp.className="Dropout";X(dp);class qy extends dp{constructor(t){super(t),this.inputSpec=[{ndim:3}]}getNoiseShape(t){const e=t.shape;return[e[0],1,e[2]]}}qy.className="SpatialDropout1D";X(qy);class jy extends Ct{constructor(t){if(super(t),this.activation=null,this.useBias=!0,this.kernel=null,this.bias=null,this.DEFAULT_KERNEL_INITIALIZER="glorotNormal",this.DEFAULT_BIAS_INITIALIZER="zeros",t.batchInputShape==null&&t.inputShape==null&&t.inputDim!=null){let e=null;t.batchSize!=null&&(e=t.batchSize),this.batchInputShape=[e,t.inputDim]}this.units=t.units,pe(this.units,"units"),this.activation=Es(t.activation),t.useBias!=null&&(this.useBias=t.useBias),this.kernelInitializer=Ut(t.kernelInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.biasInitializer=Ut(t.biasInitializer||this.DEFAULT_BIAS_INITIALIZER),this.kernelConstraint=le(t.kernelConstraint),this.biasConstraint=le(t.biasConstraint),this.kernelRegularizer=Gt(t.kernelRegularizer),this.biasRegularizer=Gt(t.biasRegularizer),this.activityRegularizer=Gt(t.activityRegularizer),this.supportsMasking=!0,this.inputSpec=[{minNDim:2}]}build(t){t=St(t);const e=t[t.length-1];this.kernel==null&&(this.kernel=this.addWeight("kernel",[e,this.units],null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.useBias&&(this.bias=this.addWeight("bias",[this.units],null,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint))),this.inputSpec=[{minNDim:2,axes:{[-1]:e}}],this.built=!0}computeOutputShape(t){t=St(t);const e=t.slice();return e[e.length-1]=this.units,e}call(t,e){return V(()=>{this.invokeCallHook(t,e);const s=pt(t),r=Nb(this.activation.getClassName());let o;return r!=null?o=Wn(s,this.kernel.read(),r,this.bias?this.bias.read():null):(o=Wn(s,this.kernel.read()),this.bias!=null&&(o=Rn(o,this.bias.read())),this.activation!=null&&(o=this.activation.apply(o))),o})}getConfig(){const t={units:this.units,activation:Ts(this.activation),useBias:this.useBias,kernelInitializer:qt(this.kernelInitializer),biasInitializer:qt(this.biasInitializer),kernelRegularizer:Ot(this.kernelRegularizer),biasRegularizer:Ot(this.biasRegularizer),activityRegularizer:Ot(this.activityRegularizer),kernelConstraint:ae(this.kernelConstraint),biasConstraint:ae(this.biasConstraint)},e=super.getConfig();return Object.assign(t,e),t}}jy.className="Dense";X(jy);class Ky extends Ct{constructor(t){t=t||{},super(t),this.inputSpec=[{minNDim:3}],this.dataFormat=t.dataFormat}computeOutputShape(t){t=St(t);for(const e of t.slice(1))if(e==null)throw new D(`The shape of the input to "Flatten" is not fully defined (got ${t.slice(1)}). Make sure to pass a complete "input_shape" or "batch_input_shape" argument to the first layer in your model.`);return[t[0],Is(t,1)]}call(t,e){return V(()=>{this.invokeCallHook(t,e);let s=pt(t);if(this.dataFormat==="channelsFirst"&&s.rank>1){const r=[0];for(let o=2;o<s.rank;++o)r.push(o);r.push(1),s=$t(s,r)}return dA(s)})}getConfig(){const t={};this.dataFormat!=null&&(t.dataFormat=this.dataFormat);const e=super.getConfig();return Object.assign(t,e),t}}Ky.className="Flatten";X(Ky);class Xy extends Ct{constructor(t){super(t),this.supportsMasking=!0,this.activation=Es(t.activation)}call(t,e){return V(()=>{this.invokeCallHook(t,e);const s=pt(t);return this.activation.apply(s)})}getConfig(){const t={activation:Ts(this.activation)},e=super.getConfig();return Object.assign(t,e),t}}Xy.className="Activation";X(Xy);class Yy extends Ct{constructor(t){super(t),this.n=t.n,this.inputSpec=[{ndim:2}]}computeOutputShape(t){return[t[0],this.n,t[1]]}call(t,e){return V(()=>(t=pt(t),uA(t,this.n)))}getConfig(){const t={n:this.n},e=super.getConfig();return Object.assign(t,e),t}}Yy.className="RepeatVector";X(Yy);class Zy extends Ct{constructor(t){super(t),this.targetShape=t.targetShape;for(let e=0;e<this.targetShape.length;++e)this.isUnknown(this.targetShape[e])&&(this.targetShape[e]=null)}isUnknown(t){return t<0||t==null}fixUnknownDimension(t,e){const s="Total size of new array must be unchanged.",r=e.slice();let o=1,i=null;for(let l=0;l<r.length;++l){const c=r[l];if(this.isUnknown(c))if(i===null)i=l;else throw new D("Can only specifiy one unknown dimension.");else o*=c}const a=Is(t);if(i!==null){if(o===0||a%o!==0)throw new D(s);r[i]=a/o}else if(a!==o)throw new D(s);return r}computeOutputShape(t){let e=!1;for(let s=0;s<t.length;++s)if(this.isUnknown(t[s])){e=!0;break}return e?t.slice(0,1).concat(this.targetShape):t.slice(0,1).concat(this.fixUnknownDimension(t.slice(1),this.targetShape))}call(t,e){return V(()=>{this.invokeCallHook(t,e);const s=pt(t),r=s.shape,o=r.slice(0,1).concat(this.fixUnknownDimension(r.slice(1),this.targetShape));return L(s,o)})}getConfig(){const t={targetShape:this.targetShape},e=super.getConfig();return Object.assign(t,e),t}}Zy.className="Reshape";X(Zy);class Jy extends Ct{constructor(t){if(super(t),t.dims==null)throw new Error("Required configuration field `dims` is missing during Permute constructor call.");if(!Array.isArray(t.dims))throw new Error(`Permute constructor requires \`dims\` to be an Array, but received ${t.dims} instead.`);const e=Sn(1,t.dims.length+1);if(!Et(t.dims.slice().sort(),e))throw new Error("Invalid permutation `dims`: "+JSON.stringify(t.dims)+" `dims` must contain consecutive integers starting from 1.");this.dims=t.dims,this.dimsIncludingBatch=[0].concat(this.dims),this.inputSpec=[new ie({ndim:this.dims.length+1})]}computeOutputShape(t){t=St(t);const e=t.slice();return this.dims.forEach((s,r)=>{e[r+1]=t[s]}),e}call(t,e){return $t(pt(t),this.dimsIncludingBatch)}getConfig(){const t={dims:this.dims},e=super.getConfig();return Object.assign(t,e),t}}Jy.className="Permute";X(Jy);class Qy extends Ct{constructor(t){super(t??{}),this.supportsMasking=!0,t!=null?this.maskValue=t.maskValue==null?0:t.maskValue:this.maskValue=0}computeOutputShape(t){return t}getConfig(){const t=super.getConfig(),e={maskValue:this.maskValue};return Object.assign(e,t),e}computeMask(t,e){const s=pt(t);return xh(gl(s,this.maskValue),-1)}call(t,e){return V(()=>{this.invokeCallHook(t,e);const s=pt(t),i=xh(gl(s,this.maskValue),-1,!0);return _(s,st(i,s.dtype))})}}Qy.className="Masking";X(Qy);class t1 extends Ct{constructor(t){if(super(t),this.embeddings=null,this.DEFAULT_EMBEDDINGS_INITIALIZER="randomUniform",t.batchInputShape==null&&t.inputShape==null){let e=null;t.batchSize!=null&&(e=t.batchSize),t.inputLength==null?this.batchInputShape=[e,null]:this.batchInputShape=[e].concat(At(t.inputLength))}this.inputDim=t.inputDim,pe(this.inputDim,"inputDim"),this.outputDim=t.outputDim,pe(this.outputDim,"outputDim"),this.embeddingsInitializer=Ut(t.embeddingsInitializer||this.DEFAULT_EMBEDDINGS_INITIALIZER),this.embeddingsRegularizer=Gt(t.embeddingsRegularizer),this.activityRegularizer=Gt(t.activityRegularizer),this.embeddingsConstraint=le(t.embeddingsConstraint),this.maskZero=t.maskZero,this.supportsMasking=t.maskZero,this.inputLength=t.inputLength}build(t){this.embeddings=this.addWeight("embeddings",[this.inputDim,this.outputDim],this.dtype,this.embeddingsInitializer,this.embeddingsRegularizer,!0,this.embeddingsConstraint),this.built=!0}warnOnIncompatibleInputShape(t){}computeMask(t,e){return V(()=>this.maskZero?(t=pt(t),gl(t,kt(t))):null)}computeOutputShape(t){if(t=St(t),this.inputLength==null)return[...t,this.outputDim];const e=At(this.inputLength);if(e.length!==t.length-1)throw new D(`"inputLength" is ${this.inputLength}, but received input shape has shape ${t}`);{let s=0;for(let r=0;r<e.length;++r){const o=e[r],i=t[r+1];if(o!=null&&i!=null&&o!==i)throw new D(`"inputLength" is ${this.inputLength}, but received input shape has shape ${t}`);o==null&&(e[s]=i),s++}}return[t[0],...e,this.outputDim]}call(t,e){return V(()=>{this.invokeCallHook(t,e);let s=pt(t);s.dtype!=="int32"&&(s=Vn(s,"int32"));const r=_b(this.embeddings.read(),L(s,[s.size]));return L(r,St(this.computeOutputShape(s.shape)))})}getConfig(){const t={inputDim:this.inputDim,outputDim:this.outputDim,embeddingsInitializer:qt(this.embeddingsInitializer),embeddingsRegularizer:Ot(this.embeddingsRegularizer),activityRegularizer:Ot(this.activityRegularizer),embeddingsConstraint:ae(this.embeddingsConstraint),maskZero:this.maskZero,inputLength:this.inputLength},e=super.getConfig();return Object.assign(t,e),t}}t1.className="Embedding";X(t1);class Ir extends Ct{constructor(t){super(t||{}),this.supportsMasking=!0}mergeFunction(t){throw new xt}computeElementwiseOpOutputShape(t,e){if(t==null||e==null)return null;if(t.length<e.length)return this.computeElementwiseOpOutputShape(e,t);if(e.length===0)return t;const s=t.slice(0,t.length-e.length);for(let r=0;r<e.length;++r){const o=t[t.length-e.length+r],i=e[r];if(o==null||i==null||o<0||i<0)s.push(null);else if(o===1)s.push(i);else if(i===1)s.push(o);else{if(o!==i)throw new D("Operands could not be broadcast together with shapes "+JSON.stringify(t)+" "+JSON.stringify(e));s.push(o)}}return s}build(t){if(Array.isArray(t)&&!Array.isArray(t[0])&&(t=[St(t)]),t=t,t.length<2)throw new D(`A merge layer should be called on an Array of at least 2 inputs. Got ${t.length} input(s).`);let e=[];for(const o of t)o!=null&&o[0]!==null&&e.push(o[0]);if(e=ks(e),e.length>1)throw new D(`Can not merge tensors with different batch sizes. Got tensors with shapes: ${JSON.stringify(t)}.`);let s=t[0]==null?null:t[0].slice(1);for(let o=1;o<t.length;++o){const i=t[o]==null?null:t[o].slice(1);s=this.computeElementwiseOpOutputShape(s,i)}const r=t.map(o=>o.length);t.indexOf(null)===-1&&ks(r).length===1?this.reshapeRequired=!1:this.reshapeRequired=!0}call(t,e){return V(()=>{if(t=t,this.reshapeRequired){const s=[],r=t.map(o=>o.rank);if(r.indexOf(null)===-1){const o=Ns(r);for(let i of t){const a=i.rank;for(let l=0;l<o-a;++l)i=ua(i,1);s.push(i)}return this.mergeFunction(s)}else{let o=!1;for(const l of t){const c=l.rank;if(c==null){const u=l.shape,h=u[0],d=u.slice(1).concat([h]);let f=L(l,[h].concat(Is(u.slice(1))));f=$t(f,[1,0]),f=L(f,d),s.push(f),o=!0}else if(c>1){const u=Sn(1,c).concat([0]);s.push($t(l,u)),o=!0}else s.push(l)}let i=this.mergeFunction(s);const a=i.rank;if(o){if(a==null){const l=i.shape,c=l.length,u=l[c-1],h=[u].concat(l.slice(0,l.length-1));i=L($t(L(i,[-1,u]),[1,0]),h)}else if(a>1){const l=[a-1].concat(Sn(0,a-1));i=$t(i,l)}}return i}}else return this.mergeFunction(t)})}computeOutputShape(t){t=t;let e;t[0]==null?e=null:e=t[0].slice(1);for(let r=1;r<t.length;++r){const o=t[r]==null?null:t[r].slice(1);e=this.computeElementwiseOpOutputShape(e,o)}let s=[];for(const r of t)r!=null&&r[0]!==null&&s.push(r[0]);return s=ks(s),s.length===1?e=s.concat(e):e=[null].concat(e),e}computeMask(t,e){return V(()=>{if(e==null)return null;if(!Array.isArray(e))throw new D("`mask` should be an Array");if(!Array.isArray(t))throw new D("`inputs` should be an Array");if(e.length!==t.length)throw new D(`The Array 'inputs' and 'mask' are expected to have the same length, but have different lengths (${t.length} vs ${e.length})`);if(e.every(r=>r==null))return null;e=e.map(r=>r==null?r:Oe(r,0));let s=e[0];for(let r=1;r<e.length-1;++r)s=os(s,e[r]);return s})}}class e1 extends Ir{constructor(t){super(t)}mergeFunction(t){return V(()=>{let e=t[0].clone();for(let s=1;s<t.length;++s)e=J(e,t[s]);return e})}}e1.className="Add";X(e1);class n1 extends Ir{constructor(t){super(t)}mergeFunction(t){return V(()=>{let e=t[0].clone();for(let s=1;s<t.length;++s)e=_(e,t[s]);return e})}}n1.className="Multiply";X(n1);class s1 extends Ir{constructor(t){super(t)}mergeFunction(t){return V(()=>{let e=t[0].clone();for(let s=1;s<t.length;++s)e=J(e,t[s]);return _(1/t.length,e)})}}s1.className="Average";X(s1);class r1 extends Ir{constructor(t){super(t)}mergeFunction(t){return V(()=>{let e=t[0];for(let s=1;s<t.length;++s)e=Ls(e,t[s]);return e})}}r1.className="Maximum";X(r1);class o1 extends Ir{constructor(t){super(t)}mergeFunction(t){return V(()=>{let e=t[0];for(let s=1;s<t.length;++s)e=qo(e,t[s]);return e})}}o1.className="Minimum";X(o1);class i1 extends Ir{constructor(t){super(t),this.DEFAULT_AXIS=-1,t==null&&(t={}),this.axis=t.axis==null?this.DEFAULT_AXIS:t.axis,this.supportsMasking=!0,this.reshapeRequired=!1}build(t){if(!(Array.isArray(t)&&Array.isArray(t[0]))||t.length===1)throw new D("A `Concatenate` layer should be called on a list of at least 2 inputs");t=t;let e=!0;for(const r of t)if(r!=null){e=!1;break}if(e)return;const s=[];for(let r=0;r<t.length;++r){const o=t[r].slice();o.splice(this.axis,1);let i=!1;for(const a of s)if(Et(a,o)){i=!0;break}i||s.push(o)}if(s.length>1)throw new D("A `Concatenate` layer requires inputs with matching shapes except for the concat axis. Got input shapes: "+JSON.stringify(t))}mergeFunction(t){return V(()=>Kf(t,this.axis))}computeOutputShape(t){if(!(Array.isArray(t)&&Array.isArray(t[0])))throw new D("A `Concatenate` layer should be called on a list of inputs.");const e=t,s=e[0].slice(),r=this.axis<0?s.length+this.axis:this.axis;for(const o of e.slice(1)){if(s[r]==null||o[r]==null){s[r]=null;break}s[r]+=o[r]}return s}computeMask(t,e){if(e==null)return null;if(!Array.isArray(e))throw new D("`mask` should be an array for Concatenate");if(!Array.isArray(t))throw new D("`inputs` should be an array for Concatenate");if(e.length!==t.length)throw new D(`Mismatch in the length of mask (${e.length}) and the legnth of inputs (${t.length})`);return V(()=>{let s=!0;if(e.forEach(i=>{if(i!=null){s=!1;return}}),s)return null;const r=[];for(let i=0;i<t.length;++i)e[i]==null?r.push(st(hn(t[i]),"bool")):e[i].rank<t[i].rank?r.push(Oe(e[i],-1)):r.push(e[i]);const o=Le(r,this.axis);return o0(o,-1,!1)})}getConfig(){const t={axis:this.axis},e=super.getConfig();return Object.assign(t,e),t}}i1.className="Concatenate";X(i1);function To(n,t){for(;n<0;)n+=t;return n}function OD(n,t,e){if(n.shape.length>3||t.shape.length>3)throw new xt("batchDot is not implemented for tensors of 4D or higher rank yet");if(S(n.shape.length>=2,()=>`batchDot requires the rank of x to be >= 2, but got ${n.shape.length}`),S(n.shape.length>=2,()=>`batchDot requires the rank of y to be >= 2, but got ${t.shape.length}`),typeof e=="number"&&(e=[e,e]),n.dtype==="complex64"||t.dtype==="complex64")throw new xt("batchDot is not implemented for complex64-type Tensors yet.");const s=n.shape.length,r=t.shape.length;e==null&&(e=[s-1,r-2]);const o=e;return V(()=>{let i;if(s>r){i=s-r;const l=[];for(let c=0;c<i;++c)l.push(1);t=L(t,t.shape.concat(l))}else if(r>s){i=r-s;const l=[];for(let c=0;c<i;++c)l.push(1);n=L(n,n.shape.concat(l))}else i=0;let a;if(n.shape.length===2&&t.shape.length===2)o[0]===o[1]?a=ct(_(n,t),o[0]):a=ct(_($t(n,[1,0]),t),o[1]);else{const l=o[0]!==n.shape.length-1,c=o[1]===t.shape.length-1;a=Nt(n,t,l,c)}if(i>0){let l;s>r?l=s+r-3:l=s-1;const c=[];for(let u=l;u<l+i;++u)c.push(u);a=ra(a,c)}return a.shape.length===1&&(a=Oe(a,1)),a})}class a1 extends Ir{constructor(t){super(t),this.axes=t.axes,this.normalize=t.normalize==null?!1:t.normalize,this.supportsMasking=!0,this.reshapeRequired=!1}build(t){S(Array.isArray(t)&&t.length===2&&Array.isArray(t[0])&&Array.isArray(t[1]),()=>"A `Dot` layer should be called on a list of exactly 2 inputs.");const e=t[0],s=t[1];if(e.length>3||s.length>3)throw new xt("Dot layer does not support tensors of 4D or higher rank yet.");const r=this.interpretAxes(e,s);if(e[r[0]]!==s[r[1]])throw new D(`Dimension incompatibility: ${e[r[0]]} !== ${s[r[1]]}`)}mergeFunction(t){if(t.length!==2)throw new D(`A \`Dot\` layer must be called on exactly 2 inputs, but received ${t.length} input(s).`);let e=t[0],s=t[1],r;return Array.isArray(this.axes)?r=this.axes.map((o,i)=>To(o,t[i].shape.length)):r=[To(this.axes,e.shape.length),To(this.axes,s.shape.length)],this.normalize&&(e=$l(e,r[0]),s=$l(s,r[1])),OD(e,s,r)}interpretAxes(t,e){let s;return Array.isArray(this.axes)?s=this.axes:s=[To(this.axes,t.length),To(this.axes,e.length)],s}computeOutputShape(t){S(Array.isArray(t)&&t.length===2&&Array.isArray(t[0])&&Array.isArray(t[1]),()=>"A `Dot` layer should be called on a list of exactly 2 inputs.");const e=t[0].slice(),s=t[1].slice();if(e.length>3||s.length>3)throw new xt("Dot layer does not support tensors of 4D or higher rank yet.");const r=this.interpretAxes(e,s);e.splice(r[0],1),s.splice(r[1],1),s.splice(0,1);const o=e.concat(s);return o.length===1&&o.push(1),o}computeMask(t,e){return null}getConfig(){const t={axes:this.axes,normalize:this.normalize},e=super.getConfig();return Object.assign(t,e),t}}a1.className="Dot";X(a1);class l1 extends Ct{constructor(t){super(t),this.supportsMasking=!0,this.stddev=t.stddev}computeOutputShape(t){return t}getConfig(){const t=super.getConfig(),e={stddev:this.stddev};return Object.assign(e,t),e}call(t,e){return V(()=>{this.invokeCallHook(t,e);const s=pt(t);return da(()=>J(cu(s.shape,0,this.stddev),s),()=>s,e.training||!1)})}}l1.className="GaussianNoise";X(l1);class c1 extends Ct{constructor(t){super(t),this.supportsMasking=!0,this.rate=t.rate}computeOutputShape(t){return t}getConfig(){const t=super.getConfig(),e={rate:this.rate};return Object.assign(e,t),e}call(t,e){return V(()=>{this.invokeCallHook(t,e);const s=pt(t);return this.rate>0&&this.rate<1?da(()=>{const o=Math.sqrt(this.rate/(1-this.rate));return _(s,cu(s.shape,1,o))},()=>s,e.training||!1):s})}}c1.className="GaussianDropout";X(c1);class u1 extends Ct{constructor(t){super(t),this.supportsMasking=!0,this.rate=t.rate,this.noiseShape=t.noiseShape}_getNoiseShape(t){return this.noiseShape||pt(t).shape}computeOutputShape(t){return t}getConfig(){const t=super.getConfig(),e={rate:this.rate};return Object.assign(e,t),e}call(t,e){return V(()=>{if(this.rate<1&&this.rate>0){const s=this._getNoiseShape(t);return da(()=>{const o=pt(t),a=-1.6732632423543772*1.0507009873554805;let l=vr(sa(s),this.rate);l=Vn(l,"float32");const c=((1-this.rate)*(1+this.rate*a**2))**-.5,u=-c*a*this.rate,h=J(_(o,l),_(J(l,-1),a));return J(_(h,c),u)},()=>pt(t),e.training||!1)}return t})}}u1.className="AlphaDropout";X(u1);function Zo(n,t,e,s,r,o=.001){let i;if(n.rank===2)i=oI(n,t,e,s,r,o);else if(n.rank===3)i=aI(n,t,e,s,r,o);else if(n.rank===4)i=cI(n,t,e,s,r,o);else throw new xt(`batchNormalization is not implemented for array of rank ${n.rank} yet`);return i}function MD(n,t,e,s,r=.001){return V(()=>{const o=tf(n,s),i=o.mean,a=o.variance;return[Zo(n,i,a,e,t,r),i,a]})}function LD(n,t,e,s,r=.001){return V(()=>{const o=tf(n,s),i=o.mean,a=o.variance,l=[];for(const p of Sn(0,n.rank))s.indexOf(p)!==-1?l.push(1):l.push(n.shape[p]);const c=L(i,l),u=L(a,l),h=t==null?null:L(t,l),d=e==null?null:L(e,l);return[Zo(n,c,u,d,h,r),i,a]})}function PD(n,t,e,s,r=.001){return Et(s.slice().sort(),Sn(0,n.rank-1))?MD(n,t,e,s,r):LD(n,t,e,s,r)}class h1 extends Ct{constructor(t){t==null&&(t={}),super(t),this.supportsMasking=!0,this.axis=t.axis==null?-1:t.axis,this.momentum=t.momentum==null?.99:t.momentum,this.epsilon=t.epsilon==null?.001:t.epsilon,this.center=t.center==null?!0:t.center,this.scale=t.scale==null?!0:t.scale,this.betaInitializer=Ut(t.betaInitializer||"zeros"),this.gammaInitializer=Ut(t.gammaInitializer||"ones"),this.movingMeanInitializer=Ut(t.movingMeanInitializer||"zeros"),this.movingVarianceInitializer=Ut(t.movingVarianceInitializer||"ones"),this.betaConstraint=le(t.betaConstraint),this.gammaConstraint=le(t.gammaConstraint),this.betaRegularizer=Gt(t.betaRegularizer),this.gammaRegularizer=Gt(t.gammaRegularizer)}build(t){t=St(t);const e=this.axis>=0?this.axis:this.axis+t.length,s=t[e];if(s==null)throw new D(`Axis ${e} of input tensor should have a defined dimension but the layer received an input with shape ${JSON.stringify(t)}.`);this.inputSpec=[new ie({ndim:t.length,axes:{[e]:s}})];const r=[s];this.scale&&(this.gamma=this.addWeight("gamma",r,null,this.gammaInitializer,this.gammaRegularizer,!0,this.gammaConstraint)),this.center&&(this.beta=this.addWeight("beta",r,null,this.betaInitializer,this.betaRegularizer,!0,this.betaConstraint)),this.movingMean=this.addWeight("moving_mean",r,null,this.movingMeanInitializer,null,!1),this.movingVariance=this.addWeight("moving_variance",r,null,this.movingVarianceInitializer,null,!1),this.built=!0}call(t,e){return V(()=>{const s=e.training==null?!1:e.training,r=pt(t),o=r.shape,i=o.length,a=Sn(0,i),l=this.axis>=0?this.axis:this.axis+i;a.splice(l,1);const c=pr(1,i);c[l]=o[l];const u=a.slice();u.sort();const h=!Et(u,Sn(0,i).slice(0,i-1)),d=()=>{if(h){const b=L(this.movingMean.read(),c),w=L(this.movingVariance.read(),c),y=this.center?L(this.beta.read(),c):null,v=this.scale?L(this.gamma.read(),c):null;return Zo(r,b,w,y,v,this.epsilon)}else return Zo(r,this.movingMean.read(),this.movingVariance.read(),this.beta==null?null:this.beta.read(),this.gamma==null?null:this.gamma.read(),this.epsilon)};if(!s)return d();const[f,p,m]=PD(r,this.gamma.read(),this.beta.read(),a,this.epsilon),g=(b,w,y)=>{V(()=>{const v=1-y,$=b.read(),N=_(ft($,w),v);b.write(ft($,N))})};return g(this.movingMean,p,this.momentum),g(this.movingVariance,m,this.momentum),f})}getConfig(){const t={axis:this.axis,momentum:this.momentum,epsilon:this.epsilon,center:this.center,scale:this.scale,betaInitializer:qt(this.betaInitializer),gammaInitializer:qt(this.gammaInitializer),movingMeanInitializer:qt(this.movingMeanInitializer),movingVarianceInitializer:qt(this.movingVarianceInitializer),betaRegularizer:Ot(this.betaRegularizer),gammaRegularizer:Ot(this.gammaRegularizer),betaConstraint:ae(this.betaConstraint),gammaConstraint:ae(this.gammaConstraint)},e=super.getConfig();return Object.assign(t,e),t}}h1.className="BatchNormalization";X(h1);class d1 extends Ct{constructor(t){if(t==null&&(t={}),super(t),this.axis=t.axis==null?-1:t.axis,typeof this.axis=="number"){if(!Number.isInteger(this.axis))throw new Error(`Expected axis to be an integer, but received ${this.axis}`)}else if(Array.isArray(this.axis)){for(const e of this.axis)if(!Number.isInteger(e))throw new Error(`Expected axis to be an array of integers, but received ${JSON.stringify(this.axis)}`)}else throw new Error(`Expected axis to be an integer or an array of integers, but received ${JSON.stringify(this.axis)}`);this.epsilon=t.epsilon==null?.001:t.epsilon,this.center=t.center==null?!0:t.center,this.scale=t.scale==null?!0:t.scale,this.betaInitializer=Ut(t.betaInitializer||"zeros"),this.gammaInitializer=Ut(t.gammaInitializer||"ones"),this.betaRegularizer=Gt(t.betaRegularizer),this.gammaRegularizer=Gt(t.gammaRegularizer),this.supportsMasking=!0}build(t){t=St(t);const e=t.length;typeof this.axis=="number"&&(this.axis=[this.axis]);for(let o=0;o<this.axis.length;++o)this.axis[o]<0&&(this.axis[o]+=e);for(const o of this.axis)if(o<0||o>=e)throw new Error(`Invalid axis: ${o}`);if(this.axis.length!==ks(this.axis).length)throw new Error(`Found duplicate axes in: ${this.axis}`);const s=this.axis.map(o=>t[o]),r=!0;this.scale?this.gamma=this.addWeight("gamma",s,"float32",this.gammaInitializer,this.gammaRegularizer,r):this.gamma=null,this.center?this.beta=this.addWeight("beta",s,"float32",this.betaInitializer,this.betaRegularizer,r):this.beta=null,this.built=!0}call(t,e){const s=pt(t),r=s.shape,o=r.length;return V(()=>{let{mean:a,variance:l}=tf(s,this.axis,!0);const c=pr(1,o);for(const m of this.axis)c[m]=r[m];const u=m=>m!=null&&m.shape.length!==o?L(m,c):m;let h=this.scale?u(this.gamma.read()):null,d=this.center?u(this.beta.read()):null;const f=[],p=[];for(let m=0;m<o;++m)this.axis.indexOf(m)!==-1?(f.push(r[m]),p.push(1)):(f.push(1),p.push(r[m]));return a=Cn(a,f),l=Cn(l,f),h!=null&&(h=Cn(h,p)),d!=null&&(d=Cn(d,p)),Zo(s,a,l,d,h,this.epsilon)})}getConfig(){const t={axis:this.axis,epsilon:this.epsilon,center:this.center,scale:this.scale,betaInitializer:qt(this.betaInitializer),gammaInitializer:qt(this.gammaInitializer),betaRegularizer:Ot(this.betaRegularizer),gammaRegularizer:Ot(this.gammaRegularizer)},e=super.getConfig();return Object.assign(t,e),t}}d1.className="LayerNormalization";X(d1);function zD(n,t,e){return V(()=>{if(n.rank!==4)throw new D(`temporalPadding expects input tensor to be 4-D, but received a ${n.rank}-D tensor.`);if(t==null&&(t=[[1,1],[1,1]]),t.length!==2||t[0].length!==2||t[1].length!==2)throw new D("spatial2dPadding expects `padding` to be an Array of two Arrays, each of which is an Array of two integers.");if(e==null&&(e=Nn()),e!=="channelsLast"&&e!=="channelsFirst")throw new D(`Unknown data format: ${e}. Supported data formats are 'channelsLast' and 'channelsFirst.`);let s;return e==="channelsFirst"?s=[[0,0],[0,0],t[0],t[1]]:s=[[0,0],t[0],t[1],[0,0]],ef(n,s)})}class f1 extends Ct{constructor(t){if(t==null&&(t={}),super(t),this.dataFormat=t.dataFormat==null?Nn():t.dataFormat,t.padding==null)this.padding=[[1,1],[1,1]];else if(typeof t.padding=="number")this.padding=[[t.padding,t.padding],[t.padding,t.padding]];else{if(t.padding=t.padding,t.padding.length!==2)throw new D(`ZeroPadding2D expects padding to be a length-2 array, but received a length-${t.padding.length} array.`);let e,s;if(typeof t.padding[0]=="number")e=[t.padding[0],t.padding[0]],s=[t.padding[1],t.padding[1]];else{if(t.padding=t.padding,t.padding[0].length!==2)throw new D(`ZeroPadding2D expects height padding to be a length-2 array, but received a length-${t.padding[0].length} array.`);if(e=t.padding[0],t.padding[1].length!==2)throw new D(`ZeroPadding2D expects width padding to be a length-2 array, but received a length-${t.padding[1].length} array.`);s=t.padding[1]}this.padding=[e,s]}this.inputSpec=[new ie({ndim:4})]}computeOutputShape(t){t=St(t);let e,s;return this.dataFormat==="channelsFirst"?(t[2]!=null&&t[2]>=0?e=t[2]+this.padding[0][0]+this.padding[0][1]:e=null,t[3]!=null&&t[3]>=0?s=t[3]+this.padding[1][0]+this.padding[1][1]:s=null,[t[0],t[1],e,s]):(t[1]!=null&&t[1]>=0?e=t[1]+this.padding[0][0]+this.padding[0][1]:e=null,t[2]!=null&&t[2]>=0?s=t[2]+this.padding[1][0]+this.padding[1][1]:s=null,[t[0],e,s,t[3]])}call(t,e){return V(()=>zD(pt(t),this.padding,this.dataFormat))}getConfig(){const t={padding:this.padding,dataFormat:this.dataFormat},e=super.getConfig();return Object.assign(t,e),t}}f1.className="ZeroPadding2D";X(f1);function xu(n,t,e,s,r,o){return V(()=>{Qt(r),Eb(o),nn(s),e==null&&(e=[1,1]),s==null&&(s="valid"),r==null&&(r=Nn()),o==null&&(o="max"),n=ap(n,r);let i;const a=s==="same"?"same":"valid";return o==="max"?i=Qd(n,t,e,a):i=Ud(n,t,e,a),r==="channelsFirst"&&(i=$t(i,[0,3,1,2])),i})}function p1(n,t,e,s,r,o){return V(()=>{Qt(r),Eb(o),nn(s),e==null&&(e=[1,1,1]),s==null&&(s="valid"),r==null&&(r=Nn()),o==null&&(o="max"),n=Ay(n,r);let i;const a=s==="same"?"same":"valid";return o==="max"?i=jS(n,t,e,a):i=Xk(n,t,e,a),r==="channelsFirst"&&(i=$t(i,[0,4,1,2,3])),i})}class m1 extends Ct{constructor(t){if(t.poolSize==null&&(t.poolSize=2),super(t),typeof t.poolSize=="number")this.poolSize=[t.poolSize];else if(Array.isArray(t.poolSize)&&t.poolSize.length===1&&typeof t.poolSize[0]=="number")this.poolSize=t.poolSize;else throw new D(`poolSize for 1D convolutional layer must be a number or an Array of a single number, but received ${JSON.stringify(t.poolSize)}`);if(pe(this.poolSize,"poolSize"),t.strides==null)this.strides=this.poolSize;else if(typeof t.strides=="number")this.strides=[t.strides];else if(Array.isArray(t.strides)&&t.strides.length===1&&typeof t.strides[0]=="number")this.strides=t.strides;else throw new D(`strides for 1D convolutional layer must be a number or an Array of a single number, but received ${JSON.stringify(t.strides)}`);pe(this.strides,"strides"),this.padding=t.padding==null?"valid":t.padding,nn(this.padding),this.inputSpec=[new ie({ndim:3})]}computeOutputShape(t){t=St(t);const e=In(t[1],this.poolSize[0],this.padding,this.strides[0]);return[t[0],e,t[2]]}call(t,e){return V(()=>{this.invokeCallHook(t,e),t=ua(pt(t),2);const s=this.poolingFunction(pt(t),[this.poolSize[0],1],[this.strides[0],1],this.padding,"channelsLast");return ra(s,[2])})}getConfig(){const t={poolSize:this.poolSize,padding:this.padding,strides:this.strides},e=super.getConfig();return Object.assign(t,e),t}}class g1 extends m1{constructor(t){super(t)}poolingFunction(t,e,s,r,o){return Qt(o),nn(r),xu(t,e,s,r,o,"max")}}g1.className="MaxPooling1D";X(g1);class x1 extends m1{constructor(t){super(t)}poolingFunction(t,e,s,r,o){return Qt(o),nn(r),xu(t,e,s,r,o,"avg")}}x1.className="AveragePooling1D";X(x1);class b1 extends Ct{constructor(t){if(t.poolSize==null&&(t.poolSize=[2,2]),super(t),this.poolSize=Array.isArray(t.poolSize)?t.poolSize:[t.poolSize,t.poolSize],t.strides==null)this.strides=this.poolSize;else if(Array.isArray(t.strides)){if(t.strides.length!==2)throw new D(`If the strides property of a 2D pooling layer is an Array, it is expected to have a length of 2, but received length ${t.strides.length}.`);this.strides=t.strides}else this.strides=[t.strides,t.strides];pe(this.poolSize,"poolSize"),pe(this.strides,"strides"),this.padding=t.padding==null?"valid":t.padding,this.dataFormat=t.dataFormat==null?"channelsLast":t.dataFormat,Qt(this.dataFormat),nn(this.padding),this.inputSpec=[new ie({ndim:4})]}computeOutputShape(t){t=St(t);let e=this.dataFormat==="channelsFirst"?t[2]:t[1],s=this.dataFormat==="channelsFirst"?t[3]:t[2];return e=In(e,this.poolSize[0],this.padding,this.strides[0]),s=In(s,this.poolSize[1],this.padding,this.strides[1]),this.dataFormat==="channelsFirst"?[t[0],t[1],e,s]:[t[0],e,s,t[3]]}call(t,e){return V(()=>(this.invokeCallHook(t,e),this.poolingFunction(pt(t),this.poolSize,this.strides,this.padding,this.dataFormat)))}getConfig(){const t={poolSize:this.poolSize,padding:this.padding,strides:this.strides,dataFormat:this.dataFormat},e=super.getConfig();return Object.assign(t,e),t}}class y1 extends b1{constructor(t){super(t)}poolingFunction(t,e,s,r,o){return Qt(o),nn(r),xu(t,e,s,r,o,"max")}}y1.className="MaxPooling2D";X(y1);class w1 extends b1{constructor(t){super(t)}poolingFunction(t,e,s,r,o){return Qt(o),nn(r),xu(t,e,s,r,o,"avg")}}w1.className="AveragePooling2D";X(w1);class v1 extends Ct{constructor(t){if(t.poolSize==null&&(t.poolSize=[2,2,2]),super(t),this.poolSize=Array.isArray(t.poolSize)?t.poolSize:[t.poolSize,t.poolSize,t.poolSize],t.strides==null)this.strides=this.poolSize;else if(Array.isArray(t.strides)){if(t.strides.length!==3)throw new D(`If the strides property of a 3D pooling layer is an Array, it is expected to have a length of 3, but received length ${t.strides.length}.`);this.strides=t.strides}else this.strides=[t.strides,t.strides,t.strides];pe(this.poolSize,"poolSize"),pe(this.strides,"strides"),this.padding=t.padding==null?"valid":t.padding,this.dataFormat=t.dataFormat==null?"channelsLast":t.dataFormat,Qt(this.dataFormat),nn(this.padding),this.inputSpec=[new ie({ndim:5})]}computeOutputShape(t){t=St(t);let e=this.dataFormat==="channelsFirst"?t[2]:t[1],s=this.dataFormat==="channelsFirst"?t[3]:t[2],r=this.dataFormat==="channelsFirst"?t[4]:t[3];return e=In(e,this.poolSize[0],this.padding,this.strides[0]),s=In(s,this.poolSize[1],this.padding,this.strides[1]),r=In(r,this.poolSize[2],this.padding,this.strides[2]),this.dataFormat==="channelsFirst"?[t[0],t[1],e,s,r]:[t[0],e,s,r,t[4]]}call(t,e){return V(()=>(this.invokeCallHook(t,e),this.poolingFunction(pt(t),this.poolSize,this.strides,this.padding,this.dataFormat)))}getConfig(){const t={poolSize:this.poolSize,padding:this.padding,strides:this.strides,dataFormat:this.dataFormat},e=super.getConfig();return Object.assign(t,e),t}}class C1 extends v1{constructor(t){super(t)}poolingFunction(t,e,s,r,o){return Qt(o),nn(r),p1(t,e,s,r,o,"max")}}C1.className="MaxPooling3D";X(C1);class $1 extends v1{constructor(t){super(t)}poolingFunction(t,e,s,r,o){return Qt(o),nn(r),p1(t,e,s,r,o,"avg")}}$1.className="AveragePooling3D";X($1);class k1 extends Ct{constructor(t){super(t),this.inputSpec=[new ie({ndim:3})]}computeOutputShape(t){return[t[0],t[2]]}call(t,e){throw new xt}}class I1 extends k1{constructor(t){super(t||{})}call(t,e){return V(()=>{const s=pt(t);return ee(s,1)})}}I1.className="GlobalAveragePooling1D";X(I1);class S1 extends k1{constructor(t){super(t||{})}call(t,e){return V(()=>{const s=pt(t);return kn(s,1)})}}S1.className="GlobalMaxPooling1D";X(S1);class N1 extends Ct{constructor(t){super(t),this.dataFormat=t.dataFormat==null?"channelsLast":t.dataFormat,Qt(this.dataFormat),this.inputSpec=[new ie({ndim:4})]}computeOutputShape(t){return t=t,this.dataFormat==="channelsLast"?[t[0],t[3]]:[t[0],t[1]]}call(t,e){throw new xt}getConfig(){const t={dataFormat:this.dataFormat},e=super.getConfig();return Object.assign(t,e),t}}class T1 extends N1{call(t,e){return V(()=>{const s=pt(t);return this.dataFormat==="channelsLast"?ee(s,[1,2]):ee(s,[2,3])})}}T1.className="GlobalAveragePooling2D";X(T1);class E1 extends N1{call(t,e){return V(()=>{const s=pt(t);return this.dataFormat==="channelsLast"?kn(s,[1,2]):kn(s,[2,3])})}}E1.className="GlobalMaxPooling2D";X(E1);class R1 extends Ct{constructor(t){super(t),this.layer=t.layer}build(t){this.built=!0}get trainable(){return this.layer!=null?this.layer.trainable:!1}set trainable(t){this.layer!=null&&(this.layer.trainable=t)}get trainableWeights(){return this.layer.trainableWeights}get nonTrainableWeights(){return this.layer.nonTrainableWeights}get updates(){return this.layer._updates}get losses(){return this.layer.losses}getWeights(){return this.layer.getWeights()}setWeights(t){this.layer.setWeights(t)}getConfig(){const t={layer:{className:this.layer.getClassName(),config:this.layer.getConfig()}},e=super.getConfig();return Object.assign(t,e),t}setFastWeightInitDuringBuild(t){super.setFastWeightInitDuringBuild(t),this.layer!=null&&this.layer.setFastWeightInitDuringBuild(t)}static fromConfig(t,e,s={}){const r=e.layer,o=Un(r,s);delete e.layer;const i={layer:o};return Object.assign(i,e),new t(i)}}class A1 extends R1{constructor(t){super(t),this.supportsMasking=!0}build(t){if(t=St(t),t.length<3)throw new D(`TimeDistributed layer expects an input shape >= 3D, but received input shape ${JSON.stringify(t)}`);this.inputSpec=[{shape:t}];const e=[t[0]].concat(t.slice(2));this.layer.built||(this.layer.build(e),this.layer.built=!0),super.build(t)}computeOutputShape(t){t=St(t);const e=[t[0]].concat(t.slice(2)),s=this.layer.computeOutputShape(e),r=t[1];return[s[0],r].concat(s.slice(1))}call(t,e){return V(()=>(t=pt(t),By((i,a)=>[pt(this.layer.call(i,e)),[]],t,[],!1,null,null,!1,!0)[1]))}}A1.className="TimeDistributed";X(A1);function BD(n){kr(oA,"BidirectionalMergeMode",n)}const VD="concat";class D1 extends R1{constructor(t){super(t);const e=t.layer.getConfig(),s={};s.className=t.layer.getClassName(),s.config=e,this.forwardLayer=Un(s),e.goBackwards=e.goBackwards!==!0;const r={};if(r.className=t.layer.getClassName(),r.config=e,this.backwardLayer=Un(r),this.forwardLayer.name="forward_"+this.forwardLayer.name,this.backwardLayer.name="backward_"+this.backwardLayer.name,this.mergeMode=t.mergeMode===void 0?VD:t.mergeMode,BD(this.mergeMode),t.weights)throw new xt("weights support is not implemented for Bidirectional layer yet.");this._stateful=t.layer.stateful,this.returnSequences=t.layer.returnSequences,this.returnState=t.layer.returnState,this.supportsMasking=!0,this._trainable=!0,this.inputSpec=t.layer.inputSpec,this.numConstants=null}get trainable(){return this._trainable}set trainable(t){this._trainable=t,this.forwardLayer!=null&&(this.forwardLayer.trainable=t),this.backwardLayer!=null&&(this.backwardLayer.trainable=t)}getWeights(){return this.forwardLayer.getWeights().concat(this.backwardLayer.getWeights())}setWeights(t){const e=t.length,s=Math.floor(e/2);this.forwardLayer.setWeights(t.slice(0,s)),this.backwardLayer.setWeights(t.slice(s))}computeOutputShape(t){let e=this.forwardLayer.computeOutputShape(t);Array.isArray(e)&&Array.isArray(e[0])||(e=[e]),e=e;let s,r,o;return this.returnState&&(o=e.slice(1)),s=e[0],s=s,this.mergeMode==="concat"?(s[s.length-1]*=2,r=[s]):this.mergeMode==null?r=[s,s.slice()]:r=[s],this.returnState?this.mergeMode==null?r.concat(o).concat(o.slice()):[s].concat(o).concat(o.slice()):Me(r)}apply(t,e){let s=e==null?null:e.initialState,r=e==null?null:e.constants;e==null&&(e={});const o=zy(t,s,r,this.numConstants);if(t=o.inputs,s=o.initialState,r=o.constants,Array.isArray(t)&&(s=t.slice(1),t=t[0]),(s==null||s.length===0)&&r==null)return super.apply(t,e);const i=[],a=[];if(s!=null){const c=s.length;if(c%2>0)throw new D("When passing `initialState` to a Bidrectional RNN, the state should be an Array containing the states of the underlying RNNs.");e.initialState=s,i.push(...s);const u=s.map(h=>new ie({shape:h.shape}));this.forwardLayer.stateSpec=u.slice(0,c/2),this.backwardLayer.stateSpec=u.slice(c/2),a.push(...u)}if(r!=null)throw new xt("Support for constants in Bidirectional layers is not implemented yet.");const l=i[0]instanceof Kn;for(const c of i)if(c instanceof Kn!==l)throw new D("The initial state of a Bidirectional layer cannot be specified as a mix of symbolic and non-symbolic tensors");if(l){const c=[t].concat(i),u=this.inputSpec.concat(a),h=this.inputSpec;this.inputSpec=u;const d=super.apply(c,e);return this.inputSpec=h,d}else return super.apply(t,e)}call(t,e){return V(()=>{const s=e.initialState;let r,o;if(s==null)r=this.forwardLayer.call(t,e),o=this.backwardLayer.call(t,e);else{const l=s.slice(0,s.length/2),c=s.slice(s.length/2);r=this.forwardLayer.call(t,Object.assign(e,{initialState:l})),o=this.backwardLayer.call(t,Object.assign(e,{initialState:c}))}let i;this.returnState&&(Array.isArray(r)&&(i=r.slice(1).concat(o.slice(1))),r=r[0],o=o[0]),this.returnSequences&&(o=dr(o,1));let a;return this.mergeMode==="concat"?a=Kf([r,o]):this.mergeMode==="sum"?a=J(r,o):this.mergeMode==="ave"?a=_(.5,J(r,o)):this.mergeMode==="mul"?a=_(r,o):this.mergeMode==null&&(a=[r,o]),this.returnState?this.mergeMode==null?a.concat(i):[a].concat(i):a})}resetStates(t){this.forwardLayer.resetStates(),this.backwardLayer.resetStates()}build(t){tr(this.forwardLayer.name,()=>{this.forwardLayer.build(t)}),tr(this.backwardLayer.name,()=>{this.backwardLayer.build(t)}),this.built=!0}computeMask(t,e){Array.isArray(e)&&(e=e[0]);let s;if(this.returnSequences?this.mergeMode==null?s=[e,e]:s=e:this.mergeMode==null?s=[null,null]:s=null,this.returnState){const o=this.forwardLayer.states.map(i=>null);return Array.isArray(s)?s.concat(o).concat(o):[s].concat(o).concat(o)}else return s}get trainableWeights(){return this.forwardLayer.trainableWeights.concat(this.backwardLayer.trainableWeights)}get nonTrainableWeights(){return this.forwardLayer.nonTrainableWeights.concat(this.backwardLayer.nonTrainableWeights)}setFastWeightInitDuringBuild(t){super.setFastWeightInitDuringBuild(t),this.forwardLayer!=null&&this.forwardLayer.setFastWeightInitDuringBuild(t),this.backwardLayer!=null&&this.backwardLayer.setFastWeightInitDuringBuild(t)}getConfig(){const t={mergeMode:this.mergeMode},e=super.getConfig();return Object.assign(t,e),t}static fromConfig(t,e){const s=Un(e.layer);if(delete e.layer,e.numConstants!=null)throw new xt("Deserialization of a Bidirectional layer with numConstants present is not supported yet.");const r=e;return r.layer=s,new t(r)}}D1.className="Bidirectional";X(D1);class _1 extends Ct{constructor(t){super(t),this.scale=t.scale,t.offset?this.offset=t.offset:this.offset=0}getConfig(){const t={scale:this.scale,offset:this.offset},e=super.getConfig();return Object.assign(t,e),t}call(t,e){return V(()=>(t=pt(t),t.dtype!=="float32"&&(t=Vn(t,"float32")),J(_(t,this.scale),this.offset)))}}_1.className="Rescaling";X(_1);const{resizeBilinear:WD,cropAndResize:UD}=rs;class F1 extends Ct{constructor(t){super(t),this.height=t.height,this.width=t.width}centerCrop(t,e,s,r,o,i,a,l){return V(()=>{let c,u=!1;const h=e/i,d=s/a,f=(r+e)/i,p=(o+s)/a,m=[h,d,f,p],g=[];t.rank===3?(u=!0,c=is([t])):c=t;for(let v=0;v<c.shape[0];v++)g.push(m);const x=Br(g,[g.length,4]),b=jo(0,g.length,1,"int32"),y=UD(c,x,b,[r,o],"nearest");return Vn(u?pt(fr(y)):y,l)})}upsize(t,e,s,r){return V(()=>{const o=WD(t,[e,s]);return Vn(o,r)})}call(t,e){return V(()=>{const s=pt(t),r=s.dtype,o=s.shape,i=o[o.length-3],a=o[o.length-2];let l=0;i!==this.height&&(l=Math.floor((i-this.height)/2));let c=0;return a!==this.width&&(c=Math.floor((a-this.width)/2),c===0&&(c=1)),l>=0&&c>=0?this.centerCrop(s,l,c,this.height,this.width,i,a,r):this.upsize(t,this.height,this.width,r)})}getConfig(){const t={height:this.height,width:this.width},e=super.getConfig();return Object.assign(t,e),t}computeOutputShape(t){t=St(t);const e=t.length-3,s=t.length-2;return t[e]=this.height,t[s]=this.width,t}}F1.className="CenterCrop";X(F1);function GD(n,t,e,s){let r=pt(n);if(r.dtype!=="int32"&&(r=Vn(r,"int32")),t==="int")return r;const o=r.shape;if(r.rank===0&&(r=Oe(r,-1)),t==="oneHot"&&r.shape[r.shape.length-1]!==1&&(r=Oe(r,-1)),r.rank>2)throw new D(`When outputMode is not int, maximum output rank is 2 Received outputMode ${t} and input shape ${o} which would result in output rank ${r.rank}.`);const i=["multiHot","oneHot"].includes(t),a=r;let l;if(typeof s<"u"&&t==="count"?l=om(a,s,e,i):l=om(a,[],e,i),t!=="tfIdf")return l;if(s)return _(l,s);throw new D("When outputMode is 'tfIdf', weights must be provided.")}class O1 extends Ct{constructor(t){super(t),this.numTokens=t.numTokens,t.outputMode?this.outputMode=t.outputMode:this.outputMode="multiHot"}getConfig(){const t={numTokens:this.numTokens,outputMode:this.outputMode},e=super.getConfig();return Object.assign(t,e),t}computeOutputShape(t){return t=St(t),t==null?[this.numTokens]:this.outputMode==="oneHot"&&t[t.length-1]!==1?(t.push(this.numTokens),t):(t[t.length-1]=this.numTokens,t)}call(t,e){return V(()=>{t=pt(t),t.dtype!=="int32"&&(t=Vn(t,"int32"));let s;if(typeof e.countWeights<"u"){if(this.outputMode!=="count")throw new D(`countWeights is not used when outputMode !== count.
              Received countWeights=${e.countWeights}`);s=pt(e.countWeights)}const r=kn(t),o=pl(t),i=en(this.numTokens,r).bufferSync().get(0),a=vr(o,0).bufferSync().get(0);if(!(i&&a))throw new D(`Input values must be between 0 < values <= numTokens with numTokens=${this.numTokens}`);return GD(t,this.outputMode,this.numTokens,s)})}}O1.className="CategoryEncoding";X(O1);const HD=["bilinear","nearest"],Km=new Set(HD);class M1 extends Ct{constructor(t){if(super(t),this.height=t.height,this.width=t.width,t.interpolation)if(Km.has(t.interpolation))this.interpolation=t.interpolation;else throw new D(`Invalid interpolation parameter: ${t.interpolation} is not implemented`);else this.interpolation="bilinear";this.cropToAspectRatio=!!t.cropToAspectRatio}computeOutputShape(t){t=St(t);const e=t[2];return[this.height,this.width,e]}getConfig(){const t={height:this.height,width:this.width,interpolation:this.interpolation,cropToAspectRatio:this.cropToAspectRatio},e=super.getConfig();return Object.assign(t,e),t}call(t,e){return V(()=>{const s=[this.height,this.width];if(this.interpolation==="bilinear")return rs.resizeBilinear(t,s,!this.cropToAspectRatio);if(this.interpolation==="nearest")return rs.resizeNearestNeighbor(t,s,!this.cropToAspectRatio);throw new Error(`Interpolation is ${this.interpolation} but only ${[...Km]} are supported`)})}}M1.className="Resizing";X(M1);class L1{constructor(t){this.seed=t}next(){if(this.seed!==void 0)return this.seed++}}L1.className="RandomSeed";class P1 extends Ct{constructor(t){super(t),this.randomGenerator=new L1(t.seed)}getConfig(){const t={seed:this.randomGenerator.seed},e=super.getConfig();return Object.assign(t,e),t}}P1.className="BaseRandomLayer";const qD=["bilinear","nearest"],Xm=new Set(qD);class z1 extends P1{constructor(t){super(t);const{factor:e,interpolation:s="bilinear"}=t;if(this.factor=e,Array.isArray(this.factor)&&this.factor.length===2)this.widthLower=this.factor[0],this.widthUpper=this.factor[1];else if(!Array.isArray(this.factor)&&this.factor>0)this.widthLower=-this.factor,this.widthUpper=this.factor;else throw new D(`Invalid factor: ${this.factor}. Must be positive number or tuple of 2 numbers`);if(this.widthLower<-1||this.widthUpper<-1)throw new D(`factor must have values larger than -1. Got: ${this.factor}`);if(this.widthUpper<this.widthLower)throw new D(`factor cannot have upper bound less than lower bound.
        Got upper bound: ${this.widthUpper}.
        Got lower bound: ${this.widthLower}
      `);if(s)if(Xm.has(s))this.interpolation=s;else throw new D(`Invalid interpolation parameter: ${s} is not implemented`)}getConfig(){const t={factor:this.factor,interpolation:this.interpolation},e=super.getConfig();return Object.assign(t,e),t}computeOutputShape(t){t=St(t);const e=t[2];return[this.imgHeight,-1,e]}call(t,e){return V(()=>{const s=pt(t);this.imgHeight=s.shape[s.shape.length-3];const r=s.shape[s.shape.length-2];this.widthFactor=sa([1],1+this.widthLower,1+this.widthUpper,"float32",this.randomGenerator.next());let o=this.widthFactor.dataSync()[0]*r;o=Math.round(o);const i=[this.imgHeight,o];switch(this.interpolation){case"bilinear":return rs.resizeBilinear(t,i);case"nearest":return rs.resizeNearestNeighbor(t,i);default:throw new Error(`Interpolation is ${this.interpolation}
          but only ${[...Xm]} are supported`)}})}}z1.className="RandomWidth";X(z1);const jD=W();jD.registerFlag("KEEP_INTERMEDIATE_TENSORS",()=>!1,n=>{n&&console.warn("Keep intermediate tensors is ON. This will print the values of all intermediate tensors during model inference. Not all models support this mode. For details, check e2e/benchmarks/ model_config.js. This significantly impacts performance.")});var Ym;(function(n){n[n.DT_INVALID=0]="DT_INVALID",n[n.DT_FLOAT=1]="DT_FLOAT",n[n.DT_DOUBLE=2]="DT_DOUBLE",n[n.DT_INT32=3]="DT_INT32",n[n.DT_UINT8=4]="DT_UINT8",n[n.DT_INT16=5]="DT_INT16",n[n.DT_INT8=6]="DT_INT8",n[n.DT_STRING=7]="DT_STRING",n[n.DT_COMPLEX64=8]="DT_COMPLEX64",n[n.DT_INT64=9]="DT_INT64",n[n.DT_BOOL=10]="DT_BOOL",n[n.DT_QINT8=11]="DT_QINT8",n[n.DT_QUINT8=12]="DT_QUINT8",n[n.DT_QINT32=13]="DT_QINT32",n[n.DT_BFLOAT16=14]="DT_BFLOAT16",n[n.DT_QINT16=15]="DT_QINT16",n[n.DT_QUINT16=16]="DT_QUINT16",n[n.DT_UINT16=17]="DT_UINT16",n[n.DT_COMPLEX128=18]="DT_COMPLEX128",n[n.DT_HALF=19]="DT_HALF",n[n.DT_RESOURCE=20]="DT_RESOURCE",n[n.DT_VARIANT=21]="DT_VARIANT",n[n.DT_UINT32=22]="DT_UINT32",n[n.DT_UINT64=23]="DT_UINT64",n[n.DT_FLOAT_REF=101]="DT_FLOAT_REF",n[n.DT_DOUBLE_REF=102]="DT_DOUBLE_REF",n[n.DT_INT32_REF=103]="DT_INT32_REF",n[n.DT_UINT8_REF=104]="DT_UINT8_REF",n[n.DT_INT16_REF=105]="DT_INT16_REF",n[n.DT_INT8_REF=106]="DT_INT8_REF",n[n.DT_STRING_REF=107]="DT_STRING_REF",n[n.DT_COMPLEX64_REF=108]="DT_COMPLEX64_REF",n[n.DT_INT64_REF=109]="DT_INT64_REF",n[n.DT_BOOL_REF=110]="DT_BOOL_REF",n[n.DT_QINT8_REF=111]="DT_QINT8_REF",n[n.DT_QUINT8_REF=112]="DT_QUINT8_REF",n[n.DT_QINT32_REF=113]="DT_QINT32_REF",n[n.DT_BFLOAT16_REF=114]="DT_BFLOAT16_REF",n[n.DT_QINT16_REF=115]="DT_QINT16_REF",n[n.DT_QUINT16_REF=116]="DT_QUINT16_REF",n[n.DT_UINT16_REF=117]="DT_UINT16_REF",n[n.DT_COMPLEX128_REF=118]="DT_COMPLEX128_REF",n[n.DT_HALF_REF=119]="DT_HALF_REF",n[n.DT_RESOURCE_REF=120]="DT_RESOURCE_REF",n[n.DT_VARIANT_REF=121]="DT_VARIANT_REF",n[n.DT_UINT32_REF=122]="DT_UINT32_REF",n[n.DT_UINT64_REF=123]="DT_UINT64_REF"})(Ym||(Ym={}));var Zm;(function(n){(function(t){t[t.LEGACY=0]="LEGACY",t[t.V1=1]="V1",t[t.V2=2]="V2"})(n.CheckpointFormatVersion||(n.CheckpointFormatVersion={}))})(Zm||(Zm={}));var Jm;(function(n){n[n.FAIL=0]="FAIL",n[n.SHORTEST=1]="SHORTEST",n[n.LONGEST=2]="LONGEST"})(Jm||(Jm={}));function ot(n,t){Array.isArray(n)||(n=[n]),n.forEach(e=>{e!=null&&S(e.dtype!=="complex64",()=>`${t} does not support complex64 tensors in the CPU backend.`)})}const KD=_0;class bu extends qh{nextDataId(){return bu.nextDataId++}constructor(){super(),this.blockSize=48,this.firstUse=!0,this.data=new ox(this,Dn())}write(t,e,s){this.firstUse&&(this.firstUse=!1,W().get("IS_NODE")&&Ze(`
============================
Hi, looks like you are running TensorFlow.js in Node.js. To speed things up dramatically, install our node backend, visit https://github.com/tensorflow/tfjs-node for more details. 
============================`));const r={id:this.nextDataId()};return this.data.set(r,{values:t,dtype:s,refCount:1}),r}makeTensorInfo(t,e,s){let r;if(e==="string"&&s!=null&&s.length>0&&oi(s[0])){const o=s.map(i=>$s(i));r=this.write(o,t,e)}else r=this.write(s,t,e);return{dataId:r,shape:t,dtype:e}}refCount(t){return this.data.has(t)?this.data.get(t).refCount:0}incRef(t){const e=this.data.get(t);e.refCount++}decRef(t){if(this.data.has(t)){const e=this.data.get(t);e.refCount--}}move(t,e,s,r,o){this.data.set(t,{values:e,dtype:r,refCount:o})}numDataIds(){return this.data.numDataIds()}async read(t){return this.readSync(t)}readSync(t){const{dtype:e,complexTensorInfos:s}=this.data.get(t);if(e==="complex64"){const r=this.readSync(s.real.dataId),o=this.readSync(s.imag.dataId);return as(r,o)}return ZC(this.data.get(t).values,e)}bufferSync(t){const e=this.readSync(t.dataId);if(t.dtype==="string")try{const s=e.map(r=>Ss(r));return wt(t.shape,t.dtype,s)}catch{throw new Error("Failed to decode encoded string bytes into utf-8")}return wt(t.shape,t.dtype,e)}makeOutput(t,e,s){return Dn().makeTensorFromTensorInfo(this.makeTensorInfo(e,s,t),this)}disposeData(t,e=!1){if(this.data.has(t)){if(this.data.get(t).refCount--,!e&&this.data.get(t).refCount>0)return!1;const{complexTensorInfos:s}=this.data.get(t);s!=null&&(this.disposeData(s.real.dataId,!0),this.disposeData(s.imag.dataId,!0)),this.data.delete(t)}return!0}disposeIntermediateTensorInfo(t){this.disposeData(t.dataId)}async time(t){const e=Fe();return t(),{kernelMs:Fe()-e}}memory(){return{unreliable:!0,reasons:["The reported memory is an upper bound. Due to automatic garbage collection, the true allocated memory may be less."]}}where(t){ot([t],"where");const e=this.readSync(t.dataId);return KD(t.shape,e)}dispose(){}floatPrecision(){return 32}epsilon(){return super.epsilon()}}bu.nextDataId=0;function B1(n){const t=new Float32Array(n.length);for(let e=0;e<n.length;++e)t[e]=Math.abs(n[e]);return t}const XD=n=>{const{x:t}=n.inputs,e=n.backend;ot(t,"abs");let s=new Float32Array(q(t.shape));const r=e.data.get(t.dataId).values;return s=B1(r),e.makeOutput(s,t.shape,t.dtype)},YD={kernelName:Xl,backendName:"cpu",kernelFunc:XD};function te(n){return(t,e,s,r,o)=>{const i=mt(t,e),a=i.length,l=lt(i),c=q(i),u=Ce(o,c),h=t.length,d=e.length,f=lt(t),p=lt(e),m=Kr(t,i),g=Kr(e,i);if(m.length+g.length===0)for(let x=0;x<u.length;++x)u[x]=n(s[x%s.length],r[x%r.length]);else for(let x=0;x<u.length;++x){const b=ao(x,a,l),w=b.slice(-h);m.forEach(N=>w[N]=0);const y=Pn(w,h,f),v=b.slice(-d);g.forEach(N=>v[N]=0);const $=Pn(v,d,p);u[x]=n(s[y],r[$])}return[u,i]}}function We(n){const{inputs:t,backend:e}=n,{real:s,imag:r}=t,o=e.data.get(s.dataId).values,i=e.data.get(r.dataId).values,a=e.makeTensorInfo(s.shape,"complex64"),l=e.data.get(a.dataId);return l.complexTensorInfos={real:e.makeTensorInfo(s.shape,"float32",o),imag:e.makeTensorInfo(r.shape,"float32",i)},a}const ZD={kernelName:od,backendName:"cpu",kernelFunc:We};function El(n,t,e="float32"){if(e==="complex64"){const r=El(n,t,"float32"),o=El(n,t,"float32");return We({inputs:{real:r,imag:o},backend:n})}const s=$e(q(t),e);return n.makeTensorInfo(t,e,s)}function Xn(n){const{inputs:t,backend:e}=n,{x:s}=t;return e.incRef(s.dataId),{dataId:s.dataId,shape:s.shape,dtype:s.dtype}}const JD={kernelName:Si,backendName:"cpu",kernelFunc:Xn};function mr(n){const{inputs:t,backend:e}=n,{input:s}=t,r=e.data.get(s.dataId).complexTensorInfos.real,o=e.data.get(r.dataId).values;return e.makeTensorInfo(r.shape,r.dtype,o)}const QD={kernelName:Ed,backendName:"cpu",kernelFunc:mr};function V1(n,t,e,s){if(s==="int32"){const r=Int32Array.from(n);return[t,"int32",r]}if(s==="bool"){const r=wr([0],e),[o,i]=te((a,l)=>a!==l?1:0)(t,[],n,r,"bool");return[i,"bool",o]}throw new Error(`Error in Cast: failed to cast ${e} to ${s}`)}function As(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{dtype:o}=s;if(o==="complex64"){if(r.dtype==="complex64")return Xn({inputs:{x:r},backend:e});const u=El(e,r.shape,r.dtype),h=As({inputs:{x:r},backend:e,attrs:{dtype:"float32"}}),d=We({inputs:{real:h,imag:u},backend:e});return e.disposeIntermediateTensorInfo(u),e.disposeIntermediateTensorInfo(h),d}if(r.dtype==="complex64"){const u=mr({inputs:{input:r},backend:e}),h=As({inputs:{x:u},backend:e,attrs:{dtype:o}});return e.disposeIntermediateTensorInfo(u),h}if(!lx(r.dtype,o)){const u=Xn({inputs:{x:r},backend:e});return{dataId:u.dataId,shape:u.shape,dtype:o}}const i=e.data.get(r.dataId).values,[a,l,c]=V1(i,r.shape,r.dtype,o);return e.makeTensorInfo(a,l,c)}const t_={kernelName:fi,backendName:"cpu",kernelFunc:As};function ue(n,t,e,s){return e==null?({inputs:r,backend:o})=>{const{a:i,b:a}=r,l=o;ot([i,a],n);const c=l.data.get(i.dataId).values,u=l.data.get(a.dataId).values,h=i.dtype==="string"?ls(c):c,d=i.dtype==="string"?ls(u):u,f=s||i.dtype,[p,m]=t(i.shape,a.shape,h,d,f);return l.makeTensorInfo(m,f,p)}:({inputs:r,backend:o})=>{const{a:i,b:a}=r,l=o;if(i.dtype==="complex64"||a.dtype==="complex64"){const c=As({inputs:{x:i},backend:l,attrs:{dtype:"complex64"}}),u=l.data.get(c.dataId),h=u.complexTensorInfos.real,d=u.complexTensorInfos.imag,f=l.data.get(h.dataId).values,p=l.data.get(d.dataId).values,m=As({inputs:{x:a},backend:l,attrs:{dtype:"complex64"}}),g=l.data.get(m.dataId),x=g.complexTensorInfos.real,b=g.complexTensorInfos.imag,w=l.data.get(x.dataId).values,y=l.data.get(b.dataId).values,[v,$,N]=e(i.shape,a.shape,f,p,w,y),T=l.makeTensorInfo(N,"float32",v),k=l.makeTensorInfo(N,"float32",$),I=We({inputs:{real:T,imag:k},backend:l});return l.disposeIntermediateTensorInfo(c),l.disposeIntermediateTensorInfo(m),l.disposeIntermediateTensorInfo(T),l.disposeIntermediateTensorInfo(k),I}else{const c=l.data.get(i.dataId).values,u=l.data.get(a.dataId).values,h=s||i.dtype,[d,f]=t(i.shape,a.shape,c,u,h);return l.makeTensorInfo(f,h,d)}}}function fp(n){return(t,e,s,r,o,i)=>{const a=mt(t,e),l=q(a),c=a.length,u=lt(a),h=Ce("float32",l),d=Ce("float32",l),f=Kr(t,a),p=Kr(e,a),m=as(s,r),g=as(o,i),x=t.length,b=lt(t),w=e.length,y=lt(e);if(f.length+p.length===0)for(let v=0;v<h.length;v++){const $=v%m.length,N=v%g.length,T=n(m[$*2],m[$*2+1],g[N*2],g[N*2+1]);h[v]=T.real,d[v]=T.imag}else for(let v=0;v<h.length;v++){const $=ao(v,c,u),N=$.slice(-x);f.forEach(R=>N[R]=0);const T=Pn(N,x,b),k=$.slice(-w);p.forEach(R=>k[R]=0);const I=Pn(k,w,y),C=n(m[T*2],m[T*2+1],g[I*2],g[I*2+1]);h[v]=C.real,d[v]=C.imag}return[h,d,a]}}const W1=te(((n,t)=>n+t)),e_=fp(((n,t,e,s)=>({real:n+e,imag:t+s}))),Zr=ue(lo,W1,e_),n_={kernelName:lo,backendName:"cpu",kernelFunc:Zr};function pp(n,t,e,s,r){const o=q(s),i=$e(r,e);for(let a=0;a<n.length;a++){const l=n[a];if(l<0)throw new Error("Input x must be non-negative!");l>=r||(o>0?i[l]+=t[a]:i[l]+=1)}return i}function U1(n,t,e,s=!1){const r=n.shape[0],o=n.shape[1],i=wt([r,e],t.dtype);for(let a=0;a<r;a++)for(let l=0;l<o;l++){const c=n.get(a,l);if(c<0)throw new Error("Input x must be non-negative!");c>=e||(s?i.set(1,a,c):t.size>0?i.set(i.get(a,c)+t.get(a,l),a,c):i.set(i.get(a,c)+1,a,c))}return i}const G1=te(((n,t)=>n&t)),s_=ue(rd,G1),r_={kernelName:rd,backendName:"cpu",kernelFunc:s_};function Yn(n){return(t,e,s)=>{const r=Xt(e,t.length);for(let o=0;o<t.length;++o)r[o]=n(t[o],s);return r}}function Dt(n,t,e){const s=Yn(t);return Vs(n,s,e)}function Vs(n,t,e){return({inputs:s,attrs:r,backend:o})=>{const{x:i}=s;ot(i,n);const a=o,l=a.data.get(i.dataId).values;let c;if(i.dtype==="string"){if(!Array.isArray(l))throw new Error("String tensor's value was not an instance of Array");c=ls(l)}else c=l;const u=e||i.dtype,h=t(c,u,r);return a.makeTensorInfo(i.shape,u,h)}}const H1=Yn(n=>Math.ceil(n)),o_=Vs(pi,H1),i_={kernelName:pi,backendName:"cpu",kernelFunc:o_};function q1(n,t,e,s){const r=Xt(e,q(t));if(s&&e!=="string"){let o=0;n.forEach(i=>{const a=q(i.shape);r.set(i.vals,o),o+=a})}else{let o=0;n.forEach(i=>{const a=e==="string"?ls(i.vals):i.vals;let l=0;for(let c=0;c<i.shape[0];++c){const u=c*t[1]+o;for(let h=0;h<i.shape[1];++h)r[u+h]=a[l++]}o+=i.shape[1]})}return r}const j1=te((n,t)=>n===t?1:0),K1=ue(uc,j1,null,"bool"),a_={kernelName:uc,backendName:"cpu",kernelFunc:K1};const X1=Yn(n=>Math.exp(n)),Y1=Vs(vi,X1,"float32"),l_={kernelName:vi,backendName:"cpu",kernelFunc:Y1};const Z1=Yn(n=>Math.expm1(n)),c_=Vs(Ci,Z1),u_={kernelName:Ci,backendName:"cpu",kernelFunc:c_};const J1=Yn(n=>Math.floor(n)),h_=Vs($i,J1),d_={kernelName:$i,backendName:"cpu",kernelFunc:h_};const Q1=te((n,t)=>Math.floor(n/t)),f_=ue(ki,Q1,null,"int32"),p_={kernelName:ki,backendName:"cpu",kernelFunc:f_};function tw(n,t,e,s,r,o,i,a,l){const c=wt([s,o],e);for(let u=0;u<s;u++){const h=[];let d=0;for(let f=0;f<r;f++){const p=n[u*r+f];d+=p*i[f],h.push(p)}if(d<0||d>=l/o)throw new Error(`Invalid indices: ${h} does not index into ${a}`);for(let f=0;f<o;f++)c.values[u*o+f]=t.get(...t.indexToLoc(d*o+f))}return c}function ew(n,t,e){const s=wt(e,n.dtype);for(let r=0;r<s.size;++r){const i=s.indexToLoc(r).slice(),a=i[0],l=i[2],c=t.locToIndex([a,l]);i[2]=t.values[c];const u=n.locToIndex(i);0<=u&&u<n.values.length&&(s.values[r]=n.values[u])}return s}const nw=te((n,t)=>n>t?1:0),m_=ue(pc,nw,null,"bool"),g_={kernelName:pc,backendName:"cpu",kernelFunc:m_};const sw=te((n,t)=>n>=t?1:0),x_=ue(Ii,sw,null,"bool"),b_={kernelName:Ii,backendName:"cpu",kernelFunc:x_};const rw=te((n,t)=>n<t?1:0),y_=ue(gc,rw,null,"bool"),w_={kernelName:gc,backendName:"cpu",kernelFunc:y_};const ow=te((n,t)=>n<=t?1:0),v_=ue(xc,ow,null,"bool"),C_={kernelName:xc,backendName:"cpu",kernelFunc:v_};function iw(n,t,e){const s=(t-n)/(e-1),r=$e(e,"float32");r[0]=n;for(let o=1;o<r.length;o++)r[o]=r[o-1]+s;return r}const aw=Yn(n=>Math.log(n)),$_=Vs(Ri,aw),k_={kernelName:Ri,backendName:"cpu",kernelFunc:$_};function lw(n,t,e,s){const r=Ce(s,q(e));for(let o=0;o<r.length;++o){const i=o*t;let a=n[i];for(let l=0;l<t;++l){const c=n[i+l];(Number.isNaN(c)||c>a)&&(a=c)}r[o]=a}return r}const cw=te(((n,t)=>Math.max(n,t))),I_=ue(Di,cw),S_={kernelName:Di,backendName:"cpu",kernelFunc:I_};const uw=te(((n,t)=>Math.min(n,t))),N_=ue(_i,uw),T_={kernelName:_i,backendName:"cpu",kernelFunc:N_};const mp=te(((n,t)=>n*t)),E_=fp(((n,t,e,s)=>({real:n*e-t*s,imag:n*s+t*e}))),yu=ue(Oi,mp,E_),R_={kernelName:Oi,backendName:"cpu",kernelFunc:yu};function hw(n,t,e){const s=_s(-1,e);return mp([],t,s,n,e)}function A_(n){const{inputs:t,backend:e}=n,{x:s}=t;ot(s,"neg");const r=e.data.get(s.dataId).values,[o,i]=hw(r,s.shape,s.dtype);return e.makeTensorInfo(i,s.dtype,o)}const D_={kernelName:Tc,backendName:"cpu",kernelFunc:A_};const dw=te(((n,t)=>n!==t?1:0)),__=ue(Ec,dw,null,"bool"),F_={kernelName:Ec,backendName:"cpu",kernelFunc:__};function gp(n,t,e,s,r){const o=t.length,i=q(t),a=lt(t),l=lt(r),c=Ce(e,q(r));for(let u=0;u<i;++u){const h=ao(u,o,a),d=new Array(h.length);for(let p=0;p<d.length;p++)d[p]=h[s[p]];const f=Pn(d,o,l);c[f]=n[u]}return c}function ze(n){const{inputs:t,attrs:e,backend:s}=n,{x:r}=t,{perm:o}=e;ot(r,"transpose");const i=r.shape.length,a=new Array(i);for(let h=0;h<a.length;h++)a[h]=r.shape[o[h]];const l=s.data.get(r.dataId).values,c=gp(l,r.shape,r.dtype,o,a);return{dataId:s.write(c,a,r.dtype),shape:a,dtype:r.dtype}}const O_={kernelName:zr,backendName:"cpu",kernelFunc:ze};function fw(n,t,e,s){const[r,o]=me(n,s),i=He(t,"int32"),a=$e(q(r),i),l=q(o);for(let c=0;c<a.length;++c){const u=c*l;let h=1;for(let d=0;d<l;++d)h*=e[u+d];a[c]=h}return{outVals:a,outShape:r,outDtype:i}}function M_(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{axis:o,keepDims:i}=s;ot(r,"prod");const a=r.shape.length,l=vt(o,r.shape),c=jt(l,a);let u=l,h=r;const d=[];c!=null&&(h=ze({inputs:{x:r},backend:e,attrs:{perm:c}}),d.push(h),u=Jt(u.length,a));const f=e.data.get(h.dataId).values,{outVals:p,outShape:m,outDtype:g}=fw(h.shape,h.dtype,f,u);let x=m;return i&&(x=ne(m,l)),d.forEach(b=>e.disposeIntermediateTensorInfo(b)),e.makeTensorInfo(x,g,p)}const L_={kernelName:Oc,backendName:"cpu",kernelFunc:M_};function P_(n,t,e){n.forEach((s,r)=>{if(s<0||s>=e){const o=ao(r,t.length,lt(t)).join(",");throw new Error(`indices[${o}] = ${s} is not in [0, ${e})`)}})}function z_(n,t){for(let e=0;e<n.length;++e){const s=n[e],r=e===n.length-1?t:n[e+1].length;if(s.length===0)throw new Error("Ragged splits may not be empty");if(s[0]<0)throw new Error("Ragged splits must be non-negative");if(s[s.length-1]>r)throw new Error("Ragged splits must not point past values");for(let o=1;o<s.length;++o)if(s[o-1]>s[o])throw new Error("Ragged splits must be sorted in ascending order")}}function B_(n,t,e,s){const r=[];let o=0;const i=t.length-1+e.length,a=new Array(i).fill(null).map(()=>[0]);z_(e,s);let l=1;for(let c=0;c<t.length-1;++c){l*=t[c];const u=t[c+1];for(let h=1;h<l+1;++h)a[c].push(h*u)}for(let c=0;c<n.length;++c){let u=n[c],h=n[c]+1;for(let d=0;d<e.length;++d){const f=e[d],p=d+t.length-1;if(p>=0){const m=a[p],g=m[m.length-1]-f[u];for(let x=u;x<h;++x)a[p].push(f[x+1]+g)}u=f[u],h=f[h]}h!==u&&(r.push([u,h]),o+=h-u)}return{outSplits:a,valueSlices:r,numValues:o}}function V_(n){const t=[];for(let e=0;e<n.length;++e){const s=n[e].length,r=Xt("int32",s);t.push(r),n[e].forEach((o,i)=>r[i]=o)}return t}function Qm(n,t){const e=n.slice(0,t);for(;e.length<t;)e.push(1);for(let s=t;s<n.length;s++)e[t-1]*=n[s];return e}function W_(n,t,e,s,r,o){const i=Qm(t,2)[1],a=Qm(o,2)[1];let l=0;for(const c of e)for(let u=c[0];u<c[1];++u){for(let h=0;h<s;++h)r[l*a+h]=n[u*i+h];++l}}function U_(n,t,e,s,r){const o=t.slice();o[0]=r;const i=Xt(e,q(o)),a=n.length,l=a===0?0:a/t[0];return W_(n,t,s,l,i,o),[i,o]}function pw(n,t,e,s,r,o,i,a){if(n.length===0)throw new Error("paramsNestedSplits must be non empty");if(t[0].length===0)throw new Error("Split tensors must not be scalars");const l=t[0][0]-1;if(P_(o,i,l),s.length===0)throw new Error("params.rank must be nonzero");const c=s[0],{outSplits:u,valueSlices:h,numValues:d}=B_(o,i,n,c),f=V_(u),p=U_(e,s,r,h,d);return[f,p[0],p[1]]}const tg=2147483647;function mw(n,t,e,s,r,o,i){if(t.length>1)throw new Error("starts must be a scalar or vector");if(r.length>1)throw new Error("limits must be a scalar or vector");if(i.length>1)throw new Error("deltas must be a scalar or vector");const a=t.length===0,l=r.length===0,c=i.length===0,u=[];a||u.push(t[0]),l||u.push(r[0]),c||u.push(i[0]);for(let g=1;g<u.length;++g)if(u[g]!==u[g-1])throw new Error("starts, limits, and deltas must have the same shape");const h=u.length===0?1:u[0],d=Xt("int32",h+1);d[0]=0;for(let g=0;g<h;++g){const x=a?n[0]:n[g],b=l?s[0]:s[g],w=c?o[0]:o[g];if(w===0)throw new Error("Requires delta != 0");let y;if(w>0&&b<x||w<0&&b>x)y=0;else if(y=Math.ceil(Math.abs((b-x)/w)),y>tg)throw new Error(`Requires ((limit - start) / delta) <= ${tg}`);d[g+1]=d[g]+y}const f=d[h],p=Xt(e,f);let m=0;for(let g=0;g<h;++g){const x=d[g+1]-d[g];let b=a?n[0]:n[g];const w=c?o[0]:o[g];for(let y=0;y<x;++y)p[m++]=b,b+=w}return[d,p]}var rn=yn;class Rl{constructor(t,e,s,r,o,i,a,l,c,u){this.shape=t,this.shapeShape=e,this.values=s,this.valuesShape=r,this.valuesDType=o,this.defaultValue=i,this.defaultValueShape=a,this.rowPartitionValues=l,this.rowPartitionValuesShapes=c,this.rowPartitionTypes=tb(u),this.raggedRank=eb(this.rowPartitionTypes)}getRowPartitionTypeByDimension(t){return this.rowPartitionTypes[0]===rn.FIRST_DIM_SIZE?this.rowPartitionTypes[t+1]:this.rowPartitionTypes[t]}getRowPartitionTensor(t){return this.rowPartitionTypes[0]===rn.FIRST_DIM_SIZE?this.rowPartitionValues[t+1]:this.rowPartitionValues[t]}getMaxWidth(t){const e=this.getRowPartitionTensor(t-1);switch(this.getRowPartitionTypeByDimension(t-1)){case rn.VALUE_ROWIDS:return Rl.getMaxWidthValueRowID(e);case rn.ROW_SPLITS:return Rl.getMaxWidthRowSplit(e);default:throw new Error(`Cannot handle partition type ${rn[this.getRowPartitionTypeByDimension(t-1)]}`)}}static getMaxWidthRowSplit(t){const e=t.length;if(e===0||e===1)return 0;let s=0;for(let r=0;r<e-1;++r){const o=t[r+1]-t[r];o>s&&(s=o)}return s}static getMaxWidthValueRowID(t){const e=t.length;if(e===0)return 0;let s=0,r=t[0],o=0;for(let i=1;i<e;++i){const a=t[i];a!==r&&(r=a,o=Math.max(i-s,o),s=i)}return Math.max(e-s,o)}tensorShapeFromTensor(t,e,s=!0){if(e.length===0){if(t[0]===-1)return[];throw new Error("The only valid scalar shape tensor is the fully unknown shape specified as -1.")}return ng(t,s)}calculateOutputSize(t){const e=this.valuesShape,s=this.defaultValueShape;nb(s,e);const r=this.tensorShapeFromTensor(this.shape,this.shapeShape),i=Q0(this.raggedRank,r,e);i[0]<0&&(i[0]=t);for(let a=1;a<=this.raggedRank;++a)i[a]<0&&(i[a]=this.getMaxWidth(a));return i}calculateFirstParentOutputIndex(t,e,s){const r=Math.min(t,s),o=[];let i=0;for(let a=0;a<r;++a,i+=e)o.push(i);for(let a=r;a<t;++a)o.push(-1);return S(o.length===t,()=>"Final length of result must be equal to firstDimension."),o}calculateOutputIndexRowSplit(t,e,s,r){const o=t.length,i=[];for(let a=0;a<o-1;++a){const l=t[a+1]-t[a];let c=Math.min(r,l),u=e[a];u===-1&&(c=0);for(let h=0;h<c;++h)i.push(u),u+=s;for(let h=0;h<l-c;++h)i.push(-1)}if(o>0&&i.length!==t[o-1])throw new Error("Invalid row split size.");return i}calculateOutputIndexValueRowID(t,e,s,r){const o=t.length,i=[];if(o===0)return[];let a=0,l=t[0];if(l>=e.length)throw new Error(`Got currentValueRowId=${l}, which is not less than ${e.length}`);let c=e[l];i.push(c);for(let u=1;u<o;++u){const h=t[u];if(h===l)c>=0&&(++a,a<r?c+=s:c=-1);else{if(a=0,l=h,h>=e.length)throw new Error(`Got nextValueRowId=${h} which is not less than ${e.length}`);c=e[h]}i.push(c)}if(i.length!==t.length)throw new Error("Invalid row ids.");return i}calculateOutputIndex(t,e,s,r){const o=this.getRowPartitionTensor(t),i=this.getRowPartitionTypeByDimension(t);switch(i){case rn.VALUE_ROWIDS:return this.calculateOutputIndexValueRowID(o,e,s,r);case rn.ROW_SPLITS:if(o.length-1>e.length)throw new Error(`Row partition size is greater than output size: ${o.length-1} > ${e.length}`);return this.calculateOutputIndexRowSplit(o,e,s,r);default:throw new Error(`Unsupported partition type: ${rn[i]}`)}}getFirstDimensionSize(){const t=this.rowPartitionValues[0];if(this.rowPartitionTypes.length===0)throw new Error("No row_partition_types given.");const e=this.rowPartitionTypes[0];switch(e){case rn.FIRST_DIM_SIZE:return t[0];case rn.VALUE_ROWIDS:throw new Error("Cannot handle VALUE_ROWIDS in first dimension.");case rn.ROW_SPLITS:return this.rowPartitionValuesShapes[0][0]-1;default:throw new Error(`Cannot handle type ${rn[e]}`)}}compute(){if(this.rowPartitionValues[0].length<=0)throw new Error("Invalid first partition input. Tensor requires at least one element.");const e=this.getFirstDimensionSize(),s=this.calculateOutputSize(e),r=new Array(this.raggedRank+1);r[r.length-1]=1;for(let l=r.length-2;l>=0;--l)r[l]=r[l+1]*s[l+1];const o=ng(s,!1),i=Xt(this.valuesDType,q(o));if(r[0]*s[0]>0){let l=this.calculateFirstParentOutputIndex(e,r[0],s[0]);for(let c=1;c<=this.raggedRank;++c)l=this.calculateOutputIndex(c-1,l,r[c],s[c]);this.setOutput(this.raggedRank,l,i,o)}return[o,i]}setOutput(t,e,s,r){if(s.length===0)return;const o=this.values,i=s;let a=r.slice();a=a.slice(t+1);const l=q(a),c=e.length;let u=this.defaultValue;if(u.length!==l&&u.length!==1){const p=this.defaultValueShape;V(()=>{const m=L(u,p);u=Bo(m,a).dataSync()})}let h=0,d=0,f=0;for(let p=0;p<=c;++p){let m=p<c?e[p]:-1;if(m===f){++f;continue}if(d<f){const g=o.subarray(h*l),x=i.subarray(d*l),b=(f-d)*l;eg(x,g,b)}if(p>=c){const g=s.length;m=Math.floor(g/l)}if(m>f)if(this.defaultValue.length===1)i.subarray(f*l,m*l).fill(this.defaultValue[0]),f=m;else for(;m>f;){const g=i.slice(f*l);eg(g,u,l),++f}m<0?(h=p+1,d=f):(h=p,d=f,f=d+1)}}}function eg(n,t,e){for(let s=0;s<e;s++)n[s]=t[s]}function ng(n,t){const e=[];for(let s of n){if(s<0){if(!t)throw new Error(`Dimension ${s} must be >= 0`);if(s<-1)throw new Error(`Dimension ${s} must be >= -1`);s=-1}e.push(s)}return e}function gw(n,t,e,s,r,o,i,a,l,c){return new Rl(n,t,e,s,r,o,i,a,l,c).compute()}function xw(n,t,e,s){const r=n===t,o=n<t&&e<0,i=t<n&&e>1;if(r||o||i)return $e(0,s);const a=Math.abs(Math.ceil((t-n)/e)),l=$e(a,s);t<n&&e===1&&(e=-1),l[0]=n;for(let c=1;c<l.length;c++)l[c]=l[c-1]+e;return l}const bw=Yn(n=>1/Math.sqrt(n)),G_=Vs(Vi,bw),H_={kernelName:Vi,backendName:"cpu",kernelFunc:G_};function Zs(n,t,e,s,r,o,i,a,l,c){const u=[s/r,r],h=n.values,d=t.values;if(s===0)return wt(e,t.dtype);const f=l instanceof be?l:wt(u,t.dtype);typeof l=="string"||typeof l=="number"?f.values.fill(l):typeof l=="boolean"&&f.values.fill(+l);for(let p=0;p<o;p++){const m=[];let g=0;for(let x=0;x<i;x++){const b=h[p*i+x];m.push(b),g+=b*a[x]}if(g<0||g>=s/r)throw new Error(`Invalid indices: ${m} does not index into ${e}`);for(let x=0;x<r;x++)c?f.values[g*r+x]+=d[p*r+x]:f.values[g*r+x]=t.rank===0?d[0]:d[p*r+x]}return f}const q_=Yn(n=>1/(1+Math.exp(-n))),yw=Dt(qi,n=>1/(1+Math.exp(-n))),j_={kernelName:qi,backendName:"cpu",kernelFunc:yw};function ww(n,t,e,s,r){const o=$f(s,t,e),i=q(e),a=lt(s);if(o){const h=kf(t,a);return r==="string"?n.slice(h,h+i):n.subarray(h,h+i)}const l=r==="string"?ls(n):n,c=wt(s,r,l),u=wt(e,r);for(let h=0;h<u.size;++h){const d=u.indexToLoc(h),f=d.map((p,m)=>p+t[m]);u.set(c.get(...f),...d)}return r==="string"?Cb(u.values):u.values}function gr(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{begin:o,size:i}=s;ot(r,"slice");const[a,l]=ru(r,o,i);vf(r,a,l);const c=e.data.get(r.dataId).values,u=ww(c,a,l,r.shape,r.dtype);return e.makeTensorInfo(l,r.dtype,u)}const K_={kernelName:Vc,backendName:"cpu",kernelFunc:gr};function vw(n,t,e,s,r,o,i){const a=t[0],l=o[0],c=new Array(l),u=new Array(a),h=t[1];if(l===0){if(a!==0)throw new Error(cb(a));const g=Xt(e,0),x=Xt(r,0);return[g,[0,h],x,c,u]}let d=!0,f=0;const p=new Array(l).fill(0);for(let g=0;g<a;++g){const x=n[g*h];if(x<0)throw new Error(ub(g,x));if(x>=l)throw new Error(hb(g,x,l));++p[x],d=d&&x>=f,f=x}let m=!0;for(let g=0;g<l;++g){const x=p[g]===0;c[g]=x,m=m&&!x,p[g]=Math.max(p[g],1),g>0&&(p[g]+=p[g-1])}if(m&&d){const g=n,x=s;for(let b=0;b<a;++b)u[b]=b;return[g,[a,h],x,c,u]}else{const g=p[l-1],x=Xt(e,g*h),b=Xt(r,g),w=new Array(l).fill(0);for(let y=0;y<a;++y){const v=n[y*h],$=w[v],N=(v===0?0:p[v-1])+$;w[v]++;for(let T=0;T<h;++T)x[N*h+T]=n[y*h+T];b[N]=s[y],u[y]=N}for(let y=0;y<l;++y)if(w[y]===0){const $=y===0?0:p[y-1];x[$*h+0]=y;for(let N=1;N<h;++N)x[$*h+N]=0;b[$]=i}return[x,[g,h],b,c,u]}}function Cw(n,t,e,s,r){const o=q(s),i=t[0],a=r.length,l=[];let c=1,u=-1;for(let g=0;g<a;++g){const x=r[g];if(x===-1){if(u!==-1)throw new Error(db(u,g));u=g,l.push(1)}else{if(x<0)throw new Error(fb(g,x));c*=x,l.push(x)}}if(u!==-1){if(c<=0)throw new Error(pb());const g=Math.trunc(o/c);if(c*g!==o)throw new Error(mb(s,l));l[u]=g}if(q(l)!==o)throw new Error(gb(s,l));const d=s.length,f=[];if(d>0){f[d-1]=1;for(let g=d-2;g>=0;--g)f[g]=f[g+1]*s[g+1]}const p=[];if(a>0){p[a-1]=1;for(let g=a-2;g>=0;--g)p[g]=p[g+1]*l[g+1]}const m=Xt(e,i*a);for(let g=0;g<i;++g){let x=0;for(let b=0;b<d;++b)x+=n[g*d+b]*f[b];for(let b=0;b<a;++b)m[g*a+b]=Math.trunc(x/p[b]),x%=p[b]}return[m,[i,a],l]}function xp(n,t,e,s,r,o=!1,i=0){const a=s.length,l=[t[0],n.length/t[0]],c=l[1],h=a>0?r[a-1]+1:0;if(h<0)throw new Error(Ch());const d=t.slice();d[0]=h;const f=d.reduce((w,y)=>w*y,1),p=Xt(e,f);if(a===0)return h>0&&p.fill(i),[p,d];if(h<=0)throw new Error(Ch());let m=0,g=1,x=0,b=r[m];for(;;){let w=0;if(g<a){if(w=r[g],b===w){++g;continue}if(b>=w)throw new Error(xb())}if(b<0||b>=h)throw new Error(bb(b,h));b>x&&p.fill(i,x*c,b*c);for(let y=m;y<g;++y){const v=s[y];if(v<0||v>=l[0])throw new Error(yb(y,s[y],l[0]));for(let $=0;$<c;$++)p[b*c+$]+=n[v*c+$]}if(o)for(let y=0;y<c;y++)p[b*c+y]/=g-m;if(m=g,++g,x=b+1,b=w,g>a)break}return x<h&&p.fill(i,x*c,h*c),[p,d]}const X_=Yn(n=>Math.sqrt(n)),Y_=Dt(Ki,n=>Math.sqrt(n)),Z_={kernelName:Ki,backendName:"cpu",kernelFunc:Y_};const $w=te(((n,t)=>{const e=n-t;return e*e})),J_=ue(Xi,$w),Q_={kernelName:Xi,backendName:"cpu",kernelFunc:J_};const kw=Yn((n,t)=>{const{pattern:e,replaceGlobal:s,rewrite:r}=t;return n.replace(new RegExp(e,s?"g":""),r)}),tF=Vs(_d,kw),eF={kernelName:_d,backendName:"cpu",kernelFunc:tF};function Iw(n,t,e,s){const r=wt(n,t.dtype);for(let o=0;o<r.size;o++){const i=r.indexToLoc(o),a=new Array(i.length);for(let l=0;l<a.length;l++)a[l]=i[l]*e[l]+s[l];r.set(t.get(...a),...i)}return r}class nF{constructor(t,e,s,r,o,i){this.separator=$s(t),this.nGramWidths=e,this.leftPad=$s(s),this.rightPad=$s(r),this.padWidth=o,this.preserveShort=i}getPadWidth(t){return Math.min(this.padWidth<0?t-1:this.padWidth,t-1)}getNumNGrams(t,e){const s=this.getPadWidth(e);return Math.max(0,t+2*s-e+1)}createNGrams(t,e,s,r,o,i){for(let a=0;a<o;++a){const l=this.getPadWidth(i),c=Math.max(0,l-a),u=Math.max(0,l-(o-(a+1))),h=i-(c+u),d=e+(c>0?0:a-l);let f=0;f+=c*this.leftPad.length;for(let b=0;b<h;++b)f+=t[d+b].length;f+=u*this.rightPad.length;const p=c+u+h-1;f+=p*this.separator.length,s[r+a]=new Uint8Array(f);const m=s[r+a];let g=0;const x=b=>b.forEach(w=>m[g++]=w);for(let b=0;b<c;++b)x(this.leftPad),x(this.separator);for(let b=0;b<h-1;++b)x(t[d+b]),x(this.separator);if(h>0){x(t[d+h-1]);for(let b=0;b<u;++b)x(this.separator),x(this.rightPad)}else{for(let b=0;b<u-1;++b)x(this.rightPad),x(this.separator);x(this.rightPad)}}}compute(t,e){const s=t.length,r=e.length;if(r>0){let l=e[0];if(l!==0)throw new Error(`First split value must be 0, got ${l}`);for(let c=1;c<r;++c){let u=e[c]>=l;if(u=u&&e[c]<=s,!u)throw new Error(`Invalid split value ${e[c]}, must be in [${l}, ${s}]`);l=e[c]}if(l!==s)throw new Error(`Last split value must be data size. Expected ${s}, got ${l}`)}const o=r-1,i=Xt("int32",r);if(s===0||r===0){const l=new Array(s);for(let c=0;c<=o;++c)i[c]=0;return[l,i]}i[0]=0;for(let l=1;l<=o;++l){const c=e[l]-e[l-1];let u=0;this.nGramWidths.forEach(h=>{u+=this.getNumNGrams(c,h)}),this.preserveShort&&c>0&&u===0&&(u=1),i[l]=i[l-1]+u}const a=new Array(i[o]);for(let l=0;l<o;++l){const c=e[l];let u=i[l];if(this.nGramWidths.forEach(h=>{const d=e[l+1]-e[l],f=this.getNumNGrams(d,h);this.createNGrams(t,c,a,u,f,h),u+=f}),this.preserveShort&&u===i[l]){const h=e[l+1]-e[l];if(h===0)continue;const d=h+2*this.padWidth;this.createNGrams(t,c,a,u,1,d)}}return[a,i]}}function Sw(n,t,e,s,r,o,i,a){return new nF(e,s,r,o,i,a).compute(n,t)}function sF(n,t,e,s){if(!n.length)return;if(t.length===0){for(let o=0;o<n.length;++o)s.push(n.subarray(o,o+1));return}if(t.length===1){const o=t[0];let i=n.indexOf(o);for(;i!==-1;){const a=n.subarray(0,i);(!e||a.length!==0)&&s.push(a),n=n.subarray(i+1),i=n.indexOf(o)}(!e||n.length!==0)&&s.push(n);return}let r=0;for(let o=0;o<n.length+1;o++)if(o===n.length||t.indexOf(n[o])!==-1){const i=n.subarray(r,o);(!e||i.length!==0)&&s.push(i),r=o+1}}function Nw(n,t,e){const s=n.length,r=[];let o=0,i=0;const a=new Array(s);for(let d=0;d<s;++d){const f=r.length;sF(n[d],t,e,r);const p=r.length-f;a[d]=p,o+=p,i=Math.max(i,p)}const l=Xt("int32",o*2),c=new Array(o),u=[s,i];let h=0;for(let d=0;d<s;++d)for(let f=0;f<a[d];++f)l[h*2]=d,l[h*2+1]=f,c[h]=r[h],++h;return[l,c,u]}function Tw(n,t){const e=Xt("int32",n.length);for(let s=0;s<n.length;++s)e[s]=b$(n[s]).modulo(t).getLowBitsUnsigned();return e}const Ew=te(((n,t)=>n-t)),rF=fp(((n,t,e,s)=>({real:n-e,imag:t-s}))),bp=ue(Yi,Ew,rF),oF={kernelName:Yi,backendName:"cpu",kernelFunc:bp};function Rw(n,t){const e=new Array(n.rank);for(let r=0;r<e.length;r++)e[r]=n.shape[r]*t[r];const s=wt(e,n.dtype);for(let r=0;r<s.values.length;++r){const o=s.indexToLoc(r),i=new Array(n.rank);for(let l=0;l<i.length;l++)i[l]=o[l]%n.shape[l];const a=n.locToIndex(i);s.values[r]=n.values[a]}return s}const Fo=(n,t)=>{const e=t.value-n.value;return e===0?n.index-t.index:e};function Aw(n,t,e=0,s=n.length-1){for(;s>e;){if(s-e>600){const a=s-e+1,l=t-e+1,c=Math.log(a),u=.5*Math.exp(2*c/3),h=.5*Math.sqrt(c*u*(a-u)/a)*Math.sign(l-a/2),d=Math.max(e,Math.floor(t-l*u/a+h)),f=Math.min(s,Math.floor(t+(a-l)*u/a+h));Aw(n,t,d,f)}const r=n[t];let o=e,i=s;for(_r(n,e,t),Fo(n[s],r)>0&&_r(n,e,s);o<i;){for(_r(n,o,i),o++,i--;Fo(n[o],r)<0;)o=o+1;for(;Fo(n[i],r)>0;)i=i-1}Fo(n[e],r)===0?_r(n,e,i):(i=i+1,_r(n,i,s)),i<=t&&(e=i+1),t<=i&&(s=i-1)}}function Dw(n,t,e,s,r){const o=t[t.length-1],[i,a]=[n.length/o,o],l=Ce(e,i*s),c=Ce("int32",i*s);for(let h=0;h<i;h++){const d=h*a,f=n.subarray(d,d+a);let p=new Array(f.length);f.forEach((b,w)=>p[w]={value:b,index:w}),s<p.length&&(Aw(p,s),p=p.slice(0,s)),r&&p.sort(Fo);const m=h*s,g=l.subarray(m,m+s),x=c.subarray(m,m+s);for(let b=0;b<s;b++)g[b]=p[b].value,x[b]=p[b].index}const u=t.slice();return u[u.length-1]=s,[wt(u,e,l),wt(u,"int32",c)]}function _w(n,t,e,s){const r=vt(t,e)[0],o=[1,e[0],1];for(let p=0;p<r;p++)o[0]*=e[p];o[1]=e[r];for(let p=r+1;p<e.length;p++)o[2]*=e[p];const i=new Map,a=new Int32Array(e[r]),l=new be(o,s,n),c=[],u=o[0]===1&&o[2]===1;for(let p=0;p<e[r];p++){let m;if(u)m=n[p].toString();else{const x=[];for(let b=0;b<o[0];b++)for(let w=0;w<o[2];w++)x.push(l.get(b,p,w));m=x.join(",")}const g=i.get(m);if(g!=null)a[p]=g;else{const x=i.size;i.set(m,x),a[p]=x,c.push(p)}}const h=o.slice();h[1]=i.size;const d=new be(h,s);c.forEach((p,m)=>{for(let g=0;g<o[0];g++)for(let x=0;x<o[2];x++)d.set(l.get(g,p,x),g,m,x)});const f=e.slice();return f[r]=h[1],{outputValues:d.values,outputShape:f,indices:a}}const iF=Object.freeze(Object.defineProperty({__proto__:null,addImpl:W1,bincountImpl:pp,bincountReduceImpl:U1,bitwiseAndImpl:G1,castImpl:V1,ceilImpl:H1,concatImpl:q1,equalImpl:j1,expImpl:X1,expm1Impl:Z1,floorDivImpl:Q1,floorImpl:J1,gatherNdImpl:tw,gatherV2Impl:ew,greaterEqualImpl:sw,greaterImpl:nw,lessEqualImpl:ow,lessImpl:rw,linSpaceImpl:iw,logImpl:aw,maxImpl:lw,maximumImpl:cw,minimumImpl:uw,multiplyImpl:mp,negImpl:hw,notEqualImpl:dw,prodImpl:fw,raggedGatherImpl:pw,raggedRangeImpl:mw,raggedTensorToTensorImpl:gw,rangeImpl:xw,rsqrtImpl:bw,scatterImpl:Zs,sigmoidImpl:q_,simpleAbsImpl:B1,sliceImpl:ww,sparseFillEmptyRowsImpl:vw,sparseReshapeImpl:Cw,sparseSegmentReductionImpl:xp,sqrtImpl:X_,squaredDifferenceImpl:$w,staticRegexReplaceImpl:kw,stridedSliceImpl:Iw,stringNGramsImpl:Sw,stringSplitImpl:Nw,stringToHashBucketFastImpl:Tw,subImpl:Ew,tileImpl:Rw,topKImpl:Dw,transposeImpl:gp,uniqueImpl:_w},Symbol.toStringTag,{value:"Module"}));Zx("cpu",()=>new bu,1);const Fw=Dt(yi,n=>n>=0?n:Math.exp(n)-1),aF={kernelName:yi,backendName:"cpu",kernelFunc:Fw};function Ow(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{alpha:o}=s;ot([r],"leakyRelu");const i=q(r.shape),a=e.data.get(r.dataId).values,l=Ce("float32",i);for(let c=0;c<a.length;c++)l[c]=a[c]<0?o*a[c]:a[c];return e.makeTensorInfo(r.shape,"float32",l)}const lF={kernelName:mc,backendName:"cpu",kernelFunc:Ow};const cF=te((n,t)=>n<0?t*n:n);function Mw(n){const{inputs:t,backend:e}=n,{x:s,alpha:r}=t;ot([s,r],"prelu");const o=e.data.get(s.dataId).values,i=e.data.get(r.dataId).values,[a,l]=cF(s.shape,r.shape,o,i,"float32");return e.makeTensorInfo(l,"float32",a)}const uF={kernelName:Fc,backendName:"cpu",kernelFunc:Mw};const Lw=Dt(Pi,n=>Math.max(0,n)),hF={kernelName:Pi,backendName:"cpu",kernelFunc:Lw};const Pw=Dt(zi,n=>Math.min(Math.max(0,n),6)),dF={kernelName:zi,backendName:"cpu",kernelFunc:Pw};function Al(n,t,e,s,r){if(e==="linear")return Xn({inputs:{x:t},backend:n});if(e==="relu")return Lw({inputs:{x:t},backend:n});if(e==="elu")return Fw({inputs:{x:t},backend:n});if(e==="relu6")return Pw({inputs:{x:t},backend:n});if(e==="prelu")return Mw({inputs:{x:t,alpha:s},backend:n});if(e==="leakyrelu")return Ow({inputs:{x:t},backend:n,attrs:{alpha:r}});if(e==="sigmoid")return yw({inputs:{x:t},backend:n});throw new Error(`Activation ${e} has not been implemented for the CPU backend.`)}function Bt(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{shape:o}=s,i=q(r.shape),a=ax(o,i),l=q(a);S(i===l,()=>`The new shape (${a}) has ${l} elements and the old shape (${r.shape}) has ${i} elements. The new shape and old shape must have the same number of elements.`),e.incRef(r.dataId);const c=e.data.get(r.dataId);if(c.complexTensorInfos!=null){const u=c.complexTensorInfos.real,h=c.complexTensorInfos.imag;u.shape=a,h.shape=a}return{dataId:r.dataId,shape:a,dtype:r.dtype}}const fF={kernelName:Mc,backendName:"cpu",kernelFunc:Bt};function zw(n){const{inputs:t,backend:e,attrs:s}=n,{a:r,b:o}=t,{transposeA:i,transposeB:a}=s;ot([r,o],"matMul");const l=r.shape.length,c=o.shape.length,u=i?r.shape[l-2]:r.shape[l-1],h=a?o.shape[c-1]:o.shape[c-2],d=i?r.shape[l-1]:r.shape[l-2],f=a?o.shape[c-2]:o.shape[c-1],p=r.shape.slice(0,-2),m=o.shape.slice(0,-2),g=q(p),x=q(m),w=mt(r.shape.slice(0,-2),o.shape.slice(0,-2)).concat([d,f]);S(u===h,()=>`Error in matMul: inner shapes (${u}) and (${h}) of Tensors with shapes ${r.shape} and ${o.shape} and transposeA=${i} and transposeB=${a} must match.`);const y=i?[g,u,d]:[g,d,u],v=a?[x,f,h]:[x,h,f],$=Bt({inputs:{x:r},backend:e,attrs:{shape:y}}),N=Bt({inputs:{x:o},backend:e,attrs:{shape:v}}),T=i?$.shape[1]:$.shape[2],k=i?$.shape[2]:$.shape[1],I=a?N.shape[1]:N.shape[2],C=Math.max(g,x),R=e.data.get($.dataId).values,A=e.data.get(N.dataId).values,O=lt($.shape),M=lt(N.shape),[z,U,B]=i?[O[0],1,O[1]]:[O[0],O[1],1],[G,j,K]=a?[1,M[1],M[0]]:[M[1],1,M[0]],Y=k*I,Z=wt([C,k,I],$.dtype),tt=Z.values,Q=e.blockSize;for(let rt=0;rt<C;rt++){const at=rt%g,dt=rt%x;for(let ht=0;ht<k;ht+=Q){const gt=Math.min(ht+Q,k);for(let bt=0;bt<I;bt+=Q){const Rt=Math.min(bt+Q,I);for(let Mt=0;Mt<T;Mt+=Q){const Kt=Math.min(Mt+Q,T);for(let Lt=ht;Lt<gt;Lt++)for(let _t=bt;_t<Rt;_t++){let Ht=0;for(let Wt=Mt;Wt<Kt;Wt++){const Jn=R[at*z+Lt*U+Wt*B],ge=A[Wt*G+_t*j+dt*K];Ht+=Jn*ge}tt[rt*Y+(Lt*I+_t)]+=Ht}}}}}return e.disposeIntermediateTensorInfo($),e.disposeIntermediateTensorInfo(N),e.makeTensorInfo(w,Z.dtype,Z.values)}const pF={kernelName:tc,backendName:"cpu",kernelFunc:zw};function mF(n){const{inputs:t,backend:e,attrs:s}=n,{a:r,b:o,bias:i,preluActivationWeights:a}=t,{transposeA:l,transposeB:c,activation:u,leakyreluAlpha:h}=s;let d,f,p;const m=[];d=zw({inputs:{a:r,b:o},attrs:{transposeA:l,transposeB:c},backend:e}),i&&(f=Zr({inputs:{a:d,b:i},backend:e}),m.push(d),d=f),u&&(p=Al(e,d,u,a,h),m.push(d),d=p);for(const x of m)e.disposeIntermediateTensorInfo(x);return d}const gF={kernelName:cl,backendName:"cpu",kernelFunc:mF};const xF=Dt(ii,n=>Math.acos(n)),bF={kernelName:ii,backendName:"cpu",kernelFunc:xF};const yF=Dt(ai,n=>Math.acosh(n)),wF={kernelName:ai,backendName:"cpu",kernelFunc:yF};function vF(n){const{inputs:t,backend:e}=n,s=t;ot(t,"addN");const r=s.map(a=>e.data.get(a.dataId).values),o=wt(s[0].shape,s[0].dtype),i=o.values;for(let a=0;a<s.length;a++){const l=r[a];for(let c=0;c<i.length;c++)i[c]+=l[c]}return e.makeTensorInfo(o.shape,o.dtype,o.values)}const CF={kernelName:Jh,backendName:"cpu",kernelFunc:vF};function $F(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{axis:o,keepDims:i}=s;ot(r,"all");const a=vt(o,r.shape);let l=a;const c=jt(l,r.shape.length);let u=r;c!=null&&(u=ze({inputs:{x:r},backend:e,attrs:{perm:c}}),l=Jt(l.length,r.shape.length)),we("all",l,u.shape.length);const[h,d]=me(u.shape,l),f=q(d),p=$e(q(h),u.dtype),m=e.data.get(u.dataId).values;for(let x=0;x<p.length;++x){const b=x*f;let w=m[b];for(let y=0;y<f;++y){const v=m[b+y];w=w&&v}p[x]=w}c!=null&&e.disposeIntermediateTensorInfo(u);const g=e.makeTensorInfo(h,u.dtype,p);if(i){const x=ne(h,a),b=Bt({inputs:{x:g},backend:e,attrs:{shape:x}});return e.disposeIntermediateTensorInfo(g),b}return g}const kF={kernelName:Qh,backendName:"cpu",kernelFunc:$F};function IF(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{axis:o,keepDims:i}=s;ot(r,"any");const a=vt(o,r.shape);let l=a;const c=jt(l,r.shape.length);let u=r;c!=null&&(u=ze({inputs:{x:r},backend:e,attrs:{perm:c}}),l=Jt(l.length,r.shape.length)),we("any",l,u.shape.length);const[h,d]=me(u.shape,l),f=q(d),p=$e(q(h),u.dtype),m=e.data.get(u.dataId).values;for(let x=0;x<p.length;++x){const b=x*f;let w=m[b];for(let y=0;y<f;++y){const v=m[b+y];w=w||v}p[x]=w}c!=null&&e.disposeIntermediateTensorInfo(u);const g=e.makeTensorInfo(h,u.dtype,p);if(i){const x=ne(h,a),b=Bt({inputs:{x:g},backend:e,attrs:{shape:x}});return e.disposeIntermediateTensorInfo(g),b}return g}const SF={kernelName:td,backendName:"cpu",kernelFunc:IF};function NF(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{axis:o}=s;ot(r,"argMax");let i=vt(o,r.shape);const a=jt(i,r.shape.length);let l=r;const c=[];a!=null&&(l=ze({inputs:{x:r},backend:e,attrs:{perm:a}}),c.push(l),i=Jt(i.length,l.shape.length)),i=[i[0]],we("argMax",i,l.shape.length);const[u,h]=me(l.shape,i),d=q(u),f=$e(d,"int32"),p=q(h),m=e.data.get(l.dataId).values;for(let g=0;g<f.length;++g){const x=g*p;let b=m[x],w=0;for(let y=0;y<p;++y){const v=m[x+y];v>b&&(b=v,w=y)}f[g]=w}return c.forEach(g=>e.disposeIntermediateTensorInfo(g)),e.makeTensorInfo(u,"int32",f)}const TF={kernelName:Yl,backendName:"cpu",kernelFunc:NF};function EF(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{axis:o}=s;ot(r,"argMin");let i=vt(o,r.shape);const a=jt(i,r.shape.length);let l=r;const c=[];a!=null&&(l=ze({inputs:{x:r},backend:e,attrs:{perm:a}}),c.push(l),i=Jt(i.length,l.shape.length)),i=[i[0]],we("argMin",i,l.shape.length);const[u,h]=me(l.shape,i),d=q(u),f=$e(d,"int32"),p=q(h),m=e.data.get(l.dataId).values;for(let g=0;g<f.length;++g){const x=g*p;let b=m[x],w=0;for(let y=0;y<p;++y){const v=m[x+y];v<b&&(b=v,w=y)}f[g]=w}return c.forEach(g=>e.disposeIntermediateTensorInfo(g)),e.makeTensorInfo(u,"int32",f)}const RF={kernelName:Zl,backendName:"cpu",kernelFunc:EF};const AF=Dt(li,n=>Math.asin(n)),DF={kernelName:li,backendName:"cpu",kernelFunc:AF};const _F=Dt(ci,n=>Math.asinh(n)),FF={kernelName:ci,backendName:"cpu",kernelFunc:_F};const OF=Dt(ui,n=>Math.atan(n)),MF={kernelName:ui,backendName:"cpu",kernelFunc:OF};const LF=te((n,t)=>Math.atan2(n,t)),PF=ue(di,LF),zF={kernelName:di,backendName:"cpu",kernelFunc:PF};const BF=Dt(hi,n=>Math.atanh(n)),VF={kernelName:hi,backendName:"cpu",kernelFunc:BF};function yp(n,t,e,s,r,o){const i=r.strideHeight,a=r.strideWidth,l=r.dilationHeight,c=r.dilationWidth,u=r.effectiveFilterHeight,h=r.effectiveFilterWidth,d=r.padInfo.top,f=r.padInfo.left,p=o==="max"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,m=wt(r.outShape,e),g=m.values,x=r.outShape[1]*r.outShape[2]*r.outShape[3],b=r.outShape[2]*r.outShape[3],w=r.outShape[3];for(let y=0;y<r.batchSize;++y){const v=y*x,$=y*s[0];for(let N=0;N<r.inChannels;++N)for(let T=0;T<r.outHeight;++T){const k=T*i-d,I=Math.max(0,k),C=Math.min(r.inHeight,u+k),R=v+T*b;for(let A=0;A<r.outWidth;++A){const O=A*a-f,M=Math.max(0,O),z=Math.min(r.inWidth,h+O);let U=p,B=0,G=0;for(let K=I;K<C;K+=l){const Y=$+K*s[1];for(let Z=M;Z<z;Z+=c){const tt=Y+Z*s[2],Q=n[tt+N];o==="max"&&Q>U?U=Q:o==="avg"&&(B+=Q,G++)}if(isNaN(U))break}const j=R+A*w+N;g[j]=o==="avg"?B/G:U}}}return m}function Bw(n,t,e,s,r=!1,o=!1){const i=wt(s.outShape,"int32"),a=s.strideHeight,l=s.strideWidth,c=s.dilationHeight,u=s.dilationWidth,h=s.effectiveFilterHeight,d=s.effectiveFilterWidth,f=s.padInfo.top,p=s.padInfo.left,m=wt(t,e,n);for(let g=0;g<s.batchSize;++g)for(let x=0;x<s.inChannels;++x)for(let b=0;b<s.outHeight;++b){const w=b*a-f;let y=w;for(;y<0;)y+=c;const v=Math.min(s.inHeight,h+w);for(let $=0;$<s.outWidth;++$){const N=$*l-p;let T=N;for(;T<0;)T+=u;const k=Math.min(s.inWidth,d+N);let I=Number.NEGATIVE_INFINITY,C=-1;for(let R=y;R<v;R+=c){const A=R-w;for(let O=T;O<k;O+=u){const M=O-N,z=m.get(g,R,O,x);z>I&&(I=z,r?C=o?((g*s.inHeight+R)*s.inWidth+O)*s.inChannels+x:(R*s.inWidth+O)*s.inChannels+x:C=A*d+M)}}i.set(C,g,b,$,x)}}return i}function Vw(n,t,e,s,r,o){const i=r.strideDepth,a=r.strideHeight,l=r.strideWidth,c=r.dilationDepth,u=r.dilationHeight,h=r.dilationWidth,d=r.effectiveFilterDepth,f=r.effectiveFilterHeight,p=r.effectiveFilterWidth,m=r.padInfo.front,g=r.padInfo.top,x=r.padInfo.left,b=o==="max"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,w=wt(r.outShape,e),y=w.values,v=r.outShape[1]*r.outShape[2]*r.outShape[3]*r.outShape[4],$=r.outShape[2]*r.outShape[3]*r.outShape[4],N=r.outShape[3]*r.outShape[4],T=r.outShape[4];for(let k=0;k<r.batchSize;++k){const I=k*v,C=k*s[0];for(let R=0;R<r.inChannels;++R)for(let A=0;A<r.outDepth;++A){const O=A*i-m;let M=O;for(;M<0;)M+=c;const z=Math.min(r.inDepth,d+O),U=I+A*$;for(let B=0;B<r.outHeight;++B){const G=B*a-g;let j=G;for(;j<0;)j+=u;const K=Math.min(r.inHeight,f+G),Y=U+B*N;for(let Z=0;Z<r.outWidth;++Z){const tt=Z*l-x;let Q=tt;for(;Q<0;)Q+=h;const rt=Math.min(r.inWidth,p+tt),at=Y+Z*T;let dt=b,ht=0,gt=0;for(let Rt=M;Rt<z;Rt+=c){const Mt=C+Rt*s[1];for(let Kt=j;Kt<K;Kt+=u){const Lt=Mt+Kt*s[2];for(let _t=Q;_t<rt;_t+=h){const Ht=Lt+_t*s[3],Wt=n[Ht+R];if(o==="max"&&Wt>dt?dt=Wt:o==="avg"&&(ht+=Wt,gt++),isNaN(dt))break}if(isNaN(dt))break}if(isNaN(dt))break}const bt=at+R;y[bt]=o==="avg"?ht/Math.max(gt,1):dt}}}}return w}function WF(n,t){const e=wt(t.outShape,"int32"),s=t.strideDepth,r=t.strideHeight,o=t.strideWidth,i=t.dilationDepth,a=t.dilationHeight,l=t.dilationWidth,c=t.effectiveFilterDepth,u=t.effectiveFilterHeight,h=t.effectiveFilterWidth,d=t.padInfo.front,f=t.padInfo.top,p=t.padInfo.left;for(let m=0;m<t.batchSize;++m)for(let g=0;g<t.inChannels;++g)for(let x=0;x<t.outDepth;++x){const b=x*s-d;let w=b;for(;w<0;)w+=i;const y=Math.min(t.inDepth,c+b);for(let v=0;v<t.outHeight;++v){const $=v*r-f;let N=$;for(;N<0;)N+=a;const T=Math.min(t.inHeight,u+$);for(let k=0;k<t.outWidth;++k){const I=k*o-p;let C=I;for(;C<0;)C+=l;const R=Math.min(t.inWidth,h+I);let A=Number.NEGATIVE_INFINITY,O=-1;for(let M=w;M<y;M+=i){const z=M-b;for(let U=N;U<T;U+=a){const B=U-$;for(let G=C;G<R;G+=l){const j=G-I,K=n.get(m,M,U,G,g);K>=A&&(A=K,O=z*u*h+B*u+j)}}}e.set(O,m,x,v,k,g)}}}return e}function UF(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t;ot(r,"avgPool");const{filterSize:o,strides:i,pad:a,dimRoundingMode:l}=s,c=1;S(Ie(i,c),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${i} and dilations '${c}'`);const u=dn(r.shape,o,i,c,a,l);let h;if(u.filterWidth===1&&u.filterHeight===1&&Et(u.inShape,u.outShape))h=Xn({inputs:{x:r},backend:e});else{const d=e.data.get(r.dataId).values,f=lt(r.shape),p=yp(d,r.shape,r.dtype,f,u,"avg");h=e.makeTensorInfo(u.outShape,r.dtype,p.values)}return h}const GF={kernelName:Jl,backendName:"cpu",kernelFunc:UF};function HF(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{filterSize:o,strides:i,pad:a,dimRoundingMode:l,dataFormat:c}=s;ot(r,"avgPool3d");const u=hs(r.shape,o,i,1,a,l,c),h=e.data.get(r.dataId).values,d=Vw(h,r.shape,r.dtype,lt(r.shape),u,"avg");return e.makeTensorInfo(d.shape,"float32",d.values)}const qF={kernelName:Ql,backendName:"cpu",kernelFunc:HF};function jF(n){const{inputs:t,backend:e,attrs:s}=n,{dy:r,input:o}=t,{filterSize:i,strides:a,pad:l,dimRoundingMode:c}=s;ot([r,o],"avgPool3DGrad");const u=hs(o.shape,i,a,1,l,c),h=u.strideDepth,d=u.strideHeight,f=u.strideWidth,p=u.filterDepth,m=u.filterHeight,g=u.filterWidth,x=u.dilationDepth,b=u.dilationHeight,w=u.dilationWidth,y=u.effectiveFilterDepth,v=u.effectiveFilterHeight,$=u.effectiveFilterWidth,N=y-1-u.padInfo.front,T=$-1-u.padInfo.left,k=v-1-u.padInfo.top,I=wt(o.shape,"float32"),C=1/(p*m*g),R=e.bufferSync(r);for(let A=0;A<u.batchSize;++A)for(let O=0;O<u.inChannels;++O)for(let M=0;M<u.inDepth;++M)for(let z=0;z<u.inHeight;++z)for(let U=0;U<u.inWidth;++U){const B=M-N,G=z-k,j=U-T;let K=0;for(let Y=0;Y<y;Y+=x){const Z=(B+Y)/h;if(!(Z<0||Z>=u.outDepth||Math.floor(Z)!==Z))for(let tt=0;tt<v;tt+=b){const Q=(G+tt)/d;if(!(Q<0||Q>=u.outHeight||Math.floor(Q)!==Q))for(let rt=0;rt<$;rt+=w){const at=(j+rt)/f;if(at<0||at>=u.outWidth||Math.floor(at)!==at)continue;const dt=R.get(A,Z,Q,at,O);K+=dt}}}I.set(K*C,A,M,z,U,O)}return e.makeTensorInfo(I.shape,I.dtype,I.values)}const KF={kernelName:nd,backendName:"cpu",kernelFunc:jF};function XF(n){const{inputs:t,backend:e,attrs:s}=n,{dy:r,input:o}=t,i=o;ot([r,o],"avgPoolGrad");const{filterSize:a,strides:l,pad:c}=s,u=dn(i.shape,a,l,1,c),h=u.strideHeight,d=u.strideWidth,f=u.filterHeight,p=u.filterWidth,m=u.dilationHeight,g=u.dilationWidth,x=u.effectiveFilterHeight,b=u.effectiveFilterWidth,w=b-1-u.padInfo.left,y=x-1-u.padInfo.top,v=wt(i.shape,"float32"),$=1/(f*p),N=e.data.get(r.dataId).values,T=wt(r.shape,"float32",N);for(let k=0;k<u.batchSize;++k)for(let I=0;I<u.inChannels;++I)for(let C=0;C<u.inHeight;++C)for(let R=0;R<u.inWidth;++R){const A=C-y,O=R-w;let M=0;for(let z=0;z<x;z+=m){const U=(A+z)/h;if(!(U<0||U>=u.outHeight||Math.floor(U)!==U))for(let B=0;B<b;B+=g){const G=(O+B)/d;if(G<0||G>=u.outWidth||Math.floor(G)!==G)continue;const j=T.get(k,U,G,I);M+=j}}v.set(M*$,k,C,R,I)}return e.makeTensorInfo(v.shape,v.dtype,v.values)}const YF={kernelName:ed,backendName:"cpu",kernelFunc:XF};function ZF(n){const{inputs:t,backend:e,attrs:s}=n,{x:r,scale:o,offset:i,mean:a,variance:l}=t;S(a.shape.length===l.shape.length,()=>"Batch normalization gradient requires mean and variance to have equal ranks."),S(i==null||a.shape.length===i.shape.length,()=>"Batch normalization gradient requires mean and offset to have equal ranks."),S(o==null||a.shape.length===o.shape.length,()=>"Batch normalization gradient requires mean and scale to have equal ranks."),ot([r,a,l,o,i],"batchNorm");let{varianceEpsilon:c}=s;c==null&&(c=.001);const u=e.data.get(r.dataId).values,h=e.data.get(a.dataId).values,d=e.data.get(l.dataId).values,f=o?e.data.get(o.dataId).values:new Float32Array([1]),p=i?e.data.get(i.dataId).values:new Float32Array([0]),m=new Float32Array(u.length),g=p.length,x=f.length,b=d.length,w=h.length;let y=0,v=0,$=0,N=0;for(let T=0;T<u.length;++T)m[T]=p[y++]+(u[T]-h[v++])*f[$++]/Math.sqrt(d[N++]+c),y>=g&&(y=0),v>=w&&(v=0),$>=x&&($=0),N>=b&&(N=0);return e.makeTensorInfo(r.shape,r.dtype,m)}const JF={kernelName:dc,backendName:"cpu",kernelFunc:ZF};function QF(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{blockShape:o,crops:i}=s;ot([r],"batchToSpaceND");const a=o.reduce((x,b)=>x*b),l=ia(r.shape,o,a),c=aa(l.length,o.length),u=la(r.shape,o,a),h=Ef(i,o.length),d=Rf(u,i,o.length),f=Bt({inputs:{x:r},backend:e,attrs:{shape:l}}),p=ze({inputs:{x:f},backend:e,attrs:{perm:c}}),m=Bt({inputs:{x:p},backend:e,attrs:{shape:u}}),g=gr({inputs:{x:m},backend:e,attrs:{begin:h,size:d}});return e.disposeIntermediateTensorInfo(f),e.disposeIntermediateTensorInfo(p),e.disposeIntermediateTensorInfo(m),g}const tO={kernelName:ec,backendName:"cpu",kernelFunc:QF};function eO(n){const{inputs:t,backend:e,attrs:s}=n,{x:r,weights:o}=t,{size:i}=s,a=e.data.get(r.dataId).values,l=e.data.get(o.dataId).values,c=pp(a,l,o.dtype,o.shape,i);return e.makeTensorInfo([i],o.dtype,c)}const nO={kernelName:sd,backendName:"cpu",kernelFunc:eO};function sO(n){const{inputs:t,backend:e}=n,{s0:s,s1:r}=t,o=e.data.get(s.dataId).values,i=e.data.get(r.dataId).values,a=mt(Array.from(o),Array.from(i));return e.makeTensorInfo([a.length],"int32",Int32Array.from(a))}const rO={kernelName:fx,backendName:"cpu",kernelFunc:sO};const oO=Dt(mi,(n,t)=>{const e=t;return n>e.clipValueMax?e.clipValueMax:n<e.clipValueMin?e.clipValueMin:n}),iO={kernelName:mi,backendName:"cpu",kernelFunc:oO};const aO=n=>{const{x:t}=n.inputs,e=n.backend,s=new Float32Array(q(t.shape)),r=e.data.get(t.dataId),o=r.complexTensorInfos.real,i=r.complexTensorInfos.imag,a=e.data.get(o.dataId).values,l=e.data.get(i.dataId).values;for(let c=0;c<a.length;c++){const u=a[c],h=l[c];s[c]=Math.hypot(u,h)}return e.makeOutput(s,t.shape,"float32")},lO={kernelName:nc,backendName:"cpu",kernelFunc:aO};function Jr(n){const{inputs:t,backend:e}=n,{input:s}=t,r=e.data.get(s.dataId).complexTensorInfos.imag,o=e.data.get(r.dataId).values;return e.makeTensorInfo(r.shape,r.dtype,o)}const cO={kernelName:vd,backendName:"cpu",kernelFunc:Jr};function Qr(n){const{inputs:t,backend:e,attrs:s}=n,{axis:r}=s,o=vt(r,t[0].shape)[0],i=t.map(m=>m.shape);Sf(i,o);let a=Bn(t.map(m=>m.shape),o);if(q(a)===0)return e.makeTensorInfo(a,t[0].dtype,[]);const l=t.filter(m=>q(m.shape)>0);if(l.length===1)return Xn({inputs:{x:l[0]},backend:e});if(l[0].dtype==="complex64"){const m=l.map(y=>mr({inputs:{input:y},backend:e})),g=l.map(y=>Jr({inputs:{input:y},backend:e})),x=Qr({inputs:m,backend:e,attrs:{axis:o}}),b=Qr({inputs:g,backend:e,attrs:{axis:o}}),w=We({inputs:{real:x,imag:b},backend:e});return m.forEach(y=>e.disposeIntermediateTensorInfo(y)),g.forEach(y=>e.disposeIntermediateTensorInfo(y)),e.disposeIntermediateTensorInfo(x),e.disposeIntermediateTensorInfo(b),w}const c=l.map(m=>{const x=[-1,q(m.shape.slice(o))];return Bt({inputs:{x:m},backend:e,attrs:{shape:x}})}),u=c.map(m=>({vals:e.data.get(m.dataId).values,shape:m.shape}));a=Bn(c.map(m=>m.shape),1);const h=c[0].shape[0]===1,d=q1(u,a,t[0].dtype,h),f=Bn(l.map(m=>m.shape),o),p=e.makeTensorInfo(f,t[0].dtype,d);return c.forEach(m=>e.disposeIntermediateTensorInfo(m)),p}const uO={kernelName:sc,backendName:"cpu",kernelFunc:Qr};function Ww(n){const{inputs:t,backend:e,attrs:s}=n,{x:r,filter:o}=t,{strides:i,pad:a,dataFormat:l,dilations:c,dimRoundingMode:u}=s;ot([r,o],"conv2d");const h=ds(l),d=ye(r.shape,o.shape,i,c,a,u,!1,h),f=d.filterHeight,p=d.filterWidth,m=d.dilationHeight,g=d.dilationWidth,x=d.padInfo.left,b=d.padInfo.top,w=d.dataFormat==="channelsLast",y=new be(d.outShape,r.dtype),v=lt(r.shape),$=lt(o.shape),N=v[0],T=w?v[1]:v[2],k=w?v[2]:1,I=w?1:v[1],C=y.strides[0],R=w?y.strides[1]:y.strides[2],A=w?y.strides[2]:1,O=w?1:y.strides[1],M=e.data.get(r.dataId).values,z=e.data.get(o.dataId).values,U=y.values;for(let B=0;B<d.batchSize;++B){const G=B*N,j=B*C;for(let K=0;K<d.outHeight;++K){const Y=j+K*R,Z=K*d.strideHeight-b;for(let tt=0;tt<f;++tt){const Q=Z+tt*m;if(Q<0||Q>=d.inHeight)continue;const rt=tt*$[0],at=G+Q*T;for(let dt=0;dt<d.outWidth;++dt){const ht=Y+dt*A,gt=dt*d.strideWidth-x;for(let bt=0;bt<p;++bt){const Rt=gt+bt*g;if(Rt<0||Rt>=d.inWidth)continue;const Mt=rt+bt*$[1],Kt=at+Rt*k;let Lt=Mt;for(let _t=0;_t<d.inChannels;++_t){const Ht=M[Kt+_t*I];for(let Wt=0;Wt<d.outChannels;++Wt)U[ht+Wt*O]+=Ht*z[Lt+Wt];Lt+=d.outChannels}}}}}}return e.makeTensorInfo(y.shape,y.dtype,U)}const hO={kernelName:rc,backendName:"cpu",kernelFunc:Ww};function dO(n){const{inputs:t,backend:e,attrs:s}=n,{x:r,dy:o}=t,{strides:i,pad:a,dataFormat:l,dimRoundingMode:c,filterShape:u}=s;ot([r,o],"conv2dBackpropFilter");const h=ds(l),d=ye(r.shape,u,i,1,a,c,!1,h),{strideHeight:f,strideWidth:p,filterHeight:m,filterWidth:g}=d,x=d.dataFormat==="channelsLast",b=new be(d.filterShape,"float32"),w=d.padInfo.left,y=d.padInfo.top,v=e.data.get(r.dataId).values,$=e.data.get(o.dataId).values,N=new be(r.shape,r.dtype,v),T=new be(o.shape,o.dtype,$);for(let k=0;k<m;++k){const I=Math.max(0,Math.ceil((y-k)/f)),C=Math.min(d.outHeight,(d.inHeight+y-k)/f);for(let R=0;R<g;++R){const A=Math.max(0,Math.ceil((w-R)/p)),O=Math.min(d.outWidth,(d.inWidth+w-R)/p);for(let M=0;M<d.inChannels;++M)for(let z=0;z<d.outChannels;++z){let U=0;for(let B=0;B<d.batchSize;++B)for(let G=I;G<C;++G){const j=k+G*f-y;for(let K=A;K<O;++K){const Y=R+K*p-w;x?U+=N.get(B,j,Y,M)*T.get(B,G,K,z):U+=N.get(B,M,j,Y)*T.get(B,z,G,K)}}b.set(U,k,R,M,z)}}}return e.makeTensorInfo(b.shape,b.dtype,b.values)}const fO={kernelName:id,backendName:"cpu",kernelFunc:dO};function pO(n){const{inputs:t,backend:e,attrs:s}=n,{dy:r,filter:o}=t,{inputShape:i,strides:a,pad:l,dataFormat:c,dimRoundingMode:u}=s;ot([r,o],"conv2dBackpropInput");const h=lt(o.shape),d=lt(r.shape);let f=ds(c);const p=ye(i,o.shape,a,1,l,u,!1,f),m=new be(p.inShape,"float32"),g=m.values,x=e.data.get(r.dataId).values,b=e.data.get(o.dataId).values,[w,y,v]=h,{batchSize:$,filterHeight:N,filterWidth:T,inChannels:k,inHeight:I,inWidth:C,outChannels:R,outHeight:A,outWidth:O,strideHeight:M,strideWidth:z}=p;f=p.dataFormat;const U=N-1-p.padInfo.top,B=T-1-p.padInfo.left,G=f==="channelsLast",j=m.strides[0],K=G?m.strides[1]:m.strides[2],Y=G?m.strides[2]:1,Z=G?1:m.strides[1],tt=d[0],Q=G?d[1]:d[2],rt=G?d[2]:1,at=G?1:d[1];for(let dt=0;dt<$;++dt)for(let ht=0;ht<k;++ht)for(let gt=0;gt<I;++gt){const bt=gt-U,Rt=Math.max(0,Math.ceil(bt/M)),Mt=Math.min(A,(N+bt)/M);for(let Kt=0;Kt<C;++Kt){const Lt=Kt-B,_t=Math.max(0,Math.ceil(Lt/z)),Ht=Math.min(O,(T+Lt)/z);let Wt=0;for(let ge=Rt;ge<Mt;++ge){const ps=ge*M-bt;for(let Ke=_t;Ke<Ht;++Ke){const Us=Ke*z-Lt,mn=tt*dt+Q*ge+rt*Ke,Qn=w*(N-1-ps)+y*(T-1-Us)+v*ht;for(let ms=0;ms<R;++ms){const gs=x[mn+at*ms],xs=b[Qn+ms];Wt+=gs*xs}}}const Jn=j*dt+K*gt+Y*Kt+Z*ht;g[Jn]=Wt}}return e.makeTensorInfo(m.shape,m.dtype,m.values)}const mO={kernelName:oc,backendName:"cpu",kernelFunc:pO};function gO(n){const{inputs:t,backend:e,attrs:s}=n,{x:r,filter:o}=t,{strides:i,pad:a,dilations:l}=s;ot([r,o],"conv3d");const c=Os(r.shape,o.shape,i,l,a),{filterDepth:u,filterHeight:h,filterWidth:d,dilationDepth:f,dilationHeight:p,dilationWidth:m,padInfo:g}=c,x=g.front,b=g.left,w=g.top,y=new be(c.outShape,r.dtype),v=e.data.get(r.dataId).values,$=e.data.get(o.dataId).values,N=y.values,T=lt(r.shape),k=lt(o.shape);for(let I=0;I<c.batchSize;++I){const C=I*T[0],R=I*y.strides[0];for(let A=0;A<c.outDepth;++A){const O=R+A*y.strides[1],M=A*c.strideDepth-x;for(let z=0;z<u;++z){const U=M+z*f;if(U<0||U>=c.inDepth)continue;const B=z*k[0],G=C+U*T[1];for(let j=0;j<c.outHeight;++j){const K=O+j*y.strides[2],Y=j*c.strideHeight-w;for(let Z=0;Z<h;++Z){const tt=Y+Z*p;if(tt<0||tt>=c.inHeight)continue;const Q=B+Z*k[1],rt=G+tt*T[2];for(let at=0;at<c.outWidth;++at){const dt=K+at*c.outChannels,ht=at*c.strideWidth-b;for(let gt=0;gt<d;++gt){const bt=ht+gt*m;if(bt<0||bt>=c.inWidth)continue;const Rt=Q+gt*k[2],Mt=rt+bt*c.inChannels;let Kt=Rt;for(let Lt=0;Lt<c.inChannels;++Lt){const _t=v[Mt+Lt];for(let Ht=0;Ht<c.outChannels;++Ht)N[dt+Ht]+=_t*$[Kt+Ht];Kt+=c.outChannels}}}}}}}}return e.makeTensorInfo(y.shape,y.dtype,y.values)}const xO={kernelName:ic,backendName:"cpu",kernelFunc:gO};function bO(n){const{inputs:t,backend:e,attrs:s}=n,{x:r,dy:o}=t,{strides:i,pad:a,filterShape:l}=s;ot([r,o],"conv3dBackpropFilterV2");const c=lt(r.shape),u=lt(o.shape),h=Os(r.shape,l,i,1,a),d=h.strideDepth,f=h.strideHeight,p=h.strideWidth,m=h.filterDepth,g=h.filterHeight,x=h.filterWidth,b=new be(h.filterShape,"float32"),w=b.values,[y,v,$,N]=b.strides,T=e.data.get(o.dataId).values,[k,I,C,R]=u,A=e.data.get(r.dataId).values,[O,M,z,U]=c,B=h.padInfo.front,G=h.padInfo.left,j=h.padInfo.top;for(let K=0;K<m;++K){const Y=Math.max(0,Math.ceil((B-K)/d)),Z=Math.min(h.outDepth,(h.inDepth+B-K)/d),tt=K*y;for(let Q=0;Q<g;++Q){const rt=Math.max(0,Math.ceil((j-Q)/f)),at=Math.min(h.outHeight,(h.inHeight+j-Q)/f),dt=Q*v+tt;for(let ht=0;ht<x;++ht){const gt=Math.max(0,Math.ceil((G-ht)/p)),bt=Math.min(h.outWidth,(h.inWidth+G-ht)/p),Rt=ht*$+dt;for(let Mt=0;Mt<h.inChannels;++Mt){const Kt=Mt*N+Rt;for(let Lt=0;Lt<h.outChannels;++Lt){let _t=0;for(let Ht=0;Ht<h.batchSize;++Ht){const Wt=Ht*O,Jn=Ht*k;for(let ge=Y;ge<Z;++ge){const Ke=(K+ge*d-B)*M+Wt,Us=ge*I+Jn;for(let mn=rt;mn<at;++mn){const ms=(Q+mn*f-j)*z+Ke,gs=mn*C+Us;for(let xs=gt;xs<bt;++xs){const Tu=(ht+xs*p-G)*U+ms,Eu=xs*R+gs;_t+=A[Tu+Mt]*T[Eu+Lt]}}}}w[Kt+Lt]=_t}}}}}return e.makeTensorInfo(b.shape,b.dtype,b.values)}const yO={kernelName:ad,backendName:"cpu",kernelFunc:bO};function wO(n){const{inputs:t,backend:e,attrs:s}=n,{dy:r,filter:o}=t,{pad:i,strides:a,inputShape:l}=s;ot([r],"conv3dBackpropInputV2");const c=lt(r.shape),u=lt(o.shape),h=Os(l,o.shape,a,1,i),d=new be(h.inShape,"float32"),f=d.values,[p,m,g,x]=d.strides,b=e.data.get(r.dataId).values,[w,y,v,$]=c,N=e.data.get(o.dataId).values,[T,k,I,C]=u,{batchSize:R,filterDepth:A,filterHeight:O,filterWidth:M,inChannels:z,inDepth:U,inHeight:B,inWidth:G,outChannels:j,outDepth:K,outHeight:Y,outWidth:Z,strideDepth:tt,strideHeight:Q,strideWidth:rt}=h,at=A-1-h.padInfo.front,dt=O-1-h.padInfo.top,ht=M-1-h.padInfo.left;for(let gt=0;gt<R;++gt)for(let bt=0;bt<z;++bt)for(let Rt=0;Rt<U;++Rt){const Mt=Rt-at,Kt=Math.max(0,Math.ceil(Mt/tt)),Lt=Math.min(K,(A+Mt)/tt);for(let _t=0;_t<B;++_t){const Ht=_t-dt,Wt=Math.max(0,Math.ceil(Ht/Q)),Jn=Math.min(Y,(O+Ht)/Q);for(let ge=0;ge<G;++ge){const ps=ge-ht,Ke=Math.max(0,Math.ceil(ps/rt)),Us=Math.min(Z,(M+ps)/rt);let mn=0;for(let Qn=Kt;Qn<Lt;++Qn){const ms=Qn*tt-Mt;for(let gs=Wt;gs<Jn;++gs){const xs=gs*Q-Ht;for(let $o=Ke;$o<Us;++$o){const Tu=$o*rt-ps,Eu=w*gt+y*Qn+v*gs+$*$o,yC=T*(A-1-ms)+k*(O-1-xs)+I*(M-1-Tu)+C*bt;for(let Ia=0;Ia<j;++Ia){const wC=b[Eu+Ia],vC=N[yC+Ia];mn+=wC*vC}}}}f[p*gt+m*Rt+g*_t+x*ge+bt]=mn}}}return e.makeTensorInfo(d.shape,d.dtype,d.values)}const vO={kernelName:ld,backendName:"cpu",kernelFunc:wO};const CO=Dt(gi,n=>Math.cos(n)),$O={kernelName:gi,backendName:"cpu",kernelFunc:CO};const kO=Dt(xi,n=>Math.cosh(n)),IO={kernelName:xi,backendName:"cpu",kernelFunc:kO};function SO(n){const{inputs:t,backend:e,attrs:s}=n,{image:r,boxes:o,boxInd:i}=t,{cropSize:a,method:l,extrapolationValue:c}=s,[u,h,d,f]=r.shape,p=o.shape[0],[m,g]=a,x=wt([p,m,g,f],"float32"),b=e.data.get(o.dataId).values,w=e.data.get(i.dataId).values,y=e.data.get(r.dataId).values,v=lt(r.shape),$=lt(x.shape);for(let N=0;N<p;N++){const T=N*4,k=b[T],I=b[T+1],C=b[T+2],R=b[T+3],A=w[N];if(A>=u)continue;const O=m>1?(C-k)*(h-1)/(m-1):0,M=g>1?(R-I)*(d-1)/(g-1):0;for(let z=0;z<m;z++){const U=m>1?k*(h-1)+z*O:.5*(k+C)*(h-1);if(U<0||U>h-1){for(let B=0;B<g;B++)for(let G=0;G<f;G++){const j=G+B*$[2]+z*$[1]+N*$[0];x.values[j]=c}continue}if(l==="bilinear"){const B=Math.floor(U),G=Math.ceil(U),j=U-B;for(let K=0;K<g;K++){const Y=g>1?I*(d-1)+K*M:.5*(I+R)*(d-1);if(Y<0||Y>d-1){for(let rt=0;rt<f;rt++){const at=rt+K*$[2]+z*$[1]+N*$[0];x.values[at]=c}continue}const Z=Math.floor(Y),tt=Math.ceil(Y),Q=Y-Z;for(let rt=0;rt<f;rt++){let at=rt+Z*v[2]+B*v[1]+A*v[0];const dt=y[at];at=rt+tt*v[2]+B*v[1]+A*v[0];const ht=y[at];at=rt+Z*v[2]+G*v[1]+A*v[0];const gt=y[at];at=rt+tt*v[2]+G*v[1]+A*v[0];const bt=y[at],Rt=dt+(ht-dt)*Q,Mt=gt+(bt-gt)*Q;at=rt+K*$[2]+z*$[1]+N*$[0],x.values[at]=Rt+(Mt-Rt)*j}}}else for(let B=0;B<g;++B){const G=g>1?I*(d-1)+B*M:.5*(I+R)*(d-1);if(G<0||G>d-1){for(let Y=0;Y<f;Y++){const Z=Y+B*$[2]+z*$[1]+N*$[0];x.values[Z]=c}continue}const j=Math.round(G),K=Math.round(U);for(let Y=0;Y<f;Y++){const Z=Y+j*v[2]+K*v[1]+A*v[0],tt=Y+B*$[2]+z*$[1]+N*$[0];x.values[tt]=y[Z]}}}}return e.makeTensorInfo(x.shape,x.dtype,x.values)}const NO={kernelName:ud,backendName:"cpu",kernelFunc:SO};function TO(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{axis:o,exclusive:i,reverse:a}=s;ot(r,"cumprod");const l=jt([o],r.shape.length);let c=r;l!=null&&(c=ze({inputs:{x:r},backend:e,attrs:{perm:l}}));const u=Jt(1,r.shape.length)[0];if(u!==c.shape.length-1)throw new Error(`backend.cumprod in CPU expects an inner-most axis=${c.shape.length-1} but got axis=${u}`);const h=He(c.dtype,"int32"),d=Xh(q(c.shape),h),f=e.data.get(c.dataId).values,p=c.shape[c.shape.length-1],m=a?(x,b)=>x+p-b-1:(x,b)=>x+b;for(let x=0;x<f.length;x+=p)for(let b=0;b<p;b++){const w=m(x,b);if(b===0)d[w]=i?1:f[w];else{const y=m(x,b-1);d[w]=i?f[y]*d[y]:f[w]*d[y]}}const g=e.makeTensorInfo(c.shape,h,d);if(l!=null){const x=Ms(l),b=ze({inputs:{x:g},backend:e,attrs:{perm:x}});return e.disposeIntermediateTensorInfo(g),e.disposeIntermediateTensorInfo(c),b}return g}const EO={kernelName:cd,backendName:"cpu",kernelFunc:TO};function RO(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{axis:o,exclusive:i,reverse:a}=s;ot(r,"cumsum");const l=jt([o],r.shape.length);let c=r;l!=null&&(c=ze({inputs:{x:r},backend:e,attrs:{perm:l}}));const u=Jt(1,r.shape.length)[0];if(u!==c.shape.length-1)throw new Error(`backend.cumsum in CPU expects an inner-most axis=${c.shape.length-1} but got axis=${u}`);const h=He(c.dtype,"int32"),d=$e(q(c.shape),h),f=e.data.get(c.dataId).values,p=c.shape[c.shape.length-1],m=a?(x,b)=>x+p-b-1:(x,b)=>x+b;for(let x=0;x<f.length;x+=p)for(let b=0;b<p;b++){const w=m(x,b);if(b===0)d[w]=i?0:f[w];else{const y=m(x,b-1);d[w]=i?f[y]+d[y]:f[w]+d[y]}}const g=e.makeTensorInfo(c.shape,h,d);if(l!=null){const x=Ms(l),b=ze({inputs:{x:g},backend:e,attrs:{perm:x}});return e.disposeIntermediateTensorInfo(g),e.disposeIntermediateTensorInfo(c),b}return g}const AO={kernelName:ac,backendName:"cpu",kernelFunc:RO};function DO(n){const{inputs:t,backend:e,attrs:s}=n,{x:r,weights:o}=t,{size:i,binaryOutput:a}=s;if(r.shape.length===1){const l=e.data.get(r.dataId).values,c=e.data.get(o.dataId).values,u=pp(l,c,o.dtype,o.shape,i);return e.makeTensorInfo([i],o.dtype,u)}else if(r.shape.length===2){const l=e.bufferSync(r),c=e.bufferSync(o),u=U1(l,c,i,a);return e.makeTensorInfo(u.shape,o.dtype,u.values)}throw new Error(`Error in denseBincount: input must be at most rank 2, but got rank${r.shape.length}.`)}const _O={kernelName:hd,backendName:"cpu",kernelFunc:DO};function FO(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{blockSize:o,dataFormat:i}=s;S(i==="NHWC",()=>`Only NHWC dataFormat supported on CPU for depthToSpace. Got ${i}`);const a=r.shape[0],l=r.shape[1],c=r.shape[2],u=r.shape[3],h=l*o,d=c*o,f=u/(o*o),p=e.data.get(r.dataId).values,m=new Float32Array(a*h*d*f);let g=0;for(let x=0;x<a;++x)for(let b=0;b<h;++b){const w=Math.floor(b/o),y=b%o;for(let v=0;v<d;++v){const $=Math.floor(v/o),N=v%o,T=(y*o+N)*f;for(let k=0;k<f;++k){const C=k+T+u*($+c*(w+l*x));m[g++]=p[C]}}}return e.makeTensorInfo([a,h,d,f],r.dtype,m)}const OO={kernelName:dd,backendName:"cpu",kernelFunc:FO};function Uw(n){const{inputs:t,backend:e,attrs:s}=n,{x:r,filter:o}=t,{strides:i,pad:a,dilations:l,dimRoundingMode:c}=s;ot([r,o],"depthwiseConv2DNative");const u=lt(r.shape),h=lt(o.shape);let d=l;d==null&&(d=[1,1]),S(Ie(i,d),()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${i} and dilations '${d}'`);const f=ye(r.shape,o.shape,i,d,a,c,!0),{filterHeight:p,filterWidth:m,dilationHeight:g,dilationWidth:x,padInfo:b}=f,w=b.left,y=b.top,v=f.outChannels/f.inChannels,$=new be(f.outShape,r.dtype),N=e.data.get(r.dataId).values,T=e.data.get(o.dataId).values,k=$.values;for(let I=0;I<f.batchSize;++I){const C=I*u[0],R=I*$.strides[0];for(let A=0;A<f.outHeight;++A){const O=R+A*$.strides[1],M=A*f.strideHeight-y;for(let z=0;z<p;++z){const U=M+z*g;if(U<0||U>=f.inHeight)continue;const B=z*h[0],G=C+U*u[1];for(let j=0;j<f.outWidth;++j){const K=O+j*$.strides[2],Y=j*f.strideWidth-w;for(let Z=0;Z<m;++Z){const tt=Y+Z*x;if(tt<0||tt>=f.inWidth)continue;const Q=B+Z*h[1],rt=G+tt*f.inChannels;let at=K,dt=Q;for(let ht=0;ht<f.inChannels;++ht){const gt=N[rt+ht];for(let bt=0;bt<v;++bt)k[at+bt]+=gt*T[dt+bt];at+=v,dt+=v}}}}}}return e.makeTensorInfo($.shape,$.dtype,$.values)}const MO={kernelName:lc,backendName:"cpu",kernelFunc:Uw};function LO(n){const{inputs:t,backend:e,attrs:s}=n,{x:r,dy:o}=t,{strides:i,dilations:a,pad:l,dimRoundingMode:c,filterShape:u}=s;ot([r,o],"depthwiseConv2dNativeBackpropFilter");const h=ye(r.shape,u,i,a,l,c,!0),{strideHeight:d,strideWidth:f,filterHeight:p,filterWidth:m}=h,g=new be(h.filterShape,"float32"),x=h.padInfo.left,b=h.padInfo.top,w=h.outChannels/h.inChannels,y=e.data.get(r.dataId).values,v=new be(r.shape,r.dtype,y),$=e.data.get(o.dataId).values,N=new be(o.shape,o.dtype,$);for(let T=0;T<p;++T){const k=Math.max(0,Math.ceil((b-T)/d)),I=Math.min(h.outHeight,(h.inHeight+b-T)/d);for(let C=0;C<m;++C){const R=Math.max(0,Math.ceil((x-C)/f)),A=Math.min(h.outWidth,(h.inWidth+x-C)/f);for(let O=0;O<h.outChannels;++O){const M=Math.trunc(O/w),z=O%w;let U=0;for(let B=0;B<h.batchSize;++B)for(let G=k;G<I;++G){const j=T+G*d-b;for(let K=R;K<A;++K){const Y=C+K*f-x;U+=v.get(B,j,Y,M)*N.get(B,G,K,O)}}g.set(U,T,C,M,z)}}}return e.makeTensorInfo(g.shape,g.dtype,g.values)}const PO={kernelName:fd,backendName:"cpu",kernelFunc:LO};function zO(n){const{inputs:t,backend:e,attrs:s}=n,{dy:r,filter:o}=t,{strides:i,dilations:a,pad:l,dimRoundingMode:c,inputShape:u}=s;ot([r,o],"depthwiseConv2DNativeBackpropInput");const h=lt(r.shape),d=lt(o.shape),f=ye(u,o.shape,i,a,l,c,!0),p=new be(f.inShape,"float32"),m=p.values,[g,x,b]=p.strides,w=e.data.get(r.dataId).values,[y,v,$]=h,N=e.data.get(o.dataId).values,[T,k,I]=d,{batchSize:C,filterHeight:R,filterWidth:A,inChannels:O,inHeight:M,inWidth:z,outChannels:U,outHeight:B,outWidth:G,strideHeight:j,strideWidth:K}=f,Y=R-1-f.padInfo.top,Z=A-1-f.padInfo.left,tt=U/O;for(let Q=0;Q<C;++Q)for(let rt=0;rt<O;++rt)for(let at=0;at<M;++at){const dt=at-Y,ht=Math.max(0,Math.ceil(dt/j)),gt=Math.min(B,(R+dt)/j);for(let bt=0;bt<z;++bt){const Rt=bt-Z,Mt=Math.max(0,Math.ceil(Rt/K)),Kt=Math.min(G,(A+Rt)/K);let Lt=0;for(let _t=ht;_t<gt;++_t){const Ht=_t*j-dt;for(let Wt=Mt;Wt<Kt;++Wt){const Jn=Wt*K-Rt,ge=y*Q+v*_t+$*Wt,ps=T*(R-1-Ht)+k*(A-1-Jn)+I*rt;for(let Ke=0;Ke<tt;++Ke){const Us=rt*tt+Ke,mn=w[ge+Us],Qn=N[ps+Ke];Lt+=mn*Qn}}}m[g*Q+x*at+b*bt+rt]=Lt}}return e.makeTensorInfo(p.shape,p.dtype,p.values)}const BO={kernelName:pd,backendName:"cpu",kernelFunc:zO};function VO(n){const{inputs:t,backend:e}=n,{x:s}=t,r=q(s.shape),o=e.data.get(s.dataId).values,i=wt([r,r],s.dtype),a=i.values;for(let c=0;c<o.length;c++)a[c*r+c]=o[c];const l=[...s.shape,...s.shape];return e.makeTensorInfo(l,i.dtype,i.values)}const WO={kernelName:px,backendName:"cpu",kernelFunc:VO};const UO={kernelName:cc,backendName:"cpu",kernelFunc:({inputs:n,backend:t,attrs:e})=>{const{x:s,filter:r}=n,{strides:o,pad:i,dilations:a}=e,l=t,c=l.data.get(s.dataId).values,u=s.shape.length,h=l.data.get(r.dataId).values,d=r.shape.length,{batchSize:f,inHeight:p,inWidth:m,inChannels:g,outHeight:x,outWidth:b,padInfo:w,strideHeight:y,strideWidth:v,filterHeight:$,filterWidth:N,dilationHeight:T,dilationWidth:k,outShape:I}=ea(s.shape,r.shape,o,i,"NHWC",a),C=q(I),R=I.length,A=Xt(s.dtype,C);for(let M=0;M<f;++M)for(let z=0;z<x;++z){const U=z*y-w.top;for(let B=0;B<b;++B){const G=B*v-w.left;for(let j=0;j<g;++j){let K=Number.MIN_SAFE_INTEGER;for(let Z=0;Z<$;++Z){const tt=U+Z*T;if(tt>=0&&tt<p)for(let Q=0;Q<N;++Q){const rt=G+Q*k;if(rt>=0&&rt<m){const at=Pn([M,tt,rt,j],u,lt(s.shape)),dt=Pn([Z,Q,j],d,lt(r.shape)),ht=c[at]+h[dt];ht>K&&(K=ht)}}}const Y=Pn([M,z,B,j],R,lt(I));A[Y]=K}}}return{dataId:l.write(wr(A,s.dtype),I,s.dtype),shape:I,dtype:s.dtype}}};const GO={kernelName:ah,backendName:"cpu",kernelFunc:({inputs:n,backend:t,attrs:e})=>{const{x:s,filter:r,dy:o}=n,{strides:i,pad:a,dilations:l}=e,c=t,u=$n(s.shape,c.data.get(s.dataId).values),h=$n(r.shape,c.data.get(r.dataId).values),{batchSize:d,inHeight:f,inWidth:p,inChannels:m,outHeight:g,outWidth:x,padInfo:b,strideHeight:w,strideWidth:y,filterHeight:v,filterWidth:$,dilationHeight:N,dilationWidth:T,outShape:k}=ea(s.shape,r.shape,i,a,"NHWC",l);S(o.rank===k.length,()=>`Error in ${ah}, dy must have the same rank as output ${k.length}, but got ${o.rank}`);const I=$n(k,c.data.get(o.dataId).values),C=ux(r.shape,r.dtype);for(let A=0;A<d;++A)for(let O=0;O<g;++O){const M=O*w-b.top;for(let z=0;z<x;++z){const U=z*y-b.left;for(let B=0;B<m;++B){let G=Number.MIN_SAFE_INTEGER,j=0,K=0;for(let Y=0;Y<v;++Y){const Z=M+Y*N;if(Z>=0&&Z<f)for(let tt=0;tt<$;++tt){const Q=U+tt*T;if(Q>=0&&Q<p){const rt=u[A][Z][Q][B]+h[Y][tt][B];rt>G&&(G=rt,j=Y,K=tt)}}}C[j][K][B]+=I[A][O][z][B]}}}return{dataId:c.write(wr(C,s.dtype),r.shape,r.dtype),shape:r.shape,dtype:r.dtype}}};const HO={kernelName:ih,backendName:"cpu",kernelFunc:({inputs:n,backend:t,attrs:e})=>{const{x:s,filter:r,dy:o}=n,{strides:i,pad:a,dilations:l}=e,c=t,u=$n(s.shape,c.data.get(s.dataId).values),h=$n(r.shape,c.data.get(r.dataId).values),{batchSize:d,inHeight:f,inWidth:p,inChannels:m,outHeight:g,outWidth:x,padInfo:b,strideHeight:w,strideWidth:y,filterHeight:v,filterWidth:$,dilationHeight:N,dilationWidth:T,outShape:k}=ea(s.shape,r.shape,i,a,"NHWC",l);S(o.rank===k.length,()=>`Error in ${ih}, dy must have the same rank as output ${k.length}, but got ${o.rank}`);const I=$n(k,c.data.get(o.dataId).values),C=ux(s.shape,s.dtype);for(let A=0;A<d;++A)for(let O=0;O<g;++O){const M=O*w-b.top;for(let z=0;z<x;++z){const U=z*y-b.left;for(let B=0;B<m;++B){let G=Number.MIN_SAFE_INTEGER,j=M<0?0:M,K=U<0?0:U;for(let Y=0;Y<v;++Y){const Z=M+Y*N;if(Z>=0&&Z<f)for(let tt=0;tt<$;++tt){const Q=U+tt*T;if(Q>=0&&Q<p){const rt=u[A][Z][Q][B]+h[Y][tt][B];rt>G&&(G=rt,j=Z,K=Q)}}}C[A][j][K][B]+=I[A][O][z][B]}}}return{dataId:c.write(wr(C,s.dtype),s.shape,s.dtype),shape:s.shape,dtype:s.dtype}}};function qO(n){const{inputs:t,backend:e,attrs:s}=n,{image:r}=t,{canvas:o,options:i}=s,{contextOptions:a,imageOptions:l}=i||{},c=l?.alpha||1,u=a?.contextType||"2d";if(u!=="2d")throw new Error(`Context type ${a.contextType} is not supported by the CPU backend.`);const h=o.getContext(u,a?.contextAttributes||{});if(h==null)throw new Error(`Could not get the context with ${u} type.`);const[d,f]=r.shape.slice(0,2),p=r.shape.length===2?1:r.shape[2],m=e.data.get(r.dataId).values,g=r.dtype==="float32"?255:1,x=new Uint8ClampedArray(f*d*4);for(let w=0;w<d*f;++w){const y=[0,0,0,255*c];for(let $=0;$<p;$++){const N=m[w*p+$];if(r.dtype==="float32"){if(N<0||N>1)throw new Error(`Tensor values for a float32 Tensor must be in the range [0 - 1] but encountered ${N}.`)}else if(r.dtype==="int32"&&(N<0||N>255))throw new Error(`Tensor values for a int32 Tensor must be in the range [0 - 255] but encountered ${N}.`);p===1?(y[0]=N*g,y[1]=N*g,y[2]=N*g):y[$]=N*g}const v=w*4;x[v+0]=Math.round(y[0]),x[v+1]=Math.round(y[1]),x[v+2]=Math.round(y[2]),x[v+3]=Math.round(y[3])}o.width=f,o.height=d;const b=new ImageData(x,f,d);return h.putImageData(b,0,0),r}const jO={kernelName:o$,backendName:"cpu",kernelFunc:qO};function xa(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{axis:o,keepDims:i}=s;ot(r,"sum");let a;r.dtype==="bool"?a=As({inputs:{x:r},backend:e,attrs:{dtype:"int32"}}):a=Xn({inputs:{x:r},backend:e});const l=a.shape.length,c=vt(o,a.shape),u=jt(c,l);let h=c,d=a;u!=null&&(d=ze({inputs:{x:a},backend:e,attrs:{perm:u}}),h=Jt(h.length,l)),we("sum",h,d.shape.length);const[f,p]=me(d.shape,h),m=He(d.dtype,"int32");let g=El(e,f,m);const x=q(p),b=e.data.get(g.dataId).values,w=e.data.get(d.dataId).values;for(let y=0;y<b.length;++y){const v=y*x;let $=0;for(let N=0;N<x;++N)$+=w[v+N];b[y]=$}if(i){const y=ne(g.shape,c),v=g;g=Bt({inputs:{x:g},backend:e,attrs:{shape:y}}),e.disposeIntermediateTensorInfo(v)}return e.disposeIntermediateTensorInfo(a),u!=null&&e.disposeIntermediateTensorInfo(d),g}const KO={kernelName:Wc,backendName:"cpu",kernelFunc:xa};function XO(n){const{inputs:t,backend:e,attrs:s}=n,{equation:r}=s,o=t,{allDims:i,summedDims:a,idDims:l}=Pf(r,o.length);Bf(i.length,l,o);const{path:c,steps:u}=Vf(a,l),h=u.length;let d=null,f=i.length;const p=[];for(let m=0;m<h;++m){for(const g of u[m]){const{permutationIndices:x,expandDims:b}=zf(f,l[g]);let w;Wf(x)?w=o[g]:(w=ze({inputs:{x:o[g]},backend:e,attrs:{perm:x}}),p.push(w));const y=w.shape.slice();for(let v=0;v<b.length;++v)y.splice(b[v],0,1);Et(w.shape,y)||(w=Bt({inputs:{x:w},backend:e,attrs:{shape:y}}),p.push(w)),d===null?d=w:(d=yu({inputs:{a:w,b:d},backend:e}),p.push(d))}m<h-1&&(c[m]>=0&&(d=xa({inputs:{x:d},backend:e,attrs:{axis:c[m]-(i.length-f),keepDims:!1}}),p.push(d)),f--)}for(const m of p)m!==d&&e.disposeIntermediateTensorInfo(m);return d}const YO={kernelName:md,backendName:"cpu",kernelFunc:XO};function ZO(n){const{inputs:t,backend:e}=n,{dy:s,y:r}=t;ot([s,r],"eluGrad");const o=new Float32Array(q(r.shape)),i=e.data.get(r.dataId).values,a=e.data.get(s.dataId).values;for(let l=0;l<i.length;++l){const c=i[l];c>=0?o[l]=a[l]:o[l]=a[l]*(c+1)}return e.makeTensorInfo(r.shape,"float32",o)}const JO={kernelName:gd,backendName:"cpu",kernelFunc:ZO};const QO=Af,tM=Df,eM=_f,nM=Ff,sM=Of,rM=Mf,oM=Dt(wi,n=>{const t=Math.sign(n),e=Math.abs(n),s=1/(1+QO*e);return t*(1-((((rM*s+sM)*s+nM)*s+eM)*s+tM)*s*Math.exp(-e*e))}),iM={kernelName:wi,backendName:"cpu",kernelFunc:oM};function Dl(n){const{inputs:t,backend:e,attrs:s}=n,{input:r}=t,{dim:o}=s,i=r.shape.length,a=r.shape.slice();let l=o;return o<0&&(S(-(i+1)<=o,()=>`Axis must be in the interval [${-(i+1)}, ${i}]`),l=i+o+1),a.splice(l,0,1),Bt({inputs:{x:r},backend:e,attrs:{shape:a}})}const aM={kernelName:hc,backendName:"cpu",kernelFunc:Dl};const lM=te((n,t)=>n/t),wp=ue(bi,lM),Dh={kernelName:bi,backendName:"cpu",kernelFunc:wp};function Gw(n,t,e){const s=n.shape,r=s[0],o=s[1],i=e.data.get(n.dataId),a=i.complexTensorInfos.real,l=i.complexTensorInfos.imag,c=[r,o],u=q(c),h=Ce("float32",u),d=Ce("float32",u);for(let g=0;g<r;g++){const x=gr({inputs:{x:a},backend:e,attrs:{begin:[g,0],size:[1,o]}}),b=gr({inputs:{x:l},backend:e,attrs:{begin:[g,0],size:[1,o]}}),w=We({inputs:{real:x,imag:b},backend:e}),{real:y,imag:v}=cM(w,t,e),$=as(y,v);for(let N=0;N<o;N++){const T=Lf($,N);h[g*o+N]=T.real,d[g*o+N]=T.imag}e.disposeIntermediateTensorInfo(x),e.disposeIntermediateTensorInfo(b),e.disposeIntermediateTensorInfo(w)}const f=e.makeTensorInfo(c,"float32",h),p=e.makeTensorInfo(c,"float32",d),m=We({inputs:{real:f,imag:p},backend:e});return e.disposeIntermediateTensorInfo(f),e.disposeIntermediateTensorInfo(p),m}function cM(n,t,e){const s=q(n.shape),r=e.data.get(n.dataId),o=e.data.get(r.complexTensorInfos.real.dataId).values,i=e.data.get(r.complexTensorInfos.imag.dataId).values;if(uM(s)){const a=_h(o,i,s,t,e),l=[n.shape[0],n.shape[1]];if(t){const c=e.makeTensorInfo(l,"float32",a.real),u=e.makeTensorInfo(l,"float32",a.imag),h=e.makeTensorInfo([],"float32",_s(s,"float32")),d=Xn({inputs:{x:h},backend:e}),f=Dh.kernelFunc({inputs:{a:c,b:h},backend:e}),p=Dh.kernelFunc({inputs:{a:u,b:d},backend:e}),m=e.data.get(f.dataId).values,g=e.data.get(p.dataId).values;return e.disposeIntermediateTensorInfo(c),e.disposeIntermediateTensorInfo(u),e.disposeIntermediateTensorInfo(h),e.disposeIntermediateTensorInfo(d),e.disposeIntermediateTensorInfo(f),e.disposeIntermediateTensorInfo(p),{real:m,imag:g}}return a}else{const a=as(o,i),l=hM(a,s,t);return sb(l)}}function uM(n){return(n&n-1)===0}function _h(n,t,e,s,r){if(e===1)return{real:n,imag:t};const o=as(n,t),i=e/2,a=rb(o),l=a.real,c=a.imag,u=[l.length],h=r.makeTensorInfo(u,"float32",l),d=r.makeTensorInfo(u,"float32",c),f=We({inputs:{real:h,imag:d},backend:r}),p=ob(o),m=p.real,g=p.imag,x=[m.length],b=r.makeTensorInfo(x,"float32",m),w=r.makeTensorInfo(x,"float32",g),y=We({inputs:{real:b,imag:w},backend:r}),v=_h(l,c,i,s,r),$=v.real,N=v.imag,T=[$.length],k=r.makeTensorInfo(T,"float32",$),I=r.makeTensorInfo(T,"float32",N),C=We({inputs:{real:k,imag:I},backend:r}),R=_h(m,g,i,s,r),A=R.real,O=R.imag,M=[A.length],z=r.makeTensorInfo(M,"float32",A),U=r.makeTensorInfo(M,"float32",O),B=We({inputs:{real:z,imag:U},backend:r}),G=ab(e,s),j=[G.real.length],K=r.makeTensorInfo(j,"float32",G.real),Y=r.makeTensorInfo(j,"float32",G.imag),Z=We({inputs:{real:K,imag:Y},backend:r}),tt=yu({inputs:{a:Z,b:B},backend:r}),Q=Zr({inputs:{a:C,b:tt},backend:r}),rt=bp({inputs:{a:C,b:tt},backend:r}),at=mr({inputs:{input:Q},backend:r}),dt=mr({inputs:{input:rt},backend:r}),ht=Jr({inputs:{input:Q},backend:r}),gt=Jr({inputs:{input:rt},backend:r}),bt=Qr({inputs:[at,dt],backend:r,attrs:{axis:0}}),Rt=Qr({inputs:[ht,gt],backend:r,attrs:{axis:0}}),Mt=r.data.get(bt.dataId).values,Kt=r.data.get(Rt.dataId).values;return r.disposeIntermediateTensorInfo(h),r.disposeIntermediateTensorInfo(d),r.disposeIntermediateTensorInfo(f),r.disposeIntermediateTensorInfo(b),r.disposeIntermediateTensorInfo(w),r.disposeIntermediateTensorInfo(y),r.disposeIntermediateTensorInfo(k),r.disposeIntermediateTensorInfo(I),r.disposeIntermediateTensorInfo(C),r.disposeIntermediateTensorInfo(z),r.disposeIntermediateTensorInfo(U),r.disposeIntermediateTensorInfo(B),r.disposeIntermediateTensorInfo(K),r.disposeIntermediateTensorInfo(Y),r.disposeIntermediateTensorInfo(Z),r.disposeIntermediateTensorInfo(tt),r.disposeIntermediateTensorInfo(Q),r.disposeIntermediateTensorInfo(rt),r.disposeIntermediateTensorInfo(at),r.disposeIntermediateTensorInfo(ht),r.disposeIntermediateTensorInfo(dt),r.disposeIntermediateTensorInfo(gt),r.disposeIntermediateTensorInfo(bt),r.disposeIntermediateTensorInfo(Rt),{real:Mt,imag:Kt}}function hM(n,t,e){const s=new Float32Array(t*2);for(let r=0;r<t;r++){let o=0,i=0;for(let a=0;a<t;a++){const l=lb(r*a,t,e),c=Lf(n,a);o+=c.real*l.real-c.imag*l.imag,i+=c.real*l.imag+c.imag*l.real}e&&(o/=t,i/=t),ib(s,o,i,r)}return s}function dM(n){const{inputs:t,backend:e}=n,{input:s}=t,r=q(s.shape),o=s.shape[s.shape.length-1],i=r/o,a=Bt({inputs:{x:s},backend:e,attrs:{shape:[i,o]}}),l=Gw(a,!1,e),c=Bt({inputs:{x:l},backend:e,attrs:{shape:s.shape}});return e.disposeIntermediateTensorInfo(a),e.disposeIntermediateTensorInfo(l),c}const fM={kernelName:xd,backendName:"cpu",kernelFunc:dM};function vp(n){const{backend:t,attrs:e}=n,{shape:s,value:r,dtype:o}=e,i=o||io(r),a=Xt(i,q(s));return mM(a,r,i),t.makeTensorInfo(s,i,a)}const pM={kernelName:bd,backendName:"cpu",kernelFunc:vp};function mM(n,t,e){n.fill(t)}const gM={kernelName:yd,backendName:"cpu",kernelFunc:({inputs:n,attrs:t,backend:e})=>{const{image:s}=n,r=e,o=Ce(s.dtype,q(s.shape)),[i,a,l,c]=s.shape,u=r.data.get(s.dataId).values;for(let d=0;d<i;d++){const f=d*l*a*c;for(let p=0;p<a;p++){const m=p*(l*c);for(let g=0;g<l;g++){const x=g*c;for(let b=0;b<c;b++){const w=Math.round(l-g-1),y=f+m+x+b;let v=u[y];if(w>=0&&w<l){const $=w*c,N=f+m+$+b;v=u[N]}o[y]=v}}}}return{dataId:r.write(o,s.shape,s.dtype),shape:s.shape,dtype:s.dtype}}};function xM(n){const{inputs:t,backend:e,attrs:s}=n,{x:r,filter:o,bias:i,preluActivationWeights:a}=t,{strides:l,pad:c,dataFormat:u,dilations:h,dimRoundingMode:d,activation:f,leakyreluAlpha:p}=s;let m=Ww({inputs:{x:r,filter:o},backend:e,attrs:{strides:l,pad:c,dataFormat:u,dilations:h,dimRoundingMode:d}});if(i){const g=m;if(u==="NCHW"&&i.shape.length===1&&i.shape[0]!==1){const x=Bt({inputs:{x:i},backend:e,attrs:{shape:[i.shape[0],1,1]}});m=Zr({inputs:{a:m,b:x},backend:e}),e.disposeIntermediateTensorInfo(x)}else m=Zr({inputs:{a:m,b:i},backend:e});e.disposeIntermediateTensorInfo(g)}if(f){const g=m;if(u==="NCHW"&&f==="prelu"&&a.shape.length===1&&a.shape[0]!==1){const x=Bt({inputs:{x:a},backend:e,attrs:{shape:[a.shape[0],1,1]}});m=Al(e,m,f,x,p),e.disposeIntermediateTensorInfo(x)}else m=Al(e,m,f,a,p);e.disposeIntermediateTensorInfo(g)}return m}const bM={kernelName:ul,backendName:"cpu",kernelFunc:xM};function yM(n){const{inputs:t,backend:e,attrs:s}=n,{x:r,filter:o,bias:i,preluActivationWeights:a}=t,{strides:l,pad:c,dataFormat:u,dilations:h,dimRoundingMode:d,activation:f,leakyreluAlpha:p}=s;let m=Uw({inputs:{x:r,filter:o},backend:e,attrs:{strides:l,pad:c,dataFormat:u,dilations:h,dimRoundingMode:d}});if(i){const g=m;m=Zr({inputs:{a:m,b:i},backend:e}),e.disposeIntermediateTensorInfo(g)}if(f){const g=m;m=Al(e,m,f,a,p),e.disposeIntermediateTensorInfo(g)}return m}const wM={kernelName:_x,backendName:"cpu",kernelFunc:yM};function vM(n){const{inputs:t,backend:e}=n,{params:s,indices:r}=t,o=q(s.shape),i=r.shape,a=i[i.length-1],[l,c,u,h]=wf(s,r);if(c===0)return e.makeTensorInfo(l,s.dtype,[]);const d=e.data.get(r.dataId).values,f=e.bufferSync(s),p=tw(d,f,s.dtype,c,a,u,h,s.shape,o);return e.makeTensorInfo(l,s.dtype,p.values)}const CM={kernelName:mx,backendName:"cpu",kernelFunc:vM};function $M(n){const{inputs:t,backend:e,attrs:s}=n,{x:r,indices:o}=t,{axis:i,batchDims:a}=s;ot([r,o],"gatherV2");const l=vt(i,r.shape)[0],c=e.data.get(o.dataId).values,u=r.shape[l];for(let y=0;y<c.length;++y){const v=c[y];S(v<=u-1&&v>=0,()=>`GatherV2: the index value ${v} is not in [0, ${u-1}]`)}let h=a;a==null&&(h=0);const d=q(o.shape),f=Gf(r,o,l,h),p=Bt({inputs:{x:r},backend:e,attrs:{shape:[f.batchSize,f.outerSize,f.dimSize,f.sliceSize]}}),m=Bt({inputs:{x:o},backend:e,attrs:{shape:[f.batchSize,d/f.batchSize]}}),g=[f.batchSize,f.outerSize,d/f.batchSize,f.sliceSize],x=e.bufferSync(m),b=e.bufferSync(p),w=ew(b,x,g);return e.disposeIntermediateTensorInfo(p),e.disposeIntermediateTensorInfo(m),e.makeTensorInfo(f.outputShape,w.dtype,w.values)}const kM={kernelName:fc,backendName:"cpu",kernelFunc:$M};function IM(n){const{inputs:t,backend:e}=n,{input:s}=t,r=q(s.shape),o=s.shape[s.shape.length-1],i=r/o,a=Bt({inputs:{x:s},backend:e,attrs:{shape:[i,o]}}),l=Gw(a,!0,e),c=Bt({inputs:{x:l},backend:e,attrs:{shape:s.shape}});return e.disposeIntermediateTensorInfo(a),e.disposeIntermediateTensorInfo(l),c}const SM={kernelName:wd,backendName:"cpu",kernelFunc:IM};const NM=Dt(Ni,n=>Number.isFinite(n)?1:0,"bool"),TM={kernelName:Ni,backendName:"cpu",kernelFunc:NM};const EM=Dt(Ti,n=>Math.abs(n)===1/0?1:0,"bool"),RM={kernelName:Ti,backendName:"cpu",kernelFunc:EM};const AM=Dt(Ei,n=>Number.isNaN(n)?1:0,"bool"),DM={kernelName:Ei,backendName:"cpu",kernelFunc:AM};function _M(n){const{backend:t,attrs:e}=n,{start:s,stop:r,num:o}=e,i=iw(s,r,o);return t.makeTensorInfo([i.length],"float32",i)}const FM={kernelName:gx,backendName:"cpu",kernelFunc:_M};const OM=Dt(Ai,n=>Math.log1p(n)),MM={kernelName:Ai,backendName:"cpu",kernelFunc:OM};const LM=te((n,t)=>n&&t),PM=ue(bc,LM,null,"bool"),zM={kernelName:bc,backendName:"cpu",kernelFunc:PM};const BM=Dt(yc,n=>n?0:1,"bool"),VM={kernelName:yc,backendName:"cpu",kernelFunc:BM};const WM=te((n,t)=>n||t),UM=ue(wc,WM,null,"bool"),GM={kernelName:wc,backendName:"cpu",kernelFunc:UM};function HM(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{depthRadius:o,bias:i,alpha:a,beta:l}=s;ot(r,"LRN");const c=r.shape[3],u=c-1,h=e.data.get(r.dataId).values,d=q(r.shape),f=new Float32Array(d);function p(m){const g=m%c;let x=m-g+Math.max(0,g-o);const b=m-g+Math.min(g+o,u);let w=0;for(;x<=b;x++){const y=h[x];w+=y*y}return w}for(let m=0;m<d;m++){const g=p(m),x=h[m]*Math.pow(i+a*g,-l);f[m]=x}return e.makeTensorInfo(r.shape,r.dtype,f)}const qM={kernelName:vc,backendName:"cpu",kernelFunc:HM};function jM(n){const{inputs:t,backend:e,attrs:s}=n,{x:r,y:o,dy:i}=t,{depthRadius:a,bias:l,alpha:c,beta:u}=s;ot(i,"LRNGrad");const h=q(i.shape),d=i.shape[3],f=e.data.get(i.dataId).values,p=e.data.get(r.dataId).values,m=e.data.get(o.dataId).values,g=new Float32Array(h),x=h;for(let b=0;b<x;b++){const w=b%d,y=b-w+Math.max(0,w-a),v=b-w+Math.min(d,w+a+1);let $=0;for(let N=y;N<v;N++)$+=Math.pow(p[N],2);$=c*$+l;for(let N=y;N<v;N++){let T=-2*c*u*p[N]*m[b]/$;b===N&&(T+=Math.pow($,-u)),T*=f[b],g[N]+=T}}return e.makeTensorInfo(i.shape,r.dtype,g)}const KM={kernelName:Cd,backendName:"cpu",kernelFunc:jM};function Hw(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{reductionIndices:o,keepDims:i}=s,a=e;let l=r.shape;const c=l.length,u=vt(o,l);let h=u;const d=jt(h,c);let f=a.data.get(r.dataId).values;if(d!=null){const y=new Array(c);for(let v=0;v<y.length;v++)y[v]=l[d[v]];f=gp(f,l,r.dtype,d,y),h=Jt(h.length,c),l=y}ot(r,"max"),we("max",h,c);const[p,m]=me(l,h),g=q(m),x=lw(f,g,p,r.dtype),b=a.write(x,p,r.dtype);let w=p;return i&&(w=ne(p,u)),{dataId:b,shape:w,dtype:r.dtype}}const XM={kernelName:Cc,backendName:"cpu",kernelFunc:Hw};function YM(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t;ot(r,"maxPool");const{filterSize:o,strides:i,pad:a,dimRoundingMode:l}=s,c=1;S(Ie(i,c),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${i} and dilations '${c}'`);const u=dn(r.shape,o,i,c,a,l);let h;if(u.filterWidth===1&&u.filterHeight===1&&Et(u.inShape,u.outShape))h=Xn({inputs:{x:r},backend:e});else{const d=e.data.get(r.dataId).values,f=lt(r.shape),p=yp(d,r.shape,r.dtype,f,u,"max");h=e.makeTensorInfo(u.outShape,r.dtype,p.values)}return h}const ZM={kernelName:$c,backendName:"cpu",kernelFunc:YM};function JM(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{filterSize:o,strides:i,pad:a,dimRoundingMode:l,dataFormat:c}=s;ot(r,"maxPool3d");const u=hs(r.shape,o,i,1,a,l,c),h=e.data.get(r.dataId).values,d=Vw(h,r.shape,r.dtype,lt(r.shape),u,"max");return e.makeTensorInfo(d.shape,"float32",d.values)}const QM={kernelName:kc,backendName:"cpu",kernelFunc:JM};function tL(n){const{inputs:t,backend:e,attrs:s}=n,{dy:r,input:o}=t,{filterSize:i,strides:a,pad:l,dimRoundingMode:c}=s;ot([r,o],"maxPool3DGrad");const u=hs(o.shape,i,a,1,l,c),h=e.bufferSync(o),d=WF(h,u),f=u.strideDepth,p=u.strideHeight,m=u.strideWidth,g=u.dilationDepth,x=u.dilationHeight,b=u.dilationWidth,w=u.effectiveFilterDepth,y=u.effectiveFilterHeight,v=u.effectiveFilterWidth,$=w-1-u.padInfo.front,N=v-1-u.padInfo.left,T=y-1-u.padInfo.top,k=wt(o.shape,"float32"),I=e.bufferSync(r);for(let C=0;C<u.batchSize;++C)for(let R=0;R<u.inChannels;++R)for(let A=0;A<u.inDepth;++A)for(let O=0;O<u.inHeight;++O)for(let M=0;M<u.inWidth;++M){const z=A-$,U=O-T,B=M-N;let G=0;for(let j=0;j<w;j+=g){const K=(z+j)/f;if(!(K<0||K>=u.outDepth||Math.floor(K)!==K))for(let Y=0;Y<y;Y+=x){const Z=(U+Y)/p;if(!(Z<0||Z>=u.outHeight||Math.floor(Z)!==Z))for(let tt=0;tt<v;tt+=b){const Q=(B+tt)/m;if(Q<0||Q>=u.outWidth||Math.floor(Q)!==Q)continue;const rt=w*y*v-1-d.get(C,K,Z,Q,R),at=j*y*v+Y*v+tt,dt=rt===at?1:0;if(dt===0)continue;const ht=I.get(C,K,Z,Q,R);G+=ht*dt}}}k.set(G,C,A,O,M,R)}return e.makeTensorInfo(k.shape,k.dtype,k.values)}const eL={kernelName:kd,backendName:"cpu",kernelFunc:tL};function nL(n){const{inputs:t,backend:e,attrs:s}=n,{dy:r,input:o,output:i}=t,a=o;ot([o,i],"maxPoolGrad");const{filterSize:l,strides:c,pad:u,dimRoundingMode:h}=s,d=dn(a.shape,l,c,1,u,h),f=e.data.get(a.dataId).values,p=wt(d.outShape,a.dtype,Bw(f,a.shape,a.dtype,d).values),m=d.strideHeight,g=d.strideWidth,x=d.dilationHeight,b=d.dilationWidth,w=d.effectiveFilterHeight,y=d.effectiveFilterWidth,v=y-1-d.padInfo.left,$=w-1-d.padInfo.top,N=wt(a.shape,"float32"),T=e.data.get(r.dataId).values,k=wt(r.shape,"float32",T);for(let I=0;I<d.batchSize;++I)for(let C=0;C<d.inChannels;++C)for(let R=0;R<d.inHeight;++R)for(let A=0;A<d.inWidth;++A){const O=R-$,M=A-v;let z=0;for(let U=0;U<w;U+=x){const B=(O+U)/m;if(!(B<0||B>=d.outHeight||Math.floor(B)!==B))for(let G=0;G<y;G+=b){const j=(M+G)/g;if(j<0||j>=d.outWidth||Math.floor(j)!==j)continue;const K=w*y-1-p.get(I,B,j,C),Y=U*y+G,Z=K===Y?1:0;if(Z===0)continue;const tt=k.get(I,B,j,C);z+=tt*Z}}N.set(z,I,R,A,C)}return e.makeTensorInfo(N.shape,N.dtype,N.values)}const sL={kernelName:$d,backendName:"cpu",kernelFunc:nL};function rL(n,t,e,s,r){const o=lt(t),i=yp(n,t,e,o,r,"max"),a=Bw(n,t,e,r,!0,s);return[i.values,a.values]}const oL={kernelName:xx,backendName:"cpu",kernelFunc:({inputs:n,attrs:t,backend:e})=>{const{x:s}=n,{filterSize:r,strides:o,pad:i,includeBatchInIndex:a}=t,l=e;ot(s,"MaxPoolWithArgmax");const c=l.data.get(s.dataId).values,u=dn(s.shape,r,o,[1,1],i),[h,d]=rL(c,s.shape,s.dtype,a,u),f=l.write(h,u.outShape,s.dtype),p=l.write(d,u.outShape,s.dtype);return[{dataId:f,shape:u.outShape,dtype:s.dtype},{dataId:p,shape:u.outShape,dtype:"int32"}]}};function iL(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{axis:o,keepDims:i}=s,a=vt(o,r.shape),c=me(r.shape,a)[1],u=q(c),h=[],d=e.makeTensorInfo([],"float32",new Float32Array([u]));h.push(d);const f=As({inputs:{x:r},backend:e,attrs:{dtype:"float32"}});h.push(f);const p=wp({inputs:{a:f,b:d},backend:e});h.push(p);const m=xa({inputs:{x:p},backend:e,attrs:{axis:o,keepDims:i}});return h.forEach(g=>e.disposeIntermediateTensorInfo(g)),m}const aL={kernelName:Ic,backendName:"cpu",kernelFunc:iL};function lL(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{axis:o,keepDims:i}=s;ot(r,"min");const a=vt(o,r.shape);let l=a;const c=jt(l,r.shape.length);let u=r;c!=null&&(u=ze({inputs:{x:r},backend:e,attrs:{perm:c}}),l=Jt(l.length,r.shape.length)),we("min",l,u.shape.length);const[h,d]=me(u.shape,l),f=q(d),p=$e(q(h),u.dtype),m=e.data.get(u.dataId).values;for(let x=0;x<p.length;++x){const b=x*f;let w=m[b];for(let y=0;y<f;++y){const v=m[b+y];(Number.isNaN(v)||v<w)&&(w=v)}p[x]=w}c!=null&&e.disposeIntermediateTensorInfo(u);const g=e.makeTensorInfo(h,u.dtype,p);if(i){const x=ne(h,a),b=Bt({inputs:{x:g},backend:e,attrs:{shape:x}});return e.disposeIntermediateTensorInfo(g),b}return g}const cL={kernelName:Sc,backendName:"cpu",kernelFunc:lL};function uL(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{paddings:o,mode:i}=s;ot(r,"mirrorPad");const a=o.map((w,y)=>w[0]+r.shape[y]+w[1]),l=o.map(w=>w[0]),c=o.map((w,y)=>w[0]+r.shape[y]),u=i==="reflect"?0:1,h=e.data.get(r.dataId).values,d=r.shape.length,f=lt(r.shape),p=q(a),m=a.length,g=lt(a),x=Ce(r.dtype,p);for(let w=0;w<p;w++){let y=ao(w,m,g);for(let $=0;$<m;$++)y[$]<l[$]?y[$]=l[$]*2-y[$]-u:y[$]>=c[$]&&(y[$]=(c[$]-1)*2-y[$]+u);y=y.map(($,N)=>$-l[N]);const v=Pn(y,d,f);x[w]=h[v]}return{dataId:e.write(x,a,r.dtype),shape:a,dtype:r.dtype}}const hL={kernelName:Nc,backendName:"cpu",kernelFunc:uL};const dL=te(((n,t)=>{const e=n%t;return n<0&&t<0||n>=0&&t>=0?e:(e+t)%t})),fL=ue(Fi,dL),pL={kernelName:Fi,backendName:"cpu",kernelFunc:fL};function qw(n){const{inputs:t,backend:e,attrs:s}=n,{logits:r}=t,{dim:o}=s,i=r.shape.length;let a=o;if(a===-1&&(a=i-1),a!==i-1)throw Error(`Softmax along a non-last dimension is not yet supported. Logits was rank ${i} and dim was ${a}`);const l=vt([a],r.shape),c=Hw({inputs:{x:r},backend:e,attrs:{reductionIndices:l,keepDims:!1}}),u=ne(c.shape,l),h=Bt({inputs:{x:c},backend:e,attrs:{shape:u}}),d=bp({inputs:{a:r,b:h},backend:e}),f=Y1({inputs:{x:d},backend:e}),p=xa({inputs:{x:f},backend:e,attrs:{axis:l,keepDims:!1}}),m=Bt({inputs:{x:p},backend:e,attrs:{shape:u}}),g=wp({inputs:{a:f,b:m},backend:e});return e.disposeIntermediateTensorInfo(c),e.disposeIntermediateTensorInfo(h),e.disposeIntermediateTensorInfo(d),e.disposeIntermediateTensorInfo(f),e.disposeIntermediateTensorInfo(p),e.disposeIntermediateTensorInfo(m),g}const mL={kernelName:Hc,backendName:"cpu",kernelFunc:qw};function gL(n){const{inputs:t,backend:e,attrs:s}=n,{logits:r}=t,{numSamples:o,seed:i,normalized:a}=s;ot(r,"multinomial");const l=a?r:qw({inputs:{logits:r},backend:e,attrs:{dim:-1}}),c=l.shape[0],u=l.shape[1],h=e.data.get(l.dataId).values,d=[c,o],f=$e(q(d),"int32");for(let p=0;p<c;++p){const m=p*u,g=new Float32Array(u-1);g[0]=h[m];for(let w=1;w<g.length;++w)g[w]=g[w-1]+h[m+w];const x=rf.alea(i.toString()),b=p*o;for(let w=0;w<o;++w){const y=x();f[b+w]=g.length;for(let v=0;v<g.length;v++)if(y<g[v]){f[b+w]=v;break}}}return a||e.disposeIntermediateTensorInfo(l),e.makeTensorInfo(d,"int32",f)}const xL={kernelName:bx,backendName:"cpu",kernelFunc:gL};const bL=pf;function yL(n){const{inputs:t,backend:e,attrs:s}=n,{boxes:r,scores:o}=t,{maxOutputSize:i,iouThreshold:a,scoreThreshold:l}=s;ot(r,"NonMaxSuppression");const c=e.data.get(r.dataId).values,u=e.data.get(o.dataId).values,{selectedIndices:h}=bL(c,u,i,a,l);return e.makeTensorInfo([h.length],"int32",new Int32Array(h))}const wL={kernelName:Id,backendName:"cpu",kernelFunc:yL};const vL=mf;function CL(n){const{inputs:t,backend:e,attrs:s}=n,{boxes:r,scores:o}=t,{maxOutputSize:i,iouThreshold:a,scoreThreshold:l,padToMaxOutputSize:c}=s;ot(r,"NonMaxSuppressionPadded");const u=e.data.get(r.dataId).values,h=e.data.get(o.dataId).values,{selectedIndices:d,validOutputs:f}=vL(u,h,i,a,l,c);return[e.makeTensorInfo([d.length],"int32",new Int32Array(d)),e.makeTensorInfo([],"int32",new Int32Array([f]))]}const $L={kernelName:Sd,backendName:"cpu",kernelFunc:CL};const kL=gf;function IL(n){const{inputs:t,backend:e,attrs:s}=n,{boxes:r,scores:o}=t,{maxOutputSize:i,iouThreshold:a,scoreThreshold:l,softNmsSigma:c}=s;ot(r,"NonMaxSuppressionWithScore");const u=e.data.get(r.dataId).values,h=e.data.get(o.dataId).values,d=i,f=a,p=l,m=c,{selectedIndices:g,selectedScores:x}=kL(u,h,d,f,p,m);return[e.makeTensorInfo([g.length],"int32",new Int32Array(g)),e.makeTensorInfo([x.length],"float32",new Float32Array(x))]}const SL={kernelName:Nd,backendName:"cpu",kernelFunc:IL};function NL(n){const{inputs:t,backend:e,attrs:s}=n,{indices:r}=t,{dtype:o,depth:i,onValue:a,offValue:l}=s;ot(r,"oneHot");const c=q(r.shape),u=new Float32Array(c*i);u.fill(l);const h=e.data.get(r.dataId).values;for(let d=0;d<c;++d)h[d]>=0&&h[d]<i&&(u[d*i+h[d]]=a);return e.makeTensorInfo([...r.shape,i],o,u)}const TL={kernelName:Ac,backendName:"cpu",kernelFunc:NL};function _l(n){const{inputs:t,backend:e}=n,{x:s}=t;if(s.dtype==="string")throw new Error("zerosLike is not supported for string tensors");if(s.dtype==="complex64"){const r=mr({inputs:{input:s},backend:e}),o=_l({inputs:{x:r},backend:e}),i=Jr({inputs:{input:s},backend:e}),a=_l({inputs:{x:i},backend:e}),l=We({inputs:{real:o,imag:a},backend:e});return e.disposeIntermediateTensorInfo(r),e.disposeIntermediateTensorInfo(o),e.disposeIntermediateTensorInfo(i),e.disposeIntermediateTensorInfo(a),l}else return vp({backend:e,attrs:{shape:s.shape,value:0,dtype:s.dtype}})}const EL={kernelName:Kc,backendName:"cpu",kernelFunc:_l};function jw(n){const{inputs:t,backend:e}=n,{x:s}=t;if(s.dtype==="string")throw new Error("onesLike is not supported for string tensors");if(s.dtype==="complex64"){const r=mr({inputs:{input:s},backend:e}),o=jw({inputs:{x:r},backend:e}),i=Jr({inputs:{input:s},backend:e}),a=_l({inputs:{x:i},backend:e}),l=We({inputs:{real:o,imag:a},backend:e});return e.disposeIntermediateTensorInfo(r),e.disposeIntermediateTensorInfo(o),e.disposeIntermediateTensorInfo(i),e.disposeIntermediateTensorInfo(a),l}else return vp({backend:e,attrs:{shape:s.shape,value:1,dtype:s.dtype}})}const RL={kernelName:Rc,backendName:"cpu",kernelFunc:jw};function Kw(n){const{inputs:t,backend:e,attrs:s}=n,{axis:r}=s;if(t.length===1)return Dl({inputs:{input:t[0]},backend:e,attrs:{dim:r}});const o=t[0].shape,i=t[0].dtype;t.forEach(u=>{Kh(o,u.shape,"All tensors passed to stack must have matching shapes"),S(i===u.dtype,()=>"All tensors passed to stack must have matching dtypes")});const a=[],l=t.map(u=>{const h=Dl({inputs:{input:u},backend:e,attrs:{dim:r}});return a.push(h),h}),c=Qr({inputs:l,backend:e,attrs:{axis:r}});return a.forEach(u=>e.disposeIntermediateTensorInfo(u)),c}const AL={kernelName:Dc,backendName:"cpu",kernelFunc:Kw};function DL(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{paddings:o,constantValue:i}=s;ot(r,"pad");const a=o.map((b,w)=>b[0]+r.shape[w]+b[1]),l=o.map(b=>b[0]),c=e.data.get(r.dataId).values,u=q(r.shape),h=r.shape.length,d=lt(r.shape),f=q(a),p=a.length,m=lt(a),g=Ce(r.dtype,f);i!==0&&g.fill(i);for(let b=0;b<u;b++){const y=ao(b,h,d).map(($,N)=>$+l[N]),v=Pn(y,p,m);g[v]=c[b]}return{dataId:e.write(g,a,r.dtype),shape:a,dtype:r.dtype}}const Xw={kernelName:_c,backendName:"cpu",kernelFunc:DL};const _L=te((n,t)=>Math.pow(n,t)),FL=ue(Mi,_L),OL={kernelName:Mi,backendName:"cpu",kernelFunc:FL};function ML(n){const{inputs:t,backend:e,attrs:s}=n,{paramsNestedSplits:r,paramsDenseValues:o,indices:i}=t,{outputRaggedRank:a}=s,l=r.map(x=>e.data.get(x.dataId).values),c=r.map(x=>x.shape),u=e.data.get(o.dataId).values,h=e.data.get(i.dataId).values,[d,f,p]=pw(l,c,u,o.shape,o.dtype,h,i.shape),m=d.map(x=>e.makeTensorInfo([x.length],"int32",x)),g=e.makeTensorInfo(p,o.dtype,f);return m.concat([g])}const LL={kernelName:yx,backendName:"cpu",kernelFunc:ML};function PL(n){const{inputs:t,backend:e}=n,{starts:s,limits:r,deltas:o}=t,i=e.data.get(s.dataId).values,a=e.data.get(r.dataId).values,l=e.data.get(o.dataId).values,[c,u]=mw(i,s.shape,s.dtype,a,r.shape,l,o.shape),h=e.makeTensorInfo([c.length],"int32",c),d=e.makeTensorInfo([u.length],s.dtype,u);return[h,d]}const zL={kernelName:wx,backendName:"cpu",kernelFunc:PL};function BL(n){const{inputs:t,backend:e,attrs:s}=n,{shape:r,values:o,defaultValue:i,rowPartitionTensors:a}=t,{rowPartitionTypes:l}=s,c=e.data.get(r.dataId).values,u=e.data.get(o.dataId).values,h=e.data.get(i.dataId).values,d=a.map(g=>e.data.get(g.dataId).values),f=a.map(g=>g.shape),[p,m]=gw(c,r.shape,u,o.shape,o.dtype,h,i.shape,d,f,l);return e.makeTensorInfo(p,o.dtype,m)}const VL={kernelName:vx,backendName:"cpu",kernelFunc:BL};function WL(n){const{backend:t,attrs:e}=n,{start:s,stop:r,dtype:o,step:i}=e,a=xw(s,r,i,o);return t.makeTensorInfo([a.length],o,a)}const UL={kernelName:Td,backendName:"cpu",kernelFunc:WL};const GL=Dt(Li,n=>1/n),HL={kernelName:Li,backendName:"cpu",kernelFunc:GL};function qL(n){const{inputs:t,backend:e,attrs:s}=n,{images:r}=t,{alignCorners:o,halfPixelCenters:i,size:a}=s;ot(r,"resizeBilinear");const l=lt(r.shape),[c,u]=a,[h,d,f,p]=r.shape,m=e.data.get(r.dataId).values,g=new Float32Array(q([h,c,u,p])),x=[o&&c>1?d-1:d,o&&u>1?f-1:f],b=[o&&c>1?c-1:c,o&&u>1?u-1:u];let w=0;const y=x[0]/b[0],v=x[1]/b[1];for(let $=0;$<h;$++)for(let N=0;N<c;N++){let T;i?T=y*(N+.5)-.5:T=y*N;const k=Math.max(0,Math.floor(T)),I=T-k,C=Math.min(d-1,Math.ceil(T)),R=$*l[0]+k*l[1],A=$*l[0]+C*l[1];for(let O=0;O<u;O++){let M;i?M=v*(O+.5)-.5:M=v*O;const z=Math.max(0,Math.floor(M)),U=M-z,B=Math.min(f-1,Math.ceil(M)),G=R+z*l[2],j=A+z*l[2],K=R+B*l[2],Y=A+B*l[2];for(let Z=0;Z<p;Z++){const tt=m[G+Z],Q=m[j+Z],rt=m[K+Z],at=m[Y+Z],dt=tt+(rt-tt)*U,ht=Q+(at-Q)*U,gt=dt+(ht-dt)*I;g[w++]=gt}}}return e.makeTensorInfo([h,c,u,p],"float32",g)}const jL={kernelName:Pc,backendName:"cpu",kernelFunc:qL};function KL(n){const{inputs:t,backend:e,attrs:s}=n,{images:r,dy:o}=t,{alignCorners:i}=s;ot([o,r],"resizeBilinearGrad");const a=lt(r.shape),[l,c,u,h]=r.shape,[,d,f]=o.shape,p=new Float32Array(l*c*u*h),m=[i&&d>1?c-1:c,i&&f>1?u-1:u],g=[i&&d>1?d-1:d,i&&f>1?f-1:f],x=m[0]/g[0],b=m[1]/g[1],w=e.data.get(o.dataId).values;let y=0;for(let v=0;v<l;v++){const $=v*a[0];for(let N=0;N<d;N++){const T=N*x,k=Math.floor(T),I=Math.min(Math.ceil(T),c-1),C=$+k*a[1],R=$+I*a[1],A=T-k,O=1-A;for(let M=0;M<f;M++){const z=M*b,U=Math.floor(z),B=Math.min(Math.ceil(z),u-1),G=z-U,j=1-G,K=C+U*a[2],Y=C+B*a[2],Z=R+U*a[2],tt=R+B*a[2],Q=O*j,rt=O*G,at=A*j,dt=A*G;for(let ht=0;ht<h;ht++){const gt=w[y++];p[K+ht]+=gt*Q,p[Y+ht]+=gt*rt,p[Z+ht]+=gt*at,p[tt+ht]+=gt*dt}}}}return e.makeTensorInfo([l,u,c,h],"float32",p)}const XL={kernelName:Ad,backendName:"cpu",kernelFunc:KL};function YL(n){const{inputs:t,backend:e,attrs:s}=n,{images:r}=t,{alignCorners:o,halfPixelCenters:i,size:a}=s;ot(r,"resizeNearestNeighbor");const l=lt(r.shape),[c,u]=a,[h,d,f,p]=r.shape,m=e.data.get(r.dataId).values,g=new Float32Array(h*c*u*p),x=[o&&c>1?d-1:d,o&&u>1?f-1:f],b=[o&&c>1?c-1:c,o&&u>1?u-1:u],w=x[0]/b[0],y=x[1]/b[1];let v=0;for(let $=0;$<h;$++){const N=$*l[0];for(let T=0;T<c;T++){const k=i?w*(T+.5):w*T;let I=Math.min(d-1,o?Math.round(k):Math.floor(k));i&&(I=Math.max(0,I));const C=N+I*l[1];for(let R=0;R<u;R++){const A=i?y*(R+.5):y*R;let O=Math.min(f-1,o?Math.round(A):Math.floor(A));i&&(O=Math.max(0,O));const M=C+O*l[2];for(let z=0;z<p;z++){const U=m[M+z];g[v++]=U}}}}return e.makeTensorInfo([h,c,u,p],r.dtype,g)}const ZL={kernelName:Lc,backendName:"cpu",kernelFunc:YL};function JL(n){const{inputs:t,backend:e,attrs:s}=n,{images:r,dy:o}=t,{alignCorners:i}=s;ot([o,r],"resizeNearestNeighborGrad");const a=lt(r.shape),l=lt(o.shape),[c,u,h,d]=r.shape,[,f,p]=o.shape,m=new Float32Array(c*u*h*d),g=e.data.get(o.dataId).values,x=[i&&f>1?u-1:u,i&&p>1?h-1:h],b=[i&&f>1?f-1:f,i&&p>1?p-1:p],w=x[0]/b[0],y=x[1]/b[1],v=1/w,$=1/y,N=Math.ceil(v)*2+2,T=Math.ceil($)*2+2;for(let k=0;k<c;k++){const I=k*a[0];for(let C=0;C<u;C++){const R=I+C*a[1],A=Math.floor(C*v),O=Math.floor(A-N/2);for(let M=0;M<h;M++){const z=R+M*a[2],U=Math.floor(M*$),B=Math.floor(U-T/2);for(let G=0;G<d;G++){let j=0;for(let K=0;K<N;K++){const Y=K+O;if(Y<0||Y>=f)continue;const Z=I+Y*l[1],tt=Y*w,Q=Math.min(u-1,i?Math.round(tt):Math.floor(tt));if(C===Q)for(let rt=0;rt<T;rt++){const at=rt+B;if(at<0||at>=p)continue;const dt=Z+at*l[2],ht=at*y,gt=Math.min(h-1,i?Math.round(ht):Math.floor(ht));M===gt&&(j+=g[dt+G])}}m[z+G]=j}}}}return e.makeTensorInfo(r.shape,r.dtype,m)}const QL={kernelName:Rd,backendName:"cpu",kernelFunc:JL};function t3(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{dims:o}=s;ot(r,"reverse");const i=r.shape.length,a=vt(o,r.shape);if(i===0)return Xn({inputs:{x:r},backend:e});const l=new be(r.shape,r.dtype),c=e.bufferSync(r);for(let u=0;u<l.size;u++){const h=l.indexToLoc(u),d=h.slice();a.forEach(f=>d[f]=r.shape[f]-1-d[f]),l.set(c.get(...d),...h)}return e.makeTensorInfo(l.shape,l.dtype,l.values)}const e3={kernelName:zc,backendName:"cpu",kernelFunc:t3};const n3={kernelName:Pd,backendName:"cpu",kernelFunc:({inputs:n,attrs:t,backend:e})=>{const{image:s}=n,{radians:r,fillValue:o,center:i}=t,a=e,l=Ce(s.dtype,q(s.shape)),[c,u,h,d]=s.shape,[f,p]=Tf(i,u,h),m=255,g=Math.sin(r),x=Math.cos(r),b=a.data.get(s.dataId).values;for(let y=0;y<c;y++){const v=y*h*u*d;for(let $=0;$<u;$++){const N=$*(h*d);for(let T=0;T<h;T++){const k=T*d;for(let I=0;I<d;I++){const C=[c,$,T,I],R=C[2],A=C[1];let O=(R-f)*x-(A-p)*g,M=(R-f)*g+(A-p)*x;O=Math.round(O+f),M=Math.round(M+p);let z=o;if(typeof o!="number"&&(I===3?z=m:z=o[I]),O>=0&&O<h&&M>=0&&M<u){const B=M*(h*d),G=O*d,j=v+B+G+I;z=b[j]}const U=v+N+k+I;l[U]=z}}}}return{dataId:a.write(l,s.shape,s.dtype),shape:s.shape,dtype:s.dtype}}};const s3=Dt(Bi,n=>{const t=Math.floor(n);return n-t<.5?Math.floor(n):n-t>.5?Math.ceil(n):t%2===0?t:t+1}),r3={kernelName:Bi,backendName:"cpu",kernelFunc:s3};function o3(n){const{inputs:t,backend:e,attrs:s}=n,{indices:r,updates:o}=t,{shape:i}=s,{sliceRank:a,numUpdates:l,sliceSize:c,strides:u,outputSize:h}=$r(o,r,i),d=!0,f=e.bufferSync(r),p=e.bufferSync(o),m=Zs(f,p,i,h,c,l,a,u,0,d);return e.makeTensorInfo(i,m.dtype,m.values)}const i3={kernelName:Cx,backendName:"cpu",kernelFunc:o3};function a3(n,t){let e=0,s=n.length,r=0;for(;e<s;)r=Math.floor((e+s)/2),n[r]<t?e=r+1:s=r;return s}function l3(n,t){let e=0,s=n.length,r=0;for(;e<s;)r=Math.floor((e+s)/2),n[r]<=t?e=r+1:s=r;return s}function c3(n,t,e,s,r,o){const i=Xt("int32",e*r);for(let a=0;a<e;++a){const l=n.slice(a*s,(a+1)*s),c=a*r;for(let u=0;u<r;++u)i[c+u]=o==="left"?a3(l,t[u+c]):l3(l,t[u+c])}return i}function u3(n){const{inputs:t,backend:e,attrs:s}=n,{sortedSequence:r,values:o}=t,{side:i}=s,a=e.data.get(r.dataId).values,l=e.data.get(o.dataId).values,c=c3(a,l,r.shape[0],r.shape[1],o.shape[1],i);return e.makeTensorInfo(o.shape,"int32",c)}const h3={kernelName:kx,backendName:"cpu",kernelFunc:u3};function d3(n){const{inputs:t,backend:e}=n,{condition:s,t:r,e:o}=t;ot([s,r,o],"select");const i=s.shape.length,a=e.data.get(s.dataId).values,l=e.data.get(r.dataId).values,c=e.data.get(o.dataId).values,u=He(r.dtype,o.dtype),h=$e(q(r.shape),u);let d=0;const f=i===0||i>1||r.shape.length===1?1:q(r.shape.slice(1));for(let p=0;p<a.length;p++)for(let m=0;m<f;m++)a[p]===1?h[d++]=l[p]:h[d++]=c[p];return e.makeTensorInfo(r.shape,u,h)}const f3={kernelName:Bc,backendName:"cpu",kernelFunc:d3};const p3=iu,m3=au,g3=Dt(Wi,n=>n>=0?m3*n:p3*(Math.exp(n)-1)),x3={kernelName:Wi,backendName:"cpu",kernelFunc:g3};const b3=Dt(Hi,n=>n<0?-1:n>0?1:0),y3={kernelName:Hi,backendName:"cpu",kernelFunc:b3};const w3=Dt(Ui,n=>Math.sin(n)),v3={kernelName:Ui,backendName:"cpu",kernelFunc:w3};const C3=Dt(Gi,n=>Math.sinh(n)),$3={kernelName:Gi,backendName:"cpu",kernelFunc:C3};const k3=11920928955078125e-23,sg=Math.log(k3)+2,I3=Dt(ji,n=>{const t=n>-sg,e=n<sg,s=Math.exp(n);let r;return e?r=s:t?r=n:r=Math.log(1+s),r}),S3={kernelName:ji,backendName:"cpu",kernelFunc:I3};function N3(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{blockShape:o,paddings:i}=s;ot([r],"spaceToBatchND");const a=q(o),l=[[0,0]];l.push(...i);for(let $=1+o.length;$<r.shape.length;++$)l.push([0,0]);const c=Xw.kernelFunc({inputs:{x:r},backend:e,attrs:{paddings:l,constantValue:0}}),u=ia(c.shape,o,a,!1),h=aa(u.length,o.length,!1),d=la(c.shape,o,a,!1),m=Bt({inputs:{x:c},backend:e,attrs:{shape:u}}),b=ze({inputs:{x:m},backend:e,attrs:{perm:h}}),v=Bt({inputs:{x:b},backend:e,attrs:{shape:d}});return e.disposeIntermediateTensorInfo(c),e.disposeIntermediateTensorInfo(m),e.disposeIntermediateTensorInfo(b),v}const T3={kernelName:Uc,backendName:"cpu",kernelFunc:N3};function E3(n){const{inputs:t,backend:e}=n,{indices:s,values:r,denseShape:o,defaultValue:i}=t;if(o.shape.length!==1)throw new Error(`Dense shape must be a vector, saw:
        ${o.shape}`);if(s.shape.length!==2)throw new Error(`Indices must be a matrix, saw:
        ${s.shape}`);if(r.shape.length!==1)throw new Error(`Values must be a vector, saw:
        ${r.shape}`);if(i.shape.length!==0)throw new Error(`Default value must be a scalar, saw:
        ${i.shape}`);const a=e.data.get(s.dataId).values,l=e.data.get(r.dataId).values,c=e.data.get(o.dataId).values,u=e.data.get(i.dataId).values[0],[h,d,f,p,m]=vw(a,s.shape,s.dtype,l,r.dtype,c,u);return[e.makeTensorInfo(d,s.dtype,h),e.makeTensorInfo([d[0]],r.dtype,f),e.makeTensorInfo([p.length],"bool",new Uint8Array(p.map(g=>Number(g)))),e.makeTensorInfo([m.length],s.dtype,new Int32Array(m))]}const R3={kernelName:Ix,backendName:"cpu",kernelFunc:E3};function A3(n){const{inputs:t,backend:e}=n,{inputIndices:s,inputShape:r,newShape:o}=t;if(s.shape.length!==2)throw new Error(`Input indices should be a matrix but received shape
        ${s.shape}`);if(r.shape.length!==1)throw new Error(`Input shape should be a vector but received shape
        ${r.shape}`);if(o.shape.length!==1)throw new Error(`Target shape should be a vector but received shape ${o.shape}`);const i=Array.from(e.data.get(r.dataId).values),a=e.data.get(s.dataId).values,l=Array.from(e.data.get(o.dataId).values),[c,u,h]=Cw(a,s.shape,s.dtype,i,l);return[e.makeTensorInfo(u,s.dtype,c),e.makeTensorInfo([h.length],o.dtype,new Int32Array(h))]}const D3={kernelName:Sx,backendName:"cpu",kernelFunc:A3};function _3(n){const{inputs:t,backend:e}=n,{data:s,indices:r,segmentIds:o}=t;if(s.shape.length<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(r.shape.length!==1)throw new Error(`Indices should be a vector but received shape
          ${r.shape}`);if(o.shape.length!==1)throw new Error(`Segment ids should be a vector but received shape
          ${o.shape}`);if(r.shape[0]!==o.shape[0])throw new Error("segmentIds and indices should have same size.");const i=e.data.get(s.dataId).values,a=e.data.get(r.dataId).values,l=e.data.get(o.dataId).values,[c,u]=xp(i,s.shape,s.dtype,a,l,!0);return e.makeTensorInfo(u,s.dtype,c)}const F3={kernelName:Nx,backendName:"cpu",kernelFunc:_3};function O3(n){const{inputs:t,backend:e}=n,{data:s,indices:r,segmentIds:o}=t;if(s.shape.length<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(r.shape.length!==1)throw new Error(`Indices should be a vector but received shape
         ${r.shape}`);if(o.shape.length!==1)throw new Error(`Segment ids should be a vector but received shape
         ${o.shape}`);if(r.shape[0]!==o.shape[0])throw new Error("segmentIds and indices should have same size.");const i=e.data.get(s.dataId).values,a=e.data.get(r.dataId).values,l=e.data.get(o.dataId).values,[c,u]=xp(i,s.shape,s.dtype,a,l);return e.makeTensorInfo(u,s.dtype,c)}const M3={kernelName:Tx,backendName:"cpu",kernelFunc:O3};function L3(n){const{inputs:t,backend:e,attrs:s}=n,{sparseIndices:r,sparseValues:o,defaultValue:i}=t,{outputShape:a}=s,{sliceRank:l,numUpdates:c,sliceSize:u,strides:h,outputSize:d}=$r(o,r,a),f=!1,p=e.bufferSync(r);let m;switch(o.dtype){case"bool":{const g=e.bufferSync(o),x=!!e.data.get(i.dataId).values[0];m=Zs(p,g,a,d,u,c,l,h,x,f);break}case"float32":{const g=e.bufferSync(o),x=e.data.get(i.dataId).values[0];m=Zs(p,g,a,d,u,c,l,h,x,f);break}case"int32":{const g=e.bufferSync(o),x=e.data.get(i.dataId).values[0];m=Zs(p,g,a,d,u,c,l,h,x,f);break}case"string":{const g=e.bufferSync(o),x=Ss(e.data.get(i.dataId).values[0]);m=Zs(p,g,a,d,u,c,l,h,x,f);break}default:throw new Error(`Unsupported type ${o.dtype}`)}return e.makeTensorInfo(a,m.dtype,m.values)}const P3={kernelName:Ex,backendName:"cpu",kernelFunc:L3};function z3(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{numOrSizeSplits:o,axis:i}=s,a=vt(i,r.shape)[0],l=Uf(r,o,a),c=new Array(r.shape.length).fill(0),u=r.shape.slice();return l.map(h=>{const d=[...u];d[a]=h;const f=gr({inputs:{x:r},backend:e,attrs:{begin:c,size:d}});return c[a]+=h,f})}const B3={kernelName:Gc,backendName:"cpu",kernelFunc:z3};const V3={kernelName:Dd,backendName:"cpu",kernelFunc:({inputs:n,backend:t})=>{const{x:e}=n,s=t;ot(e,"square");const r=s.data.get(e.dataId).values,o=new Float32Array(r.length);for(let a=0;a<r.length;++a){const l=r[a];o[a]=l*l}return{dataId:s.write(o,e.shape,e.dtype),shape:e.shape,dtype:e.dtype}}};const W3=Dt(ta,(n,t)=>{const e=t;return isNaN(n)?NaN:n>0?1:e.alpha}),U3={kernelName:ta,backendName:"cpu",kernelFunc:W3};function G3(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{begin:o,end:i,strides:a,beginMask:l,endMask:c,ellipsisMask:u,newAxisMask:h,shrinkAxisMask:d}=s;ot(r,"stridedSlice");const{finalShapeSparse:f,finalShape:p,isIdentity:m,sliceDim0:g,isSimpleSlice:x,begin:b,end:w,strides:y}=If(r.shape,o,i,a,l,c,u,h,d);let v;if(m)v=Bt({inputs:{x:r},backend:e,attrs:{shape:p}});else if(g||x){S(r.shape.length>=1,()=>`Input must have rank at least 1, got: ${r.shape.length}`);const $=Cf(b,w,y),N=gr({inputs:{x:r},backend:e,attrs:{begin:b,size:$}});v=Bt({inputs:{x:N},backend:e,attrs:{shape:p}}),e.disposeIntermediateTensorInfo(N)}else{const $=e.bufferSync(r),N=Iw(f,$,y,b);v=e.makeTensorInfo(p,N.dtype,N.values)}return v}const H3={kernelName:Fd,backendName:"cpu",kernelFunc:G3};function q3(n){const{inputs:t,backend:e,attrs:s}=n,{separator:r,nGramWidths:o,leftPad:i,rightPad:a,padWidth:l,preserveShortSequences:c}=s,{data:u,dataSplits:h}=t,d=e.data.get(u.dataId).values,f=e.data.get(h.dataId).values,[p,m]=Sw(d,f,r,o,i,a,l,c);return[e.makeTensorInfo([p.length],"string",p),e.makeTensorInfo(h.shape,"int32",m)]}const j3={kernelName:Rx,backendName:"cpu",kernelFunc:q3};function K3(n){const{inputs:t,backend:e,attrs:s}=n,{skipEmpty:r}=s,{input:o,delimiter:i}=t;if(o.dtype!=="string")throw new Error("Input must be of datatype string");if(o.shape.length!==1)throw new Error(`Input must be a vector, got shape: ${o.shape}`);if(i.shape.length!==0)throw new Error(`Delimiter must be a scalar, got shape: ${i.shape}`);const a=e.data.get(o.dataId).values,l=e.data.get(i.dataId).values[0],[c,u,h]=Nw(a,l,r),d=u.length;return[e.makeTensorInfo([d,2],"int32",c),e.makeTensorInfo([d],"string",u),e.makeTensorInfo([2],"int32",new Int32Array(h))]}const X3={kernelName:Ax,backendName:"cpu",kernelFunc:K3};function Y3(n){const{inputs:t,backend:e,attrs:s}=n,{numBuckets:r}=s,{input:o}=t;if(o.dtype!=="string")throw new Error("Input must be of datatype string");if(r<=0)throw new Error("Number of buckets must be at least 1");const i=e.data.get(o.dataId).values,a=Tw(i,r);return e.makeTensorInfo(o.shape,"int32",a)}const Z3={kernelName:Dx,backendName:"cpu",kernelFunc:Y3};const J3=Dt(Zi,n=>Math.tan(n)),Q3={kernelName:Zi,backendName:"cpu",kernelFunc:J3};const tP=Dt(Ji,n=>Math.tanh(n)),eP={kernelName:Ji,backendName:"cpu",kernelFunc:tP};function nP(n){const{inputs:t,backend:e}=n,{tensor:s,indices:r,updates:o}=t,{sliceRank:i,numUpdates:a,sliceSize:l,strides:c,outputSize:u}=$r(o,r,s.shape),h=!1,d=e.bufferSync(r),f=e.bufferSync(o),p=e.bufferSync(s),m=Zs(d,f,s.shape,u,l,a,i,c,p,h);return e.makeTensorInfo(s.shape,m.dtype,m.values)}const sP={kernelName:$x,backendName:"cpu",kernelFunc:nP};function rP(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{reps:o}=s;ot(r,"tile");const i=Rw(e.bufferSync(r),o);return e.makeTensorInfo(i.shape,i.dtype,i.values)}const oP={kernelName:Qi,backendName:"cpu",kernelFunc:rP};function iP(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{k:o,sorted:i}=s;ot(r,"topk");const a=e.data.get(r.dataId).values,[l,c]=Dw(a,r.shape,r.dtype,o,i);return[e.makeTensorInfo(l.shape,l.dtype,l.values),e.makeTensorInfo(c.shape,c.dtype,c.values)]}const aP={kernelName:Od,backendName:"cpu",kernelFunc:iP};function lP(n){const{inputs:t,attrs:e,backend:s}=n,{image:r,transforms:o}=t,{interpolation:i,fillMode:a,fillValue:l,outputShape:c}=e,[u,h,d,f]=r.shape,[p,m]=c??[h,d],g=[u,p,m,f],x=lt(r.shape),b=x[0],w=x[1],y=x[2],v=lt(g),$=v[0],N=v[1],T=v[2],k=Ce(r.dtype,q(g));k.fill(l);const I=s.data.get(r.dataId).values,C=s.data.get(o.dataId).values;for(let A=0;A<u;++A){const O=o.shape[0]===1?C:C.subarray(A*8,A*8+8);for(let M=0;M<p;++M)for(let z=0;z<m;++z)for(let U=0;U<f;++U){let B;const G=O[6]*z+O[7]*M+1;if(G===0)continue;const j=(O[0]*z+O[1]*M+O[2])/G,K=(O[3]*z+O[4]*M+O[5])/G,Y=rg(j,d,a),Z=rg(K,h,a);switch(i){case"nearest":B=pP(I,h,d,b,w,y,A,Z,Y,U,l);break;case"bilinear":B=mP(I,h,d,b,w,y,A,Z,Y,U,l);break;default:throw new Error(`Error in Transform: Expect 'nearest' or 'bilinear', but got ${i}`)}const tt=A*$+M*N+z*T+U;k[tt]=B}return s.makeTensorInfo(g,r.dtype,k)}return{dataId:s.write(k,g,r.dtype),shape:r.shape,dtype:r.dtype}}const cP={kernelName:Md,backendName:"cpu",kernelFunc:lP};function rg(n,t,e){switch(e){case"reflect":return uP(n,t);case"wrap":return hP(n,t);case"nearest":return fP(n,t);default:return dP(n)}}function uP(n,t){let e=n;if(e<0)if(t<=1)e=0;else{const s=2*t;e<s&&(e=s*Math.trunc(-e/s)+e),e=e<-t?e+s:-e-1}else if(e>t-1)if(t<=1)e=0;else{const s=2*t;e-=s*Math.trunc(e/s),e>=t&&(e=s-e-1)}return sr(0,e,t-1)}function hP(n,t){let e=n;if(e<0)if(t<=1)e=0;else{const s=t-1;e+=t*(Math.trunc(-e/s)+1)}else if(e>t-1)if(t<=1)e=0;else{const s=t-1;e-=t*Math.trunc(e/s)}return sr(0,e,t-1)}function dP(n,t){return n}function fP(n,t){return sr(0,n,t-1)}function Oo(n,t,e,s,r,o,i,a,l,c,u){const h=i*s+a*r+l*o+c;return 0<=a&&a<t&&0<=l&&l<e?n[h]:u}function pP(n,t,e,s,r,o,i,a,l,c,u){const h=Math.round(a),d=Math.round(l);return Oo(n,t,e,s,r,o,i,h,d,c,u)}function mP(n,t,e,s,r,o,i,a,l,c,u){const h=Math.floor(a),d=Math.floor(l),f=h+1,p=d+1,m=(p-l)*Oo(n,t,e,s,r,o,i,h,d,c,u)+(l-d)*Oo(n,t,e,s,r,o,i,h,p,c,u),g=(p-l)*Oo(n,t,e,s,r,o,i,f,d,c,u)+(l-d)*Oo(n,t,e,s,r,o,i,f,p,c,u);return(f-a)*m+(a-h)*g}function gP(n){const{inputs:t,attrs:e,backend:s}=n,{axis:r}=e,{x:o}=t;ot(o,"unique");const i=s.data.get(o.dataId).values,{outputValues:a,outputShape:l,indices:c}=_w(i,r,o.shape,o.dtype);return[s.makeTensorInfo(l,o.dtype,a),s.makeTensorInfo([c.length],"int32",c)]}const xP={kernelName:Ld,backendName:"cpu",kernelFunc:gP};function bP(n){const{inputs:t,backend:e,attrs:s}=n,{value:r}=t;let{axis:o}=s;o<0&&(o+=r.shape.length);const i=r.shape.length,a=r.shape[o],l=new Array(i-1);let c=0;for(let f=0;f<i;f++)f!==o&&(l[c++]=r.shape[f]);const u=new Array(i).fill(0),h=r.shape.slice();h[o]=1;const d=new Array(a);for(let f=0;f<d.length;f++){u[o]=f;const p=gr({inputs:{x:r},backend:e,attrs:{begin:u,size:h}});d[f]=Bt({inputs:{x:p},backend:e,attrs:{shape:l}}),e.disposeIntermediateTensorInfo(p)}return d}const yP={kernelName:qc,backendName:"cpu",kernelFunc:bP};function wP(n){const{inputs:t,backend:e,attrs:s}=n,{x:r,segmentIds:o}=t,{numSegments:i}=s;ot(r,"unsortedSegmentSum");const a=r.shape.length,l=o.shape.length,c=[],u=[],h=a-l;let d=o;for(let p=0;p<h;++p){const m=Dl({inputs:{input:d},backend:e,attrs:{dim:p+1}});d=m,u.push(m)}for(let p=0;p<i;++p){const m=_s(p,"int32"),g=e.makeTensorInfo([],"int32",m),x=K1({inputs:{a:g,b:d},backend:e}),b=As({inputs:{x},backend:e,attrs:{dtype:"float32"}}),w=yu({inputs:{a:b,b:r},backend:e}),y=xa({inputs:{x:w},backend:e,attrs:{axis:0,keepDims:!1}});c.push(y),u.push(g),u.push(x),u.push(b),u.push(w),u.push(y)}const f=Kw({inputs:c,backend:e,attrs:{axis:0}});return u.forEach(p=>e.disposeIntermediateTensorInfo(p)),f}const vP={kernelName:jc,backendName:"cpu",kernelFunc:wP};const CP=[gF,YD,bF,wF,n_,CF,kF,SF,TF,RF,DF,FF,MF,zF,VF,GF,qF,KF,YF,pF,JF,tO,nO,r_,rO,t_,i_,iO,ZD,lO,uO,hO,fO,mO,xO,yO,vO,$O,IO,NO,EO,AO,_O,OO,MO,PO,BO,WO,UO,GO,HO,jO,YO,aF,JO,a_,iM,l_,aM,u_,fM,pM,gM,d_,p_,bM,wM,CM,kM,g_,b_,JD,SM,cO,TM,RM,DM,lF,w_,C_,FM,k_,MM,zM,VM,GM,qM,KM,XM,S_,ZM,QM,eL,sL,oL,aL,cL,T_,hL,pL,xL,R_,D_,wL,$L,SL,F_,TL,RL,AL,Xw,OL,uF,L_,LL,zL,VL,UL,QD,Dh,HL,hF,dF,fF,jL,XL,ZL,QL,e3,n3,r3,H_,i3,h3,f3,x3,j_,y3,v3,$3,K_,mL,S3,T3,R3,D3,F3,M3,P3,B3,Z_,V3,Q_,eF,U3,H3,j3,X3,Z3,oF,KO,Q3,eP,sP,oP,aP,cP,O_,xP,yP,vP,EL];for(const n of CP)Fx(n);const Xs={},Oa={alpha:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1,depth:!1,stencil:!1,failIfMajorPerformanceCaveat:!0};function $P(n,t){Xs[n]=t}function Tn(n,t){if(!(n in Xs)||t!=null){const s=IP(n,t);if(s!==null)Xs[n]=s;else return console.log("Could not get context for WebGL version",n),null}const e=Xs[n];return e==null||e.isContextLost()?(delete Xs[n],Tn(n)):(e.disable(e.DEPTH_TEST),e.disable(e.STENCIL_TEST),e.disable(e.BLEND),e.disable(e.DITHER),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SAMPLE_COVERAGE),e.enable(e.SCISSOR_TEST),e.enable(e.CULL_FACE),e.cullFace(e.BACK),Xs[n])}function kP(n){if(!W().getBool("IS_SAFARI")&&typeof OffscreenCanvas<"u"&&n===2)return new OffscreenCanvas(300,150);if(typeof document<"u")return document.createElement("canvas");throw new Error("Cannot create a canvas in this context")}function IP(n,t){if(n!==1&&n!==2)throw new Error("Cannot get WebGL rendering context, WebGL is disabled.");const e=t??kP(n);return e.addEventListener("webglcontextlost",s=>{s.preventDefault(),delete Xs[n]},!1),W().getBool("SOFTWARE_WEBGL_ENABLED")&&(Oa.failIfMajorPerformanceCaveat=!1),n===1?e.getContext("webgl",Oa)||e.getContext("experimental-webgl",Oa):e.getContext("webgl2",Oa)}var Jo;(function(n){n[n.DENSE=0]="DENSE",n[n.SHARED_BATCH=1]="SHARED_BATCH"})(Jo||(Jo={}));var Je;(function(n){n[n.RENDER=0]="RENDER",n[n.UPLOAD=1]="UPLOAD",n[n.PIXELS=2]="PIXELS",n[n.DOWNLOAD=3]="DOWNLOAD"})(Je||(Je={}));var xe;(function(n){n[n.UNPACKED_FLOAT16=0]="UNPACKED_FLOAT16",n[n.UNPACKED_FLOAT32=1]="UNPACKED_FLOAT32",n[n.PACKED_4X1_UNSIGNED_BYTE=2]="PACKED_4X1_UNSIGNED_BYTE",n[n.PACKED_2X2_FLOAT32=3]="PACKED_2X2_FLOAT32",n[n.PACKED_2X2_FLOAT16=4]="PACKED_2X2_FLOAT16"})(xe||(xe={}));function ba(n,t){return[t,n]}function SP(n,t){return n*t}function Ma(n){const t=q(n),e=Math.ceil(t/4);return nh(e)}function mo(n,t){return[Math.max(1,Math.ceil(t/2)),Math.max(1,Math.ceil(n/2))]}function NP(n,t){const[e,s]=mo(n,t);return e*s*4}function Cp(n,t){const e=n;let s,r,o,i,a,l,c,u,h,d;return W().getNumber("WEBGL_VERSION")===2?(s=e.R32F,r=e.R16F,o=e.RGBA16F,i=e.RGBA32F,a=e.RED,c=4,u=1,h=e.HALF_FLOAT,d=e.FLOAT,l=e.RGBA8):(s=n.RGBA,r=n.RGBA,o=n.RGBA,i=e.RGBA,a=n.RGBA,c=4,u=4,h=t!=null?t.HALF_FLOAT_OES:null,d=n.FLOAT,l=n.RGBA),{internalFormatFloat:s,internalFormatHalfFloat:r,internalFormatPackedHalfFloat:o,internalFormatPackedFloat:i,textureFormatFloat:a,downloadTextureFormat:l,downloadUnpackNumChannels:c,defaultNumChannels:u,textureTypeHalfFloat:h,textureTypeFloat:d}}function nt(n,t){const e=t();return W().getBool("DEBUG")&&TP(n),e}function TP(n){const t=n.getError();if(t!==n.NO_ERROR)throw new Error("WebGL Error: "+DP(n,t))}const EP=596e-10,RP=65504;function AP(n){return!!(W().getBool("WEBGL_RENDER_FLOAT32_ENABLED")||n===0||EP<Math.abs(n)&&Math.abs(n)<RP)}function DP(n,t){switch(t){case n.NO_ERROR:return"NO_ERROR";case n.INVALID_ENUM:return"INVALID_ENUM";case n.INVALID_VALUE:return"INVALID_VALUE";case n.INVALID_OPERATION:return"INVALID_OPERATION";case n.INVALID_FRAMEBUFFER_OPERATION:return"INVALID_FRAMEBUFFER_OPERATION";case n.OUT_OF_MEMORY:return"OUT_OF_MEMORY";case n.CONTEXT_LOST_WEBGL:return"CONTEXT_LOST_WEBGL";default:return`Unknown error code ${t}`}}function La(n,t){return fs(n,()=>n.getExtension(t),'Extension "'+t+'" not supported on this browser.')}function _P(n,t){const e=fs(n,()=>n.createShader(n.VERTEX_SHADER),"Unable to create vertex WebGLShader.");if(nt(n,()=>n.shaderSource(e,t)),nt(n,()=>n.compileShader(e)),n.getShaderParameter(e,n.COMPILE_STATUS)===!1)throw console.log(n.getShaderInfoLog(e)),new Error("Failed to compile vertex shader.");return e}function FP(n,t){const e=fs(n,()=>n.createShader(n.FRAGMENT_SHADER),"Unable to create fragment WebGLShader.");if(nt(n,()=>n.shaderSource(e,t)),nt(n,()=>n.compileShader(e)),W().get("ENGINE_COMPILE_ONLY"))return e;if(n.getShaderParameter(e,n.COMPILE_STATUS)===!1)throw Yw(t,n.getShaderInfoLog(e)),new Error("Failed to compile fragment shader.");return e}const OP=/ERROR: [0-9]+:([0-9]+):/g;function Yw(n,t){const e=OP.exec(t);if(e==null){console.log(`Couldn't parse line number in error: ${t}`),console.log(n);return}const s=+e[1],r=n.split(`
`),o=r.length.toString().length+2,i=r.map((h,d)=>Pr((d+1).toString(),o)+h);let a=0;for(let h=0;h<i.length;h++)a=Math.max(i[h].length,a);const l=i.slice(0,s-1),c=i.slice(s-1,s),u=i.slice(s);console.log(l.join(`
`)),console.log(t.split(`
`)[0]),console.log(`%c ${Pr(c[0],a)}`,"border:1px solid red; background-color:#e3d2d2; color:#a61717"),console.log(u.join(`
`))}function MP(n){return fs(n,()=>n.createProgram(),"Unable to create WebGLProgram.")}function LP(n,t){if(nt(n,()=>n.linkProgram(t)),!W().get("ENGINE_COMPILE_ONLY")&&n.getProgramParameter(t,n.LINK_STATUS)===!1)throw console.log(n.getProgramInfoLog(t)),new Error("Failed to link vertex and fragment shaders.")}function qu(n,t){if(nt(n,()=>n.validateProgram(t)),n.getProgramParameter(t,n.VALIDATE_STATUS)===!1)throw console.log(n.getProgramInfoLog(t)),new Error("Shader program validation failed.")}function PP(n,t){const e=fs(n,()=>n.createBuffer(),"Unable to create WebGLBuffer");return nt(n,()=>n.bindBuffer(n.ARRAY_BUFFER,e)),nt(n,()=>n.bufferData(n.ARRAY_BUFFER,t,n.STATIC_DRAW)),e}function zP(n,t){const e=fs(n,()=>n.createBuffer(),"Unable to create WebGLBuffer");return nt(n,()=>n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e)),nt(n,()=>n.bufferData(n.ELEMENT_ARRAY_BUFFER,t,n.STATIC_DRAW)),e}function BP(n){return fs(n,()=>n.createTexture(),"Unable to create WebGLTexture.")}function VP(n,t){const e=W().getNumber("WEBGL_MAX_TEXTURE_SIZE");if(n<=0||t<=0){const s=`[${n}x${t}]`;throw new Error("Requested texture size "+s+" is invalid.")}if(n>e||t>e){const s=`[${n}x${t}]`,r=`[${e}x${e}]`;throw new Error("Requested texture size "+s+" greater than WebGL maximum on this browser / GPU "+r+".")}}function WP(n){return fs(n,()=>n.createFramebuffer(),"Unable to create WebGLFramebuffer.")}function og(n,t,e,s,r,o,i){const a=n.getAttribLocation(t,e);return a===-1?!1:(nt(n,()=>n.bindBuffer(n.ARRAY_BUFFER,s)),nt(n,()=>n.vertexAttribPointer(a,r,n.FLOAT,!1,o,i)),nt(n,()=>n.enableVertexAttribArray(a)),!0)}function UP(n,t,e){KP(n,e),nt(n,()=>n.activeTexture(n.TEXTURE0+e)),nt(n,()=>n.bindTexture(n.TEXTURE_2D,t))}function GP(n,t,e){return fs(n,()=>n.getUniformLocation(t,e),'uniform "'+e+'" not present in program.')}function HP(n,t,e){return n.getUniformLocation(t,e)}function qP(n,t,e,s){nt(n,()=>UP(n,t,s)),nt(n,()=>n.uniform1i(e,s))}function ju(n,t,e){nt(n,()=>n.bindFramebuffer(n.FRAMEBUFFER,e)),nt(n,()=>n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,t,0))}function ig(n,t){nt(n,()=>n.bindFramebuffer(n.FRAMEBUFFER,t)),nt(n,()=>n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,null,0))}function Pa(n){const t=n.checkFramebufferStatus(n.FRAMEBUFFER);if(t!==n.FRAMEBUFFER_COMPLETE)throw new Error("Error binding framebuffer: "+jP(n,t))}function jP(n,t){switch(t){case n.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_ATTACHMENT";case n.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT";case n.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:return"FRAMEBUFFER_INCOMPLETE_DIMENSIONS";case n.FRAMEBUFFER_UNSUPPORTED:return"FRAMEBUFFER_UNSUPPORTED";default:return`unknown error ${t}`}}function fs(n,t,e){const s=nt(n,()=>t());if(s==null)throw new Error(e);return s}function KP(n,t){const e=n.MAX_COMBINED_TEXTURE_IMAGE_UNITS-1,s=t+n.TEXTURE0;if(s<n.TEXTURE0||s>e){const r=`[gl.TEXTURE0, gl.TEXTURE${e}]`;throw new Error(`textureUnit must be in ${r}.`)}}function to(n,t=2){return q(n.slice(0,n.length-t))}function eo(n){if(n.length===0)throw Error("Cannot get rows and columns of an empty shape array.");return[n.length>1?n[n.length-2]:1,n[n.length-1]]}function za(n){let t=[1,1,1];return n.length===0||n.length===1&&n[0]===1||(t=[to(n),...eo(n)]),t}function XP(n,t=!1){let e=W().getNumber("WEBGL_MAX_TEXTURE_SIZE"),s=W().getNumber("WEBGL_MAX_SIZE_FOR_NARROW_TEXTURE");s===1/0&&W().getBool("WEBGL_AUTO_SQUARIFY_NARROW_TEXTURE_SHAPE")&&(s=e/2),t&&(e=e*2,s=s*2,n=n.map((a,l)=>l>=n.length-2?jh(n[l]):n[l]),n.length===1&&(n=[2,n[0]])),n.length!==2&&(n=Ds(n).newShape);let r=q(n),o=null;n.length<=1&&r<=e?o=[1,r]:n.length===2&&n[0]<=e&&n[1]<=e?o=n:n.length===3&&n[0]*n[1]<=e&&n[2]<=e?o=[n[0]*n[1],n[2]]:n.length===3&&n[0]<=e&&n[1]*n[2]<=e?o=[n[0],n[1]*n[2]]:n.length===4&&n[0]*n[1]*n[2]<=e&&n[3]<=e?o=[n[0]*n[1]*n[2],n[3]]:n.length===4&&n[0]<=e&&n[1]*n[2]*n[3]<=e&&(o=[n[0],n[1]*n[2]*n[3]]);const i=o!=null&&Math.max(...o)>s&&Math.min(...o)<=(t?2:1)&&Math.min(...o)>0;if(o==null||i)if(t){const a=to(n);let l=2,c=2;n.length&&([l,c]=eo(n)),r=a*(l/2)*(c/2),o=nh(r).map(u=>u*2)}else o=nh(r);return o}function Ba(n){return n%2===0}function Fl(n,t){if(n=n.slice(-2),t=t.slice(-2),Et(n,t)||!n.length||!t.length||n[0]===0||n[1]===0||t[0]===0||t[1]===0)return!0;if(n.length!==t.length){const e=n[n.length-1],s=t[t.length-1];if(e===s||Ba(e)&&Ba(s)&&(n[0]===1||t[0]===1))return!0}return n[1]===t[1]&&Ba(n[0])&&Ba(t[0])}let Ku,Xu;function YP(n){if(Ku==null){const t=Tn(n);Ku=t.getParameter(t.MAX_TEXTURE_SIZE)}return Ku}function ZP(n){if(Xu==null){const t=Tn(n);Xu=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS)}return Math.min(16,Xu)}function JP(n){if(n===0)return 0;let t;const e=Tn(n);return cn(e,"EXT_disjoint_timer_query_webgl2")&&n===2?t=2:cn(e,"EXT_disjoint_timer_query")?t=1:t=0,t}function cn(n,t){return n.getExtension(t)!=null}function ag(n){try{if(Tn(n)!=null)return!0}catch(t){return console.log("Error when getting WebGL context: ",t),!1}return!1}function QP(n){if(n===0)return!1;const t=Tn(n);if(n===1){if(!cn(t,"OES_texture_float"))return!1}else if(!cn(t,"EXT_color_buffer_float"))return!1;return Fh(t)}function tz(n){if(n===0)return!1;const t=Tn(n);if(n===1){if(!cn(t,"OES_texture_float")||!cn(t,"WEBGL_color_buffer_float"))return!1}else{if(cn(t,"EXT_color_buffer_float"))return Fh(t);const s="EXT_color_buffer_half_float";if(cn(t,s)){const r=t.getExtension(s);return ez(t,r)}return!1}return Fh(t)}function Fh(n){const t=Cp(n),e=n.createTexture();n.bindTexture(n.TEXTURE_2D,e),n.texImage2D(n.TEXTURE_2D,0,t.internalFormatFloat,1,1,0,t.textureFormatFloat,t.textureTypeFloat,null);const o=n.createFramebuffer();n.bindFramebuffer(n.FRAMEBUFFER,o),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e,0);const i=n.checkFramebufferStatus(n.FRAMEBUFFER)===n.FRAMEBUFFER_COMPLETE;return n.bindTexture(n.TEXTURE_2D,null),n.bindFramebuffer(n.FRAMEBUFFER,null),n.deleteTexture(e),n.deleteFramebuffer(o),i}function ez(n,t){const e=Cp(n,t),s=n.createTexture();n.bindTexture(n.TEXTURE_2D,s),n.texImage2D(n.TEXTURE_2D,0,e.internalFormatHalfFloat,1,1,0,e.textureFormatFloat,e.textureTypeHalfFloat,null);const i=n.createFramebuffer();n.bindFramebuffer(n.FRAMEBUFFER,i),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,s,0);const a=n.checkFramebufferStatus(n.FRAMEBUFFER)===n.FRAMEBUFFER_COMPLETE;return n.bindTexture(n.TEXTURE_2D,null),n.bindFramebuffer(n.FRAMEBUFFER,null),n.deleteTexture(s),n.deleteFramebuffer(i),a}function nz(n){return n!==2?!1:Tn(n).fenceSync!=null}function ya(n,t){Array.isArray(n)||(n=[n]),n.forEach(e=>{e!=null&&S(e.dtype!=="complex64",()=>`${t} does not support complex64 tensors in the WebGL backend.`)})}const it=W();it.registerFlag("HAS_WEBGL",()=>it.getNumber("WEBGL_VERSION")>0);it.registerFlag("WEBGL_VERSION",()=>ag(2)?2:ag(1)?1:0);it.registerFlag("WEBGL_CHECK_NUMERICAL_PROBLEMS",()=>!1);it.registerFlag("WEBGL_BUFFER_SUPPORTED",()=>it.get("WEBGL_VERSION")===2);it.registerFlag("WEBGL_CPU_FORWARD",()=>!0);it.registerFlag("WEBGL_FORCE_F16_TEXTURES",()=>!1);it.registerFlag("WEBGL_PACK",()=>it.getBool("HAS_WEBGL"));it.registerFlag("WEBGL_PACK_NORMALIZATION",()=>it.getBool("WEBGL_PACK"));it.registerFlag("WEBGL_PACK_CLIP",()=>it.getBool("WEBGL_PACK"));it.registerFlag("WEBGL_PACK_DEPTHWISECONV",()=>it.getBool("WEBGL_PACK"));it.registerFlag("WEBGL_PACK_BINARY_OPERATIONS",()=>it.getBool("WEBGL_PACK"));it.registerFlag("WEBGL_PACK_UNARY_OPERATIONS",()=>it.getBool("WEBGL_PACK"));it.registerFlag("WEBGL_PACK_ARRAY_OPERATIONS",()=>it.getBool("WEBGL_PACK"));it.registerFlag("WEBGL_PACK_IMAGE_OPERATIONS",()=>it.getBool("WEBGL_PACK"));it.registerFlag("WEBGL_PACK_REDUCE",()=>it.getBool("WEBGL_PACK"));it.registerFlag("WEBGL_LAZILY_UNPACK",()=>it.getBool("WEBGL_PACK"));it.registerFlag("WEBGL_CONV_IM2COL",()=>it.getBool("WEBGL_PACK"));it.registerFlag("WEBGL_PACK_CONV2DTRANSPOSE",()=>it.getBool("WEBGL_PACK"));it.registerFlag("WEBGL_MAX_TEXTURE_SIZE",()=>YP(it.getNumber("WEBGL_VERSION")));it.registerFlag("WEBGL_MAX_TEXTURES_IN_SHADER",()=>ZP(it.getNumber("WEBGL_VERSION")));it.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION",()=>{const n=it.getNumber("WEBGL_VERSION");return n===0?0:JP(n)});it.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE",()=>it.getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0&&!jx());it.registerFlag("WEBGL_RENDER_FLOAT32_CAPABLE",()=>QP(it.getNumber("WEBGL_VERSION")));it.registerFlag("WEBGL_RENDER_FLOAT32_ENABLED",()=>it.getBool("WEBGL_FORCE_F16_TEXTURES")?!1:it.getBool("WEBGL_RENDER_FLOAT32_CAPABLE"));it.registerFlag("WEBGL_DOWNLOAD_FLOAT_ENABLED",()=>tz(it.getNumber("WEBGL_VERSION")));it.registerFlag("WEBGL_FENCE_API_ENABLED",()=>nz(it.getNumber("WEBGL_VERSION")));it.registerFlag("WEBGL_SIZE_UPLOAD_UNIFORM",()=>it.getBool("WEBGL_RENDER_FLOAT32_ENABLED")?4:0);it.registerFlag("WEBGL_DELETE_TEXTURE_THRESHOLD",()=>-1,n=>{if(typeof n!="number")throw new Error(`WEBGL_DELETE_TEXTURE_THRESHOLD must be a number but got ${n}.`);if(n<0&&n!==-1)throw new Error(`WEBGL_DELETE_TEXTURE_THRESHOLD must be -1 (indicating never delete) or at least 0, but got ${n}.`)});it.registerFlag("WEBGL_FLUSH_THRESHOLD",()=>jx()?1:-1,n=>{if(typeof n!="number")throw new Error(`WEBGL_FLUSH_THRESHOLD must be a number but got ${n}.`);if(n<0&&n!==-1)throw new Error(`WEBGL_FLUSH_THRESHOLD must be -1 (indicating never manual flush) or at least 0, but got ${n}.`)});it.registerFlag("CPU_HANDOFF_SIZE_THRESHOLD",()=>128);it.registerFlag("WEBGL_USE_SHAPES_UNIFORMS",()=>!1);it.registerFlag("TOPK_LAST_DIM_CPU_HANDOFF_SIZE_THRESHOLD",()=>1e5);it.registerFlag("TOPK_K_CPU_HANDOFF_THRESHOLD",()=>128);it.registerFlag("WEBGL_EXP_CONV",()=>!1);it.registerFlag("SOFTWARE_WEBGL_ENABLED",()=>it.getBool("IS_TEST"));it.registerFlag("WEBGL_MAX_SIZE_FOR_NARROW_TEXTURE",()=>1/0);it.registerFlag("WEBGL_AUTO_SQUARIFY_NARROW_TEXTURE_SHAPE",()=>!1);it.registerFlag("WEBGL2_ISNAN_CUSTOM",()=>!1);it.registerFlag("ENGINE_COMPILE_ONLY",()=>!1);function _e(){let n,t,e,s,r,o,i,a,l,c;return W().getNumber("WEBGL_VERSION")===2?(n="#version 300 es",t="in",e="out",s="in",r="texture",o="outputColor",i="out vec4 outputColor;",a=W().getBool("WEBGL2_ISNAN_CUSTOM")?`
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
    `),{version:n,attribute:t,varyingVs:e,varyingFs:s,texture2D:r,output:o,defineOutput:i,defineSpecialNaN:a,defineSpecialInf:l,defineRound:c}}function Sr(n,t,e="index"){const s=lt(t);return s.map((r,o)=>{const i=`int ${n[o]} = ${e} / ${r}`,a=o===s.length-1?`int ${n[o+1]} = ${e} - ${n[o]} * ${r}`:`index -= ${n[o]} * ${r}`;return`${i}; ${a};`}).join("")}function wu(n,t,e="index"){const s=lt(t);return s.map((r,o)=>{const i=`int ${n[o]} = ${e} / outShapeStrides[${o}]`,a=o===s.length-1?`int ${n[o+1]} = ${e} - ${n[o]} * outShapeStrides[${o}]`:`index -= ${n[o]} * outShapeStrides[${o}]`;return`${i}; ${a};`}).join("")}function sz(n,t){const e=n.length,s=n.map(o=>`${t}[${o}]`),r=new Array(e-1);r[e-2]=s[e-1];for(let o=e-3;o>=0;--o)r[o]=`(${r[o+1]} * ${s[o+1]})`;return r}function rz(n,t,e="index"){const s=n.map((o,i)=>i),r=sz(s,t);return r.map((o,i)=>{const a=`int ${n[i]} = ${e} / ${r[i]}`,l=i===r.length-1?`int ${n[i+1]} = ${e} - ${n[i]} * ${r[i]}`:`index -= ${n[i]} * ${r[i]}`;return`${a}; ${l};`}).join("")}function $p(n){const t=lt(n).map(e=>e.toString());return`
  int getFlatIndex(ivec3 coords) {
    return coords.x * ${t[0]} + coords.y * ${t[1]} + coords.z;
  }
`}function kp(){return`
  int getFlatIndex(ivec3 coords) {
    return coords.x * outShapeStrides[0] + coords.y * outShapeStrides[1] + coords.z;
  }
`}const Zw=`
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
`;const{getBroadcastDims:Jw}=qT;function oz(n,t,e){const s=[];if(n.forEach(f=>{const p=q(f.shapeInfo.logicalShape);if(f.shapeInfo.isUniform?s.push(`uniform float ${f.name}${p>1?`[${p}]`:""};`):(s.push(`uniform sampler2D ${f.name};`),s.push(`uniform int offset${f.name};`)),e.enableShapeUniforms){const{uniformShape:m}=Ip(e.packedInputs,f.shapeInfo.logicalShape,f.shapeInfo.texShape);switch(m.length){case 1:s.push(`uniform int ${f.name}Shape;`);break;case 2:s.push(`uniform ivec2 ${f.name}Shape;`);break;case 3:s.push(`uniform ivec3 ${f.name}Shape;`);break;case 4:s.push(`uniform ivec4 ${f.name}Shape;`);break}s.push(`uniform ivec2 ${f.name}TexShape;`)}}),e.enableShapeUniforms){switch(t.logicalShape.length){case 1:s.push("uniform int outShape;");break;case 2:s.push("uniform ivec2 outShape;"),s.push("uniform int outShapeStrides;");break;case 3:s.push("uniform ivec3 outShape;"),s.push("uniform ivec2 outShapeStrides;");break;case 4:s.push("uniform ivec4 outShape;"),s.push("uniform ivec3 outShapeStrides;");break}s.push("uniform ivec2 outTexShape;")}e.customUniforms&&e.customUniforms.forEach(f=>{s.push(`uniform ${f.type} ${f.name}${f.arrayIndex?`[${f.arrayIndex}]`:""};`)});const r=s.join(`
`),o=n.map(f=>iz(f,t,e.packedInputs,e.enableShapeUniforms)).join(`
`),i=t.texShape,a=_e(),l=cz(a);let c,u,h=dz(a);return t.isPacked?(c=az(t.logicalShape,i,e.enableShapeUniforms),u=hz(a)):(c=lz(t.logicalShape,i,e.enableShapeUniforms),u=uz(a)),e.packedInputs&&(h+=gz),[h,l,u,r,c,o,e.userCode].join(`
`)}function go(n,t=!1){const e=n.shapeInfo.logicalShape;switch(e.length){case 0:return Tz(n,t);case 1:return Rz(n,t);case 2:return Dz(n,t);case 3:return Fz(n,t);case 4:return Mz(n,t);case 5:return Lz(n);case 6:return Pz(n);default:throw new Error(`${e.length}-D input sampling is not yet supported`)}}function Qw(n,t){switch(n.shapeInfo.logicalShape.length){case 0:return Nz(n);case 1:return Ez(n,t);case 2:return Az(n,t);case 3:return _z(n,t);default:return Oz(n,t)}}function iz(n,t,e=!1,s){let r="";e?r+=Qw(n,s):r+=go(n,s);const o=n.shapeInfo.logicalShape,i=t.logicalShape;return o.length<=i.length&&(e?r+=zz(n,t):r+=Bz(n,t)),r}function az(n,t,e){switch(n.length){case 0:return tv();case 1:return xz(n,t,e);case 2:return Iz(n,t,e);case 3:return yz(n,t,e);default:return vz(n,t,e)}}function lz(n,t,e){switch(n.length){case 0:return tv();case 1:return bz(n,t,e);case 2:return Sz(n,t,e);case 3:return wz(n,t,e);case 4:return Cz(n,t,e);case 5:return $z(n,t);case 6:return kz(n,t);default:throw new Error(`${n.length}-D output sampling is not yet supported`)}}function cz(n){return`
    float sampleTexture(sampler2D textureSampler, vec2 uv) {
      return ${n.texture2D}(textureSampler, uv).r;
    }
  `}function uz(n){return`
    void setOutput(float val) {
      ${n.output} = vec4(val, 0, 0, 0);
    }
  `}function hz(n){return`
    void setOutput(vec4 val) {
      ${n.output} = val;
    }
  `}function dz(n){return`${n.version}
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

    ${fz}
    ${pz}
    ${mz}
  `}const fz=`
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
`,pz=`
vec2 packedUVfrom2D(int texelsInLogicalRow, int texNumR,
  int texNumC, int row, int col) {
  int texelIndex = (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,mz=`
vec2 packedUVfrom3D(int texNumR, int texNumC,
    int texelsInBatch, int texelsInLogicalRow, int b,
    int row, int col) {
  int index = b * texelsInBatch + (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,gz=`
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
`;function tv(){return`
    int getOutputCoords() {
      return 0;
    }
  `}function xz(n,t,e){const s=[Math.ceil(t[0]/2),Math.ceil(t[1]/2)];return s[0]===1?e?`
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
  `}function bz(n,t,e){return t[0]===1?e?`
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
  `}function yz(n,t,e){if(e)return`
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
  `}function wz(n,t,e){if(e)return`
  ivec3 getOutputCoords() {
    ivec2 resTexRC = ivec2(resultUV.yx *
                           vec2(outTexShape[0], outTexShape[1]));
    int index = resTexRC.x * outTexShape[1] + resTexRC.y;
    ${wu(["r","c","d"],n)}
    return ivec3(r, c, d);
  }
`;const s=Sr(["r","c","d"],n);return`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${t[0]}, ${t[1]}));
      int index = resTexRC.x * ${t[1]} + resTexRC.y;
      ${s}
      return ivec3(r, c, d);
    }
  `}function vz(n,t,e){if(e)return`
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
  `}function Cz(n,t,e){if(e)return`
    ivec4 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(outTexShape[0], outTexShape[1]));
      int index = resTexRC.x * outTexShape[1] + resTexRC.y;
      ${wu(["r","c","d","d2"],n)}
      return ivec4(r, c, d, d2);
    }
  `;const s=Sr(["r","c","d","d2"],n);return`
    ivec4 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(${t[0]}, ${t[1]}));
      int index = resTexRC.x * ${t[1]} + resTexRC.y;
      ${s}
      return ivec4(r, c, d, d2);
    }
  `}function $z(n,t){const e=Sr(["r","c","d","d2","d3"],n);return`
    ivec5 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx * vec2(${t[0]},
                             ${t[1]}));

      int index = resTexRC.x * ${t[1]} + resTexRC.y;

      ${e}

      ivec5 outShape = ivec5(r, c, d, d2, d3);
      return outShape;
    }
  `}function kz(n,t){const e=Sr(["r","c","d","d2","d3","d4"],n);return`
    ivec6 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(${t[0]}, ${t[1]}));
      int index = resTexRC.x * ${t[1]} + resTexRC.y;

      ${e}

      ivec6 result = ivec6(r, c, d, d2, d3, d4);
      return result;
    }
  `}function Iz(n,t,e){const s=[Math.ceil(t[0]/2),Math.ceil(t[1]/2)];if(Et(n,t))return e?`
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
  `}function Sz(n,t,e){return Et(n,t)?e?`
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
  `}function Nr(n){return`offset${n}`}function Nz(n){const t=n.name,e="get"+t.charAt(0).toUpperCase()+t.slice(1),s=_e();return`
    vec4 ${e}() {
      return ${s.texture2D}(${t}, halfCR);
    }
  `}function Tz(n,t){const e=n.name,s="get"+e.charAt(0).toUpperCase()+e.slice(1);if(n.shapeInfo.isUniform)return`float ${s}() {return ${e};}`;const[r,o]=n.shapeInfo.texShape;if(r===1&&o===1)return`
      float ${s}() {
        return sampleTexture(${e}, halfCR);
      }
    `;const i=Nr(e);if(t)return`
    float ${s}() {
      vec2 uv = uvFromFlat(${e}TexShape[0], ${e}TexShape[1], ${i});
      return sampleTexture(${e}, uv);
    }
  `;const[a,l]=n.shapeInfo.texShape;return`
    float ${s}() {
      vec2 uv = uvFromFlat(${a}, ${l}, ${i});
      return sampleTexture(${e}, uv);
    }
  `}function Ez(n,t){const e=n.name,s="get"+e.charAt(0).toUpperCase()+e.slice(1),r=n.shapeInfo.texShape,o=_e();if(t)return`
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
  `}function Rz(n,t){const e=n.name,s="get"+e.charAt(0).toUpperCase()+e.slice(1);if(n.shapeInfo.isUniform)return`
      float ${s}(int index) {
        ${xo(n)}
      }
    `;const r=n.shapeInfo.texShape,o=r[0],i=r[1];if(i===1&&o===1)return`
      float ${s}(int index) {
        return sampleTexture(${e}, halfCR);
      }
    `;const a=Nr(e);return i===1?t?`
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
  `}function Az(n,t){const e=n.shapeInfo.logicalShape,s=n.name,r="get"+s.charAt(0).toUpperCase()+s.slice(1),o=n.shapeInfo.texShape,i=o[0],a=o[1],l=_e();if(o!=null&&Et(e,o))return t?`
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
  `}function Dz(n,t){const e=n.shapeInfo.logicalShape,s=n.name,r="get"+s.charAt(0).toUpperCase()+s.slice(1),o=n.shapeInfo.texShape;if(o!=null&&Et(e,o)){if(t)return`
      float ${r}(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(${s}TexShape[1], ${s}TexShape[0]);
        return sampleTexture(${s}, uv);
      }
    `;const d=o[0],f=o[1];return`
    float ${r}(int row, int col) {
      vec2 uv = (vec2(col, row) + halfCR) / vec2(${f}.0, ${d}.0);
      return sampleTexture(${s}, uv);
    }
  `}const{newShape:i,keptDims:a}=Ds(e),l=i;if(l.length<e.length){const d=bo(n,l),f=["row","col"];return`
      ${go(d,t)}
      float ${r}(int row, int col) {
        return ${r}(${yo(f,a)});
      }
    `}if(n.shapeInfo.isUniform)return`
      float ${r}(int row, int col) {
        int index = round(dot(vec2(row, col), vec2(${e[1]}, 1)));
        ${xo(n)}
      }
    `;const c=o[0],u=o[1],h=Nr(s);return u===1?t?`
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
`}function _z(n,t){const e=n.shapeInfo.logicalShape,s=n.name,r="get"+s.charAt(0).toUpperCase()+s.slice(1),o=n.shapeInfo.texShape,i=[Math.ceil(o[0]/2),Math.ceil(o[1]/2)];if(e[0]===1){const d=e.slice(1),f=[1,2],p=bo(n,d),m=["b","row","col"];return`
        ${Qw(p,t)}
        vec4 ${r}(int b, int row, int col) {
          return ${r}(${yo(m,f)});
        }
      `}const a=_e();if(t)return`
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
  `}function Fz(n,t){const e=n.shapeInfo.logicalShape,s=n.name,r="get"+s.charAt(0).toUpperCase()+s.slice(1),o=e[1]*e[2],i=e[2],{newShape:a,keptDims:l}=Ds(e),c=a;if(c.length<e.length){const m=bo(n,c),g=["row","col","depth"];return`
        ${go(m,t)}
        float ${r}(int row, int col, int depth) {
          return ${r}(${yo(g,l)});
        }
      `}if(n.shapeInfo.isUniform)return`
      float ${r}(int row, int col, int depth) {
        int index = round(dot(vec3(row, col, depth),
                          vec3(${o}, ${i}, 1)));
        ${xo(n)}
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
  `;const p=Nr(s);return t?`
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
  `}function Oz(n,t){const e=n.name,s="get"+e.charAt(0).toUpperCase()+e.slice(1),r=_e();if(t)return`
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
  `}function Mz(n,t){const e=n.shapeInfo.logicalShape,s=n.name,r="get"+s.charAt(0).toUpperCase()+s.slice(1),o=e[3],i=e[2]*o,a=e[1]*i,{newShape:l,keptDims:c}=Ds(e);if(l.length<e.length){const b=bo(n,l),w=["row","col","depth","depth2"];return`
      ${go(b,t)}
      float ${r}(int row, int col, int depth, int depth2) {
        return ${r}(${yo(w,c)});
      }
    `}if(n.shapeInfo.isUniform)return`
      float ${r}(int row, int col, int depth, int depth2) {
        int index = round(dot(vec4(row, col, depth, depth2),
                          vec4(${a}, ${i}, ${o}, 1)));
        ${xo(n)}
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
    `;const x=Nr(s);return t?`
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
  `}function Lz(n){const t=n.shapeInfo.logicalShape,e=n.name,s="get"+e.charAt(0).toUpperCase()+e.slice(1),r=t[4],o=t[3]*r,i=t[2]*o,a=t[1]*i,{newShape:l,keptDims:c}=Ds(t);if(l.length<t.length){const m=bo(n,l),g=["row","col","depth","depth2","depth3"];return`
      ${go(m)}
      float ${s}(int row, int col, int depth, int depth2, int depth3) {
        return ${s}(${yo(g,c)});
      }
    `}if(n.shapeInfo.isUniform)return`
      float ${s}(int row, int col, int depth, int depth2, int depth3) {
        float index = dot(
          vec4(row, col, depth, depth2),
          vec4(${a}, ${i}, ${o}, ${r})) +
          depth3;
        ${xo(n)}
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
    `;const p=Nr(e);return`
    float ${s}(int row, int col, int depth, int depth2, int depth3) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * ${a} + col * ${i} + depth * ${o} +
          depth2 * ${r} + depth3 + ${p};
      vec2 uv = uvFromFlat(${d}, ${f}, index);
      return sampleTexture(${e}, uv);
    }
  `}function Pz(n){const t=n.shapeInfo.logicalShape,e=n.name,s="get"+e.charAt(0).toUpperCase()+e.slice(1),{newShape:r,keptDims:o}=Ds(t);if(r.length<t.length){const g=bo(n,r),x=["row","col","depth","depth2","depth3","depth4"];return`
      ${go(g)}
      float ${s}(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        return ${s}(${yo(x,o)});
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
        ${xo(n)}
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
    `;const m=Nr(e);return`
    float ${s}(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * ${u} + col * ${c} + depth * ${l} +
          depth2 * ${a} + depth3 * ${i} + depth4 + ${m};
      vec2 uv = uvFromFlat(${f}, ${p}, index);
      return sampleTexture(${e}, uv);
    }
  `}function xo(n){const t=n.name,e=q(n.shapeInfo.logicalShape);return e<2?`return ${t};`:`
    for (int i = 0; i < ${e}; i++) {
      if (i == index) {
        return ${t}[i];
      }
    }
  `}function zz(n,t){const e=n.name,s=e.charAt(0).toUpperCase()+e.slice(1),r="get"+s+"AtOutCoords",o=n.shapeInfo.logicalShape.length,i=t.logicalShape.length,a=Jw(n.shapeInfo.logicalShape,t.logicalShape),l=Ft(i),c=i-o;let u;const h=["x","y","z","w","u","v"];o===0?u="":i<2&&a.length>=1?u="coords = 0;":u=a.map(b=>`coords.${h[b+c]} = 0;`).join(`
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
  `}function Bz(n,t){const e=n.name,s=e.charAt(0).toUpperCase()+e.slice(1),r="get"+s+"AtOutCoords",o=t.texShape,i=n.shapeInfo.texShape,a=n.shapeInfo.logicalShape.length,l=t.logicalShape.length;if(!n.shapeInfo.isUniform&&a===l&&n.shapeInfo.flatOffset==null&&Et(i,o))return`
      float ${r}() {
        return sampleTexture(${e}, resultUV);
      }
    `;const c=Ft(l),u=Jw(n.shapeInfo.logicalShape,t.logicalShape),h=l-a;let d;const f=["x","y","z","w","u","v"];a===0?d="":l<2&&u.length>=1?d="coords = 0;":d=u.map(m=>`coords.${f[m+h]} = 0;`).join(`
`);let p="";return l<2&&a>0?p="coords":p=n.shapeInfo.logicalShape.map((m,g)=>`coords.${f[g+h]}`).join(", "),`
    float ${r}() {
      ${c} coords = getOutputCoords();
      ${d}
      return get${s}(${p});
    }
  `}function Ft(n){if(n<=1)return"int";if(n===2)return"ivec2";if(n===3)return"ivec3";if(n===4)return"ivec4";if(n===5)return"ivec5";if(n===6)return"ivec6";throw Error(`GPU for rank ${n} is not yet supported`)}function Ip(n,t,e){const{newShape:s,keptDims:r}=Ds(t),o=t.length,i=n&&o===3&&t[0]===1,a=i?t.slice(1):s,l=!n&&o>1&&!Et(t,e)&&s.length<o||i;return{useSqueezeShape:l,uniformShape:l?a:t,keptDims:r}}function bo(n,t){const e=JSON.parse(JSON.stringify(n));return e.shapeInfo.logicalShape=t,e}function yo(n,t){return t.map(e=>n[e]).join(", ")}function Vz(n,t,e,s){const r=e.map((u,h)=>{const d={logicalShape:u.shape,texShape:u.isUniform?null:u.texData.texShape,isUniform:u.isUniform,isPacked:u.isUniform?!1:u.texData.isPacked,flatOffset:null};return u.texData!=null&&u.texData.slice!=null&&u.texData.slice.flatOffset>0&&(d.flatOffset=u.texData.slice.flatOffset),{name:t.variableNames[h],shapeInfo:d}}),o=r.map(u=>u.shapeInfo),i={logicalShape:s.shape,texShape:s.texData.texShape,isUniform:!1,isPacked:s.texData.isPacked,flatOffset:null},a=oz(r,i,t),l=FP(n.gl,a),c=n.createProgram(l);return W().get("ENGINE_COMPILE_ONLY")?{program:t,fragmentShader:l,source:a,webGLProgram:c,inShapeInfos:o,outShapeInfo:i,variablesLocations:null,customUniformLocations:null,infLoc:null,nanLoc:null,outShapeLocation:null,outShapeStridesLocation:null,outTexShapeLocation:null}:(n.buildVao(c),Object.assign({program:t,fragmentShader:l,source:a,webGLProgram:c,inShapeInfos:o,outShapeInfo:i},ev(n,t,c)))}function ev(n,t,e){const s=[],r=[];let o,i,a,l=null,c=null;c=n.getUniformLocation(e,"NAN",!1),W().getNumber("WEBGL_VERSION")===1&&(l=n.getUniformLocation(e,"INFINITY",!1));const u=!1;for(const h of t.variableNames){const d={name:h,uniform:n.getUniformLocation(e,h,u),offset:n.getUniformLocation(e,`offset${h}`,u)};t.enableShapeUniforms&&(d.shape=n.getUniformLocation(e,`${h}Shape`,u),d.texShape=n.getUniformLocation(e,`${h}TexShape`,u)),s.push(d)}if(t.enableShapeUniforms&&(o=n.getUniformLocation(e,"outShape",u),a=n.getUniformLocation(e,"outShapeStrides",u),i=n.getUniformLocation(e,"outTexShape",u)),t.customUniforms)for(const h of t.customUniforms)r.push(n.getUniformLocation(e,h.name,u));return{variablesLocations:s,customUniformLocations:r,infLoc:l,nanLoc:c,outShapeLocation:o,outShapeStridesLocation:a,outTexShapeLocation:i}}function lg(n,t){if(n.length!==t.length)throw Error(`Binary was compiled with ${n.length} inputs, but was executed with ${t.length} inputs`);n.forEach((e,s)=>{const r=e.logicalShape,o=t[s],i=o.shape;if(!Et(r,i))throw Error(`Binary was compiled with different shapes than the current args. Shapes ${r} and ${i} must match`);if(e.isUniform&&o.isUniform)return;const a=e.texShape,l=o.isUniform?null:o.texData.texShape;if(!Et(a,l))throw Error(`Binary was compiled with different texture shapes than the current args. Shape ${a} and ${l} must match`)})}function Wz(n,t,e,s,r){t.program.enableShapeUniforms||(lg(t.inShapeInfos,e),lg([t.outShapeInfo],[s]));const o=s.texData.texture,i=s.texData.texShape;s.texData.isPacked?n.setOutputPackedMatrixTexture(o.texture,i[0],i[1]):n.setOutputMatrixTexture(o.texture,i[0],i[1]),n.setProgram(t.webGLProgram),n.bindVertexArray(t.webGLProgram.vao),W().getNumber("WEBGL_VERSION")===1&&t.infLoc!==null&&n.gl.uniform1f(t.infLoc,1/0),t.nanLoc!==null&&n.gl.uniform1f(t.nanLoc,NaN);for(let l=0;l<e.length;++l){const c=e[l],{uniform:u,offset:h,shape:d,texShape:f}=t.variablesLocations[l];if(d){const{uniformShape:p}=Ip(t.program.packedInputs,c.shape,c.texData.texShape);switch(p.length){case 1:n.gl.uniform1iv(d,new Int32Array(p));break;case 2:n.gl.uniform2iv(d,new Int32Array(p));break;case 3:n.gl.uniform3iv(d,new Int32Array(p));break;case 4:n.gl.uniform4iv(d,new Int32Array(p));break}}if(f&&n.gl.uniform2i(f,c.texData.texShape[0],c.texData.texShape[1]),u!=null){if(c.isUniform){if(q(c.shape)<2)n.gl.uniform1f(u,c.uniformValues[0]);else{let p=c.uniformValues;p instanceof Float32Array||(p=new Float32Array(p)),n.gl.uniform1fv(u,p)}continue}c.texData.slice!=null&&h!=null&&n.gl.uniform1i(h,c.texData.slice.flatOffset),n.setInputMatrixTexture(c.texData.texture.texture,u,l)}}const a=t.outShapeLocation;if(a)switch(s.shape.length){case 1:n.gl.uniform1iv(a,new Int32Array(s.shape));break;case 2:n.gl.uniform2iv(a,new Int32Array(s.shape));break;case 3:n.gl.uniform3iv(a,new Int32Array(s.shape));break;case 4:n.gl.uniform4iv(a,new Int32Array(s.shape));break}if(t.outShapeStridesLocation){const l=lt(s.shape);switch(s.shape.length){case 2:n.gl.uniform1iv(t.outShapeStridesLocation,new Int32Array(l));break;case 3:n.gl.uniform2iv(t.outShapeStridesLocation,new Int32Array(l));break;case 4:n.gl.uniform3iv(t.outShapeStridesLocation,new Int32Array(l));break}}if(t.outTexShapeLocation&&n.gl.uniform2i(t.outTexShapeLocation,s.texData.texShape[0],s.texData.texShape[1]),t.program.customUniforms&&r)for(let l=0;l<t.program.customUniforms.length;++l){const c=t.program.customUniforms[l],u=t.customUniformLocations[l],h=r[l];if(c.type==="float")n.gl.uniform1fv(u,h);else if(c.type==="vec2")n.gl.uniform2fv(u,h);else if(c.type==="vec3")n.gl.uniform3fv(u,h);else if(c.type==="vec4")n.gl.uniform4fv(u,h);else if(c.type==="int")n.gl.uniform1iv(u,h);else if(c.type==="ivec2")n.gl.uniform2iv(u,h);else if(c.type==="ivec3")n.gl.uniform3iv(u,h);else if(c.type==="ivec4")n.gl.uniform4iv(u,h);else throw Error(`uniform type ${c.type} is not supported yet.`)}n.executeProgram()}function Uz(n,t,e){let s="";t.concat(e).forEach(i=>{const a=i.texData!=null&&i.texData.slice!=null&&i.texData.slice.flatOffset>0;if(n.enableShapeUniforms&&!i.isUniform){const l=i.texData.texShape,{useSqueezeShape:c,uniformShape:u,keptDims:h}=Ip(n.packedInputs,i.shape,l);let d="",f="",p="";if(u.length===1&&n.packedInputs){const v=[Math.ceil(l[0]/2),Math.ceil(l[1]/2)];d=`${v[0]>1}_${v[1]>1}`}else if(u.length===2&&!n.packedInputs)f=`${u[0]>1}_${u[1]>1}`;else if(u.length>2&&!n.packedInputs){const v=lt(u);p=`${v[0]===l[1]}_${v[v.length-1]===l[1]}`}const m=i.shape.length,g=u.length===2&&Et(i.shape,l),x=q(i.shape)===1,b=Kr(i.shape,e.shape),w=!n.packedInputs&&m===e.shape.length&&Et(l,e.texData.texShape),y=n.packedInputs||u.length>2?"":`${l[0]>1}_${l[1]>1}`;s+=`${m}_${w}_${c?h:""}_${u.length}_${x}_${b}_${g}_${d}_${f}_${p}_${y}_${a}`}else{const l=i.isUniform?"uniform":i.texData.texShape;s+=`${i.shape}_${l}_${a}`}});const r=n.userCode;let o=n.constructor.name;return o+="_"+s+"_"+r+`${W().getNumber("WEBGL_VERSION")}`,o}function Ne(n){return W().getBool("WEBGL_USE_SHAPES_UNIFORMS")&&n<=4}class Gz{constructor(t){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outPackingScheme=Jo.DENSE,this.customUniforms=[{name:"texShape",type:"ivec2"}];const e=_e();this.outputShape=t,this.enableShapeUniforms=Ne(this.outputShape.length),this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        ${this.enableShapeUniforms?wu(["r","c","d"],t):Sr(["r","c","d"],t)}
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
    `}}class Hz{constructor(t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outPackingScheme=Jo.DENSE,this.customUniforms=[{name:"texShape",type:"ivec2"}];const e=_e();this.outputShape=t,this.enableShapeUniforms=Ne(this.outputShape.length),this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        ${this.enableShapeUniforms?wu(["r","c","d"],t):Sr(["r","c","d"],t)}
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
    `}}class qz{constructor(t){this.variableNames=["A"],this.outTexUsage=Je.DOWNLOAD;const e=_e();this.outputShape=t,this.userCode=`
      ${Zw}

      void main() {
        float x = getAAtOutCoords();
        ${e.output} = encode_float(x);
      }
    `}}class jz{constructor(t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outTexUsage=Je.DOWNLOAD;const e=_e();this.outputShape=t,this.userCode=`
      ${Zw}

      void main() {
        ivec3 coords = getOutputCoords();
        float x = getChannel(getAAtOutCoords(), vec2(coords.y, coords.z));
        ${e.output} = encode_float(x);
      }
    `}}const Kz={R:0,G:1,B:2,A:3};class cg{constructor(t,e=!1,s="RGBA"){this.variableNames=["A"],this.customUniforms=[{name:"texShape",type:"ivec2"}];const r=_e();this.outputShape=t,this.enableShapeUniforms=Ne(this.outputShape.length);let o="result";e&&(o="floor(result * 255. + 0.5)");let i="";for(let a=0;a<s.length;a++){const l=s[a];i+=`
          if(offset == ${a}) {
            result = values[${Kz[l]}];
          }`}this.userCode=`
      ${this.enableShapeUniforms?kp():$p(t)}

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
    `}}class Xz{constructor(t,e=!1){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.customUniforms=[{name:"texShape",type:"ivec2"}];const s=_e();this.outputShape=t,this.enableShapeUniforms=Ne(this.outputShape.length);let r="",o="result";e&&(o="floor(result * 255. + 0.5)");for(let i=0;i<=1;i++)for(let a=0;a<=1;a++){const l=i*2+a;r+=`
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
        ${this.enableShapeUniforms?kp():$p(t)}

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
    `}}function Yz(n){const t=_e(),e=`${t.version}
    precision highp float;
    ${t.attribute} vec3 clipSpacePos;
    ${t.attribute} vec2 uv;
    ${t.varyingVs} vec2 resultUV;

    void main() {
      gl_Position = vec4(clipSpacePos, 1);
      resultUV = uv;
    }`;return _P(n,e)}function Zz(n){const t=new Float32Array([-1,1,0,0,1,-1,-1,0,0,0,1,1,0,1,1,1,-1,0,1,0]);return PP(n,t)}function Jz(n){const t=new Uint16Array([0,1,2,2,1,3]);return zP(n,t)}function wa(n,t,e,s,r,o){VP(t,e);const i=BP(n),a=n.TEXTURE_2D;return nt(n,()=>n.bindTexture(a,i)),nt(n,()=>n.texParameteri(a,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE)),nt(n,()=>n.texParameteri(a,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)),nt(n,()=>n.texParameteri(a,n.TEXTURE_MIN_FILTER,n.NEAREST)),nt(n,()=>n.texParameteri(a,n.TEXTURE_MAG_FILTER,n.NEAREST)),W().getNumber("WEBGL_VERSION")===1?nt(n,()=>n.texImage2D(a,0,s,t,e,0,r,o,null)):nt(n,()=>n.texStorage2D(a,1,s,t,e)),nt(n,()=>n.bindTexture(n.TEXTURE_2D,null)),{texture:i,texShape:[e,t]}}function nv(n){return n.internalFormatFloat}function Qz(n,t,e,s){const[r,o]=ba(t,e);return wa(n,r,o,nv(s),s.textureFormatFloat,n.FLOAT)}function sv(n){return n.internalFormatHalfFloat}function tB(n,t,e,s){const[r,o]=ba(t,e);return wa(n,r,o,sv(s),s.textureFormatFloat,s.textureTypeHalfFloat)}function rv(n){return n.downloadTextureFormat}function eB(n,t,e,s){const[r,o]=ba(t,e);return wa(n,r,o,rv(s),n.RGBA,n.UNSIGNED_BYTE)}function ov(n){return n.internalFormatPackedFloat}function nB(n,t,e,s){const[r,o]=mo(t,e);return wa(n,r,o,ov(s),n.RGBA,n.FLOAT)}function iv(n){return n.internalFormatPackedHalfFloat}function sB(n,t,e,s){const[r,o]=mo(t,e);return wa(n,r,o,iv(s),n.RGBA,s.textureTypeHalfFloat)}function rB(n,t,e){return nt(n,()=>n.bindBuffer(n.ARRAY_BUFFER,e)),og(n,t,"clipSpacePos",e,3,20,0)&&og(n,t,"uv",e,2,20,12)}function oB(n,t,e,s,r,o){nt(n,()=>n.bindTexture(n.TEXTURE_2D,t));let i,a,l;r instanceof Uint8Array?(i=new Uint8Array(e*s*4),a=n.UNSIGNED_BYTE,l=n.RGBA):(i=new Float32Array(e*s*4),a=n.FLOAT,l=o.internalFormatPackedFloat),i.set(r),W().getNumber("WEBGL_VERSION")===2?nt(n,()=>n.texSubImage2D(n.TEXTURE_2D,0,0,0,e,s,n.RGBA,a,i)):nt(n,()=>n.texImage2D(n.TEXTURE_2D,0,l,e,s,0,n.RGBA,a,i)),nt(n,()=>n.bindTexture(n.TEXTURE_2D,null))}function iB(n,t,e){nt(n,()=>n.bindTexture(n.TEXTURE_2D,t)),e.data instanceof Uint8Array?W().getNumber("WEBGL_VERSION")===2?nt(n,()=>n.texSubImage2D(n.TEXTURE_2D,0,0,0,e.width,e.height,n.RGBA,n.UNSIGNED_BYTE,e.data)):nt(n,()=>n.texImage2D(n.TEXTURE_2D,0,n.RGBA,e.width,e.height,0,n.RGBA,n.UNSIGNED_BYTE,e.data)):W().getNumber("WEBGL_VERSION")===2?nt(n,()=>n.texSubImage2D(n.TEXTURE_2D,0,0,0,n.RGBA,n.UNSIGNED_BYTE,e)):nt(n,()=>n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,e)),nt(n,()=>n.bindTexture(n.TEXTURE_2D,null))}function aB(n,t,e,s){const r=n.createBuffer();nt(n,()=>n.bindBuffer(n.PIXEL_PACK_BUFFER,r));const a=4*4*t*e;return nt(n,()=>n.bufferData(n.PIXEL_PACK_BUFFER,a,n.STREAM_READ)),nt(n,()=>n.readPixels(0,0,e,t,n.RGBA,n.FLOAT,0)),nt(n,()=>n.bindBuffer(n.PIXEL_PACK_BUFFER,null)),r}function lB(n,t,e){const s=n,r=new Float32Array(e);return s.bindBuffer(s.PIXEL_PACK_BUFFER,t),s.getBufferSubData(s.PIXEL_PACK_BUFFER,0,r),s.bindBuffer(s.PIXEL_PACK_BUFFER,null),r}function cB(n,t,e,s){const[r,o]=ba(t,e),i=4,a=new Uint8Array(SP(t*e,i));return nt(n,()=>n.readPixels(0,0,r,o,s.downloadTextureFormat,n.UNSIGNED_BYTE,a)),new Float32Array(a.buffer)}function uB(n,t,e,s,r,o,i,a){const l=n,c=new Float32Array(NP(o,i));return l.bindBuffer(l.PIXEL_PACK_BUFFER,t),l.getBufferSubData(l.PIXEL_PACK_BUFFER,0,c),l.bindBuffer(l.PIXEL_PACK_BUFFER,null),c}function hB(n,t,e){const s=new Float32Array(t*e*4);return nt(n,()=>n.readPixels(0,0,e,t,n.RGBA,n.FLOAT,s)),s}class Yu{constructor(t){this.outputTexture=null,this.program=null,this.disposed=!1,this.itemsToPoll=[];const e=W().getNumber("WEBGL_VERSION");if(t!=null?(this.gl=t,$P(e,t)):this.gl=Tn(e),t=this.gl,W().getNumber("WEBGL_VERSION")===2){const o=t;this.createVertexArray=()=>nt(o,()=>o.createVertexArray()),this.bindVertexArray=i=>nt(o,()=>o.bindVertexArray(i)),this.deleteVertexArray=i=>nt(o,()=>o.deleteVertexArray(i)),this.getVertexArray=()=>nt(o,()=>o.getParameter(o.VERTEX_ARRAY_BINDING))}else if(t!=null){const o=t.getExtension("OES_vertex_array_object");if(o==null)throw new Error("All WebGL1 implementations are expected to offer OES_vertex_array_object.");this.createVertexArray=()=>nt(t,()=>o.createVertexArrayOES()),this.bindVertexArray=i=>nt(t,()=>o.bindVertexArrayOES(i)),this.deleteVertexArray=i=>nt(t,()=>o.deleteVertexArrayOES(i)),this.getVertexArray=()=>nt(t,()=>t.getParameter(o.VERTEX_ARRAY_BINDING_OES))}let s="WEBGL_color_buffer_float";const r="EXT_color_buffer_half_float";if(this.parallelCompilationExtension=this.gl.getExtension("KHR_parallel_shader_compile"),W().getNumber("WEBGL_VERSION")===1){const o="OES_texture_float",i="OES_texture_half_float";if(this.textureFloatExtension=La(this.gl,o),cn(this.gl,i))this.textureHalfFloatExtension=La(this.gl,i);else if(W().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support half float textures, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.");if(this.colorBufferFloatExtension=this.gl.getExtension(s),cn(this.gl,r))this.colorBufferHalfFloatExtension=La(this.gl,r);else if(W().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support color renderable half floats, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.")}else if(s="EXT_color_buffer_float",cn(this.gl,s))this.colorBufferFloatExtension=this.gl.getExtension(s);else if(cn(this.gl,r))this.colorBufferHalfFloatExtension=this.gl.getExtension(r);else throw new Error("GL context does not support color renderable floats");this.vertexBuffer=Zz(this.gl),this.indexBuffer=Jz(this.gl),this.framebuffer=WP(this.gl),this.textureConfig=Cp(this.gl,this.textureHalfFloatExtension)}get debug(){return W().getBool("DEBUG")}dispose(){if(this.disposed)return;this.program!=null&&console.warn("Disposing a GPGPUContext that still has a bound WebGLProgram. This is probably a resource leak, delete the program with GPGPUContext.deleteProgram before disposing."),this.outputTexture!=null&&console.warn("Disposing a GPGPUContext that still has a bound output matrix texture.  This is probably a resource leak, delete the output matrix texture with GPGPUContext.deleteMatrixTexture before disposing.");const t=this.gl;nt(t,()=>t.finish()),nt(t,()=>t.bindFramebuffer(t.FRAMEBUFFER,null)),nt(t,()=>t.deleteFramebuffer(this.framebuffer)),nt(t,()=>t.bindBuffer(t.ARRAY_BUFFER,null)),nt(t,()=>t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,null)),nt(t,()=>t.deleteBuffer(this.indexBuffer)),this.disposed=!0}createFloat32MatrixTexture(t,e){return this.throwIfDisposed(),Qz(this.gl,t,e,this.textureConfig)}createFloat16MatrixTexture(t,e){return this.throwIfDisposed(),tB(this.gl,t,e,this.textureConfig)}createUnsignedBytesMatrixTexture(t,e){return this.throwIfDisposed(),eB(this.gl,t,e,this.textureConfig)}uploadPixelDataToTexture(t,e){this.throwIfDisposed(),iB(this.gl,t,e)}uploadDenseMatrixToTexture(t,e,s,r){this.throwIfDisposed(),oB(this.gl,t,e,s,r,this.textureConfig)}createFloat16PackedMatrixTexture(t,e){return this.throwIfDisposed(),sB(this.gl,t,e,this.textureConfig)}createPackedMatrixTexture(t,e){return this.throwIfDisposed(),nB(this.gl,t,e,this.textureConfig)}deleteMatrixTexture(t){this.throwIfDisposed(),this.outputTexture===t&&(ig(this.gl,this.framebuffer),this.outputTexture=null),nt(this.gl,()=>this.gl.deleteTexture(t))}downloadByteEncodedFloatMatrixFromOutputTexture(t,e,s){return this.downloadMatrixDriver(t,()=>cB(this.gl,e,s,this.textureConfig))}downloadPackedMatrixFromBuffer(t,e,s,r,o,i){return uB(this.gl,t,e,s,r,o,i,this.textureConfig)}downloadFloat32MatrixFromBuffer(t,e){return lB(this.gl,t,e)}createBufferFromTexture(t,e,s){this.bindTextureToFrameBuffer(t);const r=aB(this.gl,e,s,this.textureConfig);return this.unbindTextureToFrameBuffer(),r}createAndWaitForFence(){const t=this.createFence(this.gl);return this.pollFence(t)}createFence(t){let e,s;if(W().getBool("WEBGL_FENCE_API_ENABLED")){const r=t,o=r.fenceSync(r.SYNC_GPU_COMMANDS_COMPLETE,0);t.flush(),s=()=>{const i=r.clientWaitSync(o,0,0);return i===r.ALREADY_SIGNALED||i===r.CONDITION_SATISFIED},e=o}else W().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0?(e=this.beginQuery(),this.endQuery(),s=()=>this.isQueryAvailable(e,W().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))):s=()=>!0;return{query:e,isFencePassed:s}}downloadMatrixFromPackedTexture(t,e,s){return this.downloadMatrixDriver(t,()=>hB(this.gl,e,s))}createProgram(t){this.throwIfDisposed();const e=this.gl;this.vertexShader==null&&(this.vertexShader=Yz(e));const s=MP(e);nt(e,()=>e.attachShader(s,this.vertexShader)),nt(e,()=>e.attachShader(s,t)),LP(e,s);const r=Object.assign(s,{vao:this.createVertexArray()});return this.debug&&qu(e,r),r}buildVao(t){this.setProgram(t),this.bindVertexArray(t.vao);const e=this.gl;nt(e,()=>e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,this.indexBuffer)),rB(e,t,this.vertexBuffer)}deleteProgram(t){this.throwIfDisposed(),t===this.program&&(this.program=null),t!=null&&(nt(this.gl,()=>this.gl.deleteProgram(t)),this.deleteVertexArray(t.vao))}setProgram(t){this.throwIfDisposed(),this.program=t,this.program!=null&&this.debug&&qu(this.gl,this.program),nt(this.gl,()=>this.gl.useProgram(t))}getUniformLocation(t,e,s=!0){return this.throwIfDisposed(),s?GP(this.gl,t,e):HP(this.gl,t,e)}getAttributeLocation(t,e){return this.throwIfDisposed(),nt(this.gl,()=>this.gl.getAttribLocation(t,e))}getUniformLocationNoThrow(t,e){return this.throwIfDisposed(),this.gl.getUniformLocation(t,e)}setInputMatrixTexture(t,e,s){this.throwIfDisposed(),this.throwIfNoProgram(),qP(this.gl,t,e,s)}setOutputMatrixTexture(t,e,s){this.setOutputMatrixTextureDriver(t,s,e)}setOutputPackedMatrixTexture(t,e,s){this.throwIfDisposed();const[r,o]=mo(e,s);this.setOutputMatrixTextureDriver(t,r,o)}setOutputMatrixWriteRegion(t,e,s,r){this.setOutputMatrixWriteRegionDriver(s,t,r,e)}setOutputPackedMatrixWriteRegion(t,e,s,r){throw new Error("setOutputPackedMatrixWriteRegion not implemented.")}debugValidate(){this.program!=null&&qu(this.gl,this.program),Pa(this.gl)}executeProgram(){this.throwIfDisposed(),this.throwIfNoProgram();const t=this.gl;if(this.debug){const e=this.getVertexArray();console.assert(e===this.program.vao,"VAO changed between setProgram and executeProgram!"),this.debugValidate()}nt(t,()=>t.drawElements(t.TRIANGLES,6,t.UNSIGNED_SHORT,0))}blockUntilAllProgramsCompleted(){this.throwIfDisposed(),nt(this.gl,()=>this.gl.finish())}getQueryTimerExtension(){return this.disjointQueryTimerExtension==null&&(this.disjointQueryTimerExtension=La(this.gl,W().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2?"EXT_disjoint_timer_query_webgl2":"EXT_disjoint_timer_query")),this.disjointQueryTimerExtension}getQueryTimerExtensionWebGL2(){return this.getQueryTimerExtension()}getQueryTimerExtensionWebGL1(){return this.getQueryTimerExtension()}beginQuery(){if(W().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2){const s=this.gl,r=this.getQueryTimerExtensionWebGL2(),o=s.createQuery();return s.beginQuery(r.TIME_ELAPSED_EXT,o),o}const t=this.getQueryTimerExtensionWebGL1(),e=t.createQueryEXT();return t.beginQueryEXT(t.TIME_ELAPSED_EXT,e),e}endQuery(){if(W().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2){const e=this.gl,s=this.getQueryTimerExtensionWebGL2();e.endQuery(s.TIME_ELAPSED_EXT);return}const t=this.getQueryTimerExtensionWebGL1();t.endQueryEXT(t.TIME_ELAPSED_EXT)}async waitForQueryAndGetTime(t){return await Up(()=>this.disposed||this.isQueryAvailable(t,W().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))),this.getQueryTime(t,W().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))}getQueryTime(t,e){if(e===0)return null;if(e===2){const s=this.gl;return s.getQueryParameter(t,s.QUERY_RESULT)/1e6}else{const s=this.getQueryTimerExtensionWebGL1();return s.getQueryObjectEXT(t,s.QUERY_RESULT_EXT)/1e6}}isQueryAvailable(t,e){if(e===0)return!0;if(e===2){const s=this.gl,r=this.getQueryTimerExtensionWebGL2(),o=s.getQueryParameter(t,s.QUERY_RESULT_AVAILABLE);return this.disjoint==null&&(this.disjoint=this.gl.getParameter(r.GPU_DISJOINT_EXT)),o&&!this.disjoint}else{const s=this.getQueryTimerExtensionWebGL1(),r=s.getQueryObjectEXT(t,s.QUERY_RESULT_AVAILABLE_EXT);return this.disjoint==null&&(this.disjoint=this.gl.getParameter(s.GPU_DISJOINT_EXT)),r&&!this.disjoint}}pollFence(t){return new Promise(e=>{this.addItemToPoll(()=>t.isFencePassed(),()=>e())})}pollItems(){const t=dB(this.itemsToPoll.map(e=>e.isDoneFn));for(let e=0;e<=t;++e){const{resolveFn:s}=this.itemsToPoll[e];s()}this.itemsToPoll=this.itemsToPoll.slice(t+1)}addItemToPoll(t,e){if(this.itemsToPoll.push({isDoneFn:t,resolveFn:e}),this.itemsToPoll.length>1)return;let s;"setTimeoutCustom"in W().platform&&(s=W().platform.setTimeoutCustom.bind(W().platform)),Up(()=>(this.pollItems(),this.itemsToPoll.length===0),()=>0,null,s)}bindTextureToFrameBuffer(t){this.throwIfDisposed(),ju(this.gl,t,this.framebuffer),this.debug&&Pa(this.gl)}unbindTextureToFrameBuffer(){this.outputTexture!=null?(ju(this.gl,this.outputTexture,this.framebuffer),this.debug&&Pa(this.gl)):ig(this.gl,this.framebuffer)}downloadMatrixDriver(t,e){this.bindTextureToFrameBuffer(t);const s=e();return this.unbindTextureToFrameBuffer(),s}setOutputMatrixTextureDriver(t,e,s){this.throwIfDisposed();const r=this.gl;ju(r,t,this.framebuffer),this.debug&&Pa(r),this.outputTexture=t,nt(r,()=>r.viewport(0,0,e,s)),nt(r,()=>r.scissor(0,0,e,s))}setOutputMatrixWriteRegionDriver(t,e,s,r){this.throwIfDisposed(),nt(this.gl,()=>this.gl.scissor(t,e,s,r))}throwIfDisposed(){if(this.disposed)throw new Error("Attempted to use disposed GPGPUContext.")}throwIfNoProgram(){if(this.program==null)throw new Error("No GPU program is currently set.")}}function dB(n){let t=0;for(;t<n.length&&n[t]();++t);return t-1}const{addImpl:fB,bincountImpl:av,bincountReduceImpl:pB,bitwiseAndImpl:mB,castImpl:gB,ceilImpl:xB,concatImpl:bB,equalImpl:yB,expImpl:wB,expm1Impl:vB,floorImpl:CB,gatherNdImpl:$B,gatherV2Impl:kB,greaterImpl:IB,greaterEqualImpl:SB,lessImpl:NB,lessEqualImpl:TB,linSpaceImpl:EB,logImpl:RB,maxImpl:AB,maximumImpl:DB,minimumImpl:_B,multiplyImpl:FB,negImpl:OB,notEqualImpl:MB,prodImpl:LB,raggedGatherImpl:PB,raggedRangeImpl:zB,raggedTensorToTensorImpl:BB,rangeImpl:VB,rsqrtImpl:WB,scatterImpl:UB,sigmoidImpl:GB,simpleAbsImpl:lv,sliceImpl:HB,sparseFillEmptyRowsImpl:qB,sparseReshapeImpl:jB,sparseSegmentReductionImpl:cv,sqrtImpl:KB,staticRegexReplaceImpl:XB,stridedSliceImpl:YB,stringNGramsImpl:ZB,stringSplitImpl:JB,stringToHashBucketFastImpl:QB,subImpl:tV,tileImpl:eV,topKImpl:nV,transposeImpl:Sp,uniqueImpl:sV}=iF;function uv(n,t){return["x","y","z","w","u","v"].slice(0,t).map(e=>`${n}.${e}`)}function Re(n,t){return t===1?[n]:uv(n,t)}function rV(n,t){if(n===1)return"rc";let e="";for(let s=0;s<n;s++)e+=t[s],s<n-1&&(e+=",");return e}class oV{constructor(t){if(this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outputShape=t,this.rank=t.length,this.enableShapeUniforms=Ne(this.outputShape.length),this.rank===0)this.userCode=`
        void main() {
          setOutput(vec4(getA(), 0., 0., 0.));
        }
      `;else{const e=Re("rc",this.rank),s=Ft(this.rank),r=this.getOutOfBoundsCondition(e),o=this.getSetup(e),i=this.getOutput(e);this.userCode=`
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
            rEdge || cEdge ? 0. : getA(${e[3]})`}}class hv{constructor(t,e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"inputShape",type:"ivec3"}],this.outputShape=t,this.enableShapeUniforms=Ne(this.outputShape.length);let s="";for(let r=0;r<4;r++){let o="thisRC = rc;";r%2===1&&(o+="thisRC.z += 1;"),r>1&&(o+="thisRC.y += 1;"),s+=`
        ${o}
        ${r>0?"if(thisRC.y < rows && thisRC.z < cols){":""}
          int flatIndex = getFlatIndex(thisRC);

          ivec3 inputRC = inputCoordsFromReshapedOutCoords(flatIndex);
          vec2 inputRCInnerDims = vec2(float(inputRC.y),float(inputRC.z));

          result[${r}] =
            getChannel(getA(inputRC.x, inputRC.y, inputRC.z), inputRCInnerDims);
        ${r>0?"}":""}
      `}this.userCode=`
      ${iV(e,this.enableShapeUniforms)}
      ${this.enableShapeUniforms?kp():$p(t)}

      void main() {
        ivec3 rc = getOutputCoords();

        vec4 result = vec4(0.);

        ivec3 thisRC;
        int rows = ${this.enableShapeUniforms?"outShape[1]":t[1]};
        int cols = ${this.enableShapeUniforms?"outShape[2]":t[2]};

        ${s}

        setOutput(result);
      }
    `}}function iV(n,t){return`
    ivec3 inputCoordsFromReshapedOutCoords(int index) {
      ${t?rz(["r","c","d"],"inputShape"):Sr(["r","c","d"],n)}
      return ivec3(r, c, d);
    }
  `}class aV{constructor(t){this.gpgpu=t,this.numUsedTextures=0,this.numFreeTextures=0,this._numBytesAllocated=0,this._numBytesFree=0,this.freeTextures={},this.usedTextures={},this.logEnabled=!1}acquireTexture(t,e,s){const r=hg(e,s),o=dg(t,r,s);o in this.freeTextures||(this.freeTextures[o]=[]),o in this.usedTextures||(this.usedTextures[o]=[]);const i=ug(t,r,this.gpgpu.gl,this.gpgpu.textureConfig,s);if(this.freeTextures[o].length>0){this.numFreeTextures--,this.numUsedTextures++,this._numBytesFree-=i,this.log();const l=this.freeTextures[o].pop();return this.usedTextures[o].push(l),l}let a;return r===xe.PACKED_2X2_FLOAT32?a=this.gpgpu.createPackedMatrixTexture(t[0],t[1]):r===xe.PACKED_2X2_FLOAT16?a=this.gpgpu.createFloat16PackedMatrixTexture(t[0],t[1]):r===xe.UNPACKED_FLOAT32?a=this.gpgpu.createFloat32MatrixTexture(t[0],t[1]):r===xe.UNPACKED_FLOAT16?a=this.gpgpu.createFloat16MatrixTexture(t[0],t[1]):r===xe.PACKED_4X1_UNSIGNED_BYTE&&(a=this.gpgpu.createUnsignedBytesMatrixTexture(t[0],t[1])),this.usedTextures[o].push(a),this.numUsedTextures++,this._numBytesAllocated+=i,this.log(),a}releaseTexture(t,e,s,r){if(this.freeTextures==null)return;const o=hg(s,r),i=dg(e,o,r);i in this.freeTextures||(this.freeTextures[i]=[]);const a=ug(e,o,this.gpgpu.gl,this.gpgpu.textureConfig,r),l=W().getNumber("WEBGL_DELETE_TEXTURE_THRESHOLD");l!==-1&&this._numBytesAllocated>l?(this.gpgpu.deleteMatrixTexture(t.texture),this._numBytesAllocated-=a):(this.freeTextures[i].push(t),this.numFreeTextures++,this._numBytesFree+=a),this.numUsedTextures--;const c=this.usedTextures[i],u=c&&c.indexOf(t);if(u==null||u<0)throw new Error("Cannot release a texture that was never provided by this texture manager");c[u]=c[c.length-1],c.pop(),this.log()}log(){if(!this.logEnabled)return;const t=this.numFreeTextures+this.numUsedTextures;console.log("Free/Used",`${this.numFreeTextures} / ${this.numUsedTextures}`,`(${t})`);const e=this._numBytesFree/this._numBytesAllocated;console.log(`Bytes allocated: ${this._numBytesAllocated}`),console.log(`Bytes unused: ${this._numBytesFree} (${Math.round(100*e)}%)`)}get numBytesAllocated(){return this._numBytesAllocated}get numBytesFree(){return this._numBytesFree}getNumUsedTextures(){return this.numUsedTextures}getNumFreeTextures(){return this.numFreeTextures}dispose(){if(this.freeTextures!=null){for(const t in this.freeTextures)this.freeTextures[t].forEach(e=>{this.gpgpu.deleteMatrixTexture(e.texture)});for(const t in this.usedTextures)this.usedTextures[t].forEach(e=>{this.gpgpu.deleteMatrixTexture(e.texture)});this.freeTextures=null,this.usedTextures=null,this.numUsedTextures=0,this.numFreeTextures=0,this._numBytesAllocated=0,this._numBytesFree=0}}}function lV(n,t){const e=n;if(t===e.R32F)return 4;if(t===e.R16F)return 2;if(t===e.RGBA32F)return 16;if(t===n.RGBA)return 16;if(t===e.RGBA16F)return 8;if(t===e.RGBA8)return 4;throw new Error(`Unknown internal format ${t}`)}function ug(n,t,e,s,r){const o=cV(t,s);let i;if(r){const[l,c]=mo(n[0],n[1]);i=l*c}else{const[l,c]=ba(n[0],n[1]);i=l*c}const a=lV(e,o);return i*a}function cV(n,t){switch(n){case xe.PACKED_2X2_FLOAT32:return ov(t);case xe.PACKED_2X2_FLOAT16:return iv(t);case xe.UNPACKED_FLOAT32:return nv(t);case xe.UNPACKED_FLOAT16:return sv(t);case xe.PACKED_4X1_UNSIGNED_BYTE:return rv(t);default:throw new Error(`Unknown physical texture type ${n}`)}}function uV(n){return W().getBool("WEBGL_RENDER_FLOAT32_ENABLED")?n?xe.PACKED_2X2_FLOAT32:xe.UNPACKED_FLOAT32:n?xe.PACKED_2X2_FLOAT16:xe.UNPACKED_FLOAT16}function hg(n,t){if(n===Je.UPLOAD)return xe.PACKED_2X2_FLOAT32;if(n===Je.RENDER||n==null)return uV(t);if(n===Je.DOWNLOAD||n===Je.PIXELS)return xe.PACKED_4X1_UNSIGNED_BYTE;throw new Error(`Unknown logical texture type ${n}`)}function dg(n,t,e){return`${n[0]}_${n[1]}_${t}_${e}`}class Ln{constructor(t,e){this.variableNames=["A"],this.outputShape=t,this.enableShapeUniforms=Ne(this.outputShape.length),this.userCode=`
      float unaryOperation(float x) {
        ${e}
      }

      void main() {
        float x = getAAtOutCoords();
        float y = unaryOperation(x);

        setOutput(y);
      }
    `}}const pn="if (isnan(x)) return x;",hV="return x;",fg="return abs(x);",dV="return (x >= 0.0) ? x : (exp(x) - 1.0);",fV=pn+`
  return (x < 0.0) ? 0.0 : x;
`,pV=pn+`
  return (x < 0.0) ? 0.0 : min(6.0, x);
`,bs="return x;",mV="return 1.0 / (1.0 + exp(-1.0 * x));";const gV="return x;",xV=`
  vec4 result;

  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);
  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);
  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);
  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);

  return result;
`,bV=`
  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,yV=`
  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,wV="return 1.0 / (1.0 + exp(-1.0 * x));";class vs{constructor(t,e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t,this.enableShapeUniforms=Ne(this.outputShape.length),this.userCode=`
      vec4 unaryOperation(vec4 x) {
        ${e}
      }

      void main() {
        vec4 x = getAAtOutCoords();
        vec4 y = unaryOperation(x);

        setOutput(y);
      }
    `}}class vV{constructor(t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outputShape=t,this.enableShapeUniforms=Ne(this.outputShape.length);const e=t.length,s=Re("rc",e),r=Ft(e),o=rV(e,s),i=s.slice(-2),a=e<=1?"rc":`vec2(${i.join(",")})`;this.userCode=`
      void main() {
        ${r} rc = getOutputCoords();
        vec4 packedInput = getA(${o});

        setOutput(getChannel(packedInput, ${a}));
      }
    `}}const CV=_0,$V=1e-7,kV=1e-4,Va={};function IV(n){return n in Va||(Va[n]={}),Va[n]}const SV=W().getNumber("CPU_HANDOFF_SIZE_THRESHOLD"),NV=600;function TV(){return W().global.screen==null?1024:W().global.screen.height*W().global.screen.width*window.devicePixelRatio*NV/1024/1024}class vu extends qh{nextDataId(){return vu.nextDataId++}constructor(t){if(super(),this.pendingRead=new WeakMap,this.pendingDisposal=new WeakSet,this.dataRefCount=new WeakMap,this.numBytesInGPU=0,this.uploadWaitMs=0,this.downloadWaitMs=0,this.lastGlFlushTime=0,this.warnedAboutMemory=!1,this.pendingDeletes=0,this.disposed=!1,!W().getBool("HAS_WEBGL"))throw new Error("WebGL is not supported on this device");let e;if(t!=null){if(t instanceof Yu)e=t;else{const s=Tn(W().getNumber("WEBGL_VERSION"),t);e=new Yu(s)}this.binaryCache={},this.gpgpuCreatedLocally=!1}else{const s=Tn(W().getNumber("WEBGL_VERSION"));e=new Yu(s),this.binaryCache=IV(W().getNumber("WEBGL_VERSION")),this.gpgpuCreatedLocally=!0}this.gpgpu=e,this.canvas=this.gpgpu.gl.canvas,this.textureManager=new aV(this.gpgpu),this.numMBBeforeWarning=TV(),this.texData=new ox(this,Dn())}numDataIds(){return this.texData.numDataIds()-this.pendingDeletes}writeTexture(t,e,s,r,o,i){const a=this.makeTensorInfo(e,s),l=this.texData.get(a.dataId);l.isPacked=!1,l.texture={texture:t,texShape:[r,o]},l.texShape=[r,o];const c=za(e),u=new cg(c,!1,i),h=this.runWebGLProgram(u,[a],s,[[r,o]]);return h.shape=e,l.texture=null,this.disposeIntermediateTensorInfo(a),h.dataId}write(t,e,s){if((W().getBool("WEBGL_CHECK_NUMERICAL_PROBLEMS")||W().getBool("DEBUG"))&&this.checkNumericalProblems(t),s==="complex64"&&t!=null)throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");const r={id:this.nextDataId()};return this.texData.set(r,{shape:e,dtype:s,values:t,usage:Je.UPLOAD,refCount:1}),r}refCount(t){return this.texData.has(t)?this.texData.get(t).refCount:0}incRef(t){const e=this.texData.get(t);e.refCount++}decRef(t){if(this.texData.has(t)){const e=this.texData.get(t);e.refCount--}}move(t,e,s,r,o){if(W().getBool("DEBUG")&&this.checkNumericalProblems(e),r==="complex64")throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");this.texData.set(t,{shape:s,dtype:r,values:e,usage:Je.UPLOAD,refCount:o})}disposeIntermediateTensorInfo(t){this.disposeData(t.dataId)}readSync(t){const e=this.texData.get(t),{values:s,dtype:r,complexTensorInfos:o,slice:i,shape:a,isPacked:l}=e;if(i!=null){let d;l?d=new vs(a,bs):d=new Ln(a,bs);const f=this.runWebGLProgram(d,[{dataId:t,shape:a,dtype:r}],r),p=this.readSync(f.dataId);return this.disposeIntermediateTensorInfo(f),p}if(s!=null)return this.convertAndCacheOnCPU(t);if(r==="string")return s;const c=this.activeTimers!=null;let u;c&&(u=Fe());let h;if(r==="complex64"){const d=this.readSync(o.real.dataId),f=this.readSync(o.imag.dataId);h=as(d,f)}else h=this.getValuesFromTexture(t);return c&&(this.downloadWaitMs+=Fe()-u),this.convertAndCacheOnCPU(t,h)}async read(t){if(this.pendingRead.has(t)){const p=this.pendingRead.get(t);return new Promise(m=>p.push(m))}const e=this.texData.get(t),{values:s,shape:r,slice:o,dtype:i,complexTensorInfos:a,isPacked:l}=e;if(o!=null){let p;l?p=new vs(r,bs):p=new Ln(r,bs);const m=this.runWebGLProgram(p,[{dataId:t,shape:r,dtype:i}],i),g=this.read(m.dataId);return this.disposeIntermediateTensorInfo(m),g}if(s!=null)return this.convertAndCacheOnCPU(t);if(W().getBool("DEBUG")&&!W().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")&&W().getNumber("WEBGL_VERSION")===2)throw new Error("tensor.data() with WEBGL_DOWNLOAD_FLOAT_ENABLED=false and WEBGL_VERSION=2 not yet supported.");let c=null,u;if(i!=="complex64"&&W().get("WEBGL_BUFFER_SUPPORTED")){u=this.decode(t);const p=this.texData.get(u.dataId);c=this.gpgpu.createBufferFromTexture(p.texture.texture,...Ma(r))}this.pendingRead.set(t,[]),i!=="complex64"&&await this.gpgpu.createAndWaitForFence();let h;if(i==="complex64"){const p=await Promise.all([this.read(a.real.dataId),this.read(a.imag.dataId)]),m=p[0],g=p[1];h=as(m,g)}else if(c==null)h=this.getValuesFromTexture(t);else{const p=q(r);h=this.gpgpu.downloadFloat32MatrixFromBuffer(c,p)}if(u!=null&&this.disposeIntermediateTensorInfo(u),c!=null){const p=this.gpgpu.gl;nt(p,()=>p.deleteBuffer(c))}const d=this.convertAndCacheOnCPU(t,h),f=this.pendingRead.get(t);return this.pendingRead.delete(t),f.forEach(p=>p(d)),this.pendingDisposal.has(t)&&(this.pendingDisposal.delete(t),this.disposeData(t)&&Dn().removeDataId(t,this),this.pendingDeletes--),d}readToGPU(t,e={}){const s=this.texData.get(t),{values:r,shape:o,slice:i,dtype:a,isPacked:l,texture:c}=s;if(a==="complex64")throw new Error("Does not support reading texture for complex64 dtype.");if(i!=null){let f;l?f=new vs(o,bs):f=new Ln(o,bs);const p=this.runWebGLProgram(f,[{dataId:t,shape:o,dtype:a}],a),m=this.readToGPU(p,e);return this.disposeIntermediateTensorInfo(p),m}if(c==null)throw r!=null?new Error("Data is not on GPU but on CPU."):new Error("There is no data on GPU or CPU.");const u=this.decode(t,e.customTexShape),h=Dn().makeTensorFromTensorInfo(u),d=this.texData.get(u.dataId);return Object.assign({tensorRef:h},d.texture)}bufferSync(t){const e=this.readSync(t.dataId);if(t.dtype==="string")try{const s=e.map(r=>Ss(r));return wt(t.shape,t.dtype,s)}catch{throw new Error("Failed to decode encoded string bytes into utf-8")}return wt(t.shape,t.dtype,e)}checkNumericalProblems(t){if(t!=null)for(let e=0;e<t.length;e++){const s=t[e];if(!AP(s))throw W().getBool("WEBGL_RENDER_FLOAT32_CAPABLE")?Error(`The value ${s} cannot be represented with your current settings. Consider enabling float32 rendering: 'tf.env().set('WEBGL_RENDER_FLOAT32_ENABLED', true);'`):Error(`The value ${s} cannot be represented on this device.`)}}getValuesFromTexture(t){const{shape:e,dtype:s,isPacked:r}=this.texData.get(t),o=q(e);if(W().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")){const d=this.decode(t),f=this.texData.get(d.dataId),p=this.gpgpu.downloadMatrixFromPackedTexture(f.texture.texture,...Ma(e)).subarray(0,o);return this.disposeIntermediateTensorInfo(d),p}const i=W().getBool("WEBGL_PACK")&&r===!0,a=i?za(e):e,l=i?new jz(a):new qz(a),c=this.runWebGLProgram(l,[{shape:a,dtype:s,dataId:t}],"float32"),u=this.texData.get(c.dataId),h=this.gpgpu.downloadByteEncodedFloatMatrixFromOutputTexture(u.texture.texture,u.texShape[0],u.texShape[1]).subarray(0,o);return this.disposeIntermediateTensorInfo(c),h}timerAvailable(){return W().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0}time(t){const e=this.activeTimers,s=[];let r=!1;this.programTimersStack==null?(this.programTimersStack=s,r=!0):this.activeTimers.push(s),this.activeTimers=s,t();const o=rr(this.activeTimers.map(l=>l.query)).filter(l=>l!=null),i=rr(this.activeTimers.map(l=>l.name)).filter(l=>l!=null);this.activeTimers=e,r&&(this.programTimersStack=null);const a={uploadWaitMs:this.uploadWaitMs,downloadWaitMs:this.downloadWaitMs,kernelMs:null,wallMs:null};return(async()=>{if(W().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0){const l=await Promise.all(o);a.kernelMs=qC(l),a.getExtraProfileInfo=()=>l.map((c,u)=>({name:i[u],ms:c})).map(c=>`${c.name}: ${c.ms}`).join(", ")}else a.kernelMs={error:"WebGL query timers are not supported in this environment."};return this.uploadWaitMs=0,this.downloadWaitMs=0,a})()}memory(){return{unreliable:!1,numBytesInGPU:this.numBytesInGPU,numBytesInGPUAllocated:this.textureManager.numBytesAllocated,numBytesInGPUFree:this.textureManager.numBytesFree}}startTimer(){return W().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?this.gpgpu.beginQuery():{startMs:Fe(),endMs:null}}endTimer(t){return W().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?(this.gpgpu.endQuery(),t):(t.endMs=Fe(),t)}async getQueryTime(t){if(W().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0)return this.gpgpu.waitForQueryAndGetTime(t);const e=t;return e.endMs-e.startMs}disposeData(t,e=!1){if(this.pendingDisposal.has(t))return!1;if(!this.texData.has(t))return!0;if(e?this.texData.get(t).refCount=0:this.texData.get(t).refCount--,!e&&this.texData.get(t).refCount>0)return!1;if(this.pendingRead.has(t))return this.pendingDisposal.add(t),this.pendingDeletes++,!1;this.releaseGPUData(t);const{complexTensorInfos:s}=this.texData.get(t);return s!=null&&(this.disposeData(s.real.dataId,e),this.disposeData(s.imag.dataId,e)),this.texData.delete(t),!0}releaseGPUData(t){const{texture:e,dtype:s,texShape:r,usage:o,isPacked:i,slice:a}=this.texData.get(t),l=a&&a.origDataId||t,c=this.dataRefCount.get(l);c>1?this.dataRefCount.set(l,c-1):(this.dataRefCount.delete(l),e!=null&&(this.numBytesInGPU-=this.computeBytes(r,s),this.textureManager.releaseTexture(e,r,o,i)));const u=this.texData.get(t);u.texture=null,u.texShape=null,u.isPacked=!1,u.slice=null}getTexture(t){return this.uploadToGPU(t),this.texData.get(t).texture.texture}getDataInfo(t){return this.texData.get(t)}shouldExecuteOnCPU(t,e=SV){return W().getBool("WEBGL_CPU_FORWARD")&&t.every(s=>this.texData.get(s.dataId).texture==null&&q(s.shape)<e)}getGPGPUContext(){return this.gpgpu}where(t){Ze("tf.where() in webgl locks the UI thread. Call tf.whereAsync() instead");const e=t.dataSync();return CV(t.shape,e)}packedUnaryOp(t,e,s){const r=new vs(t.shape,e),o=this.compileAndRun(r,[t],s);return Dn().makeTensorFromTensorInfo(o)}abs(t){if(this.shouldExecuteOnCPU([t])&&t.dtype!=="complex64"){const r=lv(this.texData.get(t.dataId).values);return this.makeOutput(t.shape,t.dtype,r)}if(W().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(t,fg,t.dtype);const e=new Ln(t.shape,fg),s=this.compileAndRun(e,[t]);return Dn().makeTensorFromTensorInfo(s)}makeTensorInfo(t,e,s){let r;if(e==="string"&&s!=null&&s.length>0&&oi(s[0])){const o=s.map(i=>$s(i));r=this.write(o,t,e)}else r=this.write(s,t,e);return this.texData.get(r).usage=null,{dataId:r,shape:t,dtype:e}}makeOutput(t,e,s){return Dn().makeTensorFromTensorInfo(this.makeTensorInfo(t,e,s),this)}unpackTensor(t){const e=new vV(t.shape);return this.runWebGLProgram(e,[t],t.dtype)}packTensor(t){const e=new oV(t.shape);return this.runWebGLProgram(e,[t],t.dtype,null,!0)}packedReshape(t,e){const s=[to(t.shape),...eo(t.shape)],r={dtype:t.dtype,shape:s,dataId:t.dataId},o=[to(e),...eo(e)],i=new hv(o,s),a=!0,l=[s],c=this.runWebGLProgram(i,[r],t.dtype,l,a);return{dataId:c.dataId,shape:e,dtype:c.dtype}}decode(t,e){const s=this.texData.get(t),{isPacked:r,shape:o,dtype:i}=s;if(e!=null){const d=q(o),f=e[0]*e[1]*4;S(d<=f,()=>"customTexShape is too small. Row * Column * 4 should be equal or larger than the size of the tensor data.")}const a=za(o);let l;r?l=new Hz(a):l=new Gz(a);const c=!0,u=[e??Ma(a)],h=this.runWebGLProgram(l,[{shape:a,dtype:i,dataId:t}],i,u,c,e);return{dtype:i,shape:o,dataId:h.dataId}}runWebGLProgram(t,e,s,r,o=!1,i){const a=this.makeTensorInfo(t.outputShape,s),l=this.texData.get(a.dataId);if(t.packedOutput&&(l.isPacked=!0),t.outPackingScheme===Jo.DENSE){const x=i??Ma(t.outputShape);l.texShape=x.map(b=>b*2)}if(t.outTexUsage!=null&&(l.usage=t.outTexUsage),q(a.shape)===0)return l.values=Ce(a.dtype,0),a;const c=[],u=e.map(x=>{if(x.dtype==="complex64")throw new Error("GPGPUProgram does not support complex64 input. For complex64 dtypes, please separate the program into real and imaginary parts.");let b=this.texData.get(x.dataId);if(b.texture==null){if(!t.packedInputs&&q(x.shape)<=W().getNumber("WEBGL_SIZE_UPLOAD_UNIFORM"))return{shape:x.shape,texData:null,isUniform:!0,uniformValues:b.values};t.packedInputs&&(b.isPacked=!0,b.shape=x.shape)}if(this.uploadToGPU(x.dataId),!!b.isPacked!=!!t.packedInputs)x=b.isPacked?this.unpackTensor(x):this.packTensor(x),c.push(x),b=this.texData.get(x.dataId);else if(b.isPacked&&!Fl(b.shape,x.shape)){const w=x,y=x.shape;x.shape=b.shape,x=this.packedReshape(x,y),c.push(x),b=this.texData.get(x.dataId),w.shape=y}return{shape:x.shape,texData:b,isUniform:!1}});this.uploadToGPU(a.dataId);const h={shape:a.shape,texData:l,isUniform:!1},d=Uz(t,u,h),f=this.getAndSaveBinary(d,()=>Vz(this.gpgpu,t,u,h)),p=this.activeTimers!=null;let m;p&&(m=this.startTimer()),W().get("ENGINE_COMPILE_ONLY")||Wz(this.gpgpu,f,u,h,r),c.forEach(x=>this.disposeIntermediateTensorInfo(x)),p&&(m=this.endTimer(m),this.activeTimers.push({name:t.constructor.name,query:this.getQueryTime(m)}));const g=W().getNumber("WEBGL_FLUSH_THRESHOLD");if(g>0){const x=Fe();x-this.lastGlFlushTime>g&&(this.gpgpu.gl.flush(),this.lastGlFlushTime=x)}if(!W().getBool("WEBGL_LAZILY_UNPACK")&&l.isPacked&&o===!1){const x=this.unpackTensor(a);return this.disposeIntermediateTensorInfo(a),x}return a}compileAndRun(t,e,s,r,o=!1){return s=s||e[0].dtype,this.runWebGLProgram(t,e,s,r,o)}getAndSaveBinary(t,e){return t in this.binaryCache||(this.binaryCache[t]=e()),this.binaryCache[t]}getTextureManager(){return this.textureManager}dispose(){this.disposed||(W().getBool("IS_TEST")||Object.keys(this.binaryCache).forEach(e=>{this.gpgpu.deleteProgram(this.binaryCache[e].webGLProgram),delete this.binaryCache[e]}),this.textureManager.dispose(),this.canvas!=null&&typeof HTMLCanvasElement<"u"&&this.canvas instanceof HTMLCanvasElement?this.canvas.remove():this.canvas=null,this.gpgpuCreatedLocally&&(this.gpgpu.program=null,this.gpgpu.dispose()),this.disposed=!0)}floatPrecision(){return this.floatPrecisionValue==null&&(this.floatPrecisionValue=V(()=>{if(!W().get("WEBGL_RENDER_FLOAT32_ENABLED")){const t=W().getBool("DEBUG");W().set("DEBUG",!1);const e=this.abs(Tt(1e-8)).dataSync()[0];if(W().set("DEBUG",t),e>0)return 32}return 16})),this.floatPrecisionValue}epsilon(){return this.floatPrecision()===32?$V:kV}uploadToGPU(t){const e=this.texData.get(t),{shape:s,dtype:r,values:o,texture:i,usage:a,isPacked:l}=e;if(i!=null)return;const c=this.activeTimers!=null;let u;c&&(u=Fe());let h=e.texShape;if(h==null&&(h=XP(s,l),e.texShape=h),o!=null){const d=za(s);let f,p=h[1],m=h[0];const g=o instanceof Uint8Array||o instanceof Uint8ClampedArray;(l||!g)&&([p,m]=mo(h[0],h[1])),l?f=new Xz(d,g):f=new cg(d,g);const x=g?[m,p]:h,b=this.makeTensorInfo(x,r),w=this.texData.get(b.dataId);g?w.usage=Je.PIXELS:w.usage=Je.UPLOAD,w.texShape=x,this.gpgpu.uploadDenseMatrixToTexture(this.getTexture(b.dataId),p,m,o);const y=[[m,p]],$=this.runWebGLProgram(f,[b],r,y,!0),N=this.texData.get($.dataId);e.texShape=N.texShape,e.isPacked=N.isPacked,e.usage=N.usage,W().get("ENGINE_COMPILE_ONLY")?this.disposeData($.dataId):(e.texture=N.texture,e.values=null,this.texData.delete($.dataId)),this.disposeIntermediateTensorInfo(b),c&&(this.uploadWaitMs+=Fe()-u)}else{const d=this.acquireTexture(h,a,r,l);e.texture=d}}convertAndCacheOnCPU(t,e){const s=this.texData.get(t),{dtype:r}=s;return e!=null&&(s.values=EV(e,r)),s.values}acquireTexture(t,e,s,r){if(this.numBytesInGPU+=this.computeBytes(t,s),!this.warnedAboutMemory&&this.numBytesInGPU>this.numMBBeforeWarning*1024*1024){const o=(this.numBytesInGPU/1024/1024).toFixed(2);this.warnedAboutMemory=!0,console.warn(`High memory usage in GPU: ${o} MB, most likely due to a memory leak`)}return this.textureManager.acquireTexture(t,e,r)}computeBytes(t,e){return t[0]*t[1]*ll(e)}checkCompileCompletion(){for(const[,t]of Object.entries(this.binaryCache))this.checkCompletion_(t)}async checkCompileCompletionAsync(){const t=[];if(this.gpgpu.parallelCompilationExtension){for(const[,e]of Object.entries(this.binaryCache))t.push(this.checkCompletionAsync_(e));return Promise.all(t)}else{for(const[,e]of Object.entries(this.binaryCache)){const s=new Promise(r=>{try{this.checkCompletion_(e),r(!0)}catch(o){throw o}});t.push(s)}return Promise.all(t)}}async checkCompletionAsync_(t){return this.gpgpu.gl.getProgramParameter(t.webGLProgram,this.gpgpu.parallelCompilationExtension.COMPLETION_STATUS_KHR)?this.checkCompletion_(t):(await J0(),this.checkCompletionAsync_(t))}checkCompletion_(t){if(this.gpgpu.gl.getProgramParameter(t.webGLProgram,this.gpgpu.gl.LINK_STATUS)===!1)throw console.log(this.gpgpu.gl.getProgramInfoLog(t.webGLProgram)),this.gpgpu.gl.getShaderParameter(t.fragmentShader,this.gpgpu.gl.COMPILE_STATUS)===!1?(Yw(t.source,this.gpgpu.gl.getShaderInfoLog(t.fragmentShader)),new Error("Failed to compile fragment shader.")):new Error("Failed to link vertex and fragment shaders.");return!0}getUniformLocations(){for(const t of Object.values(this.binaryCache)){this.gpgpu.buildVao(t.webGLProgram);const{variablesLocations:e,customUniformLocations:s,infLoc:r,nanLoc:o,outShapeLocation:i,outShapeStridesLocation:a,outTexShapeLocation:l}=ev(this.gpgpu,t.program,t.webGLProgram);t.variablesLocations=e,t.customUniformLocations=s,t.infLoc=r,t.nanLoc=o,t.outShapeLocation=i,t.outShapeStridesLocation=a,t.outTexShapeLocation=l}}createTensorFromGPUData(t,e,s){t.channels=t.channels||"RGBA";const{texture:r,height:o,width:i,channels:a}=t,l=Dn().backend;if(!l.gpgpu.gl.isTexture(r))throw new Error("The texture is invalid. Also, please make sure the texture and the TFJS WebGL backend are using the same canvas. If you want to use your own custom canvas, you have to create and use the custom TFJS WebGL backend created from the canvas through 'new tf.MathBackendWebGL(customCanvas)'.");const c=l.writeTexture(r,e,s,o,i,a);return Dn().makeTensorFromDataId(c,e,s,l)}}vu.nextDataId=0;function EV(n,t){if(t==="float32"||t==="complex64")return n;if(t==="int32"||t==="bool"){const e=t==="int32"?new Int32Array(n.length):new Uint8Array(n.length);for(let s=0;s<e.length;++s)e[s]=Math.round(n[s]);return e}else throw new Error(`Unknown dtype ${t}`)}Kx()&&Zx("webgl",()=>new vu,2);const Np=`
  if (isnan(a)) return a;
  if (isnan(b)) return b;
`;class xr{constructor(t,e,s){this.variableNames=["A","B"],this.outputShape=mt(e,s),this.enableShapeUniforms=Ne(this.outputShape.length),this.userCode=`
      float binaryOperation(float a, float b) {
        ${t}
      }

      void main() {
        float a = getAAtOutCoords();
        float b = getBAtOutCoords();
        setOutput(binaryOperation(a, b));
      }
    `}}const Tr=`
  result.r = isNaN.r ? NAN : result.r;
  result.g = isNaN.g ? NAN : result.g;
  result.b = isNaN.b ? NAN : result.b;
  result.a = isNaN.a ? NAN : result.a;
`;class wo{constructor(t,e,s,r=!1){this.variableNames=["A","B"],this.supportsBroadcasting=!0,this.packedInputs=!0,this.packedOutput=!0,this.outputShape=mt(e,s);const o=this.outputShape.length;this.enableShapeUniforms=Ne(o);let i="";if(r)if(o===0||q(this.outputShape)===1)i=`
          result.y = 0.;
          result.z = 0.;
          result.w = 0.;
        `;else if(i=`
          ${Ft(o)} coords = getOutputCoords();
        `,o===1)this.enableShapeUniforms?i+=`
            result.y = (coords + 1) >= outShape ? 0. : result.y;
            result.z = 0.;
            result.w = 0.;
          `:i+=`
            result.y = (coords + 1) >= ${this.outputShape[0]} ? 0. : result.y;
            result.z = 0.;
            result.w = 0.;
          `;else{const l=Re("coords",o);this.enableShapeUniforms?i+=`
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
    `}}function je(n){const{inputs:t,backend:e}=n,{x:s}=t;return e.incRef(s.dataId),{dataId:s.dataId,shape:s.shape,dtype:s.dtype}}const RV={kernelName:Si,backendName:"webgl",kernelFunc:je};function Ws(n){const{inputs:t,backend:e}=n,{real:s,imag:r}=t,o=e.makeTensorInfo(s.shape,"complex64"),i=e.texData.get(o.dataId),a=je({inputs:{x:s},backend:e}),l=je({inputs:{x:r},backend:e});return i.complexTensorInfos={real:a,imag:l},o}const AV={kernelName:od,backendName:"webgl",kernelFunc:Ws};const dv="return (a < 0.) ? b * a : a;",fv=`
  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));
  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);
`;function DV(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{alpha:o}=s,i=e.makeTensorInfo([],"float32",_s(o,"float32")),a=W().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new wo(fv,r.shape,i.shape):new xr(dv,r.shape,i.shape),l=e.runWebGLProgram(a,[r,i],"float32");return e.disposeIntermediateTensorInfo(i),l}const _V={kernelName:mc,backendName:"webgl",kernelFunc:DV};const pv="return (a < 0.) ? b * a : a;",mv=`
  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));
  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);
`;function FV(n){const{inputs:t,backend:e}=n,{x:s,alpha:r}=t,o=W().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new wo(mv,s.shape,r.shape):new xr(pv,s.shape,r.shape);return e.runWebGLProgram(o,[s,r],"float32")}const OV={kernelName:Fc,backendName:"webgl",kernelFunc:FV};const vo="if (isnan(x)) return x;";function It({opSnippet:n,packedOpSnippet:t,cpuKernelImpl:e,dtype:s}){return({inputs:r,backend:o})=>{const{x:i}=r,a=o,l=s||i.dtype;if(a.shouldExecuteOnCPU([i])&&e!=null){const h=a.texData.get(i.dataId),d=e(h.values,l);return a.makeTensorInfo(i.shape,l,d)}const c=W().getBool("WEBGL_PACK_UNARY_OPERATIONS")&&t!=null;let u;return c?u=new vs(i.shape,t):u=new Ln(i.shape,n),a.runWebGLProgram(u,[i],l)}}function ve({opSnippet:n,packedOpSnippet:t,checkOutOfBounds:e=!1,supportsComplex:s=!1,cpuKernelImpl:r,dtype:o}){return({inputs:i,backend:a})=>{const{a:l,b:c}=i,u=a;if(s&&l.dtype==="complex64"){const p=u.texData.get(l.dataId),m=u.texData.get(c.dataId),[g,x]=[[p.complexTensorInfos.real,m.complexTensorInfos.real],[p.complexTensorInfos.imag,m.complexTensorInfos.imag]].map(w=>{const[y,v]=w,$={dataId:y.dataId,dtype:y.dtype,shape:l.shape},N={dataId:v.dataId,dtype:v.dtype,shape:c.shape},T=new xr(n,l.shape,c.shape);return u.runWebGLProgram(T,[$,N],He(y.dtype,v.dtype))}),b=Ws({inputs:{real:g,imag:x},backend:u});return u.disposeIntermediateTensorInfo(g),u.disposeIntermediateTensorInfo(x),b}const h=o||He(l.dtype,c.dtype);if((l.dtype==="string"||c.dtype==="string"||u.shouldExecuteOnCPU([l,c]))&&r!=null){const p=u.texData.get(l.dataId).values,m=u.texData.get(c.dataId).values,g=l.dtype==="string"?ls(p):p,x=l.dtype==="string"?ls(m):m,[b,w]=r(l.shape,c.shape,g,x,h),y=u.makeTensorInfo(w,h),v=u.texData.get(y.dataId);return v.values=b,y}const d=W().getBool("WEBGL_PACK_BINARY_OPERATIONS")&&t!=null;let f;return d?f=new wo(t,l.shape,c.shape,e):f=new xr(n,l.shape,c.shape),u.runWebGLProgram(f,[l,c],h)}}function Qo(n,t=!1){if(n==="linear")return t?gV:hV;if(n==="relu")return t?bV:fV;if(n==="elu")return t?xV:dV;if(n==="relu6")return t?yV:pV;if(n==="prelu")return t?mv:pv;if(n==="leakyrelu")return t?fv:dv;if(n==="sigmoid")return t?wV:mV;throw new Error(`Activation ${n} has not been implemented for the WebGL backend.`)}class gv{constructor(t,e,s,r=!1,o=!1,i=!1,a=null,l=!1,c=!1){this.variableNames=["matrixA","matrixB"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=s,this.enableShapeUniforms=Ne(this.outputShape.length);const u=r?t[1]:t[2],h=Math.ceil(u/2),d=r?"i * 2, rc.y":"rc.y, i * 2",f=o?"rc.z, i * 2":"i * 2, rc.z",p=r?["a.xxyy","a.zzww"]:["a.xxzz","a.yyww"],m=o?["b.xzxz","b.ywyw"]:["b.xyxy","b.zwzw"];let g="",x="";a&&(l?g=`vec4 activation(vec4 a) {
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
    `}}const pg={REAL:"return areal * breal - aimag * bimag;",IMAG:"return areal * bimag + aimag * breal;"};class mg{constructor(t,e,s){this.variableNames=["AReal","AImag","BReal","BImag"],this.outputShape=mt(e,s),this.userCode=`
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
    `}}const gg="return a * b;";function Tp(n){const{inputs:t,backend:e}=n,{a:s,b:r}=t,o=He(s.dtype,r.dtype);if(s.dtype==="complex64"){const a=e.texData.get(s.dataId),l=e.texData.get(r.dataId),c=new mg(pg.REAL,s.shape,r.shape),u=new mg(pg.IMAG,s.shape,r.shape),h=[{dataId:a.complexTensorInfos.real.dataId,dtype:a.complexTensorInfos.real.dtype,shape:s.shape},{dataId:a.complexTensorInfos.imag.dataId,dtype:a.complexTensorInfos.imag.dtype,shape:s.shape},{dataId:l.complexTensorInfos.real.dataId,dtype:l.complexTensorInfos.real.dtype,shape:r.shape},{dataId:l.complexTensorInfos.imag.dataId,dtype:l.complexTensorInfos.imag.dtype,shape:r.shape}],d=e.runWebGLProgram(c,h,"float32"),f=e.runWebGLProgram(u,h,"float32"),p=Ws({inputs:{real:d,imag:f},backend:e});return e.disposeIntermediateTensorInfo(d),e.disposeIntermediateTensorInfo(f),p}if(e.shouldExecuteOnCPU([s,r])){const a=e.texData.get(s.dataId),l=e.texData.get(r.dataId),[c,u]=FB(s.shape,r.shape,a.values,l.values,o),h=e.makeTensorInfo(u,o),d=e.texData.get(h.dataId);return d.values=c,h}let i;return W().getBool("WEBGL_PACK_BINARY_OPERATIONS")?i=new wo(gg,s.shape,r.shape):i=new xr(gg,s.shape,r.shape),e.runWebGLProgram(i,[s,r],o)}const MV={kernelName:Oi,backendName:"webgl",kernelFunc:Tp};function LV(n,t,e){const s=[to(n.shape),...eo(n.shape)],r={dtype:n.dtype,shape:s,dataId:n.dataId},o=[to(t),...eo(t)],i=new hv(o,s),a=!0,l=[s],c=e.runWebGLProgram(i,[r],n.dtype,l,a);return{dataId:c.dataId,shape:t,dtype:c.dtype}}function et(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{shape:o}=s,i=e,a=q(r.shape),l=ax(o,a),c=q(l);S(a===c,()=>`The new shape (${l}) has ${c} elements and the old shape (${r.shape}) has ${a} elements. The new shape and old shape must have the same number of elements.`);const u=i.texData.get(r.dataId);return u.isPacked&&!Fl(r.shape,l)&&!(u.texture!==null&&Fl(u.shape,l))?LV(r,l,i):(i.incRef(r.dataId),{dataId:r.dataId,shape:l,dtype:r.dtype})}const PV={kernelName:Mc,backendName:"webgl",kernelFunc:et};class xg{constructor(t,e){this.variableNames=["x"];const{windowSize:s,batchSize:r,inSize:o,outSize:i}=t;this.outputShape=[r,i];const a=Math.floor(s/4)*4,l=s%4;let c="sumValue += dot(values, ones);";if(e!=null){const h=1/e;c=`sumValue += dot(values * ${Hr(h)?h.toPrecision(2):h}, ones);`}let u="";o%s>0&&(u=`
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
    `}}class zV{constructor(t,e){this.variableNames=["x"];const{windowSize:s,batchSize:r,inSize:o,outSize:i}=t;this.outputShape=[r,i];let a="0.0",l="";e==="prod"?a="1.0":e==="min"?(a="1.0 / 1e-20",l="min"):e==="max"&&(a="-1.0 / 1e-20",l="max");let c=`${e}(${e}(${e}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;e==="sum"?c="sumValue":e==="prod"?c="prodValue":e==="all"?c="allValue":e==="any"&&(c="anyValue");const u=Math.floor(s/4)*4,h=s%4;let d=`
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
    `}}function BV(n){const t=[];for(;t.length===0||t[t.length-1].outSize!==1;){const e=t.length?t[t.length-1].outSize:n[1],s=ou(e);t.push({inSize:e,windowSize:s,outSize:Math.ceil(e/s)})}return t}function Er(n,t,e,s){const r=BV(n.shape);let o=n;for(let i=0;i<r.length;i++){const{inSize:a,windowSize:l,outSize:c}=r[i];let u,h;e==="mean"?u=i===0?new xg({windowSize:l,inSize:a,batchSize:n.shape[0],outSize:c},a):new xg({windowSize:l,inSize:a,batchSize:n.shape[0],outSize:c}):u=new zV({windowSize:l,inSize:a,batchSize:n.shape[0],outSize:c},e),h=o,o=s.runWebGLProgram(u,[o],t),h.dataId!==n.dataId&&s.disposeIntermediateTensorInfo(h)}return o}class VV{constructor(t,e){this.variableNames=["A"];const s=new Array(t.length);for(let i=0;i<s.length;i++)s[i]=t[e[i]];this.outputShape=s,this.rank=s.length;const r=Ft(this.rank),o=WV(e);this.userCode=`
    void main() {
      ${r} resRC = getOutputCoords();
      setOutput(getA(${o}));
    }
    `}}function WV(n){const t=n.length;if(t>6)throw Error(`Transpose for rank ${t} is not yet supported`);const e=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u","resRC.v"],s=new Array(t);for(let r=0;r<n.length;r++)s[n[r]]=e[r];return s.join()}class UV{constructor(t,e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0;const s=new Array(t.length);for(let u=0;u<s.length;u++)s[u]=t[e[u]];if(this.outputShape=s,this.rank=s.length,this.rank>6)throw Error(`Packed transpose for rank ${this.rank} is not yet supported.`);const r=Ft(this.rank),o=uv("rc",this.rank),i=new Array(this.rank);for(let u=0;u<e.length;u++)i[e[u]]=o[u];const a=`vec2(${i.slice(-2).join()})`,l=`++${o[this.rank-1]} < ${s[this.rank-1]}`,c=`getChannel(getA(${i.join()}), ${a})`;this.userCode=`
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
    `}}function Cu(n,t,e){const s=W().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new UV(n.shape,t):new VV(n.shape,t);return e.runWebGLProgram(s,[n],n.dtype)}function GV(n,t,e,s){const r=t,o=n.shape.length,i=vt(r,n.shape);let a=i;const l=jt(a,o),c=l!=null;let u=n;c&&(u=Cu(n,l,s),a=Jt(a.length,o)),we("sum",a,o);const[h,d]=me(u.shape,a);let f=h;e&&(f=ne(h,i));const p=q(d),g=q(n.shape)/p,x=et({inputs:{x:u},attrs:{shape:[g,p]},backend:s}),b=zd(n.dtype),w=Er(x,b,"sum",s),y=et({inputs:{x:w},attrs:{shape:f},backend:s});return s.disposeIntermediateTensorInfo(x),s.disposeIntermediateTensorInfo(w),c&&s.disposeIntermediateTensorInfo(u),y}function $u(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{axis:o,keepDims:i}=s;return GV(r,o,i,e)}const HV={kernelName:Wc,backendName:"webgl",kernelFunc:$u};function De(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{perm:o}=s,i=e,a=r.shape.length,l=new Array(a);for(let u=0;u<l.length;u++)l[u]=r.shape[o[u]];let c;if(i.shouldExecuteOnCPU([r])){const h=i.texData.get(r.dataId).values,d=Sp(h,r.shape,r.dtype,o,l);c=i.makeTensorInfo(l,r.dtype);const f=i.texData.get(c.dataId);f.values=d}else c=Cu(r,o,i);return c}const qV={kernelName:zr,backendName:"webgl",kernelFunc:De};const xv=1e3;function Ol({a:n,b:t,transposeA:e,transposeB:s,backend:r,bias:o=null,preluActivationWeights:i=null,leakyreluAlpha:a=0,activation:l=null}){const c=n.shape.length,u=t.shape.length,h=e?n.shape[c-2]:n.shape[c-1],d=s?t.shape[u-1]:t.shape[u-2],f=e?n.shape[c-1]:n.shape[c-2],p=s?t.shape[u-2]:t.shape[u-1],m=n.shape.slice(0,-2),g=t.shape.slice(0,-2),x=q(m),b=q(g),y=mt(n.shape.slice(0,-2),t.shape.slice(0,-2)).concat([f,p]);S(h===d,()=>`Error in matMul: inner shapes (${h}) and (${d}) of Tensors with shapes ${n.shape} and ${t.shape} and transposeA=${e} and transposeB=${s} must match.`);const v=e?[x,h,f]:[x,f,h],$=s?[b,p,d]:[b,d,p],N=et({inputs:{x:n},backend:r,attrs:{shape:v}}),T=et({inputs:{x:t},backend:r,attrs:{shape:$}}),k=[N,T],I=Math.max(x,b),C=e?N.shape[1]:N.shape[2],R=o!=null,A=i!=null,O=l==="leakyrelu",M=l!=null?Qo(l,!0):null,z=R||A||O||M!=null;let U;if((f===1||p===1)&&C>xv&&z===!1){let G=N,j=T;e&&(G=De({inputs:{x:N},backend:r,attrs:{perm:[0,2,1]}}),k.push(G)),s&&(j=De({inputs:{x:T},backend:r,attrs:{perm:[0,2,1]}}),k.push(j));const K=p!==1,Y=p===1;let Z=G;K&&(Z=et({inputs:{x:G},backend:r,attrs:{shape:[I,C,1]}}),k.push(Z));const tt=p===1?2:1;let Q=j;Y&&(Q=et({inputs:{x:j},backend:r,attrs:{shape:[I,1,C]}}),k.push(Q));const rt=Tp({inputs:{a:Z,b:Q},backend:r});U=$u({inputs:{x:rt},backend:r,attrs:{axis:tt,keepDims:!0}}),k.push(rt)}else{const G=He(n.dtype,t.dtype),j=new gv(v,$,[I,f,p],e,s,R,M,A,O),K=[N,T];if(o!=null&&K.push(o),A&&K.push(i),O){const Y=r.makeTensorInfo([],"float32",_s(a,"float32"));K.push(Y),k.push(Y)}U=r.runWebGLProgram(j,K,G)}const B=et({inputs:{x:U},backend:r,attrs:{shape:y}});k.push(U);for(const G of k)r.disposeIntermediateTensorInfo(G);return B}function jV(n){const{inputs:t,backend:e,attrs:s}=n,{a:r,b:o,bias:i,preluActivationWeights:a}=t,{transposeA:l,transposeB:c,activation:u,leakyreluAlpha:h}=s;return Ol({a:r,b:o,transposeA:l,transposeB:c,backend:e,bias:i,preluActivationWeights:a,leakyreluAlpha:h,activation:u})}const KV={kernelName:cl,backendName:"webgl",kernelFunc:jV};const bg="return abs(x);";function XV(n){const{inputs:t,backend:e}=n,{x:s}=t;if(e.shouldExecuteOnCPU([s])&&s.dtype!=="complex64"){const o=e.texData.get(s.dataId),i=lv(o.values);return e.makeTensorInfo(s.shape,s.dtype,i)}let r;return W().getBool("WEBGL_PACK_UNARY_OPERATIONS")?r=new vs(s.shape,bg):r=new Ln(s.shape,bg),e.runWebGLProgram(r,[s],s.dtype)}const YV={kernelName:Xl,backendName:"webgl",kernelFunc:XV};const ZV=pn+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return acos(x);
`,JV=It({opSnippet:ZV}),QV={kernelName:ii,backendName:"webgl",kernelFunc:JV};const t4=pn+`
  if (x < 1.0) return NAN;
return log(x + sqrt(x * x - 1.0));`,e4=It({opSnippet:t4}),n4={kernelName:ai,backendName:"webgl",kernelFunc:e4};const yg="return a + b;",s4=ve({opSnippet:yg,packedOpSnippet:yg,supportsComplex:!0,cpuKernelImpl:fB}),r4={kernelName:lo,backendName:"webgl",kernelFunc:s4};class o4{constructor(t,e){this.outputShape=[],this.outputShape=t,this.variableNames=e.map((o,i)=>`T${i}`);const s=[];this.variableNames.forEach(o=>{s.push(`float v${o} = get${o}AtOutCoords();`)});const r=this.variableNames.map(o=>`v${o}`).join(" + ");this.userCode=`
      void main() {
        ${s.join(`
        `)}

        float result = ${r};
        setOutput(result);
      }
    `}}class i4{constructor(t,e){this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t,this.variableNames=e.map((o,i)=>`T${i}`);const s=[];this.variableNames.forEach(o=>{s.push(`vec4 v${o} = get${o}AtOutCoords();`)});const r=this.variableNames.map(o=>`v${o}`).join(" + ");this.userCode=`
      void main() {
        ${s.join(`
        `)}

        vec4 result = ${r};
        setOutput(result);
      }
    `}}function sl(n){const{inputs:t,backend:e}=n,s=t;if(s.length===1)return je({inputs:{x:s[0]},backend:e});if(s.length>W().getNumber("WEBGL_MAX_TEXTURES_IN_SHADER")){const l=Math.floor(s.length/2),c=sl({inputs:s.slice(0,l),backend:e}),u=sl({inputs:s.slice(l),backend:e});return sl({inputs:[c,u],backend:e})}const r=s.map(l=>l.dtype).reduce((l,c)=>He(l,c)),o=s.map(l=>l.shape),a=W().getBool("WEBGL_PACK")?new i4(s[0].shape,o):new o4(s[0].shape,o);return e.runWebGLProgram(a,s,r)}const a4={kernelName:Jh,backendName:"webgl",kernelFunc:sl};function l4(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{axis:o,keepDims:i}=s,a=r.shape.length,l=vt(o,r.shape);let c=l;const u=jt(c,a);let h=r;u!=null&&(h=De({inputs:{x:r},backend:e,attrs:{perm:u}}),c=Jt(c.length,a)),we("all",c,a);const[d,f]=me(h.shape,c),p=q(f),m=et({inputs:{x:h},backend:e,attrs:{shape:[-1,p]}}),g=Er(m,m.dtype,"all",e);let x;if(i){const b=ne(d,l);x=et({inputs:{x:g},backend:e,attrs:{shape:b}})}else x=et({inputs:{x:g},backend:e,attrs:{shape:d}});return e.disposeIntermediateTensorInfo(m),e.disposeIntermediateTensorInfo(g),u!=null&&e.disposeIntermediateTensorInfo(h),x}const c4={kernelName:Qh,backendName:"webgl",kernelFunc:l4};function u4(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{axis:o,keepDims:i}=s,a=r.shape.length,l=vt(o,r.shape);let c=l;const u=jt(c,a);let h=r;u!=null&&(h=De({inputs:{x:r},backend:e,attrs:{perm:u}}),c=Jt(c.length,a)),we("any",c,a);const[d,f]=me(h.shape,c),p=q(f),m=et({inputs:{x:h},backend:e,attrs:{shape:[-1,p]}}),g=Er(m,m.dtype,"any",e);let x;if(i){const b=ne(d,l);x=et({inputs:{x:g},backend:e,attrs:{shape:b}})}else x=et({inputs:{x:g},backend:e,attrs:{shape:d}});return e.disposeIntermediateTensorInfo(m),e.disposeIntermediateTensorInfo(g),u!=null&&e.disposeIntermediateTensorInfo(h),x}const h4={kernelName:td,backendName:"webgl",kernelFunc:u4};class d4{constructor(t,e,s){this.variableNames=["A"];const{windowSize:r,batchSize:o,outSize:i}=t;s||this.variableNames.push("bestIndicesA"),this.outputShape=[o,i];const a=e==="max"?">":"<",l=s?"inOffset + i;":"round(getBestIndicesA(batch, inOffset + i));";this.userCode=`
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
    `}}class f4{constructor(t,e,s,r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,S(t.length>2,()=>`Packed arg${s.charAt(0).toUpperCase()+s.slice(1)} supports only inputs with rank above 2.`);const o=t[t.length-1],i=Math.ceil(o/e);this.outputShape=t.slice(0,-1),i>1&&this.outputShape.push(i),r||this.variableNames.push("bestIndicesA");const a=this.outputShape,l=a.length,c=Ft(l),u=Re("coords",l);let h,d;if(i===1){d=l+1;const T=Ft(d);h=`
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
        --${u[l-2]};`;const f=["x","y","z","w","u","v"].slice(0,d),p="."+f[d-1],m=f.map(T=>"int "+T),g=Re("sourceLocR",d-1).concat("inIdx.r"),x=Re("sourceLocG",d-1).concat("inIdx.g"),b=Re("sourceLocB",d-1).concat("inIdx.b"),w=Re("sourceLocA",d-1).concat("inIdx.a"),y=s==="max"?"greaterThan":"lessThan",v=r?"":`
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
    `}}function bv(n,t,e,s=null){let r=t.shape[0],o=t.shape[1];s!=null&&(r=s.shape[0],o=s.shape[1]);const i=ou(o),a={windowSize:i,inSize:o,batchSize:r,outSize:Math.ceil(o/i)},l=new d4(a,e,s==null),c=[t];s!=null&&c.push(s);const u=n.runWebGLProgram(l,c,"int32");if(u.shape[1]===1)return u;const h=bv(n,t,e,u);return n.disposeIntermediateTensorInfo(u),h}function yv(n,t,e,s=null){const r=s!=null?s.shape:t.shape,o=r[r.length-1],i=ou(o),a=new f4(r,i,e,s==null),l=s==null?[t]:[t,s],c=n.runWebGLProgram(a,l,"int32");if(c.shape.length===t.shape.length){const u=yv(n,t,e,c);return n.disposeIntermediateTensorInfo(c),u}return c}function wv(n,t,e,s){const r=[e];if(we("arg"+s.charAt(0).toUpperCase()+s.slice(1),r,t.shape.length),!W().getBool("WEBGL_PACK_REDUCE")||t.shape.length<=2){const o=[],i=n.texData.get(t.dataId),a=i!==null&&i.isPacked;let l=t;a&&(l=n.unpackTensor(t),o.push(l));const[c,u]=me(l.shape,r),h=q(u),d=et({inputs:{x:l},backend:n,attrs:{shape:[-1,h]}});o.push(d);const f=bv(n,d,s);o.push(f);const p=et({inputs:{x:f},backend:n,attrs:{shape:c}});return o.forEach(m=>n.disposeIntermediateTensorInfo(m)),p}return yv(n,t,s)}function p4(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{axis:o}=s;let i=vt(o,r.shape);const a=jt(i,r.shape.length);let l=r;const c=[];a!=null&&(l=De({inputs:{x:r},backend:e,attrs:{perm:a}}),c.push(l),i=Jt(i.length,l.shape.length)),we("argMax",[i[0]],l.shape.length);const u=wv(e,l,i[0],"max");return c.forEach(h=>e.disposeIntermediateTensorInfo(h)),u}const m4={kernelName:Yl,backendName:"webgl",kernelFunc:p4};function g4(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{axis:o}=s;let i=vt(o,r.shape);const a=jt(i,r.shape.length);let l=r;const c=[];a!=null&&(l=De({inputs:{x:r},backend:e,attrs:{perm:a}}),c.push(l),i=Jt(i.length,l.shape.length)),we("argMin",[i[0]],l.shape.length);const u=wv(e,l,i[0],"min");return c.forEach(h=>e.disposeIntermediateTensorInfo(h)),u}const x4={kernelName:Zl,backendName:"webgl",kernelFunc:g4};const b4=pn+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return asin(x);
`,y4=It({opSnippet:b4}),w4={kernelName:li,backendName:"webgl",kernelFunc:y4};const v4=pn+"return log(x + sqrt(x * x + 1.0));",C4=It({opSnippet:v4}),$4={kernelName:ci,backendName:"webgl",kernelFunc:C4};const k4=pn+`
  return atan(x);
`,I4=It({opSnippet:k4}),S4={kernelName:ui,backendName:"webgl",kernelFunc:I4};const N4=Np+`
  return atan(a, b);
`,T4=`
  vec4 result = atan(a, b);
  bvec4 isNaNA = isnan(a);
  bvec4 isNaNB = isnan(b);
  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);
  `+Tr+`
  return result;
`,E4=ve({opSnippet:N4,packedOpSnippet:T4}),R4={kernelName:di,backendName:"webgl",kernelFunc:E4};const A4=pn+`
  if ((x < -1.0) || (x > 1.0)) return NAN;
return (log(1.0 + x) - log(1.0 - x)) / 2.0;`,D4=It({opSnippet:A4}),_4={kernelName:hi,backendName:"webgl",kernelFunc:D4};class ti{constructor(t,e,s,r=!1,o=!1){if(this.variableNames=["x"],e==="avg"&&s)throw new Error("Cannot compute positions for average pool.");const i=t.filterWidth,a=t.strideHeight,l=t.strideWidth,c=t.dilationHeight,u=t.dilationWidth,h=t.effectiveFilterHeight,d=t.effectiveFilterWidth,f=t.padInfo.top,p=t.padInfo.left;this.outputShape=t.outShape;const m=e==="avg",g=`((batch  * ${t.inHeight} + xR) * ${t.inWidth} + xC) * ${t.inChannels} + d`,x=`(xR * ${t.inWidth} + xC) * ${t.inChannels} + d`;let b="0.0";if(m||(b="-1.0 / 1e-20"),s){this.userCode=`
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
    `}}class Ep{constructor(t,e,s,r=!1,o=!1){if(this.variableNames=["x"],e==="avg"&&s)throw new Error("Cannot compute positions for average pool.");const i=t.filterWidth,a=t.strideDepth,l=t.strideHeight,c=t.strideWidth,u=t.dilationDepth,h=t.dilationHeight,d=t.dilationWidth,f=t.effectiveFilterDepth,p=t.effectiveFilterHeight,m=t.effectiveFilterWidth,g=t.padInfo.front,x=t.padInfo.top,b=t.padInfo.left;this.outputShape=t.outShape;const w=e==="avg";let y="0.0";if(w||(y="-1.0 / 1e-20"),s){this.userCode=`
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
      `;return}const v="max";let $=`${e}(${e}(${e}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;e==="avg"&&($="avgValue / max(count, 1.0)");const N=Math.floor(i/4)*4,T=i%4,k=`
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
        setOutput(${$});
      }
    `}}function F4(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t;ya(r,"avgPool");const{filterSize:o,strides:i,pad:a,dimRoundingMode:l}=s,c=1;S(Ie(i,c),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${i} and dilations '${c}'`);const u=dn(r.shape,o,i,c,a,l);if(u.filterWidth===1&&u.filterHeight===1&&Et(u.inShape,u.outShape))return je({inputs:{x:r},backend:e});const h=new ti(u,"avg",!1);return e.runWebGLProgram(h,[r],"float32")}const O4={kernelName:Jl,backendName:"webgl",kernelFunc:F4};function M4(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{filterSize:o,strides:i,pad:a,dimRoundingMode:l,dataFormat:c}=s,u=[1,1,1],h=hs(r.shape,o,i,u,a,l,c),d=new Ep(h,"avg",!1);return e.runWebGLProgram(d,[r],"float32")}const L4={kernelName:Ql,backendName:"webgl",kernelFunc:M4};class P4{constructor(t){this.variableNames=["dy"],this.outputShape=t.inShape;const e=t.filterHeight,s=t.filterWidth,r=t.strideHeight,o=t.strideWidth,i=t.dilationHeight,a=t.dilationWidth,l=t.effectiveFilterHeight,c=t.effectiveFilterWidth,u=l-1-t.padInfo.top,h=c-1-t.padInfo.left,d=1/(e*s);this.userCode=`
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
    `}}class z4{constructor(t){this.variableNames=["dy"],this.outputShape=t.inShape;const e=t.filterDepth,s=t.filterHeight,r=t.filterWidth,o=t.strideDepth,i=t.strideHeight,a=t.strideWidth,l=t.dilationDepth,c=t.dilationHeight,u=t.dilationWidth,h=t.effectiveFilterDepth,d=t.effectiveFilterHeight,f=t.effectiveFilterWidth,p=h-1-t.padInfo.front,m=d-1-t.padInfo.top,g=f-1-t.padInfo.left,x=1/(e*s*r);this.userCode=`
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
    `}}function B4(n){const{inputs:t,backend:e,attrs:s}=n,{dy:r,input:o}=t,i=o,{filterSize:a,strides:l,pad:c,dimRoundingMode:u}=s,h=[1,1,1],d=hs(i.shape,a,l,h,c,u),f=new z4(d);return e.runWebGLProgram(f,[r],i.dtype)}const V4={kernelName:nd,backendName:"webgl",kernelFunc:B4};function W4(n){const{inputs:t,backend:e,attrs:s}=n,{dy:r,input:o}=t,i=o;ya([r,o],"avgPoolGrad");const{filterSize:a,strides:l,pad:c}=s,u=dn(i.shape,a,l,1,c),h=new P4(u);return e.runWebGLProgram(h,[r],i.dtype)}const U4={kernelName:ed,backendName:"webgl",kernelFunc:W4};function G4(n){const{inputs:t,backend:e,attrs:s}=n,{a:r,b:o}=t,{transposeA:i,transposeB:a}=s;return Ol({a:r,b:o,transposeA:i,transposeB:a,backend:e})}const H4={kernelName:tc,backendName:"webgl",kernelFunc:G4};class q4{constructor(t,e,s,r,o,i){this.outputShape=[],this.variableNames=["x","mean","variance"],mt(t,e),mt(t,s);let a="0.0";r!=null&&(mt(t,r),this.variableNames.push("offset"),a="getOffsetAtOutCoords()");let l="1.0";o!=null&&(mt(t,o),this.variableNames.push("scale"),l="getScaleAtOutCoords()"),this.outputShape=t,this.userCode=`
      void main() {
        float x = getXAtOutCoords();
        float mean = getMeanAtOutCoords();
        float variance = getVarianceAtOutCoords();
        float offset = ${a};
        float scale = ${l};
        float inv = scale * inversesqrt(variance + float(${i}));
        setOutput(dot(vec3(x, -mean, offset), vec3(inv, inv, 1)));
      }
    `}}class j4{constructor(t,e,s,r,o,i){this.packedInputs=!0,this.packedOutput=!0,this.variableNames=["x","mean","variance"],mt(t,e),mt(t,s);let a="vec4(0.0)";r!=null&&(mt(t,r),this.variableNames.push("offset"),a="getOffsetAtOutCoords()");let l="vec4(1.0)";o!=null&&(mt(t,o),this.variableNames.push("scale"),l="getScaleAtOutCoords()"),this.outputShape=t,this.userCode=`
      void main() {
        vec4 offset = ${a};
        vec4 scale = ${l};

        vec4 x = getXAtOutCoords();
        vec4 mean = getMeanAtOutCoords();
        vec4 variance = getVarianceAtOutCoords();

        vec4 inv = scale * inversesqrt(variance + vec4(${i}));

        setOutput((x - mean) * inv + offset);
      }
    `}}const K4=({inputs:n,backend:t,attrs:e})=>{const{x:s,mean:r,variance:o,offset:i,scale:a}=n;S(r.shape.length===o.shape.length,()=>"Batch normalization gradient requires mean and variance to have equal ranks."),S(i==null||r.shape.length===i.shape.length,()=>"Batch normalization gradient requires mean and offset to have equal ranks."),S(a==null||r.shape.length===a.shape.length,()=>"Batch normalization gradient requires mean and scale to have equal ranks.");let{varianceEpsilon:l}=e;l==null&&(l=.001);const c=[s,r,o];let u=null;i!=null&&(u=i.shape,c.push(i));let h=null;a!=null&&(h=a.shape,c.push(a));const d=W().getBool("WEBGL_PACK_NORMALIZATION")?new j4(s.shape,r.shape,o.shape,u,h,l):new q4(s.shape,r.shape,o.shape,u,h,l);return t.runWebGLProgram(d,c,c[0].dtype)},X4={kernelName:dc,backendName:"webgl",kernelFunc:K4};class Y4{constructor(t){this.variableNames=["source"],this.outputShape=t,this.rank=t.length;const e=Ft(this.rank);this.customUniforms=[{name:"start",arrayIndex:this.rank,type:"int"}];const s=Z4(this.rank);let r;const o=t.map((i,a)=>`sourceLoc.${Oh[a]} = start[${a}] + coords.${Oh[a]};`);r=`
        ${e} sourceLoc;
        ${e} coords = getOutputCoords();
        ${o.join(`
`)}
      `,this.userCode=`
      void main() {
        ${r}
        setOutput(getSource(${s}));
      }
    `}}const Oh=["x","y","z","w","u","v"];function Z4(n){if(n===1)return"sourceLoc";if(n<=6)return Oh.slice(0,n).map(t=>"sourceLoc."+t).join(",");throw Error(`Slicing for rank ${n} is not yet supported`)}class J4{constructor(t){this.variableNames=["source"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t,this.rank=t.length,this.customUniforms=[{name:"start",arrayIndex:this.rank,type:"int"}];const e=Ft(this.rank),s=Re("coords",this.rank),r=Re("sourceLoc",this.rank),o=this.rank===1?"sourceLoc":`vec2(${r.slice(-2).join()})`,i=`getChannel(getSource(${r.join()}), ${o})`,a=`
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
    `}}function Q4(n,t,e,s){const r=s.texData.get(n.dataId),o=s.makeTensorInfo(e,n.dtype),i=s.texData.get(o.dataId);Object.assign(i,r),i.refCount=1,i.shape=e,i.dtype=n.dtype;let a=kf(t,lt(n.shape));r.slice&&(a+=r.slice.flatOffset),i.slice={flatOffset:a,origDataId:r.slice&&r.slice.origDataId||n.dataId};const l=s.dataRefCount.get(i.slice.origDataId)||1;return s.dataRefCount.set(i.slice.origDataId,l+1),o}function Co(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{begin:o,size:i}=s,[a,l]=ru(r,o,i);if(vf(r,a,l),q(l)===0)return e.makeTensorInfo(l,r.dtype,[]);if(e.shouldExecuteOnCPU([r])||r.dtype==="string"){const h=e.texData.get(r.dataId),d=HB(h.values,a,l,r.shape,r.dtype);return e.makeTensorInfo(l,r.dtype,d)}const{isPacked:c}=e.texData.get(r.dataId),u=$f(r.shape,a,l);if(c||!u){const h=W().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new J4(l):new Y4(l),d=[a];return e.runWebGLProgram(h,[r],r.dtype,d)}return e.uploadToGPU(r.dataId),Q4(r,a,l,e)}const tW={kernelName:Vc,backendName:"webgl",kernelFunc:Co};const eW=n=>{const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{blockShape:o,crops:i}=s;S(r.shape.length<=4,()=>"batchToSpaceND for rank > 4 with a WebGL backend not implemented yet");const a=o.reduce((b,w)=>b*w),l=ia(r.shape,o,a),c=aa(l.length,o.length),u=la(r.shape,o,a),h=Ef(i,o.length),d=Rf(u,i,o.length),f=[],p=et({inputs:{x:r},backend:e,attrs:{shape:l}}),m=De({inputs:{x:p},backend:e,attrs:{perm:c}}),g=et({inputs:{x:m},backend:e,attrs:{shape:u}}),x=Co({inputs:{x:g},backend:e,attrs:{begin:h,size:d}});return f.push(p),f.push(m),f.push(g),f.forEach(b=>e.disposeIntermediateTensorInfo(b)),x},nW={kernelName:ec,backendName:"webgl",kernelFunc:eW};function sW(n){const{inputs:t,backend:e,attrs:s}=n,{x:r,weights:o}=t,{size:i}=s,a=e.readSync(r.dataId),l=e.readSync(o.dataId),c=av(a,l,o.dtype,o.shape,i);return e.makeTensorInfo([i],o.dtype,c)}const rW={kernelName:sd,backendName:"webgl",kernelFunc:sW};const oW=`
  int r = int(a.r) & int(b.r);
  int g = int(a.g) & int(b.g);
  int rb = int(a.b) & int(b.b);
  int ra = int(a.a) & int(b.a);
  return vec4(r, g, rb, ra);
`,iW=`
  return float(int(a.r) & int(b.r));
`;function aW(n){const{inputs:t,backend:e}=n,{a:s,b:r}=t,o=W().getBool("WEBGL_PACK_BINARY_OPERATIONS"),i=W().getNumber("WEBGL_VERSION");if(e.shouldExecuteOnCPU([s,r])||i===1){const l=e.texData.get(s.dataId).values,c=e.texData.get(r.dataId).values,[u,h]=mB(s.shape,r.shape,l,c,s.dtype),d=e.makeTensorInfo(h,s.dtype),f=e.texData.get(d.dataId);return f.values=u,d}let a;return o?a=new wo(oW,s.shape,r.shape,!1):a=new xr(iW,s.shape,r.shape),e.runWebGLProgram(a,[s,r],s.dtype)}const lW={kernelName:rd,backendName:"webgl",kernelFunc:aW};function cW(n){const{inputs:t,backend:e}=n,{s0:s,s1:r}=t,o=e.readSync(s.dataId),i=e.readSync(r.dataId),a=mt(Array.from(o),Array.from(i));return e.makeTensorInfo([a.length],"int32",Int32Array.from(a))}const uW={kernelName:fx,backendName:"webgl",kernelFunc:cW};const hW="return float(a != b);",vv=ve({opSnippet:hW,cpuKernelImpl:MB,dtype:"bool"}),dW={kernelName:Ec,backendName:"webgl",kernelFunc:vv};function va(n){const{inputs:t,backend:e}=n,{input:s}=t,r=e.texData.get(s.dataId);return je({inputs:{x:r.complexTensorInfos.real},backend:e})}const fW={kernelName:Ed,backendName:"webgl",kernelFunc:va};const pW="return float(int(x));";function mW(n,t){const e=new Ln(n.shape,pW),s=t.runWebGLProgram(e,[n],"int32");return{dataId:s.dataId,shape:s.shape,dtype:s.dtype}}function Mh(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{dtype:o}=s;if(o==="complex64"){if(r.dtype==="complex64")return je({inputs:{x:r},backend:e});const i=fe(r.shape),a=Mh({inputs:{x:r},backend:e,attrs:{dtype:"float32"}}),l=Ws({inputs:{real:a,imag:i},backend:e});return i.dispose(),e.disposeIntermediateTensorInfo(a),l}if(r.dtype==="complex64"){const i=va({inputs:{input:r},backend:e}),a=Mh({inputs:{x:i},backend:e,attrs:{dtype:o}});return e.disposeIntermediateTensorInfo(i),a}if(!lx(r.dtype,o)){const i=je({inputs:{x:r},backend:e});return{dataId:i.dataId,shape:i.shape,dtype:o}}if(e.shouldExecuteOnCPU([r])){const i=e.texData.get(r.dataId).values,[a,l,c]=gB(i,r.shape,r.dtype,o);return e.makeTensorInfo(a,l,c)}if(o==="int32")return mW(r,e);if(o==="bool"){const i=e.makeTensorInfo([],"bool",Ce("bool",1)),l=vv({inputs:{a:r,b:i},backend:e});return e.disposeIntermediateTensorInfo(i),l}throw new Error(`Error in Cast: failed to cast ${r.dtype} to ${o}`)}const gW={kernelName:fi,backendName:"webgl",kernelFunc:Mh};const wg="return ceil(x);",xW=It({opSnippet:wg,packedOpSnippet:wg,cpuKernelImpl:xB}),bW={kernelName:pi,backendName:"webgl",kernelFunc:xW};class yW{constructor(t){this.variableNames=["A"],this.customUniforms=[{name:"minVal",type:"float"},{name:"maxVal",type:"float"}],this.outputShape=t,this.userCode=`

      void main() {
        float value = getAAtOutCoords();
        if (isnan(value)) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, minVal, maxVal));
      }
    `}}class wW{constructor(t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"minVal",type:"float"},{name:"maxVal",type:"float"}],this.outputShape=t,this.userCode=`
      void main() {
        vec4 value = getAAtOutCoords();

        if (any(isnan(value))) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, vec4(minVal), vec4(maxVal)));
      }
    `}}function vW(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{clipValueMin:o,clipValueMax:i}=s;let a;W().getBool("WEBGL_PACK_CLIP")?a=new wW(r.shape):a=new yW(r.shape);const l=[[o],[i]];return e.runWebGLProgram(a,[r],r.dtype,l)}const CW={kernelName:mi,backendName:"webgl",kernelFunc:vW};class $W{constructor(t){this.variableNames=["real","imag"],this.outputShape=t,this.userCode=`
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
    `}}function vg(n,t){return{dataId:t.dataId,dtype:t.dtype,shape:n.shape}}function kW(n){const{inputs:t,backend:e}=n,{x:s}=t,r=e.texData.get(s.dataId),o=new $W(s.shape),i=[vg(s,r.complexTensorInfos.real),vg(s,r.complexTensorInfos.imag)];return e.runWebGLProgram(o,i,i[0].dtype)}const IW={kernelName:nc,backendName:"webgl",kernelFunc:kW};class SW{constructor(t){this.outputShape=[],this.outputShape=Bn(t,1),this.variableNames=t.map((i,a)=>`T${a}`);const e=new Array(t.length-1);e[0]=t[0][1];for(let i=1;i<e.length;i++)e[i]=e[i-1]+t[i][1];const s=[`if (yC < ${e[0]}) setOutput(getT0(yR, yC));`];for(let i=1;i<e.length;i++){const a=e[i-1];s.push(`else if (yC < ${e[i]}) setOutput(getT${i}(yR, yC-${a}));`)}const r=e.length,o=e[e.length-1];s.push(`else setOutput(getT${r}(yR, yC-${o}));`),this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int yR = coords.x;
        int yC = coords.y;

        ${s.join(`
        `)}
      }
    `}}class NW{constructor(t,e){this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[],this.outputShape=Bn(t,e);const s=this.outputShape,r=s.length,o=Ft(r),i=Re("coords",r),a=["x","y","z","w","u","v"].slice(0,r);this.variableNames=t.map((m,g)=>`T${g}`);const l=new Array(t.length-1);l[0]=t[0][e];for(let m=1;m<l.length;m++)l[m]=l[m-1]+t[m][e];const c=a[e],u=a.slice(-2),h=a.join();let d=`if (${c} < ${l[0]}) {
        return getChannel(
            getT0(${h}), vec2(${u.join()}));
        }`;for(let m=1;m<l.length;m++){const g=l[m-1];d+=`
        if (${c} < ${l[m]}  && ${c} >= ${l[m-1]}) {
          return getChannel(
            getT${m}(${Wa(a,c,g)}),
            vec2(${Wa(u,c,g)}));
        }`}const f=l.length,p=l[l.length-1];d+=`
        return getChannel(
          getT${f}(${Wa(a,c,p)}),
          vec2(${Wa(u,c,p)}));`,this.userCode=`
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
    `}}function Wa(n,t,e){const s=n.indexOf(t);return n.map((o,i)=>i===s?`${o} - ${e}`:o).join()}function ku(n){const{inputs:t,backend:e}=n,{input:s}=t,r=e.texData.get(s.dataId);return je({inputs:{x:r.complexTensorInfos.imag},backend:e})}const TW={kernelName:vd,backendName:"webgl",kernelFunc:ku};function Mo(n,t,e){const s=n[0].dtype;if(s==="complex64"){const f=n.map(b=>va({inputs:{input:b},backend:e})),p=n.map(b=>ku({inputs:{input:b},backend:e})),m=Mo(f,t,e),g=Mo(p,t,e),x=Ws({inputs:{real:m,imag:g},backend:e});return f.forEach(b=>e.disposeIntermediateTensorInfo(b)),p.forEach(b=>e.disposeIntermediateTensorInfo(b)),e.disposeIntermediateTensorInfo(m),e.disposeIntermediateTensorInfo(g),x}let r=e.shouldExecuteOnCPU(n);if(s==="string"&&(r=!0),r){const f=n.map(y=>{const $=[-1,q(y.shape.slice(t))];return et({inputs:{x:y},backend:e,attrs:{shape:$}})}),p=f.map(y=>({vals:e.readSync(y.dataId),shape:y.shape})),m=Bn(f.map(y=>y.shape),1),g=f[0].shape[0]===1,x=bB(p,m,s,g),b=Bn(n.map(y=>y.shape),t),w=e.makeTensorInfo(b,s,x);return f.forEach(y=>e.disposeIntermediateTensorInfo(y)),w}const o=n.filter(f=>q(f.shape)>0),i=W().getBool("WEBGL_PACK_ARRAY_OPERATIONS")&&o[0].shape.length>1;if(o.length===1){const f=i?new Ln(n[0].shape,bs):new vs(n[0].shape,bs);return e.runWebGLProgram(f,n,s)}const a=W().getNumber("WEBGL_MAX_TEXTURES_IN_SHADER");if(o.length>a){const f=[];for(let m=0;m<o.length;m+=a){const g=o.slice(m,m+a);f.push(Mo(g,t,e))}const p=Mo(f,t,e);for(const m of f)e.disposeIntermediateTensorInfo(m);return p}if(i){const f=new NW(o.map(p=>p.shape),t);return e.runWebGLProgram(f,o,s)}const{tensors2D:l,outShape:c}=EW(o,t,e),u=new SW(l.map(f=>f.shape)),h=e.runWebGLProgram(u,l,s);l.forEach(f=>e.disposeIntermediateTensorInfo(f));const d=et({inputs:{x:h},attrs:{shape:c},backend:e});return e.disposeIntermediateTensorInfo(h),d}function EW(n,t,e){const s=Bn(n.map(o=>o.shape),t);return{tensors2D:n.map(o=>et({inputs:{x:o},attrs:{shape:[-1,q(o.shape.slice(t))]},backend:e})),outShape:s}}function Cv(n){const{inputs:t,backend:e,attrs:s}=n,{axis:r}=s,o=vt(r,t[0].shape)[0],i=t.map(c=>c.shape);Sf(i,o);const a=Bn(t.map(c=>c.shape),o);if(q(a)===0)return e.makeTensorInfo(a,t[0].dtype,[]);const l=t.filter(c=>q(c.shape)>0);return l.length===1?je({inputs:{x:l[0]},backend:e}):Mo(l,o,e)}const RW={kernelName:sc,backendName:"webgl",kernelFunc:Cv};class $v{constructor(t,e=!1,s=null,r=!1,o=!1){this.variableNames=["x","W"],this.outputShape=t.outShape;const i=t.padInfo.top,a=t.padInfo.left,l=t.strideHeight,c=t.strideWidth,u=t.dilationHeight,h=t.dilationWidth,d=t.filterHeight,f=t.filterWidth,p=Math.floor(t.inChannels/4)*4,m=t.inChannels%4,g=t.dataFormat==="channelsLast",x=g?1:2,b=g?2:3,w=g?3:1;let y="",v="";s&&(r?y=`float activation(float a) {
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
    `}}class AW{constructor(t){this.variableNames=["x","W"],this.outputShape=t.outShape;const e=t.padInfo.front,s=t.padInfo.top,r=t.padInfo.left,o=t.strideDepth,i=t.strideHeight,a=t.strideWidth,l=t.dilationDepth,c=t.dilationHeight,u=t.dilationWidth,h=t.filterDepth,d=t.filterHeight,f=t.filterWidth,p=Math.floor(t.inChannels/4)*4,m=t.inChannels%4;this.userCode=`
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
    `}}class kv{constructor(t,e=!1,s=null,r=!1,o=!1){this.variableNames=["x","W"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"pads",type:"ivec2"},{name:"strides",type:"ivec2"},{name:"dilations",type:"ivec2"},{name:"inDims",type:"ivec2"}],this.outputShape=t.outShape,this.enableShapeUniforms=Ne(this.outputShape.length);const i=t.padInfo.left,a=t.strideWidth,l=t.dilationWidth,c=t.filterHeight,u=t.filterWidth,h=u;let d=`
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
                 `,x+1<u)){const b=i%2===0?jh(l):l;l%2===0&&i%2===1||l%2!==0&&i%2!==1?(d+=`
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
     `}}class DW{constructor(t,e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"inputShape",type:"ivec4"},{name:"pad",type:"ivec2"},{name:"stride",type:"ivec2"},{name:"dilation",type:"ivec2"},{name:"inChannels",type:"int"},{name:"itemsPerBlockRow",type:"int"},{name:"outWidth",type:"int"}],this.outputShape=t,this.enableShapeUniforms=Ne(this.outputShape.length);const{dataFormat:s}=e,r=_e(),o=s==="channelsLast",i=o?1:2,a=o?2:3,l=this.enableShapeUniforms?"if(blockIndex < outShape[2] && pos < outShape[1]) {":`if(blockIndex < ${t[2]} && pos < ${t[1]}) {`;let c="";for(let u=0;u<=1;u++)for(let h=0;h<=1;h++)c+=`
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
    `}}function Ml(n,t){const e=n.length;return e>=3?t?[...n.slice(0,-3),n[e-3]*n[e-2],n[e-1]]:[...n.slice(0,-3),n[e-3],n[e-2]*n[e-1]]:!t&&e===1&&n[0]>1?[n[0],1]:null}function Iv({x:n,filter:t,convInfo:e,backend:s,bias:r=null,preluActivationWeights:o=null,leakyreluAlpha:i=0,activation:a=null}){const l=n.shape,c=s.texData.get(n.dataId),u=e.inChannels,h=l[0]*l[1]*l[2],d=e.outChannels,f=e.dataFormat==="channelsLast",p=!1,m=!1;let g;const x=[];if(o!=null){const y=Ml(o.shape,f);y!=null&&(o=et({inputs:{x:o},backend:s,attrs:{shape:y}}),x.push(o))}if(r!=null){const y=Ml(r.shape,f);y!=null&&(r=et({inputs:{x:r},backend:s,attrs:{shape:y}}),x.push(r))}if(!((h===1||d===1)&&u>xv)&&c.isPacked&&f&&c.texture!=null&&l[2]%2!==0&&Et(c.shape.slice(-3),l.slice(-3))){const y=l[0]*l[1]*(l[2]+1),v={dataId:n.dataId,shape:[1,y,e.inChannels],dtype:n.dtype},$=c.shape;c.shape=c.shape.slice(),c.shape[c.shape.length-2]++,S(Fl(c.shape,v.shape),()=>`packed reshape ${c.shape} to ${v.shape} isn't free`);const N=et({inputs:{x:t},backend:s,attrs:{shape:[1,e.inChannels,e.outChannels]}});x.push(N);const T=Ol({a:v,b:N,backend:s,transposeA:p,transposeB:m,bias:r,activation:a,preluActivationWeights:o,leakyreluAlpha:i}),k=s.texData.get(T.dataId);S(k.isPacked,()=>"batchMatMul result is expected to be packed"),c.shape=$,k.shape=e.outShape,g=je({inputs:{x:T},backend:s}),g.shape=e.outShape,x.push(T)}else{const y=e.outHeight*e.outWidth,v=et({inputs:{x:n},backend:s,attrs:{shape:f?[e.batchSize,y,e.inChannels]:[e.batchSize,e.inChannels,y]}}),$=et({inputs:{x:t},backend:s,attrs:{shape:[1,e.inChannels,e.outChannels]}}),N=Ol({a:f?v:$,b:f?$:v,transposeA:!f,transposeB:m,backend:s,bias:r,activation:a,preluActivationWeights:o,leakyreluAlpha:i});g=et({inputs:{x:N},backend:s,attrs:{shape:e.outShape}}),x.push(v),x.push($),x.push(N)}for(const y of x)s.disposeIntermediateTensorInfo(y);return g}function Sv({x:n,filter:t,convInfo:e,backend:s,bias:r=null,preluActivationWeights:o=null,leakyreluAlpha:i=0,activation:a=null}){const{filterWidth:l,filterHeight:c,inChannels:u,outWidth:h,outHeight:d,dataFormat:f}=e,p=f==="channelsLast",m=l*c*u,g=d*h,x=[e.batchSize,m,g],b=!0,w=!1,y=[];if(o!=null){const B=Ml(o.shape,p);B!=null&&(o=et({inputs:{x:o},backend:s,attrs:{shape:B}}),y.push(o))}if(r!=null){const B=Ml(r.shape,p);B!=null&&(r=et({inputs:{x:r},backend:s,attrs:{shape:B}}),y.push(r))}const v=et({inputs:{x:t},backend:s,attrs:{shape:[1,m,q(t.shape)/m]}});y.push(v);const $=new DW(x,e),N=[n.shape,[e.padInfo.top,e.padInfo.left],[e.strideHeight,e.strideWidth],[e.dilationHeight,e.dilationWidth],[e.inChannels],[e.filterWidth*e.inChannels],[e.outWidth]],T=s.runWebGLProgram($,[n],"float32",N),k=et({inputs:{x:T},backend:s,attrs:{shape:x}});y.push(T),y.push(k);const I=r!=null,C=o!=null,R=a==="leakyrelu",A=a?Qo(a,!0):null,O=new gv(p?k.shape:v.shape,p?v.shape:k.shape,p?[e.batchSize,g,e.outChannels]:[e.batchSize,e.outChannels,g],b,w,I,A,C,R),M=p?[k,v]:[v,k];if(r&&M.push(r),C&&M.push(o),R){const B=s.makeTensorInfo([],"float32",_s(i,"float32"));M.push(B),y.push(B)}const z=s.runWebGLProgram(O,M,"float32"),U=et({inputs:{x:z},backend:s,attrs:{shape:e.outShape}});y.push(z);for(const B of y)s.disposeIntermediateTensorInfo(B);return U}function _W(n){const{inputs:t,backend:e,attrs:s}=n,{x:r,filter:o}=t,{strides:i,pad:a,dataFormat:l,dilations:c,dimRoundingMode:u}=s,h=ds(l),d=ye(r.shape,o.shape,i,c,a,u,!1,h);let f;if(d.filterHeight===1&&d.filterWidth===1&&d.dilationHeight===1&&d.dilationWidth===1&&d.strideHeight===1&&d.strideWidth===1&&(d.padInfo.type==="SAME"||d.padInfo.type==="VALID"))f=Iv({x:r,filter:o,convInfo:d,backend:e});else if(d.strideWidth<=2&&h==="channelsLast"&&W().getBool("WEBGL_EXP_CONV")){const m=new kv(d),g=[[d.padInfo.top,d.padInfo.left],[d.strideHeight,d.strideWidth],[d.dilationHeight,d.dilationWidth],[d.inHeight,d.inWidth]];f=e.runWebGLProgram(m,[r,o],"float32",g)}else if(W().getBool("WEBGL_CONV_IM2COL"))f=Sv({x:r,filter:o,convInfo:d,backend:e});else{const m=new $v(d);f=e.runWebGLProgram(m,[r,o],"float32")}const p=et({inputs:{x:f},backend:e,attrs:{shape:d.outShape}});return e.disposeIntermediateTensorInfo(f),p}const FW={kernelName:rc,backendName:"webgl",kernelFunc:_W};class OW{constructor(t){this.variableNames=["x","dy"],this.outputShape=t.filterShape;const e=t.strideHeight,s=t.strideWidth,r=t.padInfo.top,o=t.padInfo.left,i=t.dataFormat==="channelsLast";this.userCode=`
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
    `}}class MW{constructor(t){this.variableNames=["dy","W"],this.outputShape=t.inShape;const e=t.filterHeight,s=t.filterWidth,r=t.strideHeight,o=t.strideWidth,i=t.dataFormat==="channelsLast",a=e-1-t.padInfo.top,l=s-1-t.padInfo.left,c=i?1:2,u=i?2:3,h=i?3:1;this.userCode=`
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
    `}}class LW{constructor(t){this.variableNames=["x","dy"],this.outputShape=t.filterShape;const e=t.strideDepth,s=t.strideHeight,r=t.strideWidth,o=t.padInfo.front,i=t.padInfo.top,a=t.padInfo.left;this.userCode=`
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
    `}}class PW{constructor(t){this.variableNames=["dy","W"],this.outputShape=t.inShape;const e=t.filterDepth,s=t.filterHeight,r=t.filterWidth,o=t.strideDepth,i=t.strideHeight,a=t.strideWidth,l=e-1-t.padInfo.front,c=s-1-t.padInfo.top,u=r-1-t.padInfo.left;this.userCode=`
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
    `}}function zW(n){const{inputs:t,backend:e,attrs:s}=n,{x:r,dy:o}=t,{strides:i,pad:a,dataFormat:l,dimRoundingMode:c,filterShape:u}=s,h=ds(l),d=ye(r.shape,u,i,1,a,c,!1,h),f=new OW(d);return e.runWebGLProgram(f,[r,o],"float32")}const BW={kernelName:id,backendName:"webgl",kernelFunc:zW};class VW{constructor(t){this.variableNames=["dy","W"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"strides",type:"vec2"}],this.outputShape=t.inShape,this.enableShapeUniforms=Ne(this.outputShape.length);const e=t.filterHeight,s=t.filterWidth,r=e-1-t.padInfo.top,o=s-1-t.padInfo.left;this.userCode=`
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
    `}}function WW(n){const{inputs:t,backend:e,attrs:s}=n,{dy:r,filter:o}=t,{inputShape:i,strides:a,pad:l,dataFormat:c,dimRoundingMode:u}=s,h=ds(c),d=ye(i,o.shape,a,1,l,u,!1,h);if(W().getBool("WEBGL_PACK_CONV2DTRANSPOSE")&&h==="channelsLast"){const f=[[d.strideHeight,d.strideWidth]],p=new VW(d);return e.runWebGLProgram(p,[r,o],"float32",f)}else{const f=new MW(d);return e.runWebGLProgram(f,[r,o],"float32")}}const UW={kernelName:oc,backendName:"webgl",kernelFunc:WW};function GW(n){const{inputs:t,backend:e,attrs:s}=n,{x:r,filter:o}=t,{strides:i,pad:a,dilations:l}=s,c=Os(r.shape,o.shape,i,l,a),u=new AW(c);return e.runWebGLProgram(u,[r,o],"float32")}const HW={kernelName:ic,backendName:"webgl",kernelFunc:GW};function qW(n){const{inputs:t,backend:e,attrs:s}=n,{x:r,dy:o}=t,{strides:i,pad:a,filterShape:l}=s,c=Os(r.shape,l,i,1,a),u=new LW(c);return e.runWebGLProgram(u,[r,o],"float32")}const jW={kernelName:ad,backendName:"webgl",kernelFunc:qW};function KW(n){const{inputs:t,backend:e,attrs:s}=n,{dy:r,filter:o}=t,{pad:i,strides:a,inputShape:l}=s,c=Os(l,o.shape,a,1,i),u=new PW(c);return e.runWebGLProgram(u,[r,o],"float32")}const XW={kernelName:ld,backendName:"webgl",kernelFunc:KW};const YW=vo+`
  return cos(x);
`,ZW=`
  vec4 result = cos(x);
  bvec4 isNaN = isnan(x);
  ${Tr}
  return result;
`,JW=It({opSnippet:YW,packedOpSnippet:ZW}),QW={kernelName:gi,backendName:"webgl",kernelFunc:JW};const tU=`
  float e2x = exp(-x);
  return (e2x + 1.0 / e2x) / 2.0;
`,eU=It({opSnippet:tU}),nU={kernelName:xi,backendName:"webgl",kernelFunc:eU};class sU{constructor(t,e,s,r,o){this.variableNames=["Image","Boxes","BoxInd"],this.outputShape=[];const[i,a,l,c]=t,[u]=e,[h,d]=s;this.outputShape=[u,h,d,c];const f=r==="bilinear"?1:0,[p,m]=[`${a-1}.0`,`${l-1}.0`],[g,x,b]=h>1?[`${(a-1)/(h-1)}`,"(y2-y1) * height_ratio",`y1*${p} + float(y)*(height_scale)`]:["0.0","0.0",`0.5 * (y1+y2) * ${p}`],[w,y,v]=d>1?[`${(l-1)/(d-1)}`,"(x2-x1) * width_ratio",`x1*${m} + float(x)*(width_scale)`]:["0.0","0.0",`0.5 * (x1+x2) * ${m}`];this.userCode=`
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
    `}}const rU=n=>{const{inputs:t,backend:e,attrs:s}=n,{image:r,boxes:o,boxInd:i}=t,{cropSize:a,method:l,extrapolationValue:c}=s,u=new sU(r.shape,o.shape,a,l,c);return e.runWebGLProgram(u,[r,o,i],"float32")},oU={kernelName:ud,backendName:"webgl",kernelFunc:rU};var ei;(function(n){n.Prod="*",n.Sum="+"})(ei||(ei={}));class Cg{constructor(t,e,s,r){this.op=t,this.outputShape=e,this.variableNames=["x"],this.customUniforms=[{name:"index",type:"float"}];const o=this.outputShape.length,i=this.op===ei.Prod?"1.0":"0.0",a=s?i:`getX(${$g(o,"coords",this.op)})`,l=this.outputShape[this.outputShape.length-1];let c="",u="";s?(c=r?`end != ${l-1}`:"end != 0",u=r?"end + 1":"end - 1"):(c=r?`end + pow2 < ${l}`:"end >= pow2",u=r?"end + pow2":"end - pow2"),this.userCode=`
      void main() {
        ${Ft(o)} coords = getOutputCoords();
        int end = ${kg(o,"coords",this.op)};
        float val = ${a};
        int pow2 = int(pow(2.0, index));
        if (${c}) {
          int idx = ${u};
          ${kg(o,"coords",this.op)} = idx;
          val ${this.op}= getX(${$g(o,"coords",this.op)});
        }
        setOutput(val);
      }
    `}}function $g(n,t,e){if(n===1)return`${t}`;if(n===2)return`${t}.x, ${t}.y`;if(n===3)return`${t}.x, ${t}.y, ${t}.z`;if(n===4)return`${t}.x, ${t}.y, ${t}.z, ${t}.w`;throw new Error(`Cumulative ${e} for rank ${n} is not yet supported`)}function kg(n,t,e){if(n===1)return`${t}`;if(n===2)return`${t}.y`;if(n===3)return`${t}.z`;if(n===4)return`${t}.w`;throw new Error(`Cumulative ${e} for rank ${n} is not yet supported`)}function Nv(n,t,e,s,r,o){const i=t.shape.length,a=jt([s],i);let l=t;a!=null&&(l=De({inputs:{x:t},backend:e,attrs:{perm:a}}));const c=Jt(1,i)[0];if(c!==i-1)throw new Error(`WebGL cumprod shader expects an inner-most axis=${t.shape.length-1} but got axis=${s}`);const u=l.shape[c];let h=je({inputs:{x:l},backend:e});for(let d=0;d<=Math.ceil(Math.log2(u))-1;d++){const f=new Cg(n,l.shape,!1,o),p=[[d]],m=h;h=e.runWebGLProgram(f,[h],h.dtype,p),e.disposeIntermediateTensorInfo(m)}if(r){const d=new Cg(n,l.shape,r,o),f=h;h=e.runWebGLProgram(d,[h],h.dtype),e.disposeIntermediateTensorInfo(f)}if(a!=null){const d=Ms(a),f=De({inputs:{x:h},backend:e,attrs:{perm:d}});return e.disposeIntermediateTensorInfo(h),e.disposeIntermediateTensorInfo(l),f}return h}function iU(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{axis:o,exclusive:i,reverse:a}=s;return Nv(ei.Prod,r,e,o,i,a)}const aU={kernelName:cd,backendName:"webgl",kernelFunc:iU};function lU(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{axis:o,exclusive:i,reverse:a}=s;return Nv(ei.Sum,r,e,o,i,a)}const cU={kernelName:ac,backendName:"webgl",kernelFunc:lU};function uU(n){const{inputs:t,backend:e,attrs:s}=n,{x:r,weights:o}=t,{size:i,binaryOutput:a}=s;if(r.shape.length===1){const l=e.readSync(r.dataId),c=e.readSync(o.dataId),u=av(l,c,o.dtype,o.shape,i);return e.makeTensorInfo([i],o.dtype,u)}else if(r.shape.length===2){const l=e.bufferSync(r),c=e.bufferSync(o),u=pB(l,c,i,a);return e.makeTensorInfo(u.shape,o.dtype,u.values)}throw new Error(`Error in denseBincount: input must be at most rank 2, but got rank${r.shape.length}.`)}const hU={kernelName:hd,backendName:"webgl",kernelFunc:uU};class dU{constructor(t,e,s){this.variableNames=["x"],this.outputShape=[],this.outputShape=t,this.blockSize=e,this.dataFormat=s,this.userCode=`
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
  `}getHeightCoordString(){return this.dataFormat==="NHWC"?"coords[1]":"coords[2]"}getWidthCoordString(){return this.dataFormat==="NHWC"?"coords[2]":"coords[3]"}getDepthCoordString(){return this.dataFormat==="NHWC"?"coords[3]":"coords[1]"}getOutputDepthSize(){return this.dataFormat==="NHWC"?this.outputShape[3]:this.outputShape[1]}getInputSamplingString(){return this.dataFormat==="NHWC"?"getX(b, in_h, in_w, in_d)":"getX(b, in_d, in_h, in_w)"}}function fU(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{blockSize:o,dataFormat:i}=s,a=r.shape[0],l=i==="NHWC"?r.shape[1]:r.shape[2],c=i==="NHWC"?r.shape[2]:r.shape[3],u=i==="NHWC"?r.shape[3]:r.shape[1],h=l*o,d=c*o,f=u/(o*o),p=i==="NHWC"?[a,h,d,f]:[a,f,h,d],m=new dU(p,o,i);return e.runWebGLProgram(m,[r],r.dtype)}const pU={kernelName:dd,backendName:"webgl",kernelFunc:fU};class Tv{constructor(t,e=!1,s=null,r=!1,o=!1){this.variableNames=["x","W"],this.customUniforms=[{name:"pads",type:"ivec2"},{name:"strides",type:"ivec2"},{name:"dilations",type:"ivec2"},{name:"inDims",type:"ivec2"}],this.outputShape=t.outShape,this.enableShapeUniforms=Ne(this.outputShape.length);const i=t.filterHeight,a=t.filterWidth,l=t.outChannels/t.inChannels;let c="",u="";s&&(r?c=`float activation(float a) {
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
    `}}class Ev{constructor(t,e=!1,s=null,r=!1,o=!1){this.variableNames=["x","W"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"pads",type:"ivec2"},{name:"strides",type:"ivec2"},{name:"dilations",type:"ivec2"},{name:"inDims",type:"ivec2"}],this.outputShape=t.outShape,this.enableShapeUniforms=Ne(this.outputShape.length);const i=t.outChannels/t.inChannels,a=t.padInfo.left,l=t.strideWidth,c=t.dilationWidth,u=t.filterHeight,h=t.filterWidth,d=h;let f=`
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
                `,b+1<h)){const w=a%2===0?jh(c):c;c%2===0&&a%2===1||c%2!==0&&a%2!==1?(f+=`
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
    `}}function mU(n){const{inputs:t,backend:e,attrs:s}=n,{x:r,filter:o}=t,{strides:i,pad:a,dilations:l,dimRoundingMode:c}=s;let u=l;u==null&&(u=[1,1]),S(Ie(i,u),()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${i} and dilations '${u}'`);const h=ye(r.shape,o.shape,i,u,a,c,!0);let d;W().getBool("WEBGL_PACK_DEPTHWISECONV")&&h.strideWidth<=2&&h.outChannels/h.inChannels===1?d=new Ev(h):d=new Tv(h);const f=[[h.padInfo.top,h.padInfo.left],[h.strideHeight,h.strideWidth],[h.dilationHeight,h.dilationWidth],[h.inHeight,h.inWidth]];return e.runWebGLProgram(d,[r,o],"float32",f)}const gU={kernelName:lc,backendName:"webgl",kernelFunc:mU};class xU{constructor(t){this.variableNames=["x","dy"],this.outputShape=t.filterShape;const e=t.strideHeight,s=t.strideWidth,r=t.padInfo.top,o=t.padInfo.left,i=t.outChannels/t.inChannels;this.userCode=`
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
    `}}class bU{constructor(t){this.variableNames=["dy","W"],this.outputShape=t.inShape;const e=t.filterHeight,s=t.filterWidth,r=t.strideHeight,o=t.strideWidth,i=e-1-t.padInfo.top,a=s-1-t.padInfo.left,l=t.outChannels/t.inChannels;this.userCode=`
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
    `}}function yU(n){const{inputs:t,backend:e,attrs:s}=n,{x:r,dy:o}=t,{strides:i,dilations:a,pad:l,dimRoundingMode:c,filterShape:u}=s,h=ye(r.shape,u,i,a,l,c,!0),d=new xU(h);return e.runWebGLProgram(d,[r,o],"float32")}const wU={kernelName:fd,backendName:"webgl",kernelFunc:yU};function vU(n){const{inputs:t,backend:e,attrs:s}=n,{dy:r,filter:o}=t,{strides:i,dilations:a,pad:l,dimRoundingMode:c,inputShape:u}=s,h=ye(u,o.shape,i,a,l,c,!0),d=new bU(h);return e.runWebGLProgram(d,[r,o],"float32")}const CU={kernelName:pd,backendName:"webgl",kernelFunc:vU};class $U{constructor(t){this.variableNames=["X"],this.outputShape=[t,t],this.userCode=`
      void main() {
          ivec2 coords = getOutputCoords();
          float val = coords[0] == coords[1] ? getX(coords[0]) : 0.0;
          setOutput(val);
      }
    `}}function kU(n){const{inputs:t,backend:e}=n,{x:s}=t,r=[...s.shape,...s.shape],o=q(s.shape),i=et({inputs:{x:s},backend:e,attrs:{shape:[o]}}),a=new $U(o),l=e.runWebGLProgram(a,[i],i.dtype),c=et({inputs:{x:l},backend:e,attrs:{shape:r}});return e.disposeIntermediateTensorInfo(i),e.disposeIntermediateTensorInfo(l),c}const IU={kernelName:px,backendName:"webgl",kernelFunc:kU};class SU{constructor(t){this.variableNames=["x","W"],this.outputShape=t.outShape;const{inHeight:e,inWidth:s,padInfo:r,strideHeight:o,strideWidth:i,filterHeight:a,filterWidth:l,dilationHeight:c,dilationWidth:u}=t,{top:h,left:d}=r;this.userCode=`
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
    `}}function NU(n){const{inputs:t,backend:e,attrs:s}=n,{x:r,filter:o}=t,{strides:i,pad:a,dilations:l}=s,c=ea(r.shape,o.shape,i,a,"NHWC",l);let u;const h=new SU(c);u=e.runWebGLProgram(h,[r,o],"float32");const d=et({inputs:{x:u},backend:e,attrs:{shape:c.outShape}});return e.disposeIntermediateTensorInfo(u),d}const TU={kernelName:cc,backendName:"webgl",kernelFunc:NU};function EU(n){const{inputs:t,backend:e,attrs:s}=n,{equation:r}=s,o=t,{allDims:i,summedDims:a,idDims:l}=Pf(r,o.length);Bf(i.length,l,o);const{path:c,steps:u}=Vf(a,l),h=u.length;let d=null,f=i.length;const p=[];for(let m=0;m<h;++m){for(const g of u[m]){const{permutationIndices:x,expandDims:b}=zf(f,l[g]);let w;Wf(x)?w=o[g]:(w=De({inputs:{x:o[g]},backend:e,attrs:{perm:x}}),p.push(w));const y=w.shape.slice();for(let v=0;v<b.length;++v)y.splice(b[v],0,1);Et(w.shape,y)||(w=et({inputs:{x:w},backend:e,attrs:{shape:y}}),p.push(w)),d===null?d=w:(d=Tp({inputs:{a:w,b:d},backend:e}),p.push(d))}m<h-1&&(c[m]>=0&&(d=$u({inputs:{x:d},backend:e,attrs:{axis:c[m]-(i.length-f),keepDims:!1}}),p.push(d)),f--)}for(const m of p)m!==d&&e.disposeIntermediateTensorInfo(m);return d}const RU={kernelName:md,backendName:"webgl",kernelFunc:EU};const AU="return (x >= 0.0) ? x : (exp(x) - 1.0);",DU=`
  vec4 result;

  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);
  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);
  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);
  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);

  return result;
`,_U=It({opSnippet:AU,packedOpSnippet:DU}),FU={kernelName:yi,backendName:"webgl",kernelFunc:_U};const OU="return (b >= 0.0) ? a : a * (b + 1.0);",MU=`
  vec4 bGTEZero = vec4(greaterThanEqual(b, vec4(0.)));
  return (bGTEZero * a) + ((vec4(1.0) - bGTEZero) * (a * (b + vec4(1.0))));
`,LU=n=>{const{inputs:t,backend:e}=n,{dy:s,y:r}=t,o=W().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new wo(MU,s.shape,r.shape):new xr(OU,s.shape,r.shape);return e.runWebGLProgram(o,[s,r],s.dtype)},PU={kernelName:gd,backendName:"webgl",kernelFunc:LU};const zU=`
  return vec4(equal(a, b));
`,BU="return float(a == b);",VU=ve({opSnippet:BU,packedOpSnippet:zU,dtype:"bool",cpuKernelImpl:yB}),WU={kernelName:uc,backendName:"webgl",kernelFunc:VU};const UU=`
  // Error function is calculated approximately with elementary function.
  // See "Handbook of Mathematical Functions with Formulas,
  // Graphs, and Mathematical Tables", Abramowitz and Stegun.
  float p = ${Af};
  float a1 = ${Df};
  float a2 = ${_f};
  float a3 = ${Ff};
  float a4 = ${Of};
  float a5 = ${Mf};

  float sign = sign(x);
  x = abs(x);
  float t = 1.0 / (1.0 + p * x);
  return sign * (1.0 - (((((a5*t + a4)*t) + a3)*t + a2)*t + a1)*t*exp(-x*x));
`,GU=It({opSnippet:UU}),HU={kernelName:wi,backendName:"webgl",kernelFunc:GU};const qU=vo+`
  return exp(x);
`,jU=`
  vec4 result = exp(x);
  bvec4 isNaN = isnan(x);
  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,Rv=It({opSnippet:qU,packedOpSnippet:jU,cpuKernelImpl:wB,dtype:"float32"}),KU={kernelName:vi,backendName:"webgl",kernelFunc:Rv};function Lh(n){const{inputs:t,attrs:e,backend:s}=n,{dim:r}=e,{input:o}=t,i=o.shape.length,a=o.shape.slice();let l=r;return r<0&&(S(-(i+1)<=r,()=>`Axis must be in the interval [${-(i+1)}, ${i}]`),l=i+r+1),a.splice(l,0,1),et({inputs:{x:o},backend:s,attrs:{shape:a}})}const XU={kernelName:hc,backendName:"webgl",kernelFunc:Lh};const Ig="return exp(x) - 1.0;",YU=It({opSnippet:Ig,packedOpSnippet:Ig,cpuKernelImpl:vB}),ZU={kernelName:Ci,backendName:"webgl",kernelFunc:YU};class Sg{constructor(t,e,s){this.variableNames=["real","imag"];const r=e[1];this.outputShape=e;const o=s?`2.0 * ${Math.PI}`:`-2.0 * ${Math.PI}`,i=s?`${r}.0`:"1.0";let a;if(t==="real")a="return real * expR - imag * expI;";else if(t==="imag")a="return real * expI + imag * expR;";else throw new Error(`FFT component must be either "real" or "imag", got ${t}.`);this.userCode=`
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
    `}}function Av(n,t,e){const s=e.texData.get(n.dataId),r=q(n.shape),o=n.shape[n.shape.length-1],i=r/o,a=et({inputs:{x:n},backend:e,attrs:{shape:[i,o]}}),l=a.shape,c=new Sg("real",l,t),u=new Sg("imag",l,t),h=[{dataId:s.complexTensorInfos.real.dataId,dtype:s.complexTensorInfos.real.dtype,shape:l},{dataId:s.complexTensorInfos.imag.dataId,dtype:s.complexTensorInfos.imag.dtype,shape:l}],d=e.runWebGLProgram(c,h,"float32"),f=e.runWebGLProgram(u,h,"float32"),p=Ws({inputs:{real:d,imag:f},backend:e});e.disposeIntermediateTensorInfo(d),e.disposeIntermediateTensorInfo(f);const m=et({inputs:{x:p},backend:e,attrs:{shape:n.shape}});return e.disposeIntermediateTensorInfo(a),e.disposeIntermediateTensorInfo(p),m}function JU(n){const{inputs:t,backend:e}=n,{input:s}=t;return Av(s,!1,e)}const QU={kernelName:xd,backendName:"webgl",kernelFunc:JU};class tG{constructor(t,e){this.outputShape=[],this.customUniforms=[{name:"value",type:"float"}],this.variableNames=["x"],this.outputShape=t,this.userCode=`
      void main() {
        // Input can be obtained from uniform value.
        setOutput(value);
      }
    `}}function Ca(n){const{backend:t,attrs:e}=n,{shape:s,value:r}=e;let{dtype:o}=e;if(o=o||io(r),o==="string"){const i=Xt(o,q(s));return i.fill(r),t.makeTensorInfo(s,o,i)}else{const i=new tG(s,r),a=[[r]];return t.runWebGLProgram(i,[],o,a)}}const eG={kernelName:bd,backendName:"webgl",kernelFunc:Ca};class nG{constructor(t){this.variableNames=["Image"],this.outputShape=[];const e=t[2];this.outputShape=t,this.userCode=`
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
    `}}const sG={kernelName:yd,backendName:"webgl",kernelFunc:({inputs:n,backend:t})=>{const{image:e}=n,s=t,r=new nG(e.shape);return s.runWebGLProgram(r,[e],e.dtype)}};const Ng="return floor(x);",rG=It({opSnippet:Ng,packedOpSnippet:Ng,cpuKernelImpl:CB}),oG={kernelName:$i,backendName:"webgl",kernelFunc:rG};const iG=`
  float s = sign(a) * sign(b);
  int ia = round(a);
  int ib = round(b);
  if (ib != 0) {
    // Windows (D3D) wants guaranteed non-zero int division at compile-time.
    return float(idiv(ia, ib, s));
  } else {
    return NAN;
  }
`,aG=`
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
`,lG=ve({opSnippet:iG,packedOpSnippet:aG,dtype:"int32"}),cG={kernelName:ki,backendName:"webgl",kernelFunc:lG};class uG{constructor(t){this.variableNames=["A"];const e=_e(),[s,r]=t;this.outputShape=t,this.userCode=`
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
    `}}class hG{constructor(t){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0;const e=_e(),[s,r]=t;this.outputShape=t,this.userCode=`
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
    `}}const dG={kernelName:a$,backendName:"webgl",kernelFunc:fG};let Dr,Zu=W().getBool("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU");function fG(n){const{inputs:t,backend:e,attrs:s}=n;let{pixels:r}=t;const{numChannels:o}=s,i=typeof HTMLVideoElement<"u"&&r instanceof HTMLVideoElement,a=typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement,[l,c]=i?[r.videoWidth,r.videoHeight]:[r.width,r.height],u=[c,l],h=[c,l,o];if(a||i){const m=W().getBool("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU");(Dr==null||m!==Zu)&&(Zu=m,Dr=document.createElement("canvas").getContext("2d",{willReadFrequently:Zu})),Dr.canvas.width=l,Dr.canvas.height=c,Dr.drawImage(r,0,0,l,c),r=Dr.canvas}const d=e.makeTensorInfo(u,"int32");e.texData.get(d.dataId).usage=Je.PIXELS,e.gpgpu.uploadPixelDataToTexture(e.getTexture(d.dataId),r);const f=W().getBool("WEBGL_PACK")?new hG(h):new uG(h),p=e.runWebGLProgram(f,[d],"int32");return e.disposeData(d.dataId),p}function pG(n){const{inputs:t,backend:e,attrs:s}=n,{x:r,filter:o,bias:i,preluActivationWeights:a}=t,{strides:l,pad:c,dataFormat:u,dilations:h,dimRoundingMode:d,activation:f,leakyreluAlpha:p}=s,m=ds(u),g=ye(r.shape,o.shape,l,h,c,d,!1,m);let x;const b=[],w=i!=null,y=a!=null,v=f==="leakyrelu",$=()=>{const T=[r,o],k=(I,C)=>{if(C==="NCHW"&&I.shape.length===1&&I.shape[0]!==1){const R=et({inputs:{x:I},backend:e,attrs:{shape:[I.shape[0],1,1]}});return b.push(R),R}return I};if(w&&T.push(k(i,u)),y&&T.push(k(a,u)),v){const I=e.makeTensorInfo([],"float32",_s(p,"float32"));T.push(I),b.push(I)}return T};if(g.filterHeight===1&&g.filterWidth===1&&g.dilationHeight===1&&g.dilationWidth===1&&g.strideHeight===1&&g.strideWidth===1&&(g.padInfo.type==="SAME"||g.padInfo.type==="VALID"))x=Iv({x:r,filter:o,convInfo:g,backend:e,bias:i,activation:f,preluActivationWeights:a,leakyreluAlpha:p});else if(g.strideWidth<=2&&m==="channelsLast"&&W().getBool("WEBGL_EXP_CONV")){const T=f?Qo(f,!0):null,k=new kv(g,w,T,y,v),I=[[g.padInfo.top,g.padInfo.left],[g.strideHeight,g.strideWidth],[g.dilationHeight,g.dilationWidth],[g.inHeight,g.inWidth]],C=$();x=e.runWebGLProgram(k,C,"float32",I)}else if(W().getBool("WEBGL_CONV_IM2COL"))x=Sv({x:r,filter:o,convInfo:g,backend:e,bias:i,activation:f,preluActivationWeights:a,leakyreluAlpha:p});else{const T=f?Qo(f,!1):null,k=new $v(g,w,T,y,v),I=$();x=e.runWebGLProgram(k,I,"float32")}const N=et({inputs:{x},backend:e,attrs:{shape:g.outShape}});return b.push(x),b.forEach(T=>e.disposeIntermediateTensorInfo(T)),N}const mG={kernelName:ul,backendName:"webgl",kernelFunc:pG};function gG(n){const{inputs:t,backend:e,attrs:s}=n,{x:r,filter:o,bias:i,preluActivationWeights:a}=t,{strides:l,pad:c,dilations:u,dimRoundingMode:h,activation:d,leakyreluAlpha:f}=s,p=[];let m=u;m==null&&(m=[1,1]),S(Ie(l,m),()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${l} and dilations '${m}'`);const g=ye(r.shape,o.shape,l,m,c,h,!0),x=W().getBool("WEBGL_PACK_DEPTHWISECONV")&&g.strideWidth<=2&&g.outChannels/g.inChannels===1,b=d?Qo(d,x):null,w=[r,o],y=i!=null,v=a!=null,$=d==="leakyrelu";if(y&&w.push(i),v&&w.push(a),$){const I=e.makeTensorInfo([],"float32",_s(f,"float32"));w.push(I),p.push(I)}let N;x?N=new Ev(g,y,b,v,$):N=new Tv(g,y,b,v,$);const T=[[g.padInfo.top,g.padInfo.left],[g.strideHeight,g.strideWidth],[g.dilationHeight,g.dilationWidth],[g.inHeight,g.inWidth]],k=e.runWebGLProgram(N,w,"float32",T);return p.forEach(I=>e.disposeIntermediateTensorInfo(I)),k}const xG={kernelName:_x,backendName:"webgl",kernelFunc:gG};class bG{constructor(t,e,s,r){this.sliceDim=t,this.strides=e,this.paramsShape=r,this.variableNames=["x","indices"],this.outputShape=s;const o=Ft(s.length);let i=`
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
      `}}function yG(n){const{inputs:t,backend:e}=n,{params:s,indices:r}=t,o=r.shape,i=o[o.length-1],a=q(s.shape),[l,c,u,h]=wf(s,r),d=et({inputs:{x:r},backend:e,attrs:{shape:[c,i]}}),f=et({inputs:{x:s},backend:e,attrs:{shape:[q(s.shape)/u,u]}});if(e.shouldExecuteOnCPU([s,r])||s.dtype==="string"){const x=e.readSync(r.dataId),b=e.bufferSync(s),w=$B(x,b,s.dtype,c,i,u,h,s.shape,a);return e.makeTensorInfo(l,s.dtype,w.values)}const p=new bG(i,h,[c,u],s.shape),m=e.runWebGLProgram(p,[f,d],f.dtype),g=et({inputs:{x:m},backend:e,attrs:{shape:l}});return e.disposeIntermediateTensorInfo(d),e.disposeIntermediateTensorInfo(f),e.disposeIntermediateTensorInfo(m),g}const wG={kernelName:mx,backendName:"webgl",kernelFunc:yG};class vG{constructor(t,e){this.variableNames=["A","indices"],this.outputShape=e,this.rank=e.length;const s=Ft(this.rank),r=CG(t);this.userCode=`
      void main() {
        ${s} resRC = getOutputCoords();
        int index = int(getIndices(resRC.x, resRC.z));
        float inBounds = (index >= 0) && (index < ${t[2]}) ? 1.0 : 0.0;
        setOutput(inBounds * getA(${r}));
      }
    `}}function CG(n,t){const e=["resRC.x","resRC.y","resRC.z","resRC.w"],s=[];for(let r=0;r<n.length;r++)r===2?s.push("index"):s.push(`${e[r]}`);return s.join()}function Dv(n){const{inputs:t,backend:e,attrs:s}=n,{x:r,indices:o}=t,{axis:i,batchDims:a}=s,l=vt(i,r.shape)[0];if(W().get("DEBUG")){const b=e.readSync(o.dataId),w=r.shape[l];for(let y=0;y<b.length;++y){const v=b[y];S(v<=w-1&&v>=0,()=>`GatherV2: the index value ${v} is not in [0, ${w-1}]`)}}const c=Gf(r,o,l,a),u=q(o.shape),h=[],d=et({inputs:{x:r},backend:e,attrs:{shape:[c.batchSize,c.outerSize,c.dimSize,c.sliceSize]}}),f=et({inputs:{x:o},backend:e,attrs:{shape:[c.batchSize,u/c.batchSize]}});h.push(d),h.push(f);const p=[c.batchSize,c.outerSize,u/c.batchSize,c.sliceSize];if(e.shouldExecuteOnCPU([r,o])||r.dtype==="string"){const b=e.bufferSync(f),w=e.bufferSync(d),y=kB(w,b,p);return h.forEach(v=>e.disposeIntermediateTensorInfo(v)),e.makeTensorInfo(c.outputShape,y.dtype,y.values)}const m=new vG(d.shape,p),g=e.runWebGLProgram(m,[d,f],d.dtype);h.push(g);const x=et({inputs:{x:g},backend:e,attrs:{shape:c.outputShape}});return h.forEach(b=>e.disposeIntermediateTensorInfo(b)),x}const $G={kernelName:fc,backendName:"webgl",kernelFunc:Dv};const kG="return float(a > b);",IG=`
  return vec4(greaterThan(a, b));
`,SG=ve({opSnippet:kG,packedOpSnippet:IG,cpuKernelImpl:IB,dtype:"bool"}),NG={kernelName:pc,backendName:"webgl",kernelFunc:SG};const TG="return float(a >= b);",EG=`
  return vec4(greaterThanEqual(a, b));
`,RG=ve({opSnippet:TG,packedOpSnippet:EG,dtype:"bool",cpuKernelImpl:SB}),AG={kernelName:Ii,backendName:"webgl",kernelFunc:RG};function DG(n){const{inputs:t,backend:e}=n,{input:s}=t;return Av(s,!0,e)}const _G={kernelName:wd,backendName:"webgl",kernelFunc:DG};const FG="return float(!isnan(x) && !isinf(x));",OG=It({opSnippet:FG,dtype:"bool"}),MG={kernelName:Ni,backendName:"webgl",kernelFunc:OG};const LG="return float(isinf(x));",PG=It({opSnippet:LG,dtype:"bool"}),zG={kernelName:Ti,backendName:"webgl",kernelFunc:PG};const BG="return float(isnan(x));",VG=It({opSnippet:BG,dtype:"bool"}),WG={kernelName:Ei,backendName:"webgl",kernelFunc:VG};const UG="return float(a < b);",GG=`
  return vec4(lessThan(a, b));
`,HG=ve({opSnippet:UG,packedOpSnippet:GG,cpuKernelImpl:NB,dtype:"bool"}),qG={kernelName:gc,backendName:"webgl",kernelFunc:HG};const jG="return float(a <= b);",KG=`
  return vec4(lessThanEqual(a, b));
`,XG=ve({opSnippet:jG,packedOpSnippet:KG,cpuKernelImpl:TB,dtype:"bool"}),YG={kernelName:xc,backendName:"webgl",kernelFunc:XG};function ZG(n){const{backend:t,attrs:e}=n,{start:s,stop:r,num:o}=e,i=EB(s,r,o);return t.makeTensorInfo([i.length],"float32",i)}const JG={kernelName:gx,backendName:"webgl",kernelFunc:ZG};const QG=vo+`
  return x < 0.0 ? 0./0. : log(x);
`,tH=`
  vec4 result = log(x);
  bvec4 isNaN = isnan(x);
  result.r = isNaN.r ? x.r : (x.r < 0.0 ? 0./0. : result.r);
  result.g = isNaN.g ? x.g : (x.g < 0.0 ? 0./0. : result.g);
  result.b = isNaN.b ? x.b : (x.b < 0.0 ? 0./0. : result.b);
  result.a = isNaN.a ? x.a : (x.a < 0.0 ? 0./0. : result.a);
  return result;
`,eH=It({opSnippet:QG,packedOpSnippet:tH,cpuKernelImpl:RB}),nH={kernelName:Ri,backendName:"webgl",kernelFunc:eH};const sH=vo+`
  return log(1.0 + x);
`,rH=It({opSnippet:sH}),oH={kernelName:Ai,backendName:"webgl",kernelFunc:rH};const iH="return float(a >= 1.0 && b >= 1.0);",aH=`
  return vec4(
    vec4(greaterThanEqual(a, vec4(1.0))) *
    vec4(greaterThanEqual(b, vec4(1.0))));
`,lH=ve({opSnippet:iH,packedOpSnippet:aH,dtype:"bool"}),cH={kernelName:bc,backendName:"webgl",kernelFunc:lH};const uH="return float(!(x >= 1.0));",hH=It({opSnippet:uH}),dH={kernelName:yc,backendName:"webgl",kernelFunc:hH};const fH="return float(a >= 1.0 || b >= 1.0);",pH=`
  return min(
    vec4(greaterThanEqual(a, vec4(1.0))) +
    vec4(greaterThanEqual(b, vec4(1.0))),
    vec4(1.0));
`,mH=ve({opSnippet:fH,packedOpSnippet:pH,dtype:"bool"}),gH={kernelName:wc,backendName:"webgl",kernelFunc:mH};class xH{constructor(t,e,s,r,o){this.variableNames=["x"],this.outputShape=[];const i=e,a=t[3]-1;this.outputShape=t;let l;const c=`float(${s}) + float(${r}) * sum`;o===.5?l=`inversesqrt(${c})`:o===1?l=`1.0/(${c})`:l=`exp(log(${c}) * float(-${o}));`,this.userCode=`
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
    `}}class bH{constructor(t,e,s,r,o){this.variableNames=["x"],this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0;const i=e,a=t[3]-1;this.outputShape=t;let l;const c=`float(${s}) + float(${r}) * sum`;o===.5?l=`inversesqrt(${c})`:o===1?l=`1.0/(${c})`:l=`exp(log(${c}) * float(-${o}));`,this.userCode=`
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
    `}}const yH=n=>{const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{depthRadius:o,bias:i,alpha:a,beta:l}=s,c=W().getBool("WEBGL_PACK_NORMALIZATION")?new bH(r.shape,o,i,a,l):new xH(r.shape,o,i,a,l);return e.runWebGLProgram(c,[r],r.dtype)},wH={kernelName:vc,backendName:"webgl",kernelFunc:yH};class vH{constructor(t,e,s,r,o){this.variableNames=["inputImage","outputImage","dy"],this.outputShape=[],this.outputShape=t,this.depth=t[3],this.depthRadius=e,this.bias=s,this.alpha=r,this.beta=o,this.userCode=`
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
    `}}const CH=n=>{const{inputs:t,backend:e,attrs:s}=n,{x:r,y:o,dy:i}=t,{depthRadius:a,bias:l,alpha:c,beta:u}=s,h=new vH(r.shape,a,l,c,u);return e.runWebGLProgram(h,[r,o,i],r.dtype)},$H={kernelName:Cd,backendName:"webgl",kernelFunc:CH};function kH(n,t,e,s){const r=q(t),i=q(n.shape)/r,a=et({inputs:{x:n},attrs:{shape:[i,r]},backend:s}),l=Er(a,n.dtype,"max",s),c=et({inputs:{x:l},attrs:{shape:e},backend:s});return s.disposeIntermediateTensorInfo(a),s.disposeIntermediateTensorInfo(l),c}function _v(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{reductionIndices:o,keepDims:i}=s,a=r.shape.length,l=vt(o,r.shape);let c=l;const u=jt(c,a),h=u!=null,d=e.shouldExecuteOnCPU([r]);let f=r;if(h){if(d){const w=e.texData.get(f.dataId).values,y=new Array(a);for(let N=0;N<y.length;N++)y[N]=r.shape[u[N]];const v=Sp(w,r.shape,r.dtype,u,y);f=e.makeTensorInfo(y,r.dtype);const $=e.texData.get(f.dataId);$.values=v}else f=Cu(r,u,e);c=Jt(c.length,a)}we("max",c,a);const[p,m]=me(f.shape,c);let g=p;i&&(g=ne(p,l));let x;if(d){const w=e.texData.get(f.dataId).values,y=AB(w,q(m),g,r.dtype);x=e.makeTensorInfo(g,r.dtype);const v=e.texData.get(x.dataId);v.values=y}else x=kH(f,m,g,e);return h&&e.disposeIntermediateTensorInfo(f),x}const IH={kernelName:Cc,backendName:"webgl",kernelFunc:_v};const SH=Np+`
  return max(a, b);
`,NH=`
  vec4 result = vec4(max(a, b));
  bvec4 isNaNA = isnan(a);
  bvec4 isNaNB = isnan(b);
  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);
  `+Tr+`
  return result;
`,TH=ve({opSnippet:SH,packedOpSnippet:NH,cpuKernelImpl:DB}),EH={kernelName:Di,backendName:"webgl",kernelFunc:TH};function RH(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t;ya(r,"maxPool");const{filterSize:o,strides:i,pad:a,dimRoundingMode:l}=s,c=1;S(Ie(i,c),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${i} and dilations '${c}'`);const u=dn(r.shape,o,i,c,a,l);if(u.filterWidth===1&&u.filterHeight===1&&Et(u.inShape,u.outShape))return je({inputs:{x:r},backend:e});const h=new ti(u,"max",!1);return e.runWebGLProgram(h,[r],r.dtype)}const AH={kernelName:$c,backendName:"webgl",kernelFunc:RH};function DH(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{filterSize:o,strides:i,pad:a,dataFormat:l,dimRoundingMode:c}=s,u=[1,1,1],h=hs(r.shape,o,i,u,a,c,l),d=new Ep(h,"max",!1);return e.runWebGLProgram(d,[r],r.dtype)}const _H={kernelName:kc,backendName:"webgl",kernelFunc:DH};class FH{constructor(t){this.variableNames=["dy","maxPos"],this.outputShape=t.inShape;const e=t.strideHeight,s=t.strideWidth,r=t.dilationHeight,o=t.effectiveFilterHeight,i=t.effectiveFilterWidth,a=o-1-t.padInfo.top,l=i-1-t.padInfo.left,c=o*i-1;this.userCode=`
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
    `}}class OH{constructor(t){this.variableNames=["dy","maxPos"],this.outputShape=t.inShape;const e=t.strideDepth,s=t.strideHeight,r=t.strideWidth,o=t.dilationDepth,i=t.dilationHeight,a=t.dilationWidth,l=t.effectiveFilterDepth,c=t.effectiveFilterHeight,u=t.effectiveFilterWidth,h=l-1-t.padInfo.front,d=c-1-t.padInfo.top,f=u-1-t.padInfo.left,p=l*c*u-1;this.userCode=`
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
    `}}function MH(n){const{inputs:t,backend:e,attrs:s}=n,{dy:r,input:o}=t,i=o,{filterSize:a,strides:l,pad:c,dimRoundingMode:u}=s,h=[1,1,1],d=hs(i.shape,a,l,h,c,u),f=new Ep(d,"max",!0),p=e.runWebGLProgram(f,[i],i.dtype),m=new OH(d),g=e.runWebGLProgram(m,[r,p],i.dtype);return e.disposeIntermediateTensorInfo(p),g}const LH={kernelName:kd,backendName:"webgl",kernelFunc:MH};function PH(n){const{inputs:t,backend:e,attrs:s}=n,{dy:r,input:o,output:i}=t,a=o;ya([o,i],"maxPoolGrad");const{filterSize:l,strides:c,pad:u,dimRoundingMode:h}=s,d=dn(a.shape,l,c,1,u,h),f=!0,p=new ti(d,"max",f),m=e.runWebGLProgram(p,[a],a.dtype),g=new FH(d),x=e.runWebGLProgram(g,[r,m],a.dtype);return e.disposeIntermediateTensorInfo(m),x}const zH={kernelName:$d,backendName:"webgl",kernelFunc:PH};function BH(n,t,e,s){let r=new ti(e,"max",!1);const o=s.runWebGLProgram(r,[n],"float32");r=new ti(e,"max",!0,!0,t);const i=s.runWebGLProgram(r,[n],"float32");return[o,i]}const VH={kernelName:xx,backendName:"webgl",kernelFunc:({inputs:n,attrs:t,backend:e})=>{const{x:s}=n,{filterSize:r,strides:o,pad:i,includeBatchInIndex:a}=t,l=e;S(s.shape.length===4,()=>`Error in maxPool: input must be rank 4 but got rank ${s.shape.length}.`);const c=[1,1];S(Ie(o,c),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${o} and dilations '${c}'`);const u=dn(s.shape,r,o,c,i),[h,d]=BH(s,a,u,l);return[h,d]}};function WH(n,t,e,s){const r=q(t),i=q(n.shape)/r,a=et({inputs:{x:n},attrs:{shape:[i,r]},backend:s}),l=Er(a,"float32","mean",s),c=et({inputs:{x:l},attrs:{shape:e},backend:s});return s.disposeIntermediateTensorInfo(a),s.disposeIntermediateTensorInfo(l),c}const UH={kernelName:Ic,backendName:"webgl",kernelFunc:({inputs:n,attrs:t,backend:e})=>{const{x:s}=n,{keepDims:r,axis:o}=t,i=e,a=s.shape.length,l=vt(o,s.shape);let c=l;const u=jt(c,a),h=u!=null,d=i.shouldExecuteOnCPU([s]),f=[];let p=s;if(h){if(d){const y=i.texData.get(p.dataId).values,v=new Array(a);for(let T=0;T<v.length;T++)v[T]=s.shape[u[T]];const $=Sp(y,s.shape,s.dtype,u,v);p=i.makeTensorInfo(v,s.dtype);const N=i.texData.get(p.dataId);N.values=$}else p=Cu(s,u,i);f.push(p),c=Jt(c.length,a)}we("sum",c,a);const[m,g]=me(p.shape,c);let x=m;r&&(x=ne(m,l));const b=WH(p,g,x,i);for(const w of f)i.disposeIntermediateTensorInfo(w);return b}};function GH(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{axis:o,keepDims:i}=s,a=r.shape.length,l=vt(o,r.shape);let c=l;const u=jt(c,a);let h=r;u!=null&&(h=De({inputs:{x:r},backend:e,attrs:{perm:u}}),c=Jt(c.length,r.shape.length)),we("min",c,a);const[d,f]=me(h.shape,c),p=q(f),m=et({inputs:{x:h},backend:e,attrs:{shape:[-1,p]}}),g=Er(m,m.dtype,"min",e);let x;if(i){const b=ne(d,l);x=et({inputs:{x:g},backend:e,attrs:{shape:b}})}else x=et({inputs:{x:g},backend:e,attrs:{shape:d}});return e.disposeIntermediateTensorInfo(m),e.disposeIntermediateTensorInfo(g),u!=null&&e.disposeIntermediateTensorInfo(h),x}const HH={kernelName:Sc,backendName:"webgl",kernelFunc:GH};const qH=Np+`
  return min(a, b);
`,jH=`
  vec4 result = vec4(min(a, b));
  bvec4 isNaNA = isnan(a);
  bvec4 isNaNB = isnan(b);
  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);
  `+Tr+`
  return result;
`,KH=ve({opSnippet:qH,packedOpSnippet:jH,cpuKernelImpl:_B}),XH={kernelName:_i,backendName:"webgl",kernelFunc:KH};class YH{constructor(t,e,s){this.variableNames=["x"],this.outputShape=e.map((u,h)=>u[0]+t[h]+u[1]);const r=t.length,o=Ft(r),i=e.map(u=>u[0]).join(","),a=e.map((u,h)=>u[0]+t[h]).join(","),l=["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,r),c=s==="reflect"?0:1;if(r===1){this.userCode=`
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
    `}}class ZH{constructor(t,e,s){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e.map((p,m)=>p[0]+t[m]+p[1]);const r=t.length,o=Ft(r),i=e.map(p=>p[0]).join(","),a=e.map((p,m)=>p[0]+t[m]).join(","),l=Re("rc",r),c=Re("source",r),u=`${l[r-1]} < ${this.outputShape[r-1]}`,h=r===1?"source":`vec2(${c.slice(-2).join()})`,d=s==="reflect"?0:1;let f="";if(r===1){const p=`
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
    `}}const JH=({inputs:n,backend:t,attrs:e})=>{const{x:s}=n,{paddings:r,mode:o}=e,i=W().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new ZH(s.shape,r,o):new YH(s.shape,r,o);return t.runWebGLProgram(i,[s],s.dtype)},QH={kernelName:Nc,backendName:"webgl",kernelFunc:JH};const tq=`if (b == 0.0) return NAN;
  return mod(a, b);`,eq=`
  vec4 result = mod(a, b);
  bvec4 isNaN = equal(b, vec4(0.0));
  `+Tr+`
  return result;
`,nq=ve({opSnippet:tq,packedOpSnippet:eq}),sq={kernelName:Fi,backendName:"webgl",kernelFunc:nq};class rq{constructor(t,e,s){this.variableNames=["probs"],this.customUniforms=[{name:"seed",type:"float"}],this.outputShape=[t,s],this.userCode=`
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
    `}}const oq=`
if (a == b) {
  return 1.0;
};
return a / b;`,iq=`
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
`,Fv=ve({opSnippet:oq,packedOpSnippet:iq,checkOutOfBounds:!0}),aq={kernelName:bi,backendName:"webgl",kernelFunc:Fv};const Tg="return a - b;",Ov=ve({opSnippet:Tg,packedOpSnippet:Tg,supportsComplex:!0,cpuKernelImpl:tV}),lq={kernelName:Yi,backendName:"webgl",kernelFunc:Ov};function Mv(n){const{inputs:t,backend:e,attrs:s}=n,{logits:r}=t,{dim:o}=s,i=vt([o],r.shape),a=_v({inputs:{x:r},backend:e,attrs:{reductionIndices:i,keepDims:!1}}),l=ne(a.shape,i),c=et({inputs:{x:a},backend:e,attrs:{shape:l}}),u=Ov({inputs:{a:r,b:c},backend:e}),h=Rv({inputs:{x:u},backend:e}),d=$u({inputs:{x:h},backend:e,attrs:{axis:i,keepDims:!1}}),f=et({inputs:{x:d},backend:e,attrs:{shape:l}}),p=Fv({inputs:{a:h,b:f},backend:e});return e.disposeIntermediateTensorInfo(a),e.disposeIntermediateTensorInfo(c),e.disposeIntermediateTensorInfo(u),e.disposeIntermediateTensorInfo(h),e.disposeIntermediateTensorInfo(d),e.disposeIntermediateTensorInfo(f),p}const cq={kernelName:Hc,backendName:"webgl",kernelFunc:Mv};function uq(n){const{inputs:t,backend:e,attrs:s}=n,{logits:r}=t,{numSamples:o,seed:i,normalized:a}=s,l=a?r:Mv({inputs:{logits:r},backend:e,attrs:{dim:r.shape.length-1}}),c=l.shape[0],u=l.shape[1],h=new rq(c,u,o),d=[[i]],f=e.runWebGLProgram(h,[l],"int32",d);return a||e.disposeIntermediateTensorInfo(l),f}const hq={kernelName:bx,backendName:"webgl",kernelFunc:uq};const dq=pn+`
  return -x;
`,fq=`
  vec4 result = -x;
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`;function pq(n){const{inputs:t,backend:e}=n,{x:s}=t;if(e.shouldExecuteOnCPU([s])){const o=e.texData.get(s.dataId),[i,a]=OB(o.values,s.shape,s.dtype);return e.makeTensorInfo(a,s.dtype,i)}let r;return W().getBool("WEBGL_PACK_UNARY_OPERATIONS")?r=new vs(s.shape,fq):r=new Ln(s.shape,dq),e.runWebGLProgram(r,[s],s.dtype)}const mq={kernelName:Tc,backendName:"webgl",kernelFunc:pq};const gq=pf;function xq(n){Ze("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");const{inputs:t,backend:e,attrs:s}=n,{boxes:r,scores:o}=t,{maxOutputSize:i,iouThreshold:a,scoreThreshold:l}=s,c=e.readSync(r.dataId),u=e.readSync(o.dataId),{selectedIndices:h}=gq(c,u,i,a,l);return e.makeTensorInfo([h.length],"int32",new Int32Array(h))}const bq={kernelName:Id,backendName:"webgl",kernelFunc:xq};const yq=mf;function wq(n){Ze("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");const{inputs:t,backend:e,attrs:s}=n,{boxes:r,scores:o}=t,{maxOutputSize:i,iouThreshold:a,scoreThreshold:l,padToMaxOutputSize:c}=s,u=e.readSync(r.dataId),h=e.readSync(o.dataId),{selectedIndices:d,validOutputs:f}=yq(u,h,i,a,l,c);return[e.makeTensorInfo([d.length],"int32",new Int32Array(d)),e.makeTensorInfo([],"int32",new Int32Array([f]))]}const vq={kernelName:Sd,backendName:"webgl",kernelFunc:wq};const Cq=gf;function $q(n){Ze("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");const{inputs:t,backend:e,attrs:s}=n,{boxes:r,scores:o}=t,{maxOutputSize:i,iouThreshold:a,scoreThreshold:l,softNmsSigma:c}=s,u=e.readSync(r.dataId),h=e.readSync(o.dataId),d=i,f=a,p=l,m=c,{selectedIndices:g,selectedScores:x}=Cq(u,h,d,f,p,m);return[e.makeTensorInfo([g.length],"int32",new Int32Array(g)),e.makeTensorInfo([x.length],"float32",new Float32Array(x))]}const kq={kernelName:Nd,backendName:"webgl",kernelFunc:$q};class Iq{constructor(t,e,s,r){this.variableNames=["indices"],this.outputShape=[t,e],this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int index = round(getIndices(coords.x));
        setOutput(mix(float(${r}), float(${s}),
                      float(index == coords.y)));
      }
    `}}const Sq=n=>{const{inputs:t,backend:e,attrs:s}=n,{indices:r}=t,{dtype:o,depth:i,onValue:a,offValue:l}=s,c=q(r.shape),u=new Iq(c,i,a,l),h=et({inputs:{x:r},backend:e,attrs:{shape:[c]}}),d=e.runWebGLProgram(u,[h],o);e.disposeIntermediateTensorInfo(h);const f=[...r.shape,i],p=et({inputs:{x:d},backend:e,attrs:{shape:f}});return e.disposeIntermediateTensorInfo(d),p},Nq={kernelName:Ac,backendName:"webgl",kernelFunc:Sq};function Ll(n){const{inputs:t,backend:e}=n,{x:s}=t;if(s.dtype==="complex64"){const r=va({inputs:{input:s},backend:e}),o=Ll({inputs:{x:r},backend:e}),i=ku({inputs:{input:s},backend:e}),a=Ll({inputs:{x:i},backend:e}),l=Ws({inputs:{real:o,imag:a},backend:e});return e.disposeIntermediateTensorInfo(r),e.disposeIntermediateTensorInfo(o),e.disposeIntermediateTensorInfo(i),e.disposeIntermediateTensorInfo(a),l}else return Ca({attrs:{shape:s.shape,dtype:s.dtype,value:s.dtype==="string"?"":0},backend:e})}const Tq={kernelName:Kc,backendName:"webgl",kernelFunc:Ll};function Lv(n){const{inputs:t,backend:e}=n,{x:s}=t;if(s.dtype==="string")throw new Error("onesLike is not supported under string dtype");if(s.dtype==="complex64"){const r=va({inputs:{input:s},backend:e}),o=Lv({inputs:{x:r},backend:e}),i=ku({inputs:{input:s},backend:e}),a=Ll({inputs:{x:i},backend:e}),l=Ws({inputs:{real:o,imag:a},backend:e});return e.disposeIntermediateTensorInfo(r),e.disposeIntermediateTensorInfo(o),e.disposeIntermediateTensorInfo(i),e.disposeIntermediateTensorInfo(a),l}else return Ca({attrs:{shape:s.shape,dtype:s.dtype,value:1},backend:e})}const Eq={kernelName:Rc,backendName:"webgl",kernelFunc:Lv};function Rq(n){const{inputs:t,backend:e,attrs:s}=n,{axis:r}=s;if(t.length===1)return Lh({inputs:{input:t[0]},backend:e,attrs:{dim:r}});const o=t[0].shape,i=t[0].dtype;t.forEach(u=>{Kh(o,u.shape,"All tensors passed to stack must have matching shapes"),S(i===u.dtype,()=>"All tensors passed to stack must have matching dtypes")});const a=[],l=t.map(u=>{const h=Lh({inputs:{input:u},backend:e,attrs:{dim:r}});return a.push(h),h}),c=Cv({inputs:l,backend:e,attrs:{axis:r}});return a.forEach(u=>e.disposeIntermediateTensorInfo(u)),c}const Aq={kernelName:Dc,backendName:"webgl",kernelFunc:Rq};class Dq{constructor(t,e,s){this.variableNames=["x"],this.customUniforms=[{name:"value",type:"float"}],this.outputShape=e.map((c,u)=>c[0]+t[u]+c[1]);const r=t.length,o=Ft(r),i=e.map(c=>c[0]).join(","),a=e.map((c,u)=>c[0]+t[u]).join(","),l=["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,r);if(r===1){this.userCode=`
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
    `}}class _q{constructor(t,e,s){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"value",type:"float"}],this.outputShape=e.map((m,g)=>m[0]+t[g]+m[1]);const r=t.length,o=Ft(r),i=e.map(m=>m[0]).join(","),a=e.map((m,g)=>m[0]+t[g]).join(","),l=Re("rc",r),c=Re("source",r),u=`${l[r-1]} < ${this.outputShape[r-1]}`,h=r===1?"source":`vec2(${c.slice(-2).join()})`,d=[`${o} rc = outputLoc;`,`${l[r-1]} += 1;
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
    `}}const Pv=n=>{const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{paddings:o,constantValue:i}=s;if(q(r.shape)===0){const c=o.map((u,h)=>u[0]+r.shape[h]+u[1]);return Ca({backend:e,attrs:{shape:c,value:i,dtype:r.dtype}})}const a=W().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new _q(r.shape,o,i):new Dq(r.shape,o,i),l=[[i]];return e.runWebGLProgram(a,[r],r.dtype,l)},Fq={kernelName:_c,backendName:"webgl",kernelFunc:Pv};const Oq=`
  if(a < 0.0 && floor(b) < b){
    return NAN;
  }
  if (b == 0.0) {
    return 1.0;
  }
  return (round(mod(b, 2.0)) != 1) ?
      pow(abs(a), b) : sign(a) * pow(abs(a), b);
`,Mq=`
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
  `+Tr+`
  return result;
`,Lq=ve({opSnippet:Oq,packedOpSnippet:Mq}),Pq={kernelName:Mi,backendName:"webgl",kernelFunc:Lq};function zq(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{axis:o,keepDims:i}=s,a=r.shape.length,l=[],c=vt(o,r.shape);let u=c;const h=jt(u,a);let d=r;h!=null&&(d=De({inputs:{x:r},backend:e,attrs:{perm:h}}),u=Jt(u.length,a),l.push(d)),we("prod",u,a);let f;if(e.shouldExecuteOnCPU([d])){const p=e.texData.get(d.dataId).values,{outVals:m,outShape:g,outDtype:x}=LB(d.shape,d.dtype,p,u);f=e.makeTensorInfo(g,x,m)}else{const[p,m]=me(d.shape,u),g=q(m),x=et({inputs:{x:d},backend:e,attrs:{shape:[-1,g]}}),b=zd(r.dtype),w=Er(x,b,"prod",e);f=et({inputs:{x:w},backend:e,attrs:{shape:p}}),l.push(x),l.push(w)}if(i){l.push(f);const p=ne(f.shape,c);f=et({inputs:{x:f},backend:e,attrs:{shape:p}})}return l.forEach(p=>e.disposeIntermediateTensorInfo(p)),f}const Bq={kernelName:Oc,backendName:"webgl",kernelFunc:zq};function Vq(n){const{inputs:t,backend:e,attrs:s}=n,{paramsNestedSplits:r,paramsDenseValues:o,indices:i}=t,{outputRaggedRank:a}=s,l=r.map(x=>e.readSync(x.dataId)),c=r.map(x=>x.shape),u=e.readSync(o.dataId),h=e.readSync(i.dataId),[d,f,p]=PB(l,c,u,o.shape,o.dtype,h,i.shape,a),m=d.map(x=>e.makeTensorInfo([x.length],"int32",x)),g=e.makeTensorInfo(p,o.dtype,f);return m.concat([g])}const Wq={kernelName:yx,backendName:"webgl",kernelFunc:Vq};function Uq(n){const{inputs:t,backend:e}=n,{starts:s,limits:r,deltas:o}=t,i=e.readSync(s.dataId),a=e.readSync(r.dataId),l=e.readSync(o.dataId),[c,u]=zB(i,s.shape,s.dtype,a,r.shape,l,o.shape),h=e.makeTensorInfo([c.length],"int32",c),d=e.makeTensorInfo([u.length],s.dtype,u);return[h,d]}const Gq={kernelName:wx,backendName:"webgl",kernelFunc:Uq};function Hq(n){const{inputs:t,backend:e,attrs:s}=n,{shape:r,values:o,defaultValue:i,rowPartitionTensors:a}=t,{rowPartitionTypes:l}=s,c=e.readSync(r.dataId),u=e.readSync(o.dataId),h=e.readSync(i.dataId),d=a.map(g=>e.readSync(g.dataId)),f=a.map(g=>g.shape),[p,m]=BB(c,r.shape,u,o.shape,o.dtype,h,i.shape,d,f,l);return e.makeTensorInfo(p,o.dtype,m)}const qq={kernelName:vx,backendName:"webgl",kernelFunc:Hq};const zv=n=>{const{backend:t,attrs:e}=n,{start:s,stop:r,step:o,dtype:i}=e,a=VB(s,r,o,i);return t.makeTensorInfo([a.length],i,a)},jq={kernelName:Td,backendName:"webgl",kernelFunc:zv};const Kq="return 1.0 / x;",Xq=It({opSnippet:Kq}),Yq={kernelName:Li,backendName:"webgl",kernelFunc:Xq};const Zq=pn+`
  return (x < 0.0) ? 0.0 : x;
`,Jq=`
  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,Qq=It({opSnippet:Zq,packedOpSnippet:Jq}),t6={kernelName:Pi,backendName:"webgl",kernelFunc:Qq};const e6=pn+`
  return (x < 0.0) ? 0.0 : min(6.0, x);
`,n6=`
  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,s6=It({opSnippet:e6,packedOpSnippet:n6}),r6={kernelName:zi,backendName:"webgl",kernelFunc:s6};class o6{constructor(t,e,s,r,o){this.variableNames=["A"],this.outputShape=[];const[i,a,l,c]=t;this.outputShape=[i,e,s,c];const u=[r&&e>1?a-1:a,r&&s>1?l-1:l],h=[r&&e>1?e-1:e,r&&s>1?s-1:s];let d;o?d="(vec2(yRC) + vec2(0.5)) * effectiveInputOverOutputRatioRC - vec2(0.5)":d="vec2(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`
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
    `}}class i6{constructor(t,e,s,r,o){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[];const[i,a,l,c]=t;this.outputShape=[i,e,s,c];const u=[r&&e>1?a-1:a,r&&s>1?l-1:l],h=[r&&e>1?e-1:e,r&&s>1?s-1:s];let d;o?d="(vec3(yRC) + vec3(0.5)) * effectiveInputOverOutputRatioRC - vec3(0.5)":d="vec3(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`
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
    `}}function a6(n){const{inputs:t,backend:e,attrs:s}=n,{images:r}=t,{alignCorners:o,halfPixelCenters:i,size:a}=s,[l,c]=a,u=W().getBool("WEBGL_PACK_IMAGE_OPERATIONS")?new i6(r.shape,l,c,o,i):new o6(r.shape,l,c,o,i);return e.runWebGLProgram(u,[r],"float32")}const l6={kernelName:Pc,backendName:"webgl",kernelFunc:a6};class c6{constructor(t,e,s){this.variableNames=["dy"],this.outputShape=[],this.outputShape=e;const[,r,o]=e,[,i,a]=t,l=[s&&i>1?r-1:r,s&&a>1?o-1:o],c=[s&&i>1?i-1:i,s&&a>1?a-1:a],u=l[0]/c[0],h=l[1]/c[1],d=1/u,f=1/h,p=Math.ceil(d)*2+2,m=Math.ceil(f)*2+2;this.userCode=`
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
    `}}function u6(n){const{inputs:t,backend:e,attrs:s}=n,{images:r,dy:o}=t,{alignCorners:i}=s,a=new c6(o.shape,r.shape,i);return e.runWebGLProgram(a,[o],o.dtype)}const h6={kernelName:Ad,backendName:"webgl",kernelFunc:u6};class d6{constructor(t,e,s,r,o){this.variableNames=["A"],this.outputShape=[];const[i,a,l,c]=t;this.outputShape=[i,e,s,c];const u=[r&&e>1?a-1:a,r&&s>1?l-1:l],h=[r&&e>1?e-1:e,r&&s>1?s-1:s],d=r?"0.5":"0.0";let f;o?f="max((vec2(yRC) + vec2(0.5)) * effectiveInputOverOutputRatioRC, vec2(0.0))":f="vec2(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`
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
    `}}class f6{constructor(t,e,s,r,o){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[];const[i,a,l,c]=t;this.outputShape=[i,e,s,c];const u=[r&&e>1?a-1:a,r&&s>1?l-1:l],h=[r&&e>1?e-1:e,r&&s>1?s-1:s],d=r?"0.5":"0.0";let f;o?f="max((vec3(yRC) + vec3(0.5)) * effectiveInputOverOutputRatioRC, vec3(0.0))":f="vec3(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`
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
    `}}function p6(n){const{inputs:t,backend:e,attrs:s}=n,{images:r}=t,{alignCorners:o,halfPixelCenters:i,size:a}=s,[l,c]=a,u=W().getBool("WEBGL_PACK_IMAGE_OPERATIONS")?new f6(r.shape,l,c,o,i):new d6(r.shape,l,c,o,i);return e.runWebGLProgram(u,[r],r.dtype)}const m6={kernelName:Lc,backendName:"webgl",kernelFunc:p6};class g6{constructor(t,e,s){this.variableNames=["dy"],this.outputShape=[],this.outputShape=e;const[,r,o]=e,[,i,a]=t,l=[s&&i>1?r-1:r,s&&a>1?o-1:o],c=[s&&i>1?i-1:i,s&&a>1?a-1:a],u=l[0]/c[0],h=l[1]/c[1],d=1/u,f=1/h,p=Math.ceil(d)*2+2,m=Math.ceil(f)*2+2;this.userCode=`
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
    `}}function x6(n){const{inputs:t,backend:e,attrs:s}=n,{images:r,dy:o}=t,{alignCorners:i}=s,a=new g6(o.shape,r.shape,i);return e.runWebGLProgram(a,[o],o.dtype)}const b6={kernelName:Rd,backendName:"webgl",kernelFunc:x6};class y6{constructor(t,e){this.variableNames=["x"];const s=t.length;if(s>4)throw new Error(`WebGL backend: Reverse of rank-${s} tensor is not yet supported`);if(this.outputShape=t,s===1){this.userCode=`
        void main() {
          int coord = getOutputCoords();
          setOutput(getX(${t[0]} - coord - 1));
        }
      `;return}const r=a=>e.indexOf(a)!==-1&&t[a]!==1?`${t[a]} - coords[${a}] - 1`:`coords[${a}]`,o=t.map((a,l)=>r(l)).join(","),i=Ft(s);this.userCode=`
      void main() {
        ${i} coords = getOutputCoords();
        setOutput(getX(${o}));
      }
    `}}class w6{constructor(t,e){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0;const s=t.length;if(s>4)throw new Error(`WebGL backend: Reverse of rank-${s} tensor is not yet supported`);this.outputShape=t;const r=Re("rc",s),o=`${r[s-1]} + 1 < ${this.outputShape[s-1]}`,i=`${r[s-2]} + 1 < ${this.outputShape[s-2]}`,a=Ft(s);s===1?this.userCode=`
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
    `;function l(p){return d(p)}function c(p){return p[s-1]="("+p[s-1]+" + 1)",d(p)}function u(p){return p[s-2]="("+p[s-2]+" + 1)",d(p)}function h(p){return p[s-1]="("+p[s-1]+" + 1)",p[s-2]="("+p[s-2]+" + 1)",d(p)}function d(p){const m=t.map((b,w)=>f(w,p)),g=m.join(","),x=m.slice(-2).join(",");return`getChannel(getX(${g}), vec2(${x}))`}function f(p,m){return e.indexOf(p)!==-1&&t[p]!==1?`${t[p]} - ${m[p]} - 1`:`${m[p]}`}}}function v6(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{dims:o}=s,i=r.shape.length,a=vt(o,r.shape);if(i===0)return je({inputs:{x:r},backend:e});const l=W().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new w6(r.shape,a):new y6(r.shape,a);return e.runWebGLProgram(l,[r],r.dtype)}const C6={kernelName:zc,backendName:"webgl",kernelFunc:v6};class $6{constructor(t,e){this.variableNames=["Image"],this.outputShape=[],this.customUniforms=[{name:"params",type:"vec4"}];const s=t[1],r=t[2];this.outputShape=t;let o="";typeof e=="number"?o=`float outputValue = ${e.toFixed(2)};`:o=`
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
    `}}const k6={kernelName:Pd,backendName:"webgl",kernelFunc:({inputs:n,attrs:t,backend:e})=>{const{image:s}=n,{radians:r,fillValue:o,center:i}=t,a=e,l=new $6(s.shape,o),[c,u]=Tf(i,s.shape[1],s.shape[2]),h=[[c,u,Math.sin(r),Math.cos(r)]];return a.runWebGLProgram(l,[s],s.dtype,h)}};const I6=`
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
`,S6=It({opSnippet:I6}),N6={kernelName:Bi,backendName:"webgl",kernelFunc:S6};const T6="return inversesqrt(x);",E6=It({opSnippet:T6,cpuKernelImpl:WB}),R6={kernelName:Vi,backendName:"webgl",kernelFunc:E6};class Rp{constructor(t,e,s,r,o,i,a=!0,l=!1){this.variableNames=["updates","indices","defaultValue"],this.outputShape=i;const c=Ft(o.length),u=Ft(i.length);let h="";s===1?h="i":s===2&&(h="i, j");const d=`getIndices(${h})`;let f="";r===1?f="i":r===2&&(f="i, coords[1]");const p=`getUpdates(${f})`;let m="";l&&(m="coords[0], coords[1]");const g=`getDefaultValue(${m})`,x=e>1?"strides[j]":"strides";this.userCode=`
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
      `}}class A6{constructor(t,e,s,r,o,i,a=!0,l=!1){this.variableNames=["updates","indices","defaultValue"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=i;const c=Ft(o.length),u=Ft(i.length);let h="";s===1?h="i":s===2&&(h="i, j");const d=`getIndices(${h})`;let f="";r===1?f="i":r===2&&(f="i, coords[1]");const p=`getUpdates(${f})`;let m="";l&&(m="coords[0], coords[1]");const g=`getDefaultValue(${m})`,x=e>1?"strides[j]":"strides",b=e>1?"strides[j + 1]":"strides";this.userCode=`
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
      `}}function D6(n){const{inputs:t,backend:e,attrs:s}=n,{indices:r,updates:o}=t,{shape:i}=s,{sliceRank:a,numUpdates:l,sliceSize:c,strides:u,outputSize:h}=$r(o,r,i),d=[h/c,c];if(h===0)return e.makeTensorInfo(i,r.dtype);const f=et({inputs:{x:r},backend:e,attrs:{shape:[l,a]}}),p=et({inputs:{x:o},backend:e,attrs:{shape:[l,c]}}),m=e.makeTensorInfo([],"float32",new Float32Array([0]));let g;W().getBool("WEBGL_PACK")?g=new A6(l,a,f.shape.length,p.shape.length,u,d):g=new Rp(l,a,f.shape.length,p.shape.length,u,d);const x=e.runWebGLProgram(g,[p,f,m],p.dtype),b=et({inputs:{x},backend:e,attrs:{shape:i}});return e.disposeIntermediateTensorInfo(f),e.disposeIntermediateTensorInfo(p),e.disposeIntermediateTensorInfo(x),e.disposeIntermediateTensorInfo(m),b}const _6={kernelName:Cx,backendName:"webgl",kernelFunc:D6};class F6{constructor(t,e,s,r){this.variableNames=["sortedSequence","values"],this.customUniforms=[{name:"numInputs",type:"int"}],this.outputShape=[t,s];const o="while (left < right) {",i=`for (int i = 0; i < ${Math.ceil(Math.log2(e+1))}; ++i) { if (left >= right) break;`,a=W().getNumber("WEBGL_VERSION")===2?o:i,l=r==="left"?"<":"<=";this.userCode=`
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
     `}}function O6(n){const{inputs:t,backend:e,attrs:s}=n,{sortedSequence:r,values:o}=t,{side:i}=s,a=new F6(r.shape[0],r.shape[1],o.shape[1],i),l=[[r.shape[1]]];return e.runWebGLProgram(a,[r,o],"int32",l)}const M6={kernelName:kx,backendName:"webgl",kernelFunc:O6};class L6{constructor(t,e,s){this.variableNames=["c","a","b"],this.outputShape=e;let r,o;if(s>4)throw Error(`Where for rank ${s} is not yet supported`);if(s===1)o="resRC",r="resRC";else{const a=["resRC.x","resRC.y","resRC.z","resRC.w"],l=[],c=[];for(let u=0;u<e.length;u++)c.push(`${a[u]}`),u<t&&l.push(`${a[u]}`);r=l.join(),o=c.join()}const i=Ft(s);this.userCode=`
      void main() {
        ${i} resRC = getOutputCoords();
        float cVal = getC(${r});
        if (cVal >= 1.0) {
          setOutput(getA(${o}));
        } else {
          setOutput(getB(${o}));
        }
      }
    `}}function P6(n){const{inputs:t,backend:e}=n,{condition:s,t:r,e:o}=t,i=new L6(s.shape.length,r.shape,r.shape.length);return e.runWebGLProgram(i,[s,r,o],He(r.dtype,o.dtype))}const z6={kernelName:Bc,backendName:"webgl",kernelFunc:P6};const B6=`
  // Stable and Attracting Fixed Point (0, 1) for Normalized Weights.
  // see: https://arxiv.org/abs/1706.02515
  float scaleAlpha = ${iu};
  float scale = ${au};
  return (x >= 0.0) ? scale * x : scaleAlpha * (exp(x) - 1.0);
`,V6=It({opSnippet:B6}),W6={kernelName:Wi,backendName:"webgl",kernelFunc:V6};const U6=vo+`
  return 1.0 / (1.0 + exp(-1.0 * x));
`,G6=`
  vec4 result = 1.0 / (1.0 + exp(-1.0 * x));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,H6=It({opSnippet:U6,packedOpSnippet:G6,cpuKernelImpl:GB}),q6={kernelName:qi,backendName:"webgl",kernelFunc:H6};const j6=`
  if (isnan(x)) { return 0.0; }
  return sign(x);
`,K6=It({opSnippet:j6}),X6={kernelName:Hi,backendName:"webgl",kernelFunc:K6};const Y6=vo+`
  return sin(x);
`,Z6=`
  vec4 result = sin(x);
  bvec4 isNaN = isnan(x);
  ${Tr}
  return result;
`,J6=It({opSnippet:Y6,packedOpSnippet:Z6}),Q6={kernelName:Ui,backendName:"webgl",kernelFunc:J6};const tj=`
  float e2x = exp(x);
  return (e2x - 1.0 / e2x) / 2.0;
`,ej=It({opSnippet:tj}),nj={kernelName:Gi,backendName:"webgl",kernelFunc:ej};const sj=`
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
`,rj=It({opSnippet:sj}),oj={kernelName:ji,backendName:"webgl",kernelFunc:rj};const ij=n=>{const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{blockShape:o,paddings:i}=s;S(r.shape.length<=4,()=>"spaceToBatchND for rank > 4 with a WebGL backend not implemented yet");const a=o.reduce((x,b)=>x*b),l=[[0,0]];l.push(...i);for(let x=1+o.length;x<r.shape.length;++x)l.push([0,0]);const c=[],u=Pv({inputs:{x:r},backend:e,attrs:{paddings:l,constantValue:0}}),h=ia(u.shape,o,a,!1),d=aa(h.length,o.length,!1),f=la(u.shape,o,a,!1),p=et({inputs:{x:u},backend:e,attrs:{shape:h}}),m=De({inputs:{x:p},backend:e,attrs:{perm:d}}),g=et({inputs:{x:m},backend:e,attrs:{shape:f}});return c.push(u),c.push(p),c.push(m),c.forEach(x=>e.disposeIntermediateTensorInfo(x)),g},aj={kernelName:Uc,backendName:"webgl",kernelFunc:ij};function lj(n){const{inputs:t,backend:e}=n,{indices:s,values:r,denseShape:o,defaultValue:i}=t;if(o.shape.length!==1)throw new Error(`Dense shape must be a vector, saw:
         ${o.shape}`);if(s.shape.length!==2)throw new Error(`Indices must be a matrix, saw:
         ${s.shape}`);if(r.shape.length!==1)throw new Error(`Values must be a vector, saw:
         ${r.shape}`);if(i.shape.length!==0)throw new Error(`Default value must be a scalar, saw:
        ${i.shape}`);const a=e.readSync(s.dataId),l=e.readSync(r.dataId),c=e.readSync(o.dataId),u=e.readSync(i.dataId)[0],[h,d,f,p,m]=qB(a,s.shape,s.dtype,l,r.dtype,c,u);return[e.makeTensorInfo(d,s.dtype,h),e.makeTensorInfo([d[0]],r.dtype,f),e.makeTensorInfo([p.length],"bool",new Uint8Array(p.map(g=>Number(g)))),e.makeTensorInfo([m.length],s.dtype,new Int32Array(m))]}const cj={kernelName:Ix,backendName:"webgl",kernelFunc:lj};function uj(n){const{inputs:t,backend:e}=n,{inputIndices:s,inputShape:r,newShape:o}=t;if(s.shape.length!==2)throw new Error(`Input indices should be a matrix but received shape ${s.shape}`);if(r.shape.length!==1)throw new Error(`Input shape should be a vector but received shape ${r.shape}`);if(o.shape.length!==1)throw new Error(`Target shape should be a vector but received shape ${o.shape}`);const i=Array.from(e.readSync(r.dataId)),a=e.readSync(s.dataId),l=Array.from(e.readSync(o.dataId)),[c,u,h]=jB(a,s.shape,s.dtype,i,l);return[e.makeTensorInfo(u,s.dtype,c),e.makeTensorInfo([h.length],o.dtype,new Int32Array(h))]}const hj={kernelName:Sx,backendName:"webgl",kernelFunc:uj};function dj(n){const{inputs:t,backend:e}=n,{data:s,indices:r,segmentIds:o}=t;if(s.shape.length<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(r.shape.length!==1)throw new Error(`Indices should be a vector but received shape
              ${r.shape}`);if(o.shape.length!==1)throw new Error(`Segment ids should be a vector but received shape
              ${o.shape}`);const i=e.readSync(s.dataId),a=e.readSync(r.dataId),l=e.readSync(o.dataId),[c,u]=cv(i,s.shape,s.dtype,a,l,!0);return e.makeTensorInfo(u,s.dtype,c)}const fj={kernelName:Nx,backendName:"webgl",kernelFunc:dj};function pj(n){const{inputs:t,backend:e}=n,{data:s,indices:r,segmentIds:o}=t;if(s.shape.length<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(r.shape.length!==1)throw new Error(`Indices should be a vector but received shape
             ${r.shape}`);if(o.shape.length!==1)throw new Error(`Segment ids should be a vector but received shape
             ${o.shape}`);const i=e.readSync(s.dataId),a=e.readSync(r.dataId),l=e.readSync(o.dataId),[c,u]=cv(i,s.shape,s.dtype,a,l);return e.makeTensorInfo(u,s.dtype,c)}const mj={kernelName:Tx,backendName:"webgl",kernelFunc:pj};function gj(n){const{inputs:t,backend:e,attrs:s}=n,{sparseIndices:r,sparseValues:o,defaultValue:i}=t,{outputShape:a}=s,{sliceRank:l,numUpdates:c,sliceSize:u,strides:h,outputSize:d}=$r(o,r,a),f=!1;if(o.dtype==="string"){const x=e.bufferSync(r),b=e.bufferSync(o),w=Ss(e.readSync(i.dataId)[0]),y=UB(x,b,a,d,u,c,l,h,w,f);return e.makeTensorInfo(a,y.dtype,y.values)}const p=new Rp(c,l,r.shape.length,o.shape.length,h,[d,1],f),m=e.runWebGLProgram(p,[o,r,i],o.dtype),g=et({inputs:{x:m},backend:e,attrs:{shape:a}});return e.disposeIntermediateTensorInfo(m),g}const xj={kernelName:Ex,backendName:"webgl",kernelFunc:gj};function bj(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{numOrSizeSplits:o,axis:i}=s,a=vt(i,r.shape)[0],l=Uf(r,o,a),c=r.shape.length,u=new Array(c).fill(0),h=r.shape.slice();return l.map(d=>{const f=[...h];f[a]=d;const p=Co({inputs:{x:r},backend:e,attrs:{begin:u,size:f}});return u[a]+=d,p})}const yj={kernelName:Gc,backendName:"webgl",kernelFunc:bj};const Eg="return sqrt(x);",wj=It({opSnippet:Eg,packedOpSnippet:Eg,cpuKernelImpl:KB}),vj={kernelName:Ki,backendName:"webgl",kernelFunc:wj};const Cj="return x * x;",$j=It({opSnippet:Cj}),kj={kernelName:Dd,backendName:"webgl",kernelFunc:$j};const Rg="return (a - b) * (a - b);",Ij=ve({opSnippet:Rg,packedOpSnippet:Rg}),Sj={kernelName:Xi,backendName:"webgl",kernelFunc:Ij};function Nj(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t;if(r.dtype!=="string")throw new Error("Input must be of datatype string");const o=e.readSync(r.dataId),i=ls(o),a=XB(i,"string",s);return e.makeTensorInfo(r.shape,"string",a)}const Tj={kernelName:_d,backendName:"webgl",kernelFunc:Nj};function Ej({inputs:n,attrs:t,backend:e}){const{x:s}=n,r=pn+`
    return x > 0.0 ? 1.0 : float(${t.alpha});
  `,o=new Ln(s.shape,r);return e.runWebGLProgram(o,[s],s.dtype)}const Rj={kernelName:ta,backendName:"webgl",kernelFunc:Ej};class Aj{constructor(t,e,s){this.variableNames=["x"],this.outputShape=s;const r=s.length,o=Ft(s.length),i=Ft(s.length);let a="";if(r===1)a="coords * strides + begin";else{let l=0;a=s.map((c,u)=>(l++,s.length===1?`coords * strides[${u}] + begin[${u}]`:`coords[${l-1}] * strides[${u}] + begin[${u}]`)).join(",")}this.userCode=`
      ${o} begin = ${o}(${t});
      ${o} strides = ${o}(${e});

      void main() {
        ${i} coords = getOutputCoords();
        setOutput(getX(${a}));
      }
    `}}function Dj(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{begin:o,end:i,strides:a,beginMask:l,endMask:c,ellipsisMask:u,newAxisMask:h,shrinkAxisMask:d}=s,{finalShapeSparse:f,finalShape:p,isIdentity:m,sliceDim0:g,isSimpleSlice:x,begin:b,end:w,strides:y}=If(r.shape,o,i,a,l,c,u,h,d);let v;if(m)v=et({inputs:{x:r},backend:e,attrs:{shape:p}});else if(g||x){S(r.shape.length>=1,()=>`Input must have rank at least 1, got: ${r.shape.length}`);const N=Cf(b,w,y),T=Co({inputs:{x:r},backend:e,attrs:{begin:b,size:N}});v=et({inputs:{x:T},backend:e,attrs:{shape:p}}),e.disposeIntermediateTensorInfo(T)}else if(e.shouldExecuteOnCPU([r])){const T=e.readSync(r.dataId),k=wt(r.shape,r.dtype,T),I=YB(f,k,y,b);v=e.makeTensorInfo(p,r.dtype,I.values)}else{const T=new Aj(b,y,f);v=e.runWebGLProgram(T,[r],r.dtype)}const $=et({inputs:{x:v},backend:e,attrs:{shape:p}});return e.disposeIntermediateTensorInfo(v),$}const _j={kernelName:Fd,backendName:"webgl",kernelFunc:Dj};function Fj(n){const{inputs:t,backend:e,attrs:s}=n,{separator:r,nGramWidths:o,leftPad:i,rightPad:a,padWidth:l,preserveShortSequences:c}=s,{data:u,dataSplits:h}=t,d=e.readSync(u.dataId),f=e.readSync(h.dataId),[p,m]=ZB(d,f,r,o,i,a,l,c);return[e.makeTensorInfo([p.length],"string",p),e.makeTensorInfo(h.shape,"int32",m)]}const Oj={kernelName:Rx,backendName:"webgl",kernelFunc:Fj};function Mj(n){const{inputs:t,backend:e,attrs:s}=n,{skipEmpty:r}=s,{input:o,delimiter:i}=t;if(o.dtype!=="string")throw new Error("Input must be of datatype string");if(o.shape.length!==1)throw new Error(`Input must be a vector, got shape: ${o.shape}`);if(i.shape.length!==0)throw new Error(`Delimiter must be a scalar, got shape: ${i.shape}`);const a=e.readSync(o.dataId),l=e.readSync(i.dataId)[0],[c,u,h]=JB(a,l,r),d=u.length;return[e.makeTensorInfo([d,2],"int32",c),e.makeTensorInfo([d],"string",u),e.makeTensorInfo([2],"int32",new Int32Array(h))]}const Lj={kernelName:Ax,backendName:"webgl",kernelFunc:Mj};function Pj(n){const{inputs:t,backend:e,attrs:s}=n,{numBuckets:r}=s,{input:o}=t;if(o.dtype!=="string")throw new Error("Input must be of datatype string");if(r<=0)throw new Error("Number of buckets must be at least 1");const i=e.readSync(o.dataId),a=QB(i,r);return e.makeTensorInfo(o.shape,"int32",a)}const zj={kernelName:Dx,backendName:"webgl",kernelFunc:Pj};const Bj="return tan(x);",Vj=It({opSnippet:Bj}),Wj={kernelName:Zi,backendName:"webgl",kernelFunc:Vj};const Uj=`
  float e2x = exp(-2.0 * abs(x));
  return sign(x) * (1.0 - e2x) / (1.0 + e2x);
`,Gj=It({opSnippet:Uj}),Hj={kernelName:Ji,backendName:"webgl",kernelFunc:Gj};function qj(n){const{inputs:t,backend:e,attrs:s}=n,{tensor:r,indices:o,updates:i}=t,{sliceRank:a,numUpdates:l,sliceSize:c,strides:u,outputSize:h}=$r(i,o,r.shape),d=[h/c,c];if(h===0)return e.makeTensorInfo(r.shape,o.dtype);const f=et({inputs:{x:o},backend:e,attrs:{shape:[l,a]}}),p=et({inputs:{x:i},backend:e,attrs:{shape:[l,c]}}),m=et({inputs:{x:r},backend:e,attrs:{shape:d}}),g=new Rp(l,a,f.shape.length,p.shape.length,u,d,!1,!0),x=e.runWebGLProgram(g,[p,f,m],m.dtype),b=et({inputs:{x},backend:e,attrs:{shape:r.shape}});return e.disposeIntermediateTensorInfo(f),e.disposeIntermediateTensorInfo(p),e.disposeIntermediateTensorInfo(m),e.disposeIntermediateTensorInfo(x),b}const jj={kernelName:$x,backendName:"webgl",kernelFunc:qj};class Kj{constructor(t,e){this.variableNames=["A"];const s=new Array(t.length);for(let i=0;i<s.length;i++)s[i]=t[i]*e[i];this.outputShape=s,this.rank=s.length;const r=Ft(this.rank),o=Xj(t);this.userCode=`
      void main() {
        ${r} resRC = getOutputCoords();
        setOutput(getA(${o}));
      }
    `}}function Xj(n){const t=n.length;if(t>5)throw Error(`Tile for rank ${t} is not yet supported`);if(t===1)return`imod(resRC, ${n[0]})`;const e=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u"],s=[];for(let r=0;r<n.length;r++)s.push(`imod(${e[r]}, ${n[r]})`);return s.join()}function Bv(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{reps:o}=s;if(r.dtype==="string"||r.shape.length>5){const l=e.readSync(r.dataId),c=r.dtype==="string"?l.map(d=>Ss(d)):l,u=wt(r.shape,r.dtype,c),h=eV(u,o);return e.makeTensorInfo(h.shape,h.dtype,h.values)}const i=new Kj(r.shape,o);return e.runWebGLProgram(i,[r],r.dtype)}const Yj={kernelName:Qi,backendName:"webgl",kernelFunc:Bv};class Zj{constructor(t){this.variableNames=["x","indices"],this.customUniforms=[{name:"n",type:"int"},{name:"firstPass",type:"int"},{name:"negativeInf",type:"float"},{name:"dir",type:"int"},{name:"inc",type:"int"}],this.outputShape=t,this.userCode=`
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
     `}}class Jj{constructor(t){this.variableNames=["x","indices"],this.customUniforms=[{name:"n",type:"int"},{name:"firstPass",type:"int"},{name:"k",type:"int"}],this.outputShape=t,this.userCode=`
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
     `}}function Hs(n,t){t!==null&&n.disposeIntermediateTensorInfo(t)}function Ag(n){let t=1;for(;t<n;)t*=2;return t}function Qj(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{k:o,sorted:i}=s,a=W().getNumber("TOPK_LAST_DIM_CPU_HANDOFF_SIZE_THRESHOLD"),l=W().getNumber("TOPK_K_CPU_HANDOFF_THRESHOLD"),c=r.shape,u=c[c.length-1];if(e.shouldExecuteOnCPU([r])||u<a||o>l){const I=e.readSync(r.dataId),[C,R]=nV(I,c,r.dtype,o,i);return[e.makeTensorInfo(C.shape,C.dtype,C.values),e.makeTensorInfo(R.shape,R.dtype,R.values)]}if(o===0)return c[c.length-1]=0,[e.makeTensorInfo(c,r.dtype,[]),e.makeTensorInfo(c,"int32",[])];if(u===1)return[r,Ca({attrs:{shape:c,dtype:"int32",value:0},backend:e})];const h=e.texData.get(r.dataId),d=h!==null&&h.isPacked,f=d?e.unpackTensor(r):r,m=q(c)/u,g=et({inputs:{x:f},attrs:{shape:[m,u]},backend:e});d&&Hs(e,f);const x=Ag(o),b=Ag(u);let w=null;const y=()=>w===null?[g,g]:[g,w],v=(I,C,R)=>{const A=y(),O=new Zj(R),z=[[u],[w===null?1:0],[Number.NEGATIVE_INFINITY],[I],[C]],U=w;w=e.runWebGLProgram(O,A,"int32",z),Hs(e,U)};for(let I=1;I<x;I*=2){const C=I*2;for(let R=I;R>=1;R/=2)v(C,R,[m,b])}for(let I=b;I>x;I/=2){const C=y(),R=new Jj([m,I/2]),O=[[u],[w===null?1:0],[x]],M=w;w=e.runWebGLProgram(R,C,"int32",O),Hs(e,M);const z=x/2,U=z*2;for(let B=z;B>=1;B/=2)v(U,B,w.shape)}let $=w;w=Co({inputs:{x:w},backend:e,attrs:{begin:0,size:[m,o]}}),Hs(e,$);let N=Dv({inputs:{x:g,indices:w},backend:e,attrs:{axis:1,batchDims:1}});Hs(e,g);const T=c.slice(0,-1);T.push(o),$=w,w=et({inputs:{x:w},attrs:{shape:T},backend:e}),Hs(e,$);const k=N;return N=et({inputs:{x:N},attrs:{shape:T},backend:e}),Hs(e,k),[N,w]}const tK={kernelName:Od,backendName:"webgl",kernelFunc:Qj};class eK{constructor(t,e,s,r,o,i){this.variableNames=["Image","Transforms"],this.outputShape=i;const a=s==="nearest"?1:2;let l;switch(r){case"constant":l=1;break;case"reflect":l=2;break;case"wrap":l=3;break;case"nearest":l=4;break;default:l=1;break}this.userCode=`
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
        `}}function nK(n){const{inputs:t,backend:e,attrs:s}=n,{image:r,transforms:o}=t,{interpolation:i,fillMode:a,fillValue:l,outputShape:c}=s,[u,h,d,f]=r.shape,[p,m]=c??[h,d],g=[u,p,m,f],x=new eK(h,d,i,a,l,g);return e.runWebGLProgram(x,[r,o],"float32")}const sK={kernelName:Md,backendName:"webgl",kernelFunc:nK};function rK(n){const{inputs:t,attrs:e,backend:s}=n,{axis:r}=e,{x:o}=t;ya(o,"unique"),console.warn("WARNING: ","UI might be locked temporarily as data is being downloaded");const i=s.readSync(o.dataId),{outputValues:a,outputShape:l,indices:c}=sV(i,r,o.shape,o.dtype);return[s.makeTensorInfo(l,o.dtype,a),s.makeTensorInfo([c.length],"int32",c)]}const oK={kernelName:Ld,backendName:"webgl",kernelFunc:rK};function iK(n){const{inputs:t,backend:e,attrs:s}=n,{value:r}=t;let{axis:o}=s;o<0&&(o+=r.shape.length);const i=r,a=i.shape.length,l=r.shape[o],c=new Array(a-1);let u=0;for(let m=0;m<a;m++)m!==o&&(c[u++]=i.shape[m]);const h=[],d=new Array(a).fill(0),f=i.shape.slice();f[o]=1;const p=new Array(l);for(let m=0;m<p.length;m++){d[o]=m;const g=Co({inputs:{x:i},backend:e,attrs:{begin:d,size:f}}),x=et({inputs:{x:g},backend:e,attrs:{shape:c}});p[m]=x,h.push(g)}return h.forEach(m=>e.disposeIntermediateTensorInfo(m)),p}const aK={kernelName:qc,backendName:"webgl",kernelFunc:iK};class lK{constructor(t,e){this.variableNames=["x","segmentIds"];const s=t.windowSize,r=t.batchSize,o=t.inSize,i=t.numSegments,a=i*Math.ceil(o/s);this.outputShape=[r,a];const l="0.0",c="sumValue",u=Math.floor(s/4)*4,h=s%4,d=`
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
    `}}function cK(n){const{inputs:t,backend:e,attrs:s}=n,{x:r,segmentIds:o}=t,{numSegments:i}=s,a=r.shape.length,l=[];let c=0;const u=jt([c],a);let h=r;u!=null&&(h=De({inputs:{x:r},backend:e,attrs:{perm:u}}),l.push(h),c=Jt(1,a)[0]);const d=vb(h.shape,c,i),f=q([h.shape[c]]),p=et({inputs:{x:h},backend:e,attrs:{shape:[-1,f]}});l.push(p);const m=zd(r.dtype),g=(y,v,$,N,T)=>{const k=y.shape[0],I=y.shape[1],C=wb(I,T),R={windowSize:C,inSize:I,batchSize:k,numSegments:T},A=new lK(R,v),O=e.compileAndRun(A,[y,$],N);if(l.push(O),O.shape[1]===T)return O;const M=zv({backend:e,attrs:{start:0,stop:T,step:1,dtype:"float32"}}),z=Bv({inputs:{x:M},backend:e,attrs:{reps:[I/C]}});return l.push(M),l.push(z),g(O,v,z,N,T)},x=g(p,"unsortedSegmentSum",o,m,i),b=et({inputs:{x},backend:e,attrs:{shape:d}});let w=b;if(u!=null){l.push(b);const y=Ms(u);w=De({inputs:{x:w},backend:e,attrs:{perm:y}})}return l.forEach(y=>e.disposeIntermediateTensorInfo(y)),w}const uK={kernelName:jc,backendName:"webgl",kernelFunc:cK};const hK=[KV,YV,QV,n4,r4,a4,c4,h4,m4,x4,w4,$4,S4,R4,_4,O4,L4,V4,U4,H4,X4,nW,rW,lW,uW,gW,bW,CW,AV,IW,RW,FW,BW,UW,HW,jW,XW,QW,nU,oU,aU,cU,hU,pU,gU,wU,CU,IU,TU,RU,FU,PU,WU,HU,KU,XU,ZU,QU,eG,sG,oG,cG,dG,mG,xG,wG,$G,NG,AG,RV,_G,TW,MG,zG,WG,_V,qG,YG,JG,nH,oH,cH,dH,gH,wH,$H,IH,EH,AH,_H,LH,zH,VH,UH,HH,XH,QH,sq,hq,MV,mq,bq,vq,kq,dW,Nq,Eq,Aq,Fq,Pq,OV,Bq,Wq,Gq,qq,jq,fW,aq,Yq,t6,r6,PV,l6,h6,m6,b6,C6,k6,N6,R6,_6,M6,z6,W6,q6,X6,Q6,nj,tW,cq,oj,aj,cj,hj,fj,mj,xj,yj,vj,kj,Sj,Tj,Rj,_j,Oj,Lj,zj,lq,HV,Wj,Hj,jj,Yj,tK,sK,qV,oK,aK,uK,Tq];for(const n of hK)Fx(n);function dK(){let n=0,t=0;for(;n===0;)n=Math.random();for(;t===0;)t=Math.random();return Math.sqrt(-2*Math.log(n))*Math.cos(2*Math.PI*t)}function fK(n){return Array.from({length:n},dK)}function pK(n){const t=n.length,e=Array.from({length:t},()=>Array(t).fill(0));for(let s=0;s<t;s++)for(let r=0;r<=s;r++){let o=n[s][r];for(let i=0;i<r;i++)o-=e[s][i]*e[r][i];s===r?e[s][r]=Math.sqrt(o):e[s][r]=o/e[r][r]}return e}function mK(n,t){const e=n.length,s=Array(e).fill(0);for(let r=0;r<e;r++)for(let o=0;o<=r;o++)s[r]+=n[r][o]*t[o];return s}function gK(n,t){return n.map((e,s)=>e+t[s])}function Vv(n,t,e=1){if(e==1){const s=n.length,r=pK(t),o=fK(s),i=mK(r,o);return gK(i,n)}else{const s=[];for(let r=0;r<e;r++){const o=Vv(n,t);s.push(o)}return Br(s)}}function Wv(n,t,e,s,r){const o=new Worker(n,{type:"module"}),i=r?{...e,streaming:!0}:e;return o.onmessage=a=>{const{type:l}=a.data;l==="step"&&r?r(a.data.step,a.data.x_t):l==="result"?s(a.data.allSamples,a.data.guidance):l==="status"?console.log("Worker status:",a.data.message):l==="error"&&console.error("Worker error:",a.data.error)},o.postMessage({type:t,data:i}),o}function Uv(n,t,e,s,r,o,i,a=null,l={},c){return Wv(n,"sample_from_initial_points",{modelJSONPath:t,trainingObjective:e,modelConfig:s,initialPoints:r,numberOfSteps:o,domainRange:a,options:l},i,c)}function xK(n,t,e,s,r,o,i,a=.5,l={}){return Wv(n,"vector_field_grid",{modelJSONPath:t,trainingObjective:e,modelConfig:s,gridResolution:r,timeValue:a,domainRange:o,options:l},i)}new URL("./workers/sampling.worker.ts",import.meta.url).href;new URL("./workers/train.worker.ts",import.meta.url).href;function bK(n,t){const e=[],{xMin:s,xMax:r,yMin:o,yMax:i}=t;for(let a=0;a<n;a++)for(let l=0;l<n;l++){const c=s+(r-s)*(a/(n-1)),u=o+(i-o)*(l/(n-1));e.push([c,u])}return e}function yK(n){return V(()=>{const t=[0,0],e=[[1,0],[0,1]],r=2*Math.sqrt(2);let o=[],i=0;const a=10,l=Math.ceil(n*1.5);for(;o.length<n&&i<a;){i++;const u=Vv(t,e,l).arraySync(),h=WC(u,r);o=o.concat(h)}return o.slice(0,n)})}async function KY(n,t){try{const o=[...(await(await fetch(n)).json()).points];for(let i=o.length-1;i>0;i--){const a=Math.floor(Math.random()*(i+1));[o[i],o[a]]=[o[a],o[i]]}return o.slice(0,t)}catch(e){return console.error("Failed to load target distribution:",e),null}}async function XY(n){try{const t=await fetch(n);if(!t.ok)return console.log("Cached trajectories file not found:",n),null;const e=await t.json();return!e||!Array.isArray(e)?(console.error("Invalid cached trajectories format from file: ",n),null):e.length>0&&e[0]?{trajectories:e,sourceDistribution:e[0]}:(console.error("Cached trajectories array is empty"),null)}catch(t){return console.log("Could not load cached trajectories:",t),null}}async function YY(n){try{const t=await fetch(n);if(!t.ok)return console.log("Cached vector field file not found:",n),null;const e=await t.json();return!e||typeof e.gridResolution!="number"||!Array.isArray(e.timeSteps)||!Array.isArray(e.velocities)?(console.error("Invalid cached vector field format"),null):e}catch(t){return console.log("Could not load cached vector field:",t),null}}async function ZY(n){try{const t=await fetch(n);if(!t.ok)return console.log("Cached rectified flow file not found:",n),null;const e=await t.json();return!e||!Array.isArray(e.allRectifiedTrajectories)||typeof e.modelPath!="string"?(console.error("Invalid cached rectified flow format"),null):e}catch(t){return console.log("Could not load cached rectified flow:",t),null}}async function Ap(n){const t=n.endsWith(".json")?n:n.endsWith("/")?`${n}model.json`:`${n}/model.json`;try{const e=await fetch(t);if(!e.ok)throw new Error(`Model not found at path: ${n} (HTTP ${e.status} for ${t})`);const s=await e.json();if(!s.modelTopology&&!s.weightsManifest)throw new Error(`Invalid model.json format at: ${t}`)}catch(e){throw e instanceof Error&&e.message.startsWith("Model not found")?e:new Error(`Failed to validate model at path: ${n} - ${e instanceof Error?e.message:"Unknown error"}`)}}async function JY(n,t,e,s,r){await Ap(n);const o=s.modelConfig,i=yK(t);return new Promise(a=>{Uv(r,n,"Flow Matching",o,i,e,l=>{console.log("Generated samples:",l.length),a({allTimeSamples:l,sourceDistribution:l[0]})},s.domainRange)})}async function QY(n,t,e,s,r,o){await Ap(n);const i=r.modelConfig,a=bK(t,e);return new Promise(l=>{Uv(o,n,"Flow Matching",i,a,s,c=>{console.log("Generated uniform grid samples:",c.length,"timesteps"),l({allTimeSamples:c,sourceDistribution:c[0]})},e)})}async function t7(n,t,e,s,r,o){await Ap(n),console.log("Generating vector field...");const i=r.modelConfig,a=[];for(let h=0;h<e;h++)a.push(h/(e-1));const l=[];let c=[];for(let h=0;h<a.length;h++){const d=a[h];console.log(`Sampling vector field at t=${d.toFixed(2)}...`);const f=await new Promise(p=>{const m=xK(o,n,"Flow Matching",i,t,s,g=>{p({velocities:g})},d);m.onmessage=g=>{g.data.type==="result"&&p({velocities:g.data.velocities,gridPoints:g.data.gridPoints})}});l.push(f.velocities),h===0&&f.gridPoints&&(c=f.gridPoints)}const u={gridResolution:t,timeSteps:a,domainRange:s,velocities:l,gridPoints:c};return console.log("Vector field generation complete:",l.length,"timesteps"),u}function rl(n,t){return n==null||t==null?NaN:n<t?-1:n>t?1:n>=t?0:NaN}function wK(n,t){return n==null||t==null?NaN:t<n?-1:t>n?1:t>=n?0:NaN}function Gv(n){let t,e,s;n.length!==2?(t=rl,e=(a,l)=>rl(n(a),l),s=(a,l)=>n(a)-l):(t=n===rl||n===wK?n:vK,e=n,s=n);function r(a,l,c=0,u=a.length){if(c<u){if(t(l,l)!==0)return u;do{const h=c+u>>>1;e(a[h],l)<0?c=h+1:u=h}while(c<u)}return c}function o(a,l,c=0,u=a.length){if(c<u){if(t(l,l)!==0)return u;do{const h=c+u>>>1;e(a[h],l)<=0?c=h+1:u=h}while(c<u)}return c}function i(a,l,c=0,u=a.length){const h=r(a,l,c,u-1);return h>c&&s(a[h-1],l)>-s(a[h],l)?h-1:h}return{left:r,center:i,right:o}}function vK(){return 0}function CK(n){return n===null?NaN:+n}const $K=Gv(rl),kK=$K.right;Gv(CK).center;const IK=Math.sqrt(50),SK=Math.sqrt(10),NK=Math.sqrt(2);function Pl(n,t,e){const s=(t-n)/Math.max(0,e),r=Math.floor(Math.log10(s)),o=s/Math.pow(10,r),i=o>=IK?10:o>=SK?5:o>=NK?2:1;let a,l,c;return r<0?(c=Math.pow(10,-r)/i,a=Math.round(n*c),l=Math.round(t*c),a/c<n&&++a,l/c>t&&--l,c=-c):(c=Math.pow(10,r)*i,a=Math.round(n/c),l=Math.round(t/c),a*c<n&&++a,l*c>t&&--l),l<a&&.5<=e&&e<2?Pl(n,t,e*2):[a,l,c]}function TK(n,t,e){if(t=+t,n=+n,e=+e,!(e>0))return[];if(n===t)return[n];const s=t<n,[r,o,i]=s?Pl(t,n,e):Pl(n,t,e);if(!(o>=r))return[];const a=o-r+1,l=new Array(a);if(s)if(i<0)for(let c=0;c<a;++c)l[c]=(o-c)/-i;else for(let c=0;c<a;++c)l[c]=(o-c)*i;else if(i<0)for(let c=0;c<a;++c)l[c]=(r+c)/-i;else for(let c=0;c<a;++c)l[c]=(r+c)*i;return l}function Ph(n,t,e){return t=+t,n=+n,e=+e,Pl(n,t,e)[2]}function EK(n,t,e){t=+t,n=+n,e=+e;const s=t<n,r=s?Ph(t,n,e):Ph(n,t,e);return(s?-1:1)*(r<0?1/-r:r)}var RK={value:()=>{}};function Hv(){for(var n=0,t=arguments.length,e={},s;n<t;++n){if(!(s=arguments[n]+"")||s in e||/[\s.]/.test(s))throw new Error("illegal type: "+s);e[s]=[]}return new ol(e)}function ol(n){this._=n}function AK(n,t){return n.trim().split(/^|\s+/).map(function(e){var s="",r=e.indexOf(".");if(r>=0&&(s=e.slice(r+1),e=e.slice(0,r)),e&&!t.hasOwnProperty(e))throw new Error("unknown type: "+e);return{type:e,name:s}})}ol.prototype=Hv.prototype={constructor:ol,on:function(n,t){var e=this._,s=AK(n+"",e),r,o=-1,i=s.length;if(arguments.length<2){for(;++o<i;)if((r=(n=s[o]).type)&&(r=DK(e[r],n.name)))return r;return}if(t!=null&&typeof t!="function")throw new Error("invalid callback: "+t);for(;++o<i;)if(r=(n=s[o]).type)e[r]=Dg(e[r],n.name,t);else if(t==null)for(r in e)e[r]=Dg(e[r],n.name,null);return this},copy:function(){var n={},t=this._;for(var e in t)n[e]=t[e].slice();return new ol(n)},call:function(n,t){if((r=arguments.length-2)>0)for(var e=new Array(r),s=0,r,o;s<r;++s)e[s]=arguments[s+2];if(!this._.hasOwnProperty(n))throw new Error("unknown type: "+n);for(o=this._[n],s=0,r=o.length;s<r;++s)o[s].value.apply(t,e)},apply:function(n,t,e){if(!this._.hasOwnProperty(n))throw new Error("unknown type: "+n);for(var s=this._[n],r=0,o=s.length;r<o;++r)s[r].value.apply(t,e)}};function DK(n,t){for(var e=0,s=n.length,r;e<s;++e)if((r=n[e]).name===t)return r.value}function Dg(n,t,e){for(var s=0,r=n.length;s<r;++s)if(n[s].name===t){n[s]=RK,n=n.slice(0,s).concat(n.slice(s+1));break}return e!=null&&n.push({name:t,value:e}),n}var zh="http://www.w3.org/1999/xhtml";const _g={svg:"http://www.w3.org/2000/svg",xhtml:zh,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function Iu(n){var t=n+="",e=t.indexOf(":");return e>=0&&(t=n.slice(0,e))!=="xmlns"&&(n=n.slice(e+1)),_g.hasOwnProperty(t)?{space:_g[t],local:n}:n}function _K(n){return function(){var t=this.ownerDocument,e=this.namespaceURI;return e===zh&&t.documentElement.namespaceURI===zh?t.createElement(n):t.createElementNS(e,n)}}function FK(n){return function(){return this.ownerDocument.createElementNS(n.space,n.local)}}function qv(n){var t=Iu(n);return(t.local?FK:_K)(t)}function OK(){}function Dp(n){return n==null?OK:function(){return this.querySelector(n)}}function MK(n){typeof n!="function"&&(n=Dp(n));for(var t=this._groups,e=t.length,s=new Array(e),r=0;r<e;++r)for(var o=t[r],i=o.length,a=s[r]=new Array(i),l,c,u=0;u<i;++u)(l=o[u])&&(c=n.call(l,l.__data__,u,o))&&("__data__"in l&&(c.__data__=l.__data__),a[u]=c);return new En(s,this._parents)}function LK(n){return n==null?[]:Array.isArray(n)?n:Array.from(n)}function PK(){return[]}function jv(n){return n==null?PK:function(){return this.querySelectorAll(n)}}function zK(n){return function(){return LK(n.apply(this,arguments))}}function BK(n){typeof n=="function"?n=zK(n):n=jv(n);for(var t=this._groups,e=t.length,s=[],r=[],o=0;o<e;++o)for(var i=t[o],a=i.length,l,c=0;c<a;++c)(l=i[c])&&(s.push(n.call(l,l.__data__,c,i)),r.push(l));return new En(s,r)}function Kv(n){return function(){return this.matches(n)}}function Xv(n){return function(t){return t.matches(n)}}var VK=Array.prototype.find;function WK(n){return function(){return VK.call(this.children,n)}}function UK(){return this.firstElementChild}function GK(n){return this.select(n==null?UK:WK(typeof n=="function"?n:Xv(n)))}var HK=Array.prototype.filter;function qK(){return Array.from(this.children)}function jK(n){return function(){return HK.call(this.children,n)}}function KK(n){return this.selectAll(n==null?qK:jK(typeof n=="function"?n:Xv(n)))}function XK(n){typeof n!="function"&&(n=Kv(n));for(var t=this._groups,e=t.length,s=new Array(e),r=0;r<e;++r)for(var o=t[r],i=o.length,a=s[r]=[],l,c=0;c<i;++c)(l=o[c])&&n.call(l,l.__data__,c,o)&&a.push(l);return new En(s,this._parents)}function Yv(n){return new Array(n.length)}function YK(){return new En(this._enter||this._groups.map(Yv),this._parents)}function zl(n,t){this.ownerDocument=n.ownerDocument,this.namespaceURI=n.namespaceURI,this._next=null,this._parent=n,this.__data__=t}zl.prototype={constructor:zl,appendChild:function(n){return this._parent.insertBefore(n,this._next)},insertBefore:function(n,t){return this._parent.insertBefore(n,t)},querySelector:function(n){return this._parent.querySelector(n)},querySelectorAll:function(n){return this._parent.querySelectorAll(n)}};function ZK(n){return function(){return n}}function JK(n,t,e,s,r,o){for(var i=0,a,l=t.length,c=o.length;i<c;++i)(a=t[i])?(a.__data__=o[i],s[i]=a):e[i]=new zl(n,o[i]);for(;i<l;++i)(a=t[i])&&(r[i]=a)}function QK(n,t,e,s,r,o,i){var a,l,c=new Map,u=t.length,h=o.length,d=new Array(u),f;for(a=0;a<u;++a)(l=t[a])&&(d[a]=f=i.call(l,l.__data__,a,t)+"",c.has(f)?r[a]=l:c.set(f,l));for(a=0;a<h;++a)f=i.call(n,o[a],a,o)+"",(l=c.get(f))?(s[a]=l,l.__data__=o[a],c.delete(f)):e[a]=new zl(n,o[a]);for(a=0;a<u;++a)(l=t[a])&&c.get(d[a])===l&&(r[a]=l)}function tX(n){return n.__data__}function eX(n,t){if(!arguments.length)return Array.from(this,tX);var e=t?QK:JK,s=this._parents,r=this._groups;typeof n!="function"&&(n=ZK(n));for(var o=r.length,i=new Array(o),a=new Array(o),l=new Array(o),c=0;c<o;++c){var u=s[c],h=r[c],d=h.length,f=nX(n.call(u,u&&u.__data__,c,s)),p=f.length,m=a[c]=new Array(p),g=i[c]=new Array(p),x=l[c]=new Array(d);e(u,h,m,g,x,f,t);for(var b=0,w=0,y,v;b<p;++b)if(y=m[b]){for(b>=w&&(w=b+1);!(v=g[w])&&++w<p;);y._next=v||null}}return i=new En(i,s),i._enter=a,i._exit=l,i}function nX(n){return typeof n=="object"&&"length"in n?n:Array.from(n)}function sX(){return new En(this._exit||this._groups.map(Yv),this._parents)}function rX(n,t,e){var s=this.enter(),r=this,o=this.exit();return typeof n=="function"?(s=n(s),s&&(s=s.selection())):s=s.append(n+""),t!=null&&(r=t(r),r&&(r=r.selection())),e==null?o.remove():e(o),s&&r?s.merge(r).order():r}function oX(n){for(var t=n.selection?n.selection():n,e=this._groups,s=t._groups,r=e.length,o=s.length,i=Math.min(r,o),a=new Array(r),l=0;l<i;++l)for(var c=e[l],u=s[l],h=c.length,d=a[l]=new Array(h),f,p=0;p<h;++p)(f=c[p]||u[p])&&(d[p]=f);for(;l<r;++l)a[l]=e[l];return new En(a,this._parents)}function iX(){for(var n=this._groups,t=-1,e=n.length;++t<e;)for(var s=n[t],r=s.length-1,o=s[r],i;--r>=0;)(i=s[r])&&(o&&i.compareDocumentPosition(o)^4&&o.parentNode.insertBefore(i,o),o=i);return this}function aX(n){n||(n=lX);function t(h,d){return h&&d?n(h.__data__,d.__data__):!h-!d}for(var e=this._groups,s=e.length,r=new Array(s),o=0;o<s;++o){for(var i=e[o],a=i.length,l=r[o]=new Array(a),c,u=0;u<a;++u)(c=i[u])&&(l[u]=c);l.sort(t)}return new En(r,this._parents).order()}function lX(n,t){return n<t?-1:n>t?1:n>=t?0:NaN}function cX(){var n=arguments[0];return arguments[0]=this,n.apply(null,arguments),this}function uX(){return Array.from(this)}function hX(){for(var n=this._groups,t=0,e=n.length;t<e;++t)for(var s=n[t],r=0,o=s.length;r<o;++r){var i=s[r];if(i)return i}return null}function dX(){let n=0;for(const t of this)++n;return n}function fX(){return!this.node()}function pX(n){for(var t=this._groups,e=0,s=t.length;e<s;++e)for(var r=t[e],o=0,i=r.length,a;o<i;++o)(a=r[o])&&n.call(a,a.__data__,o,r);return this}function mX(n){return function(){this.removeAttribute(n)}}function gX(n){return function(){this.removeAttributeNS(n.space,n.local)}}function xX(n,t){return function(){this.setAttribute(n,t)}}function bX(n,t){return function(){this.setAttributeNS(n.space,n.local,t)}}function yX(n,t){return function(){var e=t.apply(this,arguments);e==null?this.removeAttribute(n):this.setAttribute(n,e)}}function wX(n,t){return function(){var e=t.apply(this,arguments);e==null?this.removeAttributeNS(n.space,n.local):this.setAttributeNS(n.space,n.local,e)}}function vX(n,t){var e=Iu(n);if(arguments.length<2){var s=this.node();return e.local?s.getAttributeNS(e.space,e.local):s.getAttribute(e)}return this.each((t==null?e.local?gX:mX:typeof t=="function"?e.local?wX:yX:e.local?bX:xX)(e,t))}function Zv(n){return n.ownerDocument&&n.ownerDocument.defaultView||n.document&&n||n.defaultView}function CX(n){return function(){this.style.removeProperty(n)}}function $X(n,t,e){return function(){this.style.setProperty(n,t,e)}}function kX(n,t,e){return function(){var s=t.apply(this,arguments);s==null?this.style.removeProperty(n):this.style.setProperty(n,s,e)}}function IX(n,t,e){return arguments.length>1?this.each((t==null?CX:typeof t=="function"?kX:$X)(n,t,e??"")):no(this.node(),n)}function no(n,t){return n.style.getPropertyValue(t)||Zv(n).getComputedStyle(n,null).getPropertyValue(t)}function SX(n){return function(){delete this[n]}}function NX(n,t){return function(){this[n]=t}}function TX(n,t){return function(){var e=t.apply(this,arguments);e==null?delete this[n]:this[n]=e}}function EX(n,t){return arguments.length>1?this.each((t==null?SX:typeof t=="function"?TX:NX)(n,t)):this.node()[n]}function Jv(n){return n.trim().split(/^|\s+/)}function _p(n){return n.classList||new Qv(n)}function Qv(n){this._node=n,this._names=Jv(n.getAttribute("class")||"")}Qv.prototype={add:function(n){var t=this._names.indexOf(n);t<0&&(this._names.push(n),this._node.setAttribute("class",this._names.join(" ")))},remove:function(n){var t=this._names.indexOf(n);t>=0&&(this._names.splice(t,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(n){return this._names.indexOf(n)>=0}};function tC(n,t){for(var e=_p(n),s=-1,r=t.length;++s<r;)e.add(t[s])}function eC(n,t){for(var e=_p(n),s=-1,r=t.length;++s<r;)e.remove(t[s])}function RX(n){return function(){tC(this,n)}}function AX(n){return function(){eC(this,n)}}function DX(n,t){return function(){(t.apply(this,arguments)?tC:eC)(this,n)}}function _X(n,t){var e=Jv(n+"");if(arguments.length<2){for(var s=_p(this.node()),r=-1,o=e.length;++r<o;)if(!s.contains(e[r]))return!1;return!0}return this.each((typeof t=="function"?DX:t?RX:AX)(e,t))}function FX(){this.textContent=""}function OX(n){return function(){this.textContent=n}}function MX(n){return function(){var t=n.apply(this,arguments);this.textContent=t??""}}function LX(n){return arguments.length?this.each(n==null?FX:(typeof n=="function"?MX:OX)(n)):this.node().textContent}function PX(){this.innerHTML=""}function zX(n){return function(){this.innerHTML=n}}function BX(n){return function(){var t=n.apply(this,arguments);this.innerHTML=t??""}}function VX(n){return arguments.length?this.each(n==null?PX:(typeof n=="function"?BX:zX)(n)):this.node().innerHTML}function WX(){this.nextSibling&&this.parentNode.appendChild(this)}function UX(){return this.each(WX)}function GX(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function HX(){return this.each(GX)}function qX(n){var t=typeof n=="function"?n:qv(n);return this.select(function(){return this.appendChild(t.apply(this,arguments))})}function jX(){return null}function KX(n,t){var e=typeof n=="function"?n:qv(n),s=t==null?jX:typeof t=="function"?t:Dp(t);return this.select(function(){return this.insertBefore(e.apply(this,arguments),s.apply(this,arguments)||null)})}function XX(){var n=this.parentNode;n&&n.removeChild(this)}function YX(){return this.each(XX)}function ZX(){var n=this.cloneNode(!1),t=this.parentNode;return t?t.insertBefore(n,this.nextSibling):n}function JX(){var n=this.cloneNode(!0),t=this.parentNode;return t?t.insertBefore(n,this.nextSibling):n}function QX(n){return this.select(n?JX:ZX)}function t5(n){return arguments.length?this.property("__data__",n):this.node().__data__}function e5(n){return function(t){n.call(this,t,this.__data__)}}function n5(n){return n.trim().split(/^|\s+/).map(function(t){var e="",s=t.indexOf(".");return s>=0&&(e=t.slice(s+1),t=t.slice(0,s)),{type:t,name:e}})}function s5(n){return function(){var t=this.__on;if(t){for(var e=0,s=-1,r=t.length,o;e<r;++e)o=t[e],(!n.type||o.type===n.type)&&o.name===n.name?this.removeEventListener(o.type,o.listener,o.options):t[++s]=o;++s?t.length=s:delete this.__on}}}function r5(n,t,e){return function(){var s=this.__on,r,o=e5(t);if(s){for(var i=0,a=s.length;i<a;++i)if((r=s[i]).type===n.type&&r.name===n.name){this.removeEventListener(r.type,r.listener,r.options),this.addEventListener(r.type,r.listener=o,r.options=e),r.value=t;return}}this.addEventListener(n.type,o,e),r={type:n.type,name:n.name,value:t,listener:o,options:e},s?s.push(r):this.__on=[r]}}function o5(n,t,e){var s=n5(n+""),r,o=s.length,i;if(arguments.length<2){var a=this.node().__on;if(a){for(var l=0,c=a.length,u;l<c;++l)for(r=0,u=a[l];r<o;++r)if((i=s[r]).type===u.type&&i.name===u.name)return u.value}return}for(a=t?r5:s5,r=0;r<o;++r)this.each(a(s[r],t,e));return this}function nC(n,t,e){var s=Zv(n),r=s.CustomEvent;typeof r=="function"?r=new r(t,e):(r=s.document.createEvent("Event"),e?(r.initEvent(t,e.bubbles,e.cancelable),r.detail=e.detail):r.initEvent(t,!1,!1)),n.dispatchEvent(r)}function i5(n,t){return function(){return nC(this,n,t)}}function a5(n,t){return function(){return nC(this,n,t.apply(this,arguments))}}function l5(n,t){return this.each((typeof t=="function"?a5:i5)(n,t))}function*c5(){for(var n=this._groups,t=0,e=n.length;t<e;++t)for(var s=n[t],r=0,o=s.length,i;r<o;++r)(i=s[r])&&(yield i)}var u5=[null];function En(n,t){this._groups=n,this._parents=t}function $a(){return new En([[document.documentElement]],u5)}function h5(){return this}En.prototype=$a.prototype={constructor:En,select:MK,selectAll:BK,selectChild:GK,selectChildren:KK,filter:XK,data:eX,enter:YK,exit:sX,join:rX,merge:oX,selection:h5,order:iX,sort:aX,call:cX,nodes:uX,node:hX,size:dX,empty:fX,each:pX,attr:vX,style:IX,property:EX,classed:_X,text:LX,html:VX,raise:UX,lower:HX,append:qX,insert:KX,remove:YX,clone:QX,datum:t5,on:o5,dispatch:l5,[Symbol.iterator]:c5};function Fp(n,t,e){n.prototype=t.prototype=e,e.constructor=n}function sC(n,t){var e=Object.create(n.prototype);for(var s in t)e[s]=t[s];return e}function ka(){}var ni=.7,Bl=1/ni,Gr="\\s*([+-]?\\d+)\\s*",si="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",Gn="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",d5=/^#([0-9a-f]{3,8})$/,f5=new RegExp(`^rgb\\(${Gr},${Gr},${Gr}\\)$`),p5=new RegExp(`^rgb\\(${Gn},${Gn},${Gn}\\)$`),m5=new RegExp(`^rgba\\(${Gr},${Gr},${Gr},${si}\\)$`),g5=new RegExp(`^rgba\\(${Gn},${Gn},${Gn},${si}\\)$`),x5=new RegExp(`^hsl\\(${si},${Gn},${Gn}\\)$`),b5=new RegExp(`^hsla\\(${si},${Gn},${Gn},${si}\\)$`),Fg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Fp(ka,br,{copy(n){return Object.assign(new this.constructor,this,n)},displayable(){return this.rgb().displayable()},hex:Og,formatHex:Og,formatHex8:y5,formatHsl:w5,formatRgb:Mg,toString:Mg});function Og(){return this.rgb().formatHex()}function y5(){return this.rgb().formatHex8()}function w5(){return rC(this).formatHsl()}function Mg(){return this.rgb().formatRgb()}function br(n){var t,e;return n=(n+"").trim().toLowerCase(),(t=d5.exec(n))?(e=t[1].length,t=parseInt(t[1],16),e===6?Lg(t):e===3?new Ge(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):e===8?Ua(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):e===4?Ua(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=f5.exec(n))?new Ge(t[1],t[2],t[3],1):(t=p5.exec(n))?new Ge(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=m5.exec(n))?Ua(t[1],t[2],t[3],t[4]):(t=g5.exec(n))?Ua(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=x5.exec(n))?Bg(t[1],t[2]/100,t[3]/100,1):(t=b5.exec(n))?Bg(t[1],t[2]/100,t[3]/100,t[4]):Fg.hasOwnProperty(n)?Lg(Fg[n]):n==="transparent"?new Ge(NaN,NaN,NaN,0):null}function Lg(n){return new Ge(n>>16&255,n>>8&255,n&255,1)}function Ua(n,t,e,s){return s<=0&&(n=t=e=NaN),new Ge(n,t,e,s)}function v5(n){return n instanceof ka||(n=br(n)),n?(n=n.rgb(),new Ge(n.r,n.g,n.b,n.opacity)):new Ge}function Vl(n,t,e,s){return arguments.length===1?v5(n):new Ge(n,t,e,s??1)}function Ge(n,t,e,s){this.r=+n,this.g=+t,this.b=+e,this.opacity=+s}Fp(Ge,Vl,sC(ka,{brighter(n){return n=n==null?Bl:Math.pow(Bl,n),new Ge(this.r*n,this.g*n,this.b*n,this.opacity)},darker(n){return n=n==null?ni:Math.pow(ni,n),new Ge(this.r*n,this.g*n,this.b*n,this.opacity)},rgb(){return this},clamp(){return new Ge(nr(this.r),nr(this.g),nr(this.b),Wl(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:Pg,formatHex:Pg,formatHex8:C5,formatRgb:zg,toString:zg}));function Pg(){return`#${Js(this.r)}${Js(this.g)}${Js(this.b)}`}function C5(){return`#${Js(this.r)}${Js(this.g)}${Js(this.b)}${Js((isNaN(this.opacity)?1:this.opacity)*255)}`}function zg(){const n=Wl(this.opacity);return`${n===1?"rgb(":"rgba("}${nr(this.r)}, ${nr(this.g)}, ${nr(this.b)}${n===1?")":`, ${n})`}`}function Wl(n){return isNaN(n)?1:Math.max(0,Math.min(1,n))}function nr(n){return Math.max(0,Math.min(255,Math.round(n)||0))}function Js(n){return n=nr(n),(n<16?"0":"")+n.toString(16)}function Bg(n,t,e,s){return s<=0?n=t=e=NaN:e<=0||e>=1?n=t=NaN:t<=0&&(n=NaN),new vn(n,t,e,s)}function rC(n){if(n instanceof vn)return new vn(n.h,n.s,n.l,n.opacity);if(n instanceof ka||(n=br(n)),!n)return new vn;if(n instanceof vn)return n;n=n.rgb();var t=n.r/255,e=n.g/255,s=n.b/255,r=Math.min(t,e,s),o=Math.max(t,e,s),i=NaN,a=o-r,l=(o+r)/2;return a?(t===o?i=(e-s)/a+(e<s)*6:e===o?i=(s-t)/a+2:i=(t-e)/a+4,a/=l<.5?o+r:2-o-r,i*=60):a=l>0&&l<1?0:i,new vn(i,a,l,n.opacity)}function $5(n,t,e,s){return arguments.length===1?rC(n):new vn(n,t,e,s??1)}function vn(n,t,e,s){this.h=+n,this.s=+t,this.l=+e,this.opacity=+s}Fp(vn,$5,sC(ka,{brighter(n){return n=n==null?Bl:Math.pow(Bl,n),new vn(this.h,this.s,this.l*n,this.opacity)},darker(n){return n=n==null?ni:Math.pow(ni,n),new vn(this.h,this.s,this.l*n,this.opacity)},rgb(){var n=this.h%360+(this.h<0)*360,t=isNaN(n)||isNaN(this.s)?0:this.s,e=this.l,s=e+(e<.5?e:1-e)*t,r=2*e-s;return new Ge(Ju(n>=240?n-240:n+120,r,s),Ju(n,r,s),Ju(n<120?n+240:n-120,r,s),this.opacity)},clamp(){return new vn(Vg(this.h),Ga(this.s),Ga(this.l),Wl(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const n=Wl(this.opacity);return`${n===1?"hsl(":"hsla("}${Vg(this.h)}, ${Ga(this.s)*100}%, ${Ga(this.l)*100}%${n===1?")":`, ${n})`}`}}));function Vg(n){return n=(n||0)%360,n<0?n+360:n}function Ga(n){return Math.max(0,Math.min(1,n||0))}function Ju(n,t,e){return(n<60?t+(e-t)*n/60:n<180?e:n<240?t+(e-t)*(240-n)/60:t)*255}function k5(n,t,e,s,r){var o=n*n,i=o*n;return((1-3*n+3*o-i)*t+(4-6*o+3*i)*e+(1+3*n+3*o-3*i)*s+i*r)/6}function I5(n){var t=n.length-1;return function(e){var s=e<=0?e=0:e>=1?(e=1,t-1):Math.floor(e*t),r=n[s],o=n[s+1],i=s>0?n[s-1]:2*r-o,a=s<t-1?n[s+2]:2*o-r;return k5((e-s/t)*t,i,r,o,a)}}const Op=n=>()=>n;function S5(n,t){return function(e){return n+e*t}}function N5(n,t,e){return n=Math.pow(n,e),t=Math.pow(t,e)-n,e=1/e,function(s){return Math.pow(n+s*t,e)}}function T5(n){return(n=+n)==1?oC:function(t,e){return e-t?N5(t,e,n):Op(isNaN(t)?e:t)}}function oC(n,t){var e=t-n;return e?S5(n,e):Op(isNaN(n)?t:n)}const Ul=(function n(t){var e=T5(t);function s(r,o){var i=e((r=Vl(r)).r,(o=Vl(o)).r),a=e(r.g,o.g),l=e(r.b,o.b),c=oC(r.opacity,o.opacity);return function(u){return r.r=i(u),r.g=a(u),r.b=l(u),r.opacity=c(u),r+""}}return s.gamma=n,s})(1);function E5(n){return function(t){var e=t.length,s=new Array(e),r=new Array(e),o=new Array(e),i,a;for(i=0;i<e;++i)a=Vl(t[i]),s[i]=a.r||0,r[i]=a.g||0,o[i]=a.b||0;return s=n(s),r=n(r),o=n(o),a.opacity=1,function(l){return a.r=s(l),a.g=r(l),a.b=o(l),a+""}}}var e7=E5(I5);function R5(n,t){t||(t=[]);var e=n?Math.min(t.length,n.length):0,s=t.slice(),r;return function(o){for(r=0;r<e;++r)s[r]=n[r]*(1-o)+t[r]*o;return s}}function A5(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function D5(n,t){var e=t?t.length:0,s=n?Math.min(e,n.length):0,r=new Array(s),o=new Array(e),i;for(i=0;i<s;++i)r[i]=Mp(n[i],t[i]);for(;i<e;++i)o[i]=t[i];return function(a){for(i=0;i<s;++i)o[i]=r[i](a);return o}}function _5(n,t){var e=new Date;return n=+n,t=+t,function(s){return e.setTime(n*(1-s)+t*s),e}}function wn(n,t){return n=+n,t=+t,function(e){return n*(1-e)+t*e}}function F5(n,t){var e={},s={},r;(n===null||typeof n!="object")&&(n={}),(t===null||typeof t!="object")&&(t={});for(r in t)r in n?e[r]=Mp(n[r],t[r]):s[r]=t[r];return function(o){for(r in e)s[r]=e[r](o);return s}}var Bh=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Qu=new RegExp(Bh.source,"g");function O5(n){return function(){return n}}function M5(n){return function(t){return n(t)+""}}function iC(n,t){var e=Bh.lastIndex=Qu.lastIndex=0,s,r,o,i=-1,a=[],l=[];for(n=n+"",t=t+"";(s=Bh.exec(n))&&(r=Qu.exec(t));)(o=r.index)>e&&(o=t.slice(e,o),a[i]?a[i]+=o:a[++i]=o),(s=s[0])===(r=r[0])?a[i]?a[i]+=r:a[++i]=r:(a[++i]=null,l.push({i,x:wn(s,r)})),e=Qu.lastIndex;return e<t.length&&(o=t.slice(e),a[i]?a[i]+=o:a[++i]=o),a.length<2?l[0]?M5(l[0].x):O5(t):(t=l.length,function(c){for(var u=0,h;u<t;++u)a[(h=l[u]).i]=h.x(c);return a.join("")})}function Mp(n,t){var e=typeof t,s;return t==null||e==="boolean"?Op(t):(e==="number"?wn:e==="string"?(s=br(t))?(t=s,Ul):iC:t instanceof br?Ul:t instanceof Date?_5:A5(t)?R5:Array.isArray(t)?D5:typeof t.valueOf!="function"&&typeof t.toString!="function"||isNaN(t)?F5:wn)(n,t)}function L5(n,t){return n=+n,t=+t,function(e){return Math.round(n*(1-e)+t*e)}}var Wg=180/Math.PI,Vh={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function aC(n,t,e,s,r,o){var i,a,l;return(i=Math.sqrt(n*n+t*t))&&(n/=i,t/=i),(l=n*e+t*s)&&(e-=n*l,s-=t*l),(a=Math.sqrt(e*e+s*s))&&(e/=a,s/=a,l/=a),n*s<t*e&&(n=-n,t=-t,l=-l,i=-i),{translateX:r,translateY:o,rotate:Math.atan2(t,n)*Wg,skewX:Math.atan(l)*Wg,scaleX:i,scaleY:a}}var Ha;function P5(n){const t=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(n+"");return t.isIdentity?Vh:aC(t.a,t.b,t.c,t.d,t.e,t.f)}function z5(n){return n==null||(Ha||(Ha=document.createElementNS("http://www.w3.org/2000/svg","g")),Ha.setAttribute("transform",n),!(n=Ha.transform.baseVal.consolidate()))?Vh:(n=n.matrix,aC(n.a,n.b,n.c,n.d,n.e,n.f))}function lC(n,t,e,s){function r(c){return c.length?c.pop()+" ":""}function o(c,u,h,d,f,p){if(c!==h||u!==d){var m=f.push("translate(",null,t,null,e);p.push({i:m-4,x:wn(c,h)},{i:m-2,x:wn(u,d)})}else(h||d)&&f.push("translate("+h+t+d+e)}function i(c,u,h,d){c!==u?(c-u>180?u+=360:u-c>180&&(c+=360),d.push({i:h.push(r(h)+"rotate(",null,s)-2,x:wn(c,u)})):u&&h.push(r(h)+"rotate("+u+s)}function a(c,u,h,d){c!==u?d.push({i:h.push(r(h)+"skewX(",null,s)-2,x:wn(c,u)}):u&&h.push(r(h)+"skewX("+u+s)}function l(c,u,h,d,f,p){if(c!==h||u!==d){var m=f.push(r(f)+"scale(",null,",",null,")");p.push({i:m-4,x:wn(c,h)},{i:m-2,x:wn(u,d)})}else(h!==1||d!==1)&&f.push(r(f)+"scale("+h+","+d+")")}return function(c,u){var h=[],d=[];return c=n(c),u=n(u),o(c.translateX,c.translateY,u.translateX,u.translateY,h,d),i(c.rotate,u.rotate,h,d),a(c.skewX,u.skewX,h,d),l(c.scaleX,c.scaleY,u.scaleX,u.scaleY,h,d),c=u=null,function(f){for(var p=-1,m=d.length,g;++p<m;)h[(g=d[p]).i]=g.x(f);return h.join("")}}}var B5=lC(P5,"px, ","px)","deg)"),V5=lC(z5,", ",")",")"),so=0,Lo=0,Eo=0,cC=1e3,Gl,Po,Hl=0,yr=0,Su=0,ri=typeof performance=="object"&&performance.now?performance:Date,uC=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(n){setTimeout(n,17)};function Lp(){return yr||(uC(W5),yr=ri.now()+Su)}function W5(){yr=0}function ql(){this._call=this._time=this._next=null}ql.prototype=hC.prototype={constructor:ql,restart:function(n,t,e){if(typeof n!="function")throw new TypeError("callback is not a function");e=(e==null?Lp():+e)+(t==null?0:+t),!this._next&&Po!==this&&(Po?Po._next=this:Gl=this,Po=this),this._call=n,this._time=e,Wh()},stop:function(){this._call&&(this._call=null,this._time=1/0,Wh())}};function hC(n,t,e){var s=new ql;return s.restart(n,t,e),s}function U5(){Lp(),++so;for(var n=Gl,t;n;)(t=yr-n._time)>=0&&n._call.call(void 0,t),n=n._next;--so}function Ug(){yr=(Hl=ri.now())+Su,so=Lo=0;try{U5()}finally{so=0,H5(),yr=0}}function G5(){var n=ri.now(),t=n-Hl;t>cC&&(Su-=t,Hl=n)}function H5(){for(var n,t=Gl,e,s=1/0;t;)t._call?(s>t._time&&(s=t._time),n=t,t=t._next):(e=t._next,t._next=null,t=n?n._next=e:Gl=e);Po=n,Wh(s)}function Wh(n){if(!so){Lo&&(Lo=clearTimeout(Lo));var t=n-yr;t>24?(n<1/0&&(Lo=setTimeout(Ug,n-ri.now()-Su)),Eo&&(Eo=clearInterval(Eo))):(Eo||(Hl=ri.now(),Eo=setInterval(G5,cC)),so=1,uC(Ug))}}function Gg(n,t,e){var s=new ql;return t=t==null?0:+t,s.restart(r=>{s.stop(),n(r+t)},t,e),s}var q5=Hv("start","end","cancel","interrupt"),j5=[],dC=0,Hg=1,Uh=2,il=3,qg=4,Gh=5,al=6;function Nu(n,t,e,s,r,o){var i=n.__transition;if(!i)n.__transition={};else if(e in i)return;K5(n,e,{name:t,index:s,group:r,on:q5,tween:j5,time:o.time,delay:o.delay,duration:o.duration,ease:o.ease,timer:null,state:dC})}function Pp(n,t){var e=An(n,t);if(e.state>dC)throw new Error("too late; already scheduled");return e}function Zn(n,t){var e=An(n,t);if(e.state>il)throw new Error("too late; already running");return e}function An(n,t){var e=n.__transition;if(!e||!(e=e[t]))throw new Error("transition not found");return e}function K5(n,t,e){var s=n.__transition,r;s[t]=e,e.timer=hC(o,0,e.time);function o(c){e.state=Hg,e.timer.restart(i,e.delay,e.time),e.delay<=c&&i(c-e.delay)}function i(c){var u,h,d,f;if(e.state!==Hg)return l();for(u in s)if(f=s[u],f.name===e.name){if(f.state===il)return Gg(i);f.state===qg?(f.state=al,f.timer.stop(),f.on.call("interrupt",n,n.__data__,f.index,f.group),delete s[u]):+u<t&&(f.state=al,f.timer.stop(),f.on.call("cancel",n,n.__data__,f.index,f.group),delete s[u])}if(Gg(function(){e.state===il&&(e.state=qg,e.timer.restart(a,e.delay,e.time),a(c))}),e.state=Uh,e.on.call("start",n,n.__data__,e.index,e.group),e.state===Uh){for(e.state=il,r=new Array(d=e.tween.length),u=0,h=-1;u<d;++u)(f=e.tween[u].value.call(n,n.__data__,e.index,e.group))&&(r[++h]=f);r.length=h+1}}function a(c){for(var u=c<e.duration?e.ease.call(null,c/e.duration):(e.timer.restart(l),e.state=Gh,1),h=-1,d=r.length;++h<d;)r[h].call(n,u);e.state===Gh&&(e.on.call("end",n,n.__data__,e.index,e.group),l())}function l(){e.state=al,e.timer.stop(),delete s[t];for(var c in s)return;delete n.__transition}}function X5(n,t){var e=n.__transition,s,r,o=!0,i;if(e){t=t==null?null:t+"";for(i in e){if((s=e[i]).name!==t){o=!1;continue}r=s.state>Uh&&s.state<Gh,s.state=al,s.timer.stop(),s.on.call(r?"interrupt":"cancel",n,n.__data__,s.index,s.group),delete e[i]}o&&delete n.__transition}}function Y5(n){return this.each(function(){X5(this,n)})}function Z5(n,t){var e,s;return function(){var r=Zn(this,n),o=r.tween;if(o!==e){s=e=o;for(var i=0,a=s.length;i<a;++i)if(s[i].name===t){s=s.slice(),s.splice(i,1);break}}r.tween=s}}function J5(n,t,e){var s,r;if(typeof e!="function")throw new Error;return function(){var o=Zn(this,n),i=o.tween;if(i!==s){r=(s=i).slice();for(var a={name:t,value:e},l=0,c=r.length;l<c;++l)if(r[l].name===t){r[l]=a;break}l===c&&r.push(a)}o.tween=r}}function Q5(n,t){var e=this._id;if(n+="",arguments.length<2){for(var s=An(this.node(),e).tween,r=0,o=s.length,i;r<o;++r)if((i=s[r]).name===n)return i.value;return null}return this.each((t==null?Z5:J5)(e,n,t))}function zp(n,t,e){var s=n._id;return n.each(function(){var r=Zn(this,s);(r.value||(r.value={}))[t]=e.apply(this,arguments)}),function(r){return An(r,s).value[t]}}function fC(n,t){var e;return(typeof t=="number"?wn:t instanceof br?Ul:(e=br(t))?(t=e,Ul):iC)(n,t)}function t8(n){return function(){this.removeAttribute(n)}}function e8(n){return function(){this.removeAttributeNS(n.space,n.local)}}function n8(n,t,e){var s,r=e+"",o;return function(){var i=this.getAttribute(n);return i===r?null:i===s?o:o=t(s=i,e)}}function s8(n,t,e){var s,r=e+"",o;return function(){var i=this.getAttributeNS(n.space,n.local);return i===r?null:i===s?o:o=t(s=i,e)}}function r8(n,t,e){var s,r,o;return function(){var i,a=e(this),l;return a==null?void this.removeAttribute(n):(i=this.getAttribute(n),l=a+"",i===l?null:i===s&&l===r?o:(r=l,o=t(s=i,a)))}}function o8(n,t,e){var s,r,o;return function(){var i,a=e(this),l;return a==null?void this.removeAttributeNS(n.space,n.local):(i=this.getAttributeNS(n.space,n.local),l=a+"",i===l?null:i===s&&l===r?o:(r=l,o=t(s=i,a)))}}function i8(n,t){var e=Iu(n),s=e==="transform"?V5:fC;return this.attrTween(n,typeof t=="function"?(e.local?o8:r8)(e,s,zp(this,"attr."+n,t)):t==null?(e.local?e8:t8)(e):(e.local?s8:n8)(e,s,t))}function a8(n,t){return function(e){this.setAttribute(n,t.call(this,e))}}function l8(n,t){return function(e){this.setAttributeNS(n.space,n.local,t.call(this,e))}}function c8(n,t){var e,s;function r(){var o=t.apply(this,arguments);return o!==s&&(e=(s=o)&&l8(n,o)),e}return r._value=t,r}function u8(n,t){var e,s;function r(){var o=t.apply(this,arguments);return o!==s&&(e=(s=o)&&a8(n,o)),e}return r._value=t,r}function h8(n,t){var e="attr."+n;if(arguments.length<2)return(e=this.tween(e))&&e._value;if(t==null)return this.tween(e,null);if(typeof t!="function")throw new Error;var s=Iu(n);return this.tween(e,(s.local?c8:u8)(s,t))}function d8(n,t){return function(){Pp(this,n).delay=+t.apply(this,arguments)}}function f8(n,t){return t=+t,function(){Pp(this,n).delay=t}}function p8(n){var t=this._id;return arguments.length?this.each((typeof n=="function"?d8:f8)(t,n)):An(this.node(),t).delay}function m8(n,t){return function(){Zn(this,n).duration=+t.apply(this,arguments)}}function g8(n,t){return t=+t,function(){Zn(this,n).duration=t}}function x8(n){var t=this._id;return arguments.length?this.each((typeof n=="function"?m8:g8)(t,n)):An(this.node(),t).duration}function b8(n,t){if(typeof t!="function")throw new Error;return function(){Zn(this,n).ease=t}}function y8(n){var t=this._id;return arguments.length?this.each(b8(t,n)):An(this.node(),t).ease}function w8(n,t){return function(){var e=t.apply(this,arguments);if(typeof e!="function")throw new Error;Zn(this,n).ease=e}}function v8(n){if(typeof n!="function")throw new Error;return this.each(w8(this._id,n))}function C8(n){typeof n!="function"&&(n=Kv(n));for(var t=this._groups,e=t.length,s=new Array(e),r=0;r<e;++r)for(var o=t[r],i=o.length,a=s[r]=[],l,c=0;c<i;++c)(l=o[c])&&n.call(l,l.__data__,c,o)&&a.push(l);return new cs(s,this._parents,this._name,this._id)}function $8(n){if(n._id!==this._id)throw new Error;for(var t=this._groups,e=n._groups,s=t.length,r=e.length,o=Math.min(s,r),i=new Array(s),a=0;a<o;++a)for(var l=t[a],c=e[a],u=l.length,h=i[a]=new Array(u),d,f=0;f<u;++f)(d=l[f]||c[f])&&(h[f]=d);for(;a<s;++a)i[a]=t[a];return new cs(i,this._parents,this._name,this._id)}function k8(n){return(n+"").trim().split(/^|\s+/).every(function(t){var e=t.indexOf(".");return e>=0&&(t=t.slice(0,e)),!t||t==="start"})}function I8(n,t,e){var s,r,o=k8(t)?Pp:Zn;return function(){var i=o(this,n),a=i.on;a!==s&&(r=(s=a).copy()).on(t,e),i.on=r}}function S8(n,t){var e=this._id;return arguments.length<2?An(this.node(),e).on.on(n):this.each(I8(e,n,t))}function N8(n){return function(){var t=this.parentNode;for(var e in this.__transition)if(+e!==n)return;t&&t.removeChild(this)}}function T8(){return this.on("end.remove",N8(this._id))}function E8(n){var t=this._name,e=this._id;typeof n!="function"&&(n=Dp(n));for(var s=this._groups,r=s.length,o=new Array(r),i=0;i<r;++i)for(var a=s[i],l=a.length,c=o[i]=new Array(l),u,h,d=0;d<l;++d)(u=a[d])&&(h=n.call(u,u.__data__,d,a))&&("__data__"in u&&(h.__data__=u.__data__),c[d]=h,Nu(c[d],t,e,d,c,An(u,e)));return new cs(o,this._parents,t,e)}function R8(n){var t=this._name,e=this._id;typeof n!="function"&&(n=jv(n));for(var s=this._groups,r=s.length,o=[],i=[],a=0;a<r;++a)for(var l=s[a],c=l.length,u,h=0;h<c;++h)if(u=l[h]){for(var d=n.call(u,u.__data__,h,l),f,p=An(u,e),m=0,g=d.length;m<g;++m)(f=d[m])&&Nu(f,t,e,m,d,p);o.push(d),i.push(u)}return new cs(o,i,t,e)}var A8=$a.prototype.constructor;function D8(){return new A8(this._groups,this._parents)}function _8(n,t){var e,s,r;return function(){var o=no(this,n),i=(this.style.removeProperty(n),no(this,n));return o===i?null:o===e&&i===s?r:r=t(e=o,s=i)}}function pC(n){return function(){this.style.removeProperty(n)}}function F8(n,t,e){var s,r=e+"",o;return function(){var i=no(this,n);return i===r?null:i===s?o:o=t(s=i,e)}}function O8(n,t,e){var s,r,o;return function(){var i=no(this,n),a=e(this),l=a+"";return a==null&&(l=a=(this.style.removeProperty(n),no(this,n))),i===l?null:i===s&&l===r?o:(r=l,o=t(s=i,a))}}function M8(n,t){var e,s,r,o="style."+t,i="end."+o,a;return function(){var l=Zn(this,n),c=l.on,u=l.value[o]==null?a||(a=pC(t)):void 0;(c!==e||r!==u)&&(s=(e=c).copy()).on(i,r=u),l.on=s}}function L8(n,t,e){var s=(n+="")=="transform"?B5:fC;return t==null?this.styleTween(n,_8(n,s)).on("end.style."+n,pC(n)):typeof t=="function"?this.styleTween(n,O8(n,s,zp(this,"style."+n,t))).each(M8(this._id,n)):this.styleTween(n,F8(n,s,t),e).on("end.style."+n,null)}function P8(n,t,e){return function(s){this.style.setProperty(n,t.call(this,s),e)}}function z8(n,t,e){var s,r;function o(){var i=t.apply(this,arguments);return i!==r&&(s=(r=i)&&P8(n,i,e)),s}return o._value=t,o}function B8(n,t,e){var s="style."+(n+="");if(arguments.length<2)return(s=this.tween(s))&&s._value;if(t==null)return this.tween(s,null);if(typeof t!="function")throw new Error;return this.tween(s,z8(n,t,e??""))}function V8(n){return function(){this.textContent=n}}function W8(n){return function(){var t=n(this);this.textContent=t??""}}function U8(n){return this.tween("text",typeof n=="function"?W8(zp(this,"text",n)):V8(n==null?"":n+""))}function G8(n){return function(t){this.textContent=n.call(this,t)}}function H8(n){var t,e;function s(){var r=n.apply(this,arguments);return r!==e&&(t=(e=r)&&G8(r)),t}return s._value=n,s}function q8(n){var t="text";if(arguments.length<1)return(t=this.tween(t))&&t._value;if(n==null)return this.tween(t,null);if(typeof n!="function")throw new Error;return this.tween(t,H8(n))}function j8(){for(var n=this._name,t=this._id,e=mC(),s=this._groups,r=s.length,o=0;o<r;++o)for(var i=s[o],a=i.length,l,c=0;c<a;++c)if(l=i[c]){var u=An(l,t);Nu(l,n,e,c,i,{time:u.time+u.delay+u.duration,delay:0,duration:u.duration,ease:u.ease})}return new cs(s,this._parents,n,e)}function K8(){var n,t,e=this,s=e._id,r=e.size();return new Promise(function(o,i){var a={value:i},l={value:function(){--r===0&&o()}};e.each(function(){var c=Zn(this,s),u=c.on;u!==n&&(t=(n=u).copy(),t._.cancel.push(a),t._.interrupt.push(a),t._.end.push(l)),c.on=t}),r===0&&o()})}var X8=0;function cs(n,t,e,s){this._groups=n,this._parents=t,this._name=e,this._id=s}function mC(){return++X8}var ts=$a.prototype;cs.prototype={constructor:cs,select:E8,selectAll:R8,selectChild:ts.selectChild,selectChildren:ts.selectChildren,filter:C8,merge:$8,selection:D8,transition:j8,call:ts.call,nodes:ts.nodes,node:ts.node,size:ts.size,empty:ts.empty,each:ts.each,on:S8,attr:i8,attrTween:h8,style:L8,styleTween:B8,text:U8,textTween:q8,remove:T8,tween:Q5,delay:p8,duration:x8,ease:y8,easeVarying:v8,end:K8,[Symbol.iterator]:ts[Symbol.iterator]};function Y8(n){return((n*=2)<=1?n*n*n:(n-=2)*n*n+2)/2}var Z8={time:null,delay:0,duration:250,ease:Y8};function J8(n,t){for(var e;!(e=n.__transition)||!(e=e[t]);)if(!(n=n.parentNode))throw new Error(`transition ${t} not found`);return e}function Q8(n){var t,e;n instanceof cs?(t=n._id,n=n._name):(t=mC(),(e=Z8).time=Lp(),n=n==null?null:n+"");for(var s=this._groups,r=s.length,o=0;o<r;++o)for(var i=s[o],a=i.length,l,c=0;c<a;++c)(l=i[c])&&Nu(l,n,t,c,i,e||J8(l,t));return new cs(s,this._parents,n,t)}$a.prototype.interrupt=Y5;$a.prototype.transition=Q8;function tY(n){return Math.abs(n=Math.round(n))>=1e21?n.toLocaleString("en").replace(/,/g,""):n.toString(10)}function jl(n,t){if((e=(n=t?n.toExponential(t-1):n.toExponential()).indexOf("e"))<0)return null;var e,s=n.slice(0,e);return[s.length>1?s[0]+s.slice(2):s,+n.slice(e+1)]}function ro(n){return n=jl(Math.abs(n)),n?n[1]:NaN}function eY(n,t){return function(e,s){for(var r=e.length,o=[],i=0,a=n[0],l=0;r>0&&a>0&&(l+a+1>s&&(a=Math.max(1,s-l)),o.push(e.substring(r-=a,r+a)),!((l+=a+1)>s));)a=n[i=(i+1)%n.length];return o.reverse().join(t)}}function nY(n){return function(t){return t.replace(/[0-9]/g,function(e){return n[+e]})}}var sY=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function Kl(n){if(!(t=sY.exec(n)))throw new Error("invalid format: "+n);var t;return new Bp({fill:t[1],align:t[2],sign:t[3],symbol:t[4],zero:t[5],width:t[6],comma:t[7],precision:t[8]&&t[8].slice(1),trim:t[9],type:t[10]})}Kl.prototype=Bp.prototype;function Bp(n){this.fill=n.fill===void 0?" ":n.fill+"",this.align=n.align===void 0?">":n.align+"",this.sign=n.sign===void 0?"-":n.sign+"",this.symbol=n.symbol===void 0?"":n.symbol+"",this.zero=!!n.zero,this.width=n.width===void 0?void 0:+n.width,this.comma=!!n.comma,this.precision=n.precision===void 0?void 0:+n.precision,this.trim=!!n.trim,this.type=n.type===void 0?"":n.type+""}Bp.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function rY(n){t:for(var t=n.length,e=1,s=-1,r;e<t;++e)switch(n[e]){case".":s=r=e;break;case"0":s===0&&(s=e),r=e;break;default:if(!+n[e])break t;s>0&&(s=0);break}return s>0?n.slice(0,s)+n.slice(r+1):n}var gC;function oY(n,t){var e=jl(n,t);if(!e)return n+"";var s=e[0],r=e[1],o=r-(gC=Math.max(-8,Math.min(8,Math.floor(r/3)))*3)+1,i=s.length;return o===i?s:o>i?s+new Array(o-i+1).join("0"):o>0?s.slice(0,o)+"."+s.slice(o):"0."+new Array(1-o).join("0")+jl(n,Math.max(0,t+o-1))[0]}function jg(n,t){var e=jl(n,t);if(!e)return n+"";var s=e[0],r=e[1];return r<0?"0."+new Array(-r).join("0")+s:s.length>r+1?s.slice(0,r+1)+"."+s.slice(r+1):s+new Array(r-s.length+2).join("0")}const Kg={"%":(n,t)=>(n*100).toFixed(t),b:n=>Math.round(n).toString(2),c:n=>n+"",d:tY,e:(n,t)=>n.toExponential(t),f:(n,t)=>n.toFixed(t),g:(n,t)=>n.toPrecision(t),o:n=>Math.round(n).toString(8),p:(n,t)=>jg(n*100,t),r:jg,s:oY,X:n=>Math.round(n).toString(16).toUpperCase(),x:n=>Math.round(n).toString(16)};function Xg(n){return n}var Yg=Array.prototype.map,Zg=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function iY(n){var t=n.grouping===void 0||n.thousands===void 0?Xg:eY(Yg.call(n.grouping,Number),n.thousands+""),e=n.currency===void 0?"":n.currency[0]+"",s=n.currency===void 0?"":n.currency[1]+"",r=n.decimal===void 0?".":n.decimal+"",o=n.numerals===void 0?Xg:nY(Yg.call(n.numerals,String)),i=n.percent===void 0?"%":n.percent+"",a=n.minus===void 0?"−":n.minus+"",l=n.nan===void 0?"NaN":n.nan+"";function c(h){h=Kl(h);var d=h.fill,f=h.align,p=h.sign,m=h.symbol,g=h.zero,x=h.width,b=h.comma,w=h.precision,y=h.trim,v=h.type;v==="n"?(b=!0,v="g"):Kg[v]||(w===void 0&&(w=12),y=!0,v="g"),(g||d==="0"&&f==="=")&&(g=!0,d="0",f="=");var $=m==="$"?e:m==="#"&&/[boxX]/.test(v)?"0"+v.toLowerCase():"",N=m==="$"?s:/[%p]/.test(v)?i:"",T=Kg[v],k=/[defgprs%]/.test(v);w=w===void 0?6:/[gprs]/.test(v)?Math.max(1,Math.min(21,w)):Math.max(0,Math.min(20,w));function I(C){var R=$,A=N,O,M,z;if(v==="c")A=T(C)+A,C="";else{C=+C;var U=C<0||1/C<0;if(C=isNaN(C)?l:T(Math.abs(C),w),y&&(C=rY(C)),U&&+C==0&&p!=="+"&&(U=!1),R=(U?p==="("?p:a:p==="-"||p==="("?"":p)+R,A=(v==="s"?Zg[8+gC/3]:"")+A+(U&&p==="("?")":""),k){for(O=-1,M=C.length;++O<M;)if(z=C.charCodeAt(O),48>z||z>57){A=(z===46?r+C.slice(O+1):C.slice(O))+A,C=C.slice(0,O);break}}}b&&!g&&(C=t(C,1/0));var B=R.length+C.length+A.length,G=B<x?new Array(x-B+1).join(d):"";switch(b&&g&&(C=t(G+C,G.length?x-A.length:1/0),G=""),f){case"<":C=R+C+A+G;break;case"=":C=R+G+C+A;break;case"^":C=G.slice(0,B=G.length>>1)+R+C+A+G.slice(B);break;default:C=G+R+C+A;break}return o(C)}return I.toString=function(){return h+""},I}function u(h,d){var f=c((h=Kl(h),h.type="f",h)),p=Math.max(-8,Math.min(8,Math.floor(ro(d)/3)))*3,m=Math.pow(10,-p),g=Zg[8+p/3];return function(x){return f(m*x)+g}}return{format:c,formatPrefix:u}}var qa,xC,bC;aY({thousands:",",grouping:[3],currency:["$",""]});function aY(n){return qa=iY(n),xC=qa.format,bC=qa.formatPrefix,qa}function lY(n){return Math.max(0,-ro(Math.abs(n)))}function cY(n,t){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(ro(t)/3)))*3-ro(Math.abs(n)))}function uY(n,t){return n=Math.abs(n),t=Math.abs(t)-n,Math.max(0,ro(t)-ro(n))+1}function hY(n,t){switch(arguments.length){case 0:break;case 1:this.range(n);break;default:this.range(t).domain(n);break}return this}function dY(n){return function(){return n}}function fY(n){return+n}var Jg=[0,1];function Mr(n){return n}function Hh(n,t){return(t-=n=+n)?function(e){return(e-n)/t}:dY(isNaN(t)?NaN:.5)}function pY(n,t){var e;return n>t&&(e=n,n=t,t=e),function(s){return Math.max(n,Math.min(t,s))}}function mY(n,t,e){var s=n[0],r=n[1],o=t[0],i=t[1];return r<s?(s=Hh(r,s),o=e(i,o)):(s=Hh(s,r),o=e(o,i)),function(a){return o(s(a))}}function gY(n,t,e){var s=Math.min(n.length,t.length)-1,r=new Array(s),o=new Array(s),i=-1;for(n[s]<n[0]&&(n=n.slice().reverse(),t=t.slice().reverse());++i<s;)r[i]=Hh(n[i],n[i+1]),o[i]=e(t[i],t[i+1]);return function(a){var l=kK(n,a,1,s)-1;return o[l](r[l](a))}}function xY(n,t){return t.domain(n.domain()).range(n.range()).interpolate(n.interpolate()).clamp(n.clamp()).unknown(n.unknown())}function bY(){var n=Jg,t=Jg,e=Mp,s,r,o,i=Mr,a,l,c;function u(){var d=Math.min(n.length,t.length);return i!==Mr&&(i=pY(n[0],n[d-1])),a=d>2?gY:mY,l=c=null,h}function h(d){return d==null||isNaN(d=+d)?o:(l||(l=a(n.map(s),t,e)))(s(i(d)))}return h.invert=function(d){return i(r((c||(c=a(t,n.map(s),wn)))(d)))},h.domain=function(d){return arguments.length?(n=Array.from(d,fY),u()):n.slice()},h.range=function(d){return arguments.length?(t=Array.from(d),u()):t.slice()},h.rangeRound=function(d){return t=Array.from(d),e=L5,u()},h.clamp=function(d){return arguments.length?(i=d?!0:Mr,u()):i!==Mr},h.interpolate=function(d){return arguments.length?(e=d,u()):e},h.unknown=function(d){return arguments.length?(o=d,h):o},function(d,f){return s=d,r=f,u()}}function yY(){return bY()(Mr,Mr)}function wY(n,t,e,s){var r=EK(n,t,e),o;switch(s=Kl(s??",f"),s.type){case"s":{var i=Math.max(Math.abs(n),Math.abs(t));return s.precision==null&&!isNaN(o=cY(r,i))&&(s.precision=o),bC(s,i)}case"":case"e":case"g":case"p":case"r":{s.precision==null&&!isNaN(o=uY(r,Math.max(Math.abs(n),Math.abs(t))))&&(s.precision=o-(s.type==="e"));break}case"f":case"%":{s.precision==null&&!isNaN(o=lY(r))&&(s.precision=o-(s.type==="%")*2);break}}return xC(s)}function vY(n){var t=n.domain;return n.ticks=function(e){var s=t();return TK(s[0],s[s.length-1],e??10)},n.tickFormat=function(e,s){var r=t();return wY(r[0],r[r.length-1],e??10,s)},n.nice=function(e){e==null&&(e=10);var s=t(),r=0,o=s.length-1,i=s[r],a=s[o],l,c,u=10;for(a<i&&(c=i,i=a,a=c,c=r,r=o,o=c);u-- >0;){if(c=Ph(i,a,e),c===l)return s[r]=i,s[o]=a,t(s);if(c>0)i=Math.floor(i/c)*c,a=Math.ceil(a/c)*c;else if(c<0)i=Math.ceil(i*c)/c,a=Math.floor(a*c)/c;else break;l=c}return n},n}function CY(){var n=yY();return n.copy=function(){return xY(n,CY())},hY.apply(n,arguments),vY(n)}function zo(n,t,e){this.k=n,this.x=t,this.y=e}zo.prototype={constructor:zo,scale:function(n){return n===1?this:new zo(this.k*n,this.x,this.y)},translate:function(n,t){return n===0&t===0?this:new zo(this.k,this.x+this.k*n,this.y+this.k*t)},apply:function(n){return[n[0]*this.k+this.x,n[1]*this.k+this.y]},applyX:function(n){return n*this.k+this.x},applyY:function(n){return n*this.k+this.y},invert:function(n){return[(n[0]-this.x)/this.k,(n[1]-this.y)/this.k]},invertX:function(n){return(n-this.x)/this.k},invertY:function(n){return(n-this.y)/this.k},rescaleX:function(n){return n.copy().domain(n.range().map(this.invertX,this).map(n.invert,n))},rescaleY:function(n){return n.copy().domain(n.range().map(this.invertY,this).map(n.invert,n))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};zo.prototype;var $Y=Qg('<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" class="svelte-wfqo9c"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>'),kY=Qg('<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" class="svelte-wfqo9c"><path d="M8 5v14l11-7z"></path></svg>'),IY=oo('<div class="time-label svelte-wfqo9c"> </div>'),SY=oo('<div class="tick-container svelte-wfqo9c"><div class="tick svelte-wfqo9c" style="left: 1%;"></div> <div class="tick-label svelte-wfqo9c" style="left: 1%;">t=0</div> <!> <div class="tick svelte-wfqo9c" style="left: 99%;"></div> <div class="tick-label svelte-wfqo9c" style="left: 99%;">t=1</div></div>'),NY=oo('<div class="time-label-standalone svelte-wfqo9c"> </div>'),TY=oo('<div><div class="time-slider-inner svelte-wfqo9c"><button class="play-button svelte-wfqo9c"><!></button> <div class="slider-wrapper svelte-wfqo9c"><input type="range" class="slider svelte-wfqo9c"/> <!></div></div></div>');function n7(n,t){ex(t,!1);let e=se(t,"value",12,0),s=se(t,"isPlaying",8,!1),r=se(t,"min",8,0),o=se(t,"max",8,1),i=se(t,"step",8,.001),a=se(t,"disabled",8,!1),l=se(t,"color",8,"#4594e3"),c=se(t,"showTicks",8,!0),u=se(t,"showTimeLabel",8,!0),h=se(t,"timeLabel",8,"Time"),d=se(t,"dragEnabled",8,!0),f=se(t,"onTogglePlay",8,()=>{}),p=se(t,"onInput",8,()=>{}),m=sx();function g(){f()()}TC(()=>(Sa(e()),Sa(r()),Sa(o()),Sa(l())),()=>{const A=(e()-r())/(o()-r())*100;nx(m,`background: linear-gradient(to right, ${l()} ${A}%, #d3d3d3 ${A}%)`)}),EC(),tx();var x=TY();let b;var w=Xe(x),y=Xe(w);y.__click=g;var v=Xe(y);{var $=A=>{var O=$Y();es(A,O)},N=A=>{var O=kY();es(A,O)};Ro(v,A=>{s()?A($):A(N,!1)})}Ye(y);var T=Lr(y,2),k=Xe(T);FC(k),k.__input=function(...A){p()?.apply(this,A)};var I=Lr(k,2);{var C=A=>{var O=SY(),M=Lr(Xe(O),4);{var z=U=>{var B=IY(),G=Xe(B,!0);Ye(B),ja(()=>Vp(G,h())),es(U,B)};Ro(M,U=>{u()&&U(z)})}RC(4),Ye(O),es(A,O)},R=A=>{var O=CC(),M=AC(O);{var z=U=>{var B=NY(),G=Xe(B,!0);Ye(B),ja(()=>Vp(G,h())),es(U,B)};Ro(M,U=>{u()&&U(z)},!0)}es(A,O)};Ro(I,A=>{c()?A(C):A(R,!1)})}Ye(T),Ye(w),Ye(x),ja(()=>{b=th(x,1,"time-slider-container svelte-wfqo9c",null,b,{disabled:a()}),eh(y,c()?"":"margin-top: 12px; margin-bottom: 12px;"),Ta(y,"aria-label",s()?"Pause":"Play"),y.disabled=a(),Ta(k,"min",r()),Ta(k,"max",o()),Ta(k,"step",i()),eh(k,`${Ka(m)??""}; --slider-color: ${l()??""};${d()?"":" pointer-events: none;"}`),k.disabled=a()}),VC(k,e),es(n,x),rx()}DC(["click","input"]);function s7(n,t,e,s,r){const{font:o="22px Helvetica, Arial, sans-serif",color:i="#666",align:a="center",baseline:l="top",offsetX:c=0,offsetY:u=0}=r??{};n.save(),n.font=o,n.fillStyle=i,n.textAlign=a,n.textBaseline=l,n.fillText(t,e+c,s+u),n.restore()}function EY(n,t,e,s,r,o){const i=Math.atan2(r-e,s-t);n.beginPath(),n.moveTo(t,e),n.lineTo(s,r),n.stroke();let a=i;n.beginPath(),n.moveTo(s+o*Math.cos(a),r+o*Math.sin(a)),a+=2*Math.PI/3,n.lineTo(s+o*Math.cos(a),r+o*Math.sin(a)),a+=2*Math.PI/3,n.lineTo(s+o*Math.cos(a),r+o*Math.sin(a)),n.closePath(),n.fill()}function r7(n,t,e,s){if(t.length===0||e.length===0)return;const r=s.headRadius??5;let o=0;for(const[i,a]of e){const l=Math.sqrt(i*i+a*a);l>o&&(o=l)}o===0&&(o=1),n.save(),n.strokeStyle=s.color,n.fillStyle=s.color,n.lineWidth=s.strokeWidth,n.globalAlpha=1,n.lineCap="butt",n.lineJoin="miter",n.shadowColor="transparent",n.shadowBlur=0;for(let i=0;i<t.length;i++){const[a,l]=t[i],[c,u]=e[i];let h,d;if(s.normalizeVectors){const f=Math.sqrt(c*c+u*u);f>0?(h=c/f*s.arrowScale,d=u/f*s.arrowScale):(h=0,d=0)}else h=c/o*s.arrowScale,d=u/o*s.arrowScale;EY(n,a,l,a+h,l+d,r)}n.restore()}function o7(n,t,e,s,r,o){n.fillStyle=s;for(const[i,a]of t)n.beginPath(),n.arc(i,a,e,0,2*Math.PI),n.globalAlpha=r,n.fill();n.globalAlpha=1}var RY=oo('<div class="figure-footer svelte-377qv7"><!></div>'),AY=oo('<figure class="double-figure svelte-377qv7"><div class="double-figure-container svelte-377qv7"><div><!></div> <div><!></div></div> <!> <figcaption class="figure-caption svelte-377qv7"><!></figcaption></figure>');function i7(n,t){ex(t,!1);let e=se(t,"left",8,void 0),s=se(t,"right",8,void 0),r=se(t,"footer",8,void 0),o=se(t,"caption",8,void 0),i=se(t,"gap",8,20),a=se(t,"backgroundVisible",8,!0),l=se(t,"isActive",24,()=>LC(!1)),c=sx(),u=null,h=!1,d=!0;function f(){l().set(h&&d)}OC(()=>{u=new IntersectionObserver(C=>{C.forEach(R=>{h=R.isIntersecting,f()})},{threshold:0,rootMargin:"50px"}),Ka(c)&&u.observe(Ka(c));const I=()=>{d=!document.hidden,f()};return document.addEventListener("visibilitychange",I),()=>{document.removeEventListener("visibilitychange",I)}}),MC(()=>{u&&u.disconnect()}),tx();var p=AY(),m=Xe(p),g=Xe(m);let x;var b=Xe(g);Ea(b,()=>e()??Na),Ye(g);var w=Lr(g,2);let y;var v=Xe(w);Ea(v,()=>s()??Na),Ye(w),Ye(m);var $=Lr(m,2);{var N=I=>{var C=RY(),R=Xe(C);Ea(R,()=>r()??Na),Ye(C),es(I,C)};Ro($,I=>{r()&&I(N)})}var T=Lr($,2),k=Xe(T);Ea(k,()=>o()??Na),Ye(T),Ye(p),_C(p,I=>nx(c,I),()=>Ka(c)),ja(()=>{eh(m,`gap: ${i()??""}px;`),x=th(g,1,"figure-content left-figure svelte-377qv7",null,x,{"no-background":!a()}),y=th(w,1,"figure-content right-figure svelte-377qv7",null,y,{"no-background":!a()})}),es(n,p),rx()}export{QY as A,i7 as D,En as S,n7 as T,XY as a,ZY as b,WY as c,CY as d,eh as e,o7 as f,Uv as g,yK as h,BY as i,th as j,TK as k,KY as l,e7 as m,s7 as n,V as o,Tt as p,_ as q,u5 as r,VY as s,Ph as t,r7 as u,EY as v,WC as w,YY as x,JY as y,t7 as z};
