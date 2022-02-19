const express = require('express');
const dotenv = require('dotenv').config();
const app = express();
app.use(express.json());
const cors = require('cors');
app.use(cors());

// ########## routes ##########
const authRoute = require('./routes/auth');
app.use('/auth', authRoute);
const userRoute = require('./routes/user');
app.use('/user', userRoute);
const postRoute = require('./routes/post');
app.use('/post', postRoute);
const categoryRoute = require('./routes/category');
app.use('/categories', categoryRoute);

// ########## mongoose connection ##########
const mongoose = require('mongoose');
mongoose
	.connect(process.env.MONGO)
	.then(console.log('connected to MongoDB'))
	.catch((err) => console.log(err));

// ########## multer ##########
const multer = require('multer');
const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, 'images');
	},
	filename: (req, file, cb) => {
		cb(null, req.body.name);
	},
});

const upload = multer({ storage: storage });
app.post('/upload', upload.single('file'), (req, res) => {
	res.status(200).json('File uploaded!');
});

// ########## start server ##########
app.listen('5000', () => {
	console.log('backend is running...');
});
