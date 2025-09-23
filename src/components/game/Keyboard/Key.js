import React, { useContext } from "react";
import { AppContext } from "../../../App";
import "../Keyboard/Key.css"

const Key = ({ keyVal, bigKey, disabled }) => {
  const { gameOver, onSelectLetter, onDelete, onEnter, keyState } =
    useContext(AppContext);

  const selectLetter = () => {
    if (gameOver.gameOver) return;
    if (keyVal === "ENTER") {
      onEnter();
    } else if (keyVal === "DELETE") {
      onDelete();
    } else {
      onSelectLetter(keyVal);
    }
  };

  const keyClass = `key ${bigKey ? "big" : ""} ${disabled ? "disabled" : ""} ${
    keyState[keyVal.toLowerCase()]
  }`;

  return (
    <div className={keyClass.trim()} onClick={selectLetter}>
      {keyVal}
    </div>
  );
};

export default Key;
