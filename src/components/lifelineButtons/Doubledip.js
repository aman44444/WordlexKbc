import React, { useState, useContext } from "react";
import { AppContext } from "../../App";

const Doubledip = () => {
  const { board, currAttempt, setBoard, setCurrAttempt } =
    useContext(AppContext);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [elementId, setElementId] = useState('');
  // const [btnDisabled,setBtnDisabled] = useState(() => {
  //     const storedValue = localStorage.getItem("isButtonDisabled");
  //     return storedValue ? JSON.parse(storedValue) : false;
  //  })

  // const handleClick = event => {
  //   event.currentTarget.disabled = true;
  //   console.log('button clicked');
  //   const newBoard = [...board];
  //   for(let i =0 ; i<5; i++){
  //      newBoard[currAttempt.attempt-1][i] = "";
  //   }
  //    setBoard(newBoard);

  //   setCurrAttempt({ attempt: currAttempt.attempt -1, letter: 0 });
  //   event.currentTarget.id = "dis"
  //   localStorage.setItem("click",JSON.stringify(btnDisabled))
  // };

  // const wT = (event) => {
  // const newBoard = [...board];
  // for(let i =0 ; i<5; i++){
  //    newBoard[currAttempt.attempt-1][i] = "";
  // }
  //  setBoard(newBoard);

  // setCurrAttempt({ attempt: currAttempt.attempt -1, letter: 0 });
  //     localStorage.setItem("theme","dis")
  //    event.currentTarget.id="dis"
  // }

  // useEffect(() => {
  //     localStorage.setItem('isButtonDisabled',JSON.stringify(btnDisabled))
  // },[btnDisabled])

  const handleClick = (event) => {
    event.stopPropagation();
    setIsButtonDisabled(true);
    event.currentTarget.disabled = true;
    setElementId('dis');

    if (currAttempt.attempt > 0 && currAttempt.attempt <= board.length) {
      const updatedBoard = [...board];

      if (updatedBoard[currAttempt.attempt - 1]) {
        for (let i = 0; i < 5; i++) {
          updatedBoard[currAttempt.attempt - 1][i] = "";
        }
        setBoard(updatedBoard);
        setCurrAttempt({ attempt: currAttempt.attempt - 1, letter: 0 });
      } else {
        console.error("Row does not exist in the board");
      }
    } else {
      console.error("currAttempt.attempt is out of bounds");
    }
  };

  //  const [className ,setClassName] = useState("lifeline")

  //  const handleClick = () => {
  //     const newBoard = [...board];
  //     for(let i =0 ; i<5; i++){
  //        newBoard[currAttempt.attempt-1][i] = "";
  //     }
  //      setBoard(newBoard);

  //     setCurrAttempt({ attempt: currAttempt.attempt -1, letter: 0 });
  //     setClassName("lifelinedis")

  //    }

  //  useEffect(()=>{
  //     localStorage.setItem('class', className)
  //  },[className])

  //  useEffect(() => {
  //     const storedClass =localStorage.getItem('class')
  //     if(storedClass){
  //         setClassName(storedClass)
  //     }

  //   },[])
  return (
    <div className="lifeline" id={elementId}  onClick={handleClick} disabled={isButtonDisabled}>
      DD
    </div>
  );
};
export default Doubledip;
