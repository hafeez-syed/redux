const CounterReducer = (previousState = 0, action) => {
	let state;

	if (action.type === 'INCREMENT') {
		state = previousState + 1;
	} else if (action.type === 'DECREMENT') {
		state = previousState - 1;
	} else {
		state = previousState;
	}

	return state;
};

export {CounterReducer};