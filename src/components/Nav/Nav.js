import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.scss';

const nav = (props) => {
    return(
        <div className="navBar">
            <nav>
                <ul>
                    <li><NavLink to="/" exact>Presentación</NavLink></li>
                    <li><NavLink to="/about" exact>Quiénes somos</NavLink></li>
                    <li><NavLink to="/art" exact>Artes</NavLink></li>
                </ul>
            </nav>
        </div>
    );
} 

export default React.memo(nav)