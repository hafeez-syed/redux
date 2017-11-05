import React from 'react';
import ReactDOM from 'react-dom';
import CreateCustomStore from './custom-store';
import { CounterReducer } from './counter-reducer';
import { Counter } from './components/counter';
import { ACTION_COUNTER } from './actions/counter';

const onAdd = () => {
	store.dispatch(ACTION_COUNTER().add);
};
const onSubtract = () => {
	store.dispatch(ACTION_COUNTER().subtract);
};

const render = () => {
	ReactDOM.render(
		<Counter
			value={store.getState()}
		    onAdd={onAdd}
			onSubtract={onSubtract}
		/>,
		document.getElementById('root')
	);
};

// CreateCustomStore is similar to Redux's createStore
const store = CreateCustomStore(CounterReducer);
store.subscribe(render);

render();

export { CounterReducer };