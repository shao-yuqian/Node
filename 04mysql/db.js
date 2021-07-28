const mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',     //连接地址
    user: 'root',          //用户名
    password: '123456',    //密码
    port: '3306',          //端口号
    database: 'biyao'      //连接的数据库
});

module.exports = connection;
