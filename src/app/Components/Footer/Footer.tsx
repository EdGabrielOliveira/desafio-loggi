import Image from "next/image";
import React from "react";

import Google from "../../../../public/gplay.svg";
import Apple from "../../../../public/apstore.svg";
import { FaFacebookF } from "react-icons/fa";
import { LiaLinkedinIn } from "react-icons/lia";
import { BsTwitter, BsYoutube } from "react-icons/bs";

import Logo from "../../../../public/loggi.svg";

export default function Footer() {
  return (
    <div className="pt-28 pb-10 pr-32 pl-32 bg-gray-100 w-full flex flex-col lg:flex xl:flex md:flex sm:hidden xs:hidden">
      <a href="#" className="cursor-pointer">
        <Image
          src={Logo}
          alt={"Logo: Coelho da Loggi"}
          className="pb-10 cursor-pointer"
        />
      </a>
      <div className="flex justify-between items-center ">
        <ul className="flex text-start gap-12 text-sm">
          <li className="flex flex-col gap-2">
            <p className="pb-4"> Para você </p>
            <a className="footer-nav"> Entregador via aplicativo </a>
          </li>
          <li className="flex flex-col gap-2">
            <div>
              <p className="pb-4"> Para empresas </p>
            </div>
            <a className="footer-nav"> Entregador para escritórios </a>
            <a className="footer-nav"> Soluções para varejo </a>
            <a className="footer-nav"> Entrega para e-commerces </a>
          </li>
          <li className="flex flex-col gap-2">
            <p className="pb-4"> Para entregar </p>
            <a className="footer-nav"> Seja uma Transportadora Leve </a>
            <a className="footer-nav"> Seja um entregador </a>
          </li>
          <li className="flex flex-col gap-2">
            <p className="pb-4"> Loggi </p>
            <a className="footer-nav"> Trabalhe conosco </a>
          </li>
          <li className="flex flex-col gap-2">
            <p className="pb-4"> Dúvidas </p>
            <a className="footer-nav"> Dúvidas frenquentes </a>
            <a className="footer-nav"> Imprensa </a>
          </li>
        </ul>
        <span className="h-[8rem] border-[1px] border-gray-200" />
        <div className="flex flex-col gap-2 items-center justify-end">
          <a href="#">
            <Image
              alt="Disponível no Google Play"
              src={Google}
              width={180}
              className="footer-apps"
            />
          </a>
          <a href="#">
            <Image
              alt="Disponível na App Store"
              src={Apple}
              width={180}
              className="footer-apps"
            />
          </a>
        </div>
      </div>
      <span className="flex flex-1 border-[1px] w-full border-gray-300 mt-14 items-center justify-center" />
      <div className="flex items-center pt-8 justify-between">
        <ul className="text-gray-600 flex gap-4 text-x items-center">
          <a href="#" className="footer-nav">
            <FaFacebookF />
          </a>
          <a href="#" className="footer-nav text-[24px]">
            <LiaLinkedinIn />
          </a>
          <a href="#" className="footer-nav">
            <BsTwitter />
          </a>
          <a href="#" className="footer-nav">
            <BsYoutube />
          </a>
        </ul>
        <ul className="text-xs flex gap-8">
          <li>
            Tel: <a className="footer-nav">4020-1460 (Nacional)</a> - 24 horas por dia
          </li>
          <li className="footer-nav">Tratamento de dados pessoas para fornecedores</li>
          <li className="footer-nav">Aviso de privacidade aos Clientes</li>
          <li className="footer-nav">Termo de uso para Clientes</li>
          <li className="footer-nav">Termo de uso para Entregadores</li>
        </ul>
      </div>
    </div>
  );
}
