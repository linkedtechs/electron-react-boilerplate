const HTMLWebpackPlugin=require('html-webpack-plugin')
path = require('path')

module.exports = {
	entry: {
		vendor: './src/main.ts',
	},
	mode: 'development',
	target: 'electron-main',
	module: {
		rules: [{
			test: /\.ts?$/,
			include: /src/,
			loader: 'ts-loader',
		}],
	},
	plugins: [
		new HTMLWebpackPlugin({template: './src/index.html'}),
	],
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
	},
};
