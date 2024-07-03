import React ,{useState}from 'react'
import {FaHeartPulse} from "react-icons/fa6";
import LifelineButtons from '../LifelineButtons'




const Lifeline = () => {
    const [lifelines,setLifelines] = useState(false)
    
    return (
         <div className='icons' onClick={() => setLifelines(true)}>
            <FaHeartPulse size={29}/>
            {lifelines && <LifelineButtons/>}
         </div>
         
    )
    
}

export default Lifeline;