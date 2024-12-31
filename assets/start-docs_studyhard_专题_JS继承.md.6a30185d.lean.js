import{_ as a,r as n,i as l,a as p}from"./chunks/framework.8a6edf47.js";const F=JSON.parse('{"title":"继承的几种类型","description":"","frontmatter":{},"headers":[{"level":2,"title":"原型链继承","slug":"原型链继承","link":"#原型链继承","children":[]},{"level":2,"title":"构造函数继承 （经典继承方式）","slug":"构造函数继承-经典继承方式","link":"#构造函数继承-经典继承方式","children":[]},{"level":2,"title":"组合继承 (常用)","slug":"组合继承-常用","link":"#组合继承-常用","children":[]},{"level":2,"title":"原型式继承","slug":"原型式继承","link":"#原型式继承","children":[]},{"level":2,"title":"寄生式继承","slug":"寄生式继承","link":"#寄生式继承","children":[]},{"level":2,"title":"寄生组合式继承 （常用）","slug":"寄生组合式继承-常用","link":"#寄生组合式继承-常用","children":[]}],"relativePath":"start-docs/studyhard/专题/JS继承.md","filePath":"start-docs/studyhard/专题/JS继承.md"}'),o={name:"start-docs/studyhard/专题/JS继承.md"};function e(t,s,E,c,r,y){return n(),l("div",null,s[0]||(s[0]=[p(`<h1 id="继承的几种类型" tabindex="-1">继承的几种类型 <a class="header-anchor" href="#继承的几种类型" aria-label="Permalink to &quot;继承的几种类型&quot;">​</a></h1><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#6A737D;">// 父类</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Car</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">name</span><span style="color:#E1E4E8;">) { </span><span style="color:#6A737D;">//提供构造函数，并增加属性和方法</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.name </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> name;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.colors </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span><span style="color:#9ECBFF;">&#39;red&#39;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&#39;blue&#39;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">getName</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;car name: &#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.name </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39; and arguments&#39;</span><span style="color:#E1E4E8;">: ,</span><span style="color:#79B8FF;">arguments</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//增加原型属性和方法</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">Car</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">prototype</span><span style="color:#E1E4E8;">.wheelCount </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">Car</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">prototype</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.name, </span><span style="color:#9ECBFF;">&quot; running and arguments: &quot;</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">arguments</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">AutoCar</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.name </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> name;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.colors </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span><span style="color:#9ECBFF;">&#39;green&#39;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.type </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;auto&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span></code></pre></div><h2 id="原型链继承" tabindex="-1">原型链继承 <a class="header-anchor" href="#原型链继承" aria-label="Permalink to &quot;原型链继承&quot;">​</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Bmw</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">name</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.name </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> name;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#79B8FF;">Bmw</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">prototype</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Car</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> car1 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Bmw</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;red&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> car2 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Bmw</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;blue&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">car1.</span><span style="color:#B392F0;">getName</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;aa&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">car2.</span><span style="color:#B392F0;">run</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;fast&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">car1.colors.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;black&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(car2.colors); </span><span style="color:#6A737D;">//[&#39;red&#39;,&#39;blue&#39;,&#39;black&#39;]</span></span></code></pre></div><ul><li>特点： 通过子类的原型对父类的实例化实现 Bmw.prototype = new Car()</li><li>优点： 可继承父类构造函数的属性、方法，原型的属性和方法</li><li>缺点： <ul><li>子类原型如果更改从父类继承来的引用类型属性(包括构造函数内或者原型链上的属性)时，会影响其他子类属性。</li><li>子类实例无法向父类构造函数传递参数</li><li>继承单一,不能继承多个父类</li></ul></li></ul><h2 id="构造函数继承-经典继承方式" tabindex="-1">构造函数继承 （经典继承方式） <a class="header-anchor" href="#构造函数继承-经典继承方式" aria-label="Permalink to &quot;构造函数继承 （经典继承方式）&quot;">​</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Bmw</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">	Car.</span><span style="color:#B392F0;">call</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">...</span><span style="color:#79B8FF;">arguments</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">	AutoCar.</span><span style="color:#B392F0;">apply</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">arguments</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> car1 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Bmw</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;red&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> car2 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Bmw</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;blue&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">car1.</span><span style="color:#B392F0;">getName</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;aa&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">car2.</span><span style="color:#B392F0;">run</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;fast&quot;</span><span style="color:#E1E4E8;">); </span><span style="color:#6A737D;">//报错，没有run方法。</span></span></code></pre></div><ul><li>特点： 利用 call 或者 apply 将父类构造函数引入子类函数并执行</li><li>优点： <ul><li>避免引用类型属性被所有实例共享</li><li>可以向父类传递参数</li><li>可以继承多个构造函数属性</li></ul></li><li>缺点： <ul><li>没有继承父类原型的属性和方法</li><li>没有实现构造函数复用，每个新实例都有父类构造函数的副本。</li></ul></li></ul><h2 id="组合继承-常用" tabindex="-1">组合继承 (常用) <a class="header-anchor" href="#组合继承-常用" aria-label="Permalink to &quot;组合继承 (常用)&quot;">​</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Bmw</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">	Car.</span><span style="color:#B392F0;">call</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">...</span><span style="color:#79B8FF;">arguments</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#79B8FF;">Bmw</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">prototype</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Car</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> car1 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Bmw</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;red&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> car2 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Bmw</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;blue&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">car1.</span><span style="color:#B392F0;">getName</span><span style="color:#E1E4E8;">(); </span><span style="color:#6A737D;">//car name: red</span></span>
<span class="line"><span style="color:#E1E4E8;">car2.</span><span style="color:#B392F0;">run</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;slow&quot;</span><span style="color:#E1E4E8;">); </span><span style="color:#6A737D;">// blue running</span></span>
<span class="line"><span style="color:#E1E4E8;">car1.colors.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;black&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(car2.colors); </span><span style="color:#6A737D;">// [&#39;red&#39;, &#39;blue&#39;]</span></span></code></pre></div><ul><li>特点： 结合原型继承和构造函数继承</li><li>优点： 可以继承父类构造函数和原型链上方法和属性，并且引用类属性都是独立的。可以向父类传参。</li><li>缺点： 两次父类构造函数，耗损内存。</li></ul><h2 id="原型式继承" tabindex="-1">原型式继承 <a class="header-anchor" href="#原型式继承" aria-label="Permalink to &quot;原型式继承&quot;">​</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createObj</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">obj</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">F</span><span style="color:#E1E4E8;">() {}</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#79B8FF;">F</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">prototype</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> obj;</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">F</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><ul><li>此方法就是 es6 的 Object.create 原理实现</li><li>所有实例都会继承原型上的属性，但是无法实现复用。并且引用类型也会共享相应的值。</li></ul><h2 id="寄生式继承" tabindex="-1">寄生式继承 <a class="header-anchor" href="#寄生式继承" aria-label="Permalink to &quot;寄生式继承&quot;">​</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createObj</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">o</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> clone </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Object.</span><span style="color:#B392F0;">create</span><span style="color:#E1E4E8;">(o);</span></span>
<span class="line"><span style="color:#E1E4E8;">	clone.</span><span style="color:#B392F0;">sayName</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">		console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;aaa&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">	};</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> clone;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><ul><li>此方法与构造函数模式一样，每次创建对象都会创建一遍方法。</li></ul><h2 id="寄生组合式继承-常用" tabindex="-1">寄生组合式继承 （常用） <a class="header-anchor" href="#寄生组合式继承-常用" aria-label="Permalink to &quot;寄生组合式继承 （常用）&quot;">​</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">create</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">obj</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">F</span><span style="color:#E1E4E8;">() {}</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#79B8FF;">F</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">prototype</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> obj;</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">F</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Bmw</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">	Car.</span><span style="color:#B392F0;">call</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">...</span><span style="color:#79B8FF;">arguments</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//组合继承中为： &lt; Bmw.prototype = new Car()&gt;</span></span>
<span class="line"><span style="color:#6A737D;">// 在此处为了减少构造函数再次执行，直接将Bmw的原型访问Car的原型即可</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> prototype </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">create</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">Car</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">prototype</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">prototype.</span><span style="color:#79B8FF;">constructor</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Bmw;</span></span>
<span class="line"><span style="color:#79B8FF;">Bmw</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">prototype</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> prototype;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> car1 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Bmw</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;red&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">car1.</span><span style="color:#B392F0;">run</span><span style="color:#E1E4E8;">();</span></span></code></pre></div><ul><li><p>包含组合继承的优势，修复组合继承的问题。构造函数只执行了一次</p></li><li><p>参考文档：</p></li><li><p>[<a href="https://github.com/mqyqingfeng/Blog/issues/16" target="_blank" rel="noreferrer">https://github.com/mqyqingfeng/Blog/issues/16</a>]</p></li><li><p>[<a href="https://blog.csdn.net/qq_32682137/article/details/82426401" target="_blank" rel="noreferrer">https://blog.csdn.net/qq_32682137/article/details/82426401</a>]</p></li><li><p>[<a href="https://mp.weixin.qq.com/s/6wJMTMl63S2LYZljobWb9w" target="_blank" rel="noreferrer">https://mp.weixin.qq.com/s/6wJMTMl63S2LYZljobWb9w</a>]</p></li></ul>`,20)]))}const u=a(o,[["render",e]]);export{F as __pageData,u as default};
