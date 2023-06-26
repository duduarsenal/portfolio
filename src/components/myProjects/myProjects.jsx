import React from "react";
import './myProjects.css'

export default function MyProjects(){
    return(
        <div className="myprojects w-[100%] max-w-[1360px] m-auto">
            <div className="flex flex-col">
                <h1 className="text-[200%] w-[100%] text-center font-semibold sm:m-0 mt-[15px]">Meus Projetos</h1>
                <div className="flex flex-col md:flex-row items-center justify-around my-[5px] mx-0">
                    <a className="dudureceitas projects md:w-[48%] w-[100%] md:my-0 my-[10px] sm:px-[20px] px-[10px] min-w-[300px] md:h-[570px] h-max" href="https://dudureceitas.surge.sh" target="_blank">
                            <h1 className="project-title md:w-[45%] w-[100%]">Dudu Receitas</h1>
                            <img className="project-img" src="https://ik.imagekit.io/duduzinvdlk/projetos/dudureceitas.png" alt="Site de Receitas" />
                            <p className="project-text">"Dudu Receitas" foi meu primeiro desenvolvimento. Neste projeto, me concentrei em treinar o uso de JAVASCRIPT para criar funções, estruturas, laços e uma forma de login/autenticação usando localStorage.
                            </p>
                            <span className="tecnoUsadas text-[#FFC000] text-[120%] font-semibold">Tecnologias utilizadas: HTML, CSS, JAVASCRIPT</span>
                    </a>
                    <a className="ohanacestas projects md:w-[48%] w-[100%] md:my-0 my-[10px] sm:px-[20px] px-[10px] min-w-[300px] md:h-[570px] h-max" href="https://ohanacestas.com.br" target="_blank">
                        <h1 className="project-title md:w-[45%] w-[100%]">Ohana Cestas</h1>
                        <img className="project-img" src="https://ik.imagekit.io/duduzinvdlk/projetos/ohanacestas.png" alt="Ohana Cestas Personalizadas" />
                        <p className="project-text">Projeto voltado para a divulgação da "Ohana Cestas", empresa de criação de cestas personalizadas, voltada para o público em geral. Foquei em deixar o design limpo e intuitivo,  com foco na responsividade do site.
                        </p>
                        <span className="tecnoUsadas text-[#d5a3e6] text-[120%] font-semibold">Tecnologias utilizadas: HTML, CSS, JAVASCRIPT</span>
                    </a>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-around my-[5px] mx-0">
                    <a className="emAndamento projects md:w-[48%] w-[100%] md:my-0 my-[10px] sm:px-[20px] px-[10px] min-w-[300px]" href="#">
                        <h1 className="project-title md:w-[45%] w-[100%]">Em Andamento</h1>
                        <img className="project-img" src="https://ik.imagekit.io/duduzinvdlk/projetos/inprogress?updatedAt=1686884142075" style={{width: '70%'}} alt="Projetos em andamento" />
                        <p className="project-text text-[#ff726f] font-semibold">Projetos ainda em andamento: Portfólio, CRUD com PHP/MYSQL, CRUD ReactJS/NodeJS.</p>
                    </a>
                </div>
            </div>
        </div>
    )
}