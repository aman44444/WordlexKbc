import React, { useState } from "react";
import { FaHeartPulse } from "react-icons/fa6";
import LifelineButtons from "../../lifelines/LifelineButtons";
import IconButton from "./IconButton";

const Lifeline = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <IconButton onClick={handleClick} label={"Lifelines"}>
           <FaHeartPulse />
      </IconButton>
      {isOpen && <LifelineButtons />}
    </>
  );
};

export default Lifeline;
