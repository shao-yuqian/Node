// 导入模块 ，参数：文件路径
// 变量赋值，module.exports 赋值的内容
// 注意：变量赋值的不是整个文件
const moduleB = require("./moduleB.js");
console.log("moduleA is run");
console.log(moduleB);