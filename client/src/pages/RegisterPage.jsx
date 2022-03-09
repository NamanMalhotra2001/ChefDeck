import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { axiosInstance } from '../axiosConfig';

function RegisterButton() {
	// ########## initial ##########
	const navigate = useNavigate();
	// ########## initial ##########

	// ########## states ##########
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
			errorMessage:
				'Username can be 4-16 characters. (no specials!)',
			focused: false,
		},
		{
			name: 'email',
			label: 'Email',
			type: 'email',
			placeholder: 'Enter your email address',
			errorMessage: 'Should be a valid e-mail address!',
			focused: false,
		},

		{
			name: 'password',
			label: 'Password',
			type: 'password',
			placeholder: 'Choose a password',
			pattern: '^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$',
			errorMessage:
				'Minimum 8 characters with atleast one number, special and uppercase character!',
			focused: false,
		},
		{
			name: 'confirmPassword',
			label: 'Confirm Password',
			type: 'password',
			placeholder: 'Re-enter the password',
			pattern: values.password,
			errorMessage: "Passwords don't match!",
			focused: false,
		},
	];

	// ########## states ##########

	// ########## handler functions ##########
	function handleFocus() {
	}

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
			res.data && navigate('/login');
			console.log(res.data);
		} catch (error) {
			console.log(error);
		}
	};
	// ########## handler functions ##########

	return (
		<Wrapper bg={`/images/splash4.jpg`}>
			<RegisterForm onSubmit={(e) => register(e)}>
				<h1 className='header'>Register</h1>
				{inputs.map((i, k) => (
					<React.Fragment key={k}>
						<h4>{i.label}</h4>
						<Field
							onChange={(e) => handleUpdate(e)}
							required
							{...i}
						/>
						<Error>{i.errorMessage}</Error>
					</React.Fragment>
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
	color: red;
	font-size: small;
	display: none;
`;

const Field = styled.input`
	min-height: 15px;
	margin-block: 5px;
	border: none;
	outline: none;
	background-color: #d4d4d4;
	border-radius: 10px;
	padding: 10px;

	:valid {
		margin-bottom: 15px;
	}
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

	${Field}:invalid[focused="true"] ~ ${Error} {
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
