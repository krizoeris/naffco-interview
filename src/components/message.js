import React from 'react'
import {TextField, Button} from '@material-ui/core'
import { Container } from 'react-bootstrap'

function message() {
    return (
        <div>
            <Container>
            <form noValidate autoComplete="off">
                <TextField id="standard-basic" label="Name" fullWidth />
                <TextField id="standard-basic" label="Email" fullWidth />
                <TextField id="standard-basic" label="Contact Number" fullWidth />
                <TextField id="standard-multiline-flexible" label="Multiline" multiline rows="4" fullWidth />
            </form>
            </Container>
        </div>
    )
}

export default message
