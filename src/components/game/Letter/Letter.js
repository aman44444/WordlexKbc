import "../Letter/Letter.css";
import { useGame } from "../../../Context/GameContext";
import { scoreGuess } from "../../../utils/scoreGuess";

const Letter = ({ letterPos, attemptVal }) => {
  const { board, currAttempt, correctWord } = useGame();
  const row = board[attemptVal];
  const state = currAttempt.attempt > attemptVal
    ? scoreGuess(row.join(""), correctWord)[letterPos] : "";
  return <div className={`letter ${state}`}>{row[letterPos]}</div>;
};
export default Letter;
