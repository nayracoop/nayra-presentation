import React from 'react';
import {Link, NavLink } from 'react-router-dom';


const nav = (props) => {
    return(
        <nav className="navBar">
            <ul>
            <li><Link to="/">Home</Link></li>
            <li><NavLink to="/about" exact>Quiénes somos</NavLink></li>
            <li><NavLink to="/art" exact>Artes</NavLink></li>
            </ul>
        </nav>
    );
} 

export default React.memo(nav)