import{_ as a,r as n,i as o,a as t}from"./chunks/framework.8a6edf47.js";const i=JSON.parse('{"title":"hashchange 和 h5 history popstate","description":"","frontmatter":{},"headers":[],"relativePath":"start-docs/studyhard/专题/vue-router或react-router.md","filePath":"start-docs/studyhard/专题/vue-router或react-router.md"}'),p={name:"start-docs/studyhard/专题/vue-router或react-router.md"};function e(l,s,r,c,E,h){return n(),o("div",null,s[0]||(s[0]=[t(`<h1 id="hashchange-和-h5-history-popstate" tabindex="-1">hashchange 和 h5 history popstate <a class="header-anchor" href="#hashchange-和-h5-history-popstate" aria-label="Permalink to &quot;hashchange 和 h5 history popstate&quot;">​</a></h1><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#E1E4E8;">window.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;hashchange&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">path</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> window.location.hash.</span><span style="color:#B392F0;">slice</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">component</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> routeMap[path].component</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">render</span><span style="color:#E1E4E8;">(h) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">h</span><span style="color:#E1E4E8;">(component)</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span></code></pre></div>`,2)]))}const d=a(p,[["render",e]]);export{i as __pageData,d as default};
