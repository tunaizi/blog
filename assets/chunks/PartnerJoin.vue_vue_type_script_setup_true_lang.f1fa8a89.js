import{n as a,r as o,g as n,h as l,c as s,e as p,b as i,k as _}from"./framework.8a6edf47.js";import{P as m,a as u,C as c}from"./CallToActionSection.d45a4680.js";import{d as h}from"./partners.1f75286d.js";import{P as f}from"./PartnerCard.3070ddeb.js";const A=a({__name:"PartnerHero",props:{title:{}},setup(r){return(t,e)=>(o(),n(m,null,{title:l(()=>[s(p(t.title||"Vue 合作伙伴"),1)]),lead:l(()=>e[0]||(e[0]=[i("p",null,[s(" Vue 合作伙伴是 Vue 团队认可提供一流 Vue 咨询和开发服务的机构。如果你的公司有兴趣被列为合作伙伴，请"),i("a",{href:"https://airtable.com/shrCQhat57SApJI2l",target:"_blank"},"在此注册"),s("。 ")],-1)])),_:1}))}}),C=a({__name:"PartnerList",props:{filter:{type:Function},showLinkToAll:{type:Boolean}},setup(r){const t=r;return(e,k)=>(o(),n(u,{items:_(h),filter:t.filter,cardComponent:f,showLinkToAll:t.showLinkToAll,browseLinkText:"Browse More Developers",browseLinkUrl:"./all.html",shuffleItems:""},null,8,["items","filter","showLinkToAll"]))}}),P=a({__name:"PartnerJoin",setup(r){return(t,e)=>(o(),n(c,{title:"通过 Vue 发展你的业务",description:"引领新的项目，赢得客户的信任，并支持 Vue.js 及其生态系统的长期可持续性。",link:"https://airtable.com/shrCQhat57SApJI2l",linkText:"成为合作伙伴"}))}});export{A as _,C as a,P as b};