const express = require('express');
const router = express.Router();
const vertifyParams = require('../config/vertyParams.js');
const db = require('../config/db.js');

router.post('/getList',async (req,res)=>{
    let sql = `select * from student`
    let data = await db(sql);
    res.json({
        data,
        code:200,
        msg:'success'
    })
})

router.post('/addStudent',async (req,res)=>{
    //1.验证token. 2.验证身份 3.完成新增
    let {rolu,name,age,dec} = req.fields;
    let imgsrc = req.files;
    
    if(rolu==2){
        let sql = `insert into student (name,age,dec,imgsrc) values ()`
        let data = await db(sql);
        
    }else{
        res.json({
            code:200,
            msg:'你没有权限'
        })
    }
})

router.post('/updataStudent',(req,res)=>{

})

router.post('/deleteStudent',(req,res)=>{

})

module.exports = router;