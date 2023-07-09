import './App.css'
import Header from './components/Header/header'
import About from './components/About/about'
import MyKnowledge from './components/myKnowledge/myKnowledge'
import MyProjects from './components/myProjects/myProjects'
import ContactMe from './components/contactMe/contactMe'
import SetaUp from './components/setaUp/setaUp'
import { useState } from 'react'
import { useEffect } from 'react'

export default function App() {
  const [view_width, setViewWidth] = useState(0)

  useEffect(() => {
    if(window.innerWidth > 768){
      setViewWidth(0)
    } else {
      setViewWidth(-55)
    }
  })
  return (
    <div className='all'>
      <img src="https://ik.imagekit.io/duduzinvdlk/background/redspace_vert.jpg" className='backimg'/>
      <div className='conteudo'>
        <Header view_width={view_width}/>
        <div className='content1-site flex items-center'>
          <About />
          <MyKnowledge />
        </div>
        <MyProjects />
        <ContactMe />
        <SetaUp view_width={view_width}/>
      </div>
    </div>
  )
}
