import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { axiosInstance } from '../axiosConfig';

function Sidebar() {
	// ########## initial ##########
	const navigate = useNavigate();
	// ########## initial ##########

	// ########## states ##########
	const [categories, setCategories] = useState(null);
	// ########## states ##########

	// ########## fetch data ##########
	useEffect(() => {
		const getCategories = async () => {
			const res = await axiosInstance.get('categories');
			setCategories(res.data.slice(-10));
		};
		getCategories();
	}, []);
	// ########## fetch data ##########

	return (
		<Wrapper>
			<h2>CUISINES</h2>
			<div className='cuisine-container'>
				{categories !== null ? (
					categories.map((c, k) => (
						<span
							key={k}
							onClick={() => {
								navigate(`/?category=${c.name}`);
								setTimeout(() => {
									window.scrollTo(0, 680);
								}, 1);
							}}
						>
							{c.name}
						</span>
					))
				) : (
					<></>
				)}
			</div>
			<h2>ABOUT ME</h2>
			<img src='/images/splash2.jpg' alt='pic' />
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Repudiandae magnam ex fuga rem cupiditate officiis nemo
				similique, nostrum deleniti mollitia labore placeat aut
				ducimus incidunt veniam vero accusamus iure ipsam.
			</p>
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
		padding-block: 10px;
		margin-block: 20px;
		width: 50%;
		border-top: solid 1px var(--olive);
		border-bottom: solid 1px var(--olive);
		font-family: var(--font4);
	}

	p {
		width: 80%;
		margin-block: 20px;
	}

	.cuisine-container {
		width: 50%;
		padding-block: 2vh;
		display: flex;
		flex-wrap: wrap;

		span {
			width: 50%;
			cursor: pointer;
			padding-block: 1vh;
			outline: solid 1px white;

			@media only screen and (max-width: 800px) {
				width: 100%;
			}

			:hover,
			:focus {
				outline: solid 1px gray;
				z-index: 999;
			}
		}
	}
`;
