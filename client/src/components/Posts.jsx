import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import LoadingSpinner from './LoadingSpinner';

function Posts({ posts }) {
	const navigate = useNavigate();

	return (
		<>
			{Object.keys(posts).length > 0 ? (
				<Wrapper>
					{posts.map((post, k) => (
						<Card
							key={k}
							onClick={() => navigate(`/post/${post._id}`)}
						>
							<img
								src={
									post.banner === ''
										? `images/splash3.jpg`
										: post.banner
								}
								alt='pic'
								className='post-pic'
							/>

							<span className='tag-container'>
								{post.categories.map((c, k) => (
									<span key={k} className='tag'>
										#{c}
									</span>
								))}
							</span>

							<h2 className='post-title'>{post.title}</h2>

							<h4 className='post-time'>
								{new Date(post.createdAt).toDateString()}
							</h4>

							<p className='post-text'>{post.content}</p>
						</Card>
					))}
				</Wrapper>
			) : (
				<div
					style={{
						paddingTop: '5rem',
						flex: '3',
					}}
				>
					<LoadingSpinner />
				</div>
			)}
		</>
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
		box-shadow: var(--shadow-lg);
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
		margin: 0 0 20px 0;
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
