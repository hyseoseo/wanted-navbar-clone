import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginModal from "./LoginModal";
import SearchModal from "./SearchModal";

const Header = (props) => {
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  const toggleLoginModal = () => {
    setLoginModalOpen(!loginModalOpen);
  };

  const toggleSearchModal = () => {
    setSearchModalOpen(!searchModalOpen);
  };

  return (
    <div className="header">
      <div className="header-content">
        <Link to="/">
          <div className="header-logo">wanted</div>
        </Link>
        <div className="header-middle">
          <Link to="/events">
            <button className="navbar-menu">탐색</button>
          </Link>
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
          <button onClick={toggleSearchModal} className="navbar-menu">
            검색
          </button>
          {searchModalOpen && (
            <SearchModal handleSearchModal={toggleSearchModal} />
          )}
          <button onClick={toggleLoginModal} className="navbar-menu">
            회원가입/로그인
          </button>
          {loginModalOpen && <LoginModal handleLoginModal={toggleLoginModal} />}
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
