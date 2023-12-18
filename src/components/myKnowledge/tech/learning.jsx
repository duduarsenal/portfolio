import React from 'react';
import { SiTypescript, SiDocker, SiNestjs } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";


function Learning(props) {
    //objeto com as tecnologias do "nivel"
    const languages = [
        {
            icon: <SiTypescript className='text-[#3178c6]'/>,
            tecName: 'typescript',
            tecColor: '#3178c6',
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
        },
        {
            icon: <SiNestjs className='text-[#e0224e]'/>,
            tecName: 'nestjs',
            tecColor: '#e0224e',
        }
    ]
    return (
        <>
        {/* chamando a função para varrer o array de objetos e setar o "estilo" de cada tecnologia */}
        {props.mapTech(languages)}
        </>
    );
}

export default Learning;