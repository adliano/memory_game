/* Notes at EOF */
/**
 * Adriano Alves
 * Jul 6 2019
 * https://clicky-game.netlify.com/
 * https://github.com/gitname/react-gh-pages
 */
import React, { Component } from 'react'
import './App.css'
import { NavBarComp, NavPill, PillContainer } from './components/NavBarComp'
// import Navbar from 'react-bootstrap/Navbar'
import { ImageContainer, Image } from './components/ImageContainer'
import HeaderComp from './components/HeaderComp'
// Lowdash used to shuffle array
import _ from 'lodash'

class App extends Component {
  /**
   * State
   */
  state = {
    characters: [],
    score: 0,
    topscore: 0,
    navbarMsg: 'Click an image to begin!'
  }
  /**
   * Reload Game Method
   * This will reload game when it start and after game over
   * Fetch used in case need to get data from some database in future
   */
  reloadGame = () => {
    fetch('assets/data/data.json')
      .then(response => response.json())
      .then(results => {
        this.setState({ 
          characters: results,
          score: 0, 
          navbarMsg: 'You guessed incorrectly!',
        })
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
   * This will handle the logic when user click on image card
   */
  OnCardClick = event => {
    // Save the instance of the clicked element
    const elementClicked = event.target
    // Check
    // if  card clicked === true reset score to 0 and reload game
    if (this.state.characters[elementClicked.id].clicked) {
      // GameOver, Reload Game will reset score
      this.reloadGame()
    } else {
      // User got a point
      let updatedCharacters = this.state.characters.map((element, index) => {
        // typeof index Output 'number' and
        // typeof elementClicked.id Output 'string'
        // Therefor i used parseInt() to void warning about using `==`
        if (index === parseInt(elementClicked.id)) {
          // Using Sprad to give whatever its left from the object
          return { ...element, clicked: true }
        } else return { ...element }
      })

      let updatedScore = this.state.score + 1;
      let updatedTopScore = Math.max(updatedScore, this.state.topscore)

      this.setState({
        characters: updatedCharacters,
        score: updatedScore,
        topscore: updatedTopScore,
        navbarMsg: 'You guessed correctly!'
      })
    }
  }
  /**
   * renderScores()
   * This method will render the score and top score
   */
  renderScores = ({score, topscore}) => {
    return(
      <PillContainer>
        <NavPill text='Score' bg='bg-success'>{score}</NavPill>
        <NavPill text='Top Score' bg='bg-primary'>{topscore}</NavPill>
      </PillContainer>
    )
  }
  /**
   * renderCharacters()
   * This method will render images cards
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

    // Using Lowdash to Return shuffle Array with <Image/>
    // https://github.com/lodash/lodash/blob/4ea8c2ec249be046a0f4ae32539d652194caf74f/shuffle.js
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
          fixed='top'
          brandName='Memory Game'
          text={this.state.navbarMsg}
          pills={this.renderScores(this.state)}
        />
        <HeaderComp />
        <ImageContainer>{this.renderCharacters()}</ImageContainer>
        <NavBarComp brandName='@Memory Game'/>
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

