const express = require('express');

module.exports = Routes;

function Routes(app, azureTableClient) {
	/*
	 * routers
	 */
	const postRouter = new (require('./posts'))();
	
	/*
	 * routes
	 */
	app.use('/posts', postRouter.routes);
	
	/*
	 * errors
	 */
	app.use(require('./errors/not-found'));
	app.use(require('./errors/server-error'));

	// If no route is matched by now, it must be a 404
	app.use(function(req, res) {
	    res.status(404).send('Not Found');
	});

};
