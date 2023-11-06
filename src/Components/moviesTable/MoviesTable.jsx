import React, { useState } from "react";
import Inputs from "../inputs/Inputs";
import MoviesTableList from "../moviesTableList/MoviesTableList";
import "./moviesTable.css";
function MoviesTable({
  currFavGenre,
  setPage,
  moviesPerPage,
  setMoviesPerPage,
  searchText,
  setSearchText,
  favCurrPage,
  setFavCurrPage,
  setPageForHandleDelete,
}) {


  return (
    <div className="moviesTable">
      <Inputs
        moviesPerPage={moviesPerPage}
        setMoviesPerPage={setMoviesPerPage}
        searchText={searchText}
        setSearchText={setSearchText}
        setPage={setPage}
      />
      <MoviesTableList
        moviesPerPage={moviesPerPage}
        searchText={searchText}
        favCurrPage={favCurrPage}
        setFavCurrPage={setFavCurrPage}
        currFavGenre={currFavGenre}
        setPageForHandleDelete={setPageForHandleDelete}
      />
    </div>
  );
}

export default MoviesTable;
