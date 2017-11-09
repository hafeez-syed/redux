import React from 'react';
import ReactDOM from 'react-dom';
import CreateCustomStore from './custom-store';
import { CounterReducer, TodoReducer } from './reducers/';
import { Counter, Todo } from './components/';
import { ACTION_COUNTER } from './actions/counter';
import { ACTION_TODO } from './actions/todo';
import styles from '../css/styles.css';

// CreateCustomStore is similar to Redux's createStore
const counterStore = CreateCustomStore(CounterReducer);
const todoStore = CreateCustomStore(TodoReducer);

const onAddCounter = () => {
	counterStore.dispatch(ACTION_COUNTER().add);
};

const onSubtractCounter = () => {
	if (counterStore.getState() > 0) {
		counterStore.dispatch(ACTION_COUNTER().subtract);
	}
};

const onAddTodo = () => {
	todoStore.dispatch(
		{
			id: 1,
			type: 'ADD_TODO',
			text: 'Learn React'
		}
	);
};

const completeTodo = (id) => {
	todoStore.dispatch(
		{
			id: id,
			type: 'TOGGLE_TODO'
		}
	);
};

const renderCounter = () => {
	ReactDOM.render(
		<Counter
			value={counterStore.getState()}
		    onAdd={onAddCounter}
			onSubtract={onSubtractCounter}
		/>,
		document.getElementById('counter')
	);
};

const renderTodo = () => {
	ReactDOM.render(
		<Todo
			list={todoStore.getState()}
			addTodo={onAddTodo}
			completeTodo={completeTodo}
		/>,
		document.getElementById('todo-list')
	);
};

counterStore.subscribe(renderCounter);
counterStore.dispatch(ACTION_COUNTER().add);

todoStore.subscribe(renderTodo);
todoStore.dispatch(ACTION_TODO().add);


export { CounterReducer, TodoReducer };