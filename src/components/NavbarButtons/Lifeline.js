import React ,{useState}from 'react'
import {FaHeartPulse} from "react-icons/fa6";
import LifelineButtons from '../LifelineButtons'


const Lifeline = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = (e) => {
        e.stopPropagation();
        setIsOpen(prev => !prev); 
    };
    
    return (
         <div className='icons' onClick={handleClick}>
            <FaHeartPulse size={29}/>
            {isOpen && <LifelineButtons/>}
         </div>
         
    )
    
}

export default Lifeline;