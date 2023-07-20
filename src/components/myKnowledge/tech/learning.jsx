import React from 'react';
import { BsGit } from "react-icons/bs";
import { SiPhp } from "react-icons/si";
import { TbBrandMysql } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";


function Learning(props) {
    //objeto com as tecnologias do "nivel"
    const languages = [
        {
            icon: <BsGit className='icon-lang text-[#fc8464]'/>,
            tecName: 'git',
            tecColor: '#fc8464',
        },
        {
            icon: <SiPhp className='icon-lang text-[#757bd6]'/>,
            tecName: 'php',
            tecColor: '#757bd6',
        },
        {
            icon: <TbBrandMysql className='icon-lang text-[#2993d1]'/>,
            tecName: 'mysql',
            tecColor: '#2993d1',
        },
        {
            icon: <FaNodeJs className='text-[#8bc500]'/>,
            tecName: 'nodejs',
            tecColor: '#8bc500',
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