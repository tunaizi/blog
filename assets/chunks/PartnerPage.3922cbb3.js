import{n as a,r,i as s,b as e,j as n,k as t,c as i,e as o,o as c,p as l,m as p,_ as d}from"./framework.233c72da.js";import{d as f,n as h,P as m,t as k}from"./PartnerCard.b4ff345a.js";import{c as u}from"./index.b06713ba.js";const g={class:"partner-page"},b={class:"back"},v={href:"/partners/all.html"},_={class:"description"},j=["innerHTML"],P={class:"actions"},C=["href"],L=["href"],w={key:0,class:"hiring"},x=["href"],H=d(a({__name:"PartnerPage",props:{partner:{}},setup(a){const d=a,H=f.find((a=>h(a.name)===d.partner)),{name:M,description:T,hiring:V,contact:y,website:A}=H;return(a,d)=>{return r(),s("div",g,[e("div",b,[e("a",v,[n(t(u),{class:"icon"}),d[3]||(d[3]=i("Back to all partners"))])]),n(m,{hero:"",page:"",data:t(H)},null,8,["data"]),e("div",_,[e("h2",null,"About "+o(t(M)),1),(r(!0),s(c,null,l(t(T),(a=>(r(),s("p",{innerHTML:a},null,8,j)))),256))]),e("div",P,[e("a",{href:t(A).url,target:"_blank",onClick:d[0]||(d[0]=(...a)=>t(k)&&t(k)(...a))},"Visit Website",8,C),e("a",{class:"contact",href:(f=t(y),`mailto:${f}?subject=Looking for a Vue.js Partner`),target:"_blank",onClick:d[1]||(d[1]=(...a)=>t(k)&&t(k)(...a))},"Contact",8,L)]),t(V)?(r(),s("div",w,[e("a",{href:t(V),onClick:d[2]||(d[2]=(...a)=>t(k)&&t(k)(...a))},o(t(M))+" is hiring!",9,x)])):p("",!0)]);var f}}}),[["__scopeId","data-v-f0d08190"]]);export{H as P};
