import ModalWrapper from "../modals/ModalWrapper";
import Stats from "../navbar/NavbarButtons/Stats";


const SettingsModal = ({close}) => {
    return (
      <ModalWrapper close={close}>
                <h1>Settings</h1>
                <div className="Stats-div">
                   <p>Statistics</p>
                   <Stats/>
                </div>
      </ModalWrapper>
    )
}

export default SettingsModal;