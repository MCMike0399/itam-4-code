import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Square from './Square'
    
const Menu = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col><Square name="Curso de Git" color=
                    "black-btn" texto="Introducción al curso de git." ></Square></Col>
                    <Col><Square name="Curso de Terminal" color=
                    "purple-btn"  ></Square></Col>
                    <Col><Square name="Curso de Python" color=
                    "green-btn"  ></Square></Col>
                </Row>
            </Container>
        </div>
    )
}

export default Menu
