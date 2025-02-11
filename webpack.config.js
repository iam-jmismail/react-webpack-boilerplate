const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    entry: './src/index.js',

    output: {
        filename: 'bundle.[hash].js',
        path: path.resolve(__dirname, 'dist')
    },

    mode: 'development',

    devServer: {
        port: 3000
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]

}