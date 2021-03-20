import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Square from './Square'
    
const Menu = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col><Square name="Curso de Git"></Square></Col>
                    <Col><Square></Square></Col>
                    <Col><Square></Square></Col>
                </Row>
            </Container>
        </div>
    )
}

export default Menu
