
const { mode } = require('webpack-nano/argv');
const {MiniHtmlWebpackPlugin} = require('mini-html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode,
    entry: {
        gem: './fore/drivers/browser/gem.mjs',
    },
    output: {
        assetModuleFilename: '[name][ext]',
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new MiniHtmlWebpackPlugin({
            context: {
                title: 'Gem',
                head: '<link rel="shortcut icon" href="logo.png"/>',
            },
        }),
    ],
    module: {
        rules: [
            {test: /\.css$/, use: [MiniCssExtractPlugin.loader, "css-loader"]},
            {test: /\.(png|jpg|gif|ico)$/, type: 'asset/resource'},
        ],
    },
};

