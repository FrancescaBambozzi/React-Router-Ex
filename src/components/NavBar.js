import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom'; //withRouter is an higher-order comp ->  is a function that takes a component (wrap it) and returns a new component

const Navbar = (props) => {
    return (
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <a href="" className="brand-logo">Poke'Times</a>
                <ul className="right">
                    <li><Link to="/home">Home</Link></li>
                    <li><NavLink to="/about">About</NavLink></li> {/*use NAavLink instead of Link to add a class="active" by default*/}
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default withRouter(Navbar);