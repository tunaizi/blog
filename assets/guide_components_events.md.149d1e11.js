import{l as a,r as l,i as p,a as o}from"./chunks/framework.8a6edf47.js";const E=JSON.parse('{"title":"组件事件","description":"","frontmatter":{},"headers":[{"level":2,"title":"触发与监听事件","slug":"emitting-and-listening-to-events","link":"#emitting-and-listening-to-events","children":[]},{"level":2,"title":"事件参数","slug":"event-arguments","link":"#event-arguments","children":[]},{"level":2,"title":"声明触发的事件","slug":"declaring-emitted-events","link":"#declaring-emitted-events","children":[]},{"level":2,"title":"事件校验","slug":"events-validation","link":"#events-validation","children":[]}],"relativePath":"guide/components/events.md","filePath":"guide/components/events.md"}'),e={name:"guide/components/events.md"},r=Object.assign(e,{setup(t){if(typeof window<"u"){const s=window.location.hash;["#usage-with-v-model","#v-model-arguments","#multiple-v-model-bindings","#handling-v-model-modifiers"].includes(s)&&a(()=>{window.location="./v-model.html"+s})}return(s,n)=>(l(),p("div",null,n[0]||(n[0]=[o(`<h1 id="component-events" tabindex="-1">组件事件 <a class="header-anchor" href="#component-events" aria-label="Permalink to &quot;组件事件 {#component-events}&quot;">​</a></h1><blockquote><p>此章节假设你已经看过了<a href="/blog/guide/essentials/component-basics.html">组件基础</a>。若你还不了解组件是什么，请先阅读该章节。</p></blockquote><h2 id="emitting-and-listening-to-events" tabindex="-1">触发与监听事件 <a class="header-anchor" href="#emitting-and-listening-to-events" aria-label="Permalink to &quot;触发与监听事件 {#emitting-and-listening-to-events}&quot;">​</a></h2><p>在组件的模板表达式中，可以直接使用 <code>$emit</code> 方法触发自定义事件 (例如：在 <code>v-on</code> 的处理函数中)：</p><div class="language-template"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#6A737D;">&lt;!-- MyComponent --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;"> @</span><span style="color:#B392F0;">click</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#B392F0;">$emit</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;someEvent&#39;</span><span style="color:#E1E4E8;">)</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">&gt;Click Me&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><div class="options-api"><p><code>$emit()</code> 方法在组件实例上也同样以 <code>this.$emit()</code> 的形式可用：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  methods: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">submit</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">$emit</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;someEvent&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div></div><p>父组件可以通过 <code>v-on</code> (缩写为 <code>@</code>) 来监听事件：</p><div class="language-template"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#79B8FF;">MyComponent</span><span style="color:#E1E4E8;"> @</span><span style="color:#B392F0;">some-event</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">callback</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span></code></pre></div><p>同样，组件的事件监听器也支持 <code>.once</code> 修饰符：</p><div class="language-template"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#79B8FF;">MyComponent</span><span style="color:#E1E4E8;"> @</span><span style="color:#B392F0;">some-event</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">once</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">callback</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span></code></pre></div><p>像组件与 prop 一样，事件的名字也提供了自动的格式转换。注意这里我们触发了一个以 camelCase 形式命名的事件，但在父组件中可以使用 kebab-case 形式来监听。与 <a href="/blog/guide/components/props.html#prop-name-casing">prop 大小写格式</a>一样，在模板中我们也推荐使用 kebab-case 形式来编写监听器。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>和原生 DOM 事件不一样，组件触发的事件<strong>没有冒泡机制</strong>。你只能监听直接子组件触发的事件。平级组件或是跨越多层嵌套的组件间通信，应使用一个外部的事件总线，或是使用一个<a href="/blog/guide/scaling-up/state-management.html">全局状态管理方案</a>。</p></div><h2 id="event-arguments" tabindex="-1">事件参数 <a class="header-anchor" href="#event-arguments" aria-label="Permalink to &quot;事件参数 {#event-arguments}&quot;">​</a></h2><p>有时候我们会需要在触发事件时附带一个特定的值。举例来说，我们想要 <code>&lt;BlogPost&gt;</code> 组件来管理文本会缩放得多大。在这个场景下，我们可以给 <code>$emit</code> 提供一个额外的参数：</p><div class="language-template"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;"> @</span><span style="color:#B392F0;">click</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#B392F0;">$emit</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;increaseBy&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">)</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  Increase by 1</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><p>然后我们在父组件中监听事件，我们可以先简单写一个内联的箭头函数作为监听器，此函数会接收到事件附带的参数：</p><div class="language-template"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#79B8FF;">MyButton</span><span style="color:#E1E4E8;"> @</span><span style="color:#B392F0;">increase-by</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">n</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> count </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span></code></pre></div><p>或者，也可以用一个组件方法来作为事件处理函数：</p><div class="language-template"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#79B8FF;">MyButton</span><span style="color:#E1E4E8;"> @</span><span style="color:#B392F0;">increase-by</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">increaseCount</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span></code></pre></div><p>该方法也会接收到事件所传递的参数：</p><div class="options-api"><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#B392F0;">methods</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">increaseCount</span><span style="color:#E1E4E8;">(n) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.count </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> n</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div></div><div class="composition-api"><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">increaseCount</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">n</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  count.value </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> n</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>所有传入 <code>$emit()</code> 的额外参数都会被直接传向监听器。举例来说，<code>$emit(&#39;foo&#39;, 1, 2, 3)</code> 触发后，监听器函数将会收到这三个参数值。</p></div><h2 id="declaring-emitted-events" tabindex="-1">声明触发的事件 <a class="header-anchor" href="#declaring-emitted-events" aria-label="Permalink to &quot;声明触发的事件 {#declaring-emitted-events}&quot;">​</a></h2><p>组件可以显式地通过 <span class="composition-api"><a href="/blog/api/sfc-script-setup.html#defineprops-defineemits"><code>defineEmits()</code></a> 宏</span><span class="options-api"><a href="/blog/api/options-state.html#emits"><code>emits</code></a> 选项</span>来声明它要触发的事件：</p><div class="composition-api"><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">defineEmits</span><span style="color:#E1E4E8;">([</span><span style="color:#9ECBFF;">&#39;inFocus&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;submit&#39;</span><span style="color:#E1E4E8;">])</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><p>我们在 <code>&lt;template&gt;</code> 中使用的 <code>$emit</code> 方法不能在组件的 <code>&lt;script setup&gt;</code> 部分中使用，但 <code>defineEmits()</code> 会返回一个相同作用的函数供我们使用：</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">emit</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineEmits</span><span style="color:#E1E4E8;">([</span><span style="color:#9ECBFF;">&#39;inFocus&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;submit&#39;</span><span style="color:#E1E4E8;">])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">buttonClick</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">emit</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;submit&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><p><code>defineEmits()</code> 宏<strong>不能</strong>在子函数中使用。如上所示，它必须直接放置在 <code>&lt;script setup&gt;</code> 的顶级作用域下。</p><p>如果你显式地使用了 <code>setup</code> 函数而不是 <code>&lt;script setup&gt;</code>，则事件需要通过 <a href="/blog/api/options-state.html#emits"><code>emits</code></a> 选项来定义，<code>emit</code> 函数也被暴露在 <code>setup()</code> 的上下文对象上：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  emits: [</span><span style="color:#9ECBFF;">&#39;inFocus&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;submit&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">props</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">ctx</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    ctx.</span><span style="color:#B392F0;">emit</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;submit&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>与 <code>setup()</code> 上下文对象中的其他属性一样，<code>emit</code> 可以安全地被解构：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  emits: [</span><span style="color:#9ECBFF;">&#39;inFocus&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;submit&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">props</span><span style="color:#E1E4E8;">, { </span><span style="color:#FFAB70;">emit</span><span style="color:#E1E4E8;"> }) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">emit</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;submit&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div></div><div class="options-api"><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  emits: [</span><span style="color:#9ECBFF;">&#39;inFocus&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;submit&#39;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div></div><p>这个 <code>emits</code> 选项和 <code>defineEmits()</code> 宏还支持对象语法。通过 TypeScript 为参数指定类型，它允许我们对触发事件的参数进行验证：</p><div class="composition-api"><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lang</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;ts&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">emit</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineEmits</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">submit</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">payload</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> { </span><span style="color:#FFAB70;">email</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">password</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;"> }) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 通过返回值为 \`true\` 还是为 \`false\` 来判断</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 验证是否通过</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><p>如果你正在搭配 TypeScript 使用 <code>&lt;script setup&gt;</code>，也可以使用纯类型标注来声明触发的事件：</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lang</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;ts&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">emit</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineEmits</span><span style="color:#E1E4E8;">&lt;{</span></span>
<span class="line"><span style="color:#E1E4E8;">  (</span><span style="color:#FFAB70;">e</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;change&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">id</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">number</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">void</span></span>
<span class="line"><span style="color:#E1E4E8;">  (</span><span style="color:#FFAB70;">e</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;update&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">value</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">void</span></span>
<span class="line"><span style="color:#E1E4E8;">}&gt;()</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><p>TypeScript 用户请参考：<a href="/blog/guide/typescript/composition-api.html#typing-component-emits">如何为组件所抛出事件标注类型</a> <sup class="vt-badge ts"></sup></p></div><div class="options-api"><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  emits: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">submit</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">payload</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> { </span><span style="color:#FFAB70;">email</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">password</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;"> }) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 通过返回值为 \`true\` 还是为 \`false\` 来判断</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 验证是否通过</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>TypeScript 用户请参考：<a href="/blog/guide/typescript/options-api.html#typing-component-emits">如何为组件所抛出的事件标注类型</a>。<sup class="vt-badge ts"></sup></p></div><p>尽管事件声明是可选的，我们还是推荐你完整地声明所有要触发的事件，以此在代码中作为文档记录组件的用法。同时，事件声明能让 Vue 更好地将事件和<a href="/blog/guide/components/attrs.html#v-on-listener-inheritance">透传 attribute</a> 作出区分，从而避免一些由第三方代码触发的自定义 DOM 事件所导致的边界情况。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>如果一个原生事件的名字 (例如 <code>click</code>) 被定义在 <code>emits</code> 选项中，则监听器只会监听组件触发的 <code>click</code> 事件而不会再响应原生的 <code>click</code> 事件。</p></div><h2 id="events-validation" tabindex="-1">事件校验 <a class="header-anchor" href="#events-validation" aria-label="Permalink to &quot;事件校验 {#events-validation}&quot;">​</a></h2><p>和对 props 添加类型校验的方式类似，所有触发的事件也可以使用对象形式来描述。</p><p>要为事件添加校验，那么事件可以被赋值为一个函数，接受的参数就是抛出事件时传入 <span class="options-api"><code>this.$emit</code></span><span class="composition-api"><code>emit</code></span> 的内容，返回一个布尔值来表明事件是否合法。</p><div class="composition-api"><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">emit</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineEmits</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 没有校验</span></span>
<span class="line"><span style="color:#E1E4E8;">  click: </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 校验 submit 事件</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">submit</span><span style="color:#E1E4E8;">: ({ </span><span style="color:#FFAB70;">email</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">password</span><span style="color:#E1E4E8;"> }) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (email </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> password) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">warn</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Invalid submit event payload!&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">submitForm</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">email</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">password</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">emit</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;submit&#39;</span><span style="color:#E1E4E8;">, { email, password })</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div></div><div class="options-api"><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  emits: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 没有校验</span></span>
<span class="line"><span style="color:#E1E4E8;">    click: </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 校验 submit 事件</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">submit</span><span style="color:#E1E4E8;">: ({ </span><span style="color:#FFAB70;">email</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">password</span><span style="color:#E1E4E8;"> }) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (email </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> password) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">      } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">warn</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Invalid submit event payload!&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  methods: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">submitForm</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">email</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">password</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">$emit</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;submit&#39;</span><span style="color:#E1E4E8;">, { email, password })</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div></div>`,37)])))}});export{E as __pageData,r as default};
