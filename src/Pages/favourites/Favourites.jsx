import React, { useEffect, useState } from "react";
import Genre from "../../Components/genre/Genre";
import MoviesTable from "../../Components/moviesTable/MoviesTable";
import { useSelector, useDispatch } from "react-redux";
import "./favourites.css";

function Favourites() {
  const [currFavGenre, setCurrFavGenre] = useState("All genre");
  const [moviesPerPage, setMoviesPerPage] = useState(5);
  const [searchText, setSearchText] = useState("");
  const [favCurrPage, setFavCurrPage] = useState(1);
  const dispatch = useDispatch();

  const setPage = () => {
    setFavCurrPage(1);
  };
  const { favMovies } = useSelector((state) => state.movies);

  const setPageForHandleDelete = () => {
    if (favMovies.length <= moviesPerPage * (favCurrPage - 1) + 1) {
      setFavCurrPage(favCurrPage - 1);
    }
  };

  useEffect(() => {
    let oldData = JSON.parse(localStorage.getItem("movies") || "[]");
    dispatch({ type: "getAllFavouritesMovies", payload: oldData });
  },[]);

  return (
    <>
      {favMovies.length > 0 ? (
        <div className="favourites">
          <Genre
            currFavGenre={currFavGenre}
            setCurrFavGenre={setCurrFavGenre}
            setPage={setPage}
          />
          <MoviesTable
            currFavGenre={currFavGenre}
            setPage={setPage}
            moviesPerPage={moviesPerPage}
            setMoviesPerPage={setMoviesPerPage}
            searchText={searchText}
            setSearchText={setSearchText}
            favCurrPage={favCurrPage}
            setFavCurrPage={setFavCurrPage}
            setPageForHandleDelete={setPageForHandleDelete}
          />
        </div>
      ) : (
        <h3 className="noFavMov">No Favourite Movies</h3>
      )}
    </>
  );
}

export default Favourites;
