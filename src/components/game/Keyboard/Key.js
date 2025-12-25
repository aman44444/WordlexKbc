import "../Keyboard/Key.css"
import { useGame } from "../../../Context/GameContext";
import useGameActions from "../../../hooks/useGameActions";

const Key = ({ keyVal, bigKey = false, disabled = false }) => {
  const { gameOver, onSelectLetter, onDelete, keyState } =
    useGame();

    const onEnter = useGameActions();
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
