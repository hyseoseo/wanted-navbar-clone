import React from "react";
import { Link } from "react-router-dom";

const CategoryMenu = (props) => {
  const { big, small } = props;

  return (
    <div className="category-menu-wrapper">
      <div className="category-menu-title">
        <Link to={`/category/${big.id}`}>{big.name}</Link>
      </div>
      <div className="category-menu-list">
        {small.map((item) => (
          <Link to={`/category/${big.id}/${item.id}`}>{item.name}</Link>
        ))}
      </div>
      <div className="category-menu-list-more">
        <Link to={`/category/${big.id}`}>더보기</Link>
      </div>
    </div>
  );
};

export default CategoryMenu;
