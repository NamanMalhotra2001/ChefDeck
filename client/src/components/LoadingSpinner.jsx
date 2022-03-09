import styled from 'styled-components';

import React from 'react';

const LoadingSpinner = () => {
	return <Spinner />;
};

export default LoadingSpinner;

const Spinner = styled.div`
	margin: 0 auto;
	border: 5px solid lightgray;
	border-top: 5px solid gray;
	border-radius: 50%;
	width: 50px;
	height: 50px;
	animation: spin 0.8s linear infinite;

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}

		100% {
			transform: rotate(360deg);
		}
	}
`;
