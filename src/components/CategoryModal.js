import React from "react";
import CategoryMenu from "./CategoryMenu";

const CategoryModal = (props) => {
  const { open, close, categories } = props;

  return (
    <div className="category-modal" onClick={close}>
      <div
        className="category-modal-container"
        onClick={(event) => event.stopPropagation()}
        onMouseEnter={open}
        onMouseLeave={close}
      >
        <div className="category-menu-container">
          {categories.map((item) => (
            <CategoryMenu big={item.big} small={item.small} />
          ))}
          <div className="category-more-menu">금융</div>
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
      big: { id: 30, name: "미디어" },
      small: [
        { id: 300, name: "크리에이터" },
        { id: 301, name: "PD" },
        { id: 302, name: "영상편집가" },
        { id: 303, name: "에디터" },
        { id: 304, name: "비디오제작" },
        { id: 305, name: "작가" },
        { id: 306, name: "출판 기획자" },
      ],
    },
    {
      id: 4,
      big: { id: 40, name: "미디어" },
      small: [
        { id: 400, name: "크리에이터" },
        { id: 401, name: "PD" },
        { id: 402, name: "영상편집가" },
        { id: 403, name: "에디터" },
        { id: 404, name: "비디오제작" },
        { id: 405, name: "작가" },
        { id: 406, name: "출판 기획자" },
      ],
    },
    {
      id: 5,
      big: { id: 50, name: "미디어" },
      small: [
        { id: 500, name: "크리에이터" },
        { id: 501, name: "PD" },
        { id: 502, name: "영상편집가" },
        { id: 503, name: "에디터" },
        { id: 504, name: "비디오제작" },
        { id: 505, name: "작가" },
        { id: 506, name: "출판 기획자" },
      ],
    },
  ],
};
