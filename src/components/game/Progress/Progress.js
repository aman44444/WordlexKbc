import "../Progress/Progress.css";
import { useProgress } from "../../../Context/ProgressContext";
import { GiPresent } from "react-icons/gi";

const ProgressBar = () => {
  const { progress } = useProgress();

  return (
    <div>
      <div className="progress-container">
        <span className="progress-track-line" aria-hidden="true" />
        {[1, 2, 3, 4, 5, 6, 7].map((day) => {
          const isComplete = progress[day - 1] === 100;
          const isMilestone = [3, 5, 7].includes(day);

          return (
            <div key={day} className="progress-row">
            <div className="progress-bar">
              <div
                className="progress"
                style={{ "--progress-target": `${progress[day - 1]}%` }}
              >
                Day {day}
              </div>
            </div>
            <span className="progress-marker-slot">
              {isMilestone ? (
                <span
                  className={`progress-gift ${isComplete ? "completed" : ""}`}
                  role="img"
                  aria-label={`Day ${day} reward${isComplete ? " earned" : ""}`}
                >
                  <GiPresent aria-hidden="true" />
                </span>
              ) : (
                <span
                  className={`progress-node ${isComplete ? "completed" : ""}`}
                  role="img"
                  aria-label={`Day ${day}${isComplete ? " completed" : " incomplete"}`}
                />
              )}
            </span>
          </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressBar;