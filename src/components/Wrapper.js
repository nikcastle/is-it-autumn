import React from 'react';
import { isFall } from '../utils/basicFunctions';
import Autumn from '../pages/Autumn';
import NotAutumn from '../pages/Not-Autumn';

const Wrapper = (props) => {
	console.log(isFall);

	return (
		<>
			{/* <NotAutumn /> */}
			{isFall ? <Autumn /> : <NotAutumn />}
		</>
	);
};

export default Wrapper;
