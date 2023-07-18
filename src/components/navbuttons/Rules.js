import React,{useState}from 'react';
import {BiHelpCircle} from 'react-icons/bi'
import Instructions from '../modals/Instructions';

const Rules = () => {
    const [rules, setRules] = useState(false)
    return (
        <div className='icons' onClick={() => {
           if(rules === false){
            setRules(true)
           }else{
            setRules(false)
           }
        }}>
           <BiHelpCircle size={30}/>
           {rules && <Instructions close={setRules}/>}
        </div>
    )
}

export default Rules;