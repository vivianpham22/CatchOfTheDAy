import React from 'react';
import { render } from 'react-dom';
// import ReactDOM from 'react-dom'; -- entire package

import StorePicker from './components/StorePicker';

// ES6 pretty much like function render() {} JS
render(<StorePicker/>, document.querySelector('#main'));