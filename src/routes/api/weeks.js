const resource = require('resource-router-middleware');

module.exports = ({ db }) => resource({

	mergeParams: true,

	/** Property name to store preloaded entity on `request`. */
	id : 'week',

	/** For requests with an `id`, you can auto-load the entity.
	 *	Errors terminate the request, success sets `req[id] = data`.
	 */
	load : function(req, id, callback) {

	},

	/** GET / - List all entities */
	list : function(req, res) {

	},

	/** POST / - Create a new entity */
	create : function(req, res) {

	},

	/** GET /:id - Return a given entity */
	read : function(req, res) {

	},

	/** PUT /:id - Update a given entity */
	update : function(req, res) {

	},

	/** DELETE /:id - Delete a given entity */
	delete : function(req, res) {

	}
});