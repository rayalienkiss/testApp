/**
 * RAP mock构建配置
 */
const path = require('path');
const webpack = require('webpack');
// 公用配置
const commonConfig = require('./webpack.common');
commonConfig.output.publicPath = '/'
// WDS
const utils = require('./utils');
const HOST = utils.getIP();
const PORT = 8090;
const projectId = 15; //RAP上的projectId
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 网站信息
const info = require('./info');
// 目录
const ROOT_PATH = path.resolve(__dirname, '..'); // 项目根目录
const SRC_PATH = path.join(ROOT_PATH, 'src'); // 源码目录

module.exports = Object.assign(commonConfig, {
    devtool: 'source-map', // 'eval'  生产配置这个： cheap-source-map  测试配置这个：source-map
    cache: true,
    plugins: commonConfig.plugins.concat([
        // 配置全局常量
        new webpack.DefinePlugin({
            'process.env': { // React/Redux打包常用
                NODE_ENV: JSON.stringify('development')
            },
            __DEV__: true,
            __CORS__: false // CORS跨域请求
        }),
        // 在静态根目录（WDS默认是工程根目录）生成html文件及它的相关资源文件，并引用这些资源（WDS在内存中生成）
        new HtmlWebpackPlugin({
         title: info.app.title,
         description: info.app.description,
         keywords: info.app.keywords,
         template: path.join(SRC_PATH, 'entries/app.html'),
         filename: 'index.html', // 生成的html文件
         chunks: ['app', 'lib'],
         favicon: path.join(SRC_PATH, 'assets/favicon.ico'),
         ie: 'polyfill/ie8-polyfills-min.js',
         js: [
             '/src/assets/js/jquery.min.js',
             '/src/assets/js/common.js',
             'http://res.wx.qq.com/open/js/jweixin-1.0.0.js',
         ],
        }),
    ]),
    // webpack dev server 配置
    devServer: {
        host: HOST,
        port: PORT,
        historyApiFallback: true,
        proxy: {
            '/API/*': {
                target: 'http://rap.monster/', // RAP mock服务器  需要配置host 192.168.8.164 rap.monster
                pathRewrite: {
                    '^/API': `/mockjsdata/${projectId}`
                },
                secure: false,
                changeOrigin: true,
            }
        }
    }
});
