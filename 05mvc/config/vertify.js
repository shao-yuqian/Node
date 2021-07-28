// token 验证中间件
// 自定义中间件
const jsonwebtoken = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');
let private = String(fs.readFileSync(path.resolve('./config/private.key')));
module.exports = function (arr, obj) {
    return function (req, res, next) {
        let { token } = req.fields;
        jsonwebtoken.verify(token, private,function (err, data) {
            if (err) {
                console.log(err);
                res.json({
                    code: 200,
                    msg: "无效token"
                })
                return;
            } else {
                console.log(data);
                next();
            }
        })

    }
}