import { useState } from "react";
import { boardDefault } from "../utils/Words";

export default function useBoard() {
  const getInitialState = () => {
    try {
      const saved = localStorage.getItem("wordleGame");
      if (!saved) return null;

      const parsed = JSON.parse(saved);
      const today = new Date().toDateString();

      if (parsed.date !== today) return null;

      return parsed;
    } catch {
      return null;
    }
  };

  const savedState = getInitialState();

  const [board, setBoard] = useState(savedState?.board || boardDefault);

  const [currAttempt, setCurrAttempt] = useState(
    savedState?.currAttempt || { attempt: 0, letter: 0 },
  );
  const onDelete = () => {
    if (currAttempt.letter === 0) return;
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letter - 1] = "";
    setBoard(newBoard);
    setCurrAttempt({ ...currAttempt, letter: currAttempt.letter - 1 });
  };

  const onSelectLetter = (key) => {
    if (currAttempt.letter > 4) return;
    const newBoard = [...board];

    newBoard[currAttempt.attempt][currAttempt.letter] = key;
    setBoard(newBoard);
    setCurrAttempt({
      attempt: currAttempt.attempt,
      letter: currAttempt.letter + 1,
    });
  };

  return {
    board,
    setBoard,
    currAttempt,
    setCurrAttempt,
    onDelete,
    onSelectLetter,
  };
}
