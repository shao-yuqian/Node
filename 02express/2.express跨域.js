const express = require("express");
const app = express();
const cors = require('cors');
app.listen(3000, function () {
    console.log(3000);
})
//方案二
// 注意:放在所有接口的最顶端
app.use(cors());
/**
 * bug:前端跨域拦截
 * 发生情况:前端发送ajax请求
 * 原因:浏览器的同源策略影响,简单说,页面运行地址,与服务地址不一致
 * 情况:1.协议不同
 *      2.域名不同
 *      3.子域名
 *      4.端口号不同
 *      ---------->导致跨域拦截
 * 解决方式:只要不受同源策略影响都可以 
 * 不受同源策略影响:
 * 1.scoript 前端解决:利用jsonp回写script元素 向服务器请求资源
 * 2.服务器向服务器发送请求不受影响:
 *   前端做代理服务器解决开发环境,跨域问题
 * 服务端解决:
 * 3.cors 方案
 * 4.服务器配置请求头
 * 
 * 注意:跨域拦截基本只会发生在开发环境,生产环境,代码已经打包发布上线,给服务端,运行时
 *      协议 域名 端口 都一致
 *      
 *       除非,你项目中 请求了别人家的服务器,那就只能jsonp解决
 */
// 方案一
// app.use(function(req,res,next){
//     res.header('Access-Control-Allow-Origin', '*');
//      //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
//     res.header('Access-Control-Allow-Headers', 'Content-Type');
//     res.header('Access-Control-Allow-Methods', '*');
//     res.header('Content-Type', 'application/json;charset=utf-8');
//     next();
// })

// 



app.use('/a',function(req,res){
    res.json({
        msg:'aaaaa'
    })
})
