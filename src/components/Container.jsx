import React from "react";
import "./Container.css";

const Container = ({ renderCard }) => {
  return <div className="container">{renderCard}</div>;
};

export default Container;
