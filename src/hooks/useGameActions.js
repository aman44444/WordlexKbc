import { useCallback } from "react";
import { useGame } from "../Context/GameContext";
import { useUI } from "../Context/UIContext";
import { useProgress } from "../Context/ProgressContext";

export default function useGameActions() {
  const { board, currAttempt, setCurrAttempt, wordSet, correctWord, updateKeyState,setGameOver } = useGame();
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
        setCurrAttempt(a => ({ attempt: a.attempt + 1, letter: 0 }));
        setGameOver({ gameOver: true, guessedWord: true });  
        playWinSound();
    
        setTimeout(() => {
           setPrize(true);
           setProgress(p => {
           const n = [...p];
           n[currentDay - 1] = 100;
           return n;
          })
          
        setCurrentDay(d => Math.min(d + 1, 7));
        
      
      },2000);
  
      return;
    }

    if (currAttempt.attempt === 5) {
       setGameOver({ gameOver: true, guessedWord: false });
      setCurrentDay(1);
      return;
    }

    setCurrAttempt(a => ({ attempt: a.attempt + 1, letter: 0 }));
  }, [board, currAttempt, correctWord, wordSet, currentDay]);
}
