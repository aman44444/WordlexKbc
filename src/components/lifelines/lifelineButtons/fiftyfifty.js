import React, { useState, useContext } from "react";
import { AppContext } from "../../../App";

export default function Fiftyfifty() {
  const [label, setLabel] = useState("50:50");
  const { board, currAttempt, setBoard, setCurrAttempt, correctWord,gameOver } =
    useContext(AppContext);

  const handleClick = (event) => {
    event.stopPropagation();
    if (gameOver.gameOver) return;

    const updatedBoard = [...board];
    const wordArray = correctWord.slice(0, 3).toUpperCase().split("");

    wordArray.forEach((letter, index) => {
      updatedBoard[currAttempt.attempt][index] = letter;
    });

    setBoard(updatedBoard);
    setCurrAttempt((prevAttempt) => ({
      ...prevAttempt,
      letter: prevAttempt.letter + 3,
    }));
    setLabel(correctWord);
    event.currentTarget.id = "dis";
  };

  return (
    <div className="lifeline" onClick={handleClick} id="">
      {label}
    </div>
  );
}
