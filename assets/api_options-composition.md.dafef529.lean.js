import{_ as s,r as n,i as a,a as o}from"./chunks/framework.233c72da.js";const l=JSON.parse('{"title":"Options: Composition","description":"","frontmatter":{},"headers":[{"level":2,"title":"provide","slug":"provide","link":"#provide","children":[]},{"level":2,"title":"inject","slug":"inject","link":"#inject","children":[]},{"level":2,"title":"mixins","slug":"mixins","link":"#mixins","children":[]},{"level":2,"title":"extends","slug":"extends","link":"#extends","children":[]}],"relativePath":"api/options-composition.md","filePath":"api/options-composition.md"}');const p=s({name:"api/options-composition.md"},[["render",function(s,l,p,e,t,c){return n(),a("div",null,l[0]||(l[0]=[o('<h1 id="options-composition" tabindex="-1">Options: Composition <a class="header-anchor" href="#options-composition" aria-label="Permalink to &quot;Options: Composition {#options-composition}&quot;">​</a></h1><h2 id="provide" tabindex="-1">provide <a class="header-anchor" href="#provide" aria-label="Permalink to &quot;provide {#provide}&quot;">​</a></h2><p>Provide values that can be injected by descendant components.</p><ul><li><p><strong>Type</strong></p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">interface</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">ComponentOptions</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">provide</span><span style="color:#89DDFF;">?:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">object</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">|</span><span style="color:#BABED8;"> (</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;font-style:italic;">this</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">ComponentPublicInstance</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">object</span><span style="color:#BABED8;">)</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div></li><li><p><strong>Details</strong></p><p><code>provide</code> and <a href="#inject"><code>inject</code></a> are used together to allow an ancestor component to serve as a dependency injector for all its descendants, regardless of how deep the component hierarchy is, as long as they are in the same parent chain.</p><p>The <code>provide</code> option should be either an object or a function that returns an object. This object contains the properties that are available for injection into its descendants. You can use Symbols as keys in this object.</p></li><li><p><strong>Example</strong></p><p>Basic usage:</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> s </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">Symbol</span><span style="color:#BABED8;">()</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">provide</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">foo</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">foo</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">[</span><span style="color:#BABED8;">s</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">bar</span><span style="color:#89DDFF;">&#39;</span></span>\n<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>Using a function to provide per-component state:</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">()</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">      msg</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">foo</span><span style="color:#89DDFF;">&#39;</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">provide</span><span style="color:#89DDFF;">()</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">      msg</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#BABED8;">msg</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>Note in the above example, the provided <code>msg</code> will NOT be reactive. See <a href="/guide/components/provide-inject.html#working-with-reactivity">Working with Reactivity</a> for more details.</p></li><li><p><strong>See also</strong> <a href="/guide/components/provide-inject.html">Provide / Inject</a></p></li></ul><h2 id="inject" tabindex="-1">inject <a class="header-anchor" href="#inject" aria-label="Permalink to &quot;inject {#inject}&quot;">​</a></h2><p>Declare properties to inject into the current component by locating them from ancestor providers.</p><ul><li><p><strong>Type</strong></p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">interface</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">ComponentOptions</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">inject</span><span style="color:#89DDFF;">?:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">ArrayInjectOptions</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">|</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">ObjectInjectOptions</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C792EA;">type</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">ArrayInjectOptions</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#BABED8;">[]</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C792EA;">type</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">ObjectInjectOptions</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#BABED8;">  [</span><span style="color:#BABED8;font-style:italic;">key</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">|</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">symbol</span><span style="color:#BABED8;">]</span><span style="color:#89DDFF;">:</span></span>\n<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">|</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">string</span></span>\n<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">|</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">symbol</span></span>\n<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">|</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#BABED8;"> </span><span style="color:#F07178;">from</span><span style="color:#89DDFF;">?:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">|</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">symbol</span><span style="color:#89DDFF;">;</span><span style="color:#BABED8;"> </span><span style="color:#F07178;">default</span><span style="color:#89DDFF;">?:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">any</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div></li><li><p><strong>Details</strong></p><p>The <code>inject</code> option should be either:</p><ul><li>An array of strings, or</li><li>An object where the keys are the local binding name and the value is either: <ul><li>The key (string or Symbol) to search for in available injections, or</li><li>An object where: <ul><li>The <code>from</code> property is the key (string or Symbol) to search for in available injections, and</li><li>The <code>default</code> property is used as fallback value. Similar to props default values, a factory function is needed for object types to avoid value sharing between multiple component instances.</li></ul></li></ul></li></ul><p>An injected property will be <code>undefined</code> if neither a matching property nor a default value was provided.</p><p>Note that injected bindings are NOT reactive. This is intentional. However, if the injected value is a reactive object, properties on that object do remain reactive. See <a href="/guide/components/provide-inject.html#working-with-reactivity">Working with Reactivity</a> for more details.</p></li><li><p><strong>Example</strong></p><p>Basic usage:</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">inject</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">foo</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">]</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">created</span><span style="color:#89DDFF;">()</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this.</span><span style="color:#BABED8;">foo</span><span style="color:#F07178;">)</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>Using an injected value as the default for a prop:</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> Child </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">inject</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">foo</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">]</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">props</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">bar</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#BABED8;">      </span><span style="color:#F07178;">default</span><span style="color:#89DDFF;">()</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#BABED8;">foo</span></span>\n<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>Using an injected value as data entry:</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> Child </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">inject</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">foo</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">]</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">()</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">      bar</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#BABED8;">foo</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>Injections can be optional with default value:</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> Child </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">inject</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">foo</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#BABED8;"> </span><span style="color:#F07178;">default</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">foo</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>If it needs to be injected from a property with a different name, use <code>from</code> to denote the source property:</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> Child </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">inject</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">foo</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#BABED8;">      </span><span style="color:#F07178;">from</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">bar</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#BABED8;">      </span><span style="color:#F07178;">default</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">foo</span><span style="color:#89DDFF;">&#39;</span></span>\n<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>Similar to prop defaults, you need to use a factory function for non-primitive values:</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> Child </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">inject</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">foo</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#BABED8;">      </span><span style="color:#F07178;">from</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">bar</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#BABED8;">      </span><span style="color:#82AAFF;">default</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">()</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#BABED8;"> [</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">3</span><span style="color:#BABED8;">]</span></span>\n<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div></li><li><p><strong>See also</strong> <a href="/guide/components/provide-inject.html">Provide / Inject</a></p></li></ul><h2 id="mixins" tabindex="-1">mixins <a class="header-anchor" href="#mixins" aria-label="Permalink to &quot;mixins {#mixins}&quot;">​</a></h2><p>An array of option objects to be mixed into the current component.</p><ul><li><p><strong>Type</strong></p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">interface</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">ComponentOptions</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">mixins</span><span style="color:#89DDFF;">?:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">ComponentOptions</span><span style="color:#BABED8;">[]</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div></li><li><p><strong>Details</strong></p><p>The <code>mixins</code> option accepts an array of mixin objects. These mixin objects can contain instance options like normal instance objects, and they will be merged against the eventual options using the certain option merging logic. For example, if your mixin contains a <code>created</code> hook and the component itself also has one, both functions will be called.</p><p>Mixin hooks are called in the order they are provided, and called before the component&#39;s own hooks.</p><div class="warning custom-block"><p class="custom-block-title">No Longer Recommended</p><p>In Vue 2, mixins were the primary mechanism for creating reusable chunks of component logic. While mixins continue to be supported in Vue 3, <a href="/guide/reusability/composables.html">Composable functions using Composition API</a> is now the preferred approach for code reuse between components.</p></div></li><li><p><strong>Example</strong></p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> mixin </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">created</span><span style="color:#89DDFF;">()</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">)</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#82AAFF;">createApp</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">created</span><span style="color:#89DDFF;">()</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">2</span><span style="color:#F07178;">)</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>\n<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">mixins</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> [mixin]</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#BABED8;">)</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">// =&gt; 1</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">// =&gt; 2</span></span></code></pre></div></li></ul><h2 id="extends" tabindex="-1">extends <a class="header-anchor" href="#extends" aria-label="Permalink to &quot;extends {#extends}&quot;">​</a></h2><p>A &quot;base class&quot; component to extend from.</p><ul><li><p><strong>Type</strong></p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">interface</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">ComponentOptions</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">extends</span><span style="color:#89DDFF;">?:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">ComponentOptions</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div></li><li><p><strong>Details</strong></p><p>Allows one component to extend another, inheriting its component options.</p><p>From an implementation perspective, <code>extends</code> is almost identical to <code>mixins</code>. The component specified by <code>extends</code> will be treated as though it were the first mixin.</p><p>However, <code>extends</code> and <code>mixins</code> express different intents. The <code>mixins</code> option is primarily used to compose chunks of functionality, whereas <code>extends</code> is primarily concerned with inheritance.</p><p>As with <code>mixins</code>, any options (except for <code>setup()</code>) will be merged using the relevant merge strategy.</p></li><li><p><strong>Example</strong></p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> CompA </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">...</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> CompB </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">extends</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> CompA</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">...</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">Not Recommended for Composition API</p><p><code>extends</code> is designed for Options API and does not handle the merging of the <code>setup()</code> hook.</p><p>In Composition API, the preferred mental model for logic reuse is &quot;compose&quot; over &quot;inheritance&quot;. If you have logic from a component that needs to be reused in another one, consider extracting the relevant logic into a <a href="/guide/reusability/composables.html#composables">Composable</a>.</p><p>If you still intend to &quot;extend&quot; a component using Composition API, you can call the base component&#39;s <code>setup()</code> in the extending component&#39;s <code>setup()</code>:</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> Base </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./Base.js</span><span style="color:#89DDFF;">&#39;</span></span>\n<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">extends</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> Base</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">setup</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">props</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#BABED8;font-style:italic;">ctx</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">...</span><span style="color:#BABED8;">Base</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setup</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">props</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">ctx</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;">// local bindings</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div></div></li></ul>',13)]))}]]);export{l as __pageData,p as default};
