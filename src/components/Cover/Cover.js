import React from 'react'

const cover = (props) => {
    return(
            <div className="cover">
            <p className="cover-pageNumber">{props.pageNumber}</p>
            <h1 className="cover-title">{props.title}</h1>
        </div>
    );
}

export default cover