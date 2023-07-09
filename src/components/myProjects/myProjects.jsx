import React from "react";
import BoxProjects from "./boxProjects/boxProjects";
import LfMarketing from "../../assets/lfmarketing.png";
import Carousel from "@itseasy21/react-elastic-carousel";
import Item from "./Item";
import "./myProjects.css";

export default function MyProjects() {
  const breakPoints = [
    { width: 768, itemsToShow: 1 },
    { width: 1024, itemsToShow: 2 },
  ];

  return (
    <div className="myprojects w-[100%] max-w-[1360px] m-auto">
      <div className="flex flex-wrap justify-center">
        <h1 className="text-[180%] sm:text-[200%] w-[100%] text-center font-semibold sm:m-0 mt-[15px]">
          Meus Projetos
        </h1>
        <Carousel itemsToShow={2} breakPoints={breakPoints}>
          <Item>
            <BoxProjects
              projectLink="https://dudureceitas.surge.sh"
              projectName="Dudu Receitas"
              projectImg="https://ik.imagekit.io/duduzinvdlk/projetos/dudureceitas.png"
              projectDesc={
                '"Dudu Receitas" foi meu primeiro desenvolvimento. Neste projeto, me concentrei em treinar o uso de JAVASCRIPT para criar funções, estruturas, laços e uma forma de login/autenticação usando localStorage.'
              }
              projectTech="HTML5, CSS3, JavaScript"
              projectColor="text-[#FFC000]"
            />
          </Item>
          <Item>
            <BoxProjects
              projectLink="https://ohanacestas.com.br"
              projectName="Ohana Cestas"
              projectImg="https://ik.imagekit.io/duduzinvdlk/projetos/ohanacestas.png?updatedAt=1688865467291"
              projectDesc={
                'Projeto voltado para a divulgação da "Ohana Cestas", empresa de criação de cestas personalizadas, voltada para o público em geral. Foquei em deixar o design limpo e intuitivo,  com foco na responsividade do site.'
              }
              projectTech="HTML5, CSS3, JavaScript"
              projectColor="text-[#d5a3e6]"
            />
          </Item>
          <Item>
            <BoxProjects
              projectLink="https://lfmarketing.vercel.app"
              projectName="LF Marketing"
              projectImg={LfMarketing}
              projectDesc={
                "Projeto feito para vaga de Desenvolvedor Web, na qual eu teria que desenvolver uma landing page de alta conversão, possui um design minimalista e intuitivo, com rolamento suave e cores/botões chamativos"
              }
              projectTech={"ReactJS,TailWind"}
              projectColor="text-[#be2528]"
            />
          </Item>
          <Item>
            <BoxProjects
              projectLink="https://dudulinks.vercel.app"
              projectName="Meu Linktree"
              projectImg="https://ik.imagekit.io/duduzinvdlk/projetos/linktree_project.jpg"
              projectDesc="Projeto desenvolvido durante o Curso Discover da Rocketseat, tive maior foco em um design limpo e atraente, com cores chamativas e responsividade, foi feito em razão da necessidade de ter um Agregador de Links Online"
              projectTech="HTML5, CSS3, JavaScript"
              projectImgWidth="100%"
              projectColor="text-[#c5eaf9]"
            />
          </Item>
          <Item>
            <BoxProjects
              projectLink="#"
              projectName="Em Andamento"
              projectImg="https://ik.imagekit.io/duduzinvdlk/projetos/inprogress"
              projectDesc="Projetos ainda em andamento: Portfólio, CRUD com PHP/MYSQL, CRUD ReactJS/NodeJS."
              projectTech="Em desenvolvimento"
              projectImgWidth="80%"
              projectColor="text-[#ff726f]"
            />
          </Item>
        </Carousel>
      </div>
    </div>
  );
}
