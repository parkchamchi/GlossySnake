(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))l(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function s(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(i){if(i.ep)return;i.ep=!0;const r=s(i);fetch(i.href,r)}})();/**
* @vue/shared v3.5.5
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Js(t){const e=Object.create(null);for(const s of t.split(","))e[s]=1;return s=>s in e}const M={},_e=[],Ot=()=>{},gr=()=>!1,gs=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Qs=t=>t.startsWith("onUpdate:"),lt=Object.assign,Zs=(t,e)=>{const s=t.indexOf(e);s>-1&&t.splice(s,1)},fr=Object.prototype.hasOwnProperty,P=(t,e)=>fr.call(t,e),S=Array.isArray,ge=t=>Fe(t)==="[object Map]",Ae=t=>Fe(t)==="[object Set]",wl=t=>Fe(t)==="[object Date]",j=t=>typeof t=="function",Q=t=>typeof t=="string",Wt=t=>typeof t=="symbol",B=t=>t!==null&&typeof t=="object",ni=t=>(B(t)||j(t))&&j(t.then)&&j(t.catch),oi=Object.prototype.toString,Fe=t=>oi.call(t),xr=t=>Fe(t).slice(8,-1),ai=t=>Fe(t)==="[object Object]",Ys=t=>Q(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ne=Js(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),fs=t=>{const e=Object.create(null);return s=>e[s]||(e[s]=t(s))},hr=/-(\w)/g,vt=fs(t=>t.replace(hr,(e,s)=>s?s.toUpperCase():"")),cr=/\B([A-Z])/g,ue=fs(t=>t.replace(cr,"-$1").toLowerCase()),xs=fs(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ds=fs(t=>t?`on${xs(t)}`:""),ne=(t,e)=>!Object.is(t,e),ss=(t,...e)=>{for(let s=0;s<t.length;s++)t[s](...e)},ui=(t,e,s,l=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:l,value:s})},os=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let El;const di=()=>El||(El=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Xs(t){if(S(t)){const e={};for(let s=0;s<t.length;s++){const l=t[s],i=Q(l)?kr(l):Xs(l);if(i)for(const r in i)e[r]=i[r]}return e}else if(Q(t)||B(t))return t}const pr=/;(?![^(]*\))/g,br=/:([^]+)/,Ar=/\/\*[^]*?\*\//g;function kr(t){const e={};return t.replace(Ar,"").split(pr).forEach(s=>{if(s){const l=s.split(br);l.length>1&&(e[l[0].trim()]=l[1].trim())}}),e}function jt(t){let e="";if(Q(t))e=t;else if(S(t))for(let s=0;s<t.length;s++){const l=jt(t[s]);l&&(e+=l+" ")}else if(B(t))for(const s in t)t[s]&&(e+=s+" ");return e.trim()}const wr="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Er=Js(wr);function mi(t){return!!t||t===""}function vr(t,e){if(t.length!==e.length)return!1;let s=!0;for(let l=0;s&&l<t.length;l++)s=Le(t[l],e[l]);return s}function Le(t,e){if(t===e)return!0;let s=wl(t),l=wl(e);if(s||l)return s&&l?t.getTime()===e.getTime():!1;if(s=Wt(t),l=Wt(e),s||l)return t===e;if(s=S(t),l=S(e),s||l)return s&&l?vr(t,e):!1;if(s=B(t),l=B(e),s||l){if(!s||!l)return!1;const i=Object.keys(t).length,r=Object.keys(e).length;if(i!==r)return!1;for(const n in t){const o=t.hasOwnProperty(n),u=e.hasOwnProperty(n);if(o&&!u||!o&&u||!Le(t[n],e[n]))return!1}}return String(t)===String(e)}function tl(t,e){return t.findIndex(s=>Le(s,e))}const _i=t=>!!(t&&t.__v_isRef===!0),pt=t=>Q(t)?t:t==null?"":S(t)||B(t)&&(t.toString===oi||!j(t.toString))?_i(t)?pt(t.value):JSON.stringify(t,gi,2):String(t),gi=(t,e)=>_i(e)?gi(t,e.value):ge(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((s,[l,i],r)=>(s[Ss(l,r)+" =>"]=i,s),{})}:Ae(e)?{[`Set(${e.size})`]:[...e.values()].map(s=>Ss(s))}:Wt(e)?Ss(e):B(e)&&!S(e)&&!ai(e)?String(e):e,Ss=(t,e="")=>{var s;return Wt(t)?`Symbol(${(s=t.description)!=null?s:e})`:t};/**
* @vue/reactivity v3.5.5
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let xt;class Tr{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=xt,!e&&xt&&(this.index=(xt.scopes||(xt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,s;if(this.scopes)for(e=0,s=this.scopes.length;e<s;e++)this.scopes[e].pause();for(e=0,s=this.effects.length;e<s;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,s;if(this.scopes)for(e=0,s=this.scopes.length;e<s;e++)this.scopes[e].resume();for(e=0,s=this.effects.length;e<s;e++)this.effects[e].resume()}}run(e){if(this._active){const s=xt;try{return xt=this,e()}finally{xt=s}}}on(){xt=this}off(){xt=this.parent}stop(e){if(this._active){let s,l;for(s=0,l=this.effects.length;s<l;s++)this.effects[s].stop();for(s=0,l=this.cleanups.length;s<l;s++)this.cleanups[s]();if(this.scopes)for(s=0,l=this.scopes.length;s<l;s++)this.scopes[s].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function Dr(){return xt}let L;const ys=new WeakSet;class fi{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.nextEffect=void 0,this.cleanup=void 0,this.scheduler=void 0,xt&&xt.active&&xt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ys.has(this)&&(ys.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||(this.flags|=8,this.nextEffect=Ge,Ge=this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,vl(this),hi(this);const e=L,s=wt;L=this,wt=!0;try{return this.fn()}finally{ci(this),L=e,wt=s,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)ll(e);this.deps=this.depsTail=void 0,vl(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ys.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){zs(this)&&this.run()}get dirty(){return zs(this)}}let xi=0,Ge;function el(){xi++}function sl(){if(--xi>0)return;let t;for(;Ge;){let e=Ge;for(Ge=void 0;e;){const s=e.nextEffect;if(e.nextEffect=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(l){t||(t=l)}e=s}}if(t)throw t}function hi(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function ci(t){let e,s=t.depsTail,l=s;for(;l;){const i=l.prevDep;l.version===-1?(l===s&&(s=i),ll(l),Sr(l)):e=l,l.dep.activeLink=l.prevActiveLink,l.prevActiveLink=void 0,l=i}t.deps=e,t.depsTail=s}function zs(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&pi(e.dep.computed)||e.dep.version!==e.version)return!0;return!!t._dirty}function pi(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===We))return;t.globalVersion=We;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&!zs(t)){t.flags&=-3;return}const s=L,l=wt;L=t,wt=!0;try{hi(t);const i=t.fn(t._value);(e.version===0||ne(i,t._value))&&(t._value=i,e.version++)}catch(i){throw e.version++,i}finally{L=s,wt=l,ci(t),t.flags&=-3}}function ll(t){const{dep:e,prevSub:s,nextSub:l}=t;if(s&&(s.nextSub=l,t.prevSub=void 0),l&&(l.prevSub=s,t.nextSub=void 0),e.subs===t&&(e.subs=s),!e.subs&&e.computed){e.computed.flags&=-5;for(let i=e.computed.deps;i;i=i.nextDep)ll(i)}}function Sr(t){const{prevDep:e,nextDep:s}=t;e&&(e.nextDep=s,t.prevDep=void 0),s&&(s.prevDep=e,t.nextDep=void 0)}let wt=!0;const bi=[];function Qt(){bi.push(wt),wt=!1}function Zt(){const t=bi.pop();wt=t===void 0?!0:t}function vl(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const s=L;L=void 0;try{e()}finally{L=s}}}let We=0;class yr{constructor(e,s){this.sub=e,this.dep=s,this.version=s.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ai{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0}track(e){if(!L||!wt||L===this.computed)return;let s=this.activeLink;if(s===void 0||s.sub!==L)s=this.activeLink=new yr(L,this),L.deps?(s.prevDep=L.depsTail,L.depsTail.nextDep=s,L.depsTail=s):L.deps=L.depsTail=s,L.flags&4&&ki(s);else if(s.version===-1&&(s.version=this.version,s.nextDep)){const l=s.nextDep;l.prevDep=s.prevDep,s.prevDep&&(s.prevDep.nextDep=l),s.prevDep=L.depsTail,s.nextDep=void 0,L.depsTail.nextDep=s,L.depsTail=s,L.deps===s&&(L.deps=l)}return s}trigger(e){this.version++,We++,this.notify(e)}notify(e){el();try{for(let s=this.subs;s;s=s.prevSub)s.sub.notify()}finally{sl()}}}function ki(t){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let l=e.deps;l;l=l.nextDep)ki(l)}const s=t.dep.subs;s!==t&&(t.prevSub=s,s&&(s.nextSub=t)),t.dep.subs=t}const Hs=new WeakMap,ie=Symbol(""),Fs=Symbol(""),Re=Symbol("");function it(t,e,s){if(wt&&L){let l=Hs.get(t);l||Hs.set(t,l=new Map);let i=l.get(s);i||l.set(s,i=new Ai),i.track()}}function Ft(t,e,s,l,i,r){const n=Hs.get(t);if(!n){We++;return}const o=u=>{u&&u.trigger()};if(el(),e==="clear")n.forEach(o);else{const u=S(t),g=u&&Ys(s);if(u&&s==="length"){const m=Number(l);n.forEach((f,k)=>{(k==="length"||k===Re||!Wt(k)&&k>=m)&&o(f)})}else switch(s!==void 0&&o(n.get(s)),g&&o(n.get(Re)),e){case"add":u?g&&o(n.get("length")):(o(n.get(ie)),ge(t)&&o(n.get(Fs)));break;case"delete":u||(o(n.get(ie)),ge(t)&&o(n.get(Fs)));break;case"set":ge(t)&&o(n.get(ie));break}}sl()}function de(t){const e=F(t);return e===t?e:(it(e,"iterate",Re),Et(t)?e:e.map(dt))}function hs(t){return it(t=F(t),"iterate",Re),t}const Nr={__proto__:null,[Symbol.iterator](){return Ns(this,Symbol.iterator,dt)},concat(...t){return de(this).concat(...t.map(e=>S(e)?de(e):e))},entries(){return Ns(this,"entries",t=>(t[1]=dt(t[1]),t))},every(t,e){return It(this,"every",t,e,void 0,arguments)},filter(t,e){return It(this,"filter",t,e,s=>s.map(dt),arguments)},find(t,e){return It(this,"find",t,e,dt,arguments)},findIndex(t,e){return It(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return It(this,"findLast",t,e,dt,arguments)},findLastIndex(t,e){return It(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return It(this,"forEach",t,e,void 0,arguments)},includes(...t){return Gs(this,"includes",t)},indexOf(...t){return Gs(this,"indexOf",t)},join(t){return de(this).join(t)},lastIndexOf(...t){return Gs(this,"lastIndexOf",t)},map(t,e){return It(this,"map",t,e,void 0,arguments)},pop(){return Te(this,"pop")},push(...t){return Te(this,"push",t)},reduce(t,...e){return Tl(this,"reduce",t,e)},reduceRight(t,...e){return Tl(this,"reduceRight",t,e)},shift(){return Te(this,"shift")},some(t,e){return It(this,"some",t,e,void 0,arguments)},splice(...t){return Te(this,"splice",t)},toReversed(){return de(this).toReversed()},toSorted(t){return de(this).toSorted(t)},toSpliced(...t){return de(this).toSpliced(...t)},unshift(...t){return Te(this,"unshift",t)},values(){return Ns(this,"values",dt)}};function Ns(t,e,s){const l=hs(t),i=l[e]();return l!==t&&!Et(t)&&(i._next=i.next,i.next=()=>{const r=i._next();return r.value&&(r.value=s(r.value)),r}),i}const Gr=Array.prototype;function It(t,e,s,l,i,r){const n=hs(t),o=n!==t&&!Et(t),u=n[e];if(u!==Gr[e]){const f=u.apply(t,r);return o?dt(f):f}let g=s;n!==t&&(o?g=function(f,k){return s.call(this,dt(f),k,t)}:s.length>2&&(g=function(f,k){return s.call(this,f,k,t)}));const m=u.call(n,g,l);return o&&i?i(m):m}function Tl(t,e,s,l){const i=hs(t);let r=s;return i!==t&&(Et(t)?s.length>3&&(r=function(n,o,u){return s.call(this,n,o,u,t)}):r=function(n,o,u){return s.call(this,n,dt(o),u,t)}),i[e](r,...l)}function Gs(t,e,s){const l=F(t);it(l,"iterate",Re);const i=l[e](...s);return(i===-1||i===!1)&&ol(s[0])?(s[0]=F(s[0]),l[e](...s)):i}function Te(t,e,s=[]){Qt(),el();const l=F(t)[e].apply(t,s);return sl(),Zt(),l}const jr=Js("__proto__,__v_isRef,__isVue"),wi=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Wt));function Cr(t){Wt(t)||(t=String(t));const e=F(this);return it(e,"has",t),e.hasOwnProperty(t)}class Ei{constructor(e=!1,s=!1){this._isReadonly=e,this._isShallow=s}get(e,s,l){const i=this._isReadonly,r=this._isShallow;if(s==="__v_isReactive")return!i;if(s==="__v_isReadonly")return i;if(s==="__v_isShallow")return r;if(s==="__v_raw")return l===(i?r?Br:Si:r?Di:Ti).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(l)?e:void 0;const n=S(e);if(!i){let u;if(n&&(u=Nr[s]))return u;if(s==="hasOwnProperty")return Cr}const o=Reflect.get(e,s,ut(e)?e:l);return(Wt(s)?wi.has(s):jr(s))||(i||it(e,"get",s),r)?o:ut(o)?n&&Ys(s)?o:o.value:B(o)?i?yi(o):Me(o):o}}class vi extends Ei{constructor(e=!1){super(!1,e)}set(e,s,l,i){let r=e[s];if(!this._isShallow){const u=ce(r);if(!Et(l)&&!ce(l)&&(r=F(r),l=F(l)),!S(e)&&ut(r)&&!ut(l))return u?!1:(r.value=l,!0)}const n=S(e)&&Ys(s)?Number(s)<e.length:P(e,s),o=Reflect.set(e,s,l,ut(e)?e:i);return e===F(i)&&(n?ne(l,r)&&Ft(e,"set",s,l):Ft(e,"add",s,l)),o}deleteProperty(e,s){const l=P(e,s);e[s];const i=Reflect.deleteProperty(e,s);return i&&l&&Ft(e,"delete",s,void 0),i}has(e,s){const l=Reflect.has(e,s);return(!Wt(s)||!wi.has(s))&&it(e,"has",s),l}ownKeys(e){return it(e,"iterate",S(e)?"length":ie),Reflect.ownKeys(e)}}class Or extends Ei{constructor(e=!1){super(!0,e)}set(e,s){return!0}deleteProperty(e,s){return!0}}const Wr=new vi,Rr=new Or,Ir=new vi(!0);const il=t=>t,cs=t=>Reflect.getPrototypeOf(t);function Qe(t,e,s=!1,l=!1){t=t.__v_raw;const i=F(t),r=F(e);s||(ne(e,r)&&it(i,"get",e),it(i,"get",r));const{has:n}=cs(i),o=l?il:s?al:dt;if(n.call(i,e))return o(t.get(e));if(n.call(i,r))return o(t.get(r));t!==i&&t.get(e)}function Ze(t,e=!1){const s=this.__v_raw,l=F(s),i=F(t);return e||(ne(t,i)&&it(l,"has",t),it(l,"has",i)),t===i?s.has(t):s.has(t)||s.has(i)}function Ye(t,e=!1){return t=t.__v_raw,!e&&it(F(t),"iterate",ie),Reflect.get(t,"size",t)}function Dl(t,e=!1){!e&&!Et(t)&&!ce(t)&&(t=F(t));const s=F(this);return cs(s).has.call(s,t)||(s.add(t),Ft(s,"add",t,t)),this}function Sl(t,e,s=!1){!s&&!Et(e)&&!ce(e)&&(e=F(e));const l=F(this),{has:i,get:r}=cs(l);let n=i.call(l,t);n||(t=F(t),n=i.call(l,t));const o=r.call(l,t);return l.set(t,e),n?ne(e,o)&&Ft(l,"set",t,e):Ft(l,"add",t,e),this}function yl(t){const e=F(this),{has:s,get:l}=cs(e);let i=s.call(e,t);i||(t=F(t),i=s.call(e,t)),l&&l.call(e,t);const r=e.delete(t);return i&&Ft(e,"delete",t,void 0),r}function Nl(){const t=F(this),e=t.size!==0,s=t.clear();return e&&Ft(t,"clear",void 0,void 0),s}function Xe(t,e){return function(l,i){const r=this,n=r.__v_raw,o=F(n),u=e?il:t?al:dt;return!t&&it(o,"iterate",ie),n.forEach((g,m)=>l.call(i,u(g),u(m),r))}}function ts(t,e,s){return function(...l){const i=this.__v_raw,r=F(i),n=ge(r),o=t==="entries"||t===Symbol.iterator&&n,u=t==="keys"&&n,g=i[t](...l),m=s?il:e?al:dt;return!e&&it(r,"iterate",u?Fs:ie),{next(){const{value:f,done:k}=g.next();return k?{value:f,done:k}:{value:o?[m(f[0]),m(f[1])]:m(f),done:k}},[Symbol.iterator](){return this}}}}function Bt(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Pr(){const t={get(r){return Qe(this,r)},get size(){return Ye(this)},has:Ze,add:Dl,set:Sl,delete:yl,clear:Nl,forEach:Xe(!1,!1)},e={get(r){return Qe(this,r,!1,!0)},get size(){return Ye(this)},has:Ze,add(r){return Dl.call(this,r,!0)},set(r,n){return Sl.call(this,r,n,!0)},delete:yl,clear:Nl,forEach:Xe(!1,!0)},s={get(r){return Qe(this,r,!0)},get size(){return Ye(this,!0)},has(r){return Ze.call(this,r,!0)},add:Bt("add"),set:Bt("set"),delete:Bt("delete"),clear:Bt("clear"),forEach:Xe(!0,!1)},l={get(r){return Qe(this,r,!0,!0)},get size(){return Ye(this,!0)},has(r){return Ze.call(this,r,!0)},add:Bt("add"),set:Bt("set"),delete:Bt("delete"),clear:Bt("clear"),forEach:Xe(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=ts(r,!1,!1),s[r]=ts(r,!0,!1),e[r]=ts(r,!1,!0),l[r]=ts(r,!0,!0)}),[t,s,e,l]}const[zr,Hr,Fr,Lr]=Pr();function rl(t,e){const s=e?t?Lr:Fr:t?Hr:zr;return(l,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?l:Reflect.get(P(s,i)&&i in l?s:l,i,r)}const Mr={get:rl(!1,!1)},qr={get:rl(!1,!0)},Ur={get:rl(!0,!1)};const Ti=new WeakMap,Di=new WeakMap,Si=new WeakMap,Br=new WeakMap;function Vr(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Kr(t){return t.__v_skip||!Object.isExtensible(t)?0:Vr(xr(t))}function Me(t){return ce(t)?t:nl(t,!1,Wr,Mr,Ti)}function $r(t){return nl(t,!1,Ir,qr,Di)}function yi(t){return nl(t,!0,Rr,Ur,Si)}function nl(t,e,s,l,i){if(!B(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const n=Kr(t);if(n===0)return t;const o=new Proxy(t,n===2?l:s);return i.set(t,o),o}function fe(t){return ce(t)?fe(t.__v_raw):!!(t&&t.__v_isReactive)}function ce(t){return!!(t&&t.__v_isReadonly)}function Et(t){return!!(t&&t.__v_isShallow)}function ol(t){return t?!!t.__v_raw:!1}function F(t){const e=t&&t.__v_raw;return e?F(e):t}function Jr(t){return!P(t,"__v_skip")&&Object.isExtensible(t)&&ui(t,"__v_skip",!0),t}const dt=t=>B(t)?Me(t):t,al=t=>B(t)?yi(t):t;function ut(t){return t?t.__v_isRef===!0:!1}function Qr(t){return ut(t)?t.value:t}const Zr={get:(t,e,s)=>e==="__v_raw"?t:Qr(Reflect.get(t,e,s)),set:(t,e,s,l)=>{const i=t[e];return ut(i)&&!ut(s)?(i.value=s,!0):Reflect.set(t,e,s,l)}};function Ni(t){return fe(t)?t:new Proxy(t,Zr)}class Yr{constructor(e,s,l){this.fn=e,this.setter=s,this._value=void 0,this.dep=new Ai(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=We-1,this.effect=this,this.__v_isReadonly=!s,this.isSSR=l}notify(){this.flags|=16,L!==this&&this.dep.notify()}get value(){const e=this.dep.track();return pi(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Xr(t,e,s=!1){let l,i;return j(t)?l=t:(l=t.get,i=t.set),new Yr(l,i,s)}const es={},as=new WeakMap;let le;function tn(t,e=!1,s=le){if(s){let l=as.get(s);l||as.set(s,l=[]),l.push(t)}}function en(t,e,s=M){const{immediate:l,deep:i,once:r,scheduler:n,augmentJob:o,call:u}=s,g=y=>i?y:Et(y)||i===!1||i===0?zt(y,1):zt(y);let m,f,k,G,I=!1,W=!1;if(ut(t)?(f=()=>t.value,I=Et(t)):fe(t)?(f=()=>g(t),I=!0):S(t)?(W=!0,I=t.some(y=>fe(y)||Et(y)),f=()=>t.map(y=>{if(ut(y))return y.value;if(fe(y))return g(y);if(j(y))return u?u(y,2):y()})):j(t)?e?f=u?()=>u(t,2):t:f=()=>{if(k){Qt();try{k()}finally{Zt()}}const y=le;le=m;try{return u?u(t,3,[G]):t(G)}finally{le=y}}:f=Ot,e&&i){const y=f,Z=i===!0?1/0:i;f=()=>zt(y(),Z)}const rt=Dr(),H=()=>{m.stop(),rt&&Zs(rt.effects,m)};if(r)if(e){const y=e;e=(...Z)=>{y(...Z),H()}}else{const y=f;f=()=>{y(),H()}}let K=W?new Array(t.length).fill(es):es;const $=y=>{if(!(!(m.flags&1)||!m.dirty&&!y))if(e){const Z=m.run();if(i||I||(W?Z.some((qt,Tt)=>ne(qt,K[Tt])):ne(Z,K))){k&&k();const qt=le;le=m;try{const Tt=[Z,K===es?void 0:W&&K[0]===es?[]:K,G];u?u(e,3,Tt):e(...Tt),K=Z}finally{le=qt}}}else m.run()};return o&&o($),m=new fi(f),m.scheduler=n?()=>n($,!1):$,G=y=>tn(y,!1,m),k=m.onStop=()=>{const y=as.get(m);if(y){if(u)u(y,4);else for(const Z of y)Z();as.delete(m)}},e?l?$(!0):K=m.run():n?n($.bind(null,!0),!0):m.run(),H.pause=m.pause.bind(m),H.resume=m.resume.bind(m),H.stop=H,H}function zt(t,e=1/0,s){if(e<=0||!B(t)||t.__v_skip||(s=s||new Set,s.has(t)))return t;if(s.add(t),e--,ut(t))zt(t.value,e,s);else if(S(t))for(let l=0;l<t.length;l++)zt(t[l],e,s);else if(Ae(t)||ge(t))t.forEach(l=>{zt(l,e,s)});else if(ai(t)){for(const l in t)zt(t[l],e,s);for(const l of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,l)&&zt(t[l],e,s)}return t}/**
* @vue/runtime-core v3.5.5
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function qe(t,e,s,l){try{return l?t(...l):t()}catch(i){ps(i,e,s)}}function Rt(t,e,s,l){if(j(t)){const i=qe(t,e,s,l);return i&&ni(i)&&i.catch(r=>{ps(r,e,s)}),i}if(S(t)){const i=[];for(let r=0;r<t.length;r++)i.push(Rt(t[r],e,s,l));return i}}function ps(t,e,s,l=!0){const i=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:n}=e&&e.appContext.config||M;if(e){let o=e.parent;const u=e.proxy,g=`https://vuejs.org/error-reference/#runtime-${s}`;for(;o;){const m=o.ec;if(m){for(let f=0;f<m.length;f++)if(m[f](t,u,g)===!1)return}o=o.parent}if(r){Qt(),qe(r,null,10,[t,u,g]),Zt();return}}sn(t,s,i,l,n)}function sn(t,e,s,l=!0,i=!1){if(i)throw t;console.error(t)}let Ie=!1,Ls=!1;const at=[];let Nt=0;const xe=[];let Kt=null,me=0;const Gi=Promise.resolve();let ul=null;function ji(t){const e=ul||Gi;return t?e.then(this?t.bind(this):t):e}function ln(t){let e=Ie?Nt+1:0,s=at.length;for(;e<s;){const l=e+s>>>1,i=at[l],r=Pe(i);r<t||r===t&&i.flags&2?e=l+1:s=l}return e}function dl(t){if(!(t.flags&1)){const e=Pe(t),s=at[at.length-1];!s||!(t.flags&2)&&e>=Pe(s)?at.push(t):at.splice(ln(e),0,t),t.flags|=1,Ci()}}function Ci(){!Ie&&!Ls&&(Ls=!0,ul=Gi.then(Wi))}function rn(t){S(t)?xe.push(...t):Kt&&t.id===-1?Kt.splice(me+1,0,t):t.flags&1||(xe.push(t),t.flags|=1),Ci()}function Gl(t,e,s=Ie?Nt+1:0){for(;s<at.length;s++){const l=at[s];if(l&&l.flags&2){if(t&&l.id!==t.uid)continue;at.splice(s,1),s--,l.flags&4&&(l.flags&=-2),l(),l.flags&=-2}}}function Oi(t){if(xe.length){const e=[...new Set(xe)].sort((s,l)=>Pe(s)-Pe(l));if(xe.length=0,Kt){Kt.push(...e);return}for(Kt=e,me=0;me<Kt.length;me++){const s=Kt[me];s.flags&4&&(s.flags&=-2),s.flags&8||s(),s.flags&=-2}Kt=null,me=0}}const Pe=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Wi(t){Ls=!1,Ie=!0;try{for(Nt=0;Nt<at.length;Nt++){const e=at[Nt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),qe(e,e.i,e.i?15:14),e.flags&=-2)}}finally{for(;Nt<at.length;Nt++){const e=at[Nt];e&&(e.flags&=-2)}Nt=0,at.length=0,Oi(),Ie=!1,ul=null,(at.length||xe.length)&&Wi()}}let ht=null,Ri=null;function us(t){const e=ht;return ht=t,Ri=t&&t.type.__scopeId||null,e}function nn(t,e=ht,s){if(!e||t._n)return t;const l=(...i)=>{l._d&&Hl(-1);const r=us(e);let n;try{n=t(...i)}finally{us(r),l._d&&Hl(1)}return n};return l._n=!0,l._c=!0,l._d=!0,l}function Se(t,e){if(ht===null)return t;const s=Es(ht),l=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[r,n,o,u=M]=e[i];r&&(j(r)&&(r={mounted:r,updated:r}),r.deep&&zt(n),l.push({dir:r,instance:s,value:n,oldValue:void 0,arg:o,modifiers:u}))}return t}function ee(t,e,s,l){const i=t.dirs,r=e&&e.dirs;for(let n=0;n<i.length;n++){const o=i[n];r&&(o.oldValue=r[n].value);let u=o.dir[l];u&&(Qt(),Rt(u,s,8,[t.el,o,t,e]),Zt())}}const on=Symbol("_vte"),an=t=>t.__isTeleport;function ml(t,e){t.shapeFlag&6&&t.component?(t.transition=e,ml(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Ii(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Ms(t,e,s,l,i=!1){if(S(t)){t.forEach((I,W)=>Ms(I,e&&(S(e)?e[W]:e),s,l,i));return}if(je(l)&&!i)return;const r=l.shapeFlag&4?Es(l.component):l.el,n=i?null:r,{i:o,r:u}=t,g=e&&e.r,m=o.refs===M?o.refs={}:o.refs,f=o.setupState,k=F(f),G=f===M?()=>!1:I=>P(k,I);if(g!=null&&g!==u&&(Q(g)?(m[g]=null,G(g)&&(f[g]=null)):ut(g)&&(g.value=null)),j(u))qe(u,o,12,[n,m]);else{const I=Q(u),W=ut(u);if(I||W){const rt=()=>{if(t.f){const H=I?G(u)?f[u]:m[u]:u.value;i?S(H)&&Zs(H,r):S(H)?H.includes(r)||H.push(r):I?(m[u]=[r],G(u)&&(f[u]=m[u])):(u.value=[r],t.k&&(m[t.k]=u.value))}else I?(m[u]=n,G(u)&&(f[u]=n)):W&&(u.value=n,t.k&&(m[t.k]=n))};n?(rt.id=-1,ft(rt,s)):rt()}}}const je=t=>!!t.type.__asyncLoader,Pi=t=>t.type.__isKeepAlive;function un(t,e){zi(t,"a",e)}function dn(t,e){zi(t,"da",e)}function zi(t,e,s=et){const l=t.__wdc||(t.__wdc=()=>{let i=s;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(bs(e,l,s),s){let i=s.parent;for(;i&&i.parent;)Pi(i.parent.vnode)&&mn(l,e,s,i),i=i.parent}}function mn(t,e,s,l){const i=bs(e,t,l,!0);Hi(()=>{Zs(l[e],i)},s)}function bs(t,e,s=et,l=!1){if(s){const i=s[t]||(s[t]=[]),r=e.__weh||(e.__weh=(...n)=>{Qt();const o=Ue(s),u=Rt(e,s,t,n);return o(),Zt(),u});return l?i.unshift(r):i.push(r),r}}const Mt=t=>(e,s=et)=>{(!ws||t==="sp")&&bs(t,(...l)=>e(...l),s)},_n=Mt("bm"),gn=Mt("m"),fn=Mt("bu"),xn=Mt("u"),hn=Mt("bum"),Hi=Mt("um"),cn=Mt("sp"),pn=Mt("rtg"),bn=Mt("rtc");function An(t,e=et){bs("ec",t,e)}const Fi="components";function At(t,e){return wn(Fi,t,!0,e)||t}const kn=Symbol.for("v-ndc");function wn(t,e,s=!0,l=!1){const i=ht||et;if(i){const r=i.type;if(t===Fi){const o=_o(r,!1);if(o&&(o===e||o===vt(e)||o===xs(vt(e))))return r}const n=jl(i[t]||r[t],e)||jl(i.appContext[t],e);return!n&&l?r:n}}function jl(t,e){return t&&(t[e]||t[vt(e)]||t[xs(vt(e))])}function re(t,e,s,l){let i;const r=s,n=S(t);if(n||Q(t)){const o=n&&fe(t);let u=!1;o&&(u=!Et(t),t=hs(t)),i=new Array(t.length);for(let g=0,m=t.length;g<m;g++)i[g]=e(u?dt(t[g]):t[g],g,void 0,r)}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r)}else if(B(t))if(t[Symbol.iterator])i=Array.from(t,(o,u)=>e(o,u,void 0,r));else{const o=Object.keys(t);i=new Array(o.length);for(let u=0,g=o.length;u<g;u++){const m=o[u];i[u]=e(t[m],m,u,r)}}else i=[];return i}const qs=t=>t?nr(t)?Es(t):qs(t.parent):null,Ce=lt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>qs(t.parent),$root:t=>qs(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>_l(t),$forceUpdate:t=>t.f||(t.f=()=>{dl(t.update)}),$nextTick:t=>t.n||(t.n=ji.bind(t.proxy)),$watch:t=>Un.bind(t)}),js=(t,e)=>t!==M&&!t.__isScriptSetup&&P(t,e),En={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:s,setupState:l,data:i,props:r,accessCache:n,type:o,appContext:u}=t;let g;if(e[0]!=="$"){const G=n[e];if(G!==void 0)switch(G){case 1:return l[e];case 2:return i[e];case 4:return s[e];case 3:return r[e]}else{if(js(l,e))return n[e]=1,l[e];if(i!==M&&P(i,e))return n[e]=2,i[e];if((g=t.propsOptions[0])&&P(g,e))return n[e]=3,r[e];if(s!==M&&P(s,e))return n[e]=4,s[e];Us&&(n[e]=0)}}const m=Ce[e];let f,k;if(m)return e==="$attrs"&&it(t.attrs,"get",""),m(t);if((f=o.__cssModules)&&(f=f[e]))return f;if(s!==M&&P(s,e))return n[e]=4,s[e];if(k=u.config.globalProperties,P(k,e))return k[e]},set({_:t},e,s){const{data:l,setupState:i,ctx:r}=t;return js(i,e)?(i[e]=s,!0):l!==M&&P(l,e)?(l[e]=s,!0):P(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=s,!0)},has({_:{data:t,setupState:e,accessCache:s,ctx:l,appContext:i,propsOptions:r}},n){let o;return!!s[n]||t!==M&&P(t,n)||js(e,n)||(o=r[0])&&P(o,n)||P(l,n)||P(Ce,n)||P(i.config.globalProperties,n)},defineProperty(t,e,s){return s.get!=null?t._.accessCache[e]=0:P(s,"value")&&this.set(t,e,s.value,null),Reflect.defineProperty(t,e,s)}};function Cl(t){return S(t)?t.reduce((e,s)=>(e[s]=null,e),{}):t}let Us=!0;function vn(t){const e=_l(t),s=t.proxy,l=t.ctx;Us=!1,e.beforeCreate&&Ol(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:n,watch:o,provide:u,inject:g,created:m,beforeMount:f,mounted:k,beforeUpdate:G,updated:I,activated:W,deactivated:rt,beforeDestroy:H,beforeUnmount:K,destroyed:$,unmounted:y,render:Z,renderTracked:qt,renderTriggered:Tt,errorCaptured:Ut,serverPrefetch:Be,expose:Yt,inheritAttrs:ke,components:Ve,directives:Ke,filters:vs}=e;if(g&&Tn(g,l,null),n)for(const V in n){const q=n[V];j(q)&&(l[V]=q.bind(s))}if(i){const V=i.call(s,s);B(V)&&(t.data=Me(V))}if(Us=!0,r)for(const V in r){const q=r[V],Xt=j(q)?q.bind(s,s):j(q.get)?q.get.bind(s,s):Ot,$e=!j(q)&&j(q.set)?q.set.bind(s):Ot,te=fo({get:Xt,set:$e});Object.defineProperty(l,V,{enumerable:!0,configurable:!0,get:()=>te.value,set:Dt=>te.value=Dt})}if(o)for(const V in o)Li(o[V],l,s,V);if(u){const V=j(u)?u.call(s):u;Reflect.ownKeys(V).forEach(q=>{jn(q,V[q])})}m&&Ol(m,t,"c");function nt(V,q){S(q)?q.forEach(Xt=>V(Xt.bind(s))):q&&V(q.bind(s))}if(nt(_n,f),nt(gn,k),nt(fn,G),nt(xn,I),nt(un,W),nt(dn,rt),nt(An,Ut),nt(bn,qt),nt(pn,Tt),nt(hn,K),nt(Hi,y),nt(cn,Be),S(Yt))if(Yt.length){const V=t.exposed||(t.exposed={});Yt.forEach(q=>{Object.defineProperty(V,q,{get:()=>s[q],set:Xt=>s[q]=Xt})})}else t.exposed||(t.exposed={});Z&&t.render===Ot&&(t.render=Z),ke!=null&&(t.inheritAttrs=ke),Ve&&(t.components=Ve),Ke&&(t.directives=Ke),Be&&Ii(t)}function Tn(t,e,s=Ot){S(t)&&(t=Bs(t));for(const l in t){const i=t[l];let r;B(i)?"default"in i?r=ls(i.from||l,i.default,!0):r=ls(i.from||l):r=ls(i),ut(r)?Object.defineProperty(e,l,{enumerable:!0,configurable:!0,get:()=>r.value,set:n=>r.value=n}):e[l]=r}}function Ol(t,e,s){Rt(S(t)?t.map(l=>l.bind(e.proxy)):t.bind(e.proxy),e,s)}function Li(t,e,s,l){let i=l.includes(".")?er(s,l):()=>s[l];if(Q(t)){const r=e[t];j(r)&&Os(i,r)}else if(j(t))Os(i,t.bind(s));else if(B(t))if(S(t))t.forEach(r=>Li(r,e,s,l));else{const r=j(t.handler)?t.handler.bind(s):e[t.handler];j(r)&&Os(i,r,t)}}function _l(t){const e=t.type,{mixins:s,extends:l}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:n}}=t.appContext,o=r.get(e);let u;return o?u=o:!i.length&&!s&&!l?u=e:(u={},i.length&&i.forEach(g=>ds(u,g,n,!0)),ds(u,e,n)),B(e)&&r.set(e,u),u}function ds(t,e,s,l=!1){const{mixins:i,extends:r}=e;r&&ds(t,r,s,!0),i&&i.forEach(n=>ds(t,n,s,!0));for(const n in e)if(!(l&&n==="expose")){const o=Dn[n]||s&&s[n];t[n]=o?o(t[n],e[n]):e[n]}return t}const Dn={data:Wl,props:Rl,emits:Rl,methods:ye,computed:ye,beforeCreate:ot,created:ot,beforeMount:ot,mounted:ot,beforeUpdate:ot,updated:ot,beforeDestroy:ot,beforeUnmount:ot,destroyed:ot,unmounted:ot,activated:ot,deactivated:ot,errorCaptured:ot,serverPrefetch:ot,components:ye,directives:ye,watch:yn,provide:Wl,inject:Sn};function Wl(t,e){return e?t?function(){return lt(j(t)?t.call(this,this):t,j(e)?e.call(this,this):e)}:e:t}function Sn(t,e){return ye(Bs(t),Bs(e))}function Bs(t){if(S(t)){const e={};for(let s=0;s<t.length;s++)e[t[s]]=t[s];return e}return t}function ot(t,e){return t?[...new Set([].concat(t,e))]:e}function ye(t,e){return t?lt(Object.create(null),t,e):e}function Rl(t,e){return t?S(t)&&S(e)?[...new Set([...t,...e])]:lt(Object.create(null),Cl(t),Cl(e??{})):e}function yn(t,e){if(!t)return e;if(!e)return t;const s=lt(Object.create(null),t);for(const l in e)s[l]=ot(t[l],e[l]);return s}function Mi(){return{app:null,config:{isNativeTag:gr,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Nn=0;function Gn(t,e){return function(l,i=null){j(l)||(l=lt({},l)),i!=null&&!B(i)&&(i=null);const r=Mi(),n=new WeakSet,o=[];let u=!1;const g=r.app={_uid:Nn++,_component:l,_props:i,_container:null,_context:r,_instance:null,version:xo,get config(){return r.config},set config(m){},use(m,...f){return n.has(m)||(m&&j(m.install)?(n.add(m),m.install(g,...f)):j(m)&&(n.add(m),m(g,...f))),g},mixin(m){return r.mixins.includes(m)||r.mixins.push(m),g},component(m,f){return f?(r.components[m]=f,g):r.components[m]},directive(m,f){return f?(r.directives[m]=f,g):r.directives[m]},mount(m,f,k){if(!u){const G=g._ceVNode||X(l,i);return G.appContext=r,k===!0?k="svg":k===!1&&(k=void 0),f&&e?e(G,m):t(G,m,k),u=!0,g._container=m,m.__vue_app__=g,Es(G.component)}},onUnmount(m){o.push(m)},unmount(){u&&(Rt(o,g._instance,16),t(null,g._container),delete g._container.__vue_app__)},provide(m,f){return r.provides[m]=f,g},runWithContext(m){const f=he;he=g;try{return m()}finally{he=f}}};return g}}let he=null;function jn(t,e){if(et){let s=et.provides;const l=et.parent&&et.parent.provides;l===s&&(s=et.provides=Object.create(l)),s[t]=e}}function ls(t,e,s=!1){const l=et||ht;if(l||he){const i=he?he._context.provides:l?l.parent==null?l.vnode.appContext&&l.vnode.appContext.provides:l.parent.provides:void 0;if(i&&t in i)return i[t];if(arguments.length>1)return s&&j(e)?e.call(l&&l.proxy):e}}const qi={},Ui=()=>Object.create(qi),Bi=t=>Object.getPrototypeOf(t)===qi;function Cn(t,e,s,l=!1){const i={},r=Ui();t.propsDefaults=Object.create(null),Vi(t,e,i,r);for(const n in t.propsOptions[0])n in i||(i[n]=void 0);s?t.props=l?i:$r(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function On(t,e,s,l){const{props:i,attrs:r,vnode:{patchFlag:n}}=t,o=F(i),[u]=t.propsOptions;let g=!1;if((l||n>0)&&!(n&16)){if(n&8){const m=t.vnode.dynamicProps;for(let f=0;f<m.length;f++){let k=m[f];if(As(t.emitsOptions,k))continue;const G=e[k];if(u)if(P(r,k))G!==r[k]&&(r[k]=G,g=!0);else{const I=vt(k);i[I]=Vs(u,o,I,G,t,!1)}else G!==r[k]&&(r[k]=G,g=!0)}}}else{Vi(t,e,i,r)&&(g=!0);let m;for(const f in o)(!e||!P(e,f)&&((m=ue(f))===f||!P(e,m)))&&(u?s&&(s[f]!==void 0||s[m]!==void 0)&&(i[f]=Vs(u,o,f,void 0,t,!0)):delete i[f]);if(r!==o)for(const f in r)(!e||!P(e,f))&&(delete r[f],g=!0)}g&&Ft(t.attrs,"set","")}function Vi(t,e,s,l){const[i,r]=t.propsOptions;let n=!1,o;if(e)for(let u in e){if(Ne(u))continue;const g=e[u];let m;i&&P(i,m=vt(u))?!r||!r.includes(m)?s[m]=g:(o||(o={}))[m]=g:As(t.emitsOptions,u)||(!(u in l)||g!==l[u])&&(l[u]=g,n=!0)}if(r){const u=F(s),g=o||M;for(let m=0;m<r.length;m++){const f=r[m];s[f]=Vs(i,u,f,g[f],t,!P(g,f))}}return n}function Vs(t,e,s,l,i,r){const n=t[s];if(n!=null){const o=P(n,"default");if(o&&l===void 0){const u=n.default;if(n.type!==Function&&!n.skipFactory&&j(u)){const{propsDefaults:g}=i;if(s in g)l=g[s];else{const m=Ue(i);l=g[s]=u.call(null,e),m()}}else l=u;i.ce&&i.ce._setProp(s,l)}n[0]&&(r&&!o?l=!1:n[1]&&(l===""||l===ue(s))&&(l=!0))}return l}const Wn=new WeakMap;function Ki(t,e,s=!1){const l=s?Wn:e.propsCache,i=l.get(t);if(i)return i;const r=t.props,n={},o=[];let u=!1;if(!j(t)){const m=f=>{u=!0;const[k,G]=Ki(f,e,!0);lt(n,k),G&&o.push(...G)};!s&&e.mixins.length&&e.mixins.forEach(m),t.extends&&m(t.extends),t.mixins&&t.mixins.forEach(m)}if(!r&&!u)return B(t)&&l.set(t,_e),_e;if(S(r))for(let m=0;m<r.length;m++){const f=vt(r[m]);Il(f)&&(n[f]=M)}else if(r)for(const m in r){const f=vt(m);if(Il(f)){const k=r[m],G=n[f]=S(k)||j(k)?{type:k}:lt({},k),I=G.type;let W=!1,rt=!0;if(S(I))for(let H=0;H<I.length;++H){const K=I[H],$=j(K)&&K.name;if($==="Boolean"){W=!0;break}else $==="String"&&(rt=!1)}else W=j(I)&&I.name==="Boolean";G[0]=W,G[1]=rt,(W||P(G,"default"))&&o.push(f)}}const g=[n,o];return B(t)&&l.set(t,g),g}function Il(t){return t[0]!=="$"&&!Ne(t)}const $i=t=>t[0]==="_"||t==="$stable",gl=t=>S(t)?t.map(Gt):[Gt(t)],Rn=(t,e,s)=>{if(e._n)return e;const l=nn((...i)=>gl(e(...i)),s);return l._c=!1,l},Ji=(t,e,s)=>{const l=t._ctx;for(const i in t){if($i(i))continue;const r=t[i];if(j(r))e[i]=Rn(i,r,l);else if(r!=null){const n=gl(r);e[i]=()=>n}}},Qi=(t,e)=>{const s=gl(e);t.slots.default=()=>s},Zi=(t,e,s)=>{for(const l in e)(s||l!=="_")&&(t[l]=e[l])},In=(t,e,s)=>{const l=t.slots=Ui();if(t.vnode.shapeFlag&32){const i=e._;i?(Zi(l,e,s),s&&ui(l,"_",i,!0)):Ji(e,l)}else e&&Qi(t,e)},Pn=(t,e,s)=>{const{vnode:l,slots:i}=t;let r=!0,n=M;if(l.shapeFlag&32){const o=e._;o?s&&o===1?r=!1:Zi(i,e,s):(r=!e.$stable,Ji(e,i)),n=e}else e&&(Qi(t,e),n={default:1});if(r)for(const o in i)!$i(o)&&n[o]==null&&delete i[o]},ft=Zn;function zn(t){return Hn(t)}function Hn(t,e){const s=di();s.__VUE__=!0;const{insert:l,remove:i,patchProp:r,createElement:n,createText:o,createComment:u,setText:g,setElementText:m,parentNode:f,nextSibling:k,setScopeId:G=Ot,insertStaticContent:I}=t,W=(a,d,_,c=null,x=null,h=null,w=void 0,A=null,b=!!d.dynamicChildren)=>{if(a===d)return;a&&!De(a,d)&&(c=Je(a),Dt(a,x,h,!0),a=null),d.patchFlag===-2&&(b=!1,d.dynamicChildren=null);const{type:p,ref:D,shapeFlag:E}=d;switch(p){case ks:rt(a,d,_,c);break;case oe:H(a,d,_,c);break;case is:a==null&&K(d,_,c,w);break;case J:Ve(a,d,_,c,x,h,w,A,b);break;default:E&1?Z(a,d,_,c,x,h,w,A,b):E&6?Ke(a,d,_,c,x,h,w,A,b):(E&64||E&128)&&p.process(a,d,_,c,x,h,w,A,b,Ee)}D!=null&&x&&Ms(D,a&&a.ref,h,d||a,!d)},rt=(a,d,_,c)=>{if(a==null)l(d.el=o(d.children),_,c);else{const x=d.el=a.el;d.children!==a.children&&g(x,d.children)}},H=(a,d,_,c)=>{a==null?l(d.el=u(d.children||""),_,c):d.el=a.el},K=(a,d,_,c)=>{[a.el,a.anchor]=I(a.children,d,_,c,a.el,a.anchor)},$=({el:a,anchor:d},_,c)=>{let x;for(;a&&a!==d;)x=k(a),l(a,_,c),a=x;l(d,_,c)},y=({el:a,anchor:d})=>{let _;for(;a&&a!==d;)_=k(a),i(a),a=_;i(d)},Z=(a,d,_,c,x,h,w,A,b)=>{d.type==="svg"?w="svg":d.type==="math"&&(w="mathml"),a==null?qt(d,_,c,x,h,w,A,b):Be(a,d,x,h,w,A,b)},qt=(a,d,_,c,x,h,w,A)=>{let b,p;const{props:D,shapeFlag:E,transition:T,dirs:N}=a;if(b=a.el=n(a.type,h,D&&D.is,D),E&8?m(b,a.children):E&16&&Ut(a.children,b,null,c,x,Cs(a,h),w,A),N&&ee(a,null,c,"created"),Tt(b,a,a.scopeId,w,c),D){for(const U in D)U!=="value"&&!Ne(U)&&r(b,U,null,D[U],h,c);"value"in D&&r(b,"value",null,D.value,h),(p=D.onVnodeBeforeMount)&&yt(p,c,a)}N&&ee(a,null,c,"beforeMount");const O=Fn(x,T);O&&T.beforeEnter(b),l(b,d,_),((p=D&&D.onVnodeMounted)||O||N)&&ft(()=>{p&&yt(p,c,a),O&&T.enter(b),N&&ee(a,null,c,"mounted")},x)},Tt=(a,d,_,c,x)=>{if(_&&G(a,_),c)for(let h=0;h<c.length;h++)G(a,c[h]);if(x){let h=x.subTree;if(d===h||lr(h.type)&&(h.ssContent===d||h.ssFallback===d)){const w=x.vnode;Tt(a,w,w.scopeId,w.slotScopeIds,x.parent)}}},Ut=(a,d,_,c,x,h,w,A,b=0)=>{for(let p=b;p<a.length;p++){const D=a[p]=A?$t(a[p]):Gt(a[p]);W(null,D,d,_,c,x,h,w,A)}},Be=(a,d,_,c,x,h,w)=>{const A=d.el=a.el;let{patchFlag:b,dynamicChildren:p,dirs:D}=d;b|=a.patchFlag&16;const E=a.props||M,T=d.props||M;let N;if(_&&se(_,!1),(N=T.onVnodeBeforeUpdate)&&yt(N,_,d,a),D&&ee(d,a,_,"beforeUpdate"),_&&se(_,!0),(E.innerHTML&&T.innerHTML==null||E.textContent&&T.textContent==null)&&m(A,""),p?Yt(a.dynamicChildren,p,A,_,c,Cs(d,x),h):w||q(a,d,A,null,_,c,Cs(d,x),h,!1),b>0){if(b&16)ke(A,E,T,_,x);else if(b&2&&E.class!==T.class&&r(A,"class",null,T.class,x),b&4&&r(A,"style",E.style,T.style,x),b&8){const O=d.dynamicProps;for(let U=0;U<O.length;U++){const z=O[U],mt=E[z],tt=T[z];(tt!==mt||z==="value")&&r(A,z,mt,tt,x,_)}}b&1&&a.children!==d.children&&m(A,d.children)}else!w&&p==null&&ke(A,E,T,_,x);((N=T.onVnodeUpdated)||D)&&ft(()=>{N&&yt(N,_,d,a),D&&ee(d,a,_,"updated")},c)},Yt=(a,d,_,c,x,h,w)=>{for(let A=0;A<d.length;A++){const b=a[A],p=d[A],D=b.el&&(b.type===J||!De(b,p)||b.shapeFlag&70)?f(b.el):_;W(b,p,D,null,c,x,h,w,!0)}},ke=(a,d,_,c,x)=>{if(d!==_){if(d!==M)for(const h in d)!Ne(h)&&!(h in _)&&r(a,h,d[h],null,x,c);for(const h in _){if(Ne(h))continue;const w=_[h],A=d[h];w!==A&&h!=="value"&&r(a,h,A,w,x,c)}"value"in _&&r(a,"value",d.value,_.value,x)}},Ve=(a,d,_,c,x,h,w,A,b)=>{const p=d.el=a?a.el:o(""),D=d.anchor=a?a.anchor:o("");let{patchFlag:E,dynamicChildren:T,slotScopeIds:N}=d;N&&(A=A?A.concat(N):N),a==null?(l(p,_,c),l(D,_,c),Ut(d.children||[],_,D,x,h,w,A,b)):E>0&&E&64&&T&&a.dynamicChildren?(Yt(a.dynamicChildren,T,_,x,h,w,A),(d.key!=null||x&&d===x.subTree)&&Yi(a,d,!0)):q(a,d,_,D,x,h,w,A,b)},Ke=(a,d,_,c,x,h,w,A,b)=>{d.slotScopeIds=A,a==null?d.shapeFlag&512?x.ctx.activate(d,_,c,w,b):vs(d,_,c,x,h,w,b):xl(a,d,b)},vs=(a,d,_,c,x,h,w)=>{const A=a.component=no(a,c,x);if(Pi(a)&&(A.ctx.renderer=Ee),oo(A,!1,w),A.asyncDep){if(x&&x.registerDep(A,nt,w),!a.el){const b=A.subTree=X(oe);H(null,b,d,_)}}else nt(A,a,d,_,x,h,w)},xl=(a,d,_)=>{const c=d.component=a.component;if(Jn(a,d,_))if(c.asyncDep&&!c.asyncResolved){V(c,d,_);return}else c.next=d,c.update();else d.el=a.el,c.vnode=d},nt=(a,d,_,c,x,h,w)=>{const A=()=>{if(a.isMounted){let{next:E,bu:T,u:N,parent:O,vnode:U}=a;{const _t=Xi(a);if(_t){E&&(E.el=U.el,V(a,E,w)),_t.asyncDep.then(()=>{a.isUnmounted||A()});return}}let z=E,mt;se(a,!1),E?(E.el=U.el,V(a,E,w)):E=U,T&&ss(T),(mt=E.props&&E.props.onVnodeBeforeUpdate)&&yt(mt,O,E,U),se(a,!0);const tt=Ws(a),kt=a.subTree;a.subTree=tt,W(kt,tt,f(kt.el),Je(kt),a,x,h),E.el=tt.el,z===null&&Qn(a,tt.el),N&&ft(N,x),(mt=E.props&&E.props.onVnodeUpdated)&&ft(()=>yt(mt,O,E,U),x)}else{let E;const{el:T,props:N}=d,{bm:O,m:U,parent:z,root:mt,type:tt}=a,kt=je(d);if(se(a,!1),O&&ss(O),!kt&&(E=N&&N.onVnodeBeforeMount)&&yt(E,z,d),se(a,!0),T&&bl){const _t=()=>{a.subTree=Ws(a),bl(T,a.subTree,a,x,null)};kt&&tt.__asyncHydrate?tt.__asyncHydrate(T,a,_t):_t()}else{mt.ce&&mt.ce._injectChildStyle(tt);const _t=a.subTree=Ws(a);W(null,_t,_,c,a,x,h),d.el=_t.el}if(U&&ft(U,x),!kt&&(E=N&&N.onVnodeMounted)){const _t=d;ft(()=>yt(E,z,_t),x)}(d.shapeFlag&256||z&&je(z.vnode)&&z.vnode.shapeFlag&256)&&a.a&&ft(a.a,x),a.isMounted=!0,d=_=c=null}};a.scope.on();const b=a.effect=new fi(A);a.scope.off();const p=a.update=b.run.bind(b),D=a.job=b.runIfDirty.bind(b);D.i=a,D.id=a.uid,b.scheduler=()=>dl(D),se(a,!0),p()},V=(a,d,_)=>{d.component=a;const c=a.vnode.props;a.vnode=d,a.next=null,On(a,d.props,c,_),Pn(a,d.children,_),Qt(),Gl(a),Zt()},q=(a,d,_,c,x,h,w,A,b=!1)=>{const p=a&&a.children,D=a?a.shapeFlag:0,E=d.children,{patchFlag:T,shapeFlag:N}=d;if(T>0){if(T&128){$e(p,E,_,c,x,h,w,A,b);return}else if(T&256){Xt(p,E,_,c,x,h,w,A,b);return}}N&8?(D&16&&we(p,x,h),E!==p&&m(_,E)):D&16?N&16?$e(p,E,_,c,x,h,w,A,b):we(p,x,h,!0):(D&8&&m(_,""),N&16&&Ut(E,_,c,x,h,w,A,b))},Xt=(a,d,_,c,x,h,w,A,b)=>{a=a||_e,d=d||_e;const p=a.length,D=d.length,E=Math.min(p,D);let T;for(T=0;T<E;T++){const N=d[T]=b?$t(d[T]):Gt(d[T]);W(a[T],N,_,null,x,h,w,A,b)}p>D?we(a,x,h,!0,!1,E):Ut(d,_,c,x,h,w,A,b,E)},$e=(a,d,_,c,x,h,w,A,b)=>{let p=0;const D=d.length;let E=a.length-1,T=D-1;for(;p<=E&&p<=T;){const N=a[p],O=d[p]=b?$t(d[p]):Gt(d[p]);if(De(N,O))W(N,O,_,null,x,h,w,A,b);else break;p++}for(;p<=E&&p<=T;){const N=a[E],O=d[T]=b?$t(d[T]):Gt(d[T]);if(De(N,O))W(N,O,_,null,x,h,w,A,b);else break;E--,T--}if(p>E){if(p<=T){const N=T+1,O=N<D?d[N].el:c;for(;p<=T;)W(null,d[p]=b?$t(d[p]):Gt(d[p]),_,O,x,h,w,A,b),p++}}else if(p>T)for(;p<=E;)Dt(a[p],x,h,!0),p++;else{const N=p,O=p,U=new Map;for(p=O;p<=T;p++){const gt=d[p]=b?$t(d[p]):Gt(d[p]);gt.key!=null&&U.set(gt.key,p)}let z,mt=0;const tt=T-O+1;let kt=!1,_t=0;const ve=new Array(tt);for(p=0;p<tt;p++)ve[p]=0;for(p=N;p<=E;p++){const gt=a[p];if(mt>=tt){Dt(gt,x,h,!0);continue}let St;if(gt.key!=null)St=U.get(gt.key);else for(z=O;z<=T;z++)if(ve[z-O]===0&&De(gt,d[z])){St=z;break}St===void 0?Dt(gt,x,h,!0):(ve[St-O]=p+1,St>=_t?_t=St:kt=!0,W(gt,d[St],_,null,x,h,w,A,b),mt++)}const Al=kt?Ln(ve):_e;for(z=Al.length-1,p=tt-1;p>=0;p--){const gt=O+p,St=d[gt],kl=gt+1<D?d[gt+1].el:c;ve[p]===0?W(null,St,_,kl,x,h,w,A,b):kt&&(z<0||p!==Al[z]?te(St,_,kl,2):z--)}}},te=(a,d,_,c,x=null)=>{const{el:h,type:w,transition:A,children:b,shapeFlag:p}=a;if(p&6){te(a.component.subTree,d,_,c);return}if(p&128){a.suspense.move(d,_,c);return}if(p&64){w.move(a,d,_,Ee);return}if(w===J){l(h,d,_);for(let E=0;E<b.length;E++)te(b[E],d,_,c);l(a.anchor,d,_);return}if(w===is){$(a,d,_);return}if(c!==2&&p&1&&A)if(c===0)A.beforeEnter(h),l(h,d,_),ft(()=>A.enter(h),x);else{const{leave:E,delayLeave:T,afterLeave:N}=A,O=()=>l(h,d,_),U=()=>{E(h,()=>{O(),N&&N()})};T?T(h,O,U):U()}else l(h,d,_)},Dt=(a,d,_,c=!1,x=!1)=>{const{type:h,props:w,ref:A,children:b,dynamicChildren:p,shapeFlag:D,patchFlag:E,dirs:T,cacheIndex:N}=a;if(E===-2&&(x=!1),A!=null&&Ms(A,null,_,a,!0),N!=null&&(d.renderCache[N]=void 0),D&256){d.ctx.deactivate(a);return}const O=D&1&&T,U=!je(a);let z;if(U&&(z=w&&w.onVnodeBeforeUnmount)&&yt(z,d,a),D&6)_r(a.component,_,c);else{if(D&128){a.suspense.unmount(_,c);return}O&&ee(a,null,d,"beforeUnmount"),D&64?a.type.remove(a,d,_,Ee,c):p&&!p.hasOnce&&(h!==J||E>0&&E&64)?we(p,d,_,!1,!0):(h===J&&E&384||!x&&D&16)&&we(b,d,_),c&&hl(a)}(U&&(z=w&&w.onVnodeUnmounted)||O)&&ft(()=>{z&&yt(z,d,a),O&&ee(a,null,d,"unmounted")},_)},hl=a=>{const{type:d,el:_,anchor:c,transition:x}=a;if(d===J){mr(_,c);return}if(d===is){y(a);return}const h=()=>{i(_),x&&!x.persisted&&x.afterLeave&&x.afterLeave()};if(a.shapeFlag&1&&x&&!x.persisted){const{leave:w,delayLeave:A}=x,b=()=>w(_,h);A?A(a.el,h,b):b()}else h()},mr=(a,d)=>{let _;for(;a!==d;)_=k(a),i(a),a=_;i(d)},_r=(a,d,_)=>{const{bum:c,scope:x,job:h,subTree:w,um:A,m:b,a:p}=a;Pl(b),Pl(p),c&&ss(c),x.stop(),h&&(h.flags|=8,Dt(w,a,d,_)),A&&ft(A,d),ft(()=>{a.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&a.asyncDep&&!a.asyncResolved&&a.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},we=(a,d,_,c=!1,x=!1,h=0)=>{for(let w=h;w<a.length;w++)Dt(a[w],d,_,c,x)},Je=a=>{if(a.shapeFlag&6)return Je(a.component.subTree);if(a.shapeFlag&128)return a.suspense.next();const d=k(a.anchor||a.el),_=d&&d[on];return _?k(_):d};let Ts=!1;const cl=(a,d,_)=>{a==null?d._vnode&&Dt(d._vnode,null,null,!0):W(d._vnode||null,a,d,null,null,null,_),d._vnode=a,Ts||(Ts=!0,Gl(),Oi(),Ts=!1)},Ee={p:W,um:Dt,m:te,r:hl,mt:vs,mc:Ut,pc:q,pbc:Yt,n:Je,o:t};let pl,bl;return{render:cl,hydrate:pl,createApp:Gn(cl,pl)}}function Cs({type:t,props:e},s){return s==="svg"&&t==="foreignObject"||s==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:s}function se({effect:t,job:e},s){s?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Fn(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Yi(t,e,s=!1){const l=t.children,i=e.children;if(S(l)&&S(i))for(let r=0;r<l.length;r++){const n=l[r];let o=i[r];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=i[r]=$t(i[r]),o.el=n.el),!s&&o.patchFlag!==-2&&Yi(n,o)),o.type===ks&&(o.el=n.el)}}function Ln(t){const e=t.slice(),s=[0];let l,i,r,n,o;const u=t.length;for(l=0;l<u;l++){const g=t[l];if(g!==0){if(i=s[s.length-1],t[i]<g){e[l]=i,s.push(l);continue}for(r=0,n=s.length-1;r<n;)o=r+n>>1,t[s[o]]<g?r=o+1:n=o;g<t[s[r]]&&(r>0&&(e[l]=s[r-1]),s[r]=l)}}for(r=s.length,n=s[r-1];r-- >0;)s[r]=n,n=e[n];return s}function Xi(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Xi(e)}function Pl(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Mn=Symbol.for("v-scx"),qn=()=>ls(Mn);function Os(t,e,s){return tr(t,e,s)}function tr(t,e,s=M){const{immediate:l,deep:i,flush:r,once:n}=s,o=lt({},s);let u;if(ws)if(r==="sync"){const k=qn();u=k.__watcherHandles||(k.__watcherHandles=[])}else if(!e||l)o.once=!0;else return{stop:Ot,resume:Ot,pause:Ot};const g=et;o.call=(k,G,I)=>Rt(k,g,G,I);let m=!1;r==="post"?o.scheduler=k=>{ft(k,g&&g.suspense)}:r!=="sync"&&(m=!0,o.scheduler=(k,G)=>{G?k():dl(k)}),o.augmentJob=k=>{e&&(k.flags|=4),m&&(k.flags|=2,g&&(k.id=g.uid,k.i=g))};const f=en(t,e,o);return u&&u.push(f),f}function Un(t,e,s){const l=this.proxy,i=Q(t)?t.includes(".")?er(l,t):()=>l[t]:t.bind(l,l);let r;j(e)?r=e:(r=e.handler,s=e);const n=Ue(this),o=tr(i,r.bind(l),s);return n(),o}function er(t,e){const s=e.split(".");return()=>{let l=t;for(let i=0;i<s.length&&l;i++)l=l[s[i]];return l}}const Bn=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${vt(e)}Modifiers`]||t[`${ue(e)}Modifiers`];function Vn(t,e,...s){if(t.isUnmounted)return;const l=t.vnode.props||M;let i=s;const r=e.startsWith("update:"),n=r&&Bn(l,e.slice(7));n&&(n.trim&&(i=s.map(m=>Q(m)?m.trim():m)),n.number&&(i=s.map(os)));let o,u=l[o=Ds(e)]||l[o=Ds(vt(e))];!u&&r&&(u=l[o=Ds(ue(e))]),u&&Rt(u,t,6,i);const g=l[o+"Once"];if(g){if(!t.emitted)t.emitted={};else if(t.emitted[o])return;t.emitted[o]=!0,Rt(g,t,6,i)}}function sr(t,e,s=!1){const l=e.emitsCache,i=l.get(t);if(i!==void 0)return i;const r=t.emits;let n={},o=!1;if(!j(t)){const u=g=>{const m=sr(g,e,!0);m&&(o=!0,lt(n,m))};!s&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}return!r&&!o?(B(t)&&l.set(t,null),null):(S(r)?r.forEach(u=>n[u]=null):lt(n,r),B(t)&&l.set(t,n),n)}function As(t,e){return!t||!gs(e)?!1:(e=e.slice(2).replace(/Once$/,""),P(t,e[0].toLowerCase()+e.slice(1))||P(t,ue(e))||P(t,e))}function Ws(t){const{type:e,vnode:s,proxy:l,withProxy:i,propsOptions:[r],slots:n,attrs:o,emit:u,render:g,renderCache:m,props:f,data:k,setupState:G,ctx:I,inheritAttrs:W}=t,rt=us(t);let H,K;try{if(s.shapeFlag&4){const y=i||l,Z=y;H=Gt(g.call(Z,y,m,f,G,k,I)),K=o}else{const y=e;H=Gt(y.length>1?y(f,{attrs:o,slots:n,emit:u}):y(f,null)),K=e.props?o:Kn(o)}}catch(y){Oe.length=0,ps(y,t,1),H=X(oe)}let $=H;if(K&&W!==!1){const y=Object.keys(K),{shapeFlag:Z}=$;y.length&&Z&7&&(r&&y.some(Qs)&&(K=$n(K,r)),$=pe($,K,!1,!0))}return s.dirs&&($=pe($,null,!1,!0),$.dirs=$.dirs?$.dirs.concat(s.dirs):s.dirs),s.transition&&ml($,s.transition),H=$,us(rt),H}const Kn=t=>{let e;for(const s in t)(s==="class"||s==="style"||gs(s))&&((e||(e={}))[s]=t[s]);return e},$n=(t,e)=>{const s={};for(const l in t)(!Qs(l)||!(l.slice(9)in e))&&(s[l]=t[l]);return s};function Jn(t,e,s){const{props:l,children:i,component:r}=t,{props:n,children:o,patchFlag:u}=e,g=r.emitsOptions;if(e.dirs||e.transition)return!0;if(s&&u>=0){if(u&1024)return!0;if(u&16)return l?zl(l,n,g):!!n;if(u&8){const m=e.dynamicProps;for(let f=0;f<m.length;f++){const k=m[f];if(n[k]!==l[k]&&!As(g,k))return!0}}}else return(i||o)&&(!o||!o.$stable)?!0:l===n?!1:l?n?zl(l,n,g):!0:!!n;return!1}function zl(t,e,s){const l=Object.keys(e);if(l.length!==Object.keys(t).length)return!0;for(let i=0;i<l.length;i++){const r=l[i];if(e[r]!==t[r]&&!As(s,r))return!0}return!1}function Qn({vnode:t,parent:e},s){for(;e;){const l=e.subTree;if(l.suspense&&l.suspense.activeBranch===t&&(l.el=t.el),l===t)(t=e.vnode).el=s,e=e.parent;else break}}const lr=t=>t.__isSuspense;function Zn(t,e){e&&e.pendingBranch?S(t)?e.effects.push(...t):e.effects.push(t):rn(t)}const J=Symbol.for("v-fgt"),ks=Symbol.for("v-txt"),oe=Symbol.for("v-cmt"),is=Symbol.for("v-stc"),Oe=[];let ct=null;function C(t=!1){Oe.push(ct=t?null:[])}function Yn(){Oe.pop(),ct=Oe[Oe.length-1]||null}let ze=1;function Hl(t){ze+=t,t<0&&ct&&(ct.hasOnce=!0)}function ir(t){return t.dynamicChildren=ze>0?ct||_e:null,Yn(),ze>0&&ct&&ct.push(t),t}function R(t,e,s,l,i,r){return ir(v(t,e,s,l,i,r,!0))}function ae(t,e,s,l,i){return ir(X(t,e,s,l,i,!0))}function Xn(t){return t?t.__v_isVNode===!0:!1}function De(t,e){return t.type===e.type&&t.key===e.key}const rr=({key:t})=>t??null,rs=({ref:t,ref_key:e,ref_for:s})=>(typeof t=="number"&&(t=""+t),t!=null?Q(t)||ut(t)||j(t)?{i:ht,r:t,k:e,f:!!s}:t:null);function v(t,e=null,s=null,l=0,i=null,r=t===J?0:1,n=!1,o=!1){const u={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&rr(e),ref:e&&rs(e),scopeId:Ri,slotScopeIds:null,children:s,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:l,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:ht};return o?(fl(u,s),r&128&&t.normalize(u)):s&&(u.shapeFlag|=Q(s)?8:16),ze>0&&!n&&ct&&(u.patchFlag>0||r&6)&&u.patchFlag!==32&&ct.push(u),u}const X=to;function to(t,e=null,s=null,l=0,i=null,r=!1){if((!t||t===kn)&&(t=oe),Xn(t)){const o=pe(t,e,!0);return s&&fl(o,s),ze>0&&!r&&ct&&(o.shapeFlag&6?ct[ct.indexOf(t)]=o:ct.push(o)),o.patchFlag=-2,o}if(go(t)&&(t=t.__vccOpts),e){e=eo(e);let{class:o,style:u}=e;o&&!Q(o)&&(e.class=jt(o)),B(u)&&(ol(u)&&!S(u)&&(u=lt({},u)),e.style=Xs(u))}const n=Q(t)?1:lr(t)?128:an(t)?64:B(t)?4:j(t)?2:0;return v(t,e,s,l,i,n,r,!0)}function eo(t){return t?ol(t)||Bi(t)?lt({},t):t:null}function pe(t,e,s=!1,l=!1){const{props:i,ref:r,patchFlag:n,children:o,transition:u}=t,g=e?lo(i||{},e):i,m={__v_isVNode:!0,__v_skip:!0,type:t.type,props:g,key:g&&rr(g),ref:e&&e.ref?s&&r?S(r)?r.concat(rs(e)):[r,rs(e)]:rs(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==J?n===-1?16:n|16:n,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:u,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&pe(t.ssContent),ssFallback:t.ssFallback&&pe(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return u&&l&&ml(m,u.clone(m)),m}function ms(t=" ",e=0){return X(ks,null,t,e)}function so(t,e){const s=X(is,null,t);return s.staticCount=e,s}function Ht(t="",e=!1){return e?(C(),ae(oe,null,t)):X(oe,null,t)}function Gt(t){return t==null||typeof t=="boolean"?X(oe):S(t)?X(J,null,t.slice()):typeof t=="object"?$t(t):X(ks,null,String(t))}function $t(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:pe(t)}function fl(t,e){let s=0;const{shapeFlag:l}=t;if(e==null)e=null;else if(S(e))s=16;else if(typeof e=="object")if(l&65){const i=e.default;i&&(i._c&&(i._d=!1),fl(t,i()),i._c&&(i._d=!0));return}else{s=32;const i=e._;!i&&!Bi(e)?e._ctx=ht:i===3&&ht&&(ht.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else j(e)?(e={default:e,_ctx:ht},s=32):(e=String(e),l&64?(s=16,e=[ms(e)]):s=8);t.children=e,t.shapeFlag|=s}function lo(...t){const e={};for(let s=0;s<t.length;s++){const l=t[s];for(const i in l)if(i==="class")e.class!==l.class&&(e.class=jt([e.class,l.class]));else if(i==="style")e.style=Xs([e.style,l.style]);else if(gs(i)){const r=e[i],n=l[i];n&&r!==n&&!(S(r)&&r.includes(n))&&(e[i]=r?[].concat(r,n):n)}else i!==""&&(e[i]=l[i])}return e}function yt(t,e,s,l=null){Rt(t,e,7,[s,l])}const io=Mi();let ro=0;function no(t,e,s){const l=t.type,i=(e?e.appContext:t.appContext)||io,r={uid:ro++,vnode:t,type:l,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Tr(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ki(l,i),emitsOptions:sr(l,i),emit:null,emitted:null,propsDefaults:M,inheritAttrs:l.inheritAttrs,ctx:M,data:M,props:M,attrs:M,slots:M,refs:M,setupState:M,setupContext:null,suspense:s,suspenseId:s?s.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Vn.bind(null,r),t.ce&&t.ce(r),r}let et=null,_s,Ks;{const t=di(),e=(s,l)=>{let i;return(i=t[s])||(i=t[s]=[]),i.push(l),r=>{i.length>1?i.forEach(n=>n(r)):i[0](r)}};_s=e("__VUE_INSTANCE_SETTERS__",s=>et=s),Ks=e("__VUE_SSR_SETTERS__",s=>ws=s)}const Ue=t=>{const e=et;return _s(t),t.scope.on(),()=>{t.scope.off(),_s(e)}},Fl=()=>{et&&et.scope.off(),_s(null)};function nr(t){return t.vnode.shapeFlag&4}let ws=!1;function oo(t,e=!1,s=!1){e&&Ks(e);const{props:l,children:i}=t.vnode,r=nr(t);Cn(t,l,r,e),In(t,i,s);const n=r?ao(t,e):void 0;return e&&Ks(!1),n}function ao(t,e){const s=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,En);const{setup:l}=s;if(l){const i=t.setupContext=l.length>1?mo(t):null,r=Ue(t);Qt();const n=qe(l,t,0,[t.props,i]);if(Zt(),r(),ni(n)){if(je(t)||Ii(t),n.then(Fl,Fl),e)return n.then(o=>{Ll(t,o,e)}).catch(o=>{ps(o,t,0)});t.asyncDep=n}else Ll(t,n,e)}else or(t,e)}function Ll(t,e,s){j(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:B(e)&&(t.setupState=Ni(e)),or(t,s)}let Ml;function or(t,e,s){const l=t.type;if(!t.render){if(!e&&Ml&&!l.render){const i=l.template||_l(t).template;if(i){const{isCustomElement:r,compilerOptions:n}=t.appContext.config,{delimiters:o,compilerOptions:u}=l,g=lt(lt({isCustomElement:r,delimiters:o},n),u);l.render=Ml(i,g)}}t.render=l.render||Ot}{const i=Ue(t);Qt();try{vn(t)}finally{Zt(),i()}}}const uo={get(t,e){return it(t,"get",""),t[e]}};function mo(t){const e=s=>{t.exposed=s||{}};return{attrs:new Proxy(t.attrs,uo),slots:t.slots,emit:t.emit,expose:e}}function Es(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Ni(Jr(t.exposed)),{get(e,s){if(s in e)return e[s];if(s in Ce)return Ce[s](t)},has(e,s){return s in e||s in Ce}})):t.proxy}function _o(t,e=!0){return j(t)?t.displayName||t.name:t.name||e&&t.__name}function go(t){return j(t)&&"__vccOpts"in t}const fo=(t,e)=>Xr(t,e,ws),xo="3.5.5";/**
* @vue/runtime-dom v3.5.5
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let $s;const ql=typeof window<"u"&&window.trustedTypes;if(ql)try{$s=ql.createPolicy("vue",{createHTML:t=>t})}catch{}const ar=$s?t=>$s.createHTML(t):t=>t,ho="http://www.w3.org/2000/svg",co="http://www.w3.org/1998/Math/MathML",Pt=typeof document<"u"?document:null,Ul=Pt&&Pt.createElement("template"),po={insert:(t,e,s)=>{e.insertBefore(t,s||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,s,l)=>{const i=e==="svg"?Pt.createElementNS(ho,t):e==="mathml"?Pt.createElementNS(co,t):s?Pt.createElement(t,{is:s}):Pt.createElement(t);return t==="select"&&l&&l.multiple!=null&&i.setAttribute("multiple",l.multiple),i},createText:t=>Pt.createTextNode(t),createComment:t=>Pt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Pt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,s,l,i,r){const n=s?s.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),s),!(i===r||!(i=i.nextSibling)););else{Ul.innerHTML=ar(l==="svg"?`<svg>${t}</svg>`:l==="mathml"?`<math>${t}</math>`:t);const o=Ul.content;if(l==="svg"||l==="mathml"){const u=o.firstChild;for(;u.firstChild;)o.appendChild(u.firstChild);o.removeChild(u)}e.insertBefore(o,s)}return[n?n.nextSibling:e.firstChild,s?s.previousSibling:e.lastChild]}},bo=Symbol("_vtc");function Ao(t,e,s){const l=t[bo];l&&(e=(e?[e,...l]:[...l]).join(" ")),e==null?t.removeAttribute("class"):s?t.setAttribute("class",e):t.className=e}const Bl=Symbol("_vod"),ko=Symbol("_vsh"),wo=Symbol(""),Eo=/(^|;)\s*display\s*:/;function vo(t,e,s){const l=t.style,i=Q(s);let r=!1;if(s&&!i){if(e)if(Q(e))for(const n of e.split(";")){const o=n.slice(0,n.indexOf(":")).trim();s[o]==null&&ns(l,o,"")}else for(const n in e)s[n]==null&&ns(l,n,"");for(const n in s)n==="display"&&(r=!0),ns(l,n,s[n])}else if(i){if(e!==s){const n=l[wo];n&&(s+=";"+n),l.cssText=s,r=Eo.test(s)}}else e&&t.removeAttribute("style");Bl in t&&(t[Bl]=r?l.display:"",t[ko]&&(l.display="none"))}const Vl=/\s*!important$/;function ns(t,e,s){if(S(s))s.forEach(l=>ns(t,e,l));else if(s==null&&(s=""),e.startsWith("--"))t.setProperty(e,s);else{const l=To(t,e);Vl.test(s)?t.setProperty(ue(l),s.replace(Vl,""),"important"):t[l]=s}}const Kl=["Webkit","Moz","ms"],Rs={};function To(t,e){const s=Rs[e];if(s)return s;let l=vt(e);if(l!=="filter"&&l in t)return Rs[e]=l;l=xs(l);for(let i=0;i<Kl.length;i++){const r=Kl[i]+l;if(r in t)return Rs[e]=r}return e}const $l="http://www.w3.org/1999/xlink";function Jl(t,e,s,l,i,r=Er(e)){l&&e.startsWith("xlink:")?s==null?t.removeAttributeNS($l,e.slice(6,e.length)):t.setAttributeNS($l,e,s):s==null||r&&!mi(s)?t.removeAttribute(e):t.setAttribute(e,r?"":Wt(s)?String(s):s)}function Do(t,e,s,l){if(e==="innerHTML"||e==="textContent"){s!=null&&(t[e]=e==="innerHTML"?ar(s):s);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const n=i==="OPTION"?t.getAttribute("value")||"":t.value,o=s==null?t.type==="checkbox"?"on":"":String(s);(n!==o||!("_value"in t))&&(t.value=o),s==null&&t.removeAttribute(e),t._value=s;return}let r=!1;if(s===""||s==null){const n=typeof t[e];n==="boolean"?s=mi(s):s==null&&n==="string"?(s="",r=!0):n==="number"&&(s=0,r=!0)}try{t[e]=s}catch{}r&&t.removeAttribute(e)}function Jt(t,e,s,l){t.addEventListener(e,s,l)}function So(t,e,s,l){t.removeEventListener(e,s,l)}const Ql=Symbol("_vei");function yo(t,e,s,l,i=null){const r=t[Ql]||(t[Ql]={}),n=r[e];if(l&&n)n.value=l;else{const[o,u]=No(e);if(l){const g=r[e]=Co(l,i);Jt(t,o,g,u)}else n&&(So(t,o,n,u),r[e]=void 0)}}const Zl=/(?:Once|Passive|Capture)$/;function No(t){let e;if(Zl.test(t)){e={};let l;for(;l=t.match(Zl);)t=t.slice(0,t.length-l[0].length),e[l[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ue(t.slice(2)),e]}let Is=0;const Go=Promise.resolve(),jo=()=>Is||(Go.then(()=>Is=0),Is=Date.now());function Co(t,e){const s=l=>{if(!l._vts)l._vts=Date.now();else if(l._vts<=s.attached)return;Rt(Oo(l,s.value),e,5,[l])};return s.value=t,s.attached=jo(),s}function Oo(t,e){if(S(e)){const s=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{s.call(t),t._stopped=!0},e.map(l=>i=>!i._stopped&&l&&l(i))}else return e}const Yl=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Wo=(t,e,s,l,i,r)=>{const n=i==="svg";e==="class"?Ao(t,l,n):e==="style"?vo(t,s,l):gs(e)?Qs(e)||yo(t,e,s,l,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Ro(t,e,l,n))?(Do(t,e,l),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Jl(t,e,l,n,r,e!=="value")):(e==="true-value"?t._trueValue=l:e==="false-value"&&(t._falseValue=l),Jl(t,e,l,n))};function Ro(t,e,s,l){if(l)return!!(e==="innerHTML"||e==="textContent"||e in t&&Yl(e)&&j(s));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Yl(e)&&Q(s)?!1:!!(e in t||t._isVueCE&&(/[A-Z]/.test(e)||!Q(s)))}const be=t=>{const e=t.props["onUpdate:modelValue"]||!1;return S(e)?s=>ss(e,s):e};function Io(t){t.target.composing=!0}function Xl(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Lt=Symbol("_assign"),Po={created(t,{modifiers:{lazy:e,trim:s,number:l}},i){t[Lt]=be(i);const r=l||i.props&&i.props.type==="number";Jt(t,e?"change":"input",n=>{if(n.target.composing)return;let o=t.value;s&&(o=o.trim()),r&&(o=os(o)),t[Lt](o)}),s&&Jt(t,"change",()=>{t.value=t.value.trim()}),e||(Jt(t,"compositionstart",Io),Jt(t,"compositionend",Xl),Jt(t,"change",Xl))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:s,modifiers:{lazy:l,trim:i,number:r}},n){if(t[Lt]=be(n),t.composing)return;const o=(r||t.type==="number")&&!/^0\d/.test(t.value)?os(t.value):t.value,u=e??"";o!==u&&(document.activeElement===t&&t.type!=="range"&&(l&&e===s||i&&t.value.trim()===u)||(t.value=u))}},zo={deep:!0,created(t,e,s){t[Lt]=be(s),Jt(t,"change",()=>{const l=t._modelValue,i=He(t),r=t.checked,n=t[Lt];if(S(l)){const o=tl(l,i),u=o!==-1;if(r&&!u)n(l.concat(i));else if(!r&&u){const g=[...l];g.splice(o,1),n(g)}}else if(Ae(l)){const o=new Set(l);r?o.add(i):o.delete(i),n(o)}else n(ur(t,r))})},mounted:ti,beforeUpdate(t,e,s){t[Lt]=be(s),ti(t,e,s)}};function ti(t,{value:e,oldValue:s},l){t._modelValue=e;let i;S(e)?i=tl(e,l.props.value)>-1:Ae(e)?i=e.has(l.props.value):i=Le(e,ur(t,!0)),t.checked!==i&&(t.checked=i)}const Ps={deep:!0,created(t,{value:e,modifiers:{number:s}},l){const i=Ae(e);Jt(t,"change",()=>{const r=Array.prototype.filter.call(t.options,n=>n.selected).map(n=>s?os(He(n)):He(n));t[Lt](t.multiple?i?new Set(r):r:r[0]),t._assigning=!0,ji(()=>{t._assigning=!1})}),t[Lt]=be(l)},mounted(t,{value:e,modifiers:{number:s}}){ei(t,e)},beforeUpdate(t,e,s){t[Lt]=be(s)},updated(t,{value:e,modifiers:{number:s}}){t._assigning||ei(t,e)}};function ei(t,e,s){const l=t.multiple,i=S(e);if(!(l&&!i&&!Ae(e))){for(let r=0,n=t.options.length;r<n;r++){const o=t.options[r],u=He(o);if(l)if(i){const g=typeof u;g==="string"||g==="number"?o.selected=e.some(m=>String(m)===String(u)):o.selected=tl(e,u)>-1}else o.selected=e.has(u);else if(Le(He(o),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!l&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function He(t){return"_value"in t?t._value:t.value}function ur(t,e){const s=e?"_trueValue":"_falseValue";return s in t?t[s]:e}const Ho=lt({patchProp:Wo},po);let si;function Fo(){return si||(si=zn(Ho))}const Lo=(...t)=>{const e=Fo().createApp(...t),{mount:s}=e;return e.mount=l=>{const i=qo(l);if(!i)return;const r=e._component;!j(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const n=s(i,!1,Mo(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),n},e};function Mo(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function qo(t){return Q(t)?document.querySelector(t):t}const bt=(t,e)=>{const s=t.__vccOpts||t;for(const[l,i]of e)s[l]=i;return s},Uo={};function Bo(t,e){return C(),R(J,null,[e[0]||(e[0]=v("h1",null,"GlossySnake",-1)),e[1]||(e[1]=v("p",null,[ms("INDEX PAGE | "),v("a",{href:"https://github.com/parkchamchi/GlossySnake"},"Repo")],-1))],64)}const Vo=bt(Uo,[["render",Bo],["__scopeId","data-v-76cc459c"]]),Vt=Me({}),Y={on(t,e){Vt[t]||(Vt[t]=[]),Vt[t].push(e)},off(t,e){Vt[t]&&(Vt[t]=Vt[t].filter(s=>s!==e))},emit(t,e){Vt[t]&&Vt[t].forEach(s=>s(e))}};function st(){}st.prototype.host="https://api.glossysnake.com";st.prototype.api="/api/v4";st.prototype.uri=function(t){return this.host+this.api+t};st.prototype.jsonHelper=async function(t){try{return await t.json()}catch(e){return console.log(e),{error:JSON.parse(JSON.stringify(e,Object.getOwnPropertyNames(e)))}}};st.prototype.submit=async function(t,e="GET",s=null,l=!0){const i=this.uri(t);let r={method:e,headers:{"Content-type":"application/json; charset=UTF-8"},credentials:"include"};e!="GET"&&(r.body=JSON.stringify(s)),l&&(r.headers.Authorization="Token "+st._key);const n=await fetch(i,r);if(!n.ok){const o=await this.jsonHelper(n),u=i+": "+n.statusText+`
> `+JSON.stringify(o);throw Y.emit("addAlert",{message:u,alertClass:"alert-warning"}),new Error(u)}return this.emitCorpusesUpdate(t),n};st.prototype.emitCorpusesUpdate=async function(t){["/corpuses/","/tasks/","/user/check","/user/get-temp-user","/user/logout","/rest-auth/registration/","/rest-auth/login/","/rest-auth/logout/"].some(s=>t.endsWith(s))||(Y.emit("updateCorpuses"),Y.emit("updateTasks"))};const Ko={data(){return{api:new st,loggedin:!1}},computed:{userinfo(){return this.loggedin?"Guest.":"Log in."}},methods:{meow(){console.log("meow")},async getTempUser(){const e=await(await this.api.submit("/user/get-temp-user","GET",null,!1)).json();return e.success?(st._key=e.key,!0):(console.error("get-temp-user unsuccessful"),!1)},async updateUser(){if(!st._key&&!await this.getTempUser()){console.error("could not get the temp user.");return}this.loggedin=!0,Y.emit("updateCorpuses"),Y.emit("updateTasks")},async logout(){this.api.submit("/user/logout").then(()=>{st._key=null,this.loggedin=!1,this.updateUser()})}},async created(){await this.updateUser()}},$o={id:"frontend_auth_div"},Jo={class:"userinfo_p"};function Qo(t,e,s,l,i,r){return C(),R("div",$o,[v("p",Jo,pt(r.userinfo),1),v("p",{onClick:e[0]||(e[0]=n=>r.logout()),class:"btn logout_button"}," Logout ")])}const Zo=bt(Ko,[["render",Qo],["__scopeId","data-v-bb2b082d"]]),Ct=Me({annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English",toRemote:!0}),Yo={data(){return Ct},watch:{annotator_name(){this.emitChange()},lang_from(){this.emitChange()},lang_to(){this.emitChange()},toRemote(){this.emitChange()}},methods:{emitChange(){Ct.annotator_name=this.annotator_name,Ct.lang_from=this.lang_from,Ct.lang_to=this.lang_to,Ct.toRemote=this.toRemote}}},Xo={class:"container mt-4"},ta={class:"row"},ea={class:"col-md-4"},sa={class:"col-md-4"},la={class:"col-md-4"};function ia(t,e,s,l,i,r){return C(),R(J,null,[v("div",Xo,[v("div",ta,[v("div",ea,[e[5]||(e[5]=v("label",{for:"annotator_name"},"annotator_name:",-1)),Se(v("select",{"onUpdate:modelValue":e[0]||(e[0]=n=>t.annotator_name=n),name:"annotator_name",id:"annotator_name_select",class:"form-control"},e[4]||(e[4]=[so('<option value="dummy">dummy</option><option value="chatgpt_ft0">chatgpt_ft0</option><option value="chatgpt_gpt-4o-mini-untrained_0">chatgpt_gpt-4o-mini-untrained_0</option><option value="chatgpt_gpt-4o-mini-pretrained_0">chatgpt_gpt-4o-mini-pretrained_0</option><option value="chatgpt_gpt-3.5-turbo-untrained_0">chatgpt_gpt-3.5-turbo-untrained_0</option><option value="chatgpt_gpt-3.5-turbo-pretrained_0">chatgpt_gpt-3.5-turbo-pretrained_0</option>',6)]),512),[[Ps,t.annotator_name]])]),v("div",sa,[e[7]||(e[7]=v("label",{for:"lang_from"},"lang_from:",-1)),Se(v("select",{"onUpdate:modelValue":e[1]||(e[1]=n=>t.lang_from=n),name:"lang_from",id:"lang_from_select",class:"form-control"},e[6]||(e[6]=[v("option",{value:"French"},"French",-1),v("option",{value:"German"},"German",-1)]),512),[[Ps,t.lang_from]])]),v("div",la,[e[9]||(e[9]=v("label",{for:"lang_to"},"lang_to:",-1)),Se(v("select",{"onUpdate:modelValue":e[2]||(e[2]=n=>t.lang_to=n),name:"lang_to",id:"lang_to_select",class:"form-control"},e[8]||(e[8]=[v("option",{value:"English"},"English",-1)]),512),[[Ps,t.lang_to]])])])]),e[12]||(e[12]=v("br",null,null,-1)),v("div",null,[Se(v("input",{"onUpdate:modelValue":e[3]||(e[3]=n=>t.toRemote=n),type:"checkbox",name:"toRemote",id:"toRemote_input",class:"form-check-input",checked:""},null,512),[[zo,t.toRemote]]),e[10]||(e[10]=v("label",{for:"toRemote_input",class:"form-check-label"},"To the remote server",-1)),e[11]||(e[11]=v("p",null,"Don't turn this off yet (WIP)",-1))])],64)}const ra=bt(Yo,[["render",ia]]),na=[{corpus_id:"Winterreise",corpuses_history:[{paragraphs:[{pstate:"ANNOTATED",tokens:[{txt:"#",is_delimiter:!1,gloss:"#"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Gute",is_delimiter:!1,gloss:"Good"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Nacht.",is_delimiter:!1,gloss:"Night."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:"# Gute Nacht.",annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Fremd",is_delimiter:!1,gloss:"Stranger"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"bin",is_delimiter:!1,gloss:"am"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"eingezogen,",is_delimiter:!1,gloss:"gone-in,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Fremd",is_delimiter:!1,gloss:"stranger"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"zieh’",is_delimiter:!1,gloss:"draw"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"wieder",is_delimiter:!1,gloss:"again (now)"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"aus.",is_delimiter:!1,gloss:"out."},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Der",is_delimiter:!1,gloss:"The"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Mai",is_delimiter:!1,gloss:"May"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"war",is_delimiter:!1,gloss:"was"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mir",is_delimiter:!1,gloss:"to-me"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"gewogen",is_delimiter:!1,gloss:"favourable"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Mit",is_delimiter:!1,gloss:"With"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"manchem",is_delimiter:!1,gloss:"many-a"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Blumenstrauß.",is_delimiter:!1,gloss:"flower-bunch."},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Das",is_delimiter:!1,gloss:"The"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Mädchen",is_delimiter:!1,gloss:"girl"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sprach",is_delimiter:!1,gloss:"spake"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"von",is_delimiter:!1,gloss:"of"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Liebe,",is_delimiter:!1,gloss:"love,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Die",is_delimiter:!1,gloss:"The"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Mutter",is_delimiter:!1,gloss:"mother"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"gar",is_delimiter:!1,gloss:"even"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"von",is_delimiter:!1,gloss:"of"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Eh’",is_delimiter:!1,gloss:"marriage"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"—",is_delimiter:!1,gloss:"—"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Nun",is_delimiter:!1,gloss:"Now"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ist",is_delimiter:!1,gloss:"is"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"die",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Welt",is_delimiter:!1,gloss:"world"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"so",is_delimiter:!1,gloss:"so"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"trübe,",is_delimiter:!1,gloss:"dreary,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Der",is_delimiter:!1,gloss:"The"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Weg",is_delimiter:!1,gloss:"way"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"gehüllt",is_delimiter:!1,gloss:"enveloped"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"in",is_delimiter:!1,gloss:"in"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Schnee.",is_delimiter:!1,gloss:"snow."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Fremd bin ich eingezogen,
Fremd zieh’ ich wieder aus.
Der Mai war mir gewogen
Mit manchem Blumenstrauß.
Das Mädchen sprach von Liebe,
Die Mutter gar von Eh’ —
Nun ist die Welt so trübe,
Der Weg gehüllt in Schnee.`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"kann",is_delimiter:!1,gloss:"can"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"zu",is_delimiter:!1,gloss:"to"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"meiner",is_delimiter:!1,gloss:"my"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Reisen",is_delimiter:!1,gloss:"journeys"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Nicht",is_delimiter:!1,gloss:"not"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"wählen",is_delimiter:!1,gloss:"choose"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mit",is_delimiter:!1,gloss:"with"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"der",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Zeit:",is_delimiter:!1,gloss:"time:"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Muß",is_delimiter:!1,gloss:"Must"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"selbst",is_delimiter:!1,gloss:"myself"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"den",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Weg",is_delimiter:!1,gloss:"way"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mir",is_delimiter:!1,gloss:"to-me"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"weisen",is_delimiter:!1,gloss:"point-out"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"In",is_delimiter:!1,gloss:"In"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"dieser",is_delimiter:!1,gloss:"this"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Dunkelheit.",is_delimiter:!1,gloss:"darkness."},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Es",is_delimiter:!1,gloss:"A"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"zieht",is_delimiter:!1,gloss:"draws"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ein",is_delimiter:!1,gloss:"a"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Mondenschatten",is_delimiter:!1,gloss:"moon-shade"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Als",is_delimiter:!1,gloss:"As"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mein",is_delimiter:!1,gloss:"my"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Gefährte",is_delimiter:!1,gloss:"companion"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mit,",is_delimiter:!1,gloss:"with,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Und",is_delimiter:!1,gloss:"And"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"auf",is_delimiter:!1,gloss:"on"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"den",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"weißen",is_delimiter:!1,gloss:"white"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Matten",is_delimiter:!1,gloss:"meadows"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Such’",is_delimiter:!1,gloss:"Such’"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"des",is_delimiter:!1,gloss:"of-the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Wildes",is_delimiter:!1,gloss:"wild-thing"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Tritt.",is_delimiter:!1,gloss:"tread."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Ich kann zu meiner Reisen
Nicht wählen mit der Zeit:
Muß selbst den Weg mir weisen
In dieser Dunkelheit.
Es zieht ein Mondenschatten
Als mein Gefährte mit,
Und auf den weißen Matten
Such’ ich des Wildes Tritt.`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Was",is_delimiter:!1,gloss:"What"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"soll",is_delimiter:!1,gloss:"shall"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"länger",is_delimiter:!1,gloss:"longer"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"weilen,",is_delimiter:!1,gloss:"tarry,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Bis",is_delimiter:!1,gloss:"Until"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"man",is_delimiter:!1,gloss:"one"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mich",is_delimiter:!1,gloss:"me"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"trieb’",is_delimiter:!1,gloss:"drove"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"hinaus?",is_delimiter:!1,gloss:"forth?"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Laß",is_delimiter:!1,gloss:"Let"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"irre",is_delimiter:!1,gloss:"loiter"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Hunde",is_delimiter:!1,gloss:"dogs"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"heulen",is_delimiter:!1,gloss:"howl"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Vor",is_delimiter:!1,gloss:"Before"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ihres",is_delimiter:!1,gloss:"their"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Herren",is_delimiter:!1,gloss:"master's"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Haus!",is_delimiter:!1,gloss:"house!"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Die",is_delimiter:!1,gloss:"The"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Liebe",is_delimiter:!1,gloss:"Love"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"liebt",is_delimiter:!1,gloss:"loves"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"das",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Wandern,",is_delimiter:!1,gloss:"wandering,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"—",is_delimiter:!1,gloss:"—"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Gott",is_delimiter:!1,gloss:"God"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"hat",is_delimiter:!1,gloss:"has"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sie",is_delimiter:!1,gloss:"it"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"so",is_delimiter:!1,gloss:"so"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"gemacht",is_delimiter:!1,gloss:"made"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"—",is_delimiter:!1,gloss:"—"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Von",is_delimiter:!1,gloss:"From"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Einem",is_delimiter:!1,gloss:"one"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"zu",is_delimiter:!1,gloss:"to"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"dem",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Andern",is_delimiter:!1,gloss:"other"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"—",is_delimiter:!1,gloss:"—"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Fein",is_delimiter:!1,gloss:"Sweet"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Liebchen,",is_delimiter:!1,gloss:"darling,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"gute",is_delimiter:!1,gloss:"good"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Nacht!",is_delimiter:!1,gloss:"night!"}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Was soll ich länger weilen,
Bis man mich trieb’ hinaus?
Laß irre Hunde heulen
Vor ihres Herren Haus!
Die Liebe liebt das Wandern, —
Gott hat sie so gemacht —
Von Einem zu dem Andern —
Fein Liebchen, gute Nacht!`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Will",is_delimiter:!1,gloss:"Will"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"dich",is_delimiter:!1,gloss:"thee"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"im",is_delimiter:!1,gloss:"in-the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Traum",is_delimiter:!1,gloss:"dream"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nicht",is_delimiter:!1,gloss:"not"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"stören,",is_delimiter:!1,gloss:"disturb,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Wär’",is_delimiter:!1,gloss:"Were’t"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Schad’",is_delimiter:!1,gloss:"Sh’were"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"um",is_delimiter:!1,gloss:"about"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"deine",is_delimiter:!1,gloss:"thy"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Ruh’,",is_delimiter:!1,gloss:"rest,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Sollst",is_delimiter:!1,gloss:"Shalt"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"meinen",is_delimiter:!1,gloss:"my"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Tritt",is_delimiter:!1,gloss:"tread"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nicht",is_delimiter:!1,gloss:"not"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"hören",is_delimiter:!1,gloss:"hear"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"—",is_delimiter:!1,gloss:"—"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Sacht,",is_delimiter:!1,gloss:"Soft,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sacht",is_delimiter:!1,gloss:"soft"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"die",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Thüre",is_delimiter:!1,gloss:"door"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"zu!",is_delimiter:!1,gloss:"to!"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"schreibe",is_delimiter:!1,gloss:"write"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nur",is_delimiter:!1,gloss:"only"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"im",is_delimiter:!1,gloss:"in-the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Gehen",is_delimiter:!1,gloss:"going"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"An’s",is_delimiter:!1,gloss:"At-the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Thor",is_delimiter:!1,gloss:"gate"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"noch",is_delimiter:!1,gloss:"yet-(wishing)"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"gute",is_delimiter:!1,gloss:"good"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Nacht,",is_delimiter:!1,gloss:"night-"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Damit",is_delimiter:!1,gloss:"that"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"du",is_delimiter:!1,gloss:"thou"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mögest",is_delimiter:!1,gloss:"may"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sehen,",is_delimiter:!1,gloss:"see,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"hab’",is_delimiter:!1,gloss:"have"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"an",is_delimiter:!1,gloss:"on"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"dich",is_delimiter:!1,gloss:"thee"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"gedacht.",is_delimiter:!1,gloss:"thought."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Will dich im Traum nicht stören,
Wär’ Schad’ um deine Ruh’,
Sollst meinen Tritt nicht hören —
Sacht, sacht die Thüre zu!
Ich schreibe nur im Gehen
An’s Thor noch gute Nacht,
Damit du mögest sehen,
Ich hab’ an dich gedacht.`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"#",is_delimiter:!1,gloss:"#"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Die",is_delimiter:!1,gloss:"The"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Wetterfahne.",is_delimiter:!1,gloss:"Weather-vanes."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:"# Die Wetterfahne.",annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Der",is_delimiter:!1,gloss:"The"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Wind",is_delimiter:!1,gloss:"Wind"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"spielt",is_delimiter:!1,gloss:"plays"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mit",is_delimiter:!1,gloss:"with"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"der",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Wetterfahne",is_delimiter:!1,gloss:"weather-vane"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Auf",is_delimiter:!1,gloss:"On"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"meines",is_delimiter:!1,gloss:"my"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"schönen",is_delimiter:!1,gloss:"pretty"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Liebchens",is_delimiter:!1,gloss:"love's"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Haus.",is_delimiter:!1,gloss:"house."},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Da",is_delimiter:!1,gloss:"There"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"dacht’",is_delimiter:!1,gloss:"thought"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"schon",is_delimiter:!1,gloss:"already"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"in",is_delimiter:!1,gloss:"in"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"meinem",is_delimiter:!1,gloss:"my"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Wahne,",is_delimiter:!1,gloss:"fancy,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Sie",is_delimiter:!1,gloss:"She"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"pfiff’",is_delimiter:!1,gloss:"whistled"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"den",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"armen",is_delimiter:!1,gloss:"poor"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Flüchtling",is_delimiter:!1,gloss:"fugitive"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"aus.",is_delimiter:!1,gloss:"out."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Der Wind spielt mit der Wetterfahne
Auf meines schönen Liebchens Haus.
Da dacht’ ich schon in meinem Wahne,
Sie pfiff’ den armen Flüchtling aus.`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Er",is_delimiter:!1,gloss:"He"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"hätt’",is_delimiter:!1,gloss:"ought-have"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"es",is_delimiter:!1,gloss:"it"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ehr",is_delimiter:!1,gloss:"sooner"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"bemerken",is_delimiter:!1,gloss:"to-notice"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sollen,",is_delimiter:!1,gloss:"to-have-been-able,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Des",is_delimiter:!1,gloss:"Of-the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Hauses",is_delimiter:!1,gloss:"house’s"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"aufgestecktes",is_delimiter:!1,gloss:"hung-up"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Schild,",is_delimiter:!1,gloss:"sign,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"So",is_delimiter:!1,gloss:"Then"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"hätt’",is_delimiter:!1,gloss:"ought"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"er",is_delimiter:!1,gloss:"he"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nimmer",is_delimiter:!1,gloss:"never"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"suchen",is_delimiter:!1,gloss:"to-search"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"wollen",is_delimiter:!1,gloss:"to-have-will"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Im",is_delimiter:!1,gloss:"In-the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Haus’",is_delimiter:!1,gloss:"house"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ein",is_delimiter:!1,gloss:"a"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"treues",is_delimiter:!1,gloss:"faithful"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Frauenbild.",is_delimiter:!1,gloss:"female-portrait."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Er hätt’ es ehr bemerken sollen,
Des Hauses aufgestecktes Schild,
So hätt’ er nimmer suchen wollen
Im Haus’ ein treues Frauenbild.`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Der",is_delimiter:!1,gloss:"The"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Wind",is_delimiter:!1,gloss:"Wind"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"spielt",is_delimiter:!1,gloss:"plays"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"drinnen",is_delimiter:!1,gloss:"within"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mit",is_delimiter:!1,gloss:"with"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"den",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Herzen,",is_delimiter:!1,gloss:"hearts,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Wie",is_delimiter:!1,gloss:"As"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"auf",is_delimiter:!1,gloss:"on"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"dem",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Dach,",is_delimiter:!1,gloss:"roof,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nur",is_delimiter:!1,gloss:"only"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nicht",is_delimiter:!1,gloss:"not"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"so",is_delimiter:!1,gloss:"so"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"laut.",is_delimiter:!1,gloss:"loud."},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Was",is_delimiter:!1,gloss:"What"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"fragen",is_delimiter:!1,gloss:"ask"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sie",is_delimiter:!1,gloss:"they"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nach",is_delimiter:!1,gloss:"after (care for)"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"meinen",is_delimiter:!1,gloss:"my"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Schmerzen?",is_delimiter:!1,gloss:"pains?"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Ihr",is_delimiter:!1,gloss:"Your"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Kind",is_delimiter:!1,gloss:"child"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ist",is_delimiter:!1,gloss:"is"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"eine",is_delimiter:!1,gloss:"a"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"reiche",is_delimiter:!1,gloss:"rich"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Braut.",is_delimiter:!1,gloss:"bride."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Der Wind spielt drinnen mit den Herzen,
Wie auf dem Dach, nur nicht so laut.
Was fragen sie nach meinen Schmerzen?
Ihr Kind ist eine reiche Braut.`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"#",is_delimiter:!1,gloss:"!UNKNOWN"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Gefrorene",is_delimiter:!1,gloss:"!UNKNOWN"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Thränen.",is_delimiter:!1,gloss:"!UNKNOWN"}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:"# Gefrorene Thränen.",annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Gefrorne",is_delimiter:!1,gloss:"Frozen"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Tropfen",is_delimiter:!1,gloss:"drops"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"fallen",is_delimiter:!1,gloss:"fall"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Von",is_delimiter:!1,gloss:"From"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"meinen",is_delimiter:!1,gloss:"my"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Wangen",is_delimiter:!1,gloss:"cheeks"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ab:",is_delimiter:!1,gloss:"off:"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Und",is_delimiter:!1,gloss:"And"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ist’s",is_delimiter:!1,gloss:"is-it"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mir",is_delimiter:!1,gloss:"to-me"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"denn",is_delimiter:!1,gloss:"then"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"entgangen,",is_delimiter:!1,gloss:"escaped,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Daß",is_delimiter:!1,gloss:"That"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"geweinet",is_delimiter:!1,gloss:"wept"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"hab’?",is_delimiter:!1,gloss:"have?"}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Gefrorne Tropfen fallen
Von meinen Wangen ab:
Und ist’s mir denn entgangen,
Daß ich geweinet hab’?`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Ei",is_delimiter:!1,gloss:"Ah"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Thränen,",is_delimiter:!1,gloss:"Tears,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"meine",is_delimiter:!1,gloss:"my"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Thränen,",is_delimiter:!1,gloss:"tears,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Und",is_delimiter:!1,gloss:"And"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"seid",is_delimiter:!1,gloss:"are"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ihr",is_delimiter:!1,gloss:"ye"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"gar",is_delimiter:!1,gloss:"quite"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"so",is_delimiter:!1,gloss:"so"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"lau,",is_delimiter:!1,gloss:"lukewarm,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Daß",is_delimiter:!1,gloss:"That"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ihr",is_delimiter:!1,gloss:"ye"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"erstarrt",is_delimiter:!1,gloss:"congealed"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"zu",is_delimiter:!1,gloss:"to"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Eise,",is_delimiter:!1,gloss:"ice,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Wie",is_delimiter:!1,gloss:"How"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"kühler",is_delimiter:!1,gloss:"cool"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Morgenthau?",is_delimiter:!1,gloss:"dew?"}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Ei Thränen, meine Thränen,
Und seid ihr gar so lau,
Daß ihr erstarrt zu Eise,
Wie kühler Morgenthau?`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Und",is_delimiter:!1,gloss:"And"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"dringt",is_delimiter:!1,gloss:"wells"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"doch",is_delimiter:!1,gloss:"yet"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"aus",is_delimiter:!1,gloss:"out"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"der",is_delimiter:!1,gloss:"of-the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Quelle",is_delimiter:!1,gloss:"fount"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Der",is_delimiter:!1,gloss:"Of-the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Brust",is_delimiter:!1,gloss:"breast"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"so",is_delimiter:!1,gloss:"so"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"glühend",is_delimiter:!1,gloss:"glowing"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"heiß,",is_delimiter:!1,gloss:"hot,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Als",is_delimiter:!1,gloss:"As"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"wolltet",is_delimiter:!1,gloss:"ye-would"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ihr",is_delimiter:!1,gloss:"it"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"zerschmelzen",is_delimiter:!1,gloss:"to-vanquish"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Des",is_delimiter:!1,gloss:"The"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ganzen",is_delimiter:!1,gloss:"whole"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Winters",is_delimiter:!1,gloss:"winter's"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Eis.",is_delimiter:!1,gloss:"ice."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Und dringt doch aus der Quelle
Der Brust so glühend heiß,
Als wolltet ihr zerschmelzen
Des ganzen Winters Eis.`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"#",is_delimiter:!1,gloss:"!UNKNOWN"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Erstarrung.",is_delimiter:!1,gloss:"Stupor."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:"# Erstarrung.",annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"such’",is_delimiter:!1,gloss:"sought"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"im",is_delimiter:!1,gloss:"in-the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Schnee",is_delimiter:!1,gloss:"snow"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"vergebens",is_delimiter:!1,gloss:"in-vain"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Nach",is_delimiter:!1,gloss:"after"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ihrer",is_delimiter:!1,gloss:"her"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Tritte",is_delimiter:!1,gloss:"foot"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Spur,",is_delimiter:!1,gloss:"track,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Hier,",is_delimiter:!1,gloss:"Here,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"wo",is_delimiter:!1,gloss:"where"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"wir",is_delimiter:!1,gloss:"we"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"oft",is_delimiter:!1,gloss:"often"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"gewandelt",is_delimiter:!1,gloss:"walked"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Selbander",is_delimiter:!1,gloss:"each-other"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"durch",is_delimiter:!1,gloss:"through"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"die",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Flur.",is_delimiter:!1,gloss:"field."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Ich such’ im Schnee vergebens
Nach ihrer Tritte Spur,
Hier, wo wir oft gewandelt
Selbander durch die Flur.`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"will",is_delimiter:!1,gloss:"will"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"den",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Boden",is_delimiter:!1,gloss:"ground"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"küssen,",is_delimiter:!1,gloss:"kiss,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Durchdringen",is_delimiter:!1,gloss:"Penetrate"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Eis",is_delimiter:!1,gloss:"ice"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"und",is_delimiter:!1,gloss:"and"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Schnee",is_delimiter:!1,gloss:"snow"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Mit",is_delimiter:!1,gloss:"with"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"meinen",is_delimiter:!1,gloss:"my"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"heißen",is_delimiter:!1,gloss:"hot"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Thränen,",is_delimiter:!1,gloss:"tears,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Bis",is_delimiter:!1,gloss:"till"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"die",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Erde",is_delimiter:!1,gloss:"earth"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"seh’.",is_delimiter:!1,gloss:"see."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Ich will den Boden küssen,
Durchdringen Eis und Schnee
Mit meinen heißen Thränen,
Bis ich die Erde seh’.`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Wo",is_delimiter:!1,gloss:"Where"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"find’",is_delimiter:!1,gloss:"find"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"eine",is_delimiter:!1,gloss:"a"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Blüthe,",is_delimiter:!1,gloss:"blossom,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Wo",is_delimiter:!1,gloss:"Where"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"find’",is_delimiter:!1,gloss:"find"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"grünes",is_delimiter:!1,gloss:"green"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Gras?",is_delimiter:!1,gloss:"grass?"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Die",is_delimiter:!1,gloss:"The"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Blumen",is_delimiter:!1,gloss:"flowers"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sind",is_delimiter:!1,gloss:"are"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"erstorben,",is_delimiter:!1,gloss:"withered,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Der",is_delimiter:!1,gloss:"The"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Rasen",is_delimiter:!1,gloss:"turf"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sieht",is_delimiter:!1,gloss:"looks"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"so",is_delimiter:!1,gloss:"so"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"blaß.",is_delimiter:!1,gloss:"pale."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Wo find’ ich eine Blüthe,
Wo find’ ich grünes Gras?
Die Blumen sind erstorben,
Der Rasen sieht so blaß.`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Soll",is_delimiter:!1,gloss:"Shall"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"denn",is_delimiter:!1,gloss:"then"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"kein",is_delimiter:!1,gloss:"no"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Angedenken",is_delimiter:!1,gloss:"remembrance"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nehmen",is_delimiter:!1,gloss:"take"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mit",is_delimiter:!1,gloss:"with"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"von",is_delimiter:!1,gloss:"from"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"hier?",is_delimiter:!1,gloss:"here?"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Wenn",is_delimiter:!1,gloss:"When"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"meine",is_delimiter:!1,gloss:"my"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Schmerzen",is_delimiter:!1,gloss:"pains"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"schweigen,",is_delimiter:!1,gloss:"cease,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Wer",is_delimiter:!1,gloss:"Who"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sagt",is_delimiter:!1,gloss:"says"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mir",is_delimiter:!1,gloss:"to-me"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"dann",is_delimiter:!1,gloss:"then"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"von",is_delimiter:!1,gloss:"of"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ihr?",is_delimiter:!1,gloss:"her?"}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Soll denn kein Angedenken
Ich nehmen mit von hier?
Wenn meine Schmerzen schweigen,
Wer sagt mir dann von ihr?`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Mein",is_delimiter:!1,gloss:"My"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Herz",is_delimiter:!1,gloss:"heart"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ist",is_delimiter:!1,gloss:"is"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"wie",is_delimiter:!1,gloss:"like"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"erfroren,",is_delimiter:!1,gloss:"frozen,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Kalt",is_delimiter:!1,gloss:"cold"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"starrt",is_delimiter:!1,gloss:"stares"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ihr",is_delimiter:!1,gloss:"her"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Bild",is_delimiter:!1,gloss:"picture"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"darin:",is_delimiter:!1,gloss:"in-it:"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Schmilzt",is_delimiter:!1,gloss:"melts"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"je",is_delimiter:!1,gloss:"ever"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"das",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Herz",is_delimiter:!1,gloss:"heart"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mir",is_delimiter:!1,gloss:"to-me"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"wieder,",is_delimiter:!1,gloss:"agin,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Fließt",is_delimiter:!1,gloss:"flows"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"auch",is_delimiter:!1,gloss:"also"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"das",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Bild",is_delimiter:!1,gloss:"picture"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"dahin.",is_delimiter:!1,gloss:"thither."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Mein Herz ist wie erfroren,
Kalt starrt ihr Bild darin:
Schmilzt je das Herz mir wieder,
Fließt auch das Bild dahin.`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"#",is_delimiter:!1,gloss:"!UNKNOWN"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Der",is_delimiter:!1,gloss:"The"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Lindenbaum.",is_delimiter:!1,gloss:"Linde-tree."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:"# Der Lindenbaum.",annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Am",is_delimiter:!1,gloss:"At-the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Brunnen",is_delimiter:!1,gloss:"well"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"vor",is_delimiter:!1,gloss:"before"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"dem",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Thore",is_delimiter:!1,gloss:"gate"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Da",is_delimiter:!1,gloss:"There"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"steht",is_delimiter:!1,gloss:"stands"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ein",is_delimiter:!1,gloss:"a"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Lindenbaum:",is_delimiter:!1,gloss:"lime-tree:"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"träumt’",is_delimiter:!1,gloss:"dreamt"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"in",is_delimiter:!1,gloss:"in"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"seinem",is_delimiter:!1,gloss:"its"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Schatten",is_delimiter:!1,gloss:"shade"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"So",is_delimiter:!1,gloss:"So"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"manchen",is_delimiter:!1,gloss:"many"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"süßen",is_delimiter:!1,gloss:"sweet"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Traum.",is_delimiter:!1,gloss:"dream."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Am Brunnen vor dem Thore
Da steht ein Lindenbaum:
Ich träumt’ in seinem Schatten
So manchen süßen Traum.`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"schnitt",is_delimiter:!1,gloss:"cut"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"in",is_delimiter:!1,gloss:"in"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"seine",is_delimiter:!1,gloss:"its"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Rinde",is_delimiter:!1,gloss:"rind"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"So",is_delimiter:!1,gloss:"So"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"manches",is_delimiter:!1,gloss:"many-a"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"liebe",is_delimiter:!1,gloss:"dear"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Wort;",is_delimiter:!1,gloss:"word;"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Es",is_delimiter:!1,gloss:"It"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"zog",is_delimiter:!1,gloss:"drew"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"in",is_delimiter:!1,gloss:"in"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Freud’",is_delimiter:!1,gloss:"joy"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"und",is_delimiter:!1,gloss:"and"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Leide",is_delimiter:!1,gloss:"sorrow"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Zu",is_delimiter:!1,gloss:"To"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ihm",is_delimiter:!1,gloss:"it"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mich",is_delimiter:!1,gloss:"me"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"immer",is_delimiter:!1,gloss:"always"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"fort.",is_delimiter:!1,gloss:"forth."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Ich schnitt in seine Rinde
So manches liebe Wort;
Es zog in Freud’ und Leide
Zu ihm mich immer fort.`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mußt’",is_delimiter:!1,gloss:"must’"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"auch",is_delimiter:!1,gloss:"also"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"heute",is_delimiter:!1,gloss:"to-day"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"wandern",is_delimiter:!1,gloss:"wander"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Vorbei",is_delimiter:!1,gloss:"Past"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"in",is_delimiter:!1,gloss:"in"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"tiefer",is_delimiter:!1,gloss:"deep"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Nacht,",is_delimiter:!1,gloss:"night,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Da",is_delimiter:!1,gloss:"Then"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"hab’",is_delimiter:!1,gloss:"have"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"noch",is_delimiter:!1,gloss:"yet"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"im",is_delimiter:!1,gloss:"in-the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Dunkel",is_delimiter:!1,gloss:"dark"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Die",is_delimiter:!1,gloss:"The"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Augen",is_delimiter:!1,gloss:"eyes"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"zugemacht.",is_delimiter:!1,gloss:"shut."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Ich mußt’ auch heute wandern
Vorbei in tiefer Nacht,
Da hab’ ich noch im Dunkel
Die Augen zugemacht.`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Und",is_delimiter:!1,gloss:"And"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"seine",is_delimiter:!1,gloss:"its"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Zweige",is_delimiter:!1,gloss:"branches"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"rauschten,",is_delimiter:!1,gloss:"rustled,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Als",is_delimiter:!1,gloss:"As"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"riefen",is_delimiter:!1,gloss:"called"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sie",is_delimiter:!1,gloss:"they"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mir",is_delimiter:!1,gloss:"to-me"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"zu:",is_delimiter:!1,gloss:"to:"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Komm",is_delimiter:!1,gloss:"Come"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"her",is_delimiter:!1,gloss:"hither"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"zu",is_delimiter:!1,gloss:"to"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mir,",is_delimiter:!1,gloss:"me,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Geselle,",is_delimiter:!1,gloss:"Comrade,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Hier",is_delimiter:!1,gloss:"Here"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"findst",is_delimiter:!1,gloss:"findest"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"du",is_delimiter:!1,gloss:"thou"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"deine",is_delimiter:!1,gloss:"thy"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Ruh’!",is_delimiter:!1,gloss:"Rest!"}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Und seine Zweige rauschten,
Als riefen sie mir zu:
Komm her zu mir, Geselle,
Hier findst du deine Ruh’!`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Die",is_delimiter:!1,gloss:"The"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"kalten",is_delimiter:!1,gloss:"cold"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Winde",is_delimiter:!1,gloss:"winds"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"bliesen",is_delimiter:!1,gloss:"blew"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Mir",is_delimiter:!1,gloss:"to-me"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"grad’",is_delimiter:!1,gloss:"straight"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"in’s",is_delimiter:!1,gloss:"into-the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Angesicht,",is_delimiter:!1,gloss:"face,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Der",is_delimiter:!1,gloss:"The"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Hut",is_delimiter:!1,gloss:"hat"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"flog",is_delimiter:!1,gloss:"flew"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mir",is_delimiter:!1,gloss:"to-me"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"vom",is_delimiter:!1,gloss:"from-the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Kopfe,",is_delimiter:!1,gloss:"head,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"wendete",is_delimiter:!1,gloss:"turned"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mich",is_delimiter:!1,gloss:"me"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nicht.",is_delimiter:!1,gloss:"not."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Die kalten Winde bliesen
Mir grad’ in’s Angesicht,
Der Hut flog mir vom Kopfe,
Ich wendete mich nicht.`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Nun",is_delimiter:!1,gloss:"Now"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"bin",is_delimiter:!1,gloss:"am"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"manche",is_delimiter:!1,gloss:"many (an)"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Stunde",is_delimiter:!1,gloss:"hour"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Entfernt",is_delimiter:!1,gloss:"distant"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"von",is_delimiter:!1,gloss:"from"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"jenem",is_delimiter:!1,gloss:"that"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Ort,",is_delimiter:!1,gloss:"place,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Und",is_delimiter:!1,gloss:"And"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"immer",is_delimiter:!1,gloss:"always"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"hör’",is_delimiter:!1,gloss:"hear"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ich’s",is_delimiter:!1,gloss:"it’s"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"rauschen:",is_delimiter:!1,gloss:"rustling:"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Du",is_delimiter:!1,gloss:"Thou"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"fändest",is_delimiter:!1,gloss:"wouldst-find"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Ruhe",is_delimiter:!1,gloss:"rest"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"dort!",is_delimiter:!1,gloss:"there!"}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Nun bin ich manche Stunde
Entfernt von jenem Ort,
Und immer hör’ ich’s rauschen:
Du fändest Ruhe dort!`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"#",is_delimiter:!1,gloss:"#"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Die",is_delimiter:!1,gloss:"The"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Post.",is_delimiter:!1,gloss:"Postman."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:"# Die Post.",annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Von",is_delimiter:!1,gloss:"From"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"der",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Straße",is_delimiter:!1,gloss:"street"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"her",is_delimiter:!1,gloss:"hence"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ein",is_delimiter:!1,gloss:"a"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Posthorn",is_delimiter:!1,gloss:"posthorn"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"klingt.",is_delimiter:!1,gloss:"sounds."},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Was",is_delimiter:!1,gloss:"What"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"hat",is_delimiter:!1,gloss:"has"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"es,",is_delimiter:!1,gloss:"it,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"daß",is_delimiter:!1,gloss:"that"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"es",is_delimiter:!1,gloss:"it"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"so",is_delimiter:!1,gloss:"so"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"hoch",is_delimiter:!1,gloss:"high (so)"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"aufspringt,",is_delimiter:!1,gloss:"leaps,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Mein",is_delimiter:!1,gloss:"My"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Herz?",is_delimiter:!1,gloss:"heart?"}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Von der Straße her ein Posthorn klingt.
Was hat es, daß es so hoch aufspringt,
Mein Herz?`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Die",is_delimiter:!1,gloss:"The"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Post",is_delimiter:!1,gloss:"Post"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"bringt",is_delimiter:!1,gloss:"brings"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"keinen",is_delimiter:!1,gloss:"no"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Brief",is_delimiter:!1,gloss:"letter"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"für",is_delimiter:!1,gloss:"for"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"dich:",is_delimiter:!1,gloss:"thee:"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Was",is_delimiter:!1,gloss:"Why"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"drängst",is_delimiter:!1,gloss:"art-urging"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"du",is_delimiter:!1,gloss:"thou"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"denn",is_delimiter:!1,gloss:"then"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"so",is_delimiter:!1,gloss:"so"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"wunderlich,",is_delimiter:!1,gloss:"wonderfully,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Mein",is_delimiter:!1,gloss:"My"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Herz?",is_delimiter:!1,gloss:"Heart?"}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Die Post bringt keinen Brief für dich:
Was drängst du denn so wunderlich,
Mein Herz?`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Nun",is_delimiter:!1,gloss:"Well"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ja,",is_delimiter:!1,gloss:"yes,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"die",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Post",is_delimiter:!1,gloss:"Post"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"kömmt",is_delimiter:!1,gloss:"comes"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"aus",is_delimiter:!1,gloss:"from"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"der",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Stadt,",is_delimiter:!1,gloss:"city,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Wo",is_delimiter:!1,gloss:"where"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ein",is_delimiter:!1,gloss:"a"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"liebes",is_delimiter:!1,gloss:"dear"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Liebchen",is_delimiter:!1,gloss:"girl"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"hatt’,",is_delimiter:!1,gloss:"had,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Mein",is_delimiter:!1,gloss:"My"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Herz!",is_delimiter:!1,gloss:"Heart!"}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Nun ja, die Post kömmt aus der Stadt,
Wo ich ein liebes Liebchen hatt’,
Mein Herz!`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Willst",is_delimiter:!1,gloss:"Wilt"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"wohl",is_delimiter:!1,gloss:"well"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"einmal",is_delimiter:!1,gloss:"once"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"hinübersehn,",is_delimiter:!1,gloss:"o'er-look,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Und",is_delimiter:!1,gloss:"And"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"fragen,",is_delimiter:!1,gloss:"ask,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"wie",is_delimiter:!1,gloss:"how"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"es",is_delimiter:!1,gloss:"it"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"dort",is_delimiter:!1,gloss:"yonder"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mag",is_delimiter:!1,gloss:"may"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"gehn,",is_delimiter:!1,gloss:"go,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Mein",is_delimiter:!1,gloss:"My"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Herz?",is_delimiter:!1,gloss:"Heart?"},{txt:" ",is_delimiter:!0,gloss:null}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Willst wohl einmal hinübersehn,
Und fragen, wie es dort mag gehn,
Mein Herz? `,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"#",is_delimiter:!1,gloss:"#"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Wasserfluth.",is_delimiter:!1,gloss:"Water-flood."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:"# Wasserfluth.",annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Manche",is_delimiter:!1,gloss:"Many"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Thrän’",is_delimiter:!1,gloss:"tear"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"aus",is_delimiter:!1,gloss:"from"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"meinen",is_delimiter:!1,gloss:"my"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Augen",is_delimiter:!1,gloss:"eyes"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Ist",is_delimiter:!1,gloss:"is"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"gefallen",is_delimiter:!1,gloss:"fallen"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"in",is_delimiter:!1,gloss:"into"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"den",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Schnee;",is_delimiter:!1,gloss:"snow;"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Seine",is_delimiter:!1,gloss:"its"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"kalten",is_delimiter:!1,gloss:"cold"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Flocken",is_delimiter:!1,gloss:"flakes"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"saugen",is_delimiter:!1,gloss:"suck (up)"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Durstig",is_delimiter:!1,gloss:"thirstily"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ein",is_delimiter:!1,gloss:"out"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"das",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"heiße",is_delimiter:!1,gloss:"hot"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Weh.",is_delimiter:!1,gloss:"woe."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Manche Thrän’ aus meinen Augen
Ist gefallen in den Schnee;
Seine kalten Flocken saugen
Durstig ein das heiße Weh.`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Wann",is_delimiter:!1,gloss:"When"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"die",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Gräser",is_delimiter:!1,gloss:"grasses"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sprossen",is_delimiter:!1,gloss:"sprout"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"wollen,",is_delimiter:!1,gloss:"will,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Weht",is_delimiter:!1,gloss:"There-blows"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"daher",is_delimiter:!1,gloss:"thence"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ein",is_delimiter:!1,gloss:"a"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"lauer",is_delimiter:!1,gloss:"languid"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Wind,",is_delimiter:!1,gloss:"wind,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Und",is_delimiter:!1,gloss:"And"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"das",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Eis",is_delimiter:!1,gloss:"ice"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"zerspringt",is_delimiter:!1,gloss:"bursts"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"in",is_delimiter:!1,gloss:"into"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Schollen,",is_delimiter:!1,gloss:"pieces,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Und",is_delimiter:!1,gloss:"And"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"der",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"weiche",is_delimiter:!1,gloss:"soft"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Schnee",is_delimiter:!1,gloss:"snow"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"zerrinnt.",is_delimiter:!1,gloss:"melts."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Wann die Gräser sprossen wollen,
Weht daher ein lauer Wind,
Und das Eis zerspringt in Schollen,
Und der weiche Schnee zerrinnt.`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Schnee,",is_delimiter:!1,gloss:"Snow,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"du",is_delimiter:!1,gloss:"thou"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"weißt",is_delimiter:!1,gloss:"knowest"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"von",is_delimiter:!1,gloss:"of"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"meinem",is_delimiter:!1,gloss:"my"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Sehnen:",is_delimiter:!1,gloss:"longing:"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Sag",is_delimiter:!1,gloss:"Say"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mir,",is_delimiter:!1,gloss:"to-me,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"wohin",is_delimiter:!1,gloss:"whither"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"geht",is_delimiter:!1,gloss:"goest"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"dein",is_delimiter:!1,gloss:"thy"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Lauf?",is_delimiter:!1,gloss:"course?"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Folge",is_delimiter:!1,gloss:"Follow"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nach",is_delimiter:!1,gloss:"after"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nur",is_delimiter:!1,gloss:"only"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"meinen",is_delimiter:!1,gloss:"my"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Thränen,",is_delimiter:!1,gloss:"tears,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Nimmt",is_delimiter:!1,gloss:"Takes"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"dich",is_delimiter:!1,gloss:"thee"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"bald",is_delimiter:!1,gloss:"soon"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"das",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Bächlein",is_delimiter:!1,gloss:"brooklet"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"auf.",is_delimiter:!1,gloss:"up."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Schnee, du weißt von meinem Sehnen:
Sag mir, wohin geht dein Lauf?
Folge nach nur meinen Thränen,
Nimmt dich bald das Bächlein auf.`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Wirst",is_delimiter:!1,gloss:"Wilt"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mit",is_delimiter:!1,gloss:"with"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ihm",is_delimiter:!1,gloss:"him"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"die",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Stadt",is_delimiter:!1,gloss:"city"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"durchziehen,",is_delimiter:!1,gloss:"traverse,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Muntre",is_delimiter:!1,gloss:"Muntre"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Straßen",is_delimiter:!1,gloss:"streets"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ein",is_delimiter:!1,gloss:"in"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"und",is_delimiter:!1,gloss:"and"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"aus:",is_delimiter:!1,gloss:"out:"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Fühlst",is_delimiter:!1,gloss:"Feelst"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"du",is_delimiter:!1,gloss:"thou"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"meine",is_delimiter:!1,gloss:"my"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Thränen",is_delimiter:!1,gloss:"tears"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"glühen,",is_delimiter:!1,gloss:"glow,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Da",is_delimiter:!1,gloss:"There"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ist",is_delimiter:!1,gloss:"is"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"meiner",is_delimiter:!1,gloss:"of-my"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Liebsten",is_delimiter:!1,gloss:"love-best"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Haus.",is_delimiter:!1,gloss:"house."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Wirst mit ihm die Stadt durchziehen,
Muntre Straßen ein und aus:
Fühlst du meine Thränen glühen,
Da ist meiner Liebsten Haus.`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"#",is_delimiter:!1,gloss:"#"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Auf",is_delimiter:!1,gloss:"On"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"dem",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Flusse.",is_delimiter:!1,gloss:"river."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:"# Auf dem Flusse.",annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Der",is_delimiter:!1,gloss:"The"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"du",is_delimiter:!1,gloss:"thou"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"so",is_delimiter:!1,gloss:"so"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"lustig",is_delimiter:!1,gloss:"cheerful"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"rauschtest,",is_delimiter:!1,gloss:"rattlest,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Du",is_delimiter:!1,gloss:"Thou"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"heller,",is_delimiter:!1,gloss:"clear,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"wilder",is_delimiter:!1,gloss:"wild"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Fluß,",is_delimiter:!1,gloss:"river,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Wie",is_delimiter:!1,gloss:"How"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"still",is_delimiter:!1,gloss:"silent"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"bist",is_delimiter:!1,gloss:"art"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"du",is_delimiter:!1,gloss:"thou"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"geworden,",is_delimiter:!1,gloss:"become,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Giebst",is_delimiter:!1,gloss:"Givest"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"keinen",is_delimiter:!1,gloss:"no"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Scheidegruß.",is_delimiter:!1,gloss:"parting-greeting."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Der du so lustig rauschtest,
Du heller, wilder Fluß,
Wie still bist du geworden,
Giebst keinen Scheidegruß.`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Mit",is_delimiter:!1,gloss:"With"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"harter,",is_delimiter:!1,gloss:"hard,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"starrer",is_delimiter:!1,gloss:"rigid"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Rinde",is_delimiter:!1,gloss:"rind"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Hast",is_delimiter:!1,gloss:"Hast"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"du",is_delimiter:!1,gloss:"thou"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"dich",is_delimiter:!1,gloss:"thyself"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"überdeckt,",is_delimiter:!1,gloss:"covered,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Liegst",is_delimiter:!1,gloss:"Liest"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"kalt",is_delimiter:!1,gloss:"cold"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"und",is_delimiter:!1,gloss:"and"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"unbeweglich",is_delimiter:!1,gloss:"motionless"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Im",is_delimiter:!1,gloss:"In-the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Sande",is_delimiter:!1,gloss:"sand"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"hingestreckt.",is_delimiter:!1,gloss:"stretched."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Mit harter, starrer Rinde
Hast du dich überdeckt,
Liegst kalt und unbeweglich
Im Sande hingestreckt.`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"In",is_delimiter:!1,gloss:"In"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"deine",is_delimiter:!1,gloss:"thy"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Decke",is_delimiter:!1,gloss:"mantle"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"grab’",is_delimiter:!1,gloss:"carve"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ich",is_delimiter:!1,gloss:"I"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Mit",is_delimiter:!1,gloss:"with"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"einem",is_delimiter:!1,gloss:"a"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"spitzen",is_delimiter:!1,gloss:"sharp"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Stein",is_delimiter:!1,gloss:"stone"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Den",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Namen",is_delimiter:!1,gloss:"name"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"meiner",is_delimiter:!1,gloss:"of-my"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Liebsten",is_delimiter:!1,gloss:"dearest"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Und",is_delimiter:!1,gloss:"And"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Stund’",is_delimiter:!1,gloss:"hour"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"und",is_delimiter:!1,gloss:"and"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Tag",is_delimiter:!1,gloss:"day"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"hinein:",is_delimiter:!1,gloss:"therein"}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`In deine Decke grab’ ich
Mit einem spitzen Stein
Den Namen meiner Liebsten
Und Stund’ und Tag hinein:`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Den",is_delimiter:!1,gloss:"The"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Tag",is_delimiter:!1,gloss:"day"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"des",is_delimiter:!1,gloss:"of-the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ersten",is_delimiter:!1,gloss:"first"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Grußes,",is_delimiter:!1,gloss:"greeting,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Den",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Tag,",is_delimiter:!1,gloss:"day,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"an",is_delimiter:!1,gloss:"on"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"dem",is_delimiter:!1,gloss:"which"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ging,",is_delimiter:!1,gloss:"went,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Um",is_delimiter:!1,gloss:"about"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Nam’",is_delimiter:!1,gloss:"nam’"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"und",is_delimiter:!1,gloss:"and"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Zahlen",is_delimiter:!1,gloss:"numbers"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"windet",is_delimiter:!1,gloss:"windet"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Sich",is_delimiter:!1,gloss:"itself"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ein",is_delimiter:!1,gloss:"a"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"zerbrochner",is_delimiter:!1,gloss:"broken"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Ring.",is_delimiter:!1,gloss:"ring."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Den Tag des ersten Grußes,
Den Tag, an dem ich ging,
Um Nam’ und Zahlen windet
Sich ein zerbrochner Ring.`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Mein",is_delimiter:!1,gloss:"My"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Herz,",is_delimiter:!1,gloss:"heart,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"in",is_delimiter:!1,gloss:"in"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"diesem",is_delimiter:!1,gloss:"this"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Bache",is_delimiter:!1,gloss:"brook"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Erkennst",is_delimiter:!1,gloss:"Recognizest"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"du",is_delimiter:!1,gloss:"thou"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nun",is_delimiter:!1,gloss:"now"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"dein",is_delimiter:!1,gloss:"thy"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Bild?",is_delimiter:!1,gloss:"image?"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Ob’s",is_delimiter:!1,gloss:"Whether-it’s"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"unter",is_delimiter:!1,gloss:"under"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"seiner",is_delimiter:!1,gloss:"its"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Rinde",is_delimiter:!1,gloss:"bark"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Wohl",is_delimiter:!1,gloss:"well"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"auch",is_delimiter:!1,gloss:"also"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"so",is_delimiter:!1,gloss:"so"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"reißend",is_delimiter:!1,gloss:"rushing"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"schwillt?",is_delimiter:!1,gloss:"swells?"}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Mein Herz, in diesem Bache
Erkennst du nun dein Bild?
Ob’s unter seiner Rinde
Wohl auch so reißend schwillt?`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"#",is_delimiter:!1,gloss:"!UNKNOWN"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Rückblick.",is_delimiter:!1,gloss:"Retrospective."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:"# Rückblick.",annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Es",is_delimiter:!1,gloss:"It"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"brennt",is_delimiter:!1,gloss:"burns"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mir",is_delimiter:!1,gloss:"to-me"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"unter",is_delimiter:!1,gloss:"under"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"beiden",is_delimiter:!1,gloss:"both"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Sohlen,",is_delimiter:!1,gloss:"soles,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Tret’",is_delimiter:!1,gloss:"Tread"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"auch",is_delimiter:!1,gloss:"also"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"schon",is_delimiter:!1,gloss:"already"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"auf",is_delimiter:!1,gloss:"upon"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Eis",is_delimiter:!1,gloss:"ice"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"und",is_delimiter:!1,gloss:"and"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Schnee.",is_delimiter:!1,gloss:"snow."},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"möcht’",is_delimiter:!1,gloss:"might"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nicht",is_delimiter:!1,gloss:"not"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"wieder",is_delimiter:!1,gloss:"again"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Athem",is_delimiter:!1,gloss:"breath"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"holen,",is_delimiter:!1,gloss:"fetch,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Bis",is_delimiter:!1,gloss:"Until"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nicht",is_delimiter:!1,gloss:"not"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mehr",is_delimiter:!1,gloss:"more"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"die",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Thürme",is_delimiter:!1,gloss:"towers"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"seh’.",is_delimiter:!1,gloss:"see."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Es brennt mir unter beiden Sohlen,
Tret’ ich auch schon auf Eis und Schnee.
Ich möcht’ nicht wieder Athem holen,
Bis ich nicht mehr die Thürme seh’.`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Hab’",is_delimiter:!1,gloss:"Had"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mich",is_delimiter:!1,gloss:"me"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"an",is_delimiter:!1,gloss:"on"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"jedem",is_delimiter:!1,gloss:"every"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Stein",is_delimiter:!1,gloss:"stone"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"gestoßen,",is_delimiter:!1,gloss:"stumbled,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"So",is_delimiter:!1,gloss:"So"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"eilt’",is_delimiter:!1,gloss:"hastened"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"zu",is_delimiter:!1,gloss:"to"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"der",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Stadt",is_delimiter:!1,gloss:"city"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"hinaus;",is_delimiter:!1,gloss:"out;"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Die",is_delimiter:!1,gloss:"The"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Krähen",is_delimiter:!1,gloss:"crows"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"warfen",is_delimiter:!1,gloss:"threw"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Bäll’",is_delimiter:!1,gloss:"balls"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"und",is_delimiter:!1,gloss:"and"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Schloßen",is_delimiter:!1,gloss:"buckles"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Auf",is_delimiter:!1,gloss:"(from) on"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"meinen",is_delimiter:!1,gloss:"my"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Hut",is_delimiter:!1,gloss:"hat"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"von",is_delimiter:!1,gloss:"from"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"jedem",is_delimiter:!1,gloss:"every"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Haus.",is_delimiter:!1,gloss:"house."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Hab’ mich an jedem Stein gestoßen,
So eilt’ ich zu der Stadt hinaus;
Die Krähen warfen Bäll’ und Schloßen
Auf meinen Hut von jedem Haus.`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Wie",is_delimiter:!1,gloss:"How"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"anders",is_delimiter:!1,gloss:"differently"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"hast",is_delimiter:!1,gloss:"hast"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"du",is_delimiter:!1,gloss:"thou"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mich",is_delimiter:!1,gloss:"me"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"empfangen,",is_delimiter:!1,gloss:"received,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Du",is_delimiter:!1,gloss:"Thou"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Stadt",is_delimiter:!1,gloss:"city"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"der",is_delimiter:!1,gloss:"of-the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Unbeständigkeit!",is_delimiter:!1,gloss:"inconstancy!"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"An",is_delimiter:!1,gloss:"At"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"deinen",is_delimiter:!1,gloss:"thy"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"blanken",is_delimiter:!1,gloss:"bright"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Fenstern",is_delimiter:!1,gloss:"windows"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sangen",is_delimiter:!1,gloss:"sang"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Die",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Lerch’",is_delimiter:!1,gloss:"lark"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"und",is_delimiter:!1,gloss:"and"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Nachtigall",is_delimiter:!1,gloss:"nightingale"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"im",is_delimiter:!1,gloss:"in-the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Streit.",is_delimiter:!1,gloss:"strife."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Wie anders hast du mich empfangen,
Du Stadt der Unbeständigkeit!
An deinen blanken Fenstern sangen
Die Lerch’ und Nachtigall im Streit.`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Die",is_delimiter:!1,gloss:"The"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"runden",is_delimiter:!1,gloss:"round"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Lindenbäume",is_delimiter:!1,gloss:"linden-trees"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"blühten,",is_delimiter:!1,gloss:"bloomed,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Die",is_delimiter:!1,gloss:"The"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"klaren",is_delimiter:!1,gloss:"clear"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Rinnen",is_delimiter:!1,gloss:"rivulets"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"rauschten",is_delimiter:!1,gloss:"murmured"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"hell,",is_delimiter:!1,gloss:"bright,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Und",is_delimiter:!1,gloss:"And"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ach,",is_delimiter:!1,gloss:"ah,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"zwei",is_delimiter:!1,gloss:"two"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Mädchenaugen",is_delimiter:!1,gloss:"maiden-eyes"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"glühten!",is_delimiter:!1,gloss:"shone!"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"–",is_delimiter:!1,gloss:"-"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Da",is_delimiter:!1,gloss:"Then"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"war’s",is_delimiter:!1,gloss:"was-it"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"geschehn",is_delimiter:!1,gloss:"happened"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"um",is_delimiter:!1,gloss:"about"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"dich,",is_delimiter:!1,gloss:"thee,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Gesell!",is_delimiter:!1,gloss:"comrade!"}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Die runden Lindenbäume blühten,
Die klaren Rinnen rauschten hell,
Und ach, zwei Mädchenaugen glühten! –
Da war’s geschehn um dich, Gesell!`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Kömmt",is_delimiter:!1,gloss:"Comes"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mir",is_delimiter:!1,gloss:"unto-me"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"der",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Tag",is_delimiter:!1,gloss:"day"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"in",is_delimiter:!1,gloss:"into"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"die",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Gedanken,",is_delimiter:!1,gloss:"thoughts,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Möcht’",is_delimiter:!1,gloss:"I-might-like"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"noch",is_delimiter:!1,gloss:"yet"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"einmal",is_delimiter:!1,gloss:"once"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"rückwärts",is_delimiter:!1,gloss:"backwards"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sehn,",is_delimiter:!1,gloss:"see,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Möcht’",is_delimiter:!1,gloss:"I-might-like"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"zurücke",is_delimiter:!1,gloss:"backward"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"wieder",is_delimiter:!1,gloss:"again"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"wanken,",is_delimiter:!1,gloss:"to-fortify-the-walk,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Vor",is_delimiter:!1,gloss:"Before"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ihrem",is_delimiter:!1,gloss:"her"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Hause",is_delimiter:!1,gloss:"house"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"stille",is_delimiter:!1,gloss:"still"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"stehn.",is_delimiter:!1,gloss:"stand."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Kömmt mir der Tag in die Gedanken,
Möcht’ ich noch einmal rückwärts sehn,
Möcht’ ich zurücke wieder wanken,
Vor ihrem Hause stille stehn.`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"#",is_delimiter:!1,gloss:"#"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Der",is_delimiter:!1,gloss:"The"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"greise",is_delimiter:!1,gloss:"old"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Kopf.",is_delimiter:!1,gloss:"Head."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:"# Der greise Kopf.",annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Der",is_delimiter:!1,gloss:"The"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Reif",is_delimiter:!1,gloss:"Hoar-frost"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"hatt’",is_delimiter:!1,gloss:"had"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"einen",is_delimiter:!1,gloss:"a"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"weißen",is_delimiter:!1,gloss:"white"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Schein",is_delimiter:!1,gloss:"appearance"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Mir",is_delimiter:!1,gloss:"To-me"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"über’s",is_delimiter:!1,gloss:"over-the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Haar",is_delimiter:!1,gloss:"hair"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"gestreuet.",is_delimiter:!1,gloss:"strewed."},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Da",is_delimiter:!1,gloss:"Then"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"meint’",is_delimiter:!1,gloss:"thought"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"schon",is_delimiter:!1,gloss:"already"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ein",is_delimiter:!1,gloss:"an"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Greis",is_delimiter:!1,gloss:"old-man"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"zu",is_delimiter:!1,gloss:"to"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sein,",is_delimiter:!1,gloss:"be,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Und",is_delimiter:!1,gloss:"And"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"hab’",is_delimiter:!1,gloss:"have"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mich",is_delimiter:!1,gloss:"myself"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sehr",is_delimiter:!1,gloss:"very"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"gefreuet.",is_delimiter:!1,gloss:"rejoiced."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Der Reif hatt’ einen weißen Schein
Mir über’s Haar gestreuet.
Da meint’ ich schon ein Greis zu sein,
Und hab’ mich sehr gefreuet.`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Doch",is_delimiter:!1,gloss:"But"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"bald",is_delimiter:!1,gloss:"soon"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ist",is_delimiter:!1,gloss:"is"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"er",is_delimiter:!1,gloss:"he"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"hinweggethaut,",is_delimiter:!1,gloss:"cropped,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Hab’",is_delimiter:!1,gloss:"Have"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"wieder",is_delimiter:!1,gloss:"again"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"schwarze",is_delimiter:!1,gloss:"black"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Haare,",is_delimiter:!1,gloss:"hairs,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Daß",is_delimiter:!1,gloss:"That"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mir’s",is_delimiter:!1,gloss:"to-me-it"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"vor",is_delimiter:!1,gloss:"from"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"meiner",is_delimiter:!1,gloss:"my"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Jugend",is_delimiter:!1,gloss:"youth"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"graut",is_delimiter:!1,gloss:"shudders"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"—",is_delimiter:!1,gloss:"—"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Wie",is_delimiter:!1,gloss:"How"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"weit",is_delimiter:!1,gloss:"far"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"noch",is_delimiter:!1,gloss:"still"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"bis",is_delimiter:!1,gloss:"to"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"zur",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Bahre!",is_delimiter:!1,gloss:"coffin!"}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Doch bald ist er hinweggethaut,
Hab’ wieder schwarze Haare,
Daß mir’s vor meiner Jugend graut —
Wie weit noch bis zur Bahre!`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Vom",is_delimiter:!1,gloss:"From the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Abendroth",is_delimiter:!1,gloss:"evening-red (sunset)"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"zum",is_delimiter:!1,gloss:"to the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Morgenlicht",is_delimiter:!1,gloss:"morning-light (sunrise)"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Ward",is_delimiter:!1,gloss:"Was"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mancher",is_delimiter:!1,gloss:"many"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Kopf",is_delimiter:!1,gloss:"head (man)"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"zum",is_delimiter:!1,gloss:"to"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Greise.",is_delimiter:!1,gloss:"grey-haired."},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Wer",is_delimiter:!1,gloss:"Who"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"glaubt’s?",is_delimiter:!1,gloss:"believes it?"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Und",is_delimiter:!1,gloss:"And"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"meiner",is_delimiter:!1,gloss:"mine"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ward",is_delimiter:!1,gloss:"was"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"es",is_delimiter:!1,gloss:"it"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nicht",is_delimiter:!1,gloss:"not"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Auf",is_delimiter:!1,gloss:"On"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"dieser",is_delimiter:!1,gloss:"this"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ganzen",is_delimiter:!1,gloss:"whole"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Reise!",is_delimiter:!1,gloss:"journey!"}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Vom Abendroth zum Morgenlicht
Ward mancher Kopf zum Greise.
Wer glaubt’s? Und meiner ward es nicht
Auf dieser ganzen Reise!`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"#",is_delimiter:!1,gloss:"!UNKNOWN"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Die",is_delimiter:!1,gloss:"!UNKNOWN"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Krähe.",is_delimiter:!1,gloss:"The-Crow"}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:"# Die Krähe.",annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Eine",is_delimiter:!1,gloss:"A"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Krähe",is_delimiter:!1,gloss:"crow"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"war",is_delimiter:!1,gloss:"was"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mit",is_delimiter:!1,gloss:"with"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mir",is_delimiter:!1,gloss:"me"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Aus",is_delimiter:!1,gloss:"out"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"der",is_delimiter:!1,gloss:"of-the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Stadt",is_delimiter:!1,gloss:"city"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"gezogen,",is_delimiter:!1,gloss:"drawn-(companion),"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Ist",is_delimiter:!1,gloss:"Is"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"bis",is_delimiter:!1,gloss:"until"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"heute",is_delimiter:!1,gloss:"to-day"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"für",is_delimiter:!1,gloss:"for"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"und",is_delimiter:!1,gloss:"and"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"für",is_delimiter:!1,gloss:"for"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Um",is_delimiter:!1,gloss:"about"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mein",is_delimiter:!1,gloss:"my"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Haupt",is_delimiter:!1,gloss:"head"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"geflogen.",is_delimiter:!1,gloss:"flown."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Eine Krähe war mit mir
Aus der Stadt gezogen,
Ist bis heute für und für
Um mein Haupt geflogen.`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Krähe,",is_delimiter:!1,gloss:"Crow,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"wunderliches",is_delimiter:!1,gloss:"wonderful"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Thier,",is_delimiter:!1,gloss:"animal,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Willst",is_delimiter:!1,gloss:"Wilt"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mich",is_delimiter:!1,gloss:"me"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nicht",is_delimiter:!1,gloss:"not"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"verlassen?",is_delimiter:!1,gloss:"leave?"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Meinst",is_delimiter:!1,gloss:"Meinst"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"wohl",is_delimiter:!1,gloss:"well"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"bald",is_delimiter:!1,gloss:"soon"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"als",is_delimiter:!1,gloss:"as"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Beute",is_delimiter:!1,gloss:"prey"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"hier",is_delimiter:!1,gloss:"here"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Meinen",is_delimiter:!1,gloss:"my"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Leib",is_delimiter:!1,gloss:"body"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"zu",is_delimiter:!1,gloss:"to"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"fassen?",is_delimiter:!1,gloss:"grasp?"}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Krähe, wunderliches Thier,
Willst mich nicht verlassen?
Meinst wohl bald als Beute hier
Meinen Leib zu fassen?`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Nun,",is_delimiter:!1,gloss:"Well,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"es",is_delimiter:!1,gloss:"it"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"wird",is_delimiter:!1,gloss:"will"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nicht",is_delimiter:!1,gloss:"not"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"weit",is_delimiter:!1,gloss:"far"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mehr",is_delimiter:!1,gloss:"more (longer)"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"gehn",is_delimiter:!1,gloss:"go"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"An",is_delimiter:!1,gloss:"Upon"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"dem",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Wanderstabe.",is_delimiter:!1,gloss:"walking-stick."},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Krähe,",is_delimiter:!1,gloss:"Crow,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"laß",is_delimiter:!1,gloss:"suffer"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mich",is_delimiter:!1,gloss:"me"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"endlich",is_delimiter:!1,gloss:"finally"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sehn",is_delimiter:!1,gloss:"see"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Treue",is_delimiter:!1,gloss:"fidelity"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"bis",is_delimiter:!1,gloss:"till"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"zum",is_delimiter:!1,gloss:"to-the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Grabe!",is_delimiter:!1,gloss:"grave!"},{txt:" ",is_delimiter:!0,gloss:null}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Nun, es wird nicht weit mehr gehn
An dem Wanderstabe.
Krähe, laß mich endlich sehn
Treue bis zum Grabe! `,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"#",is_delimiter:!1,gloss:"!UNKNOWN"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Letzte",is_delimiter:!1,gloss:"Last"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Hoffnung.",is_delimiter:!1,gloss:"hope."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:"# Letzte Hoffnung.",annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Hier",is_delimiter:!1,gloss:"Here"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"und",is_delimiter:!1,gloss:"and"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"da",is_delimiter:!1,gloss:"there"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ist",is_delimiter:!1,gloss:"is"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"an",is_delimiter:!1,gloss:"on"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"den",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Bäumen",is_delimiter:!1,gloss:"trees"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Noch",is_delimiter:!1,gloss:"yet"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ein",is_delimiter:!1,gloss:"a"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"buntes",is_delimiter:!1,gloss:"coloured"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Blatt",is_delimiter:!1,gloss:"leaf"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"zu",is_delimiter:!1,gloss:"to"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sehn,",is_delimiter:!1,gloss:"see,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Und",is_delimiter:!1,gloss:"And"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"bleibe",is_delimiter:!1,gloss:"remain"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"vor",is_delimiter:!1,gloss:"before"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"den",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Bäumen",is_delimiter:!1,gloss:"trees"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Oftmals",is_delimiter:!1,gloss:"oft-times"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"in",is_delimiter:!1,gloss:"in"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Gedanken",is_delimiter:!1,gloss:"thoughts"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"stehn.",is_delimiter:!1,gloss:"stand."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Hier und da ist an den Bäumen
Noch ein buntes Blatt zu sehn,
Und ich bleibe vor den Bäumen
Oftmals in Gedanken stehn.`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Schaue",is_delimiter:!1,gloss:"Look"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nach",is_delimiter:!1,gloss:"after"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"dem",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"einen",is_delimiter:!1,gloss:"one"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Blatte,",is_delimiter:!1,gloss:"leaf,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Hänge",is_delimiter:!1,gloss:"Hinge"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"meine",is_delimiter:!1,gloss:"my"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Hoffnung",is_delimiter:!1,gloss:"hope"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"dran;",is_delimiter:!1,gloss:"thereon;"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Spielt",is_delimiter:!1,gloss:"Plays"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"der",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Wind",is_delimiter:!1,gloss:"wind"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mit",is_delimiter:!1,gloss:"with"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"meinem",is_delimiter:!1,gloss:"my"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Blatte,",is_delimiter:!1,gloss:"leaf,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Zittr’",is_delimiter:!1,gloss:"Tremble"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ich,",is_delimiter:!1,gloss:"I,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"was",is_delimiter:!1,gloss:"what"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"zittern",is_delimiter:!1,gloss:"can-tremble"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"kann.",is_delimiter:!1,gloss:"can."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Schaue nach dem einen Blatte,
Hänge meine Hoffnung dran;
Spielt der Wind mit meinem Blatte,
Zittr’ ich, was ich zittern kann.`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Ach,",is_delimiter:!1,gloss:"Ah,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"und",is_delimiter:!1,gloss:"and"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"fällt",is_delimiter:!1,gloss:"falls"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"das",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Blatt",is_delimiter:!1,gloss:"leaf"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"zu",is_delimiter:!1,gloss:"to"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Boden,",is_delimiter:!1,gloss:"ground,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Fällt",is_delimiter:!1,gloss:"Falls"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mit",is_delimiter:!1,gloss:"with"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ihm",is_delimiter:!1,gloss:"it"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"die",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Hoffnung",is_delimiter:!1,gloss:"hope"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ab,",is_delimiter:!1,gloss:"off,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Fall’",is_delimiter:!1,gloss:"Fall’"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"selber",is_delimiter:!1,gloss:"myself"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mit",is_delimiter:!1,gloss:"with"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"zu",is_delimiter:!1,gloss:"to"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Boden,",is_delimiter:!1,gloss:"ground,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Wein’",is_delimiter:!1,gloss:"weep"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"auf",is_delimiter:!1,gloss:"on"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"meiner",is_delimiter:!1,gloss:"my"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Hoffnung",is_delimiter:!1,gloss:"hope"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Grab.",is_delimiter:!1,gloss:"grave."},{txt:" ",is_delimiter:!0,gloss:null}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Ach, und fällt das Blatt zu Boden,
Fällt mit ihm die Hoffnung ab,
Fall’ ich selber mit zu Boden,
Wein’ auf meiner Hoffnung Grab. `,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"#",is_delimiter:!1,gloss:"!UNKNOWN"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Im",is_delimiter:!1,gloss:"In-the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Dorfe",is_delimiter:!1,gloss:"village"}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:"# Im Dorfe",annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Es",is_delimiter:!1,gloss:"It"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"bellen",is_delimiter:!1,gloss:"bark"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"die",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Hunde,",is_delimiter:!1,gloss:"dogs,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"es",is_delimiter:!1,gloss:"it"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"rasseln",is_delimiter:!1,gloss:"rattle"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"die",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Ketten.",is_delimiter:!1,gloss:"chains."},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Die",is_delimiter:!1,gloss:"The"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Menschen",is_delimiter:!1,gloss:"men"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"schnarchen",is_delimiter:!1,gloss:"snore"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"in",is_delimiter:!1,gloss:"in"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ihren",is_delimiter:!1,gloss:"their"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Betten,",is_delimiter:!1,gloss:"beds,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Träumen",is_delimiter:!1,gloss:"dreaming"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sich",is_delimiter:!1,gloss:"to-themselves"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Manches,",is_delimiter:!1,gloss:"many-a-thing,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"was",is_delimiter:!1,gloss:"which"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sie",is_delimiter:!1,gloss:"they"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nicht",is_delimiter:!1,gloss:"not"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"haben,",is_delimiter:!1,gloss:"have,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Thun",is_delimiter:!1,gloss:"Do"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sich",is_delimiter:!1,gloss:"to-themselves"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"im",is_delimiter:!1,gloss:"in"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Guten",is_delimiter:!1,gloss:"good"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"und",is_delimiter:!1,gloss:"and"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Argen",is_delimiter:!1,gloss:"bad"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"erlaben:",is_delimiter:!1,gloss:"to-rejoice:"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Und",is_delimiter:!1,gloss:"And"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Morgen",is_delimiter:!1,gloss:"morning"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"früh",is_delimiter:!1,gloss:"early"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ist",is_delimiter:!1,gloss:"is"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Alles",is_delimiter:!1,gloss:"All"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"zerflossen.",is_delimiter:!1,gloss:"melted-away."},{txt:" ",is_delimiter:!0,gloss:null},{txt:"—",is_delimiter:!1,gloss:"—"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Je",is_delimiter:!1,gloss:"Well"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nun,",is_delimiter:!1,gloss:"then,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sie",is_delimiter:!1,gloss:"they"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"haben",is_delimiter:!1,gloss:"have"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ihr",is_delimiter:!1,gloss:"their"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Theil",is_delimiter:!1,gloss:"share"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"genossen,",is_delimiter:!1,gloss:"enjoyed,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Und",is_delimiter:!1,gloss:"And"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"hoffen,",is_delimiter:!1,gloss:"hope,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"was",is_delimiter:!1,gloss:"what"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sie",is_delimiter:!1,gloss:"they"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"noch",is_delimiter:!1,gloss:"yet"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"übrig",is_delimiter:!1,gloss:"left"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ließen,",is_delimiter:!1,gloss:"may-have-left,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Doch",is_delimiter:!1,gloss:"Yet"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"wieder",is_delimiter:!1,gloss:"again"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"zu",is_delimiter:!1,gloss:"to"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"finden",is_delimiter:!1,gloss:"find"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"auf",is_delimiter:!1,gloss:"upon"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ihren",is_delimiter:!1,gloss:"their"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Kissen.",is_delimiter:!1,gloss:"pillow."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Es bellen die Hunde, es rasseln die Ketten.
Die Menschen schnarchen in ihren Betten,
Träumen sich Manches, was sie nicht haben,
Thun sich im Guten und Argen erlaben:
Und Morgen früh ist Alles zerflossen. —
Je nun, sie haben ihr Theil genossen,
Und hoffen, was sie noch übrig ließen,
Doch wieder zu finden auf ihren Kissen.`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Bellt",is_delimiter:!1,gloss:"Bark"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mich",is_delimiter:!1,gloss:"me"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nur",is_delimiter:!1,gloss:"only"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"fort,",is_delimiter:!1,gloss:"forth,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ihr",is_delimiter:!1,gloss:"ye"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"wachen",is_delimiter:!1,gloss:"wake"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Hunde,",is_delimiter:!1,gloss:"dogs,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Laßt",is_delimiter:!1,gloss:"Let"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mich",is_delimiter:!1,gloss:"me"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nicht",is_delimiter:!1,gloss:"not"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ruhn",is_delimiter:!1,gloss:"rest"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"in",is_delimiter:!1,gloss:"in"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"der",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Schlummerstunde!",is_delimiter:!1,gloss:"slumber-hour!"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"bin",is_delimiter:!1,gloss:"am"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"zu",is_delimiter:!1,gloss:"to"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Ende",is_delimiter:!1,gloss:"end"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mit",is_delimiter:!1,gloss:"with"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"allen",is_delimiter:!1,gloss:"all"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Träumen",is_delimiter:!1,gloss:"dreams"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"—",is_delimiter:!1,gloss:"—"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Was",is_delimiter:!1,gloss:"What"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"will",is_delimiter:!1,gloss:"will"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"unter",is_delimiter:!1,gloss:"among"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"den",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Schläfern",is_delimiter:!1,gloss:"sleepers"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"säumen?",is_delimiter:!1,gloss:"delay?"},{txt:" ",is_delimiter:!0,gloss:null}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Bellt mich nur fort, ihr wachen Hunde,
Laßt mich nicht ruhn in der Schlummerstunde!
Ich bin zu Ende mit allen Träumen —
Was will ich unter den Schläfern säumen? `,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"#",is_delimiter:!1,gloss:"#"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Der",is_delimiter:!1,gloss:"The"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"stürmische",is_delimiter:!1,gloss:"stormy"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Morgen.",is_delimiter:!1,gloss:"Morning."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:"# Der stürmische Morgen.",annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Wie",is_delimiter:!1,gloss:"How"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"hat",is_delimiter:!1,gloss:"has"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"der",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Sturm",is_delimiter:!1,gloss:"storm"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"zerrissen",is_delimiter:!1,gloss:"torn"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Des",is_delimiter:!1,gloss:"Of-the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Himmels",is_delimiter:!1,gloss:"sky"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"graues",is_delimiter:!1,gloss:"gray"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Kleid!",is_delimiter:!1,gloss:"robe!"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Die",is_delimiter:!1,gloss:"The"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Wolkenfetzen",is_delimiter:!1,gloss:"cloud-patches"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"flattern",is_delimiter:!1,gloss:"flutter"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Umher",is_delimiter:!1,gloss:"About"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"in",is_delimiter:!1,gloss:"in"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mattem",is_delimiter:!1,gloss:"dull"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Streit.",is_delimiter:!1,gloss:"strife."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Wie hat der Sturm zerrissen
Des Himmels graues Kleid!
Die Wolkenfetzen flattern
Umher in mattem Streit.`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Und",is_delimiter:!1,gloss:"And"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"rothe",is_delimiter:!1,gloss:"red"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Feuerflammen",is_delimiter:!1,gloss:"fire-flames"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Ziehn",is_delimiter:!1,gloss:"move"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"zwischen",is_delimiter:!1,gloss:"between"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ihnen",is_delimiter:!1,gloss:"them"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"hin.",is_delimiter:!1,gloss:"hither-thither"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Das",is_delimiter:!1,gloss:"That"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nenn’",is_delimiter:!1,gloss:"call"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"einen",is_delimiter:!1,gloss:"a"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Morgen",is_delimiter:!1,gloss:"morn"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"So",is_delimiter:!1,gloss:"So"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"recht",is_delimiter:!1,gloss:"right"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nach",is_delimiter:!1,gloss:"after"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"meinem",is_delimiter:!1,gloss:"my"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Sinn!",is_delimiter:!1,gloss:"mind!"}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Und rothe Feuerflammen
Ziehn zwischen ihnen hin.
Das nenn’ ich einen Morgen
So recht nach meinem Sinn!`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Mein",is_delimiter:!1,gloss:"My"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Herz",is_delimiter:!1,gloss:"heart"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sieht",is_delimiter:!1,gloss:"sees"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"an",is_delimiter:!1,gloss:"in"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"dem",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Himmel",is_delimiter:!1,gloss:"heaven"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Gemahlt",is_delimiter:!1,gloss:"portrayed"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sein",is_delimiter:!1,gloss:"its"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"eignes",is_delimiter:!1,gloss:"own"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Bild",is_delimiter:!1,gloss:"picture"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"—",is_delimiter:!1,gloss:"—"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Es",is_delimiter:!1,gloss:"It"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ist",is_delimiter:!1,gloss:"is"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nichts",is_delimiter:!1,gloss:"nothing"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"als",is_delimiter:!1,gloss:"than"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"der",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Winter,",is_delimiter:!1,gloss:"winter,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Der",is_delimiter:!1,gloss:"The"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Winter",is_delimiter:!1,gloss:"winter"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"kalt",is_delimiter:!1,gloss:"cold"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"und",is_delimiter:!1,gloss:"and"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"wild!",is_delimiter:!1,gloss:"wild!"},{txt:" ",is_delimiter:!0,gloss:null}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Mein Herz sieht an dem Himmel
Gemahlt sein eignes Bild —
Es ist nichts als der Winter,
Der Winter kalt und wild! `,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"#",is_delimiter:!1,gloss:"!UNKNOWN"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Täuschung.",is_delimiter:!1,gloss:"Deception."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:"# Täuschung.",annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Ein",is_delimiter:!1,gloss:"A"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Licht",is_delimiter:!1,gloss:"light"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"tanzt",is_delimiter:!1,gloss:"dances"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"freundlich",is_delimiter:!1,gloss:"friendly"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"vor",is_delimiter:!1,gloss:"before"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mir",is_delimiter:!1,gloss:"me"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"her;",is_delimiter:!1,gloss:"there;"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"folg’",is_delimiter:!1,gloss:"follow"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ihm",is_delimiter:!1,gloss:"it"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nach",is_delimiter:!1,gloss:"now"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"die",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Kreuz",is_delimiter:!1,gloss:"cross"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"und",is_delimiter:!1,gloss:"and"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Quer;",is_delimiter:!1,gloss:"queer;"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"folg’",is_delimiter:!1,gloss:"follow"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ihm",is_delimiter:!1,gloss:"it"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"gern,",is_delimiter:!1,gloss:"gladly,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"und",is_delimiter:!1,gloss:"and"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"seh’s",is_delimiter:!1,gloss:"see-it’s"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ihm",is_delimiter:!1,gloss:"it"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"an,",is_delimiter:!1,gloss:"on,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Daß",is_delimiter:!1,gloss:"That"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"es",is_delimiter:!1,gloss:"it"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"verlockt",is_delimiter:!1,gloss:"allures"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"den",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Wandersmann.",is_delimiter:!1,gloss:"wayfarer."},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Ach,",is_delimiter:!1,gloss:"Ah,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"wer",is_delimiter:!1,gloss:"who"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"wie",is_delimiter:!1,gloss:"like"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"so",is_delimiter:!1,gloss:"so"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"elend",is_delimiter:!1,gloss:"wretched"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ist,",is_delimiter:!1,gloss:"is,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Giebt",is_delimiter:!1,gloss:"Giveth"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"gern",is_delimiter:!1,gloss:"gladly"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sich",is_delimiter:!1,gloss:"himself"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"hin",is_delimiter:!1,gloss:"(given) in"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"der",is_delimiter:!1,gloss:"to-the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"bunten",is_delimiter:!1,gloss:"gaudy"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"List,",is_delimiter:!1,gloss:"lure,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Die",is_delimiter:!1,gloss:"Which"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"hinter",is_delimiter:!1,gloss:"behind"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Eis",is_delimiter:!1,gloss:"rest"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"und",is_delimiter:!1,gloss:"and"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Nacht",is_delimiter:!1,gloss:"night"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"und",is_delimiter:!1,gloss:"and"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Graus",is_delimiter:!1,gloss:"horror"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Ihm",is_delimiter:!1,gloss:"To-him"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"weist",is_delimiter:!1,gloss:"points"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ein",is_delimiter:!1,gloss:"a"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"helles,",is_delimiter:!1,gloss:"bright,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"warmes",is_delimiter:!1,gloss:"warm"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Haus,",is_delimiter:!1,gloss:"house,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Und",is_delimiter:!1,gloss:"And"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"eine",is_delimiter:!1,gloss:"a"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"liebe",is_delimiter:!1,gloss:"dear"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Seele",is_delimiter:!1,gloss:"soul"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"drin",is_delimiter:!1,gloss:"therein"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"—",is_delimiter:!1,gloss:"—"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Nur",is_delimiter:!1,gloss:"Only"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Täuschung",is_delimiter:!1,gloss:"Delusion"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ist",is_delimiter:!1,gloss:"is"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"für",is_delimiter:!1,gloss:"for"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mich",is_delimiter:!1,gloss:"me"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Gewinn!",is_delimiter:!1,gloss:"Gain!"},{txt:" ",is_delimiter:!0,gloss:null}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Ein Licht tanzt freundlich vor mir her;
Ich folg’ ihm nach die Kreuz und Quer;
Ich folg’ ihm gern, und seh’s ihm an,
Daß es verlockt den Wandersmann.
Ach, wer wie ich so elend ist,
Giebt gern sich hin der bunten List,
Die hinter Eis und Nacht und Graus
Ihm weist ein helles, warmes Haus,
Und eine liebe Seele drin —
Nur Täuschung ist für mich Gewinn! `,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"#",is_delimiter:!1,gloss:"#"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Der",is_delimiter:!1,gloss:"The"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Wegweiser.",is_delimiter:!1,gloss:"Waypointer."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:"# Der Wegweiser.",annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Was",is_delimiter:!1,gloss:"What"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"vermeid’",is_delimiter:!1,gloss:"avoid"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"denn",is_delimiter:!1,gloss:"then"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"die",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Wege,",is_delimiter:!1,gloss:"ways,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Wo",is_delimiter:!1,gloss:"Where"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"die",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"andren",is_delimiter:!1,gloss:"other"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Wandrer",is_delimiter:!1,gloss:"wanderers"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"gehn,",is_delimiter:!1,gloss:"go,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Suche",is_delimiter:!1,gloss:"Seek"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mir",is_delimiter:!1,gloss:"to-me"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"versteckte",is_delimiter:!1,gloss:"concealed"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Stege",is_delimiter:!1,gloss:"causeways"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Durch",is_delimiter:!1,gloss:"Through"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"verschneite",is_delimiter:!1,gloss:"snow-covered"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Felsenhöhn?",is_delimiter:!1,gloss:"rock-highs?"}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Was vermeid’ ich denn die Wege,
Wo die andren Wandrer gehn,
Suche mir versteckte Stege
Durch verschneite Felsenhöhn?`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Habe",is_delimiter:!1,gloss:"Have"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ja",is_delimiter:!1,gloss:"yes"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"doch",is_delimiter:!1,gloss:"yet"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nichts",is_delimiter:!1,gloss:"nothing"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"begangen,",is_delimiter:!1,gloss:"perpetrated,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Daß",is_delimiter:!1,gloss:"That"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Menschen",is_delimiter:!1,gloss:"men"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sollte",is_delimiter:!1,gloss:"should"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"scheun",is_delimiter:!1,gloss:"shun"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"—",is_delimiter:!1,gloss:"—"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Welch",is_delimiter:!1,gloss:"What"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ein",is_delimiter:!1,gloss:"a"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"thörichtes",is_delimiter:!1,gloss:"foolish"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Verlangen",is_delimiter:!1,gloss:"desire"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Treibt",is_delimiter:!1,gloss:"Drives"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mich",is_delimiter:!1,gloss:"me"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"in",is_delimiter:!1,gloss:"into"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"die",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Wüstenein?",is_delimiter:!1,gloss:"waste?"}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Habe ja doch nichts begangen,
Daß ich Menschen sollte scheun —
Welch ein thörichtes Verlangen
Treibt mich in die Wüstenein?`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Weiser",is_delimiter:!1,gloss:"Wise"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"stehen",is_delimiter:!1,gloss:"stand"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"auf",is_delimiter:!1,gloss:"upon"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"den",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Straßen,",is_delimiter:!1,gloss:"streets,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Weisen",is_delimiter:!1,gloss:"wise(ly)"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"auf",is_delimiter:!1,gloss:"upon"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"die",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Städte",is_delimiter:!1,gloss:"cities"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"zu,",is_delimiter:!1,gloss:"to,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Und",is_delimiter:!1,gloss:"And"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"wandre",is_delimiter:!1,gloss:"wander"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sonder",is_delimiter:!1,gloss:"without"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Maßen,",is_delimiter:!1,gloss:"measure,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Ohne",is_delimiter:!1,gloss:"Without"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Ruh’,",is_delimiter:!1,gloss:"rest,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"und",is_delimiter:!1,gloss:"and"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"suche",is_delimiter:!1,gloss:"seek"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Ruh’.",is_delimiter:!1,gloss:"rest."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Weiser stehen auf den Straßen,
Weisen auf die Städte zu,
Und ich wandre sonder Maßen,
Ohne Ruh’, und suche Ruh’.`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Einen",is_delimiter:!1,gloss:"A"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Weiser",is_delimiter:!1,gloss:"Sure"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"seh’",is_delimiter:!1,gloss:"see"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"stehen",is_delimiter:!1,gloss:"standing"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Unverrückt",is_delimiter:!1,gloss:"Unmoved"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"vor",is_delimiter:!1,gloss:"before"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"meinem",is_delimiter:!1,gloss:"my"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Blick;",is_delimiter:!1,gloss:"sight;"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Eine",is_delimiter:!1,gloss:"A"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Straße",is_delimiter:!1,gloss:"road"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"muß",is_delimiter:!1,gloss:"must"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"gehen,",is_delimiter:!1,gloss:"go,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Die",is_delimiter:!1,gloss:"Which"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"noch",is_delimiter:!1,gloss:"yet"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Keiner",is_delimiter:!1,gloss:"Nobody"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ging",is_delimiter:!1,gloss:"went"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"zurück.",is_delimiter:!1,gloss:"back."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Einen Weiser seh’ ich stehen
Unverrückt vor meinem Blick;
Eine Straße muß ich gehen,
Die noch Keiner ging zurück.`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"#",is_delimiter:!1,gloss:"!UNKNOWN"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Das",is_delimiter:!1,gloss:"!UNKNOWN"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Wirthshaus.",is_delimiter:!1,gloss:"!UNKNOWN"}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:"# Das Wirthshaus.",annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Auf",is_delimiter:!1,gloss:"On"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"einen",is_delimiter:!1,gloss:"a"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Todtenacker",is_delimiter:!1,gloss:"graveyard"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Hat",is_delimiter:!1,gloss:"Has"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mich",is_delimiter:!1,gloss:"me"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mein",is_delimiter:!1,gloss:"my"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Weg",is_delimiter:!1,gloss:"way"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"gebracht.",is_delimiter:!1,gloss:"brought."},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Allhier",is_delimiter:!1,gloss:"Here"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"will",is_delimiter:!1,gloss:"will"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"einkehren:",is_delimiter:!1,gloss:"pause:"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Hab’",is_delimiter:!1,gloss:"Have"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"bei",is_delimiter:!1,gloss:"by"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mir",is_delimiter:!1,gloss:"myself"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"gedacht.",is_delimiter:!1,gloss:"thought."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Auf einen Todtenacker
Hat mich mein Weg gebracht.
Allhier will ich einkehren:
Hab’ ich bei mir gedacht.`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Ihr",is_delimiter:!1,gloss:"Ye"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"grünen",is_delimiter:!1,gloss:"green"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Todtenkränze",is_delimiter:!1,gloss:"wreaths-of-death"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Könnt",is_delimiter:!1,gloss:"May"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"wohl",is_delimiter:!1,gloss:"well"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"die",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Zeichen",is_delimiter:!1,gloss:"signs"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sein,",is_delimiter:!1,gloss:"be,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Die",is_delimiter:!1,gloss:"Which"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"müde",is_delimiter:!1,gloss:"weary"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Wandrer",is_delimiter:!1,gloss:"wayfarer"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"laden",is_delimiter:!1,gloss:"invite"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"In’s",is_delimiter:!1,gloss:"Into-the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"kühle",is_delimiter:!1,gloss:"cool"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Wirthshaus",is_delimiter:!1,gloss:"inn"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ein.",is_delimiter:!1,gloss:"one."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Ihr grünen Todtenkränze
Könnt wohl die Zeichen sein,
Die müde Wandrer laden
In’s kühle Wirthshaus ein.`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Sind",is_delimiter:!1,gloss:"Are"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"denn",is_delimiter:!1,gloss:"then"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"in",is_delimiter:!1,gloss:"in"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"diesem",is_delimiter:!1,gloss:"this"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Hause",is_delimiter:!1,gloss:"house"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Die",is_delimiter:!1,gloss:"the (these)"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Kammern",is_delimiter:!1,gloss:"chambers"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"all’",is_delimiter:!1,gloss:"all"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"besetzt?",is_delimiter:!1,gloss:"occupied?"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Bin",is_delimiter:!1,gloss:"Am"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"matt",is_delimiter:!1,gloss:"weary"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"zum",is_delimiter:!1,gloss:"to"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Niedersinken",is_delimiter:!1,gloss:"sinking-down"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Und",is_delimiter:!1,gloss:"And"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"tödtlich",is_delimiter:!1,gloss:"deadly"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"schwer",is_delimiter:!1,gloss:"heavily"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"verletzt.",is_delimiter:!1,gloss:"wounded."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Sind denn in diesem Hause
Die Kammern all’ besetzt?
Bin matt zum Niedersinken
Und tödtlich schwer verletzt.`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"O",is_delimiter:!1,gloss:"O"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"unbarmherz’ge",is_delimiter:!1,gloss:"unmerciful"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Schenke,",is_delimiter:!1,gloss:"inn,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Doch",is_delimiter:!1,gloss:"But"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"weisest",is_delimiter:!1,gloss:"wilt-send-away"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"du",is_delimiter:!1,gloss:"thou"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mich",is_delimiter:!1,gloss:"me"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ab?",is_delimiter:!1,gloss:"off?"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Nun",is_delimiter:!1,gloss:"Now"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"weiter",is_delimiter:!1,gloss:"further"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"denn,",is_delimiter:!1,gloss:"then,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nur",is_delimiter:!1,gloss:"only"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"weiter,",is_delimiter:!1,gloss:"further,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Mein",is_delimiter:!1,gloss:"My"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"treuer",is_delimiter:!1,gloss:"faithful"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Wanderstab!",is_delimiter:!1,gloss:"staff!"}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`O unbarmherz’ge Schenke,
Doch weisest du mich ab?
Nun weiter denn, nur weiter,
Mein treuer Wanderstab!`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"#",is_delimiter:!1,gloss:"#"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Das",is_delimiter:!1,gloss:"The"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Irrlicht.",is_delimiter:!1,gloss:"Will-o'-the-wisp."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:"# Das Irrlicht.",annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"In",is_delimiter:!1,gloss:"In"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"die",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"tiefsten",is_delimiter:!1,gloss:"deepest"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Felsengründe",is_delimiter:!1,gloss:"rock-bottoms"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Lockte",is_delimiter:!1,gloss:"Enticed"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mich",is_delimiter:!1,gloss:"me"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ein",is_delimiter:!1,gloss:"a"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Irrlicht",is_delimiter:!1,gloss:"Will-o'-the-wisp"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"hin:",is_delimiter:!1,gloss:"thither:"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Wie",is_delimiter:!1,gloss:"How"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"einen",is_delimiter:!1,gloss:"an"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Ausgang",is_delimiter:!1,gloss:"issue"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"finde,",is_delimiter:!1,gloss:"find,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Liegt",is_delimiter:!1,gloss:"Lies"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nicht",is_delimiter:!1,gloss:"not"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"schwer",is_delimiter:!1,gloss:"heavy (hard)"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mir",is_delimiter:!1,gloss:"to-me"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"in",is_delimiter:!1,gloss:"in"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"dem",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Sinn.",is_delimiter:!1,gloss:"mind."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`In die tiefsten Felsengründe
Lockte mich ein Irrlicht hin:
Wie ich einen Ausgang finde,
Liegt nicht schwer mir in dem Sinn.`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Bin",is_delimiter:!1,gloss:"Am"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"gewohnt",is_delimiter:!1,gloss:"accustomed"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"das",is_delimiter:!1,gloss:"to-the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"irre",is_delimiter:!1,gloss:"erring"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Gehen,",is_delimiter:!1,gloss:"going,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"’S",is_delimiter:!1,gloss:"’S"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"führt",is_delimiter:!1,gloss:"leads"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ja",is_delimiter:!1,gloss:"indeed"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"jeder",is_delimiter:!1,gloss:"every"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Weg",is_delimiter:!1,gloss:"way"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"zum",is_delimiter:!1,gloss:"to-the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Ziel:",is_delimiter:!1,gloss:"goal:"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Unsre",is_delimiter:!1,gloss:"Our"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Freuden,",is_delimiter:!1,gloss:"joys,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"unsre",is_delimiter:!1,gloss:"our"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Wehen,",is_delimiter:!1,gloss:"pains,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Alles",is_delimiter:!1,gloss:"All-(is)"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"eines",is_delimiter:!1,gloss:"(merely)-a"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Irrlichts",is_delimiter:!1,gloss:"will-o'-the-wisp"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Spiel!",is_delimiter:!1,gloss:"play!"}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Bin gewohnt das irre Gehen,
’S führt ja jeder Weg zum Ziel:
Unsre Freuden, unsre Wehen,
Alles eines Irrlichts Spiel!`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Durch",is_delimiter:!1,gloss:"Through"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"des",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Bergstroms",is_delimiter:!1,gloss:"mountain-stream's"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"trockne",is_delimiter:!1,gloss:"dry"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Rinnen",is_delimiter:!1,gloss:"channels"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Wind’",is_delimiter:!1,gloss:"wends"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ruhig",is_delimiter:!1,gloss:"quietly"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mich",is_delimiter:!1,gloss:"myself"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"hinab",is_delimiter:!1,gloss:"down"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"—",is_delimiter:!1,gloss:"—"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Jeder",is_delimiter:!1,gloss:"Every"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Strom",is_delimiter:!1,gloss:"stream"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"wird’s",is_delimiter:!1,gloss:"will-for-it-(obtain-it)"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Meer",is_delimiter:!1,gloss:"sea"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"gewinnen,",is_delimiter:!1,gloss:"to-gain,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Jedes",is_delimiter:!1,gloss:"Every"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Leiden",is_delimiter:!1,gloss:"suffering"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"auch",is_delimiter:!1,gloss:"also"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ein",is_delimiter:!1,gloss:"a"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Grab.",is_delimiter:!1,gloss:"grave."},{txt:" ",is_delimiter:!0,gloss:null}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Durch des Bergstroms trockne Rinnen
Wind’ ich ruhig mich hinab —
Jeder Strom wird’s Meer gewinnen,
Jedes Leiden auch ein Grab. `,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"#",is_delimiter:!1,gloss:"!UNKNOWN"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Rast.",is_delimiter:!1,gloss:"Rest."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:"# Rast.",annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Nun",is_delimiter:!1,gloss:"Now"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"merk",is_delimiter:!1,gloss:"perceive"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"erst,",is_delimiter:!1,gloss:"first,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"wie",is_delimiter:!1,gloss:"how"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"müd’",is_delimiter:!1,gloss:"tired"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"bin,",is_delimiter:!1,gloss:"am,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Da",is_delimiter:!1,gloss:"When"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"zur",is_delimiter:!1,gloss:"to"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Ruh’",is_delimiter:!1,gloss:"rest"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mich",is_delimiter:!1,gloss:"myself"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"lege;",is_delimiter:!1,gloss:"lay;"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Das",is_delimiter:!1,gloss:"The"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Wandern",is_delimiter:!1,gloss:"wandering"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"hielt",is_delimiter:!1,gloss:"held"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mich",is_delimiter:!1,gloss:"me"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"munter",is_delimiter:!1,gloss:"merry"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"hin",is_delimiter:!1,gloss:"on"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Auf",is_delimiter:!1,gloss:"Upon"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"unwirthbarem",is_delimiter:!1,gloss:"unfit-for habitation"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Wege.",is_delimiter:!1,gloss:"way."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Nun merk ich erst, wie müd’ ich bin,
Da ich zur Ruh’ mich lege;
Das Wandern hielt mich munter hin
Auf unwirthbarem Wege.`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Die",is_delimiter:!1,gloss:"The"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Füße",is_delimiter:!1,gloss:"feet"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"frugen",is_delimiter:!1,gloss:"ask'd"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nicht",is_delimiter:!1,gloss:"not"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nach",is_delimiter:!1,gloss:"after"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Rast,",is_delimiter:!1,gloss:"rest,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Es",is_delimiter:!1,gloss:"It"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"war",is_delimiter:!1,gloss:"was"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"zu",is_delimiter:!1,gloss:"too"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"kalt",is_delimiter:!1,gloss:"cold"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"zum",is_delimiter:!1,gloss:"to"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Stehen,",is_delimiter:!1,gloss:"stand,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Der",is_delimiter:!1,gloss:"The"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Rücken",is_delimiter:!1,gloss:"back"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"fühlte",is_delimiter:!1,gloss:"felt"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"keine",is_delimiter:!1,gloss:"no"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Last,",is_delimiter:!1,gloss:"load,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Der",is_delimiter:!1,gloss:"The"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Sturm",is_delimiter:!1,gloss:"storm"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"half",is_delimiter:!1,gloss:"helped"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"fort",is_delimiter:!1,gloss:"forth"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mich",is_delimiter:!1,gloss:"me"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"wehen.",is_delimiter:!1,gloss:"to-blow."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Die Füße frugen nicht nach Rast,
Es war zu kalt zum Stehen,
Der Rücken fühlte keine Last,
Der Sturm half fort mich wehen.`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"In",is_delimiter:!1,gloss:"In"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"eines",is_delimiter:!1,gloss:"one (a)"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Köhlers",is_delimiter:!1,gloss:"coalman’s"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"engem",is_delimiter:!1,gloss:"close"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Haus",is_delimiter:!1,gloss:"house"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Hab’",is_delimiter:!1,gloss:"Have"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Obdach",is_delimiter:!1,gloss:"shelter"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"gefunden;",is_delimiter:!1,gloss:"found;"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Doch",is_delimiter:!1,gloss:"Yet"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"meine",is_delimiter:!1,gloss:"my"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Glieder",is_delimiter:!1,gloss:"limbs"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ruhn",is_delimiter:!1,gloss:"rest"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nicht",is_delimiter:!1,gloss:"not"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"aus:",is_delimiter:!1,gloss:"out (therefrom):"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"So",is_delimiter:!1,gloss:"So"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"brennen",is_delimiter:!1,gloss:"burn"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ihre",is_delimiter:!1,gloss:"their"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Wunden.",is_delimiter:!1,gloss:"wounds."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`In eines Köhlers engem Haus
Hab’ Obdach ich gefunden;
Doch meine Glieder ruhn nicht aus:
So brennen ihre Wunden.`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Auch",is_delimiter:!1,gloss:"Also"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"du,",is_delimiter:!1,gloss:"thou,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mein",is_delimiter:!1,gloss:"my"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Herz,",is_delimiter:!1,gloss:"heart,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"im",is_delimiter:!1,gloss:"in-the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Kampf",is_delimiter:!1,gloss:"battle"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"und",is_delimiter:!1,gloss:"and"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Sturm",is_delimiter:!1,gloss:"storm"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"So",is_delimiter:!1,gloss:"So"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"wild",is_delimiter:!1,gloss:"wild"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"und",is_delimiter:!1,gloss:"and"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"so",is_delimiter:!1,gloss:"so"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"verwegen,",is_delimiter:!1,gloss:"daring,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Fühlst",is_delimiter:!1,gloss:"Feel’st"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"in",is_delimiter:!1,gloss:"in"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"der",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Still’",is_delimiter:!1,gloss:"stillness"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"erst",is_delimiter:!1,gloss:"first"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"deinen",is_delimiter:!1,gloss:"thy"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Wurm",is_delimiter:!1,gloss:"worm"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Mit",is_delimiter:!1,gloss:"With"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"heißem",is_delimiter:!1,gloss:"hot"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Stich",is_delimiter:!1,gloss:"sting"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sich",is_delimiter:!1,gloss:"itself"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"regen!",is_delimiter:!1,gloss:"move!"}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Auch du, mein Herz, im Kampf und Sturm
So wild und so verwegen,
Fühlst in der Still’ erst deinen Wurm
Mit heißem Stich sich regen!`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"#",is_delimiter:!1,gloss:"#"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Die",is_delimiter:!1,gloss:"The"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Nebensonnen.",is_delimiter:!1,gloss:"Sundogs."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:"# Die Nebensonnen.",annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Drei",is_delimiter:!1,gloss:"Three"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Sonnen",is_delimiter:!1,gloss:"suns"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sah’",is_delimiter:!1,gloss:"saw"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"am",is_delimiter:!1,gloss:"on-the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Himmel",is_delimiter:!1,gloss:"heaven"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"stehn,",is_delimiter:!1,gloss:"to-stand,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Hab’",is_delimiter:!1,gloss:"Have"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"lang’",is_delimiter:!1,gloss:"long"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"und",is_delimiter:!1,gloss:"and"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"fest",is_delimiter:!1,gloss:"firm"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sie",is_delimiter:!1,gloss:"them"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"angesehn;",is_delimiter:!1,gloss:"gazed-on;"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Und",is_delimiter:!1,gloss:"And"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sie",is_delimiter:!1,gloss:"they"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"auch",is_delimiter:!1,gloss:"also"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"standen",is_delimiter:!1,gloss:"stood"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"da",is_delimiter:!1,gloss:"there"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"so",is_delimiter:!1,gloss:"so"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"stier,",is_delimiter:!1,gloss:"sterr,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Als",is_delimiter:!1,gloss:"As"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"könnten",is_delimiter:!1,gloss:"they-could"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sie",is_delimiter:!1,gloss:"they"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nicht",is_delimiter:!1,gloss:"not"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"weg",is_delimiter:!1,gloss:"away"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"von",is_delimiter:!1,gloss:"from"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mir.",is_delimiter:!1,gloss:"me."},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Ach,",is_delimiter:!1,gloss:"Ah,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"meine",is_delimiter:!1,gloss:"my"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Sonnen",is_delimiter:!1,gloss:"suns"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"seid",is_delimiter:!1,gloss:"be-(are)"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ihr",is_delimiter:!1,gloss:"you"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nicht!",is_delimiter:!1,gloss:"not!"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Schaut",is_delimiter:!1,gloss:"Look-(ye)"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Andren",is_delimiter:!1,gloss:"on-(the-)others"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"doch",is_delimiter:!1,gloss:"however"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"in’s",is_delimiter:!1,gloss:"into-the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Angesicht!",is_delimiter:!1,gloss:"face!"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Ja,",is_delimiter:!1,gloss:"Yes,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"neulich",is_delimiter:!1,gloss:"lately"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"hatt’",is_delimiter:!1,gloss:"had"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"auch",is_delimiter:!1,gloss:"also"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"wohl",is_delimiter:!1,gloss:"well-(perhaps)"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"drei:",is_delimiter:!1,gloss:"three:"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Nun",is_delimiter:!1,gloss:"now"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sind",is_delimiter:!1,gloss:"are"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"hinab",is_delimiter:!1,gloss:"down-(gone)"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"die",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"besten",is_delimiter:!1,gloss:"best"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"zwei.",is_delimiter:!1,gloss:"two."},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Ging’",is_delimiter:!1,gloss:"May-(it)"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nur",is_delimiter:!1,gloss:"only"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"die",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"dritt’",is_delimiter:!1,gloss:"third"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"erst",is_delimiter:!1,gloss:"first"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"hinterdrein!",is_delimiter:!1,gloss:"behind-the-first!(may-it)"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Im",is_delimiter:!1,gloss:"In"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Dunkel",is_delimiter:!1,gloss:"darkness"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"wird",is_delimiter:!1,gloss:"will"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mir",is_delimiter:!1,gloss:"to-me"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"wohler",is_delimiter:!1,gloss:"better"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sein.",is_delimiter:!1,gloss:"be."},{txt:" ",is_delimiter:!0,gloss:null}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Drei Sonnen sah’ ich am Himmel stehn,
Hab’ lang’ und fest sie angesehn;
Und sie auch standen da so stier,
Als könnten sie nicht weg von mir.
Ach, meine Sonnen seid ihr nicht!
Schaut Andren doch in’s Angesicht!
Ja, neulich hatt’ ich auch wohl drei:
Nun sind hinab die besten zwei.
Ging’ nur die dritt’ erst hinterdrein!
Im Dunkel wird mir wohler sein. `,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"#",is_delimiter:!1,gloss:"!UNKNOWN"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Frühlingstraum.",is_delimiter:!1,gloss:"Spring-dream."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:"# Frühlingstraum.",annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"träumte",is_delimiter:!1,gloss:"dreamt"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"von",is_delimiter:!1,gloss:"of"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"bunten",is_delimiter:!1,gloss:"bright-colored"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Blumen,",is_delimiter:!1,gloss:"flowers,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"So",is_delimiter:!1,gloss:"So"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"wie",is_delimiter:!1,gloss:"as"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sie",is_delimiter:!1,gloss:"they"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"wohl",is_delimiter:!1,gloss:"well"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"blühen",is_delimiter:!1,gloss:"bloom"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"im",is_delimiter:!1,gloss:"in-the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Mai,",is_delimiter:!1,gloss:"May,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"träumte",is_delimiter:!1,gloss:"dreamt"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"von",is_delimiter:!1,gloss:"of"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"grünen",is_delimiter:!1,gloss:"green"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Wiesen,",is_delimiter:!1,gloss:"meadows,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Von",is_delimiter:!1,gloss:"From"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"lustigem",is_delimiter:!1,gloss:"merry"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Vogelgeschrei.",is_delimiter:!1,gloss:"bird-calls."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Ich träumte von bunten Blumen,
So wie sie wohl blühen im Mai,
Ich träumte von grünen Wiesen,
Von lustigem Vogelgeschrei.`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Und",is_delimiter:!1,gloss:"And"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"als",is_delimiter:!1,gloss:"when"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"die",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Hähne",is_delimiter:!1,gloss:"cocks"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"krähten,",is_delimiter:!1,gloss:"crowed,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Da",is_delimiter:!1,gloss:"Then"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ward",is_delimiter:!1,gloss:"was"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mein",is_delimiter:!1,gloss:"my"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Auge",is_delimiter:!1,gloss:"eye"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"wach;",is_delimiter:!1,gloss:"awake;"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Da",is_delimiter:!1,gloss:"Then"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"war",is_delimiter:!1,gloss:"was"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"es",is_delimiter:!1,gloss:"it"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"kalt",is_delimiter:!1,gloss:"cold"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"und",is_delimiter:!1,gloss:"and"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"finster,",is_delimiter:!1,gloss:"dark,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Es",is_delimiter:!1,gloss:"(There)"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"schrieen",is_delimiter:!1,gloss:"cawed"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"die",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Raben",is_delimiter:!1,gloss:"ravens"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"vom",is_delimiter:!1,gloss:"from the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Dach.",is_delimiter:!1,gloss:"roof."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Und als die Hähne krähten,
Da ward mein Auge wach;
Da war es kalt und finster,
Es schrieen die Raben vom Dach.`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Doch",is_delimiter:!1,gloss:"But"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"an",is_delimiter:!1,gloss:"on"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"den",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Fensterscheiben",is_delimiter:!1,gloss:"windowpanes"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Wer",is_delimiter:!1,gloss:"Who"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mahlte",is_delimiter:!1,gloss:"painted"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"die",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Blätter",is_delimiter:!1,gloss:"leaves"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"da?",is_delimiter:!1,gloss:"there?"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Ihr",is_delimiter:!1,gloss:"You"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"lacht",is_delimiter:!1,gloss:"laugh"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"wohl",is_delimiter:!1,gloss:"well"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"über",is_delimiter:!1,gloss:"about"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"den",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Träumer,",is_delimiter:!1,gloss:"dreamer,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Der",is_delimiter:!1,gloss:"Who"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Blumen",is_delimiter:!1,gloss:"flowers"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"im",is_delimiter:!1,gloss:"in"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Winter",is_delimiter:!1,gloss:"winter"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sah?",is_delimiter:!1,gloss:"saw?"}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Doch an den Fensterscheiben
Wer mahlte die Blätter da?
Ihr lacht wohl über den Träumer,
Der Blumen im Winter sah?`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"träumte",is_delimiter:!1,gloss:"dreamt"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"von",is_delimiter:!1,gloss:"of"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Lieb’",is_delimiter:!1,gloss:"love"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"um",is_delimiter:!1,gloss:"about"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Liebe,",is_delimiter:!1,gloss:"love,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Von",is_delimiter:!1,gloss:"Of"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"einer",is_delimiter:!1,gloss:"a"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"schönen",is_delimiter:!1,gloss:"beautiful"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Maid,",is_delimiter:!1,gloss:"girl,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Von",is_delimiter:!1,gloss:"Of"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Herzen",is_delimiter:!1,gloss:"hearts"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"und",is_delimiter:!1,gloss:"and"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"von",is_delimiter:!1,gloss:"of"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Küssen,",is_delimiter:!1,gloss:"kisses,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Von",is_delimiter:!1,gloss:"Of"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Wonn’",is_delimiter:!1,gloss:"bliss"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"und",is_delimiter:!1,gloss:"and"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Seligkeit.",is_delimiter:!1,gloss:"happiness."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Ich träumte von Lieb’ um Liebe,
Von einer schönen Maid,
Von Herzen und von Küssen,
Von Wonn’ und Seligkeit.`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Und",is_delimiter:!1,gloss:"And"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"als",is_delimiter:!1,gloss:"when"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"die",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Hähne",is_delimiter:!1,gloss:"Cocks"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"krähten,",is_delimiter:!1,gloss:"crew,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Da",is_delimiter:!1,gloss:"Then"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ward",is_delimiter:!1,gloss:"was"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mein",is_delimiter:!1,gloss:"my"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Herze",is_delimiter:!1,gloss:"heart"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"wach;",is_delimiter:!1,gloss:"awake;"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Nun",is_delimiter:!1,gloss:"Now"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sitz’",is_delimiter:!1,gloss:"sit"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"hier",is_delimiter:!1,gloss:"here"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"alleine",is_delimiter:!1,gloss:"alone"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Und",is_delimiter:!1,gloss:"And"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"denke",is_delimiter:!1,gloss:"think"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"dem",is_delimiter:!1,gloss:"of-the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Traume",is_delimiter:!1,gloss:"dream"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nach.",is_delimiter:!1,gloss:"afterwards-counter."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Und als die Hähne krähten,
Da ward mein Herze wach;
Nun sitz’ ich hier alleine
Und denke dem Traume nach.`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Die",is_delimiter:!1,gloss:"The"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Augen",is_delimiter:!1,gloss:"eyes"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"schließ’",is_delimiter:!1,gloss:"close-I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"wieder,",is_delimiter:!1,gloss:"again,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Noch",is_delimiter:!1,gloss:"Nor"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"schlägt",is_delimiter:!1,gloss:"beats"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"das",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Herz",is_delimiter:!1,gloss:"heart"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"so",is_delimiter:!1,gloss:"so"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"warm.",is_delimiter:!1,gloss:"warm."},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Wann",is_delimiter:!1,gloss:"When"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"grünt",is_delimiter:!1,gloss:"greens"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ihr",is_delimiter:!1,gloss:"your"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Blätter",is_delimiter:!1,gloss:"leaves"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"am",is_delimiter:!1,gloss:"at-the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Fenster?",is_delimiter:!1,gloss:"window?"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Wann",is_delimiter:!1,gloss:"When"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"halt’",is_delimiter:!1,gloss:"hold"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"dich,",is_delimiter:!1,gloss:"thee,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Liebchen,",is_delimiter:!1,gloss:"dear-one,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"im",is_delimiter:!1,gloss:"in-the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Arm?",is_delimiter:!1,gloss:"arm?"},{txt:" ",is_delimiter:!0,gloss:null}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Die Augen schließ’ ich wieder,
Noch schlägt das Herz so warm.
Wann grünt ihr Blätter am Fenster?
Wann halt’ ich dich, Liebchen, im Arm? `,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"#",is_delimiter:!1,gloss:"!UNKNOWN"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Einsamkeit.",is_delimiter:!1,gloss:"!UNKNOWN"}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:"# Einsamkeit.",annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Wie",is_delimiter:!1,gloss:"Like"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"eine",is_delimiter:!1,gloss:"a"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"trübe",is_delimiter:!1,gloss:"dark"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Wolke",is_delimiter:!1,gloss:"cloud"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Durch",is_delimiter:!1,gloss:"Through"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"heitre",is_delimiter:!1,gloss:"bright"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Lüfte",is_delimiter:!1,gloss:"airs"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"geht,",is_delimiter:!1,gloss:"goes,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Wann",is_delimiter:!1,gloss:"When"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"in",is_delimiter:!1,gloss:"in"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"der",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Tanne",is_delimiter:!1,gloss:"fir-tree"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Wipfel",is_delimiter:!1,gloss:"top"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Ein",is_delimiter:!1,gloss:"A"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mattes",is_delimiter:!1,gloss:"languid"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Lüftchen",is_delimiter:!1,gloss:"little-breeze"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"weht:",is_delimiter:!1,gloss:"blows:"}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Wie eine trübe Wolke
Durch heitre Lüfte geht,
Wann in der Tanne Wipfel
Ein mattes Lüftchen weht:`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"So",is_delimiter:!1,gloss:"So"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"zieh’",is_delimiter:!1,gloss:"zieh’"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ich",is_delimiter:!1,gloss:"ich"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"meine",is_delimiter:!1,gloss:"meine"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Straße",is_delimiter:!1,gloss:"Strasse"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Dahin",is_delimiter:!1,gloss:"dahin"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mit",is_delimiter:!1,gloss:"mit"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"trägem",is_delimiter:!1,gloss:"trägem"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Fuß,",is_delimiter:!1,gloss:"Fuße,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Durch",is_delimiter:!1,gloss:"Durch"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"helles,",is_delimiter:!1,gloss:"helles,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"frohes",is_delimiter:!1,gloss:"frohes"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Leben,",is_delimiter:!1,gloss:"Leben,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Einsam",is_delimiter:!1,gloss:"einsam"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"und",is_delimiter:!1,gloss:"und"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ohne",is_delimiter:!1,gloss:"ohne"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Gruß.",is_delimiter:!1,gloss:"Gruss."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`So zieh’ ich meine Straße
Dahin mit trägem Fuß,
Durch helles, frohes Leben,
Einsam und ohne Gruß.`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Ach,",is_delimiter:!1,gloss:"Ah,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"daß",is_delimiter:!1,gloss:"that"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"die",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Luft",is_delimiter:!1,gloss:"air"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"so",is_delimiter:!1,gloss:"so"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ruhig!",is_delimiter:!1,gloss:"quiet!"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Ach,",is_delimiter:!1,gloss:"Ah,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"daß",is_delimiter:!1,gloss:"that"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"die",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Welt",is_delimiter:!1,gloss:"world"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"so",is_delimiter:!1,gloss:"so"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"licht!",is_delimiter:!1,gloss:"light!"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Als",is_delimiter:!1,gloss:"When"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"noch",is_delimiter:!1,gloss:"yet"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"die",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Stürme",is_delimiter:!1,gloss:"storms"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"tobten,",is_delimiter:!1,gloss:"raged,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"War",is_delimiter:!1,gloss:"was"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"so",is_delimiter:!1,gloss:"so"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"elend",is_delimiter:!1,gloss:"wretched"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nicht.",is_delimiter:!1,gloss:"not."},{txt:" ",is_delimiter:!0,gloss:null}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Ach, daß die Luft so ruhig!
Ach, daß die Welt so licht!
Als noch die Stürme tobten,
War ich so elend nicht. `,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"#",is_delimiter:!1,gloss:"!UNKNOWN"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Muth!",is_delimiter:!1,gloss:"!UNKNOWN"}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:"# Muth!",annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Fliegt",is_delimiter:!1,gloss:"Flies"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"der",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Schnee",is_delimiter:!1,gloss:"snow"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mir",is_delimiter:!1,gloss:"to-me"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"in’s",is_delimiter:!1,gloss:"into-the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Gesicht,",is_delimiter:!1,gloss:"face,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Schüttl’",is_delimiter:!1,gloss:"shake-I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ihn",is_delimiter:!1,gloss:"it"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"herunter.",is_delimiter:!1,gloss:"down."},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Wenn",is_delimiter:!1,gloss:"When"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mein",is_delimiter:!1,gloss:"my"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Herz",is_delimiter:!1,gloss:"heart"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"im",is_delimiter:!1,gloss:"in-the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Busen",is_delimiter:!1,gloss:"bosom"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"spricht,",is_delimiter:!1,gloss:"speaks,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Sing’",is_delimiter:!1,gloss:"Sing"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"hell",is_delimiter:!1,gloss:"merry"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"und",is_delimiter:!1,gloss:"and"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"munter.",is_delimiter:!1,gloss:"gay."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Fliegt der Schnee mir in’s Gesicht,
Schüttl’ ich ihn herunter.
Wenn mein Herz im Busen spricht,
Sing’ ich hell und munter.`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Höre",is_delimiter:!1,gloss:"Hear"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nicht,",is_delimiter:!1,gloss:"not,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"was",is_delimiter:!1,gloss:"what"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"es",is_delimiter:!1,gloss:"it"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mir",is_delimiter:!1,gloss:"to-me"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sagt,",is_delimiter:!1,gloss:"says,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Habe",is_delimiter:!1,gloss:"Have"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"keine",is_delimiter:!1,gloss:"no"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Ohren.",is_delimiter:!1,gloss:"ears."},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Fühle",is_delimiter:!1,gloss:"Feel"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nicht,",is_delimiter:!1,gloss:"not,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"was",is_delimiter:!1,gloss:"what"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"es",is_delimiter:!1,gloss:"it"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mir",is_delimiter:!1,gloss:"to-me"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"klagt,",is_delimiter:!1,gloss:"complains,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Klagen",is_delimiter:!1,gloss:"Complaining"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ist",is_delimiter:!1,gloss:"is"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"für",is_delimiter:!1,gloss:"for"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Thoren.",is_delimiter:!1,gloss:"Fools."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Höre nicht, was es mir sagt,
Habe keine Ohren.
Fühle nicht, was es mir klagt,
Klagen ist für Thoren.`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Lustig",is_delimiter:!1,gloss:"Merry"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"in",is_delimiter:!1,gloss:"into"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"die",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Welt",is_delimiter:!1,gloss:"world"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"hinein",is_delimiter:!1,gloss:"therein"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Gegen",is_delimiter:!1,gloss:"Against"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Wind",is_delimiter:!1,gloss:"wind"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"und",is_delimiter:!1,gloss:"and"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Wetter!",is_delimiter:!1,gloss:"weather!"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Will",is_delimiter:!1,gloss:"Will"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"kein",is_delimiter:!1,gloss:"no"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Gott",is_delimiter:!1,gloss:"God"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"auf",is_delimiter:!1,gloss:"upon"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Erden",is_delimiter:!1,gloss:"earth"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sein,",is_delimiter:!1,gloss:"be,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Sind",is_delimiter:!1,gloss:"Are"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"wir",is_delimiter:!1,gloss:"we"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"selber",is_delimiter:!1,gloss:"self"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Götter.",is_delimiter:!1,gloss:"gods."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Lustig in die Welt hinein
Gegen Wind und Wetter!
Will kein Gott auf Erden sein,
Sind wir selber Götter.`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"#",is_delimiter:!1,gloss:"!UNKNOWN"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Der",is_delimiter:!1,gloss:"!UNKNOWN"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Leiermann.",is_delimiter:!1,gloss:"The-organ-grinder."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:"# Der Leiermann.",annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Drüben",is_delimiter:!1,gloss:"Over-there"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"hinter’m",is_delimiter:!1,gloss:"behind-the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Dorfe",is_delimiter:!1,gloss:"village"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Steht",is_delimiter:!1,gloss:"Stands"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ein",is_delimiter:!1,gloss:"a"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Leiermann,",is_delimiter:!1,gloss:"hurdy-gurdy-man,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Und",is_delimiter:!1,gloss:"And"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mit",is_delimiter:!1,gloss:"with"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"starren",is_delimiter:!1,gloss:"stiff"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Fingern",is_delimiter:!1,gloss:"fingers"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Dreht",is_delimiter:!1,gloss:"turns"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"er",is_delimiter:!1,gloss:"he"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"was",is_delimiter:!1,gloss:"what"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"er",is_delimiter:!1,gloss:"he"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"kann.",is_delimiter:!1,gloss:"can."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Drüben hinter’m Dorfe
Steht ein Leiermann,
Und mit starren Fingern
Dreht er was er kann.`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Baarfuß",is_delimiter:!1,gloss:"Bare-foot"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"auf",is_delimiter:!1,gloss:"on"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"dem",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Eise",is_delimiter:!1,gloss:"ice"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Schwankt",is_delimiter:!1,gloss:"staggering"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"er",is_delimiter:!1,gloss:"he"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"hin",is_delimiter:!1,gloss:"hither"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"und",is_delimiter:!1,gloss:"and"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"her;",is_delimiter:!1,gloss:"thither;"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Und",is_delimiter:!1,gloss:"And"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sein",is_delimiter:!1,gloss:"his"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"kleiner",is_delimiter:!1,gloss:"little"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Teller",is_delimiter:!1,gloss:"plate"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Bleibt",is_delimiter:!1,gloss:"remains"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ihm",is_delimiter:!1,gloss:"to-him"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"immer",is_delimiter:!1,gloss:"always"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"leer.",is_delimiter:!1,gloss:"empty."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Baarfuß auf dem Eise
Schwankt er hin und her;
Und sein kleiner Teller
Bleibt ihm immer leer.`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Keiner",is_delimiter:!1,gloss:"Nobody"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mag",is_delimiter:!1,gloss:"may"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ihn",is_delimiter:!1,gloss:"him"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"hören,",is_delimiter:!1,gloss:"hear,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Keiner",is_delimiter:!1,gloss:"Nobody"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sieht",is_delimiter:!1,gloss:"looks"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ihn",is_delimiter:!1,gloss:"him"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"an;",is_delimiter:!1,gloss:"on;"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Und",is_delimiter:!1,gloss:"And"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"die",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Hunde",is_delimiter:!1,gloss:"dogs"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"brummen",is_delimiter:!1,gloss:"growl"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Um",is_delimiter:!1,gloss:"about"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"den",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"alten",is_delimiter:!1,gloss:"old"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Mann.",is_delimiter:!1,gloss:"man."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Keiner mag ihn hören,
Keiner sieht ihn an;
Und die Hunde brummen
Um den alten Mann.`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Und",is_delimiter:!1,gloss:"And"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"er",is_delimiter:!1,gloss:"he"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"läßt",is_delimiter:!1,gloss:"leaves"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"es",is_delimiter:!1,gloss:"it"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"gehen",is_delimiter:!1,gloss:"go"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Alles,",is_delimiter:!1,gloss:"all,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"wie",is_delimiter:!1,gloss:"as"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"es",is_delimiter:!1,gloss:"it"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"will,",is_delimiter:!1,gloss:"will,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Dreht,",is_delimiter:!1,gloss:"Turn,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"und",is_delimiter:!1,gloss:"and"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"seine",is_delimiter:!1,gloss:"his"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Leier",is_delimiter:!1,gloss:"lyre"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Steht",is_delimiter:!1,gloss:"Stands"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ihm",is_delimiter:!1,gloss:"to-him"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nimmer",is_delimiter:!1,gloss:"never"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"still.",is_delimiter:!1,gloss:"still."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Und er läßt es gehen
Alles, wie es will,
Dreht, und seine Leier
Steht ihm nimmer still.`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Wunderlicher",is_delimiter:!1,gloss:"Wondering"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Alter,",is_delimiter:!1,gloss:"Old-man,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Soll",is_delimiter:!1,gloss:"Shall"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mit",is_delimiter:!1,gloss:"with"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"dir",is_delimiter:!1,gloss:"thee"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"gehn?",is_delimiter:!1,gloss:"go?"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Willst",is_delimiter:!1,gloss:"Wilt"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"zu",is_delimiter:!1,gloss:"to"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"meinen",is_delimiter:!1,gloss:"my"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Liedern",is_delimiter:!1,gloss:"songs"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Deine",is_delimiter:!1,gloss:"thy"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Leier",is_delimiter:!1,gloss:"lyre"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"drehn?",is_delimiter:!1,gloss:"turn?"},{txt:`
`,is_delimiter:!0,gloss:null}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Wunderlicher Alter,
Soll ich mit dir gehn?
Willst zu meinen Liedern
Deine Leier drehn?
`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}}],paragraph_delimiters:[`

`],original_text:`# Gute Nacht.

Fremd bin ich eingezogen,
Fremd zieh’ ich wieder aus.
Der Mai war mir gewogen
Mit manchem Blumenstrauß.
Das Mädchen sprach von Liebe,
Die Mutter gar von Eh’ —
Nun ist die Welt so trübe,
Der Weg gehüllt in Schnee.

Ich kann zu meiner Reisen
Nicht wählen mit der Zeit:
Muß selbst den Weg mir weisen
In dieser Dunkelheit.
Es zieht ein Mondenschatten
Als mein Gefährte mit,
Und auf den weißen Matten
Such’ ich des Wildes Tritt.

Was soll ich länger weilen,
Bis man mich trieb’ hinaus?
Laß irre Hunde heulen
Vor ihres Herren Haus!
Die Liebe liebt das Wandern, —
Gott hat sie so gemacht —
Von Einem zu dem Andern —
Fein Liebchen, gute Nacht!

Will dich im Traum nicht stören,
Wär’ Schad’ um deine Ruh’,
Sollst meinen Tritt nicht hören —
Sacht, sacht die Thüre zu!
Ich schreibe nur im Gehen
An’s Thor noch gute Nacht,
Damit du mögest sehen,
Ich hab’ an dich gedacht.

# Die Wetterfahne.

Der Wind spielt mit der Wetterfahne
Auf meines schönen Liebchens Haus.
Da dacht’ ich schon in meinem Wahne,
Sie pfiff’ den armen Flüchtling aus.

Er hätt’ es ehr bemerken sollen,
Des Hauses aufgestecktes Schild,
So hätt’ er nimmer suchen wollen
Im Haus’ ein treues Frauenbild.

Der Wind spielt drinnen mit den Herzen,
Wie auf dem Dach, nur nicht so laut.
Was fragen sie nach meinen Schmerzen?
Ihr Kind ist eine reiche Braut.

# Gefrorene Thränen.

Gefrorne Tropfen fallen
Von meinen Wangen ab:
Und ist’s mir denn entgangen,
Daß ich geweinet hab’?

Ei Thränen, meine Thränen,
Und seid ihr gar so lau,
Daß ihr erstarrt zu Eise,
Wie kühler Morgenthau?

Und dringt doch aus der Quelle
Der Brust so glühend heiß,
Als wolltet ihr zerschmelzen
Des ganzen Winters Eis.

# Erstarrung.

Ich such’ im Schnee vergebens
Nach ihrer Tritte Spur,
Hier, wo wir oft gewandelt
Selbander durch die Flur.

Ich will den Boden küssen,
Durchdringen Eis und Schnee
Mit meinen heißen Thränen,
Bis ich die Erde seh’.

Wo find’ ich eine Blüthe,
Wo find’ ich grünes Gras?
Die Blumen sind erstorben,
Der Rasen sieht so blaß.

Soll denn kein Angedenken
Ich nehmen mit von hier?
Wenn meine Schmerzen schweigen,
Wer sagt mir dann von ihr?

Mein Herz ist wie erfroren,
Kalt starrt ihr Bild darin:
Schmilzt je das Herz mir wieder,
Fließt auch das Bild dahin.

# Der Lindenbaum.

Am Brunnen vor dem Thore
Da steht ein Lindenbaum:
Ich träumt’ in seinem Schatten
So manchen süßen Traum.

Ich schnitt in seine Rinde
So manches liebe Wort;
Es zog in Freud’ und Leide
Zu ihm mich immer fort.

Ich mußt’ auch heute wandern
Vorbei in tiefer Nacht,
Da hab’ ich noch im Dunkel
Die Augen zugemacht.

Und seine Zweige rauschten,
Als riefen sie mir zu:
Komm her zu mir, Geselle,
Hier findst du deine Ruh’!

Die kalten Winde bliesen
Mir grad’ in’s Angesicht,
Der Hut flog mir vom Kopfe,
Ich wendete mich nicht.

Nun bin ich manche Stunde
Entfernt von jenem Ort,
Und immer hör’ ich’s rauschen:
Du fändest Ruhe dort!

# Die Post.

Von der Straße her ein Posthorn klingt.
Was hat es, daß es so hoch aufspringt,
Mein Herz?

Die Post bringt keinen Brief für dich:
Was drängst du denn so wunderlich,
Mein Herz?

Nun ja, die Post kömmt aus der Stadt,
Wo ich ein liebes Liebchen hatt’,
Mein Herz!

Willst wohl einmal hinübersehn,
Und fragen, wie es dort mag gehn,
Mein Herz? 

# Wasserfluth.

Manche Thrän’ aus meinen Augen
Ist gefallen in den Schnee;
Seine kalten Flocken saugen
Durstig ein das heiße Weh.

Wann die Gräser sprossen wollen,
Weht daher ein lauer Wind,
Und das Eis zerspringt in Schollen,
Und der weiche Schnee zerrinnt.

Schnee, du weißt von meinem Sehnen:
Sag mir, wohin geht dein Lauf?
Folge nach nur meinen Thränen,
Nimmt dich bald das Bächlein auf.

Wirst mit ihm die Stadt durchziehen,
Muntre Straßen ein und aus:
Fühlst du meine Thränen glühen,
Da ist meiner Liebsten Haus.

# Auf dem Flusse.

Der du so lustig rauschtest,
Du heller, wilder Fluß,
Wie still bist du geworden,
Giebst keinen Scheidegruß.

Mit harter, starrer Rinde
Hast du dich überdeckt,
Liegst kalt und unbeweglich
Im Sande hingestreckt.

In deine Decke grab’ ich
Mit einem spitzen Stein
Den Namen meiner Liebsten
Und Stund’ und Tag hinein:

Den Tag des ersten Grußes,
Den Tag, an dem ich ging,
Um Nam’ und Zahlen windet
Sich ein zerbrochner Ring.

Mein Herz, in diesem Bache
Erkennst du nun dein Bild?
Ob’s unter seiner Rinde
Wohl auch so reißend schwillt?

# Rückblick.

Es brennt mir unter beiden Sohlen,
Tret’ ich auch schon auf Eis und Schnee.
Ich möcht’ nicht wieder Athem holen,
Bis ich nicht mehr die Thürme seh’.

Hab’ mich an jedem Stein gestoßen,
So eilt’ ich zu der Stadt hinaus;
Die Krähen warfen Bäll’ und Schloßen
Auf meinen Hut von jedem Haus.

Wie anders hast du mich empfangen,
Du Stadt der Unbeständigkeit!
An deinen blanken Fenstern sangen
Die Lerch’ und Nachtigall im Streit.

Die runden Lindenbäume blühten,
Die klaren Rinnen rauschten hell,
Und ach, zwei Mädchenaugen glühten! –
Da war’s geschehn um dich, Gesell!

Kömmt mir der Tag in die Gedanken,
Möcht’ ich noch einmal rückwärts sehn,
Möcht’ ich zurücke wieder wanken,
Vor ihrem Hause stille stehn.

# Der greise Kopf.

Der Reif hatt’ einen weißen Schein
Mir über’s Haar gestreuet.
Da meint’ ich schon ein Greis zu sein,
Und hab’ mich sehr gefreuet.

Doch bald ist er hinweggethaut,
Hab’ wieder schwarze Haare,
Daß mir’s vor meiner Jugend graut —
Wie weit noch bis zur Bahre!

Vom Abendroth zum Morgenlicht
Ward mancher Kopf zum Greise.
Wer glaubt’s? Und meiner ward es nicht
Auf dieser ganzen Reise!

# Die Krähe.

Eine Krähe war mit mir
Aus der Stadt gezogen,
Ist bis heute für und für
Um mein Haupt geflogen.

Krähe, wunderliches Thier,
Willst mich nicht verlassen?
Meinst wohl bald als Beute hier
Meinen Leib zu fassen?

Nun, es wird nicht weit mehr gehn
An dem Wanderstabe.
Krähe, laß mich endlich sehn
Treue bis zum Grabe! 

# Letzte Hoffnung.

Hier und da ist an den Bäumen
Noch ein buntes Blatt zu sehn,
Und ich bleibe vor den Bäumen
Oftmals in Gedanken stehn.

Schaue nach dem einen Blatte,
Hänge meine Hoffnung dran;
Spielt der Wind mit meinem Blatte,
Zittr’ ich, was ich zittern kann.

Ach, und fällt das Blatt zu Boden,
Fällt mit ihm die Hoffnung ab,
Fall’ ich selber mit zu Boden,
Wein’ auf meiner Hoffnung Grab. 

# Im Dorfe

Es bellen die Hunde, es rasseln die Ketten.
Die Menschen schnarchen in ihren Betten,
Träumen sich Manches, was sie nicht haben,
Thun sich im Guten und Argen erlaben:
Und Morgen früh ist Alles zerflossen. —
Je nun, sie haben ihr Theil genossen,
Und hoffen, was sie noch übrig ließen,
Doch wieder zu finden auf ihren Kissen.

Bellt mich nur fort, ihr wachen Hunde,
Laßt mich nicht ruhn in der Schlummerstunde!
Ich bin zu Ende mit allen Träumen —
Was will ich unter den Schläfern säumen? 

# Der stürmische Morgen.

Wie hat der Sturm zerrissen
Des Himmels graues Kleid!
Die Wolkenfetzen flattern
Umher in mattem Streit.

Und rothe Feuerflammen
Ziehn zwischen ihnen hin.
Das nenn’ ich einen Morgen
So recht nach meinem Sinn!

Mein Herz sieht an dem Himmel
Gemahlt sein eignes Bild —
Es ist nichts als der Winter,
Der Winter kalt und wild! 

# Täuschung.

Ein Licht tanzt freundlich vor mir her;
Ich folg’ ihm nach die Kreuz und Quer;
Ich folg’ ihm gern, und seh’s ihm an,
Daß es verlockt den Wandersmann.
Ach, wer wie ich so elend ist,
Giebt gern sich hin der bunten List,
Die hinter Eis und Nacht und Graus
Ihm weist ein helles, warmes Haus,
Und eine liebe Seele drin —
Nur Täuschung ist für mich Gewinn! 

# Der Wegweiser.

Was vermeid’ ich denn die Wege,
Wo die andren Wandrer gehn,
Suche mir versteckte Stege
Durch verschneite Felsenhöhn?

Habe ja doch nichts begangen,
Daß ich Menschen sollte scheun —
Welch ein thörichtes Verlangen
Treibt mich in die Wüstenein?

Weiser stehen auf den Straßen,
Weisen auf die Städte zu,
Und ich wandre sonder Maßen,
Ohne Ruh’, und suche Ruh’.

Einen Weiser seh’ ich stehen
Unverrückt vor meinem Blick;
Eine Straße muß ich gehen,
Die noch Keiner ging zurück.

# Das Wirthshaus.

Auf einen Todtenacker
Hat mich mein Weg gebracht.
Allhier will ich einkehren:
Hab’ ich bei mir gedacht.

Ihr grünen Todtenkränze
Könnt wohl die Zeichen sein,
Die müde Wandrer laden
In’s kühle Wirthshaus ein.

Sind denn in diesem Hause
Die Kammern all’ besetzt?
Bin matt zum Niedersinken
Und tödtlich schwer verletzt.

O unbarmherz’ge Schenke,
Doch weisest du mich ab?
Nun weiter denn, nur weiter,
Mein treuer Wanderstab!

# Das Irrlicht.

In die tiefsten Felsengründe
Lockte mich ein Irrlicht hin:
Wie ich einen Ausgang finde,
Liegt nicht schwer mir in dem Sinn.

Bin gewohnt das irre Gehen,
’S führt ja jeder Weg zum Ziel:
Unsre Freuden, unsre Wehen,
Alles eines Irrlichts Spiel!

Durch des Bergstroms trockne Rinnen
Wind’ ich ruhig mich hinab —
Jeder Strom wird’s Meer gewinnen,
Jedes Leiden auch ein Grab. 

# Rast.

Nun merk ich erst, wie müd’ ich bin,
Da ich zur Ruh’ mich lege;
Das Wandern hielt mich munter hin
Auf unwirthbarem Wege.

Die Füße frugen nicht nach Rast,
Es war zu kalt zum Stehen,
Der Rücken fühlte keine Last,
Der Sturm half fort mich wehen.

In eines Köhlers engem Haus
Hab’ Obdach ich gefunden;
Doch meine Glieder ruhn nicht aus:
So brennen ihre Wunden.

Auch du, mein Herz, im Kampf und Sturm
So wild und so verwegen,
Fühlst in der Still’ erst deinen Wurm
Mit heißem Stich sich regen!

# Die Nebensonnen.

Drei Sonnen sah’ ich am Himmel stehn,
Hab’ lang’ und fest sie angesehn;
Und sie auch standen da so stier,
Als könnten sie nicht weg von mir.
Ach, meine Sonnen seid ihr nicht!
Schaut Andren doch in’s Angesicht!
Ja, neulich hatt’ ich auch wohl drei:
Nun sind hinab die besten zwei.
Ging’ nur die dritt’ erst hinterdrein!
Im Dunkel wird mir wohler sein. 

# Frühlingstraum.

Ich träumte von bunten Blumen,
So wie sie wohl blühen im Mai,
Ich träumte von grünen Wiesen,
Von lustigem Vogelgeschrei.

Und als die Hähne krähten,
Da ward mein Auge wach;
Da war es kalt und finster,
Es schrieen die Raben vom Dach.

Doch an den Fensterscheiben
Wer mahlte die Blätter da?
Ihr lacht wohl über den Träumer,
Der Blumen im Winter sah?

Ich träumte von Lieb’ um Liebe,
Von einer schönen Maid,
Von Herzen und von Küssen,
Von Wonn’ und Seligkeit.

Und als die Hähne krähten,
Da ward mein Herze wach;
Nun sitz’ ich hier alleine
Und denke dem Traume nach.

Die Augen schließ’ ich wieder,
Noch schlägt das Herz so warm.
Wann grünt ihr Blätter am Fenster?
Wann halt’ ich dich, Liebchen, im Arm? 

# Einsamkeit.

Wie eine trübe Wolke
Durch heitre Lüfte geht,
Wann in der Tanne Wipfel
Ein mattes Lüftchen weht:

So zieh’ ich meine Straße
Dahin mit trägem Fuß,
Durch helles, frohes Leben,
Einsam und ohne Gruß.

Ach, daß die Luft so ruhig!
Ach, daß die Welt so licht!
Als noch die Stürme tobten,
War ich so elend nicht. 

# Muth!

Fliegt der Schnee mir in’s Gesicht,
Schüttl’ ich ihn herunter.
Wenn mein Herz im Busen spricht,
Sing’ ich hell und munter.

Höre nicht, was es mir sagt,
Habe keine Ohren.
Fühle nicht, was es mir klagt,
Klagen ist für Thoren.

Lustig in die Welt hinein
Gegen Wind und Wetter!
Will kein Gott auf Erden sein,
Sind wir selber Götter.

# Der Leiermann.

Drüben hinter’m Dorfe
Steht ein Leiermann,
Und mit starren Fingern
Dreht er was er kann.

Baarfuß auf dem Eise
Schwankt er hin und her;
Und sein kleiner Teller
Bleibt ihm immer leer.

Keiner mag ihn hören,
Keiner sieht ihn an;
Und die Hunde brummen
Um den alten Mann.

Und er läßt es gehen
Alles, wie es will,
Dreht, und seine Leier
Steht ihm nimmer still.

Wunderlicher Alter,
Soll ich mit dir gehn?
Willst zu meinen Liedern
Deine Leier drehn?
`,p_div_locs:"[13, 15, 227, 229, 438, 440, 650, 652, 874, 876, 894, 896, 1040, 1042, 1172, 1174, 1320, 1322, 1342, 1344, 1442, 1444, 1544, 1546, 1656, 1658, 1671, 1673, 1779, 1781, 1885, 1887, 1990, 1992, 2101, 2103, 2219, 2221, 2238, 2240, 2344, 2346, 2446, 2448, 2548, 2550, 2653, 2655, 2757, 2759, 2861, 2863, 2874, 2876, 2965, 2967, 3051, 3053, 3135, 3137, 3214, 3216, 3230, 3232, 3345, 3347, 3474, 3476, 3607, 3609, 3734, 3736, 3753, 3755, 3862, 3864, 3964, 3966, 4067, 4069, 4174, 4176, 4284, 4286, 4298, 4300, 4448, 4450, 4586, 4588, 4723, 4725, 4863, 4865, 5002, 5004, 5022, 5024, 5153, 5155, 5279, 5281, 5404, 5406, 5418, 5420, 5515, 5517, 5627, 5629, 5733, 5735, 5753, 5755, 5872, 5874, 5999, 6001, 6130, 6132, 6142, 6144, 6466, 6468, 6629, 6631, 6655, 6657, 6760, 6762, 6864, 6866, 6979, 6981, 6993, 6995, 7346, 7348, 7364, 7366, 7482, 7484, 7607, 7609, 7721, 7723, 7836, 7838, 7855, 7857, 7960, 7962, 8064, 8066, 8173, 8175, 8277, 8279, 8294, 8296, 8419, 8421, 8537, 8539, 8666, 8668, 8675, 8677, 8797, 8799, 8920, 8922, 9034, 9036, 9166, 9168, 9186, 9188, 9539, 9541, 9558, 9560, 9680, 9682, 9792, 9794, 9907, 9909, 10016, 10018, 10123, 10125, 10261, 10263, 10276, 10278, 10374, 10376, 10473, 10475, 10583, 10585, 10592, 10594, 10716, 10718, 10818, 10820, 10923, 10925, 10941, 10943, 11031, 11033, 11125, 11127, 11210, 11212, 11299, 11301, 11388]"}]},{corpus_id:"Tristesse d'Olympio",corpuses_history:[{paragraphs:[{pstate:"ANNOTATED",tokens:[{txt:"Les",is_delimiter:!1,gloss:"The"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"champs",is_delimiter:!1,gloss:"fields"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"n'étaient",is_delimiter:!1,gloss:"weren't"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"point",is_delimiter:!1,gloss:"quite"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"noirs,",is_delimiter:!1,gloss:"black,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"les",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"cieux",is_delimiter:!1,gloss:"heavens"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"n'étaient",is_delimiter:!1,gloss:"weren't"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"pas",is_delimiter:!1,gloss:"not"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mornes.",is_delimiter:!1,gloss:"dull."},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Non,",is_delimiter:!1,gloss:"No,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"le",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"jour",is_delimiter:!1,gloss:"day"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"rayonnait",is_delimiter:!1,gloss:"shone"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"dans",is_delimiter:!1,gloss:"in"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"un",is_delimiter:!1,gloss:"an"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"azur",is_delimiter:!1,gloss:"azure"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sans",is_delimiter:!1,gloss:"without"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"bornes",is_delimiter:!1,gloss:"bounds"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Sur",is_delimiter:!1,gloss:"Upon"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"la",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"terre",is_delimiter:!1,gloss:"earth"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"étendu,",is_delimiter:!1,gloss:"extended,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"L'air",is_delimiter:!1,gloss:"The-air"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"était",is_delimiter:!1,gloss:"was"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"plein",is_delimiter:!1,gloss:"full"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"d'encens",is_delimiter:!1,gloss:"of-encense"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"et",is_delimiter:!1,gloss:"and"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"les",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"prés",is_delimiter:!1,gloss:"meadows"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"de",is_delimiter:!1,gloss:"of"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"verdures",is_delimiter:!1,gloss:"greennesses"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Quand",is_delimiter:!1,gloss:"When"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"il",is_delimiter:!1,gloss:"he"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"revit",is_delimiter:!1,gloss:"revived"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ces",is_delimiter:!1,gloss:"these"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"lieux",is_delimiter:!1,gloss:"places"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"où",is_delimiter:!1,gloss:"where"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"par",is_delimiter:!1,gloss:"by"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"tant",is_delimiter:!1,gloss:"so-many"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"de",is_delimiter:!1,gloss:"of"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"blessures",is_delimiter:!1,gloss:"wounds"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Son",is_delimiter:!1,gloss:"His"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"coeur",is_delimiter:!1,gloss:"heart"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"s'est",is_delimiter:!1,gloss:"has"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"répandu!",is_delimiter:!1,gloss:"diffused!"}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`French`_`English`",original_text:`Les champs n'étaient point noirs, les cieux n'étaient pas mornes.
Non, le jour rayonnait dans un azur sans bornes
Sur la terre étendu,
L'air était plein d'encens et les prés de verdures
Quand il revit ces lieux où par tant de blessures
Son coeur s'est répandu!`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"French",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"L'automne",is_delimiter:!1,gloss:"The-autumn"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"souriait;",is_delimiter:!1,gloss:"smiled;"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"les",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"coteaux",is_delimiter:!1,gloss:"hills"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"vers",is_delimiter:!1,gloss:"towards"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"la",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"plaine",is_delimiter:!1,gloss:"plain"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Penchaient",is_delimiter:!1,gloss:"Were-leaning"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"leurs",is_delimiter:!1,gloss:"their"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"bois",is_delimiter:!1,gloss:"charming-woods"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"charmants",is_delimiter:!1,gloss:"which"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"qui",is_delimiter:!1,gloss:"who"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"jaunissaient",is_delimiter:!1,gloss:"were-beginning-to-yellow"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"à",is_delimiter:!1,gloss:"to"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"peine;",is_delimiter:!1,gloss:"hardly;"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Le",is_delimiter:!1,gloss:"The"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ciel",is_delimiter:!1,gloss:"sky"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"était",is_delimiter:!1,gloss:"was"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"doré;",is_delimiter:!1,gloss:"gilded;"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Et",is_delimiter:!1,gloss:"And"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"les",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"oiseaux,",is_delimiter:!1,gloss:"birds,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"tournés",is_delimiter:!1,gloss:"turned"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"vers",is_delimiter:!1,gloss:"towards"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"celui",is_delimiter:!1,gloss:"him"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"que",is_delimiter:!1,gloss:"whom"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"tout",is_delimiter:!1,gloss:"all"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nomme,",is_delimiter:!1,gloss:"names,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Disant",is_delimiter:!1,gloss:"Saying"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"peut-être",is_delimiter:!1,gloss:"perhaps"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"à",is_delimiter:!1,gloss:"to"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Dieu",is_delimiter:!1,gloss:"God"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"quelque",is_delimiter:!1,gloss:"something"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"chose",is_delimiter:!1,gloss:"thing"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"de",is_delimiter:!1,gloss:"of"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"l'homme,",is_delimiter:!1,gloss:"man,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Chantaient",is_delimiter:!1,gloss:"Sang"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"leur",is_delimiter:!1,gloss:"their"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"chant",is_delimiter:!1,gloss:"chant"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sacré!",is_delimiter:!1,gloss:"sacred!"}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`French`_`English`",original_text:`L'automne souriait; les coteaux vers la plaine
Penchaient leurs bois charmants qui jaunissaient à peine;
Le ciel était doré;
Et les oiseaux, tournés vers celui que tout nomme,
Disant peut-être à Dieu quelque chose de l'homme,
Chantaient leur chant sacré!`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"French",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Il",is_delimiter:!1,gloss:"He"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"voulut",is_delimiter:!1,gloss:"wished"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"tout",is_delimiter:!1,gloss:"all"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"revoir,",is_delimiter:!1,gloss:"to-resee,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"l'étang",is_delimiter:!1,gloss:"the-pond"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"près",is_delimiter:!1,gloss:"near"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"de",is_delimiter:!1,gloss:"of"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"la",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"source,",is_delimiter:!1,gloss:"spring,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"La",is_delimiter:!1,gloss:"The"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"masure",is_delimiter:!1,gloss:"cottage"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"où",is_delimiter:!1,gloss:"where"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"l'aumône",is_delimiter:!1,gloss:"charity"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"avait",is_delimiter:!1,gloss:"had"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"vidé",is_delimiter:!1,gloss:"emptied"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"leur",is_delimiter:!1,gloss:"their"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"bourse,",is_delimiter:!1,gloss:"purse,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Le",is_delimiter:!1,gloss:"The"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"vieux",is_delimiter:!1,gloss:"old"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"frêne",is_delimiter:!1,gloss:"ash"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"plié,",is_delimiter:!1,gloss:"bent,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Les",is_delimiter:!1,gloss:"The"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"retraites",is_delimiter:!1,gloss:"retreats"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"d'amour",is_delimiter:!1,gloss:"of-love"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"au",is_delimiter:!1,gloss:"at-the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"fond",is_delimiter:!1,gloss:"bottom"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"des",is_delimiter:!1,gloss:"of-the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"bois",is_delimiter:!1,gloss:"woods"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"perdues,",is_delimiter:!1,gloss:"lost,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"L'arbre",is_delimiter:!1,gloss:"The-tree"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"où",is_delimiter:!1,gloss:"where"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"dans",is_delimiter:!1,gloss:"in"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"les",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"baisers",is_delimiter:!1,gloss:"kisses"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"leurs",is_delimiter:!1,gloss:"their"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"âmes",is_delimiter:!1,gloss:"souls"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"confondues",is_delimiter:!1,gloss:"mixed"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Avaient",is_delimiter:!1,gloss:"Had"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"tout",is_delimiter:!1,gloss:"all"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"oublié!",is_delimiter:!1,gloss:"forgotten!"}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`French`_`English`",original_text:`Il voulut tout revoir, l'étang près de la source,
La masure où l'aumône avait vidé leur bourse,
Le vieux frêne plié,
Les retraites d'amour au fond des bois perdues,
L'arbre où dans les baisers leurs âmes confondues
Avaient tout oublié!`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"French",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Il",is_delimiter:!1,gloss:"He"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"chercha",is_delimiter:!1,gloss:"sought"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"le",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"jardin,",is_delimiter:!1,gloss:"garden,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"la",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"maison",is_delimiter:!1,gloss:"detached-house,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"isolée,",is_delimiter:!1,gloss:"isolated,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"La",is_delimiter:!1,gloss:"The"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"grille",is_delimiter:!1,gloss:"gate"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"d'où",is_delimiter:!1,gloss:"whence"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"l'oeil",is_delimiter:!1,gloss:"the-eye"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"plonge",is_delimiter:!1,gloss:"plunges"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"en",is_delimiter:!1,gloss:"in"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"une",is_delimiter:!1,gloss:"a"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"oblique",is_delimiter:!1,gloss:"oblique"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"allée,",is_delimiter:!1,gloss:"alley,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Les",is_delimiter:!1,gloss:"The"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"vergers",is_delimiter:!1,gloss:"orchards"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"en",is_delimiter:!1,gloss:"in"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"talus.",is_delimiter:!1,gloss:"slope."},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Pâle,",is_delimiter:!1,gloss:"Pale,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"il",is_delimiter:!1,gloss:"he"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"marchait.",is_delimiter:!1,gloss:"walked."},{txt:" ",is_delimiter:!0,gloss:null},{txt:"-",is_delimiter:!1,gloss:"-"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Au",is_delimiter:!1,gloss:"At-the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"bruit",is_delimiter:!1,gloss:"sound"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"de",is_delimiter:!1,gloss:"of"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"son",is_delimiter:!1,gloss:"his"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"pas",is_delimiter:!1,gloss:"step"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"grave",is_delimiter:!1,gloss:"grave"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"et",is_delimiter:!1,gloss:"and"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sombre,",is_delimiter:!1,gloss:"solemn,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Il",is_delimiter:!1,gloss:"He"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"voyait",is_delimiter:!1,gloss:"saw"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"à",is_delimiter:!1,gloss:"at"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"chaque",is_delimiter:!1,gloss:"every"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"arbre,",is_delimiter:!1,gloss:"tree,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"hélas!",is_delimiter:!1,gloss:"alas!"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"se",is_delimiter:!1,gloss:"himself"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"dresser",is_delimiter:!1,gloss:"raise"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"l'ombre",is_delimiter:!1,gloss:"the-shade"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Des",is_delimiter:!1,gloss:"Of-the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"jours",is_delimiter:!1,gloss:"days"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"qui",is_delimiter:!1,gloss:"that"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ne",is_delimiter:!1,gloss:"not"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sont",is_delimiter:!1,gloss:"are"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"plus!",is_delimiter:!1,gloss:"more!"}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`French`_`English`",original_text:`Il chercha le jardin, la maison isolée,
La grille d'où l'oeil plonge en une oblique allée,
Les vergers en talus.
Pâle, il marchait. - Au bruit de son pas grave et sombre,
Il voyait à chaque arbre, hélas! se dresser l'ombre
Des jours qui ne sont plus!`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"French",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Il",is_delimiter:!1,gloss:"He"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"entendait",is_delimiter:!1,gloss:"did hear"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"frémir",is_delimiter:!1,gloss:"to-shiver"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"dans",is_delimiter:!1,gloss:"in"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"la",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"forêt",is_delimiter:!1,gloss:"forest"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"qu'il",is_delimiter:!1,gloss:"which-he"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"aime",is_delimiter:!1,gloss:"loves"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Ce",is_delimiter:!1,gloss:"This"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"doux",is_delimiter:!1,gloss:"sweet"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"vent",is_delimiter:!1,gloss:"wind"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"qui,",is_delimiter:!1,gloss:"which,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"faisant",is_delimiter:!1,gloss:"making"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"tout",is_delimiter:!1,gloss:"all"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"vibrer",is_delimiter:!1,gloss:"to-vibrate"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"en",is_delimiter:!1,gloss:"in"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nous-même,",is_delimiter:!1,gloss:"ourselves,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Y",is_delimiter:!1,gloss:"it"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"réveille",is_delimiter:!1,gloss:"revives"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"l'amour,",is_delimiter:!1,gloss:"love,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Et,",is_delimiter:!1,gloss:"And,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"remuant",is_delimiter:!1,gloss:"moving"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"le",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"chêne",is_delimiter:!1,gloss:"oak"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ou",is_delimiter:!1,gloss:"or"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"balançant",is_delimiter:!1,gloss:"waving"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"la",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"rose,",is_delimiter:!1,gloss:"rose,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Semble",is_delimiter:!1,gloss:"Seems"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"l'âme",is_delimiter:!1,gloss:"the-soul"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"de",is_delimiter:!1,gloss:"of"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"tout",is_delimiter:!1,gloss:"all"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"qui",is_delimiter:!1,gloss:"that"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"va",is_delimiter:!1,gloss:"goes"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sur",is_delimiter:!1,gloss:"upon"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"chaque",is_delimiter:!1,gloss:"each"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"chose",is_delimiter:!1,gloss:"thing"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Se",is_delimiter:!1,gloss:"Itself"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"poser",is_delimiter:!1,gloss:"to-repose"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"tour",is_delimiter:!1,gloss:"turn"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"à",is_delimiter:!1,gloss:"at"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"tour!",is_delimiter:!1,gloss:"a-turn!"}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`French`_`English`",original_text:`Il entendait frémir dans la forêt qu'il aime
Ce doux vent qui, faisant tout vibrer en nous-même,
Y réveille l'amour,
Et, remuant le chêne ou balançant la rose,
Semble l'âme de tout qui va sur chaque chose
Se poser tour à tour!`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"French",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Les",is_delimiter:!1,gloss:"The"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"feuilles",is_delimiter:!1,gloss:"leaves"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"qui",is_delimiter:!1,gloss:"which"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"gisaient",is_delimiter:!1,gloss:"lay"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"dans",is_delimiter:!1,gloss:"in"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"le",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"bois",is_delimiter:!1,gloss:"wood"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"solitaire,",is_delimiter:!1,gloss:"solitary,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"S'efforçant",is_delimiter:!1,gloss:"Endeavouring"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sous",is_delimiter:!1,gloss:"under"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ses",is_delimiter:!1,gloss:"its"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"pas",is_delimiter:!1,gloss:"steps"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"de",is_delimiter:!1,gloss:"to"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"s'élever",is_delimiter:!1,gloss:"rise"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"de",is_delimiter:!1,gloss:"from"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"terre,",is_delimiter:!1,gloss:"earth,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Couraient",is_delimiter:!1,gloss:"ran"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"dans",is_delimiter:!1,gloss:"in"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"le",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"jardin;",is_delimiter:!1,gloss:"garden;"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Ainsi,",is_delimiter:!1,gloss:"Thus,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"parfois,",is_delimiter:!1,gloss:"sometimes,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"quand",is_delimiter:!1,gloss:"when"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"l'âme",is_delimiter:!1,gloss:"the-soul"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"est",is_delimiter:!1,gloss:"is"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"triste,",is_delimiter:!1,gloss:"sad,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nos",is_delimiter:!1,gloss:"our"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"pensées",is_delimiter:!1,gloss:"thoughts"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"S'envolent",is_delimiter:!1,gloss:"Soar-away"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"un",is_delimiter:!1,gloss:"a"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"moment",is_delimiter:!1,gloss:"moment"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sur",is_delimiter:!1,gloss:"on"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"leurs",is_delimiter:!1,gloss:"their"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ailes",is_delimiter:!1,gloss:"wings"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"blessées,",is_delimiter:!1,gloss:"wounded,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Puis",is_delimiter:!1,gloss:"Then"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"retombent",is_delimiter:!1,gloss:"fall-back"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"soudain.",is_delimiter:!1,gloss:"suddenly."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`French`_`English`",original_text:`Les feuilles qui gisaient dans le bois solitaire,
S'efforçant sous ses pas de s'élever de terre,
Couraient dans le jardin;
Ainsi, parfois, quand l'âme est triste, nos pensées
S'envolent un moment sur leurs ailes blessées,
Puis retombent soudain.`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"French",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Il",is_delimiter:!1,gloss:"He"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"contempla",is_delimiter:!1,gloss:"contemplates"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"longtemps",is_delimiter:!1,gloss:"long-time"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"les",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"formes",is_delimiter:!1,gloss:"forms"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"magnifiques",is_delimiter:!1,gloss:"magnificent"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Que",is_delimiter:!1,gloss:"Which"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"la",is_delimiter:!1,gloss:"nature"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nature",is_delimiter:!1,gloss:"takes"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"prend",is_delimiter:!1,gloss:"takes"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"dans",is_delimiter:!1,gloss:"in"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"les",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"champs",is_delimiter:!1,gloss:"peaceful-fields;"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"pacifiques;",is_delimiter:!1,gloss:"peaceful;"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Il",is_delimiter:!1,gloss:"He"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"rêva",is_delimiter:!1,gloss:"dreamt"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"jusqu'au",is_delimiter:!1,gloss:"until-the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"soir;",is_delimiter:!1,gloss:"evening;"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Tout",is_delimiter:!1,gloss:"Every"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"le",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"jour",is_delimiter:!1,gloss:"day"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"il",is_delimiter:!1,gloss:"he"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"erra",is_delimiter:!1,gloss:"wandered"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"le",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"long",is_delimiter:!1,gloss:"along"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"de",is_delimiter:!1,gloss:"of"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"la",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ravine,",is_delimiter:!1,gloss:"ravine,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Admirant",is_delimiter:!1,gloss:"Admiring"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"tour",is_delimiter:!1,gloss:"turn"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"à",is_delimiter:!1,gloss:"to"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"tour",is_delimiter:!1,gloss:"turn"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"le",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ciel,",is_delimiter:!1,gloss:"sky,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"face",is_delimiter:!1,gloss:"divine"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"divine,",is_delimiter:!1,gloss:"divine,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Le",is_delimiter:!1,gloss:"The"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"lac,",is_delimiter:!1,gloss:"lake,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"divin",is_delimiter:!1,gloss:"divine"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"miroir!",is_delimiter:!1,gloss:"mirror!"}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`French`_`English`",original_text:`Il contempla longtemps les formes magnifiques
Que la nature prend dans les champs pacifiques;
Il rêva jusqu'au soir;
Tout le jour il erra le long de la ravine,
Admirant tour à tour le ciel, face divine,
Le lac, divin miroir!`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"French",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Hélas!",is_delimiter:!1,gloss:"Alas!"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"se",is_delimiter:!1,gloss:"himself"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"rappelant",is_delimiter:!1,gloss:"recalling"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ses",is_delimiter:!1,gloss:"his"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"douces",is_delimiter:!1,gloss:"pleasant"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"aventures,",is_delimiter:!1,gloss:"adventures,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Regardant,",is_delimiter:!1,gloss:"Looking,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sans",is_delimiter:!1,gloss:"without"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"entrer,",is_delimiter:!1,gloss:"entering,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"par-dessus",is_delimiter:!1,gloss:"over"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"les",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"clôtures,",is_delimiter:!1,gloss:"fences,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Ainsi",is_delimiter:!1,gloss:"Thus"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"qu'un",is_delimiter:!1,gloss:"as"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"paria,",is_delimiter:!1,gloss:"pariah,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Il",is_delimiter:!1,gloss:"He"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"erra",is_delimiter:!1,gloss:"wandered"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"tout",is_delimiter:!1,gloss:"all"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"le",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"jour,",is_delimiter:!1,gloss:"day,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"vers",is_delimiter:!1,gloss:"towards"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"l'heure",is_delimiter:!1,gloss:"the hour"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"où",is_delimiter:!1,gloss:"where"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"la",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nuit",is_delimiter:!1,gloss:"night"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"tombe,",is_delimiter:!1,gloss:"falls,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Il",is_delimiter:!1,gloss:"He"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"se",is_delimiter:!1,gloss:"himself"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sentit",is_delimiter:!1,gloss:"felt"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"le",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"coeur",is_delimiter:!1,gloss:"heart"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"triste",is_delimiter:!1,gloss:"sad"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"comme",is_delimiter:!1,gloss:"as"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"une",is_delimiter:!1,gloss:"a"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"tombe,",is_delimiter:!1,gloss:"tomb,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Alors",is_delimiter:!1,gloss:"Then"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"il",is_delimiter:!1,gloss:"he"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"s'écria:",is_delimiter:!1,gloss:"exclaimed:"}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`French`_`English`",original_text:`Hélas! se rappelant ses douces aventures,
Regardant, sans entrer, par-dessus les clôtures,
Ainsi qu'un paria,
Il erra tout le jour, vers l'heure où la nuit tombe,
Il se sentit le coeur triste comme une tombe,
Alors il s'écria:`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"French",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:'"',is_delimiter:!1,gloss:"!UNKNOWN"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"O",is_delimiter:!1,gloss:"O"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"douleur!",is_delimiter:!1,gloss:"pain!"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"j'ai",is_delimiter:!1,gloss:"I have"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"voulu,",is_delimiter:!1,gloss:"wished,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"moi",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"dont",is_delimiter:!1,gloss:"of whom"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"l'âme",is_delimiter:!1,gloss:"the-soul"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"est",is_delimiter:!1,gloss:"is"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"troublée,",is_delimiter:!1,gloss:"troubled,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Savoir",is_delimiter:!1,gloss:"To-know"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"si",is_delimiter:!1,gloss:"if"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"l'urne",is_delimiter:!1,gloss:"the-urn"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"encor",is_delimiter:!1,gloss:"still"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"conservait",is_delimiter:!1,gloss:"preserved"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"la",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"liqueur,",is_delimiter:!1,gloss:"liquid,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Et",is_delimiter:!1,gloss:"And"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"voir",is_delimiter:!1,gloss:"to-see"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ce",is_delimiter:!1,gloss:"what"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"qu'avait",is_delimiter:!1,gloss:"had"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"fait",is_delimiter:!1,gloss:"made"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"cette",is_delimiter:!1,gloss:"this"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"heureuse",is_delimiter:!1,gloss:"happy"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"vallée",is_delimiter:!1,gloss:"valley"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"De",is_delimiter:!1,gloss:"Of"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"tout",is_delimiter:!1,gloss:"all"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ce",is_delimiter:!1,gloss:"that"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"que",is_delimiter:!1,gloss:"which"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"j'avais",is_delimiter:!1,gloss:"I-had"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"laissé",is_delimiter:!1,gloss:"left"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"là",is_delimiter:!1,gloss:"there"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"de",is_delimiter:!1,gloss:"of"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mon",is_delimiter:!1,gloss:"my"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"coeur!",is_delimiter:!1,gloss:"heart!"}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`French`_`English`",original_text:`" O douleur! j'ai voulu, moi dont l'âme est troublée,
Savoir si l'urne encor conservait la liqueur,
Et voir ce qu'avait fait cette heureuse vallée
De tout ce que j'avais laissé là de mon coeur!`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"French",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Que",is_delimiter:!1,gloss:"What"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"peu",is_delimiter:!1,gloss:"little"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"de",is_delimiter:!1,gloss:"of"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"temps",is_delimiter:!1,gloss:"time"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"suffit",is_delimiter:!1,gloss:"suffices"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"pour",is_delimiter:!1,gloss:"for"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"changer",is_delimiter:!1,gloss:"to-change"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"toutes",is_delimiter:!1,gloss:"all"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"choses!",is_delimiter:!1,gloss:"things!"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Nature",is_delimiter:!1,gloss:"Nature"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"au",is_delimiter:!1,gloss:"with-the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"front",is_delimiter:!1,gloss:"forehead"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"serein,",is_delimiter:!1,gloss:"serene,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"comme",is_delimiter:!1,gloss:"how"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"vous",is_delimiter:!1,gloss:"you"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"oubliez!",is_delimiter:!1,gloss:"forget!"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Et",is_delimiter:!1,gloss:"And"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"comme",is_delimiter:!1,gloss:"how"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"vous",is_delimiter:!1,gloss:"you"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"brisez",is_delimiter:!1,gloss:"break"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"dans",is_delimiter:!1,gloss:"in"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"vos",is_delimiter:!1,gloss:"your"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"métamorphoses",is_delimiter:!1,gloss:"metamorphoses"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Les",is_delimiter:!1,gloss:"The"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"fils",is_delimiter:!1,gloss:"threads"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mystérieux",is_delimiter:!1,gloss:"mysterious"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"où",is_delimiter:!1,gloss:"where"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nos",is_delimiter:!1,gloss:"our"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"coeurs",is_delimiter:!1,gloss:"hearts"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sont",is_delimiter:!1,gloss:"are"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"liés!",is_delimiter:!1,gloss:"tied!"}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`French`_`English`",original_text:`Que peu de temps suffit pour changer toutes choses!
Nature au front serein, comme vous oubliez!
Et comme vous brisez dans vos métamorphoses
Les fils mystérieux où nos coeurs sont liés!`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"French",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Nos",is_delimiter:!1,gloss:"Our"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"chambres",is_delimiter:!1,gloss:"rooms"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"de",is_delimiter:!1,gloss:"of"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"feuillage",is_delimiter:!1,gloss:"foliage"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"en",is_delimiter:!1,gloss:"in"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"halliers",is_delimiter:!1,gloss:"cops"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sont",is_delimiter:!1,gloss:"are"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"changées!",is_delimiter:!1,gloss:"changed!"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"L'arbre",is_delimiter:!1,gloss:"The-tree"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"où",is_delimiter:!1,gloss:"where"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"fut",is_delimiter:!1,gloss:"was"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"notre",is_delimiter:!1,gloss:"our"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"chiffre",is_delimiter:!1,gloss:"monogram"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"est",is_delimiter:!1,gloss:"is"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mort",is_delimiter:!1,gloss:"dead"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ou",is_delimiter:!1,gloss:"or"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"renversé;",is_delimiter:!1,gloss:"overturned;"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Nos",is_delimiter:!1,gloss:"Our"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"roses",is_delimiter:!1,gloss:"roses"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"dans",is_delimiter:!1,gloss:"in"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"l'enclos",is_delimiter:!1,gloss:"the-hedge"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ont",is_delimiter:!1,gloss:"have"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"été",is_delimiter:!1,gloss:"been"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ravagées",is_delimiter:!1,gloss:"ravaged"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Par",is_delimiter:!1,gloss:"By"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"les",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"petits",is_delimiter:!1,gloss:"little"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"enfants",is_delimiter:!1,gloss:"children"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"qui",is_delimiter:!1,gloss:"who"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sautent",is_delimiter:!1,gloss:"leap"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"le",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"fossé.",is_delimiter:!1,gloss:"ditch."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`French`_`English`",original_text:`Nos chambres de feuillage en halliers sont changées!
L'arbre où fut notre chiffre est mort ou renversé;
Nos roses dans l'enclos ont été ravagées
Par les petits enfants qui sautent le fossé.`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"French",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Un",is_delimiter:!1,gloss:"A"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mur",is_delimiter:!1,gloss:"wall"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"clôt",is_delimiter:!1,gloss:"inclosed"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"la",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"fontaine",is_delimiter:!1,gloss:"fountain"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"où,",is_delimiter:!1,gloss:"where,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"par",is_delimiter:!1,gloss:"by"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"l'heure",is_delimiter:!1,gloss:"the hour"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"échauffée,",is_delimiter:!1,gloss:"warmed,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Folâtre,",is_delimiter:!1,gloss:"Sportif,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"elle",is_delimiter:!1,gloss:"she"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"buvait",is_delimiter:!1,gloss:"drank"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"en",is_delimiter:!1,gloss:"in"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"descendant",is_delimiter:!1,gloss:"descending"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"des",is_delimiter:!1,gloss:"of"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"bois;",is_delimiter:!1,gloss:"woods;"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Elle",is_delimiter:!1,gloss:"She"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"prenait",is_delimiter:!1,gloss:"took"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"de",is_delimiter:!1,gloss:"of"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"l'eau",is_delimiter:!1,gloss:"the-water"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"dans",is_delimiter:!1,gloss:"in"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sa",is_delimiter:!1,gloss:"her"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"main,",is_delimiter:!1,gloss:"hand,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"douce",is_delimiter:!1,gloss:"sweet"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"fée,",is_delimiter:!1,gloss:"fairy,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Et",is_delimiter:!1,gloss:"And"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"laissait",is_delimiter:!1,gloss:"let"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"retomber",is_delimiter:!1,gloss:"fall-back"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"des",is_delimiter:!1,gloss:"some"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"perles",is_delimiter:!1,gloss:"pearls"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"de",is_delimiter:!1,gloss:"from"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ses",is_delimiter:!1,gloss:"her"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"doigts!",is_delimiter:!1,gloss:"fingers!"}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`French`_`English`",original_text:`Un mur clôt la fontaine où, par l'heure échauffée,
Folâtre, elle buvait en descendant des bois;
Elle prenait de l'eau dans sa main, douce fée,
Et laissait retomber des perles de ses doigts!`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"French",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"On",is_delimiter:!1,gloss:"On"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"a",is_delimiter:!1,gloss:"has"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"pavé",is_delimiter:!1,gloss:"paved"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"la",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"route",is_delimiter:!1,gloss:"road"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"âpre",is_delimiter:!1,gloss:"rough"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"et",is_delimiter:!1,gloss:"and"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mal",is_delimiter:!1,gloss:"badly"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"aplanie,",is_delimiter:!1,gloss:"levelled,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Où,",is_delimiter:!1,gloss:"Where,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"dans",is_delimiter:!1,gloss:"in"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"le",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sable",is_delimiter:!1,gloss:"sand"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"pur",is_delimiter:!1,gloss:"pure"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"se",is_delimiter:!1,gloss:"itself"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"dessinant",is_delimiter:!1,gloss:"tracing"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"si",is_delimiter:!1,gloss:"so"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"bien,",is_delimiter:!1,gloss:"well,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Et",is_delimiter:!1,gloss:"And"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"de",is_delimiter:!1,gloss:"of"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sa",is_delimiter:!1,gloss:"its"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"petitesse",is_delimiter:!1,gloss:"smallness"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"étalant",is_delimiter:!1,gloss:"displaying"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"l'ironie,",is_delimiter:!1,gloss:"the-irony,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Son",is_delimiter:!1,gloss:"His"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"pied",is_delimiter:!1,gloss:"foot"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"charmant",is_delimiter:!1,gloss:"charming"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"semblait",is_delimiter:!1,gloss:"seemed"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"rire",is_delimiter:!1,gloss:"to-laugh"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"à",is_delimiter:!1,gloss:"at"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"côté",is_delimiter:!1,gloss:"side"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"du",is_delimiter:!1,gloss:"of-the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mien!",is_delimiter:!1,gloss:"mine!"}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`French`_`English`",original_text:`On a pavé la route âpre et mal aplanie,
Où, dans le sable pur se dessinant si bien,
Et de sa petitesse étalant l'ironie,
Son pied charmant semblait rire à côté du mien!`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"French",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"La",is_delimiter:!1,gloss:"The"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"borne",is_delimiter:!1,gloss:"landmark"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"du",is_delimiter:!1,gloss:"of-the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"chemin,",is_delimiter:!1,gloss:"road,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"qui",is_delimiter:!1,gloss:"which"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"vit",is_delimiter:!1,gloss:"saw"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"des",is_delimiter:!1,gloss:"of-the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"jours",is_delimiter:!1,gloss:"days"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sans",is_delimiter:!1,gloss:"without"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nombre,",is_delimiter:!1,gloss:"number,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Où",is_delimiter:!1,gloss:"Where"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"jadis",is_delimiter:!1,gloss:"formerly"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"pour",is_delimiter:!1,gloss:"for"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"m'attendre",is_delimiter:!1,gloss:"me-to-wait"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"elle",is_delimiter:!1,gloss:"she"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"aimait",is_delimiter:!1,gloss:"loved"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"à",is_delimiter:!1,gloss:"to"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"s'asseoir,",is_delimiter:!1,gloss:"sit,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"S'est",is_delimiter:!1,gloss:"Has"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"usée",is_delimiter:!1,gloss:"wasted"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"en",is_delimiter:!1,gloss:"in"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"heurtant,",is_delimiter:!1,gloss:"-hitting,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"lorsque",is_delimiter:!1,gloss:"when"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"la",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"route",is_delimiter:!1,gloss:"road"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"est",is_delimiter:!1,gloss:"is"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sombre,",is_delimiter:!1,gloss:"dark,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Les",is_delimiter:!1,gloss:"The"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"grands",is_delimiter:!1,gloss:"great"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"chars",is_delimiter:!1,gloss:"wagons"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"gémissants",is_delimiter:!1,gloss:"groaning"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"qui",is_delimiter:!1,gloss:"which"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"reviennent",is_delimiter:!1,gloss:"return"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"le",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"soir.",is_delimiter:!1,gloss:"evening."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`French`_`English`",original_text:`La borne du chemin, qui vit des jours sans nombre,
Où jadis pour m'attendre elle aimait à s'asseoir,
S'est usée en heurtant, lorsque la route est sombre,
Les grands chars gémissants qui reviennent le soir.`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"French",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"La",is_delimiter:!1,gloss:"The"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"forêt",is_delimiter:!1,gloss:"forest"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ici",is_delimiter:!1,gloss:"here"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"manque",is_delimiter:!1,gloss:"wants"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"et",is_delimiter:!1,gloss:"and"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"là",is_delimiter:!1,gloss:"there"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"s'est",is_delimiter:!1,gloss:"has"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"agrandie.",is_delimiter:!1,gloss:"enlarged."},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"De",is_delimiter:!1,gloss:"Of"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"tout",is_delimiter:!1,gloss:"all"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ce",is_delimiter:!1,gloss:"this"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"qui",is_delimiter:!1,gloss:"who"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"fut",is_delimiter:!1,gloss:"was"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nous",is_delimiter:!1,gloss:"we"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"presque",is_delimiter:!1,gloss:"almost"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"rien",is_delimiter:!1,gloss:"nothing"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"n'est",is_delimiter:!1,gloss:"is"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"vivant;",is_delimiter:!1,gloss:"living;"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Et,",is_delimiter:!1,gloss:"And,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"comme",is_delimiter:!1,gloss:"like"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"un",is_delimiter:!1,gloss:"a"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"tas",is_delimiter:!1,gloss:"heap"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"de",is_delimiter:!1,gloss:"of"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"cendre",is_delimiter:!1,gloss:"ashes"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"éteinte",is_delimiter:!1,gloss:"extinguished"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"et",is_delimiter:!1,gloss:"and"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"refroidie,",is_delimiter:!1,gloss:"cooled,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"L'amas",is_delimiter:!1,gloss:"The-heap"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"des",is_delimiter:!1,gloss:"of"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"souvenirs",is_delimiter:!1,gloss:"recollections"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"se",is_delimiter:!1,gloss:"itself"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"disperse",is_delimiter:!1,gloss:"disperses"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"à",is_delimiter:!1,gloss:"to"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"tout",is_delimiter:!1,gloss:"every"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"vent!",is_delimiter:!1,gloss:"wind!"}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`French`_`English`",original_text:`La forêt ici manque et là s'est agrandie.
De tout ce qui fut nous presque rien n'est vivant;
Et, comme un tas de cendre éteinte et refroidie,
L'amas des souvenirs se disperse à tout vent!`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"French",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"N'existons-nous",is_delimiter:!1,gloss:"Do-we not-exist"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"donc",is_delimiter:!1,gloss:"then"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"plus?",is_delimiter:!1,gloss:"more?"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Avons-nous",is_delimiter:!1,gloss:"Have-we"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"eu",is_delimiter:!1,gloss:"had"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"notre",is_delimiter:!1,gloss:"our"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"heure",is_delimiter:!1,gloss:"hour"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"?",is_delimiter:!1,gloss:"?"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Rien",is_delimiter:!1,gloss:"Nothing"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ne",is_delimiter:!1,gloss:"not"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"la",is_delimiter:!1,gloss:"it"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"rendra-t-il",is_delimiter:!1,gloss:"will-he-render"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"à",is_delimiter:!1,gloss:"to"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nos",is_delimiter:!1,gloss:"our"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"cris",is_delimiter:!1,gloss:"cries"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"superflus?",is_delimiter:!1,gloss:"superfluous?"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"L'air",is_delimiter:!1,gloss:"The-air"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"joue",is_delimiter:!1,gloss:"plays"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"avec",is_delimiter:!1,gloss:"with"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"la",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"branche",is_delimiter:!1,gloss:"branch"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"au",is_delimiter:!1,gloss:"at-the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"moment",is_delimiter:!1,gloss:"moment"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"où",is_delimiter:!1,gloss:"where"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"je",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"pleure;",is_delimiter:!1,gloss:"weep;"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Ma",is_delimiter:!1,gloss:"My"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"maison",is_delimiter:!1,gloss:"house"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"me",is_delimiter:!1,gloss:"me"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"regarde",is_delimiter:!1,gloss:"regards"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"et",is_delimiter:!1,gloss:"and"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ne",is_delimiter:!1,gloss:"not"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"me",is_delimiter:!1,gloss:"me"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"connaît",is_delimiter:!1,gloss:"knows"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"plus.",is_delimiter:!1,gloss:"more"}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`French`_`English`",original_text:`N'existons-nous donc plus? Avons-nous eu notre heure ?
Rien ne la rendra-t-il à nos cris superflus?
L'air joue avec la branche au moment où je pleure;
Ma maison me regarde et ne me connaît plus.`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"French",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"D'autres",is_delimiter:!1,gloss:"Others"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"vont",is_delimiter:!1,gloss:"go"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"maintenant",is_delimiter:!1,gloss:"now"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"passer",is_delimiter:!1,gloss:"to-pass"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"où",is_delimiter:!1,gloss:"where"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nous",is_delimiter:!1,gloss:"we"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"passâmes.",is_delimiter:!1,gloss:"passed."},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Nous",is_delimiter:!1,gloss:"We"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"y",is_delimiter:!1,gloss:"there"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sommes",is_delimiter:!1,gloss:"are"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"venus,",is_delimiter:!1,gloss:"come,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"d'autres",is_delimiter:!1,gloss:"others"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"vont",is_delimiter:!1,gloss:"go"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"y",is_delimiter:!1,gloss:"there"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"venir;",is_delimiter:!1,gloss:"to-come;"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Et",is_delimiter:!1,gloss:"And"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"le",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"songe",is_delimiter:!1,gloss:"dream"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"qu'avaient",is_delimiter:!1,gloss:"which-had"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ébauché",is_delimiter:!1,gloss:"sketched"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nos",is_delimiter:!1,gloss:"our"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"deux",is_delimiter:!1,gloss:"two"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"âmes,",is_delimiter:!1,gloss:"souls,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Ils",is_delimiter:!1,gloss:"They"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"le",is_delimiter:!1,gloss:"it"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"continueront",is_delimiter:!1,gloss:"will-continue"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sans",is_delimiter:!1,gloss:"without"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"pouvoir",is_delimiter:!1,gloss:"being-able"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"le",is_delimiter:!1,gloss:"it"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"finir!",is_delimiter:!1,gloss:"to-finish!"}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`French`_`English`",original_text:`D'autres vont maintenant passer où nous passâmes.
Nous y sommes venus, d'autres vont y venir;
Et le songe qu'avaient ébauché nos deux âmes,
Ils le continueront sans pouvoir le finir!`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"French",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Car",is_delimiter:!1,gloss:"For"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"personne",is_delimiter:!1,gloss:"nobody"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ici-bas",is_delimiter:!1,gloss:"here-below"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ne",is_delimiter:!1,gloss:"ne"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"termine",is_delimiter:!1,gloss:"finishes"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"et",is_delimiter:!1,gloss:"and"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"n'achève;",is_delimiter:!1,gloss:"n'ends;"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Les",is_delimiter:!1,gloss:"The"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"pires",is_delimiter:!1,gloss:"worst"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"des",is_delimiter:!1,gloss:"of-the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"humains",is_delimiter:!1,gloss:"humans"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sont",is_delimiter:!1,gloss:"are"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"comme",is_delimiter:!1,gloss:"like"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"les",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"meilleurs;",is_delimiter:!1,gloss:"best;"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Nous",is_delimiter:!1,gloss:"We"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nous",is_delimiter:!1,gloss:"ourselves"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"réveillons",is_delimiter:!1,gloss:"awaken"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"tous",is_delimiter:!1,gloss:"all"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"au",is_delimiter:!1,gloss:"at-the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"même",is_delimiter:!1,gloss:"same"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"endroit",is_delimiter:!1,gloss:"spot"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"du",is_delimiter:!1,gloss:"of-the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"rêve.",is_delimiter:!1,gloss:"dream."},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Tout",is_delimiter:!1,gloss:"All"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"commence",is_delimiter:!1,gloss:"begins"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"en",is_delimiter:!1,gloss:"in"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ce",is_delimiter:!1,gloss:"this"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"monde",is_delimiter:!1,gloss:"world"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"et",is_delimiter:!1,gloss:"and"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"tout",is_delimiter:!1,gloss:"all"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"finit",is_delimiter:!1,gloss:"finishes"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ailleurs.",is_delimiter:!1,gloss:"elsewhere."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`French`_`English`",original_text:`Car personne ici-bas ne termine et n'achève;
Les pires des humains sont comme les meilleurs;
Nous nous réveillons tous au même endroit du rêve.
Tout commence en ce monde et tout finit ailleurs.`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"French",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Oui,",is_delimiter:!1,gloss:"Yes,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"d'autres",is_delimiter:!1,gloss:"others"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"à",is_delimiter:!1,gloss:"at"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"leur",is_delimiter:!1,gloss:"their"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"tour",is_delimiter:!1,gloss:"turn"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"viendront,",is_delimiter:!1,gloss:"will-come,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"couples",is_delimiter:!1,gloss:"couples"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sans",is_delimiter:!1,gloss:"without"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"tache,",is_delimiter:!1,gloss:"spot,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Puiser",is_delimiter:!1,gloss:"To-draw"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"dans",is_delimiter:!1,gloss:"in"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"cet",is_delimiter:!1,gloss:"this"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"asile",is_delimiter:!1,gloss:"asylum"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"heureux,",is_delimiter:!1,gloss:"happy,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"calme,",is_delimiter:!1,gloss:"calm,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"enchanté,",is_delimiter:!1,gloss:"enchanted,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Tout",is_delimiter:!1,gloss:"All"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ce",is_delimiter:!1,gloss:"this"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"que",is_delimiter:!1,gloss:"which"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"la",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nature",is_delimiter:!1,gloss:"nature"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"à",is_delimiter:!1,gloss:"to"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"l'amour",is_delimiter:!1,gloss:"love"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"qui",is_delimiter:!1,gloss:"which"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"se",is_delimiter:!1,gloss:"(it) hides"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"cache",is_delimiter:!1,gloss:"conceals"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Mêle",is_delimiter:!1,gloss:"Blends"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"de",is_delimiter:!1,gloss:"of"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"rêverie",is_delimiter:!1,gloss:"reverie"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"et",is_delimiter:!1,gloss:"and"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"de",is_delimiter:!1,gloss:"of"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"solennité!",is_delimiter:!1,gloss:"solemnity!"}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`French`_`English`",original_text:`Oui, d'autres à leur tour viendront, couples sans tache,
Puiser dans cet asile heureux, calme, enchanté,
Tout ce que la nature à l'amour qui se cache
Mêle de rêverie et de solennité!`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"French",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"D'autres",is_delimiter:!1,gloss:"Others"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"auront",is_delimiter:!1,gloss:"shall have"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nos",is_delimiter:!1,gloss:"our"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"champs,",is_delimiter:!1,gloss:"fields,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nos",is_delimiter:!1,gloss:"our"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sentiers,",is_delimiter:!1,gloss:"paths,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nos",is_delimiter:!1,gloss:"our"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"retraites;",is_delimiter:!1,gloss:"retreats;"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Ton",is_delimiter:!1,gloss:"Thy"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"bois,",is_delimiter:!1,gloss:"wood,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ma",is_delimiter:!1,gloss:"my"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"bien-aimée,",is_delimiter:!1,gloss:"beloved,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"est",is_delimiter:!1,gloss:"is"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"à",is_delimiter:!1,gloss:"to"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"des",is_delimiter:!1,gloss:"(the)"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"inconnus.",is_delimiter:!1,gloss:"unknowns."},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"D'autres",is_delimiter:!1,gloss:"Other"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"femmes",is_delimiter:!1,gloss:"women"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"viendront,",is_delimiter:!1,gloss:"will come,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"baigneuses",is_delimiter:!1,gloss:"bathers"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"indiscrètes,",is_delimiter:!1,gloss:"indiscreet,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Troubler",is_delimiter:!1,gloss:"To disturb"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"le",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"flot",is_delimiter:!1,gloss:"wave"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sacré",is_delimiter:!1,gloss:"sacred"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"qu'ont",is_delimiter:!1,gloss:"that-have"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"touché",is_delimiter:!1,gloss:"touched"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"tes",is_delimiter:!1,gloss:"thy"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"pieds",is_delimiter:!1,gloss:"feet"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nus!",is_delimiter:!1,gloss:"bare!"}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`French`_`English`",original_text:`D'autres auront nos champs, nos sentiers, nos retraites;
Ton bois, ma bien-aimée, est à des inconnus.
D'autres femmes viendront, baigneuses indiscrètes,
Troubler le flot sacré qu'ont touché tes pieds nus!`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"French",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Quoi",is_delimiter:!1,gloss:"What"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"donc!",is_delimiter:!1,gloss:"then!"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"c'est",is_delimiter:!1,gloss:"is"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"vainement",is_delimiter:!1,gloss:"in-vain"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"qu'ici",is_delimiter:!1,gloss:"that-here"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nous",is_delimiter:!1,gloss:"we"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nous",is_delimiter:!1,gloss:"us"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"aimâmes",is_delimiter:!1,gloss:"loved"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"!",is_delimiter:!1,gloss:"!"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Rien",is_delimiter:!1,gloss:"Nothing"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ne",is_delimiter:!1,gloss:"not"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nous",is_delimiter:!1,gloss:"to-us"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"restera",is_delimiter:!1,gloss:"will-remain"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"de",is_delimiter:!1,gloss:"of"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ces",is_delimiter:!1,gloss:"these"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"coteaux",is_delimiter:!1,gloss:"hills"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"fleuris",is_delimiter:!1,gloss:"flowery"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Où",is_delimiter:!1,gloss:"Where"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nous",is_delimiter:!1,gloss:"we"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"fondions",is_delimiter:!1,gloss:"did-fond"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"notre",is_delimiter:!1,gloss:"our"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"être",is_delimiter:!1,gloss:"being"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"en",is_delimiter:!1,gloss:"in"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"y",is_delimiter:!1,gloss:"there"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mêlant",is_delimiter:!1,gloss:"mingling"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nos",is_delimiter:!1,gloss:"our"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"flammes!",is_delimiter:!1,gloss:"flames!"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"L'impassible",is_delimiter:!1,gloss:"The-impassible"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nature",is_delimiter:!1,gloss:"nature"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"a",is_delimiter:!1,gloss:"has"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"déjà",is_delimiter:!1,gloss:"already"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"tout",is_delimiter:!1,gloss:"all"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"repris.",is_delimiter:!1,gloss:"reclaimed."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`French`_`English`",original_text:`Quoi donc! c'est vainement qu'ici nous nous aimâmes !
Rien ne nous restera de ces coteaux fleuris
Où nous fondions notre être en y mêlant nos flammes!
L'impassible nature a déjà tout repris.`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"French",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Oh!",is_delimiter:!1,gloss:"Oh!"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"dites-moi,",is_delimiter:!1,gloss:"tell-me,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ravins,",is_delimiter:!1,gloss:"ravines,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"frais",is_delimiter:!1,gloss:"cool"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ruisseaux,",is_delimiter:!1,gloss:"brooks,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"treilles",is_delimiter:!1,gloss:"vines"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mûres,",is_delimiter:!1,gloss:"ripe,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Rameaux",is_delimiter:!1,gloss:"Branches"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"chargés",is_delimiter:!1,gloss:"loaded"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"de",is_delimiter:!1,gloss:"of"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nids,",is_delimiter:!1,gloss:"nests,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"grottes,",is_delimiter:!1,gloss:"caverns,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"forêts,",is_delimiter:!1,gloss:"woods,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"buissons.",is_delimiter:!1,gloss:"bushes."},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Est-ce",is_delimiter:!1,gloss:"Is-it"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"que",is_delimiter:!1,gloss:"that"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"vous",is_delimiter:!1,gloss:"you"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ferez",is_delimiter:!1,gloss:"will-do"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"pour",is_delimiter:!1,gloss:"for"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"d'autres",is_delimiter:!1,gloss:"others"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"vos",is_delimiter:!1,gloss:"your"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"murmures?",is_delimiter:!1,gloss:"murmurs?"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Est-ce",is_delimiter:!1,gloss:"Is-it"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"que",is_delimiter:!1,gloss:"that"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"vous",is_delimiter:!1,gloss:"you"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"direz",is_delimiter:!1,gloss:"will-say"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"à",is_delimiter:!1,gloss:"to"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"d'autres",is_delimiter:!1,gloss:"others"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"vos",is_delimiter:!1,gloss:"your"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"chansons?",is_delimiter:!1,gloss:"songs?"}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`French`_`English`",original_text:`Oh! dites-moi, ravins, frais ruisseaux, treilles mûres,
Rameaux chargés de nids, grottes, forêts, buissons.
Est-ce que vous ferez pour d'autres vos murmures?
Est-ce que vous direz à d'autres vos chansons?`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"French",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Nous",is_delimiter:!1,gloss:"We"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"vous",is_delimiter:!1,gloss:"you"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"comprenions",is_delimiter:!1,gloss:"understood"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"tant!",is_delimiter:!1,gloss:"so much!"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"doux,",is_delimiter:!1,gloss:"sweet,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"attentifs,",is_delimiter:!1,gloss:"attentive,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"austères,",is_delimiter:!1,gloss:"austere,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Tous",is_delimiter:!1,gloss:"All"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nos",is_delimiter:!1,gloss:"our"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"échos",is_delimiter:!1,gloss:"echoes"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"s'ouvraient",is_delimiter:!1,gloss:"did open"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"si",is_delimiter:!1,gloss:"so"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"bien",is_delimiter:!1,gloss:"well"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"à",is_delimiter:!1,gloss:"to"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"votre",is_delimiter:!1,gloss:"your"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"voix!",is_delimiter:!1,gloss:"voice!"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Et",is_delimiter:!1,gloss:"And"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nous",is_delimiter:!1,gloss:"we"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"prêtions",is_delimiter:!1,gloss:"lent"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"si",is_delimiter:!1,gloss:"so"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"bien,",is_delimiter:!1,gloss:"well,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sans",is_delimiter:!1,gloss:"without"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"troubler",is_delimiter:!1,gloss:"troubling"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"vos",is_delimiter:!1,gloss:"your"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mystères,",is_delimiter:!1,gloss:"mysteries,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"L'oreille",is_delimiter:!1,gloss:"The-ear"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"aux",is_delimiter:!1,gloss:"to-the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mots",is_delimiter:!1,gloss:"words"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"profonds",is_delimiter:!1,gloss:"profound"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"que",is_delimiter:!1,gloss:"which"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"vous",is_delimiter:!1,gloss:"you"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"dites",is_delimiter:!1,gloss:"say"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"parfois!",is_delimiter:!1,gloss:"sometimes!"}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`French`_`English`",original_text:`Nous vous comprenions tant! doux, attentifs, austères,
Tous nos échos s'ouvraient si bien à votre voix!
Et nous prêtions si bien, sans troubler vos mystères,
L'oreille aux mots profonds que vous dites parfois!`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"French",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Répondez,",is_delimiter:!1,gloss:"Answer,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"vallon",is_delimiter:!1,gloss:"valley"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"pur,",is_delimiter:!1,gloss:"pure,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"répondez,",is_delimiter:!1,gloss:"answer,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"solitude,",is_delimiter:!1,gloss:"solitary,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"O",is_delimiter:!1,gloss:"O"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nature",is_delimiter:!1,gloss:"nature"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"abritée",is_delimiter:!1,gloss:"sheltered"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"en",is_delimiter:!1,gloss:"in"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ce",is_delimiter:!1,gloss:"this"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"désert",is_delimiter:!1,gloss:"desert"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"si",is_delimiter:!1,gloss:"so"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"beau,",is_delimiter:!1,gloss:"beautiful,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Lorsque",is_delimiter:!1,gloss:"When"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nous",is_delimiter:!1,gloss:"we"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"dormirons",is_delimiter:!1,gloss:"shall sleep"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"tous",is_delimiter:!1,gloss:"all"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"deux",is_delimiter:!1,gloss:"two"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"dans",is_delimiter:!1,gloss:"in"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"l'attitude",is_delimiter:!1,gloss:"the attitude"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Que",is_delimiter:!1,gloss:"Which"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"donne",is_delimiter:!1,gloss:"gives"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"aux",is_delimiter:!1,gloss:"to (it)"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"morts",is_delimiter:!1,gloss:"dead"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"pensifs",is_delimiter:!1,gloss:"pensive"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"la",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"forme",is_delimiter:!1,gloss:"form"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"du",is_delimiter:!1,gloss:"of-the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"tombeau,",is_delimiter:!1,gloss:"tomb."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`French`_`English`",original_text:`Répondez, vallon pur, répondez, solitude,
O nature abritée en ce désert si beau,
Lorsque nous dormirons tous deux dans l'attitude
Que donne aux morts pensifs la forme du tombeau,`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"French",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Est-ce",is_delimiter:!1,gloss:"Is-it"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"que",is_delimiter:!1,gloss:"that"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"vous",is_delimiter:!1,gloss:"you"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"serez",is_delimiter:!1,gloss:"will-be"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"à",is_delimiter:!1,gloss:"to"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ce",is_delimiter:!1,gloss:"this"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"point",is_delimiter:!1,gloss:"point"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"insensible",is_delimiter:!1,gloss:"insensible"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"De",is_delimiter:!1,gloss:"To"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nous",is_delimiter:!1,gloss:"us"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"savoir",is_delimiter:!1,gloss:"to-know"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"couchés,",is_delimiter:!1,gloss:"couched,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"morts",is_delimiter:!1,gloss:"dead"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"avec",is_delimiter:!1,gloss:"with"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nos",is_delimiter:!1,gloss:"our"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"amours,",is_delimiter:!1,gloss:"loves,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Et",is_delimiter:!1,gloss:"And"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"de",is_delimiter:!1,gloss:"to"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"continuer",is_delimiter:!1,gloss:"continue"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"votre",is_delimiter:!1,gloss:"your"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"fête",is_delimiter:!1,gloss:"festival"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"paisible,",is_delimiter:!1,gloss:"peaceful,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Et",is_delimiter:!1,gloss:"And"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"de",is_delimiter:!1,gloss:"to"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"toujours",is_delimiter:!1,gloss:"always"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sourire",is_delimiter:!1,gloss:"smile"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"et",is_delimiter:!1,gloss:"and"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"de",is_delimiter:!1,gloss:"to"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"chanter",is_delimiter:!1,gloss:"sing"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"toujours?",is_delimiter:!1,gloss:"always?"}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`French`_`English`",original_text:`Est-ce que vous serez à ce point insensible
De nous savoir couchés, morts avec nos amours,
Et de continuer votre fête paisible,
Et de toujours sourire et de chanter toujours?`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"French",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Est-ce",is_delimiter:!1,gloss:"Is-it"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"que,",is_delimiter:!1,gloss:"that,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nous",is_delimiter:!1,gloss:"we"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sentant",is_delimiter:!1,gloss:"feeling"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"errer",is_delimiter:!1,gloss:"to-err"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"dans",is_delimiter:!1,gloss:"in"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"vos",is_delimiter:!1,gloss:"your"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"retraites,",is_delimiter:!1,gloss:"retreats,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Fantômes",is_delimiter:!1,gloss:"Ghosts"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"reconnus",is_delimiter:!1,gloss:"recognized"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"par",is_delimiter:!1,gloss:"by"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"vos",is_delimiter:!1,gloss:"your"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"monts",is_delimiter:!1,gloss:"mountains"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"et",is_delimiter:!1,gloss:"and"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"vos",is_delimiter:!1,gloss:"your"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"bois,",is_delimiter:!1,gloss:"woods,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Vous",is_delimiter:!1,gloss:"You"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ne",is_delimiter:!1,gloss:"not"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nous",is_delimiter:!1,gloss:"to-us"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"direz",is_delimiter:!1,gloss:"will-say"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"pas",is_delimiter:!1,gloss:"not"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"de",is_delimiter:!1,gloss:"of"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ces",is_delimiter:!1,gloss:"these"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"choses",is_delimiter:!1,gloss:"things"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"secrètes",is_delimiter:!1,gloss:"secret"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Qu'on",is_delimiter:!1,gloss:"Which-are"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"dit",is_delimiter:!1,gloss:"said"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"en",is_delimiter:!1,gloss:"in"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"revoyant",is_delimiter:!1,gloss:"seeing-again"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"des",is_delimiter:!1,gloss:"(by)-some"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"amis",is_delimiter:!1,gloss:"friends"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"d'autrefois?",is_delimiter:!1,gloss:"of-former-times?"}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`French`_`English`",original_text:`Est-ce que, nous sentant errer dans vos retraites,
Fantômes reconnus par vos monts et vos bois,
Vous ne nous direz pas de ces choses secrètes
Qu'on dit en revoyant des amis d'autrefois?`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"French",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Est-ce",is_delimiter:!1,gloss:"Is-it"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"que",is_delimiter:!1,gloss:"that"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"vous",is_delimiter:!1,gloss:"you"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"pourrez,",is_delimiter:!1,gloss:"will-be-able,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sans",is_delimiter:!1,gloss:"without"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"tristesse",is_delimiter:!1,gloss:"sadness"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"et",is_delimiter:!1,gloss:"and"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sans",is_delimiter:!1,gloss:"without"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"plainte,",is_delimiter:!1,gloss:"complaint,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Voir",is_delimiter:!1,gloss:"To-see"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nos",is_delimiter:!1,gloss:"our"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ombres",is_delimiter:!1,gloss:"shades"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"flotter",is_delimiter:!1,gloss:"to-float"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"où",is_delimiter:!1,gloss:"where"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"marchèrent",is_delimiter:!1,gloss:"marched"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nos",is_delimiter:!1,gloss:"our"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"pas,",is_delimiter:!1,gloss:"steps,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Et",is_delimiter:!1,gloss:"And"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"la",is_delimiter:!1,gloss:"her"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"voir",is_delimiter:!1,gloss:"to-see"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"m'entraîner,",is_delimiter:!1,gloss:"me-drag,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"dans",is_delimiter:!1,gloss:"in"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"une",is_delimiter:!1,gloss:"a"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"morne",is_delimiter:!1,gloss:"dull"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"étreinte,",is_delimiter:!1,gloss:"embrace,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Vers",is_delimiter:!1,gloss:"Toward"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"quelque",is_delimiter:!1,gloss:"some"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"source",is_delimiter:!1,gloss:"fountain"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"en",is_delimiter:!1,gloss:"in"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"pleurs",is_delimiter:!1,gloss:"tears"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"qui",is_delimiter:!1,gloss:"which"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sanglote",is_delimiter:!1,gloss:"sobs"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"tout",is_delimiter:!1,gloss:"all"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"bas?",is_delimiter:!1,gloss:"low?"}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`French`_`English`",original_text:`Est-ce que vous pourrez, sans tristesse et sans plainte,
Voir nos ombres flotter où marchèrent nos pas,
Et la voir m'entraîner, dans une morne étreinte,
Vers quelque source en pleurs qui sanglote tout bas?`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"French",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Et",is_delimiter:!1,gloss:"And"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"s'il",is_delimiter:!1,gloss:"if he"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"est",is_delimiter:!1,gloss:"is"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"quelque",is_delimiter:!1,gloss:"somewhere"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"part,",is_delimiter:!1,gloss:"part,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"dans",is_delimiter:!1,gloss:"in"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"l'ombre",is_delimiter:!1,gloss:"the-shade"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"où",is_delimiter:!1,gloss:"where"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"rien",is_delimiter:!1,gloss:"nothing"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ne",is_delimiter:!1,gloss:"not"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"veille,",is_delimiter:!1,gloss:"watches,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Deux",is_delimiter:!1,gloss:"Two"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"amants",is_delimiter:!1,gloss:"lovers"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sous",is_delimiter:!1,gloss:"under"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"vos",is_delimiter:!1,gloss:"your"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"fleurs",is_delimiter:!1,gloss:"flowers"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"abritant",is_delimiter:!1,gloss:"sheltering"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"leurs",is_delimiter:!1,gloss:"their"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"transports,",is_delimiter:!1,gloss:"raptures,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Ne",is_delimiter:!1,gloss:"Not"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"leur",is_delimiter:!1,gloss:"to-them"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"irez-vous",is_delimiter:!1,gloss:"will-you-go"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"pas",is_delimiter:!1,gloss:"not"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"murmurer",is_delimiter:!1,gloss:"to-murmur"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"à",is_delimiter:!1,gloss:"to-the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"l'oreille:",is_delimiter:!1,gloss:"ear:"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"-",is_delimiter:!1,gloss:"-"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Vous",is_delimiter:!1,gloss:"You"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"qui",is_delimiter:!1,gloss:"who"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"vivez,",is_delimiter:!1,gloss:"live,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"donnez",is_delimiter:!1,gloss:"give"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"une",is_delimiter:!1,gloss:"a"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"pensée",is_delimiter:!1,gloss:"thought"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"aux",is_delimiter:!1,gloss:"to-the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"morts!",is_delimiter:!1,gloss:"dead!"}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`French`_`English`",original_text:`Et s'il est quelque part, dans l'ombre où rien ne veille,
Deux amants sous vos fleurs abritant leurs transports,
Ne leur irez-vous pas murmurer à l'oreille:
- Vous qui vivez, donnez une pensée aux morts!`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"French",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Dieu",is_delimiter:!1,gloss:"God"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nous",is_delimiter:!1,gloss:"to-us"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"prête",is_delimiter:!1,gloss:"lend"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"un",is_delimiter:!1,gloss:"a"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"moment",is_delimiter:!1,gloss:"moment"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"les",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"prés",is_delimiter:!1,gloss:"meadows,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"et",is_delimiter:!1,gloss:"and"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"les",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"fontaines,",is_delimiter:!1,gloss:"fountains,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Les",is_delimiter:!1,gloss:"The"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"grands",is_delimiter:!1,gloss:"great"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"bois",is_delimiter:!1,gloss:"woods"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"frissonnants,",is_delimiter:!1,gloss:"trembling,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"les",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"rocs",is_delimiter:!1,gloss:"rocks"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"profonds",is_delimiter:!1,gloss:"profound"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"et",is_delimiter:!1,gloss:"and"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sourds",is_delimiter:!1,gloss:"dull"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Et",is_delimiter:!1,gloss:"And"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"les",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"cieux",is_delimiter:!1,gloss:"heavens"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"azurés",is_delimiter:!1,gloss:"azured"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"et",is_delimiter:!1,gloss:"and"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"les",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"lacs",is_delimiter:!1,gloss:"lakes"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"et",is_delimiter:!1,gloss:"and"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"les",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"plaines,",is_delimiter:!1,gloss:"plains,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Pour",is_delimiter:!1,gloss:"In-order"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"y",is_delimiter:!1,gloss:"there"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mettre",is_delimiter:!1,gloss:"to-put"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nos",is_delimiter:!1,gloss:"our"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"coeurs,",is_delimiter:!1,gloss:"hearts,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nos",is_delimiter:!1,gloss:"our"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"rêves,",is_delimiter:!1,gloss:"dreams,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nos",is_delimiter:!1,gloss:"our"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"amours;",is_delimiter:!1,gloss:"loves;"}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`French`_`English`",original_text:`Dieu nous prête un moment les prés et les fontaines,
Les grands bois frissonnants, les rocs profonds et sourds
Et les cieux azurés et les lacs et les plaines,
Pour y mettre nos coeurs, nos rêves, nos amours;`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"French",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Puis",is_delimiter:!1,gloss:"Then"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"il",is_delimiter:!1,gloss:"he"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nous",is_delimiter:!1,gloss:"us"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"les",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"retire.",is_delimiter:!1,gloss:"withdraws."},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Il",is_delimiter:!1,gloss:"He"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"souffle",is_delimiter:!1,gloss:"blows"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"notre",is_delimiter:!1,gloss:"our"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"flamme;",is_delimiter:!1,gloss:"flame;"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Il",is_delimiter:!1,gloss:"He"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"plonge",is_delimiter:!1,gloss:"plunges"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"dans",is_delimiter:!1,gloss:"into"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"la",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nuit",is_delimiter:!1,gloss:"night"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"l'antre",is_delimiter:!1,gloss:"the-cave"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"où",is_delimiter:!1,gloss:"where"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nous",is_delimiter:!1,gloss:"we"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"rayonnons;",is_delimiter:!1,gloss:"shone;"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Et",is_delimiter:!1,gloss:"And"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"dit",is_delimiter:!1,gloss:"says"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"à",is_delimiter:!1,gloss:"to"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"la",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"vallée,",is_delimiter:!1,gloss:"valley,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"où",is_delimiter:!1,gloss:"where"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"s'imprima",is_delimiter:!1,gloss:"was-impressed"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"notre",is_delimiter:!1,gloss:"our"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"âme,",is_delimiter:!1,gloss:"soul,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"D'effacer",is_delimiter:!1,gloss:"To-efface"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"notre",is_delimiter:!1,gloss:"our"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"trace",is_delimiter:!1,gloss:"trace"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"et",is_delimiter:!1,gloss:"and"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"d'oublier",is_delimiter:!1,gloss:"to-forget"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nos",is_delimiter:!1,gloss:"our"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"noms.",is_delimiter:!1,gloss:"names."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`French`_`English`",original_text:`Puis il nous les retire. Il souffle notre flamme;
Il plonge dans la nuit l'antre où nous rayonnons;
Et dit à la vallée, où s'imprima notre âme,
D'effacer notre trace et d'oublier nos noms.`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"French",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Eh",is_delimiter:!1,gloss:"Eh"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"bien!",is_delimiter:!1,gloss:"well!"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"oubliez-nous,",is_delimiter:!1,gloss:"forget-us,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"maison,",is_delimiter:!1,gloss:"house,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"jardin,",is_delimiter:!1,gloss:"garden,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ombrages",is_delimiter:!1,gloss:"shades"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"!",is_delimiter:!1,gloss:"!"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Herbe,",is_delimiter:!1,gloss:"Grass,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"use",is_delimiter:!1,gloss:"use"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"notre",is_delimiter:!1,gloss:"our"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"seuil!",is_delimiter:!1,gloss:"threshold!"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ronce,",is_delimiter:!1,gloss:"bramble,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"cache",is_delimiter:!1,gloss:"hide"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nos",is_delimiter:!1,gloss:"our"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"pas",is_delimiter:!1,gloss:"steps"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"!",is_delimiter:!1,gloss:"!"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Chantez,",is_delimiter:!1,gloss:"Sing,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"oiseaux!",is_delimiter:!1,gloss:"birds!"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ruisseaux,",is_delimiter:!1,gloss:"streams,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"coulez",is_delimiter:!1,gloss:"flow"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"!",is_delimiter:!1,gloss:"!"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"croissez,",is_delimiter:!1,gloss:"increase,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"feuillages",is_delimiter:!1,gloss:"leaves"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"!",is_delimiter:!1,gloss:"!"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Ceux",is_delimiter:!1,gloss:"Those"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"que",is_delimiter:!1,gloss:"whom"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"vous",is_delimiter:!1,gloss:"you"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"oubliez",is_delimiter:!1,gloss:"forget"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ne",is_delimiter:!1,gloss:"not"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"vous",is_delimiter:!1,gloss:"you"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"oublieront",is_delimiter:!1,gloss:"will-forget"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"pas.",is_delimiter:!1,gloss:"not."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`French`_`English`",original_text:`Eh bien! oubliez-nous, maison, jardin, ombrages !
Herbe, use notre seuil! ronce, cache nos pas !
Chantez, oiseaux! ruisseaux, coulez ! croissez, feuillages !
Ceux que vous oubliez ne vous oublieront pas.`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"French",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Car",is_delimiter:!1,gloss:"For"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"vous",is_delimiter:!1,gloss:"you"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"êtes",is_delimiter:!1,gloss:"are"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"pour",is_delimiter:!1,gloss:"for"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nous",is_delimiter:!1,gloss:"us"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"l'ombre",is_delimiter:!1,gloss:"the-shade"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"de",is_delimiter:!1,gloss:"of"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"l'amour",is_delimiter:!1,gloss:"love"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"même!",is_delimiter:!1,gloss:"even!"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Vous",is_delimiter:!1,gloss:"You"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"êtes",is_delimiter:!1,gloss:"are"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"l'oasis",is_delimiter:!1,gloss:"the-oasis"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"qu'on",is_delimiter:!1,gloss:"which-one"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"rencontre",is_delimiter:!1,gloss:"meets"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"en",is_delimiter:!1,gloss:"in"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"chemin!",is_delimiter:!1,gloss:"way!"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Vous",is_delimiter:!1,gloss:"You"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"êtes,",is_delimiter:!1,gloss:"are,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ô",is_delimiter:!1,gloss:"O"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"vallon,",is_delimiter:!1,gloss:"hollow,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"la",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"retraite",is_delimiter:!1,gloss:"retreat"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"suprême",is_delimiter:!1,gloss:"supreme"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Où",is_delimiter:!1,gloss:"Where"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nous",is_delimiter:!1,gloss:"we"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"avons",is_delimiter:!1,gloss:"have"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"pleuré",is_delimiter:!1,gloss:"wept"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nous",is_delimiter:!1,gloss:"us"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"tenant",is_delimiter:!1,gloss:"holding"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"par",is_delimiter:!1,gloss:"by"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"la",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"main!",is_delimiter:!1,gloss:"hand!"}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`French`_`English`",original_text:`Car vous êtes pour nous l'ombre de l'amour même!
Vous êtes l'oasis qu'on rencontre en chemin!
Vous êtes, ô vallon, la retraite suprême
Où nous avons pleuré nous tenant par la main!`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"French",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Toutes",is_delimiter:!1,gloss:"All"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"les",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"passions",is_delimiter:!1,gloss:"passions"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"s'éloignent",is_delimiter:!1,gloss:"withdraw"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"avec",is_delimiter:!1,gloss:"with"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"l'âge,",is_delimiter:!1,gloss:"age,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"L'une",is_delimiter:!1,gloss:"One"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"emportant",is_delimiter:!1,gloss:"carrying-off"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"son",is_delimiter:!1,gloss:"her"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"masque",is_delimiter:!1,gloss:"mask"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"et",is_delimiter:!1,gloss:"and"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"l'autre",is_delimiter:!1,gloss:"the-other"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"son",is_delimiter:!1,gloss:"his"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"couteau,",is_delimiter:!1,gloss:"knife,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Comme",is_delimiter:!1,gloss:"Like"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"un",is_delimiter:!1,gloss:"a"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"essaim",is_delimiter:!1,gloss:"swarm"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"chantant",is_delimiter:!1,gloss:"singing"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"d'histrions",is_delimiter:!1,gloss:"of-players"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"en",is_delimiter:!1,gloss:"in"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"voyage",is_delimiter:!1,gloss:"travel"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Dont",is_delimiter:!1,gloss:"Of-which"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"le",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"groupe",is_delimiter:!1,gloss:"group"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"décroît",is_delimiter:!1,gloss:"decreases"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"derrière",is_delimiter:!1,gloss:"behind"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"le",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"coteau.",is_delimiter:!1,gloss:"hill."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`French`_`English`",original_text:`Toutes les passions s'éloignent avec l'âge,
L'une emportant son masque et l'autre son couteau,
Comme un essaim chantant d'histrions en voyage
Dont le groupe décroît derrière le coteau.`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"French",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Mais",is_delimiter:!1,gloss:"But"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"toi,",is_delimiter:!1,gloss:"thou,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"rien",is_delimiter:!1,gloss:"nothing"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ne",is_delimiter:!1,gloss:"not"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"t'efface,",is_delimiter:!1,gloss:"effaces,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"amour!",is_delimiter:!1,gloss:"love!"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"toi",is_delimiter:!1,gloss:"thou"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"qui",is_delimiter:!1,gloss:"who"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nous",is_delimiter:!1,gloss:"us"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"charmes,",is_delimiter:!1,gloss:"charmest,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Toi",is_delimiter:!1,gloss:"Thou"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"qui,",is_delimiter:!1,gloss:"who,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"torche",is_delimiter:!1,gloss:"candle"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ou",is_delimiter:!1,gloss:"or"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"flambeau,",is_delimiter:!1,gloss:"torch,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"luis",is_delimiter:!1,gloss:"shinest"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"dans",is_delimiter:!1,gloss:"in"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"notre",is_delimiter:!1,gloss:"our"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"brouillard!",is_delimiter:!1,gloss:"mist!"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Tu",is_delimiter:!1,gloss:"Thou"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nous",is_delimiter:!1,gloss:"us"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"tiens",is_delimiter:!1,gloss:"holdest"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"par",is_delimiter:!1,gloss:"by"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"la",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"joie,",is_delimiter:!1,gloss:"joy,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"et",is_delimiter:!1,gloss:"and"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"surtout",is_delimiter:!1,gloss:"above all"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"par",is_delimiter:!1,gloss:"by"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"les",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"larmes.",is_delimiter:!1,gloss:"tears."},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Jeune",is_delimiter:!1,gloss:"Young"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"homme",is_delimiter:!1,gloss:"man"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"on",is_delimiter:!1,gloss:"they"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"te",is_delimiter:!1,gloss:"thee"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"maudit,",is_delimiter:!1,gloss:"curseth,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"on",is_delimiter:!1,gloss:"they"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"t'adore",is_delimiter:!1,gloss:"adore"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"vieillard.",is_delimiter:!1,gloss:"old (man.)"}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`French`_`English`",original_text:`Mais toi, rien ne t'efface, amour! toi qui nous charmes,
Toi qui, torche ou flambeau, luis dans notre brouillard!
Tu nous tiens par la joie, et surtout par les larmes.
Jeune homme on te maudit, on t'adore vieillard.`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"French",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Dans",is_delimiter:!1,gloss:"In"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ces",is_delimiter:!1,gloss:"these"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"jours",is_delimiter:!1,gloss:"days"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"où",is_delimiter:!1,gloss:"where"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"la",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"tête",is_delimiter:!1,gloss:"head"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"au",is_delimiter:!1,gloss:"at-the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"poids",is_delimiter:!1,gloss:"weight"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"des",is_delimiter:!1,gloss:"of-the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ans",is_delimiter:!1,gloss:"years"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"s'incline,",is_delimiter:!1,gloss:"inclines,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Où",is_delimiter:!1,gloss:"Where"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"l'homme,",is_delimiter:!1,gloss:"the-man,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sans",is_delimiter:!1,gloss:"without"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"projets,",is_delimiter:!1,gloss:"projects,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sans",is_delimiter:!1,gloss:"without"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"but,",is_delimiter:!1,gloss:"end,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sans",is_delimiter:!1,gloss:"without"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"visions,",is_delimiter:!1,gloss:"visions,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Sent",is_delimiter:!1,gloss:"Feels"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"qu'il",is_delimiter:!1,gloss:"that-he"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"n'est",is_delimiter:!1,gloss:"is-not"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"déjà",is_delimiter:!1,gloss:"already"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"plus",is_delimiter:!1,gloss:"more"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"qu'une",is_delimiter:!1,gloss:"than-a"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"tombe",is_delimiter:!1,gloss:"tomb"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"en",is_delimiter:!1,gloss:"in"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ruine",is_delimiter:!1,gloss:"ruin"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Où",is_delimiter:!1,gloss:"Where"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"gisent",is_delimiter:!1,gloss:"lie"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ses",is_delimiter:!1,gloss:"his"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"vertus",is_delimiter:!1,gloss:"virtues"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"et",is_delimiter:!1,gloss:"and"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ses",is_delimiter:!1,gloss:"his"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"illusions;",is_delimiter:!1,gloss:"illusions;"}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`French`_`English`",original_text:`Dans ces jours où la tête au poids des ans s'incline,
Où l'homme, sans projets, sans but, sans visions,
Sent qu'il n'est déjà plus qu'une tombe en ruine
Où gisent ses vertus et ses illusions;`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"French",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Quand",is_delimiter:!1,gloss:"When"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"notre",is_delimiter:!1,gloss:"our"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"âme",is_delimiter:!1,gloss:"soul"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"en",is_delimiter:!1,gloss:"in"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"rêvant",is_delimiter:!1,gloss:"dreaming"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"descend",is_delimiter:!1,gloss:"descends"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"dans",is_delimiter:!1,gloss:"into"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nos",is_delimiter:!1,gloss:"our"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"entrailles,",is_delimiter:!1,gloss:"bowels,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Comptant",is_delimiter:!1,gloss:"Counting"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"dans",is_delimiter:!1,gloss:"in"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"notre",is_delimiter:!1,gloss:"our"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"coeur,",is_delimiter:!1,gloss:"heart,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"qu'enfin",is_delimiter:!1,gloss:"that finally"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"la",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"glace",is_delimiter:!1,gloss:"ice"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"atteint,",is_delimiter:!1,gloss:"reached,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Comme",is_delimiter:!1,gloss:"Like"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"on",is_delimiter:!1,gloss:"one"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"compte",is_delimiter:!1,gloss:"counts"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"les",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"morts",is_delimiter:!1,gloss:"dead"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sur",is_delimiter:!1,gloss:"upon"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"un",is_delimiter:!1,gloss:"a"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"champ",is_delimiter:!1,gloss:"field"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"de",is_delimiter:!1,gloss:"of"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"batailles,",is_delimiter:!1,gloss:"battles,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Chaque",is_delimiter:!1,gloss:"Each"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"douleur",is_delimiter:!1,gloss:"pain"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"tombée",is_delimiter:!1,gloss:"fallen"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"et",is_delimiter:!1,gloss:"and"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"chaque",is_delimiter:!1,gloss:"each"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"songe",is_delimiter:!1,gloss:"dream"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"éteint,",is_delimiter:!1,gloss:"extinguished,"}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`French`_`English`",original_text:`Quand notre âme en rêvant descend dans nos entrailles,
Comptant dans notre coeur, qu'enfin la glace atteint,
Comme on compte les morts sur un champ de batailles,
Chaque douleur tombée et chaque songe éteint,`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"French",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Comme",is_delimiter:!1,gloss:"Like"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"quelqu'un",is_delimiter:!1,gloss:"some one"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"qui",is_delimiter:!1,gloss:"who"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"cherche",is_delimiter:!1,gloss:"seeks"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"en",is_delimiter:!1,gloss:"in"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"tenant",is_delimiter:!1,gloss:"holding"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"une",is_delimiter:!1,gloss:"a"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"lampe,",is_delimiter:!1,gloss:"lamp,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Loin",is_delimiter:!1,gloss:"Far"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"des",is_delimiter:!1,gloss:"from-the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"objets",is_delimiter:!1,gloss:"objects"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"réels,",is_delimiter:!1,gloss:"real,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"loin",is_delimiter:!1,gloss:"far"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"du",is_delimiter:!1,gloss:"from-the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"monde",is_delimiter:!1,gloss:"world"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"rieur,",is_delimiter:!1,gloss:"laughing,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Elle",is_delimiter:!1,gloss:"She"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"arrive",is_delimiter:!1,gloss:"arrives"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"à",is_delimiter:!1,gloss:"to"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"pas",is_delimiter:!1,gloss:"steps"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"lents",is_delimiter:!1,gloss:"slow"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"par",is_delimiter:!1,gloss:"by"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"une",is_delimiter:!1,gloss:"an"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"obscure",is_delimiter:!1,gloss:"obscure"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"rampe",is_delimiter:!1,gloss:"slope"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Jusqu'au",is_delimiter:!1,gloss:"Until-the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"fond",is_delimiter:!1,gloss:"bottom"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"désolé",is_delimiter:!1,gloss:"desolate"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"du",is_delimiter:!1,gloss:"of-the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"gouffre",is_delimiter:!1,gloss:"gulf"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"intérieur;",is_delimiter:!1,gloss:"interior;"}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`French`_`English`",original_text:`Comme quelqu'un qui cherche en tenant une lampe,
Loin des objets réels, loin du monde rieur,
Elle arrive à pas lents par une obscure rampe
Jusqu'au fond désolé du gouffre intérieur;`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"French",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Et",is_delimiter:!1,gloss:"And"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"là,",is_delimiter:!1,gloss:"there,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"dans",is_delimiter:!1,gloss:"in"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"cette",is_delimiter:!1,gloss:"this"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nuit",is_delimiter:!1,gloss:"night"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"qu'aucun",is_delimiter:!1,gloss:"that no"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"rayon",is_delimiter:!1,gloss:"ray"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"n'étoile,",is_delimiter:!1,gloss:"star"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"L'âme,",is_delimiter:!1,gloss:"The-soul,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"en",is_delimiter:!1,gloss:"in"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"un",is_delimiter:!1,gloss:"a"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"repli",is_delimiter:!1,gloss:"dark-fold"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sombre",is_delimiter:!1,gloss:"sombre"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"où",is_delimiter:!1,gloss:"where"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"tout",is_delimiter:!1,gloss:"all"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"semble",is_delimiter:!1,gloss:"seems"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"finir,",is_delimiter:!1,gloss:"to-finish,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Sent",is_delimiter:!1,gloss:"Feels"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"quelque",is_delimiter:!1,gloss:"something"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"chose",is_delimiter:!1,gloss:"thing"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"encor",is_delimiter:!1,gloss:"yet"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"palpiter",is_delimiter:!1,gloss:"to-throb"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sous",is_delimiter:!1,gloss:"under"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"un",is_delimiter:!1,gloss:"a"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"voile...",is_delimiter:!1,gloss:"veil..."},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"C'est",is_delimiter:!1,gloss:"It-is"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"toi",is_delimiter:!1,gloss:"thou"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"qui",is_delimiter:!1,gloss:"who"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"dors",is_delimiter:!1,gloss:"sleepest"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"dans",is_delimiter:!1,gloss:"in"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"l'ombre,",is_delimiter:!1,gloss:"the-shade,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ô",is_delimiter:!1,gloss:"O"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sacré",is_delimiter:!1,gloss:"sacred"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"souvenir!",is_delimiter:!1,gloss:"memory!"},{txt:" ",is_delimiter:!0,gloss:null},{txt:'"',is_delimiter:!1,gloss:"!UNKNOWN"}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`French`_`English`",original_text:`Et là, dans cette nuit qu'aucun rayon n'étoile,
L'âme, en un repli sombre où tout semble finir,
Sent quelque chose encor palpiter sous un voile...
C'est toi qui dors dans l'ombre, ô sacré souvenir! "`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"French",lang_to:"English"}}],paragraph_delimiters:[`

`],original_text:`Les champs n'étaient point noirs, les cieux n'étaient pas mornes.
Non, le jour rayonnait dans un azur sans bornes
Sur la terre étendu,
L'air était plein d'encens et les prés de verdures
Quand il revit ces lieux où par tant de blessures
Son coeur s'est répandu!

L'automne souriait; les coteaux vers la plaine
Penchaient leurs bois charmants qui jaunissaient à peine;
Le ciel était doré;
Et les oiseaux, tournés vers celui que tout nomme,
Disant peut-être à Dieu quelque chose de l'homme,
Chantaient leur chant sacré!

Il voulut tout revoir, l'étang près de la source,
La masure où l'aumône avait vidé leur bourse,
Le vieux frêne plié,
Les retraites d'amour au fond des bois perdues,
L'arbre où dans les baisers leurs âmes confondues
Avaient tout oublié!

Il chercha le jardin, la maison isolée,
La grille d'où l'oeil plonge en une oblique allée,
Les vergers en talus.
Pâle, il marchait. - Au bruit de son pas grave et sombre,
Il voyait à chaque arbre, hélas! se dresser l'ombre
Des jours qui ne sont plus!

Il entendait frémir dans la forêt qu'il aime
Ce doux vent qui, faisant tout vibrer en nous-même,
Y réveille l'amour,
Et, remuant le chêne ou balançant la rose,
Semble l'âme de tout qui va sur chaque chose
Se poser tour à tour!

Les feuilles qui gisaient dans le bois solitaire,
S'efforçant sous ses pas de s'élever de terre,
Couraient dans le jardin;
Ainsi, parfois, quand l'âme est triste, nos pensées
S'envolent un moment sur leurs ailes blessées,
Puis retombent soudain.

Il contempla longtemps les formes magnifiques
Que la nature prend dans les champs pacifiques;
Il rêva jusqu'au soir;
Tout le jour il erra le long de la ravine,
Admirant tour à tour le ciel, face divine,
Le lac, divin miroir!

Hélas! se rappelant ses douces aventures,
Regardant, sans entrer, par-dessus les clôtures,
Ainsi qu'un paria,
Il erra tout le jour, vers l'heure où la nuit tombe,
Il se sentit le coeur triste comme une tombe,
Alors il s'écria:

" O douleur! j'ai voulu, moi dont l'âme est troublée,
Savoir si l'urne encor conservait la liqueur,
Et voir ce qu'avait fait cette heureuse vallée
De tout ce que j'avais laissé là de mon coeur!

Que peu de temps suffit pour changer toutes choses!
Nature au front serein, comme vous oubliez!
Et comme vous brisez dans vos métamorphoses
Les fils mystérieux où nos coeurs sont liés!

Nos chambres de feuillage en halliers sont changées!
L'arbre où fut notre chiffre est mort ou renversé;
Nos roses dans l'enclos ont été ravagées
Par les petits enfants qui sautent le fossé.

Un mur clôt la fontaine où, par l'heure échauffée,
Folâtre, elle buvait en descendant des bois;
Elle prenait de l'eau dans sa main, douce fée,
Et laissait retomber des perles de ses doigts!

On a pavé la route âpre et mal aplanie,
Où, dans le sable pur se dessinant si bien,
Et de sa petitesse étalant l'ironie,
Son pied charmant semblait rire à côté du mien!

La borne du chemin, qui vit des jours sans nombre,
Où jadis pour m'attendre elle aimait à s'asseoir,
S'est usée en heurtant, lorsque la route est sombre,
Les grands chars gémissants qui reviennent le soir.

La forêt ici manque et là s'est agrandie.
De tout ce qui fut nous presque rien n'est vivant;
Et, comme un tas de cendre éteinte et refroidie,
L'amas des souvenirs se disperse à tout vent!

N'existons-nous donc plus? Avons-nous eu notre heure ?
Rien ne la rendra-t-il à nos cris superflus?
L'air joue avec la branche au moment où je pleure;
Ma maison me regarde et ne me connaît plus.

D'autres vont maintenant passer où nous passâmes.
Nous y sommes venus, d'autres vont y venir;
Et le songe qu'avaient ébauché nos deux âmes,
Ils le continueront sans pouvoir le finir!

Car personne ici-bas ne termine et n'achève;
Les pires des humains sont comme les meilleurs;
Nous nous réveillons tous au même endroit du rêve.
Tout commence en ce monde et tout finit ailleurs.

Oui, d'autres à leur tour viendront, couples sans tache,
Puiser dans cet asile heureux, calme, enchanté,
Tout ce que la nature à l'amour qui se cache
Mêle de rêverie et de solennité!

D'autres auront nos champs, nos sentiers, nos retraites;
Ton bois, ma bien-aimée, est à des inconnus.
D'autres femmes viendront, baigneuses indiscrètes,
Troubler le flot sacré qu'ont touché tes pieds nus!

Quoi donc! c'est vainement qu'ici nous nous aimâmes !
Rien ne nous restera de ces coteaux fleuris
Où nous fondions notre être en y mêlant nos flammes!
L'impassible nature a déjà tout repris.

Oh! dites-moi, ravins, frais ruisseaux, treilles mûres,
Rameaux chargés de nids, grottes, forêts, buissons.
Est-ce que vous ferez pour d'autres vos murmures?
Est-ce que vous direz à d'autres vos chansons?

Nous vous comprenions tant! doux, attentifs, austères,
Tous nos échos s'ouvraient si bien à votre voix!
Et nous prêtions si bien, sans troubler vos mystères,
L'oreille aux mots profonds que vous dites parfois!

Répondez, vallon pur, répondez, solitude,
O nature abritée en ce désert si beau,
Lorsque nous dormirons tous deux dans l'attitude
Que donne aux morts pensifs la forme du tombeau,

Est-ce que vous serez à ce point insensible
De nous savoir couchés, morts avec nos amours,
Et de continuer votre fête paisible,
Et de toujours sourire et de chanter toujours?

Est-ce que, nous sentant errer dans vos retraites,
Fantômes reconnus par vos monts et vos bois,
Vous ne nous direz pas de ces choses secrètes
Qu'on dit en revoyant des amis d'autrefois?

Est-ce que vous pourrez, sans tristesse et sans plainte,
Voir nos ombres flotter où marchèrent nos pas,
Et la voir m'entraîner, dans une morne étreinte,
Vers quelque source en pleurs qui sanglote tout bas?

Et s'il est quelque part, dans l'ombre où rien ne veille,
Deux amants sous vos fleurs abritant leurs transports,
Ne leur irez-vous pas murmurer à l'oreille:
- Vous qui vivez, donnez une pensée aux morts!

Dieu nous prête un moment les prés et les fontaines,
Les grands bois frissonnants, les rocs profonds et sourds
Et les cieux azurés et les lacs et les plaines,
Pour y mettre nos coeurs, nos rêves, nos amours;

Puis il nous les retire. Il souffle notre flamme;
Il plonge dans la nuit l'antre où nous rayonnons;
Et dit à la vallée, où s'imprima notre âme,
D'effacer notre trace et d'oublier nos noms.

Eh bien! oubliez-nous, maison, jardin, ombrages !
Herbe, use notre seuil! ronce, cache nos pas !
Chantez, oiseaux! ruisseaux, coulez ! croissez, feuillages !
Ceux que vous oubliez ne vous oublieront pas.

Car vous êtes pour nous l'ombre de l'amour même!
Vous êtes l'oasis qu'on rencontre en chemin!
Vous êtes, ô vallon, la retraite suprême
Où nous avons pleuré nous tenant par la main!

Toutes les passions s'éloignent avec l'âge,
L'une emportant son masque et l'autre son couteau,
Comme un essaim chantant d'histrions en voyage
Dont le groupe décroît derrière le coteau.

Mais toi, rien ne t'efface, amour! toi qui nous charmes,
Toi qui, torche ou flambeau, luis dans notre brouillard!
Tu nous tiens par la joie, et surtout par les larmes.
Jeune homme on te maudit, on t'adore vieillard.

Dans ces jours où la tête au poids des ans s'incline,
Où l'homme, sans projets, sans but, sans visions,
Sent qu'il n'est déjà plus qu'une tombe en ruine
Où gisent ses vertus et ses illusions;

Quand notre âme en rêvant descend dans nos entrailles,
Comptant dans notre coeur, qu'enfin la glace atteint,
Comme on compte les morts sur un champ de batailles,
Chaque douleur tombée et chaque songe éteint,

Comme quelqu'un qui cherche en tenant une lampe,
Loin des objets réels, loin du monde rieur,
Elle arrive à pas lents par une obscure rampe
Jusqu'au fond désolé du gouffre intérieur;

Et là, dans cette nuit qu'aucun rayon n'étoile,
L'âme, en un repli sombre où tout semble finir,
Sent quelque chose encor palpiter sous un voile...
C'est toi qui dors dans l'ombre, ô sacré souvenir! "`,p_div_locs:"[260, 262, 516, 518, 753, 755, 1005, 1007, 1233, 1235, 1480, 1482, 1706, 1708, 1934, 1936, 2129, 2131, 2315, 2317, 2506, 2508, 2697, 2699, 2867, 2869, 3074, 3076, 3263, 3265, 3459, 3461, 3643, 3645, 3838, 3840, 4022, 4024, 4228, 4230, 4420, 4422, 4626, 4628, 4837, 4839, 5017, 5019, 5193, 5195, 5380, 5382, 5587, 5589, 5792, 5794, 6001, 6003, 6191, 6193, 6396, 6398, 6578, 6580, 6764, 6766, 6981, 6983, 7174, 7176, 7383, 7385, 7566, 7568, 7767]"}]}];let li=class{constructor(e,s,l){this.txt=e,this.gloss=s,this.is_delimiter=l}},oa=class{constructor(e,s,l,i,r,n){this.pstate=e,this.tokens=s,this.is_delimiter=l,this.token_delimiters=i,this.original_text=r,this.annotator_info_obj=n}},aa=class dr{constructor(e,s,l,i){this.paragraphs=e,this.paragraph_delimiters=s,this.original_text=l,this.p_div_locs=i}static init_with_txt(e){return new dr([],null,e,[])}};const ii=` 	
\r\v\f`;function ua(t,e){const s=e.split("").map(i=>i.replace(/[-\/\\^$.*+?()[\]{}|]/g,"\\$&")).join("|");return t.split(new RegExp(`(${s})`)).filter(i=>i!=="").map(i=>({token:i,is_delimiter:e.includes(i)}))}class ri{static divide_into_paragraphs(e,s=[`
`]){const l=e.original_text;let i=s.map(n=>n.replace("\\n",`
`)),r=[l];i.sort((n,o)=>o.length-n.length),i.forEach(n=>{for(let o=0;o<r.length;o++){let u=r[o].split(n);u=u.flatMap(g=>[g,n]).slice(0,-1),r[o]=u}r=[].concat(...r)}),e.p_div_locs=r.reduce((n,o)=>(n.push((n.length?n[n.length-1]:0)+o.length),n),[]),e.paragraphs=r.map(n=>new oa("DIVIDED",[],s.includes(n),"",n,null)),e.paragraph_delimiters=s}static parse_paragraph(e,s=ii){if(s||(s=ii),e.is_delimiter)e.tokens=[new li(e.original_text,null,!0)];else{const l=ua(e.original_text,s);e.tokens=l.map(({token:i,is_delimiter:r})=>new li(i,null,r))}e.pstate="PARSED",e.token_delimiters=s}}const da={props:{t:{type:Object,required:!0},index:{type:Number,required:!0}},data(){return{isSelected:!1}},computed:{is_delimiter(){return this.t.is_delimiter},should_linebreak(){return this.t.txt.includes(`
`)},txt(){return this.t.txt},gloss(){let t=this.t.gloss;return t=="!UNKNOWN"&&(t="-"),t}},methods:{toggle(){this.isSelected=!this.isSelected,this.$emit("selectionChanged",{tIndex:this.index,isSelected:this.isSelected})}}},ma={class:"token_ul list-group list-group-flush"},_a={class:"list-group-item token_txt"},ga={class:"list-group-item gloss"},fa={key:1},xa={key:2,class:"token_wrapper"};function ha(t,e,s,l,i,r){return r.is_delimiter?r.should_linebreak?(C(),R("br",fa)):(C(),R("div",xa,[v("span",null,pt(r.txt),1)])):(C(),R("div",{key:0,class:jt(["token_wrapper","card",{"selected-token":i.isSelected}]),onClick:e[0]||(e[0]=n=>r.toggle())},[v("ul",ma,[v("li",_a,pt(r.txt),1),v("li",ga,pt(r.gloss),1)])],2))}const ca=bt(da,[["render",ha],["__scopeId","data-v-77eee0fc"]]),pa={props:{p:{type:Object,required:!0},index:{type:Number,required:!0},remote:{type:Boolean,default:!1}},components:{Token:ca},computed:{isAnnotateButtonVisible(){return this.remote&&!this.p.is_delimiter&&this.p.tokens&&this.p.tokens.length}},data(){return{selectedTokens:new Set,showPre:!1}},methods:{annotateP(){this.$emit("annotateP",this.index)},reannotateP(){this.$emit("reannotateP",this.index,Array.from(this.selectedTokens))},onSelectionChanged({tIndex:t,isSelected:e}){e?this.selectedTokens.add(t):this.selectedTokens.delete(t)}}},ba={class:"paragraph_wrapper"},Aa={key:0,class:"paragraph_annotate_buttons_span"},ka={key:1};function wa(t,e,s,l,i,r){const n=At("Token");return C(),R("div",ba,[r.isAnnotateButtonVisible?(C(),R("span",Aa,[v("button",{class:"corpus_button btn btn-light",onClick:e[0]||(e[0]=o=>r.annotateP(s.index))}," Annotate "),v("button",{class:"corpus_button btn btn-light",onClick:e[1]||(e[1]=o=>r.reannotateP(s.index))}," Reannotate "),e[2]||(e[2]=v("br",null,null,-1))])):Ht("",!0),i.showPre?(C(),R("pre",ka,pt(JSON.stringify(s.p)),1)):Ht("",!0),(C(!0),R(J,null,re(s.p.tokens,(o,u)=>(C(),ae(n,{key:u,t:o,index:u,onSelectionChanged:r.onSelectionChanged},null,8,["t","index","onSelectionChanged"]))),128))])}const Ea=bt(pa,[["render",wa],["__scopeId","data-v-c2ae8ec4"]]),va={props:{corpus_id:{required:!0},corpus:{type:Object,required:!0},remote:{type:Boolean,default:!1}},components:{Paragraph:Ea},data(){return{api:new st,sharedState:Ct,isCorpusVisible:!1,showPre:!1}},computed:{pseudoState(){return!this.corpus.paragraphs||this.corpus.paragraphs.length<=0?"PLAIN":this.corpus.paragraphs[0].pstate},divideButtonClass(){const t=this.pseudoState=="PLAIN";return{"btn-primary":t,"btn-light":!t}},parseButtonClass(){const t=this.pseudoState=="DIVIDED";return{"btn-primary":t,"btn-light":!t}},annotateButtonClass(){const t=this.pseudoState=="PARSED";return{"btn-primary":t,"btn-light":!t}},header(){return this.remote?"REMOTE":"LOCAL"}},methods:{toggleCorpusVisibility(){this.isCorpusVisible=!this.isCorpusVisible},download(){const t=JSON.stringify(this.corpus);console.log("Downloading...");let e=document.createElement("a"),s=new Blob([t],{type:"text/plain"});e.download=this.corpus_id+".corpus.json",e.href=URL.createObjectURL(s),e.click()},async divide(t=`
`){return Ct.toRemote?this.divideRemote(t):this.divideLocal(t)},async parse(){return Ct.toRemote?this.parseRemote():this.parseLocal()},async annotate(t=null){this.api.submit("/annotator/annotate","POST",{corpus_id:this.corpus_id,annotate_options:{annotator_name:this.sharedState.annotator_name,lang_from:this.sharedState.lang_from,lang_to:this.sharedState.lang_to,target_paragraphs:t}})},async reannotate(t,e){if(!e){console.error("target_tokens is not given");return}if(e.length==0){Y.emit("addAlert",{message:"No token selected.",alertClass:"alert-warning"});return}this.api.submit("/annotator/reannotate","POST",{corpus_id:this.corpus_id,annotate_options:{annotator_name:this.sharedState.annotator_name,lang_from:this.sharedState.lang_from,lang_to:this.sharedState.lang_to,target_paragraphs:t},reannotate_options:{target_tokens:e}})},async divideRemote(t){this.api.submit("/parser/divide","POST",{corpus_id:this.corpus_id,divide_options:{p_delims:[t]}})},async parseRemote(){this.api.submit("/parser/parse","POST",{corpus_id:this.corpus_id,parse_options:{t_delims:null}})},async divideLocal(t){ri.divide_into_paragraphs(this.corpus,[t])},async parseLocal(){for(const t of this.corpus.paragraphs)ri.parse_paragraph(t)},onAnnotateP(t){this.annotate([t])},onReannotateP(t,e){this.reannotate([t],e)}}},Ta={class:"corpus_wrapper"},Da={key:0,class:"corpus"},Sa={class:"corpus_buttons_span"},ya={key:0},Na={key:1},Ga={key:0,class:"corpus-pre"};function ja(t,e,s,l,i,r){const n=At("Paragraph");return C(),R("div",Ta,[e[9]||(e[9]=v("hr",null,null,-1)),v("h4",{onClick:e[0]||(e[0]=o=>r.toggleCorpusVisibility())},pt(r.header+": "+s.corpus_id),1),i.isCorpusVisible?(C(),R("div",Da,[v("span",Sa,[v("button",{class:"corpus_button btn btn-light",onClick:e[1]||(e[1]=o=>r.download())},"Download"),s.remote&&i.sharedState.toRemote||!s.remote&&!i.sharedState.toRemote?(C(),R("span",ya,[v("button",{class:jt(["corpus_button","btn",r.divideButtonClass]),onClick:e[2]||(e[2]=o=>r.divide())},"Divide",2),v("button",{class:jt(["corpus_button","btn",r.divideButtonClass]),onClick:e[3]||(e[3]=o=>r.divide("\\n\\n"))},"Divide (for poems)",2),v("button",{class:jt(["corpus_button","btn",r.parseButtonClass]),onClick:e[4]||(e[4]=o=>r.parse())},"Parse",2)])):Ht("",!0),s.remote&&i.sharedState.toRemote?(C(),R("span",Na,[v("button",{class:jt(["corpus_button","btn",r.annotateButtonClass]),onClick:e[5]||(e[5]=o=>r.annotate([-1]))}," Annotate ",2),v("button",{class:jt(["corpus_button","btn",r.annotateButtonClass]),onClick:e[6]||(e[6]=o=>r.annotate(null))}," Annotate (Reset) ",2)])):Ht("",!0)]),e[7]||(e[7]=v("br",null,null,-1)),i.showPre?(C(),R("pre",Ga,pt(JSON.stringify(s.corpus)),1)):Ht("",!0),e[8]||(e[8]=v("h4",null,"paragraphs",-1)),(C(!0),R(J,null,re(s.corpus.paragraphs,(o,u)=>(C(),ae(n,{key:u,p:o,index:u,remote:s.remote,onAnnotateP:r.onAnnotateP,onReannotateP:r.onReannotateP},null,8,["p","index","remote","onAnnotateP","onReannotateP"]))),128))])):Ht("",!0)])}const Ca=bt(va,[["render",ja],["__scopeId","data-v-7028e5f5"]]),Oa={components:{Corpus:Ca},data(){return{api:new st,sampleHost:"https://parkchamchi.github.io/GlossySnake/samples/v1/",localCorpuses:[...na],remoteCorpuses:[],remoteSampleFilenames:[]}},methods:{async updateCorpuses(){const e=await(await this.api.submit("/corpuses/")).json();this.remoteCorpuses=e},async getRemoteSamples(){await fetch(this.sampleHost).then(t=>t.json()).then(t=>{this.remoteSampleFilenames=t.filenames})},async getRemoteSampleCorpus(t){fetch(this.sampleHost+t).then(e=>e.json()).then(e=>{const s=t.replace(".corpus.json","");this.addLocalCorpus({corpus_id:s,corpus:e})}).then(()=>{this.remoteSampleFilenames=this.remoteSampleFilenames.filter(e=>e!==t)})},async addLocalCorpus({corpus_id:t,corpus:e}){this.localCorpuses.push({corpus_id:t,corpuses_history:[e]})}},created(){Y.on("updateCorpuses",this.updateCorpuses),Y.on("addLocalCorpus",this.addLocalCorpus),this.getRemoteSamples()},beforeDestroy(){Y.off("updateCorpuses",this.updateCorpuses),Y.off("addLocalCorpus",this.addLocalCorpus)}},Wa={key:0},Ra=["onClick"];function Ia(t,e,s,l,i,r){const n=At("Corpus");return C(),R(J,null,[i.remoteSampleFilenames.length>0?(C(),R("div",Wa,[e[0]||(e[0]=v("h4",null,"Get a sample:",-1)),(C(!0),R(J,null,re(i.remoteSampleFilenames,(o,u)=>(C(),R("p",{class:"sampleLinkP",onClick:g=>r.getRemoteSampleCorpus(o)},pt(o),9,Ra))),256))])):Ht("",!0),v("div",null,[(C(!0),R(J,null,re(i.localCorpuses,(o,u)=>(C(),ae(n,{key:u,corpus:o.corpuses_history.at(-1),corpus_id:o.corpus_id,remote:!1},null,8,["corpus","corpus_id"]))),128)),(C(!0),R(J,null,re(i.remoteCorpuses,(o,u)=>(C(),ae(n,{key:u,corpus:o.corpuses_history.at(-1),corpus_id:o.corpus_id,remote:!0},null,8,["corpus","corpus_id"]))),128))])],64)}const Pa=bt(Oa,[["render",Ia],["__scopeId","data-v-11e061a2"]]),za={data(){return{api:new st,originalText:""}},methods:{async onUploadButtonClicked(){return Ct.toRemote?this.uploadOriginalTextRemote():this.uploadOriginalTextLocal()},async onJsonFileInput(t){const s=await t.target.files[0].text(),l=JSON.parse(s);return Ct.toRemote?this.uploadJsonFileRemote(l):this.uploadJsonFileLocal(l)},async uploadOriginalTextRemote(){this.api.submit("/upload","POST",{original_text:this.originalText}).then(t=>t.json()).then(t=>{Y.emit("addAlert",{message:"Uploaded corpus "+t.corpus_id})})},async uploadJsonFileRemote(t){this.api.submit("/upload","POST",{corpus:t}).then(e=>e.json()).then(e=>{Y.emit("addAlert",{message:"Uploaded corpus "+e.corpus_id})})},async uploadOriginalTextLocal(){const t="the corpus id (TODO)",e=aa.init_with_txt(this.originalText);Y.emit("addLocalCorpus",{corpus_id:t,corpus:e})},async uploadJsonFileLocal(t){Y.emit("addLocalCorpus",{corpus_id:"the corpus id (JSON) (TODO)",corpus:t})}}},Ha={id:"frontend_upload_div"};function Fa(t,e,s,l,i,r){return C(),R("div",Ha,[e[3]||(e[3]=v("h3",null,"Upload...",-1)),e[4]||(e[4]=v("label",{for:"frontend_original_text"},"Original Text",-1)),e[5]||(e[5]=v("br",null,null,-1)),Se(v("textarea",{"onUpdate:modelValue":e[0]||(e[0]=n=>i.originalText=n),class:"context_input auto-resize field_input",name:"frontend_original_text",spellcheck:"false",autofocus:"",placeholder:"Original Text",id:"frontend_original_text_textarea"},null,512),[[Po,i.originalText]]),e[6]||(e[6]=v("br",null,null,-1)),v("button",{onClick:e[1]||(e[1]=n=>r.onUploadButtonClicked()),id:"frontend_original_text_button",class:"btn btn-primary"}," Upload "),e[7]||(e[7]=v("br",null,null,-1)),e[8]||(e[8]=v("p",null,"...or the JSON file",-1)),v("input",{type:"file",id:"json_file_input",onChange:e[2]||(e[2]=(...n)=>r.onJsonFileInput&&r.onJsonFileInput(...n))},null,32),e[9]||(e[9]=v("br",null,null,-1))])}const La=bt(za,[["render",Fa],["__scopeId","data-v-fb0a1a09"]]),Ma={props:{message:{type:String,required:!0},alertClass:{type:String,default:"alert-warning",validator(t){return["alert-success","alert-warning","alert-info","alert-light"].includes(t)}},timeout:{type:Number,default:5e4}},data(){return{showAlert:!1,alertMessage:this.message}},mounted(){this.showAlert=!0,setTimeout(()=>{this.showAlert=!1},this.timeout)}};function qa(t,e,s,l,i,r){return i.showAlert?(C(),R("div",{key:0,class:jt(["alert",this.alertClass]),role:"alert"},pt(i.alertMessage),3)):Ht("",!0)}const Ua=bt(Ma,[["render",qa]]),Ba={components:{Alert:Ua},data(){return{alerts:[],maxAlerts:3}},methods:{addAlert({message:t,alertClass:e="alert-light"}){this.alerts.length>=this.maxAlerts&&this.alerts.shift(),this.alerts.push({message:t,alertClass:e})}},created(){Y.on("addAlert",this.addAlert)},beforeDestroy(){Y.off("addAlert",this.addAlert)}};function Va(t,e,s,l,i,r){const n=At("Alert");return C(),R("div",null,[(C(!0),R(J,null,re(i.alerts,(o,u)=>(C(),ae(n,{key:u,message:o.message,timeout:o.timeout,alertClass:o.alertClass},null,8,["message","timeout","alertClass"]))),128))])}const Ka=bt(Ba,[["render",Va]]),$a={props:{task_id:{required:!0},status:{type:String,required:!0},target_corpus_id:{required:!0}},data(){return{api:new st}},computed:{isAbortButtonShown(){return["READY","RUNNING"].includes(this.status)}},methods:{async abort(){this.api.submit("/tasks/"+this.task_id+"/abort")}}},Ja={class:"task_wrapper"};function Qa(t,e,s,l,i,r){return C(),R("div",Ja,[e[1]||(e[1]=v("hr",null,null,-1)),v("p",null,[ms(" Task: "+pt(s.task_id)+" ",1),r.isAbortButtonShown?(C(),R("button",{key:0,class:"task_button btn btn-light",onClick:e[0]||(e[0]=n=>r.abort())}," Abort ")):Ht("",!0),ms(" for corpus: "+pt(s.target_corpus_id)+" ("+pt(s.status)+") ",1)])])}const Za=bt($a,[["render",Qa]]),Ya={components:{Task:Za},data(){return{api:new st,tasks:[]}},methods:{async updateTasks(){const e=await(await this.api.submit("/tasks/")).json();this.tasks=e}},created(){Y.on("updateTasks",this.updateTasks)},beforeDestroy(){Y.off("updateTasks",this.updateTasks)}};function Xa(t,e,s,l,i,r){const n=At("Task");return C(),R(J,null,[e[0]||(e[0]=v("h3",null,"Tasks",-1)),v("div",null,[(C(!0),R(J,null,re(i.tasks,(o,u)=>(C(),ae(n,{key:u,task_id:o.task_id,status:o.status,target_corpus_id:o.target_corpus_id},null,8,["task_id","status","target_corpus_id"]))),128))])],64)}const tu=bt(Ya,[["render",Xa]]),eu={components:{Header:Vo,RestAuth:Zo,AnnotatorSelect:ra,CorpusesView:Pa,UploadView:La,AlertsView:Ka,TasksView:tu},data(){return{}}};function su(t,e,s,l,i,r){const n=At("Header"),o=At("RestAuth"),u=At("AnnotatorSelect"),g=At("CorpusesView"),m=At("UploadView"),f=At("AlertsView"),k=At("TasksView");return C(),R(J,null,[v("header",null,[X(n)]),v("main",null,[X(o),e[0]||(e[0]=v("hr",null,null,-1)),X(u),e[1]||(e[1]=v("hr",null,null,-1)),X(g),e[2]||(e[2]=v("hr",null,null,-1)),X(m),e[3]||(e[3]=v("hr",null,null,-1)),X(f),e[4]||(e[4]=v("hr",null,null,-1)),X(k)])],64)}const lu=bt(eu,[["render",su],["__scopeId","data-v-a82af39b"]]);Lo(lu).mount("#app");
