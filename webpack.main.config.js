// const HTMLWebpackPlugin=require('html-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
path = require('path');

const eslint_check_plugin =	new ForkTsCheckerWebpackPlugin({
	reportFiles: ['src/main/*.ts', '!src/*.tsx'],
	async: true,
	eslint: true,
});

module.exports = {
	entry: {
		vendor: './src/main/main.ts',
	},
	target: 'electron-main',
	module: {
		rules: [{
			test: /\.ts?$/,
			include: [path.resolve(__dirname, "src/main/"),],
			loader: 'ts-loader',
		}],
	},
	plugins: [
		// new HTMLWebpackPlugin({template: './src/index.html'}),
		//eslint_check_plugin
	],
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
	},
};
