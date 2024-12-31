import{_ as t,r as a,i as n,a as l}from"./chunks/framework.8a6edf47.js";const y=JSON.parse('{"title":"透传 Attributes","description":"","frontmatter":{"outline":"deep"},"headers":[{"level":2,"title":"Attributes 继承","slug":"attribute-inheritance","link":"#attribute-inheritance","children":[{"level":3,"title":"对 class 和 style 的合并","slug":"class-and-style-merging","link":"#class-and-style-merging","children":[]},{"level":3,"title":"v-on 监听器继承","slug":"v-on-listener-inheritance","link":"#v-on-listener-inheritance","children":[]},{"level":3,"title":"深层组件继承","slug":"nested-component-inheritance","link":"#nested-component-inheritance","children":[]}]},{"level":2,"title":"禁用 Attributes 继承","slug":"disabling-attribute-inheritance","link":"#disabling-attribute-inheritance","children":[]},{"level":2,"title":"多根节点的 Attributes 继承","slug":"attribute-inheritance-on-multiple-root-nodes","link":"#attribute-inheritance-on-multiple-root-nodes","children":[]},{"level":2,"title":"在 JavaScript 中访问透传 Attributes","slug":"accessing-fallthrough-attributes-in-javascript","link":"#accessing-fallthrough-attributes-in-javascript","children":[]}],"relativePath":"guide/components/attrs.md","filePath":"guide/components/attrs.md"}'),e={name:"guide/components/attrs.md"};function o(p,s,c,r,i,E){return a(),n("div",null,s[0]||(s[0]=[l(`<h1 id="fallthrough-attributes" tabindex="-1">透传 Attributes <a class="header-anchor" href="#fallthrough-attributes" aria-label="Permalink to &quot;透传 Attributes {#fallthrough-attributes}&quot;">​</a></h1><blockquote><p>此章节假设你已经看过了<a href="/blog/guide/essentials/component-basics.html">组件基础</a>。若你还不了解组件是什么，请先阅读该章节。</p></blockquote><h2 id="attribute-inheritance" tabindex="-1">Attributes 继承 <a class="header-anchor" href="#attribute-inheritance" aria-label="Permalink to &quot;Attributes 继承 {#attribute-inheritance}&quot;">​</a></h2><p>“透传 attribute”指的是传递给一个组件，却没有被该组件声明为 <a href="./props.html">props</a> 或 <a href="./events.html#defining-custom-events">emits</a> 的 attribute 或者 <code>v-on</code> 事件监听器。最常见的例子就是 <code>class</code>、<code>style</code> 和 <code>id</code>。</p><p>当一个组件以单个元素为根作渲染时，透传的 attribute 会自动被添加到根元素上。举例来说，假如我们有一个 <code>&lt;MyButton&gt;</code> 组件，它的模板长这样：</p><div class="language-template"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#6A737D;">&lt;!-- &lt;MyButton&gt; 的模板 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;Click Me&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><p>一个父组件使用了这个组件，并且传入了 <code>class</code>：</p><div class="language-template"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#79B8FF;">MyButton</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;large&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span></code></pre></div><p>最后渲染出的 DOM 结果是：</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;large&quot;</span><span style="color:#E1E4E8;">&gt;Click Me&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><p>这里，<code>&lt;MyButton&gt;</code> 并没有将 <code>class</code> 声明为一个它所接受的 prop，所以 <code>class</code> 被视作透传 attribute，自动透传到了 <code>&lt;MyButton&gt;</code> 的根元素上。</p><h3 id="class-and-style-merging" tabindex="-1">对 <code>class</code> 和 <code>style</code> 的合并 <a class="header-anchor" href="#class-and-style-merging" aria-label="Permalink to &quot;对 \`class\` 和 \`style\` 的合并 {#class-and-style-merging}&quot;">​</a></h3><p>如果一个子组件的根元素已经有了 <code>class</code> 或 <code>style</code> attribute，它会和从父组件上继承的值合并。如果我们将之前的 <code>&lt;MyButton&gt;</code> 组件的模板改成这样：</p><div class="language-template"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#6A737D;">&lt;!-- &lt;MyButton&gt; 的模板 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;btn&quot;</span><span style="color:#E1E4E8;">&gt;Click Me&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><p>则最后渲染出的 DOM 结果会变成：</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;btn large&quot;</span><span style="color:#E1E4E8;">&gt;Click Me&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="v-on-listener-inheritance" tabindex="-1"><code>v-on</code> 监听器继承 <a class="header-anchor" href="#v-on-listener-inheritance" aria-label="Permalink to &quot;\`v-on\` 监听器继承 {#v-on-listener-inheritance}&quot;">​</a></h3><p>同样的规则也适用于 <code>v-on</code> 事件监听器：</p><div class="language-template"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#79B8FF;">MyButton</span><span style="color:#E1E4E8;"> @</span><span style="color:#B392F0;">click</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">onClick</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span></code></pre></div><p><code>click</code> 监听器会被添加到 <code>&lt;MyButton&gt;</code> 的根元素，即那个原生的 <code>&lt;button&gt;</code> 元素之上。当原生的 <code>&lt;button&gt;</code> 被点击，会触发父组件的 <code>onClick</code> 方法。同样的，如果原生 <code>button</code> 元素自身也通过 <code>v-on</code> 绑定了一个事件监听器，则这个监听器和从父组件继承的监听器都会被触发。</p><h3 id="nested-component-inheritance" tabindex="-1">深层组件继承 <a class="header-anchor" href="#nested-component-inheritance" aria-label="Permalink to &quot;深层组件继承 {#nested-component-inheritance}&quot;">​</a></h3><p>有些情况下一个组件会在根节点上渲染另一个组件。例如，我们重构一下 <code>&lt;MyButton&gt;</code>，让它在根节点上渲染 <code>&lt;BaseButton&gt;</code>：</p><div class="language-template"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#6A737D;">&lt;!-- &lt;MyButton/&gt; 的模板，只是渲染另一个组件 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#79B8FF;">BaseButton</span><span style="color:#E1E4E8;"> /&gt;</span></span></code></pre></div><p>此时 <code>&lt;MyButton&gt;</code> 接收的透传 attribute 会直接继续传给 <code>&lt;BaseButton&gt;</code>。</p><p>请注意：</p><ol><li><p>透传的 attribute 不会包含 <code>&lt;MyButton&gt;</code> 上声明过的 props 或是针对 <code>emits</code> 声明事件的 <code>v-on</code> 侦听函数，换句话说，声明过的 props 和侦听函数被 <code>&lt;MyButton&gt;</code>“消费”了。</p></li><li><p>透传的 attribute 若符合声明，也可以作为 props 传入 <code>&lt;BaseButton&gt;</code>。</p></li></ol><h2 id="disabling-attribute-inheritance" tabindex="-1">禁用 Attributes 继承 <a class="header-anchor" href="#disabling-attribute-inheritance" aria-label="Permalink to &quot;禁用 Attributes 继承 {#disabling-attribute-inheritance}&quot;">​</a></h2><p>如果你<strong>不想要</strong>一个组件自动地继承 attribute，你可以在组件选项中设置 <code>inheritAttrs: false</code>。</p><div class="composition-api"><p>从 3.3 开始你也可以直接在 <code>&lt;script setup&gt;</code> 中使用 <a href="/blog/api/sfc-script-setup.html#defineoptions"><code>defineOptions</code></a>：</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">defineOptions</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  inheritAttrs: </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#6A737D;">// ...setup 逻辑</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div></div><p>最常见的需要禁用 attribute 继承的场景就是 attribute 需要应用在根节点以外的其他元素上。通过设置 <code>inheritAttrs</code> 选项为 <code>false</code>，你可以完全控制透传进来的 attribute 被如何使用。</p><p>这些透传进来的 attribute 可以在模板的表达式中直接用 <code>$attrs</code> 访问到。</p><div class="language-template"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;">&gt;Fallthrough attribute: {{ $attrs }}&lt;/</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><p>这个 <code>$attrs</code> 对象包含了除组件所声明的 <code>props</code> 和 <code>emits</code> 之外的所有其他 attribute，例如 <code>class</code>，<code>style</code>，<code>v-on</code> 监听器等等。</p><p>有几点需要注意：</p><ul><li><p>和 props 有所不同，透传 attributes 在 JavaScript 中保留了它们原始的大小写，所以像 <code>foo-bar</code> 这样的一个 attribute 需要通过 <code>$attrs[&#39;foo-bar&#39;]</code> 来访问。</p></li><li><p>像 <code>@click</code> 这样的一个 <code>v-on</code> 事件监听器将在此对象下被暴露为一个函数 <code>$attrs.onClick</code>。</p></li></ul><p>现在我们要再次使用一下<a href="#attribute-inheritance">之前小节</a>中的 <code>&lt;MyButton&gt;</code> 组件例子。有时候我们可能为了样式，需要在 <code>&lt;button&gt;</code> 元素外包装一层 <code>&lt;div&gt;</code>：</p><div class="language-template"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;btn-wrapper&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;btn&quot;</span><span style="color:#E1E4E8;">&gt;Click Me&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><p>我们想要所有像 <code>class</code> 和 <code>v-on</code> 监听器这样的透传 attribute 都应用在内部的 <code>&lt;button&gt;</code> 上而不是外层的 <code>&lt;div&gt;</code> 上。我们可以通过设定 <code>inheritAttrs: false</code> 和使用 <code>v-bind=&quot;$attrs&quot;</code> 来实现：</p><div class="language-template"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki github-dark has-highlighted-lines"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;btn-wrapper&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;btn&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-bind</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">$attrs</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">&gt;Click Me&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><p>小提示：<a href="/blog/guide/essentials/template-syntax.html#dynamically-binding-multiple-attributes">没有参数的 <code>v-bind</code></a> 会将一个对象的所有属性都作为 attribute 应用到目标元素上。</p><h2 id="attribute-inheritance-on-multiple-root-nodes" tabindex="-1">多根节点的 Attributes 继承 <a class="header-anchor" href="#attribute-inheritance-on-multiple-root-nodes" aria-label="Permalink to &quot;多根节点的 Attributes 继承 {#attribute-inheritance-on-multiple-root-nodes}&quot;">​</a></h2><p>和单根节点组件有所不同，有着多个根节点的组件没有自动 attribute 透传行为。如果 <code>$attrs</code> 没有被显式绑定，将会抛出一个运行时警告。</p><div class="language-template"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#79B8FF;">CustomLayout</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">id</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;custom-layout&quot;</span><span style="color:#E1E4E8;"> @</span><span style="color:#B392F0;">click</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">changeValue</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span></code></pre></div><p>如果 <code>&lt;CustomLayout&gt;</code> 有下面这样的多根节点模板，由于 Vue 不知道要将 attribute 透传到哪里，所以会抛出一个警告。</p><div class="language-template"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">header</span><span style="color:#E1E4E8;">&gt;...&lt;/</span><span style="color:#85E89D;">header</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">main</span><span style="color:#E1E4E8;">&gt;...&lt;/</span><span style="color:#85E89D;">main</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">footer</span><span style="color:#E1E4E8;">&gt;...&lt;/</span><span style="color:#85E89D;">footer</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><p>如果 <code>$attrs</code> 被显式绑定，则不会有警告：</p><div class="language-template"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki github-dark has-highlighted-lines"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">header</span><span style="color:#E1E4E8;">&gt;...&lt;/</span><span style="color:#85E89D;">header</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">main</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-bind</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">$attrs</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">&gt;...&lt;/</span><span style="color:#85E89D;">main</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">footer</span><span style="color:#E1E4E8;">&gt;...&lt;/</span><span style="color:#85E89D;">footer</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="accessing-fallthrough-attributes-in-javascript" tabindex="-1">在 JavaScript 中访问透传 Attributes <a class="header-anchor" href="#accessing-fallthrough-attributes-in-javascript" aria-label="Permalink to &quot;在 JavaScript 中访问透传 Attributes {#accessing-fallthrough-attributes-in-javascript}&quot;">​</a></h2><div class="composition-api"><p>如果需要，你可以在 <code>&lt;script setup&gt;</code> 中使用 <code>useAttrs()</code> API 来访问一个组件的所有透传 attribute：</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { useAttrs } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">attrs</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">useAttrs</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><p>如果没有使用 <code>&lt;script setup&gt;</code>，<code>attrs</code> 会作为 <code>setup()</code> 上下文对象的一个属性暴露：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">props</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">ctx</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 透传 attribute 被暴露为 ctx.attrs</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(ctx.attrs)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>需要注意的是，虽然这里的 <code>attrs</code> 对象总是反映为最新的透传 attribute，但它并不是响应式的 (考虑到性能因素)。你不能通过侦听器去监听它的变化。如果你需要响应性，可以使用 prop。或者你也可以使用 <code>onUpdated()</code> 使得在每次更新时结合最新的 <code>attrs</code> 执行副作用。</p></div><div class="options-api"><p>如果需要，你可以通过 <code>$attrs</code> 这个实例属性来访问组件的所有透传 attribute：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">created</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.$attrs)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div></div>`,50)]))}const u=t(e,[["render",o]]);export{y as __pageData,u as default};
