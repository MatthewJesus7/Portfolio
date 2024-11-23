import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Controle do menu mobile

  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="#">MinhaLogo</a>
        </div>

        {/* Links - Menu Desktop */}
        <ul className="hidden md:flex space-x-6">
          <li className="hover:text-gray-300">
            <a href="#home">Home</a>
          </li>
          <li className="hover:text-gray-300">
            <a href="#about">Sobre</a>
          </li>
          <li className="hover:text-gray-300">
            <a href="#services">Serviços</a>
          </li>
          <li className="hover:text-gray-300">
            <a href="#contact">Contato</a>
          </li>
        </ul>

        {/* Botão Hambúrguer - Menu Mobile */}
        <button
          className="block md:hidden text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <ul className="md:hidden bg-gray-700 space-y-2 p-4">
          <li className="hover:bg-gray-600 p-2 rounded">
            <a href="#home">Home</a>
          </li>
          <li className="hover:bg-gray-600 p-2 rounded">
            <a href="#about">Sobre</a>
          </li>
          <li className="hover:bg-gray-600 p-2 rounded">
            <a href="#services">Serviços</a>
          </li>
          <li className="hover:bg-gray-600 p-2 rounded">
            <a href="#contact">Contato</a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;