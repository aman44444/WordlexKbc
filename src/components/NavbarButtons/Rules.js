import React, { useState } from "react";
import { BiHelpCircle } from "react-icons/bi";
import Instructions from "../modals/Instructions";

const Rules = () => {
  const [rules, setRules] = useState(false);

  const toggleRules = () => {
    setRules((prevState) => !prevState);
  };
  return (
    <div className="icons" onClick={toggleRules}>
      <BiHelpCircle size={30} />
      {rules && <Instructions close={setRules} />}
    </div>
  );
};

export default Rules;
