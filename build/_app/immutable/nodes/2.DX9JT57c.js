import{a as f,b as e}from"../chunks/disclose-version.CKqln0LR.js";import"../chunks/legacy.leDhLNVH.js";import{g as n,h as g,b as _,s as h,f as c}from"../chunks/runtime.Bn4r8nqZ.js";import{b as d}from"../chunks/paths.DubUHWF3.js";function b(s,r,o,t){var a=s.__attributes??(s.__attributes={});g&&(a[r]=s.getAttribute(r),s.nodeName==="LINK")||a[r]!==(a[r]=o)&&(o==null?s.removeAttribute(r):typeof o!="string"&&u(s).includes(r)?s[r]=o:s.setAttribute(r,o))}var p=new Map;function u(s){var r=p.get(s.nodeName);if(r)return r;p.set(s.nodeName,r=[]);for(var o,t=s,a=Element.prototype;a!==t;){o=_(t);for(var i in o)o[i].set&&r.push(i);t=n(t)}return r}var v=e("<h1>This is Heather Do's website</h1> <a>About me</a>",1);function y(s){var r=v(),o=h(c(r),2);b(o,"href",`${d??""}/about`),f(s,r)}export{y as component};