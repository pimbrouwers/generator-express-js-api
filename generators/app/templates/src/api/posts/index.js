const 
	express = require('express'),
	router = express.Router();

module.exports = router;

router
	.route('/')
	.get(function(req, res, next){
		res
			.status(200)
			.json({
				message: 'yay it worked!'				
			});
	});