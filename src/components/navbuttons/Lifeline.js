import React ,{useState}from 'react'

import {FaHandsHelping} from 'react-icons/fa'
import LifelineButtons from '../LifelineButtons'



const Lifeline = () => {
    const [lifelines,setLifelines] = useState(false)
    return (
         <div className='icons' onClick={()=> {
            setLifelines(true)
            
           }}>
            <FaHandsHelping size={30}/>
            {lifelines && <LifelineButtons/>}
         </div>
         
    )
    
}

export default Lifeline;