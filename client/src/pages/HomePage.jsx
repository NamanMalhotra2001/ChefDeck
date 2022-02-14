import React from 'react';
import Header from '../components/Header';
import Posts from '../components/Posts';
import Sidebar from '../components/Sidebar';

function HomePage() {
	return (
		<div>
			<Header />
			<div className='home-wrapper'>
				<Posts />
				<Sidebar />
			</div>
		</div>
	);
}

export default HomePage;
