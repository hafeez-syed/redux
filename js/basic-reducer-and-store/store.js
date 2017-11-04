/*
const counterReducer = require('../counter-reducer');
const { createStore } = require('../lib/redux');
const store = createStore(counterReducer);

setTimeout(function() {

	const render = () => {
		document.getElementsByClassName('reducer-counter')[0].innerText = 'Counter: ' + store.getState();
	};

	store.subscribe(render);

	document.getElementsByClassName('add-counter')[0].addEventListener('click', function() {
		store.dispatch({type: 'INCREMENT'});
	});
}, 500);
*/
