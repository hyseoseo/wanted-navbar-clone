import React from "react";
import CategoryMenu from "./CategoryMenu";
import CategoryMoreMenu from "./CategoryMoreMenu";

const CategoryModal = (props) => {
  const { open, close, categories, mores } = props;

  return (
    <div className="category-modal" onClick={close}>
      <div
        className="category-modal-container"
        onClick={(event) => event.stopPropagation()}
        onMouseEnter={open}
        onMouseLeave={close}
      >
        <div className="category-menu-container" onClick={close}>
          <div className="category-menus">
            {categories.map((item) => (
              <CategoryMenu big={item.big} small={item.small} />
            ))}
          </div>
          <div className="category-more-menu">
            {mores.map((item) => (
              <CategoryMoreMenu big={item.big} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryModal;

CategoryModal.defaultProps = {
  categories: [
    {
      id: 1,
      big: { id: 10, name: "영업" },
      small: [
        { id: 100, name: "기업영업" },
        { id: 101, name: "외부영업" },
        { id: 102, name: "영업관리자" },
        { id: 103, name: "기술영업" },
        { id: 104, name: "주요고객사 담당자" },
        { id: 105, name: "솔루션 컨설턴트" },
        { id: 106, name: "해외영업" },
      ],
      show: true,
    },
    {
      id: 2,
      big: { id: 20, name: "미디어" },
      small: [
        { id: 200, name: "크리에이터" },
        { id: 201, name: "PD" },
        { id: 202, name: "영상편집가" },
        { id: 203, name: "에디터" },
        { id: 204, name: "비디오제작" },
        { id: 205, name: "작가" },
        { id: 206, name: "출판 기획자" },
      ],
    },
    {
      id: 3,
      big: { id: 30, name: "엔지니어링" },
      small: [
        { id: 300, name: "기계 엔지니어" },
        { id: 301, name: "전자 엔지니어" },
        { id: 302, name: "전기기계 공학자" },
        { id: 303, name: "전기 엔지니어" },
        { id: 304, name: "로봇 자동화" },
        { id: 305, name: "제품 엔지니어" },
        { id: 306, name: "QA 엔지니어" },
      ],
    },
    {
      id: 4,
      big: { id: 40, name: "인사" },
      small: [
        { id: 400, name: "인사담당" },
        { id: 401, name: "리크루터" },
        { id: 402, name: "조직문화" },
        { id: 403, name: "평가보상" },
        { id: 404, name: "헤드헌터" },
        { id: 405, name: "HRBP" },
        { id: 406, name: "급여담당" },
      ],
    },
    {
      id: 5,
      big: { id: 50, name: "게임 제작" },
      small: [
        { id: 500, name: "게임 기획자" },
        { id: 501, name: "그래픽 디자이너" },
        { id: 502, name: "모바일 게임 개발자" },
        { id: 503, name: "게임 아티스트" },
        { id: 504, name: "게임 클라이언트 개발자" },
        { id: 505, name: "게임 서버 개발자" },
        { id: 506, name: "유니티 개발자" },
      ],
    },
    {
      id: 6,
      big: { id: 60, name: "금융" },
      small: [
        { id: 600, name: "게임 기획자" },
        { id: 601, name: "그래픽 디자이너" },
        { id: 602, name: "모바일 게임 개발자" },
        { id: 603, name: "게임 아티스트" },
        { id: 604, name: "게임 클라이언트 개발자" },
        { id: 605, name: "게임 서버 개발자" },
        { id: 606, name: "유니티 개발자" },
      ],
    },
  ],
  mores: [
    { id: 1, big: { id: 60, name: "금융" } },
    { id: 2, big: { id: 70, name: "제조생산" } },
    { id: 3, big: { id: 80, name: "물류" } },
    { id: 4, big: { id: 90, name: "의료,바이오" } },
    { id: 5, big: { id: 16, name: "교육" } },
    { id: 6, big: { id: 17, name: "법률" } },
    { id: 7, big: { id: 18, name: "식음료" } },
    { id: 8, big: { id: 19, name: "건설" } },
    { id: 9, big: { id: 14, name: "복지" } },
  ],
};
