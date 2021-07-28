const express = require('express');
const app = express();
const route = express.Router();
const formidable = require('express-formidable');
const db = require('./db.js');

route.get('/register', function (req, res) {
    // 发送请求
    let { username, password, rolu } = req.fields;
    let sql1 = `select * from user where username=?`
    db.query(sql1, [username], function (err, data1) {
        if (err) {
            res.json({
                code: 400,
                msg: '服务器错误',
            })
            return;
        }
        if (data1.length == 0) {
            let sql = `insert into user (username,password,rolu) values (?,?,?)`
            db.query(sql, [username, password, rolu], function (err, data) {
                if (err) {
                    res.json({
                        code: 105,
                        msg: "服务器出错"
                    })
                    return;
                }
                console.log(data);
                res.json({
                    code: 200,
                    msg: "添加成功"
                })
            })
            return;
        }else{
            res.json({
                code: 202,
                msg: '用户名已经存在',
            })
        }
    })

})

route.post('/login', function (req, res) {
    let { username, password } = req.fields;
    let sql = `select * from user where username=? and password=?;`
    db.query(sql, [username, password], function (err, data) {
        if (err) {
            res.json({
                code: 103,
                msg: '服务器报错'
            })
            return;
        }
        if (data.length == 0) {
            res.json({
                code: 202,
                msg: '用户名或密码错误'
            })
            return;
         }//else{
        //     let sql2 = `alter table user add token char(10)`;
            
        // }
        res.json({
            code: 200,
            msg: "success",
            token:'ddddd',
        })
    })
})

route.get('/userinfo',function(req,res){
    let {password, id} = req.fields;
    let sql = `update user set password=? where id=? `
    db.query(sql,[password,id],function(err,data){
        if (err) {
            res.json({
                code: 105,
                msg: "服务器出错",
                err,
            })
            return;
        }
        console.log(data);
        res.json({
            code:200,
            msg:"用户信息更新成功",
        })
    })
})


app.use(express.static('./load'));
app.use(formidable());
app.use(route);
app.listen(5555, function () { console.log(5555); })