import { useLifeline } from "./useLifeLineState";
import { useGame } from "../../../Context/GameContext";

const Doubledip = () => {
  const { board, currAttempt, setBoard, setCurrAttempt,gameOver } =
    useGame();

  const {disabled, disable} = useLifeline("doubledip")

  const handleClick = (event) => {
    event.stopPropagation();
     if (disabled || gameOver.gameOver) return;
     
     const rowIndex = currAttempt.attempt - 1;
     if (rowIndex < 0 || rowIndex >= board.length) return;
    
    const updatedBoard = board.map((row, index) =>
      index === rowIndex ? row.map(() => "") : row
    );
    setBoard(updatedBoard);
    setCurrAttempt({ attempt: rowIndex, letter: 0 });

  
    disable()
  };


  return (
    <button
      className="lifeline"
      onClick={handleClick}
      disabled={disabled}
      type="button"
    >
      DD
    </button>
  );
};
export default Doubledip;
