import React from 'react'
import './Cooperativism.scss';

const Facttic = (props) => {
    return (
        <div className="layout layout-cooperativism facttic">
            <div className="inner-container">
                <div className="image"><img src={props.image} /></div>
                <div className="info">
                    <h2 className="title">{props.title}</h2>
                    <p className="text">{props.text}</p>
                </div>
            </div>
        </div>
    );
}

export default React.memo(Facttic)