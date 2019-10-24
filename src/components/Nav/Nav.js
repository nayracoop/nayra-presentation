import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.scss';

const Nav = (props) => {

    let options = null;
    console.log(props)
    if(props.options) {
        options = props.options.map(opt => {
            return opt.visible ? <li><NavLink to={opt.url} exact>{opt.title}</NavLink></li> : null;
        })
    }

    return(options ?
        <div className="navBar">
            <nav>
                <ul>
                    {options}
                </ul>
            </nav>
        </div> : null
    );
} 

export default React.memo(Nav)