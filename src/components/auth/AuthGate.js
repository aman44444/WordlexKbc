import Signup from "./Signup/Signup";
import LogIn from "./Login/Login";
import { useState } from "react";
import ModalWrapper from "../modals/ModalWrapper";

export default function AuthGate({ onAuthSuccess}) {
    const [mode, setMode] = useState("signup");

    return (
        <ModalWrapper close={onAuthSuccess}>
              {mode === "signup" ? (<Signup onSwitch={() => setMode("login")}/>
              
            ) : (
                <LogIn onSuccess={onAuthSuccess}
                       onSwitch={() => setMode("signup")}
                />
            )}
        </ModalWrapper>
    )
}