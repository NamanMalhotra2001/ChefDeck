import styled from 'styled-components';

function Header() {
	return (
		<Wrapper>
			<span>ChefDeck</span>
			<img src='/images/splash2.jpg' alt='splash' />
		</Wrapper>
	);
}

export default Header;

// ########## styled components ##########
const Wrapper = styled.div`
	user-select: none;
	position: relative;
	margin-top: 7rem;
	display: flex;
	flex-direction: column;
	align-items: center;

	img {
		width: 100%;
		height: 60vh;
		object-fit: cover;
	}

	span {
		color: var(--olive);
		position: absolute;
		top: -5.8rem;
		padding: 0 2rem;
		font-size: 6rem;
		font-family: var(--font5);
		font-weight: normal;
		text-decoration: underline 0.3rem;
	}
`;
