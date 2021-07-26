const http = require('http');
const app = http.Server(function(req,res){
    // 函数执行的条件，有人访问服务
    console.log("somnone visit me");
    // req 接收请求报文 （头，方式，地址，体）
    // res 响应报文     （头，方式，地址，体）
    // console.log(req);
    let url = req.url;
    let method = req.method;
    let isParam = url.indexOf('?') ===-1?false:true;
    console.log(url,method,isParam);
    // if(isParam != -1){
    //     url = url.slice(0,isParam);
    // }   
    if(url==='/'){
        res.end("Hello World");
        return;
    }
    if(url==='/api/user'){
        res.end("Welcom to my class");
        return;
    }
});
app.listen(3001,function(){
    console.log('node is run');
})
// 编写接口
// 如何接收客户端请求
// 如何响应客户请求
