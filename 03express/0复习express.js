const express = require("express");
const path = require("path");
const app = express();
const axios = require("axios");

// app.use 管道函数，使用中间件
app.use(express.urlencoded());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'public')));
app.use(function (err, req, res, next) {
    // 这里可以处理公共的请求 公共的响应
    next();
})
app.use('test', async function (req, res) {
    // 中间件上的
    // req res为同一个req res
    // http.request() 向其他服务器发送请求
    // let p = await http.request({
    //     url:'',
    //     method:'GET',
    // });
    // console.log(p);
    let data = await axios.get('http://localhost/a');
    console.log(data.data);
    // data = await get返回的promise实例
    // data = resolve实参
    // data = 报文实例
    // data.data = 服务器响应的数据
    res.json({
        code: 200,
    });
    // res.json() 没有结束语句的作用，还是得使用return结束 语句
    console.log('12345');

});
app.use('/a/:id/b/:age', function (req, res) {
    // 客户端参数两种方式
    // params req.query
    // body req.body
    // url中params (/a/123) req.params
    
    console.log(req.params);
    res.json({
        msg: '测试request'
    })
})

app.listen(3000, function () {
    console.log(3000);
})