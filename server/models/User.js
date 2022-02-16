const mongoose = require('mongoose');
const userSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			unique: true,
			requied: true,
		},
		email: {
			type: String,
			unique: true,
			requied: true,
		},
		password: {
			type: String,
			requied: true,
		},
		avatar: {
			type: String,
			default: '',
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model('user', userSchema);
