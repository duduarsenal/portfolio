import React from 'react';
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import BoxTecnologie from '../boxTecnologie/boxTecnologie';


function Proficient() {
    return (
        <>
            <BoxTecnologie srcImg={<AiFillHtml5 className='icon-lang text-[#f16529]'/>} altImg="HTML" tecName="html" tecColor='#f16529'/>
            <BoxTecnologie srcImg={<DiCss3 className='icon-lang text-[#0097db]'/>} altImg="CSS" tecName="css" tecColor='#0097db'/>
            <BoxTecnologie srcImg={<SiJavascript className='icon-lang text-[#f7df1e]'/>} altImg="JavaScript" tecName="javascript" tecColor='#f7df1e'/>
        </>
    );
}

export default Proficient;