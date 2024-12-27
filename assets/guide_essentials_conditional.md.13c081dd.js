import{t as s,q as e,r as o,i as l,b as a,c as n,j as t,a as p}from"./chunks/framework.233c72da.js";const i={class:"options-api"},c={class:"composition-api"},r={class:"demo"},d={key:0},F={key:1},D=JSON.parse('{"title":"Conditional Rendering","description":"","frontmatter":{},"headers":[{"level":2,"title":"v-if","slug":"v-if","link":"#v-if","children":[]},{"level":2,"title":"v-else","slug":"v-else","link":"#v-else","children":[]},{"level":2,"title":"v-else-if","slug":"v-else-if","link":"#v-else-if","children":[]},{"level":2,"title":"v-if on <template>","slug":"v-if-on-template","link":"#v-if-on-template","children":[]},{"level":2,"title":"v-show","slug":"v-show","link":"#v-show","children":[]},{"level":2,"title":"v-if vs. v-show","slug":"v-if-vs-v-show","link":"#v-if-vs-v-show","children":[]},{"level":2,"title":"v-if with v-for","slug":"v-if-with-v-for","link":"#v-if-with-v-for","children":[]}],"relativePath":"guide/essentials/conditional.md","filePath":"guide/essentials/conditional.md"}'),y={name:"guide/essentials/conditional.md"},h=Object.assign(y,{setup(D){const y=s(!0);return(s,D)=>{const h=e("VueSchoolLink");return o(),l("div",null,[D[1]||(D[1]=a("h1",{id:"conditional-rendering",tabindex:"-1"},[n("Conditional Rendering "),a("a",{class:"header-anchor",href:"#conditional-rendering","aria-label":'Permalink to "Conditional Rendering {#conditional-rendering}"'},"​")],-1)),a("div",i,[t(h,{href:"https://vueschool.io/lessons/conditional-rendering-in-vue-3",title:"Free Vue.js Conditional Rendering Lesson"})]),a("div",c,[t(h,{href:"https://vueschool.io/lessons/vue-fundamentals-capi-conditionals-in-vue",title:"Free Vue.js Conditional Rendering Lesson"})]),D[2]||(D[2]=p('<h2 id="v-if" tabindex="-1"><code>v-if</code> <a class="header-anchor" href="#v-if" aria-label="Permalink to &quot;`v-if` {#v-if}&quot;">​</a></h2><p>The directive <code>v-if</code> is used to conditionally render a block. The block will only be rendered if the directive&#39;s expression returns a truthy value.</p><div class="language-template"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">h1</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-if</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;">awesome</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">Vue is awesome!</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">h1</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="v-else" tabindex="-1"><code>v-else</code> <a class="header-anchor" href="#v-else" aria-label="Permalink to &quot;`v-else` {#v-else}&quot;">​</a></h2><p>You can use the <code>v-else</code> directive to indicate an &quot;else block&quot; for <code>v-if</code>:</p><div class="language-template"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> @</span><span style="color:#C792EA;">click</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;">awesome</span><span style="color:#89DDFF;"> = !</span><span style="color:#BABED8;">awesome</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">Toggle</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">h1</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-if</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;">awesome</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">Vue is awesome!</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">h1</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">h1</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-else</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">Oh no 😢</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">h1</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div>',6)),a("div",r,[a("button",{onClick:D[0]||(D[0]=s=>y.value=!y.value)},"Toggle"),y.value?(o(),l("h1",d,"Vue is awesome!")):(o(),l("h1",F,"Oh no 😢"))]),D[3]||(D[3]=p('<div class="composition-api"><p><a href="https://play.vuejs.org/#eNpFjkEOgjAQRa8ydIMulLA1hegJ3LnqBskAjdA27RQXhHu4M/GEHsEiKLv5mfdf/sBOxux7j+zAuCutNAQOyZtcKNkZbQkGsFjBCJXVHcQBjYUSqtTKERR3dLpDyCZmQ9bjViiezKKgCIGwM21BGBIAv3oireBYtrK8ZYKtgmg5BctJ13WLPJnhr0YQb1Lod7JaS4G8eATpfjMinjTphC8wtg7zcwNKw/v5eC1fnvwnsfEDwaha7w==" target="_blank" rel="noreferrer">Try it in the Playground</a></p></div><div class="options-api"><p><a href="https://play.vuejs.org/#eNpFjj0OwjAMha9iMsEAFWuVVnACNqYsoXV/RJpEqVOQqt6DDYkTcgRSWoplWX7y56fXs6O1u84jixlvM1dbSoXGuzWOIMdCekXQCw2QS5LrzbQLckje6VEJglDyhq1pMAZyHidkGG9hhObRYh0EYWOVJAwKgF88kdFwyFSdXRPBZidIYDWvgqVkylIhjyb4ayOIV3votnXxfwrk2SPU7S/PikfVfsRnGFWL6akCbeD9fLzmK4+WSGz4AA5dYQY=" target="_blank" rel="noreferrer">Try it in the Playground</a></p></div><p>A <code>v-else</code> element must immediately follow a <code>v-if</code> or a <code>v-else-if</code> element - otherwise it will not be recognized.</p><h2 id="v-else-if" tabindex="-1"><code>v-else-if</code> <a class="header-anchor" href="#v-else-if" aria-label="Permalink to &quot;`v-else-if` {#v-else-if}&quot;">​</a></h2><p>The <code>v-else-if</code>, as the name suggests, serves as an &quot;else if block&quot; for <code>v-if</code>. It can also be chained multiple times:</p><div class="language-template"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-if</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;">type</span><span style="color:#89DDFF;"> === </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">A</span><span style="color:#89DDFF;">&#39;&quot;</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#BABED8;">  A</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-else-if</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;">type</span><span style="color:#89DDFF;"> === </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">B</span><span style="color:#89DDFF;">&#39;&quot;</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#BABED8;">  B</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-else-if</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;">type</span><span style="color:#89DDFF;"> === </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">C</span><span style="color:#89DDFF;">&#39;&quot;</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#BABED8;">  C</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-else</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#BABED8;">  Not A/B/C</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>Similar to <code>v-else</code>, a <code>v-else-if</code> element must immediately follow a <code>v-if</code> or a <code>v-else-if</code> element.</p><h2 id="v-if-on-template" tabindex="-1"><code>v-if</code> on <code>&lt;template&gt;</code> <a class="header-anchor" href="#v-if-on-template" aria-label="Permalink to &quot;`v-if` on `&lt;template&gt;` {#v-if-on-template}&quot;">​</a></h2><p>Because <code>v-if</code> is a directive, it has to be attached to a single element. But what if we want to toggle more than one element? In this case we can use <code>v-if</code> on a <code>&lt;template&gt;</code> element, which serves as an invisible wrapper. The final rendered result will not include the <code>&lt;template&gt;</code> element.</p><div class="language-template"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-if</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;">ok</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">h1</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">Title</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">h1</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">Paragraph 1</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">Paragraph 2</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p><code>v-else</code> and <code>v-else-if</code> can also be used on <code>&lt;template&gt;</code>.</p><h2 id="v-show" tabindex="-1"><code>v-show</code> <a class="header-anchor" href="#v-show" aria-label="Permalink to &quot;`v-show` {#v-show}&quot;">​</a></h2><p>Another option for conditionally displaying an element is the <code>v-show</code> directive. The usage is largely the same:</p><div class="language-template"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">h1</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-show</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;">ok</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">Hello!</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">h1</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>The difference is that an element with <code>v-show</code> will always be rendered and remain in the DOM; <code>v-show</code> only toggles the <code>display</code> CSS property of the element.</p><p><code>v-show</code> doesn&#39;t support the <code>&lt;template&gt;</code> element, nor does it work with <code>v-else</code>.</p><h2 id="v-if-vs-v-show" tabindex="-1"><code>v-if</code> vs. <code>v-show</code> <a class="header-anchor" href="#v-if-vs-v-show" aria-label="Permalink to &quot;`v-if` vs. `v-show` {#v-if-vs-v-show}&quot;">​</a></h2><p><code>v-if</code> is &quot;real&quot; conditional rendering because it ensures that event listeners and child components inside the conditional block are properly destroyed and re-created during toggles.</p><p><code>v-if</code> is also <strong>lazy</strong>: if the condition is false on initial render, it will not do anything - the conditional block won&#39;t be rendered until the condition becomes true for the first time.</p><p>In comparison, <code>v-show</code> is much simpler - the element is always rendered regardless of initial condition, with CSS-based toggling.</p><p>Generally speaking, <code>v-if</code> has higher toggle costs while <code>v-show</code> has higher initial render costs. So prefer <code>v-show</code> if you need to toggle something very often, and prefer <code>v-if</code> if the condition is unlikely to change at runtime.</p><h2 id="v-if-with-v-for" tabindex="-1"><code>v-if</code> with <code>v-for</code> <a class="header-anchor" href="#v-if-with-v-for" aria-label="Permalink to &quot;`v-if` with `v-for` {#v-if-with-v-for}&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">Note</p><p>It&#39;s <strong>not</strong> recommended to use <code>v-if</code> and <code>v-for</code> on the same element due to implicit precedence. Refer to <a href="/style-guide/rules-essential.html#avoid-v-if-with-v-for">style guide</a> for details.</p></div><p>When <code>v-if</code> and <code>v-for</code> are both used on the same element, <code>v-if</code> will be evaluated first. See the <a href="./list.html#v-for-with-v-if">list rendering guide</a> for details.</p>',24))])}}});export{D as __pageData,h as default};
