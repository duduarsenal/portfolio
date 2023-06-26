import React from 'react';

function boxTecnologie(props) {
    return (
        <>
            <div className="flex flex-col justify-evenly items-center font-[600] rounded bg-hover-black w-32 h-24 border-2 border-red-transparent my-2">
                <span className={`text-[260%] rounded ${props.tecName}`}>{props.srcImg}</span>
                <p className={`text-[${props.tecColor}] ${props.tecName}`}>{props.tecName.toUpperCase()}</p>
            </div>
        </>
    );
}

export default boxTecnologie;