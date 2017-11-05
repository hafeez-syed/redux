import React from 'react';

const AddCounter = ({increment}) => (
	<button onClick={increment} title="Add Counter"> + </button>
);

export { AddCounter };