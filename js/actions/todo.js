const ACTION_TODO = () => {
	const add = {
		id: 0,
		type: 'ADD_TODO',
		text: 'Learn Redux',
		completed: false
	};
	const toggle = {
		id: 1,
		type: 'TOGGLE_TODO',
		text: 'Learn React',
		completed: false
	};

	return {add, toggle};
};

export { ACTION_TODO };