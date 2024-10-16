(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))l(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function s(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function l(i){if(i.ep)return;i.ep=!0;const n=s(i);fetch(i.href,n)}})();/**
* @vue/shared v3.5.5
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Xs(t){const e=Object.create(null);for(const s of t.split(","))e[s]=1;return s=>s in e}const U={},he=[],It=()=>{},yn=()=>!1,cs=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),tl=t=>t.startsWith("onUpdate:"),rt=Object.assign,el=(t,e)=>{const s=t.indexOf(e);s>-1&&t.splice(s,1)},Tn=Object.prototype.hasOwnProperty,L=(t,e)=>Tn.call(t,e),D=Array.isArray,ce=t=>Ue(t)==="[object Map]",ve=t=>Ue(t)==="[object Set]",Tl=t=>Ue(t)==="[object Date]",C=t=>typeof t=="function",Y=t=>typeof t=="string",Pt=t=>typeof t=="symbol",B=t=>t!==null&&typeof t=="object",fi=t=>(B(t)||C(t))&&C(t.then)&&C(t.catch),xi=Object.prototype.toString,Ue=t=>xi.call(t),Dn=t=>Ue(t).slice(8,-1),hi=t=>Ue(t)==="[object Object]",sl=t=>Y(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Oe=Xs(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ps=t=>{const e=Object.create(null);return s=>e[s]||(e[s]=t(s))},Sn=/-(\w)/g,St=ps(t=>t.replace(Sn,(e,s)=>s?s.toUpperCase():"")),Nn=/\B([A-Z])/g,_e=ps(t=>t.replace(Nn,"-$1").toLowerCase()),bs=ps(t=>t.charAt(0).toUpperCase()+t.slice(1)),Gs=ps(t=>t?`on${bs(t)}`:""),ue=(t,e)=>!Object.is(t,e),ns=(t,...e)=>{for(let s=0;s<t.length;s++)t[s](...e)},ci=(t,e,s,l=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:l,value:s})},ms=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Dl;const pi=()=>Dl||(Dl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ll(t){if(D(t)){const e={};for(let s=0;s<t.length;s++){const l=t[s],i=Y(l)?Cn(l):ll(l);if(i)for(const n in i)e[n]=i[n]}return e}else if(Y(t)||B(t))return t}const Gn=/;(?![^(]*\))/g,jn=/:([^]+)/,On=/\/\*[^]*?\*\//g;function Cn(t){const e={};return t.replace(On,"").split(Gn).forEach(s=>{if(s){const l=s.split(jn);l.length>1&&(e[l[0].trim()]=l[1].trim())}}),e}function Wt(t){let e="";if(Y(t))e=t;else if(D(t))for(let s=0;s<t.length;s++){const l=Wt(t[s]);l&&(e+=l+" ")}else if(B(t))for(const s in t)t[s]&&(e+=s+" ");return e.trim()}const Rn="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Wn=Xs(Rn);function bi(t){return!!t||t===""}function In(t,e){if(t.length!==e.length)return!1;let s=!0;for(let l=0;s&&l<t.length;l++)s=qe(t[l],e[l]);return s}function qe(t,e){if(t===e)return!0;let s=Tl(t),l=Tl(e);if(s||l)return s&&l?t.getTime()===e.getTime():!1;if(s=Pt(t),l=Pt(e),s||l)return t===e;if(s=D(t),l=D(e),s||l)return s&&l?In(t,e):!1;if(s=B(t),l=B(e),s||l){if(!s||!l)return!1;const i=Object.keys(t).length,n=Object.keys(e).length;if(i!==n)return!1;for(const r in t){const o=t.hasOwnProperty(r),a=e.hasOwnProperty(r);if(o&&!a||!o&&a||!qe(t[r],e[r]))return!1}}return String(t)===String(e)}function il(t,e){return t.findIndex(s=>qe(s,e))}const ki=t=>!!(t&&t.__v_isRef===!0),At=t=>Y(t)?t:t==null?"":D(t)||B(t)&&(t.toString===xi||!C(t.toString))?ki(t)?At(t.value):JSON.stringify(t,wi,2):String(t),wi=(t,e)=>ki(e)?wi(t,e.value):ce(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((s,[l,i],n)=>(s[js(l,n)+" =>"]=i,s),{})}:ve(e)?{[`Set(${e.size})`]:[...e.values()].map(s=>js(s))}:Pt(e)?js(e):B(e)&&!D(e)&&!hi(e)?String(e):e,js=(t,e="")=>{var s;return Pt(t)?`Symbol(${(s=t.description)!=null?s:e})`:t};/**
* @vue/reactivity v3.5.5
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let pt;class Pn{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=pt,!e&&pt&&(this.index=(pt.scopes||(pt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,s;if(this.scopes)for(e=0,s=this.scopes.length;e<s;e++)this.scopes[e].pause();for(e=0,s=this.effects.length;e<s;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,s;if(this.scopes)for(e=0,s=this.scopes.length;e<s;e++)this.scopes[e].resume();for(e=0,s=this.effects.length;e<s;e++)this.effects[e].resume()}}run(e){if(this._active){const s=pt;try{return pt=this,e()}finally{pt=s}}}on(){pt=this}off(){pt=this.parent}stop(e){if(this._active){let s,l;for(s=0,l=this.effects.length;s<l;s++)this.effects[s].stop();for(s=0,l=this.cleanups.length;s<l;s++)this.cleanups[s]();if(this.scopes)for(s=0,l=this.scopes.length;s<l;s++)this.scopes[s].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function zn(){return pt}let M;const Os=new WeakSet;class Ai{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.nextEffect=void 0,this.cleanup=void 0,this.scheduler=void 0,pt&&pt.active&&pt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Os.has(this)&&(Os.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||(this.flags|=8,this.nextEffect=Ce,Ce=this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Sl(this),vi(this);const e=M,s=Tt;M=this,Tt=!0;try{return this.fn()}finally{yi(this),M=e,Tt=s,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)ol(e);this.deps=this.depsTail=void 0,Sl(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Os.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Hs(this)&&this.run()}get dirty(){return Hs(this)}}let Ei=0,Ce;function nl(){Ei++}function rl(){if(--Ei>0)return;let t;for(;Ce;){let e=Ce;for(Ce=void 0;e;){const s=e.nextEffect;if(e.nextEffect=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(l){t||(t=l)}e=s}}if(t)throw t}function vi(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function yi(t){let e,s=t.depsTail,l=s;for(;l;){const i=l.prevDep;l.version===-1?(l===s&&(s=i),ol(l),Ln(l)):e=l,l.dep.activeLink=l.prevActiveLink,l.prevActiveLink=void 0,l=i}t.deps=e,t.depsTail=s}function Hs(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&Ti(e.dep.computed)||e.dep.version!==e.version)return!0;return!!t._dirty}function Ti(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Pe))return;t.globalVersion=Pe;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&!Hs(t)){t.flags&=-3;return}const s=M,l=Tt;M=t,Tt=!0;try{vi(t);const i=t.fn(t._value);(e.version===0||ue(i,t._value))&&(t._value=i,e.version++)}catch(i){throw e.version++,i}finally{M=s,Tt=l,yi(t),t.flags&=-3}}function ol(t){const{dep:e,prevSub:s,nextSub:l}=t;if(s&&(s.nextSub=l,t.prevSub=void 0),l&&(l.prevSub=s,t.nextSub=void 0),e.subs===t&&(e.subs=s),!e.subs&&e.computed){e.computed.flags&=-5;for(let i=e.computed.deps;i;i=i.nextDep)ol(i)}}function Ln(t){const{prevDep:e,nextDep:s}=t;e&&(e.nextDep=s,t.prevDep=void 0),s&&(s.prevDep=e,t.nextDep=void 0)}let Tt=!0;const Di=[];function Xt(){Di.push(Tt),Tt=!1}function te(){const t=Di.pop();Tt=t===void 0?!0:t}function Sl(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const s=M;M=void 0;try{e()}finally{M=s}}}let Pe=0;class Fn{constructor(e,s){this.sub=e,this.dep=s,this.version=s.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Si{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0}track(e){if(!M||!Tt||M===this.computed)return;let s=this.activeLink;if(s===void 0||s.sub!==M)s=this.activeLink=new Fn(M,this),M.deps?(s.prevDep=M.depsTail,M.depsTail.nextDep=s,M.depsTail=s):M.deps=M.depsTail=s,M.flags&4&&Ni(s);else if(s.version===-1&&(s.version=this.version,s.nextDep)){const l=s.nextDep;l.prevDep=s.prevDep,s.prevDep&&(s.prevDep.nextDep=l),s.prevDep=M.depsTail,s.nextDep=void 0,M.depsTail.nextDep=s,M.depsTail=s,M.deps===s&&(M.deps=l)}return s}trigger(e){this.version++,Pe++,this.notify(e)}notify(e){nl();try{for(let s=this.subs;s;s=s.prevSub)s.sub.notify()}finally{rl()}}}function Ni(t){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let l=e.deps;l;l=l.nextDep)Ni(l)}const s=t.dep.subs;s!==t&&(t.prevSub=s,s&&(s.nextSub=t)),t.dep.subs=t}const Ms=new WeakMap,oe=Symbol(""),Us=Symbol(""),ze=Symbol("");function ot(t,e,s){if(Tt&&M){let l=Ms.get(t);l||Ms.set(t,l=new Map);let i=l.get(s);i||l.set(s,i=new Si),i.track()}}function Mt(t,e,s,l,i,n){const r=Ms.get(t);if(!r){Pe++;return}const o=a=>{a&&a.trigger()};if(nl(),e==="clear")r.forEach(o);else{const a=D(t),_=a&&sl(s);if(a&&s==="length"){const m=Number(l);r.forEach((f,k)=>{(k==="length"||k===ze||!Pt(k)&&k>=m)&&o(f)})}else switch(s!==void 0&&o(r.get(s)),_&&o(r.get(ze)),e){case"add":a?_&&o(r.get("length")):(o(r.get(oe)),ce(t)&&o(r.get(Us)));break;case"delete":a||(o(r.get(oe)),ce(t)&&o(r.get(Us)));break;case"set":ce(t)&&o(r.get(oe));break}}rl()}function ge(t){const e=H(t);return e===t?e:(ot(e,"iterate",ze),Dt(t)?e:e.map(_t))}function ks(t){return ot(t=H(t),"iterate",ze),t}const Hn={__proto__:null,[Symbol.iterator](){return Cs(this,Symbol.iterator,_t)},concat(...t){return ge(this).concat(...t.map(e=>D(e)?ge(e):e))},entries(){return Cs(this,"entries",t=>(t[1]=_t(t[1]),t))},every(t,e){return Lt(this,"every",t,e,void 0,arguments)},filter(t,e){return Lt(this,"filter",t,e,s=>s.map(_t),arguments)},find(t,e){return Lt(this,"find",t,e,_t,arguments)},findIndex(t,e){return Lt(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Lt(this,"findLast",t,e,_t,arguments)},findLastIndex(t,e){return Lt(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Lt(this,"forEach",t,e,void 0,arguments)},includes(...t){return Rs(this,"includes",t)},indexOf(...t){return Rs(this,"indexOf",t)},join(t){return ge(this).join(t)},lastIndexOf(...t){return Rs(this,"lastIndexOf",t)},map(t,e){return Lt(this,"map",t,e,void 0,arguments)},pop(){return Ne(this,"pop")},push(...t){return Ne(this,"push",t)},reduce(t,...e){return Nl(this,"reduce",t,e)},reduceRight(t,...e){return Nl(this,"reduceRight",t,e)},shift(){return Ne(this,"shift")},some(t,e){return Lt(this,"some",t,e,void 0,arguments)},splice(...t){return Ne(this,"splice",t)},toReversed(){return ge(this).toReversed()},toSorted(t){return ge(this).toSorted(t)},toSpliced(...t){return ge(this).toSpliced(...t)},unshift(...t){return Ne(this,"unshift",t)},values(){return Cs(this,"values",_t)}};function Cs(t,e,s){const l=ks(t),i=l[e]();return l!==t&&!Dt(t)&&(i._next=i.next,i.next=()=>{const n=i._next();return n.value&&(n.value=s(n.value)),n}),i}const Mn=Array.prototype;function Lt(t,e,s,l,i,n){const r=ks(t),o=r!==t&&!Dt(t),a=r[e];if(a!==Mn[e]){const f=a.apply(t,n);return o?_t(f):f}let _=s;r!==t&&(o?_=function(f,k){return s.call(this,_t(f),k,t)}:s.length>2&&(_=function(f,k){return s.call(this,f,k,t)}));const m=a.call(r,_,l);return o&&i?i(m):m}function Nl(t,e,s,l){const i=ks(t);let n=s;return i!==t&&(Dt(t)?s.length>3&&(n=function(r,o,a){return s.call(this,r,o,a,t)}):n=function(r,o,a){return s.call(this,r,_t(o),a,t)}),i[e](n,...l)}function Rs(t,e,s){const l=H(t);ot(l,"iterate",ze);const i=l[e](...s);return(i===-1||i===!1)&&ml(s[0])?(s[0]=H(s[0]),l[e](...s)):i}function Ne(t,e,s=[]){Xt(),nl();const l=H(t)[e].apply(t,s);return rl(),te(),l}const Un=Xs("__proto__,__v_isRef,__isVue"),Gi=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Pt));function qn(t){Pt(t)||(t=String(t));const e=H(this);return ot(e,"has",t),e.hasOwnProperty(t)}class ji{constructor(e=!1,s=!1){this._isReadonly=e,this._isShallow=s}get(e,s,l){const i=this._isReadonly,n=this._isShallow;if(s==="__v_isReactive")return!i;if(s==="__v_isReadonly")return i;if(s==="__v_isShallow")return n;if(s==="__v_raw")return l===(i?n?lr:Wi:n?Ri:Ci).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(l)?e:void 0;const r=D(e);if(!i){let a;if(r&&(a=Hn[s]))return a;if(s==="hasOwnProperty")return qn}const o=Reflect.get(e,s,mt(e)?e:l);return(Pt(s)?Gi.has(s):Un(s))||(i||ot(e,"get",s),n)?o:mt(o)?r&&sl(s)?o:o.value:B(o)?i?Ii(o):$e(o):o}}class Oi extends ji{constructor(e=!1){super(!1,e)}set(e,s,l,i){let n=e[s];if(!this._isShallow){const a=we(n);if(!Dt(l)&&!we(l)&&(n=H(n),l=H(l)),!D(e)&&mt(n)&&!mt(l))return a?!1:(n.value=l,!0)}const r=D(e)&&sl(s)?Number(s)<e.length:L(e,s),o=Reflect.set(e,s,l,mt(e)?e:i);return e===H(i)&&(r?ue(l,n)&&Mt(e,"set",s,l):Mt(e,"add",s,l)),o}deleteProperty(e,s){const l=L(e,s);e[s];const i=Reflect.deleteProperty(e,s);return i&&l&&Mt(e,"delete",s,void 0),i}has(e,s){const l=Reflect.has(e,s);return(!Pt(s)||!Gi.has(s))&&ot(e,"has",s),l}ownKeys(e){return ot(e,"iterate",D(e)?"length":oe),Reflect.ownKeys(e)}}class $n extends ji{constructor(e=!1){super(!0,e)}set(e,s){return!0}deleteProperty(e,s){return!0}}const Bn=new Oi,Kn=new $n,Vn=new Oi(!0);const al=t=>t,ws=t=>Reflect.getPrototypeOf(t);function Xe(t,e,s=!1,l=!1){t=t.__v_raw;const i=H(t),n=H(e);s||(ue(e,n)&&ot(i,"get",e),ot(i,"get",n));const{has:r}=ws(i),o=l?al:s?_l:_t;if(r.call(i,e))return o(t.get(e));if(r.call(i,n))return o(t.get(n));t!==i&&t.get(e)}function ts(t,e=!1){const s=this.__v_raw,l=H(s),i=H(t);return e||(ue(t,i)&&ot(l,"has",t),ot(l,"has",i)),t===i?s.has(t):s.has(t)||s.has(i)}function es(t,e=!1){return t=t.__v_raw,!e&&ot(H(t),"iterate",oe),Reflect.get(t,"size",t)}function Gl(t,e=!1){!e&&!Dt(t)&&!we(t)&&(t=H(t));const s=H(this);return ws(s).has.call(s,t)||(s.add(t),Mt(s,"add",t,t)),this}function jl(t,e,s=!1){!s&&!Dt(e)&&!we(e)&&(e=H(e));const l=H(this),{has:i,get:n}=ws(l);let r=i.call(l,t);r||(t=H(t),r=i.call(l,t));const o=n.call(l,t);return l.set(t,e),r?ue(e,o)&&Mt(l,"set",t,e):Mt(l,"add",t,e),this}function Ol(t){const e=H(this),{has:s,get:l}=ws(e);let i=s.call(e,t);i||(t=H(t),i=s.call(e,t)),l&&l.call(e,t);const n=e.delete(t);return i&&Mt(e,"delete",t,void 0),n}function Cl(){const t=H(this),e=t.size!==0,s=t.clear();return e&&Mt(t,"clear",void 0,void 0),s}function ss(t,e){return function(l,i){const n=this,r=n.__v_raw,o=H(r),a=e?al:t?_l:_t;return!t&&ot(o,"iterate",oe),r.forEach((_,m)=>l.call(i,a(_),a(m),n))}}function ls(t,e,s){return function(...l){const i=this.__v_raw,n=H(i),r=ce(n),o=t==="entries"||t===Symbol.iterator&&r,a=t==="keys"&&r,_=i[t](...l),m=s?al:e?_l:_t;return!e&&ot(n,"iterate",a?Us:oe),{next(){const{value:f,done:k}=_.next();return k?{value:f,done:k}:{value:o?[m(f[0]),m(f[1])]:m(f),done:k}},[Symbol.iterator](){return this}}}}function Vt(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Jn(){const t={get(n){return Xe(this,n)},get size(){return es(this)},has:ts,add:Gl,set:jl,delete:Ol,clear:Cl,forEach:ss(!1,!1)},e={get(n){return Xe(this,n,!1,!0)},get size(){return es(this)},has:ts,add(n){return Gl.call(this,n,!0)},set(n,r){return jl.call(this,n,r,!0)},delete:Ol,clear:Cl,forEach:ss(!1,!0)},s={get(n){return Xe(this,n,!0)},get size(){return es(this,!0)},has(n){return ts.call(this,n,!0)},add:Vt("add"),set:Vt("set"),delete:Vt("delete"),clear:Vt("clear"),forEach:ss(!0,!1)},l={get(n){return Xe(this,n,!0,!0)},get size(){return es(this,!0)},has(n){return ts.call(this,n,!0)},add:Vt("add"),set:Vt("set"),delete:Vt("delete"),clear:Vt("clear"),forEach:ss(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(n=>{t[n]=ls(n,!1,!1),s[n]=ls(n,!0,!1),e[n]=ls(n,!1,!0),l[n]=ls(n,!0,!0)}),[t,s,e,l]}const[Qn,Yn,Zn,Xn]=Jn();function ul(t,e){const s=e?t?Xn:Zn:t?Yn:Qn;return(l,i,n)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?l:Reflect.get(L(s,i)&&i in l?s:l,i,n)}const tr={get:ul(!1,!1)},er={get:ul(!1,!0)},sr={get:ul(!0,!1)};const Ci=new WeakMap,Ri=new WeakMap,Wi=new WeakMap,lr=new WeakMap;function ir(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function nr(t){return t.__v_skip||!Object.isExtensible(t)?0:ir(Dn(t))}function $e(t){return we(t)?t:dl(t,!1,Bn,tr,Ci)}function rr(t){return dl(t,!1,Vn,er,Ri)}function Ii(t){return dl(t,!0,Kn,sr,Wi)}function dl(t,e,s,l,i){if(!B(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const n=i.get(t);if(n)return n;const r=nr(t);if(r===0)return t;const o=new Proxy(t,r===2?l:s);return i.set(t,o),o}function pe(t){return we(t)?pe(t.__v_raw):!!(t&&t.__v_isReactive)}function we(t){return!!(t&&t.__v_isReadonly)}function Dt(t){return!!(t&&t.__v_isShallow)}function ml(t){return t?!!t.__v_raw:!1}function H(t){const e=t&&t.__v_raw;return e?H(e):t}function or(t){return!L(t,"__v_skip")&&Object.isExtensible(t)&&ci(t,"__v_skip",!0),t}const _t=t=>B(t)?$e(t):t,_l=t=>B(t)?Ii(t):t;function mt(t){return t?t.__v_isRef===!0:!1}function ar(t){return mt(t)?t.value:t}const ur={get:(t,e,s)=>e==="__v_raw"?t:ar(Reflect.get(t,e,s)),set:(t,e,s,l)=>{const i=t[e];return mt(i)&&!mt(s)?(i.value=s,!0):Reflect.set(t,e,s,l)}};function Pi(t){return pe(t)?t:new Proxy(t,ur)}class dr{constructor(e,s,l){this.fn=e,this.setter=s,this._value=void 0,this.dep=new Si(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Pe-1,this.effect=this,this.__v_isReadonly=!s,this.isSSR=l}notify(){this.flags|=16,M!==this&&this.dep.notify()}get value(){const e=this.dep.track();return Ti(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function mr(t,e,s=!1){let l,i;return C(t)?l=t:(l=t.get,i=t.set),new dr(l,i,s)}const is={},_s=new WeakMap;let re;function _r(t,e=!1,s=re){if(s){let l=_s.get(s);l||_s.set(s,l=[]),l.push(t)}}function gr(t,e,s=U){const{immediate:l,deep:i,once:n,scheduler:r,augmentJob:o,call:a}=s,_=S=>i?S:Dt(S)||i===!1||i===0?Ht(S,1):Ht(S);let m,f,k,N,W=!1,j=!1;if(mt(t)?(f=()=>t.value,W=Dt(t)):pe(t)?(f=()=>_(t),W=!0):D(t)?(j=!0,W=t.some(S=>pe(S)||Dt(S)),f=()=>t.map(S=>{if(mt(S))return S.value;if(pe(S))return _(S);if(C(S))return a?a(S,2):S()})):C(t)?e?f=a?()=>a(t,2):t:f=()=>{if(k){Xt();try{k()}finally{te()}}const S=re;re=m;try{return a?a(t,3,[N]):t(N)}finally{re=S}}:f=It,e&&i){const S=f,X=i===!0?1/0:i;f=()=>Ht(S(),X)}const Z=zn(),P=()=>{m.stop(),Z&&el(Z.effects,m)};if(n)if(e){const S=e;e=(...X)=>{S(...X),P()}}else{const S=f;f=()=>{S(),P()}}let V=j?new Array(t.length).fill(is):is;const J=S=>{if(!(!(m.flags&1)||!m.dirty&&!S))if(e){const X=m.run();if(i||W||(j?X.some((Bt,Nt)=>ue(Bt,V[Nt])):ue(X,V))){k&&k();const Bt=re;re=m;try{const Nt=[X,V===is?void 0:j&&V[0]===is?[]:V,N];a?a(e,3,Nt):e(...Nt),V=X}finally{re=Bt}}}else m.run()};return o&&o(J),m=new Ai(f),m.scheduler=r?()=>r(J,!1):J,N=S=>_r(S,!1,m),k=m.onStop=()=>{const S=_s.get(m);if(S){if(a)a(S,4);else for(const X of S)X();_s.delete(m)}},e?l?J(!0):V=m.run():r?r(J.bind(null,!0),!0):m.run(),P.pause=m.pause.bind(m),P.resume=m.resume.bind(m),P.stop=P,P}function Ht(t,e=1/0,s){if(e<=0||!B(t)||t.__v_skip||(s=s||new Set,s.has(t)))return t;if(s.add(t),e--,mt(t))Ht(t.value,e,s);else if(D(t))for(let l=0;l<t.length;l++)Ht(t[l],e,s);else if(ve(t)||ce(t))t.forEach(l=>{Ht(l,e,s)});else if(hi(t)){for(const l in t)Ht(t[l],e,s);for(const l of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,l)&&Ht(t[l],e,s)}return t}/**
* @vue/runtime-core v3.5.5
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Be(t,e,s,l){try{return l?t(...l):t()}catch(i){As(i,e,s)}}function zt(t,e,s,l){if(C(t)){const i=Be(t,e,s,l);return i&&fi(i)&&i.catch(n=>{As(n,e,s)}),i}if(D(t)){const i=[];for(let n=0;n<t.length;n++)i.push(zt(t[n],e,s,l));return i}}function As(t,e,s,l=!0){const i=e?e.vnode:null,{errorHandler:n,throwUnhandledErrorInProduction:r}=e&&e.appContext.config||U;if(e){let o=e.parent;const a=e.proxy,_=`https://vuejs.org/error-reference/#runtime-${s}`;for(;o;){const m=o.ec;if(m){for(let f=0;f<m.length;f++)if(m[f](t,a,_)===!1)return}o=o.parent}if(n){Xt(),Be(n,null,10,[t,a,_]),te();return}}fr(t,s,i,l,r)}function fr(t,e,s,l=!0,i=!1){if(i)throw t;console.error(t)}let Le=!1,qs=!1;const dt=[];let Ct=0;const be=[];let Qt=null,fe=0;const zi=Promise.resolve();let gl=null;function Li(t){const e=gl||zi;return t?e.then(this?t.bind(this):t):e}function xr(t){let e=Le?Ct+1:0,s=dt.length;for(;e<s;){const l=e+s>>>1,i=dt[l],n=Fe(i);n<t||n===t&&i.flags&2?e=l+1:s=l}return e}function fl(t){if(!(t.flags&1)){const e=Fe(t),s=dt[dt.length-1];!s||!(t.flags&2)&&e>=Fe(s)?dt.push(t):dt.splice(xr(e),0,t),t.flags|=1,Fi()}}function Fi(){!Le&&!qs&&(qs=!0,gl=zi.then(Mi))}function hr(t){D(t)?be.push(...t):Qt&&t.id===-1?Qt.splice(fe+1,0,t):t.flags&1||(be.push(t),t.flags|=1),Fi()}function Rl(t,e,s=Le?Ct+1:0){for(;s<dt.length;s++){const l=dt[s];if(l&&l.flags&2){if(t&&l.id!==t.uid)continue;dt.splice(s,1),s--,l.flags&4&&(l.flags&=-2),l(),l.flags&=-2}}}function Hi(t){if(be.length){const e=[...new Set(be)].sort((s,l)=>Fe(s)-Fe(l));if(be.length=0,Qt){Qt.push(...e);return}for(Qt=e,fe=0;fe<Qt.length;fe++){const s=Qt[fe];s.flags&4&&(s.flags&=-2),s.flags&8||s(),s.flags&=-2}Qt=null,fe=0}}const Fe=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Mi(t){qs=!1,Le=!0;try{for(Ct=0;Ct<dt.length;Ct++){const e=dt[Ct];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Be(e,e.i,e.i?15:14),e.flags&=-2)}}finally{for(;Ct<dt.length;Ct++){const e=dt[Ct];e&&(e.flags&=-2)}Ct=0,dt.length=0,Hi(),Le=!1,gl=null,(dt.length||be.length)&&Mi()}}let kt=null,Ui=null;function gs(t){const e=kt;return kt=t,Ui=t&&t.type.__scopeId||null,e}function cr(t,e=kt,s){if(!e||t._n)return t;const l=(...i)=>{l._d&&Ul(-1);const n=gs(e);let r;try{r=t(...i)}finally{gs(n),l._d&&Ul(1)}return r};return l._n=!0,l._c=!0,l._d=!0,l}function yt(t,e){if(kt===null)return t;const s=Ds(kt),l=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[n,r,o,a=U]=e[i];n&&(C(n)&&(n={mounted:n,updated:n}),n.deep&&Ht(r),l.push({dir:n,instance:s,value:r,oldValue:void 0,arg:o,modifiers:a}))}return t}function ie(t,e,s,l){const i=t.dirs,n=e&&e.dirs;for(let r=0;r<i.length;r++){const o=i[r];n&&(o.oldValue=n[r].value);let a=o.dir[l];a&&(Xt(),zt(a,s,8,[t.el,o,t,e]),te())}}const pr=Symbol("_vte"),br=t=>t.__isTeleport;function xl(t,e){t.shapeFlag&6&&t.component?(t.transition=e,xl(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function qi(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function $s(t,e,s,l,i=!1){if(D(t)){t.forEach((W,j)=>$s(W,e&&(D(e)?e[j]:e),s,l,i));return}if(Re(l)&&!i)return;const n=l.shapeFlag&4?Ds(l.component):l.el,r=i?null:n,{i:o,r:a}=t,_=e&&e.r,m=o.refs===U?o.refs={}:o.refs,f=o.setupState,k=H(f),N=f===U?()=>!1:W=>L(k,W);if(_!=null&&_!==a&&(Y(_)?(m[_]=null,N(_)&&(f[_]=null)):mt(_)&&(_.value=null)),C(a))Be(a,o,12,[r,m]);else{const W=Y(a),j=mt(a);if(W||j){const Z=()=>{if(t.f){const P=W?N(a)?f[a]:m[a]:a.value;i?D(P)&&el(P,n):D(P)?P.includes(n)||P.push(n):W?(m[a]=[n],N(a)&&(f[a]=m[a])):(a.value=[n],t.k&&(m[t.k]=a.value))}else W?(m[a]=r,N(a)&&(f[a]=r)):j&&(a.value=r,t.k&&(m[t.k]=r))};r?(Z.id=-1,ct(Z,s)):Z()}}}const Re=t=>!!t.type.__asyncLoader,$i=t=>t.type.__isKeepAlive;function kr(t,e){Bi(t,"a",e)}function wr(t,e){Bi(t,"da",e)}function Bi(t,e,s=it){const l=t.__wdc||(t.__wdc=()=>{let i=s;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Es(e,l,s),s){let i=s.parent;for(;i&&i.parent;)$i(i.parent.vnode)&&Ar(l,e,s,i),i=i.parent}}function Ar(t,e,s,l){const i=Es(e,t,l,!0);Ki(()=>{el(l[e],i)},s)}function Es(t,e,s=it,l=!1){if(s){const i=s[t]||(s[t]=[]),n=e.__weh||(e.__weh=(...r)=>{Xt();const o=Ke(s),a=zt(e,s,t,r);return o(),te(),a});return l?i.unshift(n):i.push(n),n}}const $t=t=>(e,s=it)=>{(!Ts||t==="sp")&&Es(t,(...l)=>e(...l),s)},Er=$t("bm"),vr=$t("m"),yr=$t("bu"),Tr=$t("u"),Dr=$t("bum"),Ki=$t("um"),Sr=$t("sp"),Nr=$t("rtg"),Gr=$t("rtc");function jr(t,e=it){Es("ec",t,e)}const Vi="components";function bt(t,e){return Cr(Vi,t,!0,e)||t}const Or=Symbol.for("v-ndc");function Cr(t,e,s=!0,l=!1){const i=kt||it;if(i){const n=i.type;if(t===Vi){const o=Eo(n,!1);if(o&&(o===e||o===St(e)||o===bs(St(e))))return n}const r=Wl(i[t]||n[t],e)||Wl(i.appContext[t],e);return!r&&l?n:r}}function Wl(t,e){return t&&(t[e]||t[St(e)]||t[bs(St(e))])}function ae(t,e,s,l){let i;const n=s,r=D(t);if(r||Y(t)){const o=r&&pe(t);let a=!1;o&&(a=!Dt(t),t=ks(t)),i=new Array(t.length);for(let _=0,m=t.length;_<m;_++)i[_]=e(a?_t(t[_]):t[_],_,void 0,n)}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,n)}else if(B(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,n));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,_=o.length;a<_;a++){const m=o[a];i[a]=e(t[m],m,a,n)}}else i=[];return i}const Bs=t=>t?xn(t)?Ds(t):Bs(t.parent):null,We=rt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Bs(t.parent),$root:t=>Bs(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>hl(t),$forceUpdate:t=>t.f||(t.f=()=>{fl(t.update)}),$nextTick:t=>t.n||(t.n=Li.bind(t.proxy)),$watch:t=>eo.bind(t)}),Ws=(t,e)=>t!==U&&!t.__isScriptSetup&&L(t,e),Rr={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:s,setupState:l,data:i,props:n,accessCache:r,type:o,appContext:a}=t;let _;if(e[0]!=="$"){const N=r[e];if(N!==void 0)switch(N){case 1:return l[e];case 2:return i[e];case 4:return s[e];case 3:return n[e]}else{if(Ws(l,e))return r[e]=1,l[e];if(i!==U&&L(i,e))return r[e]=2,i[e];if((_=t.propsOptions[0])&&L(_,e))return r[e]=3,n[e];if(s!==U&&L(s,e))return r[e]=4,s[e];Ks&&(r[e]=0)}}const m=We[e];let f,k;if(m)return e==="$attrs"&&ot(t.attrs,"get",""),m(t);if((f=o.__cssModules)&&(f=f[e]))return f;if(s!==U&&L(s,e))return r[e]=4,s[e];if(k=a.config.globalProperties,L(k,e))return k[e]},set({_:t},e,s){const{data:l,setupState:i,ctx:n}=t;return Ws(i,e)?(i[e]=s,!0):l!==U&&L(l,e)?(l[e]=s,!0):L(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(n[e]=s,!0)},has({_:{data:t,setupState:e,accessCache:s,ctx:l,appContext:i,propsOptions:n}},r){let o;return!!s[r]||t!==U&&L(t,r)||Ws(e,r)||(o=n[0])&&L(o,r)||L(l,r)||L(We,r)||L(i.config.globalProperties,r)},defineProperty(t,e,s){return s.get!=null?t._.accessCache[e]=0:L(s,"value")&&this.set(t,e,s.value,null),Reflect.defineProperty(t,e,s)}};function Il(t){return D(t)?t.reduce((e,s)=>(e[s]=null,e),{}):t}let Ks=!0;function Wr(t){const e=hl(t),s=t.proxy,l=t.ctx;Ks=!1,e.beforeCreate&&Pl(e.beforeCreate,t,"bc");const{data:i,computed:n,methods:r,watch:o,provide:a,inject:_,created:m,beforeMount:f,mounted:k,beforeUpdate:N,updated:W,activated:j,deactivated:Z,beforeDestroy:P,beforeUnmount:V,destroyed:J,unmounted:S,render:X,renderTracked:Bt,renderTriggered:Nt,errorCaptured:Kt,serverPrefetch:Ve,expose:ee,inheritAttrs:ye,components:Je,directives:Qe,filters:Ss}=e;if(_&&Ir(_,l,null),r)for(const K in r){const q=r[K];C(q)&&(l[K]=q.bind(s))}if(i){const K=i.call(s,s);B(K)&&(t.data=$e(K))}if(Ks=!0,n)for(const K in n){const q=n[K],se=C(q)?q.bind(s,s):C(q.get)?q.get.bind(s,s):It,Ye=!C(q)&&C(q.set)?q.set.bind(s):It,le=yo({get:se,set:Ye});Object.defineProperty(l,K,{enumerable:!0,configurable:!0,get:()=>le.value,set:Gt=>le.value=Gt})}if(o)for(const K in o)Ji(o[K],l,s,K);if(a){const K=C(a)?a.call(s):a;Reflect.ownKeys(K).forEach(q=>{Mr(q,K[q])})}m&&Pl(m,t,"c");function at(K,q){D(q)?q.forEach(se=>K(se.bind(s))):q&&K(q.bind(s))}if(at(Er,f),at(vr,k),at(yr,N),at(Tr,W),at(kr,j),at(wr,Z),at(jr,Kt),at(Gr,Bt),at(Nr,Nt),at(Dr,V),at(Ki,S),at(Sr,Ve),D(ee))if(ee.length){const K=t.exposed||(t.exposed={});ee.forEach(q=>{Object.defineProperty(K,q,{get:()=>s[q],set:se=>s[q]=se})})}else t.exposed||(t.exposed={});X&&t.render===It&&(t.render=X),ye!=null&&(t.inheritAttrs=ye),Je&&(t.components=Je),Qe&&(t.directives=Qe),Ve&&qi(t)}function Ir(t,e,s=It){D(t)&&(t=Vs(t));for(const l in t){const i=t[l];let n;B(i)?"default"in i?n=rs(i.from||l,i.default,!0):n=rs(i.from||l):n=rs(i),mt(n)?Object.defineProperty(e,l,{enumerable:!0,configurable:!0,get:()=>n.value,set:r=>n.value=r}):e[l]=n}}function Pl(t,e,s){zt(D(t)?t.map(l=>l.bind(e.proxy)):t.bind(e.proxy),e,s)}function Ji(t,e,s,l){let i=l.includes(".")?dn(s,l):()=>s[l];if(Y(t)){const n=e[t];C(n)&&os(i,n)}else if(C(t))os(i,t.bind(s));else if(B(t))if(D(t))t.forEach(n=>Ji(n,e,s,l));else{const n=C(t.handler)?t.handler.bind(s):e[t.handler];C(n)&&os(i,n,t)}}function hl(t){const e=t.type,{mixins:s,extends:l}=e,{mixins:i,optionsCache:n,config:{optionMergeStrategies:r}}=t.appContext,o=n.get(e);let a;return o?a=o:!i.length&&!s&&!l?a=e:(a={},i.length&&i.forEach(_=>fs(a,_,r,!0)),fs(a,e,r)),B(e)&&n.set(e,a),a}function fs(t,e,s,l=!1){const{mixins:i,extends:n}=e;n&&fs(t,n,s,!0),i&&i.forEach(r=>fs(t,r,s,!0));for(const r in e)if(!(l&&r==="expose")){const o=Pr[r]||s&&s[r];t[r]=o?o(t[r],e[r]):e[r]}return t}const Pr={data:zl,props:Ll,emits:Ll,methods:je,computed:je,beforeCreate:ut,created:ut,beforeMount:ut,mounted:ut,beforeUpdate:ut,updated:ut,beforeDestroy:ut,beforeUnmount:ut,destroyed:ut,unmounted:ut,activated:ut,deactivated:ut,errorCaptured:ut,serverPrefetch:ut,components:je,directives:je,watch:Lr,provide:zl,inject:zr};function zl(t,e){return e?t?function(){return rt(C(t)?t.call(this,this):t,C(e)?e.call(this,this):e)}:e:t}function zr(t,e){return je(Vs(t),Vs(e))}function Vs(t){if(D(t)){const e={};for(let s=0;s<t.length;s++)e[t[s]]=t[s];return e}return t}function ut(t,e){return t?[...new Set([].concat(t,e))]:e}function je(t,e){return t?rt(Object.create(null),t,e):e}function Ll(t,e){return t?D(t)&&D(e)?[...new Set([...t,...e])]:rt(Object.create(null),Il(t),Il(e??{})):e}function Lr(t,e){if(!t)return e;if(!e)return t;const s=rt(Object.create(null),t);for(const l in e)s[l]=ut(t[l],e[l]);return s}function Qi(){return{app:null,config:{isNativeTag:yn,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Fr=0;function Hr(t,e){return function(l,i=null){C(l)||(l=rt({},l)),i!=null&&!B(i)&&(i=null);const n=Qi(),r=new WeakSet,o=[];let a=!1;const _=n.app={_uid:Fr++,_component:l,_props:i,_container:null,_context:n,_instance:null,version:To,get config(){return n.config},set config(m){},use(m,...f){return r.has(m)||(m&&C(m.install)?(r.add(m),m.install(_,...f)):C(m)&&(r.add(m),m(_,...f))),_},mixin(m){return n.mixins.includes(m)||n.mixins.push(m),_},component(m,f){return f?(n.components[m]=f,_):n.components[m]},directive(m,f){return f?(n.directives[m]=f,_):n.directives[m]},mount(m,f,k){if(!a){const N=_._ceVNode||et(l,i);return N.appContext=n,k===!0?k="svg":k===!1&&(k=void 0),f&&e?e(N,m):t(N,m,k),a=!0,_._container=m,m.__vue_app__=_,Ds(N.component)}},onUnmount(m){o.push(m)},unmount(){a&&(zt(o,_._instance,16),t(null,_._container),delete _._container.__vue_app__)},provide(m,f){return n.provides[m]=f,_},runWithContext(m){const f=ke;ke=_;try{return m()}finally{ke=f}}};return _}}let ke=null;function Mr(t,e){if(it){let s=it.provides;const l=it.parent&&it.parent.provides;l===s&&(s=it.provides=Object.create(l)),s[t]=e}}function rs(t,e,s=!1){const l=it||kt;if(l||ke){const i=ke?ke._context.provides:l?l.parent==null?l.vnode.appContext&&l.vnode.appContext.provides:l.parent.provides:void 0;if(i&&t in i)return i[t];if(arguments.length>1)return s&&C(e)?e.call(l&&l.proxy):e}}const Yi={},Zi=()=>Object.create(Yi),Xi=t=>Object.getPrototypeOf(t)===Yi;function Ur(t,e,s,l=!1){const i={},n=Zi();t.propsDefaults=Object.create(null),tn(t,e,i,n);for(const r in t.propsOptions[0])r in i||(i[r]=void 0);s?t.props=l?i:rr(i):t.type.props?t.props=i:t.props=n,t.attrs=n}function qr(t,e,s,l){const{props:i,attrs:n,vnode:{patchFlag:r}}=t,o=H(i),[a]=t.propsOptions;let _=!1;if((l||r>0)&&!(r&16)){if(r&8){const m=t.vnode.dynamicProps;for(let f=0;f<m.length;f++){let k=m[f];if(vs(t.emitsOptions,k))continue;const N=e[k];if(a)if(L(n,k))N!==n[k]&&(n[k]=N,_=!0);else{const W=St(k);i[W]=Js(a,o,W,N,t,!1)}else N!==n[k]&&(n[k]=N,_=!0)}}}else{tn(t,e,i,n)&&(_=!0);let m;for(const f in o)(!e||!L(e,f)&&((m=_e(f))===f||!L(e,m)))&&(a?s&&(s[f]!==void 0||s[m]!==void 0)&&(i[f]=Js(a,o,f,void 0,t,!0)):delete i[f]);if(n!==o)for(const f in n)(!e||!L(e,f))&&(delete n[f],_=!0)}_&&Mt(t.attrs,"set","")}function tn(t,e,s,l){const[i,n]=t.propsOptions;let r=!1,o;if(e)for(let a in e){if(Oe(a))continue;const _=e[a];let m;i&&L(i,m=St(a))?!n||!n.includes(m)?s[m]=_:(o||(o={}))[m]=_:vs(t.emitsOptions,a)||(!(a in l)||_!==l[a])&&(l[a]=_,r=!0)}if(n){const a=H(s),_=o||U;for(let m=0;m<n.length;m++){const f=n[m];s[f]=Js(i,a,f,_[f],t,!L(_,f))}}return r}function Js(t,e,s,l,i,n){const r=t[s];if(r!=null){const o=L(r,"default");if(o&&l===void 0){const a=r.default;if(r.type!==Function&&!r.skipFactory&&C(a)){const{propsDefaults:_}=i;if(s in _)l=_[s];else{const m=Ke(i);l=_[s]=a.call(null,e),m()}}else l=a;i.ce&&i.ce._setProp(s,l)}r[0]&&(n&&!o?l=!1:r[1]&&(l===""||l===_e(s))&&(l=!0))}return l}const $r=new WeakMap;function en(t,e,s=!1){const l=s?$r:e.propsCache,i=l.get(t);if(i)return i;const n=t.props,r={},o=[];let a=!1;if(!C(t)){const m=f=>{a=!0;const[k,N]=en(f,e,!0);rt(r,k),N&&o.push(...N)};!s&&e.mixins.length&&e.mixins.forEach(m),t.extends&&m(t.extends),t.mixins&&t.mixins.forEach(m)}if(!n&&!a)return B(t)&&l.set(t,he),he;if(D(n))for(let m=0;m<n.length;m++){const f=St(n[m]);Fl(f)&&(r[f]=U)}else if(n)for(const m in n){const f=St(m);if(Fl(f)){const k=n[m],N=r[f]=D(k)||C(k)?{type:k}:rt({},k),W=N.type;let j=!1,Z=!0;if(D(W))for(let P=0;P<W.length;++P){const V=W[P],J=C(V)&&V.name;if(J==="Boolean"){j=!0;break}else J==="String"&&(Z=!1)}else j=C(W)&&W.name==="Boolean";N[0]=j,N[1]=Z,(j||L(N,"default"))&&o.push(f)}}const _=[r,o];return B(t)&&l.set(t,_),_}function Fl(t){return t[0]!=="$"&&!Oe(t)}const sn=t=>t[0]==="_"||t==="$stable",cl=t=>D(t)?t.map(Rt):[Rt(t)],Br=(t,e,s)=>{if(e._n)return e;const l=cr((...i)=>cl(e(...i)),s);return l._c=!1,l},ln=(t,e,s)=>{const l=t._ctx;for(const i in t){if(sn(i))continue;const n=t[i];if(C(n))e[i]=Br(i,n,l);else if(n!=null){const r=cl(n);e[i]=()=>r}}},nn=(t,e)=>{const s=cl(e);t.slots.default=()=>s},rn=(t,e,s)=>{for(const l in e)(s||l!=="_")&&(t[l]=e[l])},Kr=(t,e,s)=>{const l=t.slots=Zi();if(t.vnode.shapeFlag&32){const i=e._;i?(rn(l,e,s),s&&ci(l,"_",i,!0)):ln(e,l)}else e&&nn(t,e)},Vr=(t,e,s)=>{const{vnode:l,slots:i}=t;let n=!0,r=U;if(l.shapeFlag&32){const o=e._;o?s&&o===1?n=!1:rn(i,e,s):(n=!e.$stable,ln(e,i)),r=e}else e&&(nn(t,e),r={default:1});if(n)for(const o in i)!sn(o)&&r[o]==null&&delete i[o]},ct=ao;function Jr(t){return Qr(t)}function Qr(t,e){const s=pi();s.__VUE__=!0;const{insert:l,remove:i,patchProp:n,createElement:r,createText:o,createComment:a,setText:_,setElementText:m,parentNode:f,nextSibling:k,setScopeId:N=It,insertStaticContent:W}=t,j=(u,d,g,p=null,x=null,c=null,E=void 0,A=null,w=!!d.dynamicChildren)=>{if(u===d)return;u&&!Ge(u,d)&&(p=Ze(u),Gt(u,x,c,!0),u=null),d.patchFlag===-2&&(w=!1,d.dynamicChildren=null);const{type:b,ref:T,shapeFlag:v}=d;switch(b){case ys:Z(u,d,g,p);break;case de:P(u,d,g,p);break;case as:u==null&&V(d,g,p,E);break;case Q:Je(u,d,g,p,x,c,E,A,w);break;default:v&1?X(u,d,g,p,x,c,E,A,w):v&6?Qe(u,d,g,p,x,c,E,A,w):(v&64||v&128)&&b.process(u,d,g,p,x,c,E,A,w,De)}T!=null&&x&&$s(T,u&&u.ref,c,d||u,!d)},Z=(u,d,g,p)=>{if(u==null)l(d.el=o(d.children),g,p);else{const x=d.el=u.el;d.children!==u.children&&_(x,d.children)}},P=(u,d,g,p)=>{u==null?l(d.el=a(d.children||""),g,p):d.el=u.el},V=(u,d,g,p)=>{[u.el,u.anchor]=W(u.children,d,g,p,u.el,u.anchor)},J=({el:u,anchor:d},g,p)=>{let x;for(;u&&u!==d;)x=k(u),l(u,g,p),u=x;l(d,g,p)},S=({el:u,anchor:d})=>{let g;for(;u&&u!==d;)g=k(u),i(u),u=g;i(d)},X=(u,d,g,p,x,c,E,A,w)=>{d.type==="svg"?E="svg":d.type==="math"&&(E="mathml"),u==null?Bt(d,g,p,x,c,E,A,w):Ve(u,d,x,c,E,A,w)},Bt=(u,d,g,p,x,c,E,A)=>{let w,b;const{props:T,shapeFlag:v,transition:y,dirs:G}=u;if(w=u.el=r(u.type,c,T&&T.is,T),v&8?m(w,u.children):v&16&&Kt(u.children,w,null,p,x,Is(u,c),E,A),G&&ie(u,null,p,"created"),Nt(w,u,u.scopeId,E,p),T){for(const $ in T)$!=="value"&&!Oe($)&&n(w,$,null,T[$],c,p);"value"in T&&n(w,"value",null,T.value,c),(b=T.onVnodeBeforeMount)&&Ot(b,p,u)}G&&ie(u,null,p,"beforeMount");const I=Yr(x,y);I&&y.beforeEnter(w),l(w,d,g),((b=T&&T.onVnodeMounted)||I||G)&&ct(()=>{b&&Ot(b,p,u),I&&y.enter(w),G&&ie(u,null,p,"mounted")},x)},Nt=(u,d,g,p,x)=>{if(g&&N(u,g),p)for(let c=0;c<p.length;c++)N(u,p[c]);if(x){let c=x.subTree;if(d===c||_n(c.type)&&(c.ssContent===d||c.ssFallback===d)){const E=x.vnode;Nt(u,E,E.scopeId,E.slotScopeIds,x.parent)}}},Kt=(u,d,g,p,x,c,E,A,w=0)=>{for(let b=w;b<u.length;b++){const T=u[b]=A?Yt(u[b]):Rt(u[b]);j(null,T,d,g,p,x,c,E,A)}},Ve=(u,d,g,p,x,c,E)=>{const A=d.el=u.el;let{patchFlag:w,dynamicChildren:b,dirs:T}=d;w|=u.patchFlag&16;const v=u.props||U,y=d.props||U;let G;if(g&&ne(g,!1),(G=y.onVnodeBeforeUpdate)&&Ot(G,g,d,u),T&&ie(d,u,g,"beforeUpdate"),g&&ne(g,!0),(v.innerHTML&&y.innerHTML==null||v.textContent&&y.textContent==null)&&m(A,""),b?ee(u.dynamicChildren,b,A,g,p,Is(d,x),c):E||q(u,d,A,null,g,p,Is(d,x),c,!1),w>0){if(w&16)ye(A,v,y,g,x);else if(w&2&&v.class!==y.class&&n(A,"class",null,y.class,x),w&4&&n(A,"style",v.style,y.style,x),w&8){const I=d.dynamicProps;for(let $=0;$<I.length;$++){const F=I[$],ft=v[F],lt=y[F];(lt!==ft||F==="value")&&n(A,F,ft,lt,x,g)}}w&1&&u.children!==d.children&&m(A,d.children)}else!E&&b==null&&ye(A,v,y,g,x);((G=y.onVnodeUpdated)||T)&&ct(()=>{G&&Ot(G,g,d,u),T&&ie(d,u,g,"updated")},p)},ee=(u,d,g,p,x,c,E)=>{for(let A=0;A<d.length;A++){const w=u[A],b=d[A],T=w.el&&(w.type===Q||!Ge(w,b)||w.shapeFlag&70)?f(w.el):g;j(w,b,T,null,p,x,c,E,!0)}},ye=(u,d,g,p,x)=>{if(d!==g){if(d!==U)for(const c in d)!Oe(c)&&!(c in g)&&n(u,c,d[c],null,x,p);for(const c in g){if(Oe(c))continue;const E=g[c],A=d[c];E!==A&&c!=="value"&&n(u,c,A,E,x,p)}"value"in g&&n(u,"value",d.value,g.value,x)}},Je=(u,d,g,p,x,c,E,A,w)=>{const b=d.el=u?u.el:o(""),T=d.anchor=u?u.anchor:o("");let{patchFlag:v,dynamicChildren:y,slotScopeIds:G}=d;G&&(A=A?A.concat(G):G),u==null?(l(b,g,p),l(T,g,p),Kt(d.children||[],g,T,x,c,E,A,w)):v>0&&v&64&&y&&u.dynamicChildren?(ee(u.dynamicChildren,y,g,x,c,E,A),(d.key!=null||x&&d===x.subTree)&&on(u,d,!0)):q(u,d,g,T,x,c,E,A,w)},Qe=(u,d,g,p,x,c,E,A,w)=>{d.slotScopeIds=A,u==null?d.shapeFlag&512?x.ctx.activate(d,g,p,E,w):Ss(d,g,p,x,c,E,w):bl(u,d,w)},Ss=(u,d,g,p,x,c,E)=>{const A=u.component=po(u,p,x);if($i(u)&&(A.ctx.renderer=De),bo(A,!1,E),A.asyncDep){if(x&&x.registerDep(A,at,E),!u.el){const w=A.subTree=et(de);P(null,w,d,g)}}else at(A,u,d,g,x,c,E)},bl=(u,d,g)=>{const p=d.component=u.component;if(ro(u,d,g))if(p.asyncDep&&!p.asyncResolved){K(p,d,g);return}else p.next=d,p.update();else d.el=u.el,p.vnode=d},at=(u,d,g,p,x,c,E)=>{const A=()=>{if(u.isMounted){let{next:v,bu:y,u:G,parent:I,vnode:$}=u;{const xt=an(u);if(xt){v&&(v.el=$.el,K(u,v,E)),xt.asyncDep.then(()=>{u.isUnmounted||A()});return}}let F=v,ft;ne(u,!1),v?(v.el=$.el,K(u,v,E)):v=$,y&&ns(y),(ft=v.props&&v.props.onVnodeBeforeUpdate)&&Ot(ft,I,v,$),ne(u,!0);const lt=Ps(u),Et=u.subTree;u.subTree=lt,j(Et,lt,f(Et.el),Ze(Et),u,x,c),v.el=lt.el,F===null&&oo(u,lt.el),G&&ct(G,x),(ft=v.props&&v.props.onVnodeUpdated)&&ct(()=>Ot(ft,I,v,$),x)}else{let v;const{el:y,props:G}=d,{bm:I,m:$,parent:F,root:ft,type:lt}=u,Et=Re(d);if(ne(u,!1),I&&ns(I),!Et&&(v=G&&G.onVnodeBeforeMount)&&Ot(v,F,d),ne(u,!0),y&&El){const xt=()=>{u.subTree=Ps(u),El(y,u.subTree,u,x,null)};Et&&lt.__asyncHydrate?lt.__asyncHydrate(y,u,xt):xt()}else{ft.ce&&ft.ce._injectChildStyle(lt);const xt=u.subTree=Ps(u);j(null,xt,g,p,u,x,c),d.el=xt.el}if($&&ct($,x),!Et&&(v=G&&G.onVnodeMounted)){const xt=d;ct(()=>Ot(v,F,xt),x)}(d.shapeFlag&256||F&&Re(F.vnode)&&F.vnode.shapeFlag&256)&&u.a&&ct(u.a,x),u.isMounted=!0,d=g=p=null}};u.scope.on();const w=u.effect=new Ai(A);u.scope.off();const b=u.update=w.run.bind(w),T=u.job=w.runIfDirty.bind(w);T.i=u,T.id=u.uid,w.scheduler=()=>fl(T),ne(u,!0),b()},K=(u,d,g)=>{d.component=u;const p=u.vnode.props;u.vnode=d,u.next=null,qr(u,d.props,p,g),Vr(u,d.children,g),Xt(),Rl(u),te()},q=(u,d,g,p,x,c,E,A,w=!1)=>{const b=u&&u.children,T=u?u.shapeFlag:0,v=d.children,{patchFlag:y,shapeFlag:G}=d;if(y>0){if(y&128){Ye(b,v,g,p,x,c,E,A,w);return}else if(y&256){se(b,v,g,p,x,c,E,A,w);return}}G&8?(T&16&&Te(b,x,c),v!==b&&m(g,v)):T&16?G&16?Ye(b,v,g,p,x,c,E,A,w):Te(b,x,c,!0):(T&8&&m(g,""),G&16&&Kt(v,g,p,x,c,E,A,w))},se=(u,d,g,p,x,c,E,A,w)=>{u=u||he,d=d||he;const b=u.length,T=d.length,v=Math.min(b,T);let y;for(y=0;y<v;y++){const G=d[y]=w?Yt(d[y]):Rt(d[y]);j(u[y],G,g,null,x,c,E,A,w)}b>T?Te(u,x,c,!0,!1,v):Kt(d,g,p,x,c,E,A,w,v)},Ye=(u,d,g,p,x,c,E,A,w)=>{let b=0;const T=d.length;let v=u.length-1,y=T-1;for(;b<=v&&b<=y;){const G=u[b],I=d[b]=w?Yt(d[b]):Rt(d[b]);if(Ge(G,I))j(G,I,g,null,x,c,E,A,w);else break;b++}for(;b<=v&&b<=y;){const G=u[v],I=d[y]=w?Yt(d[y]):Rt(d[y]);if(Ge(G,I))j(G,I,g,null,x,c,E,A,w);else break;v--,y--}if(b>v){if(b<=y){const G=y+1,I=G<T?d[G].el:p;for(;b<=y;)j(null,d[b]=w?Yt(d[b]):Rt(d[b]),g,I,x,c,E,A,w),b++}}else if(b>y)for(;b<=v;)Gt(u[b],x,c,!0),b++;else{const G=b,I=b,$=new Map;for(b=I;b<=y;b++){const ht=d[b]=w?Yt(d[b]):Rt(d[b]);ht.key!=null&&$.set(ht.key,b)}let F,ft=0;const lt=y-I+1;let Et=!1,xt=0;const Se=new Array(lt);for(b=0;b<lt;b++)Se[b]=0;for(b=G;b<=v;b++){const ht=u[b];if(ft>=lt){Gt(ht,x,c,!0);continue}let jt;if(ht.key!=null)jt=$.get(ht.key);else for(F=I;F<=y;F++)if(Se[F-I]===0&&Ge(ht,d[F])){jt=F;break}jt===void 0?Gt(ht,x,c,!0):(Se[jt-I]=b+1,jt>=xt?xt=jt:Et=!0,j(ht,d[jt],g,null,x,c,E,A,w),ft++)}const vl=Et?Zr(Se):he;for(F=vl.length-1,b=lt-1;b>=0;b--){const ht=I+b,jt=d[ht],yl=ht+1<T?d[ht+1].el:p;Se[b]===0?j(null,jt,g,yl,x,c,E,A,w):Et&&(F<0||b!==vl[F]?le(jt,g,yl,2):F--)}}},le=(u,d,g,p,x=null)=>{const{el:c,type:E,transition:A,children:w,shapeFlag:b}=u;if(b&6){le(u.component.subTree,d,g,p);return}if(b&128){u.suspense.move(d,g,p);return}if(b&64){E.move(u,d,g,De);return}if(E===Q){l(c,d,g);for(let v=0;v<w.length;v++)le(w[v],d,g,p);l(u.anchor,d,g);return}if(E===as){J(u,d,g);return}if(p!==2&&b&1&&A)if(p===0)A.beforeEnter(c),l(c,d,g),ct(()=>A.enter(c),x);else{const{leave:v,delayLeave:y,afterLeave:G}=A,I=()=>l(c,d,g),$=()=>{v(c,()=>{I(),G&&G()})};y?y(c,I,$):$()}else l(c,d,g)},Gt=(u,d,g,p=!1,x=!1)=>{const{type:c,props:E,ref:A,children:w,dynamicChildren:b,shapeFlag:T,patchFlag:v,dirs:y,cacheIndex:G}=u;if(v===-2&&(x=!1),A!=null&&$s(A,null,g,u,!0),G!=null&&(d.renderCache[G]=void 0),T&256){d.ctx.deactivate(u);return}const I=T&1&&y,$=!Re(u);let F;if($&&(F=E&&E.onVnodeBeforeUnmount)&&Ot(F,d,u),T&6)vn(u.component,g,p);else{if(T&128){u.suspense.unmount(g,p);return}I&&ie(u,null,d,"beforeUnmount"),T&64?u.type.remove(u,d,g,De,p):b&&!b.hasOnce&&(c!==Q||v>0&&v&64)?Te(b,d,g,!1,!0):(c===Q&&v&384||!x&&T&16)&&Te(w,d,g),p&&kl(u)}($&&(F=E&&E.onVnodeUnmounted)||I)&&ct(()=>{F&&Ot(F,d,u),I&&ie(u,null,d,"unmounted")},g)},kl=u=>{const{type:d,el:g,anchor:p,transition:x}=u;if(d===Q){En(g,p);return}if(d===as){S(u);return}const c=()=>{i(g),x&&!x.persisted&&x.afterLeave&&x.afterLeave()};if(u.shapeFlag&1&&x&&!x.persisted){const{leave:E,delayLeave:A}=x,w=()=>E(g,c);A?A(u.el,c,w):w()}else c()},En=(u,d)=>{let g;for(;u!==d;)g=k(u),i(u),u=g;i(d)},vn=(u,d,g)=>{const{bum:p,scope:x,job:c,subTree:E,um:A,m:w,a:b}=u;Hl(w),Hl(b),p&&ns(p),x.stop(),c&&(c.flags|=8,Gt(E,u,d,g)),A&&ct(A,d),ct(()=>{u.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},Te=(u,d,g,p=!1,x=!1,c=0)=>{for(let E=c;E<u.length;E++)Gt(u[E],d,g,p,x)},Ze=u=>{if(u.shapeFlag&6)return Ze(u.component.subTree);if(u.shapeFlag&128)return u.suspense.next();const d=k(u.anchor||u.el),g=d&&d[pr];return g?k(g):d};let Ns=!1;const wl=(u,d,g)=>{u==null?d._vnode&&Gt(d._vnode,null,null,!0):j(d._vnode||null,u,d,null,null,null,g),d._vnode=u,Ns||(Ns=!0,Rl(),Hi(),Ns=!1)},De={p:j,um:Gt,m:le,r:kl,mt:Ss,mc:Kt,pc:q,pbc:ee,n:Ze,o:t};let Al,El;return{render:wl,hydrate:Al,createApp:Hr(wl,Al)}}function Is({type:t,props:e},s){return s==="svg"&&t==="foreignObject"||s==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:s}function ne({effect:t,job:e},s){s?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Yr(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function on(t,e,s=!1){const l=t.children,i=e.children;if(D(l)&&D(i))for(let n=0;n<l.length;n++){const r=l[n];let o=i[n];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=i[n]=Yt(i[n]),o.el=r.el),!s&&o.patchFlag!==-2&&on(r,o)),o.type===ys&&(o.el=r.el)}}function Zr(t){const e=t.slice(),s=[0];let l,i,n,r,o;const a=t.length;for(l=0;l<a;l++){const _=t[l];if(_!==0){if(i=s[s.length-1],t[i]<_){e[l]=i,s.push(l);continue}for(n=0,r=s.length-1;n<r;)o=n+r>>1,t[s[o]]<_?n=o+1:r=o;_<t[s[n]]&&(n>0&&(e[l]=s[n-1]),s[n]=l)}}for(n=s.length,r=s[n-1];n-- >0;)s[n]=r,r=e[r];return s}function an(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:an(e)}function Hl(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Xr=Symbol.for("v-scx"),to=()=>rs(Xr);function os(t,e,s){return un(t,e,s)}function un(t,e,s=U){const{immediate:l,deep:i,flush:n,once:r}=s,o=rt({},s);let a;if(Ts)if(n==="sync"){const k=to();a=k.__watcherHandles||(k.__watcherHandles=[])}else if(!e||l)o.once=!0;else return{stop:It,resume:It,pause:It};const _=it;o.call=(k,N,W)=>zt(k,_,N,W);let m=!1;n==="post"?o.scheduler=k=>{ct(k,_&&_.suspense)}:n!=="sync"&&(m=!0,o.scheduler=(k,N)=>{N?k():fl(k)}),o.augmentJob=k=>{e&&(k.flags|=4),m&&(k.flags|=2,_&&(k.id=_.uid,k.i=_))};const f=gr(t,e,o);return a&&a.push(f),f}function eo(t,e,s){const l=this.proxy,i=Y(t)?t.includes(".")?dn(l,t):()=>l[t]:t.bind(l,l);let n;C(e)?n=e:(n=e.handler,s=e);const r=Ke(this),o=un(i,n.bind(l),s);return r(),o}function dn(t,e){const s=e.split(".");return()=>{let l=t;for(let i=0;i<s.length&&l;i++)l=l[s[i]];return l}}const so=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${St(e)}Modifiers`]||t[`${_e(e)}Modifiers`];function lo(t,e,...s){if(t.isUnmounted)return;const l=t.vnode.props||U;let i=s;const n=e.startsWith("update:"),r=n&&so(l,e.slice(7));r&&(r.trim&&(i=s.map(m=>Y(m)?m.trim():m)),r.number&&(i=s.map(ms)));let o,a=l[o=Gs(e)]||l[o=Gs(St(e))];!a&&n&&(a=l[o=Gs(_e(e))]),a&&zt(a,t,6,i);const _=l[o+"Once"];if(_){if(!t.emitted)t.emitted={};else if(t.emitted[o])return;t.emitted[o]=!0,zt(_,t,6,i)}}function mn(t,e,s=!1){const l=e.emitsCache,i=l.get(t);if(i!==void 0)return i;const n=t.emits;let r={},o=!1;if(!C(t)){const a=_=>{const m=mn(_,e,!0);m&&(o=!0,rt(r,m))};!s&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!n&&!o?(B(t)&&l.set(t,null),null):(D(n)?n.forEach(a=>r[a]=null):rt(r,n),B(t)&&l.set(t,r),r)}function vs(t,e){return!t||!cs(e)?!1:(e=e.slice(2).replace(/Once$/,""),L(t,e[0].toLowerCase()+e.slice(1))||L(t,_e(e))||L(t,e))}function Ps(t){const{type:e,vnode:s,proxy:l,withProxy:i,propsOptions:[n],slots:r,attrs:o,emit:a,render:_,renderCache:m,props:f,data:k,setupState:N,ctx:W,inheritAttrs:j}=t,Z=gs(t);let P,V;try{if(s.shapeFlag&4){const S=i||l,X=S;P=Rt(_.call(X,S,m,f,N,k,W)),V=o}else{const S=e;P=Rt(S.length>1?S(f,{attrs:o,slots:r,emit:a}):S(f,null)),V=e.props?o:io(o)}}catch(S){Ie.length=0,As(S,t,1),P=et(de)}let J=P;if(V&&j!==!1){const S=Object.keys(V),{shapeFlag:X}=J;S.length&&X&7&&(n&&S.some(tl)&&(V=no(V,n)),J=Ae(J,V,!1,!0))}return s.dirs&&(J=Ae(J,null,!1,!0),J.dirs=J.dirs?J.dirs.concat(s.dirs):s.dirs),s.transition&&xl(J,s.transition),P=J,gs(Z),P}const io=t=>{let e;for(const s in t)(s==="class"||s==="style"||cs(s))&&((e||(e={}))[s]=t[s]);return e},no=(t,e)=>{const s={};for(const l in t)(!tl(l)||!(l.slice(9)in e))&&(s[l]=t[l]);return s};function ro(t,e,s){const{props:l,children:i,component:n}=t,{props:r,children:o,patchFlag:a}=e,_=n.emitsOptions;if(e.dirs||e.transition)return!0;if(s&&a>=0){if(a&1024)return!0;if(a&16)return l?Ml(l,r,_):!!r;if(a&8){const m=e.dynamicProps;for(let f=0;f<m.length;f++){const k=m[f];if(r[k]!==l[k]&&!vs(_,k))return!0}}}else return(i||o)&&(!o||!o.$stable)?!0:l===r?!1:l?r?Ml(l,r,_):!0:!!r;return!1}function Ml(t,e,s){const l=Object.keys(e);if(l.length!==Object.keys(t).length)return!0;for(let i=0;i<l.length;i++){const n=l[i];if(e[n]!==t[n]&&!vs(s,n))return!0}return!1}function oo({vnode:t,parent:e},s){for(;e;){const l=e.subTree;if(l.suspense&&l.suspense.activeBranch===t&&(l.el=t.el),l===t)(t=e.vnode).el=s,e=e.parent;else break}}const _n=t=>t.__isSuspense;function ao(t,e){e&&e.pendingBranch?D(t)?e.effects.push(...t):e.effects.push(t):hr(t)}const Q=Symbol.for("v-fgt"),ys=Symbol.for("v-txt"),de=Symbol.for("v-cmt"),as=Symbol.for("v-stc"),Ie=[];let wt=null;function R(t=!1){Ie.push(wt=t?null:[])}function uo(){Ie.pop(),wt=Ie[Ie.length-1]||null}let He=1;function Ul(t){He+=t,t<0&&wt&&(wt.hasOnce=!0)}function gn(t){return t.dynamicChildren=He>0?wt||he:null,uo(),He>0&&wt&&wt.push(t),t}function z(t,e,s,l,i,n){return gn(h(t,e,s,l,i,n,!0))}function me(t,e,s,l,i){return gn(et(t,e,s,l,i,!0))}function mo(t){return t?t.__v_isVNode===!0:!1}function Ge(t,e){return t.type===e.type&&t.key===e.key}const fn=({key:t})=>t??null,us=({ref:t,ref_key:e,ref_for:s})=>(typeof t=="number"&&(t=""+t),t!=null?Y(t)||mt(t)||C(t)?{i:kt,r:t,k:e,f:!!s}:t:null);function h(t,e=null,s=null,l=0,i=null,n=t===Q?0:1,r=!1,o=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&fn(e),ref:e&&us(e),scopeId:Ui,slotScopeIds:null,children:s,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:n,patchFlag:l,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:kt};return o?(pl(a,s),n&128&&t.normalize(a)):s&&(a.shapeFlag|=Y(s)?8:16),He>0&&!r&&wt&&(a.patchFlag>0||n&6)&&a.patchFlag!==32&&wt.push(a),a}const et=_o;function _o(t,e=null,s=null,l=0,i=null,n=!1){if((!t||t===Or)&&(t=de),mo(t)){const o=Ae(t,e,!0);return s&&pl(o,s),He>0&&!n&&wt&&(o.shapeFlag&6?wt[wt.indexOf(t)]=o:wt.push(o)),o.patchFlag=-2,o}if(vo(t)&&(t=t.__vccOpts),e){e=go(e);let{class:o,style:a}=e;o&&!Y(o)&&(e.class=Wt(o)),B(a)&&(ml(a)&&!D(a)&&(a=rt({},a)),e.style=ll(a))}const r=Y(t)?1:_n(t)?128:br(t)?64:B(t)?4:C(t)?2:0;return h(t,e,s,l,i,r,n,!0)}function go(t){return t?ml(t)||Xi(t)?rt({},t):t:null}function Ae(t,e,s=!1,l=!1){const{props:i,ref:n,patchFlag:r,children:o,transition:a}=t,_=e?xo(i||{},e):i,m={__v_isVNode:!0,__v_skip:!0,type:t.type,props:_,key:_&&fn(_),ref:e&&e.ref?s&&n?D(n)?n.concat(us(e)):[n,us(e)]:us(e):n,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Q?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:a,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ae(t.ssContent),ssFallback:t.ssFallback&&Ae(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return a&&l&&xl(m,a.clone(m)),m}function xs(t=" ",e=0){return et(ys,null,t,e)}function fo(t,e){const s=et(as,null,t);return s.staticCount=e,s}function Ut(t="",e=!1){return e?(R(),me(de,null,t)):et(de,null,t)}function Rt(t){return t==null||typeof t=="boolean"?et(de):D(t)?et(Q,null,t.slice()):typeof t=="object"?Yt(t):et(ys,null,String(t))}function Yt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ae(t)}function pl(t,e){let s=0;const{shapeFlag:l}=t;if(e==null)e=null;else if(D(e))s=16;else if(typeof e=="object")if(l&65){const i=e.default;i&&(i._c&&(i._d=!1),pl(t,i()),i._c&&(i._d=!0));return}else{s=32;const i=e._;!i&&!Xi(e)?e._ctx=kt:i===3&&kt&&(kt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else C(e)?(e={default:e,_ctx:kt},s=32):(e=String(e),l&64?(s=16,e=[xs(e)]):s=8);t.children=e,t.shapeFlag|=s}function xo(...t){const e={};for(let s=0;s<t.length;s++){const l=t[s];for(const i in l)if(i==="class")e.class!==l.class&&(e.class=Wt([e.class,l.class]));else if(i==="style")e.style=ll([e.style,l.style]);else if(cs(i)){const n=e[i],r=l[i];r&&n!==r&&!(D(n)&&n.includes(r))&&(e[i]=n?[].concat(n,r):r)}else i!==""&&(e[i]=l[i])}return e}function Ot(t,e,s,l=null){zt(t,e,7,[s,l])}const ho=Qi();let co=0;function po(t,e,s){const l=t.type,i=(e?e.appContext:t.appContext)||ho,n={uid:co++,vnode:t,type:l,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Pn(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:en(l,i),emitsOptions:mn(l,i),emit:null,emitted:null,propsDefaults:U,inheritAttrs:l.inheritAttrs,ctx:U,data:U,props:U,attrs:U,slots:U,refs:U,setupState:U,setupContext:null,suspense:s,suspenseId:s?s.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return n.ctx={_:n},n.root=e?e.root:n,n.emit=lo.bind(null,n),t.ce&&t.ce(n),n}let it=null,hs,Qs;{const t=pi(),e=(s,l)=>{let i;return(i=t[s])||(i=t[s]=[]),i.push(l),n=>{i.length>1?i.forEach(r=>r(n)):i[0](n)}};hs=e("__VUE_INSTANCE_SETTERS__",s=>it=s),Qs=e("__VUE_SSR_SETTERS__",s=>Ts=s)}const Ke=t=>{const e=it;return hs(t),t.scope.on(),()=>{t.scope.off(),hs(e)}},ql=()=>{it&&it.scope.off(),hs(null)};function xn(t){return t.vnode.shapeFlag&4}let Ts=!1;function bo(t,e=!1,s=!1){e&&Qs(e);const{props:l,children:i}=t.vnode,n=xn(t);Ur(t,l,n,e),Kr(t,i,s);const r=n?ko(t,e):void 0;return e&&Qs(!1),r}function ko(t,e){const s=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Rr);const{setup:l}=s;if(l){const i=t.setupContext=l.length>1?Ao(t):null,n=Ke(t);Xt();const r=Be(l,t,0,[t.props,i]);if(te(),n(),fi(r)){if(Re(t)||qi(t),r.then(ql,ql),e)return r.then(o=>{$l(t,o,e)}).catch(o=>{As(o,t,0)});t.asyncDep=r}else $l(t,r,e)}else hn(t,e)}function $l(t,e,s){C(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:B(e)&&(t.setupState=Pi(e)),hn(t,s)}let Bl;function hn(t,e,s){const l=t.type;if(!t.render){if(!e&&Bl&&!l.render){const i=l.template||hl(t).template;if(i){const{isCustomElement:n,compilerOptions:r}=t.appContext.config,{delimiters:o,compilerOptions:a}=l,_=rt(rt({isCustomElement:n,delimiters:o},r),a);l.render=Bl(i,_)}}t.render=l.render||It}{const i=Ke(t);Xt();try{Wr(t)}finally{te(),i()}}}const wo={get(t,e){return ot(t,"get",""),t[e]}};function Ao(t){const e=s=>{t.exposed=s||{}};return{attrs:new Proxy(t.attrs,wo),slots:t.slots,emit:t.emit,expose:e}}function Ds(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Pi(or(t.exposed)),{get(e,s){if(s in e)return e[s];if(s in We)return We[s](t)},has(e,s){return s in e||s in We}})):t.proxy}function Eo(t,e=!0){return C(t)?t.displayName||t.name:t.name||e&&t.__name}function vo(t){return C(t)&&"__vccOpts"in t}const yo=(t,e)=>mr(t,e,Ts),To="3.5.5";/**
* @vue/runtime-dom v3.5.5
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ys;const Kl=typeof window<"u"&&window.trustedTypes;if(Kl)try{Ys=Kl.createPolicy("vue",{createHTML:t=>t})}catch{}const cn=Ys?t=>Ys.createHTML(t):t=>t,Do="http://www.w3.org/2000/svg",So="http://www.w3.org/1998/Math/MathML",Ft=typeof document<"u"?document:null,Vl=Ft&&Ft.createElement("template"),No={insert:(t,e,s)=>{e.insertBefore(t,s||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,s,l)=>{const i=e==="svg"?Ft.createElementNS(Do,t):e==="mathml"?Ft.createElementNS(So,t):s?Ft.createElement(t,{is:s}):Ft.createElement(t);return t==="select"&&l&&l.multiple!=null&&i.setAttribute("multiple",l.multiple),i},createText:t=>Ft.createTextNode(t),createComment:t=>Ft.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Ft.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,s,l,i,n){const r=s?s.previousSibling:e.lastChild;if(i&&(i===n||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),s),!(i===n||!(i=i.nextSibling)););else{Vl.innerHTML=cn(l==="svg"?`<svg>${t}</svg>`:l==="mathml"?`<math>${t}</math>`:t);const o=Vl.content;if(l==="svg"||l==="mathml"){const a=o.firstChild;for(;a.firstChild;)o.appendChild(a.firstChild);o.removeChild(a)}e.insertBefore(o,s)}return[r?r.nextSibling:e.firstChild,s?s.previousSibling:e.lastChild]}},Go=Symbol("_vtc");function jo(t,e,s){const l=t[Go];l&&(e=(e?[e,...l]:[...l]).join(" ")),e==null?t.removeAttribute("class"):s?t.setAttribute("class",e):t.className=e}const Jl=Symbol("_vod"),Oo=Symbol("_vsh"),Co=Symbol(""),Ro=/(^|;)\s*display\s*:/;function Wo(t,e,s){const l=t.style,i=Y(s);let n=!1;if(s&&!i){if(e)if(Y(e))for(const r of e.split(";")){const o=r.slice(0,r.indexOf(":")).trim();s[o]==null&&ds(l,o,"")}else for(const r in e)s[r]==null&&ds(l,r,"");for(const r in s)r==="display"&&(n=!0),ds(l,r,s[r])}else if(i){if(e!==s){const r=l[Co];r&&(s+=";"+r),l.cssText=s,n=Ro.test(s)}}else e&&t.removeAttribute("style");Jl in t&&(t[Jl]=n?l.display:"",t[Oo]&&(l.display="none"))}const Ql=/\s*!important$/;function ds(t,e,s){if(D(s))s.forEach(l=>ds(t,e,l));else if(s==null&&(s=""),e.startsWith("--"))t.setProperty(e,s);else{const l=Io(t,e);Ql.test(s)?t.setProperty(_e(l),s.replace(Ql,""),"important"):t[l]=s}}const Yl=["Webkit","Moz","ms"],zs={};function Io(t,e){const s=zs[e];if(s)return s;let l=St(e);if(l!=="filter"&&l in t)return zs[e]=l;l=bs(l);for(let i=0;i<Yl.length;i++){const n=Yl[i]+l;if(n in t)return zs[e]=n}return e}const Zl="http://www.w3.org/1999/xlink";function Xl(t,e,s,l,i,n=Wn(e)){l&&e.startsWith("xlink:")?s==null?t.removeAttributeNS(Zl,e.slice(6,e.length)):t.setAttributeNS(Zl,e,s):s==null||n&&!bi(s)?t.removeAttribute(e):t.setAttribute(e,n?"":Pt(s)?String(s):s)}function Po(t,e,s,l){if(e==="innerHTML"||e==="textContent"){s!=null&&(t[e]=e==="innerHTML"?cn(s):s);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const r=i==="OPTION"?t.getAttribute("value")||"":t.value,o=s==null?t.type==="checkbox"?"on":"":String(s);(r!==o||!("_value"in t))&&(t.value=o),s==null&&t.removeAttribute(e),t._value=s;return}let n=!1;if(s===""||s==null){const r=typeof t[e];r==="boolean"?s=bi(s):s==null&&r==="string"?(s="",n=!0):r==="number"&&(s=0,n=!0)}try{t[e]=s}catch{}n&&t.removeAttribute(e)}function Zt(t,e,s,l){t.addEventListener(e,s,l)}function zo(t,e,s,l){t.removeEventListener(e,s,l)}const ti=Symbol("_vei");function Lo(t,e,s,l,i=null){const n=t[ti]||(t[ti]={}),r=n[e];if(l&&r)r.value=l;else{const[o,a]=Fo(e);if(l){const _=n[e]=Uo(l,i);Zt(t,o,_,a)}else r&&(zo(t,o,r,a),n[e]=void 0)}}const ei=/(?:Once|Passive|Capture)$/;function Fo(t){let e;if(ei.test(t)){e={};let l;for(;l=t.match(ei);)t=t.slice(0,t.length-l[0].length),e[l[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):_e(t.slice(2)),e]}let Ls=0;const Ho=Promise.resolve(),Mo=()=>Ls||(Ho.then(()=>Ls=0),Ls=Date.now());function Uo(t,e){const s=l=>{if(!l._vts)l._vts=Date.now();else if(l._vts<=s.attached)return;zt(qo(l,s.value),e,5,[l])};return s.value=t,s.attached=Mo(),s}function qo(t,e){if(D(e)){const s=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{s.call(t),t._stopped=!0},e.map(l=>i=>!i._stopped&&l&&l(i))}else return e}const si=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,$o=(t,e,s,l,i,n)=>{const r=i==="svg";e==="class"?jo(t,l,r):e==="style"?Wo(t,s,l):cs(e)?tl(e)||Lo(t,e,s,l,n):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Bo(t,e,l,r))?(Po(t,e,l),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Xl(t,e,l,r,n,e!=="value")):(e==="true-value"?t._trueValue=l:e==="false-value"&&(t._falseValue=l),Xl(t,e,l,r))};function Bo(t,e,s,l){if(l)return!!(e==="innerHTML"||e==="textContent"||e in t&&si(e)&&C(s));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return si(e)&&Y(s)?!1:!!(e in t||t._isVueCE&&(/[A-Z]/.test(e)||!Y(s)))}const Ee=t=>{const e=t.props["onUpdate:modelValue"]||!1;return D(e)?s=>ns(e,s):e};function Ko(t){t.target.composing=!0}function li(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const qt=Symbol("_assign"),xe={created(t,{modifiers:{lazy:e,trim:s,number:l}},i){t[qt]=Ee(i);const n=l||i.props&&i.props.type==="number";Zt(t,e?"change":"input",r=>{if(r.target.composing)return;let o=t.value;s&&(o=o.trim()),n&&(o=ms(o)),t[qt](o)}),s&&Zt(t,"change",()=>{t.value=t.value.trim()}),e||(Zt(t,"compositionstart",Ko),Zt(t,"compositionend",li),Zt(t,"change",li))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:s,modifiers:{lazy:l,trim:i,number:n}},r){if(t[qt]=Ee(r),t.composing)return;const o=(n||t.type==="number")&&!/^0\d/.test(t.value)?ms(t.value):t.value,a=e??"";o!==a&&(document.activeElement===t&&t.type!=="range"&&(l&&e===s||i&&t.value.trim()===a)||(t.value=a))}},pn={deep:!0,created(t,e,s){t[qt]=Ee(s),Zt(t,"change",()=>{const l=t._modelValue,i=Me(t),n=t.checked,r=t[qt];if(D(l)){const o=il(l,i),a=o!==-1;if(n&&!a)r(l.concat(i));else if(!n&&a){const _=[...l];_.splice(o,1),r(_)}}else if(ve(l)){const o=new Set(l);n?o.add(i):o.delete(i),r(o)}else r(bn(t,n))})},mounted:ii,beforeUpdate(t,e,s){t[qt]=Ee(s),ii(t,e,s)}};function ii(t,{value:e,oldValue:s},l){t._modelValue=e;let i;D(e)?i=il(e,l.props.value)>-1:ve(e)?i=e.has(l.props.value):i=qe(e,bn(t,!0)),t.checked!==i&&(t.checked=i)}const Fs={deep:!0,created(t,{value:e,modifiers:{number:s}},l){const i=ve(e);Zt(t,"change",()=>{const n=Array.prototype.filter.call(t.options,r=>r.selected).map(r=>s?ms(Me(r)):Me(r));t[qt](t.multiple?i?new Set(n):n:n[0]),t._assigning=!0,Li(()=>{t._assigning=!1})}),t[qt]=Ee(l)},mounted(t,{value:e,modifiers:{number:s}}){ni(t,e)},beforeUpdate(t,e,s){t[qt]=Ee(s)},updated(t,{value:e,modifiers:{number:s}}){t._assigning||ni(t,e)}};function ni(t,e,s){const l=t.multiple,i=D(e);if(!(l&&!i&&!ve(e))){for(let n=0,r=t.options.length;n<r;n++){const o=t.options[n],a=Me(o);if(l)if(i){const _=typeof a;_==="string"||_==="number"?o.selected=e.some(m=>String(m)===String(a)):o.selected=il(e,a)>-1}else o.selected=e.has(a);else if(qe(Me(o),e)){t.selectedIndex!==n&&(t.selectedIndex=n);return}}!l&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Me(t){return"_value"in t?t._value:t.value}function bn(t,e){const s=e?"_trueValue":"_falseValue";return s in t?t[s]:e}const Vo=rt({patchProp:$o},No);let ri;function Jo(){return ri||(ri=Jr(Vo))}const Qo=(...t)=>{const e=Jo().createApp(...t),{mount:s}=e;return e.mount=l=>{const i=Zo(l);if(!i)return;const n=e._component;!C(n)&&!n.render&&!n.template&&(n.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const r=s(i,!1,Yo(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),r},e};function Yo(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Zo(t){return Y(t)?document.querySelector(t):t}const gt=(t,e)=>{const s=t.__vccOpts||t;for(const[l,i]of e)s[l]=i;return s},Xo={};function ta(t,e){return R(),z(Q,null,[e[0]||(e[0]=h("h1",null,"GlossySnake",-1)),e[1]||(e[1]=h("p",null,[xs("INDEX PAGE | "),h("a",{href:"https://github.com/parkchamchi/GlossySnake"},"Repo")],-1))],64)}const ea=gt(Xo,[["render",ta],["__scopeId","data-v-0f95cfa1"]]),Jt=$e({}),st={on(t,e){Jt[t]||(Jt[t]=[]),Jt[t].push(e)},off(t,e){Jt[t]&&(Jt[t]=Jt[t].filter(s=>s!==e))},emit(t,e){Jt[t]&&Jt[t].forEach(s=>s(e))}};function nt(){}nt.prototype.host="https://api.glossysnake.com";nt.prototype.api="/api/v4";nt.prototype.uri=function(t){return this.host+this.api+t};nt.prototype.jsonHelper=async function(t){try{return await t.json()}catch(e){return console.log(e),{error:JSON.parse(JSON.stringify(e,Object.getOwnPropertyNames(e)))}}};nt.prototype.submit=async function(t,e="GET",s=null,l=!0){const i=this.uri(t);let n={method:e,headers:{"Content-type":"application/json; charset=UTF-8"},credentials:"include"};e!="GET"&&(n.body=JSON.stringify(s)),l&&(n.headers.Authorization="Token "+nt._key);const r=await fetch(i,n);if(!r.ok){const o=await this.jsonHelper(r),a=i+": "+r.statusText+`
> `+JSON.stringify(o);throw st.emit("addAlert",{message:a,alertClass:"alert-warning"}),new Error(a)}return this.emitCorpusesUpdate(t),r};nt.prototype.emitCorpusesUpdate=async function(t){["/corpuses/","/tasks/","/user/check","/user/get-temp-user","/user/logout","/rest-auth/registration/","/rest-auth/login/","/rest-auth/logout/"].some(s=>t.endsWith(s))||(st.emit("updateCorpuses"),st.emit("updateTasks"))};const sa={data(){return{api:new nt,loggedin:!1}},computed:{userinfo(){return this.loggedin?"Guest.":"Log in."}},methods:{meow(){console.log("meow")},async getTempUser(){const e=await(await this.api.submit("/user/get-temp-user","GET",null,!1)).json();return e.success?(nt._key=e.key,!0):(console.error("get-temp-user unsuccessful"),!1)},async updateUser(){if(!nt._key&&!await this.getTempUser()){console.error("could not get the temp user.");return}this.loggedin=!0,st.emit("updateCorpuses"),st.emit("updateTasks")},async logout(){this.api.submit("/user/logout").then(()=>{nt._key=null,this.loggedin=!1,this.updateUser()})}},async created(){await this.updateUser()}},la={id:"frontend_auth_div"},ia={class:"userinfo_p"};function na(t,e,s,l,i,n){return R(),z("div",la,[h("p",ia,At(n.userinfo),1),h("p",{onClick:e[0]||(e[0]=r=>n.logout()),class:"btn logout_button"}," Logout ")])}const ra=gt(sa,[["render",na],["__scopeId","data-v-72d1c363"]]),oa=JSON.parse(localStorage.getItem("sharedState"))||{},O=$e({annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English",toRemote:!0,openaiApiKey:null,openaiModel:"gpt-4o-mini",outerRetry:2,innerRetry:3,maxGloss:80,fullPrompt:!0,...oa}),aa={data(){return O},watch:{annotator_name(){this.emitChange()},lang_from(){this.emitChange()},lang_to(){this.emitChange()},toRemote(){this.emitChange()}},methods:{emitChange(){O.annotator_name=this.annotator_name,O.lang_from=this.lang_from,O.lang_to=this.lang_to,O.toRemote=this.toRemote}}},ua={class:"container mt-4"},da={class:"row"},ma={class:"col-md-4"},_a={class:"col-md-4"},ga={class:"col-md-4"};function fa(t,e,s,l,i,n){return R(),z(Q,null,[h("div",ua,[h("div",da,[h("div",ma,[e[5]||(e[5]=h("label",{for:"annotator_name"},"annotator_name:",-1)),yt(h("select",{"onUpdate:modelValue":e[0]||(e[0]=r=>t.annotator_name=r),name:"annotator_name",id:"annotator_name_select",class:"form-control"},e[4]||(e[4]=[fo('<option value="dummy">dummy</option><option value="chatgpt_ft0">chatgpt_ft0</option><option value="chatgpt_gpt-4o-mini-untrained_0">chatgpt_gpt-4o-mini-untrained_0</option><option value="chatgpt_gpt-4o-mini-pretrained_0">chatgpt_gpt-4o-mini-pretrained_0</option><option value="chatgpt_gpt-3.5-turbo-untrained_0">chatgpt_gpt-3.5-turbo-untrained_0</option><option value="chatgpt_gpt-3.5-turbo-pretrained_0">chatgpt_gpt-3.5-turbo-pretrained_0</option>',6)]),512),[[Fs,t.annotator_name]])]),h("div",_a,[e[7]||(e[7]=h("label",{for:"lang_from"},"lang_from:",-1)),yt(h("select",{"onUpdate:modelValue":e[1]||(e[1]=r=>t.lang_from=r),name:"lang_from",id:"lang_from_select",class:"form-control"},e[6]||(e[6]=[h("option",{value:"French"},"French",-1),h("option",{value:"German"},"German",-1),h("option",{value:"Latin"},"Latin",-1)]),512),[[Fs,t.lang_from]])]),h("div",ga,[e[9]||(e[9]=h("label",{for:"lang_to"},"lang_to:",-1)),yt(h("select",{"onUpdate:modelValue":e[2]||(e[2]=r=>t.lang_to=r),name:"lang_to",id:"lang_to_select",class:"form-control"},e[8]||(e[8]=[h("option",{value:"English"},"English",-1)]),512),[[Fs,t.lang_to]])])])]),e[11]||(e[11]=h("br",null,null,-1)),h("div",null,[yt(h("input",{"onUpdate:modelValue":e[3]||(e[3]=r=>t.toRemote=r),type:"checkbox",name:"toRemote",id:"toRemote_input",class:"form-check-input",checked:""},null,512),[[pn,t.toRemote]]),e[10]||(e[10]=h("label",{for:"toRemote_input",class:"form-check-label"},"To the remote server",-1))])],64)}const xa=gt(aa,[["render",fa]]),ha={data(){return O},watch:{openaiApiKey(){this.emitChange()},openaiModel(){this.emitChange()},outerRetry(){this.emitChange()},innerRetry(){this.emitChange()},maxGloss(){this.emitChange()},fullPrompt(){this.emitChange()}},computed:{visibility(){return!O.toRemote}},methods:{emitChange(){O.openaiApiKey=this.openaiApiKey,O.openaiModel=this.openaiModel,O.outerRetry=this.outerRetry,O.innerRetry=this.innerRetry,O.maxGloss=this.maxGloss,O.fullPrompt=this.fullPrompt},exportData(){console.log("test");const t=JSON.stringify(O,null,2),e=new Blob([t],{type:"application/json"}),s=URL.createObjectURL(e),l=document.createElement("a");l.href=s,l.download="sharedState.json",l.click(),URL.revokeObjectURL(s)},async importData(t){const s=await t.target.files[0].text(),l=JSON.parse(s);Object.keys(l).forEach(i=>{O.hasOwnProperty(i)&&(O[i]=l[i])})}},mounted(){os(()=>O,t=>{localStorage.setItem("sharedState",JSON.stringify(t))},{deep:!0})}},ca={key:0,class:"container mt-3"},pa={class:"row"},ba={class:"col-md-2"},ka={class:"col-md-2"},wa={class:"col-md-2"},Aa={class:"col-md-2"},Ea={class:"col-md-2"},va={class:"col-md-2 d-flex align-items-center"},ya={class:"row"},Ta={class:"col-md-2 d-flex align-items-center"},Da={class:"col-md-2 d-flex align-items-center"};function Sa(t,e,s,l,i,n){return R(),z(Q,null,[e[15]||(e[15]=h("h4",null,"Local Annotator Options",-1)),n.visibility?(R(),z("div",ca,[h("div",pa,[h("div",ba,[e[8]||(e[8]=h("label",{for:"openaiApiKey"},"OpenAI API Key",-1)),yt(h("input",{type:"password",class:"form-control",id:"openaiApiKey","onUpdate:modelValue":e[0]||(e[0]=r=>t.openaiApiKey=r)},null,512),[[xe,t.openaiApiKey]])]),h("div",ka,[e[9]||(e[9]=h("label",{for:"openaiModel"},"OpenAI Model",-1)),yt(h("input",{type:"text",class:"form-control",id:"openaiModel","onUpdate:modelValue":e[1]||(e[1]=r=>t.openaiModel=r)},null,512),[[xe,t.openaiModel]])]),h("div",wa,[e[10]||(e[10]=h("label",{for:"outerRetry"},"Outer Retry",-1)),yt(h("input",{type:"number",class:"form-control",id:"outerRetry","onUpdate:modelValue":e[2]||(e[2]=r=>t.outerRetry=r),min:"1"},null,512),[[xe,t.outerRetry]])]),h("div",Aa,[e[11]||(e[11]=h("label",{for:"innerRetry"},"Inner Retry",-1)),yt(h("input",{type:"number",class:"form-control",id:"innerRetry","onUpdate:modelValue":e[3]||(e[3]=r=>t.innerRetry=r),min:"1"},null,512),[[xe,t.innerRetry]])]),h("div",Ea,[e[12]||(e[12]=h("label",{for:"maxGloss"},"Max Gloss",-1)),yt(h("input",{type:"number",class:"form-control",id:"maxGloss","onUpdate:modelValue":e[4]||(e[4]=r=>t.maxGloss=r),min:"40"},null,512),[[xe,t.maxGloss]])]),h("div",va,[yt(h("input",{type:"checkbox",class:"form-check-input",id:"fullPrompt","onUpdate:modelValue":e[5]||(e[5]=r=>t.fullPrompt=r)},null,512),[[pn,t.fullPrompt]]),e[13]||(e[13]=h("label",{class:"form-check-label",for:"fullPrompt"},"Full Prompt",-1))])]),h("div",ya,[e[14]||(e[14]=h("div",{class:"col-md-2 d-flex align-items-center"},[h("button",{class:"btn btn-link mt-3"},[h("a",{href:"https://github.com/parkchamchi/GlossySnake/blob/master/docs/design/local.md"},"Info")])],-1)),h("div",Ta,[h("button",{class:"btn btn-link mt-3",onClick:e[6]||(e[6]=(...r)=>n.exportData&&n.exportData(...r))},"Export")]),h("div",Da,[h("input",{type:"file",onChange:e[7]||(e[7]=(...r)=>n.importData&&n.importData(...r)),class:"form-control"},null,32)])])])):Ut("",!0)],64)}const Na=gt(ha,[["render",Sa]]),oi=[{corpus_id:"Winterreise",corpuses_history:[{paragraphs:[{pstate:"ANNOTATED",tokens:[{txt:"#",is_delimiter:!1,gloss:"#"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Gute",is_delimiter:!1,gloss:"Good"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Nacht.",is_delimiter:!1,gloss:"Night."}],is_delimiter:!1,token_delimiters:` 	
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
C'est toi qui dors dans l'ombre, ô sacré souvenir! "`,p_div_locs:"[260, 262, 516, 518, 753, 755, 1005, 1007, 1233, 1235, 1480, 1482, 1706, 1708, 1934, 1936, 2129, 2131, 2315, 2317, 2506, 2508, 2697, 2699, 2867, 2869, 3074, 3076, 3263, 3265, 3459, 3461, 3643, 3645, 3838, 3840, 4022, 4024, 4228, 4230, 4420, 4422, 4626, 4628, 4837, 4839, 5017, 5019, 5193, 5195, 5380, 5382, 5587, 5589, 5792, 5794, 6001, 6003, 6191, 6193, 6396, 6398, 6578, 6580, 6764, 6766, 6981, 6983, 7174, 7176, 7383, 7385, 7566, 7568, 7767]"}]}];let ai=class{constructor(e,s,l){this.txt=e,this.gloss=s,this.is_delimiter=l}};class kn{constructor(e,s,l){this.annotator_name=e,this.lang_from=s,this.lang_to=l}}let Ga=class{constructor(e,s,l,i,n,r){this.pstate=e,this.tokens=s,this.is_delimiter=l,this.token_delimiters=i,this.original_text=n,this.annotator_info_obj=r}},ja=class wn{constructor(e,s,l,i){this.paragraphs=e,this.paragraph_delimiters=s,this.original_text=l,this.p_div_locs=i}static init_with_txt(e){return new wn([],null,e,[])}};const ui=` 	
\r\v\f`;function Oa(t,e){const s=e.split("").map(i=>i.replace(/[-\/\\^$.*+?()[\]{}|]/g,"\\$&")).join("|");return t.split(new RegExp(`(${s})`)).filter(i=>i!=="").map(i=>({token:i,is_delimiter:e.includes(i)}))}class di{static divide_into_paragraphs(e,s=[`
`]){const l=e.original_text;let i=s.map(r=>r.replace("\\n",`
`)),n=[l];i.sort((r,o)=>o.length-r.length),i.forEach(r=>{for(let o=0;o<n.length;o++){let a=n[o].split(r);a=a.flatMap(_=>[_,r]).slice(0,-1),n[o]=a}n=[].concat(...n)}),e.p_div_locs=n.reduce((r,o)=>(r.push((r.length?r[r.length-1]:0)+o.length),r),[]),e.paragraphs=n.map(r=>new Ga("DIVIDED",[],s.includes(r),"",r,new kn)),e.paragraph_delimiters=s}static parse_paragraph(e,s=ui){if(s||(s=ui),e.is_delimiter)e.tokens=[new ai(e.original_text,null,!0)];else{const l=Oa(e.original_text,s);e.tokens=l.map(({token:i,is_delimiter:n})=>new ai(i,null,n))}e.pstate="PARSED",e.token_delimiters=s}}const mi="!UNKNOWN";class An{constructor(){this.annotator_name="DUMMYGLOSS"}async annotate(e,s,l){this.lang_from=s,this.lang_to=l,e.is_delimiter||(e.tokens&&e.tokens.length>0&&await this.put_gloss(e),e.pstate="ANNOTATED",e.annotator_info_obj.lang_from=this.lang_from,e.annotator_info_obj.lang_to=this.lang_to,e.annotator_info_obj.annotator_name=this.annotator_name)}async reannotate(e,s,l,i){this.lang_from=s,this.lang_to=l,!e.is_delimiter&&await this.reput_gloss(e,i)}async put_gloss(e){for(const s of e.tokens)s.is_delimiter||(s.gloss=`${this.annotator_name}(${s.txt})`)}async reput_gloss(e,s){for(const[l,i]of e.tokens.entries())s.includes(l)&&(i.gloss=`${this.annotator_name}_reannotated_\`${this.lang_from}\`_\`${this.lang_to}\``)}}const tt="||",vt="!TO_REANNOTATE",Zs="!TOKEN_TO_IGNORE";function _i(t){return t.replace(/[^a-zA-Z]/g,"")}function Ca(t,e){const s=_i(t),l=_i(e);if(!s)return!0;const i=new Set(s),n=new Set(l),r=new Set([...i].filter(_=>n.has(_))),o=new Set([...i,...n]);return(o.size>0?r.size/o.size:0)>=.5}class Ra extends An{constructor(e){super(),this.annotator_name=e,this.glossFetcher=new Ia(!0)}async put_gloss(e){const s=e.tokens.filter(o=>!o.is_delimiter),l=s.map(o=>o.txt),i=this.chunkize(l);console.log(`Chunks: ${i}`);let n=[],r=-1;for(const o of i){const a=o-r;if(a<=0){console.warn("Warning: length <= 0"),r=o;continue}console.log(`[${r+1}:${o+1}] out of ${l.length} (len: ${a})`);const _=l.slice(r+1,o+1);let m=await this.glossFetcher.tryFetchGloss(_);n=n.concat(m),r=o,console.log(`Chunk: ${m} (len: ${m.length})`)}for(let o=0;o<s.length;o++)s[o].gloss=n[o];e.annotator_info_obj=new kn(this.annotator_name,this.lang_from,this.lang_to)}async reput_gloss(e,s){console.log("reput_gloss: target_tokens:",s);const l=[],i=[],n=[];let r=0;for(let a=0;a<e.tokens.length;a++){const _=e.tokens[a];if(_.is_delimiter)continue;l.push(_);const m=s.includes(a);i.push(m),m&&(_.gloss=vt,n.push(r)),r++}const o=this.chunkizeForReannotation(i);console.log(`Chunks_for_reannotation: ${o}`);for(const[a,_]of o){const m=_-a;if(m<=0){console.warn("Warning: length <= 0");continue}if(console.log(`[${a+1}:${_+1}] out of ${l.length} (len: ${m})`),!n.some(j=>j<_+1&&a+1<=j))throw console.log("Skipping this chunk..."),new Error("chunkize_for_reannotation() returned invalid chunks");const f=l.slice(a+1,_+1),k=f.map(j=>j.txt),N=f.map(j=>j.gloss),W=await this.glossFetcher.tryFetchGloss(k,N);console.log(`Chunk: ${W} (len: ${W.length})`);for(let j=0;j<f.length;j++){const Z=f[j],P=W[j];Z.gloss===vt&&(P===Zs&&console.warn(`Token and Gloss not paired: ${Z}, ${P}.
chunkTokens: ${f}
chunkGlosses: ${W}`),Z.gloss=P)}}}chunkize(e){const s=[".","!","?"],l=O.maxGloss;let i=[];for(let o=0;o<e.length;o++){const a=e[o];s.some(_=>a.includes(_))&&i.push(o)}const n=[0];for(;;){const o=n[n.length-1];if(o+l>e.length)break;i=i.filter(m=>m>l);let a=i.filter(m=>m<=l),_;a.length===0?_=o+l:_=Math.max(...a),n.push(_)}n.shift();const r=e.length-1;return n.includes(r)||n.push(r),n}chunkizeForReannotation(e,s=16,l=4){const i=[];for(let n=0;n<e.length;n++){if(!e[n])continue;if(i.length>0){const _=i[i.length-1][1];if(n<_-l)continue}let o=n-s;o<-1&&(o=-1);let a=n+s;a+1>e.length&&(a=e.length-1),i.push([o,a])}return i}}class Wa{constructor(e=!1){this.dummy=e}async fetchGloss(e){if(!this.dummy)throw new Error("NotImplementedError");const s=e.length;return Array.from({length:s},(l,i)=>[`dummy${i}`])}async tryFetchGloss(e){return await this.fetchGloss(e)}}class Ia extends Wa{async tryFetchGloss(e,s=null){console.log(`Trying to fetch ${e.length} glosses`);const l=O.innerRetry,i=O.outerRetry,n=Array.isArray(s);let r;n?(console.log(`Reannotating: ${s}`),r=this.makeQueryReannotation(e,s)):r=this.makeQuery(e);const o=[...this.getChat(n),{role:"user",content:r}];this.lastResText="";for(let a=0;a<i;a++){console.log(`----------Try A${a}`);let _=[...o];for(let m=0;m<l;m++){console.log(`--------------------Try B${m}`);try{return await this.fetchGloss(e,_,s)}catch(f){console.log(`Exception: ${f}. Retrying.`),console.log(`lastResText: ${this.lastResText}`),_=[..._,{role:"assistant",content:this.lastResText},{role:"user",content:`
							Got an error, probably by a malformatted result.
							\`\`\` ${f} \`\`\`
						`}]}}}throw Error(`Failed after ${i}*${l} retries.`)}async fetchGloss(e,s,l=!1){return console.log(`Fetching ${e.length} glosses`),console.log("messages:",s),fetch("https://api.openai.com/v1/chat/completions",{method:"POST",headers:{"content-type":"application/json",Authorization:`Bearer ${O.openaiApiKey}`},body:JSON.stringify({model:O.openaiModel,messages:s})}).then(i=>i.json()).then(i=>{const n=i.usage.total_tokens;console.log("token usage:",n);const r=i.choices[0].message.content;this.lastResText=r;let o=this.parseRes(r);return Object.keys(o).length!=e.length&&console.log("parsed:",o),o=this.validateRes(e,o,l),o})}makeQuery(e){let s="";for(const[l,i]of e.entries())s+=`${l}: ${i}
`;return s}makeQueryReannotation(e,s){let l="";for(const[i,[n,r]]of e.map((o,a)=>[a,[o,s[a]]]))l+=`${i}: ${n} ${tt} ${r}
`;return l}parseRes(e){const s=e;try{if(e.includes("```"))e=e.split("```")[1];else if(e.includes("0:"))e=e.substring(e.indexOf("0:"));else throw new Error("The first line (`0: ...`) could not be found. Reformat the reply and answer again.");let l=e.split(`
`).filter(n=>n.trim()!==""),i={};return l.forEach(n=>{const[r,o]=n.match(/^(\d+):\s*(.*)$/).slice(1,3),a=parseInt(r.trim(),10),_=o.split(tt).map(m=>m.trim()).filter(m=>m!=="");i[a]=_}),i}catch{throw console.error(s),new Error("Could not parse the output. The output should be in the codeblock (``` 0: ... ```) and additional notes are not needed.")}}validateRes(e,s,l){const i=Array.isArray(l);console.log("token_strs:",e),console.log("res:",s);for(let o=0;o<e.length;o++){const a=e[o],[_,m]=Object.entries(s)[o];if(!i&&o!==parseInt(_))throw new Error(`\`${_}:\` line not found.`);if(m.length<=0)throw new Error(`Empty line: ${o}.`);m.length===1&&m.push(mi);const[f,k]=m.slice(0,2);if(!i&&!Ca(a,f))throw new Error(`Expected \`${o}: ${a} ||\` but incorrectly got \`${o}: ${f} ||\`. The pair of the number and the text (${o}, ${a}) has to be exact. Rewrite including \`${o}: ${a} ||\`.`)}let n=[],r;if(i&&(console.log("reannotationGlossStrs:",l),r=l.map((o,a)=>o===vt?a:-1).filter(o=>o!==-1),console.log("reannotationIndices",r),r.length===0))return console.log("TODO: reannotation_indices == []"),Array(e.length).fill(Zs);for(let o=0;o<e.length;o++){let a=null;i&&!r.includes(o)?a=Zs:s.hasOwnProperty(o)?a=s[o][1]:a=mi,n.push(a)}return n}getChat(e){let s,l;if(O.fullPrompt){l=`
				The gloss is expected to be a translation of the token.
				The grammatical elements need not be specified
				but can be naturally expressed
				(e.g. taking a genetive word as \`of ...\`)
			`;const n=[["Ceux","Those"],["que","whom"],["vous","you"],["oubliez","forget"],["ne","not"],["vous","you"],["oublieront","will forget"],["pas","not"]],r=`
`;if(e){const o=[1,2];return[{role:"system",content:`
						Re-annotate this corpus (Interlinear gloss).
		
						The user will tokenize and enumerate the raw input, as:
						\`\`\`
							0: als ${tt} as
							1: dieses ${tt} ${vt}
							2: Herz. ${tt} heart.
						\`\`\`
						You have to find lines with \`${vt}\` and give new translations, as:
						\`\`\`
							1: dieses ${tt} this
						\`\`\`
						Here, \`${vt}\` was replaced by your reannotation.
		
						The structure of the output is important and no line shall be omitted.
					`},{role:"user",content:`
						e.g. \`i: "original_word ${tt} gloss\`
						Since there are ${o.length} \`${vt}\` tokens in the input, ${o.length} lines of output are expected.
						i.e. the last line be \`${o[o.length-1]}: ...\`
		
						\`gloss\` is:
						${l}
		
						\`\`\`
						${n.map((a,_)=>`${_}: ${a[0]} ${tt} ${_ in o?vt:a[1]}`).join(r)}
						\`\`\`
					`},{role:"assistant",content:`
						\`\`\`
						${n.filter((a,_)=>o.includes(_)).map((a,_)=>`${_}: ${a[0]} ${tt} ${a[1]}`).join(r)}
						\`\`\`
					`}]}else{const o=n.length;return[{role:"system",content:`
						Parse this corpus (Interlinear gloss).
		
						The user will tokenize and enumerate the raw input, as:
							\`Je suis.\`
						to
						\`\`\`
							0: Je
							1: suis.
						\`\`\`
		

						You are to respond with 
						\`\`\`
							i: original_word ${tt} gloss
						\`\`\`.
						Here, the glosses are delimited with \`${tt}\`.
						No line should be skipped. Otherwise it will raise an error.
		
						For example, if the gloss should be then translation to English,
						the response shall be:
						\`\`\`
							0: Je ${tt} I
							1: suis. ${tt} am.
						\`\`\`
		
						Since the output text is to be processed by other program,
						the structure of the output is important.
		
						The numbers should correspond to the original token.
						No line shall be omitted!
						\`\`\`
							0: Je
							1: le
							2: sais.
						\`\`\`
						\`\`\`
							0: Je ${tt} I
							1: le ${tt} it
							2: sais. ${tt} know
						\`\`\`
		
						The output should only consist of the gloss block (\`\`\`...\`\`\`) and any other notes will be ignored.
					`},{role:"user",content:`
						e.g. \`i: "original_word ${tt} gloss\`
						Since there are ${o} tokens in the input, ${o} lines of output is expected.
						i.e. the last line be \`${o-1}: ...\`
		
						\`gloss\` is:
						${l}
		
						\`\`\`
						${n.map((a,_)=>`${_}: ${a[0]}`).join(r)}
						\`\`\`
					`},{role:"assistant",content:`
						\`\`\`
						${n.map((a,_)=>`${_}: ${a[0]} ${tt} ${a[1]}`).join(r)}
						\`\`\`
					`}]}}else return l="English translation",e?s=`Reannotate the input. A series of words will be given, which form a part of sentences. Some lines will have \`${vt}\` on its right side, which is to be re-annotated. Return only lines with \`${vt}\`, with ${vt} itself replaced following the context.`:s=`
					Parse this corpus (Interlinear gloss). 
					${l}
				`,[{role:"system",content:s}]}}function gi(t,e){return console.log(t),t&&t.startsWith("chatgpt_")?new Ra(t,e):new An}const Pa={props:{t:{type:Object,required:!0},index:{type:Number,required:!0}},data(){return{isSelected:!1}},computed:{is_delimiter(){return this.t.is_delimiter},should_linebreak(){return this.t.txt.includes(`
`)},txt(){return this.t.txt},gloss(){let t=this.t.gloss;return t=="!UNKNOWN"&&(t="-"),t}},methods:{toggle(){this.isSelected=!this.isSelected,this.$emit("selectionChanged",{tIndex:this.index,isSelected:this.isSelected})}}},za={class:"token_ul list-group list-group-flush"},La={class:"list-group-item token_txt"},Fa={class:"list-group-item gloss"},Ha={key:1},Ma={key:2,class:"token_wrapper"};function Ua(t,e,s,l,i,n){return n.is_delimiter?n.should_linebreak?(R(),z("br",Ha)):(R(),z("div",Ma,[h("span",null,At(n.txt),1)])):(R(),z("div",{key:0,class:Wt(["token_wrapper","card",{"selected-token":i.isSelected}]),onClick:e[0]||(e[0]=r=>n.toggle())},[h("ul",za,[h("li",La,At(n.txt),1),h("li",Fa,At(n.gloss),1)])],2))}const qa=gt(Pa,[["render",Ua],["__scopeId","data-v-2172f434"]]),$a={props:{p:{type:Object,required:!0},index:{type:Number,required:!0},remote:{type:Boolean,default:!1}},components:{Token:qa},computed:{isAnnotateButtonVisible(){return!this.p.is_delimiter&&this.p.tokens&&this.p.tokens.length},shouldShowManipulatorButtons(){return this.remote&&O.toRemote||!this.remote&&!O.toRemote&&O.openaiApiKey}},data(){return{selectedTokens:new Set,showPre:!1}},methods:{annotateP(){this.$emit("annotateP",this.index)},reannotateP(){this.$emit("reannotateP",this.index,Array.from(this.selectedTokens))},onSelectionChanged({tIndex:t,isSelected:e}){e?this.selectedTokens.add(t):this.selectedTokens.delete(t)}}},Ba={class:"paragraph_wrapper"},Ka={key:0,class:"paragraph_annotate_buttons_span"},Va={key:1};function Ja(t,e,s,l,i,n){const r=bt("Token");return R(),z("div",Ba,[n.isAnnotateButtonVisible&&n.shouldShowManipulatorButtons?(R(),z("span",Ka,[h("button",{class:"corpus_button btn btn-light",onClick:e[0]||(e[0]=o=>n.annotateP(s.index))}," Annotate "),h("button",{class:"corpus_button btn btn-light",onClick:e[1]||(e[1]=o=>n.reannotateP(s.index))}," Reannotate "),e[2]||(e[2]=h("br",null,null,-1))])):Ut("",!0),i.showPre?(R(),z("pre",Va,At(JSON.stringify(s.p)),1)):Ut("",!0),(R(!0),z(Q,null,ae(s.p.tokens,(o,a)=>(R(),me(r,{key:a,t:o,index:a,onSelectionChanged:n.onSelectionChanged},null,8,["t","index","onSelectionChanged"]))),128))])}const Qa=gt($a,[["render",Ja],["__scopeId","data-v-d3c29f34"]]),Ya={props:{corpus_id:{required:!0},corpus:{type:Object,required:!0},remote:{type:Boolean,default:!1}},components:{Paragraph:Qa},data(){return{api:new nt,sharedState:O,isCorpusVisible:!1,showPre:!1}},computed:{pseudoState(){return!this.corpus.paragraphs||this.corpus.paragraphs.length<=0?"PLAIN":this.corpus.paragraphs[0].pstate},divideButtonClass(){const t=this.pseudoState=="PLAIN";return{"btn-primary":t,"btn-light":!t}},parseButtonClass(){const t=this.pseudoState=="DIVIDED";return{"btn-primary":t,"btn-light":!t}},annotateButtonClass(){const t=this.pseudoState=="PARSED";return{"btn-primary":t,"btn-light":!t}},header(){return this.remote?"REMOTE":"LOCAL"},shouldShowManipulatorButtons(){return this.remote&&O.toRemote||!this.remote&&!O.toRemote&&O.openaiApiKey}},methods:{toggleCorpusVisibility(){this.isCorpusVisible=!this.isCorpusVisible},download(){const t=JSON.stringify(this.corpus);console.log("Downloading...");let e=document.createElement("a"),s=new Blob([t],{type:"text/plain"});e.download=this.corpus_id+".corpus.json",e.href=URL.createObjectURL(s),e.click()},async divide(t=`
`){return O.toRemote?this.divideRemote(t):this.divideLocal(t)},async parse(){return O.toRemote?this.parseRemote():this.parseLocal()},async annotate(t=null){return O.toRemote?this.annotateRemote(t):this.annotateLocal(t)},async reannotate(t,e){if(!e){console.error("target_tokens is not given");return}if(e.length==0){st.emit("addAlert",{message:"No token selected.",alertClass:"alert-warning"});return}return O.toRemote?this.reannotateRemote(t,e):this.reannotateLocal(t,e)},async divideRemote(t){this.api.submit("/parser/divide","POST",{corpus_id:this.corpus_id,divide_options:{p_delims:[t]}})},async parseRemote(){this.api.submit("/parser/parse","POST",{corpus_id:this.corpus_id,parse_options:{t_delims:null}})},async annotateRemote(t){this.api.submit("/annotator/annotate","POST",{corpus_id:this.corpus_id,annotate_options:{annotator_name:this.sharedState.annotator_name,lang_from:this.sharedState.lang_from,lang_to:this.sharedState.lang_to,target_paragraphs:t}})},async reannotateRemote(t,e){this.api.submit("/annotator/reannotate","POST",{corpus_id:this.corpus_id,annotate_options:{annotator_name:this.sharedState.annotator_name,lang_from:this.sharedState.lang_from,lang_to:this.sharedState.lang_to,target_paragraphs:t},reannotate_options:{target_tokens:e}})},async divideLocal(t){di.divide_into_paragraphs(this.corpus,[t])},async parseLocal(){for(const t of this.corpus.paragraphs)di.parse_paragraph(t)},async annotateLocal(t){const e=gi(O.annotator_name),s=O.lang_from,l=O.lang_to;t&&(t.length==1&&t[0]==-1&&(t=this.corpus.paragraphs.map((i,n)=>({p:i,i:n})).filter(({p:i})=>!i.is_delimiter&&i.pstate!="ANNOTATED").map(({i})=>i)),console.log(t));for(const[i,n]of this.corpus.paragraphs.entries())t&&!t.includes(i)||await e.annotate(n,s,l)},async reannotateLocal(t,e){const s=gi(O.annotator_name),l=O.lang_from,i=O.lang_to,n=t[0],r=this.corpus.paragraphs[n];l||(l=r.annotator_info_obj.lang_from),i||(i=r.annotator_info_obj.lang_to),await s.reannotate(r,l,i,e)},onAnnotateP(t){this.annotate([t])},onReannotateP(t,e){this.reannotate([t],e)}}},Za={class:"corpus_wrapper"},Xa={key:0,class:"corpus"},tu={class:"corpus_buttons_span"},eu={key:0},su={key:0,class:"corpus-pre"};function lu(t,e,s,l,i,n){const r=bt("Paragraph");return R(),z("div",Za,[e[9]||(e[9]=h("hr",null,null,-1)),h("h4",{onClick:e[0]||(e[0]=o=>n.toggleCorpusVisibility())},At(n.header+": "+s.corpus_id),1),i.isCorpusVisible?(R(),z("div",Xa,[h("span",tu,[h("button",{class:"corpus_button btn btn-light",onClick:e[1]||(e[1]=o=>n.download())},"Download"),n.shouldShowManipulatorButtons?(R(),z("span",eu,[h("button",{class:Wt(["corpus_button","btn",n.divideButtonClass]),onClick:e[2]||(e[2]=o=>n.divide())},"Divide",2),h("button",{class:Wt(["corpus_button","btn",n.divideButtonClass]),onClick:e[3]||(e[3]=o=>n.divide("\\n\\n"))},"Divide (for poems)",2),h("button",{class:Wt(["corpus_button","btn",n.parseButtonClass]),onClick:e[4]||(e[4]=o=>n.parse())},"Parse",2),h("button",{class:Wt(["corpus_button","btn",n.annotateButtonClass]),onClick:e[5]||(e[5]=o=>n.annotate([-1]))}," Annotate ",2),h("button",{class:Wt(["corpus_button","btn",n.annotateButtonClass]),onClick:e[6]||(e[6]=o=>n.annotate(null))}," Annotate (Reset) ",2)])):Ut("",!0)]),e[7]||(e[7]=h("br",null,null,-1)),i.showPre?(R(),z("pre",su,At(JSON.stringify(s.corpus)),1)):Ut("",!0),e[8]||(e[8]=h("h4",null,"paragraphs",-1)),(R(!0),z(Q,null,ae(s.corpus.paragraphs,(o,a)=>(R(),me(r,{key:a,p:o,index:a,remote:s.remote,onAnnotateP:n.onAnnotateP,onReannotateP:n.onReannotateP},null,8,["p","index","remote","onAnnotateP","onReannotateP"]))),128))])):Ut("",!0)])}const iu=gt(Ya,[["render",lu],["__scopeId","data-v-5f4c7188"]]),nu={components:{Corpus:iu},data(){return{api:new nt,sampleHost:"https://parkchamchi.github.io/GlossySnake/samples/v1/",localCorpuses:JSON.parse(localStorage.getItem("localCorpuses"))||[...oi],remoteCorpuses:[],remoteSampleFilenames:[]}},watch:{localCorpuses:{handler(t){localStorage.setItem("localCorpuses",JSON.stringify(t))},deep:!0}},methods:{async updateCorpuses(){const e=await(await this.api.submit("/corpuses/")).json();this.remoteCorpuses=e},async getRemoteSamples(){await fetch(this.sampleHost).then(t=>t.json()).then(t=>{this.remoteSampleFilenames=t.filenames})},async getRemoteSampleCorpus(t){fetch(this.sampleHost+t).then(e=>e.json()).then(e=>{const s=t.replace(".corpus.json","");this.addLocalCorpus({corpus_id:s,corpus:e})}).then(()=>{this.remoteSampleFilenames=this.remoteSampleFilenames.filter(e=>e!==t)})},async addLocalCorpus({corpus_id:t,corpus:e}){this.localCorpuses.push({corpus_id:t,corpuses_history:[e]})},clearCorpuses(){this.localCorpuses=[...oi]}},created(){st.on("updateCorpuses",this.updateCorpuses),st.on("addLocalCorpus",this.addLocalCorpus),this.getRemoteSamples()},beforeDestroy(){st.off("updateCorpuses",this.updateCorpuses),st.off("addLocalCorpus",this.addLocalCorpus)}},ru={key:0},ou=["onClick"];function au(t,e,s,l,i,n){const r=bt("Corpus");return R(),z(Q,null,[h("p",{onClick:e[0]||(e[0]=(...o)=>n.clearCorpuses&&n.clearCorpuses(...o))},"[Clear data]"),i.remoteSampleFilenames.length>0?(R(),z("div",ru,[e[1]||(e[1]=h("h4",null,"Get a sample:",-1)),(R(!0),z(Q,null,ae(i.remoteSampleFilenames,(o,a)=>(R(),z("p",{class:"sampleLinkP",onClick:_=>n.getRemoteSampleCorpus(o)},At(o),9,ou))),256))])):Ut("",!0),h("div",null,[(R(!0),z(Q,null,ae(i.localCorpuses,(o,a)=>(R(),me(r,{key:a,corpus:o.corpuses_history.at(-1),corpus_id:o.corpus_id,remote:!1},null,8,["corpus","corpus_id"]))),128)),(R(!0),z(Q,null,ae(i.remoteCorpuses,(o,a)=>(R(),me(r,{key:a,corpus:o.corpuses_history.at(-1),corpus_id:o.corpus_id,remote:!0},null,8,["corpus","corpus_id"]))),128))])],64)}const uu=gt(nu,[["render",au],["__scopeId","data-v-cd1eac0f"]]),du={data(){return{api:new nt,originalText:""}},methods:{async onUploadButtonClicked(){return O.toRemote?this.uploadOriginalTextRemote():this.uploadOriginalTextLocal()},async onJsonFileInput(t){const s=await t.target.files[0].text(),l=JSON.parse(s);return O.toRemote?this.uploadJsonFileRemote(l):this.uploadJsonFileLocal(l)},async uploadOriginalTextRemote(){this.api.submit("/upload","POST",{original_text:this.originalText}).then(t=>t.json()).then(t=>{st.emit("addAlert",{message:"Uploaded corpus "+t.corpus_id})})},async uploadJsonFileRemote(t){this.api.submit("/upload","POST",{corpus:t}).then(e=>e.json()).then(e=>{st.emit("addAlert",{message:"Uploaded corpus "+e.corpus_id})})},async uploadOriginalTextLocal(){const t=this.makeTitle(this.originalText),e=ja.init_with_txt(this.originalText);st.emit("addLocalCorpus",{corpus_id:t,corpus:e})},async uploadJsonFileLocal(t){const e=this.makeTitle(t.original_text);st.emit("addLocalCorpus",{corpus_id:e,corpus:t})},makeTitle(t,e=16){return t.substring(0,e)}}},mu={id:"frontend_upload_div"};function _u(t,e,s,l,i,n){return R(),z("div",mu,[e[3]||(e[3]=h("h3",null,"Upload...",-1)),e[4]||(e[4]=h("label",{for:"frontend_original_text"},"Original Text",-1)),e[5]||(e[5]=h("br",null,null,-1)),yt(h("textarea",{"onUpdate:modelValue":e[0]||(e[0]=r=>i.originalText=r),class:"context_input auto-resize field_input",name:"frontend_original_text",spellcheck:"false",autofocus:"",placeholder:"Original Text",id:"frontend_original_text_textarea"},null,512),[[xe,i.originalText]]),e[6]||(e[6]=h("br",null,null,-1)),h("button",{onClick:e[1]||(e[1]=r=>n.onUploadButtonClicked()),id:"frontend_original_text_button",class:"btn btn-primary"}," Upload "),e[7]||(e[7]=h("br",null,null,-1)),e[8]||(e[8]=h("p",null,"...or the JSON file",-1)),h("input",{type:"file",id:"json_file_input",onChange:e[2]||(e[2]=(...r)=>n.onJsonFileInput&&n.onJsonFileInput(...r))},null,32),e[9]||(e[9]=h("br",null,null,-1))])}const gu=gt(du,[["render",_u],["__scopeId","data-v-969ca212"]]),fu={props:{message:{type:String,required:!0},alertClass:{type:String,default:"alert-warning",validator(t){return["alert-success","alert-warning","alert-info","alert-light"].includes(t)}},timeout:{type:Number,default:5e4}},data(){return{showAlert:!1,alertMessage:this.message}},mounted(){this.showAlert=!0,setTimeout(()=>{this.showAlert=!1},this.timeout)}};function xu(t,e,s,l,i,n){return i.showAlert?(R(),z("div",{key:0,class:Wt(["alert",this.alertClass]),role:"alert"},At(i.alertMessage),3)):Ut("",!0)}const hu=gt(fu,[["render",xu]]),cu={components:{Alert:hu},data(){return{alerts:[],maxAlerts:3}},methods:{addAlert({message:t,alertClass:e="alert-light"}){this.alerts.length>=this.maxAlerts&&this.alerts.shift(),this.alerts.push({message:t,alertClass:e})}},created(){st.on("addAlert",this.addAlert)},beforeDestroy(){st.off("addAlert",this.addAlert)}};function pu(t,e,s,l,i,n){const r=bt("Alert");return R(),z("div",null,[(R(!0),z(Q,null,ae(i.alerts,(o,a)=>(R(),me(r,{key:a,message:o.message,timeout:o.timeout,alertClass:o.alertClass},null,8,["message","timeout","alertClass"]))),128))])}const bu=gt(cu,[["render",pu]]),ku={props:{task_id:{required:!0},status:{type:String,required:!0},target_corpus_id:{required:!0}},data(){return{api:new nt}},computed:{isAbortButtonShown(){return["READY","RUNNING"].includes(this.status)}},methods:{async abort(){this.api.submit("/tasks/"+this.task_id+"/abort")}}},wu={class:"task_wrapper"};function Au(t,e,s,l,i,n){return R(),z("div",wu,[e[1]||(e[1]=h("hr",null,null,-1)),h("p",null,[xs(" Task: "+At(s.task_id)+" ",1),n.isAbortButtonShown?(R(),z("button",{key:0,class:"task_button btn btn-light",onClick:e[0]||(e[0]=r=>n.abort())}," Abort ")):Ut("",!0),xs(" for corpus: "+At(s.target_corpus_id)+" ("+At(s.status)+") ",1)])])}const Eu=gt(ku,[["render",Au]]),vu={components:{Task:Eu},data(){return{api:new nt,tasks:[]}},methods:{async updateTasks(){const e=await(await this.api.submit("/tasks/")).json();this.tasks=e}},created(){st.on("updateTasks",this.updateTasks)},beforeDestroy(){st.off("updateTasks",this.updateTasks)}};function yu(t,e,s,l,i,n){const r=bt("Task");return R(),z(Q,null,[e[0]||(e[0]=h("h3",null,"Tasks",-1)),h("div",null,[(R(!0),z(Q,null,ae(i.tasks,(o,a)=>(R(),me(r,{key:a,task_id:o.task_id,status:o.status,target_corpus_id:o.target_corpus_id},null,8,["task_id","status","target_corpus_id"]))),128))])],64)}const Tu=gt(vu,[["render",yu]]),Du={components:{Header:ea,RestAuth:ra,AnnotatorSelect:xa,LocalAnnotatorOptions:Na,CorpusesView:uu,UploadView:gu,AlertsView:bu,TasksView:Tu},data(){return{}}};function Su(t,e,s,l,i,n){const r=bt("Header"),o=bt("RestAuth"),a=bt("AnnotatorSelect"),_=bt("LocalAnnotatorOptions"),m=bt("CorpusesView"),f=bt("UploadView"),k=bt("AlertsView"),N=bt("TasksView");return R(),z(Q,null,[h("header",null,[et(r)]),h("main",null,[et(o),e[0]||(e[0]=h("hr",null,null,-1)),et(a),e[1]||(e[1]=h("hr",null,null,-1)),et(_),e[2]||(e[2]=h("hr",null,null,-1)),et(m),e[3]||(e[3]=h("hr",null,null,-1)),et(f),e[4]||(e[4]=h("hr",null,null,-1)),et(k),e[5]||(e[5]=h("hr",null,null,-1)),et(N)])],64)}const Nu=gt(Du,[["render",Su],["__scopeId","data-v-26848532"]]);Qo(Nu).mount("#app");
