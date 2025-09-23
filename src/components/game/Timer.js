import React, { useState, useEffect } from "react";
import "../game/Timer.css"

const Timer = () => {
  const [timeRemaining, setTimeRemaining] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const getNextMidnight = () => {
    const now = new Date();
    const nextMidnight = new Date(now);
    nextMidnight.setHours(24, 0, 0, 0); // Set time to next midnight
    return nextMidnight;
  };

  const getTime = () => {
    const time = getNextMidnight() - Date.now();

    setTimeRemaining({
      hours: Math.floor((time / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((time / 1000 / 60) % 60),
      seconds: Math.floor((time / 1000) % 60),
    });
  };

  useEffect(() => {
    getTime();
    const interval = setInterval(getTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="timer" role="timer">
      <div>NEXT WORDLE</div>
      <div className="col-4">
        <div className="box">
          <p id="hour">{String(timeRemaining.hours).padStart(2, "0")}</p>
          <span className="text">Hours</span>
        </div>
      </div>
      <div className="col-4">
        <div className="box">
          <p id="minute">{String(timeRemaining.minutes).padStart(2, "0")}</p>
          <span className="text">Minutes</span>
        </div>
      </div>
      <div className="col-4">
        <div className="box">
          <p id="second">{String(timeRemaining.seconds).padStart(2, "0")}</p>
          <span className="text">Seconds</span>
        </div>
      </div>
    </div>
  );
};
export default Timer;
