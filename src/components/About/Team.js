import React from 'react'
import TeamMember from './TeamMember'
import Content from '../../content/content.json'
import Romi from '../../assets/img/romi.svg'
import Nacho from '../../assets/img/nacho.svg'
import Tobi from '../../assets/img/tobi.svg'

const team = (props) => {
    return (
        <div className="layout-team">
            <div className="inner-container">
                <TeamMember name={Content.members[0].name} bio={Content.members[0].bio} info={Content.members[0].info} image={Romi} />
            </div>
        </div>
    );
}

export default React.memo(team)