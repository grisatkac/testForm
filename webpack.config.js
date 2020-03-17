const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: {
        main: ['@babel/polyfill','./src/index.js']
    },
    output: {
        filename: 'main.[contenthash].js',
        path: path.resolve(__dirname, 'dist') 
    },
    resolve: {
        extensions: ['.js', '.json', '.png', '.jsx']
    },
    optimization:{
        splitChunks: {
            chunks: 'all'
        }
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './public/index.html'
        }),

        new CleanWebpackPlugin()
    ],
    devServer: {
        port: 3000
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|svg|gif|icon)$/,
                use: ['file-loader'],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            '@babel/preset-env',
                            "@babel/preset-react"
                        ],
                        plugins: [
                            '@babel/plugin-proposal-class-properties'
                        ]
                    }
                }
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react"
                        ],
                        plugins: [
                            '@babel/plugin-proposal-class-properties'
                        ]
                    }
                }
            },{
                test: /\.ts$/,
                exclude: /node_modules/,
                loader:{
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-typescript"
                        ],
                        plugins: [
                            '@babel/plugin-proposal-class-properties'
                        ]
                    }
                }
            }
        ]
    }

};