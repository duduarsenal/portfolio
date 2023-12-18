import React from "react";
import "./contactMe.css";
import { BsGithub, BsInstagram, BsLinkedin, BsTwitch } from "react-icons/bs";

export default function ContactMe() {
  const redes = [
    {
      link: "https://github.com/duduarsenal",
      icon: <BsGithub className="github icon-contato" />,
      redeName: "GitHub",
      color: 'text-[#e8eaea]',
    },
    {
      link: "https://www.linkedin.com/in/dudu-arsenal/",
      icon: <BsLinkedin className="linkedin icon-contato" />,
      redeName: "Linkedin",
      color: 'text-[#7fc5ff]',
    },
    {
      link: "https://www.instagram.com/eduardo.s.s13/",
      icon: <BsInstagram className="instagram icon-contato" />,
      redeName: "Instagram",
      color: 'text-[#E1306C]',
    },
    {
      link: "https://twitch.tv/duduzinvdlk",
      icon: <BsTwitch className="instagram icon-contato" />,
      redeName: "Twitch",
      color: 'text-[#6441a5]'
    },
  ];
  return (
      <div className="flex flex-wrap w-full justify-center xl:justify-between items-center h-max p-4 md:p-8">
        {redes.map((rede) => (
          <div key={rede.redeName} className="flex flex-col items-center h-full justify-evenly relative">
            <a
              className={`flex flex-col gap-1 items-center justify-center w-[7rem] md:w-[9rem] h-24 px-2 md:px-4 rounded-lg ${rede.color} hover:scale-110 transition-all drop-shadow-[0_0_35px_rgba(255,0,0,0.7)]`}
              href={rede.link}
              target="_blank"
              key={rede.redeName}
            >
              {rede.icon}
              <p className='text-[1.25rem]'>{rede.redeName}</p>
            </a>
          </div>
        ))}
      </div>
  );
}
