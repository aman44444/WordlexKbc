import React, { useState } from "react";
import { BiHelpCircle } from "react-icons/bi";
import Instructions from "../../modals/Instructions";
import IconButton from "./IconButton";
const Rules = () => {
  const [rules, setRules] = useState(false);

  const toggleRules = () => {
    setRules((prevState) => !prevState);
  };
  return (
    <>
        <IconButton onClick={toggleRules} label={"Rules"}>
          <BiHelpCircle />
       </IconButton>
         {rules && <Instructions close={setRules} />}
    </>
  );
};

export default Rules;
