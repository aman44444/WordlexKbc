import { createContext, useContext, useMemo, useState } from "react";

const ProgressContext = createContext(null);

export const ProgressProvider = ({ children }) => {
  const [progress, setProgress] = useState([0,0,0,0,0,0,0]);
  const [currentDay, setCurrentDay] = useState(1);

  const value = useMemo(() => ({
    progress,
    currentDay,
    setProgress,
    setCurrentDay
  }), [progress, currentDay]);

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>;
};

export const useProgress = () => useContext(ProgressContext);
