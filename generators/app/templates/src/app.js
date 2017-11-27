const 
	express = require('express'),
	compression = require('compression'),
	app = express(),
	config = require('./config'),
	routes = require('./routes');

/*
* middleware
*/
app.use(compression()); //gzip compression

/*
* routes
*/
app.use(routes);

/*
* error handler
*/
app.use((err, req, res, next) => {	
	res.status(err.status || 500);

	res.json({
		message: err.message,
		error: config.isProduction ? {} : err
	});
});

/*
* start server
*/
app.listen(config.express.port, config.express.ip, (err) => {
	if (err) {
		//TODO
		//replace with async logging for production
		console.err(err);
	}

	//TODO
	//remove in production
	console.log('ExpressJS API listening at: ' + config.express.ip + ':' + config.express.port);
});