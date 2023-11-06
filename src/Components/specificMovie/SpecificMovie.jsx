import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { genreids } from "../../data/genreids";
import "./specificMovie.css";
function SpecificMovie() {
  const params = useParams();
  const dispatch = useDispatch();
  const { specificMovie, moviesArr } = useSelector((state) => state.movies);
  
  useEffect(() => {
    dispatch({ type: "specificMovie", payload: params.id });
  }, []);
 
  return (
    <div className="movieCont">
      {specificMovie && (
        <>
          <div className="imageCont">
            <img
              src={`https://image.tmdb.org/t/p/w500/${specificMovie.poster_path}`}
              alt=""
            />
          </div>

          <div className="movieDetails">
            <div className="title">
              <h3>
                {specificMovie.title}&nbsp;
                <span>
                  (
                  {specificMovie != "" &&
                    specificMovie.release_date.split("-")[0]}
                  )
                </span>
              </h3>
            </div>

            <div className="release">
              <h5>
                {" "}
                <span>R</span>
                {specificMovie.release_date}
              </h5>
              <ul>
                <li>
                  {genreids[specificMovie != "" && specificMovie.genre_ids[0]]}
                </li>
              </ul>
            </div>

            <div className="overview" id="overview">
              <h3>Overview </h3>
              <div>{specificMovie.overview}</div>
            </div>

            <div className="movieRating">
              <h3>Rating:</h3>
              <span>{specificMovie.vote_average}</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default SpecificMovie;
