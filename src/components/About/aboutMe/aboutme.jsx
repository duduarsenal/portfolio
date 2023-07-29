import React from "react";
import "./aboutme.css";
import Typed from "typed.js";
import ContactMe from "../../contactMe/contactMe";

export default function AboutMe() {
  const typing = React.useRef(null);
  React.useEffect(() => {
    const typed = new Typed(typing.current, {
      strings: [
        "> Desenvolvedor Front-End ^1000 `<p>> npm install</p>` ^1000 `<p>> installing components...</p>` ^1000 `<p>> Fetching from source...</p>` ^1000 `> Added 2 packages, found 0 vulnerabilites` ",
        "> Desenvolvedor Web^1000 `<p>> npm install</p>` ^1000 `<p>> installing components...</p>` ^1000 `<p>> Fetching from source...</p>` ^1000 `> Added 2 packages, found 0 vulnerabilities`",
      ],
      typeSpeed: 50,
      backSpeed: 5,
      showCursor: false,
      smartBackspace: false,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div
      className="flex flex-row aboutme h-auto min-h-[500px] justify-evenly max-w-[1360px]"
      id="aboutme"
    >
      <div className="flex flex-col items-start justify-start m-auto w-[40%] min-h-[20rem]">
        <p className="text-[2rem] text-[#ff3232]">Eduardo Souza <span className="text-[0.75rem] font-[300] text-[#ff323290]">(dudu)</span></p>
        <div className="flex">
          <span className="flex flex-col text-[1.5rem] font-[300]" ref={typing}></span>
        </div>
      </div>
      <div className="flex flex-col justify-center m-auto md:m-auto w-[50%] min-h-[20rem] text-center rounded">
        <p className="text-[1.3rem] font-[300]">
          Olá, me chamo Eduardo, tenho 22 anos e sou um jovem apaixonado por
          tecnologia e desenvolvimento, quero entrar na área de programação para
          aprimorar minhas habilidades e contribuir para projetos maiores e mais
          desafiadores.
        </p>
        <div>
            <ContactMe />
        </div>
      </div>
    </div>
  );
}
