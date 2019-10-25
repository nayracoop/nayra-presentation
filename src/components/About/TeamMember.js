import React from 'react';
import './Team.scss';

const teamMember = (props) => {

    let bio = (props.bio) ? <h3 className="bio">{props.bio}</h3> : null;
    let info = null;
    if (props.info) {
        info = <ul>{props.info.map((item, index) => {
            return <li key={index}>{item}</li>
        })}</ul>
    }

    return (
        <div className="teamMember">
            <div className="memberPicture">
                <img src={props.image} alt="" />
            </div>
            <div className="memberInfo">
                <h2 className="name">{props.name}</h2>
                {bio}
                {info}
            </div>
        </div>
    );
}

export default React.memo(teamMember)