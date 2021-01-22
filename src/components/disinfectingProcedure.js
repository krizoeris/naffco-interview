import React from 'react'
import './dp.css'
import { Container,Row,Col } from 'react-bootstrap'
import foggerMan from '../assets/images/fa_shield-me-fogger-with-man.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle} from '@fortawesome/free-solid-svg-icons'
import ScrollAnimation from 'react-animate-on-scroll';

function disinfectingProcedure() {
    return (
        <div className="dpContainer">
            <Container>
                <Row>
                    <Col md="8" sm="12">
                        <ScrollAnimation  animateIn="fadeInLeft" animateOnce={true}>
                        <div className="dpImageContainer">
                            <img alt="" src={foggerMan} />
                        </div>
                        </ScrollAnimation>
                    </Col>
                    <Col md="4" sm="12">
                        <div>
                        <ScrollAnimation  animateIn="fadeInRight" animateOnce={true}>
                            <h2>Disinfecting Procedure</h2>
                            </ScrollAnimation>
                            <span className="d-inline-flex">
                            <ScrollAnimation  animateIn="fadeInRight" animateOnce={true} delay={200}>
                                <span className="checkCircle mr-2"><FontAwesomeIcon icon={faCheckCircle} /></span>
                                <p>Unique hose design, swing to any angle , instant switch on/off, high efficiency, convinient</p>
                                </ScrollAnimation>
                            </span>
                            <span className="d-inline-flex">
                            <ScrollAnimation  animateIn="fadeInRight" animateOnce={true} delay={400}>
                                <span className="checkCircle mr-2"><FontAwesomeIcon icon={faCheckCircle} /></span>
                                <p>High efficiency spraying, save solution and labor</p>
                                </ScrollAnimation>
                            </span>
                            <span className="d-inline-flex">
                            <ScrollAnimation  animateIn="fadeInRight" animateOnce={true} delay={600}>
                                <span className="checkCircle mr-2"><FontAwesomeIcon icon={faCheckCircle} /></span>
                                <p>Rotating sprayer without any blocking.</p>
                                </ScrollAnimation>
                            </span>
                            <span className="d-inline-flex">
                            <ScrollAnimation  animateIn="fadeInRight" animateOnce={true} delay={800}>
                                <span className="checkCircle mr-2"><FontAwesomeIcon icon={faCheckCircle} /></span>
                                <p>Air pressure auto-locking spray head to prevent leakage.</p>
                            </ScrollAnimation>
                            </span>
                            <span className="d-inline-flex">
                            <ScrollAnimation  animateIn="fadeInRight" animateOnce={true} delay={1000}>
                                <span className="checkCircle mr-2"><FontAwesomeIcon icon={faCheckCircle} /></span>
                                <p>High-power motor, high speed spraing</p>
                                </ScrollAnimation>
                            </span>
                        </div>
                    </Col>
                    
                </Row>
            </Container>
        </div>
    )
}

export default disinfectingProcedure
