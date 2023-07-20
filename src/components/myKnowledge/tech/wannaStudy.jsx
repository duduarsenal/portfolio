import React from 'react';
import { TbBrandReactNative } from "react-icons/tb";
import { SiTypescript } from "react-icons/si";
import { DiAngularSimple } from "react-icons/di";


function WannaStudy(props) {
    //objeto com as tecnologias do "nivel"
    const languages = [
        {
            icon: <TbBrandReactNative className='text-[#61dafb]'/>,
            tecName: 'React native',
            tecColor: '#61dafb',
        },
        {
            icon: <SiTypescript className='text-[#3178c6]'/>,
            tecName: 'typescript',
            tecColor: '#3178c6',
        },
        {
            icon: <DiAngularSimple className='text-[#db4465]'/>,
            tecName: 'angular',
            tecColor: '#db4465',
        },
        {
            icon: <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' className='w-12 text-[#4a9cdf]'/>,
            tecName: 'phyton',
            tecColor: '#4a9cdf',
        },
        {
            icon: <i className="csharp devicon-csharp-plain icon-lang text-[#b84dd3]"></i>,
            tecName: 'csharp',
            tecColor: '#b84dd3',
        },
        {
            icon: <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' className='w-12 text-[#fc4d4d]'/>,
            tecName: 'java',
            tecColor: '#fc4d4d',
        }
    ]
    return (
        <>
            {/* chamando a função para varrer o array de objetos e setar o "estilo" de cada tecnologia */}
            {props.mapTech(languages)}
        </>
    );
}

export default WannaStudy;