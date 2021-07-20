import React from "react";

const CategoryModal = (props) => {
  const { open, close } = props;

  return (
    <div className="category-modal" onClick={close}>
      <div
        className="category-modal-container"
        onClick={(event) => event.stopPropagation()}
        onMouseEnter={open}
        onMouseLeave={close}
      >
        <form>
          <label htmlFor="category">
            <input
              type="text"
              id="category"
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

export default CategoryModal;
