var path = require('path')
var appconf = require('../../appconf.json')

var serverurl
var productId = ''
switch (process.env.NODE_ENV) {
    case 'production':
        serverurl = appconf.build.serverUrl
        productId = appconf.build.productId
        break
    case 'development':
        serverurl = appconf.dev.serverUrl
        break
    case 'alpha':
        serverurl = appconf.alpha.serverUrl
        productId = appconf.alpha.productId
        break
}


// 配置 build 文件输出路径, 可以使用绝对路径或相对路径
var outputDir
var reg = /^\.(\.)?\/.*/
if (reg.test(appconf.build.outputDir)) {
    if (process.env.NODE_ENV == 'alpha')
        outputDir = path.resolve(__dirname, appconf.alpha.outputDir) // 相对路径
    else
        outputDir = path.resolve(__dirname, appconf.build.outputDir) // 相对路径
} else {
    if (process.env.NODE_ENV == 'alpha')
        outputDir = appconf.alpha.outputDir
    else
        outputDir = appconf.build.outputDir // 绝对路径
}


var conf = {
    outputDir: outputDir,
    serverUrl: serverurl,
    env: process.env.NODE_ENV,
    productId: productId
}

module.exports = conf
