import React from 'react'
import { Link } from 'react-router-dom'

class Menu extends React.Component {
    constructor(props, context) {
        super(props, context)

        this.state = {
            menuIsActive: false
        }

        this.menuToggle = this.menuToggle.bind(this)
    }

    menuToggle() {
        const isMenuActive = !this.state.menuIsActive

        this.setState({
            menuIsActive: isMenuActive ? 'is-active': ''
        })
    }

    render() {
        return (
            <div>
                <div className="navbar navbar-default navbar-static-top">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button"
                                className={`navbar-toggle hamburger hamburger--collapse ${this.state.menuIsActive}`}
                                onClick={(this.menuToggle)}
                                data-toggle="collapse"
                                data-target="#page-navbar">
                                <span className="hamburger-box">
                                    <span className="hamburger-inner"></span>
                                </span>
                            </button>
                            <a href="/" className="navbar-brand hidden-xs"><img className="logo-small" src={require("../../images/page_logo.png")}></img></a>
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
        )
    }
}

export default Menu
