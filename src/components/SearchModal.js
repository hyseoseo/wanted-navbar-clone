import React from "react";

const SearchModal = (props) => {
  const { handleSearchModal } = props;

  return (
    <div className="search-modal" onClick={handleSearchModal}>
      <div
        className="search-modal-container"
        onClick={(event) => event.stopPropagation()}
      >
        <form>
          <label htmlFor="search">
            <input
              type="text"
              id="search"
              placeholder="#태그, 회사, 포지션 검색"
            />
            <button type="submit">검색</button>
          </label>
        </form>
        추천태그로 검색해보세요
        <button>#어학교육</button>
        <button>#퇴사율5%이하</button>
        <button>#연봉상위2~%%</button>
      </div>
    </div>
  );
};

export default SearchModal;
