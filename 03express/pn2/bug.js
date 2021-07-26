const express = require('express');
const app = express();
const route = express.Router();

route.get('/a',function(req,res){
    console.log();
    res.end();
    res.a();
})
route.get('/b',function(req,res){
    res.json({
        code:200
    });
    res.json({
        code:200,
    })
})



app.use(route);
app.listen(3000);