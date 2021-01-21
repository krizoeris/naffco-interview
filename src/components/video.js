import React from 'react'
import './video.css'
import foggerMan from '../assets/images/sanitizing-fogger-bg-w-man.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay} from '@fortawesome/free-solid-svg-icons'

function video() {
    return (
        <div className="videoContainer" style={{background: `url(${foggerMan}) no-repeat`}}>
            <a href="/" className="playBtn">
                <div>
                	<FontAwesomeIcon icon={faPlay} />
                </div>
            </a>
        </div>
    )
}

export default video
