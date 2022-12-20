import React from "react";
import { FaHeart } from "react-icons/fa";
import "./Favorites.css";

const Favorites = ({ favorite }) => {
  return (
    <div className="favorites-container">
      <div className="favorites">
        <h4>Favoritos </h4>

        <button>
          <h4 className="favorite-number" style={{ color: "#111", display: favorite.length === 0 && "none" }}>
            {favorite.length}
          </h4>
          <FaHeart className="icon-item" style={{ color: "red" }} />
        </button>
      </div>
    </div>
  );
};

export default Favorites;
