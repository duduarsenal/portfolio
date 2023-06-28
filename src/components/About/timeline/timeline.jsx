import React from "react";
import "./timeline.css";

export default function Timeline() {
  return (
    <div className="timeline w-[100%] flex justify-center">
      <div className="timeline-content w-[97%] flex flex-col items-center border-solid border-red-transparent bg-black-transparent border-2 h-max my-[10px] rounded overflow-hidden">
        <h1 className="mytimeline-title text-center font-semibold text-[150%] mt-[10px] sm:text-[200%] w-[80%] sm:w-[35%]">Minha Linha do Tempo</h1>
        <ul className="timelineTop mb-[200px] flex justify-evenly items-center w-[90%]">
          <li className="itemTimeLine">
            <h1 className="title-timeline">2019/1</h1>
            <p className="desc-timeline">Meu primeiro contato na área de <span className="text-[rgb(255,45,45)]">programação</span> pela Faculdade de Analise e Desenvolvimento de Sistemas</p>
          </li>
          <li className="itemTimeLine">
            <h1 className="title-timeline">2019/2</h1>
            <p className="desc-timeline">Meu primeiro projeto feito na Linguagem C, um sistema de controle de uma pizzaria, feito em console application</p>
          </li>
          <li className="itemTimeLine">
            <h1 className="title-timeline">2020/2021</h1>
            <p className="desc-timeline">Tranquei o curso devido a pandemia</p>
          </li>
          <li className="itemTimeLine">
            <h1 className="title-timeline">2022</h1>
            <p className="desc-timeline">Voltei o curso ja iniciando um novo projeto, uma página de seguros residenciais, feito com Angular/Bootstrap/C#</p>
          </li>
          <li className="itemTimeLine">
            <h1 className="title-timeline">2023</h1>
            <p className="desc-timeline">Iniciei 3 novos projetos, além do meu portfólio e entrei mais afundo no mundo de dev, estudando ReactJS, PHP, MySQL e etc..</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
