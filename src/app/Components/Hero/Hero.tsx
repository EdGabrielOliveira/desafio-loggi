import React from "react";

import { VscSearch } from "react-icons/vsc";

export default function Hero() {
  return (
    <div className="w-full flex justify-center items-center h-[90vh] bg-black/55">
      <div className="flex flex-col gap-10 justify-center items-center border-2 border-white/15 w-[50rem] p-8 backdrop-blur-md rounded-lg">
        <div className="flex flex-col">
          <h1 className="text-4xl font-light z-10 w-[36rem] font-sans text-center text-white tracking-wider leading-tight">
            Rastreie sua encomenda
          </h1>
          <p className="text-center text-gray-400 tracking-wide">
            Com a Loggi o rastreio do seu envio é prático
          </p>
        </div>
        <div className="flex items-center mb-10 mt-10">
          <input
            className="w-[30rem] h-12 rounded-l-lg bg-white text-gray-700 text-start pl-4 outline-none "
            placeholder="Digite o código de rastreio"
          />
          <button className="h-12 bg-sky-500 hover:bg-sky-600 w-[3rem] flex justify-center items-center text-center text-2xl font-bold text-white rounded-r-lg">
            <VscSearch />
          </button>
        </div>
        <div className="text-gray-200 flex flex-col max-w-[40rem] text-center items-center justify-center gap-6">
          <h1 className="text-3xl">
            A melhor solução de envio de encomendas para todo o Brasil.
          </h1>
          <p className="text-lg max-w-[30rem]">
            Alcance mais clientes com entregas locais e nacionais. Com a Loggi você
            economiza tempo e dinheiro
          </p>
          <a className="bg-sky-500 p-4 pr-8 pl-8 w-[14rem] rounded-xl font-semibold hover:bg-sky-600 cursor-pointer">
            Enviar agora!
          </a>
        </div>
      </div>
    </div>
  );
}
