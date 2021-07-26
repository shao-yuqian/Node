const express = require('express');
const app = express();
const jsonWebToken = require('jsonwebtoken');
const router = express.Router();

app.listen(3000, function () {
    console.log(3000);
});

let key = 'wo shi yige man nan ren';

router.post('/login', (req, res) => {
    let user = req.body;
    if (!user.hasOwnProperty('username') || !user.hasOwnProperty('password')) {
        res.json({
            code: 3001,
            msg: '入参不合法'
        });
        return;
    }
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

router.post('/vetify',function(req,res){
    console.log(req.body);
    let {token} = req.body;
    /* 
      jsonWebToken.verify() 验证token
      参数1：token
      参数2：密钥
      参数3：验证结束后 触发 函数
    */
    jsonWebToken.verify(token,key,function(err,data){
        if(err){    //验证没有通过
            console.log(err);
            res.json({
                code:3002,
                msg:'你没有权限'
            })
            return;
        }
        // data 解密后的详细信息
        console.log(data);
        res.json({
            code:200,
            msg:'验证通过'
        });
    })
})
app.use(express.urlencoded());
app.use(express.json());
app.use(router);
