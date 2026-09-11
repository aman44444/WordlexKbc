import "../Progress/Progress.css";
import { useProgress } from "../../../Context/ProgressContext";

const ProgressBar = () => {
  const { progress } = useProgress();

  return (
    <div>
      <div className="progress-container">
        {[1, 2, 3, 4, 5, 6, 7].map((day) => (
          <div key={day} className={`progress-bar day-${day}`}>
            <div
              className="progress"
              style={{ width: `${progress[day - 1]}%` }}
            >
              Day {day}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;