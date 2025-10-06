import Stats from "../navbar/NavbarButtons/Stats";

const SettingsModal = ({close}) => {
    return (
        <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="overlay">
              <div className="stats">
                <button className="closebtn" onClick={()=>{close(false)}}>X</button>
                 <h1>Settings</h1>
                  <p>Profile </p>
     
                <div>
                  <p>Stats</p>
                  <Stats/>
                </div>
              </div>
            </div>
          </div>
    )
}

export default SettingsModal;