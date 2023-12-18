import React from 'react';

function ContainerTech(props) {
    return (
        <>
            <fieldset className="flex flex-col h-max px-4 rounded-lg my-2 border-2 border-red-transparent">
                <legend className="font-[400] text-[1.3rem] sm:text-[1.6rem]">{props.infoTitle}</legend>
                <div className='flex flex-wrap items-center justify-center h-full w-full md:gap-0 gap-4'>
                    {props.infos}
                </div>
            </fieldset>
        </>
    );
}

export default ContainerTech;