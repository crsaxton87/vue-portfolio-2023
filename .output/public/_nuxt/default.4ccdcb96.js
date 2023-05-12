import{_ as E}from"./nuxt-link.6a51fdce.js";import{N as T,T as B,o as a,j as l,u as t,t as p,k as y,c as C,R as f,E as b,Y as z,f as N,Z as j,$ as I,a0 as F,r as L,a1 as R,m as e,D as c,F as V,l as U,W as H,X as M,q as P,a2 as $,a3 as q,v as D}from"./entry.8ed8e3db.js";import{_ as k}from"./HeroIcons.f5dd9299.js";const W={class:"flex flex-col justify-between leading-8 md:flex-row"},A={key:0},O={key:1,class:"mr-4 italic text-accent3/75"},X={__name:"LoginButton",setup(v){const o=T(),{loggedIn:i,currentUser:d}=B(o),{error:n,logout:g}=z(),x=async()=>{await g(),n.value||(o.logOut(),o.currentUser=null)};return(w,s)=>{const u=E;return a(),l("div",W,[t(n)?(a(),l("span",A,p(t(n).message),1)):y("",!0),t(d)?(a(),l("span",O,"Logged in as "+p(t(d).email),1)):y("",!0),t(i)?(a(),C(u,{key:2,to:"/userentry",class:"text-accent2 active:text-accent3",onClick:s[0]||(s[0]=r=>x())},{default:f(()=>[b("Logout")]),_:1})):(a(),C(u,{key:3,to:"/userentry",class:"text-accent2 active:text-accent3"},{default:f(()=>[b("Login")]),_:1}))])}}},S=v=>(H("data-v-6be9dae1"),v=v(),M(),v),Y={class:"absolute left-0 top-0 h-full w-full"},Z={class:"cart"},G=S(()=>e("h3",{class:"absolute left-5 top-5"},"Cart",-1)),J={class:"flex justify-end"},K={class:"mt-5 grid grid-cols-2 items-center"},Q=S(()=>e("div",{class:"font-bold"},"Cart Total:",-1)),tt={class:"text-right font-bold"},et={__name:"ProductCart",emits:["cartToggle"],setup(v,{emit:o}){j(_=>({"614f4c08":t(x),"04ec930b":w})),I(()=>{window.addEventListener("resize",u)}),F(()=>{window.removeEventListener("resize",u)});const i=T(),{cart:d,cartSize:n,cartTotal:g}=B(i),x=L(null),w=document.getElementsByTagName("header")[0].offsetHeight+"px",s=L(document.getElementById("cart-navbar").getBoundingClientRect()),u=()=>{s.value=document.getElementById("cart-navbar").getBoundingClientRect(),r()},r=()=>{x.value=window.innerWidth.toFixed()-s.value.right.toFixed()-15+"px"};return r(),R(n,()=>{n.value||o("cartToggle")}),(_,h)=>(a(),l("div",Y,[e("div",Z,[G,c(k,{icon:"x",class:"absolute right-4 top-5 cursor-pointer hover:text-accent3 active:text-accent2",onClick:h[0]||(h[0]=m=>o("cartToggle"))}),(a(!0),l(V,null,U(t(d),m=>(a(),l("div",{key:m.id,class:"mt-2 grid w-full grid-cols-2"},[e("span",null,p(m.title)+" ("+p(m.quantity)+")",1),e("div",J,[c(k,{icon:"trash",class:"ml-2 cursor-pointer hover:text-accent3 active:text-accent2",onClick:lt=>t(i).removeFromCart(m.id)},null,8,["onClick"]),e("span",null,"$"+p(m.price),1)])]))),128)),e("div",K,[Q,e("div",tt,"$"+p(t(g).toFixed(2)),1)])]),e("div",{class:"absolute left-0 top-0 z-10 m-0 h-full w-full bg-white bg-opacity-50 p-0",onClick:h[1]||(h[1]=m=>o("cartToggle"))})]))}},st=N(et,[["__scopeId","data-v-6be9dae1"]]),ot={class:"left-0 top-0 z-30 w-full"},at={class:"flex flex-col text-left leading-8 md:flex-row md:justify-normal"},nt={class:"flex flex-row items-end justify-between md:justify-normal"},ct={key:0,class:"text-sm font-bold uppercase"},rt=e("div",{class:"gradient-hr mb-5 w-full sm:mb-10"},null,-1),_t={__name:"default",async setup(v){let o,i;const d=T(),{cartVisible:n,cartSize:g}=B(d),{user:x}=([o,i]=P(()=>D()),o=await o,i(),o);d.setCurrentUser(x.value);const w=()=>{n.value=!n.value},s=L(!1);return(u,r)=>{const _=E;return a(),l("div",null,[e("header",ot,[e("nav",{class:"bg-white px-6 py-6 md:py-4",onClick:r[0]||(r[0]=h=>s.value=!t(s))},[e("div",{class:$(["container mx-auto flex-col items-center justify-between md:flex md:flex-row",{hidden:!t(s)}])},[e("div",at,[c(_,{class:"navbar-item",to:"/"},{default:f(()=>[b("Home")]),_:1}),c(_,{class:"navbar-item",to:"/create"},{default:f(()=>[b("Create Post")]),_:1}),c(_,{class:"navbar-item",to:"/products"},{default:f(()=>[b("Store")]),_:1}),c(_,{class:"navbar-item",to:"/chatroom"},{default:f(()=>[b("Chat Room")]),_:1})]),e("div",nt,[t(g)?(a(),C(_,{key:0,id:"cart-navbar",class:"navbar-item order-2 flex cursor-pointer pb-1 md:-order-1",onClick:w},{default:f(()=>[c(k,{icon:"cart"}),e("span",null," ("+p(t(g))+")",1)]),_:1})):y("",!0),e("div",null,[c(X)])])],2)]),e("div",{class:$(["absolute top-3 flex cursor-pointer items-center text-accent3 hover:text-accent2 md:hidden",{"right-6":t(s),"right-5":!t(s),"top-7":t(s)}]),onClick:r[1]||(r[1]=h=>s.value=!t(s))},[t(s)?y("",!0):(a(),l("span",ct,"Menu")),c(k,{icon:"burger"})],2),rt]),t(n)?(a(),C(st,{key:0,onCartToggle:w})):y("",!0),e("div",{id:"app",class:$(["container mx-auto pb-5",{"blur-sm":t(n)}])},[q(u.$slots,"default")],2)])}}};export{_t as default};
