const express = require('express');
const formidable = require('express-formidable');
const register = require('./routers/register.js');
const login = require('./routers/login.js');
const student = require('./routers/student.js');
const userRouter = require('./routers/user.js');
const app = express();
const config = require('./config/config.js');
const verify = require('./config/vertify.js');


app.use(formidable());
// 只有路由地址为 /api/xxx 才需要token 其他地址不需要验证
app.use('/api/*',verify());
app.use(register);
app.use(login);
app.use('/api/*',student);
app.use(userRouter);
app.listen(config.port, function () { console.log(3000); })