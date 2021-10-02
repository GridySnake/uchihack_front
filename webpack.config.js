const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpack = require("webpack");
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    entry:{
        app: path.join(__dirname, 'src', 'index.js')
    },

    devServer: {
        port:8080,
        contentBase: './dist',
        hot: true,
        historyApiFallback: true
    },
    mode: 'production',
    optimization: {
        minimizer: [new TerserPlugin({
            test: /\.js(\?.*)?$/i,
        })],
    },
    // devtool: 'inline-source-map',
    devtool: 'source-map',

    resolve: {
        extensions: [".js", ".json"],
    },
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.min.js'
    },
    module: {
        rules: [

            {
                test: /\.js?$/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                exclude: /node_modules/,
                loader: 'file-loader',
                options: {
                    limit: 10000,
                    name: '[hash]-[name].[ext]',
                },
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            alwaysWriteToDisk: true,
        }),
    ]
};

