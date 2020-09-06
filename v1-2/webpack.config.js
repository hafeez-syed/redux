module.exports = {
	entry: './js/index.js',
	output: {
		filename: './dist/bundle.js'
	},
	resolve: {
		extensions: ['*', '.ts', '.tsx', '.js', '.jsx', '.json']
	},
	module: {
		rules: [
			{ test: /\.(js|jsx)$/, loader: ['babel-loader'], exclude: /node_modules/, enforce: 'pre' },
			{
				test: /\.css$/,
				use: [ 'style-loader', 'css-loader' ]
			}
		]
	},
	mode: 'development'
};