import React, { useCallback, useEffect} from "react";
import Key from "./Key";
import "../Keyboard/Keyboard.css"
import { useGame } from "../../../Context/GameContext";

import useGameActions from "../../../hooks/useGameActions";


const keys = [
   ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
   ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
   ["ENTER","Z", "X", "C", "V", "B", "N", "M", "DELETE"],
];

const LETTER_SET = new Set(
  keys.flat().filter((k) => k !== "ENTER" && k !== "DELETE")
);

const Keyboard = () => {
  const { onSelectLetter , disabledLetters,
    gameOver,
    onDelete, } = useGame();
    const onEnter = useGameActions();

  const handleKeyboard = useCallback(
    (event) => {
      if (gameOver.gameOver) return;

      const key = event.key.toUpperCase();

      if (key === "ENTER") {
        onEnter();
        return;
      } 
      if (key === "BACKSPACE") {
        onDelete();
        return
      } 
      if (LETTER_SET.has(key)) {
        onSelectLetter(key);
      }

    },
    [gameOver, onEnter, onDelete, onSelectLetter]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyboard);

    return () => {
      window.removeEventListener("keydown", handleKeyboard);
    };
  }, [handleKeyboard]);

  return (
    <div className="keyboard">
      {keys.map((row, rowIndex) => (
        <div className={`line${rowIndex + 1}`} key={rowIndex}>
          {row.map((key) => (
            <Key
              key={key}
              keyVal={key}
              disabled={disabledLetters.includes(key)}
              bigKey={key === "ENTER" || key === "DELETE"}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;
