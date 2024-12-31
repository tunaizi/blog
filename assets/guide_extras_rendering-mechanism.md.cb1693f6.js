import{_ as a,r as n,i as l,a as p}from"./chunks/framework.8a6edf47.js";const e="/blog/assets/render-pipeline.03805016.png",g=JSON.parse('{"title":"渲染机制","description":"","frontmatter":{"outline":"deep"},"headers":[{"level":2,"title":"虚拟 DOM","slug":"virtual-dom","link":"#virtual-dom","children":[]},{"level":2,"title":"渲染管线","slug":"render-pipeline","link":"#render-pipeline","children":[]},{"level":2,"title":"模板 vs. 渲染函数","slug":"templates-vs-render-functions","link":"#templates-vs-render-functions","children":[]},{"level":2,"title":"带编译时信息的虚拟 DOM","slug":"compiler-informed-virtual-dom","link":"#compiler-informed-virtual-dom","children":[{"level":3,"title":"静态提升","slug":"static-hoisting","link":"#static-hoisting","children":[]},{"level":3,"title":"更新类型标记","slug":"patch-flags","link":"#patch-flags","children":[]},{"level":3,"title":"树结构打平","slug":"tree-flattening","link":"#tree-flattening","children":[]},{"level":3,"title":"对 SSR 激活的影响","slug":"impact-on-ssr-hydration","link":"#impact-on-ssr-hydration","children":[]}]}],"relativePath":"guide/extras/rendering-mechanism.md","filePath":"guide/extras/rendering-mechanism.md"}'),o={name:"guide/extras/rendering-mechanism.md"};function t(r,s,c,i,E,d){return n(),l("div",null,s[0]||(s[0]=[p(`<h1 id="rendering-mechanism" tabindex="-1">渲染机制 <a class="header-anchor" href="#rendering-mechanism" aria-label="Permalink to &quot;渲染机制 {#rendering-mechanism}&quot;">​</a></h1><p>Vue 是如何将一份模板转换为真实的 DOM 节点的，又是如何高效地更新这些节点的呢？我们接下来就将尝试通过深入研究 Vue 的内部渲染机制来解释这些问题。</p><h2 id="virtual-dom" tabindex="-1">虚拟 DOM <a class="header-anchor" href="#virtual-dom" aria-label="Permalink to &quot;虚拟 DOM {#virtual-dom}&quot;">​</a></h2><p>你可能已经听说过“虚拟 DOM”的概念了，Vue 的渲染系统正是基于这个概念构建的。</p><p>虚拟 DOM (Virtual DOM，简称 VDOM) 是一种编程概念，意为将目标所需的 UI 通过数据结构“虚拟”地表示出来，保存在内存中，然后将真实的 DOM 与之保持同步。这个概念是由 <a href="https://reactjs.org/" target="_blank" rel="noreferrer">React</a> 率先开拓，随后被许多不同的框架采用，当然也包括 Vue。</p><p>与其说虚拟 DOM 是一种具体的技术，不如说是一种模式，所以并没有一个标准的实现。我们可以用一个简单的例子来说明：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">vnode</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  type: </span><span style="color:#9ECBFF;">&#39;div&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  props: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    id: </span><span style="color:#9ECBFF;">&#39;hello&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  children: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/* 更多 vnode */</span></span>
<span class="line"><span style="color:#E1E4E8;">  ]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>这里所说的 <code>vnode</code> 即一个纯 JavaScript 的对象 (一个“虚拟节点”)，它代表着一个 <code>&lt;div&gt;</code> 元素。它包含我们创建实际元素所需的所有信息。它还包含更多的子节点，这使它成为虚拟 DOM 树的根节点。</p><p>一个运行时渲染器将会遍历整个虚拟 DOM 树，并据此构建真实的 DOM 树。这个过程被称为<strong>挂载</strong> (mount)。</p><p>如果我们有两份虚拟 DOM 树，渲染器将会有比较地遍历它们，找出它们之间的区别，并应用这其中的变化到真实的 DOM 上。这个过程被称为<strong>更新</strong> (patch)，又被称为“比对”(diffing) 或“协调”(reconciliation)。</p><p>虚拟 DOM 带来的主要收益是它让开发者能够灵活、声明式地创建、检查和组合所需 UI 的结构，同时只需把具体的 DOM 操作留给渲染器去处理。</p><h2 id="render-pipeline" tabindex="-1">渲染管线 <a class="header-anchor" href="#render-pipeline" aria-label="Permalink to &quot;渲染管线 {#render-pipeline}&quot;">​</a></h2><p>从高层面的视角看，Vue 组件挂载时会发生如下几件事：</p><ol><li><p><strong>编译</strong>：Vue 模板被编译为<strong>渲染函数</strong>：即用来返回虚拟 DOM 树的函数。这一步骤可以通过构建步骤提前完成，也可以通过使用运行时编译器即时完成。</p></li><li><p><strong>挂载</strong>：运行时渲染器调用渲染函数，遍历返回的虚拟 DOM 树，并基于它创建实际的 DOM 节点。这一步会作为<a href="./reactivity-in-depth.html">响应式副作用</a>执行，因此它会追踪其中所用到的所有响应式依赖。</p></li><li><p><strong>更新</strong>：当一个依赖发生变化后，副作用会重新运行，这时候会创建一个更新后的虚拟 DOM 树。运行时渲染器遍历这棵新树，将它与旧树进行比较，然后将必要的更新应用到真实 DOM 上去。</p></li></ol><p><img src="`+e+`" alt="render pipeline"></p><h2 id="templates-vs-render-functions" tabindex="-1">模板 vs. 渲染函数 <a class="header-anchor" href="#templates-vs-render-functions" aria-label="Permalink to &quot;模板 vs. 渲染函数 {#templates-vs-render-functions}&quot;">​</a></h2><p>Vue 模板会被预编译成虚拟 DOM 渲染函数。Vue 也提供了 API 使我们可以不使用模板编译，直接手写渲染函数。在处理高度动态的逻辑时，渲染函数相比于模板更加灵活，因为你可以完全地使用 JavaScript 来构造你想要的 vnode。</p><p>那么为什么 Vue 默认推荐使用模板呢？有以下几点原因：</p><ol><li><p>模板更贴近实际的 HTML。这使得我们能够更方便地重用一些已有的 HTML 代码片段，能够带来更好的可访问性体验、能更方便地使用 CSS 应用样式，并且更容易使设计师理解和修改。</p></li><li><p>由于其确定的语法，更容易对模板做静态分析。这使得 Vue 的模板编译器能够应用许多编译时优化来提升虚拟 DOM 的性能表现 (下面我们将展开讨论)。</p></li></ol><p>在实践中，模板对大多数的应用场景都是够用且高效的。渲染函数一般只会在需要处理高度动态渲染逻辑的可重用组件中使用。想了解渲染函数的更多使用细节可以去到<a href="./render-function.html">渲染函数 &amp; JSX</a> 章节继续阅读。</p><h2 id="compiler-informed-virtual-dom" tabindex="-1">带编译时信息的虚拟 DOM <a class="header-anchor" href="#compiler-informed-virtual-dom" aria-label="Permalink to &quot;带编译时信息的虚拟 DOM {#compiler-informed-virtual-dom}&quot;">​</a></h2><p>虚拟 DOM 在 React 和大多数其他实现中都是纯运行时的：更新算法无法预知新的虚拟 DOM 树会是怎样，因此它总是需要遍历整棵树、比较每个 vnode 上 props 的区别来确保正确性。另外，即使一棵树的某个部分从未改变，还是会在每次重渲染时创建新的 vnode，带来了大量不必要的内存压力。这也是虚拟 DOM 最受诟病的地方之一：这种有点暴力的更新过程通过牺牲效率来换取声明式的写法和最终的正确性。</p><p>但实际上我们并不需要这样。在 Vue 中，框架同时控制着编译器和运行时。这使得我们可以为紧密耦合的模板渲染器应用许多编译时优化。编译器可以静态分析模板并在生成的代码中留下标记，使得运行时尽可能地走捷径。与此同时，我们仍旧保留了边界情况时用户想要使用底层渲染函数的能力。我们称这种混合解决方案为<strong>带编译时信息的虚拟 DOM</strong>。</p><p>下面，我们将讨论一些 Vue 编译器用来提高虚拟 DOM 运行时性能的主要优化：</p><h3 id="static-hoisting" tabindex="-1">静态提升 <a class="header-anchor" href="#static-hoisting" aria-label="Permalink to &quot;静态提升 {#static-hoisting}&quot;">​</a></h3><p>在模板中常常有部分内容是不带任何动态绑定的：</p><div class="language-template"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki github-dark has-highlighted-lines"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;foo&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt; </span><span style="color:#6A737D;">&lt;!-- 需提升 --&gt;</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;bar&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt; </span><span style="color:#6A737D;">&lt;!-- 需提升 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;{{ dynamic }}&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><p><a href="https://template-explorer.vuejs.org/#eyJzcmMiOiI8ZGl2PlxuICA8ZGl2PmZvbzwvZGl2PiA8IS0tIGhvaXN0ZWQgLS0+XG4gIDxkaXY+YmFyPC9kaXY+IDwhLS0gaG9pc3RlZCAtLT5cbiAgPGRpdj57eyBkeW5hbWljIH19PC9kaXY+XG48L2Rpdj5cbiIsIm9wdGlvbnMiOnsiaG9pc3RTdGF0aWMiOnRydWV9fQ==" target="_blank" rel="noreferrer">在模板编译预览中查看</a></p><p><code>foo</code> 和 <code>bar</code> 这两个 div 是完全静态的，没有必要在重新渲染时再次创建和比对它们。Vue 编译器自动地会提升这部分 vnode 创建函数到这个模板的渲染函数之外，并在每次渲染时都使用这份相同的 vnode，渲染器知道新旧 vnode 在这部分是完全相同的，所以会完全跳过对它们的差异比对。</p><p>此外，当有足够多连续的静态元素时，它们还会再被压缩为一个“静态 vnode”，其中包含的是这些节点相应的纯 HTML 字符串。(<a href="https://template-explorer.vuejs.org/#eyJzcmMiOiI8ZGl2PlxuICA8ZGl2IGNsYXNzPVwiZm9vXCI+Zm9vPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJmb29cIj5mb288L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImZvb1wiPmZvbzwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiZm9vXCI+Zm9vPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJmb29cIj5mb288L2Rpdj5cbiAgPGRpdj57eyBkeW5hbWljIH19PC9kaXY+XG48L2Rpdj4iLCJzc3IiOmZhbHNlLCJvcHRpb25zIjp7ImhvaXN0U3RhdGljIjp0cnVlfX0=" target="_blank" rel="noreferrer">示例</a>)。这些静态节点会直接通过 <code>innerHTML</code> 来挂载。同时还会在初次挂载后缓存相应的 DOM 节点。如果这部分内容在应用中其他地方被重用，那么将会使用原生的 <code>cloneNode()</code> 方法来克隆新的 DOM 节点，这会非常高效。</p><h3 id="patch-flags" tabindex="-1">更新类型标记 <a class="header-anchor" href="#patch-flags" aria-label="Permalink to &quot;更新类型标记 {#patch-flags}&quot;">​</a></h3><p>对于单个有动态绑定的元素来说，我们可以在编译时推断出大量信息：</p><div class="language-template"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#6A737D;">&lt;!-- 仅含 class 绑定 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> :</span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">{ active }</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- 仅含 id 和 value 绑定 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">input</span><span style="color:#E1E4E8;"> :</span><span style="color:#B392F0;">id</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">id</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;"> :</span><span style="color:#B392F0;">value</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">value</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- 仅含文本子节点 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;{{ dynamic }}&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><p><a href="https://template-explorer.vuejs.org/#eyJzcmMiOiI8ZGl2IDpjbGFzcz1cInsgYWN0aXZlIH1cIj48L2Rpdj5cblxuPGlucHV0IDppZD1cImlkXCIgOnZhbHVlPVwidmFsdWVcIj5cblxuPGRpdj57eyBkeW5hbWljIH19PC9kaXY+Iiwib3B0aW9ucyI6e319" target="_blank" rel="noreferrer">在模板编译预览中查看</a></p><p>在为这些元素生成渲染函数时，Vue 在 vnode 创建调用中直接编码了每个元素所需的更新类型：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark has-highlighted-lines"><code><span class="line"><span style="color:#B392F0;">createElementVNode</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;div&quot;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">  class: </span><span style="color:#B392F0;">_normalizeClass</span><span style="color:#E1E4E8;">({ active: _ctx.active })</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">}, </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">/* CLASS */</span><span style="color:#E1E4E8;">)</span></span></code></pre></div><p>最后这个参数 <code>2</code> 就是一个<a href="https://github.com/vuejs/core/blob/main/packages/shared/src/patchFlags.ts" target="_blank" rel="noreferrer">更新类型标记 (patch flag)</a>。一个元素可以有多个更新类型标记，会被合并成一个数字。运行时渲染器也将会使用<a href="https://en.wikipedia.org/wiki/Bitwise_operation" target="_blank" rel="noreferrer">位运算</a>来检查这些标记，确定相应的更新操作：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (vnode.patchFlag </span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;"> PatchFlags.</span><span style="color:#79B8FF;">CLASS</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">/* 2 */</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 更新节点的 CSS class</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>位运算检查是非常快的。通过这样的更新类型标记，Vue 能够在更新带有动态绑定的元素时做最少的操作。</p><p>Vue 也为 vnode 的子节点标记了类型。举例来说，包含多个根节点的模板被表示为一个片段 (fragment)，大多数情况下，我们可以确定其顺序是永远不变的，所以这部分信息就可以提供给运行时作为一个更新类型标记。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark has-highlighted-lines"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">render</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> (</span><span style="color:#B392F0;">_openBlock</span><span style="color:#E1E4E8;">(), </span><span style="color:#B392F0;">_createElementBlock</span><span style="color:#E1E4E8;">(_Fragment, </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">, [</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/* children */</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  ], </span><span style="color:#79B8FF;">64</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">/* STABLE_FRAGMENT */</span><span style="color:#E1E4E8;">))</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>运行时会完全跳过对这个根片段中子元素顺序的重新协调过程。</p><h3 id="tree-flattening" tabindex="-1">树结构打平 <a class="header-anchor" href="#tree-flattening" aria-label="Permalink to &quot;树结构打平 {#tree-flattening}&quot;">​</a></h3><p>再来看看上面这个例子中生成的代码，你会发现所返回的虚拟 DOM 树是经一个特殊的 <code>createElementBlock()</code> 调用创建的：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark has-highlighted-lines"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">render</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> (</span><span style="color:#B392F0;">_openBlock</span><span style="color:#E1E4E8;">(), </span><span style="color:#B392F0;">_createElementBlock</span><span style="color:#E1E4E8;">(_Fragment, </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">, [</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/* children */</span></span>
<span class="line"><span style="color:#E1E4E8;">  ], </span><span style="color:#79B8FF;">64</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">/* STABLE_FRAGMENT */</span><span style="color:#E1E4E8;">))</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>这里我们引入一个概念“区块”，内部结构是稳定的一个部分可被称之为一个区块。在这个用例中，整个模板只有一个区块，因为这里没有用到任何结构性指令 (比如 <code>v-if</code> 或者 <code>v-for</code>)。</p><p>每一个块都会追踪其所有带更新类型标记的后代节点 (不只是直接子节点)，举例来说：</p><div class="language-template"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki github-dark has-highlighted-lines"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt; </span><span style="color:#6A737D;">&lt;!-- root block --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;...&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;         </span><span style="color:#6A737D;">&lt;!-- 不会追踪 --&gt;</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> :</span><span style="color:#B392F0;">id</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">id</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;   </span><span style="color:#6A737D;">&lt;!-- 要追踪 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;                  </span><span style="color:#6A737D;">&lt;!-- 不会追踪 --&gt;</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;{{ bar }}&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt; </span><span style="color:#6A737D;">&lt;!-- 要追踪 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><p>编译的结果会被打平为一个数组，仅包含所有动态的后代节点：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark"><code><span class="line"><span style="color:#e1e4e8;">div (block root)</span></span>
<span class="line"><span style="color:#e1e4e8;">- div 带有 :id 绑定</span></span>
<span class="line"><span style="color:#e1e4e8;">- div 带有 {{ bar }} 绑定</span></span></code></pre></div><p>当这个组件需要重渲染时，只需要遍历这个打平的树而非整棵树。这也就是我们所说的<strong>树结构打平</strong>，这大大减少了我们在虚拟 DOM 协调时需要遍历的节点数量。模板中任何的静态部分都会被高效地略过。</p><p><code>v-if</code> 和 <code>v-for</code> 指令会创建新的区块节点：</p><div class="language-template"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt; </span><span style="color:#6A737D;">&lt;!-- 根区块 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-if</span><span style="color:#E1E4E8;">&gt; </span><span style="color:#6A737D;">&lt;!-- if 区块 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      ...</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><p>一个子区块会在父区块的动态子节点数组中被追踪，这为他们的父区块保留了一个稳定的结构。</p><h3 id="impact-on-ssr-hydration" tabindex="-1">对 SSR 激活的影响 <a class="header-anchor" href="#impact-on-ssr-hydration" aria-label="Permalink to &quot;对 SSR 激活的影响 {#impact-on-ssr-hydration}&quot;">​</a></h3><p>更新类型标记和树结构打平都大大提升了 Vue <a href="/blog/guide/scaling-up/ssr.html#client-hydration">SSR 激活</a>的性能表现：</p><ul><li><p>单个元素的激活可以基于相应 vnode 的更新类型标记走更快的捷径。</p></li><li><p>在激活时只有区块节点和其动态子节点需要被遍历，这在模板层面上实现更高效的部分激活。</p></li></ul>`,57)]))}const h=a(o,[["render",t]]);export{g as __pageData,h as default};
