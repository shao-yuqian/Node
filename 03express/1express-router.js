const express = require("express");
const path = require("path");
const app = express();
const route = express.Router();

app.use(function(req,res,next){
    // 服务.use,req和res是公共的对象
    res.age = 123;
    next();
})
// route.use(callback) callback 只有三个参数
// 参数1:请求报文,参数2:响应报文,参数3:next 执行下一个use

// route.use() 是管道函数
// 管道函数中的req res 都是同一个req res

// app.use() route.use() 中的req与res是同一个对象,都是公共的对象
// 具体接口 /a /b 中req res与app.use() route.use() 是同一个对象

route.use(function(req,res,next){
    // 一般用于解决多接口 公共问题
    console.log('route.js');
    console.log(res.age);
    res.dog = "Dog";
    next();
})
route.use('/a',function(req,res){
    console.log('/a route.js');
    console.log(res.age);
    console.log(res.dog);
    res.json({
        msg:"测试/a路由 "
    })
})
// 将路由实例挂载到应用上
app.use(route);

// route.get() 
// 1.确定了接口地址 /b
// 2.确定了请求方式 get
route.get('/b',async function(req,res){
    console.log(res.dog);
    res.json({
        code:220,
        data:'get'
    })
})

app.listen(3000, function () {
    console.log(3000);
})