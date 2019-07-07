// Using State Hook
// https://reactjs.org/docs/hooks-state.html
import React, { useState } from 'react';
import './App.css';
import { NavBarComp } from './components/NavBarComp' 
import { ImageContainer, Image } from './components/ImageContainer'
import HeaderComp from './components/HeaderComp'
// import Container from 'react-bootstrap/Container'

function App() {
  // Declare new state using Hooks
  const [score, setScore] = useState(0)
  const [topScore, setTopScore] = useState(0)

  const imgs = [
    './images/bg_image.png',
    './images/bg_image.png',
    './images/bg_image.png',
    './images/bg_image.png',
    './images/bg_image.png',
    './images/bg_image.png',
    './images/bg_image.png',
    './images/bg_image.png',
    './images/bg_image.png',
    './images/bg_image.png',
    './images/bg_image.png',
    './images/bg_image.png',
    './images/bg_image.png',
  ]

  return (
    // Using Fragment <> </>
    <>
    <NavBarComp applicationName='Memory Game'/>
    <HeaderComp />
    <ImageContainer>
      <Image/>
      <Image/>
      <Image/>
      <Image/>
      <Image/>
      <Image/>
      <Image/>
      <Image/>
      <Image/>
      <Image/>
      <Image/>
      <Image/>
    </ImageContainer>
    </>
  );
}

export default App;
