/**
 * 1.解析form-data 格式数据,获取图片文件对象
 * 2.对图片进一步处理,格式,名字
 * 3.将处理后的文件保存到服务器中的某个文件
 * 4.给客户端响应,上传成功,或者图片保存的地址
 */
const express = require("express");
const app = express();
const route = express.Router();
const expressFormidable = require('express-formidable');

route.post('/upload',function(req,res){
    let img = req.files.imgSrc;
    console.log(img);
    res.json({
        code:200,
    })
})

app.use(expressFormidable({
    encoding:'utf-8',
    uploadDir:"./upload",
    // multiples:true,//验证是否支持多张上传
    keepExtensions:true //是否保留文件后缀名字
}));
app.use(route);

app.listen(3000, function () {
    console.log(3000);
});