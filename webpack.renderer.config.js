const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
var ExtractTextPlugin = require('extract-text-webpack-plugin');

path = require('path');

module.exports = {
	mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
	entry: ['./src/renderer/react.tsx'],
	target: 'electron-renderer',
	devtool: 'source-map',
	module: {
		rules: [{
			test: /\.tsx?$/,
			include: [path.resolve(__dirname, "src/renderer/"),],
			use: ['ts-loader'],
		},
		{ // regular css files
			test: /\.css$/,
			include: [path.resolve(__dirname, "src/renderer/"),],
			loader: [MiniCssExtractPlugin.loader, 'css-loader'],
			// loader: ['style-loader', 'css-loader'],
		  },
		  { // sass / scss loader for webpack
			test: /\.(sass|scss)$/,
			include: [path.resolve(__dirname, "src/renderer/"),],
			loader: [MiniCssExtractPlugin.loader, 'css-loader','sass-loader']
			// loader: ['style-loader', 'css-loader','sass-loader']
		  }],
	},
	plugins: [
		new MiniCssExtractPlugin({
		 	filename: '[name].css',
		 	chunkFilename: '[id].css'
		 }),
		// new ExtractTextPlugin({ filename: 'dist/[name].bundle.css',  }),
		  new HTMLWebpackPlugin({ template: './src/index.html' }),
	],
	output: {
		filename: 'react.js',
		//path: path.resolve(__dirname, 'dist'),
	},
	resolve: {
		// specify certain file extensions to get automatically appended to imports
		// ie we can write `import 'index'` instead of `import 'index.ts'`
		extensions: ['.ts', '.tsx', '.js', '.scss'],
	},
};
