import { useState, useEffect } from "react";
import { generateWordSet } from "../utils/Words";
export default function useWordGenerator() {
  const [wordSet, setWordSet] = useState(new Set());
  const [correctWord, setCorrectWord] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("wordleGame");

    generateWordSet().then((words) => {
      setWordSet(words.wordSet);

      if (saved) {
        const parsed = JSON.parse(saved);
        const today = new Date().toDateString();

        if (parsed.date === today && parsed.correctWord) {
          setCorrectWord(parsed.correctWord);
          return;
        }
      }

      setCorrectWord(words.todaysWord.trim().toUpperCase());
    });
  }, []);
  return { wordSet, correctWord, setWordSet, setCorrectWord };
}
