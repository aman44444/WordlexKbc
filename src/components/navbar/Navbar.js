import Lifeline from "./NavbarButtons/Lifeline";
import Rules from "./NavbarButtons/Rules";
import "../navbar/Navbar.css"
import Settings from "../Settings/Settings";
import { useGame } from "../../Context/GameContext";

const Navbar = () => {
    const { gameOver } = useGame();

  return (
    <nav>
      <div className="in-progress">
        <p>Work in Progress</p>
      </div>
      <div className="animate__bounceIn">
        <h1 id="wordle">Wordle </h1>
        <span aria-hidden="true">x</span>
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
