import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const CategoryMenu = (props) => {
  const { big, small } = props;

  return (
    <div className="category-menu-wrapper">
      <Link to={`/category/${big.id}`}>
        <div className="category-menu-title">
          <div className="category-menu-title-name">{big.name}</div>
          <div className="category-menu-title-arrow">
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
        </div>
      </Link>
      <div className="category-menu-list">
        {small.map((item) => (
          <Link to={`/category/${big.id}/${item.id}`}>
            <div className="category-menu-list-name">{item.name}</div>
          </Link>
        ))}
      </div>
      <Link to={`/category/${big.id}`}>
        <div className="category-menu-list-more">
          <div className="category-menu-list-more-name">더보기</div>
          <div className="category-menu-title-arrow">
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CategoryMenu;
