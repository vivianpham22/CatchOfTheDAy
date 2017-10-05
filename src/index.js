import React from 'react';
import { render } from 'react-dom'; // import ReactDOM from 'react-dom'; -- entire package
import { BrowserRouter, Match, Miss} from 'react-router';

import './css/style.css';
import App from './components/App';
import Header from './components/Header';
import Order from './components/Order';
import Inventory from './components/Inventory';
import StorePicker from './components/StorePicker';
import NotFound from './components/NotFound';


const Root = () => {
    return (
        <BrowserRouter>
        <div>
          <Match exactly pattern='/' component={StorePicker}/>
          <Match pattern='/store/:storeId' component={App}/>
          <Miss component={NotFound}/>
        </div>
        </BrowserRouter>
    )
}

// ES6 pretty much like function render() {} JS
render(<Root/>, document.querySelector('#main'));