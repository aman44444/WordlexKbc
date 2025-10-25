// import ScratchRewardCard from "./components/game/Scratchcard";

// const Prize = ({ closeModal }) => {
//   return (
//     <div className="modal">
//       <div className="overlay">
//         <div className="rules">
//           <button
//             className="closebtn"
//             onClick={() => {
//               closeModal(false);
//             }}
//           >
//             X
//           </button>
//           <ScratchRewardCard />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Prize;

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
