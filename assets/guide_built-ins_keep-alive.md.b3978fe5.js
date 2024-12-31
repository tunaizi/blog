import{t as g,r as e,i as t,b as n,e as m,o as h,s as r,u as b,V as B,W as E,c as d,g as c,B as y,X as A,a as i,j as u}from"./chunks/framework.8a6edf47.js";const f={style:{"margin-right":"20px"}},v={__name:"CompA",setup(o){const a=g(0);return(l,s)=>(e(),t(h,null,[s[1]||(s[1]=n("p",null,"Current component: A",-1)),n("span",f,"Count: "+m(a.value),1),n("button",{onClick:s[0]||(s[0]=p=>a.value++)},"+")],64))}},C={style:{"margin-right":"20px"}},k={__name:"CompB",setup(o){const a=g("");return(l,s)=>(e(),t(h,null,[s[1]||(s[1]=n("p",null,"Current component: B",-1)),n("span",C,"Message is: "+m(a.value),1),r(n("input",{"onUpdate:modelValue":s[0]||(s[0]=p=>a.value=p)},null,512),[[b,a.value]])],64))}},D={class:"demo"},F={__name:"SwitchComponent",props:{useKeepAlive:Boolean},setup(o){const a=B(v);return(l,s)=>(e(),t("div",D,[n("label",null,[r(n("input",{type:"radio","onUpdate:modelValue":s[0]||(s[0]=p=>a.value=p),value:v},null,512),[[E,a.value]]),s[2]||(s[2]=d(" A"))]),n("label",null,[r(n("input",{type:"radio","onUpdate:modelValue":s[1]||(s[1]=p=>a.value=p),value:k},null,512),[[E,a.value]]),s[3]||(s[3]=d(" B"))]),o.useKeepAlive?(e(),c(A,{key:0},[(e(),c(y(a.value)))],1024)):(e(),c(y(a.value),{key:1}))]))}},K=JSON.parse('{"title":"KeepAlive","description":"","frontmatter":{},"headers":[{"level":2,"title":"基本使用","slug":"basic-usage","link":"#basic-usage","children":[]},{"level":2,"title":"包含/排除","slug":"include-exclude","link":"#include-exclude","children":[]},{"level":2,"title":"最大缓存实例数","slug":"max-cached-instances","link":"#max-cached-instances","children":[]},{"level":2,"title":"缓存实例的生命周期","slug":"lifecycle-of-cached-instance","link":"#lifecycle-of-cached-instance","children":[]}],"relativePath":"guide/built-ins/keep-alive.md","filePath":"guide/built-ins/keep-alive.md"}'),q={name:"guide/built-ins/keep-alive.md"},J=Object.assign(q,{setup(o){return(a,l)=>(e(),t("div",null,[l[0]||(l[0]=i('<h1 id="keepalive" tabindex="-1">KeepAlive <a class="header-anchor" href="#keepalive" aria-label="Permalink to &quot;KeepAlive {#keepalive}&quot;">​</a></h1><p><code>&lt;KeepAlive&gt;</code> 是一个内置组件，它的功能是在多个组件间动态切换时缓存被移除的组件实例。</p><h2 id="basic-usage" tabindex="-1">基本使用 <a class="header-anchor" href="#basic-usage" aria-label="Permalink to &quot;基本使用 {#basic-usage}&quot;">​</a></h2><p>在组件基础章节中，我们已经介绍了通过特殊的 <code>&lt;component&gt;</code> 元素来实现<a href="/blog/guide/essentials/component-basics.html#dynamic-components">动态组件</a>的用法：</p><div class="language-template"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">component</span><span style="color:#E1E4E8;"> :</span><span style="color:#B392F0;">is</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">activeComponent</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span></code></pre></div><p>默认情况下，一个组件实例在被替换掉后会被销毁。这会导致它丢失其中所有已变化的状态——当这个组件再一次被显示时，会创建一个只带有初始状态的新实例。</p><p>在下面的例子中，你会看到两个有状态的组件——A 有一个计数器，而 B 有一个通过 <code>v-model</code> 同步 input 框输入内容的文字展示。尝试先更改一下任意一个组件的状态，然后切走，再切回来：</p>',7)),u(F),l[1]||(l[1]=i(`<p>你会发现在切回来之后，之前已更改的状态都被重置了。</p><p>在切换时创建新的组件实例通常是有意义的，但在这个例子中，我们的确想要组件能在被“切走”的时候保留它们的状态。要解决这个问题，我们可以用 <code>&lt;KeepAlive&gt;</code> 内置组件将这些动态组件包装起来：</p><div class="language-template"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#6A737D;">&lt;!-- 非活跃的组件将会被缓存！ --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#79B8FF;">KeepAlive</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">component</span><span style="color:#E1E4E8;"> :</span><span style="color:#B392F0;">is</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">activeComponent</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#79B8FF;">KeepAlive</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><p>现在，在组件切换时状态也能被保留了：</p>`,4)),u(F,{"use-KeepAlive":""}),l[2]||(l[2]=i(`<div class="composition-api"><p><a href="https://play.vuejs.org/#eNqtUsFOwzAM/RWrl4IGC+cqq2h3RFw495K12YhIk6hJi1DVf8dJSllBaAJxi+2XZz8/j0lhzHboeZIl1NadMA4sd73JKyVaozsHI9hnJqV+feJHmODY6RZS/JEuiL1uTTEXtiREnnINKFeAcgZUqtbKOqj7ruPKwe6s2VVguq4UJXEynAkDx1sjmeMYAdBGDFBLZu2uShre6ioJeaxIduAyp0KZ3oF7MxwRHWsEQmC4bXXDJWbmxpjLBiZ7DwptMUFyKCiJNP/BWUbO8gvnA+emkGKIgkKqRrRWfh+Z8MIWwpySpfbxn6wJKMGV4IuSs0UlN1HVJae7bxYvBuk+2IOIq7sLnph8P9u5DJv5VfpWWLaGqTzwZTCOM/M0IaMvBMihd04ruK+lqF/8Ajxms8EFbCiJxR8khsP6ncQosLWnWV6a/kUf2nqu75Fby04chA0iPftaYryhz6NBRLjdtajpHZTWPio=" target="_blank" rel="noreferrer">在演练场中尝试一下</a></p></div><div class="options-api"><p><a href="https://play.vuejs.org/#eNqtU8tugzAQ/JUVl7RKWveMXFTIseofcHHAiawasPxArRD/3rVNSEhbpVUrIWB3x7PM7jAkuVL3veNJmlBTaaFsVraiUZ22sO0alcNedw2s7kmIPHS1ABQLQDEBAMqWvwVQzffMSQuDz1aI6VreWpPCEBtsJppx4wE1s+zmNoIBNLdOt8cIjzut8XAKq3A0NAIY/QNveFEyi8DA8kZJZjlGALQWPVSSGfNYJjVvujIJeaxItuMyo6JVzoJ9VxwRmtUCIdDfNV3NJWam5j7HpPOY8BEYkwxySiLLP1AWkbK4oHzmXOVS9FFOSM3jhFR4WTNfRslcO54nSwJKcCD4RsnZmJJNFPXJEl8t88quOuc39fCrHalsGyWcnJL62apYNoq12UQ8DLEFjCMy+kKA7Jy1XQtPlRTVqx+Jx6zXOJI1JbH4jejg3T+KbswBzXnFlz9Tjes/V/3CjWEHDsL/OYNvdCE8Wu3kLUQEhy+ljh+brFFu" target="_blank" rel="noreferrer">在演练场中尝试一下</a></p></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>在 <a href="/blog/guide/essentials/component-basics.html#in-dom-template-parsing-caveats">DOM 内模板</a>中使用时，它应该被写为 <code>&lt;keep-alive&gt;</code>。</p></div><h2 id="include-exclude" tabindex="-1">包含/排除 <a class="header-anchor" href="#include-exclude" aria-label="Permalink to &quot;包含/排除 {#include-exclude}&quot;">​</a></h2><p><code>&lt;KeepAlive&gt;</code> 默认会缓存内部的所有组件实例，但我们可以通过 <code>include</code> 和 <code>exclude</code> prop 来定制该行为。这两个 prop 的值都可以是一个以英文逗号分隔的字符串、一个正则表达式，或是包含这两种类型的一个数组：</p><div class="language-template"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#6A737D;">&lt;!-- 以英文逗号分隔的字符串 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#79B8FF;">KeepAlive</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">include</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;a,b&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">component</span><span style="color:#E1E4E8;"> :</span><span style="color:#B392F0;">is</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">view</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#79B8FF;">KeepAlive</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- 正则表达式 (需使用 \`v-bind\`) --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#79B8FF;">KeepAlive</span><span style="color:#E1E4E8;"> :</span><span style="color:#B392F0;">include</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;/</span><span style="color:#DBEDFF;">a</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">b</span><span style="color:#9ECBFF;">/&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">component</span><span style="color:#E1E4E8;"> :</span><span style="color:#B392F0;">is</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">view</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#79B8FF;">KeepAlive</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- 数组 (需使用 \`v-bind\`) --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#79B8FF;">KeepAlive</span><span style="color:#E1E4E8;"> :</span><span style="color:#B392F0;">include</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">[</span><span style="color:#9ECBFF;">&#39;a&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;b&#39;</span><span style="color:#E1E4E8;">]</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">component</span><span style="color:#E1E4E8;"> :</span><span style="color:#B392F0;">is</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">view</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#79B8FF;">KeepAlive</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><p>它会根据组件的 <a href="/blog/api/options-misc.html#name"><code>name</code></a> 选项进行匹配，所以组件如果想要条件性地被 <code>KeepAlive</code> 缓存，就必须显式声明一个 <code>name</code> 选项。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>在 3.2.34 或以上的版本中，使用 <code>&lt;script setup&gt;</code> 的单文件组件会自动根据文件名生成对应的 <code>name</code> 选项，无需再手动声明。</p></div><h2 id="max-cached-instances" tabindex="-1">最大缓存实例数 <a class="header-anchor" href="#max-cached-instances" aria-label="Permalink to &quot;最大缓存实例数 {#max-cached-instances}&quot;">​</a></h2><p>我们可以通过传入 <code>max</code> prop 来限制可被缓存的最大组件实例数。<code>&lt;KeepAlive&gt;</code> 的行为在指定了 <code>max</code> 后类似一个 <a href="https://en.wikipedia.org/wiki/Cache_replacement_policies#Least_recently_used_(LRU)" target="_blank" rel="noreferrer">LRU 缓存</a>：如果缓存的实例数量即将超过指定的那个最大数量，则最久没有被访问的缓存实例将被销毁，以便为新的实例腾出空间。</p><div class="language-template"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#79B8FF;">KeepAlive</span><span style="color:#E1E4E8;"> :</span><span style="color:#B392F0;">max</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">10</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">component</span><span style="color:#E1E4E8;"> :</span><span style="color:#B392F0;">is</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">activeComponent</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#79B8FF;">KeepAlive</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="lifecycle-of-cached-instance" tabindex="-1">缓存实例的生命周期 <a class="header-anchor" href="#lifecycle-of-cached-instance" aria-label="Permalink to &quot;缓存实例的生命周期 {#lifecycle-of-cached-instance}&quot;">​</a></h2><p>当一个组件实例从 DOM 上移除但因为被 <code>&lt;KeepAlive&gt;</code> 缓存而仍作为组件树的一部分时，它将变为<strong>不活跃</strong>状态而不是被卸载。当一个组件实例作为缓存树的一部分插入到 DOM 中时，它将重新<strong>被激活</strong>。</p><div class="composition-api"><p>一个持续存在的组件可以通过 <a href="/blog/api/composition-api-lifecycle.html#onactivated"><code>onActivated()</code></a> 和 <a href="/blog/api/composition-api-lifecycle.html#ondeactivated"><code>onDeactivated()</code></a> 注册相应的两个状态的生命周期钩子：</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { onActivated, onDeactivated } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">onActivated</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 调用时机为首次挂载</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 以及每次从缓存中被重新插入时</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">onDeactivated</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 在从 DOM 上移除、进入缓存</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 以及组件卸载时调用</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div></div><div class="options-api"><p>一个持续存在的组件可以通过 <a href="/blog/api/options-lifecycle.html#activated"><code>activated</code></a> 和 <a href="/blog/api/options-lifecycle.html#deactivated"><code>deactivated</code></a> 选项来注册相应的两个状态的生命周期钩子：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">activated</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 在首次挂载、</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 以及每次从缓存中被重新插入的时候调用</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">deactivated</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 在从 DOM 上移除、进入缓存</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 以及组件卸载时调用</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div></div><p>请注意：</p><ul><li><p><span class="composition-api"><code>onActivated</code></span><span class="options-api"><code>activated</code></span> 在组件挂载时也会调用，并且 <span class="composition-api"><code>onDeactivated</code></span><span class="options-api"><code>deactivated</code></span> 在组件卸载时也会调用。</p></li><li><p>这两个钩子不仅适用于 <code>&lt;KeepAlive&gt;</code> 缓存的根组件，也适用于缓存树中的后代组件。</p></li></ul><hr><p><strong>参考</strong></p><ul><li><a href="/blog/api/built-in-components.html#keepalive"><code>&lt;KeepAlive&gt;</code> API 参考</a></li></ul>`,20))]))}});export{K as __pageData,J as default};
