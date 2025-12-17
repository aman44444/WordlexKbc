import { useState, useCallback } from "react";

export function useLifeline(key) {
  const [disabled, setDisabled] = useState(false);

  // const disable = () => setDisabled(true);
  // const enable = () => setDisabled(false);

  // useEffect(() => {
  //   const stored = sessionStorage.getItem(`lifeline-${key}`);
  //   if (stored === "true") setDisabled(true);
  // }, [key]);

  // useEffect(() => {
  //   sessionStorage.setItem(`lifeline-${key}`, disabled);
  // }, [key, disabled]);

  
  const disable = useCallback(() => setDisabled(true), []);
  const reset = useCallback(() => setDisabled(false), []);

  return { disabled, disable, reset };
}
