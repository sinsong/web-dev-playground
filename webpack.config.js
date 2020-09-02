const MiniCssExtractPlugin   = require('mini-css-extract-plugin'); // 分离 CSS
const { CleanWebpackPlugin } = require('clean-webpack-plugin');    // 清理输出
var   HtmlWebpackPlugin      = require('html-webpack-plugin');     // Html 模板注入
const path = require('path')

module.exports = {
  entry: "./src/index.js", // 入口点，一般不改了
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  module: {
    rules: [
      // scss 样式表
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      // less 样式表
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'less-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      // 普通 css
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      // 普通文件
      {
        test: /\.(eot|svg|ttf|woff|woff2|png)\w*/,
        loader: 'file-loader'
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'html/index.html'), // 这里改为你要调教的模板
      filename: 'index.html', // 插件输出
      inject: true, // 注入资源
      hash: true
    })
  ],
  devServer:{
    // 开发服务器
    port: 8080,
    contentBase: path.join(__dirname, "dist")
  }
}