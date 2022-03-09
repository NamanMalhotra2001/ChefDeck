import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function NoPage() {
	// ########## initial ##########
	let navigate = useNavigate();
	let path = window.location.pathname;

	useEffect(() => {
		setTimeout(() => {
			if (path === window.location.pathname) {
				navigate(-1);
			}
		}, 5000);
	}, [navigate, path]);
	// ########## initial ##########

	return (
		<NoPageWrapper>
			<Header>404: Not Found</Header>
			<Text>Seems like you wandered off 🚀</Text>
			<p className='smltxt'>
				returning to previous page in 5 seconds
			</p>
		</NoPageWrapper>
	);
}

export default NoPage;

// ########## styled components ##########
export const Text = styled.h2`
	margin-top: 0;
	font-size: 2rem;
	text-align: center;
`;

export const Header = styled.h1`
	margin-bottom: 0;
	padding-top: 4rem;
	font-size: 5rem;
	text-align: center;
`;

export const NoPageWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	user-select: none;
	height: 10vh;

	.smltxt {
		font-size: 1.4rem;
		font-weight: bold;
		color: #ff7d7d;
		margin-top: 3rem;
		text-align: center;
	}
`;
