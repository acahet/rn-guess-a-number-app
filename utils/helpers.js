export const generateRandomBetween = (min, max, exclude) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	const rdnNum = Math.floor(Math.random() * (max - min)) + min;
	if (rdnNum === exclude) {
		return generateRandomBetween(min, max, exclude);
	} else {
		return rdnNum;
	}
};
