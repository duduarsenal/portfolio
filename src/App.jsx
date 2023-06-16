import './App.css'
import Header from './components/Header/header'
import AboutMe from './components/aboutMe/aboutme'
import MeusConhecimentos from './components/meusConhecimentos/meusConhecimentos'
import ContactMe from './components/contactMe/contactMe'
import MyProjects from './components/myProjects/myProjects'

export default function App() {
  return (
    <div className='all'>
      <img src="src/assets/redspace vert.jpg" className='backimg'/>
      <div className='conteudo'>
        <Header />
        <p style={{paddingTop: '60px'}}></p>
        <AboutMe />
        <MeusConhecimentos />
        <MyProjects />
        <ContactMe />
        <ContactMe />
        <ContactMe />
      </div>
    </div>
  )
}
