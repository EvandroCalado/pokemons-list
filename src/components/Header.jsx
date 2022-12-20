import React from "react";
import Favorites from "./Favorites";
import "./Header.css";

const Header = ({favorite}) => {
  return (
    <div className="header-container">
      <div className="header">
        <img
          src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
          alt="Pokemon Logo"
        />
      </div>
      <Favorites favorite={favorite} />
    </div>
  );
};

export default Header;
