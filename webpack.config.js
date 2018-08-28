const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const SRC_DIR = path.resolve(__dirname,"src");
const DIST_DIR = path.resolve(__dirname,"dist");

const config = {
    entry: SRC_DIR + "/index.js",
    output: {
        path: DIST_DIR,
        filename: "bundle.js",
    },
    devServer: {
        historyApiFallback: true
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js?/,
                include: SRC_DIR,
                use: ["babel-loader"]
            },
            {
                test: /\.scss$/,
                use: [
                  { loader: 'style-loader' },
                  {
                    loader: 'css-loader',
                    options: {
                      modules: true
                    }
                  },
                  { loader: 'sass-loader' }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: SRC_DIR + "/index.html"
        })
    ]
};

module.exports = config;
