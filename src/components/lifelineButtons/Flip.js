import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../App";
import { generateWordSet } from "../../Words";

export default function Flip() {
  const { setCorrectWord, setWordSet, board, setCurrAttempt,gameOver } =
    useContext(AppContext);

  const [bDisabled, setBDisabled] = useState(() => {
    const storedValue = localStorage.getItem("ButtonDisabled");
    return storedValue ? JSON.parse(storedValue) : false;
  });

  useEffect(() => {
    localStorage.setItem("ButtonDisabled", JSON.stringify(bDisabled));
  }, [bDisabled]);

  const handleClick = (event) => {
    event.stopPropagation();
     if (gameOver.gameOver) return; 
    const newBoard = [...board];
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 6; j++) {
        newBoard[j][i] = "";
      }
    }

    setCurrAttempt({ attempt: 0, letter: 0 });

    generateWordSet().then((words) => {
      setWordSet(words.wordSet);
      setCorrectWord(words.todaysWord);
    });
    setBDisabled(true);
    event.currentTarget.id = "dis";
    console.log("click");
  };

  return (
    <div className="lifeline" id="" onClick={handleClick} disabled={bDisabled}>
      Flip
    </div>
  );
}
