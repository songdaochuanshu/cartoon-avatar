import{o as l,c as p,u as d,r as a,a as g,b as h,F as y,d as v,e as w}from"./vendor.2fe795a8.js";const _=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=n(e);fetch(e.href,s)}};_();const b=o=>`position: absolute;
right: 10%;
margin:auto;
transform: translateY(-50%);
padding: 5px 10px;
background: #fff;
border-radius: 5px;
border: 1px solid #ccc;
cursor: pointer;
text-decoration: none;`,k=(o,t,n,r)=>{const e=document.createElement("a");e.style.cssText=b(),e.innerText=n,o.appendChild(e),e.onclick=r},m=o=>{const t=document.createElement("div");t.className="big-image",t.style.cssText=`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999; 
    display: flex;
    justify-content: center;
    align-items: center;
  `;const n=document.createElement("img");n.src=o.target.src,n.style.cssText=`
    position: absolute;
    top: 50%;
    left: 50%;
    object-fit: contain;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
  `,t.appendChild(n),k(t,60,"download",()=>{fetch(o.target.src).then(r=>{r.blob().then(e=>{const s=window.URL.createObjectURL(e),c=document.createElement("a");c.href=s,c.download="image.jpg",c.click()})})}),document.body.appendChild(t),n.onclick=()=>{t.remove()},document.onkeydown=r=>{r.keyCode===27&&t.remove()}};var x=(o,t)=>{const n=o.__vccOpts||o;for(const[r,e]of t)n[r]=e;return n};const E=["src","alt"],C={props:{src:{type:String,default:"https://http.cat/404.jpg"},alt:{type:String,default:"Image"}},setup(o){const t=n=>{n.target.src="https://http.cat/404.jpg"};return(n,r)=>(l(),p("img",{width:"155",height:"155",src:o.src,style:{animation:"renderImage 1s",transition:"all 1s"},onError:t,onClick:r[0]||(r[0]=(...e)=>d(m)&&d(m)(...e)),alt:o.alt},null,40,E))}};var I=x(C,[["__scopeId","data-v-3a1c8e25"]]);const L=()=>{window.addEventListener("keydown",o=>{o.keyCode===38?window.scrollBy(0,-100):o.keyCode===40&&window.scrollBy(0,100)}),document.oncontextmenu=function(){return!1},document.onkeydown=function(){if(window.event&&window.event.keyCode==123)return!1},document.onkeydown=function(){if(window.event&&window.event.ctrlKey&&window.event.keyCode==67)return!1}};const j={setup(o){let t=a(140),n=a([]),r=a([]);fetch(`${location.pathname}json/avatar.json`).then(i=>i.json()).then(i=>{n.value=i,s()});const e=i=>`${location.pathname}avatar/${i}`,s=()=>{r.value=n.value.slice(0,t.value)},c=()=>{t.value+=20,s()},f={init(){this.bind()},bind(){window.addEventListener("scroll",()=>{this.isBottom()&&this.loadMore()})},isBottom(){return document.documentElement.scrollTop+document.documentElement.clientHeight>=document.documentElement.scrollHeight},loadMore(){c()}};return g(()=>{console.log(),f.init(),L()}),(i,B)=>(l(!0),p(y,null,h(d(r),u=>(l(),v(I,{key:u,src:`${e(u)}`},null,8,["src"]))),128))}};w(j).mount("#app");
