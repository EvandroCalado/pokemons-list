import React from "react";

const Navbar = () => {
  return (
    <div className="w-screen flex justify-center items-center my-5">
      <div className="w-8/12 flex justify-center items-center">
        <input
          className="flex-1 rounded p-2 outline-none border-none"
          type="text"
          placeholder="Pokemon"
        />
        <button className="rounded text-white bg-red-600 p-2 ml-3 hover:bg-red-800 cursor-pointer transition">
          Pesquisar
        </button>
      </div>
    </div>
  );
};

export default Navbar;
