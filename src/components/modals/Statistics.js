import React, { useContext } from "react";
import { AppContext } from "../../App";
import Timer from "../game/Timer";
import ProgressBar from "../game/Progress/Progress";
import ModalWrapper from "./ModalWrapper";

const Statistics = ({ close }) => {
  const { gameOver } = useContext(AppContext);

  return (
   <ModalWrapper close={close}>
       <h1>Statistics</h1>
          <h2>Days Progress</h2>
          <ProgressBar />
          {gameOver.gameOver && <Timer />}
   </ModalWrapper>
  );
};

export default Statistics;
