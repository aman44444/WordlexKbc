import { generateWordSet } from "../../../utils/Words";
import { useLifeline } from "./useLifeLineState";
import { useGame } from "../../../Context/GameContext";

export default function Flip() {
      const { setCorrectWord, setWordSet, board, setCurrAttempt,gameOver, setBoard } =
    useGame();

  const {disabled, disable} = useLifeline('flip')

  const handleClick = async () => {
   if(disabled || gameOver.gameOver) return;

    setCurrAttempt({ attempt: 0, letter: 0 });

    const emptyBoard = board.map(row => row.map(() => ""));
    setBoard(emptyBoard);

    const words = await generateWordSet();
    setWordSet(words.wordSet)
    setCorrectWord(words.todaysWord)

    disable();
    
  };

  return (
    <button className="lifeline" onClick={handleClick}  type='button' disabled={disabled}>
      Flip
    </button>
  );
}
