import "./ModalWrapper.css"

const ModalWrapper = ({ children,close }) => {

  return (
      <div className="overlay">
        <div className="modal" role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
          <button className="closebtn" onClick={()=> close(false)}>X</button>
           {children}
        </div>
      </div>
  );
}; 

export default ModalWrapper;
