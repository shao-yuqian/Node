// const http = require("http");
// const app = new http.Server();
// app.listen(5555,function (params) {
//     console.log('ok');
// })

/**
 * 1.node.js 操作服务的
 * 2.node.js 操作文件
 * 3.node.js 的运行平台是系统
 * 提供与系统文件服务等对接的模块
 * 
 * node用途
 * node 写服务器
 * node搭建平台
 * node js 编写工具
 * node.js 很强大
 */

const http = require('http');
// 创建服务对象
const app = http.Server();
// 服务必须有端口号,
app.listen(2345,function(){
    console.log("success");
})
// 可以在系统中服务中查看到该服务已启动 netstat -na
// 这个文件的作用：只能在系统中插件运行的服务，其他都不能访问
