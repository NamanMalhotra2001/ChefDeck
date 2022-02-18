const mongoose = require('mongoose');
const postSchema = new mongoose.Schema(
	{
		userId: {
			type: String,
			required: true,
		},
		owner: {
			type: String,
			required: true,
		},
		title: {
			type: String,
			unique: true,
			requied: true,
		},
		content: {
			type: String,
			requied: true,
		},
		banner: {
			type: String,
			default: '',
		},
		categories: {
			type: Array,
			requied: false,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model('post', postSchema);
