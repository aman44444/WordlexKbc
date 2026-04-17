import { useCallback } from "react";
import { useGame } from "../Context/GameContext";
import { useUI } from "../Context/UIContext";
import { useProgress } from "../Context/ProgressContext";

export default function useGameActions() {
  const {
    board,
    currAttempt,
    setCurrAttempt,
    wordSet,
    correctWord,
    updateKeyState,
    setGameOver,
  } = useGame();
  const { setAlert, setPrize, playWinSound } = useUI();
  const { setProgress, setCurrentDay, currentDay } = useProgress();

  return useCallback(() => {
    if (currAttempt.letter !== 5) return;

    let word = board[currAttempt.attempt].join("").toUpperCase();

    if (!wordSet.has(word)) {
      setAlert("Word not found");
      setTimeout(() => setAlert(null), 1500);
      return;
    }

    if (word === correctWord) {
      updateKeyState(word);
      setCurrAttempt((a) => ({ attempt: a.attempt + 1, letter: 0 }));
      setGameOver({ gameOver: true, guessedWord: true });
      playWinSound();

      setProgress((prev) => {
        const updated = [...prev];
        updated[currentDay - 1] = 100;

        localStorage.setItem(
          "progressData",
          JSON.stringify({
            progress: updated,
            currentDay: Math.min(currentDay + 1, 7),
          }),
        );

        return updated;
      });

      setCurrentDay((d) => Math.min(d + 1, 7));

      setTimeout(() => {
        setPrize(true);
      }, 2000);
      return;
    }

    if (currAttempt.attempt === 5) {
      setCurrAttempt((a) => ({ attempt: a.attempt + 1, letter: 0 }));
      setGameOver({ gameOver: true, guessedWord: false });

      localStorage.removeItem("lifeline-doubledip");
      localStorage.removeItem("lifeline-fiftyfifty");
      localStorage.removeItem("lifeline-flip");

      setProgress([0, 0, 0, 0, 0, 0, 0]);
      setCurrentDay(1);

      localStorage.removeItem("progressData");
      return;
    }
    setCurrAttempt((a) => ({ attempt: a.attempt + 1, letter: 0 }));
  }, [
    board,
    currAttempt,
    correctWord,
    wordSet,
    currentDay,
    setProgress,
    setCurrentDay,
    setGameOver,
    setCurrAttempt,
  ]);
}
