const path = require('path');
const { webpack } = require('webpack');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');

module.exports = {
    mode: 'development', //production, development
    devtool: 'eval', // hidden-source.map
    resolve: {
        extensions: ['.jsx', '.js'],
    },

    entry: {
        app: './client',
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            options: {
                presets: [
                    ['@babel/preset-env', {
                        targets: {
                            browsers: ['> 1% in KR', 'last 2 chrome versions'], // browserslist
                        },
                        debug: true,
                    }],
                    '@babel/preset-react'
                ],
                plugins: [],
            }
        }]
    },
    plugins: [
        new LoaderOptionsPlugin({ debug: true }),
    ],
    output: {
        filename: 'app.js',
        path: path.join(__dirname, 'dist'),
    },
};