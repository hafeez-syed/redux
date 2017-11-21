const ADD_TODO = 'ADD_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';

const ACTION_ADD_TODO = () => {
	return {
		id: 0,
		type: 'ADD_TODO',
		text: 'Learn Redux',
		completed: false
	};
};

const ACTION_TOGGLE_TODO = () => {
	return {
		id: 1,
		type: 'TOGGLE_TODO',
		text: 'Learn React',
		completed: false
	}
};

export { ACTION_ADD_TODO, ACTION_TOGGLE_TODO };