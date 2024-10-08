const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development', // Set the mode to development
  entry: './src/index.js', // Update this to the correct entry point for your frontend

  output: {
    filename: 'index.js', // The name of the output file
    path: path.resolve(__dirname, 'dist'), // The output directory
    // publicPath: 'index.js', // Ensure that Webpack can resolve paths correctly
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
    ],
  },
  devServer: {
    static: path.join(__dirname, 'dist'), // Use 'static' instead of 'contentBase'
    compress: true, // Enable gzip compression
    port: 3000, // Port to run the server
    historyApiFallback: true, // For single-page applications
    proxy: {
      '/api': 'http://localhost:5000', // Proxy API requests to your Express server
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Path to your HTML file
      filename: 'index.html', // Output filename
      inject: 'body',
      scriptLoading: 'defer',
    }),
  ],
}
