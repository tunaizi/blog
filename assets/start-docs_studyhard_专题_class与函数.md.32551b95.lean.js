import{_ as n,r as a,i as e,a as l}from"./chunks/framework.8a6edf47.js";const y=JSON.parse('{"title":"class与构造函数","description":"","frontmatter":{},"headers":[{"level":2,"title":"function来做构造函数","slug":"function来做构造函数","link":"#function来做构造函数","children":[]},{"level":2,"title":"es6新增类","slug":"es6新增类","link":"#es6新增类","children":[]},{"level":2,"title":"相同与不同","slug":"相同与不同","link":"#相同与不同","children":[]}],"relativePath":"start-docs/studyhard/专题/class与函数.md","filePath":"start-docs/studyhard/专题/class与函数.md"}'),p={name:"start-docs/studyhard/专题/class与函数.md"};function t(o,s,r,c,i,u){return a(),e("div",null,s[0]||(s[0]=[l(`<h1 id="class与构造函数" tabindex="-1">class与构造函数 <a class="header-anchor" href="#class与构造函数" aria-label="Permalink to &quot;class与构造函数&quot;">​</a></h1><h2 id="function来做构造函数" tabindex="-1">function来做构造函数 <a class="header-anchor" href="#function来做构造函数" aria-label="Permalink to &quot;function来做构造函数&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark"><code><span class="line"><span style="color:#e1e4e8;">function Car(name) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    this.name = name</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  Car.prototype.run = function() {</span></span>
<span class="line"><span style="color:#e1e4e8;">    console.log(this.name + &#39; running...&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  let redCar = new Car(&#39;red&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">  let blueCar = new Car(&#39;blue&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">  redCar.run() //red running</span></span>
<span class="line"><span style="color:#e1e4e8;">  blueCar.run() // blue running</span></span></code></pre></div><h2 id="es6新增类" tabindex="-1">es6新增类 <a class="header-anchor" href="#es6新增类" aria-label="Permalink to &quot;es6新增类&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark"><code><span class="line"><span style="color:#e1e4e8;">class Car1 {</span></span>
<span class="line"><span style="color:#e1e4e8;">    constructor(name) {</span></span>
<span class="line"><span style="color:#e1e4e8;">      this.name = name</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    run() {</span></span>
<span class="line"><span style="color:#e1e4e8;">      console.log(this.name + &#39; running...&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  let greenCar = new Car1(&#39;green&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">  let blackCar = new Car1(&#39;black&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">  greenCar.run() // green running</span></span>
<span class="line"><span style="color:#e1e4e8;">  blackCar.run() // black running</span></span></code></pre></div><h2 id="相同与不同" tabindex="-1">相同与不同 <a class="header-anchor" href="#相同与不同" aria-label="Permalink to &quot;相同与不同&quot;">​</a></h2><ul><li>相同点： <ul><li>类声明仅仅是基于已有自定义类型的语法糖。 typeof Car1 === &#39;function&#39;</li><li>类上的constructor实际就是function里的方法。 run其实就是绑定在自定义类型的prototype上。</li></ul></li><li>不同点： <ul><li>函数声明可以被提升，但是类与let类似，不能被提升。真正执行前，是一直处于临时死区</li><li>类声明中的所有代码自动运行在严格模式，而且无法强行脱离严格模式</li><li>在自定义类型中，通过object.defineProperty()方法可以手工指定某个方法不可枚举。而在类中，所有方法都不可枚举。</li><li>每一个类都有一个[[construct]]的内部方法，通过关键字new调用。那些不含[[construct]]方法会导致程序报错</li><li>使用除关键字new以为的方式调用类的构造函数会导致程序报错</li><li>在类中修改类名会导致程序报错</li></ul></li></ul>`,7)]))}const h=n(p,[["render",t]]);export{y as __pageData,h as default};
