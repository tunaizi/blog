import{_ as n,r as a,i as l,a as p}from"./chunks/framework.8a6edf47.js";const d=JSON.parse('{"title":"异步组件","description":"","frontmatter":{},"headers":[{"level":2,"title":"基本用法","slug":"basic-usage","link":"#basic-usage","children":[]},{"level":2,"title":"加载与错误状态","slug":"loading-and-error-states","link":"#loading-and-error-states","children":[]},{"level":2,"title":"惰性激活","slug":"lazy-hydration","link":"#lazy-hydration","children":[{"level":3,"title":"在空闲时进行激活","slug":"hydrate-on-idle","link":"#hydrate-on-idle","children":[]},{"level":3,"title":"在可见时激活","slug":"hydrate-on-visible","link":"#hydrate-on-visible","children":[]},{"level":3,"title":"在媒体查询匹配时进行激活","slug":"hydrate-on-media-query","link":"#hydrate-on-media-query","children":[]},{"level":3,"title":"交互时激活","slug":"hydrate-on-interaction","link":"#hydrate-on-interaction","children":[]},{"level":3,"title":"自定义策略","slug":"custom-strategy","link":"#custom-strategy","children":[]}]},{"level":2,"title":"搭配 Suspense 使用","slug":"using-with-suspense","link":"#using-with-suspense","children":[]}],"relativePath":"guide/components/async.md","filePath":"guide/components/async.md"}'),o={name:"guide/components/async.md"};function e(t,s,c,r,E,y){return a(),l("div",null,s[0]||(s[0]=[p(`<h1 id="async-components" tabindex="-1">异步组件 <a class="header-anchor" href="#async-components" aria-label="Permalink to &quot;异步组件 {#async-components}&quot;">​</a></h1><h2 id="basic-usage" tabindex="-1">基本用法 <a class="header-anchor" href="#basic-usage" aria-label="Permalink to &quot;基本用法 {#basic-usage}&quot;">​</a></h2><p>在大型项目中，我们可能需要拆分应用为更小的块，并仅在需要时再从服务器加载相关组件。Vue 提供了 <a href="/blog/api/general.html#defineasynccomponent"><code>defineAsyncComponent</code></a> 方法来实现此功能：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { defineAsyncComponent } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">AsyncComp</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineAsyncComponent</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Promise</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">resolve</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">reject</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// ...从服务器获取组件</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(</span><span style="color:#6A737D;">/* 获取到的组件 */</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#6A737D;">// ... 像使用其他一般组件一样使用 \`AsyncComp\`</span></span></code></pre></div><p>如你所见，<code>defineAsyncComponent</code> 方法接收一个返回 Promise 的加载函数。这个 Promise 的 <code>resolve</code> 回调方法应该在从服务器获得组件定义时调用。你也可以调用 <code>reject(reason)</code> 表明加载失败。</p><p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import" target="_blank" rel="noreferrer">ES 模块动态导入</a>也会返回一个 Promise，所以多数情况下我们会将它和 <code>defineAsyncComponent</code> 搭配使用。类似 Vite 和 Webpack 这样的构建工具也支持此语法 (并且会将它们作为打包时的代码分割点)，因此我们也可以用它来导入 Vue 单文件组件：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { defineAsyncComponent } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">AsyncComp</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineAsyncComponent</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;./components/MyComponent.vue&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span></span></code></pre></div><p>最后得到的 <code>AsyncComp</code> 是一个外层包装过的组件，仅在页面需要它渲染时才会调用加载内部实际组件的函数。它会将接收到的 props 和插槽传给内部组件，所以你可以使用这个异步的包装组件无缝地替换原始组件，同时实现延迟加载。</p><p>与普通组件一样，异步组件可以使用 <code>app.component()</code> <a href="/blog/guide/components/registration.html#global-registration">全局注册</a>：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#E1E4E8;">app.</span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;MyComponent&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#B392F0;">defineAsyncComponent</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;./components/MyComponent.vue&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">))</span></span></code></pre></div><div class="options-api"><p>你也可以在<a href="/blog/guide/components/registration.html#local-registration">局部注册组件</a>时使用 <code>defineAsyncComponent</code>：</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { defineAsyncComponent } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  components: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    AdminPage: </span><span style="color:#B392F0;">defineAsyncComponent</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;./components/AdminPageComponent.vue&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    )</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#FDAEB7;font-style:italic;">AdminPage</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div></div><div class="composition-api"><p>也可以直接在父组件中直接定义它们：</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { defineAsyncComponent } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">AdminPage</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineAsyncComponent</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;./components/AdminPageComponent.vue&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#FDAEB7;font-style:italic;">AdminPage</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div></div><h2 id="loading-and-error-states" tabindex="-1">加载与错误状态 <a class="header-anchor" href="#loading-and-error-states" aria-label="Permalink to &quot;加载与错误状态 {#loading-and-error-states}&quot;">​</a></h2><p>异步操作不可避免地会涉及到加载和错误状态，因此 <code>defineAsyncComponent()</code> 也支持在高级选项中处理这些状态：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">AsyncComp</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineAsyncComponent</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 加载函数</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">loader</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;./Foo.vue&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 加载异步组件时使用的组件</span></span>
<span class="line"><span style="color:#E1E4E8;">  loadingComponent: LoadingComponent,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 展示加载组件前的延迟时间，默认为 200ms</span></span>
<span class="line"><span style="color:#E1E4E8;">  delay: </span><span style="color:#79B8FF;">200</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 加载失败后展示的组件</span></span>
<span class="line"><span style="color:#E1E4E8;">  errorComponent: ErrorComponent,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 如果提供了一个 timeout 时间限制，并超时了</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 也会显示这里配置的报错组件，默认值是：Infinity</span></span>
<span class="line"><span style="color:#E1E4E8;">  timeout: </span><span style="color:#79B8FF;">3000</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre></div><p>如果提供了一个加载组件，它将在内部组件加载时先行显示。在加载组件显示之前有一个默认的 200ms 延迟——这是因为在网络状况较好时，加载完成得很快，加载组件和最终组件之间的替换太快可能产生闪烁，反而影响用户感受。</p><p>如果提供了一个报错组件，则它会在加载器函数返回的 Promise 抛错时被渲染。你还可以指定一个超时时间，在请求耗时超过指定时间时也会渲染报错组件。</p><h2 id="lazy-hydration" tabindex="-1">惰性激活 <sup class="vt-badge" data-text="3.5+"></sup> <a class="header-anchor" href="#lazy-hydration" aria-label="Permalink to &quot;惰性激活 &lt;sup class=&quot;vt-badge&quot; data-text=&quot;3.5+&quot; /&gt; {#lazy-hydration}&quot;">​</a></h2><blockquote><p>如果你正在使用<a href="/blog/guide/scaling-up/ssr.html">服务器端渲染</a>，这一部分才会适用。</p></blockquote><p>在 Vue 3.5+ 中，异步组件可以通过提供激活策略来控制何时进行激活。</p><ul><li><p>Vue 提供了一些内置的激活策略。这些内置策略需要分别导入，以便在未使用时进行 tree-shake。</p></li><li><p>该设计有意保持在底层，以确保灵活性。将来可以在此基础上构建编译器语法糖，无论是在核心还是更上层的解决方案 (如 Nuxt) 中实现。</p></li></ul><h3 id="hydrate-on-idle" tabindex="-1">在空闲时进行激活 <a class="header-anchor" href="#hydrate-on-idle" aria-label="Permalink to &quot;在空闲时进行激活 {#hydrate-on-idle}&quot;">​</a></h3><p>通过 <code>requestIdleCallback</code> 进行激活：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { defineAsyncComponent, hydrateOnIdle } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">AsyncComp</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineAsyncComponent</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">loader</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;./Comp.vue&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">  hydrate: </span><span style="color:#B392F0;">hydrateOnIdle</span><span style="color:#E1E4E8;">(</span><span style="color:#6A737D;">/* 传递可选的最大超时 */</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre></div><h3 id="hydrate-on-visible" tabindex="-1">在可见时激活 <a class="header-anchor" href="#hydrate-on-visible" aria-label="Permalink to &quot;在可见时激活 {#hydrate-on-visible}&quot;">​</a></h3><p>通过 <code>IntersectionObserver</code> 在元素变为可见时进行激活。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { defineAsyncComponent, hydrateOnVisible } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">AsyncComp</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineAsyncComponent</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">loader</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;./Comp.vue&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">  hydrate: </span><span style="color:#B392F0;">hydrateOnVisible</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre></div><p>可以选择传递一个侦听器的选项对象值：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#B392F0;">hydrateOnVisible</span><span style="color:#E1E4E8;">({ rootMargin: </span><span style="color:#9ECBFF;">&#39;100px&#39;</span><span style="color:#E1E4E8;"> })</span></span></code></pre></div><h3 id="hydrate-on-media-query" tabindex="-1">在媒体查询匹配时进行激活 <a class="header-anchor" href="#hydrate-on-media-query" aria-label="Permalink to &quot;在媒体查询匹配时进行激活 {#hydrate-on-media-query}&quot;">​</a></h3><p>当指定的媒体查询匹配时进行激活。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { defineAsyncComponent, hydrateOnMediaQuery } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">AsyncComp</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineAsyncComponent</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">loader</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;./Comp.vue&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">  hydrate: </span><span style="color:#B392F0;">hydrateOnMediaQuery</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;(max-width:500px)&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre></div><h3 id="hydrate-on-interaction" tabindex="-1">交互时激活 <a class="header-anchor" href="#hydrate-on-interaction" aria-label="Permalink to &quot;交互时激活 {#hydrate-on-interaction}&quot;">​</a></h3><p>当组件元素上触发指定事件时进行激活。完成激活后，触发激活的事件也将被重放。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { defineAsyncComponent, hydrateOnInteraction } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">AsyncComp</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineAsyncComponent</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">loader</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;./Comp.vue&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">  hydrate: </span><span style="color:#B392F0;">hydrateOnInteraction</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;click&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre></div><p>也可以是多个事件类型的列表：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#B392F0;">hydrateOnInteraction</span><span style="color:#E1E4E8;">([</span><span style="color:#9ECBFF;">&#39;wheel&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;mouseover&#39;</span><span style="color:#E1E4E8;">])</span></span></code></pre></div><h3 id="custom-strategy" tabindex="-1">自定义策略 <a class="header-anchor" href="#custom-strategy" aria-label="Permalink to &quot;自定义策略 {#custom-strategy}&quot;">​</a></h3><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { defineAsyncComponent, </span><span style="color:#F97583;">type</span><span style="color:#E1E4E8;"> HydrationStrategy } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">myStrategy</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">HydrationStrategy</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">hydrate</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">forEachElement</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// forEachElement 是一个遍历组件未激活的 DOM 中所有根元素的辅助函数，</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 因为根元素可能是一个片段而非单个元素</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">forEachElement</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">el</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 准备好时调用 \`hydrate\`</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">hydrate</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 如必要，返回一个销毁函数</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">AsyncComp</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineAsyncComponent</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">loader</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;./Comp.vue&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">  hydrate: myStrategy</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre></div><h2 id="using-with-suspense" tabindex="-1">搭配 Suspense 使用 <a class="header-anchor" href="#using-with-suspense" aria-label="Permalink to &quot;搭配 Suspense 使用 {#using-with-suspense}&quot;">​</a></h2><p>异步组件可以搭配内置的 <code>&lt;Suspense&gt;</code> 组件一起使用，若想了解 <code>&lt;Suspense&gt;</code> 和异步组件之间交互，请参阅 <a href="/blog/guide/built-ins/suspense.html"><code>&lt;Suspense&gt;</code></a> 章节。</p>`,41)]))}const F=n(o,[["render",e]]);export{d as __pageData,F as default};
