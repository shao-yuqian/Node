/**
 * 1.解析form-data 格式数据,获取图片文件对象
 * 2.对图片进一步处理,格式,名字
 * 3.将处理后的文件保存到服务器中的某个文件
 * 4.给客户端响应,上传成功,或者图片保存的地址
 */
const express = require("express");
const app = express();
const route = express.Router();
const cores = require('cors')
const expressFormidable = require('express-formidable');
app.use(cores());
route.post('/upload', function (req, res) {
    let img = req.files.imgSrc;
    const ip = 'http://192.168.1.161';
    const port = 3000;
    let reg = /upload_(.+)(\.(gif|png|jpg|jpeg|webp|svglpsd|bmp|tif))/;
    console.log(img.path.match(reg));
    let imgSrc = img.path.match(reg)[0];
    let url = `${ip}:${port}/${imgSrc}`
    console.log(img.path);
    console.log(url);
    res.json({
        code: 200,
        url: url
    })
})
app.use(express.static('./upload'));
app.use(expressFormidable({
    encoding: 'utf-8',
    uploadDir: "./upload",
    multiples: true,//验证是否支持多张上传
    keepExtensions: true //是否保留文件后缀名字
}));
app.use(route);

app.listen(3000, function () {
    console.log(3000);
});