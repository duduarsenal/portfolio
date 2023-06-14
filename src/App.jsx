import './App.css'
import Header from './components/Header/header'
import MainContent from './components/mainContent/mainContent.jsx'

export default function App() {

  return (
    <div className='all'>
      <img src="src/assets/redspace vert.jpg" className='backimg'/>
      <div className='conteudo'>
        <Header />
        <MainContent />
      </div>
    </div>
  )
}
