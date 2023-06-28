import React from "react";
import Proficient from './tech/proficient'
import Learning from './tech/learning'
import WannaStudy from './tech/wannaStudy'
import ContainerTech from "./containerTech/containerTech";


export default function MyKnowledge() {
  return (
    <div className="w-[100%] max-w-[1360px]" id="meusconhecimentos">
      <div className="flex flex-col items-center justify-center px-[15px]">
        <h1 className="text-center font-semibold text-[200%]">Tecnologias</h1>
        <div className="w-[100%] flex flex-row sm:flex-col md:flex-row justify-evenly items-center h-max">
          <ContainerTech infos={<Proficient />} infoTitle="Tenho conhecimento"/>
          <ContainerTech infos={<Learning />} infoTitle="Aprendendo"/>
        </div>
        <div className="w-[100%] flex max-w-[1360px]">
          <ContainerTech infos={<WannaStudy />} infoTitle="Pretendo Estudar"/>
        </div>
      </div>
    </div>
  );
}
