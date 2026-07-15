import { useState } from "react";
import "../NavbarButtons/Tooltip.css"


const IconButton = ({ label, onClick, children }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleClick = (e) => {
    setShowTooltip(false); // force-close before modal opens
    onClick?.(e);
  };

  return (
    <div
      className="tooltip-wrapper"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <button
        type="button"
        className="icons"
        aria-label={label}
        onClick={handleClick}
      >
        {children}
      </button>
      <span className={`tooltip ${showTooltip ? "tooltip-visible" : ""}`}>
        {label}
      </span>
    </div>
  );
};

export default IconButton;