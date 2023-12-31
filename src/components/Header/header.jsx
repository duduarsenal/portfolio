import { React, useState } from "react";
import "./header.css";
import { BsCodeSlash } from 'react-icons/bs'
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
      // icon: <BsFillFileEarmarkPersonFill/>,
      link: 'Sobre mim'
    },
    {
      id: 'meusconhecimentos',
      // icon: <BiBookBookmark/>,
      link: 'Tecnologias'
    },
    {
      id: 'myprojects',
      // icon: <GoProject />,
      link: 'Projetos'
    }
  ]

  return (
    <header className='md:h-[50px] w-full h-max bg-header-color z-3 justify-end' id="headerTop">
      <nav className={`navbar ${menu_class} md:flex-row headerLinks h-[100%] max-w-[1360px] flex-col items-center justify-between m-auto px-[20px]`}>
        <div className="justify-center items-center px-3 h-full hidden md:flex">
              <BsCodeSlash className="text-[310%] text-[#FF2D2D] w-10"/>
              <p className="text-[150%] mx-3 hidden lg:block">
                Meu Porfólio
              </p>
        </div>
        <ul className="flex flex-col md:flex-row md:gap-12 h-full w-full md:w-auto">
          {
            navLinks.map((links) => (
              <li key={links.id} className="[&_div]:hover:h-full cursor-pointer flex items-center text-[1.15rem] w-full md:w-auto p-6 md:py-0 md:px-4">
               <Link to={links.id} smooth={true} duration={400} offset={props.view_width} onClick={updateMenu} className="relative flex m-auto w-full py-1 px-2 gap-2 justify-center">
                  {/* <span className="text-[1.5rem] flex items-center h-full">{links.icon}</span> */}
                  <span className="flex items-center h-full font-[400] z-10">{links.link}</span>
                  <div className="bg-[#ff3232] w-full h-1 transition-all duration-300 absolute bottom-0 rounded-lg"></div>
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
