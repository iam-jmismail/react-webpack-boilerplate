const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    entry: './src/index.jsx',

    output: {
        filename: 'bundle.[hash].js',
        path: path.resolve(__dirname, 'dist')
    },

    mode: 'development',

    devServer: {
        port: 3000
    },

    module: {
        rules: [
            {
                test: /.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]

}