import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { loadNews } from "../../actions/newsActions";
import NewsList from "./NewsList";

class News extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getNewActions();
  }

  render() {
    return (
      <div className="container">
        {typeof this.props.news === "object" &&
          Object.keys(this.props.news).length > 0 &&
          <NewsList news={this.props.news} />}
      </div>
    );
  }
}

News.propTypes = {
  getNewActions: PropTypes.func,
  news: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    news: state.news
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getNewActions: () => {
      dispatch(loadNews());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(News);
