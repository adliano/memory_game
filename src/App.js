// Using State Hook
// https://reactjs.org/docs/hooks-state.html
import React, { useState } from 'react';
import './App.css';
import { NavBarComp } from './components/NavBarComp' 
import HeaderComp from './components/HeaderComp'

function App() {
  // Declare new state using Hooks
  const [score, setScore] = useState(0)
  const [topScore, setTopScore] = useState(0)

  return (
    // Using Fragment <> </>
    <>
    <NavBarComp applicationName='Memory Game'/>
    <HeaderComp />
    <div className='container'>
    </div>
    </>
  );
}

export default App;
