import React from "react";
import "../../style/./Instructions.css";

const Instructions = ({ close }) => {
  const handleClick = (event) => {
    event.stopPropagation();
  };

  return (
    <div className="modal" onClick={handleClick}>
      <div className="overlay">
        <div className="rules">
          <button
            className="closebtn"
            onClick={() => {
              close(false);
            }}
          >
            X
          </button>
          <p>HOW TO PLAY</p>
          <section>
            <div>
              <p>
                <strong>Objective:</strong> Guess the <strong>WORDLE</strong> in
                6 tries.
              </p>
              <p>
                Each guess must be a valid 5-letter word. Hit the Enter button
                to submit.
              </p>
              <p>
                After each guess, the color of the tiles will change to show how
                close your guess was to the word.
              </p>

              <h3>Gameplay:</h3>
              <p>
                This is a 7-day game. If you lose, you will have to start from
                day 1. There will be prizes after completing day 3, day 5, and
                day 7.
              </p>

              <h3>Lifelines:</h3>
              <p>
                <strong>50:50:</strong> Get half of the word of the day
                revealed. You can use this lifeline only once in a 7-day game.
              </p>
              <p>
                <strong>FLIP:</strong> Change the word of the day and get a
                clean board. You can use this lifeline only once in a 7-day
                game.
              </p>
              <p>
                <strong>Double Dip (DD):</strong> Get one more chance to guess
                the word. You can use this lifeline only once in a 7-day game.
              </p>

              <h3>New Word:</h3>
              <p>
                <strong>A new WORDLE will be available each day!</strong>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
export default Instructions;
