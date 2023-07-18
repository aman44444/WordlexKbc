import React from 'react'
import Doubledip from './lifelineButtons/Doubledip';
import Fiftyfifty from './lifelineButtons/fiftyfifty';
import Flip from './lifelineButtons/Flip'


const LifelineButtons = () => {
    return (
      <div className='lifediv'>
        <Fiftyfifty/>
         <Flip/>
        <Doubledip/>
      </div>
    )
}

export default LifelineButtons;