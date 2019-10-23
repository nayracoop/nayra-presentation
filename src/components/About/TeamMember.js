import React from 'react'

const teamMember = (props) => {
    return(
        <div className="teamMember">
            <div className="memberPicture">

            </div>
            <div className="memberInfo">
                <h2 className="name">{props.name}</h2>
                <p className="bio">{props.bio}</p>
                <p className="info">{props.info}</p>

            </div>
        </div>
    );
}

export default React.memo(teamMember)