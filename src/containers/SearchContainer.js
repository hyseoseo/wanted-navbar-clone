import React from "react";
import queryString from "query-string";

const SearchContainer = (props) => {
  const searchKeyword = queryString.parse(props.location.search);

  return (
    <>
      <div class="home-top">
        This is Search page.
        <br />
        {searchKeyword && `search keyword is ${searchKeyword.query}`}
      </div>
      <div class="home-bottom">Search~~~~</div>
    </>
  );
};

export default SearchContainer;
