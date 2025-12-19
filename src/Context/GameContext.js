import { createContext, useContext, useMemo, useState } from "react";
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
