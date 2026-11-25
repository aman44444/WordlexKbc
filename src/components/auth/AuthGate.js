import Signup from "./Signup/Signup";
import LogIn from "./Login/Login";
import { useState } from "react";
import ModalWrapper from "../modals/ModalWrapper";

export default function AuthGate({ onAuthSuccess, onBack, onClose }) {
    const [mode, setMode] = useState("signup");

    return (
          <ModalWrapper close={onClose || onAuthSuccess} onBack={onBack}>
              {mode === "signup" ? (<Signup onSuccess={onAuthSuccess} onSwitch={() => setMode("login")}/>
              
            ) : (
                <LogIn onSuccess={onAuthSuccess}
                       onSwitch={() => setMode("signup")}
                />
            )}
        </ModalWrapper>
    )
}