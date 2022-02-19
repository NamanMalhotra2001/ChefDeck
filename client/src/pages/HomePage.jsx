import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Posts from '../components/Posts';
import Sidebar from '../components/Sidebar';
import axios from 'axios';

function HomePage() {
	// ########## states ##########
	const [posts, setPosts] = useState({});

	// ########## fetch data ##########
	useEffect(() => {
		const fetchPosts = async () => {
			const res = await axios.get('http://localhost:5000/post/all');
			setPosts(res.data);
		};

		fetchPosts();
	}, []);

	return (
		<div>
			<Header />
			<div className='home-wrapper'>
				<Posts posts={posts} />
				<Sidebar />
			</div>
		</div>
	);
}

export default HomePage;
