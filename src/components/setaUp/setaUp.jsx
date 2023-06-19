import React from 'react';
import './setaUp.css'
import { AiOutlineArrowUp } from 'react-icons/ai'

export default function SetaUp() {

    const setaUp = () =>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <div className='scrollToTop'>
            <div id='seta_up' onClick={setaUp}>
                <AiOutlineArrowUp className='setaUp'/>
            </div>
        </div>
    );
}
