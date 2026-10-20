import { createContext, useContext, useMemo, useState, useEffect } from "react";
import useWordGenerator from "../hooks/useWordGenerator";
import useBoard from "../hooks/useBoard";
import useKeyState from "../hooks/useKeyState";

const GameContext = createContext(null);

export const GameProvider = ({ children }) => {
  const [date, setDate] = useState(() => new Date().toDateString());
  useEffect(() => {
    const checkDate = () => setDate(new Date().toDateString());
    const timer = setInterval(checkDate, 1000);
    window.addEventListener("focus", checkDate);
    document.addEventListener("visibilitychange", checkDate);
    return () => {
      clearInterval(timer);
      window.removeEventListener("focus", checkDate);
      document.removeEventListener("visibilitychange", checkDate);
    };
  }, []);
  return <DailyGameProvider key={date} date={date}>{children}</DailyGameProvider>;
};

const DailyGameProvider = ({ children, date }) => {
  const { wordSet, correctWord, setWordSet, setCorrectWord } = useWordGenerator();
  const { board, currAttempt, setCurrAttempt, onDelete, onSelectLetter, setBoard } = useBoard();
  const { keyState, disabledLetters } = useKeyState(correctWord, board, currAttempt.attempt);
  const [gameOver, setGameOver] = useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("wordleGame"));
      if (saved?.date === date && saved.gameOver) return saved.gameOver;
    } catch { /* Ignore invalid saved games. */ }
    return { gameOver: false, guessedWord: false };
  });

  useEffect(() => {
    // Never stamp yesterday's board with today's date before rollover renders.
    if (!correctWord || date !== new Date().toDateString()) return;
    localStorage.setItem("wordleGame", JSON.stringify({
      board, currAttempt, correctWord, disabledLetters, gameOver, date,
    }));
  }, [board, currAttempt, correctWord, disabledLetters, gameOver, date]);

  const value = useMemo(() => ({
    board, setBoard, currAttempt, setCurrAttempt, onDelete, onSelectLetter,
    wordSet, correctWord, setWordSet, setCorrectWord,
    keyState, disabledLetters, gameOver, setGameOver,
  }), [board, setBoard, currAttempt, setCurrAttempt, onDelete, onSelectLetter,
    wordSet, correctWord, setWordSet, setCorrectWord, keyState, disabledLetters, gameOver]);

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};

export const useGame = () => useContext(GameContext);
