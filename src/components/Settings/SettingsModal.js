import { FiInfo } from "react-icons/fi";
import ModalWrapper from "../modals/ModalWrapper";
import Stats from "../modals/Statistics/Stats";
import Tooltip from "../common/Tooltip";
import { useAuth } from "../../Context/AuthContext";
import { useUI } from "../../Context/UIContext";
import "./SettingsModal.css";

const SettingsModal = ({ close }) => {
  const { currentUser, logout } = useAuth();
  const { soundEnabled, setSoundEnabled } = useUI();

  return (
    <ModalWrapper close={close}>
      <h1>Settings</h1>

      <div className="Stats-div">
        <p>Statistics</p>
        <Stats />
      </div>

      <div className="setting-row">
        <p>Audio</p>

        <button
          type="button"
          role="switch"
          aria-checked={soundEnabled}
          aria-label="Audio"
          className={`switch ${soundEnabled ? "on" : ""}`}
          onClick={() => setSoundEnabled(!soundEnabled)}
        >
          <span className="switch-thumb" />
        </button>

        <Tooltip
          text="Plays Amitabh Bachchan’s famous “7 crore” line from KBC when you win a round."
          align="center"
          wide
          showOnTap
        >
          <button type="button" className="info-btn" aria-label="About audio">
            <FiInfo />
          </button>
        </Tooltip>
      </div>

      {currentUser && (
        <button onClick={logout} className="logoutButton">
          Logout
        </button>
      )}
    </ModalWrapper>
  );
};

export default SettingsModal;