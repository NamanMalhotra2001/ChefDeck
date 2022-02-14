import styled from 'styled-components';

function Sidebar() {
	return (
		<Wrapper>
			<h2>ABOUT ME</h2>
			<img src='/images/splash.jpg' alt='pic' />
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Repudiandae magnam ex fuga rem cupiditate officiis nemo
				similique, nostrum deleniti mollitia labore placeat aut
				ducimus incidunt veniam vero accusamus iure ipsam.
			</p>
			<h2>CUISINES</h2>
			<div className='cuisine-container'>
				<span>Chinese</span>
				<span>Indian</span>
				<span>Italian</span>
				<span>Korean</span>
				<span>American</span>
				<span>Japanese</span>
			</div>
		</Wrapper>
	);
}

export default Sidebar;

// ########## styled components ##########
const Wrapper = styled.div`
	user-select: none;
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;

	img {
		width: 15vw;
		height: 15vw;
		border-radius: 10px;
		object-fit: cover;
	}

	h2 {
		padding-block: 1vh;
		width: 50%;
		border-top: solid 1px var(--olive);
		border-bottom: solid 1px var(--olive);
		font-family: var(--font4);
	}

	p {
		width: 80%;
	}

	.cuisine-container {
		padding-block: 2vh;
		display: flex;
		flex-wrap: wrap;
		row-gap: 2vh;

		span {
			width: 50%;
		}
	}
`;
