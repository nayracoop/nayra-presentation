import React from 'react'
import { Route } from 'react-router-dom';

const cover = (props) => {
    return(
        <div className="layout-cover">
            <div className="inner-container">
                <p className="cover-pageNumber">{props.pageNumber}</p>
                <h1 className="cover-title">{props.title}</h1>
                <Route path="/about/team">
                    <h3>Hola</h3>
                </Route>
            </div>
        </div>
    );
}

export default React.memo(cover)