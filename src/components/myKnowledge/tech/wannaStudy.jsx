import React from 'react';
import { FaNodeJs } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { SiTypescript } from "react-icons/si";
import { DiAngularSimple } from "react-icons/di";
import BoxTechnology from '../boxTech/boxTech';


function WannaStudy() {
    return (
        <>
            <BoxTechnology srcImg={<FaNodeJs className='text-[#8bc500]'/>} altImg="NodeJS" tecName="nodejs" tecColor='#8bc500'/>
            <BoxTechnology srcImg={<TbBrandReactNative className='text-[#61dafb]'/>} altImg="React Native" tecName="React native" tecColor='#61dafb'/>
            <BoxTechnology srcImg={<SiTypescript className='text-[#3178c6]'/>} altImg="TypeScript" tecName="typescript" tecColor='#3178c6'/>
            <BoxTechnology srcImg={<DiAngularSimple className='text-[#db4465]'/>} altImg="Angular" tecName="angular" tecColor='#db4465'/>
            <BoxTechnology srcImg={<img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' className='w-12 text-[#4a9cdf]'/>} altImg="Phyton" tecName="phyton" tecColor='#4a9cdf'/>
            <BoxTechnology srcImg={<i className="csharp devicon-csharp-plain icon-lang text-[#b84dd3]"></i>} altImg="CSharp" tecName="csharp" tecColor='#b84dd3'/>
            <BoxTechnology srcImg={<img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' className='w-12 text-[#fc4d4d]'/>} altImg="Java" tecName="java" tecColor='#fc4d4d'/>
        </>
    );
}

export default WannaStudy;