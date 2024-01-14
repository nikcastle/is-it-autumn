import React from 'react';
import { isFall } from '../utils/basicFunctions';
import Autumn from '../pages/Autumn';
import NotAutumn from '../pages/Not-Autumn';

const Wrapper = () => {
	return <>{isFall() ? <Autumn /> : <NotAutumn />}</>;
};

export default Wrapper;
