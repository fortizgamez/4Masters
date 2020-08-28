const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'bundle.min.js',
        path: __dirname + '/dist'
    },
    devtool: 'eval-source-map',
    plugins: [
        new HtmlWebpackPlugin({template: './index.html'}),
        new MiniCSSExtractPlugin(),
        new FaviconsWebpackPlugin({
            logo: './src/img/favicon.png',
            cache: true,
            publicPath: 'img/',
            outputPath: '/img/favicon',
            prefix: 'favicon/'
        })
    ],
    module: {
        rules: [
            { 
                test: /\.s[ac]ss$/i,
                use: [
                    // Extract CSS from JS to place in other file
                    MiniCSSExtractPlugin.loader,
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ]
            },
            {
                // Transforms files into base64 URIs
                test: /\.(eot|woff|ttf)$/,
                loader: 'url-loader'
            },
            {
                // The file-loader resolves import/require() on a file into a url and emits the file into the output directory.
                test: /\.(png|jpg|svg)$/,
                loader: 'file-loader',
                options: {                    
                    name: '[name].[ext]',
                    outputPath: 'img'
                }
            },
            {
                // Every local <img src="image.png"> turn to (require('./image.png'))
                test: /\.(html)$/,
                loader: 'html-loader'
            },
            {
                // Transpile Javascript code
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
              }
        ]
    }
};