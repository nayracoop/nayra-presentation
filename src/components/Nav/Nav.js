import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.scss';

const Nav = (props) => {

    let options = null;
    if (props.options) {
        options = props.options.map(opt => {
            let link = opt.exact ? <NavLink to={opt.url}>{opt.title}</NavLink> : <NavLink to={opt.url}>{opt.title}</NavLink>
            return opt.visible ? <li>{link}</li> : null;
        })
    }

    return (options ?
        <div className="navBar">
            <nav>
                <ul>{options}</ul>
            </nav>
        </div> : null
    );
}

export default React.memo(Nav)