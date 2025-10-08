import { useState, useEffect } from "react";
import { generateWordSet } from "../utils/Words";
export default  function useWordGenerator(){
    const [wordSet, setWordSet] = useState(new Set());
    const [correctWord, setCorrectWord] = useState("");

      useEffect(() => {
        
    
          //  const interval =setInterval(() => {
            
            generateWordSet().then((words) => {
              setWordSet(words.wordSet);
              setCorrectWord(words.todaysWord.trim().toUpperCase());
                     
          // localStorage.setItem("boarddata",JSON.stringify());
           
            },[])
          //  },)
    
       
            // generateWordSet().then((words) => {
            //   setWordSet(words.wordSet);
            //   setCorrectWord(words.todaysWord);
            // })
            
          
      
        // return () => {
        //   // clean up
        //   clearInterval(interval);
        // };
      
      
      }, []);
      return {wordSet, correctWord, setWordSet, setCorrectWord}
}