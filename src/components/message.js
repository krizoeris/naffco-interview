import React from 'react'
import './message.css'
import {TextField, Button} from '@material-ui/core'
import { Container } from 'react-bootstrap'
import productImage from '../assets/images/contact-info-image-min.png'

function message() {
    return (
        <div>
            <Container>
                <div className="messageCard d-flex">
                    <form className="p-4" noValidate autoComplete="off">
                        <h3>Send Us A Message</h3>
                        <TextField id="standard-basic" label="Name" fullWidth />
                        <TextField id="standard-basic" label="Email" fullWidth />
                        <TextField id="standard-basic" label="Contact Number" fullWidth />
                        <TextField id="standard-multiline-flexible" label="Multiline" multiline rows="4" fullWidth />
                        <div className="mt-4">
                        <Button variant="contained" color="primary">
                            Send
                        </Button>
                        </div>
                    </form>
                    <div className="messageCardSide">
                        <div >
                            <p className="textContent">Contact Info</p>
                            <p className="textContent">info@shieldmeglobal.com</p>
                        </div>
                        <img src={productImage} />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default message
