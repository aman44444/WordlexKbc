import React, { useContext, useEffect } from "react";
import { AppContext } from "../../App";
import Step from "../modals/days";

export default function StepNavigation(props) {

    const {
        labelArray,
        updateStep,
        currentStep,
        gameOver,    
      } = useContext(AppContext)

      
    
return (
<div className="stepWrapper">
{labelArray.map((item, index) => <Step key={index}  index={index}  label={item}
updateStep={updateStep} 
selected={currentStep === index+2}></Step>) }
</div>
)
}
