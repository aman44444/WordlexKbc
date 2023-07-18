import { click } from '@testing-library/user-event/dist/click';
import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { BiBody } from 'react-icons/bi';
import { AppContext } from '../../App';



const Doubledip = () => {
    const {
        board,
        currAttempt,
        setBoard,
        setCurrAttempt,
      } = useContext(AppContext)

   

    
     const [btnDisabled,setBtnDisabled] = useState(()=>{
        const storedValue = localStorage.getItem("isButtonDisabled");
        return storedValue ? JSON.parse(storedValue) : false;
     })
      
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

    useEffect(() => {
        localStorage.setItem('isButtonDisabled',JSON.stringify(btnDisabled))
    },[btnDisabled])
    
 const handleClick =event => {
    const newBoard = [...board];
    for(let i =0 ; i<5; i++){
       newBoard[currAttempt.attempt-1][i] = "";
    }
     setBoard(newBoard);
  
    setCurrAttempt({ attempt: currAttempt.attempt -1, letter: 0 });
    event.currentTarget.disabled =true;
    event.currentTarget.id = "dis"
    setBtnDisabled(true)
    console.log("click")
 }



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

        <div>
            
        <div className="lifeline" id="" onClick={handleClick} disabled={btnDisabled} >DD</div>
        
        </div>
    )
}
export default Doubledip; 