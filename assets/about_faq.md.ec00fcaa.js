import{_ as t,r as a,i as r,a as o}from"./chunks/framework.8a6edf47.js";const c=JSON.parse('{"title":"常见问题","description":"","frontmatter":{},"headers":[{"level":2,"title":"谁在维护 Vue？","slug":"who-maintains-vue","link":"#who-maintains-vue","children":[]},{"level":2,"title":"Vue 2 和 Vue 3 之间的区别是什么？","slug":"what-s-the-difference-between-vue-2-and-vue-3","link":"#what-s-the-difference-between-vue-2-and-vue-3","children":[]},{"level":2,"title":"Vue 2 仍在维护吗？","slug":"is-vue-2-still-supported","link":"#is-vue-2-still-supported","children":[]},{"level":2,"title":"Vue 使用什么开源协议？","slug":"what-license-does-vue-use","link":"#what-license-does-vue-use","children":[]},{"level":2,"title":"Vue 支持哪些浏览器？","slug":"what-browsers-does-vue-support","link":"#what-browsers-does-vue-support","children":[]},{"level":2,"title":"Vue 可靠吗？","slug":"is-vue-reliable","link":"#is-vue-reliable","children":[]},{"level":2,"title":"Vue 速度快吗？","slug":"is-vue-fast","link":"#is-vue-fast","children":[]},{"level":2,"title":"Vue 体积小吗？","slug":"is-vue-lightweight","link":"#is-vue-lightweight","children":[]},{"level":2,"title":"Vue 能胜任大规模场景吗？","slug":"does-vue-scale","link":"#does-vue-scale","children":[]},{"level":2,"title":"我可以为 Vue 做贡献吗？","slug":"how-do-i-contribute-to-vue","link":"#how-do-i-contribute-to-vue","children":[]},{"level":2,"title":"我应该使用选项式 API 还是组合式 API？","slug":"should-i-use-options-api-or-composition-api","link":"#should-i-use-options-api-or-composition-api","children":[]},{"level":2,"title":"用 Vue 的时候应该选 JS 还是 TS？","slug":"should-i-use-javascript-or-typescript-with-vue","link":"#should-i-use-javascript-or-typescript-with-vue","children":[]},{"level":2,"title":"Vue 相比于 Web Components 究竟如何？","slug":"how-does-vue-compare-to-web-components","link":"#how-does-vue-compare-to-web-components","children":[]}],"relativePath":"about/faq.md","filePath":"about/faq.md"}'),i={name:"about/faq.md"};function u(s,e,l,n,h,p){return a(),r("div",null,e[0]||(e[0]=[o('<h1 id="frequently-asked-questions" tabindex="-1">常见问题 <a class="header-anchor" href="#frequently-asked-questions" aria-label="Permalink to &quot;常见问题 {#frequently-asked-questions}&quot;">​</a></h1><h2 id="who-maintains-vue" tabindex="-1">谁在维护 Vue？ <a class="header-anchor" href="#who-maintains-vue" aria-label="Permalink to &quot;谁在维护 Vue？ {#who-maintains-vue}&quot;">​</a></h2><p>Vue 是一个独立的社区驱动的项目。它是由<a href="https://twitter.com/yuxiyou" target="_blank" rel="noreferrer">尤雨溪</a>在 2014 年作为其个人项目创建的。今天，Vue 由<a href="/blog/about/team.html">来自世界各地的全职成员和志愿者组成的团队</a>积极活跃地维护着，并由尤雨溪担任项目负责人。你可以在<a href="https://www.youtube.com/watch?v=OrxmtDw4pVI" target="_blank" rel="noreferrer">这部纪录片</a>中了解更多关于 Vue 的故事。</p><p>自 2016 年以来，Vue 的发展主要是通过赞助来保障的，我们在财务上是可维续的。如果你或你的企业从 Vue 中受益，请考虑<a href="/blog/sponsor/">赞助</a>我们，以支持 Vue 的发展！</p><h2 id="what-s-the-difference-between-vue-2-and-vue-3" tabindex="-1">Vue 2 和 Vue 3 之间的区别是什么？ <a class="header-anchor" href="#what-s-the-difference-between-vue-2-and-vue-3" aria-label="Permalink to &quot;Vue 2 和 Vue 3 之间的区别是什么？ {#what-s-the-difference-between-vue-2-and-vue-3}&quot;">​</a></h2><p>Vue 3 是 Vue 当前的最新主版本。它包含了一些 Vue 2 中没有的新特性 (比如 Teleport、Suspense，以及多根元素模板)。同时它也包含了一些与 Vue 2 非兼容性的变更。细节文档请参考 <a href="https://v3-migration.vuejs.org/zh/" target="_blank" rel="noreferrer">Vue 3 迁移指南</a>。</p><p>尽管存在差异，但大多数 Vue API 在两个大版本之间是共享的，所以你的大部分 Vue 2 知识将继续在 Vue 3 中发挥作用。需要注意的是，组合式 API 原本是一个 Vue 3 独有的特性，但目前已兼容至 Vue 2 且在 <a href="https://github.com/vuejs/vue/blob/main/CHANGELOG.md#270-2022-07-01" target="_blank" rel="noreferrer">Vue 2.7</a> 中可用。</p><p>总的来说，Vue 3 提供了更小的包体积、更好的性能、更好的可扩展性和更好的 TypeScript/IDE 支持。如果你现在要开始一个新项目，我们推荐你选择 Vue 3。但也仍然存在一些考虑使用 Vue 2 的理由：</p><ul><li>你需要支持 IE11。Vue 3 用到了一些 IE11 不支持的现代 JavaScript 特性。</li></ul><p>如果你打算将现有的 Vue 2 应用迁移到 Vue 3，请查阅<a href="https://v3-migration.vuejs.org/zh/" target="_blank" rel="noreferrer">迁移指南</a>。</p><h2 id="is-vue-2-still-supported" tabindex="-1">Vue 2 仍在维护吗？ <a class="header-anchor" href="#is-vue-2-still-supported" aria-label="Permalink to &quot;Vue 2 仍在维护吗？ {#is-vue-2-still-supported}&quot;">​</a></h2><p>Vue 2 在 2022 年 6 月发布了最后一个小版本 (2.7)。目前 Vue 2 已经进入维护模式：它将不再提供新特性，但从 2.7 的发布日期开始的 18 个月内，它将继续针对重大错误修复和安全更新进行发布。这意味着 <strong>Vue 2 在 2023 年 12 月 31 日将到达它的截止维护日期</strong>。</p><p>我们相信这将为大多数的生态系统提供了足够长的时间来迁移到 Vue 3。然而，我们也理解可能会有无法在此时间轴上升级的团队或项目仍需满足其安全及合规需求。我们正在与业内专家合作为有这种需求的团队提供 Vue 2 的扩展支持——如果您的团队预期在 2023 年底之后仍然需要使用 Vue 2，请确保提前计划，详见 <a href="https://v2.vuejs.org/lts/" target="_blank" rel="noreferrer">Vue 2 延长 LTS</a>。</p><h2 id="what-license-does-vue-use" tabindex="-1">Vue 使用什么开源协议？ <a class="header-anchor" href="#what-license-does-vue-use" aria-label="Permalink to &quot;Vue 使用什么开源协议？ {#what-license-does-vue-use}&quot;">​</a></h2><p>Vue 是完全免费的开源项目，且基于 <a href="https://opensource.org/licenses/MIT" target="_blank" rel="noreferrer">MIT License</a> 发布。</p><h2 id="what-browsers-does-vue-support" tabindex="-1">Vue 支持哪些浏览器？ <a class="header-anchor" href="#what-browsers-does-vue-support" aria-label="Permalink to &quot;Vue 支持哪些浏览器？ {#what-browsers-does-vue-support}&quot;">​</a></h2><p>最新版本的 Vue (3.x) 只支持<a href="https://caniuse.com/es2016" target="_blank" rel="noreferrer">原生支持 ES2016 的浏览器</a>。这并不包括 IE11。Vue 3.x 使用的 ES2016 功能无法在旧版本的浏览器中进行兼容，如果你需要支持旧版本的浏览器，请使用 Vue 2.x 替代。</p><h2 id="is-vue-reliable" tabindex="-1">Vue 可靠吗？ <a class="header-anchor" href="#is-vue-reliable" aria-label="Permalink to &quot;Vue 可靠吗？ {#is-vue-reliable}&quot;">​</a></h2><p>Vue 是一个成熟的、经历了无数实战考验的框架。它是目前生产环境中使用最广泛的 JavaScript 框架之一，在全球拥有超过 150 万用户，并且在 npm 上的月下载量超过 1000 万次。</p><p>Vue 被世界各地知名且多元的组织在生产环境中使用，包括 Wikimedia 基金会、美国宇航局、苹果、谷歌、微软、GitLab、Zoom、腾讯、微博、哔哩哔哩、快手等等。</p><h2 id="is-vue-fast" tabindex="-1">Vue 速度快吗？ <a class="header-anchor" href="#is-vue-fast" aria-label="Permalink to &quot;Vue 速度快吗？ {#is-vue-fast}&quot;">​</a></h2><p>Vue 3 是性能最强的主流前端框架之一，可以轻松处理大多数 web 应用的场景，并且几乎不需要手动优化。</p><p>跑分方面，Vue 在 <a href="https://krausest.github.io/js-framework-benchmark/current.html" target="_blank" rel="noreferrer">js-framework-benchmark</a> 中的表现比 React 和 Angular 要好得多。在该基准测试中，它还与一些生产环境下最快级别的非虚拟 DOM 框架并驾齐驱。</p><p>请注意，像上面这样的跑分的侧重点在于原始渲染性能在特定情况下的优化，因此不能完全代表真实世界的性能结果。如果你更关心页面加载性能，欢迎用 <a href="https://www.webpagetest.org/lighthouse" target="_blank" rel="noreferrer">WebPageTest</a> 或是 <a href="https://pagespeed.web.dev/" target="_blank" rel="noreferrer">PageSpeed Insights</a> 来测试本站。本文档站是一个完全由 Vue 本身构建，通过静态生成预渲染，并在客户端进行 hydration 的单页应用。它在模拟 4 倍 CPU 降速的 Moto G4 + 低速 4G 网络的情况下依然能获得 100 分的性能得分。</p><p>你可以在<a href="/blog/guide/extras/rendering-mechanism.html">渲染机制</a>章节了解更多关于 Vue 如何自动优化运行时性能的信息，也可以在<a href="/blog/guide/best-practices/performance.html">性能优化指南</a>中了解如何在特别苛刻的情况下优化 Vue 应用。</p><h2 id="is-vue-lightweight" tabindex="-1">Vue 体积小吗？ <a class="header-anchor" href="#is-vue-lightweight" aria-label="Permalink to &quot;Vue 体积小吗？ {#is-vue-lightweight}&quot;">​</a></h2><p>当你通过构建工具使用时，Vue 的许多 API 都是可以<a href="https://developer.mozilla.org/en-US/docs/Glossary/Tree_shaking" target="_blank" rel="noreferrer">“tree-shake”</a>的。例如，如果你不使用内置的 <code>&lt;Transition&gt;</code> 组件，它就不会被包含在最终的生产环境包里。</p><p>对于一个 Vue 的最少 API 使用的 hello world 应用来说，配合最小化和 brotli 压缩，其基线大小只有 <strong>16kb</strong> 左右。但实际的应用大小取决于你使用了多少框架的可选特性。在极端情况下，如果一个应用使用了 Vue 提供的每一个特性，那么总的运行时大小大约为 <strong>27kb</strong>。</p><p>如果不通过构建工具使用 Vue，我们不仅失去了 tree-shaking，而且还必须将模板编译器加载到浏览器。这就使包体积增大到了 <strong>41kb</strong> 左右。因此，如果你为了渐进式增强在没有构建步骤的情况下使用 Vue，则可以考虑使用 <a href="https://github.com/vuejs/petite-vue" target="_blank" rel="noreferrer">petite-vue</a> (仅 <strong>6kb</strong>) 来代替。</p><p>一些诸如 Svelte 的框架使用了一种为单个组件产生极轻量级输出的编译策略。然而，<a href="https://github.com/yyx990803/vue-svelte-size-analysis" target="_blank" rel="noreferrer">我们的研究</a>表明，包大小的差异在很大程度上取决于应用中的组件数量。虽然 Vue 的基线大小更重，但它生成的每个组件的代码更少。在现实的场景中，Vue 应用很可能最终会更轻。</p><h2 id="does-vue-scale" tabindex="-1">Vue 能胜任大规模场景吗？ <a class="header-anchor" href="#does-vue-scale" aria-label="Permalink to &quot;Vue 能胜任大规模场景吗？ {#does-vue-scale}&quot;">​</a></h2><p>是的。尽管有一种误解是 Vue 只适用于简单的场景，但其实 Vue 完全有能力处理大规模的应用：</p><ul><li><p><a href="/blog/guide/scaling-up/sfc.html">单文件组件</a>提供了一个模块化的开发模型，让应用的不同部分能够被隔离开发。</p></li><li><p><a href="/blog/guide/reusability/composables.html">组合式 API</a> 提供一流的 TypeScript 集成，并为组织、提取和重用复杂逻辑提供了简洁的模式。</p></li><li><p><a href="/blog/guide/scaling-up/tooling.html">全面的工具链支持</a>使得开发体验在应用增长的过程中依然可以保持平滑。</p></li><li><p>较低的入门门槛和优秀的文档能够显著降低新手开发者的入职和培训成本。</p></li></ul><h2 id="how-do-i-contribute-to-vue" tabindex="-1">我可以为 Vue 做贡献吗？ <a class="header-anchor" href="#how-do-i-contribute-to-vue" aria-label="Permalink to &quot;我可以为 Vue 做贡献吗？ {#how-do-i-contribute-to-vue}&quot;">​</a></h2><p>非常欢迎！请阅读我们的<a href="/blog/about/community-guide.html">社区指南</a>。</p><h2 id="should-i-use-options-api-or-composition-api" tabindex="-1">我应该使用选项式 API 还是组合式 API？ <a class="header-anchor" href="#should-i-use-options-api-or-composition-api" aria-label="Permalink to &quot;我应该使用选项式 API 还是组合式 API？ {#should-i-use-options-api-or-composition-api}&quot;">​</a></h2><p>如果你是 Vue 的新手，我们在<a href="/blog/guide/introduction.html#which-to-choose">这里</a>提供了一个两者之间宏观的比较。</p><p>如果你过去使用过选项式 API 且正在评估组合式 API，可以查阅<a href="/blog/guide/extras/composition-api-faq.html">组合式 API 常见问题</a>。</p><h2 id="should-i-use-javascript-or-typescript-with-vue" tabindex="-1">用 Vue 的时候应该选 JS 还是 TS？ <a class="header-anchor" href="#should-i-use-javascript-or-typescript-with-vue" aria-label="Permalink to &quot;用 Vue 的时候应该选 JS 还是 TS？ {#should-i-use-javascript-or-typescript-with-vue}&quot;">​</a></h2><p>虽然 Vue 本身是用 TypeScript 实现的，并提供一流的 TypeScript 支持，但它并不强制要求用户使用 TypeScript。</p><p>在向 Vue 添加新特性时，对 TypeScript 的支持是一个重要的考虑因素。即使你自己不使用 TypeScript，考虑了 TypeScript 支持的 API 设计也通常更容易被 IDE 和静态分析工具分析，因此这对大家都有好处。Vue 的 API 设计也尽可能在 JavaScript 和 TypeScript 中以相同的方式工作。</p><p>选用 TypeScript 会涉及在上手复杂性和长期可维护性收益之间作出权衡。这种权衡是否合理取决于你的团队背景和项目规模，但 Vue 并不会真正成为影响这一决定的因素。</p><h2 id="how-does-vue-compare-to-web-components" tabindex="-1">Vue 相比于 Web Components 究竟如何？ <a class="header-anchor" href="#how-does-vue-compare-to-web-components" aria-label="Permalink to &quot;Vue 相比于 Web Components 究竟如何？ {#how-does-vue-compare-to-web-components}&quot;">​</a></h2><p>Vue 是在 Web Components 出现之前被创建的，Vue 在某些方面的设计 (例如插槽) 受到了 Web Components 模型的启发。</p><p>Web Components 规范相对底层一些，因为它们是以自定义元素为中心的。作为一个框架，Vue 解决了更多上层的问题，如高效的 DOM 渲染、响应式状态管理、工具链、客户端路由和服务器端渲染等。</p><p>Vue 完全支持在 Vue 组件中使用原生自定义元素，也支持将 Vue 组件导出为原生自定义元素——请参阅 <a href="/blog/guide/extras/web-components.html">Vue 和 Web Components 指南</a>以了解更多细节。</p>',46)]))}const b=t(i,[["render",u]]);export{c as __pageData,b as default};
