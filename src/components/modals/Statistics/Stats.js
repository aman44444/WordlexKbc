import { FiChevronRight } from "react-icons/fi";
import { IoIosStats } from "react-icons/io";

const Stats = ({ onOpen }) => {
  return (
    <button type="button" className="stats-trigger" onClick={onOpen}>
      <span className="settings-option-copy">
        <p className="settings-option-title">Statistics</p>
        <p className="settings-option-description">View your seven-day progress.</p>
      </span>
      <span className="stats-action-icon" aria-hidden="true"><IoIosStats /></span>
      <FiChevronRight className="stats-chevron" aria-hidden="true" />
    </button>
  );
};

export default Stats;
