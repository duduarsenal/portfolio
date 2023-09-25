import React from 'react';
import './boxProjects.css'

function BoxProjects(props) {
    const dados = props.projectTech.split(",")
    let arrayTecnologias = []
    let i = 0;
    dados.forEach(element => {
        arrayTecnologias[i] = <p key={element} className='nameTec'>{element}</p>;
        i++;
    });

    return (
        <>
            <a className="flex flex-col items-center justify-evenly w-[100%] min-w-[300px] min-h-[570px] h-max rounded border-2 border-red-transparent cursor-pointer bg-black-transparent py-4 px-5 m-3" href={props.projectLink} target="_blank" ref={props.thatRef}>
                <h1 className="md:w-[60%] w-[100%] text-[160%] sm:text-[180%] mb-2.5 font-[500] leading-none border-b-4 border-red-transparent text-center rounded-md">{props.projectName}</h1>
                <img className={`w-[${props.projectImgWidth}] rounded my-2.5`} src={props.projectImg} alt="Site de Receitas" />
                <p className="sm:text-[100%] text-[90%]">{props.projectDesc}</p>
                <span className={`${props.projectColor} text-[120%] font-semibold flex flex-wrap w-full my-2.5`}>{arrayTecnologias}</span>
            </a>
        </>
    );
}

export default BoxProjects;