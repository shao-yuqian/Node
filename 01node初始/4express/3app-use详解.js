const express = require("express");
const app = express();
app.listen(3000,function(){
    console.log("success");
})
// app.use() 使用中间间，指的是 use的回调函数
// app.use() 是有序触发，触发完第一个use，触发第二个use
// next 表示当前use 结束， 执行下一个use；如果next不执行，下一个use不会执行
// 只要有人访问服务。app.use() 默认一定触发，除非限制了条件

// app.use()
// 一个参数：函数，函数在访问的时候触发
// 两个参数：参数1，地址 string；参数2，函数 访问路由地址 与 参数1一致时，执行函数

// 作用:
// 使用expres 中间间
// 使用第三方中间间
// 自定义中间间，并执行

// 注意：
// app.use(function(){})
// 没有任何接口限制，只要访问服务，一定执行
// 访问所有接口执行
app.use(function(req,res,next){
    // req 请求报文
    // res 响应报文
    // next 管道函数
    console.log('11111111111');
    next();
})

app.use(function(req,res,next){
    console.log("2222222");
     next();
})
// 执行条件:
// url 为 /app/...
app.use("/app",function(req,res){
    console.log(3333333);
})

// 应用
// 处理服务器错误异常
// 使用中间间