const resolve = require('path').resolve

require('dotenv').config({
	path: resolve(__dirname, (
		process.env.PRODUCTION ?
		'../.env.production' :
		'../.env.develop'
	))
});

console.log(process.env.TEST);