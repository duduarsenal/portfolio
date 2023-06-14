import React from 'react';
import './aboutme.css'
import Typed from 'typed.js';

export default function AboutMe() {
    return (
        <div className='aboutme'>
            <div className='perfil'>
                <img src="src/assets/diablo.jpg" alt="" className='foto-perfil'/>
                <div className="nome-perfil">
                    <p className='nome-perfil'>Eduardo Souza, 21 anos</p>
                    <p>Desenvolvedor Web JR</p>
                </div>
            </div>

            <div className="sobre-mim">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, placeat? Repudiandae placeat nobis ratione culpa, totam id, eos optio modi, corrupti alias sequi aliquid ullam eaque enim unde nisi debitis!</p>
            </div>
        </div>
    );
}

