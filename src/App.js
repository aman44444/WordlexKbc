import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Board from "./components/game/Board/Board";
import Keyboard from "./components/game/Keyboard/Keyboard";
import GameOver from "./components/game/GameOver";
import Prize from "./Prize";

import { GameProvider, useGame } from "./Context/GameContext";
import { ProgressProvider } from "./Context/ProgressContext";
import { UIProvider, useUI } from "./Context/UIContext";
import useGameActions from "./hooks/useGameActions";
import { AuthProvider } from "./Context/AuthContext";

function GameShell() {
  const { alert, prize, setPrize } = useUI();
  const onEnter = useGameActions();
  const { gameOver } = useGame();

  return (
    <>
      {alert && <div className="alert">{alert}</div>}
      <Navbar />
      <div className="game">
        <Board />
        {gameOver.gameOver ? <GameOver /> : <Keyboard onEnter={onEnter} />}
        {prize && <Prize close={setPrize} />}
      </div>
    </>
  );
}

export default function App() {
  return (
    <div className="App">
      <AuthProvider>
        <GameProvider>
          <ProgressProvider>
            <UIProvider>
              <GameShell />
            </UIProvider>
          </ProgressProvider>
        </GameProvider>
      </AuthProvider>
    </div>
  );
}
