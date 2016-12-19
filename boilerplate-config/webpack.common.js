var Webpack = require("webpack");
module.exports = {
    entry: ["../src/entries/app.js"],
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: "style!css"
            }
        ]
    }
};
