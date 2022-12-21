import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { fetchPokemons } from "../Api/Api";
import "./Pagination.css";

const Pagination = ({ page, setPage, totalPages }) => {
  const previousClickHandle = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  const nextClickHandle = () => {
    if (page + 1 !== totalPages) {
      setPage(page + 1);
    }
  };

  return (
    <div className="pagination-container">
      <div className="pagination">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png"
          alt="Pokemon Logo"
        />
        <div className="pagination-icon">
          <FaChevronLeft
            onClick={previousClickHandle}
            className="pagination-sgv"
          />
          <p>{`${page + 1} de ${totalPages}`}</p>
          <FaChevronRight
            onClick={nextClickHandle}
            className="pagination-sgv"
          />
        </div>
      </div>
    </div>
  );
};

export default Pagination;
