const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ErrorOverlayPlugin = require("error-overlay-webpack-plugin");
const autoprefixer = require("autoprefixer");

const API_URL = {
    production: JSON.stringify("https://farmstock.in/api/v1/"),
    development: JSON.stringify("https://dev.farmstock.in/api/v1/"),
};

const BASE_URL = {
    production: JSON.stringify("https://farmstock.in"),
    development: JSON.stringify("https://dev.farmstock.in"),
};

const environment =
    process.env.NODE_ENV === "production" ? "production" : "development";
console.log(process.env.NODE_ENV);
console.log(API_URL[environment]);
module.exports = {
    entry: ["react-hot-loader/patch", "./src/index"],
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "bundle.js",
        publicPath: "/",
    },
    devServer: {
        historyApiFallback: true,
        disableHostCheck: true,
    },
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader", "postcss-loader"],
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "postcss-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.(jpg|jpeg|png|woff|woff2|gif|eot|ttf|svg)$/,
                use: "url-loader",
            },
        ],
    },
    plugins: [
        new webpack.DefinePlugin({
            API_URL: API_URL[environment],
            BASE_URL: BASE_URL[environment],
            ENVIRONMENT: environment,
        }),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html",
        }),
        new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /en/),
        new ErrorOverlayPlugin(),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [autoprefixer()],
            },
        }),
    ],
    devtool: "cheap-module-source-map",
    optimization: {
        runtimeChunk: "single",
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    chunks: "all",
                },
            },
        },
    },
};
