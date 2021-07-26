const express = require("express");
const expressFormidable = require('express-formidable')
const app = express();
app.listen(3000, function () {
    console.log("success");
})

app.use('/a', function (req, res) {
    /**
     * baseUrl:http://192.168.1.149:3000
     * url:/a
     * 请求方式 GET
     * 请求参数没有限制
     */
    // 获取params传参
    let param = req.query; 
    if (req.method == "GET") {
        res.json({
            code: 200,
            data: param,
        })
        return;
    }
    res.json({
        code: 200,
        data: "方法错误"
    })

})

// 处理请求体参数

app.use(express.urlencoded());
app.use(express.json());
app.use("/b", function (req, res) {
    // 获取请求体传入的参数
    let body = req.body;
    console.log(body);
    res.json({
        data: body,
    })
})

// 处理请求体中form-data数据
// express-formidable
// multiparty
// multer
app.use(expressFormidable())
app.use('/up', function (req, res) {
    let data = req.fields;   //非文件对象参数
    let file = req.files;    //文件对象参数
    // console.log(data,file);
    res.json({
        data,
        msg: "收到了form-data格式的数据了"
    })
})
