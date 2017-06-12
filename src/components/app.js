import React from 'react';
import { connect, Provider } from 'react-redux';

import Menu from './common/menu';
import Footer from './common/footer';

class App extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div>
                <Menu/>

                {this.props.children}
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
