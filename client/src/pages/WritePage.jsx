import styled from 'styled-components';

function WritePage() {
	function handlePost(e) {
		e.preventDefault();
		console.log(e.target[0].value);
		console.log(e.target[2].value);
		const para = e.target[2].value;
		console.log(para.split('\n\n'));
	}

	return (
		<Wrapper>
			<img src='/images/splash3.jpg' alt='' className='post-pic' />

			<form
				style={{ width: '100%' }}
				onSubmit={(e) => handlePost(e)}
			>
				<div className='container'>
					<Title placeholder='Title...' tabIndex={1} />
					<PostButton tabIndex={3}>Post</PostButton>
				</div>

				<Content placeholder='Write your mind...' tabIndex={2} />
			</form>
		</Wrapper>
	);
}

export default WritePage;

// ########## styled components ##########
const PostButton = styled.button`
	cursor: pointer;
	flex: 1;
	margin-block: 20px;
	margin-left: 20px;
	border-radius: 10px;
	border: none;
	outline: none;
	font-family: var(--font2);
	font-size: xx-large;
	background-color: antiquewhite;

	:hover {
		box-shadow: var(--shadow-sm);
	}

	:focus {
		animation: shadowFade 0.2s;
		color: gray;
		opacity: 0.5;
	}
`;

const Content = styled.textarea`
	resize: none;
	outline: none;
	border: none;
	border-radius: 10px;
	width: 90%;
	min-height: 60vh;
	padding: 20px;
	font-family: var(--font4);
	font-size: x-large;

	:hover {
		background-color: #7777770a;
	}

	:focus {
		background-color: #7777771a;
		animation: outlineFade 0.8s;
	}
`;

const Title = styled.input`
	flex: 5;
	outline: none;
	border: none;
	border-radius: 10px;
	width: 90%;
	margin: 20px 0;
	padding: 20px;
	font-family: var(--font4);
	font-size: xx-large;
	font-weight: bold;

	:hover {
		background-color: #7777770a;
	}

	:focus {
		background-color: #7777771a;
		animation: outlineFade 0.8s;
	}
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 2vw;

	.post-pic {
		cursor: pointer;
		width: 100%;
		height: 50vh;
		border-radius: 10px;
		object-fit: cover;

		:hover {
			box-shadow: var(--shadow);
		}
	}

	.container {
		width: 100%;
		display: flex;
	}

	@keyframes outlineFade {
		0% {
			outline: 1px solid white;
		}

		50% {
			outline: 1px solid black;
		}

		75% {
			outline: 1px solid gainsboro;
		}

		100% {
			outline: 1px solid white;
		}
	}

	@keyframes shadowFade {
		0% {
			box-shadow: var(--shadow-sm);
		}

		50% {
			box-shadow: none;
		}

		100% {
			box-shadow: var(--shadow-sm);
		}
	}
`;
