import{r as l,q as k,j as d,u as o,t as x,k as B,m as e,x as v,y as h,z as y,A as w,F as C,l as T,B as c,E as A,v as K,o as m,C as S,s as U,b as q,p as N,G as D}from"./entry.8ed8e3db.js";const E={class:"mx-auto w-5/6 sm:w-3/4"},F={key:0},M=["onSubmit"],R={class:"mb-4"},j=e("h3",null,"Title",-1),z={class:"mb-4"},G=e("h3",null,"Content",-1),I={class:"mb-4"},L=e("h3",null,[A("Tags "),e("span",{class:"text-sm"},"(press enter to add tag)")],-1),P=["onKeydown"],H=e("div",{class:"mx-auto"},[e("button",{class:"button mt-2"},"Add Post")],-1),Q={__name:"Create",async setup(J){let n,f;const r=l(""),u=l(""),p=l(""),s=l(""),i=l([]),{user:g}=([n,f]=k(()=>K()),n=await n,f(),n),_=()=>{i.value.includes(s.value)||(s.value=s.value.replace(/\s/,""),i.value.push(s.value)),s.value=""},V=async()=>{const b={title:r.value,body:u.value,tags:i.value,createdAt:S(),createdBy:g.value.email};try{const t=U(q,"posts");await N(t,b)}catch(t){p.value=t.message}D({path:"/"})};return(b,t)=>(m(),d("div",E,[o(p)?(m(),d("div",F,x(o(p)),1)):B("",!0),e("form",{class:"grid sm:grid-rows-[6rem_24rem_7rem_3rem]",onSubmit:c(V,["prevent"])},[e("div",R,[j,v(e("input",{"onUpdate:modelValue":t[0]||(t[0]=a=>y(r)?r.value=a:null),class:"h-10 w-full",type:"text",required:""},null,512),[[h,o(r)]])]),e("div",z,[G,v(e("textarea",{"onUpdate:modelValue":t[1]||(t[1]=a=>y(u)?u.value=a:null),class:"h-80 min-h-[300px] w-full",required:""},null,512),[[h,o(u)]])]),e("div",I,[L,v(e("input",{"onUpdate:modelValue":t[2]||(t[2]=a=>y(s)?s.value=a:null),class:"h-10 w-full",type:"text",onKeydown:[w(c(_,["prevent"]),["enter"]),w(c(_,["prevent"]),["tab"]),w(c(_,["prevent"]),[","])]},null,40,P),[[h,o(s)]]),(m(!0),d(C,null,T(o(i),a=>(m(),d("div",{key:a,class:"pill"},"#"+x(a),1))),128))]),H],40,M)]))}};export{Q as default};
