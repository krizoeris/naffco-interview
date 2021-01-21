import React from 'react'
import './banner.css'
import { Container, Row, Col } from 'react-bootstrap'
import logo from '../assets/images/shieldme-logo.png'
import promo1 from '../assets/images/Fogger-Offer.png'
import promo2 from '../assets/images/Price-Fogger.png'
import circle from '../assets/images/shape-3-1.png'
import Product from '../assets/images/sanitizing-fogger-w-5Ls.png'
import safeForHumanR from '../assets/images/icons/safe-for-humans-b-round.png'
import ecoFriendlyR from '../assets/images/icons/eco-friendly-b-round.png'
import nonAlcoholicR from '../assets/images/icons/non-alcoholic-b-round.png'
import naturalR from '../assets/images/icons/natural-b-round.png'
import killsBacteriaR from '../assets/images/icons/kills-bacteria-b-round.png'

function banner() {
    return (
        <div className="bannerContainer">
            <Container>
                <Row>
                    <Col lg="1" md="0" />
                    <Col>
                        <img src={promo1} className="promo1"/>
                        <div>
                            <img src={logo} width="250px" />
                            <div className="bannerHeaderContainer">
                                <h1 className="bannerHeader">{"Sanitizing\n Fogger"}</h1>
                            </div>
                            <div className="bannerDescContainer">
                                <p>Designed to counter the serious world health emergency situation and create a solution athat can be of public value</p>
                                <p className="mb-4">Disinfection fogger has a unique hose design that can adapt to any angle, which allows you to a cover every inch of the room when going through the process</p>
                                <a href="#" className="bannerButton">BUY ON AMAZON</a>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="productsContainer">
                            <div className="productsCircle">
                                <img src={circle} />
                            </div>
                            <div className="productsProduct">
                                <img src={Product} />
                            </div>
                            <div className="productspromo2">
                                <img src={promo2} />
                            </div>
                            <div className="productssafeForHumanR">
                            	<img src={safeForHumanR}/>
                            </div>
                            <div className="productsecoFriendlyR">
                                <img src={ecoFriendlyR} />
                            </div>
                            <div className="productsnonAlcoholicR">
                                <img src={nonAlcoholicR} />
                            </div>
                            <div className="productsnaturalR">
                                <img src={naturalR} />
                            </div>
                            <div class="productskillsBacteriaR">
                                <img src={killsBacteriaR} />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default banner
