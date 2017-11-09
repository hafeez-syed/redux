import React from 'react';
import AddTodo from './add-todo';
import CompleteTodo from './complete-todo';

class Todo extends React.Component {
	render() {
		const {list, addTodo, completeTodo} = this.props;
		return (
			<div>
				<h1>Todo List:</h1>
				<AddTodo onAdd={addTodo}/>
				<ul>
					{list.map((ls) => (
						<li key={ls.id}>
							<span>Text: {ls.text}</span>
							<span className={ls.completed ? 'strike-through' : ''}>Completed: {ls.completed.toString()}</span>
							<CompleteTodo onComplete={completeTodo} todoId={ls.id}/>
						</li>
					))}
				</ul>
			</div>
		)
	}
}

export default Todo;