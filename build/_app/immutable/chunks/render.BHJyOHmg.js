import{d as V,i as R,j as A,k as C,m as M,o as I,p as T,q as P,H as Y,r as j,t as E,v as g,w as D,x as q,y as p,z as B,A as $,B as z,C as F,D as G,E as J,F as W,G as K,I as Q,h as b,J as U,c as X}from"./runtime.Bn4r8nqZ.js";import{c as Z}from"./disclose-version.CKqln0LR.js";const x=["touchstart","touchmove"];function rr(r){return x.includes(r)}const er=new Set,O=new Set;function m(r){var N;var e=this,n=e.ownerDocument,c=r.type,o=((N=r.composedPath)==null?void 0:N.call(r))||[],t=o[0]||r.target,f=0,_=r.__root;if(_){var u=o.indexOf(_);if(u!==-1&&(e===document||e===window)){r.__root=e;return}var h=o.indexOf(e);if(h===-1)return;u<=h&&(f=u)}if(t=o[f]||r.target,t!==e){V(r,"currentTarget",{configurable:!0,get(){return t||n}});var w=M,i=I;R(null),A(null);try{for(var a,s=[];t!==null;){var d=t.assignedSlot||t.parentNode||t.host||null;try{var l=t["__"+c];if(l!==void 0&&!t.disabled)if(C(l)){var[H,...L]=l;H.apply(t,[r,...L])}else l.call(t,r)}catch(y){a?s.push(y):a=y}if(r.cancelBubble||d===e||d===null)break;t=d}if(a){for(let y of s)queueMicrotask(()=>{throw y});throw a}}finally{r.__root=e,delete r.currentTarget,R(w),A(i)}}}function sr(r,e){var n=e==null?"":typeof e=="object"?e+"":e;n!==(r.__t??(r.__t=r.nodeValue))&&(r.__t=n,r.nodeValue=n==null?"":n+"")}function tr(r,e){return k(r,e)}function ir(r,e){T(),e.intro=e.intro??!1;const n=e.target,c=b,o=p;try{for(var t=P(n);t&&(t.nodeType!==8||t.data!==Y);)t=j(t);if(!t)throw E;g(!0),D(t),q();const f=k(r,{...e,anchor:t});if(p===null||p.nodeType!==8||p.data!==B)throw $(),E;return g(!1),f}catch(f){if(f===E)return e.recover===!1&&z(),T(),F(n),g(!1),tr(r,e);throw f}finally{g(c),D(o)}}const v=new Map;function k(r,{target:e,anchor:n,props:c={},events:o,context:t,intro:f=!0}){T();var _=new Set,u=i=>{for(var a=0;a<i.length;a++){var s=i[a];if(!_.has(s)){_.add(s);var d=rr(s);e.addEventListener(s,m,{passive:d});var l=v.get(s);l===void 0?(document.addEventListener(s,m,{passive:d}),v.set(s,1)):v.set(s,l+1)}}};u(G(er)),O.add(u);var h=void 0,w=J(()=>{var i=n??e.appendChild(W());return K(()=>{if(t){Q({});var a=X;a.c=t}o&&(c.$$events=o),b&&Z(i,null),h=r(i,c)||{},b&&(I.nodes_end=p),t&&U()}),()=>{var d;for(var a of _){e.removeEventListener(a,m);var s=v.get(a);--s===0?(document.removeEventListener(a,m),v.delete(a)):v.set(a,s)}O.delete(u),i!==n&&((d=i.parentNode)==null||d.removeChild(i))}});return S.set(h,w),h}let S=new WeakMap;function or(r,e){const n=S.get(r);return n?(S.delete(r),n(e)):Promise.resolve()}export{ir as h,tr as m,sr as s,or as u};