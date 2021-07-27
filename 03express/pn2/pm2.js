module.exports = {
    apps:[{
        name:'测试运行',
        script:'./bug.js',
        env:{
            
            NODE_ENV:'development',
        },
        env_producttion:{
            NODE_ENV:"production",
        },
        watch:true,                     //监听运行文件
    },{   //pm2 运行第二个应用程序
        name:'worker',
        script:"../1express-router.js"
    }]
}