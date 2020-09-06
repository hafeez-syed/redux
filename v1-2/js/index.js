import React from 'react';
import ReactDOM from 'react-dom';

import '../css/styles.css';

export class ReactApp extends React.Component {
    render() {
        return (
            <div>
                Hello from ReactApp
            </div>
        )
    }
}

ReactDOM.render(
	<ReactApp />,
	document.getElementById('counter')
);
