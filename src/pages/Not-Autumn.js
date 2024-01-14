import React from 'react';
import styled from 'styled-components';

const StyleWrapper = styled.article`
	h1 {
		font-size: 100px;
		margin-top: 10rem;
		display: flex;
		justify-content: center;
		font-family: monospace;
	}
`;

const NotAutumn = () => {
	return (
		<StyleWrapper>
			<h1>Nope</h1>
		</StyleWrapper>
	);
};

export default NotAutumn;
