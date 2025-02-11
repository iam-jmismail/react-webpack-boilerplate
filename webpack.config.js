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
        port: 3000,
        hot: true,
        compress: true
    },

    module: {
        rules: [
            {
                test: /.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /.(css)$/,
                use: [
                    'style-loader', {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    }
                ]
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ],

    resolve: {
        extensions: ['.jsx', '.js']
    }

}