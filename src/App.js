import "./App.css";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import { boardDefault, generateWordSet } from "./Words";
import React, { useState, createContext, useEffect } from "react";
import GameOver from "./components/GameOver";
import Navbar from "./components/Navbar";
import Prize from "./Prize";
import amitabh2 from './audio/amitabh2.mp3'
import ProgressBar from "./components/Pro";






export const AppContext = createContext();

function App(props) {
  
  const [board, setBoard] = useState(boardDefault);
  const [currAttempt, setCurrAttempt] = useState({ attempt: 0, letter: 0 });
  const [wordSet, setWordSet] = useState(new Set());
  const [correctWord, setCorrectWord] = useState("");
  
  const [disabledLetters, setDisabledLetters] = useState([]);
  const [gameOver, setGameOver] = useState({
    gameOver: false,
    guessedWord: false,
  });


const [prize,setPrize] = useState(false)

// const [boardData, setBoardData] = useState([...boardDefault]);



  //   setInterval(function(){ // Set interval for checking
  //     var date = new Date(); // Create a Date object to find out what time it is
    
  //       generateWordSet().then((words) => {
  //                  setWordSet(words.wordSet);
  //                     setCorrectWord(words.todaysWord);
  //       })
      
  // }, 60000);


  // useEffect(() => {
  //   const storedDisabledL = localStorage.getItem("disabled-letter");
  //   if (storedDisabledL) {
  //     setDisabledLetters(JSON.parse(storedDisabledL));
  //   }
  // },[]);

  // 
  // for day progress
  // 
  const [progress, setProgress] = useState([0, 0, 0, 0, 0, 0, 0]);
  const [currentDay, setCurrentDay] = useState(1);

 
  // Calculate the progress for each day (25% per day for 4 days)
  const calculateProgress = (day) => {
    return (day / 7) * 100;
  };

  // Handle the click event to advance to the next day

  useEffect(() => {
    if (gameOver.gameOver && gameOver.guessedWord) {
        if (currentDay < 7) {
            setCurrentDay((prevDay) => prevDay + 1);
            const updatedProgress = [...progress];
            updatedProgress[currentDay - 1] = 100;
            setProgress(updatedProgress);
          }
    } else if (gameOver.gameOver) {
        if (currentDay <= 7) {
            setCurrentDay(1);
            // const updatedProgress = [...progress];
            // updatedProgress[currentDay - 6] = 100;
            // setProgress(updatedProgress);
          }
    }

  }, [gameOver]);
 
  // 
  // for generating words
  // 

  useEffect(() => {
    

      //  const interval =setInterval(() => {
        
        generateWordSet().then((words) => {
          setWordSet(words.wordSet);
          setCorrectWord(words.todaysWord);
                 
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

 
  // 
  // local storage for board 
  // 

 

//   useEffect(() => {
//     const storedBoard = localStorage.getItem('wordle-Board');
//     if (storedBoard) {
//       setBoard(JSON.parse(storedBoard));
//     }
//   }, []);

  
    



//  useEffect(() => {
//   localStorage.setItem("disabled-letter", JSON.stringify(disabledLetters))

 
//  },[disabledLetters])
  
// 
// end
// 

  const onEnter = () => {
    if (currAttempt.letter !== 5) return;
    let currWord = "";
    for (let i = 0; i < 5; i++) {
      currWord += board[currAttempt.attempt][i];
    }
    if (wordSet.has(currWord.toLowerCase())) {
      setCurrAttempt({ attempt: currAttempt.attempt + 1, letter: 0 });
    } else {
      alert("Word not found");
    }

   if (currWord.toUpperCase() === correctWord.toUpperCase()) {
      setGameOver({ gameOver: true, guessedWord: true});
      const timeout = setTimeout(() => {
        setPrize(true)
      }, 6000)
  
    
  
    
     
      const audio = new Audio(amitabh2);
      audio.autoplay =true;
      audio.play();
   
      return () => clearTimeout(timeout)
          return ;
  }

    console.log(currAttempt);
    if (currAttempt.attempt === 5) {
      setGameOver({ gameOver: true, guessedWord: false });
      

      return;
    }
   
   
 
    //  local storage for board
    
    // const newData = [...boardDefault]
    // localStorage.setItem('wordle-Board', JSON.stringify(newData));
    // setBoard(newData)

   
  };

  const onDelete = () => {
    if (currAttempt.letter === 0) return;
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letter - 1] = "";
    setBoard(newBoard);
    setCurrAttempt({ ...currAttempt, letter: currAttempt.letter-1 });
  };

  const onSelectLetter = (key) => {
    if (currAttempt.letter > 4) return;
    const newBoard = [...board];
   
    newBoard[currAttempt.attempt][currAttempt.letter] = key;
    setBoard(newBoard);
    setCurrAttempt({
      attempt: currAttempt.attempt,
      letter: currAttempt.letter + 1,
    });
    
  };

  

  return (
    <div className="App">
     
      <AppContext.Provider
        value={{
          board,
          setBoard,
          currAttempt,
          setCurrAttempt,
          correctWord,
          onSelectLetter,
          onDelete,
          onEnter,
          disabledLetters,
           setDisabledLetters,
          gameOver,
          setPrize,
          setWordSet,
          setCorrectWord,
          currentDay,
          progress,
          setProgress,
          setCurrentDay,
         
           
        }}

      >
        <Navbar />
        <div className="game">
        
          <Board />
         
          {gameOver.gameOver ? <GameOver /> : <Keyboard />}
          {prize && <Prize closeModal={setPrize}/>}
          
       
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
