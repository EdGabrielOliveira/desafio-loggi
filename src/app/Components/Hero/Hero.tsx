import React from "react";

import { VscSearch } from "react-icons/vsc";

export default function Hero() {
  return (
    <div className="w-full flex justify-center items-center mt-24 h-[90vh] bg-black/55">
      <div className="flex flex-col gap-10 justify-center items-center">
        <div className="flex flex-col">
          <h1 className="text-6xl font-light z-10 w-[44rem] font-sans text-center text-white tracking-wider leading-tight">
            Rastreie sua encomenda
          </h1>
          <p className="text-2xl text-center text-gray-200 tracking-wide font-semibold">
            Com a Loggi o rastreio do seu envio é prático
          </p>
        </div>
        <div className="flex items-center mb-10 mt-10">
          <input
            className="w-[30rem] h-14 rounded-l-lg bg-white text-gray-700 text-start pl-4 outline-none "
            placeholder="Digite o código de rastreio"
          />
          <a
            href="#"
            className="h-14 bg-sky-500 hover:bg-sky-600 w-[4rem] flex justify-center items-center text-center text-2xl font-extrabold text-white rounded-r-lg"
          >
            <VscSearch />
          </a>
        </div>
        <div className="text-gray-200 flex flex-col max-w-[40rem] text-center items-center justify-center gap-2">
          <h1 className="text-3xl font-semibold text-gray-100">
            A melhor solução de envio de encomendas para todo o Brasil.
          </h1>
          <p className="text-lg max-w-[30rem]">
            Alcance mais clientes com entregas locais e nacionais. Com a Loggi você
            economiza tempo e dinheiro
          </p>
          <a className="bg-sky-500 p-4 pr-8 pl-8 w-[16rem] mt-4 rounded-xl font-semibold hover:bg-sky-600 cursor-pointer">
            Enviar agora!
          </a>
        </div>
      </div>
    </div>
  );
}
