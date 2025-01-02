import{_ as a,r as t,i as e,a as l}from"./chunks/framework.8a6edf47.js";const E=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"es6中箭头函数与普通函数的区别","slug":"es6中箭头函数与普通函数的区别","link":"#es6中箭头函数与普通函数的区别","children":[]}],"relativePath":"start-docs/studyhard/1专题/箭头函数与普通函数.md","filePath":"start-docs/studyhard/1专题/箭头函数与普通函数.md"}'),n={name:"start-docs/studyhard/1专题/箭头函数与普通函数.md"};function o(r,s,p,i,c,d){return t(),e("div",null,s[0]||(s[0]=[l(`<h2 id="es6中箭头函数与普通函数的区别" tabindex="-1">es6中箭头函数与普通函数的区别 <a class="header-anchor" href="#es6中箭头函数与普通函数的区别" aria-label="Permalink to &quot;es6中箭头函数与普通函数的区别&quot;">​</a></h2><ul><li><p>没有this、super、arguments和new.target绑定</p><ul><li>箭头函数中this、super、arguments及new.target这些值由外围最近一层非箭头函数决定</li><li>不能通过new关键字调用 箭头函数没有[[construct]]方法，所以不能被用作构造函数，如果使用new关键字调用，程序会抛出错误。</li><li>没有原型 由于不可以通过new关键字调用箭头函数，因而没有构建原型的需求，所以箭头函数不存在prototype属性</li><li>不可以改变this的绑定 函数内部的this值不可以被改变，在函数的生命周期内始终保持一致。</li><li>不支持arguments对象 箭头函数没有arguments绑定。只能通过命名参数或者不定参数这两种方式来访问函数的参数</li><li>不支持重复的命名参数 传统函数只在严格模式下不接受重复命名的参数，而箭头函数不论严格或者非严格模式，都不支持重复命名参数。</li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">example</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">a</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">a</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {  </span></span>
<span class="line"><span style="color:#6A737D;">// 语法错误！  </span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre></div></li></ul>`,2)]))}const y=a(n,[["render",o]]);export{E as __pageData,y as default};
