import React from 'react';
import {render} from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';

import {loadSports} from './actions/sportActions';

import App from './components/app';

import './styles/main.less';
import './styles/panel.less';

import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';

const store = configureStore(); // Optionally pass initial state here
// Enables our container components connect to the redux store

// Load sports as soon as application loads
store.dispatch(loadSports());

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('sports-app')
);
