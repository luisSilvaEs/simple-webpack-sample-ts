const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    entry: './src/index.ts',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: isProduction ? 'bundle.[hash].js' : 'bundle.js', // Conditional filename
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
              'style-loader', // Inject CSS into the DOM
              'css-loader',   // Translates CSS into CommonJS
              'sass-loader'   // Compiles Sass to CSS
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
};
