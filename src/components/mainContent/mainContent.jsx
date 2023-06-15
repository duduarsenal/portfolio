import React from 'react';
import './mainContent.css'
import AboutMe from './aboutMe/aboutme';
import ContactMe from './contato/contactMe';
import MeusConhecimentos from './meusConhecimentos/meusConhecimentos';

export default function MainContent() {
    return ( 
        <div className='maincontent'>
        <AboutMe />
        <MeusConhecimentos />
        <ContactMe />
        </div>
     );
}
