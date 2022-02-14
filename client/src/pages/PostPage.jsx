import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Sidebar from '../components/Sidebar';
import { FiEdit, FiTrash2 } from 'react-icons/fi';

function PostPage() {
	// ########## initial ##########
	const { postId } = useParams();

	return (
		<div style={{ display: 'flex' }}>
			<Wrapper>
				<img
					src='/images/splash3.jpg'
					alt='pic'
					className='post-pic'
				/>

				<div className='content'>
					<TitleControl>
						<h1 className='post-title'>
							Lorem ipsum dolor sit amet
						</h1>

						<span className='edit-delete'>
							<FiEdit style={{ color: 'green' }} />
							<FiTrash2 style={{ color: '#9c0000' }} />
						</span>
					</TitleControl>

					<AuthorTime>
						<h3 className='author'>Naman Malhotra</h3>
						<span className='time'>1 hour ago</span>
					</AuthorTime>

					<PostText>
						<p>
							Lorem ipsum dolor sit amet consectetur,
							adipisicing elit. Quidem reprehenderit iure et
							id dicta provident perferendis aliquam
							laudantium! Sint voluptatum deserunt iste unde,
							aliquid nesciunt nisi voluptatem. Ducimus,
							exercitationem dolorum!
						</p>
					</PostText>
				</div>
			</Wrapper>
			<Sidebar />
		</div>
	);
}

export default PostPage;

// ########## styled components ##########
const PostText = styled.div`
	min-height: 60vh;
	margin-top: 3vh;

	::first-letter {
		font-size: xx-large;
	}

	p {
		width: 80%;
		font-size: larger;
	}
`;

const AuthorTime = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;

	.author {
		font-family: var(--font2);
		font-size: x-large;
		color: var(--olive);
		margin: 0;
	}

	.time {
		font-size: large;
		color: var(--onion);
	}
`;

const TitleControl = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: 3vh;

	.post-title {
		font-family: var(--font4);
		font-size: xx-large;
		text-align: center;
	}

	.edit-delete {
		font-size: x-large;
		display: flex;
		gap: 1vw;

		* {
			cursor: pointer;
		}
	}
`;

const Wrapper = styled.div`
	flex: 3;
	padding: 3vw;

	.post-pic {
		width: 100%;
		height: 70vh;
		object-fit: cover;
		border-radius: 10px;
		box-shadow: var(--shadow);
	}

	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
`;
