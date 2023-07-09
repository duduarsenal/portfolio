import { React, useState } from "react";
import "./header.css";
import { BsFillFileEarmarkPersonFill, BsCodeSlash } from 'react-icons/bs'
import { BiBookBookmark } from 'react-icons/bi'
import { GoProject } from "react-icons/go";
import { MdPermContactCalendar } from 'react-icons/md'
import { Link, animateScroll as scroll } from "react-scroll";
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoCloseSharp } from 'react-icons/io5'

export default function Header(props) {

  // to change burger classes
  const [burger_class, setBurgerClass] = useState("menu-unclicked")
  const [burger_open, setBurguerOpen] = useState("burguer-not-open")
  const [menu_class, setMenuClass] = useState("hidden")
  const [isMenuClicked, setIsMenuClicked] = useState(false)

  // toggle burger menu change
  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("menu-clicked")
      setMenuClass("flex")
      setBurguerOpen("burguer-open")
    }
    else {
      setBurgerClass("menu-unclicked")
      setMenuClass("hidden")
      setBurguerOpen("burguer-not-opened")
    }
    setIsMenuClicked(!isMenuClicked)
  }

  return (
    <header className="md:h-[50px] w-[100%] h-max bg-header-color z-3 mb-[10px]" id="headerTop">
      <div className={`navbar ${menu_class} md:flex-row headerLinks h-[100%] max-w-[1360px] flex-col items-center justify-between m-auto px-[20px]`}>
        <Link to="aboutme" smooth={true} duration={400} offset={props.view_width} onClick={updateMenu}>
          <div>
            <BsFillFileEarmarkPersonFill className="header-icon" />
            <span className="header-text">Sobre mim</span>
          </div>
        </Link>
        <Link to="meusconhecimentos" smooth={true} duration={400} offset={props.view_width} onClick={updateMenu}>
          <div>
            <BiBookBookmark className="header-icon" />
            <span className="header-text">Tecnologias</span>
          </div>
        </Link>
        <div className="meuport-on flex justify-center items-center px-3">
            <BsCodeSlash className="header-icon text-[310%] text-[#FF2D2D]"/>
        </div>
        <Link to="myprojects" smooth={true} duration={400} offset={props.view_width} onClick={updateMenu}>
          <div>
            <GoProject className="header-icon" />
            <span className="header-text">Projetos</span>
          </div>
        </Link>
        <Link to="contactme" smooth={true} duration={400}  offset={props.view_width} onClick={updateMenu}>
          <div>
            <MdPermContactCalendar className="header-icon" />
            <span className="header-text">Contato</span>
          </div>
        </Link>
      </div>
      <div className="meuport flex justify-center items-center px-3">
        <BsCodeSlash className="header-icon text-[200%]"/>
        <p className="text-[150%] mx-3">
          Meu Porfólio
        </p>
      </div>
      <GiHamburgerMenu className={`${burger_class} hidden text-[250%]`} onClick={updateMenu} />
      <IoCloseSharp className={`${burger_open} hidden text-[250%]`} onClick={updateMenu} />
    </header>
  );
}
