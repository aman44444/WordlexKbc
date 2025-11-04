import React, { useState } from "react";
import { BiHelpCircle } from "react-icons/bi";
import Instructions from "../../modals/Instructions";

const Rules = () => {
  const [rules, setRules] = useState(false);

  const toggleRules = () => {
    setRules((prevState) => !prevState);
  };
  return (
    <button className="icons" aria-label="Rules" onClick={toggleRules}>
      <BiHelpCircle />
      {rules && <Instructions close={setRules} />}
    </button>
  );
};

export default Rules;
