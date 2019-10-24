import React from 'react'
import './Cooperativism.scss';

const Facttic = (props) => {
    return (
        <div className="layout-cooperativism facttic">
            <div className="inner-container">
                <div classname="info">
                    <h2 className="title">{props.title}</h2>
                    <p className="text">{props.text}</p>
                </div>
                <div classname="image">{props.image}</div>
            </div>
        </div>
    );
}

export default React.memo(Facttic)