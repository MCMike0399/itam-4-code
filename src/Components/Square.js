import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Square.css'
import '../assets/github.jpg'

const Square = (props) => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="../assets/github.jpg" />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>
                {props.texto}
                </Card.Text>
                <Button bsPrefix={props.color} >Go Somewhere</Button>
            </Card.Body>
            </Card>
        </div>
    )
}

export default Square
