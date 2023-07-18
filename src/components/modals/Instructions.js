import React from 'react';

const Instructions = ({close}) => {

    function handleClick(event) {
        event.stopPropagation();
    }
    return (
        <div className='modal' onClick={handleClick}>
        <div className='overlay'>
        <div className='rules'>
            <button className='closebtn' onClick={() => {
                close(false)
            }}>X</button>
            <p>HOW TO PLAY</p>
                <section>
                    <div>
                        <p>
                            "Guess the"
                            <strong>WORDLE</strong>
                            "in 6 tries"
                        </p>
                        <p>Each guess must be a valid 5-letter word. Hit the enter button to submit.</p>
                        <p>After each guess, the color of the tiles will change to show how close your guess was to the word.</p>
                        <div>
                            <p><strong>Examples</strong></p>
                            <div>
                                <div>W</div>
                                <div>E</div>
                                <div>A</div>
                                <div>R</div>
                                <div>Y</div>
                                <p>The letter<strong>W</strong> is in the word and in the correct spot.</p>
                            </div>
                            <div>
                                <div>P</div>
                                <div>I</div>
                                <div>L</div>
                                <div>L</div>
                                <div>S</div>
                                <p>The letter<strong>I</strong> is in the word but in the wrong spot.</p>
                            </div>
                            <div>
                                <div>V</div>
                                <div>A</div>
                                <div>G</div>
                                <div>U</div>
                                <div>E</div>
                                <p>The letter <strong>U</strong> is not in the word in any spot.</p>
                            </div>
                        </div>
                        <p><strong>A new WORDLE will be available each day!</strong></p>
                    </div>
                </section>
            </div>
        </div>
       
        </div>
    )
}
export default Instructions;