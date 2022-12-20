import "./Card.css";
import { FaHeart } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const Card = ({ name, gif, img, id, types, favorite, setFavorite }) => {
  const favoriteHandle = () => {
    if (!favorite.includes(name)) {
      const updateFavorites = [...favorite, name];
      setFavorite(updateFavorites);
    } else {
      const favoritesIndex = favorite.indexOf(name);
      const updateFavorites = [...favorite];
      if (favoritesIndex >= 0) {
        updateFavorites.splice(favoritesIndex, 1);
        setFavorite(updateFavorites);
      }
    }
  };

  const heart = favorite.includes(name) ? (
    <FaHeart className="icon-item" style={{ color: "red" }} />
  ) : (
    <FaHeart className="icon-item" style={{ color: "black" }} />
  );

  return (
    <div className="wrapper-card">
      <div className="card">
        <div className="header">
          <button className="icon" onClick={favoriteHandle}>
            {heart}
          </button>
          <h2>#{id}</h2>
        </div>
        <div className="image">
          <img src={img} alt={name} />
          <Link to={`/info/${id}`}>
            {" "}
            <AiOutlineInfoCircle className="icon-info" />
          </Link>
        </div>
        <div className="footer">
          <div>
            <h3>{name}</h3>
            <div className="types">
              {types.map((type, index) => {
                return (
                  <div
                    className={
                      (type.type.name === "grass" && "type grass") ||
                      (type.type.name === "poison" && "type poison") ||
                      (type.type.name === "fire" && "type fire") ||
                      (type.type.name === "flying" && "type flying") ||
                      (type.type.name === "water" && "type water") ||
                      (type.type.name === "bug" && "type bug") ||
                      (type.type.name === "normal" && "type normal") ||
                      (type.type.name === "electric" && "type electric") ||
                      (type.type.name === "ground" && "type ground") ||
                      (type.type.name === "fairy" && "type fairy") ||
                      (type.type.name === "fighting" && "type fighting") ||
                      (type.type.name === "psychic" && "type psychic") ||
                      (type.type.name === "rock" && "type rock") ||
                      (type.type.name === "steel" && "type steel") ||
                      (type.type.name === "ice" && "type ice") ||
                      (type.type.name === "ghost" && "type ghost") ||
                      (type.type.name === "dragon" && "type dragon") ||
                      (type.type.name === "dark" && "type dark")
                    }
                    key={index}
                  >
                    {type.type.name}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="gif">
            <img src={gif} alt={name} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
