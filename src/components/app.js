import React from 'react'
import { connect, Provider } from 'react-redux'

import AppRouter from '../routes'

import Footer from './common/footer'

class App extends React.Component {
    constructor(props, context) {
        super(props, context)
    }

    render() {
        return (
            <div>
                <AppRouter/>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
  return {
    loading: state.numAjaxCallsInProgress > 0
  }
}

export default connect(mapStateToProps)(App)
