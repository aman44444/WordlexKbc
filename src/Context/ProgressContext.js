import { createContext, useContext, useEffect, useMemo, useState } from "react";

const ProgressContext = createContext(null);

function daysBetween(firstDate, secondDate) {
  const first = new Date(firstDate);
  const second = new Date(secondDate);
  first.setHours(0, 0, 0, 0);
  second.setHours(0, 0, 0, 0);
  return Math.round((second - first) / (1000 * 60 * 60 * 24));
}

export const ProgressProvider = ({ children }) => {
  const [progress, setProgress] = useState([0, 0, 0, 0, 0, 0, 0]);
  const [currentDay, setCurrentDay] = useState(1);
  const [lastPlayedDate, setLastPlayedDate] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("progressData");
    const today = new Date().toDateString();

    try {
      const parsed = saved ? JSON.parse(saved) : null;
      const validProgress = Array.isArray(parsed?.progress)
        && parsed.progress.length === 7
        && parsed.progress.every(
          (value) => Number.isInteger(value) && value >= 0 && value <= 100,
        );
      const validCurrentDay = Number.isInteger(parsed?.currentDay)
        && parsed.currentDay >= 1
        && parsed.currentDay <= 7;
      const missedDay = parsed?.lastPlayedDate
        && daysBetween(parsed.lastPlayedDate, today) > 1;

      if (missedDay) {
        localStorage.removeItem("lifeline-doubledip");
        localStorage.removeItem("lifeline-fiftyfifty");
        localStorage.removeItem("lifeline-flip");
      } else {
        if (validProgress) setProgress(parsed.progress);
        if (validCurrentDay) setCurrentDay(parsed.currentDay);
        if (parsed?.lastPlayedDate) setLastPlayedDate(parsed.lastPlayedDate);
      }
    } catch {
      localStorage.removeItem("progressData");
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
      lastPlayedDate,
    })
  );
}, [progress, currentDay, lastPlayedDate, isLoaded]);

  const value = useMemo(
    () => ({
      progress,
      currentDay,
      setProgress,
      setCurrentDay,
      setLastPlayedDate,
    }),
    [progress, currentDay, setLastPlayedDate],
  );

  return (
    <ProgressContext.Provider value={value}>
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => useContext(ProgressContext);
