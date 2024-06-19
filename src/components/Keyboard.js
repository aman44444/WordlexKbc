import React, { useCallback, useEffect, useContext } from "react";
import Key from "./Key";
import { AppContext } from "../App";
import '../style/./Keyboard.css';

const keys = {
  line1: ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  line2: ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  line3: ["Z", "X", "C", "V", "B", "N", "M"],
};

const Keyboard = () => {
 
  const {
    board,
    disabledLetters,
    currAttempt,
    gameOver,
    onSelectLetter,
    onEnter,
    onDelete,
  } = useContext(AppContext);

  const handleKeyboard = useCallback((event) => {
      if (gameOver.gameOver) return;

      const key = event.key.toUpperCase();
      if (key === "ENTER") {
        onEnter();
      } else if (key === "BACKSPACE") {
        onDelete();
      } else {
        Object.values(keys).flat().forEach((k) => {
          if (key === k) {
            onSelectLetter(k);
          }
        });
      }
    }, [gameOver, onEnter, onDelete, onSelectLetter]);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyboard);

    return () => {
      document.removeEventListener("keydown", handleKeyboard);
    };
  }, [handleKeyboard]);

  console.log(disabledLetters);

  const renderKeys = (keyArray) => keyArray.map((key) => (
    <Key keyVal={key} key={key} disabled={disabledLetters.includes(key)} />
  ));

  return (
    <div className="keyboard" onKeyDown={handleKeyboard}>
      <div className="line1">
        {renderKeys(keys.line1)}
      </div>
      <div className="line2">
        {renderKeys(keys.line2)}
      </div>
      <div className="line3">
        <Key keyVal={"ENTER"} bigKey />
        {renderKeys(keys.line3)}
        <Key keyVal={"DELETE"} bigKey />
      </div>
    </div>
  );
}

export default Keyboard;
