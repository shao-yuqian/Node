// 建立数据库连接
const mysql = require('mysql2');
const config = require('./config.js');
const c = mysql.createConnection(config.mysql);

function query(sql,arr){
    return new Promise((resolve,reject)=>{
        c.query(sql,arr,function(err,data){
            if(err){
                reject(err);
                return;
            }
            resolve(data);
        })
    })
}
module.exports = query;
// module.exports = c;