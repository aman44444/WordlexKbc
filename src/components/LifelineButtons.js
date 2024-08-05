import React from "react";
import Doubledip from "./lifelineButtons/Doubledip";
import Fiftyfifty from "./lifelineButtons/fiftyfifty";
import Flip from "./lifelineButtons/Flip";
import "../style/./LifelineButtons.css";

const LifelineButtons = () => {
  return (
    <div className="lifediv">
      <Fiftyfifty className="lifeline" />
      <Flip className="lifeline" />
      <Doubledip className="lifeline" />
    </div>
  );
};

export default LifelineButtons;
