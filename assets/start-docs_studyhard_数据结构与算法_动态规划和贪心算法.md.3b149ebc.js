import{_ as n,r as a,i as l,a as p}from"./chunks/framework.8a6edf47.js";const F=JSON.parse('{"title":"动态规划和贪心算法","description":"","frontmatter":{},"headers":[{"level":2,"title":"贪心算法（“只看眼前，目光短浅”）Greedy","slug":"贪心算法-只看眼前-目光短浅-greedy","link":"#贪心算法-只看眼前-目光短浅-greedy","children":[]},{"level":2,"title":"动态规划 dynamic programming (其实就是动态递推)","slug":"动态规划-dynamic-programming-其实就是动态递推","link":"#动态规划-dynamic-programming-其实就是动态递推","children":[]}],"relativePath":"start-docs/studyhard/数据结构与算法/动态规划和贪心算法.md","filePath":"start-docs/studyhard/数据结构与算法/动态规划和贪心算法.md"}'),o={name:"start-docs/studyhard/数据结构与算法/动态规划和贪心算法.md"};function E(e,s,t,r,c,y){return a(),l("div",null,s[0]||(s[0]=[p(`<h1 id="动态规划和贪心算法" tabindex="-1">动态规划和贪心算法 <a class="header-anchor" href="#动态规划和贪心算法" aria-label="Permalink to &quot;动态规划和贪心算法&quot;">​</a></h1><h2 id="贪心算法-只看眼前-目光短浅-greedy" tabindex="-1">贪心算法（“只看眼前，目光短浅”）Greedy <a class="header-anchor" href="#贪心算法-只看眼前-目光短浅-greedy" aria-label="Permalink to &quot;贪心算法（“只看眼前，目光短浅”）Greedy&quot;">​</a></h2><ul><li>在对问题求解时，总是做出在当前看来是最好的选择。但是在最后不一定是最优。</li><li>eg: 用1/5/10/20/50 来配出36元,求出纸币数最少的。</li><li>贪心算法的场景要求： <ul><li>问题能够分解成子问题解决，子问题的最优解能递推到最终问题的最优解。这种子问题最优解成为最优子问题。</li><li>当贪心算法不能解决时，就用动态规划</li><li>贪心算法与动态规划不同在于它对每个子问题的解决方案都做出选择，不能回退。</li><li>动态规划则会保存以前的运算的结果，并根据以前的结果对当前进项选择，有回退功能。</li></ul></li><li>letcode 122 股票买卖最佳时机 <ul><li>DFS 时间复杂度o(2**n)</li><li>Greedy 时间复杂度o(n)</li><li>DP 动态规划 时间复杂度o(n)</li></ul></li></ul><h2 id="动态规划-dynamic-programming-其实就是动态递推" tabindex="-1">动态规划 dynamic programming (其实就是动态递推) <a class="header-anchor" href="#动态规划-dynamic-programming-其实就是动态递推" aria-label="Permalink to &quot;动态规划 dynamic programming (其实就是动态递推)&quot;">​</a></h2><ul><li><p>递归+记忆化 -&gt; 递推</p></li><li><p>状态的定义： opt[n],dp[n], fib[n]</p></li><li><p>状态的转移方程： opt[n]=best_of(opt[n-1], opt[n-2],...)</p></li><li><p>最优子结构</p></li><li><p>斐波拉契</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#6A737D;">// 时间复杂度是o(n^2) -&gt; 自顶向下</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">fib</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">n</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> n </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> n </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">fib</span><span style="color:#E1E4E8;">(n</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">fib</span><span style="color:#E1E4E8;">(n</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//带有记忆的递归 时间复杂度是o(n) -&gt; 自顶向下</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">fib</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">n</span><span style="color:#E1E4E8;"> ,</span><span style="color:#FFAB70;">memo</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> []) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(n </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> n</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">memo[n]) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> memo[n] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">fib</span><span style="color:#E1E4E8;">(n</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">fib</span><span style="color:#E1E4E8;">(n</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> momo[n]</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//采用递推的形式，-&gt; 自底向上</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">fib</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">n</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> dp </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> []</span></span>
<span class="line"><span style="color:#E1E4E8;">    dp[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    dp[</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> n; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      dp[i] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> dp[i</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> dp[i</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> dp[n]</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span></code></pre></div></li><li><p>二维表格，从左上角走到右下角的路径可能数。中途可能有的格子是石头。 dp[i,j] = dp[i-1, j] + dp[i, j-1]</p></li><li><p>爬楼梯</p></li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">clambStaris</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">n</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> dp </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Array</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    dp[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    dp[</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> n; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">      dp[i] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> dp[i</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> dp[i</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> dp[n]</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span></code></pre></div>`,6)]))}const d=n(o,[["render",E]]);export{F as __pageData,d as default};
