function notFound(err, req, res, next) {
	if(err.status !== 404)
		return next();

	res.send(err.message || 'Not found');
};

module.exports = notFound;