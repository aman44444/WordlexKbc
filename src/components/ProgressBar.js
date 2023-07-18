import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '../App';

function ProgressBar() {
  const [progress, setProgress] = useState(0);

  const {
    gameOver, 
  } = useContext(AppContext)


  useEffect(() => {
    const savedProgress = localStorage.getItem('progress');
    if (savedProgress) {
      setProgress(parseInt(savedProgress));
    }
    if(gameOver.gameOver && gameOver.guessedWord){
      increaseProgress();
    }
  }, []);

 
  const increaseProgress = () => {
    const newProgress = progress + 100;
    setProgress(newProgress);
    localStorage.setItem('progress', newProgress);
  };

 

  return (
    
    <div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
      <div
        style={{
          width: `${progress}%`,
          height: '30px',
          backgroundColor: 'green',
        }}
      />
   <button onClick={increaseProgress}>click</button>
    </div>
  );
}

export default ProgressBar;