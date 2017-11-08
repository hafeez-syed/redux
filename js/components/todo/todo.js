import React from 'react';
import AddTodo from './add-todo';

const Todo = ({list, addTodo}) => (
	<div>
		<h1>Todo List:</h1>
		<AddTodo onAdd={addTodo} />
		<ul>
			{list.map((ls) => (
				<li key={ls.id}>
					<span>Text: {ls.text}</span>
					<span>Completed: {ls.completed}</span>
				</li>
			))}
		</ul>
	</div>
);

export default Todo;