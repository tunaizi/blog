import{n as e,r as a,i as s,b as t,e as r,c as l,_ as n,t as o,V as i,f as u,l as c,q as d,s as p,Q as f,j as h,h as m,m as v,o as b,p as y,g as _}from"./framework.233c72da.js";import{d as g,P}from"./PartnerCard.b4ff345a.js";const w={class:"PartnerHero"},j={class:"title"},k=n(e({__name:"PartnerHero",props:{title:{}},setup:e=>(e,n)=>(a(),s("div",w,[t("h1",j,r(e.title||"Vue Partners"),1),n[0]||(n[0]=t("p",{class:"lead"},[l(" Vue Partners are Vue-team endorsed agencies that provide first-class Vue consulting and development services. If your company is interested in being listed as a partner, please "),t("a",{href:"https://airtable.com/shrCQhat57SApJI2l",target:"_blank"},"register your interest here"),l(". ")],-1))]))}),[["__scopeId","data-v-5698140f"]]),V={class:"PartnerList"},I={key:0,class:"browse-all",href:"./all.html"},A=n(e({__name:"PartnerList",props:{filter:{type:Function},showLinkToAll:{type:Boolean}},setup(e){const r=e,n=o(!1),w=i(g),j=u((()=>r.filter?w.value.filter(r.filter):w.value));function k(e){let a,s,t=e.length;for(;0!==t;)s=Math.floor(Math.random()*t),t-=1,a=e[t],e[t]=e[s],e[s]=a;return e}return c((()=>{n.value=!0;const e=w.value.filter((e=>e.platinum));k(e);const a=w.value.filter((e=>!e.platinum));k(a),w.value=[...e,...a]})),(e,r)=>{const o=d("ClientOnly");return p((a(),s("div",V,[h(o,null,{default:m((()=>[(a(!0),s(b,null,y(j.value,(e=>(a(),_(P,{key:e.name,data:e},null,8,["data"])))),128))])),_:1}),e.showLinkToAll&&j.value.length%2?(a(),s("a",I,r[0]||(r[0]=[l(" Browse and Search"),t("br",null,null,-1),l("All Partners ")]))):v("",!0)],512)),[[f,n.value]])}}}),[["__scopeId","data-v-99eb0528"]]);const C=n({},[["render",function(e,r){return a(),s(b,null,[r[0]||(r[0]=t("div",{class:"divider"},null,-1)),r[1]||(r[1]=t("div",{class:"join-container"},[t("h2",null,"Grow your business with Vue"),t("p",null," Generate leads for new projects, boost your credibility to your clients, and support the long term sustainability of Vue.js and its ecosystem. "),t("a",{class:"join",href:"https://airtable.com/shrCQhat57SApJI2l",target:"_blank"},"Become a partner")],-1))],64)}],["__scopeId","data-v-f2e1bfc5"]]);export{k as P,A as a,C as b};
