import React from "react";
import './myProjects.css'

export default function MyProjects(){
    return(
        <div className="myprojects w-[100%] py-0 px-[20px]">
            <div className="flex flex-col">
                <h1 className="text-[200%] w-[100%] text-center font-semibold sm:m-0 mt-[15px]">Meus Projetos</h1>
                <div className="flex flex-col md:flex-row items-center justify-around my-[5px] mx-0">
                    <a className="dudureceitas projects md:w-[45%] w-[100%] md:my-0 my-[10px] sm:px-[20px] px-[10px] min-w-[300px]" href="https://dudureceitas.surge.sh" target="_blank">
                            <h1 className="project-title md:w-[45%] w-[100%]">Dudu Receitas</h1>
                            <img className="project-img" src="https://ik.imagekit.io/duduzinvdlk/projetos/dudureceitas.png" alt="Site de Receitas" />
                            <p className="project-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ad voluptate minima? Assumenda aut neque consequatur temporibus, molestiae, eligendi magni quo doloremque veniam sequi commodi explicabo sint earum facere officiis?</p>
                    </a>
                    <a className="ohanacestas projects md:w-[45%] w-[100%] md:my-0 my-[10px] sm:px-[20px] px-[10px] min-w-[300px]" href="https://ohanacestas.com.br" target="_blank">
                        <h1 className="project-title md:w-[45%] w-[100%]">Ohana Cestas</h1>
                        <img className="project-img" src="https://ik.imagekit.io/duduzinvdlk/projetos/ohanacestas.png" alt="Ohana Cestas Personalizadas" />
                        <p className="project-text ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum mollitia illum quidem amet, est non nemo aperiam accusamus quia omnis maxime eius quasi quisquam magni incidunt magnam pariatur vel et.</p>
                    </a>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-around my-[5px] mx-0">
                    <a className="emAndamento projects md:w-[45%] w-[100%] md:my-0 my-[10px] sm:px-[20px] px-[10px] min-w-[300px]" href="#">
                        <h1 className="project-title md:w-[45%] w-[100%]">Em Andamento</h1>
                        <img className="project-img" src="https://ik.imagekit.io/duduzinvdlk/projetos/inprogress?updatedAt=1686884142075" style={{width: '70%'}} alt="Projetos em andamento" />
                        <p className="project-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae molestiae odit explicabo reprehenderit praesentium expedita accusantium cumque nihil earum soluta quisquam culpa porro laboriosam, rem exercitationem ullam tenetur voluptatum repellat.</p>
                    </a>
                </div>
            </div>
        </div>
    )
}