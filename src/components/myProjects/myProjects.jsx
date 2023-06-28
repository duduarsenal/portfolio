import React from "react";
import BoxProjects from "./boxProjects/boxProjects";
import LfMarketing from '../../assets/lfmarketing.png'

export default function MyProjects() {
    return (
        <div className="myprojects w-[100%] max-w-[1360px] m-auto">
            <div className="flex flex-wrap justify-center">
                <h1 className="text-[180%] sm:text-[200%] w-[100%] text-center font-semibold sm:m-0 mt-[15px]">Meus Projetos</h1>
                <BoxProjects
                    projectLink="https://dudureceitas.surge.sh"
                    projectName="Dudu Receitas"
                    projectImg="https://ik.imagekit.io/duduzinvdlk/projetos/dudureceitas.png"
                    projectDesc={"\"Dudu Receitas\" foi meu primeiro desenvolvimento. Neste projeto, me concentrei em treinar o uso de JAVASCRIPT para criar funções, estruturas, laços e uma forma de login/autenticação usando localStorage."}
                    projectTech="Tecnologias utilizadas: HTML5, CSS3 e JavaScript"
                    projectColor="text-[#FFC000]"
                />
                <BoxProjects
                    projectLink="https://ohanacestas.com.br"
                    projectName="Ohana Cestas"
                    projectImg="https://ik.imagekit.io/duduzinvdlk/projetos/ohanacestas.png"
                    projectDesc={"Projeto voltado para a divulgação da \"Ohana Cestas\", empresa de criação de cestas personalizadas, voltada para o público em geral. Foquei em deixar o design limpo e intuitivo,  com foco na responsividade do site."}
                    projectTech="Tecnologias utilizadas: HTML5, CSS3 e JavaScript"
                    projectColor="text-[#d5a3e6]"
                />
                <BoxProjects
                    projectLink="https://lfmarketing.vercel.app"
                    projectName="LF Marketing"
                    projectImg={LfMarketing}
                    projectDesc={"Projeto feito para vaga de Desenvolvedor Web, na qual eu teria que desenvolver uma landing page de alta conversão, possui um design minimalista e intuitivo, com rolamento suave e cores/botões chamativos"}
                    projectTech="Tecnologias utilizadas: Vite + ReactJS e TailWind CSS"
                    projectColor="text-[#be2528]"
                />
                <BoxProjects
                    projectLink="#"
                    projectName="Em Andamento"
                    projectImg="https://ik.imagekit.io/duduzinvdlk/projetos/inprogress"
                    projectDesc="Projetos ainda em andamento: Portfólio, CRUD com PHP/MYSQL, CRUD ReactJS/NodeJS."
                    projectTech=" "
                    projectImgWidth="80%"
                    projectColor="text-[#ff726f]"
                />
            </div>
        </div>
    )
}