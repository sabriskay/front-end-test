var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/public');

var APP_DIR = path.resolve(__dirname, 'src/app');

var config = {
    entry: APP_DIR + '/index.js',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js',

    },
    devServer: {
        //contentBase: './src/app/',
        publicPath: 'http://localhost:8080'
    },
    module : {
        loaders : [
            {
                test: /\.scss$/,
                use: [{
                    loader: 'style-loader'
                },{
                    loader: 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]'
                },{
                    loader: 'resolve-url-loader'
                },{
                    loader: 'sass-loader'
                }]
            },
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        query: {
                            presets: ['react']
                        }

                    }
                ],
                exclude: '/node_modules/'
            }
        ]
    }
};

module.exports = config;