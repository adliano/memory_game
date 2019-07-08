import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

// Navbar component
export function NavBarComp (props) {
  return (
    <Navbar bg='secondary' variant='dark' expand='lg' fixed='top'>
      <Navbar.Brand href='/' className='text-light'>
        <h2>{props.applicationName}</h2>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Text className='mx-auto text-light'>
          <h2>{props.text}</h2>
        </Navbar.Text>
        <Nav variant='pills'>
          <NavPill text='Score' bg='bg-success'>
            {props.score || 0}
          </NavPill>
          <NavPill text='Top Score' bg='bg-primary'>
            {props.topscore || 0}
          </NavPill>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
// Navbar Pill used to display scores
export function NavPill (props) {
  return (
    <Nav.Item className={`text-light p-1 m-1 rounded-pill ${props.bg}`}>
      <h3 className='px-4'>
        {props.text}: {props.children}
      </h3>
    </Nav.Item>
  )
}
