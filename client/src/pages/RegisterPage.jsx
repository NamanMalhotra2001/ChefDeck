import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { axiosInstance } from '../axiosConfig';
import Fields from '../components/Fields';

function RegisterButton() {
	// ########## initial ##########
	const navigate = useNavigate();
	// ########## initial ##########

	// ########## states ##########
	const [error, setError] = useState('');
	const [values, setValues] = useState({
		username: '',
		email: '',
		password: '',
		confirmPassword: '',
	});

	const inputs = [
		{
			name: 'username',
			label: 'Username',
			type: 'text',
			placeholder: 'Choose a username',
			autoFocus: true,
			pattern: '^[A-Za-z0-9]{4,16}$',
			errormessage:
				'Username can be 4-16 characters. (no specials!)',
		},
		{
			name: 'email',
			label: 'Email',
			type: 'email',
			placeholder: 'Enter your email address',
			errormessage: 'Should be a valid e-mail address!',
		},

		{
			name: 'password',
			label: 'Password',
			type: 'password',
			placeholder: 'Choose a password',
			pattern: '^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$',
			errormessage:
				'Minimum 8 characters with atleast one number, special and uppercase character!',
		},
		{
			name: 'confirmPassword',
			label: 'Confirm Password',
			type: 'password',
			placeholder: 'Re-enter the password',
			pattern: values.password,
			errormessage: "Passwords don't match!",
		},
	];
	// ########## states ##########

	// ########## handler functions ##########
	const handleUpdate = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};

	const register = async (e) => {
		e.preventDefault();
		try {
			const res = await axiosInstance.post('/auth/register', {
				username: values.username,
				email: values.email,
				password: values.password,
			});
			res.data && navigate('/login') && setError('');
		} catch (error) {
			setError('User exists try different credentials!');
		}
	};
	// ########## handler functions ##########

	return (
		<Wrapper bg={`/images/splash4.jpg`}>
			<RegisterForm onSubmit={(e) => register(e)}>
				<h1 className='header'>Register</h1>
				<Error visible={error !== '' ? 'true' : 'false'}>
					{error}
				</Error>
				{inputs.map((i, k) => (
					<Fields key={k} i={i} handleUpdate={handleUpdate} />
				))}
				<button className='register-button'>Register</button>
			</RegisterForm>
		</Wrapper>
	);
}

export default RegisterButton;

// ########## styled components ##########
const Error = styled.span`
	margin-bottom: 15px;
	margin-top: -10px;
	color: red;
	font-size: medium;
	text-align: center;
	display: ${(props) => (props.visible === 'true' ? 'block' : 'none')};
`;

const RegisterForm = styled.form`
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
	min-width: 400px;
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

	.register-button {
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
	}

	.field {
		min-height: 15px;
		margin-block: 5px;
		border: none;
		outline: none;
		background-color: #d4d4d4;
		border-radius: 10px;
		padding: 10px;

		:valid,
		:invalid {
			margin-bottom: 15px;
		}
	}

	.field:invalid ~ ${Error} {
		display: block;
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
