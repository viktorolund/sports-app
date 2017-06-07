import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as sportActions from '../../actions/sportActions';
import SportList from './SportList';

class SportPage extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const { sports } = this.props;

        return (
            <div>
                <SportList sports={sports} />
            </div>
        );
    }
}

SportPage.propTypes = {
    sports: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        sports: state.sports
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(sportActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SportPage);
