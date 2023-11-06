import axios from "axios";
export const fetchMovies = (currPage) => {
  return async (dispatch) => {
    dispatch({ type: "fetch-movie-request" });
    try {
      const {
        data: { results },
      } = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=f8aa3ed793704c1de3ef2341a7fe971f&language=en-US&page=${currPage}`
      );

      dispatch({ type: "fetch-movie-success", payload: results });
    } catch (error) {
      dispatch({ type: "fetch-movie-failure", payload: error });
    }
  };
};
