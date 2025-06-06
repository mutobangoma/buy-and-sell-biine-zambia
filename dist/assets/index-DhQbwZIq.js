(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();function $w(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Fm={exports:{}},Nu={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s0;function hN(){if(s0)return Nu;s0=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(i,a,l){var c=null;if(l!==void 0&&(c=""+l),a.key!==void 0&&(c=""+a.key),"key"in a){l={};for(var d in a)d!=="key"&&(l[d]=a[d])}else l=a;return a=l.ref,{$$typeof:n,type:i,key:c,ref:a!==void 0?a:null,props:l}}return Nu.Fragment=e,Nu.jsx=t,Nu.jsxs=t,Nu}var a0;function fN(){return a0||(a0=1,Fm.exports=hN()),Fm.exports}var ue=fN(),Hm={exports:{}},Ce={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o0;function dN(){if(o0)return Ce;o0=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),T=Symbol.iterator;function S(k){return k===null||typeof k!="object"?null:(k=T&&k[T]||k["@@iterator"],typeof k=="function"?k:null)}var I={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},N=Object.assign,H={};function B(k,te,oe){this.props=k,this.context=te,this.refs=H,this.updater=oe||I}B.prototype.isReactComponent={},B.prototype.setState=function(k,te){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,te,"setState")},B.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function $(){}$.prototype=B.prototype;function W(k,te,oe){this.props=k,this.context=te,this.refs=H,this.updater=oe||I}var ee=W.prototype=new $;ee.constructor=W,N(ee,B.prototype),ee.isPureReactComponent=!0;var ae=Array.isArray,he={H:null,A:null,T:null,S:null,V:null},_e=Object.prototype.hasOwnProperty;function D(k,te,oe,ie,ye,Oe){return oe=Oe.ref,{$$typeof:n,type:k,key:te,ref:oe!==void 0?oe:null,props:Oe}}function A(k,te){return D(k.type,te,void 0,void 0,void 0,k.props)}function R(k){return typeof k=="object"&&k!==null&&k.$$typeof===n}function P(k){var te={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(oe){return te[oe]})}var x=/\/+/g;function V(k,te){return typeof k=="object"&&k!==null&&k.key!=null?P(""+k.key):te.toString(36)}function O(){}function Wt(k){switch(k.status){case"fulfilled":return k.value;case"rejected":throw k.reason;default:switch(typeof k.status=="string"?k.then(O,O):(k.status="pending",k.then(function(te){k.status==="pending"&&(k.status="fulfilled",k.value=te)},function(te){k.status==="pending"&&(k.status="rejected",k.reason=te)})),k.status){case"fulfilled":return k.value;case"rejected":throw k.reason}}throw k}function pt(k,te,oe,ie,ye){var Oe=typeof k;(Oe==="undefined"||Oe==="boolean")&&(k=null);var be=!1;if(k===null)be=!0;else switch(Oe){case"bigint":case"string":case"number":be=!0;break;case"object":switch(k.$$typeof){case n:case e:be=!0;break;case y:return be=k._init,pt(be(k._payload),te,oe,ie,ye)}}if(be)return ye=ye(k),be=ie===""?"."+V(k,0):ie,ae(ye)?(oe="",be!=null&&(oe=be.replace(x,"$&/")+"/"),pt(ye,te,oe,"",function(Ti){return Ti})):ye!=null&&(R(ye)&&(ye=A(ye,oe+(ye.key==null||k&&k.key===ye.key?"":(""+ye.key).replace(x,"$&/")+"/")+be)),te.push(ye)),1;be=0;var zt=ie===""?".":ie+":";if(ae(k))for(var rt=0;rt<k.length;rt++)ie=k[rt],Oe=zt+V(ie,rt),be+=pt(ie,te,oe,Oe,ye);else if(rt=S(k),typeof rt=="function")for(k=rt.call(k),rt=0;!(ie=k.next()).done;)ie=ie.value,Oe=zt+V(ie,rt++),be+=pt(ie,te,oe,Oe,ye);else if(Oe==="object"){if(typeof k.then=="function")return pt(Wt(k),te,oe,ie,ye);throw te=String(k),Error("Objects are not valid as a React child (found: "+(te==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":te)+"). If you meant to render a collection of children, use an array instead.")}return be}function Y(k,te,oe){if(k==null)return k;var ie=[],ye=0;return pt(k,ie,"","",function(Oe){return te.call(oe,Oe,ye++)}),ie}function se(k){if(k._status===-1){var te=k._result;te=te(),te.then(function(oe){(k._status===0||k._status===-1)&&(k._status=1,k._result=oe)},function(oe){(k._status===0||k._status===-1)&&(k._status=2,k._result=oe)}),k._status===-1&&(k._status=0,k._result=te)}if(k._status===1)return k._result.default;throw k._result}var me=typeof reportError=="function"?reportError:function(k){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var te=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof k=="object"&&k!==null&&typeof k.message=="string"?String(k.message):String(k),error:k});if(!window.dispatchEvent(te))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",k);return}console.error(k)};function qe(){}return Ce.Children={map:Y,forEach:function(k,te,oe){Y(k,function(){te.apply(this,arguments)},oe)},count:function(k){var te=0;return Y(k,function(){te++}),te},toArray:function(k){return Y(k,function(te){return te})||[]},only:function(k){if(!R(k))throw Error("React.Children.only expected to receive a single React element child.");return k}},Ce.Component=B,Ce.Fragment=t,Ce.Profiler=a,Ce.PureComponent=W,Ce.StrictMode=i,Ce.Suspense=p,Ce.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=he,Ce.__COMPILER_RUNTIME={__proto__:null,c:function(k){return he.H.useMemoCache(k)}},Ce.cache=function(k){return function(){return k.apply(null,arguments)}},Ce.cloneElement=function(k,te,oe){if(k==null)throw Error("The argument must be a React element, but you passed "+k+".");var ie=N({},k.props),ye=k.key,Oe=void 0;if(te!=null)for(be in te.ref!==void 0&&(Oe=void 0),te.key!==void 0&&(ye=""+te.key),te)!_e.call(te,be)||be==="key"||be==="__self"||be==="__source"||be==="ref"&&te.ref===void 0||(ie[be]=te[be]);var be=arguments.length-2;if(be===1)ie.children=oe;else if(1<be){for(var zt=Array(be),rt=0;rt<be;rt++)zt[rt]=arguments[rt+2];ie.children=zt}return D(k.type,ye,void 0,void 0,Oe,ie)},Ce.createContext=function(k){return k={$$typeof:c,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null},k.Provider=k,k.Consumer={$$typeof:l,_context:k},k},Ce.createElement=function(k,te,oe){var ie,ye={},Oe=null;if(te!=null)for(ie in te.key!==void 0&&(Oe=""+te.key),te)_e.call(te,ie)&&ie!=="key"&&ie!=="__self"&&ie!=="__source"&&(ye[ie]=te[ie]);var be=arguments.length-2;if(be===1)ye.children=oe;else if(1<be){for(var zt=Array(be),rt=0;rt<be;rt++)zt[rt]=arguments[rt+2];ye.children=zt}if(k&&k.defaultProps)for(ie in be=k.defaultProps,be)ye[ie]===void 0&&(ye[ie]=be[ie]);return D(k,Oe,void 0,void 0,null,ye)},Ce.createRef=function(){return{current:null}},Ce.forwardRef=function(k){return{$$typeof:d,render:k}},Ce.isValidElement=R,Ce.lazy=function(k){return{$$typeof:y,_payload:{_status:-1,_result:k},_init:se}},Ce.memo=function(k,te){return{$$typeof:m,type:k,compare:te===void 0?null:te}},Ce.startTransition=function(k){var te=he.T,oe={};he.T=oe;try{var ie=k(),ye=he.S;ye!==null&&ye(oe,ie),typeof ie=="object"&&ie!==null&&typeof ie.then=="function"&&ie.then(qe,me)}catch(Oe){me(Oe)}finally{he.T=te}},Ce.unstable_useCacheRefresh=function(){return he.H.useCacheRefresh()},Ce.use=function(k){return he.H.use(k)},Ce.useActionState=function(k,te,oe){return he.H.useActionState(k,te,oe)},Ce.useCallback=function(k,te){return he.H.useCallback(k,te)},Ce.useContext=function(k){return he.H.useContext(k)},Ce.useDebugValue=function(){},Ce.useDeferredValue=function(k,te){return he.H.useDeferredValue(k,te)},Ce.useEffect=function(k,te,oe){var ie=he.H;if(typeof oe=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return ie.useEffect(k,te)},Ce.useId=function(){return he.H.useId()},Ce.useImperativeHandle=function(k,te,oe){return he.H.useImperativeHandle(k,te,oe)},Ce.useInsertionEffect=function(k,te){return he.H.useInsertionEffect(k,te)},Ce.useLayoutEffect=function(k,te){return he.H.useLayoutEffect(k,te)},Ce.useMemo=function(k,te){return he.H.useMemo(k,te)},Ce.useOptimistic=function(k,te){return he.H.useOptimistic(k,te)},Ce.useReducer=function(k,te,oe){return he.H.useReducer(k,te,oe)},Ce.useRef=function(k){return he.H.useRef(k)},Ce.useState=function(k){return he.H.useState(k)},Ce.useSyncExternalStore=function(k,te,oe){return he.H.useSyncExternalStore(k,te,oe)},Ce.useTransition=function(){return he.H.useTransition()},Ce.version="19.1.0",Ce}var l0;function h_(){return l0||(l0=1,Hm.exports=dN()),Hm.exports}var K=h_();const pN=$w(K);var jm={exports:{}},Ou={},qm={exports:{}},Gm={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u0;function mN(){return u0||(u0=1,function(n){function e(Y,se){var me=Y.length;Y.push(se);e:for(;0<me;){var qe=me-1>>>1,k=Y[qe];if(0<a(k,se))Y[qe]=se,Y[me]=k,me=qe;else break e}}function t(Y){return Y.length===0?null:Y[0]}function i(Y){if(Y.length===0)return null;var se=Y[0],me=Y.pop();if(me!==se){Y[0]=me;e:for(var qe=0,k=Y.length,te=k>>>1;qe<te;){var oe=2*(qe+1)-1,ie=Y[oe],ye=oe+1,Oe=Y[ye];if(0>a(ie,me))ye<k&&0>a(Oe,ie)?(Y[qe]=Oe,Y[ye]=me,qe=ye):(Y[qe]=ie,Y[oe]=me,qe=oe);else if(ye<k&&0>a(Oe,me))Y[qe]=Oe,Y[ye]=me,qe=ye;else break e}}return se}function a(Y,se){var me=Y.sortIndex-se.sortIndex;return me!==0?me:Y.id-se.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var c=Date,d=c.now();n.unstable_now=function(){return c.now()-d}}var p=[],m=[],y=1,T=null,S=3,I=!1,N=!1,H=!1,B=!1,$=typeof setTimeout=="function"?setTimeout:null,W=typeof clearTimeout=="function"?clearTimeout:null,ee=typeof setImmediate<"u"?setImmediate:null;function ae(Y){for(var se=t(m);se!==null;){if(se.callback===null)i(m);else if(se.startTime<=Y)i(m),se.sortIndex=se.expirationTime,e(p,se);else break;se=t(m)}}function he(Y){if(H=!1,ae(Y),!N)if(t(p)!==null)N=!0,_e||(_e=!0,V());else{var se=t(m);se!==null&&pt(he,se.startTime-Y)}}var _e=!1,D=-1,A=5,R=-1;function P(){return B?!0:!(n.unstable_now()-R<A)}function x(){if(B=!1,_e){var Y=n.unstable_now();R=Y;var se=!0;try{e:{N=!1,H&&(H=!1,W(D),D=-1),I=!0;var me=S;try{t:{for(ae(Y),T=t(p);T!==null&&!(T.expirationTime>Y&&P());){var qe=T.callback;if(typeof qe=="function"){T.callback=null,S=T.priorityLevel;var k=qe(T.expirationTime<=Y);if(Y=n.unstable_now(),typeof k=="function"){T.callback=k,ae(Y),se=!0;break t}T===t(p)&&i(p),ae(Y)}else i(p);T=t(p)}if(T!==null)se=!0;else{var te=t(m);te!==null&&pt(he,te.startTime-Y),se=!1}}break e}finally{T=null,S=me,I=!1}se=void 0}}finally{se?V():_e=!1}}}var V;if(typeof ee=="function")V=function(){ee(x)};else if(typeof MessageChannel<"u"){var O=new MessageChannel,Wt=O.port2;O.port1.onmessage=x,V=function(){Wt.postMessage(null)}}else V=function(){$(x,0)};function pt(Y,se){D=$(function(){Y(n.unstable_now())},se)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(Y){Y.callback=null},n.unstable_forceFrameRate=function(Y){0>Y||125<Y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<Y?Math.floor(1e3/Y):5},n.unstable_getCurrentPriorityLevel=function(){return S},n.unstable_next=function(Y){switch(S){case 1:case 2:case 3:var se=3;break;default:se=S}var me=S;S=se;try{return Y()}finally{S=me}},n.unstable_requestPaint=function(){B=!0},n.unstable_runWithPriority=function(Y,se){switch(Y){case 1:case 2:case 3:case 4:case 5:break;default:Y=3}var me=S;S=Y;try{return se()}finally{S=me}},n.unstable_scheduleCallback=function(Y,se,me){var qe=n.unstable_now();switch(typeof me=="object"&&me!==null?(me=me.delay,me=typeof me=="number"&&0<me?qe+me:qe):me=qe,Y){case 1:var k=-1;break;case 2:k=250;break;case 5:k=1073741823;break;case 4:k=1e4;break;default:k=5e3}return k=me+k,Y={id:y++,callback:se,priorityLevel:Y,startTime:me,expirationTime:k,sortIndex:-1},me>qe?(Y.sortIndex=me,e(m,Y),t(p)===null&&Y===t(m)&&(H?(W(D),D=-1):H=!0,pt(he,me-qe))):(Y.sortIndex=k,e(p,Y),N||I||(N=!0,_e||(_e=!0,V()))),Y},n.unstable_shouldYield=P,n.unstable_wrapCallback=function(Y){var se=S;return function(){var me=S;S=se;try{return Y.apply(this,arguments)}finally{S=me}}}}(Gm)),Gm}var c0;function gN(){return c0||(c0=1,qm.exports=mN()),qm.exports}var Km={exports:{}},un={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h0;function _N(){if(h0)return un;h0=1;var n=h_();function e(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)m+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var i={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},a=Symbol.for("react.portal");function l(p,m,y){var T=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:T==null?null:""+T,children:p,containerInfo:m,implementation:y}}var c=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return un.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,un.createPortal=function(p,m){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(e(299));return l(p,m,null,y)},un.flushSync=function(p){var m=c.T,y=i.p;try{if(c.T=null,i.p=2,p)return p()}finally{c.T=m,i.p=y,i.d.f()}},un.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,i.d.C(p,m))},un.prefetchDNS=function(p){typeof p=="string"&&i.d.D(p)},un.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var y=m.as,T=d(y,m.crossOrigin),S=typeof m.integrity=="string"?m.integrity:void 0,I=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;y==="style"?i.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:T,integrity:S,fetchPriority:I}):y==="script"&&i.d.X(p,{crossOrigin:T,integrity:S,fetchPriority:I,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},un.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var y=d(m.as,m.crossOrigin);i.d.M(p,{crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&i.d.M(p)},un.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var y=m.as,T=d(y,m.crossOrigin);i.d.L(p,y,{crossOrigin:T,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},un.preloadModule=function(p,m){if(typeof p=="string")if(m){var y=d(m.as,m.crossOrigin);i.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else i.d.m(p)},un.requestFormReset=function(p){i.d.r(p)},un.unstable_batchedUpdates=function(p,m){return p(m)},un.useFormState=function(p,m,y){return c.H.useFormState(p,m,y)},un.useFormStatus=function(){return c.H.useHostTransitionStatus()},un.version="19.1.0",un}var f0;function yN(){if(f0)return Km.exports;f0=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Km.exports=_N(),Km.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d0;function vN(){if(d0)return Ou;d0=1;var n=gN(),e=h_(),t=yN();function i(r){var s="https://react.dev/errors/"+r;if(1<arguments.length){s+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)s+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+r+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function l(r){var s=r,o=r;if(r.alternate)for(;s.return;)s=s.return;else{r=s;do s=r,(s.flags&4098)!==0&&(o=s.return),r=s.return;while(r)}return s.tag===3?o:null}function c(r){if(r.tag===13){var s=r.memoizedState;if(s===null&&(r=r.alternate,r!==null&&(s=r.memoizedState)),s!==null)return s.dehydrated}return null}function d(r){if(l(r)!==r)throw Error(i(188))}function p(r){var s=r.alternate;if(!s){if(s=l(r),s===null)throw Error(i(188));return s!==r?null:r}for(var o=r,u=s;;){var f=o.return;if(f===null)break;var g=f.alternate;if(g===null){if(u=f.return,u!==null){o=u;continue}break}if(f.child===g.child){for(g=f.child;g;){if(g===o)return d(f),r;if(g===u)return d(f),s;g=g.sibling}throw Error(i(188))}if(o.return!==u.return)o=f,u=g;else{for(var E=!1,w=f.child;w;){if(w===o){E=!0,o=f,u=g;break}if(w===u){E=!0,u=f,o=g;break}w=w.sibling}if(!E){for(w=g.child;w;){if(w===o){E=!0,o=g,u=f;break}if(w===u){E=!0,u=g,o=f;break}w=w.sibling}if(!E)throw Error(i(189))}}if(o.alternate!==u)throw Error(i(190))}if(o.tag!==3)throw Error(i(188));return o.stateNode.current===o?r:s}function m(r){var s=r.tag;if(s===5||s===26||s===27||s===6)return r;for(r=r.child;r!==null;){if(s=m(r),s!==null)return s;r=r.sibling}return null}var y=Object.assign,T=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),I=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),H=Symbol.for("react.strict_mode"),B=Symbol.for("react.profiler"),$=Symbol.for("react.provider"),W=Symbol.for("react.consumer"),ee=Symbol.for("react.context"),ae=Symbol.for("react.forward_ref"),he=Symbol.for("react.suspense"),_e=Symbol.for("react.suspense_list"),D=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),R=Symbol.for("react.activity"),P=Symbol.for("react.memo_cache_sentinel"),x=Symbol.iterator;function V(r){return r===null||typeof r!="object"?null:(r=x&&r[x]||r["@@iterator"],typeof r=="function"?r:null)}var O=Symbol.for("react.client.reference");function Wt(r){if(r==null)return null;if(typeof r=="function")return r.$$typeof===O?null:r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case N:return"Fragment";case B:return"Profiler";case H:return"StrictMode";case he:return"Suspense";case _e:return"SuspenseList";case R:return"Activity"}if(typeof r=="object")switch(r.$$typeof){case I:return"Portal";case ee:return(r.displayName||"Context")+".Provider";case W:return(r._context.displayName||"Context")+".Consumer";case ae:var s=r.render;return r=r.displayName,r||(r=s.displayName||s.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case D:return s=r.displayName||null,s!==null?s:Wt(r.type)||"Memo";case A:s=r._payload,r=r._init;try{return Wt(r(s))}catch{}}return null}var pt=Array.isArray,Y=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,se=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,me={pending:!1,data:null,method:null,action:null},qe=[],k=-1;function te(r){return{current:r}}function oe(r){0>k||(r.current=qe[k],qe[k]=null,k--)}function ie(r,s){k++,qe[k]=r.current,r.current=s}var ye=te(null),Oe=te(null),be=te(null),zt=te(null);function rt(r,s){switch(ie(be,s),ie(Oe,r),ie(ye,null),s.nodeType){case 9:case 11:r=(r=s.documentElement)&&(r=r.namespaceURI)?PT(r):0;break;default:if(r=s.tagName,s=s.namespaceURI)s=PT(s),r=MT(s,r);else switch(r){case"svg":r=1;break;case"math":r=2;break;default:r=0}}oe(ye),ie(ye,r)}function Ti(){oe(ye),oe(Oe),oe(be)}function Fr(r){r.memoizedState!==null&&ie(zt,r);var s=ye.current,o=MT(s,r.type);s!==o&&(ie(Oe,r),ie(ye,o))}function Qi(r){Oe.current===r&&(oe(ye),oe(Oe)),zt.current===r&&(oe(zt),bu._currentValue=me)}var Us=Object.prototype.hasOwnProperty,Bs=n.unstable_scheduleCallback,zs=n.unstable_cancelCallback,Tl=n.unstable_shouldYield,xc=n.unstable_requestPaint,qn=n.unstable_now,Fd=n.unstable_getCurrentPriorityLevel,Sl=n.unstable_ImmediatePriority,Ka=n.unstable_UserBlockingPriority,Fs=n.unstable_NormalPriority,Hd=n.unstable_LowPriority,$a=n.unstable_IdlePriority,wl=n.log,Lc=n.unstable_setDisableYieldValue,mt=null,Qe=null;function Dn(r){if(typeof wl=="function"&&Lc(r),Qe&&typeof Qe.setStrictMode=="function")try{Qe.setStrictMode(mt,r)}catch{}}var on=Math.clz32?Math.clz32:Hs,Vc=Math.log,jd=Math.LN2;function Hs(r){return r>>>=0,r===0?32:31-(Vc(r)/jd|0)|0}var js=256,qs=4194304;function li(r){var s=r&42;if(s!==0)return s;switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return r&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return r}}function Ya(r,s,o){var u=r.pendingLanes;if(u===0)return 0;var f=0,g=r.suspendedLanes,E=r.pingedLanes;r=r.warmLanes;var w=u&134217727;return w!==0?(u=w&~g,u!==0?f=li(u):(E&=w,E!==0?f=li(E):o||(o=w&~r,o!==0&&(f=li(o))))):(w=u&~g,w!==0?f=li(w):E!==0?f=li(E):o||(o=u&~r,o!==0&&(f=li(o)))),f===0?0:s!==0&&s!==f&&(s&g)===0&&(g=f&-f,o=s&-s,g>=o||g===32&&(o&4194048)!==0)?s:f}function Gs(r,s){return(r.pendingLanes&~(r.suspendedLanes&~r.pingedLanes)&s)===0}function bl(r,s){switch(r){case 1:case 2:case 4:case 8:case 64:return s+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Al(){var r=js;return js<<=1,(js&4194048)===0&&(js=256),r}function Rl(){var r=qs;return qs<<=1,(qs&62914560)===0&&(qs=4194304),r}function Wi(r){for(var s=[],o=0;31>o;o++)s.push(r);return s}function Xi(r,s){r.pendingLanes|=s,s!==268435456&&(r.suspendedLanes=0,r.pingedLanes=0,r.warmLanes=0)}function Cl(r,s,o,u,f,g){var E=r.pendingLanes;r.pendingLanes=o,r.suspendedLanes=0,r.pingedLanes=0,r.warmLanes=0,r.expiredLanes&=o,r.entangledLanes&=o,r.errorRecoveryDisabledLanes&=o,r.shellSuspendCounter=0;var w=r.entanglements,C=r.expirationTimes,F=r.hiddenUpdates;for(o=E&~o;0<o;){var Q=31-on(o),Z=1<<Q;w[Q]=0,C[Q]=-1;var j=F[Q];if(j!==null)for(F[Q]=null,Q=0;Q<j.length;Q++){var q=j[Q];q!==null&&(q.lane&=-536870913)}o&=~Z}u!==0&&Si(r,u,0),g!==0&&f===0&&r.tag!==0&&(r.suspendedLanes|=g&~(E&~s))}function Si(r,s,o){r.pendingLanes|=s,r.suspendedLanes&=~s;var u=31-on(s);r.entangledLanes|=s,r.entanglements[u]=r.entanglements[u]|1073741824|o&4194090}function Il(r,s){var o=r.entangledLanes|=s;for(r=r.entanglements;o;){var u=31-on(o),f=1<<u;f&s|r[u]&s&&(r[u]|=s),o&=~f}}function Hr(r){switch(r){case 2:r=1;break;case 8:r=4;break;case 32:r=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:r=128;break;case 268435456:r=134217728;break;default:r=0}return r}function Qa(r){return r&=-r,2<r?8<r?(r&134217727)!==0?32:268435456:8:2}function jr(){var r=se.p;return r!==0?r:(r=window.event,r===void 0?32:JT(r.type))}function Uc(r,s){var o=se.p;try{return se.p=r,s()}finally{se.p=o}}var ut=Math.random().toString(36).slice(2),kt="__reactFiber$"+ut,At="__reactProps$"+ut,Gn="__reactContainer$"+ut,Nl="__reactEvents$"+ut,qd="__reactListeners$"+ut,qr="__reactHandles$"+ut,Bc="__reactResources$"+ut,Ks="__reactMarker$"+ut;function Gr(r){delete r[kt],delete r[At],delete r[Nl],delete r[qd],delete r[qr]}function Zi(r){var s=r[kt];if(s)return s;for(var o=r.parentNode;o;){if(s=o[Gn]||o[kt]){if(o=s.alternate,s.child!==null||o!==null&&o.child!==null)for(r=UT(r);r!==null;){if(o=r[kt])return o;r=UT(r)}return s}r=o,o=r.parentNode}return null}function wi(r){if(r=r[kt]||r[Gn]){var s=r.tag;if(s===5||s===6||s===13||s===26||s===27||s===3)return r}return null}function bi(r){var s=r.tag;if(s===5||s===26||s===27||s===6)return r.stateNode;throw Error(i(33))}function yn(r){var s=r[Bc];return s||(s=r[Bc]={hoistableStyles:new Map,hoistableScripts:new Map}),s}function Et(r){r[Ks]=!0}var Ol=new Set,Wa={};function ui(r,s){Ji(r,s),Ji(r+"Capture",s)}function Ji(r,s){for(Wa[r]=s,r=0;r<s.length;r++)Ol.add(s[r])}var zc=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Fc={},$s={};function Hc(r){return Us.call($s,r)?!0:Us.call(Fc,r)?!1:zc.test(r)?$s[r]=!0:(Fc[r]=!0,!1)}function Kr(r,s,o){if(Hc(s))if(o===null)r.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":r.removeAttribute(s);return;case"boolean":var u=s.toLowerCase().slice(0,5);if(u!=="data-"&&u!=="aria-"){r.removeAttribute(s);return}}r.setAttribute(s,""+o)}}function Ai(r,s,o){if(o===null)r.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":r.removeAttribute(s);return}r.setAttribute(s,""+o)}}function Xt(r,s,o,u){if(u===null)r.removeAttribute(o);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":r.removeAttribute(o);return}r.setAttributeNS(s,o,""+u)}}var Ys,jc;function er(r){if(Ys===void 0)try{throw Error()}catch(o){var s=o.stack.trim().match(/\n( *(at )?)/);Ys=s&&s[1]||"",jc=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ys+r+jc}var Xa=!1;function Za(r,s){if(!r||Xa)return"";Xa=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var u={DetermineComponentFrameRoot:function(){try{if(s){var Z=function(){throw Error()};if(Object.defineProperty(Z.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Z,[])}catch(q){var j=q}Reflect.construct(r,[],Z)}else{try{Z.call()}catch(q){j=q}r.call(Z.prototype)}}else{try{throw Error()}catch(q){j=q}(Z=r())&&typeof Z.catch=="function"&&Z.catch(function(){})}}catch(q){if(q&&j&&typeof q.stack=="string")return[q.stack,j.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var g=u.DetermineComponentFrameRoot(),E=g[0],w=g[1];if(E&&w){var C=E.split(`
`),F=w.split(`
`);for(f=u=0;u<C.length&&!C[u].includes("DetermineComponentFrameRoot");)u++;for(;f<F.length&&!F[f].includes("DetermineComponentFrameRoot");)f++;if(u===C.length||f===F.length)for(u=C.length-1,f=F.length-1;1<=u&&0<=f&&C[u]!==F[f];)f--;for(;1<=u&&0<=f;u--,f--)if(C[u]!==F[f]){if(u!==1||f!==1)do if(u--,f--,0>f||C[u]!==F[f]){var Q=`
`+C[u].replace(" at new "," at ");return r.displayName&&Q.includes("<anonymous>")&&(Q=Q.replace("<anonymous>",r.displayName)),Q}while(1<=u&&0<=f);break}}}finally{Xa=!1,Error.prepareStackTrace=o}return(o=r?r.displayName||r.name:"")?er(o):""}function Dl(r){switch(r.tag){case 26:case 27:case 5:return er(r.type);case 16:return er("Lazy");case 13:return er("Suspense");case 19:return er("SuspenseList");case 0:case 15:return Za(r.type,!1);case 11:return Za(r.type.render,!1);case 1:return Za(r.type,!0);case 31:return er("Activity");default:return""}}function Ja(r){try{var s="";do s+=Dl(r),r=r.return;while(r);return s}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}function vn(r){switch(typeof r){case"bigint":case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function kl(r){var s=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Gd(r){var s=kl(r)?"checked":"value",o=Object.getOwnPropertyDescriptor(r.constructor.prototype,s),u=""+r[s];if(!r.hasOwnProperty(s)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,g=o.set;return Object.defineProperty(r,s,{configurable:!0,get:function(){return f.call(this)},set:function(E){u=""+E,g.call(this,E)}}),Object.defineProperty(r,s,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(E){u=""+E},stopTracking:function(){r._valueTracker=null,delete r[s]}}}}function eo(r){r._valueTracker||(r._valueTracker=Gd(r))}function Pl(r){if(!r)return!1;var s=r._valueTracker;if(!s)return!0;var o=s.getValue(),u="";return r&&(u=kl(r)?r.checked?"true":"false":r.value),r=u,r!==o?(s.setValue(r),!0):!1}function Qs(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}var Kd=/[\n"\\]/g;function Rt(r){return r.replace(Kd,function(s){return"\\"+s.charCodeAt(0).toString(16)+" "})}function kn(r,s,o,u,f,g,E,w){r.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?r.type=E:r.removeAttribute("type"),s!=null?E==="number"?(s===0&&r.value===""||r.value!=s)&&(r.value=""+vn(s)):r.value!==""+vn(s)&&(r.value=""+vn(s)):E!=="submit"&&E!=="reset"||r.removeAttribute("value"),s!=null?$r(r,E,vn(s)):o!=null?$r(r,E,vn(o)):u!=null&&r.removeAttribute("value"),f==null&&g!=null&&(r.defaultChecked=!!g),f!=null&&(r.checked=f&&typeof f!="function"&&typeof f!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?r.name=""+vn(w):r.removeAttribute("name")}function Ws(r,s,o,u,f,g,E,w){if(g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(r.type=g),s!=null||o!=null){if(!(g!=="submit"&&g!=="reset"||s!=null))return;o=o!=null?""+vn(o):"",s=s!=null?""+vn(s):o,w||s===r.value||(r.value=s),r.defaultValue=s}u=u??f,u=typeof u!="function"&&typeof u!="symbol"&&!!u,r.checked=w?r.checked:!!u,r.defaultChecked=!!u,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(r.name=E)}function $r(r,s,o){s==="number"&&Qs(r.ownerDocument)===r||r.defaultValue===""+o||(r.defaultValue=""+o)}function tr(r,s,o,u){if(r=r.options,s){s={};for(var f=0;f<o.length;f++)s["$"+o[f]]=!0;for(o=0;o<r.length;o++)f=s.hasOwnProperty("$"+r[o].value),r[o].selected!==f&&(r[o].selected=f),f&&u&&(r[o].defaultSelected=!0)}else{for(o=""+vn(o),s=null,f=0;f<r.length;f++){if(r[f].value===o){r[f].selected=!0,u&&(r[f].defaultSelected=!0);return}s!==null||r[f].disabled||(s=r[f])}s!==null&&(s.selected=!0)}}function Ze(r,s,o){if(s!=null&&(s=""+vn(s),s!==r.value&&(r.value=s),o==null)){r.defaultValue!==s&&(r.defaultValue=s);return}r.defaultValue=o!=null?""+vn(o):""}function Xs(r,s,o,u){if(s==null){if(u!=null){if(o!=null)throw Error(i(92));if(pt(u)){if(1<u.length)throw Error(i(93));u=u[0]}o=u}o==null&&(o=""),s=o}o=vn(s),r.defaultValue=o,u=r.textContent,u===o&&u!==""&&u!==null&&(r.value=u)}function Kn(r,s){if(s){var o=r.firstChild;if(o&&o===r.lastChild&&o.nodeType===3){o.nodeValue=s;return}}r.textContent=s}var Zs=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function qc(r,s,o){var u=s.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?u?r.setProperty(s,""):s==="float"?r.cssFloat="":r[s]="":u?r.setProperty(s,o):typeof o!="number"||o===0||Zs.has(s)?s==="float"?r.cssFloat=o:r[s]=(""+o).trim():r[s]=o+"px"}function Ml(r,s,o){if(s!=null&&typeof s!="object")throw Error(i(62));if(r=r.style,o!=null){for(var u in o)!o.hasOwnProperty(u)||s!=null&&s.hasOwnProperty(u)||(u.indexOf("--")===0?r.setProperty(u,""):u==="float"?r.cssFloat="":r[u]="");for(var f in s)u=s[f],s.hasOwnProperty(f)&&o[f]!==u&&qc(r,f,u)}else for(var g in s)s.hasOwnProperty(g)&&qc(r,g,s[g])}function xl(r){if(r.indexOf("-")===-1)return!1;switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $d=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Yd=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function to(r){return Yd.test(""+r)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":r}var nr=null;function $n(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var ir=null,rr=null;function Ll(r){var s=wi(r);if(s&&(r=s.stateNode)){var o=r[At]||null;e:switch(r=s.stateNode,s.type){case"input":if(kn(r,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),s=o.name,o.type==="radio"&&s!=null){for(o=r;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+Rt(""+s)+'"][type="radio"]'),s=0;s<o.length;s++){var u=o[s];if(u!==r&&u.form===r.form){var f=u[At]||null;if(!f)throw Error(i(90));kn(u,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(s=0;s<o.length;s++)u=o[s],u.form===r.form&&Pl(u)}break e;case"textarea":Ze(r,o.value,o.defaultValue);break e;case"select":s=o.value,s!=null&&tr(r,!!o.multiple,s,!1)}}}var Ri=!1;function Gc(r,s,o){if(Ri)return r(s,o);Ri=!0;try{var u=r(s);return u}finally{if(Ri=!1,(ir!==null||rr!==null)&&(Uh(),ir&&(s=ir,r=rr,rr=ir=null,Ll(s),r)))for(s=0;s<r.length;s++)Ll(r[s])}}function Js(r,s){var o=r.stateNode;if(o===null)return null;var u=o[At]||null;if(u===null)return null;o=u[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(r=r.type,u=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!u;break e;default:r=!1}if(r)return null;if(o&&typeof o!="function")throw Error(i(231,s,typeof o));return o}var ci=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Yn=!1;if(ci)try{var ea={};Object.defineProperty(ea,"passive",{get:function(){Yn=!0}}),window.addEventListener("test",ea,ea),window.removeEventListener("test",ea,ea)}catch{Yn=!1}var Ci=null,Yr=null,sr=null;function Vl(){if(sr)return sr;var r,s=Yr,o=s.length,u,f="value"in Ci?Ci.value:Ci.textContent,g=f.length;for(r=0;r<o&&s[r]===f[r];r++);var E=o-r;for(u=1;u<=E&&s[o-u]===f[g-u];u++);return sr=f.slice(r,1<u?1-u:void 0)}function Ii(r){var s=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&s===13&&(r=13)):r=s,r===10&&(r=13),32<=r||r===13?r:0}function Ni(){return!0}function Ul(){return!1}function Ft(r){function s(o,u,f,g,E){this._reactName=o,this._targetInst=f,this.type=u,this.nativeEvent=g,this.target=E,this.currentTarget=null;for(var w in r)r.hasOwnProperty(w)&&(o=r[w],this[w]=o?o(g):g[w]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?Ni:Ul,this.isPropagationStopped=Ul,this}return y(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Ni)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Ni)},persist:function(){},isPersistent:Ni}),s}var Ke={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},no=Ft(Ke),ta=y({},Ke,{view:0,detail:0}),Kc=Ft(ta),io,ro,Oi,na=y({},ta,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:sa,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==Oi&&(Oi&&r.type==="mousemove"?(io=r.screenX-Oi.screenX,ro=r.screenY-Oi.screenY):ro=io=0,Oi=r),io)},movementY:function(r){return"movementY"in r?r.movementY:ro}}),Qn=Ft(na),$c=y({},na,{dataTransfer:0}),Qd=Ft($c),ia=y({},ta,{relatedTarget:0}),so=Ft(ia),Bl=y({},Ke,{animationName:0,elapsedTime:0,pseudoElement:0}),ao=Ft(Bl),Yc=y({},Ke,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),oo=Ft(Yc),Wd=y({},Ke,{data:0}),zl=Ft(Wd),ra={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Qc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Wc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Fl(r){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(r):(r=Wc[r])?!!s[r]:!1}function sa(){return Fl}var Xc=y({},ta,{key:function(r){if(r.key){var s=ra[r.key]||r.key;if(s!=="Unidentified")return s}return r.type==="keypress"?(r=Ii(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?Qc[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:sa,charCode:function(r){return r.type==="keypress"?Ii(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?Ii(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),lo=Ft(Xc),Zc=y({},na,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hl=Ft(Zc),ar=y({},ta,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:sa}),Jc=Ft(ar),eh=y({},Ke,{propertyName:0,elapsedTime:0,pseudoElement:0}),th=Ft(eh),nh=y({},na,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),uo=Ft(nh),En=y({},Ke,{newState:0,oldState:0}),ih=Ft(En),rh=[9,13,27,32],Di=ci&&"CompositionEvent"in window,h=null;ci&&"documentMode"in document&&(h=document.documentMode);var _=ci&&"TextEvent"in window&&!h,v=ci&&(!Di||h&&8<h&&11>=h),b=" ",U=!1;function G(r,s){switch(r){case"keyup":return rh.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function re(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var Ve=!1;function Pt(r,s){switch(r){case"compositionend":return re(s);case"keypress":return s.which!==32?null:(U=!0,b);case"textInput":return r=s.data,r===b&&U?null:r;default:return null}}function Ue(r,s){if(Ve)return r==="compositionend"||!Di&&G(r,s)?(r=Vl(),sr=Yr=Ci=null,Ve=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return v&&s.locale!=="ko"?null:s.data;default:return null}}var Ht={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mt(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s==="input"?!!Ht[r.type]:s==="textarea"}function or(r,s,o,u){ir?rr?rr.push(u):rr=[u]:ir=u,s=qh(s,"onChange"),0<s.length&&(o=new no("onChange","change",null,o,u),r.push({event:o,listeners:s}))}var Zt=null,ki=null;function jl(r){IT(r,0)}function sh(r){var s=bi(r);if(Pl(s))return r}function Qy(r,s){if(r==="change")return s}var Wy=!1;if(ci){var Xd;if(ci){var Zd="oninput"in document;if(!Zd){var Xy=document.createElement("div");Xy.setAttribute("oninput","return;"),Zd=typeof Xy.oninput=="function"}Xd=Zd}else Xd=!1;Wy=Xd&&(!document.documentMode||9<document.documentMode)}function Zy(){Zt&&(Zt.detachEvent("onpropertychange",Jy),ki=Zt=null)}function Jy(r){if(r.propertyName==="value"&&sh(ki)){var s=[];or(s,ki,r,$n(r)),Gc(jl,s)}}function FI(r,s,o){r==="focusin"?(Zy(),Zt=s,ki=o,Zt.attachEvent("onpropertychange",Jy)):r==="focusout"&&Zy()}function HI(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return sh(ki)}function jI(r,s){if(r==="click")return sh(s)}function qI(r,s){if(r==="input"||r==="change")return sh(s)}function GI(r,s){return r===s&&(r!==0||1/r===1/s)||r!==r&&s!==s}var Pn=typeof Object.is=="function"?Object.is:GI;function ql(r,s){if(Pn(r,s))return!0;if(typeof r!="object"||r===null||typeof s!="object"||s===null)return!1;var o=Object.keys(r),u=Object.keys(s);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var f=o[u];if(!Us.call(s,f)||!Pn(r[f],s[f]))return!1}return!0}function ev(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function tv(r,s){var o=ev(r);r=0;for(var u;o;){if(o.nodeType===3){if(u=r+o.textContent.length,r<=s&&u>=s)return{node:o,offset:s-r};r=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=ev(o)}}function nv(r,s){return r&&s?r===s?!0:r&&r.nodeType===3?!1:s&&s.nodeType===3?nv(r,s.parentNode):"contains"in r?r.contains(s):r.compareDocumentPosition?!!(r.compareDocumentPosition(s)&16):!1:!1}function iv(r){r=r!=null&&r.ownerDocument!=null&&r.ownerDocument.defaultView!=null?r.ownerDocument.defaultView:window;for(var s=Qs(r.document);s instanceof r.HTMLIFrameElement;){try{var o=typeof s.contentWindow.location.href=="string"}catch{o=!1}if(o)r=s.contentWindow;else break;s=Qs(r.document)}return s}function Jd(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s&&(s==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||s==="textarea"||r.contentEditable==="true")}var KI=ci&&"documentMode"in document&&11>=document.documentMode,co=null,ep=null,Gl=null,tp=!1;function rv(r,s,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;tp||co==null||co!==Qs(u)||(u=co,"selectionStart"in u&&Jd(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Gl&&ql(Gl,u)||(Gl=u,u=qh(ep,"onSelect"),0<u.length&&(s=new no("onSelect","select",null,s,o),r.push({event:s,listeners:u}),s.target=co)))}function aa(r,s){var o={};return o[r.toLowerCase()]=s.toLowerCase(),o["Webkit"+r]="webkit"+s,o["Moz"+r]="moz"+s,o}var ho={animationend:aa("Animation","AnimationEnd"),animationiteration:aa("Animation","AnimationIteration"),animationstart:aa("Animation","AnimationStart"),transitionrun:aa("Transition","TransitionRun"),transitionstart:aa("Transition","TransitionStart"),transitioncancel:aa("Transition","TransitionCancel"),transitionend:aa("Transition","TransitionEnd")},np={},sv={};ci&&(sv=document.createElement("div").style,"AnimationEvent"in window||(delete ho.animationend.animation,delete ho.animationiteration.animation,delete ho.animationstart.animation),"TransitionEvent"in window||delete ho.transitionend.transition);function oa(r){if(np[r])return np[r];if(!ho[r])return r;var s=ho[r],o;for(o in s)if(s.hasOwnProperty(o)&&o in sv)return np[r]=s[o];return r}var av=oa("animationend"),ov=oa("animationiteration"),lv=oa("animationstart"),$I=oa("transitionrun"),YI=oa("transitionstart"),QI=oa("transitioncancel"),uv=oa("transitionend"),cv=new Map,ip="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ip.push("scrollEnd");function hi(r,s){cv.set(r,s),ui(s,[r])}var hv=new WeakMap;function Wn(r,s){if(typeof r=="object"&&r!==null){var o=hv.get(r);return o!==void 0?o:(s={value:r,source:s,stack:Ja(s)},hv.set(r,s),s)}return{value:r,source:s,stack:Ja(s)}}var Xn=[],fo=0,rp=0;function ah(){for(var r=fo,s=rp=fo=0;s<r;){var o=Xn[s];Xn[s++]=null;var u=Xn[s];Xn[s++]=null;var f=Xn[s];Xn[s++]=null;var g=Xn[s];if(Xn[s++]=null,u!==null&&f!==null){var E=u.pending;E===null?f.next=f:(f.next=E.next,E.next=f),u.pending=f}g!==0&&fv(o,f,g)}}function oh(r,s,o,u){Xn[fo++]=r,Xn[fo++]=s,Xn[fo++]=o,Xn[fo++]=u,rp|=u,r.lanes|=u,r=r.alternate,r!==null&&(r.lanes|=u)}function sp(r,s,o,u){return oh(r,s,o,u),lh(r)}function po(r,s){return oh(r,null,null,s),lh(r)}function fv(r,s,o){r.lanes|=o;var u=r.alternate;u!==null&&(u.lanes|=o);for(var f=!1,g=r.return;g!==null;)g.childLanes|=o,u=g.alternate,u!==null&&(u.childLanes|=o),g.tag===22&&(r=g.stateNode,r===null||r._visibility&1||(f=!0)),r=g,g=g.return;return r.tag===3?(g=r.stateNode,f&&s!==null&&(f=31-on(o),r=g.hiddenUpdates,u=r[f],u===null?r[f]=[s]:u.push(s),s.lane=o|536870912),g):null}function lh(r){if(50<gu)throw gu=0,hm=null,Error(i(185));for(var s=r.return;s!==null;)r=s,s=r.return;return r.tag===3?r.stateNode:null}var mo={};function WI(r,s,o,u){this.tag=r,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mn(r,s,o,u){return new WI(r,s,o,u)}function ap(r){return r=r.prototype,!(!r||!r.isReactComponent)}function lr(r,s){var o=r.alternate;return o===null?(o=Mn(r.tag,s,r.key,r.mode),o.elementType=r.elementType,o.type=r.type,o.stateNode=r.stateNode,o.alternate=r,r.alternate=o):(o.pendingProps=s,o.type=r.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=r.flags&65011712,o.childLanes=r.childLanes,o.lanes=r.lanes,o.child=r.child,o.memoizedProps=r.memoizedProps,o.memoizedState=r.memoizedState,o.updateQueue=r.updateQueue,s=r.dependencies,o.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},o.sibling=r.sibling,o.index=r.index,o.ref=r.ref,o.refCleanup=r.refCleanup,o}function dv(r,s){r.flags&=65011714;var o=r.alternate;return o===null?(r.childLanes=0,r.lanes=s,r.child=null,r.subtreeFlags=0,r.memoizedProps=null,r.memoizedState=null,r.updateQueue=null,r.dependencies=null,r.stateNode=null):(r.childLanes=o.childLanes,r.lanes=o.lanes,r.child=o.child,r.subtreeFlags=0,r.deletions=null,r.memoizedProps=o.memoizedProps,r.memoizedState=o.memoizedState,r.updateQueue=o.updateQueue,r.type=o.type,s=o.dependencies,r.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext}),r}function uh(r,s,o,u,f,g){var E=0;if(u=r,typeof r=="function")ap(r)&&(E=1);else if(typeof r=="string")E=Z1(r,o,ye.current)?26:r==="html"||r==="head"||r==="body"?27:5;else e:switch(r){case R:return r=Mn(31,o,s,f),r.elementType=R,r.lanes=g,r;case N:return la(o.children,f,g,s);case H:E=8,f|=24;break;case B:return r=Mn(12,o,s,f|2),r.elementType=B,r.lanes=g,r;case he:return r=Mn(13,o,s,f),r.elementType=he,r.lanes=g,r;case _e:return r=Mn(19,o,s,f),r.elementType=_e,r.lanes=g,r;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case $:case ee:E=10;break e;case W:E=9;break e;case ae:E=11;break e;case D:E=14;break e;case A:E=16,u=null;break e}E=29,o=Error(i(130,r===null?"null":typeof r,"")),u=null}return s=Mn(E,o,s,f),s.elementType=r,s.type=u,s.lanes=g,s}function la(r,s,o,u){return r=Mn(7,r,u,s),r.lanes=o,r}function op(r,s,o){return r=Mn(6,r,null,s),r.lanes=o,r}function lp(r,s,o){return s=Mn(4,r.children!==null?r.children:[],r.key,s),s.lanes=o,s.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},s}var go=[],_o=0,ch=null,hh=0,Zn=[],Jn=0,ua=null,ur=1,cr="";function ca(r,s){go[_o++]=hh,go[_o++]=ch,ch=r,hh=s}function pv(r,s,o){Zn[Jn++]=ur,Zn[Jn++]=cr,Zn[Jn++]=ua,ua=r;var u=ur;r=cr;var f=32-on(u)-1;u&=~(1<<f),o+=1;var g=32-on(s)+f;if(30<g){var E=f-f%5;g=(u&(1<<E)-1).toString(32),u>>=E,f-=E,ur=1<<32-on(s)+f|o<<f|u,cr=g+r}else ur=1<<g|o<<f|u,cr=r}function up(r){r.return!==null&&(ca(r,1),pv(r,1,0))}function cp(r){for(;r===ch;)ch=go[--_o],go[_o]=null,hh=go[--_o],go[_o]=null;for(;r===ua;)ua=Zn[--Jn],Zn[Jn]=null,cr=Zn[--Jn],Zn[Jn]=null,ur=Zn[--Jn],Zn[Jn]=null}var Tn=null,gt=null,Ge=!1,ha=null,Pi=!1,hp=Error(i(519));function fa(r){var s=Error(i(418,""));throw Yl(Wn(s,r)),hp}function mv(r){var s=r.stateNode,o=r.type,u=r.memoizedProps;switch(s[kt]=r,s[At]=u,o){case"dialog":Pe("cancel",s),Pe("close",s);break;case"iframe":case"object":case"embed":Pe("load",s);break;case"video":case"audio":for(o=0;o<yu.length;o++)Pe(yu[o],s);break;case"source":Pe("error",s);break;case"img":case"image":case"link":Pe("error",s),Pe("load",s);break;case"details":Pe("toggle",s);break;case"input":Pe("invalid",s),Ws(s,u.value,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name,!0),eo(s);break;case"select":Pe("invalid",s);break;case"textarea":Pe("invalid",s),Xs(s,u.value,u.defaultValue,u.children),eo(s)}o=u.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||s.textContent===""+o||u.suppressHydrationWarning===!0||kT(s.textContent,o)?(u.popover!=null&&(Pe("beforetoggle",s),Pe("toggle",s)),u.onScroll!=null&&Pe("scroll",s),u.onScrollEnd!=null&&Pe("scrollend",s),u.onClick!=null&&(s.onclick=Gh),s=!0):s=!1,s||fa(r)}function gv(r){for(Tn=r.return;Tn;)switch(Tn.tag){case 5:case 13:Pi=!1;return;case 27:case 3:Pi=!0;return;default:Tn=Tn.return}}function Kl(r){if(r!==Tn)return!1;if(!Ge)return gv(r),Ge=!0,!1;var s=r.tag,o;if((o=s!==3&&s!==27)&&((o=s===5)&&(o=r.type,o=!(o!=="form"&&o!=="button")||Cm(r.type,r.memoizedProps)),o=!o),o&&gt&&fa(r),gv(r),s===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(i(317));e:{for(r=r.nextSibling,s=0;r;){if(r.nodeType===8)if(o=r.data,o==="/$"){if(s===0){gt=di(r.nextSibling);break e}s--}else o!=="$"&&o!=="$!"&&o!=="$?"||s++;r=r.nextSibling}gt=null}}else s===27?(s=gt,cs(r.type)?(r=Dm,Dm=null,gt=r):gt=s):gt=Tn?di(r.stateNode.nextSibling):null;return!0}function $l(){gt=Tn=null,Ge=!1}function _v(){var r=ha;return r!==null&&(An===null?An=r:An.push.apply(An,r),ha=null),r}function Yl(r){ha===null?ha=[r]:ha.push(r)}var fp=te(null),da=null,hr=null;function Qr(r,s,o){ie(fp,s._currentValue),s._currentValue=o}function fr(r){r._currentValue=fp.current,oe(fp)}function dp(r,s,o){for(;r!==null;){var u=r.alternate;if((r.childLanes&s)!==s?(r.childLanes|=s,u!==null&&(u.childLanes|=s)):u!==null&&(u.childLanes&s)!==s&&(u.childLanes|=s),r===o)break;r=r.return}}function pp(r,s,o,u){var f=r.child;for(f!==null&&(f.return=r);f!==null;){var g=f.dependencies;if(g!==null){var E=f.child;g=g.firstContext;e:for(;g!==null;){var w=g;g=f;for(var C=0;C<s.length;C++)if(w.context===s[C]){g.lanes|=o,w=g.alternate,w!==null&&(w.lanes|=o),dp(g.return,o,r),u||(E=null);break e}g=w.next}}else if(f.tag===18){if(E=f.return,E===null)throw Error(i(341));E.lanes|=o,g=E.alternate,g!==null&&(g.lanes|=o),dp(E,o,r),E=null}else E=f.child;if(E!==null)E.return=f;else for(E=f;E!==null;){if(E===r){E=null;break}if(f=E.sibling,f!==null){f.return=E.return,E=f;break}E=E.return}f=E}}function Ql(r,s,o,u){r=null;for(var f=s,g=!1;f!==null;){if(!g){if((f.flags&524288)!==0)g=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var E=f.alternate;if(E===null)throw Error(i(387));if(E=E.memoizedProps,E!==null){var w=f.type;Pn(f.pendingProps.value,E.value)||(r!==null?r.push(w):r=[w])}}else if(f===zt.current){if(E=f.alternate,E===null)throw Error(i(387));E.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(r!==null?r.push(bu):r=[bu])}f=f.return}r!==null&&pp(s,r,o,u),s.flags|=262144}function fh(r){for(r=r.firstContext;r!==null;){if(!Pn(r.context._currentValue,r.memoizedValue))return!0;r=r.next}return!1}function pa(r){da=r,hr=null,r=r.dependencies,r!==null&&(r.firstContext=null)}function ln(r){return yv(da,r)}function dh(r,s){return da===null&&pa(r),yv(r,s)}function yv(r,s){var o=s._currentValue;if(s={context:s,memoizedValue:o,next:null},hr===null){if(r===null)throw Error(i(308));hr=s,r.dependencies={lanes:0,firstContext:s},r.flags|=524288}else hr=hr.next=s;return o}var XI=typeof AbortController<"u"?AbortController:function(){var r=[],s=this.signal={aborted:!1,addEventListener:function(o,u){r.push(u)}};this.abort=function(){s.aborted=!0,r.forEach(function(o){return o()})}},ZI=n.unstable_scheduleCallback,JI=n.unstable_NormalPriority,xt={$$typeof:ee,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function mp(){return{controller:new XI,data:new Map,refCount:0}}function Wl(r){r.refCount--,r.refCount===0&&ZI(JI,function(){r.controller.abort()})}var Xl=null,gp=0,yo=0,vo=null;function e1(r,s){if(Xl===null){var o=Xl=[];gp=0,yo=ym(),vo={status:"pending",value:void 0,then:function(u){o.push(u)}}}return gp++,s.then(vv,vv),s}function vv(){if(--gp===0&&Xl!==null){vo!==null&&(vo.status="fulfilled");var r=Xl;Xl=null,yo=0,vo=null;for(var s=0;s<r.length;s++)(0,r[s])()}}function t1(r,s){var o=[],u={status:"pending",value:null,reason:null,then:function(f){o.push(f)}};return r.then(function(){u.status="fulfilled",u.value=s;for(var f=0;f<o.length;f++)(0,o[f])(s)},function(f){for(u.status="rejected",u.reason=f,f=0;f<o.length;f++)(0,o[f])(void 0)}),u}var Ev=Y.S;Y.S=function(r,s){typeof s=="object"&&s!==null&&typeof s.then=="function"&&e1(r,s),Ev!==null&&Ev(r,s)};var ma=te(null);function _p(){var r=ma.current;return r!==null?r:st.pooledCache}function ph(r,s){s===null?ie(ma,ma.current):ie(ma,s.pool)}function Tv(){var r=_p();return r===null?null:{parent:xt._currentValue,pool:r}}var Zl=Error(i(460)),Sv=Error(i(474)),mh=Error(i(542)),yp={then:function(){}};function wv(r){return r=r.status,r==="fulfilled"||r==="rejected"}function gh(){}function bv(r,s,o){switch(o=r[o],o===void 0?r.push(s):o!==s&&(s.then(gh,gh),s=o),s.status){case"fulfilled":return s.value;case"rejected":throw r=s.reason,Rv(r),r;default:if(typeof s.status=="string")s.then(gh,gh);else{if(r=st,r!==null&&100<r.shellSuspendCounter)throw Error(i(482));r=s,r.status="pending",r.then(function(u){if(s.status==="pending"){var f=s;f.status="fulfilled",f.value=u}},function(u){if(s.status==="pending"){var f=s;f.status="rejected",f.reason=u}})}switch(s.status){case"fulfilled":return s.value;case"rejected":throw r=s.reason,Rv(r),r}throw Jl=s,Zl}}var Jl=null;function Av(){if(Jl===null)throw Error(i(459));var r=Jl;return Jl=null,r}function Rv(r){if(r===Zl||r===mh)throw Error(i(483))}var Wr=!1;function vp(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ep(r,s){r=r.updateQueue,s.updateQueue===r&&(s.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,callbacks:null})}function Xr(r){return{lane:r,tag:0,payload:null,callback:null,next:null}}function Zr(r,s,o){var u=r.updateQueue;if(u===null)return null;if(u=u.shared,(We&2)!==0){var f=u.pending;return f===null?s.next=s:(s.next=f.next,f.next=s),u.pending=s,s=lh(r),fv(r,null,o),s}return oh(r,u,s,o),lh(r)}function eu(r,s,o){if(s=s.updateQueue,s!==null&&(s=s.shared,(o&4194048)!==0)){var u=s.lanes;u&=r.pendingLanes,o|=u,s.lanes=o,Il(r,o)}}function Tp(r,s){var o=r.updateQueue,u=r.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var f=null,g=null;if(o=o.firstBaseUpdate,o!==null){do{var E={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};g===null?f=g=E:g=g.next=E,o=o.next}while(o!==null);g===null?f=g=s:g=g.next=s}else f=g=s;o={baseState:u.baseState,firstBaseUpdate:f,lastBaseUpdate:g,shared:u.shared,callbacks:u.callbacks},r.updateQueue=o;return}r=o.lastBaseUpdate,r===null?o.firstBaseUpdate=s:r.next=s,o.lastBaseUpdate=s}var Sp=!1;function tu(){if(Sp){var r=vo;if(r!==null)throw r}}function nu(r,s,o,u){Sp=!1;var f=r.updateQueue;Wr=!1;var g=f.firstBaseUpdate,E=f.lastBaseUpdate,w=f.shared.pending;if(w!==null){f.shared.pending=null;var C=w,F=C.next;C.next=null,E===null?g=F:E.next=F,E=C;var Q=r.alternate;Q!==null&&(Q=Q.updateQueue,w=Q.lastBaseUpdate,w!==E&&(w===null?Q.firstBaseUpdate=F:w.next=F,Q.lastBaseUpdate=C))}if(g!==null){var Z=f.baseState;E=0,Q=F=C=null,w=g;do{var j=w.lane&-536870913,q=j!==w.lane;if(q?(Be&j)===j:(u&j)===j){j!==0&&j===yo&&(Sp=!0),Q!==null&&(Q=Q.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});e:{var we=r,Ee=w;j=s;var tt=o;switch(Ee.tag){case 1:if(we=Ee.payload,typeof we=="function"){Z=we.call(tt,Z,j);break e}Z=we;break e;case 3:we.flags=we.flags&-65537|128;case 0:if(we=Ee.payload,j=typeof we=="function"?we.call(tt,Z,j):we,j==null)break e;Z=y({},Z,j);break e;case 2:Wr=!0}}j=w.callback,j!==null&&(r.flags|=64,q&&(r.flags|=8192),q=f.callbacks,q===null?f.callbacks=[j]:q.push(j))}else q={lane:j,tag:w.tag,payload:w.payload,callback:w.callback,next:null},Q===null?(F=Q=q,C=Z):Q=Q.next=q,E|=j;if(w=w.next,w===null){if(w=f.shared.pending,w===null)break;q=w,w=q.next,q.next=null,f.lastBaseUpdate=q,f.shared.pending=null}}while(!0);Q===null&&(C=Z),f.baseState=C,f.firstBaseUpdate=F,f.lastBaseUpdate=Q,g===null&&(f.shared.lanes=0),as|=E,r.lanes=E,r.memoizedState=Z}}function Cv(r,s){if(typeof r!="function")throw Error(i(191,r));r.call(s)}function Iv(r,s){var o=r.callbacks;if(o!==null)for(r.callbacks=null,r=0;r<o.length;r++)Cv(o[r],s)}var Eo=te(null),_h=te(0);function Nv(r,s){r=vr,ie(_h,r),ie(Eo,s),vr=r|s.baseLanes}function wp(){ie(_h,vr),ie(Eo,Eo.current)}function bp(){vr=_h.current,oe(Eo),oe(_h)}var Jr=0,Ie=null,Je=null,Ct=null,yh=!1,To=!1,ga=!1,vh=0,iu=0,So=null,n1=0;function Tt(){throw Error(i(321))}function Ap(r,s){if(s===null)return!1;for(var o=0;o<s.length&&o<r.length;o++)if(!Pn(r[o],s[o]))return!1;return!0}function Rp(r,s,o,u,f,g){return Jr=g,Ie=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Y.H=r===null||r.memoizedState===null?fE:dE,ga=!1,g=o(u,f),ga=!1,To&&(g=Dv(s,o,u,f)),Ov(r),g}function Ov(r){Y.H=Ah;var s=Je!==null&&Je.next!==null;if(Jr=0,Ct=Je=Ie=null,yh=!1,iu=0,So=null,s)throw Error(i(300));r===null||jt||(r=r.dependencies,r!==null&&fh(r)&&(jt=!0))}function Dv(r,s,o,u){Ie=r;var f=0;do{if(To&&(So=null),iu=0,To=!1,25<=f)throw Error(i(301));if(f+=1,Ct=Je=null,r.updateQueue!=null){var g=r.updateQueue;g.lastEffect=null,g.events=null,g.stores=null,g.memoCache!=null&&(g.memoCache.index=0)}Y.H=u1,g=s(o,u)}while(To);return g}function i1(){var r=Y.H,s=r.useState()[0];return s=typeof s.then=="function"?ru(s):s,r=r.useState()[0],(Je!==null?Je.memoizedState:null)!==r&&(Ie.flags|=1024),s}function Cp(){var r=vh!==0;return vh=0,r}function Ip(r,s,o){s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~o}function Np(r){if(yh){for(r=r.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}yh=!1}Jr=0,Ct=Je=Ie=null,To=!1,iu=vh=0,So=null}function wn(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ct===null?Ie.memoizedState=Ct=r:Ct=Ct.next=r,Ct}function It(){if(Je===null){var r=Ie.alternate;r=r!==null?r.memoizedState:null}else r=Je.next;var s=Ct===null?Ie.memoizedState:Ct.next;if(s!==null)Ct=s,Je=r;else{if(r===null)throw Ie.alternate===null?Error(i(467)):Error(i(310));Je=r,r={memoizedState:Je.memoizedState,baseState:Je.baseState,baseQueue:Je.baseQueue,queue:Je.queue,next:null},Ct===null?Ie.memoizedState=Ct=r:Ct=Ct.next=r}return Ct}function Op(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ru(r){var s=iu;return iu+=1,So===null&&(So=[]),r=bv(So,r,s),s=Ie,(Ct===null?s.memoizedState:Ct.next)===null&&(s=s.alternate,Y.H=s===null||s.memoizedState===null?fE:dE),r}function Eh(r){if(r!==null&&typeof r=="object"){if(typeof r.then=="function")return ru(r);if(r.$$typeof===ee)return ln(r)}throw Error(i(438,String(r)))}function Dp(r){var s=null,o=Ie.updateQueue;if(o!==null&&(s=o.memoCache),s==null){var u=Ie.alternate;u!==null&&(u=u.updateQueue,u!==null&&(u=u.memoCache,u!=null&&(s={data:u.data.map(function(f){return f.slice()}),index:0})))}if(s==null&&(s={data:[],index:0}),o===null&&(o=Op(),Ie.updateQueue=o),o.memoCache=s,o=s.data[s.index],o===void 0)for(o=s.data[s.index]=Array(r),u=0;u<r;u++)o[u]=P;return s.index++,o}function dr(r,s){return typeof s=="function"?s(r):s}function Th(r){var s=It();return kp(s,Je,r)}function kp(r,s,o){var u=r.queue;if(u===null)throw Error(i(311));u.lastRenderedReducer=o;var f=r.baseQueue,g=u.pending;if(g!==null){if(f!==null){var E=f.next;f.next=g.next,g.next=E}s.baseQueue=f=g,u.pending=null}if(g=r.baseState,f===null)r.memoizedState=g;else{s=f.next;var w=E=null,C=null,F=s,Q=!1;do{var Z=F.lane&-536870913;if(Z!==F.lane?(Be&Z)===Z:(Jr&Z)===Z){var j=F.revertLane;if(j===0)C!==null&&(C=C.next={lane:0,revertLane:0,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null}),Z===yo&&(Q=!0);else if((Jr&j)===j){F=F.next,j===yo&&(Q=!0);continue}else Z={lane:0,revertLane:F.revertLane,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null},C===null?(w=C=Z,E=g):C=C.next=Z,Ie.lanes|=j,as|=j;Z=F.action,ga&&o(g,Z),g=F.hasEagerState?F.eagerState:o(g,Z)}else j={lane:Z,revertLane:F.revertLane,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null},C===null?(w=C=j,E=g):C=C.next=j,Ie.lanes|=Z,as|=Z;F=F.next}while(F!==null&&F!==s);if(C===null?E=g:C.next=w,!Pn(g,r.memoizedState)&&(jt=!0,Q&&(o=vo,o!==null)))throw o;r.memoizedState=g,r.baseState=E,r.baseQueue=C,u.lastRenderedState=g}return f===null&&(u.lanes=0),[r.memoizedState,u.dispatch]}function Pp(r){var s=It(),o=s.queue;if(o===null)throw Error(i(311));o.lastRenderedReducer=r;var u=o.dispatch,f=o.pending,g=s.memoizedState;if(f!==null){o.pending=null;var E=f=f.next;do g=r(g,E.action),E=E.next;while(E!==f);Pn(g,s.memoizedState)||(jt=!0),s.memoizedState=g,s.baseQueue===null&&(s.baseState=g),o.lastRenderedState=g}return[g,u]}function kv(r,s,o){var u=Ie,f=It(),g=Ge;if(g){if(o===void 0)throw Error(i(407));o=o()}else o=s();var E=!Pn((Je||f).memoizedState,o);E&&(f.memoizedState=o,jt=!0),f=f.queue;var w=xv.bind(null,u,f,r);if(su(2048,8,w,[r]),f.getSnapshot!==s||E||Ct!==null&&Ct.memoizedState.tag&1){if(u.flags|=2048,wo(9,Sh(),Mv.bind(null,u,f,o,s),null),st===null)throw Error(i(349));g||(Jr&124)!==0||Pv(u,s,o)}return o}function Pv(r,s,o){r.flags|=16384,r={getSnapshot:s,value:o},s=Ie.updateQueue,s===null?(s=Op(),Ie.updateQueue=s,s.stores=[r]):(o=s.stores,o===null?s.stores=[r]:o.push(r))}function Mv(r,s,o,u){s.value=o,s.getSnapshot=u,Lv(s)&&Vv(r)}function xv(r,s,o){return o(function(){Lv(s)&&Vv(r)})}function Lv(r){var s=r.getSnapshot;r=r.value;try{var o=s();return!Pn(r,o)}catch{return!0}}function Vv(r){var s=po(r,2);s!==null&&Bn(s,r,2)}function Mp(r){var s=wn();if(typeof r=="function"){var o=r;if(r=o(),ga){Dn(!0);try{o()}finally{Dn(!1)}}}return s.memoizedState=s.baseState=r,s.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:dr,lastRenderedState:r},s}function Uv(r,s,o,u){return r.baseState=o,kp(r,Je,typeof u=="function"?u:dr)}function r1(r,s,o,u,f){if(bh(r))throw Error(i(485));if(r=s.action,r!==null){var g={payload:f,action:r,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){g.listeners.push(E)}};Y.T!==null?o(!0):g.isTransition=!1,u(g),o=s.pending,o===null?(g.next=s.pending=g,Bv(s,g)):(g.next=o.next,s.pending=o.next=g)}}function Bv(r,s){var o=s.action,u=s.payload,f=r.state;if(s.isTransition){var g=Y.T,E={};Y.T=E;try{var w=o(f,u),C=Y.S;C!==null&&C(E,w),zv(r,s,w)}catch(F){xp(r,s,F)}finally{Y.T=g}}else try{g=o(f,u),zv(r,s,g)}catch(F){xp(r,s,F)}}function zv(r,s,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(u){Fv(r,s,u)},function(u){return xp(r,s,u)}):Fv(r,s,o)}function Fv(r,s,o){s.status="fulfilled",s.value=o,Hv(s),r.state=o,s=r.pending,s!==null&&(o=s.next,o===s?r.pending=null:(o=o.next,s.next=o,Bv(r,o)))}function xp(r,s,o){var u=r.pending;if(r.pending=null,u!==null){u=u.next;do s.status="rejected",s.reason=o,Hv(s),s=s.next;while(s!==u)}r.action=null}function Hv(r){r=r.listeners;for(var s=0;s<r.length;s++)(0,r[s])()}function jv(r,s){return s}function qv(r,s){if(Ge){var o=st.formState;if(o!==null){e:{var u=Ie;if(Ge){if(gt){t:{for(var f=gt,g=Pi;f.nodeType!==8;){if(!g){f=null;break t}if(f=di(f.nextSibling),f===null){f=null;break t}}g=f.data,f=g==="F!"||g==="F"?f:null}if(f){gt=di(f.nextSibling),u=f.data==="F!";break e}}fa(u)}u=!1}u&&(s=o[0])}}return o=wn(),o.memoizedState=o.baseState=s,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:jv,lastRenderedState:s},o.queue=u,o=uE.bind(null,Ie,u),u.dispatch=o,u=Mp(!1),g=zp.bind(null,Ie,!1,u.queue),u=wn(),f={state:s,dispatch:null,action:r,pending:null},u.queue=f,o=r1.bind(null,Ie,f,g,o),f.dispatch=o,u.memoizedState=r,[s,o,!1]}function Gv(r){var s=It();return Kv(s,Je,r)}function Kv(r,s,o){if(s=kp(r,s,jv)[0],r=Th(dr)[0],typeof s=="object"&&s!==null&&typeof s.then=="function")try{var u=ru(s)}catch(E){throw E===Zl?mh:E}else u=s;s=It();var f=s.queue,g=f.dispatch;return o!==s.memoizedState&&(Ie.flags|=2048,wo(9,Sh(),s1.bind(null,f,o),null)),[u,g,r]}function s1(r,s){r.action=s}function $v(r){var s=It(),o=Je;if(o!==null)return Kv(s,o,r);It(),s=s.memoizedState,o=It();var u=o.queue.dispatch;return o.memoizedState=r,[s,u,!1]}function wo(r,s,o,u){return r={tag:r,create:o,deps:u,inst:s,next:null},s=Ie.updateQueue,s===null&&(s=Op(),Ie.updateQueue=s),o=s.lastEffect,o===null?s.lastEffect=r.next=r:(u=o.next,o.next=r,r.next=u,s.lastEffect=r),r}function Sh(){return{destroy:void 0,resource:void 0}}function Yv(){return It().memoizedState}function wh(r,s,o,u){var f=wn();u=u===void 0?null:u,Ie.flags|=r,f.memoizedState=wo(1|s,Sh(),o,u)}function su(r,s,o,u){var f=It();u=u===void 0?null:u;var g=f.memoizedState.inst;Je!==null&&u!==null&&Ap(u,Je.memoizedState.deps)?f.memoizedState=wo(s,g,o,u):(Ie.flags|=r,f.memoizedState=wo(1|s,g,o,u))}function Qv(r,s){wh(8390656,8,r,s)}function Wv(r,s){su(2048,8,r,s)}function Xv(r,s){return su(4,2,r,s)}function Zv(r,s){return su(4,4,r,s)}function Jv(r,s){if(typeof s=="function"){r=r();var o=s(r);return function(){typeof o=="function"?o():s(null)}}if(s!=null)return r=r(),s.current=r,function(){s.current=null}}function eE(r,s,o){o=o!=null?o.concat([r]):null,su(4,4,Jv.bind(null,s,r),o)}function Lp(){}function tE(r,s){var o=It();s=s===void 0?null:s;var u=o.memoizedState;return s!==null&&Ap(s,u[1])?u[0]:(o.memoizedState=[r,s],r)}function nE(r,s){var o=It();s=s===void 0?null:s;var u=o.memoizedState;if(s!==null&&Ap(s,u[1]))return u[0];if(u=r(),ga){Dn(!0);try{r()}finally{Dn(!1)}}return o.memoizedState=[u,s],u}function Vp(r,s,o){return o===void 0||(Jr&1073741824)!==0?r.memoizedState=s:(r.memoizedState=o,r=sT(),Ie.lanes|=r,as|=r,o)}function iE(r,s,o,u){return Pn(o,s)?o:Eo.current!==null?(r=Vp(r,o,u),Pn(r,s)||(jt=!0),r):(Jr&42)===0?(jt=!0,r.memoizedState=o):(r=sT(),Ie.lanes|=r,as|=r,s)}function rE(r,s,o,u,f){var g=se.p;se.p=g!==0&&8>g?g:8;var E=Y.T,w={};Y.T=w,zp(r,!1,s,o);try{var C=f(),F=Y.S;if(F!==null&&F(w,C),C!==null&&typeof C=="object"&&typeof C.then=="function"){var Q=t1(C,u);au(r,s,Q,Un(r))}else au(r,s,u,Un(r))}catch(Z){au(r,s,{then:function(){},status:"rejected",reason:Z},Un())}finally{se.p=g,Y.T=E}}function a1(){}function Up(r,s,o,u){if(r.tag!==5)throw Error(i(476));var f=sE(r).queue;rE(r,f,s,me,o===null?a1:function(){return aE(r),o(u)})}function sE(r){var s=r.memoizedState;if(s!==null)return s;s={memoizedState:me,baseState:me,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:dr,lastRenderedState:me},next:null};var o={};return s.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:dr,lastRenderedState:o},next:null},r.memoizedState=s,r=r.alternate,r!==null&&(r.memoizedState=s),s}function aE(r){var s=sE(r).next.queue;au(r,s,{},Un())}function Bp(){return ln(bu)}function oE(){return It().memoizedState}function lE(){return It().memoizedState}function o1(r){for(var s=r.return;s!==null;){switch(s.tag){case 24:case 3:var o=Un();r=Xr(o);var u=Zr(s,r,o);u!==null&&(Bn(u,s,o),eu(u,s,o)),s={cache:mp()},r.payload=s;return}s=s.return}}function l1(r,s,o){var u=Un();o={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null},bh(r)?cE(s,o):(o=sp(r,s,o,u),o!==null&&(Bn(o,r,u),hE(o,s,u)))}function uE(r,s,o){var u=Un();au(r,s,o,u)}function au(r,s,o,u){var f={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null};if(bh(r))cE(s,f);else{var g=r.alternate;if(r.lanes===0&&(g===null||g.lanes===0)&&(g=s.lastRenderedReducer,g!==null))try{var E=s.lastRenderedState,w=g(E,o);if(f.hasEagerState=!0,f.eagerState=w,Pn(w,E))return oh(r,s,f,0),st===null&&ah(),!1}catch{}finally{}if(o=sp(r,s,f,u),o!==null)return Bn(o,r,u),hE(o,s,u),!0}return!1}function zp(r,s,o,u){if(u={lane:2,revertLane:ym(),action:u,hasEagerState:!1,eagerState:null,next:null},bh(r)){if(s)throw Error(i(479))}else s=sp(r,o,u,2),s!==null&&Bn(s,r,2)}function bh(r){var s=r.alternate;return r===Ie||s!==null&&s===Ie}function cE(r,s){To=yh=!0;var o=r.pending;o===null?s.next=s:(s.next=o.next,o.next=s),r.pending=s}function hE(r,s,o){if((o&4194048)!==0){var u=s.lanes;u&=r.pendingLanes,o|=u,s.lanes=o,Il(r,o)}}var Ah={readContext:ln,use:Eh,useCallback:Tt,useContext:Tt,useEffect:Tt,useImperativeHandle:Tt,useLayoutEffect:Tt,useInsertionEffect:Tt,useMemo:Tt,useReducer:Tt,useRef:Tt,useState:Tt,useDebugValue:Tt,useDeferredValue:Tt,useTransition:Tt,useSyncExternalStore:Tt,useId:Tt,useHostTransitionStatus:Tt,useFormState:Tt,useActionState:Tt,useOptimistic:Tt,useMemoCache:Tt,useCacheRefresh:Tt},fE={readContext:ln,use:Eh,useCallback:function(r,s){return wn().memoizedState=[r,s===void 0?null:s],r},useContext:ln,useEffect:Qv,useImperativeHandle:function(r,s,o){o=o!=null?o.concat([r]):null,wh(4194308,4,Jv.bind(null,s,r),o)},useLayoutEffect:function(r,s){return wh(4194308,4,r,s)},useInsertionEffect:function(r,s){wh(4,2,r,s)},useMemo:function(r,s){var o=wn();s=s===void 0?null:s;var u=r();if(ga){Dn(!0);try{r()}finally{Dn(!1)}}return o.memoizedState=[u,s],u},useReducer:function(r,s,o){var u=wn();if(o!==void 0){var f=o(s);if(ga){Dn(!0);try{o(s)}finally{Dn(!1)}}}else f=s;return u.memoizedState=u.baseState=f,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:f},u.queue=r,r=r.dispatch=l1.bind(null,Ie,r),[u.memoizedState,r]},useRef:function(r){var s=wn();return r={current:r},s.memoizedState=r},useState:function(r){r=Mp(r);var s=r.queue,o=uE.bind(null,Ie,s);return s.dispatch=o,[r.memoizedState,o]},useDebugValue:Lp,useDeferredValue:function(r,s){var o=wn();return Vp(o,r,s)},useTransition:function(){var r=Mp(!1);return r=rE.bind(null,Ie,r.queue,!0,!1),wn().memoizedState=r,[!1,r]},useSyncExternalStore:function(r,s,o){var u=Ie,f=wn();if(Ge){if(o===void 0)throw Error(i(407));o=o()}else{if(o=s(),st===null)throw Error(i(349));(Be&124)!==0||Pv(u,s,o)}f.memoizedState=o;var g={value:o,getSnapshot:s};return f.queue=g,Qv(xv.bind(null,u,g,r),[r]),u.flags|=2048,wo(9,Sh(),Mv.bind(null,u,g,o,s),null),o},useId:function(){var r=wn(),s=st.identifierPrefix;if(Ge){var o=cr,u=ur;o=(u&~(1<<32-on(u)-1)).toString(32)+o,s="«"+s+"R"+o,o=vh++,0<o&&(s+="H"+o.toString(32)),s+="»"}else o=n1++,s="«"+s+"r"+o.toString(32)+"»";return r.memoizedState=s},useHostTransitionStatus:Bp,useFormState:qv,useActionState:qv,useOptimistic:function(r){var s=wn();s.memoizedState=s.baseState=r;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return s.queue=o,s=zp.bind(null,Ie,!0,o),o.dispatch=s,[r,s]},useMemoCache:Dp,useCacheRefresh:function(){return wn().memoizedState=o1.bind(null,Ie)}},dE={readContext:ln,use:Eh,useCallback:tE,useContext:ln,useEffect:Wv,useImperativeHandle:eE,useInsertionEffect:Xv,useLayoutEffect:Zv,useMemo:nE,useReducer:Th,useRef:Yv,useState:function(){return Th(dr)},useDebugValue:Lp,useDeferredValue:function(r,s){var o=It();return iE(o,Je.memoizedState,r,s)},useTransition:function(){var r=Th(dr)[0],s=It().memoizedState;return[typeof r=="boolean"?r:ru(r),s]},useSyncExternalStore:kv,useId:oE,useHostTransitionStatus:Bp,useFormState:Gv,useActionState:Gv,useOptimistic:function(r,s){var o=It();return Uv(o,Je,r,s)},useMemoCache:Dp,useCacheRefresh:lE},u1={readContext:ln,use:Eh,useCallback:tE,useContext:ln,useEffect:Wv,useImperativeHandle:eE,useInsertionEffect:Xv,useLayoutEffect:Zv,useMemo:nE,useReducer:Pp,useRef:Yv,useState:function(){return Pp(dr)},useDebugValue:Lp,useDeferredValue:function(r,s){var o=It();return Je===null?Vp(o,r,s):iE(o,Je.memoizedState,r,s)},useTransition:function(){var r=Pp(dr)[0],s=It().memoizedState;return[typeof r=="boolean"?r:ru(r),s]},useSyncExternalStore:kv,useId:oE,useHostTransitionStatus:Bp,useFormState:$v,useActionState:$v,useOptimistic:function(r,s){var o=It();return Je!==null?Uv(o,Je,r,s):(o.baseState=r,[r,o.queue.dispatch])},useMemoCache:Dp,useCacheRefresh:lE},bo=null,ou=0;function Rh(r){var s=ou;return ou+=1,bo===null&&(bo=[]),bv(bo,r,s)}function lu(r,s){s=s.props.ref,r.ref=s!==void 0?s:null}function Ch(r,s){throw s.$$typeof===T?Error(i(525)):(r=Object.prototype.toString.call(s),Error(i(31,r==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":r)))}function pE(r){var s=r._init;return s(r._payload)}function mE(r){function s(L,M){if(r){var z=L.deletions;z===null?(L.deletions=[M],L.flags|=16):z.push(M)}}function o(L,M){if(!r)return null;for(;M!==null;)s(L,M),M=M.sibling;return null}function u(L){for(var M=new Map;L!==null;)L.key!==null?M.set(L.key,L):M.set(L.index,L),L=L.sibling;return M}function f(L,M){return L=lr(L,M),L.index=0,L.sibling=null,L}function g(L,M,z){return L.index=z,r?(z=L.alternate,z!==null?(z=z.index,z<M?(L.flags|=67108866,M):z):(L.flags|=67108866,M)):(L.flags|=1048576,M)}function E(L){return r&&L.alternate===null&&(L.flags|=67108866),L}function w(L,M,z,X){return M===null||M.tag!==6?(M=op(z,L.mode,X),M.return=L,M):(M=f(M,z),M.return=L,M)}function C(L,M,z,X){var de=z.type;return de===N?Q(L,M,z.props.children,X,z.key):M!==null&&(M.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===A&&pE(de)===M.type)?(M=f(M,z.props),lu(M,z),M.return=L,M):(M=uh(z.type,z.key,z.props,null,L.mode,X),lu(M,z),M.return=L,M)}function F(L,M,z,X){return M===null||M.tag!==4||M.stateNode.containerInfo!==z.containerInfo||M.stateNode.implementation!==z.implementation?(M=lp(z,L.mode,X),M.return=L,M):(M=f(M,z.children||[]),M.return=L,M)}function Q(L,M,z,X,de){return M===null||M.tag!==7?(M=la(z,L.mode,X,de),M.return=L,M):(M=f(M,z),M.return=L,M)}function Z(L,M,z){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return M=op(""+M,L.mode,z),M.return=L,M;if(typeof M=="object"&&M!==null){switch(M.$$typeof){case S:return z=uh(M.type,M.key,M.props,null,L.mode,z),lu(z,M),z.return=L,z;case I:return M=lp(M,L.mode,z),M.return=L,M;case A:var X=M._init;return M=X(M._payload),Z(L,M,z)}if(pt(M)||V(M))return M=la(M,L.mode,z,null),M.return=L,M;if(typeof M.then=="function")return Z(L,Rh(M),z);if(M.$$typeof===ee)return Z(L,dh(L,M),z);Ch(L,M)}return null}function j(L,M,z,X){var de=M!==null?M.key:null;if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return de!==null?null:w(L,M,""+z,X);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case S:return z.key===de?C(L,M,z,X):null;case I:return z.key===de?F(L,M,z,X):null;case A:return de=z._init,z=de(z._payload),j(L,M,z,X)}if(pt(z)||V(z))return de!==null?null:Q(L,M,z,X,null);if(typeof z.then=="function")return j(L,M,Rh(z),X);if(z.$$typeof===ee)return j(L,M,dh(L,z),X);Ch(L,z)}return null}function q(L,M,z,X,de){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return L=L.get(z)||null,w(M,L,""+X,de);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case S:return L=L.get(X.key===null?z:X.key)||null,C(M,L,X,de);case I:return L=L.get(X.key===null?z:X.key)||null,F(M,L,X,de);case A:var De=X._init;return X=De(X._payload),q(L,M,z,X,de)}if(pt(X)||V(X))return L=L.get(z)||null,Q(M,L,X,de,null);if(typeof X.then=="function")return q(L,M,z,Rh(X),de);if(X.$$typeof===ee)return q(L,M,z,dh(M,X),de);Ch(M,X)}return null}function we(L,M,z,X){for(var de=null,De=null,pe=M,Te=M=0,Gt=null;pe!==null&&Te<z.length;Te++){pe.index>Te?(Gt=pe,pe=null):Gt=pe.sibling;var je=j(L,pe,z[Te],X);if(je===null){pe===null&&(pe=Gt);break}r&&pe&&je.alternate===null&&s(L,pe),M=g(je,M,Te),De===null?de=je:De.sibling=je,De=je,pe=Gt}if(Te===z.length)return o(L,pe),Ge&&ca(L,Te),de;if(pe===null){for(;Te<z.length;Te++)pe=Z(L,z[Te],X),pe!==null&&(M=g(pe,M,Te),De===null?de=pe:De.sibling=pe,De=pe);return Ge&&ca(L,Te),de}for(pe=u(pe);Te<z.length;Te++)Gt=q(pe,L,Te,z[Te],X),Gt!==null&&(r&&Gt.alternate!==null&&pe.delete(Gt.key===null?Te:Gt.key),M=g(Gt,M,Te),De===null?de=Gt:De.sibling=Gt,De=Gt);return r&&pe.forEach(function(ms){return s(L,ms)}),Ge&&ca(L,Te),de}function Ee(L,M,z,X){if(z==null)throw Error(i(151));for(var de=null,De=null,pe=M,Te=M=0,Gt=null,je=z.next();pe!==null&&!je.done;Te++,je=z.next()){pe.index>Te?(Gt=pe,pe=null):Gt=pe.sibling;var ms=j(L,pe,je.value,X);if(ms===null){pe===null&&(pe=Gt);break}r&&pe&&ms.alternate===null&&s(L,pe),M=g(ms,M,Te),De===null?de=ms:De.sibling=ms,De=ms,pe=Gt}if(je.done)return o(L,pe),Ge&&ca(L,Te),de;if(pe===null){for(;!je.done;Te++,je=z.next())je=Z(L,je.value,X),je!==null&&(M=g(je,M,Te),De===null?de=je:De.sibling=je,De=je);return Ge&&ca(L,Te),de}for(pe=u(pe);!je.done;Te++,je=z.next())je=q(pe,L,Te,je.value,X),je!==null&&(r&&je.alternate!==null&&pe.delete(je.key===null?Te:je.key),M=g(je,M,Te),De===null?de=je:De.sibling=je,De=je);return r&&pe.forEach(function(cN){return s(L,cN)}),Ge&&ca(L,Te),de}function tt(L,M,z,X){if(typeof z=="object"&&z!==null&&z.type===N&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case S:e:{for(var de=z.key;M!==null;){if(M.key===de){if(de=z.type,de===N){if(M.tag===7){o(L,M.sibling),X=f(M,z.props.children),X.return=L,L=X;break e}}else if(M.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===A&&pE(de)===M.type){o(L,M.sibling),X=f(M,z.props),lu(X,z),X.return=L,L=X;break e}o(L,M);break}else s(L,M);M=M.sibling}z.type===N?(X=la(z.props.children,L.mode,X,z.key),X.return=L,L=X):(X=uh(z.type,z.key,z.props,null,L.mode,X),lu(X,z),X.return=L,L=X)}return E(L);case I:e:{for(de=z.key;M!==null;){if(M.key===de)if(M.tag===4&&M.stateNode.containerInfo===z.containerInfo&&M.stateNode.implementation===z.implementation){o(L,M.sibling),X=f(M,z.children||[]),X.return=L,L=X;break e}else{o(L,M);break}else s(L,M);M=M.sibling}X=lp(z,L.mode,X),X.return=L,L=X}return E(L);case A:return de=z._init,z=de(z._payload),tt(L,M,z,X)}if(pt(z))return we(L,M,z,X);if(V(z)){if(de=V(z),typeof de!="function")throw Error(i(150));return z=de.call(z),Ee(L,M,z,X)}if(typeof z.then=="function")return tt(L,M,Rh(z),X);if(z.$$typeof===ee)return tt(L,M,dh(L,z),X);Ch(L,z)}return typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint"?(z=""+z,M!==null&&M.tag===6?(o(L,M.sibling),X=f(M,z),X.return=L,L=X):(o(L,M),X=op(z,L.mode,X),X.return=L,L=X),E(L)):o(L,M)}return function(L,M,z,X){try{ou=0;var de=tt(L,M,z,X);return bo=null,de}catch(pe){if(pe===Zl||pe===mh)throw pe;var De=Mn(29,pe,null,L.mode);return De.lanes=X,De.return=L,De}finally{}}}var Ao=mE(!0),gE=mE(!1),ei=te(null),Mi=null;function es(r){var s=r.alternate;ie(Lt,Lt.current&1),ie(ei,r),Mi===null&&(s===null||Eo.current!==null||s.memoizedState!==null)&&(Mi=r)}function _E(r){if(r.tag===22){if(ie(Lt,Lt.current),ie(ei,r),Mi===null){var s=r.alternate;s!==null&&s.memoizedState!==null&&(Mi=r)}}else ts()}function ts(){ie(Lt,Lt.current),ie(ei,ei.current)}function pr(r){oe(ei),Mi===r&&(Mi=null),oe(Lt)}var Lt=te(0);function Ih(r){for(var s=r;s!==null;){if(s.tag===13){var o=s.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||Om(o)))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}function Fp(r,s,o,u){s=r.memoizedState,o=o(u,s),o=o==null?s:y({},s,o),r.memoizedState=o,r.lanes===0&&(r.updateQueue.baseState=o)}var Hp={enqueueSetState:function(r,s,o){r=r._reactInternals;var u=Un(),f=Xr(u);f.payload=s,o!=null&&(f.callback=o),s=Zr(r,f,u),s!==null&&(Bn(s,r,u),eu(s,r,u))},enqueueReplaceState:function(r,s,o){r=r._reactInternals;var u=Un(),f=Xr(u);f.tag=1,f.payload=s,o!=null&&(f.callback=o),s=Zr(r,f,u),s!==null&&(Bn(s,r,u),eu(s,r,u))},enqueueForceUpdate:function(r,s){r=r._reactInternals;var o=Un(),u=Xr(o);u.tag=2,s!=null&&(u.callback=s),s=Zr(r,u,o),s!==null&&(Bn(s,r,o),eu(s,r,o))}};function yE(r,s,o,u,f,g,E){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(u,g,E):s.prototype&&s.prototype.isPureReactComponent?!ql(o,u)||!ql(f,g):!0}function vE(r,s,o,u){r=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(o,u),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(o,u),s.state!==r&&Hp.enqueueReplaceState(s,s.state,null)}function _a(r,s){var o=s;if("ref"in s){o={};for(var u in s)u!=="ref"&&(o[u]=s[u])}if(r=r.defaultProps){o===s&&(o=y({},o));for(var f in r)o[f]===void 0&&(o[f]=r[f])}return o}var Nh=typeof reportError=="function"?reportError:function(r){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var s=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof r=="object"&&r!==null&&typeof r.message=="string"?String(r.message):String(r),error:r});if(!window.dispatchEvent(s))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",r);return}console.error(r)};function EE(r){Nh(r)}function TE(r){console.error(r)}function SE(r){Nh(r)}function Oh(r,s){try{var o=r.onUncaughtError;o(s.value,{componentStack:s.stack})}catch(u){setTimeout(function(){throw u})}}function wE(r,s,o){try{var u=r.onCaughtError;u(o.value,{componentStack:o.stack,errorBoundary:s.tag===1?s.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function jp(r,s,o){return o=Xr(o),o.tag=3,o.payload={element:null},o.callback=function(){Oh(r,s)},o}function bE(r){return r=Xr(r),r.tag=3,r}function AE(r,s,o,u){var f=o.type.getDerivedStateFromError;if(typeof f=="function"){var g=u.value;r.payload=function(){return f(g)},r.callback=function(){wE(s,o,u)}}var E=o.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(r.callback=function(){wE(s,o,u),typeof f!="function"&&(os===null?os=new Set([this]):os.add(this));var w=u.stack;this.componentDidCatch(u.value,{componentStack:w!==null?w:""})})}function c1(r,s,o,u,f){if(o.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){if(s=o.alternate,s!==null&&Ql(s,o,f,!0),o=ei.current,o!==null){switch(o.tag){case 13:return Mi===null?dm():o.alternate===null&&_t===0&&(_t=3),o.flags&=-257,o.flags|=65536,o.lanes=f,u===yp?o.flags|=16384:(s=o.updateQueue,s===null?o.updateQueue=new Set([u]):s.add(u),mm(r,u,f)),!1;case 22:return o.flags|=65536,u===yp?o.flags|=16384:(s=o.updateQueue,s===null?(s={transitions:null,markerInstances:null,retryQueue:new Set([u])},o.updateQueue=s):(o=s.retryQueue,o===null?s.retryQueue=new Set([u]):o.add(u)),mm(r,u,f)),!1}throw Error(i(435,o.tag))}return mm(r,u,f),dm(),!1}if(Ge)return s=ei.current,s!==null?((s.flags&65536)===0&&(s.flags|=256),s.flags|=65536,s.lanes=f,u!==hp&&(r=Error(i(422),{cause:u}),Yl(Wn(r,o)))):(u!==hp&&(s=Error(i(423),{cause:u}),Yl(Wn(s,o))),r=r.current.alternate,r.flags|=65536,f&=-f,r.lanes|=f,u=Wn(u,o),f=jp(r.stateNode,u,f),Tp(r,f),_t!==4&&(_t=2)),!1;var g=Error(i(520),{cause:u});if(g=Wn(g,o),mu===null?mu=[g]:mu.push(g),_t!==4&&(_t=2),s===null)return!0;u=Wn(u,o),o=s;do{switch(o.tag){case 3:return o.flags|=65536,r=f&-f,o.lanes|=r,r=jp(o.stateNode,u,r),Tp(o,r),!1;case 1:if(s=o.type,g=o.stateNode,(o.flags&128)===0&&(typeof s.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(os===null||!os.has(g))))return o.flags|=65536,f&=-f,o.lanes|=f,f=bE(f),AE(f,r,o,u),Tp(o,f),!1}o=o.return}while(o!==null);return!1}var RE=Error(i(461)),jt=!1;function Jt(r,s,o,u){s.child=r===null?gE(s,null,o,u):Ao(s,r.child,o,u)}function CE(r,s,o,u,f){o=o.render;var g=s.ref;if("ref"in u){var E={};for(var w in u)w!=="ref"&&(E[w]=u[w])}else E=u;return pa(s),u=Rp(r,s,o,E,g,f),w=Cp(),r!==null&&!jt?(Ip(r,s,f),mr(r,s,f)):(Ge&&w&&up(s),s.flags|=1,Jt(r,s,u,f),s.child)}function IE(r,s,o,u,f){if(r===null){var g=o.type;return typeof g=="function"&&!ap(g)&&g.defaultProps===void 0&&o.compare===null?(s.tag=15,s.type=g,NE(r,s,g,u,f)):(r=uh(o.type,null,u,s,s.mode,f),r.ref=s.ref,r.return=s,s.child=r)}if(g=r.child,!Xp(r,f)){var E=g.memoizedProps;if(o=o.compare,o=o!==null?o:ql,o(E,u)&&r.ref===s.ref)return mr(r,s,f)}return s.flags|=1,r=lr(g,u),r.ref=s.ref,r.return=s,s.child=r}function NE(r,s,o,u,f){if(r!==null){var g=r.memoizedProps;if(ql(g,u)&&r.ref===s.ref)if(jt=!1,s.pendingProps=u=g,Xp(r,f))(r.flags&131072)!==0&&(jt=!0);else return s.lanes=r.lanes,mr(r,s,f)}return qp(r,s,o,u,f)}function OE(r,s,o){var u=s.pendingProps,f=u.children,g=r!==null?r.memoizedState:null;if(u.mode==="hidden"){if((s.flags&128)!==0){if(u=g!==null?g.baseLanes|o:o,r!==null){for(f=s.child=r.child,g=0;f!==null;)g=g|f.lanes|f.childLanes,f=f.sibling;s.childLanes=g&~u}else s.childLanes=0,s.child=null;return DE(r,s,u,o)}if((o&536870912)!==0)s.memoizedState={baseLanes:0,cachePool:null},r!==null&&ph(s,g!==null?g.cachePool:null),g!==null?Nv(s,g):wp(),_E(s);else return s.lanes=s.childLanes=536870912,DE(r,s,g!==null?g.baseLanes|o:o,o)}else g!==null?(ph(s,g.cachePool),Nv(s,g),ts(),s.memoizedState=null):(r!==null&&ph(s,null),wp(),ts());return Jt(r,s,f,o),s.child}function DE(r,s,o,u){var f=_p();return f=f===null?null:{parent:xt._currentValue,pool:f},s.memoizedState={baseLanes:o,cachePool:f},r!==null&&ph(s,null),wp(),_E(s),r!==null&&Ql(r,s,u,!0),null}function Dh(r,s){var o=s.ref;if(o===null)r!==null&&r.ref!==null&&(s.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(i(284));(r===null||r.ref!==o)&&(s.flags|=4194816)}}function qp(r,s,o,u,f){return pa(s),o=Rp(r,s,o,u,void 0,f),u=Cp(),r!==null&&!jt?(Ip(r,s,f),mr(r,s,f)):(Ge&&u&&up(s),s.flags|=1,Jt(r,s,o,f),s.child)}function kE(r,s,o,u,f,g){return pa(s),s.updateQueue=null,o=Dv(s,u,o,f),Ov(r),u=Cp(),r!==null&&!jt?(Ip(r,s,g),mr(r,s,g)):(Ge&&u&&up(s),s.flags|=1,Jt(r,s,o,g),s.child)}function PE(r,s,o,u,f){if(pa(s),s.stateNode===null){var g=mo,E=o.contextType;typeof E=="object"&&E!==null&&(g=ln(E)),g=new o(u,g),s.memoizedState=g.state!==null&&g.state!==void 0?g.state:null,g.updater=Hp,s.stateNode=g,g._reactInternals=s,g=s.stateNode,g.props=u,g.state=s.memoizedState,g.refs={},vp(s),E=o.contextType,g.context=typeof E=="object"&&E!==null?ln(E):mo,g.state=s.memoizedState,E=o.getDerivedStateFromProps,typeof E=="function"&&(Fp(s,o,E,u),g.state=s.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof g.getSnapshotBeforeUpdate=="function"||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(E=g.state,typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount(),E!==g.state&&Hp.enqueueReplaceState(g,g.state,null),nu(s,u,g,f),tu(),g.state=s.memoizedState),typeof g.componentDidMount=="function"&&(s.flags|=4194308),u=!0}else if(r===null){g=s.stateNode;var w=s.memoizedProps,C=_a(o,w);g.props=C;var F=g.context,Q=o.contextType;E=mo,typeof Q=="object"&&Q!==null&&(E=ln(Q));var Z=o.getDerivedStateFromProps;Q=typeof Z=="function"||typeof g.getSnapshotBeforeUpdate=="function",w=s.pendingProps!==w,Q||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(w||F!==E)&&vE(s,g,u,E),Wr=!1;var j=s.memoizedState;g.state=j,nu(s,u,g,f),tu(),F=s.memoizedState,w||j!==F||Wr?(typeof Z=="function"&&(Fp(s,o,Z,u),F=s.memoizedState),(C=Wr||yE(s,o,C,u,j,F,E))?(Q||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount()),typeof g.componentDidMount=="function"&&(s.flags|=4194308)):(typeof g.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=u,s.memoizedState=F),g.props=u,g.state=F,g.context=E,u=C):(typeof g.componentDidMount=="function"&&(s.flags|=4194308),u=!1)}else{g=s.stateNode,Ep(r,s),E=s.memoizedProps,Q=_a(o,E),g.props=Q,Z=s.pendingProps,j=g.context,F=o.contextType,C=mo,typeof F=="object"&&F!==null&&(C=ln(F)),w=o.getDerivedStateFromProps,(F=typeof w=="function"||typeof g.getSnapshotBeforeUpdate=="function")||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(E!==Z||j!==C)&&vE(s,g,u,C),Wr=!1,j=s.memoizedState,g.state=j,nu(s,u,g,f),tu();var q=s.memoizedState;E!==Z||j!==q||Wr||r!==null&&r.dependencies!==null&&fh(r.dependencies)?(typeof w=="function"&&(Fp(s,o,w,u),q=s.memoizedState),(Q=Wr||yE(s,o,Q,u,j,q,C)||r!==null&&r.dependencies!==null&&fh(r.dependencies))?(F||typeof g.UNSAFE_componentWillUpdate!="function"&&typeof g.componentWillUpdate!="function"||(typeof g.componentWillUpdate=="function"&&g.componentWillUpdate(u,q,C),typeof g.UNSAFE_componentWillUpdate=="function"&&g.UNSAFE_componentWillUpdate(u,q,C)),typeof g.componentDidUpdate=="function"&&(s.flags|=4),typeof g.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof g.componentDidUpdate!="function"||E===r.memoizedProps&&j===r.memoizedState||(s.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||E===r.memoizedProps&&j===r.memoizedState||(s.flags|=1024),s.memoizedProps=u,s.memoizedState=q),g.props=u,g.state=q,g.context=C,u=Q):(typeof g.componentDidUpdate!="function"||E===r.memoizedProps&&j===r.memoizedState||(s.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||E===r.memoizedProps&&j===r.memoizedState||(s.flags|=1024),u=!1)}return g=u,Dh(r,s),u=(s.flags&128)!==0,g||u?(g=s.stateNode,o=u&&typeof o.getDerivedStateFromError!="function"?null:g.render(),s.flags|=1,r!==null&&u?(s.child=Ao(s,r.child,null,f),s.child=Ao(s,null,o,f)):Jt(r,s,o,f),s.memoizedState=g.state,r=s.child):r=mr(r,s,f),r}function ME(r,s,o,u){return $l(),s.flags|=256,Jt(r,s,o,u),s.child}var Gp={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Kp(r){return{baseLanes:r,cachePool:Tv()}}function $p(r,s,o){return r=r!==null?r.childLanes&~o:0,s&&(r|=ti),r}function xE(r,s,o){var u=s.pendingProps,f=!1,g=(s.flags&128)!==0,E;if((E=g)||(E=r!==null&&r.memoizedState===null?!1:(Lt.current&2)!==0),E&&(f=!0,s.flags&=-129),E=(s.flags&32)!==0,s.flags&=-33,r===null){if(Ge){if(f?es(s):ts(),Ge){var w=gt,C;if(C=w){e:{for(C=w,w=Pi;C.nodeType!==8;){if(!w){w=null;break e}if(C=di(C.nextSibling),C===null){w=null;break e}}w=C}w!==null?(s.memoizedState={dehydrated:w,treeContext:ua!==null?{id:ur,overflow:cr}:null,retryLane:536870912,hydrationErrors:null},C=Mn(18,null,null,0),C.stateNode=w,C.return=s,s.child=C,Tn=s,gt=null,C=!0):C=!1}C||fa(s)}if(w=s.memoizedState,w!==null&&(w=w.dehydrated,w!==null))return Om(w)?s.lanes=32:s.lanes=536870912,null;pr(s)}return w=u.children,u=u.fallback,f?(ts(),f=s.mode,w=kh({mode:"hidden",children:w},f),u=la(u,f,o,null),w.return=s,u.return=s,w.sibling=u,s.child=w,f=s.child,f.memoizedState=Kp(o),f.childLanes=$p(r,E,o),s.memoizedState=Gp,u):(es(s),Yp(s,w))}if(C=r.memoizedState,C!==null&&(w=C.dehydrated,w!==null)){if(g)s.flags&256?(es(s),s.flags&=-257,s=Qp(r,s,o)):s.memoizedState!==null?(ts(),s.child=r.child,s.flags|=128,s=null):(ts(),f=u.fallback,w=s.mode,u=kh({mode:"visible",children:u.children},w),f=la(f,w,o,null),f.flags|=2,u.return=s,f.return=s,u.sibling=f,s.child=u,Ao(s,r.child,null,o),u=s.child,u.memoizedState=Kp(o),u.childLanes=$p(r,E,o),s.memoizedState=Gp,s=f);else if(es(s),Om(w)){if(E=w.nextSibling&&w.nextSibling.dataset,E)var F=E.dgst;E=F,u=Error(i(419)),u.stack="",u.digest=E,Yl({value:u,source:null,stack:null}),s=Qp(r,s,o)}else if(jt||Ql(r,s,o,!1),E=(o&r.childLanes)!==0,jt||E){if(E=st,E!==null&&(u=o&-o,u=(u&42)!==0?1:Hr(u),u=(u&(E.suspendedLanes|o))!==0?0:u,u!==0&&u!==C.retryLane))throw C.retryLane=u,po(r,u),Bn(E,r,u),RE;w.data==="$?"||dm(),s=Qp(r,s,o)}else w.data==="$?"?(s.flags|=192,s.child=r.child,s=null):(r=C.treeContext,gt=di(w.nextSibling),Tn=s,Ge=!0,ha=null,Pi=!1,r!==null&&(Zn[Jn++]=ur,Zn[Jn++]=cr,Zn[Jn++]=ua,ur=r.id,cr=r.overflow,ua=s),s=Yp(s,u.children),s.flags|=4096);return s}return f?(ts(),f=u.fallback,w=s.mode,C=r.child,F=C.sibling,u=lr(C,{mode:"hidden",children:u.children}),u.subtreeFlags=C.subtreeFlags&65011712,F!==null?f=lr(F,f):(f=la(f,w,o,null),f.flags|=2),f.return=s,u.return=s,u.sibling=f,s.child=u,u=f,f=s.child,w=r.child.memoizedState,w===null?w=Kp(o):(C=w.cachePool,C!==null?(F=xt._currentValue,C=C.parent!==F?{parent:F,pool:F}:C):C=Tv(),w={baseLanes:w.baseLanes|o,cachePool:C}),f.memoizedState=w,f.childLanes=$p(r,E,o),s.memoizedState=Gp,u):(es(s),o=r.child,r=o.sibling,o=lr(o,{mode:"visible",children:u.children}),o.return=s,o.sibling=null,r!==null&&(E=s.deletions,E===null?(s.deletions=[r],s.flags|=16):E.push(r)),s.child=o,s.memoizedState=null,o)}function Yp(r,s){return s=kh({mode:"visible",children:s},r.mode),s.return=r,r.child=s}function kh(r,s){return r=Mn(22,r,null,s),r.lanes=0,r.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},r}function Qp(r,s,o){return Ao(s,r.child,null,o),r=Yp(s,s.pendingProps.children),r.flags|=2,s.memoizedState=null,r}function LE(r,s,o){r.lanes|=s;var u=r.alternate;u!==null&&(u.lanes|=s),dp(r.return,s,o)}function Wp(r,s,o,u,f){var g=r.memoizedState;g===null?r.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:f}:(g.isBackwards=s,g.rendering=null,g.renderingStartTime=0,g.last=u,g.tail=o,g.tailMode=f)}function VE(r,s,o){var u=s.pendingProps,f=u.revealOrder,g=u.tail;if(Jt(r,s,u.children,o),u=Lt.current,(u&2)!==0)u=u&1|2,s.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=s.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&LE(r,o,s);else if(r.tag===19)LE(r,o,s);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break e;for(;r.sibling===null;){if(r.return===null||r.return===s)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}u&=1}switch(ie(Lt,u),f){case"forwards":for(o=s.child,f=null;o!==null;)r=o.alternate,r!==null&&Ih(r)===null&&(f=o),o=o.sibling;o=f,o===null?(f=s.child,s.child=null):(f=o.sibling,o.sibling=null),Wp(s,!1,f,o,g);break;case"backwards":for(o=null,f=s.child,s.child=null;f!==null;){if(r=f.alternate,r!==null&&Ih(r)===null){s.child=f;break}r=f.sibling,f.sibling=o,o=f,f=r}Wp(s,!0,o,null,g);break;case"together":Wp(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function mr(r,s,o){if(r!==null&&(s.dependencies=r.dependencies),as|=s.lanes,(o&s.childLanes)===0)if(r!==null){if(Ql(r,s,o,!1),(o&s.childLanes)===0)return null}else return null;if(r!==null&&s.child!==r.child)throw Error(i(153));if(s.child!==null){for(r=s.child,o=lr(r,r.pendingProps),s.child=o,o.return=s;r.sibling!==null;)r=r.sibling,o=o.sibling=lr(r,r.pendingProps),o.return=s;o.sibling=null}return s.child}function Xp(r,s){return(r.lanes&s)!==0?!0:(r=r.dependencies,!!(r!==null&&fh(r)))}function h1(r,s,o){switch(s.tag){case 3:rt(s,s.stateNode.containerInfo),Qr(s,xt,r.memoizedState.cache),$l();break;case 27:case 5:Fr(s);break;case 4:rt(s,s.stateNode.containerInfo);break;case 10:Qr(s,s.type,s.memoizedProps.value);break;case 13:var u=s.memoizedState;if(u!==null)return u.dehydrated!==null?(es(s),s.flags|=128,null):(o&s.child.childLanes)!==0?xE(r,s,o):(es(s),r=mr(r,s,o),r!==null?r.sibling:null);es(s);break;case 19:var f=(r.flags&128)!==0;if(u=(o&s.childLanes)!==0,u||(Ql(r,s,o,!1),u=(o&s.childLanes)!==0),f){if(u)return VE(r,s,o);s.flags|=128}if(f=s.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),ie(Lt,Lt.current),u)break;return null;case 22:case 23:return s.lanes=0,OE(r,s,o);case 24:Qr(s,xt,r.memoizedState.cache)}return mr(r,s,o)}function UE(r,s,o){if(r!==null)if(r.memoizedProps!==s.pendingProps)jt=!0;else{if(!Xp(r,o)&&(s.flags&128)===0)return jt=!1,h1(r,s,o);jt=(r.flags&131072)!==0}else jt=!1,Ge&&(s.flags&1048576)!==0&&pv(s,hh,s.index);switch(s.lanes=0,s.tag){case 16:e:{r=s.pendingProps;var u=s.elementType,f=u._init;if(u=f(u._payload),s.type=u,typeof u=="function")ap(u)?(r=_a(u,r),s.tag=1,s=PE(null,s,u,r,o)):(s.tag=0,s=qp(null,s,u,r,o));else{if(u!=null){if(f=u.$$typeof,f===ae){s.tag=11,s=CE(null,s,u,r,o);break e}else if(f===D){s.tag=14,s=IE(null,s,u,r,o);break e}}throw s=Wt(u)||u,Error(i(306,s,""))}}return s;case 0:return qp(r,s,s.type,s.pendingProps,o);case 1:return u=s.type,f=_a(u,s.pendingProps),PE(r,s,u,f,o);case 3:e:{if(rt(s,s.stateNode.containerInfo),r===null)throw Error(i(387));u=s.pendingProps;var g=s.memoizedState;f=g.element,Ep(r,s),nu(s,u,null,o);var E=s.memoizedState;if(u=E.cache,Qr(s,xt,u),u!==g.cache&&pp(s,[xt],o,!0),tu(),u=E.element,g.isDehydrated)if(g={element:u,isDehydrated:!1,cache:E.cache},s.updateQueue.baseState=g,s.memoizedState=g,s.flags&256){s=ME(r,s,u,o);break e}else if(u!==f){f=Wn(Error(i(424)),s),Yl(f),s=ME(r,s,u,o);break e}else{switch(r=s.stateNode.containerInfo,r.nodeType){case 9:r=r.body;break;default:r=r.nodeName==="HTML"?r.ownerDocument.body:r}for(gt=di(r.firstChild),Tn=s,Ge=!0,ha=null,Pi=!0,o=gE(s,null,u,o),s.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if($l(),u===f){s=mr(r,s,o);break e}Jt(r,s,u,o)}s=s.child}return s;case 26:return Dh(r,s),r===null?(o=HT(s.type,null,s.pendingProps,null))?s.memoizedState=o:Ge||(o=s.type,r=s.pendingProps,u=Kh(be.current).createElement(o),u[kt]=s,u[At]=r,tn(u,o,r),Et(u),s.stateNode=u):s.memoizedState=HT(s.type,r.memoizedProps,s.pendingProps,r.memoizedState),null;case 27:return Fr(s),r===null&&Ge&&(u=s.stateNode=BT(s.type,s.pendingProps,be.current),Tn=s,Pi=!0,f=gt,cs(s.type)?(Dm=f,gt=di(u.firstChild)):gt=f),Jt(r,s,s.pendingProps.children,o),Dh(r,s),r===null&&(s.flags|=4194304),s.child;case 5:return r===null&&Ge&&((f=u=gt)&&(u=B1(u,s.type,s.pendingProps,Pi),u!==null?(s.stateNode=u,Tn=s,gt=di(u.firstChild),Pi=!1,f=!0):f=!1),f||fa(s)),Fr(s),f=s.type,g=s.pendingProps,E=r!==null?r.memoizedProps:null,u=g.children,Cm(f,g)?u=null:E!==null&&Cm(f,E)&&(s.flags|=32),s.memoizedState!==null&&(f=Rp(r,s,i1,null,null,o),bu._currentValue=f),Dh(r,s),Jt(r,s,u,o),s.child;case 6:return r===null&&Ge&&((r=o=gt)&&(o=z1(o,s.pendingProps,Pi),o!==null?(s.stateNode=o,Tn=s,gt=null,r=!0):r=!1),r||fa(s)),null;case 13:return xE(r,s,o);case 4:return rt(s,s.stateNode.containerInfo),u=s.pendingProps,r===null?s.child=Ao(s,null,u,o):Jt(r,s,u,o),s.child;case 11:return CE(r,s,s.type,s.pendingProps,o);case 7:return Jt(r,s,s.pendingProps,o),s.child;case 8:return Jt(r,s,s.pendingProps.children,o),s.child;case 12:return Jt(r,s,s.pendingProps.children,o),s.child;case 10:return u=s.pendingProps,Qr(s,s.type,u.value),Jt(r,s,u.children,o),s.child;case 9:return f=s.type._context,u=s.pendingProps.children,pa(s),f=ln(f),u=u(f),s.flags|=1,Jt(r,s,u,o),s.child;case 14:return IE(r,s,s.type,s.pendingProps,o);case 15:return NE(r,s,s.type,s.pendingProps,o);case 19:return VE(r,s,o);case 31:return u=s.pendingProps,o=s.mode,u={mode:u.mode,children:u.children},r===null?(o=kh(u,o),o.ref=s.ref,s.child=o,o.return=s,s=o):(o=lr(r.child,u),o.ref=s.ref,s.child=o,o.return=s,s=o),s;case 22:return OE(r,s,o);case 24:return pa(s),u=ln(xt),r===null?(f=_p(),f===null&&(f=st,g=mp(),f.pooledCache=g,g.refCount++,g!==null&&(f.pooledCacheLanes|=o),f=g),s.memoizedState={parent:u,cache:f},vp(s),Qr(s,xt,f)):((r.lanes&o)!==0&&(Ep(r,s),nu(s,null,null,o),tu()),f=r.memoizedState,g=s.memoizedState,f.parent!==u?(f={parent:u,cache:u},s.memoizedState=f,s.lanes===0&&(s.memoizedState=s.updateQueue.baseState=f),Qr(s,xt,u)):(u=g.cache,Qr(s,xt,u),u!==f.cache&&pp(s,[xt],o,!0))),Jt(r,s,s.pendingProps.children,o),s.child;case 29:throw s.pendingProps}throw Error(i(156,s.tag))}function gr(r){r.flags|=4}function BE(r,s){if(s.type!=="stylesheet"||(s.state.loading&4)!==0)r.flags&=-16777217;else if(r.flags|=16777216,!$T(s)){if(s=ei.current,s!==null&&((Be&4194048)===Be?Mi!==null:(Be&62914560)!==Be&&(Be&536870912)===0||s!==Mi))throw Jl=yp,Sv;r.flags|=8192}}function Ph(r,s){s!==null&&(r.flags|=4),r.flags&16384&&(s=r.tag!==22?Rl():536870912,r.lanes|=s,No|=s)}function uu(r,s){if(!Ge)switch(r.tailMode){case"hidden":s=r.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?r.tail=null:o.sibling=null;break;case"collapsed":o=r.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?s||r.tail===null?r.tail=null:r.tail.sibling=null:u.sibling=null}}function ft(r){var s=r.alternate!==null&&r.alternate.child===r.child,o=0,u=0;if(s)for(var f=r.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags&65011712,u|=f.flags&65011712,f.return=r,f=f.sibling;else for(f=r.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags,u|=f.flags,f.return=r,f=f.sibling;return r.subtreeFlags|=u,r.childLanes=o,s}function f1(r,s,o){var u=s.pendingProps;switch(cp(s),s.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ft(s),null;case 1:return ft(s),null;case 3:return o=s.stateNode,u=null,r!==null&&(u=r.memoizedState.cache),s.memoizedState.cache!==u&&(s.flags|=2048),fr(xt),Ti(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(r===null||r.child===null)&&(Kl(s)?gr(s):r===null||r.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,_v())),ft(s),null;case 26:return o=s.memoizedState,r===null?(gr(s),o!==null?(ft(s),BE(s,o)):(ft(s),s.flags&=-16777217)):o?o!==r.memoizedState?(gr(s),ft(s),BE(s,o)):(ft(s),s.flags&=-16777217):(r.memoizedProps!==u&&gr(s),ft(s),s.flags&=-16777217),null;case 27:Qi(s),o=be.current;var f=s.type;if(r!==null&&s.stateNode!=null)r.memoizedProps!==u&&gr(s);else{if(!u){if(s.stateNode===null)throw Error(i(166));return ft(s),null}r=ye.current,Kl(s)?mv(s):(r=BT(f,u,o),s.stateNode=r,gr(s))}return ft(s),null;case 5:if(Qi(s),o=s.type,r!==null&&s.stateNode!=null)r.memoizedProps!==u&&gr(s);else{if(!u){if(s.stateNode===null)throw Error(i(166));return ft(s),null}if(r=ye.current,Kl(s))mv(s);else{switch(f=Kh(be.current),r){case 1:r=f.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:r=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":r=f.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":r=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":r=f.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof u.is=="string"?f.createElement("select",{is:u.is}):f.createElement("select"),u.multiple?r.multiple=!0:u.size&&(r.size=u.size);break;default:r=typeof u.is=="string"?f.createElement(o,{is:u.is}):f.createElement(o)}}r[kt]=s,r[At]=u;e:for(f=s.child;f!==null;){if(f.tag===5||f.tag===6)r.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===s)break e;for(;f.sibling===null;){if(f.return===null||f.return===s)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}s.stateNode=r;e:switch(tn(r,o,u),o){case"button":case"input":case"select":case"textarea":r=!!u.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&gr(s)}}return ft(s),s.flags&=-16777217,null;case 6:if(r&&s.stateNode!=null)r.memoizedProps!==u&&gr(s);else{if(typeof u!="string"&&s.stateNode===null)throw Error(i(166));if(r=be.current,Kl(s)){if(r=s.stateNode,o=s.memoizedProps,u=null,f=Tn,f!==null)switch(f.tag){case 27:case 5:u=f.memoizedProps}r[kt]=s,r=!!(r.nodeValue===o||u!==null&&u.suppressHydrationWarning===!0||kT(r.nodeValue,o)),r||fa(s)}else r=Kh(r).createTextNode(u),r[kt]=s,s.stateNode=r}return ft(s),null;case 13:if(u=s.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(f=Kl(s),u!==null&&u.dehydrated!==null){if(r===null){if(!f)throw Error(i(318));if(f=s.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(i(317));f[kt]=s}else $l(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;ft(s),f=!1}else f=_v(),r!==null&&r.memoizedState!==null&&(r.memoizedState.hydrationErrors=f),f=!0;if(!f)return s.flags&256?(pr(s),s):(pr(s),null)}if(pr(s),(s.flags&128)!==0)return s.lanes=o,s;if(o=u!==null,r=r!==null&&r.memoizedState!==null,o){u=s.child,f=null,u.alternate!==null&&u.alternate.memoizedState!==null&&u.alternate.memoizedState.cachePool!==null&&(f=u.alternate.memoizedState.cachePool.pool);var g=null;u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(g=u.memoizedState.cachePool.pool),g!==f&&(u.flags|=2048)}return o!==r&&o&&(s.child.flags|=8192),Ph(s,s.updateQueue),ft(s),null;case 4:return Ti(),r===null&&Sm(s.stateNode.containerInfo),ft(s),null;case 10:return fr(s.type),ft(s),null;case 19:if(oe(Lt),f=s.memoizedState,f===null)return ft(s),null;if(u=(s.flags&128)!==0,g=f.rendering,g===null)if(u)uu(f,!1);else{if(_t!==0||r!==null&&(r.flags&128)!==0)for(r=s.child;r!==null;){if(g=Ih(r),g!==null){for(s.flags|=128,uu(f,!1),r=g.updateQueue,s.updateQueue=r,Ph(s,r),s.subtreeFlags=0,r=o,o=s.child;o!==null;)dv(o,r),o=o.sibling;return ie(Lt,Lt.current&1|2),s.child}r=r.sibling}f.tail!==null&&qn()>Lh&&(s.flags|=128,u=!0,uu(f,!1),s.lanes=4194304)}else{if(!u)if(r=Ih(g),r!==null){if(s.flags|=128,u=!0,r=r.updateQueue,s.updateQueue=r,Ph(s,r),uu(f,!0),f.tail===null&&f.tailMode==="hidden"&&!g.alternate&&!Ge)return ft(s),null}else 2*qn()-f.renderingStartTime>Lh&&o!==536870912&&(s.flags|=128,u=!0,uu(f,!1),s.lanes=4194304);f.isBackwards?(g.sibling=s.child,s.child=g):(r=f.last,r!==null?r.sibling=g:s.child=g,f.last=g)}return f.tail!==null?(s=f.tail,f.rendering=s,f.tail=s.sibling,f.renderingStartTime=qn(),s.sibling=null,r=Lt.current,ie(Lt,u?r&1|2:r&1),s):(ft(s),null);case 22:case 23:return pr(s),bp(),u=s.memoizedState!==null,r!==null?r.memoizedState!==null!==u&&(s.flags|=8192):u&&(s.flags|=8192),u?(o&536870912)!==0&&(s.flags&128)===0&&(ft(s),s.subtreeFlags&6&&(s.flags|=8192)):ft(s),o=s.updateQueue,o!==null&&Ph(s,o.retryQueue),o=null,r!==null&&r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),u=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(u=s.memoizedState.cachePool.pool),u!==o&&(s.flags|=2048),r!==null&&oe(ma),null;case 24:return o=null,r!==null&&(o=r.memoizedState.cache),s.memoizedState.cache!==o&&(s.flags|=2048),fr(xt),ft(s),null;case 25:return null;case 30:return null}throw Error(i(156,s.tag))}function d1(r,s){switch(cp(s),s.tag){case 1:return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 3:return fr(xt),Ti(),r=s.flags,(r&65536)!==0&&(r&128)===0?(s.flags=r&-65537|128,s):null;case 26:case 27:case 5:return Qi(s),null;case 13:if(pr(s),r=s.memoizedState,r!==null&&r.dehydrated!==null){if(s.alternate===null)throw Error(i(340));$l()}return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 19:return oe(Lt),null;case 4:return Ti(),null;case 10:return fr(s.type),null;case 22:case 23:return pr(s),bp(),r!==null&&oe(ma),r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 24:return fr(xt),null;case 25:return null;default:return null}}function zE(r,s){switch(cp(s),s.tag){case 3:fr(xt),Ti();break;case 26:case 27:case 5:Qi(s);break;case 4:Ti();break;case 13:pr(s);break;case 19:oe(Lt);break;case 10:fr(s.type);break;case 22:case 23:pr(s),bp(),r!==null&&oe(ma);break;case 24:fr(xt)}}function cu(r,s){try{var o=s.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&r)===r){u=void 0;var g=o.create,E=o.inst;u=g(),E.destroy=u}o=o.next}while(o!==f)}}catch(w){it(s,s.return,w)}}function ns(r,s,o){try{var u=s.updateQueue,f=u!==null?u.lastEffect:null;if(f!==null){var g=f.next;u=g;do{if((u.tag&r)===r){var E=u.inst,w=E.destroy;if(w!==void 0){E.destroy=void 0,f=s;var C=o,F=w;try{F()}catch(Q){it(f,C,Q)}}}u=u.next}while(u!==g)}}catch(Q){it(s,s.return,Q)}}function FE(r){var s=r.updateQueue;if(s!==null){var o=r.stateNode;try{Iv(s,o)}catch(u){it(r,r.return,u)}}}function HE(r,s,o){o.props=_a(r.type,r.memoizedProps),o.state=r.memoizedState;try{o.componentWillUnmount()}catch(u){it(r,s,u)}}function hu(r,s){try{var o=r.ref;if(o!==null){switch(r.tag){case 26:case 27:case 5:var u=r.stateNode;break;case 30:u=r.stateNode;break;default:u=r.stateNode}typeof o=="function"?r.refCleanup=o(u):o.current=u}}catch(f){it(r,s,f)}}function xi(r,s){var o=r.ref,u=r.refCleanup;if(o!==null)if(typeof u=="function")try{u()}catch(f){it(r,s,f)}finally{r.refCleanup=null,r=r.alternate,r!=null&&(r.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(f){it(r,s,f)}else o.current=null}function jE(r){var s=r.type,o=r.memoizedProps,u=r.stateNode;try{e:switch(s){case"button":case"input":case"select":case"textarea":o.autoFocus&&u.focus();break e;case"img":o.src?u.src=o.src:o.srcSet&&(u.srcset=o.srcSet)}}catch(f){it(r,r.return,f)}}function Zp(r,s,o){try{var u=r.stateNode;M1(u,r.type,o,s),u[At]=s}catch(f){it(r,r.return,f)}}function qE(r){return r.tag===5||r.tag===3||r.tag===26||r.tag===27&&cs(r.type)||r.tag===4}function Jp(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||qE(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.tag===27&&cs(r.type)||r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function em(r,s,o){var u=r.tag;if(u===5||u===6)r=r.stateNode,s?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(r,s):(s=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,s.appendChild(r),o=o._reactRootContainer,o!=null||s.onclick!==null||(s.onclick=Gh));else if(u!==4&&(u===27&&cs(r.type)&&(o=r.stateNode,s=null),r=r.child,r!==null))for(em(r,s,o),r=r.sibling;r!==null;)em(r,s,o),r=r.sibling}function Mh(r,s,o){var u=r.tag;if(u===5||u===6)r=r.stateNode,s?o.insertBefore(r,s):o.appendChild(r);else if(u!==4&&(u===27&&cs(r.type)&&(o=r.stateNode),r=r.child,r!==null))for(Mh(r,s,o),r=r.sibling;r!==null;)Mh(r,s,o),r=r.sibling}function GE(r){var s=r.stateNode,o=r.memoizedProps;try{for(var u=r.type,f=s.attributes;f.length;)s.removeAttributeNode(f[0]);tn(s,u,o),s[kt]=r,s[At]=o}catch(g){it(r,r.return,g)}}var _r=!1,St=!1,tm=!1,KE=typeof WeakSet=="function"?WeakSet:Set,qt=null;function p1(r,s){if(r=r.containerInfo,Am=Zh,r=iv(r),Jd(r)){if("selectionStart"in r)var o={start:r.selectionStart,end:r.selectionEnd};else e:{o=(o=r.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var f=u.anchorOffset,g=u.focusNode;u=u.focusOffset;try{o.nodeType,g.nodeType}catch{o=null;break e}var E=0,w=-1,C=-1,F=0,Q=0,Z=r,j=null;t:for(;;){for(var q;Z!==o||f!==0&&Z.nodeType!==3||(w=E+f),Z!==g||u!==0&&Z.nodeType!==3||(C=E+u),Z.nodeType===3&&(E+=Z.nodeValue.length),(q=Z.firstChild)!==null;)j=Z,Z=q;for(;;){if(Z===r)break t;if(j===o&&++F===f&&(w=E),j===g&&++Q===u&&(C=E),(q=Z.nextSibling)!==null)break;Z=j,j=Z.parentNode}Z=q}o=w===-1||C===-1?null:{start:w,end:C}}else o=null}o=o||{start:0,end:0}}else o=null;for(Rm={focusedElem:r,selectionRange:o},Zh=!1,qt=s;qt!==null;)if(s=qt,r=s.child,(s.subtreeFlags&1024)!==0&&r!==null)r.return=s,qt=r;else for(;qt!==null;){switch(s=qt,g=s.alternate,r=s.flags,s.tag){case 0:break;case 11:case 15:break;case 1:if((r&1024)!==0&&g!==null){r=void 0,o=s,f=g.memoizedProps,g=g.memoizedState,u=o.stateNode;try{var we=_a(o.type,f,o.elementType===o.type);r=u.getSnapshotBeforeUpdate(we,g),u.__reactInternalSnapshotBeforeUpdate=r}catch(Ee){it(o,o.return,Ee)}}break;case 3:if((r&1024)!==0){if(r=s.stateNode.containerInfo,o=r.nodeType,o===9)Nm(r);else if(o===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":Nm(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((r&1024)!==0)throw Error(i(163))}if(r=s.sibling,r!==null){r.return=s.return,qt=r;break}qt=s.return}}function $E(r,s,o){var u=o.flags;switch(o.tag){case 0:case 11:case 15:is(r,o),u&4&&cu(5,o);break;case 1:if(is(r,o),u&4)if(r=o.stateNode,s===null)try{r.componentDidMount()}catch(E){it(o,o.return,E)}else{var f=_a(o.type,s.memoizedProps);s=s.memoizedState;try{r.componentDidUpdate(f,s,r.__reactInternalSnapshotBeforeUpdate)}catch(E){it(o,o.return,E)}}u&64&&FE(o),u&512&&hu(o,o.return);break;case 3:if(is(r,o),u&64&&(r=o.updateQueue,r!==null)){if(s=null,o.child!==null)switch(o.child.tag){case 27:case 5:s=o.child.stateNode;break;case 1:s=o.child.stateNode}try{Iv(r,s)}catch(E){it(o,o.return,E)}}break;case 27:s===null&&u&4&&GE(o);case 26:case 5:is(r,o),s===null&&u&4&&jE(o),u&512&&hu(o,o.return);break;case 12:is(r,o);break;case 13:is(r,o),u&4&&WE(r,o),u&64&&(r=o.memoizedState,r!==null&&(r=r.dehydrated,r!==null&&(o=w1.bind(null,o),F1(r,o))));break;case 22:if(u=o.memoizedState!==null||_r,!u){s=s!==null&&s.memoizedState!==null||St,f=_r;var g=St;_r=u,(St=s)&&!g?rs(r,o,(o.subtreeFlags&8772)!==0):is(r,o),_r=f,St=g}break;case 30:break;default:is(r,o)}}function YE(r){var s=r.alternate;s!==null&&(r.alternate=null,YE(s)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(s=r.stateNode,s!==null&&Gr(s)),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}var ct=null,bn=!1;function yr(r,s,o){for(o=o.child;o!==null;)QE(r,s,o),o=o.sibling}function QE(r,s,o){if(Qe&&typeof Qe.onCommitFiberUnmount=="function")try{Qe.onCommitFiberUnmount(mt,o)}catch{}switch(o.tag){case 26:St||xi(o,s),yr(r,s,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:St||xi(o,s);var u=ct,f=bn;cs(o.type)&&(ct=o.stateNode,bn=!1),yr(r,s,o),Eu(o.stateNode),ct=u,bn=f;break;case 5:St||xi(o,s);case 6:if(u=ct,f=bn,ct=null,yr(r,s,o),ct=u,bn=f,ct!==null)if(bn)try{(ct.nodeType===9?ct.body:ct.nodeName==="HTML"?ct.ownerDocument.body:ct).removeChild(o.stateNode)}catch(g){it(o,s,g)}else try{ct.removeChild(o.stateNode)}catch(g){it(o,s,g)}break;case 18:ct!==null&&(bn?(r=ct,VT(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,o.stateNode),Iu(r)):VT(ct,o.stateNode));break;case 4:u=ct,f=bn,ct=o.stateNode.containerInfo,bn=!0,yr(r,s,o),ct=u,bn=f;break;case 0:case 11:case 14:case 15:St||ns(2,o,s),St||ns(4,o,s),yr(r,s,o);break;case 1:St||(xi(o,s),u=o.stateNode,typeof u.componentWillUnmount=="function"&&HE(o,s,u)),yr(r,s,o);break;case 21:yr(r,s,o);break;case 22:St=(u=St)||o.memoizedState!==null,yr(r,s,o),St=u;break;default:yr(r,s,o)}}function WE(r,s){if(s.memoizedState===null&&(r=s.alternate,r!==null&&(r=r.memoizedState,r!==null&&(r=r.dehydrated,r!==null))))try{Iu(r)}catch(o){it(s,s.return,o)}}function m1(r){switch(r.tag){case 13:case 19:var s=r.stateNode;return s===null&&(s=r.stateNode=new KE),s;case 22:return r=r.stateNode,s=r._retryCache,s===null&&(s=r._retryCache=new KE),s;default:throw Error(i(435,r.tag))}}function nm(r,s){var o=m1(r);s.forEach(function(u){var f=b1.bind(null,r,u);o.has(u)||(o.add(u),u.then(f,f))})}function xn(r,s){var o=s.deletions;if(o!==null)for(var u=0;u<o.length;u++){var f=o[u],g=r,E=s,w=E;e:for(;w!==null;){switch(w.tag){case 27:if(cs(w.type)){ct=w.stateNode,bn=!1;break e}break;case 5:ct=w.stateNode,bn=!1;break e;case 3:case 4:ct=w.stateNode.containerInfo,bn=!0;break e}w=w.return}if(ct===null)throw Error(i(160));QE(g,E,f),ct=null,bn=!1,g=f.alternate,g!==null&&(g.return=null),f.return=null}if(s.subtreeFlags&13878)for(s=s.child;s!==null;)XE(s,r),s=s.sibling}var fi=null;function XE(r,s){var o=r.alternate,u=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:xn(s,r),Ln(r),u&4&&(ns(3,r,r.return),cu(3,r),ns(5,r,r.return));break;case 1:xn(s,r),Ln(r),u&512&&(St||o===null||xi(o,o.return)),u&64&&_r&&(r=r.updateQueue,r!==null&&(u=r.callbacks,u!==null&&(o=r.shared.hiddenCallbacks,r.shared.hiddenCallbacks=o===null?u:o.concat(u))));break;case 26:var f=fi;if(xn(s,r),Ln(r),u&512&&(St||o===null||xi(o,o.return)),u&4){var g=o!==null?o.memoizedState:null;if(u=r.memoizedState,o===null)if(u===null)if(r.stateNode===null){e:{u=r.type,o=r.memoizedProps,f=f.ownerDocument||f;t:switch(u){case"title":g=f.getElementsByTagName("title")[0],(!g||g[Ks]||g[kt]||g.namespaceURI==="http://www.w3.org/2000/svg"||g.hasAttribute("itemprop"))&&(g=f.createElement(u),f.head.insertBefore(g,f.querySelector("head > title"))),tn(g,u,o),g[kt]=r,Et(g),u=g;break e;case"link":var E=GT("link","href",f).get(u+(o.href||""));if(E){for(var w=0;w<E.length;w++)if(g=E[w],g.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&g.getAttribute("rel")===(o.rel==null?null:o.rel)&&g.getAttribute("title")===(o.title==null?null:o.title)&&g.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){E.splice(w,1);break t}}g=f.createElement(u),tn(g,u,o),f.head.appendChild(g);break;case"meta":if(E=GT("meta","content",f).get(u+(o.content||""))){for(w=0;w<E.length;w++)if(g=E[w],g.getAttribute("content")===(o.content==null?null:""+o.content)&&g.getAttribute("name")===(o.name==null?null:o.name)&&g.getAttribute("property")===(o.property==null?null:o.property)&&g.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&g.getAttribute("charset")===(o.charSet==null?null:o.charSet)){E.splice(w,1);break t}}g=f.createElement(u),tn(g,u,o),f.head.appendChild(g);break;default:throw Error(i(468,u))}g[kt]=r,Et(g),u=g}r.stateNode=u}else KT(f,r.type,r.stateNode);else r.stateNode=qT(f,u,r.memoizedProps);else g!==u?(g===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):g.count--,u===null?KT(f,r.type,r.stateNode):qT(f,u,r.memoizedProps)):u===null&&r.stateNode!==null&&Zp(r,r.memoizedProps,o.memoizedProps)}break;case 27:xn(s,r),Ln(r),u&512&&(St||o===null||xi(o,o.return)),o!==null&&u&4&&Zp(r,r.memoizedProps,o.memoizedProps);break;case 5:if(xn(s,r),Ln(r),u&512&&(St||o===null||xi(o,o.return)),r.flags&32){f=r.stateNode;try{Kn(f,"")}catch(q){it(r,r.return,q)}}u&4&&r.stateNode!=null&&(f=r.memoizedProps,Zp(r,f,o!==null?o.memoizedProps:f)),u&1024&&(tm=!0);break;case 6:if(xn(s,r),Ln(r),u&4){if(r.stateNode===null)throw Error(i(162));u=r.memoizedProps,o=r.stateNode;try{o.nodeValue=u}catch(q){it(r,r.return,q)}}break;case 3:if(Qh=null,f=fi,fi=$h(s.containerInfo),xn(s,r),fi=f,Ln(r),u&4&&o!==null&&o.memoizedState.isDehydrated)try{Iu(s.containerInfo)}catch(q){it(r,r.return,q)}tm&&(tm=!1,ZE(r));break;case 4:u=fi,fi=$h(r.stateNode.containerInfo),xn(s,r),Ln(r),fi=u;break;case 12:xn(s,r),Ln(r);break;case 13:xn(s,r),Ln(r),r.child.flags&8192&&r.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(lm=qn()),u&4&&(u=r.updateQueue,u!==null&&(r.updateQueue=null,nm(r,u)));break;case 22:f=r.memoizedState!==null;var C=o!==null&&o.memoizedState!==null,F=_r,Q=St;if(_r=F||f,St=Q||C,xn(s,r),St=Q,_r=F,Ln(r),u&8192)e:for(s=r.stateNode,s._visibility=f?s._visibility&-2:s._visibility|1,f&&(o===null||C||_r||St||ya(r)),o=null,s=r;;){if(s.tag===5||s.tag===26){if(o===null){C=o=s;try{if(g=C.stateNode,f)E=g.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{w=C.stateNode;var Z=C.memoizedProps.style,j=Z!=null&&Z.hasOwnProperty("display")?Z.display:null;w.style.display=j==null||typeof j=="boolean"?"":(""+j).trim()}}catch(q){it(C,C.return,q)}}}else if(s.tag===6){if(o===null){C=s;try{C.stateNode.nodeValue=f?"":C.memoizedProps}catch(q){it(C,C.return,q)}}}else if((s.tag!==22&&s.tag!==23||s.memoizedState===null||s===r)&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break e;for(;s.sibling===null;){if(s.return===null||s.return===r)break e;o===s&&(o=null),s=s.return}o===s&&(o=null),s.sibling.return=s.return,s=s.sibling}u&4&&(u=r.updateQueue,u!==null&&(o=u.retryQueue,o!==null&&(u.retryQueue=null,nm(r,o))));break;case 19:xn(s,r),Ln(r),u&4&&(u=r.updateQueue,u!==null&&(r.updateQueue=null,nm(r,u)));break;case 30:break;case 21:break;default:xn(s,r),Ln(r)}}function Ln(r){var s=r.flags;if(s&2){try{for(var o,u=r.return;u!==null;){if(qE(u)){o=u;break}u=u.return}if(o==null)throw Error(i(160));switch(o.tag){case 27:var f=o.stateNode,g=Jp(r);Mh(r,g,f);break;case 5:var E=o.stateNode;o.flags&32&&(Kn(E,""),o.flags&=-33);var w=Jp(r);Mh(r,w,E);break;case 3:case 4:var C=o.stateNode.containerInfo,F=Jp(r);em(r,F,C);break;default:throw Error(i(161))}}catch(Q){it(r,r.return,Q)}r.flags&=-3}s&4096&&(r.flags&=-4097)}function ZE(r){if(r.subtreeFlags&1024)for(r=r.child;r!==null;){var s=r;ZE(s),s.tag===5&&s.flags&1024&&s.stateNode.reset(),r=r.sibling}}function is(r,s){if(s.subtreeFlags&8772)for(s=s.child;s!==null;)$E(r,s.alternate,s),s=s.sibling}function ya(r){for(r=r.child;r!==null;){var s=r;switch(s.tag){case 0:case 11:case 14:case 15:ns(4,s,s.return),ya(s);break;case 1:xi(s,s.return);var o=s.stateNode;typeof o.componentWillUnmount=="function"&&HE(s,s.return,o),ya(s);break;case 27:Eu(s.stateNode);case 26:case 5:xi(s,s.return),ya(s);break;case 22:s.memoizedState===null&&ya(s);break;case 30:ya(s);break;default:ya(s)}r=r.sibling}}function rs(r,s,o){for(o=o&&(s.subtreeFlags&8772)!==0,s=s.child;s!==null;){var u=s.alternate,f=r,g=s,E=g.flags;switch(g.tag){case 0:case 11:case 15:rs(f,g,o),cu(4,g);break;case 1:if(rs(f,g,o),u=g,f=u.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(F){it(u,u.return,F)}if(u=g,f=u.updateQueue,f!==null){var w=u.stateNode;try{var C=f.shared.hiddenCallbacks;if(C!==null)for(f.shared.hiddenCallbacks=null,f=0;f<C.length;f++)Cv(C[f],w)}catch(F){it(u,u.return,F)}}o&&E&64&&FE(g),hu(g,g.return);break;case 27:GE(g);case 26:case 5:rs(f,g,o),o&&u===null&&E&4&&jE(g),hu(g,g.return);break;case 12:rs(f,g,o);break;case 13:rs(f,g,o),o&&E&4&&WE(f,g);break;case 22:g.memoizedState===null&&rs(f,g,o),hu(g,g.return);break;case 30:break;default:rs(f,g,o)}s=s.sibling}}function im(r,s){var o=null;r!==null&&r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),r=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(r=s.memoizedState.cachePool.pool),r!==o&&(r!=null&&r.refCount++,o!=null&&Wl(o))}function rm(r,s){r=null,s.alternate!==null&&(r=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==r&&(s.refCount++,r!=null&&Wl(r))}function Li(r,s,o,u){if(s.subtreeFlags&10256)for(s=s.child;s!==null;)JE(r,s,o,u),s=s.sibling}function JE(r,s,o,u){var f=s.flags;switch(s.tag){case 0:case 11:case 15:Li(r,s,o,u),f&2048&&cu(9,s);break;case 1:Li(r,s,o,u);break;case 3:Li(r,s,o,u),f&2048&&(r=null,s.alternate!==null&&(r=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==r&&(s.refCount++,r!=null&&Wl(r)));break;case 12:if(f&2048){Li(r,s,o,u),r=s.stateNode;try{var g=s.memoizedProps,E=g.id,w=g.onPostCommit;typeof w=="function"&&w(E,s.alternate===null?"mount":"update",r.passiveEffectDuration,-0)}catch(C){it(s,s.return,C)}}else Li(r,s,o,u);break;case 13:Li(r,s,o,u);break;case 23:break;case 22:g=s.stateNode,E=s.alternate,s.memoizedState!==null?g._visibility&2?Li(r,s,o,u):fu(r,s):g._visibility&2?Li(r,s,o,u):(g._visibility|=2,Ro(r,s,o,u,(s.subtreeFlags&10256)!==0)),f&2048&&im(E,s);break;case 24:Li(r,s,o,u),f&2048&&rm(s.alternate,s);break;default:Li(r,s,o,u)}}function Ro(r,s,o,u,f){for(f=f&&(s.subtreeFlags&10256)!==0,s=s.child;s!==null;){var g=r,E=s,w=o,C=u,F=E.flags;switch(E.tag){case 0:case 11:case 15:Ro(g,E,w,C,f),cu(8,E);break;case 23:break;case 22:var Q=E.stateNode;E.memoizedState!==null?Q._visibility&2?Ro(g,E,w,C,f):fu(g,E):(Q._visibility|=2,Ro(g,E,w,C,f)),f&&F&2048&&im(E.alternate,E);break;case 24:Ro(g,E,w,C,f),f&&F&2048&&rm(E.alternate,E);break;default:Ro(g,E,w,C,f)}s=s.sibling}}function fu(r,s){if(s.subtreeFlags&10256)for(s=s.child;s!==null;){var o=r,u=s,f=u.flags;switch(u.tag){case 22:fu(o,u),f&2048&&im(u.alternate,u);break;case 24:fu(o,u),f&2048&&rm(u.alternate,u);break;default:fu(o,u)}s=s.sibling}}var du=8192;function Co(r){if(r.subtreeFlags&du)for(r=r.child;r!==null;)eT(r),r=r.sibling}function eT(r){switch(r.tag){case 26:Co(r),r.flags&du&&r.memoizedState!==null&&eN(fi,r.memoizedState,r.memoizedProps);break;case 5:Co(r);break;case 3:case 4:var s=fi;fi=$h(r.stateNode.containerInfo),Co(r),fi=s;break;case 22:r.memoizedState===null&&(s=r.alternate,s!==null&&s.memoizedState!==null?(s=du,du=16777216,Co(r),du=s):Co(r));break;default:Co(r)}}function tT(r){var s=r.alternate;if(s!==null&&(r=s.child,r!==null)){s.child=null;do s=r.sibling,r.sibling=null,r=s;while(r!==null)}}function pu(r){var s=r.deletions;if((r.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var u=s[o];qt=u,iT(u,r)}tT(r)}if(r.subtreeFlags&10256)for(r=r.child;r!==null;)nT(r),r=r.sibling}function nT(r){switch(r.tag){case 0:case 11:case 15:pu(r),r.flags&2048&&ns(9,r,r.return);break;case 3:pu(r);break;case 12:pu(r);break;case 22:var s=r.stateNode;r.memoizedState!==null&&s._visibility&2&&(r.return===null||r.return.tag!==13)?(s._visibility&=-3,xh(r)):pu(r);break;default:pu(r)}}function xh(r){var s=r.deletions;if((r.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var u=s[o];qt=u,iT(u,r)}tT(r)}for(r=r.child;r!==null;){switch(s=r,s.tag){case 0:case 11:case 15:ns(8,s,s.return),xh(s);break;case 22:o=s.stateNode,o._visibility&2&&(o._visibility&=-3,xh(s));break;default:xh(s)}r=r.sibling}}function iT(r,s){for(;qt!==null;){var o=qt;switch(o.tag){case 0:case 11:case 15:ns(8,o,s);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var u=o.memoizedState.cachePool.pool;u!=null&&u.refCount++}break;case 24:Wl(o.memoizedState.cache)}if(u=o.child,u!==null)u.return=o,qt=u;else e:for(o=r;qt!==null;){u=qt;var f=u.sibling,g=u.return;if(YE(u),u===o){qt=null;break e}if(f!==null){f.return=g,qt=f;break e}qt=g}}}var g1={getCacheForType:function(r){var s=ln(xt),o=s.data.get(r);return o===void 0&&(o=r(),s.data.set(r,o)),o}},_1=typeof WeakMap=="function"?WeakMap:Map,We=0,st=null,ke=null,Be=0,Xe=0,Vn=null,ss=!1,Io=!1,sm=!1,vr=0,_t=0,as=0,va=0,am=0,ti=0,No=0,mu=null,An=null,om=!1,lm=0,Lh=1/0,Vh=null,os=null,en=0,ls=null,Oo=null,Do=0,um=0,cm=null,rT=null,gu=0,hm=null;function Un(){if((We&2)!==0&&Be!==0)return Be&-Be;if(Y.T!==null){var r=yo;return r!==0?r:ym()}return jr()}function sT(){ti===0&&(ti=(Be&536870912)===0||Ge?Al():536870912);var r=ei.current;return r!==null&&(r.flags|=32),ti}function Bn(r,s,o){(r===st&&(Xe===2||Xe===9)||r.cancelPendingCommit!==null)&&(ko(r,0),us(r,Be,ti,!1)),Xi(r,o),((We&2)===0||r!==st)&&(r===st&&((We&2)===0&&(va|=o),_t===4&&us(r,Be,ti,!1)),Vi(r))}function aT(r,s,o){if((We&6)!==0)throw Error(i(327));var u=!o&&(s&124)===0&&(s&r.expiredLanes)===0||Gs(r,s),f=u?E1(r,s):pm(r,s,!0),g=u;do{if(f===0){Io&&!u&&us(r,s,0,!1);break}else{if(o=r.current.alternate,g&&!y1(o)){f=pm(r,s,!1),g=!1;continue}if(f===2){if(g=s,r.errorRecoveryDisabledLanes&g)var E=0;else E=r.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){s=E;e:{var w=r;f=mu;var C=w.current.memoizedState.isDehydrated;if(C&&(ko(w,E).flags|=256),E=pm(w,E,!1),E!==2){if(sm&&!C){w.errorRecoveryDisabledLanes|=g,va|=g,f=4;break e}g=An,An=f,g!==null&&(An===null?An=g:An.push.apply(An,g))}f=E}if(g=!1,f!==2)continue}}if(f===1){ko(r,0),us(r,s,0,!0);break}e:{switch(u=r,g=f,g){case 0:case 1:throw Error(i(345));case 4:if((s&4194048)!==s)break;case 6:us(u,s,ti,!ss);break e;case 2:An=null;break;case 3:case 5:break;default:throw Error(i(329))}if((s&62914560)===s&&(f=lm+300-qn(),10<f)){if(us(u,s,ti,!ss),Ya(u,0,!0)!==0)break e;u.timeoutHandle=xT(oT.bind(null,u,o,An,Vh,om,s,ti,va,No,ss,g,2,-0,0),f);break e}oT(u,o,An,Vh,om,s,ti,va,No,ss,g,0,-0,0)}}break}while(!0);Vi(r)}function oT(r,s,o,u,f,g,E,w,C,F,Q,Z,j,q){if(r.timeoutHandle=-1,Z=s.subtreeFlags,(Z&8192||(Z&16785408)===16785408)&&(wu={stylesheets:null,count:0,unsuspend:J1},eT(s),Z=tN(),Z!==null)){r.cancelPendingCommit=Z(pT.bind(null,r,s,g,o,u,f,E,w,C,Q,1,j,q)),us(r,g,E,!F);return}pT(r,s,g,o,u,f,E,w,C)}function y1(r){for(var s=r;;){var o=s.tag;if((o===0||o===11||o===15)&&s.flags&16384&&(o=s.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var u=0;u<o.length;u++){var f=o[u],g=f.getSnapshot;f=f.value;try{if(!Pn(g(),f))return!1}catch{return!1}}if(o=s.child,s.subtreeFlags&16384&&o!==null)o.return=s,s=o;else{if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function us(r,s,o,u){s&=~am,s&=~va,r.suspendedLanes|=s,r.pingedLanes&=~s,u&&(r.warmLanes|=s),u=r.expirationTimes;for(var f=s;0<f;){var g=31-on(f),E=1<<g;u[g]=-1,f&=~E}o!==0&&Si(r,o,s)}function Uh(){return(We&6)===0?(_u(0),!1):!0}function fm(){if(ke!==null){if(Xe===0)var r=ke.return;else r=ke,hr=da=null,Np(r),bo=null,ou=0,r=ke;for(;r!==null;)zE(r.alternate,r),r=r.return;ke=null}}function ko(r,s){var o=r.timeoutHandle;o!==-1&&(r.timeoutHandle=-1,L1(o)),o=r.cancelPendingCommit,o!==null&&(r.cancelPendingCommit=null,o()),fm(),st=r,ke=o=lr(r.current,null),Be=s,Xe=0,Vn=null,ss=!1,Io=Gs(r,s),sm=!1,No=ti=am=va=as=_t=0,An=mu=null,om=!1,(s&8)!==0&&(s|=s&32);var u=r.entangledLanes;if(u!==0)for(r=r.entanglements,u&=s;0<u;){var f=31-on(u),g=1<<f;s|=r[f],u&=~g}return vr=s,ah(),o}function lT(r,s){Ie=null,Y.H=Ah,s===Zl||s===mh?(s=Av(),Xe=3):s===Sv?(s=Av(),Xe=4):Xe=s===RE?8:s!==null&&typeof s=="object"&&typeof s.then=="function"?6:1,Vn=s,ke===null&&(_t=1,Oh(r,Wn(s,r.current)))}function uT(){var r=Y.H;return Y.H=Ah,r===null?Ah:r}function cT(){var r=Y.A;return Y.A=g1,r}function dm(){_t=4,ss||(Be&4194048)!==Be&&ei.current!==null||(Io=!0),(as&134217727)===0&&(va&134217727)===0||st===null||us(st,Be,ti,!1)}function pm(r,s,o){var u=We;We|=2;var f=uT(),g=cT();(st!==r||Be!==s)&&(Vh=null,ko(r,s)),s=!1;var E=_t;e:do try{if(Xe!==0&&ke!==null){var w=ke,C=Vn;switch(Xe){case 8:fm(),E=6;break e;case 3:case 2:case 9:case 6:ei.current===null&&(s=!0);var F=Xe;if(Xe=0,Vn=null,Po(r,w,C,F),o&&Io){E=0;break e}break;default:F=Xe,Xe=0,Vn=null,Po(r,w,C,F)}}v1(),E=_t;break}catch(Q){lT(r,Q)}while(!0);return s&&r.shellSuspendCounter++,hr=da=null,We=u,Y.H=f,Y.A=g,ke===null&&(st=null,Be=0,ah()),E}function v1(){for(;ke!==null;)hT(ke)}function E1(r,s){var o=We;We|=2;var u=uT(),f=cT();st!==r||Be!==s?(Vh=null,Lh=qn()+500,ko(r,s)):Io=Gs(r,s);e:do try{if(Xe!==0&&ke!==null){s=ke;var g=Vn;t:switch(Xe){case 1:Xe=0,Vn=null,Po(r,s,g,1);break;case 2:case 9:if(wv(g)){Xe=0,Vn=null,fT(s);break}s=function(){Xe!==2&&Xe!==9||st!==r||(Xe=7),Vi(r)},g.then(s,s);break e;case 3:Xe=7;break e;case 4:Xe=5;break e;case 7:wv(g)?(Xe=0,Vn=null,fT(s)):(Xe=0,Vn=null,Po(r,s,g,7));break;case 5:var E=null;switch(ke.tag){case 26:E=ke.memoizedState;case 5:case 27:var w=ke;if(!E||$T(E)){Xe=0,Vn=null;var C=w.sibling;if(C!==null)ke=C;else{var F=w.return;F!==null?(ke=F,Bh(F)):ke=null}break t}}Xe=0,Vn=null,Po(r,s,g,5);break;case 6:Xe=0,Vn=null,Po(r,s,g,6);break;case 8:fm(),_t=6;break e;default:throw Error(i(462))}}T1();break}catch(Q){lT(r,Q)}while(!0);return hr=da=null,Y.H=u,Y.A=f,We=o,ke!==null?0:(st=null,Be=0,ah(),_t)}function T1(){for(;ke!==null&&!Tl();)hT(ke)}function hT(r){var s=UE(r.alternate,r,vr);r.memoizedProps=r.pendingProps,s===null?Bh(r):ke=s}function fT(r){var s=r,o=s.alternate;switch(s.tag){case 15:case 0:s=kE(o,s,s.pendingProps,s.type,void 0,Be);break;case 11:s=kE(o,s,s.pendingProps,s.type.render,s.ref,Be);break;case 5:Np(s);default:zE(o,s),s=ke=dv(s,vr),s=UE(o,s,vr)}r.memoizedProps=r.pendingProps,s===null?Bh(r):ke=s}function Po(r,s,o,u){hr=da=null,Np(s),bo=null,ou=0;var f=s.return;try{if(c1(r,f,s,o,Be)){_t=1,Oh(r,Wn(o,r.current)),ke=null;return}}catch(g){if(f!==null)throw ke=f,g;_t=1,Oh(r,Wn(o,r.current)),ke=null;return}s.flags&32768?(Ge||u===1?r=!0:Io||(Be&536870912)!==0?r=!1:(ss=r=!0,(u===2||u===9||u===3||u===6)&&(u=ei.current,u!==null&&u.tag===13&&(u.flags|=16384))),dT(s,r)):Bh(s)}function Bh(r){var s=r;do{if((s.flags&32768)!==0){dT(s,ss);return}r=s.return;var o=f1(s.alternate,s,vr);if(o!==null){ke=o;return}if(s=s.sibling,s!==null){ke=s;return}ke=s=r}while(s!==null);_t===0&&(_t=5)}function dT(r,s){do{var o=d1(r.alternate,r);if(o!==null){o.flags&=32767,ke=o;return}if(o=r.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!s&&(r=r.sibling,r!==null)){ke=r;return}ke=r=o}while(r!==null);_t=6,ke=null}function pT(r,s,o,u,f,g,E,w,C){r.cancelPendingCommit=null;do zh();while(en!==0);if((We&6)!==0)throw Error(i(327));if(s!==null){if(s===r.current)throw Error(i(177));if(g=s.lanes|s.childLanes,g|=rp,Cl(r,o,g,E,w,C),r===st&&(ke=st=null,Be=0),Oo=s,ls=r,Do=o,um=g,cm=f,rT=u,(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?(r.callbackNode=null,r.callbackPriority=0,A1(Fs,function(){return vT(),null})):(r.callbackNode=null,r.callbackPriority=0),u=(s.flags&13878)!==0,(s.subtreeFlags&13878)!==0||u){u=Y.T,Y.T=null,f=se.p,se.p=2,E=We,We|=4;try{p1(r,s,o)}finally{We=E,se.p=f,Y.T=u}}en=1,mT(),gT(),_T()}}function mT(){if(en===1){en=0;var r=ls,s=Oo,o=(s.flags&13878)!==0;if((s.subtreeFlags&13878)!==0||o){o=Y.T,Y.T=null;var u=se.p;se.p=2;var f=We;We|=4;try{XE(s,r);var g=Rm,E=iv(r.containerInfo),w=g.focusedElem,C=g.selectionRange;if(E!==w&&w&&w.ownerDocument&&nv(w.ownerDocument.documentElement,w)){if(C!==null&&Jd(w)){var F=C.start,Q=C.end;if(Q===void 0&&(Q=F),"selectionStart"in w)w.selectionStart=F,w.selectionEnd=Math.min(Q,w.value.length);else{var Z=w.ownerDocument||document,j=Z&&Z.defaultView||window;if(j.getSelection){var q=j.getSelection(),we=w.textContent.length,Ee=Math.min(C.start,we),tt=C.end===void 0?Ee:Math.min(C.end,we);!q.extend&&Ee>tt&&(E=tt,tt=Ee,Ee=E);var L=tv(w,Ee),M=tv(w,tt);if(L&&M&&(q.rangeCount!==1||q.anchorNode!==L.node||q.anchorOffset!==L.offset||q.focusNode!==M.node||q.focusOffset!==M.offset)){var z=Z.createRange();z.setStart(L.node,L.offset),q.removeAllRanges(),Ee>tt?(q.addRange(z),q.extend(M.node,M.offset)):(z.setEnd(M.node,M.offset),q.addRange(z))}}}}for(Z=[],q=w;q=q.parentNode;)q.nodeType===1&&Z.push({element:q,left:q.scrollLeft,top:q.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<Z.length;w++){var X=Z[w];X.element.scrollLeft=X.left,X.element.scrollTop=X.top}}Zh=!!Am,Rm=Am=null}finally{We=f,se.p=u,Y.T=o}}r.current=s,en=2}}function gT(){if(en===2){en=0;var r=ls,s=Oo,o=(s.flags&8772)!==0;if((s.subtreeFlags&8772)!==0||o){o=Y.T,Y.T=null;var u=se.p;se.p=2;var f=We;We|=4;try{$E(r,s.alternate,s)}finally{We=f,se.p=u,Y.T=o}}en=3}}function _T(){if(en===4||en===3){en=0,xc();var r=ls,s=Oo,o=Do,u=rT;(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?en=5:(en=0,Oo=ls=null,yT(r,r.pendingLanes));var f=r.pendingLanes;if(f===0&&(os=null),Qa(o),s=s.stateNode,Qe&&typeof Qe.onCommitFiberRoot=="function")try{Qe.onCommitFiberRoot(mt,s,void 0,(s.current.flags&128)===128)}catch{}if(u!==null){s=Y.T,f=se.p,se.p=2,Y.T=null;try{for(var g=r.onRecoverableError,E=0;E<u.length;E++){var w=u[E];g(w.value,{componentStack:w.stack})}}finally{Y.T=s,se.p=f}}(Do&3)!==0&&zh(),Vi(r),f=r.pendingLanes,(o&4194090)!==0&&(f&42)!==0?r===hm?gu++:(gu=0,hm=r):gu=0,_u(0)}}function yT(r,s){(r.pooledCacheLanes&=s)===0&&(s=r.pooledCache,s!=null&&(r.pooledCache=null,Wl(s)))}function zh(r){return mT(),gT(),_T(),vT()}function vT(){if(en!==5)return!1;var r=ls,s=um;um=0;var o=Qa(Do),u=Y.T,f=se.p;try{se.p=32>o?32:o,Y.T=null,o=cm,cm=null;var g=ls,E=Do;if(en=0,Oo=ls=null,Do=0,(We&6)!==0)throw Error(i(331));var w=We;if(We|=4,nT(g.current),JE(g,g.current,E,o),We=w,_u(0,!1),Qe&&typeof Qe.onPostCommitFiberRoot=="function")try{Qe.onPostCommitFiberRoot(mt,g)}catch{}return!0}finally{se.p=f,Y.T=u,yT(r,s)}}function ET(r,s,o){s=Wn(o,s),s=jp(r.stateNode,s,2),r=Zr(r,s,2),r!==null&&(Xi(r,2),Vi(r))}function it(r,s,o){if(r.tag===3)ET(r,r,o);else for(;s!==null;){if(s.tag===3){ET(s,r,o);break}else if(s.tag===1){var u=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(os===null||!os.has(u))){r=Wn(o,r),o=bE(2),u=Zr(s,o,2),u!==null&&(AE(o,u,s,r),Xi(u,2),Vi(u));break}}s=s.return}}function mm(r,s,o){var u=r.pingCache;if(u===null){u=r.pingCache=new _1;var f=new Set;u.set(s,f)}else f=u.get(s),f===void 0&&(f=new Set,u.set(s,f));f.has(o)||(sm=!0,f.add(o),r=S1.bind(null,r,s,o),s.then(r,r))}function S1(r,s,o){var u=r.pingCache;u!==null&&u.delete(s),r.pingedLanes|=r.suspendedLanes&o,r.warmLanes&=~o,st===r&&(Be&o)===o&&(_t===4||_t===3&&(Be&62914560)===Be&&300>qn()-lm?(We&2)===0&&ko(r,0):am|=o,No===Be&&(No=0)),Vi(r)}function TT(r,s){s===0&&(s=Rl()),r=po(r,s),r!==null&&(Xi(r,s),Vi(r))}function w1(r){var s=r.memoizedState,o=0;s!==null&&(o=s.retryLane),TT(r,o)}function b1(r,s){var o=0;switch(r.tag){case 13:var u=r.stateNode,f=r.memoizedState;f!==null&&(o=f.retryLane);break;case 19:u=r.stateNode;break;case 22:u=r.stateNode._retryCache;break;default:throw Error(i(314))}u!==null&&u.delete(s),TT(r,o)}function A1(r,s){return Bs(r,s)}var Fh=null,Mo=null,gm=!1,Hh=!1,_m=!1,Ea=0;function Vi(r){r!==Mo&&r.next===null&&(Mo===null?Fh=Mo=r:Mo=Mo.next=r),Hh=!0,gm||(gm=!0,C1())}function _u(r,s){if(!_m&&Hh){_m=!0;do for(var o=!1,u=Fh;u!==null;){if(r!==0){var f=u.pendingLanes;if(f===0)var g=0;else{var E=u.suspendedLanes,w=u.pingedLanes;g=(1<<31-on(42|r)+1)-1,g&=f&~(E&~w),g=g&201326741?g&201326741|1:g?g|2:0}g!==0&&(o=!0,AT(u,g))}else g=Be,g=Ya(u,u===st?g:0,u.cancelPendingCommit!==null||u.timeoutHandle!==-1),(g&3)===0||Gs(u,g)||(o=!0,AT(u,g));u=u.next}while(o);_m=!1}}function R1(){ST()}function ST(){Hh=gm=!1;var r=0;Ea!==0&&(x1()&&(r=Ea),Ea=0);for(var s=qn(),o=null,u=Fh;u!==null;){var f=u.next,g=wT(u,s);g===0?(u.next=null,o===null?Fh=f:o.next=f,f===null&&(Mo=o)):(o=u,(r!==0||(g&3)!==0)&&(Hh=!0)),u=f}_u(r)}function wT(r,s){for(var o=r.suspendedLanes,u=r.pingedLanes,f=r.expirationTimes,g=r.pendingLanes&-62914561;0<g;){var E=31-on(g),w=1<<E,C=f[E];C===-1?((w&o)===0||(w&u)!==0)&&(f[E]=bl(w,s)):C<=s&&(r.expiredLanes|=w),g&=~w}if(s=st,o=Be,o=Ya(r,r===s?o:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),u=r.callbackNode,o===0||r===s&&(Xe===2||Xe===9)||r.cancelPendingCommit!==null)return u!==null&&u!==null&&zs(u),r.callbackNode=null,r.callbackPriority=0;if((o&3)===0||Gs(r,o)){if(s=o&-o,s===r.callbackPriority)return s;switch(u!==null&&zs(u),Qa(o)){case 2:case 8:o=Ka;break;case 32:o=Fs;break;case 268435456:o=$a;break;default:o=Fs}return u=bT.bind(null,r),o=Bs(o,u),r.callbackPriority=s,r.callbackNode=o,s}return u!==null&&u!==null&&zs(u),r.callbackPriority=2,r.callbackNode=null,2}function bT(r,s){if(en!==0&&en!==5)return r.callbackNode=null,r.callbackPriority=0,null;var o=r.callbackNode;if(zh()&&r.callbackNode!==o)return null;var u=Be;return u=Ya(r,r===st?u:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),u===0?null:(aT(r,u,s),wT(r,qn()),r.callbackNode!=null&&r.callbackNode===o?bT.bind(null,r):null)}function AT(r,s){if(zh())return null;aT(r,s,!0)}function C1(){V1(function(){(We&6)!==0?Bs(Sl,R1):ST()})}function ym(){return Ea===0&&(Ea=Al()),Ea}function RT(r){return r==null||typeof r=="symbol"||typeof r=="boolean"?null:typeof r=="function"?r:to(""+r)}function CT(r,s){var o=s.ownerDocument.createElement("input");return o.name=s.name,o.value=s.value,r.id&&o.setAttribute("form",r.id),s.parentNode.insertBefore(o,s),r=new FormData(r),o.parentNode.removeChild(o),r}function I1(r,s,o,u,f){if(s==="submit"&&o&&o.stateNode===f){var g=RT((f[At]||null).action),E=u.submitter;E&&(s=(s=E[At]||null)?RT(s.formAction):E.getAttribute("formAction"),s!==null&&(g=s,E=null));var w=new no("action","action",null,u,f);r.push({event:w,listeners:[{instance:null,listener:function(){if(u.defaultPrevented){if(Ea!==0){var C=E?CT(f,E):new FormData(f);Up(o,{pending:!0,data:C,method:f.method,action:g},null,C)}}else typeof g=="function"&&(w.preventDefault(),C=E?CT(f,E):new FormData(f),Up(o,{pending:!0,data:C,method:f.method,action:g},g,C))},currentTarget:f}]})}}for(var vm=0;vm<ip.length;vm++){var Em=ip[vm],N1=Em.toLowerCase(),O1=Em[0].toUpperCase()+Em.slice(1);hi(N1,"on"+O1)}hi(av,"onAnimationEnd"),hi(ov,"onAnimationIteration"),hi(lv,"onAnimationStart"),hi("dblclick","onDoubleClick"),hi("focusin","onFocus"),hi("focusout","onBlur"),hi($I,"onTransitionRun"),hi(YI,"onTransitionStart"),hi(QI,"onTransitionCancel"),hi(uv,"onTransitionEnd"),Ji("onMouseEnter",["mouseout","mouseover"]),Ji("onMouseLeave",["mouseout","mouseover"]),Ji("onPointerEnter",["pointerout","pointerover"]),Ji("onPointerLeave",["pointerout","pointerover"]),ui("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ui("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ui("onBeforeInput",["compositionend","keypress","textInput","paste"]),ui("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ui("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ui("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var yu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),D1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(yu));function IT(r,s){s=(s&4)!==0;for(var o=0;o<r.length;o++){var u=r[o],f=u.event;u=u.listeners;e:{var g=void 0;if(s)for(var E=u.length-1;0<=E;E--){var w=u[E],C=w.instance,F=w.currentTarget;if(w=w.listener,C!==g&&f.isPropagationStopped())break e;g=w,f.currentTarget=F;try{g(f)}catch(Q){Nh(Q)}f.currentTarget=null,g=C}else for(E=0;E<u.length;E++){if(w=u[E],C=w.instance,F=w.currentTarget,w=w.listener,C!==g&&f.isPropagationStopped())break e;g=w,f.currentTarget=F;try{g(f)}catch(Q){Nh(Q)}f.currentTarget=null,g=C}}}}function Pe(r,s){var o=s[Nl];o===void 0&&(o=s[Nl]=new Set);var u=r+"__bubble";o.has(u)||(NT(s,r,2,!1),o.add(u))}function Tm(r,s,o){var u=0;s&&(u|=4),NT(o,r,u,s)}var jh="_reactListening"+Math.random().toString(36).slice(2);function Sm(r){if(!r[jh]){r[jh]=!0,Ol.forEach(function(o){o!=="selectionchange"&&(D1.has(o)||Tm(o,!1,r),Tm(o,!0,r))});var s=r.nodeType===9?r:r.ownerDocument;s===null||s[jh]||(s[jh]=!0,Tm("selectionchange",!1,s))}}function NT(r,s,o,u){switch(JT(s)){case 2:var f=rN;break;case 8:f=sN;break;default:f=Lm}o=f.bind(null,s,o,r),f=void 0,!Yn||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(f=!0),u?f!==void 0?r.addEventListener(s,o,{capture:!0,passive:f}):r.addEventListener(s,o,!0):f!==void 0?r.addEventListener(s,o,{passive:f}):r.addEventListener(s,o,!1)}function wm(r,s,o,u,f){var g=u;if((s&1)===0&&(s&2)===0&&u!==null)e:for(;;){if(u===null)return;var E=u.tag;if(E===3||E===4){var w=u.stateNode.containerInfo;if(w===f)break;if(E===4)for(E=u.return;E!==null;){var C=E.tag;if((C===3||C===4)&&E.stateNode.containerInfo===f)return;E=E.return}for(;w!==null;){if(E=Zi(w),E===null)return;if(C=E.tag,C===5||C===6||C===26||C===27){u=g=E;continue e}w=w.parentNode}}u=u.return}Gc(function(){var F=g,Q=$n(o),Z=[];e:{var j=cv.get(r);if(j!==void 0){var q=no,we=r;switch(r){case"keypress":if(Ii(o)===0)break e;case"keydown":case"keyup":q=lo;break;case"focusin":we="focus",q=so;break;case"focusout":we="blur",q=so;break;case"beforeblur":case"afterblur":q=so;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":q=Qn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":q=Qd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":q=Jc;break;case av:case ov:case lv:q=ao;break;case uv:q=th;break;case"scroll":case"scrollend":q=Kc;break;case"wheel":q=uo;break;case"copy":case"cut":case"paste":q=oo;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":q=Hl;break;case"toggle":case"beforetoggle":q=ih}var Ee=(s&4)!==0,tt=!Ee&&(r==="scroll"||r==="scrollend"),L=Ee?j!==null?j+"Capture":null:j;Ee=[];for(var M=F,z;M!==null;){var X=M;if(z=X.stateNode,X=X.tag,X!==5&&X!==26&&X!==27||z===null||L===null||(X=Js(M,L),X!=null&&Ee.push(vu(M,X,z))),tt)break;M=M.return}0<Ee.length&&(j=new q(j,we,null,o,Q),Z.push({event:j,listeners:Ee}))}}if((s&7)===0){e:{if(j=r==="mouseover"||r==="pointerover",q=r==="mouseout"||r==="pointerout",j&&o!==nr&&(we=o.relatedTarget||o.fromElement)&&(Zi(we)||we[Gn]))break e;if((q||j)&&(j=Q.window===Q?Q:(j=Q.ownerDocument)?j.defaultView||j.parentWindow:window,q?(we=o.relatedTarget||o.toElement,q=F,we=we?Zi(we):null,we!==null&&(tt=l(we),Ee=we.tag,we!==tt||Ee!==5&&Ee!==27&&Ee!==6)&&(we=null)):(q=null,we=F),q!==we)){if(Ee=Qn,X="onMouseLeave",L="onMouseEnter",M="mouse",(r==="pointerout"||r==="pointerover")&&(Ee=Hl,X="onPointerLeave",L="onPointerEnter",M="pointer"),tt=q==null?j:bi(q),z=we==null?j:bi(we),j=new Ee(X,M+"leave",q,o,Q),j.target=tt,j.relatedTarget=z,X=null,Zi(Q)===F&&(Ee=new Ee(L,M+"enter",we,o,Q),Ee.target=z,Ee.relatedTarget=tt,X=Ee),tt=X,q&&we)t:{for(Ee=q,L=we,M=0,z=Ee;z;z=xo(z))M++;for(z=0,X=L;X;X=xo(X))z++;for(;0<M-z;)Ee=xo(Ee),M--;for(;0<z-M;)L=xo(L),z--;for(;M--;){if(Ee===L||L!==null&&Ee===L.alternate)break t;Ee=xo(Ee),L=xo(L)}Ee=null}else Ee=null;q!==null&&OT(Z,j,q,Ee,!1),we!==null&&tt!==null&&OT(Z,tt,we,Ee,!0)}}e:{if(j=F?bi(F):window,q=j.nodeName&&j.nodeName.toLowerCase(),q==="select"||q==="input"&&j.type==="file")var de=Qy;else if(Mt(j))if(Wy)de=qI;else{de=HI;var De=FI}else q=j.nodeName,!q||q.toLowerCase()!=="input"||j.type!=="checkbox"&&j.type!=="radio"?F&&xl(F.elementType)&&(de=Qy):de=jI;if(de&&(de=de(r,F))){or(Z,de,o,Q);break e}De&&De(r,j,F),r==="focusout"&&F&&j.type==="number"&&F.memoizedProps.value!=null&&$r(j,"number",j.value)}switch(De=F?bi(F):window,r){case"focusin":(Mt(De)||De.contentEditable==="true")&&(co=De,ep=F,Gl=null);break;case"focusout":Gl=ep=co=null;break;case"mousedown":tp=!0;break;case"contextmenu":case"mouseup":case"dragend":tp=!1,rv(Z,o,Q);break;case"selectionchange":if(KI)break;case"keydown":case"keyup":rv(Z,o,Q)}var pe;if(Di)e:{switch(r){case"compositionstart":var Te="onCompositionStart";break e;case"compositionend":Te="onCompositionEnd";break e;case"compositionupdate":Te="onCompositionUpdate";break e}Te=void 0}else Ve?G(r,o)&&(Te="onCompositionEnd"):r==="keydown"&&o.keyCode===229&&(Te="onCompositionStart");Te&&(v&&o.locale!=="ko"&&(Ve||Te!=="onCompositionStart"?Te==="onCompositionEnd"&&Ve&&(pe=Vl()):(Ci=Q,Yr="value"in Ci?Ci.value:Ci.textContent,Ve=!0)),De=qh(F,Te),0<De.length&&(Te=new zl(Te,r,null,o,Q),Z.push({event:Te,listeners:De}),pe?Te.data=pe:(pe=re(o),pe!==null&&(Te.data=pe)))),(pe=_?Pt(r,o):Ue(r,o))&&(Te=qh(F,"onBeforeInput"),0<Te.length&&(De=new zl("onBeforeInput","beforeinput",null,o,Q),Z.push({event:De,listeners:Te}),De.data=pe)),I1(Z,r,F,o,Q)}IT(Z,s)})}function vu(r,s,o){return{instance:r,listener:s,currentTarget:o}}function qh(r,s){for(var o=s+"Capture",u=[];r!==null;){var f=r,g=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||g===null||(f=Js(r,o),f!=null&&u.unshift(vu(r,f,g)),f=Js(r,s),f!=null&&u.push(vu(r,f,g))),r.tag===3)return u;r=r.return}return[]}function xo(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5&&r.tag!==27);return r||null}function OT(r,s,o,u,f){for(var g=s._reactName,E=[];o!==null&&o!==u;){var w=o,C=w.alternate,F=w.stateNode;if(w=w.tag,C!==null&&C===u)break;w!==5&&w!==26&&w!==27||F===null||(C=F,f?(F=Js(o,g),F!=null&&E.unshift(vu(o,F,C))):f||(F=Js(o,g),F!=null&&E.push(vu(o,F,C)))),o=o.return}E.length!==0&&r.push({event:s,listeners:E})}var k1=/\r\n?/g,P1=/\u0000|\uFFFD/g;function DT(r){return(typeof r=="string"?r:""+r).replace(k1,`
`).replace(P1,"")}function kT(r,s){return s=DT(s),DT(r)===s}function Gh(){}function et(r,s,o,u,f,g){switch(o){case"children":typeof u=="string"?s==="body"||s==="textarea"&&u===""||Kn(r,u):(typeof u=="number"||typeof u=="bigint")&&s!=="body"&&Kn(r,""+u);break;case"className":Ai(r,"class",u);break;case"tabIndex":Ai(r,"tabindex",u);break;case"dir":case"role":case"viewBox":case"width":case"height":Ai(r,o,u);break;case"style":Ml(r,u,g);break;case"data":if(s!=="object"){Ai(r,"data",u);break}case"src":case"href":if(u===""&&(s!=="a"||o!=="href")){r.removeAttribute(o);break}if(u==null||typeof u=="function"||typeof u=="symbol"||typeof u=="boolean"){r.removeAttribute(o);break}u=to(""+u),r.setAttribute(o,u);break;case"action":case"formAction":if(typeof u=="function"){r.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof g=="function"&&(o==="formAction"?(s!=="input"&&et(r,s,"name",f.name,f,null),et(r,s,"formEncType",f.formEncType,f,null),et(r,s,"formMethod",f.formMethod,f,null),et(r,s,"formTarget",f.formTarget,f,null)):(et(r,s,"encType",f.encType,f,null),et(r,s,"method",f.method,f,null),et(r,s,"target",f.target,f,null)));if(u==null||typeof u=="symbol"||typeof u=="boolean"){r.removeAttribute(o);break}u=to(""+u),r.setAttribute(o,u);break;case"onClick":u!=null&&(r.onclick=Gh);break;case"onScroll":u!=null&&Pe("scroll",r);break;case"onScrollEnd":u!=null&&Pe("scrollend",r);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(i(61));if(o=u.__html,o!=null){if(f.children!=null)throw Error(i(60));r.innerHTML=o}}break;case"multiple":r.multiple=u&&typeof u!="function"&&typeof u!="symbol";break;case"muted":r.muted=u&&typeof u!="function"&&typeof u!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(u==null||typeof u=="function"||typeof u=="boolean"||typeof u=="symbol"){r.removeAttribute("xlink:href");break}o=to(""+u),r.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":u!=null&&typeof u!="function"&&typeof u!="symbol"?r.setAttribute(o,""+u):r.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":u&&typeof u!="function"&&typeof u!="symbol"?r.setAttribute(o,""):r.removeAttribute(o);break;case"capture":case"download":u===!0?r.setAttribute(o,""):u!==!1&&u!=null&&typeof u!="function"&&typeof u!="symbol"?r.setAttribute(o,u):r.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":u!=null&&typeof u!="function"&&typeof u!="symbol"&&!isNaN(u)&&1<=u?r.setAttribute(o,u):r.removeAttribute(o);break;case"rowSpan":case"start":u==null||typeof u=="function"||typeof u=="symbol"||isNaN(u)?r.removeAttribute(o):r.setAttribute(o,u);break;case"popover":Pe("beforetoggle",r),Pe("toggle",r),Kr(r,"popover",u);break;case"xlinkActuate":Xt(r,"http://www.w3.org/1999/xlink","xlink:actuate",u);break;case"xlinkArcrole":Xt(r,"http://www.w3.org/1999/xlink","xlink:arcrole",u);break;case"xlinkRole":Xt(r,"http://www.w3.org/1999/xlink","xlink:role",u);break;case"xlinkShow":Xt(r,"http://www.w3.org/1999/xlink","xlink:show",u);break;case"xlinkTitle":Xt(r,"http://www.w3.org/1999/xlink","xlink:title",u);break;case"xlinkType":Xt(r,"http://www.w3.org/1999/xlink","xlink:type",u);break;case"xmlBase":Xt(r,"http://www.w3.org/XML/1998/namespace","xml:base",u);break;case"xmlLang":Xt(r,"http://www.w3.org/XML/1998/namespace","xml:lang",u);break;case"xmlSpace":Xt(r,"http://www.w3.org/XML/1998/namespace","xml:space",u);break;case"is":Kr(r,"is",u);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=$d.get(o)||o,Kr(r,o,u))}}function bm(r,s,o,u,f,g){switch(o){case"style":Ml(r,u,g);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(i(61));if(o=u.__html,o!=null){if(f.children!=null)throw Error(i(60));r.innerHTML=o}}break;case"children":typeof u=="string"?Kn(r,u):(typeof u=="number"||typeof u=="bigint")&&Kn(r,""+u);break;case"onScroll":u!=null&&Pe("scroll",r);break;case"onScrollEnd":u!=null&&Pe("scrollend",r);break;case"onClick":u!=null&&(r.onclick=Gh);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Wa.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(f=o.endsWith("Capture"),s=o.slice(2,f?o.length-7:void 0),g=r[At]||null,g=g!=null?g[o]:null,typeof g=="function"&&r.removeEventListener(s,g,f),typeof u=="function")){typeof g!="function"&&g!==null&&(o in r?r[o]=null:r.hasAttribute(o)&&r.removeAttribute(o)),r.addEventListener(s,u,f);break e}o in r?r[o]=u:u===!0?r.setAttribute(o,""):Kr(r,o,u)}}}function tn(r,s,o){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Pe("error",r),Pe("load",r);var u=!1,f=!1,g;for(g in o)if(o.hasOwnProperty(g)){var E=o[g];if(E!=null)switch(g){case"src":u=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(i(137,s));default:et(r,s,g,E,o,null)}}f&&et(r,s,"srcSet",o.srcSet,o,null),u&&et(r,s,"src",o.src,o,null);return;case"input":Pe("invalid",r);var w=g=E=f=null,C=null,F=null;for(u in o)if(o.hasOwnProperty(u)){var Q=o[u];if(Q!=null)switch(u){case"name":f=Q;break;case"type":E=Q;break;case"checked":C=Q;break;case"defaultChecked":F=Q;break;case"value":g=Q;break;case"defaultValue":w=Q;break;case"children":case"dangerouslySetInnerHTML":if(Q!=null)throw Error(i(137,s));break;default:et(r,s,u,Q,o,null)}}Ws(r,g,w,C,F,E,f,!1),eo(r);return;case"select":Pe("invalid",r),u=E=g=null;for(f in o)if(o.hasOwnProperty(f)&&(w=o[f],w!=null))switch(f){case"value":g=w;break;case"defaultValue":E=w;break;case"multiple":u=w;default:et(r,s,f,w,o,null)}s=g,o=E,r.multiple=!!u,s!=null?tr(r,!!u,s,!1):o!=null&&tr(r,!!u,o,!0);return;case"textarea":Pe("invalid",r),g=f=u=null;for(E in o)if(o.hasOwnProperty(E)&&(w=o[E],w!=null))switch(E){case"value":u=w;break;case"defaultValue":f=w;break;case"children":g=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(i(91));break;default:et(r,s,E,w,o,null)}Xs(r,u,f,g),eo(r);return;case"option":for(C in o)if(o.hasOwnProperty(C)&&(u=o[C],u!=null))switch(C){case"selected":r.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:et(r,s,C,u,o,null)}return;case"dialog":Pe("beforetoggle",r),Pe("toggle",r),Pe("cancel",r),Pe("close",r);break;case"iframe":case"object":Pe("load",r);break;case"video":case"audio":for(u=0;u<yu.length;u++)Pe(yu[u],r);break;case"image":Pe("error",r),Pe("load",r);break;case"details":Pe("toggle",r);break;case"embed":case"source":case"link":Pe("error",r),Pe("load",r);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(F in o)if(o.hasOwnProperty(F)&&(u=o[F],u!=null))switch(F){case"children":case"dangerouslySetInnerHTML":throw Error(i(137,s));default:et(r,s,F,u,o,null)}return;default:if(xl(s)){for(Q in o)o.hasOwnProperty(Q)&&(u=o[Q],u!==void 0&&bm(r,s,Q,u,o,void 0));return}}for(w in o)o.hasOwnProperty(w)&&(u=o[w],u!=null&&et(r,s,w,u,o,null))}function M1(r,s,o,u){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,g=null,E=null,w=null,C=null,F=null,Q=null;for(q in o){var Z=o[q];if(o.hasOwnProperty(q)&&Z!=null)switch(q){case"checked":break;case"value":break;case"defaultValue":C=Z;default:u.hasOwnProperty(q)||et(r,s,q,null,u,Z)}}for(var j in u){var q=u[j];if(Z=o[j],u.hasOwnProperty(j)&&(q!=null||Z!=null))switch(j){case"type":g=q;break;case"name":f=q;break;case"checked":F=q;break;case"defaultChecked":Q=q;break;case"value":E=q;break;case"defaultValue":w=q;break;case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(i(137,s));break;default:q!==Z&&et(r,s,j,q,u,Z)}}kn(r,E,w,C,F,Q,g,f);return;case"select":q=E=w=j=null;for(g in o)if(C=o[g],o.hasOwnProperty(g)&&C!=null)switch(g){case"value":break;case"multiple":q=C;default:u.hasOwnProperty(g)||et(r,s,g,null,u,C)}for(f in u)if(g=u[f],C=o[f],u.hasOwnProperty(f)&&(g!=null||C!=null))switch(f){case"value":j=g;break;case"defaultValue":w=g;break;case"multiple":E=g;default:g!==C&&et(r,s,f,g,u,C)}s=w,o=E,u=q,j!=null?tr(r,!!o,j,!1):!!u!=!!o&&(s!=null?tr(r,!!o,s,!0):tr(r,!!o,o?[]:"",!1));return;case"textarea":q=j=null;for(w in o)if(f=o[w],o.hasOwnProperty(w)&&f!=null&&!u.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:et(r,s,w,null,u,f)}for(E in u)if(f=u[E],g=o[E],u.hasOwnProperty(E)&&(f!=null||g!=null))switch(E){case"value":j=f;break;case"defaultValue":q=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(i(91));break;default:f!==g&&et(r,s,E,f,u,g)}Ze(r,j,q);return;case"option":for(var we in o)if(j=o[we],o.hasOwnProperty(we)&&j!=null&&!u.hasOwnProperty(we))switch(we){case"selected":r.selected=!1;break;default:et(r,s,we,null,u,j)}for(C in u)if(j=u[C],q=o[C],u.hasOwnProperty(C)&&j!==q&&(j!=null||q!=null))switch(C){case"selected":r.selected=j&&typeof j!="function"&&typeof j!="symbol";break;default:et(r,s,C,j,u,q)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Ee in o)j=o[Ee],o.hasOwnProperty(Ee)&&j!=null&&!u.hasOwnProperty(Ee)&&et(r,s,Ee,null,u,j);for(F in u)if(j=u[F],q=o[F],u.hasOwnProperty(F)&&j!==q&&(j!=null||q!=null))switch(F){case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(i(137,s));break;default:et(r,s,F,j,u,q)}return;default:if(xl(s)){for(var tt in o)j=o[tt],o.hasOwnProperty(tt)&&j!==void 0&&!u.hasOwnProperty(tt)&&bm(r,s,tt,void 0,u,j);for(Q in u)j=u[Q],q=o[Q],!u.hasOwnProperty(Q)||j===q||j===void 0&&q===void 0||bm(r,s,Q,j,u,q);return}}for(var L in o)j=o[L],o.hasOwnProperty(L)&&j!=null&&!u.hasOwnProperty(L)&&et(r,s,L,null,u,j);for(Z in u)j=u[Z],q=o[Z],!u.hasOwnProperty(Z)||j===q||j==null&&q==null||et(r,s,Z,j,u,q)}var Am=null,Rm=null;function Kh(r){return r.nodeType===9?r:r.ownerDocument}function PT(r){switch(r){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function MT(r,s){if(r===0)switch(s){case"svg":return 1;case"math":return 2;default:return 0}return r===1&&s==="foreignObject"?0:r}function Cm(r,s){return r==="textarea"||r==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.children=="bigint"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Im=null;function x1(){var r=window.event;return r&&r.type==="popstate"?r===Im?!1:(Im=r,!0):(Im=null,!1)}var xT=typeof setTimeout=="function"?setTimeout:void 0,L1=typeof clearTimeout=="function"?clearTimeout:void 0,LT=typeof Promise=="function"?Promise:void 0,V1=typeof queueMicrotask=="function"?queueMicrotask:typeof LT<"u"?function(r){return LT.resolve(null).then(r).catch(U1)}:xT;function U1(r){setTimeout(function(){throw r})}function cs(r){return r==="head"}function VT(r,s){var o=s,u=0,f=0;do{var g=o.nextSibling;if(r.removeChild(o),g&&g.nodeType===8)if(o=g.data,o==="/$"){if(0<u&&8>u){o=u;var E=r.ownerDocument;if(o&1&&Eu(E.documentElement),o&2&&Eu(E.body),o&4)for(o=E.head,Eu(o),E=o.firstChild;E;){var w=E.nextSibling,C=E.nodeName;E[Ks]||C==="SCRIPT"||C==="STYLE"||C==="LINK"&&E.rel.toLowerCase()==="stylesheet"||o.removeChild(E),E=w}}if(f===0){r.removeChild(g),Iu(s);return}f--}else o==="$"||o==="$?"||o==="$!"?f++:u=o.charCodeAt(0)-48;else u=0;o=g}while(o);Iu(s)}function Nm(r){var s=r.firstChild;for(s&&s.nodeType===10&&(s=s.nextSibling);s;){var o=s;switch(s=s.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":Nm(o),Gr(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}r.removeChild(o)}}function B1(r,s,o,u){for(;r.nodeType===1;){var f=o;if(r.nodeName.toLowerCase()!==s.toLowerCase()){if(!u&&(r.nodeName!=="INPUT"||r.type!=="hidden"))break}else if(u){if(!r[Ks])switch(s){case"meta":if(!r.hasAttribute("itemprop"))break;return r;case"link":if(g=r.getAttribute("rel"),g==="stylesheet"&&r.hasAttribute("data-precedence"))break;if(g!==f.rel||r.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||r.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||r.getAttribute("title")!==(f.title==null?null:f.title))break;return r;case"style":if(r.hasAttribute("data-precedence"))break;return r;case"script":if(g=r.getAttribute("src"),(g!==(f.src==null?null:f.src)||r.getAttribute("type")!==(f.type==null?null:f.type)||r.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&g&&r.hasAttribute("async")&&!r.hasAttribute("itemprop"))break;return r;default:return r}}else if(s==="input"&&r.type==="hidden"){var g=f.name==null?null:""+f.name;if(f.type==="hidden"&&r.getAttribute("name")===g)return r}else return r;if(r=di(r.nextSibling),r===null)break}return null}function z1(r,s,o){if(s==="")return null;for(;r.nodeType!==3;)if((r.nodeType!==1||r.nodeName!=="INPUT"||r.type!=="hidden")&&!o||(r=di(r.nextSibling),r===null))return null;return r}function Om(r){return r.data==="$!"||r.data==="$?"&&r.ownerDocument.readyState==="complete"}function F1(r,s){var o=r.ownerDocument;if(r.data!=="$?"||o.readyState==="complete")s();else{var u=function(){s(),o.removeEventListener("DOMContentLoaded",u)};o.addEventListener("DOMContentLoaded",u),r._reactRetry=u}}function di(r){for(;r!=null;r=r.nextSibling){var s=r.nodeType;if(s===1||s===3)break;if(s===8){if(s=r.data,s==="$"||s==="$!"||s==="$?"||s==="F!"||s==="F")break;if(s==="/$")return null}}return r}var Dm=null;function UT(r){r=r.previousSibling;for(var s=0;r;){if(r.nodeType===8){var o=r.data;if(o==="$"||o==="$!"||o==="$?"){if(s===0)return r;s--}else o==="/$"&&s++}r=r.previousSibling}return null}function BT(r,s,o){switch(s=Kh(o),r){case"html":if(r=s.documentElement,!r)throw Error(i(452));return r;case"head":if(r=s.head,!r)throw Error(i(453));return r;case"body":if(r=s.body,!r)throw Error(i(454));return r;default:throw Error(i(451))}}function Eu(r){for(var s=r.attributes;s.length;)r.removeAttributeNode(s[0]);Gr(r)}var ni=new Map,zT=new Set;function $h(r){return typeof r.getRootNode=="function"?r.getRootNode():r.nodeType===9?r:r.ownerDocument}var Er=se.d;se.d={f:H1,r:j1,D:q1,C:G1,L:K1,m:$1,X:Q1,S:Y1,M:W1};function H1(){var r=Er.f(),s=Uh();return r||s}function j1(r){var s=wi(r);s!==null&&s.tag===5&&s.type==="form"?aE(s):Er.r(r)}var Lo=typeof document>"u"?null:document;function FT(r,s,o){var u=Lo;if(u&&typeof s=="string"&&s){var f=Rt(s);f='link[rel="'+r+'"][href="'+f+'"]',typeof o=="string"&&(f+='[crossorigin="'+o+'"]'),zT.has(f)||(zT.add(f),r={rel:r,crossOrigin:o,href:s},u.querySelector(f)===null&&(s=u.createElement("link"),tn(s,"link",r),Et(s),u.head.appendChild(s)))}}function q1(r){Er.D(r),FT("dns-prefetch",r,null)}function G1(r,s){Er.C(r,s),FT("preconnect",r,s)}function K1(r,s,o){Er.L(r,s,o);var u=Lo;if(u&&r&&s){var f='link[rel="preload"][as="'+Rt(s)+'"]';s==="image"&&o&&o.imageSrcSet?(f+='[imagesrcset="'+Rt(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(f+='[imagesizes="'+Rt(o.imageSizes)+'"]')):f+='[href="'+Rt(r)+'"]';var g=f;switch(s){case"style":g=Vo(r);break;case"script":g=Uo(r)}ni.has(g)||(r=y({rel:"preload",href:s==="image"&&o&&o.imageSrcSet?void 0:r,as:s},o),ni.set(g,r),u.querySelector(f)!==null||s==="style"&&u.querySelector(Tu(g))||s==="script"&&u.querySelector(Su(g))||(s=u.createElement("link"),tn(s,"link",r),Et(s),u.head.appendChild(s)))}}function $1(r,s){Er.m(r,s);var o=Lo;if(o&&r){var u=s&&typeof s.as=="string"?s.as:"script",f='link[rel="modulepreload"][as="'+Rt(u)+'"][href="'+Rt(r)+'"]',g=f;switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":g=Uo(r)}if(!ni.has(g)&&(r=y({rel:"modulepreload",href:r},s),ni.set(g,r),o.querySelector(f)===null)){switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(Su(g)))return}u=o.createElement("link"),tn(u,"link",r),Et(u),o.head.appendChild(u)}}}function Y1(r,s,o){Er.S(r,s,o);var u=Lo;if(u&&r){var f=yn(u).hoistableStyles,g=Vo(r);s=s||"default";var E=f.get(g);if(!E){var w={loading:0,preload:null};if(E=u.querySelector(Tu(g)))w.loading=5;else{r=y({rel:"stylesheet",href:r,"data-precedence":s},o),(o=ni.get(g))&&km(r,o);var C=E=u.createElement("link");Et(C),tn(C,"link",r),C._p=new Promise(function(F,Q){C.onload=F,C.onerror=Q}),C.addEventListener("load",function(){w.loading|=1}),C.addEventListener("error",function(){w.loading|=2}),w.loading|=4,Yh(E,s,u)}E={type:"stylesheet",instance:E,count:1,state:w},f.set(g,E)}}}function Q1(r,s){Er.X(r,s);var o=Lo;if(o&&r){var u=yn(o).hoistableScripts,f=Uo(r),g=u.get(f);g||(g=o.querySelector(Su(f)),g||(r=y({src:r,async:!0},s),(s=ni.get(f))&&Pm(r,s),g=o.createElement("script"),Et(g),tn(g,"link",r),o.head.appendChild(g)),g={type:"script",instance:g,count:1,state:null},u.set(f,g))}}function W1(r,s){Er.M(r,s);var o=Lo;if(o&&r){var u=yn(o).hoistableScripts,f=Uo(r),g=u.get(f);g||(g=o.querySelector(Su(f)),g||(r=y({src:r,async:!0,type:"module"},s),(s=ni.get(f))&&Pm(r,s),g=o.createElement("script"),Et(g),tn(g,"link",r),o.head.appendChild(g)),g={type:"script",instance:g,count:1,state:null},u.set(f,g))}}function HT(r,s,o,u){var f=(f=be.current)?$h(f):null;if(!f)throw Error(i(446));switch(r){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(s=Vo(o.href),o=yn(f).hoistableStyles,u=o.get(s),u||(u={type:"style",instance:null,count:0,state:null},o.set(s,u)),u):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){r=Vo(o.href);var g=yn(f).hoistableStyles,E=g.get(r);if(E||(f=f.ownerDocument||f,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},g.set(r,E),(g=f.querySelector(Tu(r)))&&!g._p&&(E.instance=g,E.state.loading=5),ni.has(r)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},ni.set(r,o),g||X1(f,r,o,E.state))),s&&u===null)throw Error(i(528,""));return E}if(s&&u!==null)throw Error(i(529,""));return null;case"script":return s=o.async,o=o.src,typeof o=="string"&&s&&typeof s!="function"&&typeof s!="symbol"?(s=Uo(o),o=yn(f).hoistableScripts,u=o.get(s),u||(u={type:"script",instance:null,count:0,state:null},o.set(s,u)),u):{type:"void",instance:null,count:0,state:null};default:throw Error(i(444,r))}}function Vo(r){return'href="'+Rt(r)+'"'}function Tu(r){return'link[rel="stylesheet"]['+r+"]"}function jT(r){return y({},r,{"data-precedence":r.precedence,precedence:null})}function X1(r,s,o,u){r.querySelector('link[rel="preload"][as="style"]['+s+"]")?u.loading=1:(s=r.createElement("link"),u.preload=s,s.addEventListener("load",function(){return u.loading|=1}),s.addEventListener("error",function(){return u.loading|=2}),tn(s,"link",o),Et(s),r.head.appendChild(s))}function Uo(r){return'[src="'+Rt(r)+'"]'}function Su(r){return"script[async]"+r}function qT(r,s,o){if(s.count++,s.instance===null)switch(s.type){case"style":var u=r.querySelector('style[data-href~="'+Rt(o.href)+'"]');if(u)return s.instance=u,Et(u),u;var f=y({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return u=(r.ownerDocument||r).createElement("style"),Et(u),tn(u,"style",f),Yh(u,o.precedence,r),s.instance=u;case"stylesheet":f=Vo(o.href);var g=r.querySelector(Tu(f));if(g)return s.state.loading|=4,s.instance=g,Et(g),g;u=jT(o),(f=ni.get(f))&&km(u,f),g=(r.ownerDocument||r).createElement("link"),Et(g);var E=g;return E._p=new Promise(function(w,C){E.onload=w,E.onerror=C}),tn(g,"link",u),s.state.loading|=4,Yh(g,o.precedence,r),s.instance=g;case"script":return g=Uo(o.src),(f=r.querySelector(Su(g)))?(s.instance=f,Et(f),f):(u=o,(f=ni.get(g))&&(u=y({},o),Pm(u,f)),r=r.ownerDocument||r,f=r.createElement("script"),Et(f),tn(f,"link",u),r.head.appendChild(f),s.instance=f);case"void":return null;default:throw Error(i(443,s.type))}else s.type==="stylesheet"&&(s.state.loading&4)===0&&(u=s.instance,s.state.loading|=4,Yh(u,o.precedence,r));return s.instance}function Yh(r,s,o){for(var u=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=u.length?u[u.length-1]:null,g=f,E=0;E<u.length;E++){var w=u[E];if(w.dataset.precedence===s)g=w;else if(g!==f)break}g?g.parentNode.insertBefore(r,g.nextSibling):(s=o.nodeType===9?o.head:o,s.insertBefore(r,s.firstChild))}function km(r,s){r.crossOrigin==null&&(r.crossOrigin=s.crossOrigin),r.referrerPolicy==null&&(r.referrerPolicy=s.referrerPolicy),r.title==null&&(r.title=s.title)}function Pm(r,s){r.crossOrigin==null&&(r.crossOrigin=s.crossOrigin),r.referrerPolicy==null&&(r.referrerPolicy=s.referrerPolicy),r.integrity==null&&(r.integrity=s.integrity)}var Qh=null;function GT(r,s,o){if(Qh===null){var u=new Map,f=Qh=new Map;f.set(o,u)}else f=Qh,u=f.get(o),u||(u=new Map,f.set(o,u));if(u.has(r))return u;for(u.set(r,null),o=o.getElementsByTagName(r),f=0;f<o.length;f++){var g=o[f];if(!(g[Ks]||g[kt]||r==="link"&&g.getAttribute("rel")==="stylesheet")&&g.namespaceURI!=="http://www.w3.org/2000/svg"){var E=g.getAttribute(s)||"";E=r+E;var w=u.get(E);w?w.push(g):u.set(E,[g])}}return u}function KT(r,s,o){r=r.ownerDocument||r,r.head.insertBefore(o,s==="title"?r.querySelector("head > title"):null)}function Z1(r,s,o){if(o===1||s.itemProp!=null)return!1;switch(r){case"meta":case"title":return!0;case"style":if(typeof s.precedence!="string"||typeof s.href!="string"||s.href==="")break;return!0;case"link":if(typeof s.rel!="string"||typeof s.href!="string"||s.href===""||s.onLoad||s.onError)break;switch(s.rel){case"stylesheet":return r=s.disabled,typeof s.precedence=="string"&&r==null;default:return!0}case"script":if(s.async&&typeof s.async!="function"&&typeof s.async!="symbol"&&!s.onLoad&&!s.onError&&s.src&&typeof s.src=="string")return!0}return!1}function $T(r){return!(r.type==="stylesheet"&&(r.state.loading&3)===0)}var wu=null;function J1(){}function eN(r,s,o){if(wu===null)throw Error(i(475));var u=wu;if(s.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var f=Vo(o.href),g=r.querySelector(Tu(f));if(g){r=g._p,r!==null&&typeof r=="object"&&typeof r.then=="function"&&(u.count++,u=Wh.bind(u),r.then(u,u)),s.state.loading|=4,s.instance=g,Et(g);return}g=r.ownerDocument||r,o=jT(o),(f=ni.get(f))&&km(o,f),g=g.createElement("link"),Et(g);var E=g;E._p=new Promise(function(w,C){E.onload=w,E.onerror=C}),tn(g,"link",o),s.instance=g}u.stylesheets===null&&(u.stylesheets=new Map),u.stylesheets.set(s,r),(r=s.state.preload)&&(s.state.loading&3)===0&&(u.count++,s=Wh.bind(u),r.addEventListener("load",s),r.addEventListener("error",s))}}function tN(){if(wu===null)throw Error(i(475));var r=wu;return r.stylesheets&&r.count===0&&Mm(r,r.stylesheets),0<r.count?function(s){var o=setTimeout(function(){if(r.stylesheets&&Mm(r,r.stylesheets),r.unsuspend){var u=r.unsuspend;r.unsuspend=null,u()}},6e4);return r.unsuspend=s,function(){r.unsuspend=null,clearTimeout(o)}}:null}function Wh(){if(this.count--,this.count===0){if(this.stylesheets)Mm(this,this.stylesheets);else if(this.unsuspend){var r=this.unsuspend;this.unsuspend=null,r()}}}var Xh=null;function Mm(r,s){r.stylesheets=null,r.unsuspend!==null&&(r.count++,Xh=new Map,s.forEach(nN,r),Xh=null,Wh.call(r))}function nN(r,s){if(!(s.state.loading&4)){var o=Xh.get(r);if(o)var u=o.get(null);else{o=new Map,Xh.set(r,o);for(var f=r.querySelectorAll("link[data-precedence],style[data-precedence]"),g=0;g<f.length;g++){var E=f[g];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(o.set(E.dataset.precedence,E),u=E)}u&&o.set(null,u)}f=s.instance,E=f.getAttribute("data-precedence"),g=o.get(E)||u,g===u&&o.set(null,f),o.set(E,f),this.count++,u=Wh.bind(this),f.addEventListener("load",u),f.addEventListener("error",u),g?g.parentNode.insertBefore(f,g.nextSibling):(r=r.nodeType===9?r.head:r,r.insertBefore(f,r.firstChild)),s.state.loading|=4}}var bu={$$typeof:ee,Provider:null,Consumer:null,_currentValue:me,_currentValue2:me,_threadCount:0};function iN(r,s,o,u,f,g,E,w){this.tag=1,this.containerInfo=r,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Wi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wi(0),this.hiddenUpdates=Wi(null),this.identifierPrefix=u,this.onUncaughtError=f,this.onCaughtError=g,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=w,this.incompleteTransitions=new Map}function YT(r,s,o,u,f,g,E,w,C,F,Q,Z){return r=new iN(r,s,o,E,w,C,F,Z),s=1,g===!0&&(s|=24),g=Mn(3,null,null,s),r.current=g,g.stateNode=r,s=mp(),s.refCount++,r.pooledCache=s,s.refCount++,g.memoizedState={element:u,isDehydrated:o,cache:s},vp(g),r}function QT(r){return r?(r=mo,r):mo}function WT(r,s,o,u,f,g){f=QT(f),u.context===null?u.context=f:u.pendingContext=f,u=Xr(s),u.payload={element:o},g=g===void 0?null:g,g!==null&&(u.callback=g),o=Zr(r,u,s),o!==null&&(Bn(o,r,s),eu(o,r,s))}function XT(r,s){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var o=r.retryLane;r.retryLane=o!==0&&o<s?o:s}}function xm(r,s){XT(r,s),(r=r.alternate)&&XT(r,s)}function ZT(r){if(r.tag===13){var s=po(r,67108864);s!==null&&Bn(s,r,67108864),xm(r,67108864)}}var Zh=!0;function rN(r,s,o,u){var f=Y.T;Y.T=null;var g=se.p;try{se.p=2,Lm(r,s,o,u)}finally{se.p=g,Y.T=f}}function sN(r,s,o,u){var f=Y.T;Y.T=null;var g=se.p;try{se.p=8,Lm(r,s,o,u)}finally{se.p=g,Y.T=f}}function Lm(r,s,o,u){if(Zh){var f=Vm(u);if(f===null)wm(r,s,u,Jh,o),e0(r,u);else if(oN(f,r,s,o,u))u.stopPropagation();else if(e0(r,u),s&4&&-1<aN.indexOf(r)){for(;f!==null;){var g=wi(f);if(g!==null)switch(g.tag){case 3:if(g=g.stateNode,g.current.memoizedState.isDehydrated){var E=li(g.pendingLanes);if(E!==0){var w=g;for(w.pendingLanes|=2,w.entangledLanes|=2;E;){var C=1<<31-on(E);w.entanglements[1]|=C,E&=~C}Vi(g),(We&6)===0&&(Lh=qn()+500,_u(0))}}break;case 13:w=po(g,2),w!==null&&Bn(w,g,2),Uh(),xm(g,2)}if(g=Vm(u),g===null&&wm(r,s,u,Jh,o),g===f)break;f=g}f!==null&&u.stopPropagation()}else wm(r,s,u,null,o)}}function Vm(r){return r=$n(r),Um(r)}var Jh=null;function Um(r){if(Jh=null,r=Zi(r),r!==null){var s=l(r);if(s===null)r=null;else{var o=s.tag;if(o===13){if(r=c(s),r!==null)return r;r=null}else if(o===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;r=null}else s!==r&&(r=null)}}return Jh=r,null}function JT(r){switch(r){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Fd()){case Sl:return 2;case Ka:return 8;case Fs:case Hd:return 32;case $a:return 268435456;default:return 32}default:return 32}}var Bm=!1,hs=null,fs=null,ds=null,Au=new Map,Ru=new Map,ps=[],aN="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function e0(r,s){switch(r){case"focusin":case"focusout":hs=null;break;case"dragenter":case"dragleave":fs=null;break;case"mouseover":case"mouseout":ds=null;break;case"pointerover":case"pointerout":Au.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ru.delete(s.pointerId)}}function Cu(r,s,o,u,f,g){return r===null||r.nativeEvent!==g?(r={blockedOn:s,domEventName:o,eventSystemFlags:u,nativeEvent:g,targetContainers:[f]},s!==null&&(s=wi(s),s!==null&&ZT(s)),r):(r.eventSystemFlags|=u,s=r.targetContainers,f!==null&&s.indexOf(f)===-1&&s.push(f),r)}function oN(r,s,o,u,f){switch(s){case"focusin":return hs=Cu(hs,r,s,o,u,f),!0;case"dragenter":return fs=Cu(fs,r,s,o,u,f),!0;case"mouseover":return ds=Cu(ds,r,s,o,u,f),!0;case"pointerover":var g=f.pointerId;return Au.set(g,Cu(Au.get(g)||null,r,s,o,u,f)),!0;case"gotpointercapture":return g=f.pointerId,Ru.set(g,Cu(Ru.get(g)||null,r,s,o,u,f)),!0}return!1}function t0(r){var s=Zi(r.target);if(s!==null){var o=l(s);if(o!==null){if(s=o.tag,s===13){if(s=c(o),s!==null){r.blockedOn=s,Uc(r.priority,function(){if(o.tag===13){var u=Un();u=Hr(u);var f=po(o,u);f!==null&&Bn(f,o,u),xm(o,u)}});return}}else if(s===3&&o.stateNode.current.memoizedState.isDehydrated){r.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}r.blockedOn=null}function ef(r){if(r.blockedOn!==null)return!1;for(var s=r.targetContainers;0<s.length;){var o=Vm(r.nativeEvent);if(o===null){o=r.nativeEvent;var u=new o.constructor(o.type,o);nr=u,o.target.dispatchEvent(u),nr=null}else return s=wi(o),s!==null&&ZT(s),r.blockedOn=o,!1;s.shift()}return!0}function n0(r,s,o){ef(r)&&o.delete(s)}function lN(){Bm=!1,hs!==null&&ef(hs)&&(hs=null),fs!==null&&ef(fs)&&(fs=null),ds!==null&&ef(ds)&&(ds=null),Au.forEach(n0),Ru.forEach(n0)}function tf(r,s){r.blockedOn===s&&(r.blockedOn=null,Bm||(Bm=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,lN)))}var nf=null;function i0(r){nf!==r&&(nf=r,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){nf===r&&(nf=null);for(var s=0;s<r.length;s+=3){var o=r[s],u=r[s+1],f=r[s+2];if(typeof u!="function"){if(Um(u||o)===null)continue;break}var g=wi(o);g!==null&&(r.splice(s,3),s-=3,Up(g,{pending:!0,data:f,method:o.method,action:u},u,f))}}))}function Iu(r){function s(C){return tf(C,r)}hs!==null&&tf(hs,r),fs!==null&&tf(fs,r),ds!==null&&tf(ds,r),Au.forEach(s),Ru.forEach(s);for(var o=0;o<ps.length;o++){var u=ps[o];u.blockedOn===r&&(u.blockedOn=null)}for(;0<ps.length&&(o=ps[0],o.blockedOn===null);)t0(o),o.blockedOn===null&&ps.shift();if(o=(r.ownerDocument||r).$$reactFormReplay,o!=null)for(u=0;u<o.length;u+=3){var f=o[u],g=o[u+1],E=f[At]||null;if(typeof g=="function")E||i0(o);else if(E){var w=null;if(g&&g.hasAttribute("formAction")){if(f=g,E=g[At]||null)w=E.formAction;else if(Um(f)!==null)continue}else w=E.action;typeof w=="function"?o[u+1]=w:(o.splice(u,3),u-=3),i0(o)}}}function zm(r){this._internalRoot=r}rf.prototype.render=zm.prototype.render=function(r){var s=this._internalRoot;if(s===null)throw Error(i(409));var o=s.current,u=Un();WT(o,u,r,s,null,null)},rf.prototype.unmount=zm.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var s=r.containerInfo;WT(r.current,2,null,r,null,null),Uh(),s[Gn]=null}};function rf(r){this._internalRoot=r}rf.prototype.unstable_scheduleHydration=function(r){if(r){var s=jr();r={blockedOn:null,target:r,priority:s};for(var o=0;o<ps.length&&s!==0&&s<ps[o].priority;o++);ps.splice(o,0,r),o===0&&t0(r)}};var r0=e.version;if(r0!=="19.1.0")throw Error(i(527,r0,"19.1.0"));se.findDOMNode=function(r){var s=r._reactInternals;if(s===void 0)throw typeof r.render=="function"?Error(i(188)):(r=Object.keys(r).join(","),Error(i(268,r)));return r=p(s),r=r!==null?m(r):null,r=r===null?null:r.stateNode,r};var uN={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:Y,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var sf=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!sf.isDisabled&&sf.supportsFiber)try{mt=sf.inject(uN),Qe=sf}catch{}}return Ou.createRoot=function(r,s){if(!a(r))throw Error(i(299));var o=!1,u="",f=EE,g=TE,E=SE,w=null;return s!=null&&(s.unstable_strictMode===!0&&(o=!0),s.identifierPrefix!==void 0&&(u=s.identifierPrefix),s.onUncaughtError!==void 0&&(f=s.onUncaughtError),s.onCaughtError!==void 0&&(g=s.onCaughtError),s.onRecoverableError!==void 0&&(E=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(w=s.unstable_transitionCallbacks)),s=YT(r,1,!1,null,null,o,u,f,g,E,w,null),r[Gn]=s.current,Sm(r),new zm(s)},Ou.hydrateRoot=function(r,s,o){if(!a(r))throw Error(i(299));var u=!1,f="",g=EE,E=TE,w=SE,C=null,F=null;return o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onUncaughtError!==void 0&&(g=o.onUncaughtError),o.onCaughtError!==void 0&&(E=o.onCaughtError),o.onRecoverableError!==void 0&&(w=o.onRecoverableError),o.unstable_transitionCallbacks!==void 0&&(C=o.unstable_transitionCallbacks),o.formState!==void 0&&(F=o.formState)),s=YT(r,1,!0,s,o??null,u,f,g,E,w,C,F),s.context=QT(null),o=s.current,u=Un(),u=Hr(u),f=Xr(u),f.callback=null,Zr(o,f,u),o=u,s.current.lanes=o,Xi(s,o),Vi(s),r[Gn]=s.current,Sm(r),new rf(s)},Ou.version="19.1.0",Ou}var p0;function EN(){if(p0)return jm.exports;p0=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),jm.exports=vN(),jm.exports}var TN=EN();const SN=$w(TN);var Du={},m0;function wN(){if(m0)return Du;m0=1,Object.defineProperty(Du,"__esModule",{value:!0}),Du.parse=c,Du.serialize=m;const n=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,t=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,i=/^[\u0020-\u003A\u003D-\u007E]*$/,a=Object.prototype.toString,l=(()=>{const S=function(){};return S.prototype=Object.create(null),S})();function c(S,I){const N=new l,H=S.length;if(H<2)return N;const B=(I==null?void 0:I.decode)||y;let $=0;do{const W=S.indexOf("=",$);if(W===-1)break;const ee=S.indexOf(";",$),ae=ee===-1?H:ee;if(W>ae){$=S.lastIndexOf(";",W-1)+1;continue}const he=d(S,$,W),_e=p(S,W,he),D=S.slice(he,_e);if(N[D]===void 0){let A=d(S,W+1,ae),R=p(S,ae,A);const P=B(S.slice(A,R));N[D]=P}$=ae+1}while($<H);return N}function d(S,I,N){do{const H=S.charCodeAt(I);if(H!==32&&H!==9)return I}while(++I<N);return N}function p(S,I,N){for(;I>N;){const H=S.charCodeAt(--I);if(H!==32&&H!==9)return I+1}return N}function m(S,I,N){const H=(N==null?void 0:N.encode)||encodeURIComponent;if(!n.test(S))throw new TypeError(`argument name is invalid: ${S}`);const B=H(I);if(!e.test(B))throw new TypeError(`argument val is invalid: ${I}`);let $=S+"="+B;if(!N)return $;if(N.maxAge!==void 0){if(!Number.isInteger(N.maxAge))throw new TypeError(`option maxAge is invalid: ${N.maxAge}`);$+="; Max-Age="+N.maxAge}if(N.domain){if(!t.test(N.domain))throw new TypeError(`option domain is invalid: ${N.domain}`);$+="; Domain="+N.domain}if(N.path){if(!i.test(N.path))throw new TypeError(`option path is invalid: ${N.path}`);$+="; Path="+N.path}if(N.expires){if(!T(N.expires)||!Number.isFinite(N.expires.valueOf()))throw new TypeError(`option expires is invalid: ${N.expires}`);$+="; Expires="+N.expires.toUTCString()}if(N.httpOnly&&($+="; HttpOnly"),N.secure&&($+="; Secure"),N.partitioned&&($+="; Partitioned"),N.priority)switch(typeof N.priority=="string"?N.priority.toLowerCase():void 0){case"low":$+="; Priority=Low";break;case"medium":$+="; Priority=Medium";break;case"high":$+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${N.priority}`)}if(N.sameSite)switch(typeof N.sameSite=="string"?N.sameSite.toLowerCase():N.sameSite){case!0:case"strict":$+="; SameSite=Strict";break;case"lax":$+="; SameSite=Lax";break;case"none":$+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${N.sameSite}`)}return $}function y(S){if(S.indexOf("%")===-1)return S;try{return decodeURIComponent(S)}catch{return S}}function T(S){return a.call(S)==="[object Date]"}return Du}wN();var g0="popstate";function bN(n={}){function e(i,a){let{pathname:l,search:c,hash:d}=i.location;return wg("",{pathname:l,search:c,hash:d},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function t(i,a){return typeof a=="string"?a:ic(a)}return RN(e,t,null,n)}function dt(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function ji(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function AN(){return Math.random().toString(36).substring(2,10)}function _0(n,e){return{usr:n.state,key:n.key,idx:e}}function wg(n,e,t=null,i){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof e=="string"?hl(e):e,state:t,key:e&&e.key||i||AN()}}function ic({pathname:n="/",search:e="",hash:t=""}){return e&&e!=="?"&&(n+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(n+=t.charAt(0)==="#"?t:"#"+t),n}function hl(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substring(t),n=n.substring(0,t));let i=n.indexOf("?");i>=0&&(e.search=n.substring(i),n=n.substring(0,i)),n&&(e.pathname=n)}return e}function RN(n,e,t,i={}){let{window:a=document.defaultView,v5Compat:l=!1}=i,c=a.history,d="POP",p=null,m=y();m==null&&(m=0,c.replaceState({...c.state,idx:m},""));function y(){return(c.state||{idx:null}).idx}function T(){d="POP";let B=y(),$=B==null?null:B-m;m=B,p&&p({action:d,location:H.location,delta:$})}function S(B,$){d="PUSH";let W=wg(H.location,B,$);m=y()+1;let ee=_0(W,m),ae=H.createHref(W);try{c.pushState(ee,"",ae)}catch(he){if(he instanceof DOMException&&he.name==="DataCloneError")throw he;a.location.assign(ae)}l&&p&&p({action:d,location:H.location,delta:1})}function I(B,$){d="REPLACE";let W=wg(H.location,B,$);m=y();let ee=_0(W,m),ae=H.createHref(W);c.replaceState(ee,"",ae),l&&p&&p({action:d,location:H.location,delta:0})}function N(B){return CN(B)}let H={get action(){return d},get location(){return n(a,c)},listen(B){if(p)throw new Error("A history only accepts one active listener");return a.addEventListener(g0,T),p=B,()=>{a.removeEventListener(g0,T),p=null}},createHref(B){return e(a,B)},createURL:N,encodeLocation(B){let $=N(B);return{pathname:$.pathname,search:$.search,hash:$.hash}},push:S,replace:I,go(B){return c.go(B)}};return H}function CN(n,e=!1){let t="http://localhost";typeof window<"u"&&(t=window.location.origin!=="null"?window.location.origin:window.location.href),dt(t,"No window.location.(origin|href) available to create URL");let i=typeof n=="string"?n:ic(n);return i=i.replace(/ $/,"%20"),!e&&i.startsWith("//")&&(i=t+i),new URL(i,t)}function Yw(n,e,t="/"){return IN(n,e,t,!1)}function IN(n,e,t,i){let a=typeof e=="string"?hl(e):e,l=Nr(a.pathname||"/",t);if(l==null)return null;let c=Qw(n);NN(c);let d=null;for(let p=0;d==null&&p<c.length;++p){let m=zN(l);d=UN(c[p],m,i)}return d}function Qw(n,e=[],t=[],i=""){let a=(l,c,d)=>{let p={relativePath:d===void 0?l.path||"":d,caseSensitive:l.caseSensitive===!0,childrenIndex:c,route:l};p.relativePath.startsWith("/")&&(dt(p.relativePath.startsWith(i),`Absolute route path "${p.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(i.length));let m=Rr([i,p.relativePath]),y=t.concat(p);l.children&&l.children.length>0&&(dt(l.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${m}".`),Qw(l.children,e,y,m)),!(l.path==null&&!l.index)&&e.push({path:m,score:LN(m,l.index),routesMeta:y})};return n.forEach((l,c)=>{var d;if(l.path===""||!((d=l.path)!=null&&d.includes("?")))a(l,c);else for(let p of Ww(l.path))a(l,c,p)}),e}function Ww(n){let e=n.split("/");if(e.length===0)return[];let[t,...i]=e,a=t.endsWith("?"),l=t.replace(/\?$/,"");if(i.length===0)return a?[l,""]:[l];let c=Ww(i.join("/")),d=[];return d.push(...c.map(p=>p===""?l:[l,p].join("/"))),a&&d.push(...c),d.map(p=>n.startsWith("/")&&p===""?"/":p)}function NN(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:VN(e.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}var ON=/^:[\w-]+$/,DN=3,kN=2,PN=1,MN=10,xN=-2,y0=n=>n==="*";function LN(n,e){let t=n.split("/"),i=t.length;return t.some(y0)&&(i+=xN),e&&(i+=kN),t.filter(a=>!y0(a)).reduce((a,l)=>a+(ON.test(l)?DN:l===""?PN:MN),i)}function VN(n,e){return n.length===e.length&&n.slice(0,-1).every((i,a)=>i===e[a])?n[n.length-1]-e[e.length-1]:0}function UN(n,e,t=!1){let{routesMeta:i}=n,a={},l="/",c=[];for(let d=0;d<i.length;++d){let p=i[d],m=d===i.length-1,y=l==="/"?e:e.slice(l.length)||"/",T=kf({path:p.relativePath,caseSensitive:p.caseSensitive,end:m},y),S=p.route;if(!T&&m&&t&&!i[i.length-1].route.index&&(T=kf({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},y)),!T)return null;Object.assign(a,T.params),c.push({params:a,pathname:Rr([l,T.pathname]),pathnameBase:qN(Rr([l,T.pathnameBase])),route:S}),T.pathnameBase!=="/"&&(l=Rr([l,T.pathnameBase]))}return c}function kf(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,i]=BN(n.path,n.caseSensitive,n.end),a=e.match(t);if(!a)return null;let l=a[0],c=l.replace(/(.)\/+$/,"$1"),d=a.slice(1);return{params:i.reduce((m,{paramName:y,isOptional:T},S)=>{if(y==="*"){let N=d[S]||"";c=l.slice(0,l.length-N.length).replace(/(.)\/+$/,"$1")}const I=d[S];return T&&!I?m[y]=void 0:m[y]=(I||"").replace(/%2F/g,"/"),m},{}),pathname:l,pathnameBase:c,pattern:n}}function BN(n,e=!1,t=!0){ji(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let i=[],a="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,d,p)=>(i.push({paramName:d,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(i.push({paramName:"*"}),a+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?a+="\\/*$":n!==""&&n!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,e?void 0:"i"),i]}function zN(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return ji(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),n}}function Nr(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,i=n.charAt(t);return i&&i!=="/"?null:n.slice(t)||"/"}function FN(n,e="/"){let{pathname:t,search:i="",hash:a=""}=typeof n=="string"?hl(n):n;return{pathname:t?t.startsWith("/")?t:HN(t,e):e,search:GN(i),hash:KN(a)}}function HN(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(a=>{a===".."?t.length>1&&t.pop():a!=="."&&t.push(a)}),t.length>1?t.join("/"):"/"}function $m(n,e,t,i){return`Cannot include a '${n}' character in a manually specified \`to.${e}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function jN(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Xw(n){let e=jN(n);return e.map((t,i)=>i===e.length-1?t.pathname:t.pathnameBase)}function Zw(n,e,t,i=!1){let a;typeof n=="string"?a=hl(n):(a={...n},dt(!a.pathname||!a.pathname.includes("?"),$m("?","pathname","search",a)),dt(!a.pathname||!a.pathname.includes("#"),$m("#","pathname","hash",a)),dt(!a.search||!a.search.includes("#"),$m("#","search","hash",a)));let l=n===""||a.pathname==="",c=l?"/":a.pathname,d;if(c==null)d=t;else{let T=e.length-1;if(!i&&c.startsWith("..")){let S=c.split("/");for(;S[0]==="..";)S.shift(),T-=1;a.pathname=S.join("/")}d=T>=0?e[T]:"/"}let p=FN(a,d),m=c&&c!=="/"&&c.endsWith("/"),y=(l||c===".")&&t.endsWith("/");return!p.pathname.endsWith("/")&&(m||y)&&(p.pathname+="/"),p}var Rr=n=>n.join("/").replace(/\/\/+/g,"/"),qN=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),GN=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,KN=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function $N(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var Jw=["POST","PUT","PATCH","DELETE"];new Set(Jw);var YN=["GET",...Jw];new Set(YN);var fl=K.createContext(null);fl.displayName="DataRouter";var hd=K.createContext(null);hd.displayName="DataRouterState";var eb=K.createContext({isTransitioning:!1});eb.displayName="ViewTransition";var QN=K.createContext(new Map);QN.displayName="Fetchers";var WN=K.createContext(null);WN.displayName="Await";var $i=K.createContext(null);$i.displayName="Navigation";var gc=K.createContext(null);gc.displayName="Location";var Lr=K.createContext({outlet:null,matches:[],isDataRoute:!1});Lr.displayName="Route";var f_=K.createContext(null);f_.displayName="RouteError";function XN(n,{relative:e}={}){dt(_c(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:i}=K.useContext($i),{hash:a,pathname:l,search:c}=yc(n,{relative:e}),d=l;return t!=="/"&&(d=l==="/"?t:Rr([t,l])),i.createHref({pathname:d,search:c,hash:a})}function _c(){return K.useContext(gc)!=null}function Va(){return dt(_c(),"useLocation() may be used only in the context of a <Router> component."),K.useContext(gc).location}var tb="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function nb(n){K.useContext($i).static||K.useLayoutEffect(n)}function ib(){let{isDataRoute:n}=K.useContext(Lr);return n?cO():ZN()}function ZN(){dt(_c(),"useNavigate() may be used only in the context of a <Router> component.");let n=K.useContext(fl),{basename:e,navigator:t}=K.useContext($i),{matches:i}=K.useContext(Lr),{pathname:a}=Va(),l=JSON.stringify(Xw(i)),c=K.useRef(!1);return nb(()=>{c.current=!0}),K.useCallback((p,m={})=>{if(ji(c.current,tb),!c.current)return;if(typeof p=="number"){t.go(p);return}let y=Zw(p,JSON.parse(l),a,m.relative==="path");n==null&&e!=="/"&&(y.pathname=y.pathname==="/"?e:Rr([e,y.pathname])),(m.replace?t.replace:t.push)(y,m.state,m)},[e,t,l,a,n])}K.createContext(null);function yc(n,{relative:e}={}){let{matches:t}=K.useContext(Lr),{pathname:i}=Va(),a=JSON.stringify(Xw(t));return K.useMemo(()=>Zw(n,JSON.parse(a),i,e==="path"),[n,a,i,e])}function JN(n,e){return rb(n,e)}function rb(n,e,t,i){var $;dt(_c(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a}=K.useContext($i),{matches:l}=K.useContext(Lr),c=l[l.length-1],d=c?c.params:{},p=c?c.pathname:"/",m=c?c.pathnameBase:"/",y=c&&c.route;{let W=y&&y.path||"";sb(p,!y||W.endsWith("*")||W.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${W}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${W}"> to <Route path="${W==="/"?"*":`${W}/*`}">.`)}let T=Va(),S;if(e){let W=typeof e=="string"?hl(e):e;dt(m==="/"||(($=W.pathname)==null?void 0:$.startsWith(m)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${m}" but pathname "${W.pathname}" was given in the \`location\` prop.`),S=W}else S=T;let I=S.pathname||"/",N=I;if(m!=="/"){let W=m.replace(/^\//,"").split("/");N="/"+I.replace(/^\//,"").split("/").slice(W.length).join("/")}let H=Yw(n,{pathname:N});ji(y||H!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),ji(H==null||H[H.length-1].route.element!==void 0||H[H.length-1].route.Component!==void 0||H[H.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let B=rO(H&&H.map(W=>Object.assign({},W,{params:Object.assign({},d,W.params),pathname:Rr([m,a.encodeLocation?a.encodeLocation(W.pathname).pathname:W.pathname]),pathnameBase:W.pathnameBase==="/"?m:Rr([m,a.encodeLocation?a.encodeLocation(W.pathnameBase).pathname:W.pathnameBase])})),l,t,i);return e&&B?K.createElement(gc.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...S},navigationType:"POP"}},B):B}function eO(){let n=uO(),e=$N(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,i="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:i},l={padding:"2px 4px",backgroundColor:i},c=null;return console.error("Error handled by React Router default ErrorBoundary:",n),c=K.createElement(K.Fragment,null,K.createElement("p",null,"💿 Hey developer 👋"),K.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",K.createElement("code",{style:l},"ErrorBoundary")," or"," ",K.createElement("code",{style:l},"errorElement")," prop on your route.")),K.createElement(K.Fragment,null,K.createElement("h2",null,"Unexpected Application Error!"),K.createElement("h3",{style:{fontStyle:"italic"}},e),t?K.createElement("pre",{style:a},t):null,c)}var tO=K.createElement(eO,null),nO=class extends K.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,e){return e.location!==n.location||e.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:e.error,location:e.location,revalidation:n.revalidation||e.revalidation}}componentDidCatch(n,e){console.error("React Router caught the following error during render",n,e)}render(){return this.state.error!==void 0?K.createElement(Lr.Provider,{value:this.props.routeContext},K.createElement(f_.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function iO({routeContext:n,match:e,children:t}){let i=K.useContext(fl);return i&&i.static&&i.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=e.route.id),K.createElement(Lr.Provider,{value:n},t)}function rO(n,e=[],t=null,i=null){if(n==null){if(!t)return null;if(t.errors)n=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let a=n,l=t==null?void 0:t.errors;if(l!=null){let p=a.findIndex(m=>m.route.id&&(l==null?void 0:l[m.route.id])!==void 0);dt(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),a=a.slice(0,Math.min(a.length,p+1))}let c=!1,d=-1;if(t)for(let p=0;p<a.length;p++){let m=a[p];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(d=p),m.route.id){let{loaderData:y,errors:T}=t,S=m.route.loader&&!y.hasOwnProperty(m.route.id)&&(!T||T[m.route.id]===void 0);if(m.route.lazy||S){c=!0,d>=0?a=a.slice(0,d+1):a=[a[0]];break}}}return a.reduceRight((p,m,y)=>{let T,S=!1,I=null,N=null;t&&(T=l&&m.route.id?l[m.route.id]:void 0,I=m.route.errorElement||tO,c&&(d<0&&y===0?(sb("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),S=!0,N=null):d===y&&(S=!0,N=m.route.hydrateFallbackElement||null)));let H=e.concat(a.slice(0,y+1)),B=()=>{let $;return T?$=I:S?$=N:m.route.Component?$=K.createElement(m.route.Component,null):m.route.element?$=m.route.element:$=p,K.createElement(iO,{match:m,routeContext:{outlet:p,matches:H,isDataRoute:t!=null},children:$})};return t&&(m.route.ErrorBoundary||m.route.errorElement||y===0)?K.createElement(nO,{location:t.location,revalidation:t.revalidation,component:I,error:T,children:B(),routeContext:{outlet:null,matches:H,isDataRoute:!0}}):B()},null)}function d_(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function sO(n){let e=K.useContext(fl);return dt(e,d_(n)),e}function aO(n){let e=K.useContext(hd);return dt(e,d_(n)),e}function oO(n){let e=K.useContext(Lr);return dt(e,d_(n)),e}function p_(n){let e=oO(n),t=e.matches[e.matches.length-1];return dt(t.route.id,`${n} can only be used on routes that contain a unique "id"`),t.route.id}function lO(){return p_("useRouteId")}function uO(){var i;let n=K.useContext(f_),e=aO("useRouteError"),t=p_("useRouteError");return n!==void 0?n:(i=e.errors)==null?void 0:i[t]}function cO(){let{router:n}=sO("useNavigate"),e=p_("useNavigate"),t=K.useRef(!1);return nb(()=>{t.current=!0}),K.useCallback(async(a,l={})=>{ji(t.current,tb),t.current&&(typeof a=="number"?n.navigate(a):await n.navigate(a,{fromRouteId:e,...l}))},[n,e])}var v0={};function sb(n,e,t){!e&&!v0[n]&&(v0[n]=!0,ji(!1,t))}K.memo(hO);function hO({routes:n,future:e,state:t}){return rb(n,void 0,t,e)}function zo(n){dt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function fO({basename:n="/",children:e=null,location:t,navigationType:i="POP",navigator:a,static:l=!1}){dt(!_c(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let c=n.replace(/^\/*/,"/"),d=K.useMemo(()=>({basename:c,navigator:a,static:l,future:{}}),[c,a,l]);typeof t=="string"&&(t=hl(t));let{pathname:p="/",search:m="",hash:y="",state:T=null,key:S="default"}=t,I=K.useMemo(()=>{let N=Nr(p,c);return N==null?null:{location:{pathname:N,search:m,hash:y,state:T,key:S},navigationType:i}},[c,p,m,y,T,S,i]);return ji(I!=null,`<Router basename="${c}"> is not able to match the URL "${p}${m}${y}" because it does not start with the basename, so the <Router> won't render anything.`),I==null?null:K.createElement($i.Provider,{value:d},K.createElement(gc.Provider,{children:e,value:I}))}function dO({children:n,location:e}){return JN(bg(n),e)}function bg(n,e=[]){let t=[];return K.Children.forEach(n,(i,a)=>{if(!K.isValidElement(i))return;let l=[...e,a];if(i.type===K.Fragment){t.push.apply(t,bg(i.props.children,l));return}dt(i.type===zo,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),dt(!i.props.index||!i.props.children,"An index route cannot have child routes.");let c={id:i.props.id||l.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(c.children=bg(i.props.children,l)),t.push(c)}),t}var yf="get",vf="application/x-www-form-urlencoded";function fd(n){return n!=null&&typeof n.tagName=="string"}function pO(n){return fd(n)&&n.tagName.toLowerCase()==="button"}function mO(n){return fd(n)&&n.tagName.toLowerCase()==="form"}function gO(n){return fd(n)&&n.tagName.toLowerCase()==="input"}function _O(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function yO(n,e){return n.button===0&&(!e||e==="_self")&&!_O(n)}var af=null;function vO(){if(af===null)try{new FormData(document.createElement("form"),0),af=!1}catch{af=!0}return af}var EO=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Ym(n){return n!=null&&!EO.has(n)?(ji(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${vf}"`),null):n}function TO(n,e){let t,i,a,l,c;if(mO(n)){let d=n.getAttribute("action");i=d?Nr(d,e):null,t=n.getAttribute("method")||yf,a=Ym(n.getAttribute("enctype"))||vf,l=new FormData(n)}else if(pO(n)||gO(n)&&(n.type==="submit"||n.type==="image")){let d=n.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=n.getAttribute("formaction")||d.getAttribute("action");if(i=p?Nr(p,e):null,t=n.getAttribute("formmethod")||d.getAttribute("method")||yf,a=Ym(n.getAttribute("formenctype"))||Ym(d.getAttribute("enctype"))||vf,l=new FormData(d,n),!vO()){let{name:m,type:y,value:T}=n;if(y==="image"){let S=m?`${m}.`:"";l.append(`${S}x`,"0"),l.append(`${S}y`,"0")}else m&&l.append(m,T)}}else{if(fd(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=yf,i=null,a=vf,c=n}return l&&a==="text/plain"&&(c=l,l=void 0),{action:i,method:t.toLowerCase(),encType:a,formData:l,body:c}}function m_(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}async function SO(n,e){if(n.id in e)return e[n.id];try{let t=await import(n.module);return e[n.id]=t,t}catch(t){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function wO(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function bO(n,e,t){let i=await Promise.all(n.map(async a=>{let l=e.routes[a.route.id];if(l){let c=await SO(l,t);return c.links?c.links():[]}return[]}));return IO(i.flat(1).filter(wO).filter(a=>a.rel==="stylesheet"||a.rel==="preload").map(a=>a.rel==="stylesheet"?{...a,rel:"prefetch",as:"style"}:{...a,rel:"prefetch"}))}function E0(n,e,t,i,a,l){let c=(p,m)=>t[m]?p.route.id!==t[m].route.id:!0,d=(p,m)=>{var y;return t[m].pathname!==p.pathname||((y=t[m].route.path)==null?void 0:y.endsWith("*"))&&t[m].params["*"]!==p.params["*"]};return l==="assets"?e.filter((p,m)=>c(p,m)||d(p,m)):l==="data"?e.filter((p,m)=>{var T;let y=i.routes[p.route.id];if(!y||!y.hasLoader)return!1;if(c(p,m)||d(p,m))return!0;if(p.route.shouldRevalidate){let S=p.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:((T=t[0])==null?void 0:T.params)||{},nextUrl:new URL(n,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof S=="boolean")return S}return!0}):[]}function AO(n,e,{includeHydrateFallback:t}={}){return RO(n.map(i=>{let a=e.routes[i.route.id];if(!a)return[];let l=[a.module];return a.clientActionModule&&(l=l.concat(a.clientActionModule)),a.clientLoaderModule&&(l=l.concat(a.clientLoaderModule)),t&&a.hydrateFallbackModule&&(l=l.concat(a.hydrateFallbackModule)),a.imports&&(l=l.concat(a.imports)),l}).flat(1))}function RO(n){return[...new Set(n)]}function CO(n){let e={},t=Object.keys(n).sort();for(let i of t)e[i]=n[i];return e}function IO(n,e){let t=new Set;return new Set(e),n.reduce((i,a)=>{let l=JSON.stringify(CO(a));return t.has(l)||(t.add(l),i.push({key:l,link:a})),i},[])}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var NO=new Set([100,101,204,205]);function OO(n,e){let t=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return t.pathname==="/"?t.pathname="_root.data":e&&Nr(t.pathname,e)==="/"?t.pathname=`${e.replace(/\/$/,"")}/_root.data`:t.pathname=`${t.pathname.replace(/\/$/,"")}.data`,t}function ab(){let n=K.useContext(fl);return m_(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function DO(){let n=K.useContext(hd);return m_(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var g_=K.createContext(void 0);g_.displayName="FrameworkContext";function ob(){let n=K.useContext(g_);return m_(n,"You must render this element inside a <HydratedRouter> element"),n}function kO(n,e){let t=K.useContext(g_),[i,a]=K.useState(!1),[l,c]=K.useState(!1),{onFocus:d,onBlur:p,onMouseEnter:m,onMouseLeave:y,onTouchStart:T}=e,S=K.useRef(null);K.useEffect(()=>{if(n==="render"&&c(!0),n==="viewport"){let H=$=>{$.forEach(W=>{c(W.isIntersecting)})},B=new IntersectionObserver(H,{threshold:.5});return S.current&&B.observe(S.current),()=>{B.disconnect()}}},[n]),K.useEffect(()=>{if(i){let H=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(H)}}},[i]);let I=()=>{a(!0)},N=()=>{a(!1),c(!1)};return t?n!=="intent"?[l,S,{}]:[l,S,{onFocus:ku(d,I),onBlur:ku(p,N),onMouseEnter:ku(m,I),onMouseLeave:ku(y,N),onTouchStart:ku(T,I)}]:[!1,S,{}]}function ku(n,e){return t=>{n&&n(t),t.defaultPrevented||e(t)}}function PO({page:n,...e}){let{router:t}=ab(),i=K.useMemo(()=>Yw(t.routes,n,t.basename),[t.routes,n,t.basename]);return i?K.createElement(xO,{page:n,matches:i,...e}):null}function MO(n){let{manifest:e,routeModules:t}=ob(),[i,a]=K.useState([]);return K.useEffect(()=>{let l=!1;return bO(n,e,t).then(c=>{l||a(c)}),()=>{l=!0}},[n,e,t]),i}function xO({page:n,matches:e,...t}){let i=Va(),{manifest:a,routeModules:l}=ob(),{basename:c}=ab(),{loaderData:d,matches:p}=DO(),m=K.useMemo(()=>E0(n,e,p,a,i,"data"),[n,e,p,a,i]),y=K.useMemo(()=>E0(n,e,p,a,i,"assets"),[n,e,p,a,i]),T=K.useMemo(()=>{if(n===i.pathname+i.search+i.hash)return[];let N=new Set,H=!1;if(e.forEach($=>{var ee;let W=a.routes[$.route.id];!W||!W.hasLoader||(!m.some(ae=>ae.route.id===$.route.id)&&$.route.id in d&&((ee=l[$.route.id])!=null&&ee.shouldRevalidate)||W.hasClientLoader?H=!0:N.add($.route.id))}),N.size===0)return[];let B=OO(n,c);return H&&N.size>0&&B.searchParams.set("_routes",e.filter($=>N.has($.route.id)).map($=>$.route.id).join(",")),[B.pathname+B.search]},[c,d,i,a,m,e,n,l]),S=K.useMemo(()=>AO(y,a),[y,a]),I=MO(y);return K.createElement(K.Fragment,null,T.map(N=>K.createElement("link",{key:N,rel:"prefetch",as:"fetch",href:N,...t})),S.map(N=>K.createElement("link",{key:N,rel:"modulepreload",href:N,...t})),I.map(({key:N,link:H})=>K.createElement("link",{key:N,...H})))}function LO(...n){return e=>{n.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var lb=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{lb&&(window.__reactRouterVersion="7.6.1")}catch{}function VO({basename:n,children:e,window:t}){let i=K.useRef();i.current==null&&(i.current=bN({window:t,v5Compat:!0}));let a=i.current,[l,c]=K.useState({action:a.action,location:a.location}),d=K.useCallback(p=>{K.startTransition(()=>c(p))},[c]);return K.useLayoutEffect(()=>a.listen(d),[a,d]),K.createElement(fO,{basename:n,children:e,location:l.location,navigationType:l.action,navigator:a})}var ub=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,__=K.forwardRef(function({onClick:e,discover:t="render",prefetch:i="none",relative:a,reloadDocument:l,replace:c,state:d,target:p,to:m,preventScrollReset:y,viewTransition:T,...S},I){let{basename:N}=K.useContext($i),H=typeof m=="string"&&ub.test(m),B,$=!1;if(typeof m=="string"&&H&&(B=m,lb))try{let R=new URL(window.location.href),P=m.startsWith("//")?new URL(R.protocol+m):new URL(m),x=Nr(P.pathname,N);P.origin===R.origin&&x!=null?m=x+P.search+P.hash:$=!0}catch{ji(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let W=XN(m,{relative:a}),[ee,ae,he]=kO(i,S),_e=FO(m,{replace:c,state:d,target:p,preventScrollReset:y,relative:a,viewTransition:T});function D(R){e&&e(R),R.defaultPrevented||_e(R)}let A=K.createElement("a",{...S,...he,href:B||W,onClick:$||l?e:D,ref:LO(I,ae),target:p,"data-discover":!H&&t==="render"?"true":void 0});return ee&&!H?K.createElement(K.Fragment,null,A,K.createElement(PO,{page:W})):A});__.displayName="Link";var UO=K.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:i="",end:a=!1,style:l,to:c,viewTransition:d,children:p,...m},y){let T=yc(c,{relative:m.relative}),S=Va(),I=K.useContext(hd),{navigator:N,basename:H}=K.useContext($i),B=I!=null&&KO(T)&&d===!0,$=N.encodeLocation?N.encodeLocation(T).pathname:T.pathname,W=S.pathname,ee=I&&I.navigation&&I.navigation.location?I.navigation.location.pathname:null;t||(W=W.toLowerCase(),ee=ee?ee.toLowerCase():null,$=$.toLowerCase()),ee&&H&&(ee=Nr(ee,H)||ee);const ae=$!=="/"&&$.endsWith("/")?$.length-1:$.length;let he=W===$||!a&&W.startsWith($)&&W.charAt(ae)==="/",_e=ee!=null&&(ee===$||!a&&ee.startsWith($)&&ee.charAt($.length)==="/"),D={isActive:he,isPending:_e,isTransitioning:B},A=he?e:void 0,R;typeof i=="function"?R=i(D):R=[i,he?"active":null,_e?"pending":null,B?"transitioning":null].filter(Boolean).join(" ");let P=typeof l=="function"?l(D):l;return K.createElement(__,{...m,"aria-current":A,className:R,ref:y,style:P,to:c,viewTransition:d},typeof p=="function"?p(D):p)});UO.displayName="NavLink";var BO=K.forwardRef(({discover:n="render",fetcherKey:e,navigate:t,reloadDocument:i,replace:a,state:l,method:c=yf,action:d,onSubmit:p,relative:m,preventScrollReset:y,viewTransition:T,...S},I)=>{let N=qO(),H=GO(d,{relative:m}),B=c.toLowerCase()==="get"?"get":"post",$=typeof d=="string"&&ub.test(d),W=ee=>{if(p&&p(ee),ee.defaultPrevented)return;ee.preventDefault();let ae=ee.nativeEvent.submitter,he=(ae==null?void 0:ae.getAttribute("formmethod"))||c;N(ae||ee.currentTarget,{fetcherKey:e,method:he,navigate:t,replace:a,state:l,relative:m,preventScrollReset:y,viewTransition:T})};return K.createElement("form",{ref:I,method:B,action:H,onSubmit:i?p:W,...S,"data-discover":!$&&n==="render"?"true":void 0})});BO.displayName="Form";function zO(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function cb(n){let e=K.useContext(fl);return dt(e,zO(n)),e}function FO(n,{target:e,replace:t,state:i,preventScrollReset:a,relative:l,viewTransition:c}={}){let d=ib(),p=Va(),m=yc(n,{relative:l});return K.useCallback(y=>{if(yO(y,e)){y.preventDefault();let T=t!==void 0?t:ic(p)===ic(m);d(n,{replace:T,state:i,preventScrollReset:a,relative:l,viewTransition:c})}},[p,d,m,t,i,e,n,a,l,c])}var HO=0,jO=()=>`__${String(++HO)}__`;function qO(){let{router:n}=cb("useSubmit"),{basename:e}=K.useContext($i),t=lO();return K.useCallback(async(i,a={})=>{let{action:l,method:c,encType:d,formData:p,body:m}=TO(i,e);if(a.navigate===!1){let y=a.fetcherKey||jO();await n.fetch(y,t,a.action||l,{preventScrollReset:a.preventScrollReset,formData:p,body:m,formMethod:a.method||c,formEncType:a.encType||d,flushSync:a.flushSync})}else await n.navigate(a.action||l,{preventScrollReset:a.preventScrollReset,formData:p,body:m,formMethod:a.method||c,formEncType:a.encType||d,replace:a.replace,state:a.state,fromRouteId:t,flushSync:a.flushSync,viewTransition:a.viewTransition})},[n,e,t])}function GO(n,{relative:e}={}){let{basename:t}=K.useContext($i),i=K.useContext(Lr);dt(i,"useFormAction must be used inside a RouteContext");let[a]=i.matches.slice(-1),l={...yc(n||".",{relative:e})},c=Va();if(n==null){l.search=c.search;let d=new URLSearchParams(l.search),p=d.getAll("index");if(p.some(y=>y==="")){d.delete("index"),p.filter(T=>T).forEach(T=>d.append("index",T));let y=d.toString();l.search=y?`?${y}`:""}}return(!n||n===".")&&a.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(l.pathname=l.pathname==="/"?t:Rr([t,l.pathname])),ic(l)}function KO(n,e={}){let t=K.useContext(eb);dt(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=cb("useViewTransitionState"),a=yc(n,{relative:e.relative});if(!t.isTransitioning)return!1;let l=Nr(t.currentLocation.pathname,i)||t.currentLocation.pathname,c=Nr(t.nextLocation.pathname,i)||t.nextLocation.pathname;return kf(a.pathname,c)!=null||kf(a.pathname,l)!=null}[...NO];const $O=()=>{};var T0={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hb={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const le=function(n,e){if(!n)throw dl(e)},dl=function(n){return new Error("Firebase Database ("+hb.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fb=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let a=n.charCodeAt(i);a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):(a&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(a=65536+((a&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},YO=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const a=n[t++];if(a<128)e[i++]=String.fromCharCode(a);else if(a>191&&a<224){const l=n[t++];e[i++]=String.fromCharCode((a&31)<<6|l&63)}else if(a>239&&a<365){const l=n[t++],c=n[t++],d=n[t++],p=((a&7)<<18|(l&63)<<12|(c&63)<<6|d&63)-65536;e[i++]=String.fromCharCode(55296+(p>>10)),e[i++]=String.fromCharCode(56320+(p&1023))}else{const l=n[t++],c=n[t++];e[i++]=String.fromCharCode((a&15)<<12|(l&63)<<6|c&63)}}return e.join("")},y_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let a=0;a<n.length;a+=3){const l=n[a],c=a+1<n.length,d=c?n[a+1]:0,p=a+2<n.length,m=p?n[a+2]:0,y=l>>2,T=(l&3)<<4|d>>4;let S=(d&15)<<2|m>>6,I=m&63;p||(I=64,c||(S=64)),i.push(t[y],t[T],t[S],t[I])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(fb(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):YO(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let a=0;a<n.length;){const l=t[n.charAt(a++)],d=a<n.length?t[n.charAt(a)]:0;++a;const m=a<n.length?t[n.charAt(a)]:64;++a;const T=a<n.length?t[n.charAt(a)]:64;if(++a,l==null||d==null||m==null||T==null)throw new QO;const S=l<<2|d>>4;if(i.push(S),m!==64){const I=d<<4&240|m>>2;if(i.push(I),T!==64){const N=m<<6&192|T;i.push(N)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class QO extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const db=function(n){const e=fb(n);return y_.encodeByteArray(e,!0)},Pf=function(n){return db(n).replace(/\./g,"")},Mf=function(n){try{return y_.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WO(n){return pb(void 0,n)}function pb(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!XO(t)||(n[t]=pb(n[t],e[t]));return n}function XO(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZO(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JO=()=>ZO().__FIREBASE_DEFAULTS__,eD=()=>{if(typeof process>"u"||typeof T0>"u")return;const n=T0.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},tD=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Mf(n[1]);return e&&JSON.parse(e)},dd=()=>{try{return $O()||JO()||eD()||tD()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},mb=n=>{var e,t;return(t=(e=dd())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},v_=n=>{const e=mb(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},gb=()=>{var n;return(n=dd())===null||n===void 0?void 0:n.config},_b=n=>{var e;return(e=dd())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vr(n){return n.endsWith(".cloudworkstations.dev")}async function pd(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T_(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",a=n.iat||0,l=n.sub||n.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:a,exp:a+3600,auth_time:a,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Pf(JSON.stringify(t)),Pf(JSON.stringify(c)),""].join(".")}const Hu={};function nD(){const n={prod:[],emulator:[]};for(const e of Object.keys(Hu))Hu[e]?n.emulator.push(e):n.prod.push(e);return n}function iD(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let S0=!1;function md(n,e){if(typeof window>"u"||typeof document>"u"||!Vr(window.location.host)||Hu[n]===e||Hu[n]||S0)return;Hu[n]=e;function t(S){return`__firebase__banner__${S}`}const i="__firebase__banner",l=nD().prod.length>0;function c(){const S=document.getElementById(i);S&&S.remove()}function d(S){S.style.display="flex",S.style.background="#7faaf0",S.style.position="fixed",S.style.bottom="5px",S.style.left="5px",S.style.padding=".5em",S.style.borderRadius="5px",S.style.alignItems="center"}function p(S,I){S.setAttribute("width","24"),S.setAttribute("id",I),S.setAttribute("height","24"),S.setAttribute("viewBox","0 0 24 24"),S.setAttribute("fill","none"),S.style.marginLeft="-6px"}function m(){const S=document.createElement("span");return S.style.cursor="pointer",S.style.marginLeft="16px",S.style.fontSize="24px",S.innerHTML=" &times;",S.onclick=()=>{S0=!0,c()},S}function y(S,I){S.setAttribute("id",I),S.innerText="Learn more",S.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",S.setAttribute("target","__blank"),S.style.paddingLeft="5px",S.style.textDecoration="underline"}function T(){const S=iD(i),I=t("text"),N=document.getElementById(I)||document.createElement("span"),H=t("learnmore"),B=document.getElementById(H)||document.createElement("a"),$=t("preprendIcon"),W=document.getElementById($)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(S.created){const ee=S.element;d(ee),y(B,H);const ae=m();p(W,$),ee.append(W,N,B,ae),document.body.appendChild(ee)}l?(N.innerText="Preview backend disconnected.",W.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(W.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,N.innerText="Preview backend running in this workspace."),N.setAttribute("id",I)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",T):T()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _n(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function S_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_n())}function rD(){var n;const e=(n=dd())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function sD(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function w_(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function yb(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function aD(){const n=_n();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function oD(){return hb.NODE_ADMIN===!0}function lD(){return!rD()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function b_(){try{return typeof indexedDB=="object"}catch{return!1}}function A_(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(i);a.onsuccess=()=>{a.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},a.onupgradeneeded=()=>{t=!1},a.onerror=()=>{var l;e(((l=a.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}function vb(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uD="FirebaseError";class oi extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=uD,Object.setPrototypeOf(this,oi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ua.prototype.create)}}class Ua{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},a=`${this.service}/${e}`,l=this.errors[e],c=l?cD(l,i):"Error",d=`${this.serviceName}: ${c} (${a}).`;return new oi(a,d,i)}}function cD(n,e){return n.replace(hD,(t,i)=>{const a=e[i];return a!=null?String(a):`<${i}?>`})}const hD=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rc(n){return JSON.parse(n)}function rn(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eb=function(n){let e={},t={},i={},a="";try{const l=n.split(".");e=rc(Mf(l[0])||""),t=rc(Mf(l[1])||""),a=l[2],i=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:i,signature:a}},fD=function(n){const e=Eb(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},dD=function(n){const e=Eb(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ur(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function el(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Ag(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function xf(n,e,t){const i={};for(const a in n)Object.prototype.hasOwnProperty.call(n,a)&&(i[a]=e.call(t,n[a],a,n));return i}function Or(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const a of t){if(!i.includes(a))return!1;const l=n[a],c=e[a];if(w0(l)&&w0(c)){if(!Or(l,c))return!1}else if(l!==c)return!1}for(const a of i)if(!t.includes(a))return!1;return!0}function w0(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ba(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(a=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(a))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pD{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const i=this.W_;if(typeof e=="string")for(let T=0;T<16;T++)i[T]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let T=0;T<16;T++)i[T]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let T=16;T<80;T++){const S=i[T-3]^i[T-8]^i[T-14]^i[T-16];i[T]=(S<<1|S>>>31)&4294967295}let a=this.chain_[0],l=this.chain_[1],c=this.chain_[2],d=this.chain_[3],p=this.chain_[4],m,y;for(let T=0;T<80;T++){T<40?T<20?(m=d^l&(c^d),y=1518500249):(m=l^c^d,y=1859775393):T<60?(m=l&c|d&(l|c),y=2400959708):(m=l^c^d,y=3395469782);const S=(a<<5|a>>>27)+m+p+y+i[T]&4294967295;p=d,d=c,c=(l<<30|l>>>2)&4294967295,l=a,a=S}this.chain_[0]=this.chain_[0]+a&4294967295,this.chain_[1]=this.chain_[1]+l&4294967295,this.chain_[2]=this.chain_[2]+c&4294967295,this.chain_[3]=this.chain_[3]+d&4294967295,this.chain_[4]=this.chain_[4]+p&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const i=t-this.blockSize;let a=0;const l=this.buf_;let c=this.inbuf_;for(;a<t;){if(c===0)for(;a<=i;)this.compress_(e,a),a+=this.blockSize;if(typeof e=="string"){for(;a<t;)if(l[c]=e.charCodeAt(a),++c,++a,c===this.blockSize){this.compress_(l),c=0;break}}else for(;a<t;)if(l[c]=e[a],++c,++a,c===this.blockSize){this.compress_(l),c=0;break}}this.inbuf_=c,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let a=this.blockSize-1;a>=56;a--)this.buf_[a]=t&255,t/=256;this.compress_(this.buf_);let i=0;for(let a=0;a<5;a++)for(let l=24;l>=0;l-=8)e[i]=this.chain_[a]>>l&255,++i;return e}}function mD(n,e){const t=new gD(n,e);return t.subscribe.bind(t)}class gD{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let a;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");_D(e,["next","error","complete"])?a=e:a={next:e,error:t,complete:i},a.next===void 0&&(a.next=Qm),a.error===void 0&&(a.error=Qm),a.complete===void 0&&(a.complete=Qm);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function _D(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Qm(){}function yD(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vD=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let a=n.charCodeAt(i);if(a>=55296&&a<=56319){const l=a-55296;i++,le(i<n.length,"Surrogate pair missing trail surrogate.");const c=n.charCodeAt(i)-56320;a=65536+(l<<10)+c}a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):a<65536?(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},gd=function(n){let e=0;for(let t=0;t<n.length;t++){const i=n.charCodeAt(t);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,t++):e+=3}return e};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ED=1e3,TD=2,SD=4*60*60*1e3,wD=.5;function b0(n,e=ED,t=TD){const i=e*Math.pow(t,n),a=Math.round(wD*i*(Math.random()-.5)*2);return Math.min(SD,i+a)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(n){return n&&n._delegate?n._delegate:n}class jn{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ta="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bD{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new E_;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:t});a&&i.resolve(a)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),a=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(l){if(a)return null;throw l}else{if(a)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(RD(e))try{this.getOrInitializeService({instanceIdentifier:Ta})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:a});i.resolve(l)}catch{}}}}clearInstance(e=Ta){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ta){return this.instances.has(e)}getOptions(e=Ta){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[l,c]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(l);i===d&&c.resolve(a)}return a}onInit(e,t){var i;const a=this.normalizeInstanceIdentifier(t),l=(i=this.onInitCallbacks.get(a))!==null&&i!==void 0?i:new Set;l.add(e),this.onInitCallbacks.set(a,l);const c=this.instances.get(a);return c&&e(c,a),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const a of i)try{a(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:AD(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Ta){return this.component?this.component.multipleInstances?e:Ta:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function AD(n){return n===Ta?void 0:n}function RD(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CD{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new bD(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Me;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Me||(Me={}));const ID={debug:Me.DEBUG,verbose:Me.VERBOSE,info:Me.INFO,warn:Me.WARN,error:Me.ERROR,silent:Me.SILENT},ND=Me.INFO,OD={[Me.DEBUG]:"log",[Me.VERBOSE]:"log",[Me.INFO]:"info",[Me.WARN]:"warn",[Me.ERROR]:"error"},DD=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),a=OD[e];if(a)console[a](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class vc{constructor(e){this.name=e,this._logLevel=ND,this._logHandler=DD,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Me))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ID[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Me.DEBUG,...e),this._logHandler(this,Me.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Me.VERBOSE,...e),this._logHandler(this,Me.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Me.INFO,...e),this._logHandler(this,Me.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Me.WARN,...e),this._logHandler(this,Me.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Me.ERROR,...e),this._logHandler(this,Me.ERROR,...e)}}const kD=(n,e)=>e.some(t=>n instanceof t);let A0,R0;function PD(){return A0||(A0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function MD(){return R0||(R0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Tb=new WeakMap,Rg=new WeakMap,Sb=new WeakMap,Wm=new WeakMap,R_=new WeakMap;function xD(n){const e=new Promise((t,i)=>{const a=()=>{n.removeEventListener("success",l),n.removeEventListener("error",c)},l=()=>{t(Ss(n.result)),a()},c=()=>{i(n.error),a()};n.addEventListener("success",l),n.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&Tb.set(t,n)}).catch(()=>{}),R_.set(e,n),e}function LD(n){if(Rg.has(n))return;const e=new Promise((t,i)=>{const a=()=>{n.removeEventListener("complete",l),n.removeEventListener("error",c),n.removeEventListener("abort",c)},l=()=>{t(),a()},c=()=>{i(n.error||new DOMException("AbortError","AbortError")),a()};n.addEventListener("complete",l),n.addEventListener("error",c),n.addEventListener("abort",c)});Rg.set(n,e)}let Cg={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Rg.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Sb.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ss(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function VD(n){Cg=n(Cg)}function UD(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Xm(this),e,...t);return Sb.set(i,e.sort?e.sort():[e]),Ss(i)}:MD().includes(n)?function(...e){return n.apply(Xm(this),e),Ss(Tb.get(this))}:function(...e){return Ss(n.apply(Xm(this),e))}}function BD(n){return typeof n=="function"?UD(n):(n instanceof IDBTransaction&&LD(n),kD(n,PD())?new Proxy(n,Cg):n)}function Ss(n){if(n instanceof IDBRequest)return xD(n);if(Wm.has(n))return Wm.get(n);const e=BD(n);return e!==n&&(Wm.set(n,e),R_.set(e,n)),e}const Xm=n=>R_.get(n);function wb(n,e,{blocked:t,upgrade:i,blocking:a,terminated:l}={}){const c=indexedDB.open(n,e),d=Ss(c);return i&&c.addEventListener("upgradeneeded",p=>{i(Ss(c.result),p.oldVersion,p.newVersion,Ss(c.transaction),p)}),t&&c.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),d.then(p=>{l&&p.addEventListener("close",()=>l()),a&&p.addEventListener("versionchange",m=>a(m.oldVersion,m.newVersion,m))}).catch(()=>{}),d}const zD=["get","getKey","getAll","getAllKeys","count"],FD=["put","add","delete","clear"],Zm=new Map;function C0(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Zm.get(e))return Zm.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,a=FD.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(a||zD.includes(t)))return;const l=async function(c,...d){const p=this.transaction(c,a?"readwrite":"readonly");let m=p.store;return i&&(m=m.index(d.shift())),(await Promise.all([m[t](...d),a&&p.done]))[0]};return Zm.set(e,l),l}VD(n=>({...n,get:(e,t,i)=>C0(e,t)||n.get(e,t,i),has:(e,t)=>!!C0(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HD{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(jD(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function jD(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ig="@firebase/app",I0="0.13.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dr=new vc("@firebase/app"),qD="@firebase/app-compat",GD="@firebase/analytics-compat",KD="@firebase/analytics",$D="@firebase/app-check-compat",YD="@firebase/app-check",QD="@firebase/auth",WD="@firebase/auth-compat",XD="@firebase/database",ZD="@firebase/data-connect",JD="@firebase/database-compat",e2="@firebase/functions",t2="@firebase/functions-compat",n2="@firebase/installations",i2="@firebase/installations-compat",r2="@firebase/messaging",s2="@firebase/messaging-compat",a2="@firebase/performance",o2="@firebase/performance-compat",l2="@firebase/remote-config",u2="@firebase/remote-config-compat",c2="@firebase/storage",h2="@firebase/storage-compat",f2="@firebase/firestore",d2="@firebase/ai",p2="@firebase/firestore-compat",m2="firebase",g2="11.8.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ng="[DEFAULT]",_2={[Ig]:"fire-core",[qD]:"fire-core-compat",[KD]:"fire-analytics",[GD]:"fire-analytics-compat",[YD]:"fire-app-check",[$D]:"fire-app-check-compat",[QD]:"fire-auth",[WD]:"fire-auth-compat",[XD]:"fire-rtdb",[ZD]:"fire-data-connect",[JD]:"fire-rtdb-compat",[e2]:"fire-fn",[t2]:"fire-fn-compat",[n2]:"fire-iid",[i2]:"fire-iid-compat",[r2]:"fire-fcm",[s2]:"fire-fcm-compat",[a2]:"fire-perf",[o2]:"fire-perf-compat",[l2]:"fire-rc",[u2]:"fire-rc-compat",[c2]:"fire-gcs",[h2]:"fire-gcs-compat",[f2]:"fire-fst",[p2]:"fire-fst-compat",[d2]:"fire-vertex","fire-js":"fire-js",[m2]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lf=new Map,y2=new Map,Og=new Map;function N0(n,e){try{n.container.addComponent(e)}catch(t){Dr.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function si(n){const e=n.name;if(Og.has(e))return Dr.debug(`There were multiple attempts to register component ${e}.`),!1;Og.set(e,n);for(const t of Lf.values())N0(t,n);for(const t of y2.values())N0(t,n);return!0}function Br(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Cn(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v2={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ws=new Ua("app","Firebase",v2);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E2{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new jn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ws.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vs=g2;function bb(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Ng,automaticDataCollectionEnabled:!0},e),a=i.name;if(typeof a!="string"||!a)throw ws.create("bad-app-name",{appName:String(a)});if(t||(t=gb()),!t)throw ws.create("no-options");const l=Lf.get(a);if(l){if(Or(t,l.options)&&Or(i,l.config))return l;throw ws.create("duplicate-app",{appName:a})}const c=new CD(a);for(const p of Og.values())c.addComponent(p);const d=new E2(t,i,c);return Lf.set(a,d),d}function Ec(n=Ng){const e=Lf.get(n);if(!e&&n===Ng&&gb())return bb();if(!e)throw ws.create("no-app",{appName:n});return e}function gn(n,e,t){var i;let a=(i=_2[n])!==null&&i!==void 0?i:n;t&&(a+=`-${t}`);const l=a.match(/\s|\//),c=e.match(/\s|\//);if(l||c){const d=[`Unable to register library "${a}" with version "${e}":`];l&&d.push(`library name "${a}" contains illegal characters (whitespace or "/")`),l&&c&&d.push("and"),c&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Dr.warn(d.join(" "));return}si(new jn(`${a}-version`,()=>({library:a,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T2="firebase-heartbeat-database",S2=1,sc="firebase-heartbeat-store";let Jm=null;function Ab(){return Jm||(Jm=wb(T2,S2,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(sc)}catch(t){console.warn(t)}}}}).catch(n=>{throw ws.create("idb-open",{originalErrorMessage:n.message})})),Jm}async function w2(n){try{const t=(await Ab()).transaction(sc),i=await t.objectStore(sc).get(Rb(n));return await t.done,i}catch(e){if(e instanceof oi)Dr.warn(e.message);else{const t=ws.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Dr.warn(t.message)}}}async function O0(n,e){try{const i=(await Ab()).transaction(sc,"readwrite");await i.objectStore(sc).put(e,Rb(n)),await i.done}catch(t){if(t instanceof oi)Dr.warn(t.message);else{const i=ws.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Dr.warn(i.message)}}}function Rb(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b2=1024,A2=30;class R2{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new I2(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=D0();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(c=>c.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:a}),this._heartbeatsCache.heartbeats.length>A2){const c=N2(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(c,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){Dr.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=D0(),{heartbeatsToSend:i,unsentEntries:a}=C2(this._heartbeatsCache.heartbeats),l=Pf(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return Dr.warn(t),""}}}function D0(){return new Date().toISOString().substring(0,10)}function C2(n,e=b2){const t=[];let i=n.slice();for(const a of n){const l=t.find(c=>c.agent===a.agent);if(l){if(l.dates.push(a.date),k0(t)>e){l.dates.pop();break}}else if(t.push({agent:a.agent,dates:[a.date]}),k0(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class I2{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return b_()?A_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await w2(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const a=await this.read();return O0(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:a.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const a=await this.read();return O0(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...e.heartbeats]})}else return}}function k0(n){return Pf(JSON.stringify({version:2,heartbeats:n})).length}function N2(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let i=1;i<n.length;i++)n[i].date<t&&(t=n[i].date,e=i);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O2(n){si(new jn("platform-logger",e=>new HD(e),"PRIVATE")),si(new jn("heartbeat",e=>new R2(e),"PRIVATE")),gn(Ig,I0,n),gn(Ig,I0,"esm2017"),gn("fire-js","")}O2("");var P0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var bs,Cb;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(D,A){function R(){}R.prototype=A.prototype,D.D=A.prototype,D.prototype=new R,D.prototype.constructor=D,D.C=function(P,x,V){for(var O=Array(arguments.length-2),Wt=2;Wt<arguments.length;Wt++)O[Wt-2]=arguments[Wt];return A.prototype[x].apply(P,O)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,t),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(D,A,R){R||(R=0);var P=Array(16);if(typeof A=="string")for(var x=0;16>x;++x)P[x]=A.charCodeAt(R++)|A.charCodeAt(R++)<<8|A.charCodeAt(R++)<<16|A.charCodeAt(R++)<<24;else for(x=0;16>x;++x)P[x]=A[R++]|A[R++]<<8|A[R++]<<16|A[R++]<<24;A=D.g[0],R=D.g[1],x=D.g[2];var V=D.g[3],O=A+(V^R&(x^V))+P[0]+3614090360&4294967295;A=R+(O<<7&4294967295|O>>>25),O=V+(x^A&(R^x))+P[1]+3905402710&4294967295,V=A+(O<<12&4294967295|O>>>20),O=x+(R^V&(A^R))+P[2]+606105819&4294967295,x=V+(O<<17&4294967295|O>>>15),O=R+(A^x&(V^A))+P[3]+3250441966&4294967295,R=x+(O<<22&4294967295|O>>>10),O=A+(V^R&(x^V))+P[4]+4118548399&4294967295,A=R+(O<<7&4294967295|O>>>25),O=V+(x^A&(R^x))+P[5]+1200080426&4294967295,V=A+(O<<12&4294967295|O>>>20),O=x+(R^V&(A^R))+P[6]+2821735955&4294967295,x=V+(O<<17&4294967295|O>>>15),O=R+(A^x&(V^A))+P[7]+4249261313&4294967295,R=x+(O<<22&4294967295|O>>>10),O=A+(V^R&(x^V))+P[8]+1770035416&4294967295,A=R+(O<<7&4294967295|O>>>25),O=V+(x^A&(R^x))+P[9]+2336552879&4294967295,V=A+(O<<12&4294967295|O>>>20),O=x+(R^V&(A^R))+P[10]+4294925233&4294967295,x=V+(O<<17&4294967295|O>>>15),O=R+(A^x&(V^A))+P[11]+2304563134&4294967295,R=x+(O<<22&4294967295|O>>>10),O=A+(V^R&(x^V))+P[12]+1804603682&4294967295,A=R+(O<<7&4294967295|O>>>25),O=V+(x^A&(R^x))+P[13]+4254626195&4294967295,V=A+(O<<12&4294967295|O>>>20),O=x+(R^V&(A^R))+P[14]+2792965006&4294967295,x=V+(O<<17&4294967295|O>>>15),O=R+(A^x&(V^A))+P[15]+1236535329&4294967295,R=x+(O<<22&4294967295|O>>>10),O=A+(x^V&(R^x))+P[1]+4129170786&4294967295,A=R+(O<<5&4294967295|O>>>27),O=V+(R^x&(A^R))+P[6]+3225465664&4294967295,V=A+(O<<9&4294967295|O>>>23),O=x+(A^R&(V^A))+P[11]+643717713&4294967295,x=V+(O<<14&4294967295|O>>>18),O=R+(V^A&(x^V))+P[0]+3921069994&4294967295,R=x+(O<<20&4294967295|O>>>12),O=A+(x^V&(R^x))+P[5]+3593408605&4294967295,A=R+(O<<5&4294967295|O>>>27),O=V+(R^x&(A^R))+P[10]+38016083&4294967295,V=A+(O<<9&4294967295|O>>>23),O=x+(A^R&(V^A))+P[15]+3634488961&4294967295,x=V+(O<<14&4294967295|O>>>18),O=R+(V^A&(x^V))+P[4]+3889429448&4294967295,R=x+(O<<20&4294967295|O>>>12),O=A+(x^V&(R^x))+P[9]+568446438&4294967295,A=R+(O<<5&4294967295|O>>>27),O=V+(R^x&(A^R))+P[14]+3275163606&4294967295,V=A+(O<<9&4294967295|O>>>23),O=x+(A^R&(V^A))+P[3]+4107603335&4294967295,x=V+(O<<14&4294967295|O>>>18),O=R+(V^A&(x^V))+P[8]+1163531501&4294967295,R=x+(O<<20&4294967295|O>>>12),O=A+(x^V&(R^x))+P[13]+2850285829&4294967295,A=R+(O<<5&4294967295|O>>>27),O=V+(R^x&(A^R))+P[2]+4243563512&4294967295,V=A+(O<<9&4294967295|O>>>23),O=x+(A^R&(V^A))+P[7]+1735328473&4294967295,x=V+(O<<14&4294967295|O>>>18),O=R+(V^A&(x^V))+P[12]+2368359562&4294967295,R=x+(O<<20&4294967295|O>>>12),O=A+(R^x^V)+P[5]+4294588738&4294967295,A=R+(O<<4&4294967295|O>>>28),O=V+(A^R^x)+P[8]+2272392833&4294967295,V=A+(O<<11&4294967295|O>>>21),O=x+(V^A^R)+P[11]+1839030562&4294967295,x=V+(O<<16&4294967295|O>>>16),O=R+(x^V^A)+P[14]+4259657740&4294967295,R=x+(O<<23&4294967295|O>>>9),O=A+(R^x^V)+P[1]+2763975236&4294967295,A=R+(O<<4&4294967295|O>>>28),O=V+(A^R^x)+P[4]+1272893353&4294967295,V=A+(O<<11&4294967295|O>>>21),O=x+(V^A^R)+P[7]+4139469664&4294967295,x=V+(O<<16&4294967295|O>>>16),O=R+(x^V^A)+P[10]+3200236656&4294967295,R=x+(O<<23&4294967295|O>>>9),O=A+(R^x^V)+P[13]+681279174&4294967295,A=R+(O<<4&4294967295|O>>>28),O=V+(A^R^x)+P[0]+3936430074&4294967295,V=A+(O<<11&4294967295|O>>>21),O=x+(V^A^R)+P[3]+3572445317&4294967295,x=V+(O<<16&4294967295|O>>>16),O=R+(x^V^A)+P[6]+76029189&4294967295,R=x+(O<<23&4294967295|O>>>9),O=A+(R^x^V)+P[9]+3654602809&4294967295,A=R+(O<<4&4294967295|O>>>28),O=V+(A^R^x)+P[12]+3873151461&4294967295,V=A+(O<<11&4294967295|O>>>21),O=x+(V^A^R)+P[15]+530742520&4294967295,x=V+(O<<16&4294967295|O>>>16),O=R+(x^V^A)+P[2]+3299628645&4294967295,R=x+(O<<23&4294967295|O>>>9),O=A+(x^(R|~V))+P[0]+4096336452&4294967295,A=R+(O<<6&4294967295|O>>>26),O=V+(R^(A|~x))+P[7]+1126891415&4294967295,V=A+(O<<10&4294967295|O>>>22),O=x+(A^(V|~R))+P[14]+2878612391&4294967295,x=V+(O<<15&4294967295|O>>>17),O=R+(V^(x|~A))+P[5]+4237533241&4294967295,R=x+(O<<21&4294967295|O>>>11),O=A+(x^(R|~V))+P[12]+1700485571&4294967295,A=R+(O<<6&4294967295|O>>>26),O=V+(R^(A|~x))+P[3]+2399980690&4294967295,V=A+(O<<10&4294967295|O>>>22),O=x+(A^(V|~R))+P[10]+4293915773&4294967295,x=V+(O<<15&4294967295|O>>>17),O=R+(V^(x|~A))+P[1]+2240044497&4294967295,R=x+(O<<21&4294967295|O>>>11),O=A+(x^(R|~V))+P[8]+1873313359&4294967295,A=R+(O<<6&4294967295|O>>>26),O=V+(R^(A|~x))+P[15]+4264355552&4294967295,V=A+(O<<10&4294967295|O>>>22),O=x+(A^(V|~R))+P[6]+2734768916&4294967295,x=V+(O<<15&4294967295|O>>>17),O=R+(V^(x|~A))+P[13]+1309151649&4294967295,R=x+(O<<21&4294967295|O>>>11),O=A+(x^(R|~V))+P[4]+4149444226&4294967295,A=R+(O<<6&4294967295|O>>>26),O=V+(R^(A|~x))+P[11]+3174756917&4294967295,V=A+(O<<10&4294967295|O>>>22),O=x+(A^(V|~R))+P[2]+718787259&4294967295,x=V+(O<<15&4294967295|O>>>17),O=R+(V^(x|~A))+P[9]+3951481745&4294967295,D.g[0]=D.g[0]+A&4294967295,D.g[1]=D.g[1]+(x+(O<<21&4294967295|O>>>11))&4294967295,D.g[2]=D.g[2]+x&4294967295,D.g[3]=D.g[3]+V&4294967295}i.prototype.u=function(D,A){A===void 0&&(A=D.length);for(var R=A-this.blockSize,P=this.B,x=this.h,V=0;V<A;){if(x==0)for(;V<=R;)a(this,D,V),V+=this.blockSize;if(typeof D=="string"){for(;V<A;)if(P[x++]=D.charCodeAt(V++),x==this.blockSize){a(this,P),x=0;break}}else for(;V<A;)if(P[x++]=D[V++],x==this.blockSize){a(this,P),x=0;break}}this.h=x,this.o+=A},i.prototype.v=function(){var D=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);D[0]=128;for(var A=1;A<D.length-8;++A)D[A]=0;var R=8*this.o;for(A=D.length-8;A<D.length;++A)D[A]=R&255,R/=256;for(this.u(D),D=Array(16),A=R=0;4>A;++A)for(var P=0;32>P;P+=8)D[R++]=this.g[A]>>>P&255;return D};function l(D,A){var R=d;return Object.prototype.hasOwnProperty.call(R,D)?R[D]:R[D]=A(D)}function c(D,A){this.h=A;for(var R=[],P=!0,x=D.length-1;0<=x;x--){var V=D[x]|0;P&&V==A||(R[x]=V,P=!1)}this.g=R}var d={};function p(D){return-128<=D&&128>D?l(D,function(A){return new c([A|0],0>A?-1:0)}):new c([D|0],0>D?-1:0)}function m(D){if(isNaN(D)||!isFinite(D))return T;if(0>D)return B(m(-D));for(var A=[],R=1,P=0;D>=R;P++)A[P]=D/R|0,R*=4294967296;return new c(A,0)}function y(D,A){if(D.length==0)throw Error("number format error: empty string");if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(D.charAt(0)=="-")return B(y(D.substring(1),A));if(0<=D.indexOf("-"))throw Error('number format error: interior "-" character');for(var R=m(Math.pow(A,8)),P=T,x=0;x<D.length;x+=8){var V=Math.min(8,D.length-x),O=parseInt(D.substring(x,x+V),A);8>V?(V=m(Math.pow(A,V)),P=P.j(V).add(m(O))):(P=P.j(R),P=P.add(m(O)))}return P}var T=p(0),S=p(1),I=p(16777216);n=c.prototype,n.m=function(){if(H(this))return-B(this).m();for(var D=0,A=1,R=0;R<this.g.length;R++){var P=this.i(R);D+=(0<=P?P:4294967296+P)*A,A*=4294967296}return D},n.toString=function(D){if(D=D||10,2>D||36<D)throw Error("radix out of range: "+D);if(N(this))return"0";if(H(this))return"-"+B(this).toString(D);for(var A=m(Math.pow(D,6)),R=this,P="";;){var x=ae(R,A).g;R=$(R,x.j(A));var V=((0<R.g.length?R.g[0]:R.h)>>>0).toString(D);if(R=x,N(R))return V+P;for(;6>V.length;)V="0"+V;P=V+P}},n.i=function(D){return 0>D?0:D<this.g.length?this.g[D]:this.h};function N(D){if(D.h!=0)return!1;for(var A=0;A<D.g.length;A++)if(D.g[A]!=0)return!1;return!0}function H(D){return D.h==-1}n.l=function(D){return D=$(this,D),H(D)?-1:N(D)?0:1};function B(D){for(var A=D.g.length,R=[],P=0;P<A;P++)R[P]=~D.g[P];return new c(R,~D.h).add(S)}n.abs=function(){return H(this)?B(this):this},n.add=function(D){for(var A=Math.max(this.g.length,D.g.length),R=[],P=0,x=0;x<=A;x++){var V=P+(this.i(x)&65535)+(D.i(x)&65535),O=(V>>>16)+(this.i(x)>>>16)+(D.i(x)>>>16);P=O>>>16,V&=65535,O&=65535,R[x]=O<<16|V}return new c(R,R[R.length-1]&-2147483648?-1:0)};function $(D,A){return D.add(B(A))}n.j=function(D){if(N(this)||N(D))return T;if(H(this))return H(D)?B(this).j(B(D)):B(B(this).j(D));if(H(D))return B(this.j(B(D)));if(0>this.l(I)&&0>D.l(I))return m(this.m()*D.m());for(var A=this.g.length+D.g.length,R=[],P=0;P<2*A;P++)R[P]=0;for(P=0;P<this.g.length;P++)for(var x=0;x<D.g.length;x++){var V=this.i(P)>>>16,O=this.i(P)&65535,Wt=D.i(x)>>>16,pt=D.i(x)&65535;R[2*P+2*x]+=O*pt,W(R,2*P+2*x),R[2*P+2*x+1]+=V*pt,W(R,2*P+2*x+1),R[2*P+2*x+1]+=O*Wt,W(R,2*P+2*x+1),R[2*P+2*x+2]+=V*Wt,W(R,2*P+2*x+2)}for(P=0;P<A;P++)R[P]=R[2*P+1]<<16|R[2*P];for(P=A;P<2*A;P++)R[P]=0;return new c(R,0)};function W(D,A){for(;(D[A]&65535)!=D[A];)D[A+1]+=D[A]>>>16,D[A]&=65535,A++}function ee(D,A){this.g=D,this.h=A}function ae(D,A){if(N(A))throw Error("division by zero");if(N(D))return new ee(T,T);if(H(D))return A=ae(B(D),A),new ee(B(A.g),B(A.h));if(H(A))return A=ae(D,B(A)),new ee(B(A.g),A.h);if(30<D.g.length){if(H(D)||H(A))throw Error("slowDivide_ only works with positive integers.");for(var R=S,P=A;0>=P.l(D);)R=he(R),P=he(P);var x=_e(R,1),V=_e(P,1);for(P=_e(P,2),R=_e(R,2);!N(P);){var O=V.add(P);0>=O.l(D)&&(x=x.add(R),V=O),P=_e(P,1),R=_e(R,1)}return A=$(D,x.j(A)),new ee(x,A)}for(x=T;0<=D.l(A);){for(R=Math.max(1,Math.floor(D.m()/A.m())),P=Math.ceil(Math.log(R)/Math.LN2),P=48>=P?1:Math.pow(2,P-48),V=m(R),O=V.j(A);H(O)||0<O.l(D);)R-=P,V=m(R),O=V.j(A);N(V)&&(V=S),x=x.add(V),D=$(D,O)}return new ee(x,D)}n.A=function(D){return ae(this,D).h},n.and=function(D){for(var A=Math.max(this.g.length,D.g.length),R=[],P=0;P<A;P++)R[P]=this.i(P)&D.i(P);return new c(R,this.h&D.h)},n.or=function(D){for(var A=Math.max(this.g.length,D.g.length),R=[],P=0;P<A;P++)R[P]=this.i(P)|D.i(P);return new c(R,this.h|D.h)},n.xor=function(D){for(var A=Math.max(this.g.length,D.g.length),R=[],P=0;P<A;P++)R[P]=this.i(P)^D.i(P);return new c(R,this.h^D.h)};function he(D){for(var A=D.g.length+1,R=[],P=0;P<A;P++)R[P]=D.i(P)<<1|D.i(P-1)>>>31;return new c(R,D.h)}function _e(D,A){var R=A>>5;A%=32;for(var P=D.g.length-R,x=[],V=0;V<P;V++)x[V]=0<A?D.i(V+R)>>>A|D.i(V+R+1)<<32-A:D.i(V+R);return new c(x,D.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,Cb=i,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=m,c.fromString=y,bs=c}).apply(typeof P0<"u"?P0:typeof self<"u"?self:typeof window<"u"?window:{});var of=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ib,Uu,Nb,Ef,Dg,Ob,Db,kb;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(h,_,v){return h==Array.prototype||h==Object.prototype||(h[_]=v.value),h};function t(h){h=[typeof globalThis=="object"&&globalThis,h,typeof window=="object"&&window,typeof self=="object"&&self,typeof of=="object"&&of];for(var _=0;_<h.length;++_){var v=h[_];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var i=t(this);function a(h,_){if(_)e:{var v=i;h=h.split(".");for(var b=0;b<h.length-1;b++){var U=h[b];if(!(U in v))break e;v=v[U]}h=h[h.length-1],b=v[h],_=_(b),_!=b&&_!=null&&e(v,h,{configurable:!0,writable:!0,value:_})}}function l(h,_){h instanceof String&&(h+="");var v=0,b=!1,U={next:function(){if(!b&&v<h.length){var G=v++;return{value:_(G,h[G]),done:!1}}return b=!0,{done:!0,value:void 0}}};return U[Symbol.iterator]=function(){return U},U}a("Array.prototype.values",function(h){return h||function(){return l(this,function(_,v){return v})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},d=this||self;function p(h){var _=typeof h;return _=_!="object"?_:h?Array.isArray(h)?"array":_:"null",_=="array"||_=="object"&&typeof h.length=="number"}function m(h){var _=typeof h;return _=="object"&&h!=null||_=="function"}function y(h,_,v){return h.call.apply(h.bind,arguments)}function T(h,_,v){if(!h)throw Error();if(2<arguments.length){var b=Array.prototype.slice.call(arguments,2);return function(){var U=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(U,b),h.apply(_,U)}}return function(){return h.apply(_,arguments)}}function S(h,_,v){return S=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?y:T,S.apply(null,arguments)}function I(h,_){var v=Array.prototype.slice.call(arguments,1);return function(){var b=v.slice();return b.push.apply(b,arguments),h.apply(this,b)}}function N(h,_){function v(){}v.prototype=_.prototype,h.aa=_.prototype,h.prototype=new v,h.prototype.constructor=h,h.Qb=function(b,U,G){for(var re=Array(arguments.length-2),Ve=2;Ve<arguments.length;Ve++)re[Ve-2]=arguments[Ve];return _.prototype[U].apply(b,re)}}function H(h){const _=h.length;if(0<_){const v=Array(_);for(let b=0;b<_;b++)v[b]=h[b];return v}return[]}function B(h,_){for(let v=1;v<arguments.length;v++){const b=arguments[v];if(p(b)){const U=h.length||0,G=b.length||0;h.length=U+G;for(let re=0;re<G;re++)h[U+re]=b[re]}else h.push(b)}}class ${constructor(_,v){this.i=_,this.j=v,this.h=0,this.g=null}get(){let _;return 0<this.h?(this.h--,_=this.g,this.g=_.next,_.next=null):_=this.i(),_}}function W(h){return/^[\s\xa0]*$/.test(h)}function ee(){var h=d.navigator;return h&&(h=h.userAgent)?h:""}function ae(h){return ae[" "](h),h}ae[" "]=function(){};var he=ee().indexOf("Gecko")!=-1&&!(ee().toLowerCase().indexOf("webkit")!=-1&&ee().indexOf("Edge")==-1)&&!(ee().indexOf("Trident")!=-1||ee().indexOf("MSIE")!=-1)&&ee().indexOf("Edge")==-1;function _e(h,_,v){for(const b in h)_.call(v,h[b],b,h)}function D(h,_){for(const v in h)_.call(void 0,h[v],v,h)}function A(h){const _={};for(const v in h)_[v]=h[v];return _}const R="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function P(h,_){let v,b;for(let U=1;U<arguments.length;U++){b=arguments[U];for(v in b)h[v]=b[v];for(let G=0;G<R.length;G++)v=R[G],Object.prototype.hasOwnProperty.call(b,v)&&(h[v]=b[v])}}function x(h){var _=1;h=h.split(":");const v=[];for(;0<_&&h.length;)v.push(h.shift()),_--;return h.length&&v.push(h.join(":")),v}function V(h){d.setTimeout(()=>{throw h},0)}function O(){var h=qe;let _=null;return h.g&&(_=h.g,h.g=h.g.next,h.g||(h.h=null),_.next=null),_}class Wt{constructor(){this.h=this.g=null}add(_,v){const b=pt.get();b.set(_,v),this.h?this.h.next=b:this.g=b,this.h=b}}var pt=new $(()=>new Y,h=>h.reset());class Y{constructor(){this.next=this.g=this.h=null}set(_,v){this.h=_,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let se,me=!1,qe=new Wt,k=()=>{const h=d.Promise.resolve(void 0);se=()=>{h.then(te)}};var te=()=>{for(var h;h=O();){try{h.h.call(h.g)}catch(v){V(v)}var _=pt;_.j(h),100>_.h&&(_.h++,h.next=_.g,_.g=h)}me=!1};function oe(){this.s=this.s,this.C=this.C}oe.prototype.s=!1,oe.prototype.ma=function(){this.s||(this.s=!0,this.N())},oe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ie(h,_){this.type=h,this.g=this.target=_,this.defaultPrevented=!1}ie.prototype.h=function(){this.defaultPrevented=!0};var ye=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var h=!1,_=Object.defineProperty({},"passive",{get:function(){h=!0}});try{const v=()=>{};d.addEventListener("test",v,_),d.removeEventListener("test",v,_)}catch{}return h}();function Oe(h,_){if(ie.call(this,h?h.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,h){var v=this.type=h.type,b=h.changedTouches&&h.changedTouches.length?h.changedTouches[0]:null;if(this.target=h.target||h.srcElement,this.g=_,_=h.relatedTarget){if(he){e:{try{ae(_.nodeName);var U=!0;break e}catch{}U=!1}U||(_=null)}}else v=="mouseover"?_=h.fromElement:v=="mouseout"&&(_=h.toElement);this.relatedTarget=_,b?(this.clientX=b.clientX!==void 0?b.clientX:b.pageX,this.clientY=b.clientY!==void 0?b.clientY:b.pageY,this.screenX=b.screenX||0,this.screenY=b.screenY||0):(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0),this.button=h.button,this.key=h.key||"",this.ctrlKey=h.ctrlKey,this.altKey=h.altKey,this.shiftKey=h.shiftKey,this.metaKey=h.metaKey,this.pointerId=h.pointerId||0,this.pointerType=typeof h.pointerType=="string"?h.pointerType:be[h.pointerType]||"",this.state=h.state,this.i=h,h.defaultPrevented&&Oe.aa.h.call(this)}}N(Oe,ie);var be={2:"touch",3:"pen",4:"mouse"};Oe.prototype.h=function(){Oe.aa.h.call(this);var h=this.i;h.preventDefault?h.preventDefault():h.returnValue=!1};var zt="closure_listenable_"+(1e6*Math.random()|0),rt=0;function Ti(h,_,v,b,U){this.listener=h,this.proxy=null,this.src=_,this.type=v,this.capture=!!b,this.ha=U,this.key=++rt,this.da=this.fa=!1}function Fr(h){h.da=!0,h.listener=null,h.proxy=null,h.src=null,h.ha=null}function Qi(h){this.src=h,this.g={},this.h=0}Qi.prototype.add=function(h,_,v,b,U){var G=h.toString();h=this.g[G],h||(h=this.g[G]=[],this.h++);var re=Bs(h,_,b,U);return-1<re?(_=h[re],v||(_.fa=!1)):(_=new Ti(_,this.src,G,!!b,U),_.fa=v,h.push(_)),_};function Us(h,_){var v=_.type;if(v in h.g){var b=h.g[v],U=Array.prototype.indexOf.call(b,_,void 0),G;(G=0<=U)&&Array.prototype.splice.call(b,U,1),G&&(Fr(_),h.g[v].length==0&&(delete h.g[v],h.h--))}}function Bs(h,_,v,b){for(var U=0;U<h.length;++U){var G=h[U];if(!G.da&&G.listener==_&&G.capture==!!v&&G.ha==b)return U}return-1}var zs="closure_lm_"+(1e6*Math.random()|0),Tl={};function xc(h,_,v,b,U){if(Array.isArray(_)){for(var G=0;G<_.length;G++)xc(h,_[G],v,b,U);return null}return v=Lc(v),h&&h[zt]?h.K(_,v,m(b)?!!b.capture:!1,U):qn(h,_,v,!1,b,U)}function qn(h,_,v,b,U,G){if(!_)throw Error("Invalid event type");var re=m(U)?!!U.capture:!!U,Ve=$a(h);if(Ve||(h[zs]=Ve=new Qi(h)),v=Ve.add(_,v,b,re,G),v.proxy)return v;if(b=Fd(),v.proxy=b,b.src=h,b.listener=v,h.addEventListener)ye||(U=re),U===void 0&&(U=!1),h.addEventListener(_.toString(),b,U);else if(h.attachEvent)h.attachEvent(Fs(_.toString()),b);else if(h.addListener&&h.removeListener)h.addListener(b);else throw Error("addEventListener and attachEvent are unavailable.");return v}function Fd(){function h(v){return _.call(h.src,h.listener,v)}const _=Hd;return h}function Sl(h,_,v,b,U){if(Array.isArray(_))for(var G=0;G<_.length;G++)Sl(h,_[G],v,b,U);else b=m(b)?!!b.capture:!!b,v=Lc(v),h&&h[zt]?(h=h.i,_=String(_).toString(),_ in h.g&&(G=h.g[_],v=Bs(G,v,b,U),-1<v&&(Fr(G[v]),Array.prototype.splice.call(G,v,1),G.length==0&&(delete h.g[_],h.h--)))):h&&(h=$a(h))&&(_=h.g[_.toString()],h=-1,_&&(h=Bs(_,v,b,U)),(v=-1<h?_[h]:null)&&Ka(v))}function Ka(h){if(typeof h!="number"&&h&&!h.da){var _=h.src;if(_&&_[zt])Us(_.i,h);else{var v=h.type,b=h.proxy;_.removeEventListener?_.removeEventListener(v,b,h.capture):_.detachEvent?_.detachEvent(Fs(v),b):_.addListener&&_.removeListener&&_.removeListener(b),(v=$a(_))?(Us(v,h),v.h==0&&(v.src=null,_[zs]=null)):Fr(h)}}}function Fs(h){return h in Tl?Tl[h]:Tl[h]="on"+h}function Hd(h,_){if(h.da)h=!0;else{_=new Oe(_,this);var v=h.listener,b=h.ha||h.src;h.fa&&Ka(h),h=v.call(b,_)}return h}function $a(h){return h=h[zs],h instanceof Qi?h:null}var wl="__closure_events_fn_"+(1e9*Math.random()>>>0);function Lc(h){return typeof h=="function"?h:(h[wl]||(h[wl]=function(_){return h.handleEvent(_)}),h[wl])}function mt(){oe.call(this),this.i=new Qi(this),this.M=this,this.F=null}N(mt,oe),mt.prototype[zt]=!0,mt.prototype.removeEventListener=function(h,_,v,b){Sl(this,h,_,v,b)};function Qe(h,_){var v,b=h.F;if(b)for(v=[];b;b=b.F)v.push(b);if(h=h.M,b=_.type||_,typeof _=="string")_=new ie(_,h);else if(_ instanceof ie)_.target=_.target||h;else{var U=_;_=new ie(b,h),P(_,U)}if(U=!0,v)for(var G=v.length-1;0<=G;G--){var re=_.g=v[G];U=Dn(re,b,!0,_)&&U}if(re=_.g=h,U=Dn(re,b,!0,_)&&U,U=Dn(re,b,!1,_)&&U,v)for(G=0;G<v.length;G++)re=_.g=v[G],U=Dn(re,b,!1,_)&&U}mt.prototype.N=function(){if(mt.aa.N.call(this),this.i){var h=this.i,_;for(_ in h.g){for(var v=h.g[_],b=0;b<v.length;b++)Fr(v[b]);delete h.g[_],h.h--}}this.F=null},mt.prototype.K=function(h,_,v,b){return this.i.add(String(h),_,!1,v,b)},mt.prototype.L=function(h,_,v,b){return this.i.add(String(h),_,!0,v,b)};function Dn(h,_,v,b){if(_=h.i.g[String(_)],!_)return!0;_=_.concat();for(var U=!0,G=0;G<_.length;++G){var re=_[G];if(re&&!re.da&&re.capture==v){var Ve=re.listener,Pt=re.ha||re.src;re.fa&&Us(h.i,re),U=Ve.call(Pt,b)!==!1&&U}}return U&&!b.defaultPrevented}function on(h,_,v){if(typeof h=="function")v&&(h=S(h,v));else if(h&&typeof h.handleEvent=="function")h=S(h.handleEvent,h);else throw Error("Invalid listener argument");return 2147483647<Number(_)?-1:d.setTimeout(h,_||0)}function Vc(h){h.g=on(()=>{h.g=null,h.i&&(h.i=!1,Vc(h))},h.l);const _=h.h;h.h=null,h.m.apply(null,_)}class jd extends oe{constructor(_,v){super(),this.m=_,this.l=v,this.h=null,this.i=!1,this.g=null}j(_){this.h=arguments,this.g?this.i=!0:Vc(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Hs(h){oe.call(this),this.h=h,this.g={}}N(Hs,oe);var js=[];function qs(h){_e(h.g,function(_,v){this.g.hasOwnProperty(v)&&Ka(_)},h),h.g={}}Hs.prototype.N=function(){Hs.aa.N.call(this),qs(this)},Hs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var li=d.JSON.stringify,Ya=d.JSON.parse,Gs=class{stringify(h){return d.JSON.stringify(h,void 0)}parse(h){return d.JSON.parse(h,void 0)}};function bl(){}bl.prototype.h=null;function Al(h){return h.h||(h.h=h.i())}function Rl(){}var Wi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Xi(){ie.call(this,"d")}N(Xi,ie);function Cl(){ie.call(this,"c")}N(Cl,ie);var Si={},Il=null;function Hr(){return Il=Il||new mt}Si.La="serverreachability";function Qa(h){ie.call(this,Si.La,h)}N(Qa,ie);function jr(h){const _=Hr();Qe(_,new Qa(_))}Si.STAT_EVENT="statevent";function Uc(h,_){ie.call(this,Si.STAT_EVENT,h),this.stat=_}N(Uc,ie);function ut(h){const _=Hr();Qe(_,new Uc(_,h))}Si.Ma="timingevent";function kt(h,_){ie.call(this,Si.Ma,h),this.size=_}N(kt,ie);function At(h,_){if(typeof h!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){h()},_)}function Gn(){this.g=!0}Gn.prototype.xa=function(){this.g=!1};function Nl(h,_,v,b,U,G){h.info(function(){if(h.g)if(G)for(var re="",Ve=G.split("&"),Pt=0;Pt<Ve.length;Pt++){var Ue=Ve[Pt].split("=");if(1<Ue.length){var Ht=Ue[0];Ue=Ue[1];var Mt=Ht.split("_");re=2<=Mt.length&&Mt[1]=="type"?re+(Ht+"="+Ue+"&"):re+(Ht+"=redacted&")}}else re=null;else re=G;return"XMLHTTP REQ ("+b+") [attempt "+U+"]: "+_+`
`+v+`
`+re})}function qd(h,_,v,b,U,G,re){h.info(function(){return"XMLHTTP RESP ("+b+") [ attempt "+U+"]: "+_+`
`+v+`
`+G+" "+re})}function qr(h,_,v,b){h.info(function(){return"XMLHTTP TEXT ("+_+"): "+Ks(h,v)+(b?" "+b:"")})}function Bc(h,_){h.info(function(){return"TIMEOUT: "+_})}Gn.prototype.info=function(){};function Ks(h,_){if(!h.g)return _;if(!_)return null;try{var v=JSON.parse(_);if(v){for(h=0;h<v.length;h++)if(Array.isArray(v[h])){var b=v[h];if(!(2>b.length)){var U=b[1];if(Array.isArray(U)&&!(1>U.length)){var G=U[0];if(G!="noop"&&G!="stop"&&G!="close")for(var re=1;re<U.length;re++)U[re]=""}}}}return li(v)}catch{return _}}var Gr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Zi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},wi;function bi(){}N(bi,bl),bi.prototype.g=function(){return new XMLHttpRequest},bi.prototype.i=function(){return{}},wi=new bi;function yn(h,_,v,b){this.j=h,this.i=_,this.l=v,this.R=b||1,this.U=new Hs(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Et}function Et(){this.i=null,this.g="",this.h=!1}var Ol={},Wa={};function ui(h,_,v){h.L=1,h.v=Xs(kn(_)),h.m=v,h.P=!0,Ji(h,null)}function Ji(h,_){h.F=Date.now(),$s(h),h.A=kn(h.v);var v=h.A,b=h.R;Array.isArray(b)||(b=[String(b)]),Ll(v.i,"t",b),h.C=0,v=h.j.J,h.h=new Et,h.g=th(h.j,v?_:null,!h.m),0<h.O&&(h.M=new jd(S(h.Y,h,h.g),h.O)),_=h.U,v=h.g,b=h.ca;var U="readystatechange";Array.isArray(U)||(U&&(js[0]=U.toString()),U=js);for(var G=0;G<U.length;G++){var re=xc(v,U[G],b||_.handleEvent,!1,_.h||_);if(!re)break;_.g[re.key]=re}_=h.H?A(h.H):{},h.m?(h.u||(h.u="POST"),_["Content-Type"]="application/x-www-form-urlencoded",h.g.ea(h.A,h.u,h.m,_)):(h.u="GET",h.g.ea(h.A,h.u,null,_)),jr(),Nl(h.i,h.u,h.A,h.l,h.R,h.m)}yn.prototype.ca=function(h){h=h.target;const _=this.M;_&&Qn(h)==3?_.j():this.Y(h)},yn.prototype.Y=function(h){try{if(h==this.g)e:{const Mt=Qn(this.g);var _=this.g.Ba();const or=this.g.Z();if(!(3>Mt)&&(Mt!=3||this.g&&(this.h.h||this.g.oa()||$c(this.g)))){this.J||Mt!=4||_==7||(_==8||0>=or?jr(3):jr(2)),Kr(this);var v=this.g.Z();this.X=v;t:if(zc(this)){var b=$c(this.g);h="";var U=b.length,G=Qn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Xt(this),Ai(this);var re="";break t}this.h.i=new d.TextDecoder}for(_=0;_<U;_++)this.h.h=!0,h+=this.h.i.decode(b[_],{stream:!(G&&_==U-1)});b.length=0,this.h.g+=h,this.C=0,re=this.h.g}else re=this.g.oa();if(this.o=v==200,qd(this.i,this.u,this.A,this.l,this.R,Mt,v),this.o){if(this.T&&!this.K){t:{if(this.g){var Ve,Pt=this.g;if((Ve=Pt.g?Pt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!W(Ve)){var Ue=Ve;break t}}Ue=null}if(v=Ue)qr(this.i,this.l,v,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ys(this,v);else{this.o=!1,this.s=3,ut(12),Xt(this),Ai(this);break e}}if(this.P){v=!0;let Zt;for(;!this.J&&this.C<re.length;)if(Zt=Fc(this,re),Zt==Wa){Mt==4&&(this.s=4,ut(14),v=!1),qr(this.i,this.l,null,"[Incomplete Response]");break}else if(Zt==Ol){this.s=4,ut(15),qr(this.i,this.l,re,"[Invalid Chunk]"),v=!1;break}else qr(this.i,this.l,Zt,null),Ys(this,Zt);if(zc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Mt!=4||re.length!=0||this.h.h||(this.s=1,ut(16),v=!1),this.o=this.o&&v,!v)qr(this.i,this.l,re,"[Invalid Chunked Response]"),Xt(this),Ai(this);else if(0<re.length&&!this.W){this.W=!0;var Ht=this.j;Ht.g==this&&Ht.ba&&!Ht.M&&(Ht.j.info("Great, no buffering proxy detected. Bytes received: "+re.length),sa(Ht),Ht.M=!0,ut(11))}}else qr(this.i,this.l,re,null),Ys(this,re);Mt==4&&Xt(this),this.o&&!this.J&&(Mt==4?Zc(this.j,this):(this.o=!1,$s(this)))}else Qd(this.g),v==400&&0<re.indexOf("Unknown SID")?(this.s=3,ut(12)):(this.s=0,ut(13)),Xt(this),Ai(this)}}}catch{}finally{}};function zc(h){return h.g?h.u=="GET"&&h.L!=2&&h.j.Ca:!1}function Fc(h,_){var v=h.C,b=_.indexOf(`
`,v);return b==-1?Wa:(v=Number(_.substring(v,b)),isNaN(v)?Ol:(b+=1,b+v>_.length?Wa:(_=_.slice(b,b+v),h.C=b+v,_)))}yn.prototype.cancel=function(){this.J=!0,Xt(this)};function $s(h){h.S=Date.now()+h.I,Hc(h,h.I)}function Hc(h,_){if(h.B!=null)throw Error("WatchDog timer not null");h.B=At(S(h.ba,h),_)}function Kr(h){h.B&&(d.clearTimeout(h.B),h.B=null)}yn.prototype.ba=function(){this.B=null;const h=Date.now();0<=h-this.S?(Bc(this.i,this.A),this.L!=2&&(jr(),ut(17)),Xt(this),this.s=2,Ai(this)):Hc(this,this.S-h)};function Ai(h){h.j.G==0||h.J||Zc(h.j,h)}function Xt(h){Kr(h);var _=h.M;_&&typeof _.ma=="function"&&_.ma(),h.M=null,qs(h.U),h.g&&(_=h.g,h.g=null,_.abort(),_.ma())}function Ys(h,_){try{var v=h.j;if(v.G!=0&&(v.g==h||Dl(v.h,h))){if(!h.K&&Dl(v.h,h)&&v.G==3){try{var b=v.Da.g.parse(_)}catch{b=null}if(Array.isArray(b)&&b.length==3){var U=b;if(U[0]==0){e:if(!v.u){if(v.g)if(v.g.F+3e3<h.F)lo(v),ao(v);else break e;Fl(v),ut(18)}}else v.za=U[1],0<v.za-v.T&&37500>U[2]&&v.F&&v.v==0&&!v.C&&(v.C=At(S(v.Za,v),6e3));if(1>=Za(v.h)&&v.ca){try{v.ca()}catch{}v.ca=void 0}}else ar(v,11)}else if((h.K||v.g==h)&&lo(v),!W(_))for(U=v.Da.g.parse(_),_=0;_<U.length;_++){let Ue=U[_];if(v.T=Ue[0],Ue=Ue[1],v.G==2)if(Ue[0]=="c"){v.K=Ue[1],v.ia=Ue[2];const Ht=Ue[3];Ht!=null&&(v.la=Ht,v.j.info("VER="+v.la));const Mt=Ue[4];Mt!=null&&(v.Aa=Mt,v.j.info("SVER="+v.Aa));const or=Ue[5];or!=null&&typeof or=="number"&&0<or&&(b=1.5*or,v.L=b,v.j.info("backChannelRequestTimeoutMs_="+b)),b=v;const Zt=h.g;if(Zt){const ki=Zt.g?Zt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ki){var G=b.h;G.g||ki.indexOf("spdy")==-1&&ki.indexOf("quic")==-1&&ki.indexOf("h2")==-1||(G.j=G.l,G.g=new Set,G.h&&(Ja(G,G.h),G.h=null))}if(b.D){const jl=Zt.g?Zt.g.getResponseHeader("X-HTTP-Session-Id"):null;jl&&(b.ya=jl,Ze(b.I,b.D,jl))}}v.G=3,v.l&&v.l.ua(),v.ba&&(v.R=Date.now()-h.F,v.j.info("Handshake RTT: "+v.R+"ms")),b=v;var re=h;if(b.qa=eh(b,b.J?b.ia:null,b.W),re.K){vn(b.h,re);var Ve=re,Pt=b.L;Pt&&(Ve.I=Pt),Ve.B&&(Kr(Ve),$s(Ve)),b.g=re}else Wc(b);0<v.i.length&&oo(v)}else Ue[0]!="stop"&&Ue[0]!="close"||ar(v,7);else v.G==3&&(Ue[0]=="stop"||Ue[0]=="close"?Ue[0]=="stop"?ar(v,7):Bl(v):Ue[0]!="noop"&&v.l&&v.l.ta(Ue),v.v=0)}}jr(4)}catch{}}var jc=class{constructor(h,_){this.g=h,this.map=_}};function er(h){this.l=h||10,d.PerformanceNavigationTiming?(h=d.performance.getEntriesByType("navigation"),h=0<h.length&&(h[0].nextHopProtocol=="hq"||h[0].nextHopProtocol=="h2")):h=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=h?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Xa(h){return h.h?!0:h.g?h.g.size>=h.j:!1}function Za(h){return h.h?1:h.g?h.g.size:0}function Dl(h,_){return h.h?h.h==_:h.g?h.g.has(_):!1}function Ja(h,_){h.g?h.g.add(_):h.h=_}function vn(h,_){h.h&&h.h==_?h.h=null:h.g&&h.g.has(_)&&h.g.delete(_)}er.prototype.cancel=function(){if(this.i=kl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const h of this.g.values())h.cancel();this.g.clear()}};function kl(h){if(h.h!=null)return h.i.concat(h.h.D);if(h.g!=null&&h.g.size!==0){let _=h.i;for(const v of h.g.values())_=_.concat(v.D);return _}return H(h.i)}function Gd(h){if(h.V&&typeof h.V=="function")return h.V();if(typeof Map<"u"&&h instanceof Map||typeof Set<"u"&&h instanceof Set)return Array.from(h.values());if(typeof h=="string")return h.split("");if(p(h)){for(var _=[],v=h.length,b=0;b<v;b++)_.push(h[b]);return _}_=[],v=0;for(b in h)_[v++]=h[b];return _}function eo(h){if(h.na&&typeof h.na=="function")return h.na();if(!h.V||typeof h.V!="function"){if(typeof Map<"u"&&h instanceof Map)return Array.from(h.keys());if(!(typeof Set<"u"&&h instanceof Set)){if(p(h)||typeof h=="string"){var _=[];h=h.length;for(var v=0;v<h;v++)_.push(v);return _}_=[],v=0;for(const b in h)_[v++]=b;return _}}}function Pl(h,_){if(h.forEach&&typeof h.forEach=="function")h.forEach(_,void 0);else if(p(h)||typeof h=="string")Array.prototype.forEach.call(h,_,void 0);else for(var v=eo(h),b=Gd(h),U=b.length,G=0;G<U;G++)_.call(void 0,b[G],v&&v[G],h)}var Qs=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Kd(h,_){if(h){h=h.split("&");for(var v=0;v<h.length;v++){var b=h[v].indexOf("="),U=null;if(0<=b){var G=h[v].substring(0,b);U=h[v].substring(b+1)}else G=h[v];_(G,U?decodeURIComponent(U.replace(/\+/g," ")):"")}}}function Rt(h){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,h instanceof Rt){this.h=h.h,Ws(this,h.j),this.o=h.o,this.g=h.g,$r(this,h.s),this.l=h.l;var _=h.i,v=new nr;v.i=_.i,_.g&&(v.g=new Map(_.g),v.h=_.h),tr(this,v),this.m=h.m}else h&&(_=String(h).match(Qs))?(this.h=!1,Ws(this,_[1]||"",!0),this.o=Kn(_[2]||""),this.g=Kn(_[3]||"",!0),$r(this,_[4]),this.l=Kn(_[5]||"",!0),tr(this,_[6]||"",!0),this.m=Kn(_[7]||"")):(this.h=!1,this.i=new nr(null,this.h))}Rt.prototype.toString=function(){var h=[],_=this.j;_&&h.push(Zs(_,Ml,!0),":");var v=this.g;return(v||_=="file")&&(h.push("//"),(_=this.o)&&h.push(Zs(_,Ml,!0),"@"),h.push(encodeURIComponent(String(v)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.s,v!=null&&h.push(":",String(v))),(v=this.l)&&(this.g&&v.charAt(0)!="/"&&h.push("/"),h.push(Zs(v,v.charAt(0)=="/"?$d:xl,!0))),(v=this.i.toString())&&h.push("?",v),(v=this.m)&&h.push("#",Zs(v,to)),h.join("")};function kn(h){return new Rt(h)}function Ws(h,_,v){h.j=v?Kn(_,!0):_,h.j&&(h.j=h.j.replace(/:$/,""))}function $r(h,_){if(_){if(_=Number(_),isNaN(_)||0>_)throw Error("Bad port number "+_);h.s=_}else h.s=null}function tr(h,_,v){_ instanceof nr?(h.i=_,Gc(h.i,h.h)):(v||(_=Zs(_,Yd)),h.i=new nr(_,h.h))}function Ze(h,_,v){h.i.set(_,v)}function Xs(h){return Ze(h,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),h}function Kn(h,_){return h?_?decodeURI(h.replace(/%25/g,"%2525")):decodeURIComponent(h):""}function Zs(h,_,v){return typeof h=="string"?(h=encodeURI(h).replace(_,qc),v&&(h=h.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h):null}function qc(h){return h=h.charCodeAt(0),"%"+(h>>4&15).toString(16)+(h&15).toString(16)}var Ml=/[#\/\?@]/g,xl=/[#\?:]/g,$d=/[#\?]/g,Yd=/[#\?@]/g,to=/#/g;function nr(h,_){this.h=this.g=null,this.i=h||null,this.j=!!_}function $n(h){h.g||(h.g=new Map,h.h=0,h.i&&Kd(h.i,function(_,v){h.add(decodeURIComponent(_.replace(/\+/g," ")),v)}))}n=nr.prototype,n.add=function(h,_){$n(this),this.i=null,h=Ri(this,h);var v=this.g.get(h);return v||this.g.set(h,v=[]),v.push(_),this.h+=1,this};function ir(h,_){$n(h),_=Ri(h,_),h.g.has(_)&&(h.i=null,h.h-=h.g.get(_).length,h.g.delete(_))}function rr(h,_){return $n(h),_=Ri(h,_),h.g.has(_)}n.forEach=function(h,_){$n(this),this.g.forEach(function(v,b){v.forEach(function(U){h.call(_,U,b,this)},this)},this)},n.na=function(){$n(this);const h=Array.from(this.g.values()),_=Array.from(this.g.keys()),v=[];for(let b=0;b<_.length;b++){const U=h[b];for(let G=0;G<U.length;G++)v.push(_[b])}return v},n.V=function(h){$n(this);let _=[];if(typeof h=="string")rr(this,h)&&(_=_.concat(this.g.get(Ri(this,h))));else{h=Array.from(this.g.values());for(let v=0;v<h.length;v++)_=_.concat(h[v])}return _},n.set=function(h,_){return $n(this),this.i=null,h=Ri(this,h),rr(this,h)&&(this.h-=this.g.get(h).length),this.g.set(h,[_]),this.h+=1,this},n.get=function(h,_){return h?(h=this.V(h),0<h.length?String(h[0]):_):_};function Ll(h,_,v){ir(h,_),0<v.length&&(h.i=null,h.g.set(Ri(h,_),H(v)),h.h+=v.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const h=[],_=Array.from(this.g.keys());for(var v=0;v<_.length;v++){var b=_[v];const G=encodeURIComponent(String(b)),re=this.V(b);for(b=0;b<re.length;b++){var U=G;re[b]!==""&&(U+="="+encodeURIComponent(String(re[b]))),h.push(U)}}return this.i=h.join("&")};function Ri(h,_){return _=String(_),h.j&&(_=_.toLowerCase()),_}function Gc(h,_){_&&!h.j&&($n(h),h.i=null,h.g.forEach(function(v,b){var U=b.toLowerCase();b!=U&&(ir(this,b),Ll(this,U,v))},h)),h.j=_}function Js(h,_){const v=new Gn;if(d.Image){const b=new Image;b.onload=I(Yn,v,"TestLoadImage: loaded",!0,_,b),b.onerror=I(Yn,v,"TestLoadImage: error",!1,_,b),b.onabort=I(Yn,v,"TestLoadImage: abort",!1,_,b),b.ontimeout=I(Yn,v,"TestLoadImage: timeout",!1,_,b),d.setTimeout(function(){b.ontimeout&&b.ontimeout()},1e4),b.src=h}else _(!1)}function ci(h,_){const v=new Gn,b=new AbortController,U=setTimeout(()=>{b.abort(),Yn(v,"TestPingServer: timeout",!1,_)},1e4);fetch(h,{signal:b.signal}).then(G=>{clearTimeout(U),G.ok?Yn(v,"TestPingServer: ok",!0,_):Yn(v,"TestPingServer: server error",!1,_)}).catch(()=>{clearTimeout(U),Yn(v,"TestPingServer: error",!1,_)})}function Yn(h,_,v,b,U){try{U&&(U.onload=null,U.onerror=null,U.onabort=null,U.ontimeout=null),b(v)}catch{}}function ea(){this.g=new Gs}function Ci(h,_,v){const b=v||"";try{Pl(h,function(U,G){let re=U;m(U)&&(re=li(U)),_.push(b+G+"="+encodeURIComponent(re))})}catch(U){throw _.push(b+"type="+encodeURIComponent("_badmap")),U}}function Yr(h){this.l=h.Ub||null,this.j=h.eb||!1}N(Yr,bl),Yr.prototype.g=function(){return new sr(this.l,this.j)},Yr.prototype.i=function(h){return function(){return h}}({});function sr(h,_){mt.call(this),this.D=h,this.o=_,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}N(sr,mt),n=sr.prototype,n.open=function(h,_){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=h,this.A=_,this.readyState=1,Ni(this)},n.send=function(h){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const _={headers:this.u,method:this.B,credentials:this.m,cache:void 0};h&&(_.body=h),(this.D||d).fetch(new Request(this.A,_)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ii(this)),this.readyState=0},n.Sa=function(h){if(this.g&&(this.l=h,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=h.headers,this.readyState=2,Ni(this)),this.g&&(this.readyState=3,Ni(this),this.g)))if(this.responseType==="arraybuffer")h.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in h){if(this.j=h.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Vl(this)}else h.text().then(this.Ra.bind(this),this.ga.bind(this))};function Vl(h){h.j.read().then(h.Pa.bind(h)).catch(h.ga.bind(h))}n.Pa=function(h){if(this.g){if(this.o&&h.value)this.response.push(h.value);else if(!this.o){var _=h.value?h.value:new Uint8Array(0);(_=this.v.decode(_,{stream:!h.done}))&&(this.response=this.responseText+=_)}h.done?Ii(this):Ni(this),this.readyState==3&&Vl(this)}},n.Ra=function(h){this.g&&(this.response=this.responseText=h,Ii(this))},n.Qa=function(h){this.g&&(this.response=h,Ii(this))},n.ga=function(){this.g&&Ii(this)};function Ii(h){h.readyState=4,h.l=null,h.j=null,h.v=null,Ni(h)}n.setRequestHeader=function(h,_){this.u.append(h,_)},n.getResponseHeader=function(h){return this.h&&this.h.get(h.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const h=[],_=this.h.entries();for(var v=_.next();!v.done;)v=v.value,h.push(v[0]+": "+v[1]),v=_.next();return h.join(`\r
`)};function Ni(h){h.onreadystatechange&&h.onreadystatechange.call(h)}Object.defineProperty(sr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(h){this.m=h?"include":"same-origin"}});function Ul(h){let _="";return _e(h,function(v,b){_+=b,_+=":",_+=v,_+=`\r
`}),_}function Ft(h,_,v){e:{for(b in v){var b=!1;break e}b=!0}b||(v=Ul(v),typeof h=="string"?v!=null&&encodeURIComponent(String(v)):Ze(h,_,v))}function Ke(h){mt.call(this),this.headers=new Map,this.o=h||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}N(Ke,mt);var no=/^https?$/i,ta=["POST","PUT"];n=Ke.prototype,n.Ha=function(h){this.J=h},n.ea=function(h,_,v,b){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+h);_=_?_.toUpperCase():"GET",this.D=h,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():wi.g(),this.v=this.o?Al(this.o):Al(wi),this.g.onreadystatechange=S(this.Ea,this);try{this.B=!0,this.g.open(_,String(h),!0),this.B=!1}catch(G){Kc(this,G);return}if(h=v||"",v=new Map(this.headers),b)if(Object.getPrototypeOf(b)===Object.prototype)for(var U in b)v.set(U,b[U]);else if(typeof b.keys=="function"&&typeof b.get=="function")for(const G of b.keys())v.set(G,b.get(G));else throw Error("Unknown input type for opt_headers: "+String(b));b=Array.from(v.keys()).find(G=>G.toLowerCase()=="content-type"),U=d.FormData&&h instanceof d.FormData,!(0<=Array.prototype.indexOf.call(ta,_,void 0))||b||U||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[G,re]of v)this.g.setRequestHeader(G,re);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{na(this),this.u=!0,this.g.send(h),this.u=!1}catch(G){Kc(this,G)}};function Kc(h,_){h.h=!1,h.g&&(h.j=!0,h.g.abort(),h.j=!1),h.l=_,h.m=5,io(h),Oi(h)}function io(h){h.A||(h.A=!0,Qe(h,"complete"),Qe(h,"error"))}n.abort=function(h){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=h||7,Qe(this,"complete"),Qe(this,"abort"),Oi(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Oi(this,!0)),Ke.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?ro(this):this.bb())},n.bb=function(){ro(this)};function ro(h){if(h.h&&typeof c<"u"&&(!h.v[1]||Qn(h)!=4||h.Z()!=2)){if(h.u&&Qn(h)==4)on(h.Ea,0,h);else if(Qe(h,"readystatechange"),Qn(h)==4){h.h=!1;try{const re=h.Z();e:switch(re){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var _=!0;break e;default:_=!1}var v;if(!(v=_)){var b;if(b=re===0){var U=String(h.D).match(Qs)[1]||null;!U&&d.self&&d.self.location&&(U=d.self.location.protocol.slice(0,-1)),b=!no.test(U?U.toLowerCase():"")}v=b}if(v)Qe(h,"complete"),Qe(h,"success");else{h.m=6;try{var G=2<Qn(h)?h.g.statusText:""}catch{G=""}h.l=G+" ["+h.Z()+"]",io(h)}}finally{Oi(h)}}}}function Oi(h,_){if(h.g){na(h);const v=h.g,b=h.v[0]?()=>{}:null;h.g=null,h.v=null,_||Qe(h,"ready");try{v.onreadystatechange=b}catch{}}}function na(h){h.I&&(d.clearTimeout(h.I),h.I=null)}n.isActive=function(){return!!this.g};function Qn(h){return h.g?h.g.readyState:0}n.Z=function(){try{return 2<Qn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(h){if(this.g){var _=this.g.responseText;return h&&_.indexOf(h)==0&&(_=_.substring(h.length)),Ya(_)}};function $c(h){try{if(!h.g)return null;if("response"in h.g)return h.g.response;switch(h.H){case"":case"text":return h.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in h.g)return h.g.mozResponseArrayBuffer}return null}catch{return null}}function Qd(h){const _={};h=(h.g&&2<=Qn(h)&&h.g.getAllResponseHeaders()||"").split(`\r
`);for(let b=0;b<h.length;b++){if(W(h[b]))continue;var v=x(h[b]);const U=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const G=_[U]||[];_[U]=G,G.push(v)}D(_,function(b){return b.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ia(h,_,v){return v&&v.internalChannelParams&&v.internalChannelParams[h]||_}function so(h){this.Aa=0,this.i=[],this.j=new Gn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ia("failFast",!1,h),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ia("baseRetryDelayMs",5e3,h),this.cb=ia("retryDelaySeedMs",1e4,h),this.Wa=ia("forwardChannelMaxRetries",2,h),this.wa=ia("forwardChannelRequestTimeoutMs",2e4,h),this.pa=h&&h.xmlHttpFactory||void 0,this.Xa=h&&h.Tb||void 0,this.Ca=h&&h.useFetchStreams||!1,this.L=void 0,this.J=h&&h.supportsCrossDomainXhr||!1,this.K="",this.h=new er(h&&h.concurrentRequestLimit),this.Da=new ea,this.P=h&&h.fastHandshake||!1,this.O=h&&h.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=h&&h.Rb||!1,h&&h.xa&&this.j.xa(),h&&h.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&h&&h.detectBufferingProxy||!1,this.ja=void 0,h&&h.longPollingTimeout&&0<h.longPollingTimeout&&(this.ja=h.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=so.prototype,n.la=8,n.G=1,n.connect=function(h,_,v,b){ut(0),this.W=h,this.H=_||{},v&&b!==void 0&&(this.H.OSID=v,this.H.OAID=b),this.F=this.X,this.I=eh(this,null,this.W),oo(this)};function Bl(h){if(Yc(h),h.G==3){var _=h.U++,v=kn(h.I);if(Ze(v,"SID",h.K),Ze(v,"RID",_),Ze(v,"TYPE","terminate"),ra(h,v),_=new yn(h,h.j,_),_.L=2,_.v=Xs(kn(v)),v=!1,d.navigator&&d.navigator.sendBeacon)try{v=d.navigator.sendBeacon(_.v.toString(),"")}catch{}!v&&d.Image&&(new Image().src=_.v,v=!0),v||(_.g=th(_.j,null),_.g.ea(_.v)),_.F=Date.now(),$s(_)}Jc(h)}function ao(h){h.g&&(sa(h),h.g.cancel(),h.g=null)}function Yc(h){ao(h),h.u&&(d.clearTimeout(h.u),h.u=null),lo(h),h.h.cancel(),h.s&&(typeof h.s=="number"&&d.clearTimeout(h.s),h.s=null)}function oo(h){if(!Xa(h.h)&&!h.s){h.s=!0;var _=h.Ga;se||k(),me||(se(),me=!0),qe.add(_,h),h.B=0}}function Wd(h,_){return Za(h.h)>=h.h.j-(h.s?1:0)?!1:h.s?(h.i=_.D.concat(h.i),!0):h.G==1||h.G==2||h.B>=(h.Va?0:h.Wa)?!1:(h.s=At(S(h.Ga,h,_),Hl(h,h.B)),h.B++,!0)}n.Ga=function(h){if(this.s)if(this.s=null,this.G==1){if(!h){this.U=Math.floor(1e5*Math.random()),h=this.U++;const U=new yn(this,this.j,h);let G=this.o;if(this.S&&(G?(G=A(G),P(G,this.S)):G=this.S),this.m!==null||this.O||(U.H=G,G=null),this.P)e:{for(var _=0,v=0;v<this.i.length;v++){t:{var b=this.i[v];if("__data__"in b.map&&(b=b.map.__data__,typeof b=="string")){b=b.length;break t}b=void 0}if(b===void 0)break;if(_+=b,4096<_){_=v;break e}if(_===4096||v===this.i.length-1){_=v+1;break e}}_=1e3}else _=1e3;_=Qc(this,U,_),v=kn(this.I),Ze(v,"RID",h),Ze(v,"CVER",22),this.D&&Ze(v,"X-HTTP-Session-Id",this.D),ra(this,v),G&&(this.O?_="headers="+encodeURIComponent(String(Ul(G)))+"&"+_:this.m&&Ft(v,this.m,G)),Ja(this.h,U),this.Ua&&Ze(v,"TYPE","init"),this.P?(Ze(v,"$req",_),Ze(v,"SID","null"),U.T=!0,ui(U,v,null)):ui(U,v,_),this.G=2}}else this.G==3&&(h?zl(this,h):this.i.length==0||Xa(this.h)||zl(this))};function zl(h,_){var v;_?v=_.l:v=h.U++;const b=kn(h.I);Ze(b,"SID",h.K),Ze(b,"RID",v),Ze(b,"AID",h.T),ra(h,b),h.m&&h.o&&Ft(b,h.m,h.o),v=new yn(h,h.j,v,h.B+1),h.m===null&&(v.H=h.o),_&&(h.i=_.D.concat(h.i)),_=Qc(h,v,1e3),v.I=Math.round(.5*h.wa)+Math.round(.5*h.wa*Math.random()),Ja(h.h,v),ui(v,b,_)}function ra(h,_){h.H&&_e(h.H,function(v,b){Ze(_,b,v)}),h.l&&Pl({},function(v,b){Ze(_,b,v)})}function Qc(h,_,v){v=Math.min(h.i.length,v);var b=h.l?S(h.l.Na,h.l,h):null;e:{var U=h.i;let G=-1;for(;;){const re=["count="+v];G==-1?0<v?(G=U[0].g,re.push("ofs="+G)):G=0:re.push("ofs="+G);let Ve=!0;for(let Pt=0;Pt<v;Pt++){let Ue=U[Pt].g;const Ht=U[Pt].map;if(Ue-=G,0>Ue)G=Math.max(0,U[Pt].g-100),Ve=!1;else try{Ci(Ht,re,"req"+Ue+"_")}catch{b&&b(Ht)}}if(Ve){b=re.join("&");break e}}}return h=h.i.splice(0,v),_.D=h,b}function Wc(h){if(!h.g&&!h.u){h.Y=1;var _=h.Fa;se||k(),me||(se(),me=!0),qe.add(_,h),h.v=0}}function Fl(h){return h.g||h.u||3<=h.v?!1:(h.Y++,h.u=At(S(h.Fa,h),Hl(h,h.v)),h.v++,!0)}n.Fa=function(){if(this.u=null,Xc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var h=2*this.R;this.j.info("BP detection timer enabled: "+h),this.A=At(S(this.ab,this),h)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ut(10),ao(this),Xc(this))};function sa(h){h.A!=null&&(d.clearTimeout(h.A),h.A=null)}function Xc(h){h.g=new yn(h,h.j,"rpc",h.Y),h.m===null&&(h.g.H=h.o),h.g.O=0;var _=kn(h.qa);Ze(_,"RID","rpc"),Ze(_,"SID",h.K),Ze(_,"AID",h.T),Ze(_,"CI",h.F?"0":"1"),!h.F&&h.ja&&Ze(_,"TO",h.ja),Ze(_,"TYPE","xmlhttp"),ra(h,_),h.m&&h.o&&Ft(_,h.m,h.o),h.L&&(h.g.I=h.L);var v=h.g;h=h.ia,v.L=1,v.v=Xs(kn(_)),v.m=null,v.P=!0,Ji(v,h)}n.Za=function(){this.C!=null&&(this.C=null,ao(this),Fl(this),ut(19))};function lo(h){h.C!=null&&(d.clearTimeout(h.C),h.C=null)}function Zc(h,_){var v=null;if(h.g==_){lo(h),sa(h),h.g=null;var b=2}else if(Dl(h.h,_))v=_.D,vn(h.h,_),b=1;else return;if(h.G!=0){if(_.o)if(b==1){v=_.m?_.m.length:0,_=Date.now()-_.F;var U=h.B;b=Hr(),Qe(b,new kt(b,v)),oo(h)}else Wc(h);else if(U=_.s,U==3||U==0&&0<_.X||!(b==1&&Wd(h,_)||b==2&&Fl(h)))switch(v&&0<v.length&&(_=h.h,_.i=_.i.concat(v)),U){case 1:ar(h,5);break;case 4:ar(h,10);break;case 3:ar(h,6);break;default:ar(h,2)}}}function Hl(h,_){let v=h.Ta+Math.floor(Math.random()*h.cb);return h.isActive()||(v*=2),v*_}function ar(h,_){if(h.j.info("Error code "+_),_==2){var v=S(h.fb,h),b=h.Xa;const U=!b;b=new Rt(b||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||Ws(b,"https"),Xs(b),U?Js(b.toString(),v):ci(b.toString(),v)}else ut(2);h.G=0,h.l&&h.l.sa(_),Jc(h),Yc(h)}n.fb=function(h){h?(this.j.info("Successfully pinged google.com"),ut(2)):(this.j.info("Failed to ping google.com"),ut(1))};function Jc(h){if(h.G=0,h.ka=[],h.l){const _=kl(h.h);(_.length!=0||h.i.length!=0)&&(B(h.ka,_),B(h.ka,h.i),h.h.i.length=0,H(h.i),h.i.length=0),h.l.ra()}}function eh(h,_,v){var b=v instanceof Rt?kn(v):new Rt(v);if(b.g!="")_&&(b.g=_+"."+b.g),$r(b,b.s);else{var U=d.location;b=U.protocol,_=_?_+"."+U.hostname:U.hostname,U=+U.port;var G=new Rt(null);b&&Ws(G,b),_&&(G.g=_),U&&$r(G,U),v&&(G.l=v),b=G}return v=h.D,_=h.ya,v&&_&&Ze(b,v,_),Ze(b,"VER",h.la),ra(h,b),b}function th(h,_,v){if(_&&!h.J)throw Error("Can't create secondary domain capable XhrIo object.");return _=h.Ca&&!h.pa?new Ke(new Yr({eb:v})):new Ke(h.pa),_.Ha(h.J),_}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function nh(){}n=nh.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function uo(){}uo.prototype.g=function(h,_){return new En(h,_)};function En(h,_){mt.call(this),this.g=new so(_),this.l=h,this.h=_&&_.messageUrlParams||null,h=_&&_.messageHeaders||null,_&&_.clientProtocolHeaderRequired&&(h?h["X-Client-Protocol"]="webchannel":h={"X-Client-Protocol":"webchannel"}),this.g.o=h,h=_&&_.initMessageHeaders||null,_&&_.messageContentType&&(h?h["X-WebChannel-Content-Type"]=_.messageContentType:h={"X-WebChannel-Content-Type":_.messageContentType}),_&&_.va&&(h?h["X-WebChannel-Client-Profile"]=_.va:h={"X-WebChannel-Client-Profile":_.va}),this.g.S=h,(h=_&&_.Sb)&&!W(h)&&(this.g.m=h),this.v=_&&_.supportsCrossDomainXhr||!1,this.u=_&&_.sendRawJson||!1,(_=_&&_.httpSessionIdParam)&&!W(_)&&(this.g.D=_,h=this.h,h!==null&&_ in h&&(h=this.h,_ in h&&delete h[_])),this.j=new Di(this)}N(En,mt),En.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},En.prototype.close=function(){Bl(this.g)},En.prototype.o=function(h){var _=this.g;if(typeof h=="string"){var v={};v.__data__=h,h=v}else this.u&&(v={},v.__data__=li(h),h=v);_.i.push(new jc(_.Ya++,h)),_.G==3&&oo(_)},En.prototype.N=function(){this.g.l=null,delete this.j,Bl(this.g),delete this.g,En.aa.N.call(this)};function ih(h){Xi.call(this),h.__headers__&&(this.headers=h.__headers__,this.statusCode=h.__status__,delete h.__headers__,delete h.__status__);var _=h.__sm__;if(_){e:{for(const v in _){h=v;break e}h=void 0}(this.i=h)&&(h=this.i,_=_!==null&&h in _?_[h]:void 0),this.data=_}else this.data=h}N(ih,Xi);function rh(){Cl.call(this),this.status=1}N(rh,Cl);function Di(h){this.g=h}N(Di,nh),Di.prototype.ua=function(){Qe(this.g,"a")},Di.prototype.ta=function(h){Qe(this.g,new ih(h))},Di.prototype.sa=function(h){Qe(this.g,new rh)},Di.prototype.ra=function(){Qe(this.g,"b")},uo.prototype.createWebChannel=uo.prototype.g,En.prototype.send=En.prototype.o,En.prototype.open=En.prototype.m,En.prototype.close=En.prototype.close,kb=function(){return new uo},Db=function(){return Hr()},Ob=Si,Dg={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Gr.NO_ERROR=0,Gr.TIMEOUT=8,Gr.HTTP_ERROR=6,Ef=Gr,Zi.COMPLETE="complete",Nb=Zi,Rl.EventType=Wi,Wi.OPEN="a",Wi.CLOSE="b",Wi.ERROR="c",Wi.MESSAGE="d",mt.prototype.listen=mt.prototype.K,Uu=Rl,Ke.prototype.listenOnce=Ke.prototype.L,Ke.prototype.getLastError=Ke.prototype.Ka,Ke.prototype.getLastErrorCode=Ke.prototype.Ba,Ke.prototype.getStatus=Ke.prototype.Z,Ke.prototype.getResponseJson=Ke.prototype.Oa,Ke.prototype.getResponseText=Ke.prototype.oa,Ke.prototype.send=Ke.prototype.ea,Ke.prototype.setWithCredentials=Ke.prototype.Ha,Ib=Ke}).apply(typeof of<"u"?of:typeof self<"u"?self:typeof window<"u"?window:{});const M0="@firebase/firestore",x0="4.7.16";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}hn.UNAUTHENTICATED=new hn(null),hn.GOOGLE_CREDENTIALS=new hn("google-credentials-uid"),hn.FIRST_PARTY=new hn("first-party-uid"),hn.MOCK_USER=new hn("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pl="11.8.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ia=new vc("@firebase/firestore");function Fo(){return Ia.logLevel}function ce(n,...e){if(Ia.logLevel<=Me.DEBUG){const t=e.map(C_);Ia.debug(`Firestore (${pl}): ${n}`,...t)}}function kr(n,...e){if(Ia.logLevel<=Me.ERROR){const t=e.map(C_);Ia.error(`Firestore (${pl}): ${n}`,...t)}}function tl(n,...e){if(Ia.logLevel<=Me.WARN){const t=e.map(C_);Ia.warn(`Firestore (${pl}): ${n}`,...t)}}function C_(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(n,e,t){let i="Unexpected state";typeof e=="string"?i=e:t=e,Pb(n,i,t)}function Pb(n,e,t){let i=`FIRESTORE (${pl}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{i+=" CONTEXT: "+JSON.stringify(t)}catch{i+=" CONTEXT: "+t}throw kr(i),new Error(i)}function Ye(n,e,t,i){let a="Unexpected state";typeof t=="string"?a=t:i=t,n||Pb(e,a,i)}function Re(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ne={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ge extends oi{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mb{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class D2{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(hn.UNAUTHENTICATED))}shutdown(){}}class k2{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class P2{constructor(e){this.t=e,this.currentUser=hn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Ye(this.o===void 0,42304);let i=this.i;const a=p=>this.i!==i?(i=this.i,t(p)):Promise.resolve();let l=new As;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new As,e.enqueueRetryable(()=>a(this.currentUser))};const c=()=>{const p=l;e.enqueueRetryable(async()=>{await p.promise,await a(this.currentUser)})},d=p=>{ce("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit(p=>d(p)),setTimeout(()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?d(p):(ce("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new As)}},0),c()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(i=>this.i!==e?(ce("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Ye(typeof i.accessToken=="string",31837,{l:i}),new Mb(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ye(e===null||typeof e=="string",2055,{h:e}),new hn(e)}}class M2{constructor(e,t,i){this.P=e,this.T=t,this.I=i,this.type="FirstParty",this.user=hn.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class x2{constructor(e,t,i){this.P=e,this.T=t,this.I=i}getToken(){return Promise.resolve(new M2(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(hn.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class L0{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class L2{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Cn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Ye(this.o===void 0,3512);const i=l=>{l.error!=null&&ce("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const c=l.token!==this.m;return this.m=l.token,ce("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable(()=>i(l))};const a=l=>{ce("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(l=>a(l)),setTimeout(()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?a(l):ce("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new L0(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Ye(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new L0(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V2(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xb(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lb{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const a=V2(40);for(let l=0;l<a.length;++l)i.length<20&&a[l]<t&&(i+=e.charAt(a[l]%62))}return i}}function Ne(n,e){return n<e?-1:n>e?1:0}function kg(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=n.codePointAt(t),a=e.codePointAt(t);if(i!==a){if(i<128&&a<128)return Ne(i,a);{const l=xb(),c=U2(l.encode(V0(n,t)),l.encode(V0(e,t)));return c!==0?c:Ne(i,a)}}t+=i>65535?2:1}return Ne(n.length,e.length)}function V0(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function U2(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return Ne(n[t],e[t]);return Ne(n.length,e.length)}function nl(n,e,t){return n.length===e.length&&n.every((i,a)=>t(i,e[a]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U0=-62135596800,B0=1e6;class Ut{static now(){return Ut.fromMillis(Date.now())}static fromDate(e){return Ut.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor((e-1e3*t)*B0);return new Ut(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ge(ne.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ge(ne.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<U0)throw new ge(ne.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ge(ne.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/B0}_compareTo(e){return this.seconds===e.seconds?Ne(this.nanoseconds,e.nanoseconds):Ne(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-U0;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{static fromTimestamp(e){return new Ae(e)}static min(){return new Ae(new Ut(0,0))}static max(){return new Ae(new Ut(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z0="__name__";class Ui{constructor(e,t,i){t===void 0?t=0:t>e.length&&Se(637,{offset:t,range:e.length}),i===void 0?i=e.length-t:i>e.length-t&&Se(1746,{length:i,range:e.length-t}),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return Ui.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ui?e.forEach(i=>{t.push(i)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let a=0;a<i;a++){const l=Ui.compareSegments(e.get(a),t.get(a));if(l!==0)return l}return Ne(e.length,t.length)}static compareSegments(e,t){const i=Ui.isNumericId(e),a=Ui.isNumericId(t);return i&&!a?-1:!i&&a?1:i&&a?Ui.extractNumericId(e).compare(Ui.extractNumericId(t)):kg(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return bs.fromString(e.substring(4,e.length-2))}}class ht extends Ui{construct(e,t,i){return new ht(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new ge(ne.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter(a=>a.length>0))}return new ht(t)}static emptyPath(){return new ht([])}}const B2=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class sn extends Ui{construct(e,t,i){return new sn(e,t,i)}static isValidIdentifier(e){return B2.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),sn.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===z0}static keyField(){return new sn([z0])}static fromServerFormat(e){const t=[];let i="",a=0;const l=()=>{if(i.length===0)throw new ge(ne.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let c=!1;for(;a<e.length;){const d=e[a];if(d==="\\"){if(a+1===e.length)throw new ge(ne.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[a+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new ge(ne.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=p,a+=2}else d==="`"?(c=!c,a++):d!=="."||c?(i+=d,a++):(l(),a++)}if(l(),c)throw new ge(ne.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new sn(t)}static emptyPath(){return new sn([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e){this.path=e}static fromPath(e){return new ve(ht.fromString(e))}static fromName(e){return new ve(ht.fromString(e).popFirst(5))}static empty(){return new ve(ht.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ht.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ht.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ve(new ht(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ac=-1;function z2(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,a=Ae.fromTimestamp(i===1e9?new Ut(t+1,0):new Ut(t,i));return new Os(a,ve.empty(),e)}function F2(n){return new Os(n.readTime,n.key,ac)}class Os{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new Os(Ae.min(),ve.empty(),ac)}static max(){return new Os(Ae.max(),ve.empty(),ac)}}function H2(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=ve.comparator(n.documentKey,e.documentKey),t!==0?t:Ne(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j2="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class q2{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ml(n){if(n.code!==ne.FAILED_PRECONDITION||n.message!==j2)throw n;ce("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Se(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new J((i,a)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(i,a)},this.catchCallback=l=>{this.wrapFailure(t,l).next(i,a)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof J?t:J.resolve(t)}catch(t){return J.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):J.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):J.reject(t)}static resolve(e){return new J((t,i)=>{t(e)})}static reject(e){return new J((t,i)=>{i(e)})}static waitFor(e){return new J((t,i)=>{let a=0,l=0,c=!1;e.forEach(d=>{++a,d.next(()=>{++l,c&&l===a&&t()},p=>i(p))}),c=!0,l===a&&t()})}static or(e){let t=J.resolve(!1);for(const i of e)t=t.next(a=>a?J.resolve(a):i());return t}static forEach(e,t){const i=[];return e.forEach((a,l)=>{i.push(t.call(this,a,l))}),this.waitFor(i)}static mapArray(e,t){return new J((i,a)=>{const l=e.length,c=new Array(l);let d=0;for(let p=0;p<l;p++){const m=p;t(e[m]).next(y=>{c[m]=y,++d,d===l&&i(c)},y=>a(y))}})}static doWhile(e,t){return new J((i,a)=>{const l=()=>{e()===!0?t().next(()=>{l()},a):i()};l()})}}function G2(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function gl(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.ue(i),this.ce=i=>t.writeSequenceNumber(i))}ue(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ce&&this.ce(e),e}}_d.le=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I_=-1;function yd(n){return n==null}function Vf(n){return n===0&&1/n==-1/0}function K2(n){return typeof n=="number"&&Number.isInteger(n)&&!Vf(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vb="";function $2(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=F0(e)),e=Y2(n.get(t),e);return F0(e)}function Y2(n,e){let t=e;const i=n.length;for(let a=0;a<i;a++){const l=n.charAt(a);switch(l){case"\0":t+="";break;case Vb:t+="";break;default:t+=l}}return t}function F0(n){return n+Vb+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H0(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function za(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Ub(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Dt=class Pg{constructor(e,t){this.comparator=e,this.root=t||Rs.EMPTY}insert(e,t){return new Pg(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Rs.BLACK,null,null))}remove(e){return new Pg(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Rs.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const a=this.comparator(e,i.key);if(a===0)return t+i.left.size;a<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,i)=>(e(t,i),!1))}toString(){const e=[];return this.inorderTraversal((t,i)=>(e.push(`${t}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new lf(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new lf(this.root,e,this.comparator,!1)}getReverseIterator(){return new lf(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new lf(this.root,e,this.comparator,!0)}},lf=class{constructor(e,t,i,a){this.isReverse=a,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?i(e.key,t):1,t&&a&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},Rs=class Tr{constructor(e,t,i,a,l){this.key=e,this.value=t,this.color=i??Tr.RED,this.left=a??Tr.EMPTY,this.right=l??Tr.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,a,l){return new Tr(e??this.key,t??this.value,i??this.color,a??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let a=this;const l=i(e,a.key);return a=l<0?a.copy(null,null,null,a.left.insert(e,t,i),null):l===0?a.copy(null,t,null,null,null):a.copy(null,null,null,null,a.right.insert(e,t,i)),a.fixUp()}removeMin(){if(this.left.isEmpty())return Tr.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,a=this;if(t(e,a.key)<0)a.left.isEmpty()||a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),a=a.copy(null,null,null,a.left.remove(e,t),null);else{if(a.left.isRed()&&(a=a.rotateRight()),a.right.isEmpty()||a.right.isRed()||a.right.left.isRed()||(a=a.moveRedRight()),t(e,a.key)===0){if(a.right.isEmpty())return Tr.EMPTY;i=a.right.min(),a=a.copy(i.key,i.value,null,null,a.right.removeMin())}a=a.copy(null,null,null,null,a.right.remove(e,t))}return a.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Tr.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Tr.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Se(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Se(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Se(27949);return e+(this.isRed()?0:1)}};Rs.EMPTY=null,Rs.RED=!0,Rs.BLACK=!1;Rs.EMPTY=new class{constructor(){this.size=0}get key(){throw Se(57766)}get value(){throw Se(16141)}get color(){throw Se(16727)}get left(){throw Se(29726)}get right(){throw Se(36894)}copy(e,t,i,a,l){return this}insert(e,t,i){return new Rs(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e){this.comparator=e,this.data=new Dt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,i)=>(e(t),!1))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const a=i.getNext();if(this.comparator(a.key,e[1])>=0)return;t(a.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new j0(this.data.getIterator())}getIteratorFrom(e){return new j0(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(i=>{t=t.add(i)}),t}isEqual(e){if(!(e instanceof Bt)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const a=t.getNext().key,l=i.getNext().key;if(this.comparator(a,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Bt(this.comparator);return t.data=e,t}}class j0{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(e){this.fields=e,e.sort(sn.comparator)}static empty(){return new mi([])}unionWith(e){let t=new Bt(sn.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new mi(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return nl(this.fields,e.fields,(t,i)=>t.isEqual(i))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bb extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(a){try{return atob(a)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new Bb("Invalid base64 string: "+l):l}}(e);return new an(t)}static fromUint8Array(e){const t=function(a){let l="";for(let c=0;c<a.length;++c)l+=String.fromCharCode(a[c]);return l}(e);return new an(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const i=new Uint8Array(t.length);for(let a=0;a<t.length;a++)i[a]=t.charCodeAt(a);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ne(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}an.EMPTY_BYTE_STRING=new an("");const Q2=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ds(n){if(Ye(!!n,39018),typeof n=="string"){let e=0;const t=Q2.exec(n);if(Ye(!!t,46558,{timestamp:n}),t[1]){let a=t[1];a=(a+"000000000").substr(0,9),e=Number(a)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:wt(n.seconds),nanos:wt(n.nanos)}}function wt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function ks(n){return typeof n=="string"?an.fromBase64String(n):an.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zb="server_timestamp",Fb="__type__",Hb="__previous_value__",jb="__local_write_time__";function N_(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[Fb])===null||t===void 0?void 0:t.stringValue)===zb}function vd(n){const e=n.mapValue.fields[Hb];return N_(e)?vd(e):e}function oc(n){const e=Ds(n.mapValue.fields[jb].timestampValue);return new Ut(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W2{constructor(e,t,i,a,l,c,d,p,m,y){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=a,this.ssl=l,this.forceLongPolling=c,this.autoDetectLongPolling=d,this.longPollingOptions=p,this.useFetchStreams=m,this.isUsingEmulator=y}}const Uf="(default)";class lc{constructor(e,t){this.projectId=e,this.database=t||Uf}static empty(){return new lc("","")}get isDefaultDatabase(){return this.database===Uf}isEqual(e){return e instanceof lc&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qb="__type__",X2="__max__",uf={mapValue:{}},Gb="__vector__",Bf="value";function Ps(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?N_(n)?4:J2(n)?9007199254740991:Z2(n)?10:11:Se(28295,{value:n})}function qi(n,e){if(n===e)return!0;const t=Ps(n);if(t!==Ps(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return oc(n).isEqual(oc(e));case 3:return function(a,l){if(typeof a.timestampValue=="string"&&typeof l.timestampValue=="string"&&a.timestampValue.length===l.timestampValue.length)return a.timestampValue===l.timestampValue;const c=Ds(a.timestampValue),d=Ds(l.timestampValue);return c.seconds===d.seconds&&c.nanos===d.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(a,l){return ks(a.bytesValue).isEqual(ks(l.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(a,l){return wt(a.geoPointValue.latitude)===wt(l.geoPointValue.latitude)&&wt(a.geoPointValue.longitude)===wt(l.geoPointValue.longitude)}(n,e);case 2:return function(a,l){if("integerValue"in a&&"integerValue"in l)return wt(a.integerValue)===wt(l.integerValue);if("doubleValue"in a&&"doubleValue"in l){const c=wt(a.doubleValue),d=wt(l.doubleValue);return c===d?Vf(c)===Vf(d):isNaN(c)&&isNaN(d)}return!1}(n,e);case 9:return nl(n.arrayValue.values||[],e.arrayValue.values||[],qi);case 10:case 11:return function(a,l){const c=a.mapValue.fields||{},d=l.mapValue.fields||{};if(H0(c)!==H0(d))return!1;for(const p in c)if(c.hasOwnProperty(p)&&(d[p]===void 0||!qi(c[p],d[p])))return!1;return!0}(n,e);default:return Se(52216,{left:n})}}function uc(n,e){return(n.values||[]).find(t=>qi(t,e))!==void 0}function il(n,e){if(n===e)return 0;const t=Ps(n),i=Ps(e);if(t!==i)return Ne(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ne(n.booleanValue,e.booleanValue);case 2:return function(l,c){const d=wt(l.integerValue||l.doubleValue),p=wt(c.integerValue||c.doubleValue);return d<p?-1:d>p?1:d===p?0:isNaN(d)?isNaN(p)?0:-1:1}(n,e);case 3:return q0(n.timestampValue,e.timestampValue);case 4:return q0(oc(n),oc(e));case 5:return kg(n.stringValue,e.stringValue);case 6:return function(l,c){const d=ks(l),p=ks(c);return d.compareTo(p)}(n.bytesValue,e.bytesValue);case 7:return function(l,c){const d=l.split("/"),p=c.split("/");for(let m=0;m<d.length&&m<p.length;m++){const y=Ne(d[m],p[m]);if(y!==0)return y}return Ne(d.length,p.length)}(n.referenceValue,e.referenceValue);case 8:return function(l,c){const d=Ne(wt(l.latitude),wt(c.latitude));return d!==0?d:Ne(wt(l.longitude),wt(c.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return G0(n.arrayValue,e.arrayValue);case 10:return function(l,c){var d,p,m,y;const T=l.fields||{},S=c.fields||{},I=(d=T[Bf])===null||d===void 0?void 0:d.arrayValue,N=(p=S[Bf])===null||p===void 0?void 0:p.arrayValue,H=Ne(((m=I==null?void 0:I.values)===null||m===void 0?void 0:m.length)||0,((y=N==null?void 0:N.values)===null||y===void 0?void 0:y.length)||0);return H!==0?H:G0(I,N)}(n.mapValue,e.mapValue);case 11:return function(l,c){if(l===uf.mapValue&&c===uf.mapValue)return 0;if(l===uf.mapValue)return 1;if(c===uf.mapValue)return-1;const d=l.fields||{},p=Object.keys(d),m=c.fields||{},y=Object.keys(m);p.sort(),y.sort();for(let T=0;T<p.length&&T<y.length;++T){const S=kg(p[T],y[T]);if(S!==0)return S;const I=il(d[p[T]],m[y[T]]);if(I!==0)return I}return Ne(p.length,y.length)}(n.mapValue,e.mapValue);default:throw Se(23264,{Pe:t})}}function q0(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Ne(n,e);const t=Ds(n),i=Ds(e),a=Ne(t.seconds,i.seconds);return a!==0?a:Ne(t.nanos,i.nanos)}function G0(n,e){const t=n.values||[],i=e.values||[];for(let a=0;a<t.length&&a<i.length;++a){const l=il(t[a],i[a]);if(l)return l}return Ne(t.length,i.length)}function rl(n){return Mg(n)}function Mg(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const i=Ds(t);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return ks(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return ve.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let i="[",a=!0;for(const l of t.values||[])a?a=!1:i+=",",i+=Mg(l);return i+"]"}(n.arrayValue):"mapValue"in n?function(t){const i=Object.keys(t.fields||{}).sort();let a="{",l=!0;for(const c of i)l?l=!1:a+=",",a+=`${c}:${Mg(t.fields[c])}`;return a+"}"}(n.mapValue):Se(61005,{value:n})}function Tf(n){switch(Ps(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=vd(n);return e?16+Tf(e):16;case 5:return 2*n.stringValue.length;case 6:return ks(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(i){return(i.values||[]).reduce((a,l)=>a+Tf(l),0)}(n.arrayValue);case 10:case 11:return function(i){let a=0;return za(i.fields,(l,c)=>{a+=l.length+Tf(c)}),a}(n.mapValue);default:throw Se(13486,{value:n})}}function xg(n){return!!n&&"integerValue"in n}function O_(n){return!!n&&"arrayValue"in n}function K0(n){return!!n&&"nullValue"in n}function $0(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Sf(n){return!!n&&"mapValue"in n}function Z2(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[qb])===null||t===void 0?void 0:t.stringValue)===Gb}function ju(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return za(n.mapValue.fields,(t,i)=>e.mapValue.fields[t]=ju(i)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ju(n.arrayValue.values[t]);return e}return Object.assign({},n)}function J2(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===X2}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e){this.value=e}static empty(){return new ii({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!Sf(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ju(t)}setAll(e){let t=sn.emptyPath(),i={},a=[];e.forEach((c,d)=>{if(!t.isImmediateParentOf(d)){const p=this.getFieldsMap(t);this.applyChanges(p,i,a),i={},a=[],t=d.popLast()}c?i[d.lastSegment()]=ju(c):a.push(d.lastSegment())});const l=this.getFieldsMap(t);this.applyChanges(l,i,a)}delete(e){const t=this.field(e.popLast());Sf(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return qi(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let a=t.mapValue.fields[e.get(i)];Sf(a)&&a.mapValue.fields||(a={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=a),t=a}return t.mapValue.fields}applyChanges(e,t,i){za(t,(a,l)=>e[a]=l);for(const a of i)delete e[a]}clone(){return new ii(ju(this.value))}}function Kb(n){const e=[];return za(n.fields,(t,i)=>{const a=new sn([t]);if(Sf(i)){const l=Kb(i.mapValue).fields;if(l.length===0)e.push(a);else for(const c of l)e.push(a.child(c))}else e.push(a)}),new mi(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(e,t,i,a,l,c,d){this.key=e,this.documentType=t,this.version=i,this.readTime=a,this.createTime=l,this.data=c,this.documentState=d}static newInvalidDocument(e){return new fn(e,0,Ae.min(),Ae.min(),Ae.min(),ii.empty(),0)}static newFoundDocument(e,t,i,a){return new fn(e,1,t,Ae.min(),i,a,0)}static newNoDocument(e,t){return new fn(e,2,t,Ae.min(),Ae.min(),ii.empty(),0)}static newUnknownDocument(e,t){return new fn(e,3,t,Ae.min(),Ae.min(),ii.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ae.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ii.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ii.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ae.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof fn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new fn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf{constructor(e,t){this.position=e,this.inclusive=t}}function Y0(n,e,t){let i=0;for(let a=0;a<n.position.length;a++){const l=e[a],c=n.position[a];if(l.field.isKeyField()?i=ve.comparator(ve.fromName(c.referenceValue),t.key):i=il(c,t.data.field(l.field)),l.dir==="desc"&&(i*=-1),i!==0)break}return i}function Q0(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!qi(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff{constructor(e,t="asc"){this.field=e,this.dir=t}}function ek(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $b{}class Vt extends $b{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new nk(e,t,i):t==="array-contains"?new sk(e,i):t==="in"?new ak(e,i):t==="not-in"?new ok(e,i):t==="array-contains-any"?new lk(e,i):new Vt(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new ik(e,i):new rk(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(il(t,this.value)):t!==null&&Ps(this.value)===Ps(t)&&this.matchesComparison(il(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Se(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Gi extends $b{constructor(e,t){super(),this.filters=e,this.op=t,this.Te=null}static create(e,t){return new Gi(e,t)}matches(e){return Yb(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function Yb(n){return n.op==="and"}function Qb(n){return tk(n)&&Yb(n)}function tk(n){for(const e of n.filters)if(e instanceof Gi)return!1;return!0}function Lg(n){if(n instanceof Vt)return n.field.canonicalString()+n.op.toString()+rl(n.value);if(Qb(n))return n.filters.map(e=>Lg(e)).join(",");{const e=n.filters.map(t=>Lg(t)).join(",");return`${n.op}(${e})`}}function Wb(n,e){return n instanceof Vt?function(i,a){return a instanceof Vt&&i.op===a.op&&i.field.isEqual(a.field)&&qi(i.value,a.value)}(n,e):n instanceof Gi?function(i,a){return a instanceof Gi&&i.op===a.op&&i.filters.length===a.filters.length?i.filters.reduce((l,c,d)=>l&&Wb(c,a.filters[d]),!0):!1}(n,e):void Se(19439)}function Xb(n){return n instanceof Vt?function(t){return`${t.field.canonicalString()} ${t.op} ${rl(t.value)}`}(n):n instanceof Gi?function(t){return t.op.toString()+" {"+t.getFilters().map(Xb).join(" ,")+"}"}(n):"Filter"}class nk extends Vt{constructor(e,t,i){super(e,t,i),this.key=ve.fromName(i.referenceValue)}matches(e){const t=ve.comparator(e.key,this.key);return this.matchesComparison(t)}}class ik extends Vt{constructor(e,t){super(e,"in",t),this.keys=Zb("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class rk extends Vt{constructor(e,t){super(e,"not-in",t),this.keys=Zb("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Zb(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(i=>ve.fromName(i.referenceValue))}class sk extends Vt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return O_(t)&&uc(t.arrayValue,this.value)}}class ak extends Vt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&uc(this.value.arrayValue,t)}}class ok extends Vt{constructor(e,t){super(e,"not-in",t)}matches(e){if(uc(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!uc(this.value.arrayValue,t)}}class lk extends Vt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!O_(t)||!t.arrayValue.values)&&t.arrayValue.values.some(i=>uc(this.value.arrayValue,i))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uk{constructor(e,t=null,i=[],a=[],l=null,c=null,d=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=a,this.limit=l,this.startAt=c,this.endAt=d,this.Ie=null}}function W0(n,e=null,t=[],i=[],a=null,l=null,c=null){return new uk(n,e,t,i,a,l,c)}function D_(n){const e=Re(n);if(e.Ie===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(i=>Lg(i)).join(","),t+="|ob:",t+=e.orderBy.map(i=>function(l){return l.field.canonicalString()+l.dir}(i)).join(","),yd(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(i=>rl(i)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(i=>rl(i)).join(",")),e.Ie=t}return e.Ie}function k_(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!ek(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Wb(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Q0(n.startAt,e.startAt)&&Q0(n.endAt,e.endAt)}function Vg(n){return ve.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed{constructor(e,t=null,i=[],a=[],l=null,c="F",d=null,p=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=a,this.limit=l,this.limitType=c,this.startAt=d,this.endAt=p,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function ck(n,e,t,i,a,l,c,d){return new Ed(n,e,t,i,a,l,c,d)}function Jb(n){return new Ed(n)}function X0(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function hk(n){return n.collectionGroup!==null}function qu(n){const e=Re(n);if(e.Ee===null){e.Ee=[];const t=new Set;for(const l of e.explicitOrderBy)e.Ee.push(l),t.add(l.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let d=new Bt(sn.comparator);return c.filters.forEach(p=>{p.getFlattenedFilters().forEach(m=>{m.isInequality()&&(d=d.add(m.field))})}),d})(e).forEach(l=>{t.has(l.canonicalString())||l.isKeyField()||e.Ee.push(new Ff(l,i))}),t.has(sn.keyField().canonicalString())||e.Ee.push(new Ff(sn.keyField(),i))}return e.Ee}function Fi(n){const e=Re(n);return e.de||(e.de=fk(e,qu(n))),e.de}function fk(n,e){if(n.limitType==="F")return W0(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(a=>{const l=a.dir==="desc"?"asc":"desc";return new Ff(a.field,l)});const t=n.endAt?new zf(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new zf(n.startAt.position,n.startAt.inclusive):null;return W0(n.path,n.collectionGroup,e,n.filters,n.limit,t,i)}}function Ug(n,e,t){return new Ed(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Td(n,e){return k_(Fi(n),Fi(e))&&n.limitType===e.limitType}function eA(n){return`${D_(Fi(n))}|lt:${n.limitType}`}function Ho(n){return`Query(target=${function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map(a=>Xb(a)).join(", ")}]`),yd(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map(a=>function(c){return`${c.field.canonicalString()} (${c.dir})`}(a)).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map(a=>rl(a)).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map(a=>rl(a)).join(",")),`Target(${i})`}(Fi(n))}; limitType=${n.limitType})`}function Sd(n,e){return e.isFoundDocument()&&function(i,a){const l=a.key.path;return i.collectionGroup!==null?a.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(l):ve.isDocumentKey(i.path)?i.path.isEqual(l):i.path.isImmediateParentOf(l)}(n,e)&&function(i,a){for(const l of qu(i))if(!l.field.isKeyField()&&a.data.field(l.field)===null)return!1;return!0}(n,e)&&function(i,a){for(const l of i.filters)if(!l.matches(a))return!1;return!0}(n,e)&&function(i,a){return!(i.startAt&&!function(c,d,p){const m=Y0(c,d,p);return c.inclusive?m<=0:m<0}(i.startAt,qu(i),a)||i.endAt&&!function(c,d,p){const m=Y0(c,d,p);return c.inclusive?m>=0:m>0}(i.endAt,qu(i),a))}(n,e)}function dk(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function tA(n){return(e,t)=>{let i=!1;for(const a of qu(n)){const l=pk(a,e,t);if(l!==0)return l;i=i||a.field.isKeyField()}return 0}}function pk(n,e,t){const i=n.field.isKeyField()?ve.comparator(e.key,t.key):function(l,c,d){const p=c.data.field(l),m=d.data.field(l);return p!==null&&m!==null?il(p,m):Se(42886)}(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return Se(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[a,l]of i)if(this.equalsFn(a,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),a=this.inner[i];if(a===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let l=0;l<a.length;l++)if(this.equalsFn(a[l][0],e))return void(a[l]=[e,t]);a.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let a=0;a<i.length;a++)if(this.equalsFn(i[a][0],e))return i.length===1?delete this.inner[t]:i.splice(a,1),this.innerSize--,!0;return!1}forEach(e){za(this.inner,(t,i)=>{for(const[a,l]of i)e(a,l)})}isEmpty(){return Ub(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mk=new Dt(ve.comparator);function Pr(){return mk}const nA=new Dt(ve.comparator);function Bu(...n){let e=nA;for(const t of n)e=e.insert(t.key,t);return e}function iA(n){let e=nA;return n.forEach((t,i)=>e=e.insert(t,i.overlayedDocument)),e}function wa(){return Gu()}function rA(){return Gu()}function Gu(){return new Fa(n=>n.toString(),(n,e)=>n.isEqual(e))}const gk=new Dt(ve.comparator),_k=new Bt(ve.comparator);function xe(...n){let e=_k;for(const t of n)e=e.add(t);return e}const yk=new Bt(Ne);function vk(){return yk}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P_(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Vf(e)?"-0":e}}function sA(n){return{integerValue:""+n}}function Ek(n,e){return K2(e)?sA(e):P_(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd{constructor(){this._=void 0}}function Tk(n,e,t){return n instanceof cc?function(a,l){const c={fields:{[Fb]:{stringValue:zb},[jb]:{timestampValue:{seconds:a.seconds,nanos:a.nanoseconds}}}};return l&&N_(l)&&(l=vd(l)),l&&(c.fields[Hb]=l),{mapValue:c}}(t,e):n instanceof hc?oA(n,e):n instanceof fc?lA(n,e):function(a,l){const c=aA(a,l),d=Z0(c)+Z0(a.Re);return xg(c)&&xg(a.Re)?sA(d):P_(a.serializer,d)}(n,e)}function Sk(n,e,t){return n instanceof hc?oA(n,e):n instanceof fc?lA(n,e):t}function aA(n,e){return n instanceof Hf?function(i){return xg(i)||function(l){return!!l&&"doubleValue"in l}(i)}(e)?e:{integerValue:0}:null}class cc extends wd{}class hc extends wd{constructor(e){super(),this.elements=e}}function oA(n,e){const t=uA(e);for(const i of n.elements)t.some(a=>qi(a,i))||t.push(i);return{arrayValue:{values:t}}}class fc extends wd{constructor(e){super(),this.elements=e}}function lA(n,e){let t=uA(e);for(const i of n.elements)t=t.filter(a=>!qi(a,i));return{arrayValue:{values:t}}}class Hf extends wd{constructor(e,t){super(),this.serializer=e,this.Re=t}}function Z0(n){return wt(n.integerValue||n.doubleValue)}function uA(n){return O_(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wk{constructor(e,t){this.field=e,this.transform=t}}function bk(n,e){return n.field.isEqual(e.field)&&function(i,a){return i instanceof hc&&a instanceof hc||i instanceof fc&&a instanceof fc?nl(i.elements,a.elements,qi):i instanceof Hf&&a instanceof Hf?qi(i.Re,a.Re):i instanceof cc&&a instanceof cc}(n.transform,e.transform)}class Ak{constructor(e,t){this.version=e,this.transformResults=t}}class Cr{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Cr}static exists(e){return new Cr(void 0,e)}static updateTime(e){return new Cr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function wf(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class bd{}function cA(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new fA(n.key,Cr.none()):new Tc(n.key,n.data,Cr.none());{const t=n.data,i=ii.empty();let a=new Bt(sn.comparator);for(let l of e.fields)if(!a.has(l)){let c=t.field(l);c===null&&l.length>1&&(l=l.popLast(),c=t.field(l)),c===null?i.delete(l):i.set(l,c),a=a.add(l)}return new Ha(n.key,i,new mi(a.toArray()),Cr.none())}}function Rk(n,e,t){n instanceof Tc?function(a,l,c){const d=a.value.clone(),p=eS(a.fieldTransforms,l,c.transformResults);d.setAll(p),l.convertToFoundDocument(c.version,d).setHasCommittedMutations()}(n,e,t):n instanceof Ha?function(a,l,c){if(!wf(a.precondition,l))return void l.convertToUnknownDocument(c.version);const d=eS(a.fieldTransforms,l,c.transformResults),p=l.data;p.setAll(hA(a)),p.setAll(d),l.convertToFoundDocument(c.version,p).setHasCommittedMutations()}(n,e,t):function(a,l,c){l.convertToNoDocument(c.version).setHasCommittedMutations()}(0,e,t)}function Ku(n,e,t,i){return n instanceof Tc?function(l,c,d,p){if(!wf(l.precondition,c))return d;const m=l.value.clone(),y=tS(l.fieldTransforms,p,c);return m.setAll(y),c.convertToFoundDocument(c.version,m).setHasLocalMutations(),null}(n,e,t,i):n instanceof Ha?function(l,c,d,p){if(!wf(l.precondition,c))return d;const m=tS(l.fieldTransforms,p,c),y=c.data;return y.setAll(hA(l)),y.setAll(m),c.convertToFoundDocument(c.version,y).setHasLocalMutations(),d===null?null:d.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map(T=>T.field))}(n,e,t,i):function(l,c,d){return wf(l.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):d}(n,e,t)}function Ck(n,e){let t=null;for(const i of n.fieldTransforms){const a=e.data.field(i.field),l=aA(i.transform,a||null);l!=null&&(t===null&&(t=ii.empty()),t.set(i.field,l))}return t||null}function J0(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(i,a){return i===void 0&&a===void 0||!(!i||!a)&&nl(i,a,(l,c)=>bk(l,c))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Tc extends bd{constructor(e,t,i,a=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=a,this.type=0}getFieldMask(){return null}}class Ha extends bd{constructor(e,t,i,a,l=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=a,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function hA(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}}),e}function eS(n,e,t){const i=new Map;Ye(n.length===t.length,32656,{Ve:t.length,me:n.length});for(let a=0;a<t.length;a++){const l=n[a],c=l.transform,d=e.data.field(l.field);i.set(l.field,Sk(c,d,t[a]))}return i}function tS(n,e,t){const i=new Map;for(const a of n){const l=a.transform,c=t.data.field(a.field);i.set(a.field,Tk(l,c,e))}return i}class fA extends bd{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Ik extends bd{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nk{constructor(e,t,i,a){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=a}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let a=0;a<this.mutations.length;a++){const l=this.mutations[a];l.key.isEqual(e.key)&&Rk(l,e,i[a])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=Ku(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=Ku(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=rA();return this.mutations.forEach(a=>{const l=e.get(a.key),c=l.overlayedDocument;let d=this.applyToLocalView(c,l.mutatedFields);d=t.has(a.key)?null:d;const p=cA(c,d);p!==null&&i.set(a.key,p),c.isValidDocument()||c.convertToNoDocument(Ae.min())}),i}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),xe())}isEqual(e){return this.batchId===e.batchId&&nl(this.mutations,e.mutations,(t,i)=>J0(t,i))&&nl(this.baseMutations,e.baseMutations,(t,i)=>J0(t,i))}}class M_{constructor(e,t,i,a){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=a}static from(e,t,i){Ye(e.mutations.length===i.length,58842,{fe:e.mutations.length,ge:i.length});let a=function(){return gk}();const l=e.mutations;for(let c=0;c<l.length;c++)a=a.insert(l[c].key,i[c].version);return new M_(e,t,i,a)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ok{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dk{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Nt,ze;function kk(n){switch(n){case ne.OK:return Se(64938);case ne.CANCELLED:case ne.UNKNOWN:case ne.DEADLINE_EXCEEDED:case ne.RESOURCE_EXHAUSTED:case ne.INTERNAL:case ne.UNAVAILABLE:case ne.UNAUTHENTICATED:return!1;case ne.INVALID_ARGUMENT:case ne.NOT_FOUND:case ne.ALREADY_EXISTS:case ne.PERMISSION_DENIED:case ne.FAILED_PRECONDITION:case ne.ABORTED:case ne.OUT_OF_RANGE:case ne.UNIMPLEMENTED:case ne.DATA_LOSS:return!0;default:return Se(15467,{code:n})}}function dA(n){if(n===void 0)return kr("GRPC error has no .code"),ne.UNKNOWN;switch(n){case Nt.OK:return ne.OK;case Nt.CANCELLED:return ne.CANCELLED;case Nt.UNKNOWN:return ne.UNKNOWN;case Nt.DEADLINE_EXCEEDED:return ne.DEADLINE_EXCEEDED;case Nt.RESOURCE_EXHAUSTED:return ne.RESOURCE_EXHAUSTED;case Nt.INTERNAL:return ne.INTERNAL;case Nt.UNAVAILABLE:return ne.UNAVAILABLE;case Nt.UNAUTHENTICATED:return ne.UNAUTHENTICATED;case Nt.INVALID_ARGUMENT:return ne.INVALID_ARGUMENT;case Nt.NOT_FOUND:return ne.NOT_FOUND;case Nt.ALREADY_EXISTS:return ne.ALREADY_EXISTS;case Nt.PERMISSION_DENIED:return ne.PERMISSION_DENIED;case Nt.FAILED_PRECONDITION:return ne.FAILED_PRECONDITION;case Nt.ABORTED:return ne.ABORTED;case Nt.OUT_OF_RANGE:return ne.OUT_OF_RANGE;case Nt.UNIMPLEMENTED:return ne.UNIMPLEMENTED;case Nt.DATA_LOSS:return ne.DATA_LOSS;default:return Se(39323,{code:n})}}(ze=Nt||(Nt={}))[ze.OK=0]="OK",ze[ze.CANCELLED=1]="CANCELLED",ze[ze.UNKNOWN=2]="UNKNOWN",ze[ze.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ze[ze.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ze[ze.NOT_FOUND=5]="NOT_FOUND",ze[ze.ALREADY_EXISTS=6]="ALREADY_EXISTS",ze[ze.PERMISSION_DENIED=7]="PERMISSION_DENIED",ze[ze.UNAUTHENTICATED=16]="UNAUTHENTICATED",ze[ze.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ze[ze.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ze[ze.ABORTED=10]="ABORTED",ze[ze.OUT_OF_RANGE=11]="OUT_OF_RANGE",ze[ze.UNIMPLEMENTED=12]="UNIMPLEMENTED",ze[ze.INTERNAL=13]="INTERNAL",ze[ze.UNAVAILABLE=14]="UNAVAILABLE",ze[ze.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pk=new bs([4294967295,4294967295],0);function nS(n){const e=xb().encode(n),t=new Cb;return t.update(e),new Uint8Array(t.digest())}function iS(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),a=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new bs([t,i],0),new bs([a,l],0)]}class x_{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new zu(`Invalid padding: ${t}`);if(i<0)throw new zu(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new zu(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new zu(`Invalid padding when bitmap length is 0: ${t}`);this.pe=8*e.length-t,this.ye=bs.fromNumber(this.pe)}we(e,t,i){let a=e.add(t.multiply(bs.fromNumber(i)));return a.compare(Pk)===1&&(a=new bs([a.getBits(0),a.getBits(1)],0)),a.modulo(this.ye).toNumber()}Se(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.pe===0)return!1;const t=nS(e),[i,a]=iS(t);for(let l=0;l<this.hashCount;l++){const c=this.we(i,a,l);if(!this.Se(c))return!1}return!0}static create(e,t,i){const a=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),c=new x_(l,a,t);return i.forEach(d=>c.insert(d)),c}insert(e){if(this.pe===0)return;const t=nS(e),[i,a]=iS(t);for(let l=0;l<this.hashCount;l++){const c=this.we(i,a,l);this.be(c)}}be(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class zu extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{constructor(e,t,i,a,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=a,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const a=new Map;return a.set(e,Sc.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new Ad(Ae.min(),a,new Dt(Ne),Pr(),xe())}}class Sc{constructor(e,t,i,a,l){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=a,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new Sc(i,t,xe(),xe(),xe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf{constructor(e,t,i,a){this.De=e,this.removedTargetIds=t,this.key=i,this.ve=a}}class pA{constructor(e,t){this.targetId=e,this.Ce=t}}class mA{constructor(e,t,i=an.EMPTY_BYTE_STRING,a=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=a}}class rS{constructor(){this.Fe=0,this.Me=sS(),this.xe=an.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(e){e.approximateByteSize()>0&&(this.Ne=!0,this.xe=e)}qe(){let e=xe(),t=xe(),i=xe();return this.Me.forEach((a,l)=>{switch(l){case 0:e=e.add(a);break;case 2:t=t.add(a);break;case 1:i=i.add(a);break;default:Se(38017,{changeType:l})}}),new Sc(this.xe,this.Oe,e,t,i)}Qe(){this.Ne=!1,this.Me=sS()}$e(e,t){this.Ne=!0,this.Me=this.Me.insert(e,t)}Ue(e){this.Ne=!0,this.Me=this.Me.remove(e)}Ke(){this.Fe+=1}We(){this.Fe-=1,Ye(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class Mk{constructor(e){this.ze=e,this.je=new Map,this.He=Pr(),this.Je=cf(),this.Ye=cf(),this.Ze=new Dt(Ne)}Xe(e){for(const t of e.De)e.ve&&e.ve.isFoundDocument()?this.et(t,e.ve):this.tt(t,e.key,e.ve);for(const t of e.removedTargetIds)this.tt(t,e.key,e.ve)}nt(e){this.forEachTarget(e,t=>{const i=this.rt(t);switch(e.state){case 0:this.it(t)&&i.ke(e.resumeToken);break;case 1:i.We(),i.Be||i.Qe(),i.ke(e.resumeToken);break;case 2:i.We(),i.Be||this.removeTarget(t);break;case 3:this.it(t)&&(i.Ge(),i.ke(e.resumeToken));break;case 4:this.it(t)&&(this.st(t),i.ke(e.resumeToken));break;default:Se(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.je.forEach((i,a)=>{this.it(a)&&t(a)})}ot(e){const t=e.targetId,i=e.Ce.count,a=this._t(t);if(a){const l=a.target;if(Vg(l))if(i===0){const c=new ve(l.path);this.tt(t,c,fn.newNoDocument(c,Ae.min()))}else Ye(i===1,20013,{expectedCount:i});else{const c=this.ut(t);if(c!==i){const d=this.ct(e),p=d?this.lt(d,e,c):1;if(p!==0){this.st(t);const m=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,m)}}}}}ct(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:a=0},hashCount:l=0}=t;let c,d;try{c=ks(i).toUint8Array()}catch(p){if(p instanceof Bb)return tl("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{d=new x_(c,a,l)}catch(p){return tl(p instanceof zu?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return d.pe===0?null:d}lt(e,t,i){return t.Ce.count===i-this.Tt(e,t.targetId)?0:2}Tt(e,t){const i=this.ze.getRemoteKeysForTarget(t);let a=0;return i.forEach(l=>{const c=this.ze.Pt(),d=`projects/${c.projectId}/databases/${c.database}/documents/${l.path.canonicalString()}`;e.mightContain(d)||(this.tt(t,l,null),a++)}),a}It(e){const t=new Map;this.je.forEach((l,c)=>{const d=this._t(c);if(d){if(l.current&&Vg(d.target)){const p=new ve(d.target.path);this.Et(p).has(c)||this.dt(c,p)||this.tt(c,p,fn.newNoDocument(p,e))}l.Le&&(t.set(c,l.qe()),l.Qe())}});let i=xe();this.Ye.forEach((l,c)=>{let d=!0;c.forEachWhile(p=>{const m=this._t(p);return!m||m.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)}),d&&(i=i.add(l))}),this.He.forEach((l,c)=>c.setReadTime(e));const a=new Ad(e,t,this.Ze,this.He,i);return this.He=Pr(),this.Je=cf(),this.Ye=cf(),this.Ze=new Dt(Ne),a}et(e,t){if(!this.it(e))return;const i=this.dt(e,t.key)?2:0;this.rt(e).$e(t.key,i),this.He=this.He.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Et(t.key).add(e)),this.Ye=this.Ye.insert(t.key,this.At(t.key).add(e))}tt(e,t,i){if(!this.it(e))return;const a=this.rt(e);this.dt(e,t)?a.$e(t,1):a.Ue(t),this.Ye=this.Ye.insert(t,this.At(t).delete(e)),this.Ye=this.Ye.insert(t,this.At(t).add(e)),i&&(this.He=this.He.insert(t,i))}removeTarget(e){this.je.delete(e)}ut(e){const t=this.rt(e).qe();return this.ze.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ke(e){this.rt(e).Ke()}rt(e){let t=this.je.get(e);return t||(t=new rS,this.je.set(e,t)),t}At(e){let t=this.Ye.get(e);return t||(t=new Bt(Ne),this.Ye=this.Ye.insert(e,t)),t}Et(e){let t=this.Je.get(e);return t||(t=new Bt(Ne),this.Je=this.Je.insert(e,t)),t}it(e){const t=this._t(e)!==null;return t||ce("WatchChangeAggregator","Detected inactive target",e),t}_t(e){const t=this.je.get(e);return t&&t.Be?null:this.ze.Rt(e)}st(e){this.je.set(e,new rS),this.ze.getRemoteKeysForTarget(e).forEach(t=>{this.tt(e,t,null)})}dt(e,t){return this.ze.getRemoteKeysForTarget(e).has(t)}}function cf(){return new Dt(ve.comparator)}function sS(){return new Dt(ve.comparator)}const xk={asc:"ASCENDING",desc:"DESCENDING"},Lk={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Vk={and:"AND",or:"OR"};class Uk{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Bg(n,e){return n.useProto3Json||yd(e)?e:{value:e}}function jf(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function gA(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Bk(n,e){return jf(n,e.toTimestamp())}function Hi(n){return Ye(!!n,49232),Ae.fromTimestamp(function(t){const i=Ds(t);return new Ut(i.seconds,i.nanos)}(n))}function L_(n,e){return zg(n,e).canonicalString()}function zg(n,e){const t=function(a){return new ht(["projects",a.projectId,"databases",a.database])}(n).child("documents");return e===void 0?t:t.child(e)}function _A(n){const e=ht.fromString(n);return Ye(SA(e),10190,{key:e.toString()}),e}function Fg(n,e){return L_(n.databaseId,e.path)}function eg(n,e){const t=_A(e);if(t.get(1)!==n.databaseId.projectId)throw new ge(ne.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new ge(ne.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new ve(vA(t))}function yA(n,e){return L_(n.databaseId,e)}function zk(n){const e=_A(n);return e.length===4?ht.emptyPath():vA(e)}function Hg(n){return new ht(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function vA(n){return Ye(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function aS(n,e,t){return{name:Fg(n,e),fields:t.value.mapValue.fields}}function Fk(n,e){let t;if("targetChange"in e){e.targetChange;const i=function(m){return m==="NO_CHANGE"?0:m==="ADD"?1:m==="REMOVE"?2:m==="CURRENT"?3:m==="RESET"?4:Se(39313,{state:m})}(e.targetChange.targetChangeType||"NO_CHANGE"),a=e.targetChange.targetIds||[],l=function(m,y){return m.useProto3Json?(Ye(y===void 0||typeof y=="string",58123),an.fromBase64String(y||"")):(Ye(y===void 0||y instanceof Buffer||y instanceof Uint8Array,16193),an.fromUint8Array(y||new Uint8Array))}(n,e.targetChange.resumeToken),c=e.targetChange.cause,d=c&&function(m){const y=m.code===void 0?ne.UNKNOWN:dA(m.code);return new ge(y,m.message||"")}(c);t=new mA(i,a,l,d||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const a=eg(n,i.document.name),l=Hi(i.document.updateTime),c=i.document.createTime?Hi(i.document.createTime):Ae.min(),d=new ii({mapValue:{fields:i.document.fields}}),p=fn.newFoundDocument(a,l,c,d),m=i.targetIds||[],y=i.removedTargetIds||[];t=new bf(m,y,p.key,p)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const a=eg(n,i.document),l=i.readTime?Hi(i.readTime):Ae.min(),c=fn.newNoDocument(a,l),d=i.removedTargetIds||[];t=new bf([],d,c.key,c)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const a=eg(n,i.document),l=i.removedTargetIds||[];t=new bf([],l,a,null)}else{if(!("filter"in e))return Se(11601,{Vt:e});{e.filter;const i=e.filter;i.targetId;const{count:a=0,unchangedNames:l}=i,c=new Dk(a,l),d=i.targetId;t=new pA(d,c)}}return t}function Hk(n,e){let t;if(e instanceof Tc)t={update:aS(n,e.key,e.value)};else if(e instanceof fA)t={delete:Fg(n,e.key)};else if(e instanceof Ha)t={update:aS(n,e.key,e.data),updateMask:Xk(e.fieldMask)};else{if(!(e instanceof Ik))return Se(16599,{ft:e.type});t={verify:Fg(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(i=>function(l,c){const d=c.transform;if(d instanceof cc)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof hc)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof fc)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof Hf)return{fieldPath:c.field.canonicalString(),increment:d.Re};throw Se(20930,{transform:c.transform})}(0,i))),e.precondition.isNone||(t.currentDocument=function(a,l){return l.updateTime!==void 0?{updateTime:Bk(a,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:Se(27497)}(n,e.precondition)),t}function jk(n,e){return n&&n.length>0?(Ye(e!==void 0,14353),n.map(t=>function(a,l){let c=a.updateTime?Hi(a.updateTime):Hi(l);return c.isEqual(Ae.min())&&(c=Hi(l)),new Ak(c,a.transformResults||[])}(t,e))):[]}function qk(n,e){return{documents:[yA(n,e.path)]}}function Gk(n,e){const t={structuredQuery:{}},i=e.path;let a;e.collectionGroup!==null?(a=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(a=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=yA(n,a);const l=function(m){if(m.length!==0)return TA(Gi.create(m,"and"))}(e.filters);l&&(t.structuredQuery.where=l);const c=function(m){if(m.length!==0)return m.map(y=>function(S){return{field:jo(S.field),direction:Yk(S.dir)}}(y))}(e.orderBy);c&&(t.structuredQuery.orderBy=c);const d=Bg(n,e.limit);return d!==null&&(t.structuredQuery.limit=d),e.startAt&&(t.structuredQuery.startAt=function(m){return{before:m.inclusive,values:m.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(m){return{before:!m.inclusive,values:m.position}}(e.endAt)),{gt:t,parent:a}}function Kk(n){let e=zk(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let a=null;if(i>0){Ye(i===1,65062);const y=t.from[0];y.allDescendants?a=y.collectionId:e=e.child(y.collectionId)}let l=[];t.where&&(l=function(T){const S=EA(T);return S instanceof Gi&&Qb(S)?S.getFilters():[S]}(t.where));let c=[];t.orderBy&&(c=function(T){return T.map(S=>function(N){return new Ff(qo(N.field),function(B){switch(B){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(N.direction))}(S))}(t.orderBy));let d=null;t.limit&&(d=function(T){let S;return S=typeof T=="object"?T.value:T,yd(S)?null:S}(t.limit));let p=null;t.startAt&&(p=function(T){const S=!!T.before,I=T.values||[];return new zf(I,S)}(t.startAt));let m=null;return t.endAt&&(m=function(T){const S=!T.before,I=T.values||[];return new zf(I,S)}(t.endAt)),ck(e,a,c,l,d,"F",p,m)}function $k(n,e){const t=function(a){switch(a){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Se(28987,{purpose:a})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function EA(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=qo(t.unaryFilter.field);return Vt.create(i,"==",{doubleValue:NaN});case"IS_NULL":const a=qo(t.unaryFilter.field);return Vt.create(a,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=qo(t.unaryFilter.field);return Vt.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=qo(t.unaryFilter.field);return Vt.create(c,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Se(61313);default:return Se(60726)}}(n):n.fieldFilter!==void 0?function(t){return Vt.create(qo(t.fieldFilter.field),function(a){switch(a){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Se(58110);default:return Se(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Gi.create(t.compositeFilter.filters.map(i=>EA(i)),function(a){switch(a){case"AND":return"and";case"OR":return"or";default:return Se(1026)}}(t.compositeFilter.op))}(n):Se(30097,{filter:n})}function Yk(n){return xk[n]}function Qk(n){return Lk[n]}function Wk(n){return Vk[n]}function jo(n){return{fieldPath:n.canonicalString()}}function qo(n){return sn.fromServerFormat(n.fieldPath)}function TA(n){return n instanceof Vt?function(t){if(t.op==="=="){if($0(t.value))return{unaryFilter:{field:jo(t.field),op:"IS_NAN"}};if(K0(t.value))return{unaryFilter:{field:jo(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if($0(t.value))return{unaryFilter:{field:jo(t.field),op:"IS_NOT_NAN"}};if(K0(t.value))return{unaryFilter:{field:jo(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:jo(t.field),op:Qk(t.op),value:t.value}}}(n):n instanceof Gi?function(t){const i=t.getFilters().map(a=>TA(a));return i.length===1?i[0]:{compositeFilter:{op:Wk(t.op),filters:i}}}(n):Se(54877,{filter:n})}function Xk(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function SA(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e,t,i,a,l=Ae.min(),c=Ae.min(),d=an.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=a,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=d,this.expectedCount=p}withSequenceNumber(e){return new Ts(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Ts(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ts(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ts(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zk{constructor(e){this.wt=e}}function Jk(n){const e=Kk({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ug(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eP{constructor(){this.Cn=new tP}addToCollectionParentIndex(e,t){return this.Cn.add(t),J.resolve()}getCollectionParents(e,t){return J.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return J.resolve()}deleteFieldIndex(e,t){return J.resolve()}deleteAllFieldIndexes(e){return J.resolve()}createTargetIndexes(e,t){return J.resolve()}getDocumentsMatchingTarget(e,t){return J.resolve(null)}getIndexType(e,t){return J.resolve(0)}getFieldIndexes(e,t){return J.resolve([])}getNextCollectionGroupToUpdate(e){return J.resolve(null)}getMinOffset(e,t){return J.resolve(Os.min())}getMinOffsetFromCollectionGroup(e,t){return J.resolve(Os.min())}updateCollectionGroup(e,t,i){return J.resolve()}updateIndexEntries(e,t){return J.resolve()}}class tP{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),a=this.index[t]||new Bt(ht.comparator),l=!a.has(i);return this.index[t]=a.add(i),l}has(e){const t=e.lastSegment(),i=e.popLast(),a=this.index[t];return a&&a.has(i)}getEntries(e){return(this.index[e]||new Bt(ht.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oS={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},wA=41943040;class Rn{static withCacheSize(e){return new Rn(e,Rn.DEFAULT_COLLECTION_PERCENTILE,Rn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Rn.DEFAULT_COLLECTION_PERCENTILE=10,Rn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Rn.DEFAULT=new Rn(wA,Rn.DEFAULT_COLLECTION_PERCENTILE,Rn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Rn.DISABLED=new Rn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(e){this.ur=e}next(){return this.ur+=2,this.ur}static cr(){return new sl(0)}static lr(){return new sl(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lS="LruGarbageCollector",nP=1048576;function uS([n,e],[t,i]){const a=Ne(n,t);return a===0?Ne(e,i):a}class iP{constructor(e){this.Er=e,this.buffer=new Bt(uS),this.dr=0}Ar(){return++this.dr}Rr(e){const t=[e,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(t);else{const i=this.buffer.last();uS(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}}get maxValue(){return this.buffer.last()[0]}}class rP{constructor(e,t,i){this.garbageCollector=e,this.asyncQueue=t,this.localStore=i,this.Vr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return this.Vr!==null}mr(e){ce(lS,`Garbage collection scheduled in ${e}ms`),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Vr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){gl(t)?ce(lS,"Ignoring IndexedDB error during garbage collection: ",t):await ml(t)}await this.mr(3e5)})}}class sP{constructor(e,t){this.gr=e,this.params=t}calculateTargetCount(e,t){return this.gr.pr(e).next(i=>Math.floor(t/100*i))}nthSequenceNumber(e,t){if(t===0)return J.resolve(_d.le);const i=new iP(t);return this.gr.forEachTarget(e,a=>i.Rr(a.sequenceNumber)).next(()=>this.gr.yr(e,a=>i.Rr(a))).next(()=>i.maxValue)}removeTargets(e,t,i){return this.gr.removeTargets(e,t,i)}removeOrphanedDocuments(e,t){return this.gr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ce("LruGarbageCollector","Garbage collection skipped; disabled"),J.resolve(oS)):this.getCacheSize(e).next(i=>i<this.params.cacheSizeCollectionThreshold?(ce("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),oS):this.wr(e,t))}getCacheSize(e){return this.gr.getCacheSize(e)}wr(e,t){let i,a,l,c,d,p,m;const y=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(T=>(T>this.params.maximumSequenceNumbersToCollect?(ce("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),a=this.params.maximumSequenceNumbersToCollect):a=T,c=Date.now(),this.nthSequenceNumber(e,a))).next(T=>(i=T,d=Date.now(),this.removeTargets(e,i,t))).next(T=>(l=T,p=Date.now(),this.removeOrphanedDocuments(e,i))).next(T=>(m=Date.now(),Fo()<=Me.DEBUG&&ce("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-y}ms
	Determined least recently used ${a} in `+(d-c)+`ms
	Removed ${l} targets in `+(p-d)+`ms
	Removed ${T} documents in `+(m-p)+`ms
Total Duration: ${m-y}ms`),J.resolve({didRun:!0,sequenceNumbersCollected:a,targetsRemoved:l,documentsRemoved:T})))}}function aP(n,e){return new sP(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oP{constructor(){this.changes=new Fa(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,fn.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?J.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lP{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uP{constructor(e,t,i,a){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=a}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next(a=>(i=a,this.remoteDocumentCache.getEntry(e,t))).next(a=>(i!==null&&Ku(i.mutation,a,mi.empty(),Ut.now()),a))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.getLocalViewOfDocuments(e,i,xe()).next(()=>i))}getLocalViewOfDocuments(e,t,i=xe()){const a=wa();return this.populateOverlays(e,a,t).next(()=>this.computeViews(e,t,a,i).next(l=>{let c=Bu();return l.forEach((d,p)=>{c=c.insert(d,p.overlayedDocument)}),c}))}getOverlayedDocuments(e,t){const i=wa();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,xe()))}populateOverlays(e,t,i){const a=[];return i.forEach(l=>{t.has(l)||a.push(l)}),this.documentOverlayCache.getOverlays(e,a).next(l=>{l.forEach((c,d)=>{t.set(c,d)})})}computeViews(e,t,i,a){let l=Pr();const c=Gu(),d=function(){return Gu()}();return t.forEach((p,m)=>{const y=i.get(m.key);a.has(m.key)&&(y===void 0||y.mutation instanceof Ha)?l=l.insert(m.key,m):y!==void 0?(c.set(m.key,y.mutation.getFieldMask()),Ku(y.mutation,m,y.mutation.getFieldMask(),Ut.now())):c.set(m.key,mi.empty())}),this.recalculateAndSaveOverlays(e,l).next(p=>(p.forEach((m,y)=>c.set(m,y)),t.forEach((m,y)=>{var T;return d.set(m,new lP(y,(T=c.get(m))!==null&&T!==void 0?T:null))}),d))}recalculateAndSaveOverlays(e,t){const i=Gu();let a=new Dt((c,d)=>c-d),l=xe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(c=>{for(const d of c)d.keys().forEach(p=>{const m=t.get(p);if(m===null)return;let y=i.get(p)||mi.empty();y=d.applyToLocalView(m,y),i.set(p,y);const T=(a.get(d.batchId)||xe()).add(p);a=a.insert(d.batchId,T)})}).next(()=>{const c=[],d=a.getReverseIterator();for(;d.hasNext();){const p=d.getNext(),m=p.key,y=p.value,T=rA();y.forEach(S=>{if(!l.has(S)){const I=cA(t.get(S),i.get(S));I!==null&&T.set(S,I),l=l.add(S)}}),c.push(this.documentOverlayCache.saveOverlays(e,m,T))}return J.waitFor(c)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,t,i,a){return function(c){return ve.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):hk(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,a):this.getDocumentsMatchingCollectionQuery(e,t,i,a)}getNextDocuments(e,t,i,a){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,a).next(l=>{const c=a-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,a-l.size):J.resolve(wa());let d=ac,p=l;return c.next(m=>J.forEach(m,(y,T)=>(d<T.largestBatchId&&(d=T.largestBatchId),l.get(y)?J.resolve():this.remoteDocumentCache.getEntry(e,y).next(S=>{p=p.insert(y,S)}))).next(()=>this.populateOverlays(e,m,l)).next(()=>this.computeViews(e,p,m,xe())).next(y=>({batchId:d,changes:iA(y)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ve(t)).next(i=>{let a=Bu();return i.isFoundDocument()&&(a=a.insert(i.key,i)),a})}getDocumentsMatchingCollectionGroupQuery(e,t,i,a){const l=t.collectionGroup;let c=Bu();return this.indexManager.getCollectionParents(e,l).next(d=>J.forEach(d,p=>{const m=function(T,S){return new Ed(S,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)}(t,p.child(l));return this.getDocumentsMatchingCollectionQuery(e,m,i,a).next(y=>{y.forEach((T,S)=>{c=c.insert(T,S)})})}).next(()=>c))}getDocumentsMatchingCollectionQuery(e,t,i,a){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next(c=>(l=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,l,a))).next(c=>{l.forEach((p,m)=>{const y=m.getKey();c.get(y)===null&&(c=c.insert(y,fn.newInvalidDocument(y)))});let d=Bu();return c.forEach((p,m)=>{const y=l.get(p);y!==void 0&&Ku(y.mutation,m,mi.empty(),Ut.now()),Sd(t,m)&&(d=d.insert(p,m))}),d})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cP{constructor(e){this.serializer=e,this.kr=new Map,this.qr=new Map}getBundleMetadata(e,t){return J.resolve(this.kr.get(t))}saveBundleMetadata(e,t){return this.kr.set(t.id,function(a){return{id:a.id,version:a.version,createTime:Hi(a.createTime)}}(t)),J.resolve()}getNamedQuery(e,t){return J.resolve(this.qr.get(t))}saveNamedQuery(e,t){return this.qr.set(t.name,function(a){return{name:a.name,query:Jk(a.bundledQuery),readTime:Hi(a.readTime)}}(t)),J.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hP{constructor(){this.overlays=new Dt(ve.comparator),this.Qr=new Map}getOverlay(e,t){return J.resolve(this.overlays.get(t))}getOverlays(e,t){const i=wa();return J.forEach(t,a=>this.getOverlay(e,a).next(l=>{l!==null&&i.set(a,l)})).next(()=>i)}saveOverlays(e,t,i){return i.forEach((a,l)=>{this.bt(e,t,l)}),J.resolve()}removeOverlaysForBatchId(e,t,i){const a=this.Qr.get(i);return a!==void 0&&(a.forEach(l=>this.overlays=this.overlays.remove(l)),this.Qr.delete(i)),J.resolve()}getOverlaysForCollection(e,t,i){const a=wa(),l=t.length+1,c=new ve(t.child("")),d=this.overlays.getIteratorFrom(c);for(;d.hasNext();){const p=d.getNext().value,m=p.getKey();if(!t.isPrefixOf(m.path))break;m.path.length===l&&p.largestBatchId>i&&a.set(p.getKey(),p)}return J.resolve(a)}getOverlaysForCollectionGroup(e,t,i,a){let l=new Dt((m,y)=>m-y);const c=this.overlays.getIterator();for(;c.hasNext();){const m=c.getNext().value;if(m.getKey().getCollectionGroup()===t&&m.largestBatchId>i){let y=l.get(m.largestBatchId);y===null&&(y=wa(),l=l.insert(m.largestBatchId,y)),y.set(m.getKey(),m)}}const d=wa(),p=l.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach((m,y)=>d.set(m,y)),!(d.size()>=a)););return J.resolve(d)}bt(e,t,i){const a=this.overlays.get(i.key);if(a!==null){const c=this.Qr.get(a.largestBatchId).delete(i.key);this.Qr.set(a.largestBatchId,c)}this.overlays=this.overlays.insert(i.key,new Ok(t,i));let l=this.Qr.get(t);l===void 0&&(l=xe(),this.Qr.set(t,l)),this.Qr.set(t,l.add(i.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fP{constructor(){this.sessionToken=an.EMPTY_BYTE_STRING}getSessionToken(e){return J.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,J.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V_{constructor(){this.$r=new Bt($t.Ur),this.Kr=new Bt($t.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(e,t){const i=new $t(e,t);this.$r=this.$r.add(i),this.Kr=this.Kr.add(i)}Gr(e,t){e.forEach(i=>this.addReference(i,t))}removeReference(e,t){this.zr(new $t(e,t))}jr(e,t){e.forEach(i=>this.removeReference(i,t))}Hr(e){const t=new ve(new ht([])),i=new $t(t,e),a=new $t(t,e+1),l=[];return this.Kr.forEachInRange([i,a],c=>{this.zr(c),l.push(c.key)}),l}Jr(){this.$r.forEach(e=>this.zr(e))}zr(e){this.$r=this.$r.delete(e),this.Kr=this.Kr.delete(e)}Yr(e){const t=new ve(new ht([])),i=new $t(t,e),a=new $t(t,e+1);let l=xe();return this.Kr.forEachInRange([i,a],c=>{l=l.add(c.key)}),l}containsKey(e){const t=new $t(e,0),i=this.$r.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class $t{constructor(e,t){this.key=e,this.Zr=t}static Ur(e,t){return ve.comparator(e.key,t.key)||Ne(e.Zr,t.Zr)}static Wr(e,t){return Ne(e.Zr,t.Zr)||ve.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dP{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.nr=1,this.Xr=new Bt($t.Ur)}checkEmpty(e){return J.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,a){const l=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new Nk(l,t,i,a);this.mutationQueue.push(c);for(const d of a)this.Xr=this.Xr.add(new $t(d.key,l)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return J.resolve(c)}lookupMutationBatch(e,t){return J.resolve(this.ei(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,a=this.ti(i),l=a<0?0:a;return J.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return J.resolve(this.mutationQueue.length===0?I_:this.nr-1)}getAllMutationBatches(e){return J.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new $t(t,0),a=new $t(t,Number.POSITIVE_INFINITY),l=[];return this.Xr.forEachInRange([i,a],c=>{const d=this.ei(c.Zr);l.push(d)}),J.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new Bt(Ne);return t.forEach(a=>{const l=new $t(a,0),c=new $t(a,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([l,c],d=>{i=i.add(d.Zr)})}),J.resolve(this.ni(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,a=i.length+1;let l=i;ve.isDocumentKey(l)||(l=l.child(""));const c=new $t(new ve(l),0);let d=new Bt(Ne);return this.Xr.forEachWhile(p=>{const m=p.key.path;return!!i.isPrefixOf(m)&&(m.length===a&&(d=d.add(p.Zr)),!0)},c),J.resolve(this.ni(d))}ni(e){const t=[];return e.forEach(i=>{const a=this.ei(i);a!==null&&t.push(a)}),t}removeMutationBatch(e,t){Ye(this.ri(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let i=this.Xr;return J.forEach(t.mutations,a=>{const l=new $t(a.key,t.batchId);return i=i.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,a.key)}).next(()=>{this.Xr=i})}sr(e){}containsKey(e,t){const i=new $t(t,0),a=this.Xr.firstAfterOrEqual(i);return J.resolve(t.isEqual(a&&a.key))}performConsistencyCheck(e){return this.mutationQueue.length,J.resolve()}ri(e,t){return this.ti(e)}ti(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ei(e){const t=this.ti(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pP{constructor(e){this.ii=e,this.docs=function(){return new Dt(ve.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,a=this.docs.get(i),l=a?a.size:0,c=this.ii(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:c}),this.size+=c-l,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return J.resolve(i?i.document.mutableCopy():fn.newInvalidDocument(t))}getEntries(e,t){let i=Pr();return t.forEach(a=>{const l=this.docs.get(a);i=i.insert(a,l?l.document.mutableCopy():fn.newInvalidDocument(a))}),J.resolve(i)}getDocumentsMatchingQuery(e,t,i,a){let l=Pr();const c=t.path,d=new ve(c.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(d);for(;p.hasNext();){const{key:m,value:{document:y}}=p.getNext();if(!c.isPrefixOf(m.path))break;m.path.length>c.length+1||H2(F2(y),i)<=0||(a.has(y.key)||Sd(t,y))&&(l=l.insert(y.key,y.mutableCopy()))}return J.resolve(l)}getAllFromCollectionGroup(e,t,i,a){Se(9500)}si(e,t){return J.forEach(this.docs,i=>t(i))}newChangeBuffer(e){return new mP(this)}getSize(e){return J.resolve(this.size)}}class mP extends oP{constructor(e){super(),this.Br=e}applyChanges(e){const t=[];return this.changes.forEach((i,a)=>{a.isValidDocument()?t.push(this.Br.addEntry(e,a)):this.Br.removeEntry(i)}),J.waitFor(t)}getFromCache(e,t){return this.Br.getEntry(e,t)}getAllFromCache(e,t){return this.Br.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gP{constructor(e){this.persistence=e,this.oi=new Fa(t=>D_(t),k_),this.lastRemoteSnapshotVersion=Ae.min(),this.highestTargetId=0,this._i=0,this.ai=new V_,this.targetCount=0,this.ui=sl.cr()}forEachTarget(e,t){return this.oi.forEach((i,a)=>t(a)),J.resolve()}getLastRemoteSnapshotVersion(e){return J.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return J.resolve(this._i)}allocateTargetId(e){return this.highestTargetId=this.ui.next(),J.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this._i&&(this._i=t),J.resolve()}Tr(e){this.oi.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ui=new sl(t),this.highestTargetId=t),e.sequenceNumber>this._i&&(this._i=e.sequenceNumber)}addTargetData(e,t){return this.Tr(t),this.targetCount+=1,J.resolve()}updateTargetData(e,t){return this.Tr(t),J.resolve()}removeTargetData(e,t){return this.oi.delete(t.target),this.ai.Hr(t.targetId),this.targetCount-=1,J.resolve()}removeTargets(e,t,i){let a=0;const l=[];return this.oi.forEach((c,d)=>{d.sequenceNumber<=t&&i.get(d.targetId)===null&&(this.oi.delete(c),l.push(this.removeMatchingKeysForTargetId(e,d.targetId)),a++)}),J.waitFor(l).next(()=>a)}getTargetCount(e){return J.resolve(this.targetCount)}getTargetData(e,t){const i=this.oi.get(t)||null;return J.resolve(i)}addMatchingKeys(e,t,i){return this.ai.Gr(t,i),J.resolve()}removeMatchingKeys(e,t,i){this.ai.jr(t,i);const a=this.persistence.referenceDelegate,l=[];return a&&t.forEach(c=>{l.push(a.markPotentiallyOrphaned(e,c))}),J.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.ai.Hr(t),J.resolve()}getMatchingKeysForTargetId(e,t){const i=this.ai.Yr(t);return J.resolve(i)}containsKey(e,t){return J.resolve(this.ai.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bA{constructor(e,t){this.ci={},this.overlays={},this.li=new _d(0),this.hi=!1,this.hi=!0,this.Pi=new fP,this.referenceDelegate=e(this),this.Ti=new gP(this),this.indexManager=new eP,this.remoteDocumentCache=function(a){return new pP(a)}(i=>this.referenceDelegate.Ii(i)),this.serializer=new Zk(t),this.Ei=new cP(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new hP,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.ci[e.toKey()];return i||(i=new dP(t,this.referenceDelegate),this.ci[e.toKey()]=i),i}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(e,t,i){ce("MemoryPersistence","Starting transaction:",e);const a=new _P(this.li.next());return this.referenceDelegate.di(),i(a).next(l=>this.referenceDelegate.Ai(a).next(()=>l)).toPromise().then(l=>(a.raiseOnCommittedEvent(),l))}Ri(e,t){return J.or(Object.values(this.ci).map(i=>()=>i.containsKey(e,t)))}}class _P extends q2{constructor(e){super(),this.currentSequenceNumber=e}}class U_{constructor(e){this.persistence=e,this.Vi=new V_,this.mi=null}static fi(e){return new U_(e)}get gi(){if(this.mi)return this.mi;throw Se(60996)}addReference(e,t,i){return this.Vi.addReference(i,t),this.gi.delete(i.toString()),J.resolve()}removeReference(e,t,i){return this.Vi.removeReference(i,t),this.gi.add(i.toString()),J.resolve()}markPotentiallyOrphaned(e,t){return this.gi.add(t.toString()),J.resolve()}removeTarget(e,t){this.Vi.Hr(t.targetId).forEach(a=>this.gi.add(a.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next(a=>{a.forEach(l=>this.gi.add(l.toString()))}).next(()=>i.removeTargetData(e,t))}di(){this.mi=new Set}Ai(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return J.forEach(this.gi,i=>{const a=ve.fromPath(i);return this.pi(e,a).next(l=>{l||t.removeEntry(a,Ae.min())})}).next(()=>(this.mi=null,t.apply(e)))}updateLimboDocument(e,t){return this.pi(e,t).next(i=>{i?this.gi.delete(t.toString()):this.gi.add(t.toString())})}Ii(e){return 0}pi(e,t){return J.or([()=>J.resolve(this.Vi.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ri(e,t)])}}class qf{constructor(e,t){this.persistence=e,this.yi=new Fa(i=>$2(i.path),(i,a)=>i.isEqual(a)),this.garbageCollector=aP(this,t)}static fi(e,t){return new qf(e,t)}di(){}Ai(e){return J.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}pr(e){const t=this.Sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(i=>t.next(a=>i+a))}Sr(e){let t=0;return this.yr(e,i=>{t++}).next(()=>t)}yr(e,t){return J.forEach(this.yi,(i,a)=>this.Dr(e,i,a).next(l=>l?J.resolve():t(a)))}removeTargets(e,t,i){return this.persistence.getTargetCache().removeTargets(e,t,i)}removeOrphanedDocuments(e,t){let i=0;const a=this.persistence.getRemoteDocumentCache(),l=a.newChangeBuffer();return a.si(e,c=>this.Dr(e,c,t).next(d=>{d||(i++,l.removeEntry(c,Ae.min()))})).next(()=>l.apply(e)).next(()=>i)}markPotentiallyOrphaned(e,t){return this.yi.set(t,e.currentSequenceNumber),J.resolve()}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,t,i){return this.yi.set(i,e.currentSequenceNumber),J.resolve()}removeReference(e,t,i){return this.yi.set(i,e.currentSequenceNumber),J.resolve()}updateLimboDocument(e,t){return this.yi.set(t,e.currentSequenceNumber),J.resolve()}Ii(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Tf(e.data.value)),t}Dr(e,t,i){return J.or([()=>this.persistence.Ri(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const a=this.yi.get(t);return J.resolve(a!==void 0&&a>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B_{constructor(e,t,i,a){this.targetId=e,this.fromCache=t,this.ds=i,this.As=a}static Rs(e,t){let i=xe(),a=xe();for(const l of t.docChanges)switch(l.type){case 0:i=i.add(l.doc.key);break;case 1:a=a.add(l.doc.key)}return new B_(e,t.fromCache,i,a)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yP{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vP{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=function(){return lD()?8:G2(_n())>0?6:4}()}initialize(e,t){this.ys=e,this.indexManager=t,this.Vs=!0}getDocumentsMatchingQuery(e,t,i,a){const l={result:null};return this.ws(e,t).next(c=>{l.result=c}).next(()=>{if(!l.result)return this.Ss(e,t,a,i).next(c=>{l.result=c})}).next(()=>{if(l.result)return;const c=new yP;return this.bs(e,t,c).next(d=>{if(l.result=d,this.fs)return this.Ds(e,t,c,d.size)})}).next(()=>l.result)}Ds(e,t,i,a){return i.documentReadCount<this.gs?(Fo()<=Me.DEBUG&&ce("QueryEngine","SDK will not create cache indexes for query:",Ho(t),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),J.resolve()):(Fo()<=Me.DEBUG&&ce("QueryEngine","Query:",Ho(t),"scans",i.documentReadCount,"local documents and returns",a,"documents as results."),i.documentReadCount>this.ps*a?(Fo()<=Me.DEBUG&&ce("QueryEngine","The SDK decides to create cache indexes for query:",Ho(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Fi(t))):J.resolve())}ws(e,t){if(X0(t))return J.resolve(null);let i=Fi(t);return this.indexManager.getIndexType(e,i).next(a=>a===0?null:(t.limit!==null&&a===1&&(t=Ug(t,null,"F"),i=Fi(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next(l=>{const c=xe(...l);return this.ys.getDocuments(e,c).next(d=>this.indexManager.getMinOffset(e,i).next(p=>{const m=this.vs(t,d);return this.Cs(t,m,c,p.readTime)?this.ws(e,Ug(t,null,"F")):this.Fs(e,m,t,p)}))})))}Ss(e,t,i,a){return X0(t)||a.isEqual(Ae.min())?J.resolve(null):this.ys.getDocuments(e,i).next(l=>{const c=this.vs(t,l);return this.Cs(t,c,i,a)?J.resolve(null):(Fo()<=Me.DEBUG&&ce("QueryEngine","Re-using previous result from %s to execute query: %s",a.toString(),Ho(t)),this.Fs(e,c,t,z2(a,ac)).next(d=>d))})}vs(e,t){let i=new Bt(tA(e));return t.forEach((a,l)=>{Sd(e,l)&&(i=i.add(l))}),i}Cs(e,t,i,a){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(a)>0)}bs(e,t,i){return Fo()<=Me.DEBUG&&ce("QueryEngine","Using full collection scan to execute query:",Ho(t)),this.ys.getDocumentsMatchingQuery(e,t,Os.min(),i)}Fs(e,t,i,a){return this.ys.getDocumentsMatchingQuery(e,i,a).next(l=>(t.forEach(c=>{l=l.insert(c.key,c)}),l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z_="LocalStore",EP=3e8;class TP{constructor(e,t,i,a){this.persistence=e,this.Ms=t,this.serializer=a,this.xs=new Dt(Ne),this.Os=new Fa(l=>D_(l),k_),this.Ns=new Map,this.Bs=e.getRemoteDocumentCache(),this.Ti=e.getTargetCache(),this.Ei=e.getBundleCache(),this.Ls(i)}Ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new uP(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.xs))}}function SP(n,e,t,i){return new TP(n,e,t,i)}async function AA(n,e){const t=Re(n);return await t.persistence.runTransaction("Handle user change","readonly",i=>{let a;return t.mutationQueue.getAllMutationBatches(i).next(l=>(a=l,t.Ls(e),t.mutationQueue.getAllMutationBatches(i))).next(l=>{const c=[],d=[];let p=xe();for(const m of a){c.push(m.batchId);for(const y of m.mutations)p=p.add(y.key)}for(const m of l){d.push(m.batchId);for(const y of m.mutations)p=p.add(y.key)}return t.localDocuments.getDocuments(i,p).next(m=>({ks:m,removedBatchIds:c,addedBatchIds:d}))})})}function wP(n,e){const t=Re(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const a=e.batch.keys(),l=t.Bs.newChangeBuffer({trackRemovals:!0});return function(d,p,m,y){const T=m.batch,S=T.keys();let I=J.resolve();return S.forEach(N=>{I=I.next(()=>y.getEntry(p,N)).next(H=>{const B=m.docVersions.get(N);Ye(B!==null,48541),H.version.compareTo(B)<0&&(T.applyToRemoteDocument(H,m),H.isValidDocument()&&(H.setReadTime(m.commitVersion),y.addEntry(H)))})}),I.next(()=>d.mutationQueue.removeMutationBatch(p,T))}(t,i,e,l).next(()=>l.apply(i)).next(()=>t.mutationQueue.performConsistencyCheck(i)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(i,a,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(d){let p=xe();for(let m=0;m<d.mutationResults.length;++m)d.mutationResults[m].transformResults.length>0&&(p=p.add(d.batch.mutations[m].key));return p}(e))).next(()=>t.localDocuments.getDocuments(i,a))})}function RA(n){const e=Re(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ti.getLastRemoteSnapshotVersion(t))}function bP(n,e){const t=Re(n),i=e.snapshotVersion;let a=t.xs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",l=>{const c=t.Bs.newChangeBuffer({trackRemovals:!0});a=t.xs;const d=[];e.targetChanges.forEach((y,T)=>{const S=a.get(T);if(!S)return;d.push(t.Ti.removeMatchingKeys(l,y.removedDocuments,T).next(()=>t.Ti.addMatchingKeys(l,y.addedDocuments,T)));let I=S.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(T)!==null?I=I.withResumeToken(an.EMPTY_BYTE_STRING,Ae.min()).withLastLimboFreeSnapshotVersion(Ae.min()):y.resumeToken.approximateByteSize()>0&&(I=I.withResumeToken(y.resumeToken,i)),a=a.insert(T,I),function(H,B,$){return H.resumeToken.approximateByteSize()===0||B.snapshotVersion.toMicroseconds()-H.snapshotVersion.toMicroseconds()>=EP?!0:$.addedDocuments.size+$.modifiedDocuments.size+$.removedDocuments.size>0}(S,I,y)&&d.push(t.Ti.updateTargetData(l,I))});let p=Pr(),m=xe();if(e.documentUpdates.forEach(y=>{e.resolvedLimboDocuments.has(y)&&d.push(t.persistence.referenceDelegate.updateLimboDocument(l,y))}),d.push(AP(l,c,e.documentUpdates).next(y=>{p=y.qs,m=y.Qs})),!i.isEqual(Ae.min())){const y=t.Ti.getLastRemoteSnapshotVersion(l).next(T=>t.Ti.setTargetsMetadata(l,l.currentSequenceNumber,i));d.push(y)}return J.waitFor(d).next(()=>c.apply(l)).next(()=>t.localDocuments.getLocalViewOfDocuments(l,p,m)).next(()=>p)}).then(l=>(t.xs=a,l))}function AP(n,e,t){let i=xe(),a=xe();return t.forEach(l=>i=i.add(l)),e.getEntries(n,i).next(l=>{let c=Pr();return t.forEach((d,p)=>{const m=l.get(d);p.isFoundDocument()!==m.isFoundDocument()&&(a=a.add(d)),p.isNoDocument()&&p.version.isEqual(Ae.min())?(e.removeEntry(d,p.readTime),c=c.insert(d,p)):!m.isValidDocument()||p.version.compareTo(m.version)>0||p.version.compareTo(m.version)===0&&m.hasPendingWrites?(e.addEntry(p),c=c.insert(d,p)):ce(z_,"Ignoring outdated watch update for ",d,". Current version:",m.version," Watch version:",p.version)}),{qs:c,Qs:a}})}function RP(n,e){const t=Re(n);return t.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=I_),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function CP(n,e){const t=Re(n);return t.persistence.runTransaction("Allocate target","readwrite",i=>{let a;return t.Ti.getTargetData(i,e).next(l=>l?(a=l,J.resolve(a)):t.Ti.allocateTargetId(i).next(c=>(a=new Ts(e,c,"TargetPurposeListen",i.currentSequenceNumber),t.Ti.addTargetData(i,a).next(()=>a))))}).then(i=>{const a=t.xs.get(i.targetId);return(a===null||i.snapshotVersion.compareTo(a.snapshotVersion)>0)&&(t.xs=t.xs.insert(i.targetId,i),t.Os.set(e,i.targetId)),i})}async function jg(n,e,t){const i=Re(n),a=i.xs.get(e),l=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",l,c=>i.persistence.referenceDelegate.removeTarget(c,a))}catch(c){if(!gl(c))throw c;ce(z_,`Failed to update sequence numbers for target ${e}: ${c}`)}i.xs=i.xs.remove(e),i.Os.delete(a.target)}function cS(n,e,t){const i=Re(n);let a=Ae.min(),l=xe();return i.persistence.runTransaction("Execute query","readwrite",c=>function(p,m,y){const T=Re(p),S=T.Os.get(y);return S!==void 0?J.resolve(T.xs.get(S)):T.Ti.getTargetData(m,y)}(i,c,Fi(e)).next(d=>{if(d)return a=d.lastLimboFreeSnapshotVersion,i.Ti.getMatchingKeysForTargetId(c,d.targetId).next(p=>{l=p})}).next(()=>i.Ms.getDocumentsMatchingQuery(c,e,t?a:Ae.min(),t?l:xe())).next(d=>(IP(i,dk(e),d),{documents:d,$s:l})))}function IP(n,e,t){let i=n.Ns.get(e)||Ae.min();t.forEach((a,l)=>{l.readTime.compareTo(i)>0&&(i=l.readTime)}),n.Ns.set(e,i)}class hS{constructor(){this.activeTargetIds=vk()}js(e){this.activeTargetIds=this.activeTargetIds.add(e)}Hs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}zs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class NP{constructor(){this.xo=new hS,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this.xo.js(e),this.Oo[e]||"not-current"}updateQueryState(e,t,i){this.Oo[e]=t}removeLocalQueryTarget(e){this.xo.Hs(e)}isLocalQueryTarget(e){return this.xo.activeTargetIds.has(e)}clearQueryState(e){delete this.Oo[e]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(e){return this.xo.activeTargetIds.has(e)}start(){return this.xo=new hS,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OP{No(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fS="ConnectivityMonitor";class dS{constructor(){this.Bo=()=>this.Lo(),this.ko=()=>this.qo(),this.Qo=[],this.$o()}No(e){this.Qo.push(e)}shutdown(){window.removeEventListener("online",this.Bo),window.removeEventListener("offline",this.ko)}$o(){window.addEventListener("online",this.Bo),window.addEventListener("offline",this.ko)}Lo(){ce(fS,"Network connectivity changed: AVAILABLE");for(const e of this.Qo)e(0)}qo(){ce(fS,"Network connectivity changed: UNAVAILABLE");for(const e of this.Qo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hf=null;function qg(){return hf===null?hf=function(){return 268435456+Math.round(2147483648*Math.random())}():hf++,"0x"+hf.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tg="RestConnection",DP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class kP{get Uo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.Ko=t+"://"+e.host,this.Wo=`projects/${i}/databases/${a}`,this.Go=this.databaseId.database===Uf?`project_id=${i}`:`project_id=${i}&database_id=${a}`}zo(e,t,i,a,l){const c=qg(),d=this.jo(e,t.toUriEncodedString());ce(tg,`Sending RPC '${e}' ${c}:`,d,i);const p={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(p,a,l);const{host:m}=new URL(d),y=Vr(m);return this.Jo(e,d,p,i,y).then(T=>(ce(tg,`Received RPC '${e}' ${c}: `,T),T),T=>{throw tl(tg,`RPC '${e}' ${c} failed with error: `,T,"url: ",d,"request:",i),T})}Yo(e,t,i,a,l,c){return this.zo(e,t,i,a,l)}Ho(e,t,i){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+pl}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((a,l)=>e[l]=a),i&&i.headers.forEach((a,l)=>e[l]=a)}jo(e,t){const i=DP[e];return`${this.Ko}/v1/${t}:${i}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PP{constructor(e){this.Zo=e.Zo,this.Xo=e.Xo}e_(e){this.t_=e}n_(e){this.r_=e}i_(e){this.s_=e}onMessage(e){this.o_=e}close(){this.Xo()}send(e){this.Zo(e)}__(){this.t_()}a_(){this.r_()}u_(e){this.s_(e)}c_(e){this.o_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cn="WebChannelConnection";class MP extends kP{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,i,a,l){const c=qg();return new Promise((d,p)=>{const m=new Ib;m.setWithCredentials(!0),m.listenOnce(Nb.COMPLETE,()=>{try{switch(m.getLastErrorCode()){case Ef.NO_ERROR:const T=m.getResponseJson();ce(cn,`XHR for RPC '${e}' ${c} received:`,JSON.stringify(T)),d(T);break;case Ef.TIMEOUT:ce(cn,`RPC '${e}' ${c} timed out`),p(new ge(ne.DEADLINE_EXCEEDED,"Request time out"));break;case Ef.HTTP_ERROR:const S=m.getStatus();if(ce(cn,`RPC '${e}' ${c} failed with status:`,S,"response text:",m.getResponseText()),S>0){let I=m.getResponseJson();Array.isArray(I)&&(I=I[0]);const N=I==null?void 0:I.error;if(N&&N.status&&N.message){const H=function($){const W=$.toLowerCase().replace(/_/g,"-");return Object.values(ne).indexOf(W)>=0?W:ne.UNKNOWN}(N.status);p(new ge(H,N.message))}else p(new ge(ne.UNKNOWN,"Server responded with status "+m.getStatus()))}else p(new ge(ne.UNAVAILABLE,"Connection failed."));break;default:Se(9055,{l_:e,streamId:c,h_:m.getLastErrorCode(),P_:m.getLastError()})}}finally{ce(cn,`RPC '${e}' ${c} completed.`)}});const y=JSON.stringify(a);ce(cn,`RPC '${e}' ${c} sending request:`,a),m.send(t,"POST",y,i,15)})}T_(e,t,i){const a=qg(),l=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=kb(),d=Db(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},m=this.longPollingOptions.timeoutSeconds;m!==void 0&&(p.longPollingTimeout=Math.round(1e3*m)),this.useFetchStreams&&(p.useFetchStreams=!0),this.Ho(p.initMessageHeaders,t,i),p.encodeInitMessageHeaders=!0;const y=l.join("");ce(cn,`Creating RPC '${e}' stream ${a}: ${y}`,p);const T=c.createWebChannel(y,p);let S=!1,I=!1;const N=new PP({Zo:B=>{I?ce(cn,`Not sending because RPC '${e}' stream ${a} is closed:`,B):(S||(ce(cn,`Opening RPC '${e}' stream ${a} transport.`),T.open(),S=!0),ce(cn,`RPC '${e}' stream ${a} sending:`,B),T.send(B))},Xo:()=>T.close()}),H=(B,$,W)=>{B.listen($,ee=>{try{W(ee)}catch(ae){setTimeout(()=>{throw ae},0)}})};return H(T,Uu.EventType.OPEN,()=>{I||(ce(cn,`RPC '${e}' stream ${a} transport opened.`),N.__())}),H(T,Uu.EventType.CLOSE,()=>{I||(I=!0,ce(cn,`RPC '${e}' stream ${a} transport closed`),N.u_())}),H(T,Uu.EventType.ERROR,B=>{I||(I=!0,tl(cn,`RPC '${e}' stream ${a} transport errored. Name:`,B.name,"Message:",B.message),N.u_(new ge(ne.UNAVAILABLE,"The operation could not be completed")))}),H(T,Uu.EventType.MESSAGE,B=>{var $;if(!I){const W=B.data[0];Ye(!!W,16349);const ee=W,ae=(ee==null?void 0:ee.error)||(($=ee[0])===null||$===void 0?void 0:$.error);if(ae){ce(cn,`RPC '${e}' stream ${a} received error:`,ae);const he=ae.status;let _e=function(R){const P=Nt[R];if(P!==void 0)return dA(P)}(he),D=ae.message;_e===void 0&&(_e=ne.INTERNAL,D="Unknown error status: "+he+" with message "+ae.message),I=!0,N.u_(new ge(_e,D)),T.close()}else ce(cn,`RPC '${e}' stream ${a} received:`,W),N.c_(W)}}),H(d,Ob.STAT_EVENT,B=>{B.stat===Dg.PROXY?ce(cn,`RPC '${e}' stream ${a} detected buffering proxy`):B.stat===Dg.NOPROXY&&ce(cn,`RPC '${e}' stream ${a} detected no buffering proxy`)}),setTimeout(()=>{N.a_()},0),N}}function ng(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rd(n){return new Uk(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CA{constructor(e,t,i=1e3,a=1.5,l=6e4){this.xi=e,this.timerId=t,this.I_=i,this.E_=a,this.d_=l,this.A_=0,this.R_=null,this.V_=Date.now(),this.reset()}reset(){this.A_=0}m_(){this.A_=this.d_}f_(e){this.cancel();const t=Math.floor(this.A_+this.g_()),i=Math.max(0,Date.now()-this.V_),a=Math.max(0,t-i);a>0&&ce("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.A_} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.R_=this.xi.enqueueAfterDelay(this.timerId,a,()=>(this.V_=Date.now(),e())),this.A_*=this.E_,this.A_<this.I_&&(this.A_=this.I_),this.A_>this.d_&&(this.A_=this.d_)}p_(){this.R_!==null&&(this.R_.skipDelay(),this.R_=null)}cancel(){this.R_!==null&&(this.R_.cancel(),this.R_=null)}g_(){return(Math.random()-.5)*this.A_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pS="PersistentStream";class IA{constructor(e,t,i,a,l,c,d,p){this.xi=e,this.y_=i,this.w_=a,this.connection=l,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=d,this.listener=p,this.state=0,this.S_=0,this.b_=null,this.D_=null,this.stream=null,this.v_=0,this.C_=new CA(e,t)}F_(){return this.state===1||this.state===5||this.M_()}M_(){return this.state===2||this.state===3}start(){this.v_=0,this.state!==4?this.auth():this.x_()}async stop(){this.F_()&&await this.close(0)}O_(){this.state=0,this.C_.reset()}N_(){this.M_()&&this.b_===null&&(this.b_=this.xi.enqueueAfterDelay(this.y_,6e4,()=>this.B_()))}L_(e){this.k_(),this.stream.send(e)}async B_(){if(this.M_())return this.close(0)}k_(){this.b_&&(this.b_.cancel(),this.b_=null)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}async close(e,t){this.k_(),this.q_(),this.C_.cancel(),this.S_++,e!==4?this.C_.reset():t&&t.code===ne.RESOURCE_EXHAUSTED?(kr(t.toString()),kr("Using maximum backoff delay to prevent overloading the backend."),this.C_.m_()):t&&t.code===ne.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Q_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.i_(t)}Q_(){}auth(){this.state=1;const e=this.U_(this.S_),t=this.S_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,a])=>{this.S_===t&&this.K_(i,a)},i=>{e(()=>{const a=new ge(ne.UNKNOWN,"Fetching auth token failed: "+i.message);return this.W_(a)})})}K_(e,t){const i=this.U_(this.S_);this.stream=this.G_(e,t),this.stream.e_(()=>{i(()=>this.listener.e_())}),this.stream.n_(()=>{i(()=>(this.state=2,this.D_=this.xi.enqueueAfterDelay(this.w_,1e4,()=>(this.M_()&&(this.state=3),Promise.resolve())),this.listener.n_()))}),this.stream.i_(a=>{i(()=>this.W_(a))}),this.stream.onMessage(a=>{i(()=>++this.v_==1?this.z_(a):this.onNext(a))})}x_(){this.state=5,this.C_.f_(async()=>{this.state=0,this.start()})}W_(e){return ce(pS,`close with error: ${e}`),this.stream=null,this.close(4,e)}U_(e){return t=>{this.xi.enqueueAndForget(()=>this.S_===e?t():(ce(pS,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class xP extends IA{constructor(e,t,i,a,l,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,a,c),this.serializer=l}G_(e,t){return this.connection.T_("Listen",e,t)}z_(e){return this.onNext(e)}onNext(e){this.C_.reset();const t=Fk(this.serializer,e),i=function(l){if(!("targetChange"in l))return Ae.min();const c=l.targetChange;return c.targetIds&&c.targetIds.length?Ae.min():c.readTime?Hi(c.readTime):Ae.min()}(e);return this.listener.j_(t,i)}H_(e){const t={};t.database=Hg(this.serializer),t.addTarget=function(l,c){let d;const p=c.target;if(d=Vg(p)?{documents:qk(l,p)}:{query:Gk(l,p).gt},d.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){d.resumeToken=gA(l,c.resumeToken);const m=Bg(l,c.expectedCount);m!==null&&(d.expectedCount=m)}else if(c.snapshotVersion.compareTo(Ae.min())>0){d.readTime=jf(l,c.snapshotVersion.toTimestamp());const m=Bg(l,c.expectedCount);m!==null&&(d.expectedCount=m)}return d}(this.serializer,e);const i=$k(this.serializer,e);i&&(t.labels=i),this.L_(t)}J_(e){const t={};t.database=Hg(this.serializer),t.removeTarget=e,this.L_(t)}}class LP extends IA{constructor(e,t,i,a,l,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,a,c),this.serializer=l}get Y_(){return this.v_>0}start(){this.lastStreamToken=void 0,super.start()}Q_(){this.Y_&&this.Z_([])}G_(e,t){return this.connection.T_("Write",e,t)}z_(e){return Ye(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ye(!e.writeResults||e.writeResults.length===0,55816),this.listener.X_()}onNext(e){Ye(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.C_.reset();const t=jk(e.writeResults,e.commitTime),i=Hi(e.commitTime);return this.listener.ea(i,t)}ta(){const e={};e.database=Hg(this.serializer),this.L_(e)}Z_(e){const t={streamToken:this.lastStreamToken,writes:e.map(i=>Hk(this.serializer,i))};this.L_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VP{}class UP extends VP{constructor(e,t,i,a){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=a,this.na=!1}ra(){if(this.na)throw new ge(ne.FAILED_PRECONDITION,"The client has already been terminated.")}zo(e,t,i,a){return this.ra(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,c])=>this.connection.zo(e,zg(t,i),a,l,c)).catch(l=>{throw l.name==="FirebaseError"?(l.code===ne.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new ge(ne.UNKNOWN,l.toString())})}Yo(e,t,i,a,l){return this.ra(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([c,d])=>this.connection.Yo(e,zg(t,i),a,c,d,l)).catch(c=>{throw c.name==="FirebaseError"?(c.code===ne.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new ge(ne.UNKNOWN,c.toString())})}terminate(){this.na=!0,this.connection.terminate()}}class BP{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.ia=0,this.sa=null,this.oa=!0}_a(){this.ia===0&&(this.aa("Unknown"),this.sa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.sa=null,this.ua("Backend didn't respond within 10 seconds."),this.aa("Offline"),Promise.resolve())))}ca(e){this.state==="Online"?this.aa("Unknown"):(this.ia++,this.ia>=1&&(this.la(),this.ua(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.aa("Offline")))}set(e){this.la(),this.ia=0,e==="Online"&&(this.oa=!1),this.aa(e)}aa(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ua(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.oa?(kr(t),this.oa=!1):ce("OnlineStateTracker",t)}la(){this.sa!==null&&(this.sa.cancel(),this.sa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Na="RemoteStore";class zP{constructor(e,t,i,a,l){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.ha=[],this.Pa=new Map,this.Ta=new Set,this.Ia=[],this.Ea=l,this.Ea.No(c=>{i.enqueueAndForget(async()=>{ja(this)&&(ce(Na,"Restarting streams for network reachability change."),await async function(p){const m=Re(p);m.Ta.add(4),await wc(m),m.da.set("Unknown"),m.Ta.delete(4),await Cd(m)}(this))})}),this.da=new BP(i,a)}}async function Cd(n){if(ja(n))for(const e of n.Ia)await e(!0)}async function wc(n){for(const e of n.Ia)await e(!1)}function NA(n,e){const t=Re(n);t.Pa.has(e.targetId)||(t.Pa.set(e.targetId,e),q_(t)?j_(t):_l(t).M_()&&H_(t,e))}function F_(n,e){const t=Re(n),i=_l(t);t.Pa.delete(e),i.M_()&&OA(t,e),t.Pa.size===0&&(i.M_()?i.N_():ja(t)&&t.da.set("Unknown"))}function H_(n,e){if(n.Aa.Ke(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ae.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}_l(n).H_(e)}function OA(n,e){n.Aa.Ke(e),_l(n).J_(e)}function j_(n){n.Aa=new Mk({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Rt:e=>n.Pa.get(e)||null,Pt:()=>n.datastore.serializer.databaseId}),_l(n).start(),n.da._a()}function q_(n){return ja(n)&&!_l(n).F_()&&n.Pa.size>0}function ja(n){return Re(n).Ta.size===0}function DA(n){n.Aa=void 0}async function FP(n){n.da.set("Online")}async function HP(n){n.Pa.forEach((e,t)=>{H_(n,e)})}async function jP(n,e){DA(n),q_(n)?(n.da.ca(e),j_(n)):n.da.set("Unknown")}async function qP(n,e,t){if(n.da.set("Online"),e instanceof mA&&e.state===2&&e.cause)try{await async function(a,l){const c=l.cause;for(const d of l.targetIds)a.Pa.has(d)&&(await a.remoteSyncer.rejectListen(d,c),a.Pa.delete(d),a.Aa.removeTarget(d))}(n,e)}catch(i){ce(Na,"Failed to remove targets %s: %s ",e.targetIds.join(","),i),await Gf(n,i)}else if(e instanceof bf?n.Aa.Xe(e):e instanceof pA?n.Aa.ot(e):n.Aa.nt(e),!t.isEqual(Ae.min()))try{const i=await RA(n.localStore);t.compareTo(i)>=0&&await function(l,c){const d=l.Aa.It(c);return d.targetChanges.forEach((p,m)=>{if(p.resumeToken.approximateByteSize()>0){const y=l.Pa.get(m);y&&l.Pa.set(m,y.withResumeToken(p.resumeToken,c))}}),d.targetMismatches.forEach((p,m)=>{const y=l.Pa.get(p);if(!y)return;l.Pa.set(p,y.withResumeToken(an.EMPTY_BYTE_STRING,y.snapshotVersion)),OA(l,p);const T=new Ts(y.target,p,m,y.sequenceNumber);H_(l,T)}),l.remoteSyncer.applyRemoteEvent(d)}(n,t)}catch(i){ce(Na,"Failed to raise snapshot:",i),await Gf(n,i)}}async function Gf(n,e,t){if(!gl(e))throw e;n.Ta.add(1),await wc(n),n.da.set("Offline"),t||(t=()=>RA(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{ce(Na,"Retrying IndexedDB access"),await t(),n.Ta.delete(1),await Cd(n)})}function kA(n,e){return e().catch(t=>Gf(n,t,e))}async function Id(n){const e=Re(n),t=Ms(e);let i=e.ha.length>0?e.ha[e.ha.length-1].batchId:I_;for(;GP(e);)try{const a=await RP(e.localStore,i);if(a===null){e.ha.length===0&&t.N_();break}i=a.batchId,KP(e,a)}catch(a){await Gf(e,a)}PA(e)&&MA(e)}function GP(n){return ja(n)&&n.ha.length<10}function KP(n,e){n.ha.push(e);const t=Ms(n);t.M_()&&t.Y_&&t.Z_(e.mutations)}function PA(n){return ja(n)&&!Ms(n).F_()&&n.ha.length>0}function MA(n){Ms(n).start()}async function $P(n){Ms(n).ta()}async function YP(n){const e=Ms(n);for(const t of n.ha)e.Z_(t.mutations)}async function QP(n,e,t){const i=n.ha.shift(),a=M_.from(i,e,t);await kA(n,()=>n.remoteSyncer.applySuccessfulWrite(a)),await Id(n)}async function WP(n,e){e&&Ms(n).Y_&&await async function(i,a){if(function(c){return kk(c)&&c!==ne.ABORTED}(a.code)){const l=i.ha.shift();Ms(i).O_(),await kA(i,()=>i.remoteSyncer.rejectFailedWrite(l.batchId,a)),await Id(i)}}(n,e),PA(n)&&MA(n)}async function mS(n,e){const t=Re(n);t.asyncQueue.verifyOperationInProgress(),ce(Na,"RemoteStore received new credentials");const i=ja(t);t.Ta.add(3),await wc(t),i&&t.da.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ta.delete(3),await Cd(t)}async function XP(n,e){const t=Re(n);e?(t.Ta.delete(2),await Cd(t)):e||(t.Ta.add(2),await wc(t),t.da.set("Unknown"))}function _l(n){return n.Ra||(n.Ra=function(t,i,a){const l=Re(t);return l.ra(),new xP(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)}(n.datastore,n.asyncQueue,{e_:FP.bind(null,n),n_:HP.bind(null,n),i_:jP.bind(null,n),j_:qP.bind(null,n)}),n.Ia.push(async e=>{e?(n.Ra.O_(),q_(n)?j_(n):n.da.set("Unknown")):(await n.Ra.stop(),DA(n))})),n.Ra}function Ms(n){return n.Va||(n.Va=function(t,i,a){const l=Re(t);return l.ra(),new LP(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)}(n.datastore,n.asyncQueue,{e_:()=>Promise.resolve(),n_:$P.bind(null,n),i_:WP.bind(null,n),X_:YP.bind(null,n),ea:QP.bind(null,n)}),n.Ia.push(async e=>{e?(n.Va.O_(),await Id(n)):(await n.Va.stop(),n.ha.length>0&&(ce(Na,`Stopping write stream with ${n.ha.length} pending writes`),n.ha=[]))})),n.Va}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G_{constructor(e,t,i,a,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=a,this.removalCallback=l,this.deferred=new As,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(c=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,a,l){const c=Date.now()+i,d=new G_(e,t,c,a,l);return d.start(i),d}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ge(ne.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function K_(n,e){if(kr("AsyncQueue",`${e}: ${n}`),gl(n))return new ge(ne.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{static emptySet(e){return new Yo(e.comparator)}constructor(e){this.comparator=e?(t,i)=>e(t,i)||ve.comparator(t.key,i.key):(t,i)=>ve.comparator(t.key,i.key),this.keyedMap=Bu(),this.sortedSet=new Dt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,i)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Yo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const a=t.getNext().key,l=i.getNext().key;if(!a.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new Yo;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gS{constructor(){this.ma=new Dt(ve.comparator)}track(e){const t=e.doc.key,i=this.ma.get(t);i?e.type!==0&&i.type===3?this.ma=this.ma.insert(t,e):e.type===3&&i.type!==1?this.ma=this.ma.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.ma=this.ma.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.ma=this.ma.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.ma=this.ma.remove(t):e.type===1&&i.type===2?this.ma=this.ma.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.ma=this.ma.insert(t,{type:2,doc:e.doc}):Se(63341,{Vt:e,fa:i}):this.ma=this.ma.insert(t,e)}ga(){const e=[];return this.ma.inorderTraversal((t,i)=>{e.push(i)}),e}}class al{constructor(e,t,i,a,l,c,d,p,m){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=a,this.mutatedKeys=l,this.fromCache=c,this.syncStateChanged=d,this.excludesMetadataChanges=p,this.hasCachedResults=m}static fromInitialDocuments(e,t,i,a,l){const c=[];return t.forEach(d=>{c.push({type:0,doc:d})}),new al(e,t,Yo.emptySet(t),c,i,a,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Td(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let a=0;a<t.length;a++)if(t[a].type!==i[a].type||!t[a].doc.isEqual(i[a].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZP{constructor(){this.pa=void 0,this.ya=[]}wa(){return this.ya.some(e=>e.Sa())}}class JP{constructor(){this.queries=_S(),this.onlineState="Unknown",this.ba=new Set}terminate(){(function(t,i){const a=Re(t),l=a.queries;a.queries=_S(),l.forEach((c,d)=>{for(const p of d.ya)p.onError(i)})})(this,new ge(ne.ABORTED,"Firestore shutting down"))}}function _S(){return new Fa(n=>eA(n),Td)}async function eM(n,e){const t=Re(n);let i=3;const a=e.query;let l=t.queries.get(a);l?!l.wa()&&e.Sa()&&(i=2):(l=new ZP,i=e.Sa()?0:1);try{switch(i){case 0:l.pa=await t.onListen(a,!0);break;case 1:l.pa=await t.onListen(a,!1);break;case 2:await t.onFirstRemoteStoreListen(a)}}catch(c){const d=K_(c,`Initialization of query '${Ho(e.query)}' failed`);return void e.onError(d)}t.queries.set(a,l),l.ya.push(e),e.Da(t.onlineState),l.pa&&e.va(l.pa)&&$_(t)}async function tM(n,e){const t=Re(n),i=e.query;let a=3;const l=t.queries.get(i);if(l){const c=l.ya.indexOf(e);c>=0&&(l.ya.splice(c,1),l.ya.length===0?a=e.Sa()?0:1:!l.wa()&&e.Sa()&&(a=2))}switch(a){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function nM(n,e){const t=Re(n);let i=!1;for(const a of e){const l=a.query,c=t.queries.get(l);if(c){for(const d of c.ya)d.va(a)&&(i=!0);c.pa=a}}i&&$_(t)}function iM(n,e,t){const i=Re(n),a=i.queries.get(e);if(a)for(const l of a.ya)l.onError(t);i.queries.delete(e)}function $_(n){n.ba.forEach(e=>{e.next()})}var Gg,yS;(yS=Gg||(Gg={})).Ca="default",yS.Cache="cache";class rM{constructor(e,t,i){this.query=e,this.Fa=t,this.Ma=!1,this.xa=null,this.onlineState="Unknown",this.options=i||{}}va(e){if(!this.options.includeMetadataChanges){const i=[];for(const a of e.docChanges)a.type!==3&&i.push(a);e=new al(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Ma?this.Oa(e)&&(this.Fa.next(e),t=!0):this.Na(e,this.onlineState)&&(this.Ba(e),t=!0),this.xa=e,t}onError(e){this.Fa.error(e)}Da(e){this.onlineState=e;let t=!1;return this.xa&&!this.Ma&&this.Na(this.xa,e)&&(this.Ba(this.xa),t=!0),t}Na(e,t){if(!e.fromCache||!this.Sa())return!0;const i=t!=="Offline";return(!this.options.La||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Oa(e){if(e.docChanges.length>0)return!0;const t=this.xa&&this.xa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Ba(e){e=al.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Ma=!0,this.Fa.next(e)}Sa(){return this.options.source!==Gg.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xA{constructor(e){this.key=e}}class LA{constructor(e){this.key=e}}class sM{constructor(e,t){this.query=e,this.Ga=t,this.za=null,this.hasCachedResults=!1,this.current=!1,this.ja=xe(),this.mutatedKeys=xe(),this.Ha=tA(e),this.Ja=new Yo(this.Ha)}get Ya(){return this.Ga}Za(e,t){const i=t?t.Xa:new gS,a=t?t.Ja:this.Ja;let l=t?t.mutatedKeys:this.mutatedKeys,c=a,d=!1;const p=this.query.limitType==="F"&&a.size===this.query.limit?a.last():null,m=this.query.limitType==="L"&&a.size===this.query.limit?a.first():null;if(e.inorderTraversal((y,T)=>{const S=a.get(y),I=Sd(this.query,T)?T:null,N=!!S&&this.mutatedKeys.has(S.key),H=!!I&&(I.hasLocalMutations||this.mutatedKeys.has(I.key)&&I.hasCommittedMutations);let B=!1;S&&I?S.data.isEqual(I.data)?N!==H&&(i.track({type:3,doc:I}),B=!0):this.eu(S,I)||(i.track({type:2,doc:I}),B=!0,(p&&this.Ha(I,p)>0||m&&this.Ha(I,m)<0)&&(d=!0)):!S&&I?(i.track({type:0,doc:I}),B=!0):S&&!I&&(i.track({type:1,doc:S}),B=!0,(p||m)&&(d=!0)),B&&(I?(c=c.add(I),l=H?l.add(y):l.delete(y)):(c=c.delete(y),l=l.delete(y)))}),this.query.limit!==null)for(;c.size>this.query.limit;){const y=this.query.limitType==="F"?c.last():c.first();c=c.delete(y.key),l=l.delete(y.key),i.track({type:1,doc:y})}return{Ja:c,Xa:i,Cs:d,mutatedKeys:l}}eu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,a){const l=this.Ja;this.Ja=e.Ja,this.mutatedKeys=e.mutatedKeys;const c=e.Xa.ga();c.sort((y,T)=>function(I,N){const H=B=>{switch(B){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Se(20277,{Vt:B})}};return H(I)-H(N)}(y.type,T.type)||this.Ha(y.doc,T.doc)),this.tu(i),a=a!=null&&a;const d=t&&!a?this.nu():[],p=this.ja.size===0&&this.current&&!a?1:0,m=p!==this.za;return this.za=p,c.length!==0||m?{snapshot:new al(this.query,e.Ja,l,c,e.mutatedKeys,p===0,m,!1,!!i&&i.resumeToken.approximateByteSize()>0),ru:d}:{ru:d}}Da(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ja:this.Ja,Xa:new gS,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{ru:[]}}iu(e){return!this.Ga.has(e)&&!!this.Ja.has(e)&&!this.Ja.get(e).hasLocalMutations}tu(e){e&&(e.addedDocuments.forEach(t=>this.Ga=this.Ga.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ga=this.Ga.delete(t)),this.current=e.current)}nu(){if(!this.current)return[];const e=this.ja;this.ja=xe(),this.Ja.forEach(i=>{this.iu(i.key)&&(this.ja=this.ja.add(i.key))});const t=[];return e.forEach(i=>{this.ja.has(i)||t.push(new LA(i))}),this.ja.forEach(i=>{e.has(i)||t.push(new xA(i))}),t}su(e){this.Ga=e.$s,this.ja=xe();const t=this.Za(e.documents);return this.applyChanges(t,!0)}ou(){return al.fromInitialDocuments(this.query,this.Ja,this.mutatedKeys,this.za===0,this.hasCachedResults)}}const Y_="SyncEngine";class aM{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class oM{constructor(e){this.key=e,this._u=!1}}class lM{constructor(e,t,i,a,l,c){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=a,this.currentUser=l,this.maxConcurrentLimboResolutions=c,this.au={},this.uu=new Fa(d=>eA(d),Td),this.cu=new Map,this.lu=new Set,this.hu=new Dt(ve.comparator),this.Pu=new Map,this.Tu=new V_,this.Iu={},this.Eu=new Map,this.du=sl.lr(),this.onlineState="Unknown",this.Au=void 0}get isPrimaryClient(){return this.Au===!0}}async function uM(n,e,t=!0){const i=HA(n);let a;const l=i.uu.get(e);return l?(i.sharedClientState.addLocalQueryTarget(l.targetId),a=l.view.ou()):a=await VA(i,e,t,!0),a}async function cM(n,e){const t=HA(n);await VA(t,e,!0,!1)}async function VA(n,e,t,i){const a=await CP(n.localStore,Fi(e)),l=a.targetId,c=n.sharedClientState.addLocalQueryTarget(l,t);let d;return i&&(d=await hM(n,e,l,c==="current",a.resumeToken)),n.isPrimaryClient&&t&&NA(n.remoteStore,a),d}async function hM(n,e,t,i,a){n.Ru=(T,S,I)=>async function(H,B,$,W){let ee=B.view.Za($);ee.Cs&&(ee=await cS(H.localStore,B.query,!1).then(({documents:D})=>B.view.Za(D,ee)));const ae=W&&W.targetChanges.get(B.targetId),he=W&&W.targetMismatches.get(B.targetId)!=null,_e=B.view.applyChanges(ee,H.isPrimaryClient,ae,he);return ES(H,B.targetId,_e.ru),_e.snapshot}(n,T,S,I);const l=await cS(n.localStore,e,!0),c=new sM(e,l.$s),d=c.Za(l.documents),p=Sc.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",a),m=c.applyChanges(d,n.isPrimaryClient,p);ES(n,t,m.ru);const y=new aM(e,t,c);return n.uu.set(e,y),n.cu.has(t)?n.cu.get(t).push(e):n.cu.set(t,[e]),m.snapshot}async function fM(n,e,t){const i=Re(n),a=i.uu.get(e),l=i.cu.get(a.targetId);if(l.length>1)return i.cu.set(a.targetId,l.filter(c=>!Td(c,e))),void i.uu.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(a.targetId),i.sharedClientState.isActiveQueryTarget(a.targetId)||await jg(i.localStore,a.targetId,!1).then(()=>{i.sharedClientState.clearQueryState(a.targetId),t&&F_(i.remoteStore,a.targetId),Kg(i,a.targetId)}).catch(ml)):(Kg(i,a.targetId),await jg(i.localStore,a.targetId,!0))}async function dM(n,e){const t=Re(n),i=t.uu.get(e),a=t.cu.get(i.targetId);t.isPrimaryClient&&a.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),F_(t.remoteStore,i.targetId))}async function pM(n,e,t){const i=TM(n);try{const a=await function(c,d){const p=Re(c),m=Ut.now(),y=d.reduce((I,N)=>I.add(N.key),xe());let T,S;return p.persistence.runTransaction("Locally write mutations","readwrite",I=>{let N=Pr(),H=xe();return p.Bs.getEntries(I,y).next(B=>{N=B,N.forEach(($,W)=>{W.isValidDocument()||(H=H.add($))})}).next(()=>p.localDocuments.getOverlayedDocuments(I,N)).next(B=>{T=B;const $=[];for(const W of d){const ee=Ck(W,T.get(W.key).overlayedDocument);ee!=null&&$.push(new Ha(W.key,ee,Kb(ee.value.mapValue),Cr.exists(!0)))}return p.mutationQueue.addMutationBatch(I,m,$,d)}).next(B=>{S=B;const $=B.applyToLocalDocumentSet(T,H);return p.documentOverlayCache.saveOverlays(I,B.batchId,$)})}).then(()=>({batchId:S.batchId,changes:iA(T)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(a.batchId),function(c,d,p){let m=c.Iu[c.currentUser.toKey()];m||(m=new Dt(Ne)),m=m.insert(d,p),c.Iu[c.currentUser.toKey()]=m}(i,a.batchId,t),await bc(i,a.changes),await Id(i.remoteStore)}catch(a){const l=K_(a,"Failed to persist write");t.reject(l)}}async function UA(n,e){const t=Re(n);try{const i=await bP(t.localStore,e);e.targetChanges.forEach((a,l)=>{const c=t.Pu.get(l);c&&(Ye(a.addedDocuments.size+a.modifiedDocuments.size+a.removedDocuments.size<=1,22616),a.addedDocuments.size>0?c._u=!0:a.modifiedDocuments.size>0?Ye(c._u,14607):a.removedDocuments.size>0&&(Ye(c._u,42227),c._u=!1))}),await bc(t,i,e)}catch(i){await ml(i)}}function vS(n,e,t){const i=Re(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const a=[];i.uu.forEach((l,c)=>{const d=c.view.Da(e);d.snapshot&&a.push(d.snapshot)}),function(c,d){const p=Re(c);p.onlineState=d;let m=!1;p.queries.forEach((y,T)=>{for(const S of T.ya)S.Da(d)&&(m=!0)}),m&&$_(p)}(i.eventManager,e),a.length&&i.au.j_(a),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function mM(n,e,t){const i=Re(n);i.sharedClientState.updateQueryState(e,"rejected",t);const a=i.Pu.get(e),l=a&&a.key;if(l){let c=new Dt(ve.comparator);c=c.insert(l,fn.newNoDocument(l,Ae.min()));const d=xe().add(l),p=new Ad(Ae.min(),new Map,new Dt(Ne),c,d);await UA(i,p),i.hu=i.hu.remove(l),i.Pu.delete(e),Q_(i)}else await jg(i.localStore,e,!1).then(()=>Kg(i,e,t)).catch(ml)}async function gM(n,e){const t=Re(n),i=e.batch.batchId;try{const a=await wP(t.localStore,e);zA(t,i,null),BA(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await bc(t,a)}catch(a){await ml(a)}}async function _M(n,e,t){const i=Re(n);try{const a=await function(c,d){const p=Re(c);return p.persistence.runTransaction("Reject batch","readwrite-primary",m=>{let y;return p.mutationQueue.lookupMutationBatch(m,d).next(T=>(Ye(T!==null,37113),y=T.keys(),p.mutationQueue.removeMutationBatch(m,T))).next(()=>p.mutationQueue.performConsistencyCheck(m)).next(()=>p.documentOverlayCache.removeOverlaysForBatchId(m,y,d)).next(()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(m,y)).next(()=>p.localDocuments.getDocuments(m,y))})}(i.localStore,e);zA(i,e,t),BA(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await bc(i,a)}catch(a){await ml(a)}}function BA(n,e){(n.Eu.get(e)||[]).forEach(t=>{t.resolve()}),n.Eu.delete(e)}function zA(n,e,t){const i=Re(n);let a=i.Iu[i.currentUser.toKey()];if(a){const l=a.get(e);l&&(t?l.reject(t):l.resolve(),a=a.remove(e)),i.Iu[i.currentUser.toKey()]=a}}function Kg(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.cu.get(e))n.uu.delete(i),t&&n.au.Vu(i,t);n.cu.delete(e),n.isPrimaryClient&&n.Tu.Hr(e).forEach(i=>{n.Tu.containsKey(i)||FA(n,i)})}function FA(n,e){n.lu.delete(e.path.canonicalString());const t=n.hu.get(e);t!==null&&(F_(n.remoteStore,t),n.hu=n.hu.remove(e),n.Pu.delete(t),Q_(n))}function ES(n,e,t){for(const i of t)i instanceof xA?(n.Tu.addReference(i.key,e),yM(n,i)):i instanceof LA?(ce(Y_,"Document no longer in limbo: "+i.key),n.Tu.removeReference(i.key,e),n.Tu.containsKey(i.key)||FA(n,i.key)):Se(19791,{mu:i})}function yM(n,e){const t=e.key,i=t.path.canonicalString();n.hu.get(t)||n.lu.has(i)||(ce(Y_,"New document in limbo: "+t),n.lu.add(i),Q_(n))}function Q_(n){for(;n.lu.size>0&&n.hu.size<n.maxConcurrentLimboResolutions;){const e=n.lu.values().next().value;n.lu.delete(e);const t=new ve(ht.fromString(e)),i=n.du.next();n.Pu.set(i,new oM(t)),n.hu=n.hu.insert(t,i),NA(n.remoteStore,new Ts(Fi(Jb(t.path)),i,"TargetPurposeLimboResolution",_d.le))}}async function bc(n,e,t){const i=Re(n),a=[],l=[],c=[];i.uu.isEmpty()||(i.uu.forEach((d,p)=>{c.push(i.Ru(p,e,t).then(m=>{var y;if((m||t)&&i.isPrimaryClient){const T=m?!m.fromCache:(y=t==null?void 0:t.targetChanges.get(p.targetId))===null||y===void 0?void 0:y.current;i.sharedClientState.updateQueryState(p.targetId,T?"current":"not-current")}if(m){a.push(m);const T=B_.Rs(p.targetId,m);l.push(T)}}))}),await Promise.all(c),i.au.j_(a),await async function(p,m){const y=Re(p);try{await y.persistence.runTransaction("notifyLocalViewChanges","readwrite",T=>J.forEach(m,S=>J.forEach(S.ds,I=>y.persistence.referenceDelegate.addReference(T,S.targetId,I)).next(()=>J.forEach(S.As,I=>y.persistence.referenceDelegate.removeReference(T,S.targetId,I)))))}catch(T){if(!gl(T))throw T;ce(z_,"Failed to update sequence numbers: "+T)}for(const T of m){const S=T.targetId;if(!T.fromCache){const I=y.xs.get(S),N=I.snapshotVersion,H=I.withLastLimboFreeSnapshotVersion(N);y.xs=y.xs.insert(S,H)}}}(i.localStore,l))}async function vM(n,e){const t=Re(n);if(!t.currentUser.isEqual(e)){ce(Y_,"User change. New user:",e.toKey());const i=await AA(t.localStore,e);t.currentUser=e,function(l,c){l.Eu.forEach(d=>{d.forEach(p=>{p.reject(new ge(ne.CANCELLED,c))})}),l.Eu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await bc(t,i.ks)}}function EM(n,e){const t=Re(n),i=t.Pu.get(e);if(i&&i._u)return xe().add(i.key);{let a=xe();const l=t.cu.get(e);if(!l)return a;for(const c of l){const d=t.uu.get(c);a=a.unionWith(d.view.Ya)}return a}}function HA(n){const e=Re(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=UA.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=EM.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=mM.bind(null,e),e.au.j_=nM.bind(null,e.eventManager),e.au.Vu=iM.bind(null,e.eventManager),e}function TM(n){const e=Re(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=gM.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=_M.bind(null,e),e}class Kf{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Rd(e.databaseInfo.databaseId),this.sharedClientState=this.pu(e),this.persistence=this.yu(e),await this.persistence.start(),this.localStore=this.wu(e),this.gcScheduler=this.Su(e,this.localStore),this.indexBackfillerScheduler=this.bu(e,this.localStore)}Su(e,t){return null}bu(e,t){return null}wu(e){return SP(this.persistence,new vP,e.initialUser,this.serializer)}yu(e){return new bA(U_.fi,this.serializer)}pu(e){return new NP}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Kf.provider={build:()=>new Kf};class SM extends Kf{constructor(e){super(),this.cacheSizeBytes=e}Su(e,t){Ye(this.persistence.referenceDelegate instanceof qf,46915);const i=this.persistence.referenceDelegate.garbageCollector;return new rP(i,e.asyncQueue,t)}yu(e){const t=this.cacheSizeBytes!==void 0?Rn.withCacheSize(this.cacheSizeBytes):Rn.DEFAULT;return new bA(i=>qf.fi(i,t),this.serializer)}}class $g{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>vS(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=vM.bind(null,this.syncEngine),await XP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new JP}()}createDatastore(e){const t=Rd(e.databaseInfo.databaseId),i=function(l){return new MP(l)}(e.databaseInfo);return function(l,c,d,p){return new UP(l,c,d,p)}(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return function(i,a,l,c,d){return new zP(i,a,l,c,d)}(this.localStore,this.datastore,e.asyncQueue,t=>vS(this.syncEngine,t,0),function(){return dS.C()?new dS:new OP}())}createSyncEngine(e,t){return function(a,l,c,d,p,m,y){const T=new lM(a,l,c,d,p,m);return y&&(T.Au=!0),T}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(a){const l=Re(a);ce(Na,"RemoteStore shutting down."),l.Ta.add(5),await wc(l),l.Ea.shutdown(),l.da.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}$g.provider={build:()=>new $g};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wM{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.vu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.vu(this.observer.error,e):kr("Uncaught Error in snapshot listener:",e.toString()))}Cu(){this.muted=!0}vu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xs="FirestoreClient";class bM{constructor(e,t,i,a,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=a,this.user=hn.UNAUTHENTICATED,this.clientId=Lb.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(i,async c=>{ce(xs,"Received user=",c.uid),await this.authCredentialListener(c),this.user=c}),this.appCheckCredentials.start(i,c=>(ce(xs,"Received new app check token=",c),this.appCheckCredentialListener(c,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new As;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=K_(t,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function ig(n,e){n.asyncQueue.verifyOperationInProgress(),ce(xs,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener(async a=>{i.isEqual(a)||(await AA(e.localStore,a),i=a)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function TS(n,e){n.asyncQueue.verifyOperationInProgress();const t=await AM(n);ce(xs,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(i=>mS(e.remoteStore,i)),n.setAppCheckTokenChangeListener((i,a)=>mS(e.remoteStore,a)),n._onlineComponents=e}async function AM(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){ce(xs,"Using user provided OfflineComponentProvider");try{await ig(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(a){return a.name==="FirebaseError"?a.code===ne.FAILED_PRECONDITION||a.code===ne.UNIMPLEMENTED:!(typeof DOMException<"u"&&a instanceof DOMException)||a.code===22||a.code===20||a.code===11}(t))throw t;tl("Error using user provided cache. Falling back to memory cache: "+t),await ig(n,new Kf)}}else ce(xs,"Using default OfflineComponentProvider"),await ig(n,new SM(void 0));return n._offlineComponents}async function jA(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(ce(xs,"Using user provided OnlineComponentProvider"),await TS(n,n._uninitializedComponentsProvider._online)):(ce(xs,"Using default OnlineComponentProvider"),await TS(n,new $g))),n._onlineComponents}function RM(n){return jA(n).then(e=>e.syncEngine)}async function CM(n){const e=await jA(n),t=e.eventManager;return t.onListen=uM.bind(null,e.syncEngine),t.onUnlisten=fM.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=cM.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=dM.bind(null,e.syncEngine),t}function IM(n,e,t={}){const i=new As;return n.asyncQueue.enqueueAndForget(async()=>function(l,c,d,p,m){const y=new wM({next:S=>{y.Cu(),c.enqueueAndForget(()=>tM(l,T)),S.fromCache&&p.source==="server"?m.reject(new ge(ne.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):m.resolve(S)},error:S=>m.reject(S)}),T=new rM(d,y,{includeMetadataChanges:!0,La:!0});return eM(l,T)}(await CM(n),n.asyncQueue,e,t,i)),i.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qA(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SS=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GA(n,e,t){if(!t)throw new ge(ne.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function NM(n,e,t,i){if(e===!0&&i===!0)throw new ge(ne.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function wS(n){if(!ve.isDocumentKey(n))throw new ge(ne.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function bS(n){if(ve.isDocumentKey(n))throw new ge(ne.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function W_(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Se(12329,{type:typeof n})}function $f(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new ge(ne.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=W_(n);throw new ge(ne.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KA="firestore.googleapis.com",AS=!0;class RS{constructor(e){var t,i;if(e.host===void 0){if(e.ssl!==void 0)throw new ge(ne.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=KA,this.ssl=AS}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:AS;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=wA;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<nP)throw new ge(ne.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}NM("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=qA((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new ge(ne.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new ge(ne.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new ge(ne.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,a){return i.timeoutSeconds===a.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Nd{constructor(e,t,i,a){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new RS({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ge(ne.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ge(ne.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new RS(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new D2;switch(i.type){case"firstParty":return new x2(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new ge(ne.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const i=SS.get(t);i&&(ce("ComponentProvider","Removing Datastore"),SS.delete(t),i.terminate())}(this),Promise.resolve()}}function OM(n,e,t,i={}){var a;n=$f(n,Nd);const l=Vr(e),c=n._getSettings(),d=Object.assign(Object.assign({},c),{emulatorOptions:n._getEmulatorOptions()}),p=`${e}:${t}`;l&&(pd(`https://${p}`),md("Firestore",!0)),c.host!==KA&&c.host!==p&&tl("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const m=Object.assign(Object.assign({},c),{host:p,ssl:l,emulatorOptions:i});if(!Or(m,d)&&(n._setSettings(m),i.mockUserToken)){let y,T;if(typeof i.mockUserToken=="string")y=i.mockUserToken,T=hn.MOCK_USER;else{y=T_(i.mockUserToken,(a=n._app)===null||a===void 0?void 0:a.options.projectId);const S=i.mockUserToken.sub||i.mockUserToken.user_id;if(!S)throw new ge(ne.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");T=new hn(S)}n._authCredentials=new k2(new Mb(y,T))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Od(this.firestore,e,this._query)}}class yi{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Cs(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new yi(this.firestore,e,this._key)}}class Cs extends Od{constructor(e,t,i){super(e,t,Jb(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new yi(this.firestore,null,new ve(e))}withConverter(e){return new Cs(this.firestore,e,this._path)}}function X_(n,e,...t){if(n=bt(n),GA("collection","path",e),n instanceof Nd){const i=ht.fromString(e,...t);return bS(i),new Cs(n,null,i)}{if(!(n instanceof yi||n instanceof Cs))throw new ge(ne.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(ht.fromString(e,...t));return bS(i),new Cs(n.firestore,null,i)}}function DM(n,e,...t){if(n=bt(n),arguments.length===1&&(e=Lb.newId()),GA("doc","path",e),n instanceof Nd){const i=ht.fromString(e,...t);return wS(i),new yi(n,null,new ve(i))}{if(!(n instanceof yi||n instanceof Cs))throw new ge(ne.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(ht.fromString(e,...t));return wS(i),new yi(n.firestore,n instanceof Cs?n.converter:null,new ve(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CS="AsyncQueue";class IS{constructor(e=Promise.resolve()){this.zu=[],this.ju=!1,this.Hu=[],this.Ju=null,this.Yu=!1,this.Zu=!1,this.Xu=[],this.C_=new CA(this,"async_queue_retry"),this.ec=()=>{const i=ng();i&&ce(CS,"Visibility state changed to "+i.visibilityState),this.C_.p_()},this.tc=e;const t=ng();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.ec)}get isShuttingDown(){return this.ju}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.nc(),this.rc(e)}enterRestrictedMode(e){if(!this.ju){this.ju=!0,this.Zu=e||!1;const t=ng();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.ec)}}enqueue(e){if(this.nc(),this.ju)return new Promise(()=>{});const t=new As;return this.rc(()=>this.ju&&this.Zu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.zu.push(e),this.sc()))}async sc(){if(this.zu.length!==0){try{await this.zu[0](),this.zu.shift(),this.C_.reset()}catch(e){if(!gl(e))throw e;ce(CS,"Operation failed with retryable error: "+e)}this.zu.length>0&&this.C_.f_(()=>this.sc())}}rc(e){const t=this.tc.then(()=>(this.Yu=!0,e().catch(i=>{throw this.Ju=i,this.Yu=!1,kr("INTERNAL UNHANDLED ERROR: ",NS(i)),i}).then(i=>(this.Yu=!1,i))));return this.tc=t,t}enqueueAfterDelay(e,t,i){this.nc(),this.Xu.indexOf(e)>-1&&(t=0);const a=G_.createAndSchedule(this,e,t,i,l=>this.oc(l));return this.Hu.push(a),a}nc(){this.Ju&&Se(47125,{_c:NS(this.Ju)})}verifyOperationInProgress(){}async ac(){let e;do e=this.tc,await e;while(e!==this.tc)}uc(e){for(const t of this.Hu)if(t.timerId===e)return!0;return!1}cc(e){return this.ac().then(()=>{this.Hu.sort((t,i)=>t.targetTimeMs-i.targetTimeMs);for(const t of this.Hu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.ac()})}lc(e){this.Xu.push(e)}oc(e){const t=this.Hu.indexOf(e);this.Hu.splice(t,1)}}function NS(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class Z_ extends Nd{constructor(e,t,i,a){super(e,t,i,a),this.type="firestore",this._queue=new IS,this._persistenceKey=(a==null?void 0:a.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new IS(e),this._firestoreClient=void 0,await e}}}function kM(n,e){const t=typeof n=="object"?n:Ec(),i=typeof n=="string"?n:Uf,a=Br(t,"firestore").getImmediate({identifier:i});if(!a._initialized){const l=v_("firestore");l&&OM(a,...l)}return a}function $A(n){if(n._terminated)throw new ge(ne.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||PM(n),n._firestoreClient}function PM(n){var e,t,i;const a=n._freezeSettings(),l=function(d,p,m,y){return new W2(d,p,m,y.host,y.ssl,y.experimentalForceLongPolling,y.experimentalAutoDetectLongPolling,qA(y.experimentalLongPollingOptions),y.useFetchStreams,y.isUsingEmulator)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,a);n._componentsProvider||!((t=a.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((i=a.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:a.localCache._offlineComponentProvider,_online:a.localCache._onlineComponentProvider}),n._firestoreClient=new bM(n._authCredentials,n._appCheckCredentials,n._queue,l,n._componentsProvider&&function(d){const p=d==null?void 0:d._online.build();return{_offline:d==null?void 0:d._offline.build(p),_online:p}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ol(an.fromBase64String(e))}catch(t){throw new ge(ne.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new ol(an.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J_{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ge(ne.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new sn(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ey{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ty{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ge(ne.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ge(ne.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ne(this._lat,e._lat)||Ne(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ny{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(i,a){if(i.length!==a.length)return!1;for(let l=0;l<i.length;++l)if(i[l]!==a[l])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MM=/^__.*__$/;class xM{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new Ha(e,this.data,this.fieldMask,t,this.fieldTransforms):new Tc(e,this.data,t,this.fieldTransforms)}}function YA(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Se(40011,{hc:n})}}class iy{constructor(e,t,i,a,l,c){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=a,l===void 0&&this.Pc(),this.fieldTransforms=l||[],this.fieldMask=c||[]}get path(){return this.settings.path}get hc(){return this.settings.hc}Tc(e){return new iy(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ic(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),a=this.Tc({path:i,Ec:!1});return a.dc(e),a}Ac(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),a=this.Tc({path:i,Ec:!1});return a.Pc(),a}Rc(e){return this.Tc({path:void 0,Ec:!0})}Vc(e){return Yf(e,this.settings.methodName,this.settings.mc||!1,this.path,this.settings.fc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Pc(){if(this.path)for(let e=0;e<this.path.length;e++)this.dc(this.path.get(e))}dc(e){if(e.length===0)throw this.Vc("Document fields must not be empty");if(YA(this.hc)&&MM.test(e))throw this.Vc('Document fields cannot begin and end with "__"')}}class LM{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||Rd(e)}gc(e,t,i,a=!1){return new iy({hc:e,methodName:t,fc:i,path:sn.emptyPath(),Ec:!1,mc:a},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function VM(n){const e=n._freezeSettings(),t=Rd(n._databaseId);return new LM(n._databaseId,!!e.ignoreUndefinedProperties,t)}function UM(n,e,t,i,a,l={}){const c=n.gc(l.merge||l.mergeFields?2:0,e,t,a);ZA("Data must be an object, but it was:",c,i);const d=WA(i,c);let p,m;if(l.merge)p=new mi(c.fieldMask),m=c.fieldTransforms;else if(l.mergeFields){const y=[];for(const T of l.mergeFields){const S=BM(e,T,t);if(!c.contains(S))throw new ge(ne.INVALID_ARGUMENT,`Field '${S}' is specified in your field mask but missing from your input data.`);FM(y,S)||y.push(S)}p=new mi(y),m=c.fieldTransforms.filter(T=>p.covers(T.field))}else p=null,m=c.fieldTransforms;return new xM(new ii(d),p,m)}class ry extends ey{_toFieldTransform(e){return new wk(e.path,new cc)}isEqual(e){return e instanceof ry}}function QA(n,e){if(XA(n=bt(n)))return ZA("Unsupported field value:",e,n),WA(n,e);if(n instanceof ey)return function(i,a){if(!YA(a.hc))throw a.Vc(`${i._methodName}() can only be used with update() and set()`);if(!a.path)throw a.Vc(`${i._methodName}() is not currently supported inside arrays`);const l=i._toFieldTransform(a);l&&a.fieldTransforms.push(l)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Ec&&e.hc!==4)throw e.Vc("Nested arrays are not supported");return function(i,a){const l=[];let c=0;for(const d of i){let p=QA(d,a.Rc(c));p==null&&(p={nullValue:"NULL_VALUE"}),l.push(p),c++}return{arrayValue:{values:l}}}(n,e)}return function(i,a){if((i=bt(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return Ek(a.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const l=Ut.fromDate(i);return{timestampValue:jf(a.serializer,l)}}if(i instanceof Ut){const l=new Ut(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:jf(a.serializer,l)}}if(i instanceof ty)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof ol)return{bytesValue:gA(a.serializer,i._byteString)};if(i instanceof yi){const l=a.databaseId,c=i.firestore._databaseId;if(!c.isEqual(l))throw a.Vc(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:L_(i.firestore._databaseId||a.databaseId,i._key.path)}}if(i instanceof ny)return function(c,d){return{mapValue:{fields:{[qb]:{stringValue:Gb},[Bf]:{arrayValue:{values:c.toArray().map(m=>{if(typeof m!="number")throw d.Vc("VectorValues must only contain numeric values.");return P_(d.serializer,m)})}}}}}}(i,a);throw a.Vc(`Unsupported field value: ${W_(i)}`)}(n,e)}function WA(n,e){const t={};return Ub(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):za(n,(i,a)=>{const l=QA(a,e.Ic(i));l!=null&&(t[i]=l)}),{mapValue:{fields:t}}}function XA(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Ut||n instanceof ty||n instanceof ol||n instanceof yi||n instanceof ey||n instanceof ny)}function ZA(n,e,t){if(!XA(t)||!function(a){return typeof a=="object"&&a!==null&&(Object.getPrototypeOf(a)===Object.prototype||Object.getPrototypeOf(a)===null)}(t)){const i=W_(t);throw i==="an object"?e.Vc(n+" a custom object"):e.Vc(n+" "+i)}}function BM(n,e,t){if((e=bt(e))instanceof J_)return e._internalPath;if(typeof e=="string")return JA(n,e);throw Yf("Field path arguments must be of type string or ",n,!1,void 0,t)}const zM=new RegExp("[~\\*/\\[\\]]");function JA(n,e,t){if(e.search(zM)>=0)throw Yf(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new J_(...e.split("."))._internalPath}catch{throw Yf(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Yf(n,e,t,i,a){const l=i&&!i.isEmpty(),c=a!==void 0;let d=`Function ${e}() called with invalid data`;t&&(d+=" (via `toFirestore()`)"),d+=". ";let p="";return(l||c)&&(p+=" (found",l&&(p+=` in field ${i}`),c&&(p+=` in document ${a}`),p+=")"),new ge(ne.INVALID_ARGUMENT,d+n+p)}function FM(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eR{constructor(e,t,i,a,l){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=a,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new yi(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new HM(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(tR("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class HM extends eR{data(){return super.data()}}function tR(n,e){return typeof e=="string"?JA(n,e):e instanceof J_?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jM(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new ge(ne.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class qM{convertValue(e,t="none"){switch(Ps(e)){case 0:return null;case 1:return e.booleanValue;case 2:return wt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(ks(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Se(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return za(e,(a,l)=>{i[a]=this.convertValue(l,t)}),i}convertVectorValue(e){var t,i,a;const l=(a=(i=(t=e.fields)===null||t===void 0?void 0:t[Bf].arrayValue)===null||i===void 0?void 0:i.values)===null||a===void 0?void 0:a.map(c=>wt(c.doubleValue));return new ny(l)}convertGeoPoint(e){return new ty(wt(e.latitude),wt(e.longitude))}convertArray(e,t){return(e.values||[]).map(i=>this.convertValue(i,t))}convertServerTimestamp(e,t){switch(t){case"previous":const i=vd(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(oc(e));default:return null}}convertTimestamp(e){const t=Ds(e);return new Ut(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=ht.fromString(e);Ye(SA(i),9688,{name:e});const a=new lc(i.get(1),i.get(3)),l=new ve(i.popFirst(5));return a.isEqual(t)||kr(`Document ${l} contains a document reference within a different database (${a.projectId}/${a.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GM(n,e,t){let i;return i=n?n.toFirestore(e):e,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class KM extends eR{constructor(e,t,i,a,l,c){super(e,t,i,a,c),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Af(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(tR("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}}class Af extends KM{data(e={}){return super.data(e)}}class $M{constructor(e,t,i,a){this._firestore=e,this._userDataWriter=t,this._snapshot=a,this.metadata=new ff(a.hasPendingWrites,a.fromCache),this.query=i}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(i=>{e.call(t,new Af(this._firestore,this._userDataWriter,i.key,i,new ff(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ge(ne.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(a,l){if(a._snapshot.oldDocs.isEmpty()){let c=0;return a._snapshot.docChanges.map(d=>{const p=new Af(a._firestore,a._userDataWriter,d.doc.key,d.doc,new ff(a._snapshot.mutatedKeys.has(d.doc.key),a._snapshot.fromCache),a.query.converter);return d.doc,{type:"added",doc:p,oldIndex:-1,newIndex:c++}})}{let c=a._snapshot.oldDocs;return a._snapshot.docChanges.filter(d=>l||d.type!==3).map(d=>{const p=new Af(a._firestore,a._userDataWriter,d.doc.key,d.doc,new ff(a._snapshot.mutatedKeys.has(d.doc.key),a._snapshot.fromCache),a.query.converter);let m=-1,y=-1;return d.type!==0&&(m=c.indexOf(d.doc.key),c=c.delete(d.doc.key)),d.type!==1&&(c=c.add(d.doc),y=c.indexOf(d.doc.key)),{type:YM(d.type),doc:p,oldIndex:m,newIndex:y}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function YM(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Se(61501,{type:n})}}class QM extends qM{constructor(e){super(),this.firestore=e}convertBytes(e){return new ol(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new yi(this.firestore,null,t)}}function WM(n){n=$f(n,Od);const e=$f(n.firestore,Z_),t=$A(e),i=new QM(e);return jM(n._query),IM(t,n._query).then(a=>new $M(e,i,n,a))}function nR(n,e){const t=$f(n.firestore,Z_),i=DM(n),a=GM(n.converter,e);return XM(t,[UM(VM(n.firestore),"addDoc",i._key,a,n.converter!==null,{}).toMutation(i._key,Cr.exists(!1))]).then(()=>i)}function XM(n,e){return function(i,a){const l=new As;return i.asyncQueue.enqueueAndForget(async()=>pM(await RM(i),a,l)),l.promise}($A(n),e)}function iR(){return new ry("serverTimestamp")}(function(e,t=!0){(function(a){pl=a})(Vs),si(new jn("firestore",(i,{instanceIdentifier:a,options:l})=>{const c=i.getProvider("app").getImmediate(),d=new Z_(new P2(i.getProvider("auth-internal")),new L2(c,i.getProvider("app-check-internal")),function(m,y){if(!Object.prototype.hasOwnProperty.apply(m.options,["projectId"]))throw new ge(ne.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new lc(m.options.projectId,y)}(c,a),c);return l=Object.assign({useFetchStreams:t},l),d._setSettings(l),d},"PUBLIC").setMultipleInstances(!0)),gn(M0,x0,e),gn(M0,x0,"esm2017")})();function sy(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,i=Object.getOwnPropertySymbols(n);a<i.length;a++)e.indexOf(i[a])<0&&Object.prototype.propertyIsEnumerable.call(n,i[a])&&(t[i[a]]=n[i[a]]);return t}function rR(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ZM=rR,sR=new Ua("auth","Firebase",rR());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qf=new vc("@firebase/auth");function JM(n,...e){Qf.logLevel<=Me.WARN&&Qf.warn(`Auth (${Vs}): ${n}`,...e)}function Rf(n,...e){Qf.logLevel<=Me.ERROR&&Qf.error(`Auth (${Vs}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ki(n,...e){throw oy(n,...e)}function Nn(n,...e){return oy(n,...e)}function ay(n,e,t){const i=Object.assign(Object.assign({},ZM()),{[e]:t});return new Ua("auth","Firebase",i).create(e,{appName:n.name})}function Is(n){return ay(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ex(n,e,t){const i=t;if(!(e instanceof i))throw i.name!==e.constructor.name&&Ki(n,"argument-error"),ay(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function oy(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return sR.create(n,...e)}function fe(n,e,...t){if(!n)throw oy(e,...t)}function wr(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Rf(e),new Error(e)}function Mr(n,e){n||wr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yg(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function aR(){return OS()==="http:"||OS()==="https:"}function OS(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tx(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(aR()||w_()||"connection"in navigator)?navigator.onLine:!0}function nx(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(e,t){this.shortDelay=e,this.longDelay=t,Mr(t>e,"Short delay should be less than long delay!"),this.isMobile=S_()||yb()}get(){return tx()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ly(n,e){Mr(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oR{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;wr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;wr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;wr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ix={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rx=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],sx=new Ac(3e4,6e4);function Yi(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Ei(n,e,t,i,a={}){return lR(n,a,async()=>{let l={},c={};i&&(e==="GET"?c=i:l={body:JSON.stringify(i)});const d=Ba(Object.assign({key:n.config.apiKey},c)).slice(1),p=await n._getAdditionalHeaders();p["Content-Type"]="application/json",n.languageCode&&(p["X-Firebase-Locale"]=n.languageCode);const m=Object.assign({method:e,headers:p},l);return sD()||(m.referrerPolicy="no-referrer"),n.emulatorConfig&&Vr(n.emulatorConfig.host)&&(m.credentials="include"),oR.fetch()(await uR(n,n.config.apiHost,t,d),m)})}async function lR(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},ix),e);try{const a=new ox(n),l=await Promise.race([t(),a.promise]);a.clearNetworkTimeout();const c=await l.json();if("needConfirmation"in c)throw Fu(n,"account-exists-with-different-credential",c);if(l.ok&&!("errorMessage"in c))return c;{const d=l.ok?c.errorMessage:c.error.message,[p,m]=d.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw Fu(n,"credential-already-in-use",c);if(p==="EMAIL_EXISTS")throw Fu(n,"email-already-in-use",c);if(p==="USER_DISABLED")throw Fu(n,"user-disabled",c);const y=i[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(m)throw ay(n,y,m);Ki(n,y)}}catch(a){if(a instanceof oi)throw a;Ki(n,"network-request-failed",{message:String(a)})}}async function Dd(n,e,t,i,a={}){const l=await Ei(n,e,t,i,a);return"mfaPendingCredential"in l&&Ki(n,"multi-factor-auth-required",{_serverResponse:l}),l}async function uR(n,e,t,i){const a=`${e}${t}?${i}`,l=n,c=l.config.emulator?ly(n.config,a):`${n.config.apiScheme}://${a}`;return rx.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(c).toString():c}function ax(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class ox{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(Nn(this.auth,"network-request-failed")),sx.get())})}}function Fu(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const a=Nn(n,e,i);return a.customData._tokenResponse=t,a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DS(n){return n!==void 0&&n.getResponse!==void 0}function kS(n){return n!==void 0&&n.enterprise!==void 0}class cR{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return ax(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lx(n){return(await Ei(n,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function hR(n,e){return Ei(n,"GET","/v2/recaptchaConfig",Yi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ux(n,e){return Ei(n,"POST","/v1/accounts:delete",e)}async function Wf(n,e){return Ei(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $u(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function cx(n,e=!1){const t=bt(n),i=await t.getIdToken(e),a=uy(i);fe(a&&a.exp&&a.auth_time&&a.iat,t.auth,"internal-error");const l=typeof a.firebase=="object"?a.firebase:void 0,c=l==null?void 0:l.sign_in_provider;return{claims:a,token:i,authTime:$u(rg(a.auth_time)),issuedAtTime:$u(rg(a.iat)),expirationTime:$u(rg(a.exp)),signInProvider:c||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function rg(n){return Number(n)*1e3}function uy(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return Rf("JWT malformed, contained fewer than 3 sections"),null;try{const a=Mf(t);return a?JSON.parse(a):(Rf("Failed to decode base64 JWT payload"),null)}catch(a){return Rf("Caught error parsing JWT payload as JSON",a==null?void 0:a.toString()),null}}function PS(n){const e=uy(n);return fe(e,"internal-error"),fe(typeof e.exp<"u","internal-error"),fe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dc(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof oi&&hx(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function hx({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fx{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const a=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,a)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=$u(this.lastLoginAt),this.creationTime=$u(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xf(n){var e;const t=n.auth,i=await n.getIdToken(),a=await dc(n,Wf(t,{idToken:i}));fe(a==null?void 0:a.users.length,t,"internal-error");const l=a.users[0];n._notifyReloadListener(l);const c=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?fR(l.providerUserInfo):[],d=px(n.providerData,c),p=n.isAnonymous,m=!(n.email&&l.passwordHash)&&!(d!=null&&d.length),y=p?m:!1,T={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:d,metadata:new Qg(l.createdAt,l.lastLoginAt),isAnonymous:y};Object.assign(n,T)}async function dx(n){const e=bt(n);await Xf(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function px(n,e){return[...n.filter(i=>!e.some(a=>a.providerId===i.providerId)),...e]}function fR(n){return n.map(e=>{var{providerId:t}=e,i=sy(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mx(n,e){const t=await lR(n,{},async()=>{const i=Ba({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:l}=n.config,c=await uR(n,a,"/v1/token",`key=${l}`),d=await n._getAdditionalHeaders();return d["Content-Type"]="application/x-www-form-urlencoded",oR.fetch()(c,{method:"POST",headers:d,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function gx(n,e){return Ei(n,"POST","/v2/accounts:revokeToken",Yi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){fe(e.idToken,"internal-error"),fe(typeof e.idToken<"u","internal-error"),fe(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):PS(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){fe(e.length!==0,"internal-error");const t=PS(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(fe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:a,expiresIn:l}=await mx(e,t);this.updateTokensAndExpiration(i,a,Number(l))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:a,expirationTime:l}=t,c=new Qo;return i&&(fe(typeof i=="string","internal-error",{appName:e}),c.refreshToken=i),a&&(fe(typeof a=="string","internal-error",{appName:e}),c.accessToken=a),l&&(fe(typeof l=="number","internal-error",{appName:e}),c.expirationTime=l),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Qo,this.toJSON())}_performRefresh(){return wr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gs(n,e){fe(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class gi{constructor(e){var{uid:t,auth:i,stsTokenManager:a}=e,l=sy(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new fx(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new Qg(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await dc(this,this.stsTokenManager.getToken(this.auth,e));return fe(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return cx(this,e)}reload(){return dx(this)}_assign(e){this!==e&&(fe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new gi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){fe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Xf(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Cn(this.auth.app))return Promise.reject(Is(this.auth));const e=await this.getIdToken();return await dc(this,ux(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,a,l,c,d,p,m,y;const T=(i=t.displayName)!==null&&i!==void 0?i:void 0,S=(a=t.email)!==null&&a!==void 0?a:void 0,I=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,N=(c=t.photoURL)!==null&&c!==void 0?c:void 0,H=(d=t.tenantId)!==null&&d!==void 0?d:void 0,B=(p=t._redirectEventId)!==null&&p!==void 0?p:void 0,$=(m=t.createdAt)!==null&&m!==void 0?m:void 0,W=(y=t.lastLoginAt)!==null&&y!==void 0?y:void 0,{uid:ee,emailVerified:ae,isAnonymous:he,providerData:_e,stsTokenManager:D}=t;fe(ee&&D,e,"internal-error");const A=Qo.fromJSON(this.name,D);fe(typeof ee=="string",e,"internal-error"),gs(T,e.name),gs(S,e.name),fe(typeof ae=="boolean",e,"internal-error"),fe(typeof he=="boolean",e,"internal-error"),gs(I,e.name),gs(N,e.name),gs(H,e.name),gs(B,e.name),gs($,e.name),gs(W,e.name);const R=new gi({uid:ee,auth:e,email:S,emailVerified:ae,displayName:T,isAnonymous:he,photoURL:N,phoneNumber:I,tenantId:H,stsTokenManager:A,createdAt:$,lastLoginAt:W});return _e&&Array.isArray(_e)&&(R.providerData=_e.map(P=>Object.assign({},P))),B&&(R._redirectEventId=B),R}static async _fromIdTokenResponse(e,t,i=!1){const a=new Qo;a.updateFromServerResponse(t);const l=new gi({uid:t.localId,auth:e,stsTokenManager:a,isAnonymous:i});return await Xf(l),l}static async _fromGetAccountInfoResponse(e,t,i){const a=t.users[0];fe(a.localId!==void 0,"internal-error");const l=a.providerUserInfo!==void 0?fR(a.providerUserInfo):[],c=!(a.email&&a.passwordHash)&&!(l!=null&&l.length),d=new Qo;d.updateFromIdToken(i);const p=new gi({uid:a.localId,auth:e,stsTokenManager:d,isAnonymous:c}),m={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:l,metadata:new Qg(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!(l!=null&&l.length)};return Object.assign(p,m),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MS=new Map;function br(n){Mr(n instanceof Function,"Expected a class definition");let e=MS.get(n);return e?(Mr(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,MS.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dR{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}dR.type="NONE";const xS=dR;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cf(n,e,t){return`firebase:${n}:${e}:${t}`}class Wo{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:a,name:l}=this.auth;this.fullUserKey=Cf(this.userKey,a.apiKey,l),this.fullPersistenceKey=Cf("persistence",a.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Wf(this.auth,{idToken:e}).catch(()=>{});return t?gi._fromGetAccountInfoResponse(this.auth,t,e):null}return gi._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new Wo(br(xS),e,i);const a=(await Promise.all(t.map(async m=>{if(await m._isAvailable())return m}))).filter(m=>m);let l=a[0]||br(xS);const c=Cf(i,e.config.apiKey,e.name);let d=null;for(const m of t)try{const y=await m._get(c);if(y){let T;if(typeof y=="string"){const S=await Wf(e,{idToken:y}).catch(()=>{});if(!S)break;T=await gi._fromGetAccountInfoResponse(e,S,y)}else T=gi._fromJSON(e,y);m!==l&&(d=T),l=m;break}}catch{}const p=a.filter(m=>m._shouldAllowMigration);return!l._shouldAllowMigration||!p.length?new Wo(l,e,i):(l=p[0],d&&await l._set(c,d.toJSON()),await Promise.all(t.map(async m=>{if(m!==l)try{await m._remove(c)}catch{}})),new Wo(l,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LS(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(_R(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(pR(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(vR(e))return"Blackberry";if(ER(e))return"Webos";if(mR(e))return"Safari";if((e.includes("chrome/")||gR(e))&&!e.includes("edge/"))return"Chrome";if(yR(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function pR(n=_n()){return/firefox\//i.test(n)}function mR(n=_n()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function gR(n=_n()){return/crios\//i.test(n)}function _R(n=_n()){return/iemobile/i.test(n)}function yR(n=_n()){return/android/i.test(n)}function vR(n=_n()){return/blackberry/i.test(n)}function ER(n=_n()){return/webos/i.test(n)}function cy(n=_n()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function _x(n=_n()){var e;return cy(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function yx(){return aD()&&document.documentMode===10}function TR(n=_n()){return cy(n)||yR(n)||ER(n)||vR(n)||/windows phone/i.test(n)||_R(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SR(n,e=[]){let t;switch(n){case"Browser":t=LS(_n());break;case"Worker":t=`${LS(_n())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Vs}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vx{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=l=>new Promise((c,d)=>{try{const p=e(l);c(p)}catch(p){d(p)}});i.onAbort=t,this.queue.push(i);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const a of t)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ex(n,e={}){return Ei(n,"GET","/v2/passwordPolicy",Yi(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tx=6;class Sx{constructor(e){var t,i,a,l;const c=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=c.minPasswordLength)!==null&&t!==void 0?t:Tx,c.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=c.maxPasswordLength),c.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=c.containsLowercaseCharacter),c.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=c.containsUppercaseCharacter),c.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=c.containsNumericCharacter),c.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=c.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(a=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&a!==void 0?a:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,a,l,c,d;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(t=p.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),p.isValid&&(p.isValid=(i=p.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),p.isValid&&(p.isValid=(a=p.containsLowercaseLetter)!==null&&a!==void 0?a:!0),p.isValid&&(p.isValid=(l=p.containsUppercaseLetter)!==null&&l!==void 0?l:!0),p.isValid&&(p.isValid=(c=p.containsNumericCharacter)!==null&&c!==void 0?c:!0),p.isValid&&(p.isValid=(d=p.containsNonAlphanumericCharacter)!==null&&d!==void 0?d:!0),p}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),a&&(t.meetsMaxPasswordLength=e.length<=a)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let a=0;a<e.length;a++)i=e.charAt(a),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,a,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wx{constructor(e,t,i,a){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new VS(this),this.idTokenSubscription=new VS(this),this.beforeStateQueue=new vx(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=sR,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=br(t)),this._initializationPromise=this.queue(async()=>{var i,a,l;if(!this._deleted&&(this.persistenceManager=await Wo.create(this,e),(i=this._resolvePersistenceManagerAvailable)===null||i===void 0||i.call(this),!this._deleted)){if(!((a=this._popupRedirectResolver)===null||a===void 0)&&a._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((l=this.currentUser)===null||l===void 0?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Wf(this,{idToken:e}),i=await gi._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Cn(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(d,d))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let a=i,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,d=a==null?void 0:a._redirectEventId,p=await this.tryRedirectSignIn(e);(!c||c===d)&&(p!=null&&p.user)&&(a=p.user,l=!0)}if(!a)return this.directlySetCurrentUser(null);if(!a._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(a)}catch(c){a=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return a?this.reloadAndSetCurrentUserOrClear(a):this.directlySetCurrentUser(null)}return fe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===a._redirectEventId?this.directlySetCurrentUser(a):this.reloadAndSetCurrentUserOrClear(a)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Xf(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=nx()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Cn(this.app))return Promise.reject(Is(this));const t=e?bt(e):null;return t&&fe(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&fe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Cn(this.app)?Promise.reject(Is(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Cn(this.app)?Promise.reject(Is(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(br(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Ex(this),t=new Sx(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ua("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await gx(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&br(e)||this._popupRedirectResolver;fe(t,this,"argument-error"),this.redirectPersistenceManager=await Wo.create(this,[br(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,a){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let c=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(fe(d,this,"internal-error"),d.then(()=>{c||l(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,i,a);return()=>{c=!0,p()}}else{const p=e.addObserver(t);return()=>{c=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return fe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=SR(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const a=await this._getAppCheckToken();return a&&(t["X-Firebase-AppCheck"]=a),t}async _getAppCheckToken(){var e;if(Cn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&JM(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function zr(n){return bt(n)}class VS{constructor(e){this.auth=e,this.observer=null,this.addObserver=mD(t=>this.observer=t)}get next(){return fe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function bx(n){Rc=n}function hy(n){return Rc.loadJS(n)}function Ax(){return Rc.recaptchaV2Script}function Rx(){return Rc.recaptchaEnterpriseScript}function Cx(){return Rc.gapiScript}function wR(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ix=500,Nx=6e4,df=1e12;class Ox{constructor(e){this.auth=e,this.counter=df,this._widgets=new Map}render(e,t){const i=this.counter;return this._widgets.set(i,new Px(e,this.auth.name,t||{})),this.counter++,i}reset(e){var t;const i=e||df;(t=this._widgets.get(i))===null||t===void 0||t.delete(),this._widgets.delete(i)}getResponse(e){var t;const i=e||df;return((t=this._widgets.get(i))===null||t===void 0?void 0:t.getResponse())||""}async execute(e){var t;const i=e||df;return(t=this._widgets.get(i))===null||t===void 0||t.execute(),""}}class Dx{constructor(){this.enterprise=new kx}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class kx{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Px{constructor(e,t,i){this.params=i,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const a=typeof e=="string"?document.getElementById(e):e;fe(a,"argument-error",{appName:t}),this.container=a,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=Mx(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch{}this.isVisible&&this.execute()},Nx)},Ix))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function Mx(n){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let i=0;i<n;i++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}const xx="recaptcha-enterprise",Yu="NO_RECAPTCHA";class bR{constructor(e){this.type=xx,this.auth=zr(e)}async verify(e="verify",t=!1){async function i(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(c,d)=>{hR(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{const m=new cR(p);return l.tenantId==null?l._agentRecaptchaConfig=m:l._tenantRecaptchaConfigs[l.tenantId]=m,c(m.siteKey)}}).catch(p=>{d(p)})})}function a(l,c,d){const p=window.grecaptcha;kS(p)?p.enterprise.ready(()=>{p.enterprise.execute(l,{action:e}).then(m=>{c(m)}).catch(()=>{c(Yu)})}):d(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Dx().execute("siteKey",{action:"verify"}):new Promise((l,c)=>{i(this.auth).then(d=>{if(!t&&kS(window.grecaptcha))a(d,l,c);else{if(typeof window>"u"){c(new Error("RecaptchaVerifier is only supported in browser"));return}let p=Rx();p.length!==0&&(p+=d),hy(p).then(()=>{a(d,l,c)}).catch(m=>{c(m)})}}).catch(d=>{c(d)})})}}async function sg(n,e,t,i=!1,a=!1){const l=new bR(n);let c;if(a)c=Yu;else try{c=await l.verify(t)}catch{c=await l.verify(t,!0)}const d=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in d){const p=d.phoneEnrollmentInfo.phoneNumber,m=d.phoneEnrollmentInfo.recaptchaToken;Object.assign(d,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:m,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in d){const p=d.phoneSignInInfo.recaptchaToken;Object.assign(d,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return d}return i?Object.assign(d,{captchaResp:c}):Object.assign(d,{captchaResponse:c}),Object.assign(d,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(d,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),d}async function ag(n,e,t,i,a){var l;if(!((l=n._getRecaptchaConfig())===null||l===void 0)&&l.isProviderEnabled("PHONE_PROVIDER")){const c=await sg(n,e,t);return i(n,c).catch(async d=>{var p;if(((p=n._getRecaptchaConfig())===null||p===void 0?void 0:p.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(d.code==="auth/missing-recaptcha-token"||d.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${t} flow.`);const m=await sg(n,e,t,!1,!0);return i(n,m)}return Promise.reject(d)})}else{const c=await sg(n,e,t,!1,!0);return i(n,c)}}async function Lx(n){const e=zr(n),t=await hR(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),i=new cR(t);e.tenantId==null?e._agentRecaptchaConfig=i:e._tenantRecaptchaConfigs[e.tenantId]=i,i.isAnyProviderEnabled()&&new bR(e).verify()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vx(n,e){const t=Br(n,"auth");if(t.isInitialized()){const a=t.getImmediate(),l=t.getOptions();if(Or(l,e??{}))return a;Ki(a,"already-initialized")}return t.initialize({options:e})}function Ux(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(br);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function Bx(n,e,t){const i=zr(n);fe(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const a=!1,l=AR(e),{host:c,port:d}=zx(e),p=d===null?"":`:${d}`,m={url:`${l}//${c}${p}/`},y=Object.freeze({host:c,port:d,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:a})});if(!i._canInitEmulator){fe(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),fe(Or(m,i.config.emulator)&&Or(y,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=m,i.emulatorConfig=y,i.settings.appVerificationDisabledForTesting=!0,Vr(c)?(pd(`${l}//${c}${p}`),md("Auth",!0)):Fx()}function AR(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function zx(n){const e=AR(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(i);if(a){const l=a[1];return{host:l,port:US(i.substr(l.length+1))}}else{const[l,c]=i.split(":");return{host:l,port:US(c)}}}function US(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Fx(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fy{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return wr("not implemented")}_getIdTokenResponse(e){return wr("not implemented")}_linkToIdToken(e,t){return wr("not implemented")}_getReauthenticationResolver(e){return wr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xo(n,e){return Dd(n,"POST","/v1/accounts:signInWithIdp",Yi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hx="http://localhost";class Oa extends fy{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Oa(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ki("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:a}=t,l=sy(t,["providerId","signInMethod"]);if(!i||!a)return null;const c=new Oa(i,a);return c.idToken=l.idToken||void 0,c.accessToken=l.accessToken||void 0,c.secret=l.secret,c.nonce=l.nonce,c.pendingToken=l.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return Xo(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Xo(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Xo(e,t)}buildRequest(){const e={requestUri:Hx,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ba(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BS(n,e){return Ei(n,"POST","/v1/accounts:sendVerificationCode",Yi(n,e))}async function jx(n,e){return Dd(n,"POST","/v1/accounts:signInWithPhoneNumber",Yi(n,e))}async function qx(n,e){const t=await Dd(n,"POST","/v1/accounts:signInWithPhoneNumber",Yi(n,e));if(t.temporaryProof)throw Fu(n,"account-exists-with-different-credential",t);return t}const Gx={USER_NOT_FOUND:"user-not-found"};async function Kx(n,e){const t=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Dd(n,"POST","/v1/accounts:signInWithPhoneNumber",Yi(n,t),Gx)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu extends fy{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Qu({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Qu({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return jx(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return qx(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return Kx(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:i,verificationCode:a}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:i,code:a}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:i,phoneNumber:a,temporaryProof:l}=e;return!i&&!t&&!a&&!l?null:new Qu({verificationId:t,verificationCode:i,phoneNumber:a,temporaryProof:l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dy{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc extends dy{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s extends Cc{constructor(){super("facebook.com")}static credential(e){return Oa._fromParams({providerId:_s.PROVIDER_ID,signInMethod:_s.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _s.credentialFromTaggedObject(e)}static credentialFromError(e){return _s.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _s.credential(e.oauthAccessToken)}catch{return null}}}_s.FACEBOOK_SIGN_IN_METHOD="facebook.com";_s.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr extends Cc{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Oa._fromParams({providerId:Sr.PROVIDER_ID,signInMethod:Sr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Sr.credentialFromTaggedObject(e)}static credentialFromError(e){return Sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return Sr.credential(t,i)}catch{return null}}}Sr.GOOGLE_SIGN_IN_METHOD="google.com";Sr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys extends Cc{constructor(){super("github.com")}static credential(e){return Oa._fromParams({providerId:ys.PROVIDER_ID,signInMethod:ys.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ys.credentialFromTaggedObject(e)}static credentialFromError(e){return ys.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ys.credential(e.oauthAccessToken)}catch{return null}}}ys.GITHUB_SIGN_IN_METHOD="github.com";ys.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs extends Cc{constructor(){super("twitter.com")}static credential(e,t){return Oa._fromParams({providerId:vs.PROVIDER_ID,signInMethod:vs.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return vs.credentialFromTaggedObject(e)}static credentialFromError(e){return vs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return vs.credential(t,i)}catch{return null}}}vs.TWITTER_SIGN_IN_METHOD="twitter.com";vs.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,a=!1){const l=await gi._fromIdTokenResponse(e,i,a),c=zS(i);return new ll({user:l,providerId:c,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const a=zS(i);return new ll({user:e,providerId:a,_tokenResponse:i,operationType:t})}}function zS(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zf extends oi{constructor(e,t,i,a){var l;super(t.code,t.message),this.operationType=i,this.user=a,Object.setPrototypeOf(this,Zf.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,a){return new Zf(e,t,i,a)}}function RR(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?Zf._fromErrorAndOperation(n,l,e,i):l})}async function $x(n,e,t=!1){const i=await dc(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return ll._forOperation(n,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yx(n,e,t=!1){const{auth:i}=n;if(Cn(i.app))return Promise.reject(Is(i));const a="reauthenticate";try{const l=await dc(n,RR(i,a,e,n),t);fe(l.idToken,i,"internal-error");const c=uy(l.idToken);fe(c,i,"internal-error");const{sub:d}=c;return fe(n.uid===d,i,"user-mismatch"),ll._forOperation(n,a,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&Ki(i,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CR(n,e,t=!1){if(Cn(n.app))return Promise.reject(Is(n));const i="signIn",a=await RR(n,i,e),l=await ll._fromIdTokenResponse(n,i,a);return t||await n._updateCurrentUser(l.user),l}async function Qx(n,e){return CR(zr(n),e)}function Wx(n,e,t,i){return bt(n).onIdTokenChanged(e,t,i)}function Xx(n,e,t){return bt(n).beforeAuthStateChanged(e,t)}function Zx(n,e,t,i){return bt(n).onAuthStateChanged(e,t,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FS(n,e){return Ei(n,"POST","/v2/accounts/mfaEnrollment:start",Yi(n,e))}const Jf="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IR{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Jf,"1"),this.storage.removeItem(Jf),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jx=1e3,eL=10;class NR extends IR{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=TR(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),a=this.localCache[t];i!==a&&e(t,a,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,d,p)=>{this.notifyListeners(c,p)});return}const i=e.key;t?this.detachListener():this.stopPolling();const a=()=>{const c=this.storage.getItem(i);!t&&this.localCache[i]===c||this.notifyListeners(i,c)},l=this.storage.getItem(i);yx()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,eL):a()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const a of Array.from(i))a(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},Jx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}NR.type="LOCAL";const tL=NR;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OR extends IR{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}OR.type="SESSION";const DR=OR;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nL(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(a=>a.isListeningto(e));if(t)return t;const i=new kd(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:a,data:l}=t.data,c=this.handlersMap[a];if(!(c!=null&&c.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:a});const d=Array.from(c).map(async m=>m(t.origin,l)),p=await nL(d);t.ports[0].postMessage({status:"done",eventId:i,eventType:a,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}kd.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function py(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iL{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let l,c;return new Promise((d,p)=>{const m=py("",20);a.port1.start();const y=setTimeout(()=>{p(new Error("unsupported_event"))},i);c={messageChannel:a,onMessage(T){const S=T;if(S.data.eventId===m)switch(S.data.status){case"ack":clearTimeout(y),l=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),d(S.data.response);break;default:clearTimeout(y),clearTimeout(l),p(new Error("invalid_response"));break}}},this.handlers.add(c),a.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:m,data:t},[a.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(){return window}function rL(n){Ot().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function my(){return typeof Ot().WorkerGlobalScope<"u"&&typeof Ot().importScripts=="function"}async function sL(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function aL(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function oL(){return my()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kR="firebaseLocalStorageDb",lL=1,ed="firebaseLocalStorage",PR="fbase_key";class Ic{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Pd(n,e){return n.transaction([ed],e?"readwrite":"readonly").objectStore(ed)}function uL(){const n=indexedDB.deleteDatabase(kR);return new Ic(n).toPromise()}function Wg(){const n=indexedDB.open(kR,lL);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(ed,{keyPath:PR})}catch(a){t(a)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(ed)?e(i):(i.close(),await uL(),e(await Wg()))})})}async function HS(n,e,t){const i=Pd(n,!0).put({[PR]:e,value:t});return new Ic(i).toPromise()}async function cL(n,e){const t=Pd(n,!1).get(e),i=await new Ic(t).toPromise();return i===void 0?null:i.value}function jS(n,e){const t=Pd(n,!0).delete(e);return new Ic(t).toPromise()}const hL=800,fL=3;class MR{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Wg(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>fL)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return my()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=kd._getInstance(oL()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await sL(),!this.activeServiceWorker)return;this.sender=new iL(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||aL()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Wg();return await HS(e,Jf,"1"),await jS(e,Jf),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>HS(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>cL(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>jS(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(a=>{const l=Pd(a,!1).getAll();return new Ic(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:a,value:l}of e)i.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(l)&&(this.notifyListeners(a,l),t.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!i.has(a)&&(this.notifyListeners(a,null),t.push(a));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const a of Array.from(i))a(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),hL)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}MR.type="LOCAL";const dL=MR;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qS(n,e){return Ei(n,"POST","/v2/accounts/mfaSignIn:start",Yi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const og=wR("rcb"),pL=new Ac(3e4,6e4);class mL{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=Ot().grecaptcha)===null||e===void 0)&&e.render)}load(e,t=""){return fe(gL(t),e,"argument-error"),this.shouldResolveImmediately(t)&&DS(Ot().grecaptcha)?Promise.resolve(Ot().grecaptcha):new Promise((i,a)=>{const l=Ot().setTimeout(()=>{a(Nn(e,"network-request-failed"))},pL.get());Ot()[og]=()=>{Ot().clearTimeout(l),delete Ot()[og];const d=Ot().grecaptcha;if(!d||!DS(d)){a(Nn(e,"internal-error"));return}const p=d.render;d.render=(m,y)=>{const T=p(m,y);return this.counter++,T},this.hostLanguage=t,i(d)};const c=`${Ax()}?${Ba({onload:og,render:"explicit",hl:t})}`;hy(c).catch(()=>{clearTimeout(l),a(Nn(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(!((t=Ot().grecaptcha)===null||t===void 0)&&t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function gL(n){return n.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(n)}class _L{async load(e){return new Ox(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wu="recaptcha",yL={theme:"light",type:"image"};class vL{constructor(e,t,i=Object.assign({},yL)){this.parameters=i,this.type=Wu,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=zr(e),this.isInvisible=this.parameters.size==="invisible",fe(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const a=typeof t=="string"?document.getElementById(t):t;fe(a,this.auth,"argument-error"),this.container=a,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new _L:new mL,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),i=t.getResponse(e);return i||new Promise(a=>{const l=c=>{c&&(this.tokenChangeListeners.delete(l),a(c))};this.tokenChangeListeners.add(l),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){fe(!this.parameters.sitekey,this.auth,"argument-error"),fe(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),fe(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(i=>i(t)),typeof e=="function")e(t);else if(typeof e=="string"){const i=Ot()[e];typeof i=="function"&&i(t)}}}assertNotDestroyed(){fe(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){fe(aR()&&!my(),this.auth,"internal-error"),await EL(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await lx(this.auth);fe(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return fe(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function EL(){let n=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}n=()=>e(),window.addEventListener("load",n)}).catch(e=>{throw n&&window.removeEventListener("load",n),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TL{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=Qu._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function SL(n,e,t){if(Cn(n.app))return Promise.reject(Is(n));const i=zr(n),a=await wL(i,e,bt(t));return new TL(a,l=>Qx(i,l))}async function wL(n,e,t){var i;if(!n._getRecaptchaConfig())try{await Lx(n)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let a;if(typeof e=="string"?a={phoneNumber:e}:a=e,"session"in a){const l=a.session;if("phoneNumber"in a){fe(l.type==="enroll",n,"internal-error");const c={idToken:l.credential,phoneEnrollmentInfo:{phoneNumber:a.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await ag(n,c,"mfaSmsEnrollment",async(y,T)=>{if(T.phoneEnrollmentInfo.captchaResponse===Yu){fe((t==null?void 0:t.type)===Wu,y,"argument-error");const S=await lg(y,T,t);return FS(y,S)}return FS(y,T)},"PHONE_PROVIDER").catch(y=>Promise.reject(y))).phoneSessionInfo.sessionInfo}else{fe(l.type==="signin",n,"internal-error");const c=((i=a.multiFactorHint)===null||i===void 0?void 0:i.uid)||a.multiFactorUid;fe(c,n,"missing-multi-factor-info");const d={mfaPendingCredential:l.credential,mfaEnrollmentId:c,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await ag(n,d,"mfaSmsSignIn",async(T,S)=>{if(S.phoneSignInInfo.captchaResponse===Yu){fe((t==null?void 0:t.type)===Wu,T,"argument-error");const I=await lg(T,S,t);return qS(T,I)}return qS(T,S)},"PHONE_PROVIDER").catch(T=>Promise.reject(T))).phoneResponseInfo.sessionInfo}}else{const l={phoneNumber:a.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await ag(n,l,"sendVerificationCode",async(m,y)=>{if(y.captchaResponse===Yu){fe((t==null?void 0:t.type)===Wu,m,"argument-error");const T=await lg(m,y,t);return BS(m,T)}return BS(m,y)},"PHONE_PROVIDER").catch(m=>Promise.reject(m))).sessionInfo}}finally{t==null||t._reset()}}async function lg(n,e,t){fe(t.type===Wu,n,"argument-error");const i=await t.verify();fe(typeof i=="string",n,"argument-error");const a=Object.assign({},e);if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,c=a.phoneEnrollmentInfo.captchaResponse,d=a.phoneEnrollmentInfo.clientType,p=a.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:i,captchaResponse:c,clientType:d,recaptchaVersion:p}}),a}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.captchaResponse,c=a.phoneSignInInfo.clientType,d=a.phoneSignInInfo.recaptchaVersion;return Object.assign(a,{phoneSignInInfo:{recaptchaToken:i,captchaResponse:l,clientType:c,recaptchaVersion:d}}),a}else return Object.assign(a,{recaptchaToken:i}),a}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xR(n,e){return e?br(e):(fe(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gy extends fy{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Xo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Xo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Xo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function bL(n){return CR(n.auth,new gy(n),n.bypassAuthState)}function AL(n){const{auth:e,user:t}=n;return fe(t,e,"internal-error"),Yx(t,new gy(n),n.bypassAuthState)}async function RL(n){const{auth:e,user:t}=n;return fe(t,e,"internal-error"),$x(t,new gy(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LR{constructor(e,t,i,a,l=!1){this.auth=e,this.resolver=i,this.user=a,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:a,tenantId:l,error:c,type:d}=e;if(c){this.reject(c);return}const p={auth:this.auth,requestUri:t,sessionId:i,tenantId:l||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(p))}catch(m){this.reject(m)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return bL;case"linkViaPopup":case"linkViaRedirect":return RL;case"reauthViaPopup":case"reauthViaRedirect":return AL;default:Ki(this.auth,"internal-error")}}resolve(e){Mr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Mr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CL=new Ac(2e3,1e4);async function IL(n,e,t){if(Cn(n.app))return Promise.reject(Nn(n,"operation-not-supported-in-this-environment"));const i=zr(n);ex(n,e,dy);const a=xR(i,t);return new ba(i,"signInViaPopup",e,a).executeNotNull()}class ba extends LR{constructor(e,t,i,a,l){super(e,t,a,l),this.provider=i,this.authWindow=null,this.pollId=null,ba.currentPopupAction&&ba.currentPopupAction.cancel(),ba.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return fe(e,this.auth,"internal-error"),e}async onExecution(){Mr(this.filter.length===1,"Popup operations only handle one event");const e=py();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Nn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Nn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ba.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Nn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,CL.get())};e()}}ba.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NL="pendingRedirect",If=new Map;class OL extends LR{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=If.get(this.auth._key());if(!e){try{const i=await DL(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}If.set(this.auth._key(),e)}return this.bypassAuthState||If.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function DL(n,e){const t=ML(e),i=PL(n);if(!await i._isAvailable())return!1;const a=await i._get(t)==="true";return await i._remove(t),a}function kL(n,e){If.set(n._key(),e)}function PL(n){return br(n._redirectPersistence)}function ML(n){return Cf(NL,n.config.apiKey,n.name)}async function xL(n,e,t=!1){if(Cn(n.app))return Promise.reject(Is(n));const i=zr(n),a=xR(i,e),c=await new OL(i,a,t).execute();return c&&!t&&(delete c.user._redirectEventId,await i._persistUserIfCurrent(c.user),await i._setRedirectUser(null,e)),c}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LL=10*60*1e3;class VL{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!UL(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!VR(e)){const a=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(Nn(this.auth,a))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=LL&&this.cachedEventUids.clear(),this.cachedEventUids.has(GS(e))}saveEventToCache(e){this.cachedEventUids.add(GS(e)),this.lastProcessedEventTime=Date.now()}}function GS(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function VR({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function UL(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return VR(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BL(n,e={}){return Ei(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zL=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,FL=/^https?/;async function HL(n){if(n.config.emulator)return;const{authorizedDomains:e}=await BL(n);for(const t of e)try{if(jL(t))return}catch{}Ki(n,"unauthorized-domain")}function jL(n){const e=Yg(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const c=new URL(n);return c.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===i}if(!FL.test(t))return!1;if(zL.test(n))return i===n;const a=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qL=new Ac(3e4,6e4);function KS(){const n=Ot().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function GL(n){return new Promise((e,t)=>{var i,a,l;function c(){KS(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{KS(),t(Nn(n,"network-request-failed"))},timeout:qL.get()})}if(!((a=(i=Ot().gapi)===null||i===void 0?void 0:i.iframes)===null||a===void 0)&&a.Iframe)e(gapi.iframes.getContext());else if(!((l=Ot().gapi)===null||l===void 0)&&l.load)c();else{const d=wR("iframefcb");return Ot()[d]=()=>{gapi.load?c():t(Nn(n,"network-request-failed"))},hy(`${Cx()}?onload=${d}`).catch(p=>t(p))}}).catch(e=>{throw Nf=null,e})}let Nf=null;function KL(n){return Nf=Nf||GL(n),Nf}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $L=new Ac(5e3,15e3),YL="__/auth/iframe",QL="emulator/auth/iframe",WL={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},XL=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ZL(n){const e=n.config;fe(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?ly(e,QL):`https://${n.config.authDomain}/${YL}`,i={apiKey:e.apiKey,appName:n.name,v:Vs},a=XL.get(n.config.apiHost);a&&(i.eid=a);const l=n._getFrameworks();return l.length&&(i.fw=l.join(",")),`${t}?${Ba(i).slice(1)}`}async function JL(n){const e=await KL(n),t=Ot().gapi;return fe(t,n,"internal-error"),e.open({where:document.body,url:ZL(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:WL,dontclear:!0},i=>new Promise(async(a,l)=>{await i.restyle({setHideOnLeave:!1});const c=Nn(n,"network-request-failed"),d=Ot().setTimeout(()=>{l(c)},$L.get());function p(){Ot().clearTimeout(d),a(i)}i.ping(p).then(p,()=>{l(c)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eV={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},tV=500,nV=600,iV="_blank",rV="http://localhost";class $S{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function sV(n,e,t,i=tV,a=nV){const l=Math.max((window.screen.availHeight-a)/2,0).toString(),c=Math.max((window.screen.availWidth-i)/2,0).toString();let d="";const p=Object.assign(Object.assign({},eV),{width:i.toString(),height:a.toString(),top:l,left:c}),m=_n().toLowerCase();t&&(d=gR(m)?iV:t),pR(m)&&(e=e||rV,p.scrollbars="yes");const y=Object.entries(p).reduce((S,[I,N])=>`${S}${I}=${N},`,"");if(_x(m)&&d!=="_self")return aV(e||"",d),new $S(null);const T=window.open(e||"",d,y);fe(T,n,"popup-blocked");try{T.focus()}catch{}return new $S(T)}function aV(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oV="__/auth/handler",lV="emulator/auth/handler",uV=encodeURIComponent("fac");async function YS(n,e,t,i,a,l){fe(n.config.authDomain,n,"auth-domain-config-required"),fe(n.config.apiKey,n,"invalid-api-key");const c={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:Vs,eventId:a};if(e instanceof dy){e.setDefaultLanguage(n.languageCode),c.providerId=e.providerId||"",Ag(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[y,T]of Object.entries({}))c[y]=T}if(e instanceof Cc){const y=e.getScopes().filter(T=>T!=="");y.length>0&&(c.scopes=y.join(","))}n.tenantId&&(c.tid=n.tenantId);const d=c;for(const y of Object.keys(d))d[y]===void 0&&delete d[y];const p=await n._getAppCheckToken(),m=p?`#${uV}=${encodeURIComponent(p)}`:"";return`${cV(n)}?${Ba(d).slice(1)}${m}`}function cV({config:n}){return n.emulator?ly(n,lV):`https://${n.authDomain}/${oV}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ug="webStorageSupport";class hV{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=DR,this._completeRedirectFn=xL,this._overrideRedirectResult=kL}async _openPopup(e,t,i,a){var l;Mr((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const c=await YS(e,t,i,Yg(),a);return sV(e,c,py())}async _openRedirect(e,t,i,a){await this._originValidation(e);const l=await YS(e,t,i,Yg(),a);return rL(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:a,promise:l}=this.eventManagers[t];return a?Promise.resolve(a):(Mr(l,"If manager is not set, promise should be"),l)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await JL(e),i=new VL(e);return t.register("authEvent",a=>(fe(a==null?void 0:a.authEvent,e,"invalid-auth-event"),{status:i.onEvent(a.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ug,{type:ug},a=>{var l;const c=(l=a==null?void 0:a[0])===null||l===void 0?void 0:l[ug];c!==void 0&&t(!!c),Ki(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=HL(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return TR()||mR()||cy()}}const fV=hV;var QS="@firebase/auth",WS="1.10.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dV{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){fe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pV(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function mV(n){si(new jn("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:c,authDomain:d}=i.options;fe(c&&!c.includes(":"),"invalid-api-key",{appName:i.name});const p={apiKey:c,authDomain:d,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:SR(n)},m=new wx(i,a,l,p);return Ux(m,t),m},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),si(new jn("auth-internal",e=>{const t=zr(e.getProvider("auth").getImmediate());return(i=>new dV(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),gn(QS,WS,pV(n)),gn(QS,WS,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gV=5*60,_V=_b("authIdTokenMaxAge")||gV;let XS=null;const yV=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>_V)return;const a=t==null?void 0:t.token;XS!==a&&(XS=a,await fetch(n,{method:a?"POST":"DELETE",headers:a?{Authorization:`Bearer ${a}`}:{}}))};function vV(n=Ec()){const e=Br(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Vx(n,{popupRedirectResolver:fV,persistence:[dL,tL,DR]}),i=_b("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(i,location.origin);if(location.origin===l.origin){const c=yV(l.toString());Xx(t,c,()=>c(t.currentUser)),Wx(t,d=>c(d))}}const a=mb("auth");return a&&Bx(t,`http://${a}`),t}function EV(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}bx({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=a=>{const l=Nn("internal-error");l.customData=a,t(l)},i.type="text/javascript",i.charset="UTF-8",EV().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});mV("Browser");var TV="firebase",SV="11.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */gn(TV,SV,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UR="firebasestorage.googleapis.com",BR="storageBucket",wV=2*60*1e3,bV=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt extends oi{constructor(e,t,i=0){super(cg(e),`Firebase Storage: ${t} (${cg(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,vt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return cg(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var yt;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(yt||(yt={}));function cg(n){return"storage/"+n}function _y(){const n="An unknown error occurred, please check the error payload for server response.";return new vt(yt.UNKNOWN,n)}function AV(n){return new vt(yt.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function RV(n){return new vt(yt.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function CV(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new vt(yt.UNAUTHENTICATED,n)}function IV(){return new vt(yt.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function NV(n){return new vt(yt.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function OV(){return new vt(yt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function DV(){return new vt(yt.CANCELED,"User canceled the upload/download.")}function kV(n){return new vt(yt.INVALID_URL,"Invalid URL '"+n+"'.")}function PV(n){return new vt(yt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function MV(){return new vt(yt.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+BR+"' property when initializing the app?")}function xV(){return new vt(yt.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function LV(){return new vt(yt.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function VV(n){return new vt(yt.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Xg(n){return new vt(yt.INVALID_ARGUMENT,n)}function zR(){return new vt(yt.APP_DELETED,"The Firebase app was deleted.")}function UV(n){return new vt(yt.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Xu(n,e){return new vt(yt.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function Pu(n){throw new vt(yt.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let i;try{i=zn.makeFromUrl(e,t)}catch{return new zn(e,"")}if(i.path==="")return i;throw PV(e)}static makeFromUrl(e,t){let i=null;const a="([A-Za-z0-9.\\-_]+)";function l(ae){ae.path.charAt(ae.path.length-1)==="/"&&(ae.path_=ae.path_.slice(0,-1))}const c="(/(.*))?$",d=new RegExp("^gs://"+a+c,"i"),p={bucket:1,path:3};function m(ae){ae.path_=decodeURIComponent(ae.path)}const y="v[A-Za-z0-9_]+",T=t.replace(/[.]/g,"\\."),S="(/([^?#]*).*)?$",I=new RegExp(`^https?://${T}/${y}/b/${a}/o${S}`,"i"),N={bucket:1,path:3},H=t===UR?"(?:storage.googleapis.com|storage.cloud.google.com)":t,B="([^?#]*)",$=new RegExp(`^https?://${H}/${a}/${B}`,"i"),ee=[{regex:d,indices:p,postModify:l},{regex:I,indices:N,postModify:m},{regex:$,indices:{bucket:1,path:2},postModify:m}];for(let ae=0;ae<ee.length;ae++){const he=ee[ae],_e=he.regex.exec(e);if(_e){const D=_e[he.indices.bucket];let A=_e[he.indices.path];A||(A=""),i=new zn(D,A),he.postModify(i);break}}if(i==null)throw kV(e);return i}}class BV{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zV(n,e,t){let i=1,a=null,l=null,c=!1,d=0;function p(){return d===2}let m=!1;function y(...B){m||(m=!0,e.apply(null,B))}function T(B){a=setTimeout(()=>{a=null,n(I,p())},B)}function S(){l&&clearTimeout(l)}function I(B,...$){if(m){S();return}if(B){S(),y.call(null,B,...$);return}if(p()||c){S(),y.call(null,B,...$);return}i<64&&(i*=2);let ee;d===1?(d=2,ee=0):ee=(i+Math.random())*1e3,T(ee)}let N=!1;function H(B){N||(N=!0,S(),!m&&(a!==null?(B||(d=2),clearTimeout(a),T(0)):B||(d=1)))}return T(0),l=setTimeout(()=>{c=!0,H(!0)},t),H}function FV(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HV(n){return n!==void 0}function jV(n){return typeof n=="object"&&!Array.isArray(n)}function yy(n){return typeof n=="string"||n instanceof String}function ZS(n){return vy()&&n instanceof Blob}function vy(){return typeof Blob<"u"}function JS(n,e,t,i){if(i<e)throw Xg(`Invalid value for '${n}'. Expected ${e} or greater.`);if(i>t)throw Xg(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ey(n,e,t){let i=e;return t==null&&(i=`https://${e}`),`${t}://${i}/v0${n}`}function FR(n){const e=encodeURIComponent;let t="?";for(const i in n)if(n.hasOwnProperty(i)){const a=e(i)+"="+e(n[i]);t=t+a+"&"}return t=t.slice(0,-1),t}var Ca;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Ca||(Ca={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qV(n,e){const t=n>=500&&n<600,a=[408,429].indexOf(n)!==-1,l=e.indexOf(n)!==-1;return t||a||l}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GV{constructor(e,t,i,a,l,c,d,p,m,y,T,S=!0,I=!1){this.url_=e,this.method_=t,this.headers_=i,this.body_=a,this.successCodes_=l,this.additionalRetryCodes_=c,this.callback_=d,this.errorCallback_=p,this.timeout_=m,this.progressCallback_=y,this.connectionFactory_=T,this.retry=S,this.isUsingEmulator=I,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((N,H)=>{this.resolve_=N,this.reject_=H,this.start_()})}start_(){const e=(i,a)=>{if(a){i(!1,new pf(!1,null,!0));return}const l=this.connectionFactory_();this.pendingConnection_=l;const c=d=>{const p=d.loaded,m=d.lengthComputable?d.total:-1;this.progressCallback_!==null&&this.progressCallback_(p,m)};this.progressCallback_!==null&&l.addUploadProgressListener(c),l.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&l.removeUploadProgressListener(c),this.pendingConnection_=null;const d=l.getErrorCode()===Ca.NO_ERROR,p=l.getStatus();if(!d||qV(p,this.additionalRetryCodes_)&&this.retry){const y=l.getErrorCode()===Ca.ABORT;i(!1,new pf(!1,null,y));return}const m=this.successCodes_.indexOf(p)!==-1;i(!0,new pf(m,l))})},t=(i,a)=>{const l=this.resolve_,c=this.reject_,d=a.connection;if(a.wasSuccessCode)try{const p=this.callback_(d,d.getResponse());HV(p)?l(p):l()}catch(p){c(p)}else if(d!==null){const p=_y();p.serverResponse=d.getErrorText(),this.errorCallback_?c(this.errorCallback_(d,p)):c(p)}else if(a.canceled){const p=this.appDelete_?zR():DV();c(p)}else{const p=OV();c(p)}};this.canceled_?t(!1,new pf(!1,null,!0)):this.backoffId_=zV(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&FV(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class pf{constructor(e,t,i){this.wasSuccessCode=e,this.connection=t,this.canceled=!!i}}function KV(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function $V(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function YV(n,e){e&&(n["X-Firebase-GMPID"]=e)}function QV(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function WV(n,e,t,i,a,l,c=!0,d=!1){const p=FR(n.urlParams),m=n.url+p,y=Object.assign({},n.headers);return YV(y,e),KV(y,t),$V(y,l),QV(y,i),new GV(m,n.method,y,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,a,c,d)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XV(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function ZV(...n){const e=XV();if(e!==void 0){const t=new e;for(let i=0;i<n.length;i++)t.append(n[i]);return t.getBlob()}else{if(vy())return new Blob(n);throw new vt(yt.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function JV(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e4(n){if(typeof atob>"u")throw VV("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bi={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class hg{constructor(e,t){this.data=e,this.contentType=t||null}}function t4(n,e){switch(n){case Bi.RAW:return new hg(HR(e));case Bi.BASE64:case Bi.BASE64URL:return new hg(jR(n,e));case Bi.DATA_URL:return new hg(i4(e),r4(e))}throw _y()}function HR(n){const e=[];for(let t=0;t<n.length;t++){let i=n.charCodeAt(t);if(i<=127)e.push(i);else if(i<=2047)e.push(192|i>>6,128|i&63);else if((i&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const l=i,c=n.charCodeAt(++t);i=65536|(l&1023)<<10|c&1023,e.push(240|i>>18,128|i>>12&63,128|i>>6&63,128|i&63)}else(i&64512)===56320?e.push(239,191,189):e.push(224|i>>12,128|i>>6&63,128|i&63)}return new Uint8Array(e)}function n4(n){let e;try{e=decodeURIComponent(n)}catch{throw Xu(Bi.DATA_URL,"Malformed data URL.")}return HR(e)}function jR(n,e){switch(n){case Bi.BASE64:{const a=e.indexOf("-")!==-1,l=e.indexOf("_")!==-1;if(a||l)throw Xu(n,"Invalid character '"+(a?"-":"_")+"' found: is it base64url encoded?");break}case Bi.BASE64URL:{const a=e.indexOf("+")!==-1,l=e.indexOf("/")!==-1;if(a||l)throw Xu(n,"Invalid character '"+(a?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=e4(e)}catch(a){throw a.message.includes("polyfill")?a:Xu(n,"Invalid character found")}const i=new Uint8Array(t.length);for(let a=0;a<t.length;a++)i[a]=t.charCodeAt(a);return i}class qR{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw Xu(Bi.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const i=t[1]||null;i!=null&&(this.base64=s4(i,";base64"),this.contentType=this.base64?i.substring(0,i.length-7):i),this.rest=e.substring(e.indexOf(",")+1)}}function i4(n){const e=new qR(n);return e.base64?jR(Bi.BASE64,e.rest):n4(e.rest)}function r4(n){return new qR(n).contentType}function s4(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e,t){let i=0,a="";ZS(e)?(this.data_=e,i=e.size,a=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),i=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),i=e.length),this.size_=i,this.type_=a}size(){return this.size_}type(){return this.type_}slice(e,t){if(ZS(this.data_)){const i=this.data_,a=JV(i,e,t);return a===null?null:new Es(a)}else{const i=new Uint8Array(this.data_.buffer,e,t-e);return new Es(i,!0)}}static getBlob(...e){if(vy()){const t=e.map(i=>i instanceof Es?i.data_:i);return new Es(ZV.apply(null,t))}else{const t=e.map(c=>yy(c)?t4(Bi.RAW,c).data:c.data_);let i=0;t.forEach(c=>{i+=c.byteLength});const a=new Uint8Array(i);let l=0;return t.forEach(c=>{for(let d=0;d<c.length;d++)a[l++]=c[d]}),new Es(a,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GR(n){let e;try{e=JSON.parse(n)}catch{return null}return jV(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a4(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function o4(n,e){const t=e.split("/").filter(i=>i.length>0).join("/");return n.length===0?t:n+"/"+t}function KR(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l4(n,e){return e}class Sn{constructor(e,t,i,a){this.server=e,this.local=t||e,this.writable=!!i,this.xform=a||l4}}let mf=null;function u4(n){return!yy(n)||n.length<2?n:KR(n)}function $R(){if(mf)return mf;const n=[];n.push(new Sn("bucket")),n.push(new Sn("generation")),n.push(new Sn("metageneration")),n.push(new Sn("name","fullPath",!0));function e(l,c){return u4(c)}const t=new Sn("name");t.xform=e,n.push(t);function i(l,c){return c!==void 0?Number(c):c}const a=new Sn("size");return a.xform=i,n.push(a),n.push(new Sn("timeCreated")),n.push(new Sn("updated")),n.push(new Sn("md5Hash",null,!0)),n.push(new Sn("cacheControl",null,!0)),n.push(new Sn("contentDisposition",null,!0)),n.push(new Sn("contentEncoding",null,!0)),n.push(new Sn("contentLanguage",null,!0)),n.push(new Sn("contentType",null,!0)),n.push(new Sn("metadata","customMetadata",!0)),mf=n,mf}function c4(n,e){function t(){const i=n.bucket,a=n.fullPath,l=new zn(i,a);return e._makeStorageReference(l)}Object.defineProperty(n,"ref",{get:t})}function h4(n,e,t){const i={};i.type="file";const a=t.length;for(let l=0;l<a;l++){const c=t[l];i[c.local]=c.xform(i,e[c.server])}return c4(i,n),i}function YR(n,e,t){const i=GR(e);return i===null?null:h4(n,i,t)}function f4(n,e,t,i){const a=GR(e);if(a===null||!yy(a.downloadTokens))return null;const l=a.downloadTokens;if(l.length===0)return null;const c=encodeURIComponent;return l.split(",").map(m=>{const y=n.bucket,T=n.fullPath,S="/b/"+c(y)+"/o/"+c(T),I=Ey(S,t,i),N=FR({alt:"media",token:m});return I+N})[0]}function d4(n,e){const t={},i=e.length;for(let a=0;a<i;a++){const l=e[a];l.writable&&(t[l.server]=n[l.local])}return JSON.stringify(t)}class QR{constructor(e,t,i,a){this.url=e,this.method=t,this.handler=i,this.timeout=a,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WR(n){if(!n)throw _y()}function p4(n,e){function t(i,a){const l=YR(n,a,e);return WR(l!==null),l}return t}function m4(n,e){function t(i,a){const l=YR(n,a,e);return WR(l!==null),f4(l,a,n.host,n._protocol)}return t}function XR(n){function e(t,i){let a;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?a=IV():a=CV():t.getStatus()===402?a=RV(n.bucket):t.getStatus()===403?a=NV(n.path):a=i,a.status=t.getStatus(),a.serverResponse=i.serverResponse,a}return e}function g4(n){const e=XR(n);function t(i,a){let l=e(i,a);return i.getStatus()===404&&(l=AV(n.path)),l.serverResponse=a.serverResponse,l}return t}function _4(n,e,t){const i=e.fullServerUrl(),a=Ey(i,n.host,n._protocol),l="GET",c=n.maxOperationRetryTime,d=new QR(a,l,m4(n,t),c);return d.errorHandler=g4(e),d}function y4(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function v4(n,e,t){const i=Object.assign({},t);return i.fullPath=n.path,i.size=e.size(),i.contentType||(i.contentType=y4(null,e)),i}function E4(n,e,t,i,a){const l=e.bucketOnlyServerUrl(),c={"X-Goog-Upload-Protocol":"multipart"};function d(){let ee="";for(let ae=0;ae<2;ae++)ee=ee+Math.random().toString().slice(2);return ee}const p=d();c["Content-Type"]="multipart/related; boundary="+p;const m=v4(e,i,a),y=d4(m,t),T="--"+p+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+y+`\r
--`+p+`\r
Content-Type: `+m.contentType+`\r
\r
`,S=`\r
--`+p+"--",I=Es.getBlob(T,i,S);if(I===null)throw xV();const N={name:m.fullPath},H=Ey(l,n.host,n._protocol),B="POST",$=n.maxUploadRetryTime,W=new QR(H,B,p4(n,t),$);return W.urlParams=N,W.headers=c,W.body=I.uploadData(),W.errorHandler=XR(e),W}class T4{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Ca.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Ca.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Ca.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,i,a,l){if(this.sent_)throw Pu("cannot .send() more than once");if(Vr(e)&&i&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(t,e,!0),l!==void 0)for(const c in l)l.hasOwnProperty(c)&&this.xhr_.setRequestHeader(c,l[c].toString());return a!==void 0?this.xhr_.send(a):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Pu("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Pu("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Pu("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Pu("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class S4 extends T4{initXhr(){this.xhr_.responseType="text"}}function ZR(){return new S4}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(e,t){this._service=e,t instanceof zn?this._location=t:this._location=zn.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Da(e,t)}get root(){const e=new zn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return KR(this._location.path)}get storage(){return this._service}get parent(){const e=a4(this._location.path);if(e===null)return null;const t=new zn(this._location.bucket,e);return new Da(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw UV(e)}}function w4(n,e,t){n._throwIfRoot("uploadBytes");const i=E4(n.storage,n._location,$R(),new Es(e,!0),t);return n.storage.makeRequestWithTokens(i,ZR).then(a=>({metadata:a,ref:n}))}function b4(n){n._throwIfRoot("getDownloadURL");const e=_4(n.storage,n._location,$R());return n.storage.makeRequestWithTokens(e,ZR).then(t=>{if(t===null)throw LV();return t})}function A4(n,e){const t=o4(n._location.path,e),i=new zn(n._location.bucket,t);return new Da(n.storage,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R4(n){return/^[A-Za-z]+:\/\//.test(n)}function C4(n,e){return new Da(n,e)}function JR(n,e){if(n instanceof Ty){const t=n;if(t._bucket==null)throw MV();const i=new Da(t,t._bucket);return e!=null?JR(i,e):i}else return e!==void 0?A4(n,e):n}function I4(n,e){if(e&&R4(e)){if(n instanceof Ty)return C4(n,e);throw Xg("To use ref(service, url), the first argument must be a Storage instance.")}else return JR(n,e)}function ew(n,e){const t=e==null?void 0:e[BR];return t==null?null:zn.makeFromBucketSpec(t,n)}function N4(n,e,t,i={}){n.host=`${e}:${t}`;const a=Vr(e);a&&(pd(`https://${n.host}`),md("Storage",!0)),n._isUsingEmulator=!0,n._protocol=a?"https":"http";const{mockUserToken:l}=i;l&&(n._overrideAuthToken=typeof l=="string"?l:T_(l,n.app.options.projectId))}class Ty{constructor(e,t,i,a,l,c=!1){this.app=e,this._authProvider=t,this._appCheckProvider=i,this._url=a,this._firebaseVersion=l,this._isUsingEmulator=c,this._bucket=null,this._host=UR,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=wV,this._maxUploadRetryTime=bV,this._requests=new Set,a!=null?this._bucket=zn.makeFromBucketSpec(a,this._host):this._bucket=ew(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=zn.makeFromBucketSpec(this._url,e):this._bucket=ew(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){JS("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){JS("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(Cn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Da(this,e)}_makeRequest(e,t,i,a,l=!0){if(this._deleted)return new BV(zR());{const c=WV(e,this._appId,i,a,t,this._firebaseVersion,l,this._isUsingEmulator);return this._requests.add(c),c.getPromise().then(()=>this._requests.delete(c),()=>this._requests.delete(c)),c}}async makeRequestWithTokens(e,t){const[i,a]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,i,a).getPromise()}}const tw="@firebase/storage",nw="0.13.12";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eC="storage";function tC(n,e,t){return n=bt(n),w4(n,e,t)}function nC(n){return n=bt(n),b4(n)}function iC(n,e){return n=bt(n),I4(n,e)}function O4(n=Ec(),e){n=bt(n);const i=Br(n,eC).getImmediate({identifier:e}),a=v_("storage");return a&&D4(i,...a),i}function D4(n,e,t,i={}){N4(n,e,t,i)}function k4(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),i=n.getProvider("auth-internal"),a=n.getProvider("app-check-internal");return new Ty(t,i,a,e,Vs)}function P4(){si(new jn(eC,k4,"PUBLIC").setMultipleInstances(!0)),gn(tw,nw,""),gn(tw,nw,"esm2017")}P4();const rC="@firebase/installations",Sy="0.6.17";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sC=1e4,aC=`w:${Sy}`,oC="FIS_v2",M4="https://firebaseinstallations.googleapis.com/v1",x4=60*60*1e3,L4="installations",V4="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U4={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ka=new Ua(L4,V4,U4);function lC(n){return n instanceof oi&&n.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uC({projectId:n}){return`${M4}/projects/${n}/installations`}function cC(n){return{token:n.token,requestStatus:2,expiresIn:z4(n.expiresIn),creationTime:Date.now()}}async function hC(n,e){const i=(await e.json()).error;return ka.create("request-failed",{requestName:n,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function fC({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function B4(n,{refreshToken:e}){const t=fC(n);return t.append("Authorization",F4(e)),t}async function dC(n){const e=await n();return e.status>=500&&e.status<600?n():e}function z4(n){return Number(n.replace("s","000"))}function F4(n){return`${oC} ${n}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H4({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const i=uC(n),a=fC(n),l=e.getImmediate({optional:!0});if(l){const m=await l.getHeartbeatsHeader();m&&a.append("x-firebase-client",m)}const c={fid:t,authVersion:oC,appId:n.appId,sdkVersion:aC},d={method:"POST",headers:a,body:JSON.stringify(c)},p=await dC(()=>fetch(i,d));if(p.ok){const m=await p.json();return{fid:m.fid||t,registrationStatus:2,refreshToken:m.refreshToken,authToken:cC(m.authToken)}}else throw await hC("Create Installation",p)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pC(n){return new Promise(e=>{setTimeout(e,n)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j4(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q4=/^[cdef][\w-]{21}$/,Zg="";function G4(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=K4(n);return q4.test(t)?t:Zg}catch{return Zg}}function K4(n){return j4(n).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Md(n){return`${n.appName}!${n.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mC=new Map;function gC(n,e){const t=Md(n);_C(t,e),$4(t,e)}function _C(n,e){const t=mC.get(n);if(t)for(const i of t)i(e)}function $4(n,e){const t=Y4();t&&t.postMessage({key:n,fid:e}),Q4()}let Aa=null;function Y4(){return!Aa&&"BroadcastChannel"in self&&(Aa=new BroadcastChannel("[Firebase] FID Change"),Aa.onmessage=n=>{_C(n.data.key,n.data.fid)}),Aa}function Q4(){mC.size===0&&Aa&&(Aa.close(),Aa=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W4="firebase-installations-database",X4=1,Pa="firebase-installations-store";let fg=null;function wy(){return fg||(fg=wb(W4,X4,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Pa)}}})),fg}async function td(n,e){const t=Md(n),a=(await wy()).transaction(Pa,"readwrite"),l=a.objectStore(Pa),c=await l.get(t);return await l.put(e,t),await a.done,(!c||c.fid!==e.fid)&&gC(n,e.fid),e}async function yC(n){const e=Md(n),i=(await wy()).transaction(Pa,"readwrite");await i.objectStore(Pa).delete(e),await i.done}async function xd(n,e){const t=Md(n),a=(await wy()).transaction(Pa,"readwrite"),l=a.objectStore(Pa),c=await l.get(t),d=e(c);return d===void 0?await l.delete(t):await l.put(d,t),await a.done,d&&(!c||c.fid!==d.fid)&&gC(n,d.fid),d}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function by(n){let e;const t=await xd(n.appConfig,i=>{const a=Z4(i),l=J4(n,a);return e=l.registrationPromise,l.installationEntry});return t.fid===Zg?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function Z4(n){const e=n||{fid:G4(),registrationStatus:0};return vC(e)}function J4(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const a=Promise.reject(ka.create("app-offline"));return{installationEntry:e,registrationPromise:a}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=eU(n,t);return{installationEntry:t,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:tU(n)}:{installationEntry:e}}async function eU(n,e){try{const t=await H4(n,e);return td(n.appConfig,t)}catch(t){throw lC(t)&&t.customData.serverCode===409?await yC(n.appConfig):await td(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function tU(n){let e=await iw(n.appConfig);for(;e.registrationStatus===1;)await pC(100),e=await iw(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:i}=await by(n);return i||t}return e}function iw(n){return xd(n,e=>{if(!e)throw ka.create("installation-not-found");return vC(e)})}function vC(n){return nU(n)?{fid:n.fid,registrationStatus:0}:n}function nU(n){return n.registrationStatus===1&&n.registrationTime+sC<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iU({appConfig:n,heartbeatServiceProvider:e},t){const i=rU(n,t),a=B4(n,t),l=e.getImmediate({optional:!0});if(l){const m=await l.getHeartbeatsHeader();m&&a.append("x-firebase-client",m)}const c={installation:{sdkVersion:aC,appId:n.appId}},d={method:"POST",headers:a,body:JSON.stringify(c)},p=await dC(()=>fetch(i,d));if(p.ok){const m=await p.json();return cC(m)}else throw await hC("Generate Auth Token",p)}function rU(n,{fid:e}){return`${uC(n)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ay(n,e=!1){let t;const i=await xd(n.appConfig,l=>{if(!EC(l))throw ka.create("not-registered");const c=l.authToken;if(!e&&oU(c))return l;if(c.requestStatus===1)return t=sU(n,e),l;{if(!navigator.onLine)throw ka.create("app-offline");const d=uU(l);return t=aU(n,d),d}});return t?await t:i.authToken}async function sU(n,e){let t=await rw(n.appConfig);for(;t.authToken.requestStatus===1;)await pC(100),t=await rw(n.appConfig);const i=t.authToken;return i.requestStatus===0?Ay(n,e):i}function rw(n){return xd(n,e=>{if(!EC(e))throw ka.create("not-registered");const t=e.authToken;return cU(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function aU(n,e){try{const t=await iU(n,e),i=Object.assign(Object.assign({},e),{authToken:t});return await td(n.appConfig,i),t}catch(t){if(lC(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await yC(n.appConfig);else{const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await td(n.appConfig,i)}throw t}}function EC(n){return n!==void 0&&n.registrationStatus===2}function oU(n){return n.requestStatus===2&&!lU(n)}function lU(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+x4}function uU(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function cU(n){return n.requestStatus===1&&n.requestTime+sC<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hU(n){const e=n,{installationEntry:t,registrationPromise:i}=await by(e);return i?i.catch(console.error):Ay(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fU(n,e=!1){const t=n;return await dU(t),(await Ay(t,e)).token}async function dU(n){const{registrationPromise:e}=await by(n);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pU(n){if(!n||!n.options)throw dg("App Configuration");if(!n.name)throw dg("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw dg(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function dg(n){return ka.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TC="installations",mU="installations-internal",gU=n=>{const e=n.getProvider("app").getImmediate(),t=pU(e),i=Br(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},_U=n=>{const e=n.getProvider("app").getImmediate(),t=Br(e,TC).getImmediate();return{getId:()=>hU(t),getToken:a=>fU(t,a)}};function yU(){si(new jn(TC,gU,"PUBLIC")),si(new jn(mU,_U,"PRIVATE"))}yU();gn(rC,Sy);gn(rC,Sy,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nd="analytics",vU="firebase_id",EU="origin",TU=60*1e3,SU="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Ry="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const On=new vc("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wU={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Fn=new Ua("analytics","Analytics",wU);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bU(n){if(!n.startsWith(Ry)){const e=Fn.create("invalid-gtag-resource",{gtagURL:n});return On.warn(e.message),""}return n}function SC(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function AU(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function RU(n,e){const t=AU("firebase-js-sdk-policy",{createScriptURL:bU}),i=document.createElement("script"),a=`${Ry}?l=${n}&id=${e}`;i.src=t?t==null?void 0:t.createScriptURL(a):a,i.async=!0,document.head.appendChild(i)}function CU(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function IU(n,e,t,i,a,l){const c=i[a];try{if(c)await e[c];else{const p=(await SC(t)).find(m=>m.measurementId===a);p&&await e[p.appId]}}catch(d){On.error(d)}n("config",a,l)}async function NU(n,e,t,i,a){try{let l=[];if(a&&a.send_to){let c=a.send_to;Array.isArray(c)||(c=[c]);const d=await SC(t);for(const p of c){const m=d.find(T=>T.measurementId===p),y=m&&e[m.appId];if(y)l.push(y);else{l=[];break}}}l.length===0&&(l=Object.values(e)),await Promise.all(l),n("event",i,a||{})}catch(l){On.error(l)}}function OU(n,e,t,i){async function a(l,...c){try{if(l==="event"){const[d,p]=c;await NU(n,e,t,d,p)}else if(l==="config"){const[d,p]=c;await IU(n,e,t,i,d,p)}else if(l==="consent"){const[d,p]=c;n("consent",d,p)}else if(l==="get"){const[d,p,m]=c;n("get",d,p,m)}else if(l==="set"){const[d]=c;n("set",d)}else n(l,...c)}catch(d){On.error(d)}}return a}function DU(n,e,t,i,a){let l=function(...c){window[i].push(arguments)};return window[a]&&typeof window[a]=="function"&&(l=window[a]),window[a]=OU(l,n,e,t),{gtagCore:l,wrappedGtag:window[a]}}function kU(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Ry)&&t.src.includes(n))return t;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PU=30,MU=1e3;class xU{constructor(e={},t=MU){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const wC=new xU;function LU(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function VU(n){var e;const{appId:t,apiKey:i}=n,a={method:"GET",headers:LU(i)},l=SU.replace("{app-id}",t),c=await fetch(l,a);if(c.status!==200&&c.status!==304){let d="";try{const p=await c.json();!((e=p.error)===null||e===void 0)&&e.message&&(d=p.error.message)}catch{}throw Fn.create("config-fetch-failed",{httpStatus:c.status,responseMessage:d})}return c.json()}async function UU(n,e=wC,t){const{appId:i,apiKey:a,measurementId:l}=n.options;if(!i)throw Fn.create("no-app-id");if(!a){if(l)return{measurementId:l,appId:i};throw Fn.create("no-api-key")}const c=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},d=new FU;return setTimeout(async()=>{d.abort()},TU),bC({appId:i,apiKey:a,measurementId:l},c,d,e)}async function bC(n,{throttleEndTimeMillis:e,backoffCount:t},i,a=wC){var l;const{appId:c,measurementId:d}=n;try{await BU(i,e)}catch(p){if(d)return On.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${d} provided in the "measurementId" field in the local Firebase config. [${p==null?void 0:p.message}]`),{appId:c,measurementId:d};throw p}try{const p=await VU(n);return a.deleteThrottleMetadata(c),p}catch(p){const m=p;if(!zU(m)){if(a.deleteThrottleMetadata(c),d)return On.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${d} provided in the "measurementId" field in the local Firebase config. [${m==null?void 0:m.message}]`),{appId:c,measurementId:d};throw p}const y=Number((l=m==null?void 0:m.customData)===null||l===void 0?void 0:l.httpStatus)===503?b0(t,a.intervalMillis,PU):b0(t,a.intervalMillis),T={throttleEndTimeMillis:Date.now()+y,backoffCount:t+1};return a.setThrottleMetadata(c,T),On.debug(`Calling attemptFetch again in ${y} millis`),bC(n,T,i,a)}}function BU(n,e){return new Promise((t,i)=>{const a=Math.max(e-Date.now(),0),l=setTimeout(t,a);n.addEventListener(()=>{clearTimeout(l),i(Fn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function zU(n){if(!(n instanceof oi)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class FU{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function HU(n,e,t,i,a){if(a&&a.global){n("event",t,i);return}else{const l=await e,c=Object.assign(Object.assign({},i),{send_to:l});n("event",t,c)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jU(){if(b_())try{await A_()}catch(n){return On.warn(Fn.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return On.warn(Fn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function qU(n,e,t,i,a,l,c){var d;const p=UU(n);p.then(I=>{t[I.measurementId]=I.appId,n.options.measurementId&&I.measurementId!==n.options.measurementId&&On.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${I.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(I=>On.error(I)),e.push(p);const m=jU().then(I=>{if(I)return i.getId()}),[y,T]=await Promise.all([p,m]);kU(l)||RU(l,y.measurementId),a("js",new Date);const S=(d=c==null?void 0:c.config)!==null&&d!==void 0?d:{};return S[EU]="firebase",S.update=!0,T!=null&&(S[vU]=T),a("config",y.measurementId,S),y.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GU{constructor(e){this.app=e}_delete(){return delete Zu[this.app.options.appId],Promise.resolve()}}let Zu={},sw=[];const aw={};let pg="dataLayer",KU="gtag",ow,AC,lw=!1;function $U(){const n=[];if(w_()&&n.push("This is a browser extension environment."),vb()||n.push("Cookies are not available."),n.length>0){const e=n.map((i,a)=>`(${a+1}) ${i}`).join(" "),t=Fn.create("invalid-analytics-context",{errorInfo:e});On.warn(t.message)}}function YU(n,e,t){$U();const i=n.options.appId;if(!i)throw Fn.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)On.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Fn.create("no-api-key");if(Zu[i]!=null)throw Fn.create("already-exists",{id:i});if(!lw){CU(pg);const{wrappedGtag:l,gtagCore:c}=DU(Zu,sw,aw,pg,KU);AC=l,ow=c,lw=!0}return Zu[i]=qU(n,sw,aw,e,ow,pg,t),new GU(n)}function QU(n=Ec()){n=bt(n);const e=Br(n,nd);return e.isInitialized()?e.getImmediate():WU(n)}function WU(n,e={}){const t=Br(n,nd);if(t.isInitialized()){const a=t.getImmediate();if(Or(e,t.getOptions()))return a;throw Fn.create("already-initialized")}return t.initialize({options:e})}async function XU(){if(w_()||!vb()||!b_())return!1;try{return await A_()}catch{return!1}}function ZU(n,e,t,i){n=bt(n),HU(AC,Zu[n.app.options.appId],e,t,i).catch(a=>On.error(a))}const uw="@firebase/analytics",cw="0.10.16";function JU(){si(new jn(nd,(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),a=e.getProvider("installations-internal").getImmediate();return YU(i,a,t)},"PUBLIC")),si(new jn("analytics-internal",n,"PRIVATE")),gn(uw,cw),gn(uw,cw,"esm2017");function n(e){try{const t=e.getProvider(nd).getImmediate();return{logEvent:(i,a,l)=>ZU(t,i,a,l)}}catch(t){throw Fn.create("interop-component-reg-failed",{reason:t})}}}JU();var hw={};const fw="@firebase/database",dw="1.0.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let RC="";function e6(n){RC=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t6{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),rn(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:rc(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n6{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Ur(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CC=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new t6(e)}}catch{}return new n6},Ra=CC("localStorage"),i6=CC("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zo=new vc("@firebase/database"),r6=function(){let n=1;return function(){return n++}}(),IC=function(n){const e=vD(n),t=new pD;t.update(e);const i=t.digest();return y_.encodeByteArray(i)},Nc=function(...n){let e="";for(let t=0;t<n.length;t++){const i=n[t];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=Nc.apply(null,i):typeof i=="object"?e+=rn(i):e+=i,e+=" "}return e};let Ju=null,pw=!0;const s6=function(n,e){le(!0,"Can't turn on custom loggers persistently."),Zo.logLevel=Me.VERBOSE,Ju=Zo.log.bind(Zo)},dn=function(...n){if(pw===!0&&(pw=!1,Ju===null&&i6.get("logging_enabled")===!0&&s6()),Ju){const e=Nc.apply(null,n);Ju(e)}},Oc=function(n){return function(...e){dn(n,...e)}},Jg=function(...n){const e="FIREBASE INTERNAL ERROR: "+Nc(...n);Zo.error(e)},xr=function(...n){const e=`FIREBASE FATAL ERROR: ${Nc(...n)}`;throw Zo.error(e),new Error(e)},Hn=function(...n){const e="FIREBASE WARNING: "+Nc(...n);Zo.warn(e)},a6=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Hn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},NC=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},o6=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},ul="[MIN_NAME]",Ma="[MAX_NAME]",yl=function(n,e){if(n===e)return 0;if(n===ul||e===Ma)return-1;if(e===ul||n===Ma)return 1;{const t=mw(n),i=mw(e);return t!==null?i!==null?t-i===0?n.length-e.length:t-i:-1:i!==null?1:n<e?-1:1}},l6=function(n,e){return n===e?0:n<e?-1:1},Mu=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+rn(e))},Cy=function(n){if(typeof n!="object"||n===null)return rn(n);const e=[];for(const i in n)e.push(i);e.sort();let t="{";for(let i=0;i<e.length;i++)i!==0&&(t+=","),t+=rn(e[i]),t+=":",t+=Cy(n[e[i]]);return t+="}",t},OC=function(n,e){const t=n.length;if(t<=e)return[n];const i=[];for(let a=0;a<t;a+=e)a+e>t?i.push(n.substring(a,t)):i.push(n.substring(a,a+e));return i};function ai(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const DC=function(n){le(!NC(n),"Invalid JSON number");const e=11,t=52,i=(1<<e-1)-1;let a,l,c,d,p;n===0?(l=0,c=0,a=1/n===-1/0?1:0):(a=n<0,n=Math.abs(n),n>=Math.pow(2,1-i)?(d=Math.min(Math.floor(Math.log(n)/Math.LN2),i),l=d+i,c=Math.round(n*Math.pow(2,t-d)-Math.pow(2,t))):(l=0,c=Math.round(n/Math.pow(2,1-i-t))));const m=[];for(p=t;p;p-=1)m.push(c%2?1:0),c=Math.floor(c/2);for(p=e;p;p-=1)m.push(l%2?1:0),l=Math.floor(l/2);m.push(a?1:0),m.reverse();const y=m.join("");let T="";for(p=0;p<64;p+=8){let S=parseInt(y.substr(p,8),2).toString(16);S.length===1&&(S="0"+S),T=T+S}return T.toLowerCase()},u6=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},c6=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},h6=new RegExp("^-?(0*)\\d{1,10}$"),f6=-2147483648,d6=2147483647,mw=function(n){if(h6.test(n)){const e=Number(n);if(e>=f6&&e<=d6)return e}return null},Dc=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Hn("Exception was thrown by user callback.",t),e},Math.floor(0))}},p6=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ec=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m6{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,Cn(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(i=>this.appCheck=i)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){Hn(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g6{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(a=>this.auth_=a)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(dn("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Hn(e)}}class Of{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Of.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iy="5",kC="v",PC="s",MC="r",xC="f",LC=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,VC="ls",UC="p",e_="ac",BC="websocket",zC="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FC{constructor(e,t,i,a,l=!1,c="",d=!1,p=!1,m=null){this.secure=t,this.namespace=i,this.webSocketOnly=a,this.nodeAdmin=l,this.persistenceKey=c,this.includeNamespaceInQueryParams=d,this.isUsingEmulator=p,this.emulatorOptions=m,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ra.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ra.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function _6(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function HC(n,e,t){le(typeof e=="string","typeof type must == string"),le(typeof t=="object","typeof params must == object");let i;if(e===BC)i=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===zC)i=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);_6(n)&&(t.ns=n.namespace);const a=[];return ai(t,(l,c)=>{a.push(l+"="+c)}),i+a.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y6{constructor(){this.counters_={}}incrementCounter(e,t=1){Ur(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return WO(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mg={},gg={};function Ny(n){const e=n.toString();return mg[e]||(mg[e]=new y6),mg[e]}function v6(n,e){const t=n.toString();return gg[t]||(gg[t]=e()),gg[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E6{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let a=0;a<i.length;++a)i[a]&&Dc(()=>{this.onMessage_(i[a])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gw="start",T6="close",S6="pLPCommand",w6="pRTLPCB",jC="id",qC="pw",GC="ser",b6="cb",A6="seg",R6="ts",C6="d",I6="dframe",KC=1870,$C=30,N6=KC-$C,O6=25e3,D6=3e4;class Go{constructor(e,t,i,a,l,c,d){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=a,this.authToken=l,this.transportSessionId=c,this.lastSessionId=d,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Oc(e),this.stats_=Ny(t),this.urlFn=p=>(this.appCheckToken&&(p[e_]=this.appCheckToken),HC(t,zC,p))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new E6(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(D6)),o6(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Oy((...l)=>{const[c,d,p,m,y]=l;if(this.incrementIncomingBytes_(l),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,c===gw)this.id=d,this.password=p;else if(c===T6)d?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(d,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+c)},(...l)=>{const[c,d]=l;this.incrementIncomingBytes_(l),this.myPacketOrderer.handleResponse(c,d)},()=>{this.onClosed_()},this.urlFn);const i={};i[gw]="t",i[GC]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[b6]=this.scriptTagHolder.uniqueCallbackIdentifier),i[kC]=Iy,this.transportSessionId&&(i[PC]=this.transportSessionId),this.lastSessionId&&(i[VC]=this.lastSessionId),this.applicationId&&(i[UC]=this.applicationId),this.appCheckToken&&(i[e_]=this.appCheckToken),typeof location<"u"&&location.hostname&&LC.test(location.hostname)&&(i[MC]=xC);const a=this.urlFn(i);this.log_("Connecting via long-poll to "+a),this.scriptTagHolder.addTag(a,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Go.forceAllow_=!0}static forceDisallow(){Go.forceDisallow_=!0}static isAvailable(){return Go.forceAllow_?!0:!Go.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!u6()&&!c6()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=rn(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=db(t),a=OC(i,N6);for(let l=0;l<a.length;l++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,a.length,a[l]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const i={};i[I6]="t",i[jC]=e,i[qC]=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=rn(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Oy{constructor(e,t,i,a){this.onDisconnect=i,this.urlFn=a,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=r6(),window[S6+this.uniqueCallbackIdentifier]=e,window[w6+this.uniqueCallbackIdentifier]=t,this.myIFrame=Oy.createIFrame_();let l="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(l='<script>document.domain="'+document.domain+'";<\/script>');const c="<html><body>"+l+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(c),this.myIFrame.doc.close()}catch(d){dn("frame writing exception"),d.stack&&dn(d.stack),dn(d)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||dn("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[jC]=this.myID,e[qC]=this.myPW,e[GC]=this.currentSerial;let t=this.urlFn(e),i="",a=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+$C+i.length<=KC;){const c=this.pendingSegs.shift();i=i+"&"+A6+a+"="+c.seg+"&"+R6+a+"="+c.ts+"&"+C6+a+"="+c.d,a++}return t=t+i,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,i){this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},a=setTimeout(i,Math.floor(O6)),l=()=>{clearTimeout(a),i()};this.addTag(e,l)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const a=i.readyState;(!a||a==="loaded"||a==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{dn("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k6=16384,P6=45e3;let id=null;typeof MozWebSocket<"u"?id=MozWebSocket:typeof WebSocket<"u"&&(id=WebSocket);class pi{constructor(e,t,i,a,l,c,d){this.connId=e,this.applicationId=i,this.appCheckToken=a,this.authToken=l,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Oc(this.connId),this.stats_=Ny(t),this.connURL=pi.connectionURL_(t,c,d,a,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,i,a,l){const c={};return c[kC]=Iy,typeof location<"u"&&location.hostname&&LC.test(location.hostname)&&(c[MC]=xC),t&&(c[PC]=t),i&&(c[VC]=i),a&&(c[e_]=a),l&&(c[UC]=l),HC(e,BC,c)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ra.set("previous_websocket_failure",!0);try{let i;oD(),this.mySock=new id(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const a=i.message||i.data;a&&this.log_(a),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const a=i.message||i.data;a&&this.log_(a),this.onClosed_()}}start(){}static forceDisallow(){pi.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(t);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&id!==null&&!pi.forceDisallow_}static previouslyFailed(){return Ra.isInMemoryStorage||Ra.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ra.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const i=rc(t);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(le(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const i=this.extractFrameCount_(t);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const t=rn(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=OC(t,k6);i.length>1&&this.sendString_(String(i.length));for(let a=0;a<i.length;a++)this.sendString_(i[a])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(P6))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}pi.responsesRequiredToBeHealthy=2;pi.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{static get ALL_TRANSPORTS(){return[Go,pi]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=pi&&pi.isAvailable();let i=t&&!pi.previouslyFailed();if(e.webSocketOnly&&(t||Hn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[pi];else{const a=this.transports_=[];for(const l of pc.ALL_TRANSPORTS)l&&l.isAvailable()&&a.push(l);pc.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}pc.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M6=6e4,x6=5e3,L6=10*1024,V6=100*1024,_g="t",_w="d",U6="s",yw="r",B6="e",vw="o",Ew="a",Tw="n",Sw="p",z6="h";class F6{constructor(e,t,i,a,l,c,d,p,m,y){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=a,this.authToken_=l,this.onMessage_=c,this.onReady_=d,this.onDisconnect_=p,this.onKill_=m,this.lastSessionId=y,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Oc("c:"+this.id+":"),this.transportManager_=new pc(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,i)},Math.floor(0));const a=e.healthyTimeout||0;a>0&&(this.healthyTimeout_=ec(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>V6?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>L6?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(a)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(_g in e){const t=e[_g];t===Ew?this.upgradeIfSecondaryHealthy_():t===yw?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===vw&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Mu("t",e),i=Mu("d",e);if(t==="c")this.onSecondaryControl_(i);else if(t==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Sw,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Ew,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Tw,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Mu("t",e),i=Mu("d",e);t==="c"?this.onControl_(i):t==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Mu(_g,e);if(_w in e){const i=e[_w];if(t===z6){const a=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(a.h=this.repoInfo_.host),this.onHandshake_(a)}else if(t===Tw){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let a=0;a<this.pendingDataMessages.length;++a)this.onDataMessage_(this.pendingDataMessages[a]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===U6?this.onConnectionShutdown_(i):t===yw?this.onReset_(i):t===B6?Jg("Server Error: "+i):t===vw?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Jg("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,i=e.v,a=e.h;this.sessionId=e.s,this.repoInfo_.host=a,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Iy!==i&&Hn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),ec(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(M6))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ec(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(x6))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Sw,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ra.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YC{put(e,t,i,a){}merge(e,t,i,a){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,i){}onDisconnectMerge(e,t,i){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QC{constructor(e){this.allowedEvents_=e,this.listeners_={},le(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let a=0;a<i.length;a++)i[a].callback.apply(i[a].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});const a=this.getInitialEvent(e);a&&t.apply(i,a)}off(e,t,i){this.validateEventType_(e);const a=this.listeners_[e]||[];for(let l=0;l<a.length;l++)if(a[l].callback===t&&(!i||i===a[l].context)){a.splice(l,1);return}}validateEventType_(e){le(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd extends QC{static getInstance(){return new rd}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!S_()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return le(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ww=32,bw=768;class lt{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let i=0;for(let a=0;a<this.pieces_.length;a++)this.pieces_[a].length>0&&(this.pieces_[i]=this.pieces_[a],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function nt(){return new lt("")}function Fe(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Ls(n){return n.pieces_.length-n.pieceNum_}function ot(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new lt(n.pieces_,e)}function WC(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function H6(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function XC(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function ZC(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new lt(e,0)}function Qt(n,e){const t=[];for(let i=n.pieceNum_;i<n.pieces_.length;i++)t.push(n.pieces_[i]);if(e instanceof lt)for(let i=e.pieceNum_;i<e.pieces_.length;i++)t.push(e.pieces_[i]);else{const i=e.split("/");for(let a=0;a<i.length;a++)i[a].length>0&&t.push(i[a])}return new lt(t,0)}function Le(n){return n.pieceNum_>=n.pieces_.length}function ri(n,e){const t=Fe(n),i=Fe(e);if(t===null)return e;if(t===i)return ri(ot(n),ot(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function JC(n,e){if(Ls(n)!==Ls(e))return!1;for(let t=n.pieceNum_,i=e.pieceNum_;t<=n.pieces_.length;t++,i++)if(n.pieces_[t]!==e.pieces_[i])return!1;return!0}function _i(n,e){let t=n.pieceNum_,i=e.pieceNum_;if(Ls(n)>Ls(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[i])return!1;++t,++i}return!0}class j6{constructor(e,t){this.errorPrefix_=t,this.parts_=XC(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=gd(this.parts_[i]);eI(this)}}function q6(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=gd(e),eI(n)}function G6(n){const e=n.parts_.pop();n.byteLength_-=gd(e),n.parts_.length>0&&(n.byteLength_-=1)}function eI(n){if(n.byteLength_>bw)throw new Error(n.errorPrefix_+"has a key path longer than "+bw+" bytes ("+n.byteLength_+").");if(n.parts_.length>ww)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+ww+") or object contains a cycle "+Sa(n))}function Sa(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dy extends QC{static getInstance(){return new Dy}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}getInitialEvent(e){return le(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xu=1e3,K6=60*5*1e3,Aw=30*1e3,$6=1.3,Y6=3e4,Q6="server_kill",Rw=3;class Ir extends YC{constructor(e,t,i,a,l,c,d,p){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=a,this.onServerInfoUpdate_=l,this.authTokenProvider_=c,this.appCheckTokenProvider_=d,this.authOverride_=p,this.id=Ir.nextPersistentConnectionId_++,this.log_=Oc("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=xu,this.maxReconnectDelay_=K6,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,p)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Dy.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&rd.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){const a=++this.requestNumber_,l={r:a,a:e,b:t};this.log_(rn(l)),le(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(l),i&&(this.requestCBHash_[a]=i)}get(e){this.initConnection_();const t=new E_,a={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:c=>{const d=c.d;c.s==="ok"?t.resolve(d):t.reject(d)}};this.outstandingGets_.push(a),this.outstandingGetCount_++;const l=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(l),t.promise}listen(e,t,i,a){this.initConnection_();const l=e._queryIdentifier,c=e._path.toString();this.log_("Listen called for "+c+" "+l),this.listens.has(c)||this.listens.set(c,new Map),le(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),le(!this.listens.get(c).has(l),"listen() called twice for same path/queryId.");const d={onComplete:a,hashFn:t,query:e,tag:i};this.listens.get(c).set(l,d),this.connected_&&this.sendListen_(d)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)})}sendListen_(e){const t=e.query,i=t._path.toString(),a=t._queryIdentifier;this.log_("Listen on "+i+" for "+a);const l={p:i},c="q";e.tag&&(l.q=t._queryObject,l.t=e.tag),l.h=e.hashFn(),this.sendRequest(c,l,d=>{const p=d.d,m=d.s;Ir.warnOnListenWarnings_(p,t),(this.listens.get(i)&&this.listens.get(i).get(a))===e&&(this.log_("listen response",d),m!=="ok"&&this.removeListen_(i,a),e.onComplete&&e.onComplete(m,p))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Ur(e,"w")){const i=el(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const a='".indexOn": "'+t._queryParams.getIndex().toString()+'"',l=t._path.toString();Hn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${a} at ${l} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||dD(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Aw)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=fD(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(t,i,a=>{const l=a.s,c=a.d||"error";this.authToken_===e&&(l==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(l,c))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,i=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)})}unlisten(e,t){const i=e._path.toString(),a=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+a),le(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,a)&&this.connected_&&this.sendUnlisten_(i,a,e._queryObject,t)}sendUnlisten_(e,t,i,a){this.log_("Unlisten on "+e+" for "+t);const l={p:e},c="n";a&&(l.q=i,l.t=a),this.sendRequest(c,l)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,a){const l={p:t,d:i};this.log_("onDisconnect "+e,l),this.sendRequest(e,l,c=>{a&&setTimeout(()=>{a(c.s,c.d)},Math.floor(0))})}put(e,t,i,a){this.putInternal("p",e,t,i,a)}merge(e,t,i,a){this.putInternal("m",e,t,i,a)}putInternal(e,t,i,a,l){this.initConnection_();const c={p:t,d:i};l!==void 0&&(c.h=l),this.outstandingPuts_.push({action:e,request:c,onComplete:a}),this.outstandingPutCount_++;const d=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(d):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,a=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,l=>{this.log_(t+" response",l),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),a&&a(l.s,l.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,i=>{if(i.s!=="ok"){const l=i.d;this.log_("reportStats","Error sending stats: "+l)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+rn(e));const t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Jg("Unrecognized action received from server: "+rn(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){le(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=xu,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=xu,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Y6&&(this.reconnectDelay_=xu),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*$6)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),a=this.id+":"+Ir.nextConnectionId_++,l=this.lastSessionId;let c=!1,d=null;const p=function(){d?d.close():(c=!0,i())},m=function(T){le(d,"sendRequest call when we're not connected not allowed."),d.sendRequest(T)};this.realtime_={close:p,sendRequest:m};const y=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[T,S]=await Promise.all([this.authTokenProvider_.getToken(y),this.appCheckTokenProvider_.getToken(y)]);c?dn("getToken() completed but was canceled"):(dn("getToken() completed. Creating connection."),this.authToken_=T&&T.accessToken,this.appCheckToken_=S&&S.token,d=new F6(a,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,I=>{Hn(I+" ("+this.repoInfo_.toString()+")"),this.interrupt(Q6)},l))}catch(T){this.log_("Failed to get token: "+T),c||(this.repoInfo_.nodeAdmin&&Hn(T),p())}}}interrupt(e){dn("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){dn("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ag(this.interruptReasons_)&&(this.reconnectDelay_=xu,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;t?i=t.map(l=>Cy(l)).join("$"):i="default";const a=this.removeListen_(e,i);a&&a.onComplete&&a.onComplete("permission_denied")}removeListen_(e,t){const i=new lt(e).toString();let a;if(this.listens.has(i)){const l=this.listens.get(i);a=l.get(t),l.delete(t),l.size===0&&this.listens.delete(i)}else a=void 0;return a}onAuthRevoked_(e,t){dn("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Rw&&(this.reconnectDelay_=Aw,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){dn("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Rw&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+RC.replace(/\./g,"-")]=1,S_()?e["framework.cordova"]=1:yb()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=rd.getInstance().currentlyOnline();return Ag(this.interruptReasons_)&&e}}Ir.nextPersistentConnectionId_=0;Ir.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new He(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const i=new He(ul,e),a=new He(ul,t);return this.compare(i,a)!==0}minPost(){return He.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gf;class tI extends Ld{static get __EMPTY_NODE(){return gf}static set __EMPTY_NODE(e){gf=e}compare(e,t){return yl(e.name,t.name)}isDefinedOn(e){throw dl("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return He.MIN}maxPost(){return new He(Ma,gf)}makePost(e,t){return le(typeof e=="string","KeyIndex indexValue must always be a string."),new He(e,gf)}toString(){return".key"}}const Jo=new tI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f{constructor(e,t,i,a,l=null){this.isReverse_=a,this.resultGenerator_=l,this.nodeStack_=[];let c=1;for(;!e.isEmpty();)if(e=e,c=t?i(e.key,t):1,a&&(c*=-1),c<0)this.isReverse_?e=e.left:e=e.right;else if(c===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Yt{constructor(e,t,i,a,l){this.key=e,this.value=t,this.color=i??Yt.RED,this.left=a??In.EMPTY_NODE,this.right=l??In.EMPTY_NODE}copy(e,t,i,a,l){return new Yt(e??this.key,t??this.value,i??this.color,a??this.left,l??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let a=this;const l=i(e,a.key);return l<0?a=a.copy(null,null,null,a.left.insert(e,t,i),null):l===0?a=a.copy(null,t,null,null,null):a=a.copy(null,null,null,null,a.right.insert(e,t,i)),a.fixUp_()}removeMin_(){if(this.left.isEmpty())return In.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let i,a;if(i=this,t(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),t(e,i.key)===0){if(i.right.isEmpty())return In.EMPTY_NODE;a=i.right.min_(),i=i.copy(a.key,a.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Yt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Yt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Yt.RED=!0;Yt.BLACK=!1;class W6{copy(e,t,i,a,l){return this}insert(e,t,i){return new Yt(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class In{constructor(e,t=In.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new In(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Yt.BLACK,null,null))}remove(e){return new In(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Yt.BLACK,null,null))}get(e){let t,i=this.root_;for(;!i.isEmpty();){if(t=this.comparator_(e,i.key),t===0)return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}getPredecessorKey(e){let t,i=this.root_,a=null;for(;!i.isEmpty();)if(t=this.comparator_(e,i.key),t===0){if(i.left.isEmpty())return a?a.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else t<0?i=i.left:t>0&&(a=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new _f(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new _f(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new _f(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new _f(this.root_,null,this.comparator_,!0,e)}}In.EMPTY_NODE=new W6;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X6(n,e){return yl(n.name,e.name)}function ky(n,e){return yl(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let t_;function Z6(n){t_=n}const nI=function(n){return typeof n=="number"?"number:"+DC(n):"string:"+n},iI=function(n){if(n.isLeafNode()){const e=n.val();le(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ur(e,".sv"),"Priority must be a string or number.")}else le(n===t_||n.isEmpty(),"priority of unexpected type.");le(n===t_||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cw;class Kt{static set __childrenNodeConstructor(e){Cw=e}static get __childrenNodeConstructor(){return Cw}constructor(e,t=Kt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,le(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),iI(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Kt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Kt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Le(e)?this:Fe(e)===".priority"?this.priorityNode_:Kt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:Kt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const i=Fe(e);return i===null?t:t.isEmpty()&&i!==".priority"?this:(le(i!==".priority"||Ls(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,Kt.__childrenNodeConstructor.EMPTY_NODE.updateChild(ot(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+nI(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=DC(this.value_):e+=this.value_,this.lazyHash_=IC(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Kt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Kt.__childrenNodeConstructor?-1:(le(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,i=typeof this.value_,a=Kt.VALUE_TYPE_ORDER.indexOf(t),l=Kt.VALUE_TYPE_ORDER.indexOf(i);return le(a>=0,"Unknown leaf type: "+t),le(l>=0,"Unknown leaf type: "+i),a===l?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:l-a}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}Kt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rI,sI;function J6(n){rI=n}function e3(n){sI=n}class t3 extends Ld{compare(e,t){const i=e.node.getPriority(),a=t.node.getPriority(),l=i.compareTo(a);return l===0?yl(e.name,t.name):l}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return He.MIN}maxPost(){return new He(Ma,new Kt("[PRIORITY-POST]",sI))}makePost(e,t){const i=rI(e);return new He(t,new Kt("[PRIORITY-POST]",i))}toString(){return".priority"}}const mn=new t3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n3=Math.log(2);class i3{constructor(e){const t=l=>parseInt(Math.log(l)/n3,10),i=l=>parseInt(Array(l+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const a=i(this.count);this.bits_=e+1&a}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const sd=function(n,e,t,i){n.sort(e);const a=function(p,m){const y=m-p;let T,S;if(y===0)return null;if(y===1)return T=n[p],S=t?t(T):T,new Yt(S,T.node,Yt.BLACK,null,null);{const I=parseInt(y/2,10)+p,N=a(p,I),H=a(I+1,m);return T=n[I],S=t?t(T):T,new Yt(S,T.node,Yt.BLACK,N,H)}},l=function(p){let m=null,y=null,T=n.length;const S=function(N,H){const B=T-N,$=T;T-=N;const W=a(B+1,$),ee=n[B],ae=t?t(ee):ee;I(new Yt(ae,ee.node,H,null,W))},I=function(N){m?(m.left=N,m=N):(y=N,m=N)};for(let N=0;N<p.count;++N){const H=p.nextBitIsOne(),B=Math.pow(2,p.count-(N+1));H?S(B,Yt.BLACK):(S(B,Yt.BLACK),S(B,Yt.RED))}return y},c=new i3(n.length),d=l(c);return new In(i||e,d)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yg;const Bo={};class Ar{static get Default(){return le(Bo&&mn,"ChildrenNode.ts has not been loaded"),yg=yg||new Ar({".priority":Bo},{".priority":mn}),yg}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=el(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof In?t:null}hasIndex(e){return Ur(this.indexSet_,e.toString())}addIndex(e,t){le(e!==Jo,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let a=!1;const l=t.getIterator(He.Wrap);let c=l.getNext();for(;c;)a=a||e.isDefinedOn(c.node),i.push(c),c=l.getNext();let d;a?d=sd(i,e.getCompare()):d=Bo;const p=e.toString(),m=Object.assign({},this.indexSet_);m[p]=e;const y=Object.assign({},this.indexes_);return y[p]=d,new Ar(y,m)}addToIndexes(e,t){const i=xf(this.indexes_,(a,l)=>{const c=el(this.indexSet_,l);if(le(c,"Missing index implementation for "+l),a===Bo)if(c.isDefinedOn(e.node)){const d=[],p=t.getIterator(He.Wrap);let m=p.getNext();for(;m;)m.name!==e.name&&d.push(m),m=p.getNext();return d.push(e),sd(d,c.getCompare())}else return Bo;else{const d=t.get(e.name);let p=a;return d&&(p=p.remove(new He(e.name,d))),p.insert(e,e.node)}});return new Ar(i,this.indexSet_)}removeFromIndexes(e,t){const i=xf(this.indexes_,a=>{if(a===Bo)return a;{const l=t.get(e.name);return l?a.remove(new He(e.name,l)):a}});return new Ar(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lu;class $e{static get EMPTY_NODE(){return Lu||(Lu=new $e(new In(ky),null,Ar.Default))}constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&iI(this.priorityNode_),this.children_.isEmpty()&&le(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Lu}updatePriority(e){return this.children_.isEmpty()?this:new $e(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Lu:t}}getChild(e){const t=Fe(e);return t===null?this:this.getImmediateChild(t).getChild(ot(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(le(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const i=new He(e,t);let a,l;t.isEmpty()?(a=this.children_.remove(e),l=this.indexMap_.removeFromIndexes(i,this.children_)):(a=this.children_.insert(e,t),l=this.indexMap_.addToIndexes(i,this.children_));const c=a.isEmpty()?Lu:this.priorityNode_;return new $e(a,c,l)}}updateChild(e,t){const i=Fe(e);if(i===null)return t;{le(Fe(e)!==".priority"||Ls(e)===1,".priority must be the last token in a path");const a=this.getImmediateChild(i).updateChild(ot(e),t);return this.updateImmediateChild(i,a)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let i=0,a=0,l=!0;if(this.forEachChild(mn,(c,d)=>{t[c]=d.val(e),i++,l&&$e.INTEGER_REGEXP_.test(c)?a=Math.max(a,Number(c)):l=!1}),!e&&l&&a<2*i){const c=[];for(const d in t)c[d]=t[d];return c}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+nI(this.getPriority().val())+":"),this.forEachChild(mn,(t,i)=>{const a=i.hash();a!==""&&(e+=":"+t+":"+a)}),this.lazyHash_=e===""?"":IC(e)}return this.lazyHash_}getPredecessorChildName(e,t,i){const a=this.resolveIndex_(i);if(a){const l=a.getPredecessorKey(new He(e,t));return l?l.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new He(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new He(t,this.children_.get(t)):null}forEachChild(e,t){const i=this.resolveIndex_(e);return i?i.inorderTraversal(a=>t(a.name,a.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,a=>a);{const a=this.children_.getIteratorFrom(e.name,He.Wrap);let l=a.peek();for(;l!=null&&t.compare(l,e)<0;)a.getNext(),l=a.peek();return a}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,a=>a);{const a=this.children_.getReverseIteratorFrom(e.name,He.Wrap);let l=a.peek();for(;l!=null&&t.compare(l,e)>0;)a.getNext(),l=a.peek();return a}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===kc?-1:0}withIndex(e){if(e===Jo||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new $e(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Jo||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const i=this.getIterator(mn),a=t.getIterator(mn);let l=i.getNext(),c=a.getNext();for(;l&&c;){if(l.name!==c.name||!l.node.equals(c.node))return!1;l=i.getNext(),c=a.getNext()}return l===null&&c===null}else return!1;else return!1}}resolveIndex_(e){return e===Jo?null:this.indexMap_.get(e.toString())}}$e.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class r3 extends $e{constructor(){super(new In(ky),$e.EMPTY_NODE,Ar.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return $e.EMPTY_NODE}isEmpty(){return!1}}const kc=new r3;Object.defineProperties(He,{MIN:{value:new He(ul,$e.EMPTY_NODE)},MAX:{value:new He(Ma,kc)}});tI.__EMPTY_NODE=$e.EMPTY_NODE;Kt.__childrenNodeConstructor=$e;Z6(kc);e3(kc);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s3=!0;function pn(n,e=null){if(n===null)return $e.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),le(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new Kt(t,pn(e))}if(!(n instanceof Array)&&s3){const t=[];let i=!1;if(ai(n,(c,d)=>{if(c.substring(0,1)!=="."){const p=pn(d);p.isEmpty()||(i=i||!p.getPriority().isEmpty(),t.push(new He(c,p)))}}),t.length===0)return $e.EMPTY_NODE;const l=sd(t,X6,c=>c.name,ky);if(i){const c=sd(t,mn.getCompare());return new $e(l,pn(e),new Ar({".priority":c},{".priority":mn}))}else return new $e(l,pn(e),Ar.Default)}else{let t=$e.EMPTY_NODE;return ai(n,(i,a)=>{if(Ur(n,i)&&i.substring(0,1)!=="."){const l=pn(a);(l.isLeafNode()||!l.isEmpty())&&(t=t.updateImmediateChild(i,l))}}),t.updatePriority(pn(e))}}J6(pn);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a3 extends Ld{constructor(e){super(),this.indexPath_=e,le(!Le(e)&&Fe(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const i=this.extractChild(e.node),a=this.extractChild(t.node),l=i.compareTo(a);return l===0?yl(e.name,t.name):l}makePost(e,t){const i=pn(e),a=$e.EMPTY_NODE.updateChild(this.indexPath_,i);return new He(t,a)}maxPost(){const e=$e.EMPTY_NODE.updateChild(this.indexPath_,kc);return new He(Ma,e)}toString(){return XC(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o3 extends Ld{compare(e,t){const i=e.node.compareTo(t.node);return i===0?yl(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return He.MIN}maxPost(){return He.MAX}makePost(e,t){const i=pn(e);return new He(t,i)}toString(){return".value"}}const l3=new o3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u3(n){return{type:"value",snapshotNode:n}}function c3(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function h3(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Iw(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function f3(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Py{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=mn}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return le(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return le(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ul}hasEnd(){return this.endSet_}getIndexEndValue(){return le(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return le(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ma}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return le(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===mn}copy(){const e=new Py;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Nw(n){const e={};if(n.isDefault())return e;let t;if(n.index_===mn?t="$priority":n.index_===l3?t="$value":n.index_===Jo?t="$key":(le(n.index_ instanceof a3,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=rn(t),n.startSet_){const i=n.startAfterSet_?"startAfter":"startAt";e[i]=rn(n.indexStartValue_),n.startNameSet_&&(e[i]+=","+rn(n.indexStartName_))}if(n.endSet_){const i=n.endBeforeSet_?"endBefore":"endAt";e[i]=rn(n.indexEndValue_),n.endNameSet_&&(e[i]+=","+rn(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Ow(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==mn&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad extends YC{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(le(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,i,a){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=a,this.log_=Oc("p:rest:"),this.listens_={}}listen(e,t,i,a){const l=e._path.toString();this.log_("Listen called for "+l+" "+e._queryIdentifier);const c=ad.getListenId_(e,i),d={};this.listens_[c]=d;const p=Nw(e._queryParams);this.restRequest_(l+".json",p,(m,y)=>{let T=y;if(m===404&&(T=null,m=null),m===null&&this.onDataUpdate_(l,T,!1,i),el(this.listens_,c)===d){let S;m?m===401?S="permission_denied":S="rest_error:"+m:S="ok",a(S,null)}})}unlisten(e,t){const i=ad.getListenId_(e,t);delete this.listens_[i]}get(e){const t=Nw(e._queryParams),i=e._path.toString(),a=new E_;return this.restRequest_(i+".json",t,(l,c)=>{let d=c;l===404&&(d=null,l=null),l===null?(this.onDataUpdate_(i,d,!1,null),a.resolve(d)):a.reject(new Error(d))}),a.promise}refreshAuthToken(e){}restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([a,l])=>{a&&a.accessToken&&(t.auth=a.accessToken),l&&l.token&&(t.ac=l.token);const c=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ba(t);this.log_("Sending REST request for "+c);const d=new XMLHttpRequest;d.onreadystatechange=()=>{if(i&&d.readyState===4){this.log_("REST Response for "+c+" received. status:",d.status,"response:",d.responseText);let p=null;if(d.status>=200&&d.status<300){try{p=rc(d.responseText)}catch{Hn("Failed to parse JSON response for "+c+": "+d.responseText)}i(null,p)}else d.status!==401&&d.status!==404&&Hn("Got unsuccessful REST response for "+c+" Status: "+d.status),i(d.status);i=null}},d.open("GET",c,!0),d.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d3{constructor(){this.rootNode_=$e.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function od(){return{value:null,children:new Map}}function aI(n,e,t){if(Le(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const i=Fe(e);n.children.has(i)||n.children.set(i,od());const a=n.children.get(i);e=ot(e),aI(a,e,t)}}function n_(n,e,t){n.value!==null?t(e,n.value):p3(n,(i,a)=>{const l=new lt(e.toString()+"/"+i);n_(a,l,t)})}function p3(n,e){n.children.forEach((t,i)=>{e(i,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m3{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&ai(this.last_,(i,a)=>{t[i]=t[i]-a}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dw=10*1e3,g3=30*1e3,_3=5*60*1e3;class y3{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new m3(e);const i=Dw+(g3-Dw)*Math.random();ec(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),t={};let i=!1;ai(e,(a,l)=>{l>0&&Ur(this.statsToReport_,a)&&(t[a]=l,i=!0)}),i&&this.server_.reportStats(t),ec(this.reportStats_.bind(this),Math.floor(Math.random()*2*_3))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var zi;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(zi||(zi={}));function oI(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function lI(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function uI(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ld{constructor(e,t,i){this.path=e,this.affectedTree=t,this.revert=i,this.type=zi.ACK_USER_WRITE,this.source=oI()}operationForChild(e){if(Le(this.path)){if(this.affectedTree.value!=null)return le(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new lt(e));return new ld(nt(),t,this.revert)}}else return le(Fe(this.path)===e,"operationForChild called for unrelated child."),new ld(ot(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,this.type=zi.OVERWRITE}operationForChild(e){return Le(this.path)?new xa(this.source,nt(),this.snap.getImmediateChild(e)):new xa(this.source,ot(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{constructor(e,t,i){this.source=e,this.path=t,this.children=i,this.type=zi.MERGE}operationForChild(e){if(Le(this.path)){const t=this.children.subtree(new lt(e));return t.isEmpty()?null:t.value?new xa(this.source,nt(),t.value):new mc(this.source,nt(),t)}else return le(Fe(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new mc(this.source,ot(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class My{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Le(e))return this.isFullyInitialized()&&!this.filtered_;const t=Fe(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function v3(n,e,t,i){const a=[],l=[];return e.forEach(c=>{c.type==="child_changed"&&n.index_.indexedValueChanged(c.oldSnap,c.snapshotNode)&&l.push(f3(c.childName,c.snapshotNode))}),Vu(n,a,"child_removed",e,i,t),Vu(n,a,"child_added",e,i,t),Vu(n,a,"child_moved",l,i,t),Vu(n,a,"child_changed",e,i,t),Vu(n,a,"value",e,i,t),a}function Vu(n,e,t,i,a,l){const c=i.filter(d=>d.type===t);c.sort((d,p)=>T3(n,d,p)),c.forEach(d=>{const p=E3(n,d,l);a.forEach(m=>{m.respondsTo(d.type)&&e.push(m.createEvent(p,n.query_))})})}function E3(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function T3(n,e,t){if(e.childName==null||t.childName==null)throw dl("Should only compare child_ events.");const i=new He(e.childName,e.snapshotNode),a=new He(t.childName,t.snapshotNode);return n.index_.compare(i,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cI(n,e){return{eventCache:n,serverCache:e}}function tc(n,e,t,i){return cI(new My(e,t,i),n.serverCache)}function hI(n,e,t,i){return cI(n.eventCache,new My(e,t,i))}function i_(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function La(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vg;const S3=()=>(vg||(vg=new In(l6)),vg);class at{static fromObject(e){let t=new at(null);return ai(e,(i,a)=>{t=t.set(new lt(i),a)}),t}constructor(e,t=S3()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:nt(),value:this.value};if(Le(e))return null;{const i=Fe(e),a=this.children.get(i);if(a!==null){const l=a.findRootMostMatchingPathAndValue(ot(e),t);return l!=null?{path:Qt(new lt(i),l.path),value:l.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Le(e))return this;{const t=Fe(e),i=this.children.get(t);return i!==null?i.subtree(ot(e)):new at(null)}}set(e,t){if(Le(e))return new at(t,this.children);{const i=Fe(e),l=(this.children.get(i)||new at(null)).set(ot(e),t),c=this.children.insert(i,l);return new at(this.value,c)}}remove(e){if(Le(e))return this.children.isEmpty()?new at(null):new at(null,this.children);{const t=Fe(e),i=this.children.get(t);if(i){const a=i.remove(ot(e));let l;return a.isEmpty()?l=this.children.remove(t):l=this.children.insert(t,a),this.value===null&&l.isEmpty()?new at(null):new at(this.value,l)}else return this}}get(e){if(Le(e))return this.value;{const t=Fe(e),i=this.children.get(t);return i?i.get(ot(e)):null}}setTree(e,t){if(Le(e))return t;{const i=Fe(e),l=(this.children.get(i)||new at(null)).setTree(ot(e),t);let c;return l.isEmpty()?c=this.children.remove(i):c=this.children.insert(i,l),new at(this.value,c)}}fold(e){return this.fold_(nt(),e)}fold_(e,t){const i={};return this.children.inorderTraversal((a,l)=>{i[a]=l.fold_(Qt(e,a),t)}),t(e,this.value,i)}findOnPath(e,t){return this.findOnPath_(e,nt(),t)}findOnPath_(e,t,i){const a=this.value?i(t,this.value):!1;if(a)return a;if(Le(e))return null;{const l=Fe(e),c=this.children.get(l);return c?c.findOnPath_(ot(e),Qt(t,l),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,nt(),t)}foreachOnPath_(e,t,i){if(Le(e))return this;{this.value&&i(t,this.value);const a=Fe(e),l=this.children.get(a);return l?l.foreachOnPath_(ot(e),Qt(t,a),i):new at(null)}}foreach(e){this.foreach_(nt(),e)}foreach_(e,t){this.children.inorderTraversal((i,a)=>{a.foreach_(Qt(e,i),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,i)=>{i.value&&e(t,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(e){this.writeTree_=e}static empty(){return new vi(new at(null))}}function nc(n,e,t){if(Le(e))return new vi(new at(t));{const i=n.writeTree_.findRootMostValueAndPath(e);if(i!=null){const a=i.path;let l=i.value;const c=ri(a,e);return l=l.updateChild(c,t),new vi(n.writeTree_.set(a,l))}else{const a=new at(t),l=n.writeTree_.setTree(e,a);return new vi(l)}}}function kw(n,e,t){let i=n;return ai(t,(a,l)=>{i=nc(i,Qt(e,a),l)}),i}function Pw(n,e){if(Le(e))return vi.empty();{const t=n.writeTree_.setTree(e,new at(null));return new vi(t)}}function r_(n,e){return qa(n,e)!=null}function qa(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(ri(t.path,e)):null}function Mw(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(mn,(i,a)=>{e.push(new He(i,a))}):n.writeTree_.children.inorderTraversal((i,a)=>{a.value!=null&&e.push(new He(i,a.value))}),e}function Ns(n,e){if(Le(e))return n;{const t=qa(n,e);return t!=null?new vi(new at(t)):new vi(n.writeTree_.subtree(e))}}function s_(n){return n.writeTree_.isEmpty()}function cl(n,e){return fI(nt(),n.writeTree_,e)}function fI(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let i=null;return e.children.inorderTraversal((a,l)=>{a===".priority"?(le(l.value!==null,"Priority writes must always be leaf nodes"),i=l.value):t=fI(Qt(n,a),l,t)}),!t.getChild(n).isEmpty()&&i!==null&&(t=t.updateChild(Qt(n,".priority"),i)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dI(n,e){return yI(e,n)}function w3(n,e,t,i,a){le(i>n.lastWriteId,"Stacking an older write on top of newer ones"),a===void 0&&(a=!0),n.allWrites.push({path:e,snap:t,writeId:i,visible:a}),a&&(n.visibleWrites=nc(n.visibleWrites,e,t)),n.lastWriteId=i}function b3(n,e){for(let t=0;t<n.allWrites.length;t++){const i=n.allWrites[t];if(i.writeId===e)return i}return null}function A3(n,e){const t=n.allWrites.findIndex(d=>d.writeId===e);le(t>=0,"removeWrite called with nonexistent writeId.");const i=n.allWrites[t];n.allWrites.splice(t,1);let a=i.visible,l=!1,c=n.allWrites.length-1;for(;a&&c>=0;){const d=n.allWrites[c];d.visible&&(c>=t&&R3(d,i.path)?a=!1:_i(i.path,d.path)&&(l=!0)),c--}if(a){if(l)return C3(n),!0;if(i.snap)n.visibleWrites=Pw(n.visibleWrites,i.path);else{const d=i.children;ai(d,p=>{n.visibleWrites=Pw(n.visibleWrites,Qt(i.path,p))})}return!0}else return!1}function R3(n,e){if(n.snap)return _i(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&_i(Qt(n.path,t),e))return!0;return!1}function C3(n){n.visibleWrites=pI(n.allWrites,I3,nt()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function I3(n){return n.visible}function pI(n,e,t){let i=vi.empty();for(let a=0;a<n.length;++a){const l=n[a];if(e(l)){const c=l.path;let d;if(l.snap)_i(t,c)?(d=ri(t,c),i=nc(i,d,l.snap)):_i(c,t)&&(d=ri(c,t),i=nc(i,nt(),l.snap.getChild(d)));else if(l.children){if(_i(t,c))d=ri(t,c),i=kw(i,d,l.children);else if(_i(c,t))if(d=ri(c,t),Le(d))i=kw(i,nt(),l.children);else{const p=el(l.children,Fe(d));if(p){const m=p.getChild(ot(d));i=nc(i,nt(),m)}}}else throw dl("WriteRecord should have .snap or .children")}}return i}function mI(n,e,t,i,a){if(!i&&!a){const l=qa(n.visibleWrites,e);if(l!=null)return l;{const c=Ns(n.visibleWrites,e);if(s_(c))return t;if(t==null&&!r_(c,nt()))return null;{const d=t||$e.EMPTY_NODE;return cl(c,d)}}}else{const l=Ns(n.visibleWrites,e);if(!a&&s_(l))return t;if(!a&&t==null&&!r_(l,nt()))return null;{const c=function(m){return(m.visible||a)&&(!i||!~i.indexOf(m.writeId))&&(_i(m.path,e)||_i(e,m.path))},d=pI(n.allWrites,c,e),p=t||$e.EMPTY_NODE;return cl(d,p)}}}function N3(n,e,t){let i=$e.EMPTY_NODE;const a=qa(n.visibleWrites,e);if(a)return a.isLeafNode()||a.forEachChild(mn,(l,c)=>{i=i.updateImmediateChild(l,c)}),i;if(t){const l=Ns(n.visibleWrites,e);return t.forEachChild(mn,(c,d)=>{const p=cl(Ns(l,new lt(c)),d);i=i.updateImmediateChild(c,p)}),Mw(l).forEach(c=>{i=i.updateImmediateChild(c.name,c.node)}),i}else{const l=Ns(n.visibleWrites,e);return Mw(l).forEach(c=>{i=i.updateImmediateChild(c.name,c.node)}),i}}function O3(n,e,t,i,a){le(i||a,"Either existingEventSnap or existingServerSnap must exist");const l=Qt(e,t);if(r_(n.visibleWrites,l))return null;{const c=Ns(n.visibleWrites,l);return s_(c)?a.getChild(t):cl(c,a.getChild(t))}}function D3(n,e,t,i){const a=Qt(e,t),l=qa(n.visibleWrites,a);if(l!=null)return l;if(i.isCompleteForChild(t)){const c=Ns(n.visibleWrites,a);return cl(c,i.getNode().getImmediateChild(t))}else return null}function k3(n,e){return qa(n.visibleWrites,e)}function P3(n,e,t,i,a,l,c){let d;const p=Ns(n.visibleWrites,e),m=qa(p,nt());if(m!=null)d=m;else if(t!=null)d=cl(p,t);else return[];if(d=d.withIndex(c),!d.isEmpty()&&!d.isLeafNode()){const y=[],T=c.getCompare(),S=l?d.getReverseIteratorFrom(i,c):d.getIteratorFrom(i,c);let I=S.getNext();for(;I&&y.length<a;)T(I,i)!==0&&y.push(I),I=S.getNext();return y}else return[]}function M3(){return{visibleWrites:vi.empty(),allWrites:[],lastWriteId:-1}}function a_(n,e,t,i){return mI(n.writeTree,n.treePath,e,t,i)}function gI(n,e){return N3(n.writeTree,n.treePath,e)}function xw(n,e,t,i){return O3(n.writeTree,n.treePath,e,t,i)}function ud(n,e){return k3(n.writeTree,Qt(n.treePath,e))}function x3(n,e,t,i,a,l){return P3(n.writeTree,n.treePath,e,t,i,a,l)}function xy(n,e,t){return D3(n.writeTree,n.treePath,e,t)}function _I(n,e){return yI(Qt(n.treePath,e),n.writeTree)}function yI(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L3{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,i=e.childName;le(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),le(i!==".priority","Only non-priority child changes can be tracked.");const a=this.changeMap.get(i);if(a){const l=a.type;if(t==="child_added"&&l==="child_removed")this.changeMap.set(i,Iw(i,e.snapshotNode,a.snapshotNode));else if(t==="child_removed"&&l==="child_added")this.changeMap.delete(i);else if(t==="child_removed"&&l==="child_changed")this.changeMap.set(i,h3(i,a.oldSnap));else if(t==="child_changed"&&l==="child_added")this.changeMap.set(i,c3(i,e.snapshotNode));else if(t==="child_changed"&&l==="child_changed")this.changeMap.set(i,Iw(i,e.snapshotNode,a.oldSnap));else throw dl("Illegal combination of changes: "+e+" occurred after "+a)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V3{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}}const vI=new V3;class Ly{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new My(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return xy(this.writes_,e,i)}}getChildAfterChild(e,t,i){const a=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:La(this.viewCache_),l=x3(this.writes_,a,t,1,i,e);return l.length===0?null:l[0]}}function U3(n,e){le(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),le(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function B3(n,e,t,i,a){const l=new L3;let c,d;if(t.type===zi.OVERWRITE){const m=t;m.source.fromUser?c=o_(n,e,m.path,m.snap,i,a,l):(le(m.source.fromServer,"Unknown source."),d=m.source.tagged||e.serverCache.isFiltered()&&!Le(m.path),c=cd(n,e,m.path,m.snap,i,a,d,l))}else if(t.type===zi.MERGE){const m=t;m.source.fromUser?c=F3(n,e,m.path,m.children,i,a,l):(le(m.source.fromServer,"Unknown source."),d=m.source.tagged||e.serverCache.isFiltered(),c=l_(n,e,m.path,m.children,i,a,d,l))}else if(t.type===zi.ACK_USER_WRITE){const m=t;m.revert?c=q3(n,e,m.path,i,a,l):c=H3(n,e,m.path,m.affectedTree,i,a,l)}else if(t.type===zi.LISTEN_COMPLETE)c=j3(n,e,t.path,i,l);else throw dl("Unknown operation type: "+t.type);const p=l.getChanges();return z3(e,c,p),{viewCache:c,changes:p}}function z3(n,e,t){const i=e.eventCache;if(i.isFullyInitialized()){const a=i.getNode().isLeafNode()||i.getNode().isEmpty(),l=i_(n);(t.length>0||!n.eventCache.isFullyInitialized()||a&&!i.getNode().equals(l)||!i.getNode().getPriority().equals(l.getPriority()))&&t.push(u3(i_(e)))}}function EI(n,e,t,i,a,l){const c=e.eventCache;if(ud(i,t)!=null)return e;{let d,p;if(Le(t))if(le(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const m=La(e),y=m instanceof $e?m:$e.EMPTY_NODE,T=gI(i,y);d=n.filter.updateFullNode(e.eventCache.getNode(),T,l)}else{const m=a_(i,La(e));d=n.filter.updateFullNode(e.eventCache.getNode(),m,l)}else{const m=Fe(t);if(m===".priority"){le(Ls(t)===1,"Can't have a priority with additional path components");const y=c.getNode();p=e.serverCache.getNode();const T=xw(i,t,y,p);T!=null?d=n.filter.updatePriority(y,T):d=c.getNode()}else{const y=ot(t);let T;if(c.isCompleteForChild(m)){p=e.serverCache.getNode();const S=xw(i,t,c.getNode(),p);S!=null?T=c.getNode().getImmediateChild(m).updateChild(y,S):T=c.getNode().getImmediateChild(m)}else T=xy(i,m,e.serverCache);T!=null?d=n.filter.updateChild(c.getNode(),m,T,y,a,l):d=c.getNode()}}return tc(e,d,c.isFullyInitialized()||Le(t),n.filter.filtersNodes())}}function cd(n,e,t,i,a,l,c,d){const p=e.serverCache;let m;const y=c?n.filter:n.filter.getIndexedFilter();if(Le(t))m=y.updateFullNode(p.getNode(),i,null);else if(y.filtersNodes()&&!p.isFiltered()){const I=p.getNode().updateChild(t,i);m=y.updateFullNode(p.getNode(),I,null)}else{const I=Fe(t);if(!p.isCompleteForPath(t)&&Ls(t)>1)return e;const N=ot(t),B=p.getNode().getImmediateChild(I).updateChild(N,i);I===".priority"?m=y.updatePriority(p.getNode(),B):m=y.updateChild(p.getNode(),I,B,N,vI,null)}const T=hI(e,m,p.isFullyInitialized()||Le(t),y.filtersNodes()),S=new Ly(a,T,l);return EI(n,T,t,a,S,d)}function o_(n,e,t,i,a,l,c){const d=e.eventCache;let p,m;const y=new Ly(a,e,l);if(Le(t))m=n.filter.updateFullNode(e.eventCache.getNode(),i,c),p=tc(e,m,!0,n.filter.filtersNodes());else{const T=Fe(t);if(T===".priority")m=n.filter.updatePriority(e.eventCache.getNode(),i),p=tc(e,m,d.isFullyInitialized(),d.isFiltered());else{const S=ot(t),I=d.getNode().getImmediateChild(T);let N;if(Le(S))N=i;else{const H=y.getCompleteChild(T);H!=null?WC(S)===".priority"&&H.getChild(ZC(S)).isEmpty()?N=H:N=H.updateChild(S,i):N=$e.EMPTY_NODE}if(I.equals(N))p=e;else{const H=n.filter.updateChild(d.getNode(),T,N,S,y,c);p=tc(e,H,d.isFullyInitialized(),n.filter.filtersNodes())}}}return p}function Lw(n,e){return n.eventCache.isCompleteForChild(e)}function F3(n,e,t,i,a,l,c){let d=e;return i.foreach((p,m)=>{const y=Qt(t,p);Lw(e,Fe(y))&&(d=o_(n,d,y,m,a,l,c))}),i.foreach((p,m)=>{const y=Qt(t,p);Lw(e,Fe(y))||(d=o_(n,d,y,m,a,l,c))}),d}function Vw(n,e,t){return t.foreach((i,a)=>{e=e.updateChild(i,a)}),e}function l_(n,e,t,i,a,l,c,d){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let p=e,m;Le(t)?m=i:m=new at(null).setTree(t,i);const y=e.serverCache.getNode();return m.children.inorderTraversal((T,S)=>{if(y.hasChild(T)){const I=e.serverCache.getNode().getImmediateChild(T),N=Vw(n,I,S);p=cd(n,p,new lt(T),N,a,l,c,d)}}),m.children.inorderTraversal((T,S)=>{const I=!e.serverCache.isCompleteForChild(T)&&S.value===null;if(!y.hasChild(T)&&!I){const N=e.serverCache.getNode().getImmediateChild(T),H=Vw(n,N,S);p=cd(n,p,new lt(T),H,a,l,c,d)}}),p}function H3(n,e,t,i,a,l,c){if(ud(a,t)!=null)return e;const d=e.serverCache.isFiltered(),p=e.serverCache;if(i.value!=null){if(Le(t)&&p.isFullyInitialized()||p.isCompleteForPath(t))return cd(n,e,t,p.getNode().getChild(t),a,l,d,c);if(Le(t)){let m=new at(null);return p.getNode().forEachChild(Jo,(y,T)=>{m=m.set(new lt(y),T)}),l_(n,e,t,m,a,l,d,c)}else return e}else{let m=new at(null);return i.foreach((y,T)=>{const S=Qt(t,y);p.isCompleteForPath(S)&&(m=m.set(y,p.getNode().getChild(S)))}),l_(n,e,t,m,a,l,d,c)}}function j3(n,e,t,i,a){const l=e.serverCache,c=hI(e,l.getNode(),l.isFullyInitialized()||Le(t),l.isFiltered());return EI(n,c,t,i,vI,a)}function q3(n,e,t,i,a,l){let c;if(ud(i,t)!=null)return e;{const d=new Ly(i,e,a),p=e.eventCache.getNode();let m;if(Le(t)||Fe(t)===".priority"){let y;if(e.serverCache.isFullyInitialized())y=a_(i,La(e));else{const T=e.serverCache.getNode();le(T instanceof $e,"serverChildren would be complete if leaf node"),y=gI(i,T)}y=y,m=n.filter.updateFullNode(p,y,l)}else{const y=Fe(t);let T=xy(i,y,e.serverCache);T==null&&e.serverCache.isCompleteForChild(y)&&(T=p.getImmediateChild(y)),T!=null?m=n.filter.updateChild(p,y,T,ot(t),d,l):e.eventCache.getNode().hasChild(y)?m=n.filter.updateChild(p,y,$e.EMPTY_NODE,ot(t),d,l):m=p,m.isEmpty()&&e.serverCache.isFullyInitialized()&&(c=a_(i,La(e)),c.isLeafNode()&&(m=n.filter.updateFullNode(m,c,l)))}return c=e.serverCache.isFullyInitialized()||ud(i,nt())!=null,tc(e,m,c,n.filter.filtersNodes())}}function G3(n,e){const t=La(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!Le(e)&&!t.getImmediateChild(Fe(e)).isEmpty())?t.getChild(e):null}function Uw(n,e,t,i){e.type===zi.MERGE&&e.source.queryId!==null&&(le(La(n.viewCache_),"We should always have a full cache before handling merges"),le(i_(n.viewCache_),"Missing event cache, even though we have a server cache"));const a=n.viewCache_,l=B3(n.processor_,a,e,t,i);return U3(n.processor_,l.viewCache),le(l.viewCache.serverCache.isFullyInitialized()||!a.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=l.viewCache,K3(n,l.changes,l.viewCache.eventCache.getNode())}function K3(n,e,t,i){const a=n.eventRegistrations_;return v3(n.eventGenerator_,e,t,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bw;function $3(n){le(!Bw,"__referenceConstructor has already been defined"),Bw=n}function Vy(n,e,t,i){const a=e.source.queryId;if(a!==null){const l=n.views.get(a);return le(l!=null,"SyncTree gave us an op for an invalid query."),Uw(l,e,t,i)}else{let l=[];for(const c of n.views.values())l=l.concat(Uw(c,e,t,i));return l}}function Uy(n,e){let t=null;for(const i of n.views.values())t=t||G3(i,e);return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zw;function Y3(n){le(!zw,"__referenceConstructor has already been defined"),zw=n}class Fw{constructor(e){this.listenProvider_=e,this.syncPointTree_=new at(null),this.pendingWriteTree_=M3(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Q3(n,e,t,i,a){return w3(n.pendingWriteTree_,e,t,i,a),a?Ud(n,new xa(oI(),e,t)):[]}function Ko(n,e,t=!1){const i=b3(n.pendingWriteTree_,e);if(A3(n.pendingWriteTree_,e)){let l=new at(null);return i.snap!=null?l=l.set(nt(),!0):ai(i.children,c=>{l=l.set(new lt(c),!0)}),Ud(n,new ld(i.path,l,t))}else return[]}function Vd(n,e,t){return Ud(n,new xa(lI(),e,t))}function W3(n,e,t){const i=at.fromObject(t);return Ud(n,new mc(lI(),e,i))}function X3(n,e,t,i){const a=bI(n,i);if(a!=null){const l=AI(a),c=l.path,d=l.queryId,p=ri(c,e),m=new xa(uI(d),p,t);return RI(n,c,m)}else return[]}function Z3(n,e,t,i){const a=bI(n,i);if(a){const l=AI(a),c=l.path,d=l.queryId,p=ri(c,e),m=at.fromObject(t),y=new mc(uI(d),p,m);return RI(n,c,y)}else return[]}function TI(n,e,t){const a=n.pendingWriteTree_,l=n.syncPointTree_.findOnPath(e,(c,d)=>{const p=ri(c,e),m=Uy(d,p);if(m)return m});return mI(a,e,l,t,!0)}function Ud(n,e){return SI(e,n.syncPointTree_,null,dI(n.pendingWriteTree_,nt()))}function SI(n,e,t,i){if(Le(n.path))return wI(n,e,t,i);{const a=e.get(nt());t==null&&a!=null&&(t=Uy(a,nt()));let l=[];const c=Fe(n.path),d=n.operationForChild(c),p=e.children.get(c);if(p&&d){const m=t?t.getImmediateChild(c):null,y=_I(i,c);l=l.concat(SI(d,p,m,y))}return a&&(l=l.concat(Vy(a,n,i,t))),l}}function wI(n,e,t,i){const a=e.get(nt());t==null&&a!=null&&(t=Uy(a,nt()));let l=[];return e.children.inorderTraversal((c,d)=>{const p=t?t.getImmediateChild(c):null,m=_I(i,c),y=n.operationForChild(c);y&&(l=l.concat(wI(y,d,p,m)))}),a&&(l=l.concat(Vy(a,n,i,t))),l}function bI(n,e){return n.tagToQueryMap.get(e)}function AI(n){const e=n.indexOf("$");return le(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new lt(n.substr(0,e))}}function RI(n,e,t){const i=n.syncPointTree_.get(e);le(i,"Missing sync point for query tag that we're tracking");const a=dI(n.pendingWriteTree_,e);return Vy(i,t,a,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class By{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new By(t)}node(){return this.node_}}class zy{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Qt(this.path_,e);return new zy(this.syncTree_,t)}node(){return TI(this.syncTree_,this.path_)}}const J3=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Hw=function(n,e,t){if(!n||typeof n!="object")return n;if(le(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return e9(n[".sv"],e,t);if(typeof n[".sv"]=="object")return t9(n[".sv"],e);le(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},e9=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:le(!1,"Unexpected server value: "+n)}},t9=function(n,e,t){n.hasOwnProperty("increment")||le(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const i=n.increment;typeof i!="number"&&le(!1,"Unexpected increment value: "+i);const a=e.node();if(le(a!==null&&typeof a<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!a.isLeafNode())return i;const c=a.getValue();return typeof c!="number"?i:c+i},n9=function(n,e,t,i){return Fy(e,new zy(t,n),i)},i9=function(n,e,t){return Fy(n,new By(e),t)};function Fy(n,e,t){const i=n.getPriority().val(),a=Hw(i,e.getImmediateChild(".priority"),t);let l;if(n.isLeafNode()){const c=n,d=Hw(c.getValue(),e,t);return d!==c.getValue()||a!==c.getPriority().val()?new Kt(d,pn(a)):n}else{const c=n;return l=c,a!==c.getPriority().val()&&(l=l.updatePriority(new Kt(a))),c.forEachChild(mn,(d,p)=>{const m=Fy(p,e.getImmediateChild(d),t);m!==p&&(l=l.updateImmediateChild(d,m))}),l}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hy{constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}}function jy(n,e){let t=e instanceof lt?e:new lt(e),i=n,a=Fe(t);for(;a!==null;){const l=el(i.node.children,a)||{children:{},childCount:0};i=new Hy(a,i,l),t=ot(t),a=Fe(t)}return i}function vl(n){return n.node.value}function CI(n,e){n.node.value=e,u_(n)}function II(n){return n.node.childCount>0}function r9(n){return vl(n)===void 0&&!II(n)}function Bd(n,e){ai(n.node.children,(t,i)=>{e(new Hy(t,n,i))})}function NI(n,e,t,i){t&&e(n),Bd(n,a=>{NI(a,e,!0)})}function s9(n,e,t){let i=n.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function Pc(n){return new lt(n.parent===null?n.name:Pc(n.parent)+"/"+n.name)}function u_(n){n.parent!==null&&a9(n.parent,n.name,n)}function a9(n,e,t){const i=r9(t),a=Ur(n.node.children,e);i&&a?(delete n.node.children[e],n.node.childCount--,u_(n)):!i&&!a&&(n.node.children[e]=t.node,n.node.childCount++,u_(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o9=/[\[\].#$\/\u0000-\u001F\u007F]/,l9=/[\[\].#$\u0000-\u001F\u007F]/,Eg=10*1024*1024,OI=function(n){return typeof n=="string"&&n.length!==0&&!o9.test(n)},u9=function(n){return typeof n=="string"&&n.length!==0&&!l9.test(n)},c9=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),u9(n)},DI=function(n,e,t){const i=t instanceof lt?new j6(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Sa(i));if(typeof e=="function")throw new Error(n+"contains a function "+Sa(i)+" with contents = "+e.toString());if(NC(e))throw new Error(n+"contains "+e.toString()+" "+Sa(i));if(typeof e=="string"&&e.length>Eg/3&&gd(e)>Eg)throw new Error(n+"contains a string greater than "+Eg+" utf8 bytes "+Sa(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let a=!1,l=!1;if(ai(e,(c,d)=>{if(c===".value")a=!0;else if(c!==".priority"&&c!==".sv"&&(l=!0,!OI(c)))throw new Error(n+" contains an invalid key ("+c+") "+Sa(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);q6(i,c),DI(n,d,i),G6(i)}),a&&l)throw new Error(n+' contains ".value" child '+Sa(i)+" in addition to actual children.")}},h9=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!OI(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!c9(t))throw new Error(yD(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f9{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function d9(n,e){let t=null;for(let i=0;i<e.length;i++){const a=e[i],l=a.getPath();t!==null&&!JC(l,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:l}),t.events.push(a)}t&&n.eventLists_.push(t)}function Ga(n,e,t){d9(n,t),p9(n,i=>_i(i,e)||_i(e,i))}function p9(n,e){n.recursionDepth_++;let t=!0;for(let i=0;i<n.eventLists_.length;i++){const a=n.eventLists_[i];if(a){const l=a.path;e(l)?(m9(n.eventLists_[i]),n.eventLists_[i]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function m9(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const i=t.getEventRunner();Ju&&dn("event: "+t.toString()),Dc(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g9="repo_interrupt",_9=25;class y9{constructor(e,t,i,a){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=a,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new f9,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=od(),this.transactionQueueTree_=new Hy,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function v9(n,e,t){if(n.stats_=Ny(n.repoInfo_),n.forceRestClient_||p6())n.server_=new ad(n.repoInfo_,(i,a,l,c)=>{jw(n,i,a,l,c)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>qw(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{rn(t)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}n.persistentConnection_=new Ir(n.repoInfo_,e,(i,a,l,c)=>{jw(n,i,a,l,c)},i=>{qw(n,i)},i=>{T9(n,i)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(i=>{n.server_.refreshAuthToken(i)}),n.appCheckProvider_.addTokenChangeListener(i=>{n.server_.refreshAppCheckToken(i.token)}),n.statsReporter_=v6(n.repoInfo_,()=>new y3(n.stats_,n.server_)),n.infoData_=new d3,n.infoSyncTree_=new Fw({startListening:(i,a,l,c)=>{let d=[];const p=n.infoData_.getNode(i._path);return p.isEmpty()||(d=Vd(n.infoSyncTree_,i._path,p),setTimeout(()=>{c("ok")},0)),d},stopListening:()=>{}}),qy(n,"connected",!1),n.serverSyncTree_=new Fw({startListening:(i,a,l,c)=>(n.server_.listen(i,l,a,(d,p)=>{const m=c(d,p);Ga(n.eventQueue_,i._path,m)}),[]),stopListening:(i,a)=>{n.server_.unlisten(i,a)}})}function E9(n){const t=n.infoData_.getNode(new lt(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function kI(n){return J3({timestamp:E9(n)})}function jw(n,e,t,i,a){n.dataUpdateCount++;const l=new lt(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let c=[];if(a)if(i){const p=xf(t,m=>pn(m));c=Z3(n.serverSyncTree_,l,p,a)}else{const p=pn(t);c=X3(n.serverSyncTree_,l,p,a)}else if(i){const p=xf(t,m=>pn(m));c=W3(n.serverSyncTree_,l,p)}else{const p=pn(t);c=Vd(n.serverSyncTree_,l,p)}let d=l;c.length>0&&(d=Ky(n,l)),Ga(n.eventQueue_,d,c)}function qw(n,e){qy(n,"connected",e),e===!1&&w9(n)}function T9(n,e){ai(e,(t,i)=>{qy(n,t,i)})}function qy(n,e,t){const i=new lt("/.info/"+e),a=pn(t);n.infoData_.updateSnapshot(i,a);const l=Vd(n.infoSyncTree_,i,a);Ga(n.eventQueue_,i,l)}function S9(n){return n.nextWriteId_++}function w9(n){PI(n,"onDisconnectEvents");const e=kI(n),t=od();n_(n.onDisconnect_,nt(),(a,l)=>{const c=n9(a,l,n.serverSyncTree_,e);aI(t,a,c)});let i=[];n_(t,nt(),(a,l)=>{i=i.concat(Vd(n.serverSyncTree_,a,l));const c=C9(n,a);Ky(n,c)}),n.onDisconnect_=od(),Ga(n.eventQueue_,nt(),i)}function b9(n){n.persistentConnection_&&n.persistentConnection_.interrupt(g9)}function PI(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),dn(t,...e)}function MI(n,e,t){return TI(n.serverSyncTree_,e,t)||$e.EMPTY_NODE}function Gy(n,e=n.transactionQueueTree_){if(e||zd(n,e),vl(e)){const t=LI(n,e);le(t.length>0,"Sending zero length transaction queue"),t.every(a=>a.status===0)&&A9(n,Pc(e),t)}else II(e)&&Bd(e,t=>{Gy(n,t)})}function A9(n,e,t){const i=t.map(m=>m.currentWriteId),a=MI(n,e,i);let l=a;const c=a.hash();for(let m=0;m<t.length;m++){const y=t[m];le(y.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),y.status=1,y.retryCount++;const T=ri(e,y.path);l=l.updateChild(T,y.currentOutputSnapshotRaw)}const d=l.val(!0),p=e;n.server_.put(p.toString(),d,m=>{PI(n,"transaction put response",{path:p.toString(),status:m});let y=[];if(m==="ok"){const T=[];for(let S=0;S<t.length;S++)t[S].status=2,y=y.concat(Ko(n.serverSyncTree_,t[S].currentWriteId)),t[S].onComplete&&T.push(()=>t[S].onComplete(null,!0,t[S].currentOutputSnapshotResolved)),t[S].unwatcher();zd(n,jy(n.transactionQueueTree_,e)),Gy(n,n.transactionQueueTree_),Ga(n.eventQueue_,e,y);for(let S=0;S<T.length;S++)Dc(T[S])}else{if(m==="datastale")for(let T=0;T<t.length;T++)t[T].status===3?t[T].status=4:t[T].status=0;else{Hn("transaction at "+p.toString()+" failed: "+m);for(let T=0;T<t.length;T++)t[T].status=4,t[T].abortReason=m}Ky(n,e)}},c)}function Ky(n,e){const t=xI(n,e),i=Pc(t),a=LI(n,t);return R9(n,a,i),i}function R9(n,e,t){if(e.length===0)return;const i=[];let a=[];const c=e.filter(d=>d.status===0).map(d=>d.currentWriteId);for(let d=0;d<e.length;d++){const p=e[d],m=ri(t,p.path);let y=!1,T;if(le(m!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),p.status===4)y=!0,T=p.abortReason,a=a.concat(Ko(n.serverSyncTree_,p.currentWriteId,!0));else if(p.status===0)if(p.retryCount>=_9)y=!0,T="maxretry",a=a.concat(Ko(n.serverSyncTree_,p.currentWriteId,!0));else{const S=MI(n,p.path,c);p.currentInputSnapshot=S;const I=e[d].update(S.val());if(I!==void 0){DI("transaction failed: Data returned ",I,p.path);let N=pn(I);typeof I=="object"&&I!=null&&Ur(I,".priority")||(N=N.updatePriority(S.getPriority()));const B=p.currentWriteId,$=kI(n),W=i9(N,S,$);p.currentOutputSnapshotRaw=N,p.currentOutputSnapshotResolved=W,p.currentWriteId=S9(n),c.splice(c.indexOf(B),1),a=a.concat(Q3(n.serverSyncTree_,p.path,W,p.currentWriteId,p.applyLocally)),a=a.concat(Ko(n.serverSyncTree_,B,!0))}else y=!0,T="nodata",a=a.concat(Ko(n.serverSyncTree_,p.currentWriteId,!0))}Ga(n.eventQueue_,t,a),a=[],y&&(e[d].status=2,function(S){setTimeout(S,Math.floor(0))}(e[d].unwatcher),e[d].onComplete&&(T==="nodata"?i.push(()=>e[d].onComplete(null,!1,e[d].currentInputSnapshot)):i.push(()=>e[d].onComplete(new Error(T),!1,null))))}zd(n,n.transactionQueueTree_);for(let d=0;d<i.length;d++)Dc(i[d]);Gy(n,n.transactionQueueTree_)}function xI(n,e){let t,i=n.transactionQueueTree_;for(t=Fe(e);t!==null&&vl(i)===void 0;)i=jy(i,t),e=ot(e),t=Fe(e);return i}function LI(n,e){const t=[];return VI(n,e,t),t.sort((i,a)=>i.order-a.order),t}function VI(n,e,t){const i=vl(e);if(i)for(let a=0;a<i.length;a++)t.push(i[a]);Bd(e,a=>{VI(n,a,t)})}function zd(n,e){const t=vl(e);if(t){let i=0;for(let a=0;a<t.length;a++)t[a].status!==2&&(t[i]=t[a],i++);t.length=i,CI(e,t.length>0?t:void 0)}Bd(e,i=>{zd(n,i)})}function C9(n,e){const t=Pc(xI(n,e)),i=jy(n.transactionQueueTree_,e);return s9(i,a=>{Tg(n,a)}),Tg(n,i),NI(i,a=>{Tg(n,a)}),t}function Tg(n,e){const t=vl(e);if(t){const i=[];let a=[],l=-1;for(let c=0;c<t.length;c++)t[c].status===3||(t[c].status===1?(le(l===c-1,"All SENT items should be at beginning of queue."),l=c,t[c].status=3,t[c].abortReason="set"):(le(t[c].status===0,"Unexpected transaction status in abort"),t[c].unwatcher(),a=a.concat(Ko(n.serverSyncTree_,t[c].currentWriteId,!0)),t[c].onComplete&&i.push(t[c].onComplete.bind(null,new Error("set"),!1,null))));l===-1?CI(e,void 0):t.length=l+1,Ga(n.eventQueue_,Pc(e),a);for(let c=0;c<i.length;c++)Dc(i[c])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I9(n){let e="";const t=n.split("/");for(let i=0;i<t.length;i++)if(t[i].length>0){let a=t[i];try{a=decodeURIComponent(a.replace(/\+/g," "))}catch{}e+="/"+a}return e}function N9(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const i=t.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):Hn(`Invalid query segment '${t}' in query '${n}'`)}return e}const Gw=function(n,e){const t=O9(n),i=t.namespace;t.domain==="firebase.com"&&xr(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&t.domain!=="localhost"&&xr("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||a6();const a=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new FC(t.host,t.secure,i,a,e,"",i!==t.subdomain),path:new lt(t.pathString)}},O9=function(n){let e="",t="",i="",a="",l="",c=!0,d="https",p=443;if(typeof n=="string"){let m=n.indexOf("//");m>=0&&(d=n.substring(0,m-1),n=n.substring(m+2));let y=n.indexOf("/");y===-1&&(y=n.length);let T=n.indexOf("?");T===-1&&(T=n.length),e=n.substring(0,Math.min(y,T)),y<T&&(a=I9(n.substring(y,T)));const S=N9(n.substring(Math.min(n.length,T)));m=e.indexOf(":"),m>=0?(c=d==="https"||d==="wss",p=parseInt(e.substring(m+1),10)):m=e.length;const I=e.slice(0,m);if(I.toLowerCase()==="localhost")t="localhost";else if(I.split(".").length<=2)t=I;else{const N=e.indexOf(".");i=e.substring(0,N).toLowerCase(),t=e.substring(N+1),l=i}"ns"in S&&(l=S.ns)}return{host:e,port:p,domain:t,subdomain:i,secure:c,scheme:d,pathString:a,namespace:l}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $y{constructor(e,t,i,a){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=a}get key(){return Le(this._path)?null:WC(this._path)}get ref(){return new El(this._repo,this._path)}get _queryIdentifier(){const e=Ow(this._queryParams),t=Cy(e);return t==="{}"?"default":t}get _queryObject(){return Ow(this._queryParams)}isEqual(e){if(e=bt(e),!(e instanceof $y))return!1;const t=this._repo===e._repo,i=JC(this._path,e._path),a=this._queryIdentifier===e._queryIdentifier;return t&&i&&a}toJSON(){return this.toString()}toString(){return this._repo.toString()+H6(this._path)}}class El extends $y{constructor(e,t){super(e,t,new Py,!1)}get parent(){const e=ZC(this._path);return e===null?null:new El(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}$3(El);Y3(El);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D9="FIREBASE_DATABASE_EMULATOR_HOST",c_={};let k9=!1;function P9(n,e,t,i){const a=e.lastIndexOf(":"),l=e.substring(0,a),c=Vr(l);n.repoInfo_=new FC(e,c,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),i&&(n.authTokenProvider_=i)}function M9(n,e,t,i,a){let l=i||n.options.databaseURL;l===void 0&&(n.options.projectId||xr("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),dn("Using default host for project ",n.options.projectId),l=`${n.options.projectId}-default-rtdb.firebaseio.com`);let c=Gw(l,a),d=c.repoInfo,p;typeof process<"u"&&hw&&(p=hw[D9]),p?(l=`http://${p}?ns=${d.namespace}`,c=Gw(l,a),d=c.repoInfo):c.repoInfo.secure;const m=new g6(n.name,n.options,e);h9("Invalid Firebase Database URL",c),Le(c.path)||xr("Database URL must point to the root of a Firebase Database (not including a child path).");const y=L9(d,n,m,new m6(n,t));return new V9(y,n)}function x9(n,e){const t=c_[e];(!t||t[n.key]!==n)&&xr(`Database ${e}(${n.repoInfo_}) has already been deleted.`),b9(n),delete t[n.key]}function L9(n,e,t,i){let a=c_[e.name];a||(a={},c_[e.name]=a);let l=a[n.toURLString()];return l&&xr("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),l=new y9(n,k9,t,i),a[n.toURLString()]=l,l}class V9{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(v9(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new El(this._repo,nt())),this._rootInternal}_delete(){return this._rootInternal!==null&&(x9(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&xr("Cannot call "+e+" on a deleted database.")}}function U9(n=Ec(),e){const t=Br(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const i=v_("database");i&&B9(t,...i)}return t}function B9(n,e,t,i={}){n=bt(n),n._checkNotDeleted("useEmulator");const a=`${e}:${t}`,l=n._repoInternal;if(n._instanceStarted){if(a===n._repoInternal.repoInfo_.host&&Or(i,l.repoInfo_.emulatorOptions))return;xr("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let c;if(l.repoInfo_.nodeAdmin)i.mockUserToken&&xr('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),c=new Of(Of.OWNER);else if(i.mockUserToken){const d=typeof i.mockUserToken=="string"?i.mockUserToken:T_(i.mockUserToken,n.app.options.projectId);c=new Of(d)}Vr(e)&&(pd(e),md("Database",!0)),P9(l,a,i,c)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z9(n){e6(Vs),si(new jn("database",(e,{instanceIdentifier:t})=>{const i=e.getProvider("app").getImmediate(),a=e.getProvider("auth-internal"),l=e.getProvider("app-check-internal");return M9(i,a,l,t)},"PUBLIC").setMultipleInstances(!0)),gn(fw,dw,n),gn(fw,dw,"esm2017")}Ir.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Ir.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};z9();const F9={apiKey:"AIzaSyDkWJeGT5CipiFigswxYl6-NRXM5yD-R6E",authDomain:"biine-4b5a9.firebaseapp.com",databaseURL:"https://biine-4b5a9-default-rtdb.firebaseio.com",projectId:"biine-4b5a9",storageBucket:"biine-4b5a9.appspot.com",messagingSenderId:"703004024125",appId:"1:703004024125:web:0a0df8313547c17bdf3954",measurementId:"G-1Q74DS50K7"},Mc=bb(F9),Yy=kM(Mc),UI=O4(Mc),Df=vV(Mc);U9(Mc);XU().then(n=>{n&&QU(Mc)});function H9(){const[n,e]=K.useState([]);return K.useEffect(()=>{(async()=>{try{const a=(await WM(X_(Yy,"ads"))).docs.map(l=>({id:l.id,...l.data()}));e(a)}catch(i){console.error("Error fetching ads:",i)}})()},[]),ue.jsxs("div",{className:"p-4",children:[ue.jsxs("nav",{className:"flex justify-between items-center mb-6 p-4 bg-gray-100 rounded shadow",children:[ue.jsx("h2",{className:"text-lg font-semibold",children:"Biine Classifieds"}),ue.jsx(__,{to:"/post-ad",className:"bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700",children:"Post a New Ad"})]}),ue.jsx("h1",{className:"text-xl font-bold mb-4",children:"Latest Ads"}),ue.jsx("div",{className:"grid gap-4",children:n.map(t=>ue.jsxs("div",{className:"p-4 border rounded shadow",children:[ue.jsx("h2",{className:"text-lg font-semibold",children:t.title}),ue.jsx("p",{children:t.description}),ue.jsxs("p",{className:"text-sm text-gray-500",children:["Price: $",t.price]})]},t.id))})]})}const nn=[];for(let n=0;n<256;++n)nn.push((n+256).toString(16).slice(1));function j9(n,e=0){return(nn[n[e+0]]+nn[n[e+1]]+nn[n[e+2]]+nn[n[e+3]]+"-"+nn[n[e+4]]+nn[n[e+5]]+"-"+nn[n[e+6]]+nn[n[e+7]]+"-"+nn[n[e+8]]+nn[n[e+9]]+"-"+nn[n[e+10]]+nn[n[e+11]]+nn[n[e+12]]+nn[n[e+13]]+nn[n[e+14]]+nn[n[e+15]]).toLowerCase()}let Sg;const q9=new Uint8Array(16);function G9(){if(!Sg){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");Sg=crypto.getRandomValues.bind(crypto)}return Sg(q9)}const K9=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Kw={randomUUID:K9};function BI(n,e,t){var a;if(Kw.randomUUID&&!n)return Kw.randomUUID();n=n||{};const i=n.random??((a=n.rng)==null?void 0:a.call(n))??G9();if(i.length<16)throw new Error("Random bytes length must be >= 16");return i[6]=i[6]&15|64,i[8]=i[8]&63|128,j9(i)}function $9(){const[n,e]=K.useState({title:"",description:"",price:"",location:"",category:"Electronics",contact:""}),[t,i]=K.useState(null),[a,l]=K.useState(!1),c=m=>{e({...n,[m.target.name]:m.target.value})},d=m=>{m.target.files[0]&&i(m.target.files[0])},p=async m=>{m.preventDefault(),l(!0);try{let y="";if(t){if(t.size>5*1024*1024){alert("Image must be less than 5MB."),l(!1);return}const T=iC(UI,`ads/${BI()}-${t.name}`),S=await tC(T,t);y=await nC(S.ref)}await nR(X_(Yy,"ads"),{...n,price:parseFloat(n.price),imageUrl:y,createdAt:iR()}),alert("Ad added successfully!"),e({title:"",description:"",price:"",location:"",category:"Electronics",contact:""}),i(null)}catch(y){console.error("Error adding ad:",y),alert("Error submitting ad.")}l(!1)};return ue.jsxs("div",{className:"p-4 max-w-xl mx-auto",children:[ue.jsx("h1",{className:"text-2xl font-bold mb-4",children:"Admin: Add a New Ad"}),ue.jsxs("form",{onSubmit:p,className:"grid gap-3",children:[ue.jsx("input",{type:"file",accept:"image/*",onChange:d,className:"border p-2 rounded"}),ue.jsx("input",{type:"text",name:"title",placeholder:"Title",value:n.title,onChange:c,required:!0,className:"border p-2 rounded"}),ue.jsx("textarea",{name:"description",placeholder:"Description",value:n.description,onChange:c,required:!0,className:"border p-2 rounded"}),ue.jsx("input",{type:"number",name:"price",placeholder:"Price",value:n.price,onChange:c,required:!0,className:"border p-2 rounded"}),ue.jsx("input",{type:"text",name:"location",placeholder:"Location",value:n.location,onChange:c,required:!0,className:"border p-2 rounded"}),ue.jsxs("select",{name:"category",value:n.category,onChange:c,required:!0,className:"border p-2 rounded",children:[ue.jsx("option",{children:"Electronics"}),ue.jsx("option",{children:"Furniture"}),ue.jsx("option",{children:"Vehicles"}),ue.jsx("option",{children:"Jobs"}),ue.jsx("option",{children:"Real Estate"}),ue.jsx("option",{children:"Services"}),ue.jsx("option",{children:"Other"})]}),ue.jsx("input",{type:"tel",name:"contact",placeholder:"Contact Number",value:n.contact,onChange:c,required:!0,className:"border p-2 rounded"}),ue.jsx("button",{type:"submit",disabled:a,className:"bg-blue-600 text-white p-2 rounded hover:bg-blue-700",children:a?"Submitting...":"Add Ad"})]})]})}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function Y9(n,e,t,i){function a(l){return l instanceof t?l:new t(function(c){c(l)})}return new(t||(t=Promise))(function(l,c){function d(y){try{m(i.next(y))}catch(T){c(T)}}function p(y){try{m(i.throw(y))}catch(T){c(T)}}function m(y){y.done?l(y.value):a(y.value).then(d,p)}m((i=i.apply(n,[])).next())})}function Q9(n,e){var t={label:0,sent:function(){if(l[0]&1)throw l[1];return l[1]},trys:[],ops:[]},i,a,l,c;return c={next:d(0),throw:d(1),return:d(2)},typeof Symbol=="function"&&(c[Symbol.iterator]=function(){return this}),c;function d(m){return function(y){return p([m,y])}}function p(m){if(i)throw new TypeError("Generator is already executing.");for(;t;)try{if(i=1,a&&(l=m[0]&2?a.return:m[0]?a.throw||((l=a.return)&&l.call(a),0):a.next)&&!(l=l.call(a,m[1])).done)return l;switch(a=0,l&&(m=[m[0]&2,l.value]),m[0]){case 0:case 1:l=m;break;case 4:return t.label++,{value:m[1],done:!1};case 5:t.label++,a=m[1],m=[0];continue;case 7:m=t.ops.pop(),t.trys.pop();continue;default:if(l=t.trys,!(l=l.length>0&&l[l.length-1])&&(m[0]===6||m[0]===2)){t=0;continue}if(m[0]===3&&(!l||m[1]>l[0]&&m[1]<l[3])){t.label=m[1];break}if(m[0]===6&&t.label<l[1]){t.label=l[1],l=m;break}if(l&&t.label<l[2]){t.label=l[2],t.ops.push(m);break}l[2]&&t.ops.pop(),t.trys.pop();continue}m=e.call(n,t)}catch(y){m=[6,y],a=0}finally{i=l=0}if(m[0]&5)throw m[1];return{value:m[0]?m[1]:void 0,done:!0}}}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var $o=function(){return $o=Object.assign||function(e){for(var t,i=1,a=arguments.length;i<a;i++){t=arguments[i];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},$o.apply(this,arguments)},zI=function(n){return{loading:n==null,value:n}},W9=function(){return function(n,e){switch(e.type){case"error":return $o($o({},n),{error:e.error,loading:!1,value:void 0});case"reset":return zI(e.defaultValue);case"value":return $o($o({},n),{error:void 0,loading:!1,value:e.value});default:return n}}},X9=function(n){var e=n?n():void 0,t=K.useReducer(W9(),zI(e)),i=t[0],a=t[1],l=K.useCallback(function(){var p=n?n():void 0;a({type:"reset",defaultValue:p})},[n]),c=K.useCallback(function(p){a({type:"error",error:p})},[]),d=K.useCallback(function(p){a({type:"value",value:p})},[]);return K.useMemo(function(){return{error:i.error,loading:i.loading,reset:l,setError:c,setValue:d,value:i.value}},[i.error,i.loading,l,c,d,i.value])},Z9=function(n,e){var t=X9(function(){return n.currentUser}),i=t.error,a=t.loading,l=t.setError,c=t.setValue,d=t.value;return K.useEffect(function(){var p=Zx(n,function(m){return Y9(void 0,void 0,void 0,function(){var y;return Q9(this,function(T){switch(T.label){case 0:return[3,4];case 1:return T.trys.push([1,3,,4]),[4,e.onUserChanged(m)];case 2:return T.sent(),[3,4];case 3:return y=T.sent(),l(y),[3,4];case 4:return c(m),[2]}})})},l);return function(){p()}},[n]),[d,a,i]};function J9(){const[n,e]=K.useState(""),[t,i]=K.useState(""),[a,l]=K.useState(""),[c,d]=K.useState(""),[p,m]=K.useState("Electronics"),[y,T]=K.useState(""),[S,I]=K.useState(null),[N,H]=K.useState(!1),[B,$]=Z9(Df),W=ib();K.useEffect(()=>{!$&&!B&&W("/login")},[B,$,W]);const ee=_e=>{setForm({...form,[_e.target.name]:_e.target.value})},ae=_e=>{const D=_e.target.files[0];if(D){if(D.size>5*1024*1024){alert("Image must be under 5MB.");return}I(D)}},he=async _e=>{_e.preventDefault(),setLoading(!0);let D="";try{if(S){const A=iC(UI,`ads/${BI()}-${S.name}`),R=await tC(A,S);D=await nC(R.ref)}await nR(X_(Yy,"ads"),{...form,price:Number(form.price),imageUrl:D,createdAt:iR()}),alert("Ad posted successfully!"),setForm({title:"",description:"",price:"",location:"",category:"Electronics",contact:""}),I(null),W("/")}catch(A){console.error("Error posting ad:",A),alert("Failed to post ad.")}finally{setLoading(!1)}};return ue.jsxs("div",{className:"p-4 max-w-xl mx-auto",children:[ue.jsx("h1",{className:"text-2xl font-bold mb-4",children:"Post a New Ad"}),ue.jsxs("form",{onSubmit:he,className:"grid gap-4",children:[ue.jsx("input",{type:"file",accept:"image/*",onChange:ae,className:"border p-2 rounded"}),ue.jsx("input",{type:"file",accept:"image/*",onChange:ae,className:"border p-2 rounded"}),S&&ue.jsx("img",{src:URL.createObjectURL(S),alt:"Preview",className:"h-40 object-contain border rounded"}),ue.jsx("input",{type:"text",name:"title",placeholder:"Title",value:form.title,onChange:ee,required:!0,className:"border p-2 rounded"}),ue.jsx("textarea",{name:"description",placeholder:"Description",value:form.description,onChange:ee,required:!0,className:"border p-2 rounded"}),ue.jsx("input",{type:"number",name:"price",placeholder:"Price",value:form.price,onChange:ee,required:!0,className:"border p-2 rounded"}),ue.jsx("input",{type:"text",name:"location",placeholder:"Location",value:form.location,onChange:ee,required:!0,className:"border p-2 rounded"}),ue.jsxs("select",{name:"category",value:form.category,onChange:ee,required:!0,className:"border p-2 rounded",children:[ue.jsx("option",{children:"Electronics"}),ue.jsx("option",{children:"Furniture"}),ue.jsx("option",{children:"Vehicles"}),ue.jsx("option",{children:"Jobs"}),ue.jsx("option",{children:"Real Estate"}),ue.jsx("option",{children:"Services"}),ue.jsx("option",{children:"Other"})]}),ue.jsx("input",{type:"tel",name:"contact",placeholder:"Contact Number",value:form.contact,onChange:ee,required:!0,className:"border p-2 rounded"}),ue.jsx("button",{type:"submit",disabled:loading,className:`p-2 rounded text-white ${loading?"bg-gray-400":"bg-blue-600 hover:bg-blue-700"}`,children:loading?"Posting...":"Post Ad"})]})]})}function e5(){const[n,e]=K.useState(""),[t,i]=K.useState(""),[a,l]=K.useState(null),[c,d]=K.useState(!1),p=async()=>{try{const S=new Sr;await IL(Df,S),alert("Google sign-in successful!")}catch(S){console.error("Google sign-in failed",S)}},m=()=>{window.recaptchaVerifier||(window.recaptchaVerifier=new vL("recaptcha-container",{size:"invisible",callback:()=>y()},Df))},y=async()=>{m();const S=window.recaptchaVerifier;try{const I=await SL(Df,n,S);l(I),alert("OTP sent successfully.")}catch(I){console.error("Error sending OTP:",I),alert("Failed to send OTP. Try again.")}},T=async()=>{try{await a.confirm(t),alert("Phone authentication successful!")}catch(S){console.error("OTP verification failed:",S),alert("Invalid OTP.")}};return ue.jsxs("div",{className:"p-4 max-w-md mx-auto text-center",children:[ue.jsx("h1",{className:"text-xl font-bold mb-4",children:"Login"}),ue.jsx("button",{onClick:p,className:"bg-blue-600 text-white px-4 py-2 rounded w-full mb-4",children:"Sign in with Google"}),ue.jsx("button",{onClick:()=>d(!c),className:"text-sm text-blue-500 underline mb-4",children:c?"Use Google instead":"Use Phone Number instead"}),c&&ue.jsxs("div",{className:"space-y-4",children:[ue.jsx("input",{type:"tel",placeholder:"+260955123456",value:n,onChange:S=>e(S.target.value),className:"border p-2 rounded w-full"}),ue.jsx("button",{onClick:y,className:"bg-blue-600 text-white px-4 py-2 rounded w-full",children:"Send OTP"}),a&&ue.jsxs(ue.Fragment,{children:[ue.jsx("input",{type:"text",placeholder:"Enter OTP",value:t,onChange:S=>i(S.target.value),className:"border p-2 rounded w-full"}),ue.jsx("button",{onClick:T,className:"bg-green-600 text-white px-4 py-2 rounded w-full",children:"Verify OTP"})]})]}),ue.jsx("div",{id:"recaptcha-container"})]})}function t5(){return ue.jsxs(dO,{children:[ue.jsx(zo,{path:"/",element:ue.jsx(H9,{})}),ue.jsx(zo,{path:"/admin",element:ue.jsx($9,{})}),ue.jsx(zo,{path:"/post-ad",element:ue.jsx(J9,{})}),ue.jsx(zo,{path:"/login",element:ue.jsx(e5,{})}),ue.jsx(zo,{path:"*",element:ue.jsx("h1",{className:"text-center mt-10 text-xl font-semibold",children:"404 - Page Not Found"})})]})}SN.createRoot(document.getElementById("root")).render(ue.jsx(pN.StrictMode,{children:ue.jsx(VO,{children:ue.jsx(t5,{})})}));
