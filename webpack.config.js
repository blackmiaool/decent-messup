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

module.exports = [config];
