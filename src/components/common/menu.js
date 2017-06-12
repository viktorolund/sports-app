import React from 'react';
import {Link, IndexLink} from 'react-router';

const Menu = () => {
  return (
      <nav>
        <IndexLink to="/" activeClassName="active">Om</IndexLink>

        <Link to="/knowledge" activeClassName="active">Kunskaper</Link>

        <Link to="/career" activeClassName="active">Karriär</Link>
      </nav>
      /*
    <div>
        <div className="navbar navbar-default navbar-static-top">
            <div className="container">

                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#page-navbar">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a href="/" className="navbar-brand hidden-xs"><img className="logo-small" src={require("../../images/page_logo.png")}></img></a>
                </div>

                <div className="collapse navbar-collapse" id="page-navbar">
                    <ul id="bsmenu" className="nav navbar-nav">
                        <li className="active">
                            <IndexLink to="/" activeClassName="active">Om</IndexLink>
                        </li>
                        <li>
                            <Link to="/knowledge" activeClassName="active">Kunskaper</Link>
                        </li>
                        <li>
                            <Link to="/career" activeClassName="active">Karriär</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>*/
  );
};

export default Menu;
