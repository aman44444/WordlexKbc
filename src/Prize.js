import React from 'react';
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