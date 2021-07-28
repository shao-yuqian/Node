/**
 * 服务与数据库关系
 * 数据库可以帮服务持久化存储数据
 * 
 * 1.建立3000与MySQL连接
 * 2.3000 向 mysql 发送请求
 * 3.3000 接收mysql 响应，并处理
 * 
 */
const express = require('express');
const app = express();
const route = express.Router();
const formidable = require('express-formidable');
const db = require('./db.js');


route.get('/goodlist',function(req,res){
    // 发送请求
    let sql = 'select * from user;';
    // db.query() 向数据库发送请求，
    // 参数1：SQL语句 作用 读写数据库中的表
    // 参数2：如果有的话，代表的是 数组
    // 参数3：callback 当数据库做出响应的时候触发
    db.query(sql,function(err,data){
        if(err){
            console.log(err);
            return;
        }
        // data 数据库响应的数据
        console.log(data);
        res.json({
            code:200,
        })
    });

})

route.post('/userInfo',function(req,res){
    let {username,password,dec} = req.fields;
    let {imgsrc}=req.files;
    console.log(imgsrc.path);
    let host = '192.168.1.161';
    let port = 3000;
    let reg = /upload_(.+)(\.(gif|png|jpg|jpeg|webp|svglpsd|bmp|tif))/
    let imgPath = imgsrc.path.match(reg[0]);
    imgPath = `${host}:${port}/${imgPath}`; 

    // 将准备好的数据存到数据库中
    let sql = `insert into user (username,password,dec,imgsrc) values (?,?,?,?);`;
    db.query(sql,[username,password,dec,imgPath],function(err,data){
        if(err){
            res.json({
                code:105,
                msg:'服务器出错',
                err,
            })
        }
        console.log(data);
        res.json({
            code:200,
            msg:'添加成功'
        })
    })
    
})
app.use(formidable({
    uploadDir:'./load',
    keepExtensions:true,
}))

app.use(express.static('./load'));
app.use(formidable());
app.use(route);
app.listen(3000,function(){console.log(3000);})