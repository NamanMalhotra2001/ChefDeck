import React, { useState } from 'react';
import styled from 'styled-components';

function Fields({ i, handleUpdate }) {
	const [focused, setFocused] = useState(false);

	return (
		<Wrapper>
			<h4>{i.label}</h4>
			<input
				className='field'
				onChange={(e) => handleUpdate(e)}
				required
				{...i}
				focused={focused.toString()}
				onBlur={() => setFocused(true)}
			/>
			<Error>{i.errormessage}</Error>
		</Wrapper>
	);
}
export default Fields;

const Error = styled.span`
	margin-bottom: 15px;
	margin-top: -10px;
	color: red;
	font-size: small;
	display: none;
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;

	.field {
		min-height: 15px;
		margin-block: 5px;
		border: none;
		outline: none;
		background-color: #d4d4d4;
		border-radius: 10px;
		padding: 10px;

		:valid,
		:invalid {
			margin-bottom: 15px;
		}
	}

	.field:invalid[focused='true'] ~ ${Error} {
		display: block;
	}
`;
