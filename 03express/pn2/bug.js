const express = require('express');
const app = express();
const route = express.Router();

route.use('/a',function(req,res){
    
})



app.use(route);
app.listen(3000);