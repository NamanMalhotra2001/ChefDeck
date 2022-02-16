const mongoose = require('mongoose');
const postSchema = new mongoose.Schema(
	{
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
		userId: {
			type: String,
			required: true,
		},
		categories: {
			type: Array,
			requied: false,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model('post', postSchema);
