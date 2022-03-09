const router = require('express').Router();
const User = require('../models/User');
const Post = require('../models/Post');
const bcrypt = require('bcrypt');

// ########## update user ##########
router.put('/update/:id', async (req, res) => {
	if (req.body.userId === req.params.id) {
		if (req.body.password) {
			const salt = await bcrypt.genSalt(10);
			req.body.password = await bcrypt.hash(req.body.password, salt);
		}
		try {
			const updatedUser = await User.findByIdAndUpdate(
				req.params.id,
				{
					$set: req.body,
				},
				{ new: true }
			);
			res.status(200).json(updatedUser);
		} catch (error) {
			res.status(500).json(error);
		}
	} else {
		res.status(401).json('✋🏼🛑 You can only update your account.');
	}
});

// ########## delete user ##########
router.delete('/delete/:id', async (req, res) => {
	if (req.body.userId === req.params.id) {
		const user = await User.findById(req.params.id);
		if (!user) {
			res.status(404).json('🤭 User not found!');
		} else {
			try {
				await Post.deleteMany({ userId: req.params.id });
				await User.findByIdAndDelete(req.params.id);
				res.status(200).json('✔️ User deleted!');
			} catch (error) {
				res.status(500).json(error);
			}
		}
	} else {
		res.status(401).json('✋🏼🛑 You can only delete your account');
	}
});

// ########## get 1 user ##########
router.get('/find/:id', async (req, res) => {
	try {
		const user = await User.findById(req.params.id);
		if (!user) {
			res.status(404).json('🤭 User not found!');
		} else res.status(200).json(user);
	} catch (error) {
		res.status(500).json(error);
	}
});

// ########## get all users ##########
router.get('/all', async (req, res) => {
	try {
		const query = req.query.new;
		const users = query
			? await User.find().sort({ createdAt: -1 }).limit(5)
			: await User.find();

		const safe_users = users.map((user) => {
			const { password, ...safe_user } = user._doc;
			return safe_user;
		});

		res.status(200).json(safe_users);
	} catch (error) {
		res.status(500).json(error);
	}
});

module.exports = router;
