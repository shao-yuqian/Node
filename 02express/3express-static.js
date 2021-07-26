// 静态资源 
const express = require("express");
const app = express();
const cors = require('cors')
app.use(cors());
// 指定静态文件,按目录
// 对于服务器而言,所有的文件 都是静态资源
// 一个服务器可以指定多个静态资源
app.use(express.static('./ziyuan'));
app.use('/tast',function(req,res){
    res.json({
        code:200
    })
})
app.listen(3000, function() {
    console.log(3000);
})

// 用户输入url后浏览器做了那些事
// 1.域名解析--->ip---->找到服务器
// 2.通过端口找到具体服务
// 3.建立客户端与服务端链接,tcp协议连接,3次握手4次挥手
// 4.服务器响应静态资源文件,.html
// 5.浏览器渲染html


//结果:用户输入Ur1后你看到一个页面
// 页面怎 么出来的?
//--->html文件渲染的
// html文 件哪里来的?
//--->服务器给你返回的静态资源
//服务器在哪里了?
//--->url地址，经过对域名解析为ip:端口找到服务
//服务怎么给你的页面?
//---> 因为客户端 与服务端 建立的链接，所以服务 端格勒html文 件
//那服务端怎么有静态资源?
// ---> 因为服务端开发指定了静态资源文件，这里文件都可以直接访问
// / ---> static/ index
// /axios.js --->static/axios.js
// /view/a.html ---> static/view/a. htm1
