import "../NavbarButtons/Tooltip.css"
const IconButton = ({ label, onClick, children }) => (
  <div className="tooltip-wrapper">
    <button
      type="button"
      className="icons"
      aria-label={label}
      onClick={onClick}
    >
      {children}
    </button>
    <span className="tooltip">{label}</span>
  </div>
);

export default IconButton;