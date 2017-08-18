import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { toggleMenu } from "../../actions/menuToggleActions";

class Menu extends React.PureComponent {
  constructor(props) {
    super(props);

    this.menuToggle = this.menuToggle.bind(this);
  }

  menuToggle() {
    this.props.toggleMenu();
  }

  render() {
    return (
      <div>
        <div className="navbar navbar-default navbar-static-top">
          <div className="container">
            <div className="navbar-header">
              <button
                type="button"
                className={`navbar-toggle hamburger hamburger--collapse ${this
                  .props.menuActive
                  ? "is-active"
                  : ""}`}
                onClick={this.menuToggle}
                data-toggle="collapse"
                data-target="#page-navbar"
              >
                <span className="hamburger-box">
                  <span className="hamburger-inner" />
                </span>
              </button>
              <a href="/" className="navbar-brand hidden-xs">
                <img
                  className="logo-small"
                  src={require("../../images/page_logo.png")}
                />
              </a>
            </div>

            <div className="collapse navbar-collapse" id="page-navbar">
              <ul id="bsmenu" className="nav navbar-nav">
                <li>
                  <Link to="/">Om</Link>
                </li>
                <li>
                  <Link to="/knowledge">Kunskaper</Link>
                </li>
                <li>
                  <Link to="/career">Karriär</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Menu.PropTypes = {
  menuActive: PropTypes.bool,
  toggleMenu: PropTypes.func
};

function mapStateToProps(state) {
  return {
    menuActive: state.menuActive
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toggleMenu: () => dispatch(toggleMenu())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
