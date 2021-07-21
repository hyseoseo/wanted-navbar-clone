import React from "react";

const CategoryContainer = (props) => {
  const bigId = props.match.params.bigid;
  const smallId = props.match.params.smallid;

  return (
    <>
      <div class="home-top">
        <h5>This is category page.</h5>
        <p>{bigId && `big category id: ${bigId}`}</p>
        <p>{smallId && `small category id: ${smallId}`}</p>
      </div>
      <div class="home-bottom">category~~~~</div>
    </>
  );
};

export default CategoryContainer;
