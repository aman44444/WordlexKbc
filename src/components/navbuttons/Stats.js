import React, { useContext, useState } from 'react';
import {IoIosStats} from 'react-icons/io';
import { AppContext } from '../../App';

import Statistics from '../modals/Statistics';

const Stats = () => {
    const [openStats, setOpenStats] = useState(false)
    const {gameOver,labelArray,
        updateStep,
        currentStep,} = useContext(AppContext)

    return (
       <> <div className='icons' onClick={()=>{
            if(openStats === false){
                setOpenStats(true)
               }else{
                setOpenStats(false)
               }
        }}>
            <IoIosStats size={30} />
          {openStats && <Statistics/>}


        </div>

       
       
        </>
        
    )
}

export default Stats;