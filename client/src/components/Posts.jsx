import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function Posts() {
	const navigate = useNavigate();

	return (
		<Wrapper>
			<Card onClick={() => navigate(`/post/1234`)}>
				<img
					src='images/splash3.jpg'
					alt='pic'
					className='post-pic'
				/>

				<span className='tag-container'>
					<span className='tag'>#Recipe</span>
					<span className='tag'>#Spicy</span>
				</span>

				<h2 className='post-title'>Lorem ipsum, dolor sit amet</h2>

				<h4 className='post-time'>1 hour ago</h4>

				<p className='post-text'>
					Lorem ipsum dolor sit amet consectetur adipisicing
					elit. Voluptas blanditiis hic debitis quo ducimus quis
					ullam. Veritatis enim magni officiis maiores delectus
					ratione, consequatur dolores ipsum aliquid voluptates.
					Nulla, hic. Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Expedita, id omnis. Cumque iure rem
					est distinctio odit consequuntur minus molestias, alias
					blanditiis nam voluptate omnis sit obcaecati sequi
					corporis impedit.
				</p>
			</Card>
		</Wrapper>
	);
}

export default Posts;

// ########## styled components ##########
const Card = styled.div`
	cursor: pointer;
	user-select: none;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 1vh;
	padding: 1vh;
	border-radius: 10px;
	text-align: center;
	transition: 0.4s;

	:hover {
		background-color: var(--highlight);
		box-shadow: var(--shadow);
	}

	.post-pic {
		width: 100%;
		height: 30vh;
		object-fit: cover;
		border-radius: 10px;
	}

	.tag-container {
		margin-top: 10px;
		display: flex;
		gap: 1vw;

		.tag {
			font-size: x-large;
			font-family: var(--font1);
			color: var(--olive);
		}
	}

	.post-title {
		font-family: var(--font4);
		margin-bottom: 0;
	}

	.post-time {
		font-family: var(--font4);
		color: var(--onion);
		margin-top: 0;
	}

	.post-text {
		margin: 0;
		max-height: 15vh;

		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 6;
		line-clamp: 2;
		-webkit-box-orient: vertical;
	}
`;

const Wrapper = styled.div`
	flex: 3;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	padding: 1vw;

	@media screen and (max-width: 1200px) {
		grid-template-columns: 1fr 1fr;
	}

	@media screen and (max-width: 800px) {
		grid-template-columns: 1fr;
	}
`;
