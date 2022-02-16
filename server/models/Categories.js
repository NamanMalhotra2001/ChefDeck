const mongoose = require('mongoose');
const postSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			requied: true,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model('user', userSchema);
