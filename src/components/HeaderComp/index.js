import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'

import './style.css'

export default function HeaderComp(props) {
    return (
        <Jumbotron fluid className='jumbotron text-light'>
            <Container className='my-5 py-5 mx-auto' >
                <h1>Memory Game</h1>
                <h3>Click on an image to earn points, but don't click on any more than once!</h3>
            </Container>
        </Jumbotron>
    )
}
