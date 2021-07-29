const express = require('express');
const router = express.Router();
const vertifyParams = require('../config/vertyParams.js');
const db = require('../config/db.js');
const jsonwebtoken = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');
// 文件路径 注意:以app.js为参照的相对路径
// path.resolve() 以app.js为参照的相对路径
let private = String(fs.readFileSync(path.resolve('./config/private.key')));
console.log(private);
/*
    1.获取参数
    1.1验证参数是否合法
    1.2验证参数的值是否满足正则
    2.向数据库发送请求
    2.1根据username查询是否存在该用户
    2.2比较密码是否一致
    3.
*/
router.post('/login', async (req, res) => {
    let key = ["username", "password"];
    let flag = vertifyParams(key, req.fields);
    if (!flag) {
        res.json({
            code: 103,
            msg: '参数不合法'
        })
        return;
    }
    // 1.2.验证参数值是否合法
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

    // 
    // username = JSON.stringify(username);
    let sql = `select * from user where username=${JSON.stringify(username)}`;
    let data = await db(sql);
    console.log(data);
    if (data.length == 0) {
        res.json({
            code: 200,
            msg: '没有注册,先注册',
        })
        return;
    }
    let user = data[0];
    if (password != user.password) {
        res.json({
            code: 201,
            msg: "用户名或密码错误",
        })
        return;
    }
    // 
    let token = jsonwebtoken.sign({
        username,
    },private,{
        expiresIn:60*60*6,
    })
    res.json({
        username,
        token,
        rolu:user.rolu,
        code: 200,
        msg:'登录成功sucess'
    })

})

module.exports = router;