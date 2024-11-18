import "./App.css";
//Componentes
import Header from "./components/Header/header";
import MyKnowledge from "./components/myKnowledge/myKnowledge";
import MyProjects from "./components/myProjects/myProjects";
import SetaUp from "./components/setaUp/setaUp";
import AboutMe from "./components/aboutMe/aboutme";
//Funcionais REACT
import { useState, useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
// import Timeline from './components/About/timeline/timeline'

export default function App() {
  const [viewWidth, setViewWidth] = useState(0);

  useEffect(() => {
    if (window.innerWidth > 768) {
      setViewWidth(0);
    } else {
      setViewWidth(-55);
    }
  });

  return (
    <div className="all">
      <img
        src="https://ik.imagekit.io/duduzinvdlk/background/redspace_vert.jpg"
        className="backimg"
      />
      <div className="conteudo flex flex-col items-center">

        <div className="flex items-center justify-center w-screen h-screen text-4xl font-semibold">
          EM CONSTRUÇÃO
        </div>

        {/* <Header view_width={viewWidth}/>
        <AboutMe view_width={viewWidth}/>
        <MyKnowledge />
        <MyProjects />
        <Analytics />
        <SetaUp view_width={viewWidth} /> */}
      </div>
    </div>
  );
}
