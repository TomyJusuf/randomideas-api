const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'production', // Set the mode to development
  entry: path.resolve(__dirname, './src/index.js'), // Update this to the correct entry point for your frontend

  output: {
    filename: 'index.js', // The name of the output file
    path: path.resolve(__dirname, '../public'), // The output directory
    // publicPath: 'index.js', // Ensure that Webpack can resolve paths correctly
    assetModuleFilename: 'fonts/[name][ext]',
    clean: true, // Cleans the output directory before each build
    publicPath: './',
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Apply this rule to .js files
        exclude: /node_modules/, // Exclude the node_modules directory
        use: {
          loader: 'babel-loader', // Use Babel to transpile JavaScript files
          options: {
            presets: ['@babel/preset-env'], // Preset to use
          },
        },
      },
      {
        test: /css\/.*\.css$/, // Apply this rule to .css files in any folder called css
        use: [MiniCssExtractPlugin.loader, 'css-loader'], // Use style-loader and css-loader
      },
      {
        test: /\.(woff|woff2|ttf|eot|otf)$/, // Apply this rule to font files
        type: 'asset/resource', // Asset module type for handling files
      },
    ],
  },
  devServer: {
    static: path.join(__dirname, '../public'), // Use 'static' instead of 'contentBase'
    compress: true, // Enable gzip compression
    port: 3000, // Port to run the server
    historyApiFallback: true, // For single-page applications
    proxy: {
      '/api': 'http://localhost:5000', // Proxy API requests to your Express server
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html'), // Path to your HTML file
      filename: 'index.html', // Output filename
      inject: 'body',
      scriptLoading: 'defer',
    }),
    new MiniCssExtractPlugin(),
  ],
}
