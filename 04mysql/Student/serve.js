const express = require('express');
const app = express();
const route = express.Router();
const formidable = require('express-formidable');
const db = require('./db.js');
route.get('/user',function(req,res){
    // 发送请求
    let sql = 'select * from user;';    
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


app.use(express.static('./load'));
app.use(formidable());
app.use(route);
app.listen(5555,function(){console.log(5555);})