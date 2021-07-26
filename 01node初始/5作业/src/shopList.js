const express = require("express");
const fs = require('fs');
const app = express();
app.listen(5555, function () {
    console.log("success");
});

// 读取shopList文件内容
let result = fs.readFileSync("../data/shopList.json");
let lists = JSON.parse(result);
// console.log(JSON.parse(result));
app.use("/api/list", function (req, res) {
    if (req.method == "GET") {
        res.json({
            lists,
        })
        return;
    }
    res.json({
        msg: "请求失败，检查请求方式"
    })
})


// 添加用户register
app.use(express.urlencoded());
app.use(express.json());

app.use("/api/register", function (req, res) {
    let body = req.body;
    if (req.method == "POST") {
        let user = JSON.parse(String(fs.readFileSync("../data/user.json")));
        user.push(body);
        console.log(user);
        fs.writeFileSync("../data/user.json", JSON.stringify(user))
        res.json({
            code: 1,
            msg: 'success'
        });
        return;
    }
    res.json({
        code: 3000,
        msg: 'error'
    })

})



//login

app.use("/api/loginer", function (req, res) {
    if (req.method == "POST") {
        let params = req.query;
        let user = JSON.parse(String(fs.readFileSync("../data/user.json")));
        // let flag = false;
        for (let i = 0; i < user.length; i++) {            
            if (user[i].username == params.username && user[i].password == params.password) {
               
                res.json({
                    code: 200,
                    msg: 'success',
                    token: "today is good",
                })                       
            }     
        }
        return;
    }
    res.json({
        code: 3000,
        msg: 'err'
    })

}) 