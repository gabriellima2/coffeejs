let timer;

export function debounce(cb, ms) {
	clearTimeout(timer);
	timer = setTimeout(cb, ms);
}
