import { useState } from "react";
import { IoIosStats } from "react-icons/io";

const Stats = ({ onOpen }) => {
  const [hover , setHover] = useState(false)

  return (
    <div className="icons" onClick={onOpen}>
      <IoIosStats 
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{color: hover ? "#528d4e": ""}}
      />
    </div>
  );
};

export default Stats;
