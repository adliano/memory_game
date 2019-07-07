import React from 'react'
import Card from 'react-bootstrap/Card'
import './style.css'

export function ImageContainer (props) {
  return <div className='container my-5'>{props.children}</div>
}

export function Image (props) {
  return (
    <Card style={{ width: '25%' }} className='m-3 p-2 bg-secondary'>
      <Card.Img variant='top' src={props.src} />
    </Card>
  )
}
