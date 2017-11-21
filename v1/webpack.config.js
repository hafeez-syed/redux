module.exports = {
	entry: './js/main.js',
	output: {
		filename: './dist/bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'stage-2', 'react']
				}
			},
			{
				test: /\.css$/,
				loader: [ 'style-loader', 'css-loader' ]
			}
		]
	}
};