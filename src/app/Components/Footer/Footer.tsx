import Image from "next/image";
import React from "react";

import Google from "../../../../public/gplay.svg";
import Apple from "../../../../public/apstore.svg";
import { FaFacebookF } from "react-icons/fa";
import { LiaLinkedinIn } from "react-icons/lia";
import { BsTwitter, BsYoutube } from "react-icons/bs";

export default function Footer() {
  return (
    <div className="pt-28 pb-10 pr-32 pl-32 bg-gray-100 w-full">
      <div className="flex justify-between items-center ">
        <ul className="flex text-start gap-10 text-sm">
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
        <div className="flex flex-col gap-2 items-center justify-end">
          <a>
            <Image
              alt=""
              src={Google}
              width={180}
              className="rounded-xl border-2 w-[16rem] h-[4rem]  border-gray-300 bg-transparent cursor-pointer p-2 pr-4 pl-4 shadow-md shadow-gray-400"
            />
          </a>
          <a>
            <Image
              alt=""
              src={Apple}
              width={180}
              className="rounded-xl border-2 w-[16rem] h-[4rem]  border-gray-300 bg-transparent cursor-pointer p-2 pr-4 pl-4 shadow-md shadow-gray-400"
            />
          </a>
        </div>
      </div>
      <span className="flex flex-1 border-[1px] w-full border-gray-300 mt-20 items-center justify-center" />
      <div className="flex items-center pt-8 justify-between">
        <ul className="text-gray-600 flex gap-4 text-xl">
          <li className="footer-nav">
            <FaFacebookF />
          </li>
          <li className="footer-nav">
            <LiaLinkedinIn />
          </li>
          <li className="footer-nav">
            <BsTwitter />
          </li>
          <li className="footer-nav">
            <BsYoutube />
          </li>
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
