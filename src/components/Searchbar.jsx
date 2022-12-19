import React from "react";
import "./Searchbar.css"

const Searchbar = ({ searchPokemons }) => {
  return (
    <div className="input-contaier">
      <input
        onChange={(e) => searchPokemons(e.target.value)}
        placeholder="Busque pokemon..."
      />
    </div>
  );
};

export default Searchbar;
