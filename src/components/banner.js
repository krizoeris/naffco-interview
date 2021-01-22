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
                    <Col md="auto" sm="12">
                        <div className="animate__animated animate__fadeInDown animate__delay-500ms">
                            <img alt="" src={promo1} className="promo1"/>
                        </div>
                        <div>
                            <div className="animate__animated animate__fadeInUp">
                                <img alt="" src={logo} width="250px" />
                            </div>
                            <div className="animate__animated animate__fadeInUp animate__delay-500ms">
                                <div className="bannerHeaderContainer">
                                    <h1 className="bannerHeader">{"Sanitizing\n Fogger"}</h1>
                                </div>
                            </div>
                            <div className="animate__animated animate__fadeInUp animate__delay-1000ms">
                                <div className="bannerDescContainer">
                                    <p>Designed to counter the serious world health emergency situation and create a solution athat can be of public value</p>
                                    <p className="mb-4">Disinfection fogger has a unique hose design that can adapt to any angle, which allows you to a cover every inch of the room when going through the process</p>
                                    <div className="animate__animated animate__fadeInUp animate__delay-1500ms">
                                        <a href="/" className="bannerButton">BUY ON AMAZON</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </Col>
                    <Col md="auto" sm="12">
                        <div className="productsContainer">
                            <div className="productsCircle">
                                <div className="animate__animated animate__fadeInRight animate__delay-1000ms">
                                    <img alt="" src={circle} />
                                </div>
                            </div>
                            
                            <div className="productsProduct">
                                <div className="animate__animated animate__fadeInRight animate__delay-1500ms">
                                    <img alt="" src={Product} />
                                </div>
                            </div>
                            <div className="productspromo2">
                                <div className="animate__animated animate__fadeInUp animate__delay-1500ms">
                                    <img alt="" src={promo2} />
                                </div>
                            </div>
                            <div className="productssafeForHumanR">
                                <div className="animate__animated animate__fadeInUp animate__delay-1600ms">
                            	    <img alt="" src={safeForHumanR}/>
                                </div>
                            </div>
                            <div className="productsecoFriendlyR">
                                <div className="animate__animated animate__fadeInUp animate__delay-1700ms">
                                    <img alt="" src={ecoFriendlyR} />
                                </div>
                            </div>
                            <div className="productsnonAlcoholicR">
                                <div className="animate__animated animate__fadeInUp animate__delay-1800ms">
                                    <img alt="" src={nonAlcoholicR} />
                                </div>
                            </div>
                            <div className="productsnaturalR">
                                <div className="animate__animated animate__fadeInUp animate__delay-1900ms">
                                    <img alt="" src={naturalR} />
                                </div>
                            </div>
                            <div class="productskillsBacteriaR">
                                <div className="animate__animated animate__fadeInUp animate__delay-2000ms">
                                    <img alt="" src={killsBacteriaR} />
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default banner
