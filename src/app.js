import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import store from './store/store';
import VendingMachine from './components/vending-machine/vending-machine';

import './main.scss';

ReactDOM.render(
    <Provider store={store}>
        <VendingMachine />
    </Provider>,
    document.getElementById('App'),
);
