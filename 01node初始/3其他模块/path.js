const path = require('path');
// 拼接路径；返回绝对路径
// __dirname 当前文件的根路径 绝对路径
let url = path.resolve(__dirname,'dist');
console.log(url);

// 将相对路径变为绝对路径
let url1 = path.join(__dirname,'./dist');
console.log(url1);
// 注意