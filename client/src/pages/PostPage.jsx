import axios from 'axios';
import { useEffect, useState } from 'react';
import { FiEdit, FiTrash2 } from 'react-icons/fi';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Sidebar from '../components/Sidebar';

function PostPage() {
	const { postId } = useParams();
	const [post, setPost] = useState(null);

	// ########## fetch data ##########
	useEffect(() => {
		const fetchPost = async () => {
			const res = await axios.get(
				`http://localhost:5000/post/find/${postId}`
			);
			setPost(res.data);
		};
		fetchPost();
	}, [postId]);

	return (
		<div style={{ display: 'flex' }}>
			{post !== null ? (
				<Wrapper>
					<img
						src={
							post.banner === ''
								? `/images/splash3.jpg`
								: post.banner
						}
						alt='pic'
						className='post-pic'
					/>

					<div className='content'>
						<TitleControl>
							<h1 className='post-title'>{post.title}</h1>

							<span className='edit-delete'>
								<FiEdit style={{ color: 'green' }} />
								<FiTrash2 style={{ color: '#9c0000' }} />
							</span>
						</TitleControl>

						<AuthorTime>
							<h3 className='author'>{post.owner}</h3>
							<span className='time'>
								{new Date(post.createdAt).toDateString()}
							</span>
						</AuthorTime>

						<PostText>{post.content}</PostText>
					</div>
				</Wrapper>
			) : (
				''
			)}
			<Sidebar />
		</div>
	);
}

export default PostPage;

// ########## styled components ##########
const PostText = styled.p`
	width: 100%;
	box-sizing: border-box;
	padding: 1rem;
	padding-right: 3rem;
	min-height: 60vh;
	margin-top: 3vh;
	font-size: larger;

	::first-letter {
		font-size: xx-large;
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
