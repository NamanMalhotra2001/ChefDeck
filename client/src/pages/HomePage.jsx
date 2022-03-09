import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { axiosInstance } from '../axiosConfig';
import Header from '../components/Header';
import Posts from '../components/Posts';
import Sidebar from '../components/Sidebar';

function HomePage() {
	// ########## initial ##########
	const { search } = useLocation();
	// ########## initial ##########

	// ########## states ##########
	const [posts, setPosts] = useState({});
	// ########## states ##########

	// ########## fetch data ##########
	useEffect(() => {
		const fetchPosts = async () => {
			const res = await axiosInstance.get('post/all' + search);
			setPosts(res.data.reverse());
		};

		fetchPosts();
	}, [search]);
	// ########## fetch data ##########

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
