import React from 'react';
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";


function Proficient(props) {
    //objeto com as tecnologias do "nivel"
    const languages = [
        {
            icon: <AiFillHtml5 className='icon-lang text-[#f16529]'/>,
            tecName: 'html',
            tecColor: '#f16529'
        },
        {
            icon: <DiCss3 className='icon-lang text-[#0097db]'/>,
            tecName: 'css',
            tecColor: '#0097db',
        },
        {
            icon: <SiJavascript className='icon-lang text-[#f7df1e]'/>,
            tecName: 'javascript',
            tecColor: '#f7df1e',
        },
        {
            icon: <RiReactjsLine className='icon-lang text-[#61dafb]'/>,
            tecName: 'reactjs',
            tecColor: '#61dafb',
        }
    ]
    return (
        <>
            {/* chamando a função para varrer o array de objetos e setar o "estilo" de cada tecnologia */}
            {props.mapTech(languages)}
        </>
    );
}

export default Proficient;