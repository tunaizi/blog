import{_ as o,q as t,r as l,i as n,a,j as i}from"./chunks/framework.8a6edf47.js";const E=JSON.parse('{"title":"组合式 API 常见问答","description":"","frontmatter":{"outline":"deep"},"headers":[{"level":2,"title":"什么是组合式 API？","slug":"what-is-composition-api","link":"#what-is-composition-api","children":[]},{"level":2,"title":"为什么要有组合式 API？","slug":"why-composition-api","link":"#why-composition-api","children":[{"level":3,"title":"更好的逻辑复用","slug":"better-logic-reuse","link":"#better-logic-reuse","children":[]},{"level":3,"title":"更灵活的代码组织","slug":"more-flexible-code-organization","link":"#more-flexible-code-organization","children":[]},{"level":3,"title":"更好的类型推导","slug":"better-type-inference","link":"#better-type-inference","children":[]},{"level":3,"title":"更小的生产包体积","slug":"smaller-production-bundle-and-less-overhead","link":"#smaller-production-bundle-and-less-overhead","children":[]}]},{"level":2,"title":"与选项式 API 的关系","slug":"relationship-with-options-api","link":"#relationship-with-options-api","children":[{"level":3,"title":"取舍","slug":"trade-offs","link":"#trade-offs","children":[]},{"level":3,"title":"组合式 API 是否覆盖了所有场景？","slug":"does-composition-api-cover-all-use-cases","link":"#does-composition-api-cover-all-use-cases","children":[]},{"level":3,"title":"可以在同一个组件中使用两种 API 吗？","slug":"can-i-use-both-apis-in-the-same-component","link":"#can-i-use-both-apis-in-the-same-component","children":[]},{"level":3,"title":"选项式 API 会被废弃吗？","slug":"will-options-api-be-deprecated","link":"#will-options-api-be-deprecated","children":[]}]},{"level":2,"title":"与 Class API 的关系","slug":"relationship-with-class-api","link":"#relationship-with-class-api","children":[]},{"level":2,"title":"和 React Hooks 的对比","slug":"comparison-with-react-hooks","link":"#comparison-with-react-hooks","children":[]}],"relativePath":"guide/extras/composition-api-faq.md","filePath":"guide/extras/composition-api-faq.md"}'),p={name:"guide/extras/composition-api-faq.md"};function r(c,e,d,h,u,m){const s=t("VueSchoolLink");return l(),n("div",null,[e[0]||(e[0]=a('<h1 id="composition-api-faq" tabindex="-1">组合式 API 常见问答 <a class="header-anchor" href="#composition-api-faq" aria-label="Permalink to &quot;组合式 API 常见问答 {#composition-api-faq}&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>这个 FAQ 假定你已经有一些使用 Vue 的经验，特别是用选项式 API 使用 Vue 2 的经验。</p></div><h2 id="what-is-composition-api" tabindex="-1">什么是组合式 API？ <a class="header-anchor" href="#what-is-composition-api" aria-label="Permalink to &quot;什么是组合式 API？ {#what-is-composition-api}&quot;">​</a></h2>',3)),i(s,{href:"https://vueschool.io/lessons/introduction-to-the-vue-js-3-composition-api",title:"免费的组合式 API 课程"}),e[1]||(e[1]=a(`<p>组合式 API (Composition API) 是一系列 API 的集合，使我们可以使用函数而不是声明选项的方式书写 Vue 组件。它是一个概括性的术语，涵盖了以下方面的 API：</p><ul><li><p><a href="/blog/api/reactivity-core.html">响应式 API</a>：例如 <code>ref()</code> 和 <code>reactive()</code>，使我们可以直接创建响应式状态、计算属性和侦听器。</p></li><li><p><a href="/blog/api/composition-api-lifecycle.html">生命周期钩子</a>：例如 <code>onMounted()</code> 和 <code>onUnmounted()</code>，使我们可以在组件各个生命周期阶段添加逻辑。</p></li><li><p><a href="/blog/api/composition-api-dependency-injection.html">依赖注入</a>：例如 <code>provide()</code> 和 <code>inject()</code>，使我们可以在使用响应式 API 时，利用 Vue 的依赖注入系统。</p></li></ul><p>组合式 API 是 Vue 3 及 <a href="https://blog.vuejs.org/posts/vue-2-7-naruto.html" target="_blank" rel="noreferrer">Vue 2.7</a> 的内置功能。对于更老的 Vue 2 版本，可以使用官方维护的插件 <a href="https://github.com/vuejs/composition-api" target="_blank" rel="noreferrer"><code>@vue/composition-api</code></a>。在 Vue 3 中，组合式 API 基本上都会配合 <a href="/blog/api/sfc-script-setup.html"><code>&lt;script setup&gt;</code></a> 语法在单文件组件中使用。下面是一个使用组合式 API 的组件示例：</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { ref, onMounted } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 响应式状态</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">count</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 更改状态、触发更新的函数</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">increment</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  count.value</span><span style="color:#F97583;">++</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 生命周期钩子</span></span>
<span class="line"><span style="color:#B392F0;">onMounted</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`The initial count is \${</span><span style="color:#E1E4E8;">count</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">value</span><span style="color:#9ECBFF;">}.\`</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">@click</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;increment&quot;</span><span style="color:#E1E4E8;">&gt;Count is: {{ count }}&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><p>虽然这套 API 的风格是基于函数的组合，但<strong>组合式 API 并不是函数式编程</strong>。组合式 API 是以 Vue 中数据可变的、细粒度的响应性系统为基础的，而函数式编程通常强调数据不可变。</p><p>如果你对如何通过组合式 API 使用 Vue 感兴趣，可以通过页面左侧边栏上方的开关将 API 偏好切换到组合式 API，然后重新从头阅读指引。</p><h2 id="why-composition-api" tabindex="-1">为什么要有组合式 API？ <a class="header-anchor" href="#why-composition-api" aria-label="Permalink to &quot;为什么要有组合式 API？ {#why-composition-api}&quot;">​</a></h2><h3 id="better-logic-reuse" tabindex="-1">更好的逻辑复用 <a class="header-anchor" href="#better-logic-reuse" aria-label="Permalink to &quot;更好的逻辑复用 {#better-logic-reuse}&quot;">​</a></h3><p>组合式 API 最基本的优势是它使我们能够通过<a href="/blog/guide/reusability/composables.html">组合函数</a>来实现更加简洁高效的逻辑复用。在选项式 API 中我们主要的逻辑复用机制是 mixins，而组合式 API 解决了 <a href="/blog/guide/reusability/composables.html#vs-mixins">mixins 的所有缺陷</a>。</p><p>组合式 API 提供的逻辑复用能力孵化了一些非常棒的社区项目，比如 <a href="https://vueuse.org/" target="_blank" rel="noreferrer">VueUse</a>，一个不断成长的工具型组合式函数集合。组合式 API 还为其他第三方状态管理库与 Vue 的响应式系统之间的集成提供了一套简洁清晰的机制，例如<a href="/blog/guide/extras/reactivity-in-depth.html#immutable-data">不可变数据</a>、<a href="/blog/guide/extras/reactivity-in-depth.html#state-machines">状态机</a>与 <a href="/blog/guide/extras/reactivity-in-depth.html#rxjs">RxJS</a>。</p><h3 id="more-flexible-code-organization" tabindex="-1">更灵活的代码组织 <a class="header-anchor" href="#more-flexible-code-organization" aria-label="Permalink to &quot;更灵活的代码组织 {#more-flexible-code-organization}&quot;">​</a></h3><p>许多用户喜欢选项式 API 的原因是它在默认情况下就能够让人写出有组织的代码：大部分代码都自然地被放进了对应的选项里。然而，选项式 API 在单个组件的逻辑复杂到一定程度时，会面临一些无法忽视的限制。这些限制主要体现在需要处理多个<strong>逻辑关注点</strong>的组件中，这是我们在许多 Vue 2 的实际案例中所观察到的。</p><p>我们以 Vue CLI GUI 中的文件浏览器组件为例：这个组件承担了以下几个逻辑关注点：</p><ul><li>追踪当前文件夹的状态，展示其内容</li><li>处理文件夹的相关操作 (打开、关闭和刷新)</li><li>支持创建新文件夹</li><li>可以切换到只展示收藏的文件夹</li><li>可以开启对隐藏文件夹的展示</li><li>处理当前工作目录中的变更</li></ul><p>这个组件<a href="https://github.com/vuejs/vue-cli/blob/a09407dd5b9f18ace7501ddb603b95e31d6d93c0/packages/@vue/cli-ui/src/components/folder/FolderExplorer.vue#L198-L404" target="_blank" rel="noreferrer">最原始的版本</a>是由选项式 API 写成的。如果我们为相同的逻辑关注点标上一种颜色，那将会是这样：</p><img alt="folder component before" src="https://user-images.githubusercontent.com/499550/62783021-7ce24400-ba89-11e9-9dd3-36f4f6b1fae2.png" width="129" height="500" style="margin:1.2em auto;"><p>你可以看到，处理相同逻辑关注点的代码被强制拆分在了不同的选项中，位于文件的不同部分。在一个几百行的大组件中，要读懂代码中的一个逻辑关注点，需要在文件中反复上下滚动，这并不理想。另外，如果我们想要将一个逻辑关注点抽取重构到一个可复用的工具函数中，需要从文件的多个不同部分找到所需的正确片段。</p><p>而如果<a href="https://github.com/vuejs-translations/docs-zh-cn/blob/main/assets/FileExplorer.vue" target="_blank" rel="noreferrer">用组合式 API 重构</a>这个组件，将会变成下面右边这样：</p><p><img src="https://user-images.githubusercontent.com/499550/62783026-810e6180-ba89-11e9-8774-e7771c8095d6.png" alt="重构后的文件夹组件"></p><p>现在与同一个逻辑关注点相关的代码被归为了一组：我们无需再为了一个逻辑关注点在不同的选项块间来回滚动切换。此外，我们现在可以很轻松地将这一组代码移动到一个外部文件中，不再需要为了抽象而重新组织代码，大大降低了重构成本，这在长期维护的大型项目中非常关键。</p><h3 id="better-type-inference" tabindex="-1">更好的类型推导 <a class="header-anchor" href="#better-type-inference" aria-label="Permalink to &quot;更好的类型推导 {#better-type-inference}&quot;">​</a></h3><p>近几年来，越来越多的开发者开始使用 <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">TypeScript</a> 书写更健壮可靠的代码，TypeScript 还提供了非常好的 IDE 开发支持。然而选项式 API 是在 2013 年被设计出来的，那时并没有把类型推导考虑进去，因此我们不得不做了一些<a href="https://github.com/vuejs/core/blob/44b95276f5c086e1d88fa3c686a5f39eb5bb7821/packages/runtime-core/src/componentPublicInstance.ts#L132-L165" target="_blank" rel="noreferrer">复杂到夸张的类型体操</a>才实现了对选项式 API 的类型推导。但尽管做了这么多的努力，选项式 API 的类型推导在处理 mixins 和依赖注入类型时依然不甚理想。</p><p>因此，很多想要搭配 TS 使用 Vue 的开发者采用了由 <code>vue-class-component</code> 提供的 Class API。然而，基于 Class 的 API 非常依赖 ES 装饰器，在 2019 年我们开始开发 Vue 3 时，它仍是一个仅处于 stage 2 的语言功能。我们认为基于一个不稳定的语言提案去设计框架的核心 API 风险实在太大了，因此没有继续向 Class API 的方向发展。在那之后装饰器提案果然又发生了很大的变动，在 2022 年才终于到达 stage 3。另一个问题是，基于 Class 的 API 和选项式 API 在逻辑复用和代码组织方面存在相同的限制。</p><p>相比之下，组合式 API 主要利用基本的变量和函数，它们本身就是类型友好的。用组合式 API 重写的代码可以享受到完整的类型推导，不需要书写太多类型标注。大多数时候，用 TypeScript 书写的组合式 API 代码和用 JavaScript 写都差不太多！这也让许多纯 JavaScript 用户也能从 IDE 中享受到部分类型推导功能。</p><h3 id="smaller-production-bundle-and-less-overhead" tabindex="-1">更小的生产包体积 <a class="header-anchor" href="#smaller-production-bundle-and-less-overhead" aria-label="Permalink to &quot;更小的生产包体积 {#smaller-production-bundle-and-less-overhead}&quot;">​</a></h3><p>搭配 <code>&lt;script setup&gt;</code> 使用组合式 API 比等价情况下的选项式 API 更高效，对代码压缩也更友好。这是由于 <code>&lt;script setup&gt;</code> 形式书写的组件模板被编译为了一个内联函数，和 <code>&lt;script setup&gt;</code> 中的代码位于同一作用域。不像选项式 API 需要依赖 <code>this</code> 上下文对象访问属性，被编译的模板可以直接访问 <code>&lt;script setup&gt;</code> 中定义的变量，无需从实例中代理。这对代码压缩更友好，因为本地变量的名字可以被压缩，但对象的属性名则不能。</p><h2 id="relationship-with-options-api" tabindex="-1">与选项式 API 的关系 <a class="header-anchor" href="#relationship-with-options-api" aria-label="Permalink to &quot;与选项式 API 的关系 {#relationship-with-options-api}&quot;">​</a></h2><h3 id="trade-offs" tabindex="-1">取舍 <a class="header-anchor" href="#trade-offs" aria-label="Permalink to &quot;取舍 {#trade-offs}&quot;">​</a></h3><p>一些从选项式 API 迁移来的用户发现，他们的组合式 API 代码缺乏组织性，并得出了组合式 API 在代码组织方面“更糟糕”的结论。我们建议持有这类观点的用户换个角度思考这个问题。</p><p>组合式 API 不像选项式 API 那样会手把手教你该把代码放在哪里。但反过来，它却让你可以像编写普通的 JavaScript 那样来编写组件代码。这意味着<strong>你能够，并且应该在写组合式 API 的代码时也运用上所有普通 JavaScript 代码组织的最佳实践</strong>。如果你可以编写组织良好的 JavaScript，你也应该有能力编写组织良好的组合式 API 代码。</p><p>选项式 API 确实允许你在编写组件代码时“少思考”，这是许多用户喜欢它的原因。然而，在减少费神思考的同时，它也将你锁定在规定的代码组织模式中，没有摆脱的余地，这会导致在更大规模的项目中难以进行重构或提高代码质量。在这方面，组合式 API 提供了更好的长期可维护性。</p><h3 id="does-composition-api-cover-all-use-cases" tabindex="-1">组合式 API 是否覆盖了所有场景？ <a class="header-anchor" href="#does-composition-api-cover-all-use-cases" aria-label="Permalink to &quot;组合式 API 是否覆盖了所有场景？ {#does-composition-api-cover-all-use-cases}&quot;">​</a></h3><p>组合式 API 能够覆盖所有状态逻辑方面的需求。除此之外，只需要用到一小部分选项：<code>props</code>，<code>emits</code>，<code>name</code> 和 <code>inheritAttrs</code>。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>从 3.3 开始你可以直接通过 <code>&lt;script setup&gt;</code> 中的 <code>defineOptions</code> 来设置组件名或 <code>inheritAttrs</code> 属性。</p></div><p>如果你在代码中只使用了组合式 API (以及上述必需的选项)，那么你可以通过配置<a href="/blog/api/compile-time-flags.html">编译时标记</a>来去掉 Vue 运行时中针对选项式 API 支持的代码，从而减小生产包大概几 kb 左右的体积。注意这个配置也会影响你依赖中的 Vue 组件。</p><h3 id="can-i-use-both-apis-in-the-same-component" tabindex="-1">可以在同一个组件中使用两种 API 吗？ <a class="header-anchor" href="#can-i-use-both-apis-in-the-same-component" aria-label="Permalink to &quot;可以在同一个组件中使用两种 API 吗？ {#can-i-use-both-apis-in-the-same-component}&quot;">​</a></h3><p>可以。你可以在一个选项式 API 的组件中通过 <a href="/blog/api/composition-api-setup.html"><code>setup()</code></a> 选项来使用组合式 API。</p><p>然而，我们只推荐你在一个已经基于选项式 API 开发了很久、但又需要和基于组合式 API 的新代码或是第三方库整合的项目中这样做。</p><h3 id="will-options-api-be-deprecated" tabindex="-1">选项式 API 会被废弃吗？ <a class="header-anchor" href="#will-options-api-be-deprecated" aria-label="Permalink to &quot;选项式 API 会被废弃吗？ {#will-options-api-be-deprecated}&quot;">​</a></h3><p>不会，我们没有任何计划这样做。选项式 API 也是 Vue 不可分割的一部分，也有很多开发者喜欢它。我们也意识到组合式 API 更适用于大型的项目，而对于中小型项目来说选项式 API 仍然是一个不错的选择。</p><h2 id="relationship-with-class-api" tabindex="-1">与 Class API 的关系 <a class="header-anchor" href="#relationship-with-class-api" aria-label="Permalink to &quot;与 Class API 的关系 {#relationship-with-class-api}&quot;">​</a></h2><p>我们不再推荐在 Vue 3 中使用 Class API，因为组合式 API 提供了很好的 TypeScript 集成，并具有额外的逻辑重用和代码组织优势。</p><h2 id="comparison-with-react-hooks" tabindex="-1">和 React Hooks 的对比 <a class="header-anchor" href="#comparison-with-react-hooks" aria-label="Permalink to &quot;和 React Hooks 的对比 {#comparison-with-react-hooks}&quot;">​</a></h2><p>组合式 API 提供了和 React Hooks 相同级别的逻辑组织能力，但它们之间有着一些重要的区别。</p><p>React Hooks 在组件每次更新时都会重新调用。这就产生了一些即使是经验丰富的 React 开发者也会感到困惑的问题。这也带来了一些性能问题，并且相当影响开发体验。例如：</p><ul><li><p>Hooks 有严格的调用顺序，并不可以写在条件分支中。</p></li><li><p>React 组件中定义的变量会被一个钩子函数闭包捕获，若开发者传递了错误的依赖数组，它会变得“过期”。这导致了 React 开发者非常依赖 ESLint 规则以确保传递了正确的依赖，然而，这些规则往往不够智能，保持正确的代价过高，在一些边缘情况时会遇到令人头疼的、不必要的报错信息。</p></li><li><p>昂贵的计算需要使用 <code>useMemo</code>，这也需要传入正确的依赖数组。</p></li><li><p>在默认情况下，传递给子组件的事件处理函数会导致子组件进行不必要的更新。子组件默认更新，并需要显式的调用 <code>useCallback</code> 作优化。这个优化同样需要正确的依赖数组，并且几乎在任何时候都需要。忽视这一点会导致默认情况下对应用进行过度渲染，并可能在不知不觉中导致性能问题。</p></li><li><p>要解决变量闭包导致的问题，再结合并发功能，使得很难推理出一段钩子代码是什么时候运行的，并且很不好处理需要在多次渲染间保持引用 (通过 <code>useRef</code>) 的可变状态。</p></li></ul><blockquote><p>注意：上述一些与记忆化相关的问题可以通过即将推出的 <a href="https://react.dev/learn/react-compiler" target="_blank" rel="noreferrer">React Compiler</a> 解决。</p></blockquote><p>相比起来，Vue 的组合式 API：</p><ul><li><p>仅调用 <code>setup()</code> 或 <code>&lt;script setup&gt;</code> 的代码一次。这使得代码更符合日常 JavaScript 的直觉，不需要担心闭包变量的问题。组合式 API 也并不限制调用顺序，还可以有条件地进行调用。</p></li><li><p>Vue 的响应性系统运行时会自动收集计算属性和侦听器的依赖，因此无需手动声明依赖。</p></li><li><p>无需手动缓存回调函数来避免不必要的组件更新。Vue 细粒度的响应性系统能够确保在绝大部分情况下组件仅执行必要的更新。对 Vue 开发者来说几乎不怎么需要对子组件更新进行手动优化。</p></li></ul><p>我们承认 React Hooks 的创造性，它是组合式 API 的一个主要灵感来源。然而，它的设计也确实存在上面提到的问题，而 Vue 的响应性模型恰好提供了一种解决这些问题的方法。</p>`,50))])}const P=o(p,[["render",r]]);export{E as __pageData,P as default};
