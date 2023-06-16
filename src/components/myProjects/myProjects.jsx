import React from "react";
import './myProjects.css'

export default function MyProjects(){

    const dudureceitas = () => { window.location.href = "https://dudureceitas.surge.sh" }
    const ohanacestas = () => { window.location.href = "https://ohanacestas.com.br" }
    const emandamento = () => { alert('Em Andamento') }

    return(
        <div className="myprojects">
            <div className="project-container">
                <h1 className="myprojects-title">Meus Projetos</h1>
                <div className="projects-line1">
                    <div className="dudureceitas projects" onClick={dudureceitas}>
                        <h1 className="project-title">Dudu Receitas</h1>
                        <img className="project-img" src="src/assets/dudureceitas.png" alt="Site de Receitas" />
                        <p className="project-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ad voluptate minima? Assumenda aut neque consequatur temporibus, molestiae, eligendi magni quo doloremque veniam sequi commodi explicabo sint earum facere officiis?</p>
                    </div>
                    <div className="ohanacestas projects" onClick={ohanacestas}>
                        <h1 className="project-title">Ohana Cestas</h1>
                        <img className="project-img" src="src/assets/ohanacestas.png" alt="Ohana Cestas Personalizadas" />
                        <p className="project-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum mollitia illum quidem amet, est non nemo aperiam accusamus quia omnis maxime eius quasi quisquam magni incidunt magnam pariatur vel et.</p>
                    </div>
                </div>
                <div className="projects-line2">
                    <div className="emAndamento projects" onClick={emandamento}>
                        <h1 className="project-title">Em Andamento</h1>
                        <img className="project-img" src="" alt="Projetos em andamento" />
                        <p className="project-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae molestiae odit explicabo reprehenderit praesentium expedita accusantium cumque nihil earum soluta quisquam culpa porro laboriosam, rem exercitationem ullam tenetur voluptatum repellat.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}