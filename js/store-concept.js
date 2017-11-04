const counterReducer = require('./counter-reducer');
const ReactDOM = require('./lib/react-dom');
const React = require('./lib/react');

const createStore = (reducer) => {
	let state;
	let listeners = [];

	const getState = () => state;

	const dispatch = (action) => {
		state = reducer(state, action);
		listeners.forEach(listener => listener())
	};

	const subscribe = (listener) => {
		listeners.push(listener);
		return () => {
			listeners = listeners.filter(l => l !== listener);
		};
	};

	dispatch({});

	return {getState, dispatch, subscribe};
};

const Counter = ({value}) => (
	<h1>{value}</h1>
);

const store = createStore(counterReducer);

const render = () => {
	ReactDOM.render(
		<Counter value={store.getState()} />,
		document.getElementsById('root')
	);
};

store.subscribe(render);

render();