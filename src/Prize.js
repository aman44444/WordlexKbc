import React, { useContext, useState } from 'react';
import { AppContext } from './App';
import ScratchCoupon from './components/Scratchcard';
import ScratchRewardCard from './components/Scratchcard';

const Prize = ({closeModal}) => {
   
   

    return(
        <div className='modal'>
        <div className='overlay'>
        <div className='rules'>
            <button className='closebtn' onClick={() => {
                closeModal(false)
            }}>X</button>
            <ScratchRewardCard/>
         
        </div>
        </div>
        </div>

    )
}

export default Prize;