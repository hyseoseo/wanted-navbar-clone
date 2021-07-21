import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const CategoryMoreMenu = (props) => {
  const { big } = props;

  return (
    <Link to={`/category/${big.id}`}>
      <div className="category-more-menu-title">
        <div className="category-menu-title-name">{big.name}</div>
        <div className="category-menu-title-arrow">
          <FontAwesomeIcon icon={faChevronRight} />
        </div>
      </div>
    </Link>
  );
};

export default CategoryMoreMenu;
