import React, {  useState } from "react";
import { IoIosStats } from "react-icons/io";
import Statistics from "../../modals/Statistics";

const Stats = () => {
  const [openStats, setOpenStats] = useState(false);
  const [hover , setHover] = useState(false)
  // const {gameOver,labelArray,
  //     updateStep,`
  //     currentStep,} = useContext(AppContext)

  const toggleStats = () => {
    setOpenStats((prevState) => !prevState);
  };

  return (
    <div className="icons" onClick={toggleStats}>
      <IoIosStats 
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{color: hover ? "#528d4e": ""}}
      />
      {openStats && <Statistics close={setOpenStats}/>}
    </div>
  );
};

export default Stats;
