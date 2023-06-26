import './App.css'
import Header from './components/Header/header'
import About from './components/About/about'
import MyKnowledge from './components/myKnowledge/myKnowledge'
import MyProjects from './components/myProjects/myProjects'
import ContactMe from './components/contactMe/contactMe'
import SetaUp from './components/setaUp/setaUp'

export default function App() {
  return (
    <div className='all'>
      <img src="https://ik.imagekit.io/duduzinvdlk/background/redspace_vert.jpg" className='backimg'/>
      <div className='conteudo'>
        <Header />
        <div className='content1-site flex items-center'>
          <About />
          <MyKnowledge />
        </div>
        <MyProjects />
        <ContactMe />
        <SetaUp />
      </div>
    </div>
  )
}
