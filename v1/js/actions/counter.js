const ACTION_COUNTER = () => {
	const add = {
		type: 'INCREMENT'
	};
	const subtract = {
		type: 'DECREMENT'
	};

	return {add, subtract};
};

export { ACTION_COUNTER };