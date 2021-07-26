// 体验接口
const express = require("express");
const app = express();
app.listen(3000,function(){
    console.log("success");
})
app.use('/app',function(req,res){
    console.log("look serve");
    res.json({
        code:200,
        msg:"自定义的"
    })
})