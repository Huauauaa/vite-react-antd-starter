import{u as E,a as R,M as l,O as h,l as m,R as v,b as i,C as y,z as g,H as _}from"./vendor.c165dc31.js";const L=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}};L();const $="modulepreload",u={},O="/vite-react-antd-starter/",d=function(o,a){return!a||a.length===0?o():Promise.all(a.map(n=>{if(n=`${O}${n}`,n in u)return;u[n]=!0;const e=n.endsWith(".css"),t=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${t}`))return;const r=document.createElement("link");if(r.rel=e?"stylesheet":$,e||(r.as="script",r.crossOrigin=""),r.href=n,document.head.appendChild(r),e)return new Promise((f,p)=>{r.addEventListener("load",f),r.addEventListener("error",p)})})).then(()=>o())};function s(){const c=E(),o=R(),a=c.pathname,n=({key:e})=>{c.pathname!==e&&o(e,{replace:!0})};return React.createElement(React.Fragment,null,React.createElement(l,{onClick:n,mode:"horizontal",selectedKeys:[a]},React.createElement(l.Item,{key:"/"},"Home"),React.createElement(l.Item,{key:"/about"},"About")),React.createElement(h,null))}s.propTypes={};s.defaultProps={};const b=m(()=>d(()=>import("./AboutView.0c3bc1ce.js"),["assets/AboutView.0c3bc1ce.js","assets/mock.1f16187f.js","assets/vendor.c165dc31.js"])),P=m(()=>d(()=>import("./HomeView.25bcc362.js"),["assets/HomeView.25bcc362.js","assets/vendor.c165dc31.js","assets/mock.1f16187f.js"]));function x(){return React.createElement(v,null,React.createElement(i,{element:React.createElement(s,null)},React.createElement(i,{path:"/",element:React.createElement(P,null)}),React.createElement(i,{path:"/about",element:React.createElement(b,null)})))}ReactDOM.render(React.createElement(y,{locale:g},React.createElement(_,null,React.createElement(x,null))),document.getElementById("root"));
