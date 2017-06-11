const path = require('path');
const webpack = require('webpack');
const config = {
    entry: {
        'decent-messup': ['./index.js'],        
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            query: {
                presets: ['latest', 'stage-0'],
                plugins: []
            },
            }]
    },
    devtool: false,
    watch: true,
    output: {
        path: path.resolve(path.join(__dirname, 'dist')),
        filename: "[name].js",
        libraryTarget: 'umd',
        library:'decentMessUp'
    },
};
const test={
    entry: {
        'decent-messup': ['./playground/demo.js'],        
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: './loader',
            query: {
                headCnt:10,
                es6:true
            },
            },{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            query: {
                presets: ['latest', 'stage-0'],
                plugins: []
            },
            }]
    },
    devtool: false,
    watch: false,
    output: {
        path: path.resolve(path.join(__dirname, 'dist')),
        filename: "test.js",
    },
};
module.exports = [config,test];
