const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');//Added manually


//Produced by ChatGPT when asked how to use TS with Webpack
module.exports = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[hash].js'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        include: path.resolve(__dirname, 'src/sass'),
        use: [
            'style-loader',// Inject CSS into the DOM
            'css-loader', // Translates CSS into CommonJS
            'sass-loader' // Compiles Sass to CSS
        ]
      },
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
        title: "Sample App",
        template: "src/index.html"
    })
  ]
};
