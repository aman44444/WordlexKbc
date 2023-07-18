import React, { useState, useContext } from 'react'
import { AppContext } from '../../App';

export default function Fiftyfifty() {
  const [test, setTest] = useState('50:50')
  const {
    board,
    currAttempt,
    setBoard,
    setCurrAttempt,

    correctWord,

  } = useContext(AppContext);

  const dis = ""

  return (
    <div className='lifeline' onClick={(event) => {
      const wordArry = correctWord.split("");
      const newbrd = [...board]
      newbrd[currAttempt.attempt][0] = wordArry[0].toUpperCase();
      newbrd[currAttempt.attempt][1] = wordArry[1].toUpperCase()
      newbrd[currAttempt.attempt][2] = wordArry[2].toUpperCase()


      setBoard(newbrd);
      setCurrAttempt({ ...currAttempt, letter: currAttempt.letter + 3 })
      setTest(correctWord)
      event.currentTarget.id = "dis"


    }} id={dis}>{test}</div>
  )
}
