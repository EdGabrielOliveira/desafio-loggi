import Image from "next/image";
import React from "react";

import Logo from "../../../../public/loggi.svg";
import NavButton from "../Buttons/NavButton";

export default function Header() {
  return (
    <div className="flex flex-row gap-4 w-full justify-between items-center pr-32 pl-32 p-8 bg-gray-100 fixed top-0 z-50">
      <div className="flex flex-row gap-8 items-center">
        <Image alt="Logo" src={Logo} width={100} height={100} />
        <ul className="flex flex-row gap-8">
          <NavButton name={"Para você"} link="#" />
          <NavButton
            name={"Para empresas"}
            options={[
              { label: "Entregador para escritórios", url: "" },
              { label: "Soluções para varejo", url: "" },
              { label: "Entrega para e-commerces", url: "" },
            ]}
          />
          <NavButton
            name={"Para entregar"}
            options={[
              { label: "Seja uma Transportadora leve", url: "" },
              { label: "Seja um entregador", url: "" },
            ]}
          />
          <NavButton
            name={"Vendas e Suporte"}
            options={[
              { label: "Fale conosco", url: "" },
              { label: "Dúvidas frequentes", url: "" },
            ]}
          />
        </ul>
      </div>
      <ul className="flex flex-row gap-8 justify-end items-center">
        <NavButton name={"Acompanhar seu Pedido"} />
        <NavButton name={"Entrar"} />
        <NavButton
          name={"Criar conta"}
          className="hover:outline hover:outline-1 hover:bg-transparent p-2 pr-4 pl-4 rounded-lg bg-sky-500
           text-white hover:font-medium w-[12em] items-center justify-center"
        />
      </ul>
    </div>
  );
}
