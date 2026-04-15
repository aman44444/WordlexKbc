import { createContext, useContext, useMemo, useState, useEffect } from "react";
import useWordGenerator from "../hooks/useWordGenerator";
import useBoard from "../hooks/useBoard";
import useKeyState from "../hooks/useKeyState";

const GameContext = createContext(null);

export const GameProvider = ({ children }) => {
  const { wordSet, correctWord, setWordSet, setCorrectWord } = useWordGenerator();
  const { board, currAttempt, setCurrAttempt, onDelete, onSelectLetter,setBoard } = useBoard();
  const { keyState, updateKeyState } = useKeyState(correctWord);

  const [gameOver, setGameOver] = useState({ gameOver: false, guessedWord: false });
  const [disabledLetters, setDisabledLetters] = useState([]);
  
useEffect(() => {
  try {
    const saved = localStorage.getItem("wordleGame");
    if (!saved) return;

    const parsed = JSON.parse(saved);
    const today = new Date().toDateString();

    //  reset if new day
    if (parsed.date !== today) {
      localStorage.removeItem("wordleGame");
      return;
    }

    // restore state
    setCorrectWord(parsed.correctWord);
    setDisabledLetters(parsed.disabledLetters);
    setGameOver(parsed.gameOver);

  } catch (err) {
    console.error(err);
    localStorage.removeItem("wordleGame");
  }
}, []);

useEffect(() => {
  if (!correctWord) return; 
  const today = new Date().toDateString();

  const gameState = {
    board,
    currAttempt,
    correctWord,
    disabledLetters,
    gameOver,
    date: today, 
  };

  localStorage.setItem("wordleGame", JSON.stringify(gameState));
}, [board, currAttempt, correctWord, disabledLetters, gameOver]);

  const value = useMemo(() => ({
    board,
    setBoard,
    currAttempt,
    setCurrAttempt,
    onDelete,
    onSelectLetter,

    // word
    wordSet,
    correctWord,
    setWordSet,
    setCorrectWord,

    // keyboard
    keyState,
    updateKeyState,
    disabledLetters,
    setDisabledLetters,

    // game
    gameOver,
    setGameOver,
  }), [
    board,
    currAttempt,
    correctWord,
    keyState,
    gameOver,
    disabledLetters
  ]);

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};

export const useGame = () => useContext(GameContext);
