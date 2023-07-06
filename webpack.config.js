const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

 module.exports = {
 	mode: "production",
  entry: {
    index: './src/index.js',
  },
  devtool: "inline-source-map",
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
      	test: /\.(png|jpg|jpeg|svg|gif)$/i,
      	type: 'asset/resource',
      }
    ],
  },
 };