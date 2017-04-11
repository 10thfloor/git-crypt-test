
module.exports = function(req, res, next) {

	console.log('Got request, checking auth...');
	next();
}