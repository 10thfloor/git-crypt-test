require('colour');

const app = require('./routes')(require('express')());

require('dotenv').config({
	path: require('path').resolve(__dirname, (
		process.env.PRODUCTION ?
		'../.env.production' :
		'../.env.develop'
	))
});

app.listen(process.env.PORT, (err) => {
	err ? console.log(err) :
	console.log(
		`<< Express is listening on port ${process.env.PORT} >>`
		.cyan.bold
	);
});
