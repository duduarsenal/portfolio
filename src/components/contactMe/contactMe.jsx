import React from 'react';
import './contactme.css';
import { BsGithub, BsLinkedin, BsWhatsapp } from 'react-icons/bs';

export default function ContactMe() {
    return (
        <div className='contactme' id='contactme'>
            <h1 className='title-contato'>Entre em contato comigo!</h1>
            <div className="redes">
                <div className="link-contato">
                    <BsGithub className='github icon-contato'/>
                    <p className='github'>GitHub</p>
                </div>
                <div className="link-contato">
                    <BsLinkedin className='linkedin icon-contato'/>
                    <p className="linkedin">Linkedin</p>
                </div>
                <div className="link-contato">
                    <BsWhatsapp className='whatsapp icon-contato'/>
                    <p className='whatsapp'>Whatsapp</p>
                </div>
            </div>
        </div>
    );
}
