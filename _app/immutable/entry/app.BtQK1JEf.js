const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../nodes/0.CfsAid4f.js","../chunks/disclose-version.ByHntcMO.js","../chunks/runtime.C8ytKs80.js","../assets/0.BHvnX3IE.css","../nodes/1.D1ItF9UQ.js","../chunks/legacy.xZwYxfvP.js","../chunks/render.DBO6JZhE.js","../chunks/lifecycle.DfdZmDtB.js","../chunks/entry.DWDENOM_.js","../chunks/index-client.BafsxlIS.js","../nodes/2.aco2jCk-.js","../chunks/attributes.CU1vZfnN.js","../assets/2.DGM6TRHQ.css","../nodes/3.BIgh9BBc.js","../assets/3.Cf_YwoWn.css","../nodes/4.rREP4vyn.js","../chunks/props.Ct1_hcoR.js","../assets/4.BvAYDXh-.css"])))=>i.map(i=>d[i]);
var z=e=>{throw TypeError(e)};var G=(e,t,r)=>t.has(e)||z("Cannot "+r);var u=(e,t,r)=>(G(e,t,"read from private field"),r?r.call(e):t.get(e)),S=(e,t,r)=>t.has(e)?z("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),C=(e,t,r,i)=>(G(e,t,"write to private field"),i?i.call(e,r):t.set(e,r),r);import{h as J,J as M,a1 as Q,a2 as X,T as $,K as tt,a6 as et,av as rt,aw as st,b as at,ax as nt,U as ot,g as v,ag as it,Z as T,ay as ct,w as ut,ai as lt,p as ft,u as dt,a as mt,az as ht,q as O,v as _t,s as vt,aA as j,m as gt,n as yt,t as Et,f as D}from"../chunks/runtime.C8ytKs80.js";import{h as bt,m as Pt,u as Rt,s as wt}from"../chunks/render.DBO6JZhE.js";import{a as R,t as W,c as I,d as kt}from"../chunks/disclose-version.ByHntcMO.js";import{p as V,a as xt,i as q}from"../chunks/props.Ct1_hcoR.js";import{o as At}from"../chunks/index-client.BafsxlIS.js";function B(e,t,r){J&&M();var i=e,n,o;Q(()=>{n!==(n=t())&&(o&&(et(o),o=null),n&&(o=$(()=>r(i,n))))},X),J&&(i=tt)}function K(e,t){return e===t||(e==null?void 0:e[ot])===t}function U(e={},t,r,i){return rt(()=>{var n,o;return st(()=>{n=o,o=[],at(()=>{e!==r(...o)&&(t(e,...o),n&&K(r(...n),e)&&t(null,...n))})}),()=>{nt(()=>{o&&K(r(...o),e)&&t(null,...o)})}}),e}function Ot(e){return class extends Tt{constructor(t){super({component:e,...t})}}}var g,f;class Tt{constructor(t){S(this,g);S(this,f);var o;var r=new Map,i=(a,s)=>{var d=lt(s);return r.set(a,d),d};const n=new Proxy({...t.props||{},$$events:{}},{get(a,s){return v(r.get(s)??i(s,Reflect.get(a,s)))},has(a,s){return s===it?!0:(v(r.get(s)??i(s,Reflect.get(a,s))),Reflect.has(a,s))},set(a,s,d){return T(r.get(s)??i(s,d),d),Reflect.set(a,s,d)}});C(this,f,(t.hydrate?bt:Pt)(t.component,{target:t.target,anchor:t.anchor,props:n,context:t.context,intro:t.intro??!1,recover:t.recover})),(!((o=t==null?void 0:t.props)!=null&&o.$$host)||t.sync===!1)&&ct(),C(this,g,n.$$events);for(const a of Object.keys(u(this,f)))a==="$set"||a==="$destroy"||a==="$on"||ut(this,a,{get(){return u(this,f)[a]},set(s){u(this,f)[a]=s},enumerable:!0});u(this,f).$set=a=>{Object.assign(n,a)},u(this,f).$destroy=()=>{Rt(u(this,f))}}$set(t){u(this,f).$set(t)}$on(t,r){u(this,g)[t]=u(this,g)[t]||[];const i=(...n)=>r.call(this,...n);return u(this,g)[t].push(i),()=>{u(this,g)[t]=u(this,g)[t].filter(n=>n!==i)}}$destroy(){u(this,f).$destroy()}}g=new WeakMap,f=new WeakMap;const Lt="modulepreload",St=function(e,t){return new URL(e,t).href},N={},x=function(t,r,i){let n=Promise.resolve();if(r&&r.length>0){const a=document.getElementsByTagName("link"),s=document.querySelector("meta[property=csp-nonce]"),d=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));n=Promise.allSettled(r.map(l=>{if(l=St(l,i),l in N)return;N[l]=!0;const y=l.endsWith(".css"),L=y?'[rel="stylesheet"]':"";if(!!i)for(let E=a.length-1;E>=0;E--){const c=a[E];if(c.href===l&&(!y||c.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${L}`))return;const h=document.createElement("link");if(h.rel=y?"stylesheet":Lt,y||(h.as="script"),h.crossOrigin="",h.href=l,d&&h.setAttribute("nonce",d),document.head.appendChild(h),y)return new Promise((E,c)=>{h.addEventListener("load",E),h.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${l}`)))})}))}function o(a){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=a,window.dispatchEvent(s),!s.defaultPrevented)throw a}return n.then(a=>{for(const s of a||[])s.status==="rejected"&&o(s.reason);return t().catch(o)})},Jt={};var Ct=W('<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'),jt=W("<!> <!>",1);function Dt(e,t){ft(t,!0);let r=V(t,"components",23,()=>[]),i=V(t,"data_0",3,null),n=V(t,"data_1",3,null);dt(()=>t.stores.page.set(t.page)),mt(()=>{t.stores,t.page,t.constructors,r(),t.form,i(),n(),t.stores.page.notify()});let o=j(!1),a=j(!1),s=j(null);At(()=>{const c=t.stores.page.subscribe(()=>{v(o)&&(T(a,!0),ht().then(()=>{T(s,xt(document.title||"untitled page"))}))});return T(o,!0),c});const d=D(()=>t.constructors[1]);var l=jt(),y=O(l);{var L=c=>{var _=I();const w=D(()=>t.constructors[0]);var k=O(_);B(k,()=>v(w),(b,P)=>{U(P(b,{get data(){return i()},get form(){return t.form},children:(m,qt)=>{var Y=I(),Z=O(Y);B(Z,()=>v(d),(p,H)=>{U(H(p,{get data(){return n()},get form(){return t.form}}),A=>r()[1]=A,()=>{var A;return(A=r())==null?void 0:A[1]})}),R(m,Y)},$$slots:{default:!0}}),m=>r()[0]=m,()=>{var m;return(m=r())==null?void 0:m[0]})}),R(c,_)},F=c=>{var _=I();const w=D(()=>t.constructors[0]);var k=O(_);B(k,()=>v(w),(b,P)=>{U(P(b,{get data(){return i()},get form(){return t.form}}),m=>r()[0]=m,()=>{var m;return(m=r())==null?void 0:m[0]})}),R(c,_)};q(y,c=>{t.constructors[1]?c(L):c(F,!1)})}var h=_t(y,2);{var E=c=>{var _=Ct(),w=gt(_);{var k=b=>{var P=kt();Et(()=>wt(P,v(s))),R(b,P)};q(w,b=>{v(a)&&b(k)})}yt(_),R(c,_)};q(h,c=>{v(o)&&c(E)})}R(e,l),vt()}const Kt=Ot(Dt),Nt=[()=>x(()=>import("../nodes/0.CfsAid4f.js"),__vite__mapDeps([0,1,2,3]),import.meta.url),()=>x(()=>import("../nodes/1.D1ItF9UQ.js"),__vite__mapDeps([4,1,2,5,6,7,8,9]),import.meta.url),()=>x(()=>import("../nodes/2.aco2jCk-.js"),__vite__mapDeps([10,1,2,5,11,12]),import.meta.url),()=>x(()=>import("../nodes/3.BIgh9BBc.js"),__vite__mapDeps([13,1,2,5,14]),import.meta.url),()=>x(()=>import("../nodes/4.rREP4vyn.js"),__vite__mapDeps([15,1,2,5,6,16,11,7,17]),import.meta.url)],Wt=[],Zt={"/":[2],"/about":[3],"/research":[4]},It={handleError:({error:e})=>{console.error(e)},reroute:()=>{},transport:{}},Vt=Object.fromEntries(Object.entries(It.transport).map(([e,t])=>[e,t.decode])),pt=(e,t)=>Vt[e](t);export{pt as decode,Vt as decoders,Zt as dictionary,It as hooks,Jt as matchers,Nt as nodes,Kt as root,Wt as server_loads};