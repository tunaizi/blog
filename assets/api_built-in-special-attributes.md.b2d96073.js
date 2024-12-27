import{_ as s,r as e,i as a,a as n}from"./chunks/framework.233c72da.js";const t=JSON.parse('{"title":"Built-in Special Attributes","description":"","frontmatter":{},"headers":[{"level":2,"title":"key","slug":"key","link":"#key","children":[]},{"level":2,"title":"ref","slug":"ref","link":"#ref","children":[]},{"level":2,"title":"is","slug":"is","link":"#is","children":[]}],"relativePath":"api/built-in-special-attributes.md","filePath":"api/built-in-special-attributes.md"}');const l=s({name:"api/built-in-special-attributes.md"},[["render",function(s,t,l,o,p,i){return e(),a("div",null,t[0]||(t[0]=[n('<h1 id="built-in-special-attributes" tabindex="-1">Built-in Special Attributes <a class="header-anchor" href="#built-in-special-attributes" aria-label="Permalink to &quot;Built-in Special Attributes {#built-in-special-attributes}&quot;">​</a></h1><h2 id="key" tabindex="-1">key <a class="header-anchor" href="#key" aria-label="Permalink to &quot;key {#key}&quot;">​</a></h2><p>The <code>key</code> special attribute is primarily used as a hint for Vue&#39;s virtual DOM algorithm to identify vnodes when diffing the new list of nodes against the old list.</p><ul><li><p><strong>Expects:</strong> <code>number | string | symbol</code></p></li><li><p><strong>Details</strong></p><p>Without keys, Vue uses an algorithm that minimizes element movement and tries to patch/reuse elements of the same type in-place as much as possible. With keys, it will reorder elements based on the order change of keys, and elements with keys that are no longer present will always be removed / destroyed.</p><p>Children of the same common parent must have <strong>unique keys</strong>. Duplicate keys will cause render errors.</p><p>The most common use case is combined with <code>v-for</code>:</p><div class="language-template"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">ul</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-for</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;">item</span><span style="color:#89DDFF;"> in </span><span style="color:#BABED8;">items</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">key</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;">item</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">...</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">ul</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>It can also be used to force replacement of an element/component instead of reusing it. This can be useful when you want to:</p><ul><li>Properly trigger lifecycle hooks of a component</li><li>Trigger transitions</li></ul><p>For example:</p><div class="language-template"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">transition</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">span</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">key</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;">text</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;{{</span><span style="color:#BABED8;"> text </span><span style="color:#89DDFF;">}}&lt;/</span><span style="color:#F07178;">span</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">transition</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>When <code>text</code> changes, the <code>&lt;span&gt;</code> will always be replaced instead of patched, so a transition will be triggered.</p></li><li><p><strong>See also</strong> <a href="/guide/essentials/list.html#maintaining-state-with-key">Guide - List Rendering - Maintaining State with <code>key</code></a></p></li></ul><h2 id="ref" tabindex="-1">ref <a class="header-anchor" href="#ref" aria-label="Permalink to &quot;ref {#ref}&quot;">​</a></h2><p>Denotes a <a href="/guide/essentials/template-refs.html">template ref</a>.</p><ul><li><p><strong>Expects:</strong> <code>string | Function</code></p></li><li><p><strong>Details</strong></p><p><code>ref</code> is used to register a reference to an element or a child component.</p><p>In Options API, the reference will be registered under the component&#39;s <code>this.$refs</code> object:</p><div class="language-template"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- stored as this.$refs.p --&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">ref</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">p</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">hello</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>In Composition API, the reference will be stored in a ref with matching name:</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">ref</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> p </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#BABED8;">()</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">ref</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">p</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">hello</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>If used on a plain DOM element, the reference will be that element; if used on a child component, the reference will be the child component instance.</p><p>Alternatively <code>ref</code> can accept a function value which provides full control over where to store the reference:</p><div class="language-template"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">ChildComponent</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">ref</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">el</span><span style="color:#89DDFF;">) </span><span style="color:#C792EA;">=&gt;</span><span style="color:#89DDFF;"> </span><span style="color:#BABED8;">child</span><span style="color:#89DDFF;"> = </span><span style="color:#BABED8;">el</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span></code></pre></div><p>An important note about the ref registration timing: because the refs themselves are created as a result of the render function, you must wait until the component is mounted before accessing them.</p><p><code>this.$refs</code> is also non-reactive, therefore you should not attempt to use it in templates for data-binding.</p></li><li><p><strong>See also</strong></p><ul><li><a href="/guide/essentials/template-refs.html">Guide - Template Refs</a></li><li><a href="/guide/typescript/composition-api.html#typing-template-refs">Guide - Typing Template Refs</a> <sup class="vt-badge ts"></sup></li><li><a href="/guide/typescript/composition-api.html#typing-component-template-refs">Guide - Typing Component Template Refs</a> <sup class="vt-badge ts"></sup></li></ul></li></ul><h2 id="is" tabindex="-1">is <a class="header-anchor" href="#is" aria-label="Permalink to &quot;is {#is}&quot;">​</a></h2><p>Used for binding <a href="/guide/essentials/component-basics.html#dynamic-components">dynamic components</a>.</p><ul><li><p><strong>Expects:</strong> <code>string | Component</code></p></li><li><p><strong>Usage on native elements</strong> <sup class="vt-badge">3.1+</sup></p><p>When the <code>is</code> attribute is used on a native HTML element, it will be interpreted as a <a href="https://html.spec.whatwg.org/multipage/custom-elements.html#custom-elements-customized-builtin-example" target="_blank" rel="noreferrer">Customized built-in element</a>, which is a native web platform feature.</p><p>There is, however, a use case where you may need Vue to replace a native element with a Vue component, as explained in <a href="/guide/essentials/component-basics.html#in-dom-template-parsing-caveats">in-DOM Template Parsing Caveats</a>. You can prefix the value of the <code>is</code> attribute with <code>vue:</code> so that Vue will render the element as a Vue component instead:</p><div class="language-template"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">table</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">tr</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">is</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vue:my-row-component</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">tr</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">table</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div></li><li><p><strong>See also</strong></p><ul><li><a href="/api/built-in-special-elements.html#component">Built-in Special Element - <code>&lt;component&gt;</code></a></li><li><a href="/guide/essentials/component-basics.html#dynamic-components">Dynamic Components</a></li></ul></li></ul>',10)]))}]]);export{t as __pageData,l as default};