import React, { useContext } from 'react'
import { AppContext } from '../App'
import Lifeline from './navbuttons/Lifeline'
import Rules from './navbuttons/Rules'
import Stats from './navbuttons/Stats'
import "../style/./Navbar.css"

const Navbar = () => {

   const {gameOver,} = useContext(AppContext)
     
   return (
      <nav>
         <div className='in-progress'><p>Work in Progress</p></div>
         <div className="animate__bounceIn">
            
            <h1 id='wordle'>Wordle </h1>
            <p>x</p>
            <h1 id={gameOver.guessedWord ? "kbcwin" : "kbc"}>KBC</h1>

         </div>
         <div className='nav-buttons' >
            <Rules/>
            <Lifeline />
            <Stats />
         
         </div>

      </nav>

   );
}

export default Navbar;
