import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'


export function NavBarComp (props) {
  return (
    <Navbar bg='secondary' variant='dark' expand="lg">
      <Navbar.Brand href='/' className='text-light'><h2>{props.applicationName}</h2></Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Text className='mx-auto text-light'>
          <h2>Click an Image to begin</h2>
        </Navbar.Text>
        <Nav variant='pills'>
          <Nav.Item className='text-light bg-success p-3 m-1 rounded-pill'>
            <h3>Score: { props.score || 0 }</h3>
          </Nav.Item>
          <Nav.Item className='text-light bg-primary p-3 m-1 rounded-pill'>
            <h3>Top Score: { props.topScore || 0 }</h3>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
