import React from "react";
import "./meusconhecimentos.css";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3, DiRuby, DiAngularSimple } from "react-icons/di";
import { SiJavascript, SiPhp, SiTypescript, SiCplusplus } from "react-icons/si";
import { BsGit } from "react-icons/bs";
import { RiReactjsLine } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { TbBrandReactNative, TbBrandMysql } from "react-icons/tb";

export default function MeusConhecimentos() {
  return (
    <div className="w-[100%]" id="meusconhecimentos">
      <div className="w-[100%] flex flex-col items-center justify-center">
        <h1 className="w-[100%] text-center font-semibold text-[200%]">Tecnologias</h1>
        <div className="w-[90%] flex flex-row sm:flex-col md:flex-row justify-evenly items-center h-max">
          <div className="proeficiente flex flex-col sm:mx-0 mx-[5px] items-center sm:w-[100%] md:w-[50%] w-[60%] min-w-[150px] sm:h-max h-[400px]">
            <h1 className="titulo-linguagens">Proficiente</h1>
            <div className="linguagens-container flex sm:flex-row flex-col items-center sm:h-max h-[100%]">
              <div className="linguagens">
                <AiFillHtml5 className="html icon-lang" />
                <p className="html">HTML</p>
              </div>
              <div className="linguagens">
                <DiCss3 className="css icon-lang" />
                <p className="css">CSS</p>
              </div>
              <div className="linguagens">
                <SiJavascript className="js icon-lang" />
                <p className="js">JavaScript</p>
              </div>
            </div>
          </div>
          <div className="aprendendo flex flex-col sm:m-[15px] m-[5px] items-center sm:w-[100%] md:w-[50%] w-[60%] min-w-[150px] sm:h-max h-[400px]">
            <h1 className="titulo-linguagens">Em curso</h1>
            <div className="linguagens-container flex sm:flex-row flex-col items-center sm:h-max h-[100%]">
              <div className="linguagens">
                <BsGit className="git icon-lang" />
                <p className="git">Git</p>
              </div>
              <div className="linguagens">
                <SiPhp className="php icon icon-lang" />
                <p className="php">PHP</p>
              </div>
              <div className="linguagens">
                <TbBrandMysql className="mysql icon-lang" />
                <p className="mysql">
                  My<span className="sql">SQL</span>
                </p>
              </div>
              <div className="linguagens">
                <RiReactjsLine className="reactjs icon-lang" />
                <p className="reactjs">ReactJS</p>
              </div>
            </div>
          </div>
        </div>
        <div className="queroaprender lg:w-[95%] md:w-[50%] w-[85%] flex flex-col items-center justify-center min-w-[300px]">
          <h1 className="titulo-linguagens">Pretendo Estudar</h1>
          <div className="linguagens-container">
            <div className="flex-div flex flex-col lg:flex-row justify-around lg:w-[60%] w-max px-[10px] items-center">
              <div className="linguagens">
                <FaNodeJs className="nodejs icon-lang" />
                <p className="nodejs">NodeJS</p>
              </div>
              <div className="linguagens">
                <TbBrandReactNative className="reactnative icon-lang" />
                <p className="reactnative">React Native</p>
              </div>
              <div className="linguagens">
                <SiTypescript className="typescript icon-lang" />
                <p className="typescript">TypeScript</p>
              </div>
              <div className="linguagens">
                <DiRuby className="ruby icon-lang" />
                <p className="ruby">Ruby</p>
              </div>
              <div className="linguagens">
                <DiAngularSimple className="angular icon icon-lang" />
                <p className="angular">Angular</p>
              </div>
            </div>
            <div className="flex-div flex justify-around flex-col lg:flex-row lg:w-[50%] w-max px-[10px]">
              <div className="linguagens">
                {/* <DiPython className='phyton icon-know'/> */}
                <img
                  className="phyton"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                  style={{
                    width: "45%"
                  }} />
                <p className="phyton">Phyton</p>
              </div>
              <div className="linguagens">
                <i class="csharp devicon-csharp-plain icon-lang"></i>
                <p className="csharp">CSharp (C#)</p>
              </div>
              <div className="linguagens">
                <img
                  className="java"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
                  style={{
                    width: "50%",
                  }} />
                <p className="java">Java</p>
              </div>
              <div className="linguagens">
                <SiCplusplus className="cplusplus icon-lang" />
                <p className="cplusplus">C++(Games)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
