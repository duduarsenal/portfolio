import React from 'react';

function ContainerTecnologies(props) {
    return (
        <>
            <div className="flex flex-col items-center w-[100%] h-max bg-black-transparent py-2.5 m-2 rounded-sm border-2 border-red-transparent">
                <h1 className="text-center leading-none font-[500] text-[160%] mb-[20px] border-b-2 border-red-transparent">{props.infoTitle}</h1>
                <div className='flex flex-wrap items-center h-[100%] w-[100%] justify-evenly'>
                    {props.infos}
                </div>
            </div>
        </>
    );
}

export default ContainerTecnologies;