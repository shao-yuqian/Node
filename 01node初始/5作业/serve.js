const express = require('express');
const path = require('path')
const fs = require('fs');
const app = express();
app.listen(5560, function () {
    console.log("服务器开启");
})

//获取列表
app.use('/api/list', function (req, res) {
    if(req.method=="GET"){
        let dataPath = path.resolve(__dirname,'data');
        let data = fs.readFileSync(`${dataPath}/shopList.json`);
        data = JSON.parse(data);
        res.json({
            data,
            code:200,
            msg:"success"
        })
    }
})
//添加用户
app.use(express.urlencoded());
app.use(express.json());
app.use('/register', function (req, res) {
    if(req.method != "POST"){
        res.json({
            code:401,
            msg:"The method is POST"
        })
        return;
    }
    let isUserName = req.body.hasOwnPro
    
})
// 登录
app.use(express.urlencoded());
app.use(express.json());
app.use('/login', function (req, res) {
    
})

// console.log([...new Set(a)]);





