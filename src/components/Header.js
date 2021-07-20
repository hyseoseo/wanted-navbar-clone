import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginModal from "./LoginModal";

const Header = (props) => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = (event) => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div className="header">
      <div className="header-content">
        <Link to="/">
          <div className="header-logo">wanted</div>
        </Link>
        <div className="header-middle">
          <Link to="/events">
            <button className="navbar-menu">커리어 성장</button>
          </Link>
          <Link to="/salary">
            <button className="navbar-menu">직군별 연봉</button>
          </Link>
          <Link to="/cv">
            <button className="navbar-menu">이력서</button>
          </Link>
          <Link to="/matchup">
            <button className="navbar-menu">매치업</button>
          </Link>
          <Link to="/experts">
            <button className="navbar-menu">프리랜서</button>
          </Link>
          <Link to="/aiscore">
            <button className="navbar-menu">Ai 합격예측</button>
          </Link>
        </div>
        <div className="header-searchlogin">
          <button onClick={toggleModal} className="navbar-menu">
            회원가입/로그인
          </button>
          {modalOpen && <LoginModal handleLoginModal={toggleModal} />}
        </div>
        <div className="header-right">
          <Link to="/dashboard">
            <div className="navbar-dashboard">기업서비스</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
