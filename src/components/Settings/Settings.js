import { useState } from "react";
import { CiSettings } from "react-icons/ci";
import SettingsModal from "./SettingsModal";
import IconButton from "../navbar/NavbarButtons/IconButton";

const Settings = () => {
    const [openSettings, setOpenSettings]  = useState(false)

    const toggleSettings = () => {
        setOpenSettings((prevState) => !prevState)
    }
    return (
      <>
       <IconButton onClick={toggleSettings} label={"Settings"}>
           <CiSettings />
       </IconButton>
        {openSettings && <SettingsModal close={setOpenSettings}/>}
      </>
    )
}

export default Settings;