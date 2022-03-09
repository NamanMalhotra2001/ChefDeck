const router = require('express').Router();
const Category = require('../models/Category');

// ########## get categories ##########
router.get('/', async (req, res) => {
	try {
		const categories = await Category.find().sort({ name: 1 });
		res.status(200).json(categories);
	} catch (error) {
		res.status(500).json(error);
	}
});

// ########## add category ##########
router.post('/new', async (req, res) => {
	try {
		const category = new Category(req.body);
		await category.save();
		res.status(200).json(category);
	} catch (error) {
		res.status(500).json(error);
	}
});

module.exports = router;
