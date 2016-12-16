'use strict';

let config = {
	module: {
		loaders: [{
			test: /.js$/,
			loader: 'babel-loader'
		}]
	}
};

// Demo basico
let basico = Object.assign({
	entry: './demos/basico/script.js',
	output: {
		path: './demos/basico/',
		filename: 'bundle.js'
	}
},config);

module.exports = [
	basico
];
