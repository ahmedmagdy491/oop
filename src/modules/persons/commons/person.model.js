const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'name is required'],
	},
	role: {
		type: String,
		enum: ['admin', 'user'],
		required: [true, 'role is required'],
	},
});

const PersonModel = mongoose.model('Person', personSchema);

module.exports = PersonModel;
