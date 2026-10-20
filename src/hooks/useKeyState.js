import { useMemo } from "react";
import { scoreGuess } from "../utils/scoreGuess";

export default function useKeyState(correctWord, board, attempt) {
  return useMemo(() => {
    const keyState = {};
    const rank = { error: 1, almost: 2, correct: 3 };
    board.slice(0, attempt).forEach((row) => {
      const states = scoreGuess(row.join(""), correctWord);
      row.forEach((letter, index) => {
        const key = letter.toLowerCase();
        if (letter && rank[states[index]] > (rank[keyState[key]] || 0)) {
          keyState[key] = states[index];
        }
      });
    });
    const disabledLetters = Object.keys(keyState)
      .filter((key) => !correctWord.includes(key.toUpperCase()))
      .map((key) => key.toUpperCase());
    return { keyState, disabledLetters };
  }, [correctWord, board, attempt]);
}
