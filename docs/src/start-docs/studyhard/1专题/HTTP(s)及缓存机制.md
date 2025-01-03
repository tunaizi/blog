# TCP/IP 
!["四次挥手"](./四次挥手.png)
  ## 四层协议
  - 应用层 HTTP FTP Telnet
  - 传输层 TCP/UDP
  - 网络层 IP ICMP IGMP
  - 数据链路层 ARP

  ## OSI七层模型
  - 应用层
  - 表示层
  - 会话层
  - 传输层
  - 网络层
  - 数据链路层
  - 物理层

## HTTP
  - HTTP1.1协议（rfc规定的协议）
      - 基于TCP协议
      - 请求分为： 
        - 请求行（method,path,version) eg: POST /chapther/user.html HTTP/1.1
        - 请求头(accept,accept-encoding, accept-language,cache-control, connection,host,**if-modified-since**,**if-none-match**, user-agent, cookie)
        - 请求体,请求参数
          - application/json 
          - application/x-www-form-urlencoded 表单数据默认行为
          - multipart/form-data 上传文件常用
          - text/html
      - 响应与请求类似
        - 响应头（cache-control,connection, content-encoding, content-length, content-type, date, **etag**, expires, keep-alive, **last-modified**, server, set-cookie, via(服务端请求链路)）
      - HTTP status code
        - 1xx 临时回应，表示客户端继续，被浏览器http库直接处理
        - 2xx 请求成功系列 例如：200
        - 3xx 请求目标有变化，希望客户端进一步处理 301&302 304(**重点**)
        - 4xx 客户端请求错误 401未授权  403 Forbidden 拒绝访问 404页面不存在
        - 5xx 服务端请求错误 500服务端错误 503服务端暂时性错误，可以一会再试
    - HTTPS协议
      - 使用加密通道来传输http的内容。首先与服务端建立TLS加密通道。
      - TLS构建于TCP协议之上
    - HTTP2.0 （1.1的升级）
      - 支持服务端推送， 可以在收到第一个请求到服务端时，提前将一部分内容推送给客户端放入缓存
      - 支持TCP连接复用， 可以把使用同一个tcp来传输多个http请求，避免tcp连接建立时的三次握手开销
    - HTTP3.0
      - http本质还是tcp,还是会遇到对头阻塞问题，谷歌提出QUIC协议，基于UDP
      - HTTP 2.0 也支持多路复用，但是下层仍是 TCP，因为 TCP 的重传机制，只要一个包丢失就得判断丢失包并且重传，导致发生队头阻塞的问题，但是 UDP 没有这个机制。
  - GET和POST请求本质和区别
## 浏览器缓存
- 强缓存（HTTP状态码返回200）
  - Pragma(优先级高于Cache-control) http1.0的标准
    - no-cache
  - Expires 设置缓存过期时间 1.0的标准
  - Cache-control http1.1的标准
    - no-store 所有内容都不缓存
    - no-cache 缓存，但是需要通过与服务器进行通信判断该资源是否为最新。若未过期，则返回304
    - max-age 设置缓存最大周期，时间是相对于请求的时间。(优先级高于expires)
    - public 可以被任何中间人缓存
    - private 中间人不能缓存此响应
  - 浏览器返回200状态有两种情况
    - from memory cache 从内存中获取，一般缓存更新频率较高的js、图片、字体等资源,当资源从内存中释放，就会从磁盘中获取。
    - from disk cache 从磁盘中过去，一般缓存更新频率较低的js、css等资源
- 协商缓存HTTP状态码返回304）
  - Last-modified/If-Modified-Since (http1.0) Last-Modified是个时间戳，只能精确到秒
  - Etag/If-None-Match (http1.1)（（优先级高）
    - etag的生成规则 在nginx中是由：last-modified + content-length 十六进制组合而成
- 优劣势
  - expires 
    - 时间有服务器发送，如果服务器和客户端时间存在不一致，可能出现问题。
    - 存在版本问题，到期之前的修改客户端是不可知的
  - cache-control
    - http1.1才能用，不适合1.0
    - 存在版本问题，到期之前的修改客户端是不可知的
  - last-modified
    - 只要资源修改，不论资源是否发生变化，例如周期性重写，都会导致无效更新
    - 以时间作为标识，只能精准到秒级别，无法判断1s内进行多次修改
    - 某些服务器不能精准得到文件最后修改时间
  - etag
    - 计算etag需要性能损耗
    - 分布式服务器存储情况下，可能计算etag算法不一致导致无法匹配
- 优先使用强缓存，协商缓存会与服务器进行一次通信
- 缓存优先级 强缓存>etag>last-modified
- max-age和expires一般会写两个，为了向下兼容。在1.1环境中，max-age优先级高于expires

## HTTPS加密 
- 参考链接[https://zhuanlan.zhihu.com/p/43789231]
- 内容加密： 采用混合加密技术，中间者无法直接查看明文内容
- 验证身份： 通过证书认证客户端访问的是自己的服务器
- 保护数据完整性： 防止传输的内容被中间人冒充或者篡改
- 加密方式
  - 对称加密： 加密和解密用同一个秘钥。
    - 算法简单，加密容易，效率高
    - 相对不安全，密文被拦截切秘钥被劫持，容易被破译
  - 非对称加密：加密用公钥，解密用私钥。公钥和私钥是成对存在。通过私钥可以推导出公钥，但是通过公钥无法推导出私钥。
    - 安全，互相保管不同的密钥
    - 加密算法复杂，安全依赖算法和密钥，效率相对较低
  - 双非对称加密方式，使用两组公钥私钥。服务器保存公钥A和私钥B,浏览器保存公钥B和私钥A。传输数据是传输方用自己的公钥加密，接收方用对应的私钥解密。的确加强了安全性，但是非对称加密算法非常耗时。不划算。
  - 非对称和对称加密结合。服务器将公钥A发送浏览器，浏览器随机生成一个用于对称加密的秘钥X,将秘钥X使用公钥A加密后传给服务器，服务器通过私钥A解密，就可以得到对称秘钥X。之后就用X进行加解密。--但是，还是会被中间人攻击获取。中间人可以劫持服务器发送给浏览器的公钥A,伪造自己准备的公钥B给浏览器。浏览器通过公钥B加密对称X后继续被劫持，这样就得到对称秘钥X。
  - HTTPS（SSL/TLS)加密：对称加密、非对称加密、数字签名、数字证书。
    - 如何保证浏览器的收到的公钥是服务器传输的公钥？利用身份证类似的"公信"作用，找第三方颁发证书。
    - HTTPS 可以理解为HTTP+TLS(前身是SSL)
    - 先向CA机构申请颁发一份数字证书。数字证书中包含：域名、证书持有者、证书持有者的公钥等。
    - 为防止证书在传输过程中被篡改，增加数字证书防伪，即数字签名。
      - 数字签名的过程：
        - CA拥有非对称加密的私钥和公钥
        - CA对证书明文信息进行hash
        - 对hash后的值用私钥进行加密，得到数字签名
        - 明文和数字签名共同组成了数字证书。
    - 浏览器验证过程：
      - 拿到证书，得到明文T,数字签名S。
      - 用CA机构的公钥对S解密（由于是浏览器信任的机构，所以保有公钥），得到S‘。
      - 用证书里说明的hash算法对明文T进行hash得到T’。
      - 比较S‘是否等于T’。等于则表明证书可信。


### 参考链接
  - [https://www.jianshu.com/p/54cc04190252] 深入浏览器缓存机制
