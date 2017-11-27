const 
	express = require('express'),
	router = express.Router(),
	posts = require('./api/posts');

module.exports = router;

router.use('/', (req, res, next) => {
	res.status(200).send("hello world!");
});

router.use('/posts', posts);

