const {resolve} = require('path');
const webpack = require('webpack');

module.exports = {
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './src/index.js',
    ],
    output: {
        filename: 'bundle.js',
        path: resolve(__dirname, 'build'),
        publicPath: '/',
    },
    devtool: 'eval',
    resolve: {
        extensions: ['.js', '.json', '.css'],
    },
    stats: {
        colors: true,
        reasons: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    'babel-loader',
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            sourceMap: true,
                            importLoaders: 1,
                            localIdentName: '[name]--[local]--[hash:base64:8]',
                        },
                    },
                    'postcss-loader', // Has separate config, see postcss.config.js
                ],
            },
        ],
    },
    devServer: {
        hot: true,
        contentBase: resolve(__dirname, 'public'),
        publicPath: '/',
        quiet: false,
        port: 3000,
        compress: true,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.LoaderOptionsPlugin({
            debug: true,
        }),
    ],
};
