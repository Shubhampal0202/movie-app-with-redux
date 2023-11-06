import React, { useEffect, useState } from "react";
import { fetchMovies } from "../../redux/action";
import { useDispatch, useSelector } from "react-redux";
import MovieCard from "../../Components/movieCard/MovieCard";
import Pagination from "../../Components/pagination/Pagination";
import Banner from "../../Components/banner/Banner";
import "./movies.css";

function Movies() {
  const [currPage, setCurrPage] = useState(1);
  const [pArr, setParr] = useState([1]);
  const dispatch = useDispatch();
  const moviesObj = useSelector((state) => state.movies);
  const { loading, moviesArr, error } = moviesObj;
  console.log("MMMMovies", moviesArr);

  useEffect(() => {
    dispatch(fetchMovies(currPage));
  }, [currPage]);

  return (
    <div>
      <Banner />
      {loading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <h1>{error}</h1>
      ) : (
        <>
          <div className="movieContainer">
            <h1 className="popular">Popular Movies</h1>
            <div className="movieCardContainer">
              {moviesArr &&
                moviesArr.map((movie) => {
                  return <MovieCard movie={movie} />;
                })}
            </div>
          </div>
          <Pagination
            currPage={currPage}
            setCurrPage={setCurrPage}
            pArr={pArr}
            setParr={setParr}
          />
        </>
      )}
    </div>
  );
}

export default Movies;
