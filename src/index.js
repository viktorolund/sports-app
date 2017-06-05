import React from 'react';
import {render} from 'react-dom';
import configureStore from './store/configureStore';

import {loadSports} from './actions/sportActions';

import SportsApp from './components/app';

import './styles/main.less';
import './styles/panel.less';

import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';

const store = configureStore(); // Optionally pass initial state here
// Enables our container components connect to the redux store

// Load sports as soon as application loads
store.dispatch(loadSports());

render(<SportsApp store={store} />, document.getElementById('sports-app'));