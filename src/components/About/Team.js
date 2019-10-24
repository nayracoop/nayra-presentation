import React from 'react'
import TeamMember from './TeamMember'

const team = (props) => {

    let members = props.members.map(member => {
        return <TeamMember name={member.name} bio={member.bio} info={member.info} image={require('../../assets/img/' + member.icon)} />
    });

    return (
        <div className="layout-team">
            <div className="inner-container">
                {members}
            </div>
        </div>
    );
}

export default React.memo(team)