import React, { useContext, useState } from 'react';
import {IoIosStats} from 'react-icons/io';
import { AppContext } from '../../App';

import Statistics from '../modals/Statistics';

const Stats = () => {
    const [openStats, setOpenStats] = useState(false)
    // const {gameOver,labelArray,
    //     updateStep,
    //     currentStep,} = useContext(AppContext)

    const toggleStats = () => {
        setOpenStats(prevState => !prevState);
      };

    return (
       <div className='icons' onClick={toggleStats}>
            <IoIosStats size={30} />
            {openStats && <Statistics/>}
        </div>  
    )
}

export default Stats;