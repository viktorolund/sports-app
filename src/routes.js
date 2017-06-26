import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import Aboutme from './components/about/aboutme'
import Knowledge from './components/knowledge/knowledge'
import Experience from './components/experience/experience'
import Menu from './components/common/menu'

const history = createBrowserHistory()

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Menu/>

            <Route exact path='/' component={Aboutme} />
            <Route path='/knowledge' component={Knowledge} />
            <Route path='/career' component={Experience} />

        </div>
    </Router>
)

export default AppRouter

