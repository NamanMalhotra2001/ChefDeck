const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
app.use(express.json());

const authRoute = require('./routes/auth');
app.use('/auth', authRoute);
const userRoute = require('./routes/user');
app.use('/user', userRoute);
const postRoute = require('./routes/post');
app.use('/post', postRoute);

const mongoose = require('mongoose');
mongoose
	.connect(process.env.MONGO)
	.then(console.log('connected to MongoDB'))
	.catch((err) => console.log(err));

app.listen('5000', () => {
	console.log('backend is running...');
});
