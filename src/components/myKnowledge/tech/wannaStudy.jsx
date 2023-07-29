import React from 'react';
import { TbBrandReactNative, TbBrandNextjs } from "react-icons/tb";
import { SiTypescript, SiDocker } from "react-icons/si";
import { DiAngularSimple } from "react-icons/di";


function WannaStudy(props) {
    //objeto com as tecnologias do "nivel"
    const languages = [
        {
            icon: <SiTypescript className='text-[#3178c6]'/>,
            tecName: 'typescript',
            tecColor: '#3178c6',
        },
        {
            icon: <DiAngularSimple className='text-[#db4465] text-[2.5rem]'/>,
            tecName: 'angular',
            tecColor: '#db4465',
        },
        {
            icon: <TbBrandReactNative className='text-[#61dafb]'/>,
            tecName: 'React native',
            tecColor: '#61dafb',
        },
        {
            icon: <TbBrandNextjs className='text-[gray]'/>,
            tecName: 'nextjs',
            tecColor: 'gray',
        },
        {
            icon: <SiDocker className='text-[#0db7ed]'/>,
            tecName: 'docker',
            tecColor: '#0db7ed',
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