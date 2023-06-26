import React from 'react';
import AboutMe from './aboutMe/aboutme';
import Timeline from './timeline/timeline';

function About() {
    return ( 
        <div className='max-w-[1360px]'>
        <AboutMe />
        <Timeline />
        </div>
     );
}

export default About;