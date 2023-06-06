const path = require('path');
const htmlPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.join(__dirname,"src","index.js"), // Entry point of your application
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'index.bundle.js' // Output file name
  },
  module: {
    rules: [
      // Define rules for how different types of files should be processed
      {
        test: /\.(js|jsx)$/, // Apply the rule to JavaScript files
        exclude: /node_modules/, // Exclude the 'node_modules' directory
        use: 'babel-loader' // Use the babel-loader for transpiling
      },
      {
        test: /\.css$/, // Apply the rule to CSS files
        use: ['style-loader', 'css-loader'] // Use the style-loader and css-loader for handling CSS
      }
    ]
  },

  plugins: [
      // Existing plugins...
      new htmlPlugin({
        template: './src/index.html', // Path to your HTML template file
        // Other options...
      }),
    ],
  
  // Other configuration options...
};
