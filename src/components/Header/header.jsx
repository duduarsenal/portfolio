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

  const navLinks = [
    {
      id: 'aboutme',
      icon: <BsFillFileEarmarkPersonFill/>,
      link: 'Sobre mim'
    },
    {
      id: 'meusconhecimentos',
      icon: <BiBookBookmark/>,
      link: 'Tecnologias'
    },
    {
      id: 'myprojects',
      icon: <GoProject />,
      link: 'Projetos'
    }
  ]

  return (
    <header className="md:h-[50px] w-[100%] h-max bg-header-color z-3 justify-end" id="headerTop">
      <nav className={`navbar ${menu_class} md:flex-row headerLinks h-[100%] max-w-[1360px] flex-col items-center justify-between m-auto px-[20px]`}>
        <div className="justify-center items-center px-3 h-full hidden md:flex">
              <BsCodeSlash className="text-[310%] text-[#FF2D2D]"/>
              <p className="text-[150%] mx-3 hidden lg:block">
                Meu Porfólio
              </p>
        </div>
        <ul className="flex flex-col md:flex-row md:gap-12 h-full w-full md:w-auto">
          {
            navLinks.map((links) => (
              <li key={links.id} className="hover:bg-[#9e1f278c] cursor-pointer text-[1.15rem] w-full md:w-auto p-6 md:py-0 md:px-4">
               <Link to={links.id} smooth={true} duration={400} offset={props.view_width} onClick={updateMenu} className="flex h-full gap-2 justify-center">
                  <span className="text-[1.5rem] flex items-center h-full">{links.icon}</span>
                  <span className="flex items-center h-full font-[300]">{links.link}</span>
               </Link>
              </li>
            ))
          }
        </ul>
      </nav>
      <GiHamburgerMenu className={`${burger_class} hidden text-[250%]`} onClick={updateMenu} />
      <IoCloseSharp className={`${burger_open} hidden text-[250%]`} onClick={updateMenu} />
    </header>
  );
}
