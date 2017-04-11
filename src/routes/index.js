const resourceRoutes = require('./crud');
const authRoutes = require('./auth')

module.exports = function(app) {
	app.use('/api', resourceRoutes());
	app.use('/auth', authRoutes())
	return app;
}