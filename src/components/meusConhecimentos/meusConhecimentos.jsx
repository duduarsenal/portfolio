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
    <div className="meusconhecimentos" id="meusconhecimentos">
      <div className="conhec-content">
        <div className="proef-estud">
          <div className="proeficiente">
            <h1 className="titulo-linguagens">Proficiente</h1>
            <div className="linguagens-container">
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
          <div className="aprendendo">
            <h1 className="titulo-linguagens">Em curso</h1>
            <div className="linguagens-container">
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
        <div className="queroaprender">
          <h1 className="titulo-linguagens">Pretendo Estudar</h1>
          <div className="linguagens-container">
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
            <div className="linguagens">
              {/* <DiPython className='phyton icon-know'/> */}
              <img
                className="phyton"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                style={{
                  width: "45%"
                }}/>
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
                }}/>
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
  );
}
