import React from 'react'
import logo from '../assets/images/shieldme-logo.png'
import { Container } from 'react-bootstrap'

function footer() {
    return (
        <div>
            <Container>
                <img src={logo} />
                <p>Copyright &#169 2020 SHIELD GLOBAL</p>
                <p>*We reserve the right to change specifications of our product without prior notice.</p>
                <p>Follow Us On:    Facebook  |   Instagram |   YouTube |  LinkedIn | </p>
            </Container>
        </div>
    )
}

export default footer
