import React from "react";
import { Link } from "react-router-dom";

const CategoryMenu = (props) => {
  const { big, small } = props;

  return (
    <div className="category-menu-wrapper">
      <div>{big.name}</div>
      {small.map((item) => (
        <div>{item.name}</div>
      ))}
    </div>
  );
};

export default CategoryMenu;
