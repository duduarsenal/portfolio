import React from 'react';
import './aboutme.css'
import Typed from 'typed.js';

export default function AboutMe() {
    return (
        <div className='aboutme'>
            <div className='perfil'>
                <img src="src/assets/diablo.jpg" alt="" className='foto-perfil'/>
                <div className="nome-perfil">
                    <p className='nome-perfil'>Eduardo Souza</p>
                    <p>Desenvolvedor Web JR</p>
                </div>
            </div>

            <div className="sobre-mim">
                <p>Olá, me chamo Eduardo, tenho 22 anos e sou apaixonado pelo mundo da computação. Desde a manutenção até desenvolvimento de softwares, meu sonho é aprender o máximo possível e aplicar meus conhecimentos para ajudar sempre que possível.</p>
            </div>
        </div>
    );
}

