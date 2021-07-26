const express = require('express');
const app = express();
const route = express.Router();
app.listen(3000);

// 获取短信验证码接口
// 1.服务器3000 向阿里云发送请求
// 发送短信的内容
// 短信的模板
// 
route.get('/vertifyCode',function(req,res){
    
})

app.route();