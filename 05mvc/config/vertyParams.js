
// 工具函数,一般用来完成一个功能，js数据处理
// 返回结果
// 中间件，有请求报文和响应报文 一般不会脱离 app 实例
// 中间件属于app 实例的一部分
/**
 * 
 * @param {*} arr 
 * @param {*} obj 
 * @returns true 表示合法 false表示不合法
 */
function vertifyParams(arr, obj) {
    let paramKey = Object.keys(obj);
    if (arr.length != paramKey.length) {
        return false;
    }
    for (let i = 0; i < paramKey.length; i++) {
        let result = arr.indexOf(paramKey[i]);
        if (result === -1) {
            return false;
        }
    }
    return true;
}
module.exports = vertifyParams;