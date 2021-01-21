import React from 'react'
import './dp.css'
import { Container,Row,Col } from 'react-bootstrap'
import foggerMan from '../assets/images/fa_shield-me-fogger-with-man.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle} from '@fortawesome/free-solid-svg-icons'

function disinfectingProcedure() {
    return (
        <div className="dpContainer">
            <Container>
                <Row>
                    <Col>
                        <div className="dpImageContainer">
                            <img src={foggerMan} />
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <h2>Disinfecting Procedure</h2>
                            <span className="d-inline-flex">
                                <span className="checkCircle mr-2"><FontAwesomeIcon icon={faCheckCircle} /></span>
                                <p>Unique hose design, swing to any angle , instant switch on/off, high efficiency, convinient</p>
                            </span>
                            <span className="d-inline-flex">
                                <span className="checkCircle mr-2"><FontAwesomeIcon icon={faCheckCircle} /></span>
                                <p>High efficiency spraying, save solution and labor</p>
                            </span>
                            <span className="d-inline-flex">
                                <span className="checkCircle mr-2"><FontAwesomeIcon icon={faCheckCircle} /></span>
                                <p>Rotating sprayer without any blocking.</p>
                            </span>
                            <span className="d-inline-flex">
                                <span className="checkCircle mr-2"><FontAwesomeIcon icon={faCheckCircle} /></span>
                                <p>Air pressure auto-locking spray head to prevent leakage.</p>
                            </span>
                            <span className="d-inline-flex">
                                <span className="checkCircle mr-2"><FontAwesomeIcon icon={faCheckCircle} /></span>
                                <p>High-power motor, high speed spraing</p>
                            </span>
                        </div>
                    </Col>
                    
                </Row>
            </Container>
        </div>
    )
}

export default disinfectingProcedure
