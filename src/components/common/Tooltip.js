import { useState } from "react";
import "./Tooltip.css";

const canHover = () =>
  typeof window !== "undefined" && window.matchMedia("(hover: hover)").matches;

const Tooltip = ({
  text,
  children,
  placement = "bottom",
  align = "center",
  wide = false,
  showOnTap = false,
}) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    if (canHover()) setOpen(false);
    else if (showOnTap) setOpen((o) => !o);
  };

  const classes = [
    "tooltip",
    `tooltip-${placement}`,
    `tooltip-align-${align}`,
    wide && "tooltip-wide",
    open && "tooltip-visible",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <span
      className="tooltip-wrapper"
      onMouseEnter={() => canHover() && setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={(e) => e.target.matches(":focus-visible") && setOpen(true)}
      onBlur={() => setOpen(false)}
      onClick={handleClick}
    >
      {children}
      <span role="tooltip" className={classes}>
        {text}
      </span>
    </span>
  );
};

export default Tooltip;
