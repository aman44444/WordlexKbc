import { createContext, useContext, useEffect, useMemo, useState } from "react";

const ProgressContext = createContext(null);

export const ProgressProvider = ({ children }) => {
  const [progress, setProgress] = useState([0, 0, 0, 0, 0, 0, 0]);
  const [currentDay, setCurrentDay] = useState(1);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
  const saved = localStorage.getItem("progressData");

  if (saved) {
    const parsed = JSON.parse(saved);
    setProgress(parsed.progress || [0, 0, 0, 0, 0, 0, 0]);
    setCurrentDay(parsed.currentDay || 1);
  }

  setIsLoaded(true);
}, []);


  useEffect(() => {
  if (!isLoaded) return; 

  localStorage.setItem(
    "progressData",
    JSON.stringify({
      progress,
      currentDay,
    })
  );
}, [progress, currentDay, isLoaded]);

  const value = useMemo(
    () => ({
      progress,
      currentDay,
      setProgress,
      setCurrentDay,
    }),
    [progress, currentDay],
  );

  return (
    <ProgressContext.Provider value={value}>
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => useContext(ProgressContext);
