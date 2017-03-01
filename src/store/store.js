import { createStore, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise-middleware';

import products from './reducers';

const store = createStore(
    products,
    // REDUX debugging
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(
        promiseMiddleware(),
    ),
);

export default store;
