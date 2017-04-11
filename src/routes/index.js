const cors = require('cors');

const db = require('../database');

const CRUD = {
	lessons: require('./api/lessons'),
	posts: require('./api/posts'),
 	tags: require('./api/tags'),
 	weeks: require('./api/weeks')
}

module.exports = function(app) {

	app.use('/api', require('../middleware/auth'));

	for(endpoint in CRUD) {
		app.use('/api', CRUD[endpoint]({ db }));
	}

	return app;
}