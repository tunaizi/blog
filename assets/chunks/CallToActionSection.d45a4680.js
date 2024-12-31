import{n as y,t as C,V as T,f as $,l as w,q as I,s as L,Q as b,r as t,i as o,j as A,h as B,e as _,m as r,o as j,p as S,g as M,B as P,_ as h,b as f,d as p}from"./framework.8a6edf47.js";const D={class:"card-list"},H=["href"],O=y({__name:"CardList",props:{items:{},filter:{},cardComponent:{},showLinkToAll:{type:Boolean,default:!1},shuffleItems:{type:Boolean,default:!1},browseLinkText:{},browseLinkUrl:{},splitBy:{default:"platinum"}},setup(i){const e=i,d=C(!1),c=T([...e.items]),v=$(()=>e.filter?c.value.filter(e.filter):c.value);w(()=>{d.value=!0,c.value=g([...c.value],e.splitBy,e.shuffleItems)});function g(s,n,a){const l=s.filter(u=>u[n]),m=s.filter(u=>!u[n]);return a&&(k(l),k(m)),[...l,...m]}function k(s){for(let n=s.length-1;n>0;n--){const a=Math.floor(Math.random()*(n+1));[s[n],s[a]]=[s[a],s[n]]}}return(s,n)=>{const a=I("ClientOnly");return L((t(),o("div",D,[A(a,null,{default:B(()=>[(t(!0),o(j,null,S(v.value,l=>(t(),M(P(s.cardComponent),{key:l.id||l.name,data:l},null,8,["data"]))),128))]),_:1}),s.showLinkToAll&&v.value.length%2?(t(),o("a",{key:0,href:s.browseLinkUrl,class:"browse-all-link"},_(s.browseLinkText),9,H)):r("",!0)],512)),[[b,d.value]])}}});const X=h(O,[["__scopeId","data-v-4edaff79"]]);const U={},q={class:"page-hero"},Q={class:"page-hero__title"},R={class:"page-hero__lead"};function V(i,e){return t(),o("div",q,[f("h1",Q,[p(i.$slots,"title",{},void 0,!0)]),f("div",R,[p(i.$slots,"lead",{},void 0,!0)])])}const Y=h(U,[["render",V],["__scopeId","data-v-1503e709"]]),z={class:"cta-section"},E={key:0,class:"cta-divider"},F={class:"cta-content"},G={key:0,class:"cta-title"},J={key:1,class:"cta-description"},K=["href"],N=y({__name:"CallToActionSection",props:{title:{},description:{},link:{},linkText:{},showDivider:{type:Boolean,default:!0}},setup(i){return(e,d)=>(t(),o("section",z,[e.showDivider?(t(),o("div",E)):r("",!0),f("div",F,[e.title?(t(),o("h2",G,_(e.title),1)):r("",!0),e.description?(t(),o("p",J,_(e.description),1)):r("",!0),e.link?(t(),o("a",{key:2,href:e.link,target:"_blank",class:"cta-link"},_(e.linkText),9,K)):r("",!0),p(e.$slots,"default",{},void 0,!0)])]))}});const Z=h(N,[["__scopeId","data-v-a51fe4a4"]]);export{Z as C,Y as P,X as a};