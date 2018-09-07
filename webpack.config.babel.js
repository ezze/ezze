import webpack from 'webpack';
import yargs from 'yargs';
import path from 'path';

import HtmlPlugin from 'html-webpack-plugin';
import htmlTemplate from 'html-webpack-template';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

import packageJson from './package';

const PORT = process.env.PORT ? process.env.PORT : 6660;

const { argv } = yargs;
const { mode } = argv;

const sassLoader = [{
    loader: 'css-loader',
    options: {
        minimize: mode === 'production',
        discardComments: {
            removeAll: true
        }
    }
}, {
    loader: 'postcss-loader',
    options: {
        sourceMap: 'inline'
    }
}, {
    loader: 'resolve-url-loader',
    options: {
        keepQuery: true
    }
}, {
    loader: 'sass-loader',
    options: {
        sourceMap: true
    }
}];

export default {
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        port: PORT
    },
    module: {
        rules: [{
            test: /\.js$/,
            include: [
                path.resolve(__dirname, 'src')
            ],
            use: {
                loader: 'babel-loader'
            }
        }, {
            test: /\.(sass|scss)$/,
            use: ExtractTextPlugin.extract({
                use: sassLoader,
                fallback: 'style-loader',
                publicPath: '../'
            }),
            include: [
                path.resolve(__dirname, 'src'),
                path.resolve(__dirname, 'node_modules/bootstrap/scss')
            ]
        },]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /node_modules/,
                    chunks: "initial",
                    name: "vendor",
                    enforce: true
                }
            }
        },
        runtimeChunk: true
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
            VERSION: JSON.stringify(packageJson.version),
            'process.env.NODE_ENV': JSON.stringify(mode),
            NODE_ENV: JSON.stringify(mode)
        }),
        new ExtractTextPlugin({
            filename: 'css/[name].' + (mode === 'development' ? '' : '[chunkhash:6].') + 'css',
            allChunks: true
        }),
        new HtmlPlugin({
            filename: path.resolve(__dirname, 'dist/index.html'),
            inject: false,
            template: htmlTemplate,
            title: 'Ezze',
            meta: [{
                'http-equiv': 'Cache-Control',
                content: 'no-cache, no-store, must-revalidate'
            }, {
                'http-equiv': 'Pragma',
                content: 'no-cache'
            }, {
                'http-equiv': 'Expires',
                content: '0'
            }],
            appMountId: 'container',
            minify: {
                collapseWhitespace: mode === 'production'
            }
        })
    ],
    performance: {
        maxEntrypointSize: 1024 * 1024
    },
    devtool: mode === 'development' ? 'source-map' : false
};