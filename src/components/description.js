import React from 'react'
import './description.css'
import { Container, Row, Col } from 'react-bootstrap'
import electricFogger from '../assets/images/electric-cold-foggers.jpg';

function description() {
    return (
        <div className="descriptionContainer">
            <Container>
                <Row>
                    <Col md="6" sm="12">
                        <div>
                            <h2>A Disinfectant Fogger Can Sanitize Large Areas Quickly</h2>
                            <div className="lineBreaker"></div>
                            <p>In the United Arab Emirates, hotels come in all shapes and sizes, and our SHIELDme dis-infectant fogger is designed to cope with all of them. To ensure that you meet Covid 19 hotel re-opening guidelines, it is essential that every single room in your establishment is clean and ready for guests. No surface can be left unreated, which may seem like a daunting thought if you operate a large hotel</p>
                            <p>In the United Arab Emirates, hotels come in all shapes and sizes, and our SHIELDme dis-infectant fogger is designed to cope with all of them. To ensure that you meet Covid 19 hotel re-opening guidelines, it is essential that every single room in your establishment is clean and ready for guests. No surface can be left unreated, which may seem like a daunting thought if you operate a large hotel</p>
                            <p>In the United Arab Emirates, hotels come in all shapes and sizes, and our SHIELDme dis-infectant fogger is designed to cope with all of them. To ensure that you meet Covid 19 hotel re-opening guidelines, it is essential that every single room in your establishment is clean and ready for guests. No surface can be left unreated, which may seem like a daunting thought if you operate a large hotel</p>
                        </div>
                    </Col>
                    <Col md="6" sm="12">
                        <div className="descImageContainer">
                            <img alt="" src={electricFogger} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default description
