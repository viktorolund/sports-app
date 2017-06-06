import React from 'react';
import {Provider} from 'react-redux';
import {connect} from 'react-redux';

import Header from './common/header';
import SportPage from './sport/SportPage';

class App extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div>
                <div className="container">
                    <Header/>
                    <SportPage/>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
  return {
    loading: state.numAjaxCallsInProgress > 0
  };
}

export default connect(mapStateToProps)(App);
