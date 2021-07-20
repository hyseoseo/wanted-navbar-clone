import React from "react";

const LoginModal = (props) => {
  const { handleLoginModal } = props;

  return (
    <div className="login-modal" onClick={handleLoginModal}>
      <div
        className="login-modal-container"
        onClick={(event) => event.stopPropagation()}
      >
        <header>wanted</header>
        <h1>직장인을 위한 커리어 플랫폼 원티드!</h1>
        커리어 성장과 행복을 위한 여정 지금 원티드에서 시작하세요
        <form>
          <label htmlFor="email">
            <input type="text" placeholder="이메일을 입력해주세요" />
            <button type="submit">이메일로 시작하기</button>
          </label>
        </form>
        <button>페이스북으로 시작하기</button>
        <button>Apple로 시작하기</button>
        <button>Google으로 시작하기</button>
        걱정 마세요! 여러분의 활동은 sns에 노출되지 않습니다.
        <button className="login-modal-close-button" onClick={handleLoginModal}>
          close
        </button>
      </div>
    </div>
  );
};

export default LoginModal;
