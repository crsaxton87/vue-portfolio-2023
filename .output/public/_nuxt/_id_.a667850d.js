import{_ as C,a as D}from"./TagPill.b1436896.js";import{r as h,J as j,H as k,b as v,q as N,K as R,L as V,j as n,u as a,t as u,k as f,m as c,F as E,l as F,D as J,c as y,v as L,M as P,o as e}from"./entry.8ed8e3db.js";import{_ as S}from"./HeroIcons.f5dd9299.js";import"./nuxt-link.6a51fdce.js";const $=_=>{const t=h(null),o=h(null);return{post:t,error:o,load:async()=>{try{const s=await j(k(v,"posts",_));if(!s.exists)throw new Error("That post does not exist");t.value={...s.data(),id:s.id}}catch(s){o.value=s.message}}}},q={class:"px-5 sm:w-full sm:px-0"},A={key:0},G={key:1},H={class:"mb-4 whitespace-pre-wrap"},K={class:"flex items-center justify-center sm:block"},M=c("span",null,"Delete Post",-1),O={__name:"[id]",async setup(_){let t,o;const{user:l}=([t,o]=N(()=>L()),t=await t,o(),t),s=R(),w=V(),{post:r,error:i,load:x}=$(s.params.id);x();const g=async()=>{const d=await k(v,"posts",s.params.id);try{await P(d)}catch(m){i.value=m.message}w.push("/")},b=()=>l.value?r.value.createdBy===l.value.email:!1;return(d,m)=>{const B=D;return e(),n("div",q,[a(i)?(e(),n("div",A,u(a(i)),1)):f("",!0),a(r)?(e(),n("div",G,[c("h2",null,u(a(r).title),1),c("p",H,u(a(r).body),1),c("div",null,[(e(!0),n(E,null,F(a(r).tags,p=>(e(),y(C,{key:p,class:"post-tags",tag:p},null,8,["tag"]))),128))]),c("div",K,[b()?(e(),n("button",{key:0,class:"button mt-4 flex h-10 justify-center",onClick:g},[J(S,{icon:"trash",class:"mr-2"}),M])):f("",!0)])])):(e(),y(B,{key:2}))])}}};export{O as default};
