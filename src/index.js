require('colour');
require('dotenv').config({
	path: require('path').resolve(__dirname, (
		process.env.PRODUCTION ?
		'../.env.production' :
		'../.env.develop'
	))
});

const app = require('./routes')(require('express')());
const morgan = require('morgan');

if(!process.env.PRODUCTION) {
	app.use(morgan('dev'));
}

app.listen(process.env.PORT, (err) => {
	err ? console.log(err) :
	console.log(
		`<< Express is listening on port ${process.env.PORT} >>`
		.cyan.bold
	);
});
