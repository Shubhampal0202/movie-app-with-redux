const initialState = {
  loading: false,
  moviesArr: [],
  favMovies: [],
  error: "",
  specificMovie: "",
};

function moviesReducer(state = initialState, action) {
  switch (action.type) {
    case "fetch-movie-request":
      return { ...state, loading: true };
    case "fetch-movie-success":
      return { ...state, loading: false, moviesArr: action.payload };
    case "fetch-movie-failure":
      return { ...state, loading: false, error: action.payload };
    case "addToFavourite":
      return { ...state, favMovies: [...state.favMovies, action.payload] };
    case "removeFromFavourite":
      return {
        ...state,
        favMovies: state.favMovies.filter((f) => f.id != action.payload.id),
      };
    case "getAllFavouritesMovies":
      return {
        ...state,
        favMovies: action.payload,
      };
    case "deleteItem":
      console.log("Action", action.payload);
      return {
        ...state,
        favMovies: state.favMovies.filter((f) => f.id != action.payload),
      };
    case "sorting":
      return { ...state, favMovies: action.payload };
    case "specificMovie":
      return {
        ...state,
        specificMovie: state.moviesArr.find((m) => m.id == action.payload),
      };
    default:
      return state;
  }
}

export default moviesReducer;
