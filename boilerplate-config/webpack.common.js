var path = require('path');
var webpack = require('webpack');

/*
// 目录
// --------------------------------------------------
*/
// 项目根目录
const ROOT_PATH = path.resolve(__dirname, '..');
// 源码目录
const SRC_PATH = path.join(ROOT_PATH, 'src');

module.exports = {
    entry: ["../src/entries/app.js"],
    output: {
        path: path.join(ROOT_PATH, 'dist'),
        filename: "bundle.js"
    },
    module: {
        loaders: [
            // {
            //     test: /\.css$/,
            //     loader: "style!css"
            // },
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.js$/, loader: 'jsx-loader?harmony' },
            { test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
        ]
    }
};
