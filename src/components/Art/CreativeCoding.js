import React from 'react'
import './CreativeCoding.scss';

const CreativeCoding = (props) => {
    return (
        <div className="layout layout-creativeCoding">
            <div className="inner-container">
                <div className="info">
                    <h2 className="title">{props.title}</h2>
                    <p className="text">{props.text}</p>
                </div>
                <div className="image">{props.image}</div>
            </div>
        </div>
    );
}

export default React.memo(CreativeCoding)