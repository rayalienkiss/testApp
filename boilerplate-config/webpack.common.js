var path = require('path');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');

/*
// 目录路径
// --------------------------------------------------
*/
// 项目根目录
var ROOT_PATH = path.resolve( __dirname, '..' );
// 源码目录
var SRC_PATH = path.join( ROOT_PATH, 'src' );
// 入口目录
//var ENTRIES_PATH = path.join( SRC_PATH, 'entries/app.js' );
// 输出目录
var BUILD_PATH = path.join( ROOT_PATH, 'dist' );

module.exports = {
    // 插件项
    //plugins: [ commonsPlugin ],
    plugins: [
        new HtmlwebpackPlugin({
            title: 'Hello World app'
        })
    ]
    // 页面入口文件配置
    entry: [ '../src/entries/app.js' ],
    // 入口文件输出配置
    output: {
        path: BUILD_PATH,
        //filename: '[name]-[hash].js'
        filename: 'bundle01.js'
    },
    module: {
        // 加载器配置
        // loaders: [
        //     {
        //         test: /\.css$/,
        //         loader: 'style-loader!css-loader'
        //     },
        //     {
        //         test: /\.less$/,
        //         loader: 'style-loader!less-loader'
        //     },
        //     {
        //         test: /\.js$/,
        //         loader: 'jsx-loader?harmony'
        //     },
        //     {
        //         test: /\.scss$/,
        //         loader: 'style!css!sass?sourceMap'
        //     },
        //     {
        //         test: /\.(png|jpg)$/,
        //         loader: 'url-loader?limit=8192'
        //     }
        // ]
        loaders: [
            {
                test: /\.css$/,
                loader: "style!css"
            }
        ]
    },
    // 其它解决方案配置
    resolve: {
        // // 指定 npm 安装模块的根目录
        // root: path.join( ROOT_PATH, 'node_modules' ),
        // // 省略 js, jsx 文件的后缀命填写，但其他文件如 scss,less,css 则需要填写后缀名进行区分
        // extensions: [ '', '.js', '.jsx' ],
        // // 自定义路径别名，大写用于区别 npm 模块
        // alias: {
        //     // 静态资源路径
        //     STATIC: path.join( SRC_PATH, 'static' ),
        //     // UI组件路径
        //     COMUI: path.join(SRC_PATH, 'components/components-ui'),
        //     // 业务组件路径
        //     COMSERVICE: path.join(SRC_PATH, 'components/components-service')
        // }
    }
};
