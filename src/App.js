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


import _ from 'lodash'

class App extends Component {
  /**
   * State
   */
  state = {
    characters: [],
    score: 0,
    topscore: 0
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
  // TODO: Implement this method
  OnCardClick = event => {
    // Save the instance of the clicked element
    const elementClicked = event.target
    /// / DEBUGGING \\\\
    console.log(elementClicked)
    // Check
    // if  card clicked == true reset score to 0 and reload game
    if (this.state.characters[elementClicked.id].clicked) {
      console.log('game over')
      // Reset score
      this.setState({ score: 0 })
      // Reload Game
      this.reloadGame()
    } else {
      // Update character clicked to true
      this.setState({
        characters: this.state.characters.map((element, index) => {
          // typeof index Output 'number' and
          // typeof elementClicked.id Output 'string'
          // Therefor i used parseInt() to void warning about using `==`
          if (index === parseInt(elementClicked.id)) {
            // Using Sprad to give whatever its left from the object 
            return { ...element, clicked: true }
          } else return { ...element }
        })
      })
      // Check if topscore have been reach
      if (this.state.score >= this.state.topscore) {
        this.setState({
          score: this.state.score + 1,
          topscore: this.state.score + 1
        })
      } else {
        // Update Score
        this.setState({ score: this.state.score + 1 })
      }
    }

    console.log(this.state.characters[elementClicked.id])
  }
  /**
   * renderCharacters()
   * This method will render images
   * TODO: Create a logic to random images after user
   * click an image
   */
  renderCharacters = () => {
    let _characters = this.state.characters.map((character, index) => (
      <Image
        src={character.image}
        key={index}
        id={index}
        onClick={this.OnCardClick}
      />
    ))
    /// DEBUGGING \\\
    // Used to show on console if state `clicked` was change to true
    // console.log(this.state.characters)

    
    
    // Better way its using Lowdash to
    // Return shuffle Arrya with <Image/>
    return _.shuffle(_characters)
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
          score={this.state.score}
          topscore={this.state.topscore}
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

// if (!this.state.characters[elementClicked.id].clicked) {
//   this.setState({ characters: this.state.characters.map((element, index) => {
//     // console.log(typeof index)
//     // Output 'number' and
//     // console.log(typeof elementClicked.id)
//     // Output 'string'
//     // Therefor i used parseInt() to void warning about using `==`
//     if(index === parseInt(elementClicked.id)) {
//       return {...element, clicked: true}
//     }
//     else return {...element}
//   })})
// }
// Array.sort() will suffle the array to render cards randolly 
    // The argument is a random number that may be positive or negative, 
    // so will reorders elements randomly.
    // _characters.sort(() => Math.random() - 0.5)
