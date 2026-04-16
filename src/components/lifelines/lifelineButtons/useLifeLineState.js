import { useState, useEffect, useCallback } from "react";

export function useLifeline(key) {
  const storageKey = `lifeline-${key}`;

  const [disabled, setDisabled] = useState(() => {
    return localStorage.getItem(storageKey) === "true";
  });

  useEffect(() => {
    localStorage.setItem(storageKey, disabled);
  }, [storageKey, disabled]);

  const disable = useCallback(() => {
    setDisabled(true);
  }, []);

  const reset = useCallback(() => {
    setDisabled(false);
    localStorage.removeItem(storageKey); 
  }, [storageKey]);

  return { disabled, disable, reset };
}