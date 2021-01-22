import React from 'react'
import './social.css'
import { Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faLinkedin, faYoutube, faInstagram, faTwitter} from '@fortawesome/free-brands-svg-icons'
import ScrollAnimation from 'react-animate-on-scroll'

function social() {
    return (
        <div className="socialContainer">
            <Container>
                <div>
                    <ScrollAnimation  animateIn="fadeInRight" animateOnce={true}>
                        <h2>STAY SAFE,</h2>
                    </ScrollAnimation>
                    <ScrollAnimation  animateIn="fadeInLeft" animateOnce={true}>
                        <h2>STAY CONNECTED</h2>
                        </ScrollAnimation>
                </div>
                <div className="linksContainer">
                    <ScrollAnimation  animateIn="fadeIn" animateOnce={true}>
                    <a href="/" className="linkBtn">
                        <div>
                            <FontAwesomeIcon icon={faFacebookF} />
                        </div>
                    </a>
                    </ScrollAnimation>
                    <ScrollAnimation  animateIn="fadeIn" animateOnce={true} delay={200}>
                    <a href="/" className="linkBtn">
                        <div>
                            <FontAwesomeIcon icon={faLinkedin} />
                        </div>
                    </a>
                    </ScrollAnimation>
                    <ScrollAnimation  animateIn="fadeIn" animateOnce={true} delay={400}>
                    <a href="/" className="linkBtn">
                        <div>
                            <FontAwesomeIcon icon={faYoutube} />
                        </div>
                    </a>
                    </ScrollAnimation>
                    <ScrollAnimation  animateIn="fadeIn" animateOnce={true} delay={600}>
                    <a href="/" className="linkBtn">
                        <div>
                            <FontAwesomeIcon icon={faInstagram} />
                        </div>
                    </a>
                    </ScrollAnimation>
                    <ScrollAnimation  animateIn="fadeIn" animateOnce={true} delay={800}>
                    <a href="/" className="linkBtn">
                        <div>
                            <FontAwesomeIcon icon={faTwitter} />
                        </div>
                    </a>
                    </ScrollAnimation>
                </div>
            </Container>
        </div>
    )
}

export default social
