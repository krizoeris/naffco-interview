import React from 'react'
import './advantages.css'
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle} from '@fortawesome/free-solid-svg-icons'

function advantages() {
    return (
        <div className="advantagesContainer">
        <Container>
            <Row>
                <Col>
                    <h3>Advantages</h3>
                </Col>
                <Col>
                    <div><div className="d-inline-flex">
                    <div className="checkCircle mr-2"><FontAwesomeIcon icon={faCheckCircle} /></div>
                    <p>Maximum hygeine</p>
                    </div></div>
                    <div><div className="d-inline-flex">
                    <div className="checkCircle mr-2"><FontAwesomeIcon icon={faCheckCircle} /></div>
                    <p>Preventing epidemic diseases</p>
                    </div></div>
                    <div><div className="d-inline-flex">
                    <div className="checkCircle mr-2"><FontAwesomeIcon icon={faCheckCircle} /></div>
                    <p>Economical</p>
                    </div></div>
                    <div><div className="d-inline-flex">
                    <div className="checkCircle mr-2"><FontAwesomeIcon icon={faCheckCircle} /></div>
                    <p>Tested</p>
                    </div></div>
                </Col>

                <Col>
                    <div><div className="d-inline-flex">
                    <div className="checkCircle mr-2"><FontAwesomeIcon icon={faCheckCircle} /></div>
                    <p>100% natural, 100% safe, zero chemicals, nontoxic</p>
                    </div></div>
                    <div><div className="d-inline-flex">
                    <div className="checkCircle mr-2"><FontAwesomeIcon icon={faCheckCircle} /></div>
                    <p>Fully-automated, alarming once the tank is empty</p>
                    </div></div>
                    <div><div className="d-inline-flex">
                    <div className="checkCircle mr-2"><FontAwesomeIcon icon={faCheckCircle} /></div>
                    <p>Advanced and quality assured</p>
                    </div></div>
                    <div><div className="d-inline-flex">
                    <div className="checkCircle mr-2"><FontAwesomeIcon icon={faCheckCircle} /></div>
                    <p>Eco-friendly</p>
                    </div></div>
                </Col>
                <Col></Col>
            </Row> 
        </Container>
        </div>
    )
}

export default advantages
