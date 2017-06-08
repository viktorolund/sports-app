import React from 'react';
import { connect, Provider } from 'react-redux';

import Menu from './common/menu';

import Aboutme from './sections/aboutme';
import Knowledge from './sections/knowledge';
import Experience from './sections/experience';
import Footer from './sections/footer';

class App extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    componentDidMount() {
        require('../services/fullpage-config');
    }

    render() {
        return (
            <div>
                <Menu/>
                <div id="fullpage">
                    <Aboutme/>
                    <Knowledge/>
                    <Experience/>
                    <Footer/>
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
