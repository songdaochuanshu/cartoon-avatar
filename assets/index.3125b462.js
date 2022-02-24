import{o as i,c as a,u as l,r as p,a as m,F as d,b as f,d as g,e as h,f as y}from"./vendor.5f260841.js";const _=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}};_();const w=s=>`position: absolute;
right: 10%;
margin:auto;
transform: translateY(-50%);
padding: 5px 10px;
background: #fff;
border-radius: 5px;
border: 1px solid #ccc;
cursor: pointer;
text-decoration: none;`,v=(s,t,o,n)=>{const e=document.createElement("a");e.style.cssText=w(),e.innerText=o,s.appendChild(e),e.onclick=n},u=s=>{const t=document.createElement("div");t.className="big-image",t.style.cssText=`
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
  `;const o=document.createElement("img");o.src=s.target.src,o.style.cssText=`
    position: absolute;
    top: 50%;
    left: 50%;
    object-fit: contain;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
  `,t.appendChild(o),v(t,60,"download",()=>{fetch(s.target.src).then(n=>{n.blob().then(e=>{const r=window.URL.createObjectURL(e),c=document.createElement("a");c.href=r,c.download="image.jpg",c.click()})})}),document.body.appendChild(t),o.onclick=()=>{t.remove()},document.onkeydown=n=>{n.keyCode===27&&t.remove()}};var b=(s,t)=>{const o=s.__vccOpts||s;for(const[n,e]of t)o[n]=e;return o};const k=["src","alt"],x={props:{src:{type:String,default:"https://http.cat/404.jpg"},alt:{type:String,default:"Image"}},setup(s){const t=o=>{o.target.src="https://http.cat/404.jpg"};return(o,n)=>(i(),a("img",{width:"155",height:"155",src:`https://cdn.cartoon-avatar.songdaochuanshu.com/example-${s.src}.jpg`,style:{animation:"renderImage 1s",transition:"all 1s"},onError:t,onClick:n[0]||(n[0]=(...e)=>l(u)&&l(u)(...e)),alt:s.alt},null,40,k))}};var E=b(x,[["__scopeId","data-v-ca751bb6"]]);const C=g("div",null,null,-1),L={setup(s){let t=p(140);const o={init(){this.bind()},bind(){window.addEventListener("scroll",()=>{this.isBottom()&&this.loadMore()})},isBottom(){return document.documentElement.scrollTop+document.documentElement.clientHeight>=document.documentElement.scrollHeight},loadMore(){console.log("\u52A0\u8F7D\u66F4\u591A"),t.value+=20}};return m(()=>{o.init(),window.addEventListener("keydown",n=>{n.keyCode===38?window.scrollBy(0,-100):n.keyCode===40&&window.scrollBy(0,100)}),document.oncontextmenu=function(){return!1},document.onkeydown=function(){if(window.event&&window.event.keyCode==123)return!1},document.onkeydown=function(){if(window.event&&window.event.ctrlKey&&window.event.keyCode==67)return!1}}),(n,e)=>(i(),a(d,null,[C,(i(!0),a(d,null,f(l(t),r=>(i(),h(E,{key:r,src:r},null,8,["src"]))),128))],64))}};y(L).mount("#app");
