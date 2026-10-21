import Tooltip from "../../../common/Tooltip";
import "./IconButton.css";

const IconButton = ({ label, onClick, children }) => (
  <Tooltip text={label}>
    <button type="button" className="icons" aria-label={label} onClick={onClick}>
      {children}
    </button>
  </Tooltip>
);

export default IconButton;