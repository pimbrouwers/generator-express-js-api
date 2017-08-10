const 
	express = require('express'),
	router = express.Router(),
	posts = require('./api/posts');

module.exports = router;

router.use('/posts', posts);


