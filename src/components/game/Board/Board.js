import Letter from "../Letter/Letter";
import "../Board/Board.css"

const Board = () => {
  const rows = Array.from({ length: 6 }, (_, rowIndex) => (
    <div className="row" key={rowIndex}>
      {Array.from({ length: 5 }, (_, letterIndex) => (
        <Letter
          key={letterIndex}
          letterPos={letterIndex}
          attemptVal={rowIndex}
        />
      ))}
    </div>
  ));
  return <div className="board">{rows}</div>;
};

export default Board;
