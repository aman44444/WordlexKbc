import React, { useState} from "react";
import { useLifeline } from "./useLifeLineState";
import { useGame } from "../../../Context/GameContext";


export default function Fiftyfifty() {
  const { board, currAttempt, setBoard, setCurrAttempt, correctWord,gameOver } =
    useGame();

    const { disabled, disable } = useLifeline("fiftyfifty");
  const [label, setLabel] = useState("50:50");

  const handleClick = () => {
    
    if (disabled || gameOver.gameOver) return;
 
     const rowIndex = currAttempt.attempt;
    if (rowIndex < 0 || rowIndex >= board.length) return;

     const revealedLetters = correctWord
      .slice(0, 3)
      .toUpperCase()
      .split("");
  
     const updatedBoard = board.map((row, index) =>
      index === rowIndex
        ? row.map((cell, i) => revealedLetters[i] ?? cell)
        : row
    );

    setBoard(updatedBoard);
    setCurrAttempt((prevAttempt) => ({
      ...prevAttempt,
      letter: Math.max(prevAttempt.letter, 3),
    }));
     setLabel(correctWord.toUpperCase());
    disable();
  };

  return (
    <button className="lifeline" disabled={disabled} onClick={handleClick} type="button">
      {label}
    </button>
  );
}
