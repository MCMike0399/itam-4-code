import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import './Header.css'

const Header = () => {
    return (
        <div>
           <Jumbotron fluid>
            <Container>
                <h1 className="Título">ITAM-FOR-CODE</h1>
                <p>
                ITAM-4-Code es una OE que busca fomentar la creación de proyectos de código abierto. 
                </p>
            </Container>
            </Jumbotron>
        </div>
    )
}

export default Header
