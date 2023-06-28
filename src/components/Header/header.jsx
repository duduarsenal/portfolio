import { React } from "react";
import "./header.css";
import { BsFillFileEarmarkPersonFill } from 'react-icons/bs'
import { BiBookBookmark } from 'react-icons/bi'
import { GoProject } from "react-icons/go";
import { MdPermContactCalendar } from 'react-icons/md'
import { Link, animateScroll as scroll } from "react-scroll";

export default function Header() {
  return (
    <header className="md:h-[50px] w-[100%] h-max bg-header-color z-3 mb-[10px]" id="headerTop">
      <div className="md:flex-row headerLinks h-[100%] max-w-[1360px] flex flex-col items-center justify-between m-auto px-[20px]">
        <Link to="aboutme" smooth={true} duration={400}>
          <div>
            <BsFillFileEarmarkPersonFill className="header-icon" />
            <span className="header-text">Sobre mim</span>
          </div>
        </Link>
        <Link to="meusconhecimentos" smooth={true} duration={400}>
          <div>
          <BiBookBookmark className="header-icon" />
            <span className="header-text">Tecnologias</span>
          </div>
        </Link>
        <Link to="myprojects" smooth={true} duration={400}>
          <div>
          <GoProject className="header-icon" />
            <span className="header-text">Projetos</span>
          </div>
        </Link>
        <Link to="contactme" smooth={true} duration={400}>
          <div>
          <MdPermContactCalendar className="header-icon" />
            <span className="header-text">Contato</span>
          </div>
        </Link>
      </div>
    </header>
  );
}
