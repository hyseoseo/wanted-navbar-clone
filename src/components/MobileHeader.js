import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars } from "@fortawesome/free-solid-svg-icons";

const MobileHeader = () => {
  return (
    <>
      <div className="mobile-header">
        <Link to="/">
          <div className="header-logo">wanted</div>
        </Link>
        <div className="mobile-register-button">회원가입하기</div>
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
          <div className="mobile-navbar-right-menu">
            <FontAwesomeIcon icon={faSearch} />
          </div>
          <div className="mobile-navbar-right-menu">
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
      </navbar>
    </>
  );
};

export default MobileHeader;
