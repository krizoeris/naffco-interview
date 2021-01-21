import React from 'react'
import './footer.css'
import logo from '../assets/images/shieldme-logo.png'
import { Container, Row, Col } from 'react-bootstrap'

function footer() {
    return (
        <div className="footerContainer">
            <Container>
                <div className="footerInnerContainer">
                <div style={{marginBottom: '70px'}}>
                    <img alt="" src={logo} />
                </div>
                <Row>
                    <Col>
                        <div>
                            <p>Copyright &#169 2020 SHIELD GLOBAL</p>
                            <p style={{fontSize: '.8em'}}>*We reserve the right to change specifications of our product without prior notice.</p>
                        </div>
                    </Col>
                    <Col>
                        <div style={{textAlign: 'right'}}>
                            <p>Follow Us On:    Facebook  |   Instagram |   YouTube |  LinkedIn | </p>
                        </div>
                    </Col>
                </Row>
                </div>
            </Container>
        </div>
    )
}

export default footer
