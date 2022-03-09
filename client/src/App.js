import { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import { Context } from './context/Context';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import NoPage from './pages/NoPage';
import PostPage from './pages/PostPage';
import RegisterPage from './pages/RegisterPage';
import UserAccountPage from './pages/UserAccountPage';
import WritePage from './pages/WritePage';

export default function App() {
	// ########## initial ##########
	const { user } = useContext(Context);
	// ########## initial ##########

	return (
		<>
			<Router>
				<ScrollToTop>
					<Navbar />
					<Routes>
						{!user ? (
							<>
								<Route
									path='/login'
									element={<LoginPage />}
								/>
								<Route
									path='/register'
									element={<RegisterPage />}
								/>
							</>
						) : (
							<>
								<Route
									path='/write'
									element={<WritePage />}
								/>
								<Route
									path='/account'
									element={<UserAccountPage />}
								/>
							</>
						)}

						<Route path='/' element={<HomePage />} />
						<Route
							path='/post/:postId'
							element={<PostPage />}
						/>
						<Route path='*' element={<NoPage />} />
					</Routes>
				</ScrollToTop>
			</Router>
		</>
	);
}
