import {
	FiFacebook,
	FiInstagram,
	FiSearch,
	FiTwitter,
	FiYoutube,
} from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function Navbar() {
	// ########## initial ##########
	const navigate = useNavigate();

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
				<button>About</button>
				<button>Contact</button>
				<button onClick={() => navigate('/write')}>Write</button>
				<button>Logout</button>
			</NavbarMid>

			<NavbarRight>
				<img
					src='https://picsum.photos/200'
					alt='avatar'
					onClick={() => navigate('/account')}
				/>
				<FiSearch />
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
`;

const NavbarMid = styled.div`
	flex: 3;
	gap: 10px;

	button {
		min-width: 100px;
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

	@keyframes click {
		0% {
			box-shadow: none;
		}

		50% {
			box-shadow: var(--shadow);
		}

		100% {
			box-shadow: none;
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
	height: 4vw;
	min-height: 70px;
	margin: 0 auto;
	display: flex;

	* {
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;
