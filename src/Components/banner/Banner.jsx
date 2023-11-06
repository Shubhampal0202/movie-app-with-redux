import React from "react";
// import { movies } from "../../data/getMovies";
import "./banner.css";
import { useSelector } from "react-redux";
function Banner() {
  let { moviesArr } = useSelector((state) => state.movies);
  console.log("movieeeeeeee", moviesArr);
  let movie;
  if (moviesArr.length > 0) {
    movie = moviesArr[11];
  }
  return (
    <>
      {movie && (
        <div className="banner">
          <img
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
            alt={movie.original_title}
          />
          <h3 className="bannerTitle">{movie.original_title}</h3>
          <p className="bannerOverView">{movie.overview}</p>
        </div>
      )}
    </>
  );
}

export default Banner;
