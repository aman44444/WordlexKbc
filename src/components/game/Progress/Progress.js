import Prize from "../../../Prize";
import "../Progress/Progress.css"
import { useProgress } from "../../../Context/ProgressContext";

const ProgressBar = () => {

     const { progress, currentDay } = useProgress();

  //   const [progress, setProgress] = useState([0, 0, 0, 0]);
  //   const [currentDay, setCurrentDay] = useState(1);

  // Calculate the progress for each day (25% per day for 4 days)
  const calculateProgress = (day) => {
    return (day / 7) * 100;
  };

  // Handle the click event to advance to the next day

  //   useEffect(() => {
  //     if (gameOver.gameOver && gameOver.guessedWord) {
  //         if (currentDay < 4) {
  //             setCurrentDay((prevDay) => prevDay + 1);
  //             const updatedProgress = [...progress];
  //             updatedProgress[currentDay - 1] = 100;
  //             setProgress(updatedProgress);
  //           }
  //     } else if (gameOver.gameOver) {
  //         if (currentDay < 4) {
  //             setCurrentDay(1);
  //             const updatedProgress = [...progress];
  //             updatedProgress[currentDay - 4] = 100;
  //             setProgress(updatedProgress);
  //           }
  //     }

  //   }, [gameOver]);

  //   const handleNextDay = () => {
  //     if (currentDay <= 7) {
  //       setCurrentDay((prevDay) => prevDay + 1);
  //       const updatedProgress = [...progress];
  //       updatedProgress[currentDay - 1] = 100;
  //       setProgress(updatedProgress);
  //     }
  //   };

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
      {/* <button onClick={handleNextDay} disabled={currentDay > 7}>
        Next Day
      </button> */}
    </div>
  );
};

export default ProgressBar;
