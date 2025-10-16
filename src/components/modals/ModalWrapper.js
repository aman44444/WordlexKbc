import "./ModalWrapper.css"

const ModalWrapper = ({ children,close }) => {

  return (
      <div className="overlay">
        <div className="modal" onClick={(e) => e.stopPropagation()}>
          <button className="closebtn" onClick={()=> close(false)}>X</button>
           {children}
        </div>
      </div>
  );
}; 

export default ModalWrapper;
