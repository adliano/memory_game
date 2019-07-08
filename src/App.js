/* Notes at EOF */
/**
 * Adriano Alves
 * Jul 6 2019
 */
import React, { Component } from 'react'
import './App.css'
import { NavBarComp } from './components/NavBarComp'
import { ImageContainer, Image } from './components/ImageContainer'
import HeaderComp from './components/HeaderComp'

class App extends Component {
  /**
   * State
   */
  state = {
    characters: []
  }
  /**
   * Reload Game Method
   * This will reload game when it start and after game over
   */
  reloadGame = () => {
    fetch('assets/data/data.json')
      .then(response => response.json())
      .then(results => {
        this.setState({ characters: results })
      })
      .catch(err => console.log(err))
  }
  /**
   * componentDidMount
   * This method is called after components where mount
   */
  componentDidMount () {
    this.reloadGame()
  }
  /**
   * renderCharacters()
   * This method will render images
   * TODO: Create a logic to random images after user
   * click an image
   */
  renderCharacters = () => {
    let _characters = this.state.characters.map(character => (
      <Image src={character.image} />
    ))

    return _characters
  }
  /**
   * Render Page
   */
  render () {
    return (
      // Using React Fragment <> </>
      <>
        <NavBarComp
          applicationName='Memory Game'
          text='change this later'
          score='11'
          topscore='99'
        />
        <HeaderComp />
        <ImageContainer>{this.renderCharacters()}</ImageContainer>
      </>
    )
  }
}

export default App

/*
********************* NOTES *********************
Adding Assets Outside of the Module System
https://facebook.github.io/create-react-app/docs/using-the-public-folder
In this approach assets/images/ will be placed at public/ dir and
we will use `process.env.PUBLIC_URL` to access it
*/
