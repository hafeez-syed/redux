const CounterReducer = (previousState = 0, action) => {
	let state;
	switch (action.type) {
		case 'INCREMENT':
			state = previousState + 1;
			break;
		case 'DECREMENT':
			state = previousState - 1;
			break;
		default:
			state = previousState;
	}

	return state;
};

export {CounterReducer};