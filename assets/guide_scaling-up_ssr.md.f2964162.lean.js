import{_ as a,r as n,i as l,a as e}from"./chunks/framework.8a6edf47.js";const y=JSON.parse('{"title":"服务端渲染 (SSR)","description":"","frontmatter":{"outline":"deep"},"headers":[{"level":2,"title":"总览","slug":"overview","link":"#overview","children":[{"level":3,"title":"什么是 SSR？","slug":"what-is-ssr","link":"#what-is-ssr","children":[]},{"level":3,"title":"为什么要用 SSR？","slug":"why-ssr","link":"#why-ssr","children":[]},{"level":3,"title":"SSR vs. SSG","slug":"ssr-vs-ssg","link":"#ssr-vs-ssg","children":[]}]},{"level":2,"title":"基础教程","slug":"basic-tutorial","link":"#basic-tutorial","children":[{"level":3,"title":"渲染一个应用","slug":"rendering-an-app","link":"#rendering-an-app","children":[]},{"level":3,"title":"客户端激活","slug":"client-hydration","link":"#client-hydration","children":[]},{"level":3,"title":"代码结构","slug":"code-structure","link":"#code-structure","children":[]}]},{"level":2,"title":"更通用的解决方案","slug":"higher-level-solutions","link":"#higher-level-solutions","children":[{"level":3,"title":"Nuxt","slug":"nuxt","link":"#nuxt","children":[]},{"level":3,"title":"Quasar","slug":"quasar","link":"#quasar","children":[]},{"level":3,"title":"Vite SSR","slug":"vite-ssr","link":"#vite-ssr","children":[]}]},{"level":2,"title":"书写 SSR 友好的代码","slug":"writing-ssr-friendly-code","link":"#writing-ssr-friendly-code","children":[{"level":3,"title":"服务端的响应性","slug":"reactivity-on-the-server","link":"#reactivity-on-the-server","children":[]},{"level":3,"title":"组件生命周期钩子","slug":"component-lifecycle-hooks","link":"#component-lifecycle-hooks","children":[]},{"level":3,"title":"访问平台特有 API","slug":"access-to-platform-specific-apis","link":"#access-to-platform-specific-apis","children":[]},{"level":3,"title":"跨请求状态污染","slug":"cross-request-state-pollution","link":"#cross-request-state-pollution","children":[]},{"level":3,"title":"激活不匹配","slug":"hydration-mismatch","link":"#hydration-mismatch","children":[]},{"level":3,"title":"自定义指令","slug":"custom-directives","link":"#custom-directives","children":[]},{"level":3,"title":"Teleports","slug":"teleports","link":"#teleports","children":[]}]}],"relativePath":"guide/scaling-up/ssr.md","filePath":"guide/scaling-up/ssr.md"}'),p={name:"guide/scaling-up/ssr.md"};function o(t,s,r,c,i,E){return n(),l("div",null,s[0]||(s[0]=[e(`<h1 id="server-side-rendering-ssr" tabindex="-1">服务端渲染 (SSR) <a class="header-anchor" href="#server-side-rendering-ssr" aria-label="Permalink to &quot;服务端渲染 (SSR) {#server-side-rendering-ssr}&quot;">​</a></h1><h2 id="overview" tabindex="-1">总览 <a class="header-anchor" href="#overview" aria-label="Permalink to &quot;总览 {#overview}&quot;">​</a></h2><h3 id="what-is-ssr" tabindex="-1">什么是 SSR？ <a class="header-anchor" href="#what-is-ssr" aria-label="Permalink to &quot;什么是 SSR？ {#what-is-ssr}&quot;">​</a></h3><p>Vue.js 是一个用于构建客户端应用的框架。默认情况下，Vue 组件的职责是在浏览器中生成和操作 DOM。然而，Vue 也支持将组件在服务端直接渲染成 HTML 字符串，作为服务端响应返回给浏览器，最后在浏览器端将静态的 HTML“激活”(hydrate) 为能够交互的客户端应用。</p><p>一个由服务端渲染的 Vue.js 应用也可以被认为是“同构的”(Isomorphic) 或“通用的”(Universal)，因为应用的大部分代码同时运行在服务端<strong>和</strong>客户端。</p><h3 id="why-ssr" tabindex="-1">为什么要用 SSR？ <a class="header-anchor" href="#why-ssr" aria-label="Permalink to &quot;为什么要用 SSR？ {#why-ssr}&quot;">​</a></h3><p>与客户端的单页应用 (SPA) 相比，SSR 的优势主要在于：</p><ul><li><p><strong>更快的首屏加载</strong>：这一点在慢网速或者运行缓慢的设备上尤为重要。服务端渲染的 HTML 无需等到所有的 JavaScript 都下载并执行完成之后才显示，所以你的用户将会更快地看到完整渲染的页面。除此之外，数据获取过程在首次访问时在服务端完成，相比于从客户端获取，可能有更快的数据库连接。这通常可以带来更高的<a href="https://web.dev/vitals/" target="_blank" rel="noreferrer">核心 Web 指标</a>评分、更好的用户体验，而对于那些“首屏加载速度与转化率直接相关”的应用来说，这点可能至关重要。</p></li><li><p><strong>统一的心智模型</strong>：你可以使用相同的语言以及相同的声明式、面向组件的心智模型来开发整个应用，而不需要在后端模板系统和前端框架之间来回切换。</p></li><li><p><strong>更好的 SEO</strong>：搜索引擎爬虫可以直接看到完全渲染的页面。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>截至目前，Google 和 Bing 可以很好地对同步 JavaScript 应用进行索引。这里的“同步”是关键词。如果你的应用以一个 loading 动画开始，然后通过 Ajax 获取内容，爬虫并不会等到内容加载完成再抓取。也就是说，如果 SEO 对你的页面至关重要，而你的内容又是异步获取的，那么 SSR 可能是必需的。</p></div></li></ul><p>使用 SSR 时还有一些权衡之处需要考量：</p><ul><li><p>开发中的限制。浏览器端特定的代码只能在某些生命周期钩子中使用；一些外部库可能需要特殊处理才能在服务端渲染的应用中运行。</p></li><li><p>更多的与构建配置和部署相关的要求。服务端渲染的应用需要一个能让 Node.js 服务器运行的环境，不像完全静态的 SPA 那样可以部署在任意的静态文件服务器上。</p></li><li><p>更高的服务端负载。在 Node.js 中渲染一个完整的应用要比仅仅托管静态文件更加占用 CPU 资源，因此如果你预期有高流量，请为相应的服务器负载做好准备，并采用合理的缓存策略。</p></li></ul><p>在为你的应用使用 SSR 之前，你首先应该问自己是否真的需要它。这主要取决于首屏加载速度对应用的重要程度。例如，如果你正在开发一个内部的管理面板，初始加载时的那额外几百毫秒对你来说并不重要，这种情况下使用 SSR 就没有太多必要了。然而，在内容展示速度极其重要的场景下，SSR 可以尽可能地帮你实现最优的初始加载性能。</p><h3 id="ssr-vs-ssg" tabindex="-1">SSR vs. SSG <a class="header-anchor" href="#ssr-vs-ssg" aria-label="Permalink to &quot;SSR vs. SSG {#ssr-vs-ssg}&quot;">​</a></h3><p><strong>静态站点生成</strong> (Static-Site Generation，缩写为 SSG)，也被称为预渲染，是另一种流行的构建快速网站的技术。如果用服务端渲染一个页面所需的数据对每个用户来说都是相同的，那么我们可以只渲染一次，提前在构建过程中完成，而不是每次请求进来都重新渲染页面。预渲染的页面生成后作为静态 HTML 文件被服务器托管。</p><p>SSG 保留了和 SSR 应用相同的性能表现：它带来了优秀的首屏加载性能。同时，它比 SSR 应用的花销更小，也更容易部署，因为它输出的是静态 HTML 和资源文件。这里的关键词是<strong>静态</strong>：SSG 仅可以用于提供静态数据的页面，即数据在构建期间就是已知的，并且在多次请求之间不能被改变。每当数据变化时，都需要重新部署。</p><p>如果你调研 SSR 只是为了优化为数不多的营销页面的 SEO (例如 <code>/</code>、<code>/about</code> 和 <code>/contact</code> 等)，那么你可能需要 SSG 而不是 SSR。SSG 也非常适合构建基于内容的网站，比如文档站点或者博客。事实上，你现在正在阅读的这个网站就是使用 <a href="https://vitepress.dev/" target="_blank" rel="noreferrer">VitePress</a> 静态生成的，它是一个由 Vue 驱动的静态站点生成器。</p><h2 id="basic-tutorial" tabindex="-1">基础教程 <a class="header-anchor" href="#basic-tutorial" aria-label="Permalink to &quot;基础教程 {#basic-tutorial}&quot;">​</a></h2><h3 id="rendering-an-app" tabindex="-1">渲染一个应用 <a class="header-anchor" href="#rendering-an-app" aria-label="Permalink to &quot;渲染一个应用 {#rendering-an-app}&quot;">​</a></h3><p>让我们来看一个 Vue SSR 最基础的实战示例。</p><ol><li>创建一个新的文件夹，<code>cd</code> 进入</li><li>执行 <code>npm init -y</code></li><li>在 <code>package.json</code> 中添加 <code>&quot;type&quot;: &quot;module&quot;</code> 使 Node.js 以 <a href="https://nodejs.org/api/esm.html#modules-ecmascript-modules" target="_blank" rel="noreferrer">ES modules mode</a> 运行</li><li>执行 <code>npm install vue</code></li><li>创建一个 <code>example.js</code> 文件：</li></ol><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#6A737D;">// 此文件运行在 Node.js 服务器上</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { createSSRApp } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#6A737D;">// Vue 的服务端渲染 API 位于 \`vue/server-renderer\` 路径下</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { renderToString } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue/server-renderer&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">app</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createSSRApp</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> ({ count: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> }),</span></span>
<span class="line"><span style="color:#E1E4E8;">  template: </span><span style="color:#9ECBFF;">\`&lt;button @click=&quot;count++&quot;&gt;{{ count }}&lt;/button&gt;\`</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">renderToString</span><span style="color:#E1E4E8;">(app).</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">html</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(html)</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre></div><p>接着运行：</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> node example.js</span></span></code></pre></div><p>它应该会在命令行中打印出如下内容：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;button&gt;1&lt;/button&gt;</span></span></code></pre></div><p><a href="/blog/api/ssr.html#rendertostring"><code>renderToString()</code></a> 接收一个 Vue 应用实例作为参数，返回一个 Promise，当 Promise resolve 时得到应用渲染的 HTML。当然你也可以使用 <a href="https://nodejs.org/api/stream.html" target="_blank" rel="noreferrer">Node.js Stream API</a> 或者 <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Streams_API" target="_blank" rel="noreferrer">Web Streams API</a> 来执行流式渲染。查看 <a href="/blog/api/ssr.html">SSR API 参考</a>获取完整的相关细节。</p><p>然后我们可以把 Vue SSR 的代码移动到一个服务器请求处理函数里，它将应用的 HTML 片段包装为完整的页面 HTML。接下来的几步我们将会使用 <a href="https://expressjs.com/" target="_blank" rel="noreferrer"><code>express</code></a>：</p><ul><li>执行 <code>npm install express</code></li><li>创建下面的 <code>server.js</code> 文件：</li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> express </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;express&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { createSSRApp } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { renderToString } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue/server-renderer&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">server</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">express</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">server.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;/&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">req</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">res</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">app</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createSSRApp</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> ({ count: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> }),</span></span>
<span class="line"><span style="color:#E1E4E8;">    template: </span><span style="color:#9ECBFF;">\`&lt;button @click=&quot;count++&quot;&gt;{{ count }}&lt;/button&gt;\`</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">renderToString</span><span style="color:#E1E4E8;">(app).</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">html</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    res.</span><span style="color:#B392F0;">send</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`</span></span>
<span class="line"><span style="color:#9ECBFF;">    &lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">    &lt;html&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">      &lt;head&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">        &lt;title&gt;Vue SSR Example&lt;/title&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">      &lt;/head&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">      &lt;body&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">        &lt;div id=&quot;app&quot;&gt;\${</span><span style="color:#E1E4E8;">html</span><span style="color:#9ECBFF;">}&lt;/div&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">      &lt;/body&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">    &lt;/html&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">    \`</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">server.</span><span style="color:#B392F0;">listen</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">3000</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;ready&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre></div><p>最后，执行 <code>node server.js</code>，访问 <code>http://localhost:3000</code>。你应该可以看到页面中的按钮了。</p><p><a href="https://stackblitz.com/fork/vue-ssr-example-basic?file=index.js" target="_blank" rel="noreferrer">在 StackBlitz 上试试</a></p><h3 id="client-hydration" tabindex="-1">客户端激活 <a class="header-anchor" href="#client-hydration" aria-label="Permalink to &quot;客户端激活 {#client-hydration}&quot;">​</a></h3><p>如果你点击该按钮，你会发现数字并没有改变。这段 HTML 在客户端是完全静态的，因为我们没有在浏览器中加载 Vue。</p><p>为了使客户端的应用可交互，Vue 需要执行一个<strong>激活</strong>步骤。在激活过程中，Vue 会创建一个与服务端完全相同的应用实例，然后将每个组件与它应该控制的 DOM 节点相匹配，并添加 DOM 事件监听器。</p><p>为了在激活模式下挂载应用，我们应该使用 <a href="/blog/api/application.html#createssrapp"><code>createSSRApp()</code></a> 而不是 <code>createApp()</code>：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark has-highlighted-lines"><code><span class="line"><span style="color:#6A737D;">// 该文件运行在浏览器中</span></span>
<span class="line highlighted"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { createSSRApp } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">app</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createSSRApp</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// ...和服务端完全一致的应用实例</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 在客户端挂载一个 SSR 应用时会假定</span></span>
<span class="line"><span style="color:#6A737D;">// HTML 是预渲染的，然后执行激活过程，</span></span>
<span class="line"><span style="color:#6A737D;">// 而不是挂载新的 DOM 节点</span></span>
<span class="line"><span style="color:#E1E4E8;">app.</span><span style="color:#B392F0;">mount</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;#app&#39;</span><span style="color:#E1E4E8;">)</span></span></code></pre></div><h3 id="code-structure" tabindex="-1">代码结构 <a class="header-anchor" href="#code-structure" aria-label="Permalink to &quot;代码结构 {#code-structure}&quot;">​</a></h3><p>想想我们该如何在客户端复用服务端的应用实现。这时我们就需要开始考虑 SSR 应用中的代码结构了——我们如何在服务器和客户端之间共享相同的应用代码呢？</p><p>这里我们将演示最基础的设置。首先，让我们将应用的创建逻辑拆分到一个单独的文件 <code>app.js</code> 中：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#6A737D;">// app.js (在服务器和客户端之间共享)</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { createSSRApp } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createApp</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createSSRApp</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> ({ count: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> }),</span></span>
<span class="line"><span style="color:#E1E4E8;">    template: </span><span style="color:#9ECBFF;">\`&lt;button @click=&quot;count++&quot;&gt;{{ count }}&lt;/button&gt;\`</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>该文件及其依赖项在服务器和客户端之间共享——我们称它们为<strong>通用代码</strong>。编写通用代码时有一些注意事项，我们将<a href="#writing-ssr-friendly-code">在下面讨论</a>。</p><p>我们在客户端入口导入通用代码，创建应用并执行挂载：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#6A737D;">// client.js</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { createApp } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./app.js&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">createApp</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">mount</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;#app&#39;</span><span style="color:#E1E4E8;">)</span></span></code></pre></div><p>服务器在请求处理函数中使用相同的应用创建逻辑：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark has-highlighted-lines"><code><span class="line"><span style="color:#6A737D;">// server.js (不相关的代码省略)</span></span>
<span class="line highlighted"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { createApp } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./app.js&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">server.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;/&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">req</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">res</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">app</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createApp</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">renderToString</span><span style="color:#E1E4E8;">(app).</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">html</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre></div><p>此外，为了在浏览器中加载客户端文件，我们还需要：</p><ol><li>在 <code>server.js</code> 中添加 <code>server.use(express.static(&#39;.&#39;))</code> 来托管客户端文件。</li><li>将 <code>&lt;script type=&quot;module&quot; src=&quot;/client.js&quot;&gt;&lt;/script&gt;</code> 添加到 HTML 外壳以加载客户端入口文件。</li><li>通过在 HTML 外壳中添加 <a href="https://github.com/WICG/import-maps" target="_blank" rel="noreferrer">Import Map</a> 以支持在浏览器中使用 <code>import * from &#39;vue&#39;</code>。</li></ol><p><a href="https://stackblitz.com/fork/vue-ssr-example?file=index.js" target="_blank" rel="noreferrer">在 StackBlitz 上尝试完整的示例</a>。按钮现在可以交互了！</p><h2 id="higher-level-solutions" tabindex="-1">更通用的解决方案 <a class="header-anchor" href="#higher-level-solutions" aria-label="Permalink to &quot;更通用的解决方案 {#higher-level-solutions}&quot;">​</a></h2><p>从上面的例子到一个生产就绪的 SSR 应用还需要很多工作。我们将需要：</p><ul><li><p>支持 Vue 单文件组件且满足其他构建步骤要求。事实上，我们需要为同一个应用执行两次构建过程：一次用于客户端，一次用于服务器。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Vue 组件用在 SSR 时的编译产物不同——模板被编译为字符串拼接而不是 render 函数，以此提高渲染性能。</p></div></li><li><p>在服务器请求处理函数中，确保返回的 HTML 包含正确的客户端资源链接和最优的资源加载提示 (如 prefetch 和 preload)。我们可能还需要在 SSR 和 SSG 模式之间切换，甚至在同一个应用中混合使用这两种模式。</p></li><li><p>以一种通用的方式管理路由、数据获取和状态存储。</p></li></ul><p>完整的实现会非常复杂，并且取决于你选择使用的构建工具链。因此，我们强烈建议你使用一种更通用的、更集成化的解决方案，帮你抽象掉那些复杂的东西。下面推荐几个 Vue 生态中的 SSR 解决方案。</p><h3 id="nuxt" tabindex="-1">Nuxt <a class="header-anchor" href="#nuxt" aria-label="Permalink to &quot;Nuxt {#nuxt}&quot;">​</a></h3><p><a href="https://nuxt.com/" target="_blank" rel="noreferrer">Nuxt</a> 是一个构建于 Vue 生态系统之上的全栈框架，它为编写 Vue SSR 应用提供了丝滑的开发体验。更棒的是，你还可以把它当作一个静态站点生成器来用！我们强烈建议你试一试。</p><h3 id="quasar" tabindex="-1">Quasar <a class="header-anchor" href="#quasar" aria-label="Permalink to &quot;Quasar {#quasar}&quot;">​</a></h3><p><a href="https://quasar.dev" target="_blank" rel="noreferrer">Quasar</a> 是一个基于 Vue 的完整解决方案，它可以让你用同一套代码库构建不同目标的应用，如 SPA、SSR、PWA、移动端应用、桌面端应用以及浏览器插件。除此之外，它还提供了一整套 Material Design 风格的组件库。</p><h3 id="vite-ssr" tabindex="-1">Vite SSR <a class="header-anchor" href="#vite-ssr" aria-label="Permalink to &quot;Vite SSR {#vite-ssr}&quot;">​</a></h3><p>Vite 提供了内置的 <a href="https://cn.vitejs.dev/guide/ssr.html" target="_blank" rel="noreferrer">Vue 服务端渲染支持</a>，但它在设计上是偏底层的。如果你想要直接使用 Vite，可以看看 <a href="https://vite-plugin-ssr.com/" target="_blank" rel="noreferrer">vite-plugin-ssr</a>，一个帮你抽象掉许多复杂细节的社区插件。</p><p>你也可以在<a href="https://github.com/vitejs/vite-plugin-vue/tree/main/playground/ssr-vue" target="_blank" rel="noreferrer">这里</a>查看一个使用手动配置的 Vue + Vite SSR 的示例项目，以它作为基础来构建。请注意，这种方式只有在你有丰富的 SSR 和构建工具经验，并希望对应用的架构做深入的定制时才推荐使用。</p><h2 id="writing-ssr-friendly-code" tabindex="-1">书写 SSR 友好的代码 <a class="header-anchor" href="#writing-ssr-friendly-code" aria-label="Permalink to &quot;书写 SSR 友好的代码 {#writing-ssr-friendly-code}&quot;">​</a></h2><p>无论你的构建配置或顶层框架的选择如何，下面的原则在所有 Vue SSR 应用中都适用。</p><h3 id="reactivity-on-the-server" tabindex="-1">服务端的响应性 <a class="header-anchor" href="#reactivity-on-the-server" aria-label="Permalink to &quot;服务端的响应性 {#reactivity-on-the-server}&quot;">​</a></h3><p>在 SSR 期间，每一个请求 URL 都会映射到我们应用中的一个期望状态。因为没有用户交互和 DOM 更新，所以响应性在服务端是不必要的。为了更好的性能，默认情况下响应性在 SSR 期间是禁用的。</p><h3 id="component-lifecycle-hooks" tabindex="-1">组件生命周期钩子 <a class="header-anchor" href="#component-lifecycle-hooks" aria-label="Permalink to &quot;组件生命周期钩子 {#component-lifecycle-hooks}&quot;">​</a></h3><p>因为没有任何动态更新，所以像 <span class="options-api"><code>mounted</code></span><span class="composition-api"><code>onMounted</code></span> 或者 <span class="options-api"><code>updated</code></span><span class="composition-api"><code>onUpdated</code></span> 这样的生命周期钩子<strong>不会</strong>在 SSR 期间被调用，而只会在客户端运行。<span class="options-api">只有 <code>beforeCreate</code> 和 <code>created</code> 这两个钩子会在 SSR 期间被调用。</span></p><p>你应该避免在 <span class="options-api"><code>beforeCreate</code> 和 <code>created</code></span><span class="composition-api"><code>setup()</code> 或者 <code>&lt;script setup&gt;</code> 的根作用域</span>中使用会产生副作用且需要被清理的代码。这类副作用的常见例子是使用 <code>setInterval</code> 设置定时器。我们可能会在客户端特有的代码中设置定时器，然后在 <span class="options-api"><code>beforeUnmount</code></span><span class="composition-api"><code>onBeforeUnmount</code></span> 或 <span class="options-api"><code>unmounted</code></span><span class="composition-api"><code>onUnmounted</code></span> 中清除。然而，由于 unmount 钩子不会在 SSR 期间被调用，所以定时器会永远存在。为了避免这种情况，请将含有副作用的代码放到 <span class="options-api"><code>mounted</code></span><span class="composition-api"><code>onMounted</code></span> 中。</p><h3 id="access-to-platform-specific-apis" tabindex="-1">访问平台特有 API <a class="header-anchor" href="#access-to-platform-specific-apis" aria-label="Permalink to &quot;访问平台特有 API {#access-to-platform-specific-apis}&quot;">​</a></h3><p>通用代码不能访问平台特有的 API，如果你的代码直接使用了浏览器特有的全局变量，比如 <code>window</code> 或 <code>document</code>，他们会在 Node.js 运行时报错，反过来也一样。</p><p>对于在服务器和客户端之间共享，但使用了不同的平台 API 的任务，建议将平台特定的实现封装在一个通用的 API 中，或者使用能为你做这件事的库。例如你可以使用 <a href="https://github.com/node-fetch/node-fetch" target="_blank" rel="noreferrer"><code>node-fetch</code></a> 在服务端和客户端使用相同的 fetch API。</p><p>对于浏览器特有的 API，通常的方法是在仅客户端特有的生命周期钩子中惰性地访问它们，例如 <span class="options-api"><code>mounted</code></span><span class="composition-api"><code>onMounted</code></span>。</p><p>请注意，如果一个第三方库编写时没有考虑到通用性，那么要将它集成到一个 SSR 应用中可能会很棘手。你<em>或许</em>可以通过模拟一些全局变量来让它工作，但这只是一种 hack 手段并且可能会影响到其他库的环境检测代码。</p><h3 id="cross-request-state-pollution" tabindex="-1">跨请求状态污染 <a class="header-anchor" href="#cross-request-state-pollution" aria-label="Permalink to &quot;跨请求状态污染 {#cross-request-state-pollution}&quot;">​</a></h3><p>在状态管理一章中，我们介绍了一种<a href="./state-management.html#simple-state-management-with-reactivity-api">使用响应式 API 的简单状态管理模式</a>。而在 SSR 环境中，这种模式需要一些额外的调整。</p><p>上述模式在一个 JavaScript 模块的根作用域中声明共享的状态。这是一种<strong>单例模式</strong>——即在应用的整个生命周期中只有一个响应式对象的实例。这在纯客户端的 Vue 应用中是可以的，因为对于浏览器的每一个页面访问，应用模块都会重新初始化。</p><p>然而，在 SSR 环境下，应用模块通常只在服务器启动时初始化一次。同一个应用模块会在多个服务器请求之间被复用，而我们的单例状态对象也一样。如果我们用单个用户特定的数据对共享的单例状态进行修改，那么这个状态可能会意外地泄露给另一个用户的请求。我们把这种情况称为<strong>跨请求状态污染</strong>。</p><p>从技术上讲，我们可以在每个请求上重新初始化所有 JavaScript 模块，就像我们在浏览器中所做的那样。但是，初始化 JavaScript 模块的成本可能很高，因此这会显著影响服务器性能。</p><p>推荐的解决方案是在每个请求中为整个应用创建一个全新的实例，包括 router 和全局 store。然后，我们使用<a href="/blog/guide/components/provide-inject.html#app-level-provide">应用层级的 provide 方法</a>来提供共享状态，并将其注入到需要它的组件中，而不是直接在组件中将其导入：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#6A737D;">// app.js （在服务端和客户端间共享）</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { createSSRApp } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { createStore } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./store.js&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 每次请求时调用</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createApp</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">app</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createSSRApp</span><span style="color:#E1E4E8;">(</span><span style="color:#6A737D;">/* ... */</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 对每个请求都创建新的 store 实例</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">store</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createStore</span><span style="color:#E1E4E8;">(</span><span style="color:#6A737D;">/* ... */</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 提供应用级别的 store</span></span>
<span class="line"><span style="color:#E1E4E8;">  app.</span><span style="color:#B392F0;">provide</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;store&#39;</span><span style="color:#E1E4E8;">, store)</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 也为激活过程暴露出 store</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> { app, store }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>像 Pinia 这样的状态管理库在设计时就考虑到了这一点。请参考 <a href="https://pinia.vuejs.org/zh/ssr/" target="_blank" rel="noreferrer">Pinia 的 SSR 指南</a>以了解更多细节。</p><h3 id="hydration-mismatch" tabindex="-1">激活不匹配 <a class="header-anchor" href="#hydration-mismatch" aria-label="Permalink to &quot;激活不匹配 {#hydration-mismatch}&quot;">​</a></h3><p>如果预渲染的 HTML 的 DOM 结构不符合客户端应用的期望，就会出现激活不匹配。最常见的激活不匹配是以下几种原因导致的：</p><ol><li><p>组件模板中存在不符合规范的 HTML 结构，渲染后的 HTML 被浏览器原生的 HTML 解析行为纠正导致不匹配。举例来说，一个常见的错误是 <a href="https://stackoverflow.com/questions/8397852/why-cant-the-p-tag-contain-a-div-tag-inside-it" target="_blank" rel="noreferrer"><code>&lt;div&gt;</code> 不能被放在 <code>&lt;p&gt;</code> 中</a>：</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;hi&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><p>如果我们在服务器渲染的 HTML 中出现这样的代码，当遇到 <code>&lt;div&gt;</code> 时，浏览器会结束第一个 <code>&lt;p&gt;</code>，并解析为以下 DOM 结构：</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;hi&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div></li><li><p>渲染所用的数据中包含随机生成的值。由于同一个应用会在服务端和客户端执行两次，每次执行生成的随机数都不能保证相同。避免随机数不匹配有两种选择：</p><ol><li><p>利用 <code>v-if</code> + <code>onMounted</code> 让需要用到随机数的模板只在客户端渲染。你所用的上层框架可能也会提供简化这个用例的内置 API，比如 VitePress 的 <code>&lt;ClientOnly&gt;</code> 组件。</p></li><li><p>使用一个能够接受随机种子的随机数生成库，并确保服务端和客户端使用同样的随机数种子 (比如把种子包含在序列化的状态中，然后在客户端取回)。</p></li></ol></li><li><p>服务端和客户端的时区不一致。有时候我们可能会想要把一个时间转换为用户的当地时间，但在服务端的时区跟用户的时区可能并不一致，我们也并不能可靠的在服务端预先知道用户的时区。这种情况下，当地时间的转换也应该作为纯客户端逻辑去执行。</p></li></ol><p>当 Vue 遇到激活不匹配时，它将尝试自动恢复并调整预渲染的 DOM 以匹配客户端的状态。这将导致一些渲染性能的损失，因为需要丢弃不匹配的节点并渲染新的节点，但大多数情况下，应用应该会如预期一样继续工作。尽管如此，最好还是在开发过程中发现并避免激活不匹配。</p><h4 id="suppressing-hydration-mismatches" tabindex="-1">消除激活不匹配 <sup class="vt-badge" data-text="3.5+"></sup> <a class="header-anchor" href="#suppressing-hydration-mismatches" aria-label="Permalink to &quot;消除激活不匹配 &lt;sup class=&quot;vt-badge&quot; data-text=&quot;3.5+&quot; /&gt; {#suppressing-hydration-mismatches}&quot;">​</a></h4><p>在 Vue 3.5+ 中，可以使用 <a href="/blog/api/ssr.html#data-allow-mismatch"><code>data-allow-mismatch</code></a> attribute 有选择性地消除无法避免的激活不匹配警告。</p><h3 id="custom-directives" tabindex="-1">自定义指令 <a class="header-anchor" href="#custom-directives" aria-label="Permalink to &quot;自定义指令 {#custom-directives}&quot;">​</a></h3><p>因为大多数的自定义指令都包含了对 DOM 的直接操作，所以它们会在 SSR 时被忽略。但如果你想要自己控制一个自定义指令在 SSR 时应该如何被渲染 (即应该在渲染的元素上添加哪些 attribute)，你可以使用 <code>getSSRProps</code> 指令钩子：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">myDirective</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">mounted</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">el</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">binding</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 客户端实现：</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 直接更新 DOM</span></span>
<span class="line"><span style="color:#E1E4E8;">    el.id </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> binding.value</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">getSSRProps</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">binding</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 服务端实现：</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 返回需要渲染的 prop</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// getSSRProps 只接收一个 binding 参数</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      id: binding.value</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="teleports" tabindex="-1">Teleports <a class="header-anchor" href="#teleports" aria-label="Permalink to &quot;Teleports {#teleports}&quot;">​</a></h3><p>在 SSR 的过程中 Teleport 需要特殊处理。如果渲染的应用包含 Teleport，那么其传送的内容将不会包含在主应用渲染出的字符串中。在大多数情况下，更推荐的方案是在客户端挂载时条件式地渲染 Teleport。</p><p>如果你需要激活 Teleport 内容，它们会暴露在服务端渲染上下文对象的 <code>teleports</code> 属性下：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">ctx</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {}</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">html</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">renderToString</span><span style="color:#E1E4E8;">(app, ctx)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(ctx.teleports) </span><span style="color:#6A737D;">// { &#39;#teleported&#39;: &#39;teleported content&#39; }</span></span></code></pre></div><p>跟主应用的 HTML 一样，你需要自己将 Teleport 对应的 HTML 嵌入到最终页面上的正确位置处。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>请避免在 SSR 的同时把 Teleport 的目标设为 <code>body</code>——通常 <code>&lt;body&gt;</code> 会包含其他服务端渲染出来的内容，这会使得 Teleport 无法确定激活的正确起始位置。</p><p>推荐用一个独立的只包含 teleport 的内容的容器，例如 <code>&lt;div id=&quot;teleported&quot;&gt;&lt;/div&gt;</code>。</p></div>`,93)]))}const u=a(p,[["render",o]]);export{y as __pageData,u as default};
