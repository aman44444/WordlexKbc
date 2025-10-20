import React, { useContext } from "react";
import { AppContext } from "../../App";
import StepNavigation from "./modals/daysnavigation";

const Days = () => {
  const {labelArray, updateStep, currentStep } =
    useContext(AppContext);

  return (
    <div>
      <StepNavigation
        labelArray={labelArray}
        currentStep={currentStep}
        updateStep={updateStep}
      ></StepNavigation>
    </div>
  );
};

export default Days;
