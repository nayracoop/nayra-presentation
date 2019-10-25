import React from 'react'
// import { Route, useLocation } from 'react-router-dom';
import './Cooperativism.scss';

const Facttic = (props) => {

    // let location = useLocation()
    // let gallery = null;
    // if(Array.isArray(props.image)) {
    //     props.image.map((img, index) => {
    //         console.log(index)
    //         return <Route path={location.pathname + '/:' + index} exact><img src={require('../../assets/img/' + img)} alt="" /></Route>
    //     })
    // } else {
    //     gallery = <img src={require('../../assets/img/' + props.image)} alt="" />
    // }

    let gallery = <img src={require('../../assets/img/' + props.image)} alt="" />

    return (
        <div className="layout layout-cooperativism facttic">
            <div className="inner-container">
                <div className="image">{gallery}</div>
                <div className="info">
                    <h2 className="title">{props.title}</h2>
                    <p className="text">{props.text}</p>
                </div>
            </div>
        </div>
    );
}

export default React.memo(Facttic)