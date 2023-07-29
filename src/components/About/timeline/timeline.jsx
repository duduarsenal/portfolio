import React from "react";
import "./timeline.css";

export default function Timeline() {
  const timelines = [ 
    {
      title: '2019/1',
      desc: `Minha fascinação pela programação começou na faculdade de Análise e Desenvolvimento de Sistemas. Agora, busco constantemente aprimorar minhas habilidades nessa área maravilhosa.`
    },
    {
      title: '2019/2',
      desc: 'Iniciando minha jornada em programação, desenvolvi um sistema de controle para uma pizzaria com a Linguagem C e a interface em console application.'
    },
    {
      title: '2020/2021',
      desc: 'Devido à pandemia, tive que interromper meu curso temporariamente.'
    },
    {
      title: '2022',
      desc: 'Retornei ao curso e, empolgado, iniciei um novo projeto: uma página de seguros residenciais. Utilizando Angular, Bootstrap e C#.'
    },
    {
      title: '2023',
      desc: 'Iniciei três novos projetos e mergulhei ainda mais no mundo da programação, aprimorando meus conhecimentos em ReactJS, PHP, MySQL e outras tecnologias, além de iniciar a construção do meu portfólio.'
    },
  ]
  return (
    <div className="timeline w-[100%] flex justify-center max-w-[1360px] pb-4">
      <div className="timeline-content w-[97%] flex flex-col items-center border-solid border-red-transparent bg-black-transparent border-2 h-max my-[10px] rounded overflow-hidden px-2">
        <h1 className="mytimeline-title text-center font-semibold text-[150%] mt-[10px] sm:text-[200%] w-[80%] sm:w-[35%]">Minha Linha do Tempo</h1>
        <ul className="timelineTop mb-[200px] flex justify-evenly items-center w-[90%]">  
        {
          timelines.map((moment) => (
            <li className="itemTimeLine" key={moment.title}>
              <h1 className="title-timeline">{moment.title}</h1>
              <p className="desc-timeline">{moment.desc}</p>
            </li>
          ))
        }
        </ul>
      </div>
    </div>
  );
}
