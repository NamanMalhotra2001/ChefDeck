const router = require('express').Router();
const Post = require('../models/Post');
const User = require('../models/User');

// ########## create new post ##########
router.post('/new', async (req, res) => {
	try {
		const user = await User.findOne({ _id: req.body.userId });
		const post = new Post(req.body);
		try {
			await post.save();
			res.status(200).json(post);
		} catch (error) {
			res.status(500).json(error);
		}
	} catch (error) {
		res.status(401).json('✋🏼🛑 Sign in first!');
	}
});

// ########## update post ##########

// ########## delete post ##########

// ########## get 1 post ##########
router.get('/find/:id', async (req, res) => {
	try {
		const post = await Post.findById(req.params.id);
		res.status(200).json(post);
	} catch (error) {
		res.status(500).json(error);
	}
});

// ########## get all posts ##########
router.get('/all', async (req, res) => {
	try {
		const query = req.query.new;
		const posts = query
			? await Post.find().sort({ createdAt: -1 }).limit(5)
			: await Post.find();

		res.status(200).json(posts);
	} catch (error) {
		res.status(500).json(error);
	}
});

module.exports = router;
