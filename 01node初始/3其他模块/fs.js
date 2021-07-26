// node.js 是非阻塞I/O
// i 写文件
// o 读文件
// 
const fs = require('fs');
// 同步读文件，返回值为buffer格式的文件
// let res = fs.readFileSync("./a.txt");
// console.log(String(res));
// // 往文件中同步写文件，一次性写完，覆盖的效果，不是累加
// fs.writeFileSync('./b.txt',res);




// 异步读文件
fs.readFile('./a.txt',function(err,data){
    // 读文件后，触发函数
    // err读文件时出现的错误，返回err
    // data 读取文件中的内容
    if(err) return;
    console.log(data);
    console.log(String(data));
    // 异步写文件
    fs.writeFile("./b.txt",data,function(err,data){
        // 写完触发回调函数
        console.log("finished");
    });
})

