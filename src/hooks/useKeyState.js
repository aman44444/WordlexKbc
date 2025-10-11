import { useState } from "react";

export default function useKeyState(correctWord) {

const [keyState, setKeyState] = useState({});
 


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