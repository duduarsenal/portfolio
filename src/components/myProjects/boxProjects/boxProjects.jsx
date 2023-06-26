import React from 'react';

function BoxProjects(props) {
    return (
        <>
            <a className="flex flex-col items-center justify-evenly w-[100%] min-w-[300px] h-[570px] rounded border-2 border-red-transparent cursor-pointer md:w-[45%] bg-black-transparent py-4 px-5 m-3" href={props.projectLink} target="_blank">
                <h1 className="md:w-[60%] w-[100%] text-[180%] mb-2.5 font-[500] leading-none border-b-4 border-red-transparent text-center rounded-md">{props.projectName}</h1>
                <img className={`w-[${props.projectImgWidth}] rounded my-2.5`} src={props.projectImg} alt="Site de Receitas" />
                <p className="sm:text-[100%] text-[90%]">{props.projectDesc}</p>
                <span className={`text-[${props.projectColor}] text-[120%] font-semibold`}>{props.projectTech}</span>
            </a>
        </>
    );
}

export default BoxProjects;