import React from "react";
import SearchIcon from "@material-ui/icons/SearchOutlined";
import "./SearchInput.scss";

function SearchInput() {
  return (
    <div className="search__input">
      <SearchIcon className="search__inputIcon" color="action" />
      <input placeholder="Filter boards... " />
    </div>
  );
}

export default SearchInput;
