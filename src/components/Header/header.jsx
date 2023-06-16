import { React } from "react";
import "./header.css";
import { BsFillFileEarmarkPersonFill } from 'react-icons/bs'
import { BiBookBookmark } from 'react-icons/bi'
import { GoProject } from "react-icons/go";
import { MdPermContactCalendar } from 'react-icons/md'
import { Link, animateScroll as scroll } from "react-scroll";

export default function Header() {
  return (
    <header>
      <div className="headerLinks">
        <Link to="aboutme" smooth={true} duration={400} offset={-60}>
          <div>
            <BsFillFileEarmarkPersonFill className="header-icon" />
            <span className="header-text">Sobre mim</span>
          </div>
        </Link>
        <Link to="meusconhecimentos" smooth={true} duration={400} offset={-50}>
          <div>
          <BiBookBookmark className="header-icon" />
            <span className="header-text">Conhecimentos</span>
          </div>
        </Link>
        <Link to="myprojects" smooth={true} duration={400} offset={-60}>
          <div>
          <GoProject className="header-icon" />
            <span className="header-text">Projetos</span>
          </div>
        </Link>
        <Link to="contactme" smooth={true} duration={400} offset={-60}>
          <div>
          <MdPermContactCalendar className="header-icon" />
            <span className="header-text">Contato</span>
          </div>
        </Link>
      </div>
    </header>
  );
}
