import{_ as i,r as e,i as t,a}from"./chunks/framework.d927199b.js";const c=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"垃圾回收","slug":"垃圾回收","link":"#垃圾回收","children":[]},{"level":2,"title":"回收的两种策略","slug":"回收的两种策略","link":"#回收的两种策略","children":[{"level":3,"title":"浏览器怎么进行垃圾回收？","slug":"浏览器怎么进行垃圾回收","link":"#浏览器怎么进行垃圾回收","children":[]}]}],"relativePath":"start-docs/studyhard/1专题/JS垃圾回收机制.md","filePath":"start-docs/studyhard/1专题/JS垃圾回收机制.md"}'),r={name:"start-docs/studyhard/1专题/JS垃圾回收机制.md"};function u(s,l,p,n,o,h){return e(),t("div",null,l[0]||(l[0]=[a('<h2 id="垃圾回收" tabindex="-1">垃圾回收 <a class="header-anchor" href="#垃圾回收" aria-label="Permalink to &quot;垃圾回收&quot;">​</a></h2><ul><li>可达性 <ul><li>V8 引擎采用的是可达性算法来判断堆中的对象应不应该被回收 <ul><li>从根节点出发，遍历所有对象</li><li>可以遍历到的对象，是可达的</li><li>没有被遍历到的对象，是不可达的</li></ul></li><li>在浏览器中，根节点有很多。主要包括： <ul><li>全局变量 window,位于每个 iframe 中</li><li>文档 DOM 树</li><li>存放在栈上的变量</li></ul></li></ul></li></ul><h2 id="回收的两种策略" tabindex="-1">回收的两种策略 <a class="header-anchor" href="#回收的两种策略" aria-label="Permalink to &quot;回收的两种策略&quot;">​</a></h2><ul><li>标记清除 <ul><li>对所有不可达的对象进行标记，回收不可达的值所占据的内存</li></ul></li><li>引用计数</li></ul><h3 id="浏览器怎么进行垃圾回收" tabindex="-1">浏览器怎么进行垃圾回收？ <a class="header-anchor" href="#浏览器怎么进行垃圾回收" aria-label="Permalink to &quot;浏览器怎么进行垃圾回收？&quot;">​</a></h3><ul><li><p>浏览器怎么进行垃圾回收？</p><ul><li>什么是垃圾 <ul><li>不再需要，即为垃圾。一般来说没有被引用的对象就是垃圾，如果几个对象引用形成一个环，互相引用，但是根访问不到它们，则也是垃圾。</li><li>全局变量随时可能用到，所以一定不是垃圾</li></ul></li><li>如何捡垃圾（遍历算法） <ul><li>两种策略： 标记清除和引用计数。常用标记清除法。</li><li>标记空间中（可达）值</li><li>回收不可达的值占用的内存</li><li>做内存整理</li></ul></li><li>什么时候捡垃圾 <ul><li>垃圾回收的时候回造成页面卡顿</li><li>分代收集、增量收集、闲时收集 <ul><li>分代收集： 将堆分为新生代与老生代，多回收新生代，少回收老生代</li><li>增量收集： 将垃圾收集工作分为更小的块，每次处理一部分，多次处理</li><li>闲时收集： 在 cpu 空闲时尝试运行</li></ul></li></ul></li></ul></li><li><p>浏览器中不同类型变量的内存都是何时释放？</p><ul><li>js 中的类型分为值类型和引用类型。 <ul><li>引用类型再没有被引用后，就通过 v8 自动回收</li><li>值类型： <ul><li>如果处于闭包的情况下，要等闭包没有引用才会被 v8 回收</li><li>非闭包的情况下，等待 v8 的新生代切换的时候回收</li></ul></li></ul></li></ul></li><li><p>哪些情况会导致内存泄露？如何避免？</p><ul><li>内存泄露是用不到、访问不到的变量，依然占据着内存空间，不能被再次利用起来。</li><li>在 vue 中，有以下情况可能发生内存泄露 <ul><li>监听在 window/body 等事件没有解绑</li><li>绑在 EventBus 的事件没有解绑</li><li>Vuex 的$store,watch 了之后没有 unwatch</li><li>使用第三方库创建，没有调用正确的销毁函数</li></ul></li><li>解决方法： beforeDestory 中及时销毁 <ul><li>绑定了 DOM/BOM 对象中的事件加 removeEventListener</li><li>观察者模式中加$off</li><li>如果组件中是使用了定时器，应销毁处理</li><li>使用弱引用 weakMap,weakSet</li></ul></li></ul></li><li><p>闭包会导致内存泄露吗？</p><ul><li><strong>不会</strong></li><li>闭包里面的变量就是我们需要的变量，不能说是内存泄露。</li><li>只是因为 IE 早期版本，在使用闭包之后依然回收不了闭包里面的引用变量，这是 IE 的 bug。不是闭包的问题。</li></ul></li><li><p>weakMap,weakSet 和 Map,Set 有什么区别？</p><ul><li><p>Set 和 Map 主要的使用场景在于数据重组和数据存储。</p></li><li><p>Set 是一种叫做<strong>集合</strong>的数据结构，Map 是一种叫做<strong>字典</strong>的数据结构</p></li><li><p>Set 类似于数组，成员是唯一的，没有重复的值。</p><ul><li>常用方法：add,delete,has,clear。keys(),values(),entrys(),forEach()</li><li>属性： size</li></ul></li><li><p>WeakSet 对象允许将弱引用对象存放在集合中。与 Set 的区别在于：</p><ul><li>WeakSet 只能存放对象引用，不能存放值。而 Set 都可以。</li><li>WeakSet 中对象值都是的弱引用，垃圾回收机制不考虑该引用。如果该对象没有被其他地方引用，则 WeakSet 对象的成员元素的数量取决于垃圾回收机制有没有运行。</li><li>WeakSet 不能遍历，不支持 key(),value()等方法。不支持 size 属性。</li></ul></li><li><p>Map 是一种存放键值对的集合，其中键和值都可以是任何数据类型。</p><ul><li>常用方法： set(),delete(),get(),delete(),has(),clear()。</li><li>属性：size</li></ul></li><li><p>WeakMap 是弱引用 Map 集合。</p><ul><li>键必须是对象</li><li>垃圾回收机制会不考虑它的引用。</li><li>支持 set(),get()，has(),delete()。不支持 size 属性和遍历相关的方法。</li></ul></li><li><p>在 ES6 中，新增的 WeakMap 和 WeakSet，就是为了解决内存泄露的问题。</p></li><li><p>它的键名所引用的对象都是弱引用，就是垃圾回收机制遍历的时候不考虑该引用。</p></li></ul></li><li><p>参考文档： [<a href="https://mp.weixin.qq.com/s/hpMGNtHPN_T-Upg9V4L_Jg" target="_blank" rel="noreferrer">https://mp.weixin.qq.com/s/hpMGNtHPN_T-Upg9V4L_Jg</a>]</p><ul><li><a href="https://segmentfault.com/a/1190000018605776" target="_blank" rel="noreferrer">https://segmentfault.com/a/1190000018605776</a></li><li><a href="http://newhtml.net/v8-garbage-collection/" target="_blank" rel="noreferrer">http://newhtml.net/v8-garbage-collection/</a></li><li><a href="https://www.jianshu.com/p/a8a04fd00c3c" target="_blank" rel="noreferrer">https://www.jianshu.com/p/a8a04fd00c3c</a></li></ul></li></ul>',6)]))}const f=i(r,[["render",u]]);export{c as __pageData,f as default};
