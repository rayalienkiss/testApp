var path = require('path');
var webpack = require('webpack');

/*
// 目录
// --------------------------------------------------
*/
// 项目根目录
var ROOT_PATH = path.resolve( __dirname, '..' );
// 源码目录
var SRC_PATH = path.join( ROOT_PATH, 'src' );

module.exports = {
    // 插件项
    //plugins: [ commonsPlugin ],
    // 页面入口文件配置
    entry: [ "src/entries/app.js" ],
    // 入口文件输出配置
    output: {
        path: path.join( ROOT_PATH, 'dist' ),
        filename: '[name]-[hash].js'
    },
    module: {
        // 加载器配置
        loaders: [
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.js$/,
                loader: 'jsx-loader?harmony'
            },
            {
                test: /\.scss$/,
                loader: 'style!css!sass?sourceMap'
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192'
            }
        ]
    },
    // 其它解决方案配置
    resolve: {
        // 指定 npm 安装模块的根目录
        root: path.join( ROOT_PATH, 'node_modules' ),
        // 省略 js, jsx 文件的后缀命填写，但其他文件如 scss,less,css 则需要填写后缀名进行区分
        extensions: [ '', '.js', '.jsx' ],
        // 自定义路径别名，大写用于区别 npm 模块
        alias: {
            // 公共资源文件路径
            PUBLIC: path.join( SRC_PATH, 'public' ),
            // UI组件路径
            COMUI: path.join(SRC_PATH, 'components/components-ui'),
            // 业务组件路径
            COMSERVICE: path.join(SRC_PATH, 'components/components-service')
        }
    }
};
