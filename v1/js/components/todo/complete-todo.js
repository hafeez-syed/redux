import React from 'react';

const CompleteTodo = ({onComplete, todoId}) => (
	<button onClick={() => onComplete(todoId)} title="Complete Todo"> Complete Todo </button>
);

export default CompleteTodo;