var { outputDir } = require('./src/common/configByEnv.js');

module.exports = {
    outputDir: outputDir,
    devServer: {
        port: 8102, // 端口号
    }
}