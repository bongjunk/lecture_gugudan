const path = require('path');
const { webpack } = require('webpack');

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
    output: {
        filename: 'app.js',
        path: path.join(__dirname, 'dist'),
    },
};