import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
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
        <h2>Pokemons</h2>
        <div className="pagination-icon">
          <button onClick={previousClickHandle}>
            <FaChevronLeft className="pagination-sgv" />
          </button>
          <p>{`${page + 1} de ${totalPages}`}</p>
          <button onClick={nextClickHandle}>
            <FaChevronRight className="pagination-sgv" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
