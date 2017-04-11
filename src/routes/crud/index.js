const db = require('../../database/db');
const apiRouter = require('express').Router();

const CRUD_RESOURCES = {
	users: require('./resources/users'),
	lessons: require('./resources/lessons'),
	posts: require('./resources/posts'),
 	tags: require('./resources/tags'),
 	weeks: require('./resources/weeks')
}

module.exports = function resourceRoutes() {

	apiRouter.use(require('../../middleware/auth'));

	for(resource in CRUD_RESOURCES) {
		apiRouter.use(`/${resource}`, CRUD_RESOURCES[resource]({ db }))
	}

	return apiRouter;
}
