/*
let action;
let assert;

const counterReducer = require('../counter-reducer');

action = {
	type: 'INCREMENT'
};

assert = counterReducer(0, action);
console.log(`expect result ${assert} === 1: ` ,  assert === 1);

assert = counterReducer(1, action);
console.log(`expect result ${assert} === 2: ` ,  assert === 2);

action = {
	type: 'DECREMENT'
};

assert = counterReducer(2, action);
console.log(`expect result ${assert} === 1: ` ,  assert === 1);

assert = counterReducer(1, action);
console.log(`expect result ${assert} === 0: ` ,  assert === 0);

action = {
	type: 'SOMETHING_ELSE'
};

assert = counterReducer(undefined, action);
console.log(`expect result ${assert} === 0: ` ,  assert === 0);
*/
