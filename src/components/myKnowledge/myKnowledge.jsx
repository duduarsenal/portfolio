import React from "react";
import Proficient from './tech/proficient'
import Learning from './tech/learning'
import WannaStudy from './tech/wannaStudy'
import ContainerTech from "./containerTech/containerTech";


export default function MyKnowledge() {
  // função para varrer o array de tecnologias de cada "nivel" em cada um dos componentes
  function mapTech(items){
    return (
    items.map((item) => (
      <div className="flex flex-col justify-center gap-1 items-center font-[500] rounded w-32 h-24 my-2 drop-shadow-[0_0_35px_rgba(255,0,0,0.3)]"
      key={item.tecName}>
        <span className={`text-[2.25rem]`}>{item.icon}</span>
        <p className={`text-[${item.tecColor}] text-[1.1rem]`}>{item.tecName.toUpperCase()}</p>
      </div>
    ))
    )
  }

  return (
    <div className="w-[100%] max-w-[1360px]" id="meusconhecimentos">
      <div className="flex flex-col items-center justify-center px-[15px]">
        <h1 className="text-center font-[500] text-[1.8rem] sm:text-[200%]">Tecnologias</h1>
        <div className="flex flex-col justify-evenly items-start h-max w-full">
          {/* Container para as tecnologias */}
          <ContainerTech infos={<Proficient mapTech={mapTech}/>} infoTitle="Tenho conhecimento"/>
          <ContainerTech infos={<Learning mapTech={mapTech}/>} infoTitle="Aprendendo"/>
          <ContainerTech infos={<WannaStudy mapTech={mapTech}/>} infoTitle="Pretendo Estudar"/>
        </div>
      </div>
    </div>
  );
}
