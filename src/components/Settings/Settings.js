import { useState } from "react";
import { CiSettings } from "react-icons/ci";
import SettingsModal from "./SettingsModal";

const Settings = () => {
    const [openSettings, setOpenSettings]  = useState(false)

    const toggleSettings = () => {
        setOpenSettings((prevState) => !prevState)
    }
    return (
        <div className="icons" onClick={toggleSettings}>
           <CiSettings />
            {openSettings && <SettingsModal close={setOpenSettings}/>}
        </div>

    )
}

export default Settings;