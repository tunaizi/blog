import{_ as s,r as n,i as a,a as l}from"./chunks/framework.233c72da.js";const o=JSON.parse('{"title":"Plugins","description":"","frontmatter":{},"headers":[{"level":2,"title":"Introduction","slug":"introduction","link":"#introduction","children":[]},{"level":2,"title":"Writing a Plugin","slug":"writing-a-plugin","link":"#writing-a-plugin","children":[{"level":3,"title":"Provide / Inject with Plugins","slug":"provide-inject-with-plugins","link":"#provide-inject-with-plugins","children":[]}]}],"relativePath":"guide/reusability/plugins.md","filePath":"guide/reusability/plugins.md"}');const p=s({name:"guide/reusability/plugins.md"},[["render",function(s,o,p,e,t,c){return n(),a("div",null,o[0]||(o[0]=[l('<h1 id="plugins" tabindex="-1">Plugins <a class="header-anchor" href="#plugins" aria-label="Permalink to &quot;Plugins {#plugins}&quot;">​</a></h1><h2 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-label="Permalink to &quot;Introduction {#introduction}&quot;">​</a></h2><p>Plugins are self-contained code that usually add app-level functionality to Vue. This is how we install a plugin:</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">createApp</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> app </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">createApp</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">{}</span><span style="color:#BABED8;">)</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#BABED8;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">use</span><span style="color:#BABED8;">(myPlugin</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;">/* optional options */</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#BABED8;">)</span></span></code></pre></div><p>A plugin is defined as either an object that exposes an <code>install()</code> method, or simply a function that acts as the install function itself. The install function receives the <a href="/api/application.html">app instance</a> along with additional options passed to <code>app.use()</code>, if any:</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> myPlugin </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">install</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">app</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#BABED8;font-style:italic;">options</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// configure the app</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>There is no strictly defined scope for a plugin, but common scenarios where plugins are useful include:</p><ol><li><p>Register one or more global components or custom directives with <a href="/api/application.html#app-component"><code>app.component()</code></a> and <a href="/api/application.html#app-directive"><code>app.directive()</code></a>.</p></li><li><p>Make a resource <a href="/guide/components/provide-inject.html">injectable</a> throughout the app by calling <a href="/api/application.html#app-provide"><code>app.provide()</code></a>.</p></li><li><p>Add some global instance properties or methods by attaching them to <a href="/api/application.html#app-config-globalproperties"><code>app.config.globalProperties</code></a>.</p></li><li><p>A library that needs to perform some combination of the above (e.g. <a href="https://github.com/vuejs/vue-router-next" target="_blank" rel="noreferrer">vue-router</a>).</p></li></ol><h2 id="writing-a-plugin" tabindex="-1">Writing a Plugin <a class="header-anchor" href="#writing-a-plugin" aria-label="Permalink to &quot;Writing a Plugin {#writing-a-plugin}&quot;">​</a></h2><p>In order to better understand how to create your own Vue.js plugins, we will create a very simplified version of a plugin that displays <code>i18n</code> (short for <a href="https://en.wikipedia.org/wiki/Internationalization_and_localization" target="_blank" rel="noreferrer">Internationalization</a>) strings.</p><p>Let&#39;s begin by setting up the plugin object. It is recommended to create it in a separate file and export it, as shown below to keep the logic contained and separate.</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// plugins/i18n.js</span></span>\n<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#BABED8;">  </span><span style="color:#82AAFF;">install</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">app</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#BABED8;font-style:italic;">options</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// Plugin code goes here</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>We want to create a translation function. This function will receive a dot-delimited <code>key</code> string, which we will use to look up the translated string in the user-provided options. This is the intended usage in templates:</p><div class="language-template"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">h1</span><span style="color:#89DDFF;">&gt;{{</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">$translate</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">greetings.hello</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">) </span><span style="color:#89DDFF;">}}&lt;/</span><span style="color:#F07178;">h1</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>Since this function should be globally available in all templates, we will make it so by attaching it to <code>app.config.globalProperties</code> in our plugin:</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight has-highlighted-lines"><code><span class="line"><span style="color:#676E95;font-style:italic;">// plugins/i18n.js</span></span>\n<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#BABED8;">  </span><span style="color:#82AAFF;">install</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">app</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#BABED8;font-style:italic;">options</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line highlighted"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// inject a globally available $translate() method</span></span>\n<span class="line highlighted"><span style="color:#F07178;">    </span><span style="color:#BABED8;">app</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">config</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">globalProperties</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">$translate</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">key</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line highlighted"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;">// retrieve a nested property in `options`</span></span>\n<span class="line highlighted"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;">// using `key` as the path</span></span>\n<span class="line highlighted"><span style="color:#F07178;">      </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">key</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">split</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">.</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">reduce</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">o</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#BABED8;font-style:italic;">i</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line highlighted"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#BABED8;">o</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">o</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">i</span><span style="color:#F07178;">]</span></span>\n<span class="line highlighted"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">},</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">options</span><span style="color:#F07178;">)</span></span>\n<span class="line highlighted"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>Our <code>$translate</code> function will take a string such as <code>greetings.hello</code>, look inside the user provided configuration and return the translated value.</p><p>The object containing the translated keys should be passed to the plugin during installation via additional parameters to <code>app.use()</code>:</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> i18nPlugin </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./plugins/i18n</span><span style="color:#89DDFF;">&#39;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#BABED8;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">use</span><span style="color:#BABED8;">(i18nPlugin</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">greetings</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">hello</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Bonjour!</span><span style="color:#89DDFF;">&#39;</span></span>\n<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#BABED8;">)</span></span></code></pre></div><p>Now, our initial expression <code>$translate(&#39;greetings.hello&#39;)</code> will be replaced by <code>Bonjour!</code> at runtime.</p><p>See also: <a href="/guide/typescript/options-api.html#augmenting-global-properties">Augmenting Global Properties</a> <sup class="vt-badge ts"></sup></p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Use global properties scarcely, since it can quickly become confusing if too many global properties injected by different plugins are used throughout an app.</p></div><h3 id="provide-inject-with-plugins" tabindex="-1">Provide / Inject with Plugins <a class="header-anchor" href="#provide-inject-with-plugins" aria-label="Permalink to &quot;Provide / Inject with Plugins {#provide-inject-with-plugins}&quot;">​</a></h3><p>Plugins also allow us to use <code>inject</code> to provide a function or attribute to the plugin&#39;s users. For example, we can allow the application to have access to the <code>options</code> parameter to be able to use the translations object.</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// plugins/i18n.js</span></span>\n<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#BABED8;">  </span><span style="color:#82AAFF;">install</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">app</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#BABED8;font-style:italic;">options</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#BABED8;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">provide</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">i18n</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">options</span><span style="color:#F07178;">)</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>Plugin users will now be able to inject the plugin options into their components using the <code>i18n</code> key:</p><div class="composition-api"><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">inject</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> i18n </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">inject</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">i18n</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">)</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#BABED8;">(i18n</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">greetings</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">hello)</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div></div><div class="options-api"><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">inject</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">i18n</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">]</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">created</span><span style="color:#89DDFF;">()</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this.</span><span style="color:#BABED8;">i18n</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">greetings</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">hello</span><span style="color:#F07178;">)</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div></div>',28)]))}]]);export{o as __pageData,p as default};
