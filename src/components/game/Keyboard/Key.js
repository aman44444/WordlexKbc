import React, { useContext } from "react";
import { AppContext } from "../../../App";
import "../Keyboard/Key.css"

const Key = ({ keyVal, bigKey = false, disabled = false }) => {
  const { gameOver, onSelectLetter, onDelete, onEnter, keyState } =
    useContext(AppContext);

  const selectLetter = () => {
    if (disabled || gameOver.gameOver) return;

    if (keyVal === "ENTER") {
      onEnter();
    } else if (keyVal === "DELETE") {
      onDelete();
    } else {
      onSelectLetter(keyVal);
    }
  };
  
  
  const stateClass = keyState[keyVal.toLowerCase()] ?? "";

  const keyClass = `key ${bigKey ? "big" : ""} ${disabled ? "disabled" : ""} 
  ${stateClass}`;

  return (
    <button className={keyClass.trim()} onClick={selectLetter} disabled={disabled}>
      {keyVal}
    </button>
  );
};

export default Key;
