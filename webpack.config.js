const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const srcDir = 'src';
module.exports = {
  entry: path.resolve(__dirname, srcDir, 'index.jsx'),
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.css', '.jsx', '.js', '.json'],
    alias: {
      FoodCards: path.resolve(__dirname, 'src/assets/food-cards'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        include: /src/,
        exclude: [/node_modules/],
        use: [
          'babel-loader',
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.(pdf|jpg|png|gif|svg|ico)$/,
        exclude: /node_modules/,
        use: [

          {
            loader: 'file-loader',
          },
          {
            loader: 'image-webpack-loader',
            options: {
              disable: true, // webpack@2.x and newer
            },
          },
        ],
      },
    ],
  },
  plugins: [    
    new HtmlWebPackPlugin({
    template: path.resolve(srcDir, 'index.html'),
    filename: './index.html',
  }),]
};
