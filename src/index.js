import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';

require('./images/page_logo.ico');

import './styles/main.less';
import './styles/panel.less';

import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';

import { loadCareer } from './actions/careerActions';
import App from './components/app';

const store = configureStore();

store.dispatch(loadCareer());

render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('career-app')
);
