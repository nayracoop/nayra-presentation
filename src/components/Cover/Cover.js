import React from 'react';
import './Cover.scss';

const cover = (props) => {
    return (
        <div className="layout-cover">
            <div className="inner-container">
                <p className="cover-pageNumber">{props.pageNumber}</p>
                <h1 className="cover-title">{props.title}</h1>
            </div>
        </div>
    );
}

export default React.memo(cover)