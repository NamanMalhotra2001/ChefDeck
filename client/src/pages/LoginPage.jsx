import { useContext, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { axiosInstance } from '../axiosConfig';
import { Context } from '../context/Context';

function LoginPage() {
	// ########## iniital ##########
	const navigate = useNavigate();
	const [errorMessage, setErrorMessage] = useState(false);
	// ########## iniital ##########

	// ########## context ##########
	const userRef = useRef();
	const passwordRef = useRef();
	const { dispatch, isFetching } = useContext(Context);
	// ########## context ##########

	// ########## handler functions ##########
	const login = async (e) => {
		e.preventDefault();
		dispatch({ type: 'LOGIN_START' });
		try {
			const res = await axiosInstance.post('/auth/login', {
				username: userRef.current.value,
				password: passwordRef.current.value,
			});
			res &&
				setTimeout(() => {
					navigate('/');
				}, 10) &&
				dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
		} catch (error) {
			dispatch({ type: 'LOGIN_FAILURE' });
			setErrorMessage(true);
			setTimeout(() => {
				setErrorMessage(false);
			}, 3000);
		}
	};
	// ########## handler functions ##########

	return (
		<Wrapper bg={`/images/splash5.jpg`}>
			<LoginForm onSubmit={(e) => login(e)}>
				<h1 className='header'>Login</h1>
				<h4>Username</h4>
				<input
					className='field'
					placeholder='John Doe'
					ref={userRef}
					required
					autoFocus
				/>
				<h4>Password</h4>
				<input
					className='field'
					type='password'
					placeholder='Enter your password'
					ref={passwordRef}
					required
				/>
				<span className='error' visible={errorMessage.toString()}>
					Wrong credentials. Please try again!
				</span>
				<button className='login-button' disabled={isFetching}>
					Login
				</button>
			</LoginForm>
		</Wrapper>
	);
}

export default LoginPage;

// ########## styled components ##########
const LoginForm = styled.form`
	transform: scale(1.2);
	position: relative;
	box-sizing: border-box;
	box-shadow: var(--shadow-bl);
	border-radius: 20px;
	background-color: white;
	padding: 30px;
	display: flex;
	flex-direction: column;
	overflow: auto;

	width: 22vw;
	min-width: 300px;
	max-height: 75vh;

	@media only screen and (max-width: 800px) {
		width: 70vw;
		min-width: 220px;
	}

	.header {
		text-align: center;
		font-family: var(--font5);
		font-size: 3rem;
		color: var(--olive);
		overflow: visible;
		margin-bottom: 5%;
	}

	.field {
		min-height: 15px;
		margin-top: 10px;
		margin-bottom: 20px;
		border: none;
		outline: none;
		background-color: #d4d4d4;
		border-radius: 10px;
		padding: 10px;
	}

	.error {
		user-select: none;
		color: ${(props) =>
			props.children[5].props.visible === 'false' ? 'white' : 'red'};
		text-align: center;
		width: 100%;
	}

	.login-button {
		user-select: none;
		min-height: 40px;
		margin-top: 20%;
		background-color: #d4d4d4;
		cursor: pointer;
		align-self: center;
		padding: 10px 30px;
		border-radius: 10px;
		border: none;
		outline: none;

		:hover,
		:focus {
			box-shadow: var(--shadow-sm);
		}

		:disabled {
			opacity: 0.1;
		}
	}
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	height: calc(100vh - 70px);

	display: flex;
	align-items: center;
	justify-content: center;

	background: linear-gradient(
			rgba(255, 255, 255, 0.4),
			rgba(255, 255, 255, 0.4)
		),
		url(${(props) => props.bg});
	background-size: cover;
`;
