const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect(
	'mongodb+srv://Ahmed:ahmed123@cluster0.txq89.mongodb.net/test-oop?retryWrites=true&w=majority',
	(err) => {
		if (err) {
			console.log('database failed', err);
		}
		console.log('database connected');
	}
);
app.use(express.json());
const usersRoute = require('./src/modules/persons/users/routes/users.route');

app.use('/users', usersRoute);
app.listen(4000, () => {
	console.log('server running on 4000');
});
