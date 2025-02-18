import Image from "next/image";
import React from "react";

import Logo from "../../../../public/loggi.svg";
import NavButton from "../Buttons/NavButton";

export default function Header() {
  return (
    <div className="hidden md:flex flex-row gap-4 w-full justify-between items-center lg:pr-32 lg:pl-32 md:pl-28 md:pr-28 p-8 bg-gray-100 fixed top-0 z-50">
      <div className="flex flex-row gap-8 items-center">
        <a href="#" className="cursor-pointer xl:pr-8 lg:pr-2 hidden lg:flex xl:flex">
          <Image alt="Logo: Coelho da Loggi" src={Logo} width={100} height={100} />
        </a>
        <ul className="flex flex-row xl:gap-8 lg:gap-4 gap-4">
          <NavButton name={"Para você"} link="#" />
          <NavButton
            name={"Para empresas"}
            options={[
              { label: "Entregador para escritórios", url: "#" },
              { label: "Soluções para varejo", url: "#" },
              { label: "Entrega para e-commerces", url: "#" },
            ]}
          />
          <NavButton
            name={"Para entregar"}
            options={[
              { label: "Seja uma Transportadora leve", url: "#" },
              { label: "Seja um entregador", url: "#" },
            ]}
          />
          <NavButton
            name={"Vendas e Suporte"}
            options={[
              { label: "Fale conosco", url: "#" },
              { label: "Dúvidas frequentes", url: "#" },
            ]}
          />
        </ul>
      </div>
      <ul className="flex flex-row xl:gap-8 lg:gap-4 gap-4 justify-end items-center">
        <NavButton name={"Acompanhar seu Pedido"} link="#" />
        <NavButton name={"Entrar"} link="#" />
        <NavButton
          name={"Criar conta"}
          link="#"
          className="hover:outline hover:outline-1 hover:bg-transparent p-2 pr-4 pl-4 rounded-lg bg-sky-500
           text-white hover:font-medium xl:w-[12rem] lg:w-[10rem] items-center justify-center md:text-xs lg:text-sm xl:text-base"
        />
      </ul>
    </div>
  );
}
