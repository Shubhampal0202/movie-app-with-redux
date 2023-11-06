import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { json, useNavigate } from "react-router-dom";
import "./movieCard.css";
function MovieCard({ movie }) {
  const [buttonValue, setButtonValue] = useState("");
  const dispatch = useDispatch();
  const { favMovies } = useSelector((state) => state.movies);
  const navigate = useNavigate();

  const handleFavourites = (movie) => {
    let oldData = JSON.parse(localStorage.getItem("movies") || "[]");

    if (oldData.find((m) => m.id == movie.id)) {
      oldData = oldData.filter((mov) => mov.id != movie.id);
    } else {
      oldData.push(movie);
    }

    localStorage.setItem("movies", JSON.stringify(oldData));

    dispatch(
      favMovies.length > 0 && favMovies.find((f) => f.id == movie.id)
        ? { type: "removeFromFavourite", payload: movie }
        : { type: "addToFavourite", payload: movie }
    );
  };
  return (
    <div
      className="movieCard"
      onMouseEnter={() => setButtonValue(movie.id)}
      onMouseLeave={() => setButtonValue("")}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt="Img"
      />
      <h4 onClick={() => navigate(`/movie/${movie.id}`)}>
        {movie.original_title}
      </h4>
      {buttonValue && (
        <div>
          <button onClick={() => handleFavourites(movie)}>
            {favMovies.length > 0 && favMovies.find((f) => f.id == movie.id)
              ? "Remove from favourite"
              : "Add to favourite"}
          </button>
        </div>
      )}
    </div>
  );
}

export default MovieCard;

//   (
//   <div>
//     <button
//       onClick={() => dispatch({ type: "addToFavourite", payload: movie })}
//     >
//       Add to favourite
//     </button>
//   </div>
// );
