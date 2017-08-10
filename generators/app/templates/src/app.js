const 
	express = require('express'),
	app = express(),
	config = require('./config'),
	routes = require('./routes');

/*
 * service singletons
 */


/*
 * routes
 */
app.use(routes);

/*
 * error handler
 */
app.use(function (err, req, res, next) {	
	res.status(err.status || 500);

	res.json({
		message: err.message,
		error: config.isProduction ? {} : err
	});
});

/*
 * start server
 */
app.listen(config.express.port, config.express.ip, function(err) {
	if (err) {
		console.err(err);
	}

	console.log('ExpressJS API listening on port ' + config.express.port);
});