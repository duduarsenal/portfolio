import React from "react";
import Proficient from './tech/proficient'
import Learning from './tech/learning'
import WannaStudy from './tech/wannaStudy'
import ContainerTechnologys from "./containerTech/containerTech";


export default function MyKnowledge() {
  return (
    <div className="w-[100%] max-w-[1360px]" id="meusconhecimentos">
      <div className="w-[100%] flex flex-col items-center justify-center">
        <h1 className="w-[100%] text-center font-semibold text-[200%]">Tecnologias</h1>
        <div className="w-[100%] flex flex-row sm:flex-col md:flex-row justify-evenly items-center h-max">
          <ContainerTechnologys infos={<Proficient />} infoTitle="Proficiente"/>
          <ContainerTechnologys infos={<Learning />} infoTitle="Aprendendo"/>
        </div>
        <div className=" w-[100%] flex max-w-[1360px]">
          <ContainerTechnologys infos={<WannaStudy />} infoTitle="Pretendo Estudar"/>
        </div>
      </div>
    </div>
  );
}
