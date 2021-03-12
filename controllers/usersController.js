const Account = require("../models/account");
const passport = require('passport');

module.exports = {
	update: function (req, res) {
		console.log(req.session.passport, 'user being passed to updateUser');
		const { user } = req.session.passport
		console.log('req. body in the update!!!!!!', req.body)
		console.log(user, 'user value');

		if (user) {
			Account.findOneAndUpdate({username: user}, {$set: {Water: req.body.Water, ToDos: req.body.ToDos, Clock: req.body.Clock, Fitness: req.body.Fitness, Goals: req.body.Goals, firstTime: false } }, {new: true}, (err, userData) => {
				if (err) {
					console.log("Something wrong when updating data!");
				}
				console.log(userData, "userdata after update");
			
				return res.status(200).json(userData)
			})
		} else {
			return res.status(401).json({
				error: 'User is not authenticated',
				authenticated: false
			});
		}
	},
	getUser: function (req, res) {
		console.log(req.session.passport, 'user being passed to getUser');
		const { user } = req.session.passport
		console.log(user, 'user value');

		if (user) {
			Account.findOne({ username: user })
				.then(userData => {
					console.log(userData, "userdata");
					const { _id, username } = userData;
					userData.authenticated = true;
					return res.status(200).json(userData)
				})
		} else {
			return res.status(401).json({
				error: 'User is not authenticated',
				authenticated: false
			});
		}
	},
	register: function (req, res, next) {
		console.log('/register handler', req.body);
		//username: req.body.username
		Account.register(new Account(req.body), req.body.password, (err, account) => {
			if (err) {
				return res.status(500).send({ error: err.message });
			}

			passport.authenticate('local')(req, res, () => {
				req.session.save((err) => {
					if (err) {
						//ToDo:log the error and look for an existing user

						return next(err);
					}
					console.log('THi si the account we just made', account)

					res.json(account);
				});
			});
		});
	},
	login: function (req, res, next) {
		console.log('/login handler');
		if (!req.session.passport.user) {
			return false;
		}
		req.session.save((err) => {
			if (err) {
				return next(err);
			}
			console.log(`User at login ${req.user.username}`);

			res.status(200).json({ test: " testvalue" });
		});
	},
	logout: function (req, res, next) {
		req.logout();
		req.session.save((err) => {
			if (err) {
				return next(err);
			}
			res.status(200).send('OK');
		});
	},

	test: function (req, res, next) {
		console.log(`Ping Dinger ${req.statusCode}`);
		res.status(200).send("Dong!");
	}

};