import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import NoPage from './pages/NoPage';
import PostPage from './pages/PostPage';
import UserAccountPage from './pages/UserAccountPage';
import WritePage from './pages/WritePage';

export default function App() {
	return (
		<>
			<Router>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path='/' element={<HomePage />} />
						<Route
							path='/post/:postId'
							element={<PostPage />}
						/>
						<Route path='/write' element={<WritePage />} />
						<Route
							path='/account'
							element={<UserAccountPage />}
						/>
						<Route path='*' element={<NoPage />} />
					</Routes>
				</ScrollToTop>
			</Router>
		</>
	);
}
