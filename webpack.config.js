'use strict';

// Webpack
const webpack = require('webpack');
const path = require('path');

// Plugin Setup
const globalsPlugin = new webpack.DefinePlugin({
    '__DEV__': JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true')),
    'process.env': {'NODE_ENV': JSON.stringify('development')},
});

let libraryName = 'uportconnect';

// Final Config
module.exports = {
    mode: 'development',
    target: 'web',
    entry: {'uport-connect': './src/index.js',
        'uport-connect-core': './src/indexCore.js',
        'web3': './node_modules/web3'},
    output: {
        filename: '../public/javascripts/uport/[name].js',
        library: libraryName,
        libraryTarget: 'umd',
        umdNamedDefine: true,
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
            },
        ],
    },
    node: {
        console: false,
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
    },
    resolve: {
        modules: ['./src', 'node_modules'],
        extensions: ['.js', '.json'],
    },
    plugins: [
        globalsPlugin,
        // new webpack.SourceMapDevToolPlugin({
        //   filename: outputFile + '.map',
        //   append: false,
        //   module: true,
        //   columns: true,
        //   lineToLine: true
        // })

    ],
};
