import React from 'react';
import ReactDOM from 'react-dom';
import Counter from '../views/Counter/index';

ReactDOM.render(<Counter />, document.getElementById('root'));

const counterValue = +document.getElementById('counter-display-value').innerText;
