export const isInViewport = (element) => {
	const rect = element.getBoundingClientRect();
	return (
		rect.top >= 0 &&
		rect.left >= 0 &&
		rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
		rect.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
};

export const updateArrowClass = (setShowLeft, setShowRight, firstFilter, lastFilter) => {
	if (!isInViewport(document.getElementById(firstFilter))) {
		setShowLeft(true);
	}
	if (!isInViewport(document.getElementById(lastFilter))) {
		setShowRight(true);
	}
};

export const handleEvent = (setShowLeft, setShowRight, firstFilter, lastFilter) => {
	setShowLeft(false);
	setShowRight(false);
	updateArrowClass(setShowLeft, setShowRight, firstFilter, lastFilter);
};
