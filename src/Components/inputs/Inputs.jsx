import React from "react";
import "./inputs.css";
function Inputs({
  moviesPerPage,
  setMoviesPerPage,
  searchText,
  setSearchText,
  setPage,
}) {
  return (
    <div className="inputs">
      <input
        type="text"
        placeholder="Search"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
          setPage()
        }}
      />
      <input
        type="number"
        value={moviesPerPage}
        onChange={(e) => {
          setMoviesPerPage(e.target.value);
          setPage();
        }}
      />
    </div>
  );
}

export default Inputs;
