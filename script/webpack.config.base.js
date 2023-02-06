/* 通用webpack配置 */

const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const baseConfig = {
    /* 配置入口 */
    entry: {
        app: path.resolve(__dirname, "../src/index.jsx")
    },
    /* 配置代码输出 */
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, "../build"),
        clean: true,
        // publicPath: '/samuel_xiangpeng',
        assetModuleFilename: 'images/[hash][ext][query]'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                loader: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.png/,
                type: 'asset/resource'
            },
            /* 所有 html 文件都将被发送到输出目录中的 static 目录中。 */
            {
                test: /\.html/,
                type: 'asset/resource',
                generator: {
                    filename: 'static/[hash][ext][query]'
                }
            },
            {
                test: /\.svg$/,
                loader: require.resolve("svg-sprite-loader"),
                include: path.resolve(__dirname, "../src/icons"), //只处理指定svg的文件(所有使用的svg文件放到该文件夹下)
                options: {
                    symbolId: "icon-[name]", //symbolId和use使用的名称对应      <use xlinkHref={"#icon-" + iconClass} />
                },
            },
            {
                test: /\.(jpg|png|gif)$/,
                use: {
                    loader: "url-loader",
                    options: {
                        name: "[name].[ext]",
                        outputPath: "images/",
                        limit: 8192,
                    },
                },
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name]_[hash].[ext]",
                        outputPath: "iconfont/",
                    },
                },
            },
            {
                test: /\.(mp4|MP4)$/,
                use: {
                    loader: "url-loader",
                    options: {
                        name: "[name].[ext]",
                        outputPath: "images/",
                        limit: 0,
                    },
                },
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
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
                test: /\.less$/i,
                use: [
                    // compiles Less to CSS
                    'style-loader',
                    'css-loader',
                    'less-loader',
                ],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "开发环境",
            template: path.resolve(__dirname, "../public/index.html")
        })
    ]
};

module.exports = baseConfig;