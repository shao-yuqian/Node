// token
// 1: 生成
// 2: 验证

// 登录---> token
// 其他操作 ---> 验证token

// token
//  作用: 权限验证
// 为什么有: 为了解决 传统的验证方式 cookies session 缺陷

// 特点
// 1: 随机字符串
// 2: 每个用户的token 不一样
// 3: 有过期时间

// 内容
/* 
Header(头部)
*/

const express = require('express');
const app = express();
const jsonWebToken = require('jsonwebtoken');
const router = express.Router();
let key = 'wo shi yige man nan ren';
app.listen(3000, function () {
    console.log(3000);
});

router.post('/login', (req, res) => {
    let user = req.body;
    if (!user.hasOwnProperty('username') || !user.hasOwnProperty('password')) {
        res.json({
            code: 3001,
            msg: '入参不合法'
        });
        return;
    }
   
    /* 
    jsonWebToken.sign 作用 生成token
    参一: token 头部, 根据传入的用户名生成不同的token
    参二: 密钥, 根据密钥验证tiken. 目的防止别人攻击服务器
    参三: token 配置信息,过期时间

    token就是一个令牌, token中有 身份信息,登入时间 过期时间等
    */
    let token = jsonWebToken.sign({
        username: user.username // 让token 中存在 用户身份
    }, key, {
        expiresIn: 1000 * 60 * 60, //设置token 过期时间
        // algorithm: 'RS256',  //token的加密算法
    })
    res.json({
        code: 200,
        token,
        msg: '登录成功',
        userInfo: {
            username: user.username,
        }
    })
});

app.post('etify',function(req,res){
    let {token,username} = req.body;
    let result = jsonWebToken.verify(token,key,function(err,data){
        if(err){
            res.json({
                code:3002,
                msg:'你没有权限'
            })
            return;
        }
        res.json({
            code:200,
            msg:'验证通过'
        });
    })
})
app.use(express.urlencoded());
app.use(express.json());
app.use(router);
