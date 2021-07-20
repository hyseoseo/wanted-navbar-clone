import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal";

const Header = (props) => {
  const [modalOpen, setModalOpen] = useState(false);

  const openLoginModal = (event) => {
    setModalOpen(true);
  };

  const closeLoginModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="header">
      <div className="header-content">
        <Link to="/">wanted</Link>
        <button onMouseOver={openLoginModal} onMouseOut={closeLoginModal}>
          로그인
        </button>
        {modalOpen && <Modal handleLoginModal={closeLoginModal} />}

        <Link to="/events">커리어 성장</Link>
        <Link to="/salary">직군별 연봉</Link>
        <Link to="/cv">이력서</Link>
        <Link to="/matchup">매치업</Link>
        <Link to="/experts">프리랜서</Link>
        <Link to="/aiscore">Ai 합격예측</Link>
        <Link to="/dashboard">기업서비스</Link>
      </div>
    </div>
  );
};

export default Header;
