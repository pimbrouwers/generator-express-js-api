const config = require('./config'),
	  Routes = require('./routes');

/*
 * services
 */
//service loads go here

/*
 * app factory
 */
const app = require('./app')
const routes = new Routes(app);

/*
 * start server
 */
app.listen(config.express.port, config.express.ip, function(err) {
	if (err) {
		console.err(err);
	}

	console.log('Express JS API listening on port ' + config.express.port);
});