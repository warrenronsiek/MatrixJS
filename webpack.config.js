const path = require('path');
const webpack = require('webpack');
const validator = require('webpack-validator');

const paths = {
    src: path.join(__dirname, 'src'),
    dist: path.join(__dirname, 'dist'),
    nodeModules: path.join(__dirname, 'node_modules')
};

const build = {
    devtool: 'source-map',
    entry: [path.join(paths.src, 'index.ts')],
    resolve: {
        extensions: ['', '.js', '.ts']
    },
    target: 'node',
    output: {
        path: paths.dist,
        filename: 'matrix.js',
        library: 'matrix',
        libraryTarget: "umd"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: paths.nodeModules
            },
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                exclude: paths.nodeModules
            }
        ]
    },
    plugins: [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {warnings: false, drop_console: true},
            beautify: false,
            comments: false,
            mangle: {except: ['$', 'webpackJsonp'], screw_ie8: true, keep_fnames: false}
        })
    ]
};

module.exports = validator(build);
