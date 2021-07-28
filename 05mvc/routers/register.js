const express = require('express');
const router = express.Router();
const vertifyParams = require('../config/vertyParams.js');
const db = require('../config/db.js');

router.post('/register', async (req, res) => {
    // 1.验证参数是否存在
    let key = ["username", "password"];
    let flag = vertifyParams(key, req.fields);
    if (!flag) {
        res.json({
            code: 103,
            msg: '参数不合法'
        })
        return;
    }

    // 2.验证参数值是否合法
    let { username, password } = req.fields;
    let userReg = /\w{3,12}/;
    let pwReg = /\d{6,12}/;
    if (!userReg.test(username) && !pwReg.test(password)) {
        res.json({
            code: 103,
            msg: '用户名或密码格式不正确'
        })
        return;
    }
    // 3.将用户信息存入数据库
    username = JSON.stringify(username);
    password = JSON.stringify(password);
    let rolu = 1;
    let selectsql = `select * from user where username=${username}`;
    try {
        let data = await db(selectsql);
        if (data.length != 0) {
            res.json({
                code: 203,
                msg: '用户已经存在'
            })
            return;
        }
        let sql = `insert into user (username,password,rolu) values (${username},${password},${rolu})`;
        await db(sql);
        res.json({
            code: 200,
            msg: '注册成功'
        })
    } catch (error) {
        res.json({
            code: 105,
            msg: '服务器休息了'
        });
    }

    // db.query(selectsql, function (err, data) {
    //     if (err) {
    //         res.json({
    //             code:105,
    //             msg:'服务器休息了'
    //         });
    //         return;
    //     }
    //     if (data.length != 0) {
    //         res.json({
    //             code: 203,
    //             msg: '用户已经存在'
    //         })
    //         return;
    //     }
    //     // 不存在用户,存入数据
    //     let sql = `insert into user (username,password,rolu) values (${username},${password},${rolu})`;
    //     db.query(sql, function (err, data) {
    //         if (err) {
    //             console.log(err);
    //             return;
    //         }
    //         console.log(data);
    //         res.json({
    //             code: 200,
    //             msg: '注册成功'
    //         })
    //     })
    // })

})

module.exports = router;