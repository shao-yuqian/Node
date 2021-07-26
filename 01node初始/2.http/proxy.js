/**
 * 代理服务器
 * 客户端A 服务器A 服务器B
 * 数据源：服务器B
 * 客户端A ----请求--> 服务器A ---请求--->服务器B
 * 服务器 -----响应--> 服务器A ---响应--->客户端A
 * 
 * 实现方案：
 * 1.搭建代理服务器
 * 2.创建代理接口
 * 3.客户运行在搭建的服务器上
 */
const http = require('http');
const app = http.createServer((req, response) => {
    response.writeHead(200, { 'Content-Type': 'application/json' });
    if (req.url == '/') {
        http.get('http://49.232.47.192:9527/api/goodList?page=1', (res) => {
            console.log('111111111');
            const { statusCode } = res;
            const contentType = res.headers['content-type'];

            let error;
            // 任何 2xx 状态码都表示成功响应，但这里只检查 200。
            if (statusCode !== 200) {
                error = new Error('Request Failed.\n' +
                    `Status Code: ${statusCode}`);
            } else if (!/^application\/json/.test(contentType)) {
                error = new Error('Invalid content-type.\n' +
                    `Expected application/json but received ${contentType}`);
            }
            if (error) {
                console.error(error.message);
                // 消费响应数据以释放内存
                res.resume();
                return;
            }

            res.setEncoding('utf8');
            let rawData = '';
            // 响应数据触发回调函数
            res.on('data', (chunk) => {
                // chunk服务响应的数据
                rawData += chunk;
                console.log(rawData);
                response.end(rawData)
            });
            res.on('end', () => {
                try {
                    const parsedData = JSON.parse(rawData);
                    console.log(parsedData);

                } catch (e) {
                    console.error(e.message);
                }
            });
        }).on('error', (e) => {
            console.error(`Got error: ${e.message}`);
        });
    }
});
app.listen(3000)
