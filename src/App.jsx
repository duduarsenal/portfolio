import './App.css'
import Header from './components/Header/header'
import AboutMe from './components/aboutMe/aboutme'
import MeusConhecimentos from './components/meusConhecimentos/meusConhecimentos'
import ContactMe from './components/contactMe/contactMe'
import MyProjects from './components/myProjects/myProjects'
import SetaUp from './components/setaUp/setaUp'
import Timeline from './components/timeline/timeline'

export default function App() {
  return (
    <div className='all'>
      <img src="https://ik.imagekit.io/duduzinvdlk/background/redspace_vert.jpg" className='backimg'/>
      <div className='conteudo'>
        <Header />
        <div className='content1-site'>
          <AboutMe />
          <Timeline />
          <MeusConhecimentos />
        </div>
        <MyProjects />
        <ContactMe />
        <SetaUp />
      </div>
    </div>
  )
}
