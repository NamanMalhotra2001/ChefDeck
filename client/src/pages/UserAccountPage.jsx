import styled from 'styled-components';

function UserAccountPage() {
	return (
		<Wrapper>
			<span className='container'>
				<img src='https://picsum.photos/500' alt='' />

				<Form>
					<h2>Username</h2>
					<input type='text' className='field' />

					<h2>E-mail</h2>
					<input type='text' className='field' />

					<h2>Password</h2>
					<input type='password' className='field' />
					<button>Update</button>
				</Form>
			</span>

			<span className='about'>
				<h2>About</h2>
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing
					elit. Ex aspernatur fugit recusandae distinctio sed,
					veritatis in eius aliquid molestias fuga perspiciatis
					nulla sint, temporibus quis mollitia. Quo quos ab
					quaerat.
				</p>
			</span>
		</Wrapper>
	);
}

export default UserAccountPage;

// ########## styled components ##########
const Form = styled.form`
	display: flex;
	flex-direction: column;
	width: 30vw;

	h2 {
		margin: 0;
	}

	.field {
		flex: 5;
		outline: none;
		border: none;
		border-radius: 10px;
		width: 90%;
		margin: 20px 0;
		padding: 20px;
		font-family: var(--font4);
		font-size: larger;
		font-weight: bold;
		background-color: #7777772b;
	}

	button {
		align-self: center;
		width: 40%;
		min-width: fit-content;
		cursor: pointer;
		flex: 1;
		margin-block: 20px;
		border-radius: 10px;
		border: none;
		outline: none;
		font-family: var(--font2);
		font-size: xx-large;
		background-color: antiquewhite;

		:hover,
		:focus {
			box-shadow: var(--shadow-sm);
		}

		:active {
			box-shadow: none;
		}
	}
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding-inline: 3vw;
	width: 80%;

	.container {
		display: flex;
		gap: 4rem;
	}

	.about {
		display: flex;
		width: 50%;
		flex-direction: column;
	}

	img {
		border-radius: 50%;
		border: 1px solid black;
		height: 300px;
		width: 300px;
		object-fit: cover;
	}

	p {
		margin: 0;
		font-size: large;
		max-height: 250px;
		overflow: auto;
	}
`;
