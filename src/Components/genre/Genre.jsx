import React, { useState } from "react";
import { useSelector } from "react-redux";
import { genreids } from "../../data/genreids";
import "./genre.css";

function Genre({ currFavGenre, setCurrFavGenre, setPage }) {
  const { favMovies } = useSelector((state) => state.movies);

  const genreArr = [];

  favMovies.forEach((favMovie) => {
    if (!genreArr.includes(genreids[favMovie.genre_ids[0]])) {
      genreArr.push(genreids[favMovie.genre_ids[0]]);
    }
  });

  genreArr.unshift("All genre");


  return (
    <div className="genre">
      <ul className="listContainer">
        {genreArr.map((genreVal, idx) => {
          return (
            <li
              key={idx}
              className={genreVal == currFavGenre && "selected"}
              onClick={() => {
                setCurrFavGenre(genreVal);
                setPage();
              }}
            >
              {genreVal}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Genre;
