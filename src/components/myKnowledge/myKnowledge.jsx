import React from "react";
import Proficient from './tecnologies/proficient'
import Learning from './tecnologies/learning'
import WannaStudy from './tecnologies/wannaStudy'
import ContainerTecnologies from "./containerTecnologies/containerTecnologies";


export default function MyKnowledge() {
  return (
    <div className="w-[100%] max-w-[1360px]" id="meusconhecimentos">
      <div className="w-[100%] flex flex-col items-center justify-center">
        <h1 className="w-[100%] text-center font-semibold text-[200%]">Tecnologias</h1>
        <div className="w-[100%] flex flex-row sm:flex-col md:flex-row justify-evenly items-center h-max">
          <ContainerTecnologies infos={<Proficient />} infoTitle="Proficiente"/>
          <ContainerTecnologies infos={<Learning />} infoTitle="Aprendendo"/>
        </div>
        <div className=" w-[100%] flex max-w-[1360px]">
          <ContainerTecnologies infos={<WannaStudy />} infoTitle="Pretendo Estudar"/>
        </div>
      </div>
    </div>
  );
}
