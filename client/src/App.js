import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import PostPage from './pages/PostPage';
import UserAccountPage from './pages/UserAccountPage';
import WritePage from './pages/WritePage';

export default function App() {
	return (
		<>
			<Router>
				<Navbar />
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/post/:postId' element={<PostPage />} />
					<Route path='/write' element={<WritePage />} />
					<Route path='/account' element={<UserAccountPage />} />
				</Routes>
			</Router>
		</>
	);
}
