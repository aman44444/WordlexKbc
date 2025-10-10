import { useState } from "react";
import useWordGenerator from "./useWordGenerator";

export default function useKeyState() {

const [keyState, setKeyState] = useState({});
 
const {correctWord} = useWordGenerator();

 const updateKeyState = (currWord) => {
    const newKeyState = { ...keyState };

    for (let i = 0; i < currWord.length; i++) {
      const letter = currWord[i];
      if (correctWord.includes(letter)) {
        if (correctWord[i] === letter) {
          newKeyState[letter.toLowerCase()] = 'correct';
        } else if (newKeyState[letter.toLowerCase()] !== 'correct') {
          newKeyState[letter.toLowerCase()] = 'almost';
        }
      } else {
        newKeyState[letter.toLowerCase()] = 'error';
      }
    }

    setKeyState(newKeyState);
  };
 return {keyState, setKeyState, updateKeyState}
}