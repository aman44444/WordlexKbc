import ScratchRewardCard from "../game/Scratchcard";
import ModalWrapper from "./ModalWrapper";

const Prize = ({ close }) => {
  return (
    <ModalWrapper close={close}>
      <ScratchRewardCard/>
    </ModalWrapper>
  );
};

export default Prize;
