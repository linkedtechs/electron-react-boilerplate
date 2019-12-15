const HTMLWebpackPlugin=require('html-webpack-plugin');
path = require('path');

module.exports = {
	entry: {
		vendor: './src/react.tsx',
	},
	target: 'electron-renderer',
	devtool: 'source-map',
	module: {
		rules: [{
			test: /\.tsx?$/,
			include: /src/,
			use: [{loader: 'ts-loader'}],
		}],
	},
	plugins: [
		new HTMLWebpackPlugin({template: './src/index.html'}),
	],
	output: {
		filename: 'react.js',
		path: path.resolve(__dirname, 'dist'),
	},
};
