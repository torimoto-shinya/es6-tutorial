var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        app: './js/main.js',
        ratefinder: './js/ratefinder.js'
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};