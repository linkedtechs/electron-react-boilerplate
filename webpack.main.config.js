//const HTMLWebpackPlugin = require('html-webpack-plugin');
path = require('path');

module.exports = {
	mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
	entry: { main: `./src/main/app.ts` },
	resolve: {
		extensions: ['.ts'],
		modules: ['node_modules'],
	},
	target: 'electron-main',
	module: {
		rules: [{
			test: /\.ts?$/,
			include: /src/,
			loader: 'ts-loader',
		},
		{
			test: /\.(jpe?g|png|gif|svg)$/i,
			include: '/src/assets/images/',
			/* Exclude fonts while working with images, */
			exclude: path.resolve(__dirname, '../src/assets/fonts'),
			use: [{
				loader: 'file-loader',
				options: {
					name: '[name].[ext]',
					outputPath: 'dist/images/',
				},
			}],
		},
		{
			test: /\.(woff(2)?|ttf|eot|svg|otf)(\?v=\d+\.\d+\.\d+)?$/,
			/* Exclude images while working with fonts, */
			exclude: path.resolve(__dirname, '../src/assets/images'),
			use: [{
				loader: 'file-loader',
				options: {
					name: '[name].[ext]',
					outputPath: 'fonts/',
				},
			}],
		}],
	},
	node: {
		__dirname: false,
		__filename: false,
	},
	plugins: [
		//new HTMLWebpackPlugin({ template: './src/index.html' }),
	],
	output: {
		filename: 'app.js',
		//path: path.resolve(__dirname, 'dist'),
	},
};
