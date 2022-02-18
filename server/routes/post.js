const router = require('express').Router();
const Post = require('../models/Post');
const User = require('../models/User');

// ########## create new post ##########
router.post('/new', async (req, res) => {
	const user = await User.findById(req.body.userId);
	if (user !== null) {
		const post = new Post({ ...req.body, owner: user.username });
		try {
			await post.save();
			res.status(200).json(post);
		} catch (error) {
			res.status(500).json(error);
		}
	} else {
		res.status(401).json('✋🏼🛑 Sign in first!');
	}
});

// ########## update post ##########
router.put('/update/:id', async (req, res) => {
	try {
		const post = await Post.findById(req.params.id);
		if (post.userId === req.body.userId) {
			try {
				const updatedPost = await Post.findByIdAndUpdate(
					req.params.id,
					{
						$set: req.body,
					},
					{ new: true }
				);
				res.status(200).json(updatedPost);
			} catch (error) {
				res.status(500).json(error);
			}
		} else {
			res.status(401).json('✋🏼🛑 You can only edit your posts!');
		}
	} catch (error) {
		res.status(500).json(error);
	}
});

// ########## delete post ##########
router.delete('/delete/:id', async (req, res) => {
	const post = await Post.findById(req.params.id);
	if (post !== null) {
		if (post.userId === req.body.userId) {
			try {
				await Post.findByIdAndDelete(req.params.id);
				res.status(200).json({
					message: '✔️ Post deleted!',
					...post._doc,
				});
			} catch (error) {
				res.status(500).json(error);
			}
		} else {
			res.status(401).json('✋🏼🛑 You can only delete your posts!');
		}
	} else {
		res.status(404).json('🤭 No such post!');
	}
});

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
	const query = req.query;
	if (Object.keys(query).length !== 0) {
		try {
			let posts = await Post.find();
			if (query.category) {
				posts = await Post.find({
					categories: {
						$in: query.category,
					},
				});
			}
			if (query.new) {
				posts = posts
					.slice(-5)
					.reverse()
					.map((post) => {
						return post;
					});
			}
			if (query.username) {
				posts = posts.filter(
					(post) => post.owner === query.username
				);
			}
			res.status(200).json(posts);
		} catch (error) {
			res.status(500).json(error);
		}
	} else {
		try {
			const posts = await Post.find();
			res.status(200).json(posts);
		} catch (error) {
			res.status(500).json(error);
		}
	}
});

module.exports = router;
