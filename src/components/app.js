import React from "react";
import { connect } from "react-redux";

import AppRouter from "../routes";
import Footer from "./common/footer";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <AppRouter />
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    loading: state.numAjaxCallsInProgress > 0
  };
}

export default connect(mapStateToProps)(App);
