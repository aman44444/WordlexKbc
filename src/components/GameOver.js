import React, { useContext } from "react";
import { AppContext } from "../App";

const GameOver = () => {
  const { currAttempt, gameOver, correctWord } = useContext(AppContext);

  return (
    <div className="gameOver">
      <h3>
        {gameOver.guessedWord
          ? "You Correctly Guessed the Wordle"
          : "You Failed to Guess the Word"}
      </h3>
      {gameOver.guessedWord && (
        <h3>You guessed in {currAttempt.attempt} attempts</h3>
      )}
      <h1>Correct Word: {correctWord}</h1>
    </div>
  );
};

export default GameOver;
