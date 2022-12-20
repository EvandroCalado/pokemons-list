import React from "react";
import { FaHeart } from "react-icons/fa";
import "./Favorites.css";

const Favorites = ({ favorite }) => {

  return (
    <div className="favorites-container">
      <div className="favorites">
        <h4>Favoritos </h4>
        <h4>{favorite.length}</h4>
        <button>
          <FaHeart className="icon-item" style={{ color: "red" }} />
        </button>
      </div>
    </div>
  );
};

export default Favorites;
