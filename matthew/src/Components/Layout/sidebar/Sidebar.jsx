import React, { useState } from "react";
import Button from "./Button";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex">
      {/* Botão importado */}
      <Button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Fechar" : "Abrir"} Menu
      </Button>

      <div
        className={`fixed top-0 left-0 h-full bg-gray-800 text-white w-64 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <h2 className="text-xl font-bold p-4">Menu Lateral</h2>
        <ul className="space-y-2 p-4">
          <li className="hover:bg-gray-700 p-2 rounded-md">
            <a href="#">Home</a>
          </li>
          <li className="hover:bg-gray-700 p-2 rounded-md">
            <a href="#">Sobre</a>
          </li>
          <li className="hover:bg-gray-700 p-2 rounded-md">
            <a href="#">Serviços</a>
          </li>
          <li className="hover:bg-gray-700 p-2 rounded-md">
            <a href="#">Contato</a>
          </li>
        </ul>
      </div>

      <div className="flex-1 p-4 ml-64">
        <h1 className="text-2xl font-bold">Conteúdo Principal</h1>
        <p>Aqui fica o conteúdo principal da página.</p>
      </div>
    </div>
  );
};

export default Sidebar;