import { useState } from "react";
import { FiInfo } from "react-icons/fi";
import ModalWrapper from "../modals/ModalWrapper";
import Stats from "../modals/Statistics/Stats";
import Statistics from "../modals/Statistics/Statistics";
import AuthGate from "../auth/AuthGate";
import Tooltip from "../common/Tooltip";
import { useAuth } from "../../Context/AuthContext";
import { useUI } from "../../Context/UIContext";
import "./SettingsModal.css";

const SettingsModal = ({ close }) => {
  const { currentUser, logout } = useAuth();
  const { soundEnabled, setSoundEnabled } = useUI();
  const [view, setView] = useState("settings");

  if (view === "auth") {
    return (
      <AuthGate
        onBack={() => setView("settings")}
        onClose={close}
        onAuthSuccess={() => { setView("settings"); close(false); }}
      />
    );
  }

  if (view === "statistics") {
    return <Statistics close={close} onBack={() => setView("settings")} />;
  }

  return (
    <ModalWrapper close={close} className="settings-modal">
      <header className="settings-header">
        <p className="settings-eyebrow">PREFERENCES</p>
        <h1>Settings</h1>
        <p className="settings-description">Make the game feel right for you.</p>
      </header>

      <div className="settings-options">
        <section className="settings-option stats-option">
          <Stats onOpen={() => setView(currentUser ? "statistics" : "auth")} />
        </section>

        <section className="settings-option audio-option">
          <p className="settings-option-title audio-label">Audio</p>
          <div className="audio-controls">
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
              align="end"
              wide
              showOnTap
            >
              <button type="button" className="info-btn" aria-label="About audio">
                <FiInfo />
              </button>
            </Tooltip>
          </div>
        </section>
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