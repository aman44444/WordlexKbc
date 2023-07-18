import { render } from '@testing-library/react';
import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '../App';

function updateStep(step) {
  localStorage.setItem('currentStep', step);
}



const StepTracker = () => {

  const {
    gameOver, 
  } = useContext(AppContext)

  const [currentStep, setCurrentStep] = useState(0);
  const stepColors = ['#0f0', '#0f0', '#0f0', '#0f0', '#0f0', '#0f0', '#0f0'];

  useEffect(() => {
    const storedStep = localStorage.getItem('currentStep');
    if (storedStep) {
      setCurrentStep(parseInt(storedStep));
    }
  }, []);

  useEffect(() => {
    if (gameOver.gameOver && gameOver.guessedWord) {
      setCurrentStep(currentStep);
      localStorage.setItem('currentStep', (currentStep + 1).toString());
      updateStep()
    } else if (gameOver.gameOver) {
      setCurrentStep(0);
      localStorage.setItem('currentStep', '0');
    }
  }, [gameOver]);

  return (
    <div>
      <h2>Step Tracker</h2>
      <p>Click the buttons below to mark your progress:</p>
      {stepColors.map((color, index) => (
        <div key={index} 
        style={{ backgroundColor: currentStep >= index ? color : '#ccc' }}>
          Step {index  }
        </div>
      ))}
    </div>
  );
}

export default StepTracker;







// const StepTracker = () => {
//   const { gameOver } = useContext(AppContext);
//   const [currentStep, setCurrentStep] = useState(0);
//   const stepColors = ['#0f0', '#0f0', '#0f0', '#0f0', '#0f0', '#0f0', '#0f0'];

//   useEffect(() => {
//     const storedStep = localStorage.getItem('currentStep');
//     if (storedStep) {
//       setCurrentStep(parseInt(storedStep));
//     }
//   }, []);

//   const handleStepClick = (stepIndex) => {
//     setCurrentStep(currentStep);
//     localStorage.setItem('currentStep', stepIndex.toString());
//     updateStep(stepIndex + 1);
//   };

//   useEffect(() => {
//     if ( gameOver.gameOver && gameOver.guessedWord) {
//       handleStepClick(stepColors.length);
//     } else {
//       setCurrentStep(0);
//       localStorage.removeItem('currentStep');
//     }
//   }, [gameOver]);

//   return (
//     <div>
//       <h2>Step Tracker</h2>
//       <p>Click the buttons below to mark your progress:</p>
//       {stepColors.map((color, index) => (
//         <div
//           key={index}
//           style={{ backgroundColor: currentStep >= index ? color : '#ccc' }}
//           onClick={() => handleStepClick(index)}
//         >
//           Step {index + 1}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default StepTracker;
