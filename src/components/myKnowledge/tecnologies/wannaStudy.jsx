import React from 'react';
import { FaNodeJs } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { SiTypescript } from "react-icons/si";
import { DiAngularSimple } from "react-icons/di";
import BoxTecnologie from '../boxTecnologie/boxTecnologie';


function WannaStudy() {
    return (
        <>
            <BoxTecnologie srcImg={<FaNodeJs className='icon-lang text-[#8bc500]'/>} altImg="NodeJS" tecName="nodejs" tecColor='#8bc500'/>
            <BoxTecnologie srcImg={<TbBrandReactNative className='icon-lang text-[#61dafb]'/>} altImg="React Native" tecName="React native" tecColor='#61dafb'/>
            <BoxTecnologie srcImg={<SiTypescript className='icon-lang text-[#3178c6]'/>} altImg="TypeScript" tecName="typescript" tecColor='#3178c6'/>
            <BoxTecnologie srcImg={<DiAngularSimple className='icon-lang text-[#db4465]'/>} altImg="Angular" tecName="angular" tecColor='#db4465'/>
            <BoxTecnologie srcImg={<img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' className='icon-lang w-12 text-[#4a9cdf]'/>} altImg="Phyton" tecName="phyton" tecColor='#4a9cdf'/>
            <BoxTecnologie srcImg={<i className="csharp devicon-csharp-plain icon-lang text-[#b84dd3]"></i>} altImg="CSharp" tecName="csharp" tecColor='#b84dd3'/>
            <BoxTecnologie srcImg={<img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' className='icon-lang w-12 text-[#fc4d4d]'/>} altImg="Java" tecName="java" tecColor='#fc4d4d'/>
        </>
    );
}

export default WannaStudy;