import{_ as f,r as s,i as o,b as t,n as b,g as j,h as C,A as L,k as e,B,m as _,e as i,j as P,c as z,o as I,p as M}from"./framework.8a6edf47.js";import{t as g,g as u,a as $,n as x}from"./utils.86e0512b.js";const A={},H={xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2",width:"20",height:"20"};function N(h,n){return s(),o("svg",H,n[0]||(n[0]=[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"},null,-1),t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15 11a3 3 0 11-6 0 3 3 0 016 0z"},null,-1)]))}const O=f(A,[["render",N]]),T={class:"info"},q=["href"],D=["src"],E=["src"],F={key:2},G={class:"region"},J={key:0},K={key:1},Q={class:"proficiency"},R=["src","alt"],S=b({__name:"PartnerCard",props:{data:{},hero:{type:Boolean},page:{type:Boolean}},setup(h){const n=h,{name:a,intro:m,region:k,logo:d,hero:y,proficiencies:v,flipLogo:l,website:w}=n.data;return(r,p)=>(s(),j(B(r.page?"div":"a"),{class:L(["partner-card",{hero:r.hero,page:r.page,flipLogo:e(l)}]),href:"/partners/"+e(x)(e(a))+".html"},{default:C(()=>[t("div",T,[t("a",{href:e(w).url,target:"_blank",onClick:p[0]||(p[0]=(...c)=>e(g)&&e(g)(...c))},[r.hero&&e(l)?(s(),o("img",{key:0,class:"logo dark",src:e(u)(e(d),e(l))},null,8,D)):_("",!0),r.hero?(s(),o("img",{key:1,class:"logo",src:e(u)(e(d))},null,8,E)):(s(),o("h3",F,i(e(a)),1))],8,q),t("p",G,[P(O),z(" "+i(e(k).join(", ")),1)]),t("p",null,i(e(m)),1),r.hero?(s(),o("h4",J,"精通的领域")):_("",!0),r.hero?(s(),o("p",K,[(s(!0),o(I,null,M(e(v),c=>(s(),o("span",Q,i(c),1))),256))])):_("",!0)]),t("img",{class:"big",src:e($)(e(y),e(a)),alt:e(a)+" hero"},null,8,R)]),_:1},8,["class","href"]))}});const W=f(S,[["__scopeId","data-v-9ebf9268"]]);export{W as P};
