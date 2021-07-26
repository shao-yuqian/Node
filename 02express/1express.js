const express = require("express");
const app = express();
app.listen(3000, function () {
    console.log(3000);
})
app.use(function (req, res,next) {
    console.log('我是一个中间件');
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
    res.dog = "zhangsan";
})
app.use('/a', function (req, res) {
    // res 是响应报文,
    // res.json()给客户端响应json对象
    // res.end()  一次性响应
    // res.render() 服务端渲染用得到
    // res.download() 下载文件
    // res.set() 设置头部信息
    console.log(res.dog);
    res.json({
        msg:'aaaa'
    })
})
app.use('/download', function (req, res) {
    console.log(res.dog);
})