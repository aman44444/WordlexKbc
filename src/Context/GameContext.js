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

    if (parsed.board) setBoard(parsed.board);
    if (parsed.currAttempt) setCurrAttempt(parsed.currAttempt);
    if (parsed.correctWord) setCorrectWord(parsed.correctWord);
    if (parsed.disabledLetters) setDisabledLetters(parsed.disabledLetters);
    if (parsed.gameOver) setGameOver(parsed.gameOver);

  } catch (err) {
    console.error("Failed to load game:", err);
    localStorage.removeItem("wordleGame");
  }
}, []);


useEffect(() => {
  const gameState = {
    board,
    currAttempt,
    correctWord,
    disabledLetters,
    gameOver,
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
