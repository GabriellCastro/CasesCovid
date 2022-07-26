import React from "react";
import logo from "../assets/logo.png";

function Loading() {
  return (
    <div className="flex justify-center items-center flex-wrap p-4 min-h-screen">
      <div>
        <img
          className="max-h-20 animate-bounce"
          src={logo}
          alt="Coodesh logo"
        />
      </div>
    </div>
  );
}

export default Loading;
