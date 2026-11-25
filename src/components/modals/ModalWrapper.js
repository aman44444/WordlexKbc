import "./ModalWrapper.css"
import { FiChevronLeft } from "react-icons/fi";

const ModalWrapper = ({ children, close, onBack, className = "" }) => {

  return (
      <div className="overlay" onClick={() => close(false)}>
        <div className={`modal ${className}`} role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
          {onBack && (
            <button className="backbtn" onClick={onBack} aria-label="Back to settings">
              <FiChevronLeft aria-hidden="true" />
            </button>
          )}
          <button className="closebtn" onClick={() => close(false)} aria-label="Close modal">
            X
          </button>
          {children}
        </div>
      </div>
  );
}; 

export default ModalWrapper;
