import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'

const Header = () => {
    return (
        <div>
           <Jumbotron fluid>
            <Container>
                <h1>ITAM4Code</h1>
                <p>
                This is a modified jumbotron that occupies the entire horizontal space of
                its parent.
                </p>
            </Container>
            </Jumbotron>
        </div>
    )
}

export default Header
