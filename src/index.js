import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';

import './images/page_logo.ico';

import '../node_modules/fullpage.js/jquery.fullPage.css';
import 'fullpage.js/jquery.fullPage.js';

import { loadCareer } from './actions/careerActions';
import App from './components/app';

import './styles/main.less';
import './styles/panel.less';

import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';

const store = configureStore();

store.dispatch(loadCareer());

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('career-app')
);
