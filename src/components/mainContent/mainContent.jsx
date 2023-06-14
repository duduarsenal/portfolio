import React from 'react';
import AboutMe from './aboutMe/aboutme';
import './mainContent.css'
import ContactMe from './contato/contactMe';

export default function MainContent() {
    return ( 
        <div className='maincontent'>
        <AboutMe />
        <ContactMe />
        </div>
     );
}
