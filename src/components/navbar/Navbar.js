import React, { useContext } from "react";
import { AppContext } from "../../App";
import Lifeline from "./NavbarButtons/Lifeline";
import Rules from "./NavbarButtons/Rules";
import Stats from "./NavbarButtons/Stats";
import "../navbar/Navbar.css"
import Settings from "./NavbarButtons/Settings";

const Navbar = () => {
  const { gameOver } = useContext(AppContext);

  return (
    <nav>
      <div className="in-progress">
        <p>Work in Progress</p>
      </div>
      <div className="animate__bounceIn">
        <h1 id="wordle">Wordle </h1>
        <p>x</p>
        <h1 id={gameOver.guessedWord ? "kbcwin" : "kbc"}>KBC</h1>
      </div>
      <div className="nav-buttons">
        <Rules />
        <Lifeline />
        <Settings/>
      </div>
    </nav>
  );
};

export default Navbar;
