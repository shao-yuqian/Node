const express = require("express");
const app = express();
app.listen(3000,function(){
    console.log("success");
})
app.use('/',function(req,res){
    let url = req.url;              //路由地址
    let method = req.method;        //请求方式
    let query = req.query;          //获取get请求
    let params = req.params;        //{}
    console.log(url,method,query,params); 

    // req.on()监听的是，请求体传参,
    // 请求体参数数据格式:x-wwww-form-urlencoded 2.form-data
    // form-data；数据很难处理，可以上传文件对象，更难处理
    // 所以body传参 使用第三方中间件
    // 数据格式包括所有的，注意;form-data的格式不好处理，文件对象比较难处理
    req.on('data',function(data){
        // data 是形参，请求体中的参数
        console.log(data);
        console.log(String(data)); //aa=123&bb=345
    }) 
    
    req.on('end',function(data){
        // 当请求报文全部传递过来后 触发
        console.log("end");
    })
})
/**
 * 客户端传参：
 * 1.params 传参 req.query 获取
 * 2.body 请求传参 req.on('data)，一般用第三方中间库
 * 3.用什么方式 get post delet put 无所谓 不影响
 * 4.可以同时params 和 body 传参
 * 
 * 
 * 如何处理请求参数
 * 如何做出响应
*/