import StepNavigation from "./modals/daysnavigation";
import { useGame } from "../../Context/GameContext";

const Days = () => {
  const {labelArray, updateStep, currentStep } =
    useGame();

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
