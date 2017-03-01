const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const StatsPlugin = require('stats-webpack-plugin');

webpack({

    // watch: true, // Enable this in development
    stats: {
        errors: true,
        timing: true
    },
    profile: true,
    context: path.resolve('./src'),
    entry: {
        main: './app.js',
    },
    output: {
        filename: '[name].js',
        chunkFilename: "[name].js",
        path: './dist'
    },
    module: {
        rules: [
            // JS
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /(node_modules)/,

            },
            // SCSS
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({ fallback: "style-loader", use: "css-loader!sass-loader" }),
            },

        ],
    },
    devtool: "source-map",
    plugins: [
        new StatsPlugin('stats.json', {
            chunkModules: true,
            exclude: [/node_modules[\\\/]react/]
        }),
        new CopyWebpackPlugin([
            { from: './images' },
            { from: './index.html' },
            { from: './mock.json' },
        ]),
        new ExtractTextPlugin("[name].css"),
    ]

}, (err, stats) => {
    if (err || stats.hasErrors()) {
        console.log('we have errors');
        console.log(err);
    }
    console.log('Duration:', (stats.endTime - stats.startTime));
});
