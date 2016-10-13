var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: './main.js',
    output: {
        path: './',
        filename: 'index.js'
    },
    devServer: {
        inline: true,
        port: 5555
    },
    module: {
        loaders: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel'
        },
        {
            test: /\.less$/,
            exclude: /node_modules/,
            loader: "style!css!less"
        }]
    },
    plugins: [
        new ExtractTextPlugin("style.css", {
            allChunks: true
        })
    ]
}
