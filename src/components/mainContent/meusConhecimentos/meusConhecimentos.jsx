import React from 'react';
import './meusconhecimentos.css';
import { AiFillHtml5 } from 'react-icons/ai'
import { DiCss3, DiRuby, DiAngularSimple, DiPython, DiJava } from 'react-icons/di'
import { SiJavascript, SiPhp, SiMysql, SiTypescript, SiCplusplus } from 'react-icons/si'
import { BsGit } from 'react-icons/bs'
import { RiReactjsLine } from 'react-icons/ri'
import { FaNodeJs } from 'react-icons/fa'
import { TbBrandReactNative, TbBrandMysql } from 'react-icons/tb'



export default function MeusConhecimentos() {
    return (
        <div className='meusconhecimentos'>
            <div className="conhecimentos">
                <div className="jasei-aprendendo">
                    <div className="seiaplicar">
                        <h1 className='title-know'>Ja sei Aplicar</h1>
                        <div className='flex-know'>
                            <div className="html flex-lang">
                                <AiFillHtml5 className='html icon-know' />
                                <p className='html'>HTML</p>
                            </div>
                            <div className="css flex-lang">
                                <DiCss3 className='css icon-know' />
                                <p className='css'>CSS</p>
                            </div>
                            <div className="js flex-lang">
                                <SiJavascript className='js icon-know' />
                                <p className='js'>JavaScript</p>
                            </div>
                            <div className="git flex-lang">
                                <BsGit className='git icon-know' />
                                <p className='git'>Git</p>
                            </div>
                        </div>
                    </div>
                    <div className="aprendendo">
                        <h1 className='title-know'>Aprendendo</h1>
                        <div className='flex-know'>
                            <div className="php flex-lang">
                                <SiPhp className='php icon icon-know'/>
                                <p className='php'>PHP</p>
                            </div>
                            <div className="mysql flex-lang">
                                <TbBrandMysql className='mysql icon-know'/>
                                <p className='mysql'>My<span className='sql'>SQL</span></p>
                            </div>
                            <div className="reactjs flex-lang">
                                <RiReactjsLine className='reactjs icon-know'/>
                                <p className='reactjs'>ReactJS</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="queroaprender">
                    <h1 className='title-know'>Pretendo Estudar</h1>
                    <div className='flex-know'>
                        <div className="nodejs flex-lang">
                            <FaNodeJs className='nodejs icon-know'/>
                            <p className='nodejs'>NodeJS</p>
                        </div>
                        <div className="reactnative flex-lang">
                            <TbBrandReactNative className='reactnative icon-know'/>
                            <p className='reactnative'>React Native</p>
                        </div>
                        <div className="typescript flex-lang">
                            <SiTypescript className='typescript icon-know'/>
                            <p className='typescript'>TypeScript</p>
                        </div>
                        <div className="ruby flex-lang">
                            <DiRuby className='ruby icon-know'/>
                            <p className='ruby'>Ruby</p>
                        </div>
                        <div className="angular flex-lang">
                            <DiAngularSimple className='angular icon icon-know'/>
                            <p className='angular'>Angular</p>
                        </div>
                        <div className="phyton flex-lang">
                            {/* <DiPython className='phyton icon-know'/> */}
                            <img 
                            className="phyton" 
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                            style={
                                {
                                    width: '45%', 
                                    filter: 'saturate(0)'
                                }
                                }/>
                            <p className='phyton'>Phyton</p>
                        </div>
                        <div className="csharp flex-lang">
                            <i class="csharp devicon-csharp-plain icon-know"></i>
                            <p className='csharp'>CSharp (C#)</p>
                        </div>
                        <div className="java flex-lang">
                        <img 
                        className='java'
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" 
                        style={
                            {
                                width: '50%',
                                filter: 'contrast(0)',
                            }
                        }
                        />
                            <p className='java'>Java</p>
                        </div>
                        <div className="cplusplus flex-lang">
                            <SiCplusplus className='cplusplus icon-know'/>
                            <p className='cplusplus'>C++(Games)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
