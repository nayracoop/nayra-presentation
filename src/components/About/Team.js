import React from 'react'
import TeamMember from './TeamMember'

const team = (props) => {
    return(
        <div className="layout-team">
            <div className="inner-container">
                <TeamMember name="nombre del member" bio="acá va una bio medio corta de cada une de nosotres. Pueden ser uno o dos parrafos que digan que hacemos y cosas como esas." info="y aca va una info extra para que quede lindo. Mas corta que la Bio."/>
            </div>
            <div className="inner-container">
                <TeamMember name="nombre del member" bio="acá va una bio medio corta de cada une de nosotres. Pueden ser uno o dos parrafos que digan que hacemos y cosas como esas." info="y aca va una info extra para que quede lindo. Mas corta que la Bio."/>
            </div>
            <div className="inner-container">
                <TeamMember name="nombre del member" bio="acá va una bio medio corta de cada une de nosotres. Pueden ser uno o dos parrafos que digan que hacemos y cosas como esas." info="y aca va una info extra para que quede lindo. Mas corta que la Bio."/>
            </div>
        </div>
    );
}

export default React.memo(team)