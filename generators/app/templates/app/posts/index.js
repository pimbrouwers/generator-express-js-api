const express = require('express'),	  
	  data = require('../../data.json');

module.exports = PostRouter;

function PostRouter() {
	var self = this;

	/*
	 * handlers
	 */
    
	// /posts
	function all(req, res) {
		res.status(200).json(data.posts);
	};

	// /posts/:postId
	function get(req, res, next) {
		const postId = req.params.postId * 1;
		const post = data.posts.find(t => t.id === postId);

		if(!post){
			var err = new Error('Invalid Post Id');
			err.status = 404;
			return next(err);
		}

		res.json(post);
	};

	/*
	 * routes
	 */
	self.routes = express.Router();
	self.routes.get('/', all);
	self.routes.get('/:postId', get);
};
