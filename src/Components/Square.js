import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Square.css'
import gitHubIcon from '../assets/Octocat.png'

const Square = (props) => {
    return (
        <div>
            <Card className='tarjetas' tyle={{ width: '18rem' }}>
            <Card.Img  img={gitHubIcon}/>
            <Card.Body >
                <Card.Title className='texto'>{props.name}</Card.Title>
                <Card.Text className='texto'>
                {props.texto}
                    
                </Card.Text>
                <Button bsPrefix={props.color} >Ir al curso</Button>
            </Card.Body>
            </Card>
        </div>
    )
}

export default Square
