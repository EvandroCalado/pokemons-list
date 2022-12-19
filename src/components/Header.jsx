import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header">
        <img
          src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
          alt="Pokemon Logo"
        />
      </div>
    </div>
  );
};

export default Header;
