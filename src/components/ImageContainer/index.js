import React from 'react'
import Card from 'react-bootstrap/Card'
import './style.css'


// import { _img } from '../../images/poe.png'


export function ImageContainer (props) {
  return <div className='container my-5'>{props.children}</div>
}

export function Image (props) {
  return (
    // id set for card and image in case user click on card still going to work
    <Card style={{ width: '25%' }} className='m-3 p-2 bg-secondary' id={props.id} onClick={props.onClick}>
      <Card.Img variant='top' src={props.src} id={props.id}/>
      {/* <Card.Img variant='top' character={require('../../images/poe.png')} /> */}
    </Card>
  )
}
