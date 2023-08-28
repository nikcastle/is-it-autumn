import React, { createContext, useEffect, useState } from 'react';
import { stockData } from '../utils/solstice-equinox';

const DateContext = createContext(null);

export const DateProvider = ({ children }) => {
	const [currentYear, setCurrentYear] = useState();
	const [currentDate, setCurrentDate] = useState();

	const getDate = () => {
		const year = new Date().getFullYear();
		const date = new Date().toISOString();

		setCurrentYear(year);
		setCurrentDate(date);
	};

	useEffect(() => {
		getDate();
	}, []);

	let stockYear = stockData.find((year) => {
		console.log(currentYear);
		return year.year === currentYear;
	});
	const fall = stockYear.fall;
	const winter = stockYear.winter;

	let isFall = '';
	// = currentDate >= fall && currentDate < winter

	return (
		<DateContext.Provider
			value={{
				currentYear,
				currentDate,
				isFall,
				fall,
				winter
			}}
		>
			{children}
		</DateContext.Provider>
	);
};

export default DateContext;
