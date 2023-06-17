import React from 'react';
import './aboutme.css'
import Typed from 'typed.js';

export default function AboutMe() {
    return (
        <div className='md:flex-row aboutme flex flex-col h-max justify-evenly' id='aboutme'>
            <div className='md:flex-row m-auto perfil flex flex-col items-center justify-around p-2.5 rounded text-[120%] font-medium w-[80%] md:w-[40%] md:h-[100%] bg-black-transparent'>
                <img src="https://ik.imagekit.io/duduzinvdlk/perfil/dudu.jpg" alt="Foto de Perfil" className='foto-perfil w-36 rounded-lg border-2 border-solid border-black/50'/>
                <div className='text-center flex flex-col'>
                    <p>Eduardo Souza,&nbsp;</p>
                    <p>Desenvolvedor Web</p>
                </div>
            </div>

            <div className="m-auto md:m-auto md:w-[55%] my-[10px] sobre-mim w-[95%] flex items-center text-left p-[10px] rounded-[3px] text-[120%] font-medium bg-black-transparent">
                <p>Olá, me chamo Eduardo, tenho 22 anos e sou apaixonado pelo mundo da computação. Desde a manutenção até desenvolvimento de softwares, minha meta atual é aprender o máximo possivel e do melhor jeito possivel, evoluindo cada vez mais no desenvolvimento web e subindo meu nível como programador.</p>
            </div>
        </div>
    );
}

