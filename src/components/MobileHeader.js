import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars } from "@fortawesome/free-solid-svg-icons";
import SearchModal from "./SearchModal";
import BarmenuModal from "./BarmenuModal";
import LoginModal from "./LoginModal";

const MobileHeader = (props) => {
  const { search, searchModalOpen, login, loginModalOpen } = props;
  const [barmenuModalOpen, setBarmenuModalOpen] = useState(false);

  const toggleBarmenuModal = () => {
    setBarmenuModalOpen(!barmenuModalOpen);
  };
  return (
    <>
      <div className="mobile-header">
        <Link to="/">
          <div className="header-logo">wanted</div>
        </Link>
        <button className="mobile-register-button" onClick={login}>
          회원가입하기
          {loginModalOpen && <LoginModal handleLoginModal={login} />}
        </button>
      </div>
      <navbar className="mobile-navbar">
        <div className="mobile-navbar-left">
          <Link to="/">
            <div className="mobile-navbar-left-menu">홈</div>
          </Link>
          <Link to="/category">
            <div className="mobile-navbar-left-menu">탐색</div>
          </Link>
          <Link to="/events">
            <div className="mobile-navbar-left-menu">커리어 성장</div>
          </Link>
        </div>
        <div className="mobile-navbar-right">
          <button className="mobile-navbar-right-menu" onClick={search}>
            <FontAwesomeIcon icon={faSearch} />
            {searchModalOpen && <SearchModal handleSearchModal={search} />}
          </button>
          <button
            className="mobile-navbar-right-menu"
            onClick={toggleBarmenuModal}
          >
            <FontAwesomeIcon icon={faBars} />
            {barmenuModalOpen && (
              <BarmenuModal handleBarmenuModal={toggleBarmenuModal} />
            )}
          </button>
        </div>
      </navbar>
    </>
  );
};

export default MobileHeader;
