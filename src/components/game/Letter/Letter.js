import React, { useEffect } from "react";
import "../Letter/Letter.css"
import { useGame } from "../../../Context/GameContext";

const Letter = ({ letterPos, attemptVal }) => {
    const { board, currAttempt, setDisabledLetters, correctWord } =
    useGame();

  const letter = board[attemptVal][letterPos];
  const correct = correctWord.toUpperCase()[letterPos] === letter;
  const almost =
    !correct && letter !== "" && correctWord.toUpperCase().includes(letter);
  const letterState =
    currAttempt.attempt > attemptVal &&
    (correct ? "correct" : almost ? "almost" : "error");

  useEffect(() => {
    if (
      letter !== "" &&
      currAttempt.attempt > attemptVal &&
      !correct &&
      !almost
    ) {
      console.log(letter);
      setDisabledLetters((prev) => [...prev, letter]);
    }
  }, [letter, currAttempt.attempt]);

  return (
    <div className={`letter ${letterState ? letterState : ""}`} >
      {letter}
    </div>
  );
};

export default Letter;
