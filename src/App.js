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
   * OnCardClick()
   */
  OnCardClick = (event) => {
    
    // TODO: Implement this method
    const elementClicked = event.target

    console.log(elementClicked)
    // Check 
    if (!this.state.characters[elementClicked.id].clicked) {
      this.setState({ characters: this.state.characters.map((element, index) => {
        if(index == elementClicked.id) {
          return {...element, clicked: true}
        }
        else return {...element}
      })})

      
    }
    
    console.log(this.state.characters[elementClicked.id])

    // if  card clicked == true reset score to 0 and reload game
    // else updat score and render card randonly
    // Also need to checl if top score was reached

  }
  /**
   * renderCharacters()
   * This method will render images
   * TODO: Create a logic to random images after user
   * click an image
   */
  renderCharacters = () => {
    let _characters = this.state.characters.map((character, index) => (
      <Image src={character.image} key={index} id={index} onClick={this.OnCardClick}/>
    ))

    /// DEBUGGING \\\
    // Used to show on console if state `clicked` was change to true
    console.log(this.state.characters)
    
    // Return Arrya with <Image/>
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
we can use fetch() to access it.
also we can use `process.env.PUBLIC_URL`, `window.location` to access 
images from assets/images/

sample of character json
{
    "image": "./assets/images/chewbacca.png", "clicked": false
}
*/
