import React from "react";
import "./setaUp.css";
import { AiOutlineArrowUp } from "react-icons/ai";
import { Link, animateScroll as scroll } from "react-scroll";

export default function SetaUp(props) {
  const setaUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="scrollToTop">
      <Link to="aboutme" smooth={true} offset={-50} duration={400}>
        <div id="seta_up">
          <AiOutlineArrowUp className="setaUp" />
        </div>
      </Link>
    </div>
  );
}
