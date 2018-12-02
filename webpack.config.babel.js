import webpack from 'webpack';
import path from 'path';

import HtmlPlugin from 'html-webpack-plugin';
import htmlTemplate from 'html-webpack-template';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

import packageJson from './package';

const port = process.env.PORT ? process.env.PORT : 6660;

export default (env, argv) => {
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

    return {
        devServer: {
            contentBase: path.resolve(__dirname, 'dist'),
            port
        },
        context: path.resolve(__dirname, 'src'),
        entry: {
            index: ['@babel/polyfill', './index.js']
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'js/[name].' + (mode === 'development' ? '' : '[chunkhash:6].') + 'js'
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
            }, {
                test: /\.(eot|svg|ttf|woff2?)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: 'fonts/[1].[hash:6].[ext]',
                        regExp: /([^./]+)\.[^.]+$/
                    }
                },
                include: [
                    path.resolve(__dirname, 'src/fonts')
                ]
            }, {
                test: /\.(jpg|png)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: 'img/[1].[hash:6].[ext]',
                        regExp: /([^./]+)\.[^.]+$/
                    }
                },
                include: [
                    path.resolve(__dirname, 'src/img')
                ]
            }, {
                test: /\.gltf$/,
                use: {
                    loader: 'gltf-loader-2',
                    options: {
                        name: 'gltf/[1].[hash:6].[ext]',
                        regExp: /([^./]+)\.[^.]+$/
                    }
                },
                include: [
                    path.resolve(__dirname, 'src/gltf')
                ]
            }, {
                test: /\.(jpg|png|bin)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: 'gltf/[1].[hash:6].[ext]',
                        regExp: /([^./]+)\.[^.]+$/
                    }
                },
                include: [
                    path.resolve(__dirname, 'src/gltf')
                ]
            }]
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
        performance: {
            maxEntrypointSize: 2 * 1024 * 1024,
            maxAssetSize: 2 * 1024 * 1024
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
                title: packageJson.description,
                meta: [{
                    name: 'viewport',
                    content: 'width=device-width,initial-scale=1,shrink-to-fit=no'
                }, {
                    'http-equiv': 'Cache-Control',
                    content: 'no-cache, no-store, must-revalidate'
                }, {
                    'http-equiv': 'Pragma',
                    content: 'no-cache'
                }, {
                    'http-equiv': 'Expires',
                    content: '0'
                }],
                appMountId: 'root',
                minify: {
                    collapseWhitespace: mode === 'production'
                }
            })
        ],
        devtool: mode === 'development' ? 'source-map' : false
    };
};
