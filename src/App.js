import "./App.css";
import Board from "./components/game/Board/Board";
import Keyboard from "./components/game/Keyboard/Keyboard";
import  { useState, createContext, useEffect } from "react";
import GameOver from "./components/game/GameOver";
import Navbar from "./components/navbar/Navbar";
import Prize from "./Prize";
import amitabh2 from './audio/amitabh2.mp3'
import useWordGenerator from "./hooks/useWordGenerator";
import useBoard from "./hooks/useBoard";
import useKeyState from "./hooks/useKeyState";
import { AuthProvider } from "./Context/AuthContext";

export const AppContext = createContext();

const App = (props) => {
  
  const {wordSet, correctWord, setWordSet, setCorrectWord} = useWordGenerator();
  const {board, setBoard, currAttempt, setCurrAttempt, onDelete, onSelectLetter} = useBoard()
  const {keyState, updateKeyState} = useKeyState(correctWord)
  const [disabledLetters, setDisabledLetters] = useState([]);
  const [gameOver, setGameOver] = useState({
         gameOver: false,
         guessedWord: false,
         });
  const [alertMsg, setAlertMsg] = useState("");
  const [showAlert, setShowAlert] = useState(false);
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
    currWord = currWord.toUpperCase();

    if (wordSet.has(currWord)) {
      updateKeyState(currWord);
      setCurrAttempt({ attempt: currAttempt.attempt + 1, letter: 0 });
    

   if (currWord === correctWord) {
      setGameOver({ gameOver: true, guessedWord: true});
      const timeout = setTimeout(() => {
        setPrize(true)
      }, 4000)
  
     
      const audio = new Audio(amitabh2);
      audio.autoplay =true;
      audio.play();
   
      return () => clearTimeout(timeout)
  }

  setCurrAttempt({ attempt: currAttempt.attempt + 1, letter: 0 });

    console.log(currAttempt);
    if (currAttempt.attempt === 5) {
      setGameOver({ gameOver: true, guessedWord: false });
      

    }
   

    } else {
       setAlertMsg("Word not found");
       setShowAlert(true);
       setTimeout(() => {
       setShowAlert(false);
  }, 1600);
   }
}



  return (
    <div className="App">
     <AuthProvider>
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
          keyState,
        }}

      >

        {showAlert && (
        <div className="alert">
          {alertMsg}
         </div>
          )}
        <Navbar />
        <div className="game">
          <Board />
          {gameOver.gameOver ? <GameOver /> : <Keyboard />}
          {prize && <Prize close={setPrize}/>}
        </div>
      </AppContext.Provider>
    </AuthProvider>
    </div>
  );
}

export default App;
