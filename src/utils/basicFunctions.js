import { stockData } from './solstice-equinox';

export const CurrentYear = new Date().getFullYear();

export const getCurrentDate = () => {
	let today = new Date();
	today = today.toISOString;
	// console.log(today);

	return today;
};

const stockYear = stockData.find((year) => {
	return year.year === CurrentYear;
});
const fall = stockYear.fall;
const winter = stockYear.winter;

export const isFall = () => {
	const today = getCurrentDate();
	return today >= fall && today < winter;
};
