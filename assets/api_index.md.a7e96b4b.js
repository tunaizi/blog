import{n as y,t as x,l as I,f as A,r,i as n,b as a,s as b,u as P,o as p,p as c,e as o,m as j,k as w,w as O,_ as S,j as q}from"./chunks/framework.8a6edf47.js";const v=JSON.parse("[]"),J={id:"api-index"},N={class:"header"},z={class:"api-filter"},B=["id"],C={class:"api-groups"},D=["href"],E={key:0,class:"no-match"},G=y({__name:"ApiIndex",setup(m){console.log(v,"apiIndex");const u=x(),d=x(""),_=l=>l.toLowerCase().replace(/-/g," ");I(()=>{var l;(l=u.value)==null||l.focus()});const h=A(()=>{const l=_(d.value),s=e=>_(e).includes(l);return v.map(e=>{if(s(e.text))return e;const i=e.items.map(t=>{if(s(t.text)||l.includes("ssr")&&t.text.startsWith("Server"))return t;const f=t.headers.filter(({text:g,anchor:k})=>s(g)||s(k));return f.length?{text:t.text,link:t.link,headers:f}:null}).filter(t=>t);return i.length?{text:e.text,items:i}:null}).filter(e=>e)});return(l,s)=>(r(),n("div",J,[a("div",N,[s[2]||(s[2]=a("h1",null,"API 参考",-1)),a("div",z,[s[1]||(s[1]=a("label",{for:"api-filter"},"过滤",-1)),b(a("input",{ref_key:"search",ref:u,type:"search",placeholder:"Enter keyword",id:"api-filter","onUpdate:modelValue":s[0]||(s[0]=e=>d.value=e)},null,512),[[P,d.value]])])]),(r(!0),n(p,null,c(h.value,e=>(r(),n("div",{key:e.text,class:"api-section"},[a("h2",{id:e.anchor},o(e.text),9,B),a("div",C,[(r(!0),n(p,null,c(e.items,i=>(r(),n("div",{key:i.text,class:"api-group"},[a("h3",null,o(i.text),1),a("ul",null,[(r(!0),n(p,null,c(i.headers,t=>(r(),n("li",{key:t.anchor},[a("a",{href:w(O)(i.link)+".html#"+t.anchor},o(t.text),9,D)]))),128))])]))),128))])]))),128)),h.value.length?j("",!0):(r(),n("div",E,' 没有匹配到 API "'+o(d.value)+'" ',1))]))}});const H=S(G,[["__scopeId","data-v-b8cd0959"]]),U=JSON.parse('{"title":"API 参考","description":"","frontmatter":{"title":"API 参考","sidebar":false,"page":true,"footer":false},"headers":[],"relativePath":"api/index.md","filePath":"api/index.md"}'),L={name:"api/index.md"},V=Object.assign(L,{setup(m){return(u,d)=>(r(),n("div",null,[q(H)]))}});export{U as __pageData,V as default};
