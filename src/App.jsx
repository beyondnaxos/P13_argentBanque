import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Routing from './routes.jsx'

/**
 * 
 * @returns {JSX.Element} A JSX App component.
 * @component
 * @name App
 */

function App() {

  return (
    <div className="App">
      <Routing />
    </div>
  )
}

export default App
