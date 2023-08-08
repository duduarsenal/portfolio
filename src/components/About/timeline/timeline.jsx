import React, { useRef, useEffect } from "react";
import "./timeline.css";
import { useInView } from "framer-motion"


export default function Timeline() {
  const ref = useRef(null)
  const isInView = useInView(ref)

  useEffect(() => {
    //Verifica se o component esta na view ou não
  }, [isInView]);

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
    <div className={`${isInView ? 'lg:opacity-100' : 'lg:opacity-0'} timeline w-[100%] flex flex-col items-center .justify-center max-w-[1360px] pb-4 transition-all duration-300`} id="timeline">
      <h1 className="mytimeline-title font-[500] text-[1.5rem] sm:text-[2rem] px-2 py-4">Minha Linha do Tempo</h1>
      <fieldset className="timeline-content w-[97%] flex flex-col items-center border-solid border-red-transparent bg-black-transparent border-2 h-max my-[10px] rounded overflow-hidden px-2">
        <ul className="timelineTop mb-[200px] flex justify-evenly items-center w-[90%]">  
        {
          timelines.map((moment) => (
            <li className="itemTimeLine" key={moment.title}>
              <h1 className="title-timeline font-[500]">{moment.title}</h1>
              <p className="desc-timeline font-[300]">{moment.desc}</p>
            </li>
          ))
        }
        <span ref={ref}></span>
        </ul>
      </fieldset>
    </div>
  );
}
