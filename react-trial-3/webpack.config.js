﻿var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
    //entry: path.resolve(APP_DIR, '/index.jsx'),
    entry: APP_DIR + '/index.jsx',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
          {
              test: /\.jsx?/,
              include: APP_DIR,
              loader: 'babel'
          }
        ]
        //loaders: [
        //  {
        //      test: /\.tsx?/,
        //      include: APP_DIR,
        //      loader: 'babel'
        //  }
        //]
    }
};

module.exports = config;