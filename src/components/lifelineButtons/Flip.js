import React, { useContext, useState } from 'react'
import { AppContext } from '../../App';
import { generateWordSet } from '../../Words';

export default function Flip(){
  const { setCorrectWord, setWordSet, board,  setBoard,} = useContext(AppContext)
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    

//    useEffect(() => {
//     localStorage.setItem('ButtonDisabled',JSON.stringify(bDisabled))
// },[bDisabled])

const handleClick =async event => {

  event.stopPropagation();

  const clearedBoard = board.map(row => row.map(() => ''));
  setBoard(clearedBoard);

  const words = await generateWordSet();
  setWordSet(words.wordSet);
  setCorrectWord(words.todaysWord);

  setIsButtonDisabled(true);
  event.currentTarget.id = 'dis'; 

  console.log('Button clicked');
  

}
 

  return (
    
         <div className='lifeline' id="" onClick={handleClick} style={{ cursor: isButtonDisabled ? 'not-allowed' : 'pointer' }} >
            Flip
         </div>
    
  )
}
