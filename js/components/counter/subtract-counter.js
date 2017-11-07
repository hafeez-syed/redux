import React from 'react';

const SubtractCounter = ({decrement}) => (
	<button onClick={decrement} title="Subtract Counter"> - </button>
);

export default SubtractCounter;