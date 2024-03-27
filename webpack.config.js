const path = require("path");
const removeEmptyScriptsPlugin = require("webpack-remove-empty-scripts");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpackConfig = require("@wordpress/scripts/config/webpack.config");

module.exports = {
  ...webpackConfig,
  ...{
    mode: "production",
    devServer: {
      static: {
        directory: path.join(__dirname, "assets"),
      },
      client: {
        overlay: false,
      },
      liveReload: false,
      hot: false,
      compress: true,
      devMiddleware: {
        writeToDisk: true,
      },
    },
    context: path.resolve(__dirname, "assets"),
    entry: ["./main.js", "./main.scss", "./custom.scss", "./custom.ts"],
    // jQuery support
    externals: {
      jquery: "jQuery",
    },
    plugins: [
      ...webpackConfig.plugins,
      new CleanWebpackPlugin(),
      new removeEmptyScriptsPlugin({
        stage: removeEmptyScriptsPlugin.STAGE_AFTER_PROCESS_PLUGINS,
      }),
      new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css",
      }),
    ],
    module: {
      rules: [
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            MiniCssExtractPlugin.loader,
            "css-loader",
            "postcss-loader",
            "sass-loader",
          ],
        },
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
      ],
    },
    devtool: "source-map",
    resolve: {
      extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
    },
  },
};
