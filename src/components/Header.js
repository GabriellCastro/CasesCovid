import React from "react";
import logo from "../assets/logo.png";

function Header() {
  return (
    <header>
      <nav className="bg-gray-900 flex justify-around items-center p-4  min-w-min">
        <div>
          <img
            className="max-h-20 animate-bounce"
            src={logo}
            alt="Coodesh logo"
          />
        </div>
        <div>
          <h1 className="font-semibold  text-3xl text-center text-white tracking-tight">
            Covid Daily Cases
          </h1>
        </div>
        <div>
          <a
            href="https://github.com/GabriellCastro"
            target="_blank"
            className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
