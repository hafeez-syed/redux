import React from 'react';
import AddCounter from './add-counter';
import SubtractCounter from './subtract-counter';

const Counter = ({value, onAdd, onSubtract}) => (
	<div>
		<h1>Counter: {value}</h1>
		<AddCounter increment={onAdd} />
		<SubtractCounter decrement={onSubtract} />
	</div>
);

export default Counter;