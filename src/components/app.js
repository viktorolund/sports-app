import React from 'react';
import {Provider} from 'react-redux';
import {connect} from 'react-redux';

import Header from './common/header';
import SportPage from './sport/SportPage';

class SportsApp extends React.Component {
    render() {
        return (
            <div>
                <div className="container">
                    <Header/>
                    <Provider store={this.props.store}>
                        <SportPage/>
                    </Provider>
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

export default connect(mapStateToProps)(SportsApp);
