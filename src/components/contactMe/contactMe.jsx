import React from 'react';
import './contactMe.css';
import { BsGithub, BsLinkedin, BsWhatsapp } from 'react-icons/bs';

export default function ContactMe() {
    return (
        <div className='contactme flex flex-col items-center justify-center my-[10px] mx-auto bg-black-transparent p-[20px] md:w-[70%] w-[90%] rounded-[5px] border-2 border-solid border-red-transparent min-w-[300px] max-w-[1360px]' id='contactme'>
            <h1 className='title-contato font-medium border-b-2 border-solid border-red-transparent leading-none mb-[10px] w-[100%] sm:w-[50%] text-center rounded-[20px] text-[180%]'>Entre em contato comigo!</h1>
            <div className="redes flex flex-col sm:flex-row w-[80%] justify-evenly items-center">
                <a className="link-contato" href='https://github.com/duduarsenal' target='_blank'>
                    <BsGithub className='github icon-contato'/>
                    <p className='github'>GitHub</p>
                </a>
                <a className="link-contato" href='https://www.linkedin.com/in/dudu-arsenal/' target='_blank'>
                    <BsLinkedin className='linkedin icon-contato'/>
                    <p className="linkedin">Linkedin</p>
                </a>
                <a className="link-contato" href='https://wa.link/d2pymh' target='_blank'>
                    <BsWhatsapp className='whatsapp icon-contato'/>
                    <p className='whatsapp'>Whatsapp</p>
                </a>
            </div>
        </div>
    );
}
