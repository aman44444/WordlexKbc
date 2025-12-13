import React from "react";
import "../lifelines/LifelineButtons.css"
import Flip from "./lifelineButtons/Flip";
import Fiftyfifty from "./lifelineButtons/fiftyfifty";
import Doubledip from "./lifelineButtons/Doubledip";

const LifelineButtons = () => {
  return (
    <div className="lifediv">
      <Fiftyfifty/>
      <Flip  />
      <Doubledip />
    </div>
  );
};

export default LifelineButtons;
