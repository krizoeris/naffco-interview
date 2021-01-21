import React from 'react'
import './social.css'
import { Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faLinkedin, faYoutube, faInstagram, faTwitter} from '@fortawesome/free-brands-svg-icons'

function social() {
    return (
        <div className="socialContainer">
            <Container>
                <div>
                    <h2>STAY SAFE,</h2>
                    <h2>STAY CONNECTED</h2>
                </div>
                <div className="linksContainer">
                    <a href="/" className="linkBtn">
                        <div>
                            <FontAwesomeIcon icon={faFacebookF} />
                        </div>
                    </a>
                    <a href="/" className="linkBtn">
                        <div>
                            <FontAwesomeIcon icon={faLinkedin} />
                        </div>
                    </a>
                    <a href="/" className="linkBtn">
                        <div>
                            <FontAwesomeIcon icon={faYoutube} />
                        </div>
                    </a>
                    <a href="/" className="linkBtn">
                        <div>
                            <FontAwesomeIcon icon={faInstagram} />
                        </div>
                    </a>
                    <a href="/" className="linkBtn">
                        <div>
                            <FontAwesomeIcon icon={faTwitter} />
                        </div>
                    </a>
                </div>
            </Container>
        </div>
    )
}

export default social
