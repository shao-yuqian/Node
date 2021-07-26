// token
// 1.生成 在登录的时候
// 2.验证   其他需要权限的接口


// 登录---->token
// 其他操作 ------> 验证token

// token
// 作用：权限验证
// 为了解决 传统的验证方式
// 特点：
// 1.随机字符串
// 2.每个用户的token 不一样
// 3.有过期时间
/**
 * 内容：
 * Header（头部）
 */
const express = require("express");
const app = express();
const route = express.Router();
const jsonWebToken = require('jsonwebtoken');

const cores = require('cors')
app.use(cores());

app.listen(3000);

route.use('/login',(req,res)=>{
    let user = req.body;
    if(!user.hasOwnProperty('username') || !user.hasOwnProperty('password')){
        res.json({
            code:200,
            msg:"不合法"
        })
        return;
    }
    let key = "fahhga";
    // jsonWebToken.sign() 生成token
    // 参数1：token 头，根据传入的用户名生成不同的token
    // 参数2：密钥，根据密钥验证token，目的防止别人攻击服务器
    // 参数3：token 配置信息，过期时间
    // token 就是一个令牌，上面有身份信息，登录时间，过期时间等
    // 
    let token = jsonWebToken.sign({
        username:user.username,
    },key,{
        expiresIn:1000*60*60,  //设置token 过期时间，单位毫秒
        // algorithm:"RS256",  //设置加密算法
    })
    console.log(token);
    res.json({
        code:200,
        token,
        userInfo:{
            username:user.username,
        },
        msg:'success'
    })
})
app.use(express.urlencoded());
app.use(express.json());
app.use(route);