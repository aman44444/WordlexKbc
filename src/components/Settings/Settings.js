import { useState } from "react";
import { CiSettings } from "react-icons/ci";
import SettingsModal from "./SettingsModal";

const Settings = () => {
    const [openSettings, setOpenSettings]  = useState(false)

    const toggleSettings = () => {
        setOpenSettings((prevState) => !prevState)
    }
    return (
        <button className="icons" aria-label="Settings" onClick={toggleSettings}>
           <CiSettings />
            {openSettings && <SettingsModal close={setOpenSettings}/>}
        </button>

    )
}

export default Settings;