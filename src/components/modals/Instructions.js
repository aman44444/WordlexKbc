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
                        <p>Its a 7 days game play if loose you wil have to start from day 1. there will a prize after day 3 ,day 5 and day 7</p>
                        <div>
                          
                        </div>
                        <p><strong>Lifelines</strong></p>
                       
                        <p><strong>50:50</strong>  :If use the 50:50 lifeline you will get the half word of word of the.You can use it only once a in 7 day game.</p>
                        <p><strong>FLIP</strong>  :If You use FLIP lifeline the word of the day will be change and you will get clean board.You can use it only once a in 7 day game.</p>
                        <p><strong>50:50</strong>  :If use the DD lifeline you will get one more chance to guess the word.You can use it only once a in 7 day game.</p><br/>
                        <p><strong>A new WORDLE will be available each day!</strong></p>
                    </div>
                </section>
            </div>
        </div>
       
        </div>
    )
}
export default Instructions;