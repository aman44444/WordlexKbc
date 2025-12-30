import ScratchRewardCard from "./components/game/Scratchcard";
import ModalWrapper from "./components/modals/ModalWrapper";

const Prize = ({ close }) => {
  return (
    <ModalWrapper close={close}>
      <ScratchRewardCard/>
    </ModalWrapper>
  );
};

export default Prize;
