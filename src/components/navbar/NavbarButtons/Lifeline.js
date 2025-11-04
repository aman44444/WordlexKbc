import React, { useState } from "react";
import { FaHeartPulse } from "react-icons/fa6";
import LifelineButtons from "../../lifelines/LifelineButtons";

const Lifeline = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  return (
    <button className="icons" aria-label="Lifelines" onClick={handleClick}>
      <FaHeartPulse />
      {isOpen && <LifelineButtons />}
    </button>
  );
};

export default Lifeline;
