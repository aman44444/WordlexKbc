import React, { useContext, useEffect } from "react";
import { AppContext } from "../../../App";
import "../Letter/Letter.css"

const Letter = ({ letterPos, attemptVal }) => {
  const { board, currAttempt, setDisabledLetters, correctWord } =
    useContext(AppContext);

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
    <div className="letter" id={letterState}>
      {letter}
    </div>
  );
};

export default Letter;
