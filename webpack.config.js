const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, "examples/src/index.html"),
    filename: "./index.html"



module.exports = {
	entry: path.join(__dirname, "examples/src/index.js"),

	module: {
	  rules: [
		{
		  test: /\.s[ac]ss$/i,
		  use: [
			// Creates `style` nodes from JS strings
			"style-loader",
			// Translates CSS into CommonJS
			"css-loader",
			// Compiles Sass to CSS
			"sass-loader",
		  ],
		},
	  ],
	},
	plugins: [htmlWebpackPlugin],
    resolve: {
        extensions: [".js", ".jsx"]
    },
    devServer: {
        port: 3000
    }
  };
  
  