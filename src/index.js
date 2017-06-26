import React from 'react'
import { render } from 'react-dom'

import configureStore from './store/configureStore'
import { Provider } from 'react-redux'

require('./images/page_logo.ico')

import './styles/main.less'
import './styles/panel.less'
import 'hamburgers/dist/hamburgers.css'

import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import App from './components/app'
import { loadCareer } from './actions/careerActions'

const store = configureStore()

store.dispatch(loadCareer())

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('career-app')
)
