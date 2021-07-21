import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const BarmenuModal = (props) => {
  const { handleBarmenuModal } = props;

  return (
    <div className="barmenu-modal" onClick={handleBarmenuModal}>
      <div
        className="barmenu-modal-container"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className="barmenu-modal-close-button"
          onClick={handleBarmenuModal}
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <form>
          <label htmlFor="barmenu">
            <input
              type="text"
              id="barmenu"
              placeholder="#태그, 회사, 포지션 검색"
            />
            <button type="submit">검색</button>
          </label>
        </form>
        추천태그로 검색해보세요
        <button>#어학교육</button>
        <button>#퇴사율5%이하</button>
        <button>#연봉상위2~%</button>
      </div>
    </div>
  );
};

export default BarmenuModal;
