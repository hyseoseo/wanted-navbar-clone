import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";

const SearchModal = (props) => {
  const { handleSearchModal } = props;
  const [keyword, setKeyword] = useState("");

  const handleInputChange = (e) => {
    setKeyword(e.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    props.history.push(`/search?query=${keyword}`);
  };

  return (
    <div className="search-modal" onClick={handleSearchModal}>
      <div
        className="search-modal-container"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className="search-modal-close-button"
          onClick={handleSearchModal}
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <div className="search-modal-content">
          <div className="search-modal-searchbar">
            <FontAwesomeIcon icon={faSearch} />
            <form onSubmit={handleSearchSubmit}>
              <label htmlFor="search">
                <input
                  type="text"
                  id="search"
                  placeholder="#태그, 회사, 포지션 검색"
                  className="searchbar-input"
                  onChange={handleInputChange}
                  required
                />
              </label>
            </form>
          </div>
          <div className="search-modal-tags">
            <div className="search-modal-tags-title">
              추천태그로 검색해보세요
            </div>
            <div className="search-modal-tags-list">
              <button>#어학교육</button>
              <button>#퇴사율5%이하</button>
              <button>#연봉상위2~%</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(SearchModal);
