const path = require('path');
const webpack = require('webpack');

const test={
    entry: {
        'decent-messup': ['./index.js'],        
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'decent-messup/loader',
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
module.exports = [test];
