import {
  createContext,
  useContext,
  useMemo,
  useRef,
  useState,
  useEffect,
  useCallback,
} from "react";

import winAudio from "../audio/amitabh2.mp3";

const UIContext = createContext(null);

export const UIProvider = ({ children }) => {
  const [alert, setAlert] = useState(null);
  const [prize, setPrize] = useState(false);

  // Restore saved audio preference
  const [soundEnabled, setSoundEnabled] = useState(() => {
    return localStorage.getItem("soundEnabled") !== "false";
  });

  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio(winAudio);

    return () => {
      audioRef.current?.pause();
      audioRef.current = null;
    };
  }, []);

  // Persist audio preference
  useEffect(() => {
    localStorage.setItem("soundEnabled", String(soundEnabled));

    // Stop playback immediately when audio is disabled
    if (!soundEnabled && audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, [soundEnabled]);

  const playWinSound = useCallback(() => {
    if (!soundEnabled || !audioRef.current) return;

    audioRef.current.currentTime = 0;

    audioRef.current.play().catch((error) => {
      console.error("Audio playback failed:", error);
    });
  }, [soundEnabled]);

  const value = useMemo(
    () => ({
      alert,
      setAlert,
      prize,
      setPrize,
      soundEnabled,
      setSoundEnabled,
      playWinSound,
    }),
    [alert, prize, soundEnabled, playWinSound]
  );

  return (
    <UIContext.Provider value={value}>
      {children}
    </UIContext.Provider>
  );
};

export const useUI = () => useContext(UIContext);