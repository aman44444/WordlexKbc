import ModalWrapper from "../ModalWrapper";

const Instructions = ({close}) => {
  return (
   <ModalWrapper close={close}>
        <h1 className="instructions-heading">HOW TO PLAY</h1>
          <section className="instructions-details">
            <div>
            <p>
                <strong>About the Game:</strong> This game is a unique mix of{" "}
                <strong>Wordle</strong> and the popular Indian television show{" "}
                <strong>Kaun Banega Crorepati (KBC)</strong>, which is the
                Indian version of "Who Wants to Be a Millionaire." Your goal is
                to guess the correct word while using lifelines inspired by KBC
                to help you along the way.
              </p>
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

              <h2 className="instructions-subheading">Gameplay:</h2>
              <p>
                This is a 7-day game. If you lose, you will have to start from
                day 1. There will be prizes after completing day 3, day 5, and
                day 7.
              </p>

              <h2 className="instructions-subheading">Lifelines:</h2>
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
              <p >
                <strong className="newWord">A new WORDLE will be available each day!</strong>
              </p>
            </div>
          </section>
   </ModalWrapper>
  );
};
export default Instructions;


