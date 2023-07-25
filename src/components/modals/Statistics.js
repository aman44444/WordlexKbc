import React, { useContext } from 'react';
import { AppContext } from '../../App';
import Timer from '../Timer';
import ProgressBar from '../Progress';







const Statistics = ({ close }) => {
    const {
        gameOver,
    } = useContext(AppContext);



    return (
        <div className='modal'  >
            <div className='overlay'>
                <div className='stats'>
                    <button className='closebtn' >X</button>
                    <h1>Statistics</h1>

                   <h2>Days Progress</h2>
                    <ProgressBar/>

                    {gameOver.gameOver && <Timer />}

                </div>

            </div>
        </div>
    )
}


export default Statistics;