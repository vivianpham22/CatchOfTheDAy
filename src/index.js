import React from 'react';
import { render } from 'react-dom'; // import ReactDOM from 'react-dom'; -- entire package
import './css/style.css';
import App from './components/App';
import Header from './components/Header';
import Fish from './components/Fish';
import Order from './components/Order';
import Inventory from './components/Inventory';
import StorePicker from './components/StorePicker';

// ES6 pretty much like function render() {} JS
render(<App/>, document.querySelector('#main'));