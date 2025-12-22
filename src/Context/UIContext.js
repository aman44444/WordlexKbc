import { createContext, useContext, useMemo, useRef, useState, useEffect } from "react";
import winAudio from "../audio/amitabh2.mp3";

const UIContext = createContext(null);

export const UIProvider = ({ children }) => {
  const [alert, setAlert] = useState(null);
  const [prize, setPrize] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio(winAudio);
  }, []);

  const value = useMemo(() => ({
    alert,
    setAlert,
    prize,
    setPrize,
    playWinSound: () => audioRef.current?.play()
  }), [alert, prize]);

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};

export const useUI = () => useContext(UIContext);
