import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { genreids } from "../../data/genreids";
import { FaSortUp } from "react-icons/fa";
import { FaSortDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./moviesTableList.css";

import FavouritePagePagination from "../favouritePagePagination/FavouritePagePagination";
function MoviesTableList({
  moviesPerPage,
  searchText,
  favCurrPage,
  setFavCurrPage,
  currFavGenre,
  setPageForHandleDelete,
}) {

 
  const dispatch = useDispatch();

  const { favMovies } = useSelector((state) => state.movies);
  let filteredArr = [];
  let numOfPage;
  if (favMovies.length > 0) {
    filteredArr = favMovies;
    if (currFavGenre !== "All genre") {
      filteredArr = favMovies.filter((movie) => {
        return genreids[movie.genre_ids[0]] === currFavGenre;
      });
    }
    if (searchText !== "") {
      filteredArr = filteredArr.filter((movie) => {
        let title = movie.original_title.toLowerCase().trim();
        let searchedText = searchText.toLowerCase().trim();
        return title.includes(searchedText);
      });
    }

    numOfPage = Math.ceil(filteredArr.length / moviesPerPage);
    const si = (favCurrPage - 1) * moviesPerPage;
    const li = si + Number(moviesPerPage);
    filteredArr = filteredArr.slice(si, li);
  
  }

  const handledelete = (id) => {
    let oldData = JSON.parse(localStorage.getItem("movies") || "[]");
    oldData = oldData.filter((m) => m.id != id)
    localStorage.setItem("movies",JSON.stringify(oldData))
    dispatch({ type: "deleteItem", payload: id });
    setPageForHandleDelete()
  };


   const sortPopularityAcs = () => {
     let temp = favMovies;
     temp.sort(function (objA, objB) {
       return objA.popularity - objB.popularity;
     });
    dispatch({ type: "sorting",payload:temp });
  };
  
  const sortPopularityDsc = () => {
        let temp = favMovies;
        temp.sort(function (objA, objB) {
          return objB.popularity - objA.popularity;
        });
        dispatch({ type: "sorting", payload: temp });
  }
  
 const sortRatingAcs = () => {
   let temp = favMovies;
   temp.sort(function (objA, objB) {
     return objA.vote_average - objB.vote_average;
   });
  dispatch({ type: "sorting", payload: temp });
  };
  
   const sortRatingDsc = () => {
     let temp = favMovies;
     temp.sort(function (objA, objB) {
       return objB.vote_average - objA.vote_average;
     });
     dispatch({ type: "sorting", payload: temp });
   };

  return (
    <div className="moviesTableListCont">
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>
              <FaSortUp className="icons" onClick={sortPopularityAcs} />
              Popularity
              <FaSortDown className="icons" onClick={sortPopularityDsc} />
            </th>
            <th>
              <FaSortUp className="icons" onClick={sortRatingAcs} />
              Rating
              <FaSortDown className="icons" onClick={sortRatingDsc} />
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {filteredArr.length > 0 &&
            filteredArr.map((favMovie) => {
              return (
                <tr>
                  <td className="imageTitle">
                    {favMovie.backdrop_path ? (
                      <Link to={`/movie/${favMovie.id}`}>
                        <img
                          src={`https://image.tmdb.org/t/p/original${favMovie.backdrop_path}`}
                          alt=""
                        />
                      </Link>
                    ) : (
                      <img
                        src="https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg"
                        alt=""
                      />
                    )}
                    <span>{favMovie.original_title}</span>
                  </td>
                  <td>{genreids[favMovie.genre_ids[0]]}</td>
                  <td>{favMovie.popularity}</td>
                  <td>{favMovie.vote_average}</td>
                  <td className="deleteBtnCont">
                    <button onClick={() => handledelete(favMovie.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <FavouritePagePagination
        moviesPerPage={moviesPerPage}
        searchText={searchText}
        favCurrPage={favCurrPage}
        setFavCurrPage={setFavCurrPage}
        numOfPage={numOfPage}
      />
    </div>
  );
}

export default MoviesTableList;
