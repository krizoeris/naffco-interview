import React from 'react'
import './card.css'
import safeForHumanR from '../assets/images/icons/safe-for-humans-w-round.png'
import safeForHumanS from '../assets/images/icons/safe-for-humans-min.png'
import ecoFriendlyR from '../assets/images/icons/eco-friendly-w-round.png'
import ecoFriendlyS from '../assets/images/icons/eco-friendly-min.png'
import nonAlcoholicR from '../assets/images/icons/non-alcoholic-w-round.png'
import nonAlcoholicS from '../assets/images/icons/non-alcoholic-min.png'
import naturalR from '../assets/images/icons/natural-w-round.png'
import naturalS from '../assets/images/icons/natural-min.png'
import killsBacteriaR from '../assets/images/icons/kills-bacteria-w-round.png'
import killsBacteriaS from '../assets/images/icons/kills-bacteria-min.png'
import { Container } from 'react-bootstrap'

const data = [
    {title: "SAFE FOR HUMANS", iconR: safeForHumanR, iconS: safeForHumanS},
    {title: "ECO FRIENDLY", iconR: ecoFriendlyR, iconS: ecoFriendlyS},
    {title: "NON-ALCOHOLIC", iconR: nonAlcoholicR, iconS: nonAlcoholicS},
    {title: "100% NATURAL", iconR: naturalR, iconS: naturalS},
    {title: "KILLS 99.99% OF\n VIRUSES & BACTERIA", iconR: killsBacteriaR, iconS: killsBacteriaS}
]

function card() {
    return (
        <Container>
            <div className="card-container">
                {data.map(d => {
                    return(
                        <div>
                            <img src={d.iconR} />
                            <p>{d.title}</p>
                        </div>
                    )
                })}
            </div>
        </Container>
    )
}

export default card
