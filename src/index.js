import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './app';

// const API_KEY = 'AIzaSyD9ESp2R8sT20Nca8gBlwnHaYJ30gV663c';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

const Root = (
    <Provider store={createStoreWithMiddleware(reducers)}>
        <Router>
            <App />
        </Router>
    </Provider>
);
ReactDOM.render(Root, document.getElementById('root'));