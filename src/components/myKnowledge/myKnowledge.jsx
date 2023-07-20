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
      <div className="flex flex-col justify-evenly items-center font-[600] rounded bg-hover-black w-32 h-24 border-2 border-red-transparent my-2"
      key={item.tecName}>
        <span className={`text-[260%] rounded ${item.tecName}`}>{item.icon}</span>
        <p className={`text-[${item.tecColor}] ${item.tecName}`}>{item.tecName.toUpperCase()}</p>
      </div>
    ))
    )
  }

  return (
    <div className="w-[100%] max-w-[1360px]" id="meusconhecimentos">
      <div className="flex flex-col items-center justify-center px-[15px]">
        <h1 className="text-center font-semibold text-[180%] sm:text-[200%]">Tecnologias</h1>
        <div className="w-[100%] flex flex-row sm:flex-col md:flex-row justify-evenly items-center h-max">
          {/* Container para as tecnologias */}
          <ContainerTech infos={<Proficient mapTech={mapTech}/>} infoTitle="Tenho conhecimento"/>
          <ContainerTech infos={<Learning mapTech={mapTech}/>} infoTitle="Aprendendo"/>
        </div>
        <div className="w-[100%] flex max-w-[1360px]">
          <ContainerTech infos={<WannaStudy mapTech={mapTech}/>} infoTitle="Pretendo Estudar"/>
        </div>
      </div>
    </div>
  );
}
