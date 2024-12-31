import{t as E,q as c,r as n,i as o,a as p,b as l,j as r,h as y,g as i,m as d,Y as u}from"./chunks/framework.8a6edf47.js";const g={class:"demo"},F={key:0,class:"demo modal-demo"},v=JSON.parse('{"title":"Teleport","description":"","frontmatter":{},"headers":[{"level":2,"title":"基本用法","slug":"basic-usage","link":"#basic-usage","children":[]},{"level":2,"title":"搭配组件使用","slug":"using-with-components","link":"#using-with-components","children":[]},{"level":2,"title":"禁用 Teleport","slug":"disabling-teleport","link":"#disabling-teleport","children":[]},{"level":2,"title":"多个 Teleport 共享目标","slug":"multiple-teleports-on-the-same-target","link":"#multiple-teleports-on-the-same-target","children":[]},{"level":2,"title":"延迟解析的 Teleport","slug":"deferred-teleport","link":"#deferred-teleport","children":[]}],"relativePath":"guide/built-ins/teleport.md","filePath":"guide/built-ins/teleport.md"}'),B={name:"guide/built-ins/teleport.md"},D=Object.assign(B,{setup(m){const a=E(!1);return(h,s)=>{const t=c("ClientOnly");return n(),o("div",null,[s[3]||(s[3]=p(`<h1 id="teleport" tabindex="-1">Teleport <a class="header-anchor" href="#teleport" aria-label="Permalink to &quot;Teleport {#teleport}&quot;">​</a></h1><p><code>&lt;Teleport&gt;</code> 是一个内置组件，它可以将一个组件内部的一部分模板“传送”到该组件的 DOM 结构外层的位置去。</p><h2 id="basic-usage" tabindex="-1">基本用法 <a class="header-anchor" href="#basic-usage" aria-label="Permalink to &quot;基本用法 {#basic-usage}&quot;">​</a></h2><p>有时我们可能会遇到这样的场景：一个组件模板的一部分在逻辑上从属于该组件，但从整个应用视图的角度来看，它在 DOM 中应该被渲染在整个 Vue 应用外部的其他地方。</p><p>这类场景最常见的例子就是全屏的模态框。理想情况下，我们希望触发模态框的按钮和模态框本身是在同一个组件中，因为它们都与组件的开关状态有关。但这意味着该模态框将与按钮一起渲染在应用 DOM 结构里很深的地方。这会导致该模态框的 CSS 布局代码很难写。</p><p>试想下面这样的 HTML 结构：</p><div class="language-template"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;outer&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">h3</span><span style="color:#E1E4E8;">&gt;Tooltips with Vue 3 Teleport&lt;/</span><span style="color:#85E89D;">h3</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#79B8FF;">MyModal</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><p>接下来我们来看看 <code>&lt;MyModal&gt;</code> 的实现：</p><div class="composition-api"><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { ref } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">open</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">@click</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;open = true&quot;</span><span style="color:#E1E4E8;">&gt;Open Modal&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-if</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;open&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;modal&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;Hello from the modal!&lt;/</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">@click</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;open = false&quot;</span><span style="color:#E1E4E8;">&gt;Close&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">scoped</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">.modal</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">position</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">fixed</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">z-index</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">999</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">top</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">20</span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">left</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">50</span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">300</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">margin-left</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">-150</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div></div><div class="options-api"><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      open: </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">@click</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;open = true&quot;</span><span style="color:#E1E4E8;">&gt;Open Modal&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-if</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;open&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;modal&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;Hello from the modal!&lt;/</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">@click</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;open = false&quot;</span><span style="color:#E1E4E8;">&gt;Close&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">scoped</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">.modal</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">position</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">fixed</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">z-index</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">999</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">top</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">20</span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">left</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">50</span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">300</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">margin-left</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">-150</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div></div><p>这个组件中有一个 <code>&lt;button&gt;</code> 按钮来触发打开模态框，和一个 class 名为 <code>.modal</code> 的 <code>&lt;div&gt;</code>，它包含了模态框的内容和一个用来关闭的按钮。</p><p>当在初始 HTML 结构中使用这个组件时，会有一些潜在的问题：</p><ul><li><p><code>position: fixed</code> 能够相对于浏览器窗口放置有一个条件，那就是不能有任何祖先元素设置了 <code>transform</code>、<code>perspective</code> 或者 <code>filter</code> 样式属性。也就是说如果我们想要用 CSS <code>transform</code> 为祖先节点 <code>&lt;div class=&quot;outer&quot;&gt;</code> 设置动画，就会不小心破坏模态框的布局！</p></li><li><p>这个模态框的 <code>z-index</code> 受限于它的容器元素。如果有其他元素与 <code>&lt;div class=&quot;outer&quot;&gt;</code> 重叠并有更高的 <code>z-index</code>，则它会覆盖住我们的模态框。</p></li></ul><p><code>&lt;Teleport&gt;</code> 提供了一个更简单的方式来解决此类问题，让我们不需要再顾虑 DOM 结构的问题。让我们用 <code>&lt;Teleport&gt;</code> 改写一下 <code>&lt;MyModal&gt;</code>：</p><div class="language-template"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki github-dark has-highlighted-lines"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;"> @</span><span style="color:#B392F0;">click</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">open </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">&gt;Open Modal&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#E1E4E8;">&lt;</span><span style="color:#79B8FF;">Teleport</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">to</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;body&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-if</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">open</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;modal&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;Hello from the modal!&lt;/</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;"> @</span><span style="color:#B392F0;">click</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">open </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">false</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">&gt;Close&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#79B8FF;">Teleport</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><p><code>&lt;Teleport&gt;</code> 接收一个 <code>to</code> prop 来指定传送的目标。<code>to</code> 的值可以是一个 CSS 选择器字符串，也可以是一个 DOM 元素对象。这段代码的作用就是告诉 Vue“把以下模板片段<strong>传送到 <code>body</code></strong> 标签下”。</p><p>你可以点击下面这个按钮，然后通过浏览器的开发者工具，在 <code>&lt;body&gt;</code> 标签下找到模态框元素：</p>`,17)),l("div",g,[l("button",{onClick:s[0]||(s[0]=e=>a.value=!0)},"Open Modal"),r(t,null,{default:y(()=>[(n(),i(u,{to:"body"},[a.value?(n(),o("div",F,[s[2]||(s[2]=l("p",{style:{"margin-bottom":"20px"}},"Hello from the modal!",-1)),l("button",{onClick:s[1]||(s[1]=e=>a.value=!1)},"Close")])):d("",!0)]))]),_:1})]),s[4]||(s[4]=p(`<p>我们也可以将 <code>&lt;Teleport&gt;</code> 和 <a href="./transition.html"><code>&lt;Transition&gt;</code></a> 结合使用来创建一个带动画的模态框。你可以看看<a href="/blog/examples/#modal">这个示例</a>。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><code>&lt;Teleport&gt;</code> 挂载时，传送的 <code>to</code> 目标必须已经存在于 DOM 中。理想情况下，这应该是整个 Vue 应用 DOM 树外部的一个元素。如果目标元素也是由 Vue 渲染的，你需要确保在挂载 <code>&lt;Teleport&gt;</code> 之前先挂载该元素。</p></div><h2 id="using-with-components" tabindex="-1">搭配组件使用 <a class="header-anchor" href="#using-with-components" aria-label="Permalink to &quot;搭配组件使用 {#using-with-components}&quot;">​</a></h2><p><code>&lt;Teleport&gt;</code> 只改变了渲染的 DOM 结构，它不会影响组件间的逻辑关系。也就是说，如果 <code>&lt;Teleport&gt;</code> 包含了一个组件，那么该组件始终和这个使用了 <code>&lt;Teleport&gt;</code> 的组件保持逻辑上的父子关系。传入的 props 和触发的事件也会照常工作。</p><p>这也意味着来自父组件的注入也会按预期工作，子组件将在 Vue Devtools 中嵌套在父级组件下面，而不是放在实际内容移动到的地方。</p><h2 id="disabling-teleport" tabindex="-1">禁用 Teleport <a class="header-anchor" href="#disabling-teleport" aria-label="Permalink to &quot;禁用 Teleport {#disabling-teleport}&quot;">​</a></h2><p>在某些场景下可能需要视情况禁用 <code>&lt;Teleport&gt;</code>。举例来说，我们想要在桌面端将一个组件当做浮层来渲染，但在移动端则当作行内组件。我们可以通过对 <code>&lt;Teleport&gt;</code> 动态地传入一个 <code>disabled</code> prop 来处理这两种不同情况。</p><div class="language-template"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#79B8FF;">Teleport</span><span style="color:#E1E4E8;"> :</span><span style="color:#B392F0;">disabled</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">isMobile</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  ...</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#79B8FF;">Teleport</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><p>这里的 <code>isMobile</code> 状态可以根据 CSS media query 的不同结果动态地更新。</p><h2 id="multiple-teleports-on-the-same-target" tabindex="-1">多个 Teleport 共享目标 <a class="header-anchor" href="#multiple-teleports-on-the-same-target" aria-label="Permalink to &quot;多个 Teleport 共享目标 {#multiple-teleports-on-the-same-target}&quot;">​</a></h2><p>一个可重用的模态框组件可能同时存在多个实例。对于此类场景，多个 <code>&lt;Teleport&gt;</code> 组件可以将其内容挂载在同一个目标元素上，而顺序就是简单的顺次追加，后挂载的将排在目标元素下更后面的位置上。</p><p>比如下面这样的用例：</p><div class="language-template"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#79B8FF;">Teleport</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">to</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;#modals&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;A&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#79B8FF;">Teleport</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#79B8FF;">Teleport</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">to</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;#modals&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;B&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#79B8FF;">Teleport</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><p>渲染的结果为：</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">id</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;modals&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;A&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;B&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="deferred-teleport" tabindex="-1">延迟解析的 Teleport <sup class="vt-badge" data-text="3.5+"></sup> <a class="header-anchor" href="#deferred-teleport" aria-label="Permalink to &quot;延迟解析的 Teleport &lt;sup class=&quot;vt-badge&quot; data-text=&quot;3.5+&quot; /&gt; {#deferred-teleport}&quot;">​</a></h2><p>在 Vue 3.5 及更高版本中，我们可以使用 <code>defer</code> prop 推迟 Teleport 的目标解析，直到应用的其他部分挂载。这允许 Teleport 将由 Vue 渲染且位于组件树之后部分的容器元素作为目标：</p><div class="language-template"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#79B8FF;">Teleport</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defer</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">to</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;#late-div&quot;</span><span style="color:#E1E4E8;">&gt;...&lt;/</span><span style="color:#79B8FF;">Teleport</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- 稍后出现于模板中的某处 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">id</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;late-div&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><p>请注意，目标元素必须与 Teleport 在同一个挂载/更新周期内渲染，即如果 <code>&lt;div&gt;</code> 在一秒后才挂载，Teleport 仍然会报错。延迟 Teleport 的原理与 <code>mounted</code> 生命周期钩子类似。</p><hr><p><strong>参考</strong></p><ul><li><a href="/blog/api/built-in-components.html#teleport"><code>&lt;Teleport&gt;</code> API 参考</a></li><li><a href="/blog/guide/scaling-up/ssr.html#teleports">在 SSR 中处理 Teleports</a></li></ul>`,22))])}}});export{v as __pageData,D as default};
