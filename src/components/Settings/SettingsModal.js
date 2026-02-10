import ModalWrapper from "../modals/ModalWrapper";
import Stats from "../modals/Statistics/Stats";
import { useAuth } from "../../Context/AuthContext";


const SettingsModal = ({close}) => {
   const {currentUser, logout} = useAuth();
    return (
      <ModalWrapper close={close}>
                <h1>Settings</h1>
                <div className="Stats-div">
                   <p>Statistics</p>
                   <Stats/>
                </div>
                {currentUser && (
                  <button onClick={logout} className="logoutButton">Logout</button>
                )}
      </ModalWrapper>
    )
}

export default SettingsModal;