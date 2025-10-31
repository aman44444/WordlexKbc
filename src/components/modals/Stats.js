import React, {  useState } from "react";
import { IoIosStats } from "react-icons/io";
import Statistics from "./Statistics";
import { useAuth } from "../../Context/AuthContext";
import AuthGate from "../auth/AuthGate";

const Stats = () => {
  const [openStats, setOpenStats] = useState(false);
  const [hover , setHover] = useState(false)
  const {currentUser} = useAuth()

  return (
    <div className="icons" onClick={() => setOpenStats(true)}>
      <IoIosStats 
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{color: hover ? "#528d4e": ""}}
      />
      {openStats && (currentUser ?  <Statistics close={setOpenStats}/> : <AuthGate onAuthSuccess={()=> setOpenStats(false)}/>)
      }
    </div>
  );
};

export default Stats;
