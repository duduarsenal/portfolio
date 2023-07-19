import React from "react";
import "./contactMe.css";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

export default function ContactMe() {
  const redes = [
    {
      link: "https://github.com/duduarsenal",
      link2: "github.com/duduarsenal",
      icon: <BsGithub className="github icon-contato" />,
      redeName: "GitHub",
    },
    {
      link: "https://www.linkedin.com/in/dudu-arsenal/",
      link2: "linkedin.com/in/dudu-arsenal/",
      icon: <BsLinkedin className="linkedin icon-contato" />,
      redeName: "Linkedin",
    },
    {
      link: "https://www.instagram.com/eduardo.s.s13/",
      link2: "instagram.com/eduardo.s.s13/",
      icon: <BsInstagram className="instagram icon-contato" />,
      redeName: "Instagram",
    },
  ];
  return (
    <div
      className="contactme flex flex-col items-center justify-center my-[10px] mx-auto bg-black-transparent p-[20px] md:w-[70%] w-[90%] rounded-[5px] border-2 border-solid border-red-transparent min-w-[300px] max-w-[1360px]"
      id="contactme"
    >
      <h1 className="title-contato font-medium border-b-2 border-solid border-red-transparent leading-non mb-[.5rem] w-[100%] md:w-[80%] xl:w-[50%] text-center rounded-[20px] text-[180%]">
        Entre em contato comigo!
      </h1>
      <div className="redes flex flex-col sm:flex-row w-full justify-evenly items-center h-max min-h-[8rem]">
        {redes.map((rede) => (
          <div className="flex flex-col items-center h-full justify-evenly relative">
            <a
              className="link-contato"
              href={rede.link}
              target="_blank"
              key={rede.redeName}
            >
              {rede.icon}
              <p className={rede.redeName.toLowerCase()}>{rede.redeName}</p>
            </a>
            <p className="link-rede">{rede.link2}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
