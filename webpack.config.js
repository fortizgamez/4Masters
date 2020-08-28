const HtmlWebpackPlugin =  require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'bundle.min.js',
        path: __dirname + '/dist'
    },
    devtool: 'eval-source-map',
    plugins: [
        new HtmlWebpackPlugin({template: './index.html'}),
        new MiniCSSExtractPlugin()
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
                test: /\.(png|jpg|svg|eot|woff|ttf)$/,
                loaders: [
                    // Transforms files into base64 URIs
                    'url-loader'
                ]
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    // Transpile Javascript code
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
              }
        ]
    }
};