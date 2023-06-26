import React from 'react';
import { BsGit } from "react-icons/bs";
import { SiPhp } from "react-icons/si";
import { TbBrandMysql } from "react-icons/tb";
import { RiReactjsLine } from "react-icons/ri";
import BoxTechnology from '../boxTech/boxTech';


function Learning() {
    return (
        <>
            <BoxTechnology srcImg={<BsGit className='icon-lang text-[#fc8464]'/>} altImg="GIT" tecName="git" tecColor='#fc8464'/>
            <BoxTechnology srcImg={<SiPhp className='icon-lang text-[#757bd6]'/>} altImg="PHP" tecName="php" tecColor='#757bd6'/>
            <BoxTechnology srcImg={<TbBrandMysql className='icon-lang text-[#2993d1]'/>} altImg="MYSQL" tecName="mysql" tecColor='#2993d1'/>
            <BoxTechnology srcImg={<RiReactjsLine className='icon-lang text-[#61dafb]'/>} altImg="REACTJS" tecName="reactjs" tecColor='#61dafb'/>
        </>
    );
}

export default Learning;