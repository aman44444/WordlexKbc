import Stats from "../navbar/NavbarButtons/Stats";
import "../Settings/Settings.css"

const SettingsModal = ({close}) => {
    return (
        <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="overlay">
              <div className="stats">
                <button className="closebtn" onClick={()=>{close(false)}}>X</button>
                 <h1>Settings</h1>
                <div className="Stats-div">
                  <p>Statistics</p>
                  <Stats/>
                </div>
              </div>
            </div>
          </div>
    )
}

export default SettingsModal;