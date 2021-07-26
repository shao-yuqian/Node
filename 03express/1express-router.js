const express = require("express");
const path = require("path");
const app = express();
const route = express.Router();

// app.use('/a/:id/b/:age', function (req, res) {
//     console.log(req.params);
//     res.json({
//         msg: '测试request'
//     })
// })
route.use('/a',function(req,res){
    res.json({
        msg:"测试路由 "
    })
})
// 将路由实例挂载到应用上
app.use(route);


app.listen(3000, function () {
    console.log(3000);
})