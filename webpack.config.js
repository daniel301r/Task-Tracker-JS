const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js'
    },
    devServer: {
		contentBase: './dist'
    },
    plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html', // this is what we want to call the file
			template: './src/index.html' // this is where to get the source code from
		}),
	]
};