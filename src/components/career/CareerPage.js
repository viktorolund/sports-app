import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as careerActions from "../../actions/careerActions";
import CareerList from "./CareerList";

class CareerPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { career } = this.props;

    return (
      <div className="container">
        <CareerList career={career} />
      </div>
    );
  }
}

CareerPage.propTypes = {
  career: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    career: state.career
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(careerActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CareerPage);
