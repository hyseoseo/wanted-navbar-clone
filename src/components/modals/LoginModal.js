import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const LoginModal = (props) => {
  const { handleLoginModal } = props;

  return (
    <div className="login-modal" onClick={handleLoginModal}>
      <div
        className="login-modal-container"
        onClick={(event) => event.stopPropagation()}
      >
        <button className="login-modal-close-button" onClick={handleLoginModal}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <header className="login-header-logo">wanted</header>
        <div className="login-modal-title">
          직장인을 위한 커리어 플랫폼 원티드!
          <br />
          커리어 성장과 행복을 위한 여정 지금 원티드에서 시작하세요
        </div>
        <form className="email-form">
          <label htmlFor="email">
            <input
              type="text"
              placeholder="이메일을 입력해주세요"
              className="email-input"
            />
          </label>
          <button type="submit" className="login-button">
            이메일로 시작하기
          </button>
        </form>
        <button className="login-button">페이스북으로 시작하기</button>
        <button className="login-button">Apple로 시작하기</button>
        <button className="login-button">Google으로 시작하기</button>
        걱정 마세요! 여러분의 활동은 sns에 노출되지 않습니다.
      </div>
    </div>
  );
};

export default LoginModal;
