const User = require('../services/users.services');

const instance = (req, res, next) => {
	const user = new User(req, res);
	req.instance_user = user;
	next();
};

module.exports = instance;
