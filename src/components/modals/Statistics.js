import React, { useContext } from 'react';
import { AppContext } from '../../App';


import Timer from '../Timer';
import StepTracker from '../WinD';







const Statistics = ({ close }) => {
    const {
        gameOver,
    } = useContext(AppContext);




    //   function handleClick(event) {
    //     event.stopPropagation();
    // }


    return (
        <div className='modal'  >
            <div className='overlay'>
                <div className='stats'>
                    <button className='closebtn' >X</button>
                    <h1>Statistics</h1>

                    <div>
                        <div>
                            <div>4</div>
                            <div>Played</div>
                        </div>
                        <div>
                            <div>25</div>
                            <div>Win%</div>
                        </div>
                        <div>
                            <div>0</div>
                            <div>Current Streak</div>
                        </div>
                        <div>
                            <div>1</div>
                            <div>Max Streak</div>
                        </div>
                    </div>
                    <h1>GUESS DISTRIBUTION</h1>

                    <StepTracker />

                    {gameOver.gameOver && <Timer />}

                </div>

            </div>
        </div>
    )
}


export default Statistics;