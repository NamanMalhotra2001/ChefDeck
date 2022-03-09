import { useContext } from 'react';
import {
	FiFacebook,
	FiInstagram,
	FiSearch,
	FiTwitter,
	FiYoutube,
} from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Context } from '../context/Context';

function Navbar() {
	// ########## initial ##########
	const navigate = useNavigate();
	const { user, dispatch } = useContext(Context);
	// ########## initial ##########

	// ########## handler functions ##########
	function handleLogout() {
		dispatch({ type: 'LOGOUT' });
	}
	// ########## handler functions ##########

	return (
		<Wrapper>
			<NavbarLeft className='highlight'>
				<FiInstagram />
				<FiFacebook />
				<FiYoutube />
				<FiTwitter />
			</NavbarLeft>

			<NavbarMid>
				<button onClick={() => navigate('/')}>Home</button>
				<button>Contact</button>
				{user ? (
					<>
						<button onClick={() => navigate('/write')}>
							Write
						</button>
						<button
							onClick={() => {
								handleLogout();
								navigate('/');
							}}
						>
							Logout
						</button>
					</>
				) : (
					<></>
				)}
			</NavbarMid>

			<NavbarRight>
				{user ? (
					<>
						<img
							src='https://picsum.photos/200'
							alt='avatar'
							onClick={() => navigate('/account')}
						/>
						<FiSearch />
					</>
				) : (
					<>
						<button onClick={() => navigate('/login')}>
							Login
						</button>
						<button onClick={() => navigate('/register')}>
							Register
						</button>
					</>
				)}
			</NavbarRight>
		</Wrapper>
	);
}

export default Navbar;

// ########## styled components ##########
const NavbarRight = styled.div`
	flex: 1;
	gap: 1rem;
	font-size: x-large;

	img {
		width: 3rem;
		border-radius: 50%;
	}

	* {
		cursor: pointer;
	}

	button {
		min-width: 100px;
		width: 10%;
		border: none;
		border-radius: 5px;
		outline: none;
		padding-top: 5px;
		background-color: white;
		font-size: x-large;
		font-family: var(--font4);
		cursor: pointer;

		:focus,
		:hover {
			color: var(--cheese);
		}
	}
`;

const NavbarMid = styled.div`
	flex: 3;
	gap: 10px;

	button {
		flex: 1;
		width: 10%;
		border: none;
		border-radius: 5px;
		outline: none;
		padding-top: 5px;
		background-color: white;
		font-size: xx-large;
		font-family: var(--font2);
		cursor: pointer;

		:focus {
			animation: click 0.6s;
		}
	}
`;

const NavbarLeft = styled.div`
	color: var(--olive);
	flex: 1;
	font-size: x-large;

	* {
		cursor: pointer;
		padding: 10px;
	}
`;

const Wrapper = styled.div`
	z-index: 999;
	background-color: white;
	user-select: none;
	position: sticky;
	top: 0;
	height: 70px;
	margin: 0 auto;
	display: flex;

	* {
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;
