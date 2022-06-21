export function randomNumberGenerator(min = 1, max) {
	if ((max && min) === 0 || max < min) return -1;

	return Math.floor(Math.random() * max + min);
}
