// 1.导入express
const express = require("express");
// 2.创建服务对象
const app = express();
// 3.监听端口号
app.listen(3000,function(){
    console.log("success");
})
// -------> 完成创建服务  运行：node ./1app.js