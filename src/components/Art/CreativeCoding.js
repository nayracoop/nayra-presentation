import React from 'react'
import P5Wrapper from 'react-p5-wrapper';
import sketch from './sketches/mta';
import './CreativeCoding.scss';

const CreativeCoding = (props) => {
    return (
        <div className="layout layout-creativeCoding">
            <div className="inner-container">
                <div className="info">
                    <h2 className="title">{props.title}</h2>
                    <p className="text">{props.text}</p>
                </div>
                <div className="image"><P5Wrapper sketch={sketch}></P5Wrapper></div>
            </div>
        </div>
    );
}

export default React.memo(CreativeCoding)