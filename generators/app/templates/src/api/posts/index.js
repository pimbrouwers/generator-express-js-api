const 
	express = require('express'),
	router = express.Router();

module.exports = router;

router
	.route('/')
	.get((req, res, next) => {
		res.status(200).json({
			message: 'yay it worked!'				
		});
	});