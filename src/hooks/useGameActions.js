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
    gameOver,
    setGameOver,
  } = useGame();
  const { setAlert, setPrize, playWinSound } = useUI();
  const { setProgress, setCurrentDay, setLastPlayedDate, currentDay } = useProgress();

  return useCallback(() => {
    if (gameOver.gameOver || currAttempt.letter !== 5) return;

    let word = board[currAttempt.attempt].join("").toUpperCase();

    if (!wordSet.has(word)) {
      setAlert("Word not found");
      setTimeout(() => setAlert(null), 1500);
      return;
    }

    if (word === correctWord) {
      setCurrAttempt((a) => ({ attempt: a.attempt + 1, letter: 0 }));
      setGameOver({ gameOver: true, guessedWord: true });
      playWinSound();

      const completedRun = currentDay === 7;
      const today = new Date().toDateString();

      setProgress((prev) => {
        const updated = completedRun ? [0, 0, 0, 0, 0, 0, 0] : [...prev];

        if (!completedRun) updated[currentDay - 1] = 100;

        localStorage.setItem(
          "progressData",
          JSON.stringify({
            progress: updated,
            currentDay: completedRun ? 1 : Math.min(currentDay + 1, 7),
            lastPlayedDate: today,
          }),
        );

        return updated;
      });
      setLastPlayedDate(today);

      setCurrentDay((day) => (completedRun ? 1 : Math.min(day + 1, 7)));

      if (completedRun) {
        localStorage.removeItem("lifeline-doubledip");
        localStorage.removeItem("lifeline-fiftyfifty");
        localStorage.removeItem("lifeline-flip");
      }

      if ([3, 5, 7].includes(currentDay)) setPrize(true);
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
      setLastPlayedDate(new Date().toDateString());

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
    setLastPlayedDate,
    setGameOver,
    setCurrAttempt,
    playWinSound,
    setAlert,
    setPrize,
    gameOver,
  ]);
}
